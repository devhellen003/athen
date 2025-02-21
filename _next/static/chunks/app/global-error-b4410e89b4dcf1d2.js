! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "af040b40-45cf-4885-a6bc-9023ff363d3f", e._sentryDebugIdIdentifier = "sentry-dbid-af040b40-45cf-4885-a6bc-9023ff363d3f")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [470], {
        11829: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 33934))
        },
        33934: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n(46328),
                o = n(6544),
                i = n.n(o),
                l = n(12920),
                d = n(37858);

            function s(e) {
                let {
                    error: t
                } = e;
                return (0, d.useEffect)(() => {
                    l.Tb(t)
                }, [t]), (0, r.jsx)("html", {
                    lang: "en",
                    children: (0, r.jsx)("body", {
                        children: (0, r.jsx)(i(), {
                            statusCode: void 0
                        })
                    })
                })
            }
        },
        78825: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let r = n(7982),
                o = n(46328),
                i = r._(n(37858)),
                l = r._(n(94683)),
                d = {
                    400: "Bad Request",
                    404: "This page could not be found",
                    405: "Method Not Allowed",
                    500: "Internal Server Error"
                };

            function s(e) {
                let {
                    res: t,
                    err: n
                } = e;
                return {
                    statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404
                }
            }
            let a = {
                error: {
                    fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
                    height: "100vh",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                },
                desc: {
                    lineHeight: "48px"
                },
                h1: {
                    display: "inline-block",
                    margin: "0 20px 0 0",
                    paddingRight: 23,
                    fontSize: 24,
                    fontWeight: 500,
                    verticalAlign: "top"
                },
                h2: {
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: "28px"
                },
                wrap: {
                    display: "inline-block"
                }
            };
            class u extends i.default.Component {
                render() {
                    let {
                        statusCode: e,
                        withDarkMode: t = !0
                    } = this.props, n = this.props.title || d[e] || "An unexpected error has occurred";
                    return (0, o.jsxs)("div", {
                        style: a.error,
                        children: [(0, o.jsx)(l.default, {
                            children: (0, o.jsx)("title", {
                                children: e ? e + ": " + n : "Application error: a client-side exception has occurred"
                            })
                        }), (0, o.jsxs)("div", {
                            style: a.desc,
                            children: [(0, o.jsx)("style", {
                                dangerouslySetInnerHTML: {
                                    __html: "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}" + (t ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}" : "")
                                }
                            }), e ? (0, o.jsx)("h1", {
                                className: "next-error-h1",
                                style: a.h1,
                                children: e
                            }) : null, (0, o.jsx)("div", {
                                style: a.wrap,
                                children: (0, o.jsxs)("h2", {
                                    style: a.h2,
                                    children: [this.props.title || e ? n : (0, o.jsx)(o.Fragment, {
                                        children: "Application error: a client-side exception has occurred (see the browser console for more information)"
                                    }), "."]
                                })
                            })]
                        })]
                    })
                }
            }
            u.displayName = "ErrorPage", u.getInitialProps = s, u.origGetInitialProps = s, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        3903: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = n(7982)._(n(37858)).default.createContext({})
        },
        59033: function(e, t) {
            "use strict";

            function n(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: n = !1,
                    hasQuery: r = !1
                } = void 0 === e ? {} : e;
                return t || n && r
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return n
                }
            })
        },
        94683: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    default: function() {
                        return y
                    },
                    defaultHead: function() {
                        return f
                    }
                });
            let r = n(7982),
                o = n(79540),
                i = n(46328),
                l = o._(n(37858)),
                d = r._(n(5078)),
                s = n(3903),
                a = n(9870),
                u = n(59033);

            function f(e) {
                void 0 === e && (e = !1);
                let t = [(0, i.jsx)("meta", {
                    charSet: "utf-8"
                })];
                return e || t.push((0, i.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function c(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === l.default.Fragment ? e.concat(l.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
            }
            n(51630);
            let p = ["name", "httpEquiv", "charSet", "itemProp"];

            function h(e, t) {
                let {
                    inAmpMode: n
                } = t;
                return e.reduce(c, []).reverse().concat(f(n).reverse()).filter(function() {
                    let e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return o => {
                        let i = !0,
                            l = !1;
                        if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
                            l = !0;
                            let t = o.key.slice(o.key.indexOf("$") + 1);
                            e.has(t) ? i = !1 : e.add(t)
                        }
                        switch (o.type) {
                            case "title":
                            case "base":
                                t.has(o.type) ? i = !1 : t.add(o.type);
                                break;
                            case "meta":
                                for (let e = 0, t = p.length; e < t; e++) {
                                    let t = p[e];
                                    if (o.props.hasOwnProperty(t)) {
                                        if ("charSet" === t) n.has(t) ? i = !1 : n.add(t);
                                        else {
                                            let e = o.props[t],
                                                n = r[t] || new Set;
                                            ("name" !== t || !l) && n.has(e) ? i = !1 : (n.add(e), r[t] = n)
                                        }
                                    }
                                }
                        }
                        return i
                    }
                }()).reverse().map((e, t) => {
                    let r = e.key || t;
                    if (!n && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                        let t = { ...e.props || {}
                        };
                        return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, l.default.cloneElement(e, t)
                    }
                    return l.default.cloneElement(e, {
                        key: r
                    })
                })
            }
            let y = function(e) {
                let {
                    children: t
                } = e, n = (0, l.useContext)(s.AmpStateContext), r = (0, l.useContext)(a.HeadManagerContext);
                return (0, i.jsx)(d.default, {
                    reduceComponentsToState: h,
                    headManager: r,
                    inAmpMode: (0, u.isInAmpMode)(n),
                    children: t
                })
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        5078: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            let r = n(37858),
                o = "undefined" == typeof window,
                i = o ? () => {} : r.useLayoutEffect,
                l = o ? () => {} : r.useEffect;

            function d(e) {
                let {
                    headManager: t,
                    reduceComponentsToState: n
                } = e;

                function d() {
                    if (t && t.mountedInstances) {
                        let o = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(n(o, e))
                    }
                }
                if (o) {
                    var s;
                    null == t || null == (s = t.mountedInstances) || s.add(e.children), d()
                }
                return i(() => {
                    var n;
                    return null == t || null == (n = t.mountedInstances) || n.add(e.children), () => {
                        var n;
                        null == t || null == (n = t.mountedInstances) || n.delete(e.children)
                    }
                }), i(() => (t && (t._pendingUpdate = d), () => {
                    t && (t._pendingUpdate = d)
                })), l(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
                    t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                })), null
            }
        },
        6544: function(e, t, n) {
            e.exports = n(78825)
        }
    },
    function(e) {
        e.O(0, [384, 817, 131, 744], function() {
            return e(e.s = 11829)
        }), _N_E = e.O()
    }
]);