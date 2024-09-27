/*
 * rss订阅组件
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-05 10:09:02
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React, { useState } from "react";
import { getRssList } from "../../api";
import { xmlToDom, xmlToJson } from "../../utils";
import { useMount } from "hooks/useMount";
import { IRssItem } from "../../utils/types";
import { Result, Avatar, Card } from "antd";
import Header from "../header";
import "./index.scss";

const { Meta } = Card;

function Rss() {
  const [feeds, setFeeds] = useState([] as IRssItem[]);
  const [error, setError] = useState("");

  const getRss = async () => {
    try {
      const xml = await getRssList();
      const xmlDom = xmlToDom(xml as unknown as string);
      const tempJson = xmlToJson(xmlDom);
      if (!tempJson) return;
      setFeeds(tempJson.rss[0].channel[0].item);
    } catch (err: any) {
      console.log(err.message, "get rss error");
      setError(err.message || "get rss error");
    }
  };

  useMount(() => {
    getRss();
  });

  if (error) {
    return (
      <Result status="error" title="获取数据失败" subTitle={error}></Result>
    );
  }

  return (
    <div className="rss-container">
      <Header name="CSDN订阅文章" />

      <div className="rss">
        {feeds.map((feed) => (
          <Card
            key={feed.guid[0]._text}
            actions={[
              <a
                href={feed.link[0]._text}
                target="_blank"
                rel="noreferrer"
                key={feed.title[0]._text}
              >
                阅读全文
              </a>,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title={feed.title[0]._text}
              description={feed.description[0]._text}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Rss;
