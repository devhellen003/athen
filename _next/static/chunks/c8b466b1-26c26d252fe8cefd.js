! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9483720e-5af0-40e1-a638-245b2fb10116", e._sentryDebugIdIdentifier = "sentry-dbid-9483720e-5af0-40e1-a638-245b2fb10116")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [384], {
        84585: function(e, t, r) {
            let n, i, s, o, a, l;
            r.d(t, {
                G: function() {
                    return rR
                }
            });
            var c, u, d, h, p, f, m, y, g = r(86996),
                _ = r(36964),
                v = r(25447),
                S = r(51092),
                w = r(22470),
                b = r(12920),
                k = r(35515),
                E = r(71653),
                I = r(25840),
                M = r(99917),
                C = r(38917),
                R = r(83020),
                x = r(38121),
                T = r(11990),
                A = r(52735),
                D = r(60711),
                O = r(13666),
                N = r(18541),
                L = r(82025),
                P = r(13846),
                F = r(88454),
                B = r(7169),
                U = r(32158),
                z = r(65256),
                W = r(34584),
                j = r(74635),
                H = r(58943);
            let $ = C.GLOBAL_OBJ,
                q = "sentryReplaySession",
                K = "Unable to send Replay";

            function V(e) {
                let t;
                let r = e[0],
                    n = 1;
                for (; n < e.length;) {
                    let i = e[n],
                        s = e[n + 1];
                    if (n += 2, ("optionalAccess" === i || "optionalCall" === i) && null == r) return;
                    "access" === i || "optionalAccess" === i ? (t = r, r = s(r)) : ("call" === i || "optionalCall" === i) && (r = s((...e) => r.call(t, ...e)), t = void 0)
                }
                return r
            }

            function J(e) {
                let t = V([e, "optionalAccess", e => e.host]);
                return V([t, "optionalAccess", e => e.shadowRoot]) === e
            }

            function G(e) {
                return "[object ShadowRoot]" === Object.prototype.toString.call(e)
            }

            function Y(e) {
                try {
                    var t;
                    let r = e.rules || e.cssRules;
                    return r ? ((t = Array.from(r, X).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")), t) : null
                } catch (e) {
                    return null
                }
            }

            function X(e) {
                let t;
                if ("styleSheet" in e) try {
                    t = Y(e.styleSheet) || function(e) {
                        let {
                            cssText: t
                        } = e;
                        if (t.split('"').length < 3) return t;
                        let r = ["@import", `url(${JSON.stringify(e.href)})`];
                        return "" === e.layerName ? r.push("layer") : e.layerName && r.push(`layer(${e.layerName})`), e.supportsText && r.push(`supports(${e.supportsText})`), e.media.length && r.push(e.media.mediaText), r.join(" ") + ";"
                    }(e)
                } catch (e) {} else if ("selectorText" in e && e.selectorText.includes(":")) return e.cssText.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
                return t || e.cssText
            }(c = m || (m = {}))[c.Document = 0] = "Document", c[c.DocumentType = 1] = "DocumentType", c[c.Element = 2] = "Element", c[c.Text = 3] = "Text", c[c.CDATA = 4] = "CDATA", c[c.Comment = 5] = "Comment";
            class Q {
                constructor() {
                    this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
                }
                getId(e) {
                    var t;
                    return e ? (() => -1, null != (t = V([this, "access", e => e.getMeta, "call", t => t(e), "optionalAccess", e => e.id])) ? t : -1) : -1
                }
                getNode(e) {
                    return this.idNodeMap.get(e) || null
                }
                getIds() {
                    return Array.from(this.idNodeMap.keys())
                }
                getMeta(e) {
                    return this.nodeMetaMap.get(e) || null
                }
                removeNodeFromMap(e) {
                    let t = this.getId(e);
                    this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e))
                }
                has(e) {
                    return this.idNodeMap.has(e)
                }
                hasNode(e) {
                    return this.nodeMetaMap.has(e)
                }
                add(e, t) {
                    let r = t.id;
                    this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, t)
                }
                replace(e, t) {
                    let r = this.getNode(e);
                    if (r) {
                        let e = this.nodeMetaMap.get(r);
                        e && this.nodeMetaMap.set(t, e)
                    }
                    this.idNodeMap.set(e, t)
                }
                reset() {
                    this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
                }
            }

            function Z({
                maskInputOptions: e,
                tagName: t,
                type: r
            }) {
                return "OPTION" === t && (t = "SELECT"), !!(e[t.toLowerCase()] || r && e[r] || "password" === r || "INPUT" === t && !r && e.text)
            }

            function ee({
                isMasked: e,
                element: t,
                value: r,
                maskInputFn: n
            }) {
                let i = r || "";
                return e ? (n && (i = n(i, t)), "*".repeat(i.length)) : i
            }

            function et(e) {
                return e.toLowerCase()
            }

            function er(e) {
                return e.toUpperCase()
            }
            let en = "__rrweb_original__";

            function ei(e) {
                let t = e.type;
                return e.hasAttribute("data-rr-is-password") ? "password" : t ? et(t) : null
            }

            function es(e, t, r) {
                return "INPUT" === t && ("radio" === r || "checkbox" === r) ? e.getAttribute("value") || "" : e.value
            }
            let eo = 1,
                ea = RegExp("[^a-z0-9-_:]");

            function el() {
                return eo++
            }
            let ec = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
                eu = /^(?:[a-z+]+:)?\/\//i,
                ed = /^www\..*/i,
                eh = /^(data:)([^,]*),(.*)/i;

            function ep(e, t) {
                return (e || "").replace(ec, (e, r, n, i, s, o) => {
                    let a = n || s || o,
                        l = r || i || "";
                    if (!a) return e;
                    if (eu.test(a) || ed.test(a) || eh.test(a)) return `url(${l}${a}${l})`;
                    if ("/" === a[0]) return `url(${l}${(t.indexOf("//")>-1?t.split("/").slice(0,3).join("/"):t.split("/")[0]).split("?")[0]+a}${l})`;
                    let c = t.split("/"),
                        u = a.split("/");
                    for (let e of (c.pop(), u)) "." !== e && (".." === e ? c.pop() : c.push(e));
                    return `url(${l}${c.join("/")}${l})`
                })
            }
            let ef = /^[^ \t\n\r\u000c]+/,
                em = /^[, \t\n\r\u000c]+/;

            function ey(e, t) {
                if (!t || "" === t.trim()) return t;
                let r = e.createElement("a");
                return r.href = t, r.href
            }

            function eg() {
                let e = document.createElement("a");
                return e.href = "", e.href
            }

            function e_(e, t, r, n, i, s) {
                return n ? "src" !== r && ("href" !== r || "use" === t && "#" === n[0]) && ("xlink:href" !== r || "#" === n[0]) && ("background" !== r || "table" !== t && "td" !== t && "th" !== t) ? "srcset" === r ? function(e, t) {
                    if ("" === t.trim()) return t;
                    let r = 0;

                    function n(e) {
                        let n;
                        let i = e.exec(t.substring(r));
                        return i ? (n = i[0], r += n.length, n) : ""
                    }
                    let i = [];
                    for (; n(em), !(r >= t.length);) {
                        let s = n(ef);
                        if ("," === s.slice(-1)) s = ey(e, s.substring(0, s.length - 1)), i.push(s);
                        else {
                            let n = "";
                            s = ey(e, s);
                            let o = !1;
                            for (;;) {
                                let e = t.charAt(r);
                                if ("" === e) {
                                    i.push((s + n).trim());
                                    break
                                }
                                if (o) ")" === e && (o = !1);
                                else {
                                    if ("," === e) {
                                        r += 1, i.push((s + n).trim());
                                        break
                                    }
                                    "(" === e && (o = !0)
                                }
                                n += e, r += 1
                            }
                        }
                    }
                    return i.join(", ")
                }(e, n) : "style" === r ? ep(n, eg()) : "object" === t && "data" === r ? ey(e, n) : "function" == typeof s ? s(r, n, i) : n : ey(e, n) : n
            }

            function ev(e, t, r) {
                return ("video" === e || "audio" === e) && "autoplay" === t
            }

            function eS(e, t, r = 1 / 0, n = 0) {
                return !e || e.nodeType !== e.ELEMENT_NODE || n > r ? -1 : t(e) ? n : eS(e.parentNode, t, r, n + 1)
            }

            function ew(e, t) {
                return r => {
                    if (null === r) return !1;
                    try {
                        if (e) {
                            if ("string" == typeof e) {
                                if (r.matches(`.${e}`)) return !0
                            } else if (function(e, t) {
                                    for (let r = e.classList.length; r--;) {
                                        let n = e.classList[r];
                                        if (t.test(n)) return !0
                                    }
                                    return !1
                                }(r, e)) return !0
                        }
                        if (t && r.matches(t)) return !0;
                        return !1
                    } catch (e) {
                        return !1
                    }
                }
            }

            function eb(e, t, r, n, i, s) {
                try {
                    let o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
                    if (null === o) return !1;
                    if ("INPUT" === o.tagName) {
                        let e = o.getAttribute("autocomplete");
                        if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(e)) return !0
                    }
                    let a = -1,
                        l = -1;
                    if (s) {
                        if ((l = eS(o, ew(n, i))) < 0) return !0;
                        a = eS(o, ew(t, r), l >= 0 ? l : 1 / 0)
                    } else {
                        if ((a = eS(o, ew(t, r))) < 0) return !1;
                        l = eS(o, ew(n, i), a >= 0 ? a : 1 / 0)
                    }
                    return a >= 0 ? !(l >= 0) || a <= l : !(l >= 0) && !!s
                } catch (e) {}
                return !!s
            }

            function ek(e) {
                return null == e ? "" : e.toLowerCase()
            }

            function eE(e, t) {
                let r;
                let {
                    doc: s,
                    mirror: o,
                    blockClass: a,
                    blockSelector: l,
                    unblockSelector: c,
                    maskAllText: u,
                    maskTextClass: d,
                    unmaskTextClass: h,
                    maskTextSelector: p,
                    unmaskTextSelector: f,
                    skipChild: y = !1,
                    inlineStylesheet: g = !0,
                    maskInputOptions: _ = {},
                    maskAttributeFn: v,
                    maskTextFn: S,
                    maskInputFn: w,
                    slimDOMOptions: b,
                    dataURLOptions: k = {},
                    inlineImages: E = !1,
                    recordCanvas: I = !1,
                    onSerialize: M,
                    onIframeLoad: C,
                    iframeLoadTimeout: R = 5e3,
                    onStylesheetLoad: x,
                    stylesheetLoadTimeout: T = 5e3,
                    keepIframeSrcFn: A = () => !1,
                    newlyAddedElement: D = !1
                } = t, {
                    preserveWhiteSpace: O = !0
                } = t, N = function(e, t) {
                    let {
                        doc: r,
                        mirror: s,
                        blockClass: o,
                        blockSelector: a,
                        unblockSelector: l,
                        maskAllText: c,
                        maskAttributeFn: u,
                        maskTextClass: d,
                        unmaskTextClass: h,
                        maskTextSelector: p,
                        unmaskTextSelector: f,
                        inlineStylesheet: y,
                        maskInputOptions: g = {},
                        maskTextFn: _,
                        maskInputFn: v,
                        dataURLOptions: S = {},
                        inlineImages: w,
                        recordCanvas: b,
                        keepIframeSrcFn: k,
                        newlyAddedElement: E = !1
                    } = t, I = function(e, t) {
                        if (!t.hasNode(e)) return;
                        let r = t.getId(e);
                        return 1 === r ? void 0 : r
                    }(r, s);
                    switch (e.nodeType) {
                        case e.DOCUMENT_NODE:
                            if ("CSS1Compat" !== e.compatMode) return {
                                type: m.Document,
                                childNodes: [],
                                compatMode: e.compatMode
                            };
                            return {
                                type: m.Document,
                                childNodes: []
                            };
                        case e.DOCUMENT_TYPE_NODE:
                            return {
                                type: m.DocumentType,
                                name: e.name,
                                publicId: e.publicId,
                                systemId: e.systemId,
                                rootId: I
                            };
                        case e.ELEMENT_NODE:
                            return function(e, t) {
                                let r;
                                let {
                                    doc: s,
                                    blockClass: o,
                                    blockSelector: a,
                                    unblockSelector: l,
                                    inlineStylesheet: c,
                                    maskInputOptions: u = {},
                                    maskAttributeFn: d,
                                    maskInputFn: h,
                                    dataURLOptions: p = {},
                                    inlineImages: f,
                                    recordCanvas: y,
                                    keepIframeSrcFn: g,
                                    newlyAddedElement: _ = !1,
                                    rootId: v,
                                    maskAllText: S,
                                    maskTextClass: w,
                                    unmaskTextClass: b,
                                    maskTextSelector: k,
                                    unmaskTextSelector: E
                                } = t, I = function(e, t, r, n) {
                                    try {
                                        if (n && e.matches(n)) return !1;
                                        if ("string" == typeof t) {
                                            if (e.classList.contains(t)) return !0
                                        } else
                                            for (let r = e.classList.length; r--;) {
                                                let n = e.classList[r];
                                                if (t.test(n)) return !0
                                            }
                                        if (r) return e.matches(r)
                                    } catch (e) {}
                                    return !1
                                }(e, o, a, l), M = function(e) {
                                    if (e instanceof HTMLFormElement) return "form";
                                    let t = et(e.tagName);
                                    return ea.test(t) ? "div" : t
                                }(e), C = {}, R = e.attributes.length;
                                for (let t = 0; t < R; t++) {
                                    let r = e.attributes[t];
                                    r.name && !ev(M, r.name, r.value) && (C[r.name] = e_(s, M, et(r.name), r.value, e, d))
                                }
                                if ("link" === M && c) {
                                    let t = Array.from(s.styleSheets).find(t => t.href === e.href),
                                        r = null;
                                    t && (r = Y(t)), r && (delete C.rel, delete C.href, C._cssText = ep(r, t.href))
                                }
                                if ("style" === M && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                                    let t = Y(e.sheet);
                                    t && (C._cssText = ep(t, eg()))
                                }
                                if ("input" === M || "textarea" === M || "select" === M || "option" === M) {
                                    let t = ei(e),
                                        r = es(e, er(M), t),
                                        n = e.checked;
                                    if ("submit" !== t && "button" !== t && r) {
                                        let n = eb(e, w, k, b, E, Z({
                                            type: t,
                                            tagName: er(M),
                                            maskInputOptions: u
                                        }));
                                        C.value = ee({
                                            isMasked: n,
                                            element: e,
                                            value: r,
                                            maskInputFn: h
                                        })
                                    }
                                    n && (C.checked = n)
                                }
                                if ("option" === M && (e.selected && !u.select ? C.selected = !0 : delete C.selected), "canvas" === M && y) {
                                    if ("2d" === e.__context) ! function(e) {
                                        let t = e.getContext("2d");
                                        if (!t) return !0;
                                        for (let r = 0; r < e.width; r += 50)
                                            for (let n = 0; n < e.height; n += 50) {
                                                let i = t.getImageData;
                                                if (new Uint32Array((en in i ? i[en] : i).call(t, r, n, Math.min(50, e.width - r), Math.min(50, e.height - n)).data.buffer).some(e => 0 !== e)) return !1
                                            }
                                        return !0
                                    }(e) && (C.rr_dataURL = e.toDataURL(p.type, p.quality));
                                    else if (!("__context" in e)) {
                                        let t = e.toDataURL(p.type, p.quality),
                                            r = document.createElement("canvas");
                                        r.width = e.width, r.height = e.height, t !== r.toDataURL(p.type, p.quality) && (C.rr_dataURL = t)
                                    }
                                }
                                if ("img" === M && f) {
                                    n || (i = (n = s.createElement("canvas")).getContext("2d"));
                                    let t = e.crossOrigin;
                                    e.crossOrigin = "anonymous";
                                    let r = () => {
                                        e.removeEventListener("load", r);
                                        try {
                                            n.width = e.naturalWidth, n.height = e.naturalHeight, i.drawImage(e, 0, 0), C.rr_dataURL = n.toDataURL(p.type, p.quality)
                                        } catch (t) {
                                            console.warn(`Cannot inline img src=${e.currentSrc}! Error: ${t}`)
                                        }
                                        t ? C.crossOrigin = t : e.removeAttribute("crossorigin")
                                    };
                                    e.complete && 0 !== e.naturalWidth ? r() : e.addEventListener("load", r)
                                }
                                if (("audio" === M || "video" === M) && (C.rr_mediaState = e.paused ? "paused" : "played", C.rr_mediaCurrentTime = e.currentTime), !_ && (e.scrollLeft && (C.rr_scrollLeft = e.scrollLeft), e.scrollTop && (C.rr_scrollTop = e.scrollTop)), I) {
                                    let {
                                        width: t,
                                        height: r
                                    } = e.getBoundingClientRect();
                                    C = {
                                        class: C.class,
                                        rr_width: `${t}px`,
                                        rr_height: `${r}px`
                                    }
                                }
                                "iframe" !== M || g(C.src) || (e.contentDocument || (C.rr_src = C.src), delete C.src);
                                try {
                                    customElements.get(M) && (r = !0)
                                } catch (e) {}
                                return {
                                    type: m.Element,
                                    tagName: M,
                                    attributes: C,
                                    childNodes: [],
                                    isSVG: !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                                    needBlock: I,
                                    rootId: v,
                                    isCustom: r
                                }
                            }(e, {
                                doc: r,
                                blockClass: o,
                                blockSelector: a,
                                unblockSelector: l,
                                inlineStylesheet: y,
                                maskAttributeFn: u,
                                maskInputOptions: g,
                                maskInputFn: v,
                                dataURLOptions: S,
                                inlineImages: w,
                                recordCanvas: b,
                                keepIframeSrcFn: k,
                                newlyAddedElement: E,
                                rootId: I,
                                maskAllText: c,
                                maskTextClass: d,
                                unmaskTextClass: h,
                                maskTextSelector: p,
                                unmaskTextSelector: f
                            });
                        case e.TEXT_NODE:
                            return function(e, t) {
                                let {
                                    maskAllText: r,
                                    maskTextClass: n,
                                    unmaskTextClass: i,
                                    maskTextSelector: s,
                                    unmaskTextSelector: o,
                                    maskTextFn: a,
                                    maskInputOptions: l,
                                    maskInputFn: c,
                                    rootId: u
                                } = t, d = e.parentNode && e.parentNode.tagName, h = e.textContent, p = "STYLE" === d || void 0, f = "SCRIPT" === d || void 0, y = "TEXTAREA" === d || void 0;
                                if (p && h) {
                                    try {
                                        e.nextSibling || e.previousSibling || V([e, "access", e => e.parentNode, "access", e => e.sheet, "optionalAccess", e => e.cssRules]) && (h = Y(e.parentNode.sheet))
                                    } catch (t) {
                                        console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e)
                                    }
                                    h = ep(h, eg())
                                }
                                f && (h = "SCRIPT_PLACEHOLDER");
                                let g = eb(e, n, s, i, o, r);
                                return p || f || y || !h || !g || (h = a ? a(h, e.parentElement) : h.replace(/[\S]/g, "*")), y && h && (l.textarea || g) && (h = c ? c(h, e.parentNode) : h.replace(/[\S]/g, "*")), "OPTION" === d && h && (h = ee({
                                    isMasked: eb(e, n, s, i, o, Z({
                                        type: null,
                                        tagName: d,
                                        maskInputOptions: l
                                    })),
                                    element: e,
                                    value: h,
                                    maskInputFn: c
                                })), {
                                    type: m.Text,
                                    textContent: h || "",
                                    isStyle: p,
                                    rootId: u
                                }
                            }(e, {
                                maskAllText: c,
                                maskTextClass: d,
                                unmaskTextClass: h,
                                maskTextSelector: p,
                                unmaskTextSelector: f,
                                maskTextFn: _,
                                maskInputOptions: g,
                                maskInputFn: v,
                                rootId: I
                            });
                        case e.CDATA_SECTION_NODE:
                            return {
                                type: m.CDATA,
                                textContent: "",
                                rootId: I
                            };
                        case e.COMMENT_NODE:
                            return {
                                type: m.Comment,
                                textContent: e.textContent || "",
                                rootId: I
                            };
                        default:
                            return !1
                    }
                }(e, {
                    doc: s,
                    mirror: o,
                    blockClass: a,
                    blockSelector: l,
                    maskAllText: u,
                    unblockSelector: c,
                    maskTextClass: d,
                    unmaskTextClass: h,
                    maskTextSelector: p,
                    unmaskTextSelector: f,
                    inlineStylesheet: g,
                    maskInputOptions: _,
                    maskAttributeFn: v,
                    maskTextFn: S,
                    maskInputFn: w,
                    dataURLOptions: k,
                    inlineImages: E,
                    recordCanvas: I,
                    keepIframeSrcFn: A,
                    newlyAddedElement: D
                });
                if (!N) return console.warn(e, "not serialized"), null;
                r = o.hasNode(e) ? o.getId(e) : ! function(e, t) {
                    if (t.comment && e.type === m.Comment) return !0;
                    if (e.type === m.Element) {
                        if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) && "script" === e.attributes.as || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && e.attributes.href.endsWith(".js")) || t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (ek(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === ek(e.attributes.name) || "icon" === ek(e.attributes.rel) || "apple-touch-icon" === ek(e.attributes.rel) || "shortcut icon" === ek(e.attributes.rel)))) return !0;
                        if ("meta" === e.tagName) {
                            if (t.headMetaDescKeywords && ek(e.attributes.name).match(/^description|keywords$/) || t.headMetaSocial && (ek(e.attributes.property).match(/^(og|twitter|fb):/) || ek(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === ek(e.attributes.name))) return !0;
                            if (t.headMetaRobots && ("robots" === ek(e.attributes.name) || "googlebot" === ek(e.attributes.name) || "bingbot" === ek(e.attributes.name))) return !0;
                            if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
                            else if (t.headMetaAuthorship && ("author" === ek(e.attributes.name) || "generator" === ek(e.attributes.name) || "framework" === ek(e.attributes.name) || "publisher" === ek(e.attributes.name) || "progid" === ek(e.attributes.name) || ek(e.attributes.property).match(/^article:/) || ek(e.attributes.property).match(/^product:/))) return !0;
                            else if (t.headMetaVerification && ("google-site-verification" === ek(e.attributes.name) || "yandex-verification" === ek(e.attributes.name) || "csrf-token" === ek(e.attributes.name) || "p:domain_verify" === ek(e.attributes.name) || "verify-v1" === ek(e.attributes.name) || "verification" === ek(e.attributes.name) || "shopify-checkout-api-token" === ek(e.attributes.name))) return !0
                        }
                    }
                    return !1
                }(N, b) && (O || N.type !== m.Text || N.isStyle || N.textContent.replace(/^\s+|\s+$/gm, "").length) ? el() : -2;
                let L = Object.assign(N, {
                    id: r
                });
                if (o.add(e, L), -2 === r) return null;
                M && M(e);
                let P = !y;
                if (L.type === m.Element) {
                    P = P && !L.needBlock, delete L.needBlock;
                    let t = e.shadowRoot;
                    t && G(t) && (L.isShadowHost = !0)
                }
                if ((L.type === m.Document || L.type === m.Element) && P) {
                    b.headWhitespace && L.type === m.Element && "head" === L.tagName && (O = !1);
                    let t = {
                        doc: s,
                        mirror: o,
                        blockClass: a,
                        blockSelector: l,
                        maskAllText: u,
                        unblockSelector: c,
                        maskTextClass: d,
                        unmaskTextClass: h,
                        maskTextSelector: p,
                        unmaskTextSelector: f,
                        skipChild: y,
                        inlineStylesheet: g,
                        maskInputOptions: _,
                        maskAttributeFn: v,
                        maskTextFn: S,
                        maskInputFn: w,
                        slimDOMOptions: b,
                        dataURLOptions: k,
                        inlineImages: E,
                        recordCanvas: I,
                        preserveWhiteSpace: O,
                        onSerialize: M,
                        onIframeLoad: C,
                        iframeLoadTimeout: R,
                        onStylesheetLoad: x,
                        stylesheetLoadTimeout: T,
                        keepIframeSrcFn: A
                    };
                    for (let r of Array.from(e.childNodes)) {
                        let e = eE(r, t);
                        e && L.childNodes.push(e)
                    }
                    if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot)
                        for (let r of Array.from(e.shadowRoot.childNodes)) {
                            let n = eE(r, t);
                            n && (G(e.shadowRoot) && (n.isShadow = !0), L.childNodes.push(n))
                        }
                }
                return e.parentNode && J(e.parentNode) && G(e.parentNode) && (L.isShadow = !0), L.type === m.Element && "iframe" === L.tagName && function(e, t, r) {
                    let n;
                    let i = e.contentWindow;
                    if (!i) return;
                    let s = !1;
                    try {
                        n = i.document.readyState
                    } catch (e) {
                        return
                    }
                    if ("complete" !== n) {
                        let n = setTimeout(() => {
                            s || (t(), s = !0)
                        }, r);
                        e.addEventListener("load", () => {
                            clearTimeout(n), s = !0, t()
                        });
                        return
                    }
                    let o = "about:blank";
                    if (i.location.href !== o || e.src === o || "" === e.src) return setTimeout(t, 0), e.addEventListener("load", t);
                    e.addEventListener("load", t)
                }(e, () => {
                    let t = e.contentDocument;
                    if (t && C) {
                        let r = eE(t, {
                            doc: t,
                            mirror: o,
                            blockClass: a,
                            blockSelector: l,
                            unblockSelector: c,
                            maskAllText: u,
                            maskTextClass: d,
                            unmaskTextClass: h,
                            maskTextSelector: p,
                            unmaskTextSelector: f,
                            skipChild: !1,
                            inlineStylesheet: g,
                            maskInputOptions: _,
                            maskAttributeFn: v,
                            maskTextFn: S,
                            maskInputFn: w,
                            slimDOMOptions: b,
                            dataURLOptions: k,
                            inlineImages: E,
                            recordCanvas: I,
                            preserveWhiteSpace: O,
                            onSerialize: M,
                            onIframeLoad: C,
                            iframeLoadTimeout: R,
                            onStylesheetLoad: x,
                            stylesheetLoadTimeout: T,
                            keepIframeSrcFn: A
                        });
                        r && C(e, r)
                    }
                }, R), L.type === m.Element && "link" === L.tagName && "stylesheet" === L.attributes.rel && function(e, t, r) {
                    let n, i = !1;
                    try {
                        n = e.sheet
                    } catch (e) {
                        return
                    }
                    if (n) return;
                    let s = setTimeout(() => {
                        i || (t(), i = !0)
                    }, r);
                    e.addEventListener("load", () => {
                        clearTimeout(s), i = !0, t()
                    })
                }(e, () => {
                    if (x) {
                        let t = eE(e, {
                            doc: s,
                            mirror: o,
                            blockClass: a,
                            blockSelector: l,
                            unblockSelector: c,
                            maskAllText: u,
                            maskTextClass: d,
                            unmaskTextClass: h,
                            maskTextSelector: p,
                            unmaskTextSelector: f,
                            skipChild: !1,
                            inlineStylesheet: g,
                            maskInputOptions: _,
                            maskAttributeFn: v,
                            maskTextFn: S,
                            maskInputFn: w,
                            slimDOMOptions: b,
                            dataURLOptions: k,
                            inlineImages: E,
                            recordCanvas: I,
                            preserveWhiteSpace: O,
                            onSerialize: M,
                            onIframeLoad: C,
                            iframeLoadTimeout: R,
                            onStylesheetLoad: x,
                            stylesheetLoadTimeout: T,
                            keepIframeSrcFn: A
                        });
                        t && x(e, t)
                    }
                }, T), L
            }

            function eI(e) {
                let t;
                let r = e[0],
                    n = 1;
                for (; n < e.length;) {
                    let i = e[n],
                        s = e[n + 1];
                    if (n += 2, ("optionalAccess" === i || "optionalCall" === i) && null == r) return;
                    "access" === i || "optionalAccess" === i ? (t = r, r = s(r)) : ("call" === i || "optionalCall" === i) && (r = s((...e) => r.call(t, ...e)), t = void 0)
                }
                return r
            }

            function eM(e, t, r = document) {
                let n = {
                    capture: !0,
                    passive: !0
                };
                return r.addEventListener(e, t, n), () => r.removeEventListener(e, t, n)
            }
            let eC = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
                eR = {
                    map: {},
                    getId: () => (console.error(eC), -1),
                    getNode: () => (console.error(eC), null),
                    removeNodeFromMap() {
                        console.error(eC)
                    },
                    has: () => (console.error(eC), !1),
                    reset() {
                        console.error(eC)
                    }
                };

            function ex(e, t, r = {}) {
                let n = null,
                    i = 0;
                return function(...s) {
                    let o = Date.now();
                    i || !1 !== r.leading || (i = o);
                    let a = t - (o - i),
                        l = this;
                    a <= 0 || a > t ? (n && (function(...e) {
                        eK("clearTimeout")(...e)
                    }(n), n = null), i = o, e.apply(l, s)) : n || !1 === r.trailing || (n = eV(() => {
                        i = !1 === r.leading ? 0 : Date.now(), n = null, e.apply(l, s)
                    }, a))
                }
            }

            function eT(e, t, r) {
                try {
                    if (!(t in e)) return () => {};
                    let n = e[t],
                        i = r(n);
                    return "function" == typeof i && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
                        __rrweb_original__: {
                            enumerable: !1,
                            value: n
                        }
                    })), e[t] = i, () => {
                        e[t] = n
                    }
                } catch (e) {
                    return () => {}
                }
            }
            "undefined" != typeof window && window.Proxy && window.Reflect && (eR = new Proxy(eR, {
                get: (e, t, r) => ("map" === t && console.error(eC), Reflect.get(e, t, r))
            }));
            let eA = Date.now;

            function eD(e) {
                let t = e.document;
                return {
                    left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : eI([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollLeft]) || eI([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollLeft]) || eI([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollLeft]) || 0,
                    top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : eI([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollTop]) || eI([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollTop]) || eI([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollTop]) || 0
                }
            }

            function eO() {
                return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
            }

            function eN() {
                return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
            }

            function eL(e) {
                return e ? e.nodeType === e.ELEMENT_NODE ? e : e.parentElement : null
            }

            function eP(e, t, r, n, i) {
                if (!e) return !1;
                let s = eL(e);
                if (!s) return !1;
                let o = ew(t, r);
                if (!i) {
                    let e = n && s.matches(n);
                    return o(s) && !e
                }
                let a = eS(s, o),
                    l = -1;
                return !(a < 0) && (n && (l = eS(s, ew(null, n))), a > -1 && l < 0 || a < l)
            }

            function eF(e, t) {
                return -2 === t.getId(e)
            }

            function eB(e) {
                return !!e.changedTouches
            }

            function eU(e, t) {
                return !!("IFRAME" === e.nodeName && t.getMeta(e))
            }

            function ez(e, t) {
                return !!("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
            }

            function eW(e) {
                return !!eI([e, "optionalAccess", e => e.shadowRoot])
            }
            /[1-9][0-9]{12}/.test(Date.now().toString()) || (eA = () => new Date().getTime());
            class ej {
                constructor() {
                    this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map
                }
                getId(e) {
                    return (0, g.h)(this.styleIDMap.get(e), () => -1)
                }
                has(e) {
                    return this.styleIDMap.has(e)
                }
                add(e, t) {
                    let r;
                    return this.has(e) ? this.getId(e) : (r = void 0 === t ? this.id++ : t, this.styleIDMap.set(e, r), this.idStyleMap.set(r, e), r)
                }
                getStyle(e) {
                    return this.idStyleMap.get(e) || null
                }
                reset() {
                    this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
                }
                generateId() {
                    return this.id++
                }
            }

            function eH(e) {
                let t = null;
                return eI([e, "access", e => e.getRootNode, "optionalCall", e => e(), "optionalAccess", e => e.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host), t
            }

            function e$(e) {
                let t = e.ownerDocument;
                return !!t && (t.contains(e) || function(e) {
                    let t = e.ownerDocument;
                    if (!t) return !1;
                    let r = function(e) {
                        let t, r = e;
                        for (; t = eH(r);) r = t;
                        return r
                    }(e);
                    return t.contains(r)
                }(e))
            }
            let eq = {};

            function eK(e) {
                let t = eq[e];
                if (t) return t;
                let r = window.document,
                    n = window[e];
                if (r && "function" == typeof r.createElement) try {
                    let t = r.createElement("iframe");
                    t.hidden = !0, r.head.appendChild(t);
                    let i = t.contentWindow;
                    i && i[e] && (n = i[e]), r.head.removeChild(t)
                } catch (e) {}
                return eq[e] = n.bind(window)
            }

            function eV(...e) {
                return eK("setTimeout")(...e)
            }
            var eJ = ((u = eJ || {})[u.DomContentLoaded = 0] = "DomContentLoaded", u[u.Load = 1] = "Load", u[u.FullSnapshot = 2] = "FullSnapshot", u[u.IncrementalSnapshot = 3] = "IncrementalSnapshot", u[u.Meta = 4] = "Meta", u[u.Custom = 5] = "Custom", u[u.Plugin = 6] = "Plugin", u),
                eG = ((d = eG || {})[d.Mutation = 0] = "Mutation", d[d.MouseMove = 1] = "MouseMove", d[d.MouseInteraction = 2] = "MouseInteraction", d[d.Scroll = 3] = "Scroll", d[d.ViewportResize = 4] = "ViewportResize", d[d.Input = 5] = "Input", d[d.TouchMove = 6] = "TouchMove", d[d.MediaInteraction = 7] = "MediaInteraction", d[d.StyleSheetRule = 8] = "StyleSheetRule", d[d.CanvasMutation = 9] = "CanvasMutation", d[d.Font = 10] = "Font", d[d.Log = 11] = "Log", d[d.Drag = 12] = "Drag", d[d.StyleDeclaration = 13] = "StyleDeclaration", d[d.Selection = 14] = "Selection", d[d.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", d[d.CustomElement = 16] = "CustomElement", d),
                eY = ((h = eY || {})[h.MouseUp = 0] = "MouseUp", h[h.MouseDown = 1] = "MouseDown", h[h.Click = 2] = "Click", h[h.ContextMenu = 3] = "ContextMenu", h[h.DblClick = 4] = "DblClick", h[h.Focus = 5] = "Focus", h[h.Blur = 6] = "Blur", h[h.TouchStart = 7] = "TouchStart", h[h.TouchMove_Departed = 8] = "TouchMove_Departed", h[h.TouchEnd = 9] = "TouchEnd", h[h.TouchCancel = 10] = "TouchCancel", h),
                eX = ((p = eX || {})[p.Mouse = 0] = "Mouse", p[p.Pen = 1] = "Pen", p[p.Touch = 2] = "Touch", p);
            class eQ {
                constructor() {
                    this.length = 0, this.head = null, this.tail = null
                }
                get(e) {
                    if (e >= this.length) throw Error("Position outside of list range");
                    let t = this.head;
                    for (let r = 0; r < e; r++) t = function(e) {
                        let t;
                        let r = e[0],
                            n = 1;
                        for (; n < e.length;) {
                            let i = e[n],
                                s = e[n + 1];
                            if (n += 2, ("optionalAccess" === i || "optionalCall" === i) && null == r) return;
                            "access" === i || "optionalAccess" === i ? (t = r, r = s(r)) : ("call" === i || "optionalCall" === i) && (r = s((...e) => r.call(t, ...e)), t = void 0)
                        }
                        return r
                    }([t, "optionalAccess", e => e.next]) || null;
                    return t
                }
                addNode(e) {
                    let t = {
                        value: e,
                        previous: null,
                        next: null
                    };
                    if (e.__ln = t, e.previousSibling && "__ln" in e.previousSibling) {
                        let r = e.previousSibling.__ln.next;
                        t.next = r, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, r && (r.previous = t)
                    } else if (e.nextSibling && "__ln" in e.nextSibling && e.nextSibling.__ln.previous) {
                        let r = e.nextSibling.__ln.previous;
                        t.previous = r, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, r && (r.next = t)
                    } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
                    null === t.next && (this.tail = t), this.length++
                }
                removeNode(e) {
                    let t = e.__ln;
                    this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--)
                }
            }
            let eZ = (e, t) => `${e}@${t}`;
            class e0 {
                constructor() {
                    this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = e => {
                        e.forEach(this.processMutation), this.emit()
                    }, this.emit = () => {
                        if (this.frozen || this.locked) return;
                        let e = [],
                            t = new Set,
                            r = new eQ,
                            n = e => {
                                let t = e,
                                    r = -2;
                                for (; - 2 === r;) r = (t = t && t.nextSibling) && this.mirror.getId(t);
                                return r
                            },
                            i = i => {
                                if (!i.parentNode || !e$(i)) return;
                                let s = J(i.parentNode) ? this.mirror.getId(eH(i)) : this.mirror.getId(i.parentNode),
                                    o = n(i);
                                if (-1 === s || -1 === o) return r.addNode(i);
                                let a = eE(i, {
                                    doc: this.doc,
                                    mirror: this.mirror,
                                    blockClass: this.blockClass,
                                    blockSelector: this.blockSelector,
                                    maskAllText: this.maskAllText,
                                    unblockSelector: this.unblockSelector,
                                    maskTextClass: this.maskTextClass,
                                    unmaskTextClass: this.unmaskTextClass,
                                    maskTextSelector: this.maskTextSelector,
                                    unmaskTextSelector: this.unmaskTextSelector,
                                    skipChild: !0,
                                    newlyAddedElement: !0,
                                    inlineStylesheet: this.inlineStylesheet,
                                    maskInputOptions: this.maskInputOptions,
                                    maskAttributeFn: this.maskAttributeFn,
                                    maskTextFn: this.maskTextFn,
                                    maskInputFn: this.maskInputFn,
                                    slimDOMOptions: this.slimDOMOptions,
                                    dataURLOptions: this.dataURLOptions,
                                    recordCanvas: this.recordCanvas,
                                    inlineImages: this.inlineImages,
                                    onSerialize: e => {
                                        eU(e, this.mirror) && this.iframeManager.addIframe(e), ez(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), eW(i) && this.shadowDomManager.addShadowRoot(i.shadowRoot, this.doc)
                                    },
                                    onIframeLoad: (e, t) => {
                                        this.iframeManager.attachIframe(e, t), this.shadowDomManager.observeAttachShadow(e)
                                    },
                                    onStylesheetLoad: (e, t) => {
                                        this.stylesheetManager.attachLinkElement(e, t)
                                    }
                                });
                                a && (e.push({
                                    parentId: s,
                                    nextId: o,
                                    node: a
                                }), t.add(a.id))
                            };
                        for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                        for (let e of this.movedSet)(!e2(this.removes, e, this.mirror) || this.movedSet.has(e.parentNode)) && i(e);
                        for (let e of this.addedSet) e3(this.droppedSet, e) || e2(this.removes, e, this.mirror) ? e3(this.movedSet, e) ? i(e) : this.droppedSet.add(e) : i(e);
                        let s = null;
                        for (; r.length;) {
                            let e = null;
                            if (s) {
                                let t = this.mirror.getId(s.value.parentNode),
                                    r = n(s.value); - 1 !== t && -1 !== r && (e = s)
                            }
                            if (!e) {
                                let t = r.tail;
                                for (; t;) {
                                    let r = t;
                                    if (t = t.previous, r) {
                                        let t = this.mirror.getId(r.value.parentNode);
                                        if (-1 === n(r.value)) continue;
                                        if (-1 !== t) {
                                            e = r;
                                            break
                                        } {
                                            let t = r.value;
                                            if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                                let n = t.parentNode.host;
                                                if (-1 !== this.mirror.getId(n)) {
                                                    e = r;
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (!e) {
                                for (; r.head;) r.removeNode(r.head.value);
                                break
                            }
                            s = e.previous, r.removeNode(e.value), i(e.value)
                        }
                        let o = {
                            texts: this.texts.map(e => ({
                                id: this.mirror.getId(e.node),
                                value: e.value
                            })).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                            attributes: this.attributes.map(e => {
                                let {
                                    attributes: t
                                } = e;
                                if ("string" == typeof t.style) {
                                    let r = JSON.stringify(e.styleDiff),
                                        n = JSON.stringify(e._unchangedStyles);
                                    r.length < t.style.length && (r + n).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                                }
                                return {
                                    id: this.mirror.getId(e.node),
                                    attributes: t
                                }
                            }).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                            removes: this.removes,
                            adds: e
                        };
                        (o.texts.length || o.attributes.length || o.removes.length || o.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(o))
                    }, this.processMutation = e => {
                        if (!eF(e.target, this.mirror)) switch (e.type) {
                            case "characterData":
                                {
                                    let t = e.target.textContent;eP(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                                        value: eb(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t, eL(e.target)) : t.replace(/[\S]/g, "*") : t,
                                        node: e.target
                                    });
                                    break
                                }
                            case "attributes":
                                {
                                    let t = e.target,
                                        r = e.attributeName,
                                        n = e.target.getAttribute(r);
                                    if ("value" === r) {
                                        let r = ei(t),
                                            i = t.tagName;
                                        n = es(t, i, r);
                                        let s = Z({
                                            maskInputOptions: this.maskInputOptions,
                                            tagName: i,
                                            type: r
                                        });
                                        n = ee({
                                            isMasked: eb(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, s),
                                            element: t,
                                            value: n,
                                            maskInputFn: this.maskInputFn
                                        })
                                    }
                                    if (eP(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || n === e.oldValue) return;
                                    let i = this.attributeMap.get(e.target);
                                    if ("IFRAME" === t.tagName && "src" === r && !this.keepIframeSrcFn(n)) {
                                        if (t.contentDocument) return;
                                        r = "rr_src"
                                    }
                                    if (i || (i = {
                                            node: e.target,
                                            attributes: {},
                                            styleDiff: {},
                                            _unchangedStyles: {}
                                        }, this.attributes.push(i), this.attributeMap.set(e.target, i)), "type" === r && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"), !ev(t.tagName, r) && (i.attributes[r] = e_(this.doc, et(t.tagName), et(r), n, t, this.maskAttributeFn), "style" === r)) {
                                        if (!this.unattachedDoc) try {
                                            this.unattachedDoc = document.implementation.createHTMLDocument()
                                        } catch (e) {
                                            this.unattachedDoc = this.doc
                                        }
                                        let r = this.unattachedDoc.createElement("span");
                                        for (let n of (e.oldValue && r.setAttribute("style", e.oldValue), Array.from(t.style))) {
                                            let e = t.style.getPropertyValue(n),
                                                s = t.style.getPropertyPriority(n);
                                            e !== r.style.getPropertyValue(n) || s !== r.style.getPropertyPriority(n) ? "" === s ? i.styleDiff[n] = e : i.styleDiff[n] = [e, s] : i._unchangedStyles[n] = [e, s]
                                        }
                                        for (let e of Array.from(r.style)) "" === t.style.getPropertyValue(e) && (i.styleDiff[e] = !1)
                                    }
                                    break
                                }
                            case "childList":
                                if (eP(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                                e.addedNodes.forEach(t => this.genAdds(t, e.target)), e.removedNodes.forEach(t => {
                                    let r = this.mirror.getId(t),
                                        n = J(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                                    eP(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || eF(t, this.mirror) || -1 === this.mirror.getId(t) || (this.addedSet.has(t) ? (e1(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === r || function e(t, r) {
                                        if (J(t)) return !1;
                                        let n = r.getId(t);
                                        return !r.has(n) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || e(t.parentNode, r))
                                    }(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[eZ(r, n)] ? e1(this.movedSet, t) : this.removes.push({
                                        parentId: n,
                                        id: r,
                                        isShadow: !!(J(e.target) && G(e.target)) || void 0
                                    })), this.mapRemoves.push(t))
                                })
                        }
                    }, this.genAdds = (e, t) => {
                        if (!this.processedNodeManager.inOtherBuffer(e, this) && !(this.addedSet.has(e) || this.movedSet.has(e))) {
                            if (this.mirror.hasNode(e)) {
                                if (eF(e, this.mirror)) return;
                                this.movedSet.add(e);
                                let r = null;
                                t && this.mirror.hasNode(t) && (r = this.mirror.getId(t)), r && -1 !== r && (this.movedMap[eZ(this.mirror.getId(e), r)] = !0)
                            } else this.addedSet.add(e), this.droppedSet.delete(e);
                            !eP(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && (e.childNodes.forEach(e => this.genAdds(e)), eW(e) && e.shadowRoot.childNodes.forEach(t => {
                                this.processedNodeManager.add(t, this), this.genAdds(t, e)
                            }))
                        }
                    }
                }
                init(e) {
                    ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(t => {
                        this[t] = e[t]
                    })
                }
                freeze() {
                    this.frozen = !0, this.canvasManager.freeze()
                }
                unfreeze() {
                    this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
                }
                isFrozen() {
                    return this.frozen
                }
                lock() {
                    this.locked = !0, this.canvasManager.lock()
                }
                unlock() {
                    this.locked = !1, this.canvasManager.unlock(), this.emit()
                }
                reset() {
                    this.shadowDomManager.reset(), this.canvasManager.reset()
                }
            }

            function e1(e, t) {
                e.delete(t), t.childNodes.forEach(t => e1(e, t))
            }

            function e2(e, t, r) {
                return 0 !== e.length && function e(t, r, n) {
                    let {
                        parentNode: i
                    } = r;
                    if (!i) return !1;
                    let s = n.getId(i);
                    return !!t.some(e => e.id === s) || e(t, i, n)
                }(e, t, r)
            }

            function e3(e, t) {
                return 0 !== e.size && function e(t, r) {
                    let {
                        parentNode: n
                    } = r;
                    return !!n && (!!t.has(n) || e(t, n))
                }(e, t)
            }
            let e5 = e => s ? (...t) => {
                try {
                    return e(...t)
                } catch (e) {
                    if (s && !0 === s(e)) return () => {};
                    throw e
                }
            } : e;

            function e8(e) {
                let t;
                let r = e[0],
                    n = 1;
                for (; n < e.length;) {
                    let i = e[n],
                        s = e[n + 1];
                    if (n += 2, ("optionalAccess" === i || "optionalCall" === i) && null == r) return;
                    "access" === i || "optionalAccess" === i ? (t = r, r = s(r)) : ("call" === i || "optionalCall" === i) && (r = s((...e) => r.call(t, ...e)), t = void 0)
                }
                return r
            }
            let e6 = [];

            function e4(e) {
                try {
                    if ("composedPath" in e) {
                        let t = e.composedPath();
                        if (t.length) return t[0]
                    } else if ("path" in e && e.path.length) return e.path[0]
                } catch (e) {}
                return e && e.target
            }

            function e7(e, t) {
                let r = new e0;
                e6.push(r), r.init(e);
                let n = window.MutationObserver || window.__rrMutationObserver,
                    i = e8([window, "optionalAccess", e => e.Zone, "optionalAccess", e => e.__symbol__, "optionalCall", e => e("MutationObserver")]);
                i && window[i] && (n = window[i]);
                let s = new n(e5(t => {
                    e.onMutation && !1 === e.onMutation(t) || r.processMutations.bind(r)(t)
                }));
                return s.observe(t, {
                    attributes: !0,
                    attributeOldValue: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), s
            }

            function e9({
                scrollCb: e,
                doc: t,
                mirror: r,
                blockClass: n,
                blockSelector: i,
                unblockSelector: s,
                sampling: o
            }) {
                return eM("scroll", e5(ex(e5(o => {
                    let a = e4(o);
                    if (!a || eP(a, n, i, s, !0)) return;
                    let l = r.getId(a);
                    if (a === t && t.defaultView) {
                        let r = eD(t.defaultView);
                        e({
                            id: l,
                            x: r.left,
                            y: r.top
                        })
                    } else e({
                        id: l,
                        x: a.scrollLeft,
                        y: a.scrollTop
                    })
                }), o.scroll || 100)), t)
            }
            let te = ["INPUT", "TEXTAREA", "SELECT"],
                tt = new WeakMap;

            function tr(e) {
                var t;
                return t = [], to("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || to("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || to("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || to("CSSConditionRule") && e.parentRule instanceof CSSConditionRule ? t.unshift(Array.from(e.parentRule.cssRules).indexOf(e)) : e.parentStyleSheet && t.unshift(Array.from(e.parentStyleSheet.cssRules).indexOf(e)), t
            }

            function tn(e, t, r) {
                let n, i;
                return e ? (e.ownerNode ? n = t.getId(e.ownerNode) : i = r.getId(e), {
                    styleId: i,
                    id: n
                }) : {}
            }

            function ti({
                mirror: e,
                stylesheetManager: t
            }, r) {
                let n = null;
                n = "#document" === r.nodeName ? e.getId(r) : e.getId(r.host);
                let i = "#document" === r.nodeName ? e8([r, "access", e => e.defaultView, "optionalAccess", e => e.Document]) : e8([r, "access", e => e.ownerDocument, "optionalAccess", e => e.defaultView, "optionalAccess", e => e.ShadowRoot]),
                    s = e8([i, "optionalAccess", e => e.prototype]) ? Object.getOwnPropertyDescriptor(e8([i, "optionalAccess", e => e.prototype]), "adoptedStyleSheets") : void 0;
                return null !== n && -1 !== n && i && s ? (Object.defineProperty(r, "adoptedStyleSheets", {
                    configurable: s.configurable,
                    enumerable: s.enumerable,
                    get() {
                        return e8([s, "access", e => e.get, "optionalAccess", e => e.call, "call", e => e(this)])
                    },
                    set(e) {
                        let r = e8([s, "access", e => e.set, "optionalAccess", e => e.call, "call", t => t(this, e)]);
                        if (null !== n && -1 !== n) try {
                            t.adoptStyleSheets(e, n)
                        } catch (e) {}
                        return r
                    }
                }), e5(() => {
                    Object.defineProperty(r, "adoptedStyleSheets", {
                        configurable: s.configurable,
                        enumerable: s.enumerable,
                        get: s.get,
                        set: s.set
                    })
                })) : () => {}
            }

            function ts(e, t = {}) {
                let r = e.doc.defaultView;
                if (!r) return () => {};
                let n = e7(e, e.doc),
                    i = function({
                        mousemoveCb: e,
                        sampling: t,
                        doc: r,
                        mirror: n
                    }) {
                        let i;
                        if (!1 === t.mousemove) return () => {};
                        let s = "number" == typeof t.mousemove ? t.mousemove : 50,
                            o = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500,
                            a = [],
                            l = ex(e5(t => {
                                let r = Date.now() - i;
                                e(a.map(e => (e.timeOffset -= r, e)), t), a = [], i = null
                            }), o),
                            c = e5(ex(e5(e => {
                                let t = e4(e),
                                    {
                                        clientX: r,
                                        clientY: s
                                    } = eB(e) ? e.changedTouches[0] : e;
                                i || (i = eA()), a.push({
                                    x: r,
                                    y: s,
                                    id: n.getId(t),
                                    timeOffset: eA() - i
                                }), l("undefined" != typeof DragEvent && e instanceof DragEvent ? eG.Drag : e instanceof MouseEvent ? eG.MouseMove : eG.TouchMove)
                            }), s, {
                                trailing: !1
                            })),
                            u = [eM("mousemove", c, r), eM("touchmove", c, r), eM("drag", c, r)];
                        return e5(() => {
                            u.forEach(e => e())
                        })
                    }(e),
                    s = function({
                        mouseInteractionCb: e,
                        doc: t,
                        mirror: r,
                        blockClass: n,
                        blockSelector: i,
                        unblockSelector: s,
                        sampling: o
                    }) {
                        if (!1 === o.mouseInteraction) return () => {};
                        let a = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                            l = [],
                            c = null,
                            u = t => o => {
                                let a = e4(o);
                                if (eP(a, n, i, s, !0)) return;
                                let l = null,
                                    u = t;
                                if ("pointerType" in o) {
                                    switch (o.pointerType) {
                                        case "mouse":
                                            l = eX.Mouse;
                                            break;
                                        case "touch":
                                            l = eX.Touch;
                                            break;
                                        case "pen":
                                            l = eX.Pen
                                    }
                                    l === eX.Touch ? eY[t] === eY.MouseDown ? u = "TouchStart" : eY[t] === eY.MouseUp && (u = "TouchEnd") : eX.Pen
                                } else eB(o) && (l = eX.Touch);
                                null !== l ? (c = l, (u.startsWith("Touch") && l === eX.Touch || u.startsWith("Mouse") && l === eX.Mouse) && (l = null)) : eY[t] === eY.Click && (l = c, c = null);
                                let d = eB(o) ? o.changedTouches[0] : o;
                                if (!d) return;
                                let h = r.getId(a),
                                    {
                                        clientX: p,
                                        clientY: f
                                    } = d;
                                e5(e)({
                                    type: eY[u],
                                    id: h,
                                    x: p,
                                    y: f,
                                    ...null !== l && {
                                        pointerType: l
                                    }
                                })
                            };
                        return Object.keys(eY).filter(e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== a[e]).forEach(e => {
                            let r = et(e),
                                n = u(e);
                            if (window.PointerEvent) switch (eY[e]) {
                                case eY.MouseDown:
                                case eY.MouseUp:
                                    r = r.replace("mouse", "pointer");
                                    break;
                                case eY.TouchStart:
                                case eY.TouchEnd:
                                    return
                            }
                            l.push(eM(r, n, t))
                        }), e5(() => {
                            l.forEach(e => e())
                        })
                    }(e),
                    o = e9(e),
                    a = function({
                        viewportResizeCb: e
                    }, {
                        win: t
                    }) {
                        let r = -1,
                            n = -1;
                        return eM("resize", e5(ex(e5(() => {
                            let t = eO(),
                                i = eN();
                            (r !== t || n !== i) && (e({
                                width: Number(i),
                                height: Number(t)
                            }), r = t, n = i)
                        }), 200)), t)
                    }(e, {
                        win: r
                    }),
                    l = function({
                        inputCb: e,
                        doc: t,
                        mirror: r,
                        blockClass: n,
                        blockSelector: i,
                        unblockSelector: s,
                        ignoreClass: o,
                        ignoreSelector: a,
                        maskInputOptions: l,
                        maskInputFn: c,
                        sampling: u,
                        userTriggeredOnInput: d,
                        maskTextClass: h,
                        unmaskTextClass: p,
                        maskTextSelector: f,
                        unmaskTextSelector: m
                    }) {
                        function y(e) {
                            let r = e4(e),
                                u = e.isTrusted,
                                y = r && er(r.tagName);
                            if ("OPTION" === y && (r = r.parentElement), !r || !y || 0 > te.indexOf(y) || eP(r, n, i, s, !0)) return;
                            let _ = r;
                            if (_.classList.contains(o) || a && _.matches(a)) return;
                            let v = ei(r),
                                S = es(_, y, v),
                                w = !1,
                                b = Z({
                                    maskInputOptions: l,
                                    tagName: y,
                                    type: v
                                }),
                                k = eb(r, h, f, p, m, b);
                            ("radio" === v || "checkbox" === v) && (w = r.checked), S = ee({
                                isMasked: k,
                                element: r,
                                value: S,
                                maskInputFn: c
                            }), g(r, d ? {
                                text: S,
                                isChecked: w,
                                userTriggered: u
                            } : {
                                text: S,
                                isChecked: w
                            });
                            let E = r.name;
                            "radio" === v && E && w && t.querySelectorAll(`input[type="radio"][name="${E}"]`).forEach(e => {
                                if (e !== r) {
                                    let t = ee({
                                        isMasked: k,
                                        element: e,
                                        value: es(e, y, v),
                                        maskInputFn: c
                                    });
                                    g(e, d ? {
                                        text: t,
                                        isChecked: !w,
                                        userTriggered: !1
                                    } : {
                                        text: t,
                                        isChecked: !w
                                    })
                                }
                            })
                        }

                        function g(t, n) {
                            let i = tt.get(t);
                            if (!i || i.text !== n.text || i.isChecked !== n.isChecked) {
                                tt.set(t, n);
                                let i = r.getId(t);
                                e5(e)({ ...n,
                                    id: i
                                })
                            }
                        }
                        let _ = ("last" === u.input ? ["change"] : ["input", "change"]).map(e => eM(e, e5(y), t)),
                            v = t.defaultView;
                        if (!v) return () => {
                            _.forEach(e => e())
                        };
                        let S = v.Object.getOwnPropertyDescriptor(v.HTMLInputElement.prototype, "value"),
                            w = [
                                [v.HTMLInputElement.prototype, "value"],
                                [v.HTMLInputElement.prototype, "checked"],
                                [v.HTMLSelectElement.prototype, "value"],
                                [v.HTMLTextAreaElement.prototype, "value"],
                                [v.HTMLSelectElement.prototype, "selectedIndex"],
                                [v.HTMLOptionElement.prototype, "selected"]
                            ];
                        return S && S.set && _.push(...w.map(e => (function e(t, r, n, i, s = window) {
                            let o = s.Object.getOwnPropertyDescriptor(t, r);
                            return s.Object.defineProperty(t, r, i ? n : {
                                set(e) {
                                    eV(() => {
                                        n.set.call(this, e)
                                    }, 0), o && o.set && o.set.call(this, e)
                                }
                            }), () => e(t, r, o || {}, !0)
                        })(e[0], e[1], {
                            set() {
                                e5(y)({
                                    target: this,
                                    isTrusted: !1
                                })
                            }
                        }, !1, v))), e5(() => {
                            _.forEach(e => e())
                        })
                    }(e),
                    c = function({
                        mediaInteractionCb: e,
                        blockClass: t,
                        blockSelector: r,
                        unblockSelector: n,
                        mirror: i,
                        sampling: s,
                        doc: o
                    }) {
                        let a = e5(o => ex(e5(s => {
                                let a = e4(s);
                                if (!a || eP(a, t, r, n, !0)) return;
                                let {
                                    currentTime: l,
                                    volume: c,
                                    muted: u,
                                    playbackRate: d
                                } = a;
                                e({
                                    type: o,
                                    id: i.getId(a),
                                    currentTime: l,
                                    volume: c,
                                    muted: u,
                                    playbackRate: d
                                })
                            }), s.media || 500)),
                            l = [eM("play", a(0), o), eM("pause", a(1), o), eM("seeked", a(2), o), eM("volumechange", a(3), o), eM("ratechange", a(4), o)];
                        return e5(() => {
                            l.forEach(e => e())
                        })
                    }(e),
                    u = function({
                        styleSheetRuleCb: e,
                        mirror: t,
                        stylesheetManager: r
                    }, {
                        win: n
                    }) {
                        let i, s;
                        if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype) return () => {};
                        let o = n.CSSStyleSheet.prototype.insertRule;
                        n.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                            apply: e5((n, i, s) => {
                                let [o, a] = s, {
                                    id: l,
                                    styleId: c
                                } = tn(i, t, r.styleMirror);
                                return (l && -1 !== l || c && -1 !== c) && e({
                                    id: l,
                                    styleId: c,
                                    adds: [{
                                        rule: o,
                                        index: a
                                    }]
                                }), n.apply(i, s)
                            })
                        });
                        let a = n.CSSStyleSheet.prototype.deleteRule;
                        n.CSSStyleSheet.prototype.deleteRule = new Proxy(a, {
                            apply: e5((n, i, s) => {
                                let [o] = s, {
                                    id: a,
                                    styleId: l
                                } = tn(i, t, r.styleMirror);
                                return (a && -1 !== a || l && -1 !== l) && e({
                                    id: a,
                                    styleId: l,
                                    removes: [{
                                        index: o
                                    }]
                                }), n.apply(i, s)
                            })
                        }), n.CSSStyleSheet.prototype.replace && (i = n.CSSStyleSheet.prototype.replace, n.CSSStyleSheet.prototype.replace = new Proxy(i, {
                            apply: e5((n, i, s) => {
                                let [o] = s, {
                                    id: a,
                                    styleId: l
                                } = tn(i, t, r.styleMirror);
                                return (a && -1 !== a || l && -1 !== l) && e({
                                    id: a,
                                    styleId: l,
                                    replace: o
                                }), n.apply(i, s)
                            })
                        })), n.CSSStyleSheet.prototype.replaceSync && (s = n.CSSStyleSheet.prototype.replaceSync, n.CSSStyleSheet.prototype.replaceSync = new Proxy(s, {
                            apply: e5((n, i, s) => {
                                let [o] = s, {
                                    id: a,
                                    styleId: l
                                } = tn(i, t, r.styleMirror);
                                return (a && -1 !== a || l && -1 !== l) && e({
                                    id: a,
                                    styleId: l,
                                    replaceSync: o
                                }), n.apply(i, s)
                            })
                        }));
                        let l = {};
                        ta("CSSGroupingRule") ? l.CSSGroupingRule = n.CSSGroupingRule : (ta("CSSMediaRule") && (l.CSSMediaRule = n.CSSMediaRule), ta("CSSConditionRule") && (l.CSSConditionRule = n.CSSConditionRule), ta("CSSSupportsRule") && (l.CSSSupportsRule = n.CSSSupportsRule));
                        let c = {};
                        return Object.entries(l).forEach(([n, i]) => {
                            c[n] = {
                                insertRule: i.prototype.insertRule,
                                deleteRule: i.prototype.deleteRule
                            }, i.prototype.insertRule = new Proxy(c[n].insertRule, {
                                apply: e5((n, i, s) => {
                                    let [o, a] = s, {
                                        id: l,
                                        styleId: c
                                    } = tn(i.parentStyleSheet, t, r.styleMirror);
                                    return (l && -1 !== l || c && -1 !== c) && e({
                                        id: l,
                                        styleId: c,
                                        adds: [{
                                            rule: o,
                                            index: [...tr(i), a || 0]
                                        }]
                                    }), n.apply(i, s)
                                })
                            }), i.prototype.deleteRule = new Proxy(c[n].deleteRule, {
                                apply: e5((n, i, s) => {
                                    let [o] = s, {
                                        id: a,
                                        styleId: l
                                    } = tn(i.parentStyleSheet, t, r.styleMirror);
                                    return (a && -1 !== a || l && -1 !== l) && e({
                                        id: a,
                                        styleId: l,
                                        removes: [{
                                            index: [...tr(i), o]
                                        }]
                                    }), n.apply(i, s)
                                })
                            })
                        }), e5(() => {
                            n.CSSStyleSheet.prototype.insertRule = o, n.CSSStyleSheet.prototype.deleteRule = a, i && (n.CSSStyleSheet.prototype.replace = i), s && (n.CSSStyleSheet.prototype.replaceSync = s), Object.entries(l).forEach(([e, t]) => {
                                t.prototype.insertRule = c[e].insertRule, t.prototype.deleteRule = c[e].deleteRule
                            })
                        })
                    }(e, {
                        win: r
                    }),
                    d = ti(e, e.doc),
                    h = function({
                        styleDeclarationCb: e,
                        mirror: t,
                        ignoreCSSAttributes: r,
                        stylesheetManager: n
                    }, {
                        win: i
                    }) {
                        let s = i.CSSStyleDeclaration.prototype.setProperty;
                        i.CSSStyleDeclaration.prototype.setProperty = new Proxy(s, {
                            apply: e5((i, o, a) => {
                                let [l, c, u] = a;
                                if (r.has(l)) return s.apply(o, [l, c, u]);
                                let {
                                    id: d,
                                    styleId: h
                                } = tn(e8([o, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), t, n.styleMirror);
                                return (d && -1 !== d || h && -1 !== h) && e({
                                    id: d,
                                    styleId: h,
                                    set: {
                                        property: l,
                                        value: c,
                                        priority: u
                                    },
                                    index: tr(o.parentRule)
                                }), i.apply(o, a)
                            })
                        });
                        let o = i.CSSStyleDeclaration.prototype.removeProperty;
                        return i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
                            apply: e5((i, s, a) => {
                                let [l] = a;
                                if (r.has(l)) return o.apply(s, [l]);
                                let {
                                    id: c,
                                    styleId: u
                                } = tn(e8([s, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), t, n.styleMirror);
                                return (c && -1 !== c || u && -1 !== u) && e({
                                    id: c,
                                    styleId: u,
                                    remove: {
                                        property: l
                                    },
                                    index: tr(s.parentRule)
                                }), i.apply(s, a)
                            })
                        }), e5(() => {
                            i.CSSStyleDeclaration.prototype.setProperty = s, i.CSSStyleDeclaration.prototype.removeProperty = o
                        })
                    }(e, {
                        win: r
                    }),
                    p = e.collectFonts ? function({
                        fontCb: e,
                        doc: t
                    }) {
                        let r = t.defaultView;
                        if (!r) return () => {};
                        let n = [],
                            i = new WeakMap,
                            s = r.FontFace;
                        r.FontFace = function(e, t, r) {
                            let n = new s(e, t, r);
                            return i.set(n, {
                                family: e,
                                buffer: "string" != typeof t,
                                descriptors: r,
                                fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                            }), n
                        };
                        let o = eT(t.fonts, "add", function(t) {
                            return function(r) {
                                return eV(e5(() => {
                                    let t = i.get(r);
                                    t && (e(t), i.delete(r))
                                }), 0), t.apply(this, [r])
                            }
                        });
                        return n.push(() => {
                            r.FontFace = s
                        }), n.push(o), e5(() => {
                            n.forEach(e => e())
                        })
                    }(e) : () => {},
                    f = function(e) {
                        let {
                            doc: t,
                            mirror: r,
                            blockClass: n,
                            blockSelector: i,
                            unblockSelector: s,
                            selectionCb: o
                        } = e, a = !0, l = e5(() => {
                            let e = t.getSelection();
                            if (!e || a && e8([e, "optionalAccess", e => e.isCollapsed])) return;
                            a = e.isCollapsed || !1;
                            let l = [],
                                c = e.rangeCount || 0;
                            for (let t = 0; t < c; t++) {
                                let {
                                    startContainer: o,
                                    startOffset: a,
                                    endContainer: c,
                                    endOffset: u
                                } = e.getRangeAt(t);
                                eP(o, n, i, s, !0) || eP(c, n, i, s, !0) || l.push({
                                    start: r.getId(o),
                                    startOffset: a,
                                    end: r.getId(c),
                                    endOffset: u
                                })
                            }
                            o({
                                ranges: l
                            })
                        });
                        return l(), eM("selectionchange", l)
                    }(e),
                    m = function({
                        doc: e,
                        customElementCb: t
                    }) {
                        let r = e.defaultView;
                        return r && r.customElements ? eT(r.customElements, "define", function(e) {
                            return function(r, n, i) {
                                try {
                                    t({
                                        define: {
                                            name: r
                                        }
                                    })
                                } catch (e) {}
                                return e.apply(this, [r, n, i])
                            }
                        }) : () => {}
                    }(e),
                    y = [];
                for (let t of e.plugins) y.push(t.observer(t.callback, r, t.options));
                return e5(() => {
                    e6.forEach(e => e.reset()), n.disconnect(), i(), s(), o(), a(), l(), c(), u(), d(), h(), p(), f(), m(), y.forEach(e => e())
                })
            }

            function to(e) {
                return void 0 !== window[e]
            }

            function ta(e) {
                return !!(void 0 !== window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype)
            }
            class tl {
                constructor(e) {
                    this.generateIdFn = e, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap
                }
                getId(e, t, r, n) {
                    let i = r || this.getIdToRemoteIdMap(e),
                        s = n || this.getRemoteIdToIdMap(e),
                        o = i.get(t);
                    return o || (o = this.generateIdFn(), i.set(t, o), s.set(o, t)), o
                }
                getIds(e, t) {
                    let r = this.getIdToRemoteIdMap(e),
                        n = this.getRemoteIdToIdMap(e);
                    return t.map(t => this.getId(e, t, r, n))
                }
                getRemoteId(e, t, r) {
                    let n = r || this.getRemoteIdToIdMap(e);
                    return "number" != typeof t ? t : n.get(t) || -1
                }
                getRemoteIds(e, t) {
                    let r = this.getRemoteIdToIdMap(e);
                    return t.map(t => this.getRemoteId(e, t, r))
                }
                reset(e) {
                    if (!e) {
                        this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap;
                        return
                    }
                    this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e)
                }
                getIdToRemoteIdMap(e) {
                    let t = this.iframeIdToRemoteIdMap.get(e);
                    return t || (t = new Map, this.iframeIdToRemoteIdMap.set(e, t)), t
                }
                getRemoteIdToIdMap(e) {
                    let t = this.iframeRemoteIdToIdMap.get(e);
                    return t || (t = new Map, this.iframeRemoteIdToIdMap.set(e, t)), t
                }
            }

            function tc(e) {
                let t;
                let r = e[0],
                    n = 1;
                for (; n < e.length;) {
                    let i = e[n],
                        s = e[n + 1];
                    if (n += 2, ("optionalAccess" === i || "optionalCall" === i) && null == r) return;
                    "access" === i || "optionalAccess" === i ? (t = r, r = s(r)) : ("call" === i || "optionalCall" === i) && (r = s((...e) => r.call(t, ...e)), t = void 0)
                }
                return r
            }
            class tu {
                constructor() {
                    this.crossOriginIframeMirror = new tl(el), this.crossOriginIframeRootIdMap = new WeakMap
                }
                addIframe() {}
                addLoadListener() {}
                attachIframe() {}
            }
            class td {
                constructor(e) {
                    this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new tl(el), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new tl(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
                }
                addIframe(e) {
                    this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
                }
                addLoadListener(e) {
                    this.loadListener = e
                }
                attachIframe(e, t) {
                    this.mutationCb({
                        adds: [{
                            parentId: this.mirror.getId(e),
                            nextId: null,
                            node: t
                        }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0
                    }), tc([this, "access", e => e.loadListener, "optionalCall", t => t(e)]), e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument))
                }
                handleMessage(e) {
                    if ("rrweb" !== e.data.type || e.origin !== e.data.origin || !e.source) return;
                    let t = this.crossOriginIframeMap.get(e.source);
                    if (!t) return;
                    let r = this.transformCrossOriginEvent(t, e.data.event);
                    r && this.wrappedEmit(r, e.data.isCheckout)
                }
                transformCrossOriginEvent(e, t) {
                    switch (t.type) {
                        case eJ.FullSnapshot:
                            {
                                this.crossOriginIframeMirror.reset(e),
                                this.crossOriginIframeStyleMirror.reset(e),
                                this.replaceIdOnNode(t.data.node, e);
                                let r = t.data.node.id;
                                return this.crossOriginIframeRootIdMap.set(e, r),
                                this.patchRootIdOnNode(t.data.node, r),
                                {
                                    timestamp: t.timestamp,
                                    type: eJ.IncrementalSnapshot,
                                    data: {
                                        source: eG.Mutation,
                                        adds: [{
                                            parentId: this.mirror.getId(e),
                                            nextId: null,
                                            node: t.data.node
                                        }],
                                        removes: [],
                                        texts: [],
                                        attributes: [],
                                        isAttachIframe: !0
                                    }
                                }
                            }
                        case eJ.Meta:
                        case eJ.Load:
                        case eJ.DomContentLoaded:
                            break;
                        case eJ.Plugin:
                            return t;
                        case eJ.Custom:
                            return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
                        case eJ.IncrementalSnapshot:
                            switch (t.data.source) {
                                case eG.Mutation:
                                    return t.data.adds.forEach(t => {
                                        this.replaceIds(t, e, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(t.node, e);
                                        let r = this.crossOriginIframeRootIdMap.get(e);
                                        r && this.patchRootIdOnNode(t.node, r)
                                    }), t.data.removes.forEach(t => {
                                        this.replaceIds(t, e, ["parentId", "id"])
                                    }), t.data.attributes.forEach(t => {
                                        this.replaceIds(t, e, ["id"])
                                    }), t.data.texts.forEach(t => {
                                        this.replaceIds(t, e, ["id"])
                                    }), t;
                                case eG.Drag:
                                case eG.TouchMove:
                                case eG.MouseMove:
                                    return t.data.positions.forEach(t => {
                                        this.replaceIds(t, e, ["id"])
                                    }), t;
                                case eG.ViewportResize:
                                    return !1;
                                case eG.MediaInteraction:
                                case eG.MouseInteraction:
                                case eG.Scroll:
                                case eG.CanvasMutation:
                                case eG.Input:
                                    return this.replaceIds(t.data, e, ["id"]), t;
                                case eG.StyleSheetRule:
                                case eG.StyleDeclaration:
                                    return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                                case eG.Font:
                                    return t;
                                case eG.Selection:
                                    return t.data.ranges.forEach(t => {
                                        this.replaceIds(t, e, ["start", "end"])
                                    }), t;
                                case eG.AdoptedStyleSheet:
                                    return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), tc([t, "access", e => e.data, "access", e => e.styles, "optionalAccess", e => e.forEach, "call", t => t(t => {
                                        this.replaceStyleIds(t, e, ["styleId"])
                                    })]), t
                            }
                    }
                    return !1
                }
                replace(e, t, r, n) {
                    for (let i of n)(Array.isArray(t[i]) || "number" == typeof t[i]) && (Array.isArray(t[i]) ? t[i] = e.getIds(r, t[i]) : t[i] = e.getId(r, t[i]));
                    return t
                }
                replaceIds(e, t, r) {
                    return this.replace(this.crossOriginIframeMirror, e, t, r)
                }
                replaceStyleIds(e, t, r) {
                    return this.replace(this.crossOriginIframeStyleMirror, e, t, r)
                }
                replaceIdOnNode(e, t) {
                    this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach(e => {
                        this.replaceIdOnNode(e, t)
                    })
                }
                patchRootIdOnNode(e, t) {
                    e.type === m.Document || e.rootId || (e.rootId = t), "childNodes" in e && e.childNodes.forEach(e => {
                        this.patchRootIdOnNode(e, t)
                    })
                }
            }
            class th {
                init() {}
                addShadowRoot() {}
                observeAttachShadow() {}
                reset() {}
            }
            class tp {
                constructor(e) {
                    this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init()
                }
                init() {
                    this.reset(), this.patchAttachShadow(Element, document)
                }
                addShadowRoot(e, t) {
                    if (!G(e) || this.shadowDoms.has(e)) return;
                    this.shadowDoms.add(e);
                    let r = e7({ ...this.bypassOptions,
                        doc: t,
                        mutationCb: this.mutationCb,
                        mirror: this.mirror,
                        shadowDomManager: this
                    }, e);
                    this.restoreHandlers.push(() => r.disconnect()), this.restoreHandlers.push(e9({ ...this.bypassOptions,
                        scrollCb: this.scrollCb,
                        doc: e,
                        mirror: this.mirror
                    })), eV(() => {
                        e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), this.restoreHandlers.push(ti({
                            mirror: this.mirror,
                            stylesheetManager: this.bypassOptions.stylesheetManager
                        }, e))
                    }, 0)
                }
                observeAttachShadow(e) {
                    e.contentWindow && e.contentDocument && this.patchAttachShadow(e.contentWindow.Element, e.contentDocument)
                }
                patchAttachShadow(e, t) {
                    let r = this;
                    this.restoreHandlers.push(eT(e.prototype, "attachShadow", function(e) {
                        return function(n) {
                            let i = e.call(this, n);
                            return this.shadowRoot && e$(this) && r.addShadowRoot(this.shadowRoot, t), i
                        }
                    }))
                }
                reset() {
                    this.restoreHandlers.forEach(e => {
                        try {
                            e()
                        } catch (e) {}
                    }), this.restoreHandlers = [], this.shadowDoms = new WeakSet
                }
            }
            class tf {
                reset() {}
                freeze() {}
                unfreeze() {}
                lock() {}
                unlock() {}
                snapshot() {}
            }
            class tm {
                constructor(e) {
                    this.trackedLinkElements = new WeakSet, this.styleMirror = new ej, this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
                }
                attachLinkElement(e, t) {
                    "_cssText" in t.attributes && this.mutationCb({
                        adds: [],
                        removes: [],
                        texts: [],
                        attributes: [{
                            id: t.id,
                            attributes: t.attributes
                        }]
                    }), this.trackLinkElement(e)
                }
                trackLinkElement(e) {
                    this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e))
                }
                adoptStyleSheets(e, t) {
                    if (0 === e.length) return;
                    let r = {
                            id: t,
                            styleIds: []
                        },
                        n = [];
                    for (let t of e) {
                        let e;
                        this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t), n.push({
                            styleId: e,
                            rules: Array.from(t.rules || CSSRule, (e, t) => ({
                                rule: X(e),
                                index: t
                            }))
                        })), r.styleIds.push(e)
                    }
                    n.length > 0 && (r.styles = n), this.adoptedStyleSheetCb(r)
                }
                reset() {
                    this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
                }
                trackStylesheetInLinkElement(e) {}
            }
            class ty {
                constructor() {
                    this.nodeMap = new WeakMap, this.loop = !0, this.periodicallyClear()
                }
                periodicallyClear() {
                    ! function(...e) {
                        eK("requestAnimationFrame")(...e)
                    }(() => {
                        this.clear(), this.loop && this.periodicallyClear()
                    })
                }
                inOtherBuffer(e, t) {
                    let r = this.nodeMap.get(e);
                    return r && Array.from(r).some(e => e !== t)
                }
                add(e, t) {
                    this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
                }
                clear() {
                    this.nodeMap = new WeakMap
                }
                destroy() {
                    this.loop = !1
                }
            }
            let tg = new Q;

            function t_(e = {}) {
                let t;
                let {
                    emit: r,
                    checkoutEveryNms: n,
                    checkoutEveryNth: i,
                    blockClass: l = "rr-block",
                    blockSelector: c = null,
                    unblockSelector: u = null,
                    ignoreClass: d = "rr-ignore",
                    ignoreSelector: h = null,
                    maskAllText: p = !1,
                    maskTextClass: f = "rr-mask",
                    unmaskTextClass: m = null,
                    maskTextSelector: y = null,
                    unmaskTextSelector: g = null,
                    inlineStylesheet: v = !0,
                    maskAllInputs: S,
                    maskInputOptions: w,
                    slimDOMOptions: b,
                    maskAttributeFn: k,
                    maskInputFn: E,
                    maskTextFn: I,
                    maxCanvasSize: M = null,
                    packFn: C,
                    sampling: R = {},
                    dataURLOptions: x = {},
                    mousemoveWait: T,
                    recordCanvas: A = !1,
                    recordCrossOriginIframes: D = !1,
                    recordAfter: O = "DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load",
                    userTriggeredOnInput: N = !1,
                    collectFonts: L = !1,
                    inlineImages: P = !1,
                    plugins: F,
                    keepIframeSrcFn: B = () => !1,
                    ignoreCSSAttributes: U = new Set([]),
                    errorHandler: z,
                    onMutation: W,
                    getCanvasManager: j
                } = e;
                s = z;
                let H = !D || window.parent === window,
                    $ = !1;
                if (!H) try {
                    window.parent.document && ($ = !1)
                } catch (e) {
                    $ = !0
                }
                if (H && !r) throw Error("emit function is required");
                void 0 !== T && void 0 === R.mousemove && (R.mousemove = T), tg.reset();
                let q = !0 === S ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0,
                        radio: !0,
                        checkbox: !0
                    } : void 0 !== w ? w : {},
                    K = !0 === b || "all" === b ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaVerification: !0,
                        headMetaAuthorship: "all" === b,
                        headMetaDescKeywords: "all" === b
                    } : b || {};
                ! function(e = window) {
                    "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...e) => {
                        let t = e[0];
                        if (!(0 in e)) throw TypeError("1 argument is required");
                        do
                            if (this === t) return !0; while (t = t && t.parentNode);
                        return !1
                    })
                }();
                let V = 0,
                    J = e => {
                        for (let t of F || []) t.eventProcessor && (e = t.eventProcessor(e));
                        return C && !$ && (e = C(e)), e
                    };
                o = (e, s) => {
                    if (e.timestamp = eA(), (0, _.x)([e6, "access", e => e[0], "optionalAccess", e => e.isFrozen, "call", e => e()]) && e.type !== eJ.FullSnapshot && !(e.type === eJ.IncrementalSnapshot && e.data.source === eG.Mutation) && e6.forEach(e => e.unfreeze()), H)(0, _.x)([r, "optionalCall", t => t(J(e), s)]);
                    else if ($) {
                        let t = {
                            type: "rrweb",
                            event: J(e),
                            origin: window.location.origin,
                            isCheckout: s
                        };
                        window.parent.postMessage(t, "*")
                    }
                    if (e.type === eJ.FullSnapshot) t = e, V = 0;
                    else if (e.type === eJ.IncrementalSnapshot) {
                        if (e.data.source === eG.Mutation && e.data.isAttachIframe) return;
                        V++;
                        let r = i && V >= i,
                            s = n && t && e.timestamp - t.timestamp > n;
                        (r || s) && ei(!0)
                    }
                };
                let G = e => {
                        o({
                            type: eJ.IncrementalSnapshot,
                            data: {
                                source: eG.Mutation,
                                ...e
                            }
                        })
                    },
                    Y = e => o({
                        type: eJ.IncrementalSnapshot,
                        data: {
                            source: eG.Scroll,
                            ...e
                        }
                    }),
                    X = e => o({
                        type: eJ.IncrementalSnapshot,
                        data: {
                            source: eG.CanvasMutation,
                            ...e
                        }
                    }),
                    Z = new tm({
                        mutationCb: G,
                        adoptedStyleSheetCb: e => o({
                            type: eJ.IncrementalSnapshot,
                            data: {
                                source: eG.AdoptedStyleSheet,
                                ...e
                            }
                        })
                    }),
                    ee = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new tu : new td({
                        mirror: tg,
                        mutationCb: G,
                        stylesheetManager: Z,
                        recordCrossOriginIframes: D,
                        wrappedEmit: o
                    });
                for (let e of F || []) e.getMirror && e.getMirror({
                    nodeMirror: tg,
                    crossOriginIframeMirror: ee.crossOriginIframeMirror,
                    crossOriginIframeStyleMirror: ee.crossOriginIframeStyleMirror
                });
                let et = new ty,
                    er = function(e, t) {
                        try {
                            return e ? e(t) : new tf
                        } catch (e) {
                            return console.warn("Unable to initialize CanvasManager"), new tf
                        }
                    }(j, {
                        mirror: tg,
                        win: window,
                        mutationCb: e => o({
                            type: eJ.IncrementalSnapshot,
                            data: {
                                source: eG.CanvasMutation,
                                ...e
                            }
                        }),
                        recordCanvas: A,
                        blockClass: l,
                        blockSelector: c,
                        unblockSelector: u,
                        maxCanvasSize: M,
                        sampling: R.canvas,
                        dataURLOptions: x,
                        errorHandler: z
                    }),
                    en = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new th : new tp({
                        mutationCb: G,
                        scrollCb: Y,
                        bypassOptions: {
                            onMutation: W,
                            blockClass: l,
                            blockSelector: c,
                            unblockSelector: u,
                            maskAllText: p,
                            maskTextClass: f,
                            unmaskTextClass: m,
                            maskTextSelector: y,
                            unmaskTextSelector: g,
                            inlineStylesheet: v,
                            maskInputOptions: q,
                            dataURLOptions: x,
                            maskAttributeFn: k,
                            maskTextFn: I,
                            maskInputFn: E,
                            recordCanvas: A,
                            inlineImages: P,
                            sampling: R,
                            slimDOMOptions: K,
                            iframeManager: ee,
                            stylesheetManager: Z,
                            canvasManager: er,
                            keepIframeSrcFn: B,
                            processedNodeManager: et
                        },
                        mirror: tg
                    }),
                    ei = (e = !1) => {
                        o({
                            type: eJ.Meta,
                            data: {
                                href: window.location.href,
                                width: eN(),
                                height: eO()
                            }
                        }, e), Z.reset(), en.init(), e6.forEach(e => e.lock());
                        let t = function(e, t) {
                            let {
                                mirror: r = new Q,
                                blockClass: n = "rr-block",
                                blockSelector: i = null,
                                unblockSelector: s = null,
                                maskAllText: o = !1,
                                maskTextClass: a = "rr-mask",
                                unmaskTextClass: l = null,
                                maskTextSelector: c = null,
                                unmaskTextSelector: u = null,
                                inlineStylesheet: d = !0,
                                inlineImages: h = !1,
                                recordCanvas: p = !1,
                                maskAllInputs: f = !1,
                                maskAttributeFn: m,
                                maskTextFn: y,
                                maskInputFn: g,
                                slimDOM: _ = !1,
                                dataURLOptions: v,
                                preserveWhiteSpace: S,
                                onSerialize: w,
                                onIframeLoad: b,
                                iframeLoadTimeout: k,
                                onStylesheetLoad: E,
                                stylesheetLoadTimeout: I,
                                keepIframeSrcFn: M = () => !1
                            } = t || {};
                            return eE(e, {
                                doc: e,
                                mirror: r,
                                blockClass: n,
                                blockSelector: i,
                                unblockSelector: s,
                                maskAllText: o,
                                maskTextClass: a,
                                unmaskTextClass: l,
                                maskTextSelector: c,
                                unmaskTextSelector: u,
                                skipChild: !1,
                                inlineStylesheet: d,
                                maskInputOptions: !0 === f ? {
                                    color: !0,
                                    date: !0,
                                    "datetime-local": !0,
                                    email: !0,
                                    month: !0,
                                    number: !0,
                                    range: !0,
                                    search: !0,
                                    tel: !0,
                                    text: !0,
                                    time: !0,
                                    url: !0,
                                    week: !0,
                                    textarea: !0,
                                    select: !0
                                } : !1 === f ? {} : f,
                                maskAttributeFn: m,
                                maskTextFn: y,
                                maskInputFn: g,
                                slimDOMOptions: !0 === _ || "all" === _ ? {
                                    script: !0,
                                    comment: !0,
                                    headFavicon: !0,
                                    headWhitespace: !0,
                                    headMetaDescKeywords: "all" === _,
                                    headMetaSocial: !0,
                                    headMetaRobots: !0,
                                    headMetaHttpEquiv: !0,
                                    headMetaAuthorship: !0,
                                    headMetaVerification: !0
                                } : !1 === _ ? {} : _,
                                dataURLOptions: v,
                                inlineImages: h,
                                recordCanvas: p,
                                preserveWhiteSpace: S,
                                onSerialize: w,
                                onIframeLoad: b,
                                iframeLoadTimeout: k,
                                onStylesheetLoad: E,
                                stylesheetLoadTimeout: I,
                                keepIframeSrcFn: M,
                                newlyAddedElement: !1
                            })
                        }(document, {
                            mirror: tg,
                            blockClass: l,
                            blockSelector: c,
                            unblockSelector: u,
                            maskAllText: p,
                            maskTextClass: f,
                            unmaskTextClass: m,
                            maskTextSelector: y,
                            unmaskTextSelector: g,
                            inlineStylesheet: v,
                            maskAllInputs: q,
                            maskAttributeFn: k,
                            maskInputFn: E,
                            maskTextFn: I,
                            slimDOM: K,
                            dataURLOptions: x,
                            recordCanvas: A,
                            inlineImages: P,
                            onSerialize: e => {
                                eU(e, tg) && ee.addIframe(e), ez(e, tg) && Z.trackLinkElement(e), eW(e) && en.addShadowRoot(e.shadowRoot, document)
                            },
                            onIframeLoad: (e, t) => {
                                ee.attachIframe(e, t), en.observeAttachShadow(e)
                            },
                            onStylesheetLoad: (e, t) => {
                                Z.attachLinkElement(e, t)
                            },
                            keepIframeSrcFn: B
                        });
                        if (!t) return console.warn("Failed to snapshot the document");
                        o({
                            type: eJ.FullSnapshot,
                            data: {
                                node: t,
                                initialOffset: eD(window)
                            }
                        }), e6.forEach(e => e.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && Z.adoptStyleSheets(document.adoptedStyleSheets, tg.getId(document))
                    };
                a = ei;
                try {
                    let e = [],
                        t = e => e5(ts)({
                            onMutation: W,
                            mutationCb: G,
                            mousemoveCb: (e, t) => o({
                                type: eJ.IncrementalSnapshot,
                                data: {
                                    source: t,
                                    positions: e
                                }
                            }),
                            mouseInteractionCb: e => o({
                                type: eJ.IncrementalSnapshot,
                                data: {
                                    source: eG.MouseInteraction,
                                    ...e
                                }
                            }),
                            scrollCb: Y,
                            viewportResizeCb: e => o({
                                type: eJ.IncrementalSnapshot,
                                data: {
                                    source: eG.ViewportResize,
                                    ...e
                                }
                            }),
                            inputCb: e => o({
                                type: eJ.IncrementalSnapshot,
                                data: {
                                    source: eG.Input,
                                    ...e
                                }
                            }),
                            mediaInteractionCb: e => o({
                                type: eJ.IncrementalSnapshot,
                                data: {
                                    source: eG.MediaInteraction,
                                    ...e
                                }
                            }),
                            styleSheetRuleCb: e => o({
                                type: eJ.IncrementalSnapshot,
                                data: {
                                    source: eG.StyleSheetRule,
                                    ...e
                                }
                            }),
                            styleDeclarationCb: e => o({
                                type: eJ.IncrementalSnapshot,
                                data: {
                                    source: eG.StyleDeclaration,
                                    ...e
                                }
                            }),
                            canvasMutationCb: X,
                            fontCb: e => o({
                                type: eJ.IncrementalSnapshot,
                                data: {
                                    source: eG.Font,
                                    ...e
                                }
                            }),
                            selectionCb: e => {
                                o({
                                    type: eJ.IncrementalSnapshot,
                                    data: {
                                        source: eG.Selection,
                                        ...e
                                    }
                                })
                            },
                            customElementCb: e => {
                                o({
                                    type: eJ.IncrementalSnapshot,
                                    data: {
                                        source: eG.CustomElement,
                                        ...e
                                    }
                                })
                            },
                            blockClass: l,
                            ignoreClass: d,
                            ignoreSelector: h,
                            maskAllText: p,
                            maskTextClass: f,
                            unmaskTextClass: m,
                            maskTextSelector: y,
                            unmaskTextSelector: g,
                            maskInputOptions: q,
                            inlineStylesheet: v,
                            sampling: R,
                            recordCanvas: A,
                            inlineImages: P,
                            userTriggeredOnInput: N,
                            collectFonts: L,
                            doc: e,
                            maskAttributeFn: k,
                            maskInputFn: E,
                            maskTextFn: I,
                            keepIframeSrcFn: B,
                            blockSelector: c,
                            unblockSelector: u,
                            slimDOMOptions: K,
                            dataURLOptions: x,
                            mirror: tg,
                            iframeManager: ee,
                            stylesheetManager: Z,
                            shadowDomManager: en,
                            processedNodeManager: et,
                            canvasManager: er,
                            ignoreCSSAttributes: U,
                            plugins: (0, _.x)([F, "optionalAccess", e => e.filter, "call", e => e(e => e.observer), "optionalAccess", e => e.map, "call", e => e(e => ({
                                observer: e.observer,
                                options: e.options,
                                callback: t => o({
                                    type: eJ.Plugin,
                                    data: {
                                        plugin: e.name,
                                        payload: t
                                    }
                                })
                            }))]) || []
                        }, {});
                    ee.addLoadListener(r => {
                        try {
                            e.push(t(r.contentDocument))
                        } catch (e) {
                            console.warn(e)
                        }
                    });
                    let r = () => {
                        ei(), e.push(t(document))
                    };
                    return "interactive" === document.readyState || "complete" === document.readyState ? r() : (e.push(eM("DOMContentLoaded", () => {
                        o({
                            type: eJ.DomContentLoaded,
                            data: {}
                        }), "DOMContentLoaded" === O && r()
                    })), e.push(eM("load", () => {
                        o({
                            type: eJ.Load,
                            data: {}
                        }), "load" === O && r()
                    }, window))), () => {
                        e.forEach(e => e()), et.destroy(), a = void 0, s = void 0
                    }
                } catch (e) {
                    console.warn(e)
                }
            }

            function tv(e) {
                return e > 9999999999 ? e : 1e3 * e
            }

            function tS(e) {
                return e > 9999999999 ? e / 1e3 : e
            }

            function tw(e, t) {
                "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(), e.addUpdate(() => (e.throttledAddEvent({
                    type: eJ.Custom,
                    timestamp: 1e3 * (t.timestamp || 0),
                    data: {
                        tag: "breadcrumb",
                        payload: (0, R.Fv)(t, 10, 1e3)
                    }
                }), "console" === t.category)))
            }

            function tb(e) {
                return e.closest("button,a") || e
            }

            function tk(e) {
                let t = tE(e);
                return t && t instanceof Element ? tb(t) : t
            }

            function tE(e) {
                return "object" == typeof e && e && "target" in e ? e.target : e
            }
            t_.mirror = tg, t_.takeFullSnapshot = function(e) {
                if (!a) throw Error("please take full snapshot after start recording");
                a(e)
            };
            class tI {
                constructor(e, t, r = tw) {
                    this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = t.timeout / 1e3, this._threshold = t.threshold / 1e3, this._scollTimeout = t.scrollTimeout / 1e3, this._replay = e, this._ignoreSelector = t.ignoreSelector, this._addBreadcrumbEvent = r
                }
                addListeners() {
                    var e;
                    let t = (e = () => {
                        this._lastMutation = tC()
                    }, l || (l = [], (0, x.hl)($, "open", function(e) {
                        return function(...t) {
                            if (l) try {
                                l.forEach(e => e())
                            } catch (e) {}
                            return e.apply($, t)
                        }
                    })), l.push(e), () => {
                        let t = l ? l.indexOf(e) : -1;
                        t > -1 && l.splice(t, 1)
                    });
                    this._teardown = () => {
                        t(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
                    }
                }
                removeListeners() {
                    this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
                }
                handleClick(e, t) {
                    var r;
                    if (r = this._ignoreSelector, !tM.includes(t.tagName) || "INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "") || "A" === t.tagName && (t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target")) || r && t.matches(r) || !(e.data && "number" == typeof e.data.nodeId && e.timestamp)) return;
                    let n = {
                        timestamp: tS(e.timestamp),
                        clickBreadcrumb: e,
                        clickCount: 0,
                        node: t
                    };
                    this._clicks.some(e => e.node === n.node && 1 > Math.abs(e.timestamp - n.timestamp)) || (this._clicks.push(n), 1 === this._clicks.length && this._scheduleCheckClicks())
                }
                registerMutation(e = Date.now()) {
                    this._lastMutation = tS(e)
                }
                registerScroll(e = Date.now()) {
                    this._lastScroll = tS(e)
                }
                registerClick(e) {
                    let t = tb(e);
                    this._handleMultiClick(t)
                }
                _handleMultiClick(e) {
                    this._getClicks(e).forEach(e => {
                        e.clickCount++
                    })
                }
                _getClicks(e) {
                    return this._clicks.filter(t => t.node === e)
                }
                _checkClicks() {
                    let e = [],
                        t = tC();
                    for (let r of (this._clicks.forEach(r => {
                            !r.mutationAfter && this._lastMutation && (r.mutationAfter = r.timestamp <= this._lastMutation ? this._lastMutation - r.timestamp : void 0), !r.scrollAfter && this._lastScroll && (r.scrollAfter = r.timestamp <= this._lastScroll ? this._lastScroll - r.timestamp : void 0), r.timestamp + this._timeout <= t && e.push(r)
                        }), e)) {
                        let e = this._clicks.indexOf(r);
                        e > -1 && (this._generateBreadcrumbs(r), this._clicks.splice(e, 1))
                    }
                    this._clicks.length && this._scheduleCheckClicks()
                }
                _generateBreadcrumbs(e) {
                    let t = this._replay,
                        r = e.scrollAfter && e.scrollAfter <= this._scollTimeout,
                        n = e.mutationAfter && e.mutationAfter <= this._threshold,
                        {
                            clickCount: i,
                            clickBreadcrumb: s
                        } = e;
                    if (!r && !n) {
                        let r = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout),
                            n = r < 1e3 * this._timeout ? "mutation" : "timeout",
                            o = {
                                type: "default",
                                message: s.message,
                                timestamp: s.timestamp,
                                category: "ui.slowClickDetected",
                                data: { ...s.data,
                                    url: $.location.href,
                                    route: t.getCurrentRoute(),
                                    timeAfterClickMs: r,
                                    endReason: n,
                                    clickCount: i || 1
                                }
                            };
                        this._addBreadcrumbEvent(t, o);
                        return
                    }
                    if (i > 1) {
                        let e = {
                            type: "default",
                            message: s.message,
                            timestamp: s.timestamp,
                            category: "ui.multiClick",
                            data: { ...s.data,
                                url: $.location.href,
                                route: t.getCurrentRoute(),
                                clickCount: i,
                                metric: !0
                            }
                        };
                        this._addBreadcrumbEvent(t, e)
                    }
                }
                _scheduleCheckClicks() {
                    this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = (0, U.iK)(() => this._checkClicks(), 1e3)
                }
            }
            let tM = ["A", "BUTTON", "INPUT"];

            function tC() {
                return Date.now() / 1e3
            }

            function tR(e) {
                return {
                    timestamp: Date.now() / 1e3,
                    type: "default",
                    ...e
                }
            }(f = y || (y = {}))[f.Document = 0] = "Document", f[f.DocumentType = 1] = "DocumentType", f[f.Element = 2] = "Element", f[f.Text = 3] = "Text", f[f.CDATA = 4] = "CDATA", f[f.Comment = 5] = "Comment";
            let tx = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]),
                tT = e => t => {
                    if (!e.isEnabled()) return;
                    let r = function(e) {
                        let {
                            target: t,
                            message: r
                        } = function(e) {
                            let t;
                            let r = "click" === e.name,
                                n = null;
                            try {
                                n = r ? tk(e.event) : tE(e.event), t = (0, T.Rt)(n, {
                                    maxStringLength: 200
                                }) || "<unknown>"
                            } catch (e) {
                                t = "<unknown>"
                            }
                            return {
                                target: n,
                                message: t
                            }
                        }(e);
                        return tR({
                            category: `ui.${e.name}`,
                            ...tA(t, r)
                        })
                    }(t);
                    if (!r) return;
                    let n = "click" === t.name,
                        i = n ? t.event : void 0;
                    n && e.clickDetector && i && i.target && !i.altKey && !i.metaKey && !i.ctrlKey && !i.shiftKey && function(e, t, r) {
                        e.handleClick(t, r)
                    }(e.clickDetector, r, tk(t.event)), tw(e, r)
                };

            function tA(e, t) {
                let r = t_.mirror.getId(e),
                    n = r && t_.mirror.getNode(r),
                    i = n && t_.mirror.getMeta(n),
                    s = i && i.type === y.Element ? i : null;
                return {
                    message: t,
                    data: s ? {
                        nodeId: r,
                        node: {
                            id: r,
                            tagName: s.tagName,
                            textContent: Array.from(s.childNodes).map(e => e.type === y.Text && e.textContent).filter(Boolean).map(e => e.trim()).join(""),
                            attributes: function(e) {
                                let t = {};
                                for (let r in !e["data-sentry-component"] && e["data-sentry-element"] && (e["data-sentry-component"] = e["data-sentry-element"]), e)
                                    if (tx.has(r)) {
                                        let n = r;
                                        ("data-testid" === r || "data-test-id" === r) && (n = "testId"), t[n] = e[r]
                                    }
                                return t
                            }(s.attributes)
                        }
                    } : {}
                }
            }
            let tD = {
                resource: function(e) {
                    let {
                        entryType: t,
                        initiatorType: r,
                        name: n,
                        responseEnd: i,
                        startTime: s,
                        decodedBodySize: o,
                        encodedBodySize: a,
                        responseStatus: l,
                        transferSize: c
                    } = e;
                    return ["fetch", "xmlhttprequest"].includes(r) ? null : {
                        type: `${t}.${r}`,
                        start: tN(s),
                        end: tN(i),
                        name: n,
                        data: {
                            size: c,
                            statusCode: l,
                            decodedBodySize: o,
                            encodedBodySize: a
                        }
                    }
                },
                paint: function(e) {
                    let {
                        duration: t,
                        entryType: r,
                        name: n,
                        startTime: i
                    } = e, s = tN(i);
                    return {
                        type: r,
                        name: n,
                        start: s,
                        end: s + t,
                        data: void 0
                    }
                },
                navigation: function(e) {
                    let {
                        entryType: t,
                        name: r,
                        decodedBodySize: n,
                        duration: i,
                        domComplete: s,
                        encodedBodySize: o,
                        domContentLoadedEventStart: a,
                        domContentLoadedEventEnd: l,
                        domInteractive: c,
                        loadEventStart: u,
                        loadEventEnd: d,
                        redirectCount: h,
                        startTime: p,
                        transferSize: f,
                        type: m
                    } = e;
                    return 0 === i ? null : {
                        type: `${t}.${m}`,
                        start: tN(p),
                        end: tN(s),
                        name: r,
                        data: {
                            size: f,
                            decodedBodySize: n,
                            encodedBodySize: o,
                            duration: i,
                            domInteractive: c,
                            domContentLoadedEventStart: a,
                            domContentLoadedEventEnd: l,
                            loadEventStart: u,
                            loadEventEnd: d,
                            domComplete: s,
                            redirectCount: h
                        }
                    }
                }
            };

            function tO(e) {
                return tD[e.entryType] ? tD[e.entryType](e) : null
            }

            function tN(e) {
                return ((A.Z1 || $.performance.timeOrigin) + e) / 1e3
            }
            let tL = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

            function tP(e, t) {
                tL && (D.kg.info(e), t && tB(e))
            }

            function tF(e, t) {
                tL && (D.kg.info(e), t && (0, U.iK)(() => {
                    tB(e)
                }, 0))
            }

            function tB(e) {
                (0, v.n)({
                    category: "console",
                    data: {
                        logger: "replay"
                    },
                    level: "info",
                    message: e
                }, {
                    level: "info"
                })
            }
            class tU extends Error {
                constructor() {
                    super("Event buffer exceeded maximum size of 20000000.")
                }
            }
            class tz {
                constructor() {
                    this.events = [], this._totalSize = 0, this.hasCheckout = !1
                }
                get hasEvents() {
                    return this.events.length > 0
                }
                get type() {
                    return "sync"
                }
                destroy() {
                    this.events = []
                }
                async addEvent(e) {
                    let t = JSON.stringify(e).length;
                    if (this._totalSize += t, this._totalSize > 2e7) throw new tU;
                    this.events.push(e)
                }
                finish() {
                    return new Promise(e => {
                        let t = this.events;
                        this.clear(), e(JSON.stringify(t))
                    })
                }
                clear() {
                    this.events = [], this._totalSize = 0, this.hasCheckout = !1
                }
                getEarliestTimestamp() {
                    let e = this.events.map(e => e.timestamp).sort()[0];
                    return e ? tv(e) : null
                }
            }
            class tW {
                constructor(e) {
                    this._worker = e, this._id = 0
                }
                ensureReady() {
                    return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise((e, t) => {
                        this._worker.addEventListener("message", ({
                            data: r
                        }) => {
                            r.success ? e() : t()
                        }, {
                            once: !0
                        }), this._worker.addEventListener("error", e => {
                            t(e)
                        }, {
                            once: !0
                        })
                    })), this._ensureReadyPromise
                }
                destroy() {
                    tP("[Replay] Destroying compression worker"), this._worker.terminate()
                }
                postMessage(e, t) {
                    let r = this._getAndIncrementId();
                    return new Promise((n, i) => {
                        let s = ({
                            data: t
                        }) => {
                            if (t.method === e && t.id === r) {
                                if (this._worker.removeEventListener("message", s), !t.success) {
                                    tL && D.kg.error("[Replay]", t.response), i(Error("Error in compression worker"));
                                    return
                                }
                                n(t.response)
                            }
                        };
                        this._worker.addEventListener("message", s), this._worker.postMessage({
                            id: r,
                            method: e,
                            arg: t
                        })
                    })
                }
                _getAndIncrementId() {
                    return this._id++
                }
            }
            class tj {
                constructor(e) {
                    this._worker = new tW(e), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1
                }
                get hasEvents() {
                    return !!this._earliestTimestamp
                }
                get type() {
                    return "worker"
                }
                ensureReady() {
                    return this._worker.ensureReady()
                }
                destroy() {
                    this._worker.destroy()
                }
                addEvent(e) {
                    let t = tv(e.timestamp);
                    (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
                    let r = JSON.stringify(e);
                    return (this._totalSize += r.length, this._totalSize > 2e7) ? Promise.reject(new tU) : this._sendEventToWorker(r)
                }
                finish() {
                    return this._finishRequest()
                }
                clear() {
                    this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, e => {
                        tL && D.kg.warn('[Replay] Sending "clear" message to worker failed', e)
                    })
                }
                getEarliestTimestamp() {
                    return this._earliestTimestamp
                }
                _sendEventToWorker(e) {
                    return this._worker.postMessage("addEvent", e)
                }
                async _finishRequest() {
                    let e = await this._worker.postMessage("finish");
                    return this._earliestTimestamp = null, this._totalSize = 0, e
                }
            }
            class tH {
                constructor(e) {
                    this._fallback = new tz, this._compression = new tj(e), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
                }
                get type() {
                    return this._used.type
                }
                get hasEvents() {
                    return this._used.hasEvents
                }
                get hasCheckout() {
                    return this._used.hasCheckout
                }
                set hasCheckout(e) {
                    this._used.hasCheckout = e
                }
                destroy() {
                    this._fallback.destroy(), this._compression.destroy()
                }
                clear() {
                    return this._used.clear()
                }
                getEarliestTimestamp() {
                    return this._used.getEarliestTimestamp()
                }
                addEvent(e) {
                    return this._used.addEvent(e)
                }
                async finish() {
                    return await this.ensureWorkerIsLoaded(), this._used.finish()
                }
                ensureWorkerIsLoaded() {
                    return this._ensureWorkerIsLoadedPromise
                }
                async _ensureWorkerIsLoaded() {
                    try {
                        await this._compression.ensureReady()
                    } catch (e) {
                        tP("[Replay] Failed to load the compression worker, falling back to simple buffer");
                        return
                    }
                    await this._switchToCompressionWorker()
                }
                async _switchToCompressionWorker() {
                    let {
                        events: e,
                        hasCheckout: t
                    } = this._fallback, r = [];
                    for (let t of e) r.push(this._compression.addEvent(t));
                    this._compression.hasCheckout = t, this._used = this._compression;
                    try {
                        await Promise.all(r)
                    } catch (e) {
                        tL && D.kg.warn("[Replay] Failed to add events when switching buffers.", e)
                    }
                }
            }

            function t$() {
                try {
                    return "sessionStorage" in $ && !!$.sessionStorage
                } catch (e) {
                    return !1
                }
            }

            function tq(e) {
                return void 0 !== e && Math.random() < e
            }

            function tK(e) {
                let t = Date.now(),
                    r = e.id || (0, O.DM)(),
                    n = e.started || t,
                    i = e.lastActivity || t;
                return {
                    id: r,
                    started: n,
                    lastActivity: i,
                    segmentId: e.segmentId || 0,
                    sampled: e.sampled,
                    previousSessionId: e.previousSessionId
                }
            }

            function tV(e) {
                if (t$()) try {
                    $.sessionStorage.setItem(q, JSON.stringify(e))
                } catch (e) {}
            }

            function tJ({
                sessionSampleRate: e,
                allowBuffering: t,
                stickySession: r = !1
            }, {
                previousSessionId: n
            } = {}) {
                let i = tK({
                    sampled: tq(e) ? "session" : !!t && "buffer",
                    previousSessionId: n
                });
                return r && tV(i), i
            }

            function tG(e, t, r = +new Date) {
                return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= r
            }

            function tY(e, {
                maxReplayDuration: t,
                sessionIdleExpire: r,
                targetTime: n = Date.now()
            }) {
                return tG(e.started, t, n) || tG(e.lastActivity, r, n)
            }

            function tX(e, {
                sessionIdleExpire: t,
                maxReplayDuration: r
            }) {
                return !!tY(e, {
                    sessionIdleExpire: t,
                    maxReplayDuration: r
                }) && ("buffer" !== e.sampled || 0 !== e.segmentId)
            }

            function tQ({
                traceInternals: e,
                sessionIdleExpire: t,
                maxReplayDuration: r,
                previousSessionId: n
            }, i) {
                let s = i.stickySession && function(e) {
                    if (!t$()) return null;
                    try {
                        let t = $.sessionStorage.getItem(q);
                        if (!t) return null;
                        let r = JSON.parse(t);
                        return tF("[Replay] Loading existing session", e), tK(r)
                    } catch (e) {
                        return null
                    }
                }(e);
                return s ? tX(s, {
                    sessionIdleExpire: t,
                    maxReplayDuration: r
                }) ? (tF("[Replay] Session in sessionStorage is expired, creating new one..."), tJ(i, {
                    previousSessionId: s.id
                })) : s : (tF("[Replay] Creating new session", e), tJ(i, {
                    previousSessionId: n
                }))
            }

            function tZ(e, t, r) {
                return !!t1(e, t) && (t0(e, t, r), !0)
            }
            async function t0(e, t, r) {
                if (!e.eventBuffer) return null;
                try {
                    r && "buffer" === e.recordingMode && e.eventBuffer.clear(), r && (e.eventBuffer.hasCheckout = !0);
                    let n = e.getOptions(),
                        i = function(e, t) {
                            try {
                                if ("function" == typeof t && e.type === eJ.Custom) return t(e)
                            } catch (e) {
                                return tL && D.kg.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...", e), null
                            }
                            return e
                        }(t, n.beforeAddRecordingEvent);
                    if (!i) return;
                    return await e.eventBuffer.addEvent(i)
                } catch (n) {
                    let t = n && n instanceof tU ? "addEventSizeExceeded" : "addEvent";
                    tL && D.kg.error(n), await e.stop({
                        reason: t
                    });
                    let r = (0, S.s3)();
                    r && r.recordDroppedEvent("internal_sdk_error", "replay")
                }
            }

            function t1(e, t) {
                if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
                let r = tv(t.timestamp);
                return !(r + e.timeouts.sessionIdlePause < Date.now()) && (!(r > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration) || (tP(`[Replay] Skipping event with timestamp ${r} because it is after maxReplayDuration`, e.getOptions()._experiments.traceInternals), !1))
            }

            function t2(e) {
                return "transaction" === e.type
            }

            function t3(e) {
                return "feedback" === e.type
            }

            function t5(e) {
                return !!e.category
            }

            function t8(e, t) {
                return t.map(({
                    type: t,
                    start: r,
                    end: n,
                    name: i,
                    data: s
                }) => {
                    let o = e.throttledAddEvent({
                        type: eJ.Custom,
                        timestamp: r,
                        data: {
                            tag: "performanceSpan",
                            payload: {
                                op: t,
                                description: i,
                                startTimestamp: r,
                                endTimestamp: n,
                                data: s
                            }
                        }
                    });
                    return "string" == typeof o ? Promise.resolve(null) : o
                })
            }

            function t6(e, t) {
                var r;
                e.isEnabled() && null !== t && (r = t.name, (!tL || !e.getOptions()._experiments.traceInternals) && (0, w.W)(r, (0, S.s3)()) || e.addUpdate(() => (t8(e, [t]), !0)))
            }

            function t4(e) {
                if (!e) return;
                let t = new TextEncoder;
                try {
                    if ("string" == typeof e) return t.encode(e).length;
                    if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
                    if (e instanceof FormData) {
                        let r = rs(e);
                        return t.encode(r).length
                    }
                    if (e instanceof Blob) return e.size;
                    if (e instanceof ArrayBuffer) return e.byteLength
                } catch (e) {}
            }

            function t7(e) {
                if (!e) return;
                let t = parseInt(e, 10);
                return isNaN(t) ? void 0 : t
            }

            function t9(e) {
                try {
                    if ("string" == typeof e) return [e];
                    if (e instanceof URLSearchParams) return [e.toString()];
                    if (e instanceof FormData) return [rs(e)];
                    if (!e) return [void 0]
                } catch (t) {
                    return tL && D.kg.warn("[Replay] Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"]
                }
                return tL && D.kg.info("[Replay] Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"]
            }

            function re(e, t) {
                if (!e) return {
                    headers: {},
                    size: void 0,
                    _meta: {
                        warnings: [t]
                    }
                };
                let r = { ...e._meta
                    },
                    n = r.warnings || [];
                return r.warnings = [...n, t], e._meta = r, e
            }

            function rt(e, t) {
                if (!t) return null;
                let {
                    startTimestamp: r,
                    endTimestamp: n,
                    url: i,
                    method: s,
                    statusCode: o,
                    request: a,
                    response: l
                } = t;
                return {
                    type: e,
                    start: r / 1e3,
                    end: n / 1e3,
                    name: i,
                    data: (0, x.Jr)({
                        method: s,
                        statusCode: o,
                        request: a,
                        response: l
                    })
                }
            }

            function rr(e) {
                return {
                    headers: {},
                    size: e,
                    _meta: {
                        warnings: ["URL_SKIPPED"]
                    }
                }
            }

            function rn(e, t, r) {
                if (!t && 0 === Object.keys(e).length) return;
                if (!t) return {
                    headers: e
                };
                if (!r) return {
                    headers: e,
                    size: t
                };
                let n = {
                        headers: e,
                        size: t
                    },
                    {
                        body: i,
                        warnings: s
                    } = function(e) {
                        if (!e || "string" != typeof e) return {
                            body: e
                        };
                        let t = e.length > 15e4,
                            r = function(e) {
                                let t = e[0],
                                    r = e[e.length - 1];
                                return "[" === t && "]" === r || "{" === t && "}" === r
                            }(e);
                        if (t) {
                            let t = e.slice(0, 15e4);
                            return r ? {
                                body: t,
                                warnings: ["MAYBE_JSON_TRUNCATED"]
                            } : {
                                body: `${t}…`,
                                warnings: ["TEXT_TRUNCATED"]
                            }
                        }
                        if (r) try {
                            return {
                                body: JSON.parse(e)
                            }
                        } catch (e) {}
                        return {
                            body: e
                        }
                    }(r);
                return n.body = i, s && s.length > 0 && (n._meta = {
                    warnings: s
                }), n
            }

            function ri(e, t) {
                return Object.keys(e).reduce((r, n) => {
                    let i = n.toLowerCase();
                    return t.includes(i) && e[n] && (r[i] = e[n]), r
                }, {})
            }

            function rs(e) {
                return new URLSearchParams(e).toString()
            }

            function ro(e, t) {
                let r = function(e, t = $.document.baseURI) {
                    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith($.location.origin)) return e;
                    let r = new URL(e, t);
                    if (r.origin !== new URL(t).origin) return e;
                    let n = r.href;
                    return !e.endsWith("/") && n.endsWith("/") ? n.slice(0, -1) : n
                }(e);
                return (0, N.U0)(r, t)
            }
            async function ra(e, t, r) {
                try {
                    let n = await rl(e, t, r),
                        i = rt("resource.fetch", n);
                    t6(r.replay, i)
                } catch (e) {
                    tL && D.kg.error("[Replay] Failed to capture fetch breadcrumb", e)
                }
            }
            async function rl(e, t, r) {
                let n = Date.now(),
                    {
                        startTimestamp: i = n,
                        endTimestamp: s = n
                    } = t,
                    {
                        url: o,
                        method: a,
                        status_code: l = 0,
                        request_body_size: c,
                        response_body_size: u
                    } = e.data,
                    d = ro(o, r.networkDetailAllowUrls) && !ro(o, r.networkDetailDenyUrls);
                return {
                    startTimestamp: i,
                    endTimestamp: s,
                    url: o,
                    method: a,
                    statusCode: l,
                    request: d ? function({
                        networkCaptureBodies: e,
                        networkRequestHeaders: t
                    }, r, n) {
                        let i = r ? 1 === r.length && "string" != typeof r[0] ? rp(r[0], t) : 2 === r.length ? rp(r[1], t) : {} : {};
                        if (!e) return rn(i, n, void 0);
                        let [s, o] = t9(rd(r)), a = rn(i, n, s);
                        return o ? re(a, o) : a
                    }(r, t.input, c) : rr(c),
                    response: await rc(d, r, t.response, u)
                }
            }
            async function rc(e, {
                networkCaptureBodies: t,
                networkResponseHeaders: r
            }, n, i) {
                if (!e && void 0 !== i) return rr(i);
                let s = n ? rh(n.headers, r) : {};
                if (!n || !t && void 0 !== i) return rn(s, i, void 0);
                let [o, a] = await ru(n), l = function(e, {
                    networkCaptureBodies: t,
                    responseBodySize: r,
                    captureDetails: n,
                    headers: i
                }) {
                    try {
                        let s = e && e.length && void 0 === r ? t4(e) : r;
                        if (!n) return rr(s);
                        if (t) return rn(i, s, e);
                        return rn(i, s, void 0)
                    } catch (e) {
                        return tL && D.kg.warn("[Replay] Failed to serialize response body", e), rn(i, r, void 0)
                    }
                }(o, {
                    networkCaptureBodies: t,
                    responseBodySize: i,
                    captureDetails: e,
                    headers: s
                });
                return a ? re(l, a) : l
            }
            async function ru(e) {
                let t = function(e) {
                    try {
                        return e.clone()
                    } catch (e) {
                        tL && D.kg.warn("[Replay] Failed to clone response body", e)
                    }
                }(e);
                if (!t) return [void 0, "BODY_PARSE_ERROR"];
                try {
                    return [await new Promise((e, r) => {
                        let n = (0, U.iK)(() => r(Error("Timeout while trying to read response body")), 500);
                        rf(t).then(t => e(t), e => r(e)).finally(() => clearTimeout(n))
                    })]
                } catch (e) {
                    return tL && D.kg.warn("[Replay] Failed to get text body from response", e), [void 0, "BODY_PARSE_ERROR"]
                }
            }

            function rd(e = []) {
                if (2 === e.length && "object" == typeof e[1]) return e[1].body
            }

            function rh(e, t) {
                let r = {};
                return t.forEach(t => {
                    e.get(t) && (r[t] = e.get(t))
                }), r
            }

            function rp(e, t) {
                if (!e) return {};
                let r = e.headers;
                return r ? r instanceof Headers ? rh(r, t) : Array.isArray(r) ? {} : ri(r, t) : {}
            }
            async function rf(e) {
                return await e.text()
            }
            async function rm(e, t, r) {
                try {
                    let n = function(e, t, r) {
                            let n = Date.now(),
                                {
                                    startTimestamp: i = n,
                                    endTimestamp: s = n,
                                    input: o,
                                    xhr: a
                                } = t,
                                {
                                    url: l,
                                    method: c,
                                    status_code: u = 0,
                                    request_body_size: d,
                                    response_body_size: h
                                } = e.data;
                            if (!l) return null;
                            if (!a || !ro(l, r.networkDetailAllowUrls) || ro(l, r.networkDetailDenyUrls)) {
                                let e = rr(d);
                                return {
                                    startTimestamp: i,
                                    endTimestamp: s,
                                    url: l,
                                    method: c,
                                    statusCode: u,
                                    request: e,
                                    response: rr(h)
                                }
                            }
                            let p = a[W.xU],
                                f = p ? ri(p.request_headers, r.networkRequestHeaders) : {},
                                m = ri(function(e) {
                                    let t = e.getAllResponseHeaders();
                                    return t ? t.split("\r\n").reduce((e, t) => {
                                        let [r, n] = t.split(": ");
                                        return e[r.toLowerCase()] = n, e
                                    }, {}) : {}
                                }(a), r.networkResponseHeaders),
                                [y, g] = r.networkCaptureBodies ? t9(o) : [void 0],
                                [_, v] = r.networkCaptureBodies ? function(e) {
                                    let t = [];
                                    try {
                                        return [e.responseText]
                                    } catch (e) {
                                        t.push(e)
                                    }
                                    try {
                                        return function(e, t) {
                                            try {
                                                if ("string" == typeof e) return [e];
                                                if (e instanceof Document) return [e.body.outerHTML];
                                                if ("json" === t && e && "object" == typeof e) return [JSON.stringify(e)];
                                                if (!e) return [void 0]
                                            } catch (t) {
                                                return tL && D.kg.warn("[Replay] Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"]
                                            }
                                            return tL && D.kg.info("[Replay] Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"]
                                        }(e.response, e.responseType)
                                    } catch (e) {
                                        t.push(e)
                                    }
                                    return tL && D.kg.warn("[Replay] Failed to get xhr response body", ...t), [void 0]
                                }(a) : [void 0],
                                S = rn(f, d, y),
                                w = rn(m, h, _);
                            return {
                                startTimestamp: i,
                                endTimestamp: s,
                                url: l,
                                method: c,
                                statusCode: u,
                                request: g ? re(S, g) : S,
                                response: v ? re(w, v) : w
                            }
                        }(e, t, r),
                        i = rt("resource.xhr", n);
                    t6(r.replay, i)
                } catch (e) {
                    tL && D.kg.error("[Replay] Failed to capture xhr breadcrumb", e)
                }
            }
            async function ry(e) {
                try {
                    return Promise.all(t8(e, [function(e) {
                        let {
                            jsHeapSizeLimit: t,
                            totalJSHeapSize: r,
                            usedJSHeapSize: n
                        } = e, i = Date.now() / 1e3;
                        return {
                            type: "memory",
                            name: "memory",
                            start: i,
                            end: i,
                            data: {
                                memory: {
                                    jsHeapSizeLimit: t,
                                    totalJSHeapSize: r,
                                    usedJSHeapSize: n
                                }
                            }
                        }
                    }($.performance.memory)]))
                } catch (e) {
                    return []
                }
            }
            async function rg({
                client: e,
                scope: t,
                replayId: r,
                event: n
            }) {
                let i = {
                    event_id: r,
                    integrations: "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations)
                };
                e.emit("preprocessEvent", n, i);
                let s = await (0, k.R)(e.getOptions(), n, i, t, e, (0, S.aF)());
                if (!s) return null;
                s.platform = s.platform || "javascript";
                let o = e.getSdkMetadata(),
                    {
                        name: a,
                        version: l
                    } = o && o.sdk || {};
                return s.sdk = { ...s.sdk,
                    name: a || "sentry.javascript.unknown",
                    version: l || "0.0.0"
                }, s
            }
            async function r_({
                recordingData: e,
                replayId: t,
                segmentId: r,
                eventContext: n,
                timestamp: i,
                session: s
            }) {
                var o;
                let a;
                let l = function({
                        recordingData: e,
                        headers: t
                    }) {
                        let r;
                        let n = `${JSON.stringify(t)}
`;
                        if ("string" == typeof e) r = `${n}${e}`;
                        else {
                            let t = new TextEncoder().encode(n);
                            (r = new Uint8Array(t.length + e.length)).set(t), r.set(e, t.length)
                        }
                        return r
                    }({
                        recordingData: e,
                        headers: {
                            segment_id: r
                        }
                    }),
                    {
                        urls: c,
                        errorIds: u,
                        traceIds: d,
                        initialTimestamp: h
                    } = n,
                    p = (0, S.s3)(),
                    f = (0, S.nZ)(),
                    m = p && p.getTransport(),
                    y = p && p.getDsn();
                if (!p || !m || !y || !s.sampled) return (0, P.WD)({});
                let g = {
                        type: "replay_event",
                        replay_start_timestamp: h / 1e3,
                        timestamp: i / 1e3,
                        error_ids: u,
                        trace_ids: d,
                        urls: c,
                        replay_id: t,
                        segment_id: r,
                        replay_type: s.sampled
                    },
                    _ = await rg({
                        scope: f,
                        client: p,
                        replayId: t,
                        event: g
                    });
                if (!_) return p.recordDroppedEvent("event_processor", "replay", g), tP("An event processor returned `null`, will not send event."), (0, P.WD)({});
                delete _.sdkProcessingMetadata;
                let v = (o = p.getOptions().tunnel, (0, L.Jd)((0, L.Cd)(_, (0, L.HY)(_), o, y), [
                    [{
                        type: "replay_event"
                    }, _],
                    [{
                        type: "replay_recording",
                        length: "string" == typeof l ? new TextEncoder().encode(l).length : l.length
                    }, l]
                ]));
                try {
                    a = await m.send(v)
                } catch (t) {
                    let e = Error(K);
                    try {
                        e.cause = t
                    } catch (e) {}
                    throw e
                }
                if ("number" == typeof a.statusCode && (a.statusCode < 200 || a.statusCode >= 300)) throw new rv(a.statusCode);
                let w = (0, F.WG)({}, a);
                if ((0, F.Q)(w, "replay")) throw new rS(w);
                return a
            }
            class rv extends Error {
                constructor(e) {
                    super(`Transport returned status code ${e}`)
                }
            }
            class rS extends Error {
                constructor(e) {
                    super("Rate limit hit"), this.rateLimits = e
                }
            }
            async function rw(e, t = {
                count: 0,
                interval: 5e3
            }) {
                let {
                    recordingData: r,
                    options: n
                } = e;
                if (r.length) try {
                    return await r_(e), !0
                } catch (r) {
                    if (r instanceof rv || r instanceof rS) throw r;
                    if ((0, b.v)("Replays", {
                            _retryCount: t.count
                        }), tL && n._experiments && n._experiments.captureExceptions && (0, b.Tb)(r), t.count >= 3) {
                        let e = Error(`${K} - max retries exceeded`);
                        try {
                            e.cause = r
                        } catch (e) {}
                        throw e
                    }
                    return t.interval *= ++t.count, new Promise((r, n) => {
                        (0, U.iK)(async () => {
                            try {
                                await rw(e, t), r(!0)
                            } catch (e) {
                                n(e)
                            }
                        }, t.interval)
                    })
                }
            }
            let rb = "__THROTTLED";
            class rk {
                constructor({
                    options: e,
                    recordingOptions: t
                }) {
                    rk.prototype.__init.call(this), rk.prototype.__init2.call(this), rk.prototype.__init3.call(this), rk.prototype.__init4.call(this), rk.prototype.__init5.call(this), rk.prototype.__init6.call(this), this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], this.recordingMode = "session", this.timeouts = {
                        sessionIdlePause: 3e5,
                        sessionIdleExpire: 9e5
                    }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._hasInitializedCoreListeners = !1, this._context = {
                        errorIds: new Set,
                        traceIds: new Set,
                        urls: [],
                        initialTimestamp: Date.now(),
                        initialUrl: ""
                    }, this._recordingOptions = t, this._options = e, this._debouncedFlush = function(e, t, r) {
                        let n, i, s;
                        let o = r && r.maxWait ? Math.max(r.maxWait, t) : 0;

                        function a() {
                            return l(), n = e()
                        }

                        function l() {
                            void 0 !== i && clearTimeout(i), void 0 !== s && clearTimeout(s), i = s = void 0
                        }

                        function c() {
                            return i && clearTimeout(i), i = (0, U.iK)(a, t), o && void 0 === s && (s = (0, U.iK)(a, o)), n
                        }
                        return c.cancel = l, c.flush = function() {
                            return void 0 !== i || void 0 !== s ? a() : n
                        }, c
                    }(() => this._flush(), this._options.flushMinDelay, {
                        maxWait: this._options.flushMaxDelay
                    }), this._throttledAddEvent = function(e, t, r) {
                        let n = new Map,
                            i = e => {
                                let t = e - 5;
                                n.forEach((e, r) => {
                                    r < t && n.delete(r)
                                })
                            },
                            s = () => [...n.values()].reduce((e, t) => e + t, 0),
                            o = !1;
                        return (...t) => {
                            let r = Math.floor(Date.now() / 1e3);
                            if (i(r), s() >= 300) {
                                let e = o;
                                return o = !0, e ? "__SKIPPED" : rb
                            }
                            o = !1;
                            let a = n.get(r) || 0;
                            return n.set(r, a + 1), e(...t)
                        }
                    }((e, t) => t1(this, e) ? t0(this, e, t) : Promise.resolve(null), 0, 0);
                    let {
                        slowClickTimeout: r,
                        slowClickIgnoreSelectors: n
                    } = this.getOptions(), i = r ? {
                        threshold: Math.min(3e3, r),
                        timeout: r,
                        scrollTimeout: 300,
                        ignoreSelector: n ? n.join(",") : ""
                    } : void 0;
                    i && (this.clickDetector = new tI(this, i))
                }
                getContext() {
                    return this._context
                }
                isEnabled() {
                    return this._isEnabled
                }
                isPaused() {
                    return this._isPaused
                }
                isRecordingCanvas() {
                    return !!this._canvas
                }
                getOptions() {
                    return this._options
                }
                initializeSampling(e) {
                    let {
                        errorSampleRate: t,
                        sessionSampleRate: r
                    } = this._options;
                    if (!(t <= 0) || !(r <= 0)) {
                        if (this._initializeSessionForSampling(e), !this.session) {
                            this._handleException(Error("Unable to initialize and create session"));
                            return
                        }!1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", tF(`[Replay] Starting replay in ${this.recordingMode} mode`, this._options._experiments.traceInternals), this._initializeRecording())
                    }
                }
                start() {
                    if (this._isEnabled && "session" === this.recordingMode) throw Error("Replay recording is already in progress");
                    if (this._isEnabled && "buffer" === this.recordingMode) throw Error("Replay buffering is in progress, call `flush()` to save the replay");
                    tF("[Replay] Starting replay in session mode", this._options._experiments.traceInternals), this._updateUserActivity();
                    let e = tQ({
                        maxReplayDuration: this._options.maxReplayDuration,
                        sessionIdleExpire: this.timeouts.sessionIdleExpire,
                        traceInternals: this._options._experiments.traceInternals
                    }, {
                        stickySession: this._options.stickySession,
                        sessionSampleRate: 1,
                        allowBuffering: !1
                    });
                    this.session = e, this._initializeRecording()
                }
                startBuffering() {
                    if (this._isEnabled) throw Error("Replay recording is already in progress");
                    tF("[Replay] Starting replay in buffer mode", this._options._experiments.traceInternals);
                    let e = tQ({
                        sessionIdleExpire: this.timeouts.sessionIdleExpire,
                        maxReplayDuration: this._options.maxReplayDuration,
                        traceInternals: this._options._experiments.traceInternals
                    }, {
                        stickySession: this._options.stickySession,
                        sessionSampleRate: 0,
                        allowBuffering: !0
                    });
                    this.session = e, this.recordingMode = "buffer", this._initializeRecording()
                }
                startRecording() {
                    try {
                        var e;
                        let t;
                        let r = this._canvas;
                        this._stopRecording = t_({ ...this._recordingOptions,
                            ..."buffer" === this.recordingMode && {
                                checkoutEveryNms: 6e4
                            },
                            emit: (e = this, t = !1, (r, n) => {
                                if (!e.checkAndHandleExpiredSession()) {
                                    tL && D.kg.warn("[Replay] Received replay event after session expired.");
                                    return
                                }
                                let i = n || !t;
                                t = !0, e.clickDetector && function(e, t) {
                                    try {
                                        if (3 !== t.type) return;
                                        let {
                                            source: r
                                        } = t.data;
                                        if (r === eG.Mutation && e.registerMutation(t.timestamp), r === eG.Scroll && e.registerScroll(t.timestamp), t.data.source === eG.MouseInteraction) {
                                            let {
                                                type: r,
                                                id: n
                                            } = t.data, i = t_.mirror.getNode(n);
                                            i instanceof HTMLElement && r === eY.Click && e.registerClick(i)
                                        }
                                    } catch (e) {}
                                }(e.clickDetector, r), e.addUpdate(() => {
                                    if ("buffer" === e.recordingMode && i && e.setInitialState(), !tZ(e, r, i)) return !0;
                                    if (!i) return !1;
                                    if (i && e.session && 0 === e.session.segmentId && tZ(e, function(e) {
                                            let t = e.getOptions();
                                            return {
                                                type: eJ.Custom,
                                                timestamp: Date.now(),
                                                data: {
                                                    tag: "options",
                                                    payload: {
                                                        shouldRecordCanvas: e.isRecordingCanvas(),
                                                        sessionSampleRate: t.sessionSampleRate,
                                                        errorSampleRate: t.errorSampleRate,
                                                        useCompressionOption: t.useCompression,
                                                        blockAllMedia: t.blockAllMedia,
                                                        maskAllText: t.maskAllText,
                                                        maskAllInputs: t.maskAllInputs,
                                                        useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                                                        networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                                                        networkCaptureBodies: t.networkCaptureBodies,
                                                        networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                                                        networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                                                    }
                                                }
                                            }
                                        }(e), !1), e.session && e.session.previousSessionId) return !0;
                                    if ("buffer" === e.recordingMode && e.session && e.eventBuffer) {
                                        let t = e.eventBuffer.getEarliestTimestamp();
                                        t && (tP(`[Replay] Updating session start time to earliest event in buffer to ${new Date(t)}`, e.getOptions()._experiments.traceInternals), e.session.started = t, e.getOptions().stickySession && tV(e.session))
                                    }
                                    return "session" === e.recordingMode && e.flush(), !0
                                })
                            }),
                            onMutation: this._onMutationHandler,
                            ...r ? {
                                recordCanvas: r.recordCanvas,
                                getCanvasManager: r.getCanvasManager,
                                sampling: r.sampling,
                                dataURLOptions: r.dataURLOptions
                            } : {}
                        })
                    } catch (e) {
                        this._handleException(e)
                    }
                }
                stopRecording() {
                    try {
                        return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
                    } catch (e) {
                        return this._handleException(e), !1
                    }
                }
                async stop({
                    forceFlush: e = !1,
                    reason: t
                } = {}) {
                    if (this._isEnabled) {
                        this._isEnabled = !1;
                        try {
                            tP(`[Replay] Stopping Replay${t?` triggered by ${t}`:""}`, this._options._experiments.traceInternals), this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), e && await this._flush({
                                    force: !0
                                }), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null,
                                function() {
                                    if (t$()) try {
                                        $.sessionStorage.removeItem(q)
                                    } catch (e) {}
                                }(), this.session = void 0
                        } catch (e) {
                            this._handleException(e)
                        }
                    }
                }
                pause() {
                    this._isPaused || (this._isPaused = !0, this.stopRecording(), tP("[Replay] Pausing replay", this._options._experiments.traceInternals))
                }
                resume() {
                    this._isPaused && this._checkSession() && (this._isPaused = !1, this.startRecording(), tP("[Replay] Resuming replay", this._options._experiments.traceInternals))
                }
                async sendBufferedReplayOrFlush({
                    continueRecording: e = !0
                } = {}) {
                    if ("session" === this.recordingMode) return this.flushImmediate();
                    let t = Date.now();
                    tP("[Replay] Converting buffer to session", this._options._experiments.traceInternals), await this.flushImmediate();
                    let r = this.stopRecording();
                    e && r && "session" !== this.recordingMode && (this.recordingMode = "session", this.session && (this._updateUserActivity(t), this._updateSessionActivity(t), this._maybeSaveSession()), this.startRecording())
                }
                addUpdate(e) {
                    let t = e();
                    "buffer" !== this.recordingMode && !0 !== t && this._debouncedFlush()
                }
                triggerUserActivity() {
                    if (this._updateUserActivity(), !this._stopRecording) {
                        if (!this._checkSession()) return;
                        this.resume();
                        return
                    }
                    this.checkAndHandleExpiredSession(), this._updateSessionActivity()
                }
                updateUserActivity() {
                    this._updateUserActivity(), this._updateSessionActivity()
                }
                conditionalFlush() {
                    return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
                }
                flush() {
                    return this._debouncedFlush()
                }
                flushImmediate() {
                    return this._debouncedFlush(), this._debouncedFlush.flush()
                }
                cancelFlush() {
                    this._debouncedFlush.cancel()
                }
                getSessionId() {
                    return this.session && this.session.id
                }
                checkAndHandleExpiredSession() {
                    if (this._lastActivity && tG(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled) {
                        this.pause();
                        return
                    }
                    return !!this._checkSession()
                }
                setInitialState() {
                    let e = `${$.location.pathname}${$.location.hash}${$.location.search}`,
                        t = `${$.location.origin}${e}`;
                    this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), this._context.initialUrl = t, this._context.initialTimestamp = Date.now(), this._context.urls.push(t)
                }
                throttledAddEvent(e, t) {
                    let r = this._throttledAddEvent(e, t);
                    if (r === rb) {
                        let e = tR({
                            category: "replay.throttled"
                        });
                        this.addUpdate(() => !tZ(this, {
                            type: 5,
                            timestamp: e.timestamp || 0,
                            data: {
                                tag: "breadcrumb",
                                payload: e,
                                metric: !0
                            }
                        }))
                    }
                    return r
                }
                getCurrentRoute() {
                    let e = this.lastActiveSpan || (0, E.HN)(),
                        t = e && (0, E.Gx)(e),
                        r = (t && (0, E.XU)(t).data || {})[I.Zj];
                    if (t && r && ["route", "custom"].includes(r)) return (0, E.XU)(t).description
                }
                _initializeRecording() {
                    this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function({
                        useCompression: e,
                        workerUrl: t
                    }) {
                        if (e && window.Worker) {
                            let e = function(e) {
                                try {
                                    let t = e || ("undefined" != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ && __SENTRY_EXCLUDE_REPLAY_WORKER__ ? "" : function() {
                                        let e = new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(J)return J.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(let r=0,e=t.length;r<e;r++)n+=t[r].length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']);
                                        return URL.createObjectURL(e)
                                    }());
                                    if (!t) return;
                                    tP(`[Replay] Using compression worker${e?` from ${e}`:""}`);
                                    let r = new Worker(t);
                                    return new tH(r)
                                } catch (e) {
                                    tP("[Replay] Failed to create compression worker")
                                }
                            }(t);
                            if (e) return e
                        }
                        return tP("[Replay] Using simple buffer"), new tz
                    }({
                        useCompression: this._options.useCompression,
                        workerUrl: this._options.workerUrl
                    }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, this.startRecording()
                }
                _handleException(e) {
                    tL && D.kg.error("[Replay]", e), tL && this._options._experiments && this._options._experiments.captureExceptions && (0, b.Tb)(e)
                }
                _initializeSessionForSampling(e) {
                    let t = this._options.errorSampleRate > 0,
                        r = tQ({
                            sessionIdleExpire: this.timeouts.sessionIdleExpire,
                            maxReplayDuration: this._options.maxReplayDuration,
                            traceInternals: this._options._experiments.traceInternals,
                            previousSessionId: e
                        }, {
                            stickySession: this._options.stickySession,
                            sessionSampleRate: this._options.sessionSampleRate,
                            allowBuffering: t
                        });
                    this.session = r
                }
                _checkSession() {
                    if (!this.session) return !1;
                    let e = this.session;
                    return !tX(e, {
                        sessionIdleExpire: this.timeouts.sessionIdleExpire,
                        maxReplayDuration: this._options.maxReplayDuration
                    }) || (this._refreshSession(e), !1)
                }
                async _refreshSession(e) {
                    this._isEnabled && (await this.stop({
                        reason: "refresh session"
                    }), this.initializeSampling(e.id))
                }
                _addListeners() {
                    try {
                        $.document.addEventListener("visibilitychange", this._handleVisibilityChange), $.addEventListener("blur", this._handleWindowBlur), $.addEventListener("focus", this._handleWindowFocus), $.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (function(e) {
                            let t = (0, S.s3)();
                            (0, j.O)(tT(e)), (0, H.a)(t => {
                                if (!e.isEnabled()) return;
                                let r = function(e) {
                                    let {
                                        from: t,
                                        to: r
                                    } = e, n = Date.now() / 1e3;
                                    return {
                                        type: "navigation.push",
                                        start: n,
                                        end: n,
                                        name: r,
                                        data: {
                                            previous: t
                                        }
                                    }
                                }(t);
                                null !== r && (e.getContext().urls.push(r.name), e.triggerUserActivity(), e.addUpdate(() => (t8(e, [r]), !1)))
                            }),
                            function(e) {
                                let t = (0, S.s3)();
                                t && t.on("beforeAddBreadcrumb", t => (function(e, t) {
                                    if (!e.isEnabled() || !t5(t)) return;
                                    let r = !t5(t) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(t.category) || t.category.startsWith("ui.") ? null : "console" === t.category ? function(e) {
                                        let t = e.data && e.data.arguments;
                                        if (!Array.isArray(t) || 0 === t.length) return tR(e);
                                        let r = !1,
                                            n = t.map(e => {
                                                if (!e) return e;
                                                if ("string" == typeof e) return e.length > 5e3 ? (r = !0, `${e.slice(0,5e3)}…`) : e;
                                                if ("object" == typeof e) try {
                                                    let t = (0, R.Fv)(e, 7);
                                                    if (JSON.stringify(t).length > 5e3) return r = !0, `${JSON.stringify(t,null,2).slice(0,5e3)}…`;
                                                    return t
                                                } catch (e) {}
                                                return e
                                            });
                                        return tR({ ...e,
                                            data: { ...e.data,
                                                arguments: n,
                                                ...r ? {
                                                    _meta: {
                                                        warnings: ["CONSOLE_ARG_TRUNCATED"]
                                                    }
                                                } : {}
                                            }
                                        })
                                    }(t) : tR(t);
                                    r && tw(e, r)
                                })(e, t))
                            }(e),
                            function(e) {
                                let t = (0, S.s3)();
                                try {
                                    let {
                                        networkDetailAllowUrls: r,
                                        networkDetailDenyUrls: n,
                                        networkCaptureBodies: i,
                                        networkRequestHeaders: s,
                                        networkResponseHeaders: o
                                    } = e.getOptions(), a = {
                                        replay: e,
                                        networkDetailAllowUrls: r,
                                        networkDetailDenyUrls: n,
                                        networkCaptureBodies: i,
                                        networkRequestHeaders: s,
                                        networkResponseHeaders: o
                                    };
                                    t && t.on("beforeAddBreadcrumb", (e, t) => (function(e, t, r) {
                                        if (t.data) try {
                                            var n, i;
                                            "xhr" === t.category && (n = r) && n.xhr && (function(e, t) {
                                                let {
                                                    xhr: r,
                                                    input: n
                                                } = t;
                                                if (!r) return;
                                                let i = t4(n),
                                                    s = r.getResponseHeader("content-length") ? t7(r.getResponseHeader("content-length")) : function(e, t) {
                                                        try {
                                                            let r = "json" === t && e && "object" == typeof e ? JSON.stringify(e) : e;
                                                            return t4(r)
                                                        } catch (e) {
                                                            return
                                                        }
                                                    }(r.response, r.responseType);
                                                void 0 !== i && (e.data.request_body_size = i), void 0 !== s && (e.data.response_body_size = s)
                                            }(t, r), rm(t, r, e)), "fetch" === t.category && (i = r) && i.response && (function(e, t) {
                                                let {
                                                    input: r,
                                                    response: n
                                                } = t, i = t4(r ? rd(r) : void 0), s = n ? t7(n.headers.get("content-length")) : void 0;
                                                void 0 !== i && (e.data.request_body_size = i), void 0 !== s && (e.data.response_body_size = s)
                                            }(t, r), ra(t, r, e))
                                        } catch (e) {
                                            tL && D.kg.warn("Error when enriching network breadcrumb")
                                        }
                                    })(a, e, t))
                                } catch (e) {}
                            }(e);
                            let r = Object.assign((t, r) => e.isEnabled() ? "replay_event" === t.type ? (delete t.breadcrumbs, t) : (!t.type || t2(t) || t3(t)) && e.checkAndHandleExpiredSession() ? t3(t) ? (e.flush(), t.contexts.feedback.replay_id = e.getSessionId(), e.triggerUserActivity(), e.addUpdate(() => !t.timestamp || (e.throttledAddEvent({
                                type: eJ.Custom,
                                timestamp: 1e3 * t.timestamp,
                                data: {
                                    tag: "breadcrumb",
                                    payload: {
                                        timestamp: t.timestamp,
                                        type: "default",
                                        category: "sentry.feedback",
                                        data: {
                                            feedbackId: t.event_id
                                        }
                                    }
                                }
                            }), !1)), t) : !t.type && t.exception && t.exception.values && t.exception.values.length && r.originalException && r.originalException.__rrweb__ && !e.getOptions()._experiments.captureExceptions ? (tL && D.kg.log("[Replay] Ignoring error from rrweb internals", t), null) : (("buffer" === e.recordingMode && t.message !== K && t.exception && !t.type && tq(e.getOptions().errorSampleRate) || "session" === e.recordingMode) && (t.tags = { ...t.tags,
                                replayId: e.getSessionId()
                            }), t) : t : t, {
                                id: "Replay"
                            });
                            (0, b.Qy)(r), t && (t.on("beforeSendEvent", t => {
                                e.isEnabled() && !t.type && function(e, t) {
                                    let r = t.exception && t.exception.values && t.exception.values[0].value;
                                    "string" == typeof r && (r.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || r.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && tw(e, tR({
                                        category: "replay.hydrate-error"
                                    }))
                                }(e, t)
                            }), t.on("afterSendEvent", (t, r) => {
                                if (!e.isEnabled() || t.type && !t2(t)) return;
                                let n = r && r.statusCode;
                                if (n && !(n < 200) && !(n >= 300)) {
                                    if (t2(t)) {
                                        (function(e, t) {
                                            let r = e.getContext();
                                            t.contexts && t.contexts.trace && t.contexts.trace.trace_id && r.traceIds.size < 100 && r.traceIds.add(t.contexts.trace.trace_id)
                                        })(e, t);
                                        return
                                    }(function(e, t) {
                                        let r = e.getContext();
                                        if (t.event_id && r.errorIds.size < 100 && r.errorIds.add(t.event_id), "buffer" !== e.recordingMode || !t.tags || !t.tags.replayId) return;
                                        let {
                                            beforeErrorSampling: n
                                        } = e.getOptions();
                                        ("function" != typeof n || n(t)) && (0, U.iK)(() => {
                                            e.sendBufferedReplayOrFlush()
                                        })
                                    })(e, t)
                                }
                            }), t.on("createDsc", t => {
                                let r = e.getSessionId();
                                r && e.isEnabled() && "session" === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = r)
                            }), t.on("spanStart", t => {
                                e.lastActiveSpan = t
                            }), t.on("spanEnd", t => {
                                e.lastActiveSpan = t
                            }), t.on("beforeSendFeedback", (t, r) => {
                                let n = e.getSessionId();
                                r && r.includeReplay && e.isEnabled() && n && t.contexts && t.contexts.feedback && (t.contexts.feedback.replay_id = n)
                            }))
                        }(this), this._hasInitializedCoreListeners = !0)
                    } catch (e) {
                        this._handleException(e)
                    }
                    this._performanceCleanupCallback = function(e) {
                        function t(t) {
                            e.performanceEntries.includes(t) || e.performanceEntries.push(t)
                        }

                        function r({
                            entries: e
                        }) {
                            e.forEach(t)
                        }
                        let n = [];
                        return ["navigation", "paint", "resource"].forEach(e => {
                            n.push((0, z._j)(e, r))
                        }), n.push((0, z.$A)(({
                            metric: t
                        }) => {
                            e.replayPerformanceEntries.push(function(e) {
                                let t = e.entries,
                                    r = t[t.length - 1],
                                    n = r ? r.element : void 0,
                                    i = e.value,
                                    s = tN(i);
                                return {
                                    type: "largest-contentful-paint",
                                    name: "largest-contentful-paint",
                                    start: s,
                                    end: s,
                                    data: {
                                        value: i,
                                        size: i,
                                        nodeId: n ? t_.mirror.getId(n) : void 0
                                    }
                                }
                            }(t))
                        })), () => {
                            n.forEach(e => e())
                        }
                    }(this)
                }
                _removeListeners() {
                    try {
                        $.document.removeEventListener("visibilitychange", this._handleVisibilityChange), $.removeEventListener("blur", this._handleWindowBlur), $.removeEventListener("focus", this._handleWindowFocus), $.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback()
                    } catch (e) {
                        this._handleException(e)
                    }
                }
                __init() {
                    this._handleVisibilityChange = () => {
                        "visible" === $.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
                    }
                }
                __init2() {
                    this._handleWindowBlur = () => {
                        let e = tR({
                            category: "ui.blur"
                        });
                        this._doChangeToBackgroundTasks(e)
                    }
                }
                __init3() {
                    this._handleWindowFocus = () => {
                        let e = tR({
                            category: "ui.focus"
                        });
                        this._doChangeToForegroundTasks(e)
                    }
                }
                __init4() {
                    this._handleKeyboardEvent = e => {
                        ! function(e, t) {
                            if (!e.isEnabled()) return;
                            e.updateUserActivity();
                            let r = function(e) {
                                var t;
                                let {
                                    metaKey: r,
                                    shiftKey: n,
                                    ctrlKey: i,
                                    altKey: s,
                                    key: o,
                                    target: a
                                } = e;
                                if (!a || "INPUT" === (t = a).tagName || "TEXTAREA" === t.tagName || t.isContentEditable || !o) return null;
                                let l = r || i || s,
                                    c = 1 === o.length;
                                if (!l && c) return null;
                                let u = (0, T.Rt)(a, {
                                        maxStringLength: 200
                                    }) || "<unknown>",
                                    d = tA(a, u);
                                return tR({
                                    category: "ui.keyDown",
                                    message: u,
                                    data: { ...d.data,
                                        metaKey: r,
                                        shiftKey: n,
                                        ctrlKey: i,
                                        altKey: s,
                                        key: o
                                    }
                                })
                            }(t);
                            r && tw(e, r)
                        }(this, e)
                    }
                }
                _doChangeToBackgroundTasks(e) {
                    !this.session || tY(this.session, {
                        maxReplayDuration: this._options.maxReplayDuration,
                        sessionIdleExpire: this.timeouts.sessionIdleExpire
                    }) || (e && this._createCustomBreadcrumb(e), this.conditionalFlush())
                }
                _doChangeToForegroundTasks(e) {
                    if (this.session) {
                        if (!this.checkAndHandleExpiredSession()) {
                            tP("[Replay] Document has become active, but session has expired");
                            return
                        }
                        e && this._createCustomBreadcrumb(e)
                    }
                }
                _updateUserActivity(e = Date.now()) {
                    this._lastActivity = e
                }
                _updateSessionActivity(e = Date.now()) {
                    this.session && (this.session.lastActivity = e, this._maybeSaveSession())
                }
                _createCustomBreadcrumb(e) {
                    this.addUpdate(() => {
                        this.throttledAddEvent({
                            type: eJ.Custom,
                            timestamp: e.timestamp || 0,
                            data: {
                                tag: "breadcrumb",
                                payload: e
                            }
                        })
                    })
                }
                _addPerformanceEntries() {
                    let e = this.performanceEntries.map(tO).filter(Boolean).concat(this.replayPerformanceEntries);
                    return this.performanceEntries = [], this.replayPerformanceEntries = [], Promise.all(t8(this, e))
                }
                _clearContext() {
                    this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
                }
                _updateInitialTimestampFromEventBuffer() {
                    let {
                        session: e,
                        eventBuffer: t
                    } = this;
                    if (!e || !t || e.segmentId) return;
                    let r = t.getEarliestTimestamp();
                    r && r < this._context.initialTimestamp && (this._context.initialTimestamp = r)
                }
                _popEventContext() {
                    let e = {
                        initialTimestamp: this._context.initialTimestamp,
                        initialUrl: this._context.initialUrl,
                        errorIds: Array.from(this._context.errorIds),
                        traceIds: Array.from(this._context.traceIds),
                        urls: this._context.urls
                    };
                    return this._clearContext(), e
                }
                async _runFlush() {
                    let e = this.getSessionId();
                    if (!this.session || !this.eventBuffer || !e) {
                        tL && D.kg.error("[Replay] No session or eventBuffer found to flush.");
                        return
                    }
                    if (await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents && (await ry(this), this.eventBuffer && e === this.getSessionId())) try {
                        this._updateInitialTimestampFromEventBuffer();
                        let t = Date.now();
                        if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw Error("Session is too long, not sending replay");
                        let r = this._popEventContext(),
                            n = this.session.segmentId++;
                        this._maybeSaveSession();
                        let i = await this.eventBuffer.finish();
                        await rw({
                            replayId: e,
                            recordingData: i,
                            segmentId: n,
                            eventContext: r,
                            session: this.session,
                            options: this.getOptions(),
                            timestamp: t
                        })
                    } catch (t) {
                        this._handleException(t), this.stop({
                            reason: "sendReplay"
                        });
                        let e = (0, S.s3)();
                        e && e.recordDroppedEvent("send_error", "replay")
                    }
                }
                __init5() {
                    this._flush = async ({
                        force: e = !1
                    } = {}) => {
                        if (!this._isEnabled && !e) return;
                        if (!this.checkAndHandleExpiredSession()) {
                            tL && D.kg.error("[Replay] Attempting to finish replay event after session expired.");
                            return
                        }
                        if (!this.session) return;
                        let t = this.session.started,
                            r = Date.now() - t;
                        this._debouncedFlush.cancel();
                        let n = r < this._options.minReplayDuration,
                            i = r > this._options.maxReplayDuration + 5e3;
                        if (n || i) {
                            tP(`[Replay] Session duration (${Math.floor(r/1e3)}s) is too ${n?"short":"long"}, not sending replay.`, this._options._experiments.traceInternals), n && this._debouncedFlush();
                            return
                        }
                        let s = this.eventBuffer;
                        if (s && 0 === this.session.segmentId && !s.hasCheckout && tP("[Replay] Flushing initial segment without checkout.", this._options._experiments.traceInternals), !this._flushLock) {
                            this._flushLock = this._runFlush(), await this._flushLock, this._flushLock = void 0;
                            return
                        }
                        try {
                            await this._flushLock
                        } catch (e) {
                            tL && D.kg.error(e)
                        } finally {
                            this._debouncedFlush()
                        }
                    }
                }
                _maybeSaveSession() {
                    this.session && this._options.stickySession && tV(this.session)
                }
                __init6() {
                    this._onMutationHandler = e => {
                        let t = e.length,
                            r = this._options.mutationLimit,
                            n = this._options.mutationBreadcrumbLimit,
                            i = r && t > r;
                        if (t > n || i) {
                            let e = tR({
                                category: "replay.mutations",
                                data: {
                                    count: t,
                                    limit: i
                                }
                            });
                            this._createCustomBreadcrumb(e)
                        }
                        return !i || (this.stop({
                            reason: "mutationLimit",
                            forceFlush: "session" === this.recordingMode
                        }), !1)
                    }
                }
            }

            function rE(e, t) {
                return [...e, ...t].join(",")
            }
            let rI = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
                rM = ["content-length", "content-type", "accept"],
                rC = !1,
                rR = e => new rx(e);
            class rx {
                static __initStatic() {
                    this.id = "Replay"
                }
                constructor({
                    flushMinDelay: e = 5e3,
                    flushMaxDelay: t = 5500,
                    minReplayDuration: r = 4999,
                    maxReplayDuration: n = 36e5,
                    stickySession: i = !0,
                    useCompression: s = !0,
                    workerUrl: o,
                    _experiments: a = {},
                    maskAllText: l = !0,
                    maskAllInputs: c = !0,
                    blockAllMedia: u = !0,
                    mutationBreadcrumbLimit: d = 750,
                    mutationLimit: h = 1e4,
                    slowClickTimeout: p = 7e3,
                    slowClickIgnoreSelectors: f = [],
                    networkDetailAllowUrls: m = [],
                    networkDetailDenyUrls: y = [],
                    networkCaptureBodies: g = !0,
                    networkRequestHeaders: _ = [],
                    networkResponseHeaders: v = [],
                    mask: S = [],
                    maskAttributes: w = ["title", "placeholder"],
                    unmask: b = [],
                    block: k = [],
                    unblock: E = [],
                    ignore: I = [],
                    maskFn: M,
                    beforeAddRecordingEvent: C,
                    beforeErrorSampling: R
                } = {}) {
                    this.name = rx.id;
                    let x = function({
                        mask: e,
                        unmask: t,
                        block: r,
                        unblock: n,
                        ignore: i
                    }) {
                        return {
                            maskTextSelector: rE(e, [".sentry-mask", "[data-sentry-mask]"]),
                            unmaskTextSelector: rE(t, []),
                            blockSelector: rE(r, [".sentry-block", "[data-sentry-block]", 'base[href="/"]']),
                            unblockSelector: rE(n, []),
                            ignoreSelector: rE(i, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
                        }
                    }({
                        mask: S,
                        unmask: b,
                        block: k,
                        unblock: E,
                        ignore: I
                    });
                    if (this._recordingOptions = {
                            maskAllInputs: c,
                            maskAllText: l,
                            maskInputOptions: {
                                password: !0
                            },
                            maskTextFn: M,
                            maskInputFn: M,
                            maskAttributeFn: (e, t, r) => (function({
                                el: e,
                                key: t,
                                maskAttributes: r,
                                maskAllText: n,
                                privacyOptions: i,
                                value: s
                            }) {
                                return !n || i.unmaskTextSelector && e.matches(i.unmaskTextSelector) ? s : r.includes(t) || "value" === t && "INPUT" === e.tagName && ["submit", "button"].includes(e.getAttribute("type") || "") ? s.replace(/[\S]/g, "*") : s
                            })({
                                maskAttributes: w,
                                maskAllText: l,
                                privacyOptions: x,
                                key: e,
                                value: t,
                                el: r
                            }),
                            ...x,
                            slimDOMOptions: "all",
                            inlineStylesheet: !0,
                            inlineImages: !1,
                            collectFonts: !0,
                            errorHandler: e => {
                                try {
                                    e.__rrweb__ = !0
                                } catch (e) {}
                            }
                        }, this._initialOptions = {
                            flushMinDelay: e,
                            flushMaxDelay: t,
                            minReplayDuration: Math.min(r, 15e3),
                            maxReplayDuration: Math.min(n, 36e5),
                            stickySession: i,
                            useCompression: s,
                            workerUrl: o,
                            blockAllMedia: u,
                            maskAllInputs: c,
                            maskAllText: l,
                            mutationBreadcrumbLimit: d,
                            mutationLimit: h,
                            slowClickTimeout: p,
                            slowClickIgnoreSelectors: f,
                            networkDetailAllowUrls: m,
                            networkDetailDenyUrls: y,
                            networkCaptureBodies: g,
                            networkRequestHeaders: rT(_),
                            networkResponseHeaders: rT(v),
                            beforeAddRecordingEvent: C,
                            beforeErrorSampling: R,
                            _experiments: a
                        }, this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${rI}` : rI), this._isInitialized && (0, B.j)()) throw Error("Multiple Sentry Session Replay instances are not supported");
                    this._isInitialized = !0
                }
                get _isInitialized() {
                    return rC
                }
                set _isInitialized(e) {
                    rC = e
                }
                setupOnce() {
                    (0, B.j)() && (this._setup(), setTimeout(() => this._initialize()))
                }
                start() {
                    this._replay && this._replay.start()
                }
                startBuffering() {
                    this._replay && this._replay.startBuffering()
                }
                stop() {
                    return this._replay ? this._replay.stop({
                        forceFlush: "session" === this._replay.recordingMode
                    }) : Promise.resolve()
                }
                flush(e) {
                    return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : Promise.resolve()
                }
                getReplayId() {
                    if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId()
                }
                _initialize() {
                    this._replay && (this._maybeLoadFromReplayCanvasIntegration(), this._replay.initializeSampling())
                }
                _setup() {
                    let e = function(e) {
                        let t = (0, S.s3)(),
                            r = t && t.getOptions(),
                            n = {
                                sessionSampleRate: 0,
                                errorSampleRate: 0,
                                ...(0, x.Jr)(e)
                            };
                        if (!r) return (0, D.Cf)(() => {
                            console.warn("SDK client is not available.")
                        }), n;
                        let i = (0, M.o)(r.replaysSessionSampleRate),
                            s = (0, M.o)(r.replaysOnErrorSampleRate);
                        return null == i && null == s && (0, D.Cf)(() => {
                            console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
                        }), null != i && (n.sessionSampleRate = i), null != s && (n.errorSampleRate = s), n
                    }(this._initialOptions);
                    this._replay = new rk({
                        options: e,
                        recordingOptions: this._recordingOptions
                    })
                }
                _maybeLoadFromReplayCanvasIntegration() {
                    try {
                        let e = (0, S.s3)().getIntegrationByName("ReplayCanvas");
                        if (!e) return;
                        this._replay._canvas = e.getOptions()
                    } catch (e) {}
                }
            }

            function rT(e) {
                return [...rM, ...e.map(e => e.toLowerCase())]
            }
            rx.__initStatic()
        }
    }
]);