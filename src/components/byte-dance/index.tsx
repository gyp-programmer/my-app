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
import { useUnMount } from "hooks/useUnMount";

const { Content, Sider } = Layout;
const musicUrl = "https://music-player-ivory-six.vercel.app/";
const cpUrl = "https://constellation-pro-eta.vercel.app/";
const umiUrl = "https://my-umi-app-kappa.vercel.app/";

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
      label: "字节抖音web端分析",
      comp: <GetVariable />,
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "音乐播放器",
      comp: MicroApp && <MicroApp url={musicUrl} name="music" />,
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: "星空物语",
      comp: MicroApp && (
        <MicroApp
          url={cpUrl}
          name="star"
          isCache={true}
          strictStyleIsolation={true}
        />
      ),
    },
    {
      key: "4",
      icon: <UserOutlined />,
      label: "umi应用",
      comp: MicroApp && (
        <MicroApp
          url={umiUrl}
          name="my-umi-app"
          isCache={true}
          strictStyleIsolation={true}
        />
      ),
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === "3") {
      document.documentElement.style.fontSize =
        document.documentElement.clientWidth / 3.75 + "px";
    } else {
      document.documentElement.style.fontSize = "16px";
    }
    setCurrentKey(key);
  };

  const childComp = useMemo(() => {
    return items.find(item => item.key === currentKey)?.comp;
  }, [currentKey]);

  useUnMount(() => {
    // 恢复fontsize
    document.documentElement.style.fontSize = "16px";
  });

  return (
    <div className="byte-dance">
      <Header name="微前端" />
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
                height: "100%",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                overflow: "auto",
                // 用来指定内部元素的fixed定位的祖先
                transform: "rotate(0)",
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
