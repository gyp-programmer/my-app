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

router.get("/api/inbox/notice_count/", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const targetUrl = "https://www.tiktok.com";
  const options = {
    headers: {
      cookie: ctx.request.header["cookie"],
      "user-agent": ctx.request.header["user-agent"],
    },
    proxy,
  };

  return new Promise((resolve, reject) => {
    request(
      targetUrl + "/api/inbox/notice_count/?" + originUrl.query,
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          // response.headers 中的
          Object.keys(response.headers).forEach(key => {
            ctx.set(key, response.headers[key]);
          });
          ctx.body = body;
          resolve(true);
        } else {
          ctx.body = {
            status: 502,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

router.get("/api/share/settings/", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const targetUrl = "https://www.tiktok.com";
  const options = {
    headers: {
      cookie: ctx.request.header["cookie"],
      "user-agent": ctx.request.header["user-agent"],
    },
    proxy,
  };

  return new Promise((resolve, reject) => {
    request(
      targetUrl + "/api/share/settings/?" + originUrl.query,
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          // response.headers 中的
          Object.keys(response.headers).forEach(key => {
            ctx.set(key, response.headers[key]);
          });
          ctx.body = body;
          resolve(true);
        } else {
          ctx.body = {
            status: 502,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

router.get("/aweme/v1/report/inbox/notice", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const targetUrl = "https://www.tiktok.com";
  const options = {
    headers: {
      cookie: ctx.request.header["cookie"],
      "user-agent": ctx.request.header["user-agent"],
    },
    proxy,
  };

  return new Promise((resolve, reject) => {
    request(
      targetUrl + "/aweme/v1/report/inbox/notice?" + originUrl.query,
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          ctx.set("content-type", "text/html");
          ctx.body = body;
          resolve(true);
        } else {
          ctx.body = {
            status: 502,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

router.get("/tiktok/linker/component/strategy/get/v1/", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const targetUrl = "https://www.tiktok.com";
  const options = {
    headers: {
      ...ctx.request.header,
      host: "www.tiktok.com",
      referer: ctx.request.header["referer"].replace(
        "https://gyp.mytiktok.com",
        targetUrl,
      ),
      "accept-encoding": "",
    },
    proxy,
  };

  return new Promise((resolve, reject) => {
    request(
      targetUrl +
        "/tiktok/linker/component/strategy/get/v1/?" +
        originUrl.query,
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          // response.headers 中的
          Object.keys(response.headers).forEach(key => {
            ctx.set(key, response.headers[key]);
          });
          ctx.body = body;
          resolve(true);
        } else {
          ctx.body = {
            status: 502,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

router.get("/api/v1/web-cookie-privacy/config", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const targetUrl = "https://www.tiktok.com";
  const options = {
    headers: {
      "x-web-privacy-sdk-ver": "1.0.1",
      "x-pns-referrer": ctx.request.header["x-pns-referrer"].replace(
        "https://gyp.mytiktok.com",
        targetUrl,
      ),
      cookie: ctx.request.header["cookie"],
      "user-agent": ctx.request.header["user-agent"],
    },
    proxy,
  };

  return new Promise((resolve, reject) => {
    request(
      targetUrl + "/api/v1/web-cookie-privacy/config?" + originUrl.query,
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          // response.headers 中的
          Object.keys(response.headers).forEach(key => {
            ctx.set(key, response.headers[key]);
          });
          ctx.body = body;
          resolve(true);
        } else {
          ctx.body = {
            status: 502,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

router.get("/api/policy/notice/", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const targetUrl = "https://www.tiktok.com";
  const options = {
    headers: {
      cookie: ctx.request.header["cookie"],
      "user-agent": ctx.request.header["user-agent"],
    },
    proxy,
  };

  return new Promise((resolve, reject) => {
    request(
      targetUrl + "/api/policy/notice/?" + originUrl.query,
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          // response.headers 中的
          Object.keys(response.headers).forEach(key => {
            ctx.set(key, response.headers[key]);
          });
          ctx.body = body;
          resolve(true);
        } else {
          ctx.body = {
            status: 502,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

/** 资源相关代理哦 */
const mssdkUrl = "https://mssdk-sg.tiktok.com";
router.get("/mssdk/web/ping", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const options = {
    headers: {
      cookie: ctx.request.header["cookie"],
      "user-agent": ctx.request.header["user-agent"],
    },
    proxy,
  };

  return new Promise((resolve, reject) => {
    request(
      mssdkUrl + "/web/ping?" + originUrl.query,
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          // response.headers 中的
          Object.keys(response.headers).forEach(key => {
            ctx.set(key, response.headers[key]);
          });
          /** 设置cookies */
          const cookies = response.headers["set-cookie"].map((o: string) => {
            return o
              .replace(/domain=tiktok.com;/g, "")
              .replace(/Domain=tiktok.com;/g, "");
          });
          /** 为cookies中的每个key/value增加 SameSite=None; Secure */
          cookies.forEach((o: string) => {
            ctx.set("set-cookie", `${o} ;SameSite=None; Secure`);
          });
          ctx.body = body;
          resolve(true);
        } else {
          ctx.body = {
            status: 502,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

router.post("/mssdk/web/report", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const options = {
    headers: {
      cookie: ctx.request.header["cookie"],
      "user-agent": ctx.request.header["user-agent"],
    },
    proxy,
    method: "POST",
    body: JSON.stringify(ctx.request.body),
  };

  return new Promise((resolve, reject) => {
    request(
      mssdkUrl + "/web/report?" + originUrl.query,
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          // response.headers 中的
          Object.keys(response.headers).forEach(key => {
            ctx.set(key, response.headers[key]);
          });
          /** 设置cookies */
          const cookies = response.headers["set-cookie"].map((o: string) => {
            return o
              .replace(/domain=tiktok.com;/g, "")
              .replace(/Domain=tiktok.com;/g, "");
          });
          /** 为cookies中的每个key/value增加 SameSite=None; Secure */
          cookies.forEach((o: string) => {
            ctx.set("set-cookie", `${o} ;SameSite=None; Secure`);
          });
          ctx.body = body;
          resolve(true);
        } else {
          ctx.body = {
            status: 502,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

router.post("/mssdk/web/common", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const options = {
    headers: {
      cookie: ctx.request.header["cookie"],
      "user-agent": ctx.request.header["user-agent"],
    },
    proxy,
    method: "POST",
    body: JSON.stringify(ctx.request.body),
  };

  return new Promise((resolve, reject) => {
    request(
      mssdkUrl + "/web/common?" + originUrl.query,
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          // response.headers 中的
          Object.keys(response.headers).forEach(key => {
            ctx.set(key, response.headers[key]);
          });
          /** 设置cookies */
          const cookies = response.headers["set-cookie"].map((o: string) => {
            return o
              .replace(/domain=tiktok.com;/g, "")
              .replace(/Domain=tiktok.com;/g, "");
          });
          /** 为cookies中的每个key/value增加 SameSite=None; Secure */
          cookies.forEach((o: string) => {
            ctx.set("set-cookie", `${o} ;SameSite=None; Secure`);
          });
          ctx.body = body;
          resolve(true);
        } else {
          ctx.body = {
            status: 502,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

router.get("/mssdk/web/resource", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const options = {
    headers: {
      cookie: ctx.request.header["cookie"],
      "user-agent": ctx.request.header["user-agent"],
    },
    proxy,
  };

  return new Promise((resolve, reject) => {
    request(
      mssdkUrl + "/web/resource?" + originUrl.query,
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          // response.headers 中的
          Object.keys(response.headers).forEach(key => {
            ctx.set(key, response.headers[key]);
          });
          /** 设置cookies */
          const cookies = response.headers["set-cookie"].map((o: string) => {
            return o
              .replace(/domain=tiktok.com;/g, "")
              .replace(/Domain=tiktok.com;/g, "");
          });
          /** 为cookies中的每个key/value增加 SameSite=None; Secure */
          cookies.forEach((o: string) => {
            ctx.set("set-cookie", `${o} ;SameSite=None; Secure`);
          });
          ctx.body = body;
          resolve(true);
        } else {
          ctx.body = {
            status: 502,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

router.get("/api/recommend/item_list/", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const targetUrl = "https://www.tiktok.com";
  const options = {
    headers: {
      cookie: ctx.request.header["cookie"],
      "user-agent": ctx.request.header["user-agent"],
    },
    proxy,
  };

  return new Promise((resolve, reject) => {
    request(
      targetUrl + "/api/recommend/item_list/?" + originUrl.query,
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          // response.headers 中的
          Object.keys(response.headers).forEach(key => {
            ctx.set(key, response.headers[key]);
          });
          /** 设置cookies */
          const cookies = response.headers["set-cookie"].map((o: string) => {
            return o
              .replace(/domain=tiktok.com;/g, "")
              .replace(/Domain=tiktok.com;/g, "");
          });
          /** 为cookies中的每个key/value增加 SameSite=None; Secure */
          cookies.forEach((o: string) => {
            ctx.set("set-cookie", `${o} ;SameSite=None; Secure`);
          });
          // node处理方式
          // 相关域名全部替换为根域名，转发
          // https://v16-webapp-prime.tiktok.com
          ctx.body = body
            .replace(
              /https:\/\/v16-webapp-prime.tiktok.com\//g,
              "https://gyp.mytiktok.com/",
            )
            .replace(
              /https:\/\/v16-webapp-prime\.us\.tiktok.com\//g,
              "https://gyp.mytiktok.com/us-video/",
            )
            .replace(
              /https:\/\/v19-webapp-prime\.us\.tiktok.com\//g,
              "https://gyp.mytiktok.com/v19/us-video/",
            );
          resolve(true);
        } else {
          ctx.body = {
            status: 502,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

router.post("/api/global-footer/graphql", (ctx: any) => {
  const targetUrl = "https://www.tiktok.com";
  const options = {
    headers: {
      cookie: ctx.request.header["cookie"],
      "user-agent": ctx.request.header["user-agent"],
      "content-type": "application/json; charset=utf-8",
    },
    proxy,
    method: "POST",
    body: JSON.stringify(ctx.request.body),
    url: targetUrl + "/api/global-footer/graphql",
  };

  return new Promise((resolve, reject) => {
    request(options, (error: any, response: any, body: any) => {
      if (error) reject(error);
      if (!error && response.statusCode === 200) {
        // response.headers 中的 全部都要带上
        Object.keys(response.headers).forEach(key => {
          ctx.set(key, response.headers[key]);
        });
        ctx.body = body;
        resolve(true);
      } else {
        console.log(response, "error");
        ctx.body = {
          status: 502,
          result: "forbidden",
        };
        resolve(true);
      }
    });
  });
});

router.post("/ttwid/check/", (ctx: any) => {
  const targetUrl = "https://www.tiktok.com";
  const options = {
    headers: {
      cookie: ctx.request.header["cookie"],
      "user-agent": ctx.request.header["user-agent"],
    },
    proxy,
    method: "POST",
    body: JSON.stringify({
      ...ctx.request.body,
    }),
    url: targetUrl + "/ttwid/check/",
  };

  return new Promise((resolve, reject) => {
    request(options, (error: any, response: any, body: any) => {
      if (error) reject(error);
      if (!error && response.statusCode === 200) {
        // response.headers 中的 全部都要带上
        Object.keys(response.headers).forEach(key => {
          // 单独设置cookie
          if (!key.includes("set-cookie")) {
            ctx.set(key, response.headers[key]);
          }
        });
        /** 设置cookies */
        const cookies = response.headers["set-cookie"]
          ? response.headers["set-cookie"].map((o: string) => {
              return o
                .replace(/domain=tiktok.com;/g, "")
                .replace(/Domain=tiktok.com;/g, "");
            })
          : [];
        /** 为cookies中的每个key/value增加 SameSite=None; Secure */
        cookies.forEach((o: string) => {
          ctx.set("set-cookie", `${o} ;SameSite=None; Secure`);
        });
        ctx.body = body;
        resolve(true);
      } else {
        console.log(response, "error");
        ctx.body = {
          status: 502,
          result: "forbidden",
        };
        resolve(true);
      }
    });
  });
});

router.post("/passport/web/store_region/", (ctx: any) => {
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
      origin: ctx.request.header["origin"].replace(/gyp\.mytiktok\.com/, host),
      referer: ctx.request.header["referer"].replace(
        /gyp\.mytiktok\.com/,
        host,
      ),
      "accept-encoding": "",
    },
    proxy,
    method: "POST",
    body: formData,
    url:
      targetUrl +
      "/passport/web/store_region/?" +
      originUrl.query
        .replace(/gyp\.mytiktok\.com/, host)
        .replace(/domain=([^&]+)/, ""), // 生产需要替换为host
  };

  return new Promise((resolve, reject) => {
    request(options, (error: any, response: any, body: any) => {
      if (error) reject(error);
      console.log(response, "response");
      if (!error && response.statusCode === 200) {
        // response.headers 中的 全部都要带上
        Object.keys(response.headers).forEach(key => {
          ctx.set(key, response.headers[key]);
        });
        /** 设置cookies */
        const cookies = response.headers["set-cookie"].map((o: string) => {
          return (
            o.replace(/Domain=tiktok.com;/g, "") + ";SameSite=None; Secure"
          );
        });
        cookies.forEach((o: string) => {
          ctx.set("set-cookie", o);
        });
        ctx.body = body;
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

router.post("/passport/web/region/", (ctx: any) => {
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
      origin: ctx.request.header["origin"].replace(/gyp\.mytiktok\.com/, host),
      referer: ctx.request.header["referer"].replace(
        /gyp\.mytiktok\.com/,
        host,
      ),
      "accept-encoding": "",
    },
    proxy,
    method: "POST",
    body: formData,
    url:
      targetUrl +
      "/passport/web/region/?" +
      originUrl.query.replace(/domain=([^&]+)/, ""),
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
          return o
            .replace(/domain=tiktok.com;/g, "")
            .replace(/Domain=tiktok.com;/g, "");
        });
        /** 为cookies中的每个key/value增加 SameSite=None; Secure */
        cookies.forEach((o: string) => {
          ctx.set("set-cookie", o);
        });
        ctx.body = body;
        resolve(true);
      } else {
        console.log(response, "error");
        ctx.body = {
          message: "fail",
          body,
        };
        resolve(true);
      }
    });
  });
});

router.post("/passport/web/auth_broadcast/", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const qs = querystring.parse(originUrl.query);
  const targetUrl = qs["domain"];
  const host = "www.tiktok.com";
  const options = {
    headers: {
      ...ctx.request.header,
      host: targetUrl.replace("https://", ""),
      origin: ctx.request.header["origin"].replace(/gyp\.mytiktok\.com/, host),
      referer: ctx.request.header["referer"].replace(
        /gyp\.mytiktok\.com/,
        host,
      ),
      "accept-encoding": "",
    },
    proxy,
    method: "POST",
    url:
      targetUrl +
      "/passport/web/auth_broadcast/?" +
      originUrl.query.replace(/domain=([^&]+)/, ""),
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
          return (
            o.replace(/Domain=tiktok.com;/g, "") + ";SameSite=None; Secure"
          );
        });
        /** 为cookies中的每个key/value增加 SameSite=None; Secure */
        cookies.forEach((o: string) => {
          ctx.set("set-cookie", o);
        });
        ctx.body = body;
        resolve(true);
      } else {
        console.log(response, "error");
        ctx.body = {
          message: "fail",
          body,
        };
        resolve(true);
      }
    });
  });
});

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
      origin: ctx.request.header["origin"].replace(/gyp\.mytiktok\.com/, host),
      referer: ctx.request.header["referer"].replace(
        /gyp\.mytiktok\.com/,
        host,
      ),
      "accept-encoding": "",
    },
    proxy,
    method: "POST",
    body: formData,
    url:
      targetUrl +
      "/passport/web/user/login/?" +
      originUrl.query.replace(/domain=([^&]+)/, ""),
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
          return o.replace(/Domain=tiktok.com;/g, "");
        });
        /** 为cookies中的每个key/value增加 SameSite=None; Secure */
        cookies.forEach((o: string) => {
          ctx.set("set-cookie", o);
        });
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

router.get("/api/policy/notice/", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const targetUrl = "https://www.tiktok.com";
  const options = {
    headers: {
      "user-agent": ctx.request.header["user-agent"],
    },
    proxy,
    url: targetUrl + "/api/policy/notice/?" + originUrl.query,
  };

  return new Promise((resolve, reject) => {
    request(options, (error: any, response: any, body: any) => {
      if (error) reject(error);
      if (!error && response.statusCode === 200) {
        // response.headers 中的 全部都要带上
        Object.keys(response.headers).forEach(key => {
          ctx.set(key, response.headers[key]);
        });
        ctx.body = body;
        resolve(true);
      } else {
        ctx.body = {
          status: 502,
          result: "forbidden",
        };
        resolve(true);
      }
    });
  });
});
router.get("/api/compliance/settings/", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const targetUrl = "https://www.tiktok.com";
  const host = "www.tiktok.com";
  const options = {
    headers: {
      "user-agent": ctx.request.header["user-agent"],
      cookie: ctx.request.header["cookie"],
    },
    proxy,
  };

  return new Promise((resolve, reject) => {
    request(
      targetUrl +
        "/api/compliance/settings/?" +
        originUrl.query.replace(/gyp\.mytiktok\.com/g, host),
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          // response.headers 中的 全部都要带上
          Object.keys(response.headers).forEach(key => {
            ctx.set(key, response.headers[key]);
          });
          ctx.body = body;
          resolve(true);
        } else {
          console.log(response, "error");
          ctx.body = {
            status: 502,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});
// https://www.tiktok.com/login/?enter_method=enter_personal_homepage&enter_from=personal_homepage&launch_type=0&lang=en&redirect_url=https%3A%2F%2Fgyp.mytiktok.com%2Fprofile
const getPage = (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const query = originUrl.query;
  const targetUrl = "https://www.tiktok.com" + ctx.request.url + `?${query}`;
  const options = {
    headers: {
      ...ctx.request.header,
      host: "www.tiktok.com",
      "accept-encoding": "",
    },
    proxy,
  };
  // 2.代发请求

  return new Promise((resolve, reject) => {
    request(targetUrl, options, (error: any, response: any, body: any) => {
      if (error) reject(error);
      if (!error && response.statusCode === 200) {
        /** 设置cookies */
        const cookies = response.headers["set-cookie"].map((o: string) => {
          return (
            o
              .replace(/domain=\.tiktok.com;/g, "")
              .replace(/Domain=\.tiktok.com;/g, "") + ";SameSite=None; Secure"
          );
        });

        ctx.res.writeHead(200, {
          ...response.headers,
          "Content-Type": "text/html;charset=utf-8",
          "Set-Cookie": cookies,
          "reporting-endpoints": "",
          "content-security-policy": "",
          link: "",
        });
        let newBody = body;

        /** 更换需要更改的文件 */
        if (body.indexOf("webapp-mobile-islands.") > 0) {
          newBody = newBody.replace(
            /<script[^>]*src="[^"]*webapp-mobile-islands\.[^"]*"[^>]*><\/script>/,
            '<script data-chunk="webapp-mobile-islands" async src="https://gyp3.mytiktok.com:8080/webapp-mobile-islands.js"></script>',
          );
          newBody = newBody.replace(
            /<link[^>]*href="[^"]*webapp-mobile-islands\.[^"]*"[^>]*>/,
            '<link data-chunk="webapp-mobile-islands" rel="preload" as="script" href="https://gyp3.mytiktok.com:8080/webapp-mobile-islands.js">',
          );

          if (newBody.indexOf("runtime.") > 0) {
            // newBody = newBody.replace(
            //   /<script[^>]*src="[^"]*runtime\.[^"]*"[^>]*><\/script>/,
            //   '<script data-chunk="webapp-mobile-islands" async src="https://gyp3.mytiktok.com:8080/runtime-islands.js"></script>',
            // );
            // newBody = newBody.replace(
            //   /<link[^>]*href="[^"]*runtime\.[^"]*"[^>]*>/,
            //   '<link data-chunk="webapp-mobile-islands" rel="preload" as="script" href="https://gyp3.mytiktok.com:8080/runtime-islands.js">',
            // );
          }
        }

        if (newBody.indexOf("webapp-mobile.") > 0) {
          newBody = newBody.replace(
            /<script[^>]*src="[^"]*webapp-mobile\.[^"]*"[^>]*><\/script>/,
            '<script data-chunk="webapp-mobile" async src="https://gyp3.mytiktok.com:8080/webapp-mobile.js"></script>',
          );
          newBody = newBody.replace(
            /<link[^>]*href="[^"]*webapp-mobile\.[^"]*"[^>]*>/,
            '<link data-chunk="webapp-mobile" rel="preload" as="script" href="https://gyp3.mytiktok.com:8080/webapp-mobile.js">',
          );
          if (newBody.indexOf("multi-cluster-domain.") > 0) {
            newBody = newBody.replace(
              /<script[^>]*src="[^"]*multi-cluster-domain\.[^"]*"[^>]*><\/script>/,
              '<script data-chunk="webapp-mobile" async src="https://gyp3.mytiktok.com:8080/multi-cluster-domain.js"></script>',
            );
            newBody = newBody.replace(
              /<link[^>]*href="[^"]*multi-cluster-domain\.[^"]*"[^>]*>/,
              '<link data-chunk="webapp-mobile" rel="preload" as="script" href="https://gyp3.mytiktok.com:8080/multi-cluster-domain.js">',
            );
          }
          if (newBody.indexOf("vendor.") > 0) {
            newBody = newBody.replace(
              /<script[^>]*src="[^"]*vendor\.[^"]*"[^>]*><\/script>/,
              '<script data-chunk="webapp-mobile" async src="https://gyp3.mytiktok.com:8080/verdor.js"></script>',
            );
            newBody = newBody.replace(
              /<link[^>]*href="[^"]*vendor\.[^"]*"[^>]*>/,
              '<link data-chunk="webapp-mobile" rel="preload" as="script" href="https://gyp3.mytiktok.com:8080/verdor.js">',
            );
          }
          if (newBody.indexOf("runtime.") > 0) {
            newBody = newBody.replace(
              /<script[^>]*src="[^"]*runtime\.[^"]*"[^>]*><\/script>/,
              '<script data-chunk="webapp-mobile" async src="https://gyp3.mytiktok.com:8080/runtime.js"></script>',
            );
            newBody = newBody.replace(
              /<link[^>]*href="[^"]*runtime\.[^"]*"[^>]*>/,
              '<link data-chunk="webapp-mobile" rel="preload" as="script" href="https://gyp3.mytiktok.com:8080/runtime.js">',
            );
          }
        }

        // if (newBody.indexOf("3152.") > 0) {
        //   newBody = newBody.replace(
        //     /<script[^>]*src="[^"]*3152\.[^"]*"[^>]*><\/script>/,
        //     '<script data-chunk="user-login" async src="https://gyp3.mytiktok.com:8080/3152.js"></script>',
        //   );
        //   newBody = newBody.replace(
        //     /<link[^>]*href="[^"]*3152\.[^"]*"[^>]*>/,
        //     '<link data-chunk="user-login" rel="preload" as="script" href="https://gyp3.mytiktok.com:8080/3152.js">',
        //   );
        // }

        if (newBody.indexOf("webapp-login-page.") > 0) {
          newBody = newBody.replace(
            /<script[^>]*src="[^"]*webapp-login-page\.[^"]*"[^>]*><\/script>/,
            '<script data-chunk="user-login" async src="https://gyp3.mytiktok.com:8080/weapp-login-page.js"></script>',
          );
          newBody = newBody.replace(
            /<link[^>]*href="[^"]*webapp-login-page\.[^"]*"[^>]*>/,
            '<link data-chunk="user-login" rel="preload" as="script" href="https://gyp3.mytiktok.com:8080/weapp-login-page.js">',
          );

          if (newBody.indexOf("vendor.") > 0) {
            newBody = newBody.replace(
              /<script[^>]*src="[^"]*vendor\.[^"]*"[^>]*><\/script>/,
              '<script data-chunk="webapp-login-page" async src="https://gyp3.mytiktok.com:8080/verdor-islands.js"></script>',
            );
            newBody = newBody.replace(
              /<link[^>]*href="[^"]*vendor\.[^"]*"[^>]*>/,
              '<link data-chunk="webapp-login-page" rel="preload" as="script" href="https://gyp3.mytiktok.com:8080/verdor-islands.js">',
            );
          }
          if (newBody.indexOf("runtime.") > 0) {
            newBody = newBody.replace(
              /<script[^>]*src="[^"]*runtime\.[^"]*"[^>]*><\/script>/,
              '<script data-chunk="webapp-login-page" async src="https://gyp3.mytiktok.com:8080/runtime.login.js"></script>',
            );
            newBody = newBody.replace(
              /<link[^>]*href="[^"]*runtime\.[^"]*"[^>]*>/,
              '<link data-chunk="webapp-login-page" rel="preload" as="script" href="https://gyp3.mytiktok.com:8080/runtime.login.js">',
            );
          }
        }
        // if (newBody.indexOf("webapp-login-page.") > 0) {
        //   newBody = newBody.replace(
        //     /<script[^>]*src="[^"]*webapp-login-page\.[^"]*"[^>]*><\/script>/,
        //     '<script data-chunk="user-login" async src="https://gyp3.mytiktok.com:8080/weapp-login-page.js"></script>',
        //   );
        //   newBody = newBody.replace(
        //     /<link[^>]*href="[^"]*webapp-login-page\.[^"]*"[^>]*>/,
        //     '<link data-chunk="user-login" rel="preload" as="script" href="https://gyp3.mytiktok.com:8080/weapp-login-page.js">',
        //   );

        //   if (newBody.indexOf("vendor.") > 0) {
        //     newBody = newBody.replace(
        //       /<script[^>]*src="[^"]*vendor\.[^"]*"[^>]*><\/script>/,
        //       '<script data-chunk="webapp-login-page" async src="https://gyp3.mytiktok.com:8080/verdor-islands.js"></script>',
        //     );
        //     newBody = newBody.replace(
        //       /<link[^>]*href="[^"]*vendor\.[^"]*"[^>]*>/,
        //       '<link data-chunk="webapp-login-page" rel="preload" as="script" href="https://gyp3.mytiktok.com:8080/verdor-islands.js">',
        //     );
        //   }
        //   if (newBody.indexOf("runtime.") > 0) {
        //     newBody = newBody.replace(
        //       /<script[^>]*src="[^"]*runtime\.[^"]*"[^>]*><\/script>/,
        //       '<script data-chunk="webapp-login-page" async src="https://gyp3.mytiktok.com:8080/runtime.login.js"></script>',
        //     );
        //     newBody = newBody.replace(
        //       /<link[^>]*href="[^"]*runtime\.[^"]*"[^>]*>/,
        //       '<link data-chunk="webapp-login-page" rel="preload" as="script" href="https://gyp3.mytiktok.com:8080/runtime.login.js">',
        //     );
        //   }
        // }

        ctx.res.end(newBody);
        resolve(true);
      } else {
        ctx.response.body = {
          status: 500,
          result: "forbidden",
        };
        resolve(true);
      }
    });
  });
};
/** 代理接口，用来修改响应头 */
router.get("/profile", getPage);
router.get("/", getPage);
router.get("/login", getPage);
router.get("/signup", getPage);
router.get("/foryou", getPage);

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
        console.log(body, "kkkk");
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

router.post("/tea/service/2/abtest_config/", (ctx: any) => {
  const teaUrl = "https://libraweb-sg.tiktok.com";
  const options = {
    headers: {
      "user-agent": ctx.request.header["user-agent"],
      "content-type": ctx.request.header["content-type"],
      origin: "https://www.tiktok.com",
      referer: "https://www.tiktok.com/",
    },
    proxy,
    method: "POST",
    body: JSON.stringify(ctx.request.body),
    url: teaUrl + "/service/2/abtest_config/",
  };

  return new Promise((resolve, reject) => {
    request(options, (error: any, response: any, body: any) => {
      if (error) reject(error);
      if (!error && response.statusCode === 200) {
        ctx.set("content-type", "application/json; charset=utf-8");
        ctx.body = body;
        resolve(true);
      } else {
        console.log(response, "error");
        ctx.body = {
          status: 502,
          result: "forbidden",
        };
        resolve(true);
      }
    });
  });
});

router.post("/tea/v1/list", (ctx: any) => {
  const teaUrl = "https://mcs.tiktokw.us";
  const options = {
    headers: {
      "user-agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
      //cookie: `_ttp=2Tdii7MlaZSEtTL8RC7ZqRWBBuM; tt_csrf_token=vbZnItDW-w9gedHbCSz8Fpw51jE4UjS3kbZ4; tiktok_webapp_theme=light; odin_tt=146e34dda42fac3ca4b14ed90a87be147a1f4267445fa42e34669a468240015f7376a8ac49453745959f0ba0404887490e58be6dbbaf7879506df313478457b4d2a4200ab687dae7e5d1ab2ea12cd7a5; delay_guest_mode_vid=3; s_v_web_id=verify_lzod3hx3_vkF2Nb7z_kGCE_4Shp_8Nw1_XyqaMpV0Hmji; ak_bmsc=834FE9A11D330EBAE6B055BE77B1CB69~000000000000000000000000000000~YAAQz1A7F+xBJieTAQAAW2qtOBkzx8FmnWdUSkv7mPZLagwGdqBZHkRiSwvShO+dz39gNSjfpQm8t+YwIlFF2u0KuFiyW4PyWScH0l6i9tPMF55puDcJWZvvLXMjTArB4tyyWUuG5IwXo9uUTFA8yNj0XOsxbPvnmy0aj3rVj3W+MpUQz93WP59acBtLAT489z2Hp1P+u5zApmc+9ubW4Bwusn+KQFUtoED5ymV7Vy3efQYTs5G71YwJAkjxFEcls9JFuLZ6iKfUHYPA/JZz5y8uMisWGp1TMwlcaX+9qvaP5nMl6INCNThUfbJYU6kaBCGH+VIXgCDD2im3cJioeL1f6MQQMiojGhoeXG/0ENFjRN/FqQyyoUh5XrxQ+DhwZ3wtLAVtQqkSG1Q=; tt_chain_token=nNKpBE0UTq/Nn4ZtqUnLWg==; bm_sv=97E2EC07BA4813B98E9512F72EBCBF40~YAAQz1A7F3BEJieTAQAAtsKuOBkif3Fq9gIfYTHbQ6wR6HoJrOKyjPNgUi0SiUR9xmrPxfhC1VML8+lruBWhbnyKb/sNsGGAkY+GtuVODKYOHvjV/74GZ37r12tz/Eg1586/UhW75DpCjM8/Z56xT5UbZ+cW4Sh/hfyLpGqdfijwYZbX0u6Rw9qCvbWWPaLdg9K42iH46Kxy3hbtLFxCmDWxqpn89Rr9P0ekUJKopsIeZcFyy8ePLETyL3xLfEJW~1; tiktok_webapp_theme_source=auto; ttwid=1%7CitwetinyOztdiIrMBwn1k-3Y6aOp9HBzd6TiYZ4tpKQ%7C1731822799%7Cb583630f99443e6df9fe9fb45dda965c0a262302a5d7aafb251684a08ad9f0b6; perf_feed_cache={%22expireTimestamp%22:1731992400000%2C%22itemIds%22:[%227428748283171949866%22%2C%227419234414162480391%22%2C%227421225623563095329%22]}; msToken=EL2Ncg69yxMtsQpbm5BTdz3hXEnZDaUlXFXVNuRiT8WDxhOiFoAwTXi1XjpC4QTisFh4EQ7i6Ed7IsUUTvoBFiGmk5CZuj5QyLiepHZ4L4XWxIacNyvVtPwQbKOidjuScRDF1mtXwei48Uui5ptuAEM5; msToken=EL2Ncg69yxMtsQpbm5BTdz3hXEnZDaUlXFXVNuRiT8WDxhOiFoAwTXi1XjpC4QTisFh4EQ7i6Ed7IsUUTvoBFiGmk5CZuj5QyLiepHZ4L4XWxIacNyvVtPwQbKOidjuScRDF1mtXwei48Uui5ptuAEM5`,
    },
    proxy,
    method: "POST",
    body: JSON.stringify(ctx.request.body),
    url: teaUrl + "/v1/list",
  };

  return new Promise((resolve, reject) => {
    request(options, (error: any, response: any, body: any) => {
      if (error) reject(error);
      if (!error && response.statusCode === 200) {
        ctx.set("content-type", "application/json; charset=utf-8");
        ctx.body = body;
        resolve(true);
      } else {
        console.log(response, "error");
        ctx.body = {
          status: 502,
          result: "forbidden",
        };
        resolve(true);
      }
    });
  });
});

router.post("/abtea/service/2/abtest_config/", (ctx: any) => {
  const teaABUrl = "https://libraweb-va.tiktok.com";
  const options = {
    headers: {
      "user-agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
      //cookie: `_ttp=2Tdii7MlaZSEtTL8RC7ZqRWBBuM; tt_csrf_token=vbZnItDW-w9gedHbCSz8Fpw51jE4UjS3kbZ4; tiktok_webapp_theme=light; odin_tt=146e34dda42fac3ca4b14ed90a87be147a1f4267445fa42e34669a468240015f7376a8ac49453745959f0ba0404887490e58be6dbbaf7879506df313478457b4d2a4200ab687dae7e5d1ab2ea12cd7a5; delay_guest_mode_vid=3; s_v_web_id=verify_lzod3hx3_vkF2Nb7z_kGCE_4Shp_8Nw1_XyqaMpV0Hmji; ak_bmsc=834FE9A11D330EBAE6B055BE77B1CB69~000000000000000000000000000000~YAAQz1A7F+xBJieTAQAAW2qtOBkzx8FmnWdUSkv7mPZLagwGdqBZHkRiSwvShO+dz39gNSjfpQm8t+YwIlFF2u0KuFiyW4PyWScH0l6i9tPMF55puDcJWZvvLXMjTArB4tyyWUuG5IwXo9uUTFA8yNj0XOsxbPvnmy0aj3rVj3W+MpUQz93WP59acBtLAT489z2Hp1P+u5zApmc+9ubW4Bwusn+KQFUtoED5ymV7Vy3efQYTs5G71YwJAkjxFEcls9JFuLZ6iKfUHYPA/JZz5y8uMisWGp1TMwlcaX+9qvaP5nMl6INCNThUfbJYU6kaBCGH+VIXgCDD2im3cJioeL1f6MQQMiojGhoeXG/0ENFjRN/FqQyyoUh5XrxQ+DhwZ3wtLAVtQqkSG1Q=; tt_chain_token=nNKpBE0UTq/Nn4ZtqUnLWg==; bm_sv=97E2EC07BA4813B98E9512F72EBCBF40~YAAQz1A7F3BEJieTAQAAtsKuOBkif3Fq9gIfYTHbQ6wR6HoJrOKyjPNgUi0SiUR9xmrPxfhC1VML8+lruBWhbnyKb/sNsGGAkY+GtuVODKYOHvjV/74GZ37r12tz/Eg1586/UhW75DpCjM8/Z56xT5UbZ+cW4Sh/hfyLpGqdfijwYZbX0u6Rw9qCvbWWPaLdg9K42iH46Kxy3hbtLFxCmDWxqpn89Rr9P0ekUJKopsIeZcFyy8ePLETyL3xLfEJW~1; tiktok_webapp_theme_source=auto; ttwid=1%7CitwetinyOztdiIrMBwn1k-3Y6aOp9HBzd6TiYZ4tpKQ%7C1731822799%7Cb583630f99443e6df9fe9fb45dda965c0a262302a5d7aafb251684a08ad9f0b6; perf_feed_cache={%22expireTimestamp%22:1731992400000%2C%22itemIds%22:[%227428748283171949866%22%2C%227419234414162480391%22%2C%227421225623563095329%22]}; msToken=EL2Ncg69yxMtsQpbm5BTdz3hXEnZDaUlXFXVNuRiT8WDxhOiFoAwTXi1XjpC4QTisFh4EQ7i6Ed7IsUUTvoBFiGmk5CZuj5QyLiepHZ4L4XWxIacNyvVtPwQbKOidjuScRDF1mtXwei48Uui5ptuAEM5; msToken=EL2Ncg69yxMtsQpbm5BTdz3hXEnZDaUlXFXVNuRiT8WDxhOiFoAwTXi1XjpC4QTisFh4EQ7i6Ed7IsUUTvoBFiGmk5CZuj5QyLiepHZ4L4XWxIacNyvVtPwQbKOidjuScRDF1mtXwei48Uui5ptuAEM5`,
    },
    proxy,
    method: "POST",
    body: JSON.stringify(ctx.request.body),
    url: teaABUrl + "/service/2/abtest_config/",
  };

  return new Promise((resolve, reject) => {
    request(options, (error: any, response: any, body: any) => {
      if (error) reject(error);
      if (!error && response.statusCode === 200) {
        ctx.set("content-type", "application/json; charset=utf-8");
        ctx.body = body;
        resolve(true);
      } else {
        console.log(response, "error");
        ctx.body = {
          status: 502,
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

router.get("/manifest.json", (ctx: any) => {
  const options = {
    headers: {
      "user-agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    },
    proxy,
  };
  // 2.代发请求

  return new Promise((resolve, reject) => {
    request(
      "https://www.tiktok.com/manifest.json",
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          // response.headers 中的 全部都要带上
          Object.keys(response.headers).forEach(key => {
            ctx.set(key, response.headers[key]);
          });
          ctx.set("content-type", "application/json; charset=utf-8");
          ctx.body = body;
          resolve(true);
        } else {
          ctx.body = {
            status: response.statusCode,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

router.get("/favicon.ico", (ctx: any) => {
  const options = {
    headers: {
      "user-agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    },
    proxy,
  };
  // 2.代发请求

  return new Promise((resolve, reject) => {
    request(
      "https://www.tiktok.com/favicon.ico",
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          // response.headers 中的 全部都要带上
          // Object.keys(response.headers).forEach(key => {
          //   ctx.set(key, response.headers[key]);
          // });
          ctx.set("content-type", "image/x-icon");
          // ctx.set("accept-ranges", "bytes");
          // ctx.set("content-encoding", "br");
          // ctx.set("vary", "Accept-Encoding");
          ctx.body = body;
          resolve(true);
        } else {
          ctx.body = {
            status: response ? response.statusCode : 500,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

const getTtCsrfToken = (lang: string) => {
  const options = {
    headers: {
      "user-agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    },
    proxy,
  };
  // 2.代发请求

  return new Promise((resolve, reject) => {
    request(
      "https://www.tiktok.com/node-webapp/api/common-app-context?lang" + lang,
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          resolve(body);
        } else {
          resolve({});
        }
      },
    );
  });
};

router.post("/api/v3/register/verification/age/", async (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const qs = querystring.parse(originUrl.query);
  const lang = qs["app_language"];
  const host = "www.tiktok.com";
  const csrfTOken = (await getTtCsrfToken(lang)) as any;
  const csrfToken = JSON.parse(csrfTOken)["csrfToken"];
  console.log(csrfToken, "kjkjk");
  const options = {
    headers: {
      ...ctx.request.header,
      host,
      origin: ctx.request.header["origin"].replace(/gyp\.mytiktok\.com/, host),
      referer: ctx.request.header["origin"].replace(/gyp\.mytiktok\.com/, host),
      cookie: ctx.request.header["cookie"].replace(
        ctx.request.body["tt_csrf_token"],
        csrfToken,
      ),
    },
    proxy,
    method: "POST",
    body: JSON.stringify({
      ...ctx.request.body,
      tt_csrf_token: csrfToken,
    }),
    url:
      "https://www.tiktok.com/api/v3/register/verification/age/?" +
      originUrl.query.replace(/gyp\.mytiktok\.com/, host), // 生产需要替换为host
  };
  console.log(options, "kkkjk");

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
          return o.replace(/domain=\.tiktok.com;/g, "");
        });
        /** 为cookies中的每个key/value增加 SameSite=None; Secure */
        cookies.forEach((o: string) => {
          ctx.set("set-cookie", `${o} ;SameSite=None; Secure`);
        });
        ctx.body = body;
        resolve(true);
      } else {
        ctx.body = {
          status: 502,
          result: "forbidden",
        };
        resolve(true);
      }
    });
  });
});

router.get(
  "/straling/check_and_get_text/5dc26cf008d511e9b571e1bc0c9e23b5/normal/Webapp",
  (ctx: any) => {
    const originUrl = url.parse(ctx.req.url);

    const options = {
      headers: {
        "user-agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
      },
      proxy,
    };
    // 2.代发请求

    return new Promise((resolve, reject) => {
      request(
        `https://starling-ttp2.tiktokv.us/check_and_get_text/5dc26cf008d511e9b571e1bc0c9e23b5/normal/Webapp/?${originUrl.query}`,
        options,
        (error: any, response: any, body: any) => {
          if (error) reject(error);
          if (!error && response.statusCode === 200) {
            // response.headers 中的 全部都要带上
            Object.keys(response.headers).forEach(key => {
              ctx.set(key, response.headers[key]);
            });
            ctx.set("timing-allow-origin", "*");
            ctx.body = body;
            resolve(true);
          } else {
            ctx.body = {
              status: response.statusCode,
              result: "forbidden",
            };
            resolve(true);
          }
        },
      );
    });
  },
);

router.get("/node-webapp/api/importmap", (ctx: any) => {
  const options = {
    headers: {
      "user-agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    },
    proxy,
  };
  // 2.代发请求

  return new Promise((resolve, reject) => {
    request(
      "https://www.tiktok.com/node-webapp/api/importmap",
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          ctx.body = body;
          resolve(true);
        } else {
          ctx.body = {
            status: response.statusCode,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

router.get("/node-webapp/api/common-app-context", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const qs = querystring.parse(originUrl.query);
  const targetUrl = qs["lang"];

  const options = {
    headers: {
      "user-agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    },
    proxy,
  };
  // 2.代发请求

  return new Promise((resolve, reject) => {
    request(
      "https://www.tiktok.com/node-webapp/api/common-app-context?lang" +
        targetUrl,
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          ctx.body = body;
          resolve(true);
        } else {
          ctx.body = {
            status: response.statusCode,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

router.get("/node-webapp/api/biz-context", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const qs = querystring.parse(originUrl.query);
  const lang = qs["lang"];
  const app_name = qs["app_name"];

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
    request(
      `https://www.tiktok.com/node-webapp/api/biz-context?lang=${lang}&app_name=${app_name}`,
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          ctx.body = body;
          resolve(true);
        } else {
          ctx.body = {
            status: response.statusCode,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

const getVideoBuffer = (ctx: any, targetUrl: string, path: string) => {
  const options = {
    headers: {
      "user-agent": ctx.request.header["user-agent"],
      range: ctx.request.header["range"],
      cookie: ctx.request.header["cookie"],
    },
    proxy,
    encoding: null, // 将 encoding 设置为 null，以获取响应内容的 Buffer
  };

  return new Promise((resolve, reject) => {
    request(
      `${targetUrl}${path}`,
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (response.statusCode === 206 || response.statusCode === 200) {
          ctx.res.writeHead(206, {
            ...response.headers,
            "access-control-allow-origin": "*",
          });
          ctx.body = body;

          resolve(true);
        } else {
          ctx.body = {
            status: response ? response.statusCode : 502,
            result: "network error",
          };
          resolve(true);
        }
      },
    );
  });
};

router.get(/^\/v19\/us-video\/video\/tos\/.*$/, (ctx: any) => {
  const targetUrl = "https://v19-webapp-prime.us.tiktok.com";
  const path = ctx.request.url.replace("/v19/us-video", "");
  return getVideoBuffer(ctx, targetUrl, path);
});

router.get(/^\/us-video\/video\/tos\/.*$/, (ctx: any) => {
  const targetUrl = "https://v16-webapp-prime.us.tiktok.com";
  const path = ctx.request.url.replace("/us-video", "");
  return getVideoBuffer(ctx, targetUrl, path);
});

router.get(/^\/video\/tos\/.*$/, (ctx: any) => {
  const targetUrl = "https://v16-webapp-prime.tiktok.com";
  const path = ctx.request.url;
  return getVideoBuffer(ctx, targetUrl, path);
});

router.get("/api/discover/user/", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const targetUrl = "https://www.tiktok.com";
  const options = {
    headers: {
      cookie: ctx.request.header["cookie"],
      "user-agent": ctx.request.header["user-agent"],
    },
    proxy,
  };

  return new Promise((resolve, reject) => {
    request(
      targetUrl + "/api/discover/user/?" + originUrl.query,
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          // response.headers 中的
          Object.keys(response.headers).forEach(key => {
            ctx.set(key, response.headers[key]);
          });
          ctx.body = body;
          resolve(true);
        } else {
          ctx.body = {
            status: 502,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

router.get("/api/preload/item_list/", (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);

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
    request(
      `https://www.tiktok.com/api/preload/item_list/?${originUrl.query}`,
      options,
      (error: any, response: any, body: any) => {
        if (error) reject(error);
        if (!error && response.statusCode === 200) {
          // response.headers 中的
          Object.keys(response.headers).forEach(key => {
            ctx.set(key, response.headers[key]);
          });
          /** 设置cookies */
          const cookies = response.headers["set-cookie"].map((o: string) => {
            return o
              .replace(/domain=tiktok.com;/g, "")
              .replace(/Domain=tiktok.com;/g, "");
          });
          /** 为cookies中的每个key/value增加 SameSite=None; Secure */
          cookies.forEach((o: string) => {
            ctx.set("set-cookie", `${o} ;SameSite=None; Secure`);
          });
          // node处理方式
          // 相关域名全部替换为根域名，转发
          // https://v16-webapp-prime.tiktok.com
          ctx.body = body
            .replace(
              /https:\/\/v16-webapp-prime.tiktok.com\//g,
              "https://gyp.mytiktok.com/",
            )
            .replace(
              /https:\/\/v16-webapp-prime\.us\.tiktok.com\//g,
              "https://gyp.mytiktok.com/us-video/",
            )
            .replace(
              /https:\/\/v19-webapp-prime\.us\.tiktok.com\//g,
              "https://gyp.mytiktok.com/v19/us-video/",
            );
          // ctx.body = body;
          resolve(true);
        } else {
          ctx.body = {
            status: response.statusCode,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

app.use(async (ctx: any, next: any) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Headers", "*");
  ctx.set("Access-Control-Allow-Methods", "*");
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

// 1.创建代理服务
// 读取 SSL 证书文件+
const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

// 创建 HTTPS 服务器
export default https.createServer(options, app.callback());
