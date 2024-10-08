/*
 * 接口请求
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-04 14:31:28
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import { CSDN_RSS_URL } from "../constants";
import request from "../utils/request";

export const getList = () =>
  request({
    url: "/api/user/list",
    method: "get",
  });

export const getRssList = () =>
  request({
    url: CSDN_RSS_URL,
    method: "get",
  });
