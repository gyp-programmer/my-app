/*
 * 检测当前lock文件的版本是否匹配
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-28 09:19:23
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
const currentLockVersion = 3;

const { lockfileVersion } = require("../package-lock.json");
const { engines } = require("../package.json");

if (lockfileVersion !== currentLockVersion) {
  console.error(
    `Required node version ${engines.node}.Ensure your current node version ${engines.node}, Then run "npm install" to update the lockfile.`,
  );
  process.exit(1);
}
