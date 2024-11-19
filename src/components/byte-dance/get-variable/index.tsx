/*
 * 加载抖音web页面
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-14 17:27:11
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React, { useRef, useEffect, useCallback } from "react";

// const github =
//   "https://localhost:10101/proxy-two/?target=https%3A%2F%2Fgithub.com";
const tiktok =
  "https://gyp.mytiktok.com/proxy/?target=https%3A%2F%2Fwww.tiktok.com";
const tiktokHost = "www.tiktok.com";

function GetVariable() {
  const refIframe = useRef(null);

  /** iframe加载成功 */
  const reloadIFrame = useCallback(() => {
    // 添加事件监听器来检测 iframe 是否已加载完成
    const iframe = document.getElementById("byte-iframe") as any;
    if (!iframe) return;
    if (iframe.attachEvent) {
      iframe.attachEvent("onload", iframeLoaded);
    } else {
      iframe.onload = iframeLoaded;
    }
  }, []);

  const iframeLoaded = useCallback((_e: any) => {
    const iframe = document.getElementById("byte-iframe") as any;
    iframe.location = {
      origin: "https://" + tiktokHost,
      host: tiktokHost,
      hostname: tiktokHost,
      href: "https://" + tiktokHost + "/foryou",
      pathname: "/foryou",
    };
  }, []);

  useEffect(() => {
    const iframe = refIframe.current as any;
    if (iframe) {
      reloadIFrame();
      // console.log(iframe.contentWindow.window);
    }
  }, [refIframe]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        id="byte-iframe"
        width="100%"
        height="100%"
        src={tiktok}
        ref={refIframe}
      ></iframe>
    </div>
  );
}

export default GetVariable;
