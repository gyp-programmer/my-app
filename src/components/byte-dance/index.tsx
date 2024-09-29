/*
 * 分析字节跳动抖音web端技术
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-14 16:57:55
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React, { useMemo, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Header from "../header";
import GetVariable from "./get-variable";
import MicroApp from "./micro-app";
import "./index.scss";

const { Content, Sider } = Layout;

interface IItem {
  key: string;
  icon: React.ReactNode;
  label: string;
  comp: React.ReactNode | null;
}

function Byte() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [currentKey, setCurrentKey] = useState("1");
  const items: IItem[] = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "页面中自定义的变量",
      comp: <GetVariable />,
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "音乐播放器",
      comp: MicroApp && <MicroApp />,
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    setCurrentKey(key);
  };

  const childComp = useMemo(() => {
    return items.find(item => item.key === currentKey)?.comp;
  }, [currentKey]);

  return (
    <div className="byte-dance">
      <Header name="从技术角度分析抖音" />
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
            onClick={handleMenuClick}
          />
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              id="qiankun-container"
              style={{
                padding: 24,
                height: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                overflow: "auto",
              }}
            >
              {childComp}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Byte;
