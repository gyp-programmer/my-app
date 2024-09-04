/*
 * @Todo: 请补充模块描述
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-02 11:12:21
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import logo from "../logo.svg";
import { useSyncExternalStore } from "react";
import store from "../store";
import browserApiStore from "../broswer-api-store";
import "./App.scss";
import React from "react";
import { Link } from "react-router-dom";

function App() {
  const state: number = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot
  );
  const onLineStatus = useSyncExternalStore(
    browserApiStore.subscribe,
    browserApiStore.getSnapshot
  );

  return (
    <div className="App">
      <header className="App-header">
        <div className="status">{onLineStatus ? "online" : "offline"}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>{state}</code> and save to reload.
        </p>
        <span className="App-link" onClick={() => store.dispatch()}>
          click
        </span>
        <Link to="/about">
          <span className="App-link">Learn About</span>
        </Link>
      </header>
      {/* 适用于嵌套路由时，装载的容器 */}
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
