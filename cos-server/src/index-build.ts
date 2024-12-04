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
/** 设置cookie域 */
const cookieDomain = {
  domain: "domain=tiktoksa.com;",
  Domain: "Domain=tiktoksa.com;",
};
const app = new Koa();
const router = new Router();
const regHost = /demo\.tiktoksa\.com/g;
const regLoginHost = /login\.tiktoksa\.com/g;
router.post("/passport/web/user/login/", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const qs = querystring.parse(originUrl.query);
  const targetUrl = qs["domain"];
  const host = "www.tiktok.com";
  const formData = Object.entries(ctx.request.body)
    .map(([key, value]) => {
      return `${key}=${value}`;
    })
    .join("&");
  const options = {
    headers: {
      ...ctx.request.header,
      host: targetUrl.replace("https://", ""),
      origin: ctx.request.header["origin"]
        .replace(regHost, host)
        .replace(regLoginHost, host),
      referer: ctx.request.header["referer"]
        .replace(regHost, host)
        .replace(regLoginHost, host),
      "accept-encoding": "",
    },
    method: "POST",
    body: formData,
    url:
      targetUrl +
      "/passport/web/user/login/?" +
      originUrl.query
        .replace(/domain=([^&]+)&$/, "")
        .replace(regHost, host)
        .replace(regLoginHost, host),
  };
  return new Promise((resolve, reject) => {
    request(options, (error: any, response: any, body: any) => {
      if (error) reject(error);
      if (!error && response.statusCode === 200) {
        // response.headers 中的 全部都要带上
        Object.keys(response.headers).forEach(key => {
          ctx.set(key, response.headers[key]);
        });
        /** 设置cookies */
        const cookies = response.headers["set-cookie"].map((o: string) => {
          return o.replace(/Domain=tiktok.com;/g, cookieDomain.Domain);
        });
        /** 为cookies中的每个key/value增加 SameSite=None; Secure */
        ctx.set("set-cookie", cookies);
        ctx.set("access-control-allow-origin", "https://demo.tiktoksa.com");
        ctx.body = body;
        resolve(true);
      } else {
        console.log(response, "error");
        ctx.body = {
          status: 502,
        };
        resolve(true);
      }
    });
  });
});

const handleRequest = async (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const qs = querystring.parse(originUrl.query);
  const targetUrl = qs["domain"];
  const host = "www.tiktok.com";

  const options = {
    headers: {
      ...ctx.request.header,
      host: targetUrl.replace("https://", ""),
      origin: ctx.request.header["origin"]
        .replace(regLoginHost, host)
        .replace(regHost, host),
      referer: ctx.request.header["referer"]
        .replace(regLoginHost, host)
        .replace(regHost, host),
    },
    method: "OPTIONS",
    url:
      targetUrl +
      "/passport/web/user/login/?" +
      originUrl.query
        .replace(/domain=([^&]+)&$/, "")
        .replace(regLoginHost, host)
        .replace(regHost, host),
  };
  const acceptHeader = ctx.request.header["access-control-request-headers"];
  return new Promise((resolve, reject) => {
    request(options, (error: any, response: any, _body: any) => {
      if (error) reject(error);
      if (!error && response.statusCode === 200) {
        // response.headers 中的 全部都要带上
        Object.keys(response.headers).forEach(key => {
          ctx.set(key, response.headers[key]);
        });
        /** 设置cookies */
        const cookies = response.headers["set-cookie"].map((o: string) => {
          return o.replace(/Domain=tiktok.com;/g, cookieDomain.Domain);
        });
        /** 为cookies中的每个key/value增加 SameSite=None; Secure */
        ctx.set("set-cookie", cookies);
        ctx.set("Access-Control-Allow-Origin", "https://demo.tiktoksa.com");
        ctx.set("Access-Control-Allow-Headers", acceptHeader);
        ctx.set("Access-Control-Allow-Methods", "POST");
        ctx.set("Access-Control-Allow-Credentials", true);
        ctx.body = 200;
        resolve(true);
      } else {
        console.log(response, "error");
        ctx.body = {
          status: 502,
        };
        resolve(true);
      }
    });
  });
};

app.use(async (ctx: any, next: any) => {
  if (ctx.method == "OPTIONS") {
    console.log("kjkjkj");
    await handleRequest(ctx);
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
const port = 443;
// 1.创建代理服务
// 读取 SSL 证书文件+
const options = {
  key: fs.readFileSync("login.tiktoksa.com.key"),
  cert: fs.readFileSync("login.tiktoksa.com_bundle.pem"),
};

// 创建 HTTPS 服务器
export default https.createServer(options, app.callback()).listen(port, () => {
  console.log("Server running on https://localhost:" + port);
});
