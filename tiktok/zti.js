"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[978], {
    56962: (e, t, r) => {
        r.r(t),
        r.d(t, {
            SecureSDK: () => kr,
            createSecureInstance: () => Sr
        });
        var i = r(53809)
          , n = r(20607)
          , o = r(46002)
          , s = r(66910)
          , a = r(16241);
        function c(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function l(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function u(e, t, r) {
            return t && l(e.prototype, t),
            r && l(e, r),
            e
        }
        function h(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function d(e, t) {
            return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , i = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                )))),
                i.forEach((function(t) {
                    h(e, t, r[t])
                }
                ))
            }
            return e
        }
        var p, f, m, y = Object.create, v = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, b = Object.getOwnPropertyNames, k = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty, w = (p = {
            "../../node_modules/.pnpm/@slardar+web@1.12.4/node_modules/@slardar/web/sg/minimal.js": function(e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var t = function() {
                    return t = Object.assign || function(e) {
                        for (var t, r = 1, i = arguments.length; r < i; r++)
                            for (var n in t = arguments[r])
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e
                    }
                    ,
                    t.apply(this, arguments)
                };
                function r(e, t) {
                    var r = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!r)
                        return e;
                    var i, n, o = r.call(e), s = [];
                    try {
                        for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; )
                            s.push(i.value)
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            i && !i.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                    return s
                }
                function i(e, t, r) {
                    if (r || 2 === arguments.length)
                        for (var i, n = 0, o = t.length; n < o; n++)
                            !i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)),
                            i[n] = t[n]);
                    return e.concat(i || Array.prototype.slice.call(t))
                }
                var n = function(e) {
                    return JSON.stringify({
                        ev_type: "batch",
                        list: e
                    })
                }
                  , o = ["init", "start", "config", "beforeDestroy", "provide", "beforeReport", "report", "beforeBuild", "build", "beforeSend", "send", "beforeConfig"]
                  , s = function() {
                    return {}
                };
                function a(e) {
                    return "object" == typeof e && null !== e
                }
                var c = Object.prototype;
                function l(e) {
                    if (a(e)) {
                        if ("function" == typeof Object.getPrototypeOf) {
                            var t = Object.getPrototypeOf(e);
                            return t === c || null === t
                        }
                        return "[object Object]" === c.toString.call(e)
                    }
                    return !1
                }
                function u(e) {
                    return "[object Array]" === c.toString.call(e)
                }
                function h(e) {
                    return "function" == typeof e
                }
                function g(e) {
                    return "string" == typeof e
                }
                function p(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                function f(e, r) {
                    var i = t({}, e);
                    for (var n in r)
                        p(r, n) && void 0 !== r[n] && (a(r[n]) && l(r[n]) ? i[n] = f(a(e[n]) ? e[n] : {}, r[n]) : u(r[n]) && u(e[n]) ? i[n] = m(e[n], r[n]) : i[n] = r[n]);
                    return i
                }
                function m(e, t) {
                    var r = u(e) ? e : []
                      , i = u(t) ? t : [];
                    return Array.prototype.concat.call(r, i).map((function(e) {
                        return d(e, RegExp) ? e : a(e) && l(e) ? f({}, e) : u(e) ? m([], e) : e
                    }
                    ))
                }
                function y(e, t) {
                    if (!u(e))
                        return !1;
                    if (0 === e.length)
                        return !1;
                    for (var r = 0; r < e.length; ) {
                        if (e[r] === t)
                            return !0;
                        r++
                    }
                    return !1
                }
                var v = function(e, t) {
                    if (!u(e))
                        return e;
                    var r = e.indexOf(t);
                    if (r >= 0) {
                        var i = e.slice();
                        return i.splice(r, 1),
                        i
                    }
                    return e
                }
                  , _ = function(e, t, i) {
                    return function(e, t) {
                        for (var n, o = r(t.split(".")), s = o[0], a = o.slice(1); e && a.length > 0; )
                            e = e[s],
                            s = (n = r(a))[0],
                            a = n.slice(1);
                        if (e)
                            return function(e, t) {
                                if (e && t in e && h(e[t]))
                                    try {
                                        return e[t].apply(e, i)
                                    } catch (e) {
                                        return
                                    }
                            }(e, s)
                    }(e, t)
                };
                function b(e) {
                    try {
                        return g(e) ? e : JSON.stringify(e)
                    } catch (e) {
                        return "[FAILED_TO_STRINGIFY]:" + String(e)
                    }
                }
                var k = "".padStart ? function(e, t) {
                    return void 0 === t && (t = 8),
                    e.padStart(t, " ")
                }
                : function(e) {
                    return e
                }
                  , S = 0
                  , w = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    console.error.apply(console, i(["[SDK]", Date.now(), k("" + S++)], r(e), !1))
                }
                  , C = 0
                  , K = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    console.warn.apply(console, i(["[SDK]", Date.now(), k("" + C++)], r(e), !1))
                }
                  , I = function(e) {
                    return function(t) {
                        for (var r = t, i = 0; i < e.length && r; i++)
                            try {
                                r = e[i](r)
                            } catch (e) {
                                w(e)
                            }
                        return r
                    }
                };
                function O() {
                    var e = function() {
                        for (var e = new Array(16), t = 0, r = 0; r < 16; r++)
                            3 & r || (t = 4294967296 * Math.random()),
                            e[r] = t >>> ((3 & r) << 3) & 255;
                        return e
                    }();
                    return e[6] = 15 & e[6] | 64,
                    e[8] = 63 & e[8] | 128,
                    function(e) {
                        for (var t = [], r = 0; r < 256; ++r)
                            t[r] = (r + 256).toString(16).substr(1);
                        var i = 0
                          , n = t;
                        return [n[e[i++]], n[e[i++]], n[e[i++]], n[e[i++]], "-", n[e[i++]], n[e[i++]], "-", n[e[i++]], n[e[i++]], "-", n[e[i++]], n[e[i++]], "-", n[e[i++]], n[e[i++]], n[e[i++]], n[e[i++]], n[e[i++]], n[e[i++]]].join("")
                    }(e)
                }
                var D = function(e, t) {
                    var r = [];
                    try {
                        r = t.reduce((function(t, r) {
                            try {
                                var i = r(e);
                                "function" == typeof i && t.push(i)
                            } catch (e) {}
                            return t
                        }
                        ), [])
                    } catch (e) {}
                    return function(e) {
                        return D(e, r)
                    }
                }
                  , E = function(e) {
                    void 0 === e && (e = 3e5);
                    var t, r = [], i = [], n = !1, o = function(e, t, i) {
                        var n = 0;
                        return -1 === i ? s : function() {
                            if (r.length)
                                return n && clearTimeout(n),
                                void (n = 0);
                            0 === n && (n = setTimeout(t, i))
                        }
                    }(0, (function() {
                        n = !0,
                        t && t[0](),
                        i.forEach((function(e) {
                            return e()
                        }
                        )),
                        i.length = 0,
                        t = void 0
                    }
                    ), e), a = function(e) {
                        r = v(r, e),
                        !n && o()
                    };
                    return {
                        next: function(e) {
                            return D(e, r)
                        },
                        complete: function(e) {
                            i.push(e)
                        },
                        attach: function(e, r) {
                            t = [e, r]
                        },
                        subscribe: function(e) {
                            if (n)
                                throw new Error("Observer is closed");
                            return r.push(e),
                            t && t[1] && t[1](e),
                            o(),
                            function() {
                                return a(e)
                            }
                        },
                        unsubscribe: a
                    }
                }
                  , x = function(e, t, r) {
                    var i = E(r);
                    try {
                        e(i.next, i.attach),
                        t && i.complete(t)
                    } catch (e) {}
                    return [i.subscribe, i.unsubscribe]
                }
                  , T = function(e, t) {
                    var i = r(e, 1)[0];
                    return function(e, r) {
                        var n = i((function(r) {
                            var i;
                            return (i = t,
                            function(e) {
                                for (var t = !0, r = 0; r < i.length && t; r++)
                                    try {
                                        t = i[r](e)
                                    } catch (e) {
                                        w(e)
                                    }
                                return t
                            }
                            )(r) ? e(r) : s
                        }
                        ));
                        r((function() {
                            n()
                        }
                        ))
                    }
                };
                var P = function() {
                    return Date.now()
                };
                function L() {
                    if ("object" == typeof window && a(window))
                        return window
                }
                function j() {
                    var e = L() && L() && window.location;
                    return e ? e.href : ""
                }
                var B = function(e) {
                    if (e)
                        return e.__SLARDAR_REGISTRY__ || (e.__SLARDAR_REGISTRY__ = {
                            Slardar: {
                                plugins: [],
                                errors: [],
                                subject: {}
                            }
                        }),
                        e.__SLARDAR_REGISTRY__.Slardar
                }
                  , R = function(e) {
                    var t = {
                        url: j(),
                        timestamp: P()
                    }
                      , r = e.config();
                    return (null == r ? void 0 : r.pid) && (t.pid = r.pid),
                    (null == e ? void 0 : e.context) && (t.context = e.context.toString()),
                    t
                }
                  , $ = function() {
                    return !!btoa && !!atob
                }
                  , A = function(e, r, i) {
                    var n;
                    if (!(i <= 0))
                        try {
                            localStorage.setItem(e, (n = JSON.stringify(t(t({}, r), {
                                expires: P() + i
                            })),
                            $() ? btoa(encodeURI(n)) : n))
                        } catch (e) {}
                }
                  , N = function(e) {
                    return !1 === e ? 0 : !0 === e || void 0 === e || "number" != typeof e ? 7776e6 : e
                }
                  , M = ["name", "message", "stack", "filename", "lineno", "colno"]
                  , q = function(e) {
                    var t, r, i, n;
                    return function(e) {
                        switch (Object.prototype.toString.call(e)) {
                        case "[object Error]":
                        case "[object Exception]":
                        case "[object DOMError]":
                        case "[object DOMException]":
                            return !0;
                        default:
                            return d(e, Error)
                        }
                    }(e) ? (i = M,
                    t = (r = e) && a(r) ? i.reduce((function(e, t) {
                        return e[t] = r[t],
                        e
                    }
                    ), {}) : r) : (l(e) || (n = e,
                    "undefined" != typeof Event && function(e, t) {
                        try {
                            return d(e, t)
                        } catch (e) {
                            return !1
                        }
                    }(n, Event)) || g(e)) && (t = {
                        message: b(e)
                    }),
                    t
                };
                function U(e) {
                    return (null == e ? void 0 : e.effectiveType) || (null == e ? void 0 : e.type) || ""
                }
                var H = function(e, t, r) {
                    var i = t.url
                      , n = t.data
                      , o = t.success
                      , a = void 0 === o ? s : o
                      , c = t.fail
                      , l = void 0 === c ? s : c
                      , u = t.getResponseText
                      , h = void 0 === u ? s : u
                      , d = t.withCredentials
                      , g = void 0 !== d && d
                      , p = new r;
                    p.withCredentials = g,
                    p.open(e, i, !0),
                    p.setRequestHeader("Content-Type", "application/json"),
                    p.onload = function() {
                        null == h || h(this.responseText);
                        try {
                            if (this.responseText) {
                                var e = JSON.parse(this.responseText);
                                a(e)
                            } else
                                a({})
                        } catch (e) {
                            l(e)
                        }
                    }
                    ,
                    p.onerror = function() {
                        l(new Error("Network request failed"))
                    }
                    ,
                    p.onabort = function() {
                        l(new Error("Network request aborted"))
                    }
                    ,
                    p.send(n)
                };
                function W(e) {
                    var t = function(e) {
                        var t, r = e.transport, i = e.endpoint, o = e.size, s = void 0 === o ? 10 : o, a = e.wait, c = void 0 === a ? 1e3 : a, l = [], u = 0;
                        function h() {
                            if (l.length) {
                                var e = this.getBatchData();
                                r.post({
                                    url: i,
                                    data: e,
                                    fail: function(r) {
                                        t && t(r, e)
                                    }
                                }),
                                l = []
                            }
                        }
                        return {
                            getSize: function() {
                                return s
                            },
                            getWait: function() {
                                return c
                            },
                            setSize: function(e) {
                                s = e
                            },
                            setWait: function(e) {
                                c = e
                            },
                            getEndpoint: function() {
                                return i
                            },
                            setEndpoint: function(e) {
                                i = e
                            },
                            send: function(e) {
                                l.push(e),
                                l.length >= s && h.call(this),
                                clearTimeout(u),
                                u = setTimeout(h.bind(this), c)
                            },
                            flush: function() {
                                clearTimeout(u),
                                h.call(this)
                            },
                            getBatchData: function() {
                                return l.length ? n(l) : ""
                            },
                            clear: function() {
                                clearTimeout(u),
                                l = []
                            },
                            fail: function(e) {
                                t = e
                            }
                        }
                    }(e)
                      , i = t.send;
                    return function() {
                        var o = L();
                        if (o) {
                            var c = r(function(e) {
                                var t = !1;
                                return [function(r) {
                                    t || (t = !0,
                                    e && e(r))
                                }
                                ]
                            }((function() {
                                if (e.transport.useBeacon) {
                                    var r = (c = L()) && c.navigator.sendBeacon ? {
                                        get: function() {},
                                        post: function(e, t) {
                                            c.navigator.sendBeacon(e, t)
                                        }
                                    } : {
                                        get: s,
                                        post: s
                                    }
                                      , o = t.getBatchData();
                                    o && (r.post(t.getEndpoint(), o),
                                    t.clear()),
                                    t.send = function(e) {
                                        r.post(t.getEndpoint(), n([e]))
                                    }
                                    ,
                                    function(e) {
                                        var t = function() {
                                            if ("object" == typeof document && a(document))
                                                return document
                                        }()
                                          , r = L();
                                        if (t && r) {
                                            var i, n, o, c, l = s;
                                            n = "visibilitychange",
                                            o = function() {
                                                "visible" === t.visibilityState && (e(),
                                                l())
                                            }
                                            ,
                                            void 0 === (c = !0) && (c = !1),
                                            (i = t).addEventListener(n, o, c),
                                            l = function() {
                                                i.removeEventListener(n, o, c)
                                            }
                                        }
                                    }((function() {
                                        t.send = i
                                    }
                                    ))
                                } else
                                    t.flush();
                                var c
                            }
                            )), 1)
                              , l = c[0];
                            ["unload", "beforeunload", "pagehide"].forEach((function(e) {
                                var t, r, i;
                                t = e,
                                r = l,
                                void 0 === (i = !1) && (i = !1),
                                o.addEventListener(t, r, i)
                            }
                            ))
                        }
                    }(),
                    t
                }
                var J = "1.12.4"
                  , V = "/monitor_web/settings/browser-settings"
                  , F = "/monitor_browser/collect/batch/"
                  , z = ["/log/sentry/", F, V]
                  , G = "session"
                  , X = {
                    sample_rate: 1,
                    include_users: [],
                    sample_granularity: G,
                    rules: {}
                };
                function Y(e) {
                    var r = e.plugins || {};
                    for (var i in r)
                        r[i] && !a(r[i]) && (r[i] = {});
                    return t(t({}, e), {
                        plugins: r
                    })
                }
                function Q(e) {
                    return a(e) && "bid"in e
                }
                function Z(e) {
                    return t({}, e)
                }
                var ee = function(e, t) {
                    return void 0 === t && (t = V),
                    (e && e.indexOf("//") >= 0 ? "" : "https://") + e + t
                }
                  , te = function(e) {
                    return "SLARDAR" + e
                }
                  , re = function(e, t) {
                    void 0 === e && (e = "");
                    var r = {
                        userId: O(),
                        deviceId: O()
                    };
                    if (t <= 0)
                        return r;
                    var i = te(e);
                    return function(e, t) {
                        try {
                            var r = localStorage.getItem(e);
                            if (!r || !$() || "{" !== r[0])
                                return;
                            A(e, JSON.parse(r), t)
                        } catch (e) {}
                    }(i, t),
                    function(e) {
                        try {
                            var t = localStorage.getItem(e)
                              , r = t;
                            t && "string" == typeof t && (r = JSON.parse((s = t,
                            $() ? decodeURI(atob(s)) : s)));
                            var i = r
                              , n = i.expires
                              , o = function(e, t) {
                                var r = {};
                                for (var i in e)
                                    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                    var n = 0;
                                    for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
                                        t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]])
                                }
                                return r
                            }(i, ["expires"]);
                            return n >= P() ? o : void 0
                        } catch (e) {
                            return
                        }
                        var s
                    }(i) || r
                }
                  , ie = {
                    get: function() {
                        return this.__SLARDAR__REPALCE__HOLDER__
                    }
                }
                  , ne = function(e) {
                    var r, i, n = e, o = {}, a = ie.get(), c = s, l = s;
                    return {
                        getConfig: function() {
                            return n
                        },
                        setConfig: function(e) {
                            var s, l, d, g;
                            return o = t(t({}, o), e || {}),
                            u(),
                            r || (r = e,
                            n.useLocalConfig || !n.bid ? (i = {},
                            c()) : a ? h() : (s = n.transport,
                            l = n.domain,
                            d = n.bid,
                            g = function(e) {
                                a = e,
                                h()
                            }
                            ,
                            s.get({
                                withCredentials: !0,
                                url: ee(l) + "?bid=" + d + "&store=1",
                                success: function(e) {
                                    g(e.data || {})
                                },
                                fail: function() {
                                    g({
                                        sample: {
                                            sample_rate: .001
                                        }
                                    })
                                }
                            }))),
                            n
                        },
                        onChange: function(e) {
                            l = e
                        },
                        onReady: function(e) {
                            c = function() {
                                !function(e) {
                                    var t = e.bid
                                      , r = e.userId
                                      , i = e.deviceId
                                      , n = e.storageExpires
                                      , o = te(t);
                                    A(o, {
                                        userId: r,
                                        deviceId: i
                                    }, N(n))
                                }(n),
                                e()
                            }
                            ,
                            i && c()
                        }
                    };
                    function u() {
                        var r = t(t(t({}, e), i || {}), o);
                        r.plugins = function() {
                            for (var e = [], t = 0; t < arguments.length; t++)
                                e[t] = arguments[t];
                            for (var r = {}, i = 0; i < e.length; )
                                r = f(r, e[i++]);
                            return r
                        }(e.plugins, (null == i ? void 0 : i.plugins) || {}, o.plugins || {}),
                        r.sample = oe(oe(e.sample, null == i ? void 0 : i.sample), o.sample),
                        n = r,
                        l()
                    }
                    function h() {
                        i = function(e) {
                            var t;
                            if (!e)
                                return {};
                            var r = e.sample
                              , i = e.plugins
                              , n = e.timestamp
                              , o = e.quota_rate
                              , s = void 0 === o ? 1 : o
                              , a = e.apdex;
                            if (!r)
                                return {};
                            var c = r.sample_rate
                              , l = r.sample_granularity
                              , u = void 0 === l ? G : l
                              , h = r.include_users
                              , d = r.rules;
                            return {
                                sample: {
                                    include_users: h,
                                    sample_rate: c * s,
                                    sample_granularity: u,
                                    rules: (void 0 === d ? [] : d).reduce((function(e, t) {
                                        var r = t.name
                                          , i = t.enable
                                          , n = t.sample_rate
                                          , o = t.conditional_sample_rules;
                                        return e[r] = {
                                            enable: i,
                                            sample_rate: n,
                                            conditional_sample_rules: o
                                        },
                                        e
                                    }
                                    ), {})
                                },
                                plugins: {
                                    heatmap: null !== (t = null == i ? void 0 : i.heatmap) && void 0 !== t && t
                                },
                                apdex: a,
                                serverTimestamp: n
                            }
                        }(a),
                        u(),
                        c()
                    }
                };
                function oe(e, n) {
                    if (!e || !n)
                        return e || n;
                    var o = t(t({}, e), n);
                    return o.include_users = i(i([], r(e.include_users || []), !1), r(n.include_users || []), !1),
                    o.rules = i(i([], r(Object.keys(e.rules || {})), !1), r(Object.keys(n.rules || {})), !1).reduce((function(o, s) {
                        var a, c;
                        return s in o || (s in (e.rules || {}) && s in (n.rules || {}) ? (o[s] = t(t({}, e.rules[s]), n.rules[s]),
                        o[s].conditional_sample_rules = i(i([], r(e.rules[s].conditional_sample_rules || []), !1), r(n.rules[s].conditional_sample_rules || []), !1)) : o[s] = (null === (a = e.rules) || void 0 === a ? void 0 : a[s]) || (null === (c = n.rules) || void 0 === c ? void 0 : c[s])),
                        o
                    }
                    ), {}),
                    o
                }
                var se = {
                    build: function(e) {
                        return {
                            ev_type: e.ev_type,
                            payload: e.payload,
                            common: t(t({}, e.extra || {}), e.overrides || {})
                        }
                    }
                };
                function ae(e, t, r) {
                    void 0 === r && (r = B(L())),
                    r && r.plugins && (function(e, t) {
                        return e.plugins.filter((function(e) {
                            return e.name === t && e.version === J
                        }
                        ))[0]
                    }(r, e) || r.plugins.push({
                        name: e,
                        version: J,
                        apply: t
                    }))
                }
                var ce = function(e) {
                    var i, n, o = r(e, 2), s = o[0], a = o[1];
                    return {
                        ev_type: "js_error",
                        payload: {
                            error: (i = s,
                            n = i,
                            "[object ErrorEvent]" === Object.prototype.toString.call(n) ? q(i.error) : function(e) {
                                return "[object PromiseRejectionEvent]" === Object.prototype.toString.call(e)
                            }(i) ? function(e) {
                                var r;
                                try {
                                    var i = void 0;
                                    if ("reason"in e ? i = e.reason : "detail"in e && "reason"in e.detail && (i = e.detail.reason),
                                    i) {
                                        var n = q(i);
                                        return t(t({}, n), {
                                            name: null !== (r = n && n.name) && void 0 !== r ? r : "UnhandledRejection"
                                        })
                                    }
                                } catch (e) {}
                            }(i) : q(i)),
                            breadcrumbs: [],
                            extra: a || {}
                        },
                        extra: {
                            bid: "slardar_sdk"
                        }
                    }
                }
                  , le = function(e) {
                    var t, r, i, n = N(e.storageExpires), o = re(e.bid, n);
                    return {
                        bid: "",
                        pid: "",
                        viewId: (r = "_",
                        i = P(),
                        r + "_" + i),
                        userId: o.userId,
                        deviceId: o.deviceId,
                        storageExpires: n,
                        sessionId: O(),
                        domain: "mon-va.byteoversea.com",
                        pluginBundle: {
                            name: "commonMonitors",
                            plugins: ["breadcrumb", "jsError", "performance", "resourceError", "resource"]
                        },
                        pluginPathPrefix: "https://sf16-short-sg.bytedapm.com/slardar/fe/sdk-web/plugins",
                        plugins: {
                            ajax: {
                                ignoreUrls: z
                            },
                            fetch: {
                                ignoreUrls: z
                            },
                            breadcrumb: {},
                            pageview: {},
                            jsError: {},
                            resource: {},
                            resourceError: {},
                            performance: {},
                            tti: {},
                            fmp: {},
                            blankScreen: !1,
                            heatmap: !1
                        },
                        release: "",
                        env: "production",
                        sample: X,
                        transport: (t = function() {
                            if ("function" == typeof XMLHttpRequest && h(XMLHttpRequest))
                                return XMLHttpRequest
                        }(),
                        t ? {
                            useBeacon: !0,
                            get: function(e) {
                                H("GET", e, t)
                            },
                            post: function(e) {
                                H("POST", e, t)
                            }
                        } : {
                            get: s,
                            post: s
                        })
                    }
                };
                e.createMinimalBrowserClient = function(e) {
                    var n = void 0 === e ? {} : e
                      , c = n.createSender
                      , l = void 0 === c ? function(e) {
                        return W({
                            size: 20,
                            endpoint: (t = e.domain,
                            void 0 === r && (r = F),
                            (t && t.indexOf("//") >= 0 ? "" : "https://") + t + r),
                            transport: e.transport
                        });
                        var t, r
                    }
                    : c
                      , u = n.builder
                      , d = void 0 === u ? se : u
                      , g = n.createDefaultConfig
                      , p = function(e) {
                        var t, n, s = e.builder, c = e.createSender, l = e.createDefaultConfig, u = e.createConfigManager, h = e.userConfigNormalizer, d = e.initConfigNormalizer, g = e.validateInitConfig, p = {};
                        o.forEach((function(e) {
                            return p[e] = []
                        }
                        ));
                        var f = !1
                          , m = !1
                          , _ = !1
                          , b = []
                          , k = []
                          , S = function() {
                            var e = !1
                              , t = {}
                              , r = function(e) {
                                e.length && e.forEach((function(e) {
                                    try {
                                        e()
                                    } catch (e) {}
                                }
                                )),
                                e.length = 0
                            }
                              , i = function(e) {
                                t[e] && t[e].forEach((function(e) {
                                    r(e[1])
                                }
                                )),
                                t[e] = void 0
                            };
                            return {
                                set: function(i, n, o) {
                                    t[i] ? t[i].push([n, o]) : t[i] = [[n, o]],
                                    e && r(o)
                                },
                                has: function(e) {
                                    return !!t[e]
                                },
                                remove: i,
                                removeByEvType: function(e) {
                                    Object.keys(t).forEach((function(i) {
                                        t[i] && t[i].forEach((function(t) {
                                            t[0] === e && r(t[1])
                                        }
                                        ))
                                    }
                                    ))
                                },
                                clear: function() {
                                    e = !0,
                                    Object.keys(t).forEach((function(e) {
                                        i(e)
                                    }
                                    ))
                                }
                            }
                        }()
                          , w = {
                            getBuilder: function() {
                                return s
                            },
                            getSender: function() {
                                return t
                            },
                            getPreStartQueue: function() {
                                return b
                            },
                            init: function(e) {
                                if (f)
                                    K("already inited");
                                else {
                                    if (!(e && a(e) && g(e)))
                                        throw new Error("invalid InitConfig, init failed");
                                    var r = l(e);
                                    if (!r)
                                        throw new Error("defaultConfig missing");
                                    var i = d(e);
                                    if ((n = u(r)).setConfig(i),
                                    n.onChange((function() {
                                        C("config")
                                    }
                                    )),
                                    !(t = c(n.getConfig())))
                                        throw new Error("sender missing");
                                    f = !0,
                                    C("init", !0)
                                }
                            },
                            set: function(e) {
                                f && e && a(e) && (C("beforeConfig", !1, e),
                                null == n || n.setConfig(e))
                            },
                            config: function(e) {
                                if (f)
                                    return e && a(e) && (C("beforeConfig", !1, e),
                                    null == n || n.setConfig(h(e))),
                                    null == n ? void 0 : n.getConfig()
                            },
                            provide: function(e, t) {
                                y(k, e) ? K("cannot provide " + e + ", reserved") : (w[e] = t,
                                C("provide", !1, e))
                            },
                            start: function() {
                                var e = this;
                                f && (m || null == n || n.onReady((function() {
                                    m = !0,
                                    C("start", !0),
                                    b.forEach((function(t) {
                                        return e.build(t)
                                    }
                                    )),
                                    b.length = 0
                                }
                                )))
                            },
                            report: function(e) {
                                if (e) {
                                    var t = I(p.beforeReport)(e);
                                    if (t) {
                                        var r = I(p.report)(t);
                                        r && (m ? this.build(r) : b.push(r))
                                    }
                                }
                            },
                            build: function(e) {
                                if (m) {
                                    var t = I(p.beforeBuild)(e);
                                    if (t) {
                                        var r = s.build(t);
                                        if (r) {
                                            var i = I(p.build)(r);
                                            i && this.send(i)
                                        }
                                    }
                                }
                            },
                            send: function(e) {
                                if (m) {
                                    var r = I(p.beforeSend)(e);
                                    r && (t.send(r),
                                    C("send", !1, r))
                                }
                            },
                            destroy: function() {
                                S.clear(),
                                _ = !0,
                                b.length = 0,
                                C("beforeDestroy", !0)
                            },
                            on: function(e, t) {
                                if ("init" === e && f || "start" === e && m || "beforeDestroy" === e && _)
                                    try {
                                        t()
                                    } catch (e) {}
                                else
                                    p[e] && p[e].push(t)
                            },
                            off: function(e, t) {
                                p[e] && (p[e] = v(p[e], t))
                            },
                            destroyAgent: S
                        };
                        return k = Object.keys(w),
                        w;
                        function C(e, t) {
                            void 0 === t && (t = !1);
                            for (var n = [], o = 2; o < arguments.length; o++)
                                n[o - 2] = arguments[o];
                            p[e].forEach((function(e) {
                                try {
                                    e.apply(void 0, i([], r(n), !1))
                                } catch (e) {}
                            }
                            )),
                            t && (p[e].length = 0)
                        }
                    }({
                        validateInitConfig: Q,
                        initConfigNormalizer: Y,
                        userConfigNormalizer: Z,
                        createSender: l,
                        builder: d,
                        createDefaultConfig: void 0 === g ? le : g,
                        createConfigManager: ne
                    });
                    (function(e, t) {
                        void 0 === t && (t = .001);
                        var n, o, s, a = B(L());
                        a && (a.errors || (a.errors = []),
                        "observe"in a.errors || (n = t,
                        Math.random() < Number(n) && (a.errors = (o = a.errors,
                        s = [],
                        o.observe = function(e) {
                            s.push(e)
                        }
                        ,
                        o.push = function() {
                            for (var e, t = [], n = 0; n < arguments.length; n++)
                                t[n] = arguments[n];
                            return t.forEach((function(e) {
                                s.forEach((function(t) {
                                    return t(e)
                                }
                                ))
                            }
                            )),
                            (e = [].push).call.apply(e, i([o], r(t), !1))
                        }
                        ,
                        o),
                        a.errors.forEach((function(t) {
                            e.report(ce(t))
                        }
                        )),
                        a.errors.observe((function(t) {
                            e.report(ce(t))
                        }
                        )))))
                    }
                    )(p),
                    function(e) {
                        var r = function() {
                            var e = {}
                              , r = {}
                              , i = {
                                set: function(t, n) {
                                    return e[t] = n,
                                    r[t] = b(n),
                                    i
                                },
                                merge: function(n) {
                                    return e = t(t({}, e), n),
                                    Object.keys(n).forEach((function(e) {
                                        r[e] = b(n[e])
                                    }
                                    )),
                                    i
                                },
                                delete: function(t) {
                                    return delete e[t],
                                    delete r[t],
                                    i
                                },
                                clear: function() {
                                    return e = {},
                                    r = {},
                                    i
                                },
                                get: function(e) {
                                    return r[e]
                                },
                                toString: function() {
                                    return t({}, r)
                                }
                            };
                            return i
                        }();
                        e.provide("context", r),
                        e.on("report", (function(e) {
                            return e.extra || (e.extra = {}),
                            e.extra.context = r.toString(),
                            e
                        }
                        ))
                    }(p);
                    var f = B(L());
                    (function(e, t) {
                        var i = t || {}
                          , n = {};
                        e.provide("setFilter", (function(e, t) {
                            n[e] || (n[e] = []),
                            n[e].push(t)
                        }
                        )),
                        e.provide("initSubject", (function(t) {
                            var o = r(t, 2)
                              , s = o[0]
                              , a = o[1]
                              , c = function(e) {
                                return e.split("_")[0]
                            }(s)
                              , l = !!c && n[c];
                            return i[s] || (i[s] = x(a, (function() {
                                i[s] = void 0
                            }
                            ))),
                            l ? function(e, t) {
                                var i = r(t, 2)
                                  , n = i[0]
                                  , o = i[1]
                                  , s = e.privateSubject || {};
                                return s[n] || (s[n] = x(o, (function() {
                                    s[n] = void 0
                                }
                                ), void 0)),
                                s[n]
                            }(e, [s, T(i[s], l)]) : i[s]
                        }
                        )),
                        e.provide("getSubject", (function(e) {
                            return i[e]
                        }
                        )),
                        e.provide("privateSubject", {})
                    }
                    )(p, f && f.subject),
                    function(e) {
                        var r, i = !1;
                        e.on("init", (function() {
                            r = (new Date).getTime(),
                            e.on("config", (function() {
                                var n, o = null === (n = e.config()) || void 0 === n ? void 0 : n.serverTimestamp;
                                if (!(isNaN(o) || Number(o) <= 0 || i)) {
                                    i = !0;
                                    var s = (new Date).getTime();
                                    if (s - r < 700 && o) {
                                        var a = o - (s + r) / 2;
                                        !isNaN(a) && (a > 0 || a < -6e5) && e.on("beforeBuild", (function(e) {
                                            var r;
                                            return t(t({}, e), {
                                                extra: t(t({}, null !== (r = e.extra) && void 0 !== r ? r : {}), {
                                                    sdk_offset: null != a ? a : 0
                                                })
                                            })
                                        }
                                        ))
                                    }
                                }
                            }
                            ))
                        }
                        ))
                    }(p),
                    function(e) {
                        e.on("beforeBuild", (function(r) {
                            return function(e, r) {
                                var i = {};
                                return i.bid = r.bid,
                                i.user_id = r.userId,
                                i.device_id = r.deviceId,
                                i.session_id = r.sessionId,
                                i.release = r.release,
                                i.env = r.env,
                                t(t({}, e), {
                                    extra: t(t({}, i), e.extra || {})
                                })
                            }(r, e.config())
                        }
                        ))
                    }(p),
                    function(e) {
                        e.on("report", (function(r) {
                            return function(e, r) {
                                var i = r || {}
                                  , n = i.pid
                                  , o = void 0 === n ? "" : n
                                  , s = i.viewId
                                  , a = void 0 === s ? "" : s
                                  , c = {
                                    url: j(),
                                    timestamp: P(),
                                    sdk_version: J,
                                    sdk_name: "SDK_SLARDAR_WEB",
                                    pid: o,
                                    view_id: a
                                };
                                return t(t({}, e), {
                                    extra: t(t({}, c), e.extra || {})
                                })
                            }(r, e.config())
                        }
                        ))
                    }(p),
                    function(e) {
                        var r = function() {
                            var e = function() {
                                if (L() && "navigator"in window)
                                    return window.navigator
                            }();
                            if (e)
                                return e.connection || e.mozConnection || e.webkitConnection
                        }()
                          , i = U(r);
                        r && (r.onchange = function() {
                            i = U(r)
                        }
                        ),
                        e.on("report", (function(e) {
                            return t(t({}, e), {
                                extra: t(t({}, e.extra || {}), {
                                    network_type: i
                                })
                            })
                        }
                        ))
                    }(p),
                    function(e) {
                        e.on("start", (function() {
                            var t = e.config().bid
                              , r = e.getSender();
                            r.setEndpoint(r.getEndpoint() + "?biz_id=" + t)
                        }
                        ))
                    }(p);
                    var m = function(e, t, n) {
                        var o, a, c, l, u = {}, d = function() {
                            for (var n, o = [], s = 0; s < arguments.length; s++)
                                o[s] = arguments[s];
                            var a = o[0];
                            if (a) {
                                var c = a.split(".")[0];
                                if (!(c in d)) {
                                    var l = u[c] || []
                                      , h = null !== (n = null == t ? void 0 : t(e)) && void 0 !== n ? n : {};
                                    return l.push(i([h], r(o), !1)),
                                    void (u[c] = l)
                                }
                                return _(d, a, [].slice.call(o, 1))
                            }
                        };
                        for (var g in (o = e,
                        a = "provide",
                        c = function(t) {
                            return function(r, i) {
                                d[r] = i,
                                t.call(e, r, i)
                            }
                        }
                        ,
                        void 0 === l && (l = !0),
                        function() {
                            for (var e = [], t = 0; t < arguments.length; t++)
                                e[t] = arguments[t];
                            if (!o)
                                return s;
                            var n = o[a]
                              , u = c.apply(void 0, i([n], r(e), !1))
                              , d = u;
                            return h(d) && l && (d = function() {
                                for (var e = [], t = 0; t < arguments.length; t++)
                                    e[t] = arguments[t];
                                try {
                                    return u.apply(this, e)
                                } catch (t) {
                                    return h(n) && n.apply(this, e)
                                }
                            }
                            ),
                            o[a] = d,
                            function(e) {
                                e || (d === o[a] ? o[a] = n : u = n)
                            }
                        }
                        )(),
                        e)
                            Object.prototype.hasOwnProperty.call(e, g) && (d[g] = e[g]);
                        return e.on("provide", (function(t) {
                            u[t] && (u[t].forEach((function(t) {
                                var i = r(t)
                                  , o = i[0]
                                  , s = i.slice(1);
                                null == n || n(e, o, s)
                            }
                            )),
                            u[t] = null)
                        }
                        )),
                        d
                    }(p, R, (function(e, t, n) {
                        return function(e, t) {
                            return function(r) {
                                var i = function(e) {
                                    return e.overrides = t,
                                    e
                                };
                                e.on("report", i),
                                r(),
                                e.off("report", i)
                            }
                        }(e, t)((function() {
                            var e = r(n)
                              , t = e[0]
                              , o = e.slice(1);
                            p[t].apply(p, i([], r(o), !1))
                        }
                        ))
                    }
                    ));
                    return function(e, t) {
                        e.on("init", (function() {
                            var r = []
                              , i = function(i) {
                                i.forEach((function(i) {
                                    var n = i.name;
                                    y(r, n) || (r.push(n),
                                    i.setup(e),
                                    t && t(n, i.setup),
                                    e.destroyAgent.set(n, n, [function() {
                                        r = v(r, n),
                                        i.tearDown && i.tearDown()
                                    }
                                    ]))
                                }
                                ))
                            };
                            e.provide("applyIntegrations", i);
                            var n = e.config();
                            n && n.integrations && i(n.integrations)
                        }
                        ))
                    }(m, ae),
                    m
                }
                ,
                e.getDefaultConfig = le
            }
        },
        function() {
            return f || (0,
            p[b(p)[0]])((f = {
                exports: {}
            }).exports, f),
            f.exports
        }
        ), C = function(e, t, r) {
            return r = null != e ? y(k(e)) : {},
            function(e, t, r, i) {
                if (t && "object" == typeof t || "function" == typeof t) {
                    var n = !0
                      , o = !1
                      , s = void 0;
                    try {
                        for (var a, c = function() {
                            var r = a.value;
                            S.call(e, r) || undefined === r || v(e, r, {
                                get: function() {
                                    return t[r]
                                },
                                enumerable: !(i = _(t, r)) || i.enumerable
                            })
                        }, l = b(t)[Symbol.iterator](); !(n = (a = l.next()).done); n = !0)
                            c()
                    } catch (e) {
                        o = !0,
                        s = e
                    } finally {
                        try {
                            n || null == l.return || l.return()
                        } finally {
                            if (o)
                                throw s
                        }
                    }
                }
                return e
            }(e && e.__esModule ? r : v(r, "default", {
                value: e,
                enumerable: !0
            }), e)
        }(w()), K = function(e) {
            return e ? e.startsWith("http") ? new URL(e).pathname : e : ""
        }, I = function() {
            function e(t) {
                var r = this;
                c(this, e),
                this.accountApiSlardar = void 0,
                this.setContext = function(e) {
                    if (r.accountApiSlardar)
                        for (var t in e)
                            r.accountApiSlardar("context.set", t, e[t])
                }
                ,
                this.setWebId = function(t) {
                    var r, i;
                    (null == e || null === (r = e._instance) || void 0 === r ? void 0 : r.accountApiSlardar) && (null == e || null === (i = e._instance) || void 0 === i || i.accountApiSlardar("config", {
                        userId: t
                    }))
                }
                ,
                this.setEnv = function(t) {
                    var r, i;
                    (null == e || null === (r = e._instance) || void 0 === r ? void 0 : r.accountApiSlardar) && (null == e || null === (i = e._instance) || void 0 === i || i.accountApiSlardar("config", {
                        env: t
                    }))
                }
                ;
                var a = t.sdkVersion;
                if (t.slardarGlobalName,
                !e._instance) {
                    var l, u;
                    this.accountApiSlardar = (0,
                    C.createMinimalBrowserClient)(),
                    this.accountApiSlardar("init", {
                        domain: "oci" === t.region ? "https://mon16-normal-useast5.tiktokv.us" : "eu" === t.region ? "https://mon-i18n.tiktokv.com" : "https://mon.tiktokv.com",
                        pluginPathPrefix: "oci" === t.region ? "https://lf16-cdn-tos.tiktokcdn-us.com/obj/static-tx/slardar/fe/sdk-web/plugins" : "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/slardar/fe/sdk-web/plugins",
                        bid: "ucenter_tiktok_zti_sdk",
                        pid: null === (u = window) || void 0 === u || null === (l = u.location) || void 0 === l ? void 0 : l.host,
                        env: "online",
                        integrations: [(0,
                        i.ew)({
                            autoWrap: !1,
                            ignoreUrls: [/^((?!\/passport\/).)*$/],
                            collectBodyOnError: !0
                        }), (0,
                        n.eM)({
                            autoWrap: !1,
                            ignoreUrls: [/^((?!\/passport\/).)*$/],
                            collectBodyOnError: !0
                        }), (0,
                        s.hX)({
                            onerror: !1,
                            onunhandledrejection: !1,
                            dedupe: !1,
                            captureGlobalAsync: !1
                        }), (0,
                        o.nT)()]
                    }),
                    this.accountApiSlardar("start");
                    var h = this.checkEnv();
                    this.accountApiSlardar("context.set", "container", h),
                    this.accountApiSlardar("context.set", "sdkversion", a),
                    e._instance = this
                }
                return e._instance
            }
            return u(e, [{
                key: "dot",
                value: function(t) {
                    var r;
                    if (null == e || null === (r = e._instance) || void 0 === r ? void 0 : r.accountApiSlardar)
                        try {
                            var i;
                            null == e || null === (i = e._instance) || void 0 === i || i.accountApiSlardar("sendEvent", t)
                        } catch (e) {
                            console.log(e)
                        }
                }
            }, {
                key: "log",
                value: function(t) {
                    var r;
                    if (null == e || null === (r = e._instance) || void 0 === r ? void 0 : r.accountApiSlardar)
                        try {
                            var i;
                            null == e || null === (i = e._instance) || void 0 === i || i.accountApiSlardar("sendLog", t)
                        } catch (e) {
                            console.log(e)
                        }
                }
            }, {
                key: "throw",
                value: function(t) {
                    var r;
                    if (null == e || null === (r = e._instance) || void 0 === r ? void 0 : r.accountApiSlardar)
                        try {
                            var i, n = t.err, o = t.extra;
                            null == e || null === (i = e._instance) || void 0 === i || i.accountApiSlardar("captureException", n, o)
                        } catch (e) {
                            console.log(e)
                        }
                }
            }, {
                key: "checkEnv",
                value: function() {
                    var e, t = null === (e = window) || void 0 === e ? void 0 : e.navigator.userAgent;
                    return /TTElectron/.test(t) ? "electron" : "web"
                }
            }, {
                key: "logRequestResponse",
                value: function(e, t) {
                    try {
                        try {
                            var r;
                            K(null == e || null === (r = e.config) || void 0 === r ? void 0 : r.url)
                        } catch (e) {}
                    } catch (e) {}
                }
            }], [{
                key: "getSlardar",
                value: function() {
                    return this._instance
                }
            }, {
                key: "clearSlardar",
                value: function() {
                    this._instance = null
                }
            }]),
            e
        }(), O = {
            params_for_special: "tiktok_account_login"
        }, D = function() {
            function e(t) {
                var r, i, n = t.appId, o = t.config, s = void 0 === o ? {} : o, l = t.region, u = void 0 === l ? "va" : l;
                c(this, e),
                this.zeroTrustTea = new a.g("zeroTrustTea"),
                this.zeroTrustTea.init((r = g({
                    app_id: n
                }, function(e) {
                    return "eu" === e ? {
                        channel: "ie",
                        channel_type: "ttp"
                    } : "oci" === e ? {
                        channel: "va",
                        channel_type: "ttp"
                    } : {
                        channel: e,
                        channel_type: "tcpy"
                    }
                }(u)),
                i = null != (i = {
                    log: Boolean(!1),
                    disable_auto_pv: !0,
                    disable_webid: !0
                }) ? i : {},
                Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : function(e) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(i)).forEach((function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
                }
                )),
                r)),
                this.setConfig(s),
                this.zeroTrustTea.start()
            }
            return u(e, [{
                key: "setEvtParams",
                value: function(e) {
                    this.zeroTrustTea.config({
                        evtParams: e
                    })
                }
            }, {
                key: "setConfig",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.zeroTrustTea.config(g({
                        _staging_flag: 0
                    }, e))
                }
            }, {
                key: "sendLog",
                value: function(e, t) {
                    e && this.zeroTrustTea.event(e, t)
                }
            }, {
                key: "sendBecon",
                value: function(e, t) {
                    e && this.zeroTrustTea.beconEvent(e, t)
                }
            }], [{
                key: "initTea",
                value: function(t) {
                    var r = t.appId
                      , i = t.config
                      , n = void 0 === i ? {} : i
                      , o = t.region;
                    return this._instance || (this._instance = new e({
                        appId: r,
                        config: n,
                        region: o
                    })),
                    this._instance
                }
            }, {
                key: "getTea",
                value: function() {
                    return this._instance
                }
            }]),
            e
        }(), E = function(e, t) {
            var r;
            return null === (r = D.getTea()) || void 0 === r ? void 0 : r.sendLog(e, g({}, O, t || {}))
        }, x = function(e, t) {
            var r, i, n, o, s, a, c, l, u, h = "";
            try {
                var d;
                h = K(null == e || null === (d = e.config) || void 0 === d ? void 0 : d.url)
            } catch (e) {}
            var g = (null == e || null === (r = e.headers) || void 0 === r ? void 0 : r["tt-ticket-guard-result"]) || "-99"
              , p = (null == e || null === (i = e.headers) || void 0 === i ? void 0 : i["x-tt-logid"]) || ""
              , f = null == e || null === (n = e.reqHeaders) || void 0 === n ? void 0 : n["tt-ticket-guard-version"]
              , m = null == e || null === (o = e.reqHeaders) || void 0 === o ? void 0 : o["tt-ticket-guard-iteration-version"]
              , y = (null == e || null === (s = e.reqHeaders) || void 0 === s ? void 0 : s["tt-ticket-guard-client-csr"]) ? 1 : 0
              , v = (null == e || null === (a = e.reqHeaders) || void 0 === a ? void 0 : a["tt-ticket-guard-client-cert"]) ? 1 : 0
              , _ = (null == e || null === (c = e.reqHeaders) || void 0 === c ? void 0 : c["tt-ticket-guard-client-data"]) ? 1 : 0
              , b = (null == e ? void 0 : e.loginStatus) || "-1"
              , k = (null == e ? void 0 : e.cookieStatus) || "0"
              , S = (null == e ? void 0 : e.signVersion) || "0"
              , w = (null == e ? void 0 : e.webDomain) || "3"
              , C = (null == t ? void 0 : t.dataFrom) || "-99"
              , I = (null == t ? void 0 : t.crossStatus) || "-99"
              , O = (null == e ? void 0 : e.cookieCrypt) || "0"
              , D = (null == t ? void 0 : t.match_md5_local) || "-99"
              , x = (null == t ? void 0 : t.match_md5_iframe) || "-99"
              , T = t.is_pubkey_ts_sign || "1"
              , P = (null == t ? void 0 : t.isConnection) || "-99"
              , L = (null == t ? void 0 : t.retryCount) || "-99"
              , j = (null == t ? void 0 : t.lost) || "0"
              , B = (null == t ? void 0 : t.initMatch) || "0"
              , R = (null == t ? void 0 : t.is_new_cert) || "0"
              , $ = (null === (u = window) || void 0 === u || null === (l = u.location) || void 0 === l ? void 0 : l.hostname) || "";
            E("web_tt_ticket_guard_consumer_response", {
                logid: p,
                path: h,
                ticket_guard_version: f,
                ticket_guard_iteration_version: m,
                request_with_csr: y,
                request_with_cert: v,
                request_with_client_data: _,
                error_code: g,
                login_status: b,
                sign_version: S,
                cookie_status: k,
                data_from: C,
                cookie_crypt: O,
                iframe_status: I,
                match_md5_local: D,
                match_md5_iframe: x,
                is_pubkey_ts_sign: T,
                iframe_connection: P,
                iframe_retrycount: L,
                lost: j,
                init_match: B,
                is_new_cert: R,
                hostname: $,
                cookie_domain: w
            }),
            g > 0 && E("web_tt_ticket_guard_consumer_response_error", {
                logid: p,
                path: h,
                ticket_guard_version: f,
                ticket_guard_iteration_version: m,
                request_with_csr: y,
                request_with_cert: v,
                request_with_client_data: _,
                error_code: g,
                login_status: b,
                sign_version: S,
                cookie_status: k,
                data_from: C,
                cookie_crypt: O,
                iframe_status: I,
                match_md5_local: D,
                match_md5_iframe: x,
                is_pubkey_ts_sign: T,
                iframe_connection: P,
                iframe_retrycount: L,
                lost: j,
                init_match: B,
                is_new_cert: R,
                hostname: $,
                cookie_domain: w
            })
        }, T = function(e) {
            var t, r;
            t = e,
            null === (r = D.getTea()) || void 0 === r || r.sendBecon("web_tt_ticket_guard_iframe_status_before_unload", g({}, O, t || {}))
        }, P = function(e) {
            E("web_tt_ticket_guard_iframe_status", e)
        }, L = Object.defineProperty, j = (e, t, r) => (( (e, t, r) => {
            t in e ? L(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }
        )(e, "symbol" != typeof t ? t + "" : t, r),
        r), B = class {
            constructor() {
                j(this, "eventMap"),
                this.eventMap = {}
            }
            on(e, t) {
                const {eventMap: r} = this;
                r[e] ? r[e].push(t) : r[e] = [t]
            }
            off(e, t) {
                const {eventMap: r} = this;
                if (r[e]) {
                    const i = r[e];
                    for (let e = i.length; e >= 0; e--)
                        t && i[e] !== t || i.splice(e, 1)
                }
            }
            emit(e, t) {
                const {eventMap: r} = this
                  , i = r[e];
                i && [...i].forEach((e => {
                    e(t)
                }
                ))
            }
            has(e, t) {
                const {eventMap: r} = this;
                return !!r[e] && ("function" != typeof t || -1 !== r[e].indexOf(t))
            }
        }
        , R = B, $ = "undefined" != typeof globalThis ? globalThis : void 0 !== r.g ? r.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {};
        $.$$CallThunkInstance || ($.$$CallThunkInstance = ((m = new class {
            constructor() {
                j(this, "callMap"),
                this.callMap = {}
            }
            define(e, t) {
                this.callMap[e] = t()
            }
            thunk(e) {
                const {callMap: t} = this
                  , r = t[e];
                return "function" == typeof r ? r : () => {
                    "undefined" != typeof console && "function" == typeof console.warn && console.warn(`The \`${String(e)}\` is a noop thunk.`)
                }
            }
        }
        ).channel = new R,
        m)),
        $.$$CallThunkInstance,
        $.$$CallThunkInstance;
        var A = class extends Error {
            constructor(e, t, r) {
                super(t),
                this.message = t || "",
                this.name = e,
                this.origin = r || location.origin
            }
        }
        ;
        function N() {
            var e, t;
            try {
                return Boolean(navigator.userAgent.match(/chrome\/[\d.]+/gi)) && Boolean(null == navigator ? void 0 : navigator.userAgentData) || Boolean(null == (e = navigator.storage) ? void 0 : e.getDirectory) || Boolean(navigator.canShare) || -1 !== ((null == (t = window.Promise) ? void 0 : t.allSettled) || "").toString().indexOf("[native code]") && Boolean(Number((navigator.userAgent.match(/Chrome\/(\d+\.+\d+)/) || [])[1]) >= 76 && window.visualViewport)
            } catch (e) {
                return !1
            }
        }
        var M = Object.defineProperty
          , q = Object.getOwnPropertySymbols
          , U = Object.prototype.hasOwnProperty
          , H = Object.prototype.propertyIsEnumerable
          , W = (e, t, r) => t in e ? M(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r
          , J = (e, t) => {
            for (var r in t || (t = {}))
                U.call(t, r) && W(e, r, t[r]);
            if (q)
                for (var r of q(t))
                    H.call(t, r) && W(e, r, t[r]);
            return e
        }
          , V = {}
          , F = {}
          , z = () => {
            try {
                return indexedDB || window.indexedDB || webkitIndexedDB || mozIndexedDB || OIndexedDB
            } catch (e) {
                return
            }
        }
          , G = "DBStorageNotSupport"
          , X = Promise.resolve()
          , Y = 0
          , Q = e => new Promise(( (t, r) => {
            e.onsuccess = () => {
                t(e.result)
            }
            ,
            e.onerror = () => {
                r(e.error)
            }
        }
        ))
          , Z = (e, t) => new Promise(( (r, i) => {
            e.oncomplete = () => {
                r()
            }
            ,
            e.onabort = e.onerror = () => {
                var e;
                const r = t ? t.error || (null == (e = t.transaction) ? void 0 : e.error) : {
                    name: "TransactionAbortOrError",
                    message: ""
                };
                i(new A((null == r ? void 0 : r.name) || "TransactionAbortOrError",(null == r ? void 0 : r.message) || ""))
            }
        }
        ))
          , ee = class e {
            constructor(t) {
                this.config = {
                    dbName: "secure-store",
                    storeName: "cryptvalues",
                    closeDBTime: 2e4
                },
                this.getItem = e => this.getItemByKeys([e]).then((e => e[0])),
                this.getItemByKeys = e => {
                    const {storeName: t} = this.config;
                    return this.transaction(( () => this.openDB().then((r => {
                        const i = r.transaction(t, "readonly").objectStore(t);
                        return Promise.all(e.map((e => Q(i.get(e)).then((e => {
                            const {data: t} = JSON.parse(e || "{}");
                            return t
                        }
                        )))))
                    }
                    ))))
                }
                ,
                this.setItem = (e, t) => this.setItemByKeys([[e, t]]).then((e => e[0])),
                this.setItemByKeys = e => {
                    const {storeName: t} = this.config;
                    return this.transaction(( () => this.openDB().then((r => {
                        const i = r.transaction(t, "readwrite")
                          , n = i.objectStore(t);
                        return Promise.all(e.map(( ([e,t]) => {
                            const r = JSON.stringify({
                                data: t
                            });
                            return Q(n.get(e)).then((i => (i !== r && n.put(r, e),
                            t)))
                        }
                        ))).then((e => Z(i).then(( () => e))))
                    }
                    ))))
                }
                ,
                this.removeItem = e => {
                    const {storeName: t} = this.config;
                    return this.openDB().then((r => {
                        const i = r.transaction(t, "readwrite")
                          , n = i.objectStore(t).delete(e);
                        return Z(i, n)
                    }
                    ))
                }
                ,
                this.getKeys = () => {
                    const {storeName: e} = this.config;
                    return this.transaction(( () => this.openDB().then((t => {
                        const r = t.transaction(e).objectStore(e).openKeyCursor();
                        return new Promise(( (e, t) => {
                            const i = [];
                            r.onsuccess = () => {
                                r.result ? (i.push(r.result.key),
                                r.result.continue()) : e(i)
                            }
                            ,
                            r.onerror = () => {
                                t(r.error)
                            }
                        }
                        ))
                    }
                    ))))
                }
                ,
                this.openDB = () => {
                    const {storeName: t, dbName: r, closeDBTime: i} = this.config;
                    return clearTimeout(F[r]),
                    F[r] = setTimeout(( () => {
                        e.closeDB(r).catch(( () => {}
                        ))
                    }
                    ), i),
                    e.openDB(this.config).then((i => {
                        if (!i.objectStoreNames.contains(t)) {
                            const t = i.version + 1;
                            return e.closeDB(r).then(( () => e.openDB(this.config, t)))
                        }
                        return i
                    }
                    ))
                }
                ,
                this.transaction = e => {
                    const {dbName: t, onQuotaErrorCallback: r} = this.config;
                    return ( (e, t, r) => X = X.then(( () => {
                        const i = () => t().then((e => (Y = 0,
                        e))).catch((t => {
                            if (Y < 3)
                                return Y++,
                                V[e] = void 0,
                                ( (e, t) => {
                                    const r = ((null == t ? void 0 : t.name) || "").toLowerCase() === "QuotaExceededError".toLowerCase();
                                    return Promise.resolve({
                                        isQuotaError: r,
                                        clean(t) {
                                            const r = z()
                                              , i = null == r ? void 0 : r.deleteDatabase(t || e);
                                            return new Promise((e => {
                                                i ? (i.onsuccess = () => {
                                                    e()
                                                }
                                                ,
                                                i.onerror = () => {
                                                    e()
                                                }
                                                ) : e()
                                            }
                                            ))
                                        }
                                    })
                                }
                                )(e, t).then((e => r(e.isQuotaError, e.clean))),
                                i();
                            throw Y = 0,
                            t
                        }
                        ));
                        return i()
                    }
                    )))(t, e, ( (e, t) => {
                        e && "function" == typeof r && r.call(this, t)
                    }
                    ))
                }
                ,
                this.config = J(J({}, this.config), t || {})
            }
        }
        ;
        ee.isSupport = () => Boolean(z()),
        ee.openDB = (e, t) => {
            const {dbName: r, storeName: i, version: n} = e;
            if (t && (V[r] = void 0),
            !ee.isSupport())
                return Promise.reject(new A(G));
            const o = z()
              , s = (e, t) => new Promise(( (r, n) => {
                const s = o.open(e, t);
                s.onsuccess = () => {
                    r(s.result)
                }
                ,
                s.onerror = e => {
                    var t, r;
                    e.preventDefault(),
                    n(new A((null == (t = s.error) ? void 0 : t.name) || "IndexedDBOpenError",null == (r = s.error) ? void 0 : r.message))
                }
                ,
                s.onupgradeneeded = e => {
                    try {
                        (s.result || e.target.result).createObjectStore(i)
                    } catch (e) {
                        n(e)
                    }
                }
            }
            ));
            return V[r] || (V[r] = new Promise(( (e, i) => {
                try {
                    s(r, t || n || 1).catch((e => {
                        if (re(e))
                            return ie(r).then((e => e ? s(r, e) : s(r))).catch(( () => s(r)));
                        throw e
                    }
                    )).then(e).catch(i)
                } catch (e) {
                    i(new A(G,e.message))
                }
            }
            )))
        }
        ,
        ee.deleteDB = e => {
            const t = z();
            return t ? ee.closeDB(e).then(( () => {
                if (null == t ? void 0 : t.deleteDatabase) {
                    const r = null == t ? void 0 : t.deleteDatabase(e);
                    if (r)
                        return clearTimeout(F[e]),
                        new Promise(( (e, t) => {
                            r.onsuccess = () => {
                                e(r.result)
                            }
                            ,
                            r.onerror = () => {
                                t(null == r ? void 0 : r.error)
                            }
                        }
                        ))
                }
                return Promise.reject(new A("IDBDeleteDataBaseError"))
            }
            )) : Promise.reject(new A("IDBObjectError"))
        }
        ,
        ee.closeDB = e => new Promise(( (t, r) => {
            V[e] ? V[e].then((i => {
                ( () => {
                    V[e] = void 0;
                    try {
                        i.close(),
                        t(1)
                    } catch (e) {
                        r(e)
                    }
                }
                )()
            }
            )).catch(r) : t(-1)
        }
        ));
        var te = ee
          , re = e => "versionerror" === ((null == e ? void 0 : e.name) || "").toString().toLowerCase() && (!(-1 === ((null == e ? void 0 : e.message) || "").indexOf("version") && !((null == e ? void 0 : e.message) || "").match(/\s*less\s*than/i) && -1 === ((null == e ? void 0 : e.message) || "").match(/\s*higher\s*version\s*than\s*/gi)) || void 0)
          , ie = e => new Promise(( (t, r) => {
            const i = z();
            if (null == i ? void 0 : i.databases)
                return i.databases().then((r => {
                    const i = r.filter((t => t.name === e))[0];
                    t(null == i ? void 0 : i.version)
                }
                )).catch(r);
            r(new Error("idb.database is " + typeof (null == i ? void 0 : i.databases)))
        }
        ))
          , ne = class e {
            constructor() {
                this.getItem = e => this.getItemByKeys([e]).then((e => e[0])),
                this.setItem = (e, t) => this.setItemByKeys([[e, t]]).then((e => e[0])),
                this.getItemByKeys = e => this.openLocalStorage().then((t => e.map((e => {
                    const {data: r} = JSON.parse(t.getItem(e) || "{}");
                    return r
                }
                )))),
                this.setItemByKeys = e => this.openLocalStorage().then((t => e.map(( ([e,r]) => {
                    const i = JSON.stringify({
                        data: r
                    });
                    return t.setItem(e, i),
                    r
                }
                )))),
                this.removeItem = e => this.openLocalStorage().then((t => {
                    t.removeItem(e)
                }
                )),
                this.getKeys = () => this.openLocalStorage().then((e => {
                    const t = [];
                    for (let r = 0; r < e.length; r++)
                        e.key(r) && t.push(e.key(r));
                    return t
                }
                )),
                this.openLocalStorage = () => e.isSupport() ? Promise.resolve(oe()) : Promise.reject(new A("LocalStorageNotSupport"))
            }
        }
        ;
        ne.isSupport = () => {
            const e = oe();
            if (!e)
                return !1;
            try {
                const t = "__x_storage_test__";
                e.setItem(t, t);
                const r = e.getItem(t);
                return e.removeItem(t),
                t === r
            } catch (e) {
                return !1
            }
        }
        ;
        var oe = () => window.localStorage
          , se = ne
          , ae = {}
          , ce = class {
            constructor() {
                this.getItem = e => this.getItemByKeys([e]).then((e => e[0])),
                this.setItem = (e, t) => this.setItemByKeys([[e, t]]).then((e => e[0])),
                this.getItemByKeys = e => this.openMStorage().then((t => e.map((e => {
                    const {data: r} = JSON.parse(t.getItem(e) || "{}");
                    return r
                }
                )))),
                this.setItemByKeys = e => this.openMStorage().then((t => e.map(( ([e,r]) => {
                    const i = JSON.stringify({
                        data: r
                    });
                    return t.setItem(e, i),
                    r
                }
                )))),
                this.removeItem = e => this.openMStorage().then((t => {
                    t.removeItem(e)
                }
                )),
                this.getKeys = () => this.openMStorage().then(( () => Object.keys(ae))),
                this.openMStorage = () => Promise.resolve({
                    setItem(e, t) {
                        ae[e] = `${t}`
                    },
                    getItem: e => ae[e] || null,
                    removeItem(e) {
                        delete ae[e]
                    }
                })
            }
        }
        ;
        ce.isSupport = () => !0;
        var le = ce
          , ue = Object.defineProperty
          , he = Object.defineProperties
          , de = Object.getOwnPropertyDescriptors
          , ge = Object.getOwnPropertySymbols
          , pe = Object.prototype.hasOwnProperty
          , fe = Object.prototype.propertyIsEnumerable
          , me = (e, t, r) => t in e ? ue(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r
          , ye = (e, t) => {
            for (var r in t || (t = {}))
                pe.call(t, r) && me(e, r, t[r]);
            if (ge)
                for (var r of ge(t))
                    fe.call(t, r) && me(e, r, t[r]);
            return e
        }
          , ve = (e, t) => he(e, de(t))
          , _e = ["security-sdk/s_sdk_crypt_sdk", "security-sdk/s_sdk_cert_key", "security-sdk/s_sdk_sign_data_key/web_protect"]
          , be = "0.1.3"
          , ke = N()
          , Se = "https://www.tiktok.com"
          , we = `${Se}/obj/uc-assets/zt/`
          , Ce = (e, t, r) => `${e}@byted/tiktok-zti-storage-web/${t || be}/dist/${r || (ke ? "latest" : "page")}/index.html`
          , Ke = window
          , Ie = Ke.addEventListener
          , Oe = Ke.removeEventListener
          , De = Ke.location
          , Ee = document
          , xe = () => performance.now && Number(performance.now().toFixed(0)) || Date.now()
          , Te = e => {
            const t = e.split("//") || [];
            return `${t[0]}//${t[1].split("/")[0]}`
        }
          , Pe = (e, t) => -1 !== e.indexOf("html?") ? `${e}&${t}` : `${e}?${t}`
          , Le = (e, t) => {
            let r = Promise.reject(new A("WebStorageRunSerialQueueError"));
            for (let i = 0; i < e.length; i++)
                r = r.then((r => "function" == typeof t && t(r) || void 0 === r ? e[i]() : r)).catch(( () => e[i]()));
            return r
        }
          , je = e => {
            let t = Promise.reject(new A("WebStorageRunSerialQueueIfOneResolveError"));
            for (let r = 0; r < e.length; r++)
                e[r] && (t = t.then((t => (e[r]().catch((e => {}
                )),
                t))).catch((t => e[r]())));
            return t
        }
          , Be = `J_uc_iframe_box-${Date.now()}`
          , Re = !1
          , $e = e => {
            try {
                De.origin === Se && window.parent.postMessage(`log:${e}`, "*")
            } catch (e) {}
        }
          , Ae = null
          , Ne = -1
          , Me = 0
          , qe = {}
          , Ue = (e, t=!1, r=8e3) => {
            const i = e.postIframeMessage;
            return (n, o, s) => {
                let a;
                const c = Me++
                  , l = (e => `${e}`)(c);
                let u = !1;
                if ("string" != typeof n || "string" != typeof o)
                    return Promise.reject(new A("CallBridgeParameterError",`callObj:${n}, callName:${o}`));
                const h = t => (e.emit("debug", {
                    name: `PostMessageId=${l}`,
                    content: `${n}:${o}`
                }),
                qe[l] = {},
                qe[l].st = xe(),
                Promise.race([e.window.then(( () => new Promise(( (t, r) => {
                    const c = i => {
                        try {
                            ( () => {
                                const n = i.data;
                                n.id === l && qe[l] && !qe[l].et && (qe[l].et = xe(),
                                e.emit("debug", {
                                    name: `BackPostMessageId=${l}`
                                }),
                                clearTimeout(a),
                                e.off("message", c),
                                "reject" === n.promiseStatus ? r(new A(`${n.message || "UNKNOW_CallBridge_Error"}`)) : t(n.message),
                                delete qe[l])
                            }
                            )()
                        } catch (e) {
                            r(e)
                        }
                    }
                    ;
                    e.on("message", c),
                    ( (e, t) => i({
                        id: e,
                        message: t
                    }))(l, {
                        callObj: n,
                        callName: o,
                        callArgs: s
                    }).catch(r)
                }
                )))), new Promise(( (r, i) => {
                    a = setTimeout(( () => {
                        u = !0,
                        qe[l].timeout = xe(),
                        i(new A(`CallBridgeInvokeTimeout:${n}:${o}`,`${JSON.stringify({
                            iframe: e.getIframeState(),
                            id: l
                        })}`))
                    }
                    ), t)
                }
                ))]));
                return e.preCheck().then(( () => h(r))).catch((r => {
                    if (!0 === e.isConnection && t && -1 !== ((null == r ? void 0 : r.name) || "").indexOf("CallBridgeInvokeTimeout")) {
                        const t = c < Ne
                          , r = Me;
                        return e.emit("debug", {
                            name: "reCallBridgeWhenTimeout",
                            content: JSON.stringify({
                                isTimeoutId: t,
                                $MessageId: r,
                                $id: c,
                                callName: o,
                                reCallBridgeWhenTimeout: Boolean(Ae)
                            })
                        }),
                        Ae = Ae && t ? Ae : new Promise((t => {
                            Ne = r,
                            (e => {
                                !Re && e.config.debug && (Re = !0,
                                e.emit("debug", {
                                    name: "OpenMessageLog"
                                }),
                                window.addEventListener("message", (t => {
                                    const {data: r} = t;
                                    Re && "string" == typeof r && 0 === r.indexOf("log:") && e.emit("debug", {
                                        name: `Message:Log=${r.substring(4)}`
                                    })
                                }
                                )))
                            }
                            )(e),
                            e.reStartConection("callBridge"),
                            t()
                        }
                        )),
                        Ae.then(( () => h(8e3)))
                    }
                    throw r
                }
                ))
            }
        }
          , {origin: He} = De
          , We = class extends B {
            constructor(e) {
                super(),
                this.dbSetFlag = [],
                this.getItem = e => this.getItemByKeys([e]).then((e => e[0])),
                this.setItem = (e, t) => this.setItemByKeys([[e, t]]).then((e => e[0])),
                this.getItemByKeys = e => {
                    let t = -1;
                    const r = [];
                    return this.db.then((t => Le(t.map(( (t, i) => () => t.getItemByKeys(e).then((t => (r[i] = e.map(( (e, r) => ({
                        from: void 0 !== t[r] ? i : -1,
                        value: t[r],
                        origin: He
                    }))),
                    t))))), (e => {
                        for (let t = 0; t < (null == e ? void 0 : e.length); t++)
                            if (void 0 === e[t])
                                return !0;
                        return !1
                    }
                    )))).catch((r => this.fallbackDB.getItemByKeys(e).then((e => (t = 2,
                    e))))).then((e => r[0] ? r[0].map(( (e, t) => void 0 !== e.value ? e : r[1] && r[1][t] ? void 0 === r[1][t].value ? e : r[1][t] : e)) : r[1] ? r[1] : e.map((e => ({
                        value: e,
                        from: t,
                        origin: He
                    })))))
                }
                ,
                this.setItemByKeys = e => {
                    let t = -1;
                    return this.db.then((r => je(r.map(( (r, i) => () => r.setItemByKeys(e).then((e => (t = i,
                    e)))))).catch((r => (t = 2,
                    this.fallbackDB.setItemByKeys(e)))).then((e => e.map((e => ({
                        value: e,
                        from: t,
                        origin: He
                    }))))))).then((e => e), (e => {
                        throw $e(`storage:setItemByKeys:error:${null == e ? void 0 : e.message}`),
                        e
                    }
                    ))
                }
                ,
                this.removeItem = e => this.db.then((t => Promise.all(t.map((t => t.removeItem(e)))).then(( () => this.fallbackDB.removeItem(e))))),
                this.config = e || {};
                const t = this;
                this.localDB = new se,
                this.db = Promise.resolve([this.localDB, new te(ve(ye({}, (null == e ? void 0 : e.dbStorage) || {}), {
                    onQuotaErrorCallback() {
                        t.emit("log", {
                            name: "QuotaError"
                        })
                    }
                }))]),
                this.fallbackDB = new le
            }
            getKeys() {
                return this.db.then((e => Le(e.map((e => () => e.getKeys())), (e => void 0 === e || 0 === e.length))))
            }
        }
          , Je = {
            get visibility() {
                return document.visibilityState
            }
        }
          , Ve = {
            current: 0,
            max: 2
        }
          , Fe = "visibilitychange"
          , ze = () => "hidden" === document.visibilityState
          , Ge = class extends B {
            constructor(e) {
                super(),
                this.autoLoadIframeConfig = {
                    max: 10,
                    current: 0,
                    iframeLoadPromise: null
                },
                this.reset = () => {
                    const {autoLoadIframeConfig: e} = this;
                    e.current >= e.max && (e.max += 10),
                    e.iframeLoadPromise = null,
                    Ve.current >= Ve.max && (Ve.max += 3)
                }
                ,
                this.loadWindow = () => {
                    const {url: e, ackTimeout: t} = this.config
                      , {autoLoadIframeConfig: r} = this;
                    return new Promise((e => {
                        const t = 0 === r.current ? 0 : 100;
                        setTimeout(e, t)
                    }
                    )).then(( () => {
                        if (!e)
                            throw new Error("URL Error");
                        const i = r.current === r.max ? Pe(e, `t=${Date.now()}`) : e;
                        return this.createIframeElement(i, t)
                    }
                    )).catch((e => {
                        if (r.current >= r.max) {
                            if (ze())
                                return new Promise((e => {
                                    const t = () => {
                                        ze() || (document.removeEventListener(Fe, t),
                                        e(1))
                                    }
                                    ;
                                    document.addEventListener(Fe, t)
                                }
                                )).then(( () => this.loadWindow().then((e => (this.emit("log", {
                                    name: "visibilityChangeLoadWindowSuccuess"
                                }),
                                e)))));
                            const r = ( () => {
                                const e = ( () => {
                                    try {
                                        return localStorage.getItem("X_STORAGE_FALLBACK_VERSION")
                                    } catch (e) {}
                                }
                                )();
                                if (e)
                                    return Ce(we, e)
                            }
                            )();
                            if (r)
                                return this.emit("debug", {
                                    name: "StartFireFallbackURL",
                                    content: r
                                }),
                                this.createIframeElement(r, t).then((e => (this.emit("debug", {
                                    name: "EndFireFallbackURL",
                                    content: r
                                }),
                                e.fallback = !0,
                                e))).catch((t => {
                                    throw this.emit("debug", {
                                        name: "fireFallbackURLError",
                                        content: `${null == t ? void 0 : t.name}:${null == t ? void 0 : t.message}`
                                    }),
                                    e
                                }
                                ));
                            throw e
                        }
                        return r.current++,
                        this.loadWindow()
                    }
                    ))
                }
                ,
                this.createPostMessageFlight = (e, t=3e3) => {
                    const r = xe();
                    let i, n = r;
                    const o = e => {
                        this.config.debug && this.emit("metrics", {
                            name: "PostMessageFlight",
                            metrics: {
                                startTime: r,
                                endTime: n,
                                loadTime: n - r
                            },
                            categories: {
                                status: e,
                                retryCount: String(Ve.current),
                                version: be
                            }
                        })
                    }
                    ;
                    return Promise.race([new Promise(( (t, r) => {
                        const o = `ACK_0_${Math.random()}`
                          , s = e => {
                            e.data === `ACK_1_${o}` && (clearTimeout(i),
                            n = xe(),
                            t(),
                            Oe("message", s))
                        }
                        ;
                        Ie("message", s);
                        try {
                            e(o)
                        } catch (e) {
                            r(new A("PostMessageWindowError",null == e ? void 0 : e.message))
                        }
                    }
                    )), new Promise(( (e, r) => {
                        i = setTimeout(( () => {
                            n = xe(),
                            r(new A("PostMessageTimeout"))
                        }
                        ), t)
                    }
                    ))]).then(( () => {
                        o("1")
                    }
                    )).catch((e => {
                        throw o("0"),
                        e
                    }
                    ))
                }
                ,
                this.config = ye({
                    ackTimeout: 2e3
                }, e || {})
            }
            setConfig(e) {
                this.config = {
                    ackTimeout: e.ackTimeout || this.config.ackTimeout,
                    url: e.url || this.config.url
                }
            }
            start() {
                const {autoLoadIframeConfig: e} = this;
                return e.iframeLoadPromise = e.iframeLoadPromise || this.loadWindow()
            }
            createIframeElement(e, t) {
                const r = t || this.config.ackTimeout
                  , {autoLoadIframeConfig: i} = this
                  , n = xe()
                  , o = Ee.createElement("iframe");
                let s, a, c, l = n, u = !1, h = -1;
                return o.style.display = "none",
                o.src = e,
                new Promise((e => {
                    const t = Ee.body
                      , r = {
                        appendChild(e) {
                            ( () => {
                                const e = document.getElementById(Be);
                                if (e)
                                    return e;
                                const t = document.createElement("div");
                                return t.style.display = "none",
                                t.id = Be,
                                Ee.body.appendChild(t),
                                t
                            }
                            )().appendChild(e)
                        }
                    };
                    t ? e(r) : "loading" === Ee.readyState ? Ee.addEventListener("DOMContentLoaded", ( () => {
                        e(r)
                    }
                    )) : e(r)
                }
                )).then((t => {
                    const d = Promise.race([new Promise(( (e, t) => {
                        o.onload = () => {
                            l = xe(),
                            u || (a = setTimeout(( () => {
                                u || t(new A("CreateIframeError",JSON.stringify(ve(ye({
                                    startTime: n,
                                    endTime: l,
                                    loadTime: l - n
                                }, Je), {
                                    current: i.current,
                                    max: i.max
                                }))))
                            }
                            ), r || 2e3))
                        }
                    }
                    )), new Promise(( (t, r) => {
                        const i = n => {
                            try {
                                -1 === h && "ACK" === n.data && Te(e) === n.origin && (u = !0,
                                s = n.source,
                                clearTimeout(a),
                                clearTimeout(c),
                                t(),
                                Oe("message", i))
                            } catch (e) {
                                r(e)
                            }
                        }
                        ;
                        Ie("message", i)
                    }
                    )), new Promise(( (e, t) => {
                        c = setTimeout(( () => {
                            t(new A("CreateIframeMainTimeout"))
                        }
                        ), 12e4)
                    }
                    ))]);
                    return t.appendChild(o),
                    d
                }
                )).then(( () => this.createPostMessageFlight((t => {
                    const r = Te(e);
                    (o.contentWindow || s).postMessage(t, r)
                }
                )).catch((e => {
                    if ("PostMessageWindowError" !== e.name)
                        throw e;
                    if (Ve.current < Ve.max)
                        throw Ve.current++,
                        e
                }
                )))).then(( () => {
                    if (o.parentNode)
                        return h = 1,
                        {
                            startTime: n,
                            endTime: xe(),
                            postMessage(e, t) {
                                (o.contentWindow || s).postMessage(e, t || "*")
                            },
                            destory: () => {
                                var e;
                                try {
                                    null == (e = o.parentNode) || e.removeChild(o)
                                } catch (e) {}
                            }
                            ,
                            isValid() {
                                var e;
                                return Boolean((null == o ? void 0 : o.parentNode) && (null == (e = null == o ? void 0 : o.parentNode) ? void 0 : e.parentNode))
                            }
                        };
                    throw new Error("CreateIframeElementError")
                }
                )).catch((e => {
                    var t;
                    h = 0;
                    try {
                        null == (t = o.parentNode) || t.removeChild(o)
                    } catch (e) {}
                    try {
                        "CreateIframeMainTimeout" === e.name && this.emit("debug", {
                            name: "CreateIframeMainTimeout"
                        })
                    } catch (e) {}
                    throw e
                }
                ))
            }
        }
          , Xe = e => `p-${e}`
          , Ye = `.${location.origin.split(".").slice(-2).join(".")}`
          , Qe = class extends B {
            constructor(e) {
                super(),
                this.config = {
                    protocol: "Common"
                },
                this.loadTime = 0,
                this.startTime = 0,
                this.endTime = 0,
                this.callParentBridgetIndex = 0,
                this.listen = () => {
                    window.parent !== window && window.parent.postMessage("ACK", "*")
                }
                ,
                this.getIframeState = () => ({
                    isConnection: "boolean" == typeof this.isConnection ? Number(Boolean(this.isConnection)) : -1,
                    retryCount: this.iframeConnection.autoLoadIframeConfig.current,
                    startTime: this.startTime,
                    endTime: this.endTime,
                    loadTime: this.loadTime,
                    origin: location.origin
                }),
                this.postIframeMessage = e => {
                    const {protocol: t} = this.config;
                    if (this.window) {
                        const {url: r} = this.config;
                        return this.window.catch((e => this.reConnection())).then(( ({target: i}) => {
                            i.postMessage({
                                protocol: t,
                                data: e
                            }, Te(r))
                        }
                        ))
                    }
                    return Promise.reject(new A("postMessageError"))
                }
                ,
                this.postWindowMessage = (e, t, r, i="*") => {
                    const {protocol: n} = this.config;
                    return new Promise((o => {
                        e.postMessage({
                            type: t,
                            protocol: n,
                            data: r
                        }, i),
                        o()
                    }
                    ))
                }
                ,
                this.postParentMessage = (e, t, r="*") => {
                    const i = Ke.parent;
                    return i !== Ke ? this.postWindowMessage(i, e, t, r) : Promise.resolve()
                }
                ,
                this.dispatchParentEvent = (e, t) => this.postParentMessage("event", {
                    id: Xe(this.callParentBridgetIndex++),
                    message: {
                        eventName: e,
                        eventData: t
                    }
                }),
                this.callParentBridge = (e, t, r) => {
                    const i = Xe(this.callParentBridgetIndex++);
                    return Promise.race([new Promise(( (n, o) => {
                        const s = e => {
                            const t = e.data;
                            t.id === i && (this.off("message", s),
                            "reject" === t.promiseStatus ? o(new A(`${t.message || "UNKNOW_CallParentBridge_Error"}`)) : n(t.message))
                        }
                        ;
                        this.on("message", s),
                        this.postParentMessage("function", {
                            id: i,
                            message: {
                                callObj: e,
                                callName: t,
                                callArgs: r
                            }
                        }).catch(o)
                    }
                    )), new Promise(( (r, i) => {
                        setTimeout(( () => {
                            i(new A("CallParentBridgeInvokeTimeout",`CallBridge invoke timeout: callObj=${e};callName=${t};`))
                        }
                        ), 5e3)
                    }
                    ))])
                }
                ,
                this.startConnection = e => {
                    const {url: t} = this.config;
                    !this.window && t && (this.isStart = !0,
                    this.isConnection = void 0,
                    this.emit("log", {
                        name: `startConnection:${e}`
                    }),
                    this.createConnection(t))
                }
                ,
                this.reStartConection = e => {
                    this.isStart = !1,
                    this.window && this.window.then(( ({target: e}) => e.destory())).catch(( () => {}
                    )),
                    this.window = void 0,
                    this.iframeConnection.reset(),
                    this.startConnection(e)
                }
                ,
                this.start = e => new Promise((t => {
                    this.config = ye(ye({}, this.config || {}), e || {}),
                    this.isStart = !0,
                    this.emit("config"),
                    t()
                }
                )),
                this.reConnection = () => {
                    const {url: e} = this.config;
                    return this.createConnection(e)
                }
                ,
                this.preCheck = () => this.isConnection && this.isStart && this.window ? this.window.then(( ({target: e}) => {
                    e.isValid() || this.reStartConection("valid")
                }
                )) : (!this.config.disablePreCheckConnection && !1 === this.isConnection && this.iframeConnection.autoLoadIframeConfig.current >= this.iframeConnection.autoLoadIframeConfig.max && this.reStartConection("reConnection"),
                Promise.resolve()),
                this.onMessage = e => {
                    var t, r, i, n;
                    const o = (t, r) => {
                        var i;
                        try {
                            null == (i = e.source) || i.postMessage(`SOCKET_ERROR_${t}@${r}`, e.origin)
                        } catch (e) {}
                    }
                    ;
                    try {
                        const {url: s, protocol: a, allowOrigin: c=[]} = this.config
                          , l = !!s && Te(s) === e.origin
                          , u = s ? l : Boolean([Ye, ...c].filter((t => -1 !== e.origin.lastIndexOf(t)))[0]);
                        try {
                            e.origin || this.emit("debug", {
                                name: "eventLostOrigin",
                                content: JSON.stringify(e.data || {})
                            })
                        } catch (e) {}
                        if (u)
                            if ("string" == typeof e.data && 0 === e.data.indexOf("ACK_0_"))
                                try {
                                    null == (t = e.source) || t.postMessage(`ACK_1_${e.data}`, e.origin)
                                } catch (e) {}
                            else if ((null == (r = e.data) ? void 0 : r.protocol) === a)
                                try {
                                    this.emit("message", {
                                        type: null == (i = e.data) ? void 0 : i.type,
                                        data: null == (n = e.data) ? void 0 : n.data,
                                        origin: e.origin,
                                        sourceWindow: e.source
                                    })
                                } catch (t) {
                                    o(500, JSON.stringify(e.data)),
                                    this.emit("debug", {
                                        name: `postMessage:protocol:error:${null == t ? void 0 : t.message}`
                                    })
                                }
                    } catch (e) {
                        o(501, `${e.message}`),
                        this.emit("debug", {
                            name: "SomePostMessageEventError",
                            content: null == e ? void 0 : e.message
                        })
                    }
                }
                ,
                this.initMessageEvent = () => {
                    this.removeMessageEvent(),
                    window.addEventListener("message", this.onMessage),
                    this.emit("debug", {
                        name: "initMessageEvent"
                    })
                }
                ,
                this.removeMessageEvent = () => {
                    window.addEventListener("message", this.onMessage)
                }
                ,
                this.config = ye(ye({}, this.config), e || {}),
                this.iframeConnection = new Ge,
                this.startConnection("init"),
                this.on("config", ( () => {
                    this.startConnection("config")
                }
                )),
                this.initMessageEvent(),
                this.on("connection", (e => {
                    this.loadTime = e.endTime - e.startTime,
                    this.startTime = e.startTime,
                    this.endTime = e.endTime,
                    this.isConnection = !0,
                    this.config.enableFallback && !e.target.fallback && (e => {
                        try {
                            localStorage.setItem("X_STORAGE_FALLBACK_VERSION", e)
                        } catch (e) {}
                    }
                    )(be),
                    this.emit("debug", {
                        name: "ConnectionSuccess"
                    }),
                    this.initMessageEvent()
                }
                )),
                this.iframeConnection.on("debug", (e => {
                    this.emit("debug", e)
                }
                )),
                this.iframeConnection.on("log", (e => {
                    this.emit("log", e)
                }
                )),
                this.iframeConnection.on("metrics", (e => {
                    this.emit("metrics", e)
                }
                )),
                this.on("connectionFail", (e => {
                    const {downgradeCSPURL: t} = this.config;
                    if (this.isConnection = !1,
                    this.emit("error", new A(`Connection:${e.name}`,e.message)),
                    this.emit("debug", {
                        name: "connectionFail"
                    }),
                    t && -1 !== (null == e ? void 0 : e.message.indexOf("Content Security Policy"))) {
                        const e = "string" == typeof t ? t : Ce(we, undefined, "page");
                        e && this.config.url !== e && (this.emit("debug", {
                            name: "fireDefaultPageURL",
                            content: e
                        }),
                        this.config.url = e,
                        this.reStartConection("csp"))
                    }
                }
                )),
                Ie("message", (e => {
                    "string" == typeof e.data && (-1 !== e.data.indexOf("SOCKET_ERROR_") ? this.emit("error", new A("SCOKET_ERROR",e.data)) : -1 !== e.data.indexOf("Version:") && this.emit("debug", {
                        name: "SocketVersion",
                        content: e.data.split(":")[1]
                    }))
                }
                ))
            }
            createConnection(e) {
                const {ackTimeout: t} = this.config
                  , r = xe()
                  , {max: i} = this.iframeConnection.autoLoadIframeConfig;
                this.iframeConnection.setConfig({
                    url: i > 10 ? Pe(e, `t=${i}`) : e,
                    ackTimeout: t
                });
                const n = this.iframeConnection.start().then((e => {
                    const t = xe()
                      , i = {
                        target: e,
                        startTime: r,
                        endTime: t
                    };
                    return this.emit("connection", ye({}, i)),
                    i
                }
                )).catch((e => {
                    throw this.emit("connectionFail", new A(`${e.name || "ConnectionError"}`,e.message)),
                    e
                }
                ));
                return this.window = n
            }
        }
          , Ze = e => t => e.then((e => Promise.resolve(t()).then(( () => e))), (e => Promise.resolve(t()).then(( () => {
            throw e
        }
        ))))
          , et = class extends B {
            constructor(e) {
                super(),
                this.listen = () => {
                    this.client.listen()
                }
                ,
                this.setConfig = e => new Promise((t => {
                    this.config = ye(ye({}, this.config || {}), e),
                    this.emit("config", this.config),
                    t()
                }
                )),
                this.startStorageChecker = () => new Promise((e => {
                    this.client.isConnection ? e() : this.client.on("connection", ( () => {
                        e()
                    }
                    ))
                }
                )).then(( () => Ue(this.client, !0, 3e3)("config", "startChecker", []))),
                this.startChecker = () => new Promise(( (e, t) => {
                    const {startStorageCheckerCallBack: r} = this.config || {};
                    null == r || r(),
                    e()
                }
                )),
                this.setOriginStorageConfig = e => new Promise((e => {
                    this.client.isConnection ? e() : this.client.on("connection", ( () => {
                        e()
                    }
                    ))
                }
                )).then(( () => {
                    const {url: t} = this.client.config;
                    if (t)
                        return Ue(this.client, !0, 3e4)("config", "setConfig", [e]);
                    throw new Error("NoOriginStorageURL")
                }
                )),
                this.setItem = (e, t, r) => this.setItemByKeys([[e, t]], r).then((e => e[0])),
                this.getItem = (e, t) => this.getItemByKeys([e], t).then((e => e[0])),
                this.getItemByKeys = (e, t) => {
                    const {async: r, logger: i=!0} = t || {};
                    let n = xe()
                      , o = 0
                      , s = 0
                      , a = -1
                      , c = {}
                      , l = () => {
                        if (i)
                            try {
                                o = o || xe(),
                                s = s || o,
                                this.emit("metrics", {
                                    name: "getOriginItemByKeys",
                                    metrics: {
                                        duration: o - n,
                                        callTime: o - s,
                                        startCallTime: s,
                                        startTime: n,
                                        endTime: o
                                    },
                                    categories: ye({
                                        status: String(a)
                                    }, c)
                                })
                            } catch (e) {}
                    }
                    ;
                    const u = t => {
                        a = a > -1 ? a : 1;
                        try {
                            t.forEach(( (t, r) => {
                                ["from", "origin", "status", "code"].forEach((i => {
                                    const n = e[r]
                                      , o = n.split("/")
                                      , s = String("status" === i ? t.value ? 1 : 0 : t[i]);
                                    "undefined" !== s && (c[`${o[1] || n}_${i}`] = s)
                                }
                                ))
                            }
                            ))
                        } catch (e) {}
                    }
                      , h = () => {
                        const {url: t} = this.client.config;
                        s = xe();
                        const i = () => Ue(this.client)("storage", "getItemByKeys", [e]).then((t => (o = xe(),
                        a = 2,
                        Promise.all(t.map(( (t, r) => (void 0 === t.value && (a = 3),
                        void 0 === t.value ? this.storage.getItem(e[r]) : t)))))));
                        return t ? void 0 !== r ? Promise.race([i(), new Promise((e => {
                            setTimeout(e, "number" == typeof r ? r : 1e3)
                        }
                        )).then(( () => this.storage.getItemByKeys(e)))]) : je([i, () => this.storage.getItemByKeys(e).then((e => e.map((e => (e.code = 1001,
                        e)))))]) : this.storage.getItemByKeys(e)
                    }
                      , d = () => Ze(h().catch(( () => this.storage.getItemByKeys(e))).then((e => (u(e),
                    e))).catch((e => {
                        throw a = 0,
                        e
                    }
                    )))(l);
                    return this.getLocalItemWithSignByKeys(e).then(( ({values: e, st: t, et: r}) => (n = t,
                    o = r,
                    a = 12,
                    u(e),
                    l(),
                    e))).catch(( () => d()))
                }
                ,
                this.setItemByKeys = (e, t) => {
                    const {async: r, logger: i=!0} = t || {}
                      , n = xe();
                    let o = 0
                      , s = -1
                      , a = 0
                      , c = 0
                      , l = {}
                      , u = {
                        end: !1,
                        sync: !1,
                        resolve: () => {}
                    };
                    const h = t => {
                        s = s > -1 ? s : 1;
                        try {
                            t.forEach(( (t, r) => {
                                ["from", "origin", "status"].forEach((i => {
                                    const n = e[r][0]
                                      , o = n.split("/");
                                    l[`${o[1] || n}_${i}`] = String("status" === i ? t.value ? 1 : 0 : t[i])
                                }
                                ))
                            }
                            ))
                        } catch (e) {}
                    }
                    ;
                    new Promise((e => {
                        u.resolve = e
                    }
                    )).then(( () => {
                        if (i)
                            try {
                                o = o || xe(),
                                this.emit("metrics", {
                                    name: "setOriginItemByKeys",
                                    metrics: {
                                        duration: o - n,
                                        callTime: o - c,
                                        startCallTime: c,
                                        startTime: n,
                                        endTime: o,
                                        retryCount: a
                                    },
                                    categories: ye({
                                        status: String(s)
                                    }, l)
                                })
                            } catch (e) {}
                    }
                    ));
                    let d = e => {
                        u[e] = !0,
                        u.end && u.sync && u.resolve()
                    }
                    ;
                    return Ze((e => {
                        const {url: t} = this.client.config;
                        c = xe();
                        const i = t => Ue(this.client, !0, t)("storage", "setItemByKeys", [e]).then((e => (s = 2,
                        h(e),
                        o = xe(),
                        e)));
                        return t ? void 0 !== r ? Promise.race([Ze(i(3e4).catch((e => {
                            const t = `${null == e ? void 0 : e.name}@${null == e ? void 0 : e.message}`;
                            return a++,
                            i().catch((r => {
                                throw this.emit("log", {
                                    name: "callBridgeSetItemByKeysRetryError",
                                    content: JSON.stringify({
                                        iframe: this.client.getIframeState(),
                                        errorMessage: t
                                    })
                                }),
                                e
                            }
                            ))
                        }
                        )))(d.bind(null, "sync")), new Promise((e => {
                            setTimeout(e, "number" == typeof r ? r : 1e3)
                        }
                        )).then(( () => this.storage.setItemByKeys(e)))]) : je([ () => Ze(i())(d.bind(null, "sync")), () => this.storage.setItemByKeys(e)]) : this.storage.setItemByKeys(e)
                    }
                    )(e).catch(( () => this.storage.setItemByKeys(e))).catch((e => {
                        throw s = 0,
                        e
                    }
                    )).then((e => (h(e),
                    e))))(d.bind(null, "end"))
                }
                ,
                this.removeItem = e => {
                    const {url: t} = this.client.config;
                    return t ? Promise.all([this.storage.removeItem(e), Ue(this.client)("storage", "removeItem", [e])]).then(( () => {}
                    )) : this.storage.removeItem(e)
                }
                ,
                this.getLocalItemWithSignByKeys = e => {
                    var t;
                    if ((null == (t = this.sign) ? void 0 : t.verify) && ( (e, t) => {
                        for (let r = 0; r < e.length; r++)
                            if (-1 === t.indexOf(e[r]))
                                return !1;
                        return !0
                    }
                    )(e, _e)) {
                        const t = xe();
                        return this.storage.localDB.getItemByKeys(_e).then((r => this.sign.verify(r).then((t => {
                            if (t)
                                return e.map((e => ({
                                    value: r[_e.indexOf(e)],
                                    origin: location.origin,
                                    from: 0,
                                    code: 304
                                })));
                            throw new Error("VerifySignFail")
                        }
                        )).then((e => {
                            const r = xe();
                            return {
                                values: e,
                                st: t,
                                et: r
                            }
                        }
                        ))))
                    }
                    return Promise.reject(new Error("NotVerifySignFunction"))
                }
                ,
                this.initBirdgeEvent = () => {
                    this.client.on("message", ( ({data: e, origin: t, type: r, sourceWindow: i}) => {
                        const {id: n} = e || {};
                        if ("event" === r) {
                            const {eventName: t, eventData: r} = e.message || {};
                            if ("error" === t)
                                this.emit("error", new A(r.name,r.message,r.origin));
                            else if ("log" === t)
                                return this.emit("log", r)
                        } else {
                            const {callObj: r, callName: o, callArgs: s=[]} = e.message || {}
                              , a = (e, r) => this.client.postWindowMessage(i, "function", {
                                id: n,
                                promiseStatus: e,
                                message: r
                            }, t);
                            if (-1 !== ["storage", "storageX", "client", "sign", "config", "logger"].indexOf(r))
                                try {
                                    $e(`${r}-${o}`),
                                    (-1 !== ["storage", "config"].indexOf(r) ? this : this[r])[o].apply(this, s).then(a.bind(null, "resolve")).catch((e => {
                                        a("reject", e.name || e.message || "UnknowMessageError").catch(( () => {}
                                        ))
                                    }
                                    ))
                                } catch (e) {
                                    a("reject", "UnknowMessageError").catch(( () => {}
                                    ))
                                }
                        }
                    }
                    ))
                }
                ,
                this.config = ye({
                    debug: !1,
                    hostname: 'www.tiktok.com'
                }, e || {}),
                this.client = new Qe(ve(ye({}, this.config.scoket || {}), {
                    protocol: this.config.protocol,
                    allowOrigin: this.config.allowOrigin,
                    debug: this.config.debug,
                    url: this.config.url
                })),
                this.storage = new We(this.config.storage),
                this.storageX = this.storage,
                this.config.verifySignMethod && (this.sign = ve(ye({}, this.sign || {}), {
                    verify: e => Promise.resolve(this.config.verifySignMethod(e))
                })),
                this.logger = {
                    metrics: e => (this.emit("metrics", e),
                    Promise.resolve())
                },
                this.initBirdgeEvent(),
                this.on("error", (e => {
                    this.config.disableReportLogger || this.client.dispatchParentEvent("error", {
                        name: e.name,
                        message: e.message,
                        origin: e.origin
                    }).catch(( () => {}
                    ))
                }
                )),
                this.on("log", (e => {
                    this.config.disableReportLogger || this.client.dispatchParentEvent("log", e).catch(( () => {}
                    ))
                }
                )),
                this.on("debug", (e => {
                    this.config.debug && this.emit("log", ve(ye({}, e), {
                        name: `Debug:${e.name}`
                    }))
                }
                )),
                this.client.on("error", (e => {
                    e.name = `Socket:${e.name}`,
                    this.emit("error", e)
                }
                )),
                this.storage.on("error", (e => {
                    this.emit("error", ( (e, t) => (t.name = `WebStorage:${t.name}`,
                    t))(0, e))
                }
                )),
                this.storage.on("log", (e => {
                    this.emit("log", e)
                }
                )),
                this.client.on("log", (e => {
                    this.emit("log", e)
                }
                )),
                this.client.on("metrics", (e => {
                    this.emit("metrics", e)
                }
                )),
                this.client.on("debug", (e => {
                    this.emit("debug", e)
                }
                )),
                this.client.start().catch((e => {
                    this.emit("error", new A("StartSocketClientError",e.message))
                }
                ))
            }
        }
          , tt = r(42224)
          , rt = Object.defineProperty
          , it = Object.getOwnPropertySymbols
          , nt = Object.prototype.hasOwnProperty
          , ot = Object.prototype.propertyIsEnumerable
          , st = (e, t, r) => t in e ? rt(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r
          , at = (e, t) => {
            for (var r in t || (t = {}))
                nt.call(t, r) && st(e, r, t[r]);
            if (it)
                for (var r of it(t))
                    ot.call(t, r) && st(e, r, t[r]);
            return e
        }
          , ct = (e, t, r) => new Promise(( (i, n) => {
            var o = e => {
                try {
                    a(r.next(e))
                } catch (e) {
                    n(e)
                }
            }
              , s = e => {
                try {
                    a(r.throw(e))
                } catch (e) {
                    n(e)
                }
            }
              , a = e => e.done ? i(e.value) : Promise.resolve(e.value).then(o, s);
            a((r = r.apply(e, t)).next())
        }
        ))
          , lt = e => tt.utf8tob64(e)
          , ut = e => {
            const t = new tt.KJUR.crypto.MessageDigest({
                alg: "md5",
                prov: "cryptojs"
            });
            return t.updateString(e),
            t.digest()
        }
          , ht = e => tt.hextob64(e)
          , dt = e => tt.b64toutf8(e)
          , gt = e => {
            const t = tt.KEYUTIL.getKey(e);
            return tt.KEYUTIL.getPEM(t)
        }
          , pt = e => {
            if (e) {
                return function(e) {
                    const t = [];
                    for (let r = 0; r < e.length; r += 3) {
                        const i = e[r] << 16 | e[r + 1] << 8 | e[r + 2];
                        for (let n = 0; n < 4; n++)
                            8 * r + 6 * n <= 8 * e.length ? t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >>> 6 * (3 - n) & 63)) : t.push("=")
                    }
                    return t.join("")
                }(function(e) {
                    const t = new Uint8Array(e.length / 2);
                    for (let r = 0; r < e.length; r += 2)
                        t[r / 2] = parseInt(e.substr(r, 2), 16);
                    return t
                }(tt.KEYUTIL.getKey(e).generatePublicKeyHex()))
            }
            return ""
        }
          , ft = (e, t) => {
            try {
                if (!e || !t || "string" != typeof e)
                    return !1;
                const r = JSON.parse(e)
                  , i = gt(t)
                  , {ec_publicKey: n} = r || {};
                return i === n
            } catch (e) {
                return !1
            }
        }
          , mt = (e, t) => {
            try {
                if (!e || !t || "string" != typeof e)
                    return !1;
                const r = JSON.parse(e)
                  , {ec_privateKey: i} = r || {};
                return pt(i) === t.split(".")[1]
            } catch (e) {
                return !1
            }
        }
          , yt = (e, t, r, i) => {
            try {
                if (!(e && t && r && i && "string" == typeof t && "string" == typeof i))
                    return !1;
                const n = JSON.parse(t || "{}")
                  , {ec_publicKey: o} = n || {};
                if (!o)
                    return !1;
                const s = {
                    publicKey: o,
                    cert: r,
                    serverData: i
                };
                if (ut(JSON.stringify(s)) === e)
                    return !0
            } catch (e) {}
            return !1
        }
          , vt = (e, t, r) => {
            try {
                if (!e || !t || !r || "string" != typeof e || "string" != typeof r)
                    return "";
                const i = JSON.parse(e)
                  , {ec_publicKey: n} = i || {};
                if (!n)
                    return "";
                const o = {
                    publicKey: n,
                    cert: t,
                    serverData: r
                };
                return ut(JSON.stringify(o))
            } catch (e) {}
            return ""
        }
          , _t = (e, t, r, i, n, o) => (...s) => ct(void 0, null, (function*() {
            try {
                const t = Date.now()
                  , r = yield e.apply(void 0, s)
                  , n = Date.now();
                let a = (null == s ? void 0 : s[0]) || "";
                return Array.isArray(a) && (a = a.join(",")),
                (null == i ? void 0 : i.startsWith("get")) ? function(e) {
                    E("tt_ticket_guard_web_get_storage", e)
                }({
                    key: a,
                    duration: n - t,
                    storage_type: o || ""
                }) : (null == i ? void 0 : i.startsWith("set")) && function(e) {
                    E("tt_ticket_guard_web_set_storage", e)
                }({
                    key: a,
                    duration: n - t,
                    storage_type: o || ""
                }),
                r
            } catch (e) {
                null == r || r(e, t, n, i, s)
            }
        }
        ))
          , bt = e => {
            let t, r;
            return (...i) => t ? Promise.resolve(t) : (r || (r = new Promise(( (n, o) => {
                e(...i).then((e => {
                    e && (t = e),
                    n(e),
                    r = void 0
                }
                )).catch((e => {
                    o(e),
                    r = void 0
                }
                ))
            }
            ))),
            r)
        }
          , kt = class {
            constructor() {
                this.list = [],
                this.count = 0,
                this.maxCount = 1,
                this.provider = e => this.addTask(( () => new Promise(( (t, r) => {
                    e().then((e => {
                        t(e)
                    }
                    )).catch((e => {
                        r(e)
                    }
                    ))
                }
                )))),
                this.wait = () => {
                    this.provider(( () => Promise.resolve(!0)))
                }
                ,
                this.list = [],
                this.count = 0
            }
            addTask(e) {
                return new Promise((t => {
                    this.list.push(( () => e().then((e => (this.count -= 1,
                    this.consume(),
                    t(e),
                    e))))),
                    this.consume()
                }
                ))
            }
            consume() {
                if (this.count < this.maxCount && this.list.length > 0) {
                    this.count += 1;
                    const e = this.list.shift();
                    e && e()
                }
            }
        }
          , St = () => {
            try {
                let e = "";
                const t = document.location.hostname
                  , r = t.split(".");
                if (/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(t) || "localhost" === t) {
                    let e = document.location.hostname
                      , t = /^.*?\b\.\b/;
                    return e.replace(t, "")
                }
                const i = [];
                for (i.unshift(r.pop()); i.length < 2; )
                    i.unshift(r.pop()),
                    e = i.join(".");
                return e || document.location.hostname
            } catch (e) {
                return document.location.hostname
            }
        }
          , wt = e => {
            try {
                let t = `${e}=`
                  , r = document.cookie.split(";");
                for (let e = 0; e < r.length; e++) {
                    let i = r[e].trim();
                    if (0 === i.indexOf(t)) {
                        const e = i.substring(t.length, i.length);
                        if (e.length > 0)
                            return decodeURIComponent(e)
                    }
                }
                return ""
            } catch (e) {}
            return ""
        }
          , Ct = class extends B {
            constructor(e) {
                super(),
                this.getCurrentHostName = () => {
                    var e;
                    const t = null == (e = null == window ? void 0 : window.location) ? void 0 : 'www.tiktok.com';
                    if (t && -1 !== t.indexOf("second.tiktok.com"))
                        return t
                }
                ,
                this.startStorageChecker = () => {
                    var e;
                    null == (e = this.storage) || e.startStorageChecker().catch((e => {
                        this.emit("error", {
                            name: "start storage checker error",
                            error: e
                        })
                    }
                    ))
                }
                ,
                this.initLoadIframePromise = () => new Promise(( (e, t) => {
                    var r;
                    this.storage ? null == (r = this.storage) || r.client.on("connection", (t => {
                        this.crossStatus = !0,
                        e()
                    }
                    )) : e()
                }
                )),
                this.getStorageStatus = () => {
                    var e;
                    return null == (e = this.storage) ? void 0 : e.client.getIframeState()
                }
                ,
                this._createStorageKey = e => {
                    const {namespace: t} = this.config;
                    return t ? `security-sdk/${t}/${e}` : `security-sdk/${e}`
                }
                ,
                this._deleteStorageKey = e => e.replace(/security-sdk\//g, ""),
                this.getItem = e => ct(this, null, (function*() {
                    var t, r;
                    const i = this._createStorageKey(e);
                    let n;
                    if (n = this.disableCrossStorage ? yield null == (r = this.localStore) ? void 0 : r.getItem(i) : yield null == (t = this.storage) ? void 0 : t.getItem(i),
                    n) {
                        const {value: e, from: t, origin: r} = n || {};
                        return e || ""
                    }
                    return ""
                }
                )),
                this.getLocalItem = e => ct(this, null, (function*() {
                    var t, r;
                    const i = this._createStorageKey(e)
                      , n = (new Date).getTime();
                    let o;
                    o = this.disableCrossStorage ? yield null == (t = this.localStore) ? void 0 : t.getItem(i) : yield null == (r = this.storage) ? void 0 : r.storage.getItem(i);
                    const s = (new Date).getTime();
                    if (o) {
                        const {value: t, from: r, origin: i} = o || {};
                        return this.emit("execute", {
                            action: "localstorage",
                            op: "getItem",
                            status: t ? "success" : "success_null",
                            duration: s > n ? s - n : 0,
                            ctx: {
                                key: e,
                                from: "number" == typeof r ? r.toString() : "-99",
                                origin: i || "",
                                type: "localStorage"
                            }
                        }),
                        t || ""
                    }
                    return this.emit("execute", {
                        action: "localstorage",
                        op: "getItem",
                        duration: s > n ? s - n : 0,
                        ctx: {
                            key: e,
                            type: "localStorage"
                        },
                        status: "success_null"
                    }),
                    ""
                }
                )),
                this.setLocalItem = (e, t) => ct(this, null, (function*() {
                    var r, i;
                    const n = this._createStorageKey(e)
                      , o = (new Date).getTime();
                    let s;
                    s = this.disableCrossStorage ? yield null == (r = this.localStore) ? void 0 : r.setItem(n, t) : yield null == (i = this.storage) ? void 0 : i.storage.setItem(n, t);
                    const {from: a, origin: c} = s || {}
                      , l = (new Date).getTime();
                    this.emit("execute", {
                        action: "localstorage",
                        op: "setItem",
                        status: "success",
                        duration: l > o ? l - o : 0,
                        ctx: {
                            key: e,
                            from: "number" == typeof a ? a.toString() : "-99",
                            origin: c || ""
                        }
                    })
                }
                )),
                this.getLocalItemsWithKeys = e => ct(this, null, (function*() {
                    var t, r, i;
                    const n = e.map((e => this._createStorageKey(e)))
                      , o = (new Date).getTime();
                    let s;
                    s = this.disableCrossStorage ? yield null == (t = this.localStore) ? void 0 : t.getItemByKeys(n) : yield null == (i = null == (r = this.storage) ? void 0 : r.storage) ? void 0 : i.getItemByKeys(n);
                    const a = (new Date).getTime();
                    let c = {}
                      , l = {};
                    return s && Array.isArray(s) && s.length === e.length ? (s.forEach(( (t, r) => {
                        const {value: i, from: n, origin: o} = t || {}
                          , s = e[r]
                          , a = "number" == typeof n ? n.toString() : "-99";
                        l[`${s.replace(/\//g, "_")}_origin`] = o || "",
                        l[`${s.replace(/\//g, "_")}_from`] = a,
                        l[`${s.replace(/\//g, "_")}_status`] = i ? "success" : "success_null",
                        c[s] = i
                    }
                    )),
                    this.emit("execute", {
                        action: "localstorage",
                        op: "getKeys",
                        status: "success",
                        duration: a > o ? a - o : 0,
                        ctx: l
                    }),
                    c) : (e.forEach((e => {
                        c[e] = "",
                        l[`${e.replace(/\//g, "_")}_status`] = "success_null"
                    }
                    )),
                    this.emit("execute", {
                        action: "localstorage",
                        op: "getKeys",
                        duration: a > o ? a - o : 0,
                        ctx: l,
                        status: "success_null"
                    }),
                    c)
                }
                )),
                this.getItemWithKeys = e => ct(this, null, (function*() {
                    var t, r;
                    const i = e.map((e => this._createStorageKey(e)));
                    let n;
                    n = this.disableCrossStorage ? yield null == (t = this.localStore) ? void 0 : t.getItemByKeys(i) : yield null == (r = this.storage) ? void 0 : r.getItemByKeys(i);
                    let o = {}
                      , s = {
                        cross: "1"
                    };
                    return n && Array.isArray(n) && n.length === e.length ? (n.forEach(( (t, r) => {
                        const {value: i, from: n, origin: a} = t || {}
                          , c = e[r]
                          , l = "number" == typeof n ? n.toString() : "-99";
                        s[`${c.replace(/\//g, "_")}_origin`] = a || "",
                        s[`${c.replace(/\//g, "_")}_from`] = l,
                        s[`${c.replace(/\//g, "_")}_status`] = i ? "success" : "success_null",
                        o[c] = i
                    }
                    )),
                    o) : (e.forEach((e => {
                        o[e] = "",
                        s[`${e.replace(/\//g, "_")}_status`] = "success_null"
                    }
                    )),
                    o)
                }
                )),
                this.getItemsWithOrigin = e => ct(this, null, (function*() {
                    var t, r;
                    const i = e.map((e => this._createStorageKey(e)));
                    let n;
                    n = this.disableCrossStorage ? yield null == (t = this.localStore) ? void 0 : t.getItemByKeys(i) : yield null == (r = this.storage) ? void 0 : r.getItemByKeys(i);
                    
                    let o = {
                        data: {}
                    }
                      , s = {}
                      , a = {
                        cross: "1"
                    };
                    return n && Array.isArray(n) && n.length === e.length ? (n.forEach(( (t, r) => {
                        const {value: i, from: n, origin: o} = t || {}
                          , c = e[r]
                          , l = "number" == typeof n ? n.toString() : "-99";
                        a[`${c.replace(/\//g, "_")}_origin`] = o || "",
                        a[`${c.replace(/\//g, "_")}_from`] = l,
                        a[`${c.replace(/\//g, "_")}_status`] = i ? "success" : "success_null",
                        s[c] = {
                            key: c,
                            value: i,
                            from: l || "-99",
                            origin: o || "-1"
                        }
                    }
                    )),
                    o.data = s,
                    o.from = (null == a ? void 0 : a.cross) || "0",
                    o) : (e.forEach((e => {
                        s[e] = {
                            key: e,
                            value: "",
                            from: "-98",
                            origin: "-2"
                        },
                        a[`${e.replace(/\//g, "_")}_status`] = "success_null"
                    }
                    )),
                    o.data = s,
                    o)
                }
                )),
                this.setItemWithKeys = (e, t, r) => ct(this, null, (function*() {
                    var r, i;
                    if (e.length !== t.length)
                        throw new Error("set item with Keys need equal length");
                    let n, o = [];
                    e.forEach(( (e, r) => {
                        const i = [this._createStorageKey(e), t[r]];
                        o.push(i)
                    }
                    )),
                    n = this.disableCrossStorage ? yield null == (r = this.localStore) ? void 0 : r.setItemByKeys(o) : yield null == (i = this.storage) ? void 0 : i.setItemByKeys(o, {
                        async: 3e3
                    });
                    let s = {
                        cross: "1"
                    };
                    return n && Array.isArray(n) && n.length === e.length ? (n.forEach(( (t, r) => {
                        const {from: i, origin: n} = t || {}
                          , o = e[r]
                          , a = "number" == typeof i ? i.toString() : "-99";
                        s[`${o.replace(/\//g, "_")}_origin`] = n || "",
                        s[`${o.replace(/\//g, "_")}_from`] = a
                    }
                    )),
                    {
                        cross: s.cross || "0"
                    }) : {
                        cross: "0"
                    }
                }
                )),
                this.setItem = (e, t, r) => ct(this, null, (function*() {
                    var i, n, o;
                    const s = this._createStorageKey(e);
                    let a;
                    (new Date).getTime(),
                    a = this.disableCrossStorage ? yield null == (i = this.localStore) ? void 0 : i.setItem(s, t) : r ? yield null == (n = this.storage) ? void 0 : n.setItem(s, t, {
                        async: r
                    }) : yield null == (o = this.storage) ? void 0 : o.setItem(s, t, {
                        async: !0
                    });
                    const {from: c, origin: l} = a || {};
                    return (new Date).getTime(),
                    {
                        cross: "0"
                    }
                }
                )),
                this.deleteItem = e => ct(this, null, (function*() {
                    var t, r;
                    const i = this._createStorageKey(e);
                    this.disableCrossStorage ? yield null == (t = this.localStore) ? void 0 : t.removeItem(i) : yield null == (r = this.storage) ? void 0 : r.removeItem(i)
                }
                )),
                this.checkIframeStatus = e => {
                    var t;
                    try {
                        if (this.hasCheckIframeStatus && !e)
                            return;
                        this.hasCheckIframeStatus = !0;
                        const r = null == (t = null == document ? void 0 : document.querySelectorAll) ? void 0 : t.call(document, "iframe");
                        let i = !1;
                        r && r.length > 0 && r.forEach((e => {
                            e.src
                        }
                        )),
                        i || this.emit("execute", {
                            action: "iframe",
                            op: e ? "check" : "getKeys",
                            status: "fail",
                            ctx: {
                                type: e ? "unload" : "getKeys"
                            }
                        })
                    } catch (t) {
                        this.emit("error", {
                            error: t,
                            name: "check iframe status error"
                        }),
                        this.emit("execute", {
                            action: "iframe",
                            op: e ? "check" : "getKeys",
                            status: "fail",
                            ctx: {
                                type: e ? "unload" : "getKeys"
                            }
                        })
                    }
                }
                ,
                this.getIframeStatus = () => this.crossStatus || this.iframeStatus,
                this.verifySignMethod = e => {
                    try {
                        const t = wt("_tt_ticket_crypt_cookie") || "";
                        if (e && Array.isArray(e) && 3 === e.length) {
                            const r = e[0]
                              , i = e[1]
                              , n = e[2];
                            return yt(t, r, i, n)
                        }
                    } catch (e) {
                        this.emit("error", {
                            error: e,
                            name: "verify sign method error"
                        })
                    }
                    return !1
                }
                ,
                this.enableHotPath = () => {
                    try {
                        if (-1 !== document.location.href.indexOf("second.tiktok.com"))
                            return !0
                    } catch (e) {
                        this.emit("error", {
                            error: e,
                            name: "enable hot path error"
                        })
                    }
                    return !1
                }
                ,
                this.initUnloadEvent = () => {
                    try {
                        window.addEventListener("beforeunload", (e => {}
                        ))
                    } catch (e) {
                        this.emit("error", {
                            error: e,
                            name: "unload check error"
                        })
                    }
                }
                ;
                const {url: t, fallbackCacheOriginURL: r, sendEvent: i, disableCrossStorage: n} = e;
                this.disableCrossStorage = n,
                this.config = e,
                this.disableCrossStorage ? (this.localStore = new We,
                this.localStore.on("log", (e => {
                    const {name: t, content: r} = e || {};
                    this.emit("log", {
                        extra: {
                            content: r || ""
                        },
                        content: t,
                        level: "info"
                    })
                }
                )),
                this.localStore.on("error", (e => {
                    this.emit("error", {
                        error: e,
                        name: "storage error"
                    })
                }
                ))) : (this.localStore = new We,
                this.storage = new et({
                    url: t || "",
                    protocol: "SERCURE",
                    fallback: r,
                    verifySignMethod: this.verifySignMethod
                }),
                this.storage.setOriginStorageConfig({
                    enableHotPatch: this.enableHotPath(),
                    hostname: this.getCurrentHostName()
                }).catch((e => {
                    this.emit("error", {
                        name: "enbale hot patch error",
                        error: e
                    })
                }
                )),
                this.hasCheckIframeStatus = !1,
                this.iframeStatus = !1,
                this.crossStatus = !1,
                this.storage.on("error", (e => {
                    this.emit("error", {
                        error: e,
                        name: "storage error"
                    })
                }
                )),
                this.storage.on("log", (e => {
                    const {name: t, content: r} = e || {};
                    this.emit("log", {
                        extra: {
                            content: r || ""
                        },
                        content: t,
                        level: "info"
                    })
                }
                )),
                this.storage.on("metrics", (e => {
                    const {name: t, metrics: r, categories: n} = e || {};
                    t && "string" == typeof t ? null == i || i({
                        name: `storage_${t}`,
                        metrics: r,
                        categories: n
                    }) : null == i || i({
                        name: "storage_event_without_name",
                        metrics: r,
                        categories: n
                    })
                }
                )),
                this.loadIframePromise = this.initLoadIframePromise())
            }
        }
          , Kt = class {
            constructor(e) {
                this.getKeys = () => ({
                    publicKey: this._public_key,
                    privateKey: this._private_key
                }),
                this.sign = e => {
                    const t = Date.now()
                      , r = tt.KEYUTIL.getKey(this._private_key || "")
                      , i = new tt.KJUR.crypto.Signature({
                        alg: "SHA256withECDSA"
                    });
                    i.init(r);
                    const n = i.signString(e);
                    var o;
                    return o = {
                        duration: Date.now() - t,
                        type: "jsrsasign"
                    },
                    E("tt_ticket_guard_web_sign", o),
                    n
                }
                ,
                this.verify = (e, t, r) => {
                    const i = new tt.KJUR.crypto.Signature({
                        alg: "SHA256withECDSA"
                    });
                    if (r)
                        i.init(r);
                    else {
                        const e = tt.KEYUTIL.getKey(this._public_key || "");
                        i.init(e)
                    }
                    return i.updateString(t),
                    i.verify(e)
                }
                ,
                this.getCSR = () => {
                    var e;
                    const t = Date.now()
                      , r = new tt.KJUR.asn1.csr.CertificationRequest({
                        subject: {
                            str: "/C=CN/CN=tt_ticket_guard"
                        },
                        sbjpubkey: this._public_key || "",
                        sigalg: "SHA256withECDSA",
                        extreq: [{
                            extname: "subjectAltName",
                            array: [{
                                dns: (null == (e = null == window ? void 0 : window.location) ? void 0 : e.hostname) || ""
                            }]
                        }],
                        sbjprvkey: this._private_key || ""
                    }).getPEM();
                    var i;
                    return i = {
                        duration: Date.now() - t,
                        type: "jsrsasign"
                    },
                    E("tt_ticket_guard_web_generate_csr", i),
                    r
                }
                ,
                this.comparePubKey = (e, t) => {
                    const r = tt.KEYUTIL.getKey(e)
                      , i = tt.pemtohex(t)
                      , n = r.generatePublicKeyHex();
                    return i.includes(n)
                }
                ;
                const {privateKey: t, publicKey: r} = e;
                if (t && r)
                    this._public_key = r,
                    this._private_key = t;
                else {
                    const e = Date.now()
                      , {prvKeyObj: t, pubKeyObj: r} = tt.KEYUTIL.generateKeypair("EC", "secp256r1");
                    this._public_key = tt.KEYUTIL.getPEM(r),
                    this._private_key = tt.KEYUTIL.getPEM(t, "PKCS8PRV"),
                    i = {
                        duration: Date.now() - e,
                        type: "jsrsasign"
                    },
                    E("tt_ticket_guard_web_gerate_keys", i)
                }
                var i
            }
        }
          , It = class extends B {
            constructor() {
                super(),
                this.getCookie = e => {
                    try {
                        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
                    } catch (e) {
                        this.emit("error", {
                            error: e,
                            name: "cookie get item error"
                        })
                    }
                    return null
                }
                ,
                this.setCookie = (e, t, r, i, n, o) => {
                    try {
                        return !(!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e) || (document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + (n ? "; max-age=" + n : "") + (i ? "; domain=" + i : "") + (r ? "; path=" + r : "") + (o ? "; secure" : ""),
                        0))
                    } catch (e) {
                        this.emit("error", {
                            error: e,
                            name: "cookie set item error"
                        })
                    }
                    return !1
                }
                ,
                this.setCookieNoTimeout = (e, t) => {
                    this.setCookie(e, t, "/")
                }
                ,
                this.setCookieWithMaxAge = (e, t) => {
                    this.setCookie(e, t, "/", void 0, 5184e3)
                }
                ,
                this.setCookieWithDomain = (e, t) => {
                    const r = St();
                    this.setCookie(e, t, "/", r, 5184e3)
                }
                ,
                this.deleteCookie = (e, t, r) => !(!e || !this.hasCookie(e) || (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC" + (r ? "; domain=" + r : "") + (t ? "; path=" + t : ""),
                0)),
                this.deleteAllCookie = e => {
                    const t = St()
                      , r = document.location.hostname;
                    this.deleteCookie(e, "/", t),
                    this.deleteCookie(e, "/", r),
                    this.deleteCookie(e, "/")
                }
                ,
                this.hasCookie = e => new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[-.+*]/g, "\\$&") + "\\s*\\=").test(document.cookie),
                this.getCookieKeys = () => {
                    let e = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/)
                      , t = [];
                    for (let r = 0; r < e.length; r++)
                        e[r] && t.push(decodeURIComponent(e[r]));
                    return t
                }
            }
        }
          , Ot = "s_sdk_crypt_sdk"
          , Dt = "s_sdk_cert_key"
          , Et = "s_sdk_sign_data_key"
          , xt = "_tt_ticket_crypt_cookie"
          , Tt = class extends B {
            constructor(e) {
                super(),
                this.signType = "pubKey",
                this.initType = "pubKey",
                this.setType = e => {
                    const {initType: t="pubKey", signType: r="pubKey"} = e;
                    this.signType = r,
                    this.initType = t
                }
                ,
                this.setStorageType = e => {
                    if (this.storeType && e !== this.storeType)
                        throw new Error("secure sdk only one storage type, please set correct type!");
                    this.storeType = e
                }
                ,
                this.setDisableStorageSignData = e => {
                    this._disableStorageSignData = e
                }
                ,
                this.setCrossStorageURL = e => {
                    this._iframeURL = e
                }
                ,
                this.setCrossStorageBackURL = e => {
                    this._iframeBackURL = e
                }
                ,
                this.setDisableCrossStorage = e => {
                    this._disableCrossStorage = e
                }
                ,
                this.setStorageNamespace = e => {
                    this._storageNamespace = e
                }
                ,
                this.setUpdateKeys = e => {
                    this.updateKeys = e
                }
                ,
                this.setConfig = e => {
                    this.config = e
                }
                ,
                this.setContext = e => {
                    const {disableCrossStorage: t=!1, updateKeys: r=!1, storageNamespace: i, iframeBackURL: n, iframeURL: o, signType: s="pubKey", initType: a="pubKey", storeType: c="iframe", disableStorageSignData: l=!1} = e;
                    this.signType = s,
                    this.initType = a,
                    this._disableCrossStorage = t,
                    this._storageNamespace = i,
                    this._iframeBackURL = n,
                    this._iframeURL = o,
                    this.updateKeys = r,
                    this.storeType = c,
                    this._disableStorageSignData = l
                }
                ,
                this.start = () => {
                    this.initIframeKeys(),
                    Object.keys(this.config || {}).forEach((e => {
                        var t;
                        const r = null == (t = this.config) ? void 0 : t[e]
                          , i = Array.isArray(r) && r.length > 0 && r[0]
                          , {scene: n="", certType: o} = i || {};
                        "cookie" === o && this._initCookie(n),
                        "request" === o && console.warn("certType === request is deprecated")
                    }
                    ))
                }
                ,
                this.initIframeStore = () => {
                    var e;
                    const t = this._iframeURL;
                    if (!this._storeSDK) {
                        this.cookieOperate = new It,
                        null == (e = this.cookieOperate) || e.on("error", (e => {
                            this.emit("error", e)
                        }
                        ));
                        const {sendEvent: r} = this.initConfig || {}
                          , i = new Ct({
                            url: t,
                            fallbackCacheOriginURL: this._iframeBackURL,
                            sendEvent: r,
                            disableCrossStorage: this._disableCrossStorage,
                            namespace: this._storageNamespace
                        });
                        this.loadIframePromise = i.loadIframePromise,
                        i.on("error", (e => {
                            this.emit("error", e)
                        }
                        )),
                        i.on("load", (e => {
                            this.emit("load", e)
                        }
                        )),
                        i.on("execute", (e => {
                            this.emit("execute", e)
                        }
                        )),
                        i.on("log", (e => {
                            this.emit("log", e)
                        }
                        ));
                        const n = {
                            get: _t(i.getItem, "iframe get item error", this.reportError, "getItem", "storage", this.storeType),
                            set: _t(i.setItem, "iframe set item error", this.reportError, "setItem", "storage", this.storeType),
                            delete: _t(i.deleteItem, "iframe delete item error", this.reportError, "deleteItem", "storage", this.storeType),
                            getItems: _t(i.getItemWithKeys, "iframe get items keys error", this.reportError, "getKeys", "storage", this.storeType),
                            setItems: _t(i.setItemWithKeys, "iframe set items keys error", this.reportError, "setKeys", "storage", this.storeType),
                            getItemsWithOrigin: _t(i.getItemsWithOrigin, "iframe get items keys with origin error", this.reportError, "getKeys", "storage", this.storeType),
                            getLocalItem: _t(i.getLocalItem, "localstorage get item keys error", this.reportError, "getItem", "localstorage", this.storeType),
                            setLocalItem: _t(i.setLocalItem, "localstorage set item keys error", this.reportError, "setItem", "localstorage", this.storeType),
                            getLocalItems: _t(i.getLocalItemsWithKeys, "localstorage set item keys error", this.reportError, "setItem", "localstorage", this.storeType),
                            getIframeStatus: i.getIframeStatus,
                            getStorageStatus: i.getStorageStatus,
                            startStorageChecker: i.startStorageChecker
                        };
                        this._storeSDK = n
                    }
                }
                ,
                this.initIframeKeys = () => {
                    this.initIframeStore(),
                    this._checkCryptKeys()
                }
                ,
                this._initCookie = bt((e => ct(this, null, (function*() {
                    try {
                        return yield this._processServerCookie(e),
                        yield this._processCookie(),
                        !0
                    } catch (e) {
                        this.reportError(e, "Init Cookie Error")
                    }
                    return !1
                }
                )))),
                this._checkCryptKeys = bt(( () => ct(this, null, (function*() {
                    var e;
                    try {
                        const t = this._getInitKeys()
                          , r = yield null == (e = this._storeSDK) ? void 0 : e.getItems(t)
                          , i = r && r[Ot];
                        if (this._initData = r || {},
                        i && "string" == typeof i)
                            try {
                                const e = JSON.parse(i)
                                  , {ec_privateKey: t, ec_publicKey: r, ec_csr: n} = e || {};
                                return t && r && ("cert" !== this.initType || n) ? (this.cryptoSDK = new Kt({
                                    privateKey: t,
                                    publicKey: r
                                }),
                                this._cryptObject = e,
                                this._cryptData = i,
                                this.emit("load", {
                                    action: "sdk",
                                    op: "init",
                                    duration: this.getPerfomanceTimes(),
                                    status: "success"
                                }),
                                !0) : (this._initData = {},
                                this.emit("load", {
                                    action: "keys",
                                    op: "check",
                                    status: "fail"
                                }),
                                yield this._initCert())
                            } catch (e) {
                                return this.emit("load", {
                                    action: "keys",
                                    op: "check",
                                    status: "fail"
                                }),
                                this.emit("error", {
                                    error: e,
                                    name: "check crypt data error"
                                }),
                                this._initData = {},
                                yield this._initCert()
                            }
                        const n = yield this._initCert();
                        return this.emit("load", {
                            action: "sdk",
                            op: "init",
                            duration: this.getPerfomanceTimes(),
                            status: "success"
                        }),
                        n
                    } catch (e) {
                        return this.emit("load", {
                            action: "sdk",
                            op: "init",
                            status: "fail"
                        }),
                        this.reportError(e, "check_crypt_keys_error"),
                        !1
                    }
                }
                )))),
                this.getPerfomanceTimes = () => {
                    var e;
                    let t = 0;
                    try {
                        return t = (null == (e = window.performance) ? void 0 : e.now()) || (new Date).getTime(),
                        t
                    } catch (e) {}
                    return t
                }
                ,
                this._getInitKeys = () => {
                    try {
                        const e = [Ot, Dt]
                          , t = `${Et}/web_protect`;
                        return e.push(t),
                        e
                    } catch (e) {
                        this.emit("error", {
                            error: e,
                            name: "get init keys error"
                        })
                    }
                    return [Ot, Dt]
                }
                ,
                this._processCookie = () => ct(this, null, (function*() {
                    var e, t, r, i, n, o, s;
                    try {
                        yield this._checkCryptKeys(),
                        this._hasProcessServerData && "pubKey" !== this.initType || (yield this.checkCookieMd5()),
                        null == (t = null == (e = this._storeSDK) ? void 0 : e.startStorageChecker) || t.call(e);
                        const {ec_privateKey: s, ec_csr: a} = this._cryptObject || {};
                        if ("cert" === this.initType && !a || !s)
                            return;
                        const c = "cert" === this.initType ? {
                            "tt-ticket-guard-client-csr": a || ""
                        } : {
                            "tt-ticket-guard-public-key": pt(s),
                            "tt-ticket-guard-web-version": 1
                        }
                          , l = at({
                            "tt-ticket-guard-version": 2,
                            "tt-ticket-guard-iteration-version": 1
                        }, c)
                          , u = lt(JSON.stringify(l));
                        null == (r = this.cookieOperate) || r.deleteAllCookie("tt_ticket_guard_client_data"),
                        null == (i = this.cookieOperate) || i.setCookieWithDomain("tt_ticket_guard_client_data", u),
                        null == (n = this.cookieOperate) || n.setCookieWithDomain("tt_ticket_guard_client_web_domain", "2"),
                        this.emit("execute", {
                            action: "cookie",
                            op: "setItem",
                            status: "success",
                            ctx: {
                                type: "client"
                            }
                        }),
                        this.emit("log", {
                            extra: {
                                cookie: (null == (o = this.cookieOperate) ? void 0 : o.getCookie("tt_ticket_guard_client_data")) || "",
                                cookieString: u
                            },
                            content: "set client data success",
                            level: "info"
                        })
                    } catch (e) {
                        this.emit("log", {
                            extra: {
                                cookie: (null == (s = this.cookieOperate) ? void 0 : s.getCookie("tt_ticket_guard_client_data")) || ""
                            },
                            content: "process client cookie error",
                            level: "error"
                        }),
                        this.reportError(e, "Process Cookie Error"),
                        this.emit("execute", {
                            action: "cookie",
                            op: "setItem",
                            status: "fail",
                            ctx: {
                                type: "client"
                            }
                        })
                    }
                }
                )),
                this.checkCookieMd5 = () => ct(this, null, (function*() {
                    var e, t, r, i, n, o, s, a;
                    try {
                        const c = (null == (e = this.cookieOperate) ? void 0 : e.getCookie(xt)) || "";
                        if (!c)
                            return !1;
                        if (yt(c, this._cryptData, this._initData[Dt], this._initData[`${Et}/web_protect`])) {
                            const e = [Ot, Dt, `${Et}/web_protect`]
                              , r = [this._cryptData || "", this._initData[Dt] || "", this._initData[`${Et}/web_protect`] || ""];
                            return null == (t = this.loadIframePromise) || t.then(( () => {
                                var t;
                                return null == (t = this._storeSDK) ? void 0 : t.setItems(e, r, 2).then((t => {
                                    var r;
                                    const {cross: i="0"} = t || {};
                                    return null == (r = this._storeSDK) ? void 0 : r.getItems(e).then((e => {
                                        var t;
                                        const r = (null == (t = this.cookieOperate) ? void 0 : t.getCookie(xt)) || ""
                                          , n = yt(r, null == e ? void 0 : e[Ot], null == e ? void 0 : e[Dt], null == e ? void 0 : e[`${Et}/web_protect`]);
                                        this.emit("load", {
                                            action: "cookie",
                                            op: "process",
                                            status: "success",
                                            ctx: {
                                                type: "1",
                                                scene: "callback",
                                                correct: n ? "1" : "0",
                                                cross: i
                                            }
                                        })
                                    }
                                    ))
                                }
                                ))
                            }
                            )).catch((e => {
                                this.emit("load", {
                                    action: "cookie",
                                    op: "process",
                                    status: "fail",
                                    ctx: {
                                        type: "1",
                                        scene: "callback"
                                    }
                                }),
                                this.emit("error", {
                                    error: e,
                                    name: "async data fail"
                                })
                            }
                            )),
                            this.emit("load", {
                                action: "cookie",
                                op: "process",
                                status: "success",
                                ctx: {
                                    type: "1"
                                }
                            }),
                            void (this.initMatch = !0)
                        }
                        const l = yield null == (r = this._storeSDK) ? void 0 : r.getLocalItem(Ot);
                        if (yt(c, l, (null == (i = this._initData) ? void 0 : i[Dt]) || "", (null == (n = this._initData) ? void 0 : n[`${Et}/web_protect`]) || "")) {
                            const e = [Ot, Dt, `${Et}/web_protect`]
                              , t = [l || "", this._initData[Dt] || "", this._initData[`${Et}/web_protect`] || ""];
                            return this._processCryptData(l, "check cookie md5 error"),
                            null == (o = this.loadIframePromise) || o.then(( () => {
                                var r;
                                return null == (r = this._storeSDK) ? void 0 : r.setItems(e, t, 2).then((t => {
                                    var r;
                                    const {cross: i="0"} = t || {};
                                    return null == (r = this._storeSDK) ? void 0 : r.getItems(e).then((e => {
                                        var t;
                                        const r = (null == (t = this.cookieOperate) ? void 0 : t.getCookie(xt)) || ""
                                          , n = yt(r, null == e ? void 0 : e[Ot], null == e ? void 0 : e[Dt], null == e ? void 0 : e[`${Et}/web_protect`]);
                                        this.emit("load", {
                                            action: "cookie",
                                            op: "process",
                                            status: "success",
                                            ctx: {
                                                type: "2",
                                                scene: "callback",
                                                correct: n ? "1" : "0",
                                                cross: i
                                            }
                                        })
                                    }
                                    ))
                                }
                                ))
                            }
                            )).catch((e => {
                                this.emit("load", {
                                    action: "cookie",
                                    op: "process",
                                    status: "fail",
                                    ctx: {
                                        type: "2",
                                        scene: "callback"
                                    }
                                }),
                                this.emit("error", {
                                    error: e,
                                    name: "async data fail"
                                })
                            }
                            )),
                            this.emit("load", {
                                action: "cookie",
                                op: "process",
                                status: "success",
                                ctx: {
                                    type: "2"
                                }
                            }),
                            void (this.initMatch = !0)
                        }
                        const u = this._getInitKeys()
                          , h = yield null == (s = this._storeSDK) ? void 0 : s.getLocalItems(u);
                        if (yt(c, null == h ? void 0 : h[Ot], null == h ? void 0 : h[Dt], null == h ? void 0 : h[`${Et}/web_protect`])) {
                            const e = [Ot, Dt, `${Et}/web_protect`]
                              , t = [null == h ? void 0 : h[Ot], null == h ? void 0 : h[Dt], null == h ? void 0 : h[`${Et}/web_protect`]];
                            return this._processCryptData((null == h ? void 0 : h[Ot]) || "", "check cookie md5 error"),
                            null == (a = this.loadIframePromise) || a.then(( () => {
                                var r;
                                return null == (r = this._storeSDK) ? void 0 : r.setItems(e, t, 2).then((t => {
                                    var r;
                                    const {cross: i="0"} = t || {};
                                    return null == (r = this._storeSDK) ? void 0 : r.getItems(e).then((e => {
                                        var t;
                                        const r = (null == (t = this.cookieOperate) ? void 0 : t.getCookie(xt)) || ""
                                          , n = yt(r, null == e ? void 0 : e[Ot], null == e ? void 0 : e[Dt], null == e ? void 0 : e[`${Et}/web_protect`]);
                                        this.emit("load", {
                                            action: "cookie",
                                            op: "process",
                                            status: "success",
                                            ctx: {
                                                type: "3",
                                                scene: "callback",
                                                correct: n ? "1" : "0",
                                                cross: i
                                            }
                                        })
                                    }
                                    ))
                                }
                                ))
                            }
                            )).catch((e => {
                                this.emit("load", {
                                    action: "cookie",
                                    op: "process",
                                    status: "fail",
                                    ctx: {
                                        type: "3",
                                        scene: "callback"
                                    }
                                }),
                                this.emit("error", {
                                    error: e,
                                    name: "async data fail"
                                })
                            }
                            )),
                            this.emit("load", {
                                action: "cookie",
                                op: "process",
                                status: "success",
                                ctx: {
                                    type: "3"
                                }
                            }),
                            void (this.initMatch = !0)
                        }
                        this.emit("load", {
                            action: "cookie",
                            op: "process",
                            status: "fail"
                        })
                    } catch (e) {
                        this.emit("error", {
                            error: e,
                            name: "check cookie md5 fail"
                        })
                    }
                }
                )),
                this._processCryptData = (e, t) => {
                    try {
                        if (!e || "string" != typeof e)
                            return;
                        const t = JSON.parse(e)
                          , {ec_privateKey: r, ec_publicKey: i, ec_csr: n} = t || {};
                        this._cryptData = e,
                        this._initData[Ot] = e,
                        this._cryptObject = t,
                        this.cryptoSDK = new Kt({
                            privateKey: r,
                            publicKey: i
                        })
                    } catch (e) {
                        this.emit("error", {
                            error: e,
                            name: t || "process crypt data error"
                        })
                    }
                }
                ,
                this._compareCookieWithCache = (e, t) => !(!t || !e) && t === e,
                this._processServerCookie = e => ct(this, null, (function*() {
                    var t, r, i, n, o, s, a, c, l, u, h, d, g, p, f, m;
                    try {
                        yield this._checkCryptKeys();
                        const y = (null == (t = this.cookieOperate) ? void 0 : t.getCookie("tt_ticket_guard_server_data")) || ""
                          , v = wt("tt_ticket_guard_server_data") || "";
                        (y || v) && this.emit("log", {
                            extra: {
                                cookie: y,
                                cookie2: v,
                                docCookie: (null == document ? void 0 : document.cookie) || "",
                                lost: y && v ? "0" : "1"
                            },
                            content: "get_cookie_two",
                            level: "info"
                        });
                        const _ = y || v
                          , b = (null == (r = this.cookieOperate) ? void 0 : r.getCookie("tt_ticket_guard_web_domain")) || "";
                        if (b && (this.emit("execute", {
                            op: "check",
                            action: "server_data",
                            status: "success",
                            ctx: {
                                server: _ ? "1" : "0",
                                server2: v ? "1" : "0",
                                domain: b
                            }
                        }),
                        null == (i = this.cookieOperate) || i.setCookieWithDomain("_tt_ticket_crypt_doamin", b)),
                        _) {
                            const t = (new Date).getTime()
                              , r = decodeURIComponent(_)
                              , i = dt(r)
                              , f = JSON.parse(i)
                              , {client_cert: m} = f || {}
                              , y = [`${Et}/${e}`]
                              , v = [i];
                            if (m) {
                                this._initData[Dt] = m,
                                y.push(Dt),
                                v.push(m);
                                const e = ft(this._cryptData, m)
                                  , t = mt(this._cryptData, m);
                                if (e || t) {
                                    this._cryptData && y.push(Ot),
                                    this._cryptData && v.push(this._cryptData);
                                    const e = vt(this._cryptData, m, i);
                                    e && (null == (a = this.cookieOperate) || a.setCookieWithDomain(xt, e)),
                                    this.emit("log", {
                                        extra: {
                                            md5: e,
                                            md5Cookie: (null == (c = this.cookieOperate) ? void 0 : c.getCookie(xt)) || ""
                                        },
                                        content: "generate keys info success init",
                                        level: "info"
                                    }),
                                    this.emit("load", {
                                        action: "cookie",
                                        op: "check",
                                        status: "success",
                                        ctx: {
                                            type: "init"
                                        }
                                    })
                                } else {
                                    const e = yield null == (n = this._storeSDK) ? void 0 : n.getLocalItem(Ot)
                                      , t = ft(e, m)
                                      , r = mt(e, m);
                                    if (e && (t || r)) {
                                        y.push(Ot),
                                        v.push(e),
                                        this._processCryptData(e, "process local server cert error");
                                        const t = (new Date).getTime()
                                          , r = vt(e, m, i);
                                        r && (null == (o = this.cookieOperate) || o.setCookieWithDomain(xt, r));
                                        const n = (new Date).getTime();
                                        this.emit("log", {
                                            extra: {
                                                md5: r,
                                                md5Cookie: (null == (s = this.cookieOperate) ? void 0 : s.getCookie(xt)) || "",
                                                duration: n - t
                                            },
                                            content: "generate keys info success local",
                                            level: "info"
                                        }),
                                        this.emit("load", {
                                            action: "cookie",
                                            op: "check",
                                            status: "success",
                                            ctx: {
                                                type: "local"
                                            }
                                        })
                                    } else {
                                        this.emit("load", {
                                            action: "cookie",
                                            op: "check",
                                            status: "fail",
                                            ctx: {
                                                type: "local",
                                                local: e ? "1" : "0",
                                                localCorrect: t ? "1" : "0"
                                            }
                                        });
                                        const {ec_csr: r, ec_publicKey: i} = this._cryptObject || {};
                                        this.emit("log", {
                                            content: "generate keys info success fail",
                                            level: "info",
                                            extra: {
                                                csr: r || "",
                                                pub: i || "",
                                                cert: m || ""
                                            }
                                        })
                                    }
                                }
                            }
                            yield null == (l = this._storeSDK) ? void 0 : l.setItems(y, v),
                            null == (u = this.cookieOperate) || u.deleteAllCookie("tt_ticket_guard_server_data"),
                            b && (null == (h = this.cookieOperate) || h.deleteAllCookie("tt_ticket_guard_web_domain")),
                            this.emit("log", {
                                extra: {
                                    cookie: _,
                                    setCookie: (null == (d = this.cookieOperate) ? void 0 : d.getCookie("tt_ticket_guard_server_data")) || "",
                                    utf8Data: i
                                },
                                content: "process server cookie success",
                                level: "info"
                            });
                            const k = (null == (g = this.cookieOperate) ? void 0 : g.getCookie("tt_ticket_guard_server_data")) ? "0" : "1"
                              , S = (new Date).getTime();
                            this.emit("execute", {
                                action: "cookie",
                                op: "setItem",
                                status: "success",
                                duration: S > t ? S - t : 0,
                                ctx: {
                                    type: "server",
                                    deleteStatus: k
                                }
                            });
                            try {
                                null == (p = this.cookieOperate) || p.setCookieWithDomain("__security_server_data_status", "1"),
                                this.emit("execute", {
                                    action: "cookie",
                                    op: "process",
                                    status: "success"
                                })
                            } catch (e) {
                                this.emit("execute", {
                                    action: "cookie",
                                    op: "process",
                                    status: "fail"
                                }),
                                this.emit("log", {
                                    content: "set process server cookie error",
                                    level: "error"
                                })
                            }
                            this._hasProcessServerData = !0
                        } else
                            !_ && b && (null == (f = this.cookieOperate) || f.deleteAllCookie("tt_ticket_guard_web_domain"),
                            this.emit("log", {
                                content: "process_web_domain",
                                level: "info",
                                extra: {
                                    cookie: (null == document ? void 0 : document.cookie) || "",
                                    domain: (null == (m = this.cookieOperate) ? void 0 : m.getCookie("tt_ticket_guard_web_domain")) || ""
                                }
                            }));
                        return !0
                    } catch (e) {
                        this.emit("log", {
                            extra: {
                                cookie: null == document ? void 0 : document.cookie
                            },
                            content: "Process server Cookie Error",
                            level: "error"
                        }),
                        this.reportError(e, "process server cookie Error"),
                        this.emit("execute", {
                            action: "cookie",
                            op: "setItem",
                            status: "fail",
                            ctx: {
                                type: "server"
                            }
                        })
                    }
                    return !1
                }
                )),
                this._initCert = () => ct(this, null, (function*() {
                    var e, t, r, i, n;
                    try {
                        const {ec_privateKey: o, ec_publicKey: s, ec_csr: a} = this._getCertificatePem()
                          , c = yield null == (e = this._storeSDK) ? void 0 : e.getLocalItem(Ot);
                        return c && "string" == typeof c ? (this._cryptData = c,
                        this._cryptObject = JSON.parse(c),
                        this.cryptoSDK = new Kt({
                            privateKey: null == (t = this._cryptObject) ? void 0 : t.ec_privateKey,
                            publicKey: null == (r = this._cryptObject) ? void 0 : r.ec_publicKey
                        }),
                        this._initData = {
                            cryptCacheKey: c
                        },
                        this.emit("ready", {
                            action: "keys",
                            op: "init",
                            status: "fail",
                            ctx: {
                                type: "check"
                            }
                        }),
                        !0) : (this._cryptObject = {
                            ec_privateKey: o,
                            ec_publicKey: s,
                            ec_csr: a
                        },
                        this._cryptData = JSON.stringify(this._cryptObject),
                        yield null == (i = this._storeSDK) ? void 0 : i.setLocalItem(Ot, this._cryptData),
                        yield null == (n = this._storeSDK) ? void 0 : n.set(Ot, this._cryptData),
                        this._initData = {
                            cryptCacheKey: this._cryptData
                        },
                        !0)
                    } catch (e) {
                        return this.emit("load", {
                            action: "keys",
                            op: "init",
                            status: "fail"
                        }),
                        this.reportError(e, "init_cert_error"),
                        !1
                    }
                }
                )),
                this.getCertificate = e => ct(this, null, (function*() {
                    var t, r;
                    const {certType: i, scene: n} = e;
                    try {
                        yield this._checkCryptKeys(),
                        "cookie" === i && (yield this._initCookie(),
                        yield this._processServerCookie(n)),
                        yield null == (t = this.setSignValueScheduler) ? void 0 : t.wait();
                        const e = yield null == (r = this._storeSDK) ? void 0 : r.get(Dt);
                        return e ? (this.emit("log", {
                            extra: {
                                cert: e || ""
                            },
                            content: "Get Cert Success",
                            level: "info"
                        }),
                        lt(e)) : (this.emit("log", {
                            extra: {
                                cert: e || ""
                            },
                            content: "Get Cert Fail",
                            level: "info"
                        }),
                        !1)
                    } catch (e) {
                        this.reportError(e, "get cert fail")
                    }
                    return !1
                }
                )),
                this.getPubKey = () => ct(this, null, (function*() {
                    try {
                        yield this._checkCryptKeys();
                        const {ec_privateKey: e} = this._cryptObject || {};
                        if (e)
                            return pt(e)
                    } catch (e) {
                        this.reportError(e, "get pubkey error")
                    }
                    return ""
                }
                )),
                this.getCertSignRequest = () => ct(this, null, (function*() {
                    try {
                        yield this._checkCryptKeys();
                        const {ec_csr: e} = this._cryptObject || {};
                        return e ? lt(e) : ""
                    } catch (e) {
                        this.reportError(e, "get csr error")
                    }
                    return ""
                }
                )),
                this._signValueWithIframe = (e, t, r) => ct(this, null, (function*() {
                    var i, n, o;
                    try {
                        const s = JSON.parse(e)
                          , {client_cert: a} = s || {};
                        return this._disableStorageSignData || (yield null == (i = this._storeSDK) ? void 0 : i.set(`${Et}/${t}`, e)),
                        this._signData = e,
                        r && a && (yield null == (n = this._storeSDK) ? void 0 : n.set(`${Dt}`, a)),
                        this._storageNamespace && a && (yield null == (o = this._storeSDK) ? void 0 : o.set(`${Dt}`, a)),
                        !0
                    } catch (e) {
                        return this.reportError(e, "sign value error"),
                        !1
                    }
                }
                )),
                this.setSignValue = e => {
                    var t;
                    const {sign: r, scene: i, namespace: n} = e || {};
                    let o;
                    try {
                        if ("string" == typeof r)
                            o = dt(r);
                        else {
                            if ("object" != typeof r)
                                return !1;
                            o = JSON.stringify(r)
                        }
                        return null == (t = this.setSignValueScheduler) || t.provider(( () => this._signValueWithIframe(o, i, n))),
                        !0
                    } catch (e) {
                        return this.reportError(e, "set signValue Error"),
                        !1
                    }
                }
                ,
                this.setSignValueAsync = e => ct(this, null, (function*() {
                    const {sign: t, scene: r, namespace: i} = e || {};
                    let n;
                    try {
                        if ("string" == typeof t)
                            n = dt(t);
                        else {
                            if ("object" != typeof t)
                                return !1;
                            n = JSON.stringify(t)
                        }
                        return yield this._signValueWithIframe(n, r, i),
                        !0
                    } catch (e) {
                        return this.reportError(e, "set signValue Error"),
                        !1
                    }
                }
                )),
                this.clearSignData = e => ct(this, null, (function*() {
                    var t, r;
                    try {
                        return yield null == (t = this._storeSDK) ? void 0 : t.delete(`${Et}/${e}`),
                        this._signData = "",
                        this._storageNamespace && (yield null == (r = this._storeSDK) ? void 0 : r.delete(`${Dt}`)),
                        !0
                    } catch (e) {
                        return !1
                    }
                }
                )),
                this.sign = e => ct(this, null, (function*() {
                    var t, r, i;
                    const {sign_data: n, req_content: o, timestamp: s, certType: a="header", scene: c} = e;
                    try {
                        let e;
                        yield this._checkCryptKeys(),
                        "cookie" === a && (yield this._initCookie(),
                        yield this._processServerCookie(c || "")),
                        "header" === a && (yield null == (t = this.setSignValueScheduler) ? void 0 : t.wait()),
                        e = this._disableStorageSignData ? this._signData : yield null == (r = this._storeSDK) ? void 0 : r.get(`${Et}/${c}`);
                        const {ticket: l, ts_sign: u} = JSON.parse(e || "{}");
                        if (!n && !l)
                            return this.emit("log", {
                                extra: {
                                    content: "sign_data and ticket is null"
                                },
                                content: "sign data fail",
                                level: "info"
                            }),
                            "";
                        const h = null == (i = this.cryptoSDK) ? void 0 : i.sign(n || l)
                          , d = {
                            ts_sign: u,
                            req_content: o || n || l,
                            req_sign: ht(h || ""),
                            timestamp: s || Math.floor((new Date).getTime() / 1e3)
                        };
                        return this.emit("log", {
                            extra: {
                                content: JSON.stringify(d)
                            },
                            content: "sign data success",
                            level: "info"
                        }),
                        lt(JSON.stringify(d) || "")
                    } catch (e) {
                        this.emit("log", {
                            extra: {
                                sign_data: n || "",
                                req_content: o || "",
                                certType: a || "",
                                scene: c || ""
                            },
                            content: "sign data is error",
                            level: "error"
                        }),
                        this.reportError(e, "sign error")
                    }
                    return ""
                }
                )),
                this.pureSign = e => {
                    var t;
                    try {
                        const r = null == (t = this.cryptoSDK) ? void 0 : t.sign(e);
                        return ht(r || "")
                    } catch (e) {
                        return this.reportError(e, "pure sign fail"),
                        ""
                    }
                }
                ,
                this.getTSSign = e => ct(this, null, (function*() {
                    var t, r;
                    const {certType: i="header", scene: n} = e;
                    try {
                        let e;
                        if (yield this._checkCryptKeys(),
                        "cookie" === i && (yield this._initCookie(),
                        yield this._processServerCookie(n)),
                        "header" === i && (yield null == (t = this.setSignValueScheduler) ? void 0 : t.wait()),
                        this._disableStorageSignData)
                            e = this._signData;
                        else if (e = yield null == (r = this._storeSDK) ? void 0 : r.get(`${Et}/${n}`),
                        !e)
                            return this.emit("log", {
                                extra: {
                                    content: e || ""
                                },
                                content: "get tssign fail",
                                level: "info"
                            }),
                            !1;
                        const {ts_sign: o} = JSON.parse(e || "{}");
                        return this.emit("log", {
                            extra: {
                                content: o || ""
                            },
                            content: "get tssign success",
                            level: "info"
                        }),
                        o
                    } catch (e) {
                        this.reportError(e, "get ts sign Error")
                    }
                    return !1
                }
                )),
                this.getTicket = e => ct(this, null, (function*() {
                    var t, r;
                    const {certType: i, scene: n} = e;
                    try {
                        let e;
                        if (yield this._checkCryptKeys(),
                        "cookie" === i ? (yield this._initCookie(),
                        yield this._processServerCookie(n)) : "header" === i && (yield null == (t = this.setSignValueScheduler) ? void 0 : t.wait()),
                        this._disableStorageSignData)
                            e = this._signData;
                        else if (e = yield null == (r = this._storeSDK) ? void 0 : r.get(`${Et}/${n}`),
                        !e)
                            return this.emit("log", {
                                content: "Get Ticket Fail",
                                level: "error"
                            }),
                            !1;
                        const {ticket: o} = JSON.parse(e || "{}") || {};
                        return this.emit("log", {
                            extra: {
                                storage_sign_data: e || "",
                                ticket: o || ""
                            },
                            content: "Get Ticket Success",
                            level: "info"
                        }),
                        o
                    } catch (e) {
                        return this.reportError(e, "Get Ticket Error"),
                        !1
                    }
                }
                )),
                this._getCertificatePem = () => {
                    var e, t;
                    const r = (new Date).getTime();
                    this.cryptoSDK = new Kt({});
                    const {publicKey: i="", privateKey: n=""} = (null == (e = this.cryptoSDK) ? void 0 : e.getKeys()) || {}
                      , o = null == (t = this.cryptoSDK) ? void 0 : t.getCSR()
                      , s = (new Date).getTime();
                    return console.log("generate keys use ", s - r + "ms"),
                    this.emit("load", {
                        action: "keys",
                        op: "init",
                        duration: s > r ? s - r : 0,
                        status: "success",
                        ctx: {
                            pri: n ? "1" : "0",
                            pub: i ? "1" : "0"
                        }
                    }),
                    {
                        ec_publicKey: i,
                        ec_privateKey: n,
                        ec_csr: o
                    }
                }
                ,
                this._checkCert = e => {
                    try {
                        const {ec_publicKey: t} = this._cryptObject || {};
                        if (!e || !t)
                            return !0;
                        const r = gt(e);
                        return r && t !== r ? (this.emit("log", {
                            extra: {
                                message: "Cert Fail Delete",
                                localCert: e || "",
                                ec_publicKey: t || ""
                            },
                            content: "Cert Fail Delete",
                            level: "error"
                        }),
                        this.emit("ready", {
                            action: "cert",
                            op: "check",
                            status: "fail"
                        }),
                        !1) : (this.emit("ready", {
                            action: "cert",
                            op: "check",
                            status: "success"
                        }),
                        !0)
                    } catch (e) {
                        this.emit("ready", {
                            action: "cert",
                            op: "check",
                            status: "fail"
                        }),
                        this.reportError(e, "Check Cert fail")
                    }
                    return !0
                }
                ,
                this.refresh = () => ct(this, null, (function*() {
                    var e, t;
                    return this._cryptData = void 0,
                    this._cryptObject = void 0,
                    this._signData = void 0,
                    yield null == (e = this._storeSDK) ? void 0 : e.delete(Ot),
                    yield null == (t = this._storeSDK) ? void 0 : t.delete(Dt),
                    this._storeSDK = void 0,
                    this.start()
                }
                )),
                this.reportError = (e, t, r, i, n) => {
                    try {
                        if (this.emit("error", {
                            error: e,
                            name: t
                        }),
                        r && i) {
                            const e = Array.isArray(n) && n.length > 0 && n[0];
                            if ("string" == typeof e)
                                this.emit("log", {
                                    content: "report error",
                                    extra: {
                                        key: e || ""
                                    },
                                    level: "error"
                                });
                            else if (e && Array.isArray(e)) {
                                const t = {};
                                e.forEach((e => {
                                    t[`${e.replace(/\//g, "_")}`] = "1"
                                }
                                )),
                                this.emit("log", {
                                    content: "report error",
                                    extra: at({}, t || {}),
                                    level: "error"
                                })
                            }
                        }
                    } catch (e) {
                        this.emit("error", {
                            error: e,
                            name: "report error"
                        })
                    }
                }
                ,
                this.getKeysInfo = e => ct(this, null, (function*() {
                    var t, r;
                    const {certType: i, scene: n} = e;
                    try {
                        yield this._checkCryptKeys(),
                        "cookie" === i ? (yield this._initCookie(),
                        yield this._processServerCookie(n)) : "header" === i && (yield null == (t = this.setSignValueScheduler) ? void 0 : t.wait());
                        const e = [Ot, Dt, `${Et}/${n}`]
                          , o = yield null == (r = this._storeSDK) ? void 0 : r.getItems(e);
                        if (!o)
                            return this.emit("log", {
                                content: "Get Keys Info Fail",
                                level: "error"
                            }),
                            {};
                        const s = o[Ot]
                          , a = o[Dt]
                          , c = o[`${Et}/${n}`]
                          , l = JSON.parse(s || "{}")
                          , {ec_privateKey: u, ec_publicKey: h, ec_csr: d} = l || {}
                          , {ticket: g, ts_sign: p, client_cert: f} = JSON.parse(c || "{}") || {};
                        return this.emit("log", {
                            extra: {
                                server_data: c || "",
                                cert_data: a || "",
                                csr: d || ""
                            },
                            content: "Get Keys Info Success",
                            level: "info"
                        }),
                        {
                            crypt: {
                                ec_privateKey: u,
                                ec_publicKey: h
                            },
                            cert: a,
                            sign: {
                                ticket: g,
                                ts_sign: p,
                                client_cert: f
                            },
                            b64Cert: lt(a || ""),
                            b64PubKey: dt(h || ""),
                            b64Csr: lt(d || "")
                        }
                    } catch (e) {
                        this.reportError(e, "Get Ticket Fail")
                    }
                    return {}
                }
                )),
                this.getKeysInfoWithOrigin = e => ct(this, null, (function*() {
                    var t, r;
                    ;
                    const {certType: i, scene: n, namespace: o} = e;
                    try {
                        yield this._checkCryptKeys(),
                        "cookie" === i ? (yield this._initCookie(),
                        yield this._processServerCookie(n)) : "header" === i && (yield null == (t = this.setSignValueScheduler) ? void 0 : t.wait());
                        const e = [Ot, Dt, `${Et}/${n}`]
                          , o = yield null == (r = this._storeSDK) ? void 0 : r.getItemsWithOrigin(e);
                        
                        if (!o)
                            return this.emit("log", {
                                content: "Get Keys Info Fail",
                                level: "error"
                            }),
                            {};
                        const {data: s={}, from: a="0"} = o || {}
                          , c = Object.values(s)
                          , l = s[Ot]
                          , u = s[Dt]
                          , h = s[`${Et}/${n}`]
                          , {value: d=""} = l || {}
                          , g = JSON.parse(d || "{}")
                          , {ec_privateKey: p, ec_publicKey: f, ec_csr: m} = g || {}
                          , y = (null == h ? void 0 : h.value) || ""
                          , v = (null == u ? void 0 : u.value) || ""
                          , {ticket: _, ts_sign: b, client_cert: k} = JSON.parse(y || "{}") || {}
                          , S = pt(p) || "";
                        return this.emit("log", {
                            extra: {
                                server_data: y || "",
                                cert_data: v || "",
                                b64PubKey: S
                            },
                            content: "Get Keys Info Success",
                            level: "info"
                        }),
                        {
                            crypt: {
                                ec_privateKey: p,
                                ec_publicKey: f
                            },
                            cryptData: d,
                            cert: v,
                            sign: {
                                ticket: _,
                                ts_sign: b,
                                client_cert: k
                            },
                            b64Cert: lt(v || ""),
                            b64PubKey: S,
                            b64Csr: lt(m || ""),
                            serverData: y,
                            dataFrom: a,
                            items: c
                        }
                    } catch (e) {
                        this.reportError(e, "Get Ticket catch")
                    }
                    return {}
                }
                )),
                this.signWithKeysInfo = e => ct(this, null, (function*() {
                    var t, r, i, n;
                    const {sign_data: o, req_content: s, timestamp: a, certType: c, scene: l, keysInfo: u} = e;
                    try {
                        yield this._checkCryptKeys(),
                        "cookie" === c && (yield this._initCookie(),
                        yield this._processServerCookie(l || "")),
                        "header" === c && (yield null == (t = this.setSignValueScheduler) ? void 0 : t.wait());
                        const {sign: e, crypt: i} = u;
                        if (!e)
                            return this.emit("log", {
                                content: "sign data fail",
                                level: "info",
                                extra: {
                                    content: "sign data is null"
                                }
                            }),
                            "";
                        const {ticket: n, ts_sign: h} = e || {};
                        if (!o && !n)
                            return this.emit("log", {
                                content: "sign data fail",
                                level: "info",
                                extra: {
                                    content: "sign data and ticket is null"
                                }
                            }),
                            "";
                        const {ec_privateKey: d, ec_publicKey: g} = i || {};
                        this.cryptoSDK = new Kt({
                            privateKey: d,
                            publicKey: g
                        });
                        const p = null == (r = this.cryptoSDK) ? void 0 : r.sign(o || n)
                          , f = {
                            ts_sign: h,
                            req_content: s || o || n,
                            req_sign: ht(p || ""),
                            timestamp: a || Math.floor((new Date).getTime() / 1e3)
                        };
                        return this.emit("log", {
                            extra: {
                                content: JSON.stringify(f)
                            },
                            content: "sign data success",
                            level: "info"
                        }),
                        lt(JSON.stringify(f) || "")
                    } catch (e) {
                        this.emit("log", {
                            extra: {
                                sign_data: o || "",
                                req_content: s || "",
                                certType: c || "",
                                scene: l || "",
                                csr: (null == (i = null == u ? void 0 : u.crypt) ? void 0 : i.ec_csr) || "",
                                cert: u.cert || "",
                                sign: (null == (n = u.sign) ? void 0 : n.ticket) || ""
                            },
                            content: "sign data with keys Info is error",
                            level: "error"
                        }),
                        this.reportError(e, "sign error")
                    }
                    return ""
                }
                )),
                this.setKeysAndValues = (e, t) => {
                    var r;
                    let i = ""
                      , n = ""
                      , o = "";
                    null == (r = this._storeSDK) || r.setItems(e, t, 2).then((r => {
                        var s, a;
                        e.forEach(( (e, r) => {
                            const s = t[r];
                            e === Ot ? i = s : e === Dt ? n = s : e === `${Et}/web_protect` && (o = s)
                        }
                        ));
                        const c = vt(i, n, o);
                        c && (null == (s = this.cookieOperate) || s.setCookieWithDomain(xt, c)),
                        this.emit("log", {
                            extra: {
                                md5: c,
                                md5Cookie: (null == (a = this.cookieOperate) ? void 0 : a.getCookie(xt)) || ""
                            },
                            content: "generate crypt key success sign success",
                            level: "info"
                        })
                    }
                    )).catch((e => {
                        this.emit("error", {
                            error: e,
                            name: "update keys when sign error"
                        })
                    }
                    ))
                }
                ,
                this.b642str = e => dt(e),
                this.getIframeStatus = () => {
                    var e;
                    return null == (e = this._storeSDK) ? void 0 : e.getIframeStatus()
                }
                ,
                this.getCookieCryptStatus = () => {
                    var e;
                    return !!(null == (e = this.cookieOperate) ? void 0 : e.getCookie(xt))
                }
                ,
                this.getStorageStatus = () => {
                    var e;
                    return null == (e = this._storeSDK) ? void 0 : e.getStorageStatus()
                }
                ,
                this.checkSignData = e => ct(this, null, (function*() {
                    var t, r;
                    try {
                        const i = (null == (t = this.cookieOperate) ? void 0 : t.getCookie(xt)) || "";
                        if (!i)
                            return {
                                match_md5_local: "-99",
                                match_md5_iframe: "-99"
                            };
                        const {cryptData: n, cert: o, serverData: s, dataFrom: a} = e || {}
                          , c = yt(i, n, o, s)
                          , l = this._getInitKeys()
                          , u = yield null == (r = this._storeSDK) ? void 0 : r.getLocalItems(l);
                        return {
                            match_md5_local: yt(i, null == u ? void 0 : u[Ot], null == u ? void 0 : u[Dt], null == u ? void 0 : u[`${Et}/web_protect`]) ? "1" : "-99",
                            match_md5_iframe: c ? "1" : "-99"
                        }
                    } catch (e) {
                        this.emit("error", {
                            error: e,
                            name: "check sign data error"
                        })
                    }
                    return {
                        match_md5_local: "-99",
                        match_md5_iframe: "-99"
                    }
                }
                )),
                this.isTopBrowser = () => N(),
                this.initConfig = e,
                this.setSignValueScheduler = new kt,
                this._initData = {},
                this._hasProcessServerData = !1,
                this.initMatch = !1
            }
        }
          , Pt = e => decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
          , Lt = () => {
            const e = null == window ? void 0 : window.navigator.userAgent;
            return /TTElectron/.test(e) ? "electron" : "web"
        }
          , jt = Object.defineProperty
          , Bt = Object.defineProperties
          , Rt = Object.getOwnPropertyDescriptors
          , $t = Object.getOwnPropertySymbols
          , At = Object.prototype.hasOwnProperty
          , Nt = Object.prototype.propertyIsEnumerable
          , Mt = (e, t, r) => t in e ? jt(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r
          , qt = (e, t) => {
            for (var r in t || (t = {}))
                At.call(t, r) && Mt(e, r, t[r]);
            if ($t)
                for (var r of $t(t))
                    Nt.call(t, r) && Mt(e, r, t[r]);
            return e
        }
          , Ut = (e, t) => Bt(e, Rt(t))
          , Ht = (e, t, r) => new Promise(( (i, n) => {
            var o = e => {
                try {
                    a(r.next(e))
                } catch (e) {
                    n(e)
                }
            }
              , s = e => {
                try {
                    a(r.throw(e))
                } catch (e) {
                    n(e)
                }
            }
              , a = e => e.done ? i(e.value) : Promise.resolve(e.value).then(o, s);
            a((r = r.apply(e, t)).next())
        }
        ))
          , Wt = 18e6
          , Jt = {}
          , Vt = !1
          , Ft = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        function zt(e) {
            const t = {};
            let r, i, n;
            return e ? (e.split("\n").forEach((e => {
                if (n = e.indexOf(":"),
                r = e.substr(0, n).trim().toLowerCase(),
                i = e.substr(n + 1).trim(),
                r) {
                    if (t[r] && Ft.indexOf(r) >= 0)
                        return;
                    t[r] = "set-cookie" === r ? (t[r] ? t[r] : []).concat([i]) : t[r] ? t[r] + ", " + i : i
                }
            }
            )),
            t) : t
        }
        var Gt = e => {
            try {
                if (!e)
                    return "";
                if (e.startsWith("http"))
                    return new URL(e).pathname
            } catch (e) {}
            return e
        }
          , Xt = e => !e || e.startsWith("ts.1")
          , Yt = e => !!e && "string" == typeof e && -1 !== e.indexOf("pub.")
          , Qt = e => "number" == typeof e ? e.toString() : "-99"
          , Zt = (e, t, r, i) => {
            try {
                if (!t)
                    return {
                        needProxy: !1
                    };
                const {url: n} = e || {};
                if (!n)
                    return {
                        needProxy: !1
                    };
                let o, s, a, c = !1;
                return Object.keys(t).forEach((e => {
                    const r = t[e];
                    Array.isArray(r) && r.forEach((e => {
                        const {providerPathList: t=[], consumerPathList: r=[]} = e || {};
                        if (t.length > 0 && !o)
                            for (let r = 0; r < t.length; r++) {
                                const i = t[r]
                                  , s = new RegExp(i);
                                if (n.match(s)) {
                                    c = !0,
                                    o = e,
                                    a = i;
                                    break
                                }
                            }
                        if (r.length > 0 && !s)
                            for (let t = 0; t < r.length; t++) {
                                const i = r[t]
                                  , o = new RegExp(i);
                                if (n.match(o)) {
                                    c = !0,
                                    s = e,
                                    a = i;
                                    break
                                }
                            }
                    }
                    ))
                }
                )),
                {
                    needProxy: c,
                    providerConfig: o,
                    consumerConfig: s,
                    url: a,
                    signType: r,
                    initType: i
                }
            } catch (e) {
                return {
                    needProxy: !1
                }
            }
        }
          , er = (e, t, r, i) => Ht(void 0, null, (function*() {
            try {
                const {headers: n} = e || {}
                  , {crypt: o} = t;
                if (!n)
                    return Promise.resolve(e);
                if ("string" == typeof n)
                    return Promise.resolve(e);
                const s = Date.now()
                  , {needProxy: a, consumerConfig: c, providerConfig: l, url: u, signType: h="pubKey", initType: d="pubKey"} = r
                  , {scene: g="", certType: p="header", signTimeout: f, namespace: m} = c || l || {}
                  , y = Boolean(l);
                if (a && o) {
                    let t = !1;
                    const r = yield null == o ? void 0 : o.getKeysInfoWithOrigin({
                        certType: p,
                        scene: g,
                        namespace: m
                    })
                      , {match_md5_iframe: n, match_md5_local: a} = yield null == o ? void 0 : o.checkSignData(r)
                      , {ec_publicKey: v, ec_csr: _} = (null == r ? void 0 : r.crypt) || {}
                      , {ticket: b, ts_sign: k} = (null == r ? void 0 : r.sign) || {}
                      , {cert: S, b64Cert: w, dataFrom: C, b64PubKey: K, b64Csr: I} = r || {};
                    let O, D = "0";
                    const E = null == o ? void 0 : o.getCookieCryptStatus();
                    if (b || k || !E || (D = "1"),
                    b && v && c && u) {
                        f && (Vt || (Wt = f),
                        Vt = !0);
                        const n = ( (e, t) => {
                            try {
                                const r = Jt[e];
                                if (!r)
                                    return "";
                                const {timeout: i, signStr: n, ticket: o} = r;
                                if (o !== t)
                                    return "";
                                if ((new Date).getTime() >= i)
                                    return "";
                                if (n)
                                    return n
                            } catch (e) {
                                console.log(e)
                            }
                            return ""
                        }
                        )(u, b);
                        if (n)
                            O = n,
                            t = !0;
                        else {
                            const {req_content: t, sign_data: n, timestamp: s} = ( (e, t, r, i) => {
                                try {
                                    const {url: i} = e || {};
                                    if (!i)
                                        return {
                                            req_content: "",
                                            sign_data: ""
                                        };
                                    const n = Math.floor((new Date).getTime() / 1e3)
                                      , o = new URL(i,window.location.href)
                                      , {pathname: s} = o || {};
                                    let a = s;
                                    return r && r.length > 0 && r.forEach((e => {
                                        if (e instanceof Array && e.length > 1) {
                                            const t = e[0]
                                              , r = e[1]
                                              , n = new RegExp(t);
                                            i.match(n) && (a = r)
                                        }
                                    }
                                    )),
                                    {
                                        req_content: "ticket,path,timestamp",
                                        sign_data: `ticket=${t}&path=${a}&timestamp=${n}`,
                                        timestamp: n
                                    }
                                } catch (e) {
                                    return null == i || i.reportError({
                                        error: e,
                                        name: "request process sign data fail"
                                    }),
                                    {
                                        req_content: "",
                                        sign_data: ""
                                    }
                                }
                            }
                            )(e, b, (null == c ? void 0 : c.urlRewriteRules) || [], i);
                            O = yield null == o ? void 0 : o.signWithKeysInfo({
                                sign_data: n,
                                req_content: t,
                                timestamp: s,
                                certType: p,
                                scene: g,
                                keysInfo: r
                            }),
                            O && (( (e, t, r) => {
                                try {
                                    const i = (new Date).getTime()
                                      , n = {
                                        timeout: i + Wt,
                                        signStr: r,
                                        ticket: t,
                                        createTime: i
                                    };
                                    Jt[e] = n
                                } catch (e) {
                                    console.log(e)
                                }
                            }
                            )(u, b, O),
                            i.reportLog({
                                extra: {
                                    content: O,
                                    url: u,
                                    ticket: b
                                },
                                content: "set cache data success",
                                level: "info"
                            }))
                        }
                    }
                    let x = {};
                    x = y ? "pubKey" === d ? {
                        "tt-ticket-guard-public-key": K,
                        "tt-ticket-guard-web-version": 1
                    } : w ? {
                        "tt-ticket-guard-client-cert": w || ""
                    } : {
                        "tt-ticket-guard-client-csr": I || ""
                    } : Xt(k || "") && "pubKey" === h || Yt(S) ? {
                        "tt-ticket-guard-public-key": K,
                        "tt-ticket-guard-web-version": 1
                    } : w ? {
                        "tt-ticket-guard-client-cert": w || ""
                    } : {
                        "tt-ticket-guard-client-csr": I || ""
                    },
                    e.headers = Ut(qt(qt({}, e.headers), x), {
                        "tt-ticket-guard-version": (null == c ? void 0 : c.signVersion) || (null == l ? void 0 : l.signVersion) || 1,
                        "tt-ticket-guard-iteration-version": 0
                    }),
                    O && (e.headers = Ut(qt({}, null == e ? void 0 : e.headers), {
                        "tt-ticket-guard-client-data": O
                    }));
                    const T = Date.now();
                    i.reportLog({
                        extra: {
                            content: JSON.stringify(e),
                            time: (new Date).getTime()
                        },
                        content: "process request config ",
                        level: "info"
                    });
                    const P = null == o ? void 0 : o.getStorageStatus()
                      , {isConnection: L, retryCount: j, startTime: B, endTime: R, loadTime: $} = P || {};
                    i.reportEvent({
                        action: "request",
                        op: "sign",
                        duration: T > s ? T - s : 0,
                        status: "success",
                        ctx: {
                            cache: t ? "1" : "0",
                            path: u || "",
                            cert: S ? "1" : "0",
                            pubKey: v ? "1" : "0",
                            isPubKeySign: Xt(k || "") ? "1" : "0",
                            isPubKeyInit: "pubKey" === d ? "1" : "0",
                            csr: _ ? "1" : "0",
                            version: `${(null == c ? void 0 : c.signVersion) || ""}` || `${(null == l ? void 0 : l.signVersion) || ""}` || "1",
                            server: O ? "1" : "0",
                            crossStatus: (null == o ? void 0 : o.getIframeStatus()) ? "1" : "0",
                            initMatch: (null == o ? void 0 : o.initMatch) ? "1" : "0",
                            dataFrom: C || "-99",
                            match_md5_local: a || "-99",
                            match_md5_iframe: n || "-99",
                            lost: D,
                            isNewCert: Yt(S) ? "1" : "0",
                            isConnection: Qt(L),
                            retryCount: Qt(j)
                        },
                        metrics: {
                            startTime: B || 0,
                            endTime: R || 0,
                            loadTime: $ || 0
                        }
                    }),
                    e.extras = Ut(qt({}, r || {}), {
                        process_request_duration: T - s,
                        scene: g,
                        certType: p,
                        match_md5_iframe: n,
                        match_md5_local: a,
                        is_pubkey_ts_sign: Xt(k || "") ? "1" : "0",
                        is_new_cert: Yt(S) ? "1" : "0",
                        lost: D,
                        isPubKeyInit: "pubKey" === d ? "1" : "0"
                    })
                }
            } catch (t) {
                i.reportError({
                    error: t,
                    name: "process request config fail"
                }),
                i.reportLog({
                    content: "process request config fail",
                    extra: {
                        content: JSON.stringify(e)
                    }
                }),
                i.reportEvent({
                    action: "request",
                    op: "sign",
                    status: "fail",
                    ctx: {
                        path: (null == e ? void 0 : e.url) || ""
                    }
                })
            }
            return Promise.resolve(e)
        }
        ))
          , tr = (e, t, r, i, n, o) => Ht(void 0, null, (function*() {
            var n, s, a, c, l, u, h, d, g, p, f;
            try {
                const {crypt: g} = t;
                if (!(null == (n = null == e ? void 0 : e.config) ? void 0 : n.headers))
                    return e;
                if ("string" == typeof (null == (s = null == e ? void 0 : e.config) ? void 0 : s.headers))
                    return e;
                const {extras: p={}} = (null == e ? void 0 : e.config) || {}
                  , {dataFrom: m, match_md5_local: y, match_md5_iframe: v, is_pubkey_ts_sign: _, is_new_cert: b, lost: k, isPubKeyInit: S} = p || {}
                  , w = null == g ? void 0 : g.getStorageStatus()
                  , {isConnection: C, retryCount: K, startTime: I, endTime: O, loadTime: D} = w || {};
                (null == e ? void 0 : e.reqHeaders) && (null == (a = null == e ? void 0 : e.reqHeaders) ? void 0 : a["tt-ticket-guard-version"]) && o.reportEvent({
                    action: "response",
                    op: "sign",
                    status: "finish",
                    ctx: {
                        url: Gt(null == e ? void 0 : e.config.url) || "",
                        crossStatus: (null == g ? void 0 : g.getIframeStatus()) ? "1" : "0",
                        lost: k,
                        dataFrom: m || "-99",
                        match_md5_local: y,
                        match_md5_iframe: v,
                        initMatch: (null == g ? void 0 : g.initMatch) ? "1" : "0",
                        isConnection: Qt(C),
                        retryCount: Qt(K),
                        is_pubkey_ts_sign: _,
                        is_new_cert: b,
                        isPubKeyInit: S
                    },
                    metrics: {
                        startTime: I || 0,
                        endTime: O || 0,
                        loadTime: D || 0
                    },
                    extras: e
                });
                const x = Date.now()
                  , {needProxy: T, providerConfig: P, signType: L="pubKey"} = r
                  , {scene: j, namespace: B} = P || {};
                if (T && g) {
                    const n = (null == (c = null == e ? void 0 : e.headers) ? void 0 : c["tt-ticket-guard-server-data"]) || ""
                      , s = (null == (l = null == e ? void 0 : e.headers) ? void 0 : l["tt-ticket-guard-result"]) || "-99"
                      , a = n && (null == g ? void 0 : g.b642str(n))
                      , w = a && JSON.parse(a).tickets[0]
                      , {ticket: T} = w || {};
                    T && j && B ? yield null == g ? void 0 : g.setSignValueAsync({
                        sign: w,
                        scene: j,
                        namespace: B
                    }) : T && j && (null == g || g.setSignValue({
                        sign: w,
                        scene: j
                    }));
                    const P = ( (e, t, r, i, n, o, s) => {
                        var a, c, l, u, h;
                        try {
                            const {crypt: o} = i
                              , {certType: s, items: d=[]} = t || {}
                              , g = {}
                              , p = []
                              , f = []
                              , m = (null == (a = null == r ? void 0 : r.reqHeaders) ? void 0 : a["tt-ticket-guard-client-data"]) ? "1" : "0"
                              , {url: y} = (null == r ? void 0 : r.config) || {};
                            if ("header" === s)
                                return {};
                            if ("cookie" === s && (d && Array.isArray(d) && d.forEach((e => {
                                const {key: t, value: r, from: i, origin: n} = e || {};
                                g[`${t.replace(/\//g, "_")}_origin`] = n || "",
                                g[`${t.replace(/\//g, "_")}_from`] = i || "-99",
                                g[`${t.replace(/\//g, "_")}_status`] = r ? "success" : "success_null",
                                r && (p.push(t),
                                f.push(r))
                            }
                            )),
                            "-99" === e && n && y)) {
                                const e = ["/aweme/v1/web/commit/item/digg", "/aweme/v1/web/commit/follow/user", "/aweme/v1/web/comment/publish", "/web/api/media/aweme/create"];
                                for (let t = 0; t < e.length; t++) {
                                    const r = e[t]
                                      , i = new RegExp(r);
                                    if (y.match(i)) {
                                        p.length > 0 && o.setKeysAndValues(p, f);
                                        break
                                    }
                                }
                            }
                            const v = (null == (c = null == r ? void 0 : r.reqHeaders) ? void 0 : c["tt-ticket-guard-version"]) || "-99"
                              , _ = (null == (l = null == r ? void 0 : r.reqHeaders) ? void 0 : l["tt-ticket-guard-iteration-version"]) || "-99"
                              , b = (null == (u = null == r ? void 0 : r.reqHeaders) ? void 0 : u["tt-ticket-guard-client-csr"]) ? "1" : "0"
                              , k = (null == (h = null == r ? void 0 : r.reqHeaders) ? void 0 : h["tt-ticket-guard-client-cert"]) ? "1" : "0";
                            return qt(qt({}, {
                                csr: b,
                                cert: k,
                                server: m,
                                version: v,
                                iterVersion: _
                            }), g)
                        } catch (e) {
                            s.reportError({
                                error: e,
                                name: "process Request Header Error"
                            })
                        }
                        return {}
                    }
                    )(s, p, e, t, i, 0, o)
                      , L = Date.now();
                    o.reportEvent({
                        action: "response",
                        op: "init",
                        status: "success",
                        duration: L > x ? L - x : 0,
                        ctx: qt({
                            url: Gt(null == e ? void 0 : e.config.url) || "",
                            crossStatus: (null == g ? void 0 : g.getIframeStatus()) ? "1" : "0",
                            lost: k,
                            verify: s,
                            dataFrom: m || "-99",
                            match_md5_local: y,
                            match_md5_iframe: v,
                            server: n ? "1" : "0",
                            client: (null == p ? void 0 : p.serverData) ? "1" : "0",
                            isConnection: Qt(C),
                            retryCount: Qt(K),
                            initMatch: (null == g ? void 0 : g.initMatch) ? "1" : "0",
                            isNewCert: b,
                            isPubkeyTssign: _,
                            isPubKeyInit: S
                        }, P || {}),
                        metrics: {
                            startTime: I || 0,
                            endTime: O || 0,
                            loadTime: D || 0
                        }
                    }),
                    function(e, t) {
                        var r;
                        E("tt_ticket_guard_web_full_path", {
                            request_method: e.config.method,
                            request_url: e.config.url,
                            request_path: e.config.path,
                            has_client_data: Boolean(e.reqHeaders["tt-ticket-guard-client-data"]),
                            ticket_name: t,
                            result: null !== (r = e.headers["tt-ticket-guard-result"]) && void 0 !== r ? r : "0",
                            logid: e.headers["x-tt-logid"],
                            zti_response_header: JSON.stringify({
                                "tt-ticket-guard-result": e.headers["tt-ticket-guard-result"],
                                "tt-ticket-guard-server-data": e.headers["tt-ticket-guard-server-data"]
                            }),
                            zti_request_header: JSON.stringify({
                                "tt-ticket-guard-client-data": e.reqHeaders["tt-ticket-guard-client-data"],
                                "tt-ticket-guard-public-key": e.reqHeaders["tt-ticket-guard-public-key"],
                                "tt-ticket-guard-web-version": e.reqHeaders["tt-ticket-guard-web-version"],
                                "tt-ticket-guard-iteration-version": e.reqHeaders["tt-ticket-guard-iteration-version"],
                                "tt-ticket-guard-version": e.reqHeaders["tt-ticket-guard-version"]
                            })
                        })
                    }(e, T || (null == (h = null == (u = e.config.extras) ? void 0 : u.sign) ? void 0 : h.ticket)),
                    f = {
                        process_request_duration: null == (d = e.config.extras) ? void 0 : d.process_request_duration,
                        process_response_duration: L - x,
                        sign_type: r.signType || "",
                        store_type: g.storeType || ""
                    },
                    E("tt_ticket_guard_web_performance", f)
                }
                return e
            } catch (t) {
                o.reportEvent({
                    action: "response",
                    op: "init",
                    status: "fail",
                    ctx: {
                        server: (null == (g = null == e ? void 0 : e.headers) ? void 0 : g["tt-ticket-guard-server-data"]) ? "1" : "0",
                        client: (null == (p = null == e ? void 0 : e.config) ? void 0 : p.serverData) ? "1" : "0",
                        url: Gt(null == e ? void 0 : e.config.url) || ""
                    }
                }),
                o.reportError({
                    error: t,
                    name: "get sign data error in response"
                })
            }
            return e
        }
        ))
          , rr = "fetch"in window
          , ir = "Request"in window
          , nr = "Headers"in window
          , or = class extends B {
            constructor(e) {
                super(),
                this.config = {},
                this.updateData = !1,
                this.login = !1,
                this.signType = "pubKey",
                this.initType = "pubKey",
                this.nativeXMLHttpRequestOpen = window.XMLHttpRequest.prototype.open,
                this.nativeXMLHttpRequestSend = window.XMLHttpRequest.prototype.send,
                this.nativeXMLHttpRequestSetRequestHeader = window.XMLHttpRequest.prototype.setRequestHeader,
                this.nativeFetch = window.fetch,
                this.setType = e => {
                    const {initType: t="pubKey", signType: r="pubKey"} = e;
                    this.signType = r,
                    this.initType = t
                }
                ,
                this.setConfig = e => {
                    this.config = e
                }
                ,
                this.setUpdateDataWhenVerifySuccess = e => {
                    this.updateData = e
                }
                ,
                this.setLogin = e => {
                    this.login = e
                }
                ,
                this.reportEvent = e => {
                    this.emit("execute", e)
                }
                ,
                this.reportError = e => {
                    this.emit("error", e)
                }
                ,
                this.reportLog = e => {
                    this.emit("log", e)
                }
                ,
                this.params = e,
                console.log("patch fetch"),
                this.monkeyPatchXMLHttpRequest(),
                this.monkeyPatchFetch()
            }
            monkeyPatchXMLHttpRequest() {
                const e = this;
                XMLHttpRequest.prototype.open = function() {
                    this.secureOpenArgs = arguments,
                    e.nativeXMLHttpRequestOpen.apply(this, arguments)
                }
                ,
                XMLHttpRequest.prototype.send = function() {
                    var t;
                    const {secureOpenArgs: r} = this
                      , i = arguments
                      , n = r[0] || "GET"
                      , o = new URL(r[1],window.location.href)
                      , s = o.toString()
                      , a = Zt({
                        method: n,
                        url: s,
                        headers: {},
                        path: o.pathname
                    }, e.config, e.signType || "pubKey", e.initType || "pubKey")
                      , {needProxy: c} = a || {};
                    if (!c)
                        return e.nativeXMLHttpRequestSend.apply(this, i);
                    const l = {};
                    let u = {};
                    const h = this.onreadystatechange
                      , d = "onreadystatechange"in this && "function" == typeof h;
                    if (this.onreadystatechange = d ? (...t) => Ht(this, null, (function*() {
                        if (4 === this.readyState && "getAllResponseHeaders"in this && "function" == typeof this.getAllResponseHeaders && c) {
                            const t = zt(this.getAllResponseHeaders());
                            yield tr({
                                config: {
                                    method: n,
                                    url: s,
                                    headers: {},
                                    extras: u,
                                    path: o.pathname
                                },
                                headers: t || {},
                                reqHeaders: l
                            }, e.params, a, e.updateData, e.login, {
                                reportEvent: e.reportEvent,
                                reportError: e.reportError,
                                reportLog: e.reportLog
                            })
                        }
                        return h.apply(this, t)
                    }
                    )) : (...t) => Ht(this, null, (function*() {
                        if (4 === this.readyState && "getAllResponseHeaders"in this && "function" == typeof this.getAllResponseHeaders && c) {
                            const t = zt(this.getAllResponseHeaders());
                            yield tr({
                                config: {
                                    method: n,
                                    url: s,
                                    path: o.pathname,
                                    headers: {},
                                    extras: u
                                },
                                headers: t || {},
                                reqHeaders: l
                            }, e.params, a, e.updateData, e.login, {
                                reportEvent: e.reportEvent,
                                reportError: e.reportError,
                                reportLog: e.reportLog
                            })
                        }
                    }
                    )),
                    r.length >= 3 && !r[2])
                        return e.nativeXMLHttpRequestSend.apply(this, i);
                    null == (t = er) || t({
                        method: n,
                        url: s,
                        headers: {},
                        path: o.pathname
                    }, e.params, a, {
                        reportEvent: e.reportEvent,
                        reportError: e.reportError,
                        reportLog: e.reportLog
                    }).then((t => {
                        const {headers: r={}, extras: n={}} = t || {};
                        return u = n,
                        Object.keys(r).forEach((t => {
                            l[t] = r[t],
                            e.nativeXMLHttpRequestSetRequestHeader.call(this, t, r[t])
                        }
                        )),
                        e.nativeXMLHttpRequestSend.apply(this, i)
                    }
                    ))
                }
            }
            monkeyPatchFetch() {
                if (!rr)
                    return;
                const e = this;
                window.fetch = function(t, r) {
                    let i, n;
                    ir && t instanceof Request ? (i = t.url,
                    n = t.method) : (i = t,
                    n = r && r.method ? r.method : "GET");
                    const o = Zt({
                        method: n,
                        url: i,
                        headers: {},
                        path: i
                    }, e.config, e.signType || "pubKey", e.initType || "pubKey")
                      , {needProxy: s} = o || {};
                    return s ? er({
                        method: n,
                        url: i,
                        headers: {},
                        path: i
                    }, e.params, o, {
                        reportEvent: e.reportEvent,
                        reportError: e.reportError,
                        reportLog: e.reportLog
                    }).then((s => {
                        const {headers: a, extras: c={}} = s || {};
                        return ir && t instanceof Request ? Object.keys(a).forEach((e => {
                            t.headers.set(e, a[e])
                        }
                        )) : ((r = r || {}).headers = r.headers || {},
                        nr && (null == r ? void 0 : r.headers)instanceof Headers ? Object.keys(a).forEach((e => {
                            var t, i;
                            null == (i = null == (t = null == r ? void 0 : r.headers) ? void 0 : t.set) || i.call(t, e, a[e])
                        }
                        )) : r && r.headers && Array.isArray(r.headers) ? Object.keys(a).forEach((e => {
                            var t;
                            r && r.headers && Array.isArray(r.headers) && (null == (t = null == r ? void 0 : r.headers) || t.push([e, a[e]]))
                        }
                        )) : Object.keys(a).forEach((e => {
                            r.headers[e] = a[e]
                        }
                        ))),
                        e.nativeFetch.apply(this, [t, r]).then((t => {
                            var r, s, l, u;
                            const h = {};
                            if (null == t ? void 0 : t.headers) {
                                if ("function" == typeof (null == (r = null == t ? void 0 : t.headers) ? void 0 : r.forEach))
                                    null == (l = null == (s = null == t ? void 0 : t.headers) ? void 0 : s.forEach) || l.call(s, ( (e, t) => {
                                        h[t] = e
                                    }
                                    ));
                                else if ("function" == typeof (null == (u = null == t ? void 0 : t.headers) ? void 0 : u.get)) {
                                    const e = (e => {
                                        var t, r;
                                        const i = {};
                                        return i["tt-ticket-guard-server-data"] = (null == (t = null == e ? void 0 : e.headers) ? void 0 : t.get("tt-ticket-guard-server-data")) || "",
                                        i["tt-ticket-guard-result"] = (null == (r = null == e ? void 0 : e.headers) ? void 0 : r.get("tt-ticket-guard-result")) || "",
                                        i
                                    }
                                    )(t);
                                    Object.keys(e).forEach((t => {
                                        h[t] = e[t]
                                    }
                                    ))
                                }
                                return tr({
                                    config: {
                                        method: n,
                                        url: i,
                                        headers: {},
                                        extras: c,
                                        path: i
                                    },
                                    headers: h,
                                    reqHeaders: a
                                }, e.params, o, e.updateData, e.login, {
                                    reportEvent: e.reportEvent,
                                    reportError: e.reportError,
                                    reportLog: e.reportLog
                                }).then(( () => t)).catch((e => t))
                            }
                            return t
                        }
                        ))
                    }
                    )) : e.nativeFetch.apply(this, [t, r])
                }
            }
        }
        ;
        function sr(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ar(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function cr(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function lr(e) {
            return lr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            lr(e)
        }
        function ur(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && fr(e, t)
        }
        function hr(e, t) {
            return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
        }
        function dr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , i = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                )))),
                i.forEach((function(t) {
                    cr(e, t, r[t])
                }
                ))
            }
            return e
        }
        function gr(e, t) {
            return t = null != t ? t : {},
            Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, r)
                }
                return t
            }(Object(t)).forEach((function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
            }
            )),
            e
        }
        function pr(e, t) {
            return !t || "object" != ((r = t) && "undefined" != typeof Symbol && r.constructor === Symbol ? "symbol" : typeof r) && "function" != typeof t ? sr(e) : t;
            var r
        }
        function fr(e, t) {
            return fr = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            fr(e, t)
        }
        function mr(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, i = lr(e);
                if (t) {
                    var n = lr(this).constructor;
                    r = Reflect.construct(i, arguments, n)
                } else
                    r = i.apply(this, arguments);
                return pr(this, r)
            }
        }
        var yr = "0.1.21"
          , vr = function(e) {
            ur(r, e);
            var t = mr(r);
            function r() {
                var e;
                return ar(this, r),
                (e = t.call(this)).config = {},
                e.processSignCookie = function() {
                    try {
                        var t, r = Pt("_tt_ticket_crypt_doamin") || "", i = Pt("tt_ticket_guard_client_web_domain") || "3", n = Pt("_tt_ticket_crypt_cookie") ? "1" : "0";
                        return {
                            cookieStatus: Pt("__security_server_data_status") || "0",
                            signVersion: Pt("tt_sign_version") || "0",
                            cookieCrypt: n,
                            isTopBrowser: (null === (t = e.cryptoSDK) || void 0 === t ? void 0 : t.isTopBrowser()) ? "1" : "0",
                            webDomain: r || "3",
                            webClientDomain: i
                        }
                    } catch (t) {
                        var o, s;
                        hr(t, Error) ? null === (o = e._slardarSDK) || void 0 === o || o.throw({
                            err: t,
                            extra: {
                                content: "init sign cookie error"
                            }
                        }) : null === (s = e._slardarSDK) || void 0 === s || s.throw({
                            err: new Error("init sign cookie error"),
                            extra: {
                                content: "init sign cookie error"
                            }
                        })
                    }
                    return {
                        cookieStatus: "0",
                        signVersion: "0",
                        cookieCrypt: "0",
                        isTopBrowser: "0",
                        webDomain: "3",
                        webClientDomain: "3"
                    }
                }
                ,
                e.setStorageType = function(t) {
                    e.cryptoSDK.setStorageType(t)
                }
                ,
                e.setUpdateDataWhenVerifySuccess = function(t) {
                    e.secureProxy.setUpdateDataWhenVerifySuccess(t)
                }
                ,
                e.setDisableGenerateKey = function(e) {}
                ,
                e.setNamespace = function(t) {
                    e.cryptoSDK.setStorageNamespace(t)
                }
                ,
                e.setDisableCrossStorage = function(t) {
                    e.cryptoSDK.setDisableCrossStorage(t)
                }
                ,
                e.setDisableStorageSignData = function(t) {
                    e.cryptoSDK.setDisableStorageSignData(t)
                }
                ,
                e.setCrossStorageURL = function(t) {
                    e.cryptoSDK.setCrossStorageURL(t)
                }
                ,
                e.setCrossStorageBackURL = function(t) {
                    e.cryptoSDK.setCrossStorageBackURL(t)
                }
                ,
                e.setLoginStatus = function(t) {
                    "boolean" == typeof t && (e._isLogin = t ? "1" : "0",
                    e.secureProxy.setLogin(t)),
                    "function" == typeof t && (e._isLoginPromise = t().catch((function(e) {
                        return !1
                    }
                    )))
                }
                ,
                e.start = function() {
                    console.log("zti sdk start"),
                    e.cryptoSDK.start(),
                    e.emit("load", {
                        action: "sdk",
                        op: "init",
                        status: "start"
                    })
                }
                ,
                e.setUpdateKeys = function(t) {
                    e.cryptoSDK.setUpdateKeys(t)
                }
                ,
                e.setContext = function(t) {
                    e.cryptoSDK.setContext(t)
                }
                ,
                e.setRegion = function(t) {
                    e._region = t,
                    e._slardarSDK = new I({
                        sdkVersion: yr,
                        region: t
                    })
                }
                ,
                e.setWebId = function(t, r) {
                    var i, n, o, s, a, c, l, u, h;
                    e._region || console.warn("[ZTI SDK]: Please use `setRegion` to define the region first!!"),
                    null == I || null === (i = I._instance) || void 0 === i || i.setWebId(t),
                    s = void 0 === (o = (n = {
                        appId: r || 1180,
                        webId: t,
                        config: {
                            evtParams: {
                                sdk_version: yr,
                                self_platform: Lt()
                            }
                        },
                        region: e._region
                    }).appId) ? 1180 : o,
                    c = void 0 === (a = n.webId) ? "" : a,
                    u = void 0 === (l = n.config) ? {} : l,
                    h = n.region,
                    D.initTea({
                        appId: s || 1180,
                        config: g({
                            user_unique_id: c,
                            device_id: c,
                            user_id: c
                        }, u),
                        region: h
                    }),
                    e.emit("load", {
                        action: "sdk",
                        op: "setwebid",
                        status: "success"
                    })
                }
                ,
                e.setSlardarEnv = function(e) {
                    var t;
                    null == I || null === (t = I._instance) || void 0 === t || t.setEnv(e)
                }
                ,
                e.setConfig = function(t) {
                    var r = t.scene;
                    if (e.config)
                        if (e.config[r]) {
                            var i = e.config[r];
                            Array.isArray(i) ? (i.push(t),
                            e.config[r] = i) : e.config[r] = [t]
                        } else
                            e.config[r] = [t];
                    else
                        e.config = {},
                        e.config[r] = [t];
                    e.cryptoSDK.setConfig(e.config),
                    e.secureProxy.setConfig(e.config),
                    e.emit("load", {
                        action: "sdk",
                        op: "config",
                        status: "success"
                    })
                }
                ,
                e.refresh = function() {
                    return e.cryptoSDK.refresh()
                }
                ,
                e.sendEvent = function(t) {
                    var r, i = e.processSignCookie(), n = t.name, o = t.metrics, s = t.categories;
                    null === (r = e._slardarSDK) || void 0 === r || r.dot({
                        name: n,
                        metrics: o,
                        categories: gr(dr({}, s || {}, i || {}), {
                            loginStatus: e._isLogin
                        })
                    })
                }
                ,
                e.setType = function(t) {
                    var r;
                    e.cryptoSDK.setType(t),
                    e.secureProxy.setType(t),
                    function() {
                        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        null === (e = D.getTea()) || void 0 === e || e.setEvtParams(t)
                    }({
                        init_type: t.initType,
                        sign_type: t.signType
                    }),
                    null === (r = e._slardarSDK) || void 0 === r || r.setContext({
                        initType: t.initType,
                        signType: t.signType,
                        type: t.signType
                    })
                }
                ,
                e.convertBase64ToString = function(e) {
                    return dt(e)
                }
                ,
                e.convertStringToBase64 = function(e) {
                    return lt(e)
                }
                ,
                e.convertHexToBase64 = function(e) {
                    return ht(e)
                }
                ,
                e._isLogin = "-1",
                e.cryptoSDK = new Tt({
                    sendEvent: e.sendEvent
                }),
                e.cryptoSDK.on("error", (function(t) {
                    var r, i, n = t.error, o = t.name;
                    hr(n, Error) ? null === (r = e._slardarSDK) || void 0 === r || r.throw({
                        err: n,
                        extra: {
                            content: o,
                            origin: (null == n ? void 0 : n.origin) || "",
                            login: e._isLogin
                        }
                    }) : null === (i = e._slardarSDK) || void 0 === i || i.throw({
                        err: new Error(o),
                        extra: {
                            content: o,
                            login: e._isLogin
                        }
                    }),
                    e.emit("error", t)
                }
                )),
                e.cryptoSDK.on("load", (function(t) {
                    var r, i = t.action, n = t.op, o = t.status, s = t.duration, a = t.ctx, c = t.metrics, l = "load_".concat(i, "_").concat(n.toLocaleLowerCase()), u = e.processSignCookie();
                    e._isLoginPromise ? e._isLoginPromise.then((function(t) {
                        var r;
                        e._isLogin = t ? "1" : "0",
                        null === (r = e._slardarSDK) || void 0 === r || r.dot({
                            name: l,
                            metrics: dr({
                                count: 1,
                                duration: s || 0
                            }, c || {}),
                            categories: dr({
                                status: o,
                                login: e._isLogin
                            }, a || {}, u)
                        })
                    }
                    )) : null === (r = e._slardarSDK) || void 0 === r || r.dot({
                        name: l,
                        metrics: dr({
                            count: 1,
                            duration: s || 0
                        }, c || {}),
                        categories: dr({
                            status: o,
                            login: e._isLogin
                        }, a || {}, u)
                    }),
                    e.emit("load", t)
                }
                )),
                e.cryptoSDK.on("log", (function(t) {
                    var r, i = e.processSignCookie(), n = t || {}, o = n.level, s = n.extra, a = n.content;
                    null === (r = e._slardarSDK) || void 0 === r || r.log({
                        content: a,
                        extra: dr({}, i || {}, s || {}),
                        level: o
                    }),
                    e.emit("log", t)
                }
                )),
                e.cryptoSDK.on("execute", (function(t) {
                    var r, i = t.action, n = t.op, o = t.status, s = t.duration, a = t.ctx, c = t.metrics, l = "execute_".concat(i, "_").concat(n.toLocaleLowerCase()), u = e.processSignCookie();
                    e._isLoginPromise ? e._isLoginPromise.then((function(t) {
                        var r;
                        e._isLogin = t ? "1" : "0",
                        null === (r = e._slardarSDK) || void 0 === r || r.dot({
                            name: l,
                            metrics: dr({
                                count: 1,
                                duration: s || 0
                            }, c || {}),
                            categories: dr({
                                status: o,
                                login: e._isLogin
                            }, a || {}, u)
                        })
                    }
                    )) : null === (r = e._slardarSDK) || void 0 === r || r.dot({
                        name: l,
                        metrics: dr({
                            count: 1,
                            duration: s || 0
                        }, c || {}),
                        categories: dr({
                            status: o,
                            login: e._isLogin
                        }, a || {}, u)
                    }),
                    e.emit("execute", t)
                }
                )),
                e.cryptoSDK.on("ready", (function(t) {
                    var r, i = t.action, n = t.op, o = t.status, s = t.duration, a = t.ctx, c = t.metrics, l = "ready_".concat(i, "_").concat(n.toLocaleLowerCase());
                    e._isLoginPromise ? e._isLoginPromise.then((function(t) {
                        var r;
                        e._isLogin = t ? "1" : "0",
                        null === (r = e._slardarSDK) || void 0 === r || r.dot({
                            name: l,
                            metrics: dr({
                                count: 1,
                                duration: s || 0
                            }, c || {}),
                            categories: dr({
                                status: o,
                                login: e._isLogin
                            }, a || {})
                        })
                    }
                    )) : null === (r = e._slardarSDK) || void 0 === r || r.dot({
                        name: l,
                        metrics: dr({
                            count: 1,
                            duration: s || 0
                        }, c || {}),
                        categories: dr({
                            status: o,
                            login: e._isLogin
                        }, a || {})
                    }),
                    e.emit("execute", t)
                }
                )),
                e.secureProxy = new or({
                    crypt: e.cryptoSDK
                }),
                e.secureProxy.on("error", (function(t) {
                    var r, i, n = t.error, o = t.name;
                    hr(n, Error) ? null === (r = e._slardarSDK) || void 0 === r || r.throw({
                        err: n,
                        extra: {
                            content: o,
                            login: e._isLogin
                        }
                    }) : null === (i = e._slardarSDK) || void 0 === i || i.throw({
                        err: new Error(o),
                        extra: {
                            content: o,
                            login: e._isLogin
                        }
                    }),
                    e.emit("error", t)
                }
                )),
                e.secureProxy.on("execute", (function(t) {
                    var r, i = t.action, n = t.op, o = t.status, s = t.duration, a = t.ctx, c = t.extras, l = t.metrics, u = "execute_".concat(i, "_").concat(n.toLocaleLowerCase()), h = e.processSignCookie();
                    e._isLoginPromise ? e._isLoginPromise.then((function(r) {
                        var d;
                        e._isLogin = r ? "1" : "0",
                        ("sign" !== n || "response" !== i) && (null === (d = e._slardarSDK) || void 0 === d || d.dot({
                            name: u,
                            metrics: dr({
                                count: 1,
                                duration: s || 0
                            }, l || {}),
                            categories: dr({
                                status: o,
                                login: e._isLogin
                            }, a || {}, h)
                        })),
                        e.emit("execute", gr(dr({}, t), {
                            extras: dr({
                                loginStatus: e._isLogin
                            }, c || {})
                        }))
                    }
                    )).catch((function(e) {}
                    )) : ("sign" === n && "response" === i || null === (r = e._slardarSDK) || void 0 === r || r.dot({
                        name: u,
                        metrics: dr({
                            count: 1,
                            duration: s || 0
                        }, l || {}),
                        categories: dr({
                            status: o,
                            login: e._isLogin
                        }, a || {}, h)
                    }),
                    e.emit("execute", gr(dr({}, t), {
                        extras: dr({
                            loginStatus: e._isLogin
                        }, c || {}, h)
                    })))
                }
                )),
                e.secureProxy.on("log", (function(t) {
                    var r, i = e.processSignCookie(), n = t || {}, o = n.level, s = n.extra, a = n.content;
                    null === (r = e._slardarSDK) || void 0 === r || r.log({
                        content: a,
                        extra: dr({}, i || {}, s || {}),
                        level: o
                    }),
                    e.emit("log", t)
                }
                )),
                window.$SECURE_VERSION = yr,
                window.$SECURE_REGION = "pure",
                e
            }
            return r
        }(B)
          , _r = vr
          , br = function(e) {
            ur(r, e);
            var t = mr(r);
            function r() {
                var e;
                return ar(this, r),
                e = t.call(this),
                r.instance || (r.instance = sr(e)),
                pr(e, r.instance)
            }
            return r
        }(_r)
          , kr = new br;
        kr.on("execute", (function(e) {
            var t = e.action
              , r = e.op
              , i = e.extras
              , n = e.ctx
              , o = e.status;
            try {
                "response" === t && "sign" === r ? x(i, n) : "iframe" === t && "getKeys" === r ? P({
                    iframe_status: "success" === o ? "1" : "0"
                }) : "iframe" === t && "check" === r && T({
                    iframe_status: "success" === o ? "1" : "0"
                })
            } catch (e) {}
        }
        ));
        var Sr = function() {
            var e = new _r;
            return e.on("execute", (function(e) {
                var t = e.action
                  , r = e.op
                  , i = e.extras
                  , n = e.ctx
                  , o = e.status;
                try {
                    "response" === t && "sign" === r ? x(i, n) : "iframe" === t && "getKeys" === r ? P({
                        iframe_status: "success" === o ? "1" : "0"
                    }) : "iframe" === t && "check" === r && T({
                        iframe_status: "success" === o ? "1" : "0"
                    })
                } catch (e) {}
            }
            )),
            e
        }
    }
}]);
