/*
 * 首页
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-02 11:12:21
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import { useSyncExternalStore } from "react";
import store from "../store";
import browserApiStore from "../broswer-api-store";
import "./App.scss";
import React from "react";
import { Link } from "react-router-dom";

function App() {
  const state: number = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
  );
  const onLineStatus = useSyncExternalStore(
    browserApiStore.subscribe,
    browserApiStore.getSnapshot,
  );

  const changeState = () => {
    store.dispatch();
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="status">{onLineStatus ? "online" : "offline"}</div>
        <div className="count" onClick={changeState}>
          {state}
        </div>
      </header>
      {/* 适用于嵌套路由时，装载的容器 */}
      {/* <Outlet /> */}
      <div className="content">
        <div className="function">
          <Link to="/about">
            <span className="App-link">关于我们</span>
          </Link>
          <Link to="/rss-subscribe">
            <span className="App-link">csdn订阅文章</span>
          </Link>
          <Link to="/x-scroll-example">
            <span className="App-link">纵向鼠标滚动，实现的横向滚动</span>
          </Link>
          <Link to="/byte-dance">
            <span className="App-link">微前端</span>
          </Link>
          <Link to="/circle-carousel">
            <span className="App-link">无缝轮播图</span>
          </Link>
          <Link to="/gpt">
            <span className="App-link">GPT对话</span>
          </Link>
          <Link to="/b-video">
            <span className="App-link">b站视频复原</span>
          </Link>
          <Link to="/b-video-by-frame">
            <span className="App-link">b站视频按帧播放</span>
          </Link>
          <Link to="/use-own-component">
            <span className="App-link">使用自己的组件库</span>
          </Link>
          <Link to="/three-demo">
            <span className="App-link">3D案例</span>
          </Link>
        </div>

        <div className="test">
          <h1>测试</h1>
          <Link to="/load-image">
            <span className="App-link">预加载大图片</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
