/*
 * mock
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-04 14:25:16
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import Mock from "mockjs";
import mocks from "./file";

for (const mock of mocks) {
  Mock.mock(mock.url, mock.type, mock.response);
}
