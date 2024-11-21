"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[8225], {
    10005: (e, t, i) => {
        i.r(t),
        i.d(t, {
            default: () => dr
        });
        var o = i(24643)
          , n = i(13392)
          , a = i(73580)
          , r = i(40099)
          , l = i(32337)
          , s = i(20934)
          , d = i(35281)
          , c = i(60484)
          , u = i(48615)
          , p = i(88920)
          , m = i(18072)
          , h = i(93608);
        function g(e, t) {
            const i = h.f.getVar(e, t);
            return "val"in i ? i.val : {}
        }
        var v = i(30721)
          , f = i(59952)
          , y = i(53438)
          , x = i(67169)
          , b = i(82517)
          , _ = i(58632);
        // 更改为 use-credentials 开启限制
        const k = {
            "v16-webapp.tiktok.com": "anonymous",
            "v16m-webapp.tiktokcdn-us.com": "anonymous",
            "v16-webapp-prime.tiktok.com": "anonymous",
            "v16-webapp-prime.us.tiktok.com": "anonymous",
            "v19-webapp-prime.us.tiktok.com": "anonymous",
            "v19-webapp-prime.tiktok.com": "anonymous",
            "v16-webapp-prime-test-ttp.us.tiktok.com": "anonymous",
            "v19-webapp-prime-test-ttp.us.tiktok.com": "anonymous",
            "v16-webapp-prime-test.tiktok.com": "anonymous",
            "v19-webapp-prime-test.tiktok.com": "anonymous",
            "webapp-va.tiktok.com": "anonymous",
            "webapp-sg.tiktok.com": "anonymous",
            "webapp-i18n.tiktok.com": "anonymous",
            "video-useast5.us.tiktok.com": "anonymous"
        };
        function w() {
            return "undefined" == typeof window || "undefined" == typeof document
        }
        var C, S, M;
        !function(e) {
            e.ThreeColumnAuto = "list_auto",
            e.ThreeColumnTrigger = "list_mouse_trigger",
            e.BrowserMode = "browser_mode",
            e.SwiperMode = "swiper_mode",
            e.FullscreenMode = "fullscreen",
            e.OneColumn = "one_column",
            e.ThreeColumn = "three_column",
            e.WideScreen = "wide_screen",
            e.VideoDetail = "video_detail",
            e.Pip = "pip",
            e.Others = "others",
            e.MiniPlayer = "mini_player",
            e.BannerAds = "banner_ad",
            e.ImmersivePlayer = "immersive_player"
        }(C || (C = {})),
        (M = S || (S = {}))[M.OneColumn = 0] = "OneColumn",
        M[M.ThreeColumn = 1] = "ThreeColumn",
        M[M.BrowserMode = 2] = "BrowserMode",
        M[M.SwiperMode = 3] = "SwiperMode",
        M[M.VideoDetail = 4] = "VideoDetail",
        M[M.FullscreenMode = 5] = "FullscreenMode",
        M[M.Pip = 6] = "Pip",
        M[M.CreatorTab = 7] = "CreatorTab",
        M[M.MiniPlayer = 8] = "MiniPlayer",
        M[M.ImmersivePlayer = 9] = "ImmersivePlayer";
        const A = {
            2: "browser_mode",
            8: "mini_player",
            0: "one_column",
            1: "three_column",
            4: "video_detail",
            5: "fullscreen",
            7: "browser_mode",
            6: "pip",
            3: "swiper_mode",
            9: "immersive_player",
            "-1": "others"
        }
          , I = () => {}
        ;
        var E, T, j, P, O, L;
        (T = E || (E = {}))[T.Yes = 0] = "Yes",
        T[T.No = 1] = "No",
        (P = j || (j = {}))[P.Public = 0] = "Public",
        P[P.Self = 1] = "Self",
        P[P.Friend = 2] = "Friend",
        (L = O || (O = {})).PlayQuality = "video_play_quality",
        L.PlayEnded = "video_play_end",
        L.PlayFailed = "video_play_failed",
        L.BlockStart = "video_block_start",
        L.Block = "video_block",
        L.Request = "video_request",
        L.RequestResponse = "video_request_response",
        L.FirstFrame = "first_feed_show_time";
        const B = {
            corruptedVideoFrames: 0,
            creationTime: 0,
            droppedVideoFrames: 0,
            totalVideoFrames: 0
        }
          , D = {
            currentSrc: "",
            currentTime: 0,
            duration: 0,
            readyState: 0,
            networkState: 0,
            error: null
        };
        var R, U, z, V, N, F;
        (U = R || (R = {})).NoInteract = "failed because the user didn't interact with the document first.",
        U.Interrupted = "request was interrupted by a call to pause",
        U.SafariNoInteract = "The request is not allowed by the user agent or the platform in the current context",
        U.FireFox = "The play method is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.",
        U.LoadInterrupt = "request was interrupted by a new load request",
        U.Abort = "The operation was aborted",
        (V = z || (z = {})).LOAD = "load",
        V.WAITING = "waiting",
        V.PAUSE = "pause",
        V.ENDED = "ended",
        V.ERROR = "error",
        V.PLAYING = "playing",
        (F = N || (N = {}))[F.NIL = -255] = "NIL",
        F[F.UnknownError = -1] = "UnknownError",
        F[F.Ok = 0] = "Ok",
        F[F.ReportLiveFailed = 90002] = "ReportLiveFailed",
        F[F.VerifyCode = 1e4] = "VerifyCode",
        F[F.VideoLikeFreq = 2150] = "VideoLikeFreq",
        F[F.VideoLikeFreq2 = 2210] = "VideoLikeFreq2",
        F[F.VideoUnavailableDeleted = 2054] = "VideoUnavailableDeleted",
        F[F.AdVideoUnavailableChange = 2752] = "AdVideoUnavailableChange",
        F[F.CommentBanCode = 22] = "CommentBanCode",
        F[F.CommentLikePermissionDisable = 3002043] = "CommentLikePermissionDisable",
        F[F.SearchSensitiveCode = 403] = "SearchSensitiveCode",
        F[F.SearchYoungCode = 203] = "SearchYoungCode",
        F[F.SmsInvalidNumber = -1] = "SmsInvalidNumber",
        F[F.SmsSlideVerify = -4] = "SmsSlideVerify",
        F[F.FypVideoListLimit = 10404] = "FypVideoListLimit",
        F[F.ClientPageError = 450] = "ClientPageError",
        F[F.LiveNeedLogin = 10119] = "LiveNeedLogin",
        F[F.SharkBlock = 10114] = "SharkBlock",
        F[F.SharkSlide = 10113] = "SharkSlide",
        F[F.NetError = 10111] = "NetError",
        F[F.ServerErrorNot500 = 10101] = "ServerErrorNot500",
        F[F.VideoRisk = 10228] = "VideoRisk",
        F[F.VideoRMask = 10229] = "VideoRMask",
        F[F.VideoRiskMask = 10230] = "VideoRiskMask",
        F[F.VideoNeedRecheck = 10227] = "VideoNeedRecheck",
        F[F.VideoUnshelveByMusic = 10220] = "VideoUnshelveByMusic",
        F[F.VideoNotExist = 10204] = "VideoNotExist",
        F[F.VideoAbnormal = 10215] = "VideoAbnormal",
        F[F.VideoLowAgeM = 10213] = "VideoLowAgeM",
        F[F.VideoLowAgeT = 10214] = "VideoLowAgeT",
        F[F.VideoFirstReviewUnshelve = 10217] = "VideoFirstReviewUnshelve",
        F[F.VideoPrivateByUser = 10216] = "VideoPrivateByUser",
        F[F.VideoGeofenceBlock = 10231] = "VideoGeofenceBlock",
        F[F.VideoPhoto = 10239] = "VideoPhoto",
        F[F.VideoFriendsOnly = 10240] = "VideoFriendsOnly",
        F[F.VideoDeleted = 10241] = "VideoDeleted",
        F[F.VideoUserBlockedByAuthor = 10242] = "VideoUserBlockedByAuthor",
        F[F.HashtagNotExist = 10205] = "HashtagNotExist",
        F[F.HashtagUnshelve = 10212] = "HashtagUnshelve",
        F[F.HashtagSensitivityWord = 10211] = "HashtagSensitivityWord",
        F[F.HashtagBlackList = 10209] = "HashtagBlackList",
        F[F.UserInboxFollowBan = 24] = "UserInboxFollowBan",
        F[F.UserNotExist = 10202] = "UserNotExist",
        F[F.UserBan = 10221] = "UserBan",
        F[F.UserPrivate = 10222] = "UserPrivate",
        F[F.UserNotLogin = 10102] = "UserNotLogin",
        F[F.UserFtc = 10223] = "UserFtc",
        F[F.UserUniqueSensitivity = 10225] = "UserUniqueSensitivity",
        F[F.QuestionNotAvailable = 10236] = "QuestionNotAvailable",
        F[F.MusicNotExist = 10203] = "MusicNotExist",
        F[F.MusicUnshelve = 10218] = "MusicUnshelve",
        F[F.MusicNoCopyright = 10219] = "MusicNoCopyright",
        F[F.MusicUnavailable = 202001] = "MusicUnavailable",
        F[F.GameNotExist = 10224] = "GameNotExist",
        F[F.LiveNotExist = 10210] = "LiveNotExist",
        F[F.GoLiveRoomBaned = 10018] = "GoLiveRoomBaned",
        F[F.GoLiveBaned = 4003035] = "GoLiveBaned",
        F[F.LiveRoomPrepare = 30019] = "LiveRoomPrepare",
        F[F.LiveRoomEnd = 30003] = "LiveRoomEnd",
        F[F.LiveRoomBan = 30012] = "LiveRoomBan",
        F[F.LiveNoGatedAuth = 4003043] = "LiveNoGatedAuth",
        F[F.LiveNoAgeGatedAuth = 4003110] = "LiveNoAgeGatedAuth",
        F[F.LivePaidEvent = 4003072] = "LivePaidEvent",
        F[F.LiveSubscriberOnly = 4003135] = "LiveSubscriberOnly",
        F[F.LiveSuicideCase = 2403] = "LiveSuicideCase",
        F[F.LiveSensitiveTitle = 50004] = "LiveSensitiveTitle",
        F[F.LiveRoomBaned = 10018] = "LiveRoomBaned",
        F[F.LiveEnterRoomNeedLogin = 20003] = "LiveEnterRoomNeedLogin",
        F[F.LiveAccountUnderRiskControl = 20063] = "LiveAccountUnderRiskControl",
        F[F.LiveHitBanStrategy = 30009] = "LiveHitBanStrategy",
        F[F.LiveOBSAccessRecalled = 4003105] = "LiveOBSAccessRecalled",
        F[F.EffectNotExist = 10208] = "EffectNotExist",
        F[F.PlaylistNotExist = 10233] = "PlaylistNotExist",
        F[F.PlaylistInTrill = 10234] = "PlaylistInTrill",
        F[F.VideoPlaylistUnavailable = 10243] = "VideoPlaylistUnavailable",
        F[F.VideoPlaylistIsEmpty = 10244] = "VideoPlaylistIsEmpty",
        F[F.PrivateAccountLimitByBC = 3026002] = "PrivateAccountLimitByBC";
        var G = i(31068)
          , H = i(27331);
        const W = new G.Vb;
        function $(e, t, i) {
            t && (0,
            r.useEffect)(( () => {
                if (!W[i])
                    return;
                let o = null;
                return "metrics" === i || "event" === i ? "PlayEnded" === e ? W.metrics.bind(e, t) : W[i].on(e, t) : "element" === i && W.element && (o = e => {
                    t(e)
                }
                ,
                W.element.addEventListener(e, o)),
                () => {
                    W[i] && ("metrics" === i || "event" === i ? "PlayEnded" === e ? W.metrics.clear(e) : W[i].off(e, t) : "element" === i && o && W.element.removeEventListener(e, o))
                }
            }
            ), [t])
        }
        new H.A;
        const Z = e => e ? e.map((e => e.GearName || "")) : null
          , q = e => e ? e.map((e => e.QualityType && e.Bitrate ? `${e.QualityType}:${e.Bitrate}` : "")).filter((e => !!e)) : null
          , J = e => {
            if (!e)
                return 0;
            let t = 0;
            for (let i = 0; i < e.length; i++)
                t += e.end(i) - e.start(i);
            return Math.round(1e3 * t)
        }
          , Y = new Map([[2, "adapt_lowest_1080p"], [3, "adapt_lower_1080p"], [4, "adapt_1080p"], [7, "adapt_lowest_1440p"], [10, "normal_720p"], [11, "low_720p"], [12, "adapt_high_720p"], [13, "adapt_higher_720p"], [14, "adapt_lower_720p"], [15, "adapt_lowest_720p"], [16, "higher_720p"], [17, "highest_720p"], [18, "adapt_720p"], [19, "adapt_low_720p"], [191, "lower_720p"], [20, "normal_540p"], [21, "adapt_lower_540p"], [22, "adapt_high_540p"], [23, "adapt_higher_540p"], [24, "lower_540p"], [25, "lowest_540p"], [26, "higher_540p"], [27, "highest_540p"], [28, "adapt_540p"], [29, "adapt_lowest_540p"], [291, "adapt_low_540p"], [30, "normal_480p"], [31, "low_480p"], [32, "high_480p"], [33, "medium_480p"], [34, "lower_480p"], [35, "lowest_480p"], [36, "higher_480p"], [37, "highest_480p"], [38, "adapt_480p"], [39, "adapt_lower_480p"], [391, "adapt_high_480p"], [40, "normal_360p"], [41, "low_360p"], [42, "high_360p"], [43, "medium_360p"], [44, "lower_360p"], [45, "lowest_360p"], [46, "higher_360p"], [47, "highest_360p"], [48, "adapt_360p"], [49, "adapt_lowest_360p"], [50, "adapt_high_360p"]])
          , Q = (e, t) => {
            if (!e)
                return t;
            if ("string" == typeof e && e.indexOf("xgpreload_config") > -1)
                return e;
            const i = Number(e);
            if (!Y.has(i)) {
                const t = String(e).match(/^([a-zA-Z]*)+_([0-9]+)_0$/i);
                return t ? `${t[1]}_${t[2]}p` : `_${e}`
            }
            return Y.get(i)
        }
        ;
        function K(e=0) {
            return ["one_column", "three_column", "browser_mode", "swiper_mode", "video_detail", "pip", "fullscreen", "creator_tab", "mini_player"][e]
        }
        function X(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
        function ee(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {}
                  , o = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(i).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable
                }
                )))),
                o.forEach((function(t) {
                    X(e, t, i[t])
                }
                ))
            }
            return e
        }
        const te = (0,
        r.memo)((0,
        r.forwardRef)((function({id: e="", url: t="", teaParams: i, mode: n=S.OneColumn, autoplay: a=!0, muted: l=!1, onended: s=I, onloadstart: d=I, onloadeddata: c=I, oncanplay: u=I, onplay: p=I, onpause: m=I, ontimeupdate: g=I, onplaying: v=I, onwaiting: f=I, onerror: y=I, oncanplaythrough: x=I, onloadedmetadata: b=I, onabort: _=I, onstalled: w=I, onseeking: C=I, onseeked: M=I, onprogress: A=I, onAutoplayPrevented: E=I, playerTypeConfig: T="TT", platform: P="", videoPlayReport: L, videoExperienceReport: R}, U) {
            const z = (0,
            r.useRef)(null)
              , V = (0,
            r.useRef)(P);
            V.current = P;
            const [N,F] = (0,
            r.useState)(!1)
              , H = (0,
            r.useMemo)(( () => function(e=!0) {
                return {
                    enableSubtitle: !0,
                    enablePreloader: !1,
                    enableLogger: !1,
                    mp4EncryptPlayer: {
                        reqOptions: {
                            timeout: 5e3
                        },
                        chunkSize: 209715,
                        timeout: 5e3,
                        waitingInBufferTimeOut: 1e4,
                        waitingTimeOut: 1e4,
                        notDegradeErrorList: [],
                        closeDowngrade: !1,
                        minBufferLength: 10,
                        maxBufferLength: 60,
                        needPreloadRangeList: !0,
                        needPreloadCheck: !1,
                        needAutoBitrate: !0,
                        removeBufferLen: 60,
                        resumePlayWaterLevel: 0,
                        segmentMinDuration: 10,
                        getRequestOptionsCallback: ({url: e}) => function(e) {
                            if (!e)
                                return {};
                            let t = "";
                            const i = new URL(e);
                            return i.hostname && (t = k[i.hostname] || ""),
                            "use-credentials" === t ? {
                                credentials: "include"
                            } : {}
                        }(e)
                    },
                    video: {
                        codecType: "h264",
                        definitionList: [],
                        autoplay: e,
                        volume: 1
                    },
                    extra: {}
                }
            }(a)), [a])
              , Y = (0,
            r.useRef)(H);
            Y.current = H;
            const X = (0,
            r.useMemo)(( () => {
                let t = null;
                return e && i && (t = function(e, t, i, o) {
                    const n = W.attributes;
                    let a = j.Public;
                    t.forFriend && (a = j.Friend),
                    t.secret && (a = j.Self);
                    let r = "";
                    if (n && n.src) {
                        const e = /^(?:https?:\/\/)?([^\/\s:]+)/
                          , t = n.src.match(e);
                        r = t ? t[1] : ""
                    }
                    const l = {
                        group_id: e,
                        author_id: t.author_id || "",
                        play_mode: K(o),
                        logo_type: "unwatermarked",
                        item_status: a,
                        play_url: n ? n.src : "",
                        host: r,
                        aweme_type: t.aweme_type || 0,
                        pic_cnt: t.pic_cnt || 0,
                        playlist_id: t.playlist_id || "",
                        popup_type: t.popup_type || "",
                        size: t.size || 0,
                        watch_count_foru: 1,
                        watch_count_total: 1,
                        log_id: t.log_id || "",
                        is_ad: t.isAd
                    };
                    let s = {}
                      , d = {};
                    return W.device && (d = {
                        cpu_core: W.device.cpu,
                        memory_size: W.device.memory,
                        HEVC_supported: W.device.isHEVCSupported ? 1 : 0
                    }),
                    Object.assign({}, d, l, s)
                }(e, i, 0, n)),
                t
            }
            ), [e, i, n])
              , te = (0,
            r.useMemo)(( () => {
                let e = null;
                if (i && W.player) {
                    const t = W.player.curDefinition;
                    e = function(e, t, i) {
                        let o = ""
                          , n = -1
                          , a = -1
                          , r = ""
                          , l = "mp4";
                        const s = Q(i.definition, t.definition);
                        if (t.videoQuality && s && (o = `${t.videoQuality}_${s}`),
                        W.player) {
                            r = "XG" === W.player.type ? "xgplayer" : "defaultPlayer";
                            let e = W.player.getVideoDesc();
                            e && (l = e.videoType)
                        }
                        return {
                            video_bitrate: i.bitrate || t.bitrate || 0,
                            video_format: t.format || "",
                            codec_format: i.codecType || "h264",
                            encoded_type: t.encodedType || "",
                            bitrate_quality: t.videoQuality || "",
                            video_quality: o,
                            video_encodeUserTag: t.encodeUserTag || "",
                            original_definition: t.definition || "",
                            preload_size: n,
                            preload_time: a,
                            player_type: r,
                            video_type: l
                        }
                    }(0, i, t)
                }
                return e
            }
            ), [e, i])
              , ie = (0,
            r.useMemo)(( () => {
                let e = !1;
                return W.player && (e = function(e) {
                    const t = e ? e.codecType : "h264";
                    return !!t && t.indexOf("h265") > -1
                }(W.player.curDefinition)),
                e
            }
            ), [])
              , oe = (0,
            r.useMemo)(( () => {
                let t = null;
                return i && (t = function(e, t, i, o, n=!0) {
                    var a;
                    return {
                        itemId: n ? t : null !== (a = e.group_id) && void 0 !== a ? a : "",
                        authorId: e.author_id,
                        isScheduled: Boolean(e.is_scheduled),
                        autoplayStatus: 1,
                        searchId: n ? e.search_id : "",
                        searchKeyword: n ? e.search_keyword : "",
                        searchResultId: n ? e.search_result_id : "",
                        playMode: o,
                        isMute: i,
                        fromTab: e.fromTab,
                        hasSubtitle: e.hasSubtitle,
                        captionsShowType: e.captionsShowType,
                        isPaidPartnership: Boolean(e.isPaidPartnership),
                        poiId: e.poi_id,
                        isSubOnlyVideo: e.is_sub_only_video,
                        isCopyrightMuted: e.isCopyrightMuted,
                        isPinnedItem: e.isPinnedItem
                    }
                }(i, e, l, n, "android" === V.current)),
                t
            }
            ), [i, e, l, n])
              , ne = (0,
            r.useRef)(oe);
            ne.current = oe;
            const ae = (0,
            r.useCallback)(( () => {
                const e = W.attributes;
                if (!e)
                    return {};
                const t = W.player.curDefinition;
                var i;
                return {
                    buffered: e.buffered,
                    currentTime: e.currentTime,
                    ended: e.currentTime,
                    currentSrc: "",
                    duration: e.duration,
                    readyState: e.readyState,
                    networkState: e.networkState,
                    error: "",
                    playerType: W.player.type,
                    volume: e.volume,
                    muted: e.muted,
                    videoBitrate: t.bitrate,
                    videoQuality: t.definition,
                    codecType: null !== (i = t.codecType) && void 0 !== i ? i : "h264",
                    play_url: ""
                }
            }
            ), [])
              , re = (0,
            r.useCallback)(( () => {
                if (!X)
                    return;
                const e = X;
                h.f.event(O.Request, e)
            }
            ), [X])
              , le = (0,
            r.useCallback)((e => {
                if (!X || !i || !W.player)
                    return;
                const t = W.player.curDefinition
                  , o = function(e, t, i, o, n) {
                    let a = "";
                    const r = Q(t.definition, i.definition);
                    let l;
                    return i.videoQuality && r && (a = `${i.videoQuality}_${r}`),
                    W.attributes && (l = W.attributes.error),
                    Object.assign({}, {
                        duration: Math.round(n),
                        error_code: l ? String(l.code) : "",
                        is_success: l ? "0" : "1",
                        video_quality: a,
                        is_bytevc1: o ? 1 : 0,
                        isExpired: 2,
                        isSupportMP4: 1
                    }, e)
                }(X, t, i, ie, e.duration);
                h.f.event(O.RequestResponse, o)
            }
            ), [X, ie, i])
              , se = (0,
            r.useCallback)(( () => {
                if (!X)
                    return;
                const e = X;
                h.f.event(O.BlockStart, e)
            }
            ), [X])
              , de = (0,
            r.useCallback)((e => {
                if (!X || !te)
                    return;
                const t = function(e, t, i, o) {
                    let n, a = 0;
                    W.attributes && (n = W.attributes.error,
                    a = W.attributes.duration);
                    let r = o.code || 0
                      , l = o.message || "";
                    return r <= 0 && n && (r = n.code,
                    l = n.message),
                    Object.assign({}, t, {
                        error_code: String(r),
                        error_info: l,
                        is_bytevc1: i ? 1 : 0,
                        duration: Math.round(1e3 * a),
                        isExpired: o.isExpired || 0,
                        isSupportMP4: 1,
                        is_before: 0 === o.status ? 0 : 1,
                        retry_c: o.retryCount || 0,
                        retry_l: o.retryList || []
                    }, e)
                }(X, te, ie, e);
                h.f.event(O.PlayFailed, t)
            }
            ), [X, te, ie])
              , ce = (0,
            r.useCallback)((e => {
                if (!(X && te && i && W.player))
                    return;
                const t = W.player.curDefinition
                  , o = function(e, t, i, o, n, a, r, l) {
                    let s, d, c = 0, u = 0, p = 1, m = !1;
                    const h = r - l;
                    W.attributes && (s = W.attributes.error,
                    c = W.attributes.duration,
                    u = W.attributes.readyState,
                    d = W.attributes.buffered,
                    p = W.attributes.volume,
                    m = W.attributes.muted);
                    const g = Math.min(h, 1e3 * c);
                    let v = o.bitrate;
                    v <= 0 && (v = n && n.bitrate ? n.bitrate : 0);
                    const f = v / 8 * (g / 1e3);
                    let y = 0
                      , x = 0
                      , b = 0
                      , _ = 0;
                    if (W.player) {
                        const e = W.player.playbackQuality;
                        e && (y = e.droppedVideoFrames,
                        x = e.totalVideoFrames,
                        x && (b = y / x),
                        _ = h)
                    }
                    return Object.assign({}, t, {
                        is_success: s ? "0" : "1",
                        video_duration: Math.round(1e3 * r),
                        play_duration: Math.round(1e3 * a),
                        buffering: u <= 2 ? 1 : 0,
                        duration: Math.round(h),
                        wait_duration: 0,
                        cur_cache_duration: J(d),
                        local_time_ms: Date.now(),
                        volume_level: p,
                        volume_change: 0,
                        muted: m ? 1 : 0,
                        click_mute: 0,
                        session_order: 0,
                        play_size: Math.round(f),
                        data_player_type: 2,
                        cache_size: 0,
                        cache_duration: 0,
                        cdn_size_video: 0,
                        is_bytevc1: i ? 1 : 0,
                        drop_frame: y,
                        total_play_frame: x,
                        drop_frame_rate: b,
                        drop_frame_duration: _,
                        vqm: void 0
                    }, e)
                }(X, te, ie, t, i, e.currentTime, e.duration, e.pauseDuration);
                h.f.event(O.PlayEnded, o)
            }
            ), [X, te, ie, i])
              , ue = (0,
            r.useCallback)((e => {
                if (!X)
                    return;
                const t = function(e, t) {
                    return Object.assign({}, {
                        feed_total: t
                    }, e)
                }(X, e.duration);
                h.f.event(O.FirstFrame, t)
            }
            ), [X])
              , pe = (0,
            r.useCallback)((e => {
                h.f.event("video_data_size", {
                    task_type: 1,
                    cdn_size: e.chunkSize,
                    cdn_speed: e.speed,
                    project: "webapp-mobile"
                })
            }
            ), [])
              , me = (0,
            r.useCallback)((e => {
                if (!X || !te)
                    return;
                const t = function(e, t, i, o, n) {
                    let a = 0
                      , r = !1;
                    return W.attributes && (a = W.attributes.duration,
                    r = W.attributes.muted),
                    Object.assign({}, t, {
                        duration: Math.round(o.duration),
                        is_bytevc1: i ? 1 : 0,
                        video_duration: Math.round(1e3 * a),
                        muted: r ? 1 : 0,
                        bitrate_set: Z(n),
                        quality_bitrate: q(n),
                        duration_from_load: 0,
                        duration_with_load: 0,
                        is_same: 0,
                        retry_c: o.retryCount || 0,
                        retry_l: o.retryList || []
                    }, e)
                }(X, te, ie, e.duration, void 0);
                h.f.event(O.PlayQuality, t)
            }
            ), [X, te, ie])
              , he = (0,
            r.useCallback)((e => {
                if (!X || !te)
                    return;
                const t = function(e, t, i, o) {
                    let n = 0;
                    const {attributes: a} = W;
                    return a && (n = a.currentTime),
                    Object.assign({}, t, {
                        duration: Math.round(o),
                        is_bytevc1: i ? 1 : 0,
                        position: Math.round(1e3 * n),
                        should_filter: "0",
                        droppedRate: 0,
                        end_type: 0
                    }, e)
                }(X, te, ie, e.duration);
                h.f.event(O.Block, t)
            }
            ), [X, te, ie]);
            W.player && W.player.mute(l),
            (0,
            r.useEffect)(( () => {
                W.player && W.player.mute(l)
            }
            ), [l]);
            const ge = (0,
            r.useCallback)(( () => {}
            ), [])
              , ve = (0,
            r.useCallback)((e => {
                e && e.error && h.f.event("video_mse_error", {
                    code: e.error.errorCode || 0,
                    message: e.error.errorMessage || "",
                    httpCode: e.error.httpCode || 0,
                    url: e.error.url,
                    type: "running"
                })
            }
            ), [])
              , fe = (0,
            r.useCallback)((e => {
                x && x(e),
                "ios" === P && R && !R.getCurrentPageReport() && (R.reportVideoFirstScreen({
                    endTime: Date.now(),
                    videoSource: t
                }),
                R.reportVideoAddition({
                    endTime: Date.now(),
                    videoSource: t
                }))
            }
            ), [R, x, P, t])
              , ye = (0,
            r.useCallback)((e => {
                m && m(e);
                const t = ae();
                L && ne.current && L.handlePause(ee({}, ne.current, t))
            }
            ), [L, ae, m])
              , xe = (0,
            r.useCallback)((e => {
                s && s(e),
                L && ne.current && L.handleEnded(ne.current)
            }
            ), [L, s])
              , be = (0,
            r.useCallback)((e => {
                f && f(e);
                const t = ae();
                L && ne.current && L.handleWaiting(ee({}, ne.current, t))
            }
            ), [L, ae, f])
              , _e = (0,
            r.useCallback)((e => {
                v && v(e),
                R && R.reportVideoInteract({
                    endTime: Date.now(),
                    videoSource: t
                })
            }
            ), [R, v, t])
              , ke = (0,
            r.useCallback)((e => {
                g && g(e);
                const t = ae();
                L && ne.current && L.handleTimeUpdate(ee({}, ne.current, t), !0),
                R && !R.getFirstFrameReport() && R.reportVideoFirstFrame(t.currentTime || 0)
            }
            ), [L, R, ae, g])
              , we = (0,
            r.useCallback)((e => {
                y && y(e),
                L && ne.current && L.handleError(ne.current)
            }
            ), [L, y])
              , Ce = (0,
            r.useCallback)((e => {
                u && u(e),
                "android" === P && R && !R.getCurrentPageReport() && (R.reportVideoFirstScreen({
                    endTime: Date.now(),
                    videoSource: t
                }),
                R.reportVideoAddition({
                    endTime: Date.now(),
                    videoSource: t
                }))
            }
            ), [R, u, P, t])
              , Se = (0,
            r.useCallback)(( () => {
                L && ne.current && L.handlePlayTime(ne.current)
            }
            ), [L]);
            return (0,
            r.useEffect)(( () => {
                i && (W.config.extraVideoInfo = {
                    bitrate: i.bitrate || 0
                })
            }
            ), [i]),
            (0,
            r.useEffect)(( () => () => {
                W.metrics && W.metrics.stop()
            }
            ), [e]),
            $("PlayEnded", ce, "metrics"),
            $("VideoRequest", re, "metrics"),
            $("VideoRequestResponse", le, "metrics"),
            $("BlockStart", se, "metrics"),
            $("Block", he, "metrics"),
            $("PlayQuality", me, "metrics"),
            $("PlayFailed", de, "metrics"),
            $("FirstFrame", ue, "metrics"),
            $("VideoDataSize", pe, "metrics"),
            $("ended", xe, "event"),
            $("loadstart", d, "event"),
            $("loadeddata", c, "event"),
            $("canplay", Ce, "event"),
            $("play", p, "event"),
            $("pause", ye, "event"),
            $("timeupdate", ke, "event"),
            $("playing", _e, "event"),
            $("waiting", be, "event"),
            $("error", we, "event"),
            $("canplaythrough", fe, "event"),
            $("loadedmetadata", b, "event"),
            $("abort", _, "event"),
            $("stalled", w, "event"),
            $("seeking", C, "event"),
            $("seeked", M, "event"),
            $("progress", A, "event"),
            $("autoplayPrevented", E, "event"),
            $("downloaderError", ge, "event"),
            $("playCatch", ve, "event"),
            (0,
            r.useEffect)(( () => {
                let e = G.Cc.TT;
                "XG" !== T && "ios" === P || (e = G.Cc.XG);
                const t = W.usePlayer(e, Y.current, "ios" === V.current);
                if (t && z.current && t.element)
                    return t.forceAutoplay = Y.current.video.autoplay,
                    t.style("zIndex", "3"),
                    t.style("objectFit", "cover"),
                    z.current.appendChild(t.element),
                    () => {
                        t && t.element && t.element.parentNode && (t.element.parentNode.removeChild(t.element),
                        W.release("ios" === V.current))
                    }
            }
            ), [e, T]),
            (0,
            r.useEffect)(( () => {
                W.player && t && W.player.load(t)
            }
            ), [t]),
            (0,
            r.useEffect)(( () => () => {
                Se()
            }
            ), [Se, e]),
            (0,
            r.useEffect)(( () => {
                W.player && N && W.player().then(( () => {
                    F(!1)
                }
                ))
            }
            ), [N]),
            (0,
            r.useImperativeHandle)(U, ( () => ({
                play: () => W.player ? W.player.play() : (F(!0),
                Promise.resolve()),
                pause: () => {
                    W.player && (L && L.triggerPause({
                        enter_method: "click_pause",
                        playMode: n || S.OneColumn
                    }),
                    W.player.pause())
                }
                ,
                load: e => {
                    W.player && W.player.load(e)
                }
                ,
                mute: e => {
                    W.player && W.player.mute(e)
                }
                ,
                style: (e, t) => {
                    W.player && W.player.style(e, t)
                }
                ,
                seek: e => {
                    W.player && W.player.seek(e)
                }
                ,
                addSubtitle: (e, t) => {
                    W.player && W.player.addSubtitle(e, t)
                }
                ,
                buffered: () => W.player ? W.player.buffered() : new TimeRanges,
                getAttributes: () => W.player ? W.player.attributes : D,
                getPlayerType: () => W.player ? W.player.type : "",
                getPlaybackQuality: () => W.player ? W.player.playbackQuality : B
            })), []),
            (0,
            o.jsx)("div", {
                id: "playback_refactor",
                style: {
                    position: "relative",
                    width: "100%",
                    height: "100%"
                },
                ref: z
            })
        }
        )));
        var ie = i(62186)
          , oe = i(84827);
        const ne = (0,
        ie.A)(oe.R, {
            target: "ec2xuek3"
        })({
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3
        }, "label:StyledLoading;")
          , ae = (0,
        ie.A)("div", {
            target: "ec2xuek5"
        })({
            position: "relative",
            width: "100vw",
            height: "100%",
            display: "flex",
            color: "#fff",
            overflow: "hidden"
        }, "label:DivContainerAndroid;")
          , re = (0,
        ie.A)("div", {
            target: "ec2xuek6"
        })(( ({visibility: e}) => ({
            position: "absolute",
            top: 0,
            width: "100vw",
            height: "100%",
            pointerEvents: "none",
            opacity: e ? 1 : 0
        })), "label:DivContaineriOS;")
          , le = (0,
        ie.A)("video", {
            target: "ec2xuek7"
        })(( ({horizontal: e}) => ({
            width: "100%",
            height: "100%",
            objectFit: e ? "contain" : "cover",
            position: "absolute",
            zIndex: 3,
            "::-webkit-media-controls-enclosure": {
                display: "none !important"
            }
        })), "label:VideoMobileBasic;")
          , se = (0,
        ie.A)("img", {
            target: "ec2xuek8"
        })(( ({horizontal: e, forceContain: t, visibility: i}) => ({
            position: "absolute",
            top: "50%",
            left: "0",
            width: "100%",
            height: "100%",
            objectPosition: "50% 50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            display: i ? "block" : "none",
            objectFit: t || e ? "contain" : "cover"
        })), "label:ImgPosterAndroid;")
          , de = (0,
        ie.A)("img", {
            target: "ec2xuek9"
        })(( ({horizontal: e, visibility: t}) => ({
            width: "100%",
            height: "100%",
            display: t ? "block" : "none",
            objectFit: e ? "contain" : "cover"
        })), "label:ImgPosterIOS;");
        var ce = i(38739)
          , ue = i(15343)
          , pe = i(57432)
          , me = i.n(pe);
        const he = (0,
        r.memo)((0,
        r.forwardRef)((function(e, t) {
            const {id: i="", src: n="", index: l, currentIndex: s, teaParams: d, autoPlay: c=!0, muted: u=!1, isGoogleBot: p=!1, horizontal: h=!1, platform: g="", visibility: v=!0, bitrateInfo: f, playerTypeConfig: y="TT", playMode: x=0, onVideoPlay: b=me(), onVideoEnded: k=me(), onVideoCanPlay: C=me(), onVideoPause: S=me(), onVideoPlaying: M=me(), onVideoStatusChanged: A=me(), onVideoError: I=me(), onVideoWaiting: E=me(), onInteract: T=me(), onInteractRequired: j=me(), onLoadingStatusChanged: P=me()} = e
              , [O,L] = (0,
            m.sD)()
              , {forcePlay: B, forcePause: D} = O
              , R = (0,
            r.useRef)(!1)
              , U = (0,
            r.useRef)(!1)
              , z = (0,
            r.useRef)(null)
              , V = (0,
            r.useRef)(d)
              , N = h || ( () => {
                var e;
                let t = !1;
                const {availHeight: i=0, availWidth: o=0} = "undefined" != typeof window && (null === (e = window) || void 0 === e ? void 0 : e.screen) || {};
                return i > 0 && o / i > 1 && (t = !0),
                t
            }
            )()
              , F = (0,
            a.Nj)(ce.Gs)
              , G = (0,
            a.Nj)(ue.AU)
              , [H,W] = (0,
            r.useState)(null)
              , $ = (0,
            r.useCallback)((e => {
                W(e)
            }
            ), [])
              , Z = (0,
            r.useMemo)(( () => s === l), [l, s])
              , q = (0,
            r.useCallback)(( () => {
                V.current && (R.current = !0,
                U.current || (j(),
                U.current = !0))
            }
            ), [j])
              , J = (0,
            r.useCallback)(( () => {
                null == A || A("error")
            }
            ), [A])
              , Y = (0,
            r.useCallback)(( () => {}
            ), [])
              , Q = (0,
            r.useCallback)(( () => {}
            ), [])
              , K = (0,
            r.useCallback)(( () => {
                "android" === g ? Z && P(!1, l) : null == C || C()
            }
            ), [P, C, Z, g, l])
              , X = (0,
            r.useCallback)(( () => {}
            ), [])
              , ee = (0,
            r.useCallback)((e => {
                null == b || b(e)
            }
            ), [b])
              , ie = (0,
            r.useCallback)((e => {
                null == S || S(e),
                H && Z && (null == A || A("pause"),
                "android" === g && P(!1, l))
            }
            ), [H, Z, S, A, P, g, l])
              , oe = (0,
            r.useCallback)(( () => {}
            ), [])
              , ne = (0,
            r.useCallback)(( () => {}
            ), [])
              , se = (0,
            r.useCallback)((e => {
                Z && ("android" === g && P(!1, l),
                null == M || M(e),
                null == A || A("playing"))
            }
            ), [Z, P, M, A, g, l])
              , de = (0,
            r.useCallback)((e => {
                "ios" === g && (null == E || E(e)),
                Z && ("android" === g && P(!0, l),
                null == A || A("waiting"))
            }
            ), [Z, A, E, P, l, g])
              , pe = (0,
            r.useCallback)(( () => (0,
            _.sH)(this, void 0, void 0, (function*() {
                if (Z && H)
                    try {
                        yield H.play()
                    } catch (e) {
                        null == I || I()
                    }
            }
            ))), [H, Z, I])
              , he = (0,
            r.useCallback)(( () => {
                if (H)
                    try {
                        H.pause()
                    } catch (e) {}
            }
            ), [H, Z])
              , ge = (0,
            r.useCallback)((e => {
                Z && H && H.seek(e)
            }
            ), [Z, H])
              , ve = (0,
            r.useCallback)(( () => (0,
            _.sH)(this, void 0, void 0, (function*() {
                var e;
                try {
                    Z && H && (yield H.play())
                } catch (t) {
                    return null == q || q(),
                    "ios" === g && (null == I || I()),
                    null !== (e = t.message) && void 0 !== e ? e : ""
                }
                return ""
            }
            ))), [H, Z, J, I, g])
              , fe = (0,
            r.useCallback)((e => {
                null == q || q(),
                e.message.match("request was interrupted by a call to pause") || null == J || J(),
                (e.message.match("failed because the user didn't interact with the document first.") || e.message.match("The request is not allowed by the user agent or the platform in the current context") || e.message.match("The play method is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.")) && L.setMobileDefaultMute(!0)
            }
            ), [])
              , ye = (0,
            r.useCallback)((e => {
                Z && (null == A || A("ended"),
                null == k || k(e),
                ve())
            }
            ), [Z, k, A, ve])
              , xe = (0,
            r.useCallback)(( () => {
                null == A || A("error"),
                "android" === g && P(!1, l),
                null == I || I()
            }
            ), [I, A, P, l, g]);
            (0,
            r.useEffect)(( () => {
                B && ve()
            }
            ), [B, ve]),
            (0,
            r.useEffect)(( () => {
                H && D && H.pause()
            }
            ), [H, D]),
            (0,
            r.useEffect)(( () => {
                H && H.style("objectFit", N ? "contain" : "cover")
            }
            ), [H, N]),
            (0,
            r.useImperativeHandle)(t, ( () => ({
                play: () => {
                    pe(),
                    R.current && (R.current = !1,
                    T())
                }
                ,
                pause: () => {
                    he()
                }
                ,
                seek: e => {
                    ge(e)
                }
                ,
                addSubtitle: (e, t) => (0,
                _.sH)(this, void 0, void 0, (function*() {
                    return H ? H.addSubtitle(e, t) : Promise.resolve()
                }
                )),
                get currentTime() {
                    var e;
                    if (!H)
                        return 0;
                    const t = H.getAttributes();
                    return t && null !== (e = t.currentTime) && void 0 !== e ? e : 0
                }
            })), [H, he, pe, ge, T]);
            const be = (0,
            r.useMemo)(( () => (0,
            o.jsx)("div", {
                children: (0,
                o.jsx)(le, {
                    preload: "none",
                    ref: z,
                    horizontal: h,
                    muted: u,
                    playsInline: !0,
                    src: n
                })
            })), [h, u, n])
              , _e = (0,
            r.useMemo)(( () => (0 === l || p) && w() ? be : (0,
            o.jsx)(te, {
                id: i,
                url: n,
                teaParams: d,
                ref: $,
                muted: u,
                mode: x,
                autoplay: c,
                onwaiting: de,
                onloadeddata: Q,
                onerror: xe,
                oncanplay: K,
                onplay: ee,
                onplaying: se,
                onpause: ie,
                onloadstart: Y,
                ontimeupdate: oe,
                oncanplaythrough: X,
                onended: ye,
                onprogress: ne,
                onAutoplayPrevented: fe,
                playerTypeConfig: y,
                platform: "android",
                videoPlayReport: F,
                videoExperienceReport: G,
                bitrateInfo: f
            })), [$, c, Z, n, u, d, ye, xe, de, se, oe, ie, ee, X, K, Q, Y, l, be, p, s])
              , ke = (0,
            r.useMemo)(( () => w() ? be : (0,
            o.jsx)(te, {
                id: null == d ? void 0 : d.group_id,
                url: n,
                teaParams: d,
                ref: $,
                muted: u,
                mode: x,
                autoplay: c,
                onwaiting: de,
                onloadeddata: Q,
                onerror: xe,
                oncanplay: K,
                onplay: ee,
                onplaying: se,
                onpause: ie,
                onloadstart: Y,
                ontimeupdate: oe,
                oncanplaythrough: X,
                onended: ye,
                onprogress: ne,
                onAutoplayPrevented: fe,
                playerTypeConfig: y,
                platform: "ios",
                videoPlayReport: F,
                videoExperienceReport: G,
                bitrateInfo: f
            })), [ne, $, u, c, n, d, ye, xe, de, se, oe, ie, ee, X, K, Q, Y, l, be]);
            return "android" === g ? (0,
            o.jsx)(ae, {
                id: "tiktok-webapp-mobile-player-container",
                children: Z && _e
            }) : "ios" === g ? (0,
            o.jsx)(re, {
                id: "tiktok-webapp-mobile-player-container",
                visibility: v,
                children: Z && ke
            }) : null
        }
        )));
        var ge, ve = i(6888), fe = i(4474);
        !function(e) {
            e.ManualClick = "manual_click",
            e.Auto = "auto",
            e.Keyboard = "keyboard"
        }(ge || (ge = {}));
        const ye = (e, t) => {
            const {itemId: i, authorId: o, autoplayStatus: n=0, searchId: a="", searchKeyword: r, searchResultId: l, questionId: s, isMute: d=!1, fromTab: c, collectionId: u, collectionName: p, isPaidPartnership: m=!1, poiId: g, duration: v, awemeType: f, picCnt: y, tab_name: x, playMode: b, enterMethod: _} = t
              , k = Object.assign({
                group_id: i,
                author_id: o,
                autoplay_status: n,
                search_id: a,
                search_keyword: r,
                search_result_id: l,
                question_id: s,
                from_tab: c,
                collection_id: u,
                collection_name: p,
                poi_id: g,
                duration: v,
                aweme_type: null != f ? f : 0,
                pic_cnt: y,
                tab_name: x,
                play_mode: A[b],
                enter_method: _
            }, ( () => {
                var e;
                const {href: t, search: i} = window.location;
                return {
                    is_from_webapp: null !== (e = (0,
                    fe.parse)(i).is_from_webapp) && void 0 !== e ? e : "0",
                    page_url: t
                }
            }
            )());
            k.is_mute = d ? "1" : "0",
            k.is_partnership = m ? "1" : "0",
            h.f.sendEvent(e, k)
        }
        ;
        var xe = i(89311)
          , be = i(3440)
          , _e = i(47815);
        const ke = {
            0: {
                forceMute: !1,
                defaultMute: !1
            },
            1: {
                forceMute: !1,
                defaultMute: !0
            },
            2: {
                forceMute: !1,
                defaultMute: !1
            },
            3: {
                forceMute: !1,
                defaultMute: !1
            },
            4: {
                forceMute: !1,
                defaultMute: !1
            },
            6: {
                forceMute: !1,
                defaultMute: !1
            },
            5: {
                forceMute: !1,
                defaultMute: !1
            },
            7: {
                forceMute: !1,
                defaultMute: !1
            },
            8: {
                forceMute: !1,
                defaultMute: !1
            },
            9: {
                forceMute: !1,
                defaultMute: !1
            }
        };
        var we, Ce = i(42983), Se = i(87802);
        !function(e) {
            e.NoInteract = "failed because the user didn't interact with the document first.",
            e.SafariNoInteract = "The request is not allowed by the user agent or the platform in the current context"
        }(we || (we = {}));
        const Me = e => ({
            buffered: null == e ? void 0 : e.buffered,
            currentSrc: null == e ? void 0 : e.currentSrc,
            currentTime: null == e ? void 0 : e.currentTime,
            duration: null == e ? void 0 : e.duration,
            readyState: null == e ? void 0 : e.readyState,
            error: null == e ? void 0 : e.error,
            volume: null == e ? void 0 : e.volume,
            muted: null == e ? void 0 : e.muted
        })
          , Ae = (0,
        r.memo)((0,
        r.forwardRef)((function(e, t) {
            var {playProgress: i, muteSetting: n, onUnmount: a, onEnded: l, onWaiting: s, onError: d, disableDownload: c=!1, itemMute: u=!1} = e
              , p = (0,
            _.Tt)(e, ["playProgress", "muteSetting", "onUnmount", "onEnded", "onWaiting", "onError", "disableDownload", "itemMute"]);
            const m = (0,
            r.useRef)(null)
              , h = (0,
            r.useRef)(!1)
              , {mute: g, volume: v, playing: f} = (0,
            Ce.O2)(n)
              , {setMute: y} = (0,
            Se.S4)();
            (0,
            r.useImperativeHandle)(t, ( () => {
                const e = m.current;
                return {
                    play: null == e ? void 0 : e.play.bind(e),
                    pause: null == e ? void 0 : e.pause.bind(e),
                    onTimeUpdate: t => {
                        null == e || e.addEventListener("timeupdate", ( () => {
                            var i, o;
                            const n = null !== (i = e.currentTime) && void 0 !== i ? i : 0
                              , a = null !== (o = e.duration) && void 0 !== o ? o : 0;
                            t(n / a, n, a)
                        }
                        ))
                    }
                    ,
                    onCanPlay: t => {
                        null == e || e.addEventListener("canplay", t)
                    }
                    ,
                    getPlayerAttributes: () => Me(e)
                }
            }
            ));
            const x = (0,
            r.useCallback)(( (e=0) => (0,
            _.sH)(this, void 0, void 0, (function*() {
                var t, i, o;
                if (!(e >= 3))
                    try {
                        yield null === (t = m.current) || void 0 === t ? void 0 : t.play()
                    } catch (t) {
                        const n = null !== (i = null == t ? void 0 : t.message) && void 0 !== i ? i : "";
                        (null !== (o = n.match("failed because the user didn't interact with the document first.")) && void 0 !== o ? o : n.match("The request is not allowed by the user agent or the platform in the current context")) ? (y(!0),
                        setTimeout(( () => {
                            x(e + 1)
                        }
                        ), 0)) : x(e + 1),
                        null == d || d(t)
                    }
            }
            ))), [y]);
            (0,
            r.useEffect)(( () => {
                m.current && (m.current.volume = v)
            }
            ), [v]),
            (0,
            r.useEffect)(( () => {
                x(),
                m.current && Math.abs(m.current.currentTime - i) > .2 && (m.current.currentTime = i)
            }
            ), [i, x]),
            (0,
            r.useEffect)(( () => {
                var e;
                f ? h.current && (h.current = !1,
                x()) : (h.current = !0,
                null === (e = m.current) || void 0 === e || e.pause())
            }
            ), [f, x]),
            (0,
            r.useEffect)(( () => {
                const e = m.current;
                return () => {
                    null == a || a(Me(e))
                }
            }
            ), []),
            (0,
            r.useEffect)(( () => {
                c && (m.current.oncontextmenu = e => (e.preventDefault(),
                !1))
            }
            ), [c, m]);
            const b = (0,
            r.useCallback)((e => {
                null == s || s(e)
            }
            ), [s])
              , k = (0,
            r.useCallback)((e => {
                null == l || l(e),
                x()
            }
            ), [l, x]);
            return (0,
            o.jsx)("audio", Object.assign({
                ref: m
            }, p, {
                muted: u || g,
                playsInline: !0,
                autoPlay: !0,
                onEnded: k,
                onWaiting: b
            }))
        }
        )));
        var Ie;
        !function(e) {
            e.NoInteract = "failed because the user didn't interact with the document first.",
            e.SafariNoInteract = "The request is not allowed by the user agent or the platform in the current context"
        }(Ie || (Ie = {}));
        const Ee = e => ({
            buffered: null == e ? void 0 : e.buffered,
            currentSrc: null == e ? void 0 : e.currentSrc,
            currentTime: null == e ? void 0 : e.currentTime,
            duration: null == e ? void 0 : e.duration,
            readyState: null == e ? void 0 : e.readyState,
            error: null == e ? void 0 : e.error,
            volume: null == e ? void 0 : e.volume,
            muted: null == e ? void 0 : e.muted
        })
          , Te = (0,
        r.memo)((0,
        r.forwardRef)((function(e, t) {
            var {playProgress: i, muteSetting: n, onUnmount: a, onEnded: l, onWaiting: s, onError: d, disableDownload: c=!1, itemMute: u=!1} = e
              , p = (0,
            _.Tt)(e, ["playProgress", "muteSetting", "onUnmount", "onEnded", "onWaiting", "onError", "disableDownload", "itemMute"]);
            const h = (0,
            r.useRef)(null)
              , g = (0,
            m.M2)()
              , {setMobileDefaultMute: v, setForcePause: f} = (0,
            m._B)();
            (0,
            r.useImperativeHandle)(t, ( () => {
                const e = h.current;
                return {
                    play: null == e ? void 0 : e.play.bind(e),
                    pause: null == e ? void 0 : e.pause.bind(e),
                    onTimeUpdate: t => {
                        null == e || e.addEventListener("timeupdate", ( () => {
                            var i, o;
                            const n = null !== (i = e.currentTime) && void 0 !== i ? i : 0
                              , a = null !== (o = e.duration) && void 0 !== o ? o : 0;
                            t(n / a, n, a)
                        }
                        ))
                    }
                    ,
                    onCanPlay: t => {
                        null == e || e.addEventListener("canplay", t)
                    }
                    ,
                    getPlayerAttributes: () => Ee(e)
                }
            }
            ));
            const y = (0,
            r.useCallback)(( () => (0,
            _.sH)(this, void 0, void 0, (function*() {
                var e, t, i;
                try {
                    yield null === (t = null === (e = h.current) || void 0 === e ? void 0 : e.play) || void 0 === t ? void 0 : t.call(e)
                } catch (e) {
                    return null == d || d(e),
                    null !== (i = e.message) && void 0 !== i ? i : ""
                }
                return ""
            }
            ))), [d])
              , x = (0,
            r.useCallback)(( () => {
                y().then((e => {
                    (e.match("failed because the user didn't interact with the document first.") || e.match("The request is not allowed by the user agent or the platform in the current context")) && (f(!1),
                    v(!0))
                }
                ))
            }
            ), [f, v, y]);
            (0,
            r.useEffect)(( () => {
                h.current && x()
            }
            ), [x]),
            (0,
            r.useEffect)(( () => {
                const e = h.current;
                return () => {
                    null == a || a(Ee(e))
                }
            }
            ), []),
            (0,
            r.useEffect)(( () => {
                c && (h.current.oncontextmenu = e => (e.preventDefault(),
                !1))
            }
            ), [c, h]);
            const b = (0,
            r.useCallback)((e => {
                null == s || s(e)
            }
            ), [s])
              , k = (0,
            r.useCallback)((e => {
                null == l || l(e),
                y()
            }
            ), [l, y]);
            return (0,
            o.jsx)("audio", Object.assign({
                ref: h
            }, p, {
                muted: u || g,
                playsInline: !0,
                autoPlay: !0,
                onEnded: k,
                onWaiting: b
            }))
        }
        )))
          , je = (0,
        r.memo)((0,
        r.forwardRef)((function({playUrl: e, id: t, teaParams: i, index: n, mode: l, itemMute: s, onAudioPause: p, onAudioPlaying: m, onAudioPlay: h, onAudioEnded: g, onAudioError: v, onTimeUpdate: f}, y) {
            var b;
            const {isAndroid: _=!1, isMobile: k=!1} = null !== (b = (0,
            u.U)(( () => ["isMobile", "isAndroid"]), [])) && void 0 !== b ? b : {}
              , {currentVideo: w, playProgress: C} = (0,
            _e.MY)()
              , S = (0,
            d.Ih)()
              , M = (0,
            r.useRef)(null)
              , A = (0,
            r.useRef)(null)
              , I = (0,
            a.Nj)(ce.Gs)
              , E = new be.re
              , T = (0,
            a.Nj)(ue.AU)
              , [j,P] = (0,
            r.useState)(!1)
              , O = (0,
            r.useCallback)(( () => {
                var e, t;
                null === (t = null === (e = M.current) || void 0 === e ? void 0 : e.play) || void 0 === t || t.call(e)
            }
            ), [])
              , L = (0,
            r.useCallback)(( () => {
                var e, t;
                null === (t = null === (e = M.current) || void 0 === e ? void 0 : e.pause) || void 0 === t || t.call(e)
            }
            ), [])
              , B = (0,
            r.useMemo)(( () => {
                if (k) {
                    if (!S)
                        return !1;
                    const {id: e, index: i} = S;
                    return !_ || e === t && i === n
                }
                if (!w)
                    return !1;
                const {id: e, index: i, mode: o} = w;
                return e === t && i === n && o === l
            }
            ), [k, w, t, n, l, S, _]);
            (0,
            r.useImperativeHandle)(y, ( () => ({
                play: () => {
                    O(),
                    A.current = !0
                }
                ,
                pause: () => {
                    L(),
                    A.current = !1
                }
                ,
                onTimeUpdate: e => {
                    var t;
                    null === (t = M.current) || void 0 === t || t.onTimeUpdate(e)
                }
                ,
                get currentTime() {
                    var e, t;
                    return null !== (t = null === (e = M.current) || void 0 === e ? void 0 : e.getPlayerAttributes().currentTime) && void 0 !== t ? t : 0
                },
                get duration() {
                    var e, t;
                    return null !== (t = null === (e = M.current) || void 0 === e ? void 0 : e.getPlayerAttributes().duration) && void 0 !== t ? t : 0
                },
                get currentCanPlay() {
                    return B && j
                }
            })), [O, L, B, j]),
            (0,
            r.useEffect)(( () => {
                B || P(!1)
            }
            ), [B]);
            const D = (0,
            x.jj)();
            (0,
            r.useEffect)(( () => {
                const e = null === A.current || A.current;
                D && e ? O() : L()
            }
            ), [D, O, L, I, B, l]);
            const R = (0,
            r.useCallback)(( () => {
                var o;
                const n = (0,
                c.L$)(null === (o = M.current) || void 0 === o ? void 0 : o.getPlayerAttributes())
                  , {bitrate: a, author_id: r, format: s, encodedType: d, videoQuality: u, encodeUserTag: p, codecType: m, definition: h, secret: g, forFriend: v, aweme_type: f, pic_cnt: y} = i;
                return Object.assign({
                    id: t,
                    authorId: r,
                    playMode: l,
                    bitrate: a,
                    format: s,
                    encodedType: d,
                    videoQuality: u,
                    encodeUserTag: p,
                    codecType: m,
                    definition: h,
                    secret: g,
                    forFriend: v,
                    play_url: e,
                    awemeType: f,
                    picCnt: y
                }, null != n ? n : {})
            }
            ), [t, l, i, e])
              , {handlePauseWithLoading: U, handlePlayingWithLoading: z} = (0,
            x.iJ)({
                isCurrentVideo: B
            })
              , V = (0,
            r.useCallback)(( () => {
                E.handleLoadStart(R())
            }
            ), [E, R])
              , N = (0,
            r.useCallback)((e => {
                null == h || h(e)
            }
            ), [h])
              , F = (0,
            r.useCallback)(( () => {
                var e;
                const {currentTime: t=0, duration: i=0} = (0,
                c.L$)(null === (e = M.current) || void 0 === e ? void 0 : e.getPlayerAttributes());
                E.handleTimeUpdate(R()),
                null == f || f(t / i)
            }
            ), [E, R, f])
              , G = (0,
            r.useCallback)((e => {
                null == p || p(e),
                U()
            }
            ), [p, U])
              , H = (0,
            r.useCallback)((t => {
                null == m || m(t),
                z(),
                T.reportVideoInteract({
                    endTime: Date.now(),
                    videoSource: e
                })
            }
            ), [m, z, T, e])
              , W = (0,
            r.useCallback)((e => {
                null == g || g(e),
                E.handleEnded()
            }
            ), [g, E]);
            return (0,
            r.useEffect)(( () => () => {
                E.resetWhenSlideChange(Object.assign({}, R()))
            }
            ), [e]),
            B ? k ? (0,
            o.jsx)(Te, {
                ref: M,
                c: !0,
                muteSetting: s || ke[l].forceMute,
                defaultMute: ke[l].defaultMute,
                playProgress: null != C ? C : 0,
                src: e,
                onTimeUpdate: F,
                onError: v,
                onPause: G,
                onPlay: N,
                onPlaying: H,
                onEnded: W,
                onLoadStart: V
            }) : (0,
            o.jsx)(Ae, {
                ref: M,
                c: !0,
                muteSetting: s || ke[l].forceMute,
                defaultMute: ke[l].defaultMute,
                playProgress: null != C ? C : 0,
                src: e,
                onTimeUpdate: F,
                onError: v,
                onPause: G,
                onPlay: N,
                onPlaying: H,
                onEnded: W,
                onLoadStart: V
            }) : null
        }
        )))
          , Pe = (0,
        ie.A)("div", {
            target: "e10jea830"
        })(( ({isMobile: e}) => e ? {
            position: "absolute",
            top: "0",
            width: "100vw",
            height: "100%",
            pointerEvents: "none",
            opacity: "1"
        } : {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundColor: "black",
            borderRadius: "8px"
        }), "label:DivPhotoVideoContainer;")
          , Oe = (0,
        ie.A)("div", {
            target: "e10jea831"
        })({
            width: "100%",
            height: "100%"
        }, "label:DivSwiperContainer;")
          , Le = (0,
        ie.A)("img", {
            target: "e10jea832"
        })({
            height: "100%",
            width: "100%",
            objectFit: "contain"
        }, "label:ImgPhotoSlide;");
        var Be = i(47569)
          , De = i(15520)
          , Re = i(32125);
        const Ue = {
            delay: 2500,
            disableOnInteraction: !1
        }
          , ze = (0,
        r.memo)((0,
        r.forwardRef)((function({show: e=!0, item: t, playMode: i, index: n, teaParams: d, onAudioPlay: p, onAudioError: m, onTimeUpdate: h, onFinish: g, isActive: v=!0, shouldAutostart: f=!0}, x) {
            var b, k, w, C, S;
            const {video: {duration: M, volumeInfo: A}, id: I, itemMute: E=!1} = (0,
            c.L$)(t)
              , T = null !== (k = null === (b = null == t ? void 0 : t.music) || void 0 === b ? void 0 : b.playUrl) && void 0 !== k ? k : ""
              , j = null !== (C = null === (w = null == t ? void 0 : t.imagePost) || void 0 === w ? void 0 : w.images) && void 0 !== C ? C : []
              , {isMobile: P=!1} = null !== (S = (0,
            u.U)(( () => ["isMobile"]), [])) && void 0 !== S ? S : {}
              , O = (0,
            Be.mG)()
              , L = (0,
            De.nW)((e => (null == t ? void 0 : t.author) ? e.users[t.author] : void 0), Re.bN)
              , [B,D] = (0,
            r.useState)(!1)
              , [R,U] = (0,
            r.useState)(!1)
              , z = (0,
            r.useRef)(!1)
              , V = (0,
            r.useRef)(-1)
              , N = (0,
            r.useRef)(-1)
              , F = (0,
            r.useRef)(!1)
              , G = (0,
            r.useRef)(null)
              , H = (0,
            r.useRef)(null)
              , W = (0,
            r.useRef)([])
              , {isRTL: $} = (0,
            xe.m)()
              , Z = (0,
            _e.eu)()
              , q = (0,
            Se.i3)()
              , {handleBreakCount: J} = (e => {
                const {updateGlobalVVCount: t} = (0,
                _e.nr)()
                  , i = (0,
                _e.eu)()
                  , o = (0,
                r.useCallback)(( () => {
                    t(e)
                }
                ), [t, e])
                  , n = (0,
                r.useCallback)(( () => {
                    (4 === e || 2 === e && i) && t(e)
                }
                ), [t, e]);
                return (0,
                r.useMemo)(( () => ({
                    handleBreakCount: o,
                    handleVvCountOnEnd: n
                })), [e])
            }
            )(i)
              , Y = (0,
            r.useMemo)(( () => v && (j.length > 1 || Z)), [v, Z, j.length])
              , Q = (0,
            r.useMemo)(( () => [""]), [])
              , K = $ ? "rtl" : "ltr"
              , {aweme_type: X, pic_cnt: ee} = (0,
            y.MA)(t)
              , te = (0,
            r.useMemo)(( () => Object.assign(Object.assign({}, d), {
                aweme_type: X,
                pic_cnt: ee
            })), [X, ee, d])
              , ie = (0,
            r.useMemo)(( () => {
                const {group_id: e="", author_id: t="", is_scheduled: o, search_id: n, search_keyword: a, search_result_id: r, question_id: l, collection_id: s, collection_name: c, isPaidPartnership: u, poi_id: p, tab_name: m, isReposted: h, enter_method: g} = d || {};
                return {
                    itemId: e,
                    authorId: t,
                    isScheduled: Boolean(o),
                    autoplayStatus: 1,
                    searchId: n,
                    searchKeyword: a,
                    searchResultId: r,
                    questionId: l,
                    playMode: i,
                    isMute: q,
                    collectionId: s,
                    collectionName: c,
                    isPaidPartnership: Boolean(u),
                    poiId: p,
                    awemeType: X,
                    picCnt: ee,
                    isReposted: h,
                    tab_name: m,
                    enterMethod: g
                }
            }
            ), [X, i, q, ee, d])
              , oe = (0,
            r.useMemo)(( () => Object.assign(Object.assign({}, ie), {
                currentTime: 0,
                duration: 0
            })), [ie])
              , ne = (0,
            a.Nj)(ce.Gs)
              , ae = () => {
                if (V.current <= 0)
                    return;
                const e = Number(new Date) - V.current;
                oe.duration = e,
                2 !== i && ye("play_time", oe)
            }
              , re = (0,
            r.useCallback)(( () => {
                var e;
                if (j.length > 1) {
                    const t = null === (e = H.current) || void 0 === e ? void 0 : e.autoplay;
                    null == t || t.start()
                }
                ne.triggerPlay(),
                V.current = Number(new Date),
                z.current = !1
            }
            ), [j.length, ne])
              , le = (0,
            r.useCallback)((e => {
                var t;
                const o = null === (t = H.current) || void 0 === t ? void 0 : t.autoplay;
                null == o || o.stop(),
                ne.triggerPause({
                    aweme_type: X,
                    pic_cnt: ee,
                    enter_method: e,
                    playMode: i
                }),
                v && ae()
            }
            ), [X, i, ee, ne, v]);
            (0,
            r.useEffect)(( () => {
                const e = () => {
                    var e, t, i, o;
                    document.hidden ? (v && le("other"),
                    null === (t = null === (e = G.current) || void 0 === e ? void 0 : e.pause) || void 0 === t || t.call(e)) : v && (re(),
                    null === (o = null === (i = G.current) || void 0 === i ? void 0 : i.play) || void 0 === o || o.call(i))
                }
                ;
                return document.addEventListener("visibilitychange", e),
                () => document.removeEventListener("visibilitychange", e)
            }
            ), [v]),
            (0,
            r.useEffect)(( () => {
                B && v && (V.current = Number(new Date),
                N.current = V.current,
                ye("video_play", oe),
                ne.handleAudioPlay(I),
                ne.triggerPlay(),
                z.current = !1)
            }
            ), [B, v]),
            (0,
            r.useEffect)(( () => {
                var e;
                if (Y) {
                    const t = null === (e = H.current) || void 0 === e ? void 0 : e.autoplay;
                    null == t || t.start()
                }
            }
            ), [Y]),
            (0,
            r.useEffect)(( () => U(!0)), []);
            const se = (0,
            r.useCallback)(( () => {
                J(),
                (0 !== i || v) && ae()
            }
            ), [oe, i, v])
              , de = (0,
            r.useCallback)(( () => {
                var e, t, o;
                if (4 !== i) {
                    null === (t = null === (e = G.current) || void 0 === e ? void 0 : e.pause) || void 0 === t || t.call(e);
                    const i = null === (o = H.current) || void 0 === o ? void 0 : o.autoplay;
                    null == i || i.stop()
                }
                null == g || g()
            }
            ), [i, g])
              , ue = (0,
            r.useCallback)((e => {
                e.realIndex === j.length - 1 && (z.current ? Z && de() : (J(),
                ye("video_play_finish", oe),
                z.current = !0,
                j.length > 1 && Z && de()))
            }
            ), [j.length, oe, Z])
              , pe = (0,
            r.useCallback)(( () => {
                F.current = !0
            }
            ), [])
              , me = (0,
            r.useCallback)(( () => {
                F.current = !1
            }
            ), [])
              , he = (0,
            r.useCallback)((e => {
                j.length
            }
            ), [j.length])
              , ge = (0,
            r.useCallback)((e => {
                const i = t
                  , {author: o} = i
                  , n = (0,
                _.Tt)(i, ["author"]);
                for (let t = 0; t < n.imagePost.images.length; t++) {
                    const i = e.slides[t].firstElementChild
                      , o = i.naturalHeight
                      , a = i.naturalWidth;
                    n.imagePost.images[t].imageHeight = o,
                    n.imagePost.images[t].imageWidth = a
                }
                n.author = L,
                O.setItem(n)
            }
            ), [L, t, O]);
            return (0,
            r.useImperativeHandle)(x, ( () => ({
                audio: {
                    play: () => {
                        var e, t;
                        null === (t = null === (e = G.current) || void 0 === e ? void 0 : e.play) || void 0 === t || t.call(e)
                    }
                    ,
                    pause: () => {
                        var e, t;
                        null === (t = null === (e = G.current) || void 0 === e ? void 0 : e.pause) || void 0 === t || t.call(e)
                    }
                    ,
                    onTimeUpdate: e => {
                        var t;
                        null === (t = G.current) || void 0 === t || t.onTimeUpdate(e)
                    }
                    ,
                    get currentTime() {
                        var e, t;
                        return null !== (t = null === (e = G.current) || void 0 === e ? void 0 : e.currentTime) && void 0 !== t ? t : 0
                    },
                    get duration() {
                        var e, t;
                        return null !== (t = null === (e = G.current) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0
                    },
                    get currentCanPlay() {
                        var e, t;
                        return null !== (t = null === (e = G.current) || void 0 === e ? void 0 : e.currentCanPlay) && void 0 !== t && t
                    }
                },
                swiper: {
                    play: re,
                    pause: le,
                    slidePrev: e => {
                        var t, i;
                        F.current || (null === (t = H.current) || void 0 === t || t.slidePrev(),
                        null === (i = H.current) || void 0 === i || i.autoplay.stop(),
                        N.current === V.current && (N.current = Number(new Date)),
                        j.length)
                    }
                    ,
                    slideNext: e => {
                        var t, i;
                        F.current || (null === (t = H.current) || void 0 === t || t.slideNext(),
                        null === (i = H.current) || void 0 === i || i.autoplay.stop(),
                        N.current === V.current && (N.current = Number(new Date)),
                        j.length)
                    }
                    ,
                    slideToLoop: e => {
                        var t;
                        null === (t = H.current) || void 0 === t || t.slideToLoop(e)
                    }
                    ,
                    onActiveIndexChange: e => {
                        W.current.push(e);
                        const t = H.current;
                        t && (t.off("activeIndexChange"),
                        W.current.forEach((e => t.on("activeIndexChange", e))))
                    }
                    ,
                    get paused() {
                        var e;
                        return !(null === (e = H.current) || void 0 === e ? void 0 : e.autoplay.running)
                    }
                }
            }))),
            R ? (0,
            o.jsxs)(Pe, {
                isMobile: P,
                children: [(0,
                o.jsx)("link", {
                    rel: "stylesheet",
                    href: l
                }), e && (0,
                o.jsx)(Oe, {
                    children: j.length > 0 ? (0,
                    o.jsx)(s.RC, {
                        loop: !0,
                        onInit: e => {
                            H.current = e,
                            W.current.forEach((t => e.on("activeIndexChange", t)))
                        }
                        ,
                        style: {
                            height: "100%",
                            zIndex: 0
                        },
                        speed: 800,
                        dir: K,
                        modules: [ve.Ij],
                        autoplay: !(!Y || !f) && Ue,
                        allowSlideNext: Y,
                        allowSlidePrev: Y,
                        preventClicks: !1,
                        preventClicksPropagation: !1,
                        onAfterInit: () => D(!0),
                        onImagesReady: e => {
                            ge(e)
                        }
                        ,
                        onDestroy: se,
                        onSlideNextTransitionEnd: ue,
                        onSlideChangeTransitionStart: pe,
                        onSlideChangeTransitionEnd: me,
                        onAutoplay: he,
                        slidesPerView: "auto",
                        touchStartPreventDefault: !1,
                        children: j.map((e => {
                            var t, i;
                            return (0,
                            o.jsx)(s.qr, {
                                style: {
                                    height: "100%"
                                },
                                children: (0,
                                o.jsx)(Le, {
                                    src: (null !== (t = e.imageURL.urlList) && void 0 !== t ? t : Q)[0]
                                })
                            }, (null !== (i = e.imageURL.urlList) && void 0 !== i ? i : Q)[0])
                        }
                        ))
                    }) : null
                }), (0,
                o.jsx)(je, {
                    ref: G,
                    index: n,
                    id: I,
                    mode: i,
                    duration: M,
                    playUrl: T,
                    teaParams: te,
                    volumeInfo: A,
                    itemMute: E,
                    onAudioPlay: p,
                    onAudioError: m,
                    onTimeUpdate: h,
                    preload: "metadata",
                    playsInline: !0
                })]
            }) : null
        }
        )));
        var Ve = i(36576)
          , Ne = i(48578);
        function Fe() {
            const {isIOS: e} = (0,
            c.L$)((0,
            u.U)(( () => ["isIOS"]), []))
              , {isEchoShow: t, isTtincar: i} = (0,
            v.Qt)();
            return {
                shouldUseIOSPlayer: (0,
                r.useMemo)(( () => t || e || i), [t, e, i])
            }
        }
        var Ge = i(50007)
          , He = i(8331)
          , We = i(62256)
          , $e = i(28303)
          , Ze = i(59782)
          , qe = i(2827);
        const Je = {
            videoAttributes: {
                buffered: void 0,
                currentSrc: void 0,
                currentTime: void 0,
                duration: void 0,
                readyState: void 0,
                error: void 0
            }
        };
        function Ye() {
            const e = {
                _handleLoadStart: me(),
                _handleLoadedData: me(),
                _handleCanPlay: me(),
                _handlePlay: me(),
                _handlePause: me(),
                _handleTimeUpdate: me(),
                _handlePlaying: me(),
                _handleWaiting: me(),
                _handleEnded: me(),
                _handleError: me(),
                _handleUnmount: me(),
                _handleTryPlayError: me(),
                _handleStatusChanged: me(),
                handleLoadStart() {
                    e._handleLoadStart()
                },
                handleLoadedData() {
                    e._handleLoadedData()
                },
                handleCanPlay() {
                    e._handleCanPlay()
                },
                handlePlay() {
                    e._handlePlay()
                },
                handlePause() {
                    e._handlePause()
                },
                handleTimeUpdate() {
                    e._handleTimeUpdate()
                },
                handlePlaying() {
                    e._handlePlaying()
                },
                handleWaiting() {
                    e._handleWaiting()
                },
                handleEnded() {
                    e._handleEnded()
                },
                handleError() {
                    e._handleError()
                },
                handleUnmount() {
                    e._handleUnmount()
                },
                handleTryPlayError() {
                    e._handleTryPlayError()
                },
                handleStatusChanged(...t) {
                    e._handleStatusChanged(...t)
                },
                bindHandleLoadStart(t) {
                    e._handleLoadStart = t
                },
                bindHandleLoadedData(t) {
                    e._handleLoadedData = t
                },
                bindHandleCanPlay(t) {
                    e._handleCanPlay = t
                },
                bindHandlePlay(t) {
                    e._handlePlay = t
                },
                bindHandlePause(t) {
                    e._handlePause = t
                },
                bindHandleTimeUpdate(t) {
                    e._handleTimeUpdate = t
                },
                bindHandlePlaying(t) {
                    e._handlePlaying = t
                },
                bindHandleWaiting(t) {
                    e._handleWaiting = t
                },
                bindHandleEnded(t) {
                    e._handleEnded = t
                },
                bindHandleError(t) {
                    e._handleError = t
                },
                bindHandleUnmount(t) {
                    e._handleUnmount = t
                },
                bindHandleTryPlayError(t) {
                    e._handleTryPlayError = t
                },
                bindhandleStatusChanged(t) {
                    e._handleStatusChanged = t
                },
                setPlayerAttributes: me(),
                setVideoRef: me(),
                videoRef: null
            };
            return e
        }
        const Qe = (0,
        r.createContext)(Ye())
          , Ke = (0,
        r.createContext)(Je)
          , Xe = e => {
            const [t,i] = (0,
            qe.$)(Je)
              , n = (0,
            r.useRef)(Ye())
              , a = (0,
            r.useRef)(!0);
            return a.current && (n.current.setPlayerAttributes = e => i((t => Object.assign(Object.assign({}, t), {
                videoAttributes: e
            }))),
            n.current.setVideoRef = e => {
                n.current.videoRef = e
            }
            ,
            a.current = !1),
            (0,
            o.jsx)(Qe.Provider, {
                value: n.current,
                children: (0,
                o.jsx)(Ke.Provider, {
                    value: t,
                    children: e.children
                })
            })
        }
          , et = {
            doFavor: function() {},
            setDoFavor(e) {
                et.doFavor = e
            }
        }
          , tt = (0,
        r.createContext)(et)
          , it = ({children: e}) => (0,
        o.jsx)(tt.Provider, {
            value: et,
            children: e
        })
          , ot = "__CARPLAY_WEBVIEW_ID__"
          , nt = "__TTPlayer__"
          , at = ["playNext", "playPrev", "play", "pause", "stop", "like"];
        function rt() {
            return !1
        }
        function lt(e) {
            return function() {
                return e(),
                !0
            }
        }
        function st() {
            var e;
            const t = document.getElementById(ot);
            t && ("function" == typeof t.remove ? t.remove() : null === (e = t.parentNode) || void 0 === e || e.removeChild(t))
        }
        var dt = i(93129);
        const ct = {
            isPlaying: !1,
            isFirstPlay: !0,
            videoStatus: "load",
            showPlayer: !0,
            showPause: !0
        };
        function ut() {
            return {
                setIsPlaying: me(),
                setIsFirstPlay: me(),
                setVideoStatus: me(),
                setShowPlayer: me(),
                setShowPause: me(),
                state: ct
            }
        }
        const pt = (0,
        r.createContext)(ut())
          , mt = (0,
        r.createContext)(ct)
          , ht = e => {
            const [t,i] = (0,
            qe.$)(ct)
              , n = (0,
            r.useRef)(!0)
              , a = (0,
            r.useRef)(ut());
            return n.current && (a.current.setIsPlaying = e => i((t => Object.assign(Object.assign({}, t), {
                isPlaying: e
            }))),
            a.current.setIsFirstPlay = e => i((t => Object.assign(Object.assign({}, t), {
                isFirstPlay: e
            }))),
            a.current.setVideoStatus = e => i((t => Object.assign(Object.assign({}, t), {
                videoStatus: e
            }))),
            a.current.setShowPlayer = e => i((t => Object.assign(Object.assign({}, t), {
                showPlayer: e
            }))),
            a.current.setShowPause = e => {
                i((t => Object.assign(Object.assign({}, t), {
                    showPause: e
                })))
            }
            ,
            n.current = !1),
            (0,
            o.jsx)(pt.Provider, {
                value: a.current,
                children: (0,
                o.jsx)(mt.Provider, {
                    value: t,
                    children: e.children
                })
            })
        }
        ;
        var gt = i(8157)
          , vt = i(51503)
          , ft = i(37580);
        function yt(e, t) {
            const {videoCount: i, foruWatchedCount: o} = (0,
            vt.D)()
              , {subtitleParams: n} = (0,
            ft.JS)()
              , a = (0,
            y.n5)(e, "videos" === (null == t ? void 0 : t.fromTab));
            return (0,
            r.useMemo)(( () => {
                var r, l, s, d;
                const {bitrate: c=-1, encodedType: u="", format: p="", videoQuality: m="", encodeUserTag: h="", codecType: g="", definition: v=""} = null !== (r = null == e ? void 0 : e.video) && void 0 !== r ? r : {}
                  , {scheduleTime: f, forFriend: y, secret: x, itemMute: b=!1} = null != e ? e : {};
                return Object.assign(Object.assign({
                    group_id: null !== (l = null == e ? void 0 : e.id) && void 0 !== l ? l : "",
                    author_id: null !== (s = null == e ? void 0 : e.authorId) && void 0 !== s ? s : "",
                    is_scheduled: Boolean(f),
                    poi_id: null === (d = null == e ? void 0 : e.poi) || void 0 === d ? void 0 : d.id,
                    bitrate: Number(c),
                    encodedType: u,
                    format: p,
                    videoQuality: m,
                    encodeUserTag: h,
                    codecType: g,
                    definition: v,
                    forFriend: y,
                    secret: x,
                    totalWatchCount: i,
                    foruWatchCount: o,
                    isPaidPartnership: 2 === (null == e ? void 0 : e.adLabelVersion),
                    is_sub_only_video: (null == e ? void 0 : e.subVideoMeta) ? 1 : 0,
                    isCopyrightMuted: b,
                    isPinnedItem: a
                }, n), t)
            }
            ), [e, i, o, n, t, a])
        }
        function xt(e, t) {
            var i, o;
            const {isIOS: n} = (0,
            c.L$)((0,
            u.U)(( () => ["isIOS"]), []));
            return (0,
            r.useMemo)(( () => {
                var i, o, a, r;
                const l = null !== (o = null === (i = null == e ? void 0 : e.video) || void 0 === i ? void 0 : i.width) && void 0 !== o ? o : 1
                  , s = null !== (r = null === (a = null == e ? void 0 : e.video) || void 0 === a ? void 0 : a.height) && void 0 !== r ? r : 1;
                return n && "image" === t ? !!l && l / s >= 1 : !l || l / s >= .625
            }
            ), [n, null === (i = null == e ? void 0 : e.video) || void 0 === i ? void 0 : i.height, null === (o = null == e ? void 0 : e.video) || void 0 === o ? void 0 : o.width, t])
        }
        var bt, _t = i(38203), kt = function(e, t) {
            var i = {};
            for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var n = 0;
                for (o = Object.getOwnPropertySymbols(e); n < o.length; n++)
                    t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (i[o[n]] = e[o[n]])
            }
            return i
        };
        !function(e) {
            e.SharePanelClick = "share_panel_show",
            e.ClickComment = "click_comment_button",
            e.VideoButtonShow = "video_button_show",
            e.VideoButtonClick = "video_button_click",
            e.Like = "like",
            e.LikeCancel = "like_cancel",
            e.Follow = "follow",
            e.Unfollow = "unfollow"
        }(bt || (bt = {}));
        let wt = class {
            handleSharePanelShow(e) {
                h.f.event("share_panel_show", e)
            }
            handleCommentShow(e) {
                h.f.event("click_comment_button", e)
            }
            handleVideoButtonShow(e) {
                h.f.event("video_button_show", e)
            }
            handleVideoButtonClick(e) {
                h.f.event("video_button_click", e)
            }
            handleLikeVideoResult(e) {
                var {actionType: t} = e
                  , i = kt(e, ["actionType"]);
                const o = 1 === t ? "like" : "like_cancel";
                h.f.event(o, i)
            }
            handleFollowUser(e) {
                var {actionType: t} = e
                  , i = kt(e, ["actionType"]);
                const o = 0 === t ? "unfollow" : "follow";
                h.f.event(o, i)
            }
        }
        ;
        wt = (0,
        _.Cg)([(0,
        _t._)()], wt);
        var Ct = i(11654)
          , St = i(49057)
          , Mt = i(42357)
          , At = i(18183)
          , It = i(82290)
          , Et = i(73551)
          , Tt = i(18499)
          , jt = i(53764)
          , Pt = i(75431)
          , Ot = i(38017);
        const Lt = (0,
        ie.A)("div", {
            target: "exhfy940"
        })({
            pointerEvents: "none",
            position: "fixed",
            zIndex: 1e3
        }, "label:DivDoubleTapContainer;")
          , Bt = (0,
        Pt.i7)({
            "0%": {
                opacity: "1",
                transform: "scale(1.18)"
            },
            "14%": {
                opacity: "1",
                transform: "scale(.9)"
            },
            "21%": {
                opacity: "1",
                transform: "scale(1)"
            },
            "58%": {
                opacity: "1",
                transform: "scale(1)"
            },
            "100%": {
                opacity: "0",
                transform: "scale(1.93)"
            }
        })
          , Dt = (0,
        ie.A)(Ot.A, {
            target: "exhfy941"
        })({
            animation: `${Bt} 1400ms`,
            width: "120px",
            height: "120px"
        }, "label:StyledLikeIcon;");
        var Rt = i(67518);
        const Ut = function({x: e, y: t, styledCache: i}) {
            const n = Math.floor(61 * Math.random() - 30)
              , a = (0,
            o.jsx)(Lt, {
                style: {
                    left: e - 60,
                    top: t - 60,
                    transform: `rotate(${n}deg)`
                },
                children: (0,
                o.jsx)(Dt, {})
            });
            return i ? (0,
            o.jsxs)(Rt.C, {
                value: i,
                children: [" ", a, " "]
            }) : a
        };
        class zt {
            constructor(e, t, i=document, o=void 0) {
                this.x = e,
                this.y = t,
                this.documentObj = i,
                this.styledCache = o,
                this.el = this.documentObj.createElement("div")
            }
            emit() {
                var e;
                try {
                    (null !== (e = this.documentObj[null === jt.e || void 0 === jt.e ? void 0 : jt.e.fullscreenElement]) && void 0 !== e ? e : this.documentObj.body).appendChild(this.el),
                    (0,
                    Tt.render)((0,
                    r.createElement)(Ut, {
                        x: this.x,
                        y: this.y,
                        styledCache: this.styledCache
                    }), this.el),
                    window.setTimeout(( () => {
                        this.destroy()
                    }
                    ), 1400)
                } catch (e) {
                    console.error(e)
                }
            }
            destroy() {
                var e;
                try {
                    (0,
                    Tt.unmountComponentAtNode)(this.el),
                    (null !== (e = this.documentObj[null === jt.e || void 0 === jt.e ? void 0 : jt.e.fullscreenElement]) && void 0 !== e ? e : this.documentObj.body).removeChild(this.el)
                } catch (e) {
                    console.error(e)
                }
            }
        }
        const Vt = i.p + "d84eb82fb19d8c010b0b.png";
        var Nt = i(47521)
          , Ft = i(13814);
        function Gt() {
            const {currentIndex: e} = (0,
            r.useContext)(Ze.dk);
            return e
        }
        const Ht = e => {
            let t = e;
            const {availHeight: i=0, availWidth: o=0} = "undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.screen) || {};
            return i > 0 && o / i > 1 && (t = !0),
            t
        }
        ;
        var Wt = i(49677)
          , $t = i(72153)
          , Zt = i(42204);
        function qt(e) {
            return [(0,
            $t.jJ)({
                min: Zt.aU,
                style: [(0,
                $t.mp)({
                    direction: e.direction,
                    marginStart: "30px"
                })]
            })]
        }
        const Jt = (0,
        ie.A)("div", {
            target: "e1epb9o90"
        })(( ({theme: {colors: e}}) => ({
            position: "absolute",
            left: 0,
            top: 0,
            width: "100vw",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: e.SDSecondary,
            backdropFilter: "blur(50px)",
            padding: "15vh 32px",
            boxSizing: "border-box",
            zIndex: 1001
        })), "label:DivVideoMaskContainer;")
          , Yt = (0,
        ie.A)("div", {
            target: "e1epb9o91"
        })({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }, "label:DivVideoMaskInfo;")
          , Qt = (0,
        ie.A)("div", {
            target: "e1epb9o92"
        })(( ({theme: e, showIconBackground: t}) => [{
            width: "72px",
            height: "72px",
            display: "flex",
            borderRadius: "100px",
            justifyContent: "center",
            alignItems: "center",
            background: t ? e.colors.ConstBGContainer : void 0
        }, (0,
        $t.jJ)({
            min: Zt.aU,
            style: {
                width: "88px",
                height: "88px"
            }
        })]), "label:DivVideoMaskIcon;")
          , Kt = (0,
        ie.A)("p", {
            target: "e1epb9o93"
        })(( ({theme: e}) => [(0,
        $t.zy)({
            theme: e,
            typography: "P2",
            color: "ConstTextInverse2",
            fontWeight: "semiBold"
        }), {
            marginTop: "24px",
            textAlign: "center",
            fontSize: "17px",
            lineHeight: "20px"
        }, (0,
        $t.jJ)({
            min: Zt.aU,
            style: {
                fontSize: "28px",
                lineHeight: "44px",
                fontWeight: 700
            }
        })]), "label:PVideoMaskTitle;")
          , Xt = (0,
        ie.A)("p", {
            target: "e1epb9o94"
        })(( ({theme: e}) => [(0,
        $t.zy)({
            theme: e,
            typography: "P3",
            color: "ConstTextInverse3"
        }), {
            marginTop: "8px",
            textAlign: "center",
            fontSize: "14px",
            lineHeight: "17px"
        }, (0,
        $t.jJ)({
            min: Zt.aU,
            style: {
                marginTop: "24px",
                fontSize: "24px",
                lineHeight: "38px",
                fontWeight: 400
            }
        })]), "label:PVideoMaskDesc;")
          , ei = (0,
        ie.A)("div", {
            target: "e1epb9o95"
        })({
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0",
            boxSizing: "border-box"
        }, (0,
        $t.jJ)({
            min: Zt.aU,
            style: {
                flexDirection: "row",
                justifyContent: "center"
            }
        }), "label:DivButtonWrapper;")
          , ti = (0,
        ie.A)("button", {
            target: "e1epb9o96"
        })(( ({theme: e}) => [(0,
        $t.zy)({
            theme: e,
            typography: "P1",
            color: "ConstTextInverse",
            fontWeight: "semiBold"
        }), {
            width: "100%",
            height: "44px",
            marginBottom: "8px",
            background: e.colors.Primary,
            border: "none",
            outline: "none",
            borderRadius: "2px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "15px",
            lineHeight: "18px"
        }, (0,
        $t.jJ)({
            min: Zt.aU,
            style: {
                width: "480px",
                height: "56px",
                fontSize: "28px",
                lineHeight: "44px",
                fontWeight: 700,
                borderRadius: "10px",
                marginBottom: 0
            }
        })]), "label:ButtonUpperBtn;")
          , ii = (0,
        ie.A)(ti, {
            target: "e1epb9o97"
        })(( ({theme: e}) => [{
            background: e.colors.ConstBGContainer,
            marginBottom: 0
        }, ...qt(e)]), "label:StyledLowerBtn;")
          , oi = (0,
        r.memo)((e => {
            const {videoMaskType: t, groupId: i="", icon: n, title: a, desc: l, upperBtnText: s, lowerBtnText: d, onUpperBtnClick: c, onLowerBtnClick: u, style: p={}, onSkipVideo: m, item: h, list: g} = e
              , v = (0,
            r.useContext)(Ze.dk)
              , {currentIndex: f} = v;
            return (0,
            r.useEffect)(( () => {
                "photosensitive_denied" !== t ? "m3_age_restricted" !== t ? Wt._.handleShowMaskLayer({
                    scenario: t,
                    group_id: i
                }) : Wt._.handleCCMaskShow({
                    group_id: i,
                    scenario: "age_restriction"
                }) : Wt._.handleShowMaskLayer({
                    scenario: "general",
                    group_id: i
                })
            }
            ), [t, i]),
            (0,
            r.useEffect)(( () => {
                if ("m3_age_restricted" === t) {
                    const e = setTimeout(( () => {
                        h && (null == h ? void 0 : h.id) === (null == g ? void 0 : g[f]) && (null == m || m())
                    }
                    ), 5e3);
                    return () => {
                        clearTimeout(e)
                    }
                }
            }
            ), [f, h, g, m, t]),
            (0,
            o.jsxs)(Jt, {
                style: p,
                children: [(0,
                o.jsxs)(Yt, {
                    className: "video-mask-info",
                    children: [Boolean(n) && (0,
                    o.jsx)(Qt, {
                        className: "video-mask-icon",
                        showIconBackground: "m3_age_restricted" !== t,
                        children: n
                    }), Boolean(a) && (0,
                    o.jsx)(Kt, {
                        className: "video-mask-title",
                        children: a
                    }), Boolean(l) && (0,
                    o.jsx)(Xt, {
                        className: "video-mask-desc",
                        children: l
                    })]
                }), (0,
                o.jsxs)(ei, {
                    className: "btn-wrapper",
                    children: [Boolean(s) && (0,
                    o.jsx)(ti, {
                        type: "button",
                        onClick: c,
                        children: s
                    }), Boolean(d) && (0,
                    o.jsx)(ii, {
                        type: "button",
                        onClick: u,
                        children: d
                    })]
                })]
            })
        }
        ));
        var ni, ai = i(4195), ri = i(82107);
        function li() {
            return li = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var o in i)
                        ({}).hasOwnProperty.call(i, o) && (e[o] = i[o])
                }
                return e
            }
            ,
            li.apply(null, arguments)
        }
        const si = function(e) {
            return r.createElement("svg", li({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 48 48",
                width: "1em",
                height: "1em"
            }, e), ni || (ni = r.createElement("path", {
                fill: "none",
                stroke: "#FFF",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 6,
                d: "M40.941 29.97L23.971 13 7 29.97"
            })))
        };
        var di, ci;
        function ui() {
            return ui = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var o in i)
                        ({}).hasOwnProperty.call(i, o) && (e[o] = i[o])
                }
                return e
            }
            ,
            ui.apply(null, arguments)
        }
        const pi = function(e) {
            return r.createElement("svg", ui({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 12 12",
                width: "1em",
                height: "1em"
            }, e), di || (di = r.createElement("path", {
                stroke: "#fff",
                strokeOpacity: .9,
                d: "M10.75 6a4.75 4.75 0 11-9.5 0 4.75 4.75 0 019.5 0z"
            })), ci || (ci = r.createElement("path", {
                fill: "#fff",
                fillOpacity: .9,
                fillRule: "evenodd",
                d: "M6.75 4.125a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM6 5.625a.563.563 0 00-.563.563v1.875a.563.563 0 001.125 0V6.187A.563.563 0 006 5.625z",
                clipRule: "evenodd"
            })))
        }
          , mi = (0,
        ie.A)("div", {
            target: "e1srywo10"
        })(( ({height: e}) => ({
            position: "relative",
            width: "100%",
            height: e
        })), "label:DivVideoSlideContainer;")
          , hi = (0,
        ie.A)("div", {
            target: "e1srywo11"
        })({
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }, "label:DivPlayerIconContainer;")
          , gi = (0,
        ie.A)("div", {
            target: "e1srywo12"
        })({
            width: "62px",
            height: "62px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        }, "label:DivPlayerIcon;")
          , vi = (0,
        ie.A)("div", {
            target: "e1srywo13"
        })(( ({height: e}) => ({
            width: "100%",
            height: e
        })), "label:DivFakeVideoSlide;")
          , fi = (0,
        ie.A)(pi, {
            target: "e1srywo14"
        })(( ({theme: {direction: e}}) => [(0,
        $t.mp)({
            direction: e,
            start: "10px"
        }), {
            position: "absolute",
            width: "16px",
            height: "16px",
            backgroundSize: "16px"
        }]), "label:StyledIconAlert;")
          , yi = (0,
        ie.A)(si, {
            target: "e1srywo15"
        })(( ({theme: {direction: e}}) => [(0,
        $t.mp)({
            direction: e,
            end: "10px"
        }), {
            position: "absolute",
            transform: `rotate(${"ltr" === e ? "90" : "-90"}deg)`,
            fontSize: "10px",
            verticalAlign: "middle"
        }]), "label:StyledIconArrow;")
          , xi = (0,
        ie.A)("a", {
            target: "e1srywo16"
        })({
            "&>*": {
                pointerEvents: "auto"
            }
        }, "label:AWarnWrapper;")
          , bi = (0,
        ie.A)("div", {
            target: "e1srywo17"
        })({
            width: "100%",
            position: "relative",
            fontWeight: 400,
            display: "flex",
            alignItems: "center",
            background: "rgba(37, 37, 37, 0.6)",
            padding: "10px 12px"
        }, "label:DivWarnInfo;")
          , _i = (0,
        ie.A)("span", {
            target: "e1srywo18"
        })({
            color: "#fff",
            fontSize: "13px",
            padding: "0 20px",
            lineHeight: "17px"
        }, "label:SpanWarnText;")
          , ki = (0,
        ie.A)("div", {
            target: "e1srywo110"
        })({
            flex: "1 1 auto",
            position: "relative",
            "&>*": {
                pointerEvents: "auto"
            }
        }, "label:DivContentWrapper;")
          , wi = (0,
        ie.A)("div", {
            target: "e1srywo111"
        })({
            display: "flex",
            flexDirection: "column-reverse",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 5,
            pointerEvents: "none",
            "::before": {
                zIndex: -1,
                content: '""',
                width: "100%",
                height: "225px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                color: "rgba(255, 255, 255, 1)",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0
            }
        }, "label:DivSlideOverlay;");
        (0,
        ri.Nu)();
        var Ci = i(56546)
          , Si = i(11432)
          , Mi = i(44815);
        var Ai = i(48720)
          , Ii = i(92067)
          , Ei = i(40173);
        const Ti = (0,
        ie.A)("div", {
            target: "e1qhl7vn0"
        })(( ({isMobileUiOptimize: e, theme: t}) => [(0,
        $t.mp)({
            direction: t.direction,
            start: "12px"
        }), {
            position: "absolute",
            top: e ? "60px" : "72px",
            minWidth: "139px",
            padding: "0 16px",
            height: "36px",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(8px)",
            borderRadius: "6px",
            boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.12)",
            background: "rgba(255, 255, 255, 0.85)"
        }]), "label:DivUnmuteButton;")
          , ji = (0,
        ie.A)("div", {
            target: "e1qhl7vn1"
        })({
            width: "20px",
            height: "20px",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center"
        }, "label:DivIconWrapper;")
          , Pi = (0,
        ie.A)("h4", {
            target: "e1qhl7vn2"
        })(( ({theme: e}) => [(0,
        $t.mp)({
            direction: e.direction,
            marginStart: "4px"
        }), {
            color: e.colors.TextPrimary,
            fontSize: "15px",
            fontWeight: 600,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            padding: "8px 0"
        }]), "label:H4Title;")
          , Oi = ({id: e=""}) => {
            const t = (0,
            Ei.s)()
              , i = (0,
            r.useRef)("")
              , {isRTL: n} = (0,
            xe.m)()
              , {isMobileUiOptimize: a} = (0,
            p.Eo)()
              , l = (0,
            r.useMemo)(( () => ({
                transform: `rotateY(${n ? 180 : 0}deg)`
            })), [n]);
            return (0,
            r.useEffect)(( () => {
                i.current !== e && Ne.p.handleVideoUnmuteButtonShow()
            }
            ), [e]),
            (0,
            o.jsxs)(Ti, {
                isMobileUiOptimize: a,
                children: [(0,
                o.jsx)(ji, {
                    style: l,
                    children: (0,
                    o.jsx)(Ii.A, {
                        width: 20,
                        height: 20
                    })
                }), (0,
                o.jsx)(Pi, {
                    children: t("mute_autoplay_unmute_btn")
                })]
            })
        }
        ;
        var Li, Bi;
        function Di() {
            return Di = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var o in i)
                        ({}).hasOwnProperty.call(i, o) && (e[o] = i[o])
                }
                return e
            }
            ,
            Di.apply(null, arguments)
        }
        const Ri = function(e) {
            return r.createElement("svg", Di({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                width: "1em",
                height: "1em"
            }, e), Li || (Li = r.createElement("path", {
                fill: "#161823",
                fillOpacity: .75,
                fillRule: "evenodd",
                d: "M11.7 17.68l-8.35-8.4a.395.395 0 01.301-.652h4.59V1.395c0-.218.176-.395.394-.395h6.73c.217 0 .394.177.394.395v7.233h4.589c.336 0 .518.395.3.652l-8.348 8.4a.393.393 0 01-.6 0z",
                clipRule: "evenodd"
            })), Bi || (Bi = r.createElement("path", {
                fill: "#161823",
                fillOpacity: .75,
                d: "M20.5 20.5v2c0 .276-.254.5-.567.5H4.066c-.313 0-.566-.224-.566-.5v-2c0-.276.254-.5.566-.5h15.867c.313 0 .567.224.567.5z"
            })))
        };
        var Ui;
        function zi() {
            return zi = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var o in i)
                        ({}).hasOwnProperty.call(i, o) && (e[o] = i[o])
                }
                return e
            }
            ,
            zi.apply(null, arguments)
        }
        const Vi = function(e) {
            return r.createElement("svg", zi({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                width: "1em",
                height: "1em"
            }, e), Ui || (Ui = r.createElement("path", {
                fill: "#161823",
                fillOpacity: .75,
                fillRule: "evenodd",
                d: "M8.5 4.5c.597 0 1.177.07 1.733.201A8.988 8.988 0 006.5 12a8.988 8.988 0 003.733 7.299A7.5 7.5 0 118.5 4.5zm7 15a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm1.733-10.906a.95.95 0 00-.95.95v1.888a.95.95 0 001.9 0V9.543a.95.95 0 00-.95-.949zm-4.314.95a.95.95 0 111.898 0v1.888a.95.95 0 01-1.898 0V9.543z",
                clipRule: "evenodd"
            })))
        };
        var Ni;
        function Fi() {
            return Fi = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var o in i)
                        ({}).hasOwnProperty.call(i, o) && (e[o] = i[o])
                }
                return e
            }
            ,
            Fi.apply(null, arguments)
        }
        const Gi = function(e) {
            return r.createElement("svg", Fi({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                width: "1em",
                height: "1em"
            }, e), Ni || (Ni = r.createElement("path", {
                fill: "#161823",
                fillOpacity: .75,
                fillRule: "evenodd",
                d: "M6.2 6.65C3.191 6.65.7 8.72.7 11.989c0 3.252 2.49 5.338 5.5 5.338 1.846 0 3.314-.756 4.362-1.927l.063-.07v-3.622a.5.5 0 00-.5-.5h-4.19a.5.5 0 00-.5.5v1.329a.5.5 0 00.5.5H8.03v.815c-.378.306-1.08.617-1.83.617-1.65 0-2.848-1.249-2.848-2.98 0-1.732 1.197-2.98 2.848-2.98.934 0 1.702.534 2.122 1.17a.25.25 0 00.328.082l1.726-.944a.25.25 0 00.091-.353C9.694 7.74 8.338 6.65 6.201 6.65zm6.088.162a.5.5 0 00-.5.5v9.338a.5.5 0 00.5.5h1.594a.5.5 0 00.5-.5V7.312a.5.5 0 00-.5-.5h-1.594zm11.01.5a.5.5 0 00-.5-.5h-6.462a.5.5 0 00-.5.5v9.338a.5.5 0 00.5.5h1.594a.5.5 0 00.5-.5v-3.585h4.264a.5.5 0 00.5-.5V11.22a.5.5 0 00-.5-.5H18.43V9.156h4.367a.5.5 0 00.5-.5V7.312z",
                clipRule: "evenodd"
            })))
        };
        var Hi, Wi, $i;
        function Zi() {
            return Zi = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var o in i)
                        ({}).hasOwnProperty.call(i, o) && (e[o] = i[o])
                }
                return e
            }
            ,
            Zi.apply(null, arguments)
        }
        const qi = function(e) {
            return r.createElement("svg", Zi({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                width: "1em",
                height: "1em"
            }, e), Hi || (Hi = r.createElement("path", {
                fill: "#161823",
                fillOpacity: .75,
                d: "M12 2.5a1 1 0 100-2 1 1 0 000 2zM12 23.5a1 1 0 100-2 1 1 0 000 2zM16.532 2.475a1 1 0 11-1.88-.684 1 1 0 011.88.684zM8.068 22.806a1 1 0 10.684-1.879 1 1 0 00-.684 1.88zM19.516 4.6a1 1 0 11-1.532-1.286 1 1 0 011.532 1.285zM4.609 20.81a1 1 0 101.285-1.532A1 1 0 004.61 20.81zM21.594 7.616a1 1 0 11-1-1.732 1 1 0 011 1.732zM2.042 17.75a1 1 0 101.732-1 1 1 0 00-1.732 1zM22.515 11.162a1 1 0 11-.347-1.97 1 1 0 01.347 1.97zM.676 13.997a1 1 0 101.97-.347 1 1 0 00-1.97.347zM22.168 14.808a1 1 0 11.347-1.97 1 1 0 01-.347 1.97zM.676 10.003a1 1 0 101.97.347 1 1 0 00-1.97-.347zM20.594 18.116a1 1 0 111-1.732 1 1 0 01-1 1.732zM2.042 6.25a1 1 0 101.732 1 1 1 0 00-1.732-1zM17.984 20.686a1 1 0 111.532-1.285 1 1 0 01-1.532 1.285zM4.609 3.19a1 1 0 101.285 1.533A1 1 0 004.61 3.19zM14.652 22.209a1 1 0 111.88-.684 1 1 0 01-1.88.684zM8.068 1.194a1 1 0 10.684 1.879 1 1 0 00-.684-1.88z"
            })), Wi || (Wi = r.createElement("path", {
                fill: "#161823",
                fillOpacity: .75,
                fillRule: "evenodd",
                d: "M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-3a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
                clipRule: "evenodd"
            })), $i || ($i = r.createElement("path", {
                fill: "#161823",
                fillOpacity: .75,
                fillRule: "evenodd",
                d: "M20 12a8 8 0 11-16 0 8 8 0 0116 0zm-1.882 0a6.118 6.118 0 11-12.235 0 6.118 6.118 0 0112.235 0z",
                clipRule: "evenodd"
            })))
        };
        var Ji;
        function Yi() {
            return Yi = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var o in i)
                        ({}).hasOwnProperty.call(i, o) && (e[o] = i[o])
                }
                return e
            }
            ,
            Yi.apply(null, arguments)
        }
        const Qi = function(e) {
            return r.createElement("svg", Yi({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 21 20",
                width: "1em",
                height: "1em"
            }, e), Ji || (Ji = r.createElement("path", {
                fill: "black",
                fillOpacity: .72,
                d: "M8.896 4.198a4.198 4.198 0 11-8.396 0 4.198 4.198 0 018.396 0zM10.326 2.91a.148.148 0 00.145.115 6.948 6.948 0 016.868 5.904.52.52 0 00.145.292l1.617 1.617c.288.288.772.128.797-.278A9.446 9.446 0 0010.097.532c-.388.015-.577.468-.384.805.277.485.486 1.013.613 1.572zM11.608 19.349c.393-.047.534-.52.255-.799l-1.5-1.498a.522.522 0 00-.336-.15 6.946 6.946 0 01-6.502-6.931.148.148 0 00-.116-.145 5.735 5.735 0 01-1.572-.613c-.337-.193-.79-.004-.805.384a9.446 9.446 0 0010.576 9.751zM10.78 14.623a.437.437 0 000 .618l4.63 4.631c.171.17.448.17.618 0l4.632-4.631a.437.437 0 000-.618l-4.632-4.631a.437.437 0 00-.617 0l-4.632 4.631z"
            })))
        };
        var Ki = i(76791);
        const Xi = "manage_feed_icon";
        var eo = i(94396)
          , to = i(70713)
          , io = i(91007)
          , oo = i(17566)
          , no = i(50592)
          , ao = i(32381);
        function ro(e) {
            return /^https?/.test(e) ? e : `https:${e}`
        }
        var lo = i(11060)
          , so = i(18047)
          , co = i(52837)
          , uo = (0,
        co.r)((function(e) {
            return r.createElement("svg", (0,
            so._)({}, e, {
                viewBox: "0 0 48 48",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                className: e.className
            }), r.createElement("g", {
                filter: "url(#Icon_Color-Share_Shadow_Alt_2_svg__b)",
                clipPath: "url(#Icon_Color-Share_Shadow_Alt_2_svg__a)"
            }, r.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M25.56 4.07a1.98 1.98 0 0 0-2.15-.42 1.95 1.95 0 0 0-1.21 1.8v8.34c-5.4.35-10.04 2.2-13.43 5.68C4.97 23.35 3 29.03 3 36.19c0 .79.48 1.5 1.22 1.8.73.3 1.58.13 2.14-.42 3.34-3.31 7.65-4.56 11.25-4.95 1.8-.2 3.37-.18 4.5-.1h.09v9.03c0 .78.46 1.48 1.18 1.79.72.3 1.56.16 2.13-.37l18.87-17.49a1.94 1.94 0 0 0 .04-2.8L25.56 4.07Z",
                fill: "#fff",
                fillOpacity: .9,
                shapeRendering: "crispEdges"
            })), r.createElement("defs", null, r.createElement("clipPath", {
                id: "Icon_Color-Share_Shadow_Alt_2_svg__a"
            }, r.createElement("path", {
                fill: "#fff",
                d: "M0 0h48v48H0z"
            })), r.createElement("filter", {
                id: "Icon_Color-Share_Shadow_Alt_2_svg__b",
                x: -1.5,
                y: .5,
                width: 51,
                height: 49,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, r.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), r.createElement("feColorMatrix", {
                in: "SourceAlpha",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), r.createElement("feOffset", {
                dy: 1.5
            }), r.createElement("feGaussianBlur", {
                stdDeviation: 2.25
            }), r.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "out"
            }), r.createElement("feColorMatrix", {
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            }), r.createElement("feBlend", {
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_81245_5665"
            }), r.createElement("feColorMatrix", {
                in: "SourceAlpha",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), r.createElement("feOffset", {
                dy: 1.5
            }), r.createElement("feGaussianBlur", {
                stdDeviation: .75
            }), r.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "out"
            }), r.createElement("feColorMatrix", {
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            }), r.createElement("feBlend", {
                in2: "effect1_dropShadow_81245_5665",
                result: "effect2_dropShadow_81245_5665"
            }), r.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "effect2_dropShadow_81245_5665",
                result: "shape"
            }))))
        }
        ))
          , po = (0,
        co.r)((function(e) {
            return r.createElement("svg", (0,
            so._)({}, e, {
                viewBox: "0 0 48 48",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                className: e.className
            }), r.createElement("g", {
                filter: "url(#Icon_Color-Like_Red_Shadow_Alt_1_svg__b)",
                clipPath: "url(#Icon_Color-Like_Red_Shadow_Alt_1_svg__a)"
            }, r.createElement("path", {
                d: "M24 9.44c3.2-4.03 7.61-5.56 12-4.67 2.31.46 5.59 2.28 7.75 5.48 2.26 3.32 3.21 7.99.98 13.85-1.75 4.57-5.5 8.83-9.28 12.2a56.6 56.6 0 0 1-10.52 7.47l-.93.49-.93-.49a56.6 56.6 0 0 1-10.52-7.47c-3.78-3.37-7.53-7.63-9.28-12.2-2.23-5.86-1.28-10.53.98-13.85C6.4 7.05 9.69 5.23 12 4.77c4.39-.9 8.8.64 12 4.67Z",
                fill: "#FE2C55"
            })), r.createElement("defs", null, r.createElement("clipPath", {
                id: "Icon_Color-Like_Red_Shadow_Alt_1_svg__a"
            }, r.createElement("path", {
                fill: "#fff",
                d: "M0 0h48v48H0z"
            })), r.createElement("filter", {
                id: "Icon_Color-Like_Red_Shadow_Alt_1_svg__b",
                x: -2.5,
                y: 1.52,
                width: 53,
                height: 48.73,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, r.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), r.createElement("feColorMatrix", {
                in: "SourceAlpha",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), r.createElement("feOffset", {
                dy: 1.5
            }), r.createElement("feGaussianBlur", {
                stdDeviation: 2.25
            }), r.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "out"
            }), r.createElement("feColorMatrix", {
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            }), r.createElement("feBlend", {
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_88054_4018"
            }), r.createElement("feColorMatrix", {
                in: "SourceAlpha",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), r.createElement("feOffset", {
                dy: 1.5
            }), r.createElement("feGaussianBlur", {
                stdDeviation: .75
            }), r.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "out"
            }), r.createElement("feColorMatrix", {
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            }), r.createElement("feBlend", {
                in2: "effect1_dropShadow_88054_4018",
                result: "effect2_dropShadow_88054_4018"
            }), r.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "effect2_dropShadow_88054_4018",
                result: "shape"
            }))))
        }
        ))
          , mo = (0,
        co.r)((function(e) {
            return r.createElement("svg", (0,
            so._)({}, e, {
                viewBox: "0 0 48 48",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                className: e.className
            }), r.createElement("g", {
                filter: "url(#Icon_Color-Like_Shadow_Alt_1_svg__b)",
                clipPath: "url(#Icon_Color-Like_Shadow_Alt_1_svg__a)"
            }, r.createElement("path", {
                d: "M24 9.44c3.2-4.03 7.61-5.56 12-4.67 2.31.46 5.59 2.28 7.75 5.48 2.26 3.32 3.21 7.99.98 13.85-1.75 4.57-5.5 8.83-9.28 12.2a56.6 56.6 0 0 1-10.52 7.47l-.93.49-.93-.49a56.6 56.6 0 0 1-10.52-7.47c-3.78-3.37-7.53-7.63-9.28-12.2-2.23-5.86-1.28-10.53.98-13.85C6.4 7.05 9.69 5.23 12 4.77c4.39-.9 8.8.64 12 4.67Z",
                fill: "#fff",
                fillOpacity: .9,
                shapeRendering: "crispEdges"
            })), r.createElement("defs", null, r.createElement("clipPath", {
                id: "Icon_Color-Like_Shadow_Alt_1_svg__a"
            }, r.createElement("path", {
                fill: "#fff",
                d: "M0 0h48v48H0z"
            })), r.createElement("filter", {
                id: "Icon_Color-Like_Shadow_Alt_1_svg__b",
                x: -2.5,
                y: 1.52,
                width: 53,
                height: 48.73,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, r.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), r.createElement("feColorMatrix", {
                in: "SourceAlpha",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), r.createElement("feOffset", {
                dy: 1.5
            }), r.createElement("feGaussianBlur", {
                stdDeviation: 2.25
            }), r.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "out"
            }), r.createElement("feColorMatrix", {
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            }), r.createElement("feBlend", {
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_81245_5661"
            }), r.createElement("feColorMatrix", {
                in: "SourceAlpha",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), r.createElement("feOffset", {
                dy: 1.5
            }), r.createElement("feGaussianBlur", {
                stdDeviation: .75
            }), r.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "out"
            }), r.createElement("feColorMatrix", {
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            }), r.createElement("feBlend", {
                in2: "effect1_dropShadow_81245_5661",
                result: "effect2_dropShadow_81245_5661"
            }), r.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "effect2_dropShadow_81245_5661",
                result: "shape"
            }))))
        }
        ))
          , ho = (0,
        co.r)((function(e) {
            return r.createElement("svg", (0,
            so._)({}, e, {
                viewBox: "0 0 48 48",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                className: e.className
            }), r.createElement("g", {
                filter: "url(#Icon_Color-Comment_Shadow_svg__a)"
            }, r.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M38.5 35.31c4.1-4.11 6.5-8.4 6.5-13.38C45 11.8 35.73 3.6 24.3 3.6S3.6 11.8 3.6 21.93C3.6 32.05 13.17 39 24.6 39v3.36c0 1.06 1.1 1.74 2.04 1.24 2.92-1.59 8.33-4.76 11.85-8.29ZM14.23 19.46a2.95 2.95 0 0 1 2.96 2.93 2.95 2.95 0 0 1-2.96 2.94 2.95 2.95 0 0 1-2.95-2.94 2.95 2.95 0 0 1 2.95-2.93Zm13.02 2.93a2.95 2.95 0 0 0-2.96-2.93 2.95 2.95 0 0 0-2.96 2.93 2.95 2.95 0 0 0 2.96 2.94 2.95 2.95 0 0 0 2.96-2.94Zm7.1-2.93a2.95 2.95 0 0 1 2.95 2.93 2.95 2.95 0 0 1-2.96 2.94 2.95 2.95 0 0 1-2.95-2.94 2.95 2.95 0 0 1 2.95-2.93Z",
                fill: "#fff",
                fillOpacity: .9
            })), r.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24.6 39s11.47-.89 16.26-7.02c-4.8 6.75-9.59 10.43-13.78 11.66C22.88 44.86 24.6 39 24.6 39Z",
                fill: "#000",
                fillOpacity: .03
            }), r.createElement("defs", null, r.createElement("filter", {
                id: "Icon_Color-Comment_Shadow_svg__a",
                x: 1.2,
                y: 2.4,
                width: 46.2,
                height: 44.97,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, r.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), r.createElement("feColorMatrix", {
                in: "SourceAlpha",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), r.createElement("feOffset", {
                dy: 1.2
            }), r.createElement("feGaussianBlur", {
                stdDeviation: 1.2
            }), r.createElement("feColorMatrix", {
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            }), r.createElement("feBlend", {
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_1_2867"
            }), r.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "effect1_dropShadow_1_2867",
                result: "shape"
            }))))
        }
        ))
          , go = i(78192)
          , vo = i(3782)
          , fo = i(91532)
          , yo = i(16469)
          , xo = i(27106)
          , bo = i(8362)
          , _o = i(72688)
          , ko = i(83682)
          , wo = i(58305)
          , Co = i(5412)
          , So = i(2584)
          , Mo = i(82535)
          , Ao = i(75526)
          , Io = i(67659);
        const Eo = (e, t) => {
            let i = Zt.YR
              , o = Zt.YR - 9
              , n = 16
              , a = 14
              , r = 20
              , l = 4
              , s = 49
              , d = 40;
            return t <= Zt.a9 ? (i = Zt.hE,
            o = Zt.hE - 8,
            n = 8,
            a = 12,
            r = 15) : t <= Zt.SX ? (i = Zt.YR,
            o = Zt.YR - 9,
            n = 12,
            a = 13,
            r = 17) : e >= Zt.ij ? (i = Zt.kL,
            o = Zt.kL - 8) : e >= Zt.n1 ? (i = Zt.ox,
            o = Zt.ox - 8) : e >= Zt.gL && (i = Zt.YR,
            o = Zt.YR - 9),
            e <= Zt.gL && e / t >= 2 ? (l = 4,
            s = 32,
            d = 24) : e >= Zt.L7 ? (l = 12,
            s = 72,
            d = 48) : e >= Zt.n1 ? (l = 12,
            s = 64,
            d = 40) : e >= Zt.gL && (l = 8,
            s = 56,
            d = 40),
            {
                avatarSize: i,
                iconSize: o,
                marginSize: n,
                fontSize: a,
                lineHeight: r,
                footerIconPadding: l,
                footerHeight: s,
                footerIconSize: d
            }
        }
        ;
        var To = i(6620)
          , jo = i(23281)
          , Po = i(79033)
          , Oo = i(46075)
          , Lo = i(34922)
          , Bo = i(39096)
          , Do = i.n(Bo);
        function Ro(e) {
            let t;
            return t = "number" == typeof e ? `${e}px` : e || "100%",
            t
        }
        const Uo = (0,
        ie.A)("div", {
            target: "e1yjza6m0"
        })(( ({width: e, height: t}) => ({
            width: Ro(e),
            height: Ro(t),
            overflow: "hidden",
            margin: "0 auto",
            outline: "none"
        })), "label:DivContainer;")
          , zo = (0,
        r.memo)((function(e) {
            const {width: t, height: i, className: n, options: a, eventListeners: l=[]} = e
              , s = (0,
            r.useRef)(null)
              , d = (0,
            r.useRef)(null);
            return (0,
            r.useEffect)(( () => {
                d.current = Do().loadAnimation(Object.assign({
                    container: s.current,
                    renderer: "svg"
                }, a))
            }
            ), []),
            (0,
            r.useEffect)(( () => (l.forEach(( ({eventName: e, callback: t}) => {
                var i;
                null === (i = d.current) || void 0 === i || i.addEventListener(e, t)
            }
            )),
            () => {
                l.forEach(( ({eventName: e, callback: t}) => {
                    var i;
                    null === (i = d.current) || void 0 === i || i.removeEventListener(e, t)
                }
                ))
            }
            )), [l]),
            (0,
            o.jsx)(Uo, {
                width: t,
                height: i,
                className: n,
                ref: s
            })
        }
        ))
          , Vo = i(48867)
          , No = (0,
        r.memo)(( ({width: e=24, height: t=24, onComplete: i=me(), autoplay: n}) => {
            const a = (0,
            r.useMemo)(( () => ({
                loop: !1,
                autoplay: n,
                animationData: Vo,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                }
            })), [n])
              , l = (0,
            r.useMemo)(( () => [{
                eventName: "complete",
                callback: i
            }]), [i]);
            return (0,
            o.jsx)(zo, {
                width: e,
                height: t,
                isClickToPauseDisabled: !0,
                options: a,
                isStopped: n,
                isPaused: n,
                eventListeners: l
            })
        }
        ))
          , Fo = (0,
        ie.A)("div", {
            target: "efwayy20"
        })(( ({isEngageOptUI: e}) => ({
            fontSize: 0,
            textAlign: "center",
            marginBottom: "-15px",
            height: e ? "34px" : "",
            width: e ? "100%" : ""
        })), "label:DivFollowPlus;")
          , Go = (0,
        r.memo)(( ({followed: e, iconSize: t=28, style: i={}, onComplete: n, onFollow: a, e2eTag: l, isEngageOptUI: s=!1}) => {
            const [d,c] = (0,
            r.useState)(!1)
              , [u,p] = (0,
            r.useState)(!1)
              , m = a;
            (0,
            r.useEffect)(( () => {
                e && c(!0)
            }
            ), [e]),
            (0,
            r.useEffect)(( () => {
                p(!0)
            }
            ), []);
            const h = (0,
            r.useCallback)(( () => {
                c(!1),
                null == n || n()
            }
            ), [n])
              , g = (0,
            Io.H)(Fo)
              , v = (0,
            r.useMemo)(( () => ({
                scene: "video_feed"
            })), []);
            return (0,
            o.jsx)(g, {
                section: "follow",
                style: i,
                onClick: m,
                "data-e2e": l,
                isEngageOptUI: s,
                reportParams: v,
                children: u ? d ? (0,
                o.jsx)(No, {
                    width: t,
                    height: t,
                    autoplay: e,
                    onComplete: h
                }) : (0,
                o.jsx)(Lo.A, {
                    width: t,
                    height: t
                }) : null
            })
        }
        ));
        var Ho = i(6928);
        const Wo = i(75878)
          , $o = (0,
        r.memo)(( ({width: e=40, height: t=40, onComplete: i=me(), autoplay: n}) => {
            const a = (0,
            r.useMemo)(( () => ({
                loop: !1,
                autoplay: n,
                animationData: Wo,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                }
            })), [n])
              , l = (0,
            r.useMemo)(( () => [{
                eventName: "complete",
                callback: i
            }]), [i]);
            return (0,
            o.jsx)(zo, {
                width: 1.5 * e,
                height: 1.5 * t,
                isClickToPauseDisabled: !0,
                options: a,
                isStopped: n,
                isPaused: n,
                eventListeners: l
            })
        }
        ))
          , Zo = (0,
        ie.A)("div", {
            target: "e1ugqg2w0"
        })({
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "visible"
        }, "label:DivHeart;");
        var qo;
        !function(e) {
            e.UNLIKE = "unlike",
            e.LIKED = "liked"
        }(qo || (qo = {}));
        const Jo = (0,
        r.memo)(( ({likeState: e, onComplete: t, iconSize: i}) => {
            const [n,a] = (0,
            r.useState)(!1)
              , l = (0,
            r.useRef)(!1);
            (0,
            r.useEffect)(( () => {
                const t = "liked" === e;
                t && l.current && a(t)
            }
            ), [e]),
            (0,
            r.useEffect)(( () => {
                a("unlike" === e),
                l.current = !0
            }
            ), []);
            const s = (0,
            r.useCallback)(( () => {
                a(!1),
                null == t || t()
            }
            ), [t]);
            return (0,
            o.jsx)(Zo, {
                style: {
                    width: `${i}px`,
                    height: `${i}px`
                },
                children: "liked" === e ? n ? (0,
                o.jsx)($o, {
                    height: i,
                    width: i,
                    autoplay: !0,
                    onComplete: s
                }) : (0,
                o.jsx)(Ot.A, {
                    height: i,
                    width: i
                }) : (0,
                o.jsx)(Ho.A, {
                    height: i,
                    width: i
                })
            })
        }
        ));
        var Yo, Qo;
        function Ko() {
            return Ko = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var o in i)
                        ({}).hasOwnProperty.call(i, o) && (e[o] = i[o])
                }
                return e
            }
            ,
            Ko.apply(null, arguments)
        }
        const Xo = function(e) {
            return r.createElement("svg", Ko({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 49 49",
                width: "1em",
                height: "1em"
            }, e), Yo || (Yo = r.createElement("path", {
                fill: "url(#album_svg__paint0_angular)",
                fillRule: "evenodd",
                d: "M24.5 49C38.031 49 49 38.031 49 24.5S38.031 0 24.5 0 0 10.969 0 24.5 10.969 49 24.5 49z",
                clipRule: "evenodd"
            })), Qo || (Qo = r.createElement("defs", null, r.createElement("radialGradient", {
                id: "album_svg__paint0_angular",
                cx: 0,
                cy: 0,
                r: 1,
                gradientTransform: "matrix(24.5 0 0 24.5 24.5 24.5)",
                gradientUnits: "userSpaceOnUse"
            }, r.createElement("stop", {
                offset: .131,
                stopColor: "#151515"
            }), r.createElement("stop", {
                offset: .397,
                stopColor: "#393939"
            }), r.createElement("stop", {
                offset: .632,
                stopColor: "#161616"
            }), r.createElement("stop", {
                offset: .889,
                stopColor: "#393939"
            })))))
        }
          , en = i.p + "817dec112e529e1cc8b7.png"
          , tn = "62px"
          , on = (0,
        ie.A)("div", {
            target: "e365p2r0"
        })({
            marginBottom: "2px",
            display: "flex"
        }, "label:DivShareIconWrapper;")
          , nn = (0,
        ie.A)(ko.Cz, {
            target: "e365p2r1"
        })({
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }, "label:StyledLinkWrapper;")
          , an = (0,
        ie.A)(nn, {
            target: "e365p2r2"
        })({
            height: tn,
            marginBottom: "12px",
            position: "relative"
        }, "label:StyledAuthorLink;")
          , rn = (0,
        ie.A)(nn, {
            target: "e365p2r3"
        })({
            height: "56px"
        }, "label:StyledMusicLink;")
          , ln = (e=!1) => (e ? 32 : Zt.YR - 9) + "px";
        function sn(e, t) {
            return [(0,
            $t.jJ)({
                min: Zt.gL,
                style: {
                    width: `${Zt.YR}px`
                }
            }), (0,
            $t.jJ)({
                min: Zt.n1,
                style: Object.assign({
                    width: `${Zt.ox}px`
                }, (0,
                $t.mp)({
                    direction: e.direction,
                    end: "16px"
                }))
            }), (0,
            $t.jJ)({
                min: Zt.aU,
                style: Object.assign({
                    width: `${Zt.kL}px`
                }, (0,
                $t.mp)({
                    direction: e.direction,
                    end: "16px"
                }))
            }), (0,
            $t.jJ)({
                min: Zt.aU,
                minAspectRatio: "16/9",
                style: Object.assign({
                    width: `${Zt.RA}px`,
                    bottom: "37px"
                }, (0,
                $t.mp)({
                    direction: e.direction,
                    end: "64px"
                }))
            }), (0,
            $t.Ee)({
                max: 900,
                style: {
                    width: t ? tn : `${Zt.YR}px`
                }
            }), (0,
            $t.Ee)({
                max: Zt.v3,
                style: {
                    width: `${Zt.hE}px`
                }
            }), (0,
            $t.jJ)({
                max: Zt.gL,
                minAspectRatio: "640/320",
                style: {
                    bottom: "56px"
                }
            }), (0,
            $t.jJ)({
                min: Zt.aU,
                minAspectRatio: "8/3",
                style: Object.assign({
                    width: `${Zt.ox}px`,
                    bottom: "37px"
                }, (0,
                $t.mp)({
                    direction: e.direction,
                    end: "64px"
                }))
            })]
        }
        function dn(e) {
            return [(0,
            $t.jJ)({
                min: Zt.gL,
                style: {
                    marginBottom: "24px"
                }
            }), (0,
            $t.jJ)({
                min: Zt.gL,
                orientation: "landscape",
                style: {
                    marginBottom: "48px"
                }
            }), (0,
            $t.jJ)({
                min: Zt.n1,
                orientation: "landscape",
                style: {
                    marginBottom: "18px"
                }
            }), (0,
            $t.jJ)({
                min: Zt.aU,
                orientation: "landscape",
                style: {
                    marginBottom: "138px"
                }
            }), (0,
            $t.jJ)({
                min: Zt.aU,
                minAspectRatio: "16/9",
                style: {
                    marginBottom: "7px"
                }
            }), (0,
            $t.jJ)({
                max: Zt.gL,
                minAspectRatio: "640/320",
                style: {
                    marginBottom: "4px"
                }
            }), e ? {} : (0,
            $t.Ee)({
                max: 900,
                style: {
                    marginBottom: "49px"
                }
            }), (0,
            $t.Ee)({
                max: Zt.SX,
                style: {
                    marginBottom: "0px"
                }
            }), (0,
            $t.Ee)({
                max: Zt.Ro - 140,
                style: {
                    marginBottom: "4px"
                }
            }), (0,
            $t.jJ)({
                min: Zt.aU,
                minAspectRatio: "8/3",
                style: {
                    marginBottom: "7px"
                }
            })]
        }
        function cn(e) {
            return [(0,
            $t.jJ)({
                min: Zt.gL,
                style: {
                    width: `${Zt.YR}px`,
                    height: `${Zt.YR}px`,
                    marginBottom: "32px"
                }
            }), (0,
            $t.jJ)({
                min: Zt.n1,
                style: {
                    width: `${Zt.ox}px`,
                    height: `${Zt.ox}px`,
                    marginBottom: "32px"
                }
            }), (0,
            $t.jJ)({
                min: Zt.aU,
                style: {
                    width: `${Zt.kL}px`,
                    height: `${Zt.kL}px`,
                    marginBottom: "34px"
                }
            }), (0,
            $t.jJ)({
                min: Zt.aU,
                minAspectRatio: "16/9",
                style: {
                    width: `${Zt.RA}px`,
                    height: `${Zt.RA}px`,
                    marginBottom: "56px"
                }
            }), (0,
            $t.jJ)({
                max: Zt.gL,
                minAspectRatio: "640/320",
                style: {
                    marginBottom: "12px"
                }
            }), e ? {} : (0,
            $t.Ee)({
                max: 900,
                style: {
                    width: `${Zt.YR}px`,
                    height: `${Zt.YR}px`,
                    marginBottom: "32px"
                }
            }), (0,
            $t.Ee)({
                max: Zt.v3,
                style: {
                    width: `${Zt.hE}px`,
                    height: `${Zt.hE}px`
                }
            }), (0,
            $t.jJ)({
                min: Zt.aU,
                minAspectRatio: "8/3",
                style: {
                    width: `${Zt.ox}px`,
                    height: `${Zt.ox}px`,
                    marginBottom: "30px"
                }
            })]
        }
        function un(e=!1) {
            return [(0,
            $t.jJ)({
                min: Zt.gL,
                style: {
                    width: `${Zt.YR + 7}px`,
                    height: `${Zt.YR + 7}px`
                }
            }), (0,
            $t.jJ)({
                min: Zt.gL,
                orientation: "landscape",
                style: {
                    width: Zt.YR - 9 + "px",
                    height: Zt.YR - 9 + "px"
                }
            }), (0,
            $t.jJ)({
                min: Zt.n1,
                style: {
                    width: Zt.ox - 8 + "px",
                    height: Zt.ox - 8 + "px"
                }
            }), (0,
            $t.jJ)({
                min: Zt.L7,
                style: {
                    width: Zt.kL - 8 + "px",
                    height: Zt.kL - 8 + "px"
                }
            }), (0,
            $t.jJ)({
                max: Zt.gL,
                minAspectRatio: "640/320",
                style: {
                    width: Zt.hE - 8 + "px",
                    height: Zt.hE - 8 + "px"
                }
            }), (0,
            $t.Ee)({
                max: 900,
                style: {
                    width: ln(e),
                    height: ln(e)
                }
            })]
        }
        function pn(e) {
            return [(0,
            $t.jJ)({
                min: Zt.gL,
                style: {
                    marginBottom: "16px"
                }
            }), (0,
            $t.jJ)({
                min: Zt.gL,
                orientation: "landscape",
                style: {
                    marginBottom: "8px"
                }
            }), (0,
            $t.jJ)({
                max: Zt.gL,
                minAspectRatio: "640/320",
                style: {
                    marginBottom: "0px"
                }
            }), (0,
            $t.jJ)({
                max: Zt.aU,
                minAspectRatio: "16/9",
                style: {
                    marginBottom: "24px"
                }
            }), (0,
            $t.Ee)({
                max: 900,
                style: {
                    marginBottom: e ? "0px" : "16px"
                }
            }), (0,
            $t.Ee)({
                max: Zt.Ro - 140,
                style: {
                    marginBottom: "4px"
                }
            })]
        }
        const mn = (0,
        ie.A)("div", {
            target: "e365p2r4"
        })(( ({theme: e, isEngageOptUI: t}) => [{
            maxHeight: "calc(100vh - 150px)",
            position: "absolute",
            zIndex: 6,
            bottom: t ? "8px" : "12px",
            width: `${Zt.YR}px`
        }, (0,
        $t.mp)({
            direction: e.direction,
            end: t ? "0px" : "12px"
        }), ...sn(e, t)]), "label:DivRightAreaBox;")
          , hn = (0,
        ie.A)("div", {
            target: "e365p2r5"
        })(( ({isEngageOptUI: e}) => [{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: e ? "4px" : "49px"
        }, ...dn(e)]), "label:DivOperaterArea;")
          , gn = (0,
        ie.A)("div", {
            target: "e365p2r6"
        })(( ({isEngageOptUI: e}) => [{
            borderRadius: "50%",
            boxSizing: "border-box",
            position: "relative",
            backgroundSize: "100% 100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "visible",
            width: `${e ? 44 : Zt.YR}px`,
            height: `${e ? 44 : Zt.YR}px`,
            marginBottom: e ? "" : "20px",
            border: e ? "1px solid #FFFFFF" : ""
        }, ...cn(e)]), "label:DivAuthor;")
          , vn = (0,
        ie.A)("div", {
            target: "e365p2r7"
        })(( ({isEngageOptUI: e}) => [Object.assign(Object.assign({}, wn(e)), {
            svg: [{
                width: Zt.YR - 9 + "px",
                height: Zt.YR - 9 + "px"
            }, ...un(e)],
            ">div": [{
                height: Zt.YR - 9 + "px"
            }, ...un(), {
                width: e ? "" : "70px !important",
                overflow: "visible"
            }]
        }), ...pn(e)]), "label:DivFavor;")
          , fn = (0,
        ie.A)("div", {
            target: "e365p2r8"
        })(( ({isEngageOptUI: e}) => [Object.assign(Object.assign({}, wn(e)), {
            svg: [{
                width: Zt.YR - 9 + "px",
                height: Zt.YR - 9 + "px"
            }, ...un(e)]
        }), ...pn(e)]), "label:DivComment;")
          , yn = (0,
        ie.A)("span", {
            target: "e365p2r10"
        })(( ({theme: e, isEngageOptUI: t}) => [{
            fontSize: "13px",
            lineHeight: t ? "17px" : "16px",
            fontWeight: t ? "600" : ""
        }, (0,
        $t.zy)({
            theme: e,
            color: "ConstTextInverse"
        }), (0,
        $t.jJ)({
            min: Zt.L7,
            style: {
                marginTop: "4px",
                fontSize: "16px",
                lineHeight: "1.5"
            }
        }), (0,
        $t.jJ)({
            min: Zt.aU,
            minAspectRatio: "16/9",
            style: {
                fontSize: "28px",
                lineHeight: "1.57"
            }
        }), (0,
        $t.jJ)({
            min: Zt.aU,
            minAspectRatio: "8/3",
            style: {
                fontSize: "24px",
                lineHeight: "1.57"
            }
        })]), "label:SpanText;")
          , xn = (0,
        ie.A)("div", {
            target: "e365p2r13"
        })(( ({isEngageOptUI: e, hideAnimation: t}) => {
            return [...cn(e), {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "0px!important",
                width: `${e ? 40 : Zt.YR}px`,
                height: `${e ? 40 : Zt.YR}px`
            }, (i = t,
            {
                animation: i ? "none" : "rotate 8s linear infinite",
                "@keyframes rotate": {
                    "0%": {
                        transform: "rotate(0deg)"
                    },
                    "100%": {
                        transform: "rotate(360deg)"
                    }
                }
            }), Cn];
            var i
        }
        ), "label:DivMusic;")
          , bn = (0,
        ie.A)(Xo, {
            target: "e365p2r14"
        })({
            position: "absolute",
            width: "40px",
            height: "40px"
        }, "label:StyledIconAlbum;")
          , _n = (0,
        ie.A)("div", {
            target: "e365p2r15"
        })({
            borderRadius: "50%",
            width: "70%",
            height: "70%",
            zIndex: 99
        }, "label:DivMusicCover;")
          , kn = (0,
        ie.A)("div", {
            target: "e365p2r16"
        })(( ({theme: e}) => [(0,
        $t.mp)({
            direction: e.direction,
            start: "-20px"
        }), {
            position: "absolute",
            zIndex: 999,
            bottom: "25px",
            width: "17.5px",
            height: "17.5px",
            WebkitTransform: "translateY(0)",
            animation: "mc-note 2.5s infinite 0s linear",
            background: `url(${en}) no-repeat`,
            backgroundSize: "15px auto",
            opacity: ".5",
            transform: "translate3D(-10px, -30px, 0)"
        }, Sn, Cn]), "label:DivMusicItem;");
        function wn(e) {
            return {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "8px",
                justifyContent: e ? "center" : "",
                width: e ? tn : "",
                height: e ? "65px" : ""
            }
        }
        function Cn({playing: e}) {
            return {
                animationPlayState: e ? "running" : "paused"
            }
        }
        function Sn() {
            return {
                "@keyframes mc-note": {
                    "0%": {
                        opacity: 0,
                        transform: "translate(-5px, 0) rotate(0) scale(1)"
                    },
                    "10%": {
                        opacity: .2,
                        transform: "translate(-5px, -5px) rotate(0) scale(1)"
                    },
                    "20%": {
                        opacity: .4,
                        transform: " translate(-5px, -10px) rotate(0) scale(1)"
                    },
                    "30%": {
                        opacity: .6,
                        transform: "translate(-6px, -15px) rotate(-5deg) scale(1)"
                    },
                    "40%": {
                        opacity: .8,
                        transform: "translate(-7px, -20px) rotate(-10deg) scale(1)"
                    },
                    "50%": {
                        opacity: 1,
                        transform: "translate(-8px, -25px) rotate(-15deg) scale(1)"
                    },
                    "60%": {
                        opacity: 1,
                        transform: "translate(-10px, -30px) rotate(-20deg) scale(1)"
                    },
                    "70%": {
                        opacity: .8,
                        transform: "translate(-10px, -35px) rotate(-25deg) scale(1)"
                    },
                    "80%": {
                        opacity: .4,
                        transform: "translate(-10px, -40px) rotate(-30deg) scale(1)"
                    },
                    "90%": {
                        opacity: .2,
                        transform: "translate(-10px, -45px) rotate(-35deg) scale(1)"
                    },
                    "100%": {
                        opacity: 0,
                        transform: "translate(-10px, -50px) rotate(-40deg) scale(1)"
                    }
                }
            }
        }
        const Mn = {
            position: "relative",
            display: "flex",
            fontWeight: "normal"
        }
          , An = (0,
        r.memo)(( ({id: e, shareCommand: t, onFavor: i, pageType: l, isPlaying: s=!1, onLinkClick: d, hideOperator: u}) => {
            var m, h, g, f;
            const x = (0,
            Ei.s)()
              , b = i
              , {item: _, user: k} = (0,
            gt.y)(null != e ? e : "")
              , {user: w, appType: C, abTestVersion: S} = (0,
            c.L$)((0,
            St.W)(( () => ["user", "appType", "abTestVersion"]), []))
              , M = yo._w.getItem("last_click_platform")
              , {platform: A, isFlip: I} = (0,
            n.Ph)(At.M, {
                selector: e => {
                    var t, i;
                    return {
                        platform: null !== (i = null === (t = e.platforms) || void 0 === t ? void 0 : t[0]) && void 0 !== i ? i : "copy",
                        isFlip: e.isFlip
                    }
                }
                ,
                dependencies: [_]
            })
              , {isMobileUiOptimize: E} = (0,
            p.Eo)()
              , T = null != M ? M : A
              , j = E ? Po.j7[T] : Po.a3[T]
              , {isSmartPlayer: P, isTtincar: O} = (0,
            v.Qt)()
              , L = (0,
            p.Ns)() && ![124, 122].includes(l) || O
              , {music: {id: B="", title: D="", authorName: R="", authorFtc: U=!1}={}, id: z="", author: V="", authorId: N="", digged: F, stats: G, statsV2: H, poi: W, subVideoMeta: $, itemMute: Z=!1} = (0,
            c.L$)(_)
              , q = null != H ? H : G
              , {secUid: J=""} = (0,
            c.L$)(k)
              , {shareCount: Y=0, commentCount: Q=0, diggCount: K=0} = (0,
            c.L$)(q)
              , X = "t" === C
              , ee = (0,
            Ki.nH)()
              , {needCtaClick: te} = (0,
            Ge.un)(l)
              , {secUid: ie=""} = (0,
            c.L$)(w)
              , oe = J === ie
              , ne = (0,
            r.useMemo)(( () => I ? x("webapp_share_btn") : Y > 0 ? (0,
            c.D1)(Y) : X ? "" : x("webapp_share_btn")), [I, X, Y, x])
              , ae = (0,
            y.MA)(_)
              , re = "video_feed"
              , {handleFollow: le, isFollowing: se} = (0,
            Oo.T)({
                uniqueId: V,
                prevent: !0,
                teaParams: Object.assign({
                    group_id: z,
                    action_position: "toolbar_btn",
                    poi_id: null == W ? void 0 : W.id,
                    is_sub_only_video: $ ? 1 : 0
                }, ae)
            })
              , [de,ce] = (0,
            r.useState)(se)
              , ue = (0,
            a.Nj)(Ci.A)
              , pe = (0,
            n.wA)(To.k)
              , me = {
                pageType: l,
                uid: e,
                secUid: J,
                avatarUrl: null == k ? void 0 : k.avatarThumb
            }
              , {showModalOrLater: he} = (0,
            Ft.z)(Object.assign(Object.assign({}, me), {
                enterMethod: "click_follow"
            }))
              , {showModalOrLater: ge} = (0,
            Ft.z)(Object.assign(Object.assign({}, me), {
                enterMethod: "click_comment"
            }))
              , ve = (0,
            r.useCallback)((e => {
                (ee || P) && (e.preventDefault(),
                e.stopPropagation()),
                ee ? le(e) : he()
            }
            ), [ee, le, he, P])
              , fe = (0,
            r.useCallback)(( () => {
                ce(!0)
            }
            ), [])
              , ye = null !== (m = (0,
            xo.qt)(S, "non_logged_in_comments")) && void 0 !== m ? m : "v1"
              , xe = (0,
            r.useCallback)(( () => {
                te ? ge() : ee || "v1" !== ye ? (pe.openCommentPanel({
                    itemId: e
                }),
                Co.ao.handleCommentClick(Object.assign({
                    group_id: z,
                    author_id: N,
                    poi_id: null == W ? void 0 : W.id,
                    is_sub_only_video: $ ? 1 : 0
                }, ae))) : ge()
            }
            ), [ee, ye, pe, e, z, N, null == W ? void 0 : W.id, $, ae, ge, te])
              , be = (0,
            lo.zy)()
              , _e = (0,
            r.useMemo)(( () => {
                if (!k)
                    return {
                        href: "#",
                        userNameText: ""
                    };
                const {uniqueId: e="", verified: t, nickname: i="", isADVirtual: o} = k
                  , n = o ? `@${i}` : `@${e}`
                  , a = {
                    pageType: 1,
                    pageData: {
                        nickname: e,
                        uniqueId: e,
                        verified: t
                    }
                };
                return {
                    href: o ? "#" : (0,
                    bo.F)({
                        to: {
                            pathname: (0,
                            _o.fJR)({
                                uniqueId: e
                            })
                        },
                        location: be
                    }),
                    userNameText: n,
                    userLinkTitle: (0,
                    Ao.ry)(a, x)
                }
            }
            ), [k, be, x])
              , {CtaWrapperComponent: ke, triggerClick: we} = (0,
            He.Z)({
                downloadType: "click_toolbar_avatar",
                pageType: 1,
                target: "wrapper_user",
                extraLogParams: {
                    enter_method: "click_toolbar_avatar",
                    target: "function_button"
                },
                user_id: N
            })
              , Ce = (0,
            r.useCallback)((e => {
                if ((null == k ? void 0 : k.ftc) || (null == k ? void 0 : k.isADVirtual))
                    e.preventDefault();
                else {
                    if (te)
                        return So.O.handleTap({
                            target: "function_button",
                            enter_method: "click_toolbar_avatar"
                        }),
                        e.preventDefault(),
                        void we();
                    null == d || d(),
                    Mo.q.handleEnterUser({
                        to_user_id: N,
                        author_id: N,
                        group_id: z,
                        type: Si.M[l],
                        enter_method: "click_toolbar_avatar"
                    })
                }
            }
            ), [null == k ? void 0 : k.ftc, null == k ? void 0 : k.isADVirtual, N, z, d, l, te, we])
              , Se = (0,
            bo.F)({
                to: {
                    pathname: (0,
                    _o.pHc)({
                        musicName: D,
                        musicId: B
                    })
                },
                location: be
            })
              , Me = {
                pageType: 4,
                pageData: {
                    authorName: R,
                    musicName: D
                }
            }
              , Ae = (0,
            Ao.ry)(Me, x)
              , Ie = U || !B || Z
              , {CtaWrapperComponent: Ee, triggerClick: Te} = (0,
            He.Z)({
                downloadType: "click_music_disc",
                pageType: 4,
                target: "wrapper_music",
                extraLogParams: {
                    enter_method: "click_music_disc",
                    target: "function_button"
                },
                music_id: B
            })
              , je = (0,
            r.useCallback)((e => {
                if (te)
                    return So.O.handleTap({
                        target: "function_button",
                        enter_method: "click_music_disc"
                    }),
                    e.preventDefault(),
                    void Te();
                Mo.q.handleEnterMusicDetail({
                    music_id: B,
                    author_id: N,
                    group_id: z,
                    type: Si.M[l],
                    enter_method: "click_music_disc"
                }),
                null == d || d()
            }
            ), [N, z, d, B, l, te, Te])
              , {CtaWrapperComponent: Pe, triggerClick: Oe} = (0,
            He.Z)({
                downloadType: "click_toolbar_share",
                pageType: 5,
                target: "wrapper_video_insert",
                video_id: e,
                enterMethod: "click_toolbar_share",
                extraLogParams: {
                    enter_method: "click_toolbar_share",
                    target: "function_button"
                }
            })
              , {subtitleParams: Le} = (0,
            ft.dj)()
              , Be = (0,
            r.useCallback)(( () => {
                if (te)
                    return So.O.handleTap({
                        target: "function_button",
                        enter_method: "click_toolbar_share"
                    }),
                    void Oe();
                t.handleOpenShareSheet(),
                ue.handleSharePanelShow(Object.assign(Object.assign(Object.assign({
                    scene: re,
                    group_id: z,
                    author_id: N,
                    type: Si.M[0]
                }, Le), {
                    poi_id: null == W ? void 0 : W.id,
                    is_sub_only_video: $ ? 1 : 0
                }), ae)),
                ue.handleClickShare(Object.assign({
                    group_id: z,
                    author_id: N,
                    type: Si.M[0],
                    is_sub_only_video: $ ? 1 : 0
                }, ae))
            }
            ), [t, ue, z, N, Le, null == W ? void 0 : W.id, $, ae])
              , {followBtnStyle: De} = ( () => {
                const {width: e, height: t} = (0,
                We.l)()
                  , {avatarSize: i, iconSize: o, marginSize: n, fontSize: a, lineHeight: l} = Eo(e, t)
                  , {footerIconPadding: s, footerHeight: d, footerIconSize: c} = Eo(e, t)
                  , u = i / 2
                  , p = (0,
                r.useMemo)(( () => ({
                    width: `${i}px`,
                    bottom: `${n}px`
                })), [i, n])
                  , m = (0,
                r.useMemo)(( () => ({
                    width: `${i}px`,
                    height: `${i}px`,
                    marginBottom: `${i / 4 + n}px`
                })), [i, n])
                  , h = (0,
                r.useMemo)(( () => ({
                    position: "absolute",
                    left: "50%",
                    bottom: 0,
                    transform: "translate(-50%)"
                })), [])
                  , g = (0,
                r.useMemo)(( () => ({
                    width: `${i}px`,
                    height: `${i}px`
                })), [i])
                  , v = (0,
                r.useMemo)(( () => ({
                    fontSize: `${a}px`,
                    lineHeight: `${l}px`,
                    marginTop: n / 2 + "px"
                })), [a, l, n])
                  , f = (0,
                r.useMemo)(( () => ({
                    width: `${c}px`,
                    height: `${c}px`
                })), [c]);
                return {
                    containerStyle: p,
                    avatarStyle: m,
                    followBtnStyle: h,
                    albumStyle: g,
                    avatarSize: i,
                    followBtnSize: u,
                    iconSize: o,
                    marginSize: n,
                    textStyle: v,
                    footerIconPadding: s,
                    footerHeight: d,
                    footerIconSize: c,
                    footerIconStyle: f
                }
            }
            )()
              , {avatarTag: Re, followBtnTag: Ue, favorTag: ze, favorNumTag: Ve, commentTag: Ne, commentNumTag: Fe, shareTag: $e, shareNumTag: Ze, discTag: qe} = function(e) {
                return 5 === e ? {
                    avatarTag: "video-author-avatar",
                    followBtnTag: "follow-button",
                    favorTag: "like-icon",
                    favorNumTag: "like-count",
                    commentTag: "comment-icon",
                    commentNumTag: "comment-count",
                    shareTag: "share-icon",
                    shareNumTag: "share-count",
                    discTag: "music-cover"
                } : {
                    avatarTag: "video-user-avatar",
                    followBtnTag: "video-follow",
                    favorTag: "video-like-button",
                    favorNumTag: "video-like-count",
                    commentTag: "video-comment-button",
                    commentNumTag: "video-comment-count",
                    shareTag: "video-share-button",
                    shareNumTag: "video-share-count",
                    discTag: "video-music-turntable"
                }
            }(l)
              , Je = E ? rn : ko.Cz
              , Ye = (0,
            Io.H)(gn)
              , Qe = (0,
            Io.H)(vn)
              , Ke = (0,
            Io.H)(fn)
              , Xe = (0,
            Io.H)(fn)
              , et = (0,
            Io.H)(Je)
              , tt = (0,
            r.useMemo)(( () => ({
                is_flickering: I ? 1 : 0,
                flickering_icon: I ? T : void 0,
                scene: re
            })), [T, I])
              , it = {
                target: "wrapper_video_insert",
                video_id: z,
                shouldSkipReportConfirm: !0,
                shouldUseSmart: !ee && !P
            }
              , ot = {
                target: "wrapper_video_insert",
                video_id: z,
                shouldSkipReportConfirm: !0,
                shouldUseSmart: !P
            }
              , nt = e => te ? Object.assign(Object.assign({}, ot), {
                extraLogParams: {
                    enter_method: "comment" === e ? "click_comment" : "click_like",
                    target: "function_button"
                }
            }) : it
              , at = (0,
            r.useCallback)(( () => P ? (0,
            o.jsx)(go.A, {}) : I && j ? E ? (0,
            o.jsx)(on, {
                children: (0,
                o.jsx)(j, {})
            }) : (0,
            o.jsx)(j, {}) : E ? (0,
            o.jsx)(uo, {}) : (0,
            o.jsx)(vo.A, {})), [j, E, I, P])
              , rt = () => de || oe ? null : (0,
            o.jsx)(jo.s, Object.assign(Object.assign({
                onClick: wo.Gu,
                downloadType: "click_follow"
            }, it), {
                children: (0,
                o.jsx)(Go, {
                    style: De,
                    onFollow: ve,
                    onComplete: fe,
                    followed: se,
                    e2eTag: Ue,
                    isEngageOptUI: E,
                    iconSize: E ? 23 : void 0
                })
            }))
              , lt = E ? an : ko.Cz
              , st = (0,
            r.useCallback)(( () => E ? F ? (0,
            o.jsx)(po, {}) : (0,
            o.jsx)(mo, {}) : (0,
            o.jsx)(Jo, {
                likeState: F ? "liked" : "unlike"
            })), [F, E])
              , dt = {
                isEngageOptUI: E
            };
            return (0,
            o.jsxs)(mn, {
                isEngageOptUI: E,
                children: [te && (0,
                o.jsxs)(o.Fragment, {
                    children: [ke, Pe, Ee]
                }), !u && (0,
                o.jsxs)(hn, {
                    isEngageOptUI: E,
                    children: [(0,
                    o.jsxs)(lt, {
                        to: _e.href,
                        title: _e.userLinkTitle,
                        onClick: Ce,
                        children: [(0,
                        o.jsx)(Ye, Object.assign(Object.assign({
                            section: "user",
                            style: {
                                backgroundImage: `url(${null !== (h = null == k ? void 0 : k.avatarThumb) && void 0 !== h ? h : ""})`
                            },
                            "data-e2e": Re,
                            reportParams: tt
                        }, dt), {
                            children: !E && rt()
                        })), E && rt()]
                    }, _e.userNameText), (0,
                    o.jsx)(jo.s, Object.assign(Object.assign({
                        downloadType: "click_like"
                    }, nt("like")), {
                        children: (0,
                        o.jsxs)(Qe, Object.assign(Object.assign({
                            onClick: b,
                            section: "like",
                            "data-e2e": ze,
                            reportParams: tt
                        }, dt), {
                            children: [st(), (0,
                            o.jsx)(yn, Object.assign(Object.assign({
                                "data-e2e": Ve
                            }, dt), {
                                children: (0,
                                c.D1)(K)
                            }))]
                        }))
                    })), "v1" === ye || [124, 122].includes(l) ? (0,
                    o.jsx)(jo.s, Object.assign(Object.assign({
                        downloadType: "comment"
                    }, nt("comment")), {
                        children: (0,
                        o.jsxs)(Ke, Object.assign(Object.assign({
                            onClick: xe,
                            section: "comments",
                            "data-e2e": Ne,
                            reportParams: tt,
                            hasMarginTop: !1
                        }, dt), {
                            children: [E ? (0,
                            o.jsx)(ho, {}) : (0,
                            o.jsx)(fo.A, {}), (0,
                            o.jsx)(yn, Object.assign(Object.assign({
                                "data-e2e": Fe
                            }, dt), {
                                children: (0,
                                c.D1)(Q)
                            }))]
                        }))
                    })) : (0,
                    o.jsxs)(Ke, Object.assign(Object.assign({
                        onClick: xe,
                        section: "comments",
                        "data-e2e": Ne,
                        reportParams: tt,
                        hasMarginTop: !1
                    }, dt), {
                        children: [E ? (0,
                        o.jsx)(ho, {}) : (0,
                        o.jsx)(fo.A, {}), (0,
                        o.jsx)(yn, Object.assign(Object.assign({
                            "data-e2e": Fe
                        }, dt), {
                            children: (0,
                            c.D1)(Q)
                        }))]
                    })), (0,
                    o.jsxs)(Xe, Object.assign(Object.assign({
                        reportParams: tt,
                        section: "share_video",
                        onClick: Be,
                        "data-e2e": $e
                    }, dt), {
                        children: [at(), (0,
                        o.jsx)(yn, Object.assign(Object.assign({
                            "data-e2e": Ze
                        }, dt), {
                            children: ne
                        }))]
                    }))]
                }), !Ie && (0,
                o.jsxs)(et, {
                    section: "music",
                    to: Se,
                    title: Ae,
                    onClick: je,
                    style: Mn,
                    children: [!E && !L && (0,
                    o.jsx)(kn, {
                        playing: s
                    }), (0,
                    o.jsxs)(xn, {
                        playing: s,
                        "data-e2e": qe,
                        isEngageOptUI: E,
                        hideAnimation: L,
                        children: [(0,
                        o.jsx)(bn, {}), (0,
                        o.jsx)(_n, {
                            style: (null === (g = null == _ ? void 0 : _.music) || void 0 === g ? void 0 : g.coverThumb) ? {
                                backgroundImage: `url(${null === (f = null == _ ? void 0 : _.music) || void 0 === f ? void 0 : f.coverThumb})`,
                                backgroundSize: "cover"
                            } : {}
                        })]
                    })]
                }, Ae)]
            })
        }
        ));
        var In = i(72608)
          , En = i(86045)
          , Tn = i(56268);
        const jn = {
            0: "4px",
            2: "8px",
            4: "12px"
        }
          , Pn = {
            0: "0px",
            2: "-2px",
            4: "-6px"
        }
          , On = {
            0: "2px",
            2: "8px",
            4: "8px"
        }
          , Ln = (0,
        ie.A)("div", {
            target: "e1sksq2r5"
        })(( ({isTag: e, isInTooltip: t, shouldOptProfile: i, playMode: o=0, theme: {colors: n}}) => [{
            height: "24px",
            marginTop: jn[o],
            marginBottom: Pn[o],
            minWidth: 0
        }, i && [{
            height: "22px",
            padding: "1px 6px 1px 4px",
            background: t ? "" : n.BGView,
            display: "inline-flex",
            borderRadius: "4px",
            alignItems: "center",
            color: n.TextPrimary,
            marginTop: On[o]
        }, t && {
            marginTop: 0,
            marginBottom: 0
        }, e && {
            color: n.TextTertiaryAlt
        }]]), "label:DivAnchorTag;")
          , Bn = (0,
        ie.A)("p", {
            target: "ejymp3n0"
        })(( ({theme: e, theme: {colors: t}, isMobile: i, isMiniPlayer: o}) => i ? [(0,
        $t.zy)({
            theme: e,
            fontFamily: "TikTokFont",
            typography: "P3"
        }), {
            display: "inline-block",
            alignSelf: "flex-start",
            marginTop: "-4px",
            marginBottom: "8px",
            fontSize: "15px",
            fontWeight: 400
        }, {
            padding: "1px 5px",
            background: "rgba(255, 255, 255, 0.34)",
            borderRadius: "2px",
            fontWeight: 600,
            textShadow: "0 0 16px rgba(0, 0, 0, .34)"
        }] : o ? [(0,
        $t.zy)({
            theme: e,
            fontFamily: "TikTokFont",
            typography: "P3"
        }), {
            color: "#FFF",
            display: "inline-block",
            alignSelf: "flex-start",
            fontSize: "10px",
            fontWeight: 500,
            padding: "1.5px 4px",
            background: "rgba(255, 255, 255, 0.34)",
            borderRadius: "4px",
            textShadow: "0 0 16px rgba(0, 0, 0, .34)"
        }] : [(0,
        $t.zy)({
            theme: e,
            fontFamily: "TikTokFont",
            typography: "P2"
        }), {
            display: "inline-block",
            alignSelf: "flex-start",
            marginTop: "8px",
            marginBottom: "unset",
            fontSize: "16px",
            padding: "1px 4px",
            background: t.BGPlaceholderDefault,
            borderRadius: "2px",
            color: t.TextTertiaryAlt,
            fontWeight: 600
        }]), "label:PPaidPartnership;")
          , Dn = (0,
        r.memo)((function({item: e, style: t, target: i="_self", isSharing: n=!1, playMode: a, isMiniPlayer: l=!1}) {
            var s, d, c;
            const p = (0,
            Ei.s)()
              , {region: m=""} = null !== (s = (0,
            St.W)(( () => ["region"]), [])) && void 0 !== s ? s : {}
              , {id: g, authorId: v, BAInfo: f, adLabelVersion: y, brandOrganicType: x=0, isECVideo: b} = e
              , _ = f && !n
              , k = 2 === y
              , w = Number(x) > 0
              , {isMobile: C} = null !== (d = (0,
            u.U)(( () => ["isMobile"]), [])) && void 0 !== d ? d : {}
              , S = (0,
            r.useCallback)(( () => {
                var e;
                e = {
                    group_id: null != g ? g : "",
                    author_id: null != v ? v : "",
                    partnership_tag: null != f ? f : ""
                },
                h.f.sendEvent("click_partnership_tag", e),
                Mo.q.handleEnterUser({
                    to_user_name: null != f ? f : "",
                    enter_method: "click_partnership_tag"
                })
            }
            ), [g, v, f])
              , M = !C && !l
              , A = (0,
            Tn.useLocation)()
              , I = (0,
            bo.F)({
                to: {
                    pathname: (0,
                    _o.fJR)({
                        uniqueId: null !== (c = null == e ? void 0 : e.BAInfo) && void 0 !== c ? c : ""
                    })
                },
                location: A
            })
              , E = (0,
            r.useMemo)(( () => {
                if (k && b) {
                    if ("US" === m)
                        return "bc_disclosure_tag_ecommerce_us";
                    if ("GB" === m)
                        return "bc_disclosure_tag_ecommerce_uk"
                }
                return k ? "bc_new_disclosure" : "tcm_closedLoop_commercialContent_brandOrganic_videoTag"
            }
            ), [k, b, m])
              , T = (0,
            r.useCallback)((e => M ? (0,
            o.jsx)(Ln, {
                shouldOptProfile: M,
                playMode: a,
                isTag: !0,
                children: e
            }) : (0,
            o.jsx)(Bn, {
                isMobile: C,
                isMiniPlayer: l,
                style: t,
                children: e
            })), [C, l, a, M, t]);
            if (k && b && "US" !== m && "GB" !== m)
                return null;
            if (k && _) {
                const e = `${p(E)} @${f}`;
                return (0,
                o.jsx)(ko.Cz, {
                    target: i,
                    rel: "opener",
                    to: I,
                    onClick: S,
                    style: {
                        textDecoration: "none",
                        color: "inherit"
                    },
                    children: T(e)
                })
            }
            return k && !_ || w ? T(p(E)) : null
        }
        ));
        var Rn, Un;
        !function(e) {
            e.None = "0",
            e.Manual = "1",
            e.Auto = "2"
        }(Rn || (Rn = {})),
        function(e) {
            e.WebFyp = "web_fyp",
            e.BrowserMode = "browser",
            e.VideoDetail = "video_detail",
            e.WebMobileFyp = "web_mobile_fyp",
            e.MiniPlayer = "mini_player"
        }(Un || (Un = {}));
        var zn = i(48047);
        const Vn = (0,
        ie.A)("a", {
            target: "evbdqjo0"
        })({
            textWrap: "nowrap",
            textDecoration: "none",
            ":hover": {
                textDecoration: "none"
            }
        }, "label:AigcLink;")
          , Nn = (0,
        ie.A)("p", {
            target: "evbdqjo1"
        })(( ({theme: e, theme: {colors: t}}) => [(0,
        $t.zy)({
            theme: e,
            fontFamily: "TikTokFont",
            typography: "P3",
            color: "ConstTextInverse"
        }), {
            display: "inline-block",
            alignSelf: "flex-start",
            marginTop: "-4px",
            marginBottom: "8px",
            fontSize: "12px",
            fontWeight: 500
        }, {
            padding: "1px 3px",
            background: t.ConstBGMat,
            borderRadius: "2px",
            fontWeight: 600,
            textShadow: "0 0 16px rgba(0, 0, 0, .34)"
        }]), "label:AigcTagMobile;")
          , Fn = (0,
        ie.A)("p", {
            target: "evbdqjo2"
        })(( ({theme: e}) => [(0,
        $t.zy)({
            theme: e,
            fontFamily: "TikTokFont",
            typography: "P3",
            color: "ConstTextInverse"
        }), {
            color: "#FFF",
            display: "inline-block",
            alignSelf: "flex-start",
            fontSize: "10px",
            fontWeight: 500,
            padding: "1.5px 4px",
            background: "rgba(255, 255, 255, 0.34)",
            borderRadius: "4px",
            textShadow: "0 0 16px rgba(0, 0, 0, .34)"
        }]), "label:AigcTagMiniPlayer;")
          , Gn = 0
          , Hn = 1
          , Wn = 2
          , $n = {
            [Hn]: {
                teaLabelType: "1",
                i18nKey: "syntheticMedia_feed_bottomBanner_AIGCLabel"
            },
            [Wn]: {
                teaLabelType: "2",
                i18nKey: "AIGC_FYP_descSection_label"
            },
            [Gn]: {
                teaLabelType: "0",
                i18nKey: ""
            }
        }
          , Zn = (0,
        r.memo)((function({item: e, playMode: t, isMiniPlayer: i=!1}) {
            var n, a, l;
            const s = (0,
            Ei.s)()
              , d = Number(null !== (n = e.aigcLabelType) && void 0 !== n ? n : 0)
              , c = $n[d].i18nKey
              , m = $n[d].teaLabelType
              , g = (0,
            p.q)()
              , v = 0 !== d && g
              , {language: f="", region: y=""} = null !== (a = (0,
            St.W)(( () => ["language", "region"]), [])) && void 0 !== a ? a : {}
              , {isMobile: x} = null !== (l = (0,
            u.U)(( () => ["isMobile"]), [])) && void 0 !== l ? l : {}
              , b = (0,
            r.useMemo)(( () => x ? "web_mobile_fyp" : i ? "mini_player" : 2 === t ? "browser" : 4 === t ? "video_detail" : "web_fyp"), [t, x])
              , _ = (0,
            r.useMemo)(( () => ({
                aigc_label_type: m,
                enter_from: b,
                country_code: y
            })), [b, m, y])
              , k = (0,
            zn.sN)(b, f)
              , w = (0,
            r.useCallback)(( () => {
                var e;
                e = _,
                h.f.sendEvent("click_creator_label_aigc", e)
            }
            ), [_])
              , C = (0,
            r.useCallback)((e => x ? (0,
            o.jsx)(Nn, {
                children: e
            }) : i ? (0,
            o.jsxs)(Fn, {
                children: [" ", e]
            }) : (0,
            o.jsx)(Ln, {
                shouldOptProfile: !0,
                playMode: t,
                isTag: !0,
                children: e
            })), [x, i, t]);
            return (0,
            r.useEffect)(( () => {
                var e;
                v && (e = _,
                h.f.sendEvent("view_creator_label_aigc", e))
            }
            ), [v, _]),
            v ? (0,
            o.jsx)(Vn, {
                target: "_blank",
                href: k,
                onClick: w,
                children: C(s(c))
            }) : null
        }
        ));
        var qn = i(50289)
          , Jn = i(66283)
          , Yn = i(77732);
        const Qn = {
            white: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDM2IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA4TDYuNjg2MjkgOEM4LjgwODAyIDggMTAuODQyOSA3LjE1NzE0IDEyLjM0MzEgNS42NTY4NUwxNy4yOTI5IDAuNzA3MTA2QzE3LjY4MzQgMC4zMTY1ODIgMTguMzE2NiAwLjMxNjU4MiAxOC43MDcxIDAuNzA3MTA3TDIzLjY1NjkgNS42NTY4NkMyNS4xNTcxIDcuMTU3MTUgMjcuMTkyIDggMjkuMzEzNyA4TDM2IDhMMCA4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+",
            black: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDM2IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDhoNi42ODZhOCA4IDAgMCAwIDUuNjU3LTIuMzQzbDQuOTUtNC45NWExIDEgMCAwIDEgMS40MTQgMGw0Ljk1IDQuOTVBOCA4IDAgMCAwIDI5LjMxNCA4SDM2IDB6IiBmaWxsPSIjNTQ1NDU0IiBmaWxsLW9wYWNpdHk9Ii45MiIvPjwvc3ZnPg==",
            blue: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDM2IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDhoNi42ODZhOCA4IDAgMCAwIDUuNjU3LTIuMzQzbDQuOTUtNC45NWExIDEgMCAwIDEgMS40MTQgMGw0Ljk1IDQuOTVBOCA4IDAgMCAwIDI5LjMxNCA4SDM2IDB6IiBmaWxsPSIjMTBBMkM1Ii8+PC9zdmc+",
            border: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAQCAYAAAC1MDndAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADOSURBVHgB7deLDYIwGATgvxswQkdgAxnBERyBETpKncARcAPdoCPIBuc11pgYNaBF2sKXXICEAL1QHkq+AKDiQodsmU1YT0nP7Jkzc/TbSqle5sLSGsZifh3TSKp4cZo54P+6pIt5xottmQum58/RSo5wu5scpuP8OSRnHEDFnBCfP2YlpUDcB7iVEkUqyUqp8Pt0K2tavRJKchjPFV/OHca/3fy+WpaEA64x/DupliXiwHcDysnzIzAWFmA+lGNk9bYkI6uHMN0cEvu3ugKLPi0ttJ0IVQAAAABJRU5ErkJggg=="
        }
          , Kn = {
            white: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDM2IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA4TDYuNjg2MjkgOEM4LjgwODAyIDggMTAuODQyOSA3LjE1NzE0IDEyLjM0MzEgNS42NTY4NUwxNy4yOTI5IDAuNzA3MTA2QzE3LjY4MzQgMC4zMTY1ODIgMTguMzE2NiAwLjMxNjU4MiAxOC43MDcxIDAuNzA3MTA3TDIzLjY1NjkgNS42NTY4NkMyNS4xNTcxIDcuMTU3MTUgMjcuMTkyIDggMjkuMzEzNyA4TDM2IDhMMCA4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+",
            black: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDM2IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA4TDYuNjg2MjkgOEM4LjgwODAyIDggMTAuODQyOSA3LjE1NzE0IDEyLjM0MzEgNS42NTY4NUwxNy4yOTI5IDAuNzA3MTA2QzE3LjY4MzQgMC4zMTY1ODIgMTguMzE2NiAwLjMxNjU4MiAxOC43MDcxIDAuNzA3MTA3TDIzLjY1NjkgNS42NTY4NkMyNS4xNTcxIDcuMTU3MTUgMjcuMTkyIDggMjkuMzEzNyA4TDM2IDhMMCA4WiIgZmlsbD0iIzI1MjUyNSIvPgo8L3N2Zz4K",
            blue: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDM2IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDhoNi42ODZhOCA4IDAgMCAwIDUuNjU3LTIuMzQzbDQuOTUtNC45NWExIDEgMCAwIDEgMS40MTQgMGw0Ljk1IDQuOTVBOCA4IDAgMCAwIDI5LjMxNCA4SDM2IDB6IiBmaWxsPSIjMTBBMkM1Ii8+PC9zdmc+",
            border: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAQCAYAAAC1MDndAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADOSURBVHgB7deLDYIwGATgvxswQkdgAxnBERyBETpKncARcAPdoCPIBuc11pgYNaBF2sKXXICEAL1QHkq+AKDiQodsmU1YT0nP7Jkzc/TbSqle5sLSGsZifh3TSKp4cZo54P+6pIt5xottmQum58/RSo5wu5scpuP8OSRnHEDFnBCfP2YlpUDcB7iVEkUqyUqp8Pt0K2tavRJKchjPFV/OHca/3fy+WpaEA64x/DupliXiwHcDysnzIzAWFmA+lGNk9bYkI6uHMN0cEvu3ugKLPi0ttJ0IVQAAAABJRU5ErkJggg=="
        }
          , Xn = "rotate(180deg)"
          , ea = "rotate(90deg)"
          , ta = "rotate(-90deg)"
          , ia = {
            bottom: {
                top: "-8px",
                left: "50%",
                marginLeft: "-18px"
            },
            bottomLeft: {
                top: "-8px",
                left: "25%",
                marginLeft: "-18px"
            },
            bottomRight: {
                top: "-8px",
                right: "25%",
                marginRight: "-18px"
            },
            left: {
                transform: ea,
                right: "-22px",
                top: "50%",
                marginTop: "-5px"
            },
            leftBottom: {
                transform: ea,
                right: "-22px",
                bottom: "25%",
                marginTop: "5px"
            },
            leftTop: {
                transform: ea,
                right: "-22px",
                top: "25%"
            },
            right: {
                transform: ta,
                left: "-22px",
                top: "50%",
                marginTop: "-5px"
            },
            rightBottom: {
                transform: ta,
                left: "-22px",
                bottom: "25%",
                marginTop: "5px"
            },
            rightTop: {
                transform: ta,
                left: "-22px",
                top: "25%"
            },
            top: {
                transform: Xn,
                bottom: "-8px",
                left: "50%",
                marginLeft: "-18px"
            },
            topLeft: {
                transform: Xn,
                bottom: "-8px",
                left: "25%",
                marginLeft: "-18px"
            },
            topRight: {
                transform: Xn,
                bottom: "-8px",
                right: "25%",
                marginRight: "-18px"
            }
        };
        function oa({tooltipTheme: e, themeCtx: {colors: t, isDark: i}}) {
            return "black" === e ? {
                padding: "7.5px 12px",
                backgroundColor: t.ToastDefault,
                color: t.ConstTextInverse
            } : "white" === e ? {
                backgroundColor: i ? t.ToastDefault : t.BGPrimary,
                color: t.TextPrimary,
                padding: 0
            } : "blue" === e ? {
                backgroundColor: t.ConstSecondary2,
                color: t.ConstTextInverse,
                padding: 0
            } : null
        }
        const na = ({themeCtx: e, themeCtx: {fontFamilies: t}, tooltipTheme: i="black", withPadding: o=!0, arrow: n=!0, rtl: a=!1, placement: r="top", arrowStyle: l={}}) => (0,
        Jn.AH)({
            fontFamily: t.TikTokFont,
            boxSizing: "border-box",
            margin: "0",
            padding: "0",
            color: "rgba(0, 0, 0, 0.65)",
            fontSize: "14px",
            listStyle: "none",
            fontFeatureSettings: '"tnum"',
            position: "absolute",
            zIndex: 3060,
            display: "block",
            maxWidth: "300px",
            visibility: "visible",
            "&-hidden": {
                display: "none"
            }
        }, function({themeCtx: e, tooltipTheme: t, withPadding: i}) {
            const {fontWeights: o, typography: n} = e;
            return {
                "&-inner": (0,
                Jn.AH)({
                    textAlign: "left",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontWeight: o.semiBold
                }, n.P2, oa({
                    themeCtx: e,
                    tooltipTheme: t
                }), i && {
                    padding: "8px"
                })
            }
        }({
            themeCtx: e,
            tooltipTheme: i,
            withPadding: o
        }), function({arrow: e, tooltipTheme: t, placement: i, themeCtx: o, arrowStyle: n}) {
            return {
                "&-arrow": (0,
                Jn.AH)({
                    display: e ? "block" : "none",
                    position: "absolute",
                    width: "36px",
                    height: "8px",
                    backgroundImage: o.isDark ? `url(${Kn[t]})` : `url(${Qn[t]})`
                }, ia[i], n)
            }
        }({
            themeCtx: e,
            tooltipTheme: i,
            placement: r,
            arrow: n,
            arrowStyle: l
        }), a && {
            direction: "rtl",
            "& *": {
                direction: "rtl"
            }
        })
          , aa = e => {
            var {className: t, themeCtx: i, tooltipTheme: n, withPadding: a, rtl: r, arrow: l, prefixCls: s, placement: d, arrowStyle: c} = e
              , u = (0,
            _.Tt)(e, ["className", "themeCtx", "tooltipTheme", "withPadding", "rtl", "arrow", "prefixCls", "placement", "arrowStyle"]);
            return (0,
            o.jsx)(Yn.A, Object.assign({
                prefixCls: (0,
                Jn.cx)(t, na({
                    themeCtx: i,
                    tooltipTheme: n,
                    withPadding: a,
                    rtl: r,
                    arrow: l,
                    placement: d,
                    arrowStyle: c
                })),
                placement: d
            }, u))
        }
          , ra = (0,
        r.memo)((function(e) {
            var {children: t, fullscreenAdjust: i=!1, placement: n="top", align: a={}, overlay: l} = e
              , s = (0,
            _.Tt)(e, ["children", "fullscreenAdjust", "placement", "align", "overlay"]);
            const d = (0,
            Rt.u)()
              , c = ( (e, t={}) => (0,
            r.useMemo)(( () => {
                let i;
                switch (e) {
                case "top":
                case "topLeft":
                case "topRight":
                    i = [0, -10];
                    break;
                case "bottom":
                case "bottomLeft":
                case "bottomRight":
                    i = [0, 10];
                    break;
                case "leftTop":
                case "left":
                case "leftBottom":
                    i = [-10, 0];
                    break;
                default:
                    i = [10, 0]
                }
                return Object.assign({
                    offset: i
                }, t)
            }
            ), [t, e]))(n, a)
              , u = Object.keys(s).reduce(( (e, t) => (void 0 !== s[t] && (e[t] = s[t]),
            e)), {});
            return i ? (0,
            o.jsx)(aa, Object.assign({}, u, {
                getTooltipContainer: "undefined" == typeof document ? void 0 : () => {
                    var e, t, i, o;
                    return null !== (o = null !== (i = null !== (t = null !== (e = document.fullscreenElement) && void 0 !== e ? e : null === document || void 0 === document ? void 0 : document.webkitCurrentFullScreenElement) && void 0 !== t ? t : null === document || void 0 === document ? void 0 : document.mozFullScreenElement) && void 0 !== i ? i : null === document || void 0 === document ? void 0 : document.msFullscreenElement) && void 0 !== o ? o : document.body
                }
                ,
                destroyTooltipOnHide: {
                    keepParent: !1
                },
                themeCtx: d,
                placement: n,
                align: c,
                overlay: l
            }, {
                children: t
            })) : (0,
            o.jsx)(aa, Object.assign({}, u, {
                themeCtx: d,
                placement: n,
                align: c,
                overlay: l
            }, {
                children: t
            }))
        }
        ));
        var la = (0,
        co.r)((function(e) {
            return r.createElement("svg", (0,
            so._)({
                fill: "currentColor"
            }, e, {
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                className: e.className
            }), r.createElement("path", {
                d: "M17.36 15.84 6.4 16.87a3.08 3.08 0 0 0-1.77 5.38l3.12 2.72a36.73 36.73 0 0 0-3.21 4.57 23.7 23.7 0 0 0-1.72 3.58 13.8 13.8 0 0 0-.7 2.69c-.08.45-.12.9-.12 1.36a6.54 6.54 0 0 0 1.86 4.8 7.62 7.62 0 0 0 4.7 1.98 19.86 19.86 0 0 0 6.74-.83c.6-.17 1.23-.37 1.86-.6a52.34 52.34 0 0 0 15.07-8.76c4.95-3.99 8.87-8.39 11.23-12.43l.23-.4a17.6 17.6 0 0 0 2.25-6.24 6.95 6.95 0 0 0-1.29-5.24 6.61 6.61 0 0 0-3.62-2.25 9.97 9.97 0 0 0-1.6-.28 13.34 13.34 0 0 0-2.37 0 18.17 18.17 0 0 0-3.02.48 34.76 34.76 0 0 0-5.15 1.7l-1.42-3.24a3.14 3.14 0 0 0-5.73 0l-4.38 9.98Zm13.1-3.14c1.17-.49 2.29-.88 3.34-1.19a19.52 19.52 0 0 1 3.9-.7c.49-.03.95-.02 1.36.02.36.03.68.09.96.16a2.78 2.78 0 0 1 1.5.88l.14.2c.3.5.47 1.26.3 2.42-.1.66-.3 1.42-.63 2.24l-9.48-.9-1.38-3.13Zm8.9 7.73c-2.28 3.52-5.93 7.44-10.58 11.04a48.63 48.63 0 0 1-12.8 7.3c-.41.13-.84.25-1.27.37l2.5-11.08-8.62-7.51 11.44-1.08L24.6 9.05l4.57 10.42 10.2.96ZM10.5 40.05a9.96 9.96 0 0 1-1.55 0 4 4 0 0 1-2.1-.7 2.06 2.06 0 0 1-.36-.36 2.8 2.8 0 0 1-.51-1.78c0-.25.02-.53.07-.83a9.8 9.8 0 0 1 .51-1.92 14.97 14.97 0 0 1 1-2.2 23.1 23.1 0 0 1 .71-1.23 30.7 30.7 0 0 1 2.47-3.46l2.15 1.88-2.39 10.6Zm23.59 3.34-5.05-2.94a.42.42 0 0 1-.02-.72 62.3 62.3 0 0 0 7.67-5.78c.25-.22.63-.1.7.22l1.34 5.9c.59 2.63-2.29 4.7-4.64 3.32Z"
            }))
        }
        ));
        const sa = (0,
        ie.A)("div", {
            target: "e1fotf4v0"
        })(( ({theme: {colors: e}}) => ({
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            height: "20px",
            marginBottom: "8px",
            padding: "0 5px",
            borderRadius: "4px",
            backgroundColor: e.ConstBGInverse4,
            fontSize: "14px",
            color: "#fff"
        })), "label:DivMobileSubOnlyTag;")
          , da = (0,
        ie.A)("span", {
            target: "e1fotf4v1"
        })(( ({theme: {direction: e}}) => [{
            fontSize: "12px",
            fontWeight: 600
        }, (0,
        $t.mp)({
            direction: e,
            marginStart: "4px"
        })]), "label:SpanText;")
          , ca = (0,
        r.memo)((function({item: e}) {
            const t = (0,
            Ei.s)()
              , {isSmartPlayer: i=!1} = (0,
            v.Qt)();
            return !(null == e ? void 0 : e.subVideoMeta) || i ? null : (0,
            o.jsxs)(sa, {
                children: [(0,
                o.jsx)(la, {}), (0,
                o.jsx)(da, {
                    children: t("subVideo_viewing_lable")
                })]
            })
        }
        ));
        var ua = i(70822)
          , pa = i(71084)
          , ma = i(42125)
          , ha = i(50383);
        function ga(e) {
            return r.createElement("svg", (0,
            so._)({
                fill: "currentColor"
            }, e, {
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                className: "flip-rtl " + (e.className ? e.className : "")
            }), r.createElement("g", {
                clipPath: "url(#Icon-Q&A_Fill_LTR_svg__a)"
            }, r.createElement("path", {
                d: "M10 4a7 7 0 0 0-7 7v34.34a2 2 0 0 0 3.56 1.26l6.34-7.86a2 2 0 0 1 1.56-.74H38a7 7 0 0 0 7-7V11a7 7 0 0 0-7-7H10Zm10.4 12.64c0 .52-.41.93-.93.93h-2.94a.93.93 0 0 1-.93-.93c0-4.43 4.42-7.04 8.44-7.04 4.01 0 8.43 2.61 8.43 7.04 0 3.66-2.95 6.27-5.93 7.15a.56.56 0 0 0-.1.04V24a1 1 0 0 1-1 1h-2.8a1 1 0 0 1-1-1v-.4c0-2.45 1.94-3.95 3.55-4.42 1.67-.49 2.48-1.7 2.48-2.54 0-1.65-2.36-2.24-3.63-2.24s-3.64.6-3.64 2.24Zm6.95 13.19c0 1.56-.96 2.83-3.35 2.83-2.4 0-3.36-1.27-3.36-2.83S21.6 27 24 27s3.35 1.27 3.35 2.83Z"
            })), r.createElement("defs", null, r.createElement("clipPath", {
                id: "Icon-Q&A_Fill_LTR_svg__a"
            }, r.createElement("path", {
                d: "M0 0h48v48H0z"
            }))))
        }
        function va(e) {
            return r.createElement("svg", (0,
            so._)({
                fill: "currentColor"
            }, e, {
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                className: e.className
            }), r.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2 21.5c0-10.22 9.88-18 22-18s22 7.78 22 18c0 5.63-3.19 10.74-7.32 14.8a43.55 43.55 0 0 1-14.14 9.1A1.5 1.5 0 0 1 22.5 44v-5.04C11.13 38.4 2 31.34 2 21.5ZM14 25a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm13-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            }))
        }
        (0,
        co.r)(ga),
        (0,
        co.r)(va);
        var fa = i(35626)
          , ya = i.n(fa);
        const xa = "object" == typeof HTMLElement ? function(e) {
            return e instanceof HTMLElement
        }
        : function(e) {
            return e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName
        }
          , ba = []
          , _a = [];
        let ka;
        function wa(e, t) {
            var i;
            let o;
            const {defaultView: n} = e.ownerDocument;
            let a = t;
            return (null == n ? void 0 : n.getComputedStyle) ? (a = t.replace(/([A-Z])/g, "-$1").toLowerCase(),
            n.getComputedStyle(e, null).getPropertyValue(a)) : e.currentStyle ? (a = t.replace(/-(\w)/g, (function(e, t) {
                return t.toUpperCase()
            }
            )),
            o = null === (i = e.currentStyle) || void 0 === i ? void 0 : i[a],
            o) : ""
        }
        const Ca = function(e, t) {
            if (xa(e))
                if ("undefined" != typeof ResizeObserver) {
                    const i = new ResizeObserver(t);
                    i.observe(e),
                    _a.push({
                        el: e,
                        observer: i
                    })
                } else {
                    const i = {
                        el: e,
                        callback: t,
                        style: {
                            width: wa(e, "width"),
                            height: wa(e, "height")
                        }
                    };
                    ba.push(i),
                    ka || (ka && clearInterval(ka),
                    ka = setInterval((function() {
                        var e;
                        for (const t of ba) {
                            const i = t.el
                              , o = {
                                width: wa(i, "width"),
                                height: wa(i, "height")
                            };
                            ya()(o, t.style) || (t.style = {
                                width: o.width,
                                height: o.height
                            },
                            null === (e = t.callback) || void 0 === e || e.call(t))
                        }
                    }
                    ), 200))
                }
        }
          , Sa = function(e, t) {
            if ("undefined" == typeof ResizeObserver) {
                for (let i = 0; i < ba.length; i++)
                    if (ba[i].el === e && ba[i].callback === t) {
                        ba.splice(i, 1);
                        break
                    }
                0 === ba.length && (ka && clearInterval(ka),
                ka = null)
            } else
                for (let t = 0; t < _a.length; t++)
                    if (_a[t].el === e) {
                        _a[t].observer.unobserve(e),
                        _a[t].observer.disconnect(),
                        _a.splice(t, 1);
                        break
                    }
        }
          , Ma = (0,
        ie.A)("div", {
            target: "e1mzilcj0"
        })(( ({paddingBottom: e}) => ({
            display: "flex",
            width: "100%",
            overflow: "hidden",
            position: "relative",
            paddingBottom: e
        })), "label:DivWrapper;")
          , Aa = (0,
        ie.A)("div", {
            target: "e1mzilcj1"
        })(( ({shouldShow3Dot: e, shouldDesOnlyShow2Lines: t, isUnfold: i, lineClamp: o, lineHeight: n, marginTop: a, theme: {colors: r}}) => [{
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: e ? "-webkit-box" : "box",
            WebkitLineClamp: o,
            WebkitBoxOrient: "vertical",
            span: {
                display: "inline"
            },
            "*": {
                fill: r.Primary2
            },
            ":before": {
                content: '""',
                height: `calc(100% - ${n}px)`,
                float: "right",
                width: 0,
                marginTop: `${a}px`
            }
        }, !i && t && {
            br: {
                display: "none"
            }
        }]), "label:DivText;")
          , Ia = (0,
        ie.A)("button", {
            target: "e1mzilcj2"
        })(( ({theme: e}) => [(0,
        $t.zy)({
            theme: e,
            typography: "P2",
            fontWeight: "semiBold",
            color: "TextPrimary"
        }), {
            border: "none",
            outline: "none",
            background: "none",
            cursor: "pointer"
        }]), "label:ButtonExpand;")
          , Ea = (0,
        ie.A)(Ia, {
            target: "e1mzilcj3"
        })(( ({bottomBtnLeftOffset: e, isRightSide: t, theme: {direction: i}, shouldAdjustLeftBtn: o}) => [(0,
        $t.mp)({
            direction: i,
            end: t ? e : "",
            start: t ? "" : e
        }), {
            position: "absolute",
            bottom: o ? 16 : 0
        }]), "label:StyledButtonBottom;")
          , Ta = (0,
        ie.A)("div", {
            target: "e1mzilcj4"
        })(( ({moreBtnBottom: e, isMobileUiOptimize: t, btnShow: i, lineHeight: o, theme: {direction: n}}) => [{
            float: "rtl" === n ? "left" : "right",
            clear: "both",
            cursor: "pointer",
            display: i ? "flex" : "none",
            alignItems: "center",
            lineHeight: `${o}px`
        }, t && {
            position: "relative",
            bottom: e
        }]), "label:DivBtnWrapper;")
          , ja = (0,
        ie.A)("div", {
            target: "e1mzilcj5"
        })(( ({isUnfold: e, maxHeight: t}) => e ? {
            overflowY: "auto",
            maxHeight: t,
            scrollbarWidth: "none",
            "::-webkit-scrollbar": {
                width: 4
            }
        } : {}), "label:DivOverflowContainer;")
          , Pa = (0,
        r.memo)(( ({children: e, lineClamp: t=2, overflowLineNum: i=0, onlyKey: n="", maxLine: a=999, btnOnClick: l, lineHeight: s=21, fontSize: d, showExpandButton: c=!0, btnStyle: u, expandBtnText: m, isMobile: h=!1, forceRightSide: g=!1, isCtaClick: v=!1, ctaTrigger: f}) => {
            const y = (0,
            Ei.s)()
              , [x,_] = (0,
            r.useState)(!1)
              , [k,w] = (0,
            r.useState)(!1)
              , [C,S] = (0,
            r.useState)(!1)
              , [M,A] = (0,
            r.useState)(t)
              , [I,E] = (0,
            r.useState)("unset")
              , [T,j] = (0,
            r.useState)(!1)
              , {isMobileUiOptimize: P} = (0,
            p.Eo)()
              , O = (0,
            r.useRef)(null)
              , L = (0,
            r.useRef)(null)
              , B = (0,
            r.useCallback)(( () => {
                setTimeout(( () => {
                    var e, i, o, n, a, r, l;
                    if (null == O ? void 0 : O.current)
                        if (k)
                            E("unset"),
                            (null !== (a = null === (n = L.current) || void 0 === n ? void 0 : n.scrollHeight) && void 0 !== a ? a : 0) > (null !== (l = null === (r = L.current) || void 0 === r ? void 0 : r.clientHeight) && void 0 !== l ? l : 0) && j(!0);
                        else {
                            const n = null !== (e = O.current.scrollHeight) && void 0 !== e ? e : 0
                              , a = null !== (i = O.current.clientHeight) && void 0 !== i ? i : 0
                              , r = null !== (o = O.current.offsetHeight) && void 0 !== o ? o : 0;
                            j(!1);
                            const l = n - a > 15 || n >= s * t + 15 || r >= s * t + 15;
                            _(l),
                            l && E(t * s + 2 + "px")
                        }
                }
                ), 0)
            }
            ), [k, s, t])
              , D = (0,
            r.useCallback)((e => {
                v && f && (e.stopPropagation(),
                e.preventDefault(),
                f())
            }
            ), [v, f])
              , R = (0,
            r.useCallback)((e => {
                (0,
                wo.Gu)(e),
                A((e => e === t ? a : t)),
                v || w((e => !e)),
                l && l(k)
            }
            ), [l, k, t, a, v])
              , U = (0,
            r.useMemo)(( () => d ? (s - d) / 2 : 0), [d, s]);
            (0,
            r.useEffect)(( () => (O.current && Ca(O.current, B),
            () => {
                O.current && Sa(O.current, B)
            }
            )), [B]);
            const z = y(k ? "pc_web_less_btn" : "pc_web_more_btn");
            (0,
            r.useEffect)(( () => {
                w(!1),
                A(t),
                _(!1),
                B()
            }
            ), [n]),
            (0,
            r.useEffect)(( () => {
                (0,
                wo.nr)() || S(!0)
            }
            ), []);
            let V = s * i + "px";
            P && (V = "42vh");
            const N = null != m ? m : z
              , F = {
                shouldShow3Dot: !h && C
            };
            let G = h ? "26px" : "55px";
            k || (G = "unset");
            const H = h ? "0" : "-4px";
            let W = "3px";
            return h || (W = F.shouldShow3Dot ? "1px" : "6px"),
            (0,
            o.jsxs)(Ma, {
                paddingBottom: G,
                children: [(0,
                o.jsxs)(Aa, Object.assign({
                    isUnfold: k,
                    ref: O,
                    lineClamp: M,
                    lineHeight: s,
                    marginTop: U,
                    style: {
                        maxHeight: I
                    }
                }, F, {
                    shouldDesOnlyShow2Lines: !h,
                    children: [(0,
                    o.jsx)(Ta, {
                        btnShow: x,
                        lineHeight: s,
                        isMobileUiOptimize: P,
                        moreBtnBottom: W,
                        children: c && !k && (0,
                        o.jsx)(Ia, {
                            style: u,
                            type: "button",
                            onClick: R,
                            children: N
                        })
                    }), i > 0 ? (0,
                    o.jsx)(ja, {
                        lineClamp: t,
                        ref: L,
                        isUnfold: k,
                        maxHeight: V,
                        isMobileUiOptimize: P,
                        className: k && P && T ? b.dj : "",
                        onClick: D,
                        children: e
                    }) : e]
                })), k && (0,
                o.jsx)(Ea, {
                    style: u,
                    type: "button",
                    onClick: R,
                    isRightSide: h && P || g,
                    shouldAdjustLeftBtn: !h,
                    bottomBtnLeftOffset: H,
                    children: N
                })]
            })
        }
        ));
        var Oa, La = i(98014), Ba = i(45347), Da = i(11983), Ra = i(7880);
        !function(e) {
            e[e.User = 0] = "User",
            e[e.Challenge = 1] = "Challenge"
        }(Oa || (Oa = {}));
        const Ua = (e, t) => (0,
        o.jsx)(ma.qr, {
            children: e
        }, e + t)
          , za = (0,
        r.memo)((e => {
            const {item: t, DuetComp: i, LinkComp: n, pageType: a, QuestionComp: r, renderText: l=Ua, shouldReport: s, reportParams: d, styleType: c} = e
              , u = (0,
            lo.zy)()
              , p = (0,
            Ei.s)()
              , m = (0,
            oo._u)();
            if (!(null == t ? void 0 : t.desc))
                return null;
            const {textExtra: h, desc: g, authorId: v, id: f} = t;
            return (null == h ? void 0 : h.length) ? (0,
            o.jsx)(o.Fragment, {
                children: [...h].sort(( (e, t) => e.start - t.start)).reduce(( (t, h, y, x) => {
                    const {start: b, end: _, awemeId: k, userUniqueId: w, hashtagName: C, type: S, subType: M, userId: A, hashtagId: I, questionId: E="", questionContent: T=""} = h
                      , j = 0 === y ? 0 : x[y - 1].end
                      , P = b
                      , O = g.substring(j, P);
                    O && t.push(l(O, t.length - 1));
                    const L = (0,
                    Ra.L)(M)
                      , B = g.substring(b, _);
                    if (0 === S && k && !L) {
                        const n = (0,
                        bo.F)({
                            to: {
                                pathname: m({
                                    uniqueId: null != w ? w : "",
                                    videoId: k
                                })
                            },
                            location: u
                        });
                        t.push((0,
                        o.jsx)(i, {
                            href: n,
                            text: B,
                            index: t.length - 1,
                            id: k,
                            type: "video",
                            authorId: v,
                            groupId: f,
                            duetAuthorId: A,
                            shouldReport: s,
                            reportParams: d,
                            pageType: a,
                            styleType: "tag",
                            onLinkClick: e.onLinkClick,
                            onSearchResultClick: e.onSearchResultClick
                        }, B + y))
                    } else if (0 === S && A && !L) {
                        const i = (0,
                        bo.F)({
                            to: {
                                pathname: (0,
                                _o.fJR)({
                                    uniqueId: null != w ? w : ""
                                })
                            },
                            location: u
                        });
                        t.push((0,
                        o.jsx)(n, {
                            href: i,
                            text: B,
                            index: t.length - 1,
                            id: A,
                            type: "user",
                            authorId: v,
                            groupId: f,
                            shouldReport: s,
                            reportParams: d,
                            pageType: a,
                            styleType: c,
                            onLinkClick: e.onLinkClick,
                            onSearchResultClick: e.onSearchResultClick
                        }, B + y))
                    } else if (1 === S && C) {
                        const i = (0,
                        bo.F)({
                            to: {
                                pathname: (0,
                                _o.ATn)({
                                    tagName: C
                                })
                            },
                            location: u
                        })
                          , r = {
                            pageType: 3,
                            pageData: {
                                challengeName: C
                            }
                        }
                          , l = (0,
                        Ao.ry)(r, p);
                        t.push((0,
                        o.jsx)(n, {
                            href: i,
                            text: B,
                            index: t.length - 1,
                            id: null != I ? I : "",
                            type: "tag",
                            authorId: v,
                            groupId: f,
                            title: l,
                            shouldReport: s,
                            reportParams: d,
                            pageType: a,
                            styleType: c,
                            onLinkClick: e.onLinkClick,
                            onSearchResultClick: e.onSearchResultClick
                        }, B + y))
                    } else if (0 === S && L) {
                        const i = (0,
                        bo.F)({
                            to: {
                                pathname: `${(0,
                                _o.WDv)({
                                    questionId: E,
                                    questionContent: T
                                })}?_r=1`
                            },
                            location: u
                        });
                        t.push((0,
                        o.jsx)(r, {
                            href: i,
                            text: null != w ? w : "",
                            index: t.length - 1,
                            id: E,
                            type: "question",
                            authorId: v,
                            groupId: f,
                            pageType: a,
                            shouldReport: s,
                            reportParams: d,
                            styleType: c,
                            onLinkClick: e.onLinkClick,
                            onSearchResultClick: e.onSearchResultClick
                        }, B + y))
                    } else
                        t.push(l(B, t.length - 1));
                    return y === x.length - 1 && t.push(l(g.substring(_), t.length)),
                    t
                }
                ), [])
            }) : l(g, 0)
        }
        ))
          , Va = e => 0 === e.length ? e : "@" === e.charAt(0) ? e.substring(1) : e;
        function Na({type: e, id: t, authorId: i, groupId: o, duetAuthorId: n, text: a, isDuet: l, reportParams: s, shouldReport: d, pageType: c, onSearchResultClick: u}) {
            return (0,
            r.useCallback)((r => {
                if (r.stopPropagation(),
                d)
                    switch (e) {
                    case "tag":
                        Mo.q.handleEnterTagDetail(Object.assign({
                            tag_id: t,
                            author_id: i,
                            group_id: o,
                            enter_method: l ? "click_duet" : "click_caption",
                            type: Si.M[c]
                        }, s)),
                        La.mr.handleChannelGeneralClick("hashtag", "video_feed"),
                        null == u || u("tag");
                        break;
                    case "user":
                        Mo.q.handleEnterUser(Object.assign({
                            to_user_id: t,
                            author_id: i,
                            group_id: o,
                            enter_method: l ? "click_duet" : "click_caption",
                            to_user_name: a.substr(1),
                            type: Si.M[c]
                        }, s)),
                        null == u || u("person");
                        break;
                    case "video":
                        Mo.q.handleEnterVideo(Object.assign({
                            author_id: i,
                            group_id: o,
                            to_group_id: t,
                            to_author_id: n,
                            enter_method: l ? "click_duet" : "click_caption",
                            type: Si.M[c]
                        }, s));
                        break;
                    case "question":
                        Mo.q.handleEnterQuestion(Object.assign({
                            author_id: i,
                            group_id: o,
                            to_group_id: t,
                            enter_method: "click_anchor"
                        }, s))
                    }
            }
            ), [d, e, t, i, o, l, c, s, u, a, n])
        }
        const Fa = (0,
        r.memo)((e => {
            const {href: t, text: i, index: n, id: a, type: l, reportParams: s, shouldReport: d=!0, styleType: c, authorId: u, groupId: m, duetAuthorId: h, pageType: g, hasSpace: v=!0, onLinkClick: f, onSearchResultClick: y} = e
              , x = Na({
                type: l,
                id: a,
                text: i,
                isDuet: !0,
                reportParams: s,
                shouldReport: d,
                authorId: u,
                groupId: m,
                duetAuthorId: h,
                pageType: g,
                onSearchResultClick: y
            })
              , {isMobileUiOptimize: b} = (0,
            p.Eo)()
              , _ = (0,
            r.useCallback)((e => {
                x(e),
                null == f || f(e, t)
            }
            ), [x, t, f]);
            return (0,
            o.jsxs)(ma.ah, {
                to: t,
                onClick: _,
                styleType: c,
                isMobileUiOptimize: b,
                paddingStart: "22px",
                children: [b ? (0,
                o.jsx)(ma.es, {
                    children: (0,
                    o.jsx)(ha.A, {})
                }) : (0,
                o.jsx)(ma.Mv, {
                    fill: "#fff",
                    width: 16,
                    height: 16
                }), (0,
                o.jsxs)(ma.pM, {
                    children: [b ? Va(i) : i, v ? " " : ""]
                })]
            }, i + n)
        }
        ))
          , Ga = (0,
        r.memo)((e => {
            const {href: t, text: i, index: n, id: a, type: l, reportParams: s, shouldReport: d=!0, styleType: c, authorId: u, groupId: m, pageType: h, onLinkClick: g, onSearchResultClick: v} = e
              , f = (0,
            Ei.s)()
              , y = Na({
                type: l,
                id: a,
                text: i,
                isDuet: !0,
                reportParams: Object.assign(Object.assign({}, s), {
                    question_id: a
                }),
                shouldReport: d,
                authorId: u,
                groupId: m,
                pageType: h,
                onSearchResultClick: v
            })
              , x = (0,
            r.useCallback)((e => {
                if (!a)
                    return e.preventDefault(),
                    Da.F.destroy(),
                    void Da.F.open({
                        content: f("qa_page_reflow_page_blank_title"),
                        duration: 3,
                        widthType: "padding"
                    });
                y(e),
                null == g || g(e, t)
            }
            ), [y, t, a, g, f])
              , {isMobileUiOptimize: b} = (0,
            p.Eo)();
            return (0,
            o.jsxs)(ma.ah, {
                to: t,
                onClick: x,
                styleType: c,
                forceSSR: !0,
                isMobileUiOptimize: b,
                children: [b ? (0,
                o.jsx)(ma.es, {
                    children: (0,
                    o.jsx)(ga, {})
                }) : (0,
                o.jsx)(ma.Hg, {
                    fill: "#fff",
                    width: 12,
                    height: 12
                }), (0,
                o.jsxs)(ma.pM, {
                    children: [i, " "]
                })]
            }, i + n)
        }
        ))
          , Ha = (0,
        r.memo)((e => {
            const {href: t, text: i, index: n, id: a, type: l, authorId: s, groupId: d, reportParams: c, title: u, shouldReport: m=!0, pageType: h, hasSpace: g=!0, onLinkClick: v, onSearchResultClick: f} = e
              , y = Na({
                type: l,
                id: a,
                authorId: s,
                groupId: d,
                text: i,
                isDuet: !1,
                reportParams: c,
                shouldReport: m,
                pageType: h,
                onSearchResultClick: f
            })
              , {isMobileUiOptimize: x} = (0,
            p.Eo)()
              , b = (0,
            r.useCallback)((e => {
                y(e),
                null == v || v(e, t)
            }
            ), [y, t, v])
              , _ = (0,
            o.jsxs)(ma.pM, {
                children: [x ? Va(i) : i, g ? " " : ""]
            })
              , k = {
                to: t,
                key: i + n,
                onClick: b,
                title: u,
                isMobileUiOptimize: x
            };
            return x && "user" === l ? (0,
            o.jsxs)(ma.ah, Object.assign(Object.assign({}, k), {
                children: [(0,
                o.jsx)(ma.es, {
                    children: (0,
                    o.jsx)(va, {})
                }), _]
            })) : (0,
            o.jsx)(ma.JL, Object.assign(Object.assign({}, k), {
                children: _
            }))
        }
        ))
          , Wa = (0,
        r.memo)((function(e) {
            const {item: t, e2eTag: i, shouldReport: n=!0, reportParams: a, pageType: l, styleType: s="default", toggleSeeMore: d} = e
              , {id: u="", authorId: m=""} = (0,
            c.L$)(t)
              , {playModeForTea: h} = (0,
            pa.u)(l)
              , g = (0,
            r.useMemo)(( () => ({
                group_id: u,
                author_id: m,
                play_mode: h
            })), [m, u, h])
              , {isMobileUiOptimize: v} = (0,
            p.Eo)()
              , {needCtaClick: f} = (0,
            Ge.un)(l)
              , {CtaWrapperComponent: y, triggerClick: x} = (0,
            He.Z)({
                downloadType: "click_caption_description",
                pageType: 5,
                target: "wrapper_video_insert",
                video_id: u,
                enterMethod: "click_caption_description",
                extraLogParams: {
                    enter_method: "click_caption_description",
                    target: "video_caption"
                }
            })
              , {CtaWrapperComponent: b, triggerClick: _} = (0,
            He.Z)({
                downloadType: "click_caption_more",
                pageType: 5,
                target: "wrapper_video_insert",
                video_id: u,
                enterMethod: "click_caption_more",
                extraLogParams: {
                    enter_method: "click_caption_more",
                    target: "video_caption"
                }
            })
              , k = (0,
            r.useCallback)(( () => {
                So.O.handleTap({
                    target: "video_caption",
                    enter_method: "click_caption_description"
                }),
                x()
            }
            ), [x])
              , w = (0,
            r.useCallback)((e => {
                if (f)
                    return So.O.handleTap({
                        target: "video_caption",
                        enter_method: "click_caption_more"
                    }),
                    void _();
                null == d || d(e),
                e ? Ba.l.handleDescriptionFolded(g) : Ba.l.handleDescriptionUnfolded(g)
            }
            ), [g, f, _])
              , {width: C} = (0,
            We.l)()
              , {fontSize: S, lineHeight: M} = (0,
            r.useMemo)(( () => ({
                fontSize: C >= Zt.aU ? "22px" : "15px",
                lineHeight: C >= Zt.aU ? "14px" : "18px"
            })), [C])
              , A = (0,
            r.useMemo)(( () => ({
                color: "#fff",
                fontSize: S,
                lineHeight: M
            })), [S, M])
              , I = (0,
            r.useCallback)((t => {
                if (f)
                    return t.preventDefault(),
                    void k();
                e.onLinkClick
            }
            ), [e.onLinkClick, f]);
            return (0,
            o.jsxs)(ma.LL, {
                "data-e2e": i,
                isMobileUiOptimize: v,
                children: [f && (0,
                o.jsxs)(o.Fragment, {
                    children: [y, b]
                }), (0,
                o.jsx)(Pa, {
                    onlyKey: u,
                    lineClamp: 2,
                    lineHeight: 18,
                    btnStyle: A,
                    btnOnClick: w,
                    overflowLineNum: v ? 12 : void 0,
                    isMobile: !0,
                    isCtaClick: f,
                    ctaTrigger: k,
                    children: (0,
                    o.jsx)(za, {
                        item: t,
                        DuetComp: Fa,
                        QuestionComp: Ga,
                        LinkComp: Ha,
                        reportParams: a,
                        shouldReport: n,
                        pageType: l,
                        styleType: s,
                        onLinkClick: I,
                        onSearchResultClick: e.onSearchResultClick
                    })
                })]
            })
        }
        ))
          , $a = (0,
        r.memo)(( ({id: e="", isPlaying: t, isActive: i, pageType: n, style: a, isHideAuthor: l, onLinkClick: s}) => {
            const d = (0,
            lo.zy)()
              , u = (0,
            Ei.s)()
              , {item: m, user: h} = (0,
            gt.y)(e)
              , g = (0,
            r.useRef)(null)
              , [f,y] = (0,
            r.useState)(0)
              , [x,b] = (0,
            r.useState)(!1)
              , {music: {id: _="", title: k="", authorName: w="", authorFtc: C=!1, isCopyrighted: S=!1}={}, id: M, authorId: A="", stateControlledMedia: I, poi: E, imagePost: T, itemMute: j=!1} = (0,
            c.L$)(m)
              , {needCtaClick: P} = (0,
            Ge.un)(n)
              , {uniqueId: O="", verified: L, nickname: B="", isADVirtual: D} = (0,
            c.L$)(h)
              , R = `@${D ? B : O}`
              , {isMobileUiOptimize: U} = (0,
            p.Eo)()
              , z = (0,
            p.Ns)()
              , V = U ? B : R
              , N = D ? "#" : (0,
            bo.F)({
                to: {
                    pathname: `${(0,
                    _o.fJR)({
                        uniqueId: O
                    })}${d.search}`
                },
                location: d
            })
              , F = {
                pageType: 1,
                pageData: {
                    nickname: O,
                    uniqueId: O,
                    verified: L
                }
            }
              , G = (0,
            Ao.ry)(F, u)
              , {CtaWrapperComponent: H, triggerClick: W} = (0,
            He.Z)({
                downloadType: "click_caption_username",
                pageType: 1,
                target: "wrapper_user",
                extraLogParams: {
                    enter_method: "click_caption_username",
                    target: "video_caption"
                },
                user_id: A
            })
              , $ = (0,
            r.useCallback)((e => {
                if (D)
                    e.preventDefault();
                else {
                    if (P)
                        return So.O.handleTap({
                            target: "video_caption",
                            enter_method: "click_caption_username"
                        }),
                        e.preventDefault(),
                        void W();
                    null == s || s(),
                    Mo.q.handleEnterUser({
                        to_user_id: A,
                        author_id: A,
                        group_id: M,
                        type: Si.M[n],
                        enter_method: "click_caption_username"
                    })
                }
            }
            ), [A, M, s, D, n, P, W])
              , Z = k ? j ? u("music_detail_unavailable_1") : "Promoted Music" === k ? k : k.replace(`- ${w}`, "") + (w ? `- ${w}` : "") : "";
            (0,
            r.useEffect)(( () => {
                var e, t;
                y((null !== (t = null === (e = g.current) || void 0 === e ? void 0 : e.clientWidth) && void 0 !== t ? t : 0) / 4 / 40)
            }
            ), []);
            const q = j ? "#" : (0,
            bo.F)({
                to: {
                    pathname: (0,
                    _o.pHc)({
                        musicName: k,
                        musicId: _
                    })
                },
                location: d
            })
              , J = {
                pageType: 4,
                pageData: {
                    authorName: w,
                    musicName: k
                }
            }
              , Y = j ? u("music_detail_unavailable_1") : (0,
            Ao.ry)(J, u)
              , Q = C || !_ || S && z
              , {isRTL: K} = (0,
            xe.m)()
              , {CtaWrapperComponent: X, triggerClick: ee} = (0,
            He.Z)({
                downloadType: "click_music_name",
                pageType: 4,
                target: "wrapper_music",
                extraLogParams: {
                    enter_method: "click_music_name",
                    target: "video_caption"
                },
                music_id: _
            })
              , te = (0,
            r.useCallback)((e => {
                if (P)
                    return So.O.handleTap({
                        target: "video_caption",
                        enter_method: "click_music_name"
                    }),
                    e.preventDefault(),
                    void ee();
                Mo.q.handleEnterMusicDetail({
                    music_id: _,
                    author_id: A,
                    group_id: M,
                    type: Si.M[n],
                    enter_method: "click_music_name"
                }),
                null == s || s()
            }
            ), [A, M, s, _, n, P, ee])
              , {userTag: ie, bluevTag: oe, descTag: ne, musicTag: ae, musicNameTag: re} = function(e) {
                return 5 === e ? {
                    userTag: "video-username",
                    bluevTag: void 0,
                    descTag: void 0,
                    musicTag: "video-music-icon",
                    musicNameTag: "music-name"
                } : {
                    userTag: "video-username",
                    bluevTag: "video-bluev",
                    descTag: "video-desc",
                    musicTag: "video-music-icon",
                    musicNameTag: "video-music-info"
                }
            }(n)
              , le = (0,
            Io.H)(ko.Cz)
              , se = {
                scene: "video_feed"
            }
              , {playModeForTea: de} = (0,
            pa.u)(n)
              , {videoSubtitle: ce, videoSubtitleState: ue, showTooltip: pe, showSubtitle: me, overlayEle: he, captionStyle: ge, handleClickCaption: ve} = (0,
            ft.BT)({
                isActive: i,
                groupId: M,
                authorId: A,
                playModeForTea: de
            })
              , fe = (0,
            r.useMemo)(( () => ({
                marginBottom: "8px"
            })), [])
              , ye = (0,
            r.useMemo)(( () => ({
                author_id: A,
                group_id: M
            })), [A, M])
              , {isGoogleBot: be, googlebotVideoSubtitle: _e} = (0,
            ft.XI)({
                itemId: e
            })
              , {isTtincar: ke} = (0,
            v.Qt)()
              , we = ke || z && ![124, 122].includes(n)
              , Ce = (0,
            r.useMemo)(( () => be && _e ? (0,
            o.jsxs)(ma.nW, {
                children: [_e, (0,
                o.jsx)(ma._P, {})]
            }) : me ? (0,
            o.jsx)(ra, {
                visible: pe,
                overlay: he,
                children: (0,
                o.jsx)(ma.nW, {
                    style: ge,
                    onClick: ve,
                    children: 3 === ue ? (0,
                    o.jsxs)(o.Fragment, {
                        children: [ce, (0,
                        o.jsx)(ma._P, {})]
                    }) : (0,
                    o.jsx)(In.A, {
                        width: 19,
                        height: 21
                    })
                })
            }) : null), [be, _e, me, pe, he, ge, ve, ue, ce])
              , Se = (0,
            r.useCallback)((e => {
                b(e)
            }
            ), []);
            return (0,
            o.jsx)(Pt.Z2, {
                children: ({css: e}) => (0,
                o.jsxs)(ma.pR, {
                    isRTL: K,
                    className: e(a),
                    children: [P && (0,
                    o.jsxs)(o.Fragment, {
                        children: [H, X]
                    }), U && (0,
                    o.jsx)(ma.II, {
                        isExpand: !x
                    }), Ce, (0,
                    o.jsx)(ca, {
                        item: m
                    }), (0,
                    o.jsx)(ua.W, {
                        type: "video",
                        info: E,
                        teaParams: ye
                    }), !l && (0,
                    o.jsx)(ma.xn, {
                        isMobileUiOptimize: U,
                        children: (0,
                        o.jsx)(le, {
                            section: "user",
                            to: N,
                            title: G,
                            onClick: $,
                            reportParams: se,
                            children: (0,
                            o.jsxs)(ma.VB, {
                                children: [(0,
                                o.jsx)(ma.pM, {
                                    "data-e2e": ie,
                                    children: V
                                }), L && (0,
                                o.jsx)(ma.iI, {
                                    children: (0,
                                    o.jsx)(qn.s, {
                                        width: "100%",
                                        height: "100%",
                                        "data-e2e": oe
                                    })
                                })]
                            })
                        }, R)
                    }), (0,
                    o.jsx)(En.w, {
                        style: fe,
                        stateControlledMedia: I,
                        labelType: 1
                    }), (null == T ? void 0 : T.title) && (0,
                    o.jsx)(ma.a_, {
                        children: null == T ? void 0 : T.title
                    }), (0,
                    o.jsx)(Wa, {
                        item: m,
                        onLinkClick: s,
                        ellipsisOnNarrow: !0,
                        pageType: n,
                        e2eTag: ne,
                        shouldReport: !0,
                        toggleSeeMore: Se
                    }), m && (0,
                    o.jsx)(Dn, {
                        item: m
                    }), m && (0,
                    o.jsx)(Zn, {
                        item: m
                    }), !Q && Z && (0,
                    o.jsx)(ma.Gr, {
                        children: (0,
                        o.jsx)(ma.hU, {
                            children: (0,
                            o.jsxs)(le, {
                                section: "music",
                                to: q,
                                title: Y,
                                style: {
                                    display: "flex",
                                    fontWeight: "normal"
                                },
                                onClick: te,
                                reportParams: se,
                                disabled: j,
                                children: [(0,
                                o.jsx)(ma.bQ, {
                                    isRTL: K,
                                    isMusicUnavailable: j,
                                    "data-e2e": ae
                                }), (0,
                                o.jsx)(ma.OV, {
                                    "data-e2e": re,
                                    isMobileUiOptimize: U,
                                    hideAnimation: we,
                                    children: (0,
                                    o.jsx)(ma.jm, {
                                        playing: t,
                                        isRTL: K,
                                        sec: U ? f : 2,
                                        ref: g,
                                        hideAnimation: we,
                                        children: new Array(we ? 1 : 4).fill(0).map(( (e, t) => (0,
                                        o.jsx)(ma.SM, {
                                            children: Z
                                        }, Z + t)))
                                    })
                                })]
                            }, Y)
                        })
                    })]
                })
            })
        }
        ));
        var Za = i(35495)
          , qa = i(18736);
        const Ja = (0,
        r.memo)((function(e) {
            const t = (0,
            Ei.s)()
              , {isMobileUiOptimize: i} = (0,
            p.Eo)();
            return (0,
            o.jsx)(qa.nX, {
                isMobileUiOptimize: i,
                children: (0,
                o.jsxs)(o.Fragment, {
                    children: [(0,
                    o.jsx)(qa.NJ, {
                        "data-e2e": "share-block-icon",
                        onClick: e.onClick,
                        children: (0,
                        o.jsx)(Qi, {
                            width: 24,
                            height: 24
                        })
                    }), (0,
                    o.jsx)(qa.mh, {
                        "data-e2e": "share-report-text",
                        children: t("nonpersonalizedFeeds_feed_entrypoint_manageFeed")
                    })]
                })
            })
        }
        ));
        var Ya = i(2408);
        const Qa = [11, 0, 5]
          , Ka = (0,
        r.memo)((function({id: e="", index: t, pageType: i, hideOperator: l, isHideAuthor: s=!1, onLinkClick: d, onFavor: u}) {
            var m, g, v;
            const f = Gt()
              , x = u
              , {item: b} = (0,
            gt.y)(null != e ? e : "")
              , {music: _, itemMute: k, authorId: w="", warnInfo: C, subVideoMeta: S} = (0,
            c.L$)(b)
              , {authorFtc: M} = (0,
            c.L$)(_)
              , A = null !== (m = null != M ? M : k) && void 0 !== m && m
              , {showUnMuteBtn: I} = (0,
            ai.Iv)({
                itemOriginalMute: A,
                itemCopyrightMute: k
            })
              , {shouldUseIOSPlayer: E} = Fe()
              , T = (0,
            r.useContext)(mt)
              , j = (0,
            r.useRef)(null)
              , P = (0,
            r.useContext)(Qe)
              , O = f === t;
            (0,
            r.useEffect)(( () => {
                !E && O && P.setVideoRef(j)
            }
            ), [E, O, P]);
            const [L,B] = (0,
            r.useState)(!1)
              , D = (0,
            r.useMemo)(( () => ({
                handleCloseShareSheet: () => B(!1),
                handleOpenShareSheet: () => B(!0)
            })), [])
              , R = function(e, t) {
                var i, o, a, r, l;
                const {item: s, user: d} = (0,
                gt.y)(e)
                  , u = (0,
                n.Ph)(At.M)
                  , {language: m="en", wid: h} = (0,
                c.L$)((0,
                St.W)(( () => ["language", "wid"]), []))
                  , {id: g="", authorId: v="", author: f=""} = (0,
                c.L$)(s)
                  , y = (0,
                n.Ph)(ao.m, {
                    selector: e => {
                        var t;
                        return null === (t = e.users) || void 0 === t ? void 0 : t[f]
                    }
                    ,
                    dependencies: [f]
                })
                  , x = (0,
                oo._u)()
                  , b = (0,
                p.ZO)();
                let _ = "/report";
                s && (_ += `/video?lang=${m}&objectId=${g}&ownerId=${v}&videoOwner=${JSON.stringify(y)}`);
                const k = `?is_from_webapp=1&sender_device=mobile&sender_web_id=${h}`;
                let w = u.platforms;
                return b && (w = null !== (i = null == w ? void 0 : w.filter((e => e !== no.Ag.facebook && e !== no.Z8.messenger))) && void 0 !== i ? i : []),
                {
                    pageType: t,
                    reportUrl: _,
                    title: "",
                    desc: null !== (o = null == s ? void 0 : s.desc) && void 0 !== o ? o : "",
                    image: !(null == s ? void 0 : s.takeDown) && s && s.video && null !== (a = ro(null == s ? void 0 : s.video.cover)) && void 0 !== a ? a : "",
                    disableShare: !s || !d || s.forFriend || Boolean(d.secret) || Boolean(s.vl1),
                    url: null !== (r = `${location.protocol}//${location.host}${x(s)}${k}`) && void 0 !== r ? r : "",
                    shareEnabled: null === (l = null == s ? void 0 : s.shareEnabled) || void 0 === l || l,
                    platforms: w
                }
            }(null != e ? e : "", i)
              , U = (0,
            y.MA)(b)
              , z = (0,
            a.Nj)(Ci.A)
              , V = (0,
            r.useCallback)((t => {
                var o;
                z.handleShare(Object.assign({
                    platform: t,
                    group_id: e,
                    author_id: w,
                    type: Si.M[i],
                    poi_id: null === (o = null == b ? void 0 : b.poi) || void 0 === o ? void 0 : o.id,
                    is_sub_only_video: S ? 1 : 0
                }, U))
            }
            ), [z, e, w, i, null === (g = null == b ? void 0 : b.poi) || void 0 === g ? void 0 : g.id, S, U])
              , N = (0,
            r.useCallback)(( () => {
                var t;
                Mi.o.handleShowReport(Object.assign({
                    videoId: e,
                    authorId: w,
                    type: "video",
                    poi_id: null === (t = null == b ? void 0 : b.poi) || void 0 === t ? void 0 : t.id,
                    is_sub_only_video: S ? 1 : 0
                }, U))
            }
            ), [w, e, null === (v = null == b ? void 0 : b.poi) || void 0 === v ? void 0 : v.id, U, S])
              , {isRTL: F} = (0,
            xe.m)()
              , G = null == C ? void 0 : C[0]
              , {key: H="", text: W, url: $} = (0,
            c.L$)(G)
              , Z = (0,
            r.useCallback)(( () => {
                var t;
                t = {
                    enter_from: "foryou_bottom",
                    video_id: e,
                    target: H
                },
                h.f.sendEvent("warn_info_click", t)
            }
            ), [e, H])
              , q = (0,
            r.useMemo)(( () => {
                if (!G)
                    return null;
                const e = (0,
                o.jsxs)(bi, {
                    children: [(0,
                    o.jsx)(fi, {}), (0,
                    o.jsx)(_i, {
                        children: G.text
                    }), G.url && (0,
                    o.jsx)(yi, {})]
                });
                return $ ? (0,
                o.jsx)(xi, {
                    title: W,
                    href: $,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: Z,
                    children: e
                }) : e
            }
            ), [G, $, W, Z])
              , J = (0,
            r.useRef)(!1);
            (0,
            r.useEffect)(( () => {
                var t;
                !J.current && G && (J.current = !0,
                t = {
                    enter_from: "foryou_bottom",
                    video_id: e,
                    target: H
                },
                h.f.sendEvent("warn_info_show", t))
            }
            ), [e, H, G]);
            const Y = (0,
            r.useMemo)(( () => ({
                position: "absolute",
                bottom: 0,
                left: F ? "unset" : 0,
                right: F ? 0 : "unset",
                zIndex: 5
            })), [F])
              , [Q,K] = (0,
            Ya.HY)((e => e.isManageModalOpen), Re.bN)
              , {isPlaying: X} = T
              , {groupId: ee, ICON_LIST: te} = (e => {
                const {item: t, item: {id: i, authorId: o}={}, user: n} = (0,
                gt.y)(null != e ? e : "")
                  , {showDownloadIcon: a, showDuetIcon: r} = function(e, t) {
                    const {downloadSetting: i, duetSetting: o, relation: n, uniqueId: a, secUid: r} = (0,
                    c.L$)(e)
                      , {duetEnabled: l, subVideoMeta: s} = (0,
                    c.L$)(t)
                      , d = (0,
                    Ki.b3)({
                        uniqueId: a,
                        secUid: r
                    })
                      , u = 2 === n;
                    return {
                        showDownloadIcon: (d || !s) && (d || 0 === i || 1 === i && u),
                        showDuetIcon: l && (d || !s) && (d || 0 === o || 1 === o && u)
                    }
                }(n, t)
                  , l = (0,
                Ei.s)();
                return {
                    groupId: i,
                    authorId: o,
                    ICON_LIST: [{
                        Icon: Ri,
                        text: l("webapp_savevid_btn"),
                        isShow: a,
                        enterMethod: "click_save_video"
                    }, {
                        Icon: Qi,
                        text: Xi,
                        enterMethod: "click"
                    }, {
                        Icon: Vi,
                        text: l("webapp_duet_btn"),
                        isShow: r,
                        enterMethod: "click_duet"
                    }, {
                        Icon: qi,
                        text: l("webapp_livephoto_btn"),
                        isShow: a,
                        enterMethod: "click_live_photo"
                    }, {
                        Icon: Gi,
                        text: l("webapp_shareasgif_btn"),
                        isShow: a,
                        enterMethod: "click_share_gif"
                    }]
                }
            }
            )(e)
              , {hasNonPersonalizedMenu: ie} = (0,
            p.cE)()
              , oe = (0,
            r.useCallback)(( () => {
                K.setIsManageModalOpen(!0),
                D.handleCloseShareSheet(),
                Ai.$.handleClickManageFeeds(),
                Ai.$.handleManageFeedsPopUp()
            }
            ), [K, D])
              , ne = (0,
            r.useMemo)(( () => te.map((e => e.text === Xi ? ie ? -1 === Qa.indexOf(i) ? null : (0,
            o.jsx)(Ja, {
                onClick: oe
            }) : null : (0,
            o.jsx)(eo.X, Object.assign({
                onClose: D.handleCloseShareSheet,
                pageType: i,
                video_id: ee
            }, e), e.text))).filter((e => null !== e))), [te, ee, ie, i, oe, D.handleCloseShareSheet]);
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsxs)(wi, {
                    children: [q, I && O && (0,
                    o.jsx)(Oi, {
                        id: e
                    }), (0,
                    o.jsxs)(ki, {
                        children: [(0,
                        o.jsx)(An, {
                            id: e,
                            pageType: i,
                            shareCommand: D,
                            isPlaying: X,
                            onFavor: x,
                            hideOperator: l,
                            onLinkClick: d
                        }), b && (0,
                        o.jsx)($a, {
                            id: e,
                            isActive: O,
                            isPlaying: X,
                            pageType: i,
                            isHideAuthor: s,
                            onLinkClick: d,
                            style: Y
                        })]
                    })]
                }), (0,
                o.jsxs)(to.z, Object.assign(Object.assign({
                    isVisible: L,
                    onClose: D.handleCloseShareSheet
                }, R), {
                    copyNotify: !0,
                    authorId: w,
                    hasReport: !0,
                    itemId: e,
                    onShare: V,
                    onReport: N,
                    children: [(0,
                    o.jsx)(io.Z, {
                        itemId: e,
                        pageType: i,
                        onClose: D.handleCloseShareSheet
                    }), ne]
                })), (0,
                o.jsx)(Za.J, {
                    visible: Q,
                    onClose: () => {
                        K.setIsManageModalOpen(!1),
                        Ai.$.handleCloseManageFeedsPopUp()
                    }
                })]
            })
        }
        ))
          , Xa = (0,
        r.memo)((function(e) {
            var t, i, l, s, d, m;
            const {list: h, id: f, index: x, playMode: b, showImage: _, showPause: k, muted: w, loading: C, hasFooterBar: S, pageType: M, teaExtraParams: A, hideOperator: I, isHideAuthor: E, onClick: T, onClose: j, onLinkClick: P, skipRenderSlide: O=!1, photoVideoRef: L, onLoadingStatusChanged: B=me()} = e
              , D = Gt()
              , R = (0,
            a.Nj)(Ct.V)
              , {item: U, itemDispatcher: z, user: V} = (0,
            gt.y)(null != f ? f : "")
              , {digged: N, video: F} = (0,
            c.L$)(U)
              , {subtitleInfos: G=[]} = (0,
            c.L$)(F)
              , {secUid: H=""} = (0,
            c.L$)(V);
            let W = null !== (t = g("multimedia_player_type", {
                type: "TT"
            }).type) && void 0 !== t ? t : "TT";
            const {enabled: $, xg: Z} = (0,
            p.Wq)();
            $ && (W = Z ? "XG" : "TT");
            const q = (0,
            Ve.IB)(G)
              , {isTtincar: J} = (0,
            v.Qt)()
              , Y = (0,
            r.useRef)(null)
              , Q = (0,
            a.Nj)(wt)
              , {user: K} = (0,
            c.L$)((0,
            St.W)(( () => ["user"]), []))
              , {isGoogleBot: X} = (0,
            c.L$)((0,
            u.U)(( () => ["isGoogleBot"]), []))
              , {shouldUseIOSPlayer: ee} = Fe()
              , te = (0,
            r.useContext)(Qe)
              , ie = (0,
            r.useContext)(tt)
              , {armCoreContentEvent: oe} = (0,
            r.useContext)(Mt.e)
              , ae = (0,
            n.wA)(At.M)
              , {needCtaClick: re} = (0,
            Ge.un)(M)
              , le = D === x;
            (0,
            r.useEffect)(( () => {
                !ee && le && te.setVideoRef(Y)
            }
            ), [ee, le, te]);
            const ce = null === (i = te.videoRef) || void 0 === i ? void 0 : i.current;
            (0,
            ft.kU)({
                videoDom: ce,
                subtitleUrl: q,
                shouldUsePlayer: !ee && le
            });
            const ue = xt(U, "image")
              , {music: pe, itemMute: ge} = (0,
            c.L$)(U)
              , ve = null !== (s = null !== (l = null == pe ? void 0 : pe.authorFtc) && void 0 !== l ? l : ge) && void 0 !== s && s
              , {showUnMuteBtn: fe, showPlayBtn: ye} = (0,
            ai.Iv)({
                itemOriginalMute: ve,
                playMode: b,
                itemCopyrightMute: ge
            })
              , xe = ( (e, t, i=!1, o=!0) => {
                const {zoomCover: n, cover: a="", dynamicCover: l} = e
                  , s = null == n ? void 0 : n[null != t ? t : "720"]
                  , d = () => {
                    const {supportWebp: e, supportAvif: t} = (0,
                    It.PD)()
                      , o = (0,
                    Et.G)(s);
                    return i && l && (1 !== (0,
                    Et.G)(l) || e) ? l : !s || 1 === o && !e || 2 === o && !t ? a : s
                }
                  , [c,u] = (0,
                r.useState)(o ? i && l ? l : s || a : d());
                return (0,
                r.useEffect)(( () => {
                    u(d())
                }
                ), [e]),
                c
            }
            )((null == U ? void 0 : U.video) || {}, "720")
              , be = {
                pageType: M,
                uid: f,
                secUid: H,
                avatarUrl: null == V ? void 0 : V.avatarThumb
            }
              , _e = e => e ? "double_tap" : "click_like"
              , {showModalOrLater: ke} = (0,
            Ft.z)(Object.assign(Object.assign({}, be), {
                enterMethod: _e(!0)
            }))
              , {showModalOrLater: we} = (0,
            Ft.z)(Object.assign(Object.assign({}, be), {
                enterMethod: _e(!1)
            }))
              , Ce = (0,
            r.useCallback)(( (e, t=!1) => {
                if (!K || re)
                    t ? ke() : we();
                else {
                    if (e && t) {
                        const {clientX: t, clientY: i} = e;
                        if (new zt(t,i).emit(),
                        N)
                            return
                    }
                    ae.setIsFlip(!0),
                    z.postLikeVideo({
                        id: f,
                        enter_method: _e(t)
                    })
                }
            }
            ), [K, ke, we, ae, z, f, N]);
            (0,
            r.useEffect)(( () => {
                !ee && le && (te.setVideoRef(Y),
                ie.setDoFavor(Ce))
            }
            ), [ee, le, te, ie, Ce]);
            const Se = (0,
            r.useRef)(!1)
              , Me = (0,
            r.useRef)()
              , Ae = (0,
            r.useCallback)((e => {
                if (Me.current && clearTimeout(Me.current),
                !Se.current)
                    return Se.current = !0,
                    window.setTimeout(( () => {
                        Se.current = !1
                    }
                    ), 300),
                    void (Me.current = window.setTimeout(( () => {
                        null == T || T()
                    }
                    ), 300));
                Ce(e, !0)
            }
            ), [Ce, T])
              , Ie = yt(U, A)
              , Ee = (0,
            r.useRef)(null)
              , Te = (0,
            r.useCallback)(( () => {
                const e = Ee.current;
                e && (e.style.display = "none")
            }
            ), [])
              , je = (0,
            r.useCallback)(( () => {
                null == oe || oe(),
                R.reportActualFMP()
            }
            ), [oe])
              , Pe = (0,
            r.useCallback)(( () => {
                if (Ie) {
                    const {author_id: e} = Ie;
                    Q.handleVideoButtonClick({
                        group_id: f,
                        author_id: e
                    })
                }
            }
            ), [Q, Ie, f])
              , Oe = (0,
            r.useCallback)(( () => {
                if (Ie) {
                    const {author_id: e} = Ie;
                    Q.handleVideoButtonShow({
                        group_id: f,
                        author_id: e
                    })
                }
            }
            ), [Q, Ie, f])
              , {videoMaskType: Le="general", showVideoMask: Be, videoMaskTitle: De, videoMaskDesc: Re, icon: Ue, groupId: Ne, upperBtnText: He, lowerBtnText: We, handleUpperBtnClick: $e, handleLowerBtnClick: Ze, handleSkipVideo: qe, maskStyle: Je} = (0,
            ai.Fg)({
                item: U,
                list: h,
                onClose: j
            })
              , Ye = (0,
            r.useRef)(!1)
              , Ke = (0,
            y.mx)(U)
              , Xe = (0,
            r.useContext)(pt);
            if ((0,
            r.useEffect)(( () => {
                Ke && Xe.setIsPlaying(!0)
            }
            ), [Ke, Xe]),
            O && 0 === D && !Ye.current)
                return Ye.current = !0,
                null;
            const et = !(null == U ? void 0 : U.takeDown) && xe && !Ke;
            return (0,
            o.jsxs)(mi, {
                height: "100%",
                "data-e2e": le ? "video-slide-active" : `video-slide-${x}`,
                children: [Be && (0,
                o.jsx)(oi, {
                    videoMaskType: Le,
                    groupId: Ne,
                    icon: Ue,
                    title: De,
                    desc: Re,
                    upperBtnText: He,
                    lowerBtnText: We,
                    onUpperBtnClick: $e,
                    onLowerBtnClick: Ze,
                    onSkipVideo: qe,
                    item: U,
                    list: h,
                    style: Je
                }), ee && et && (0,
                o.jsx)(de, {
                    ref: Ee,
                    horizontal: Ht(ue),
                    src: xe,
                    alt: null == U ? void 0 : U.desc,
                    loading: J ? "eager" : "lazy",
                    visibility: _ || !!X,
                    onError: Te,
                    onLoad: je
                }), !ee && et && (0,
                o.jsx)(se, {
                    ref: Ee,
                    horizontal: Ht(ue),
                    forceContain: J,
                    src: xe,
                    alt: null == U ? void 0 : U.desc,
                    loading: J ? "eager" : "lazy",
                    visibility: _ || !!X,
                    onError: Te,
                    onLoad: je
                }), (X || !ee) && !Be && (Ke ? le && (0,
                o.jsx)(ze, {
                    ref: L,
                    playMode: b,
                    item: U,
                    teaParams: Ie,
                    index: x
                }) : (0,
                o.jsx)(he, {
                    bitrateInfo: null === (d = null == U ? void 0 : U.video) || void 0 === d ? void 0 : d.bitrateInfo,
                    src: null !== (m = null == U ? void 0 : U.video.playAddr) && void 0 !== m ? m : "",
                    autoPlay: !Be,
                    muted: w,
                    isGoogleBot: X,
                    horizontal: ue,
                    platform: "android",
                    id: f,
                    index: x,
                    playMode: b,
                    currentIndex: D,
                    teaParams: Ie,
                    ref: Y,
                    onVideoEnded: te.handleEnded,
                    onVideoStatusChanged: te.handleStatusChanged,
                    onInteract: Pe,
                    onInteractRequired: Oe,
                    onLoadingStatusChanged: B,
                    playerTypeConfig: W
                }, f)), (0,
                o.jsx)(Ka, {
                    id: f,
                    index: x,
                    pageType: M,
                    hideOperator: I,
                    isHideAuthor: E,
                    onLinkClick: P,
                    height: "100%",
                    hasFooterBar: S,
                    onFavor: Ce
                }), le && (0,
                o.jsx)(hi, {
                    onClick: Ae,
                    children: !k || !ye || fe && le ? null : (0,
                    o.jsx)(gi, {
                        style: {
                            backgroundImage: `url(${Vt})`
                        },
                        "data-e2e": "video-play-icon"
                    })
                }), le && C && !X && (0,
                o.jsx)(ne, {})]
            }, f)
        }
        ))
          , er = (0,
        r.memo)((e => {
            const {index: t, id: i, pageType: n} = e
              , {user: a} = (0,
            c.L$)((0,
            St.W)(( () => ["user"]), []))
              , {isGoogleBot: l} = (0,
            c.L$)((0,
            u.U)(( () => ["isGoogleBot"]), []))
              , s = Gt()
              , d = (0,
            r.useMemo)(( () => 0 === n || 5 === n || 11 === n && a), [n, a]);
            return !l && (s - t < -2 || s - t > 1) ? (0,
            o.jsx)(vi, {
                height: "100%"
            }, `fake-${i}`) : 0 === t && d ? (0,
            o.jsx)(Mt.e.Provider, {
                value: Nt.ri,
                children: (0,
                o.jsx)(Xa, Object.assign({}, e))
            }) : (0,
            o.jsx)(Xa, Object.assign({}, e))
        }
        ));
        var tr = i(90159)
          , ir = i(97086);
        const or = {
            0: {
                defaultMute: !0
            },
            2: {
                defaultMute: !1
            }
        };
        function nr(e) {
            return [(0,
            $t.jJ)({
                min: Zt.gL,
                style: {
                    height: e - 56 + "px!important"
                }
            }), (0,
            $t.jJ)({
                min: Zt.n1,
                style: {
                    height: e - 64 + "px!important"
                }
            }), (0,
            $t.jJ)({
                min: Zt.L7,
                style: {
                    height: e - 72 + "px!important"
                }
            }), (0,
            $t.jJ)({
                max: Zt.gL,
                minAspectRatio: "640/320",
                style: {
                    height: e - 32 + "px!important"
                }
            })]
        }
        const ar = (0,
        ie.A)("div", {
            target: "e1b783rp0"
        })(( ({swiperHeight: e, forceHeight: t, noBannerMode: i}) => ({
            position: "absolute",
            width: "100%",
            height: t && !i ? "calc(100% - 49px)" : "100%",
            boxSizing: "border-box",
            ".swiper": {
                height: "100%!important",
                zIndex: 4
            },
            ".swiper-wrapper": [{
                height: i ? `${e}px!important` : e - 49 + "px!important"
            }, ...nr(e)]
        })), "label:DivSwiperContainer;")
          , rr = [1, 4, 3, 113]
          , lr = (sr = (0,
        r.memo)((function(e) {
            var t, i, h, _, k, w, C;
            const {list: S, playMode: M=0, pageType: A, hasFooterBar: I=!0, hideOperator: E, isHideAuthor: T, disableMuteAutoplay: j=!1, currentIndex: P=0, onLinkClick: O, onClose: L, e2eTag: B="video-card", teaExtraParams: D, skipUpdateVideo: R=!1} = e
              , [U,z] = (0,
            r.useState)(!1)
              , V = (0,
            r.useContext)(Ze.oA)
              , N = (0,
            r.useContext)(Ze.dk)
              , {currentIndex: F} = N
              , G = (0,
            d.Hy)()
              , H = (0,
            n.wA)(dt.i)
              , {isGoogleBot: W, isIOS: $} = (0,
            c.L$)((0,
            u.U)(( () => ["isGoogleBot", "isIOS"]), []))
              , Z = W
              , {isMobileUiOptimize: q} = (0,
            p.Eo)()
              , [J] = (0,
            r.useState)(P > 0 && rr.indexOf(A) > -1)
              , Y = (0,
            m._B)();
            let Q = null !== (t = g("multimedia_player_type", {
                type: "TT"
            }).type) && void 0 !== t ? t : "TT";
            const {enabled: K, xg: X} = (0,
            p.Wq)();
            K && (Q = X ? "XG" : "TT");
            const ee = (0,
            m.M2)()
              , {isTtincar: te} = (0,
            v.Qt)()
              , {needVVLimit: ie, videoViewLimit: oe} = (0,
            Ge.un)(A);
            (0,
            $e.$_)(A, F),
            (0,
            r.useEffect)(( () => {
                var e, t;
                V.setCurrentIndex(P),
                null === (t = null === (e = null == V ? void 0 : V.swiper) || void 0 === e ? void 0 : e.slideTo) || void 0 === t || t.call(e, P)
            }
            ), [V, null == V ? void 0 : V.swiper, P]),
            (0,
            r.useEffect)(( () => {
                var e;
                G.updateVideo({
                    currentVideo: {
                        id: null !== (e = S[P]) && void 0 !== e ? e : "",
                        index: P
                    }
                })
            }
            ), [P, A, G]);
            const ne = (0,
            r.useContext)(Qe)
              , ae = (0,
            r.useContext)(mt)
              , re = (0,
            r.useContext)(pt)
              , {height: le} = (0,
            We.l)();
            (0,
            r.useEffect)(( () => {
                z(!0)
            }
            ), []);
            const se = (0,
            n.wA)(f.w)
              , de = (0,
            r.useRef)(null)
              , {shouldUseIOSPlayer: ue} = Fe();
            (e => {
                const {defaultMute: t} = or[e]
                  , i = (0,
                m._B)();
                (0,
                r.useEffect)(( () => {
                    t || i.setMobileDefaultMute(!1)
                }
                ), [t, i])
            }
            )(M),
            (0,
            r.useEffect)(( () => {
                ue && ne.setVideoRef(de)
            }
            ), [ue, ne]);
            const {item: pe} = (0,
            gt.y)(null !== (i = S[F]) && void 0 !== i ? i : "")
              , me = xt(pe, "video")
              , ge = yt(pe, D)
              , {showVideoMask: ve} = (0,
            ai.Fg)({
                item: pe,
                list: S
            })
              , {handleSwiperInit: fe} = function(e) {
                const {showVideoMask: t=!1, skipUpdate: i, onSlideChange: o, videoItem: a, onSlideChangeTransitionEnd: l} = e
                  , s = (0,
                r.useContext)(pt)
                  , u = (0,
                r.useContext)(Ze.oA)
                  , p = (0,
                r.useContext)(Ze.dk)
                  , m = (0,
                r.useContext)(Qe)
                  , h = (0,
                d.Hy)()
                  , g = (0,
                n.wA)(At.M)
                  , {currentIndex: v} = p
                  , f = (0,
                r.useRef)(v);
                f.current = v;
                const {shouldUseIOSPlayer: y} = Fe()
                  , x = (0,
                tr._g)(( () => {
                    s.setShowPlayer(!1)
                }
                ), [s], 100)
                  , b = (0,
                r.useCallback)(( () => {
                    var o, n, a, r, l;
                    setTimeout(( () => {
                        s.setShowPlayer(!0)
                    }
                    ), 10),
                    t || null === (a = null === (n = null === (o = m.videoRef) || void 0 === o ? void 0 : o.current) || void 0 === n ? void 0 : n.play) || void 0 === a || a.call(n),
                    y || i || h.updateVideo({
                        currentVideo: {
                            id: null !== (r = e.list[f.current]) && void 0 !== r ? r : "",
                            index: null !== (l = f.current) && void 0 !== l ? l : 0
                        }
                    }),
                    e.onSlideReady && e.onSlideReady(v)
                }
                ), [s, t, y, e, v, m.videoRef, h, i])
                  , _ = (0,
                r.useCallback)((e => {
                    var t;
                    g.setIsFlip(!1);
                    const i = null !== (t = e.activeIndex) && void 0 !== t ? t : 0;
                    u.setCurrentIndex(i),
                    s.setIsFirstPlay(!0)
                }
                ), [s, g, u])
                  , k = (0,
                r.useCallback)((e => {
                    var t;
                    const i = null !== (t = e.activeIndex) && void 0 !== t ? t : 0
                      , n = e.previousIndex
                      , {authorId: r=""} = (0,
                    c.L$)(a);
                    null == l || l(i),
                    null == o || o(i, n, r)
                }
                ), [v, o, l, a])
                  , w = (0,
                r.useCallback)((e => {
                    u.setSwiper(e)
                }
                ), [u]);
                (0,
                r.useEffect)(( () => {
                    const e = () => {
                        var e;
                        null === (e = u.swiper) || void 0 === e || e.update()
                    }
                    ;
                    return window.addEventListener("resize", e),
                    () => window.removeEventListener("resize", e)
                }
                ), [u.swiper]),
                (0,
                r.useEffect)(( () => {
                    u.bindHandleActiveIndexChange(_),
                    u.bindHandleSliderMove(x),
                    u.bindHandleTransitionEnd(b),
                    u.bindHandleSlideChangeEnd(k)
                }
                ), [b, k, u, x, _]);
                const C = e.list.length > 0;
                return (0,
                r.useEffect)(( () => b()), [C]),
                {
                    handleSwiperInit: w
                }
            }(Object.assign(Object.assign({}, e), {
                videoItem: pe,
                showVideoMask: ve,
                skipUpdate: R
            }))
              , ye = (0,
            y.mx)(pe)
              , xe = (0,
            r.useRef)(null);
            !function(e) {
                const t = (0,
                r.useContext)(Ze.dk)
                  , {currentIndex: i} = t
                  , o = (0,
                r.useContext)(pt)
                  , a = (0,
                n.wA)(At.M)
                  , l = (0,
                r.useContext)(Qe)
                  , s = (0,
                r.useContext)(Ze.oA)
                  , {loop: d} = (0,
                v.Qt)()
                  , {shouldUseIOSPlayer: c} = Fe()
                  , u = (0,
                r.useRef)();
                (0,
                r.useEffect)(( () => {
                    l.bindhandleStatusChanged((e => {
                        if (o.setVideoStatus(e),
                        c) {
                            "playing" === e && o.state.isFirstPlay && o.setIsFirstPlay(!1);
                            const t = "pause" === e || "error" === e;
                            o.setShowPause(t)
                        } else {
                            const t = !("playing" === e || "waiting" === e || "ended" === e);
                            o.setShowPause(t)
                        }
                        if ("waiting" === e)
                            return void (u.current = window.setTimeout(( () => {
                                o.setIsPlaying(!0),
                                c && o.setShowPause(!1)
                            }
                            ), 1e3));
                        clearTimeout(u.current);
                        const t = "playing" === e;
                        o.setIsPlaying(t)
                    }
                    ))
                }
                ), [c, o, l]),
                (0,
                r.useEffect)(( () => {
                    e && o.setShowPause(!1)
                }
                ), [e, o, i]),
                (0,
                r.useEffect)(( () => {
                    l.bindHandleEnded(( () => {
                        var e;
                        a.setIsFlip(!0),
                        d || null === (e = s.swiper) || void 0 === e || e.slideNext()
                    }
                    ))
                }
                ), [s, i, o, l, d, a])
            }(ye),
            (0,
            $e.NU)({
                group_id: S[F],
                author_id: null !== (h = null == pe ? void 0 : pe.authorId) && void 0 !== h ? h : "",
                page_type: A
            });
            const {video: be, itemMute: _e=!1} = (0,
            c.L$)(pe)
              , {subtitleInfos: ke=[]} = (0,
            c.L$)(be)
              , we = (0,
            Ve.IB)(ke)
              , {showUnMuteBtn: Ce} = (0,
            ai.Iv)({
                itemCopyrightMute: _e
            })
              , Se = (0,
            r.useMemo)(( () => j ? null != _e && _e : ee || _e), [j, _e, ee]);
            (0,
            r.useEffect)(( () => {
                0 !== M && Y.setCanRetry(!1)
            }
            ), [Y, M]),
            (0,
            r.useEffect)(( () => {
                var e, t;
                const i = null === (e = ne.videoRef) || void 0 === e ? void 0 : e.current;
                null === (t = null == i ? void 0 : i.play) || void 0 === t || t.call(i)
            }
            ), [ne.videoRef, ee]);
            const Me = (0,
            r.useCallback)(( () => {
                var e, t, i, o, n, a, r, l, s, d;
                const c = null === (e = ne.videoRef) || void 0 === e ? void 0 : e.current;
                if (H.setShowPlayBtn(!0),
                Ce)
                    return Ne.p.handleVideoUnmuteButtonClicked(),
                    void Y.setMobileDefaultMute(!1);
                if (ye) {
                    const e = null === (t = null == xe ? void 0 : xe.current) || void 0 === t ? void 0 : t.swiper
                      , s = null === (i = null == xe ? void 0 : xe.current) || void 0 === i ? void 0 : i.audio;
                    return (null == e ? void 0 : e.paused) ? (null === (o = null == e ? void 0 : e.play) || void 0 === o || o.call(e),
                    null === (n = null == s ? void 0 : s.play) || void 0 === n || n.call(s)) : (null === (a = null == e ? void 0 : e.pause) || void 0 === a || a.call(e, "click_pause"),
                    null === (r = null == s ? void 0 : s.pause) || void 0 === r || r.call(s)),
                    re.setIsPlaying(!(null == e ? void 0 : e.paused)),
                    void re.setShowPause(null !== (l = null == e ? void 0 : e.paused) && void 0 !== l && l)
                }
                ae.isPlaying ? null === (s = null == c ? void 0 : c.pause) || void 0 === s || s.call(c) : null === (d = null == c ? void 0 : c.play) || void 0 === d || d.call(c)
            }
            ), [Y, ye, H, ae.isPlaying, re, Ce, ne.videoRef])
              , Ae = null === (_ = ne.videoRef) || void 0 === _ ? void 0 : _.current;
            (0,
            ft.kU)({
                videoDom: Ae,
                subtitleUrl: we,
                shouldUsePlayer: null != ue && ue
            });
            const {loading: Ie, handleCanPlayWithLoading: Ee, handlePauseWithLoading: Te, handlePlayingWithLoading: je, handleWaitingWithLoading: Pe, handleErrorWithLoading: Oe} = (0,
            x.iJ)({
                isCurrentVideo: !0
            })
              , Le = (0,
            r.useCallback)(( (e, t) => {
                F === t && (e ? Pe() : Ee())
            }
            ), [Pe, Ee, F]);
            (0,
            r.useEffect)(( () => () => se.setHasClosedMask(!1)), [se]);
            const Be = P && P >= 0
              , [De,Re] = (0,
            r.useState)(Z)
              , Ue = (0,
            a.Nj)(ce.Gs)
              , qe = (0,
            a.Nj)(wt);
            (0,
            r.useEffect)(( () => {
                Re(!0),
                Ue.reset()
            }
            ), [Ue]);
            const Je = (0,
            r.useCallback)(( () => {
                if (ge) {
                    const {author_id: e, group_id: t} = ge;
                    qe.handleVideoButtonClick({
                        group_id: t,
                        author_id: e
                    })
                }
            }
            ), [qe, ge])
              , Ye = (0,
            r.useCallback)(( () => {
                if (ge) {
                    const {author_id: e, group_id: t} = ge;
                    qe.handleVideoButtonShow({
                        group_id: t,
                        author_id: e
                    })
                }
            }
            ), [qe, ge])
              , Ke = (0,
            r.useCallback)(( () => {
                te && te && de.current && "hidden" === document.visibilityState && "function" == typeof de.current.pause && de.current.pause()
            }
            ), [te, de])
              , Xe = q ? {
                noSwipingClass: b.dj
            } : {}
              , {CtaWrapperComponent: et, triggerClick: tt} = (0,
            He.Z)({
                downloadType: "swipe_slide",
                pageType: 5,
                target: "wrapper_video_insert",
                video_id: S[F],
                enterMethod: "video",
                extraLogParams: {
                    target: "swipe_slide"
                }
            })
              , it = (0,
            r.useRef)(!1)
              , ot = (0,
            r.useCallback)((e => {
                if (ie && oe && F === oe - 1 && !$) {
                    const {startY: t, currentY: i} = e.touches;
                    t - i > 150 && !it.current && (tt(),
                    it.current = !0)
                }
                V.handleSliderMove()
            }
            ), [ie, oe, F, it, tt, V.handleSliderMove])
              , nt = (0,
            r.useCallback)(( () => {
                it.current = !1,
                V.handleTransitionEnd()
            }
            ), [it, V.handleTransitionEnd])
              , at = De ? (0,
            o.jsx)(s.RC, Object.assign(Object.assign({
                autoHeight: !0,
                initialSlide: Be ? P : F,
                direction: "vertical",
                speed: 200,
                onSlideChangeTransitionEnd: V.handleSlideChangeEnd,
                onSlideChangeTransitionStart: V.handleSlideChangeStart,
                onTransitionEnd: nt,
                onSlideChange: V.handleSlideChange,
                onSliderMove: ot,
                onActiveIndexChange: V.handleActiveIndexChange,
                onInit: fe
            }, Xe), {
                children: S.slice(0, oe).map(( (e, t) => (0,
                o.jsx)(s.qr, {
                    children: (0,
                    o.jsx)(er, {
                        pageType: A,
                        playMode: M,
                        index: t,
                        id: e,
                        list: S,
                        height: "100%",
                        paddingBottom: "52px",
                        muted: Se,
                        showImage: (!ae.showPlayer || ae.isFirstPlay) && U,
                        showPause: ae.showPause,
                        loading: !ae.showPause && Ie,
                        teaExtraParams: D,
                        onClick: Me,
                        hasFooterBar: I,
                        isHideAuthor: T,
                        hideOperator: E,
                        onClose: L,
                        onLinkClick: O,
                        skipRenderSlide: J,
                        photoVideoRef: xe,
                        onLoadingStatusChanged: Le
                    })
                }, e)))
            })) : (0,
            o.jsx)(er, {
                pageType: A,
                index: 0,
                list: S,
                id: S[0],
                playMode: M,
                height: "100%",
                paddingBottom: "52px",
                muted: Se,
                showImage: (!ae.showPlayer || ae.isFirstPlay) && U,
                showPause: ae.showPause,
                loading: !ae.showPause && Ie,
                teaExtraParams: D,
                onClick: Me,
                hasFooterBar: I,
                isHideAuthor: T,
                hideOperator: E,
                onClose: L,
                onLinkClick: O,
                skipRenderSlide: J,
                photoVideoRef: xe,
                onLoadingStatusChanged: Le
            })
              , rt = (0,
            r.useRef)(null)
              , lt = (e => {
                const {isIOS: t} = (0,
                c.L$)((0,
                u.U)(( () => ["isIOS"]), []));
                return (0,
                r.useMemo)(( () => {
                    var i;
                    if (!e.current || (0,
                    ir.fU)())
                        return !1;
                    const o = window.innerHeight - (null === (i = e.current) || void 0 === i ? void 0 : i.clientHeight) != 49;
                    return Boolean(t) && (0,
                    ir.qk)() && o
                }
                ), [t, e.current])
            }
            )(rt)
              , {showPlayer: st} = ae;
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)("link", {
                    rel: "stylesheet",
                    href: l
                }), ie && et, (0,
                o.jsx)(ar, {
                    swiperHeight: le,
                    forceHeight: lt,
                    noBannerMode: !0,
                    "data-e2e": B,
                    ref: rt,
                    children: at
                }), !W && ue && (ye ? (0,
                o.jsx)(ze, {
                    show: st,
                    ref: xe,
                    playMode: M,
                    item: pe,
                    teaParams: ge,
                    index: F,
                    onAudioPlay: je
                }) : (0,
                o.jsx)(he, {
                    bitrateInfo: null === (k = null == pe ? void 0 : pe.video) || void 0 === k ? void 0 : k.bitrateInfo,
                    src: null !== (C = null === (w = null == pe ? void 0 : pe.video) || void 0 === w ? void 0 : w.playAddr) && void 0 !== C ? C : "",
                    autoPlay: !ve,
                    muted: Se,
                    isGoogleBot: W,
                    horizontal: me,
                    platform: "ios",
                    playMode: M,
                    index: F,
                    currentIndex: F,
                    teaParams: ge,
                    visibility: st,
                    ref: de,
                    onVideoStatusChanged: ne.handleStatusChanged,
                    onVideoEnded: ne.handleEnded,
                    onVideoCanPlay: Ee,
                    onVideoPause: Te,
                    onVideoPlay: Ke,
                    onVideoPlaying: je,
                    onVideoWaiting: Pe,
                    onVideoError: Oe,
                    onInteract: Je,
                    onInteractRequired: Ye,
                    onLoadingStatusChanged: Le,
                    playerTypeConfig: Q
                }))]
            })
        }
        )),
        function(e) {
            const t = (0,
            r.useContext)(tt)
              , i = (0,
            r.useContext)(Ze.oA)
              , n = (0,
            r.useContext)(Qe)
              , a = (0,
            r.useMemo)(( () => ({
                swiperContext: i,
                videoContext: n,
                favorContext: t
            })), [i, n, t])
              , {isSmartPlayer: l} = (0,
            v.Qt)();
            return (0,
            r.useEffect)(( () => {
                if (l)
                    return function(e) {
                        if (!e)
                            return;
                        const t = function(e) {
                            const t = Object.create(null);
                            return at.forEach((e => {
                                t[e] = rt
                            }
                            )),
                            t.playNext = lt((function() {
                                var t;
                                null === (t = e.swiperContext.swiper) || void 0 === t || t.slideNext()
                            }
                            )),
                            t.playPrev = lt((function() {
                                var t;
                                null === (t = e.swiperContext.swiper) || void 0 === t || t.slidePrev()
                            }
                            )),
                            t.play = lt((function() {
                                var t, i, o, n;
                                null === (n = null === (o = null === (i = null === (t = e.videoContext) || void 0 === t ? void 0 : t.videoRef) || void 0 === i ? void 0 : i.current) || void 0 === o ? void 0 : o.play) || void 0 === n || n.call(o)
                            }
                            )),
                            t.pause = lt((function() {
                                var t, i, o, n;
                                null === (n = null === (o = null === (i = null === (t = e.videoContext) || void 0 === t ? void 0 : t.videoRef) || void 0 === i ? void 0 : i.current) || void 0 === o ? void 0 : o.pause) || void 0 === n || n.call(o)
                            }
                            )),
                            t.stop = lt((function() {
                                var i, o, n, a;
                                t.pause(),
                                null === (a = null === (n = null === (o = null === (i = e.videoContext) || void 0 === i ? void 0 : i.videoRef) || void 0 === o ? void 0 : o.current) || void 0 === n ? void 0 : n.seek) || void 0 === a || a.call(n, 0)
                            }
                            )),
                            t.like = lt((function() {
                                e.favorContext.doFavor()
                            }
                            )),
                            Object.freeze(t),
                            window[nt] = t,
                            () => {
                                window[nt] = void 0
                            }
                        }(e)
                          , i = function(e) {
                            if (!document.getElementById(ot) && e) {
                                const t = document.createElement("script");
                                t.setAttribute("id", ot),
                                t.textContent = Object.keys(e).map((e => `function ${e}() {return ${nt}.${e}();}`)).join("\n"),
                                document.body.append(t)
                            }
                            return st
                        }(window[nt]);
                        return () => {
                            i(),
                            t()
                        }
                    }(a)
            }
            ), [a, l]),
            (0,
            o.jsx)(sr, Object.assign({}, e))
        }
        );
        var sr;
        const dr = (0,
        r.memo)((e => (0,
        o.jsx)(Xe, {
            children: (0,
            o.jsx)(Ze.dQ, {
                children: (0,
                o.jsx)(ht, {
                    children: (0,
                    o.jsx)(it, {
                        children: (0,
                        o.jsx)(lr, Object.assign({}, e))
                    })
                })
            })
        })))
    }
    ,
    48867: e => {
        e.exports = JSON.parse('{"v":"4.6.3","fr":25,"ip":0,"op":32,"w":60,"h":60,"nm":"home_fllowpeople","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.503],"y":[0.99]},"o":{"x":[0.499],"y":[-0.004]},"n":["0p503_0p99_0p499_-0p004"],"t":2,"s":[90],"e":[230]},{"t":15}]},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":2,"s":[30,30.125,0],"e":[33.625,31.625,0],"to":[0.60416668653488,0.25,0],"ti":[0.0625,0.04166666790843,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.185,"y":0},"n":"0p667_1_0p185_0","t":15,"s":[33.625,31.625,0],"e":[33.625,31.625,0],"to":[-0.03754998371005,-0.0250333212316,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.185,"y":0},"n":"0p667_1_0p185_0","t":23,"s":[33.625,31.625,0],"e":[30.625,30.5,0],"to":[0,0,0],"ti":[0,0,0]},{"t":31}]},"a":{"a":0,"k":[0,0,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":23,"s":[100,100,100],"e":[0,0,100]},{"t":31}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[0.062,0.062]],"c":false}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"st","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":4},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":2,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-0.125,-9],[-0.125,9]],"c":false}],"e":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0,-9],[0,11.635]],"c":false}]},{"t":15}]},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"st","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[1,1,1,1],"e":[0.9960784,0.172549,0.3333333,1]},{"t":15}]},"o":{"a":0,"k":100},"w":{"a":0,"k":4},"lc":2,"lj":2,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"st","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":4},"lc":2,"lj":1,"ml":4,"nm":"Stroke 2","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[92.974,100.419],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":4,"cix":2,"ix":2,"mn":"ADBE Vector Group"}],"ip":0,"op":250,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.317],"y":[0.913]},"n":["0p667_1_0p317_0p913"],"t":7,"s":[0],"e":[87]},{"t":15}]},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":23,"s":[28.562,34.696,0],"e":[29.875,30.321,0],"to":[0.21875,-0.72916668653488,0],"ti":[-0.21875,0.72916668653488,0]},{"t":31}]},"a":{"a":0,"k":[-16.594,-16.137,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":23,"s":[100,100,100],"e":[0,0,100]},{"t":31}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":7,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-7.628,-14.905],[-7.624,-14.902]],"c":false}],"e":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-14.237,-14.284],[-22.874,-7.187]],"c":false}]},{"t":15}]},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"st","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[1,1,1,1],"e":[0.9960784,0.172549,0.3333333,1]},{"t":15}]},"o":{"a":0,"k":100},"w":{"a":0,"k":4},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":7,"op":249,"st":-1,"bm":0,"sr":1},{"ddd":0,"ind":4,"ty":4,"nm":"shape2","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.788],"y":[0.516]},"o":{"x":[0.333],"y":[0]},"n":["0p788_0p516_0p333_0"],"t":2,"s":[0],"e":[132]},{"i":{"x":[0.268],"y":[0.968]},"o":{"x":[0.301],"y":[0.69]},"n":["0p268_0p968_0p301_0p69"],"t":7,"s":[132],"e":[319]},{"t":15}]},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":2,"s":[30,30.125,0],"e":[31.625,31.75,0],"to":[0.27083334326744,0.27083334326744,0],"ti":[0.52083331346512,-1.10416662693024,0]},{"i":{"x":0.713,"y":1},"o":{"x":0.34,"y":0},"n":"0p713_1_0p34_0","t":7,"s":[31.625,31.75,0],"e":[26.875,36.75,0],"to":[-0.52083331346512,1.10416662693024,0],"ti":[0.79166668653488,-0.83333331346512,0]},{"i":{"x":0.713,"y":0.713},"o":{"x":0.167,"y":0.167},"n":"0p713_0p713_0p167_0p167","t":15,"s":[26.875,36.75,0],"e":[26.875,36.75,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.713,"y":1},"o":{"x":0.167,"y":0},"n":"0p713_1_0p167_0","t":23,"s":[26.875,36.75,0],"e":[28.938,31.875,0],"to":[0.34375,-0.8125,0],"ti":[-0.34375,0.8125,0]},{"t":31}]},"a":{"a":0,"k":[0,0,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":23,"s":[100,100,100],"e":[0,0,100]},{"t":31}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":2,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0,-9],[0,9]],"c":false}],"e":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0,-9],[-0.026,0.343]],"c":false}]},{"t":7}]},"nm":"?? 1","mn":"ADBE Vector Shape - Group"},{"ty":"st","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[1,1,1,1],"e":[0.9960784,0.172549,0.3333333,1]},{"t":15}]},"o":{"a":0,"k":100},"w":{"a":0,"k":4},"lc":2,"lj":1,"ml":4,"nm":"?? 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[1,0.172549,0.3333333,1]},"o":{"a":0,"k":100},"r":1,"nm":"?? 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"?? 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":7,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":5,"ty":4,"nm":"shape3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[30,30,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":1,"k":[{"i":{"x":[0.608,0.608,0.608],"y":[1,1,0.608]},"o":{"x":[0.16,0.16,0.16],"y":[0,0,0.16]},"n":["0p608_1_0p16_0","0p608_1_0p16_0","0p608_0p608_0p16_0p16"],"t":2,"s":[100,100,100],"e":[122,122,100]},{"i":{"x":[0.608,0.608,0.608],"y":[0.608,0.608,0.608]},"o":{"x":[0.432,0.432,0.432],"y":[0.432,0.432,0.432]},"n":["0p608_0p608_0p432_0p432","0p608_0p608_0p432_0p432","0p608_0p608_0p432_0p432"],"t":15,"s":[122,122,100],"e":[122,122,100]},{"i":{"x":[0.701,0.701,0.667],"y":[0.996,0.996,0.667]},"o":{"x":[0.432,0.432,0.432],"y":[0,0,0.432]},"n":["0p701_0p996_0p432_0","0p701_0p996_0p432_0","0p667_0p667_0p432_0p432"],"t":23,"s":[122,122,100],"e":[0,0,100]},{"t":31}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-13.255],[13.255,0],[0,13.255],[-13.255,0]],"o":[[0,13.255],[-13.255,0],[0,-13.255],[13.255,0]],"v":[[24,0],[0,24],[-24,0],[0,-24]],"c":true}},"nm":"?? 1","mn":"ADBE Vector Shape - Group"},{"ty":"st","c":{"a":0,"k":[1,0.172549,0.3333333,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"?? 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[1,0.172549,0.3333333,1],"e":[1,1,1,1]},{"t":15}]},"o":{"a":0,"k":100},"r":1,"nm":"?? 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"?? 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":250,"st":0,"bm":0,"sr":1}]}')
    }
    ,
    75878: e => {
        e.exports = JSON.parse('{"v":"5.7.6","fr":60,"ip":0,"op":42,"w":168,"h":168,"nm":"TT_feed_like_tap_lottie","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Vector 2","parent":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,3,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.719,0],[-2.218,1.426],[22.323,60.029],[20.57,0],[4.221,-0.713],[16.098,-16.932],[2.719,0.463],[2.755,0],[7.155,-19.463],[-26.151,-16.326],[-0.107,-0.071]],"o":[[2.826,0],[26.115,-16.362],[-7.155,-19.428],[-2.719,0],[-2.719,0.463],[-16.063,-16.968],[-4.221,-0.713],[-20.57,0],[-22.252,59.994],[0.107,0.071],[2.182,1.319]],"v":[[0.025,85],[7.717,82.754],[94.219,-51.029],[48.786,-85],[36.479,-84.109],[-0.01,-63.148],[-36.5,-84.109],[-48.807,-85],[-94.24,-50.993],[-7.666,82.754],[-7.38,82.932]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.996078431606,0.172549024224,0.333333343267,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":3,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[50,50,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":1800,"st":0,"bm":0}]},{"id":"comp_1","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Vector 2","parent":2,"sr":1,"ks":{"o":{"a":0,"k":90,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,3,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.719,0],[-2.218,1.426],[22.323,60.029],[20.57,0],[4.221,-0.713],[16.098,-16.932],[2.719,0.463],[2.755,0],[7.155,-19.463],[-26.151,-16.326],[-0.107,-0.071]],"o":[[2.826,0],[26.115,-16.362],[-7.155,-19.428],[-2.719,0],[-2.719,0.463],[-16.063,-16.968],[-4.221,-0.713],[-20.57,0],[-22.252,59.994],[0.107,0.071],[2.182,1.319]],"v":[[0.025,85],[7.717,82.754],[94.219,-51.029],[48.786,-85],[36.479,-84.109],[-0.01,-63.148],[-36.5,-84.109],[-48.807,-85],[-94.24,-50.993],[-7.666,82.754],[-7.38,82.932]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":3,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[50,50,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":1800,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"feed_video_liked_icon","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[84,84,0],"ix":2,"l":2},"a":{"a":0,"k":[60,60,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":7,"s":[30,30,100],"e":[113,113,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":17,"s":[113,113,100],"e":[95,95,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":24,"s":[95,95,100],"e":[101,101,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":31,"s":[101,101,100],"e":[100,100,100]},{"t":35}],"ix":6,"l":2}},"ao":0,"w":120,"h":120,"ip":7,"op":42,"st":7,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"dot - 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.151,"y":0},"t":10,"s":[69.25,114.25,0],"e":[25.13,151.88,0],"to":[-7.353,6.272,0],"ti":[7.353,-6.272,0]},{"t":38}],"ix":2,"l":2},"a":{"a":0,"k":[45.315,39.565,0],"ix":1,"l":2},"s":{"a":0,"k":[180,180,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":25,"s":[9,9],"e":[0,0]},{"t":36}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.141176470588,0.258823529412,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.996078491211,0.172549019608,0.333333333333,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45.315,39.565],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":10,"op":43,"st":2,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"dot - 9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.151,"y":0},"t":10,"s":[60.25,72.75,0],"e":[5.13,54.88,0],"to":[0,0,0],"ti":[0,0,0]},{"t":38}],"ix":2,"l":2},"a":{"a":0,"k":[45.315,39.565,0],"ix":1,"l":2},"s":{"a":0,"k":[80,80,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":26,"s":[8,8],"e":[0,0]},{"t":37}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.141176470588,0.258823529412,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.949019607843,0.917647058824,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45.315,39.565],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":10,"op":44,"st":2,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"dot - 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.151,"y":0},"t":10,"s":[53.25,62.75,0],"e":[12.63,24.13,0],"to":[0,0,0],"ti":[0,0,0]},{"t":38}],"ix":2,"l":2},"a":{"a":0,"k":[45.315,39.565,0],"ix":1,"l":2},"s":{"a":0,"k":[160,160,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":26,"s":[8,8],"e":[0,0]},{"t":37}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.141176470588,0.258823529412,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.996078491211,0.172549019608,0.333333333333,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45.315,39.565],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":10,"op":44,"st":2,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"dot - 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.151,"y":0},"t":9,"s":[108.25,72.25,0],"e":[158.38,31.63,0],"to":[8.355,-6.77,0],"ti":[-8.355,6.77,0]},{"t":37}],"ix":2,"l":2},"a":{"a":0,"k":[45.315,39.565,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":26,"s":[8,8],"e":[0,0]},{"t":38}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.141176470588,0.258823529412,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.996078491211,0.172549019608,0.333333333333,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45.315,39.565],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":45,"st":1,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"dot - 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.151,"y":0},"t":10,"s":[97.25,66.75,0],"e":[128.88,4.13,0],"to":[5.272,-10.437,0],"ti":[-5.272,10.437,0]},{"t":38}],"ix":2,"l":2},"a":{"a":0,"k":[45.315,39.565,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":26,"s":[4,4],"e":[0,0]},{"t":37}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.141176470588,0.258823529412,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.949019607843,0.917647058824,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45.315,39.565],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":10,"op":44,"st":2,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"dot - 10","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.151,"y":0},"t":9,"s":[99.75,97.25,0],"e":[157.13,135.38,0],"to":[9.563,6.355,0],"ti":[-9.563,-6.355,0]},{"t":37}],"ix":2,"l":2},"a":{"a":0,"k":[45.315,39.565,0],"ix":1,"l":2},"s":{"a":0,"k":[110,110,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":26,"s":[8,8],"e":[0,0]},{"t":38}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.141176470588,0.258823529412,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.996078491211,0.172549019608,0.333333333333,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45.315,39.565],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":45,"st":1,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"dot - 7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.151,"y":0},"t":11,"s":[99.75,97.25,0],"e":[140.38,145.63,0],"to":[6.772,8.063,0],"ti":[-6.772,-8.063,0]},{"t":39}],"ix":2,"l":2},"a":{"a":0,"k":[45.315,39.565,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":28,"s":[8,8],"e":[0,0]},{"t":40}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.141176470588,0.258823529412,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.949019607843,0.917647058824,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45.315,39.565],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":11,"op":47,"st":3,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[84,84,0],"ix":2,"l":2},"a":{"a":0,"k":[-0.532,0.309,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0,0],"y":[1,1]},"o":{"x":[0.151,0.151],"y":[0,0]},"t":7,"s":[10,10],"e":[74,74]},{"t":31}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.996078491211,0.172549019608,0.333333333333,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.151],"y":[0]},"t":7,"s":[16],"e":[0]},{"t":37}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.532,0.309],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":7,"op":37,"st":7,"bm":0},{"ddd":0,"ind":13,"ty":0,"nm":"feed_video_dislike_icon","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[84,84,0],"ix":2,"l":2},"a":{"a":0,"k":[60,60,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":1,"s":[100,100,100],"e":[0,0,100]},{"t":10}],"ix":6,"l":2}},"ao":0,"w":120,"h":120,"ip":0,"op":7,"st":0,"bm":0}],"markers":[]}')
    }
}]);
