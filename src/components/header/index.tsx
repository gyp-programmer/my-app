/*
 * 子页面--头部组件
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-05 14:22:28
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React from "react";
import { Link } from "react-router-dom";
import { Segmented } from "antd";
import { ThemeMode, useThemeMode } from "antd-style";
import "./index.scss";

interface IProps {
  name: string;
}

const options = [
  { label: "跟随系统", value: "auto" },
  { label: "亮色", value: "light" },
  { label: "暗色", value: "dark" },
];

function Header(props: IProps) {
  const { name } = props;
  const { themeMode, setThemeMode } = useThemeMode();

  return (
    <div className="header">
      <Link className="back" to="/">
        返回
      </Link>
      <div className="right">
        <h1>{name}</h1>
        <Segmented
          value={themeMode}
          onChange={v => {
            document.documentElement.setAttribute("data-theme", v);
            localStorage.setItem("theme", v);
            setThemeMode(v as ThemeMode);
          }}
          options={options}
        />
      </div>
    </div>
  );
}

export default Header;
