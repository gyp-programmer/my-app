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
import "./index.scss";

interface IProps {
  name: string;
}

function Header(props: IProps) {
  const { name } = props;

  return (
    <div className="header">
      <Link to="/">返回</Link>
      <h1>{name}</h1>
    </div>
  );
}

export default Header;
