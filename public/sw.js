/*
 * 通过service-worker处理资源请求劫持
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-14 17:40:41
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

self.addEventListener("document", async event => {
  // @ts-ignore
  const { request } = event;
  if (request.url.startsWith("https://www.douyin.com")) {
    let response = await fetch(request);
    // 3.重新构造Response
    response = new Response(response.body, response);
    // 4.篡改响应头
    response.headers.delete("Content-Security-Policy");
    response.headers.delete("X-Frame-Options");

    // @ts-ignore
    event.respondWith(Promise.resolve(originalResponse));
  }
});
