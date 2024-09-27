/*
 * 类型定义
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-05 13:37:34
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
/** =====================  rss xml类型定义  ============================= */
export interface IRss {
  rss: IRssContent[];
}

export interface IRssContent {
  channel: IRssChannel[];
  _attr: {
    version: {
      _value: number;
    };
  };
}

export interface IRssText {
  _text: string;
}

export interface IRssChannel {
  copyright: IRssText[];
  description: Record<string, any>[];
  generator: IRssText[];
  item: IRssItem[];
  language: IRssText[];
  link: IRssText[];
  title: IRssText[];
}

export interface IRssItem {
  title: IRssText[];
  link: IRssText[];
  description: IRssText[];
  pubDate: IRssText[];
  author: IRssText[];
  category: any[];
  guid: IRssText[];
}
