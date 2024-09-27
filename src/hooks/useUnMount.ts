/*
 * 卸载钩子
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-02 14:24:23
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import { useRef, useEffect } from "react";
import { isDev, isFunction } from "utils";

export function useUnMount(callback: () => void) {
  if (isDev()) {
    if (!isFunction(callback)) {
      throw new Error("useUnMount: callback must be a function");
    }
  }

  // 1. 使用useRef以保证函数引用不会被改变，避免造成不必要的清理操作
  // 2. 避免闭包，确保使用的函数是useRef中的函数
  const ref = useRef<(() => void) | null>(null);
  ref.current = callback;

  useEffect(() => {
    return () => {
      ref.current?.();
    };
  }, []);
}
