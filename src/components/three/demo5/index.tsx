/*
 * 会动手打人的打工人
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-23 17:26:03
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import React, { useRef } from "react";
import * as THREE from "three";
import Stats from "three/addons/libs/stats.module.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useMount } from "hooks/useMount";
import "./index.scss";
import { useUnMount } from "hooks/useUnMount";

export default function FirthithUseThreejs() {
  const cameraRef = useRef<any>(null);
  const modelRef = useRef<any>(null);
  const mixerRef = useRef<any>(null);

  const rendererRef = useRef<any>(null);
  const clockRef = useRef<any>(null);
  const sceneRef = useRef<any>(null);
  const statsRef = useRef<any>(null);
  const previousAction = useRef<any>(null);
  const activeAction = useRef<any>(null);
  const guiRef = useRef<any>(null);
  const actions = useRef<any>({});
  const api = useRef<any>({ state: "Walking" });
  useMount(() => {
    init();
  });
  useUnMount(() => {
    if (guiRef.current) {
      guiRef.current.destroy();
      guiRef.current = null;
    }
  });

  function init() {
    const dom = document.getElementById("three_demo5") as HTMLElement;

    cameraRef.current = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.25,
      100,
    );
    cameraRef.current.position.set(-5, 3, 10);
    cameraRef.current.lookAt(0, 2, 0);

    sceneRef.current = new THREE.Scene();
    sceneRef.current.background = new THREE.Color(0xe0e0e0);
    sceneRef.current.fog = new THREE.Fog(0xe0e0e0, 20, 100);

    clockRef.current = new THREE.Clock();

    // lights

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 3);
    hemiLight.position.set(0, 20, 0);
    sceneRef.current.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 3);
    dirLight.position.set(0, 20, 10);
    sceneRef.current.add(dirLight);

    // ground

    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2000, 2000),
      new THREE.MeshPhongMaterial({ color: 0xcbcbcb, depthWrite: false }),
    );
    mesh.rotation.x = -Math.PI / 2;
    sceneRef.current.add(mesh);

    const grid = new THREE.GridHelper(200, 40, 0x000000, 0x000000);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    sceneRef.current.add(grid);

    // model

    const loader = new GLTFLoader();
    loader.load(
      "models/RobotExpressive.glb",
      function (gltf: any) {
        modelRef.current = gltf.scene;
        sceneRef.current.add(modelRef.current);

        createGUI(gltf.animations);
      },
      undefined,
      function (e: any) {
        console.error(e);
      },
    );

    rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.setAnimationLoop(animate);
    dom.appendChild(rendererRef.current.domElement);

    window.addEventListener("resize", onWindowResize);

    // stats
    statsRef.current = new Stats();
    dom.appendChild(statsRef.current.dom);
  }

  function createGUI(animations: any) {
    const model = modelRef.current;
    const states = [
      "Idle",
      "Walking",
      "Running",
      "Dance",
      "Death",
      "Sitting",
      "Standing",
    ];
    const emotes = ["Jump", "Yes", "No", "Wave", "Punch", "ThumbsUp"];
    guiRef.current = new GUI();
    const gui = guiRef.current;
    mixerRef.current = new THREE.AnimationMixer(model);

    for (let i = 0; i < animations.length; i++) {
      const clip = animations[i];
      const action = mixerRef.current.clipAction(clip);
      actions.current[clip.name] = action;

      if (emotes.indexOf(clip.name) >= 0 || states.indexOf(clip.name) >= 4) {
        action.clampWhenFinished = true;
        action.loop = THREE.LoopOnce;
      }
    }

    // states

    const statesFolder = gui.addFolder("States");

    const clipCtrl = statesFolder.add(api.current, "state").options(states);

    clipCtrl.onChange(function () {
      fadeToAction(api.current.state, 0.5);
    });

    statesFolder.open();

    // emotes
    const emoteFolder = gui.addFolder("Emotes");

    function createEmoteCallback(name: string) {
      api.current[name] = function () {
        fadeToAction(name, 0.2);

        mixerRef.current.addEventListener("finished", restoreState);
      };

      emoteFolder.add(api.current, name);
    }

    function restoreState() {
      mixerRef.current.removeEventListener("finished", restoreState);

      fadeToAction(api.current.state, 0.2);
    }

    for (let i = 0; i < emotes.length; i++) {
      createEmoteCallback(emotes[i]);
    }

    emoteFolder.open();

    // expressions

    const face = model.getObjectByName("Head_4");

    const expressions = Object.keys(face.morphTargetDictionary);
    const expressionFolder = gui.addFolder("Expressions");

    for (let i = 0; i < expressions.length; i++) {
      expressionFolder
        .add(face.morphTargetInfluences, i, 0, 1, 0.01)
        .name(expressions[i]);
    }

    activeAction.current = actions.current["Walking"];
    activeAction.current.play();

    expressionFolder.open();
  }

  function fadeToAction(name: string, duration: number) {
    previousAction.current = activeAction.current;
    activeAction.current = actions.current[name];

    if (previousAction.current !== activeAction.current) {
      previousAction.current.fadeOut(duration);
    }

    activeAction.current
      .reset()
      .setEffectiveTimeScale(1)
      .setEffectiveWeight(1)
      .fadeIn(duration)
      .play();
  }

  function onWindowResize() {
    const camera = cameraRef.current;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
  }

  //
  function animate() {
    const dt = clockRef.current.getDelta();
    if (mixerRef.current) mixerRef.current.update(dt);
    rendererRef.current.render(sceneRef.current, cameraRef.current);
    statsRef.current.update();
  }

  return <div id="three_demo5"></div>;
}
