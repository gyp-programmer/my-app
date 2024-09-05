/*
 * 测试xscroll组件
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-05 16:45:16
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React from "react";
import { Image } from "antd";
import XScroll from "../index";
import "./index.scss";

function Example() {
  return (
    <XScroll>
      <div className="example">
        <Image
          width={500}
          src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
        />
        <Image
          width={500}
          src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
        />
        <Image
          width={500}
          src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
        />
        <Image
          width={500}
          src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"
        />
        <Image
          width={500}
          src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
        />
        <Image
          width={500}
          src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
        />
      </div>
    </XScroll>
  );
}

export default Example;
