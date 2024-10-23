/*
 * 不错的背景山
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-23 18:55:29
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import React, { useRef } from "react";
import * as THREE from "three";

import Stats from "three/addons/libs/stats.module.js";

import { FirstPersonControls } from "three/addons/controls/FirstPersonControls.js";
import { ImprovedNoise } from "three/addons/math/ImprovedNoise.js";
import { useMount } from "hooks/useMount";
import "./index.scss";

const worldWidth = 256,
  worldDepth = 256;

export default function sixthUseThreejs() {
  const cameraRef = useRef<any>(null);

  const rendererRef = useRef<any>(null);
  const clockRef = useRef<any>(new THREE.Clock());
  const sceneRef = useRef<any>(null);
  const textureRef = useRef<any>(null);
  const meshRef = useRef<any>(null);
  const statsRef = useRef<any>(null);
  const controlsRef = useRef<any>(null);
  useMount(() => {
    init();
  });
  function init() {
    const dom = document.getElementById("three_demo6") as HTMLElement;

    cameraRef.current = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      10000,
    );

    sceneRef.current = new THREE.Scene();
    sceneRef.current.background = new THREE.Color(0xefd1b5);
    sceneRef.current.fog = new THREE.FogExp2(0xefd1b5, 0.0025);

    const data = generateHeight(worldWidth, worldDepth);

    cameraRef.current.position.set(100, 800, -800);
    cameraRef.current.lookAt(-100, 810, -800);

    const geometry = new THREE.PlaneGeometry(
      7500,
      7500,
      worldWidth - 1,
      worldDepth - 1,
    );
    geometry.rotateX(-Math.PI / 2);

    const vertices = geometry.attributes.position.array;

    for (let i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
      vertices[j + 1] = data[i] * 10;
    }

    textureRef.current = new THREE.CanvasTexture(
      generateTexture(data, worldWidth, worldDepth),
    );
    textureRef.current.wrapS = THREE.ClampToEdgeWrapping;
    textureRef.current.wrapT = THREE.ClampToEdgeWrapping;
    textureRef.current.colorSpace = THREE.SRGBColorSpace;

    meshRef.current = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({ map: textureRef.current }),
    );
    sceneRef.current.add(meshRef.current);

    rendererRef.current = new THREE.WebGLRenderer();
    const renderer = rendererRef.current;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    dom.appendChild(renderer.domElement);

    controlsRef.current = new FirstPersonControls(
      cameraRef.current,
      renderer.domElement,
    );
    controlsRef.current.movementSpeed = 150;
    controlsRef.current.lookSpeed = 0.1;

    statsRef.current = new Stats();
    dom.appendChild(statsRef.current.dom);

    //
    window.addEventListener("resize", onWindowResize);
  }

  function onWindowResize() {
    cameraRef.current.aspect = window.innerWidth / window.innerHeight;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    controlsRef.current.handleResize();
  }

  function generateHeight(width: number, height: number) {
    let seed = Math.PI / 4;
    window.Math.random = function () {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    const size = width * height,
      data = new Uint8Array(size);
    const perlin = new ImprovedNoise(),
      z = Math.random() * 100;

    let quality = 1;

    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < size; i++) {
        const x = i % width,
          y = ~~(i / width);
        data[i] += Math.abs(
          perlin.noise(x / quality, y / quality, z) * quality * 1.75,
        );
      }

      quality *= 5;
    }

    return data;
  }

  function generateTexture(data: any, width: number, height: number) {
    let context, image, imageData, shade;

    const vector3 = new THREE.Vector3(0, 0, 0);

    const sun = new THREE.Vector3(1, 1, 1);
    sun.normalize();

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    context = canvas.getContext("2d");
    if (!context) return;
    context.fillStyle = "#000";
    context.fillRect(0, 0, width, height);

    image = context.getImageData(0, 0, canvas.width, canvas.height);
    imageData = image.data;

    for (let i = 0, j = 0, l = imageData.length; i < l; i += 4, j++) {
      vector3.x = data[j - 2] - data[j + 2];
      vector3.y = 2;
      vector3.z = data[j - width * 2] - data[j + width * 2];
      vector3.normalize();

      shade = vector3.dot(sun);

      imageData[i] = (96 + shade * 128) * (0.5 + data[j] * 0.007);
      imageData[i + 1] = (32 + shade * 96) * (0.5 + data[j] * 0.007);
      imageData[i + 2] = shade * 96 * (0.5 + data[j] * 0.007);
    }

    context.putImageData(image, 0, 0);

    // Scaled 4x

    const canvasScaled = document.createElement("canvas");
    canvasScaled.width = width * 4;
    canvasScaled.height = height * 4;

    context = canvasScaled.getContext("2d");
    if (!context) return;
    context.scale(4, 4);
    context.drawImage(canvas, 0, 0);

    image = context.getImageData(0, 0, canvasScaled.width, canvasScaled.height);
    imageData = image.data;

    for (let i = 0, l = imageData.length; i < l; i += 4) {
      const v = ~~(Math.random() * 5);

      imageData[i] += v;
      imageData[i + 1] += v;
      imageData[i + 2] += v;
    }

    context.putImageData(image, 0, 0);

    return canvasScaled;
  }

  //

  function animate() {
    render();
    statsRef.current.update();
  }

  function render() {
    controlsRef.current.update(clockRef.current.getDelta());
    rendererRef.current.render(sceneRef.current, cameraRef.current);
  }
  return <div id="three_demo6"></div>;
}
