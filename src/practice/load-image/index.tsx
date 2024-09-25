/*
 *  测试图片预加载之后的播放
 *  测试结果：在预加载图片之后，使用img标签进行播放，会比使用css背景属性播放更快，因为已经加载过资源，但是css背景属性会在缓存加载一次资源。
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-25 15:08:42
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React, { useState, useRef, useEffect } from "react";
import { previewLoadImg } from "../../utils";
import "./index.scss";
import { useMount } from "hooks/useMount";

const testUrl =
  "https://w.wallhaven.cc/full/qz/wallhaven-qzgr7r.jpg";

function LoadImage() {
  const [url, setUrl] = useState("");
  const [imgContent, setImg] = useState<HTMLImageElement>();
  const [useImg, setUseImg] = useState(true);
  const imgRef = useRef<HTMLDivElement>(null);

  useMount(async () => {
    const img = await previewLoadImg(testUrl);
    setUrl(testUrl);
    setImg(img);
  });

  useEffect(() => {
    imgRef.current && imgContent && imgRef.current.appendChild(imgContent);
  }, [imgRef, imgContent]);

  return (
    <div className="load-image">
      <span>测试使用img标签和使用css的背景属性加载图片</span>
      <button
        onClick={() => {
          setUseImg(!useImg);
        }}
      >
        切换测试
      </button>

        <div ref={imgRef} style={{display: useImg ? 'block' : 'none'}}></div>

        <div
          className="bg"
          style={{
            background: `url(${url})  center / 1920px auto no-repeat`,
            opacity: url && 1,
            display: useImg ? 'none' : 'block',
          }}
        ></div>
    </div>
  );
}

export default LoadImage;
