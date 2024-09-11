/*
 * 路由入口文件
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-03 14:38:38
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import { Home, About, Rss, XScrollExample, NotFound  } from '../components';
import AuthRouter from './auth-router';

const routers = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "about",
    element: About,
  },
  {
    path: "/rss-subscribe",
    element: Rss,
  },
  {
    path: "/x-scroll-example",
    element: XScrollExample,
  },
  {
    path: "*",
    element: NotFound,
  }
];

export { AuthRouter }
export default routers;
