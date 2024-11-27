/*
 * 启动pm2配置文件
 * 配置说明参考：https://juejin.cn/post/6926357629375610887
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-11-26 15:16:49
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
module.exports = {
  apps: [
    {
      name: "my-tiktok-app",
      script: "app.js",
      cwd: "./dist",
      // watch: true,
      // exec_mode: "cluster",
      // instances: 4,
      // 自定义应用程序的错误日志文件(错误日志文件)
      error_file: "./logs/app-err.log",
      // 自定义应用程序日志文件(正常日志文件)
      out_file: "./logs/app-out.log",
      // 指定日志文件的时间格式
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
