/*
 * 微应用组件
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-28 11:45:52
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React, { useRef, useEffect } from "react";
import { loadMicroApp, type MicroApp } from "qiankun";

const musicUrl = "https://music-player-ivory-six.vercel.app/";
/**
 * @abstract https://qiankun.umijs.org/zh/api#loadmicroappapp-configuration
 */
function MicroAppComp() {
  const microAppRef = useRef<HTMLDivElement>(null);
  const microApp = useRef<MicroApp>();

  useEffect(() => {
    const init = () => {
      if (!microAppRef.current) return;
      microApp.current = loadMicroApp(
        {
          name: "music",
          entry: musicUrl,
          container: microAppRef.current,
        },
        { $$cacheLifecycleByAppName: false },
      );
    };
    init();

    return () => {
      microApp.current?.unmount();
    };
  }, []);

  return <div ref={microAppRef} />;
}

export default MicroAppComp;
