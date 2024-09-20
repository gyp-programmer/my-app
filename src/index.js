/*
 * 入口文件
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-02 11:12:21
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import routers, { AuthRouter } from "./router";
import 'nprogress/nprogress.css'
// todo 后续优化，根据用户选择的样式 动态导入
import 'highlight.js/styles/a11y-dark.css';
import "../mock";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(registration => {
      console.log('SW registered: ', registration);
    })
    .catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
}
// const Home = routers[0].element;
// const About = routers[1].element;

root.render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      {routers.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          element={
            <AuthRouter>
              <item.element />
            </AuthRouter>
          }
        />
      ))}
      {/* 嵌套路由 */}
      {/* <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />} />
        </Route> */}
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
