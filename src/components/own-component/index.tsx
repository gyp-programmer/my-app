/*
 * 使用自己的组件库组件
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-11 11:48:48
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React from "react";
import { Button } from "gyp-gao-ui";
import Header from "../header";
import "./index.scss";

function OwnComponent() {
  return (
    <div>
      <Header name="我的组件库组件" />
      <div className="own-component">
        <Button type="primary" text="按钮" />
      </div>
    </div>
  );
}

export default OwnComponent;
