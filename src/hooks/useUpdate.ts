/*
 * 强制更新
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-02 14:38:55
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import { useCallback, useState } from "react";

export function useUpdate() {
  const [, setState] = useState({});

  // 使用useCallback包裹，防止函数引用改变导致组件重新渲染
  return useCallback(() => setState({}), []);
}
