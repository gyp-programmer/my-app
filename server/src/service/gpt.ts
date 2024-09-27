/*
 * 调用gpt接口获取回复
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-18 15:10:25
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
const request = require("request");

export const getGptReply = (ctx: any) => {
  // return new Promise((resolve, reject) => {
  //     request(apiKey, options, (error: any, response: any, body: any) => {
  //         if (error) {
  //             ctx.response.body = {
  //                 status: response,
  //                 result: '服务器错误'
  //             }
  //             resolve(true)
  //         }
  //         if (!error && response.statusCode === 200) {

  //             ctx.response.body = {
  //                 status: 200,
  //                 result: body,
  //             }
  //             resolve(true)

  //         } else {
  //             console.log(response)
  //             ctx.response.body = {
  //                 status: response.statusCode,
  //                 result: '获取数据失败'
  //             }
  //             resolve(true)

  //         }
  //     });
  // })
  return new Promise(resolve => {
    request(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        headers: {
          //   ":authority": "api.groq.com",
          //   ":method": "POST",
          //   ":path": "/openai/v1/chat/completions",
          //   ":scheme": "https",
          "accept-encoding": "gzip, deflate, br, zstd",
          accept: "*/*",
          "accept-language": "zh,zh-CN;q=0.9,en;q=0.8",
          authorization:
            "Bearer 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",
          "cache-control": "no-cache",
          "content-type": "application/json",
          "content-length": 1003,
          pragma: "no-cache",
          priority: "u=1, i",
          "sec-ch-ua":
            '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "none",
          cookie:
            "_ga=GA1.1.251559403.1725330488; stytch_session=hv-s0rhbf9Fw8hgmyrSeU2IaN0TwHv2mqeDVUCUN1kkP; intercom-device-id-zf3h6ufr=de9ab4cb-e626-4ef8-aa9e-dc95d6a0883e; stytch_session_jwt=eyJhbGciOiJSUzI1NiIsImtpZCI6Imp3ay1saXZlLTEyYTkzYTc0LWE3MWItNDJlMi1hODJiLTVjZTIyNjkxYTZkZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicHJvamVjdC1saXZlLWRkYzcxNDRlLTE2MTYtNDYzMy1iMDU4LTUxNjM5M2VlMGUxNSJdLCJleHAiOjE3MjUzMzMzMzYsImh0dHBzOi8vc3R5dGNoLmNvbS9zZXNzaW9uIjp7ImlkIjoic2Vzc2lvbi1saXZlLWVjMzAwNjE4LWM1YTktNDA0ZS1iMTI0LWJkZTgzYTdjZTM4MSIsInN0YXJ0ZWRfYXQiOiIyMDI0LTA5LTAzVDAyOjI4OjIyWiIsImxhc3RfYWNjZXNzZWRfYXQiOiIyMDI0LTA5LTAzVDAzOjEwOjM2WiIsImV4cGlyZXNfYXQiOiIyMDI0LTEwLTAzVDAyOjI4OjIyWiIsImF0dHJpYnV0ZXMiOnsidXNlcl9hZ2VudCI6IiIsImlwX2FkZHJlc3MiOiIifSwiYXV0aGVudGljYXRpb25fZmFjdG9ycyI6W3sidHlwZSI6Im9hdXRoIiwiZGVsaXZlcnlfbWV0aG9kIjoib2F1dGhfZ29vZ2xlIiwibGFzdF9hdXRoZW50aWNhdGVkX2F0IjoiMjAyNC0wOS0wM1QwMjoyODoyMloiLCJnb29nbGVfb2F1dGhfZmFjdG9yIjp7ImlkIjoib2F1dGgtdXNlci1saXZlLTgzNWUxNzVjLTNiMzUtNDFiYS05MTM0LWZhNmIzOTYzZTllYyIsInByb3ZpZGVyX3N1YmplY3QiOiIxMDI1NzY0ODY2OTkyODc5NjcxNTcifX1dfSwiaWF0IjoxNzI1MzMzMDM2LCJpc3MiOiJzdHl0Y2guY29tL3Byb2plY3QtbGl2ZS1kZGM3MTQ0ZS0xNjE2LTQ2MzMtYjA1OC01MTYzOTNlZTBlMTUiLCJuYmYiOjE3MjUzMzMwMzYsInN1YiI6InVzZXItbGl2ZS03OTQwNjAzMy0zYmVhLTQ2NTEtYTkzZi04NWE2YTgxZjQ2YWQifQ.ky1N48-LBq4QD78THZPkgkA84XoBjisNhx_CgO-oi5dJUfQxLmxEtH7LFUJOgooAreOHePMH-57eHTzdUsbYvp_TipcUZZNY77hCrZ0MOf3Q7H02WFt72HiGwOpSo8rVs7dMm2qNUB6N7_0Ar2p7_Jl8FSM9xi0hfsmwaY6vQizsjr89_VbU2zOYJXmnFohWmEeoeQdWMb5Eqtw8vImcJZzfOMPt4IUv2NUT3R_RUOP8xEuqX9HJU7mwQOPCjgq2ngm-JGDUx2YZcDWOHL9dWX9btHyDA5PZ-G2d9XKIbRBK6OMZmeQct2i_trKB0Aj8if7JFTdHDI63BvyBetrG6A; _ga_CQ9K0VPEEQ=GS1.1.1725333157.2.0.1725333157.0.0.0; __cf_bm=Qi4W4tajNgooG4UNfqC.MyE7GKaqTO.ravnPhqxydGo-1726648300-1.0.1.1-HCyGJ2_c4AlN4AuNg8WkHtA5pjcLtzHhy35gglFqJQbs.UyrXP6JvF4WO4ow1BKeRIr02qqDvzdhN1Kyx.ytjw",
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
          origin: "chrome-extension://ipfiijaobcenaibdpaacbbpbjefgekbj",
        },
        body: '{"model":"llama3-70b-8192","temperature":0.7,"top_p":0.7,"max_tokens":1024,"stream":true,"messages":[{"role":"system","content":"\\n你是一款 AI 智能助手，能回答用户提问的任何问题，并提供多种工具帮助解决问题（现在时间是2024-09-18 15:07:31）。\\n\\n具体要求如下：\\n# 回答格式\\n  - 请使用 Markdown 格式，以确保回答内容清晰易读。\\n  - 遇到公式时，请用 LaTeX 格式表示。例如，a/b 应表示为 $ \\frac{a}{b} $。\\n# 语言要求\\n  - 所有回答必须用中文。\\n# 回答内容\\n  - 若用户提问有关时效性的话题时，请基于当前时间 2024-09-18 15:07:31 进行回答。如’今天是几号‘, ’最近的有关Nvidia的新闻‘等\\n\\n\\n# 工具箱\\n你可以选择以下工具来更好地回答问题：\\n\\n最后，请记住，回答时一定要用中文回答。"},{"role":"user","content":"轮播图是什么呢"},{"role":"user","content":"什么事koa"}],"frequency_penalty":0,"presence_penalty":0}',
        method: "POST",
      },
      (error: any, response: any) => {
        if (error) {
          ctx.response.body = {
            status: response,
            result: "服务器错误",
          };
          resolve(true);
        }
        if (!error && response.statusCode === 200) {
          resolve(true);

          ctx.response.body = {
            status: response,
            result: "获取数据失败",
          };
          resolve(true);
        }
      },
    );
  });
};
