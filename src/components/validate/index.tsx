/*
 * 验证用户权限页面
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2025-02-15 15:55:43
 *
 * Copyright © 2019-2025 bvox.com. All Rights Reserved.
 */
import React, { useState } from "react";
import { Card, Input, Button, message } from "antd";
import "./index.scss";

export default function GoValidate() {
  const [command, setCommand] = useState("");
  const handleValidate = () => {
    // todo 后端接口获取
    if (command === "gyp-jammy") {
      localStorage.setItem("isAuth", "gj");
      history.back();
    } else {
      message.error("验证失败");
    }
  };

  const handleUnKonw = () => {
    message.warning("那好吧，看不到咯");
  };

  return (
    <div className="go-validate-main">
      <Card style={{ width: 500 }}>
        <h2>验证权限</h2>
        <p>请输入权限验证信息，以继续</p>

        <Input
          placeholder="请输入口令"
          value={command}
          onChange={e => setCommand(e.target.value)}
          onPressEnter={handleValidate}
        />
        <div className="gvm-btn-group">
          <Button type="primary" onClick={handleValidate}>
            验证口令
          </Button>
          <Button onClick={handleUnKonw}>不知道</Button>
        </div>
      </Card>
    </div>
  );
}
