/*
 * threejs--画线
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-22 14:01:49
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import { useMount } from "hooks/useMount";
import React from "react";
import * as THREE from "three";
import { checkWebGLCompatibility } from "utils";

export default function SecondUseThreejs() {
  useMount(() => {
    const { isAvailable } = checkWebGLCompatibility();
    if (!isAvailable) return;

    // 准备好rendrer scen camera
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    const dom = document.getElementById("three_demo2") as HTMLElement;
    dom.appendChild(renderer.domElement);
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500,
    );

    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);
    const scene = new THREE.Scene();
    addLine(scene);
    renderer.render(scene, camera);
  });

  function addLine(scene: any) {
    // 对于线条来说，我们能使用的材质只有LineBasicMaterial 或者 LineDashedMaterial
    const material = new THREE.LineBasicMaterial({ color: "#ff6201" });

    // 定义好材质之后，我们需要一个带有一些顶点的geometry（几何体）
    const points = [];
    // 线是画在每一对连续的顶点之间的，而不是在第一个顶点和最后一个顶点之间绘制线条
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    // 有了能够画两条线的点和一个材质，那我们现在就可以将他们组合在一起，形成一条线
    const line = new THREE.Line(geometry, material);
    // 添加到场景中
    scene.add(line);
  }
  return <div id="three_demo2"></div>;
}
