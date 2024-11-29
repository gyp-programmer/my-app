// headSideEffect.island.4267f58107d8e64cb66f.js
"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[1636], {
    34020: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => Vi
        });
        var i = n(24643)
          , o = n(77195)
          , r = n(41271)
          , a = n(50970)
          , s = n(54888)
          , l = n(67518)
          , c = n(46682)
          , u = n(40099)
          , d = n(28591)
          , p = n(58632)
          , h = n(64162)
          , _ = n(4126)
          , g = n(93995)
          , m = n(8536)
          , f = n(62564)
          , b = n(26324)
          , v = n(38203)
          , y = n(21313);
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
        p.Cg)([(0,
        v._)(), (0,
        p.Sn)("design:paramtypes", [y.pM])], P);
        let k = class extends h.E {
            constructor(e) {
                super(),
                this.service = e,
                this.defaultState = null
            }
            getComplianceSettings(e) {
                return e.pipe((0,
                m.Z)(( () => this.service.getComplianceSettings().pipe((0,
                f.T)((e => (null == e || e.status_code,
                this.noop())))))))
            }
        }
        ;
        (0,
        p.Cg)([(0,
        _.uk)(), (0,
        p.Sn)("design:type", b.c)], k.prototype, "dispose$", void 0),
        (0,
        p.Cg)([(0,
        _.Mj)(), (0,
        p.Sn)("design:type", Function), (0,
        p.Sn)("design:paramtypes", [b.c]), (0,
        p.Sn)("design:returntype", void 0)], k.prototype, "getComplianceSettings", null),
        k = (0,
        p.Cg)([(0,
        g.n)("ComplianceSettingsModule"), (0,
        p.Sn)("design:paramtypes", [P])], k);
        var E = n(60484)
          , x = n(55462)
          , T = n(49057);
        const O = function({iconSrc: e="https://www.tiktok.com/favicon.ico"}) {
            return (0,
            i.jsxs)(d.mg, {
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
            i.jsx)(d.mg, {
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
          , A = n(72277)
          , L = n(11654)
          , N = n(23721)
          , D = n(45297);
        const I = function({appContext: e, bizContext: t, slardarBid: n, initialPid: o, async: r=!1, reportImage: a}) {
            var s, l;
            const {abTestVersion: c, env: p, botType: h, user: _, wid: g, region: m} = null != e ? e : {}
              , {isMobile: f, domains: b, isTTP: v, idc: y} = null != t ? t : {}
              , P = (0,
            w.Nj)(L.V)
              , k = (0,
            u.useMemo)(( () => {
                var e;
                return Object.assign(Object.assign({
                    region: null != m ? m : "",
                    botType: null != h ? h : "",
                    isMobile: Boolean(f).toString(),
                    isDowngrade: (0,
                    M.qk)().toString(),
                    isLogin: Boolean(_).toString(),
                    isPPE: "ppe" === (null == p ? void 0 : p.type),
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
                            A.s.includes(e) && (t[e] = n.vid)
                        }
                        ))
                    } catch (e) {
                        console.error("Abtest config parse error", e)
                    }
                    return t
                }
                )(c)), {
                    uid: null !== (e = null == _ ? void 0 : _.uid) && void 0 !== e ? e : "",
                    idc: null != y ? y : "unknown"
                })
            }
            ), [m, h, f, _, null == p ? void 0 : p.type, c])
              , {enableInlineScript: E} = (0,
            x.yf)()
              , T = !!a || "v2" === (null === (l = null === (s = null == c ? void 0 : c.parameters) || void 0 === s ? void 0 : s.enable_slardar_image) || void 0 === l ? void 0 : l.vid)
              , O = (0,
            u.useMemo)(( () => Object.assign(Object.assign(Object.assign({}, N.dg), {
                bid: n,
                env: "boe" === (null == p ? void 0 : p.type) || "ppe" === (null == p ? void 0 : p.type) ? "test" : "production",
                domain: null == b ? void 0 : b.slardar,
                disableInit: !0,
                useLocalConfig: "ppe" === (null == p ? void 0 : p.type) || "boe" === (null == p ? void 0 : p.type),
                integrations: [...P.registerImageXPlugin(T, a && "boolean" != typeof a ? a.sample : void 0)]
            }), v ? {
                sdkUrl: "https://lf16-cdn-tos.tiktokcdn-us.com/obj/static-tx/slardar/fe/sdk-web/browser.oci.js",
                pluginPathPrefix: "https://lf16-cdn-tos.tiktokcdn-us.com/obj/static-tx/slardar/fe/sdk-web/plugins"
            } : {})), [null == b ? void 0 : b.slardar, null == p ? void 0 : p.type, v, n])
              , S = (0,
            u.useMemo)(( () => JSON.stringify(O)), [O]);
            return (0,
            u.useEffect)(( () => {
                let e;
                const t = () => {
                    window.SlardarClient ? P.hasStarted() || (P.mountBeforeSendEvent(),
                    P.init(Object.assign(Object.assign({}, O), {
                        pid: o
                    })),
                    P.config({
                        userId: g
                    }),
                    P.start()) : e = window.requestIdleCallback ? window.requestIdleCallback(t) : window.setTimeout(t, 1)
                }
                ;
                return P.context(k),
                "delay_start_until_manually_called" === o ? (P.preserveConfig(O),
                P.preserveExtraInfo({
                    userId: g
                })) : (P.mountBeforeSendEvent(),
                P.init(Object.assign(Object.assign({}, O), {
                    pid: o
                })),
                P.config({
                    userId: g
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
            i.jsxs)(d.mg, {
                children: [(0,
                i.jsx)("script", {
                    id: "slardar-config",
                    type: "application/json",
                    children: S
                }), r ? (0,
                i.jsx)("script", {
                    src: D.se[v ? "TTP" : "ROW"].slardarWeb,
                    async: "DO_NOT_DELETE_FOR_REHYDRATE_ERROR"
                }) : (0,
                i.jsx)("script", {
                    src: D.se[v ? "TTP" : "ROW"].slardarWeb
                })]
            })
        }
          , R = function({isLogin: e, isFtc: t}) {
            return (0,
            i.jsx)(d.mg, {
                children: (0,
                i.jsx)("meta", {
                    name: "pumbaa-ctx",
                    content: `login=${e ? 1 : 0},ftc=${t ? 1 : 0}`
                })
            })
        }
          , U = function({appContext: e, bizContext: t, slardarBid: n, iconSrc: o, initialPid: r, asyncSlardar: a=!1, usePumbaaMeta: s=!1, slardarReportImage: p}) {
            var h;
            const {language: _} = (0,
            E.L$)(e)
              , {isDark: g} = (0,
            l.u)()
              , {user: m} = null !== (h = (0,
            T.W)(( () => ["user"]), [])) && void 0 !== h ? h : {}
              , {enableHeadComponent: f} = (0,
            x.yf)()
              , b = Boolean(m)
              , v = Boolean(null == m ? void 0 : m.ftcUser)
              , y = (0,
            c.w)(k);
            return (0,
            u.useEffect)(( () => {
                b && y.getComplianceSettings()
            }
            ), [b, y]),
            (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(d.mg, {
                    htmlAttributes: {
                        lang: _,
                        "data-theme": g ? "dark" : "light"
                    }
                }), (0,
                i.jsx)(O, {
                    iconSrc: o
                }), s && (0,
                i.jsx)(R, {
                    isLogin: b,
                    isFtc: v
                }), f && (0,
                i.jsx)(I, {
                    appContext: e,
                    bizContext: t,
                    slardarBid: n,
                    initialPid: r,
                    async: a,
                    reportImage: p
                }), (0,
                i.jsx)(C, {})]
            })
        };
        var B = n(48211)
          , Y = n(300)
          , z = n.n(Y)
          , H = n(56268)
          , F = n(13549)
          , V = n(98796)
          , W = n(32125)
          , K = n(10828)
          , $ = n(4929)
          , G = n(9472)
          , q = n(78662)
          , X = n(67768);
        function J(e) {
            return null == e || "number" == typeof e || "boolean" == typeof e ? e : "string" == typeof e ? e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : Array.isArray(e) ? e.map((e => J(e))) : "[object Object]" === Object.prototype.toString.call(e) ? Object.keys(e).reduce(( (t, n) => (t[n] = J(e[n]),
            t)), {}) : J(String(e))
        }
        class Z extends u.PureComponent {
            dynamicAddCompKey(e=[]) {
                return e && e.length ? e.map(J).reduce(( (e, t, n) => {
                    var o;
                    const [r="",a={},s] = t;
                    return "" !== r && 0 !== Object.keys(a).length && e.push((0,
                    i.jsx)(X.hp, {
                        dangerouslyExposeHtml: !0,
                        id: null !== (o = null == s ? void 0 : s.name) && void 0 !== o ? o : r,
                        children: (0,
                        i.jsx)(X.ck, {
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
                  , {title: r="", keywords: a="", description: s="", robotsContent: l="", canonicalHref: c="", alternateHref: u="", amphtmlHref: d="", applicableDevice: p="", hreflangList: h=[]} = t;
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
                        }, "robots"), p && (0,
                        i.jsx)("meta", {
                            name: "applicable-device",
                            content: p
                        }, "applicable-device"), c && (0,
                        i.jsx)("link", {
                            rel: "canonical",
                            href: c
                        }, "canonical"), d && (0,
                        i.jsx)("link", {
                            rel: "amphtml",
                            href: d
                        }, "amphtml"), u && (0,
                        i.jsx)("link", {
                            rel: "alternate",
                            media: "only screen and (max-width: 640px)",
                            href: u
                        }, "alternate-media"), h.length ? h.map(( ({hreflang: e, href: t}) => (0,
                        i.jsx)("link", {
                            rel: "alternate",
                            hrefLang: e,
                            href: t
                        }, e))) : null, o]
                    }), this.dynamicAddCompKey(n)]
                })
            }
        }
        const Q = Z
          , ee = function({appContext: e}) {
            const {pathname: t} = (0,
            H.useLocation)()
              , {metaParams: n, jsonldList: o, disableAlternateLink: r, generateAlternateWithCanonical: a, enableAlternateHreflang: s, alternateHreflangList: l} = (0,
            V.X)(G.b, {
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
            const p = (0,
            u.useMemo)(( () => {
                let e = [];
                const {robotsContent: t, canonicalHref: i} = null != n ? n : {}
                  , o = t && !t.includes("noindex")
                  , u = a && null != i ? i : `${K.C}${c}`;
                if (o && s)
                    return Object.assign(Object.assign({}, n), {
                        hreflangList: z()(l, "hreflang")
                    });
                if (o && !r) {
                    const t = (0,
                    q.Iz)(c);
                    e = [{
                        hreflang: "x-default",
                        href: t ? K.C : u
                    }],
                    $.wX.forEach(( ({value: n}) => {
                        const i = n.replace(/(^zh([_-]\w+)*)/g, "zh-Hant")
                          , o = t ? `${K.C}/${i}/` : `${u}?lang=${i}`;
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
                wrappedHead: d.mg,
                metaParams: p,
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
            i.jsx)(d.mg, {
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
          , se = n(71281)
          , le = n(67581)
          , ce = n(86515);
        var ue = n(88920)
          , de = n(58305)
          , pe = n(62186);
        const he = (0,
        pe.A)("p", {
            target: "e1ckpjj30"
        })([{
            textAlign: "center",
            fontSize: 15,
            margin: "16px 0 12px 0"
        }], "label:Description;")
          , _e = (0,
        pe.A)("div", {
            target: "e1ckpjj31"
        })([{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#FE2C55"
        }], "label:DIVEditFuture;")
          , ge = (0,
        pe.A)("div", {
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
          , me = (0,
        pe.A)("img", {
            target: "e1ckpjj33"
        })([ () => ({
            height: 149
        })], "label:Banner;")
          , fe = (0,
        pe.A)("h3", {
            target: "e1ckpjj34"
        })([{
            marginTop: 36,
            marginBottom: 12,
            fontSize: 20
        }], "label:Title;")
          , be = n.p + "699cc32d70bd43f9f12c.png";
        var ve = n(60986)
          , ye = n(58130)
          , Pe = n(9261)
          , ke = n(99822);
        const Ee = "dailyscreentime_notifreminder_desc_minutes"
          , xe = "familyPairing_dailyScreenTime_intervention_desc_minutes"
          , Te = "dailyscreentime_notifreminder_desc_hours"
          , Oe = "familyPairing_dailyScreenTime_intervention_desc_hours"
          , Se = "dailyscreentime_notifreminder_desc_hoursminutes"
          , Ce = "familyPairing_dailyScreenTime_intervention_desc_hoursMinutes"
          , we = "dailyscreentime_notifreminder_toast_incorrectpasscode"
          , je = "nightscreentimemgmt_sleepreminders_modal_readyforsleep_heading"
          , Me = "nightscreentimemgmt_sleepreminders_modal_readyforsleep_firstreminder_desc"
          , Ae = "nightscreentimemgmt_sleepreminders_modal_readyforsleep_editreminder_link"
          , Le = "nightscreentimemgmt_sleepreminders_modal_readyforsleep_ok_btn"
          , Ne = "nightscreentimemgmt_sleepreminders_modal_readyforsleep_delay_btn_variantone"
          , De = "screentime_breakreminder_modal_timetotakeabreak_title"
          , Ie = "screentime_breakreminder_modal_timetotakeabreak_desc_1"
          , Re = "screentime_breakreminder_modal_editreminder_link"
          , Ue = "screentime_breakreminder_modal_ok_btn"
          , Be = "screentime_breakreminder_modal_snooze_link"
          , Ye = "dailyscreentime_notifreminder_header_ready"
          , ze = "familyPairing_dailyScreenTime_intervention_headline"
          , He = "familyPairing_dailyScreenTime_intervention_returnToTikTok_toast"
          , Fe = "dailyscreentime_notifreminder_button_returntotiktok"
          , Ve = "dailyscreentime_introsheet_minors_heading"
          , We = "dailyscreentime_introsheet_minors_firstbullet_logoff"
          , Ke = "dailyscreentime_introsheet_minors_secondbullet_settingsprivacy"
          , $e = "dailyscreentime_introsheet_minors_firstbutton_gotit"
          , Ge = "dailyscreentime_introsheet_minors_secondbutton_manage";
        var qe = n(40173)
          , Xe = n(82182)
          , Je = n(66345);
        const Ze = () => {
            const [e,t] = (0,
            c.S)(le.z)
              , n = (0,
            w.Nj)(Xe.i)
              , {isDark: o} = (0,
            l.u)()
              , r = (0,
            qe.s)()
              , [a,s] = (0,
            u.useState)(0);
            (0,
            u.useEffect)(( () => {
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
            const d = (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(me, {
                    src: o ? be : ve
                }), (0,
                i.jsx)(fe, {
                    children: r(De, {}, "Time to take a break?")
                }), (0,
                i.jsx)(he, {
                    children: r(Ie, {
                        num: e.durationReminder
                    }, `You’ve had ${e.durationReminder} minutes of uninterrupted screen time. Consider taking a break for a while.`)
                }), (0,
                i.jsxs)(_e, {
                    onClick: () => {
                        t.setBreakReminderPopup(!1),
                        s(1),
                        n.uploadMetric("web_time_break_edit")
                    }
                    ,
                    children: [(0,
                    i.jsx)(Pe.QK, {
                        label: r(Re, {}, "Edit future reminders"),
                        color: "Primary"
                    }), (0,
                    i.jsx)(ke.Z, {
                        color: "Primary",
                        size: 14
                    })]
                }), (0,
                i.jsx)(Je.p, {
                    visiblePopupType: a,
                    changeVisiblePopupType: e => {
                        s(e)
                    }
                })]
            });
            return (0,
            i.jsx)(ye.yl7, {
                isVisible: e.breakReminderPopup,
                message: e.breakReminderPopup ? d : null,
                actionVariant: "text",
                widthVariant: "wide",
                actions: [{
                    onClick: () => {
                        t.setBreakReminderPopup(!1),
                        n.uploadMetric("web_time_break_ok")
                    }
                    ,
                    text: r(Ue, {}, "OK"),
                    variant: "primary"
                }, {
                    onClick: () => {
                        t.setBreakReminderPopup(!1),
                        t.startTimeBreakSnoozeTimer(),
                        n.uploadMetric("web_time_break_snooze")
                    }
                    ,
                    text: r(Be, {}, "Snooze(10m)"),
                    variant: "secondary"
                }]
            })
        }
          , Qe = n.p + "2c1d4382cd9969108f39.png";
        var et = n(17785)
          , tt = n(26456);
        const nt = () => {
            var e;
            const [t,n] = (0,
            c.S)(le.z)
              , o = (0,
            w.Nj)(Xe.i)
              , r = (0,
            qe.s)()
              , {isDark: a} = (0,
            l.u)()
              , s = r("screenTime_web_sleepReminders_setTime_am_desc", {}, "AM")
              , d = r("screenTime_web_sleepReminders_setTime_pm_desc", {}, "PM")
              , {language: p} = null !== (e = (0,
            T.W)(( () => ["language", "user"]), [])) && void 0 !== e ? e : {}
              , h = (0,
            H.useHistory)()
              , _ = (0,
            u.useMemo)(( () => {
                var e, n;
                const i = (null === (e = t.sleepTimeSettings) || void 0 === e ? void 0 : e.sleep_time_start_hour) || 0
                  , o = (null === (n = t.sleepTimeSettings) || void 0 === n ? void 0 : n.sleep_time_start_minute) || 0
                  , r = (new Date).setHours(i, o)
                  , a = i < 12 ? s : d;
                return tt.Ay.format(r, "LT") + ` ${a}`
            }
            ), [t.sleepTimeSettings])
              , g = (0,
            u.useMemo)(( () => !t.defaultDailySTMPopup && t.sleepReminderPopup && t.isOpenSleepReminder), [t.sleepReminderPopup, t.defaultDailySTMPopup, t.isOpenSleepReminder]);
            (0,
            u.useEffect)(( () => {
                g && o.uploadMetric("web_sleep_reminder_pop_up")
            }
            ), [g]);
            const m = (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(me, {
                    src: a ? Qe : et
                }), (0,
                i.jsx)(fe, {
                    style: {
                        marginTop: 36
                    },
                    children: r(je, {}, "Ready for bed?")
                }), (0,
                i.jsx)(he, {
                    style: {
                        marginBottom: 12
                    },
                    children: r(Me, {
                        string: _
                    }, `You’ve set your sleep time for ${_}.`)
                }), (0,
                i.jsxs)(_e, {
                    onClick: () => {
                        t.sleepTimeSettings && n.uploadSleepReminderAction({
                            sleep_time_settings: t.sleepTimeSettings,
                            user_real_timestamp: Math.round(Date.now() / 1e3),
                            user_action: 2
                        }),
                        n.setSleepReminderPopup(!1),
                        o.uploadMetric("web_sleep_reminder_edit"),
                        h.push({
                            pathname: "/setting",
                            search: `?lang=${p}&activeTab=sleep-reminder`
                        })
                    }
                    ,
                    children: [(0,
                    i.jsx)(Pe.QK, {
                        label: r(Ae, {}, "Edit reminder"),
                        color: "Primary"
                    }), (0,
                    i.jsx)(ke.Z, {
                        color: "Primary",
                        size: 14
                    })]
                })]
            });
            return (0,
            i.jsx)(ye.yl7, {
                isVisible: g,
                message: g ? m : null,
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
                    text: r(Le, {}, "OK"),
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
                    text: r(Ne, {}, "Delay (10m)"),
                    variant: "secondary"
                }]
            })
        }
          , it = n.p + "d5dd413dd013f33ce41d.png";
        var ot = n(72438)
          , rt = n(93897)
          , at = n(70813);
        const st = () => {
            var e;
            const t = (0,
            qe.s)()
              , {isDark: n} = (0,
            l.u)()
              , o = (0,
            w.Nj)(Xe.i)
              , [r,a] = (0,
            c.S)(le.z)
              , s = (0,
            H.useHistory)()
              , {language: d} = null !== (e = (0,
            T.W)(( () => ["language"]), [])) && void 0 !== e ? e : {}
              , p = (0,
            u.useMemo)(( () => {
                const e = 2 === r.STMInterventionType && r.defaultDailySTMPopup;
                return e && o.uploadMetric("web_stm_pop_up"),
                e
            }
            ), [r.STMInterventionType, r.defaultDailySTMPopup])
              , h = {
                type: "icon",
                items: [{
                    text: t(We, {}, "We’ll let you know if your time is up so it’s easier to log off"),
                    iconComponent: rt.A
                }, {
                    text: t(Ke, {}, "You can manage your daily screen time in Settings and privacy"),
                    iconComponent: at.A
                }]
            }
              , _ = (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(ye.I05, {
                    className: "mt-32",
                    variant: "primary",
                    text: t($e, {}, "Got it"),
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
                i.jsx)(ge, {
                    style: {
                        marginTop: 6
                    },
                    onClick: () => {
                        a.setDefaultDailySTMPopup(!1),
                        s.push({
                            pathname: "/setting",
                            search: `lang=${d}&activeTab=custom-select-screen-time`
                        })
                    }
                    ,
                    children: t(Ge, {}, "Manage Daily Screen Time")
                })]
            });
            return (0,
            i.jsx)(ye.NCo, {
                isVisible: p,
                image: p ? {
                    type: "large-image",
                    src: n ? it : ot
                } : void 0,
                title: t(Ve, {}, "To support your well-being, your daily screen time is set to 1 hour"),
                message: h,
                accessory: _,
                actions: []
            })
        }
          , lt = n.p + "57ca16f6b5b90c7753d0.png"
          , ct = n.p + "81479b0f5488c5f3b85d.png"
          , ut = (0,
        u.memo)((function({onPasswordChange: e}) {
            const t = [(0,
            u.useRef)(null), (0,
            u.useRef)(null), (0,
            u.useRef)(null), (0,
            u.useRef)(null)]
              , [n,o] = (0,
            u.useState)("");
            return (0,
            u.useEffect)(( () => {
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
                i.jsx)(ye.jl$, {
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
          , dt = ({passcode: e="1234"}) => {
            var t;
            const n = (0,
            qe.s)()
              , {isDark: o} = (0,
            l.u)()
              , [r,a] = (0,
            u.useState)("")
              , s = 4 !== r.length
              , d = (0,
            w.Nj)(Xe.i)
              , [p,h] = (0,
            c.S)(le.z)
              , {user: _} = null !== (t = (0,
            T.W)(( () => ["user"]), [])) && void 0 !== t ? t : {}
              , g = (0,
            u.useMemo)(( () => p.isFpTeenOpenDailySTM), [p.isFpTeenOpenDailySTM])
              , m = (0,
            u.useMemo)(( () => p.parentUsername), [p.parentUsername])
              , f = (0,
            u.useMemo)(( () => Math.floor((p.timeUsageToday + p.activeTimeUsage) / 3600)), [p.timeUsageToday, p.activeTimeUsage])
              , b = (0,
            u.useMemo)(( () => Math.floor((p.timeUsageToday + p.activeTimeUsage / 60) % 60)), [p.timeUsageToday, p.activeTimeUsage])
              , v = (0,
            u.useMemo)(( () => (1 === p.STMInterventionType || 3 === p.STMInterventionType) && p.defaultDailySTMPopup && p.isOpenDailySTM), [p.STMInterventionType, p.defaultDailySTMPopup, p.isOpenDailySTM])
              , y = (0,
            u.useMemo)(( () => {
                if (b && f) {
                    const e = (0,
                    ce.gO)(n(Se, {
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
                    ce.gO)(n(Te, {
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
                ce.gO)(n(Ee, {
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
            u.useMemo)(( () => b && f ? (0,
            ce.gO)(n(Ce, {
                minutes: b,
                hours: f,
                username: m
            }, `You’ve spent ${f}h ${b}m on TikTok today. Close it to stay within your daily time, or enter a passcode from ${m} to return to TikTok.`), {
                minutes: b.toString(),
                hours: f.toString(),
                username: m
            }) : f ? (0,
            ce.gO)(n(Oe, {
                hours: f,
                username: m
            }, `You’ve spent ${f}h on TikTok today. Close it to stay within your daily time, or enter a passcode from ${m} to return to TikTok.`), {
                hours: f.toString(),
                username: m
            }) : (0,
            ce.gO)(n(xe, {
                minutes: b,
                username: m
            }, `You’ve spent ${b}m on TikTok today. Close it to stay within your daily time, or enter a passcode from ${m} to return to TikTok.`), {
                minutes: b.toString(),
                username: m
            })), [n, m, f, b])
              , k = (0,
            u.useMemo)(( () => g ? P : y), [g, y, P])
              , E = (0,
            u.useMemo)(( () => n(g ? ze : Ye, {}, "Ready to close TikTok?")), [g])
              , x = () => {
                ye.DbI.success(n(He, {}, "You've returned to Tiktok")),
                d.uploadDailySTMPopupSuccess({
                    date: (0,
                    ce.zk)(new Date),
                    screen_time_limit_type: g ? 3 : 1
                }).subscribe(),
                d.uploadMetric("web_users_return_tt"),
                h.setDefaultDailySTMPopup(!1)
            }
              , O = () => {
                d.uploadMetric("web_dstime_passcode_error"),
                ye.DbI.error(n(we, {}, "The passcode you entered is incorrect. Please try again."))
            }
              , S = (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(he, {
                    children: k
                }), (0,
                i.jsx)(ut, {
                    onPasswordChange: e => {
                        a(e)
                    }
                }), (0,
                i.jsx)(ye.I05, {
                    onClick: () => {
                        try {
                            if (d.uploadMetric("web_dstime_enter_passcode"),
                            g) {
                                if (g) {
                                    const e = (0,
                                    ce.Zf)(r, (null == _ ? void 0 : _.uid) || "");
                                    d.uploadDailySTMTeenPinSuccess(e).subscribe({
                                        next: e => {
                                            0 === e.status_code ? x() : O()
                                        }
                                        ,
                                        error: () => {
                                            O()
                                        }
                                    })
                                }
                            } else
                                r !== e ? O() : x()
                        } catch (e) {
                            ye.DbI.info(n(we, {}, "The passcode you entered is incorrect. Please try again.")),
                            d.uploadMetric("web_dstime_passcode_error")
                        }
                    }
                    ,
                    disabled: s,
                    variant: "primary",
                    text: n(Fe, {}, "Return to Tiktok"),
                    useNewRadiusDesign: !0
                })]
            });
            return (0,
            u.useEffect)(( () => {
                d.uploadMetric("web_stm_pop_up")
            }
            ), []),
            (0,
            i.jsx)(i.Fragment, {
                children: (0,
                i.jsx)(ye.NCo, {
                    isVisible: v,
                    image: v ? {
                        type: "large-image",
                        src: o ? lt : ct
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
        var pt, ht, _t, gt, mt, ft, bt, vt, yt, Pt, kt = n(237), Et = n(48615), xt = n(70364), Tt = n.n(xt);
        (ht = pt || (pt = {})).POP = "pop",
        ht.PC_BANNER = "pc_banner",
        ht.MOBILE_BANNER = "mobile_banner",
        ht.WEBVIEW = "webview",
        (gt = _t || (_t = {})).V1 = "v1",
        gt.V2 = "v2",
        gt.CUSTOMIZED = "customized",
        (ft = mt || (mt = {})).TEXT = "text",
        ft.LINK = "link",
        ft.BUTTON = "button",
        (vt = bt || (bt = {})).EXTERNAL = "external",
        vt.INTERNAL = "internal",
        vt.SUB_POPUP = "sub_popup",
        (Pt = yt || (yt = {})).INFO = "info",
        Pt.WARN = "warn",
        Pt.ERROR = "error";
        const Ot = "/tiktok/popup/dispatch/v1"
          , St = "/api/policy/notice/"
          , Ct = Ot
          , wt = "/tiktok/popup/callback/v1"
          , jt = wt;
        var Mt, At;
        (At = Mt || (Mt = {})).initError = "initError",
        At.beforeFetchData = "beforeFetchData",
        At.afterFetchData = "afterFetchData",
        At.fetchDataError = "fetchDataError",
        At.popupDataReady = "popupDataReady",
        At.processDataError = "processDataError",
        At.beforeSendCallback = "beforeSendCallback",
        At.afterSendCallback = "afterSendCallback",
        At.sendCallbackError = "sendCallbackError",
        At.beforeNavigateToNextPopup = "beforeNavigateToNextPopup",
        At.afterNavigateToNextPopup = "afterNavigateToNextPopup",
        At.allPopupsCompleted = "allPopupsCompleted",
        At.beforeDestruct = "beforeDestruct";
        var Lt, Nt = class {
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
        }(Lt || (Lt = {}));
        class Dt extends Nt {
            init(e) {
                this.meta = e.meta,
                this.debug = e.debug,
                e.customLoggingModule && e.customLoggingModule instanceof Nt ? this._customLogger = e.customLoggingModule : this.warn("[LoggingModule]: init - incorrect implementation of LoggingModule")
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
                    level: Lt.INFO,
                    meta: this.meta,
                    data: t
                })
            }
            warn(e, t) {
                var n;
                "function" == typeof (null === (n = this._customLogger) || void 0 === n ? void 0 : n.warn) && this._customLogger.warn(e, t),
                this.send({
                    message: e,
                    level: Lt.WARN,
                    meta: this.meta,
                    data: t
                })
            }
            error(e, t) {
                var n;
                "function" == typeof (null === (n = this._customLogger) || void 0 === n ? void 0 : n.error) && this._customLogger.error(e, t),
                this.send({
                    message: e,
                    level: Lt.ERROR,
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
                Dt._instance || (Dt._instance = this),
                Dt._instance
            }
        }
        var It = new Dt
          , Rt = n(71510)
          , Ut = n.n(Rt)
          , Bt = n(35655)
          , Yt = n.n(Bt);
        function zt(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Ht(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                i.forEach((function(t) {
                    zt(e, t, n[t])
                }
                ))
            }
            return e
        }
        const Ft = /^(https?:\/\/)/;
        class Vt {
            constructor() {
                return this.init = e => {
                    It.info("[ServiceModule]: init"),
                    this._domain = e.domain || "https://www.tiktok.com",
                    this._commonParams = e.commonParams || {}
                }
                ,
                this.sendRequest = (e, t, n, i) => {
                    const o = Ft.test(e) ? e : `${this._domain}${e}`
                      , r = new URL(o)
                      , a = Array.from(r.searchParams.entries()).reduce(( (e, t) => {
                        const [n,i] = t;
                        return void 0 === i && "" === i || (e[n] = i),
                        e
                    }
                    ), {})
                      , s = null != i ? i : {}
                      , {params: l, timeout: c} = s
                      , u = function(e, t) {
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
                    let d = Ht({}, this._commonParams, a, null != l ? l : {});
                    "GET" === t && n && "object" == typeof n && (d = Ht({}, d, n));
                    const p = new URLSearchParams((e => {
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
                    )(d))
                      , h = new URL(`${r.origin}${r.pathname}?${p.toString()}`)
                      , _ = Ut()({}, u, {
                        method: t,
                        timeout: null != c ? c : 0,
                        data: n
                    });
                    return It.info("[ServiceModule]: sendRequest start", _),
                    Yt()(h.href, _).then((e => (It.info("[ServiceModule]: sendRequest finish", e),
                    e))).catch((e => {
                        throw It.error("[ServiceModule]: sendRequest error", e),
                        e
                    }
                    ))
                }
                ,
                this.destruct = () => {
                    It.info("[ServiceModule]: destruct")
                }
                ,
                Vt._instance || (Vt._instance = this),
                Vt._instance
            }
        }
        var Wt, Kt, $t, Gt, qt, Xt, Jt, Zt, Qt, en, tn, nn, on = new Vt;
        function rn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function an(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                i.forEach((function(t) {
                    rn(e, t, n[t])
                }
                ))
            }
            return e
        }
        function sn(e, t) {
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
        function ln({lang: e, body: t, bodyLinks: n, popupMeta: i, style: o, callback: r}) {
            if (!t)
                return;
            if (!n || 0 === n.length || !/%s/.test(t))
                return [{
                    type: mt.TEXT,
                    text: t
                }];
            const a = /%s/g
              , s = []
              , l = t;
            let c = 0;
            return n.forEach(( ({text: t, action: n}) => {
                var u;
                const d = a.exec(l);
                if (!d)
                    return;
                const p = an({
                    type: (null == n ? void 0 : n.link) ? mt.LINK : mt.BUTTON,
                    text: t
                }, (null == n ? void 0 : n.link) && {
                    link: pn({
                        link: n.link,
                        lang: e
                    }),
                    linkType: n.link_type === qt.LINK_TYPE_ENUM_EXTERNAL ? bt.EXTERNAL : bt.INTERNAL
                }, (null == n || null === (u = n.actions) || void 0 === u ? void 0 : u.includes(Qt.ACTION_TYPE_ENUM_CALLBACK)) && {
                    callback: r(i, o, n, !1)
                });
                s.push({
                    type: mt.TEXT,
                    text: l.slice(c, d.index)
                }),
                s.push(p),
                c = Number(d.index) + d[0].length
            }
            )),
            s.push({
                type: mt.TEXT,
                text: l.slice(c)
            }),
            s
        }
        function cn({rawButtons: e, popupMeta: t, style: n, callback: i}) {
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
        function un(e) {
            switch (e) {
            case $t.POPUP_STYLE_ENUM_PC_BANNER:
                return pt.PC_BANNER;
            case $t.POPUP_STYLE_ENUM_MOBILE_BANNER:
                return pt.MOBILE_BANNER;
            case $t.POPUP_STYLE_ENUM_WEBVIEW:
                return pt.WEBVIEW;
            case $t.POPUP_STYLE_ENUM_POP:
            default:
                return pt.POP
            }
        }
        (Kt = Wt || (Wt = {})).CALLBACK = "callback",
        Kt.H5 = "h5",
        (Gt = $t || ($t = {}))[Gt.POPUP_STYLE_ENUM_BOTTOM = 0] = "POPUP_STYLE_ENUM_BOTTOM",
        Gt[Gt.POPUP_STYLE_ENUM_POP = 1] = "POPUP_STYLE_ENUM_POP",
        Gt[Gt.POPUP_STYLE_ENUM_FULLSCREEN = 2] = "POPUP_STYLE_ENUM_FULLSCREEN",
        Gt[Gt.POPUP_STYLE_ENUM_WEBVIEW = 3] = "POPUP_STYLE_ENUM_WEBVIEW",
        Gt[Gt.POPUP_STYLE_ENUM_PC_BANNER = 4] = "POPUP_STYLE_ENUM_PC_BANNER",
        Gt[Gt.POPUP_STYLE_ENUM_MOBILE_BANNER = 5] = "POPUP_STYLE_ENUM_MOBILE_BANNER",
        (Xt = qt || (qt = {}))[Xt.LINK_TYPE_ENUM_INTERNAL = 0] = "LINK_TYPE_ENUM_INTERNAL",
        Xt[Xt.LINK_TYPE_ENUM_EXTERNAL = 1] = "LINK_TYPE_ENUM_EXTERNAL",
        Xt[Xt.LINK_TYPE_ENUM_SUB_POPUP = 2] = "LINK_TYPE_ENUM_SUB_POPUP",
        Xt[Xt.LINK_TYPE_UPGRADE = 3] = "LINK_TYPE_UPGRADE",
        (Zt = Jt || (Jt = {}))[Zt.POPUP_OPERATION_ENUM_LEGACY_0 = 0] = "POPUP_OPERATION_ENUM_LEGACY_0",
        Zt[Zt.POPUP_OPERATION_ENUM_LEGACY_1 = 1] = "POPUP_OPERATION_ENUM_LEGACY_1",
        Zt[Zt.POPUP_OPERATION_ENUM_LEGACY_2 = 2] = "POPUP_OPERATION_ENUM_LEGACY_2",
        Zt[Zt.POPUP_OPERATION_ENUM_LEGACY_3 = 3] = "POPUP_OPERATION_ENUM_LEGACY_3",
        Zt[Zt.POPUP_OPERATION_ENUM_LEGACY_4_AGREE = 4] = "POPUP_OPERATION_ENUM_LEGACY_4_AGREE",
        Zt[Zt.POPUP_OPERATION_ENUM_LEGACY_5_REMIND_ME_LATER = 5] = "POPUP_OPERATION_ENUM_LEGACY_5_REMIND_ME_LATER",
        Zt[Zt.POPUP_OPERATION_ENUM_LEGACY_7_LEARN_MORE = 6] = "POPUP_OPERATION_ENUM_LEGACY_7_LEARN_MORE",
        Zt[Zt.POPUP_OPERATION_ENUM_LEGACY_8_CONFIRM = 7] = "POPUP_OPERATION_ENUM_LEGACY_8_CONFIRM",
        Zt[Zt.POPUP_OPERATION_ENUM_LEGACY_9_NOT_NOW = 8] = "POPUP_OPERATION_ENUM_LEGACY_9_NOT_NOW",
        Zt[Zt.POPUP_OPERATION_ENUM_LEGACY_10_DOWNLOAD_YOUR_DATA = 9] = "POPUP_OPERATION_ENUM_LEGACY_10_DOWNLOAD_YOUR_DATA",
        Zt[Zt.POPUP_OPERATION_ENUM_LEGACY_11_SUBMIT_APPEAL = 10] = "POPUP_OPERATION_ENUM_LEGACY_11_SUBMIT_APPEAL",
        Zt[Zt.POPUP_OPERATION_ENUM_LEGACY_20_DOWNLOAD_YOUR_DATA = 11] = "POPUP_OPERATION_ENUM_LEGACY_20_DOWNLOAD_YOUR_DATA",
        Zt[Zt.POPUP_OPERATION_ENUM_LEGACY_100_GOT_IT = 12] = "POPUP_OPERATION_ENUM_LEGACY_100_GOT_IT",
        Zt[Zt.POPUP_OPERATION_ENUM_LEGACY_101_LEARN_MORE = 13] = "POPUP_OPERATION_ENUM_LEGACY_101_LEARN_MORE",
        Zt[Zt.POPUP_OPERATION_ENUM_LEGACY_200_LEARN_MORE = 14] = "POPUP_OPERATION_ENUM_LEGACY_200_LEARN_MORE",
        (en = Qt || (Qt = {}))[en.ACTION_TYPE_ENUM_CALLBACK = 0] = "ACTION_TYPE_ENUM_CALLBACK",
        en[en.ACTION_TYPE_ENUM_UPDATE_CONSENT = 1] = "ACTION_TYPE_ENUM_UPDATE_CONSENT",
        en[en.ACTION_TYPE_ENUM_FETCH_COMPLIANCE_SETTING = 2] = "ACTION_TYPE_ENUM_FETCH_COMPLIANCE_SETTING",
        (nn = tn || (tn = {}))[nn.POPUP_CALLBACK_TYPE_ENUM_UNKNOWN = 0] = "POPUP_CALLBACK_TYPE_ENUM_UNKNOWN",
        nn[nn.POPUP_CALLBACK_TYPE_ENUM_USER_ID = 1] = "POPUP_CALLBACK_TYPE_ENUM_USER_ID",
        nn[nn.POPUP_CALLBACK_TYPE_ENUM_DEVICE_ID = 2] = "POPUP_CALLBACK_TYPE_ENUM_DEVICE_ID";
        const dn = "${locale}";
        function pn({link: e, lang: t}) {
            return e.replace(dn, t)
        }
        function hn({lang: e, body: t, bodyLinks: n, popupMeta: i, callback: o}) {
            if (!t)
                return;
            if (!n || 0 === n.length)
                return [{
                    type: mt.TEXT,
                    text: t
                }];
            const r = []
              , a = t;
            let s = 0;
            const l = /%s/g;
            return n.forEach(( ({name: t, link: n="", operation: c, dismiss: u, approve: d, new_web_tab: p, extra: h, link_type: _}) => {
                const g = l.exec(a);
                if (!g)
                    return;
                const m = pn({
                    link: n,
                    lang: e
                })
                  , f = Boolean(d || u)
                  , b = _ === Wt.CALLBACK || d
                  , v = {
                    type: n ? mt.LINK : mt.BUTTON,
                    text: t,
                    link: m,
                    linkType: p ? bt.EXTERNAL : bt.INTERNAL,
                    onClick: o(f, !!b, sn(an({}, i), {
                        extra: h,
                        operation: null == c ? void 0 : c.toString()
                    }))
                };
                r.push({
                    type: mt.TEXT,
                    text: a.slice(s, g.index)
                }),
                r.push(v),
                s = Number(g.index) + g[0].length
            }
            )),
            r.push({
                type: mt.TEXT,
                text: a.slice(s)
            }),
            r
        }
        function _n({lang: e, first_button_highlight: t, rawButtons: n, popupMeta: i, callback: o}) {
            if (0 === n.length)
                return;
            const r = [];
            return n.forEach(( ({text: n, is_bold: a, link_type: s, link: l, extra: c, approve: u, operation: d, dismiss: p, dismiss_all: h, new_web_tab: _, is_close_style: g}, m) => {
                const f = Boolean(u || p || h)
                  , b = s === Wt.CALLBACK || u
                  , v = {
                    text: n,
                    isCloseStyle: g,
                    isBold: Boolean(a),
                    isHighlight: 0 === m && t,
                    link: l ? pn({
                        link: l,
                        lang: e
                    }) : void 0,
                    linkType: _ ? bt.EXTERNAL : bt.INTERNAL,
                    onClick: o(f, !!b, sn(an({}, i), {
                        extra: c,
                        operation: null == d ? void 0 : d.toString()
                    }), l ? {
                        link: pn({
                            link: l,
                            lang: e
                        }),
                        linkType: _ ? bt.EXTERNAL : bt.INTERNAL
                    } : void 0)
                };
                r.push(v)
            }
            )),
            r
        }
        function gn(e) {
            if (e)
                return {
                    url: e,
                    width: "auto",
                    height: "48px"
                }
        }
        function mn(e, t, n, i, o, r, a) {
            try {
                var s = e[r](a)
                  , l = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(l) : Promise.resolve(l).then(i, o)
        }
        function fn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        class bn {
            init(e, t) {
                It.info("[PopupModule]: init", e),
                this._lang = e.lang,
                this._popupApi = e.apiPath || Ct,
                this._callbackApi = e.callbackApiPath || jt,
                this._scene = e.scene || 0,
                this._dataProcessor = e.dataProcessor || _t.V2,
                this._customizedProcessor = e.customizeDataProcessor,
                this._navigateToNextPopup = t.navigateToNextPopup,
                this._completeAllPopups = t.completeAllPopups,
                this._beforeSendCallback = t.beforeSendCallback,
                this._afterSendCallback = t.afterSendCallback,
                this._adjustAPIConfig()
            }
            _adjustAPIConfig() {
                this._popupApi === Ot ? (this._callbackApi = wt,
                this._dataProcessor = _t.V2) : this._popupApi === St && (this._callbackApi = "/api/policy/notice/approve/",
                this._dataProcessor = _t.V1)
            }
            fetch(e) {
                return It.info("[PopupModule]: fetch ", this._popupApi),
                on.sendRequest(this._popupApi, "GET", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {}
                          , i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }
                        )))),
                        i.forEach((function(t) {
                            fn(e, t, n[t])
                        }
                        ))
                    }
                    return e
                }({
                    scene: this._scene
                }, e))
            }
            processData(e) {
                switch (It.info("[PopupModule]: process data", e),
                this._dataProcessor) {
                case _t.V1:
                    return this._processV1Data(e.data);
                case _t.V2:
                    return this._processV2Data(e.data);
                case _t.CUSTOMIZED:
                    return this._processCustomizedData(e);
                default:
                    return this._processV2Data(e.data)
                }
            }
            _processV1Data(e) {
                const t = "string" == typeof e ? JSON.parse(e) : e;
                It.info("[PopupModule]: process V1 response", t);
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
                        icon: gn(e.icon_url),
                        iconDark: gn(e.icon_url_dark),
                        body: hn({
                            lang: this._lang,
                            body: e.body,
                            bodyLinks: e.body_link_list,
                            popupMeta: t,
                            callback: this.callbackFunctionV1
                        }),
                        buttons: _n({
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
                return It.info("[PopupModule]: process V2 response", t),
                t.popup_responses.map((e => {
                    const t = e.popup_ui
                      , n = e.popup_meta;
                    return {
                        eventInfo: {
                            style: t.style,
                            business: n.business
                        },
                        popupType: un(t.style),
                        icon: gn(t.icon_url),
                        iconDark: gn(t.icon_url_dark),
                        title: t.title,
                        buttons: cn({
                            rawButtons: t.buttons,
                            popupMeta: n,
                            style: t.style,
                            callback: this.callbackFunctionV2
                        }),
                        body: ln({
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
                if (It.info("[PopupModule]: process customized response"),
                !e || !this._customizedProcessor)
                    return [];
                try {
                    return this._customizedProcessor(e)
                } catch (e) {
                    It.error("[PopupModule]: process customized response fail", e)
                }
                return []
            }
            destruct() {
                It.info("[PopupModule]: destruct")
            }
            constructor() {
                this.callbackFunctionV1 = (e, t, n, i) => () => {
                    t && this._sendCallback(n).then(( () => {
                        It.info("[PopupModule]: send callback finished")
                    }
                    )).catch((e => {
                        It.error("[PopupModule]: send callback fail", e)
                    }
                    )),
                    i && (i.linkType === bt.EXTERNAL ? window.open(i.link) : window.location.href = i.link),
                    e && this._navigateToNextPopup()
                }
                ,
                this.callbackFunctionV2 = (e, t, n, i) => () => {
                    if ((null == n ? void 0 : n.actions) && n.actions.includes(Qt.ACTION_TYPE_ENUM_CALLBACK) && this._sendCallback({
                        business: e.business,
                        version: e.version,
                        style: t,
                        extra: n.extra,
                        operation: n.operation
                    }).then(( () => {
                        It.info("[PopupModule]: send callback finished")
                    }
                    )).catch((e => {
                        It.error("[PopupModule]: send callback fail", e)
                    }
                    )),
                    i && (null == n ? void 0 : n.link)) {
                        const e = pn({
                            link: n.link,
                            lang: this._lang
                        });
                        n.link_type === qt.LINK_TYPE_ENUM_EXTERNAL ? window.open(e) : window.location.href = e
                    }
                    (null == n ? void 0 : n.dismiss_all) ? this._completeAllPopups() : (null == n ? void 0 : n.dismiss) && this._navigateToNextPopup()
                }
                ;
                var e, t, n = this;
                return this._sendCallback = (e = function*(e) {
                    n._beforeSendCallback();
                    try {
                        const t = "object" == typeof e ? new URLSearchParams(e) : e;
                        yield on.sendRequest(n._callbackApi, "POST", t, {
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
                            mn(r, i, o, a, s, "next", e)
                        }
                        function s(e) {
                            mn(r, i, o, a, s, "throw", e)
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
                bn._instance || (bn._instance = this),
                bn._instance
            }
        }
        var vn = new bn;
        class yn {
            init(e) {
                It.info("[LifeCycleModule]: init"),
                It.info("[LifeCycleModule]: init Popup module"),
                vn.init(e, {
                    navigateToNextPopup: this.navigateToNextPopup,
                    completeAllPopups: this.completeAllPopups,
                    beforeSendCallback: this.beforeSendCallback,
                    afterSendCallback: this.afterSendCallback
                }),
                this._currentEvent = new Set
            }
            addEventListener(e, t) {
                It.info("[LifeCycleModule]: add event listener to ", e);
                const n = this._eventListeners.get(e) || [];
                this._eventListeners.set(e, [...n, t])
            }
            removeEventListener(e, t) {
                It.info("[LifeCycleModule]: remove event listener from ", e);
                const n = this._eventListeners.get(e);
                if (!n)
                    return;
                const i = n.filter((e => e !== t));
                this._eventListeners.set(e, i)
            }
            removeAllEventListeners(e) {
                It.info("[LifeCycleModule]: remove all event listeners from ", e),
                this._eventListeners.set(e, [])
            }
            fetchPopupData(e) {
                return It.info("[LifeCycleModule]: fetch popup data"),
                this.dispatchEvent(Mt.beforeFetchData),
                vn.fetch(e).then((e => {
                    this.dispatchEvent(Mt.afterFetchData),
                    It.info("[LifeCycleModule]: fetch popup data done, start processing response"),
                    this.processData(e)
                }
                )).catch((e => {
                    It.error("[LifeCycleModule]: fetch failure - ", e),
                    this.dispatchEvent(Mt.fetchDataError)
                }
                ))
            }
            processData(e) {
                try {
                    const t = vn.processData(e);
                    (null == t ? void 0 : t.length) ? (It.info("[LifeCycleModule]: process response done, popup data ready"),
                    this._currentPopupIndex = 0,
                    this._popupData = t,
                    this.dispatchEvent(Mt.popupDataReady)) : It.info("[LifeCycleModule]: process popup response done, no popup data")
                } catch (e) {
                    It.error("[LifeCycleModule]: process popup response error - ", e)
                }
            }
            hasPopupData() {
                return It.info("[LifeCycleModule]: has popup data"),
                this._popupData.length > 0
            }
            getAllPopupData() {
                return It.info("[LifeCycleModule]: get all popup data"),
                this._popupData
            }
            getCurrentPopupData() {
                return It.info("[LifeCycleModule]: get current popup data"),
                this._popupData[this._currentPopupIndex]
            }
            hasNextPopup() {
                It.info("[LifeCycleModule]: has next popup");
                const e = this._popupData.length
                  , t = this._currentPopupIndex + 1;
                return 0 !== this._popupData.length && t < e
            }
            destruct() {
                It.info("[LifeCycleModule]: destruct"),
                vn.destruct(),
                this._currentPopupIndex = -1,
                this._popupData = [],
                this._currentEvent.clear()
            }
            constructor() {
                return this._eventListeners = new Map,
                this._currentPopupIndex = -1,
                this._popupData = [],
                this.dispatchEvent = e => {
                    if (It.info("[LifeCycleModule]: dispatch start - ", e),
                    this._currentEvent.has(e))
                        return void It.error("[LifeCycleModule]: Dispatch is already in process", {
                            currentEvent: [...this._currentEvent],
                            upcomingEvent: e
                        });
                    this._currentEvent.add(e);
                    const t = this._eventListeners.get(e);
                    t && t.forEach((t => {
                        try {
                            t()
                        } catch (t) {
                            It.warn(`[LifeCycleModule]: error executing listener for event: ${e}`, t)
                        }
                    }
                    )),
                    this._currentEvent.delete(e),
                    It.info("[LifeCycleModule]: dispatch finish - ", e)
                }
                ,
                this.beforeSendCallback = () => {
                    It.info("[LifeCycleModule]: before sendCallback"),
                    this.dispatchEvent(Mt.beforeSendCallback)
                }
                ,
                this.afterSendCallback = (e, t) => {
                    e ? (It.info("[LifeCycleModule]: after sendCallback"),
                    this.dispatchEvent(Mt.afterSendCallback)) : (It.error("[LifeCycleModule]: send callback failure", t),
                    this.dispatchEvent(Mt.sendCallbackError))
                }
                ,
                this.navigateToNextPopup = () => {
                    It.info("[LifeCycleModule]: navigate to next popup"),
                    this._currentPopupIndex + 1 < this._popupData.length ? this._currentPopupIndex = this._currentPopupIndex + 1 : (It.warn("[LifeCycleModule]: navigate to next popup failure - no next popup"),
                    this.dispatchEvent(Mt.allPopupsCompleted))
                }
                ,
                this.completeAllPopups = () => {
                    It.info("[LifeCycleModule]: complete all popup"),
                    this._currentPopupIndex = this._popupData.length
                }
                ,
                yn._instance || (yn._instance = this),
                yn._instance
            }
        }
        var Pn = new yn;
        function kn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function En(e) {
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
        const xn = {
            appId: -1,
            region: "",
            wid: -1,
            lang: "en",
            isDebug: !1,
            isMobile: !1,
            apiDomain: "",
            apiPath: Ct,
            callbackApiPath: jt,
            dataProcessor: _t.V2,
            scene: 0,
            timeout: 1e3
        };
        class Tn {
            init(e) {
                if (this._isInitialized)
                    return;
                const t = En({}, xn, e);
                It.init(En({
                    debug: Boolean(t.isDebug),
                    meta: {
                        appID: t.appId,
                        wid: t.wid,
                        lang: t.lang
                    }
                }, t.logging && {
                    customLoggingModule: t.logging
                })),
                It.info("[SDK]: init global module"),
                on.init({
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
                Pn.init(t),
                vn.init(t, {
                    navigateToNextPopup: Pn.navigateToNextPopup,
                    completeAllPopups: Pn.completeAllPopups,
                    beforeSendCallback: Pn.beforeSendCallback,
                    afterSendCallback: Pn.afterSendCallback
                }),
                this._isInitialized = !0
            }
            fetchPopupData(e) {
                return It.info("[SDK]: fetch popup data"),
                Pn.fetchPopupData(e)
            }
            hasPopupData() {
                return It.info("[SDK]: has popup data"),
                Pn.hasPopupData()
            }
            getPopupData() {
                return It.info("[SDK]: get popup data"),
                this.hasPopupData() ? Pn.getCurrentPopupData() : null
            }
            hasNextPopup() {
                return It.info("[SDK]: has next popup"),
                Pn.hasNextPopup()
            }
            addEventListener(e, t) {
                if (It.info("[SDK]: addEventListener"),
                e && Mt[e] && "function" == typeof t)
                    Pn.addEventListener(e, t);
                else {
                    const e = "[SDK]: addEventListener - invalid param for adding new event listener";
                    It.error(e, new Error(e))
                }
            }
            removeEventListener(e, t) {
                It.info("[SDK]: removeEventListener"),
                e && Mt[e] && "function" == typeof t ? Pn.removeEventListener(e, t) : It.warn("[SDK]: removeEventListener - invalid param for removing event listener")
            }
            removeAllEventListeners(e) {
                It.info("[SDK]: removeAllEventListener"),
                e && Mt[e] ? Pn.removeAllEventListeners(e) : It.warn("[SDK]: removeEventListener - invalid param for removing all event listener")
            }
            destruct() {
                It.info("[SDK]: destruct");
                for (const e of Object.keys(Mt)) {
                    const t = Mt[e];
                    this.removeAllEventListeners(t)
                }
                Pn.destruct(),
                on.destruct(),
                It.destruct(),
                this._isInitialized = !1
            }
            constructor() {
                return this._isInitialized = !1,
                Tn._instance || (Tn._instance = this),
                Tn._instance
            }
        }
        var On = new Tn
          , Sn = n(47942);
        const Cn = (0,
        pe.A)("div", {
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
          , wn = (0,
        pe.A)("div", {
            target: "e1mpj5ji1"
        })({
            padding: "12px 12px 12px 16px",
            display: "flex",
            justifyContent: "space-between",
            gap: "8px"
        }, "label:DivBannerWrapper;")
          , jn = (0,
        pe.A)("div", {
            target: "e1mpj5ji2"
        })({
            display: "flex",
            alignItems: "center",
            gap: "16px"
        }, "label:DivLeftContainer;")
          , Mn = (0,
        pe.A)("div", {
            target: "e1mpj5ji3"
        })({
            display: "flex",
            alignItems: "flex-start",
            gap: "24px"
        }, "label:DivRightContainer;")
          , An = (0,
        pe.A)("div", {
            target: "e1mpj5ji4"
        })({
            alignSelf: "center",
            lineHeight: "18px"
        }, "label:DivContentWrapper;")
          , Ln = (0,
        pe.A)("div", {
            target: "e1mpj5ji5"
        })({
            margin: "9px 0"
        }, "label:DivButton;");
        function Nn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Dn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                i.forEach((function(t) {
                    Nn(e, t, n[t])
                }
                ))
            }
            return e
        }
        function In(e, t) {
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
        const Rn = e => {
            const {content: t, open: n, colorScheme: o, config: r, eventReport: a} = e;
            if (!n)
                return null;
            const {buttons: s, icon: l, iconDark: c, body: d, title: p, eventInfo: h} = t
              , _ = (0,
            u.useRef)(null)
              , g = (0,
            u.useCallback)((e => {
                var t;
                "Enter" !== e.key && " " !== e.key || (e.preventDefault(),
                e.stopPropagation(),
                null === (t = _.current) || void 0 === t || t.click())
            }
            ), [])
              , m = "dark" === o ? c : l;
            var f, b;
            return (0,
            i.jsx)(Cn, {
                role: "alert",
                style: {
                    top: null !== (f = null == r ? void 0 : r.topOffset) && void 0 !== f ? f : "0",
                    zIndex: null !== (b = null == r ? void 0 : r.zIndex) && void 0 !== b ? b : 999,
                    backgroundColor: "var(--ui-sheet-backdrop-1)"
                },
                children: (0,
                i.jsxs)(wn, {
                    children: [(0,
                    i.jsxs)(jn, {
                        children: [m && (0,
                        i.jsx)("img", {
                            alt: "icon",
                            src: m.url,
                            height: m.height,
                            width: m.width
                        }), (0,
                        i.jsxs)(An, {
                            children: [p && (0,
                            i.jsx)(Sn.Fm, {
                                as: "h4",
                                size: 15,
                                color: "UIShapeText1OnNeutral",
                                weight: "medium",
                                children: p
                            }), (0,
                            i.jsx)(Sn.Fm, {
                                as: "p",
                                size: 15,
                                color: "UIShapeText1OnNeutral",
                                children: null == d ? void 0 : d.map((e => {
                                    return e.type === mt.TEXT ? e.text : (0,
                                    i.jsx)(Sn.QKx, {
                                        color: "UIShapeText1OnNeutral",
                                        label: e.text,
                                        href: null !== (t = e.link) && void 0 !== t ? t : "",
                                        target: e.linkType === bt.EXTERNAL ? "_blank" : "_self",
                                        onClick: () => {
                                            var t;
                                            null == a || a(ti, In(Dn({}, h), {
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
                    i.jsx)(Mn, {
                        children: null == s ? void 0 : s.map((e => e.isCloseStyle ? (0,
                        i.jsx)("div", {
                            onClick: () => {
                                var t;
                                null == a || a(ti, In(Dn({}, h), {
                                    button_info: e.text
                                })),
                                null === (t = e.onClick) || void 0 === t || t.call(e)
                            }
                            ,
                            onKeyDown: g,
                            ref: _,
                            tabIndex: 0,
                            role: "button",
                            children: (0,
                            i.jsx)(Sn.gn, {
                                size: "24px",
                                style: {
                                    cursor: "pointer"
                                },
                                color: "BrandTikTokBackground"
                            })
                        }, e.text) : (0,
                        i.jsx)(Ln, {
                            children: (0,
                            i.jsx)(Sn.I05, {
                                label: e.text,
                                shape: "borderless",
                                variant: "primary",
                                onClick: () => {
                                    var t;
                                    null == a || a(ti, In(Dn({}, h), {
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
          , Un = (0,
        pe.A)("div", {
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
          , Bn = (0,
        pe.A)("div", {
            target: "e1krb51j1"
        })({
            width: 1150,
            maxWidth: 1150,
            padding: "16px 24px",
            display: "flex",
            justifyContent: "space-between",
            gap: "24px"
        }, "label:DivBannerWrapper;")
          , Yn = (0,
        pe.A)("div", {
            target: "e1krb51j2"
        })({
            display: "flex",
            alignItems: "center",
            gap: "16px"
        }, "label:DivLeftContainer;")
          , zn = (0,
        pe.A)("div", {
            target: "e1krb51j3"
        })([{
            display: "flex",
            alignItems: "center",
            gap: "24px"
        }], "label:DivRightContainer;")
          , Hn = (0,
        pe.A)("div", {
            target: "e1krb51j4"
        })({
            alignSelf: "center"
        }, "label:DivContentWrapper;")
          , Fn = (0,
        pe.A)("div", {
            target: "e1krb51j5"
        })({
            margin: "9px 0"
        }, "label:DivButton;");
        function Vn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Wn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                i.forEach((function(t) {
                    Vn(e, t, n[t])
                }
                ))
            }
            return e
        }
        function Kn(e, t) {
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
        const $n = e => {
            const {content: t, open: n, colorScheme: o, config: r, eventReport: a} = e;
            if (!n)
                return null;
            const {buttons: s, icon: l, iconDark: c, body: d, title: p, eventInfo: h} = t
              , _ = (0,
            u.useRef)(null)
              , g = (0,
            u.useCallback)((e => {
                var t;
                "Enter" !== e.key && " " !== e.key || (e.preventDefault(),
                e.stopPropagation(),
                null === (t = _.current) || void 0 === t || t.click())
            }
            ), [])
              , m = "dark" === o ? c : l;
            var f, b;
            return (0,
            i.jsx)(Un, {
                role: "alert",
                style: {
                    top: null !== (f = null == r ? void 0 : r.topOffset) && void 0 !== f ? f : "59px",
                    zIndex: null !== (b = null == r ? void 0 : r.zIndex) && void 0 !== b ? b : 999
                },
                children: (0,
                i.jsxs)(Bn, {
                    children: [(0,
                    i.jsxs)(Yn, {
                        children: [m && (0,
                        i.jsx)("img", {
                            alt: "icon",
                            src: m.url,
                            height: m.height,
                            width: m.width
                        }), (0,
                        i.jsxs)(Hn, {
                            children: [p && (0,
                            i.jsx)(Sn.Fm, {
                                as: "h4",
                                color: "UIText1",
                                size: 16,
                                weight: "medium",
                                children: p
                            }), d && (0,
                            i.jsx)(Sn.Fm, {
                                as: "p",
                                size: 16,
                                weight: "medium",
                                color: "UIText2",
                                children: d.map((e => {
                                    return e.type === mt.TEXT ? e.text : (0,
                                    i.jsx)(Sn.QKx, {
                                        color: "UIText1Display",
                                        label: e.text,
                                        href: null !== (t = e.link) && void 0 !== t ? t : "",
                                        target: e.linkType === bt.EXTERNAL ? "_blank" : "_self",
                                        onClick: () => {
                                            var t;
                                            null == a || a(ti, Kn(Wn({}, h), {
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
                    i.jsx)(zn, {
                        children: null == s ? void 0 : s.map((e => e.isCloseStyle ? (0,
                        i.jsx)("div", {
                            onClick: () => {
                                var t;
                                null == a || a(ti, Kn(Wn({}, h), {
                                    button_info: e.text
                                })),
                                null === (t = e.onClick) || void 0 === t || t.call(e)
                            }
                            ,
                            onKeyDown: g,
                            ref: _,
                            tabIndex: 0,
                            role: "button",
                            children: (0,
                            i.jsx)(Sn.gn, {
                                size: "24px",
                                style: {
                                    cursor: "pointer"
                                }
                            })
                        }, e.text) : (0,
                        i.jsx)(Fn, {
                            children: (0,
                            i.jsx)(Sn.I05, {
                                label: e.text,
                                shape: "borderless",
                                variant: "primary",
                                onClick: () => {
                                    var t;
                                    null == a || a(ti, Kn(Wn({}, h), {
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
          , Gn = (0,
        pe.A)("div", {
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
          , qn = (0,
        pe.A)("img", {
            target: "e140os951"
        })({
            display: "block",
            margin: "8px auto"
        }, "label:Img;");
        function Xn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Jn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                i.forEach((function(t) {
                    Xn(e, t, n[t])
                }
                ))
            }
            return e
        }
        function Zn(e, t) {
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
        const Qn = e => {
            var t;
            const {icon: n, iconDark: o, buttons: r, body: a, title: s, eventInfo: l} = e.content
              , c = "dark" === e.colorScheme ? o : n;
            var u;
            return (0,
            i.jsxs)(Sn.nOL, {
                open: e.open,
                onOpenChange: () => {}
                ,
                style: {
                    padding: "32px 0",
                    zIndex: null !== (u = null === (t = e.config) || void 0 === t ? void 0 : t.zIndex) && void 0 !== u ? u : 9999
                },
                children: [c && (0,
                i.jsx)(qn, {
                    src: c.url,
                    height: c.height,
                    width: c.width
                }), s && (0,
                i.jsx)(Sn.Fm, {
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
                i.jsx)(Sn.Fm, {
                    as: "p",
                    size: 15,
                    align: "center",
                    style: {
                        lineHeight: "18px",
                        padding: "7px 24px 24px"
                    },
                    children: a.map((t => {
                        return t.type === mt.TEXT ? t.text : (0,
                        i.jsx)(Sn.QKx, {
                            color: "UIText1Display",
                            weight: "medium",
                            label: t.text,
                            href: null !== (n = t.link) && void 0 !== n ? n : "",
                            target: t.linkType === bt.EXTERNAL ? "_blank" : "_self",
                            onClick: () => {
                                var n, i;
                                null === (n = e.eventReport) || void 0 === n || n.call(e, ti, Zn(Jn({}, l), {
                                    button_info: t.text
                                })),
                                null === (i = t.onClick) || void 0 === i || i.call(t)
                            }
                        }, t.text);
                        var n
                    }
                    ))
                }), (null == r ? void 0 : r.length) && (0,
                i.jsx)(Gn, {
                    children: r.map((t => (0,
                    i.jsx)(Sn.I05, {
                        style: t.isBold ? {
                            fontWeight: "bold"
                        } : {},
                        label: t.text,
                        variant: t.isHighlight ? "primary" : "secondary",
                        onClick: () => {
                            var n, i;
                            null === (n = e.eventReport) || void 0 === n || n.call(e, ti, Zn(Jn({}, l), {
                                button_info: t.text
                            })),
                            null === (i = t.onClick) || void 0 === i || i.call(t)
                        }
                    }, t.text)))
                })]
            })
        }
        ;
        var ei = n(28658);
        const ti = "qa_tns_general_dialog_click";
        function ni() {
            return (0,
            i.jsx)("link", {
                rel: "stylesheet",
                href: ei
            })
        }
        const ii = e => {
            const [t,n] = (0,
            u.useState)(null)
              , {eventReport: o, noFetchDataAtInit: r, SDKConfig: a, visible: s, onReadyToClose: l, onReadyToShow: c, colorScheme: d, textDirection: p, componentConfig: h} = e;
            if ((0,
            u.useEffect)(( () => (On.init(a),
            r || On.fetchPopupData().catch(null),
            On.addEventListener(Mt.popupDataReady, ( () => {
                On.getPopupData() && (n(On.getPopupData()),
                c())
            }
            )),
            On.addEventListener(Mt.afterNavigateToNextPopup, ( () => {
                n(On.getPopupData())
            }
            )),
            On.addEventListener(Mt.allPopupsCompleted, ( () => {
                l()
            }
            )),
            () => {
                On.destruct()
            }
            )), []),
            (0,
            u.useEffect)(( () => {
                s && t && o && o("tns_general_dialog_show", t.eventInfo)
            }
            ), [s]),
            !t)
                return null;
            const {popupType: _} = t
              , g = function(e, t) {
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
            let m;
            switch (_) {
            case pt.MOBILE_BANNER:
                m = (0,
                i.jsx)(Rn, {
                    colorScheme: d,
                    content: g,
                    open: s,
                    config: null == h ? void 0 : h.mBanner,
                    eventReport: o
                });
                break;
            case pt.PC_BANNER:
                m = (0,
                i.jsx)($n, {
                    colorScheme: d,
                    content: g,
                    open: s,
                    config: null == h ? void 0 : h.pcBanner,
                    eventReport: o
                });
                break;
            case pt.POP:
            default:
                m = (0,
                i.jsx)(Qn, {
                    colorScheme: d,
                    content: g,
                    open: s,
                    config: null == h ? void 0 : h.popup,
                    eventReport: o
                })
            }
            return (0,
            i.jsxs)(Sn.juU, {
                colorSchemePreference: d,
                textDirection: p,
                children: [(0,
                i.jsx)(ni, {}), m]
            })
        }
          , oi = On.fetchPopupData;
        var ri, ai, si = n(16891);
        !function(e) {
            e.None = "none",
            e.Pop = "pop",
            e.Float = "float",
            e.Bottom = "bottom",
            e.PcBanner = "pc_banner",
            e.MobileBanner = "mobile_banner"
        }(ri || (ri = {})),
        function(e) {
            e.Callback = "callback",
            e.H5 = "h5"
        }(ai || (ai = {}));
        const li = e => {
            var t, n;
            const {onHide: o, hideByDefault: r} = e
              , a = (0,
            u.useRef)(!1)
              , [s,c] = (0,
            u.useState)(!1)
              , d = (0,
            u.useCallback)(( () => {
                null == o || o(),
                c(!1)
            }
            ), [o])
              , {language: p, wid: h, region: _} = null !== (t = (0,
            T.W)(( () => ["language", "wid", "region"]), [])) && void 0 !== t ? t : {}
              , {isMobile: g} = null !== (n = (0,
            Et.U)(( () => ["isMobile"]), [])) && void 0 !== n ? n : {}
              , {isDark: m, direction: f} = (0,
            l.u)()
              , {showFullSideNav: b} = (0,
            ue.vY)()
              , v = (0,
            u.useCallback)((e => {
                a.current || (a.current = !0,
                oi({
                    scene: 555,
                    extra: JSON.stringify(e)
                }).catch(null))
            }
            ), [])
              , y = (0,
            u.useCallback)((e => {
                oi({
                    scene: 555,
                    extra: JSON.stringify(e)
                }).catch(null)
            }
            ), []);
            if ((0,
            u.useEffect)(( () => (kt.LZ.on(kt.Rh, Tt()(v, 2e3)),
            kt.LZ.on(kt.gk, Tt()(y, 2e3)),
            () => {
                kt.LZ.clear(kt.Rh),
                kt.LZ.clear(kt.gk)
            }
            )), [v, y]),
            !h || !_ || !p)
                return null;
            const P = {
                appId: 1988,
                wid: h,
                isMobile: g,
                region: _,
                lang: p,
                apiDomain: location.origin,
                apiPath: St
            };
            return (0,
            i.jsx)("div", {
                id: "web-universal-popup",
                children: (0,
                i.jsx)(ii, {
                    eventReport: si.f.event.bind(si.f),
                    noFetchDataAtInit: r,
                    SDKConfig: P,
                    visible: s,
                    colorScheme: m ? "dark" : "light",
                    textDirection: f,
                    onReadyToClose: d,
                    onReadyToShow: () => c(!0),
                    componentConfig: b ? {
                        pcBanner: {
                            topOffset: "0"
                        }
                    } : void 0
                })
            })
        }
          , ci = (0,
        pe.A)("div", {
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
          , ui = (0,
        pe.A)("div", {
            target: "e16yqw5k1"
        })(( ({isMobile: e}) => ({
            color: "rgba(246, 246, 246, 1)",
            fontSize: e ? "40px" : "80px",
            lineHeight: e ? "48px" : "96px",
            textAlign: "center",
            fontWeight: 700,
            padding: e ? "5px" : void 0
        })), "label:Title;")
          , di = (0,
        pe.A)("div", {
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
          , pi = (0,
        pe.A)("div", {
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
          , hi = (0,
        pe.A)("div", {
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
          , _i = (0,
        pe.A)("img", {
            target: "e16yqw5k5"
        })([{
            height: "100%",
            objectFit: "cover"
        }], "label:BackgroundImage;")
          , gi = (0,
        pe.A)("div", {
            target: "e16yqw5k6"
        })([{
            position: "relative",
            zIndex: 1,
            height: "100%"
        }], "label:ModalContent;")
          , mi = (0,
        pe.A)("button", {
            target: "e16yqw5k7"
        })(( ({isMobile: e}) => ({
            backgroundColor: "white",
            padding: e ? "12px 40px 12px 40px" : "8px 14px 8px 14px",
            borderRadius: e ? "20px" : "6px"
        })), "label:SettingButton;")
          , fi = (0,
        pe.A)("div", {
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
          , bi = n.p + "e0c522d68f9718996605.png";
        var vi = n(67169)
          , yi = n(18072);
        const Pi = e => {
            const {isOpen: t, children: n, id: o} = e;
            return t ? (0,
            i.jsxs)(pi, {
                id: o,
                children: [(0,
                i.jsx)(hi, {
                    children: (0,
                    i.jsx)(_i, {
                        src: bi
                    })
                }), (0,
                i.jsx)(gi, {
                    children: n
                })]
            }) : null
        }
          , ki = e => {
            const {onSettingClick: t, rule: n, isMobile: o} = e
              , r = (0,
            qe.s)();
            return (0,
            i.jsxs)(ci, {
                isMobile: o,
                children: [(0,
                i.jsxs)("div", {
                    children: [(0,
                    i.jsx)(ui, {
                        isMobile: o,
                        children: r("FPscheduledBreak_teenBreaklimit_headline", {}, "Time Away")
                    }), (0,
                    i.jsx)(di, {
                        isMobile: o,
                        children: r("FPscheduledBreak_teenBreaklimit_content", {
                            s_startTime: n.startTime,
                            s_endTime: n.endTime
                        }, "Your parent or guardian scheduled time away for you between {s_startTime}-{s_endTime}.")
                    })]
                }), (0,
                i.jsx)(mi, {
                    onClick: t,
                    isMobile: o,
                    children: (0,
                    i.jsx)(fi, {
                        children: r("FPscheduledBreak_teenBreaklimit_settingsButton", {}, "View Settings")
                    })
                })]
            })
        }
          , Ei = e => {
            const {onSettingClick: t, isMobile: n, header: o} = e
              , [r] = (0,
            c.S)(le.z)
              , {mute: a, setMute: s} = (0,
            vi.ah)({
                playMode: 0,
                itemMute: !1
            })
              , {mobileDefaultMute: l} = (0,
            yi.bn)()
              , {setMobileDefaultMute: d} = (0,
            yi._B)()
              , p = r.scheduledBreakActive || !1;
            var h, _;
            return h = "full-modal-id",
            _ = p,
            (0,
            u.useEffect)(( () => {
                let e;
                return _ && (e = setInterval(( () => {
                    document.getElementById(h) || window.location.reload()
                }
                ), 1e3)),
                () => {
                    e && clearInterval(e)
                }
            }
            ), [h, _]),
            (0,
            u.useEffect)(( () => {
                p && (n && !l ? d(!0) : n || a || s(!0))
            }
            ), [n, p, l, a, d, s]),
            (0,
            u.useEffect)(( () => {
                p && si.f.event("show_scheduled_break_block", {
                    type: "global"
                })
            }
            ), [p]),
            (0,
            i.jsx)(Pe.Mw, {
                isOpen: p,
                size: "Small",
                children: (0,
                i.jsx)(Pi, {
                    id: "full-modal-id",
                    isOpen: p,
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
        var xi = n(59952)
          , Ti = n(49677);
        var Oi = n(13392)
          , Si = n(58139)
          , Ci = n(64840)
          , wi = n(59030);
        const ji = (0,
        u.memo)(( () => {
            const [{avatarUrl: e, isOpen: t, pageType: n, enterMethod: o, url: r, videoId: a, userId: s, onLoginClick: l, challengeId: c, musicId: d},p] = (0,
            Oi.Su)(wi.f, {
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
              , {handleReportCtaDismiss: h, handleReportCtaLogin: _} = (0,
            Ci.$3)({
                page_type: n,
                enterMethod: o
            })
              , g = (0,
            u.useCallback)(( () => {
                p.setIsOpen(!1)
            }
            ), [p])
              , m = (0,
            u.useCallback)(( () => {
                l(),
                location.href = r
            }
            ), [l, r]);
            return (0,
            i.jsx)(Si.X, {
                icon: e,
                video_id: a,
                user_id: s,
                challenge_id: c,
                music_id: d,
                pageType: n,
                type: "login",
                handleReportCtaLogin: _,
                handleReportCtaDismiss: h,
                visible: t,
                enterMethod: o,
                isCalledByFunBtn: !0,
                onLoginBtnClick: m,
                onCancel: g
            })
        }
        ));
        var Mi = n(93240)
          , Ai = n(95481)
          , Li = n(72153)
          , Ni = n(97397);
        const Di = (0,
        pe.A)("div", {
            target: "e9zsjvj0"
        })(( ({theme: e}) => [(0,
        Li.zy)({
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
          , Ii = (0,
        pe.A)("div", {
            target: "e9zsjvj1"
        })(( ({theme: e}) => [(0,
        Li.zy)({
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
          , Ri = (0,
        pe.A)(Ni.y, {
            target: "e9zsjvj2"
        })({
            width: "100%",
            height: "48px",
            lineHeight: "21px",
            padding: "8px 14px",
            borderRadius: "8px",
            marginBottom: "1px"
        }, "label:StyledLinkButton;");
        var Ui = n(11060)
          , Bi = n(75792);
        const Yi = (0,
        u.memo)((function({visible: e, handleClosePhoneOrEmailPopUp: t}) {
            const n = (0,
            qe.s)()
              , {colors: o} = (0,
            l.u)()
              , r = (0,
            Ui.W6)()
              , {search: a} = r.location
              , s = (0,
            u.useCallback)(( () => {
                t(),
                r.push({
                    pathname: Bi.tH.linkPhone,
                    search: a
                })
            }
            ), [r, a, t])
              , c = (0,
            u.useCallback)(( () => {
                t()
            }
            ), [t])
              , d = {
                border: "none",
                fontWeight: "400",
                fontSize: "16px",
                color: o.TextTertiaryAlt
            };
            return (0,
            i.jsxs)(Ai.aF, {
                visible: e,
                contentStyle: {
                    width: "280px",
                    padding: "24px 20px 16px"
                },
                children: [(0,
                i.jsx)(Di, {
                    children: n("login_fb_noLonger_LinkPhoneNumber")
                }), (0,
                i.jsx)(Ii, {
                    children: n("login_fb_noLonger_LinkPhoneNumberReminder")
                }), (0,
                i.jsx)(Ri, {
                    size: "medium",
                    buttonTheme: "primary",
                    onClick: s,
                    children: n("login_fb_noLonger_LinkPhone")
                }), (0,
                i.jsx)(Ri, {
                    size: "medium",
                    buttonTheme: "default",
                    style: d,
                    onClick: c,
                    children: n("login_fb_noLonger_notNow_cta")
                })]
            })
        }
        ));
        var zi = n(8615);
        const Hi = [n(82715).OZ.setting]
          , Fi = function({suggestAccountBind: e}) {
            (0,
            ie.Du)(!1),
            function() {
                const {photoSensitiveVideosSetting: e} = (0,
                r.P)(xi.w);
                (0,
                u.useEffect)(( () => {
                    Ti._.handleRemovePhotosensitiveStatus(1 === e ? "on" : "off")
                }
                ), [])
            }(),
            ( () => {
                const {user: e} = (0,
                E.L$)((0,
                T.W)(( () => ["user"]), []))
                  , t = (0,
                Oi.wA)(xi.w);
                (0,
                u.useEffect)(( () => {
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
            Mi.Jl)(),
            (0,
            Mi.Ah)(),
            (0,
            o.Ar)(),
            function() {
                var e, t, n, i;
                const [o,s] = (0,
                c.S)(le.z)
                  , l = (0,
                ae.Us)()
                  , {abTestVersion: d} = null !== (e = (0,
                T.W)(( () => ["abTestVersion"]), [])) && void 0 !== e ? e : {}
                  , p = null !== (t = (0,
                se.qt)(d, "digital_wellbeing_web")) && void 0 !== t ? t : "v0"
                  , h = null !== (n = (0,
                se.qt)(d, "scheduled_breaks_teens")) && void 0 !== n ? n : "v0"
                  , {user: _} = (0,
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
                  , g = Boolean(_);
                (0,
                u.useEffect)(( () => {
                    if ("v0" === p || !g)
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
                u.useEffect)(( () => {
                    "v0" !== p && g && o.isPageHidden && o.isOpenDailySTM && s.uploadScreenTime()
                }
                ), [o.isPageHidden]),
                (0,
                u.useEffect)(( () => {
                    "v0" !== p && g && o.isOpenDailySTM && !o.isPageHidden && (s.startMonitorDayChange(),
                    s.startMonitorTimeLimit(),
                    s.startUploadSTMEveryTenMinutes(),
                    s.startAccumulateActiveTime())
                }
                ), [o.isOpenDailySTM, o.isPageHidden]),
                (0,
                u.useEffect)(( () => {
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
                    u.useRef)()
                      , r = (0,
                    u.useRef)(!1);
                    (0,
                    u.useEffect)(( () => {
                        const n = () => t(o.current);
                        r.current ? n() : (r.current = !0,
                        i && n()),
                        o.current = e
                    }
                    ), [e])
                }(null === (i = l.appContext) || void 0 === i ? void 0 : i.user, (e => {
                    var t, n;
                    "v0" !== p && g && (!e && Boolean(null === (t = l.appContext) || void 0 === t ? void 0 : t.user) ? (s.init(),
                    s.setLogin()) : e && !Boolean(null === (n = l.appContext) || void 0 === n ? void 0 : n.user) && (s.uploadScreenTime(),
                    s.setNotLogin()))
                }
                )),
                (0,
                u.useEffect)(( () => {
                    "v0" !== p && g && (s.uploadScreenTimeWhenDayChange(),
                    s.init())
                }
                ), [o.dayChange]),
                (0,
                u.useEffect)(( () => {
                    "v0" !== p && g && o.tenMinutesInterval && s.uploadScreenTime()
                }
                ), [o.tenMinutesInterval]),
                (0,
                u.useEffect)(( () => {
                    "v0" !== p && g && o.defaultDailySTMPopup && (s.setIsDisplayOtherPopupWhenTimeBreak(!0),
                    s.uploadScreenTime({
                        uploadType: 5
                    }))
                }
                ), [o.defaultDailySTMPopup]),
                (0,
                u.useEffect)(( () => {
                    "v0" !== p && g && (2 === o.userIdentity || 4 === o.userIdentity && o.isFpTeenOpenDailySTM) && s.getParentInfo({})
                }
                ), [o.userIdentity, o.isFpTeenOpenDailySTM]),
                (0,
                u.useEffect)(( () => {
                    "v0" !== p && g && (o.isOpenSleepReminder && !1 === o.isPageHidden ? (s.stopSleepReminder$(),
                    s.openSleepReminder()) : s.stopSleepReminder$())
                }
                ), [o.isOpenSleepReminder, o.isPageHidden]),
                (0,
                u.useEffect)(( () => {
                    "v0" !== p && g && o.sleepReminderPopup && !o.isPageHidden && s.setIsDisplayOtherPopupWhenTimeBreak(!0)
                }
                ), [o.sleepReminderPopup, o.isPageHidden]),
                (0,
                u.useEffect)(( () => {
                    "v0" !== p && g && o.durationReminder && !o.isPageHidden && (s.stopTimeBreak$(),
                    s.processTimeBreak())
                }
                ), [o.durationReminder, o.isPageHidden]),
                (0,
                u.useEffect)(( () => {
                    "v0" !== p && g && localStorage.setItem(re.o4, JSON.stringify({
                        event: "upload",
                        value: o.lastUploadTime
                    }))
                }
                ), [o.lastUploadTime]),
                (0,
                u.useEffect)(( () => {
                    "v0" === h && o.shouldShowScheduledBreak && s.disableScheduledBreak()
                }
                ), [h, o.shouldShowScheduledBreak]),
                (0,
                u.useEffect)(( () => {
                    "v0" !== p && g && "v0" !== h && !o.isPageHidden && o.scheduledBreakEnabled && (s.scheduledBreakProcess(),
                    s.stopScheduleBreak$(),
                    s.startScheduledBreakTimer())
                }
                ), [o.scheduledBreakEnabled, o.isPageHidden])
            }();
            const {handlePopupHide: t, handlePopupShow: n} = function() {
                const [e,t] = (0,
                u.useState)(0)
                  , n = (0,
                u.useCallback)(( () => {
                    t(0)
                }
                ), []);
                return {
                    popupHeight: e,
                    handlePopupShow: (0,
                    u.useCallback)((e => {
                        t(e)
                    }
                    ), []),
                    handlePopupHide: n
                }
            }()
              , [s,l] = (0,
            u.useState)(!1)
              , d = function() {
                const e = (0,
                de._S)(D.gM)
                  , t = new Date;
                if (e) {
                    const n = new Date(parseInt(e, 10));
                    if ((n.getDate() === t.getDate() || n.getDate() === t.getDate() - 1) && n.getMonth() === t.getMonth() && n.getFullYear() === t.getFullYear())
                        return !0
                }
                return !1
            }()
              , p = (0,
            ue.ZO)()
              , {appContext: h} = (0,
            r.P)(a.L)
              , _ = (0,
            Ui.W5)(Hi)
              , g = (0,
            Ui.W6)();
            (0,
            u.useEffect)(( () => {
                if (!d && e && p) {
                    l(!0),
                    zi._.handleLinkPhoneOrEmailPopupShow({
                        enterMethod: "periodic"
                    });
                    const e = new Date;
                    (0,
                    de.AP)(D.gM, e.getTime().toString())
                }
            }
            ), []);
            const m = (0,
            u.useCallback)(( () => {
                l(!1)
            }
            ), [l]);
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(ji, {}), (0,
                i.jsx)(Ze, {}), (0,
                i.jsx)(nt, {}), (0,
                i.jsx)(st, {}), (0,
                i.jsx)(dt, {}), (0,
                i.jsx)(li, {
                    onShow: n,
                    onHide: t
                }), (0,
                i.jsx)(Yi, {
                    visible: s,
                    handleClosePhoneOrEmailPopUp: m
                }), !_ && (0,
                i.jsx)(Ei, {
                    onSettingClick: () => {
                        const e = null == h ? void 0 : h.language;
                        g.push({
                            pathname: "setting",
                            search: `?${e ? `lang=${e}&` : ""}activeTab=screen-time-branch`
                        })
                    }
                    ,
                    isMobile: !0
                })]
            })
        }
          , Vi = () => {
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
              , u = null !== (t = null === (e = null == n ? void 0 : n.user) || void 0 === e ? void 0 : e.suggestAccountBind) && void 0 !== t && t;
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
                i.jsx)(Fi, {
                    suggestAccountBind: u
                })]
            })
        }
    }
    ,
    59782: (e, t, n) => {
        n.d(t, {
            dQ: () => p,
            dk: () => d,
            oA: () => u
        });
        var i = n(24643)
          , o = n(57432)
          , r = n.n(o)
          , a = n(40099)
          , s = n(2827);
        const l = {
            currentIndex: 0
        };
        function c() {
            const e = {
                swiper: null,
                setSwiper(t) {
                    e.swiper = t
                },
                _handleSlideChangeStart: r(),
                _handleSlideChangeEnd: r(),
                _handleTransitionEnd: r(),
                _handleSlideChange: r(),
                _handleSliderMove: r(),
                _handleActiveIndexChange: r(),
                handleSlideChangeStart(...t) {
                    e._handleSlideChangeStart(...t)
                },
                handleSlideChangeEnd(...t) {
                    e._handleSlideChangeEnd(...t)
                },
                handleTransitionEnd() {
                    e._handleTransitionEnd()
                },
                handleSlideChange() {
                    e._handleSlideChange()
                },
                handleSliderMove() {
                    e._handleSliderMove()
                },
                handleActiveIndexChange(...t) {
                    e._handleActiveIndexChange(...t)
                },
                bindHandleSlideChangeStart(t) {
                    e._handleSlideChangeStart = t
                },
                bindHandleSlideChangeEnd(t) {
                    e._handleSlideChangeEnd = t
                },
                bindHandleTransitionEnd(t) {
                    e._handleTransitionEnd = t
                },
                bindHandleSlideChange(t) {
                    e._handleSlideChange = t
                },
                bindHandleSliderMove(t) {
                    e._handleSliderMove = t
                },
                bindHandleActiveIndexChange(t) {
                    e._handleActiveIndexChange = t
                },
                setCurrentIndex: r(),
                state: l
            };
            return e
        }
        const u = (0,
        a.createContext)(c())
          , d = (0,
        a.createContext)(l)
          , p = e => {
            const [t,n] = (0,
            s.$)(l)
              , o = (0,
            a.useRef)(c())
              , r = (0,
            a.useRef)(!0);
            return r.current && (o.current.setCurrentIndex = e => n(Object.assign(Object.assign({}, t), {
                currentIndex: e
            })),
            r.current = !1),
            (0,
            i.jsx)(u.Provider, {
                value: o.current,
                children: (0,
                i.jsx)(d.Provider, {
                    value: t,
                    children: e.children
                })
            })
        }
    }
    ,
    2827: (e, t, n) => {
        n.d(t, {
            $: () => a
        });
        var i = n(35626)
          , o = n.n(i)
          , r = n(40099);
        function a(e) {
            const t = (0,
            r.useRef)(e)
              , [n,i] = (0,
            r.useState)(e);
            return [n, (0,
            r.useCallback)((e => {
                let n;
                n = "function" == typeof e ? e(t.current) : e,
                o()(t.current, n) || i(n),
                t.current = n
            }
            ), [])]
        }
    }
    ,
    93240: (e, t, n) => {
        n.d(t, {
            Ah: () => N,
            Jl: () => L,
            Iv: () => A,
            Fg: () => M,
            dP: () => j
        });
        var i, o, r = n(67518), a = n(13392), s = n(40099), l = n(59952), c = n(49057), u = n(40173), d = n(60484), p = n(18072), h = n(30721), _ = n(58305), g = n(45297), m = n(49677), f = n(11983), b = n(93129), v = n(59782), y = n(24643), P = n(96370), k = n(71334), E = n(80752), x = n(96973);
        !function(e) {
            e[e.Reported = 1] = "Reported",
            e[e.Dislike = 2] = "Dislike",
            e[e.General = 3] = "General",
            e[e.Photosensitive = 4] = "Photosensitive"
        }(i || (i = {})),
        function(e) {
            e.GeneralSensitive = "general",
            e.PhotoSensitive = "photosensitive",
            e.PhotoSensitiveDenied = "photosensitive_denied",
            e.M3AgeRestricted = "m3_age_restricted"
        }(o || (o = {}));
        const T = {
            general: "masklayer_general_title",
            photosensitive: "photosensitive_settings_title",
            photosensitive_denied: "photosensitive_masklayer_removed",
            m3_age_restricted: "cc_webapp_age_video_details_title"
        }
          , O = {
            general: ["masklayer_general_body"],
            photosensitive: ["photosensitive_masklayer_body1", "photosensitive_masklayer_body2"],
            photosensitive_denied: ["photosensitive_masklayer_removed_body1", "photosensitive_masklayer_removed_body2"],
            m3_age_restricted: ["cc_webapp_age_video_details_body"]
        }
          , S = {
            general: "masklayer_general_skip",
            photosensitive: "photosensitive_masklayer_watch",
            photosensitive_denied: ""
        }
          , C = {
            general: "masklayer_general_watch",
            photosensitive: "photosensitive_masklayer_skipall",
            photosensitive_denied: ""
        }
          , w = {
            general: (0,
            y.jsx)(k.A, {
                width: 36,
                height: 36,
                fill: "rgba(255, 255, 255, .75)"
            }),
            photosensitive: (0,
            y.jsx)(E.A, {
                width: 32,
                height: 32,
                fill: "#fff"
            }),
            photosensitive_denied: (0,
            y.jsx)(x.A, {
                width: 48,
                height: 48,
                fill: "#0BE09B"
            }),
            m3_age_restricted: (0,
            y.jsx)(P.A, {
                fontSize: 72,
                color: "rgba(255, 255, 255, 0.34)"
            })
        }
          , j = e => {
            var t, n;
            const i = (0,
            u.s)()
              , {user: o} = null !== (t = (0,
            c.W)(( () => ["user"]), [])) && void 0 !== t ? t : {}
              , p = ( () => {
                var e, t;
                const {photoSensitiveVideosSetting: n, loginStatePhotoSensitiveVideosSetting: i} = (0,
                a.Ph)(l.w, {
                    selector: e => ({
                        photoSensitiveVideosSetting: e.photoSensitiveVideosSetting,
                        loginStatePhotoSensitiveVideosSetting: e.loginStatePhotoSensitiveVideosSetting
                    }),
                    dependencies: []
                })
                  , {user: o} = null !== (e = (0,
                c.W)(( () => ["user"]), [])) && void 0 !== e ? e : {};
                return o ? void 0 === i ? null !== (t = null == o ? void 0 : o.photoSensitiveVideosSetting) && void 0 !== t ? t : 0 : i : null != n ? n : 0
            }
            )()
              , h = (0,
            a.Ph)(l.w, {
                selector: e => e.hasClosedVideoMask,
                dependencies: []
            })
              , _ = null === (n = e.item) || void 0 === n ? void 0 : n.isContentClassified
              , g = (0,
            r.u)();
            return (0,
            s.useMemo)(( () => {
                const {item: t} = e
                  , {maskType: n, author: r} = (0,
                d.L$)(t)
                  , a = o && (null == o ? void 0 : o.uniqueId) === r;
                if (!(_ || !h && (3 === n || 4 === n && 2 !== p && !a || 4 === n && 0 === p && a)))
                    return {
                        showVideoMask: !1
                    };
                let s, l = {};
                return _ ? (s = "m3_age_restricted",
                l = {
                    backgroundColor: g.colors.ConstBGInverse
                }) : s = 3 === n ? "general" : 1 === p ? "photosensitive_denied" : "photosensitive",
                {
                    showVideoMask: !0,
                    videoMaskType: s,
                    videoMaskTitle: i(T[s]),
                    videoMaskDesc: i(O[s][0]),
                    icon: w[s],
                    upperBtnText: i(S[s]),
                    lowerBtnText: i(C[s]),
                    maskStyle: l
                }
            }
            ), [e, o, _, h, p, i, g.colors.ConstBGInverse])
        }
          , M = e => {
            var t, n;
            const {item: i, list: o=[], onClose: r} = e
              , {length: d} = o
              , p = (0,
            u.s)()
              , h = (0,
            s.useContext)(v.oA)
              , _ = (0,
            s.useContext)(v.dk)
              , g = (0,
            a.wA)(l.w)
              , {user: b} = null !== (t = (0,
            c.W)(( () => ["user"]), [])) && void 0 !== t ? t : {}
              , {currentIndex: y} = _
              , P = null !== (n = o[y]) && void 0 !== n ? n : ""
              , k = j({
                item: i
            })
              , {videoMaskType: E} = k
              , x = (0,
            s.useCallback)(( () => {
                "photosensitive" === E && g.setSkipPhotoSensitive({
                    skip: !1,
                    hasLogin: Boolean(b)
                }),
                g.setHasClosedMask(!0),
                m._.handleMaskLayerClickWatch({
                    scenario: E,
                    group_id: P
                })
            }
            ), [P, g, E, b])
              , T = (0,
            s.useCallback)(( () => {
                var e, t;
                "photosensitive" === E && g.setSkipPhotoSensitive({
                    skip: !0,
                    hasLogin: Boolean(b)
                }),
                m._.handleMaskLayerClickSkip({
                    scenario: E,
                    group_id: P
                }),
                f.F.destroy(),
                f.F.open({
                    content: p("photosensitive_skepped_toast"),
                    duration: 3
                }),
                y < d - 1 ? null === (e = h.swiper) || void 0 === e || e.slideNext() : y > 0 ? null === (t = h.swiper) || void 0 === t || t.slidePrev() : null == r || r()
            }
            ), [y, P, d, r, h.swiper, p, g, E, b])
              , O = (0,
            s.useCallback)(( () => {
                "photosensitive" === E ? x() : T()
            }
            ), [T, x, E])
              , S = (0,
            s.useCallback)(( () => {
                "photosensitive" === E ? T() : x()
            }
            ), [E, T, x]);
            return (0,
            s.useEffect)(( () => {
                g.setHasClosedMask(!1)
            }
            ), [y]),
            Object.assign(Object.assign({}, k), {
                handleUpperBtnClick: O,
                handleLowerBtnClick: S,
                handleSkipVideo: T,
                groupId: P
            })
        }
          , A = ({itemOriginalMute: e=!1, itemCopyrightMute: t=!1, playMode: n=0}) => {
            const i = (0,
            p.M2)() || e
              , o = (0,
            a.Ph)(b.i)
              , r = (0,
            s.useMemo)(( () => o.showPlayBtn || 2 === n), [o.showPlayBtn, n])
              , l = (0,
            s.useMemo)(( () => !t && (i || o.showUnMuteBtn)), [t, i, o.showUnMuteBtn]);
            return {
                muted: i,
                showUnMuteBtn: l,
                showPlayBtn: r
            }
        }
          , L = () => {
            const [{bottomModalCtaShowing: e},t] = (0,
            a.Su)(b.i)
              , {mobileDefaultMute: n, forcePause: i} = (0,
            p.bn)()
              , o = (0,
            s.useRef)(e)
              , {isSmartPlayer: r} = (0,
            h.Qt)()
              , l = (0,
            p._B)();
            (0,
            s.useEffect)(( () => {
                r || (o.current && !e ? (t.setShowPlayBtn(!1),
                t.setShowUnmuteBtn(!1),
                l.setMobileDefaultMute(!1),
                l.setForcePause(!1),
                l.setCanRetry(!1)) : !o.current && e ? (t.setShowUnmuteBtn(!1),
                t.setShowPlayBtn(!1),
                l.setForcePause(!0)) : i ? l.setMobileDefaultMute(!1) : t.setShowUnmuteBtn(n),
                o.current = e)
            }
            ), [e, n, t, i])
        }
          , N = () => {
            const e = (0,
            p._B)();
            (0,
            s.useEffect)(( () => {
                !(0,
                _.Hd)(g.iJ) || e.setCanRetry(!0)
            }
            ), [])
        }
    }
    ,
    87802: (e, t, n) => {
        n.d(t, {
            Jz: () => a,
            R4: () => u,
            S4: () => s,
            i3: () => c
        });
        var i = n(71111)
          , o = n(31209);
        const r = (0,
        i.atom)({
            mute: !0,
            playing: !0,
            volume: 0,
            currentCaption: null,
            enableCaption: !1
        })
          , {useServiceState: a, useServiceDispatchers: s, useAtomService: l} = (0,
        o.i)(r, ( (e, t) => ({
            setMute(e) {
                t(r, (t => Object.assign(Object.assign({}, t), {
                    mute: e
                })))
            },
            setVolume(e) {
                t(r, (t => Object.assign(Object.assign({}, t), {
                    volume: Math.min(Math.max(0, e), 1)
                })))
            },
            setPlaying(e) {
                t(r, (t => Object.assign(Object.assign({}, t), {
                    playing: e
                })))
            },
            setCurrentCaption(e) {
                t(r, (t => Object.assign(Object.assign({}, t), {
                    currentCaption: e
                })))
            },
            setEnableCaption(e) {
                t(r, (t => Object.assign(Object.assign({}, t), {
                    enableCaption: e
                })))
            }
        })))
          , c = () => a((e => e.mute))
          , u = () => a((e => e.volume))
    }
    ,
    67169: (e, t, n) => {
        n.d(t, {
            ah: () => _,
            iJ: () => p,
            jj: () => h
        });
        var i = n(40099)
          , o = n(48578)
          , r = n(58305)
          , a = n(40173)
          , s = n(88920)
          , l = n(16469)
          , c = n(11983)
          , u = n(42983)
          , d = n(87802);
        function p({loadingThreshold: e=1e3, isCurrentVideo: t}) {
            const [n,o] = (0,
            i.useState)(!1)
              , r = (0,
            i.useRef)(0)
              , a = (0,
            i.useCallback)(( () => {
                r.current && window.clearTimeout(r.current),
                o(!1)
            }
            ), [])
              , s = (0,
            i.useCallback)(( () => {
                e ? (r.current && window.clearTimeout(r.current),
                r.current = window.setTimeout(( () => {
                    o(!0)
                }
                ), e)) : o(!0)
            }
            ), [e]);
            return (0,
            i.useEffect)(( () => (t || (window.clearTimeout(r.current),
            o(!1)),
            () => window.clearTimeout(r.current))), [t]),
            {
                loading: n,
                handleCanPlayWithLoading: a,
                handlePauseWithLoading: a,
                handlePlayingWithLoading: a,
                handleErrorWithLoading: a,
                handleWaitingWithLoading: s
            }
        }
        function h() {
            const [e,t] = (0,
            i.useState)(!0)
              , n = (0,
            i.useCallback)(( () => {
                t(!1)
            }
            ), [])
              , o = (0,
            i.useCallback)(( () => {
                t(!0)
            }
            ), []);
            return (0,
            i.useEffect)(( () => {
                const e = (0,
                r.Gz)(n, o);
                return () => {
                    null == e || e()
                }
            }
            ), [o, n]),
            e
        }
        function _({playMode: e, itemMute: t=!1}) {
            const n = (0,
            a.s)()
              , {mute: r, volume: p} = (0,
            u.yw)()
              , h = t || r
              , _ = (0,
            d.S4)()
              , g = (0,
            s.W4)()
              , m = (0,
            i.useCallback)(( (i, r="click", a, s) => {
                if (t || s)
                    return c.F.destroy(),
                    c.F.open({
                        content: n("music_detail_unavailable_1"),
                        duration: 3,
                        widthType: "half"
                    }),
                    !1;
                if (o.p.handleSwitchSound(Object.assign(Object.assign({}, a), {
                    muted: i,
                    playMode: e,
                    enter_method: r
                })),
                o.p.handleVolumeChange({
                    volume_to: p,
                    click_mute: !0
                }),
                l.lA.setItem("muted", i),
                _.setMute(i),
                !i && 0 === l.lA.getItem("volume")) {
                    let e = .6;
                    "v2" === g ? e = .7 : "v3" === g ? e = .75 : "v4" === g ? e = .5 : "v5" === g && (e = .4),
                    l.lA.setItem("volume", e),
                    _.setVolume(e)
                }
                return !0
            }
            ), [_, e, g, p, n, t]);
            return {
                mute: h,
                volume: p,
                setMute: m
            }
        }
        n(56268)
    }
    ,
    42983: (e, t, n) => {
        n.d(t, {
            O2: () => r,
            yw: () => o
        });
        var i = n(87802);
        const o = () => ({
            mute: (0,
            i.i3)(),
            volume: (0,
            i.R4)()
        })
          , r = e => {
            const {mute: t, volume: n, playing: o} = (0,
            i.Jz)((t => ({
                mute: e || t.mute,
                volume: t.volume,
                playing: t.playing
            })));
            return {
                mute: t,
                volume: n,
                playing: o
            }
        }
    }
    ,
    49677: (e, t, n) => {
        n.d(t, {
            _: () => r
        });
        var i, o = n(16891);
        !function(e) {
            e.General = "general",
            e.Photosensitive = "photosensitive",
            e.LoggedOut = "logged_out",
            e.AgeRestriction = "age_restriction"
        }(i || (i = {}));
        const r = {
            handleRemovePhotosensitiveStatus: e => {
                o.f.sendEvent("tns_remove_photosensitive_status", {
                    status: e
                })
            }
            ,
            handleShowMaskLayer: e => {
                o.f.sendEvent("tns_show_mask_layer", e)
            }
            ,
            handleShowPhotosensitiveRemoved: e => {
                o.f.sendEvent("tns_show_photosensitive_removed", e)
            }
            ,
            handleMaskLayerClickSkip: e => {
                o.f.sendEvent("tns_mask_layer_click_skip", e)
            }
            ,
            handleMaskLayerClickWatch: e => {
                o.f.sendEvent("tns_mask_layer_click_watch", e)
            }
            ,
            handleCCMaskShow: e => {
                o.f.sendEvent("cc_mask_show", e)
            }
            ,
            handleClickLogInCCMask: e => {
                o.f.sendEvent("click_log_in_cc_mask", e)
            }
        }
    }
    ,
    48578: (e, t, n) => {
        n.d(t, {
            p: () => r
        });
        var i = n(16891);
        const o = {
            0: "one-column",
            1: "three-column",
            2: "browser-mode",
            3: "swiper_mode",
            4: "video-detail",
            6: "pip",
            5: "fullscreen",
            7: "creator_tab",
            8: "mini_player",
            9: "immersive_player"
        }
          , r = {
            handleSwitchSound: e => {
                const {muted: t, playMode: n, enter_method: r="click", volume_from: a, volume_to: s, aweme_type: l, pic_cnt: c} = e;
                void 0 !== a && void 0 !== s ? i.f.sendEvent("switch_sound", {
                    sound_mode: s > a ? "adjust_up" : "adjust_down",
                    play_mode: o[n],
                    enter_method: r,
                    volume_from: a,
                    volume_to: s,
                    aweme_type: null != l ? l : 0,
                    pic_cnt: c
                }) : i.f.sendEvent("switch_sound", {
                    sound_mode: t ? "off" : "on",
                    play_mode: o[n],
                    enter_method: r,
                    aweme_type: null != l ? l : 0,
                    pic_cnt: c
                })
            }
            ,
            handleVideoUnmuteButtonShow: () => {
                i.f.sendEvent("unmute_show")
            }
            ,
            handleVideoUnmuteButtonClicked: () => {
                i.f.sendEvent("unmute_click")
            }
            ,
            handleVolumeChange: e => {
                const {volume_from: t=0, volume_to: n=0, click_mute: o=!1} = e;
                i.f.sendEvent("volume_change", {
                    volume_change: o ? 0 : Number((n - t).toFixed(4)),
                    volume_level: n,
                    click_mute: o
                })
            }
        }
    }
}]);
