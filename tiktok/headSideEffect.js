"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[1636], {
    96778: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => $i
        });
        var i = n(24643)
          , o = n(77195)
          , r = n(41271)
          , a = n(50970)
          , s = n(54888)
          , l = n(67518)
          , c = n(46682)
          , p = n(40099)
          , u = n(28591)
          , d = n(58632)
          , g = n(64162)
          , m = n(4126)
          , _ = n(93995)
          , h = n(8536)
          , f = n(62564)
          , b = n(26324)
          , y = n(38203)
          , v = n(97444);
        let P = class {
            constructor(e) {
                this.fetch = e
            }
            getComplianceSettings() {
                return this.fetch.get("/api/compliance/settings/", {
                    query: {
                        aid: 1988,
                        fromWeb: 1
                    }
                })
            }
        }
        ;
        P = (0,
        d.Cg)([(0,
        y._)(), (0,
        d.Sn)("design:paramtypes", [v.pM])], P);
        let x = class extends g.E {
            constructor(e) {
                super(),
                this.service = e,
                this.defaultState = null
            }
            getComplianceSettings(e) {
                return e.pipe((0,
                h.Z)(( () => this.service.getComplianceSettings().pipe((0,
                f.T)((e => (null == e || e.status_code,
                this.noop())))))))
            }
        }
        ;
        (0,
        d.Cg)([(0,
        m.uk)(), (0,
        d.Sn)("design:type", b.c)], x.prototype, "dispose$", void 0),
        (0,
        d.Cg)([(0,
        m.Mj)(), (0,
        d.Sn)("design:type", Function), (0,
        d.Sn)("design:paramtypes", [b.c]), (0,
        d.Sn)("design:returntype", void 0)], x.prototype, "getComplianceSettings", null),
        x = (0,
        d.Cg)([(0,
        _.n)("ComplianceSettingsModule"), (0,
        d.Sn)("design:paramtypes", [P])], x);
        var E = n(60484)
          , k = n(55462)
          , T = n(49057);
        const O = function({iconSrc: e="https://www.tiktok.com/favicon.ico"}) {
            return (0,
            i.jsxs)(u.mg, {
                children: [(0,
                i.jsx)("meta", {
                    name: "google",
                    content: "notranslate"
                }, "google"), ",", (0,
                i.jsx)("meta", {
                    name: "format-detection",
                    content: "telephone=no"
                }, "format-detection"), ",", (0,
                i.jsx)("link", {
                    rel: "shortcut icon",
                    href: e,
                    type: "image/x-icon"
                }, "shortcut")]
            })
        }
          , S = ["//v16.tiktokcdn.com", "//p16-va.tiktokcdn.com", "//s20.tiktokcdn.com"]
          , C = function() {
            return (0,
            i.jsx)(u.mg, {
                children: S.map(( (e, t) => (0,
                i.jsx)("link", {
                    rel: "dns-prefetch",
                    href: e
                }, `prefetch-${t + 1}`)))
            })
        };
        var w = n(73580)
          , j = n(91498)
          , M = n(97086)
          , L = n(72277)
          , A = n(11654)
          , N = n(23721)
          , D = n(82517);
        const I = function({appContext: e, bizContext: t, slardarBid: n, initialPid: o, async: r=!1, reportImage: a}) {
            var s, l;
            const {abTestVersion: c, env: d, botType: g, user: m, wid: _, region: h} = null != e ? e : {}
              , {isMobile: f, domains: b, isTTP: y, idc: v} = null != t ? t : {}
              , P = (0,
            w.Nj)(A.V)
              , x = (0,
            p.useMemo)(( () => {
                var e;
                return Object.assign(Object.assign({
                    region: null != h ? h : "",
                    botType: null != g ? g : "",
                    isMobile: Boolean(f).toString(),
                    isDowngrade: (0,
                    M.qk)().toString(),
                    isLogin: Boolean(m).toString(),
                    isPPE: "ppe" === (null == d ? void 0 : d.type),
                    isLandingPage: 1,
                    launchMode: (0,
                    M.fU)() ? "" : (0,
                    j.o7)()
                }, ( (e={
                    parameters: {},
                    versionName: ""
                }) => {
                    const t = {};
                    try {
                        const n = e.parameters || {};
                        Object.entries(n).forEach(( ([e,n]) => {
                            L.s.includes(e) && (t[e] = n.vid)
                        }
                        ))
                    } catch (e) {
                        console.error("Abtest config parse error", e)
                    }
                    return t
                }
                )(c)), {
                    uid: null !== (e = null == m ? void 0 : m.uid) && void 0 !== e ? e : "",
                    idc: null != v ? v : "unknown"
                })
            }
            ), [h, g, f, m, null == d ? void 0 : d.type, c])
              , {enableInlineScript: E} = (0,
            k.yf)()
              , T = !!a || "v2" === (null === (l = null === (s = null == c ? void 0 : c.parameters) || void 0 === s ? void 0 : s.enable_slardar_image) || void 0 === l ? void 0 : l.vid)
              , O = (0,
            p.useMemo)(( () => Object.assign(Object.assign(Object.assign({}, N.dg), {
                bid: n,
                env: "boe" === (null == d ? void 0 : d.type) || "ppe" === (null == d ? void 0 : d.type) ? "test" : "production",
                domain: null == b ? void 0 : b.slardar,
                disableInit: !0,
                useLocalConfig: "ppe" === (null == d ? void 0 : d.type) || "boe" === (null == d ? void 0 : d.type),
                integrations: [...P.registerImageXPlugin(T, a && "boolean" != typeof a ? a.sample : void 0)]
            }), y ? {
                sdkUrl: "https://lf16-cdn-tos.tiktokcdn-us.com/obj/static-tx/slardar/fe/sdk-web/browser.oci.js",
                pluginPathPrefix: "https://lf16-cdn-tos.tiktokcdn-us.com/obj/static-tx/slardar/fe/sdk-web/plugins"
            } : {})), [null == b ? void 0 : b.slardar, null == d ? void 0 : d.type, y, n])
              , S = (0,
            p.useMemo)(( () => JSON.stringify(O)), [O]);
            return (0,
            p.useEffect)(( () => {
                let e;
                const t = () => {
                    window.SlardarClient ? P.hasStarted() || (P.mountBeforeSendEvent(),
                    P.init(Object.assign(Object.assign({}, O), {
                        pid: o
                    })),
                    P.config({
                        userId: _
                    }),
                    P.start()) : e = window.requestIdleCallback ? window.requestIdleCallback(t) : window.setTimeout(t, 1)
                }
                ;
                return P.context(x),
                "delay_start_until_manually_called" === o ? (P.preserveConfig(O),
                P.preserveExtraInfo({
                    userId: _
                })) : (P.mountBeforeSendEvent(),
                P.init(Object.assign(Object.assign({}, O), {
                    pid: o
                })),
                P.config({
                    userId: _
                }),
                P.start(),
                e = window.requestIdleCallback ? window.requestIdleCallback(t) : window.setTimeout(t, 1)),
                () => {
                    window.cancelIdleCallback ? window.cancelIdleCallback(e) : window.clearTimeout(e)
                }
            }
            ), []),
            !E || (0,
            M._8)(r) ? null : (0,
            i.jsxs)(u.mg, {
                children: [(0,
                i.jsx)("script", {
                    id: "slardar-config",
                    type: "application/json",
                    children: S
                }), r ? (0,
                i.jsx)("script", {
                    src: D.se[y ? "TTP" : "ROW"].slardarWeb,
                    async: "DO_NOT_DELETE_FOR_REHYDRATE_ERROR"
                }) : (0,
                i.jsx)("script", {
                    src: D.se[y ? "TTP" : "ROW"].slardarWeb
                })]
            })
        }
          , R = function({isLogin: e, isFtc: t}) {
            return (0,
            i.jsx)(u.mg, {
                children: (0,
                i.jsx)("meta", {
                    name: "pumbaa-ctx",
                    content: `login=${e ? 1 : 0},ftc=${t ? 1 : 0}`
                })
            })
        }
          , U = function({appContext: e, bizContext: t, slardarBid: n, iconSrc: o, initialPid: r, asyncSlardar: a=!1, usePumbaaMeta: s=!1, slardarReportImage: d}) {
            var g;
            const {language: m} = (0,
            E.L$)(e)
              , {isDark: _} = (0,
            l.u)()
              , {user: h} = null !== (g = (0,
            T.W)(( () => ["user"]), [])) && void 0 !== g ? g : {}
              , {enableHeadComponent: f} = (0,
            k.yf)()
              , b = Boolean(h)
              , y = Boolean(null == h ? void 0 : h.ftcUser)
              , v = (0,
            c.w)(x);
            return (0,
            p.useEffect)(( () => {
                b && v.getComplianceSettings()
            }
            ), [b, v]),
            (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(u.mg, {
                    htmlAttributes: {
                        lang: m,
                        "data-theme": _ ? "dark" : "light"
                    }
                }), (0,
                i.jsx)(O, {
                    iconSrc: o
                }), s && (0,
                i.jsx)(R, {
                    isLogin: b,
                    isFtc: y
                }), f && (0,
                i.jsx)(I, {
                    appContext: e,
                    bizContext: t,
                    slardarBid: n,
                    initialPid: r,
                    async: a,
                    reportImage: d
                }), (0,
                i.jsx)(C, {})]
            })
        };
        var B = n(48211)
          , Y = n(300)
          , z = n.n(Y)
          , H = n(56268)
          , F = n(13549)
          , K = n(98796)
          , W = n(32125)
          , $ = n(10828)
          , V = n(4929)
          , G = n(9472)
          , X = n(78662)
          , q = n(67768);
        function Z(e) {
            return null == e || "number" == typeof e || "boolean" == typeof e ? e : "string" == typeof e ? e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : Array.isArray(e) ? e.map((e => Z(e))) : "[object Object]" === Object.prototype.toString.call(e) ? Object.keys(e).reduce(( (t, n) => (t[n] = Z(e[n]),
            t)), {}) : Z(String(e))
        }
        class J extends p.PureComponent {
            dynamicAddCompKey(e=[]) {
                return e && e.length ? e.map(Z).reduce(( (e, t, n) => {
                    var o;
                    const [r="",a={},s] = t;
                    return "" !== r && 0 !== Object.keys(a).length && e.push((0,
                    i.jsx)(q.hp, {
                        dangerouslyExposeHtml: !0,
                        id: null !== (o = null == s ? void 0 : s.name) && void 0 !== o ? o : r,
                        children: (0,
                        i.jsx)(q.ck, {
                            genericType: r,
                            genericKey: r,
                            schema: a
                        })
                    }, `${r}-${n}`)),
                    e
                }
                ), []) : null
            }
            render() {
                const {wrappedHead: e, metaParams: t={}, jsonldList: n=[], children: o} = this.props
                  , {title: r="", keywords: a="", description: s="", robotsContent: l="", canonicalHref: c="", alternateHref: p="", amphtmlHref: u="", applicableDevice: d="", hreflangList: g=[]} = t;
                return (0,
                i.jsxs)(i.Fragment, {
                    children: [(0,
                    i.jsxs)(e, {
                        children: [r && (0,
                        i.jsx)("title", {
                            children: r
                        }), a && (0,
                        i.jsx)("meta", {
                            name: "keywords",
                            content: a
                        }, "keywords"), s && (0,
                        i.jsx)("meta", {
                            name: "description",
                            content: s
                        }, "description"), l && (0,
                        i.jsx)("meta", {
                            name: "robots",
                            content: l
                        }, "robots"), d && (0,
                        i.jsx)("meta", {
                            name: "applicable-device",
                            content: d
                        }, "applicable-device"), c && (0,
                        i.jsx)("link", {
                            rel: "canonical",
                            href: c
                        }, "canonical"), u && (0,
                        i.jsx)("link", {
                            rel: "amphtml",
                            href: u
                        }, "amphtml"), p && (0,
                        i.jsx)("link", {
                            rel: "alternate",
                            media: "only screen and (max-width: 640px)",
                            href: p
                        }, "alternate-media"), g.length ? g.map(( ({hreflang: e, href: t}) => (0,
                        i.jsx)("link", {
                            rel: "alternate",
                            hrefLang: e,
                            href: t
                        }, e))) : null, o]
                    }), this.dynamicAddCompKey(n)]
                })
            }
        }
        const Q = J
          , ee = function({appContext: e}) {
            const {pathname: t} = (0,
            H.useLocation)()
              , {metaParams: n, jsonldList: o, disableAlternateLink: r, generateAlternateWithCanonical: a, enableAlternateHreflang: s, alternateHreflangList: l} = (0,
            K.X)(G.b, {
                selector: ({metaParams: e, jsonldList: t, disableAlternateLink: n, generateAlternateWithCanonical: i, enableAlternateHreflang: o, alternateHreflangList: r}) => ({
                    metaParams: e,
                    jsonldList: t,
                    disableAlternateLink: n,
                    generateAlternateWithCanonical: i,
                    enableAlternateHreflang: o,
                    alternateHreflangList: r
                }),
                equalityFn: W.bN
            });
            let c = t;
            try {
                c = encodeURI(decodeURI(t))
            } catch (e) {}
            const d = (0,
            p.useMemo)(( () => {
                let e = [];
                const {robotsContent: t, canonicalHref: i} = null != n ? n : {}
                  , o = t && !t.includes("noindex")
                  , p = a && null != i ? i : `${$.C}${c}`;
                if (o && s)
                    return Object.assign(Object.assign({}, n), {
                        hreflangList: z()(l, "hreflang")
                    });
                if (o && !r) {
                    const t = (0,
                    X.Iz)(c);
                    e = [{
                        hreflang: "x-default",
                        href: t ? $.C : p
                    }],
                    V.wX.forEach(( ({value: n}) => {
                        const i = n.replace(/(^zh([_-]\w+)*)/g, "zh-Hant")
                          , o = t ? `${$.C}/${i}/` : `${p}?lang=${i}`;
                        e.push({
                            hreflang: i,
                            href: o
                        })
                    }
                    ))
                }
                return Object.assign(Object.assign({}, n), {
                    hreflangList: z()(e, "hreflang")
                })
            }
            ), [e, r, a, n, c, s, l]);
            return (0,
            F.o)(( () => Promise.resolve()), []),
            (0,
            i.jsx)(Q, {
                wrappedHead: u.mg,
                metaParams: d,
                jsonldList: o
            })
        };
        ee.deferSSREffects = !0;
        var te = n(64810);
        const ne = function(e) {
            const {appContext: t} = e
              , {location: n} = (0,
            H.useHistory)()
              , o = `https://${null == t ? void 0 : t.host}${n.pathname}${n.search}`
              , a = Object.assign(Object.assign({}, (0,
            r.P)(te.J).value), {
                "og:url": o
            });
            return (0,
            F.o)(( () => Promise.resolve()), []),
            (0,
            i.jsx)(u.mg, {
                children: Object.keys(a).map((e => (0,
                i.jsx)("meta", {
                    property: e,
                    content: a[e]
                }, e)))
            })
        };
        ne.deferSSREffects = !0;
        var ie = n(4912)
          , oe = n(40812)
          , re = n(68310)
          , ae = n(37434)
          , se = n(27106)
          , le = n(67581)
          , ce = n(86515);
        var pe = n(88920)
          , ue = n(58305)
          , de = n(62186);
        const ge = (0,
        de.A)("p", {
            target: "e1ckpjj30"
        })([{
            textAlign: "center",
            fontSize: 15,
            margin: "16px 0 12px 0"
        }], "label:Description;")
          , me = (0,
        de.A)("div", {
            target: "e1ckpjj31"
        })([{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#FE2C55"
        }], "label:DIVEditFuture;")
          , _e = (0,
        de.A)("div", {
            target: "e1ckpjj32"
        })([{
            textAlign: "center",
            height: 44,
            fontSize: 15,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--TextTertiary)"
        }], "label:GhostButton;")
          , he = (0,
        de.A)("img", {
            target: "e1ckpjj33"
        })([ () => ({
            height: 149
        })], "label:Banner;")
          , fe = (0,
        de.A)("h3", {
            target: "e1ckpjj34"
        })([{
            marginTop: 36,
            marginBottom: 12,
            fontSize: 20
        }], "label:Title;")
          , be = n.p + "699cc32d70bd43f9f12c.png";
        var ye = n(60986)
          , ve = n(5107)
          , Pe = n(85077)
          , xe = n(18047)
          , Ee = n(52837)
          , ke = (0,
        Ee.r)((function(e) {
            return p.createElement("svg", (0,
            xe._)({
                fill: "currentColor"
            }, e, {
                viewBox: "0 0 24 48",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                className: "flip-rtl " + (e.className ? e.className : "")
            }), p.createElement("path", {
                d: "M16.37 24 2.71 10.33a1 1 0 0 1 0-1.41l1.84-1.84a1 1 0 0 1 1.41 0l16.21 16.2a1 1 0 0 1 0 1.42L5.96 40.92a1 1 0 0 1-1.41 0L2.7 39.08a1 1 0 0 1 0-1.42L16.37 24Z"
            }))
        }
        ));
        const Te = "dailyscreentime_notifreminder_desc_minutes"
          , Oe = "familyPairing_dailyScreenTime_intervention_desc_minutes"
          , Se = "dailyscreentime_notifreminder_desc_hours"
          , Ce = "familyPairing_dailyScreenTime_intervention_desc_hours"
          , we = "dailyscreentime_notifreminder_desc_hoursminutes"
          , je = "familyPairing_dailyScreenTime_intervention_desc_hoursMinutes"
          , Me = "dailyscreentime_notifreminder_toast_incorrectpasscode"
          , Le = "nightscreentimemgmt_sleepreminders_modal_readyforsleep_heading"
          , Ae = "nightscreentimemgmt_sleepreminders_modal_readyforsleep_firstreminder_desc"
          , Ne = "nightscreentimemgmt_sleepreminders_modal_readyforsleep_editreminder_link"
          , De = "nightscreentimemgmt_sleepreminders_modal_readyforsleep_ok_btn"
          , Ie = "nightscreentimemgmt_sleepreminders_modal_readyforsleep_delay_btn_variantone"
          , Re = "screentime_breakreminder_modal_timetotakeabreak_title"
          , Ue = "screentime_breakreminder_modal_timetotakeabreak_desc_1"
          , Be = "screentime_breakreminder_modal_editreminder_link"
          , Ye = "screentime_breakreminder_modal_ok_btn"
          , ze = "screentime_breakreminder_modal_snooze_link"
          , He = "dailyscreentime_notifreminder_header_ready"
          , Fe = "familyPairing_dailyScreenTime_intervention_headline"
          , Ke = "familyPairing_dailyScreenTime_intervention_returnToTikTok_toast"
          , We = "dailyscreentime_notifreminder_button_returntotiktok"
          , $e = "dailyscreentime_introsheet_minors_heading"
          , Ve = "dailyscreentime_introsheet_minors_firstbullet_logoff"
          , Ge = "dailyscreentime_introsheet_minors_secondbullet_settingsprivacy"
          , Xe = "dailyscreentime_introsheet_minors_firstbutton_gotit"
          , qe = "dailyscreentime_introsheet_minors_secondbutton_manage";
        var Ze = n(40173)
          , Je = n(82182)
          , Qe = n(66345);
        const et = () => {
            const [e,t] = (0,
            c.S)(le.z)
              , n = (0,
            w.Nj)(Je.i)
              , {isDark: o} = (0,
            l.u)()
              , r = (0,
            Ze.s)()
              , [a,s] = (0,
            p.useState)(0);
            (0,
            p.useEffect)(( () => {
                e.breakReminderPopup && (n.uploadMetric("web_time_break_pop"),
                (0,
                ce.nN)("updateActiveTimeUsage", {
                    value: {
                        activeTimeUsage: 0,
                        timeStamp: (new Date).getTime()
                    }
                }, re.LH))
            }
            ), [e.breakReminderPopup]);
            const u = (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(he, {
                    src: o ? be : ye
                }), (0,
                i.jsx)(fe, {
                    children: r(Re, {}, "Time to take a break?")
                }), (0,
                i.jsx)(ge, {
                    children: r(Ue, {
                        num: e.durationReminder
                    }, `You’ve had ${e.durationReminder} minutes of uninterrupted screen time. Consider taking a break for a while.`)
                }), (0,
                i.jsxs)(me, {
                    onClick: () => {
                        t.setBreakReminderPopup(!1),
                        s(1),
                        n.uploadMetric("web_time_break_edit")
                    }
                    ,
                    children: [(0,
                    i.jsx)(Pe.QK, {
                        label: r(Be, {}, "Edit future reminders"),
                        color: "Primary"
                    }), (0,
                    i.jsx)(ke, {
                        color: "Primary",
                        size: 14
                    })]
                }), (0,
                i.jsx)(Qe.p, {
                    visiblePopupType: a,
                    changeVisiblePopupType: e => {
                        s(e)
                    }
                })]
            });
            return (0,
            i.jsx)(ve.yl7, {
                isVisible: e.breakReminderPopup,
                message: e.breakReminderPopup ? u : null,
                actionVariant: "text",
                widthVariant: "wide",
                actions: [{
                    onClick: () => {
                        t.setBreakReminderPopup(!1),
                        n.uploadMetric("web_time_break_ok")
                    }
                    ,
                    text: r(Ye, {}, "OK"),
                    variant: "primary"
                }, {
                    onClick: () => {
                        t.setBreakReminderPopup(!1),
                        t.startTimeBreakSnoozeTimer(),
                        n.uploadMetric("web_time_break_snooze")
                    }
                    ,
                    text: r(ze, {}, "Snooze(10m)"),
                    variant: "secondary"
                }]
            })
        }
          , tt = n.p + "2c1d4382cd9969108f39.png";
        var nt = n(17785)
          , it = n(26456);
        const ot = () => {
            var e;
            const [t,n] = (0,
            c.S)(le.z)
              , o = (0,
            w.Nj)(Je.i)
              , r = (0,
            Ze.s)()
              , {isDark: a} = (0,
            l.u)()
              , s = r("screenTime_web_sleepReminders_setTime_am_desc", {}, "AM")
              , u = r("screenTime_web_sleepReminders_setTime_pm_desc", {}, "PM")
              , {language: d} = null !== (e = (0,
            T.W)(( () => ["language", "user"]), [])) && void 0 !== e ? e : {}
              , g = (0,
            H.useHistory)()
              , m = (0,
            p.useMemo)(( () => {
                var e, n;
                const i = (null === (e = t.sleepTimeSettings) || void 0 === e ? void 0 : e.sleep_time_start_hour) || 0
                  , o = (null === (n = t.sleepTimeSettings) || void 0 === n ? void 0 : n.sleep_time_start_minute) || 0
                  , r = (new Date).setHours(i, o)
                  , a = i < 12 ? s : u;
                return it.Ay.format(r, "LT") + ` ${a}`
            }
            ), [t.sleepTimeSettings])
              , _ = (0,
            p.useMemo)(( () => !t.defaultDailySTMPopup && t.sleepReminderPopup && t.isOpenSleepReminder), [t.sleepReminderPopup, t.defaultDailySTMPopup, t.isOpenSleepReminder]);
            (0,
            p.useEffect)(( () => {
                _ && o.uploadMetric("web_sleep_reminder_pop_up")
            }
            ), [_]);
            const h = (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(he, {
                    src: a ? tt : nt
                }), (0,
                i.jsx)(fe, {
                    style: {
                        marginTop: 36
                    },
                    children: r(Le, {}, "Ready for bed?")
                }), (0,
                i.jsx)(ge, {
                    style: {
                        marginBottom: 12
                    },
                    children: r(Ae, {
                        string: m
                    }, `You’ve set your sleep time for ${m}.`)
                }), (0,
                i.jsxs)(me, {
                    onClick: () => {
                        t.sleepTimeSettings && n.uploadSleepReminderAction({
                            sleep_time_settings: t.sleepTimeSettings,
                            user_real_timestamp: Math.round(Date.now() / 1e3),
                            user_action: 2
                        }),
                        n.setSleepReminderPopup(!1),
                        o.uploadMetric("web_sleep_reminder_edit"),
                        g.push({
                            pathname: "/setting",
                            search: `?lang=${d}&activeTab=sleep-reminder`
                        })
                    }
                    ,
                    children: [(0,
                    i.jsx)(Pe.QK, {
                        label: r(Ne, {}, "Edit reminder"),
                        color: "Primary"
                    }), (0,
                    i.jsx)(ke, {
                        color: "Primary",
                        size: 14
                    })]
                })]
            });
            return (0,
            i.jsx)(ve.yl7, {
                isVisible: _,
                message: _ ? h : null,
                actionVariant: "text",
                widthVariant: "wide",
                actions: [{
                    onClick: () => {
                        n.setSleepReminderPopup(!1),
                        t.sleepTimeSettings && n.uploadSleepReminderAction({
                            sleep_time_settings: t.sleepTimeSettings,
                            user_real_timestamp: Math.round(Date.now() / 1e3),
                            user_action: 2
                        }),
                        o.uploadMetric("web_sleep_reminder_ok")
                    }
                    ,
                    text: r(De, {}, "OK"),
                    variant: "primary"
                }, {
                    onClick: () => {
                        n.delaySleep(),
                        n.setSleepReminderPopup(!1),
                        t.sleepTimeSettings && n.uploadSleepReminderAction({
                            sleep_time_settings: t.sleepTimeSettings,
                            user_real_timestamp: Math.round(Date.now() / 1e3),
                            user_action: 1
                        }),
                        o.uploadMetric("web_sleep_reminder_delay")
                    }
                    ,
                    text: r(Ie, {}, "Delay (10m)"),
                    variant: "secondary"
                }]
            })
        }
          , rt = n.p + "d5dd413dd013f33ce41d.png";
        var at = n(72438);
        function st(e) {
            return p.createElement("svg", (0,
            xe._)({
                fill: "currentColor"
            }, e, {
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                className: e.className
            }), p.createElement("path", {
                d: "M14.83 14.33a9.22 9.22 0 0 1 18.34 0l1.03 10.59c.28 2.85 1.86 4.92 3.56 7.08H10.24c1.7-2.16 3.28-4.23 3.56-7.08l1.03-10.6ZM24 2c-6.8 0-12.5 5.17-13.16 11.94L9.82 24.53c-.3 3.19-3.4 5.86-5.27 8.23A2 2 0 0 0 6.12 36h35.76a2 2 0 0 0 1.57-3.24c-1.87-2.37-4.96-5.04-5.27-8.23l-1.02-10.59A13.22 13.22 0 0 0 24 2Zm6.9 39c.11-.55-.35-1-.9-1H18c-.55 0-1.01.45-.9 1 1.28 6.61 12.52 6.61 13.8 0Z"
            }))
        }
        function lt(e) {
            return p.createElement("svg", (0,
            xe._)({
                fill: "currentColor"
            }, e, {
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                className: e.className
            }), p.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M37.37 4.85a4.01 4.01 0 0 0-.99-.79 3 3 0 0 0-2.72 0c-.45.23-.81.6-1 .79a9 9 0 0 1-.04.05l-19.3 19.3c-1.64 1.63-2.53 2.52-3.35 3.47a36 36 0 0 0-4.32 6.16c-.6 1.1-1.14 2.24-2.11 4.33l-.3.6c-.4.75-.84 1.61-.8 2.43a2.5 2.5 0 0 0 2.37 2.36c.82.05 1.68-.4 2.44-.79l.59-.3c2.09-.97 3.23-1.5 4.33-2.11a36 36 0 0 0 6.16-4.32c.95-.82 1.84-1.71 3.47-3.34l19.3-19.3.05-.06a3 3 0 0 0 .78-3.71c-.22-.45-.6-.81-.78-1l-.02-.02-.03-.03-3.67-3.67a8.7 8.7 0 0 1-.06-.05ZM16.2 26.97 35.02 8.15l2.83 2.83L19.03 29.8c-1.7 1.7-2.5 2.5-3.33 3.21a32 32 0 0 1-7.65 4.93 32 32 0 0 1 4.93-7.65c.73-.82 1.51-1.61 3.22-3.32Z"
            }), p.createElement("path", {
                d: "M43 44H13.83a40 40 0 0 0 6-4H43a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1Z"
            }))
        }
        (0,
        Ee.r)(st),
        (0,
        Ee.r)(lt);
        const ct = () => {
            var e;
            const t = (0,
            Ze.s)()
              , {isDark: n} = (0,
            l.u)()
              , o = (0,
            w.Nj)(Je.i)
              , [r,a] = (0,
            c.S)(le.z)
              , s = (0,
            H.useHistory)()
              , {language: u} = null !== (e = (0,
            T.W)(( () => ["language"]), [])) && void 0 !== e ? e : {}
              , d = (0,
            p.useMemo)(( () => {
                const e = 2 === r.STMInterventionType && r.defaultDailySTMPopup;
                return e && o.uploadMetric("web_stm_pop_up"),
                e
            }
            ), [r.STMInterventionType, r.defaultDailySTMPopup])
              , g = {
                type: "icon",
                items: [{
                    text: t(Ve, {}, "We’ll let you know if your time is up so it’s easier to log off"),
                    iconComponent: st
                }, {
                    text: t(Ge, {}, "You can manage your daily screen time in Settings and privacy"),
                    iconComponent: lt
                }]
            }
              , m = (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(ve.I05, {
                    className: "mt-32",
                    variant: "primary",
                    text: t(Xe, {}, "Got it"),
                    useNewRadiusDesign: !0,
                    onClick: () => {
                        o.uploadDailySTMPopupSuccess({
                            date: (0,
                            ce.zk)(new Date),
                            screen_time_limit_type: 2
                        }).subscribe(),
                        a.setDefaultDailySTMPopup(!1),
                        o.uploadMetric("web_stm_got_it")
                    }
                }), (0,
                i.jsx)(_e, {
                    style: {
                        marginTop: 6
                    },
                    onClick: () => {
                        a.setDefaultDailySTMPopup(!1),
                        s.push({
                            pathname: "/setting",
                            search: `lang=${u}&activeTab=custom-select-screen-time`
                        })
                    }
                    ,
                    children: t(qe, {}, "Manage Daily Screen Time")
                })]
            });
            return (0,
            i.jsx)(ve.NCo, {
                isVisible: d,
                image: d ? {
                    type: "large-image",
                    src: n ? rt : at
                } : void 0,
                title: t($e, {}, "To support your well-being, your daily screen time is set to 1 hour"),
                message: g,
                accessory: m,
                actions: []
            })
        }
          , pt = n.p + "57ca16f6b5b90c7753d0.png"
          , ut = n.p + "81479b0f5488c5f3b85d.png"
          , dt = (0,
        p.memo)((function({onPasswordChange: e}) {
            const t = [(0,
            p.useRef)(null), (0,
            p.useRef)(null), (0,
            p.useRef)(null), (0,
            p.useRef)(null)]
              , [n,o] = (0,
            p.useState)("");
            return (0,
            p.useEffect)(( () => {
                e(n)
            }
            ), [n, e]),
            (0,
            i.jsx)("div", {
                style: {
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    marginBottom: 32
                },
                children: t.map(( (e, r) => (0,
                i.jsx)(ve.jl$, {
                    ref: e,
                    type: "password",
                    textAlign: "center",
                    maxLength: 1,
                    value: n[r] || "",
                    onKeyDown: e => {
                        "Backspace" === e.key ? (e => {
                            var i;
                            const r = n.substring(0, e) + n.substring(e + 1);
                            o(r),
                            e > 0 && (null === (i = t[e - 1].current) || void 0 === i || i.focus())
                        }
                        )(r) : (e => {
                            const t = e.which ? e.which : e.keyCode;
                            return t >= 48 && t <= 57
                        }
                        )(e) && ( (e, i) => {
                            var r, a, s;
                            const l = ((i.which ? i.which : i.keyCode) - 48).toString();
                            if (1 === l.length) {
                                if (e < 3) {
                                    let i = e + 1;
                                    for (; i < 4 && n[i]; )
                                        i++;
                                    if (i < 4) {
                                        const e = n.substring(0, i) + l + n.substring(i + 1);
                                        o(e),
                                        null === (r = t[i].current) || void 0 === r || r.focus()
                                    } else
                                        null === (a = t[3].current) || void 0 === a || a.focus()
                                }
                            } else
                                0 === l.length && e > 0 && (null === (s = t[e - 1].current) || void 0 === s || s.focus());
                            const c = n.substring(0, e) + l + n.substring(e + 1);
                            o(c)
                        }
                        )(r, e)
                    }
                }, `stm-pwd-${r}`)))
            })
        }
        ))
          , gt = ({passcode: e="1234"}) => {
            var t;
            const n = (0,
            Ze.s)()
              , {isDark: o} = (0,
            l.u)()
              , [r,a] = (0,
            p.useState)("")
              , s = 4 !== r.length
              , u = (0,
            w.Nj)(Je.i)
              , [d,g] = (0,
            c.S)(le.z)
              , {user: m} = null !== (t = (0,
            T.W)(( () => ["user"]), [])) && void 0 !== t ? t : {}
              , _ = (0,
            p.useMemo)(( () => d.isFpTeenOpenDailySTM), [d.isFpTeenOpenDailySTM])
              , h = (0,
            p.useMemo)(( () => d.parentUsername), [d.parentUsername])
              , f = (0,
            p.useMemo)(( () => Math.floor((d.timeUsageToday + d.activeTimeUsage) / 3600)), [d.timeUsageToday, d.activeTimeUsage])
              , b = (0,
            p.useMemo)(( () => Math.floor((d.timeUsageToday + d.activeTimeUsage / 60) % 60)), [d.timeUsageToday, d.activeTimeUsage])
              , y = (0,
            p.useMemo)(( () => (1 === d.STMInterventionType || 3 === d.STMInterventionType) && d.defaultDailySTMPopup && d.isOpenDailySTM), [d.STMInterventionType, d.defaultDailySTMPopup, d.isOpenDailySTM])
              , v = (0,
            p.useMemo)(( () => {
                if (b && f) {
                    const e = (0,
                    ce.gO)(n(we, {
                        minutes: b,
                        hours: f
                    }, `You’ve spent ${f}h ${b}m on TikTok today. Close it to stay within your daily time, or enter the passcode <b>1234</b> to return to TikTok.`), {
                        minutes: b.toString(),
                        hours: f.toString()
                    }).split("<b>1234</b>");
                    return [e[0], (0,
                    i.jsx)("b", {
                        children: "1234"
                    }, "passcode"), e[1]]
                }
                if (f) {
                    const e = (0,
                    ce.gO)(n(Se, {
                        hours: f
                    }, `You’ve spent ${f}h on TikTok today. Close it to stay within your daily time, or enter the passcode <b>1234</b> to return to TikTok.`), {
                        hours: f.toString()
                    }).split("<b>1234</b>");
                    return [e[0], (0,
                    i.jsx)("b", {
                        children: "1234"
                    }, "passcode"), e[1]]
                }
                const e = (0,
                ce.gO)(n(Te, {
                    minutes: b
                }, `You’ve spent ${b}m on TikTok today. Close it to stay within your daily time, or enter the passcode <b>1234</b> to return to TikTok.`), {
                    minutes: b.toString()
                }).split("<b>1234</b>");
                return [e[0], (0,
                i.jsx)("b", {
                    children: "1234"
                }, "passcode"), e[1]]
            }
            ), [n, b, f])
              , P = (0,
            p.useMemo)(( () => b && f ? (0,
            ce.gO)(n(je, {
                minutes: b,
                hours: f,
                username: h
            }, `You’ve spent ${f}h ${b}m on TikTok today. Close it to stay within your daily time, or enter a passcode from ${h} to return to TikTok.`), {
                minutes: b.toString(),
                hours: f.toString(),
                username: h
            }) : f ? (0,
            ce.gO)(n(Ce, {
                hours: f,
                username: h
            }, `You’ve spent ${f}h on TikTok today. Close it to stay within your daily time, or enter a passcode from ${h} to return to TikTok.`), {
                hours: f.toString(),
                username: h
            }) : (0,
            ce.gO)(n(Oe, {
                minutes: b,
                username: h
            }, `You’ve spent ${b}m on TikTok today. Close it to stay within your daily time, or enter a passcode from ${h} to return to TikTok.`), {
                minutes: b.toString(),
                username: h
            })), [n, h, f, b])
              , x = (0,
            p.useMemo)(( () => _ ? P : v), [_, v, P])
              , E = (0,
            p.useMemo)(( () => n(_ ? Fe : He, {}, "Ready to close TikTok?")), [_])
              , k = () => {
                ve.DbI.success(n(Ke, {}, "You've returned to Tiktok")),
                u.uploadDailySTMPopupSuccess({
                    date: (0,
                    ce.zk)(new Date),
                    screen_time_limit_type: _ ? 3 : 1
                }).subscribe(),
                u.uploadMetric("web_users_return_tt"),
                g.setDefaultDailySTMPopup(!1)
            }
              , O = () => {
                u.uploadMetric("web_dstime_passcode_error"),
                ve.DbI.error(n(Me, {}, "The passcode you entered is incorrect. Please try again."))
            }
              , S = (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(ge, {
                    children: x
                }), (0,
                i.jsx)(dt, {
                    onPasswordChange: e => {
                        a(e)
                    }
                }), (0,
                i.jsx)(ve.I05, {
                    onClick: () => {
                        try {
                            if (u.uploadMetric("web_dstime_enter_passcode"),
                            _) {
                                if (_) {
                                    const e = (0,
                                    ce.Zf)(r, (null == m ? void 0 : m.uid) || "");
                                    u.uploadDailySTMTeenPinSuccess(e).subscribe({
                                        next: e => {
                                            0 === e.status_code ? k() : O()
                                        }
                                        ,
                                        error: () => {
                                            O()
                                        }
                                    })
                                }
                            } else
                                r !== e ? O() : k()
                        } catch (e) {
                            ve.DbI.info(n(Me, {}, "The passcode you entered is incorrect. Please try again.")),
                            u.uploadMetric("web_dstime_passcode_error")
                        }
                    }
                    ,
                    disabled: s,
                    variant: "primary",
                    text: n(We, {}, "Return to Tiktok"),
                    useNewRadiusDesign: !0
                })]
            });
            return (0,
            p.useEffect)(( () => {
                u.uploadMetric("web_stm_pop_up")
            }
            ), []),
            (0,
            i.jsx)(i.Fragment, {
                children: (0,
                i.jsx)(ve.NCo, {
                    isVisible: y,
                    image: y ? {
                        type: "large-image",
                        src: o ? pt : ut
                    } : void 0,
                    title: E,
                    subtitle: "",
                    message: {
                        type: "bullet",
                        items: []
                    },
                    accessory: S,
                    actions: [],
                    isFullViewDisplay: !0
                })
            })
        }
        ;
        var mt, _t, ht, ft, bt, yt, vt, Pt, xt, Et, kt = n(237), Tt = n(48615), Ot = n(70364), St = n.n(Ot);
        (_t = mt || (mt = {})).POP = "pop",
        _t.PC_BANNER = "pc_banner",
        _t.MOBILE_BANNER = "mobile_banner",
        _t.WEBVIEW = "webview",
        (ft = ht || (ht = {})).V1 = "v1",
        ft.V2 = "v2",
        ft.CUSTOMIZED = "customized",
        (yt = bt || (bt = {})).TEXT = "text",
        yt.LINK = "link",
        yt.BUTTON = "button",
        (Pt = vt || (vt = {})).EXTERNAL = "external",
        Pt.INTERNAL = "internal",
        Pt.SUB_POPUP = "sub_popup",
        (Et = xt || (xt = {})).INFO = "info",
        Et.WARN = "warn",
        Et.ERROR = "error";
        const Ct = "/tiktok/popup/dispatch/v1"
          , wt = "/api/policy/notice/"
          , jt = Ct
          , Mt = "/tiktok/popup/callback/v1"
          , Lt = Mt;
        var At, Nt;
        (Nt = At || (At = {})).initError = "initError",
        Nt.beforeFetchData = "beforeFetchData",
        Nt.afterFetchData = "afterFetchData",
        Nt.fetchDataError = "fetchDataError",
        Nt.popupDataReady = "popupDataReady",
        Nt.processDataError = "processDataError",
        Nt.beforeSendCallback = "beforeSendCallback",
        Nt.afterSendCallback = "afterSendCallback",
        Nt.sendCallbackError = "sendCallbackError",
        Nt.beforeNavigateToNextPopup = "beforeNavigateToNextPopup",
        Nt.afterNavigateToNextPopup = "afterNavigateToNextPopup",
        Nt.allPopupsCompleted = "allPopupsCompleted",
        Nt.beforeDestruct = "beforeDestruct";
        var Dt, It = class {
            init(e) {
                this.debug = e.debug,
                this.meta = e.meta
            }
            send(e) {}
            info(e, t) {}
            warn(e, t) {}
            error(e, t) {}
            getMeta(...e) {
                return {}
            }
            destruct() {}
            constructor() {
                this.debug = !1,
                this.meta = {}
            }
        }
        ;
        !function(e) {
            e.INFO = "info",
            e.WARN = "warn",
            e.ERROR = "error"
        }(Dt || (Dt = {}));
        class Rt extends It {
            init(e) {
                this.meta = e.meta,
                this.debug = e.debug,
                e.customLoggingModule && e.customLoggingModule instanceof It ? this._customLogger = e.customLoggingModule : this.warn("[LoggingModule]: init - incorrect implementation of LoggingModule")
            }
            sendDebugMessage(e) {
                if (this.debug) {
                    const {level: t} = e;
                    console[t](e.message, e);
                    try {
                        chrome.runtime.sendMessage(e)
                    } catch (e) {}
                }
            }
            send(e) {
                this.sendDebugMessage(e)
            }
            getMeta() {
                return this.meta
            }
            info(e, t) {
                var n;
                "function" == typeof (null === (n = this._customLogger) || void 0 === n ? void 0 : n.info) && this._customLogger.info(e, t),
                this.send({
                    message: e,
                    level: Dt.INFO,
                    meta: this.meta,
                    data: t
                })
            }
            warn(e, t) {
                var n;
                "function" == typeof (null === (n = this._customLogger) || void 0 === n ? void 0 : n.warn) && this._customLogger.warn(e, t),
                this.send({
                    message: e,
                    level: Dt.WARN,
                    meta: this.meta,
                    data: t
                })
            }
            error(e, t) {
                var n;
                "function" == typeof (null === (n = this._customLogger) || void 0 === n ? void 0 : n.error) && this._customLogger.error(e, t),
                this.send({
                    message: e,
                    level: Dt.ERROR,
                    meta: this.meta,
                    data: t
                })
            }
            destruct() {
                var e;
                "function" == typeof (null === (e = this._customLogger) || void 0 === e ? void 0 : e.destruct) && this._customLogger.destruct()
            }
            constructor() {
                return super(),
                this.debug = !1,
                Rt._instance || (Rt._instance = this),
                Rt._instance
            }
        }
        var Ut = new Rt
          , Bt = n(71510)
          , Yt = n.n(Bt)
          , zt = n(35655)
          , Ht = n.n(zt);
        function Ft(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Kt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                i.forEach((function(t) {
                    Ft(e, t, n[t])
                }
                ))
            }
            return e
        }
        const Wt = /^(https?:\/\/)/;
        class $t {
            constructor() {
                return this.init = e => {
                    Ut.info("[ServiceModule]: init"),
                    this._domain = e.domain || "https://www.tiktok.com",
                    this._commonParams = e.commonParams || {}
                }
                ,
                this.sendRequest = (e, t, n, i) => {
                    const o = Wt.test(e) ? e : `${this._domain}${e}`
                      , r = new URL(o)
                      , a = Array.from(r.searchParams.entries()).reduce(( (e, t) => {
                        const [n,i] = t;
                        return void 0 === i && "" === i || (e[n] = i),
                        e
                    }
                    ), {})
                      , s = null != i ? i : {}
                      , {params: l, timeout: c} = s
                      , p = function(e, t) {
                        if (null == e)
                            return {};
                        var n, i, o = function(e, t) {
                            if (null == e)
                                return {};
                            var n, i, o = {}, r = Object.keys(e);
                            for (i = 0; i < r.length; i++)
                                n = r[i],
                                t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            for (i = 0; i < r.length; i++)
                                n = r[i],
                                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                        return o
                    }(s, ["params", "timeout"]);
                    let u = Kt({}, this._commonParams, a, null != l ? l : {});
                    "GET" === t && n && "object" == typeof n && (u = Kt({}, u, n));
                    const d = new URLSearchParams((e => {
                        if (!e)
                            return "";
                        const t = new URLSearchParams;
                        return Object.entries(e).forEach(( ([e,n]) => {
                            Array.isArray(n) ? n.forEach((n => {
                                t.append(e, n)
                            }
                            )) : null != n && t.append(e, n)
                        }
                        )),
                        t.toString()
                    }
                    )(u))
                      , g = new URL(`${r.origin}${r.pathname}?${d.toString()}`)
                      , m = Yt()({}, p, {
                        method: t,
                        timeout: null != c ? c : 0,
                        data: n
                    });
                    return Ut.info("[ServiceModule]: sendRequest start", m),
                    Ht()(g.href, m).then((e => (Ut.info("[ServiceModule]: sendRequest finish", e),
                    e))).catch((e => {
                        throw Ut.error("[ServiceModule]: sendRequest error", e),
                        e
                    }
                    ))
                }
                ,
                this.destruct = () => {
                    Ut.info("[ServiceModule]: destruct")
                }
                ,
                $t._instance || ($t._instance = this),
                $t._instance
            }
        }
        var Vt, Gt, Xt, qt, Zt, Jt, Qt, en, tn, nn, on, rn, an = new $t;
        function sn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function ln(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                i.forEach((function(t) {
                    sn(e, t, n[t])
                }
                ))
            }
            return e
        }
        function cn(e, t) {
            return t = null != t ? t : {},
            Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, n)
                }
                return t
            }(Object(t)).forEach((function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }
            )),
            e
        }
        function pn({lang: e, body: t, bodyLinks: n, popupMeta: i, style: o, callback: r}) {
            if (!t)
                return;
            if (!n || 0 === n.length || !/%s/.test(t))
                return [{
                    type: bt.TEXT,
                    text: t
                }];
            const a = /%s/g
              , s = []
              , l = t;
            let c = 0;
            return n.forEach(( ({text: t, action: n}) => {
                var p;
                const u = a.exec(l);
                if (!u)
                    return;
                const d = ln({
                    type: (null == n ? void 0 : n.link) ? bt.LINK : bt.BUTTON,
                    text: t
                }, (null == n ? void 0 : n.link) && {
                    link: mn({
                        link: n.link,
                        lang: e
                    }),
                    linkType: n.link_type === Zt.LINK_TYPE_ENUM_EXTERNAL ? vt.EXTERNAL : vt.INTERNAL
                }, (null == n || null === (p = n.actions) || void 0 === p ? void 0 : p.includes(tn.ACTION_TYPE_ENUM_CALLBACK)) && {
                    callback: r(i, o, n, !1)
                });
                s.push({
                    type: bt.TEXT,
                    text: l.slice(c, u.index)
                }),
                s.push(d),
                c = Number(u.index) + u[0].length
            }
            )),
            s.push({
                type: bt.TEXT,
                text: l.slice(c)
            }),
            s
        }
        function un({rawButtons: e, popupMeta: t, style: n, callback: i}) {
            if (!e)
                return;
            const o = [];
            return e.forEach(( ({text: e, is_bold: r, is_highlight: a, action: s}) => {
                const l = {
                    text: e,
                    isBold: Boolean(r),
                    isHighlight: Boolean(a),
                    callback: i(t, n, s, !0)
                };
                o.push(l)
            }
            )),
            o
        }
        function dn(e) {
            switch (e) {
            case Xt.POPUP_STYLE_ENUM_PC_BANNER:
                return mt.PC_BANNER;
            case Xt.POPUP_STYLE_ENUM_MOBILE_BANNER:
                return mt.MOBILE_BANNER;
            case Xt.POPUP_STYLE_ENUM_WEBVIEW:
                return mt.WEBVIEW;
            case Xt.POPUP_STYLE_ENUM_POP:
            default:
                return mt.POP
            }
        }
        (Gt = Vt || (Vt = {})).CALLBACK = "callback",
        Gt.H5 = "h5",
        (qt = Xt || (Xt = {}))[qt.POPUP_STYLE_ENUM_BOTTOM = 0] = "POPUP_STYLE_ENUM_BOTTOM",
        qt[qt.POPUP_STYLE_ENUM_POP = 1] = "POPUP_STYLE_ENUM_POP",
        qt[qt.POPUP_STYLE_ENUM_FULLSCREEN = 2] = "POPUP_STYLE_ENUM_FULLSCREEN",
        qt[qt.POPUP_STYLE_ENUM_WEBVIEW = 3] = "POPUP_STYLE_ENUM_WEBVIEW",
        qt[qt.POPUP_STYLE_ENUM_PC_BANNER = 4] = "POPUP_STYLE_ENUM_PC_BANNER",
        qt[qt.POPUP_STYLE_ENUM_MOBILE_BANNER = 5] = "POPUP_STYLE_ENUM_MOBILE_BANNER",
        (Jt = Zt || (Zt = {}))[Jt.LINK_TYPE_ENUM_INTERNAL = 0] = "LINK_TYPE_ENUM_INTERNAL",
        Jt[Jt.LINK_TYPE_ENUM_EXTERNAL = 1] = "LINK_TYPE_ENUM_EXTERNAL",
        Jt[Jt.LINK_TYPE_ENUM_SUB_POPUP = 2] = "LINK_TYPE_ENUM_SUB_POPUP",
        Jt[Jt.LINK_TYPE_UPGRADE = 3] = "LINK_TYPE_UPGRADE",
        (en = Qt || (Qt = {}))[en.POPUP_OPERATION_ENUM_LEGACY_0 = 0] = "POPUP_OPERATION_ENUM_LEGACY_0",
        en[en.POPUP_OPERATION_ENUM_LEGACY_1 = 1] = "POPUP_OPERATION_ENUM_LEGACY_1",
        en[en.POPUP_OPERATION_ENUM_LEGACY_2 = 2] = "POPUP_OPERATION_ENUM_LEGACY_2",
        en[en.POPUP_OPERATION_ENUM_LEGACY_3 = 3] = "POPUP_OPERATION_ENUM_LEGACY_3",
        en[en.POPUP_OPERATION_ENUM_LEGACY_4_AGREE = 4] = "POPUP_OPERATION_ENUM_LEGACY_4_AGREE",
        en[en.POPUP_OPERATION_ENUM_LEGACY_5_REMIND_ME_LATER = 5] = "POPUP_OPERATION_ENUM_LEGACY_5_REMIND_ME_LATER",
        en[en.POPUP_OPERATION_ENUM_LEGACY_7_LEARN_MORE = 6] = "POPUP_OPERATION_ENUM_LEGACY_7_LEARN_MORE",
        en[en.POPUP_OPERATION_ENUM_LEGACY_8_CONFIRM = 7] = "POPUP_OPERATION_ENUM_LEGACY_8_CONFIRM",
        en[en.POPUP_OPERATION_ENUM_LEGACY_9_NOT_NOW = 8] = "POPUP_OPERATION_ENUM_LEGACY_9_NOT_NOW",
        en[en.POPUP_OPERATION_ENUM_LEGACY_10_DOWNLOAD_YOUR_DATA = 9] = "POPUP_OPERATION_ENUM_LEGACY_10_DOWNLOAD_YOUR_DATA",
        en[en.POPUP_OPERATION_ENUM_LEGACY_11_SUBMIT_APPEAL = 10] = "POPUP_OPERATION_ENUM_LEGACY_11_SUBMIT_APPEAL",
        en[en.POPUP_OPERATION_ENUM_LEGACY_20_DOWNLOAD_YOUR_DATA = 11] = "POPUP_OPERATION_ENUM_LEGACY_20_DOWNLOAD_YOUR_DATA",
        en[en.POPUP_OPERATION_ENUM_LEGACY_100_GOT_IT = 12] = "POPUP_OPERATION_ENUM_LEGACY_100_GOT_IT",
        en[en.POPUP_OPERATION_ENUM_LEGACY_101_LEARN_MORE = 13] = "POPUP_OPERATION_ENUM_LEGACY_101_LEARN_MORE",
        en[en.POPUP_OPERATION_ENUM_LEGACY_200_LEARN_MORE = 14] = "POPUP_OPERATION_ENUM_LEGACY_200_LEARN_MORE",
        (nn = tn || (tn = {}))[nn.ACTION_TYPE_ENUM_CALLBACK = 0] = "ACTION_TYPE_ENUM_CALLBACK",
        nn[nn.ACTION_TYPE_ENUM_UPDATE_CONSENT = 1] = "ACTION_TYPE_ENUM_UPDATE_CONSENT",
        nn[nn.ACTION_TYPE_ENUM_FETCH_COMPLIANCE_SETTING = 2] = "ACTION_TYPE_ENUM_FETCH_COMPLIANCE_SETTING",
        (rn = on || (on = {}))[rn.POPUP_CALLBACK_TYPE_ENUM_UNKNOWN = 0] = "POPUP_CALLBACK_TYPE_ENUM_UNKNOWN",
        rn[rn.POPUP_CALLBACK_TYPE_ENUM_USER_ID = 1] = "POPUP_CALLBACK_TYPE_ENUM_USER_ID",
        rn[rn.POPUP_CALLBACK_TYPE_ENUM_DEVICE_ID = 2] = "POPUP_CALLBACK_TYPE_ENUM_DEVICE_ID";
        const gn = "${locale}";
        function mn({link: e, lang: t}) {
            return e.replace(gn, t)
        }
        function _n({lang: e, body: t, bodyLinks: n, popupMeta: i, callback: o}) {
            if (!t)
                return;
            if (!n || 0 === n.length)
                return [{
                    type: bt.TEXT,
                    text: t
                }];
            const r = []
              , a = t;
            let s = 0;
            const l = /%s/g;
            return n.forEach(( ({name: t, link: n="", operation: c, dismiss: p, approve: u, new_web_tab: d, extra: g, link_type: m}) => {
                const _ = l.exec(a);
                if (!_)
                    return;
                const h = mn({
                    link: n,
                    lang: e
                })
                  , f = Boolean(u || p)
                  , b = m === Vt.CALLBACK || u
                  , y = {
                    type: n ? bt.LINK : bt.BUTTON,
                    text: t,
                    link: h,
                    linkType: d ? vt.EXTERNAL : vt.INTERNAL,
                    onClick: o(f, !!b, cn(ln({}, i), {
                        extra: g,
                        operation: null == c ? void 0 : c.toString()
                    }))
                };
                r.push({
                    type: bt.TEXT,
                    text: a.slice(s, _.index)
                }),
                r.push(y),
                s = Number(_.index) + _[0].length
            }
            )),
            r.push({
                type: bt.TEXT,
                text: a.slice(s)
            }),
            r
        }
        function hn({lang: e, first_button_highlight: t, rawButtons: n, popupMeta: i, callback: o}) {
            if (0 === n.length)
                return;
            const r = [];
            return n.forEach(( ({text: n, is_bold: a, link_type: s, link: l, extra: c, approve: p, operation: u, dismiss: d, dismiss_all: g, new_web_tab: m, is_close_style: _}, h) => {
                const f = Boolean(p || d || g)
                  , b = s === Vt.CALLBACK || p
                  , y = {
                    text: n,
                    isCloseStyle: _,
                    isBold: Boolean(a),
                    isHighlight: 0 === h && t,
                    link: l ? mn({
                        link: l,
                        lang: e
                    }) : void 0,
                    linkType: m ? vt.EXTERNAL : vt.INTERNAL,
                    onClick: o(f, !!b, cn(ln({}, i), {
                        extra: c,
                        operation: null == u ? void 0 : u.toString()
                    }), l ? {
                        link: mn({
                            link: l,
                            lang: e
                        }),
                        linkType: m ? vt.EXTERNAL : vt.INTERNAL
                    } : void 0)
                };
                r.push(y)
            }
            )),
            r
        }
        function fn(e) {
            if (e)
                return {
                    url: e,
                    width: "auto",
                    height: "48px"
                }
        }
        function bn(e, t, n, i, o, r, a) {
            try {
                var s = e[r](a)
                  , l = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(l) : Promise.resolve(l).then(i, o)
        }
        function yn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        class vn {
            init(e, t) {
                Ut.info("[PopupModule]: init", e),
                this._lang = e.lang,
                this._popupApi = e.apiPath || jt,
                this._callbackApi = e.callbackApiPath || Lt,
                this._scene = e.scene || 0,
                this._dataProcessor = e.dataProcessor || ht.V2,
                this._customizedProcessor = e.customizeDataProcessor,
                this._navigateToNextPopup = t.navigateToNextPopup,
                this._completeAllPopups = t.completeAllPopups,
                this._beforeSendCallback = t.beforeSendCallback,
                this._afterSendCallback = t.afterSendCallback,
                this._adjustAPIConfig()
            }
            _adjustAPIConfig() {
                this._popupApi === Ct ? (this._callbackApi = Mt,
                this._dataProcessor = ht.V2) : this._popupApi === wt && (this._callbackApi = "/api/policy/notice/approve/",
                this._dataProcessor = ht.V1)
            }
            fetch(e) {
                return Ut.info("[PopupModule]: fetch ", this._popupApi),
                an.sendRequest(this._popupApi, "GET", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {}
                          , i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }
                        )))),
                        i.forEach((function(t) {
                            yn(e, t, n[t])
                        }
                        ))
                    }
                    return e
                }({
                    scene: this._scene
                }, e))
            }
            processData(e) {
                switch (Ut.info("[PopupModule]: process data", e),
                this._dataProcessor) {
                case ht.V1:
                    return this._processV1Data(e.data);
                case ht.V2:
                    return this._processV2Data(e.data);
                case ht.CUSTOMIZED:
                    return this._processCustomizedData(e);
                default:
                    return this._processV2Data(e.data)
                }
            }
            _processV1Data(e) {
                const t = "string" == typeof e ? JSON.parse(e) : e;
                Ut.info("[PopupModule]: process V1 response", t);
                const n = null == t ? void 0 : t.policy_notices;
                if (!n || 0 === n.length)
                    return [];
                const i = [];
                return n.forEach((e => {
                    if (!e)
                        return;
                    const t = {
                        business: e.business,
                        policy_version: e.policy_version,
                        style: e.style,
                        scene: this._scene
                    }
                      , n = {
                        eventInfo: {
                            style: e.style,
                            business: e.business
                        },
                        popupType: e.style,
                        title: e.title,
                        icon: fn(e.icon_url),
                        iconDark: fn(e.icon_url_dark),
                        body: _n({
                            lang: this._lang,
                            body: e.body,
                            bodyLinks: e.body_link_list,
                            popupMeta: t,
                            callback: this.callbackFunctionV1
                        }),
                        buttons: hn({
                            lang: this._lang,
                            first_button_highlight: Boolean(e.first_button_highlight),
                            rawButtons: e.actions || [],
                            popupMeta: t,
                            callback: this.callbackFunctionV1
                        })
                    };
                    i.push(n)
                }
                )),
                i
            }
            _processV2Data(e) {
                const t = "string" == typeof e ? JSON.parse(e) : e;
                return Ut.info("[PopupModule]: process V2 response", t),
                t.popup_responses.map((e => {
                    const t = e.popup_ui
                      , n = e.popup_meta;
                    return {
                        eventInfo: {
                            style: t.style,
                            business: n.business
                        },
                        popupType: dn(t.style),
                        icon: fn(t.icon_url),
                        iconDark: fn(t.icon_url_dark),
                        title: t.title,
                        buttons: un({
                            rawButtons: t.buttons,
                            popupMeta: n,
                            style: t.style,
                            callback: this.callbackFunctionV2
                        }),
                        body: pn({
                            lang: this._lang,
                            body: t.body,
                            bodyLinks: t.body_links,
                            popupMeta: e.popup_meta,
                            style: t.style,
                            callback: this.callbackFunctionV2
                        })
                    }
                }
                ))
            }
            _processCustomizedData(e) {
                if (Ut.info("[PopupModule]: process customized response"),
                !e || !this._customizedProcessor)
                    return [];
                try {
                    return this._customizedProcessor(e)
                } catch (e) {
                    Ut.error("[PopupModule]: process customized response fail", e)
                }
                return []
            }
            destruct() {
                Ut.info("[PopupModule]: destruct")
            }
            constructor() {
                this.callbackFunctionV1 = (e, t, n, i) => () => {
                    t && this._sendCallback(n).then(( () => {
                        Ut.info("[PopupModule]: send callback finished")
                    }
                    )).catch((e => {
                        Ut.error("[PopupModule]: send callback fail", e)
                    }
                    )),
                    i && (i.linkType === vt.EXTERNAL ? window.open(i.link) : window.location.href = i.link),
                    e && this._navigateToNextPopup()
                }
                ,
                this.callbackFunctionV2 = (e, t, n, i) => () => {
                    if ((null == n ? void 0 : n.actions) && n.actions.includes(tn.ACTION_TYPE_ENUM_CALLBACK) && this._sendCallback({
                        business: e.business,
                        version: e.version,
                        style: t,
                        extra: n.extra,
                        operation: n.operation
                    }).then(( () => {
                        Ut.info("[PopupModule]: send callback finished")
                    }
                    )).catch((e => {
                        Ut.error("[PopupModule]: send callback fail", e)
                    }
                    )),
                    i && (null == n ? void 0 : n.link)) {
                        const e = mn({
                            link: n.link,
                            lang: this._lang
                        });
                        n.link_type === Zt.LINK_TYPE_ENUM_EXTERNAL ? window.open(e) : window.location.href = e
                    }
                    (null == n ? void 0 : n.dismiss_all) ? this._completeAllPopups() : (null == n ? void 0 : n.dismiss) && this._navigateToNextPopup()
                }
                ;
                var e, t, n = this;
                return this._sendCallback = (e = function*(e) {
                    n._beforeSendCallback();
                    try {
                        const t = "object" == typeof e ? new URLSearchParams(e) : e;
                        yield an.sendRequest(n._callbackApi, "POST", t, {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        }),
                        n._afterSendCallback(!0)
                    } catch (e) {
                        n._afterSendCallback(!1, e)
                    }
                }
                ,
                t = function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(i, o) {
                        var r = e.apply(t, n);
                        function a(e) {
                            bn(r, i, o, a, s, "next", e)
                        }
                        function s(e) {
                            bn(r, i, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
                ,
                function(e) {
                    return t.apply(this, arguments)
                }
                ),
                vn._instance || (vn._instance = this),
                vn._instance
            }
        }
        var Pn = new vn;
        class xn {
            init(e) {
                Ut.info("[LifeCycleModule]: init"),
                Ut.info("[LifeCycleModule]: init Popup module"),
                Pn.init(e, {
                    navigateToNextPopup: this.navigateToNextPopup,
                    completeAllPopups: this.completeAllPopups,
                    beforeSendCallback: this.beforeSendCallback,
                    afterSendCallback: this.afterSendCallback
                }),
                this._currentEvent = new Set
            }
            addEventListener(e, t) {
                Ut.info("[LifeCycleModule]: add event listener to ", e);
                const n = this._eventListeners.get(e) || [];
                this._eventListeners.set(e, [...n, t])
            }
            removeEventListener(e, t) {
                Ut.info("[LifeCycleModule]: remove event listener from ", e);
                const n = this._eventListeners.get(e);
                if (!n)
                    return;
                const i = n.filter((e => e !== t));
                this._eventListeners.set(e, i)
            }
            removeAllEventListeners(e) {
                Ut.info("[LifeCycleModule]: remove all event listeners from ", e),
                this._eventListeners.set(e, [])
            }
            fetchPopupData(e) {
                return Ut.info("[LifeCycleModule]: fetch popup data"),
                this.dispatchEvent(At.beforeFetchData),
                Pn.fetch(e).then((e => {
                    this.dispatchEvent(At.afterFetchData),
                    Ut.info("[LifeCycleModule]: fetch popup data done, start processing response"),
                    this.processData(e)
                }
                )).catch((e => {
                    Ut.error("[LifeCycleModule]: fetch failure - ", e),
                    this.dispatchEvent(At.fetchDataError)
                }
                ))
            }
            processData(e) {
                try {
                    const t = Pn.processData(e);
                    (null == t ? void 0 : t.length) ? (Ut.info("[LifeCycleModule]: process response done, popup data ready"),
                    this._currentPopupIndex = 0,
                    this._popupData = t,
                    this.dispatchEvent(At.popupDataReady)) : Ut.info("[LifeCycleModule]: process popup response done, no popup data")
                } catch (e) {
                    Ut.error("[LifeCycleModule]: process popup response error - ", e)
                }
            }
            hasPopupData() {
                return Ut.info("[LifeCycleModule]: has popup data"),
                this._popupData.length > 0
            }
            getAllPopupData() {
                return Ut.info("[LifeCycleModule]: get all popup data"),
                this._popupData
            }
            getCurrentPopupData() {
                return Ut.info("[LifeCycleModule]: get current popup data"),
                this._popupData[this._currentPopupIndex]
            }
            hasNextPopup() {
                Ut.info("[LifeCycleModule]: has next popup");
                const e = this._popupData.length
                  , t = this._currentPopupIndex + 1;
                return 0 !== this._popupData.length && t < e
            }
            destruct() {
                Ut.info("[LifeCycleModule]: destruct"),
                Pn.destruct(),
                this._currentPopupIndex = -1,
                this._popupData = [],
                this._currentEvent.clear()
            }
            constructor() {
                return this._eventListeners = new Map,
                this._currentPopupIndex = -1,
                this._popupData = [],
                this.dispatchEvent = e => {
                    if (Ut.info("[LifeCycleModule]: dispatch start - ", e),
                    this._currentEvent.has(e))
                        return void Ut.error("[LifeCycleModule]: Dispatch is already in process", {
                            currentEvent: [...this._currentEvent],
                            upcomingEvent: e
                        });
                    this._currentEvent.add(e);
                    const t = this._eventListeners.get(e);
                    t && t.forEach((t => {
                        try {
                            t()
                        } catch (t) {
                            Ut.warn(`[LifeCycleModule]: error executing listener for event: ${e}`, t)
                        }
                    }
                    )),
                    this._currentEvent.delete(e),
                    Ut.info("[LifeCycleModule]: dispatch finish - ", e)
                }
                ,
                this.beforeSendCallback = () => {
                    Ut.info("[LifeCycleModule]: before sendCallback"),
                    this.dispatchEvent(At.beforeSendCallback)
                }
                ,
                this.afterSendCallback = (e, t) => {
                    e ? (Ut.info("[LifeCycleModule]: after sendCallback"),
                    this.dispatchEvent(At.afterSendCallback)) : (Ut.error("[LifeCycleModule]: send callback failure", t),
                    this.dispatchEvent(At.sendCallbackError))
                }
                ,
                this.navigateToNextPopup = () => {
                    Ut.info("[LifeCycleModule]: navigate to next popup"),
                    this._currentPopupIndex + 1 < this._popupData.length ? this._currentPopupIndex = this._currentPopupIndex + 1 : (Ut.warn("[LifeCycleModule]: navigate to next popup failure - no next popup"),
                    this.dispatchEvent(At.allPopupsCompleted))
                }
                ,
                this.completeAllPopups = () => {
                    Ut.info("[LifeCycleModule]: complete all popup"),
                    this._currentPopupIndex = this._popupData.length
                }
                ,
                xn._instance || (xn._instance = this),
                xn._instance
            }
        }
        var En = new xn;
        function kn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Tn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                i.forEach((function(t) {
                    kn(e, t, n[t])
                }
                ))
            }
            return e
        }
        const On = {
            appId: -1,
            region: "",
            wid: -1,
            lang: "en",
            isDebug: !1,
            isMobile: !1,
            apiDomain: "",
            apiPath: jt,
            callbackApiPath: Lt,
            dataProcessor: ht.V2,
            scene: 0,
            timeout: 1e3
        };
        class Sn {
            init(e) {
                if (this._isInitialized)
                    return;
                const t = Tn({}, On, e);
                Ut.init(Tn({
                    debug: Boolean(t.isDebug),
                    meta: {
                        appID: t.appId,
                        wid: t.wid,
                        lang: t.lang
                    }
                }, t.logging && {
                    customLoggingModule: t.logging
                })),
                Ut.info("[SDK]: init global module"),
                an.init({
                    domain: t.apiDomain,
                    commonParams: {
                        region: t.region,
                        priority_region: t.region,
                        aid: t.appId,
                        device_id: t.wid,
                        app_language: t.lang,
                        device_platform: t.isMobile ? "web_mobile" : "web_pc"
                    }
                }),
                En.init(t),
                Pn.init(t, {
                    navigateToNextPopup: En.navigateToNextPopup,
                    completeAllPopups: En.completeAllPopups,
                    beforeSendCallback: En.beforeSendCallback,
                    afterSendCallback: En.afterSendCallback
                }),
                this._isInitialized = !0
            }
            fetchPopupData(e) {
                return Ut.info("[SDK]: fetch popup data"),
                En.fetchPopupData(e)
            }
            hasPopupData() {
                return Ut.info("[SDK]: has popup data"),
                En.hasPopupData()
            }
            getPopupData() {
                return Ut.info("[SDK]: get popup data"),
                this.hasPopupData() ? En.getCurrentPopupData() : null
            }
            hasNextPopup() {
                return Ut.info("[SDK]: has next popup"),
                En.hasNextPopup()
            }
            addEventListener(e, t) {
                if (Ut.info("[SDK]: addEventListener"),
                e && At[e] && "function" == typeof t)
                    En.addEventListener(e, t);
                else {
                    const e = "[SDK]: addEventListener - invalid param for adding new event listener";
                    Ut.error(e, new Error(e))
                }
            }
            removeEventListener(e, t) {
                Ut.info("[SDK]: removeEventListener"),
                e && At[e] && "function" == typeof t ? En.removeEventListener(e, t) : Ut.warn("[SDK]: removeEventListener - invalid param for removing event listener")
            }
            removeAllEventListeners(e) {
                Ut.info("[SDK]: removeAllEventListener"),
                e && At[e] ? En.removeAllEventListeners(e) : Ut.warn("[SDK]: removeEventListener - invalid param for removing all event listener")
            }
            destruct() {
                Ut.info("[SDK]: destruct");
                for (const e of Object.keys(At)) {
                    const t = At[e];
                    this.removeAllEventListeners(t)
                }
                En.destruct(),
                an.destruct(),
                Ut.destruct(),
                this._isInitialized = !1
            }
            constructor() {
                return this._isInitialized = !1,
                Sn._instance || (Sn._instance = this),
                Sn._instance
            }
        }
        var Cn = new Sn
          , wn = n(47942);
        const jn = (0,
        de.A)("div", {
            target: "e1mpj5ji0"
        })({
            width: "100vw",
            left: 0,
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0, 0, 0, .06)",
            ":after": {
                content: '""',
                background: "rgba(33, 33, 33, .08)",
                position: "absolute",
                left: "0",
                bottom: "0",
                width: "100%",
                height: "1px",
                transform: "scaleY(0.5)"
            }
        }, "label:DivBannerContainer;")
          , Mn = (0,
        de.A)("div", {
            target: "e1mpj5ji1"
        })({
            padding: "12px 12px 12px 16px",
            display: "flex",
            justifyContent: "space-between",
            gap: "8px"
        }, "label:DivBannerWrapper;")
          , Ln = (0,
        de.A)("div", {
            target: "e1mpj5ji2"
        })({
            display: "flex",
            alignItems: "center",
            gap: "16px"
        }, "label:DivLeftContainer;")
          , An = (0,
        de.A)("div", {
            target: "e1mpj5ji3"
        })({
            display: "flex",
            alignItems: "flex-start",
            gap: "24px"
        }, "label:DivRightContainer;")
          , Nn = (0,
        de.A)("div", {
            target: "e1mpj5ji4"
        })({
            alignSelf: "center",
            lineHeight: "18px"
        }, "label:DivContentWrapper;")
          , Dn = (0,
        de.A)("div", {
            target: "e1mpj5ji5"
        })({
            margin: "9px 0"
        }, "label:DivButton;");
        function In(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Rn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                i.forEach((function(t) {
                    In(e, t, n[t])
                }
                ))
            }
            return e
        }
        function Un(e, t) {
            return t = null != t ? t : {},
            Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, n)
                }
                return t
            }(Object(t)).forEach((function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }
            )),
            e
        }
        const Bn = e => {
            const {content: t, open: n, colorScheme: o, config: r, eventReport: a} = e;
            if (!n)
                return null;
            const {buttons: s, icon: l, iconDark: c, body: u, title: d, eventInfo: g} = t
              , m = (0,
            p.useRef)(null)
              , _ = (0,
            p.useCallback)((e => {
                var t;
                "Enter" !== e.key && " " !== e.key || (e.preventDefault(),
                e.stopPropagation(),
                null === (t = m.current) || void 0 === t || t.click())
            }
            ), [])
              , h = "dark" === o ? c : l;
            var f, b;
            return (0,
            i.jsx)(jn, {
                role: "alert",
                style: {
                    top: null !== (f = null == r ? void 0 : r.topOffset) && void 0 !== f ? f : "0",
                    zIndex: null !== (b = null == r ? void 0 : r.zIndex) && void 0 !== b ? b : 999,
                    backgroundColor: "var(--ui-sheet-backdrop-1)"
                },
                children: (0,
                i.jsxs)(Mn, {
                    children: [(0,
                    i.jsxs)(Ln, {
                        children: [h && (0,
                        i.jsx)("img", {
                            alt: "icon",
                            src: h.url,
                            height: h.height,
                            width: h.width
                        }), (0,
                        i.jsxs)(Nn, {
                            children: [d && (0,
                            i.jsx)(wn.Fm, {
                                as: "h4",
                                size: 15,
                                color: "UIShapeText1OnNeutral",
                                weight: "medium",
                                children: d
                            }), (0,
                            i.jsx)(wn.Fm, {
                                as: "p",
                                size: 15,
                                color: "UIShapeText1OnNeutral",
                                children: null == u ? void 0 : u.map((e => {
                                    return e.type === bt.TEXT ? e.text : (0,
                                    i.jsx)(wn.QKx, {
                                        color: "UIShapeText1OnNeutral",
                                        label: e.text,
                                        href: null !== (t = e.link) && void 0 !== t ? t : "",
                                        target: e.linkType === vt.EXTERNAL ? "_blank" : "_self",
                                        onClick: () => {
                                            var t;
                                            null == a || a(ii, Un(Rn({}, g), {
                                                button_info: e.text
                                            })),
                                            null === (t = e.onClick) || void 0 === t || t.call(e)
                                        }
                                        ,
                                        weight: "medium"
                                    }, e.text);
                                    var t
                                }
                                ))
                            })]
                        })]
                    }), (0,
                    i.jsx)(An, {
                        children: null == s ? void 0 : s.map((e => e.isCloseStyle ? (0,
                        i.jsx)("div", {
                            onClick: () => {
                                var t;
                                null == a || a(ii, Un(Rn({}, g), {
                                    button_info: e.text
                                })),
                                null === (t = e.onClick) || void 0 === t || t.call(e)
                            }
                            ,
                            onKeyDown: _,
                            ref: m,
                            tabIndex: 0,
                            role: "button",
                            children: (0,
                            i.jsx)(wn.gn, {
                                size: "24px",
                                style: {
                                    cursor: "pointer"
                                },
                                color: "BrandTikTokBackground"
                            })
                        }, e.text) : (0,
                        i.jsx)(Dn, {
                            children: (0,
                            i.jsx)(wn.I05, {
                                label: e.text,
                                shape: "borderless",
                                variant: "primary",
                                onClick: () => {
                                    var t;
                                    null == a || a(ii, Un(Rn({}, g), {
                                        button_info: e.text
                                    })),
                                    null === (t = e.onClick) || void 0 === t || t.call(e)
                                }
                            })
                        }, e.text)))
                    })]
                })
            })
        }
          , Yn = (0,
        de.A)("div", {
            target: "e1krb51j0"
        })(( ({theme: {colors: e}}) => ({
            width: "100vw",
            left: "0",
            marginTop: "1px",
            position: "fixed",
            boxShadow: "0 2px 8px rgba(0, 0, 0, .06)",
            background: e.BGPrimary,
            display: "flex",
            justifyContent: "center",
            ":after": {
                content: '""',
                background: "rgba(33, 33, 33, .08)",
                position: "absolute",
                left: "0",
                bottom: "0",
                width: "100%",
                height: "1px",
                transform: "scaleY(0.5)"
            }
        })), "label:DivBannerContainer;")
          , zn = (0,
        de.A)("div", {
            target: "e1krb51j1"
        })({
            width: 1150,
            maxWidth: 1150,
            padding: "16px 24px",
            display: "flex",
            justifyContent: "space-between",
            gap: "24px"
        }, "label:DivBannerWrapper;")
          , Hn = (0,
        de.A)("div", {
            target: "e1krb51j2"
        })({
            display: "flex",
            alignItems: "center",
            gap: "16px"
        }, "label:DivLeftContainer;")
          , Fn = (0,
        de.A)("div", {
            target: "e1krb51j3"
        })([{
            display: "flex",
            alignItems: "center",
            gap: "24px"
        }], "label:DivRightContainer;")
          , Kn = (0,
        de.A)("div", {
            target: "e1krb51j4"
        })({
            alignSelf: "center"
        }, "label:DivContentWrapper;")
          , Wn = (0,
        de.A)("div", {
            target: "e1krb51j5"
        })({
            margin: "9px 0"
        }, "label:DivButton;");
        function $n(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Vn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                i.forEach((function(t) {
                    $n(e, t, n[t])
                }
                ))
            }
            return e
        }
        function Gn(e, t) {
            return t = null != t ? t : {},
            Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, n)
                }
                return t
            }(Object(t)).forEach((function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }
            )),
            e
        }
        const Xn = e => {
            const {content: t, open: n, colorScheme: o, config: r, eventReport: a} = e;
            if (!n)
                return null;
            const {buttons: s, icon: l, iconDark: c, body: u, title: d, eventInfo: g} = t
              , m = (0,
            p.useRef)(null)
              , _ = (0,
            p.useCallback)((e => {
                var t;
                "Enter" !== e.key && " " !== e.key || (e.preventDefault(),
                e.stopPropagation(),
                null === (t = m.current) || void 0 === t || t.click())
            }
            ), [])
              , h = "dark" === o ? c : l;
            var f, b;
            return (0,
            i.jsx)(Yn, {
                role: "alert",
                style: {
                    top: null !== (f = null == r ? void 0 : r.topOffset) && void 0 !== f ? f : "59px",
                    zIndex: null !== (b = null == r ? void 0 : r.zIndex) && void 0 !== b ? b : 999
                },
                children: (0,
                i.jsxs)(zn, {
                    children: [(0,
                    i.jsxs)(Hn, {
                        children: [h && (0,
                        i.jsx)("img", {
                            alt: "icon",
                            src: h.url,
                            height: h.height,
                            width: h.width
                        }), (0,
                        i.jsxs)(Kn, {
                            children: [d && (0,
                            i.jsx)(wn.Fm, {
                                as: "h4",
                                color: "UIText1",
                                size: 16,
                                weight: "medium",
                                children: d
                            }), u && (0,
                            i.jsx)(wn.Fm, {
                                as: "p",
                                size: 16,
                                weight: "medium",
                                color: "UIText2",
                                children: u.map((e => {
                                    return e.type === bt.TEXT ? e.text : (0,
                                    i.jsx)(wn.QKx, {
                                        color: "UIText1Display",
                                        label: e.text,
                                        href: null !== (t = e.link) && void 0 !== t ? t : "",
                                        target: e.linkType === vt.EXTERNAL ? "_blank" : "_self",
                                        onClick: () => {
                                            var t;
                                            null == a || a(ii, Gn(Vn({}, g), {
                                                button_info: e.text
                                            })),
                                            null === (t = e.onClick) || void 0 === t || t.call(e)
                                        }
                                        ,
                                        weight: "medium"
                                    }, e.text);
                                    var t
                                }
                                ))
                            })]
                        })]
                    }), (0,
                    i.jsx)(Fn, {
                        children: null == s ? void 0 : s.map((e => e.isCloseStyle ? (0,
                        i.jsx)("div", {
                            onClick: () => {
                                var t;
                                null == a || a(ii, Gn(Vn({}, g), {
                                    button_info: e.text
                                })),
                                null === (t = e.onClick) || void 0 === t || t.call(e)
                            }
                            ,
                            onKeyDown: _,
                            ref: m,
                            tabIndex: 0,
                            role: "button",
                            children: (0,
                            i.jsx)(wn.gn, {
                                size: "24px",
                                style: {
                                    cursor: "pointer"
                                }
                            })
                        }, e.text) : (0,
                        i.jsx)(Wn, {
                            children: (0,
                            i.jsx)(wn.I05, {
                                label: e.text,
                                shape: "borderless",
                                variant: "primary",
                                onClick: () => {
                                    var t;
                                    null == a || a(ii, Gn(Vn({}, g), {
                                        button_info: e.text
                                    })),
                                    null === (t = e.onClick) || void 0 === t || t.call(e)
                                }
                            })
                        }, e.text)))
                    })]
                })
            })
        }
          , qn = (0,
        de.A)("div", {
            target: "e140os950"
        })({
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "0 24px"
        }, "label:ButtonContainer;")
          , Zn = (0,
        de.A)("img", {
            target: "e140os951"
        })({
            display: "block",
            margin: "8px auto"
        }, "label:Img;");
        function Jn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Qn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                i.forEach((function(t) {
                    Jn(e, t, n[t])
                }
                ))
            }
            return e
        }
        function ei(e, t) {
            return t = null != t ? t : {},
            Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, n)
                }
                return t
            }(Object(t)).forEach((function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }
            )),
            e
        }
        const ti = e => {
            var t;
            const {icon: n, iconDark: o, buttons: r, body: a, title: s, eventInfo: l} = e.content
              , c = "dark" === e.colorScheme ? o : n;
            var p;
            return (0,
            i.jsxs)(wn.nOL, {
                open: e.open,
                onOpenChange: () => {}
                ,
                style: {
                    padding: "32px 0",
                    zIndex: null !== (p = null === (t = e.config) || void 0 === t ? void 0 : t.zIndex) && void 0 !== p ? p : 9999
                },
                children: [c && (0,
                i.jsx)(Zn, {
                    src: c.url,
                    height: c.height,
                    width: c.width
                }), s && (0,
                i.jsx)(wn.Fm, {
                    as: "h2",
                    align: "center",
                    size: 20,
                    weight: "bold",
                    style: {
                        wordBreak: "break-word",
                        lineHeight: "24px",
                        padding: "0 20px"
                    },
                    children: s
                }), (null == a ? void 0 : a.length) && (0,
                i.jsx)(wn.Fm, {
                    as: "p",
                    size: 15,
                    align: "center",
                    style: {
                        lineHeight: "18px",
                        padding: "7px 24px 24px"
                    },
                    children: a.map((t => {
                        return t.type === bt.TEXT ? t.text : (0,
                        i.jsx)(wn.QKx, {
                            color: "UIText1Display",
                            weight: "medium",
                            label: t.text,
                            href: null !== (n = t.link) && void 0 !== n ? n : "",
                            target: t.linkType === vt.EXTERNAL ? "_blank" : "_self",
                            onClick: () => {
                                var n, i;
                                null === (n = e.eventReport) || void 0 === n || n.call(e, ii, ei(Qn({}, l), {
                                    button_info: t.text
                                })),
                                null === (i = t.onClick) || void 0 === i || i.call(t)
                            }
                        }, t.text);
                        var n
                    }
                    ))
                }), (null == r ? void 0 : r.length) && (0,
                i.jsx)(qn, {
                    children: r.map((t => (0,
                    i.jsx)(wn.I05, {
                        style: t.isBold ? {
                            fontWeight: "bold"
                        } : {},
                        label: t.text,
                        variant: t.isHighlight ? "primary" : "secondary",
                        onClick: () => {
                            var n, i;
                            null === (n = e.eventReport) || void 0 === n || n.call(e, ii, ei(Qn({}, l), {
                                button_info: t.text
                            })),
                            null === (i = t.onClick) || void 0 === i || i.call(t)
                        }
                    }, t.text)))
                })]
            })
        }
          , ni = n.p + "09a28b24483e3a6b156f.css";
        const ii = "qa_tns_general_dialog_click";
        function oi() {
            return (0,
            i.jsx)("link", {
                rel: "stylesheet",
                href: ni
            })
        }
        const ri = e => {
            const [t,n] = (0,
            p.useState)(null)
              , {eventReport: o, noFetchDataAtInit: r, SDKConfig: a, visible: s, onReadyToClose: l, onReadyToShow: c, colorScheme: u, textDirection: d, componentConfig: g} = e;
            if ((0,
            p.useEffect)(( () => (Cn.init(a),
            r || Cn.fetchPopupData().catch(null),
            Cn.addEventListener(At.popupDataReady, ( () => {
                Cn.getPopupData() && (n(Cn.getPopupData()),
                c())
            }
            )),
            Cn.addEventListener(At.afterNavigateToNextPopup, ( () => {
                n(Cn.getPopupData())
            }
            )),
            Cn.addEventListener(At.allPopupsCompleted, ( () => {
                l()
            }
            )),
            () => {
                Cn.destruct()
            }
            )), []),
            (0,
            p.useEffect)(( () => {
                s && t && o && o("tns_general_dialog_show", t.eventInfo)
            }
            ), [s]),
            !t)
                return null;
            const {popupType: m} = t
              , _ = function(e, t) {
                if (null == e)
                    return {};
                var n, i, o = function(e, t) {
                    if (null == e)
                        return {};
                    var n, i, o = {}, r = Object.keys(e);
                    for (i = 0; i < r.length; i++)
                        n = r[i],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < r.length; i++)
                        n = r[i],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }(t, ["popupType"]);
            let h;
            switch (m) {
            case mt.MOBILE_BANNER:
                h = (0,
                i.jsx)(Bn, {
                    colorScheme: u,
                    content: _,
                    open: s,
                    config: null == g ? void 0 : g.mBanner,
                    eventReport: o
                });
                break;
            case mt.PC_BANNER:
                h = (0,
                i.jsx)(Xn, {
                    colorScheme: u,
                    content: _,
                    open: s,
                    config: null == g ? void 0 : g.pcBanner,
                    eventReport: o
                });
                break;
            case mt.POP:
            default:
                h = (0,
                i.jsx)(ti, {
                    colorScheme: u,
                    content: _,
                    open: s,
                    config: null == g ? void 0 : g.popup,
                    eventReport: o
                })
            }
            return (0,
            i.jsxs)(wn.juU, {
                colorSchemePreference: u,
                textDirection: d,
                children: [(0,
                i.jsx)(oi, {}), h]
            })
        }
          , ai = Cn.fetchPopupData;
        var si, li, ci = n(93608);
        !function(e) {
            e.None = "none",
            e.Pop = "pop",
            e.Float = "float",
            e.Bottom = "bottom",
            e.PcBanner = "pc_banner",
            e.MobileBanner = "mobile_banner"
        }(si || (si = {})),
        function(e) {
            e.Callback = "callback",
            e.H5 = "h5"
        }(li || (li = {}));
        const pi = e => {
            var t, n;
            const {onHide: o, hideByDefault: r} = e
              , a = (0,
            p.useRef)(!1)
              , [s,c] = (0,
            p.useState)(!1)
              , u = (0,
            p.useCallback)(( () => {
                null == o || o(),
                c(!1)
            }
            ), [o])
              , {language: d, wid: g, region: m} = null !== (t = (0,
            T.W)(( () => ["language", "wid", "region"]), [])) && void 0 !== t ? t : {}
              , {isMobile: _} = null !== (n = (0,
            Tt.U)(( () => ["isMobile"]), [])) && void 0 !== n ? n : {}
              , {isDark: h, direction: f} = (0,
            l.u)()
              , b = (0,
            p.useCallback)((e => {
                a.current || (a.current = !0,
                ai({
                    scene: 555,
                    extra: JSON.stringify(e)
                }).catch(null))
            }
            ), [])
              , y = (0,
            p.useCallback)((e => {
                ai({
                    scene: 555,
                    extra: JSON.stringify(e)
                }).catch(null)
            }
            ), []);
            if ((0,
            p.useEffect)(( () => (kt.LZ.on(kt.Rh, St()(b, 2e3)),
            kt.LZ.on(kt.gk, St()(y, 2e3)),
            () => {
                kt.LZ.clear(kt.Rh),
                kt.LZ.clear(kt.gk)
            }
            )), [b, y]),
            !g || !m || !d)
                return null;
            const v = {
                appId: 1988,
                wid: g,
                isMobile: _,
                region: m,
                lang: d,
                apiDomain: location.origin,
                apiPath: wt
            };
            return (0,
            i.jsx)("div", {
                id: "web-universal-popup",
                children: (0,
                i.jsx)(ri, {
                    eventReport: ci.f.event.bind(ci.f),
                    noFetchDataAtInit: r,
                    SDKConfig: v,
                    visible: s,
                    colorScheme: h ? "dark" : "light",
                    textDirection: f,
                    onReadyToClose: u,
                    onReadyToShow: () => c(!0)
                })
            })
        }
          , ui = (0,
        de.A)("div", {
            target: "e16yqw5k0"
        })(( ({isMobile: e}) => ({
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 32,
            height: "100%",
            gap: "40px",
            paddingTop: "200px",
            justifyContent: e ? "space-between" : void 0,
            paddingBottom: e ? "150px" : void 0
        })), "label:ScheduledBreakContainer;")
          , di = (0,
        de.A)("div", {
            target: "e16yqw5k1"
        })(( ({isMobile: e}) => ({
            color: "rgba(246, 246, 246, 1)",
            fontSize: e ? "40px" : "80px",
            lineHeight: e ? "48px" : "96px",
            textAlign: "center",
            fontWeight: 700,
            padding: e ? "5px" : void 0
        })), "label:Title;")
          , gi = (0,
        de.A)("div", {
            target: "e16yqw5k2"
        })(( ({isMobile: e}) => ({
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.88)",
            fontSize: e ? "16px" : "20px",
            lineHeight: e ? "20px" : "25px",
            textAlign: "center",
            letterSpacing: e ? "0%" : "1.5%",
            maxWidth: "640px",
            padding: e ? "5px" : void 0
        })), "label:Subtitle;")
          , mi = (0,
        de.A)("div", {
            target: "e16yqw5k3"
        })([{
            position: "fixed",
            backgroundColor: "rgba(0, 0, 0, 1)",
            bottom: 0,
            zIndex: 3001,
            left: 0,
            top: 0,
            right: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden"
        }], "label:ModalContainer;")
          , _i = (0,
        de.A)("div", {
            target: "e16yqw5k4"
        })([{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center"
        }], "label:BackgroundImageContainer;")
          , hi = (0,
        de.A)("img", {
            target: "e16yqw5k5"
        })([{
            height: "100%",
            objectFit: "cover"
        }], "label:BackgroundImage;")
          , fi = (0,
        de.A)("div", {
            target: "e16yqw5k6"
        })([{
            position: "relative",
            zIndex: 1,
            height: "100%"
        }], "label:ModalContent;")
          , bi = (0,
        de.A)("button", {
            target: "e16yqw5k7"
        })(( ({isMobile: e}) => ({
            backgroundColor: "white",
            padding: e ? "12px 40px 12px 40px" : "8px 14px 8px 14px",
            borderRadius: e ? "20px" : "6px"
        })), "label:SettingButton;")
          , yi = (0,
        de.A)("div", {
            target: "e16yqw5k8"
        })([{
            color: "black",
            gap: "4px",
            marginRight: "10px",
            marginLeft: "10px",
            fontWeight: 500,
            fontSize: "16px",
            textAlign: "center"
        }], "label:SettingButtonText;")
          , vi = n.p + "e0c522d68f9718996605.png";
        var Pi = n(67169)
          , xi = n(18072);
        const Ei = e => {
            const {isOpen: t, children: n, id: o} = e;
            return t ? (0,
            i.jsxs)(mi, {
                id: o,
                children: [(0,
                i.jsx)(_i, {
                    children: (0,
                    i.jsx)(hi, {
                        src: vi
                    })
                }), (0,
                i.jsx)(fi, {
                    children: n
                })]
            }) : null
        }
          , ki = e => {
            const {onSettingClick: t, rule: n, isMobile: o} = e
              , r = (0,
            Ze.s)();
            return (0,
            i.jsxs)(ui, {
                isMobile: o,
                children: [(0,
                i.jsxs)("div", {
                    children: [(0,
                    i.jsx)(di, {
                        isMobile: o,
                        children: r("FPscheduledBreak_teenBreaklimit_headline", {}, "Time Away")
                    }), (0,
                    i.jsx)(gi, {
                        isMobile: o,
                        children: r("FPscheduledBreak_teenBreaklimit_content", {
                            s_startTime: n.startTime,
                            s_endTime: n.endTime
                        }, "Your parent or guardian scheduled time away for you between {s_startTime}-{s_endTime}.")
                    })]
                }), (0,
                i.jsx)(bi, {
                    onClick: t,
                    isMobile: o,
                    children: (0,
                    i.jsx)(yi, {
                        children: r("FPscheduledBreak_teenBreaklimit_settingsButton", {}, "View Settings")
                    })
                })]
            })
        }
          , Ti = e => {
            const {onSettingClick: t, isMobile: n, header: o} = e
              , [r] = (0,
            c.S)(le.z)
              , {mute: a, setMute: s} = (0,
            Pi.ah)({
                playMode: 0,
                itemMute: !1
            })
              , {mobileDefaultMute: l} = (0,
            xi.bn)()
              , {setMobileDefaultMute: u} = (0,
            xi._B)()
              , d = r.scheduledBreakActive || !1;
            var g, m;
            return g = "full-modal-id",
            m = d,
            (0,
            p.useEffect)(( () => {
                let e;
                return m && (e = setInterval(( () => {
                    document.getElementById(g) || window.location.reload()
                }
                ), 1e3)),
                () => {
                    e && clearInterval(e)
                }
            }
            ), [g, m]),
            (0,
            p.useEffect)(( () => {
                d && (n && !l ? u(!0) : n || a || s(!0))
            }
            ), [n, d, l, a, u, s]),
            (0,
            p.useEffect)(( () => {
                d && ci.f.event("show_scheduled_break_block", {
                    type: "global"
                })
            }
            ), [d]),
            (0,
            i.jsx)(Pe.Mw, {
                isOpen: d,
                size: "Small",
                children: (0,
                i.jsx)(Ei, {
                    id: "full-modal-id",
                    isOpen: d,
                    children: (0,
                    i.jsxs)(i.Fragment, {
                        children: [o, (0,
                        i.jsx)(ki, {
                            onSettingClick: t,
                            rule: r.scheduledBreakActiveRule,
                            isMobile: n
                        })]
                    })
                })
            })
        }
        ;
        n(66994),
        n(69970);
        var Oi = n(59952)
          , Si = n(49677);
        var Ci = n(13392)
          , wi = n(58139)
          , ji = n(28303)
          , Mi = n(4206);
        const Li = (0,
        p.memo)(( () => {
            const [{avatarUrl: e, isOpen: t, pageType: n, enterMethod: o, url: r, videoId: a, userId: s, onLoginClick: l, challengeId: c, musicId: u},d] = (0,
            Ci.Su)(Mi.f, {
                selector: e => ({
                    avatarUrl: e.avatarUrl,
                    isOpen: e.isOpen,
                    pageType: e.pageType,
                    enterMethod: e.enterMethod,
                    url: e.url,
                    onLoginClick: e.handleLogin,
                    userId: e.userId,
                    challengeId: e.challengeId,
                    musicId: e.musicId,
                    videoId: e.videoId
                }),
                dependencies: []
            })
              , {handleReportCtaDismiss: g, handleReportCtaLogin: m} = (0,
            ji.$3)({
                page_type: n,
                enterMethod: o
            })
              , _ = (0,
            p.useCallback)(( () => {
                d.setIsOpen(!1)
            }
            ), [d])
              , h = (0,
            p.useCallback)(( () => {
                l(),
                location.href = r
            }
            ), [l, r]);
            return (0,
            i.jsx)(wi.X, {
                icon: e,
                video_id: a,
                user_id: s,
                challenge_id: c,
                music_id: u,
                pageType: n,
                type: "login",
                handleReportCtaLogin: m,
                handleReportCtaDismiss: g,
                visible: t,
                enterMethod: o,
                isCalledByFunBtn: !0,
                onLoginBtnClick: h,
                onCancel: _
            })
        }
        ));
        var Ai = n(4195)
          , Ni = n(95481)
          , Di = n(72153)
          , Ii = n(97397);
        const Ri = (0,
        de.A)("div", {
            target: "e9zsjvj0"
        })(( ({theme: e}) => [(0,
        Di.zy)({
            theme: e,
            fontFamily: "TikTokFont",
            fontWeight: "bold",
            fontStyle: "normal"
        }), {
            fontSize: 20,
            lineHeight: "25px",
            textAlign: "center",
            wordBreak: "break-word"
        }]), "label:DivTitle;")
          , Ui = (0,
        de.A)("div", {
            target: "e9zsjvj1"
        })(( ({theme: e}) => [(0,
        Di.zy)({
            theme: e,
            fontFamily: "TikTokFont",
            fontStyle: "normal"
        }), {
            color: e.colors.TextTertiaryAlt,
            fontSize: 15,
            lineHeight: "19.5px",
            textAlign: "center",
            marginTop: "12px",
            marginBottom: "20px",
            letterSpacing: "0.061px",
            wordBreak: "break-word"
        }]), "label:DivDesc;")
          , Bi = (0,
        de.A)(Ii.y, {
            target: "e9zsjvj2"
        })({
            width: "100%",
            height: "48px",
            lineHeight: "21px",
            padding: "8px 14px",
            borderRadius: "8px",
            marginBottom: "1px"
        }, "label:StyledLinkButton;");
        var Yi = n(11060)
          , zi = n(75792);
        const Hi = (0,
        p.memo)((function({visible: e, handleClosePhoneOrEmailPopUp: t}) {
            const n = (0,
            Ze.s)()
              , {colors: o} = (0,
            l.u)()
              , r = (0,
            Yi.W6)()
              , {search: a} = r.location
              , s = (0,
            p.useCallback)(( () => {
                t(),
                r.push({
                    pathname: zi.tH.linkPhone,
                    search: a
                })
            }
            ), [r, a, t])
              , c = (0,
            p.useCallback)(( () => {
                t()
            }
            ), [t])
              , u = {
                border: "none",
                fontWeight: "400",
                fontSize: "16px",
                color: o.TextTertiaryAlt
            };
            return (0,
            i.jsxs)(Ni.aF, {
                visible: e,
                contentStyle: {
                    width: "280px",
                    padding: "24px 20px 16px"
                },
                children: [(0,
                i.jsx)(Ri, {
                    children: n("login_fb_noLonger_LinkPhoneNumber")
                }), (0,
                i.jsx)(Ui, {
                    children: n("login_fb_noLonger_LinkPhoneNumberReminder")
                }), (0,
                i.jsx)(Bi, {
                    size: "medium",
                    buttonTheme: "primary",
                    onClick: s,
                    children: n("login_fb_noLonger_LinkPhone")
                }), (0,
                i.jsx)(Bi, {
                    size: "medium",
                    buttonTheme: "default",
                    style: u,
                    onClick: c,
                    children: n("login_fb_noLonger_notNow_cta")
                })]
            })
        }
        ));
        var Fi = n(8615);
        const Ki = [n(82715).OZ.setting]
          , Wi = function({suggestAccountBind: e}) {
            (0,
            ie.Du)(!1),
            function() {
                const {photoSensitiveVideosSetting: e} = (0,
                r.P)(Oi.w);
                (0,
                p.useEffect)(( () => {
                    Si._.handleRemovePhotosensitiveStatus(1 === e ? "on" : "off")
                }
                ), [])
            }(),
            ( () => {
                const {user: e} = (0,
                E.L$)((0,
                T.W)(( () => ["user"]), []))
                  , t = (0,
                Ci.wA)(Oi.w);
                (0,
                p.useEffect)(( () => {
                    var n;
                    if (e) {
                        const i = null !== (n = e.photoSensitiveVideosSetting) && void 0 !== n ? n : 0;
                        t.setPhotoSensitiveVideosSetting(i),
                        t.setLoginStatePhotoSensitiveVideosSetting(i)
                    }
                }
                ), [e, t])
            }
            )(),
            (0,
            o.zc)(),
            (0,
            o.$B)(),
            (0,
            Ai.Jl)(),
            (0,
            Ai.Ah)(),
            (0,
            o.Ar)(),
            function() {
                var e, t, n, i;
                const [o,s] = (0,
                c.S)(le.z)
                  , l = (0,
                ae.Us)()
                  , {abTestVersion: u} = null !== (e = (0,
                T.W)(( () => ["abTestVersion"]), [])) && void 0 !== e ? e : {}
                  , d = null !== (t = (0,
                se.qt)(u, "digital_wellbeing_web")) && void 0 !== t ? t : "v0"
                  , g = null !== (n = (0,
                se.qt)(u, "scheduled_breaks_teens")) && void 0 !== n ? n : "v0"
                  , {user: m} = (0,
                r.P)(a.L, {
                    selector: e => {
                        var t;
                        return {
                            user: null === (t = e.appContext) || void 0 === t ? void 0 : t.user
                        }
                    }
                    ,
                    dependencies: []
                })
                  , _ = Boolean(m);
                (0,
                p.useEffect)(( () => {
                    if ("v0" === d || !_)
                        return;
                    const e = new Date
                      , t = (0,
                    ce.BX)(e)
                      , n = e.getTime()
                      , i = (0,
                    ce.$n)(n)
                      , r = (0,
                    ce.zk)(e);
                    s.uploadAppOpentimes({
                        reqPayload: {
                            upload_timestamp: t,
                            upload_type: 1,
                            app_open_times: [{
                                upload_date: r,
                                day_open_times: i ? 0 : 1,
                                night_open_times: i ? 1 : 0
                            }]
                        }
                    }),
                    s.init();
                    const a = (0,
                    oe.R)(document, "visibilitychange").subscribe(( () => {
                        "hidden" === document.visibilityState ? (s.setPageHidden(),
                        (0,
                        ce.nN)("updateActiveTimeUsage", {
                            value: {
                                activeTimeUsage: o.activeTimeUsage,
                                timeStamp: (new Date).getTime()
                            }
                        }, re.LH)) : "visible" === document.visibilityState && s.setPageVisible()
                    }
                    ))
                      , l = (0,
                    oe.R)(window, "storage").subscribe((e => {
                        const t = e;
                        if (t.key !== re.o4 && t.key !== re.LH)
                            return;
                        const n = JSON.parse(t.newValue || "");
                        switch (n.event) {
                        case "upload":
                            const e = Number(n.value);
                            e && s.setLastUploadTime(new Date(e));
                            break;
                        case "updateDailySTM":
                            n && s.syncDailySTMUpdateHandler(n.value);
                            break;
                        case "updateSleepTime":
                            n && s.syncSleepSettingHandler(n.value);
                            break;
                        case "updateTimeBreak":
                            n && s.syncSessionDurationHandler(n.value)
                        }
                    }
                    ));
                    return () => {
                        s.stopTimer$(),
                        a && a.unsubscribe(),
                        l && l.unsubscribe()
                    }
                }
                ), []),
                (0,
                p.useEffect)(( () => {
                    "v0" !== d && _ && o.isPageHidden && o.isOpenDailySTM && s.uploadScreenTime()
                }
                ), [o.isPageHidden]),
                (0,
                p.useEffect)(( () => {
                    "v0" !== d && _ && o.isOpenDailySTM && !o.isPageHidden && (s.startMonitorDayChange(),
                    s.startMonitorTimeLimit(),
                    s.startUploadSTMEveryTenMinutes(),
                    s.startAccumulateActiveTime())
                }
                ), [o.isOpenDailySTM, o.isPageHidden]),
                (0,
                p.useEffect)(( () => {
                    if (!o.isOpenDailySTM || o.isPageHidden)
                        return;
                    const e = o.userSTMLimit;
                    o.timeUsageToday >= 60 * e ? s.checkDailySTMPopupShow({
                        date: (0,
                        ce.zk)(o.lastUploadTime),
                        screen_time_limit_type: o.STMInterventionType
                    }) : s.setDefaultDailySTMPopup(!1)
                }
                ), [o.isOpenDailySTM, o.userSTMLimit, o.isPageHidden, o.timeUsageToday]),
                function(e, t, n={
                    immediate: !1
                }) {
                    const {immediate: i} = n
                      , o = (0,
                    p.useRef)()
                      , r = (0,
                    p.useRef)(!1);
                    (0,
                    p.useEffect)(( () => {
                        const n = () => t(o.current);
                        r.current ? n() : (r.current = !0,
                        i && n()),
                        o.current = e
                    }
                    ), [e])
                }(null === (i = l.appContext) || void 0 === i ? void 0 : i.user, (e => {
                    var t, n;
                    "v0" !== d && _ && (!e && Boolean(null === (t = l.appContext) || void 0 === t ? void 0 : t.user) ? (s.init(),
                    s.setLogin()) : e && !Boolean(null === (n = l.appContext) || void 0 === n ? void 0 : n.user) && (s.uploadScreenTime(),
                    s.setNotLogin()))
                }
                )),
                (0,
                p.useEffect)(( () => {
                    "v0" !== d && _ && (s.uploadScreenTimeWhenDayChange(),
                    s.init())
                }
                ), [o.dayChange]),
                (0,
                p.useEffect)(( () => {
                    "v0" !== d && _ && o.tenMinutesInterval && s.uploadScreenTime()
                }
                ), [o.tenMinutesInterval]),
                (0,
                p.useEffect)(( () => {
                    "v0" !== d && _ && o.defaultDailySTMPopup && (s.setIsDisplayOtherPopupWhenTimeBreak(!0),
                    s.uploadScreenTime({
                        uploadType: 5
                    }))
                }
                ), [o.defaultDailySTMPopup]),
                (0,
                p.useEffect)(( () => {
                    "v0" !== d && _ && (2 === o.userIdentity || 4 === o.userIdentity && o.isFpTeenOpenDailySTM) && s.getParentInfo({})
                }
                ), [o.userIdentity, o.isFpTeenOpenDailySTM]),
                (0,
                p.useEffect)(( () => {
                    "v0" !== d && _ && (o.isOpenSleepReminder && !1 === o.isPageHidden ? (s.stopSleepReminder$(),
                    s.openSleepReminder()) : s.stopSleepReminder$())
                }
                ), [o.isOpenSleepReminder, o.isPageHidden]),
                (0,
                p.useEffect)(( () => {
                    "v0" !== d && _ && o.sleepReminderPopup && !o.isPageHidden && s.setIsDisplayOtherPopupWhenTimeBreak(!0)
                }
                ), [o.sleepReminderPopup, o.isPageHidden]),
                (0,
                p.useEffect)(( () => {
                    "v0" !== d && _ && o.durationReminder && !o.isPageHidden && (s.stopTimeBreak$(),
                    s.processTimeBreak())
                }
                ), [o.durationReminder, o.isPageHidden]),
                (0,
                p.useEffect)(( () => {
                    "v0" !== d && _ && localStorage.setItem(re.o4, JSON.stringify({
                        event: "upload",
                        value: o.lastUploadTime
                    }))
                }
                ), [o.lastUploadTime]),
                (0,
                p.useEffect)(( () => {
                    "v0" === g && o.shouldShowScheduledBreak && s.disableScheduledBreak()
                }
                ), [g, o.shouldShowScheduledBreak]),
                (0,
                p.useEffect)(( () => {
                    "v0" !== d && _ && "v0" !== g && !o.isPageHidden && o.scheduledBreakEnabled && (s.scheduledBreakProcess(),
                    s.stopScheduleBreak$(),
                    s.startScheduledBreakTimer())
                }
                ), [o.scheduledBreakEnabled, o.isPageHidden])
            }();
            const {handlePopupHide: t, handlePopupShow: n} = function() {
                const [e,t] = (0,
                p.useState)(0)
                  , n = (0,
                p.useCallback)(( () => {
                    t(0)
                }
                ), []);
                return {
                    popupHeight: e,
                    handlePopupShow: (0,
                    p.useCallback)((e => {
                        t(e)
                    }
                    ), []),
                    handlePopupHide: n
                }
            }()
              , [s,l] = (0,
            p.useState)(!1)
              , u = function() {
                const e = (0,
                ue._S)(D.gM)
                  , t = new Date;
                if (e) {
                    const n = new Date(parseInt(e, 10));
                    if ((n.getDate() === t.getDate() || n.getDate() === t.getDate() - 1) && n.getMonth() === t.getMonth() && n.getFullYear() === t.getFullYear())
                        return !0
                }
                return !1
            }()
              , d = (0,
            pe.ZO)()
              , {appContext: g} = (0,
            r.P)(a.L)
              , m = (0,
            Yi.W5)(Ki)
              , _ = (0,
            Yi.W6)();
            (0,
            p.useEffect)(( () => {
                if (!u && e && d) {
                    l(!0),
                    Fi._.handleLinkPhoneOrEmailPopupShow({
                        enterMethod: "periodic"
                    });
                    const e = new Date;
                    (0,
                    ue.AP)(D.gM, e.getTime().toString())
                }
            }
            ), []);
            const h = (0,
            p.useCallback)(( () => {
                l(!1)
            }
            ), [l]);
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(Li, {}), (0,
                i.jsx)(et, {}), (0,
                i.jsx)(ot, {}), (0,
                i.jsx)(ct, {}), (0,
                i.jsx)(gt, {}), (0,
                i.jsx)(pi, {
                    onShow: n,
                    onHide: t
                }), (0,
                i.jsx)(Hi, {
                    visible: s,
                    handleClosePhoneOrEmailPopUp: h
                }), !m && (0,
                i.jsx)(Ti, {
                    onSettingClick: () => {
                        const e = null == g ? void 0 : g.language;
                        _.push({
                            pathname: "setting",
                            search: `?${e ? `lang=${e}&` : ""}activeTab=screen-time-branch`
                        })
                    }
                    ,
                    isMobile: !0
                })]
            })
        }
          , $i = () => {
            var e, t;
            const {appContext: n} = (0,
            r.P)(a.L, {
                selector: e => ({
                    appContext: e.appContext
                }),
                dependencies: []
            })
              , {bizContext: l} = (0,
            r.P)(s.$, {
                selector: e => ({
                    bizContext: e.bizContext
                }),
                dependencies: []
            })
              , c = (0,
            o.cf)()
              , p = null !== (t = null === (e = null == n ? void 0 : n.user) || void 0 === e ? void 0 : e.suggestAccountBind) && void 0 !== t && t;
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(U, {
                    appContext: n,
                    bizContext: l,
                    slardarBid: B.H,
                    initialPid: c,
                    usePumbaaMeta: !0
                }), (0,
                i.jsx)(ee, {
                    appContext: n
                }), (0,
                i.jsx)(ne, {
                    appContext: n
                }), (0,
                i.jsx)(Wi, {
                    suggestAccountBind: p
                })]
            })
        }
    }
}]);
