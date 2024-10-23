/*
 * 首次使用threejs - 创建一个场景并且渲染一个立方体
 *
 * @references https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-22 10:57:03
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import { useMount } from "hooks/useMount";
import React from "react";
import * as THREE from "three";
import { checkWebGLCompatibility } from "utils";

export default function FirstUseThreejs() {
  useMount(() => {
    const { isAvailable } = checkWebGLCompatibility();
    if (!isAvailable) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const dom = document.getElementById("three_demo1") as HTMLElement;
    dom.appendChild(renderer.domElement);

    const cube = addCube(scene, camera);

    /**
     * 循环渲染
     * 在这里我们创建了一个使渲染器能够在每次屏幕刷新时对场景进行绘制的循环（在大多数屏幕上，刷新率一般是60次/秒）。
     * 如果你是一个浏览器游戏开发的新手，你或许会说“为什么我们不直接用 setInterval 来实现刷新的功能呢？”当然啦，我们的确可以用 setInterval，
     * 但是，requestAnimationFrame 有很多的优点。最重要的一点或许就是当用户切换到其它的标签页时，它会暂停，
     * 因此不会浪费用户宝贵的处理器资源，也不会损耗电池的使用寿命。
     */
    function animate() {
      requestAnimationFrame(animate);
      // 更加有趣的事 —— 让它旋转起来
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  });

  function addCube(scene: any, camera: any) {
    // 创建一个立方体，我们需要一个 BoxGeometry（立方体）对象
    const geometry = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10);
    // 对于这个立方体，我们需要给它一个材质
    const material = new THREE.MeshBasicMaterial({
      color: "#049ef4",
      wireframe: true, // 将几何体渲染为线框。默认值为false（即渲染为平面多边形）
    });
    // 我们需要一个 Mesh（网格）。 网格里面有 一个几何体以及作用在此几何体上的材质
    const cube = new THREE.Mesh(geometry, material);
    // 将网格添加到场景中
    scene.add(cube);
    // 调用 scene.add() 的时候，物体将会被添加到 (0,0,0) 坐标
    // 只需要将摄像机稍微向外移动一些即可
    camera.position.z = 5;
    return cube;
  }

  return <div id="three_demo1"></div>;
}
