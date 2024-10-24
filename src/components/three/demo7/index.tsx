/*
 * 一辆保时捷
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-23 19:39:34
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import React, { useRef, useState } from "react";
import * as THREE from "three";

import Stats from "three/addons/libs/stats.module.js";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { useMount } from "hooks/useMount";
import "./index.scss";

export default function seventhUseThreejs() {
  const [bodyColor, setBodyColor] = useState<string>("#ff0000");
  const [detailColor, setDetailColor] = useState<string>("#ffffff");
  const [glassColor, setGlassColor] = useState<string>("#ffffff");
  const cameraRef = useRef<any>(null);

  const rendererRef = useRef<any>(null);
  const sceneRef = useRef<any>(null);
  const gridRef = useRef<any>(null);
  const wheelsRef = useRef<any[]>([]);
  const statsRef = useRef<any>(null);
  const controlsRef = useRef<any>(null);
  useMount(() => {
    init();
  });

  function init() {
    const container = document.getElementById("three_demo7") as HTMLElement;

    rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
    const renderer = rendererRef.current;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.85;
    container.appendChild(renderer.domElement);

    window.addEventListener("resize", onWindowResize);

    statsRef.current = new Stats();
    container.appendChild(statsRef.current.dom);

    //
    cameraRef.current = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    cameraRef.current.position.set(4.25, 1.4, -4.5);

    controlsRef.current = new OrbitControls(cameraRef.current, container);
    const controls = controlsRef.current;
    controls.maxDistance = 9;
    controls.maxPolarAngle = THREE.MathUtils.degToRad(90);
    controls.target.set(0, 0.5, 0);
    controls.update();

    sceneRef.current = new THREE.Scene();
    const scene = sceneRef.current;
    scene.background = new THREE.Color(0x333333);
    scene.environment = new RGBELoader().load("textures/venice_sunset_1k.hdr");
    scene.environment.mapping = THREE.EquirectangularReflectionMapping;
    scene.fog = new THREE.Fog(0x333333, 10, 15);

    gridRef.current = new THREE.GridHelper(20, 40, 0xffffff, 0xffffff);
    const grid = gridRef.current;
    grid.material.opacity = 0.2;
    grid.material.depthWrite = false;
    grid.material.transparent = true;
    scene.add(grid);

    // materials

    const bodyMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xff0000,
      metalness: 1.0,
      roughness: 0.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
    });

    const detailsMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 1.0,
      roughness: 0.5,
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.25,
      roughness: 0,
      transmission: 1.0,
    });

    const bodyColorInput = document.getElementById(
      "body-color",
    ) as HTMLInputElement;
    bodyColorInput.addEventListener("input", function () {
      bodyMaterial.color.set(this.value);
    });

    const detailsColorInput = document.getElementById(
      "details-color",
    ) as HTMLInputElement;
    detailsColorInput.addEventListener("input", function () {
      detailsMaterial.color.set(this.value);
    });

    const glassColorInput = document.getElementById(
      "glass-color",
    ) as HTMLInputElement;
    glassColorInput.addEventListener("input", function () {
      glassMaterial.color.set(this.value);
    });

    // Car
    const shadow = new THREE.TextureLoader().load("models/ferrari_ao.png");

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("draco/gltf/");

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load("models/ferrari.glb", function (gltf: any) {
      const carModel = gltf.scene.children[0];

      carModel.getObjectByName("body").material = bodyMaterial;

      carModel.getObjectByName("rim_fl").material = detailsMaterial;
      carModel.getObjectByName("rim_fr").material = detailsMaterial;
      carModel.getObjectByName("rim_rr").material = detailsMaterial;
      carModel.getObjectByName("rim_rl").material = detailsMaterial;
      carModel.getObjectByName("trim").material = detailsMaterial;

      carModel.getObjectByName("glass").material = glassMaterial;

      wheelsRef.current.push(
        carModel.getObjectByName("wheel_fl"),
        carModel.getObjectByName("wheel_fr"),
        carModel.getObjectByName("wheel_rl"),
        carModel.getObjectByName("wheel_rr"),
      );

      // shadow
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(0.655 * 4, 1.3 * 4),
        new THREE.MeshBasicMaterial({
          map: shadow,
          blending: THREE.MultiplyBlending,
          toneMapped: false,
          transparent: true,
        }),
      );
      mesh.rotation.x = -Math.PI / 2;
      mesh.renderOrder = 2;
      carModel.add(mesh);

      scene.add(carModel);
    });
  }

  function onWindowResize() {
    const camera = cameraRef.current;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    controlsRef.current.update();

    const time = -performance.now() / 1000;

    for (let i = 0; i < wheelsRef.current.length; i++) {
      wheelsRef.current[i].rotation.x = time * Math.PI * 2;
    }

    gridRef.current.position.z = -time % 1;

    rendererRef.current.render(sceneRef.current, cameraRef.current);

    statsRef.current.update();
  }

  const handleChange = (e: any) => {
    console.log(e);
    setBodyColor(e.target.value);
  };

  return (
    <>
      <div id="three_demo7"></div>
      <div className="colorPickerContainer">
        <span className="colorPicker">
          <input
            id="body-color"
            type="color"
            value={bodyColor}
            onChange={handleChange}
          ></input>
          车身颜色
        </span>
        <span className="colorPicker">
          <input
            id="details-color"
            type="color"
            value={detailColor}
            onChange={e => setDetailColor(e.target.value)}
          ></input>
          轮毂颜色
        </span>
        <span className="colorPicker">
          <input
            id="glass-color"
            type="color"
            value={glassColor}
            onChange={e => setGlassColor(e.target.value)}
          ></input>
          玻璃颜色
        </span>
      </div>
    </>
  );
}
