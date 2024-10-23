/*
 * 创建文字
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-22 15:54:17
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import React, { useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import "./index.scss";
import { useMount } from "hooks/useMount";
import { useUnMount } from "hooks/useUnMount";

THREE.Cache.enabled = true;

interface IThirdUseThreejsProps {
  /** 是否开启镜面 */
  mirror?: boolean;
  /** 文字内容 */
  text?: string;
  /** 文字和镜面文字的上下距离相关设置 */
  hover?: number;
  /** TextGeometry抽离的属性 */
  depth?: number;
}

const fontMap: Record<string, number> = {
  helvetiker: 0,
  optimer: 1,
  gentilis: 2,
};

const weightMap: Record<string, number> = {
  regular: 0,
  bold: 1,
};

const reverseFontMap: string[] = [];
const reverseWeightMap: string[] = [];

for (const i in fontMap) reverseFontMap[fontMap[i]] = i;
for (const i in weightMap) reverseWeightMap[weightMap[i]] = i;

export default function ThirdUseThreejs(props: IThirdUseThreejsProps) {
  const {
    mirror = true,
    text = "I love Jammy!",
    hover = 30,
    depth = 20,
  } = props;
  const font = useRef(null);
  const fontObj = useRef({
    fontName: "optimer",
    fontWeight: "bold",
  });
  const group = useRef<any>(null);
  const textMesh1 = useRef<any>(null);
  /** 镜面值 */
  const textMesh2 = useRef<any>(null);
  const otherRef = useRef({
    bevelEnabled: true,
    fontIndex: 1,
  });
  const targetRotationRef = useRef({
    targetRotation: 0,
    targetRotationOnPointerDown: 0,
  });
  const pointerXRef = useRef({
    pointerX: 0,
    pointerXOnPointerDown: 0,
  });
  const cameraRef = useRef<any>(null);
  const cameraTargetRef = useRef<any>(new THREE.Vector3(0, 150, 0));
  const sceneRef = useRef<any>(new THREE.Scene());
  const renderRef = useRef<any>(new THREE.WebGLRenderer({ antialias: true }));
  const windowHalfXRef = useRef(window.innerWidth / 2);
  const textGeoRef = useRef<any>(null);
  const guiRef = useRef<any>(null);
  const materials = [
    new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
    new THREE.MeshPhongMaterial({ color: 0xffffff }), // side
  ];
  useMount(() => {
    const dom = document.getElementById("three_demo3") as HTMLElement;
    // CAMERA

    cameraRef.current = new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      1,
      1500,
    );
    cameraRef.current?.position.set(0, 400, 700);
    // SCENE
    const scene = sceneRef.current;
    scene.background = new THREE.Color("#000000");
    scene.fog = new THREE.Fog("#000", 250, 1400);

    // LIGHTS
    const dirLight = new THREE.DirectionalLight("#fff", 0.4);
    dirLight.position.set(0, 0, 1).normalize();
    scene.add(dirLight);

    const pointLight = new THREE.PointLight("#fff", 4.5, 0, 0);
    pointLight.color.setHSL(Math.random(), 1, 0.5);
    pointLight.position.set(0, 100, 90);
    scene.add(pointLight);

    group.current = new THREE.Group();
    group.current.position.y = group.current && 100;

    scene.add(group.current);
    loadFont();

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(10000, 10000),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        opacity: 0.5,
        transparent: true,
      }),
    );
    plane.position.y = 100;
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    // RENDERER

    const renderer = renderRef.current;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    dom.appendChild(renderer.domElement);

    // EVENTS
    dom.style.touchAction = "none";
    dom.addEventListener("pointerdown", onPointerDown);

    // GUI
    const params = {
      changeColor: function () {
        pointLight.color.setHSL(Math.random(), 1, 0.5);
      },
      changeFont: function () {
        otherRef.current.fontIndex += 1;
        fontObj.current.fontName =
          reverseFontMap[otherRef.current.fontIndex % reverseFontMap.length];
        loadFont();
      },
      changeWeight: function () {
        if (fontObj.current.fontWeight === "bold") {
          fontObj.current.fontWeight = "regular";
        } else {
          fontObj.current.fontWeight = "bold";
        }

        loadFont();
      },
      changeBevel: function () {
        otherRef.current.bevelEnabled = !otherRef.current.bevelEnabled;
        refreshText();
      },
    };

    // gui控制器
    guiRef.current = new GUI();

    guiRef.current.add(params, "changeColor").name("改变颜色");
    guiRef.current.add(params, "changeFont").name("更新字体");
    guiRef.current.add(params, "changeWeight").name("更改字重");
    guiRef.current.add(params, "changeBevel").name("更改开启斜角");
    guiRef.current.open();

    // 监听窗口变化
    window.addEventListener("resize", onWindowResize);
  });

  useUnMount(() => {
    if (guiRef.current) {
      guiRef.current.destroy();
      guiRef.current = null;
    }
  });

  function onWindowResize() {
    windowHalfXRef.current = window.innerWidth / 2;
    const camera = cameraRef.current;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    const renderer = renderRef.current;
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onPointerDown(event: any) {
    if (event.isPrimary === false) return;
    pointerXRef.current = {
      ...pointerXRef.current,
      pointerXOnPointerDown: event.clientX - windowHalfXRef.current,
    };
    targetRotationRef.current = {
      ...targetRotationRef.current,
      targetRotationOnPointerDown: targetRotationRef.current.targetRotation,
    };

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
  }

  function onPointerMove(event: any) {
    if (event.isPrimary === false) return;
    pointerXRef.current = {
      ...pointerXRef.current,
      pointerX: event.clientX - windowHalfXRef.current,
    };
    targetRotationRef.current = {
      ...targetRotationRef.current,
      targetRotation:
        targetRotationRef.current.targetRotationOnPointerDown +
        (pointerXRef.current.pointerX -
          pointerXRef.current.pointerXOnPointerDown) *
          0.02,
    };
  }

  function onPointerUp(event: any) {
    if (event.isPrimary === false) return;
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", onPointerUp);
  }

  function loadFont() {
    const loader = new FontLoader();
    const { fontName, fontWeight } = fontObj.current;
    loader.load(
      "fonts/" + fontName + "_" + fontWeight + ".typeface.json",
      (res: any) => {
        font.current = res;
        refreshText();
      },
    );
  }

  function refreshText() {
    group.current.remove(textMesh1.current);
    if (mirror) group.current.remove(textMesh2.current);
    if (!text) return;
    createText();
  }

  function createText() {
    /**
     * 创建文字的核心
     * @description https://threejs.org/docs/index.html#examples/zh/geometries/TextGeometry
     */
    textGeoRef.current = new TextGeometry(text, {
      font: font.current,
      size: 70,
      depth,
      curveSegments: 4,

      bevelThickness: 2,
      bevelSize: 1.5,
      bevelEnabled: otherRef.current.bevelEnabled,
    });
    textGeoRef.current.computeBoundingBox();

    const centerOffset =
      -0.5 *
      (textGeoRef.current.boundingBox.max.x -
        textGeoRef.current.boundingBox.min.x);

    textMesh1.current = new THREE.Mesh(textGeoRef.current, materials);

    textMesh1.current.position.x = centerOffset;
    textMesh1.current.position.y = hover;
    textMesh1.current.position.z = 0;

    textMesh1.current.rotation.x = 0;
    textMesh1.current.rotation.y = Math.PI * 2;

    group.current.add(textMesh1.current);

    if (mirror) {
      textMesh2.current = new THREE.Mesh(textGeoRef.current, materials);

      textMesh2.current.position.x = centerOffset;
      textMesh2.current.position.y = -hover;
      textMesh2.current.position.z = depth;

      textMesh2.current.rotation.x = Math.PI;
      textMesh2.current.rotation.y = Math.PI * 2;

      group.current.add(textMesh2.current);
    }
  }

  function animate() {
    group.current.rotation.y +=
      (targetRotationRef.current.targetRotation - group.current.rotation.y) *
      0.05;
    const camera = cameraRef.current;
    camera.lookAt(cameraTargetRef.current);

    const scene = sceneRef.current;
    const renderer = renderRef.current;
    renderer.clear();
    renderer.render(scene, camera);
  }

  return (
    <>
      <div id="info">漂亮的字体，需要高端的打开方式</div>
      <div id="three_demo3"></div>
    </>
  );
}
