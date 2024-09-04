/*
 * 路由入口文件
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-03 14:38:38
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import Home from "../components/App";
import About from "../components/about";

const routers = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "about",
    element: About,
  },
];

export default routers;
