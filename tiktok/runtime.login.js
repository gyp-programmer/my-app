// runtime.5e06ba8ec1037682b6bc.js
( () => {
    "use strict";
    var e, t, r, o, a, n = {}, i = {};
    function d(e) {
        var t = i[e];
        if (void 0 !== t)
            return t.exports;
        var r = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e].call(r.exports, r, r.exports, d),
        r.loaded = !0,
        r.exports
    }
    d.m = n,
    d.amdO = {},
    e = [],
    d.O = (t, r, o, a) => {
        if (!r) {
            var n = 1 / 0;
            for (f = 0; f < e.length; f++) {
                for (var [r,o,a] = e[f], i = !0, l = 0; l < r.length; l++)
                    (!1 & a || n >= a) && Object.keys(d.O).every((e => d.O[e](r[l]))) ? r.splice(l--, 1) : (i = !1,
                    a < n && (n = a));
                if (i) {
                    e.splice(f--, 1);
                    var c = o();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        a = a || 0;
        for (var f = e.length; f > 0 && e[f - 1][2] > a; f--)
            e[f] = e[f - 1];
        e[f] = [r, o, a]
    }
    ,
    d.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return d.d(t, {
            a: t
        }),
        t
    }
    ,
    r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__,
    d.t = function(e, o) {
        if (1 & o && (e = this(e)),
        8 & o)
            return e;
        if ("object" == typeof e && e) {
            if (4 & o && e.__esModule)
                return e;
            if (16 & o && "function" == typeof e.then)
                return e
        }
        var a = Object.create(null);
        d.r(a);
        var n = {};
        t = t || [null, r({}), r([]), r(r)];
        for (var i = 2 & o && e; "object" == typeof i && !~t.indexOf(i); i = r(i))
            Object.getOwnPropertyNames(i).forEach((t => n[t] = () => e[t]));
        return n.default = () => e,
        d.d(a, n),
        a
    }
    ,
    d.d = (e, t) => {
        for (var r in t)
            d.o(t, r) && !d.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    d.f = {},
    d.e = e => Promise.all(Object.keys(d.f).reduce(( (t, r) => (d.f[r](e, t),
    t)), [])),
    d.u = e => (({
        112: "npm-async-bric_verify_sec_sdk_build_captcha_ttp2",
        281: "whatwg-polyfill",
        305: "fb-js",
        363: "jsrsasign",
        437: "multi-account-controller",
        514: "login-tip-modal",
        586: "npm-async-7847f50e",
        647: "npm-async-38ae88b4",
        666: "logo-muted-black.svg",
        675: "npm-async-468f739d",
        807: "apple-js",
        832: "cthulhu",
        873: "npm-async-596046b7",
        976: "logo-muted-white.svg",
        978: "zti"
    }[e] || e) + "." + {
        89: "7bd73f6769abfc2f9ec4",
        112: "fc158ab63803cda24ee4",
        281: "bf651b0a04de0bb25d08",
        305: "e00d2d2713b748b2455d",
        363: "9204163e433efe400719",
        437: "a5b86f87b24c1c42ddbf",
        514: "6913658e0b786507d4ab",
        586: "070634a4dbad50788fc5",
        647: "5bd27c482ab23d755dcd",
        666: "5096e14f84654f9853bf",
        675: "be10e70bc79d0223a7b9",
        807: "75b7937cd19da3a721a6",
        832: "340d3f5a988806426f42",
        873: "b8a60bf530337f1f52a3",
        976: "5324e73d49e0b9cb9ed4",
        978: "14cd82e98bb3474afc71"
    }[e] + ".js"),
    d.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    d.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    o = {},
    a = "@tiktok/login-page:",
    d.l = (e, t, r, n) => {
        if (o[e])
            o[e].push(t);
        else {
            var i, l;
            if (void 0 !== r)
                for (var c = document.getElementsByTagName("script"), f = 0; f < c.length; f++) {
                    var b = c[f];
                    if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == a + r) {
                        i = b;
                        break
                    }
                }
            i || (l = !0,
            (i = document.createElement("script")).charset = "utf-8",
            i.timeout = 120,
            d.nc && i.setAttribute("nonce", d.nc),
            i.setAttribute("data-webpack", a + r),
            i.src = e),
            o[e] = [t];
            var u = (t, r) => {
                i.onerror = i.onload = null,
                clearTimeout(s);
                var a = o[e];
                if (delete o[e],
                i.parentNode && i.parentNode.removeChild(i),
                a && a.forEach((e => e(r))),
                t)
                    return t(r)
            }
              , s = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: i
            }), 12e4);
            i.onerror = u.bind(null, i.onerror),
            i.onload = u.bind(null, i.onload),
            l && document.head.appendChild(i)
        }
    }
    ,
    d.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    d.nmd = e => (e.paths = [],
    e.children || (e.children = []),
    e),
    d.p = "https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/webapp/login/webapp-login-page/",
    ( () => {
        var e = {
            121: 0
        };
        d.f.j = (t, r) => {
            var o = d.o(e, t) ? e[t] : void 0;
            if (0 !== o)
                if (o)
                    r.push(o[2]);
                else if (121 != t) {
                    var a = new Promise(( (r, a) => o = e[t] = [r, a]));
                    r.push(o[2] = a);
                    // 代理 1636 资源
                    var n;
                    if (t === 978) {
                        n  = 'https://gyp3.mytiktok.com:8080/zti.js';
                    } else {
                        n = d.p + d.u(t);
                    }
                    var i = new Error;
                    d.l(n, (r => {
                        if (d.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0),
                        o)) {
                            var a = r && ("load" === r.type ? "missing" : r.type)
                              , n = r && r.target && r.target.src;
                            i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + n + ")",
                            i.name = "ChunkLoadError",
                            i.type = a,
                            i.request = n,
                            o[1](i)
                        }
                    }
                    ), "chunk-" + t, t)
                } else
                    e[t] = 0
        }
        ,
        d.O.j = t => 0 === e[t];
        var t = (t, r) => {
            var o, a, [n,i,l] = r, c = 0;
            if (n.some((t => 0 !== e[t]))) {
                for (o in i)
                    d.o(i, o) && (d.m[o] = i[o]);
                if (l)
                    var f = l(d)
            }
            for (t && t(r); c < n.length; c++)
                a = n[c],
                d.o(e, a) && e[a] && e[a][0](),
                e[a] = 0;
            return d.O(f)
        }
          , r = self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || [];
        r.forEach(t.bind(null, 0)),
        r.push = t.bind(null, r.push.bind(r))
    }
    )()
}
)();

