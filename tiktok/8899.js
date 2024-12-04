/*! For license information please see 8899.ee8d0ab3d1a4d75de44f.js.LICENSE.txt */
"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[8899], {
    11361: (e, t, n) => {
        n.d(t, {
            e: () => E,
            H: () => O
        });
        var r = n(24643)
          , a = n(67518)
          , o = n(63077)
          , i = n(73580)
          , l = n(32877)
          , s = n.n(l)
          , c = n(40099)
          , u = n(52964)
          , d = n(93166)
          , p = n(42245)
          , f = n(83935)
          , h = n(98151)
          , v = n(78004);
        const b = (0,
        h.A)("a", {
            target: "e1k110iq0"
        })(( ({theme: e}) => (0,
        v.zy)({
            theme: e,
            fontFamily: "TikTokFont",
            fontWeight: "semiBold",
            color: "TextPrimary"
        })), "label:ALink;");
        var g = n(52912)
          , m = n(79685);
        const y = "${locale}";
        function x({link: e, lang: t}) {
            return e.replace(y, t)
        }
        function _({onHide: e, report: t, popupService: n, common: {business: r, policy_version: a, style: o}, action: {text: i, approve: l, operation: s, dismiss: c, link: u, extra: d, new_web_tab: p, link_type: f}}) {
            return h => {
                if (null == h || h.preventDefault(),
                t.handleUniversalPopClick({
                    style: o,
                    business: r,
                    button_info: i
                }),
                "callback" === f || l)
                    return n.setUniversalPopOperation({
                        business: r,
                        extra: d,
                        policy_version: a,
                        style: o,
                        operation: null == s ? void 0 : s.toString()
                    }).subscribe(),
                    void (null == e || e());
                c ? null == e || e() : f && "h5" !== f || !u || (p ? window.open(u) : window.location.href = u)
            }
        }
        function E({onHide: e}) {
            var t, n;
            const {popupConfig: l} = (0,
            o.P)(g.H)
              , {language: h="en"} = null !== (t = (0,
            u.W)(( () => ["language"]), [])) && void 0 !== t ? t : {}
              , {isMobile: v=!1} = null !== (n = (0,
            d.U)(( () => ["isMobile"]), [])) && void 0 !== n ? n : {}
              , y = function({onHide: e, lang: t, isMobile: n}) {
                const {popupConfig: r} = (0,
                o.P)(g.H)
                  , a = (0,
                i.Nj)(m.O)
                  , l = (0,
                i.Nj)(f.W);
                return (0,
                c.useMemo)(( () => {
                    if (!r)
                        return [];
                    const o = n ? 0 : 1
                      , i = n ? -1 : 0
                      , {actions: s=[], first_button_highlight: c, business: u, policy_version: d, style: p} = r;
                    return (c && n ? s : [...s].reverse()).map(( ({text: n, is_bold: r=!1, link: s, link_type: f, approve: h, extra: v, operation: b, dismiss: g, is_close_style: m, new_web_tab: y}, E) => {
                        const O = "string" == typeof s ? x({
                            link: s,
                            lang: t
                        }) : void 0;
                        return {
                            text: n,
                            isBold: r,
                            highlight: Boolean(c) && o === E,
                            line: !c || i === E,
                            link: O,
                            isCloseStyle: m,
                            onClick: _({
                                onHide: e,
                                report: l,
                                popupService: a,
                                common: {
                                    business: u,
                                    policy_version: d,
                                    style: p
                                },
                                action: {
                                    text: n,
                                    approve: h,
                                    dismiss: g,
                                    extra: v,
                                    link: O,
                                    link_type: f,
                                    new_web_tab: y,
                                    operation: b
                                }
                            })
                        }
                    }
                    ))
                }
                ), [n, t, e, r, a, l])
            }({
                onHide: e,
                lang: h,
                isMobile: v
            })
              , E = function({lang: e, onHide: t}) {
                const {popupConfig: n} = (0,
                o.P)(g.H)
                  , a = (0,
                i.Nj)(m.O)
                  , l = (0,
                i.Nj)(f.W)
                  , {isElectronApp: u} = (0,
                p.B_)();
                return (0,
                c.useMemo)(( () => {
                    if (!n)
                        return null;
                    const {body_link_list: o, body: i} = n;
                    if (!(null == o ? void 0 : o.length) || !/%s/.test(i))
                        return i;
                    const c = []
                      , d = i;
                    let p = 0;
                    const f = /%s/g;
                    return o.forEach(( ({link: o="", name: i, dismiss: h, approve: v, operation: g, new_web_tab: m}) => {
                        const y = f.exec(d);
                        if (!y)
                            return;
                        const E = x({
                            link: o,
                            lang: e
                        })
                          , O = _({
                            onHide: t,
                            popupService: a,
                            report: l,
                            common: s()(n, ["business", "policy_version", "style"]),
                            action: {
                                text: i,
                                approve: v,
                                dismiss: h,
                                operation: g,
                                new_web_tab: m || u,
                                link: E
                            }
                        })
                          , w = (0,
                        r.jsx)(b, {
                            target: "_blank",
                            rel: "noopener noreferer",
                            href: E,
                            onClick: O,
                            children: i
                        });
                        c.push(d.slice(p, y.index)),
                        c.push(w),
                        p = Number(y.index) + y[0].length
                    }
                    )),
                    c.push(d.slice(p)),
                    c
                }
                ), [e, t, n, a, l])
            }({
                lang: h,
                onHide: e
            })
              , {isDark: O} = (0,
            a.u)();
            if (!l)
                return null;
            const {title: w, icon_url: P, icon_url_dark: T, body: S, style: C, business: k} = l;
            return {
                title: w,
                icon: O ? T : P,
                body: S,
                style: C,
                content: E,
                buttons: y,
                business: k
            }
        }
        function O() {
            const [e,t] = (0,
            c.useState)(0)
              , n = (0,
            c.useCallback)(( () => {
                t(0)
            }
            ), []);
            return {
                popupHeight: e,
                handlePopupShow: (0,
                c.useCallback)((e => {
                    t(e)
                }
                ), []),
                handlePopupHide: n
            }
        }
    }
    ,
    63382: (e, t, n) => {
        n.d(t, {
            H: () => hn
        });
        var r = n(24643)
          , a = n(25695)
          , o = n(73580)
          , i = n(40099)
          , l = n(27066)
          , s = n(52964)
          , c = n(93166)
          , u = n(70364)
          , d = n.n(u)
          , p = n(3376)
          , f = n(98151)
          , h = n(73635)
          , v = n(78004);
        const b = (0,
        f.A)("div", {
            target: "eyt76ed0"
        })(( ({theme: {colors: e}}) => ({
            width: "100vw",
            top: v.uF - 1 + "px",
            left: "0",
            marginTop: "1px",
            position: "fixed",
            boxShadow: "0 2px 8px rgba(0, 0, 0, .06)",
            zIndex: 999,
            background: e.BGPrimary,
            display: "flex",
            justifyContent: "center",
            ":after": Object.assign({
                content: '""',
                background: "rgba(33, 33, 33, .08)"
            }, (0,
            v.WB)("bottom"))
        })), "label:DivBannerContainer;")
          , g = (0,
        f.A)("div", {
            target: "eyt76ed1"
        })([{
            width: v.hj,
            maxWidth: v.hj,
            paddingTop: "16px",
            paddingBottom: "16px",
            display: "flex",
            justifyContent: "space-between"
        }, ({theme: {direction: e}}) => (0,
        v.mp)({
            direction: e,
            paddingStart: "20px",
            paddingEnd: "24px"
        })], "label:DivBannerWrapper;")
          , m = (0,
        f.A)("div", {
            target: "eyt76ed2"
        })([{
            display: "flex",
            alignItems: "center"
        }, ({theme: {direction: e}}) => (0,
        v.mp)({
            direction: e,
            marginEnd: "24px"
        })], "label:DivLeftContainer;")
          , y = (0,
        f.A)("div", {
            target: "eyt76ed3"
        })([{
            display: "flex",
            alignItems: "center"
        }], "label:DivRightContainer;")
          , x = "48px"
          , _ = (0,
        f.A)("div", {
            target: "eyt76ed4"
        })(( ({theme: {direction: e}}) => ({
            ":not(:empty)": Object.assign({
                display: "inline-block",
                width: x,
                height: x,
                flex: `0 0 ${x}`,
                padding: "0"
            }, (0,
            v.mp)({
                direction: e,
                marginEnd: "16px"
            }))
        })), "label:DivImgWrapper;")
          , E = (0,
        f.A)("img", {
            target: "eyt76ed5"
        })({
            width: x,
            height: x
        }, "label:ImgIcon;")
          , O = (0,
        f.A)("div", {
            target: "eyt76ed6"
        })([ ({theme: e}) => (0,
        v.zy)({
            theme: e,
            fontFamily: "TikTokFont",
            fontWeight: "semiBold",
            typography: "P2",
            color: "TextSecondary"
        }), {
            alignSelf: "center"
        }], "label:DivContentWrapper;")
          , w = (0,
        f.A)("h4", {
            target: "eyt76ed8"
        })(( ({theme: {colors: e}}) => ({
            color: e.TextPrimary
        })), "label:H4Title;")
          , P = (0,
        f.A)(h.A, {
            target: "eyt76ed9"
        })({
            width: "24px",
            height: "24px",
            cursor: "pointer"
        }, "label:StyledCloseIcon;")
          , T = (0,
        f.A)("div", {
            target: "eyt76ed10"
        })(( ({theme: {direction: e}}) => ({
            margin: "9px 0",
            "&:not(:last-of-type)": (0,
            v.mp)({
                direction: e,
                marginEnd: "24px"
            })
        })), "label:DivButton;")
          , S = (0,
        f.A)("a", {
            target: "eyt76ed11"
        })(( ({theme: e}) => [(0,
        v.zy)({
            theme: e,
            color: "Primary",
            typography: "P2"
        }), {
            ":link, :active, :hover, :visited": {
                color: e.colors.Primary
            }
        }, {
            "&:focus": {
                outline: "none"
            },
            "&:focus-visible": {
                outline: `2px solid ${e.colors.Negative}`
            }
        }]), {
            textDecoration: "none",
            whiteSpace: "nowrap",
            ":hover": {
                textDecoration: "none"
            }
        }, "label:AButtonLink;")
          , C = (0,
        i.memo)((function({title: e, content: t, icon: n, buttons: a, onShow: o}) {
            const l = (0,
            p.s)()
              , s = (0,
            i.useRef)(null)
              , c = (0,
            i.useRef)(null);
            (0,
            i.useEffect)(( () => {
                var e, t;
                null == o || o(null !== (t = null === (e = s.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0)
            }
            ), []);
            const u = (0,
            i.useCallback)((e => {
                var t;
                "Enter" !== e.key && " " !== e.key || (e.preventDefault(),
                e.stopPropagation(),
                null === (t = c.current) || void 0 === t || t.click())
            }
            ), []);
            return (0,
            r.jsx)(b, {
                ref: s,
                role: "alert",
                children: (0,
                r.jsxs)(g, {
                    children: [(0,
                    r.jsxs)(m, {
                        children: [(0,
                        r.jsx)(_, {
                            "aria-hidden": "true",
                            children: n && (0,
                            r.jsx)(E, {
                                alt: "icon",
                                src: n
                            })
                        }), (0,
                        r.jsxs)(O, {
                            children: [e && (0,
                            r.jsx)(w, {}), (0,
                            r.jsx)("p", {
                                children: Array.isArray(t) ? t.map(( (e, t) => (0,
                                r.jsx)(i.Fragment, {
                                    children: e
                                }, t))) : t
                            })]
                        })]
                    }), (0,
                    r.jsx)(y, {
                        children: a.map(( ({text: e, link: t, onClick: n, isCloseStyle: a}) => a ? (0,
                        r.jsx)("div", {
                            onClick: n,
                            onKeyDown: u,
                            ref: c,
                            tabIndex: 0,
                            role: "button",
                            "aria-label": l("Close"),
                            children: (0,
                            r.jsx)(P, {})
                        }, e) : (0,
                        r.jsx)(T, {
                            children: t ? (0,
                            r.jsx)(S, {
                                target: "_blank",
                                onClick: n,
                                rel: "noopener noreferer noreferrer",
                                href: t,
                                children: e
                            }) : (0,
                            r.jsx)(S, {
                                onClick: n,
                                children: e
                            })
                        }, e)))
                    })]
                })
            })
        }
        ))
          , k = "inline-block"
          , I = (0,
        f.A)("div", {
            target: "e1qek5np0"
        })(( ({theme: {colors: e}}) => ({
            width: "100vw",
            top: 0,
            left: 0,
            position: "fixed",
            zIndex: 999,
            background: e.ConstBGInverse2,
            display: "flex",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0, 0, 0, .06)",
            ":after": Object.assign({
                content: '""',
                background: "rgba(33, 33, 33, .08)"
            }, (0,
            v.WB)("bottom"))
        })), "label:DivBannerContainer;")
          , N = (0,
        f.A)("div", {
            target: "e1qek5np1"
        })([{
            width: v.hj,
            maxWidth: v.hj,
            padding: "12px 12px 12px 16px",
            display: "flex",
            justifyContent: "space-between"
        }, ({theme: {direction: e}}) => (0,
        v.mp)({
            direction: e,
            paddingStart: "20px",
            paddingEnd: "24px"
        })], "label:DivBannerWrapper;")
          , j = (0,
        f.A)("div", {
            target: "e1qek5np2"
        })([{
            display: "flex",
            alignItems: "center"
        }, ({theme: {direction: e}}) => (0,
        v.mp)({
            direction: e,
            marginEnd: "8px"
        })], "label:DivLeftContainer;")
          , A = (0,
        f.A)("div", {
            target: "e1qek5np3"
        })([{
            display: "flex",
            alignItems: "flex-start"
        }], "label:DivRightContainer;")
          , U = "48px"
          , L = (0,
        f.A)("div", {
            target: "e1qek5np4"
        })(( ({theme: {direction: e}}) => ({
            ":not(:empty)": Object.assign({
                display: k,
                width: U,
                height: U,
                flex: `0 0 ${U}`,
                padding: "0"
            }, (0,
            v.mp)({
                direction: e,
                marginEnd: "16px"
            }))
        })), "label:DivImgWrapper;")
          , M = (0,
        f.A)("img", {
            target: "e1qek5np5"
        })({
            width: U,
            height: U
        }, "label:ImgIcon;")
          , R = (0,
        f.A)("div", {
            target: "e1qek5np6"
        })(( ({theme: e}) => [(0,
        v.zy)({
            theme: e,
            fontFamily: "TikTokFont",
            fontWeight: "normal",
            color: "ConstTextInverse"
        }), {
            display: k,
            fontSize: "15px",
            lineHeight: "18px",
            alignSelf: "center",
            a: {
                display: k,
                alignSelf: "center",
                fontSize: "15px",
                lineHeight: "18px",
                fontWeight: 700,
                color: `${e.colors.ConstTextInverse} !important`
            }
        }]), "label:DivContentWrapper;")
          , D = (0,
        f.A)("h4", {
            target: "e1qek5np7"
        })(( ({theme: e}) => [(0,
        v.zy)({
            theme: e,
            fontFamily: "TikTokFont",
            fontWeight: "semiBold",
            color: "ConstTextInverse"
        })]), "label:H4Title;")
          , B = (0,
        f.A)(h.A, {
            target: "e1qek5np8"
        })({
            width: "24px",
            height: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }, "label:StyledCloseIcon;")
          , F = (0,
        f.A)("div", {
            target: "e1qek5np9"
        })(( ({theme: {direction: e}}) => ({
            margin: "9px 0",
            "&:not(:last-child)": (0,
            v.mp)({
                direction: e,
                marginEnd: "24px"
            })
        })), "label:DivButton;")
          , z = (0,
        f.A)("a", {
            target: "e1qek5np10"
        })(( ({theme: e}) => [(0,
        v.zy)({
            theme: e,
            color: "Primary",
            typography: "P2"
        })]), {
            textDecoration: "none",
            whiteSpace: "nowrap",
            textAlign: "center"
        }, "label:AButtonLink;")
          , W = (0,
        i.memo)((function({title: e, content: t, icon: n, buttons: a, onShow: o}) {
            const l = (0,
            i.useRef)(null);
            return (0,
            i.useEffect)(( () => {
                var e, t;
                null == o || o(null !== (t = null === (e = l.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0)
            }
            ), []),
            (0,
            r.jsx)(I, {
                ref: l,
                children: (0,
                r.jsxs)(N, {
                    children: [(0,
                    r.jsxs)(j, {
                        children: [(0,
                        r.jsx)(L, {
                            children: n && (0,
                            r.jsx)(M, {
                                alt: "icon",
                                src: n
                            })
                        }), (0,
                        r.jsxs)(R, {
                            children: [e && (0,
                            r.jsx)(D, {
                                children: e
                            }), (0,
                            r.jsx)("p", {
                                children: Array.isArray(t) ? t.map(( (e, t) => (0,
                                r.jsx)(i.Fragment, {
                                    children: e
                                }, t))) : t
                            })]
                        })]
                    }), (0,
                    r.jsx)(A, {
                        children: a.map(( ({text: e, link: t, onClick: n, isCloseStyle: a}) => a ? (0,
                        r.jsx)("div", {
                            onClick: n,
                            children: (0,
                            r.jsx)(B, {
                                fill: "#fff"
                            })
                        }, e) : (0,
                        r.jsx)(F, {
                            children: t ? (0,
                            r.jsx)(z, {
                                target: "_blank",
                                onClick: n,
                                rel: "noopener noreferer noreferrer",
                                href: t,
                                children: e
                            }) : (0,
                            r.jsx)(z, {
                                onClick: n,
                                children: e
                            })
                        }, e)))
                    })]
                })
            })
        }
        ));
        var G = n(551)
          , K = n(85991);
        const H = (0,
        f.A)("div", {
            target: "es36pgp0"
        })({
            pointerEvents: "auto",
            position: "absolute",
            boxSizing: "border-box",
            left: "0",
            bottom: "0",
            width: "100%",
            background: "#fff",
            borderRadius: "12px 12px 0 0",
            padding: "16px 20px 20px"
        }, "label:DivContainer;")
          , X = (0,
        f.A)("div", {
            target: "es36pgp1"
        })({
            textAlign: "center",
            position: "relative",
            ":not(:empty)": {
                paddingBottom: "16px",
                marginBottom: "12px",
                "::after": Object.assign({
                    content: '""',
                    background: "rgba(33, 33, 33, .08)"
                }, (0,
                v.WB)("bottom"))
            }
        }, "label:DivTitleContainer;")
          , Y = (0,
        f.A)("img", {
            target: "es36pgp2"
        })({
            display: "inline-block"
        }, "label:ImgIcon;")
          , V = (0,
        f.A)("h4", {
            target: "es36pgp3"
        })(( ({theme: e}) => (0,
        v.zy)({
            theme: e,
            typography: "P2",
            fontFamily: "TikTokFont",
            fontWeight: "semiBold"
        })), "label:H4Title;")
          , $ = (0,
        f.A)("p", {
            target: "es36pgp4"
        })(( ({theme: e}) => (0,
        v.zy)({
            theme: e,
            typography: "P3",
            fontFamily: "TikTokFont"
        })), {
            marginBottom: "32px"
        }, "label:PContent;")
          , q = (0,
        f.A)("div", {
            target: "es36pgp5"
        })({
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end"
        }, "label:DivButtonWrapper;")
          , Z = (0,
        f.A)(K.y, {
            target: "es36pgp6"
        })(( ({theme: {direction: e}}) => ({
            "& + &": (0,
            v.mp)({
                direction: e,
                marginStart: "24px"
            })
        })), "label:StyledButton;")
          , J = (0,
        i.memo)((function({icon: e, title: t, content: n, buttons: a}) {
            return (0,
            r.jsx)(G.i, {
                compact: !0,
                isOpen: !0,
                children: (0,
                r.jsxs)(H, {
                    children: [(0,
                    r.jsxs)(X, {
                        children: [e && (0,
                        r.jsx)(Y, {
                            src: e
                        }), t && (0,
                        r.jsx)(V, {
                            children: t
                        })]
                    }), (0,
                    r.jsx)($, {
                        children: n
                    }), (0,
                    r.jsx)(q, {
                        children: a.map(( ({text: e, highlight: t, line: n, onClick: a}) => (0,
                        r.jsx)(Z, {
                            size: "medium",
                            buttonTheme: t ? "primary" : n ? "line" : "default",
                            onClick: a,
                            children: e
                        }, e)))
                    })]
                })
            })
        }
        ));
        var Q = n(11361)
          , ee = n(23709);
        const te = 1920
          , ne = (0,
        f.A)("div", {
            target: "e1uf1l9s0"
        })(( ({theme: e, theme: {colors: t}}) => [{
            position: "relative",
            width: "400px",
            background: t.BGTertiary,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "32px",
            borderRadius: "8px",
            whiteSpace: "pre-line"
        }, (0,
        v.zy)({
            theme: e,
            fontFamily: "TikTokFont"
        })]), "label:DivContainer;")
          , re = (0,
        f.A)(ne, {
            target: "e1uf1l9s1"
        })({
            width: "84vw",
            maxWidth: "360px",
            maxHeight: "480px",
            overflow: "auto",
            paddingTop: "20px"
        }, (0,
        v.jJ)({
            min: te,
            style: {
                width: "560px",
                maxWidth: "560px",
                paddingTop: "48px"
            }
        }), "label:DivContainerMobile;")
          , ae = (0,
        f.A)("img", {
            target: "e1uf1l9s2"
        })({
            height: "48px"
        }, "label:ImgIcon;")
          , oe = (0,
        f.A)("h4", {
            target: "e1uf1l9s3"
        })(( ({theme: e}) => [(0,
        v.zy)({
            theme: e,
            typography: "P0",
            fontWeight: "bold"
        }), {
            textAlign: "center",
            padding: "0 32px",
            flex: "0 0 auto",
            order: 0,
            wordBreak: "break-word"
        }]), "label:H4Title;")
          , ie = (0,
        f.A)("h2", {
            target: "e1uf1l9s4"
        })(( ({theme: e}) => [(0,
        v.zy)({
            theme: e,
            fontWeight: "bold"
        }), {
            textAlign: "center",
            padding: "0 20px",
            flex: "0 0 auto",
            order: 0,
            wordBreak: "break-word",
            fontSize: "20px",
            lineHeight: "24px"
        }, (0,
        v.jJ)({
            min: te,
            style: {
                fontSize: "32px",
                lineHeight: "48px"
            }
        })]), "label:H2Title;")
          , le = (0,
        f.A)("p", {
            target: "e1uf1l9s5"
        })(( ({theme: e}) => [{
            color: e.colors.TextSecondary,
            fontSize: "15px",
            lineHeight: "18px",
            padding: "0 32px",
            textAlign: "center",
            marginTop: "7px"
        }, (0,
        v.jJ)({
            min: te,
            style: {
                fontSize: "28px",
                lineHeight: "44px"
            }
        })]), "label:PContent;")
          , se = (0,
        f.A)(le, {
            target: "e1uf1l9s6"
        })({
            maxHeight: "300px",
            overflow: "auto",
            padding: "0 20px"
        }, "label:PContentMobile;")
          , ce = (0,
        f.A)("div", {
            target: "e1uf1l9s7"
        })({
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 32px 32px"
        }, (0,
        v.jJ)({
            min: te,
            style: {
                fontSize: "32px",
                marginTop: "48px"
            }
        }), "label:DivButtonWrapper;")
          , ue = (0,
        f.A)(ce, {
            target: "e1uf1l9s8"
        })(( ({theme: {colors: e}}) => ({
            borderTop: `.5px solid ${e.LineSecondary}`,
            padding: 0,
            marginTop: "20px",
            boxSizing: "border-box"
        })), "label:DivButtonWrapperMobile;")
          , de = (0,
        f.A)("div", {
            target: "e1uf1l9s9"
        })({
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            boxSizing: "border-box",
            padding: "22px 20px 6px"
        }, "label:DivButtonWrapperVertical;")
          , pe = (0,
        f.A)(K.y, {
            target: "e1uf1l9s10"
        })(( ({theme: e, theme: {direction: t}}) => [{
            flex: "1 1 0%",
            minWidth: "initial",
            width: "100%",
            padding: "0 16px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            ":not(:first-of-type)": (0,
            v.mp)({
                direction: t,
                marginStart: "16px"
            })
        }, (0,
        v.zy)({
            theme: e,
            typography: "P2"
        })]), "label:StyledButton;")
          , fe = (0,
        f.A)(K.y, {
            target: "e1uf1l9s11"
        })(( ({theme: {colors: e}}) => [{
            flex: "1 1 0%",
            minWidth: "initial",
            width: "100%",
            padding: "0 16px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            fontSize: "15px",
            lineHeight: "18px",
            ":not(:first-child)": {
                marginTop: "2px",
                border: "none",
                color: e.TextTertiary
            }
        }]), "label:StyledButtonMobile;")
          , he = (0,
        f.A)(pe, {
            target: "e1uf1l9s12"
        })(( ({isBold: e=!1, theme: {colors: t}}) => [{
            width: "50%",
            border: "none",
            borderRadius: 0,
            borderRight: `.5px solid ${t.LineSecondary}`,
            margin: "0 !important",
            color: e ? t.TextPrimary : t.TextTertiary
        }, (0,
        v.jJ)({
            min: te,
            style: {
                fontSize: "32px",
                lineHeight: "96px"
            }
        })]), "label:StyledButtonLine;")
          , ve = (0,
        i.memo)((function({title: e, content: t, isMobile: n=!1, icon: a, buttons: o}) {
            const i = n && o.some((e => e.highlight))
              , l = n ? i ? de : ue : ce
              , s = n ? i ? fe : he : pe;
            return n ? (0,
            r.jsx)(ee.aF, {
                maskCloseable: !1,
                visible: !0,
                children: (0,
                r.jsxs)(re, {
                    children: [a && (0,
                    r.jsx)(ae, {
                        src: a
                    }), e && (0,
                    r.jsx)(ie, {
                        children: e
                    }), t && (0,
                    r.jsx)(se, {
                        children: t
                    }), (0,
                    r.jsx)(l, {
                        children: o.map(( ({text: e, isBold: t, highlight: n, line: a, onClick: o}) => (0,
                        r.jsx)(s, {
                            isBold: t,
                            buttonTheme: n ? "primary" : a ? "default" : "line",
                            onClick: o,
                            children: e
                        }, e)))
                    })]
                })
            }) : (0,
            r.jsx)(G.i, {
                compact: !0,
                closeOnBackdropClick: !1,
                isOpen: !0,
                children: (0,
                r.jsxs)(ne, {
                    children: [a && (0,
                    r.jsx)(ae, {
                        src: a
                    }), e && (0,
                    r.jsx)(oe, {
                        children: e
                    }), t && (0,
                    r.jsx)(le, {
                        children: t
                    }), (0,
                    r.jsx)(l, {
                        children: o.map(( ({text: e, highlight: t, line: n, onClick: a}) => (0,
                        r.jsx)(s, {
                            buttonTheme: t ? "primary" : n ? "default" : "line",
                            onClick: a,
                            children: e
                        }, e)))
                    })]
                })
            })
        }
        ));
        var be, ge;
        !function(e) {
            e.None = "none",
            e.Pop = "pop",
            e.Float = "float",
            e.Bottom = "bottom",
            e.PcBanner = "pc_banner",
            e.MobileBanner = "mobile_banner"
        }(be || (be = {})),
        function(e) {
            e.Callback = "callback",
            e.H5 = "h5"
        }(ge || (ge = {}));
        const me = 555;
        var ye = n(52912)
          , xe = n(83935);
        const _e = e => {
            var t, n;
            const {onHide: u, hideByDefault: p} = e
              , [f,h] = (0,
            i.useState)(!0)
              , v = (0,
            i.useRef)(!1)
              , b = (0,
            i.useCallback)(( () => {
                null == u || u(),
                h(!1)
            }
            ), [u])
              , {language: g} = null !== (t = (0,
            s.W)(( () => ["language", "wid", "region"]), [])) && void 0 !== t ? t : {}
              , {isMobile: m} = null !== (n = (0,
            c.U)(( () => ["isMobile"]), [])) && void 0 !== n ? n : {}
              , y = (0,
            Q.e)({
                onHide: b
            })
              , x = (0,
            a.w)(ye.H)
              , _ = !y || "none" === y.style || !f
              , E = (0,
            o.Nj)(xe.W);
            (0,
            i.useEffect)(( () => {
                _ || E.handleUniversalPopShow({
                    style: y.style,
                    business: y.business
                })
            }
            ), [_]);
            const O = (0,
            i.useCallback)((e => {
                v.current || (v.current = !0,
                h(!0),
                x.getPopupConfig({
                    lang: g,
                    scene: me,
                    extra: e
                }))
            }
            ), [x, g])
              , w = (0,
            i.useCallback)((e => {
                h(!0),
                x.getPopupConfig({
                    lang: g,
                    scene: me,
                    extra: e
                })
            }
            ), [x, g]);
            if ((0,
            i.useEffect)(( () => (l.LZ.on(l.Rh, d()(O, 2e3)),
            l.LZ.on(l.gk, d()(w, 2e3)),
            () => {
                l.LZ.clear(l.Rh),
                l.LZ.clear(l.gk)
            }
            )), [O, w]),
            (0,
            i.useEffect)(( () => {
                p || x.getPopupConfig({
                    lang: g
                })
            }
            ), [x, g, p]),
            _)
                return null;
            const {title: P, icon: T, content: S, style: k, buttons: I} = y;
            switch (k) {
            case "pc_banner":
                return (0,
                r.jsx)(C, {
                    title: P,
                    content: S,
                    icon: T,
                    buttons: I,
                    onShow: e.onShow
                });
            case "mobile_banner":
                return (0,
                r.jsx)(W, {
                    title: P,
                    content: S,
                    icon: T,
                    buttons: I,
                    onShow: e.onShow
                });
            case "pop":
                return (0,
                r.jsx)(ve, {
                    isMobile: m,
                    title: P,
                    content: S,
                    icon: T,
                    buttons: I
                });
            case "float":
            case "bottom":
                return (0,
                r.jsx)(J, {
                    title: P,
                    content: S,
                    icon: T,
                    buttons: I
                });
            default:
                return null
            }
        }
        ;
        var Ee, Oe, we, Pe, Te, Se, Ce, ke, Ie, Ne;
        (Oe = Ee || (Ee = {})).POP = "pop",
        Oe.PC_BANNER = "pc_banner",
        Oe.MOBILE_BANNER = "mobile_banner",
        Oe.WEBVIEW = "webview",
        (Pe = we || (we = {})).V1 = "v1",
        Pe.V2 = "v2",
        Pe.CUSTOMIZED = "customized",
        (Se = Te || (Te = {})).TEXT = "text",
        Se.LINK = "link",
        Se.BUTTON = "button",
        (ke = Ce || (Ce = {})).EXTERNAL = "external",
        ke.INTERNAL = "internal",
        ke.SUB_POPUP = "sub_popup",
        (Ne = Ie || (Ie = {})).INFO = "info",
        Ne.WARN = "warn",
        Ne.ERROR = "error";
        const je = "/tiktok/popup/dispatch/v1"
          , Ae = "/api/policy/notice/"
          , Ue = je
          , Le = "/tiktok/popup/callback/v1"
          , Me = Le;
        var Re, De;
        (De = Re || (Re = {})).initError = "initError",
        De.beforeFetchData = "beforeFetchData",
        De.afterFetchData = "afterFetchData",
        De.fetchDataError = "fetchDataError",
        De.popupDataReady = "popupDataReady",
        De.processDataError = "processDataError",
        De.beforeSendCallback = "beforeSendCallback",
        De.afterSendCallback = "afterSendCallback",
        De.sendCallbackError = "sendCallbackError",
        De.beforeNavigateToNextPopup = "beforeNavigateToNextPopup",
        De.afterNavigateToNextPopup = "afterNavigateToNextPopup",
        De.allPopupsCompleted = "allPopupsCompleted",
        De.beforeDestruct = "beforeDestruct";
        var Be, Fe = class {
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
        }(Be || (Be = {}));
        class ze extends Fe {
            init(e) {
                this.meta = e.meta,
                this.debug = e.debug,
                e.customLoggingModule && e.customLoggingModule instanceof Fe ? this._customLogger = e.customLoggingModule : this.warn("[LoggingModule]: init - incorrect implementation of LoggingModule")
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
                    level: Be.INFO,
                    meta: this.meta,
                    data: t
                })
            }
            warn(e, t) {
                var n;
                "function" == typeof (null === (n = this._customLogger) || void 0 === n ? void 0 : n.warn) && this._customLogger.warn(e, t),
                this.send({
                    message: e,
                    level: Be.WARN,
                    meta: this.meta,
                    data: t
                })
            }
            error(e, t) {
                var n;
                "function" == typeof (null === (n = this._customLogger) || void 0 === n ? void 0 : n.error) && this._customLogger.error(e, t),
                this.send({
                    message: e,
                    level: Be.ERROR,
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
                ze._instance || (ze._instance = this),
                ze._instance
            }
        }
        var We = new ze
          , Ge = n(70156)
          , Ke = n.n(Ge)
          , He = n(52942);
        function Xe(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Ye(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    Xe(e, t, n[t])
                }
                ))
            }
            return e
        }
        const Ve = /^(https?:\/\/)/;
        class $e {
            constructor() {
                return this.init = e => {
                    We.info("[ServiceModule]: init"),
                    this._domain = e.domain || "https://www.tiktok.com",
                    this._commonParams = e.commonParams || {}
                }
                ,
                this.sendRequest = (e, t, n, r) => {
                    const a = Ve.test(e) ? e : `${this._domain}${e}`
                      , o = new URL(a)
                      , i = Array.from(o.searchParams.entries()).reduce(( (e, t) => {
                        const [n,r] = t;
                        return void 0 === r && "" === r || (e[n] = r),
                        e
                    }
                    ), {})
                      , l = null != r ? r : {}
                      , {params: s, timeout: c} = l
                      , u = function(e, t) {
                        if (null == e)
                            return {};
                        var n, r, a = function(e, t) {
                            if (null == e)
                                return {};
                            var n, r, a = {}, o = Object.keys(e);
                            for (r = 0; r < o.length; r++)
                                n = o[r],
                                t.indexOf(n) >= 0 || (a[n] = e[n]);
                            return a
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < o.length; r++)
                                n = o[r],
                                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                        }
                        return a
                    }(l, ["params", "timeout"]);
                    let d = Ye({}, this._commonParams, i, null != s ? s : {});
                    "GET" === t && n && "object" == typeof n && (d = Ye({}, d, n));
                    const p = new URLSearchParams((e => {
                        if (!e)
                            return "";
                        const t = new URLSearchParams;
                        return Object.entries(e).forEach(( ([e,n]) => {
                            Array.isArray(n) ? n.forEach((n => {
                                t.append(e, encodeURIComponent(n))
                            }
                            )) : null != n && t.append(e, encodeURIComponent(n))
                        }
                        )),
                        t.toString()
                    }
                    )(d))
                      , f = new URL(`${o.origin}${o.pathname}?${p.toString()}`)
                      , h = Ke()({}, u, {
                        method: t,
                        timeout: null != c ? c : 0,
                        data: n
                    });
                    return We.info("[ServiceModule]: sendRequest start", h),
                    (0,
                    He.A)(f.href, h).then((e => (We.info("[ServiceModule]: sendRequest finish", e),
                    e))).catch((e => {
                        throw We.error("[ServiceModule]: sendRequest error", e),
                        e
                    }
                    ))
                }
                ,
                this.destruct = () => {
                    We.info("[ServiceModule]: destruct")
                }
                ,
                $e._instance || ($e._instance = this),
                $e._instance
            }
        }
        var qe, Ze, Je, Qe, et, tt, nt, rt, at, ot, it, lt, st = new $e;
        function ct(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function ut(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    ct(e, t, n[t])
                }
                ))
            }
            return e
        }
        function dt(e, t) {
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
        function pt({lang: e, body: t, bodyLinks: n, popupMeta: r, style: a, callback: o}) {
            if (!t)
                return;
            if (!n || 0 === n.length || !/%s/.test(t))
                return [{
                    type: Te.TEXT,
                    text: t
                }];
            const i = /%s/g
              , l = []
              , s = t;
            let c = 0;
            return n.forEach(( ({text: t, action: n}) => {
                var u;
                const d = i.exec(s);
                if (!d)
                    return;
                const p = ut({
                    type: (null == n ? void 0 : n.link) ? Te.LINK : Te.BUTTON,
                    text: t
                }, (null == n ? void 0 : n.link) && {
                    link: bt({
                        link: n.link,
                        lang: e
                    }),
                    linkType: n.link_type === et.LINK_TYPE_ENUM_EXTERNAL ? Ce.EXTERNAL : Ce.INTERNAL
                }, (null == n || null === (u = n.actions) || void 0 === u ? void 0 : u.includes(at.ACTION_TYPE_ENUM_CALLBACK)) && {
                    callback: o(r, a, n, !1)
                });
                l.push({
                    type: Te.TEXT,
                    text: s.slice(c, d.index)
                }),
                l.push(p),
                c = Number(d.index) + d[0].length
            }
            )),
            l.push({
                type: Te.TEXT,
                text: s.slice(c)
            }),
            l
        }
        function ft({rawButtons: e, popupMeta: t, style: n, callback: r}) {
            if (!e)
                return;
            const a = [];
            return e.forEach(( ({text: e, is_bold: o, is_highlight: i, action: l}) => {
                const s = {
                    text: e,
                    isBold: Boolean(o),
                    isHighlight: Boolean(i),
                    callback: r(t, n, l, !0)
                };
                a.push(s)
            }
            )),
            a
        }
        function ht(e) {
            switch (e) {
            case Je.POPUP_STYLE_ENUM_PC_BANNER:
                return Ee.PC_BANNER;
            case Je.POPUP_STYLE_ENUM_MOBILE_BANNER:
                return Ee.MOBILE_BANNER;
            case Je.POPUP_STYLE_ENUM_WEBVIEW:
                return Ee.WEBVIEW;
            case Je.POPUP_STYLE_ENUM_POP:
            default:
                return Ee.POP
            }
        }
        (Ze = qe || (qe = {})).CALLBACK = "callback",
        Ze.H5 = "h5",
        (Qe = Je || (Je = {}))[Qe.POPUP_STYLE_ENUM_BOTTOM = 0] = "POPUP_STYLE_ENUM_BOTTOM",
        Qe[Qe.POPUP_STYLE_ENUM_POP = 1] = "POPUP_STYLE_ENUM_POP",
        Qe[Qe.POPUP_STYLE_ENUM_FULLSCREEN = 2] = "POPUP_STYLE_ENUM_FULLSCREEN",
        Qe[Qe.POPUP_STYLE_ENUM_WEBVIEW = 3] = "POPUP_STYLE_ENUM_WEBVIEW",
        Qe[Qe.POPUP_STYLE_ENUM_PC_BANNER = 4] = "POPUP_STYLE_ENUM_PC_BANNER",
        Qe[Qe.POPUP_STYLE_ENUM_MOBILE_BANNER = 5] = "POPUP_STYLE_ENUM_MOBILE_BANNER",
        (tt = et || (et = {}))[tt.LINK_TYPE_ENUM_INTERNAL = 0] = "LINK_TYPE_ENUM_INTERNAL",
        tt[tt.LINK_TYPE_ENUM_EXTERNAL = 1] = "LINK_TYPE_ENUM_EXTERNAL",
        tt[tt.LINK_TYPE_ENUM_SUB_POPUP = 2] = "LINK_TYPE_ENUM_SUB_POPUP",
        tt[tt.LINK_TYPE_UPGRADE = 3] = "LINK_TYPE_UPGRADE",
        (rt = nt || (nt = {}))[rt.POPUP_OPERATION_ENUM_LEGACY_0 = 0] = "POPUP_OPERATION_ENUM_LEGACY_0",
        rt[rt.POPUP_OPERATION_ENUM_LEGACY_1 = 1] = "POPUP_OPERATION_ENUM_LEGACY_1",
        rt[rt.POPUP_OPERATION_ENUM_LEGACY_2 = 2] = "POPUP_OPERATION_ENUM_LEGACY_2",
        rt[rt.POPUP_OPERATION_ENUM_LEGACY_3 = 3] = "POPUP_OPERATION_ENUM_LEGACY_3",
        rt[rt.POPUP_OPERATION_ENUM_LEGACY_4_AGREE = 4] = "POPUP_OPERATION_ENUM_LEGACY_4_AGREE",
        rt[rt.POPUP_OPERATION_ENUM_LEGACY_5_REMIND_ME_LATER = 5] = "POPUP_OPERATION_ENUM_LEGACY_5_REMIND_ME_LATER",
        rt[rt.POPUP_OPERATION_ENUM_LEGACY_7_LEARN_MORE = 6] = "POPUP_OPERATION_ENUM_LEGACY_7_LEARN_MORE",
        rt[rt.POPUP_OPERATION_ENUM_LEGACY_8_CONFIRM = 7] = "POPUP_OPERATION_ENUM_LEGACY_8_CONFIRM",
        rt[rt.POPUP_OPERATION_ENUM_LEGACY_9_NOT_NOW = 8] = "POPUP_OPERATION_ENUM_LEGACY_9_NOT_NOW",
        rt[rt.POPUP_OPERATION_ENUM_LEGACY_10_DOWNLOAD_YOUR_DATA = 9] = "POPUP_OPERATION_ENUM_LEGACY_10_DOWNLOAD_YOUR_DATA",
        rt[rt.POPUP_OPERATION_ENUM_LEGACY_11_SUBMIT_APPEAL = 10] = "POPUP_OPERATION_ENUM_LEGACY_11_SUBMIT_APPEAL",
        rt[rt.POPUP_OPERATION_ENUM_LEGACY_20_DOWNLOAD_YOUR_DATA = 11] = "POPUP_OPERATION_ENUM_LEGACY_20_DOWNLOAD_YOUR_DATA",
        rt[rt.POPUP_OPERATION_ENUM_LEGACY_100_GOT_IT = 12] = "POPUP_OPERATION_ENUM_LEGACY_100_GOT_IT",
        rt[rt.POPUP_OPERATION_ENUM_LEGACY_101_LEARN_MORE = 13] = "POPUP_OPERATION_ENUM_LEGACY_101_LEARN_MORE",
        rt[rt.POPUP_OPERATION_ENUM_LEGACY_200_LEARN_MORE = 14] = "POPUP_OPERATION_ENUM_LEGACY_200_LEARN_MORE",
        (ot = at || (at = {}))[ot.ACTION_TYPE_ENUM_CALLBACK = 0] = "ACTION_TYPE_ENUM_CALLBACK",
        ot[ot.ACTION_TYPE_ENUM_UPDATE_CONSENT = 1] = "ACTION_TYPE_ENUM_UPDATE_CONSENT",
        ot[ot.ACTION_TYPE_ENUM_FETCH_COMPLIANCE_SETTING = 2] = "ACTION_TYPE_ENUM_FETCH_COMPLIANCE_SETTING",
        (lt = it || (it = {}))[lt.POPUP_CALLBACK_TYPE_ENUM_UNKNOWN = 0] = "POPUP_CALLBACK_TYPE_ENUM_UNKNOWN",
        lt[lt.POPUP_CALLBACK_TYPE_ENUM_USER_ID = 1] = "POPUP_CALLBACK_TYPE_ENUM_USER_ID",
        lt[lt.POPUP_CALLBACK_TYPE_ENUM_DEVICE_ID = 2] = "POPUP_CALLBACK_TYPE_ENUM_DEVICE_ID";
        const vt = "${locale}";
        function bt({link: e, lang: t}) {
            return e.replace(vt, t)
        }
        function gt({lang: e, body: t, bodyLinks: n, popupMeta: r, callback: a}) {
            if (!t)
                return;
            if (!n || 0 === n.length)
                return [{
                    type: Te.TEXT,
                    text: t
                }];
            const o = []
              , i = t;
            let l = 0;
            const s = /%s/g;
            return n.forEach(( ({name: t, link: n="", operation: c, dismiss: u, approve: d, new_web_tab: p, extra: f, link_type: h}) => {
                const v = s.exec(i);
                if (!v)
                    return;
                const b = bt({
                    link: n,
                    lang: e
                })
                  , g = Boolean(d || u)
                  , m = h === qe.CALLBACK || d
                  , y = {
                    type: n ? Te.LINK : Te.BUTTON,
                    text: t,
                    link: b,
                    linkType: p ? Ce.EXTERNAL : Ce.INTERNAL,
                    onClick: a(g, !!m, dt(ut({}, r), {
                        extra: f,
                        operation: null == c ? void 0 : c.toString()
                    }))
                };
                o.push({
                    type: Te.TEXT,
                    text: i.slice(l, v.index)
                }),
                o.push(y),
                l = Number(v.index) + v[0].length
            }
            )),
            o.push({
                type: Te.TEXT,
                text: i.slice(l)
            }),
            o
        }
        function mt({lang: e, first_button_highlight: t, rawButtons: n, popupMeta: r, callback: a}) {
            if (0 === n.length)
                return;
            const o = [];
            return n.forEach(( ({text: n, is_bold: i, link_type: l, link: s, extra: c, approve: u, operation: d, dismiss: p, dismiss_all: f, new_web_tab: h, is_close_style: v}, b) => {
                const g = Boolean(u || p || f)
                  , m = l === qe.CALLBACK || u
                  , y = {
                    text: n,
                    isCloseStyle: v,
                    isBold: Boolean(i),
                    isHighlight: 0 === b && t,
                    link: s ? bt({
                        link: s,
                        lang: e
                    }) : void 0,
                    linkType: h ? Ce.EXTERNAL : Ce.INTERNAL,
                    onClick: a(g, !!m, dt(ut({}, r), {
                        extra: c,
                        operation: null == d ? void 0 : d.toString()
                    }), s ? {
                        link: bt({
                            link: s,
                            lang: e
                        }),
                        linkType: h ? Ce.EXTERNAL : Ce.INTERNAL
                    } : void 0)
                };
                o.push(y)
            }
            )),
            o
        }
        function yt(e) {
            if (e)
                return {
                    url: e,
                    width: "auto",
                    height: "48px"
                }
        }
        function xt(e, t, n, r, a, o, i) {
            try {
                var l = e[o](i)
                  , s = l.value
            } catch (e) {
                return void n(e)
            }
            l.done ? t(s) : Promise.resolve(s).then(r, a)
        }
        function _t(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        class Et {
            init(e, t) {
                We.info("[PopupModule]: init", e),
                this._lang = e.lang,
                this._popupApi = e.apiPath || Ue,
                this._callbackApi = e.callbackApiPath || Me,
                this._scene = e.scene || 0,
                this._dataProcessor = e.dataProcessor || we.V2,
                this._customizedProcessor = e.customizeDataProcessor,
                this._navigateToNextPopup = t.navigateToNextPopup,
                this._completeAllPopups = t.completeAllPopups,
                this._beforeSendCallback = t.beforeSendCallback,
                this._afterSendCallback = t.afterSendCallback,
                this._adjustAPIConfig()
            }
            _adjustAPIConfig() {
                this._popupApi === je ? (this._callbackApi = Le,
                this._dataProcessor = we.V2) : this._popupApi === Ae && (this._callbackApi = "/api/policy/notice/approve/",
                this._dataProcessor = we.V1)
            }
            fetch(e) {
                return We.info("[PopupModule]: fetch ", this._popupApi),
                st.sendRequest(this._popupApi, "GET", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {}
                          , r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }
                        )))),
                        r.forEach((function(t) {
                            _t(e, t, n[t])
                        }
                        ))
                    }
                    return e
                }({
                    scene: this._scene
                }, e))
            }
            processData(e) {
                switch (We.info("[PopupModule]: process data", e),
                this._dataProcessor) {
                case we.V1:
                    return this._processV1Data(e.data);
                case we.V2:
                    return this._processV2Data(e.data);
                case we.CUSTOMIZED:
                    return this._processCustomizedData(e);
                default:
                    return this._processV2Data(e.data)
                }
            }
            _processV1Data(e) {
                const t = "string" == typeof e ? JSON.parse(e) : e;
                We.info("[PopupModule]: process V1 response", t);
                const n = null == t ? void 0 : t.policy_notices;
                if (!n || 0 === n.length)
                    return [];
                const r = [];
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
                        icon: yt(e.icon_url),
                        iconDark: yt(e.icon_url_dark),
                        body: gt({
                            lang: this._lang,
                            body: e.body,
                            bodyLinks: e.body_link_list,
                            popupMeta: t,
                            callback: this.callbackFunctionV1
                        }),
                        buttons: mt({
                            lang: this._lang,
                            first_button_highlight: Boolean(e.first_button_highlight),
                            rawButtons: e.actions || [],
                            popupMeta: t,
                            callback: this.callbackFunctionV1
                        })
                    };
                    r.push(n)
                }
                )),
                r
            }
            _processV2Data(e) {
                const t = "string" == typeof e ? JSON.parse(e) : e;
                return We.info("[PopupModule]: process V2 response", t),
                t.popup_responses.map((e => {
                    const t = e.popup_ui
                      , n = e.popup_meta;
                    return {
                        eventInfo: {
                            style: t.style,
                            business: n.business
                        },
                        popupType: ht(t.style),
                        icon: yt(t.icon_url),
                        iconDark: yt(t.icon_url_dark),
                        title: t.title,
                        buttons: ft({
                            rawButtons: t.buttons,
                            popupMeta: n,
                            style: t.style,
                            callback: this.callbackFunctionV2
                        }),
                        body: pt({
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
                if (We.info("[PopupModule]: process customized response"),
                !e || !this._customizedProcessor)
                    return [];
                try {
                    return this._customizedProcessor(e)
                } catch (e) {
                    We.error("[PopupModule]: process customized response fail", e)
                }
                return []
            }
            destruct() {
                We.info("[PopupModule]: destruct")
            }
            constructor() {
                this.callbackFunctionV1 = (e, t, n, r) => () => {
                    t && this._sendCallback(n).then(( () => {
                        We.info("[PopupModule]: send callback finished")
                    }
                    )).catch((e => {
                        We.error("[PopupModule]: send callback fail", e)
                    }
                    )),
                    r && (r.linkType === Ce.EXTERNAL ? window.open(r.link) : window.location.href = r.link),
                    e && this._navigateToNextPopup()
                }
                ,
                this.callbackFunctionV2 = (e, t, n, r) => () => {
                    if ((null == n ? void 0 : n.actions) && n.actions.includes(at.ACTION_TYPE_ENUM_CALLBACK) && this._sendCallback({
                        business: e.business,
                        version: e.version,
                        style: t,
                        extra: n.extra,
                        operation: n.operation
                    }).then(( () => {
                        We.info("[PopupModule]: send callback finished")
                    }
                    )).catch((e => {
                        We.error("[PopupModule]: send callback fail", e)
                    }
                    )),
                    r && (null == n ? void 0 : n.link)) {
                        const e = bt({
                            link: n.link,
                            lang: this._lang
                        });
                        n.link_type === et.LINK_TYPE_ENUM_EXTERNAL ? window.open(e) : window.location.href = e
                    }
                    (null == n ? void 0 : n.dismiss_all) ? this._completeAllPopups() : (null == n ? void 0 : n.dismiss) && this._navigateToNextPopup()
                }
                ;
                var e, t, n = this;
                return this._sendCallback = (e = function*(e) {
                    n._beforeSendCallback();
                    try {
                        const t = "object" == typeof e ? new URLSearchParams(e) : e;
                        yield st.sendRequest(n._callbackApi, "POST", t, {
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
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);
                        function i(e) {
                            xt(o, r, a, i, l, "next", e)
                        }
                        function l(e) {
                            xt(o, r, a, i, l, "throw", e)
                        }
                        i(void 0)
                    }
                    ))
                }
                ,
                function(e) {
                    return t.apply(this, arguments)
                }
                ),
                Et._instance || (Et._instance = this),
                Et._instance
            }
        }
        var Ot = new Et;
        class wt {
            init(e) {
                We.info("[LifeCycleModule]: init"),
                We.info("[LifeCycleModule]: init Popup module"),
                Ot.init(e, {
                    navigateToNextPopup: this.navigateToNextPopup,
                    completeAllPopups: this.completeAllPopups,
                    beforeSendCallback: this.beforeSendCallback,
                    afterSendCallback: this.afterSendCallback
                }),
                this._currentEvent = new Set
            }
            addEventListener(e, t) {
                We.info("[LifeCycleModule]: add event listener to ", e);
                const n = this._eventListeners.get(e) || [];
                this._eventListeners.set(e, [...n, t])
            }
            removeEventListener(e, t) {
                We.info("[LifeCycleModule]: remove event listener from ", e);
                const n = this._eventListeners.get(e);
                if (!n)
                    return;
                const r = n.filter((e => e !== t));
                this._eventListeners.set(e, r)
            }
            removeAllEventListeners(e) {
                We.info("[LifeCycleModule]: remove all event listeners from ", e),
                this._eventListeners.set(e, [])
            }
            fetchPopupData(e) {
                return We.info("[LifeCycleModule]: fetch popup data"),
                this.dispatchEvent(Re.beforeFetchData),
                Ot.fetch(e).then((e => {
                    this.dispatchEvent(Re.afterFetchData),
                    We.info("[LifeCycleModule]: fetch popup data done, start processing response"),
                    this.processData(e)
                }
                )).catch((e => {
                    We.error("[LifeCycleModule]: fetch failure - ", e),
                    this.dispatchEvent(Re.fetchDataError)
                }
                ))
            }
            processData(e) {
                try {
                    const t = Ot.processData(e);
                    (null == t ? void 0 : t.length) ? (We.info("[LifeCycleModule]: process response done, popup data ready"),
                    this._currentPopupIndex = 0,
                    this._popupData = t,
                    this.dispatchEvent(Re.popupDataReady)) : We.info("[LifeCycleModule]: process popup response done, no popup data")
                } catch (e) {
                    We.error("[LifeCycleModule]: process popup response error - ", e)
                }
            }
            hasPopupData() {
                return We.info("[LifeCycleModule]: has popup data"),
                this._popupData.length > 0
            }
            getAllPopupData() {
                return We.info("[LifeCycleModule]: get all popup data"),
                this._popupData
            }
            getCurrentPopupData() {
                return We.info("[LifeCycleModule]: get current popup data"),
                this._popupData[this._currentPopupIndex]
            }
            hasNextPopup() {
                We.info("[LifeCycleModule]: has next popup");
                const e = this._popupData.length;
                return this._currentPopupIndex + 1 < e
            }
            destruct() {
                We.info("[LifeCycleModule]: destruct"),
                Ot.destruct(),
                this._currentPopupIndex = -1,
                this._popupData = [],
                this._currentEvent.clear()
            }
            constructor() {
                return this._eventListeners = new Map,
                this._currentPopupIndex = -1,
                this._popupData = [],
                this.dispatchEvent = e => {
                    if (We.info("[LifeCycleModule]: dispatch start - ", e),
                    this._currentEvent.has(e))
                        return void We.error("[LifeCycleModule]: Dispatch is already in process", {
                            currentEvent: [...this._currentEvent],
                            upcomingEvent: e
                        });
                    this._currentEvent.add(e);
                    const t = this._eventListeners.get(e);
                    t && t.forEach((t => {
                        try {
                            t()
                        } catch (t) {
                            We.warn(`[LifeCycleModule]: error executing listener for event: ${e}`, t)
                        }
                    }
                    )),
                    this._currentEvent.delete(e),
                    We.info("[LifeCycleModule]: dispatch finish - ", e)
                }
                ,
                this.beforeSendCallback = () => {
                    We.info("[LifeCycleModule]: before sendCallback"),
                    this.dispatchEvent(Re.beforeSendCallback)
                }
                ,
                this.afterSendCallback = (e, t) => {
                    e ? (We.info("[LifeCycleModule]: after sendCallback"),
                    this.dispatchEvent(Re.afterSendCallback)) : (We.error("[LifeCycleModule]: send callback failure", t),
                    this.dispatchEvent(Re.sendCallbackError))
                }
                ,
                this.navigateToNextPopup = () => {
                    We.info("[LifeCycleModule]: navigate to next popup"),
                    this._currentPopupIndex + 1 < this._popupData.length ? this._currentPopupIndex = this._currentPopupIndex + 1 : (We.warn("[LifeCycleModule]: navigate to next popup failure - no next popup"),
                    this.dispatchEvent(Re.allPopupsCompleted))
                }
                ,
                this.completeAllPopups = () => {
                    We.info("[LifeCycleModule]: complete all popup"),
                    this._currentPopupIndex = this._popupData.length
                }
                ,
                wt._instance || (wt._instance = this),
                wt._instance
            }
        }
        var Pt = new wt;
        function Tt(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function St(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    Tt(e, t, n[t])
                }
                ))
            }
            return e
        }
        const Ct = {
            appId: -1,
            region: "",
            wid: -1,
            lang: "en",
            isDebug: !1,
            isMobile: !1,
            apiDomain: "",
            apiPath: Ue,
            callbackApiPath: Me,
            dataProcessor: we.V2,
            scene: 0,
            timeout: 1e3
        };
        class kt {
            init(e) {
                if (this._isInitialized)
                    return;
                const t = St({}, Ct, e);
                We.init(St({
                    debug: Boolean(t.isDebug),
                    meta: {
                        appID: t.appId,
                        wid: t.wid,
                        lang: t.lang
                    }
                }, t.logging && {
                    customLoggingModule: t.logging
                })),
                We.info("[SDK]: init global module"),
                st.init({
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
                Pt.init(t),
                Ot.init(t, {
                    navigateToNextPopup: Pt.navigateToNextPopup,
                    completeAllPopups: Pt.completeAllPopups,
                    beforeSendCallback: Pt.beforeSendCallback,
                    afterSendCallback: Pt.afterSendCallback
                }),
                this._isInitialized = !0
            }
            fetchPopupData(e) {
                return We.info("[SDK]: fetch popup data"),
                Pt.fetchPopupData(e)
            }
            hasPopupData() {
                return We.info("[SDK]: has popup data"),
                Pt.hasPopupData()
            }
            getPopupData() {
                return We.info("[SDK]: get popup data"),
                this.hasPopupData() ? Pt.getCurrentPopupData() : null
            }
            hasNextPopup() {
                return We.info("[SDK]: has next popup"),
                Pt.hasNextPopup()
            }
            addEventListener(e, t) {
                if (We.info("[SDK]: addEventListener"),
                e && Re[e] && "function" == typeof t)
                    Pt.addEventListener(e, t);
                else {
                    const e = "[SDK]: addEventListener - invalid param for adding new event listener";
                    We.error(e, new Error(e))
                }
            }
            removeEventListener(e, t) {
                We.info("[SDK]: removeEventListener"),
                e && Re[e] && "function" == typeof t ? Pt.removeEventListener(e, t) : We.warn("[SDK]: removeEventListener - invalid param for removing event listener")
            }
            removeAllEventListeners(e) {
                We.info("[SDK]: removeAllEventListener"),
                e && Re[e] ? Pt.removeAllEventListeners(e) : We.warn("[SDK]: removeEventListener - invalid param for removing all event listener")
            }
            destruct() {
                We.info("[SDK]: destruct"),
                Pt.destruct(),
                st.destruct(),
                We.destruct()
            }
            constructor() {
                return this._isInitialized = !1,
                kt._instance || (kt._instance = this),
                kt._instance
            }
        }
        var It = new kt
          , Nt = n(89787);
        const jt = (0,
        f.A)("div", {
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
          , At = (0,
        f.A)("div", {
            target: "e1mpj5ji1"
        })({
            padding: "12px 12px 12px 16px",
            display: "flex",
            justifyContent: "space-between",
            gap: "8px"
        }, "label:DivBannerWrapper;")
          , Ut = (0,
        f.A)("div", {
            target: "e1mpj5ji2"
        })({
            display: "flex",
            alignItems: "center",
            gap: "16px"
        }, "label:DivLeftContainer;")
          , Lt = (0,
        f.A)("div", {
            target: "e1mpj5ji3"
        })({
            display: "flex",
            alignItems: "flex-start",
            gap: "24px"
        }, "label:DivRightContainer;")
          , Mt = (0,
        f.A)("div", {
            target: "e1mpj5ji4"
        })({
            alignSelf: "center",
            lineHeight: "18px"
        }, "label:DivContentWrapper;")
          , Rt = (0,
        f.A)("div", {
            target: "e1mpj5ji5"
        })({
            margin: "9px 0"
        }, "label:DivButton;");
        function Dt(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Bt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    Dt(e, t, n[t])
                }
                ))
            }
            return e
        }
        function Ft(e, t) {
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
        const zt = e => {
            const {content: t, open: n, colorScheme: a, config: o, eventReport: l} = e;
            if (!n)
                return null;
            const {buttons: s, icon: c, iconDark: u, body: d, title: p, eventInfo: f} = t
              , h = (0,
            i.useRef)(null)
              , v = (0,
            i.useCallback)((e => {
                var t;
                "Enter" !== e.key && " " !== e.key || (e.preventDefault(),
                e.stopPropagation(),
                null === (t = h.current) || void 0 === t || t.click())
            }
            ), [])
              , b = "dark" === a ? u : c;
            var g, m;
            return (0,
            r.jsx)(jt, {
                role: "alert",
                style: {
                    top: null !== (g = null == o ? void 0 : o.topOffset) && void 0 !== g ? g : "0",
                    zIndex: null !== (m = null == o ? void 0 : o.zIndex) && void 0 !== m ? m : 999,
                    backgroundColor: "var(--ui-sheet-backdrop-1)"
                },
                children: (0,
                r.jsxs)(At, {
                    children: [(0,
                    r.jsxs)(Ut, {
                        children: [b && (0,
                        r.jsx)("img", {
                            alt: "icon",
                            src: b.url,
                            height: b.height,
                            width: b.width
                        }), (0,
                        r.jsxs)(Mt, {
                            children: [p && (0,
                            r.jsx)(Nt.Fm, {
                                as: "h4",
                                size: 15,
                                color: "UIShapeText1OnNeutral",
                                weight: "medium",
                                children: p
                            }), (0,
                            r.jsx)(Nt.Fm, {
                                as: "p",
                                size: 15,
                                color: "UIShapeText1OnNeutral",
                                children: null == d ? void 0 : d.map((e => {
                                    return e.type === Te.TEXT ? e.text : (0,
                                    r.jsx)(Nt.QKx, {
                                        color: "UIShapeText1OnNeutral",
                                        label: e.text,
                                        href: null !== (t = e.link) && void 0 !== t ? t : "",
                                        target: e.linkType === Ce.EXTERNAL ? "_blank" : "_self",
                                        onClick: () => {
                                            var t;
                                            null == l || l(on, Ft(Bt({}, f), {
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
                    r.jsx)(Lt, {
                        children: null == s ? void 0 : s.map((e => e.isCloseStyle ? (0,
                        r.jsx)("div", {
                            onClick: () => {
                                var t;
                                null == l || l(on, Ft(Bt({}, f), {
                                    button_info: e.text
                                })),
                                null === (t = e.onClick) || void 0 === t || t.call(e)
                            }
                            ,
                            onKeyDown: v,
                            ref: h,
                            tabIndex: 0,
                            role: "button",
                            children: (0,
                            r.jsx)(Nt.gn, {
                                size: "24px",
                                style: {
                                    cursor: "pointer"
                                },
                                color: "BrandTikTokBackground"
                            })
                        }, e.text) : (0,
                        r.jsx)(Rt, {
                            children: (0,
                            r.jsx)(Nt.I05, {
                                label: e.text,
                                shape: "borderless",
                                variant: "primary",
                                onClick: () => {
                                    var t;
                                    null == l || l(on, Ft(Bt({}, f), {
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
          , Wt = (0,
        f.A)("div", {
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
          , Gt = (0,
        f.A)("div", {
            target: "e1krb51j1"
        })({
            width: 1150,
            maxWidth: 1150,
            padding: "16px 24px",
            display: "flex",
            justifyContent: "space-between",
            gap: "24px"
        }, "label:DivBannerWrapper;")
          , Kt = (0,
        f.A)("div", {
            target: "e1krb51j2"
        })({
            display: "flex",
            alignItems: "center",
            gap: "16px"
        }, "label:DivLeftContainer;")
          , Ht = (0,
        f.A)("div", {
            target: "e1krb51j3"
        })([{
            display: "flex",
            alignItems: "center",
            gap: "24px"
        }], "label:DivRightContainer;")
          , Xt = (0,
        f.A)("div", {
            target: "e1krb51j4"
        })({
            alignSelf: "center"
        }, "label:DivContentWrapper;")
          , Yt = (0,
        f.A)("div", {
            target: "e1krb51j5"
        })({
            margin: "9px 0"
        }, "label:DivButton;");
        function Vt(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function $t(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    Vt(e, t, n[t])
                }
                ))
            }
            return e
        }
        function qt(e, t) {
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
        const Zt = e => {
            const {content: t, open: n, colorScheme: a, config: o, eventReport: l} = e;
            if (!n)
                return null;
            const {buttons: s, icon: c, iconDark: u, body: d, title: p, eventInfo: f} = t
              , h = (0,
            i.useRef)(null)
              , v = (0,
            i.useCallback)((e => {
                var t;
                "Enter" !== e.key && " " !== e.key || (e.preventDefault(),
                e.stopPropagation(),
                null === (t = h.current) || void 0 === t || t.click())
            }
            ), [])
              , b = "dark" === a ? u : c;
            var g, m;
            return (0,
            r.jsx)(Wt, {
                role: "alert",
                style: {
                    top: null !== (g = null == o ? void 0 : o.topOffset) && void 0 !== g ? g : "59px",
                    zIndex: null !== (m = null == o ? void 0 : o.zIndex) && void 0 !== m ? m : 999
                },
                children: (0,
                r.jsxs)(Gt, {
                    children: [(0,
                    r.jsxs)(Kt, {
                        children: [b && (0,
                        r.jsx)("img", {
                            alt: "icon",
                            src: b.url,
                            height: b.height,
                            width: b.width
                        }), (0,
                        r.jsxs)(Xt, {
                            children: [p && (0,
                            r.jsx)(Nt.Fm, {
                                as: "h4",
                                color: "UIText1",
                                size: 16,
                                weight: "medium",
                                children: p
                            }), d && (0,
                            r.jsx)(Nt.Fm, {
                                as: "p",
                                size: 16,
                                weight: "medium",
                                color: "UIText2",
                                children: d.map((e => {
                                    return e.type === Te.TEXT ? e.text : (0,
                                    r.jsx)(Nt.QKx, {
                                        color: "UIText1Display",
                                        label: e.text,
                                        href: null !== (t = e.link) && void 0 !== t ? t : "",
                                        target: e.linkType === Ce.EXTERNAL ? "_blank" : "_self",
                                        onClick: () => {
                                            var t;
                                            null == l || l(on, qt($t({}, f), {
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
                    r.jsx)(Ht, {
                        children: null == s ? void 0 : s.map((e => e.isCloseStyle ? (0,
                        r.jsx)("div", {
                            onClick: () => {
                                var t;
                                null == l || l(on, qt($t({}, f), {
                                    button_info: e.text
                                })),
                                null === (t = e.onClick) || void 0 === t || t.call(e)
                            }
                            ,
                            onKeyDown: v,
                            ref: h,
                            tabIndex: 0,
                            role: "button",
                            children: (0,
                            r.jsx)(Nt.gn, {
                                size: "24px",
                                style: {
                                    cursor: "pointer"
                                }
                            })
                        }, e.text) : (0,
                        r.jsx)(Yt, {
                            children: (0,
                            r.jsx)(Nt.I05, {
                                label: e.text,
                                shape: "borderless",
                                variant: "primary",
                                onClick: () => {
                                    var t;
                                    null == l || l(on, qt($t({}, f), {
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
          , Jt = (0,
        f.A)("div", {
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
          , Qt = (0,
        f.A)("img", {
            target: "e140os951"
        })({
            display: "block",
            margin: "8px auto"
        }, "label:Img;");
        function en(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function tn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    en(e, t, n[t])
                }
                ))
            }
            return e
        }
        function nn(e, t) {
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
        const rn = e => {
            var t;
            const {icon: n, iconDark: a, buttons: o, body: i, title: l, eventInfo: s} = e.content
              , c = "dark" === e.colorScheme ? a : n;
            var u;
            return (0,
            r.jsxs)(Nt.nOL, {
                open: e.open,
                onOpenChange: () => {}
                ,
                style: {
                    padding: "32px 0",
                    zIndex: null !== (u = null === (t = e.config) || void 0 === t ? void 0 : t.zIndex) && void 0 !== u ? u : 9999
                },
                children: [c && (0,
                r.jsx)(Qt, {
                    src: c.url,
                    height: c.height,
                    width: c.width
                }), l && (0,
                r.jsx)(Nt.Fm, {
                    as: "h2",
                    align: "center",
                    size: 20,
                    weight: "bold",
                    style: {
                        wordBreak: "break-word",
                        lineHeight: "24px",
                        padding: "0 20px"
                    },
                    children: l
                }), (null == i ? void 0 : i.length) && (0,
                r.jsx)(Nt.Fm, {
                    as: "p",
                    size: 15,
                    align: "center",
                    style: {
                        lineHeight: "18px",
                        padding: "7px 24px 24px"
                    },
                    children: i.map((t => {
                        return t.type === Te.TEXT ? t.text : (0,
                        r.jsx)(Nt.QKx, {
                            color: "UIText1Display",
                            weight: "medium",
                            label: t.text,
                            href: null !== (n = t.link) && void 0 !== n ? n : "",
                            target: t.linkType === Ce.EXTERNAL ? "_blank" : "_self",
                            onClick: () => {
                                var n, r;
                                null === (n = e.eventReport) || void 0 === n || n.call(e, on, nn(tn({}, s), {
                                    button_info: t.text
                                })),
                                null === (r = t.onClick) || void 0 === r || r.call(t)
                            }
                        }, t.text);
                        var n
                    }
                    ))
                }), (null == o ? void 0 : o.length) && (0,
                r.jsx)(Jt, {
                    children: o.map((t => (0,
                    r.jsx)(Nt.I05, {
                        style: t.isBold ? {
                            fontWeight: "bold"
                        } : {},
                        label: t.text,
                        variant: t.isHighlight ? "primary" : "secondary",
                        onClick: () => {
                            var n, r;
                            null === (n = e.eventReport) || void 0 === n || n.call(e, on, nn(tn({}, s), {
                                button_info: t.text
                            })),
                            null === (r = t.onClick) || void 0 === r || r.call(t)
                        }
                    }, t.text)))
                })]
            })
        }
          , an = n.p + "bdd41fc62973a823806b.css";
        const on = "qa_tns_general_dialog_click";
        function ln() {
            return (0,
            r.jsx)("link", {
                rel: "stylesheet",
                href: an
            })
        }
        const sn = e => {
            const [t,n] = (0,
            i.useState)(null)
              , {eventReport: a, noFetchDataAtInit: o, SDKConfig: l, visible: s, onReadyToClose: c, onReadyToShow: u, colorScheme: d, textDirection: p, componentConfig: f} = e;
            if ((0,
            i.useEffect)(( () => (It.init(l),
            o || It.fetchPopupData().catch(null),
            It.addEventListener(Re.popupDataReady, ( () => {
                It.getPopupData() && (n(It.getPopupData()),
                u())
            }
            )),
            It.addEventListener(Re.afterNavigateToNextPopup, ( () => {
                n(It.getPopupData())
            }
            )),
            It.addEventListener(Re.allPopupsCompleted, ( () => {
                c()
            }
            )),
            () => {
                It.destruct()
            }
            )), []),
            (0,
            i.useEffect)(( () => {
                s && t && a && a("tns_general_dialog_show", t.eventInfo)
            }
            ), [s]),
            !t)
                return null;
            const {popupType: h} = t
              , v = function(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, o = Object.keys(e);
                    for (r = 0; r < o.length; r++)
                        n = o[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++)
                        n = o[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }(t, ["popupType"]);
            let b;
            switch (h) {
            case Ee.MOBILE_BANNER:
                b = (0,
                r.jsx)(zt, {
                    colorScheme: d,
                    content: v,
                    open: s,
                    config: null == f ? void 0 : f.mBanner,
                    eventReport: a
                });
                break;
            case Ee.PC_BANNER:
                b = (0,
                r.jsx)(Zt, {
                    colorScheme: d,
                    content: v,
                    open: s,
                    config: null == f ? void 0 : f.pcBanner,
                    eventReport: a
                });
                break;
            case Ee.POP:
            default:
                b = (0,
                r.jsx)(rn, {
                    colorScheme: d,
                    content: v,
                    open: s,
                    config: null == f ? void 0 : f.popup,
                    eventReport: a
                })
            }
            return (0,
            r.jsxs)(Nt.juU, {
                colorSchemePreference: d,
                textDirection: p,
                children: [(0,
                r.jsx)(ln, {}), b]
            })
        }
          , cn = It.fetchPopupData;
        var un = n(67518)
          , dn = n(24642);
        const pn = e => {
            var t, n;
            const {onHide: a, hideByDefault: o} = e
              , u = (0,
            i.useRef)(!1)
              , [p,f] = (0,
            i.useState)(!1)
              , h = (0,
            i.useCallback)(( () => {
                null == a || a(),
                f(!1)
            }
            ), [a])
              , {language: v, wid: b, region: g} = null !== (t = (0,
            s.W)(( () => ["language", "wid", "region"]), [])) && void 0 !== t ? t : {}
              , {isMobile: m} = null !== (n = (0,
            c.U)(( () => ["isMobile"]), [])) && void 0 !== n ? n : {}
              , {isDark: y, direction: x} = (0,
            un.u)()
              , _ = (0,
            i.useCallback)((e => {
                u.current || (u.current = !0,
                cn({
                    scene: me,
                    extra: JSON.stringify(e)
                }).catch(null))
            }
            ), [])
              , E = (0,
            i.useCallback)((e => {
                cn({
                    scene: me,
                    extra: JSON.stringify(e)
                }).catch(null)
            }
            ), []);
            if ((0,
            i.useEffect)(( () => (l.LZ.on(l.Rh, d()(_, 2e3)),
            l.LZ.on(l.gk, d()(E, 2e3)),
            () => {
                l.LZ.clear(l.Rh),
                l.LZ.clear(l.gk)
            }
            )), [_, E]),
            !b || !g || !v)
                return null;
            const O = {
                appId: 1988,
                wid: b,
                isMobile: m,
                region: g,
                lang: v,
                apiDomain: location.origin,
                apiPath: Ae
            };
            return (0,
            r.jsx)("div", {
                id: "web-universal-popup",
                children: (0,
                r.jsx)(sn, {
                    eventReport: dn.f.event.bind(dn.f),
                    noFetchDataAtInit: o,
                    SDKConfig: O,
                    visible: p,
                    colorScheme: y ? "dark" : "light",
                    textDirection: x,
                    onReadyToClose: h,
                    onReadyToShow: () => f(!0)
                })
            })
        }
        ;
        var fn = n(62209);
        const hn = function(e) {
            return (0,
            fn.f1)() ? (0,
            r.jsx)(pn, Object.assign({}, e)) : (0,
            r.jsx)(_e, Object.assign({}, e))
        }
    }
    ,
    52912: (e, t, n) => {
        n.d(t, {
            H: () => p
        });
        var r = n(58632)
          , a = n(64162)
          , o = n(4126)
          , i = n(93995)
          , l = n(26324)
          , s = n(62564)
          , c = n(98812)
          , u = n(9927)
          , d = n(79685);
        let p = class extends a.E {
            constructor(e) {
                super(),
                this.service = e,
                this.defaultState = {
                    popupConfig: null
                }
            }
            setPopupConfig(e, t) {
                e.popupConfig = t
            }
            getPopupConfig(e) {
                return e.pipe((0,
                s.T)(( ({lang: e, scene: t, extra: n}) => ({
                    locale: null != e ? e : "en",
                    scene: null != t ? t : 0,
                    extra: JSON.stringify(n)
                }))), (0,
                c.H)(( ({locale: e, scene: t, extra: n}) => this.service.getUniversalPopConfig({
                    locale: e,
                    scene: t,
                    extra: n
                }).pipe((0,
                s.T)(( ({policy_notices: e}) => {
                    var t;
                    return this.getActions().setPopupConfig(null !== (t = null == e ? void 0 : e[0]) && void 0 !== t ? t : null)
                }
                ))))), (0,
                u.n)({}))
            }
        }
        ;
        (0,
        r.Cg)([(0,
        o.h5)(), (0,
        r.Sn)("design:type", Function), (0,
        r.Sn)("design:paramtypes", [Object, Object]), (0,
        r.Sn)("design:returntype", void 0)], p.prototype, "setPopupConfig", null),
        (0,
        r.Cg)([(0,
        o.Mj)(), (0,
        r.Sn)("design:type", Function), (0,
        r.Sn)("design:paramtypes", [l.c]), (0,
        r.Sn)("design:returntype", void 0)], p.prototype, "getPopupConfig", null),
        p = (0,
        r.Cg)([(0,
        i.n)("UniversalPop"), (0,
        r.Sn)("design:paramtypes", [d.O])], p)
    }
    ,
    79685: (e, t, n) => {
        n.d(t, {
            O: () => l
        });
        var r = n(58632)
          , a = n(38203)
          , o = n(76031)
          , i = n(79490);
        let l = class {
            constructor(e) {
                this.fetch = e
            }
            getUniversalPopConfig(e) {
                return this.fetch.get("/api/policy/notice/", {
                    query: e
                })
            }
            setUniversalPopOperation(e) {
                return this.fetch.post("https://www.tiktok.com/api/policy/notice/approve/", {
                    body: (0,
                    o.stringify)(e)
                })
            }
            getPolicyContent(e) {
                return this.fetch.get("https://www.tiktok.com/web/api/v2/project/articleContent/", {
                    query: e
                })
            }
        }
        ;
        l = (0,
        r.Cg)([(0,
        a._)(), (0,
        r.Sn)("design:paramtypes", [i.pM])], l)
    }
    ,
    83935: (e, t, n) => {
        n.d(t, {
            W: () => l
        });
        var r = n(58632)
          , a = n(38203)
          , o = n(24642);
        const i = "new_user_registration";
        let l = class {
            constructor() {
                this.handlePolicyConfirmOnFYP = e => {
                    o.f.event("tns_web_trending_setting", e)
                }
                ,
                this.handleAgeGateResponse = (e, t) => {
                    o.f.event("age_gate_response", {
                        enter_type: "click_sign_up",
                        is_success: e ? 1 : 0,
                        error_code: t
                    })
                }
            }
            handleUniversalPopShow(e) {
                o.f.event("tns_general_dialog_show", e)
            }
            handleUniversalPopClick(e) {
                o.f.event("qa_tns_general_dialog_click", e)
            }
            handleKeywordfilteringShow(e) {
                o.f.event("enter_video_filter_kw", {
                    enter_from: e
                })
            }
            hanldeKRConsentShow() {
                o.f.event("register_terms_show", {
                    enter_from: i
                })
            }
            hanldeKRConsentClick(e, t) {
                o.f.event("register_terms_click", {
                    enter_from: i,
                    content: e,
                    click_type: t ? 1 : 0
                })
            }
            hanldeKRConsentClickNext(e) {
                o.f.event("register_terms_click_next", {
                    enter_from: i,
                    trending_on: e ? 1 : 0
                })
            }
            hanldeKRConsentClickSeeDetail(e) {
                o.f.event("register_terms_see_details", {
                    enter_method: "click",
                    enter_from: i,
                    page_detail_viewed: e
                })
            }
        }
        ;
        l = (0,
        r.Cg)([(0,
        a._)()], l)
    }
    ,
    89787: (e, t, n) => {
        var r;
        n.d(t, {
            Fm: () => Jt,
            I05: () => _n,
            N9v: () => gn,
            QKx: () => In,
            VlI: () => dn,
            gn: () => vn,
            juU: () => bn,
            nOL: () => wn
        });
        var a = n(40099)
          , o = n(18499)
          , i = function(e, t, n, r) {
            return new (n || (n = Promise))((function(a, o) {
                function i(e) {
                    try {
                        s(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    try {
                        s(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, l)
                }
                s((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , l = function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var a = 0;
                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
            }
            return n
        };
        const s = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, {
            UIText1: "var(--ui-text-1)",
            UIText1Display: "var(--ui-text-1-display)",
            UIText2: "var(--ui-text-2)",
            UIText3: "var(--ui-text-3)",
            UITextDanger: "var(--ui-text-danger)",
            UITextDangerDisplay: "var(--ui-text-danger-display)",
            UITextInfo: "var(--ui-text-info)",
            UITextInfoDisplay: "var(--ui-text-info-display)",
            UITextPlaceholder: "var(--ui-text-placeholder)",
            UITextPrimary: "var(--ui-text-primary)",
            UITextPrimaryDisplay: "var(--ui-text-primary-display)",
            UITextSecondary: "var(--ui-text-secondary)",
            UITextSecondaryDisplay: "var(--ui-text-secondary-display)",
            UITextSuccess: "var(--ui-text-success)",
            UITextSuccessDisplay: "var(--ui-text-success-display)",
            UITextWarning: "var(--ui-text-warning)",
            UITextWarningDisplay: "var(--ui-text-warning-display)"
        }), {
            UIShapeDanger: "var(--ui-shape-danger)",
            UIShapeDanger2: "var(--ui-shape-danger-2)",
            UIShapeDanger3: "var(--ui-shape-danger-3)",
            UIShapeDanger4: "var(--ui-shape-danger-4)",
            UIShapeInfo: "var(--ui-shape-info)",
            UIShapeInfo2: "var(--ui-shape-info-2)",
            UIShapeInfo3: "var(--ui-shape-info-3)",
            UIShapeInfo4: "var(--ui-shape-info-4)",
            UIShapeNeutral: "var(--ui-shape-neutral)",
            UIShapeNeutral2: "var(--ui-shape-neutral-2)",
            UIShapeNeutral3: "var(--ui-shape-neutral-3)",
            UIShapeNeutral4: "var(--ui-shape-neutral-4)",
            UIShapePrimary: "var(--ui-shape-primary)",
            UIShapePrimary2: "var(--ui-shape-primary-2)",
            UIShapePrimary3: "var(--ui-shape-primary-3)",
            UIShapePrimary4: "var(--ui-shape-primary-4)",
            UIShapeSecondary: "var(--ui-shape-secondary)",
            UIShapeSecondary2: "var(--ui-shape-secondary-2)",
            UIShapeSecondary3: "var(--ui-shape-secondary-3)",
            UIShapeSecondary4: "var(--ui-shape-secondary-4)",
            UIShapeSecondary5: "var(--ui-shape-secondary-5)",
            UIShapeSecondaryMuted: "var(--ui-shape-secondary-muted)",
            UIShapeSecondaryMuted2: "var(--ui-shape-secondary-muted-2)",
            UIShapeSecondaryMuted3: "var(--ui-shape-secondary-muted-3)",
            UIShapeSecondaryMuted4: "var(--ui-shape-secondary-muted-4)",
            UIShapeSuccess: "var(--ui-shape-success)",
            UIShapeSuccess2: "var(--ui-shape-success-2)",
            UIShapeSuccess3: "var(--ui-shape-success-3)",
            UIShapeSuccess4: "var(--ui-shape-success-4)",
            UIShapeText1OnDanger: "var(--ui-shape-text-1-on-danger)",
            UIShapeText1OnInfo: "var(--ui-shape-text-1-on-info)",
            UIShapeText1OnNeutral: "var(--ui-shape-text-1-on-neutral)",
            UIShapeText1OnPrimary: "var(--ui-shape-text-1-on-primary)",
            UIShapeText1OnSecondary: "var(--ui-shape-text-1-on-secondary)",
            UIShapeText1OnSecondaryMuted: "var(--ui-shape-text-1-on-secondary-muted)",
            UIShapeText1OnSuccess: "var(--ui-shape-text-1-on-success)",
            UIShapeText1OnWarning: "var(--ui-shape-text-1-on-warning)",
            UIShapeText2OnDanger: "var(--ui-shape-text-2-on-danger)",
            UIShapeText2OnInfo: "var(--ui-shape-text-2-on-info)",
            UIShapeText2OnNeutral: "var(--ui-shape-text-2-on-neutral)",
            UIShapeText2OnPrimary: "var(--ui-shape-text-2-on-primary)",
            UIShapeText2OnSecondary: "var(--ui-shape-text-2-on-secondary)",
            UIShapeText2OnSecondaryMuted: "var(--ui-shape-text-2-on-secondary-muted)",
            UIShapeText2OnSuccess: "var(--ui-shape-text-2-on-success)",
            UIShapeText2OnWarning: "var(--ui-shape-text-2-on-warning)",
            UIShapeTextOnSecondary2Or3: "var(--ui-shape-text-on-secondary-2-or-3)",
            UIShapeTextOnSecondary4Or5: "var(--ui-shape-text-on-secondary-4-or-5)",
            UIShapeTextOnSecondaryMuted2Or3: "var(--ui-shape-text-on-secondary-muted-2-or-3)",
            UIShapeTextOnSecondaryMuted4Or5: "var(--ui-shape-text-on-secondary-muted-4-or-5)",
            UIShapeWarning: "var(--ui-shape-warning)",
            UIShapeWarning2: "var(--ui-shape-warning-2)",
            UIShapeWarning3: "var(--ui-shape-warning-3)",
            UIShapeWarning4: "var(--ui-shape-warning-4)"
        }), {
            CreationAdjustBackground: "var(--creation-adjust-background)",
            CreationAdjustHSLBlue: "var(--creation-adjust-hsl-blue)",
            CreationAdjustHSLCyan: "var(--creation-adjust-hsl-cyan)",
            CreationAdjustHSLFuchsia: "var(--creation-adjust-hsl-fuchsia)",
            CreationAdjustHSLGreen: "var(--creation-adjust-hsl-green)",
            CreationAdjustHSLIndigo: "var(--creation-adjust-hsl-indigo)",
            CreationAdjustHSLOrange: "var(--creation-adjust-hsl-orange)",
            CreationAdjustHSLRed: "var(--creation-adjust-hsl-red)",
            CreationAdjustHSLYellow: "var(--creation-adjust-hsl-yellow)",
            CreationAdjustLabel: "var(--creation-adjust-label)",
            CreationFilterBackground: "var(--creation-filter-background)",
            CreationFilterLabel: "var(--creation-filter-label)",
            CreationFlashLightCold: "var(--creation-flash-light-cold)",
            CreationFlashLightWarm: "var(--creation-flash-light-warm)",
            CreationGlanceWatermark: "var(--creation-glance-watermark)",
            CreationPillOverlay: "var(--creation-pill-overlay)",
            ECBlackText1: "var(--ec-black-text-1)",
            ECBlackText2: "var(--ec-black-text-2)",
            ECBlackText3: "var(--ec-black-text-3)",
            ECCyanBanner: "var(--ec-cyan-banner)",
            ECCyanBorder: "var(--ec-cyan-border)",
            ECCyanMain: "var(--ec-cyan-main)",
            ECCyanTag: "var(--ec-cyan-tag)",
            ECCyanText: "var(--ec-cyan-text)",
            ECCyanTextOnTag: "var(--ec-cyan-text-on-tag)",
            ECPrimaryBanner: "var(--ec-primary-banner)",
            ECPrimaryBorder: "var(--ec-primary-border)",
            ECPrimaryTag: "var(--ec-primary-tag)",
            ECPrimaryTextOnTag: "var(--ec-primary-text-on-tag)",
            ECWhiteText1: "var(--ec-white-text-1)",
            ECWhiteText2: "var(--ec-white-text-2)",
            ECWhiteText3: "var(--ec-white-text-3)",
            FeedAnchorBg: "var(--feed-anchor-bg)",
            FeedTopTabTextShadowA30: "var(--feed-top-tab-text-shadow-a30)",
            FeedTopTabTextShadowA40: "var(--feed-top-tab-text-shadow-a40)",
            FeedTopTabTextShadowA50: "var(--feed-top-tab-text-shadow-a50)",
            FeedTopTabTextShadowA66: "var(--feed-top-tab-text-shadow-a66)",
            FeedTopTabTextShadowA83: "var(--feed-top-tab-text-shadow-a83)",
            LocalServicePOI: "var(--localservice-poi)",
            LocalServicePOIBackground: "var(--localservice-poi-background)",
            ProfileIconBackgroundDarkGray: "var(--profile-icon-background-dark-gray)",
            SocialChatGradientBlue1: "var(--social-chat-gradient-blue-1)",
            SocialChatGradientBlue2: "var(--social-chat-gradient-blue-2)",
            SocialChatGradientBlue3: "var(--social-chat-gradient-blue-3)",
            SocialSnail1: "var(--social-snail-1)",
            SocialStoryGradientGreen1: "var(--social-story-gradient-green-1)",
            SocialStoryGradientGreen2: "var(--social-story-gradient-green-2)",
            SocialStoryGradientGreen3: "var(--social-story-gradient-green-3)",
            SocialStoryGradientPurple1: "var(--social-story-gradient-purple-1)",
            SocialStoryGradientPurple2: "var(--social-story-gradient-purple-2)",
            SocialStoryGradientPurple3: "var(--social-story-gradient-purple-3)",
            SocialStoryShapePurple: "var(--social-story-shape-purple)",
            SocialTextStreak: "var(--social-text-streak)",
            UIPageFlat1: "var(--ui-page-flat-1)",
            UIPageFlat2: "var(--ui-page-flat-2)",
            UIPageFlat3: "var(--ui-page-flat-3)",
            UIPageGrouped1: "var(--ui-page-grouped-1)",
            UIPageGrouped2: "var(--ui-page-grouped-2)",
            UIPageGrouped3: "var(--ui-page-grouped-3)",
            UISheetBackdrop1: "var(--ui-sheet-backdrop-1)",
            UISheetBackdrop2: "var(--ui-sheet-backdrop-2)",
            UISheetFlat1: "var(--ui-sheet-flat-1)",
            UISheetFlat2: "var(--ui-sheet-flat-2)",
            UISheetFlat3: "var(--ui-sheet-flat-3)",
            UISheetGrouped1: "var(--ui-sheet-grouped-1)",
            UISheetGrouped2: "var(--ui-sheet-grouped-2)",
            UISheetGrouped3: "var(--ui-sheet-grouped-3)"
        }), {
            UIImageOverlayBlack: "var(--ui-image-overlay-black)",
            UIImageOverlayBlackA15: "var(--ui-image-overlay-black-a15)",
            UIImageOverlayBlackA25: "var(--ui-image-overlay-black-a25)",
            UIImageOverlayBlackA50: "var(--ui-image-overlay-black-a50)",
            UIImageOverlayBlackA80: "var(--ui-image-overlay-black-a80)",
            UIImageOverlayDarkGrayA30: "var(--ui-image-overlay-dark-gray-a30)",
            UIImageOverlayDarkGrayA60: "var(--ui-image-overlay-dark-gray-a60)",
            UIImageOverlayDarkGrayA85: "var(--ui-image-overlay-dark-gray-a85)",
            UIImageOverlayWhite: "var(--ui-image-overlay-white)",
            UIImageOverlayWhiteA20: "var(--ui-image-overlay-white-a20)",
            UIImageOverlayWhiteA40: "var(--ui-image-overlay-white-a40)",
            UIImageOverlayWhiteA75: "var(--ui-image-overlay-white-a75)"
        }), {
            MiscOnlineShape: "var(--misc-online-shape)",
            MiscOnlineText: "var(--misc-online-text)",
            MiscRatingStarSelectedFill: "var(--misc-rating-star-selected-fill)",
            MiscVerifiedBadge1: "var(--misc-verified-badge-1)",
            MiscVerifiedBadge2: "var(--misc-verified-badge-2)"
        }), {
            BrandAi1: "var(--brand-ai-1)",
            BrandOscarGold: "var(--brand-oscar-gold)",
            BrandTako1: "var(--brand-tako-1)",
            BrandTako2: "var(--brand-tako-2)",
            BrandTikTokPlus1: "var(--brand-tiktok-plus-1)",
            BrandTikTokBackground: "var(--brand-tiktok-background)",
            BrandTikTokBackgroundElement: "var(--brand-tiktok-background-element)",
            BrandTikTokBlack: "var(--brand-tiktok-black)",
            BrandTikTokRazzmatazz: "var(--brand-tiktok-razzmatazz)",
            BrandTikTokSplash: "var(--brand-tiktok-splash)",
            BrandTikTokSpotlight: "var(--brand-tiktok-spotlight)",
            BrandTikTokSubjectInSpotlight: "var(--brand-tiktok-subject-in-spotlight)",
            BrandTikTokWhite: "var(--brand-tiktok-white)",
            BrandTikTokPhotos1: "var(--brand-tiktokphotos-1)",
            BrandTikTokPhotos2: "var(--brand-tiktokphotos-2)",
            BrandTokopedia1: "var(--brand-tokopedia-1)"
        })
          , c = "undefined" == typeof window ? a.useEffect : a.useLayoutEffect
          , u = (0,
        a.createContext)(void 0)
          , d = ({colorSchemePreference: e, children: t}) => (c(( () => {
            document.documentElement.dataset.tuxColorScheme = e
        }
        ), [e]),
        a.createElement(u.Provider, {
            value: e
        }, t))
          , p = 2e3
          , f = "undefined" == typeof window
          , h = () => {}
          , v = (...e) => {
            const t = e.filter(Boolean);
            return t.length <= 1 ? t[0] : t => {
                e.forEach((e => {
                    ( (e, t) => {
                        "function" == typeof e ? e(t) : "object" == typeof e && e && "current"in e && (e.current = t)
                    }
                    )(e, t)
                }
                ))
            }
        }
          , b = (0,
        a.createContext)(void 0)
          , g = ({safeAreaInsetTop: e, zIndexConfig: t, children: n}) => {
            var r, o, i, l, s, u;
            const [d,h] = (0,
            a.useState)("unknown")
              , v = void 0 !== e ? `${e}px` : "env(safe-area-inset-top)"
              , g = {
                modal: null !== (r = null == t ? void 0 : t.modal) && void 0 !== r ? r : p,
                popover: null !== (o = null == t ? void 0 : t.popover) && void 0 !== o ? o : p,
                sheet: null !== (i = null == t ? void 0 : t.sheet) && void 0 !== i ? i : p,
                tooltip: null !== (l = null == t ? void 0 : t.tooltip) && void 0 !== l ? l : p,
                toast: null !== (s = null == t ? void 0 : t.toast) && void 0 !== s ? s : 3e3,
                bar: null !== (u = null == t ? void 0 : t.bar) && void 0 !== u ? u : 1e3
            };
            return c(( () => {
                if (f)
                    return;
                const e = window.matchMedia("(prefers-color-scheme: dark)");
                h(e.matches ? "dark" : "light");
                const t = e => {
                    h(e.matches ? "dark" : "light")
                }
                ;
                return e.addEventListener ? e.addEventListener("change", t) : e.addListener(t),
                () => {
                    e.removeEventListener ? e.removeEventListener("change", t) : e.removeListener(t)
                }
            }
            ), []),
            a.createElement(b.Provider, {
                value: {
                    colorSchemeSystemPreference: d,
                    safeAreaInsetTop: v,
                    zIndex: g
                }
            }, n)
        }
          , m = () => {
            const e = (0,
            a.useContext)(b);
            if (void 0 === e)
                throw Error("TUXEnvironmentContext is undefined. Make sure to wrap your app with TUXProvider.");
            return e
        }
          , y = (0,
        a.createContext)(void 0)
          , x = ({textDirection: e, children: t}) => (c(( () => {
            document.documentElement.dir = e
        }
        ), [e]),
        a.createElement(y.Provider, {
            value: e
        }, t))
          , _ = () => {
            const e = (0,
            a.useContext)(y);
            if (void 0 === e)
                throw Error("TUXTextDirectionContext is undefined. Make sure to wrap your app with TUXProvider.");
            return e
        }
        ;
        function E(e) {
            return w(e) ? (e.nodeName || "").toLowerCase() : "#document"
        }
        function O(e) {
            var t;
            return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        }
        function w(e) {
            return e instanceof Node || e instanceof O(e).Node
        }
        function P(e) {
            return e instanceof Element || e instanceof O(e).Element
        }
        function T(e) {
            return e instanceof HTMLElement || e instanceof O(e).HTMLElement
        }
        function S(e) {
            return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof O(e).ShadowRoot)
        }
        function C(e) {
            if ("html" === E(e))
                return e;
            const t = e.assignedSlot || e.parentNode || S(e) && e.host || function(e) {
                var t;
                return null == (t = (w(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }(e);
            return S(t) ? t.host : t
        }
        function k(e) {
            let t = e.activeElement;
            for (; null != (null == (n = t) || null == (r = n.shadowRoot) ? void 0 : r.activeElement); ) {
                var n, r;
                t = t.shadowRoot.activeElement
            }
            return t
        }
        function I(e, t) {
            if (!e || !t)
                return !1;
            const n = t.getRootNode && t.getRootNode();
            if (e.contains(t))
                return !0;
            if (n && S(n)) {
                let n = t;
                for (; n; ) {
                    if (e === n)
                        return !0;
                    n = n.parentNode || n.host
                }
            }
            return !1
        }
        function N() {
            const e = navigator.userAgentData;
            return null != e && e.platform ? e.platform : navigator.platform
        }
        function j(e) {
            if (0 === e.mozInputSource && e.isTrusted)
                return !0;
            const t = /Android/i;
            return (t.test(N()) || t.test(function() {
                const e = navigator.userAgentData;
                return e && Array.isArray(e.brands) ? e.brands.map((e => {
                    let {brand: t, version: n} = e;
                    return t + "/" + n
                }
                )).join(" ") : navigator.userAgent
            }())) && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType
        }
        function A(e) {
            return 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" !== e.pointerType || e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail
        }
        function U(e, t) {
            const n = ["mouse", "pen"];
            return t || n.push("", void 0),
            n.includes(e)
        }
        function L(e) {
            return (null == e ? void 0 : e.ownerDocument) || document
        }
        function M(e, t) {
            if (null == t)
                return !1;
            if ("composedPath"in e)
                return e.composedPath().includes(t);
            const n = e;
            return null != n.target && t.contains(n.target)
        }
        function R(e) {
            return "composedPath"in e ? e.composedPath()[0] : e.target
        }
        Math.floor;
        const D = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
        function B(e) {
            return T(e) && e.matches(D)
        }
        function F(e) {
            e.preventDefault(),
            e.stopPropagation()
        }
        const z = Math.min
          , W = Math.max
          , G = Math.round
          , K = (Math.floor,
        e => ({
            x: e,
            y: e
        }));
        function H(e) {
            return e.split("-")[0]
        }
        function X(e) {
            return ["top", "bottom"].includes(H(e)) ? "y" : "x"
        }
        function Y(e) {
            const {x: t, y: n, width: r, height: a} = e;
            return {
                width: r,
                height: a,
                top: n,
                left: t,
                right: t + r,
                bottom: n + a,
                x: t,
                y: n
            }
        }
        function V(e, t, n) {
            let {reference: r, floating: a} = e;
            const o = X(t)
              , i = function(e) {
                return "x" === X(e) ? "y" : "x"
            }(t)
              , l = "y" === i ? "height" : "width"
              , s = H(t)
              , c = "y" === o
              , u = r.x + r.width / 2 - a.width / 2
              , d = r.y + r.height / 2 - a.height / 2
              , p = r[l] / 2 - a[l] / 2;
            let f;
            switch (s) {
            case "top":
                f = {
                    x: u,
                    y: r.y - a.height
                };
                break;
            case "bottom":
                f = {
                    x: u,
                    y: r.y + r.height
                };
                break;
            case "right":
                f = {
                    x: r.x + r.width,
                    y: d
                };
                break;
            case "left":
                f = {
                    x: r.x - a.width,
                    y: d
                };
                break;
            default:
                f = {
                    x: r.x,
                    y: r.y
                }
            }
            switch (function(e) {
                return e.split("-")[1]
            }(t)) {
            case "start":
                f[i] -= p * (n && c ? -1 : 1);
                break;
            case "end":
                f[i] += p * (n && c ? -1 : 1)
            }
            return f
        }
        function $(e) {
            return J(e) ? (e.nodeName || "").toLowerCase() : "#document"
        }
        function q(e) {
            var t;
            return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        }
        function Z(e) {
            var t;
            return null == (t = (J(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
        }
        function J(e) {
            return e instanceof Node || e instanceof q(e).Node
        }
        function Q(e) {
            return e instanceof Element || e instanceof q(e).Element
        }
        function ee(e) {
            return e instanceof HTMLElement || e instanceof q(e).HTMLElement
        }
        function te(e) {
            return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof q(e).ShadowRoot)
        }
        function ne(e) {
            const {overflow: t, overflowX: n, overflowY: r, display: a} = se(e);
            return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(a)
        }
        function re(e) {
            return ["table", "td", "th"].includes($(e))
        }
        function ae(e) {
            return [":popover-open", ":modal"].some((t => {
                try {
                    return e.matches(t)
                } catch (e) {
                    return !1
                }
            }
            ))
        }
        function oe(e) {
            const t = ie()
              , n = se(e);
            return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some((e => (n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (n.contain || "").includes(e)))
        }
        function ie() {
            return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
        }
        function le(e) {
            return ["html", "body", "#document"].includes($(e))
        }
        function se(e) {
            return q(e).getComputedStyle(e)
        }
        function ce(e) {
            return Q(e) ? {
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            } : {
                scrollLeft: e.scrollX,
                scrollTop: e.scrollY
            }
        }
        function ue(e) {
            if ("html" === $(e))
                return e;
            const t = e.assignedSlot || e.parentNode || te(e) && e.host || Z(e);
            return te(t) ? t.host : t
        }
        function de(e) {
            const t = ue(e);
            return le(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ee(t) && ne(t) ? t : de(t)
        }
        function pe(e, t, n) {
            var r;
            void 0 === t && (t = []),
            void 0 === n && (n = !0);
            const a = de(e)
              , o = a === (null == (r = e.ownerDocument) ? void 0 : r.body)
              , i = q(a);
            return o ? t.concat(i, i.visualViewport || [], ne(a) ? a : [], i.frameElement && n ? pe(i.frameElement) : []) : t.concat(a, pe(a, [], n))
        }
        function fe(e) {
            const t = se(e);
            let n = parseFloat(t.width) || 0
              , r = parseFloat(t.height) || 0;
            const a = ee(e)
              , o = a ? e.offsetWidth : n
              , i = a ? e.offsetHeight : r
              , l = G(n) !== o || G(r) !== i;
            return l && (n = o,
            r = i),
            {
                width: n,
                height: r,
                $: l
            }
        }
        function he(e) {
            return Q(e) ? e : e.contextElement
        }
        function ve(e) {
            const t = he(e);
            if (!ee(t))
                return K(1);
            const n = t.getBoundingClientRect()
              , {width: r, height: a, $: o} = fe(t);
            let i = (o ? G(n.width) : n.width) / r
              , l = (o ? G(n.height) : n.height) / a;
            return i && Number.isFinite(i) || (i = 1),
            l && Number.isFinite(l) || (l = 1),
            {
                x: i,
                y: l
            }
        }
        const be = K(0);
        function ge(e) {
            const t = q(e);
            return ie() && t.visualViewport ? {
                x: t.visualViewport.offsetLeft,
                y: t.visualViewport.offsetTop
            } : be
        }
        function me(e, t, n, r) {
            void 0 === t && (t = !1),
            void 0 === n && (n = !1);
            const a = e.getBoundingClientRect()
              , o = he(e);
            let i = K(1);
            t && (r ? Q(r) && (i = ve(r)) : i = ve(e));
            const l = function(e, t, n) {
                return void 0 === t && (t = !1),
                !(!n || t && n !== q(e)) && t
            }(o, n, r) ? ge(o) : K(0);
            let s = (a.left + l.x) / i.x
              , c = (a.top + l.y) / i.y
              , u = a.width / i.x
              , d = a.height / i.y;
            if (o) {
                const e = q(o)
                  , t = r && Q(r) ? q(r) : r;
                let n = e
                  , a = n.frameElement;
                for (; a && r && t !== n; ) {
                    const e = ve(a)
                      , t = a.getBoundingClientRect()
                      , r = se(a)
                      , o = t.left + (a.clientLeft + parseFloat(r.paddingLeft)) * e.x
                      , i = t.top + (a.clientTop + parseFloat(r.paddingTop)) * e.y;
                    s *= e.x,
                    c *= e.y,
                    u *= e.x,
                    d *= e.y,
                    s += o,
                    c += i,
                    n = q(a),
                    a = n.frameElement
                }
            }
            return Y({
                width: u,
                height: d,
                x: s,
                y: c
            })
        }
        function ye(e) {
            return me(Z(e)).left + ce(e).scrollLeft
        }
        function xe(e, t, n) {
            let r;
            if ("viewport" === t)
                r = function(e, t) {
                    const n = q(e)
                      , r = Z(e)
                      , a = n.visualViewport;
                    let o = r.clientWidth
                      , i = r.clientHeight
                      , l = 0
                      , s = 0;
                    if (a) {
                        o = a.width,
                        i = a.height;
                        const e = ie();
                        (!e || e && "fixed" === t) && (l = a.offsetLeft,
                        s = a.offsetTop)
                    }
                    return {
                        width: o,
                        height: i,
                        x: l,
                        y: s
                    }
                }(e, n);
            else if ("document" === t)
                r = function(e) {
                    const t = Z(e)
                      , n = ce(e)
                      , r = e.ownerDocument.body
                      , a = W(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
                      , o = W(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
                    let i = -n.scrollLeft + ye(e);
                    const l = -n.scrollTop;
                    return "rtl" === se(r).direction && (i += W(t.clientWidth, r.clientWidth) - a),
                    {
                        width: a,
                        height: o,
                        x: i,
                        y: l
                    }
                }(Z(e));
            else if (Q(t))
                r = function(e, t) {
                    const n = me(e, !0, "fixed" === t)
                      , r = n.top + e.clientTop
                      , a = n.left + e.clientLeft
                      , o = ee(e) ? ve(e) : K(1);
                    return {
                        width: e.clientWidth * o.x,
                        height: e.clientHeight * o.y,
                        x: a * o.x,
                        y: r * o.y
                    }
                }(t, n);
            else {
                const n = ge(e);
                r = Object.assign(Object.assign({}, t), {
                    x: t.x - n.x,
                    y: t.y - n.y
                })
            }
            return Y(r)
        }
        function _e(e, t) {
            const n = ue(e);
            return !(n === t || !Q(n) || le(n)) && ("fixed" === se(n).position || _e(n, t))
        }
        function Ee(e, t, n) {
            const r = ee(t)
              , a = Z(t)
              , o = "fixed" === n
              , i = me(e, !0, o, t);
            let l = {
                scrollLeft: 0,
                scrollTop: 0
            };
            const s = K(0);
            if (r || !r && !o)
                if (("body" !== $(t) || ne(a)) && (l = ce(t)),
                r) {
                    const e = me(t, !0, o, t);
                    s.x = e.x + t.clientLeft,
                    s.y = e.y + t.clientTop
                } else
                    a && (s.x = ye(a));
            return {
                x: i.left + l.scrollLeft - s.x,
                y: i.top + l.scrollTop - s.y,
                width: i.width,
                height: i.height
            }
        }
        function Oe(e) {
            return "static" === se(e).position
        }
        function we(e, t) {
            return ee(e) && "fixed" !== se(e).position ? t ? t(e) : e.offsetParent : null
        }
        function Pe(e, t) {
            const n = q(e);
            if (ae(e))
                return n;
            if (!ee(e)) {
                let t = ue(e);
                for (; t && !le(t); ) {
                    if (Q(t) && !Oe(t))
                        return t;
                    t = ue(t)
                }
                return n
            }
            let r = we(e, t);
            for (; r && re(r) && Oe(r); )
                r = we(r, t);
            return r && le(r) && Oe(r) && !oe(r) ? n : r || function(e) {
                let t = ue(e);
                for (; ee(t) && !le(t); ) {
                    if (ae(t))
                        return null;
                    if (oe(t))
                        return t;
                    t = ue(t)
                }
                return null
            }(e) || n
        }
        const Te = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                let {elements: t, rect: n, offsetParent: r, strategy: a} = e;
                const o = "fixed" === a
                  , i = Z(r)
                  , l = !!t && ae(t.floating);
                if (r === i || l && o)
                    return n;
                let s = {
                    scrollLeft: 0,
                    scrollTop: 0
                }
                  , c = K(1);
                const u = K(0)
                  , d = ee(r);
                if ((d || !d && !o) && (("body" !== $(r) || ne(i)) && (s = ce(r)),
                ee(r))) {
                    const e = me(r);
                    c = ve(r),
                    u.x = e.x + r.clientLeft,
                    u.y = e.y + r.clientTop
                }
                return {
                    width: n.width * c.x,
                    height: n.height * c.y,
                    x: n.x * c.x - s.scrollLeft * c.x + u.x,
                    y: n.y * c.y - s.scrollTop * c.y + u.y
                }
            },
            getDocumentElement: Z,
            getClippingRect: function(e) {
                let {element: t, boundary: n, rootBoundary: r, strategy: a} = e;
                const o = [..."clippingAncestors" === n ? ae(t) ? [] : function(e, t) {
                    const n = t.get(e);
                    if (n)
                        return n;
                    let r = pe(e, [], !1).filter((e => Q(e) && "body" !== $(e)))
                      , a = null;
                    const o = "fixed" === se(e).position;
                    let i = o ? ue(e) : e;
                    for (; Q(i) && !le(i); ) {
                        const t = se(i)
                          , n = oe(i);
                        n || "fixed" !== t.position || (a = null),
                        (o ? !n && !a : !n && "static" === t.position && a && ["absolute", "fixed"].includes(a.position) || ne(i) && !n && _e(e, i)) ? r = r.filter((e => e !== i)) : a = t,
                        i = ue(i)
                    }
                    return t.set(e, r),
                    r
                }(t, this._c) : [].concat(n), r]
                  , i = o[0]
                  , l = o.reduce(( (e, n) => {
                    const r = xe(t, n, a);
                    return e.top = W(r.top, e.top),
                    e.right = z(r.right, e.right),
                    e.bottom = z(r.bottom, e.bottom),
                    e.left = W(r.left, e.left),
                    e
                }
                ), xe(t, i, a));
                return {
                    width: l.right - l.left,
                    height: l.bottom - l.top,
                    x: l.left,
                    y: l.top
                }
            },
            getOffsetParent: Pe,
            getElementRects: function(e) {
                return i(this, void 0, void 0, (function*() {
                    const t = this.getOffsetParent || Pe
                      , n = this.getDimensions
                      , r = yield n(e.floating);
                    return {
                        reference: Ee(e.reference, yield t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: r.width,
                            height: r.height
                        }
                    }
                }
                ))
            },
            getClientRects: function(e) {
                return Array.from(e.getClientRects())
            },
            getDimensions: function(e) {
                const {width: t, height: n} = fe(e);
                return {
                    width: t,
                    height: n
                }
            },
            getScale: ve,
            isElement: Q,
            isRTL: function(e) {
                return "rtl" === se(e).direction
            }
        }
          , Se = (e, t, n) => {
            const r = new Map
              , a = Object.assign({
                platform: Te
            }, n)
              , o = Object.assign(Object.assign({}, a.platform), {
                _c: r
            });
            return ( (e, t, n) => i(void 0, void 0, void 0, (function*() {
                const {placement: r="bottom", strategy: a="absolute", middleware: o=[], platform: i} = n
                  , l = o.filter(Boolean)
                  , s = yield null == i.isRTL ? void 0 : i.isRTL(t);
                let c = yield i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: a
                })
                  , {x: u, y: d} = V(c, r, s)
                  , p = r
                  , f = {}
                  , h = 0;
                for (let n = 0; n < l.length; n++) {
                    const {name: o, fn: v} = l[n]
                      , {x: b, y: g, data: m, reset: y} = yield v({
                        x: u,
                        y: d,
                        initialPlacement: r,
                        placement: p,
                        strategy: a,
                        middlewareData: f,
                        rects: c,
                        platform: i,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    u = null != b ? b : u,
                    d = null != g ? g : d,
                    f = Object.assign(Object.assign({}, f), {
                        [o]: Object.assign(Object.assign({}, f[o]), m)
                    }),
                    y && h <= 50 && (h++,
                    "object" == typeof y && (y.placement && (p = y.placement),
                    y.rects && (c = !0 === y.rects ? yield i.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: a
                    }) : y.rects),
                    ({x: u, y: d} = V(c, p, s))),
                    n = -1)
                }
                return {
                    x: u,
                    y: d,
                    placement: p,
                    strategy: a,
                    middlewareData: f
                }
            }
            )))(e, t, Object.assign(Object.assign({}, a), {
                platform: o
            }))
        }
        ;
        var Ce = "undefined" != typeof document ? a.useLayoutEffect : a.useEffect;
        function ke(e, t) {
            if (e === t)
                return !0;
            if (typeof e != typeof t)
                return !1;
            if ("function" == typeof e && e.toString() === t.toString())
                return !0;
            let n, r, a;
            if (e && t && "object" == typeof e) {
                if (Array.isArray(e)) {
                    if (n = e.length,
                    n !== t.length)
                        return !1;
                    for (r = n; 0 != r--; )
                        if (!ke(e[r], t[r]))
                            return !1;
                    return !0
                }
                if (a = Object.keys(e),
                n = a.length,
                n !== Object.keys(t).length)
                    return !1;
                for (r = n; 0 != r--; )
                    if (!{}.hasOwnProperty.call(t, a[r]))
                        return !1;
                for (r = n; 0 != r--; ) {
                    const n = a[r];
                    if (!("_owner" === n && e.$$typeof || ke(e[n], t[n])))
                        return !1
                }
                return !0
            }
            return e != e && t != t
        }
        function Ie(e) {
            return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
        }
        function Ne(e, t) {
            const n = Ie(e);
            return Math.round(t * n) / n
        }
        function je(e) {
            const t = a.useRef(e);
            return Ce(( () => {
                t.current = e
            }
            )),
            t
        }
        var Ae = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"].join(",")
          , Ue = "undefined" == typeof Element
          , Le = Ue ? function() {}
        : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
          , Me = !Ue && Element.prototype.getRootNode ? function(e) {
            var t;
            return null == e || null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
        }
        : function(e) {
            return null == e ? void 0 : e.ownerDocument
        }
          , Re = function e(t, n) {
            var r;
            void 0 === n && (n = !0);
            var a = null == t || null === (r = t.getAttribute) || void 0 === r ? void 0 : r.call(t, "inert");
            return "" === a || "true" === a || n && t && e(t.parentNode)
        }
          , De = function e(t, n, r) {
            for (var a = [], o = Array.from(t); o.length; ) {
                var i = o.shift();
                if (!Re(i, !1))
                    if ("SLOT" === i.tagName) {
                        var l = i.assignedElements()
                          , s = e(l.length ? l : i.children, !0, r);
                        r.flatten ? a.push.apply(a, s) : a.push({
                            scopeParent: i,
                            candidates: s
                        })
                    } else {
                        Le.call(i, Ae) && r.filter(i) && (n || !t.includes(i)) && a.push(i);
                        var c = i.shadowRoot || "function" == typeof r.getShadowRoot && r.getShadowRoot(i)
                          , u = !Re(c, !1) && (!r.shadowRootFilter || r.shadowRootFilter(i));
                        if (c && u) {
                            var d = e(!0 === c ? i.children : c.children, !0, r);
                            r.flatten ? a.push.apply(a, d) : a.push({
                                scopeParent: i,
                                candidates: d
                            })
                        } else
                            o.unshift.apply(o, i.children)
                    }
            }
            return a
        }
          , Be = function(e) {
            return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
        }
          , Fe = function(e) {
            if (!e)
                throw new Error("No node provided");
            return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || function(e) {
                var t, n = null == e || null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
                return "" === n || "true" === n
            }(e)) && !Be(e) ? 0 : e.tabIndex
        }
          , ze = function(e, t) {
            return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
        }
          , We = function(e) {
            return "INPUT" === e.tagName
        }
          , Ge = function(e) {
            var t = e.getBoundingClientRect()
              , n = t.width
              , r = t.height;
            return 0 === n && 0 === r
        }
          , Ke = function(e, t) {
            return !(t.disabled || Re(t) || function(e) {
                return We(e) && "hidden" === e.type
            }(t) || function(e, t) {
                var n = t.displayCheck
                  , r = t.getShadowRoot;
                if ("hidden" === getComputedStyle(e).visibility)
                    return !0;
                var a = Le.call(e, "details>summary:first-of-type") ? e.parentElement : e;
                if (Le.call(a, "details:not([open]) *"))
                    return !0;
                if (n && "full" !== n && "legacy-full" !== n) {
                    if ("non-zero-area" === n)
                        return Ge(e)
                } else {
                    if ("function" == typeof r) {
                        for (var o = e; e; ) {
                            var i = e.parentElement
                              , l = Me(e);
                            if (i && !i.shadowRoot && !0 === r(i))
                                return Ge(e);
                            e = e.assignedSlot ? e.assignedSlot : i || l === e.ownerDocument ? i : l.host
                        }
                        e = o
                    }
                    if (function(e) {
                        var t, n, r, a, o = e && Me(e), i = null === (t = o) || void 0 === t ? void 0 : t.host, l = !1;
                        if (o && o !== e)
                            for (l = !!(null !== (n = i) && void 0 !== n && null !== (r = n.ownerDocument) && void 0 !== r && r.contains(i) || null != e && null !== (a = e.ownerDocument) && void 0 !== a && a.contains(e)); !l && i; ) {
                                var s, c, u;
                                l = !(null === (c = i = null === (s = o = Me(i)) || void 0 === s ? void 0 : s.host) || void 0 === c || null === (u = c.ownerDocument) || void 0 === u || !u.contains(i))
                            }
                        return l
                    }(e))
                        return !e.getClientRects().length;
                    if ("legacy-full" !== n)
                        return !0
                }
                return !1
            }(t, e) || function(e) {
                return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some((function(e) {
                    return "SUMMARY" === e.tagName
                }
                ))
            }(t) || function(e) {
                if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                    for (var t = e.parentElement; t; ) {
                        if ("FIELDSET" === t.tagName && t.disabled) {
                            for (var n = 0; n < t.children.length; n++) {
                                var r = t.children.item(n);
                                if ("LEGEND" === r.tagName)
                                    return !!Le.call(t, "fieldset[disabled] *") || !r.contains(e)
                            }
                            return !0
                        }
                        t = t.parentElement
                    }
                return !1
            }(t))
        }
          , He = function(e, t) {
            return !(function(e) {
                return function(e) {
                    return We(e) && "radio" === e.type
                }(e) && !function(e) {
                    if (!e.name)
                        return !0;
                    var t, n = e.form || Me(e), r = function(e) {
                        return n.querySelectorAll('input[type="radio"][name="' + e + '"]')
                    };
                    if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape)
                        t = r(window.CSS.escape(e.name));
                    else
                        try {
                            t = r(e.name)
                        } catch (e) {
                            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message),
                            !1
                        }
                    var a = function(e, t) {
                        for (var n = 0; n < e.length; n++)
                            if (e[n].checked && e[n].form === t)
                                return e[n]
                    }(t, e.form);
                    return !a || a === e
                }(e)
            }(t) || Fe(t) < 0 || !Ke(e, t))
        }
          , Xe = function(e) {
            var t = parseInt(e.getAttribute("tabindex"), 10);
            return !!(isNaN(t) || t >= 0)
        }
          , Ye = function e(t) {
            var n = []
              , r = [];
            return t.forEach((function(t, a) {
                var o = !!t.scopeParent
                  , i = o ? t.scopeParent : t
                  , l = function(e, t) {
                    var n = Fe(e);
                    return n < 0 && t && !Be(e) ? 0 : n
                }(i, o)
                  , s = o ? e(t.candidates) : i;
                0 === l ? o ? n.push.apply(n, s) : n.push(i) : r.push({
                    documentOrder: a,
                    tabIndex: l,
                    item: t,
                    isScope: o,
                    content: s
                })
            }
            )),
            r.sort(ze).reduce((function(e, t) {
                return t.isScope ? e.push.apply(e, t.content) : e.push(t.content),
                e
            }
            ), []).concat(n)
        }
          , Ve = function(e, t) {
            var n;
            return n = (t = t || {}).getShadowRoot ? De([e], t.includeContainer, {
                filter: He.bind(null, t),
                flatten: !1,
                getShadowRoot: t.getShadowRoot,
                shadowRootFilter: Xe
            }) : function(e, t, n) {
                if (Re(e))
                    return [];
                var r = Array.prototype.slice.apply(e.querySelectorAll(Ae));
                return t && Le.call(e, Ae) && r.unshift(e),
                r.filter(n)
            }(e, t.includeContainer, He.bind(null, t)),
            Ye(n)
        };
        let $e = 0;
        function qe(e, t) {
            void 0 === t && (t = {});
            const {preventScroll: n=!1, cancelPrevious: r=!0, sync: a=!1} = t;
            r && cancelAnimationFrame($e);
            const o = () => null == e ? void 0 : e.focus({
                preventScroll: n
            });
            a ? o() : $e = requestAnimationFrame(o)
        }
        var Ze = "undefined" != typeof document ? a.useLayoutEffect : a.useEffect;
        function Je() {
            return Je = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            Je.apply(this, arguments)
        }
        let Qe = !1
          , et = 0;
        const tt = () => "floating-ui-" + et++
          , nt = (r || (r = n.t(a, 2)))["useId".toString()] || function() {
            const [e,t] = a.useState(( () => Qe ? tt() : void 0));
            return Ze(( () => {
                null == e && t(tt())
            }
            ), []),
            a.useEffect(( () => {
                Qe || (Qe = !0)
            }
            ), []),
            e
        }
          , rt = a.createContext(null)
          , at = a.createContext(null)
          , ot = () => a.useContext(at);
        function it(e) {
            return "data-floating-ui-" + e
        }
        function lt(e) {
            const t = (0,
            a.useRef)(e);
            return Ze(( () => {
                t.current = e
            }
            )),
            t
        }
        function st(e, t) {
            let n = e.filter((e => {
                var n;
                return e.parentId === t && (null == (n = e.context) ? void 0 : n.open)
            }
            ))
              , r = n;
            for (; r.length; )
                r = e.filter((e => {
                    var t;
                    return null == (t = r) ? void 0 : t.some((t => {
                        var n;
                        return e.parentId === t.id && (null == (n = e.context) ? void 0 : n.open)
                    }
                    ))
                }
                )),
                n = n.concat(r);
            return n
        }
        let ct = new WeakMap
          , ut = new WeakSet
          , dt = {}
          , pt = 0;
        const ft = e => e && (e.host || ft(e.parentNode))
          , ht = (e, t) => t.map((t => {
            if (e.contains(t))
                return t;
            const n = ft(t);
            return e.contains(n) ? n : null
        }
        )).filter((e => null != e));
        function vt(e, t, n) {
            void 0 === t && (t = !1),
            void 0 === n && (n = !1);
            const r = L(e[0]).body;
            return function(e, t, n, r) {
                const a = "data-floating-ui-inert"
                  , o = r ? "inert" : n ? "aria-hidden" : null
                  , i = ht(t, e)
                  , l = new Set
                  , s = new Set(i)
                  , c = [];
                dt[a] || (dt[a] = new WeakMap);
                const u = dt[a];
                return i.forEach((function e(t) {
                    t && !l.has(t) && (l.add(t),
                    t.parentNode && e(t.parentNode))
                }
                )),
                function e(t) {
                    t && !s.has(t) && Array.prototype.forEach.call(t.children, (t => {
                        if (l.has(t))
                            e(t);
                        else {
                            const e = o ? t.getAttribute(o) : null
                              , n = null !== e && "false" !== e
                              , r = (ct.get(t) || 0) + 1
                              , i = (u.get(t) || 0) + 1;
                            ct.set(t, r),
                            u.set(t, i),
                            c.push(t),
                            1 === r && n && ut.add(t),
                            1 === i && t.setAttribute(a, ""),
                            !n && o && t.setAttribute(o, "true")
                        }
                    }
                    ))
                }(t),
                l.clear(),
                pt++,
                () => {
                    c.forEach((e => {
                        const t = (ct.get(e) || 0) - 1
                          , n = (u.get(e) || 0) - 1;
                        ct.set(e, t),
                        u.set(e, n),
                        t || (!ut.has(e) && o && e.removeAttribute(o),
                        ut.delete(e)),
                        n || e.removeAttribute(a)
                    }
                    )),
                    pt--,
                    pt || (ct = new WeakMap,
                    ct = new WeakMap,
                    ut = new WeakSet,
                    dt = {})
                }
            }(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n)
        }
        const bt = () => ({
            getShadowRoot: !0,
            displayCheck: "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
        });
        function gt(e, t) {
            const n = Ve(e, bt());
            "prev" === t && n.reverse();
            const r = n.indexOf(k(L(e)));
            return n.slice(r + 1)[0]
        }
        function mt() {
            return gt(document.body, "next")
        }
        function yt() {
            return gt(document.body, "prev")
        }
        function xt(e, t) {
            const n = t || e.currentTarget
              , r = e.relatedTarget;
            return !r || !I(n, r)
        }
        function _t(e) {
            Ve(e, bt()).forEach((e => {
                e.dataset.tabindex = e.getAttribute("tabindex") || "",
                e.setAttribute("tabindex", "-1")
            }
            ))
        }
        function Et(e) {
            e.querySelectorAll("[data-tabindex]").forEach((e => {
                const t = e.dataset.tabindex;
                delete e.dataset.tabindex,
                t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex")
            }
            ))
        }
        const Ot = {
            border: 0,
            clip: "rect(0 0 0 0)",
            height: "1px",
            margin: "-1px",
            overflow: "hidden",
            padding: 0,
            position: "fixed",
            whiteSpace: "nowrap",
            width: "1px",
            top: 0,
            left: 0
        };
        function wt(e) {
            "Tab" === e.key && (e.target,
            clearTimeout(void 0))
        }
        const Pt = a.forwardRef((function(e, t) {
            const [n,r] = a.useState();
            Ze(( () => (/apple/i.test(navigator.vendor) && r("button"),
            document.addEventListener("keydown", wt),
            () => {
                document.removeEventListener("keydown", wt)
            }
            )), []);
            const o = {
                ref: t,
                tabIndex: 0,
                role: n,
                "aria-hidden": !n || void 0,
                [it("focus-guard")]: "",
                style: Ot
            };
            return a.createElement("span", Je({}, e, o))
        }
        ))
          , Tt = a.createContext(null);
        function St(e) {
            let {children: t, id: n, root: r=null, preserveTabOrder: i=!0} = e;
            const l = function(e) {
                let {id: t, root: n} = void 0 === e ? {} : e;
                const [r,o] = a.useState(null)
                  , i = nt()
                  , l = Ct()
                  , s = a.useMemo(( () => ({
                    id: t,
                    root: n,
                    portalContext: l,
                    uniqueId: i
                })), [t, n, l, i])
                  , c = a.useRef();
                return Ze(( () => () => {
                    null == r || r.remove()
                }
                ), [r, s]),
                Ze(( () => {
                    if (c.current === s)
                        return;
                    c.current = s;
                    const {id: e, root: t, portalContext: n, uniqueId: r} = s
                      , a = e ? document.getElementById(e) : null
                      , i = it("portal");
                    if (a) {
                        const e = document.createElement("div");
                        e.id = r,
                        e.setAttribute(i, ""),
                        a.appendChild(e),
                        o(e)
                    } else {
                        let a = t || (null == n ? void 0 : n.portalNode);
                        a && !P(a) && (a = a.current),
                        a = a || document.body;
                        let l = null;
                        e && (l = document.createElement("div"),
                        l.id = e,
                        a.appendChild(l));
                        const s = document.createElement("div");
                        s.id = r,
                        s.setAttribute(i, ""),
                        a = l || a,
                        a.appendChild(s),
                        o(s)
                    }
                }
                ), [s]),
                r
            }({
                id: n,
                root: r
            })
              , [s,c] = a.useState(null)
              , u = a.useRef(null)
              , d = a.useRef(null)
              , p = a.useRef(null)
              , f = a.useRef(null)
              , h = !!s && !s.modal && s.open && i && !(!r && !l);
            return a.useEffect(( () => {
                if (l && i && (null == s || !s.modal))
                    return l.addEventListener("focusin", e, !0),
                    l.addEventListener("focusout", e, !0),
                    () => {
                        l.removeEventListener("focusin", e, !0),
                        l.removeEventListener("focusout", e, !0)
                    }
                    ;
                function e(e) {
                    l && xt(e) && ("focusin" === e.type ? Et : _t)(l)
                }
            }
            ), [l, i, null == s ? void 0 : s.modal]),
            a.createElement(Tt.Provider, {
                value: a.useMemo(( () => ({
                    preserveTabOrder: i,
                    beforeOutsideRef: u,
                    afterOutsideRef: d,
                    beforeInsideRef: p,
                    afterInsideRef: f,
                    portalNode: l,
                    setFocusManagerState: c
                })), [i, l])
            }, h && l && a.createElement(Pt, {
                "data-type": "outside",
                ref: u,
                onFocus: e => {
                    if (xt(e, l)) {
                        var t;
                        null == (t = p.current) || t.focus()
                    } else {
                        const e = yt() || (null == s ? void 0 : s.refs.domReference.current);
                        null == e || e.focus()
                    }
                }
            }), h && l && a.createElement("span", {
                "aria-owns": l.id,
                style: Ot
            }), l && (0,
            o.createPortal)(t, l), h && l && a.createElement(Pt, {
                "data-type": "outside",
                ref: d,
                onFocus: e => {
                    if (xt(e, l)) {
                        var t;
                        null == (t = f.current) || t.focus()
                    } else {
                        const t = mt() || (null == s ? void 0 : s.refs.domReference.current);
                        null == t || t.focus(),
                        (null == s ? void 0 : s.closeOnFocusOut) && (null == s || s.onOpenChange(!1, e.nativeEvent))
                    }
                }
            }))
        }
        const Ct = () => a.useContext(Tt)
          , kt = a.forwardRef((function(e, t) {
            return a.createElement("button", Je({}, e, {
                type: "button",
                ref: t,
                tabIndex: -1,
                style: Ot
            }))
        }
        ));
        function It(e) {
            const {context: t, children: n, disabled: r=!1, order: o=["content"], guards: i=!0, initialFocus: l=0, returnFocus: s=!0, modal: c=!0, visuallyHiddenDismiss: u=!1, closeOnFocusOut: d=!0} = e
              , {open: p, refs: f, nodeId: h, onOpenChange: v, events: b, dataRef: g, elements: {domReference: m, floating: y}} = t
              , x = "undefined" == typeof HTMLElement || !("inert"in HTMLElement.prototype) || i
              , _ = lt(o)
              , E = lt(l)
              , O = lt(s)
              , w = ot()
              , P = Ct()
              , S = "number" == typeof l && l < 0
              , C = a.useRef(null)
              , N = a.useRef(null)
              , j = a.useRef(!1)
              , A = a.useRef(null)
              , U = a.useRef(!1)
              , M = null != P
              , D = m && "combobox" === m.getAttribute("role") && B(m) && S
              , z = a.useCallback((function(e) {
                return void 0 === e && (e = y),
                e ? Ve(e, bt()) : []
            }
            ), [y])
              , W = a.useCallback((e => {
                const t = z(e);
                return _.current.map((e => m && "reference" === e ? m : y && "floating" === e ? y : t)).filter(Boolean).flat()
            }
            ), [m, y, _, z]);
            function G(e) {
                return !r && u && c ? a.createElement(kt, {
                    ref: "start" === e ? C : N,
                    onClick: e => v(!1, e.nativeEvent)
                }, "string" == typeof u ? u : "Dismiss") : null
            }
            a.useEffect(( () => {
                if (r || !c)
                    return;
                function e(e) {
                    if ("Tab" === e.key) {
                        I(y, k(L(y))) && 0 === z().length && !D && F(e);
                        const t = W()
                          , n = R(e);
                        "reference" === _.current[0] && n === m && (F(e),
                        e.shiftKey ? qe(t[t.length - 1]) : qe(t[1])),
                        "floating" === _.current[1] && n === y && e.shiftKey && (F(e),
                        qe(t[0]))
                    }
                }
                const t = L(y);
                return t.addEventListener("keydown", e),
                () => {
                    t.removeEventListener("keydown", e)
                }
            }
            ), [r, m, y, c, _, f, D, z, W]),
            a.useEffect(( () => {
                if (!r && d)
                    return y && T(m) ? (m.addEventListener("focusout", t),
                    m.addEventListener("pointerdown", e),
                    !c && y.addEventListener("focusout", t),
                    () => {
                        m.removeEventListener("focusout", t),
                        m.removeEventListener("pointerdown", e),
                        !c && y.removeEventListener("focusout", t)
                    }
                    ) : void 0;
                function e() {
                    U.current = !0,
                    setTimeout(( () => {
                        U.current = !1
                    }
                    ))
                }
                function t(e) {
                    const t = e.relatedTarget;
                    queueMicrotask(( () => {
                        const n = !(I(m, t) || I(y, t) || I(t, y) || I(null == P ? void 0 : P.portalNode, t) || null != t && t.hasAttribute(it("focus-guard")) || w && (st(w.nodesRef.current, h).find((e => {
                            var n, r;
                            return I(null == (n = e.context) ? void 0 : n.elements.floating, t) || I(null == (r = e.context) ? void 0 : r.elements.domReference, t)
                        }
                        )) || function(e, t) {
                            var n;
                            let r = []
                              , a = null == (n = e.find((e => e.id === t))) ? void 0 : n.parentId;
                            for (; a; ) {
                                const t = e.find((e => e.id === a));
                                a = null == t ? void 0 : t.parentId,
                                t && (r = r.concat(t))
                            }
                            return r
                        }(w.nodesRef.current, h).find((e => {
                            var n, r;
                            return (null == (n = e.context) ? void 0 : n.elements.floating) === t || (null == (r = e.context) ? void 0 : r.elements.domReference) === t
                        }
                        ))));
                        t && n && !U.current && t !== A.current && (j.current = !0,
                        v(!1, e))
                    }
                    ))
                }
            }
            ), [r, m, y, c, h, w, P, v, d]),
            a.useEffect(( () => {
                var e;
                if (r)
                    return;
                const t = Array.from((null == P || null == (e = P.portalNode) ? void 0 : e.querySelectorAll("[" + it("portal") + "]")) || []);
                if (y) {
                    const e = [y, ...t, C.current, N.current, _.current.includes("reference") || D ? m : null].filter((e => null != e))
                      , n = c ? vt(e, x, !x) : vt(e);
                    return () => {
                        n()
                    }
                }
            }
            ), [r, m, y, c, _, P, D, x]),
            Ze(( () => {
                if (r || !y)
                    return;
                const e = k(L(y));
                queueMicrotask(( () => {
                    const t = W(y)
                      , n = E.current
                      , r = ("number" == typeof n ? t[n] : n.current) || y
                      , a = I(y, e);
                    S || a || !p || qe(r, {
                        preventScroll: r === y
                    })
                }
                ))
            }
            ), [r, p, y, S, W, E]),
            Ze(( () => {
                if (r || !y)
                    return;
                let e = !1;
                const t = L(y)
                  , n = k(t)
                  , a = g.current;
                function o(t) {
                    if ("escapeKey" === t.type && f.domReference.current && (A.current = f.domReference.current),
                    ["referencePress", "escapeKey"].includes(t.type))
                        return;
                    const n = t.data.returnFocus;
                    "object" == typeof n ? (j.current = !1,
                    e = n.preventScroll) : j.current = !n
                }
                return A.current = n,
                b.on("dismiss", o),
                () => {
                    b.off("dismiss", o);
                    const n = k(t);
                    (I(y, n) || w && st(w.nodesRef.current, h).some((e => {
                        var t;
                        return I(null == (t = e.context) ? void 0 : t.elements.floating, n)
                    }
                    )) || a.openEvent && ["click", "mousedown"].includes(a.openEvent.type)) && f.domReference.current && (A.current = f.domReference.current),
                    O.current && T(A.current) && !j.current && qe(A.current, {
                        cancelPrevious: !1,
                        preventScroll: e
                    })
                }
            }
            ), [r, y, O, g, f, b, w, h]),
            Ze(( () => {
                if (!r && P)
                    return P.setFocusManagerState({
                        modal: c,
                        closeOnFocusOut: d,
                        open: p,
                        onOpenChange: v,
                        refs: f
                    }),
                    () => {
                        P.setFocusManagerState(null)
                    }
            }
            ), [r, P, c, p, v, f, d]),
            Ze(( () => {
                if (!r && y && "function" == typeof MutationObserver && !S) {
                    const e = () => {
                        const e = y.getAttribute("tabindex");
                        _.current.includes("floating") || k(L(y)) !== f.domReference.current && 0 === z().length ? "0" !== e && y.setAttribute("tabindex", "0") : "-1" !== e && y.setAttribute("tabindex", "-1")
                    }
                    ;
                    e();
                    const t = new MutationObserver(e);
                    return t.observe(y, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }),
                    () => {
                        t.disconnect()
                    }
                }
            }
            ), [r, y, f, _, z, S]);
            const K = !r && x && !D && (M || c);
            return a.createElement(a.Fragment, null, K && a.createElement(Pt, {
                "data-type": "inside",
                ref: null == P ? void 0 : P.beforeInsideRef,
                onFocus: e => {
                    if (c) {
                        const e = W();
                        qe("reference" === o[0] ? e[0] : e[e.length - 1])
                    } else if (null != P && P.preserveTabOrder && P.portalNode)
                        if (j.current = !1,
                        xt(e, P.portalNode)) {
                            const e = mt() || m;
                            null == e || e.focus()
                        } else {
                            var t;
                            null == (t = P.beforeOutsideRef.current) || t.focus()
                        }
                }
            }), !D && G("start"), n, G("end"), K && a.createElement(Pt, {
                "data-type": "inside",
                ref: null == P ? void 0 : P.afterInsideRef,
                onFocus: e => {
                    if (c)
                        qe(W()[0]);
                    else if (null != P && P.preserveTabOrder && P.portalNode)
                        if (d && (j.current = !0),
                        xt(e, P.portalNode)) {
                            const e = yt() || m;
                            null == e || e.focus()
                        } else {
                            var t;
                            null == (t = P.afterOutsideRef.current) || t.focus()
                        }
                }
            }))
        }
        const Nt = new Set
          , jt = a.forwardRef((function(e, t) {
            let {lockScroll: n=!1} = e
              , r = l(e, ["lockScroll"]);
            const o = nt();
            return Ze(( () => {
                if (!n)
                    return;
                Nt.add(o);
                const e = /iP(hone|ad|od)|iOS/.test(N())
                  , t = document.body.style
                  , r = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight"
                  , a = window.innerWidth - document.documentElement.clientWidth
                  , i = t.left ? parseFloat(t.left) : window.pageXOffset
                  , l = t.top ? parseFloat(t.top) : window.pageYOffset;
                if (t.overflow = "hidden",
                a && (t[r] = a + "px"),
                e) {
                    var s, c;
                    const e = (null == (s = window.visualViewport) ? void 0 : s.offsetLeft) || 0
                      , n = (null == (c = window.visualViewport) ? void 0 : c.offsetTop) || 0;
                    Object.assign(t, {
                        position: "fixed",
                        top: -(l - Math.floor(n)) + "px",
                        left: -(i - Math.floor(e)) + "px",
                        right: "0"
                    })
                }
                return () => {
                    Nt.delete(o),
                    0 === Nt.size && (Object.assign(t, {
                        overflow: "",
                        [r]: ""
                    }),
                    e && (Object.assign(t, {
                        position: "",
                        top: "",
                        left: "",
                        right: ""
                    }),
                    window.scrollTo(i, l)))
                }
            }
            ), [o, n]),
            a.createElement("div", Je({
                ref: t
            }, r, {
                style: Object.assign({
                    position: "fixed",
                    overflow: "auto",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, r.style)
            }))
        }
        ));
        function At(e) {
            return T(e.target) && "BUTTON" === e.target.tagName
        }
        function Ut(e) {
            return B(e)
        }
        const Lt = (r || (r = n.t(a, 2)))["useInsertionEffect".toString()] || (e => e());
        function Mt(e) {
            const t = a.useRef(( () => {}
            ));
            return Lt(( () => {
                t.current = e
            }
            )),
            a.useCallback((function() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                    n[r] = arguments[r];
                return null == t.current ? void 0 : t.current(...n)
            }
            ), [])
        }
        const Rt = {
            pointerdown: "onPointerDown",
            mousedown: "onMouseDown",
            click: "onClick"
        }
          , Dt = {
            pointerdown: "onPointerDownCapture",
            mousedown: "onMouseDownCapture",
            click: "onClickCapture"
        };
        function Bt(e, t) {
            void 0 === t && (t = {});
            const {open: n, onOpenChange: r, events: o, nodeId: i, elements: {reference: l, domReference: s, floating: c}, dataRef: u} = e
              , {enabled: d=!0, escapeKey: p=!0, outsidePress: f=!0, outsidePressEvent: h="pointerdown", referencePress: v=!1, referencePressEvent: b="pointerdown", ancestorScroll: g=!1, bubbles: m} = t
              , y = ot()
              , x = null != ((null == (B = a.useContext(rt)) ? void 0 : B.id) || null)
              , _ = Mt("function" == typeof f ? f : () => !1)
              , w = "function" == typeof f ? _ : f
              , S = a.useRef(!1)
              , {escapeKeyBubbles: k, outsidePressBubbles: N} = (e => {
                var t, n;
                return {
                    escapeKeyBubbles: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
                    outsidePressBubbles: "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n
                }
            }
            )(m)
              , U = Mt((e => {
                if (!n || !d || !p || "Escape" !== e.key)
                    return;
                const t = y ? st(y.nodesRef.current, i) : [];
                if (!k && (e.stopPropagation(),
                t.length > 0)) {
                    let e = !0;
                    if (t.forEach((t => {
                        var n;
                        null == (n = t.context) || !n.open || t.context.dataRef.current.__escapeKeyBubbles || (e = !1)
                    }
                    )),
                    !e)
                        return
                }
                o.emit("dismiss", {
                    type: "escapeKey",
                    data: {
                        returnFocus: {
                            preventScroll: !1
                        }
                    }
                }),
                r(!1, function(e) {
                    return "nativeEvent"in e
                }(e) ? e.nativeEvent : e)
            }
            ))
              , D = Mt((e => {
                const t = S.current;
                if (S.current = !1,
                t)
                    return;
                if ("function" == typeof w && !w(e))
                    return;
                const n = R(e)
                  , a = "[" + it("inert") + "]"
                  , l = L(c).querySelectorAll(a);
                let u = P(n) ? n : null;
                for (; u && !["html", "body", "#document"].includes(E(u)); ) {
                    const e = C(u);
                    if (e === L(c).body || !P(e))
                        break;
                    u = e
                }
                if (l.length && P(n) && !n.matches("html,body") && !I(n, c) && Array.from(l).every((e => !I(u, e))))
                    return;
                if (T(n) && c) {
                    const t = n.clientWidth > 0 && n.scrollWidth > n.clientWidth
                      , r = n.clientHeight > 0 && n.scrollHeight > n.clientHeight;
                    let a = r && e.offsetX > n.clientWidth;
                    if (r) {
                        "rtl" === (d = n,
                        O(d).getComputedStyle(d)).direction && (a = e.offsetX <= n.offsetWidth - n.clientWidth)
                    }
                    if (a || t && e.offsetY > n.clientHeight)
                        return
                }
                var d;
                const p = y && st(y.nodesRef.current, i).some((t => {
                    var n;
                    return M(e, null == (n = t.context) ? void 0 : n.elements.floating)
                }
                ));
                if (M(e, c) || M(e, s) || p)
                    return;
                const f = y ? st(y.nodesRef.current, i) : [];
                if (f.length > 0) {
                    let e = !0;
                    if (f.forEach((t => {
                        var n;
                        null == (n = t.context) || !n.open || t.context.dataRef.current.__outsidePressBubbles || (e = !1)
                    }
                    )),
                    !e)
                        return
                }
                o.emit("dismiss", {
                    type: "outsidePress",
                    data: {
                        returnFocus: x ? {
                            preventScroll: !0
                        } : j(e) || A(e)
                    }
                }),
                r(!1, e)
            }
            ));
            var B;
            return a.useEffect(( () => {
                if (!n || !d)
                    return;
                function e(e) {
                    r(!1, e)
                }
                u.current.__escapeKeyBubbles = k,
                u.current.__outsidePressBubbles = N;
                const t = L(c);
                p && t.addEventListener("keydown", U),
                w && t.addEventListener(h, D);
                let a = [];
                return g && (P(s) && (a = pe(s)),
                P(c) && (a = a.concat(pe(c))),
                !P(l) && l && l.contextElement && (a = a.concat(pe(l.contextElement)))),
                a = a.filter((e => {
                    var n;
                    return e !== (null == (n = t.defaultView) ? void 0 : n.visualViewport)
                }
                )),
                a.forEach((t => {
                    t.addEventListener("scroll", e, {
                        passive: !0
                    })
                }
                )),
                () => {
                    p && t.removeEventListener("keydown", U),
                    w && t.removeEventListener(h, D),
                    a.forEach((t => {
                        t.removeEventListener("scroll", e)
                    }
                    ))
                }
            }
            ), [u, c, s, l, p, w, h, n, r, g, d, k, N, U, D]),
            a.useEffect(( () => {
                S.current = !1
            }
            ), [w, h]),
            a.useMemo(( () => d ? {
                reference: {
                    onKeyDown: U,
                    [Rt[b]]: e => {
                        v && (o.emit("dismiss", {
                            type: "referencePress",
                            data: {
                                returnFocus: !1
                            }
                        }),
                        r(!1, e.nativeEvent))
                    }
                },
                floating: {
                    onKeyDown: U,
                    [Dt[h]]: () => {
                        S.current = !0
                    }
                }
            } : {}), [d, o, v, h, b, r, U])
        }
        function Ft(e, t, n) {
            const r = new Map;
            return Object.assign(Object.assign(Object.assign({}, "floating" === n && {
                tabIndex: -1
            }), e), t.map((e => e ? e[n] : null)).concat(e).reduce(( (e, t) => t ? (Object.entries(t).forEach((t => {
                let[n,a] = t;
                var o;
                0 === n.indexOf("on") ? (r.has(n) || r.set(n, []),
                "function" == typeof a && (null == (o = r.get(n)) || o.push(a),
                e[n] = function() {
                    for (var e, t = arguments.length, a = new Array(t), o = 0; o < t; o++)
                        a[o] = arguments[o];
                    return null == (e = r.get(n)) ? void 0 : e.map((e => e(...a))).find((e => void 0 !== e))
                }
                )) : e[n] = a
            }
            )),
            e) : e), {}))
        }
        const zt = (0,
        a.createContext)(void 0)
          , Wt = ({topToastOffset: e, bottomToastOffset: t, children: n}) => {
            const r = (0,
            a.useRef)(0)
              , [o,i] = (0,
            a.useState)([])
              , l = m()
              , s = (0,
            a.useCallback)((e => {
                i((t => t.map((t => t.id === e ? Object.assign(Object.assign({}, t), {
                    transitionStatus: "exiting"
                }) : t)))),
                setTimeout(( () => {
                    i((t => t.filter((t => t.id !== e))))
                }
                ), 200)
            }
            ), [])
              , c = (0,
            a.useCallback)(( (e, t, n) => {
                const a = r.current;
                return r.current += 1,
                i((n => [...n, Object.assign({
                    id: a,
                    listId: e,
                    transitionStatus: "entered",
                    dismiss: () => s(a)
                }, t)])),
                setTimeout(( () => {
                    s(a)
                }
                ), n || 5e3),
                a
            }
            ), [s])
              , u = (0,
            a.useCallback)(( (e, t, n) => {
                if (!o.length)
                    return void c(e, t, n);
                const r = Object.assign(Object.assign({}, o[0]), t);
                i([r])
            }
            ), [c, o])
              , d = void 0 !== e ? `${e}px` : "env(safe-area-inset-top)"
              , p = void 0 !== t ? `${t}px` : "env(safe-area-inset-bottom)";
            return a.createElement(zt.Provider, {
                value: {
                    addToast: c,
                    removeToast: s,
                    addToastSingleMode: u,
                    getToasts: e => o.filter((t => t.listId === e))
                }
            }, n, a.createElement(St, null, a.createElement("div", {
                id: "TUXToastProvider-topOutlet",
                className: "TUXToastProvider-topOutlet",
                style: {
                    zIndex: l.zIndex.toast,
                    top: d
                }
            }), a.createElement("div", {
                id: "TUXToastProvider-centerOutlet",
                className: "TUXToastProvider-center-outlet",
                style: {
                    zIndex: l.zIndex.toast,
                    top: d
                }
            }), a.createElement("div", {
                className: "TUXToastProvider-bottomOutletContainer",
                style: {
                    zIndex: l.zIndex.toast,
                    bottom: p
                }
            }, a.createElement("div", {
                id: "TUXToastProvider-bottomOutlet",
                className: "TUXToastProvider-bottomOutlet"
            }), a.createElement("div", {
                id: "TUXToastProvider-noticeOutlet",
                className: "TUXToastProvider-noticeOutlet"
            }))))
        }
          , Gt = (0,
        a.createContext)({
            idRef: null
        });
        let Kt = !1
          , Ht = 0;
        const Xt = () => "tux-web-" + Ht++
          , Yt = () => {
            const [e,t] = (0,
            a.useState)(( () => Kt ? Xt() : void 0));
            return (0,
            a.useLayoutEffect)(( () => {
                void 0 === e && t(Xt())
            }
            ), []),
            (0,
            a.useEffect)(( () => {
                Kt || (Kt = !0)
            }
            ), []),
            null != e ? e : ""
        }
          , Vt = () => {
            const {idRef: e} = (0,
            a.useContext)(Gt)
              , [t] = (0,
            a.useState)(( () => {
                if (e) {
                    const t = e.current++;
                    return String(t)
                }
                return ""
            }
            ));
            return `tux-web-${t}`
        }
          , $t = () => {
            const {idRef: e} = (0,
            a.useContext)(Gt);
            let t = Yt;
            return e && (t = Vt),
            t()
        }
        ;
        function qt(e) {
            var t, n, r = "";
            if ("string" == typeof e || "number" == typeof e)
                r += e;
            else if ("object" == typeof e)
                if (Array.isArray(e))
                    for (t = 0; t < e.length; t++)
                        e[t] && (n = qt(e[t])) && (r && (r += " "),
                        r += n);
                else
                    for (t in e)
                        e[t] && (r && (r += " "),
                        r += t);
            return r
        }
        function Zt() {
            for (var e, t, n = 0, r = ""; n < arguments.length; )
                (e = arguments[n++]) && (t = qt(e)) && (r && (r += " "),
                r += t);
            return r
        }
        const Jt = e => {
            var {size: t, weight: n, font: r="TikTok Sans", color: o, align: i, truncate: c, italic: u, underline: d, strikethrough: p, as: f="span", children: h, className: v, style: b} = e
              , g = l(e, ["size", "weight", "font", "color", "align", "truncate", "italic", "underline", "strikethrough", "as", "children", "className", "style"]);
            const m = r.toLowerCase().replace(/\s/g, "-")
              , y = [d && "underline", p && "strikethrough"].filter((e => e)).join("-");
            return a.createElement(f, Object.assign({
                className: Zt("TUXText", `TUXText--${m}`, n && `TUXText--weight-${n}`, y && `TUXText--${y}`, c && "TUXText--truncate", u && "TUXText--italic", i && `TUXText--align-${i}`, v),
                style: Object.assign({
                    color: o ? s[o] : "inherit",
                    fontSize: t ? `${t}px` : "inherit"
                }, b)
            }, g), h)
        }
          , Qt = e => {
            var {className: t} = e
              , n = l(e, ["className"]);
            return a.createElement("button", Object.assign({
                type: "button",
                className: Zt("TUXUnstyledButton", t)
            }, n))
        }
        ;
        function en() {
            return en = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            en.apply(null, arguments)
        }
        function tn(e) {
            return function(t) {
                var n = t.color
                  , r = t.size
                  , o = t.circleBackground
                  , i = {};
                if (void 0 !== n && (i.className = "text-color-".concat(n)),
                void 0 !== r && (i.fontSize = "".concat(r, "px")),
                void 0 !== o) {
                    var l = o.backgroundColor
                      , s = o.circleSize
                      , c = "".concat(s, "px")
                      , u = {
                        width: c,
                        height: c
                    };
                    return a.createElement("div", {
                        className: "inline-flex items-center justify-center rounded-full background-color-".concat(l),
                        style: u
                    }, a.createElement(e, i))
                }
                return a.createElement(e, i)
            }
        }
        function nn(e) {
            return a.createElement("svg", en({
                fill: "currentColor"
            }, e, {
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                className: e.className
            }), a.createElement("path", {
                opacity: .9,
                d: "M18.46 9.6c1.82-3.15 2.73-4.72 3.91-5.25a4 4 0 0 1 3.26 0c1.18.53 2.1 2.1 3.91 5.25l13.17 22.8c1.82 3.15 2.72 4.73 2.59 6.02a4 4 0 0 1-1.63 2.82c-1.05.76-2.87.76-6.5.76H10.83c-3.64 0-5.46 0-6.51-.76a4 4 0 0 1-1.63-2.82c-.13-1.3.78-2.87 2.6-6.02L18.45 9.6Zm7.33 8.26c0-.56 0-.84-.11-1.05a1 1 0 0 0-.44-.44c-.21-.1-.5-.1-1.05-.1h-.39c-.56 0-.84 0-1.05.1a1 1 0 0 0-.44.44c-.1.21-.1.5-.1 1.05v9.21c0 .56 0 .84.1 1.06a1 1 0 0 0 .44.43c.21.11.5.11 1.05.11h.39c.56 0 .84 0 1.05-.1a1 1 0 0 0 .44-.44c.1-.22.1-.5.1-1.06v-9.2Zm-3.47 17.6c.44.46 1 .68 1.68.68a2.28 2.28 0 0 0 2.35-2.32A2.28 2.28 0 0 0 24 31.46a2.28 2.28 0 0 0-2.36 2.36c0 .65.23 1.2.68 1.65Z"
            }))
        }
        function rn(e) {
            return a.createElement("svg", en({
                fill: "currentColor"
            }, e, {
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                className: e.className
            }), a.createElement("path", {
                d: "M11.45 18.62 19.5 24l-8.05 5.38A10 10 0 0 0 7 37.69V45a1 1 0 0 0 1 1h32a1 1 0 0 0 1-1v-7.3a10 10 0 0 0-4.45-8.32L28.5 24l8.05-5.38A10 10 0 0 0 41 10.31V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7.3a10 10 0 0 0 4.45 8.32ZM37 6v4.3a6 6 0 0 1-2.67 5L28.78 19h-9.56l-5.55-3.7a6 6 0 0 1-2.67-5V6h26Zm0 36H11v-4h26v4Zm-24.73-8a6 6 0 0 1 1.4-1.3L24 25.8l10.33 6.9a6 6 0 0 1 1.4 1.3H12.27Z"
            }))
        }
        function an(e) {
            return a.createElement("svg", en({
                fill: "currentColor"
            }, e, {
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                className: e.className
            }), a.createElement("path", {
                d: "M24 12.5a11.5 11.5 0 1 0 7.4 20.31 2.5 2.5 0 1 1 3.2 3.83A16.5 16.5 0 1 1 40.5 24a2.5 2.5 0 0 1-5 0A11.5 11.5 0 0 0 24 12.5Z"
            }))
        }
        function on(e) {
            return a.createElement("svg", en({
                fill: "currentColor"
            }, e, {
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                className: e.className
            }), a.createElement("path", {
                d: "M38.68 10.26c.46.3.6.92.3 1.38L23 36.3a2.4 2.4 0 0 1-3.82.28L9.85 25.83a1 1 0 0 1 .1-1.41l2.1-1.84a1 1 0 0 1 1.42.1l7.25 8.34L34.94 9.04a1 1 0 0 1 1.38-.3l2.36 1.52Z"
            }))
        }
        function ln(e) {
            return a.createElement("svg", en({
                fill: "currentColor"
            }, e, {
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                className: e.className
            }), a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M46 24a22 22 0 1 0-44 0 22 22 0 0 0 44 0Zm-30.49 5.66a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0L24 26.83l5.66 5.66a1 1 0 0 0 1.41 0l1.42-1.42a1 1 0 0 0 0-1.41L26.83 24l5.66-5.66a1 1 0 0 0 0-1.41l-1.42-1.41a1 1 0 0 0-1.41 0L24 21.17l-5.66-5.66a1 1 0 0 0-1.41 0l-1.42 1.42a1 1 0 0 0 0 1.41L21.17 24l-5.66 5.66Z"
            }))
        }
        function sn(e) {
            return a.createElement("svg", en({
                fill: "currentColor"
            }, e, {
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                className: e.className
            }), a.createElement("path", {
                d: "M38.7 12.12a1 1 0 0 0 0-1.41l-1.4-1.42a1 1 0 0 0-1.42 0L24 21.17 12.12 9.3a1 1 0 0 0-1.41 0l-1.42 1.42a1 1 0 0 0 0 1.41L21.17 24 9.3 35.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0L24 26.83 35.88 38.7a1 1 0 0 0 1.41 0l1.42-1.42a1 1 0 0 0 0-1.41L26.83 24 38.7 12.12Z"
            }))
        }
        tn(on),
        tn((function(e) {
            return a.createElement("svg", en({
                fill: "currentColor"
            }, e, {
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                className: e.className
            }), a.createElement("path", {
                d: "M33.2 36.02a1 1 0 0 0 1.4 0l1.42-1.42a1 1 0 0 0 0-1.4l-9.2-9.2 9.2-9.2a1 1 0 0 0 0-1.4l-1.41-1.42a1 1 0 0 0-1.42 0L24 21.17l-9.2-9.2a1 1 0 0 0-1.4 0l-1.42 1.42a1 1 0 0 0 0 1.42l9.2 9.19-9.2 9.2a1 1 0 0 0 0 1.4l1.41 1.42a1 1 0 0 0 1.42 0l9.19-9.2 9.2 9.2Z"
            }))
        }
        ));
        const cn = e => ({color: t, size: n, autoMirror: r, className: o, style: i}) => {
            const l = _()
              , c = e;
            return a.createElement(c, {
                className: o,
                color: t ? s[t] : "inherit",
                fontSize: void 0 !== n ? n : "inherit",
                style: Object.assign(Object.assign({}, r && "rtl" === l && {
                    transform: "scaleX(-1)"
                }), i)
            })
        }
          , un = cn(nn)
          , dn = cn(rn)
          , pn = cn(an)
          , fn = cn(on)
          , hn = cn(ln)
          , vn = cn(sn)
          , bn = ({colorSchemePreference: e, textDirection: t, safeAreaInsetTop: n, topToastOffset: r, bottomToastOffset: o, zIndexConfig: i, children: l}) => {
            const s = (0,
            a.useRef)(0);
            return a.createElement(Gt.Provider, {
                value: {
                    idRef: s
                }
            }, a.createElement(g, {
                safeAreaInsetTop: n,
                zIndexConfig: i
            }, a.createElement(d, {
                colorSchemePreference: e
            }, a.createElement(x, {
                textDirection: t
            }, a.createElement(Wt, {
                topToastOffset: r,
                bottomToastOffset: o
            }, l)))))
        }
          , gn = e => ({
            dir: e.textDirection,
            "data-tux-color-scheme": e.colorSchemePreference
        })
          , mn = {
            large: 48,
            medium: 32,
            small: 20
        }
          , yn = {
            normal: 3,
            thin: 2
        }
          , xn = e => {
            var {size: t="small", variant: n="normal", className: r, style: o} = e
              , i = l(e, ["size", "variant", "className", "style"]);
            const s = mn[t]
              , c = yn[n]
              , u = 24 - c
              , d = Math.PI * u;
            return a.createElement("div", Object.assign({
                className: Zt("TUXLoadingSpinner-container", r),
                style: Object.assign({
                    width: s,
                    height: s
                }, o)
            }, i), a.createElement("svg", {
                viewBox: "0 0 24 24",
                width: s,
                height: s,
                className: "TUXLoadingSpinner"
            }, a.createElement("circle", {
                cx: 12,
                cy: 12,
                r: u / 2,
                stroke: "currentColor",
                strokeWidth: c,
                strokeDasharray: `${d}`,
                strokeDashoffset: d - .8 * d,
                strokeLinecap: "round",
                fill: "none"
            })))
        }
          , _n = (0,
        a.forwardRef)(( (e, t) => {
            var {label: n, shape: r="default", size: o="medium", variant: i="primary", type: s="button", leadingIcon: c, trailingIcon: u, disabled: d=!1, loading: p=!1, onClick: f, onDisabledClick: h, className: v} = e
              , b = l(e, ["label", "shape", "size", "variant", "type", "leadingIcon", "trailingIcon", "disabled", "loading", "onClick", "onDisabledClick", "className"]);
            const g = p || d;
            return a.createElement("button", Object.assign({
                className: Zt("TUXButton", `TUXButton--${r}`, `TUXButton--${o}`, `TUXButton--${i}`, g && "TUXButton--disabled", p && "TUXButton--loading", v),
                ref: t,
                onClick: g ? h : f,
                "aria-disabled": g,
                disabled: g,
                type: s
            }, b), a.createElement("div", {
                className: "TUXButton-content"
            }, c ? a.createElement("div", {
                className: "TUXButton-iconContainer"
            }, c) : null, n ? a.createElement("div", {
                className: "TUXButton-label"
            }, n) : null, u ? a.createElement("div", {
                className: "TUXButton-iconContainer"
            }, u) : null), p ? a.createElement(xn, {
                className: "TUXButton-spinner"
            }) : null)
        }
        ));
        _n.displayName = "TUXButton";
        const En = (0,
        a.createContext)(void 0)
          , On = e => {
            var {titleId: t, onOpenChange: n} = e
              , r = l(e, ["titleId", "onOpenChange"]);
            const o = (0,
            a.useMemo)(( () => ({
                titleId: t,
                onOpenChange: n
            })), [t, n]);
            return a.createElement(En.Provider, Object.assign({
                value: o
            }, r))
        }
          , wn = e => {
            var t, {open: n, onOpenChange: r, width: i="small", outsidePressDismiss: s=!0, children: c, className: d, style: p, root: f} = e, h = l(e, ["open", "onOpenChange", "width", "outsidePressDismiss", "children", "className", "style", "root"]);
            const v = `${$t()}_title`
              , b = m()
              , {refs: g, context: y} = function(e) {
                var t;
                void 0 === e && (e = {});
                const {open: n=!1, onOpenChange: r, nodeId: i} = e
                  , [l,s] = a.useState(null)
                  , c = (null == (t = e.elements) ? void 0 : t.reference) || l
                  , u = function(e) {
                    void 0 === e && (e = {});
                    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: i, elements: {reference: l, floating: s}={}, transform: c=!0, whileElementsMounted: u, open: d} = e
                      , [p,f] = a.useState({
                        x: 0,
                        y: 0,
                        strategy: n,
                        placement: t,
                        middlewareData: {},
                        isPositioned: !1
                    })
                      , [h,v] = a.useState(r);
                    ke(h, r) || v(r);
                    const [b,g] = a.useState(null)
                      , [m,y] = a.useState(null)
                      , x = a.useCallback((e => {
                        e !== w.current && (w.current = e,
                        g(e))
                    }
                    ), [])
                      , _ = a.useCallback((e => {
                        e !== P.current && (P.current = e,
                        y(e))
                    }
                    ), [])
                      , E = l || b
                      , O = s || m
                      , w = a.useRef(null)
                      , P = a.useRef(null)
                      , T = a.useRef(p)
                      , S = null != u
                      , C = je(u)
                      , k = je(i)
                      , I = a.useCallback(( () => {
                        if (!w.current || !P.current)
                            return;
                        const e = {
                            placement: t,
                            strategy: n,
                            middleware: h
                        };
                        k.current && (e.platform = k.current),
                        Se(w.current, P.current, e).then((e => {
                            const t = Object.assign(Object.assign({}, e), {
                                isPositioned: !0
                            });
                            N.current && !ke(T.current, t) && (T.current = t,
                            o.flushSync(( () => {
                                f(t)
                            }
                            )))
                        }
                        ))
                    }
                    ), [h, t, n, k]);
                    Ce(( () => {
                        !1 === d && T.current.isPositioned && (T.current.isPositioned = !1,
                        f((e => Object.assign(Object.assign({}, e), {
                            isPositioned: !1
                        }))))
                    }
                    ), [d]);
                    const N = a.useRef(!1);
                    Ce(( () => (N.current = !0,
                    () => {
                        N.current = !1
                    }
                    )), []),
                    Ce(( () => {
                        if (E && (w.current = E),
                        O && (P.current = O),
                        E && O) {
                            if (C.current)
                                return C.current(E, O, I);
                            I()
                        }
                    }
                    ), [E, O, I, C, S]);
                    const j = a.useMemo(( () => ({
                        reference: w,
                        floating: P,
                        setReference: x,
                        setFloating: _
                    })), [x, _])
                      , A = a.useMemo(( () => ({
                        reference: E,
                        floating: O
                    })), [E, O])
                      , U = a.useMemo(( () => {
                        const e = {
                            position: n,
                            left: 0,
                            top: 0
                        };
                        if (!A.floating)
                            return e;
                        const t = Ne(A.floating, p.x)
                          , r = Ne(A.floating, p.y);
                        return c ? Object.assign(Object.assign(Object.assign({}, e), {
                            transform: "translate(" + t + "px, " + r + "px)"
                        }), Ie(A.floating) >= 1.5 && {
                            willChange: "transform"
                        }) : {
                            position: n,
                            left: t,
                            top: r
                        }
                    }
                    ), [n, c, A.floating, p.x, p.y]);
                    return a.useMemo(( () => Object.assign(Object.assign({}, p), {
                        update: I,
                        refs: j,
                        elements: A,
                        floatingStyles: U
                    })), [p, I, j, A, U])
                }(e)
                  , d = ot()
                  , p = Mt(( (e, t) => {
                    e && (h.current.openEvent = t),
                    null == r || r(e, t)
                }
                ))
                  , f = a.useRef(null)
                  , h = a.useRef({})
                  , v = a.useState(( () => function() {
                    const e = new Map;
                    return {
                        emit(t, n) {
                            var r;
                            null == (r = e.get(t)) || r.forEach((e => e(n)))
                        },
                        on(t, n) {
                            e.set(t, [...e.get(t) || [], n])
                        },
                        off(t, n) {
                            var r;
                            e.set(t, (null == (r = e.get(t)) ? void 0 : r.filter((e => e !== n))) || [])
                        }
                    }
                }()))[0]
                  , b = nt()
                  , g = a.useCallback((e => {
                    const t = P(e) ? {
                        getBoundingClientRect: () => e.getBoundingClientRect(),
                        contextElement: e
                    } : e;
                    u.refs.setReference(t)
                }
                ), [u.refs])
                  , m = a.useCallback((e => {
                    (P(e) || null === e) && (f.current = e,
                    s(e)),
                    (P(u.refs.reference.current) || null === u.refs.reference.current || null !== e && !P(e)) && u.refs.setReference(e)
                }
                ), [u.refs])
                  , y = a.useMemo(( () => Object.assign(Object.assign({}, u.refs), {
                    setReference: m,
                    setPositionReference: g,
                    domReference: f
                })), [u.refs, m, g])
                  , x = a.useMemo(( () => Object.assign(Object.assign({}, u.elements), {
                    domReference: c
                })), [u.elements, c])
                  , _ = a.useMemo(( () => Object.assign(Object.assign({}, u), {
                    refs: y,
                    elements: x,
                    dataRef: h,
                    nodeId: i,
                    floatingId: b,
                    events: v,
                    open: n,
                    onOpenChange: p
                })), [u, i, b, v, n, p, y, x]);
                return Ze(( () => {
                    const e = null == d ? void 0 : d.nodesRef.current.find((e => e.id === i));
                    e && (e.context = _)
                }
                )),
                a.useMemo(( () => Object.assign(Object.assign({}, u), {
                    context: _,
                    refs: y,
                    elements: x
                })), [u, y, x, _])
            }({
                open: n,
                onOpenChange: r
            })
              , x = function(e, t) {
                void 0 === t && (t = {});
                const {open: n, onOpenChange: r, dataRef: o, elements: {domReference: i}} = e
                  , {enabled: l=!0, event: s="click", toggle: c=!0, ignoreMouse: u=!1, keyboardHandlers: d=!0} = t
                  , p = a.useRef()
                  , f = a.useRef(!1);
                return a.useMemo(( () => l ? {
                    reference: {
                        onPointerDown(e) {
                            p.current = e.pointerType
                        },
                        onMouseDown(e) {
                            0 === e.button && (U(p.current, !0) && u || "click" !== s && (!n || !c || o.current.openEvent && "mousedown" !== o.current.openEvent.type ? (e.preventDefault(),
                            r(!0, e.nativeEvent)) : r(!1, e.nativeEvent)))
                        },
                        onClick(e) {
                            "mousedown" === s && p.current ? p.current = void 0 : U(p.current, !0) && u || (!n || !c || o.current.openEvent && "click" !== o.current.openEvent.type ? r(!0, e.nativeEvent) : r(!1, e.nativeEvent))
                        },
                        onKeyDown(e) {
                            p.current = void 0,
                            e.defaultPrevented || !d || At(e) || (" " !== e.key || Ut(i) || (e.preventDefault(),
                            f.current = !0),
                            "Enter" === e.key && r(!n || !c, e.nativeEvent))
                        },
                        onKeyUp(e) {
                            e.defaultPrevented || !d || At(e) || Ut(i) || " " === e.key && f.current && (f.current = !1,
                            r(!n || !c, e.nativeEvent))
                        }
                    }
                } : {}), [l, o, s, u, d, i, c, n, r])
            }(y)
              , E = function(e, t) {
                void 0 === t && (t = {});
                const {open: n, floatingId: r} = e
                  , {enabled: o=!0, role: i="dialog"} = t
                  , l = nt();
                return a.useMemo(( () => {
                    const e = {
                        id: r,
                        role: i
                    };
                    return o ? "tooltip" === i ? {
                        reference: {
                            "aria-describedby": n ? r : void 0
                        },
                        floating: e
                    } : {
                        reference: Object.assign(Object.assign({
                            "aria-expanded": n ? "true" : "false",
                            "aria-haspopup": "alertdialog" === i ? "dialog" : i,
                            "aria-controls": n ? r : void 0
                        }, "listbox" === i && {
                            role: "combobox"
                        }), "menu" === i && {
                            id: l
                        }),
                        floating: Object.assign(Object.assign({}, e), "menu" === i && {
                            "aria-labelledby": l
                        })
                    } : {}
                }
                ), [o, i, n, r, l])
            }(y)
              , O = Bt(y, {
                outsidePress: s,
                outsidePressEvent: "mousedown"
            })
              , {isMounted: w, status: T} = function(e, t) {
                void 0 === t && (t = {});
                const {open: n, elements: {floating: r}} = e
                  , {duration: o=250} = t
                  , i = ("number" == typeof o ? o : o.close) || 0
                  , [l,s] = a.useState(!1)
                  , [c,u] = a.useState("unmounted")
                  , d = function(e, t) {
                    const [n,r] = a.useState(e);
                    return e && !n && r(!0),
                    a.useEffect(( () => {
                        if (!e) {
                            const e = setTimeout(( () => r(!1)), t);
                            return () => clearTimeout(e)
                        }
                    }
                    ), [e, t]),
                    n
                }(n, i);
                return Ze(( () => {
                    l && !d && u("unmounted")
                }
                ), [l, d]),
                Ze(( () => {
                    if (r) {
                        if (n) {
                            u("initial");
                            const e = requestAnimationFrame(( () => {
                                u("open")
                            }
                            ));
                            return () => {
                                cancelAnimationFrame(e)
                            }
                        }
                        s(!0),
                        u("close")
                    }
                }
                ), [n, r]),
                {
                    isMounted: d,
                    status: c
                }
            }(y, {
                duration: 120
            })
              , {getFloatingProps: S} = function(e) {
                void 0 === e && (e = []);
                const t = e
                  , n = a.useCallback((t => Ft(t, e, "reference")), t)
                  , r = a.useCallback((t => Ft(t, e, "floating")), t)
                  , o = a.useCallback((t => Ft(t, e, "item")), e.map((e => null == e ? void 0 : e.item)));
                return a.useMemo(( () => ({
                    getReferenceProps: n,
                    getFloatingProps: r,
                    getItemProps: o
                })), [n, r, o])
            }([x, E, O])
              , C = ( () => {
                const e = ( () => {
                    const e = (0,
                    a.useContext)(u);
                    if (void 0 === e)
                        throw new Error("TUXColorSchemeContext is undefined. Make sure to wrap your app with TUXProvider.");
                    return e
                }
                )()
                  , t = _();
                return gn({
                    colorSchemePreference: e,
                    textDirection: t
                })
            }
            )();
            return w ? a.createElement(St, {
                root: f
            }, a.createElement(jt, Object.assign({
                className: "TUXModal-overlay",
                "data-transition-status": T,
                lockScroll: !0,
                style: {
                    zIndex: null !== (t = null == p ? void 0 : p.zIndex) && void 0 !== t ? t : b.zIndex.modal
                }
            }, C), a.createElement(It, {
                context: y,
                order: ["floating", "content"]
            }, a.createElement("div", Object.assign(Object.assign(Object.assign({
                className: Zt("TUXModal", d),
                "data-width": i,
                ref: g.setFloating,
                "aria-labelledby": v
            }, S()), {
                style: p
            }), h), a.createElement(On, {
                titleId: v,
                onOpenChange: r
            }, c))))) : a.createElement(a.Fragment, null)
        }
        ;
        (0,
        a.createContext)(void 0);
        const Pn = ({inputId: e, label: t, description: n, error: r, requirement: o="optional", characterCount: i=0, maxLength: l, hideLabel: s=!1, children: c, className: u, style: d}) => {
            const p = `${e}_label`
              , f = `${e}_description`
              , h = `${e}_error`;
            let v = null;
            return "required" === o && (v = a.createElement("div", {
                className: "TUXFormField-requiredStar"
            }, "*")),
            a.createElement("div", {
                className: Zt("TUXFormField", u),
                style: d
            }, !s && a.createElement("div", {
                className: "TUXFormField-header"
            }, a.createElement("div", {
                className: "TUXFormField-labelRow"
            }, a.createElement("div", {
                className: "TUXFormField-label"
            }, a.createElement("label", {
                htmlFor: e,
                id: p
            }, t)), v), a.createElement("div", {
                className: "TUXFormField-description",
                id: f
            }, n)), c, r || void 0 !== l ? a.createElement("div", {
                className: "TUXFormField-footer"
            }, a.createElement("div", {
                className: "TUXFormField-error",
                id: h
            }, r ? a.createElement(a.Fragment, null, a.createElement(un, {
                className: "TUXFormField-errorIcon",
                size: "13px"
            }), r) : null), void 0 !== l ? a.createElement("div", {
                className: Zt("TUXFormField-wordCount", i > l && "TUXFormField-wordCount--max")
            }, i, "/", l) : null) : null)
        }
          , Tn = (0,
        a.forwardRef)(( (e, t) => {
            var {size: n, disabled: r=!1, hasError: o=!1, hasFocusRing: i=!1, children: s, className: c} = e
              , u = l(e, ["size", "disabled", "hasError", "hasFocusRing", "children", "className"]);
            return a.createElement("div", Object.assign({
                className: Zt("TUXInputBox", {
                    "TUXInputBox-focus-ring": i
                }, c),
                ref: t,
                "data-size": n,
                "data-disabled": r,
                "data-has-error": o
            }, u), s)
        }
        ))
          , Sn = {
            large: 20,
            medium: 20,
            small: 16,
            xsmall: 14
        }
          , Cn = {
            large: 5,
            medium: 5,
            small: 4,
            xsmall: 3
        }
          , kn = (0,
        a.forwardRef)(( (e, t) => {
            var {value: n, onChange: r, onClear: o, prefix: i, suffix: s, size: c="large", leadingIcon: u, trailingIcon: d, loading: p=!1, clearable: f=!1, placeholder: h, disabled: b=!1, required: g=!1, hasDescription: m=!1, hasError: y=!1, inputId: x, readOnly: _=!1, isValid: E=!1, className: O, style: w} = e
              , P = l(e, ["value", "onChange", "onClear", "prefix", "suffix", "size", "leadingIcon", "trailingIcon", "loading", "clearable", "placeholder", "disabled", "required", "hasDescription", "hasError", "inputId", "readOnly", "isValid", "className", "style"]);
            const T = (0,
            a.useRef)(null)
              , S = `${x}_description`
              , C = `${x}_error`
              , k = {
                fontSize: Sn[c],
                padding: Cn[c]
            };
            return a.createElement("div", {
                className: Zt("TUXTextInputCore", `TUXTextInputCore--${c}`, O),
                style: w
            }, u ? a.createElement("div", {
                className: "TUXTextInputCore-leadingIconWrapper",
                style: {
                    fontSize: Sn[c]
                }
            }, u) : null, i ? a.createElement("div", {
                className: "TUXTextInputCore-prefix"
            }, i) : null, a.createElement("input", Object.assign({
                className: "TUXTextInputCore-input",
                type: "text",
                id: x,
                "aria-required": g,
                "aria-invalid": y,
                "aria-describedby": y ? C : m ? S : void 0,
                ref: v(t, T),
                value: n,
                placeholder: h,
                onChange: e => {
                    r(e.target.value, e)
                }
                ,
                disabled: b,
                readOnly: _
            }, P)), s ? a.createElement("div", {
                className: "TUXTextInputCore-suffix"
            }, s) : null, p ? a.createElement("div", {
                className: "TUXTextInputCore-trailingIconWrapper",
                style: k
            }, a.createElement(pn, {
                className: "TUXTextInputCore-loadingIcon"
            })) : null, f && n && !b ? a.createElement(Qt, {
                className: "TUXTextInputCore-clearButton",
                onClick: e => {
                    var t;
                    r(""),
                    null == o || o(e),
                    null === (t = T.current) || void 0 === t || t.focus()
                }
                ,
                onMouseDown: e => e.preventDefault(),
                style: k
            }, a.createElement(hn, {
                color: "UITextPlaceholder"
            })) : null, E ? a.createElement("div", {
                style: k
            }, a.createElement(fn, {
                color: "UIShapeSuccess"
            })) : null, d ? a.createElement("div", {
                className: "TUXTextInputCore-trailingIconWrapper",
                style: k
            }, d) : null)
        }
        ))
          , In = ((0,
        a.forwardRef)(( (e, t) => {
            var {value: n, onChange: r, onClear: o, placeholder: i, size: s="large", hideLabel: c=!1, label: u, description: d, requirement: p, error: f, prefix: h, suffix: v, disabled: b=!1, leadingIcon: g, trailingIcon: m, loading: y=!1, clearable: x=!1, maxLength: _, readOnly: E=!1, isValid: O=!1, hasFocusRing: w=!1, className: P, style: T} = e
              , S = l(e, ["value", "onChange", "onClear", "placeholder", "size", "hideLabel", "label", "description", "requirement", "error", "prefix", "suffix", "disabled", "leadingIcon", "trailingIcon", "loading", "clearable", "maxLength", "readOnly", "isValid", "hasFocusRing", "className", "style"]);
            const C = $t()
              , k = Boolean(f) || Boolean(_ && n.length > _);
            return a.createElement(Pn, {
                className: Zt("TUXTextInput", P),
                inputId: C,
                label: u,
                hideLabel: c,
                requirement: p,
                description: d,
                error: f,
                characterCount: n.length,
                maxLength: _,
                style: T
            }, a.createElement(Tn, {
                size: s,
                disabled: b,
                hasError: k,
                hasFocusRing: w
            }, a.createElement(kn, Object.assign({
                inputId: C,
                ref: t,
                value: n,
                placeholder: i,
                size: s,
                onChange: r,
                onClear: o,
                prefix: h,
                suffix: v,
                leadingIcon: g,
                trailingIcon: m,
                loading: y,
                clearable: x,
                required: "required" === p,
                disabled: b,
                hasDescription: Boolean(d),
                hasError: Boolean(f),
                readOnly: E,
                isValid: O
            }, S))))
        }
        )),
        e => {
            var {label: t, href: n, rel: r, disabled: o=!1, size: i, color: c="UITextPrimaryDisplay", weight: u="normal", className: d, style: p} = e
              , f = l(e, ["label", "href", "rel", "disabled", "size", "color", "weight", "className", "style"]);
            return a.createElement("a", Object.assign({
                className: Zt("TUXLink", o && "TUXLink--disabled", d),
                style: Object.assign({
                    fontSize: i ? `${i}px` : "inherit",
                    color: s[c]
                }, p),
                href: o ? void 0 : n,
                rel: r
            }, f), a.createElement(Jt, {
                weight: u,
                font: "TikTok Sans"
            }, t))
        }
        );
        (0,
        a.createContext)(null),
        (0,
        a.createContext)(null),
        new Date(2017,0,1),
        new Date(2017,0,2),
        new Date(2017,0,3),
        new Date(2017,0,4),
        new Date(2017,0,5),
        new Date(2017,0,6),
        new Date(2017,0,7),
        new Date(2017,0,1),
        new Date(2017,0,2),
        new Date(2017,0,3),
        new Date(2017,0,4),
        new Date(2017,0,5),
        new Date(2017,0,6),
        new Date(2017,0,7);
        class Nn {
        }
        var jn;
        function An(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
        Nn.lockId = 0,
        Nn.locker = new Map,
        Nn.registerLock = () => (Nn.lockId += 1,
        Nn.locker.set(Nn.lockId, !0),
        Nn.lockId),
        Nn.unregisterLock = e => {
            Nn.locker.delete(e)
        }
        ,
        Nn.enterScrollLock = () => {
            const e = document.documentElement
              , {body: t} = document
              , n = window.pageYOffset || e.scrollTop || t.scrollTop || 0
              , r = document.createElement("style");
            r.id = "tux-screen-lock",
            r.innerHTML = `\n        html {\n          height: 100%;\n          overflow: hidden;\n        }\n        body {\n          ${n > 0 ? "height: auto;" : ""}\n          min-height: 100%; /* for ios 12 */\n          top: -${n}px;\n          left: 0;\n          right: 0;\n          position: fixed;\n        }\n      `,
            t.appendChild(r),
            t.setAttribute("tux-screen-lock-offset", `-${n}`)
        }
        ,
        Nn.getBodyFixedTopOffset = () => {
            var e;
            if (!f && document.body.hasAttribute("tux-screen-lock-offset"))
                return parseInt(null !== (e = document.body.getAttribute("tux-screen-lock-offset")) && void 0 !== e ? e : "0", 10)
        }
        ,
        Nn.exitScrollLock = () => {
            var e;
            const t = document.documentElement
              , {body: n} = document
              , r = document.getElementById("tux-screen-lock")
              , a = -(null !== (e = Nn.getBodyFixedTopOffset()) && void 0 !== e ? e : 0);
            if (r && n.removeChild(r),
            n.removeAttribute("tux-screen-lock-offset"),
            "scrollBehavior"in t.style) {
                const e = document.createElement("style");
                e.innerHTML = "\n        html, body {\n          scroll-behavior: auto !important;\n        }\n      ",
                n.appendChild(e),
                window.scrollTo({
                    top: a,
                    behavior: "auto"
                }),
                n.removeChild(e)
            } else
                a && window.scrollTo(0, a)
        }
        ,
        Nn.getBodyFixedTopOffset,
        (0,
        a.createContext)({
            isScrolled: !1,
            setIsScrolled: h,
            showCloseButtonBG: !1,
            setShowCloseButtonBG: h
        }),
        function(e) {
            e.NO_BOUNCE_SLOW = "NO_BOUNCE_SLOW",
            e.NO_BOUNCE_FAST = "NO_BOUNCE_FAST",
            e.STRONG_BOUNCE = "STRONG_BOUNCE",
            e.WEEK_BOUNCE = "WEEK_BOUNCE",
            e.INSTANT = "INSTANT"
        }(jn || (jn = {})),
        jn.NO_BOUNCE_SLOW,
        jn.NO_BOUNCE_FAST,
        jn.WEEK_BOUNCE,
        jn.STRONG_BOUNCE,
        jn.INSTANT,
        jn.NO_BOUNCE_SLOW,
        jn.NO_BOUNCE_FAST,
        jn.WEEK_BOUNCE,
        jn.STRONG_BOUNCE,
        jn.INSTANT;
        var Un = "object" == typeof global && global && global.Object === Object && global
          , Ln = "object" == typeof self && self && self.Object === Object && self
          , Mn = Un || Ln || Function("return this")()
          , Rn = Mn.Symbol
          , Dn = Object.prototype
          , Bn = Dn.hasOwnProperty
          , Fn = Dn.toString
          , zn = Rn ? Rn.toStringTag : void 0
          , Wn = Object.prototype.toString
          , Gn = "[object Null]"
          , Kn = "[object Undefined]"
          , Hn = Rn ? Rn.toStringTag : void 0;
        function Xn(e) {
            return null == e ? void 0 === e ? Kn : Gn : Hn && Hn in Object(e) ? function(e) {
                var t = Bn.call(e, zn)
                  , n = e[zn];
                try {
                    e[zn] = void 0;
                    var r = !0
                } catch (e) {}
                var a = Fn.call(e);
                return r && (t ? e[zn] = n : delete e[zn]),
                a
            }(e) : function(e) {
                return Wn.call(e)
            }(e)
        }
        function Yn(e) {
            return null != e && "object" == typeof e
        }
        var Vn = "[object Symbol]";
        function $n(e) {
            return "symbol" == typeof e || Yn(e) && Xn(e) == Vn
        }
        Math.max,
        Math.min;
        (0,
        a.createContext)({
            isControlled: !1
        }).displayName = "TUXWheelPickerContext";
        var qn = Object.prototype;
        var Zn, Jn, Qn = (Zn = Object.keys,
        Jn = Object,
        function(e) {
            return Zn(Jn(e))
        }
        ), er = Object.prototype.hasOwnProperty;
        function tr(e) {
            if (n = (t = e) && t.constructor,
            t !== ("function" == typeof n && n.prototype || qn))
                return Qn(e);
            var t, n, r = [];
            for (var a in Object(e))
                er.call(e, a) && "constructor" != a && r.push(a);
            return r
        }
        var nr = "[object AsyncFunction]"
          , rr = "[object Function]"
          , ar = "[object GeneratorFunction]"
          , or = "[object Proxy]";
        function ir(e) {
            if (!An(e))
                return !1;
            var t = Xn(e);
            return t == rr || t == ar || t == nr || t == or
        }
        var lr, sr = Mn["__core-js_shared__"], cr = (lr = /[^.]+$/.exec(sr && sr.keys && sr.keys.IE_PROTO || "")) ? "Symbol(src)_1." + lr : "", ur = Function.prototype.toString;
        function dr(e) {
            if (null != e) {
                try {
                    return ur.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }
        var pr = /^\[object .+?Constructor\]$/
          , fr = Function.prototype
          , hr = Object.prototype
          , vr = fr.toString
          , br = hr.hasOwnProperty
          , gr = RegExp("^" + vr.call(br).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function mr(e, t) {
            var n = function(e, t) {
                return null == e ? void 0 : e[t]
            }(e, t);
            return function(e) {
                return !(!An(e) || function(e) {
                    return !!cr && cr in e
                }(e)) && (ir(e) ? gr : pr).test(dr(e))
            }(n) ? n : void 0
        }
        var yr = mr(Mn, "DataView")
          , xr = mr(Mn, "Map")
          , _r = mr(Mn, "Promise")
          , Er = mr(Mn, "Set")
          , Or = mr(Mn, "WeakMap")
          , wr = "[object Map]"
          , Pr = "[object Promise]"
          , Tr = "[object Set]"
          , Sr = "[object WeakMap]"
          , Cr = "[object DataView]"
          , kr = dr(yr)
          , Ir = dr(xr)
          , Nr = dr(_r)
          , jr = dr(Er)
          , Ar = dr(Or)
          , Ur = Xn;
        (yr && Ur(new yr(new ArrayBuffer(1))) != Cr || xr && Ur(new xr) != wr || _r && Ur(_r.resolve()) != Pr || Er && Ur(new Er) != Tr || Or && Ur(new Or) != Sr) && (Ur = function(e) {
            var t = Xn(e)
              , n = "[object Object]" == t ? e.constructor : void 0
              , r = n ? dr(n) : "";
            if (r)
                switch (r) {
                case kr:
                    return Cr;
                case Ir:
                    return wr;
                case Nr:
                    return Pr;
                case jr:
                    return Tr;
                case Ar:
                    return Sr
                }
            return t
        }
        );
        var Lr = Ur;
        function Mr(e) {
            return Yn(e) && "[object Arguments]" == Xn(e)
        }
        var Rr = Object.prototype
          , Dr = Rr.hasOwnProperty
          , Br = Rr.propertyIsEnumerable
          , Fr = Mr(function() {
            return arguments
        }()) ? Mr : function(e) {
            return Yn(e) && Dr.call(e, "callee") && !Br.call(e, "callee")
        }
          , zr = Array.isArray
          , Wr = 9007199254740991;
        function Gr(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Wr
        }
        function Kr(e) {
            return null != e && Gr(e.length) && !ir(e)
        }
        var Hr = "object" == typeof exports && exports && !exports.nodeType && exports
          , Xr = Hr && "object" == typeof module && module && !module.nodeType && module
          , Yr = Xr && Xr.exports === Hr ? Mn.Buffer : void 0
          , Vr = (Yr ? Yr.isBuffer : void 0) || function() {
            return !1
        }
          , $r = {};
        $r["[object Float32Array]"] = $r["[object Float64Array]"] = $r["[object Int8Array]"] = $r["[object Int16Array]"] = $r["[object Int32Array]"] = $r["[object Uint8Array]"] = $r["[object Uint8ClampedArray]"] = $r["[object Uint16Array]"] = $r["[object Uint32Array]"] = !0,
        $r["[object Arguments]"] = $r["[object Array]"] = $r["[object ArrayBuffer]"] = $r["[object Boolean]"] = $r["[object DataView]"] = $r["[object Date]"] = $r["[object Error]"] = $r["[object Function]"] = $r["[object Map]"] = $r["[object Number]"] = $r["[object Object]"] = $r["[object RegExp]"] = $r["[object Set]"] = $r["[object String]"] = $r["[object WeakMap]"] = !1;
        var qr = "object" == typeof exports && exports && !exports.nodeType && exports
          , Zr = qr && "object" == typeof module && module && !module.nodeType && module
          , Jr = Zr && Zr.exports === qr && Un.process
          , Qr = function() {
            try {
                return Zr && Zr.require && Zr.require("util").types || Jr && Jr.binding && Jr.binding("util")
            } catch (e) {}
        }()
          , ea = Qr && Qr.isTypedArray
          , ta = ea ? function(e) {
            return function(t) {
                return e(t)
            }
        }(ea) : function(e) {
            return Yn(e) && Gr(e.length) && !!$r[Xn(e)]
        }
        ;
        Object.prototype.hasOwnProperty;
        var na = function() {
            try {
                var e = mr(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch (e) {}
        }();
        function ra(e, t, n, r) {
            for (var a = -1, o = null == e ? 0 : e.length; ++a < o; ) {
                var i = e[a];
                t(r, i, n(i), e)
            }
            return r
        }
        var aa = function(e, t, n) {
            for (var r = -1, a = Object(e), o = n(e), i = o.length; i--; ) {
                var l = o[++r];
                if (!1 === t(a[l], l, a))
                    break
            }
            return e
        }
          , oa = 9007199254740991
          , ia = /^(?:0|[1-9]\d*)$/;
        function la(e, t) {
            var n = typeof e;
            return !!(t = null == t ? oa : t) && ("number" == n || "symbol" != n && ia.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        var sa = Object.prototype.hasOwnProperty;
        function ca(e) {
            return Kr(e) ? function(e, t) {
                var n = zr(e)
                  , r = !n && Fr(e)
                  , a = !n && !r && Vr(e)
                  , o = !n && !r && !a && ta(e)
                  , i = n || r || a || o
                  , l = i ? function(e, t) {
                    for (var n = -1, r = Array(e); ++n < e; )
                        r[n] = t(n);
                    return r
                }(e.length, String) : []
                  , s = l.length;
                for (var c in e)
                    !t && !sa.call(e, c) || i && ("length" == c || a && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || la(c, s)) || l.push(c);
                return l
            }(e) : tr(e)
        }
        var ua = function(e, t) {
            if (null == e)
                return e;
            if (!Kr(e))
                return function(e, t) {
                    return e && aa(e, t, ca)
                }(e, t);
            for (var n = e.length, r = -1, a = Object(e); ++r < n && !1 !== t(a[r], r, a); )
                ;
            return e
        };
        function da(e, t, n, r) {
            return ua(e, (function(e, a, o) {
                t(r, e, n(e), o)
            }
            )),
            r
        }
        function pa(e, t) {
            return e === t || e != e && t != t
        }
        function fa(e, t) {
            for (var n = e.length; n--; )
                if (pa(e[n][0], t))
                    return n;
            return -1
        }
        var ha = Array.prototype.splice;
        function va(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        va.prototype.clear = function() {
            this.__data__ = [],
            this.size = 0
        }
        ,
        va.prototype.delete = function(e) {
            var t = this.__data__
              , n = fa(t, e);
            return !(n < 0 || (n == t.length - 1 ? t.pop() : ha.call(t, n, 1),
            --this.size,
            0))
        }
        ,
        va.prototype.get = function(e) {
            var t = this.__data__
              , n = fa(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
        ,
        va.prototype.has = function(e) {
            return fa(this.__data__, e) > -1
        }
        ,
        va.prototype.set = function(e, t) {
            var n = this.__data__
              , r = fa(n, e);
            return r < 0 ? (++this.size,
            n.push([e, t])) : n[r][1] = t,
            this
        }
        ;
        var ba = mr(Object, "create")
          , ga = Object.prototype.hasOwnProperty
          , ma = Object.prototype.hasOwnProperty;
        function ya(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        function xa(e, t) {
            var n, r, a = e.__data__;
            return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? a["string" == typeof t ? "string" : "hash"] : a.map
        }
        function _a(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        function Ea(e) {
            var t = this.__data__ = new va(e);
            this.size = t.size
        }
        function Oa(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.__data__ = new _a; ++t < n; )
                this.add(e[t])
        }
        function wa(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                if (t(e[n], n, e))
                    return !0;
            return !1
        }
        ya.prototype.clear = function() {
            this.__data__ = ba ? ba(null) : {},
            this.size = 0
        }
        ,
        ya.prototype.delete = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        ,
        ya.prototype.get = function(e) {
            var t = this.__data__;
            if (ba) {
                var n = t[e];
                return "__lodash_hash_undefined__" === n ? void 0 : n
            }
            return ga.call(t, e) ? t[e] : void 0
        }
        ,
        ya.prototype.has = function(e) {
            var t = this.__data__;
            return ba ? void 0 !== t[e] : ma.call(t, e)
        }
        ,
        ya.prototype.set = function(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            n[e] = ba && void 0 === t ? "__lodash_hash_undefined__" : t,
            this
        }
        ,
        _a.prototype.clear = function() {
            this.size = 0,
            this.__data__ = {
                hash: new ya,
                map: new (xr || va),
                string: new ya
            }
        }
        ,
        _a.prototype.delete = function(e) {
            var t = xa(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        ,
        _a.prototype.get = function(e) {
            return xa(this, e).get(e)
        }
        ,
        _a.prototype.has = function(e) {
            return xa(this, e).has(e)
        }
        ,
        _a.prototype.set = function(e, t) {
            var n = xa(this, e)
              , r = n.size;
            return n.set(e, t),
            this.size += n.size == r ? 0 : 1,
            this
        }
        ,
        Ea.prototype.clear = function() {
            this.__data__ = new va,
            this.size = 0
        }
        ,
        Ea.prototype.delete = function(e) {
            var t = this.__data__
              , n = t.delete(e);
            return this.size = t.size,
            n
        }
        ,
        Ea.prototype.get = function(e) {
            return this.__data__.get(e)
        }
        ,
        Ea.prototype.has = function(e) {
            return this.__data__.has(e)
        }
        ,
        Ea.prototype.set = function(e, t) {
            var n = this.__data__;
            if (n instanceof va) {
                var r = n.__data__;
                if (!xr || r.length < 199)
                    return r.push([e, t]),
                    this.size = ++n.size,
                    this;
                n = this.__data__ = new _a(r)
            }
            return n.set(e, t),
            this.size = n.size,
            this
        }
        ,
        Oa.prototype.add = Oa.prototype.push = function(e) {
            return this.__data__.set(e, "__lodash_hash_undefined__"),
            this
        }
        ,
        Oa.prototype.has = function(e) {
            return this.__data__.has(e)
        }
        ;
        var Pa = 1
          , Ta = 2;
        function Sa(e, t, n, r, a, o) {
            var i = n & Pa
              , l = e.length
              , s = t.length;
            if (l != s && !(i && s > l))
                return !1;
            var c = o.get(e)
              , u = o.get(t);
            if (c && u)
                return c == t && u == e;
            var d = -1
              , p = !0
              , f = n & Ta ? new Oa : void 0;
            for (o.set(e, t),
            o.set(t, e); ++d < l; ) {
                var h = e[d]
                  , v = t[d];
                if (r)
                    var b = i ? r(v, h, d, t, e, o) : r(h, v, d, e, t, o);
                if (void 0 !== b) {
                    if (b)
                        continue;
                    p = !1;
                    break
                }
                if (f) {
                    if (!wa(t, (function(e, t) {
                        if (i = t,
                        !f.has(i) && (h === e || a(h, e, n, r, o)))
                            return f.push(t);
                        var i
                    }
                    ))) {
                        p = !1;
                        break
                    }
                } else if (h !== v && !a(h, v, n, r, o)) {
                    p = !1;
                    break
                }
            }
            return o.delete(e),
            o.delete(t),
            p
        }
        var Ca = Mn.Uint8Array;
        function ka(e) {
            var t = -1
              , n = Array(e.size);
            return e.forEach((function(e, r) {
                n[++t] = [r, e]
            }
            )),
            n
        }
        function Ia(e) {
            var t = -1
              , n = Array(e.size);
            return e.forEach((function(e) {
                n[++t] = e
            }
            )),
            n
        }
        var Na = 1
          , ja = 2
          , Aa = "[object Boolean]"
          , Ua = "[object Date]"
          , La = "[object Error]"
          , Ma = "[object Map]"
          , Ra = "[object Number]"
          , Da = "[object RegExp]"
          , Ba = "[object Set]"
          , Fa = "[object String]"
          , za = "[object Symbol]"
          , Wa = "[object ArrayBuffer]"
          , Ga = "[object DataView]"
          , Ka = Rn ? Rn.prototype : void 0
          , Ha = Ka ? Ka.valueOf : void 0
          , Xa = Object.prototype.propertyIsEnumerable
          , Ya = Object.getOwnPropertySymbols
          , Va = Ya ? function(e) {
            return null == e ? [] : (e = Object(e),
            function(t) {
                for (var n = -1, r = null == t ? 0 : t.length, a = 0, o = []; ++n < r; ) {
                    var i = t[n];
                    l = i,
                    Xa.call(e, l) && (o[a++] = i)
                }
                var l;
                return o
            }(Ya(e)))
        }
        : function() {
            return []
        }
        ;
        function $a(e) {
            return function(e, t, n) {
                var r = t(e);
                return zr(e) ? r : function(e, t) {
                    for (var n = -1, r = t.length, a = e.length; ++n < r; )
                        e[a + n] = t[n];
                    return e
                }(r, n(e))
            }(e, ca, Va)
        }
        var qa = 1
          , Za = Object.prototype.hasOwnProperty
          , Ja = 1
          , Qa = "[object Arguments]"
          , eo = "[object Array]"
          , to = "[object Object]"
          , no = Object.prototype.hasOwnProperty;
        function ro(e, t, n, r, a) {
            return e === t || (null == e || null == t || !Yn(e) && !Yn(t) ? e != e && t != t : function(e, t, n, r, a, o) {
                var i = zr(e)
                  , l = zr(t)
                  , s = i ? eo : Lr(e)
                  , c = l ? eo : Lr(t)
                  , u = (s = s == Qa ? to : s) == to
                  , d = (c = c == Qa ? to : c) == to
                  , p = s == c;
                if (p && Vr(e)) {
                    if (!Vr(t))
                        return !1;
                    i = !0,
                    u = !1
                }
                if (p && !u)
                    return o || (o = new Ea),
                    i || ta(e) ? Sa(e, t, n, r, a, o) : function(e, t, n, r, a, o, i) {
                        switch (n) {
                        case Ga:
                            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                                return !1;
                            e = e.buffer,
                            t = t.buffer;
                        case Wa:
                            return !(e.byteLength != t.byteLength || !o(new Ca(e), new Ca(t)));
                        case Aa:
                        case Ua:
                        case Ra:
                            return pa(+e, +t);
                        case La:
                            return e.name == t.name && e.message == t.message;
                        case Da:
                        case Fa:
                            return e == t + "";
                        case Ma:
                            var l = ka;
                        case Ba:
                            var s = r & Na;
                            if (l || (l = Ia),
                            e.size != t.size && !s)
                                return !1;
                            var c = i.get(e);
                            if (c)
                                return c == t;
                            r |= ja,
                            i.set(e, t);
                            var u = Sa(l(e), l(t), r, a, o, i);
                            return i.delete(e),
                            u;
                        case za:
                            if (Ha)
                                return Ha.call(e) == Ha.call(t)
                        }
                        return !1
                    }(e, t, s, n, r, a, o);
                if (!(n & Ja)) {
                    var f = u && no.call(e, "__wrapped__")
                      , h = d && no.call(t, "__wrapped__");
                    if (f || h) {
                        var v = f ? e.value() : e
                          , b = h ? t.value() : t;
                        return o || (o = new Ea),
                        a(v, b, n, r, o)
                    }
                }
                return !!p && (o || (o = new Ea),
                function(e, t, n, r, a, o) {
                    var i = n & qa
                      , l = $a(e)
                      , s = l.length;
                    if (s != $a(t).length && !i)
                        return !1;
                    for (var c = s; c--; ) {
                        var u = l[c];
                        if (!(i ? u in t : Za.call(t, u)))
                            return !1
                    }
                    var d = o.get(e)
                      , p = o.get(t);
                    if (d && p)
                        return d == t && p == e;
                    var f = !0;
                    o.set(e, t),
                    o.set(t, e);
                    for (var h = i; ++c < s; ) {
                        var v = e[u = l[c]]
                          , b = t[u];
                        if (r)
                            var g = i ? r(b, v, u, t, e, o) : r(v, b, u, e, t, o);
                        if (!(void 0 === g ? v === b || a(v, b, n, r, o) : g)) {
                            f = !1;
                            break
                        }
                        h || (h = "constructor" == u)
                    }
                    if (f && !h) {
                        var m = e.constructor
                          , y = t.constructor;
                        m == y || !("constructor"in e) || !("constructor"in t) || "function" == typeof m && m instanceof m && "function" == typeof y && y instanceof y || (f = !1)
                    }
                    return o.delete(e),
                    o.delete(t),
                    f
                }(e, t, n, r, a, o))
            }(e, t, n, r, ro, a))
        }
        function ao(e) {
            return e == e && !An(e)
        }
        function oo(e, t) {
            return function(n) {
                return null != n && n[e] === t && (void 0 !== t || e in Object(n))
            }
        }
        var io = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , lo = /^\w*$/;
        function so(e, t) {
            if (zr(e))
                return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !$n(e)) || lo.test(e) || !io.test(e) || null != t && e in Object(t)
        }
        function co(e, t) {
            if ("function" != typeof e || null != t && "function" != typeof t)
                throw new TypeError("Expected a function");
            var n = function() {
                var r = arguments
                  , a = t ? t.apply(this, r) : r[0]
                  , o = n.cache;
                if (o.has(a))
                    return o.get(a);
                var i = e.apply(this, r);
                return n.cache = o.set(a, i) || o,
                i
            };
            return n.cache = new (co.Cache || _a),
            n
        }
        co.Cache = _a;
        var uo, po, fo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ho = /\\(\\)?/g, vo = (uo = co((function(e) {
            var t = [];
            return 46 === e.charCodeAt(0) && t.push(""),
            e.replace(fo, (function(e, n, r, a) {
                t.push(r ? a.replace(ho, "$1") : n || e)
            }
            )),
            t
        }
        ), (function(e) {
            return 500 === po.size && po.clear(),
            e
        }
        )),
        po = uo.cache,
        uo), bo = 1 / 0, go = Rn ? Rn.prototype : void 0, mo = go ? go.toString : void 0;
        function yo(e) {
            if ("string" == typeof e)
                return e;
            if (zr(e))
                return function(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length, a = Array(r); ++n < r; )
                        a[n] = t(e[n], n, e);
                    return a
                }(e, yo) + "";
            if ($n(e))
                return mo ? mo.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -bo ? "-0" : t
        }
        function xo(e, t) {
            return zr(e) ? e : so(e, t) ? [e] : vo(function(e) {
                return null == e ? "" : yo(e)
            }(e))
        }
        var _o = 1 / 0;
        function Eo(e) {
            if ("string" == typeof e || $n(e))
                return e;
            var t = e + "";
            return "0" == t && 1 / e == -_o ? "-0" : t
        }
        function Oo(e, t) {
            for (var n = 0, r = (t = xo(t, e)).length; null != e && n < r; )
                e = e[Eo(t[n++])];
            return n && n == r ? e : void 0
        }
        function wo(e, t) {
            return null != e && t in Object(e)
        }
        function Po(e, t) {
            return so(e) && ao(t) ? oo(Eo(e), t) : function(n) {
                var r = function(e, t) {
                    var n = null == e ? void 0 : Oo(e, t);
                    return void 0 === n ? void 0 : n
                }(n, e);
                return void 0 === r && r === t ? function(e, t) {
                    return null != e && function(e, t, n) {
                        for (var r = -1, a = (t = xo(t, e)).length, o = !1; ++r < a; ) {
                            var i = Eo(t[r]);
                            if (!(o = null != e && n(e, i)))
                                break;
                            e = e[i]
                        }
                        return o || ++r != a ? o : !!(a = null == e ? 0 : e.length) && Gr(a) && la(i, a) && (zr(e) || Fr(e))
                    }(e, t, wo)
                }(n, e) : ro(t, r, 3)
            }
        }
        function To(e) {
            return e
        }
        var So, Co = Object.prototype.hasOwnProperty, ko = (So = function(e, t, n) {
            Co.call(e, n) ? e[n].push(t) : function(e, t, n) {
                "__proto__" == t && na ? na(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : e[t] = n
            }(e, n, [t])
        }
        ,
        function(e, t) {
            var n, r, a, o, i, l = {};
            return (zr(e) ? ra : da)(e, So, "function" == typeof (n = t) ? n : null == n ? To : "object" == typeof n ? zr(n) ? Po(n[0], n[1]) : (i = function(e) {
                for (var t = ca(e), n = t.length; n--; ) {
                    var r = t[n]
                      , a = e[r];
                    t[n] = [r, a, ao(a)]
                }
                return t
            }(o = n),
            1 == i.length && i[0][2] ? oo(i[0][0], i[0][1]) : function(e) {
                return e === o || function(e, t, n, r) {
                    var a = n.length
                      , o = a;
                    if (null == e)
                        return !o;
                    for (e = Object(e); a--; ) {
                        var i = n[a];
                        if (i[2] ? i[1] !== e[i[0]] : !(i[0]in e))
                            return !1
                    }
                    for (; ++a < o; ) {
                        var l = (i = n[a])[0]
                          , s = e[l]
                          , c = i[1];
                        if (i[2]) {
                            if (void 0 === s && !(l in e))
                                return !1
                        } else {
                            var u, d = new Ea;
                            if (!(void 0 === u ? ro(c, s, 3, r, d) : u))
                                return !1
                        }
                    }
                    return !0
                }(e, 0, i)
            }
            ) : so(r = n) ? (a = Eo(r),
            function(e) {
                return null == e ? void 0 : e[a]
            }
            ) : function(e) {
                return function(t) {
                    return Oo(t, e)
                }
            }(r), l)
        }
        ), Io = ko;
        const No = [{
            value: "AD",
            label: "Andorra"
        }, {
            value: "AE",
            label: "Emirates"
        }, {
            value: "AF",
            label: "Afghanistan"
        }, {
            value: "AG",
            label: "Antigua and Barbuda"
        }, {
            value: "AI",
            label: "Anguilla"
        }, {
            value: "AL",
            label: "Albania"
        }, {
            value: "AM",
            label: "Armenia"
        }, {
            value: "AO",
            label: "Angola"
        }, {
            value: "AQ",
            label: "Antarctica"
        }, {
            value: "AR",
            label: "Argentina"
        }, {
            value: "AS",
            label: "American Samoa"
        }, {
            value: "AT",
            label: "Austria"
        }, {
            value: "AU",
            label: "Australia"
        }, {
            value: "AW",
            label: "Aruba"
        }, {
            value: "AX",
            label: "Aland"
        }, {
            value: "AZ",
            label: "Azerbaijan"
        }, {
            value: "BA",
            label: "Bosnia and Herzegovina"
        }, {
            value: "BB",
            label: "Barbados"
        }, {
            value: "BD",
            label: "Bangladesh"
        }, {
            value: "BE",
            label: "Belgium"
        }, {
            value: "BF",
            label: "Burkina Faso"
        }, {
            value: "BG",
            label: "Bulgaria"
        }, {
            value: "BH",
            label: "Bahrain"
        }, {
            value: "BI",
            label: "Burundi"
        }, {
            value: "BJ",
            label: "Benin"
        }, {
            value: "BL",
            label: "Saint Barthélemy"
        }, {
            value: "BM",
            label: "Bermuda"
        }, {
            value: "BN",
            label: "Brunei"
        }, {
            value: "BO",
            label: "Bolivia"
        }, {
            value: "BQ",
            label: "Caribbean Netherlands"
        }, {
            value: "BR",
            label: "Brazil"
        }, {
            value: "BS",
            label: "The Bahamas"
        }, {
            value: "BT",
            label: "Bhutan"
        }, {
            value: "BV",
            label: "Bouvet Island"
        }, {
            value: "BW",
            label: "Botswana"
        }, {
            value: "BY",
            label: "Belarus"
        }, {
            value: "BZ",
            label: "Belize"
        }, {
            value: "CA",
            label: "Canada"
        }, {
            value: "CC",
            label: "Cocos (Keeling) Islands"
        }, {
            value: "CD",
            label: "Democratic Republic of the Congo"
        }, {
            value: "CF",
            label: "Central African Republic"
        }, {
            value: "CG",
            label: "Republic of the Congo"
        }, {
            value: "CH",
            label: "Switzerland"
        }, {
            value: "CI",
            label: "Ivory Coast"
        }, {
            value: "CK",
            label: "Cook Islands"
        }, {
            value: "CL",
            label: "Chile"
        }, {
            value: "CM",
            label: "Cameroon"
        }, {
            value: "CN",
            label: "China"
        }, {
            value: "CO",
            label: "Colombia"
        }, {
            value: "CR",
            label: "Costa Rica"
        }, {
            value: "CU",
            label: "Cuba"
        }, {
            value: "CV",
            label: "Cabo Verde"
        }, {
            value: "CW",
            label: "Curaçao"
        }, {
            value: "CX",
            label: "Christmas Island"
        }, {
            value: "CY",
            label: "Cyprus"
        }, {
            value: "CZ",
            label: "Czech Republic"
        }, {
            value: "DE",
            label: "Germany"
        }, {
            value: "DJ",
            label: "Djibouti"
        }, {
            value: "DK",
            label: "Denmark"
        }, {
            value: "DM",
            label: "Dominica"
        }, {
            value: "DO",
            label: "Dominican Republic"
        }, {
            value: "DZ",
            label: "Algeria"
        }, {
            value: "EC",
            label: "Ecuador"
        }, {
            value: "EE",
            label: "Estonia"
        }, {
            value: "EG",
            label: "Egypt"
        }, {
            value: "EH",
            label: "Western Sahara"
        }, {
            value: "ER",
            label: "Eritrea"
        }, {
            value: "ES",
            label: "Spain"
        }, {
            value: "ET",
            label: "Ethiopia"
        }, {
            value: "FI",
            label: "Finland"
        }, {
            value: "FJ",
            label: "Fiji"
        }, {
            value: "FK",
            label: "Falkland Islands"
        }, {
            value: "FM",
            label: "Federated States of Micronesia"
        }, {
            value: "FO",
            label: "Faroe Islands"
        }, {
            value: "FR",
            label: "France"
        }, {
            value: "GA",
            label: "Gabon"
        }, {
            value: "GB",
            label: "United Kingdom"
        }, {
            value: "GD",
            label: "Grenada"
        }, {
            value: "GE",
            label: "Georgia"
        }, {
            value: "GF",
            label: "French Guiana"
        }, {
            value: "GG",
            label: "Bailiwick of Guernsey"
        }, {
            value: "GH",
            label: "Ghana"
        }, {
            value: "GI",
            label: "Gibraltar"
        }, {
            value: "GL",
            label: "Greenland"
        }, {
            value: "GM",
            label: "The Gambia"
        }, {
            value: "GN",
            label: "Guinea"
        }, {
            value: "GP",
            label: "Guadeloupe"
        }, {
            value: "GQ",
            label: "Equatorial Guinea"
        }, {
            value: "GR",
            label: "Greece"
        }, {
            value: "GS",
            label: "South Georgia and the South Sandwich Islands"
        }, {
            value: "GT",
            label: "Guatemala"
        }, {
            value: "GU",
            label: "Guam"
        }, {
            value: "GW",
            label: "Guinea-Bissau"
        }, {
            value: "GY",
            label: "Guyana"
        }, {
            value: "HK",
            label: "Hong Kong"
        }, {
            value: "HM",
            label: "Heard Island and McDonald Islands"
        }, {
            value: "HN",
            label: "Honduras"
        }, {
            value: "HR",
            label: "Croatia"
        }, {
            value: "HT",
            label: "Haiti"
        }, {
            value: "HU",
            label: "Hungary"
        }, {
            value: "ID",
            label: "Indonesia"
        }, {
            value: "IE",
            label: "Ireland"
        }, {
            value: "IL",
            label: "Israel"
        }, {
            value: "IM",
            label: "Isle of Man"
        }, {
            value: "IN",
            label: "India"
        }, {
            value: "IO",
            label: "British Indian Ocean Territory"
        }, {
            value: "IQ",
            label: "Iraq"
        }, {
            value: "IR",
            label: "Iran"
        }, {
            value: "IS",
            label: "Iceland"
        }, {
            value: "IT",
            label: "Italy"
        }, {
            value: "JE",
            label: "Jersey"
        }, {
            value: "JM",
            label: "Jamaica"
        }, {
            value: "JO",
            label: "Jordan"
        }, {
            value: "JP",
            label: "Japan"
        }, {
            value: "KE",
            label: "Kenya"
        }, {
            value: "KG",
            label: "Kyrgyzstan"
        }, {
            value: "KH",
            label: "Cambodia"
        }, {
            value: "KI",
            label: "Kiribati"
        }, {
            value: "KM",
            label: "Comoros"
        }, {
            value: "KN",
            label: "Saint Kitts and Nevis"
        }, {
            value: "KP",
            label: "North Korea"
        }, {
            value: "KR",
            label: "South Korea"
        }, {
            value: "KW",
            label: "Kuwait"
        }, {
            value: "KY",
            label: "Cayman Islands"
        }, {
            value: "KZ",
            label: "Kazakhstan"
        }, {
            value: "LA",
            label: "Laos"
        }, {
            value: "LB",
            label: "Lebanon"
        }, {
            value: "LC",
            label: "Saint Lucia"
        }, {
            value: "LI",
            label: "Liechtenstein"
        }, {
            value: "LK",
            label: "Sri Lanka"
        }, {
            value: "LR",
            label: "Liberia"
        }, {
            value: "LS",
            label: "Lesotho"
        }, {
            value: "LT",
            label: "Lithuania"
        }, {
            value: "LU",
            label: "Luxembourg"
        }, {
            value: "LV",
            label: "Latvia"
        }, {
            value: "LY",
            label: "Libya"
        }, {
            value: "MA",
            label: "Morocco"
        }, {
            value: "MC",
            label: "Monaco"
        }, {
            value: "MD",
            label: "Moldova"
        }, {
            value: "ME",
            label: "Montenegro"
        }, {
            value: "MF",
            label: "Saint Martin"
        }, {
            value: "MG",
            label: "Madagascar"
        }, {
            value: "MH",
            label: "Marshall Islands"
        }, {
            value: "MK",
            label: "North Macedonia"
        }, {
            value: "ML",
            label: "Mali"
        }, {
            value: "MM",
            label: "Myanmar"
        }, {
            value: "MN",
            label: "Mongolia"
        }, {
            value: "MO",
            label: "Macau"
        }, {
            value: "MP",
            label: "Northern Mariana Islands"
        }, {
            value: "MQ",
            label: "Martinique"
        }, {
            value: "MR",
            label: "Mauritania"
        }, {
            value: "MS",
            label: "Montserrat"
        }, {
            value: "MT",
            label: "Malta"
        }, {
            value: "MU",
            label: "Mauritius"
        }, {
            value: "MV",
            label: "Republic of Maldives"
        }, {
            value: "MW",
            label: "Malawi"
        }, {
            value: "MX",
            label: "Mexico"
        }, {
            value: "MY",
            label: "Malaysia"
        }, {
            value: "MZ",
            label: "Mozambique"
        }, {
            value: "NA",
            label: "Namibia"
        }, {
            value: "NC",
            label: "New Caledonia"
        }, {
            value: "NE",
            label: "Niger"
        }, {
            value: "NF",
            label: "Norfolk Island"
        }, {
            value: "NG",
            label: "Nigeria"
        }, {
            value: "NI",
            label: "Nicaragua"
        }, {
            value: "NL",
            label: "Netherlands"
        }, {
            value: "NO",
            label: "Norway"
        }, {
            value: "NP",
            label: "Nepal"
        }, {
            value: "NR",
            label: "Nauru"
        }, {
            value: "NU",
            label: "Niue"
        }, {
            value: "NZ",
            label: "New Zealand"
        }, {
            value: "OM",
            label: "Oman"
        }, {
            value: "PA",
            label: "Panama"
        }, {
            value: "PE",
            label: "Peru"
        }, {
            value: "PF",
            label: "French Polynesia"
        }, {
            value: "PG",
            label: "Papua New Guinea"
        }, {
            value: "PH",
            label: "Philippines"
        }, {
            value: "PK",
            label: "Pakistan"
        }, {
            value: "PL",
            label: "Poland"
        }, {
            value: "PM",
            label: "Saint Pierre and Miquelon"
        }, {
            value: "PN",
            label: "Pitcairn Islands"
        }, {
            value: "PR",
            label: "Puerto Rico"
        }, {
            value: "PS",
            label: "Palestine"
        }, {
            value: "PT",
            label: "Portugal"
        }, {
            value: "PW",
            label: "Palau"
        }, {
            value: "PY",
            label: "Paraguay"
        }, {
            value: "QA",
            label: "Qatar"
        }, {
            value: "RE",
            label: "Réunion"
        }, {
            value: "RO",
            label: "Romania"
        }, {
            value: "RS",
            label: "Serbia"
        }, {
            value: "RU",
            label: "Russia"
        }, {
            value: "RW",
            label: "Rwanda"
        }, {
            value: "SA",
            label: "Saudi Arabia"
        }, {
            value: "SB",
            label: "Solomon Islands"
        }, {
            value: "SC",
            label: "Seychelles"
        }, {
            value: "SD",
            label: "Sudan"
        }, {
            value: "SE",
            label: "Sweden"
        }, {
            value: "SG",
            label: "Singapore"
        }, {
            value: "SH",
            label: "Saint Helena"
        }, {
            value: "SI",
            label: "Slovenia"
        }, {
            value: "SJ",
            label: "Svalbard and Jan Mayen"
        }, {
            value: "SK",
            label: "Slovak"
        }, {
            value: "SL",
            label: "Sierra Leone"
        }, {
            value: "SM",
            label: "San Marino"
        }, {
            value: "SN",
            label: "Senegal"
        }, {
            value: "SO",
            label: "Somalia"
        }, {
            value: "SR",
            label: "Suriname"
        }, {
            value: "SS",
            label: "South Sudan"
        }, {
            value: "ST",
            label: "Sao Tome and Principe"
        }, {
            value: "SV",
            label: "El Salvador"
        }, {
            value: "SX",
            label: "Sint Maarten"
        }, {
            value: "SY",
            label: "Syria"
        }, {
            value: "SZ",
            label: "Eswatini"
        }, {
            value: "TC",
            label: "Turks and Caicos Islands"
        }, {
            value: "TD",
            label: "Chad"
        }, {
            value: "TF",
            label: "French Southern and Antarctic Lands"
        }, {
            value: "TG",
            label: "Togo"
        }, {
            value: "TH",
            label: "Thailand"
        }, {
            value: "TJ",
            label: "Tajikistan"
        }, {
            value: "TK",
            label: "Tokelau"
        }, {
            value: "TL",
            label: "East Timor"
        }, {
            value: "TM",
            label: "Turkmenistan"
        }, {
            value: "TN",
            label: "Tunisia"
        }, {
            value: "TO",
            label: "Tonga"
        }, {
            value: "TR",
            label: "Turkey"
        }, {
            value: "TT",
            label: "Trinidad and Tobago"
        }, {
            value: "TV",
            label: "Tuvalu"
        }, {
            value: "TW",
            label: "Taiwan"
        }, {
            value: "TZ",
            label: "Tanzania"
        }, {
            value: "UA",
            label: "Ukraine"
        }, {
            value: "UG",
            label: "Uganda"
        }, {
            value: "UM",
            label: "United States Minor Outlying Islands"
        }, {
            value: "US",
            label: "United States"
        }, {
            value: "UY",
            label: "Uruguay"
        }, {
            value: "UZ",
            label: "Uzbekistan"
        }, {
            value: "VA",
            label: "Vatican City"
        }, {
            value: "VC",
            label: "Saint Vincent and the Grenadines"
        }, {
            value: "VE",
            label: "Venezuela"
        }, {
            value: "VG",
            label: "British Virgin Islands"
        }, {
            value: "VI",
            label: "Virgin Islands of the United States"
        }, {
            value: "VN",
            label: "Vietnam"
        }, {
            value: "VU",
            label: "Vanuatu"
        }, {
            value: "WF",
            label: "Wallis and Futuna"
        }, {
            value: "WS",
            label: "Samoa"
        }, {
            value: "XK",
            label: "Kosovo"
        }, {
            value: "YE",
            label: "Yemen"
        }, {
            value: "YT",
            label: "Mayotte"
        }, {
            value: "ZA",
            label: "South Africa"
        }, {
            value: "ZM",
            label: "Zambia"
        }, {
            value: "ZW",
            label: "Zimbabwe"
        }];
        ( () => {
            const e = Io(No, (e => e.label[0]));
            ca(e).sort().map((t => ({
                label: t,
                options: e[t]
            })))
        }
        )()
    }
}]);

