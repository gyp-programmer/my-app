"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[8225], {
    87478: (e, t, i) => {
        i.d(t, {
            W: () => N
        });
        var n = i(24643)
          , o = i(13392)
          , a = i(40099)
          , r = i(51004)
          , l = i(60484)
          , s = i(49057)
          , d = i(58632)
          , c = i(64162)
          , u = i(4126)
          , p = i(93995)
          , h = i(24451)
          , m = i(46657)
          , g = i(23999)
          , v = i(62564)
          , y = i(26324)
          , x = i(35572)
          , f = i(20259)
          , b = i(76435)
          , k = i(82535)
          , _ = i(38203)
          , w = i(21313);
        let C = class {
            constructor(e) {
                this.fetch = e
            }
            getPoiDetail(e) {
                return this.fetch.get("/api/poi/detail/", {
                    query: e,
                    baseUrlType: 2
                })
            }
        }
        ;
        C = (0,
        d.Cg)([(0,
        _._)(), (0,
        d.Sn)("design:paramtypes", [w.pM])], C);
        let S = class extends c.E {
            constructor(e) {
                super(),
                this.service = e,
                this.defaultState = {
                    poi: {}
                }
            }
            setPoiInfo(e, t) {
                t && (e.poi[t.id] = t)
            }
            getPoiInfo(e) {
                return e.pipe((0,
                h.E)(this.state$), (0,
                x.p)(( ([{poiId: e="", language: t, teaParams: i, callback: n},{poi: o}]) => o[e] ? (i && (k.q.handleEnterPoi(Object.assign(Object.assign({}, i), o[e])),
                null == n || n()),
                m.w) : this.service.getPoiDetail({
                    poiId: e,
                    language: t
                }).pipe((0,
                f.W)(( () => (0,
                g.of)({
                    statusCode: -1
                }))), (0,
                v.T)((e => {
                    var t, o;
                    const {statusCode: a, poiInfo: r} = e;
                    return 0 === a ? (i && (k.q.handleEnterPoi(Object.assign(Object.assign({}, i), null !== (t = null == r ? void 0 : r.poi) && void 0 !== t ? t : {
                        id: "",
                        name: ""
                    })),
                    null == n || n()),
                    this.getActions().setPoiInfo(null === (o = null == e ? void 0 : e.poiInfo) || void 0 === o ? void 0 : o.poi)) : this.noop()
                }
                )), (0,
                b.Q)(this.dispose$)))))
            }
        }
        ;
        (0,
        d.Cg)([(0,
        u.uk)(), (0,
        d.Sn)("design:type", y.c)], S.prototype, "dispose$", void 0),
        (0,
        d.Cg)([(0,
        u.h5)(), (0,
        d.Sn)("design:type", Function), (0,
        d.Sn)("design:paramtypes", [Object, Object]), (0,
        d.Sn)("design:returntype", void 0)], S.prototype, "setPoiInfo", null),
        (0,
        d.Cg)([(0,
        u.Mj)(), (0,
        d.Sn)("design:type", Function), (0,
        d.Sn)("design:paramtypes", [y.c]), (0,
        d.Sn)("design:returntype", void 0)], S.prototype, "getPoiInfo", null),
        S = (0,
        d.Cg)([(0,
        p.n)("PoisModule"), (0,
        d.Sn)("design:paramtypes", [C])], S);
        var j, T = i(30721), M = i(33805), I = i(48961), A = i(62186), P = i(83682), E = i(72153);
        !function(e) {
            e.Video = "video",
            e.Comment = "comment"
        }(j || (j = {}));
        const O = (0,
        A.A)(P.Cz, {
            target: "e12qibz90"
        })({
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100%",
            ":hover": {
                textDecoration: "none"
            }
        }, "label:StyledLink;")
          , L = (0,
        A.A)("div", {
            target: "e12qibz91"
        })(( ({type: e, theme: {colors: t, direction: i}}) => [{
            width: "fit-content",
            maxWidth: "100%",
            height: "28px",
            marginBottom: "8px",
            backgroundColor: t.ConstBGInverse3,
            borderRadius: "4px"
        }, (0,
        E.mp)({
            direction: i,
            paddingStart: "4px",
            paddingEnd: "8px"
        }), "comment" === e ? {
            position: "absolute",
            top: 0,
            boxSizing: "border-box",
            width: "100%",
            height: "58px",
            backgroundColor: "transparent",
            marginTop: "0px",
            marginBottom: "0px",
            padding: "11px 12px",
            "::after": {
                content: '""',
                position: "absolute",
                left: "0",
                bottom: "0",
                width: "100%",
                height: "1px",
                transform: "scaleY(0.5)",
                transformOrigin: "bottom",
                backgroundColor: t.LineSecondary
            }
        } : null]), "label:DivPoiAnchorMobile;")
          , D = (0,
        A.A)("div", {
            target: "e12qibz92"
        })(( ({type: e, theme: {direction: t}}) => [{
            display: "flex",
            flexShrink: 0
        }, (0,
        E.mp)({
            direction: t,
            marginEnd: "comment" === e ? "12px" : "6px"
        })]), "label:DivMapPinMobile;")
          , B = (0,
        A.A)("p", {
            target: "e12qibz93"
        })([{
            fontSize: "12px",
            lineHeight: "28px",
            fontWeight: 600,
            color: "#fff"
        }, E.PR], "label:PPoiNameMobile;")
          , R = (0,
        A.A)("span", {
            target: "e12qibz94"
        })({
            display: "inline-block",
            transform: "scaleX(0.5)",
            margin: "0 4px",
            color: "rgba(255, 255, 255, .5)"
        }, "label:SpanSplit;")
          , z = (0,
        A.A)("div", {
            target: "e12qibz95"
        })({
            width: "calc(100% - 36px)"
        }, "label:DivRightContainer;")
          , U = (0,
        A.A)("p", {
            target: "e12qibz96"
        })([{
            fontSize: "15px",
            lineHeight: "18px",
            fontWeight: 600
        }, E.PR], "label:PPoiRightName;")
          , V = (0,
        A.A)("p", {
            target: "e12qibz97"
        })([{
            fontSize: "13px",
            lineHeight: "17px",
            color: "rgba(22, 24, 35, 0.6)"
        }, E.PR], "label:PPoiRightFatherName;")
          , N = function({type: e, info: t, teaParams: i}) {
            const {id: d, name: c, fatherPoiName: u} = (0,
            l.L$)(t)
              , {language: p, user: h} = (0,
            l.L$)((0,
            s.W)(( () => ["language", "user"]), []))
              , [{poi: m},g] = (0,
            o.Su)(S)
              , {isSmartPlayer: v=!1} = (0,
            T.Qt)()
              , y = (0,
            M.Am)(d, c, p)
              , x = "comment" === e ? 24 : 20
              , f = "comment" === e ? "comment_anchor" : "video_anchor"
              , b = !h && "video_anchor" === f
              , _ = Boolean(t) && !v && !b
              , w = (0,
            a.useMemo)(( () => ({
                enter_method: f,
                anchor_id: d,
                anchor_name: c,
                author_id: i.author_id
            })), [f, d, c, i.author_id]);
            (0,
            a.useEffect)(( () => {
                _ && (I.Gt.handlePoiAnchorShow(w),
                g.getPoiInfo({
                    poiId: d,
                    language: p
                }))
            }
            ), [_, w, g, d, p]);
            const C = (0,
            a.useCallback)(( () => {
                var e, n;
                I.Gt.handlePoiAnchorClick(w),
                k.q.handleEnterPoi(Object.assign({
                    enter_method: f,
                    author_id: i.author_id,
                    group_id: i.group_id
                }, null !== (n = null !== (e = m[d]) && void 0 !== e ? e : t) && void 0 !== n ? n : {
                    id: "",
                    name: ""
                }))
            }
            ), [w, f, i.author_id, i.group_id, m, d, t]);
            return _ ? (0,
            n.jsx)(L, {
                type: e,
                onClick: C,
                children: (0,
                n.jsx)(O, {
                    forceSSR: !0,
                    target: "_blank",
                    to: y,
                    children: (0,
                    n.jsxs)(n.Fragment, {
                        children: [(0,
                        n.jsx)(D, {
                            type: e,
                            children: (0,
                            n.jsx)(r.n, {
                                size: x
                            })
                        }), "comment" === e ? (0,
                        n.jsxs)(z, {
                            children: [(0,
                            n.jsx)(U, {
                                children: c
                            }), (0,
                            n.jsx)(V, {
                                children: u
                            })]
                        }) : (0,
                        n.jsxs)(B, {
                            children: [c, u ? (0,
                            n.jsxs)(n.Fragment, {
                                children: [(0,
                                n.jsx)(R, {
                                    children: "|"
                                }), u]
                            }) : null]
                        })]
                    })
                })
            }) : null
        }
    }
    ,
    67659: (e, t, i) => {
        i.d(t, {
            H: () => r
        });
        var n = i(24643)
          , o = i(40099)
          , a = i(2584);
        function r(e) {
            return function(t) {
                const {onClick: i, section: r, reportParams: l} = t
                  , s = (0,
                o.useCallback)((e => {
                    a.O.handleGeneralClick(r, l),
                    null == i || i(e)
                }
                ), [i, r, l]);
                return (0,
                n.jsx)(e, Object.assign(Object.assign({}, t), {
                    onClick: s
                }))
            }
        }
    }
    ,
    35495: (e, t, i) => {
        i.d(t, {
            J: () => x
        });
        var n = i(24643)
          , o = i(40173)
          , a = i(49057)
          , r = i(82487)
          , l = i(16469)
          , s = i(58305)
          , d = i(89558)
          , c = i(2408)
          , u = i(32125)
          , p = i(48720)
          , h = i(44205)
          , m = i(87905)
          , g = i(40099)
          , v = i(67518)
          , y = i(18736);
        const x = (0,
        g.memo)((function(e) {
            var t;
            const i = (0,
            o.s)()
              , {isDark: x} = (0,
            v.u)()
              , {language: f="en"} = null !== (t = (0,
            a.W)(( () => ["language"]), [])) && void 0 !== t ? t : {}
              , b = (0,
            r.Vq)(!0)
              , [k,_] = (0,
            c.HY)((e => e.isFeedPersonalized), u.bN)
              , [w,C] = (0,
            g.useState)(k)
              , S = (0,
            g.useCallback)((e => {
                C(e),
                p.$.handleSwitchPersonalizationToggle({
                    value: e ? "on" : "off"
                })
            }
            ), [])
              , j = (0,
            g.useCallback)(( () => {
                C(k),
                e.onClose()
            }
            ), [k, e])
              , T = (0,
            g.useCallback)(( () => {
                const t = k !== w;
                t && (_.setIsFeedPersonalized(w),
                l.lL.removeAll(),
                b(w),
                (0,
                s.J2)(d.oG, "1"),
                setTimeout(( () => {
                    window.location.reload()
                }
                ), 100)),
                p.$.handleConfirmPersonalizationStatusChange({
                    flag: t ? 1 : 0,
                    status: w ? "on" : "off"
                }),
                e.onClose()
            }
            ), [b, k, _, e, w])
              , M = (0,
            g.useMemo)(( () => {
                const e = `https://www.tiktok.com/tpp/webapp/keyword-filtering/filter-keywords.html?isH5=1&lang=${f}&isDark=${x}&_pia_=1`
                  , t = i("filterKeywordsWeb_fypEntry_modal_desc1").split("{s_keywordLink}");
                return [(0,
                n.jsx)("p", {
                    children: [t[0], (0,
                    n.jsx)(y.lB, {
                        href: e,
                        target: "_blank",
                        children: i("filterKeywordsWeb_fypEntry_manageFeeds_popup")
                    }, "kw-link"), t[1]]
                }), (0,
                n.jsx)("p", {
                    children: i("filterKeywordsWeb_fypEntry_modal_desc2").replace("{s_learnLink}", "")
                })]
            }
            ), [i, f, x]);
            return (0,
            n.jsx)(h.l, {
                visible: e.visible,
                onClose: j,
                closeable: !0,
                children: (0,
                n.jsxs)(y.jH, {
                    children: [(0,
                    n.jsx)(y._A, {
                        children: i("nonpersonalizedFeeds_turnOn_modal_toggle_headline")
                    }), (0,
                    n.jsxs)(y.Mm, {
                        children: [M, (0,
                        n.jsx)(y.lB, {
                            href: "https://support.tiktok.com/en/using-tiktok/exploring-videos/managing-personalization-on-tiktok",
                            target: "_blank",
                            children: i("personalisedSearch_searchResults_actionSheet_bodyPara2Bold1")
                        })]
                    }), (0,
                    n.jsxs)(y.ig, {
                        children: [(0,
                        n.jsx)(y.$_, {
                            children: i("nonpersonalizedFeeds_turnOn_modal_toggle_toggleString")
                        }), (0,
                        n.jsx)(m.d, {
                            checked: w,
                            onChange: S,
                            style: y.y1
                        })]
                    }), (0,
                    n.jsx)(y.xq, {
                        onMouseDown: T,
                        children: (0,
                        n.jsx)(y.Do, {
                            children: i("personalisedSearch_searchResults_actionSheet_btn")
                        })
                    })]
                })
            })
        }
        ))
    }
    ,
    51652: (e, t, i) => {
        i.r(t),
        i.d(t, {
            default: () => lr
        });
        var n = i(24643)
          , o = i(13392)
          , a = i(73580)
          , r = i(40099)
          , l = i(32337)
          , s = i(20934)
          , d = i(35281)
          , c = i(60484)
          , u = i(48615)
          , p = i(88920)
          , h = i(18072)
          , m = i(16891);
        function g(e, t) {
            const i = m.f.getVar(e, t);
            return "val"in i ? i.val : {}
        }
        var v = i(30721)
          , y = i(59952)
          , x = i(53438)
          , f = i(67169)
          , b = i(45297)
          , k = i(58632);
        const _ = {
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
        var C, S, j;
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
        (j = S || (S = {}))[j.OneColumn = 0] = "OneColumn",
        j[j.ThreeColumn = 1] = "ThreeColumn",
        j[j.BrowserMode = 2] = "BrowserMode",
        j[j.SwiperMode = 3] = "SwiperMode",
        j[j.VideoDetail = 4] = "VideoDetail",
        j[j.FullscreenMode = 5] = "FullscreenMode",
        j[j.Pip = 6] = "Pip",
        j[j.CreatorTab = 7] = "CreatorTab",
        j[j.MiniPlayer = 8] = "MiniPlayer",
        j[j.ImmersivePlayer = 9] = "ImmersivePlayer";
        const T = {
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
          , M = () => {}
        ;
        var I, A, P, E, O, L;
        (A = I || (I = {}))[A.Yes = 0] = "Yes",
        A[A.No = 1] = "No",
        (E = P || (P = {}))[E.Public = 0] = "Public",
        E[E.Self = 1] = "Self",
        E[E.Friend = 2] = "Friend",
        (L = O || (O = {})).PlayQuality = "video_play_quality",
        L.PlayEnded = "video_play_end",
        L.PlayFailed = "video_play_failed",
        L.BlockStart = "video_block_start",
        L.Block = "video_block",
        L.Request = "video_request",
        L.RequestResponse = "video_request_response",
        L.FirstFrame = "first_feed_show_time";
        const D = {
            corruptedVideoFrames: 0,
            creationTime: 0,
            droppedVideoFrames: 0,
            totalVideoFrames: 0
        }
          , B = {
            currentSrc: "",
            currentTime: 0,
            duration: 0,
            readyState: 0,
            networkState: 0,
            error: null
        };
        var R, z, U, V, N, F;
        (z = R || (R = {})).NoInteract = "failed because the user didn't interact with the document first.",
        z.Interrupted = "request was interrupted by a call to pause",
        z.SafariNoInteract = "The request is not allowed by the user agent or the platform in the current context",
        z.FireFox = "The play method is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.",
        z.LoadInterrupt = "request was interrupted by a new load request",
        z.Abort = "The operation was aborted",
        (V = U || (U = {})).LOAD = "load",
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
        var H = i(78862)
          , G = i(27331);
        const W = new H.Vb;
        function $(e, t, i) {
            t && (0,
            r.useEffect)(( () => {
                if (!W[i])
                    return;
                let n = null;
                return "metrics" === i || "event" === i ? "PlayEnded" === e ? W.metrics.bind(e, t) : W[i].on(e, t) : "element" === i && W.element && (n = e => {
                    t(e)
                }
                ,
                W.element.addEventListener(e, n)),
                () => {
                    W[i] && ("metrics" === i || "event" === i ? "PlayEnded" === e ? W.metrics.clear(e) : W[i].off(e, t) : "element" === i && n && W.element.removeEventListener(e, n))
                }
            }
            ), [t])
        }
        new G.A;
        const q = e => e ? e.map((e => e.GearName || "")) : null
          , Y = e => e ? e.map((e => e.QualityType && e.Bitrate ? `${e.QualityType}:${e.Bitrate}` : "")).filter((e => !!e)) : null
          , J = e => {
            if (!e)
                return 0;
            let t = 0;
            for (let i = 0; i < e.length; i++)
                t += e.end(i) - e.start(i);
            return Math.round(1e3 * t)
        }
          , Q = new Map([[2, "adapt_lowest_1080p"], [3, "adapt_lower_1080p"], [4, "adapt_1080p"], [7, "adapt_lowest_1440p"], [10, "normal_720p"], [11, "low_720p"], [12, "adapt_high_720p"], [13, "adapt_higher_720p"], [14, "adapt_lower_720p"], [15, "adapt_lowest_720p"], [16, "higher_720p"], [17, "highest_720p"], [18, "adapt_720p"], [19, "adapt_low_720p"], [191, "lower_720p"], [20, "normal_540p"], [21, "adapt_lower_540p"], [22, "adapt_high_540p"], [23, "adapt_higher_540p"], [24, "lower_540p"], [25, "lowest_540p"], [26, "higher_540p"], [27, "highest_540p"], [28, "adapt_540p"], [29, "adapt_lowest_540p"], [291, "adapt_low_540p"], [30, "normal_480p"], [31, "low_480p"], [32, "high_480p"], [33, "medium_480p"], [34, "lower_480p"], [35, "lowest_480p"], [36, "higher_480p"], [37, "highest_480p"], [38, "adapt_480p"], [39, "adapt_lower_480p"], [391, "adapt_high_480p"], [40, "normal_360p"], [41, "low_360p"], [42, "high_360p"], [43, "medium_360p"], [44, "lower_360p"], [45, "lowest_360p"], [46, "higher_360p"], [47, "highest_360p"], [48, "adapt_360p"], [49, "adapt_lowest_360p"], [50, "adapt_high_360p"]])
          , Z = (e, t) => {
            if (!e)
                return t;
            if ("string" == typeof e && e.indexOf("xgpreload_config") > -1)
                return e;
            const i = Number(e);
            if (!Q.has(i)) {
                const t = String(e).match(/^([a-zA-Z]*)+_([0-9]+)_0$/i);
                return t ? `${t[1]}_${t[2]}p` : `_${e}`
            }
            return Q.get(i)
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
                  , n = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    X(e, t, i[t])
                }
                ))
            }
            return e
        }
        const te = (0,
        r.memo)((0,
        r.forwardRef)((function({id: e="", url: t="", teaParams: i, mode: o=S.OneColumn, autoplay: a=!0, muted: l=!1, onended: s=M, onloadstart: d=M, onloadeddata: c=M, oncanplay: u=M, onplay: p=M, onpause: h=M, ontimeupdate: g=M, onplaying: v=M, onwaiting: y=M, onerror: x=M, oncanplaythrough: f=M, onloadedmetadata: b=M, onabort: k=M, onstalled: w=M, onseeking: C=M, onseeked: j=M, onprogress: T=M, onAutoplayPrevented: I=M, playerTypeConfig: A="TT", platform: E="", videoPlayReport: L, videoExperienceReport: R}, z) {
            const U = (0,
            r.useRef)(null)
              , V = (0,
            r.useRef)(E);
            V.current = E;
            const [N,F] = (0,
            r.useState)(!1)
              , G = (0,
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
                            return i.hostname && (t = _[i.hostname] || ""),
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
              , Q = (0,
            r.useRef)(G);
            Q.current = G;
            const X = (0,
            r.useMemo)(( () => {
                let t = null;
                return e && i && (t = function(e, t, i, n) {
                    const o = W.attributes;
                    let a = P.Public;
                    t.forFriend && (a = P.Friend),
                    t.secret && (a = P.Self);
                    let r = "";
                    if (o && o.src) {
                        const e = /^(?:https?:\/\/)?([^\/\s:]+)/
                          , t = o.src.match(e);
                        r = t ? t[1] : ""
                    }
                    const l = {
                        group_id: e,
                        author_id: t.author_id || "",
                        play_mode: K(n),
                        logo_type: "unwatermarked",
                        item_status: a,
                        play_url: o ? o.src : "",
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
                }(e, i, 0, o)),
                t
            }
            ), [e, i, o])
              , te = (0,
            r.useMemo)(( () => {
                let e = null;
                if (i && W.player) {
                    const t = W.player.curDefinition;
                    e = function(e, t, i) {
                        let n = ""
                          , o = -1
                          , a = -1
                          , r = ""
                          , l = "mp4";
                        const s = Z(i.definition, t.definition);
                        if (t.videoQuality && s && (n = `${t.videoQuality}_${s}`),
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
                            video_quality: n,
                            video_encodeUserTag: t.encodeUserTag || "",
                            original_definition: t.definition || "",
                            preload_size: o,
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
              , ne = (0,
            r.useMemo)(( () => {
                let t = null;
                return i && (t = function(e, t, i, n, o=!0) {
                    var a;
                    return {
                        itemId: o ? t : null !== (a = e.group_id) && void 0 !== a ? a : "",
                        authorId: e.author_id,
                        isScheduled: Boolean(e.is_scheduled),
                        autoplayStatus: 1,
                        searchId: o ? e.search_id : "",
                        searchKeyword: o ? e.search_keyword : "",
                        searchResultId: o ? e.search_result_id : "",
                        playMode: n,
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
                }(i, e, l, o, "android" === V.current)),
                t
            }
            ), [i, e, l, o])
              , oe = (0,
            r.useRef)(ne);
            oe.current = ne;
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
                m.f.event(O.Request, e)
            }
            ), [X])
              , le = (0,
            r.useCallback)((e => {
                if (!X || !i || !W.player)
                    return;
                const t = W.player.curDefinition
                  , n = function(e, t, i, n, o) {
                    let a = "";
                    const r = Z(t.definition, i.definition);
                    let l;
                    return i.videoQuality && r && (a = `${i.videoQuality}_${r}`),
                    W.attributes && (l = W.attributes.error),
                    Object.assign({}, {
                        duration: Math.round(o),
                        error_code: l ? String(l.code) : "",
                        is_success: l ? "0" : "1",
                        video_quality: a,
                        is_bytevc1: n ? 1 : 0,
                        isExpired: 2,
                        isSupportMP4: 1
                    }, e)
                }(X, t, i, ie, e.duration);
                m.f.event(O.RequestResponse, n)
            }
            ), [X, ie, i])
              , se = (0,
            r.useCallback)(( () => {
                if (!X)
                    return;
                const e = X;
                m.f.event(O.BlockStart, e)
            }
            ), [X])
              , de = (0,
            r.useCallback)((e => {
                if (!X || !te)
                    return;
                const t = function(e, t, i, n) {
                    let o, a = 0;
                    W.attributes && (o = W.attributes.error,
                    a = W.attributes.duration);
                    let r = n.code || 0
                      , l = n.message || "";
                    return r <= 0 && o && (r = o.code,
                    l = o.message),
                    Object.assign({}, t, {
                        error_code: String(r),
                        error_info: l,
                        is_bytevc1: i ? 1 : 0,
                        duration: Math.round(1e3 * a),
                        isExpired: n.isExpired || 0,
                        isSupportMP4: 1,
                        is_before: 0 === n.status ? 0 : 1,
                        retry_c: n.retryCount || 0,
                        retry_l: n.retryList || []
                    }, e)
                }(X, te, ie, e);
                m.f.event(O.PlayFailed, t)
            }
            ), [X, te, ie])
              , ce = (0,
            r.useCallback)((e => {
                if (!(X && te && i && W.player))
                    return;
                const t = W.player.curDefinition
                  , n = function(e, t, i, n, o, a, r, l) {
                    let s, d, c = 0, u = 0, p = 1, h = !1;
                    const m = r - l;
                    W.attributes && (s = W.attributes.error,
                    c = W.attributes.duration,
                    u = W.attributes.readyState,
                    d = W.attributes.buffered,
                    p = W.attributes.volume,
                    h = W.attributes.muted);
                    const g = Math.min(m, 1e3 * c);
                    let v = n.bitrate;
                    v <= 0 && (v = o && o.bitrate ? o.bitrate : 0);
                    const y = v / 8 * (g / 1e3);
                    let x = 0
                      , f = 0
                      , b = 0
                      , k = 0;
                    if (W.player) {
                        const e = W.player.playbackQuality;
                        e && (x = e.droppedVideoFrames,
                        f = e.totalVideoFrames,
                        f && (b = x / f),
                        k = m)
                    }
                    return Object.assign({}, t, {
                        is_success: s ? "0" : "1",
                        video_duration: Math.round(1e3 * r),
                        play_duration: Math.round(1e3 * a),
                        buffering: u <= 2 ? 1 : 0,
                        duration: Math.round(m),
                        wait_duration: 0,
                        cur_cache_duration: J(d),
                        local_time_ms: Date.now(),
                        volume_level: p,
                        volume_change: 0,
                        muted: h ? 1 : 0,
                        click_mute: 0,
                        session_order: 0,
                        play_size: Math.round(y),
                        data_player_type: 2,
                        cache_size: 0,
                        cache_duration: 0,
                        cdn_size_video: 0,
                        is_bytevc1: i ? 1 : 0,
                        drop_frame: x,
                        total_play_frame: f,
                        drop_frame_rate: b,
                        drop_frame_duration: k,
                        vqm: void 0
                    }, e)
                }(X, te, ie, t, i, e.currentTime, e.duration, e.pauseDuration);
                m.f.event(O.PlayEnded, n)
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
                m.f.event(O.FirstFrame, t)
            }
            ), [X])
              , pe = (0,
            r.useCallback)((e => {
                m.f.event("video_data_size", {
                    task_type: 1,
                    cdn_size: e.chunkSize,
                    cdn_speed: e.speed,
                    project: "webapp-mobile"
                })
            }
            ), [])
              , he = (0,
            r.useCallback)((e => {
                if (!X || !te)
                    return;
                const t = function(e, t, i, n, o) {
                    let a = 0
                      , r = !1;
                    return W.attributes && (a = W.attributes.duration,
                    r = W.attributes.muted),
                    Object.assign({}, t, {
                        duration: Math.round(n.duration),
                        is_bytevc1: i ? 1 : 0,
                        video_duration: Math.round(1e3 * a),
                        muted: r ? 1 : 0,
                        bitrate_set: q(o),
                        quality_bitrate: Y(o),
                        duration_from_load: 0,
                        duration_with_load: 0,
                        is_same: 0,
                        retry_c: n.retryCount || 0,
                        retry_l: n.retryList || []
                    }, e)
                }(X, te, ie, e.duration, void 0);
                m.f.event(O.PlayQuality, t)
            }
            ), [X, te, ie])
              , me = (0,
            r.useCallback)((e => {
                if (!X || !te)
                    return;
                const t = function(e, t, i, n) {
                    let o = 0;
                    const {attributes: a} = W;
                    return a && (o = a.currentTime),
                    Object.assign({}, t, {
                        duration: Math.round(n),
                        is_bytevc1: i ? 1 : 0,
                        position: Math.round(1e3 * o),
                        should_filter: "0",
                        droppedRate: 0,
                        end_type: 0
                    }, e)
                }(X, te, ie, e.duration);
                m.f.event(O.Block, t)
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
                e && e.error && m.f.event("video_mse_error", {
                    code: e.error.errorCode || 0,
                    message: e.error.errorMessage || "",
                    httpCode: e.error.httpCode || 0,
                    url: e.error.url,
                    type: "running"
                })
            }
            ), [])
              , ye = (0,
            r.useCallback)((e => {
                f && f(e),
                "ios" === E && R && !R.getCurrentPageReport() && (R.reportVideoFirstScreen({
                    endTime: Date.now(),
                    videoSource: t
                }),
                R.reportVideoAddition({
                    endTime: Date.now(),
                    videoSource: t
                }))
            }
            ), [R, f, E, t])
              , xe = (0,
            r.useCallback)((e => {
                h && h(e);
                const t = ae();
                L && oe.current && L.handlePause(ee({}, oe.current, t))
            }
            ), [L, ae, h])
              , fe = (0,
            r.useCallback)((e => {
                s && s(e),
                L && oe.current && L.handleEnded(oe.current)
            }
            ), [L, s])
              , be = (0,
            r.useCallback)((e => {
                y && y(e);
                const t = ae();
                L && oe.current && L.handleWaiting(ee({}, oe.current, t))
            }
            ), [L, ae, y])
              , ke = (0,
            r.useCallback)((e => {
                v && v(e),
                R && R.reportVideoInteract({
                    endTime: Date.now(),
                    videoSource: t
                })
            }
            ), [R, v, t])
              , _e = (0,
            r.useCallback)((e => {
                g && g(e);
                const t = ae();
                L && oe.current && L.handleTimeUpdate(ee({}, oe.current, t), !0),
                R && !R.getFirstFrameReport() && R.reportVideoFirstFrame(t.currentTime || 0)
            }
            ), [L, R, ae, g])
              , we = (0,
            r.useCallback)((e => {
                x && x(e),
                L && oe.current && L.handleError(oe.current)
            }
            ), [L, x])
              , Ce = (0,
            r.useCallback)((e => {
                u && u(e),
                "android" === E && R && !R.getCurrentPageReport() && (R.reportVideoFirstScreen({
                    endTime: Date.now(),
                    videoSource: t
                }),
                R.reportVideoAddition({
                    endTime: Date.now(),
                    videoSource: t
                }))
            }
            ), [R, u, E, t])
              , Se = (0,
            r.useCallback)(( () => {
                L && oe.current && L.handlePlayTime(oe.current)
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
            $("Block", me, "metrics"),
            $("PlayQuality", he, "metrics"),
            $("PlayFailed", de, "metrics"),
            $("FirstFrame", ue, "metrics"),
            $("VideoDataSize", pe, "metrics"),
            $("ended", fe, "event"),
            $("loadstart", d, "event"),
            $("loadeddata", c, "event"),
            $("canplay", Ce, "event"),
            $("play", p, "event"),
            $("pause", xe, "event"),
            $("timeupdate", _e, "event"),
            $("playing", ke, "event"),
            $("waiting", be, "event"),
            $("error", we, "event"),
            $("canplaythrough", ye, "event"),
            $("loadedmetadata", b, "event"),
            $("abort", k, "event"),
            $("stalled", w, "event"),
            $("seeking", C, "event"),
            $("seeked", j, "event"),
            $("progress", T, "event"),
            $("autoplayPrevented", I, "event"),
            $("downloaderError", ge, "event"),
            $("playCatch", ve, "event"),
            (0,
            r.useEffect)(( () => {
                let e = H.Cc.TT;
                "XG" !== A && "ios" === E || (e = H.Cc.XG);
                const t = W.usePlayer(e, Q.current, "ios" === V.current);
                if (t && U.current && t.element)
                    return t.forceAutoplay = Q.current.video.autoplay,
                    t.style("zIndex", "3"),
                    t.style("objectFit", "cover"),
                    U.current.appendChild(t.element),
                    () => {
                        t && t.element && t.element.parentNode && (t.element.parentNode.removeChild(t.element),
                        W.release("ios" === V.current))
                    }
            }
            ), [e, A]),
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
            r.useImperativeHandle)(z, ( () => ({
                play: () => W.player ? W.player.play() : (F(!0),
                Promise.resolve()),
                pause: () => {
                    W.player && (L && L.triggerPause({
                        enter_method: "click_pause",
                        playMode: o || S.OneColumn
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
                getAttributes: () => W.player ? W.player.attributes : B,
                getPlayerType: () => W.player ? W.player.type : "",
                getPlaybackQuality: () => W.player ? W.player.playbackQuality : D
            })), []),
            (0,
            n.jsx)("div", {
                id: "playback_refactor",
                style: {
                    position: "relative",
                    width: "100%",
                    height: "100%"
                },
                ref: U
            })
        }
        )));
        var ie = i(62186)
          , ne = i(84827);
        const oe = (0,
        ie.A)(ne.R, {
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
          , he = i.n(pe);
        const me = (0,
        r.memo)((0,
        r.forwardRef)((function(e, t) {
            const {id: i="", src: o="", index: l, currentIndex: s, teaParams: d, autoPlay: c=!0, muted: u=!1, isGoogleBot: p=!1, horizontal: m=!1, platform: g="", visibility: v=!0, bitrateInfo: y, playerTypeConfig: x="TT", playMode: f=0, onVideoPlay: b=he(), onVideoEnded: _=he(), onVideoCanPlay: C=he(), onVideoPause: S=he(), onVideoPlaying: j=he(), onVideoStatusChanged: T=he(), onVideoError: M=he(), onVideoWaiting: I=he(), onInteract: A=he(), onInteractRequired: P=he(), onLoadingStatusChanged: E=he()} = e
              , [O,L] = (0,
            h.sD)()
              , {forcePlay: D, forcePause: B} = O
              , R = (0,
            r.useRef)(!1)
              , z = (0,
            r.useRef)(!1)
              , U = (0,
            r.useRef)(null)
              , V = (0,
            r.useRef)(d)
              , N = m || ( () => {
                var e;
                let t = !1;
                const {availHeight: i=0, availWidth: n=0} = "undefined" != typeof window && (null === (e = window) || void 0 === e ? void 0 : e.screen) || {};
                return i > 0 && n / i > 1 && (t = !0),
                t
            }
            )()
              , F = (0,
            a.Nj)(ce.Gs)
              , H = (0,
            a.Nj)(ue.AU)
              , [G,W] = (0,
            r.useState)(null)
              , $ = (0,
            r.useCallback)((e => {
                W(e)
            }
            ), [])
              , q = (0,
            r.useMemo)(( () => s === l), [l, s])
              , Y = (0,
            r.useCallback)(( () => {
                V.current && (R.current = !0,
                z.current || (P(),
                z.current = !0))
            }
            ), [P])
              , J = (0,
            r.useCallback)(( () => {
                null == T || T("error")
            }
            ), [T])
              , Q = (0,
            r.useCallback)(( () => {}
            ), [])
              , Z = (0,
            r.useCallback)(( () => {}
            ), [])
              , K = (0,
            r.useCallback)(( () => {
                "android" === g ? q && E(!1, l) : null == C || C()
            }
            ), [E, C, q, g, l])
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
                G && q && (null == T || T("pause"),
                "android" === g && E(!1, l))
            }
            ), [G, q, S, T, E, g, l])
              , ne = (0,
            r.useCallback)(( () => {}
            ), [])
              , oe = (0,
            r.useCallback)(( () => {}
            ), [])
              , se = (0,
            r.useCallback)((e => {
                q && ("android" === g && E(!1, l),
                null == j || j(e),
                null == T || T("playing"))
            }
            ), [q, E, j, T, g, l])
              , de = (0,
            r.useCallback)((e => {
                "ios" === g && (null == I || I(e)),
                q && ("android" === g && E(!0, l),
                null == T || T("waiting"))
            }
            ), [q, T, I, E, l, g])
              , pe = (0,
            r.useCallback)(( () => (0,
            k.sH)(this, void 0, void 0, (function*() {
                if (q && G)
                    try {
                        yield G.play()
                    } catch (e) {
                        null == M || M()
                    }
            }
            ))), [G, q, M])
              , me = (0,
            r.useCallback)(( () => {
                if (G)
                    try {
                        G.pause()
                    } catch (e) {}
            }
            ), [G, q])
              , ge = (0,
            r.useCallback)((e => {
                q && G && G.seek(e)
            }
            ), [q, G])
              , ve = (0,
            r.useCallback)(( () => (0,
            k.sH)(this, void 0, void 0, (function*() {
                var e;
                try {
                    q && G && (yield G.play())
                } catch (t) {
                    return null == Y || Y(),
                    "ios" === g && (null == M || M()),
                    null !== (e = t.message) && void 0 !== e ? e : ""
                }
                return ""
            }
            ))), [G, q, J, M, g])
              , ye = (0,
            r.useCallback)((e => {
                null == Y || Y(),
                e.message.match("request was interrupted by a call to pause") || null == J || J(),
                (e.message.match("failed because the user didn't interact with the document first.") || e.message.match("The request is not allowed by the user agent or the platform in the current context") || e.message.match("The play method is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.")) && L.setMobileDefaultMute(!0)
            }
            ), [])
              , xe = (0,
            r.useCallback)((e => {
                q && (null == T || T("ended"),
                null == _ || _(e),
                ve())
            }
            ), [q, _, T, ve])
              , fe = (0,
            r.useCallback)(( () => {
                null == T || T("error"),
                "android" === g && E(!1, l),
                null == M || M()
            }
            ), [M, T, E, l, g]);
            (0,
            r.useEffect)(( () => {
                D && ve()
            }
            ), [D, ve]),
            (0,
            r.useEffect)(( () => {
                G && B && G.pause()
            }
            ), [G, B]),
            (0,
            r.useEffect)(( () => {
                G && G.style("objectFit", N ? "contain" : "cover")
            }
            ), [G, N]),
            (0,
            r.useImperativeHandle)(t, ( () => ({
                play: () => {
                    pe(),
                    R.current && (R.current = !1,
                    A())
                }
                ,
                pause: () => {
                    me()
                }
                ,
                seek: e => {
                    ge(e)
                }
                ,
                addSubtitle: (e, t) => (0,
                k.sH)(this, void 0, void 0, (function*() {
                    return G ? G.addSubtitle(e, t) : Promise.resolve()
                }
                )),
                get currentTime() {
                    var e;
                    if (!G)
                        return 0;
                    const t = G.getAttributes();
                    return t && null !== (e = t.currentTime) && void 0 !== e ? e : 0
                }
            })), [G, me, pe, ge, A]);
            const be = (0,
            r.useMemo)(( () => (0,
            n.jsx)("div", {
                children: (0,
                n.jsx)(le, {
                    preload: "none",
                    ref: U,
                    horizontal: m,
                    muted: u,
                    playsInline: !0,
                    src: o
                })
            })), [m, u, o])
              , ke = (0,
            r.useMemo)(( () => (0 === l || p) && w() ? be : (0,
            n.jsx)(te, {
                id: i,
                url: o,
                teaParams: d,
                ref: $,
                muted: u,
                mode: f,
                autoplay: c,
                onwaiting: de,
                onloadeddata: Z,
                onerror: fe,
                oncanplay: K,
                onplay: ee,
                onplaying: se,
                onpause: ie,
                onloadstart: Q,
                ontimeupdate: ne,
                oncanplaythrough: X,
                onended: xe,
                onprogress: oe,
                onAutoplayPrevented: ye,
                playerTypeConfig: x,
                platform: "android",
                videoPlayReport: F,
                videoExperienceReport: H,
                bitrateInfo: y
            })), [$, c, q, o, u, d, xe, fe, de, se, ne, ie, ee, X, K, Z, Q, l, be, p, s])
              , _e = (0,
            r.useMemo)(( () => w() ? be : (0,
            n.jsx)(te, {
                id: null == d ? void 0 : d.group_id,
                url: o,
                teaParams: d,
                ref: $,
                muted: u,
                mode: f,
                autoplay: c,
                onwaiting: de,
                onloadeddata: Z,
                onerror: fe,
                oncanplay: K,
                onplay: ee,
                onplaying: se,
                onpause: ie,
                onloadstart: Q,
                ontimeupdate: ne,
                oncanplaythrough: X,
                onended: xe,
                onprogress: oe,
                onAutoplayPrevented: ye,
                playerTypeConfig: x,
                platform: "ios",
                videoPlayReport: F,
                videoExperienceReport: H,
                bitrateInfo: y
            })), [oe, $, u, c, o, d, xe, fe, de, se, ne, ie, ee, X, K, Z, Q, l, be]);
            return "android" === g ? (0,
            n.jsx)(ae, {
                id: "tiktok-webapp-mobile-player-container",
                children: q && ke
            }) : "ios" === g ? (0,
            n.jsx)(re, {
                id: "tiktok-webapp-mobile-player-container",
                visibility: v,
                children: q && _e
            }) : null
        }
        )));
        var ge, ve = i(6888), ye = i(4474);
        !function(e) {
            e.ManualClick = "manual_click",
            e.Auto = "auto",
            e.Keyboard = "keyboard"
        }(ge || (ge = {}));
        const xe = (e, t) => {
            const {itemId: i, authorId: n, autoplayStatus: o=0, searchId: a="", searchKeyword: r, searchResultId: l, questionId: s, isMute: d=!1, fromTab: c, collectionId: u, collectionName: p, isPaidPartnership: h=!1, poiId: g, duration: v, awemeType: y, picCnt: x, tab_name: f, playMode: b, enterMethod: k} = t
              , _ = Object.assign({
                group_id: i,
                author_id: n,
                autoplay_status: o,
                search_id: a,
                search_keyword: r,
                search_result_id: l,
                question_id: s,
                from_tab: c,
                collection_id: u,
                collection_name: p,
                poi_id: g,
                duration: v,
                aweme_type: null != y ? y : 0,
                pic_cnt: x,
                tab_name: f,
                play_mode: T[b],
                enter_method: k
            }, ( () => {
                var e;
                const {href: t, search: i} = window.location;
                return {
                    is_from_webapp: null !== (e = (0,
                    ye.parse)(i).is_from_webapp) && void 0 !== e ? e : "0",
                    page_url: t
                }
            }
            )());
            _.is_mute = d ? "1" : "0",
            _.is_partnership = h ? "1" : "0",
            m.f.sendEvent(e, _)
        }
        ;
        var fe = i(89311)
          , be = i(88263)
          , ke = i(47815);
        const _e = {
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
        const je = e => ({
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
            var {playProgress: i, muteSetting: o, onUnmount: a, onEnded: l, onWaiting: s, onError: d, disableDownload: c=!1, itemMute: u=!1} = e
              , p = (0,
            k.Tt)(e, ["playProgress", "muteSetting", "onUnmount", "onEnded", "onWaiting", "onError", "disableDownload", "itemMute"]);
            const h = (0,
            r.useRef)(null)
              , m = (0,
            r.useRef)(!1)
              , {mute: g, volume: v, playing: y} = (0,
            Ce.O2)(o)
              , {setMute: x} = (0,
            Se.S4)();
            (0,
            r.useImperativeHandle)(t, ( () => {
                const e = h.current;
                return {
                    play: null == e ? void 0 : e.play.bind(e),
                    pause: null == e ? void 0 : e.pause.bind(e),
                    onTimeUpdate: t => {
                        null == e || e.addEventListener("timeupdate", ( () => {
                            var i, n;
                            const o = null !== (i = e.currentTime) && void 0 !== i ? i : 0
                              , a = null !== (n = e.duration) && void 0 !== n ? n : 0;
                            t(o / a, o, a)
                        }
                        ))
                    }
                    ,
                    onCanPlay: t => {
                        null == e || e.addEventListener("canplay", t)
                    }
                    ,
                    getPlayerAttributes: () => je(e)
                }
            }
            ));
            const f = (0,
            r.useCallback)(( (e=0) => (0,
            k.sH)(this, void 0, void 0, (function*() {
                var t, i, n;
                if (!(e >= 3))
                    try {
                        yield null === (t = h.current) || void 0 === t ? void 0 : t.play()
                    } catch (t) {
                        const o = null !== (i = null == t ? void 0 : t.message) && void 0 !== i ? i : "";
                        (null !== (n = o.match("failed because the user didn't interact with the document first.")) && void 0 !== n ? n : o.match("The request is not allowed by the user agent or the platform in the current context")) ? (x(!0),
                        setTimeout(( () => {
                            f(e + 1)
                        }
                        ), 0)) : f(e + 1),
                        null == d || d(t)
                    }
            }
            ))), [x]);
            (0,
            r.useEffect)(( () => {
                h.current && (h.current.volume = v)
            }
            ), [v]),
            (0,
            r.useEffect)(( () => {
                f(),
                h.current && Math.abs(h.current.currentTime - i) > .2 && (h.current.currentTime = i)
            }
            ), [i, f]),
            (0,
            r.useEffect)(( () => {
                var e;
                y ? m.current && (m.current = !1,
                f()) : (m.current = !0,
                null === (e = h.current) || void 0 === e || e.pause())
            }
            ), [y, f]),
            (0,
            r.useEffect)(( () => {
                const e = h.current;
                return () => {
                    null == a || a(je(e))
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
              , _ = (0,
            r.useCallback)((e => {
                null == l || l(e),
                f()
            }
            ), [l, f]);
            return (0,
            n.jsx)("audio", Object.assign({
                ref: h
            }, p, {
                muted: u || g,
                playsInline: !0,
                autoPlay: !0,
                onEnded: _,
                onWaiting: b
            }))
        }
        )));
        var Me;
        !function(e) {
            e.NoInteract = "failed because the user didn't interact with the document first.",
            e.SafariNoInteract = "The request is not allowed by the user agent or the platform in the current context"
        }(Me || (Me = {}));
        const Ie = e => ({
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
            var {playProgress: i, muteSetting: o, onUnmount: a, onEnded: l, onWaiting: s, onError: d, disableDownload: c=!1, itemMute: u=!1} = e
              , p = (0,
            k.Tt)(e, ["playProgress", "muteSetting", "onUnmount", "onEnded", "onWaiting", "onError", "disableDownload", "itemMute"]);
            const m = (0,
            r.useRef)(null)
              , g = (0,
            h.M2)()
              , {setMobileDefaultMute: v, setForcePause: y} = (0,
            h._B)();
            (0,
            r.useImperativeHandle)(t, ( () => {
                const e = m.current;
                return {
                    play: null == e ? void 0 : e.play.bind(e),
                    pause: null == e ? void 0 : e.pause.bind(e),
                    onTimeUpdate: t => {
                        null == e || e.addEventListener("timeupdate", ( () => {
                            var i, n;
                            const o = null !== (i = e.currentTime) && void 0 !== i ? i : 0
                              , a = null !== (n = e.duration) && void 0 !== n ? n : 0;
                            t(o / a, o, a)
                        }
                        ))
                    }
                    ,
                    onCanPlay: t => {
                        null == e || e.addEventListener("canplay", t)
                    }
                    ,
                    getPlayerAttributes: () => Ie(e)
                }
            }
            ));
            const x = (0,
            r.useCallback)(( () => (0,
            k.sH)(this, void 0, void 0, (function*() {
                var e, t, i;
                try {
                    yield null === (t = null === (e = m.current) || void 0 === e ? void 0 : e.play) || void 0 === t ? void 0 : t.call(e)
                } catch (e) {
                    return null == d || d(e),
                    null !== (i = e.message) && void 0 !== i ? i : ""
                }
                return ""
            }
            ))), [d])
              , f = (0,
            r.useCallback)(( () => {
                x().then((e => {
                    (e.match("failed because the user didn't interact with the document first.") || e.match("The request is not allowed by the user agent or the platform in the current context")) && (y(!1),
                    v(!0))
                }
                ))
            }
            ), [y, v, x]);
            (0,
            r.useEffect)(( () => {
                m.current && f()
            }
            ), [f]),
            (0,
            r.useEffect)(( () => {
                const e = m.current;
                return () => {
                    null == a || a(Ie(e))
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
              , _ = (0,
            r.useCallback)((e => {
                null == l || l(e),
                x()
            }
            ), [l, x]);
            return (0,
            n.jsx)("audio", Object.assign({
                ref: m
            }, p, {
                muted: u || g,
                playsInline: !0,
                autoPlay: !0,
                onEnded: _,
                onWaiting: b
            }))
        }
        )))
          , Pe = (0,
        r.memo)((0,
        r.forwardRef)((function({playUrl: e, id: t, teaParams: i, index: o, mode: l, itemMute: s, onAudioPause: p, onAudioPlaying: h, onAudioPlay: m, onAudioEnded: g, onAudioError: v, onTimeUpdate: y}, x) {
            var b;
            const {isAndroid: k=!1, isMobile: _=!1} = null !== (b = (0,
            u.U)(( () => ["isMobile", "isAndroid"]), [])) && void 0 !== b ? b : {}
              , {currentVideo: w, playProgress: C} = (0,
            ke.MY)()
              , S = (0,
            d.Ih)()
              , j = (0,
            r.useRef)(null)
              , T = (0,
            r.useRef)(null)
              , M = (0,
            a.Nj)(ce.Gs)
              , I = new be.re
              , A = (0,
            a.Nj)(ue.AU)
              , [P,E] = (0,
            r.useState)(!1)
              , O = (0,
            r.useCallback)(( () => {
                var e, t;
                null === (t = null === (e = j.current) || void 0 === e ? void 0 : e.play) || void 0 === t || t.call(e)
            }
            ), [])
              , L = (0,
            r.useCallback)(( () => {
                var e, t;
                null === (t = null === (e = j.current) || void 0 === e ? void 0 : e.pause) || void 0 === t || t.call(e)
            }
            ), [])
              , D = (0,
            r.useMemo)(( () => {
                if (_) {
                    if (!S)
                        return !1;
                    const {id: e, index: i} = S;
                    return !k || e === t && i === o
                }
                if (!w)
                    return !1;
                const {id: e, index: i, mode: n} = w;
                return e === t && i === o && n === l
            }
            ), [_, w, t, o, l, S, k]);
            (0,
            r.useImperativeHandle)(x, ( () => ({
                play: () => {
                    O(),
                    T.current = !0
                }
                ,
                pause: () => {
                    L(),
                    T.current = !1
                }
                ,
                onTimeUpdate: e => {
                    var t;
                    null === (t = j.current) || void 0 === t || t.onTimeUpdate(e)
                }
                ,
                get currentTime() {
                    var e, t;
                    return null !== (t = null === (e = j.current) || void 0 === e ? void 0 : e.getPlayerAttributes().currentTime) && void 0 !== t ? t : 0
                },
                get duration() {
                    var e, t;
                    return null !== (t = null === (e = j.current) || void 0 === e ? void 0 : e.getPlayerAttributes().duration) && void 0 !== t ? t : 0
                },
                get currentCanPlay() {
                    return D && P
                }
            })), [O, L, D, P]),
            (0,
            r.useEffect)(( () => {
                D || E(!1)
            }
            ), [D]);
            const B = (0,
            f.jj)();
            (0,
            r.useEffect)(( () => {
                const e = null === T.current || T.current;
                B && e ? O() : L()
            }
            ), [B, O, L, M, D, l]);
            const R = (0,
            r.useCallback)(( () => {
                var n;
                const o = (0,
                c.L$)(null === (n = j.current) || void 0 === n ? void 0 : n.getPlayerAttributes())
                  , {bitrate: a, author_id: r, format: s, encodedType: d, videoQuality: u, encodeUserTag: p, codecType: h, definition: m, secret: g, forFriend: v, aweme_type: y, pic_cnt: x} = i;
                return Object.assign({
                    id: t,
                    authorId: r,
                    playMode: l,
                    bitrate: a,
                    format: s,
                    encodedType: d,
                    videoQuality: u,
                    encodeUserTag: p,
                    codecType: h,
                    definition: m,
                    secret: g,
                    forFriend: v,
                    play_url: e,
                    awemeType: y,
                    picCnt: x
                }, null != o ? o : {})
            }
            ), [t, l, i, e])
              , {handlePauseWithLoading: z, handlePlayingWithLoading: U} = (0,
            f.iJ)({
                isCurrentVideo: D
            })
              , V = (0,
            r.useCallback)(( () => {
                I.handleLoadStart(R())
            }
            ), [I, R])
              , N = (0,
            r.useCallback)((e => {
                null == m || m(e)
            }
            ), [m])
              , F = (0,
            r.useCallback)(( () => {
                var e;
                const {currentTime: t=0, duration: i=0} = (0,
                c.L$)(null === (e = j.current) || void 0 === e ? void 0 : e.getPlayerAttributes());
                I.handleTimeUpdate(R()),
                null == y || y(t / i)
            }
            ), [I, R, y])
              , H = (0,
            r.useCallback)((e => {
                null == p || p(e),
                z()
            }
            ), [p, z])
              , G = (0,
            r.useCallback)((t => {
                null == h || h(t),
                U(),
                A.reportVideoInteract({
                    endTime: Date.now(),
                    videoSource: e
                })
            }
            ), [h, U, A, e])
              , W = (0,
            r.useCallback)((e => {
                null == g || g(e),
                I.handleEnded()
            }
            ), [g, I]);
            return (0,
            r.useEffect)(( () => () => {
                I.resetWhenSlideChange(Object.assign({}, R()))
            }
            ), [e]),
            D ? _ ? (0,
            n.jsx)(Ae, {
                ref: j,
                c: !0,
                muteSetting: s || _e[l].forceMute,
                defaultMute: _e[l].defaultMute,
                playProgress: null != C ? C : 0,
                src: e,
                onTimeUpdate: F,
                onError: v,
                onPause: H,
                onPlay: N,
                onPlaying: G,
                onEnded: W,
                onLoadStart: V
            }) : (0,
            n.jsx)(Te, {
                ref: j,
                c: !0,
                muteSetting: s || _e[l].forceMute,
                defaultMute: _e[l].defaultMute,
                playProgress: null != C ? C : 0,
                src: e,
                onTimeUpdate: F,
                onError: v,
                onPause: H,
                onPlay: N,
                onPlaying: G,
                onEnded: W,
                onLoadStart: V
            }) : null
        }
        )))
          , Ee = (0,
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
        var De = i(47569)
          , Be = i(15520)
          , Re = i(32125);
        const ze = {
            delay: 2500,
            disableOnInteraction: !1
        }
          , Ue = (0,
        r.memo)((0,
        r.forwardRef)((function({show: e=!0, item: t, playMode: i, index: o, teaParams: d, onAudioPlay: p, onAudioError: h, onTimeUpdate: m, onFinish: g, isActive: v=!0, shouldAutostart: y=!0}, f) {
            var b, _, w, C, S;
            const {video: {duration: j, volumeInfo: T}, id: M, itemMute: I=!1} = (0,
            c.L$)(t)
              , A = null !== (_ = null === (b = null == t ? void 0 : t.music) || void 0 === b ? void 0 : b.playUrl) && void 0 !== _ ? _ : ""
              , P = null !== (C = null === (w = null == t ? void 0 : t.imagePost) || void 0 === w ? void 0 : w.images) && void 0 !== C ? C : []
              , {isMobile: E=!1} = null !== (S = (0,
            u.U)(( () => ["isMobile"]), [])) && void 0 !== S ? S : {}
              , O = (0,
            De.mG)()
              , L = (0,
            Be.nW)((e => (null == t ? void 0 : t.author) ? e.users[t.author] : void 0), Re.bN)
              , [D,B] = (0,
            r.useState)(!1)
              , [R,z] = (0,
            r.useState)(!1)
              , U = (0,
            r.useRef)(!1)
              , V = (0,
            r.useRef)(-1)
              , N = (0,
            r.useRef)(-1)
              , F = (0,
            r.useRef)(!1)
              , H = (0,
            r.useRef)(null)
              , G = (0,
            r.useRef)(null)
              , W = (0,
            r.useRef)([])
              , {isRTL: $} = (0,
            fe.m)()
              , q = (0,
            ke.eu)()
              , Y = (0,
            Se.i3)()
              , {handleBreakCount: J} = (e => {
                const {updateGlobalVVCount: t} = (0,
                ke.nr)()
                  , i = (0,
                ke.eu)()
                  , n = (0,
                r.useCallback)(( () => {
                    t(e)
                }
                ), [t, e])
                  , o = (0,
                r.useCallback)(( () => {
                    (4 === e || 2 === e && i) && t(e)
                }
                ), [t, e]);
                return (0,
                r.useMemo)(( () => ({
                    handleBreakCount: n,
                    handleVvCountOnEnd: o
                })), [e])
            }
            )(i)
              , Q = (0,
            r.useMemo)(( () => v && (P.length > 1 || q)), [v, q, P.length])
              , Z = (0,
            r.useMemo)(( () => [""]), [])
              , K = $ ? "rtl" : "ltr"
              , {aweme_type: X, pic_cnt: ee} = (0,
            x.MA)(t)
              , te = (0,
            r.useMemo)(( () => Object.assign(Object.assign({}, d), {
                aweme_type: X,
                pic_cnt: ee
            })), [X, ee, d])
              , ie = (0,
            r.useMemo)(( () => {
                const {group_id: e="", author_id: t="", is_scheduled: n, search_id: o, search_keyword: a, search_result_id: r, question_id: l, collection_id: s, collection_name: c, isPaidPartnership: u, poi_id: p, tab_name: h, isReposted: m, enter_method: g} = d || {};
                return {
                    itemId: e,
                    authorId: t,
                    isScheduled: Boolean(n),
                    autoplayStatus: 1,
                    searchId: o,
                    searchKeyword: a,
                    searchResultId: r,
                    questionId: l,
                    playMode: i,
                    isMute: Y,
                    collectionId: s,
                    collectionName: c,
                    isPaidPartnership: Boolean(u),
                    poiId: p,
                    awemeType: X,
                    picCnt: ee,
                    isReposted: m,
                    tab_name: h,
                    enterMethod: g
                }
            }
            ), [X, i, Y, ee, d])
              , ne = (0,
            r.useMemo)(( () => Object.assign(Object.assign({}, ie), {
                currentTime: 0,
                duration: 0
            })), [ie])
              , oe = (0,
            a.Nj)(ce.Gs)
              , ae = () => {
                if (V.current <= 0)
                    return;
                const e = Number(new Date) - V.current;
                ne.duration = e,
                2 !== i && xe("play_time", ne)
            }
              , re = (0,
            r.useCallback)(( () => {
                var e;
                if (P.length > 1) {
                    const t = null === (e = G.current) || void 0 === e ? void 0 : e.autoplay;
                    null == t || t.start()
                }
                oe.triggerPlay(),
                V.current = Number(new Date),
                U.current = !1
            }
            ), [P.length, oe])
              , le = (0,
            r.useCallback)((e => {
                var t;
                const n = null === (t = G.current) || void 0 === t ? void 0 : t.autoplay;
                null == n || n.stop(),
                oe.triggerPause({
                    aweme_type: X,
                    pic_cnt: ee,
                    enter_method: e,
                    playMode: i
                }),
                v && ae()
            }
            ), [X, i, ee, oe, v]);
            (0,
            r.useEffect)(( () => {
                const e = () => {
                    var e, t, i, n;
                    document.hidden ? (v && le("other"),
                    null === (t = null === (e = H.current) || void 0 === e ? void 0 : e.pause) || void 0 === t || t.call(e)) : v && (re(),
                    null === (n = null === (i = H.current) || void 0 === i ? void 0 : i.play) || void 0 === n || n.call(i))
                }
                ;
                return document.addEventListener("visibilitychange", e),
                () => document.removeEventListener("visibilitychange", e)
            }
            ), [v]),
            (0,
            r.useEffect)(( () => {
                D && v && (V.current = Number(new Date),
                N.current = V.current,
                xe("video_play", ne),
                oe.handleAudioPlay(M),
                oe.triggerPlay(),
                U.current = !1)
            }
            ), [D, v]),
            (0,
            r.useEffect)(( () => {
                var e;
                if (Q) {
                    const t = null === (e = G.current) || void 0 === e ? void 0 : e.autoplay;
                    null == t || t.start()
                }
            }
            ), [Q]),
            (0,
            r.useEffect)(( () => z(!0)), []);
            const se = (0,
            r.useCallback)(( () => {
                J(),
                (0 !== i || v) && ae()
            }
            ), [ne, i, v])
              , de = (0,
            r.useCallback)(( () => {
                var e, t, n;
                if (4 !== i) {
                    null === (t = null === (e = H.current) || void 0 === e ? void 0 : e.pause) || void 0 === t || t.call(e);
                    const i = null === (n = G.current) || void 0 === n ? void 0 : n.autoplay;
                    null == i || i.stop()
                }
                null == g || g()
            }
            ), [i, g])
              , ue = (0,
            r.useCallback)((e => {
                e.realIndex === P.length - 1 && (U.current ? q && de() : (J(),
                xe("video_play_finish", ne),
                U.current = !0,
                P.length > 1 && q && de()))
            }
            ), [P.length, ne, q])
              , pe = (0,
            r.useCallback)(( () => {
                F.current = !0
            }
            ), [])
              , he = (0,
            r.useCallback)(( () => {
                F.current = !1
            }
            ), [])
              , me = (0,
            r.useCallback)((e => {
                P.length
            }
            ), [P.length])
              , ge = (0,
            r.useCallback)((e => {
                const i = t
                  , {author: n} = i
                  , o = (0,
                k.Tt)(i, ["author"]);
                for (let t = 0; t < o.imagePost.images.length; t++) {
                    const i = e.slides[t].firstElementChild
                      , n = i.naturalHeight
                      , a = i.naturalWidth;
                    o.imagePost.images[t].imageHeight = n,
                    o.imagePost.images[t].imageWidth = a
                }
                o.author = L,
                O.setItem(o)
            }
            ), [L, t, O]);
            return (0,
            r.useImperativeHandle)(f, ( () => ({
                audio: {
                    play: () => {
                        var e, t;
                        null === (t = null === (e = H.current) || void 0 === e ? void 0 : e.play) || void 0 === t || t.call(e)
                    }
                    ,
                    pause: () => {
                        var e, t;
                        null === (t = null === (e = H.current) || void 0 === e ? void 0 : e.pause) || void 0 === t || t.call(e)
                    }
                    ,
                    onTimeUpdate: e => {
                        var t;
                        null === (t = H.current) || void 0 === t || t.onTimeUpdate(e)
                    }
                    ,
                    get currentTime() {
                        var e, t;
                        return null !== (t = null === (e = H.current) || void 0 === e ? void 0 : e.currentTime) && void 0 !== t ? t : 0
                    },
                    get duration() {
                        var e, t;
                        return null !== (t = null === (e = H.current) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0
                    },
                    get currentCanPlay() {
                        var e, t;
                        return null !== (t = null === (e = H.current) || void 0 === e ? void 0 : e.currentCanPlay) && void 0 !== t && t
                    }
                },
                swiper: {
                    play: re,
                    pause: le,
                    slidePrev: e => {
                        var t, i;
                        F.current || (null === (t = G.current) || void 0 === t || t.slidePrev(),
                        null === (i = G.current) || void 0 === i || i.autoplay.stop(),
                        N.current === V.current && (N.current = Number(new Date)),
                        P.length)
                    }
                    ,
                    slideNext: e => {
                        var t, i;
                        F.current || (null === (t = G.current) || void 0 === t || t.slideNext(),
                        null === (i = G.current) || void 0 === i || i.autoplay.stop(),
                        N.current === V.current && (N.current = Number(new Date)),
                        P.length)
                    }
                    ,
                    slideToLoop: e => {
                        var t;
                        null === (t = G.current) || void 0 === t || t.slideToLoop(e)
                    }
                    ,
                    onActiveIndexChange: e => {
                        W.current.push(e);
                        const t = G.current;
                        t && (t.off("activeIndexChange"),
                        W.current.forEach((e => t.on("activeIndexChange", e))))
                    }
                    ,
                    get paused() {
                        var e;
                        return !(null === (e = G.current) || void 0 === e ? void 0 : e.autoplay.running)
                    }
                }
            }))),
            R ? (0,
            n.jsxs)(Ee, {
                isMobile: E,
                children: [(0,
                n.jsx)("link", {
                    rel: "stylesheet",
                    href: l
                }), e && (0,
                n.jsx)(Oe, {
                    children: P.length > 0 ? (0,
                    n.jsx)(s.RC, {
                        loop: !0,
                        onInit: e => {
                            G.current = e,
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
                        autoplay: !(!Q || !y) && ze,
                        allowSlideNext: Q,
                        allowSlidePrev: Q,
                        preventClicks: !1,
                        preventClicksPropagation: !1,
                        onAfterInit: () => B(!0),
                        onImagesReady: e => {
                            ge(e)
                        }
                        ,
                        onDestroy: se,
                        onSlideNextTransitionEnd: ue,
                        onSlideChangeTransitionStart: pe,
                        onSlideChangeTransitionEnd: he,
                        onAutoplay: me,
                        slidesPerView: "auto",
                        touchStartPreventDefault: !1,
                        children: P.map((e => {
                            var t, i;
                            return (0,
                            n.jsx)(s.qr, {
                                style: {
                                    height: "100%"
                                },
                                children: (0,
                                n.jsx)(Le, {
                                    src: (null !== (t = e.imageURL.urlList) && void 0 !== t ? t : Z)[0]
                                })
                            }, (null !== (i = e.imageURL.urlList) && void 0 !== i ? i : Z)[0])
                        }
                        ))
                    }) : null
                }), (0,
                n.jsx)(Pe, {
                    ref: H,
                    index: o,
                    id: M,
                    mode: i,
                    duration: j,
                    playUrl: A,
                    teaParams: te,
                    volumeInfo: T,
                    itemMute: I,
                    onAudioPlay: p,
                    onAudioError: h,
                    onTimeUpdate: m,
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
        var He = i(50007)
          , Ge = i(8331)
          , We = i(62256)
          , $e = i(64840)
          , qe = i(59782)
          , Ye = i(2827);
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
        function Qe() {
            const e = {
                _handleLoadStart: he(),
                _handleLoadedData: he(),
                _handleCanPlay: he(),
                _handlePlay: he(),
                _handlePause: he(),
                _handleTimeUpdate: he(),
                _handlePlaying: he(),
                _handleWaiting: he(),
                _handleEnded: he(),
                _handleError: he(),
                _handleUnmount: he(),
                _handleTryPlayError: he(),
                _handleStatusChanged: he(),
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
                setPlayerAttributes: he(),
                setVideoRef: he(),
                videoRef: null
            };
            return e
        }
        const Ze = (0,
        r.createContext)(Qe())
          , Ke = (0,
        r.createContext)(Je)
          , Xe = e => {
            const [t,i] = (0,
            Ye.$)(Je)
              , o = (0,
            r.useRef)(Qe())
              , a = (0,
            r.useRef)(!0);
            return a.current && (o.current.setPlayerAttributes = e => i((t => Object.assign(Object.assign({}, t), {
                videoAttributes: e
            }))),
            o.current.setVideoRef = e => {
                o.current.videoRef = e
            }
            ,
            a.current = !1),
            (0,
            n.jsx)(Ze.Provider, {
                value: o.current,
                children: (0,
                n.jsx)(Ke.Provider, {
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
        n.jsx)(tt.Provider, {
            value: et,
            children: e
        })
          , nt = "__CARPLAY_WEBVIEW_ID__"
          , ot = "__TTPlayer__"
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
            const t = document.getElementById(nt);
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
                setIsPlaying: he(),
                setIsFirstPlay: he(),
                setVideoStatus: he(),
                setShowPlayer: he(),
                setShowPause: he(),
                state: ct
            }
        }
        const pt = (0,
        r.createContext)(ut())
          , ht = (0,
        r.createContext)(ct)
          , mt = e => {
            const [t,i] = (0,
            Ye.$)(ct)
              , o = (0,
            r.useRef)(!0)
              , a = (0,
            r.useRef)(ut());
            return o.current && (a.current.setIsPlaying = e => i((t => Object.assign(Object.assign({}, t), {
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
            o.current = !1),
            (0,
            n.jsx)(pt.Provider, {
                value: a.current,
                children: (0,
                n.jsx)(ht.Provider, {
                    value: t,
                    children: e.children
                })
            })
        }
        ;
        var gt = i(8157)
          , vt = i(51503)
          , yt = i(37580);
        function xt(e, t) {
            const {videoCount: i, foruWatchedCount: n} = (0,
            vt.D)()
              , {subtitleParams: o} = (0,
            yt.JS)()
              , a = (0,
            x.n5)(e, "videos" === (null == t ? void 0 : t.fromTab));
            return (0,
            r.useMemo)(( () => {
                var r, l, s, d;
                const {bitrate: c=-1, encodedType: u="", format: p="", videoQuality: h="", encodeUserTag: m="", codecType: g="", definition: v=""} = null !== (r = null == e ? void 0 : e.video) && void 0 !== r ? r : {}
                  , {scheduleTime: y, forFriend: x, secret: f, itemMute: b=!1} = null != e ? e : {};
                return Object.assign(Object.assign({
                    group_id: null !== (l = null == e ? void 0 : e.id) && void 0 !== l ? l : "",
                    author_id: null !== (s = null == e ? void 0 : e.authorId) && void 0 !== s ? s : "",
                    is_scheduled: Boolean(y),
                    poi_id: null === (d = null == e ? void 0 : e.poi) || void 0 === d ? void 0 : d.id,
                    bitrate: Number(c),
                    encodedType: u,
                    format: p,
                    videoQuality: h,
                    encodeUserTag: m,
                    codecType: g,
                    definition: v,
                    forFriend: x,
                    secret: f,
                    totalWatchCount: i,
                    foruWatchCount: n,
                    isPaidPartnership: 2 === (null == e ? void 0 : e.adLabelVersion),
                    is_sub_only_video: (null == e ? void 0 : e.subVideoMeta) ? 1 : 0,
                    isCopyrightMuted: b,
                    isPinnedItem: a
                }, o), t)
            }
            ), [e, i, n, o, t, a])
        }
        function ft(e, t) {
            var i, n;
            const {isIOS: o} = (0,
            c.L$)((0,
            u.U)(( () => ["isIOS"]), []));
            return (0,
            r.useMemo)(( () => {
                var i, n, a, r;
                const l = null !== (n = null === (i = null == e ? void 0 : e.video) || void 0 === i ? void 0 : i.width) && void 0 !== n ? n : 1
                  , s = null !== (r = null === (a = null == e ? void 0 : e.video) || void 0 === a ? void 0 : a.height) && void 0 !== r ? r : 1;
                return o && "image" === t ? !!l && l / s >= 1 : !l || l / s >= .625
            }
            ), [o, null === (i = null == e ? void 0 : e.video) || void 0 === i ? void 0 : i.height, null === (n = null == e ? void 0 : e.video) || void 0 === n ? void 0 : n.width, t])
        }
        var bt, kt = i(38203), _t = function(e, t) {
            var i = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (i[n[o]] = e[n[o]])
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
                m.f.event("share_panel_show", e)
            }
            handleCommentShow(e) {
                m.f.event("click_comment_button", e)
            }
            handleVideoButtonShow(e) {
                m.f.event("video_button_show", e)
            }
            handleVideoButtonClick(e) {
                m.f.event("video_button_click", e)
            }
            handleLikeVideoResult(e) {
                var {actionType: t} = e
                  , i = _t(e, ["actionType"]);
                const n = 1 === t ? "like" : "like_cancel";
                m.f.event(n, i)
            }
            handleFollowUser(e) {
                var {actionType: t} = e
                  , i = _t(e, ["actionType"]);
                const n = 0 === t ? "unfollow" : "follow";
                m.f.event(n, i)
            }
        }
        ;
        wt = (0,
        k.Cg)([(0,
        kt._)()], wt);
        var Ct = i(11654)
          , St = i(49057)
          , jt = i(42357)
          , Tt = i(18183)
          , Mt = i(82290)
          , It = i(73551)
          , At = i(18499)
          , Pt = i(53764)
          , Et = i(75431)
          , Ot = i(38017);
        const Lt = (0,
        ie.A)("div", {
            target: "exhfy940"
        })({
            pointerEvents: "none",
            position: "fixed",
            zIndex: 1e3
        }, "label:DivDoubleTapContainer;")
          , Dt = (0,
        Et.i7)({
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
          , Bt = (0,
        ie.A)(Ot.A, {
            target: "exhfy941"
        })({
            animation: `${Dt} 1400ms`,
            width: "120px",
            height: "120px"
        }, "label:StyledLikeIcon;");
        var Rt = i(67518);
        const zt = function({x: e, y: t, styledCache: i}) {
            const o = Math.floor(61 * Math.random() - 30)
              , a = (0,
            n.jsx)(Lt, {
                style: {
                    left: e - 60,
                    top: t - 60,
                    transform: `rotate(${o}deg)`
                },
                children: (0,
                n.jsx)(Bt, {})
            });
            return i ? (0,
            n.jsxs)(Rt.C, {
                value: i,
                children: [" ", a, " "]
            }) : a
        };
        class Ut {
            constructor(e, t, i=document, n=void 0) {
                this.x = e,
                this.y = t,
                this.documentObj = i,
                this.styledCache = n,
                this.el = this.documentObj.createElement("div")
            }
            emit() {
                var e;
                try {
                    (null !== (e = this.documentObj[null === Pt.e || void 0 === Pt.e ? void 0 : Pt.e.fullscreenElement]) && void 0 !== e ? e : this.documentObj.body).appendChild(this.el),
                    (0,
                    At.render)((0,
                    r.createElement)(zt, {
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
                    At.unmountComponentAtNode)(this.el),
                    (null !== (e = this.documentObj[null === Pt.e || void 0 === Pt.e ? void 0 : Pt.e.fullscreenElement]) && void 0 !== e ? e : this.documentObj.body).removeChild(this.el)
                } catch (e) {
                    console.error(e)
                }
            }
        }
        const Vt = i.p + "d84eb82fb19d8c010b0b.png";
        var Nt = i(47521)
          , Ft = i(13814);
        function Ht() {
            const {currentIndex: e} = (0,
            r.useContext)(qe.dk);
            return e
        }
        const Gt = e => {
            let t = e;
            const {availHeight: i=0, availWidth: n=0} = "undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.screen) || {};
            return i > 0 && n / i > 1 && (t = !0),
            t
        }
        ;
        var Wt = i(49677)
          , $t = i(72153)
          , qt = i(42204);
        function Yt(e) {
            return [(0,
            $t.jJ)({
                min: qt.aU,
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
          , Qt = (0,
        ie.A)("div", {
            target: "e1epb9o91"
        })({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }, "label:DivVideoMaskInfo;")
          , Zt = (0,
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
            min: qt.aU,
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
            min: qt.aU,
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
            min: qt.aU,
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
            min: qt.aU,
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
            min: qt.aU,
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
        }, ...Yt(e)]), "label:StyledLowerBtn;")
          , ni = (0,
        r.memo)((e => {
            const {videoMaskType: t, groupId: i="", icon: o, title: a, desc: l, upperBtnText: s, lowerBtnText: d, onUpperBtnClick: c, onLowerBtnClick: u, style: p={}, onSkipVideo: h, item: m, list: g} = e
              , v = (0,
            r.useContext)(qe.dk)
              , {currentIndex: y} = v;
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
                        m && (null == m ? void 0 : m.id) === (null == g ? void 0 : g[y]) && (null == h || h())
                    }
                    ), 5e3);
                    return () => {
                        clearTimeout(e)
                    }
                }
            }
            ), [y, m, g, h, t]),
            (0,
            n.jsxs)(Jt, {
                style: p,
                children: [(0,
                n.jsxs)(Qt, {
                    className: "video-mask-info",
                    children: [Boolean(o) && (0,
                    n.jsx)(Zt, {
                        className: "video-mask-icon",
                        showIconBackground: "m3_age_restricted" !== t,
                        children: o
                    }), Boolean(a) && (0,
                    n.jsx)(Kt, {
                        className: "video-mask-title",
                        children: a
                    }), Boolean(l) && (0,
                    n.jsx)(Xt, {
                        className: "video-mask-desc",
                        children: l
                    })]
                }), (0,
                n.jsxs)(ei, {
                    className: "btn-wrapper",
                    children: [Boolean(s) && (0,
                    n.jsx)(ti, {
                        type: "button",
                        onClick: c,
                        children: s
                    }), Boolean(d) && (0,
                    n.jsx)(ii, {
                        type: "button",
                        onClick: u,
                        children: d
                    })]
                })]
            })
        }
        ));
        var oi, ai = i(93240), ri = i(82107);
        function li() {
            return li = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i)
                        ({}).hasOwnProperty.call(i, n) && (e[n] = i[n])
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
            }, e), oi || (oi = r.createElement("path", {
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
                    for (var n in i)
                        ({}).hasOwnProperty.call(i, n) && (e[n] = i[n])
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
          , hi = (0,
        ie.A)("div", {
            target: "e1srywo10"
        })(( ({height: e}) => ({
            position: "relative",
            width: "100%",
            height: e
        })), "label:DivVideoSlideContainer;")
          , mi = (0,
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
          , yi = (0,
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
          , xi = (0,
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
          , fi = (0,
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
          , ki = (0,
        ie.A)("span", {
            target: "e1srywo18"
        })({
            color: "#fff",
            fontSize: "13px",
            padding: "0 20px",
            lineHeight: "17px"
        }, "label:SpanWarnText;")
          , _i = (0,
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
          , ji = i(44815);
        var Ti = i(48720)
          , Mi = i(92067)
          , Ii = i(40173);
        const Ai = (0,
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
          , Pi = (0,
        ie.A)("div", {
            target: "e1qhl7vn1"
        })({
            width: "20px",
            height: "20px",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center"
        }, "label:DivIconWrapper;")
          , Ei = (0,
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
            Ii.s)()
              , i = (0,
            r.useRef)("")
              , {isRTL: o} = (0,
            fe.m)()
              , {isMobileUiOptimize: a} = (0,
            p.Eo)()
              , l = (0,
            r.useMemo)(( () => ({
                transform: `rotateY(${o ? 180 : 0}deg)`
            })), [o]);
            return (0,
            r.useEffect)(( () => {
                i.current !== e && Ne.p.handleVideoUnmuteButtonShow()
            }
            ), [e]),
            (0,
            n.jsxs)(Ai, {
                isMobileUiOptimize: a,
                children: [(0,
                n.jsx)(Pi, {
                    style: l,
                    children: (0,
                    n.jsx)(Mi.A, {
                        width: 20,
                        height: 20
                    })
                }), (0,
                n.jsx)(Ei, {
                    children: t("mute_autoplay_unmute_btn")
                })]
            })
        }
        ;
        var Li, Di;
        function Bi() {
            return Bi = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i)
                        ({}).hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            }
            ,
            Bi.apply(null, arguments)
        }
        const Ri = function(e) {
            return r.createElement("svg", Bi({
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
            })), Di || (Di = r.createElement("path", {
                fill: "#161823",
                fillOpacity: .75,
                d: "M20.5 20.5v2c0 .276-.254.5-.567.5H4.066c-.313 0-.566-.224-.566-.5v-2c0-.276.254-.5.566-.5h15.867c.313 0 .567.224.567.5z"
            })))
        };
        var zi;
        function Ui() {
            return Ui = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i)
                        ({}).hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            }
            ,
            Ui.apply(null, arguments)
        }
        const Vi = function(e) {
            return r.createElement("svg", Ui({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                width: "1em",
                height: "1em"
            }, e), zi || (zi = r.createElement("path", {
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
                    for (var n in i)
                        ({}).hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            }
            ,
            Fi.apply(null, arguments)
        }
        const Hi = function(e) {
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
        var Gi, Wi, $i;
        function qi() {
            return qi = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i)
                        ({}).hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            }
            ,
            qi.apply(null, arguments)
        }
        const Yi = function(e) {
            return r.createElement("svg", qi({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                width: "1em",
                height: "1em"
            }, e), Gi || (Gi = r.createElement("path", {
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
        function Qi() {
            return Qi = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i)
                        ({}).hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            }
            ,
            Qi.apply(null, arguments)
        }
        const Zi = function(e) {
            return r.createElement("svg", Qi({
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
        var en = i(94396)
          , tn = i(54308)
          , nn = i(91007)
          , on = i(17566)
          , an = i(38099)
          , rn = i(32381);
        function ln(e) {
            return /^https?/.test(e) ? e : `https:${e}`
        }
        var sn = i(11060)
          , dn = i(90233)
          , cn = i(3825)
          , un = i(1728)
          , pn = i(83272)
          , hn = i(78192)
          , mn = i(3782)
          , gn = i(91532)
          , vn = i(16469)
          , yn = i(71281)
          , xn = i(87724)
          , fn = i(72688)
          , bn = i(83682)
          , kn = i(58305)
          , _n = i(5412)
          , wn = i(2584)
          , Cn = i(82535)
          , Sn = i(75526)
          , jn = i(67659);
        const Tn = (e, t) => {
            let i = qt.YR
              , n = qt.YR - 9
              , o = 16
              , a = 14
              , r = 20
              , l = 4
              , s = 49
              , d = 40;
            return t <= qt.a9 ? (i = qt.hE,
            n = qt.hE - 8,
            o = 8,
            a = 12,
            r = 15) : t <= qt.SX ? (i = qt.YR,
            n = qt.YR - 9,
            o = 12,
            a = 13,
            r = 17) : e >= qt.ij ? (i = qt.kL,
            n = qt.kL - 8) : e >= qt.n1 ? (i = qt.ox,
            n = qt.ox - 8) : e >= qt.gL && (i = qt.YR,
            n = qt.YR - 9),
            e <= qt.gL && e / t >= 2 ? (l = 4,
            s = 32,
            d = 24) : e >= qt.L7 ? (l = 12,
            s = 72,
            d = 48) : e >= qt.n1 ? (l = 12,
            s = 64,
            d = 40) : e >= qt.gL && (l = 8,
            s = 56,
            d = 40),
            {
                avatarSize: i,
                iconSize: n,
                marginSize: o,
                fontSize: a,
                lineHeight: r,
                footerIconPadding: l,
                footerHeight: s,
                footerIconSize: d
            }
        }
        ;
        var Mn = i(6620)
          , In = i(34294)
          , An = i(66228)
          , Pn = i(46075)
          , En = i(34922)
          , On = i(39096)
          , Ln = i.n(On);
        function Dn(e) {
            let t;
            return t = "number" == typeof e ? `${e}px` : e || "100%",
            t
        }
        const Bn = (0,
        ie.A)("div", {
            target: "e1yjza6m0"
        })(( ({width: e, height: t}) => ({
            width: Dn(e),
            height: Dn(t),
            overflow: "hidden",
            margin: "0 auto",
            outline: "none"
        })), "label:DivContainer;")
          , Rn = (0,
        r.memo)((function(e) {
            const {width: t, height: i, className: o, options: a, eventListeners: l=[]} = e
              , s = (0,
            r.useRef)(null)
              , d = (0,
            r.useRef)(null);
            return (0,
            r.useEffect)(( () => {
                d.current = Ln().loadAnimation(Object.assign({
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
            n.jsx)(Bn, {
                width: t,
                height: i,
                className: o,
                ref: s
            })
        }
        ))
          , zn = i(48867)
          , Un = (0,
        r.memo)(( ({width: e=24, height: t=24, onComplete: i=he(), autoplay: o}) => {
            const a = (0,
            r.useMemo)(( () => ({
                loop: !1,
                autoplay: o,
                animationData: zn,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                }
            })), [o])
              , l = (0,
            r.useMemo)(( () => [{
                eventName: "complete",
                callback: i
            }]), [i]);
            return (0,
            n.jsx)(Rn, {
                width: e,
                height: t,
                isClickToPauseDisabled: !0,
                options: a,
                isStopped: o,
                isPaused: o,
                eventListeners: l
            })
        }
        ))
          , Vn = (0,
        ie.A)("div", {
            target: "efwayy20"
        })(( ({isEngageOptUI: e}) => ({
            fontSize: 0,
            textAlign: "center",
            marginBottom: "-15px",
            height: e ? "34px" : "",
            width: e ? "100%" : ""
        })), "label:DivFollowPlus;")
          , Nn = (0,
        r.memo)(( ({followed: e, iconSize: t=28, style: i={}, onComplete: o, onFollow: a, e2eTag: l, isEngageOptUI: s=!1}) => {
            const [d,c] = (0,
            r.useState)(!1)
              , [u,p] = (0,
            r.useState)(!1)
              , h = a;
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
            const m = (0,
            r.useCallback)(( () => {
                c(!1),
                null == o || o()
            }
            ), [o])
              , g = (0,
            jn.H)(Vn)
              , v = (0,
            r.useMemo)(( () => ({
                scene: "video_feed"
            })), []);
            return (0,
            n.jsx)(g, {
                section: "follow",
                style: i,
                onClick: h,
                "data-e2e": l,
                isEngageOptUI: s,
                reportParams: v,
                children: u ? d ? (0,
                n.jsx)(Un, {
                    width: t,
                    height: t,
                    autoplay: e,
                    onComplete: m
                }) : (0,
                n.jsx)(En.A, {
                    width: t,
                    height: t
                }) : null
            })
        }
        ));
        var Fn = i(6928);
        const Hn = i(75878)
          , Gn = (0,
        r.memo)(( ({width: e=40, height: t=40, onComplete: i=he(), autoplay: o}) => {
            const a = (0,
            r.useMemo)(( () => ({
                loop: !1,
                autoplay: o,
                animationData: Hn,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                }
            })), [o])
              , l = (0,
            r.useMemo)(( () => [{
                eventName: "complete",
                callback: i
            }]), [i]);
            return (0,
            n.jsx)(Rn, {
                width: 1.5 * e,
                height: 1.5 * t,
                isClickToPauseDisabled: !0,
                options: a,
                isStopped: o,
                isPaused: o,
                eventListeners: l
            })
        }
        ))
          , Wn = (0,
        ie.A)("div", {
            target: "e1ugqg2w0"
        })({
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "visible"
        }, "label:DivHeart;");
        var $n;
        !function(e) {
            e.UNLIKE = "unlike",
            e.LIKED = "liked"
        }($n || ($n = {}));
        const qn = (0,
        r.memo)(( ({likeState: e, onComplete: t, iconSize: i}) => {
            const [o,a] = (0,
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
            n.jsx)(Wn, {
                style: {
                    width: `${i}px`,
                    height: `${i}px`
                },
                children: "liked" === e ? o ? (0,
                n.jsx)(Gn, {
                    height: i,
                    width: i,
                    autoplay: !0,
                    onComplete: s
                }) : (0,
                n.jsx)(Ot.A, {
                    height: i,
                    width: i
                }) : (0,
                n.jsx)(Fn.A, {
                    height: i,
                    width: i
                })
            })
        }
        ));
        var Yn, Jn;
        function Qn() {
            return Qn = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i)
                        ({}).hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            }
            ,
            Qn.apply(null, arguments)
        }
        const Zn = function(e) {
            return r.createElement("svg", Qn({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 49 49",
                width: "1em",
                height: "1em"
            }, e), Yn || (Yn = r.createElement("path", {
                fill: "url(#album_svg__paint0_angular)",
                fillRule: "evenodd",
                d: "M24.5 49C38.031 49 49 38.031 49 24.5S38.031 0 24.5 0 0 10.969 0 24.5 10.969 49 24.5 49z",
                clipRule: "evenodd"
            })), Jn || (Jn = r.createElement("defs", null, r.createElement("radialGradient", {
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
          , Kn = i.p + "817dec112e529e1cc8b7.png"
          , Xn = "62px"
          , eo = (0,
        ie.A)("div", {
            target: "e365p2r0"
        })({
            marginBottom: "2px",
            display: "flex"
        }, "label:DivShareIconWrapper;")
          , to = (0,
        ie.A)(bn.Cz, {
            target: "e365p2r1"
        })({
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }, "label:StyledLinkWrapper;")
          , io = (0,
        ie.A)(to, {
            target: "e365p2r2"
        })({
            height: Xn,
            marginBottom: "12px",
            position: "relative"
        }, "label:StyledAuthorLink;")
          , no = (0,
        ie.A)(to, {
            target: "e365p2r3"
        })({
            height: "56px"
        }, "label:StyledMusicLink;")
          , oo = (e=!1) => (e ? 32 : qt.YR - 9) + "px";
        function ao(e, t) {
            return [(0,
            $t.jJ)({
                min: qt.gL,
                style: {
                    width: `${qt.YR}px`
                }
            }), (0,
            $t.jJ)({
                min: qt.n1,
                style: Object.assign({
                    width: `${qt.ox}px`
                }, (0,
                $t.mp)({
                    direction: e.direction,
                    end: "16px"
                }))
            }), (0,
            $t.jJ)({
                min: qt.aU,
                style: Object.assign({
                    width: `${qt.kL}px`
                }, (0,
                $t.mp)({
                    direction: e.direction,
                    end: "16px"
                }))
            }), (0,
            $t.jJ)({
                min: qt.aU,
                minAspectRatio: "16/9",
                style: Object.assign({
                    width: `${qt.RA}px`,
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
                    width: t ? Xn : `${qt.YR}px`
                }
            }), (0,
            $t.Ee)({
                max: qt.v3,
                style: {
                    width: `${qt.hE}px`
                }
            }), (0,
            $t.jJ)({
                max: qt.gL,
                minAspectRatio: "640/320",
                style: {
                    bottom: "56px"
                }
            }), (0,
            $t.jJ)({
                min: qt.aU,
                minAspectRatio: "8/3",
                style: Object.assign({
                    width: `${qt.ox}px`,
                    bottom: "37px"
                }, (0,
                $t.mp)({
                    direction: e.direction,
                    end: "64px"
                }))
            })]
        }
        function ro(e) {
            return [(0,
            $t.jJ)({
                min: qt.gL,
                style: {
                    marginBottom: "24px"
                }
            }), (0,
            $t.jJ)({
                min: qt.gL,
                orientation: "landscape",
                style: {
                    marginBottom: "48px"
                }
            }), (0,
            $t.jJ)({
                min: qt.n1,
                orientation: "landscape",
                style: {
                    marginBottom: "18px"
                }
            }), (0,
            $t.jJ)({
                min: qt.aU,
                orientation: "landscape",
                style: {
                    marginBottom: "138px"
                }
            }), (0,
            $t.jJ)({
                min: qt.aU,
                minAspectRatio: "16/9",
                style: {
                    marginBottom: "7px"
                }
            }), (0,
            $t.jJ)({
                max: qt.gL,
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
                max: qt.SX,
                style: {
                    marginBottom: "0px"
                }
            }), (0,
            $t.Ee)({
                max: qt.Ro - 140,
                style: {
                    marginBottom: "4px"
                }
            }), (0,
            $t.jJ)({
                min: qt.aU,
                minAspectRatio: "8/3",
                style: {
                    marginBottom: "7px"
                }
            })]
        }
        function lo(e) {
            return [(0,
            $t.jJ)({
                min: qt.gL,
                style: {
                    width: `${qt.YR}px`,
                    height: `${qt.YR}px`,
                    marginBottom: "32px"
                }
            }), (0,
            $t.jJ)({
                min: qt.n1,
                style: {
                    width: `${qt.ox}px`,
                    height: `${qt.ox}px`,
                    marginBottom: "32px"
                }
            }), (0,
            $t.jJ)({
                min: qt.aU,
                style: {
                    width: `${qt.kL}px`,
                    height: `${qt.kL}px`,
                    marginBottom: "34px"
                }
            }), (0,
            $t.jJ)({
                min: qt.aU,
                minAspectRatio: "16/9",
                style: {
                    width: `${qt.RA}px`,
                    height: `${qt.RA}px`,
                    marginBottom: "56px"
                }
            }), (0,
            $t.jJ)({
                max: qt.gL,
                minAspectRatio: "640/320",
                style: {
                    marginBottom: "12px"
                }
            }), e ? {} : (0,
            $t.Ee)({
                max: 900,
                style: {
                    width: `${qt.YR}px`,
                    height: `${qt.YR}px`,
                    marginBottom: "32px"
                }
            }), (0,
            $t.Ee)({
                max: qt.v3,
                style: {
                    width: `${qt.hE}px`,
                    height: `${qt.hE}px`
                }
            }), (0,
            $t.jJ)({
                min: qt.aU,
                minAspectRatio: "8/3",
                style: {
                    width: `${qt.ox}px`,
                    height: `${qt.ox}px`,
                    marginBottom: "30px"
                }
            })]
        }
        function so(e=!1) {
            return [(0,
            $t.jJ)({
                min: qt.gL,
                style: {
                    width: `${qt.YR + 7}px`,
                    height: `${qt.YR + 7}px`
                }
            }), (0,
            $t.jJ)({
                min: qt.gL,
                orientation: "landscape",
                style: {
                    width: qt.YR - 9 + "px",
                    height: qt.YR - 9 + "px"
                }
            }), (0,
            $t.jJ)({
                min: qt.n1,
                style: {
                    width: qt.ox - 8 + "px",
                    height: qt.ox - 8 + "px"
                }
            }), (0,
            $t.jJ)({
                min: qt.L7,
                style: {
                    width: qt.kL - 8 + "px",
                    height: qt.kL - 8 + "px"
                }
            }), (0,
            $t.jJ)({
                max: qt.gL,
                minAspectRatio: "640/320",
                style: {
                    width: qt.hE - 8 + "px",
                    height: qt.hE - 8 + "px"
                }
            }), (0,
            $t.Ee)({
                max: 900,
                style: {
                    width: oo(e),
                    height: oo(e)
                }
            })]
        }
        function co(e) {
            return [(0,
            $t.jJ)({
                min: qt.gL,
                style: {
                    marginBottom: "16px"
                }
            }), (0,
            $t.jJ)({
                min: qt.gL,
                orientation: "landscape",
                style: {
                    marginBottom: "8px"
                }
            }), (0,
            $t.jJ)({
                max: qt.gL,
                minAspectRatio: "640/320",
                style: {
                    marginBottom: "0px"
                }
            }), (0,
            $t.jJ)({
                max: qt.aU,
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
                max: qt.Ro - 140,
                style: {
                    marginBottom: "4px"
                }
            })]
        }
        const uo = (0,
        ie.A)("div", {
            target: "e365p2r4"
        })(( ({theme: e, isEngageOptUI: t}) => [{
            maxHeight: "calc(100vh - 150px)",
            position: "absolute",
            zIndex: 6,
            bottom: t ? "8px" : "12px",
            width: `${qt.YR}px`
        }, (0,
        $t.mp)({
            direction: e.direction,
            end: t ? "0px" : "12px"
        }), ...ao(e, t)]), "label:DivRightAreaBox;")
          , po = (0,
        ie.A)("div", {
            target: "e365p2r5"
        })(( ({isEngageOptUI: e}) => [{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: e ? "4px" : "49px"
        }, ...ro(e)]), "label:DivOperaterArea;")
          , ho = (0,
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
            width: `${e ? 44 : qt.YR}px`,
            height: `${e ? 44 : qt.YR}px`,
            marginBottom: e ? "" : "20px",
            border: e ? "1px solid #FFFFFF" : ""
        }, ...lo(e)]), "label:DivAuthor;")
          , mo = (0,
        ie.A)("div", {
            target: "e365p2r7"
        })(( ({isEngageOptUI: e}) => [Object.assign(Object.assign({}, ko(e)), {
            svg: [{
                width: qt.YR - 9 + "px",
                height: qt.YR - 9 + "px"
            }, ...so(e)],
            ">div": [{
                height: qt.YR - 9 + "px"
            }, ...so(), {
                width: e ? "" : "70px !important",
                overflow: "visible"
            }]
        }), ...co(e)]), "label:DivFavor;")
          , go = (0,
        ie.A)("div", {
            target: "e365p2r8"
        })(( ({isEngageOptUI: e}) => [Object.assign(Object.assign({}, ko(e)), {
            svg: [{
                width: qt.YR - 9 + "px",
                height: qt.YR - 9 + "px"
            }, ...so(e)]
        }), ...co(e)]), "label:DivComment;")
          , vo = (0,
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
            min: qt.L7,
            style: {
                marginTop: "4px",
                fontSize: "16px",
                lineHeight: "1.5"
            }
        }), (0,
        $t.jJ)({
            min: qt.aU,
            minAspectRatio: "16/9",
            style: {
                fontSize: "28px",
                lineHeight: "1.57"
            }
        }), (0,
        $t.jJ)({
            min: qt.aU,
            minAspectRatio: "8/3",
            style: {
                fontSize: "24px",
                lineHeight: "1.57"
            }
        })]), "label:SpanText;")
          , yo = (0,
        ie.A)("div", {
            target: "e365p2r13"
        })(( ({isEngageOptUI: e, hideAnimation: t}) => {
            return [...lo(e), {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "0px!important",
                width: `${e ? 40 : qt.YR}px`,
                height: `${e ? 40 : qt.YR}px`
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
            }), _o];
            var i
        }
        ), "label:DivMusic;")
          , xo = (0,
        ie.A)(Zn, {
            target: "e365p2r14"
        })({
            position: "absolute",
            width: "40px",
            height: "40px"
        }, "label:StyledIconAlbum;")
          , fo = (0,
        ie.A)("div", {
            target: "e365p2r15"
        })({
            borderRadius: "50%",
            width: "70%",
            height: "70%",
            zIndex: 99
        }, "label:DivMusicCover;")
          , bo = (0,
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
            background: `url(${Kn}) no-repeat`,
            backgroundSize: "15px auto",
            opacity: ".5",
            transform: "translate3D(-10px, -30px, 0)"
        }, wo, _o]), "label:DivMusicItem;");
        function ko(e) {
            return {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "8px",
                justifyContent: e ? "center" : "",
                width: e ? Xn : "",
                height: e ? "65px" : ""
            }
        }
        function _o({playing: e}) {
            return {
                animationPlayState: e ? "running" : "paused"
            }
        }
        function wo() {
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
        const Co = {
            position: "relative",
            display: "flex",
            fontWeight: "normal"
        }
          , So = (0,
        r.memo)(( ({id: e, shareCommand: t, onFavor: i, pageType: l, isPlaying: s=!1, onLinkClick: d, hideOperator: u}) => {
            var h, m, g, y;
            const f = (0,
            Ii.s)()
              , b = i
              , {item: k, user: _} = (0,
            gt.y)(null != e ? e : "")
              , {user: w, appType: C, abTestVersion: S} = (0,
            c.L$)((0,
            St.W)(( () => ["user", "appType", "abTestVersion"]), []))
              , j = vn._w.getItem("last_click_platform")
              , {platform: T, isFlip: M} = (0,
            o.Ph)(Tt.M, {
                selector: e => {
                    var t, i;
                    return {
                        platform: null !== (i = null === (t = e.platforms) || void 0 === t ? void 0 : t[0]) && void 0 !== i ? i : "copy",
                        isFlip: e.isFlip
                    }
                }
                ,
                dependencies: [k]
            })
              , {isMobileUiOptimize: I} = (0,
            p.Eo)()
              , A = null != j ? j : T
              , P = I ? An.j7[A] : An.a3[A]
              , {isSmartPlayer: E, isTtincar: O} = (0,
            v.Qt)()
              , L = (0,
            p.Ns)() && ![124, 122].includes(l) || O
              , {music: {id: D="", title: B="", authorName: R="", authorFtc: z=!1}={}, id: U="", author: V="", authorId: N="", digged: F, stats: H, statsV2: G, poi: W, subVideoMeta: $, itemMute: q=!1} = (0,
            c.L$)(k)
              , Y = null != G ? G : H
              , {secUid: J=""} = (0,
            c.L$)(_)
              , {shareCount: Q=0, commentCount: Z=0, diggCount: K=0} = (0,
            c.L$)(Y)
              , X = "t" === C
              , ee = (0,
            Ki.nH)()
              , {needCtaClick: te} = (0,
            He.un)(l)
              , {secUid: ie=""} = (0,
            c.L$)(w)
              , ne = J === ie
              , oe = (0,
            r.useMemo)(( () => M ? f("webapp_share_btn") : Q > 0 ? (0,
            c.D1)(Q) : X ? "" : f("webapp_share_btn")), [M, X, Q, f])
              , ae = (0,
            x.MA)(k)
              , re = "video_feed"
              , {handleFollow: le, isFollowing: se} = (0,
            Pn.T)({
                uniqueId: V,
                prevent: !0,
                teaParams: Object.assign({
                    group_id: U,
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
            o.wA)(Mn.k)
              , he = {
                pageType: l,
                uid: e,
                secUid: J,
                avatarUrl: null == _ ? void 0 : _.avatarThumb
            }
              , {showModalOrLater: me} = (0,
            Ft.z)(Object.assign(Object.assign({}, he), {
                enterMethod: "click_follow"
            }))
              , {showModalOrLater: ge} = (0,
            Ft.z)(Object.assign(Object.assign({}, he), {
                enterMethod: "click_comment"
            }))
              , ve = (0,
            r.useCallback)((e => {
                (ee || E) && (e.preventDefault(),
                e.stopPropagation()),
                ee ? le(e) : me()
            }
            ), [ee, le, me, E])
              , ye = (0,
            r.useCallback)(( () => {
                ce(!0)
            }
            ), [])
              , xe = null !== (h = (0,
            yn.qt)(S, "non_logged_in_comments")) && void 0 !== h ? h : "v1"
              , fe = (0,
            r.useCallback)(( () => {
                te ? ge() : ee || "v1" !== xe ? (pe.openCommentPanel({
                    itemId: e
                }),
                _n.ao.handleCommentClick(Object.assign({
                    group_id: U,
                    author_id: N,
                    poi_id: null == W ? void 0 : W.id,
                    is_sub_only_video: $ ? 1 : 0
                }, ae))) : ge()
            }
            ), [ee, xe, pe, e, U, N, null == W ? void 0 : W.id, $, ae, ge, te])
              , be = (0,
            sn.zy)()
              , ke = (0,
            r.useMemo)(( () => {
                if (!_)
                    return {
                        href: "#",
                        userNameText: ""
                    };
                const {uniqueId: e="", verified: t, nickname: i="", isADVirtual: n} = _
                  , o = n ? `@${i}` : `@${e}`
                  , a = {
                    pageType: 1,
                    pageData: {
                        nickname: e,
                        uniqueId: e,
                        verified: t
                    }
                };
                return {
                    href: n ? "#" : (0,
                    xn.F)({
                        to: {
                            pathname: (0,
                            fn.fJR)({
                                uniqueId: e
                            })
                        },
                        location: be
                    }),
                    userNameText: o,
                    userLinkTitle: (0,
                    Sn.ry)(a, f)
                }
            }
            ), [_, be, f])
              , {CtaWrapperComponent: _e, triggerClick: we} = (0,
            Ge.Z)({
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
                if ((null == _ ? void 0 : _.ftc) || (null == _ ? void 0 : _.isADVirtual))
                    e.preventDefault();
                else {
                    if (te)
                        return wn.O.handleTap({
                            target: "function_button",
                            enter_method: "click_toolbar_avatar"
                        }),
                        e.preventDefault(),
                        void we();
                    null == d || d(),
                    Cn.q.handleEnterUser({
                        to_user_id: N,
                        author_id: N,
                        group_id: U,
                        type: Si.M[l],
                        enter_method: "click_toolbar_avatar"
                    })
                }
            }
            ), [null == _ ? void 0 : _.ftc, null == _ ? void 0 : _.isADVirtual, N, U, d, l, te, we])
              , Se = (0,
            xn.F)({
                to: {
                    pathname: (0,
                    fn.pHc)({
                        musicName: B,
                        musicId: D
                    })
                },
                location: be
            })
              , je = {
                pageType: 4,
                pageData: {
                    authorName: R,
                    musicName: B
                }
            }
              , Te = (0,
            Sn.ry)(je, f)
              , Me = z || !D || q
              , {CtaWrapperComponent: Ie, triggerClick: Ae} = (0,
            Ge.Z)({
                downloadType: "click_music_disc",
                pageType: 4,
                target: "wrapper_music",
                extraLogParams: {
                    enter_method: "click_music_disc",
                    target: "function_button"
                },
                music_id: D
            })
              , Pe = (0,
            r.useCallback)((e => {
                if (te)
                    return wn.O.handleTap({
                        target: "function_button",
                        enter_method: "click_music_disc"
                    }),
                    e.preventDefault(),
                    void Ae();
                Cn.q.handleEnterMusicDetail({
                    music_id: D,
                    author_id: N,
                    group_id: U,
                    type: Si.M[l],
                    enter_method: "click_music_disc"
                }),
                null == d || d()
            }
            ), [N, U, d, D, l, te, Ae])
              , {CtaWrapperComponent: Ee, triggerClick: Oe} = (0,
            Ge.Z)({
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
            yt.dj)()
              , De = (0,
            r.useCallback)(( () => {
                if (te)
                    return wn.O.handleTap({
                        target: "function_button",
                        enter_method: "click_toolbar_share"
                    }),
                    void Oe();
                t.handleOpenShareSheet(),
                ue.handleSharePanelShow(Object.assign(Object.assign(Object.assign({
                    scene: re,
                    group_id: U,
                    author_id: N,
                    type: Si.M[0]
                }, Le), {
                    poi_id: null == W ? void 0 : W.id,
                    is_sub_only_video: $ ? 1 : 0
                }), ae)),
                ue.handleClickShare(Object.assign({
                    group_id: U,
                    author_id: N,
                    type: Si.M[0],
                    is_sub_only_video: $ ? 1 : 0
                }, ae))
            }
            ), [t, ue, U, N, Le, null == W ? void 0 : W.id, $, ae])
              , {followBtnStyle: Be} = ( () => {
                const {width: e, height: t} = (0,
                We.l)()
                  , {avatarSize: i, iconSize: n, marginSize: o, fontSize: a, lineHeight: l} = Tn(e, t)
                  , {footerIconPadding: s, footerHeight: d, footerIconSize: c} = Tn(e, t)
                  , u = i / 2
                  , p = (0,
                r.useMemo)(( () => ({
                    width: `${i}px`,
                    bottom: `${o}px`
                })), [i, o])
                  , h = (0,
                r.useMemo)(( () => ({
                    width: `${i}px`,
                    height: `${i}px`,
                    marginBottom: `${i / 4 + o}px`
                })), [i, o])
                  , m = (0,
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
                    marginTop: o / 2 + "px"
                })), [a, l, o])
                  , y = (0,
                r.useMemo)(( () => ({
                    width: `${c}px`,
                    height: `${c}px`
                })), [c]);
                return {
                    containerStyle: p,
                    avatarStyle: h,
                    followBtnStyle: m,
                    albumStyle: g,
                    avatarSize: i,
                    followBtnSize: u,
                    iconSize: n,
                    marginSize: o,
                    textStyle: v,
                    footerIconPadding: s,
                    footerHeight: d,
                    footerIconSize: c,
                    footerIconStyle: y
                }
            }
            )()
              , {avatarTag: Re, followBtnTag: ze, favorTag: Ue, favorNumTag: Ve, commentTag: Ne, commentNumTag: Fe, shareTag: $e, shareNumTag: qe, discTag: Ye} = function(e) {
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
              , Je = I ? no : bn.Cz
              , Qe = (0,
            jn.H)(ho)
              , Ze = (0,
            jn.H)(mo)
              , Ke = (0,
            jn.H)(go)
              , Xe = (0,
            jn.H)(go)
              , et = (0,
            jn.H)(Je)
              , tt = (0,
            r.useMemo)(( () => ({
                is_flickering: M ? 1 : 0,
                flickering_icon: M ? A : void 0,
                scene: re
            })), [A, M])
              , it = {
                target: "wrapper_video_insert",
                video_id: U,
                shouldSkipReportConfirm: !0,
                shouldUseSmart: !ee && !E
            }
              , nt = {
                target: "wrapper_video_insert",
                video_id: U,
                shouldSkipReportConfirm: !0,
                shouldUseSmart: !E
            }
              , ot = e => te ? Object.assign(Object.assign({}, nt), {
                extraLogParams: {
                    enter_method: "comment" === e ? "click_comment" : "click_like",
                    target: "function_button"
                }
            }) : it
              , at = (0,
            r.useCallback)(( () => E ? (0,
            n.jsx)(hn.A, {}) : M && P ? I ? (0,
            n.jsx)(eo, {
                children: (0,
                n.jsx)(P, {})
            }) : (0,
            n.jsx)(P, {}) : I ? (0,
            n.jsx)(dn.g, {}) : (0,
            n.jsx)(mn.A, {})), [P, I, M, E])
              , rt = () => de || ne ? null : (0,
            n.jsx)(In.s, Object.assign(Object.assign({
                onClick: kn.Gu,
                downloadType: "click_follow"
            }, it), {
                children: (0,
                n.jsx)(Nn, {
                    style: Be,
                    onFollow: ve,
                    onComplete: ye,
                    followed: se,
                    e2eTag: ze,
                    isEngageOptUI: I,
                    iconSize: I ? 23 : void 0
                })
            }))
              , lt = I ? io : bn.Cz
              , st = (0,
            r.useCallback)(( () => I ? F ? (0,
            n.jsx)(cn.g, {}) : (0,
            n.jsx)(un.h, {}) : (0,
            n.jsx)(qn, {
                likeState: F ? "liked" : "unlike"
            })), [F, I])
              , dt = {
                isEngageOptUI: I
            };
            return (0,
            n.jsxs)(uo, {
                isEngageOptUI: I,
                children: [te && (0,
                n.jsxs)(n.Fragment, {
                    children: [_e, Ee, Ie]
                }), !u && (0,
                n.jsxs)(po, {
                    isEngageOptUI: I,
                    children: [(0,
                    n.jsxs)(lt, {
                        to: ke.href,
                        title: ke.userLinkTitle,
                        onClick: Ce,
                        children: [(0,
                        n.jsx)(Qe, Object.assign(Object.assign({
                            section: "user",
                            style: {
                                backgroundImage: `url(${null !== (m = null == _ ? void 0 : _.avatarThumb) && void 0 !== m ? m : ""})`
                            },
                            "data-e2e": Re,
                            reportParams: tt
                        }, dt), {
                            children: !I && rt()
                        })), I && rt()]
                    }, ke.userNameText), (0,
                    n.jsx)(In.s, Object.assign(Object.assign({
                        downloadType: "click_like"
                    }, ot("like")), {
                        children: (0,
                        n.jsxs)(Ze, Object.assign(Object.assign({
                            onClick: b,
                            section: "like",
                            "data-e2e": Ue,
                            reportParams: tt
                        }, dt), {
                            children: [st(), (0,
                            n.jsx)(vo, Object.assign(Object.assign({
                                "data-e2e": Ve
                            }, dt), {
                                children: (0,
                                c.D1)(K)
                            }))]
                        }))
                    })), "v1" === xe || [124, 122].includes(l) ? (0,
                    n.jsx)(In.s, Object.assign(Object.assign({
                        downloadType: "comment"
                    }, ot("comment")), {
                        children: (0,
                        n.jsxs)(Ke, Object.assign(Object.assign({
                            onClick: fe,
                            section: "comments",
                            "data-e2e": Ne,
                            reportParams: tt,
                            hasMarginTop: !1
                        }, dt), {
                            children: [I ? (0,
                            n.jsx)(pn.h, {}) : (0,
                            n.jsx)(gn.A, {}), (0,
                            n.jsx)(vo, Object.assign(Object.assign({
                                "data-e2e": Fe
                            }, dt), {
                                children: (0,
                                c.D1)(Z)
                            }))]
                        }))
                    })) : (0,
                    n.jsxs)(Ke, Object.assign(Object.assign({
                        onClick: fe,
                        section: "comments",
                        "data-e2e": Ne,
                        reportParams: tt,
                        hasMarginTop: !1
                    }, dt), {
                        children: [I ? (0,
                        n.jsx)(pn.h, {}) : (0,
                        n.jsx)(gn.A, {}), (0,
                        n.jsx)(vo, Object.assign(Object.assign({
                            "data-e2e": Fe
                        }, dt), {
                            children: (0,
                            c.D1)(Z)
                        }))]
                    })), (0,
                    n.jsxs)(Xe, Object.assign(Object.assign({
                        reportParams: tt,
                        section: "share_video",
                        onClick: De,
                        "data-e2e": $e
                    }, dt), {
                        children: [at(), (0,
                        n.jsx)(vo, Object.assign(Object.assign({
                            "data-e2e": qe
                        }, dt), {
                            children: oe
                        }))]
                    }))]
                }), !Me && (0,
                n.jsxs)(et, {
                    section: "music",
                    to: Se,
                    title: Te,
                    onClick: Pe,
                    style: Co,
                    children: [!I && !L && (0,
                    n.jsx)(bo, {
                        playing: s
                    }), (0,
                    n.jsxs)(yo, {
                        playing: s,
                        "data-e2e": Ye,
                        isEngageOptUI: I,
                        hideAnimation: L,
                        children: [(0,
                        n.jsx)(xo, {}), (0,
                        n.jsx)(fo, {
                            style: (null === (g = null == k ? void 0 : k.music) || void 0 === g ? void 0 : g.coverThumb) ? {
                                backgroundImage: `url(${null === (y = null == k ? void 0 : k.music) || void 0 === y ? void 0 : y.coverThumb})`,
                                backgroundSize: "cover"
                            } : {}
                        })]
                    })]
                }, Te)]
            })
        }
        ));
        var jo = i(72608)
          , To = i(35810)
          , Mo = i(56268);
        const Io = {
            0: "4px",
            2: "8px",
            4: "12px"
        }
          , Ao = {
            0: "0px",
            2: "-2px",
            4: "-6px"
        }
          , Po = {
            0: "2px",
            2: "8px",
            4: "8px"
        }
          , Eo = (0,
        ie.A)("div", {
            target: "e1sksq2r5"
        })(( ({isTag: e, isInTooltip: t, shouldOptProfile: i, playMode: n=0, theme: {colors: o}}) => [{
            height: "24px",
            marginTop: Io[n],
            marginBottom: Ao[n],
            minWidth: 0
        }, i && [{
            height: "22px",
            padding: "1px 6px 1px 4px",
            background: t ? "" : o.BGView,
            display: "inline-flex",
            borderRadius: "4px",
            alignItems: "center",
            color: o.TextPrimary,
            marginTop: Po[n]
        }, t && {
            marginTop: 0,
            marginBottom: 0
        }, e && {
            color: o.TextTertiaryAlt
        }]]), "label:DivAnchorTag;")
          , Oo = (0,
        ie.A)("p", {
            target: "ejymp3n0"
        })(( ({theme: e, theme: {colors: t}, isMobile: i, isMiniPlayer: n}) => i ? [(0,
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
        }] : n ? [(0,
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
          , Lo = (0,
        r.memo)((function({item: e, style: t, target: i="_self", isSharing: o=!1, playMode: a, isMiniPlayer: l=!1}) {
            var s, d, c;
            const p = (0,
            Ii.s)()
              , {region: h=""} = null !== (s = (0,
            St.W)(( () => ["region"]), [])) && void 0 !== s ? s : {}
              , {id: g, authorId: v, BAInfo: y, adLabelVersion: x, brandOrganicType: f=0, isECVideo: b} = e
              , k = y && !o
              , _ = 2 === x
              , w = Number(f) > 0
              , {isMobile: C} = null !== (d = (0,
            u.U)(( () => ["isMobile"]), [])) && void 0 !== d ? d : {}
              , S = (0,
            r.useCallback)(( () => {
                var e;
                e = {
                    group_id: null != g ? g : "",
                    author_id: null != v ? v : "",
                    partnership_tag: null != y ? y : ""
                },
                m.f.sendEvent("click_partnership_tag", e),
                Cn.q.handleEnterUser({
                    to_user_name: null != y ? y : "",
                    enter_method: "click_partnership_tag"
                })
            }
            ), [g, v, y])
              , j = !C && !l
              , T = (0,
            Mo.useLocation)()
              , M = (0,
            xn.F)({
                to: {
                    pathname: (0,
                    fn.fJR)({
                        uniqueId: null !== (c = null == e ? void 0 : e.BAInfo) && void 0 !== c ? c : ""
                    })
                },
                location: T
            })
              , I = (0,
            r.useMemo)(( () => {
                if (_ && b) {
                    if ("US" === h)
                        return "bc_disclosure_tag_ecommerce_us";
                    if ("GB" === h)
                        return "bc_disclosure_tag_ecommerce_uk"
                }
                return _ ? "bc_new_disclosure" : "tcm_closedLoop_commercialContent_brandOrganic_videoTag"
            }
            ), [_, b, h])
              , A = (0,
            r.useCallback)((e => j ? (0,
            n.jsx)(Eo, {
                shouldOptProfile: j,
                playMode: a,
                isTag: !0,
                children: e
            }) : (0,
            n.jsx)(Oo, {
                isMobile: C,
                isMiniPlayer: l,
                style: t,
                children: e
            })), [C, l, a, j, t]);
            if (_ && b && "US" !== h && "GB" !== h)
                return null;
            if (_ && k) {
                const e = `${p(I)} @${y}`;
                return (0,
                n.jsx)(bn.Cz, {
                    target: i,
                    rel: "opener",
                    to: M,
                    onClick: S,
                    style: {
                        textDecoration: "none",
                        color: "inherit"
                    },
                    children: A(e)
                })
            }
            return _ && !k || w ? A(p(I)) : null
        }
        ));
        var Do, Bo;
        !function(e) {
            e.None = "0",
            e.Manual = "1",
            e.Auto = "2"
        }(Do || (Do = {})),
        function(e) {
            e.WebFyp = "web_fyp",
            e.BrowserMode = "browser",
            e.VideoDetail = "video_detail",
            e.WebMobileFyp = "web_mobile_fyp",
            e.MiniPlayer = "mini_player"
        }(Bo || (Bo = {}));
        var Ro = i(33805);
        const zo = (0,
        ie.A)("a", {
            target: "evbdqjo0"
        })({
            textWrap: "nowrap",
            textDecoration: "none",
            ":hover": {
                textDecoration: "none"
            }
        }, "label:AigcLink;")
          , Uo = (0,
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
          , Vo = (0,
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
          , No = 0
          , Fo = 1
          , Ho = 2
          , Go = {
            [Fo]: {
                teaLabelType: "1",
                i18nKey: "syntheticMedia_feed_bottomBanner_AIGCLabel"
            },
            [Ho]: {
                teaLabelType: "2",
                i18nKey: "AIGC_FYP_descSection_label"
            },
            [No]: {
                teaLabelType: "0",
                i18nKey: ""
            }
        }
          , Wo = (0,
        r.memo)((function({item: e, playMode: t, isMiniPlayer: i=!1}) {
            var o, a, l;
            const s = (0,
            Ii.s)()
              , d = Number(null !== (o = e.aigcLabelType) && void 0 !== o ? o : 0)
              , c = Go[d].i18nKey
              , h = Go[d].teaLabelType
              , g = (0,
            p.q)()
              , v = 0 !== d && g
              , {language: y="", region: x=""} = null !== (a = (0,
            St.W)(( () => ["language", "region"]), [])) && void 0 !== a ? a : {}
              , {isMobile: f} = null !== (l = (0,
            u.U)(( () => ["isMobile"]), [])) && void 0 !== l ? l : {}
              , b = (0,
            r.useMemo)(( () => f ? "web_mobile_fyp" : i ? "mini_player" : 2 === t ? "browser" : 4 === t ? "video_detail" : "web_fyp"), [t, f])
              , k = (0,
            r.useMemo)(( () => ({
                aigc_label_type: h,
                enter_from: b,
                country_code: x
            })), [b, h, x])
              , _ = (0,
            Ro.sN)(b, y)
              , w = (0,
            r.useCallback)(( () => {
                var e;
                e = k,
                m.f.sendEvent("click_creator_label_aigc", e)
            }
            ), [k])
              , C = (0,
            r.useCallback)((e => f ? (0,
            n.jsx)(Uo, {
                children: e
            }) : i ? (0,
            n.jsxs)(Vo, {
                children: [" ", e]
            }) : (0,
            n.jsx)(Eo, {
                shouldOptProfile: !0,
                playMode: t,
                isTag: !0,
                children: e
            })), [f, i, t]);
            return (0,
            r.useEffect)(( () => {
                var e;
                v && (e = k,
                m.f.sendEvent("view_creator_label_aigc", e))
            }
            ), [v, k]),
            v ? (0,
            n.jsx)(zo, {
                target: "_blank",
                href: _,
                onClick: w,
                children: C(s(c))
            }) : null
        }
        ));
        var $o = i(50289)
          , qo = i(66283)
          , Yo = i(77732);
        const Jo = {
            white: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDM2IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA4TDYuNjg2MjkgOEM4LjgwODAyIDggMTAuODQyOSA3LjE1NzE0IDEyLjM0MzEgNS42NTY4NUwxNy4yOTI5IDAuNzA3MTA2QzE3LjY4MzQgMC4zMTY1ODIgMTguMzE2NiAwLjMxNjU4MiAxOC43MDcxIDAuNzA3MTA3TDIzLjY1NjkgNS42NTY4NkMyNS4xNTcxIDcuMTU3MTUgMjcuMTkyIDggMjkuMzEzNyA4TDM2IDhMMCA4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+",
            black: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDM2IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDhoNi42ODZhOCA4IDAgMCAwIDUuNjU3LTIuMzQzbDQuOTUtNC45NWExIDEgMCAwIDEgMS40MTQgMGw0Ljk1IDQuOTVBOCA4IDAgMCAwIDI5LjMxNCA4SDM2IDB6IiBmaWxsPSIjNTQ1NDU0IiBmaWxsLW9wYWNpdHk9Ii45MiIvPjwvc3ZnPg==",
            blue: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDM2IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDhoNi42ODZhOCA4IDAgMCAwIDUuNjU3LTIuMzQzbDQuOTUtNC45NWExIDEgMCAwIDEgMS40MTQgMGw0Ljk1IDQuOTVBOCA4IDAgMCAwIDI5LjMxNCA4SDM2IDB6IiBmaWxsPSIjMTBBMkM1Ii8+PC9zdmc+",
            border: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAQCAYAAAC1MDndAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADOSURBVHgB7deLDYIwGATgvxswQkdgAxnBERyBETpKncARcAPdoCPIBuc11pgYNaBF2sKXXICEAL1QHkq+AKDiQodsmU1YT0nP7Jkzc/TbSqle5sLSGsZifh3TSKp4cZo54P+6pIt5xottmQum58/RSo5wu5scpuP8OSRnHEDFnBCfP2YlpUDcB7iVEkUqyUqp8Pt0K2tavRJKchjPFV/OHca/3fy+WpaEA64x/DupliXiwHcDysnzIzAWFmA+lGNk9bYkI6uHMN0cEvu3ugKLPi0ttJ0IVQAAAABJRU5ErkJggg=="
        }
          , Qo = {
            white: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDM2IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA4TDYuNjg2MjkgOEM4LjgwODAyIDggMTAuODQyOSA3LjE1NzE0IDEyLjM0MzEgNS42NTY4NUwxNy4yOTI5IDAuNzA3MTA2QzE3LjY4MzQgMC4zMTY1ODIgMTguMzE2NiAwLjMxNjU4MiAxOC43MDcxIDAuNzA3MTA3TDIzLjY1NjkgNS42NTY4NkMyNS4xNTcxIDcuMTU3MTUgMjcuMTkyIDggMjkuMzEzNyA4TDM2IDhMMCA4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+",
            black: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDM2IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA4TDYuNjg2MjkgOEM4LjgwODAyIDggMTAuODQyOSA3LjE1NzE0IDEyLjM0MzEgNS42NTY4NUwxNy4yOTI5IDAuNzA3MTA2QzE3LjY4MzQgMC4zMTY1ODIgMTguMzE2NiAwLjMxNjU4MiAxOC43MDcxIDAuNzA3MTA3TDIzLjY1NjkgNS42NTY4NkMyNS4xNTcxIDcuMTU3MTUgMjcuMTkyIDggMjkuMzEzNyA4TDM2IDhMMCA4WiIgZmlsbD0iIzI1MjUyNSIvPgo8L3N2Zz4K",
            blue: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDM2IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDhoNi42ODZhOCA4IDAgMCAwIDUuNjU3LTIuMzQzbDQuOTUtNC45NWExIDEgMCAwIDEgMS40MTQgMGw0Ljk1IDQuOTVBOCA4IDAgMCAwIDI5LjMxNCA4SDM2IDB6IiBmaWxsPSIjMTBBMkM1Ii8+PC9zdmc+",
            border: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAQCAYAAAC1MDndAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADOSURBVHgB7deLDYIwGATgvxswQkdgAxnBERyBETpKncARcAPdoCPIBuc11pgYNaBF2sKXXICEAL1QHkq+AKDiQodsmU1YT0nP7Jkzc/TbSqle5sLSGsZifh3TSKp4cZo54P+6pIt5xottmQum58/RSo5wu5scpuP8OSRnHEDFnBCfP2YlpUDcB7iVEkUqyUqp8Pt0K2tavRJKchjPFV/OHca/3fy+WpaEA64x/DupliXiwHcDysnzIzAWFmA+lGNk9bYkI6uHMN0cEvu3ugKLPi0ttJ0IVQAAAABJRU5ErkJggg=="
        }
          , Zo = "rotate(180deg)"
          , Ko = "rotate(90deg)"
          , Xo = "rotate(-90deg)"
          , ea = {
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
                transform: Ko,
                right: "-22px",
                top: "50%",
                marginTop: "-5px"
            },
            leftBottom: {
                transform: Ko,
                right: "-22px",
                bottom: "25%",
                marginTop: "5px"
            },
            leftTop: {
                transform: Ko,
                right: "-22px",
                top: "25%"
            },
            right: {
                transform: Xo,
                left: "-22px",
                top: "50%",
                marginTop: "-5px"
            },
            rightBottom: {
                transform: Xo,
                left: "-22px",
                bottom: "25%",
                marginTop: "5px"
            },
            rightTop: {
                transform: Xo,
                left: "-22px",
                top: "25%"
            },
            top: {
                transform: Zo,
                bottom: "-8px",
                left: "50%",
                marginLeft: "-18px"
            },
            topLeft: {
                transform: Zo,
                bottom: "-8px",
                left: "25%",
                marginLeft: "-18px"
            },
            topRight: {
                transform: Zo,
                bottom: "-8px",
                right: "25%",
                marginRight: "-18px"
            }
        };
        function ta({tooltipTheme: e, themeCtx: {colors: t, isDark: i}}) {
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
        const ia = ({themeCtx: e, themeCtx: {fontFamilies: t}, tooltipTheme: i="black", withPadding: n=!0, arrow: o=!0, rtl: a=!1, placement: r="top", arrowStyle: l={}}) => (0,
        qo.AH)({
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
            const {fontWeights: n, typography: o} = e;
            return {
                "&-inner": (0,
                qo.AH)({
                    textAlign: "left",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontWeight: n.semiBold
                }, o.P2, ta({
                    themeCtx: e,
                    tooltipTheme: t
                }), i && {
                    padding: "8px"
                })
            }
        }({
            themeCtx: e,
            tooltipTheme: i,
            withPadding: n
        }), function({arrow: e, tooltipTheme: t, placement: i, themeCtx: n, arrowStyle: o}) {
            return {
                "&-arrow": (0,
                qo.AH)({
                    display: e ? "block" : "none",
                    position: "absolute",
                    width: "36px",
                    height: "8px",
                    backgroundImage: n.isDark ? `url(${Qo[t]})` : `url(${Jo[t]})`
                }, ea[i], o)
            }
        }({
            themeCtx: e,
            tooltipTheme: i,
            placement: r,
            arrow: o,
            arrowStyle: l
        }), a && {
            direction: "rtl",
            "& *": {
                direction: "rtl"
            }
        })
          , na = e => {
            var {className: t, themeCtx: i, tooltipTheme: o, withPadding: a, rtl: r, arrow: l, prefixCls: s, placement: d, arrowStyle: c} = e
              , u = (0,
            k.Tt)(e, ["className", "themeCtx", "tooltipTheme", "withPadding", "rtl", "arrow", "prefixCls", "placement", "arrowStyle"]);
            return (0,
            n.jsx)(Yo.A, Object.assign({
                prefixCls: (0,
                qo.cx)(t, ia({
                    themeCtx: i,
                    tooltipTheme: o,
                    withPadding: a,
                    rtl: r,
                    arrow: l,
                    placement: d,
                    arrowStyle: c
                })),
                placement: d
            }, u))
        }
          , oa = (0,
        r.memo)((function(e) {
            var {children: t, fullscreenAdjust: i=!1, placement: o="top", align: a={}, overlay: l} = e
              , s = (0,
            k.Tt)(e, ["children", "fullscreenAdjust", "placement", "align", "overlay"]);
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
            ), [t, e]))(o, a)
              , u = Object.keys(s).reduce(( (e, t) => (void 0 !== s[t] && (e[t] = s[t]),
            e)), {});
            return i ? (0,
            n.jsx)(na, Object.assign({}, u, {
                getTooltipContainer: "undefined" == typeof document ? void 0 : () => {
                    var e, t, i, n;
                    return null !== (n = null !== (i = null !== (t = null !== (e = document.fullscreenElement) && void 0 !== e ? e : null === document || void 0 === document ? void 0 : document.webkitCurrentFullScreenElement) && void 0 !== t ? t : null === document || void 0 === document ? void 0 : document.mozFullScreenElement) && void 0 !== i ? i : null === document || void 0 === document ? void 0 : document.msFullscreenElement) && void 0 !== n ? n : document.body
                }
                ,
                destroyTooltipOnHide: {
                    keepParent: !1
                },
                themeCtx: d,
                placement: o,
                align: c,
                overlay: l
            }, {
                children: t
            })) : (0,
            n.jsx)(na, Object.assign({}, u, {
                themeCtx: d,
                placement: o,
                align: c,
                overlay: l
            }, {
                children: t
            }))
        }
        ));
        var aa = i(96110);
        const ra = (0,
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
          , la = (0,
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
          , sa = (0,
        r.memo)((function({item: e}) {
            const t = (0,
            Ii.s)()
              , {isSmartPlayer: i=!1} = (0,
            v.Qt)();
            return !(null == e ? void 0 : e.subVideoMeta) || i ? null : (0,
            n.jsxs)(ra, {
                children: [(0,
                n.jsx)(aa.P, {}), (0,
                n.jsx)(la, {
                    children: t("subVideo_viewing_lable")
                })]
            })
        }
        ));
        var da = i(87478)
          , ca = i(71084)
          , ua = i(42125)
          , pa = i(50383)
          , ha = i(877)
          , ma = i(26858)
          , ga = i(35626)
          , va = i.n(ga);
        const ya = "object" == typeof HTMLElement ? function(e) {
            return e instanceof HTMLElement
        }
        : function(e) {
            return e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName
        }
          , xa = []
          , fa = [];
        let ba;
        function ka(e, t) {
            var i;
            let n;
            const {defaultView: o} = e.ownerDocument;
            let a = t;
            return (null == o ? void 0 : o.getComputedStyle) ? (a = t.replace(/([A-Z])/g, "-$1").toLowerCase(),
            o.getComputedStyle(e, null).getPropertyValue(a)) : e.currentStyle ? (a = t.replace(/-(\w)/g, (function(e, t) {
                return t.toUpperCase()
            }
            )),
            n = null === (i = e.currentStyle) || void 0 === i ? void 0 : i[a],
            n) : ""
        }
        const _a = function(e, t) {
            if (ya(e))
                if ("undefined" != typeof ResizeObserver) {
                    const i = new ResizeObserver(t);
                    i.observe(e),
                    fa.push({
                        el: e,
                        observer: i
                    })
                } else {
                    const i = {
                        el: e,
                        callback: t,
                        style: {
                            width: ka(e, "width"),
                            height: ka(e, "height")
                        }
                    };
                    xa.push(i),
                    ba || (ba && clearInterval(ba),
                    ba = setInterval((function() {
                        var e;
                        for (const t of xa) {
                            const i = t.el
                              , n = {
                                width: ka(i, "width"),
                                height: ka(i, "height")
                            };
                            va()(n, t.style) || (t.style = {
                                width: n.width,
                                height: n.height
                            },
                            null === (e = t.callback) || void 0 === e || e.call(t))
                        }
                    }
                    ), 200))
                }
        }
          , wa = function(e, t) {
            if ("undefined" == typeof ResizeObserver) {
                for (let i = 0; i < xa.length; i++)
                    if (xa[i].el === e && xa[i].callback === t) {
                        xa.splice(i, 1);
                        break
                    }
                0 === xa.length && (ba && clearInterval(ba),
                ba = null)
            } else
                for (let t = 0; t < fa.length; t++)
                    if (fa[t].el === e) {
                        fa[t].observer.unobserve(e),
                        fa[t].observer.disconnect(),
                        fa.splice(t, 1);
                        break
                    }
        }
          , Ca = (0,
        ie.A)("div", {
            target: "e1mzilcj0"
        })(( ({paddingBottom: e}) => ({
            display: "flex",
            width: "100%",
            overflow: "hidden",
            position: "relative",
            paddingBottom: e
        })), "label:DivWrapper;")
          , Sa = (0,
        ie.A)("div", {
            target: "e1mzilcj1"
        })(( ({shouldShow3Dot: e, shouldDesOnlyShow2Lines: t, isUnfold: i, lineClamp: n, lineHeight: o, marginTop: a, theme: {colors: r}}) => [{
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: e ? "-webkit-box" : "box",
            WebkitLineClamp: n,
            WebkitBoxOrient: "vertical",
            span: {
                display: "inline"
            },
            "*": {
                fill: r.Primary2
            },
            ":before": {
                content: '""',
                height: `calc(100% - ${o}px)`,
                float: "right",
                width: 0,
                marginTop: `${a}px`
            }
        }, !i && t && {
            br: {
                display: "none"
            }
        }]), "label:DivText;")
          , ja = (0,
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
          , Ta = (0,
        ie.A)(ja, {
            target: "e1mzilcj3"
        })(( ({bottomBtnLeftOffset: e, isRightSide: t, theme: {direction: i}, shouldAdjustLeftBtn: n}) => [(0,
        $t.mp)({
            direction: i,
            end: t ? e : "",
            start: t ? "" : e
        }), {
            position: "absolute",
            bottom: n ? 16 : 0
        }]), "label:StyledButtonBottom;")
          , Ma = (0,
        ie.A)("div", {
            target: "e1mzilcj4"
        })(( ({moreBtnBottom: e, isMobileUiOptimize: t, btnShow: i, lineHeight: n, theme: {direction: o}}) => [{
            float: "rtl" === o ? "left" : "right",
            clear: "both",
            cursor: "pointer",
            display: i ? "flex" : "none",
            alignItems: "center",
            lineHeight: `${n}px`
        }, t && {
            position: "relative",
            bottom: e
        }]), "label:DivBtnWrapper;")
          , Ia = (0,
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
          , Aa = (0,
        r.memo)(( ({children: e, lineClamp: t=2, overflowLineNum: i=0, onlyKey: o="", maxLine: a=999, btnOnClick: l, lineHeight: s=21, fontSize: d, showExpandButton: c=!0, btnStyle: u, expandBtnText: h, isMobile: m=!1, forceRightSide: g=!1, isCtaClick: v=!1, ctaTrigger: y}) => {
            const x = (0,
            Ii.s)()
              , [f,k] = (0,
            r.useState)(!1)
              , [_,w] = (0,
            r.useState)(!1)
              , [C,S] = (0,
            r.useState)(!1)
              , [j,T] = (0,
            r.useState)(t)
              , [M,I] = (0,
            r.useState)("unset")
              , [A,P] = (0,
            r.useState)(!1)
              , {isMobileUiOptimize: E} = (0,
            p.Eo)()
              , O = (0,
            r.useRef)(null)
              , L = (0,
            r.useRef)(null)
              , D = (0,
            r.useCallback)(( () => {
                setTimeout(( () => {
                    var e, i, n, o, a, r, l;
                    if (null == O ? void 0 : O.current)
                        if (_)
                            I("unset"),
                            (null !== (a = null === (o = L.current) || void 0 === o ? void 0 : o.scrollHeight) && void 0 !== a ? a : 0) > (null !== (l = null === (r = L.current) || void 0 === r ? void 0 : r.clientHeight) && void 0 !== l ? l : 0) && P(!0);
                        else {
                            const o = null !== (e = O.current.scrollHeight) && void 0 !== e ? e : 0
                              , a = null !== (i = O.current.clientHeight) && void 0 !== i ? i : 0
                              , r = null !== (n = O.current.offsetHeight) && void 0 !== n ? n : 0;
                            P(!1);
                            const l = o - a > 15 || o >= s * t + 15 || r >= s * t + 15;
                            k(l),
                            l && I(t * s + 2 + "px")
                        }
                }
                ), 0)
            }
            ), [_, s, t])
              , B = (0,
            r.useCallback)((e => {
                v && y && (e.stopPropagation(),
                e.preventDefault(),
                y())
            }
            ), [v, y])
              , R = (0,
            r.useCallback)((e => {
                (0,
                kn.Gu)(e),
                T((e => e === t ? a : t)),
                v || w((e => !e)),
                l && l(_)
            }
            ), [l, _, t, a, v])
              , z = (0,
            r.useMemo)(( () => d ? (s - d) / 2 : 0), [d, s]);
            (0,
            r.useEffect)(( () => (O.current && _a(O.current, D),
            () => {
                O.current && wa(O.current, D)
            }
            )), [D]);
            const U = x(_ ? "pc_web_less_btn" : "pc_web_more_btn");
            (0,
            r.useEffect)(( () => {
                w(!1),
                T(t),
                k(!1),
                D()
            }
            ), [o]),
            (0,
            r.useEffect)(( () => {
                (0,
                kn.nr)() || S(!0)
            }
            ), []);
            let V = s * i + "px";
            E && (V = "42vh");
            const N = null != h ? h : U
              , F = {
                shouldShow3Dot: !m && C
            };
            let H = m ? "26px" : "55px";
            _ || (H = "unset");
            const G = m ? "0" : "-4px";
            let W = "3px";
            return m || (W = F.shouldShow3Dot ? "1px" : "6px"),
            (0,
            n.jsxs)(Ca, {
                paddingBottom: H,
                children: [(0,
                n.jsxs)(Sa, Object.assign({
                    isUnfold: _,
                    ref: O,
                    lineClamp: j,
                    lineHeight: s,
                    marginTop: z,
                    style: {
                        maxHeight: M
                    }
                }, F, {
                    shouldDesOnlyShow2Lines: !m,
                    children: [(0,
                    n.jsx)(Ma, {
                        btnShow: f,
                        lineHeight: s,
                        isMobileUiOptimize: E,
                        moreBtnBottom: W,
                        children: c && !_ && (0,
                        n.jsx)(ja, {
                            style: u,
                            type: "button",
                            onClick: R,
                            children: N
                        })
                    }), i > 0 ? (0,
                    n.jsx)(Ia, {
                        lineClamp: t,
                        ref: L,
                        isUnfold: _,
                        maxHeight: V,
                        isMobileUiOptimize: E,
                        className: _ && E && A ? b.dj : "",
                        onClick: B,
                        children: e
                    }) : e]
                })), _ && (0,
                n.jsx)(Ta, {
                    style: u,
                    type: "button",
                    onClick: R,
                    isRightSide: m && E || g,
                    shouldAdjustLeftBtn: !m,
                    bottomBtnLeftOffset: G,
                    children: N
                })]
            })
        }
        ));
        var Pa, Ea = i(98014), Oa = i(45347), La = i(11983), Da = i(7880);
        !function(e) {
            e[e.User = 0] = "User",
            e[e.Challenge = 1] = "Challenge"
        }(Pa || (Pa = {}));
        const Ba = (e, t) => (0,
        n.jsx)(ua.qr, {
            children: e
        }, e + t)
          , Ra = (0,
        r.memo)((e => {
            const {item: t, DuetComp: i, LinkComp: o, pageType: a, QuestionComp: r, renderText: l=Ba, shouldReport: s, reportParams: d, styleType: c} = e
              , u = (0,
            sn.zy)()
              , p = (0,
            Ii.s)()
              , h = (0,
            on._u)();
            if (!(null == t ? void 0 : t.desc))
                return null;
            const {textExtra: m, desc: g, authorId: v, id: y} = t;
            return (null == m ? void 0 : m.length) ? (0,
            n.jsx)(n.Fragment, {
                children: [...m].sort(( (e, t) => e.start - t.start)).reduce(( (t, m, x, f) => {
                    const {start: b, end: k, awemeId: _, userUniqueId: w, hashtagName: C, type: S, subType: j, userId: T, hashtagId: M, questionId: I="", questionContent: A=""} = m
                      , P = 0 === x ? 0 : f[x - 1].end
                      , E = b
                      , O = g.substring(P, E);
                    O && t.push(l(O, t.length - 1));
                    const L = (0,
                    Da.L)(j)
                      , D = g.substring(b, k);
                    if (0 === S && _ && !L) {
                        const o = (0,
                        xn.F)({
                            to: {
                                pathname: h({
                                    uniqueId: null != w ? w : "",
                                    videoId: _
                                })
                            },
                            location: u
                        });
                        t.push((0,
                        n.jsx)(i, {
                            href: o,
                            text: D,
                            index: t.length - 1,
                            id: _,
                            type: "video",
                            authorId: v,
                            groupId: y,
                            duetAuthorId: T,
                            shouldReport: s,
                            reportParams: d,
                            pageType: a,
                            styleType: "tag",
                            onLinkClick: e.onLinkClick,
                            onSearchResultClick: e.onSearchResultClick
                        }, D + x))
                    } else if (0 === S && T && !L) {
                        const i = (0,
                        xn.F)({
                            to: {
                                pathname: (0,
                                fn.fJR)({
                                    uniqueId: null != w ? w : ""
                                })
                            },
                            location: u
                        });
                        t.push((0,
                        n.jsx)(o, {
                            href: i,
                            text: D,
                            index: t.length - 1,
                            id: T,
                            type: "user",
                            authorId: v,
                            groupId: y,
                            shouldReport: s,
                            reportParams: d,
                            pageType: a,
                            styleType: c,
                            onLinkClick: e.onLinkClick,
                            onSearchResultClick: e.onSearchResultClick
                        }, D + x))
                    } else if (1 === S && C) {
                        const i = (0,
                        xn.F)({
                            to: {
                                pathname: (0,
                                fn.ATn)({
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
                        Sn.ry)(r, p);
                        t.push((0,
                        n.jsx)(o, {
                            href: i,
                            text: D,
                            index: t.length - 1,
                            id: null != M ? M : "",
                            type: "tag",
                            authorId: v,
                            groupId: y,
                            title: l,
                            shouldReport: s,
                            reportParams: d,
                            pageType: a,
                            styleType: c,
                            onLinkClick: e.onLinkClick,
                            onSearchResultClick: e.onSearchResultClick
                        }, D + x))
                    } else if (0 === S && L) {
                        const i = (0,
                        xn.F)({
                            to: {
                                pathname: `${(0,
                                fn.WDv)({
                                    questionId: I,
                                    questionContent: A
                                })}?_r=1`
                            },
                            location: u
                        });
                        t.push((0,
                        n.jsx)(r, {
                            href: i,
                            text: null != w ? w : "",
                            index: t.length - 1,
                            id: I,
                            type: "question",
                            authorId: v,
                            groupId: y,
                            pageType: a,
                            shouldReport: s,
                            reportParams: d,
                            styleType: c,
                            onLinkClick: e.onLinkClick,
                            onSearchResultClick: e.onSearchResultClick
                        }, D + x))
                    } else
                        t.push(l(D, t.length - 1));
                    return x === f.length - 1 && t.push(l(g.substring(k), t.length)),
                    t
                }
                ), [])
            }) : l(g, 0)
        }
        ))
          , za = e => 0 === e.length ? e : "@" === e.charAt(0) ? e.substring(1) : e;
        function Ua({type: e, id: t, authorId: i, groupId: n, duetAuthorId: o, text: a, isDuet: l, reportParams: s, shouldReport: d, pageType: c, onSearchResultClick: u}) {
            return (0,
            r.useCallback)((r => {
                if (r.stopPropagation(),
                d)
                    switch (e) {
                    case "tag":
                        Cn.q.handleEnterTagDetail(Object.assign({
                            tag_id: t,
                            author_id: i,
                            group_id: n,
                            enter_method: l ? "click_duet" : "click_caption",
                            type: Si.M[c]
                        }, s)),
                        Ea.mr.handleChannelGeneralClick("hashtag", "video_feed"),
                        null == u || u("tag");
                        break;
                    case "user":
                        Cn.q.handleEnterUser(Object.assign({
                            to_user_id: t,
                            author_id: i,
                            group_id: n,
                            enter_method: l ? "click_duet" : "click_caption",
                            to_user_name: a.substr(1),
                            type: Si.M[c]
                        }, s)),
                        null == u || u("person");
                        break;
                    case "video":
                        Cn.q.handleEnterVideo(Object.assign({
                            author_id: i,
                            group_id: n,
                            to_group_id: t,
                            to_author_id: o,
                            enter_method: l ? "click_duet" : "click_caption",
                            type: Si.M[c]
                        }, s));
                        break;
                    case "question":
                        Cn.q.handleEnterQuestion(Object.assign({
                            author_id: i,
                            group_id: n,
                            to_group_id: t,
                            enter_method: "click_anchor"
                        }, s))
                    }
            }
            ), [d, e, t, i, n, l, c, s, u, a, o])
        }
        const Va = (0,
        r.memo)((e => {
            const {href: t, text: i, index: o, id: a, type: l, reportParams: s, shouldReport: d=!0, styleType: c, authorId: u, groupId: h, duetAuthorId: m, pageType: g, hasSpace: v=!0, onLinkClick: y, onSearchResultClick: x} = e
              , f = Ua({
                type: l,
                id: a,
                text: i,
                isDuet: !0,
                reportParams: s,
                shouldReport: d,
                authorId: u,
                groupId: h,
                duetAuthorId: m,
                pageType: g,
                onSearchResultClick: x
            })
              , {isMobileUiOptimize: b} = (0,
            p.Eo)()
              , k = (0,
            r.useCallback)((e => {
                f(e),
                null == y || y(e, t)
            }
            ), [f, t, y]);
            return (0,
            n.jsxs)(ua.ah, {
                to: t,
                onClick: k,
                styleType: c,
                isMobileUiOptimize: b,
                paddingStart: "22px",
                children: [b ? (0,
                n.jsx)(ua.es, {
                    children: (0,
                    n.jsx)(pa.A, {})
                }) : (0,
                n.jsx)(ua.Mv, {
                    fill: "#fff",
                    width: 16,
                    height: 16
                }), (0,
                n.jsxs)(ua.pM, {
                    children: [b ? za(i) : i, v ? " " : ""]
                })]
            }, i + o)
        }
        ))
          , Na = (0,
        r.memo)((e => {
            const {href: t, text: i, index: o, id: a, type: l, reportParams: s, shouldReport: d=!0, styleType: c, authorId: u, groupId: h, pageType: m, onLinkClick: g, onSearchResultClick: v} = e
              , y = (0,
            Ii.s)()
              , x = Ua({
                type: l,
                id: a,
                text: i,
                isDuet: !0,
                reportParams: Object.assign(Object.assign({}, s), {
                    question_id: a
                }),
                shouldReport: d,
                authorId: u,
                groupId: h,
                pageType: m,
                onSearchResultClick: v
            })
              , f = (0,
            r.useCallback)((e => {
                if (!a)
                    return e.preventDefault(),
                    La.F.destroy(),
                    void La.F.open({
                        content: y("qa_page_reflow_page_blank_title"),
                        duration: 3,
                        widthType: "padding"
                    });
                x(e),
                null == g || g(e, t)
            }
            ), [x, t, a, g, y])
              , {isMobileUiOptimize: b} = (0,
            p.Eo)();
            return (0,
            n.jsxs)(ua.ah, {
                to: t,
                onClick: f,
                styleType: c,
                forceSSR: !0,
                isMobileUiOptimize: b,
                children: [b ? (0,
                n.jsx)(ua.es, {
                    children: (0,
                    n.jsx)(ha.A, {})
                }) : (0,
                n.jsx)(ua.Hg, {
                    fill: "#fff",
                    width: 12,
                    height: 12
                }), (0,
                n.jsxs)(ua.pM, {
                    children: [i, " "]
                })]
            }, i + o)
        }
        ))
          , Fa = (0,
        r.memo)((e => {
            const {href: t, text: i, index: o, id: a, type: l, authorId: s, groupId: d, reportParams: c, title: u, shouldReport: h=!0, pageType: m, hasSpace: g=!0, onLinkClick: v, onSearchResultClick: y} = e
              , x = Ua({
                type: l,
                id: a,
                authorId: s,
                groupId: d,
                text: i,
                isDuet: !1,
                reportParams: c,
                shouldReport: h,
                pageType: m,
                onSearchResultClick: y
            })
              , {isMobileUiOptimize: f} = (0,
            p.Eo)()
              , b = (0,
            r.useCallback)((e => {
                x(e),
                null == v || v(e, t)
            }
            ), [x, t, v])
              , k = (0,
            n.jsxs)(ua.pM, {
                children: [f ? za(i) : i, g ? " " : ""]
            })
              , _ = {
                to: t,
                key: i + o,
                onClick: b,
                title: u,
                isMobileUiOptimize: f
            };
            return f && "user" === l ? (0,
            n.jsxs)(ua.ah, Object.assign(Object.assign({}, _), {
                children: [(0,
                n.jsx)(ua.es, {
                    children: (0,
                    n.jsx)(ma.A, {})
                }), k]
            })) : (0,
            n.jsx)(ua.JL, Object.assign(Object.assign({}, _), {
                children: k
            }))
        }
        ))
          , Ha = (0,
        r.memo)((function(e) {
            const {item: t, e2eTag: i, shouldReport: o=!0, reportParams: a, pageType: l, styleType: s="default", toggleSeeMore: d} = e
              , {id: u="", authorId: h=""} = (0,
            c.L$)(t)
              , {playModeForTea: m} = (0,
            ca.u)(l)
              , g = (0,
            r.useMemo)(( () => ({
                group_id: u,
                author_id: h,
                play_mode: m
            })), [h, u, m])
              , {isMobileUiOptimize: v} = (0,
            p.Eo)()
              , {needCtaClick: y} = (0,
            He.un)(l)
              , {CtaWrapperComponent: x, triggerClick: f} = (0,
            Ge.Z)({
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
              , {CtaWrapperComponent: b, triggerClick: k} = (0,
            Ge.Z)({
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
              , _ = (0,
            r.useCallback)(( () => {
                wn.O.handleTap({
                    target: "video_caption",
                    enter_method: "click_caption_description"
                }),
                f()
            }
            ), [f])
              , w = (0,
            r.useCallback)((e => {
                if (y)
                    return wn.O.handleTap({
                        target: "video_caption",
                        enter_method: "click_caption_more"
                    }),
                    void k();
                null == d || d(e),
                e ? Oa.l.handleDescriptionFolded(g) : Oa.l.handleDescriptionUnfolded(g)
            }
            ), [g, y, k])
              , {width: C} = (0,
            We.l)()
              , {fontSize: S, lineHeight: j} = (0,
            r.useMemo)(( () => ({
                fontSize: C >= qt.aU ? "22px" : "15px",
                lineHeight: C >= qt.aU ? "14px" : "18px"
            })), [C])
              , T = (0,
            r.useMemo)(( () => ({
                color: "#fff",
                fontSize: S,
                lineHeight: j
            })), [S, j])
              , M = (0,
            r.useCallback)((t => {
                if (y)
                    return t.preventDefault(),
                    void _();
                e.onLinkClick
            }
            ), [e.onLinkClick, y]);
            return (0,
            n.jsxs)(ua.LL, {
                "data-e2e": i,
                isMobileUiOptimize: v,
                children: [y && (0,
                n.jsxs)(n.Fragment, {
                    children: [x, b]
                }), (0,
                n.jsx)(Aa, {
                    onlyKey: u,
                    lineClamp: 2,
                    lineHeight: 18,
                    btnStyle: T,
                    btnOnClick: w,
                    overflowLineNum: v ? 12 : void 0,
                    isMobile: !0,
                    isCtaClick: y,
                    ctaTrigger: _,
                    children: (0,
                    n.jsx)(Ra, {
                        item: t,
                        DuetComp: Va,
                        QuestionComp: Na,
                        LinkComp: Fa,
                        reportParams: a,
                        shouldReport: o,
                        pageType: l,
                        styleType: s,
                        onLinkClick: M,
                        onSearchResultClick: e.onSearchResultClick
                    })
                })]
            })
        }
        ))
          , Ga = (0,
        r.memo)(( ({id: e="", isPlaying: t, isActive: i, pageType: o, style: a, isHideAuthor: l, onLinkClick: s}) => {
            const d = (0,
            sn.zy)()
              , u = (0,
            Ii.s)()
              , {item: h, user: m} = (0,
            gt.y)(e)
              , g = (0,
            r.useRef)(null)
              , [y,x] = (0,
            r.useState)(0)
              , [f,b] = (0,
            r.useState)(!1)
              , {music: {id: k="", title: _="", authorName: w="", authorFtc: C=!1, isCopyrighted: S=!1}={}, id: j, authorId: T="", stateControlledMedia: M, poi: I, imagePost: A, itemMute: P=!1} = (0,
            c.L$)(h)
              , {needCtaClick: E} = (0,
            He.un)(o)
              , {uniqueId: O="", verified: L, nickname: D="", isADVirtual: B} = (0,
            c.L$)(m)
              , R = `@${B ? D : O}`
              , {isMobileUiOptimize: z} = (0,
            p.Eo)()
              , U = (0,
            p.Ns)()
              , V = z ? D : R
              , N = B ? "#" : (0,
            xn.F)({
                to: {
                    pathname: `${(0,
                    fn.fJR)({
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
              , H = (0,
            Sn.ry)(F, u)
              , {CtaWrapperComponent: G, triggerClick: W} = (0,
            Ge.Z)({
                downloadType: "click_caption_username",
                pageType: 1,
                target: "wrapper_user",
                extraLogParams: {
                    enter_method: "click_caption_username",
                    target: "video_caption"
                },
                user_id: T
            })
              , $ = (0,
            r.useCallback)((e => {
                if (B)
                    e.preventDefault();
                else {
                    if (E)
                        return wn.O.handleTap({
                            target: "video_caption",
                            enter_method: "click_caption_username"
                        }),
                        e.preventDefault(),
                        void W();
                    null == s || s(),
                    Cn.q.handleEnterUser({
                        to_user_id: T,
                        author_id: T,
                        group_id: j,
                        type: Si.M[o],
                        enter_method: "click_caption_username"
                    })
                }
            }
            ), [T, j, s, B, o, E, W])
              , q = _ ? P ? u("music_detail_unavailable_1") : "Promoted Music" === _ ? _ : _.replace(`- ${w}`, "") + (w ? `- ${w}` : "") : "";
            (0,
            r.useEffect)(( () => {
                var e, t;
                x((null !== (t = null === (e = g.current) || void 0 === e ? void 0 : e.clientWidth) && void 0 !== t ? t : 0) / 4 / 40)
            }
            ), []);
            const Y = P ? "#" : (0,
            xn.F)({
                to: {
                    pathname: (0,
                    fn.pHc)({
                        musicName: _,
                        musicId: k
                    })
                },
                location: d
            })
              , J = {
                pageType: 4,
                pageData: {
                    authorName: w,
                    musicName: _
                }
            }
              , Q = P ? u("music_detail_unavailable_1") : (0,
            Sn.ry)(J, u)
              , Z = C || !k || S && U
              , {isRTL: K} = (0,
            fe.m)()
              , {CtaWrapperComponent: X, triggerClick: ee} = (0,
            Ge.Z)({
                downloadType: "click_music_name",
                pageType: 4,
                target: "wrapper_music",
                extraLogParams: {
                    enter_method: "click_music_name",
                    target: "video_caption"
                },
                music_id: k
            })
              , te = (0,
            r.useCallback)((e => {
                if (E)
                    return wn.O.handleTap({
                        target: "video_caption",
                        enter_method: "click_music_name"
                    }),
                    e.preventDefault(),
                    void ee();
                Cn.q.handleEnterMusicDetail({
                    music_id: k,
                    author_id: T,
                    group_id: j,
                    type: Si.M[o],
                    enter_method: "click_music_name"
                }),
                null == s || s()
            }
            ), [T, j, s, k, o, E, ee])
              , {userTag: ie, bluevTag: ne, descTag: oe, musicTag: ae, musicNameTag: re} = function(e) {
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
            }(o)
              , le = (0,
            jn.H)(bn.Cz)
              , se = {
                scene: "video_feed"
            }
              , {playModeForTea: de} = (0,
            ca.u)(o)
              , {videoSubtitle: ce, videoSubtitleState: ue, showTooltip: pe, showSubtitle: he, overlayEle: me, captionStyle: ge, handleClickCaption: ve} = (0,
            yt.BT)({
                isActive: i,
                groupId: j,
                authorId: T,
                playModeForTea: de
            })
              , ye = (0,
            r.useMemo)(( () => ({
                marginBottom: "8px"
            })), [])
              , xe = (0,
            r.useMemo)(( () => ({
                author_id: T,
                group_id: j
            })), [T, j])
              , {isGoogleBot: be, googlebotVideoSubtitle: ke} = (0,
            yt.XI)({
                itemId: e
            })
              , {isTtincar: _e} = (0,
            v.Qt)()
              , we = _e || U && ![124, 122].includes(o)
              , Ce = (0,
            r.useMemo)(( () => be && ke ? (0,
            n.jsxs)(ua.nW, {
                children: [ke, (0,
                n.jsx)(ua._P, {})]
            }) : he ? (0,
            n.jsx)(oa, {
                visible: pe,
                overlay: me,
                children: (0,
                n.jsx)(ua.nW, {
                    style: ge,
                    onClick: ve,
                    children: 3 === ue ? (0,
                    n.jsxs)(n.Fragment, {
                        children: [ce, (0,
                        n.jsx)(ua._P, {})]
                    }) : (0,
                    n.jsx)(jo.A, {
                        width: 19,
                        height: 21
                    })
                })
            }) : null), [be, ke, he, pe, me, ge, ve, ue, ce])
              , Se = (0,
            r.useCallback)((e => {
                b(e)
            }
            ), []);
            return (0,
            n.jsx)(Et.Z2, {
                children: ({css: e}) => (0,
                n.jsxs)(ua.pR, {
                    isRTL: K,
                    className: e(a),
                    children: [E && (0,
                    n.jsxs)(n.Fragment, {
                        children: [G, X]
                    }), z && (0,
                    n.jsx)(ua.II, {
                        isExpand: !f
                    }), Ce, (0,
                    n.jsx)(sa, {
                        item: h
                    }), (0,
                    n.jsx)(da.W, {
                        type: "video",
                        info: I,
                        teaParams: xe
                    }), !l && (0,
                    n.jsx)(ua.xn, {
                        isMobileUiOptimize: z,
                        children: (0,
                        n.jsx)(le, {
                            section: "user",
                            to: N,
                            title: H,
                            onClick: $,
                            reportParams: se,
                            children: (0,
                            n.jsxs)(ua.VB, {
                                children: [(0,
                                n.jsx)(ua.pM, {
                                    "data-e2e": ie,
                                    children: V
                                }), L && (0,
                                n.jsx)(ua.iI, {
                                    children: (0,
                                    n.jsx)($o.s, {
                                        width: "100%",
                                        height: "100%",
                                        "data-e2e": ne
                                    })
                                })]
                            })
                        }, R)
                    }), (0,
                    n.jsx)(To.w, {
                        style: ye,
                        stateControlledMedia: M,
                        labelType: 1
                    }), (null == A ? void 0 : A.title) && (0,
                    n.jsx)(ua.a_, {
                        children: null == A ? void 0 : A.title
                    }), (0,
                    n.jsx)(Ha, {
                        item: h,
                        onLinkClick: s,
                        ellipsisOnNarrow: !0,
                        pageType: o,
                        e2eTag: oe,
                        shouldReport: !0,
                        toggleSeeMore: Se
                    }), h && (0,
                    n.jsx)(Lo, {
                        item: h
                    }), h && (0,
                    n.jsx)(Wo, {
                        item: h
                    }), !Z && q && (0,
                    n.jsx)(ua.Gr, {
                        children: (0,
                        n.jsx)(ua.hU, {
                            children: (0,
                            n.jsxs)(le, {
                                section: "music",
                                to: Y,
                                title: Q,
                                style: {
                                    display: "flex",
                                    fontWeight: "normal"
                                },
                                onClick: te,
                                reportParams: se,
                                disabled: P,
                                children: [(0,
                                n.jsx)(ua.bQ, {
                                    isRTL: K,
                                    isMusicUnavailable: P,
                                    "data-e2e": ae
                                }), (0,
                                n.jsx)(ua.OV, {
                                    "data-e2e": re,
                                    isMobileUiOptimize: z,
                                    hideAnimation: we,
                                    children: (0,
                                    n.jsx)(ua.jm, {
                                        playing: t,
                                        isRTL: K,
                                        sec: z ? y : 2,
                                        ref: g,
                                        hideAnimation: we,
                                        children: new Array(we ? 1 : 4).fill(0).map(( (e, t) => (0,
                                        n.jsx)(ua.SM, {
                                            children: q
                                        }, q + t)))
                                    })
                                })]
                            }, Q)
                        })
                    })]
                })
            })
        }
        ));
        var Wa = i(35495)
          , $a = i(18736);
        const qa = (0,
        r.memo)((function(e) {
            const t = (0,
            Ii.s)()
              , {isMobileUiOptimize: i} = (0,
            p.Eo)();
            return (0,
            n.jsx)($a.nX, {
                isMobileUiOptimize: i,
                children: (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)($a.NJ, {
                        "data-e2e": "share-block-icon",
                        onClick: e.onClick,
                        children: (0,
                        n.jsx)(Zi, {
                            width: 24,
                            height: 24
                        })
                    }), (0,
                    n.jsx)($a.mh, {
                        "data-e2e": "share-report-text",
                        children: t("nonpersonalizedFeeds_feed_entrypoint_manageFeed")
                    })]
                })
            })
        }
        ));
        var Ya = i(2408);
        const Ja = [11, 0, 5]
          , Qa = (0,
        r.memo)((function({id: e="", index: t, pageType: i, hideOperator: l, isHideAuthor: s=!1, onLinkClick: d, onFavor: u}) {
            var h, g, v;
            const y = Ht()
              , f = u
              , {item: b} = (0,
            gt.y)(null != e ? e : "")
              , {music: k, itemMute: _, authorId: w="", warnInfo: C, subVideoMeta: S} = (0,
            c.L$)(b)
              , {authorFtc: j} = (0,
            c.L$)(k)
              , T = null !== (h = null != j ? j : _) && void 0 !== h && h
              , {showUnMuteBtn: M} = (0,
            ai.Iv)({
                itemOriginalMute: T,
                itemCopyrightMute: _
            })
              , {shouldUseIOSPlayer: I} = Fe()
              , A = (0,
            r.useContext)(ht)
              , P = (0,
            r.useRef)(null)
              , E = (0,
            r.useContext)(Ze)
              , O = y === t;
            (0,
            r.useEffect)(( () => {
                !I && O && E.setVideoRef(P)
            }
            ), [I, O, E]);
            const [L,D] = (0,
            r.useState)(!1)
              , B = (0,
            r.useMemo)(( () => ({
                handleCloseShareSheet: () => D(!1),
                handleOpenShareSheet: () => D(!0)
            })), [])
              , R = function(e, t) {
                var i, n, a, r, l;
                const {item: s, user: d} = (0,
                gt.y)(e)
                  , u = (0,
                o.Ph)(Tt.M)
                  , {language: h="en", wid: m} = (0,
                c.L$)((0,
                St.W)(( () => ["language", "wid"]), []))
                  , {id: g="", authorId: v="", author: y=""} = (0,
                c.L$)(s)
                  , x = (0,
                o.Ph)(rn.m, {
                    selector: e => {
                        var t;
                        return null === (t = e.users) || void 0 === t ? void 0 : t[y]
                    }
                    ,
                    dependencies: [y]
                })
                  , f = (0,
                on._u)()
                  , b = (0,
                p.ZO)();
                let k = "/report";
                s && (k += `/video?lang=${h}&objectId=${g}&ownerId=${v}&videoOwner=${JSON.stringify(x)}`);
                const _ = `?is_from_webapp=1&sender_device=mobile&sender_web_id=${m}`;
                let w = u.platforms;
                return b && (w = null !== (i = null == w ? void 0 : w.filter((e => e !== an.Ag.facebook && e !== an.Z8.messenger))) && void 0 !== i ? i : []),
                {
                    pageType: t,
                    reportUrl: k,
                    title: "",
                    desc: null !== (n = null == s ? void 0 : s.desc) && void 0 !== n ? n : "",
                    image: !(null == s ? void 0 : s.takeDown) && s && s.video && null !== (a = ln(null == s ? void 0 : s.video.cover)) && void 0 !== a ? a : "",
                    disableShare: !s || !d || s.forFriend || Boolean(d.secret) || Boolean(s.vl1),
                    url: null !== (r = `${location.protocol}//${location.host}${f(s)}${_}`) && void 0 !== r ? r : "",
                    shareEnabled: null === (l = null == s ? void 0 : s.shareEnabled) || void 0 === l || l,
                    platforms: w
                }
            }(null != e ? e : "", i)
              , z = (0,
            x.MA)(b)
              , U = (0,
            a.Nj)(Ci.A)
              , V = (0,
            r.useCallback)((t => {
                var n;
                U.handleShare(Object.assign({
                    platform: t,
                    group_id: e,
                    author_id: w,
                    type: Si.M[i],
                    poi_id: null === (n = null == b ? void 0 : b.poi) || void 0 === n ? void 0 : n.id,
                    is_sub_only_video: S ? 1 : 0
                }, z))
            }
            ), [U, e, w, i, null === (g = null == b ? void 0 : b.poi) || void 0 === g ? void 0 : g.id, S, z])
              , N = (0,
            r.useCallback)(( () => {
                var t;
                ji.o.handleShowReport(Object.assign({
                    videoId: e,
                    authorId: w,
                    type: "video",
                    poi_id: null === (t = null == b ? void 0 : b.poi) || void 0 === t ? void 0 : t.id,
                    is_sub_only_video: S ? 1 : 0
                }, z))
            }
            ), [w, e, null === (v = null == b ? void 0 : b.poi) || void 0 === v ? void 0 : v.id, z, S])
              , {isRTL: F} = (0,
            fe.m)()
              , H = null == C ? void 0 : C[0]
              , {key: G="", text: W, url: $} = (0,
            c.L$)(H)
              , q = (0,
            r.useCallback)(( () => {
                var t;
                t = {
                    enter_from: "foryou_bottom",
                    video_id: e,
                    target: G
                },
                m.f.sendEvent("warn_info_click", t)
            }
            ), [e, G])
              , Y = (0,
            r.useMemo)(( () => {
                if (!H)
                    return null;
                const e = (0,
                n.jsxs)(bi, {
                    children: [(0,
                    n.jsx)(yi, {}), (0,
                    n.jsx)(ki, {
                        children: H.text
                    }), H.url && (0,
                    n.jsx)(xi, {})]
                });
                return $ ? (0,
                n.jsx)(fi, {
                    title: W,
                    href: $,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: q,
                    children: e
                }) : e
            }
            ), [H, $, W, q])
              , J = (0,
            r.useRef)(!1);
            (0,
            r.useEffect)(( () => {
                var t;
                !J.current && H && (J.current = !0,
                t = {
                    enter_from: "foryou_bottom",
                    video_id: e,
                    target: G
                },
                m.f.sendEvent("warn_info_show", t))
            }
            ), [e, G, H]);
            const Q = (0,
            r.useMemo)(( () => ({
                position: "absolute",
                bottom: 0,
                left: F ? "unset" : 0,
                right: F ? 0 : "unset",
                zIndex: 5
            })), [F])
              , [Z,K] = (0,
            Ya.HY)((e => e.isManageModalOpen), Re.bN)
              , {isPlaying: X} = A
              , {groupId: ee, ICON_LIST: te} = (e => {
                const {item: t, item: {id: i, authorId: n}={}, user: o} = (0,
                gt.y)(null != e ? e : "")
                  , {showDownloadIcon: a, showDuetIcon: r} = function(e, t) {
                    const {downloadSetting: i, duetSetting: n, relation: o, uniqueId: a, secUid: r} = (0,
                    c.L$)(e)
                      , {duetEnabled: l, subVideoMeta: s} = (0,
                    c.L$)(t)
                      , d = (0,
                    Ki.b3)({
                        uniqueId: a,
                        secUid: r
                    })
                      , u = 2 === o;
                    return {
                        showDownloadIcon: (d || !s) && (d || 0 === i || 1 === i && u),
                        showDuetIcon: l && (d || !s) && (d || 0 === n || 1 === n && u)
                    }
                }(o, t)
                  , l = (0,
                Ii.s)();
                return {
                    groupId: i,
                    authorId: n,
                    ICON_LIST: [{
                        Icon: Ri,
                        text: l("webapp_savevid_btn"),
                        isShow: a,
                        enterMethod: "click_save_video"
                    }, {
                        Icon: Zi,
                        text: Xi,
                        enterMethod: "click"
                    }, {
                        Icon: Vi,
                        text: l("webapp_duet_btn"),
                        isShow: r,
                        enterMethod: "click_duet"
                    }, {
                        Icon: Yi,
                        text: l("webapp_livephoto_btn"),
                        isShow: a,
                        enterMethod: "click_live_photo"
                    }, {
                        Icon: Hi,
                        text: l("webapp_shareasgif_btn"),
                        isShow: a,
                        enterMethod: "click_share_gif"
                    }]
                }
            }
            )(e)
              , {hasNonPersonalizedMenu: ie} = (0,
            p.cE)()
              , ne = (0,
            r.useCallback)(( () => {
                K.setIsManageModalOpen(!0),
                B.handleCloseShareSheet(),
                Ti.$.handleClickManageFeeds(),
                Ti.$.handleManageFeedsPopUp()
            }
            ), [K, B])
              , oe = (0,
            r.useMemo)(( () => te.map((e => e.text === Xi ? ie ? -1 === Ja.indexOf(i) ? null : (0,
            n.jsx)(qa, {
                onClick: ne
            }) : null : (0,
            n.jsx)(en.X, Object.assign({
                onClose: B.handleCloseShareSheet,
                pageType: i,
                video_id: ee
            }, e), e.text))).filter((e => null !== e))), [te, ee, ie, i, ne, B.handleCloseShareSheet]);
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsxs)(wi, {
                    children: [Y, M && O && (0,
                    n.jsx)(Oi, {
                        id: e
                    }), (0,
                    n.jsxs)(_i, {
                        children: [(0,
                        n.jsx)(So, {
                            id: e,
                            pageType: i,
                            shareCommand: B,
                            isPlaying: X,
                            onFavor: f,
                            hideOperator: l,
                            onLinkClick: d
                        }), b && (0,
                        n.jsx)(Ga, {
                            id: e,
                            isActive: O,
                            isPlaying: X,
                            pageType: i,
                            isHideAuthor: s,
                            onLinkClick: d,
                            style: Q
                        })]
                    })]
                }), (0,
                n.jsxs)(tn.z, Object.assign(Object.assign({
                    isVisible: L,
                    onClose: B.handleCloseShareSheet
                }, R), {
                    copyNotify: !0,
                    authorId: w,
                    hasReport: !0,
                    itemId: e,
                    onShare: V,
                    onReport: N,
                    children: [(0,
                    n.jsx)(nn.Z, {
                        itemId: e,
                        pageType: i,
                        onClose: B.handleCloseShareSheet
                    }), oe]
                })), (0,
                n.jsx)(Wa.J, {
                    visible: Z,
                    onClose: () => {
                        K.setIsManageModalOpen(!1),
                        Ti.$.handleCloseManageFeedsPopUp()
                    }
                })]
            })
        }
        ))
          , Za = (0,
        r.memo)((function(e) {
            var t, i, l, s, d, h;
            const {list: m, id: y, index: f, playMode: b, showImage: k, showPause: _, muted: w, loading: C, hasFooterBar: S, pageType: j, teaExtraParams: T, hideOperator: M, isHideAuthor: I, onClick: A, onClose: P, onLinkClick: E, skipRenderSlide: O=!1, photoVideoRef: L, onLoadingStatusChanged: D=he()} = e
              , B = Ht()
              , R = (0,
            a.Nj)(Ct.V)
              , {item: z, itemDispatcher: U, user: V} = (0,
            gt.y)(null != y ? y : "")
              , {digged: N, video: F} = (0,
            c.L$)(z)
              , {subtitleInfos: H=[]} = (0,
            c.L$)(F)
              , {secUid: G=""} = (0,
            c.L$)(V);
            let W = null !== (t = g("multimedia_player_type", {
                type: "TT"
            }).type) && void 0 !== t ? t : "TT";
            const {enabled: $, xg: q} = (0,
            p.Wq)();
            $ && (W = q ? "XG" : "TT");
            const Y = (0,
            Ve.IB)(H)
              , {isTtincar: J} = (0,
            v.Qt)()
              , Q = (0,
            r.useRef)(null)
              , Z = (0,
            a.Nj)(wt)
              , {user: K} = (0,
            c.L$)((0,
            St.W)(( () => ["user"]), []))
              , {isGoogleBot: X} = (0,
            c.L$)((0,
            u.U)(( () => ["isGoogleBot"]), []))
              , {shouldUseIOSPlayer: ee} = Fe()
              , te = (0,
            r.useContext)(Ze)
              , ie = (0,
            r.useContext)(tt)
              , {armCoreContentEvent: ne} = (0,
            r.useContext)(jt.e)
              , ae = (0,
            o.wA)(Tt.M)
              , {needCtaClick: re} = (0,
            He.un)(j)
              , le = B === f;
            (0,
            r.useEffect)(( () => {
                !ee && le && te.setVideoRef(Q)
            }
            ), [ee, le, te]);
            const ce = null === (i = te.videoRef) || void 0 === i ? void 0 : i.current;
            (0,
            yt.kU)({
                videoDom: ce,
                subtitleUrl: Y,
                shouldUsePlayer: !ee && le
            });
            const ue = ft(z, "image")
              , {music: pe, itemMute: ge} = (0,
            c.L$)(z)
              , ve = null !== (s = null !== (l = null == pe ? void 0 : pe.authorFtc) && void 0 !== l ? l : ge) && void 0 !== s && s
              , {showUnMuteBtn: ye, showPlayBtn: xe} = (0,
            ai.Iv)({
                itemOriginalMute: ve,
                playMode: b,
                itemCopyrightMute: ge
            })
              , fe = ( (e, t, i=!1, n=!0) => {
                const {zoomCover: o, cover: a="", dynamicCover: l} = e
                  , s = null == o ? void 0 : o[null != t ? t : "720"]
                  , d = () => {
                    const {supportWebp: e, supportAvif: t} = (0,
                    Mt.PD)()
                      , n = (0,
                    It.G)(s);
                    return i && l && (1 !== (0,
                    It.G)(l) || e) ? l : !s || 1 === n && !e || 2 === n && !t ? a : s
                }
                  , [c,u] = (0,
                r.useState)(n ? i && l ? l : s || a : d());
                return (0,
                r.useEffect)(( () => {
                    u(d())
                }
                ), [e]),
                c
            }
            )((null == z ? void 0 : z.video) || {}, "720")
              , be = {
                pageType: j,
                uid: y,
                secUid: G,
                avatarUrl: null == V ? void 0 : V.avatarThumb
            }
              , ke = e => e ? "double_tap" : "click_like"
              , {showModalOrLater: _e} = (0,
            Ft.z)(Object.assign(Object.assign({}, be), {
                enterMethod: ke(!0)
            }))
              , {showModalOrLater: we} = (0,
            Ft.z)(Object.assign(Object.assign({}, be), {
                enterMethod: ke(!1)
            }))
              , Ce = (0,
            r.useCallback)(( (e, t=!1) => {
                if (!K || re)
                    t ? _e() : we();
                else {
                    if (e && t) {
                        const {clientX: t, clientY: i} = e;
                        if (new Ut(t,i).emit(),
                        N)
                            return
                    }
                    ae.setIsFlip(!0),
                    U.postLikeVideo({
                        id: y,
                        enter_method: ke(t)
                    })
                }
            }
            ), [K, _e, we, ae, U, y, N]);
            (0,
            r.useEffect)(( () => {
                !ee && le && (te.setVideoRef(Q),
                ie.setDoFavor(Ce))
            }
            ), [ee, le, te, ie, Ce]);
            const Se = (0,
            r.useRef)(!1)
              , je = (0,
            r.useRef)()
              , Te = (0,
            r.useCallback)((e => {
                if (je.current && clearTimeout(je.current),
                !Se.current)
                    return Se.current = !0,
                    window.setTimeout(( () => {
                        Se.current = !1
                    }
                    ), 300),
                    void (je.current = window.setTimeout(( () => {
                        null == A || A()
                    }
                    ), 300));
                Ce(e, !0)
            }
            ), [Ce, A])
              , Me = xt(z, T)
              , Ie = (0,
            r.useRef)(null)
              , Ae = (0,
            r.useCallback)(( () => {
                const e = Ie.current;
                e && (e.style.display = "none")
            }
            ), [])
              , Pe = (0,
            r.useCallback)(( () => {
                null == ne || ne(),
                R.reportActualFMP()
            }
            ), [ne])
              , Ee = (0,
            r.useCallback)(( () => {
                if (Me) {
                    const {author_id: e} = Me;
                    Z.handleVideoButtonClick({
                        group_id: y,
                        author_id: e
                    })
                }
            }
            ), [Z, Me, y])
              , Oe = (0,
            r.useCallback)(( () => {
                if (Me) {
                    const {author_id: e} = Me;
                    Z.handleVideoButtonShow({
                        group_id: y,
                        author_id: e
                    })
                }
            }
            ), [Z, Me, y])
              , {videoMaskType: Le="general", showVideoMask: De, videoMaskTitle: Be, videoMaskDesc: Re, icon: ze, groupId: Ne, upperBtnText: Ge, lowerBtnText: We, handleUpperBtnClick: $e, handleLowerBtnClick: qe, handleSkipVideo: Ye, maskStyle: Je} = (0,
            ai.Fg)({
                item: z,
                list: m,
                onClose: P
            })
              , Qe = (0,
            r.useRef)(!1)
              , Ke = (0,
            x.mx)(z)
              , Xe = (0,
            r.useContext)(pt);
            if ((0,
            r.useEffect)(( () => {
                Ke && Xe.setIsPlaying(!0)
            }
            ), [Ke, Xe]),
            O && 0 === B && !Qe.current)
                return Qe.current = !0,
                null;
            const et = !(null == z ? void 0 : z.takeDown) && fe && !Ke;
            return (0,
            n.jsxs)(hi, {
                height: "100%",
                "data-e2e": le ? "video-slide-active" : `video-slide-${f}`,
                children: [De && (0,
                n.jsx)(ni, {
                    videoMaskType: Le,
                    groupId: Ne,
                    icon: ze,
                    title: Be,
                    desc: Re,
                    upperBtnText: Ge,
                    lowerBtnText: We,
                    onUpperBtnClick: $e,
                    onLowerBtnClick: qe,
                    onSkipVideo: Ye,
                    item: z,
                    list: m,
                    style: Je
                }), ee && et && (0,
                n.jsx)(de, {
                    ref: Ie,
                    horizontal: Gt(ue),
                    src: fe,
                    alt: null == z ? void 0 : z.desc,
                    loading: J ? "eager" : "lazy",
                    visibility: k || !!X,
                    onError: Ae,
                    onLoad: Pe
                }), !ee && et && (0,
                n.jsx)(se, {
                    ref: Ie,
                    horizontal: Gt(ue),
                    forceContain: J,
                    src: fe,
                    alt: null == z ? void 0 : z.desc,
                    loading: J ? "eager" : "lazy",
                    visibility: k || !!X,
                    onError: Ae,
                    onLoad: Pe
                }), (X || !ee) && !De && (Ke ? le && (0,
                n.jsx)(Ue, {
                    ref: L,
                    playMode: b,
                    item: z,
                    teaParams: Me,
                    index: f
                }) : (0,
                n.jsx)(me, {
                    bitrateInfo: null === (d = null == z ? void 0 : z.video) || void 0 === d ? void 0 : d.bitrateInfo,
                    src: null !== (h = null == z ? void 0 : z.video.playAddr) && void 0 !== h ? h : "",
                    autoPlay: !De,
                    muted: w,
                    isGoogleBot: X,
                    horizontal: ue,
                    platform: "android",
                    id: y,
                    index: f,
                    playMode: b,
                    currentIndex: B,
                    teaParams: Me,
                    ref: Q,
                    onVideoEnded: te.handleEnded,
                    onVideoStatusChanged: te.handleStatusChanged,
                    onInteract: Ee,
                    onInteractRequired: Oe,
                    onLoadingStatusChanged: D,
                    playerTypeConfig: W
                }, y)), (0,
                n.jsx)(Qa, {
                    id: y,
                    index: f,
                    pageType: j,
                    hideOperator: M,
                    isHideAuthor: I,
                    onLinkClick: E,
                    height: "100%",
                    hasFooterBar: S,
                    onFavor: Ce
                }), le && (0,
                n.jsx)(mi, {
                    onClick: Te,
                    children: !_ || !xe || ye && le ? null : (0,
                    n.jsx)(gi, {
                        style: {
                            backgroundImage: `url(${Vt})`
                        },
                        "data-e2e": "video-play-icon"
                    })
                }), le && C && !X && (0,
                n.jsx)(oe, {})]
            }, y)
        }
        ))
          , Ka = (0,
        r.memo)((e => {
            const {index: t, id: i, pageType: o} = e
              , {user: a} = (0,
            c.L$)((0,
            St.W)(( () => ["user"]), []))
              , {isGoogleBot: l} = (0,
            c.L$)((0,
            u.U)(( () => ["isGoogleBot"]), []))
              , s = Ht()
              , d = (0,
            r.useMemo)(( () => 0 === o || 5 === o || 11 === o && a), [o, a]);
            return !l && (s - t < -2 || s - t > 1) ? (0,
            n.jsx)(vi, {
                height: "100%"
            }, `fake-${i}`) : 0 === t && d ? (0,
            n.jsx)(jt.e.Provider, {
                value: Nt.ri,
                children: (0,
                n.jsx)(Za, Object.assign({}, e))
            }) : (0,
            n.jsx)(Za, Object.assign({}, e))
        }
        ));
        var Xa = i(90159)
          , er = i(97086);
        const tr = {
            0: {
                defaultMute: !0
            },
            2: {
                defaultMute: !1
            }
        };
        function ir(e) {
            return [(0,
            $t.jJ)({
                min: qt.gL,
                style: {
                    height: e - 56 + "px!important"
                }
            }), (0,
            $t.jJ)({
                min: qt.n1,
                style: {
                    height: e - 64 + "px!important"
                }
            }), (0,
            $t.jJ)({
                min: qt.L7,
                style: {
                    height: e - 72 + "px!important"
                }
            }), (0,
            $t.jJ)({
                max: qt.gL,
                minAspectRatio: "640/320",
                style: {
                    height: e - 32 + "px!important"
                }
            })]
        }
        const nr = (0,
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
            }, ...ir(e)]
        })), "label:DivSwiperContainer;")
          , or = [1, 4, 3, 113]
          , ar = (rr = (0,
        r.memo)((function(e) {
            var t, i, m, k, _, w, C;
            const {list: S, playMode: j=0, pageType: T, hasFooterBar: M=!0, hideOperator: I, isHideAuthor: A, disableMuteAutoplay: P=!1, currentIndex: E=0, onLinkClick: O, onClose: L, e2eTag: D="video-card", teaExtraParams: B, skipUpdateVideo: R=!1} = e
              , [z,U] = (0,
            r.useState)(!1)
              , V = (0,
            r.useContext)(qe.oA)
              , N = (0,
            r.useContext)(qe.dk)
              , {currentIndex: F} = N
              , H = (0,
            d.Hy)()
              , G = (0,
            o.wA)(dt.i)
              , {isGoogleBot: W, isIOS: $} = (0,
            c.L$)((0,
            u.U)(( () => ["isGoogleBot", "isIOS"]), []))
              , q = W
              , {isMobileUiOptimize: Y} = (0,
            p.Eo)()
              , [J] = (0,
            r.useState)(E > 0 && or.indexOf(T) > -1)
              , Q = (0,
            h._B)();
            let Z = null !== (t = g("multimedia_player_type", {
                type: "TT"
            }).type) && void 0 !== t ? t : "TT";
            const {enabled: K, xg: X} = (0,
            p.Wq)();
            K && (Z = X ? "XG" : "TT");
            const ee = (0,
            h.M2)()
              , {isTtincar: te} = (0,
            v.Qt)()
              , {needVVLimit: ie, videoViewLimit: ne} = (0,
            He.un)(T);
            (0,
            $e.$_)(T, F),
            (0,
            r.useEffect)(( () => {
                var e, t;
                V.setCurrentIndex(E),
                null === (t = null === (e = null == V ? void 0 : V.swiper) || void 0 === e ? void 0 : e.slideTo) || void 0 === t || t.call(e, E)
            }
            ), [V, null == V ? void 0 : V.swiper, E]),
            (0,
            r.useEffect)(( () => {
                var e;
                H.updateVideo({
                    currentVideo: {
                        id: null !== (e = S[E]) && void 0 !== e ? e : "",
                        index: E
                    }
                })
            }
            ), [E, T, H]);
            const oe = (0,
            r.useContext)(Ze)
              , ae = (0,
            r.useContext)(ht)
              , re = (0,
            r.useContext)(pt)
              , {height: le} = (0,
            We.l)();
            (0,
            r.useEffect)(( () => {
                U(!0)
            }
            ), []);
            const se = (0,
            o.wA)(y.w)
              , de = (0,
            r.useRef)(null)
              , {shouldUseIOSPlayer: ue} = Fe();
            (e => {
                const {defaultMute: t} = tr[e]
                  , i = (0,
                h._B)();
                (0,
                r.useEffect)(( () => {
                    t || i.setMobileDefaultMute(!1)
                }
                ), [t, i])
            }
            )(j),
            (0,
            r.useEffect)(( () => {
                ue && oe.setVideoRef(de)
            }
            ), [ue, oe]);
            const {item: pe} = (0,
            gt.y)(null !== (i = S[F]) && void 0 !== i ? i : "")
              , he = ft(pe, "video")
              , ge = xt(pe, B)
              , {showVideoMask: ve} = (0,
            ai.Fg)({
                item: pe,
                list: S
            })
              , {handleSwiperInit: ye} = function(e) {
                const {showVideoMask: t=!1, skipUpdate: i, onSlideChange: n, videoItem: a, onSlideChangeTransitionEnd: l} = e
                  , s = (0,
                r.useContext)(pt)
                  , u = (0,
                r.useContext)(qe.oA)
                  , p = (0,
                r.useContext)(qe.dk)
                  , h = (0,
                r.useContext)(Ze)
                  , m = (0,
                d.Hy)()
                  , g = (0,
                o.wA)(Tt.M)
                  , {currentIndex: v} = p
                  , y = (0,
                r.useRef)(v);
                y.current = v;
                const {shouldUseIOSPlayer: x} = Fe()
                  , f = (0,
                Xa._g)(( () => {
                    s.setShowPlayer(!1)
                }
                ), [s], 100)
                  , b = (0,
                r.useCallback)(( () => {
                    var n, o, a, r, l;
                    setTimeout(( () => {
                        s.setShowPlayer(!0)
                    }
                    ), 10),
                    t || null === (a = null === (o = null === (n = h.videoRef) || void 0 === n ? void 0 : n.current) || void 0 === o ? void 0 : o.play) || void 0 === a || a.call(o),
                    x || i || m.updateVideo({
                        currentVideo: {
                            id: null !== (r = e.list[y.current]) && void 0 !== r ? r : "",
                            index: null !== (l = y.current) && void 0 !== l ? l : 0
                        }
                    }),
                    e.onSlideReady && e.onSlideReady(v)
                }
                ), [s, t, x, e, v, h.videoRef, m, i])
                  , k = (0,
                r.useCallback)((e => {
                    var t;
                    g.setIsFlip(!1);
                    const i = null !== (t = e.activeIndex) && void 0 !== t ? t : 0;
                    u.setCurrentIndex(i),
                    s.setIsFirstPlay(!0)
                }
                ), [s, g, u])
                  , _ = (0,
                r.useCallback)((e => {
                    var t;
                    const i = null !== (t = e.activeIndex) && void 0 !== t ? t : 0
                      , o = e.previousIndex
                      , {authorId: r=""} = (0,
                    c.L$)(a);
                    null == l || l(i),
                    null == n || n(i, o, r)
                }
                ), [v, n, l, a])
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
                    u.bindHandleActiveIndexChange(k),
                    u.bindHandleSliderMove(f),
                    u.bindHandleTransitionEnd(b),
                    u.bindHandleSlideChangeEnd(_)
                }
                ), [b, _, u, f, k]);
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
              , xe = (0,
            x.mx)(pe)
              , fe = (0,
            r.useRef)(null);
            !function(e) {
                const t = (0,
                r.useContext)(qe.dk)
                  , {currentIndex: i} = t
                  , n = (0,
                r.useContext)(pt)
                  , a = (0,
                o.wA)(Tt.M)
                  , l = (0,
                r.useContext)(Ze)
                  , s = (0,
                r.useContext)(qe.oA)
                  , {loop: d} = (0,
                v.Qt)()
                  , {shouldUseIOSPlayer: c} = Fe()
                  , u = (0,
                r.useRef)();
                (0,
                r.useEffect)(( () => {
                    l.bindhandleStatusChanged((e => {
                        if (n.setVideoStatus(e),
                        c) {
                            "playing" === e && n.state.isFirstPlay && n.setIsFirstPlay(!1);
                            const t = "pause" === e || "error" === e;
                            n.setShowPause(t)
                        } else {
                            const t = !("playing" === e || "waiting" === e || "ended" === e);
                            n.setShowPause(t)
                        }
                        if ("waiting" === e)
                            return void (u.current = window.setTimeout(( () => {
                                n.setIsPlaying(!0),
                                c && n.setShowPause(!1)
                            }
                            ), 1e3));
                        clearTimeout(u.current);
                        const t = "playing" === e;
                        n.setIsPlaying(t)
                    }
                    ))
                }
                ), [c, n, l]),
                (0,
                r.useEffect)(( () => {
                    e && n.setShowPause(!1)
                }
                ), [e, n, i]),
                (0,
                r.useEffect)(( () => {
                    l.bindHandleEnded(( () => {
                        var e;
                        a.setIsFlip(!0),
                        d || null === (e = s.swiper) || void 0 === e || e.slideNext()
                    }
                    ))
                }
                ), [s, i, n, l, d, a])
            }(xe),
            (0,
            $e.NU)({
                group_id: S[F],
                author_id: null !== (m = null == pe ? void 0 : pe.authorId) && void 0 !== m ? m : "",
                page_type: T
            });
            const {video: be, itemMute: ke=!1} = (0,
            c.L$)(pe)
              , {subtitleInfos: _e=[]} = (0,
            c.L$)(be)
              , we = (0,
            Ve.IB)(_e)
              , {showUnMuteBtn: Ce} = (0,
            ai.Iv)({
                itemCopyrightMute: ke
            })
              , Se = (0,
            r.useMemo)(( () => P ? null != ke && ke : ee || ke), [P, ke, ee]);
            (0,
            r.useEffect)(( () => {
                0 !== j && Q.setCanRetry(!1)
            }
            ), [Q, j]),
            (0,
            r.useEffect)(( () => {
                var e, t;
                const i = null === (e = oe.videoRef) || void 0 === e ? void 0 : e.current;
                null === (t = null == i ? void 0 : i.play) || void 0 === t || t.call(i)
            }
            ), [oe.videoRef, ee]);
            const je = (0,
            r.useCallback)(( () => {
                var e, t, i, n, o, a, r, l, s, d;
                const c = null === (e = oe.videoRef) || void 0 === e ? void 0 : e.current;
                if (G.setShowPlayBtn(!0),
                Ce)
                    return Ne.p.handleVideoUnmuteButtonClicked(),
                    void Q.setMobileDefaultMute(!1);
                if (xe) {
                    const e = null === (t = null == fe ? void 0 : fe.current) || void 0 === t ? void 0 : t.swiper
                      , s = null === (i = null == fe ? void 0 : fe.current) || void 0 === i ? void 0 : i.audio;
                    return (null == e ? void 0 : e.paused) ? (null === (n = null == e ? void 0 : e.play) || void 0 === n || n.call(e),
                    null === (o = null == s ? void 0 : s.play) || void 0 === o || o.call(s)) : (null === (a = null == e ? void 0 : e.pause) || void 0 === a || a.call(e, "click_pause"),
                    null === (r = null == s ? void 0 : s.pause) || void 0 === r || r.call(s)),
                    re.setIsPlaying(!(null == e ? void 0 : e.paused)),
                    void re.setShowPause(null !== (l = null == e ? void 0 : e.paused) && void 0 !== l && l)
                }
                ae.isPlaying ? null === (s = null == c ? void 0 : c.pause) || void 0 === s || s.call(c) : null === (d = null == c ? void 0 : c.play) || void 0 === d || d.call(c)
            }
            ), [Q, xe, G, ae.isPlaying, re, Ce, oe.videoRef])
              , Te = null === (k = oe.videoRef) || void 0 === k ? void 0 : k.current;
            (0,
            yt.kU)({
                videoDom: Te,
                subtitleUrl: we,
                shouldUsePlayer: null != ue && ue
            });
            const {loading: Me, handleCanPlayWithLoading: Ie, handlePauseWithLoading: Ae, handlePlayingWithLoading: Pe, handleWaitingWithLoading: Ee, handleErrorWithLoading: Oe} = (0,
            f.iJ)({
                isCurrentVideo: !0
            })
              , Le = (0,
            r.useCallback)(( (e, t) => {
                F === t && (e ? Ee() : Ie())
            }
            ), [Ee, Ie, F]);
            (0,
            r.useEffect)(( () => () => se.setHasClosedMask(!1)), [se]);
            const De = E && E >= 0
              , [Be,Re] = (0,
            r.useState)(q)
              , ze = (0,
            a.Nj)(ce.Gs)
              , Ye = (0,
            a.Nj)(wt);
            (0,
            r.useEffect)(( () => {
                Re(!0),
                ze.reset()
            }
            ), [ze]);
            const Je = (0,
            r.useCallback)(( () => {
                if (ge) {
                    const {author_id: e, group_id: t} = ge;
                    Ye.handleVideoButtonClick({
                        group_id: t,
                        author_id: e
                    })
                }
            }
            ), [Ye, ge])
              , Qe = (0,
            r.useCallback)(( () => {
                if (ge) {
                    const {author_id: e, group_id: t} = ge;
                    Ye.handleVideoButtonShow({
                        group_id: t,
                        author_id: e
                    })
                }
            }
            ), [Ye, ge])
              , Ke = (0,
            r.useCallback)(( () => {
                te && te && de.current && "hidden" === document.visibilityState && "function" == typeof de.current.pause && de.current.pause()
            }
            ), [te, de])
              , Xe = Y ? {
                noSwipingClass: b.dj
            } : {}
              , {CtaWrapperComponent: et, triggerClick: tt} = (0,
            Ge.Z)({
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
              , nt = (0,
            r.useCallback)((e => {
                if (ie && ne && F === ne - 1 && !$) {
                    const {startY: t, currentY: i} = e.touches;
                    t - i > 150 && !it.current && (tt(),
                    it.current = !0)
                }
                V.handleSliderMove()
            }
            ), [ie, ne, F, it, tt, V.handleSliderMove])
              , ot = (0,
            r.useCallback)(( () => {
                it.current = !1,
                V.handleTransitionEnd()
            }
            ), [it, V.handleTransitionEnd])
              , at = Be ? (0,
            n.jsx)(s.RC, Object.assign(Object.assign({
                autoHeight: !0,
                initialSlide: De ? E : F,
                direction: "vertical",
                speed: 200,
                onSlideChangeTransitionEnd: V.handleSlideChangeEnd,
                onSlideChangeTransitionStart: V.handleSlideChangeStart,
                onTransitionEnd: ot,
                onSlideChange: V.handleSlideChange,
                onSliderMove: nt,
                onActiveIndexChange: V.handleActiveIndexChange,
                onInit: ye
            }, Xe), {
                children: S.slice(0, ne).map(( (e, t) => (0,
                n.jsx)(s.qr, {
                    children: (0,
                    n.jsx)(Ka, {
                        pageType: T,
                        playMode: j,
                        index: t,
                        id: e,
                        list: S,
                        height: "100%",
                        paddingBottom: "52px",
                        muted: Se,
                        showImage: (!ae.showPlayer || ae.isFirstPlay) && z,
                        showPause: ae.showPause,
                        loading: !ae.showPause && Me,
                        teaExtraParams: B,
                        onClick: je,
                        hasFooterBar: M,
                        isHideAuthor: A,
                        hideOperator: I,
                        onClose: L,
                        onLinkClick: O,
                        skipRenderSlide: J,
                        photoVideoRef: fe,
                        onLoadingStatusChanged: Le
                    })
                }, e)))
            })) : (0,
            n.jsx)(Ka, {
                pageType: T,
                index: 0,
                list: S,
                id: S[0],
                playMode: j,
                height: "100%",
                paddingBottom: "52px",
                muted: Se,
                showImage: (!ae.showPlayer || ae.isFirstPlay) && z,
                showPause: ae.showPause,
                loading: !ae.showPause && Me,
                teaExtraParams: B,
                onClick: je,
                hasFooterBar: M,
                isHideAuthor: A,
                hideOperator: I,
                onClose: L,
                onLinkClick: O,
                skipRenderSlide: J,
                photoVideoRef: fe,
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
                    er.fU)())
                        return !1;
                    const n = window.innerHeight - (null === (i = e.current) || void 0 === i ? void 0 : i.clientHeight) != 49;
                    return Boolean(t) && (0,
                    er.qk)() && n
                }
                ), [t, e.current])
            }
            )(rt)
              , {showPlayer: st} = ae;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)("link", {
                    rel: "stylesheet",
                    href: l
                }), ie && et, (0,
                n.jsx)(nr, {
                    swiperHeight: le,
                    forceHeight: lt,
                    noBannerMode: !0,
                    "data-e2e": D,
                    ref: rt,
                    children: at
                }), !W && ue && (xe ? (0,
                n.jsx)(Ue, {
                    show: st,
                    ref: fe,
                    playMode: j,
                    item: pe,
                    teaParams: ge,
                    index: F,
                    onAudioPlay: Pe
                }) : (0,
                n.jsx)(me, {
                    bitrateInfo: null === (_ = null == pe ? void 0 : pe.video) || void 0 === _ ? void 0 : _.bitrateInfo,
                    src: null !== (C = null === (w = null == pe ? void 0 : pe.video) || void 0 === w ? void 0 : w.playAddr) && void 0 !== C ? C : "",
                    autoPlay: !ve,
                    muted: Se,
                    isGoogleBot: W,
                    horizontal: he,
                    platform: "ios",
                    playMode: j,
                    index: F,
                    currentIndex: F,
                    teaParams: ge,
                    visibility: st,
                    ref: de,
                    onVideoStatusChanged: oe.handleStatusChanged,
                    onVideoEnded: oe.handleEnded,
                    onVideoCanPlay: Ie,
                    onVideoPause: Ae,
                    onVideoPlay: Ke,
                    onVideoPlaying: Pe,
                    onVideoWaiting: Ee,
                    onVideoError: Oe,
                    onInteract: Je,
                    onInteractRequired: Qe,
                    onLoadingStatusChanged: Le,
                    playerTypeConfig: Z
                }))]
            })
        }
        )),
        function(e) {
            const t = (0,
            r.useContext)(tt)
              , i = (0,
            r.useContext)(qe.oA)
              , o = (0,
            r.useContext)(Ze)
              , a = (0,
            r.useMemo)(( () => ({
                swiperContext: i,
                videoContext: o,
                favorContext: t
            })), [i, o, t])
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
                                var t, i, n, o;
                                null === (o = null === (n = null === (i = null === (t = e.videoContext) || void 0 === t ? void 0 : t.videoRef) || void 0 === i ? void 0 : i.current) || void 0 === n ? void 0 : n.play) || void 0 === o || o.call(n)
                            }
                            )),
                            t.pause = lt((function() {
                                var t, i, n, o;
                                null === (o = null === (n = null === (i = null === (t = e.videoContext) || void 0 === t ? void 0 : t.videoRef) || void 0 === i ? void 0 : i.current) || void 0 === n ? void 0 : n.pause) || void 0 === o || o.call(n)
                            }
                            )),
                            t.stop = lt((function() {
                                var i, n, o, a;
                                t.pause(),
                                null === (a = null === (o = null === (n = null === (i = e.videoContext) || void 0 === i ? void 0 : i.videoRef) || void 0 === n ? void 0 : n.current) || void 0 === o ? void 0 : o.seek) || void 0 === a || a.call(o, 0)
                            }
                            )),
                            t.like = lt((function() {
                                e.favorContext.doFavor()
                            }
                            )),
                            Object.freeze(t),
                            window[ot] = t,
                            () => {
                                window[ot] = void 0
                            }
                        }(e)
                          , i = function(e) {
                            if (!document.getElementById(nt) && e) {
                                const t = document.createElement("script");
                                t.setAttribute("id", nt),
                                t.textContent = Object.keys(e).map((e => `function ${e}() {return ${ot}.${e}();}`)).join("\n"),
                                document.body.append(t)
                            }
                            return st
                        }(window[ot]);
                        return () => {
                            i(),
                            t()
                        }
                    }(a)
            }
            ), [a, l]),
            (0,
            n.jsx)(rr, Object.assign({}, e))
        }
        );
        var rr;
        const lr = (0,
        r.memo)((e => (0,
        n.jsx)(Xe, {
            children: (0,
            n.jsx)(qe.dQ, {
                children: (0,
                n.jsx)(mt, {
                    children: (0,
                    n.jsx)(it, {
                        children: (0,
                        n.jsx)(ar, Object.assign({}, e))
                    })
                })
            })
        })))
    }
    ,
    98014: (e, t, i) => {
        i.d(t, {
            mr: () => l
        });
        var n, o, a = i(16891), r = i(2584);
        !function(e) {
            e.MainPage = "main_page",
            e.VideoFeed = "video_feed",
            e.VideoDetail = "video_detail"
        }(n || (n = {})),
        function(e) {
            e.Close = "close",
            e.CaptionSeeMore = "caption_see_more",
            e.Hashtag = "hashtag",
            e.Music = "music",
            e.User = "user"
        }(o || (o = {}));
        const l = {
            handleChannelGeneralClick: (e, t="main_page", i={}) => {
                r.O.handleGeneralClick(e, Object.assign({
                    scene: t
                }, i))
            }
            ,
            handleDownloadDismiss: e => {
                a.f.sendEvent("download_app_dismiss", {
                    enter_method: e
                })
            }
            ,
            handleInfoCardShow: e => {
                a.f.sendEvent("info_card_show", e)
            }
            ,
            handleInfoCardClick: e => {
                a.f.sendEvent("info_card_click", e)
            }
            ,
            handleShowItemTags: e => {
                a.f.sendEvent("query_tag_show", e)
            }
        }
    }
    ,
    5412: (e, t, i) => {
        i.d(t, {
            ao: () => d
        });
        var n, o, a = i(58632), r = i(16891), l = i(92603), s = i(40040);
        !function(e) {
            e[e.Loading = 0] = "Loading",
            e[e.Loaded = 1] = "Loaded"
        }(n || (n = {})),
        function(e) {
            e.Original = "original",
            e.Reply = "reply",
            e.ReplyToReply = "reply_to_reply"
        }(o || (o = {}));
        const d = {
            handleCommentClick: e => {
                r.f.sendEvent("click_comment_button", e)
            }
            ,
            handleCommentLike: e => {
                var {isLike: t} = e
                  , i = (0,
                a.Tt)(e, ["isLike"]);
                const n = t ? "like_comment" : "cancel_like_comment";
                r.f.sendEvent(n, i)
            }
            ,
            handlePostComment: e => {
                const t = (0,
                l.Hd)(s.DK);
                r.f.sendEvent("post_comment", Object.assign(Object.assign({}, e), {
                    from_group_id: t
                }))
            }
            ,
            handleShowMoreReply: e => {
                r.f.sendEvent("show_more_reply", e)
            }
            ,
            handleCommentShow: e => {
                r.f.sendEvent("video_comment_show", e)
            }
            ,
            handleSearchAt: e => {
                r.f.sendEvent("search_comment_at", e)
            }
            ,
            handleSelectAt: e => {
                r.f.sendEvent("add_comment_at", e)
            }
            ,
            handleEmojiSelect: e => {
                r.f.sendEvent("search_comment_emoji", e)
            }
            ,
            handleClose: e => {
                r.f.sendEvent("close_comment", e)
            }
            ,
            handleLeaveComment: e => {
                r.f.sendEvent("leave_commet_page", e)
            }
            ,
            handleKeepComment: e => {
                r.f.sendEvent("keep_editing_comment", e)
            }
            ,
            handleCopyCommentUrl: e => {
                r.f.sendEvent("web_comment_url", e)
            }
            ,
            handleTapComment: e => {
                r.f.sendEvent("tap_comment", e)
            }
            ,
            handleCloseCommentTab: () => {
                r.f.sendEvent("close_comment_tab", {
                    enter_method: "click_cancel"
                })
            }
            ,
            handleCloseCommentPanel: e => {
                r.f.sendEvent("close_comment", e)
            }
            ,
            handleMentionItemShow: e => {
                r.f.sendEvent("tag_mention_head_show", Object.assign(Object.assign({}, e), {
                    function: "mention"
                }))
            }
            ,
            handleClickBackToTop: e => {
                r.f.sendEvent("click_back_to_top", e)
            }
            ,
            handleCommentModuleExpose: e => {
                r.f.sendEvent("reply_module_show", {
                    type: e.type
                })
            }
            ,
            handleCommentExpose: e => {
                r.f.sendEvent("reply_show", Object.assign({}, e))
            }
            ,
            handleCommentIconClick: e => {
                r.f.sendEvent("comment_icon_click", e)
            }
            ,
            handleCommentPanelClose: e => {
                r.f.sendEvent("comment_panel_close", e)
            }
            ,
            handleCommentSeeMoreClick: () => {
                r.f.sendEvent("comment_see_more_click")
            }
            ,
            handleCommentLoadComplete: e => {
                r.f.sendEvent("comments_load_complete", e)
            }
            ,
            handleCommentLoadMore: e => {
                r.f.sendEvent("comment_load_more", e)
            }
            ,
            handleCommentPreload: e => {
                r.f.sendEvent("comments_preload", e)
            }
        }
    }
    ,
    48720: (e, t, i) => {
        i.d(t, {
            $: () => a
        });
        var n, o = i(16891);
        !function(e) {
            e.On = "on",
            e.Off = "off"
        }(n || (n = {}));
        const a = {
            handleManageFeedsPopUp: () => {
                o.f.sendEvent("manage_feeds_pop_up")
            }
            ,
            handleClickManageFeeds: () => {
                o.f.sendEvent("click_manage_feeds")
            }
            ,
            handleCloseManageFeedsPopUp: () => {
                o.f.sendEvent("close_manage_feeds_pop_up")
            }
            ,
            handleSwitchPersonalizationToggle: e => {
                o.f.sendEvent("switch_personalization_toggle", e)
            }
            ,
            handleConfirmPersonalizationStatusChange: e => {
                o.f.sendEvent("confirm_personalization_status_change", e)
            }
            ,
            handleShowSuggestedAccountInfo: () => {
                o.f.sendEvent("show_suggested_account_info")
            }
            ,
            handleShowManageFeedsHalfSheet: () => {
                o.f.sendEvent("show_manage_feeds_half_sheet")
            }
            ,
            handleClickInManageFeedsHalfSheet: () => {
                o.f.sendEvent("click_in_manage_feeds_half_sheet")
            }
            ,
            handleCloseManageFeedsHalfSheet: () => {
                o.f.sendEvent("close_manage_feeds_half_sheet")
            }
        }
    }
    ,
    50289: (e, t, i) => {
        i.d(t, {
            s: () => s
        });
        var n = i(24643)
          , o = i(62186)
          , a = i(80574)
          , r = i(72153);
        const l = (0,
        o.A)("span", {
            target: "e1aglo370"
        })(( ({width: e, height: t, style: i={}, theme: {direction: n}}) => [(0,
        r.mp)({
            direction: n,
            marginStart: "4px"
        }), Object.assign(Object.assign({}, i), {
            width: "number" == typeof e ? `${e}px` : e,
            height: "number" == typeof t ? `${t}px` : t
        })]), "label:SpanVerifyBadgeContainer;")
          , s = e => (0,
        n.jsx)(l, Object.assign({}, e, {
            children: (0,
            n.jsx)(a.V, {
                size: "number" == typeof e.width ? e.width : void 0
            })
        }))
    }
    ,
    87905: (e, t, i) => {
        i.d(t, {
            d: () => c
        });
        var n = i(58632)
          , o = i(24643)
          , a = i(40099)
          , r = i(62186);
        const l = (0,
        r.A)("div", {
            target: "eoeunh00"
        })(( ({checked: e, backgroundColor: t, width: i, height: n, theme: {colors: o}}) => ({
            position: "relative",
            width: null != i ? i : "44px",
            height: null != n ? n : "24px",
            left: "0",
            top: "0",
            background: null != t ? t : e ? "#0be09b" : o.LineSecondary,
            borderRadius: "100px",
            transition: "all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1)",
            ":hover": {
                background: null != t ? t : e ? "linear-gradient(0deg, rgba(0, 0, 0, .08), rgba(0, 0, 0, .08)), #0be09b" : "rgba(22, 24, 35, 0.16)"
            }
        })), "label:DivSwitchWrapper;")
          , s = (0,
        r.A)("span", {
            target: "eoeunh01"
        })(( ({checked: e, height: t, width: i, backgroundColor: n, left: o}) => ({
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: null != i ? i : "20px",
            height: null != t ? t : "20px",
            left: o,
            top: "50%",
            transform: e ? "translate(-100%, -50%);" : "translateY(-50%)",
            borderRadius: "100px",
            background: null != n ? n : "#fff",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.15)",
            transition: "all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1)"
        })), "label:SpanSwitchIcon;")
          , d = (0,
        r.A)("button", {
            target: "eoeunh02"
        })(( ({theme: {colors: e, typography: t, fontFamilies: i}}) => [t.P2, {
            border: "none",
            background: "none",
            outline: "none",
            padding: 0,
            position: "relative",
            overflow: "visible",
            display: "inline-flex",
            alignItems: "center",
            color: e.TextPrimary,
            fontFamily: i.TikTokFont,
            cursor: "pointer",
            ":disabled": {
                cursor: "not-allowed",
                opacity: .34
            }
        }]), "label:ButtonSwitchContainer;")
          , c = function(e) {
            var {className: t, style: i={}, size: r="medium", width: c=44, height: u=24, padding: p=2, indicatorSize: h=20, indicatorColor: m, indicatorCheckedColor: g, indicatorUnCheckedColor: v, indicatorIcon: y, indicatorCheckedIcon: x, indicatorUnCheckedIcon: f, backgroundColor: b, backgroundCheckedColor: k, backgroundUnCheckedColor: _, content: w="", disabled: C=!1, checked: S, defaultChecked: j=!1, e2eData: T, ariaLabel: M, ariaLabelledby: I, ariaDescribedby: A, onChange: P} = e
              , E = (0,
            n.Tt)(e, ["className", "style", "size", "width", "height", "padding", "indicatorSize", "indicatorColor", "indicatorCheckedColor", "indicatorUnCheckedColor", "indicatorIcon", "indicatorCheckedIcon", "indicatorUnCheckedIcon", "backgroundColor", "backgroundCheckedColor", "backgroundUnCheckedColor", "content", "disabled", "checked", "defaultChecked", "e2eData", "ariaLabel", "ariaLabelledby", "ariaDescribedby", "onChange"]);
            const [O,L] = (0,
            a.useState)(null != S ? S : j)
              , D = null != S ? S : O
              , B = (0,
            a.useCallback)((e => {
                null == e || e.stopPropagation(),
                null == P || P(!D, e),
                L(!D)
            }
            ), [P, D]);
            return (0,
            a.useEffect)(( () => {
                L(null != S ? S : j)
            }
            ), [j, S]),
            (0,
            o.jsx)(d, Object.assign({
                "data-e2e": T,
                type: "button",
                role: "switch",
                disabled: C,
                onClick: B,
                style: i,
                "aria-checked": D,
                "aria-label": M,
                "aria-labelledby": I,
                "aria-describedby": A,
                className: t
            }, E, {
                children: (0,
                o.jsx)(l, Object.assign({
                    checked: D,
                    backgroundColor: D ? null != k ? k : b : null != _ ? _ : b,
                    width: `${c}px`,
                    height: `${u}px`
                }, {
                    children: (0,
                    o.jsx)(s, Object.assign({
                        checked: D,
                        backgroundColor: D ? null != g ? g : m : null != v ? v : m,
                        width: `${h}px`,
                        height: `${h}px`,
                        left: D ? `calc(100% - ${p}px)` : `${p}px`
                    }, {
                        children: D ? null != x ? x : y : null != f ? f : y
                    }))
                }))
            }))
        }
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
