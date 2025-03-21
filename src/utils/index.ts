/*
 * 共用的工具函数
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-02 14:21:47
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import { IRss, IWebGLCompatibility } from "./types";
import XMLToJson from "./XMLToJson";
import WebGL from "three/addons/capabilities/WebGL.js";
/**
 * 是否为开发环境
 * @returns {boolean} true为是
 */
export function isDev() {
  return process.env.NODE_ENV === "development";
}

/**
 * 是否为函数
 * @param value 传入的参数
 * @returns {boolean}
 */
export function isFunction(value: unknown) {
  return typeof value === "function";
}

/**
 * 解析xml 字符串为 dom 对象
 * @param xml
 * @returns
 */
export function xmlToDom(xml: string): XMLDocument {
  let xmlDom: any;
  if (window.DOMParser) {
    const parser = new DOMParser();
    xmlDom = parser.parseFromString(xml, "text/xml");
  } else if ((window as any).ActiveXObject) {
    // 兼容ie6或者更老的
    const xmlDom = new (window as any).ActiveXObject("Microsoft.XMLDOM");
    xmlDom.async = false;
    xmlDom.loadXML(xml);
  }
  return xmlDom;
}

export function xmlToJson(xml: XMLDocument): IRss | null {
  const obj = XMLToJson.parseXML(xml) as IRss;
  if (obj.rss && obj.rss.length) {
    return obj;
  } else {
    return null;
  }
}

/**
 * 防抖函数
 * @param delay 默认1s
 */
export function debounce(fn: () => any, delay: number = 1000) {
  let timer: any = null;
  return function (...args: any) {
    // @ts-ignore
    const _this = this as any;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(_this, args);
    }, delay);
  };
}

/**
 * 获取链接上的参数
 * @param url
 * @returns
 */
export function parseGetParams(url: string) {
  const q: Record<string, string> = {};
  url.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (q[k] = v));
  return q;
}

/**
 * 随机生成16hex颜色
 * @returns rgb
 */
export function genRandomColor() {
  // 16777215 为 16进制ffffff
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

/**
 * 预加载图片
 * @param {string} url 图片url
 */
export function previewLoadImg(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    // img.crossOrigin = "anonymous";
    img.src = url;
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject(new Error(`${url}加载失败`));
    };
  });
}

/** 批量预加载图片 */
export async function batchPreviewLoadImg(urlList: string[]) {
  const imgList = await Promise.allSettled(
    urlList.map(url => previewLoadImg(url)),
  );
  return imgList.map(item => ({
    status: item.status,
    value: item.status === "fulfilled" ? item.value : item.reason,
  }));
}

/**
 * WebGL兼容性检查
 * @description https://threejs.org/docs/index.html#manual/zh/introduction/WebGL-compatibility-check
 * @returns {} 检测是否支持webgl
 */
export const checkWebGLCompatibility = (): IWebGLCompatibility => {
  return {
    isAvailable: WebGL.isWebGL2Available(),
    warning: WebGL.getWebGL2ErrorMessage(),
  };
};

/**
 * 复制功能的参数接口
 */
interface ICopyCallback {
  /** 复制成功回调 */
  success: () => void;
  /** 失败回调 */
  error?: (e: any) => void;
}

/**
 * 复制功能
 *
 * @param text 复制文本
 */
export async function copyToClipboard(text: string, options?: ICopyCallback) {
  try {
    await navigator.clipboard.writeText(text);
    options?.success();
  } catch (err) {
    options?.error?.(err);
  }
}
