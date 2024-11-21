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
      cookie: ctx.request.header["cookie"],
      "user-agent": ctx.request.header["user-agent"],
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
      "x-pns-referrer": targetUrl,
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
          ctx.set("set-cookie", cookies);
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
          ctx.set("set-cookie", cookies);
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
          ctx.set("set-cookie", cookies);
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
          ctx.set("set-cookie", cookies);
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
          ctx.set("set-cookie", cookies);
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
    body: JSON.stringify(ctx.request.body),
    url: targetUrl + "/ttwid/check/",
  };

  return new Promise((resolve, reject) => {
    request(options, (error: any, response: any, body: any) => {
      if (error) reject(error);
      if (!error && response.statusCode === 200) {
        // response.headers 中的 全部都要带上
        Object.keys(response.headers).forEach(key => {
          // 单独设置cookie
          if (!key.includes("ookie")) {
            ctx.set(key, response.headers[key]);
          }
        });
        /** 设置cookies */
        const cookies = response.headers["set-cookie"].map((o: string) => {
          return o
            .replace(/domain=.tiktok.com;/g, "")
            .replace(/Domain=.tiktok.com;/g, "");
        });
        ctx.set("content-type", "application/json; charset=utf-8");
        ctx.set("set-cookie", cookies);
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
// const key1 = `{"__DEFAULT_SCOPE__":{"webapp.app-context":{"language":"zh-Hant-TW","region":"US","appId":1233,"appType":"m","wid":"7438525352601536046","nonce":"FUgZHNph7P4A_DYEvFTr9","botType":"others","requestId":"17319205215101626156","clusterRegion":"TTP","abTestVersion":{"versionName":"70508271,72422414,72783099,72860363,72929341,72957816,72974491,73000130,73016356,70860576,72361743","parameters":{"share_button_part1_test":{"vid":"v1"},"qr_sso_popup":{"vid":"v1"},"browser_login_redirect":{"vid":"v1"},"remove_bottom_banner":{"vid":"v2"},"browser_mode_encourage_login":{"vid":"v1"},"video_serverpush":{"vid":"v1"},"periodic_login_popup_interval":{"vid":"v2"},"xgplayer_preload_config":{"vid":"v1"},"mobile_search_test":{"vid":"v2"},"mobile_vodkit":{"vid":"v1"},"non_logged_in_comments":{"vid":"v1"},"login_modal_ui_revamp":{"vid":"v1"},"mobile_consumption_limit_login":{"vid":"v1"},"volume_normalize":{"vid":"v1"},"creator_center_connect":{"vid":"v1"},"one_column_player_size":{"vid":"v1"},"xg_volume_test":{"vid":"v1"},"mobile_consumption_limit_non_logged_in":{"vid":"v1"},"sign_up_webapp_region_change":{"vid":"v2"},"use_inbox_notice_count_api":{"vid":"v2"},"confirm_logout":{"vid":"v2"},"enable_ml_model":{"vid":"v1"},"webapp_login_email_phone":{"vid":"v1"},"search_video":{"vid":"v1","botVid":"v1"},"login_option_order_by_metrics":{"vid":"v1"},"last_login_method":{"vid":"v1"},"mobile_consumption_limit_logged_in":{"vid":"v1"},"should_highlight_hashtag":{"vid":"v2"},"mobile_predictive_data":{"vid":"v0"},"video_feed_redesign":{"vid":"v1"},"video_bitrate_adapt":{"vid":"v1"},"webapp_switch_account":{"vid":"v1"},"use_follow_v2":{"vid":"v1"},"ZTI_test":{"consumer_path_list":["\u002Fv1\u002Fmessage\u002Fsend","\u002Fapi\u002Fupdate\u002Fprofile","\u002Fapi\u002Fv1\u002Fitem\u002Fcreate\u002Fbulk","\u002Fapi\u002Fv1\u002Fweb\u002Fproject\u002Fpost","\u002Fapi\u002Fcommit\u002Ffollow\u002Fuser","\u002Fapi\u002Fcommit\u002Fitem\u002Fdigg","\u002Fapi\u002Fcomment\u002Fpublish","\u002Fapi\u002Fcomment\u002Fdigg","\u002Fapi\u002Fitem\u002Fcollect","\u002Ftiktok\u002Fregion\u002Fchange\u002Fprecheck\u002Fget\u002Fv1","\u002Fwebcast\u002Froom\u002Fenter","\u002Fwebcast\u002Froom\u002Fchat","\u002Fwebcast\u002Froom\u002Fshare","\u002Fwebcast\u002Fgift\u002Fsend","\u002Fwebcast\u002Fsub\u002Fcontract\u002Fcreate","\u002Fwebcast\u002Fwallet_api\u002Fdiamond_buy_external","\u002Fwebcast\u002Fwallet_api_tiktok\u002Fwithdraw\u002Fv2","\u002Fwebcast\u002Fwallet_api\u002Fdiamond_exchange\u002F","\u002Fwebcast\u002Fuser\u002Frelation\u002Fupdate"],"vid":"v2"},"ab_tag":{"merge_risk_event":1},"ab_tags":{"prefetch_visa_cryptogram":true},"add_transcript":{"vid":"v2"},"aggregation_page_cta_enhancement":{"vid":"v0"},"analytics_upgrade_phase3":{"vid":"v1"},"cc_perf_phase1":{"vid":{"isCreatorCenterContextEnabled":true,"isInsightV2Enabled":true,"isOfflineI18nEnabled":true,"isParallelIframeEnabled":false,"isPhase2Enabled":true,"isPrefetchIframeResourceEnabled":true,"isServerSideTranslationEnabled":true}},"change_list_length_new":{"vid":"15"},"creator_center_connect_global":{"vid":"v2"},"creator_center_global_comment_management":{"vid":"v1"},"creator_center_test":{"vid":"v2"},"cta_phase2":{"vid":"v2"},"digital_wellbeing_web":{"vid":"v1"},"enable_ec_lcc":{"vid":"v1"},"enable_fb_sdk":{"vid":"v2"},"exchange_retention_popup":{"vid":"v2"},"fix_tea_session":{"vid":"v1"},"for_you_page_cta_enhancement":{"vid":"v3","video_limit":2},"fyp_backup_v2":{"enable":"true"},"kep_video_sort_ctr_exp":{"vid":"kep_cm_boost_launch_ttp"},"kep_videos":{"predict_params":{"value_tree":{"base":{"rank_id_weight":0.5}},"formulas":{"cover_ansa_ok":"IF3((kep_search_score_video_cover_ansa_score \u003C= 0.92) and (kep_search_score_video_cover_ansa_score \u003E 0), 1, 0)","report_ok":"IF3((kep_search_score_report_cnt \u003C= 100), 1, 0)","multimodal_ok":"IF3((kep_search_score_multimodal_factor \u003E= 0.2), 1, 0)","is_style_ok":"cover_ansa_ok * report_ok","cm_boost":"1 + kep_search_score_cm_factor * is_style_ok * multimodal_ok * kep_search_score_multimodal_factor","rank_id_score":"1 + rank_id_weight \u002F kep_search_score_rank_id","ab_slot_1":"cm_boost","ab_slot_2":"rank_id_score"}}},"live_abr_version":{"vid":"v2"},"live_chat_message_cache_opt":{"vid":"v0"},"live_context_optimize":{"vid":"v1"},"live_csr_insert_context":{"vid":"v2"},"live_end_improved_metrics":{"vid":"v2"},"live_golive_entrance":{"vid":"v2"},"live_header_delay":{"vid":"v3"},"live_i18n_reduce":{"vid":"v1"},"live_like":{"vid":"v2"},"live_login_reflow_btn":{"vid":"v2"},"live_new_discover":{"vid":"v2"},"live_player_switch_button":{"vid":"v2"},"live_preview_web":{"vid":"v3"},"live_recharge_by_amount":{"vid":"v1"},"live_recharge_coin_new_ui":{"vid":"v1"},"live_recharge_homescreen":{"vid":"v2"},"live_recharge_one_tap_login":{"vid":"v2"},"live_reflow":{"vid":"v2"},"live_room_age_restriction":{"vid":"v2"},"live_room_csr":{"vid":"v2"},"live_room_match":{"vid":"v2"},"live_studio_download_refactor_mobile":{"vid":"v2"},"live_top_viewers":{"vid":"v2"},"live_wallet_performance_packup":{"vid":"v1"},"mobile_fps_logger":{"vid":"v1"},"mobile_minimize_subtitle":{"vid":"v1"},"mobile_replace_signup_with_login":{"vid":"v1"},"mobile_ui_opt_ab":{"vid":"v8"},"mobile_ui_opt_ab_description_tag":{"vid":"v2"},"mobile_ui_opt_ab_phrase2":{"vid":"v7"},"mobile_ui_opt_ab_sign_up":{"vid":"v2"},"mobile_video_caption":{"vid":"v3"},"new_Live_im_hooks":{"vid":"v1"},"new_item_tag":{"vid":"v2"},"new_live_reflow":{"vid":"v2"},"new_live_reflow_live_event":{"vid":"v2"},"new_server_call":{"vid":"v1"},"new_transparency_center":{"vid":"v2"},"pc_inspiration":{"vid":"v1"},"photo_test":{"vid":"v2"},"pns_keyword_filtering":{"vid":"v1"},"pns_kr_consent":{"vid":"v1"},"pns_popup_sdk":{"vid":"v1"},"remove_poi_anchor_mobile":{"vid":"v1"},"search_keep_sug_show":{"vid":"v2"},"search_video_lab":{"vid":"v3"},"share_pannel":{"vid":"v3"},"should_recom_reduce_icon_risk":{"vid":"v1"},"show_aigc_label_web":{"vid":"v1"},"studio_web_advanced_video_player":{"vid":"v1"},"tikcast":{"enable_ec_lcc":true,"live_restricted_mode":true},"tiktok":{"disable_effect_filter":1,"live_restricted_mode":true,"private_account_prompt_for_u18":0,"search_engine":{"debug_unlimited_music_retrieval_copyright_codes":["1180_unlimited_2","1180_unlimited_10","1180_unlimited_1"],"enable_tiktok_studio_unlimited_music_search":1,"enable_unlimited_music_retrieval":1,"ies_mt_music_display_unlimited_music_tag":1},"use_aligned_copies":2},"tiktok_web":{"capcut_entry_group":2,"copyright_precheck":"1","enable_cloud_draft":"1","enable_local_draft":"1","enable_new_playlist":"1","enable_new_post_api":"1","enable_web_60_min_flag":true,"hashtag_history":1,"interaction_optimization":4,"max_divided_num":"1","opt_v1_new_entrance_v3":1,"opt_v1_new_upload_ui":2,"post_polling_version":1,"show_aigc_toggle":1,"show_creator_academy_pc_entrance":3,"tts_product_anchor":1,"unlimited_music_library":"1","upload_file_step_optimization":1,"use_video_preview_transcode_multi_chunk":true,"video_split_count_limit":10,"web_creation_cover_tool":2,"web_creation_local_video_preview":1,"web_creation_poi":"1","web_creation_support_edit":1},"translation_reduce":{"vid":"v2"},"tteh_effect_anchor_v1":{"vid":"v2"},"ttlive_broadcast_topic_version_two":{"vid":"v2"},"unify_pid":{"vid":"v2"},"use_aligned_copies":{"vid":"v2"},"user_bundle_opt":{"vid":"v0"},"video_topic":{"vid":"V2"},"web_creation_vmok":{"vid":"v1"},"web_player_refactor":{"vid":"v2"},"webapp_cta_optimize":{"vid":"v1"},"webapp_seo_photomode_user_exp":{"vid":"v1"},"webcast":{"enable_ec_lcc":true,"like_icon_optimize":true,"live_restricted_mode":true,"pi_clip_eu":2,"pi_clip_row":2,"pi_clip_us":2,"web_drawer_show_explore":true,"web_follow_guide_strategy_group":4}}},"csrfToken":"9keIGb3q-Gx8oppnq51Tk3M_Kg4Ex_rbnBYE","userAgent":"Mozilla\u002F5.0 (Linux; Android 6.0; Nexus 5 Build\u002FMRA58N) AppleWebKit\u002F537.36 (KHTML, like Gecko) Chrome\u002F131.0.0.0 Mobile Safari\u002F537.36","encryptedWebid":"1%7C2Oi3uplFcTHSKaMC0_Cyqw3kD9vzEaic6IxwzThYLBc%7C1731920495%7C811993e2bc997647f15a72740f040b0537428bd2de48dbc183cb781d12c6639f","host":"www.tiktok.com"},"webapp.biz-context":{"os":"android","isMobile":true,"isAndroid":true,"isIOS":false,"jumpType":"m","navList":[{"key":"Company","title":"公司","children":[{"title":"關於","href":"https:\u002F\u002Fwww.tiktok.com\u002Fabout?lang=zh-Hant-TW"},{"title":"新聞編輯室","href":"https:\u002F\u002Fnewsroom.tiktok.com\u002F"},{"title":"聯絡方式","href":"https:\u002F\u002Fwww.tiktok.com\u002Fabout\u002Fcontact?lang=zh-Hant-TW"},{"title":"工作","href":"https:\u002F\u002Fcareers.tiktok.com"}]},{"key":"Programs","title":"方案","children":[{"title":"TikTok for Good","href":"https:\u002F\u002Fwww.tiktok.com\u002Fforgood"},{"title":"廣告","href":"https:\u002F\u002Fwww.tiktok.com\u002Fbusiness\u002F?attr_source=tt_official_site&attr_medium=tt_official_site_guidance&refer=tiktok_web"},{"title":"TikTok LIVE Creator Networks","href":"https:\u002F\u002Fwww.tiktok.com\u002Flive\u002Fcreator-networks\u002Fzh-Hant-TW?enter_from=tiktok_official"},{"title":"Developers","href":"https:\u002F\u002Fdevelopers.tiktok.com\u002F?refer=tiktok_web"},{"title":"透明度","href":"https:\u002F\u002Fwww.tiktok.com\u002Ftransparency"},{"title":"TikTok 獎勵","href":"https:\u002F\u002Fwww.tiktok.com\u002Ftiktok-rewards\u002Fzh-Hant-TW"},{"title":"TikTok Embeds","href":"https:\u002F\u002Fwww.tiktok.com\u002Fembed"}]},{"key":"Support","title":"支援","children":[{"title":"幫助中心","href":"https:\u002F\u002Fsupport.tiktok.com\u002Fzh_Hant"},{"title":"安全中心","href":"https:\u002F\u002Fwww.tiktok.com\u002Fsafety?lang=zh-Hant-TW"},{"title":"隐私中心","href":"https:\u002F\u002Fwww.tiktok.com\u002Fprivacy\u002Foverview\u002Fzh-Hant-TW?enter_method=webapp_mobile_sidenav"},{"title":"Creator Portal","href":"https:\u002F\u002Fwww.tiktok.com\u002Fcreators\u002Fcreator-portal\u002Fen-us\u002F"},{"title":"社群自律公約","href":"https:\u002F\u002Fwww.tiktok.com\u002Fcommunity-guidelines?lang=zh-Hant-TW"},{"title":"透明度","href":"https:\u002F\u002Fwww.tiktok.com\u002Ftransparency"},{"title":"Accessibility","href":"https:\u002F\u002Fwww.tiktok.com\u002Faccessibility"}]},{"key":"Legal","title":"法律","children":[{"title":"服務條款","key":"terms-of-service","href":"https:\u002F\u002Fwww.tiktok.com\u002Flegal\u002Fterms-of-service?lang=zh-Hant-TW"},{"title":"隱私權政策","key":"privacy-policy-row","href":"https:\u002F\u002Fwww.tiktok.com\u002Flegal\u002Fprivacy-policy-row?lang=zh-Hant-TW"}]}],"kapLinks":[{"title":"Category","children":[{"lang":["en"],"links":[{"title":"Dance","href":"https:\u002F\u002Fwww.tiktok.com\u002Fchannel\u002Fdance"},{"title":"Arts","href":"https:\u002F\u002Fwww.tiktok.com\u002Fchannel\u002Farts"},{"title":"Food and Drink","href":"https:\u002F\u002Fwww.tiktok.com\u002Fchannel\u002Ffood-and-drink"},{"title":"Tourism","href":"https:\u002F\u002Fwww.tiktok.com\u002Fchannel\u002Ftourism"},{"title":"Production and Manufacturing","href":"https:\u002F\u002Fwww.tiktok.com\u002Fchannel\u002Fproduction-and-manufacturing"},{"title":"Vehicles and Transportation","href":"https:\u002F\u002Fwww.tiktok.com\u002Fchannel\u002Fvehicles-and-transportation"},{"title":"Relationship","href":"https:\u002F\u002Fwww.tiktok.com\u002Fchannel\u002Frelationship"},{"title":"TikTok Style","href":"https:\u002F\u002Fwww.tiktok.com\u002Fchannel\u002Ftiktok-style"},{"title":"Athletics","href":"https:\u002F\u002Fwww.tiktok.com\u002Fchannel\u002Fathletics"},{"title":"Hobbies","href":"https:\u002F\u002Fwww.tiktok.com\u002Fchannel\u002Fhobbies"}]}]}],"config":{"signUpOpen":true,"samsungEnableRegion":{"isFull":false,"region":[]},"cookieBanner":{"load_dynamically":true,"decline_btn_staged_rollout_area":["ALL"],"resource":{"prefix":"\u002Fpns\u002Ftiktok-cookie-banner","themes":["default","ttm"],"esm":"\u002Fpns\u002Ftiktok-cookie-banner\u002F{{VERSION}}\u002Fdefault.esm.js","nomodule":"\u002Fpns\u002Ftiktok-cookie-banner\u002F{{VERSION}}\u002Fdefault.js","version":"2.0.0.21"},"i18n":{"cookieBannerTitle":"cookie_title","cookieBannerTitleNew":"cookie_title_new","cookieBannerSubTitle":"cookie_subtitle","cookieBannerSubTitleNew":"cookie_subtitle_new","cookieBannerSubTitleV2":"cookie_subtitle_v3","cookieBannerBtnManage":"cookie_btn_manage","cookieBannerBtnAccept":"cookie_btn_accpet","cookieBannerBtnDecline":"cookie_btn_decline","cookiesBannerDetails":"cookies_banner_details","cookiesBannerCookiesPolicy":"cookies_banner_cookies_policy","cookiesBannerAccept":"cookies_banner_accept","webDoNotSellSettingsSavedToast":"web_do_not_sell_settings_saved_toast","cookieSettingManageYourCookieTitle":"cookie_banner_category_manage","cookieSettingSave":"save_settings","cookieSettingAnalyticsAndMarketing":"cookie_banner_subcategory_cookies","cookieSettingNecessary":"cookie_setting_page_nc_title","cookieSettingNecessarySubtitle":"cookie_setting_page_nc_subtitle","cookieSettingNecessaryV2":"cookie_banner_subcategory_essential","cookieSettingNecessarySubtitleV2":"cookies_essential_desc","cookieSettingAnalyticsAndMarketingSubtitle":"cookie_setting_page_aam_subtitle","cookieSettingAnalyticsAndMarketingSubtitleV2":"cookie_analytics_marketing_desc","cookieManageTip":"cookie_manage_desc"}},"paidAdSetting":{"region":["US","KR"],"exclude_subdivisions":["California"],"US":{"pixels":["facebook","google"],"excludeCity":"[California]"},"JP":{"pixels":["google","pangle"]},"KR":{"pixels":["facebook","google"]},"AU":{"pixels":["google"]},"RU":{"pixels":["google"]},"BR":{"pixels":["google"]},"VN":{"pixels":["google"]},"ZA":{"pixels":["google"]},"ID":{"pixels":["google"]},"TH":{"pixels":["google"]},"AE":{"pixels":["google"]}},"featureFlags":{"feature_bar":true,"business_account_open":true,"feature_tt4b_ads":true,"support_multiline_desc":true,"pc_video_playlist":true,"feature_mobile_ui_opt_stage2":true,"add_recipe_card":true,"collapse_seo_header":true,"collapse_seo_header_mobile":true,"seo_enable_new_poi_page":true,"enable_privacy_center":true,"hashtag_viewcount":false,"should_show_effect_detail_page":true,"kep_remove_desc_keywords":true,"hashtag_canonical_url":true,"music_canonical_url":true,"user_canonical_url":true,"find_card_refactor":true,"shape_loggedin_disabled":false},"isGrayFilter":false},"playerInfo":{"name":"","type":0,"loop":true,"isSmartPlayer":false,"replyComment":true,"hideNavBar":false},"domains":{"kind":"us","captcha":"\u002F\u002Fverification.tiktokw.us","imApi":"https:\u002F\u002Fim-api.tiktok.com","imFrontier":"wss:\u002F\u002Fim-ws.tiktok.com\u002Fws\u002Fv2","mTApi":"https:\u002F\u002Fwww.tiktok.com","rootApi":"https:\u002F\u002Fwww.tiktok.com","secSDK":"","slardar":"mon16-normal-useast5.tiktokv.us","starling":"https:\u002F\u002Fstarling.tiktokv.us","tea":"https:\u002F\u002Fmcs.tiktokw.us","teaChannel":"va","teaChannelType":"ttp","libraWebSDK":"https:\u002F\u002Flibraweb.tiktokw.us","webcastApi":"https:\u002F\u002Fwebcast.us.tiktok.com","webcastRootApi":"https:\u002F\u002Fwebcast.us.tiktok.com","pipoApi":"https:\u002F\u002Ffp.pipopayment.us","tcc":"https:\u002F\u002Flf16-config.tiktokcdn-us.com\u002Fobj\u002Ftcc-config-web-tx\u002F","locationApi":"https:\u002F\u002Flocation.tiktokw.us"},"downloadLink":{"microsoft":{"visible":true,"normal":"https:\u002F\u002Fwww.microsoft.com\u002Fstore\u002Fapps\u002F9NH2GPH4JZS4"},"apple":{"visible":true,"normal":"https:\u002F\u002Fwww.tiktok.com\u002Fdownload-link\u002Faf\u002Fid835599320"},"amazon":{"visible":true,"normal":"https:\u002F\u002Fwww.amazon.com\u002Fdp\u002FB0117U0G3M\u002F"},"google":{"visible":true,"normal":"https:\u002F\u002Fwww.tiktok.com\u002Fdownload-link\u002Faf\u002Fcom.zhiliaoapp.musically"}},"deviceLimitRegisterExpired":true,"subdivisions":["Virginia"],"geo":["6254928"],"geoCity":{"City":"Loudoun","Subdivisions":"Virginia","OriginalSubdivisions":[{"GeoNameID":"6254928","ASCIName":"Virginia","Name":"Virginia","LocalID":"VA"}],"SubdivisionsArr":["Virginia"]},"isGoogleBot":false,"isBingBot":false,"isBot":false,"isSearchEngineBot":false,"isTTP":true,"playbackDynamicConfig":{"configs":[{"playerStatus":"downgrade","maxSpeed":9.75,"minSpeed":0,"metaChunkSize":734003,"dataChunkSize":838860,"bufferEnoughTime":30,"number":1},{"playerStatus":"normal","maxSpeed":1000000,"minSpeed":9.75,"metaChunkSize":314573,"dataChunkSize":838861,"bufferEnoughTime":4,"number":3}]},"canUseQuery":false,"idc":"useast5","vregion":"US-TTP","vgeo":"VGeo-US","videoCoverSettings":{"format":2,"acceptHeader":"text\u002Fhtml,application\u002Fxhtml+xml,application\u002Fxml;q=0.9,image\u002Favif,image\u002Fwebp,image\u002Fapng,*\u002F*;q=0.8,application\u002Fsigned-exchange;v=b3;q=0.7","_ssrCount":0}},"webapp.i18n-translation":{"Webapp":{"dailyscreentime_notifreminder_desc_minutes":"您今天使用 TikTok 的時間已達到 {minutes} 分鐘。請關閉應用程式以遵守您的每日時間限制，或者輸入密碼 \u003Cb\u003E1234\u003C\u002Fb\u003E 返回 TikTok。","familyPairing_dailyScreenTime_intervention_desc_minutes":"您今天使用 TikTok 的時間已達到 {minutes} 分鐘。請關閉應用程式以遵守您的每日時間限制，或者輸入 {username} 的密碼返回 TikTok。","dailyscreentime_notifreminder_desc_hours":"您今天使用 TikTok 的時間已達到 {hours} 小時。請關閉應用程式以遵守您的每日時間限制，或者輸入密碼 \u003Cb\u003E1234\u003C\u002Fb\u003E 返回 TikTok。","familyPairing_dailyScreenTime_intervention_desc_hours":"您今天使用 TikTok 的時間已達到 {hours} 小時。請關閉應用程式以遵守您的每日時間限制，或者輸入 {username} 密碼返回 TikTok。","dailyscreentime_notifreminder_desc_hoursminutes":"您今天使用 TikTok 的時間已達到 {hours} 小時 {minutes} 分鐘。請關閉應用程式以遵守您的每日時間限制，或者輸入密碼 \u003Cb\u003E1234\u003C\u002Fb\u003E 返回 TikTok。","familyPairing_dailyScreenTime_intervention_desc_hoursMinutes":"您今天使用 TikTok 的時間已達到 {hours} 小時 {minutes}分鐘。請關閉應用程式以遵守您的每日時間限制，或者輸入 {username} 的密碼返回 TikTok。","dailyscreentime_notifreminder_toast_incorrectpasscode":"您輸入的密碼不正確。請稍後再試。","nightscreentimemgmt_sleepreminders_modal_readyforsleep_heading":"準備好上床睡覺了嗎？","nightscreentimemgmt_sleepreminders_modal_readyforsleep_firstreminder_desc":"您已將睡眠時間設定為 {string}。","nightscreentimemgmt_sleepreminders_modal_readyforsleep_editreminder_link":"編輯提醒","nightscreentimemgmt_sleepreminders_modal_readyforsleep_ok_btn":"確定","nightscreentimemgmt_sleepreminders_modal_readyforsleep_delay_btn_variantone":"延遲 (10 分鐘)","screentime_breakreminder_modal_timetotakeabreak_title":"休息一下嗎？","screentime_breakreminder_modal_timetotakeabreak_desc_1":"您已連續使用應用程式 {num} 分鐘了，不妨休息一下吧。","screentime_breakreminder_modal_editreminder_link":"編輯未來提醒","screentime_breakreminder_modal_ok_btn":"確定","screentime_breakreminder_modal_snooze_link":"延遲 (10 分鐘)","dailyscreentime_notifreminder_header_ready":"準備關閉 TikTok？","familyPairing_dailyScreenTime_intervention_headline":"準備關閉 TikTok？","familyPairing_dailyScreenTime_intervention_returnToTikTok_toast":"您已回到 TikTok","dailyscreentime_notifreminder_button_returntotiktok":"返回 TikTok","dailyscreentime_introsheet_minors_heading":"為了您的健康著想，您的每日螢幕時間已設定為 1 小時","dailyscreentime_introsheet_minors_firstbullet_logoff":"我們將在時間到時通知您，方便您得知後退出","dailyscreentime_introsheet_minors_secondbullet_settingsprivacy":"您可以在 [隱私設定] 中管理每日螢幕時間","dailyscreentime_introsheet_minors_firstbutton_gotit":"知道了","dailyscreentime_introsheet_minors_secondbutton_manage":"管理每日螢幕時間","OK":"確定","screenTime_web_sleepReminders_setTime_am_desc":"上午","screenTime_web_sleepReminders_setTime_pm_desc":"下午","Got it":"知道了","FPscheduledBreak_teenBreaklimit_headline":"休息時間","FPscheduledBreak_teenBreaklimit_content":"您的家長或監護人已為您排定 {s_startTime}-{s_endTime} 的休息時間。","FPscheduledBreak_teenBreaklimit_settingsButton":"查看設定","login_fb_noLonger_LinkPhoneNumber":"綁定電話號碼","login_fb_noLonger_LinkPhoneNumberReminder":"綁定電話號碼，確保當其他登入方式無法使用時，您還是可以存取帳號。","login_fb_noLonger_LinkPhone":"綁定電話號碼","login_fb_noLonger_notNow_cta":"暫時不要","comment_reply_btn":"回覆","Report":"舉報","comment_delete_btn":"刪除","Cancel":"取消","video_detail":"影片詳細資料","playlist_webapp_profileview_playlists_numberviews":"{num, plural, other {{number} 次觀看}}","views":"觀看","playlist_webapp_profileview_playlists_numbervid":"{num, plural, other {{number} 則貼文}}","posts":"動態","web_hashtag_search_see_more_expand":"展開","No videos with this hashtag yet":"尚無影片含有此標籤","Looking for videos? Try browsing our trending creators, hashtags, and sounds.":"尋找影片嗎？試試瀏覽我們的熱門創作者、話題和音樂。","web_hashtag_search_trending_tab":"熱門","web_hashtag_search_new_tab":"新","web_hashtag_search_related_tab":"相關","following":"關注中","following_empty":"關注創作者以觀看他們的影片","following_empty_unlogged":"登入以觀看你關注的創作者所發佈的影片","Log In":"登入","sug_accounts":"推薦帳號","topic_foryou_comedy":"幽默搞笑","topic_foryou_gaming":"遊戲","topic_foryou_food":"美食","topic_foryou_dance":"舞蹈","topic_foryou_beauty":"美妝保養","topic_foryou_animals":"動物","topic_foryou_sports":"運動","videos":"段影片","Users":"使用者","Sounds":"音樂","Hashtags":"標籤","topic_foryou_topics_tab":"主題","Discover":"發現","follows":"粉絲","comment_delete_des":"確定要刪除這則評論？","comment_delete_confirm":"刪除","comment_delete_cancel":"取消","Following":"關注中","Friends":"好友","creator":"創作者","following_acc":"關注中","friends_acc":"好友","view_more_replies":"查看更多回覆 ({num} 則)","view_more_comm":"查看更多","hide":"隱藏","friends":"好友","comment_at_search":"正在搜尋使用者","comment_at_load":"無法載入","comment_at_tryagain":"點擊重試","no_at_me":"不可以提及自己哦~","mention_privacy_toast_cant_mention":"由於這個人隱私設定的原因，無法提及他","comment_tray_exit_title":"離開頁面？","comment_tray_exit_des":"您還沒完成評論。要在未完成填寫的情況下離開嗎？","comment_tray_exit_leave":"離開","comment_tray_exit_stay":"繼續編輯","num_comment":"{num} 則評論","comment_off":"已關閉評論","comment_disable_notfollow":"您和 %@ 還不是共同好友，因此無法發表評論","optimize_web_popup_comment_body":"使用應用程式或登入以新增評論。","Open":"開啟","videos_":"影片","No videos with this sound yet":"尚無影片含有此音樂","profile_personal_no_content_title":"上傳您的首發影片","profile_personal_no_content_body":"您的影片將出現在這裡","profile_no_content_title":"沒有內容","profile_no_content_des":"這名使用者尚未發佈任何影片。","profile_public_nolikes_title":"尚無按讚的影片","profile_self_public_nolikes":"您按讚的影片將會出現在這裡","profile_others_public_nolikes":"%s 按讚的影片將會出現在這裡 ","seo_userpage_empty_video_header":"尚無影片","seo_userpage_empty_video_body":"{username} 發佈的影片會出現在這裡。","profile_others_blocked_post_body":"您已將對方加入黑名單，無法查看他發佈的內容。","profile_others_block_post_body":"由於對方的隱私設定，您無法查看他的影片。","This account is private":"這是私密帳號","profile_others_private_body":"關注帳號即可查看發佈的內容和按讚的內容","profile_others_like_private_title":"這名使用者的按讚影片為不公開影片","profile_others_like_private_body":"目前已隱藏 %s 按讚的影片","seo_userpage_empty_playlist_header":"尚無播放清單","seo_userpage_empty_playlist_body":"{username} 建立的播放清單會顯示在這裡。","liked":"已按讚","profile_self_link_unavailable":"連結無法使用","No bio yet.":"還沒有個人簡介。","followers":"粉絲","seo_userpage_info_blocked_user_toast":"無法提供此使用者的資訊，因為您已封鎖對方","seo_userpage_info_block_user_toast":"無法提供此使用者的資訊","seo_userpage_following_hidden_toast":"由於這名使用者的隱私設定，關注名單已隱藏","seo_creatorIntroComponent":"創作者簡介與內容摘要","Followers":"粉絲","Likes":"讚","seo_aggre_description_header":"說明","seo_aggre_transcript_header":"轉譯","grid":"方格檢視","seo_userPage_related_moreRelated":"更多相關影片","Share":"分享","feed":"動態","custom":"自訂","website":"造訪網站","dsa_illegal_appeal_expired_header":"申訴期限已過","dsa_illegal_appeal_expired_desc":"申訴期限已過，您無法再針對此項決定提出申訴。","dsa_illegal_appeal_button_ok":"確定","dsaCGWebapp_detailPg_sectionCG_body":"參閱我們的%s","dsaCGWebapp_detailPg_sectionCG_link":"《社群自律公約》","dsaCGWebapp_appealExpired_emptyState_body":"申訴期限已過，您無法再針對此項判定提出申訴。","search_see_more":"展開","appeal_btn_new":"申訴","dsa_illegal_appeal_dropdown_title":"對此判定提出申訴的原因","dsa_illegal_appeal_explanation":"申訴說明","dsa_illegal_appeal_alt_options":"您可以透過其他方式尋求解決方案，如庭外紛爭和解程序或法庭訴訟。%s","dsa_illegal_placeholder_learnmore":"了解更多","Submit":"送出","reasonForAppeal_appealPg_appealReasonCard_title":"對此判定提出申訴的原因","dsa_illegal_uploader_vio_appeal_exp_desc":"請盡可能詳細說明您不認同此限制的原因，以便我們對您的申訴做出正確判定。","delete":"刪除","webapp_mig_blocked":"已封鎖","webapp_mig_unblocked":"已解除封鎖","dsa_illegal_more_options_link":"更多選項","report_inbox_video":"%s 的影片","report_inbox_comment":"%s 的評論","report_inbox_account":"%s 的帳號","report_inbox_live":"%s 的直播影片","report_inbox_livecomment":"%s 在直播中的評論","report_inbox_directmessage":"%s 的私訊","report_inbox_sound":"%s","report_inbox_hashtag":"%s","shoutouts_detail_comment_report_title":"%s 在致意中的評論","tns_intro_reporter_title":"%s 的 TikTok 致意影片","profile_page_events_list":"%s 的 LIVE 直播活動","report_inbox_inreview":"審查中。","report_inbox_violation":"已發現違規行為。","report_inbox_noviolation":"沒有違規行為。","showVidStatus_reportInbox_vidStatusDeleted_label":"已刪除","showVidStatus_reportInbox_vidStatusIneligible_label":"不符合推薦資格","qareport_question":"問題","report_inbox_status":"狀態","report_inbox_title":"舉報","pm_mt_live_page_sth_wrong":"出錯了","pm_mt_live_page_try_again":"請重試","report_inbox_retry_btn":"重試","km_report_question":"您為什麼要舉報這支影片？","km_pick_reason":"選擇舉報理由","copyright_check_post_popup_cancel":"取消","choosepassword_button":"下一步","Web_report_reason_select":"舉報理由：","Web_report_description":"舉報說明 (選填)：","Please provide as much detail as possible":"請盡可能提供更多細節","attachment_upload_limit":"每個檔案的大小必須小於 20MB","Web_report_description_NetzDG":"我認為此內容也違反了 NetzDG。","Signature":"簽名 (必填)：","Sign_here":"在此簽名","Report_confirmation":"我確認本報告內的資訊均屬實正確。","avia_law_false_report_warning":"請注意，根據法國法律，若知曉某內容或活動並未違法，但為了達到使其遭到刪除或停止發佈的目的而舉報該內容或活動的行為屬於違法行為，可遭判處有期徒刑一年及罰款 15,000 歐元。","Web_report_description_tips":"如果您知道某人有立即的人身危險，請立刻與當地執法單位聯絡。","Please select a scenario":"請選擇問題發生的情境","Web_report_you_can_also":"您也可以：","webdm_block":"封鎖","Web_report_block_who":"封鎖 {username} 嗎？","Web_report_block_detail":"您和 {username} 將不會在 TikTok 上看見彼此的內容。","Sorry, something wrong with the server, please try again.":"抱歉，伺服器出錯了，請重試。","Search":"搜尋","Web_report_account_impersonated":"被假冒的使用者","Web_report_account_impersonated_description":"包含被假冒的人的使用者名稱","dsa_illegal_report_trustedflagger_signout":"身為信任舉報者，您的舉報將優先進行審查。若您想要退出，請{s_tapHere}","dsa_illegal_report_trustedflagger_signout_placeholder":"點擊這裡","dsa_illegal_report_trustedflagger":"如果您被指定為信任舉報者，%s","dsa_illegal_report_trustedflagger_signout_popup":"是否要退出？","dsa_illegal_report_trustedflagger_signout_popup_desc":"您確定要退出信任舉報者的身分，並繼續以一般使用者的身分進行舉報嗎？","dsa_illegal_report_trustedflagger_signout_popup_no":"否","dsa_illegal_report_trustedflagger_signout_popup_yes":"是","dsa_report_penalty_reminder":"請注意，故意提交虛假或誤導性的非法內容舉報可能會受到法律處罰。如果您頻繁提交毫無根據的舉報，我們有權暫停您提交舉報的功能或永久禁用您的帳號。詳情請參閱我們的 {{Transparency Center}} 。","dsa_illegal_report_fill_email":"填寫電子郵件地址","dsa_illegal_cite_law_optional":"(選填)","dsa_illegal_report_email":"您的電子郵件地址","cseReasons_reportPg_emailAddForm_body":"您可匿名提交此舉報。但您不會收到結果通知，也無法選擇提出申訴。","dsa_illegal_report_trustedflagger_fill_email":"請輸入有效的電子郵件地址","dsa_illegal_select_country_optional":"法律管轄權","dsa_illegal_detail_law":"相關法律","dsa_illegal_cite_law_desc":"請詳細說明該內容涉嫌違反的法律。請盡可能具體，以便我們對您的舉報做出正確評估。","dsa_illegal_detail_explanation":"舉報說明","dsa_illegal_report_explanation_desc":"請描述該內容如何違反相關法律。舉報如未能提供充分的資訊，可能會被視為無效。如果相關，請說明您是為自己還是代表他人提交此請求。","dsa_illegal_appeal_signature":"簽名","dsa_illegal_sign_legal_name":"在此處簽署您的法定姓名。","dsa_illegal_confirm_accuracy":"本人確認，這份舉報內容真實、準確、完整。","dsa_illegal_report_trustedflagger_email":"電子郵件地址","hbReportUpdate_selectReportReason_reportHB_sectionDescribe":"舉報說明","hbReportUpdate_selectReportReason_reportHB_sectionPlaceholder":"請提供額外詳細資料，幫助我們深入了解問題。","hbReportUpdate_selectReportReason_reportHB_sectionAddName":"提供個人帳號名稱","eCommerceReporting_reportPg_addDesc_title":"舉報說明","eCommerceReporting_reportPg_addDesc_placeholder":"請提供詳細資料，幫助我們了解問題","nonpersonalizedFeeds_LIVEfeed_label_mainString_personalizationOn":"個人化推薦已開啟","nonpersonalizedFeeds_LIVEfeed_label_mainString":"個人化已關閉","personalisedSearch_searchResults_actionSheet_bodyPara1":"您在 TikTok 上進行的互動會影響您所看到的內容。互動越多，搜尋體驗的個人化程度就越高。.\n\n您可以隨時關閉個人化搜尋。該功能將改變您的部分體驗，包括推薦的搜尋字詞以及搜尋結果的排序方式，但不會對搜尋廣告的個人化設定造成影響。您可以隨時重新開啟個人搜尋以撤銷這些變更。","personalisedSearch_searchResults_actionSheet_bodyPara1V2":"您在 TikTok 上進行的互動會影響您所看到的內容。互動越多，搜尋體驗的個人化程度就越高。\n\n您可以隨時開啟個人化搜尋。該功能將改變您的部分體驗，包括推薦的搜尋字詞以及搜尋結果的排序方式，但不會對搜尋廣告的個人化設定造成影響。您可以隨時關閉個人搜尋以撤銷這些變更。","personalisedSearch_searchResults_actionSheet_header":"管理個人化搜尋","personalisedSearch_searchResults_actionSheet_bodyPara2Bold1":"了解更多","personalisedSearch_searchResults_actionSheet_toggle":"個人化搜尋","personalisedSearch_searchResults_actionSheet_btn":"完成","web_search_search_btn":"搜尋","web_search_recent_header":"最近的搜尋項目","web_search_clear_btn":"全部清除","embed_music_card_see_more":"展開","pc_web_you_may_like":"猜您喜歡","personalisedSearch_searchResults_searchBlankPage_manageSearchLabel":"管理搜尋","web_search_clear_popup_header":"要清除搜尋記錄嗎？","web_search_clear_popup_body":"您的所有搜尋記錄都會被刪除，且無法復原","web_search_clear_popup_clear_cta":"清除","sms_NGO":"傳送 %s 至 %s","server_error_title":"發生錯誤","try_again_btn":"再試一次","no_results":"沒有符合的搜尋結果","no_results_for":"沒有符合「{keyword}」的搜尋結果","no_results_desc":"檢查您的拼寫或嘗試搜尋其他內容。","LIVE":"直播","load_see_more":"載入更多","feedback_and_help_seo_title":"意見回饋和協助 - TikTok","SEO TikTok Description":"TikTok 為手機行動短影音平台。我們的使命是用手機捕捉並呈現全世界用戶的創造力、智慧和精彩瞬間。TikTok使每個人都有機會成為創作者。我們鼓勵每個用戶透過短影音分享他們對生活的熱情和創意。","SEO TikTok Keyword":"TikTok, TikTok, 音樂, 行動影片, 短影片","screentimedash_digitalwellbeing_summary_timespent_graph_yaxis_minutes_1":"{minutes} 分鐘","screentimedash_digitalwellbeing_summary_timespent_graph_yaxis_hours_1":"{hours} 小時","screentimedash_digitalwellbeing_summary_timespent_day":"白天：","screentimedash_digitalwellbeing_summary_timespent_hours_1":"{hours} 小時","screentimedash_digitalwellbeing_summary_timespent_minutes_1":"{minutes} 分鐘","screentimedash_digitalwellbeing_summary_timespent_night":"晚上：","screentimedash_digitalwellbeing_summary_appopened_day_1":"{num, plural, other {日間：{num} 次}}","screentimedash_digitalwellbeing_summary_appopened_night_1":"{num, plural, other {夜間：{num} 次}}","customizeSTM_screenTimeLimit_selectTimeActionSheet":"{hours} 小時 {minutes} 分鐘","screentimedash_digitalwellbeing_summary_timespent_header_total":"總計","screentimedash_digitalwellbeing_summary_appopened_header_total":"總計","screentimedash_digitalwellbeing_summary_timespent_header_daytime":"白天時間","screentimedash_digitalwellbeing_summary_appopened_header_daytime":"白天時間","screentimedash_digitalwellbeing_summary_appopened_daytime_1":"{num, plural, other {{num} 次}}","screentimedash_digitalwellbeing_summary_timespent_header_nighttime":"晚上時間","screentimedash_digitalwellbeing_summary_appopened_header_nighttime":"晚上時間","screentimedash_digitalwellbeing_summary_appopened_nighttime_1":"{num, plural, other {{num} 次}}","screentimedash_digitalwellbeing_summary_daytime_tip_title":"白天時間","screentimedash_digitalwellbeing_summary_nighttime_tip_title":"晚上時間","screenTime_web_dayTimeTooltip_desc":"白天時間為上午 6 點 –下午 10 點","screentimedash_digitalwellbeing_summary_nighttime_tip_desc":"晚上時間是下午 10 點 – 上午 6 點。","screentimedash_digitalwellbeing_summary_day_label_sun":"週日","screentimedash_digitalwellbeing_summary_day_label_mon":"週一","screentimedash_digitalwellbeing_summary_day_label_tue":"週二","screentimedash_digitalwellbeing_summary_day_label_wed":"週三","screentimedash_digitalwellbeing_summary_day_label_thu":"週四","screentimedash_digitalwellbeing_summary_day_label_fri":"週五","screentimedash_digitalwellbeing_summary_day_label_sat":"週六","screentimedash_digitalwellbeing_summary_day_label_today":"今天","screentimedash_digitalwellbeing_summary_header":"摘要","screenTime_summarySection_desc":"您的每週指標包含您使用應用程式和 tiktok.com 的時長。","screentimedash_digitalwellbeing_summary_thisweek_header":"本週","screentimedash_digitalwellbeing_summary_timespent_tab":"所花的時間","screentimedash_digitalwellbeing_summary_appopened_tab":"TikTok 已開啟","screentimedash_digitalwellbeing_summary_appopened_actionsheet_chooseweek_title":"選取星期","screenTime_web_setting_done_btn":"完成","screentime_settings_screentimebreaks_title":"螢幕休息時間","screentime_settings_screentimebreaks_desc":"在您長時間滑螢幕時提醒您休息一下。","screentime_settings_screentimebreaks_status_off":"關閉","customizeSTM_screenTimeLimit_selectTime_minutes":"{minutes} 分鐘","nightscreentimemgmt_screentimesettings_sleepreminders_feature_off":"關閉","dailyscreentime_featurescreen_heading":"每日螢幕時間","nightscreentimemgmt_screentimesettings_sleepreminders_feature_name":"睡眠提醒","nightscreentimemgmt_screentimesettings_sleepreminders_feature_desc":"在指定睡眠時間接收提醒。","FPscheduledBreak_teenScreentimeDashboard_breakSetting":"休息時間","FPscheduledBreak_teenScreentimeDashboard_subContent":"您的休息時間設定由 {s_username} 管理","FPscheduledBreak_teenScreentimeDashboard_actionOn":"開啟","FPscheduledBreak_teenScreentimeDashboard_actionOff":"關閉","screentimedash_digitalwellbeing_weeklyscreentime_title":"每週螢幕時間更新","screentimedash_digitalwellbeing_weeklyscreentime_desc":"隨時透過\u003Cb\u003E收信匣\u003C\u002Fb\u003E掌握您的應用程式使用時長。","teenScreenTimeDashboard_familyPairing_header_helpAndResources":"協助與資源","teenScreenTimeDashboard_familyPairing_screenTime_link":"健康數位生活秘訣","screenTime_infoIcon_sheet_title":"螢幕時間","screenTime_webApp_infoIcon_desc":"您的設定更新也將顯示在應用程式上。","FPscheduledBreak_teenDetailPage_subContent":"您無法在這些時段使用 TikTok","FPscheduledBreak_teenDetailPage_offSelection":"關閉","customizeSTM_screenTimeLimit_selectTime_hours":"{hours} 小時","customizeSTM_dailyScreenTimeOn_header_notified":"接收通知","customizeSTM_dailyScreenTimeOn_desc_notified":"達到時間限制後，您將收到通知，並且需輸入 {username} 提供的密碼才能繼續使用應用程式。","customizeSTM_dailyScreenTimeOn_header_discuss":"與父母或監護人討論您的設定","customizeSTM_dailyScreenTimeOn_desc_discuss":"您的每日螢幕時間設定由 {username} 在 [家庭安全配對] 中進行管理。","customizeSTM_dailyScreenTimeOn_header_time_minutes":"您的每日螢幕時間為 {minutes} 分鐘。","customizeSTM_dailyScreenTimeOn_header_time_hours":"您的每日螢幕時間為 {hours} 小時。","customizeSTM_dailyScreenTimeOn_header_time_hoursMinutes":"您的每日螢幕時間為 {hours} 小時 {minutes} 分鐘。","customizeSTM_teenDailyScreenTimeOn_header":"您的每日螢幕時間為：","customizeSTM_dailyScreenTimeOn_title":"每日螢幕時間：開啟","customizeSTM_dailyScreenTimeOff_title":"每日螢幕時間：關閉","dailyscreentime_featurescreen_toast_editedtime":"您已編輯每日螢幕時間","customizedailyscreentime_dailyscreentime_confirmationtoastset_desc":"您已設定每日螢幕時間","error_toast":"發生錯誤，請再試一次。","dailyscreentime_featurescreen_firstbullet_settime_desc_choose":"選擇 TikTok 使用時長","dailyscreentime_featurescreen_firstbullet_settime":"設定您的每日時間","dailyscreentime_featurescreen_secondbullet_getnotified_desc_close":"關閉 TikTok 以遵守您的每日時間限制，或者輸入密碼返回 TikTok","dailyscreentime_featurescreen_secondbullet_getnotified":"接收通知","customizeSTM_screenTime_limits_header":"螢幕時間限制","screentimedash_digitalwellbeing_dailyscreentime_title":"每日螢幕時間","dailyscreentime_featurescreen_desc_balanceyourday":"我們將在您達到每日時間時通知您，以協助您合理安排一天的時間。","dailyscreentime_featurescreen_button_edittime":"編輯每日螢幕時間","customizedailyscreentime_dailyscreentime_setdailytimecta_button":"設定每日螢幕時間","customizeSTM_screenTimeLimit_option_sameLimit":"每天設定相同的限制","customizeSTM_screenTimeLimit_timeLimit":"時間限制","screenTime_web_screenTimeBreaks_mainSetting_selectTime_title":"選取時間","screenTime_web_dailyscreentime_mainSetting_setSameLimit_40m":"40 分鐘","screenTime_web_dailyscreentime_mainSetting_setSameLimit_1h":"1 小時","screenTime_web_dailyscreentime_mainSetting_setSameLimit_1h30m":"1 小時 30 分鐘","screenTime_web_dailyscreentime_mainSetting_setSameLimit_2h":"2 小時","screenTime_web_dailyscreentime_mainSetting_setSameLimit_custom":"自訂","customizeSTM_screenTimeLimit_option_customLimit":"每天設定自訂限制","screenTime_web_dailyscreentime_manageTime_modal_done_btn":"完成","customizeSTM_screenTimeLimit_btn_next":"下一步","Next":"下一步","nightscreentimemgmt_sleepreminders_defaultscreen_setsleeptimebullet_title":"設定您的睡眠時間","nightscreentimemgmt_sleepreminders_defaultscreen_setsleeptimebullet_desc":"到睡眠時間時，您將收到通知","nightscreentimemgmt_sleepreminders_defaultscreen_pushnotifsbullet_title":"推播通知已靜音","nightscreentimemgmt_sleepreminders_defaultscreen_pushnotifsbullet_teens_desc":"為減少干擾，推播通知將在早上 8 點前維持靜音","nightscreentimemgmt_sleepreminders_defaultscreen_pushnotifsbullet_adults_desc":"為減少干擾，推播通知將在您睡眠時間後的 7 小時內維持靜音","nightscreentimemgmt_sleepreminders_sleeptime_on_secondline_teens":"{sleeptimestart}–{sleeptimeend}，8 小時","nightscreentimemgmt_sleepreminders_sleeptime_on_secondline_adults":"{sleeptimestart}–{sleeptimeend}，7 小時","nightscreentimemgmt_sleepreminders_defaultscreen_heading":"睡眠提醒","nightscreentimemgmt_sleepreminders_defaultscreen_desc":"TikTok 上的睡眠提醒可幫助您做好上床睡覺的準備。","nightscreentimemgmt_sleepreminders_sleeptime_on_editsleeptime_btn":"編輯睡眠時間","nightscreentimemgmt_sleepreminders_defaultscreen_setsleeptime_btn":"設定","privacy":"隱私權","Language":"語言","manage_account":"管理帳號","privacy_h1":"隱私權","datadownload_screentitle":"下載 TikTok 資料","Privacy and settings":"設定","WebApp_coin_recharge_1":"獲取金幣","webapp_privacy_and_safety_blocked_accounts":"封鎖的帳號","screentime_settings_title":"螢幕時間","filterKeywordsWeb_emptyPage_header":"過濾關鍵字","FPscheduledBreak_teenDetailPage_pageHeading":"休息時間","privacyCenter_webFooter_resourcesPrivacy_navLink":"隱私權中心","account":"帳號","GENERAL":"一般","Support":"支援","Report a problem":"舉報問題","Help Center":"幫助中心","safety center":"安全中心","About":"關於","Community Guidelines":"社群自律公約","createrCenter_footer_termsOfService":"服務條款","Privacy Policy":"隱私權政策","addOpenSourceSoftware_termsAndPolicies_policyName_intellectualProperty":"《智慧財產權政策》","addOpenSourceSoftware_termsAndPolicies_noticesName_openSourceSoftware":"開放原始碼軟體通知","acc_control":"帳號控制","delete_acc":"刪除帳號","changeRegistrationLocation_account_accountInformation":"帳號資訊","changeRegistrationLocation_account_accountInformation_title":"帳號地區","changeRegistrationLocation_account_accountInformation_subtitle":"您的帳號區域最初是根據註冊時間和地點進行設定的。","Log out":"登出","Confirm":"確認","login_fb_noLonger_LogInEase":"確認您可重新登入 TikTok","login_fb_noLonger_LogOut":"登出","login_fb_confirmLogOut_header":"是否要登出？","login_fb_confirmLogOut_body":"若您尚未將電話號碼綁定至此帳號，當其他登入方式無法使用時，您可能會在重新登入時遇到困難。","login_fb_confirmLogOut_stay_cta":"保持登入","discoverability":"曝光設定","private_acc":"隱私帳號","private_acc_desc":"若使用隱私帳號，只有您核准的使用者才能關注您並觀看您的影片。您現有的粉絲將不受影響。","bc_account_private_enable_notice_content":"You’ve shared access permission with a TikTok Business Center account. To change to a private account, first go to %s and remove this permission.","bc_account_private_enable_notice_contenturl":"Settings and privacy","ba":"企業帳號","caba_no_private":"{account_type} 不能設定為私密狀態","caba_no_private_desc":"若要將您的帳號設為私密狀態，請在 \u003Cstrong\u003E[隱私設定] \u003E [管理帳號]\u003C\u002Fstrong\u003E 中切換至應用程式的個人帳號。","private_acc_ads":"若要切換至隱私帳號，請在 \u003Cstrong\u003E[隱私設定] \u003E [隱私權]\u003C\u002Fstrong\u003E 中關閉 TikTok 應用程式上的廣告授權。","switch_public_h1":"切換為公開帳號？","switch_public_desc":"若您切換到公開帳號，所有人都可以觀看您的影片。根據您在「隱私設定」中的選擇，使用者或可與您的影片進行合拍、畫面拼貼或下載您的影片。您無需審核粉絲，所有待處理的關注請求都會自動通過審核。","bc_account_private_enable_notice_title":"Can’t change to private account","disallowSwitchAccount_privacy_popUp_title":"結束直播並將帳號設定為 %s？","disallowSwitchAccount_privacy_popUp_description":"無法在直播中途變更隱私設定。若要將帳號設定為 %s，您需要先結束直播。","disallowSwitchAccount_privacy_popUp_placeholder":"私密","disallowSwitchAccount_privacy_popUp_placeholder2":"公開","disallowSwitchAccount_privacy_popUp_button2":"立即結束直播","download_data_entry_point":"資料","datadownload_process_download_your_data":"下載您的資料","dyd_desc":"取得您的 TikTok 資料副本","cancel":"取消","toast_restricted_fam_pairing":"設定受到「家庭安全配對」限制","safety":"安全","webapp_block_experience_unblock_popup_header":"解除封鎖 %s (%s) 嗎？","webapp_block_experience_block_popup_header":"封鎖 %s (%s) 嗎？","webapp_block_experience_unblock_popup_body":"%s 將可以傳送訊息給您、查看您的貼文及關注您，但是不會收到您已將其解除封鎖的通知。","webapp_block_experience_block_popup_body":"該使用者將無法傳送訊息給您、查看您的貼文或尋找您的個人資料。這不包括多位直播主的直播、其他人發佈的合拍影片或是你們兩人都有參與的群組聊天室等其他情境。該使用者不會收到您已將其封鎖的通知。","webapp_unblocked_button1":"解除封鎖","webapp_unblocked_button2":"取消","Legal":"法律","inbox_all_activity":"所有活動","inbox_default_text":"有關您帳號的通知會出現在這裡。","Inbox_Comments_on_your_videos":"您的影片收到的評論","Inbox_When_someone_comments_on__one_of_your_videos_you_ll_see_it_here":"當有人評論您的影片時，您會在這裡收到評論通知","Inbox_New_followers":"新粉絲","Inbox_When_someone_new_follows_you_you_ll_see_it_here":"當有人關注您時，您會在這裡看到粉絲通知","Inbox_Likes_on_your_videos":"您的影片收到的讚","Inbox_When_someone_likes_one_of_your_videos_you_ll_see_it_here":"當有人對您的影片按讚時，您會在這裡收到按讚通知","Inbox_Mentions_of_You":"提及您","Inbox_When_someone_mentions_you_you_ll_see_it_here":"當有人提及您時，您會在這裡收到提及通知","Inbox_replied_to_your_comment":"%s 回覆了你的評論","Inbox_commented":"%s 發表了評論：%@","inbox_videoreply":"用影片回覆了你的評論。","Inbox_created_a_duet_with_you":"%# 與您進行了合拍","Inbox_is_following_you":"%s 正在關注您","Inbox_started_following_you":"%s 關注了您","Inbox_approved_your_follow_request":"%s 接受了您的關注申請","Inbox_and":"和","Inbox_others":"等 %d 人","photomode_inbox_liked":"{num, plural, other {對您的照片按了讚。}}","Inbox_liked_your_video":"%s 對你的影片按了讚","Inbox_liked_your_comment":"%s 對您的評論按了讚","in_app_push_mention_in_photo":"{num, plural, other {在照片中提及了您。}}","Inbox_mentioned_you_in_a_video":"%# 在影片中提到了您","Inbox_mentioned_you_in_a_comment":"%# 在一則評論中提到了您：%@","system_notifications_inbox_header":"系統通知","inbox_request_accept":"接受","Inbox_Notifications":"通知","Inbox_Follow_requests":"關注請求","Inbox_New":"最新","Inbox_Today":"今天","Inbox_Yesterday":"昨天","Inbox_This_Week":"本週","Inbox_This_Month":"本月","Inbox_Previous":"更早之前","system_notifications_details_button":"欲了解更多詳情，請開啟 TikTok 應用程式","Couldn't upload image. Please try again":"圖片上傳失敗，請重新上傳","Network error. Please try again.":"網路錯誤，請重試","setting_feedback_delete_picture":"為保護您的隱私權，我們只會儲存舉報的圖片 30 天。","setting_feedback_delete_history":"為保護您的隱私權，我們會在 36 個月後移除報告詳細資料。","Thank you for your feedback":"感謝您的意見反應","privateAccountPrompt_manageAccount_privateAccount_title":"私密帳號","privateAccountPrompt_account_permission_current_label":"目前","privateAccountPrompt_manageAccount_privateAccount_body":"只有獲得核准的粉絲才能看到您的個人資料和貼文。所有人都無法對您的貼文進行合拍或畫面拼貼。","privateAccountPrompt_manageAccount_publicAccount_title":"公開帳號","privateAccountPrompt_manageAccount_publicAccount_body2":"TikTok 平台內外的所有人都可以查看您的個人資料和貼文。您可以個別自訂您的合拍、畫面拼貼或其他互動設定。","privateAccountPrompt_stayPrivate_button":"保持私密","privateAccountPrompt_stayPublic_button":"保持公開","privateAccountPrompt_manageAccount_privateAccount_button2":"稍後提醒我","privateAccountPrompt_switchPrivate_button":"切換為私密","privateAccountPrompt_switchPublic_button":"切換為公開","privateAccountPrompt_manageAccount_privateAccount_button3":"選取 [私密帳號]","privateAccountPrompt_manageAccount_privateAccount_button4":"選取 [公開帳號]","privateAccountPrompt_manageAccount_title":"管理帳號隱私設定","privateAccountPrompt_popUp_prompt_title":"您的帳號為私密帳號","privateAccountPrompt_welcomePage_title":"審查帳號權限","privateAccountPrompt_manageAccount_privateAccount_description3":"您可以稍後在應用程式設定中將帳號切換為私密或公開帳號。TikTok 平台內外的所有人都可以查看您的姓名、使用者名稱和個人資料照片。%s","privateAccountPrompt_popUp_prompt_description":"由於您之前選取了 [稍後提醒我]，所以您的帳號已設為私密帳號。請選擇是否要保持私密或切換至為公開。 %s","privateAccountPrompt_account_permission_disclaimer":"您可以稍後在應用程式設定中將帳號切換為私密或公開帳號。%s","privateAccountPrompt_manageAccount_privateAccount_placeholder":"了解更多","tiktok_instant_app_tab_swipe_up_for_more":"向上滑動即可查看更多","comment_tray_reply_default":"回覆 @{username}","comment_tray_default":"新增評論...","nonpersonalizedFeeds_profile_suggestedAccounts_info_body":"啟用個人化動態後，系統會根據您可能認識的人 (包括您所關注帳號的關注者) 向您推薦帳號。您可以在 [%1$s] 中變更向您推薦的內容。\n\n您的帳號也可能會被推薦給您可能認識的人。您可以隨時在 [%2$s] 中變更曝光設定。","nonpersonalizedFeeds_profile_suggestedAccounts_info_bodyManagePersonFeedsVariable":"管理個人化動態","nonpersonalizedFeeds_profile_suggestedAccounts_info_bodyPrivacyVariable":"隱私權","Privacy":"隱私權","seo_userpage_view_more_btn":"查看更多","basicPoi_relatedTopics":"相關主題","share":"分享","basicPoi_infoCard":"資訊卡","basicPoi_moreRelated":"更多相關影片","seo_userpage_empty_sound_header":"尚無音樂","seo_userpage_empty_sound_body":"{username} 發佈的音樂會出現在這裡。","seo_userpage_num_formatted":"有 1 段影片使用","seo_userpage_plural_num_formatted":"有 {number} 段影片使用","poisuggest_placeuna_title_1":"無法存取地點","poisharing_edgecase_one":"此地點已無法使用","poisharing_cta_return":"返回 [為您推薦]","seo_popular_faq":"常見問題","keys":"來源","Public":"公開","author":"作者","follow":"關注","mute_autoplay_unmute_btn":"解除靜音","webapp_share_btn":"分享","comments":"則評論","bc_disclosure_tag_ecommerce_us":"符合佣金領取資格","bc_disclosure_tag_ecommerce_uk":"佣金已支付","bc_new_disclosure":"付費合作關係","tcm_closedLoop_commercialContent_brandOrganic_videoTag":"推廣內容","syntheticMedia_feed_bottomBanner_AIGCLabel":"創作者已標記為由 AI 產生","AIGC_FYP_descSection_label":"由 AI 產生","subVideo_viewing_lable":"僅限訂閱者","pc_web_less_btn":"隱藏","pc_web_more_btn":"更多","qa_page_reflow_page_blank_title":"無法取得問題","music_detail_unavailable_1":"這段音樂目前無法使用。","nonpersonalizedFeeds_feed_entrypoint_manageFeed":"管理動態","webapp_savevid_btn":"儲存影片","webapp_duet_btn":"合拍","webapp_livephoto_btn":"動態照片","webapp_shareasgif_btn":"以 GIF 格式分享","online":"線上","net":"淨粉絲","update":"更新","TikTok":"TikTok","discard":"捨棄","Download":"下載","Caption":"標題","embed":"內嵌","Home":"首頁","filterKeywordsWeb_fypEntry_modal_desc1":"您在 TikTok 上進行的互動會反映您所看到的內容。互動越多，體驗的個人化程度就越高。您可隨時透過{s_keywordLink}調整推薦內容。","filterKeywordsWeb_fypEntry_manageFeeds_popup":"過濾關鍵字","filterKeywordsWeb_fypEntry_modal_desc2":"您亦可隨時關閉個人化動態。此操作會變更您的部分體驗，包括將「為您推薦」變更為「熱門」，但不會影響廣告個人化體驗。{s_learnLink}","nonpersonalizedFeeds_turnOn_modal_toggle_headline":"管理個人化動態","nonpersonalizedFeeds_turnOn_modal_toggle_toggleString":"個人化動態","Follow":"關注","requested":"已申請","Inbox_Follow_back":"關注對方","masklayer_general_title":"敏感內容","photosensitive_settings_title":"移除光敏性影片","photosensitive_masklayer_removed":"已移除光敏性影片","cc_webapp_age_video_details_title":"無法觀看影片","masklayer_general_body":"這段影片可能令某些人感到反感。","photosensitive_masklayer_body1":"這段影片包含的閃光效果可能會觸發視覺敏感人士癲癇發作。","photosensitive_masklayer_body2":"若您跳過這段影片，我們也會移除其他光敏性影片。","photosensitive_masklayer_removed_body1":"您已選擇跳過特效可能觸發光敏性癲癇症發作的影片。","photosensitive_masklayer_removed_body2":"您可以隨時在 [隱私設定] \u003E [輔助功能] 中更新您的設定。","cc_webapp_age_video_details_body":"此內容有年齡限制。","masklayer_general_skip":"跳過影片","photosensitive_masklayer_watch":"觀看影片","masklayer_general_watch":"仍要觀看","photosensitive_masklayer_skipall":"跳過全部","photosensitive_skepped_toast":"已跳過影片","scm_label_and_appeal_modal_title":"什麼是政府媒體？","scm_label_and_appeal_modal_desc":"政府對帳號的編輯內容擁有控制權。","scm_label_and_appeal_modal_button_learn_more":"了解更多","scm_label_and_appeal_modal_button_dismiss":"關閉","optimize_web_pill_discover_more":"探索更多","optimize_web_pill_use_sound":"使用此音樂","optimize_web_pill_join_hashtag":"加入此主題標籤","ssa_webpop_open_btn":"開啟 TikTok Lite","optimize_web_pill_open_tiktok":"在 TikTok上開啟","home_error_video_geofencing":"您所在的國家或地區無法觀看此影片","music_detail_unavailable_2":"您所在的國家或地區無法使用這段音樂","qapage_webapp_error_subtitle":"探索 TikTok 社群成員提供的更多問題和回答！","playlist_invalid_error_code":"播放清單無效或沒有版權","photo_post_unavailable_dec":"您可以在應用程式上查看照片或是瀏覽熱門創作者、主題標籤和音樂。","disable_reuse_soundtrack_unavailable_page_body":"在尋找音樂嗎？試試瀏覽我們的熱門創作者、主題標籤和音樂。","poistore_detail_text":"功能無法使用，你帳號的所在區域目前不支援此功能","qa_reflow_page_empty_subtitle":"探索 TikTok 社群成員提供的更多問題和回答！","ext_share_story_viewmore_btn":"查看更多影片","Page not available":"頁面無法使用","Couldn't find this account":"找不到此帳號","Couldn't find this sound":"找不到此音樂","disable_reuse_soundtrack_unavailable_mobile_body":"無法使用此音樂","embed_err_unavailable":"目前無法觀看影片","photo_post_unavailable_title":"在 TikTok 應用程式上查看照片","Couldn't find this hashtag":"找不到此標籤","desktop_error_video_geofencing":"影片無法觀看","qapage_webapp_error_title":"無法取得問題","err_feature_unavailable":"功能無法使用","playlist_unavailable":"此播放清單已不可用","subVideo_unavailableScreen_title":"這部影片僅供訂閱者觀看","network_error_title":"網路發生錯誤","server_error_sub":"非常抱歉！請稍後再試。","network_error_sub":"請連線到網際網路後再試一次。","refresh":"重新整理","profile_page_pin":"已置頂","seo_user_video_cover":"{videoAuthor} 使用 {musicAuthor} 的 {musicName} 創作的 {videoText}","official_tag":"官方","original_tag":"原創","cover_notice_violation":"違反《社群自律公約》","Is your problem resolved?":"您的問題是否已解決","backend_settings_yes":"解決了","backend_settings_no":"並沒有","backend_settings_stillhaveproblem":"需要更多幫助？","backend_settings_topictitle":"選擇一個主題","Feedback and help":"反應與說明","feedback_pc_back":"返回","backend_settings_faqtitle":"常見問題","feedback_pc_history":"意見反應記錄","Tell us your feedback":"告訴我們您的寶貴意見","feedback_pc_upload":"上傳支援媒體","com_mig_your_support_tickets":"您的支援服務單","Description must be at least 2 characters":"請不要少於兩個字，感謝您的體諒！","Feedback":"反應","about":"關於","seo_pcWeb_recipe_about_header":"料理介紹","seo_pcWeb_recipe_ingredient_header":"所需食材","seo_pcWeb_recipe_step_header":"詳細步驟","seo_pcWeb_recipe_hint_header":"實用小貼士","unit_week":"週","unit_day":"天","unit_hr":"小時","unit_min":"分鐘","unit_sec":"秒","time_ago":"{num}{unit}前 ","vidModAnalytics_detailPg_sectionHumanMod_sectionBody":"使用者和第三方可以向我們舉報違反政策的行為。我們根據內容違反我們《社群自律公約》的舉報，偵測到這一違反政策的行為。","vidModAnalytics_detailPg_sectionVideoDetails_sectionLabel":"影片詳細資料","vidModAnalytics_detailPg_sectionDatePosted_sectionLabel":"於 %2$s 在 %1$s 發佈","vid_mod_analytics_appeal_detailpg_reason_title":"違規原因","vid_mod_analytics_detail_pg_title":"影片資格不符","vid_mod_analytics_detail_pg_desc":"由於違反《社群自律公約》，此影片不符合「為您推薦」動態頁資格。","vidModAnalytics_detailPg_sectionSuccess_header":"申訴已獲核准","vid_mod_analytics_appeal_success_detail_pg_desc":"我們已審查您的申訴並復原您的影片。造成您的不便，我們深感抱歉。感謝您成為 TikTok 社群的一員！","vid_mod_analytics_appeal_detail_pg_title":"影片已移除","vid_mod_analytics_appeal_detail_pg_desc":"這支影片違反我們的《社群自律公約》。","vidModAnalytics_appealSubmitted_sectionTitle_header":"已收到申請","vid_mod_analytics_appeal_rcv_detail_pg_desc":"我們已收到您的申訴，其結果將在審查結束後第一時間通知您。","vid_mod_analytics_penalty_reason_minor_title":"未成年安全","vid_mod_analytics_penalty_reason_minor_desc":"為了提供青少年數位環境中更多探索和表達身分的空間， 16 歲以下使用者上傳的內容不符合推薦資格。向未成年人宣傳整容外科手術可能會導致更多的未成年人對身體感到不滿。因此，此類內容 (包括整形前後的對比影片、手術過程影片，以及選擇性討論整容外科手術不給予風險警告的訊息) 不符合所有 18 歲以下使用者的「為您推薦」動態頁資格。","vid_mod_analytics_penalty_reason_unoriginal_title":"非原創、品質欠佳以及含有 QR 碼的內容","vid_mod_analytics_penalty_reason_unoriginal_desc":"為維護積極向上、舒適愉悅的 TikTok 使用環境，非原創或低品質的內容將不符合推薦資格。非原創內容包括直接從其他來源（例如其他平台、電視節目、電影或網路廣播）匯入或上傳，而不經任何全新創意編輯的影片。如果影片帶有浮水印或疊加的標誌，我們就可判斷出該影片是否為非原創影片。低品質內容包括非常短的影片、靜態圖片，以及僅由 GIF 製成的影片。含有 QR code 的內容因為可能將使用者引至有害網站或應用程式，因此通常也不符合「為您推薦」動態頁資格，但我們會在風險較低的情況下（例如，電子商務用）進行例外處理。","vid_mod_analytics_nr_vid_penalty_reason_unoriginal_title":"非原創、品質欠佳以及含有 QR 碼的內容","vid_mod_analytics_nr_vid_penalty_reason_unoriginal_desc":"為了給使用者創造積極向上的 TikTok 平台使用體驗，非原創和低品質的內容不符合推薦資格。非原創內容是指直接從其他來源匯入或複製，而不經任何全新創意編輯的內容。影片若帶有浮水印或標誌，則可能為非原創影片。低品質內容包括非常短的影片、靜態圖片，以及僅由 GIF 製成的影片。","vid_mod_analytics_nr_acct_penalty_reason_unoriginal_title":"複製的帳號","vid_mod_analytics_nr_acct_penalty_reason_unoriginal_desc":"您的帳號包含的貼文並非原創，因此不符合「為您推薦」動態的資格標準。欲了解更多詳情，請參閱《社群自律公約》\u003E「限制為您推薦頁面發布資格」\u003E「非原創、低品質且含有 QR code 的內容」","vid_mod_analytics_penalty_reason_spam_title":"垃圾訊息、不實或誤導性內容","vid_mod_analytics_penalty_reason_spam_desc":"試圖欺騙或操控使用者以在平台上獲得更多粉絲、按讚數、觀看數或其他參與度指標的內容不符合「為您推薦」動態頁資格。這包括鼓勵使用者互相關注或按讚的內容，或者誘騙使用者按一下讚或分享按鈕的內容。此外，宣傳陰謀論或針對時事和詳情仍在調查中的事件散播不實或有害資訊的內容也不符合「為您推薦」動態頁資格。","vid_mod_analytics_penalty_reason_sexual_title":"帶有明顯性暗示的內容","vid_mod_analytics_penalty_reason_sexual_desc":"為維護舒適的觀看體驗，具明顯性暗示的內容可能不符合推薦資格。其中包括含裸體暗示、色情化身體部位，或露骨的煽情或性挑逗 (如脫衣舞) 內容。","vid_mod_analytics_penalty_reason_tobacco_title":"菸酒產品","vid_mod_analytics_penalty_reason_tobacco_desc":"即使飲酒者已達法定年齡，宣揚、提及或描述危險性飲酒的內容也可能不符合推薦資格。描述成人使用菸草產品或提及管制物品的內容不符合推薦資格。","vid_mod_analytics_penalty_reason_stunts_title":"危險特技與運動","vid_mod_analytics_penalty_reason_stunts_desc":"在沒有安全預防措施之下模仿某些活動可能會帶來風險或危險，進而導致人身傷害。包含危險特技或由非專業人士進行的極限運動的內容可能不符合資格。","vid_mod_analytics_penalty_reason_graphic_title":"暴力與露骨內容","vid_mod_analytics_penalty_reason_graphic_desc":"讓觀眾感到不適、震驚或厭惡的內容可能不符合 [為您推薦] 動態資格，包括驚悚特效、突發驚嚇、逼真的血腥妝容，以及身體功能描述。TikTok 禁止大多數的暴力與血腥內容。然而，當內容是用來記錄真實事件並認為符合公共利益時，我們可能會允許特定類型的內容，例如死亡、事故或打鬥的圖像。由於此內容可能會讓部分觀眾感到不適，因此不符合推薦資格，而且此內容會附有「選擇觀看」畫面或警告。","vid_mod_analytics_penalty_reason_fyf_title":"不符合「為您推薦」動態頁資格","vid_mod_analytics_penalty_reason_fyf_desc":"您的影片不符合「為您推薦」動態的資格標準。欲了解更多詳情，請參閱《TikTok 社群自律公約》\u003E 不符合「為您推薦」動態頁資格","Profile":"個人資料","common_login_panel_title":"登入 TikTok","profile_unlogged_text":"註冊帳號","profile_unlogged_button":"註冊","screentime_settings_screentimebreaks_actionsheet_schedulebreaks_option_10m":"10 分鐘","screentime_settings_screentimebreaks_actionsheet_schedulebreaks_option_20m":"20 分鐘","screentime_settings_screentimebreaks_actionsheet_schedulebreaks_option_30m":"30 分鐘","screentime_settings_screentimebreaks_actionsheet_schedulebreaks_option_customtime":"自訂時間","screentime_settings_screentimebreaks_actionsheet_title":"設定休息時間","screentime_settings_screentimebreaks_actionsheet_desc_returninguser":"在您連續使用 TikTok 一段時間後提醒您休息一下。","screentime_settings_screentimebreaks_actionsheet_desc_returninguser_learnmore_link":"了解更多","Learn more":"了解更多","screentime_settings_screentimebreaks_actionsheet_schedulebreaks_customtime_title":"選取自訂時間","screentime_settings_screentimebreaks_intro_schedulebreaks_heading":"設定休息時間","screentime_settings_screentimebreaks_intro_schedulebreaks_desc":"在您連續使用一段時間後提醒您休息一下","screentime_settings_screentimebreaks_intro_tailoryourexp_heading":"量身打造您的體驗","screentime_settings_screentimebreaks_intro_tailoryourexp_desc":"延遲以便再次收到提醒或編輯未來的提醒","screentime_settings_screentimebreaks_intro_title":"螢幕休息時間","screentime_settings_screentimebreaks_intro_desc":"休息提醒可助您擁有更具掌控感和平衡感的 TikTok 使用體驗。","screenTime_screenTimeBreaks_manageTime_editBreak_toast":"您已編輯螢幕休息時間","screenTime_sleepReminders_setSleepTime_toast":"您已設定睡眠時間","nightscreentimemgmt_sleepreminders_toast_editsleeptime":"您已編輯睡眠時間","settings":"設定","screentime_settings_dailyscreentime_status_off":"關閉","family_safety_mode_locked_mode_indicator":"已鎖定","screentimedash_digitalwellbeing_dailyscreentime_desc":"在您使用 TikTok 的時間達到時限時收到通知。","FPscheduledBreak_parentDetailpage_monday":"星期一","FPscheduledBreak_parentDetailpage_tuesday":"星期二","FPscheduledBreak_parentDetailpage_wednesday":"星期三","FPscheduledBreak_parentDetailpage_thursday":"星期四","FPscheduledBreak_parentDetailpage_friday":"星期五","FPscheduledBreak_parentDetailpage_saturday":"星期六","FPscheduledBreak_parentDetailpage_sunday":"星期日","Like":"按讚","comment_turnoff_unlike":"由於使用者的隱私設定的緣故，無法取消按讚","comment_turnoff_like":"由於使用者的隱私設定的緣故，無法為評論按讚","comment_nointernet_toast":"網路連線發生問題，請稍後再試。","comment_delete_success":"已刪除","comment_delete_failed":"無法刪除評論，請再試一次。","comment_reply_success":"已傳送回覆","comment_post_success":"評論成功","comment_banned_toast":"由於多次違反《社群自律公約》，您暫時無法發表評論。請在應用程式通知中查看詳情。","comment_post_failed":"無法發表評論，請重試","settings_updated":"設定已更新","Web_report_thanks_for_report":"感謝您的舉報","Web_report_report_detail":"我們將審查您的舉報，若確實存在違反《社群自律公約》的行為，我們將採取適當行動。","live_close":"關閉","avia_law_report_received_confirm":"我們將審查您的舉報內容，若發現該內容違反法國的線上仇恨言論法 (LCEN) 或我們的社群自律公約，我們將採取行動。","dsa_illegal_report_received_confirm_logout":"我們將審查您的舉報，如果有違反《社群自律公約》，或者我們認為所舉報的內容違反歐洲法律，我們會採取行動。您會透過電子郵件收到我們的判決通知。","dsa_illegal_report_received_confirm":"我們將審查您的舉報，如果您的舉報違反了我們的《社群自律公約》，或是我們認為舉報的內容違反歐洲法律，我們將會採取適當行動。您將會收到我們的裁定通知。","pm_mt_live_done":"完成","Web_report_report_for_error":"網路錯誤","dsa_illegal_report_trustedflaggerlink":"按一下這裡","dsa_illegal_detail_country":"法律管轄權","dsa_illegal_select_region":"選擇地區","Web_report_account_impersonated_search":"搜尋使用者名稱","hbReportUpdate_selectReportReason_reportHB_sectionSearch":"搜尋帳號","hbReportUpdate_selectUser_friendStatus_label":"好友","seo_popular_disclaimer":"此資訊為 AI 所產生，且可能回傳不相關的結果。其不代表 TikTok 的觀點或建議。若有任何疑慮，請前往以下網址進行回報：","seo_popular_disclaimer2_btn":"意見回饋和協助 - TikTok","Expand":"展開","Webapp_login_mobile_fyp_limit":"您已達訪客身分可觀看的影片數目上限。請登入以觀看更多推薦影片。","Webapp_login_mobile_fyp":"登入以繼續觀看","ca":"創作者帳號","or":"或","Comment":"評論","resources":"資源","more":"更多","user_SEO_official_title1":"{username} 官方帳號 | TikTok","user_SEO_title1":"{username} | TikTok","hashtag_SEO_title1":"TikTok 上的 {hashtag} 影片","music_SEO_title1":"{authorName} 創作的 {musicName} | TikTok 熱門歌曲","video_SEO_title1":"TikTok 上的 {userText}","TikTok i18n title":"TikTok","accessibilityLabels_forYou_nav_tiktok_btn":"前往 TikTok 的 [為您推薦] 動態","accessibilityLabels_link_userProfile":"{username} 的個人資料","desktop_logged_in_profile":"關注中的帳號","feed_caption_see_more":"查看更多","see_less":"查看更少","sidenav_follow_hint":"您關注的帳號將出現在這裡 ","for_you":"為您推薦","nonpersonalizedFeeds_LIVEfeed_navP_menuLink":"熱門","Open App":"開啟應用程式","ttlive_webCoinEntry_forYouFeed_tooltip":"立即儲值，相較於應用程式還可省下約 25% 的費用","Add TikTok to your home screen?":"新增 TikTok 至您的主畫面？","Use a shortcut to easily access TikTok from your phone.":"使用快速鍵從手機輕鬆存取 TikTok。","Add TikTok to your home screen":"新增 TikTok 至您的主畫面","Not now":"暫時不要","seo_userPage_related_release":"放開以顯示更多相關影片","seo_userPage_related_pullUp":"向上拉以顯示更多相關影片","ssa_webpop_header":"在 TikTok Lite 上試用更多功能","optimize_web_full_app_header":"在應用程式上獲得完整體驗","Open TikTok":"開啟 TikTok","webapp_bottomsheet_downloadcta_main_title":"在應用程式上獲得完整體驗","webapp_bottomsheet_downloadcta_main_desc":"關注您最愛的帳號、探索新話題，並創作您的影片","ssa_webpop_panel_like_header":"在 TikTok Lite 上對更多影片按讚","ssa_webpop_panel_like_body":"建立 TikTok 帳號並對更多影片按讚","ssa_webpop_panel_cmt_header":"在 TikTok Lite 上加入對話","ssa_webpop_panel_cmt_body":"使用 TikTok 帳號查看與新增留言","ssa_webpop_panel_follow_header":"在 TikTok Lite 上關注您喜愛的創作者","ssa_webpop_panel_follow_body":"建立或登入帳號以關注創作者","ssa_webpop_panel_try_header":"試試 TikTok Lite","ssa_webpop_panel_try_body":"使用應用程式創作您自己的影片","ssa_webpop_body_camera":"錄製影片、關注您喜愛的帳號以及探索新熱門話題","optimize_web_popup_like_header":"對更多其他創作者的影片按讚","optimize_web_popup_like_body":"使用應用程式或登入以對影片按讚。","optimize_web_popup_comment_header":"關注對話","follow_login_panel_h1":"關注你最喜愛的創作者","optimize_web_popup_follow_body":"使用應用程式或登入以關注創作者。","optimize_web_popup_shoot_header":"獲得完整錄製體驗","optimize_web_popup_shoot_body":"使用應用程式錄製影片。","optimize_web_full_app_body":"在應用程式中觀看更多影片，享受更佳的功能","search_video":"影片","messages":"訊息","optimize_web_hashtag_body":"在應用程式上觀看更多 {hashtag_name} 影片，並探索最新熱門話題。","optimize_web_sound_body":"在應用程式中探索我們的音樂庫，並享有更完整的創意體驗。","optimize_web_trending_creator_body":"在應用程式中探索更多熱門創作者。","ssa_webpop_body_normal":"下載輕量且執行速度較快的應用程式，以創作影片、關注您喜愛的帳號，以及探索新影片","ssa_webpop_body_filesize":"這個應用程式只有 8.5 MB，執行速度更快！創作影片、關注您喜愛的帳號，以及探索新熱門話題","like_dialogue_h1":"對所有喜歡的影片按讚","like_dialogue_h2":"使用 TikTok 帳號輕鬆對影片按讚","comment_dialogue_title":"加入對話","comment_dialogue_sub":"使用 TikTok 帳號查看與新增留言","inbox":"收信匣","webapp_bottomsheet_downloadcta_creator_title":"{creator_name} 已在使用 TikTok","ssa_webpop_profile_header":"在 TikTok Lite 上認識更多創作者","ssa_webpop_profile_body":"下載輕量且執行速度更快的應用程式，與您喜愛的創作者交流並探索新的影片","ssa_webpop_hashtag_header":"TikTok Lite 上的更多 {hashtag} 影片","webapp_bottomsheet_downloadcta_hashtag_title":"TikTok 上的更多 {hashtag_name} 影片","ssa_webpop_hashtag_body":"在應用程式上觀看更多 {hashtag} 影片，並探索最新熱門主題","ssa_webpop_sounds_header":"在 TikTok Lite 上查看更多音樂","webapp_bottomsheet_downloadcta_audio_title":"查看 TikTok 上的更多音樂","webapp_bottomsheet_downloadcta_audio_desc":"在應用程式上探索我們的音樂庫，並獲得完整 TikTok 創意體驗","ssa_webpop_sounds_body":"下載輕量且執行速度更快的應用程式，並探索我們的音樂庫","ttep_manage_effect_detail_page_qrcode":"QR 碼","seo_userpage_suggest_acct":"推薦帳號","Inbox_All":"所有活動","Inbox_Likes":"按讚","Inbox_Comments":"評論","Inbox_Mentions":"提及與標記","common_notification_unlogged_text":"訊息和通知將顯示在此處","Copied":"複製成功","Share to":"分享到","copy_link":"複製連結","Close":"關閉","fixedcaption_toast_showcaption":"字幕已顯示","fixedcaption_sharepanel_button_hide":"隱藏字幕","fixedcaption_sharepanel_button_turnon":"開啟字幕","fixedcaption_sharepanel_button_turnoff":"關閉字幕","fixedcaption_toast_hidecaption":"字幕已隱藏","webapp_profile":"個人資料","Get":"取得","Video":"影片","inbox_follow_failed_banned":"由於多次違反《社群自律公約》，該帳號已被禁用","inbox_follow_failed_noconnection":"無法關注，請嘗試檢查您的網路連線","inbox_follow_failed_other":"無法關注帳號","pcWeb_reposted_toast":"已轉發","pcWeb_repostRemoved_toast":"已移除轉發","webapp_forYoufeed_videoRemoved_toast":"我們已從您的動態中移除此影片","engagement":"互動","pcWeb_guestLogin_without":"不登入繼續","pcWeb_guestLogin_withoutSignup":"不註冊繼續","pcWeb_guestLogin_guest":"以訪客身分繼續","web_discover":"發現","webapp_home":"首頁","webapp_inbox":"收信匣","link_close_popup":"關閉","ad_not_support":"廣告影片暫不支援此功能","bc_likes":"獲讚數","bc_comments":"評論","bc_shares":"分享","seo_aggre_see_more":"展開","system_notifications_inbox_channel_name_accountupdates":"帳號更新","system_notifications_inbox_channel_name_tiktok":"TikTok","system_notifications_inbox_channel_name_creatormonetization":"創作者營利","system_notifications_inbox_channel_name_adssupport":"廣告贊助","system_notifications_inbox_channel_name_businessaccount":"企業帳號","promote_title":"宣傳","TTweb_inbox_systemNotificationchannel_brandActivity_name":"品牌活動","TTweb_inbox_systemNotificationchannel_tiktokPlatform_name":"TikTok 平台","TTweb_inbox_systemNotificationchannel_adsFeedback_name":"廣告意見回饋","TTweb_inbox_systemNotificationchannel_missions_name":"任務","system_notifications_inbox_channel_name_transactionassistant":"交易助理","TTweb_inbox_systemNotificationchannel_creatorProgram_name":"創作者計劃","system_notifications_inbox_channel_name_live":"直播","TTweb_inbox_systemNotificationchannel_screenTime_name":"螢幕時間","TTweb_inbox_systemNotificationchannel_mlbb_name":"MLBB","TTweb_inbox_systemNotificationchannel_series_name":"系列","TTweb_inbox_systemNotificationchannel_creatorMarketplace_name":"Creator Marketplace","TTweb_inbox_systemNotificationchannel_effects_name":"特效","search_top":"熱門","seo_aggre_metadesc1":"{views} 則貼文。探索 TikTok 上與 {keywords} 相關的影片。","seo_aggre_metadesc2":"查看與 {related_search_keywords} 相關的更多影片。","SERP discover title":"發現 TikTok 上的新影片","TikTok i18n keywords":"TikTok, ティックトック, tik tok, tick tock, tic tok, tic toc, tictok, тик ток, ticktock","SEO_discover_title":"探索熱門影片 | TikTok","SEO_discover_desc":"在您的裝置或網路上，加入這個成長最快速且擁有數百萬觀眾的影片應用程式。下載 TikTok 即可探索新的創作者、搜尋受歡迎的主題標籤，並觀看時下最熱門的影片。","SEO_following_title":"關注中 - 觀看您關注的創作者所發佈的影片 | TikTok","SEO_following_desc":"在 TikTok 上開始。在您的裝置或網路上，尋找並關注受歡迎的 TikTok 創作者。加入這個發展最快速且擁有數百萬名觀眾的影片應用程式。立即下載 TikTok，開始行動。","TikTok Trends":"TikTok 熱門內容","TikTok Trending":"TikTok 熱門內容","Trending Videos":"流行影片","Trending Hashtags":"流行的主題標籤","SEO_trending_title":"觀看為您推薦的熱門影片 | TikTok","SEO_trending_desc":"在 TikTok 上開始。加入數百萬觀眾的行列，在 TikTok 上探索大量內容和創作者 - 透過網路或行動裝置皆可存取。","seo_serp_hashtag_title":"#{hashtag} | TikTok","seo_serp_hashtag_desc":"{tagText} |","seo_serp_hashtag_desc1":"在 TikTok 上觀看關於 #{hashtag} 的最新影片。","err_tag":"找不到此話題標籤，請造訪 TikTok 以發現更多熱門創作者、話題標籤和音樂。","TikTok i18n keywords for home":"tik tok, tick tock, tic tok, tic toc, tictok, тик ток, ticktock","SEO_homepage_title":"TikTok - Make Your Day","SEO_homepage_desc":"TikTok - 熱門影片盡在此處。透過裝置或網路，觀眾可以觀看及探索數百萬支個人化短片。立即下載應用程式，開始行動。","seo_serp_music_title":"{authorName} - {musicName} | TikTok","seo_serp_music_desc3":"{authorName} 建立的 {musicName}。","seo_serp_music_desc":"{authorName} 建立的 {musicName} 歌曲。","seo_serp_music_desc1":"{video_count} 部影片。","seo_serp_music_desc2":"在 TikTok 上觀看關於 {musicName} 的最新影片。","err_sound":"找不到此音樂，請造訪 TikTok 以發現更多熱門創作者、話題標籤和音效。","err_sound_copy":"您所在地區沒有此音樂的版權，請造訪 TikTok 以發現更多熱門創作者、話題標籤和音樂。","SEO_qa_title_1":"{question} | TikTok 問答","SEO_qa_desc_1":"「{question}」問題有 {number} 則回答。查看大家的回覆。","SEO_search_title":"在 TikTok 上搜尋{searchkeywords} | TikTok 搜尋","SEO_search_desc":"在 TikTok 上觀看專為您訂製的 {searchkeywords} 影片。所有人都能在這裡找到感興趣的內容。下載應用程式，發現新的創作者和熱門趨勢。","music_SEO_desc3":"{musicName} 是 {authorName} 的熱門歌曲 | 使用 {musicName} 歌曲建立您的 TikTok 影片，探索新創作者與熱門創作者所創作的 {posts} 段影片。","seo_serp_user2_title":"{username} 官方帳號 | TikTok","seo_serp_user1_title":"{username} | TikTok","seo_serp_user_desc":"TikTok 上的 {username} |","seo_serp_user_desc1":"{heart} 個按讚數。","seo_serp_user_desc2":"{follower} 名粉絲。","seo_serp_user_desc3":"觀看 {username} 的最新影片。","err_user":"找不到此帳號，請造訪 TikTok 以發現更多熱門創作者、話題標籤和音樂。","err_user_private":"此帳號為私密帳號，請關注此帳號以查看其影片，或造訪 TikTok 發現更多新的創作者。","SEO_Recharge_title":"TikTok 金幣：購買並儲值金幣即可贈送禮物 | TikTok","SEO_Recharge_desc":"在這裡取得金幣，以發送禮物給 TikTok 直播主！你可使用更多付款選項，以更划算的價格購買或儲值 TikTok 金幣，也可以自訂儲值金額。","seo_serp_expansion_title":"{expansion_keywords}｜TikTok 搜尋","seo_serp_expansion_num1":"在 TikTok 上發現與 {expansion_keywords} 有關的影片。","SEO_live_title":"{username} 正在直播 | TikTok","SEO_live_discover_title":"TikTok 直播 | TikTok","SEO_live_discover_desc":"開始直播、觀看直播影片、探索熱門 TikTok 創作者的直播串流等。","SEO_live_desc":"在 TikTok 上觀看 {username} 的直播影片！觀看、關注和發現 {username} 的最新內容。","SEO_live_desc2":"即將舉行的直播：{event_name}。請在 TikTok 上觀看 {username} 的直播影片！觀看、關注及探索 {username} 的最新內容。","playlist_sharing_metatitle":"{playlist_name} | TikTok 音樂播放清單","playlist_sharing_metadescription":"看看這份 TikTok 音樂播放清單！{playlist_name} #TikTok","SEO_foryou_animals_title":"動物 | TikTok","SEO_foryou_animals_desc":"TikTok 上有關 #動物的所有內容。#保護動物。最精彩的 TikTok 動物影片。TikTok 寵物影片。TikTok 小狗影片。TikTok 貓咪影片。","SEO_foryou_beauty_title":"美容 | TikTok","SEO_foryou_beauty_desc":"在 TikTok 上定義自己的 #美麗。日常化妝。美容妙招。美容 TikToker。","SEO_foryou_comedy_title":"喜劇 | TikTok","SEO_foryou_comedy_desc":"在 TikTok 上觀看及發佈原創 #喜劇影片。喜劇挑戰。有趣的 TikTok 影片。喜劇 TikToker。","SEO_foryou_dance_title":"舞蹈 | TikTok","SEO_foryou_dance_desc":"與 TikTok 社群成員一起 #跳舞。最精彩的 TikTok 舞蹈。熱門 TikTok 舞蹈。TikTok 跳舞影片。TikTok 舞者。","SEO_foryou_food_title":"美食 | TikTok","SEO_foryou_food_desc":"需要 #美食靈感嗎？TikTok 上最精彩的美食影片。網路爆紅美食。TikTok 食譜。美食帳號。","SEO_foryou_gaming_title":"遊戲 | TikTok","SEO_foryou_gaming_desc":"觀看 TikTok 上的 #遊戲影片。TikTok 上的遊戲玩家。TikTok 遊戲。TikTok 遊戲玩家。TikTok 遊戲帳號。","SEO_foryou_sports_title":"運動 | TikTok","SEO_foryou_sports_desc":"今天誰要來做一些 #運動？在 TikTok 上健身。最精彩的健身影片。有趣的 TikTok 健身影片。","share_live_event_title":"{Event Topic} | LIVE 直播活動","share_live_event_desc":"有 {number} 個人已報名參加這項活動。看看發生了什麼事！","playlist_share_title":"{username} 建立的播放清單 {Playlist_name}","playlist_share_desc":"馬上體驗精選影片清單，並在 TikTok 上探索更多影片！","share_effect_title":"TikTok 上的 {sticker_name}","share_sticker_desc":"{num, plural, other {有 {number} 支影片使用了這個貼圖！{sticker_desc}}}","share_sticker_preset":"快來看看我在 TikTok 上使用的這個貼圖！","basicPoi_task2_metaTdk_title":" {poiName} 的{subcategoryName} | TikTok","basicPoi_task2_metaTdk_desc":"{subcategoryName} (位於 {poiName}， {upperLevelPoiName})。{views} 部影片。在 TikTok 上探索 {poiName} 與 {subcategoryName} 相關的影片。了解更多關於 {subtitle1}、{subtitle2}、{subtitle3}與 {subtitle4} 的資訊。","basicPoi_task2_metaTdk_keyword":"{keywords}，{relatedSearch}","basicPoi_metaTdk_title":"{poiName} | TikTok","basicPoi_metaTdk_regional_desc":"{videoCount} 部影片，涵蓋內容包括 {regionalPoiName}的待辦事項、{regionalPoiName}的美食佳飲，{regionalPoiName}的觀光，{regionalPoiName}的購物，{regionalPoiName}的公園，{regionalPoiName}的停留地點。在 TikTok 上探索{regionalPoiName}相關資訊。","basicPoi_metaTdk_store_desc":"{poiName}，{l1PoiName}。在 TikTok 上探索 {l1PoiName} {poiName} 的 {videoCount} 部影片。","basicPoi_metaTdk_keyword":"{poiName}，{relatedKeyword}","basicPoi_metaTdk_storeSite":"{poiName}，{currentRegionalPoiName}，{currentL1RegionalPoiName}，{ttTypeNameMedium}，{ttTypeNameSuper}，{ttTypeNameTiny}","poidetails_tiktokplaces":"TikTok Places","poidetails_location_name_placehldtwo":"在 TikTok 上探索 { }","shared_collection_other_apps_title":"%s 建立的珍藏集 %1$s","shared_collection_other_apps_description":"觀看此精選珍藏集 %1$s 中的精彩影片","pm_mt_ls_download_button":"下載 LIVE Studio","seo_kep_discoverProductsRelated":"在 TikTok 發現與 {s_keywords} 有關的產品。看看更多有關於 {s_relatedSearch1}、{s_relatedSearch2}、{s_relatedSearch3}、 {s_relatedSearch4}、{s_relatedSearch5}、{s_relatedSearch6} 的產品。","TikTok | Make Your Day":"TikTok | 度過愉快的一天","serp_following_title":"觀看你在 TikTok 上關注的創作者所發佈的影片","serp_following_desc":"關注你最喜愛的創作者並觀看他們的最新影片，遁入 TikTok 的世界。","seo_serp_videotxt_desc1":"{likes} 個讚，","seo_serp_videotxt_desc2":"{comments} 則評論。","seo_serp_videotxt_desc3":"來自 {username} 的 TikTok 影片：「{videoText}」。","seo_serp_searchQuery_desc":"{searchQueryAfterView}。","seo_serp_musicName_desc":"{musicName}。","serp_videoText_searchQuery_title":"{videoText} | {searchQueryAfterView} | TikTok","serp_videoText_searchQuery_title2":"{username} 有關 {searchQueryAfterView} 的影片 | TikTok","seo_serp_videotxt_title":"{videoText} | TikTok","seo_serp_videotxt_title2":"{username} 的影片使用了 {musicName} | TikTok","err_vid_geo":"您所在地區無法使用這段影片，請造訪 TikTok 以發現更多熱門影片。","err_vid":"無法觀看這段影片，請造訪 TikTok 以發現更多熱門影片。","subVideo_outApp_sharing_title":"{creator} 在 TikTok 上發佈的僅供訂閱者觀看的影片","basicPoi_toDoList_region":"{regionalPoiName}推薦活動","basicPoi_toDoList":"推薦活動","seo_popular_sightseeing":"{num, plural, other {{poiName} 的 {num} 個熱門觀光景點}}","basicPoi_sightSeeing":"{regionalPoiName}觀光","basicPoi_outdoorActivities":"{regionalPoiName}戶外活動","basicPoi_nightLife":"{regionalPoiName}夜生活","basicPoi_familyFriendly":"{regionalPoiName}家庭活動","basicPoi_bestRestaurant_region":"{regionalPoiName}最佳餐廳","basicPoi_foodNDrinks":"美食佳飲","seo_popular_restaurant":"{num, plural, other {{poiName} 的 {num} 家熱門餐廳}}","basicPoi_brunchRestaurants":"{regionalPoiName}最佳早午餐店","basicPoi_fineDining":"{regionalPoiName}最佳精緻餐廳","basicPoi_seaFood":"{regionalPoiName}最佳海鮮餐廳","basicPoi_veganRestaurants":"{regionalPoiName}最佳素食餐廳","basicPoi_hotels_region":"{regionalPoiName}飯店","basicPoi_hotels":"飯店","seo_popular_hotel":"{num, plural, other {{poiName} 的 {num} 家熱門飯店}}","basicPoi_downtownHotels":"{regionalPoiName}市區飯店","basicPoi_petFriendly":"{regionalPoiName}寵物友善飯店","basicPoi_airbnbs":"{regionalPoiName} Airbnb","basicPoi_luxuryHotels":"{regionalPoiName}豪華飯店","basicPoi_parks_region":"{regionalPoiName}公園","basicPoi_parks":"公園","seo_popular_park":"{num, plural, other {{poiName} 的 {num} 座熱門公園}}","basicPoi_amusementParks":"{regionalPoiName}遊樂園","basicPoi_dogParks":"{regionalPoiName}遛狗公園","basicPoi_skateParks":"{regionalPoiName}滑板公園","basicPoi_indoorParks":"{regionalPoiName}室內公園","basicPoi_shopping_region":"{regionalPoiName}購物","basicPoi_shopping":"購物","seo_popular_shoppingMall":"{num, plural, other {{poiName} 的 {num} 家熱門購物中心}}","basicPoi_shoppingMalls":"{regionalPoiName}購物中心","basicPoi_downtownShopping":"{regionalPoiName}市區購物","basicPoi_vintageShopping":"{regionalPoiName}復古商品購物","basicPoi_giftShops":"{regionalPoiName}禮品店","unblock":"解除封鎖","send_message":"傳送訊息","load_error":"無法載入此頁面，請稍後再試。"}},"seo.abtest":{"canonical":"https:\u002F\u002Fwww.tiktok.com\u002F","pageId":"194363291717010201","vidList":["73041426"],"parameters":{"add_info_card_seo":{"vid":"v2"},"aigc_overall_long_term":{"vid":"v1"},"bot_cost_optimize":{"simplify_link":false,"simplify_video_desc":false},"seo_generic_exposure_capacity":{"count":50,"vid":"v4"}}},"wallet.recharge.show-get-coins-entrance":0,"webapp.a-b":{"b_c":"0"}}}`;
// const apiDomains = `{"kind":"us","captcha":"//verification.tiktokw.us","imApi":"https://im-api.tiktok.com","imFrontier":"wss://im-ws.tiktok.com/ws/v2","mTApi":"https://www.tiktok.com","rootApi":"https://gyp.mytiktok.com","secSDK":"","slardar":"mon16-normal-useast5.tiktokv.us","starling":"https://starling.tiktokv.us","tea":"https://gyp.mytiktok.com","teaChannel":"va","teaChannelType":"ttp","libraWebSDK":"https://libraweb.tiktokw.us","webcastApi":"https://webcast.us.tiktok.com","webcastRootApi":"https://webcast.us.tiktok.com","pipoApi":"https://fp.pipopayment.us","tcc":"https://lf16-config.tiktokcdn-us.com/obj/tcc-config-web-tx/","locationApi":"https://location.tiktokw.us"}`;
// const scriptManager = `{"imports":{"acrawler":"https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/webmssdk/2.0.0.295/webmssdk.js","secsdk_sg":"https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/secsdk/secsdk-lastest.umd.js","secsdk_va":"https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/secsdk/secsdk-lastest.umd.js","secsdk_ttp":"https://lf16-cdn-tos.tiktokcdn-us.com/obj/static-tx/secsdk/secsdk-lastest.umd.js"}}`;
// const serviceRegion = `{"vregion":"US-TTP","vgeo":"VGeo-US"}`;
// const slardarConfig = `{"bid":"tiktok_webapp_mobile","sdkUrl":"https://lf16-cdn-tos.tiktokcdn-us.com/obj/static-tx/slardar/fe/sdk-web/browser.oci.js","slardarClient":"SlardarClient","disableInit":true}`;
// const tempBody = `<!doctype html>
// <html lang="en">
//     <head>
//         <meta charset="UTF-8"/>
//         <meta name="viewport" content="width=device-width,initial-scale=1"/>
//         <title>TikTok - Make Your Day</title>
//         <script src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok_privacy_protection_framework/loader/2.0.0.215/index.js" crossorigin="anonymous" async data-business="serverless.tiktok.mobile" data-sw="/sw.js" data-env="production" data-region="us-ttp"></script>
//         <script type="application/json" id="script-manager">${scriptManager.replace(/\n/g, "")}</script>
//         <meta name="pumbaa-ctx" content="login=0,ftc=0"/>
//         <script id="api-domains" type="application/json">${apiDomains.replace(/\n/g, "")}</script>
//         <script id="service-region" type="application/json">${serviceRegion.replace(/\n/g, "")}</script>
//         <link rel="preconnect" href="https://lf16-tiktok-web.tiktokcdn-us.com">
//         <link rel="preload" as="script" href="https://lf16-cdn-tos.tiktokcdn-us.com/obj/static-tx/tiktok-infra/csp/sdk-pre/slardar.web.pre.js">
//         <script id="slardar-config" type="application/json">${slardarConfig.replace(/\n/g, "")}</script>
//         <script src="https://lf16-cdn-tos.tiktokcdn-us.com/obj/static-tx/tiktok-infra/csp/sdk-pre/slardar.web.pre.js" id="script_byted_acrawler"></script>
//         <link data-chunk="webapp-mobile" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/runtime.273a83fe0b46d4bcc7ca.js">
//         <link data-chunk="webapp-mobile" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/multi-cluster-domain.913c3385ae1e76902783.js">
//         <link data-chunk="webapp-mobile" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-tux-h5.e95fd5757c4afeefb1ae.js">
//         <link data-chunk="webapp-mobile" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-596046b7.5914ab210ebcd1ba57bb.js">
//         <link data-chunk="webapp-mobile" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-d801507b.3bd62c1723670599a962.js">
//         <link data-chunk="webapp-mobile" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-ea8a6886.28a95eadff2352c009f9.js">
//         <link data-chunk="webapp-mobile" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-b3a903c8.95c06050103948ba0362.js">
//         <link data-chunk="webapp-mobile" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-7842561a.d59dff4ebbae9dc9f1cf.js">
//         <link data-chunk="webapp-mobile" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-74d9c565.037789b3ae9a546f5124.js">
//         <link data-chunk="webapp-mobile" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/vendor.dacb69790306e4d2beca.js">
//         <link data-chunk="webapp-mobile" rel="preload" as="script" href="http://127.0.0.1:5555/webapp-mobile.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-eb873fff.2fd34d1ecf9c85d75c4a.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-04a93705.abe36ab023afda689845.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-cdf20b09.d909f377e848702ec199.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-6801073e.357123b5be6717dfc275.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-82495f79.315ab84a2e2fb70aeed8.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-d98dc4ed.dc8e67b22338a075446a.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-ca20f4a9.a5d7896a36cfc628a516.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-5a799721.05845ed2c552fe80e7da.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-9f81b684.d953b9d8063d3a838cb6.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-58cded4b.f487695d6e73eb4d215b.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-ed7c8e09.0579cb6bac7af6b92b5b.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-2d6263f2.cdb8e1a709fba6b19cb9.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-754771ea.ccccd73f3932d439a2a0.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-aee5bb16.df1ec3fe2114c122c9eb.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/5515.e7e00e990748df628a14.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/9687.14455dc9a41aa21cc350.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/574.108bdd31e06e1590b3d3.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/7169.cca38fe089080ca4d5cf.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/6620.21390da995fa62d8aa6f.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/5633.3bfc5a29ea8cede27aab.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/3551.6c8d6b7b7828db4157da.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/5412.422787da7620c889aae1.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/7905.761f8194948befbce353.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/289.168f6373acd0025596f9.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/7659.7a0b1eb82a1eb07da333.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/4195.c7da0aa763747ffa99b9.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/822.e8844dc392a50a3008c8.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/5495.6fb39ac12465eed88200.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/6075.f22ef45be60d1df643fc.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/video-swiper.b5a18e50d0f1a862677b.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/8577.e6b15f026ef6da317323.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/6192.3a813d99dfa924d67116.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/3820.05cb283082e92200be62.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/6092.12c21ac1898ce5a42605.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/740.f432156cafd45da5c80d.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/6401.3534503f41deb3096793.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/82.d77b4b7296aa68df4fdc.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/6119.24240953d8d1da6f5790.js">
//         <link data-chunk="mobile-foryou" rel="preload" as="script" href="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/mobile-foryou.7293081cd64e87d4d7c6.js">
//         <link rel="manifest" href="/manifest.json">
//     </head>
//     <body style="margin: 0">
//         <div id="app" style="min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-start" data-csr="1">
//             <style data-emotion="css-global 1t09l6f">
//                 *,*::before,*::after {
//                     box-sizing: border-box;
//                     -webkit-user-select: unset;
//                     -moz-user-select: unset;
//                     -ms-user-select: unset;
//                     user-select: unset;
//                 }

//                 body,h1,h2,h3,h4,p,figure,blockquote,dl,dd {
//                     margin: 0;
//                 }

//                 ul[role="list"],ol[role="list"] {
//                     list-style: none;
//                 }

//                 html:focus-within {
//                     scroll-behavior: smooth;
//                 }

//                 body {
//                     min-height: 100vh;
//                     text-rendering: optimizeSpeed;
//                     line-height: 1.5;
//                 }

//                 a:not([class]) {
//                     text-decoration-skip-ink: auto;
//                 }

//                 img,picture {
//                     max-width: 100%;
//                     display: block;
//                 }

//                 input,button,textarea,select {
//                     font: inherit;
//                 }

//                 @media (prefers-reduced-motion: reduce) {
//                     html:focus-within {
//                         scroll-behavior: auto;
//                     }

//                     *,*::before,*::after {
//                         -webkit-animation-duration: 0.01ms!important;
//                         animation-duration: 0.01ms!important;
//                         -webkit-animation-iteration-count: 1!important;
//                         animation-iteration-count: 1!important;
//                         transition-duration: 0.01ms!important;
//                         scroll-behavior: auto!important;
//                     }
//                 }

//                 @supports (-webkit-touch-callout: none) {
//                     body {
//                         min-height: -webkit-fill-available;
//                     }
//                 }

//                 body {
//                     font-size: 14px;
//                     color: rgba(22, 24, 35, 1);
//                     background-color: rgba(255, 255, 255, 1);
//                     overscroll-behavior: contain;
//                     direction: ltr;
//                     -webkit-font-smoothing: antialiased;
//                 }

//                 body a {
//                     color: rgba(22, 24, 35, 1);
//                     -webkit-transition: color 250ms;
//                     transition: color 250ms;
//                     -webkit-text-decoration: none;
//                     text-decoration: none;
//                     cursor: pointer;
//                 }

//                 body a:where(.tw-only),body:where(.tw-only) a {
//                     -webkit-transition: all 0s ease 0s;
//                     transition: all 0s ease 0s;
//                 }

//                 body a:visited {
//                     color: rgba(22, 24, 35, 1);
//                 }

//                 body a:where(.tw-only):visited,body:where(.tw-only) a:visited {
//                     color: inherit;
//                 }

//                 body a:hover {
//                     color: rgba(22, 24, 35, 1);
//                     -webkit-text-decoration: underline;
//                     text-decoration: underline;
//                 }

//                 body a:where(.tw-only):hover,body:where(.tw-only) a:hover {
//                     color: inherit;
//                     -webkit-text-decoration: inherit;
//                     text-decoration: inherit;
//                 }

//                 body a:active {
//                     color: rgba(22, 24, 35, 1);
//                 }

//                 body a:where(.tw-only):active,body:where(.tw-only) a:active {
//                     color: inherit;
//                 }

//                 body a:focus {
//                     color: rgba(22, 24, 35, 1);
//                 }

//                 body a:where(.tw-only):focus,body:where(.tw-only) a:focus {
//                     color: inherit;
//                 }

//                 body input::-ms-clear {
//                     display: none;
//                     width: 0;
//                     height: 0;
//                 }

//                 body input::-ms-reveal {
//                     display: none;
//                     width: 0;
//                     height: 0;
//                 }

//                 body input::-webkit-search-decoration,body input::-webkit-search-cancel-button,body input::-webkit-search-results-button,body input::-webkit-search-results-decoration {
//                     display: none;
//                 }

//                 body.hidden {
//                     overflow: hidden;
//                     display: block;
//                 }

//                 body strong {
//                     font-weight: 700;
//                 }
//             </style>
//             <style data-emotion="css 1dmviiw-DivBgContainer">
//                 .css-1dmviiw-DivBgContainer {
//                     position: fixed;
//                     left: 0;
//                     right: 0;
//                     top: 0;
//                     bottom: 0;
//                     background-color: #000;
//                 }
//             </style>
//             <div class="css-1dmviiw-DivBgContainer e1vq1upi2"></div>
//             <style data-emotion="css 1cyh1ox-FooterWrapper">
//                 .css-1cyh1ox-FooterWrapper {
//                     position: fixed;
//                     bottom: 0;
//                     left: 0;
//                     right: 0;
//                 }
//             </style>
//             <div class="css-1cyh1ox-FooterWrapper e1vq1upi0">
//                 <style data-emotion="css 11qhbzg-FooterContainer">
//                     .css-11qhbzg-FooterContainer {
//                         display: grid;
//                         grid-template-columns: 20% 20% 20% 20% 20%;
//                         height: 49px;
//                         background-color: #000;
//                     }

//                     @media screen and (min-width: 800px) {
//                         .css-11qhbzg-FooterContainer {
//                             height:56px;
//                         }
//                     }

//                     @media screen and (min-width: 1150px) {
//                         .css-11qhbzg-FooterContainer {
//                             height:64px;
//                         }
//                     }

//                     @media screen and (min-width: 1440px) {
//                         .css-11qhbzg-FooterContainer {
//                             height:72px;
//                         }
//                     }

//                     @media screen and (max-width: 800px) and (min-aspect-ratio: 640/320) {
//                         .css-11qhbzg-FooterContainer {
//                             height:32px;
//                         }
//                     }

//                     @media screen and (min-width: 1920px) and (min-aspect-ratio: 16/9) {
//                         .css-11qhbzg-FooterContainer {
//                             height:96px;
//                             padding: 0 100px;
//                         }
//                     }

//                     @media screen and (min-width: 1920px) and (min-aspect-ratio: 8/3) {
//                         .css-11qhbzg-FooterContainer {
//                             height:80px;
//                             padding: 0 100px;
//                         }
//                     }

//                     @media screen and (max-height: 640px) {
//                         .css-11qhbzg-FooterContainer {
//                             height:42px;
//                         }
//                     }
//                 </style>
//                 <footer class="css-11qhbzg-FooterContainer e70cq5v0">
//                     <style data-emotion="css 1mmopfp-DivTabContainer">
//                         .css-1mmopfp-DivTabContainer {
//                             display: -webkit-box;
//                             display: -webkit-flex;
//                             display: -ms-flexbox;
//                             display: flex;
//                             -webkit-flex-direction: column;
//                             -ms-flex-direction: column;
//                             flex-direction: column;
//                             -webkit-align-items: center;
//                             -webkit-box-align: center;
//                             -ms-flex-align: center;
//                             align-items: center;
//                         }

//                         @media screen and (min-width: 1440px) {
//                             .css-1mmopfp-DivTabContainer {
//                                 -webkit-flex:1;
//                                 -ms-flex: 1;
//                                 flex: 1;
//                                 padding: 0 12px;
//                             }
//                         }
//                     </style>
//                     <div class="css-1mmopfp-DivTabContainer e70cq5v2">
//                         <style data-emotion="css 10jswu3-StyledFooterItemAnchor">
//                             .css-10jswu3-StyledFooterItemAnchor {
//                                 display: -webkit-box;
//                                 display: -webkit-flex;
//                                 display: -ms-flexbox;
//                                 display: flex;
//                                 position: relative;
//                                 -webkit-box-pack: center;
//                                 -ms-flex-pack: center;
//                                 -webkit-justify-content: center;
//                                 justify-content: center;
//                                 -webkit-align-items: center;
//                                 -webkit-box-align: center;
//                                 -ms-flex-align: center;
//                                 align-items: center;
//                                 padding-bottom: 10px;
//                                 padding-left: 8px;
//                                 padding-right: 8px;
//                                 padding-top: 2px;
//                             }

//                             .css-10jswu3-StyledFooterItemAnchor svg {
//                                 width: 32px;
//                                 height: 32px;
//                             }

//                             @media screen and (min-width: 800px) {
//                                 .css-10jswu3-StyledFooterItemAnchor {
//                                     padding:8px;
//                                 }

//                                 .css-10jswu3-StyledFooterItemAnchor svg {
//                                     width: 40px;
//                                     height: 40px;
//                                 }
//                             }

//                             @media screen and (min-width: 1150px) {
//                                 .css-10jswu3-StyledFooterItemAnchor {
//                                     padding:12px;
//                                 }

//                                 .css-10jswu3-StyledFooterItemAnchor svg {
//                                     width: 40px;
//                                     height: 40px;
//                                 }
//                             }

//                             @media screen and (min-width: 1440px) {
//                                 .css-10jswu3-StyledFooterItemAnchor {
//                                     padding:12px;
//                                 }

//                                 .css-10jswu3-StyledFooterItemAnchor svg {
//                                     width: 48px;
//                                     height: 48px;
//                                 }
//                             }

//                             @media screen and (max-width: 800px) and (min-aspect-ratio: 640/320) {
//                                 .css-10jswu3-StyledFooterItemAnchor {
//                                     padding:4px;
//                                 }

//                                 .css-10jswu3-StyledFooterItemAnchor svg {
//                                     width: 24px;
//                                     height: 24px;
//                                 }
//                             }

//                             @media screen and (min-width: 1920px) and (min-aspect-ratio: 16/9) {
//                                 .css-10jswu3-StyledFooterItemAnchor {
//                                     -webkit-flex:1;
//                                     -ms-flex: 1;
//                                     flex: 1;
//                                     padding: 12px;
//                                 }

//                                 .css-10jswu3-StyledFooterItemAnchor svg {
//                                     width: 72px;
//                                     height: 72px;
//                                 }
//                             }

//                             @media screen and (min-width: 1920px) and (min-aspect-ratio: 8/3) {
//                                 .css-10jswu3-StyledFooterItemAnchor {
//                                     -webkit-flex:1;
//                                     -ms-flex: 1;
//                                     flex: 1;
//                                     padding: 4px;
//                                 }

//                                 .css-10jswu3-StyledFooterItemAnchor svg {
//                                     width: 72px;
//                                     height: 72px;
//                                 }
//                             }

//                             @media screen and (max-height: 640px) {
//                                 .css-10jswu3-StyledFooterItemAnchor {
//                                     padding-top:0px;
//                                 }
//                             }
//                         </style>
//                         <a class="css-10jswu3-StyledFooterItemAnchor e1vq1upi1">
//                             <svg width="1em" data-e2e="" height="1em" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg">
//                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z"></path>
//                             </svg>
//                             <style data-emotion="css 1rayyec-DivText">
//                                 .css-1rayyec-DivText {
//                                     position: absolute;
//                                     font-weight: 600;
//                                     font-size: 10px;
//                                     color: #fff;
//                                     text-align: center;
//                                     bottom: 4px;
//                                 }
//                             </style>
//                             <div color="#fff" opacity="" class="css-1rayyec-DivText e70cq5v3"></div>
//                         </a>
//                     </div>
//                     <div class="css-1mmopfp-DivTabContainer e70cq5v2">
//                         <a class="css-10jswu3-StyledFooterItemAnchor e1vq1upi1">
//                             <svg style="fill-opacity:0.75" width="1em" data-e2e="" height="1em" viewBox="0 0 36 36" fill="#fff" xmlns="http://www.w3.org/2000/svg">
//                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M18 28.0547C23.553 28.0547 28.0547 23.5531 28.0547 18C28.0547 12.4469 23.553 7.94531 18 7.94531C12.4469 7.94531 7.94531 12.4469 7.94531 18C7.94531 23.5531 12.4469 28.0547 18 28.0547ZM30.375 18C30.375 24.8345 24.8345 30.375 18 30.375C11.1655 30.375 5.625 24.8345 5.625 18C5.625 11.1655 11.1655 5.625 18 5.625C24.8345 5.625 30.375 11.1655 30.375 18Z"></path>
//                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3508 20.3864C20.712 20.1679 20.9645 19.8074 21.0462 19.3932L22.427 12.3948C22.5027 12.0113 22.0871 11.7204 21.7527 11.9226L15.6486 15.6137C15.2874 15.8322 15.0349 16.1928 14.9532 16.6069L13.5724 23.6053C13.4967 23.9888 13.9123 24.2797 14.2467 24.0775L20.3508 20.3864ZM16.5684 20.0442L18.9029 18.6325L19.431 15.9559L17.0965 17.3676L16.5684 20.0442Z"></path>
//                             </svg>
//                             <style data-emotion="css 1eyr712-DivText">
//                                 .css-1eyr712-DivText {
//                                     position: absolute;
//                                     font-weight: 600;
//                                     font-size: 10px;
//                                     color: #fff;
//                                     text-align: center;
//                                     bottom: 4px;
//                                     opacity: 0.75;
//                                 }
//                             </style>
//                             <div color="#fff" opacity="0.75" class="css-1eyr712-DivText e70cq5v3"></div>
//                         </a>
//                     </div>
//                     <div>
//                         <style data-emotion="css ltyqnp-DivIconContainer">
//                             .css-ltyqnp-DivIconContainer {
//                                 position: relative;
//                                 width: 75px;
//                                 color: rgb(255, 255, 255);
//                                 display: -webkit-box;
//                                 display: -webkit-flex;
//                                 display: -ms-flexbox;
//                                 display: flex;
//                                 -webkit-align-items: center;
//                                 -webkit-box-align: center;
//                                 -ms-flex-align: center;
//                                 align-items: center;
//                                 -webkit-box-pack: center;
//                                 -ms-flex-pack: center;
//                                 -webkit-justify-content: center;
//                                 justify-content: center;
//                                 position: absolute;
//                                 margin: 0 auto;
//                                 top: 50%;
//                                 left: 50%;
//                                 -webkit-transform: translate(-50%, -50%);
//                                 -moz-transform: translate(-50%, -50%);
//                                 -ms-transform: translate(-50%, -50%);
//                                 transform: translate(-50%, -50%);
//                             }
//                         </style>
//                         <div class="css-ltyqnp-DivIconContainer e70cq5v4">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 75 49" width="100%" height="100%">
//                                 <path fill="#D8D8D8" stroke="#979797" stroke-width="0.5" d="M.25.25h74.5v48.5H.25z" opacity="0.01"></path>
//                                 <path fill="#FA2D6C" fill-rule="evenodd" d="M23.5 23.3c0-4.48 0-6.72.872-8.432a8 8 0 013.496-3.496C29.58 10.5 31.82 10.5 36.3 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 013.496 3.496C59 16.58 59 18.82 59 23.3v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 01-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 01-3.496-3.496C23.5 32.42 23.5 30.18 23.5 25.7v-2.4z" clip-rule="evenodd"></path>
//                                 <path fill="#20D5EC" fill-rule="evenodd" d="M16 23.3c0-4.48 0-6.72.872-8.432a8 8 0 013.496-3.496C22.08 10.5 24.32 10.5 28.8 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 013.496 3.496c.872 1.711.872 3.952.872 8.432v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 01-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 01-3.496-3.496C16 32.42 16 30.18 16 25.7v-2.4z" clip-rule="evenodd"></path>
//                                 <rect width="36" height="28" x="19.5" y="10.5" fill="#fff" rx="8"></rect>
//                                 <path fill="#161823" fill-rule="evenodd" d="M36.5 18.25a.5.5 0 00-.5.5v4.75h-4.75a.5.5 0 00-.5.5v1.5a.5.5 0 00.5.5H36v4.75a.5.5 0 00.5.5H38a.5.5 0 00.5-.5V26h4.75a.5.5 0 00.5-.5V24a.5.5 0 00-.5-.5H38.5v-4.75a.5.5 0 00-.5-.5h-1.5z" clip-rule="evenodd"></path>
//                             </svg>
//                         </div>
//                     </div>
//                     <div class="css-1mmopfp-DivTabContainer e70cq5v2">
//                         <a class="css-10jswu3-StyledFooterItemAnchor e1vq1upi1">
//                             <svg style="fill-opacity:0.75" width="1em" data-e2e="" height="1em" viewBox="0 0 32 32" fill="#fff" xmlns="http://www.w3.org/2000/svg">
//                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"></path>
//                             </svg>
//                             <div color="#fff" opacity="0.75" class="css-1eyr712-DivText e70cq5v3"></div>
//                         </a>
//                     </div>
//                     <div class="css-1mmopfp-DivTabContainer e70cq5v2">
//                         <a class="css-10jswu3-StyledFooterItemAnchor e1vq1upi1">
//                             <svg style="fill-opacity:0.75" width="1em" data-e2e="" height="1em" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg">
//                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0001 11.5C20.9625 11.5 18.5001 13.9624 18.5001 17C18.5001 20.0376 20.9625 22.5 24.0001 22.5C27.0377 22.5 29.5001 20.0376 29.5001 17C29.5001 13.9624 27.0377 11.5 24.0001 11.5ZM15.5001 17C15.5001 12.3056 19.3057 8.5 24.0001 8.5C28.6945 8.5 32.5001 12.3056 32.5001 17C32.5001 21.6944 28.6945 25.5 24.0001 25.5C19.3057 25.5 15.5001 21.6944 15.5001 17ZM24.0001 30.5C19.1458 30.5 15.0586 33.7954 13.8578 38.2712C13.7147 38.8046 13.2038 39.1741 12.6591 39.0827L11.6729 38.9173C11.1282 38.8259 10.7571 38.3085 10.8888 37.7722C12.3362 31.8748 17.6559 27.5 24.0001 27.5C30.3443 27.5 35.664 31.8748 37.1114 37.7722C37.2431 38.3085 36.872 38.8259 36.3273 38.9173L35.3411 39.0827C34.7964 39.1741 34.2855 38.8046 34.1424 38.2712C32.9416 33.7954 28.8544 30.5 24.0001 30.5Z"></path>
//                             </svg>
//                             <div color="#fff" opacity="0.75" class="css-1eyr712-DivText e70cq5v3"></div>
//                         </a>
//                     </div>
//                 </footer>
//             </div>
//         </div>
//         <script id="__UNIVERSAL_DATA_FOR_REHYDRATION__" type="application/json">${key1.replace(/\n/g, "")}</script>
//             <script data-chunk="webapp-mobile" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/runtime.273a83fe0b46d4bcc7ca.js"></script>
//             <script data-chunk="webapp-mobile" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/multi-cluster-domain.913c3385ae1e76902783.js"></script>
//             <script data-chunk="webapp-mobile" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-tux-h5.e95fd5757c4afeefb1ae.js"></script>
//             <script data-chunk="webapp-mobile" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-596046b7.5914ab210ebcd1ba57bb.js"></script>
//             <script data-chunk="webapp-mobile" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-d801507b.3bd62c1723670599a962.js"></script>
//             <script data-chunk="webapp-mobile" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-ea8a6886.28a95eadff2352c009f9.js"></script>
//             <script data-chunk="webapp-mobile" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-b3a903c8.95c06050103948ba0362.js"></script>
//             <script data-chunk="webapp-mobile" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-7842561a.d59dff4ebbae9dc9f1cf.js"></script>
//             <script data-chunk="webapp-mobile" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-74d9c565.037789b3ae9a546f5124.js"></script>
//             <script data-chunk="webapp-mobile" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/vendor.dacb69790306e4d2beca.js"></script>
//             <script data-chunk="webapp-mobile" async src="http://127.0.0.1:5555/webapp-mobile.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-eb873fff.2fd34d1ecf9c85d75c4a.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-04a93705.abe36ab023afda689845.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-cdf20b09.d909f377e848702ec199.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-6801073e.357123b5be6717dfc275.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-82495f79.315ab84a2e2fb70aeed8.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-d98dc4ed.dc8e67b22338a075446a.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-ca20f4a9.a5d7896a36cfc628a516.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-5a799721.05845ed2c552fe80e7da.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-9f81b684.d953b9d8063d3a838cb6.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-58cded4b.f487695d6e73eb4d215b.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-ed7c8e09.0579cb6bac7af6b92b5b.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-2d6263f2.cdb8e1a709fba6b19cb9.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-754771ea.ccccd73f3932d439a2a0.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/npm-async-aee5bb16.df1ec3fe2114c122c9eb.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/5515.e7e00e990748df628a14.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/9687.14455dc9a41aa21cc350.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/574.108bdd31e06e1590b3d3.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/7169.cca38fe089080ca4d5cf.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/6620.21390da995fa62d8aa6f.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/5633.3bfc5a29ea8cede27aab.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/3551.6c8d6b7b7828db4157da.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/5412.422787da7620c889aae1.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/7905.761f8194948befbce353.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/289.168f6373acd0025596f9.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/7659.7a0b1eb82a1eb07da333.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/4195.c7da0aa763747ffa99b9.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/822.e8844dc392a50a3008c8.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/5495.6fb39ac12465eed88200.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/6075.f22ef45be60d1df643fc.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/video-swiper.b5a18e50d0f1a862677b.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/8577.e6b15f026ef6da317323.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/6192.3a813d99dfa924d67116.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/3820.05cb283082e92200be62.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/6092.12c21ac1898ce5a42605.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/740.f432156cafd45da5c80d.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/6401.3534503f41deb3096793.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/82.d77b4b7296aa68df4fdc.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/6119.24240953d8d1da6f5790.js"></script>
//             <script data-chunk="mobile-foryou" async src="https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/main/webapp-mobile/mobile-foryou.7293081cd64e87d4d7c6.js"></script>
//         </body>
//     </html>
// `;
// https://www.tiktok.com/login/?enter_method=enter_personal_homepage&enter_from=personal_homepage&launch_type=0&lang=en&redirect_url=https%3A%2F%2Fgyp.mytiktok.com%2Fprofile
const getPage = (ctx: any) => {
  const originUrl = url.parse(ctx.req.url);
  const query = originUrl.query;
  const targetUrl =
    "https://www.tiktok.com" + ctx.request.url + (!!query ? `?${query}` : "");
  const options = {
    headers: {
      "user-agent": ctx.request.header["user-agent"],
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
          return o
            .replace(/domain=\.tiktok.com;/g, "")
            .replace(/Domain=\.tiktok.com;/g, "");
        });
        cookies.push("delay_guest_mode_vid=5;");
        cookies.push("tiktok_webapp_theme=light;");
        cookies.push("tiktok_webapp_theme_source=light;");

        ctx.res.writeHead(200, {
          "Content-Type": "text/html",
          "Set-Cookie": cookies,
        });

        let newBody = body;

        /** 更换需要更改的文件 */
        if (body.indexOf("webapp-mobile-islands.") > 0) {
          newBody = newBody.replace(
            /<script[^>]*src="[^"]*webapp-mobile-islands\.[^"]*"[^>]*><\/script>/,
            '<script data-chunk="webapp-mobile-islands" async src="http://127.0.0.1:5555/webapp-mobile-islands.js"></script>',
          );
          newBody = newBody.replace(
            /<link[^>]*href="[^"]*webapp-mobile-islands\.[^"]*"[^>]*>/,
            '<link data-chunk="webapp-mobile-islands" rel="preload" as="script" href="http://127.0.0.1:5555/webapp-mobile-islands.js">',
          );

          // if (newBody.indexOf("react.") > 0) {
          //   newBody = newBody.replace(
          //     /<script[^>]*src="[^"]*react\.[^"]*"[^>]*><\/script>/,
          //     '<script data-chunk="webapp-mobile-islands" async src="http://127.0.0.1:5555/npm-islands-useLocation.js"></script>',
          //   );
          //   newBody = newBody.replace(
          //     /<link[^>]*href="[^"]*react\.[^"]*"[^>]*>/,
          //     '<link data-chunk="webapp-mobile-islands" rel="preload" as="script" href="http://127.0.0.1:5555/npm-islands-useLocation.js">',
          //   );
          // }

          if (newBody.indexOf("vendor-ba62aadc.") > 0) {
            newBody = newBody.replace(
              /<script[^>]*src="[^"]*vendor-ba62aadc\.[^"]*"[^>]*><\/script>/,
              '<script data-chunk="webapp-mobile-islands" async src="http://127.0.0.1:5555/verdor-islands.js"></script>',
            );
            newBody = newBody.replace(
              /<link[^>]*href="[^"]*vendor-ba62aadc\.[^"]*"[^>]*>/,
              '<link data-chunk="webapp-mobile-islands" rel="preload" as="script" href="http://127.0.0.1:5555/verdor-islands.js">',
            );
          }
          if (newBody.indexOf("runtime.") > 0) {
            newBody = newBody.replace(
              /<script[^>]*src="[^"]*runtime\.[^"]*"[^>]*><\/script>/,
              '<script data-chunk="webapp-mobile-islands" async src="http://127.0.0.1:5555/runtime-islands.js"></script>',
            );
            newBody = newBody.replace(
              /<link[^>]*href="[^"]*runtime\.[^"]*"[^>]*>/,
              '<link data-chunk="webapp-mobile-islands" rel="preload" as="script" href="http://127.0.0.1:5555/runtime-islands.js">',
            );
          }
        }

        if (newBody.indexOf("webapp-mobile.") > 0) {
          newBody = newBody.replace(
            /<script[^>]*src="[^"]*webapp-mobile\.[^"]*"[^>]*><\/script>/,
            '<script data-chunk="webapp-mobile" async src="http://127.0.0.1:5555/webapp-mobile.js"></script>',
          );
          newBody = newBody.replace(
            /<link[^>]*href="[^"]*webapp-mobile\.[^"]*"[^>]*>/,
            '<link data-chunk="webapp-mobile" rel="preload" as="script" href="http://127.0.0.1:5555/webapp-mobile.js">',
          );

          if (newBody.indexOf("multi-cluster-domain.") > 0) {
            newBody = newBody.replace(
              /<script[^>]*src="[^"]*multi-cluster-domain\.[^"]*"[^>]*><\/script>/,
              '<script data-chunk="webapp-mobile" async src="http://127.0.0.1:5555/multi-cluster-domain.js"></script>',
            );
            newBody = newBody.replace(
              /<link[^>]*href="[^"]*multi-cluster-domain\.[^"]*"[^>]*>/,
              '<link data-chunk="webapp-mobile" rel="preload" as="script" href="http://127.0.0.1:5555/multi-cluster-domain.js">',
            );
          }
          // if (newBody.indexOf("npm-b3a903c8.") > 0) {
          //   newBody = newBody.replace(
          //     /<script[^>]*src="[^"]*npm-b3a903c8\.[^"]*"[^>]*><\/script>/,
          //     '<script data-chunk="webapp-mobile" async src="http://127.0.0.1:5555/npm-useLocation.js"></script>',
          //   );
          //   newBody = newBody.replace(
          //     /<link[^>]*href="[^"]*npm-b3a903c8\.[^"]*"[^>]*>/,
          //     '<link data-chunk="webapp-mobile" rel="preload" as="script" href="http://127.0.0.1:5555/npm-useLocation.js">',
          //   );
          // }

          if (newBody.indexOf("vendor.") > 0) {
            newBody = newBody.replace(
              /<script[^>]*src="[^"]*vendor\.[^"]*"[^>]*><\/script>/,
              '<script data-chunk="webapp-mobile" async src="http://127.0.0.1:5555/verdor.js"></script>',
            );
            newBody = newBody.replace(
              /<link[^>]*href="[^"]*vendor\.[^"]*"[^>]*>/,
              '<link data-chunk="webapp-mobile" rel="preload" as="script" href="http://127.0.0.1:5555/verdor.js">',
            );
          }

          if (newBody.indexOf("runtime.") > 0) {
            newBody = newBody.replace(
              /<script[^>]*src="[^"]*runtime\.[^"]*"[^>]*><\/script>/,
              '<script data-chunk="webapp-mobile-islands" async src="http://127.0.0.1:5555/runtime.js"></script>',
            );
            newBody = newBody.replace(
              /<link[^>]*href="[^"]*runtime\.[^"]*"[^>]*>/,
              '<link data-chunk="webapp-mobile-islands" rel="preload" as="script" href="http://127.0.0.1:5555/runtime.js">',
            );
          }
        }

        if (newBody.indexOf("3152.") > 0) {
          newBody = newBody.replace(
            /<script[^>]*src="[^"]*3152\.[^"]*"[^>]*><\/script>/,
            '<script data-chunk="user-login" async src="http://127.0.0.1:5555/3152.js"></script>',
          );
          newBody = newBody.replace(
            /<link[^>]*href="[^"]*3152\.[^"]*"[^>]*>/,
            '<link data-chunk="user-login" rel="preload" as="script" href="http://127.0.0.1:5555/3152.js">',
          );
        }

        ctx.res.end(newBody);
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
};
/** 代理接口，用来修改响应头 */
router.get("/profile", getPage);
router.get("/", getPage);
// router.get("/login", getPage);
// router.get("/signup", getPage);
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
            status: response.statusCode,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
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
          ctx.body = {
            ...body,
            host: "gyp.mytiktok.com",
          };
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

router.get(/^\/v19\/us-video\/video\/tos\/.*$/, (ctx: any) => {
  const targetUrl = "https://v19-webapp-prime.us.tiktok.com";
  const path = ctx.request.url.replace("/v19/us-video", "");
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
            status: response.statusCode,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

router.get(/^\/us-video\/video\/tos\/.*$/, (ctx: any) => {
  const targetUrl = "https://v16-webapp-prime.us.tiktok.com";
  const path = ctx.request.url.replace("/us-video", "");
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
            status: response.statusCode,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
});

router.get(/^\/video\/tos\/.*$/, (ctx: any) => {
  const targetUrl = "https://v16-webapp-prime.tiktok.com";
  const path = ctx.request.url;
  const options = {
    headers: {
      cookie: ctx.request.header["cookie"],
      // origin: "https://www.tiktok.com",
      // referer: "https://www.tiktok.com/",
      range: ctx.request.header["range"],
      "user-agent": ctx.request.header["user-agent"],
    },
    proxy,
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
            status: response.statusCode,
            result: "forbidden",
          };
          resolve(true);
        }
      },
    );
  });
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
          ctx.set("set-cookie", cookies);
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

const port = 443;
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
