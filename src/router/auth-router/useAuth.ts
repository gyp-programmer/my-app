/*
 * 路由权限访问
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2025-02-15 15:35:14
 *
 * Copyright © 2019-2025 bvox.com. All Rights Reserved.
 */
import { useEffect, useState } from "react";

// 是否满足权限
const isAuth = () => localStorage.getItem("isAuth") === "gj";

// 白名单页面
const whiteList = ["/validate"];

export const useAuth = () => {
  const [accessAuth, setAccessAuth] = useState(false);
  useEffect(() => {
    if (isAuth() || whiteList.includes(location.pathname)) {
      setAccessAuth(true);
    }
  }, []);

  return { accessAuth };
};
