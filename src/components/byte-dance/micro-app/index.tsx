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

interface IProps {
  /** 微服务url */
  url: string;
  /** 微服务是否缓存  默认不开启 */
  isCache?: boolean;
  /** 微服务名称 */
  name: string;
  strictStyleIsolation?: boolean;
}

/**
 * @abstract https://qiankun.umijs.org/zh/api#loadmicroappapp-configuration
 */
function MicroAppComp(props: IProps) {
  const { url, isCache = false, name, strictStyleIsolation = false } = props;
  const microAppRef = useRef<HTMLDivElement>(null);
  const microApp = useRef<MicroApp>();

  useEffect(() => {
    const init = () => {
      if (!microAppRef.current) return;
      microApp.current = loadMicroApp(
        {
          name,
          entry: url,
          container: microAppRef.current,
        },
        {
          $$cacheLifecycleByAppName: isCache,
          sandbox: { strictStyleIsolation },
        },
      );
    };
    init();

    return () => {
      microApp.current?.unmount();
    };
  }, [url]);

  return <div ref={microAppRef} key={url} />;
}

export default MicroAppComp;
