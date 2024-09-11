/*
 * 统一设置路由权限（路由守卫者）
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-11 10:25:35
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';


function AuthRouter({children}: any) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 路由变化
    NProgress.done();
    return () => {
      NProgress.start();
    }
  }, [pathname])

  return children;
}

export default AuthRouter;
