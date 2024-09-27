/*
 * 纵向滚动条-横向滚动
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-05 16:40:22
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React, { useEffect, useRef, useState, useCallback } from "react";
import debounce from "lodash/debounce";
import "./index.scss";

function XScroll(props: { children: any; fresh?: boolean }) {
  const { children, fresh = true } = props;
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  const ref = useRef<HTMLDivElement>(null);

  const handleResize = useCallback(
    debounce(() => {
      if (!ref.current) return;
      setSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }, 1000),
    [],
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      handleResize();
    });

    // 默认开始 第一次进来强制刷新
    if (fresh) {
      setTimeout(() => {
        handleResize();
      }, 300);
    }

    return () => {
      window.removeEventListener("resize", () => {
        handleResize();
      });
    };
  }, []);

  return (
    <div className="container" ref={ref}>
      <div
        className="x-scroll"
        style={{
          width: size.height + "px",
          height: size.width + "px",
          transform: `rotate(-90deg) translateX(-${size.height}px)`,
        }}
      >
        <div
          className="content"
          style={{
            width: size.width + "px",
            height: size.height + "px",
            transform: `rotate(90deg) translateY(-${size.height}px)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default XScroll;
