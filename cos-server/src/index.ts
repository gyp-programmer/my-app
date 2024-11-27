/*
 * 用来获取静态资源的路径
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-11-25 08:55:21
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
const Koa = require("koa");
const Router = require("koa-router");
// const koaProxy = require("koa-proxy");
const request = require("request");
const querystring = require("querystring");
const bodyParser = require("koa-bodyparser");
const url = require("url");
const fs = require("fs");
const https = require("https");

const app = new Koa();
const router = new Router();

const proxy = {
  host: "http://127.0.0.1", //代理服务器地址
  port: 7890, //端口
};

router.post("/passport/web/store_region/", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const qs = querystring.parse(originUrl.query);
  const targetUrl = qs["domain"];
  const host = "www.tiktok.com";
  const options = {
    headers: {
      ...ctx.request.header,
      host,
      origin: ctx.request.header["origin"].replace(/gyp\.mytiktok\.com/, host),
      referer: ctx.request.header["origin"].replace(/gyp\.mytiktok\.com/, host),
    },
    proxy,
    method: "POST",
    formData: ctx.request.body,
    referrer: "https://www.tiktok.com/",
    url:
      targetUrl +
      "/passport/web/store_region/?" +
      originUrl.query
        .replace(/gyp\.mytiktok\.com/, host)
        .replace(/domain=([^&]+)/, ""), // 生产需要替换为host
  };
  console.log(options.headers, "headers========");

  return new Promise((resolve, reject) => {
    request(options, (error: any, response: any, body: any) => {
      if (error) reject(error);
      if (!error && response.statusCode === 200) {
        // response.headers 中的 全部都要带上
        Object.keys(response.headers).forEach(key => {
          ctx.set(key, response.headers[key]);
        });
        ctx.body = {
          data: {
            enabled_region_option: false,
            localized_country_name: "美国",
            store_region: "us",
          },
          message: "success",
        };
        resolve(true);
      } else {
        ctx.body = {
          message: "fail",
          body,
        };
        resolve(true);
      }
    });
  });
});

app.use(async (ctx: any, next: any) => {
  ctx.set("Access-Control-Allow-Origin", "https://gyp.mytiktok.com");
  ctx.set(
    "Access-Control-Allow-Headers",
    "tt-ticket-guard-iteration-version,tt-ticket-guard-public-key,tt-ticket-guard-version,tt-ticket-guard-web-version",
  );
  ctx.set("Access-Control-Allow-Methods", "POST");
  ctx.set("Access-Control-Allow-Credentials", true);
  if (ctx.method == "OPTIONS") {
    // await handleRequest(ctx);
    // console.log("ksjfkjks");
    ctx.body = 200;
  } else {
    await next();
  }
});

app.use(async (ctx: any, next: any) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  await next();
});
app.use(bodyParser());
// 注册路由
app.use(router.routes());

app.use(router.allowedMethods());

// 监听端口
const port = 8888;
// 1.创建代理服务
// 读取 SSL 证书文件+
const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

// 创建 HTTPS 服务器
export default https.createServer(options, app.callback()).listen(port, () => {
  console.log("Server running on https://localhost:" + port);
});
