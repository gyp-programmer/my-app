/*
 * 加载抖音web页面
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-14 17:27:11
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React, { useRef, useEffect } from 'react';

function GetVariable() {
  const refIframe = useRef(null);

  useEffect(() => {
    const iframe = refIframe.current as any;
    if(iframe) {
      // console.log(iframe.contentWindow.window);
    }
  }, [refIframe])

  return (
    <div>
      <iframe id="byte-iframe" width="100%" height="100%" src='http://localhost:10101/proxy/?target=https%3A%2F%2Fwww.douyin.com%2Fdiscover' ref={refIframe}></iframe>
    </div>
  );
}

export default GetVariable;
