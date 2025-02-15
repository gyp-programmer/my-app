/*
 * 统一设置路由权限（路由守卫者）
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-11 10:25:35
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import { useListenPage } from "../../hooks/useListenPage";
import { ScreenSaver } from "../../components";
import { NotFound } from "../../components";
import { Button } from "antd";
import { useAuth } from "./useAuth";

function AuthRouter({ children }: any) {
  const { accessAuth } = useAuth();
  const { pathname } = useLocation();
  const isActive = useListenPage({ delay: 15 * 60 * 1000 });

  useEffect(() => {
    // 路由变化
    NProgress.done();
    return () => {
      NProgress.start();
    };
  }, [pathname]);

  if (!accessAuth) {
    return (
      <NotFound
        title="暂无权限"
        subTitle="想要访问原页面，请前往验证"
        status="500"
        extra={
          <Button type="primary" onClick={() => (location.href = "/validate")}>
            去验证
          </Button>
        }
      />
    );
  }

  return isActive ? children : <ScreenSaver />;
}

export default AuthRouter;
