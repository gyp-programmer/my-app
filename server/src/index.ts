/*
 * @Todo: 请补充模块描述
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-14 19:34:28
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import { getGptReply } from "./service/gpt";
const Koa = require("koa");
const Router = require("koa-router");
// const koaProxy = require("koa-proxy");
const request = require("request");
const querystring = require("querystring");
const bodyParser = require("koa-bodyparser");
const url = require("url");
const https = require("https");
const fs = require("fs");

const app = new Koa();
const router = new Router();

const proxy = {
  host: "http://127.0.0.1", //代理服务器地址
  port: 7890, //端口
};

router.post("/ttwid/check/", async (ctx: any) => {
  console.log(ctx.request.body);
  // const targetUrl = "https://www.tiktok.com";
  // const options = {
  //   headers: {
  //     "user-agent":
  //       "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
  //     //cookie: `_ttp=2Tdii7MlaZSEtTL8RC7ZqRWBBuM; tt_csrf_token=vbZnItDW-w9gedHbCSz8Fpw51jE4UjS3kbZ4; tiktok_webapp_theme=light; odin_tt=146e34dda42fac3ca4b14ed90a87be147a1f4267445fa42e34669a468240015f7376a8ac49453745959f0ba0404887490e58be6dbbaf7879506df313478457b4d2a4200ab687dae7e5d1ab2ea12cd7a5; delay_guest_mode_vid=3; s_v_web_id=verify_lzod3hx3_vkF2Nb7z_kGCE_4Shp_8Nw1_XyqaMpV0Hmji; ak_bmsc=834FE9A11D330EBAE6B055BE77B1CB69~000000000000000000000000000000~YAAQz1A7F+xBJieTAQAAW2qtOBkzx8FmnWdUSkv7mPZLagwGdqBZHkRiSwvShO+dz39gNSjfpQm8t+YwIlFF2u0KuFiyW4PyWScH0l6i9tPMF55puDcJWZvvLXMjTArB4tyyWUuG5IwXo9uUTFA8yNj0XOsxbPvnmy0aj3rVj3W+MpUQz93WP59acBtLAT489z2Hp1P+u5zApmc+9ubW4Bwusn+KQFUtoED5ymV7Vy3efQYTs5G71YwJAkjxFEcls9JFuLZ6iKfUHYPA/JZz5y8uMisWGp1TMwlcaX+9qvaP5nMl6INCNThUfbJYU6kaBCGH+VIXgCDD2im3cJioeL1f6MQQMiojGhoeXG/0ENFjRN/FqQyyoUh5XrxQ+DhwZ3wtLAVtQqkSG1Q=; tt_chain_token=nNKpBE0UTq/Nn4ZtqUnLWg==; bm_sv=97E2EC07BA4813B98E9512F72EBCBF40~YAAQz1A7F3BEJieTAQAAtsKuOBkif3Fq9gIfYTHbQ6wR6HoJrOKyjPNgUi0SiUR9xmrPxfhC1VML8+lruBWhbnyKb/sNsGGAkY+GtuVODKYOHvjV/74GZ37r12tz/Eg1586/UhW75DpCjM8/Z56xT5UbZ+cW4Sh/hfyLpGqdfijwYZbX0u6Rw9qCvbWWPaLdg9K42iH46Kxy3hbtLFxCmDWxqpn89Rr9P0ekUJKopsIeZcFyy8ePLETyL3xLfEJW~1; tiktok_webapp_theme_source=auto; ttwid=1%7CitwetinyOztdiIrMBwn1k-3Y6aOp9HBzd6TiYZ4tpKQ%7C1731822799%7Cb583630f99443e6df9fe9fb45dda965c0a262302a5d7aafb251684a08ad9f0b6; perf_feed_cache={%22expireTimestamp%22:1731992400000%2C%22itemIds%22:[%227428748283171949866%22%2C%227419234414162480391%22%2C%227421225623563095329%22]}; msToken=EL2Ncg69yxMtsQpbm5BTdz3hXEnZDaUlXFXVNuRiT8WDxhOiFoAwTXi1XjpC4QTisFh4EQ7i6Ed7IsUUTvoBFiGmk5CZuj5QyLiepHZ4L4XWxIacNyvVtPwQbKOidjuScRDF1mtXwei48Uui5ptuAEM5; msToken=EL2Ncg69yxMtsQpbm5BTdz3hXEnZDaUlXFXVNuRiT8WDxhOiFoAwTXi1XjpC4QTisFh4EQ7i6Ed7IsUUTvoBFiGmk5CZuj5QyLiepHZ4L4XWxIacNyvVtPwQbKOidjuScRDF1mtXwei48Uui5ptuAEM5`,
  //   },
  //   method: "POST",
  //   proxy,
  // };
  return {
    a: 1,
  };
  // return request(
  //   targetUrl + "/ttwid/check/",
  //   options,
  //   (error: any, response: any, body: any) => {
  //     if (!error && response.statusCode == 200) {
  //       console.log(response.body, response.statusCode);
  //       // 将目标服务器返回的响应体直接返回给客户端
  //       ctx.status = response.statusCode;
  //       ctx.type = "application/json";
  //       ctx.body = response.body;
  //     } else {
  //       ctx.status = response ? response.statusCode : 500;
  //       ctx.body = error ? error.message : "Internal Server Error";
  //     }
  //   },
  // );
});

/** 代理接口，用来修改响应头 */
router.get("/proxy", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const qs = querystring.parse(originUrl.query);
  const targetUrl = qs["target"];

  const options = {
    headers: {
      "user-agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
      //cookie: `_ttp=2Tdii7MlaZSEtTL8RC7ZqRWBBuM; tt_csrf_token=vbZnItDW-w9gedHbCSz8Fpw51jE4UjS3kbZ4; tiktok_webapp_theme=light; odin_tt=146e34dda42fac3ca4b14ed90a87be147a1f4267445fa42e34669a468240015f7376a8ac49453745959f0ba0404887490e58be6dbbaf7879506df313478457b4d2a4200ab687dae7e5d1ab2ea12cd7a5; delay_guest_mode_vid=3; s_v_web_id=verify_lzod3hx3_vkF2Nb7z_kGCE_4Shp_8Nw1_XyqaMpV0Hmji; ak_bmsc=834FE9A11D330EBAE6B055BE77B1CB69~000000000000000000000000000000~YAAQz1A7F+xBJieTAQAAW2qtOBkzx8FmnWdUSkv7mPZLagwGdqBZHkRiSwvShO+dz39gNSjfpQm8t+YwIlFF2u0KuFiyW4PyWScH0l6i9tPMF55puDcJWZvvLXMjTArB4tyyWUuG5IwXo9uUTFA8yNj0XOsxbPvnmy0aj3rVj3W+MpUQz93WP59acBtLAT489z2Hp1P+u5zApmc+9ubW4Bwusn+KQFUtoED5ymV7Vy3efQYTs5G71YwJAkjxFEcls9JFuLZ6iKfUHYPA/JZz5y8uMisWGp1TMwlcaX+9qvaP5nMl6INCNThUfbJYU6kaBCGH+VIXgCDD2im3cJioeL1f6MQQMiojGhoeXG/0ENFjRN/FqQyyoUh5XrxQ+DhwZ3wtLAVtQqkSG1Q=; tt_chain_token=nNKpBE0UTq/Nn4ZtqUnLWg==; bm_sv=97E2EC07BA4813B98E9512F72EBCBF40~YAAQz1A7F3BEJieTAQAAtsKuOBkif3Fq9gIfYTHbQ6wR6HoJrOKyjPNgUi0SiUR9xmrPxfhC1VML8+lruBWhbnyKb/sNsGGAkY+GtuVODKYOHvjV/74GZ37r12tz/Eg1586/UhW75DpCjM8/Z56xT5UbZ+cW4Sh/hfyLpGqdfijwYZbX0u6Rw9qCvbWWPaLdg9K42iH46Kxy3hbtLFxCmDWxqpn89Rr9P0ekUJKopsIeZcFyy8ePLETyL3xLfEJW~1; tiktok_webapp_theme_source=auto; ttwid=1%7CitwetinyOztdiIrMBwn1k-3Y6aOp9HBzd6TiYZ4tpKQ%7C1731822799%7Cb583630f99443e6df9fe9fb45dda965c0a262302a5d7aafb251684a08ad9f0b6; perf_feed_cache={%22expireTimestamp%22:1731992400000%2C%22itemIds%22:[%227428748283171949866%22%2C%227419234414162480391%22%2C%227421225623563095329%22]}; msToken=EL2Ncg69yxMtsQpbm5BTdz3hXEnZDaUlXFXVNuRiT8WDxhOiFoAwTXi1XjpC4QTisFh4EQ7i6Ed7IsUUTvoBFiGmk5CZuj5QyLiepHZ4L4XWxIacNyvVtPwQbKOidjuScRDF1mtXwei48Uui5ptuAEM5; msToken=EL2Ncg69yxMtsQpbm5BTdz3hXEnZDaUlXFXVNuRiT8WDxhOiFoAwTXi1XjpC4QTisFh4EQ7i6Ed7IsUUTvoBFiGmk5CZuj5QyLiepHZ4L4XWxIacNyvVtPwQbKOidjuScRDF1mtXwei48Uui5ptuAEM5`,
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "zh,zh-CN;q=0.9,en;q=0.8",
      "cache-control": "no-cache",
      pragma: "no-cache",
      priority: "u=0, i",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
    },
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include",
    proxy,
  };
  // 2.代发请求

  return new Promise((resolve, reject) => {
    request(targetUrl, options, (error: any, response: any, body: any) => {
      if (error) reject(error);
      if (!error && response.statusCode === 200) {
        // ctx.response.body = {
        //     status: 200,
        //     result: body,
        // }
        ctx.res.writeHead(200, { "Content-Type": "text/html" });

        ctx.res.end(body);
        resolve(true);
      } else {
        ctx.response.body = {
          status: response.statusCode,
          result: "forbidden",
        };
        resolve(true);
      }
    });
  });
});

/** 代理接口，用来修改响应头 */
router.get("/proxy-two", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const qs = querystring.parse(originUrl.query);
  const targetUrl = qs["target"];

  const options = {
    headers: {
      "user-agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
      //cookie: `_ttp=2Tdii7MlaZSEtTL8RC7ZqRWBBuM; tt_csrf_token=vbZnItDW-w9gedHbCSz8Fpw51jE4UjS3kbZ4; tiktok_webapp_theme=light; odin_tt=146e34dda42fac3ca4b14ed90a87be147a1f4267445fa42e34669a468240015f7376a8ac49453745959f0ba0404887490e58be6dbbaf7879506df313478457b4d2a4200ab687dae7e5d1ab2ea12cd7a5; delay_guest_mode_vid=3; s_v_web_id=verify_lzod3hx3_vkF2Nb7z_kGCE_4Shp_8Nw1_XyqaMpV0Hmji; ak_bmsc=834FE9A11D330EBAE6B055BE77B1CB69~000000000000000000000000000000~YAAQz1A7F+xBJieTAQAAW2qtOBkzx8FmnWdUSkv7mPZLagwGdqBZHkRiSwvShO+dz39gNSjfpQm8t+YwIlFF2u0KuFiyW4PyWScH0l6i9tPMF55puDcJWZvvLXMjTArB4tyyWUuG5IwXo9uUTFA8yNj0XOsxbPvnmy0aj3rVj3W+MpUQz93WP59acBtLAT489z2Hp1P+u5zApmc+9ubW4Bwusn+KQFUtoED5ymV7Vy3efQYTs5G71YwJAkjxFEcls9JFuLZ6iKfUHYPA/JZz5y8uMisWGp1TMwlcaX+9qvaP5nMl6INCNThUfbJYU6kaBCGH+VIXgCDD2im3cJioeL1f6MQQMiojGhoeXG/0ENFjRN/FqQyyoUh5XrxQ+DhwZ3wtLAVtQqkSG1Q=; tt_chain_token=nNKpBE0UTq/Nn4ZtqUnLWg==; bm_sv=97E2EC07BA4813B98E9512F72EBCBF40~YAAQz1A7F3BEJieTAQAAtsKuOBkif3Fq9gIfYTHbQ6wR6HoJrOKyjPNgUi0SiUR9xmrPxfhC1VML8+lruBWhbnyKb/sNsGGAkY+GtuVODKYOHvjV/74GZ37r12tz/Eg1586/UhW75DpCjM8/Z56xT5UbZ+cW4Sh/hfyLpGqdfijwYZbX0u6Rw9qCvbWWPaLdg9K42iH46Kxy3hbtLFxCmDWxqpn89Rr9P0ekUJKopsIeZcFyy8ePLETyL3xLfEJW~1; tiktok_webapp_theme_source=auto; ttwid=1%7CitwetinyOztdiIrMBwn1k-3Y6aOp9HBzd6TiYZ4tpKQ%7C1731822799%7Cb583630f99443e6df9fe9fb45dda965c0a262302a5d7aafb251684a08ad9f0b6; perf_feed_cache={%22expireTimestamp%22:1731992400000%2C%22itemIds%22:[%227428748283171949866%22%2C%227419234414162480391%22%2C%227421225623563095329%22]}; msToken=EL2Ncg69yxMtsQpbm5BTdz3hXEnZDaUlXFXVNuRiT8WDxhOiFoAwTXi1XjpC4QTisFh4EQ7i6Ed7IsUUTvoBFiGmk5CZuj5QyLiepHZ4L4XWxIacNyvVtPwQbKOidjuScRDF1mtXwei48Uui5ptuAEM5; msToken=EL2Ncg69yxMtsQpbm5BTdz3hXEnZDaUlXFXVNuRiT8WDxhOiFoAwTXi1XjpC4QTisFh4EQ7i6Ed7IsUUTvoBFiGmk5CZuj5QyLiepHZ4L4XWxIacNyvVtPwQbKOidjuScRDF1mtXwei48Uui5ptuAEM5`,
    },
    proxy,
  };
  // 2.代发请求

  return new Promise((resolve, reject) => {
    request(targetUrl, options, (error: any, response: any, body: any) => {
      if (error) reject(error);
      if (!error && response.statusCode === 200) {
        // ctx.response.body = {
        //     status: 200,
        //     result: body,
        // }
        ctx.res.writeHead(200, { "Content-Type": "text/html" });

        ctx.res.end(body);
        resolve(true);
      } else {
        ctx.response.body = {
          status: response.statusCode,
          result: "forbidden",
        };
        resolve(true);
      }
    });
  });
});

router.post("/answer", (ctx: any) => {
  return getGptReply(ctx);
});

app.use(async (ctx: any, next: any) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With",
  );
  ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if (ctx.method == "OPTIONS") {
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

const port = 10101;
// 1.创建代理服务
// 读取 SSL 证书文件+
const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

// 创建 HTTPS 服务器
https.createServer(options, app.callback()).listen(port, () => {
  console.log("Server running on https://localhost:" + port);
});
