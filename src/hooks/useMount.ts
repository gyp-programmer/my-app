/*
 * 挂载钩子
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-02 14:20:36
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import { useEffect } from "react";
import { isDev, isFunction } from "utils";

export function useMount(callback: () => void) {
  if (isDev()) {
    if (!isFunction(callback)) {
      throw new Error("useMount: callback must be a function");
    }
  }

  useEffect(() => {
    callback();
  }, []);
}
