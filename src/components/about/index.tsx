/*
 * @Todo: 请补充模块描述
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-04 09:22:17
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React, { useState, useEffect } from "react";
import { getList } from "../../api";
import { Avatar, List } from "antd";
import Header from "../header";
import "./index.scss";

interface IUser {
  name: string;
  age: number;
  sex: string;
  avatar: string;
}

function About() {
  const [data, setData] = useState([] as IUser[]);

  useEffect(() => {
    getList().then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="about-main">
      <Header name="关于我们" />
      <div className="about">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={item.name}
                description={`这是一位${item.sex}性, 今年${item.age}岁了`}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default About;
