"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[3152], {
    22371: (e, t, s) => {
        s.d(t, {
            K: () => u
        });
        var i = s(58632)
          , n = s(64162)
          , o = s(4126)
          , r = s(93995);
        let u = class extends n.E {
            constructor() {
                super(...arguments),
                this.defaultState = {
                    isOpen: !1,
                    type: "suggest"
                }
            }
            resetAll(e) {
                e.isOpen = !1,
                e.type = "suggest"
            }
            setUserListPanelOpen(e, t) {
                e.isOpen = t
            }
            setType(e, t) {
                e.type = t
            }
        }
        ;
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object]), (0,
        i.Sn)("design:returntype", void 0)], u.prototype, "resetAll", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Boolean]), (0,
        i.Sn)("design:returntype", void 0)], u.prototype, "setUserListPanelOpen", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, String]), (0,
        i.Sn)("design:returntype", void 0)], u.prototype, "setType", null),
        u = (0,
        i.Cg)([(0,
        r.n)("MobileUserListPanelModule")], u)
    }
    ,
    28251: (e, t, s) => {
        s.d(t, {
            E8: () => _,
            N4: () => O,
            ZI: () => w,
            _E: () => j,
            b8: () => A,
            qx: () => q,
            tg: () => I
        });
        var i = s(24643)
          , n = s(13392)
          , o = s(40099)
          , r = s(11060)
          , u = s(60751)
          , a = s(60484)
          , d = s(49057)
          , l = s(51356)
          , g = s(30721)
          , c = s(40173)
          , p = s(88920)
          , h = s(81761)
          , y = s(67982)
          , L = s(99226)
          , m = s(21884)
          , v = s(76791)
          , S = s(32381)
          , b = s(80938)
          , C = s(93129)
          , U = s(10383)
          , f = s(62798);
        function I() {
            const {language: e="en", region: t, user: s, appType: i, abTestVersion: n} = (0,
            a.L$)((0,
            d.W)(( () => ["language", "region", "user", "appType", "abTestVersion"]), []))
              , {uniqueId: u} = (0,
            r.g)();
            return (0,
            o.useMemo)(( () => Object.assign({
                language: e,
                region: t,
                user: s,
                appType: i,
                abTestVersion: n
            }, (0,
            l.b_)(u))), [e, u, t, s, i, n])
        }
        const O = () => {
            const e = (0,
            n.wA)(U.R)
              , t = I();
            (0,
            o.useEffect)(( () => (e.getUserInfo(t),
            e.resetMobileUserPage)), [e, t])
        }
          , A = () => {
            const {language: e="en"} = (0,
            a.L$)((0,
            d.W)(( () => ["language"]), []))
              , {uniqueId: t="", secUid: s="", statusCode: l=0} = (0,
            n.Ph)(U.R, {
                selector: e => ({
                    uniqueId: e.uniqueId,
                    secUid: e.secUid,
                    statusCode: e.statusCode
                }),
                dependencies: []
            })
              , c = (0,
            n.Ph)(S.m, {
                selector: e => {
                    const s = e.users[t];
                    return s ? {
                        statusCode: l,
                        user: s,
                        stats: e.stats[t]
                    } : {
                        statusCode: l
                    }
                }
                ,
                dependencies: [l, t]
            })
              , {user: p} = (0,
            a.L$)(c)
              , {id: h, relation: y} = (0,
            a.L$)(p)
              , m = 1 === y || 2 === y
              , {uniqueId: b} = (0,
            r.g)()
              , C = (0,
            o.useMemo)(( () => ({
                pageType: 1,
                user: p
            })), [p])
              , f = !L.x0.includes(c.statusCode)
              , I = (0,
            v.b3)({
                uniqueId: b,
                secUid: b
            })
              , O = I ? 8 : 1
              , A = (0,
            r.W6)()
              , _ = (0,
            o.useCallback)(( () => {
                A.push(`/setting?lang=${e}`)
            }
            ), [e, A])
              , {isEchoShow: j} = (0,
            g.Qt)()
              , q = !I
              , w = I || !j
              , x = I ? (0,
            i.jsx)(u.A, {
                width: 24,
                height: 24
            }) : void 0
              , M = I ? _ : void 0
              , $ = (0,
            o.useRef)(null)
              , T = (0,
            o.useRef)(null);
            return {
                userData: c,
                pageInfo: C,
                isError: f,
                uniqueId: t,
                uid: h,
                secUid: s,
                isProfile: I,
                showHeaderLeft: q,
                showHeaderRight: w,
                headerRightIcon: x,
                pageType: O,
                isFollow: m,
                followBtnRef: $,
                bottomBannerRef: T,
                handleRightAreaClick: M
            }
        }
        ;
        function _({user: e, listKey: t}) {
            const {language: s, region: i, user: r, abTestVersion: u} = (0,
            a.L$)((0,
            d.W)(( () => ["language", "region", "user", "abTestVersion"]), []))
              , [l,c] = (0,
            n.Su)(b.Y, {
                selector: e => {
                    var s;
                    return null !== (s = null == e ? void 0 : e[t]) && void 0 !== s ? s : {
                        list: [],
                        loading: !1,
                        hasMore: !0
                    }
                }
                ,
                dependencies: [t]
            })
              , [{cursor: p},h] = (0,
            n.Su)(U.R, {
                selector: e => ({
                    cursor: e.answerList.cursor
                }),
                dependencies: []
            })
              , {loading: y, hasMore: L} = l
              , {itemCount: v} = (0,
            g.Uo)()
              , {secUid: S=""} = (0,
            a.L$)(e);
            return {
                loadUserVideoList: (0,
                o.useCallback)(( () => {
                    !y && L && ("user-post" === t || "user-liked" === t ? c.getUserVideoList({
                        language: s,
                        secUid: S,
                        key: t,
                        countLimit: v,
                        user: r,
                        abTestVersion: u
                    }) : "question" === t ? h.getAnswerList({
                        query: {
                            secUid: S,
                            count: m.T0,
                            cursor: p,
                            region: i,
                            scene: 107
                        },
                        language: s,
                        user: r
                    }) : t && c.getMixList({
                        mixId: t,
                        language: s,
                        scene: 104,
                        user: r,
                        abTestVersion: u
                    }))
                }
                ), [y, L, t, c, s, S, v, r, h, p, i, u])
            }
        }
        const j = () => {
            const e = (0,
            c.s)()
              , {language: t} = (0,
            a.L$)((0,
            d.W)(( () => ["language"]), []))
              , s = (0,
            p.nE)()
              , n = e("Profile")
              , l = s ? e("common_login_panel_title", {}, "Log in to Tiktok") : e("profile_unlogged_text")
              , g = e(s ? "Log In" : "profile_unlogged_button")
              , h = (0,
            r.W6)()
              , y = (0,
            o.useCallback)(( () => {
                h.push(`/setting?lang=${t}`)
            }
            ), [t, h]);
            return {
                title: n,
                desc: l,
                buttonText: g,
                pageInfo: (0,
                o.useMemo)(( () => ({
                    pageType: 1,
                    user: {}
                })), []),
                handleGotoLogin: (0,
                o.useCallback)(( () => {
                    location.href = s ? `${location.origin}/login/?enter_method=enter_personal_homepage&enter_from=personal_homepage&launch_type=0&lang=${t}&redirect_url=${encodeURIComponent(location.href)}` : `${location.origin}/signup/?enter_method=enter_personal_homepage&enter_from=personal_homepage&launch_type=0&lang=${t}&redirect_url=${encodeURIComponent(location.href)}`
                }
                ), [t, s]),
                headerRightIcon: (0,
                i.jsx)(u.A, {
                    width: 24,
                    height: 24
                }),
                handleRightAreaClick: y
            }
        }
          , q = () => {
            const {user: e} = (0,
            a.L$)((0,
            d.W)(( () => ["user"]), []))
              , t = (0,
            r.W6)()
              , s = (0,
            v.nH)()
              , {uniqueId: i, secUid: n} = (0,
            a.L$)(e)
              , u = (0,
            y.l3)({
                uniqueId: i,
                secUid: n
            });
            (0,
            o.useEffect)(( () => {
                if (s) {
                    const e = `/@${u}${location.search}`;
                    t.replace(e)
                }
            }
            ), [t, s, u])
        }
          , w = () => {
            var e, t;
            const [{detailPageVideoSwiperOpen: s, enableClickVideoCta: i},{setShowCtaGuide: r, setAltCtaGuideParams: u, setEnableClickVideoCta: a}] = (0,
            n.Su)(C.i, {
                selector: e => ({
                    detailPageVideoSwiperOpen: e.detailPageVideoSwiperOpen,
                    enableClickVideoCta: e.enableClickVideoCta
                }),
                dependencies: []
            })
              , l = (0,
            h.yq)()
              , {abTestVersion: g} = null !== (e = (0,
            d.W)(( () => ["abTestVersion"]), [])) && void 0 !== e ? e : {}
              , c = null === (t = null == g ? void 0 : g.parameters.user_cta_optimization_user_phase2) || void 0 === t ? void 0 : t.vid;
            (0,
            o.useEffect)(( () => {
                i && s && "v1" === c && "organic" === l && (u({
                    target: "wrapper_video_insert",
                    enterMethod: "video_popup"
                }),
                r(!0))
            }
            ), [i, u, r, a, s, l, c]),
            (0,
            o.useEffect)(( () => {
                var e;
                null === (e = document.getElementById("app-skeleton")) || void 0 === e || e.remove(),
                setTimeout(( () => {
                    a(!0)
                }
                ), f.wh)
            }
            ), [a])
        }
    }
    ,
    10383: (e, t, s) => {
        s.d(t, {
            R: () => Z
        });
        var i = s(58632)
          , n = s(64162)
          , o = s(4126)
          , r = s(93995)
          , u = s(23999)
          , a = s(74690)
          , d = s(63700)
          , l = s(55582)
          , g = s(26324)
          , c = s(24451)
          , p = s(8536)
          , h = s(72916)
          , y = s(80339)
          , L = s(76435)
          , m = s(20259)
          , v = s(36166)
          , S = s(82517)
          , b = s(54888)
          , C = s(53108)
          , U = s(50789)
          , f = s(14374)
          , I = s(71111)
          , O = s(31209);
        const A = (0,
        f._)((0,
        I.atom)({
            uniqueId: void 0
        }), {
            rehydrationKey: "webapp.recommendUserList"
        });
        A.debugLabel = "recommendUserListAtom";
        const {useAtomService: _, useServiceDispatchers: j, useServiceState: q, getStaticApi: w} = (0,
        O.i)(A, ( (e, t) => ({
            setUniqueId(e) {
                t(A, (t => Object.assign(Object.assign({}, t), {
                    uniqueId: e
                })))
            }
        })));
        var x = s(34360);
        let M = class extends n.E {
            constructor() {
                super(...arguments),
                this.defaultState = {
                    uniqueId: void 0
                }
            }
            setUniqueId(e, t) {
                w().setUniqueId(t)
            }
        }
        ;
        M.jotaiAtom = A,
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], M.prototype, "setUniqueId", null),
        M = (0,
        i.Cg)([(0,
        r.n)("RecommendUserList")], M),
        A.__SIGI_MODULE__ = M,
        (0,
        x.y)(M);
        var $ = s(91857)
          , T = s(46859)
          , k = s(21884)
          , P = s(62102)
          , F = s(37062)
          , V = s(32381)
          , E = s(22371)
          , R = s(80938)
          , Q = s(86977)
          , D = s(38203)
          , H = s(97444);
        let W = class {
            constructor(e) {
                this.fetch = e
            }
            getMusicList(e) {
                return this.fetch.get("/api/user/music_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getPlayList(e) {
                return this.fetch.get("/api/user/playlist/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getQuestionList(e) {
                return this.fetch.get("/api/user/question_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getAnswerList(e) {
                return this.fetch.get("/api/user/answer_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
        }
        ;
        W = (0,
        i.Cg)([(0,
        D._)(), (0,
        i.Sn)("design:paramtypes", [H.pM])], W);
        var z = s(10828);
        const B = {
            vid: "v0",
            max_post: 12,
            max_playlist: 12,
            max_qa: 12,
            max_total: 100
        };
        let Z = class extends n.E {
            constructor(e, t, s, i, n, o, r, u, a, d, l) {
                super(),
                this.service = e,
                this.pageService = t,
                this.bizContext = s,
                this.seoModule = i,
                this.seoStateModule = n,
                this.itemList = o,
                this.item = r,
                this.user = u,
                this.recommendUser = a,
                this.accountList = d,
                this.userListPanel = l,
                this.defaultState = {
                    uniqueId: void 0,
                    statusCode: void 0,
                    secUid: void 0,
                    suggestedListOpen: !1,
                    musicList: {
                        loading: !1,
                        loaded: !1,
                        statusCode: 0,
                        list: []
                    },
                    playList: {
                        loading: !1,
                        loaded: !1,
                        statusCode: 0,
                        list: []
                    },
                    questionList: {
                        loading: !1,
                        loaded: !1,
                        statusCode: 0,
                        list: []
                    },
                    answerList: {
                        loading: !1,
                        loaded: !1,
                        statusCode: 0,
                        list: [],
                        cursor: 0
                    }
                }
            }
            setUniqueId(e, t) {
                return Object.assign(Object.assign({}, e), {
                    uniqueId: t
                })
            }
            setSecUid(e, t) {
                return Object.assign(Object.assign({}, e), {
                    secUid: t
                })
            }
            setStatusCode(e, t) {
                return Object.assign(Object.assign({}, e), {
                    statusCode: t
                })
            }
            setSuggestedListOpen(e, t) {
                return Object.assign(Object.assign({}, e), {
                    suggestedListOpen: t
                })
            }
            setLoading(e, t) {
                const {key: s, loading: i, loaded: n} = t;
                return Object.assign(Object.assign({}, e), {
                    [s]: Object.assign(Object.assign({}, e[s]), {
                        loading: i,
                        loaded: n
                    })
                })
            }
            setMusicList(e, t) {
                return Object.assign(Object.assign({}, e), {
                    musicList: t
                })
            }
            setPlaylist(e, t) {
                return Object.assign(Object.assign({}, e), {
                    playList: t
                })
            }
            setQuestionList(e, t) {
                return Object.assign(Object.assign({}, e), {
                    questionList: t
                })
            }
            setAnswerList(e, t) {
                return Object.assign(Object.assign({}, e), {
                    answerList: t
                })
            }
            resetListData(e) {
                return Object.assign(Object.assign({}, e), {
                    musicList: {
                        loading: !1,
                        loaded: !1,
                        statusCode: 0,
                        list: []
                    },
                    playList: {
                        loading: !1,
                        loaded: !1,
                        statusCode: 0,
                        list: []
                    },
                    questionList: {
                        loading: !1,
                        loaded: !1,
                        statusCode: 0,
                        list: []
                    },
                    answerList: {
                        loading: !1,
                        loaded: !1,
                        statusCode: 0,
                        list: [],
                        cursor: 0
                    }
                })
            }
            resetMobileUserPage(e) {
                return e.pipe((0,
                c.E)(this.state$), (0,
                p.Z)(( ([e,{playList: t}]) => {
                    var s;
                    const i = [this.getActions().setUniqueId(void 0), this.recommendUser.getActions().setUniqueId(void 0), this.getActions().setSecUid(void 0), this.getActions().setStatusCode(0), this.itemList.getActions().resetItemList({
                        key: "user-post",
                        loading: !0
                    }), this.itemList.getActions().resetItemList({
                        key: "user-liked",
                        loading: !0
                    }), ...null !== (s = null == t ? void 0 : t.list.map(( ({mixId: e}) => this.itemList.getActions().resetItemList({
                        key: e,
                        loading: !0
                    })))) && void 0 !== s ? s : [], this.itemList.getActions().resetItemList({
                        key: "question",
                        loading: !0
                    }), this.accountList.getActions().resetAllList(), this.userListPanel.getActions().resetAll(), this.getActions().setSuggestedListOpen(!1), this.getActions().resetListData(), this.itemList.getActions().dispose$()];
                    return (0,
                    u.of)(...i)
                }
                )))
            }
            getMusicList(e) {
                return e.pipe((0,
                h.n)((e => this.getMusicList$(e).pipe((0,
                a.Z)(this.getActions().setLoading({
                    key: "musicList",
                    loading: !0,
                    loaded: !1
                })), (0,
                y.q)(this.getActions().setLoading({
                    key: "musicList",
                    loading: !1,
                    loaded: !0
                })), (0,
                L.Q)(this.dispose$)))))
            }
            getMusicList$(e, t, s) {
                const i = null == s ? void 0 : s.strictCountLimit;
                return this.pageService.getMusicList(e).pipe((0,
                p.Z)((e => {
                    const {statusCode: s, musicList: n=[]} = e
                      , o = [(0,
                    u.of)(this.getActions().setMusicList({
                        loading: !1,
                        loaded: !0,
                        statusCode: s,
                        list: i ? n.slice(0, i) : n
                    }))];
                    return t && o.push(t(e)),
                    (0,
                    d.h)(...o)
                }
                )), (0,
                m.W)((e => (console.error(e),
                (0,
                u.of)(this.getActions().setMusicList({
                    loading: !1,
                    loaded: !0,
                    statusCode: -1,
                    list: []
                }))))))
            }
            getPlayList(e) {
                return e.pipe((0,
                h.n)((e => this.getPlayList$(e).pipe((0,
                a.Z)(this.getActions().setLoading({
                    key: "playList",
                    loading: !0,
                    loaded: !1
                })), (0,
                y.q)(this.getActions().setLoading({
                    key: "playList",
                    loading: !1,
                    loaded: !0
                })), (0,
                L.Q)(this.dispose$)))))
            }
            getPlayList$(e, t) {
                return this.pageService.getPlayList(e).pipe((0,
                p.Z)((e => {
                    const {statusCode: s, playList: i=[]} = e
                      , n = [(0,
                    u.of)(this.getActions().setPlaylist({
                        loading: !1,
                        loaded: !0,
                        statusCode: s,
                        list: i
                    }))];
                    return t && n.push(t(e)),
                    (0,
                    d.h)(...n)
                }
                )), (0,
                m.W)((e => (console.error(e),
                (0,
                u.of)(this.getActions().setPlaylist({
                    loading: !1,
                    loaded: !0,
                    statusCode: -1,
                    list: []
                }))))))
            }
            getQuestionList(e) {
                return e.pipe((0,
                h.n)((e => this.getQuestionList$(e).pipe((0,
                a.Z)(this.getActions().setLoading({
                    key: "questionList",
                    loading: !0,
                    loaded: !1
                })), (0,
                y.q)(this.getActions().setLoading({
                    key: "questionList",
                    loading: !1,
                    loaded: !0
                })), (0,
                L.Q)(this.dispose$)))))
            }
            getQuestionList$(e, t) {
                const s = null == t ? void 0 : t.strictCountLimit;
                return this.pageService.getQuestionList(e).pipe((0,
                p.Z)((e => {
                    const {statusCode: t, questionList: i=[]} = e;
                    return (0,
                    u.of)(this.getActions().setQuestionList({
                        loading: !1,
                        loaded: !0,
                        statusCode: t,
                        list: s ? i.slice(0, s) : i
                    }))
                }
                )), (0,
                m.W)((e => (console.error(e),
                (0,
                u.of)(this.getActions().setQuestionList({
                    loading: !1,
                    loaded: !0,
                    statusCode: -1,
                    list: []
                }))))))
            }
            getAnswerList(e) {
                return e.pipe((0,
                h.n)((e => this.getAnswerList$(e).pipe((0,
                a.Z)(this.getActions().setLoading({
                    key: "answerList",
                    loading: !0,
                    loaded: !1
                })), (0,
                y.q)(this.getActions().setLoading({
                    key: "answerList",
                    loading: !1,
                    loaded: !0
                })), (0,
                L.Q)(this.dispose$)))))
            }
            getAnswerList$(e, t) {
                const s = null == t ? void 0 : t.strictCountLimit
                  , {query: i, language: n, user: o} = e;
                return this.pageService.getAnswerList(i).pipe((0,
                p.Z)((e => {
                    const {statusCode: t, answerList: i=[], hasMore: r, cursor: a=0} = e
                      , l = i.map(( ({answer: e}) => null == e ? void 0 : e.answerItem)).filter((e => Boolean(e)))
                      , g = [(0,
                    u.of)(this.getActions().setAnswerList({
                        loading: !1,
                        loaded: !0,
                        statusCode: t,
                        list: s ? i.slice(0, s) : i,
                        cursor: Number(a)
                    })), (0,
                    u.of)(this.itemList.getActions().setList({
                        key: "question",
                        response: {
                            statusCode: t,
                            hasMore: r,
                            itemList: l
                        },
                        language: n,
                        user: o
                    }))];
                    return (0,
                    d.h)(...g)
                }
                )), (0,
                m.W)((e => (console.error(e),
                (0,
                u.of)(this.getActions().setAnswerList({
                    loading: !1,
                    loaded: !0,
                    statusCode: -1,
                    list: [],
                    cursor: 0
                }))))))
            }
            getUserInfo(e) {
                return e.pipe((0,
                c.E)(this.user.state$), (0,
                h.n)(( ([e,t]) => {
                    var s, i, n;
                    const {uniqueId: o, language: r="en", region: l, user: g, appType: c, abTestVersion: h} = e
                      , S = o && t.users[o];
                    let b;
                    return b = S ? (0,
                    d.h)(this.seoModule.setUserSEOProps({
                        statusCode: 0,
                        userInfo: {
                            user: S,
                            stats: {}
                        }
                    }, {
                        language: null !== (s = e.language) && void 0 !== s ? s : "en"
                    }, c), this.itemList.getUserVideoList$({
                        secUid: null !== (i = S.secUid) && void 0 !== i ? i : "",
                        language: null !== (n = e.language) && void 0 !== n ? n : "en",
                        key: "user-post",
                        userId: null == S ? void 0 : S.id,
                        countLimit: k.Yp,
                        user: g,
                        abTestVersion: h
                    }), (0,
                    u.of)(this.getActions().setUniqueId(S.uniqueId), this.recommendUser.getActions().setUniqueId(S.uniqueId), this.getActions().setSecUid(S.secUid))) : this.service.getUserDetail(e).pipe((0,
                    p.Z)((t => {
                        var s, i, n, o, {needFix: a} = t, p = function(e, t) {
                            var s = {};
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var n = 0;
                                for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
                                    t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (s[i[n]] = e[i[n]])
                            }
                            return s
                        }(t, ["needFix"]);
                        const {statusCode: y, userInfo: {user: L, stats: m}={}} = p
                          , v = null !== (i = null === (s = this.bizContext.state.bizContext) || void 0 === s ? void 0 : s.isGoogleBot) && void 0 !== i && i
                          , S = [(0,
                        u.of)(this.getActions().setStatusCode(y), this.getActions().setUniqueId(null == L ? void 0 : L.uniqueId), this.recommendUser.getActions().setUniqueId(null == L ? void 0 : L.uniqueId), this.getActions().setSecUid(null == L ? void 0 : L.secUid))];
                        return (null == L ? void 0 : L.id) && (S.push((0,
                        u.of)(this.user.getActions().setUser(L))),
                        m && S.push((0,
                        u.of)(this.user.getActions().setUserStats({
                            stats: Object.assign(Object.assign({}, m), {
                                needFix: a
                            }),
                            uniqueId: L.uniqueId
                        })))),
                        v || 0 !== y && 10222 !== y || S.push(this.itemList.getUserVideoList$({
                            secUid: null !== (n = null == L ? void 0 : L.secUid) && void 0 !== n ? n : "",
                            language: null !== (o = e.language) && void 0 !== o ? o : "en",
                            key: "user-post",
                            userId: null == L ? void 0 : L.id,
                            countLimit: k.Yp,
                            user: g,
                            abTestVersion: h
                        })),
                        (0,
                        d.h)(...S, this.searchbotSSROptimize(p, r, l, g, c, e.seoRenderConfig))
                    }
                    ))),
                    b.pipe((0,
                    m.W)((e => (console.error(e),
                    (0,
                    u.of)(this.getActions().setStatusCode(-1))))), (0,
                    a.Z)(this.getActions().resetMobileUserPage()), (0,
                    y.q)(this.terminate()), (0,
                    L.Q)(this.dispose$), (0,
                    v.j)(( () => this.googlebotImpressionReport(e))))
                }
                )))
            }
            searchbotSSROptimize(e, t, s, i, n, o) {
                var r, u, a;
                const {bizContext: l} = this.bizContext.state
                  , g = null == l ? void 0 : l.isSearchEngineBot
                  , c = null === (r = e.userInfo) || void 0 === r ? void 0 : r.user
                  , p = (0,
                T.F)(e);
                if (!(g && c && c.secUid && p))
                    return this.seoModule.setUserSEOProps(e, {
                        language: t
                    }, n);
                const h = null !== (a = null === (u = c.profileTab) || void 0 === u ? void 0 : u.showMusicTab) && void 0 !== a && a ? this.getMusicList$({
                    userId: c.id,
                    appId: S.xE,
                    count: 18,
                    cursor: 0
                }, (s => this.seoModule.setUserSEOProps(Object.assign(Object.assign({}, e), {
                    musicList: s.musicList
                }), {
                    language: t
                }, n)), {
                    strictCountLimit: 12
                }) : this.seoModule.setUserSEOProps(e, {
                    language: t
                }, n);
                return (0,
                d.h)(h, this.searchbotFetchAccountList(e, t), this.searchbotFetchVideoList(e, t, s, i, n, o))
            }
            searchbotFetchAccountList(e, t) {
                var s, i;
                const n = null === (s = e.userInfo) || void 0 === s ? void 0 : s.user
                  , o = null === (i = e.userInfo) || void 0 === i ? void 0 : i.stats;
                if (!n || !n.secUid)
                    return (0,
                    u.of)(this.noop());
                const {followingVisibility: r, privateAccount: a} = n
                  , l = !a && (null == o ? void 0 : o.followingCount) && 2 !== r || !1
                  , g = !a && (null == o ? void 0 : o.followerCount) || !1
                  , c = [this.accountList.getSuggestedAccount$({
                    count: "22",
                    offset: "0",
                    language: t,
                    needItemList: !1,
                    discoverType: "0",
                    keyWord: "",
                    useRecommend: !0,
                    visitUserId: n.id,
                    targetUserId: n.id
                }, {
                    strictCountLimit: 12
                })];
                return g && c.push(this.accountList.getFollowingOrFollowerListByUid$({
                    uid: n.id,
                    secUid: n.secUid,
                    count: 22,
                    type: "follower"
                }, {
                    strictCountLimit: 12
                })),
                l && c.push(this.accountList.getFollowingOrFollowerListByUid$({
                    uid: n.id,
                    secUid: n.secUid,
                    count: 22,
                    type: "following"
                }, {
                    strictCountLimit: 12
                })),
                (0,
                d.h)(...c)
            }
            searchbotFetchVideoList(e, t, s, i, n, o) {
                var r, a, g, c, p, h, y;
                const L = null !== (a = null === (r = this.seoStateModule.state.abtest) || void 0 === r ? void 0 : r.parameters.m_user_page_count_optimize) && void 0 !== a ? a : B
                  , m = null === (g = e.userInfo) || void 0 === g ? void 0 : g.user;
                if (!m || !m.secUid)
                    return this.seoModule.setUserSEOProps(e, {
                        language: t
                    }, n);
                const {profileTab: S} = m
                  , b = null !== (c = null == S ? void 0 : S.showQuestionTab) && void 0 !== c && c
                  , C = null !== (p = null == S ? void 0 : S.showPlayListTab) && void 0 !== p && p
                  , U = [];
                U.push(this.itemList.getUserVideoList$({
                    secUid: m.secUid,
                    language: null != t ? t : "en",
                    key: "user-post",
                    userId: null == m ? void 0 : m.id,
                    countLimit: L.max_post,
                    user: i
                })),
                b && U.push(this.getQuestionList$({
                    uid: m.id,
                    secUid: m.secUid,
                    count: L.max_qa + 6,
                    cursor: 0,
                    scene: 108,
                    region: s
                }, {
                    strictCountLimit: L.max_qa
                }), this.getAnswerList$({
                    query: {
                        uid: m.id,
                        secUid: m.secUid,
                        count: L.max_qa + 6,
                        cursor: 0,
                        scene: 109,
                        region: s
                    },
                    language: t,
                    user: i
                }, {
                    strictCountLimit: L.max_qa
                }));
                let f = [];
                if (C) {
                    const e = null !== (y = null === (h = null == o ? void 0 : o.mobile_user) || void 0 === h ? void 0 : h.max_playlist_tabs) && void 0 !== y ? y : 2;
                    U.push(this.getPlayList$({
                        uid: m.id,
                        secUid: m.secUid,
                        cursor: "0",
                        count: e,
                        needTotal: !1
                    }, (e => {
                        const s = null == e ? void 0 : e.playList;
                        return (null == s ? void 0 : s.length) ? (f = s.map((e => e.mixId)),
                        (0,
                        d.h)(...f.map((e => this.itemList.getMixList$({
                            mixId: e,
                            language: t,
                            scene: 105,
                            user: i,
                            countLimit: L.max_playlist
                        }))))) : (0,
                        u.of)(this.noop())
                    }
                    )))
                }
                const I = new l.h
                  , O = (0,
                d.h)(...U).pipe((0,
                v.j)(( () => {
                    var e, t, s, i, n, o, r, u;
                    const a = (null !== (t = null === (e = this.itemList.state.question) || void 0 === e ? void 0 : e.list) && void 0 !== t ? t : []).slice(0, L.max_qa)
                      , d = (null !== (i = null === (s = this.itemList.state[f[0]]) || void 0 === s ? void 0 : s.list) && void 0 !== i ? i : []).slice(0, L.max_playlist)
                      , l = (null !== (o = null === (n = this.itemList.state[f[1]]) || void 0 === n ? void 0 : n.list) && void 0 !== o ? o : []).slice(0, L.max_playlist - d.length)
                      , g = (null !== (u = null === (r = this.itemList.state["user-post"]) || void 0 === r ? void 0 : r.list) && void 0 !== u ? u : []).slice(0, L.max_total - a.length - d.length - l.length);
                    I.next(this.itemList.getActions().dangerouslySetState({
                        question: this.toItemListModuleStateValue(a),
                        [f[0]]: this.toItemListModuleStateValue(d),
                        [f[1]]: this.toItemListModuleStateValue(l),
                        "user-post": this.toItemListModuleStateValue(g)
                    })),
                    I.complete()
                }
                )));
                return (0,
                d.h)(O, I)
            }
            toItemListModuleStateValue(e) {
                return {
                    videoList: [],
                    list: e,
                    loading: !1,
                    statusCode: 0,
                    hasMore: !1,
                    cursor: "0",
                    currentIndex: 0
                }
            }
            googlebotImpressionReport(e) {
                var t;
                const {bizContext: s} = this.bizContext.state;
                if (!(null == s ? void 0 : s.isGoogleBot))
                    return;
                const i = Object.values(this.item.state).filter((e => void 0 !== e)).map((e => {
                    var t;
                    return `${z.C}${$.Vm.video({
                        uniqueId: null !== (t = e.author) && void 0 !== t ? t : "",
                        id: e.video.id
                    })}`
                }
                ));
                this.seoModule.reportImpressionByRpc({
                    Timestamp: Date.now().toString(),
                    VisitPageUrl: `${z.C}${$.Vm.user({
                        uniqueId: null !== (t = e.uniqueId) && void 0 !== t ? t : ""
                    })}`,
                    Urls: i,
                    Module: 2,
                    TrafficType: 1
                })
            }
        }
        ;
        (0,
        i.Cg)([(0,
        o.uk)(), (0,
        i.Sn)("design:type", g.c)], Z.prototype, "dispose$", void 0),
        (0,
        i.Cg)([(0,
        o.HI)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], Z.prototype, "setUniqueId", null),
        (0,
        i.Cg)([(0,
        o.HI)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], Z.prototype, "setSecUid", null),
        (0,
        i.Cg)([(0,
        o.HI)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Number]), (0,
        i.Sn)("design:returntype", void 0)], Z.prototype, "setStatusCode", null),
        (0,
        i.Cg)([(0,
        o.HI)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Boolean]), (0,
        i.Sn)("design:returntype", void 0)], Z.prototype, "setSuggestedListOpen", null),
        (0,
        i.Cg)([(0,
        o.HI)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], Z.prototype, "setLoading", null),
        (0,
        i.Cg)([(0,
        o.HI)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], Z.prototype, "setMusicList", null),
        (0,
        i.Cg)([(0,
        o.HI)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], Z.prototype, "setPlaylist", null),
        (0,
        i.Cg)([(0,
        o.HI)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], Z.prototype, "setQuestionList", null),
        (0,
        i.Cg)([(0,
        o.HI)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], Z.prototype, "setAnswerList", null),
        (0,
        i.Cg)([(0,
        o.HI)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object]), (0,
        i.Sn)("design:returntype", void 0)], Z.prototype, "resetListData", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [g.c]), (0,
        i.Sn)("design:returntype", void 0)], Z.prototype, "resetMobileUserPage", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [g.c]), (0,
        i.Sn)("design:returntype", void 0)], Z.prototype, "getMusicList", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [g.c]), (0,
        i.Sn)("design:returntype", void 0)], Z.prototype, "getPlayList", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [g.c]), (0,
        i.Sn)("design:returntype", void 0)], Z.prototype, "getQuestionList", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [g.c]), (0,
        i.Sn)("design:returntype", void 0)], Z.prototype, "getAnswerList", null),
        (0,
        i.Cg)([(0,
        o.Mj)({
            payloadGetter: 1
        }), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [g.c]), (0,
        i.Sn)("design:returntype", void 0)], Z.prototype, "getUserInfo", null),
        Z = (0,
        i.Cg)([(0,
        r.n)("MobileUserPage"), (0,
        i.Sn)("design:paramtypes", [F.S, W, b.$, C.E, U.p, R.Y, Q.c, V.m, M, P.w, E.K])], Z)
    }
    ,
    59166: (e, t, s) => {
        s.d(t, {
            MN: () => r,
            T8: () => u,
            ms: () => a
        });
        var i = s(62186)
          , n = s(42204)
          , o = s(72153);
        const r = (0,
        i.A)("div", {
            target: "eas4dd0"
        })({
            width: "100%",
            height: "calc(100vh - 50px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }, "label:DivProfileContainer;")
          , u = (0,
        i.A)("p", {
            target: "eas4dd1"
        })(( ({theme: e}) => [(0,
        o.zy)({
            theme: e,
            fontFamily: "TikTokFont",
            color: "TextSecondary"
        }), {
            margin: "32px 0 26px",
            fontSize: "14px",
            lineHeight: "17px"
        }]), (0,
        o.jJ)({
            min: n.aU,
            style: {
                fontSize: "26px",
                margin: "52px 0 38px"
            }
        }), "label:PTitle;")
          , a = (0,
        i.A)("div", {
            target: "eas4dd2"
        })([{
            width: "96px",
            height: "96px",
            "> span": {
                width: "100%!important",
                height: "100%!important"
            }
        }, (0,
        o.jJ)({
            min: n.aU,
            style: {
                width: "112px",
                height: "112px"
            }
        })], "label:DivAvatarWrapper;")
    }
}]);
