/*
 * 机器人的舞动
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-23 10:02:20
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import React, { useRef } from "react";
import * as THREE from "three";
import Stats from "three/addons/libs/stats.module.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useMount } from "hooks/useMount";
import { useUnMount } from "hooks/useUnMount";
import "./index.scss";
THREE.Cache.enabled = false;
export default function FourthUseThreejs() {
  const cameraRef = useRef<any>(null);
  const modelRef = useRef<any>(null);
  const skeletonRef = useRef<any>(null);
  const mixerRef = useRef<any>(null);
  const actionRef = useRef<{
    idleAction: any;
    walkAction: any;
    runAction: any;
  }>({
    idleAction: null,
    walkAction: null,
    runAction: null,
  });
  const rendererRef = useRef<any>(null);
  const settingsRef = useRef<any>({});
  const crossFadeControlsRef = useRef<any>([]);
  const clockRef = useRef<any>(null);
  const sceneRef = useRef<any>(null);
  const statsRef = useRef<any>(null);
  const singleStepMode = useRef(false);
  const sizeOfNextStep = useRef(0);
  const guiRef = useRef<any>(null);
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
    const dom = document.getElementById("three_demo4") as HTMLElement;

    cameraRef.current = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      100,
    );
    cameraRef.current.position.set(1, 2, -3);
    cameraRef.current.lookAt(0, 1, 0);

    clockRef.current = new THREE.Clock();

    sceneRef.current = new THREE.Scene();
    const scene = sceneRef.current;
    scene.background = new THREE.Color(0xa0a0a0);
    scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 3);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 3);
    dirLight.position.set(-3, 10, -10);
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 2;
    dirLight.shadow.camera.bottom = -2;
    dirLight.shadow.camera.left = -2;
    dirLight.shadow.camera.right = 2;
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 40;
    scene.add(dirLight);

    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.MeshPhongMaterial({ color: 0xcbcbcb, depthWrite: false }),
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true;
    scene.add(mesh);

    const loader = new GLTFLoader();
    loader.load("models/Soldier.glb", function (gltf: any) {
      modelRef.current = gltf.scene;
      scene.add(modelRef.current);

      modelRef.current.traverse(function (object: any) {
        if (object.isMesh) object.castShadow = true;
      });

      //
      skeletonRef.current = new THREE.SkeletonHelper(modelRef.current);
      skeletonRef.current.visible = false;
      scene.add(skeletonRef.current);

      //
      createPanel();

      //
      const animations = gltf.animations;

      mixerRef.current = new THREE.AnimationMixer(modelRef.current);

      actionRef.current.idleAction = mixerRef.current.clipAction(animations[0]);
      actionRef.current.walkAction = mixerRef.current.clipAction(animations[3]);
      actionRef.current.runAction = mixerRef.current.clipAction(animations[1]);

      activateAllActions();

      rendererRef.current.setAnimationLoop(animate);
    });

    rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.shadowMap.enabled = true;
    dom.appendChild(rendererRef.current.domElement);

    statsRef.current = new Stats();
    dom.appendChild(statsRef.current.dom);

    window.addEventListener("resize", onWindowResize);
  }

  function createPanel() {
    guiRef.current = new GUI({ width: 310 });
    const panel = guiRef.current;

    const folder1 = panel.addFolder("Visibility");
    const folder2 = panel.addFolder("Activation/Deactivation");
    const folder3 = panel.addFolder("Pausing/Stepping");
    const folder4 = panel.addFolder("Crossfading");
    const folder5 = panel.addFolder("Blend Weights");
    const folder6 = panel.addFolder("General Speed");

    settingsRef.current = {
      "show model": true,
      "show skeleton": false,
      "deactivate all": deactivateAllActions,
      "activate all": activateAllActions,
      "pause/continue": pauseContinue,
      "make single step": toSingleStepMode,
      "modify step size": 0.05,
      "from walk to idle": function () {
        prepareCrossFade(
          actionRef.current.walkAction,
          actionRef.current.idleAction,
          1.0,
        );
      },
      "from idle to walk": function () {
        prepareCrossFade(
          actionRef.current.idleAction,
          actionRef.current.walkAction,
          0.5,
        );
      },
      "from walk to run": function () {
        prepareCrossFade(
          actionRef.current.walkAction,
          actionRef.current.runAction,
          2.5,
        );
      },
      "from run to walk": function () {
        prepareCrossFade(
          actionRef.current.runAction,
          actionRef.current.walkAction,
          5.0,
        );
      },
      "use default duration": true,
      "set custom duration": 3.5,
      "modify idle weight": 0.0,
      "modify walk weight": 1.0,
      "modify run weight": 0.0,
      "modify time scale": 1.0,
    };
    const settings = settingsRef.current;
    const crossFadeControls = crossFadeControlsRef.current;
    folder1.add(settings, "show model").onChange(showModel);
    folder1.add(settings, "show skeleton").onChange(showSkeleton);
    folder2.add(settings, "deactivate all");
    folder2.add(settings, "activate all");
    folder3.add(settings, "pause/continue");
    folder3.add(settings, "make single step");
    folder3.add(settings, "modify step size", 0.01, 0.1, 0.001);
    crossFadeControls.push(folder4.add(settings, "from walk to idle"));
    crossFadeControls.push(folder4.add(settings, "from idle to walk"));
    crossFadeControls.push(folder4.add(settings, "from walk to run"));
    crossFadeControls.push(folder4.add(settings, "from run to walk"));
    folder4.add(settings, "use default duration");
    folder4.add(settings, "set custom duration", 0, 10, 0.01);
    folder5
      .add(settings, "modify idle weight", 0.0, 1.0, 0.01)
      .listen()
      .onChange(function (weight: any) {
        setWeight(actionRef.current.idleAction, weight);
      });
    folder5
      .add(settings, "modify walk weight", 0.0, 1.0, 0.01)
      .listen()
      .onChange(function (weight: any) {
        setWeight(actionRef.current.walkAction, weight);
      });
    folder5
      .add(settings, "modify run weight", 0.0, 1.0, 0.01)
      .listen()
      .onChange(function (weight: any) {
        setWeight(actionRef.current.runAction, weight);
      });
    folder6
      .add(settings, "modify time scale", 0.0, 1.5, 0.01)
      .onChange(modifyTimeScale);

    folder1.open();
    folder2.open();
    folder3.open();
    folder4.open();
    folder5.open();
    folder6.open();
  }

  function animate() {
    // Update the panel values if weights are modified from "outside" (by crossfadings)
    updateWeightSliders();
    // Enable/disable crossfade controls according to current weight values
    updateCrossFadeControls();

    // Get the time elapsed since the last frame, used for mixer update (if not in single step mode)

    let mixerUpdateDelta = clockRef.current.getDelta();

    // If in single step mode, make one step and then do nothing (until the user clicks again)

    if (singleStepMode.current) {
      mixerUpdateDelta = sizeOfNextStep.current;
      sizeOfNextStep.current = 0;
    }

    // Update the animation mixer, the stats panel, and render this frame

    mixerRef.current.update(mixerUpdateDelta);
    rendererRef.current.render(sceneRef.current, cameraRef.current);
    statsRef.current.update();
  }

  function onWindowResize() {
    cameraRef.current.aspect = window.innerWidth / window.innerHeight;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
  }

  function getHeight() {
    const { idleAction, walkAction, runAction } = actionRef.current;
    return {
      idleWeight: idleAction.getEffectiveWeight(),
      walkWeight: walkAction.getEffectiveWeight(),
      runWeight: runAction.getEffectiveWeight(),
    };
  }

  function updateWeightSliders() {
    const settings = settingsRef.current;
    const { idleWeight, walkWeight, runWeight } = getHeight();
    settings["modify idle weight"] = idleWeight;
    settings["modify walk weight"] = walkWeight;
    settings["modify run weight"] = runWeight;
  }

  function prepareCrossFade(
    startAction: any,
    endAction: any,
    defaultDuration: number,
  ) {
    // Switch default / custom crossfade duration (according to the user's choice)

    const duration = setCrossFadeDuration(defaultDuration);

    // Make sure that we don't go on in singleStepMode, and that all actions are unpaused

    singleStepMode.current = false;
    unPauseAllActions();

    // If the current action is 'idle' (duration 4 sec), execute the crossfade immediately;
    // else wait until the current action has finished its current loop
    const { idleAction } = actionRef.current;
    if (startAction === idleAction) {
      executeCrossFade(startAction, endAction, duration);
    } else {
      synchronizeCrossFade(startAction, endAction, duration);
    }
  }

  function setCrossFadeDuration(defaultDuration: number) {
    // Switch default crossfade duration <-> custom crossfade duration
    const settings = settingsRef.current;
    if (settings["use default duration"]) {
      return defaultDuration;
    } else {
      return settings["set custom duration"];
    }
  }

  function synchronizeCrossFade(
    startAction: any,
    endAction: any,
    duration: number,
  ) {
    mixerRef.current.addEventListener("loop", onLoopFinished);

    function onLoopFinished(event: any) {
      if (event.action === startAction) {
        mixerRef.current.removeEventListener("loop", onLoopFinished);

        executeCrossFade(startAction, endAction, duration);
      }
    }
  }

  function executeCrossFade(
    startAction: any,
    endAction: any,
    duration: number,
  ) {
    // Not only the start action, but also the end action must get a weight of 1 before fading
    // (concerning the start action this is already guaranteed in this place)
    setWeight(endAction, 1);
    endAction.time = 0;
    // Crossfade with warping - you can also try without warping by setting the third parameter to false
    startAction.crossFadeTo(endAction, duration, true);
  }

  // Called by the render loop
  function updateCrossFadeControls() {
    const crossFadeControls = crossFadeControlsRef.current;
    const { idleWeight, walkWeight, runWeight } = getHeight();
    if (idleWeight === 1 && walkWeight === 0 && runWeight === 0) {
      crossFadeControls[0].disable();
      crossFadeControls[1].enable();
      crossFadeControls[2].disable();
      crossFadeControls[3].disable();
    }

    if (idleWeight === 0 && walkWeight === 1 && runWeight === 0) {
      crossFadeControls[0].enable();
      crossFadeControls[1].disable();
      crossFadeControls[2].enable();
      crossFadeControls[3].disable();
    }

    if (idleWeight === 0 && walkWeight === 0 && runWeight === 1) {
      crossFadeControls[0].disable();
      crossFadeControls[1].disable();
      crossFadeControls[2].disable();
      crossFadeControls[3].enable();
    }
  }

  function pauseContinue() {
    if (singleStepMode.current) {
      singleStepMode.current = false;
      unPauseAllActions();
    } else {
      const { idleAction } = actionRef.current;
      if (idleAction.paused) {
        unPauseAllActions();
      } else {
        pauseAllActions();
      }
    }
  }

  function deactivateAllActions() {
    const actions = Object.values(actionRef.current);
    actions.forEach(function (action: any) {
      action.stop();
    });
  }

  function activateAllActions() {
    const { idleAction, walkAction, runAction } = actionRef.current;
    const actions = Object.values(actionRef.current);
    const settings = settingsRef.current;
    setWeight(idleAction, settings["modify idle weight"]);
    setWeight(walkAction, settings["modify walk weight"]);
    setWeight(runAction, settings["modify run weight"]);

    actions.forEach(function (action: any) {
      action.play();
    });
  }

  function setWeight(action: any, weight: any) {
    action.enabled = true;
    action.setEffectiveTimeScale(1);
    action.setEffectiveWeight(weight);
  }

  function showModel(visibility: any) {
    modelRef.current.visible = visibility;
  }

  function showSkeleton(visibility: any) {
    skeletonRef.current.visible = visibility;
  }

  function modifyTimeScale(speed: any) {
    mixerRef.current.timeScale = speed;
  }

  function pauseAllActions() {
    const actions = Object.values(actionRef.current);
    actions.forEach(function (action: any) {
      action.paused = true;
    });
  }

  function unPauseAllActions() {
    const actions = Object.values(actionRef.current);
    actions.forEach(function (action: any) {
      action.paused = false;
    });
  }

  function toSingleStepMode() {
    unPauseAllActions();

    singleStepMode.current = true;
    sizeOfNextStep.current = settingsRef.current["modify step size"];
  }

  return <div id="three_demo4"></div>;
}
