/*
 * 路由入口文件
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-03 14:38:38
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import {
  BVideo,
  Home,
  About,
  Rss,
  XScrollExample,
  NotFound,
  Byte,
  CircleCarousel,
  Gpt,
  BVideoByFrame,
  ownComponent,
  Three,
} from "../components";
import LoadImage from "../practice/load-image";
import AuthRouter from "./auth-router";

const routers = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/about",
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
    path: "/byte-dance",
    element: Byte,
  },
  {
    path: "/circle-carousel",
    element: CircleCarousel,
  },
  {
    path: "/gpt",
    element: Gpt,
  },
  {
    path: "/b-video",
    element: BVideo,
  },
  {
    path: "/b-video-by-frame",
    element: BVideoByFrame,
  },
  {
    path: "/use-own-component",
    element: ownComponent,
  },
  {
    path: "/load-image",
    element: LoadImage,
  },
  {
    path: "/three-demo",
    element: Three,
  },
  {
    path: "*",
    element: NotFound,
  },
];

export { AuthRouter };
export default routers;
