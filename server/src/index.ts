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
const request = require("request");
const querystring = require("querystring");
const bodyParser = require("koa-bodyparser");
const url = require("url");

const app = new Koa();
const router = new Router();

router.get("/", async (ctx: any) => {
  ctx.res.body = "hello world";
});

/** 代理接口，用来修改响应头 */
router.get("/proxy", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const qs = querystring.parse(originUrl.query);
  const targetUrl = qs["target"];

  const options = {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
      cookie: `ttwid=1%7CVHy98kNkwhuQ3iBBwx6hfMbdRnMn-1_GWGjtkdwpCNo%7C1726303386%7Cb0df27971c8823b16833e07beb3c3fdd79af2aa72542afbd237d8ed17d414d72; UIFID_TEMP=9e5c45806baed1121aef2e4ebdb50ae0783a7b9267143d29acaade7dde1bacd5a262cb925da77a784506425653bc9352334d72ad4580ae02fceae92d2cc91c0e1ae23fe69b8971251113d4ed717ba818; s_v_web_id=verify_m11wgr1i_ic9bLYkP_JcFt_40Jv_9jps_65gjSbq7MEGz; douyin.com; device_web_cpu_core=8; device_web_memory_size=8; hevc_supported=true; dy_swidth=1920; dy_sheight=1080; stream_recommend_feed_params=%22%7B%5C%22cookie_enabled%5C%22%3Atrue%2C%5C%22screen_width%5C%22%3A1920%2C%5C%22screen_height%5C%22%3A1080%2C%5C%22browser_online%5C%22%3Atrue%2C%5C%22cpu_core_num%5C%22%3A8%2C%5C%22device_memory%5C%22%3A8%2C%5C%22downlink%5C%22%3A10%2C%5C%22effective_type%5C%22%3A%5C%224g%5C%22%2C%5C%22round_trip_time%5C%22%3A100%7D%22; csrf_session_id=d905e30b75b4f11f0babdf667607c708; strategyABtestKey=%221726303397.488%22; fpk1=U2FsdGVkX1+ztd9jbAVtl4pE2T8HPnyoVChAiBeIaXSkxFot+bVH9F3m0+kd7DdYW7Eu/LGQpsd729jlVcadMA==; fpk2=fe0673f2a48d047b912b27e2a0c02f9f; passport_csrf_token=764228865c89c6e25544a4f6afbabf80; passport_csrf_token_default=764228865c89c6e25544a4f6afbabf80; bd_ticket_guard_client_web_domain=2; UIFID=9e5c45806baed1121aef2e4ebdb50ae0783a7b9267143d29acaade7dde1bacd57970444bf572733c678fdc796eabf24092e8f21c8112f11a3ac458cb24131621ff2ff39f1c4900e3af08b9d5e7842624d7c3417e12879032edafa07ae35421012a1964423183659f10a5858de199ae55b61afeb5e8e9515a843b99d2cde549d116ca71d91173bd0c3eea915918d7fb0f420f47dc9c7caf5488106f8c398f9ab6; FORCE_LOGIN=%7B%22videoConsumedRemainSeconds%22%3A180%7D; home_can_add_dy_2_desktop=%221%22; biz_trace_id=3f909b74; bd_ticket_guard_client_data=eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWl0ZXJhdGlvbi12ZXJzaW9uIjoxLCJiZC10aWNrZXQtZ3VhcmQtcmVlLXB1YmxpYy1rZXkiOiJCRUFPdkF5bkRqZDU1dk5DV0NsRFFsVzZNcTczTHNXNm1vU2VLemQrc1FNMWwxRktlSnczMXl3Nk5JQkNmc0ZKRHZJdmlKTUJqNGdSQWYvZ1JCbmVPSHM9IiwiYmQtdGlja2V0LWd1YXJkLXdlYi12ZXJzaW9uIjoxfQ%3D%3D; WallpaperGuide=%7B%22showTime%22%3A0%2C%22closeTime%22%3A0%2C%22showCount%22%3A0%2C%22cursor1%22%3A10%2C%22cursor2%22%3A2%7D; UIFID=9e5c45806baed1121aef2e4ebdb50ae0783a7b9267143d29acaade7dde1bacd57970444bf572733c678fdc796eabf24092e8f21c8112f11a3ac458cb24131621ff2ff39f1c4900e3af08b9d5e7842624d7c3417e12879032edafa07ae35421012a1964423183659f10a5858de199ae55b61afeb5e8e9515a843b99d2cde549d1713a03bb54b82f2c6f73613252e1bea8f109de4f23e1ddb82ed30562836f22a0; download_guide=%222%2F20240914%2F1%22; IsDouyinActive=false; __ac_nonce=066e5e264005e531925ae; __ac_signature=_02B4Z6wo00f01pDV3eAAAIDBwir9-5IWI.KQ9dlAAMLcd7; __ac_referer=__ac_blank`,
    },
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
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With"
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
app.listen(port);
