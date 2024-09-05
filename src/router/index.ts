/*
 * 路由入口文件
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-03 14:38:38
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import Rss from "../components/rss-subscrible";
import Home from "../components/App";
import About from "../components/about";
import XScrollExample from "../components/x-scroll/example";

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
  }
];

export default routers;
