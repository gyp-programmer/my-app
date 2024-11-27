/*
 * 入口时
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-11-26 15:07:26
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import app from "./src/index";

const port = 443;

app.listen(port, () => {
  console.log("Server running on https://localhost:" + port);
});
