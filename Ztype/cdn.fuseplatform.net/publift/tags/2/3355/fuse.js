! function(e) {
    "function" == typeof fuseDefine && fuseDefine.amd ? fuseDefine(e) : e()
}(function() {
    "use strict";

    function N(e) {
        return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function d(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function B(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, Z(i.key), i)
        }
    }

    function g(e, t, n) {
        return t && B(e.prototype, t), n && B(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function F(e, t, n) {
        return (t = Z(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function U(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && G(e, t)
    }

    function z(e) {
        return (z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function G(e, t) {
        return (G = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function W(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        t = e;
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function j(n) {
        var i = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var e, t = z(n);
            return W(this, i ? (e = z(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }

    function V(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var i, o, r, s, a = [],
                    u = !0,
                    c = !1;
                try {
                    if (r = (n = n.call(e)).next, 0 === t) {
                        if (Object(n) !== n) return;
                        u = !1
                    } else
                        for (; !(u = (i = r.call(n)).done) && (a.push(i.value), a.length !== t); u = !0);
                } catch (e) {
                    c = !0, o = e
                } finally {
                    try {
                        if (!u && null != n.return && (s = n.return(), Object(s) !== s)) return
                    } finally {
                        if (c) throw o
                    }
                }
                return a
            }
        }(e, t) || H(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function s(e) {
        return function(e) {
            if (Array.isArray(e)) return q(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || H(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function H(e, t) {
        var n;
        if (e) return "string" == typeof e ? q(e, t) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? q(e, t) : void 0
    }

    function q(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }

    function Z(e) {
        e = function(e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 === n) return ("string" === t ? String : Number)(e);
            if ("object" != typeof(n = n.call(e, t || "default"))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(e, "string");
        return "symbol" == typeof e ? e : String(e)
    }
    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(e, t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var n = Object(this),
                i = n.length >>> 0;
            if (0 != i)
                for (var o, r, t = 0 | t, s = Math.max(0 <= t ? t : i - Math.abs(t), 0); s < i;) {
                    if ((o = n[s]) === (r = e) || "number" == typeof o && "number" == typeof r && isNaN(o) && isNaN(r)) return !0;
                    s++
                }
            return !1
        }
    }), "undefined" != typeof window && window.NodeList && !window.NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), Array.prototype.flat || Object.defineProperty(Array.prototype, "flat", {
        configurable: !0,
        value: function n() {
            var i = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
            return i ? Array.prototype.reduce.call(this, function(e, t) {
                return Array.isArray(t) ? e.push.apply(e, n.call(t, i - 1)) : e.push(t), e
            }, []) : Array.prototype.slice.call(this)
        },
        writable: !0
    }), Array.prototype.flatMap || Object.defineProperty(Array.prototype, "flatMap", {
        configurable: !0,
        value: function(e) {
            return Array.prototype.map.apply(this, arguments).flat()
        },
        writable: !0
    });
    var Y = ["verbose", "debug", "info", "warn", "error", "off"],
        J = function() {
            function o(e, t, n) {
                var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "off";
                d(this, o), this.console = e, this.logName = t, this.fuseDob = n, this.logLevel = i, this.logs = []
            }
            return g(o, [{
                key: "setFuseDob",
                value: function(e) {
                    this.fuseDob = e
                }
            }, {
                key: "getTimestamp",
                value: function() {
                    return this.fuseDob ? " [".concat(Date.now() - this.fuseDob, "]") : ""
                }
            }, {
                key: "callLogMethod",
                value: function(e) {
                    if ("off" !== e) {
                        for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                        var o = ["[".concat(this.logName, "]-").concat(n[0]).concat(this.getTimestamp())].concat(s(n.slice(1)));
                        "warn" !== e && "error" !== e || (1e3 <= this.logs.length && (this.logs = []), this.logs.push({
                            level: e,
                            params: o
                        })), "error" !== e && Y.indexOf(e) < Y.indexOf(this.logLevel) || this.console["verbose" != e ? e : "debug"].apply(null, o)
                    }
                }
            }, {
                key: "error",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.callLogMethod("error", t)
                }
            }, {
                key: "warn",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.callLogMethod("warn", t)
                }
            }, {
                key: "log",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.callLogMethod("info", t)
                }
            }, {
                key: "info",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.callLogMethod("info", t)
                }
            }, {
                key: "debug",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.callLogMethod("debug", t)
                }
            }, {
                key: "setLogLevel",
                value: function(e) {
                    this.logLevel = e
                }
            }, {
                key: "getLogLevel",
                value: function() {
                    return this.logLevel
                }
            }, {
                key: "getLogs",
                value: function() {
                    return this.logs
                }
            }]), o
        }();

    function Q(e) {
        return "number" == typeof e && e == e
    }

    function h(e) {
        return null == e
    }

    function K(e) {
        return void 0 === e
    }

    function p(e) {
        return !h(e)
    }

    function X(e) {
        throw new Error("exhaustiveCheck(".concat(e, ") should not have been called"))
    }

    function $(e) {
        if (!(e instanceof Error)) throw e
    }
    var f = new(function() {
        function e() {
            d(this, e), this.sessionId = function() {
                for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 20, t = "", n = 0; n < e; ++n) t += Math.floor(16 * Math.random()).toString(16);
                return t
            }()
        }
        return g(e, [{
            key: "isInDebugMode",
            value: function() {
                return "true" === this.getQueryParam("fuse_debug")[1]
            }
        }, {
            key: "getWindowLocation",
            value: function() {
                if (!this.location) try {
                    this.location = this.getBrowserWindowObject().self.location
                } catch (e) {
                    this.location = this.getBrowserWindowObject().location
                }
                return this.location
            }
        }, {
            key: "getFuseDob",
            value: function() {
                return this.getBrowserWindowObject().performance.timing.navigationStart
            }
        }, {
            key: "getPackageMajorVersion",
            value: function() {
                return 2
            }
        }, {
            key: "getBrowserWindowObject",
            value: function() {
                return window.self
            }
        }, {
            key: "getQueryParam",
            value: function(t) {
                return this.getWindowLocation().search.split(/[?&]/).filter(function(e) {
                    return "" !== e
                }).map(function(e) {
                    return e.split("=")
                }).filter(function(e) {
                    return e[0] === t
                })[0] || []
            }
        }, {
            key: "getMainLogPrefix",
            value: function() {
                return "FUSE"
            }
        }, {
            key: "getLogLevel",
            value: function() {
                var e;
                return this.isInDebugMode() || p(this.fuseDebugger) ? "debug" : this.getQueryParam("fuse_log_level") && this.getQueryParam("fuse_log_level")[1] && (e = this.getQueryParam("fuse_log_level")[1], -1 !== Y.indexOf(e)) ? e : "off"
            }
        }, {
            key: "getLogger",
            value: function() {
                return this.logger || (this.logger = new J(this.getBrowserWindowObject().console, this.getMainLogPrefix(), this.getFuseDob(), this.getLogLevel())), this.logger
            }
        }, {
            key: "getFuseDebugger",
            value: function() {
                var e;
                return K(this.fuseDebugger) && (e = f.getBrowserWindowObject().fuseDebugger, this.fuseDebugger = null != e ? e : null, this.fuseDebugger) && (this.fuseDebugger.connect(), this.getLogger().debug("[MONITORING]: Debugger attached")), null != (e = this.fuseDebugger) ? e : void 0
            }
        }, {
            key: "getSessionId",
            value: function() {
                return this.sessionId
            }
        }]), e
    }());

    function ee(e, t) {
        e && t()
    }

    function te(e, t, n, i) {
        e && 0 < e ? (n.info("[DELAY]: Delaying by ".concat(e, "ms to ").concat(t)), setTimeout(i, e)) : i()
    }
    var n, v, b, ne = {
            isEdgeBrowser: function(e) {
                return /[E]dge/.test(e.navigator.userAgent)
            }
        },
        ie = f.getBrowserWindowObject(),
        oe = f.getLogger(),
        re = function(t, e) {
            oe.debug("[INIT]: Downloading library ".concat(t.name));
            var n, i, o = ie.document.createElement("script");
            o.async = !0, o.type = "text/javascript", t.id && (o.id = t.id), t.attributes && Object.keys(t.attributes).forEach(function(e) {
                o.setAttribute(e, t.attributes[e])
            }), "function" == typeof e && (o.readyState ? o.onreadystatechange = function() {
                "loaded" !== o.readyState && "complete" !== o.readyState || (o.onreadystatechange = null, e())
            } : o.onload = function() {
                e()
            }), o.src = "https:".concat(t.url).concat(t.file), t.query && (o.src = "".concat(o.src, "?").concat(t.query)), t.insertSelector ? (i = ie.document.querySelector(t.insertSelector)) ? i.appendChild(o) : oe.warn("[INIT]: Injection library ".concat(t.name, ". Element with selector ").concat(t.insertSelector, " not found")) : null != (n = (i = ie.document.getElementsByTagName("script")[0]).parentNode) && n.insertBefore(o, i)
        },
        se = ((e = n = n || {}).Desktop = "desktop", e.Tablet = "tablet", e.Mobile = "mobile", (e = v = v || {}).Chrome = "chrome", e.Safari = "safari", e.Opera = "opera", e.Edge = "edge", e.IE11 = "ie11", e.Firefox = "firefox", e.Other = "other", (e = b = b || {}).IOS = "ios", e.MacOS = "mac", e.Android = "android", e.Windows = "windows", e.Linux = "linux", e.ChromeOs = "chromeos", e.Other = "other", [{
            regex: /\sedg\//i,
            browser: v.Edge
        }, {
            regex: /edg([ea]|ios)/i,
            browser: v.Edge
        }, {
            regex: /opera/i,
            browser: v.Opera
        }, {
            regex: /opr\/|opios/i,
            browser: v.Opera
        }, {
            regex: /chrome|crios|crmo/i,
            browser: v.Chrome
        }, {
            regex: /firefox|iceweasel|fxios/i,
            browser: v.Firefox
        }, {
            regex: /safari|applewebkit/i,
            browser: v.Safari
        }]),
        ae = [{
            regex: /huawei/i,
            device: n.Mobile
        }, {
            regex: /nexus\s*(?:7|8|9|10).*/i,
            device: n.Tablet
        }, {
            regex: /ipad/i,
            device: n.Tablet
        }, {
            regex: /tablet(?! pc)/i,
            device: n.Tablet
        }, {
            regex: /(ipod|iphone)/i,
            device: n.Mobile
        }, {
            regex: /nexus\s*[0-6].*/i,
            device: n.Mobile
        }, {
            regex: /[^-]mobi/i,
            device: n.Mobile
        }],
        ue = [{
            os: b.MacOS,
            regex: /macintosh/i
        }, {
            os: b.IOS,
            regex: /(ipod|iphone|ipad)/i
        }, {
            os: b.Android,
            regex: /android/i
        }, {
            os: b.Windows,
            regex: /windows /i
        }, {
            os: b.Linux,
            regex: /linux/i
        }, {
            os: b.ChromeOs,
            regex: /CrOS/
        }],
        ce = function() {
            function t(e) {
                d(this, t), this.browserWindow = e, this.userAgent = e.navigator.userAgent, this.device = this.parseDevice(), this.browser = this.parseBrowser(), this.os = this.parseOperatingSystem()
            }
            return g(t, [{
                key: "parseDevice",
                value: function() {
                    var t = this,
                        e = ae.filter(function(e) {
                            return e.regex.test(t.userAgent)
                        });
                    return 0 < e.length ? e[0].device : null != (e = this.browserWindow.navigator.userAgentData) && e.mobile ? n.Mobile : n.Desktop
                }
            }, {
                key: "parseBrowser",
                value: function() {
                    var t = this,
                        e = se.filter(function(e) {
                            return e.regex.test(t.userAgent)
                        });
                    return 0 < e.length ? e[0].browser : v.Other
                }
            }, {
                key: "parseOperatingSystem",
                value: function() {
                    var t = this,
                        e = ue.filter(function(e) {
                            return e.regex.test(t.userAgent)
                        });
                    return 0 < e.length ? e[0].os : b.Other
                }
            }, {
                key: "getDevice",
                value: function() {
                    return this.device
                }
            }, {
                key: "getBrowser",
                value: function() {
                    return this.browser
                }
            }, {
                key: "getOperatingSystem",
                value: function() {
                    return this.os
                }
            }]), t
        }(),
        le = function() {
            function o(e, t) {
                var n, i = this,
                    e = (d(this, o), this.fuseDob = e, this.states = [], this.events = [], this.slotProblems = [], this.firstSlotLoaded = !1, this.firstSlotRenderEnded = !1, this.firstImpressionViewed = !1, Date.now());
                this._tagLoadedMs = e - this.getFuseDob(), this.states.push((F(n = {}, "tag_loaded", !0), F(n, "ts", e), F(n, "load_time_ms", this._tagLoadedMs), n)), t.onSlotLoaded.subscribe(function(e) {
                    i.firstSlotLoaded || (i.setStateStatus("gpt_first_slot_loaded"), i.firstSlotLoaded = !0), i.addAdEvent("gpt_slot_loaded_".concat(e.slot.getSlotElementId()))
                }), t.onSlotResponse.subscribe(function(e) {
                    i.firstSlotRenderEnded || (i.setStateStatus("gpt_first_slot_render_ended"), i.firstSlotRenderEnded = !0), i.addAdEvent("gpt_slot_render_ended_".concat(e.slot.getSlotElementId()))
                }), t.onImpressionViewable.subscribe(function(e) {
                    i.firstImpressionViewed || (i.setStateStatus("gpt_first_impression_viewable"), i.firstImpressionViewed = !0), i.addAdEvent("gpt_impression_viewable_".concat(e.slot.getSlotElementId()))
                })
            }
            return g(o, [{
                key: "getSlotProblems",
                value: function() {
                    return this.slotProblems
                }
            }, {
                key: "addSlotProblem",
                value: function(e) {
                    1e3 <= this.slotProblems.length && (this.slotProblems = this.slotProblems.slice(100)), this.slotProblems.push(Object.assign(Object.assign({}, e), {
                        time: this.getElapsedTime()
                    }))
                }
            }, {
                key: "getFuseDob",
                value: function() {
                    return this.fuseDob
                }
            }, {
                key: "getElapsedTime",
                value: function() {
                    return (new Date).getTime() - this.getFuseDob()
                }
            }, {
                key: "reportFirstGptRequest",
                value: function() {
                    this._firstGptRequestMs = this.getElapsedTime()
                }
            }, {
                key: "firstGptRequestMs",
                get: function() {
                    return this._firstGptRequestMs
                }
            }, {
                key: "reportCmpLoadFinish",
                value: function() {
                    this._cmpLoadFinishMs = this._cmpLoadFinishMs || this.getElapsedTime()
                }
            }, {
                key: "cmpLoadFinishMs",
                get: function() {
                    return this._cmpLoadFinishMs
                }
            }, {
                key: "cmpGdprCached",
                get: function() {
                    return Boolean(this._cmpGdprElapsedMs && this._cmpGdprElapsedMs <= 10)
                }
            }, {
                key: "reportCmpGdprDetermined",
                value: function() {
                    this._cmpGdprElapsedMs = this._cmpGdprElapsedMs || this.getElapsedTime() - this.cmpLoadFinishMs
                }
            }, {
                key: "cmpGdprElapsedMs",
                get: function() {
                    return this._cmpGdprElapsedMs
                }
            }, {
                key: "reportFirstZone",
                value: function() {
                    this._firstZoneMs = this._firstZoneMs || this.getElapsedTime()
                }
            }, {
                key: "firstZoneMs",
                get: function() {
                    return this._firstZoneMs
                }
            }, {
                key: "reportHbAuctionStart",
                value: function() {
                    this._hbAuctionStartMs = this._hbAuctionStartMs || this.getElapsedTime()
                }
            }, {
                key: "hbAuctionStartMs",
                get: function() {
                    return this._hbAuctionStartMs
                }
            }, {
                key: "tagLoadedMs",
                get: function() {
                    return this._tagLoadedMs
                }
            }, {
                key: "setStateStatus",
                value: function(e) {
                    var t, n = Date.now();
                    this.states.push((F(t = {}, e, !0), F(t, "ts", n), F(t, "load_time_ms", n - this.getFuseDob()), t))
                }
            }, {
                key: "addAdEvent",
                value: function(e, t) {
                    var n = Date.now();
                    this.events.push(Object.assign(Object.assign({
                        adEvent: e
                    }, t), {
                        ts: n,
                        event_time_ms: n - this.getFuseDob()
                    }))
                }
            }, {
                key: "getIsCmpPromptShown",
                value: function() {
                    return Boolean(this.states.find(function(e) {
                        return e.cmp_prompt_shown
                    }))
                }
            }]), o
        }();

    function de(e) {
        var t;
        return 1e4 <= e ? "over_9999" : (t = e < 4e3 ? 500 : 1e3, e = Math.floor(e / t) * t, "".concat(e, "-").concat(e + t - 1))
    }

    function ge() {
        return {
            _tag: "deferred"
        }
    }

    function he() {
        return {
            _tag: "disabled"
        }
    }

    function fe() {
        return {
            _tag: "cancelled"
        }
    }

    function pe(e, t) {
        return {
            _tag: "loading",
            loadStart: e,
            deferredLoad: 1 < arguments.length && void 0 !== t && t
        }
    }

    function ve(e, t, n) {
        return {
            _tag: "ready",
            loadStart: e.loadStart,
            loadFinish: t,
            loadElapsed: t - e.loadStart,
            deferredLoad: e.deferredLoad,
            output: n
        }
    }
    var be = function() {
        function i(e, t, n) {
            d(this, i), this.onComponentInitEvent = e, this.logger = t, this.reporter = n, this._state = {
                yandex: {
                    _tag: "pending"
                },
                gpt: {
                    _tag: "pending"
                },
                prebid: {
                    _tag: "pending"
                },
                cmp: {
                    _tag: "pending"
                },
                uam: {
                    _tag: "pending"
                },
                docReadyScan: {
                    _tag: "pending"
                }
            }
        }
        return g(i, [{
            key: "state",
            get: function() {
                return this._state
            }
        }, {
            key: "updateState",
            value: function(e, t) {
                this._state[e] = t, this.reporter.setStateStatus("component_init_".concat(e, "_").concat(t._tag)), "ready" === t._tag && this.logger.log("[INIT]: Component ".concat(e, " is ready")), this.onComponentInitEvent.emit({
                    component: e,
                    state: t
                })
            }
        }]), i
    }();

    function me(e) {
        return "disabled" == e._tag || "ready" === e._tag && e.output.allowPersonalisation
    }

    function ye(e) {
        return "ready" == e._tag ? e.output.jurisdiction : "unknown"
    }

    function Se(e) {
        return e.split("x").map(Number)
    }

    function ke(e) {
        var t = [1, 1];
        return e.forEach(function(e) {
            e[0] > t[0] && (t[0] = e[0]), e[1] > t[1] && (t[1] = e[1])
        }), t
    }

    function Ie(e, t) {
        return parseInt((100 * (e / t - 1)).toFixed())
    }

    function we(s, a) {
        a = a || {}, Qe(Ge(function() {
            function e(e) {
                e.forEach(function(e) {
                    var t, n;
                    e.hadRecentInput || (t = o[0], n = o[o.length - 1], i && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (i += e.value, o.push(e)) : (i = e.value, o = [e]))
                }), i > n.value && (n.value = i, n.entries = o, t())
            }
            var t, n = u("CLS", 0),
                i = 0,
                o = [],
                r = Fe("layout-shift", e);
            r && (t = c(s, n, Ke, a.reportAllChanges), ze(function() {
                e(r.takeRecords()), t(!0)
            }), Me(function() {
                n = u("CLS", i = 0), t = c(s, n, Ke, a.reportAllChanges), Ue(function() {
                    return t()
                })
            }), setTimeout(t, 0))
        }))
    }

    function Ee(s, a) {
        a = a || {}, Ye(function() {
            function e(e) {
                e.forEach(i)
            }
            var t = Ze(),
                n = u("FID"),
                i = function(e) {
                    e.startTime < t.firstHiddenTime && (n.value = e.processingStart - e.startTime, n.entries.push(e), r(!0))
                },
                o = Fe("first-input", e),
                r = c(s, n, ot, a.reportAllChanges);
            o && ze(Ge(function() {
                e(o.takeRecords()), o.disconnect()
            })), o && Me(function() {
                var e;
                n = u("FID"), r = c(s, n, ot, a.reportAllChanges), Re = [], _e = -1, Ae = null, it(addEventListener), e = i, Re.push(e), tt()
            })
        })
    }

    function Ce(o, r) {
        r = r || {}, Ye(function() {
            lt();

            function e(e) {
                e.forEach(function(t) {
                    t.interactionId && pt(t), "first-input" !== t.entryType || a.some(function(e) {
                        return e.entries.some(function(e) {
                            return t.duration === e.duration && t.startTime === e.startTime
                        })
                    }) || pt(t)
                }), e = Math.min(a.length - 1, Math.floor(ht() / 50)), (e = a[e]) && e.latency !== t.value && (t.value = e.latency, t.entries = e.entries, i())
            }
            var t = u("INP"),
                n = Fe("event", e, {
                    durationThreshold: r.durationThreshold || 40
                }),
                i = c(o, t, dt, r.reportAllChanges);
            n && (n.observe({
                type: "first-input",
                buffered: !0
            }), ze(function() {
                e(n.takeRecords()), t.value < 0 && 0 < ht() && (t.value = 0, t.entries = []), i(!0)
            }), Me(function() {
                a = [], gt = ct(), t = u("INP"), i = c(o, t, dt, r.reportAllChanges)
            }))
        })
    }

    function Te(s, a) {
        a = a || {}, Ye(function() {
            function e(e) {
                (e = e[e.length - 1]) && e.startTime < i.firstHiddenTime && (o.value = Math.max(e.startTime - Be(), 0), o.entries = [e], t())
            }
            var t, n, i = Ze(),
                o = u("LCP"),
                r = Fe("largest-contentful-paint", e);
            r && (t = c(s, o, vt, a.reportAllChanges), n = Ge(function() {
                bt[o.id] || (e(r.takeRecords()), r.disconnect(), bt[o.id] = !0, t(!0))
            }), ["keydown", "click"].forEach(function(e) {
                addEventListener(e, n, !0)
            }), ze(n), Me(function(e) {
                o = u("LCP"), t = c(s, o, vt, a.reportAllChanges), Ue(function() {
                    o.value = performance.now() - e.timeStamp, bt[o.id] = !0, t(!0)
                })
            }))
        })
    }
    var Ae, _e, Pe, Re, Oe, De = function(e) {
            return e[0] + "x" + e[1]
        },
        xe = function(e, t) {
            for (var n = [], i = new Set(t), o = 0, r = e.length; o < r; ++o) i.has(e[o]) && n.push(e[o]);
            return n
        },
        Le = -1,
        Me = function(t) {
            addEventListener("pageshow", function(e) {
                e.persisted && (Le = e.timeStamp, t(e))
            }, !0)
        },
        Ne = function() {
            return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
        },
        Be = function() {
            var e = Ne();
            return e && e.activationStart || 0
        },
        u = function(e, t) {
            var n = Ne(),
                i = "navigate";
            return 0 <= Le ? i = "back-forward-cache" : n && (document.prerendering || 0 < Be() ? i = "prerender" : document.wasDiscarded ? i = "restore" : n.type && (i = n.type.replace(/_/g, "-"))), {
                name: e,
                value: void 0 === t ? -1 : t,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                navigationType: i
            }
        },
        Fe = function(e, t, n) {
            try {
                var i;
                if (PerformanceObserver.supportedEntryTypes.includes(e)) return (i = new PerformanceObserver(function(e) {
                    Promise.resolve().then(function() {
                        t(e.getEntries())
                    })
                })).observe(Object.assign({
                    type: e,
                    buffered: !0
                }, n || {})), i
            } catch (e) {}
        },
        c = function(t, n, i, o) {
            var r, s;
            return function(e) {
                0 <= n.value && (e || o) && ((s = n.value - (r || 0)) || void 0 === r) && (r = n.value, n.delta = s, n.rating = (e = n.value) > i[1] ? "poor" : e > i[0] ? "needs-improvement" : "good", t(n))
            }
        },
        Ue = function(e) {
            requestAnimationFrame(function() {
                return requestAnimationFrame(function() {
                    return e()
                })
            })
        },
        ze = function(t) {
            function e(e) {
                "pagehide" !== e.type && "hidden" !== document.visibilityState || t(e)
            }
            addEventListener("visibilitychange", e, !0), addEventListener("pagehide", e, !0)
        },
        Ge = function(t) {
            var n = !1;
            return function(e) {
                n || (t(e), n = !0)
            }
        },
        We = -1,
        je = function() {
            return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
        },
        Ve = function(e) {
            "hidden" === document.visibilityState && -1 < We && (We = "visibilitychange" === e.type ? e.timeStamp : 0, qe())
        },
        He = function() {
            addEventListener("visibilitychange", Ve, !0), addEventListener("prerenderingchange", Ve, !0)
        },
        qe = function() {
            removeEventListener("visibilitychange", Ve, !0), removeEventListener("prerenderingchange", Ve, !0)
        },
        Ze = function() {
            return We < 0 && (We = je(), He(), Me(function() {
                setTimeout(function() {
                    We = je(), He()
                }, 0)
            })), {
                get firstHiddenTime() {
                    return We
                }
            }
        },
        Ye = function(e) {
            document.prerendering ? addEventListener("prerenderingchange", function() {
                return e()
            }, !0) : e()
        },
        Je = [1800, 3e3],
        Qe = function(r, s) {
            s = s || {}, Ye(function() {
                var t, n = Ze(),
                    i = u("FCP"),
                    o = Fe("paint", function(e) {
                        e.forEach(function(e) {
                            "first-contentful-paint" === e.name && (o.disconnect(), e.startTime < n.firstHiddenTime) && (i.value = Math.max(e.startTime - Be(), 0), i.entries.push(e), t(!0))
                        })
                    });
                o && (t = c(r, i, Je, s.reportAllChanges), Me(function(e) {
                    i = u("FCP"), t = c(r, i, Je, s.reportAllChanges), Ue(function() {
                        i.value = performance.now() - e.timeStamp, t(!0)
                    })
                }))
            })
        },
        Ke = [.1, .25],
        Xe = {
            passive: !0,
            capture: !0
        },
        $e = new Date,
        et = function(e, t) {
            Ae || (Ae = t, _e = e, Pe = new Date, it(removeEventListener), tt())
        },
        tt = function() {
            var t;
            0 <= _e && _e < Pe - $e && (t = {
                entryType: "first-input",
                name: Ae.type,
                target: Ae.target,
                cancelable: Ae.cancelable,
                startTime: Ae.timeStamp,
                processingStart: Ae.timeStamp + _e
            }, Re.forEach(function(e) {
                e(t)
            }), Re = [])
        },
        nt = function(e) {
            var t, n, i, o;

            function r() {
                et(n, i), o()
            }

            function s() {
                o()
            }
            e.cancelable && (t = (1e12 < e.timeStamp ? new Date : performance.now()) - e.timeStamp, "pointerdown" == e.type ? (n = t, i = e, o = function() {
                removeEventListener("pointerup", r, Xe), removeEventListener("pointercancel", s, Xe)
            }, addEventListener("pointerup", r, Xe), addEventListener("pointercancel", s, Xe)) : et(t, e))
        },
        it = function(t) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e) {
                return t(e, nt, Xe)
            })
        },
        ot = [100, 300],
        rt = 0,
        st = 1 / 0,
        at = 0,
        ut = function(e) {
            e.forEach(function(e) {
                e.interactionId && (st = Math.min(st, e.interactionId), at = Math.max(at, e.interactionId), rt = at ? (at - st) / 7 + 1 : 0)
            })
        },
        ct = function() {
            return Oe ? rt : performance.interactionCount || 0
        },
        lt = function() {
            "interactionCount" in performance || (Oe = Oe || Fe("event", ut, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            }))
        },
        dt = [200, 500],
        gt = 0,
        ht = function() {
            return ct() - gt
        },
        a = [],
        ft = {},
        pt = function(e) {
            var t = a[a.length - 1],
                n = ft[e.interactionId];
            (n || a.length < 10 || e.duration > t.latency) && (n ? (n.entries.push(e), n.latency = Math.max(n.latency, e.duration)) : (t = {
                id: e.interactionId,
                latency: e.duration,
                entries: [e]
            }, ft[t.id] = t, a.push(t)), a.sort(function(e, t) {
                return t.latency - e.latency
            }), a.splice(10).forEach(function(e) {
                delete ft[e.id]
            }))
        },
        vt = [2500, 4e3],
        bt = {},
        mt = [800, 1800],
        yt = function e(t) {
            document.prerendering ? Ye(function() {
                return e(t)
            }) : "complete" !== document.readyState ? addEventListener("load", function() {
                return e(t)
            }, !0) : setTimeout(t, 0)
        },
        St = function(e) {
            var t, n, i;
            return e && e.tagName && e.classList ? (t = e.tagName.toLowerCase(), n = e.id ? " #".concat(e.id) : "", i = 0 < e.classList.length ? " .".concat(e.classList.value) : "", e = (e = e.getAttribute("data-fuse")) ? ' [data-fuse="'.concat(e, '"]') : "", "".concat(t).concat(n).concat(i).concat(e)) : ""
        },
        kt = function() {
            function l(e, t, n, i, o, r, s, a, u) {
                var c = this;
                d(this, l), this.componentState = e, this.deviceInfo = t, this.logger = n, this.browserWindow = i, this.sessionId = o, this.reporter = r, this.requestMethod = s, this.backgroundRequestTimeout = 0, this.requestQueue = new Set, this.baseUrl = a.getFuseCDN(), this.fuseUuid = a.getFuseUUID(), this.fuseId = a.getFuseId(), this.publicationId = a.getPublicationId(), this.adServer = a.isYandexEnabled() ? "yandex" : "gpt", this.tenantId = a.getTenantCode(), a.getUseTelemetry() && u.onSlotRequested.subscribe(function(e) {
                    var t = e.slot.getAdUnitPath(),
                        e = a.getFuseSlots().filter(function(e) {
                            return e.slot === t
                        })[0];
                    e && c.recordSlotRequest(e.id)
                })
            }
            return g(l, [{
                key: "recordSlotRequest",
                value: function(e) {
                    var t = "slot-request",
                        n = this.makeUrl(t, {
                            auid: e
                        }, this.getCmpData());
                    this.logDetails(e, t), this.requestMethod(n)
                }
            }, {
                key: "recordFuseLoad",
                value: function(e) {
                    this.requestMethod(this.makeUrl("fuse-load", {
                        sdi: e
                    }))
                }
            }, {
                key: "recordRogueBidderResponse",
                value: function(e, t, n) {
                    this.requestMethod(this.makeUrl("rogue-bidder-response", {
                        slotId: e,
                        bidder: t.bidder,
                        pbTrId: t.transactionId,
                        pbReqId: t.requestId,
                        pbAdId: t.adId,
                        pbCrId: t.creativeId,
                        pbSize: t.size,
                        size: De(n),
                        wDiff: Ie(t.width, n[0]),
                        hDiff: Ie(t.height, n[1])
                    }, this.getCmpData()))
                }
            }, {
                key: "recordRogueAdxResponse",
                value: function(e, t, n) {
                    var i = t.size;
                    this.requestMethod(this.makeUrl("rogue-bidder-response", {
                        slotId: e,
                        bidder: "adx",
                        pbAdId: null == (e = t.sourceAgnosticLineItemId) ? void 0 : e.toString(),
                        pbCrId: null == (e = t.sourceAgnosticCreativeId) ? void 0 : e.toString(),
                        pbSize: De(i),
                        size: De(n),
                        wDiff: Ie(i[0], n[0]),
                        hDiff: Ie(i[1], n[1])
                    }, this.getCmpData()))
                }
            }, {
                key: "prepareRecordingWebVitals",
                value: function() {
                    var e, n, i, o, r, s = this;
                    this.deviceInfo.getBrowser() !== v.Chrome ? this.logInfo("[WEB-VITALS]: Disabled web vitals recording for non-chrome browser") : (e = function(e) {
                        "LCP" === (e = e).name ? null != (n = e.entries[0]) && n.element && (t = St(e.entries[0].element)) : "CLS" === e.name && (t = (n = e.entries.reduce(function(e, t) {
                            return !e || t.value > e.value ? t : e
                        }, void 0)) ? St(null == (n = n.sources[n.sources.length - 1]) ? void 0 : n.node) : void 0);
                        var t, n = {
                            name: e.name,
                            value: "".concat(e.value),
                            rating: e.rating,
                            id: e.id,
                            delta: "".concat(e.delta),
                            element: t
                        };
                        s.logInfo("[WEB-VITALS]: ".concat(JSON.stringify(n))), s.queueBackgroundRequest("web-vitals", {
                            cwvRep: [n]
                        }, s.getCmpData())
                    }, this.logInfo("[WEB-VITALS]: Set up web vitals callbacks"), we(e, {
                        reportAllChanges: !0
                    }), Qe(e), Ee(e), Ce(e), Te(e, {
                        reportAllChanges: !0
                    }), n = e, i = i || {}, o = u("TTFB"), r = c(n, o, mt, i.reportAllChanges), yt(function() {
                        var e, t = Ne();
                        !t || (e = t.responseStart) <= 0 || e > performance.now() || (o.value = Math.max(e - Be(), 0), o.entries = [t], r(!0), Me(function() {
                            o = u("TTFB", 0), (r = c(n, o, mt, i.reportAllChanges))(!0)
                        }))
                    }))
                }
            }, {
                key: "prepareBackgroundRequestProcessor",
                value: function() {
                    var e = this;
                    this.browserWindow.addEventListener("visibilitychange", function() {
                        "hidden" === e.browserWindow.document.visibilityState && e.flushQueue()
                    })
                }
            }, {
                key: "logInfo",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.logger.info("".concat(t.map(function(e) {
                        return JSON.stringify(e)
                    })))
                }
            }, {
                key: "flushQueue",
                value: function() {
                    var e;
                    if (0 < this.requestQueue.size) {
                        this.logInfo("Flushing request queue");
                        var t, n, i = [],
                            o = function(e, t) {
                                var n, i, o, r, s = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (s) return i = !(n = !0), {
                                    s: function() {
                                        s = s.call(e)
                                    },
                                    n: function() {
                                        var e = s.next();
                                        return n = e.done, e
                                    },
                                    e: function(e) {
                                        i = !0, o = e
                                    },
                                    f: function() {
                                        try {
                                            n || null == s.return || s.return()
                                        } finally {
                                            if (i) throw o
                                        }
                                    }
                                };
                                if (Array.isArray(e) || (s = H(e)) || t && e && "number" == typeof e.length) return s && (e = s), r = 0, {
                                    s: t = function() {},
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: t
                                };
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(this.requestQueue);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var r = n.value;
                                "web-vitals" === r.eventType && null != (e = r.record) && e.cwvRep ? (i.push.apply(i, s(r.record.cwvRep)), r.cmpData && (t = r.cmpData)) : this.requestMethod(this.makeUrl(r.eventType, r.record, r.cmpData))
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        if (i.length)
                            for (; i.length;) this.requestMethod(this.makeUrl("web-vitals", {
                                cwvRep: i.splice(0, 10)
                            }, t));
                        this.requestQueue.clear()
                    }
                }
            }, {
                key: "makeUrl",
                value: function(e, t, n) {
                    var i = n && !["none", "unknown"].includes(n.jurisdiction) && null != n && n.personalisation ? "consent" : "noconsent",
                        t = this.buildQueryParameters(Object.assign(Object.assign(Object.assign({}, t), {
                            cmpj: null == n ? void 0 : n.jurisdiction,
                            cmpdialog: null == n ? void 0 : n.dialogShown
                        }), this.getCommonMetadata(e))),
                        n = "https:".concat(this.baseUrl);
                    return "https://".concat(this.getHostName(n), "/telemetry/").concat(i).concat(t)
                }
            }, {
                key: "queueBackgroundRequest",
                value: function(e, t, n) {
                    var i = this;
                    this.requestQueue.add({
                        eventType: e,
                        record: t,
                        cmpData: n
                    }), clearTimeout(this.backgroundRequestTimeout), this.backgroundRequestTimeout = setTimeout(function() {
                        i.flushQueue()
                    }, 5e3)
                }
            }, {
                key: "logDetails",
                value: function(e, t) {
                    this.logger.debug("[STATS]: Record ".concat(t, " event for fuse ").concat(this.fuseId, ", ad ").concat(e, " on device ").concat(this.deviceInfo.getDevice(), " and browser ").concat(this.deviceInfo.getBrowser()))
                }
            }, {
                key: "buildQueryParameters",
                value: function(e) {
                    return Object.entries(e).reduce(function(e, t) {
                        var t = V(t, 2),
                            n = t[0],
                            t = t[1];
                        return t ? ("object" === N(t) && (t = JSON.stringify(t)), "".concat(e ? e + "&" : "?").concat(encodeURIComponent(n), "=").concat(encodeURIComponent(t))) : e
                    }, "")
                }
            }, {
                key: "getCommonMetadata",
                value: function(e) {
                    var t = [this.browserWindow.location.href, this.getReferrer()],
                        n = t[0],
                        t = t[1];
                    return {
                        v: "1",
                        ttm: Date.now(),
                        cookie: this.browserWindow.navigator.cookieEnabled,
                        res: "".concat(screen.width, "x").concat(screen.height),
                        device: this.deviceInfo.getDevice(),
                        browser: this.deviceInfo.getBrowser(),
                        fuuid: this.fuseUuid,
                        fid: this.fuseId,
                        pubid: this.publicationId,
                        url: this.purify(n),
                        refr: this.purify(t),
                        sid: this.sessionId,
                        srate: 100,
                        adserver: this.adServer,
                        etm: this.reporter.getElapsedTime(),
                        e: e,
                        tenant: this.tenantId,
                        sd: this.browserWindow.scrollY
                    }
                }
            }, {
                key: "getCmpData",
                value: function() {
                    var e = this.componentState.state.cmp;
                    return {
                        jurisdiction: ye(e),
                        personalisation: me(e),
                        dialogShown: this.reporter.getIsCmpPromptShown()
                    }
                }
            }, {
                key: "getHostName",
                value: function(e) {
                    var t = /^(?:(?:https?|ftp):)\/*(?:[^@]+@)?([^:/#]+)/.exec(e);
                    return t ? t[1] : e
                }
            }, {
                key: "getParameter",
                value: function(e, t) {
                    e = /^(?:https?|ftp)(?::\/*(?:[^?]+))([?][^#]+)/.exec(e);
                    return e && 1 < (null == e ? void 0 : e.length) ? this.fromQuerystring(t, e[1]) : null
                }
            }, {
                key: "fromQuerystring",
                value: function(e, t) {
                    e = new RegExp("^[^#]*[?&]" + e + "=([^&#]*)").exec(t);
                    return e ? decodeURIComponent(e[1].replace(/\+/g, " ")) : null
                }
            }, {
                key: "getReferrer",
                value: function(e) {
                    var t = this.fromQuerystring("referrer", this.browserWindow.location.href) || this.fromQuerystring("referer", this.browserWindow.location.href);
                    if (t) return t;
                    if (e) return e;
                    try {
                        if (this.browserWindow.top) return this.browserWindow.top.document.referrer;
                        if (this.browserWindow.parent) return this.browserWindow.parent.document.referrer
                    } catch (e) {}
                    return this.browserWindow.document.referrer
                }
            }, {
                key: "purify",
                value: function(e) {
                    return e.replace(/#.*/, "").replace(/[{}]/g, "")
                }
            }]), l
        }(),
        It = function() {
            function t(e) {
                d(this, t), this.initialiser = e, this._field = null
            }
            return g(t, [{
                key: "field",
                get: function() {
                    var e;
                    return null != (e = this._field) ? e : this._field = this.initialiser()
                }
            }]), t
        }();

    function wt(e) {
        return function() {
            return new It(e).field
        }
    }

    function Et(e) {
        var t = zt(e);
        if (!h(t) && "" !== t) {
            if ("true" === t || "false" === t) return "true" === t;
            var n = parseInt(t, 10);
            if (Number.isInteger(n)) return n;
            Lt.info("[SETTINGS] Could not parse ".concat(e, " with value: ").concat(t, " as a number"))
        }
    }
    var Ct = function() {
            function n(e, t) {
                d(this, n), this.logger = e, this.eventName = t, this.subscribers = [], this.lastEmitted = null, this.wrapped = []
            }
            return g(n, [{
                key: "subscribe",
                value: function(e) {
                    this.subscribers.push(e)
                }
            }, {
                key: "_unsubscribe",
                value: function(e) {
                    e = this.subscribers.indexOf(e);
                    return 0 <= e && (this.subscribers.splice(e, 1), !0)
                }
            }, {
                key: "unsubscribe",
                value: function(e) {
                    var t = this.findWrapper(e);
                    return t ? this._unsubscribe(t) : this._unsubscribe(e)
                }
            }, {
                key: "findWrapper",
                value: function(t) {
                    var e;
                    return null == (e = this.wrapped.filter(function(e) {
                        return e.subscriber === t
                    }).shift()) ? void 0 : e.wrapper
                }
            }, {
                key: "once",
                value: function(t) {
                    function n(e) {
                        t(e), i.unsubscribe(n)
                    }
                    var i = this;
                    this.subscribe(n), this.wrapped.push({
                        wrapper: n,
                        subscriber: t
                    })
                }
            }, {
                key: "immediateOrOnce",
                value: function(e) {
                    return p(this.lastEmitted) ? (this.logger.debug("[EVENT][".concat(this.eventName, "]: Already triggered, invoking callback synchronously")), e(this.lastEmitted), !0) : (this.once(e), !1)
                }
            }, {
                key: "emit",
                value: function(t) {
                    var n = this,
                        e = this.subscribers.length;
                    0 < e ? this.logger.debug("[EVENT][".concat(this.eventName, "]: Fired, start processing ").concat(e, " callbacks")) : this.logger.debug("[EVENT][".concat(this.eventName, "]: Fired, no pending callbacks")), this.lastEmitted = t, this.subscribers.map(function(e) {
                        return e
                    }).forEach(function(e) {
                        try {
                            e(t)
                        } catch (e) {
                            e instanceof Error ? n.logger.error("[EVENT][".concat(n.eventName, "]: Caught exception in callback with item ").concat(t), e.message, e.stack) : n.logger.error("[EVENT][".concat(n.eventName, "]: Caught exception of invalid type in callback with item ").concat(t))
                        }
                    })
                }
            }, {
                key: "getSubscriberCount",
                value: function() {
                    return this.subscribers.length
                }
            }]), n
        }(),
        Tt = function() {
            function r(e, t, n, i) {
                var o = this;
                d(this, r), this.logger = e, this.eventName = t, this.source = n, this.filter = i, this.delegate = new Ct(e, t), n.subscribe(function(e) {
                    e = o.filter(e);
                    p(e) && o.delegate.emit(e)
                })
            }
            return g(r, [{
                key: "subscribe",
                value: function(e) {
                    this.delegate.subscribe(e)
                }
            }, {
                key: "unsubscribe",
                value: function(e) {
                    this.delegate.unsubscribe(e)
                }
            }, {
                key: "once",
                value: function(e) {
                    this.delegate.once(e)
                }
            }, {
                key: "immediateOrOnce",
                value: function(e) {
                    return this.delegate.immediateOrOnce(e)
                }
            }]), r
        }(),
        m = new(function() {
            function n(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function() {};
                d(this, n), this.logger = e, this.addDebugProxy = t, this.emitters = {}, this.observables = {}
            }
            return g(n, [{
                key: "onTagInitComplete",
                get: function() {
                    return this.getEmitter("onTagInitComplete")
                }
            }, {
                key: "pageInitObservable",
                get: function() {
                    return this.onPageInit
                }
            }, {
                key: "onPageInit",
                get: function() {
                    return this.getEmitter("onPageInit")
                }
            }, {
                key: "onPageReset",
                get: function() {
                    return this.getEmitter("onPageReset")
                }
            }, {
                key: "onZoneEvent",
                get: function() {
                    return this.getEmitter("onZoneEvent")
                }
            }, {
                key: "onAuctionEvent",
                get: function() {
                    return this.getEmitter("onAuctionEvent")
                }
            }, {
                key: "onZoneRegistered",
                get: function() {
                    return this.getFiltered("register_zone", this.onZoneEvent, function(e) {
                        return "registered" == e.zoneEventType ? e : null
                    })
                }
            }, {
                key: "onZoneActivateApi",
                get: function() {
                    return this.getFiltered("activate_zone_api", this.onZoneEvent, function(e) {
                        return "activate_zone_api" == e.zoneEventType ? e : null
                    })
                }
            }, {
                key: "activateZoneCalledObservable",
                get: function() {
                    return this.onZoneActivateApi
                }
            }, {
                key: "onComponentInitEvent",
                get: function() {
                    return this.getEmitter("onComponentInitEvent")
                }
            }, {
                key: "onInitManagerReady",
                get: function() {
                    return this.getEmitter("onInitManagerReady")
                }
            }, {
                key: "onWindowResized",
                get: function() {
                    return this.getEmitter("onWindowResized")
                }
            }, {
                key: "onSlotLoaded",
                get: function() {
                    return this.getEmitter("onSlotLoaded")
                }
            }, {
                key: "onSlotRender",
                get: function() {
                    return this.getEmitter("onSlotRender")
                }
            }, {
                key: "onSlotResponse",
                get: function() {
                    return this.getEmitter("onSlotResponse")
                }
            }, {
                key: "onSlotRequested",
                get: function() {
                    return this.getEmitter("onSlotRequested")
                }
            }, {
                key: "onImpressionViewable",
                get: function() {
                    return this.getEmitter("onImpressionViewable")
                }
            }, {
                key: "onBreakpointChanged",
                get: function() {
                    return this.getFiltered("onBreakpointChanged", this.onWindowResized, function(e) {
                        return e.crossedBp ? e : null
                    })
                }
            }, {
                key: "getEmitter",
                value: function(e) {
                    var t, n = new Ct(this.logger(), e),
                        i = this.addDebugProxy(),
                        i = i ? i(n) : n;
                    return null != (t = (n = this.emitters)[e]) ? t : n[e] = i
                }
            }, {
                key: "getFiltered",
                value: function(e, t, n) {
                    var i, o;
                    return null != (i = (o = this.observables)[e]) ? i : o[e] = new Tt(this.logger(), e, t, n)
                }
            }]), n
        }())(wt(function() {
            return f.getLogger()
        }), wt(function() {
            var e;
            return null == (e = f.getFuseDebugger()) ? void 0 : e.fuseEventEmitterWrapper()
        })),
        At = function() {
            function t(e) {
                d(this, t), this.options = {
                    capture: !0,
                    passive: !0
                }, this.window = e.api.viewportInfo.browserWindow, this.triggeredCB = e.onTriggeredCB, this.window.addEventListener("scroll", this.triggeredCB, this.options)
            }
            return g(t, [{
                key: "destroy",
                value: function() {
                    this.window.removeEventListener("scroll", this.triggeredCB, this.options)
                }
            }]), t
        }(),
        _t = "InView",
        Pt = function() {
            function t(e) {
                d(this, t), this.params = e, this.name = _t
            }
            return g(t, [{
                key: "buildTriggers",
                value: function(e) {
                    return [new At(e)]
                }
            }, {
                key: "check",
                value: function(e, t) {
                    e = t.slotRegistry.getSlot(e);
                    return !!e && (t = t.viewportInfo.getCurrentBreakpoint().name, !(!h(t = this.params[t]) && !1 !== t) || e.isInView(t))
                }
            }]), t
        }(),
        Rt = function() {
            function o(t, e, n) {
                d(this, o);

                function i(e) {
                    n(e) && t.onTriggeredCB()
                }
                this.unsubscribe = function() {
                    return e.unsubscribe(i)
                }, e.subscribe(i)
            }
            return g(o, [{
                key: "destroy",
                value: function() {
                    this.unsubscribe()
                }
            }]), o
        }(),
        Ot = function() {
            U(o, Rt);
            var i = j(o);

            function o(e) {
                d(this, o);
                var t = e.api.slotRegistry.getSlot(e.id).zoneInstanceId,
                    n = e.api.events.onZoneActivateApi;
                return i.call(this, e, n, function(e) {
                    return e.instanceId === t
                })
            }
            return g(o)
        }(),
        Dt = "ManualActivate",
        xt = function() {
            function e() {
                d(this, e), this.name = Dt
            }
            return g(e, [{
                key: "buildTriggers",
                value: function(e) {
                    return [new Ot(e)]
                }
            }, {
                key: "check",
                value: function(e, t) {
                    e = null == (e = t.slotRegistry.getSlot(e)) ? void 0 : e.zoneInstanceId;
                    return p(e) && t.zoneRegistry.isManuallyActivated(e)
                }
            }]), e
        }(),
        Lt = f.getLogger(),
        Mt = function() {
            return t("fuseDelayQuantcastInit")
        },
        Nt = function() {
            return t("fuseDelayGptInit")
        },
        Bt = function() {
            return t("fuseDelayPrebidInit")
        },
        Ft = function() {
            return t("fuseDelayUamInit")
        },
        t = function(e) {
            var t = f.getQueryParam(e)[1];
            if (t) {
                var n = parseInt(t);
                if (Number.isInteger(n)) return n;
                Lt.info("[SETTINGS]: Could not parse ".concat(e, " with value ").concat(t, " as a number"))
            }
            return null
        },
        Ut = function(e) {
            var t, n = f.getQueryParam(e)[1];
            return h(n) ? null : (h(t = /^(false|true|1|0)$/i.test(n) ? Boolean(/^(true|1)$/i.test(n)) : null) && Lt.info("[SETTINGS] Could not parse ".concat(e, " with value: ").concat(n, " as a boolean")), t)
        },
        zt = function(e) {
            return f.getQueryParam(e)[1] || ""
        },
        Gt = {
            fuse_blocked_url: [],
            fuse_breakpoints: {
                l: 1080,
                m: 780,
                s: 600,
                xl: 1500,
                xs: 0
            },
            fuse_cdn: "//cdn.fuseplatform.net/publift/tags/",
            fuse_id: 3355,
            fuse_industry: ["IAB19"],
            fuse_settings: {
                adblock: !1,
                amazonUam: {
                    enabled: !0,
                    pubID: "8b48e249-e9e6-4a52-8b48-396ea93403e8"
                },
                blockthrough: !0,
                cmp: "script",
                cmpProvider: {
                    partner: "quantcast"
                },
                confiant: !1,
                disableAutoLoadSlots: !1,
                disableGdprPersonalisation: !1,
                enableAutoRegistration: !1,
                enableMiniScrollers: !1,
                fuse_test_urls: [],
                headerbidding: 1e3,
                id5: {
                    enabled: !1
                },
                identity: {
                    enabled: !1
                },
                in2wInjection: 5,
                inskinWidth: 1200,
                networkCode: "71161633",
                onLoadCallback: "",
                prebid: {
                    analytics: [],
                    breakpoint_options: {
                        l: {
                            enabled: !0,
                            timeout: 1e3
                        },
                        m: {
                            enabled: !0,
                            timeout: 1e3
                        },
                        s: {
                            enabled: !0,
                            timeout: 1e3
                        },
                        xl: {
                            enabled: !0,
                            timeout: 1e3
                        },
                        xs: {
                            enabled: !0,
                            timeout: 1e3
                        }
                    },
                    defaultTimeout: 1e3,
                    enabled: !0,
                    sendAllBids: !1
                },
                quickstart: !1,
                responsive: !0,
                strict_cmp: !1,
                telemetry: "default",
                topStickyHeaderSelector: "",
                useBidCache: 5,
                useDomObserver: !1,
                useGptPreAuctionModule: 5,
                useId5: 5,
                useIndustry: 5,
                videoSettings: {
                    enabled: !1
                },
                yandex: !1,
                yandexBlockId: ""
            },
            fuse_slots: [{
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    miniscroller: !1,
                    refresh: 30,
                    scrollToStick: !1,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "33across",
                    params: {
                        productId: "siab",
                        siteId: "aNXTtiwiyr7Oo3rkHcnlxd"
                    }
                }, {
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "31200685"
                    }
                }, {
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1107998
                    }
                }, {
                    bidSizes: ["160x600"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "01HB4TA85HJH2WB64C8XDP9VHF_1486316_160x600",
                        zoneId: 1486316
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "01HB4TA85HJH2WB64C8XDP9VHF_1486321_300x250",
                        zoneId: 1486321
                    }
                }, {
                    bidSizes: ["300x600"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "01HB4TA85HJH2WB64C8XDP9VHF_1486322_300x600",
                        zoneId: 1486322
                    }
                }, {
                    bidSizes: ["336x280"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "01HB4TA85HJH2WB64C8XDP9VHF_1486323_336x280",
                        zoneId: 1486323
                    }
                }, {
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "ix",
                    params: {
                        siteId: "1043171"
                    }
                }, {
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "559774217"
                    }
                }, {
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/ZTYPE_ztype/sidebar_vrec_lhs",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "rubicon",
                    params: {
                        accountId: "11504",
                        siteId: "513338",
                        zoneId: "3081248"
                    }
                }, {
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Zty_StandardDisplay"
                    }
                }],
                dynamicAttributes: {
                    each: 0,
                    incrementEach: 0,
                    position: "in",
                    repeatHeight: 1e3,
                    skip: 0
                },
                id: "22995983757",
                interscrollerAttributes: {
                    showBanner: !1,
                    zIndex: 0
                },
                mediaTypes: [],
                sizeMapping: {
                    l: [
                        [120, 600],
                        [160, 600],
                        [300, 250],
                        [300, 600]
                    ],
                    m: [
                        [120, 600],
                        [160, 600],
                        [300, 600]
                    ],
                    s: [],
                    xl: [
                        [120, 600],
                        [160, 600],
                        [300, 250],
                        [300, 600],
                        [336, 280]
                    ],
                    xs: []
                },
                sizes: [
                    [120, 600],
                    [160, 600],
                    [300, 250],
                    [300, 600],
                    [336, 280]
                ],
                slot: "/71161633,58441731/ZTYPE_ztype/sidebar_vrec_lhs",
                stickyAttributes: {
                    allowClose: !1,
                    allowReopen: !1,
                    bgOpacity: 0,
                    compact: !1,
                    isButtonOutside: !1,
                    isHideForever: !1,
                    isTop: !1,
                    scrollCreative: !1
                }
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    miniscroller: !1,
                    refresh: 30,
                    scrollToStick: !1,
                    sticky: !0
                },
                bids: [{
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "31200686"
                    }
                }],
                dynamicAttributes: {
                    each: 0,
                    incrementEach: 0,
                    position: "in",
                    repeatHeight: 1e3,
                    skip: 0
                },
                id: "22996796834",
                interscrollerAttributes: {
                    showBanner: !1,
                    zIndex: 0
                },
                mediaTypes: [],
                sizeMapping: {
                    m: [],
                    s: [],
                    xs: []
                },
                sizes: [],
                slot: "/71161633,58441731/ZTYPE_ztype/sticky_footer",
                stickyAttributes: {
                    allowClose: !0,
                    allowReopen: !0,
                    bgOpacity: 0,
                    compact: !1,
                    isButtonOutside: !0,
                    isHideForever: !1,
                    isTop: !1,
                    scrollCreative: !1
                }
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    miniscroller: !1,
                    refresh: 30,
                    scrollToStick: !1,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "33across",
                    params: {
                        productId: "siab",
                        siteId: "aNXTtiwiyr7Oo3rkHcnlxd"
                    }
                }, {
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "31200684"
                    }
                }, {
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1107998
                    }
                }, {
                    bidSizes: ["160x600"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "01HB4TA85G9BFVQ2J4YHG9K24A_1486316_160x600",
                        zoneId: 1486316
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "01HB4TA85G9BFVQ2J4YHG9K24A_1486321_300x250",
                        zoneId: 1486321
                    }
                }, {
                    bidSizes: ["300x600"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "01HB4TA85G9BFVQ2J4YHG9K24A_1486322_300x600",
                        zoneId: 1486322
                    }
                }, {
                    bidSizes: ["336x280"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "01HB4TA85G9BFVQ2J4YHG9K24A_1486323_336x280",
                        zoneId: 1486323
                    }
                }, {
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "ix",
                    params: {
                        siteId: "1043171"
                    }
                }, {
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "559774217"
                    }
                }, {
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/ZTYPE_ztype/sidebar_vrec_rhs",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "rubicon",
                    params: {
                        accountId: "11504",
                        siteId: "513338",
                        zoneId: "3081248"
                    }
                }, {
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["120x600", "160x600", "300x250", "300x600", "336x280"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Zty_StandardDisplay"
                    }
                }],
                id: "22996805138",
                sizeMapping: {
                    l: [
                        [120, 600],
                        [160, 600],
                        [300, 250],
                        [300, 600]
                    ],
                    m: [],
                    s: [],
                    xl: [
                        [120, 600],
                        [160, 600],
                        [300, 250],
                        [300, 600],
                        [336, 280]
                    ],
                    xs: []
                },
                sizes: [
                    [120, 600],
                    [160, 600],
                    [300, 250],
                    [300, 600],
                    [336, 280]
                ],
                slot: "/71161633,58441731/ZTYPE_ztype/sidebar_vrec_rhs"
            }],
            fuse_tenant: "publift",
            fuse_uuid: "9e15d690-0892-54f4-8c89-639fb5d8ecf0",
            sco: {
                asi: "publift.com",
                sellerId: "01HANABEN8EWXBQRPSJZXZHFSE"
            },
            supported_sizes: {
                l: [
                    [120, 600],
                    [160, 600],
                    [300, 250],
                    [300, 600]
                ],
                m: [
                    [120, 600],
                    [160, 600],
                    [300, 600]
                ],
                s: [],
                xl: [
                    [120, 600],
                    [160, 600],
                    [300, 250],
                    [300, 600],
                    [336, 280]
                ],
                xs: []
            },
            tenantId: "DGKSPXNV53",
            fuse_flavour: "default",
            publication_metadata: {
                publication_id: 9,
                generation_version: "4.129741.0",
                generation_time: "2023-10-23T05:18:10.556Z",
                revision: "v4"
            },
            fuse_prebid_hash: "633563ba759ea70f65d68f48780c2eee"
        },
        Wt = new(function() {
            function t(e) {
                d(this, t), this.myWindow = e
            }
            return g(t, [{
                key: "isDevelopmentMode",
                value: function() {
                    return 0 == Gt.publication_metadata.publication_id
                }
            }, {
                key: "getAccountSettings",
                value: function() {
                    var e = this.myWindow.field;
                    return this.isDevelopmentMode() && e.fuseConfig ? e.fuseConfig : Gt
                }
            }, {
                key: "getBreakpoints",
                value: function() {
                    var e = {},
                        t = this.getAccountSettings();
                    return t.fuse_breakpoints.xl && (e.xl = t.fuse_breakpoints.xl), t.fuse_breakpoints.l && (e.l = t.fuse_breakpoints.l), e.m = t.fuse_breakpoints.m, e.s = t.fuse_breakpoints.s, e.xs = t.fuse_breakpoints.xs, e
                }
            }, {
                key: "isUseBrowserOuterwidth",
                value: function() {
                    var e;
                    return null != (e = null != (e = Ut("fuseUseBrowserOuterwidth")) ? e : this.getAccountSettings().fuse_settings.isUseBrowserOuterwidth) && e
                }
            }]), t
        }())(new It(function() {
            return f.getBrowserWindowObject()
        })),
        jt = function() {
            function o(e, t) {
                var n, i = this;
                d(this, o), this.layer = e, this.logger = t, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.lastClickTime = 0, this.cancelNextClick = !1, this.touchBoundary = 10, this.tapDelay = 200, this.tapTimeout = 700, e.addEventListener("click", function(e) {
                    return i.onClick(e)
                }, !0), e.addEventListener("touchstart", function(e) {
                    return i.onTouchStart(e)
                }, !1), e.addEventListener("touchmove", function(e) {
                    return i.onTouchMove(e)
                }, !1), e.addEventListener("touchend", function(e) {
                    return i.onTouchEnd(e)
                }, !1), e.addEventListener("touchcancel", function() {
                    return i.onTouchCancel()
                }, !1), "function" == typeof e.onclick && (this.logger.debug("[FASTCLICK] re-using existing onclick"), n = e.onclick, e.addEventListener("click", function(e) {
                    n.call(i, e)
                }, !1), e.onclick = null), this.logger.debug("[FASTCLICK] FastClick enabled")
            }
            return g(o, [{
                key: "needsClick",
                value: function(e) {
                    switch (e.nodeName.toLowerCase()) {
                        case "button":
                        case "select":
                        case "textarea":
                            if (e.disabled) return !0;
                            break;
                        case "input":
                            if ("file" === e.type || e.disabled) return !0;
                            break;
                        case "label":
                        case "iframe":
                        case "video":
                            return !0
                    }
                    return /\bneedsclick\b/.test(e.className)
                }
            }, {
                key: "needsFocus",
                value: function(e) {
                    switch (e.nodeName.toLowerCase()) {
                        case "textarea":
                        case "select":
                            return !0;
                        case "input":
                            switch (e.type) {
                                case "button":
                                case "checkbox":
                                case "file":
                                case "image":
                                case "radio":
                                case "submit":
                                    return !1
                            }
                            return !e.disabled && !e.readOnly;
                        default:
                            return /\bneedsfocus\b/.test(e.className)
                    }
                }
            }, {
                key: "sendClick",
                value: function(e, t) {
                    document.activeElement && document.activeElement !== e && document.activeElement.blur();
                    t = t.changedTouches[0], t = new MouseEvent("click", {
                        bubbles: !0,
                        cancelable: !0,
                        view: window,
                        screenX: t.screenX,
                        screenY: t.screenY,
                        clientX: t.clientX,
                        clientY: t.clientY,
                        ctrlKey: !1,
                        shiftKey: !1,
                        altKey: !1,
                        metaKey: !1,
                        button: 0,
                        relatedTarget: null
                    });
                    t.forwardedTouchEvent = !0, e.dispatchEvent(t), this.logger.debug("[FASTCLICK] Sent click event to element ".concat(e.tagName))
                }
            }, {
                key: "focus",
                value: function(e) {
                    var t;
                    e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type && "email" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
                }
            }, {
                key: "updateScrollParent",
                value: function(e) {
                    var t = e.fastClickScrollParent;
                    if (!t || !t.contains(e)) {
                        var n = e;
                        do {
                            if (n.scrollHeight > n.offsetHeight) {
                                t = n, e.fastClickScrollParent = n;
                                break
                            }
                        } while (n = n.parentElement)
                    }
                    t && (t.fastClickLastScrollTop = t.scrollTop)
                }
            }, {
                key: "getTargetElementFromEventTarget",
                value: function(e) {
                    return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
                }
            }, {
                key: "onTouchStart",
                value: function(e) {
                    if (!(1 < e.targetTouches.length)) {
                        var t = this.getTargetElementFromEventTarget(e.target),
                            n = e.targetTouches[0],
                            i = window.getSelection();
                        if (!i.rangeCount || i.isCollapsed) {
                            if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                            this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t), this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault()
                        }
                    }
                    return !0
                }
            }, {
                key: "touchHasMoved",
                value: function(e) {
                    var e = e.changedTouches[0],
                        t = this.touchBoundary;
                    return Math.abs(e.pageX - this.touchStartX) > t || Math.abs(e.pageY - this.touchStartY) > t
                }
            }, {
                key: "onTouchMove",
                value: function(e) {
                    return this.trackingClick && (this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0
                }
            }, {
                key: "findControl",
                value: function(e) {
                    return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
                }
            }, {
                key: "onTouchEnd",
                value: function(e) {
                    var t = this.targetElement;
                    if (!this.trackingClick) return !0;
                    if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0;
                    if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
                    this.cancelNextClick = !1, this.lastClickTime = e.timeStamp;
                    var n = this.trackingClickStart,
                        i = (this.trackingClick = !1, this.trackingClickStart = 0, t.tagName.toLowerCase());
                    if ("label" === i) {
                        var o = this.findControl(t);
                        o && (this.focus(t), t = o)
                    } else if (this.needsFocus(t)) return 100 < e.timeStamp - n || window.top !== window && "input" === i ? this.targetElement = null : (this.focus(t), this.sendClick(t, e), "select" !== i && (this.targetElement = null, e.preventDefault())), !1;
                    o = t.fastClickScrollParent;
                    return !(!o || o.fastClickLastScrollTop === o.scrollTop) || (this.needsClick(t) || (e.preventDefault(), this.sendClick(t, e)), !1)
                }
            }, {
                key: "onTouchCancel",
                value: function() {
                    this.trackingClick = !1, this.targetElement = null
                }
            }, {
                key: "onMouse",
                value: function(e) {
                    return !this.targetElement || !(!e.forwardedTouchEvent && e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) && (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), 1))
                }
            }, {
                key: "onClick",
                value: function(e) {
                    return this.trackingClick ? (this.targetElement = null, !(this.trackingClick = !1)) : "submit" === e.target.type && 0 === e.detail || ((e = this.onMouse(e)) || (this.targetElement = null), e)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.layer.removeEventListener("click", this.onClick, !0), this.layer.removeEventListener("touchstart", this.onTouchStart, !1), this.layer.removeEventListener("touchmove", this.onTouchMove, !1), this.layer.removeEventListener("touchend", this.onTouchEnd, !1), this.layer.removeEventListener("touchcancel", this.onTouchCancel, !1)
                }
            }]), o
        }(),
        Vt = function() {
            function n(e, t) {
                d(this, n), this.browserWindow = e, this.logger = t, this.isTouching = !1, this.isMonitoring = !1, this.monitorTouchDetect()
            }
            return g(n, [{
                key: "monitorTouchDetect",
                value: function() {
                    var e = this;
                    this.isMonitoring || (this.browserWindow.addEventListener("touchstart", function() {
                        e.isTouching = !0
                    }), this.browserWindow.addEventListener("touchend", function() {
                        e.isTouching = !1
                    }), this.browserWindow.addEventListener("touchcancel", function() {
                        e.isTouching = !1
                    }), this.isMonitoring = !0, this.logger.debug("[TOUCH]: Monitoring touch events"))
                }
            }, {
                key: "getIsTouching",
                value: function() {
                    return this.isTouching
                }
            }, {
                key: "waitForTouchEnd",
                value: function(e) {
                    var t = this;
                    if (!this.isTouching) return e();
                    var n = setInterval(function() {
                        if (t.logger.debug("[TOUCH]: Checking if user is touching"), !t.isTouching) return clearInterval(n), e()
                    }, 100)
                }
            }]), n
        }();

    function Ht(t, n, i) {
        function o() {
            var e = Date.now() - u;
            e < t && 0 <= e ? r = setTimeout(o, t - e) : (r = null, i || (c = n.apply(a, s), r) || (a = s = null))
        }
        var r, s, a, u, c;
        return function() {
            a = this, s = arguments, u = Date.now();
            var e = i && !r;
            return r = r || setTimeout(o, t), e && (c = n.apply(a, s), a = s = null), c
        }
    }
    var qt = function() {
        function r(e, t, n, i, o) {
            d(this, r), this.logger = e, this.browserWindow = t, this.breakpoints = n, this.onWindowResized = i, this.options = o, this.initBpWatch(), this.logger.debug("[VIEWPORT]: Initialised at breakpoint ".concat(this.getCurrentBreakpoint().name))
        }
        return g(r, [{
            key: "getCurrentBreakpoint",
            value: function() {
                return e = this.breakpoints, n = this.getViewportStatus().width, i = null, Object.entries(e).forEach(function(e) {
                    var e = V(e, 2),
                        t = e[0],
                        e = e[1];
                    e <= n && (!i || e > i.size) && (i = {
                        size: e,
                        name: t
                    })
                }), i;
                var e, n, i
            }
        }, {
            key: "breakpointSupplier",
            value: function() {
                return this.getCurrentBreakpoint.bind(this)
            }
        }, {
            key: "isNotXsBreakpoint",
            value: function() {
                return "xs" !== this.getCurrentBreakpoint().name
            }
        }, {
            key: "getViewportStatus",
            value: function() {
                var e = this.browserWindow;
                return {
                    width: this.options.isUseOuterwidth.field ? e.outerWidth : e.innerWidth,
                    innerHeight: e.innerHeight,
                    outerHeight: e.outerHeight,
                    hidden: e.document.hidden,
                    offset: {
                        x: e.scrollX,
                        y: e.scrollY
                    }
                }
            }
        }, {
            key: "initBpWatch",
            value: function() {
                var i = this,
                    o = this.getCurrentBreakpoint().size;
                this.browserWindow.addEventListener("resize", Ht(500, function() {
                    var e = i.getCurrentBreakpoint(),
                        t = e.size,
                        e = e.name,
                        n = o !== t;
                    return o = t, i.onWindowResized.emit({
                        crossedBp: n,
                        name: e,
                        currentFrom: t
                    })
                }))
            }
        }]), r
    }();
    var y = new(function() {
        function e() {
            d(this, e)
        }
        return g(e, [{
            key: "getTouchObserver",
            value: function() {
                return this.touchObserver || (this.touchObserver = new Vt(f.getBrowserWindowObject(), f.getLogger())), this.touchObserver
            }
        }, {
            key: "enableFastClick",
            value: function() {
                this.fastClick || (this.fastClick = new jt(f.getBrowserWindowObject().document.body, f.getLogger()))
            }
        }, {
            key: "getViewportInfo",
            value: function() {
                return this.viewportInfo || (this.viewportInfo = new qt(f.getLogger(), f.getBrowserWindowObject(), Wt.getBreakpoints(), m.onWindowResized, {
                    isUseOuterwidth: new It(function() {
                        return Wt.isUseBrowserOuterwidth()
                    })
                })), this.viewportInfo
            }
        }]), e
    }());
    var l, Zt = function() {
            function o(e, t, n, i) {
                var r = this;
                d(this, o), this.logger = e, this.accountSettings = t, this.breakpoints = n, this.viewportInfo = i, this.forceDisablePrebid = !1, this.v2Compatibility = {
                    disableWidgetsRenderer: !1
                }, this.isUamEnabled = function() {
                    var e;
                    return !r.isYandexEnabled() && (null == (e = r.fuseSettings.amazonUam) ? void 0 : e.enabled)
                }, this.isResponsiveEnabled = function() {
                    return r.fuseSettings.responsive
                }, this.getInskinWidth = function() {
                    return r.fuseSettings.inskinWidth
                }, this.getSupportedSizes = function(e) {
                    return r.accountSettings.supported_sizes[e]
                }, this.getCurrentBreakpoint = function(e) {
                    var n, i = r.breakpoints,
                        o = null != e ? e : r.viewportInfo.getViewportStatus().width;
                    return Object.keys(i).forEach(function(e) {
                        var t = i[e];
                        t <= o && (!n || t > n.size) && (n = {
                            size: t,
                            name: e
                        })
                    }), n
                }, this.fuseSettings = this.applyQueryOverrides(t.fuse_settings), this.yieldExperiments = this.makeYieldExperimentsSettings(this.fuseSettings), this.logger.debug("[SETTINGS]: Yield experiments settings: ".concat(JSON.stringify(this.yieldExperiments))), this.fuseSettings = this.applyYieldExperimentsOverrides(this.fuseSettings, this.yieldExperiments), this.logger.debug("[SETTINGS]: Final: ".concat(JSON.stringify(this.fuseSettings))), this.initFuseSlots()
            }
            return g(o, [{
                key: "applyQueryOverrides",
                value: function(e) {
                    var t = {
                            useBidCache: Et("fuseUseBidCache"),
                            in2wInjection: Et("fuseIn2wInjection"),
                            useIndustry: Et("fuseUseIndustry"),
                            useGptPreAuctionModule: Et("fuseUseGptPreAuctionModule"),
                            useId5: Et("fuseUseId5")
                        },
                        n = Object.assign({}, e);
                    return Object.keys(t).forEach(function(e) {
                        h(t[e]) || (n[e] = t[e])
                    }), this.logger.debug("[SETTINGS]: queryOverrides: ".concat(JSON.stringify(t))), n
                }
            }, {
                key: "applyYieldExperimentsOverrides",
                value: function(e, n) {
                    var i = Object.assign({}, e);
                    return Object.keys(n).forEach(function(e) {
                        var t = n[e];
                        t.isYieldExperiment && (i[e] = t.experimentValue)
                    }), i
                }
            }, {
                key: "getYieldExperiment",
                value: function(e) {
                    var t = Q(e);
                    return {
                        setting: e || !1,
                        isYieldExperiment: t,
                        experimentValue: t ? 100 * Math.random() < Number(e) : void 0
                    }
                }
            }, {
                key: "getYieldExperimentSettingValue",
                value: function(e) {
                    return "boolean" == typeof(t = e) && t == t && e;
                    var t
                }
            }, {
                key: "isPubliftGAM",
                value: function() {
                    return "71161633" === this.fuseSettings.networkCode
                }
            }, {
                key: "makeYieldExperimentsSettings",
                value: function(e) {
                    var t, n = this.isPubliftGAM();
                    return {
                        useBidCache: this.getYieldExperiment(e.useBidCache),
                        in2wInjection: this.getYieldExperiment(!!n && e.in2wInjection),
                        useIndustry: this.getYieldExperiment(e.useIndustry),
                        useGptPreAuctionModule: this.getYieldExperiment(e.useGptPreAuctionModule),
                        useId5: this.getYieldExperiment(!(null != (t = e.id5) && t.enabled || !n) && e.useId5)
                    }
                }
            }, {
                key: "getYieldExperimentalTargetingValues",
                value: function(e) {
                    if (this.yieldExperiments[e].isYieldExperiment) return "".concat(Boolean(this.yieldExperiments[e].experimentValue))
                }
            }, {
                key: "getYieldExperimentsTargeting",
                value: function() {
                    var n = this,
                        i = {};
                    return Object.keys(this.yieldExperiments).forEach(function(e, t) {
                        e = n.yieldExperiments[e];
                        e.isYieldExperiment && (i["fuse_exp_".concat(t + 1)] = "".concat(Boolean(e.experimentValue)))
                    }), i
                }
            }, {
                key: "getUamSettings",
                value: function() {
                    return this.fuseSettings.amazonUam
                }
            }, {
                key: "isPrebidEnabled",
                value: function() {
                    return !this.isYandexEnabled() && !this.forceDisablePrebid && this.fuseSettings.prebid && this.fuseSettings.prebid.enabled
                }
            }, {
                key: "isPrebidServer",
                value: function() {
                    return 0 < this.getPrebidServerBidders().length && !Ut("fuseDisablePrebidServer")
                }
            }, {
                key: "getPrebidServerBidders",
                value: function() {
                    return this.fuseSettings.prebidServerBidderCodes || []
                }
            }, {
                key: "getPrebidSettings",
                value: function() {
                    return this.fuseSettings.prebid
                }
            }, {
                key: "getFuseUUID",
                value: function() {
                    return this.accountSettings.fuse_uuid
                }
            }, {
                key: "getSco",
                value: function() {
                    return this.accountSettings.sco
                }
            }, {
                key: "getTagRevision",
                value: function() {
                    return this.accountSettings.publication_metadata.revision
                }
            }, {
                key: "getFuseId",
                value: function() {
                    return this.accountSettings.fuse_id
                }
            }, {
                key: "getUseTelemetry",
                value: function() {
                    return "disabled" !== this.fuseSettings.telemetry
                }
            }, {
                key: "getIosChromeClickHandle",
                value: function() {
                    return Boolean(this.fuseSettings.iosChromeClickHandle)
                }
            }, {
                key: "getConfiantId",
                value: function() {
                    return this.fuseSettings.confiantId
                }
            }, {
                key: "getLowDwellPages",
                value: function() {
                    return this.fuseSettings.lowDwellPages || []
                }
            }, {
                key: "getMaxViewportsFirstAuction",
                value: function() {
                    return this.fuseSettings.maxViewportsFirstAuction
                }
            }, {
                key: "getCmpProvider",
                value: function() {
                    return this.isCmpRequired() ? this.fuseSettings.cmpProvider : {
                        partner: "none"
                    }
                }
            }, {
                key: "isCmpRequired",
                value: function() {
                    return !this.isYandexEnabled() && "none" !== this.fuseSettings.cmp
                }
            }, {
                key: "getCmpMode",
                value: function() {
                    return this.isYandexEnabled() || !this.fuseSettings.cmp ? "disabled" : this.fuseSettings.strict_cmp ? "strict" : "enabled"
                }
            }, {
                key: "getCmpSkipStub",
                value: function() {
                    return Boolean(this.fuseSettings.cmpSkipStub || "fundingchoices" === this.getCmpProvider().partner)
                }
            }, {
                key: "getGdprTimeoutMillis",
                value: function() {
                    var e;
                    return null != (e = t("fuseTagGdprTimeoutMs")) ? e : 2e4
                }
            }, {
                key: "getUspTimeoutMillis",
                value: function() {
                    return 100
                }
            }, {
                key: "getTagStartCutoffMs",
                value: function() {
                    var e;
                    return null != (e = t("fuseTagStartCutoffMs")) ? e : this.fuseSettings.tagStartCutoffMs
                }
            }, {
                key: "getPrebidDownloadCutoffMs",
                value: function() {
                    var e;
                    return null != (e = t("fusePrebidDownloadCutoffMs")) ? e : this.fuseSettings.prebidDownloadCutoffMs
                }
            }, {
                key: "getPrebidTagStartCutoffMs",
                value: function() {
                    var e;
                    return null != (e = t("fusePrebidTagStartCutoffMs")) ? e : this.fuseSettings.prebidTagStartCutoffMs
                }
            }, {
                key: "getUamTagStartCutoffMs",
                value: function() {
                    var e;
                    return null != (e = t("fuseUamTagStartCutoffMs")) ? e : this.fuseSettings.uamTagStartCutoffMs
                }
            }, {
                key: "getAuctionMaxSlots",
                value: function() {
                    var e;
                    return null != (e = null != (e = t("fuseAuctionMaxSlots")) ? e : this.fuseSettings.auctionMaxSlots) ? e : 99
                }
            }, {
                key: "isIdentityEnabled",
                value: function() {
                    var e;
                    return null != (e = null == (e = this.fuseSettings.identity) ? void 0 : e.enabled) && e
                }
            }, {
                key: "getIdentitySettings",
                value: function() {
                    return this.fuseSettings.identity
                }
            }, {
                key: "isId5Enabled",
                value: function() {
                    var e;
                    return (null == (e = this.fuseSettings.id5) ? void 0 : e.enabled) || this.getYieldExperimentSettingValue(this.fuseSettings.useId5)
                }
            }, {
                key: "isGptPreAuctionEnabled",
                value: function() {
                    return this.getYieldExperimentSettingValue(this.fuseSettings.useGptPreAuctionModule)
                }
            }, {
                key: "isIn2wInjection",
                value: function() {
                    return this.getYieldExperimentSettingValue(this.fuseSettings.in2wInjection)
                }
            }, {
                key: "isBidCacheEnabled",
                value: function() {
                    return this.getYieldExperimentSettingValue(this.fuseSettings.useBidCache)
                }
            }, {
                key: "isFuseIndustryEnabled",
                value: function() {
                    return this.getYieldExperimentSettingValue(this.fuseSettings.useIndustry)
                }
            }, {
                key: "isAutoRegistrationEnabled",
                value: function() {
                    return Boolean(this.fuseSettings.enableAutoRegistration)
                }
            }, {
                key: "getId5PartnerId",
                value: function() {
                    var e = null == (e = this.fuseSettings.id5) || !e.enabled || null == (e = this.fuseSettings.id5) ? void 0 : e.partnerId;
                    return this.yieldExperiments.useId5.isYieldExperiment && this.yieldExperiments.useId5.experimentValue ? 1189 : e
                }
            }, {
                key: "getVideoSettings",
                value: function() {
                    var e;
                    return null != (e = this.fuseSettings.videoSettings) ? e : {
                        enabled: !1
                    }
                }
            }, {
                key: "isConfiantEnabled",
                value: function() {
                    return !this.isYandexEnabled() && this.fuseSettings.confiant
                }
            }, {
                key: "isPubstackEnabled",
                value: function() {
                    return !!this.fuseSettings.pubstackId
                }
            }, {
                key: "getPubstackId",
                value: function() {
                    return this.fuseSettings.pubstackId
                }
            }, {
                key: "isBlockthroughEnabled",
                value: function() {
                    return !this.isYandexEnabled() && this.fuseSettings.blockthrough
                }
            }, {
                key: "isWidgetRendererEnabled",
                value: function() {
                    return !this.v2Compatibility.disableWidgetsRenderer && !this.fuseSettings.disableWidgetsRenderer
                }
            }, {
                key: "setDisableWidgetRenderer",
                value: function() {
                    this.v2Compatibility.disableWidgetsRenderer = !0
                }
            }, {
                key: "isStrictCmp",
                value: function() {
                    return Boolean(this.fuseSettings.strict_cmp)
                }
            }, {
                key: "isRequestGdprPersonalisation",
                value: function() {
                    return !this.fuseSettings.disableGdprPersonalisation
                }
            }, {
                key: "isIframeCmp",
                value: function() {
                    return "iframe" === this.fuseSettings.cmp
                }
            }, {
                key: "setForceDisablePrebid",
                value: function() {
                    this.logger.log("[CONFIG]: Forcefully disabling prebid"), this.forceDisablePrebid = !0
                }
            }, {
                key: "isMiniScrollersEnabled",
                value: function() {
                    return Boolean(this.fuseSettings.enableMiniScrollers)
                }
            }, {
                key: "scrollToStickDisableDepth",
                value: function() {
                    return this.fuseSettings.scrollToStickDisableDepth
                }
            }, {
                key: "isSpaOldBlockingPageInit",
                value: function() {
                    return Boolean(this.fuseSettings.spaOldBlockingPageInit)
                }
            }, {
                key: "getTopStickyHeaderSelector",
                value: function() {
                    var e;
                    return (null == (e = null == (e = this.getFuseSlots().filter(function(e) {
                        var t;
                        return (null == (t = e.attributes) ? void 0 : t.miniscroller) && (null == (t = e.miniscrollerAttributes) ? void 0 : t.topStickyHeaderSelector)
                    })[0]) ? void 0 : e.miniscrollerAttributes) ? void 0 : e.topStickyHeaderSelector) || zt("fuseTopStickyHeaderSelector") || this.fuseSettings.topStickyHeaderSelector
                }
            }, {
                key: "getSlotRefWithoutMcm",
                value: function(e) {
                    var t = /^(\/\d*),(\d*)(\/.*)$/i;
                    if (!1 === t.test(e)) return this.logger.debug("[SETTINGS]: regExGamAdUnitRef.test(slotRef): ".concat(JSON.stringify(t.test(e)), ", slotRef: ").concat(e)), e;
                    this.logger.debug("[SETTINGS]: regExGamAdUnitRef.test(slotRef): ".concat(JSON.stringify(t.test(e)), ", slotRef: ").concat(e));
                    t = t.exec(e);
                    return this.logger.debug("[SETTINGS]: slotRef: ".concat(e, ", matches: ").concat(JSON.stringify(t))), "".concat(t[1]).concat(t[3])
                }
            }, {
                key: "cleanSlotBasedOnMcmMode",
                value: function(e) {
                    var t = this.getSlotRefWithoutMcm(e.slot);
                    return this.logger.debug("[SETTINGS]: before: with MCM: ".concat(e.slot, ", after: without MCM: ").concat(t)), Object.assign(Object.assign({}, e), {
                        slot: t
                    })
                }
            }, {
                key: "cleanSlotSizeMapping",
                value: function(e) {
                    var t, n = {};
                    return null != (t = e.sizeMapping) && t.xl && (n.xl = e.sizeMapping.xl), null != (t = e.sizeMapping) && t.l && (n.l = e.sizeMapping.l), n.m = null == (t = e.sizeMapping) ? void 0 : t.m, n.s = null == (t = e.sizeMapping) ? void 0 : t.s, n.xs = null == (t = e.sizeMapping) ? void 0 : t.xs, Object.assign(Object.assign({}, e), {
                        sizeMapping: n
                    })
                }
            }, {
                key: "initFuseSlots",
                value: function() {
                    var i = this,
                        o = Ut("fuseMcmOff");
                    this.accountSettings.fuse_slots = this.accountSettings.fuse_slots.map(function(e) {
                        o && (i.logger.debug("[SETTINGS]: will".concat(o ? "" : " NOT", " remove MCM child reference from the slot ref - ").concat(e.slot)), e = i.cleanSlotBasedOnMcmMode(e));
                        var t = e.activateConditionConfig;
                        switch (t.type) {
                            case "none":
                                e.activateCondition = void 0;
                                break;
                            case "lazy":
                                var n = i.getCurrentBreakpoint().name,
                                    n = t.scrollDistance[n];
                                h(n) || !1 === n ? e.activateCondition = void 0 : e.activateCondition = {
                                    type: "condition",
                                    name: _t,
                                    params: t.scrollDistance
                                };
                                break;
                            case "manual":
                                e.activateCondition = {
                                    type: "condition",
                                    name: Dt
                                };
                                break;
                            case "custom":
                                e.activateCondition = t.config;
                                break;
                            default:
                                X(t)
                        }
                        return e = i.applyOverrides(e), i.cleanSlotSizeMapping(e)
                    })
                }
            }, {
                key: "getFuseSlots",
                value: function() {
                    return this.accountSettings.fuse_slots
                }
            }, {
                key: "applyOverrides",
                value: function(e) {
                    var t;
                    return Object.assign(Object.assign({}, e), {
                        attributes: Object.assign(Object.assign({}, e.attributes), {
                            interscroller: void 0 !== (null == (t = this.overrideParams) ? void 0 : t.interscrollersParams[e.id]) || (null == (t = e.attributes) ? void 0 : t.interscroller),
                            sticky: void 0 !== (null == (t = this.overrideParams) ? void 0 : t.stickiesParams[e.id]) || (null == (t = e.attributes) ? void 0 : t.sticky),
                            dynamic: void 0 !== (null == (t = this.overrideParams) ? void 0 : t.dynamicParams[e.id]) || (null == (t = e.attributes) ? void 0 : t.dynamic) || (null == (t = this.overrideParams) ? void 0 : t.dynamicParams[e.id]),
                            scrollToStick: void 0 !== (null == (t = this.overrideParams) ? void 0 : t.scrollToStickParams[e.id]) || (null == (t = e.attributes) ? void 0 : t.scrollToStick),
                            miniscroller: void 0 !== (null == (t = this.overrideParams) ? void 0 : t.miniscrollersParams[e.id]) || (null == (t = e.attributes) ? void 0 : t.miniscroller)
                        }),
                        interscrollerAttributes: Object.assign(Object.assign({}, e.interscrollerAttributes), null == (t = this.overrideParams) ? void 0 : t.interscrollersParams[e.id]),
                        stickyAttributes: Object.assign(Object.assign({}, e.stickyAttributes), null == (t = this.overrideParams) ? void 0 : t.stickiesParams[e.id]),
                        dynamicAttributes: Object.assign(Object.assign({}, e.dynamicAttributes), null == (t = this.overrideParams) ? void 0 : t.dynamicParams[e.id]),
                        miniscrollerAttributes: Object.assign(Object.assign({}, e.miniscrollerAttributes), null == (t = this.overrideParams) ? void 0 : t.miniscrollersParams[e.id])
                    })
                }
            }, {
                key: "generateZoneTemplate",
                value: function(e, t) {
                    var n = this.getZoneTemplate(e);
                    if (n) return this.zoneCustomiser() && function(t, n, e) {
                        if (e) try {
                            t.log("[ZONE][".concat(n, "][fuseZoneCustomiser] Start"))
                        } catch (e) {
                            t.error("[ZONE][".concat(n, "][fuseZoneCustomiser] Encountered error during evaluation"), e)
                        } else t.error("[ZONE][".concat(n, "][fuseZoneCustomiser] api is not defined, skip customisation"))
                    }(this.logger, e, t), n
                }
            }, {
                key: "getZoneTemplate",
                value: function(t) {
                    return this.getFuseSlots().filter(function(e) {
                        return e.id == t
                    })[0]
                }
            }, {
                key: "isScanDOMOnPageLoad",
                value: function() {
                    var e = this.fuseSettings.disableAutoLoadSlots;
                    return h(e) || !e
                }
            }, {
                key: "isHeaderBiddingSlot",
                value: function(e) {
                    return !e.attributes.interstitial && e.attributes.headerbidding && 0 < e.bids.length
                }
            }, {
                key: "isSlotWidget",
                value: function(e) {
                    var t;
                    return (null == (t = e.attributes) ? void 0 : t.interscroller) || (null == (t = e.attributes) ? void 0 : t.sticky) || (null == (t = e.attributes) ? void 0 : t.dynamic) || null
                }
            }, {
                key: "maxSlotHeightForBreakpoint",
                value: function(e, t) {
                    return null == (e = e.sizeMapping[t]) ? void 0 : e.reduce(function(e, t) {
                        return t[1] > e ? Number(t[1]) : e
                    }, 0)
                }
            }, {
                key: "getPrebidOptions",
                value: function(e) {
                    if (this.isPrebidEnabled() && this.fuseSettings.prebid.breakpoint_options) {
                        var e = this.fuseSettings.prebid.breakpoint_options[e];
                        if (e) return {
                            enabled: e.enabled,
                            sendAllBids: !0 === this.fuseSettings.prebid.sendAllBids,
                            timeout: null != (e = null != (e = e.timeout) ? e : this.fuseSettings.prebid.defaultTimeout) ? e : 1e3
                        }
                    }
                    return {
                        enabled: this.isPrebidEnabled(),
                        sendAllBids: !0 === this.fuseSettings.prebid.sendAllBids,
                        timeout: null != (e = this.fuseSettings.prebid.defaultTimeout) ? e : 1e3
                    }
                }
            }, {
                key: "isPrebidEnabledAtBP",
                value: function(e) {
                    return this.isPrebidEnabled() && this.getPrebidOptions(e).enabled
                }
            }, {
                key: "isUamEnabledAtBP",
                value: function(e) {
                    return this.isUamEnabled() && this.getPrebidOptions(e).enabled
                }
            }, {
                key: "getHbTimeout",
                value: function(e) {
                    return this.getPrebidOptions(e).timeout
                }
            }, {
                key: "getPrebidMediaTypes",
                value: function() {
                    return this.fuseSettings.prebidMediaTypes || ["banner"]
                }
            }, {
                key: "isPrebidBannerEnabled",
                value: function() {
                    return this.getPrebidMediaTypes().includes("banner")
                }
            }, {
                key: "isPrebidVideoEnabled",
                value: function() {
                    return this.getPrebidMediaTypes().includes("video")
                }
            }, {
                key: "isPrebidNativeEnabled",
                value: function() {
                    return this.getPrebidMediaTypes().includes("native")
                }
            }, {
                key: "isSlotEnabledForBreakpoint",
                value: function(e, t) {
                    var e = this.getZoneTemplate(e);
                    return !!e && 0 < (null != (e = null == (e = e.sizeMapping) ? void 0 : e[t]) ? e : []).length
                }
            }, {
                key: "getPublicationId",
                value: function() {
                    return this.accountSettings.publication_metadata.publication_id
                }
            }, {
                key: "getFlavour",
                value: function() {
                    return this.accountSettings.fuse_flavour || "default"
                }
            }, {
                key: "getFuseCDN",
                value: function() {
                    return this.accountSettings.fuse_cdn
                }
            }, {
                key: "getPrebidHash",
                value: function() {
                    return this.accountSettings.fuse_prebid_hash
                }
            }, {
                key: "getBlockedUrls",
                value: function() {
                    return this.accountSettings.fuse_blocked_url || []
                }
            }, {
                key: "getFuseIndustry",
                value: function() {
                    return this.accountSettings.fuse_industry
                }
            }, {
                key: "getFuseSettings",
                value: function() {
                    return this.fuseSettings
                }
            }, {
                key: "getEdgeHtmlMaxAdsRefreshLimit",
                value: function() {
                    return this.fuseSettings.edgeHtmlMaxAdsRefreshLimit || 60
                }
            }, {
                key: "getDefaultRefreshInterval",
                value: function() {
                    return this.fuseSettings.refresh
                }
            }, {
                key: "getAccountSettings",
                value: function() {
                    return this.accountSettings
                }
            }, {
                key: "getV2CompatOverrides",
                value: function() {
                    return this.v2Compatibility
                }
            }, {
                key: "isTestCreatives",
                value: function() {
                    return Ut("fuseTestCreatives") || !1
                }
            }, {
                key: "getSlotTestUrls",
                value: function() {
                    return this.fuseSettings.fuse_test_urls || []
                }
            }, {
                key: "getYandexBlockId",
                value: function() {
                    return zt("fuseYandexBlockId") || this.fuseSettings.yandexBlockId
                }
            }, {
                key: "isYandexEnabled",
                value: function() {
                    return this.fuseSettings.yandex || Ut("fuseYandex") || "" !== zt("fuseYandexBlockId")
                }
            }, {
                key: "isPubxaiEnabled",
                value: function() {
                    return this.fuseSettings.usePubxai || !1
                }
            }, {
                key: "isArctagEnabled",
                value: function() {
                    return this.fuseSettings.useArctag || !1
                }
            }, {
                key: "getIn2wRatio",
                value: function() {
                    return this.yieldExperiments.in2wInjection.isYieldExperiment && this.yieldExperiments.in2wInjection.experimentValue ? .9 : this.fuseSettings.in2wRatio
                }
            }, {
                key: "getIn2wAdvertiserId",
                value: function() {
                    return this.fuseSettings.in2wAdvertiserId
                }
            }, {
                key: "getIn2wAdvertiserTimeZone",
                value: function() {
                    return this.fuseSettings.in2wAdvertiserTimeZone
                }
            }, {
                key: "getTenantCode",
                value: function() {
                    return this.accountSettings.fuse_tenant
                }
            }, {
                key: "getPrebidIasPubId",
                value: function() {
                    return this.fuseSettings.prebidIasPubId
                }
            }, {
                key: "zoneCustomiser",
                value: function() {
                    return this.fuseSettings.zoneCustomiser
                }
            }]), o
        }(),
        i = new(function() {
            function e() {
                d(this, e)
            }
            return g(e, [{
                key: "getSettings",
                value: function() {
                    return this.settingsAll || (this.settingsAll = new Zt(f.getLogger(), Wt.getAccountSettings(), Wt.getBreakpoints(), y.getViewportInfo())), this.settingsAll
                }
            }]), e
        }()),
        S = new(function() {
            function e() {
                d(this, e)
            }
            return g(e, [{
                key: "getDeviceInfo",
                value: function() {
                    return this.deviceInfo || (this.deviceInfo = new ce(f.getBrowserWindowObject())), this.deviceInfo
                }
            }, {
                key: "getTelemetry",
                value: function() {
                    var n = this;
                    return this.telemetry || (this.telemetry = new kt(this.getComponentStatusStore(), this.getDeviceInfo(), f.getLogger(), f.getBrowserWindowObject(), f.getSessionId(), this.getReporter(), function(e) {
                        var t = f.getBrowserWindowObject();
                        t.fetch ? t.fetch(e, {
                            credentials: "omit",
                            mode: "cors",
                            keepalive: !0
                        }).catch(function(e) {
                            var t = String(e).toLowerCase();
                            if (t.includes("TypeError: NetworkError when attempting to fetch resource".toLowerCase())) f.getLogger().warn("Unable to fire telemetry request, possibly unable to outlive environment.");
                            else if (t.includes("TypeError: Load failed".toLowerCase()) && n.getDeviceInfo().getBrowser() === v.Safari) f.getLogger().warn("Unable to fire telemetry request, unknown network error.");
                            else {
                                if (!t.includes("TypeError: Failed to fetch".toLowerCase())) throw e;
                                f.getLogger().warn("Unable to fire telemetry request, possibly be blocked by AdBlock.")
                            }
                        }) : ((t = new XMLHttpRequest).open("GET", e, !0), t.send())
                    }, i.getSettings(), {
                        onSlotRequested: m.onSlotRequested
                    })), this.telemetry
                }
            }, {
                key: "getReporter",
                value: function() {
                    var e;
                    return this.reporter || (e = f.getFuseDob(), this.reporter = new le(e, {
                        onSlotLoaded: m.onSlotLoaded,
                        onSlotResponse: m.onSlotResponse,
                        onImpressionViewable: m.onImpressionViewable
                    })), this.reporter
                }
            }, {
                key: "getComponentStatusStore",
                value: function() {
                    return this.pluginStateStore || (this.pluginStateStore = new be(m.onComponentInitEvent, f.getLogger(), this.getReporter())), this.pluginStateStore
                }
            }]), e
        }()),
        Yt = function(o, r, s) {
            return function(n, i) {
                return function(e) {
                    var t = r(e);
                    if (Jt(o, n, e, t ? "[".concat(s, "]") : ""), !r(e)) return i(e)
                }
            }
        },
        Jt = function(e, t, n, i) {
            e.debug("".concat(i, "[EVENT][").concat(n.slot.getSlotElementId(), "]: ").concat(t, " event details: ").concat(JSON.stringify(n)))
        },
        Qt = [5068036699, 5101751880, 5189144814, 5144578315, 5221077018, 5104488413],
        Kt = function(e) {
            e = e.slot.getResponseInformation();
            return Boolean((null == e ? void 0 : e.advertiserId) && Qt.includes(e.advertiserId))
        },
        Xt = {
            name: "Google Publisher Tag",
            url: "//securepubads.g.doubleclick.net/tag/js/",
            file: "gpt.js"
        },
        $t = "is_refresh",
        en = "adunit_prev_count",
        tn = "slot_prev_count",
        nn = {},
        on = {},
        rn = !1,
        sn = !1,
        k = f.getLogger(),
        o = f.getBrowserWindowObject(),
        an = f.getWindowLocation(),
        I = S.getReporter(),
        un = S.getComponentStatusStore(),
        cn = i.getSettings(),
        ln = function() {
            var e = an.host;
            return e.substring(e.length - 40, e.length)
        },
        dn = function() {
            var e = an.pathname;
            return e.substring(e.length - 40, e.length)
        },
        gn = function() {
            var e = an.search;
            return e.substring(e.length - 40, e.length)
        },
        hn = function() {
            for (var e = [], t = an.pathname.split("/"), n = 0; n < t.length; n += 1) t[n].length && -1 === t[n].indexOf(".") && e.push(t[n]);
            return e
        };

    function fn(e) {
        return "function" == typeof e.getVersion ? "v".concat(e.getVersion()) : "unknown version"
    }
    var pn = function(e) {
            var t = vn();
            o.googletag && o.googletag._loadStarted_ ? k.debug("[INIT]: GPT ".concat(fn(t), " is already on the page, skip loading another copy")) : re(Xt, function() {
                k.debug("[INIT]: GPT ".concat(o.googletag && o.googletag._loadStarted_ ? "".concat(fn(t), " is loaded") : "not loaded")), e()
            })
        },
        vn = function() {
            return o.googletag ? o.googletag.cmd || (k.info("[GPT]: Initialised window.googletag.cmd as it was missing"), o.googletag.cmd = []) : o.googletag = {
                cmd: []
            }, l = o.googletag, o.googletag
        },
        w = function(e) {
            return vn().cmd.push(e)
        };
    var bn = function(e) {
            e.forEach(function(e) {
                var t = e[1],
                    n = t.getSlotElementId(),
                    e = e[0].zoneTemplate.id,
                    n = nn[n] || 0,
                    e = on[e] || 0;
                t.setTargeting($t, (0 < n).toString()), t.setTargeting(tn, n.toString()), t.setTargeting(en, e.toString())
            })
        },
        mn = function(e) {
            e.forEach(function(e) {
                var t = e[1].getSlotElementId(),
                    e = e[0].zoneTemplate.id;
                on[e] = (on[e] || 0) + 1, nn[t] = (nn[t] || 0) + 1
            })
        };

    function yn(i, a) {
        w(function() {
            var t, s = [],
                n = (i.forEach(function(e) {
                    t = [e.slotDivId], r = a;
                    var t, n, i, o, r = (l ? t ? ((n = (o = l.pubads().getSlots()).filter(function(e) {
                        return 0 <= t.indexOf(e.getSlotElementId())
                    })).length !== t.length && (i = o.map(function(e) {
                        return e.getSlotElementId()
                    }), o = t.filter(function(e) {
                        return -1 === i.indexOf(e)
                    }), k.warn("[AUCTION][".concat(r, "]: Could not find a GPT slot for all fuse slots.\n      Missing Slots=").concat(JSON.stringify(o), ",\n      All GPT Slots: ").concat(JSON.stringify(i)))), n) : (k.error("Called getGPTSlot() without a fuseSlotCode"), []) : (k.error("Called getGPTSlot(".concat(t, ") but googletag not defined")), []))[0];
                    r ? s.push([e, r]) : k.warn("[AUCTION][".concat(a, "]: Could not find GPT Slot corresponding to ").concat(e.slotDivId))
                }), s.map(function(e) {
                    e = V(e, 2);
                    return e[0], e[1]
                }));

            function e() {
                bn(s);
                var e = JSON.stringify(n.map(function(e) {
                    return e.getSlotElementId()
                }));
                I.addAdEvent("gpt_pubads_refresh_".concat(e), {
                    requestId: a
                }), rn || (I.reportFirstGptRequest(), I.setStateStatus("first_gpt_request"), Tn(me(un.state.cmp))), In(), rn = !0, k.debug("[AUCTION][".concat(a, "]: Calling googletag.pubads().refresh(").concat(e, ")")), l.pubads().refresh(n, {
                    changeCorrelator: sn
                }), sn = !1, mn(s)
            }
            n && 0 !== n.length ? !0 === ne.isEdgeBrowser(o) ? (k.debug("[GC] will trigger GC for iFrames in Edge browser"), t = o.document.querySelectorAll("div[data-fuse] iframe"), new Promise(function(e) {
                setTimeout(function() {
                    try {
                        e()
                    } catch (e) {}
                }, 5), t.forEach(function(e) {
                    e.addEventListener("load", function() {
                        try {
                            for (; this.contentWindow.lastChild;) this.contentWindow.removeChild(this.contentWindow.lastChild);
                            k.debug("[GC]: cleaned iFrame contentWindow")
                        } catch (e) {
                            k.error("[GC]: error in cleaning iFrame contentWindow => ".concat(e))
                        }
                    }, {
                        once: !0
                    })
                }), t.forEach(function(e) {
                    e.setAttribute("src", "about:blank")
                }), e()
            }).then(function() {
                try {
                    CollectGarbage()
                } catch (e) {
                    k.error("[GC]: error in CollectGarbage => ".concat(e))
                }
                e()
            }).catch(function(e) {
                k.error("[GC]: error in purgeIframes => ".concat(e))
            })) : e() : k.info("[AUCTION][".concat(a, "]: Cancelled adserver request because no matching GPT slots found"))
        })
    }
    var r = function(e, t) {
            k.debug("[GPT]: Setting page targeting for [key: ".concat(e, ", value: ").concat(t, "]")), l.pubads().setTargeting(e, t)
        },
        Sn = function(e, t) {
            w(function() {
                return r(e, t)
            })
        };

    function kn(e) {
        switch (e._tag) {
            case "ready":
                return de(e.loadFinish);
            case "deferred":
            case "disabled":
                return "disabled";
            case "cancelled":
                return e._tag;
            case "pending":
            case "loading":
                return "not_ready";
            default:
                X(e)
        }
    }
    var In = function() {
            k.debug("[GPT]: Applying page targeting"), r("fuse_site", ln()), r("fuse_path", dn()), r("fuse_query", gn()), r("fuse_category", hn());

            function n(e, t) {
                r(e, rn ? "refresh" : t)
            }

            function e(e, t) {
                t && n(e, de(t))
            }
            var t = cn.getFuseIndustry(),
                t = (t && r(cn.isFuseIndustryEnabled() ? "fuse_industry_2" : "fuse_industry", t), r("testmode", "".concat(cn.isTestCreatives())), cn.getInskinWidth()),
                t = "".concat(p(t) && o.screen.width >= t),
                t = (r("inskin_yes", t), r("fuse_uuid", cn.getFuseUUID()), r("fuse_publication_id", cn.getPublicationId().toString()), r("fuse_flavour", cn.getFlavour()), n("GPT_READY_MS", kn(un.state.gpt)), n("PREBID_READY_MS", kn(un.state.prebid)), n("UAM_READY_MS", kn(un.state.uam)), n("CMP_DETERMINED_MS", kn(un.state.cmp)), n("CMP_GDPR_CACHED", String(I.cmpGdprCached)), e("FUSE_LOADED_MS", I.tagLoadedMs), I.firstGptRequestMs && e("GPT_AUCTION_START_MS", I.firstGptRequestMs), I.cmpLoadFinishMs && e("CMP_LOAD_FINISH_MS", I.cmpLoadFinishMs), I.cmpGdprElapsedMs && e("CMP_GDPR_ELAPSED_MS", I.cmpGdprElapsedMs), I.firstZoneMs && e("FIRST_ZONE_MS", I.firstZoneMs), I.hbAuctionStartMs && e("HB_AUCTION_START_MS", I.hbAuctionStartMs), ye(un.state.cmp)),
                i = (r("CMP_JURISDICTION", t), r("CMP_ALLOW_PERSONAL", "".concat(me(un.state.cmp))), cn.getYieldExperimentsTargeting());
            Object.keys(i).forEach(function(e) {
                r(e, i[e])
            })
        },
        wn = function() {
            w(function() {
                In()
            })
        },
        En = function() {
            var e = Yt(k, Kt, "IN2W");
            l.pubads().disableInitialLoad(), l.pubads().collapseEmptyDivs(!0), l.pubads().setCentering(!0), l.pubads().enableSingleRequest(), l.pubads().addEventListener("slotRequested", e("requested", function(e) {
                m.onSlotRequested.emit(e)
            })), l.pubads().addEventListener("slotResponseReceived", e("response", function(e) {
                m.onSlotResponse.emit(e)
            })), l.pubads().addEventListener("slotOnload", e("load", function(e) {
                m.onSlotLoaded.emit(e)
            })), l.pubads().addEventListener("slotRenderEnded", e("render", function(e) {
                m.onSlotRender.emit(e)
            })), l.pubads().addEventListener("impressionViewable", e("viewable", function(e) {
                m.onImpressionViewable.emit(e)
            })), In()
        };
    var Cn = function(e) {
            w(function() {
                l.pubads().addEventListener("slotRenderEnded", e)
            })
        },
        Tn = function(e) {
            e = {
                nonPersonalizedAds: !e
            };
            k.info("[GPT]: googletag.pubads().setPrivacySettings(".concat(JSON.stringify(e), ")")), o.googletag.pubads().setPrivacySettings(e)
        },
        An = function(e) {
            l.destroySlots(e)
        },
        _n = f.getLogger(),
        Pn = S.getReporter(),
        Rn = i.getSettings(),
        On = {
            name: "Blockthrough",
            url: "//btloader.com/",
            file: "tag?o=5708166709903360&upapi=true"
        };
    var Dn = {
            enableIfApplicable: function(e) {
                Rn.isBlockthroughEnabled() ? y.getViewportInfo().isNotXsBreakpoint() ? (Pn.setStateStatus("blockthrough_load_start"), re(On, function() {
                    _n.log("[BLOCKTHROUGH]: Tag loaded"), Pn.setStateStatus("blockthrough_load_finish"), e && e()
                })) : _n.debug("[INIT]: Skip loading blockthrough because page on XS breakpoint") : _n.debug("[INIT]: Skip loading blockthrough because it is not enabled")
            }
        },
        xn = "ZVeqITFg3t0RVj7Gh41kEbdx9DA",
        Ln = f.getLogger(),
        Mn = S.getReporter(),
        Nn = f.getBrowserWindowObject(),
        Bn = function(e) {
            return {
                name: "Confiant",
                url: "//cdn.confiant-integrations.net/".concat(e, "/gpt_and_prebid/"),
                file: "config.js"
            }
        };
    var Fn = {
            enable: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : xn,
                    t = 1 < arguments.length ? arguments[1] : void 0,
                    n = (Mn.setStateStatus("confiant_load_start"), Nn.confiant || {}),
                    i = (n[e] = n[e] || {
                        clientSettings: {}
                    }, n[e].clientSettings || (n[e].clientSettings = {}));
                i.callback = function(e, t, n, i, o, r) {
                    Ln.log("[CONFIANT]: Has blocked the ad: ", e, t, n, i, o, JSON.stringify(r))
                }, i.prebidExcludeBidders = [], i.prebidNameSpace = "fusePbjs", i.on_prebid_error = function(e) {
                    Ln.log("[CONFIANT]: failed to scan an ad", e)
                }, i.onRendered = function(e) {
                    Ln.log("[CONFIANT]: Rendered the ad", e)
                }, Nn.confiant = n, re(Bn(e), function() {
                    Ln.log("[CONFIANT]: Script loaded"), Mn.setStateStatus("confiant_load_finish"), t && t()
                })
            }
        },
        Un = f.getLogger(),
        zn = S.getReporter(),
        Gn = function(e) {
            return {
                name: "Pubstack",
                url: "//boot.pbstck.com/v1/tag/",
                file: e
            }
        };
    var Wn, jn = {
            enable: function(e, t) {
                zn.setStateStatus("pubstack_load_start"), re(Gn(e), function() {
                    Un.log("[PUBSTACK]: Script loaded"), zn.setStateStatus("pubstack_load_finish"), t && t()
                })
            }
        },
        Vn = function() {
            function t(e) {
                d(this, t), this.partnerId = e
            }
            return g(t, [{
                key: "configPrebid",
                value: function(e) {
                    var t = e.userSync;
                    return Object.assign(Object.assign({}, e), {
                        userSync: Object.assign(Object.assign({}, t), {
                            userIds: [].concat(s(t.userIds || []), [{
                                name: "id5Id",
                                params: {
                                    partner: this.partnerId
                                },
                                storage: {
                                    type: "html5",
                                    name: "id5id",
                                    expires: 90,
                                    refreshInSeconds: 28800
                                }
                            }])
                        })
                    })
                }
            }]), t
        }();
    var Hn, qn = {
            UserId5: Vn,
            enable: function() {
                var e = i.getSettings(),
                    t = e.getId5PartnerId();
                !Wn && e.isId5Enabled() && t && (Wn = new Vn(t))
            },
            getId5Module: function() {
                return Wn
            }
        },
        Zn = function() {
            function n(e, t) {
                d(this, n), this.browserWindow = e, this.placementId = t
            }
            return g(n, [{
                key: "setup",
                value: function() {
                    var e, t = document.createElement("script"),
                        n = (t.async = !0, t.defer = !0, t.src = "https://launchpad-wrapper.privacymanager.io/47eddec1-62a9-4081-b655-0c9fa5eb8a0d/launchpad-liveramp.js", this.browserWindow.document.getElementsByTagName("script")[0]);
                    null != (e = null == n ? void 0 : n.parentNode) && e.insertBefore(t, n)
                }
            }, {
                key: "configPrebid",
                value: function(e) {
                    var t = e.userSync;
                    return Object.assign(Object.assign({}, e), {
                        userSync: Object.assign(Object.assign({}, t), {
                            userIds: [].concat(s(t.userIds || []), [{
                                name: "identityLink",
                                params: {
                                    pid: this.placementId
                                },
                                storage: {
                                    type: "cookie",
                                    name: "idl_env",
                                    expires: 7,
                                    refreshInSeconds: 1800,
                                    notUse3P: !1
                                }
                            }]),
                            syncDelay: 3e3
                        })
                    })
                }
            }]), n
        }();
    var Yn = {
            UserIdentity: Zn,
            enable: function(e) {
                var t;
                Hn || (t = i.getSettings(), (Hn = new Zn(e, t.getFuseSettings().identity.placementId)).setup())
            },
            getIdentityModule: function() {
                return Hn
            }
        },
        Jn = new(function() {
            function e() {
                d(this, e)
            }
            return g(e, [{
                key: "getPrebidGlobal",
                value: function() {
                    var e = f.getBrowserWindowObject();
                    return e.fusePbjs || (e.fusePbjs = {
                        que: []
                    }), e.fusePbjs
                }
            }]), e
        }()),
        Qn = this && this.__rest || function(e, t) {
            var n = {};
            for (o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var i = 0, o = Object.getOwnPropertySymbols(e); i < o.length; i++) t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]]);
            return n
        },
        E = f.getLogger(),
        Kn = f.getPackageMajorVersion(),
        C = Jn.getPrebidGlobal(),
        Xn = S.getReporter(),
        T = i.getSettings(),
        $n = "https://mpbs.rubiconproject.com/openrtb2/auction",
        ei = "https://mpbs.rubiconproject.com/cookie_sync";

    function ti(e) {
        return e.hasOwnProperty("libLoaded")
    }
    var ni = function(e) {
            var t, n;
            if (Xn.setStateStatus("prebid_load_script_start"), !ti(C)) return t = T.getPrebidHash(), n = T.getFuseCDN(), re(Object.assign({
                name: "Prebid.org"
            }, t ? {
                url: "//".concat(new URL("https:" + n).hostname, "/prebid/"),
                file: "prebid-".concat(t, ".js")
            } : {
                url: "".concat(n).concat(Kn, "/").concat(T.getFuseId(), "/"),
                file: "prebid.js"
            }), function() {
                E.debug("[INIT]: Prebid ".concat(ti(C) && C.libLoaded ? "".concat(C.version, " is loaded and ready") : "not loaded")), Xn.setStateStatus("prebid_onload_received"), e()
            });
            E.warn("[INIT]: Prebid ".concat(C.version, " is already loaded skip loading it again"))
        },
        ii = function(e) {
            C.que.push(function() {
                try {
                    e.call(void 0)
                } catch (e) {
                    e instanceof Error ? E.error("Error processing command :", e.message, e.stack) : E.error("Error processing command :", e)
                }
            })
        };

    function oi(e) {
        return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
            enableSendAllBids: e && !0 === e.sendAllBids,
            priceGranularity: {
                buckets: [{
                    max: 3,
                    increment: .01,
                    precision: 2
                }, {
                    max: 10,
                    increment: .1,
                    precision: 2
                }, {
                    max: 50,
                    increment: 1,
                    precision: 2
                }, {
                    max: 100,
                    increment: 10,
                    precision: 2
                }]
            },
            sizeConfig: T.isResponsiveEnabled() && !Wt.isUseBrowserOuterwidth() ? (i = null, o = [], Object.keys(Wt.getBreakpoints()).forEach(function(e) {
                var t = Wt.getBreakpoints()[e],
                    n = i ? i - 1 : null;
                E.debug("[PREBID]: Configured breakpoint ".concat(e, " ").concat(t, "px to ").concat(n)), o.push({
                    mediaQuery: "(min-width:".concat(t, "px)").concat(i ? " and (max-width: ".concat(n, "px)") : ""),
                    sizesSupported: T.getSupportedSizes(e),
                    labels: [e]
                }), i = t
            }), o) : (t = y.getViewportInfo().getCurrentBreakpoint().name, [{
                mediaQuery: "(min-width: ".concat(0, "px)"),
                sizesSupported: T.getSupportedSizes(t),
                labels: [t]
            }]),
            userSync: {
                filterSettings: {
                    iframe: {
                        bidders: "*",
                        filter: "include"
                    }
                },
                enableOverride: !0
            }
        }, T.isCmpRequired() && (E.debug("[PREBID]: Configured CMP module"), {
            consentManagement: {
                gdpr: {
                    cmpApi: "iab",
                    timeout: T.getUspTimeoutMillis(),
                    defaultGdprScope: T.isStrictCmp(),
                    allowAuctionWithoutConsent: !T.isStrictCmp()
                },
                usp: {
                    cmpApi: "iab",
                    timeout: T.getUspTimeoutMillis()
                }
            }
        })), T.isGptPreAuctionEnabled() && (E.debug("[PREBID]: Configured GPT Pre auction module"), {
            gptPreAuction: {
                enabled: !0,
                customPreAuction: function(e) {
                    return null == (e = document.querySelector('div[data-fuse-slot="'.concat(e.code, '"]'))) ? void 0 : e.getAttribute("data-gpid")
                }
            }
        })), e.sco && {
            schain: {
                validation: "strict",
                config: {
                    ver: "1.0",
                    complete: 1,
                    nodes: [{
                        asi: (t = e.sco).asi,
                        sid: t.sellerId,
                        hp: 1
                    }]
                }
            }
        }), 0 < e.prebidServerBidders.length && (e = e.prebidServerBidders, E.debug("[PREBID]: Enabling Prebid Server for ".concat(JSON.stringify(e))), {
            s2sConfig: {
                accountId: "20884",
                bidders: e,
                adapter: "prebidServer",
                enabled: !0,
                endpoint: $n,
                syncEndpoint: ei,
                timeout: 750,
                extPrebid: {
                    cache: {
                        vastxml: {
                            returnCreative: !1
                        }
                    }
                }
            }
        })), {
            currency: {
                adServerCurrency: "USD",
                granularityMultiplier: 1,
                defaultRates: {
                    AUD: {
                        USD: .67
                    }
                }
            }
        }), T.isBidCacheEnabled() && {
            useBidCache: !0
        }), T.getPrebidIasPubId() && {
            realTimeData: {
                dataProviders: [{
                    name: "ias",
                    waitForIt: !0,
                    params: {
                        pubId: T.getPrebidIasPubId()
                    }
                }]
            }
        }), "v5" === T.getTagRevision() && {
            enableTIDs: !0
        });
        var i, o, t
    }
    var ri = function(e) {
            return E.debug("[PREBID]: Applied config settings ".concat(JSON.stringify(e))), C.setConfig(Object.assign(Object.assign({}, e), T.isPrebidVideoEnabled() && {
                cache: {
                    url: "https://prebid.adnxs.com/pbc/v1/cache"
                },
                rubicon: {
                    rendererConfig: {
                        align: "center",
                        position: "append",
                        closeButton: !0,
                        label: "Advertisement",
                        collapse: !0
                    }
                }
            })), "v5" === T.getTagRevision() && (C.bidderSettings = {
                standard: {
                    storageAllowed: ["cookie"]
                }
            }), e
        },
        si = function(e) {
            var t, n = e.sizesHb.map(function(e) {
                    return De(e)
                }),
                i = e.zoneTemplate.bids.filter(function(e) {
                    e = e.bidSizes;
                    return !(e && 0 < e.length) || 0 < xe(n, e).length
                }).map(function(e) {
                    return e.bidSizes, Qn(e, ["bidSizes"])
                });
            return T.isPrebidVideoEnabled() && null != (e = e.mediaTypes) && e.includes("video") ? (t = {
                w: 640,
                h: 480,
                context: "outstream",
                language: "en",
                mimes: ["video/mp4"]
            }, i.map(function(e) {
                return Object.assign(Object.assign({}, e), {
                    params: Object.assign(Object.assign(Object.assign({}, t), e.params), "pubmatic" === e.bidder && {
                        outstreamAU: "renderer_test_pubmatic"
                    })
                })
            })) : i
        };

    function ai(e) {
        var t;
        return {
            code: e.slotDivId,
            mediaTypes: Object.assign(Object.assign(Object.assign({}, T.isPrebidBannerEnabled() && {
                banner: {
                    sizes: e.sizesHb
                }
            }), T.isPrebidNativeEnabled() && (null == (t = e.mediaTypes) ? void 0 : t.includes("native")) && {
                native: {
                    sendTargetingKeys: !1
                }
            }), T.isPrebidVideoEnabled() && (null == (t = e.mediaTypes) ? void 0 : t.includes("video")) && (t = e, {
                video: Object.assign(Object.assign({}, {
                    context: "outstream",
                    playerSize: [640, 480],
                    mimes: ["video/mp4"],
                    protocols: [2, 3, 4],
                    playbackmethod: [2],
                    maxduration: 30,
                    minduration: 6,
                    skip: 1,
                    linearity: 2,
                    api: [2]
                }), t.videoAttributes)
            })),
            bids: si(e)
        }
    }
    var ui = {
            loadPrebidLibrary: ni,
            pushToPrebidQue: ii,
            getPrebidDefaultConfig: oi,
            setPrebidConfig: ri,
            getPrebidUnitIndex: function(t) {
                return ti(C) ? C.adUnits.findIndex(function(e) {
                    return e.code === t
                }) : void 0
            },
            getPrebidUnits: function(e) {
                var n = {},
                    i = (C.adUnits.forEach(function(e) {
                        return n[e.code] = e
                    }), {});
                return e.forEach(function(e) {
                    var t = n[e];
                    t ? i[e] = JSON.parse(JSON.stringify(t)) : E.warn("[PREBID]: No prebid unit found for ".concat(e))
                }), i
            },
            enable: function(i) {
                ii(function() {
                    var e = oi({
                            sendAllBids: T.getPrebidSettings() && !0 === T.getPrebidSettings().sendAllBids,
                            sco: T.getSco(),
                            prebidServerBidders: T.isPrebidServer() ? T.getPrebidServerBidders() : []
                        }),
                        t = Yn.getIdentityModule(),
                        t = (T.isIdentityEnabled() && t && (E.debug("[PREBID] Enabled identity module"), e = t.configPrebid(e), E.debug("[PREBID] Enabled ATS analytics module"), C.enableAnalytics([{
                            provider: "atsAnalytics",
                            options: {
                                pid: t.placementId
                            }
                        }])), qn.getId5Module());
                    T.isId5Enabled() && t && (E.debug("[PREBID] Enabled id5 module"), e = t.configPrebid(e)), ri(e), E.debug("[PREBID]: Enabled prebid ".concat(JSON.stringify(e)))
                }), te(Bt(), "simulate prebid download delay", E, function() {
                    var n = Xn.getElapsedTime();
                    ni(function() {
                        var e = f.getBrowserWindowObject(),
                            t = e.pbjs;
                        K(t) || !ti(t) ? e.pbjs = C : t.renderAd && (t.renderAd = C.renderAd), i(n)
                    })
                })
            },
            reset: function() {
                ti(C) && C.removeAdUnit()
            },
            setSiteCategoryAsync: function(n) {
                ii(function() {
                    var e = f.getBrowserWindowObject(),
                        t = f.getWindowLocation();
                    C.setConfig({
                        ortb2: {
                            site: {
                                name: t.hostname,
                                domain: t.hostname,
                                cat: n.iabCodes || T.getFuseIndustry(),
                                sectioncat: n.iabCodes,
                                pagecat: n.iabCodes,
                                page: t.href,
                                ref: e.document.referrer,
                                keywords: n.keywords.join(",")
                            }
                        }
                    }), Sn("CATEGORY_IAB", n.keywords), Sn("CATEGORY_IAB_Codes", n.iabCodes)
                })
            }
        },
        ci = f.getLogger(),
        li = S.getReporter(),
        di = function() {
            return {
                name: "ArcTag",
                url: "//silo25.p7cloud.net/",
                file: "as.js"
            }
        };
    var gi = function() {
            var n = 0,
                i = setInterval(function() {
                    var e, t = f.getBrowserWindowObject().arcobj1;
                    t ? (clearInterval(i), null != (e = t.page_iab_codes) && e.text || null != (e = t.page_iab) && e.text ? (ci.debug("[ARCTAG]: Applying prebid site categories from window.arcobj1 ".concat(JSON.stringify(t))), ui.setSiteCategoryAsync({
                        iabCodes: (null == (e = t.page_iab_codes) ? void 0 : e.text) || [],
                        keywords: (null == (e = t.page_iab) ? void 0 : e.text) || []
                    })) : ci.debug("[ARCTAG]: No codes and keyword in retrieved data")) : (n++, ci.debug("[ARCTAG]: window.arcobj1 not inited yet ".concat(n)), 30 < n && (clearInterval(i), ci.debug("[ARCTAG]: window.arcobj1 check cancelled")))
                }, 100)
        },
        hi = {
            enable: function() {
                li.setStateStatus("arctag_load_start"), re(di(), function() {
                    ci.log("[ARCTAG]: Script loaded"), li.setStateStatus("arctag_load_finish"), gi()
                })
            }
        },
        fi = f.getLogger(),
        pi = S.getReporter(),
        vi = function() {
            return {
                name: "Pubxai",
                url: "//cdn.pbxai.com/",
                file: "e81e688b-e119-4bf8-af5e-9c6af50622c1.js"
            }
        },
        bi = function(e) {
            pi.setStateStatus("pubxai_load_start"), re(vi(), function() {
                fi.log("[PUBXAI]: Script loaded"), pi.setStateStatus("pubxai_load_finish"), e && e()
            })
        },
        mi = function() {
            function r(e, t) {
                var n = this;
                d(this, r), this.logger = e, this.gptDestroySlots = t, this.templateTargetings = {}, this.slots = {}, this.destroySlotsFunc = function(e) {
                    var t = e.map(function(e) {
                        return e.getSlotElementId()
                    });
                    n.logger.debug("[GPT-REGISTRY]: Calling googletag.destroySlots(".concat(JSON.stringify(t), ")")), n.gptDestroySlots(e)
                }
            }
            return g(r, [{
                key: "add",
                value: function(e, t) {
                    var n = this,
                        i = r.getLCTemplateId(e),
                        o = (Array.isArray(this.slots[i]) || (this.slots[i] = []), this.logger.debug("[GPT-REGISTRY]: Added ".concat(i)), this.slots[i].push(t), this.templateTargetings[i]);
                    o ? (Object.keys(o).forEach(function(e) {
                        t.setTargeting(e, o[e]), n.logger.debug("[GPT-REGISTRY]: Set targeting. zoneTemplateId: ".concat(i, ", gpt slot id: ").concat(t.getSlotElementId(), ", key: ").concat(e, ", value: ").concat(o[e]))
                    }), this.logger.debug("[GPT-REGISTRY]: Applied targeting for ".concat(i, " on newly added gpt slot - id: ").concat(t.getSlotElementId()))) : this.logger.debug("[GPT-REGISTRY]: No template targeting set for zoneTemplateId: ".concat(i))
                }
            }, {
                key: "purgeAll",
                value: function() {
                    var t = this;
                    Object.keys(this.slots).forEach(function(e) {
                        return t.purge(e)
                    })
                }
            }, {
                key: "purge",
                value: function(e) {
                    var e = r.getLCTemplateId(e),
                        t = (this.logger.debug("[GPT REGISTRY]: Purging ".concat(e)), this.slots[e]);
                    t && (this.destroySlotsFunc(t), delete this.slots[e], delete this.templateTargetings[e])
                }
            }, {
                key: "purgeByElement",
                value: function(e, t) {
                    var n = this.getSlots(e) || [],
                        i = n.find(function(e) {
                            return e.getSlotElementId() === t
                        });
                    i ? (this.destroySlotsFunc([i]), this.slots[r.getLCTemplateId(e)] = n.filter(function(e) {
                        return e.getSlotElementId() !== t
                    })) : this.logger.warn("[GPT-REGISTRY]: No slot found for key: ".concat(e, " code: ").concat(t))
                }
            }, {
                key: "getSlotsLength",
                value: function() {
                    return Object.keys(this.slots).length
                }
            }, {
                key: "getSlots",
                value: function(e) {
                    return e && "string" == typeof e && Array.isArray(this.slots[r.getLCTemplateId(e)]) ? this.slots[r.getLCTemplateId(e)] : []
                }
            }, {
                key: "addTemplateTargetings",
                value: function(e, t, n) {
                    e = r.getLCTemplateId(e);
                    this.templateTargetings[e] || (this.templateTargetings[e] = {}), this.templateTargetings[e][t] = n
                }
            }, {
                key: "getTemplateTargetings",
                value: function(e) {
                    e = r.getLCTemplateId(e);
                    return this.templateTargetings[e] || null
                }
            }, {
                key: "setSlotTargetingById",
                value: function(t, n, i) {
                    var o = this;
                    this.addTemplateTargetings(t, n, i), this.logger.debug("[GPT-REGISTRY]: Template targeting set. zoneTemplateId: ".concat(t, ", key: ").concat(n, ", value: ").concat(JSON.stringify(i))), this.getSlots(t).forEach(function(e) {
                        try {
                            e.setTargeting(n, i), o.logger.debug("[GPT-REGISTRY]: Applied template targetings. slot id: ".concat(e.getSlotElementId(), ", key: ").concat(n, ", value: ").concat(JSON.stringify(i)))
                        } catch (e) {
                            e instanceof Error ? o.logger.error("[GPT-REGISTRY]: Error occurred while individually setTargeting for slot ".concat(t, "."), e.message, e.stack) : o.logger.error("[GPT-REGISTRY]: Error of unexpected type occurred while individually setTargeting for slot ".concat(t, "."))
                        }
                    })
                }
            }], [{
                key: "getLCTemplateId",
                value: function(e) {
                    return e.toLowerCase()
                }
            }]), r
        }(),
        yi = new(function() {
            function e() {
                d(this, e)
            }
            return g(e, [{
                key: "getGptSlotRegistry",
                value: function() {
                    return this.gptSlotRegistry || (this.gptSlotRegistry = new mi(f.getLogger(), An)), this.gptSlotRegistry
                }
            }]), e
        }()),
        Si = function() {
            function r(e, t, n, i) {
                var o = this;
                d(this, r), this.logger = e, this.reporter = t, this.events = n, this.componentState = i, this.state = {
                    tag_initialised: !1,
                    on_low_dwell_page: !1
                }, this.bidLibrariesCutoffMs = 1e3, this.bidLibrariesCutoff = !1, n.onComponentInitEvent.subscribe(function(e) {
                    "gpt" === e.component && "ready" === e.state._tag && !1 === o.bidLibrariesCutoff && setTimeout(function() {
                        o.bidLibrariesCutoff = !0, o.logger.info("[FUSE][INIT] Bid libraries cutoff by timeout ".concat(o.bidLibrariesCutoffMs, "ms")), o.checkAndTrigger()
                    }, o.bidLibrariesCutoffMs), o.checkAndTrigger()
                })
            }
            return g(r, [{
                key: "getInitStatus",
                value: function() {
                    var e = this.getComponentState("cmp"),
                        t = this.getComponentState("docReadyScan");
                    return {
                        cmpOk: "ready" === e || "disabled" === e,
                        docReady: "ready" == t || "disabled" === t,
                        anyBidLibraryReady: this.isAnyBidLibraryReady()
                    }
                }
            }, {
                key: "isReadyForInit",
                value: function() {
                    var e = this.getInitStatus();
                    return 0 === Object.values(e).filter(function(e) {
                        return !e
                    }).length
                }
            }, {
                key: "checkAndTrigger",
                value: function() {
                    h(this.firedInitReady) && this.isReadyForInit() && (this.reporter.setStateStatus("initmanager_fired_auction_ready"), this.firedInitReady = this.reporter.getElapsedTime(), this.events.onInitManagerReady.emit({
                        eventType: "onInitManagerReady"
                    }))
                }
            }, {
                key: "getComponentState",
                value: function(e) {
                    return this.componentState.state[e]._tag
                }
            }, {
                key: "isComponentReady",
                value: function(e) {
                    return "ready" === this.getComponentState(e)
                }
            }, {
                key: "isAnyBidLibraryReady",
                value: function() {
                    var e, t, n;
                    return "disabled" !== this.getComponentState("yandex") ? this.isComponentReady("yandex") : (e = this.getComponentState("prebid"), t = this.getComponentState("uam"), n = ["ready", "disabled"], this.bidLibrariesCutoff || n.includes(e) && n.includes(t))
                }
            }, {
                key: "setTagInitialised",
                value: function() {
                    this.state.tag_initialised = !0
                }
            }, {
                key: "isTagInitialised",
                value: function() {
                    return this.state.tag_initialised
                }
            }, {
                key: "setIsLowDwellPage",
                value: function(e) {
                    this.state.on_low_dwell_page = e
                }
            }, {
                key: "isLowDwellPage",
                value: function() {
                    return this.state.on_low_dwell_page
                }
            }]), r
        }(),
        ki = new(function() {
            function e() {
                d(this, e)
            }
            return g(e, [{
                key: "getInitManager",
                value: function() {
                    return this.initManager || (this.initManager = new Si(f.getLogger(), S.getReporter(), m, S.getComponentStatusStore())), this.initManager
                }
            }]), e
        }()),
        Ii = f.getLogger(),
        wi = [];

    function Ei() {
        var e;
        Ii.info("[TARGETING] Clearing page targeting"), e = wi, w(function() {
            e.forEach(function(e) {
                l.pubads().clearTargeting(e.key)
            })
        }), wi = []
    }

    function Ci(n, e) {
        var i = -1;
        wi.forEach(function(e, t) {
            -1 === i && e.key === n && (i = t)
        }), Ii.info("[TARGETING]: Updating custom targeting for [key: ".concat(n, ", value: ").concat(e, "]")), -1 < i ? wi[i].value = e : wi.push({
            key: n,
            value: e
        }), Sn(n, e)
    }
    var Ti = function() {
            function r(e, t, n, i, o) {
                d(this, r), this.logger = e, this.context = t, this.rootCondition = n, this.api = i, this.onSatisfiedCB = o, this.firedCallback = !1
            }
            return g(r, [{
                key: "enableTriggers",
                value: function() {
                    this.rootCondition.enableTriggers(this.api)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.rootCondition.destroyTriggers()
                }
            }, {
                key: "checkCondition",
                value: function() {
                    return this.rootCondition.checkCondition()
                }
            }, {
                key: "checkAndFire",
                value: function() {
                    this.firedCallback || this.rootCondition.checkCondition() && (this.logger.info("[ACTIVATOR][".concat(this.context, "]: Conditions are satisfied. Destroying triggers and invoking callback")), this.rootCondition.destroyTriggers(), this.firedCallback = !0, this.onSatisfiedCB(this.context))
                }
            }]), r
        }(),
        Ai = function() {
            function e() {
                d(this, e), this.name = "AlwaysTrue"
            }
            return g(e, [{
                key: "check",
                value: function() {
                    return !0
                }
            }, {
                key: "buildTriggers",
                value: function(e) {
                    return []
                }
            }]), e
        }(),
        _i = function() {
            function e() {
                d(this, e), this.name = "AlwaysFalse"
            }
            return g(e, [{
                key: "check",
                value: function() {
                    return !1
                }
            }, {
                key: "buildTriggers",
                value: function(e) {
                    return []
                }
            }]), e
        }(),
        Pi = function() {
            function t(e) {
                d(this, t), this.conditions = e, this.name = "AndCondition"
            }
            return g(t, [{
                key: "buildTriggers",
                value: function(e) {
                    return []
                }
            }, {
                key: "check",
                value: function() {
                    return this.conditions.reduce(function(e, t) {
                        return e && t.checkCondition()
                    }, !0)
                }
            }]), t
        }(),
        Ri = function() {
            function t(e) {
                d(this, t), this.conditions = e, this.name = "OrCondition"
            }
            return g(t, [{
                key: "buildTriggers",
                value: function(e) {
                    return []
                }
            }, {
                key: "check",
                value: function() {
                    return this.conditions.reduce(function(e, t) {
                        return e || t.checkCondition()
                    }, !1)
                }
            }]), t
        }(),
        Oi = function() {
            U(n, Rt);
            var t = j(n);

            function n(e) {
                return d(this, n), t.call(this, e, e.api.events.onWindowResized, function(e) {
                    return !e.crossedBp
                })
            }
            return g(n)
        }(),
        Di = function() {
            function r(e, t, n, i, o) {
                d(this, r), this.id = e, this.condition = t, this.api = n, this.activatorCallback = i, this.logger = o, this.triggers = null, this.satisfied = !1
            }
            return g(r, [{
                key: "checkCondition",
                value: function() {
                    return this.checkConditionAndNotify(!1)
                }
            }, {
                key: "checkConditionAndNotify",
                value: function(e) {
                    if (!this.satisfied) {
                        try {
                            this.satisfied = this.condition.check(this.id, this.api)
                        } catch (e) {
                            return $(e), this.logger.warn("[CONDITION][".concat(this.condition.name, "][").concat(this.id, "]: Caught exception while checking condition"), e.message, e.stack), !1
                        }
                        this.satisfied && e && this.activatorCallback()
                    }
                    return this.satisfied
                }
            }, {
                key: "destroyTriggers",
                value: function() {
                    return r.visitConditions(this, function(e) {
                        e.triggers && e.triggers.forEach(function(e) {
                            e.destroy()
                        })
                    })
                }
            }, {
                key: "enableTriggers",
                value: function(i) {
                    var o = this;
                    return r.visitConditions(this, function(e) {
                        var t = e.condition,
                            n = {
                                id: o.id,
                                api: i,
                                logger: o.logger,
                                onTriggeredCB: function() {
                                    return e.checkConditionAndNotify(!0)
                                }
                            };
                        e.triggers = [].concat(s(t.buildTriggers(n)), [new Oi(n)])
                    })
                }
            }], [{
                key: "visitConditions",
                value: function(t, n) {
                    var i = t.condition;
                    if (i instanceof Pi || i instanceof Ri) i.conditions.forEach(function(e) {
                        return r.visitConditions(e, n)
                    });
                    else try {
                        n(t)
                    } catch (e) {
                        $(e), t.logger.warn("[CONDITION][".concat(i.name, "][").concat(t.id, "]: Caught exception while visiting condition:"), e.message, e.stack)
                    }
                }
            }]), r
        }(),
        xi = function() {
            function t(e) {
                d(this, t), this.logger = e, this.internalConditions = {
                    AlwaysTrue: function() {
                        return new Ai
                    },
                    AlwaysFalse: function() {
                        return new _i
                    }
                }, this.conditions = {}
            }
            return g(t, [{
                key: "buildActivator",
                value: function(e, t, n, i) {
                    var e = this.buildCondition(t, e, n, function() {
                            return o.checkAndFire()
                        }),
                        o = new Ti(this.logger, t, e, n, i);
                    return o
                }
            }, {
                key: "registerCondition",
                value: function(e, t) {
                    if (this.conditions[e]) throw Error("Condition with ".concat(e, " already registered"));
                    this.conditions[e] = t
                }
            }, {
                key: "buildCondition",
                value: function(e, t, n, i) {
                    var o = t.type;
                    switch (o) {
                        case "and":
                            return this.buildBooleanCondition(e, t, n, i, function(e) {
                                return new Pi(e)
                            });
                        case "or":
                            return this.buildBooleanCondition(e, t, n, i, function(e) {
                                return new Ri(e)
                            });
                        case "condition":
                        case "custom-condition":
                            return this.buildTriggerCondition(e, t, n, i);
                        default:
                            X(o)
                    }
                }
            }, {
                key: "buildTriggerCondition",
                value: function(e, t, n, i) {
                    var o;
                    return this.internalConditions[t.name] ? new Di(e, this.internalConditions[t.name](), n, i, this.logger) : (o = this.conditions[t.name]) ? (o = new o(null != (o = t.params) ? o : {}), new Di(e, o, n, i, this.logger)) : (this.logger.error("[CONDITION-FACTORY]: Could not find condition ".concat(t.name, ", it will be deemed false")), this.buildAlwaysFalseCondition(e, n, i))
                }
            }, {
                key: "buildAlwaysFalseCondition",
                value: function(e, t, n) {
                    return new Di(e, new _i, t, n, this.logger)
                }
            }, {
                key: "buildBooleanCondition",
                value: function(t, e, n, i, o) {
                    var r = this,
                        e = e.subConditions;
                    return e && 0 !== e.length ? (o = o(e.map(function(e) {
                        return r.buildCondition(t, e, n, i)
                    })), new Di(t, o, n, i, this.logger)) : (this.logger.error("[CONDITION-FACTORY]: Boolean condition with no sub-conditions"), this.buildAlwaysFalseCondition(t, n, i))
                }
            }]), t
        }(),
        Li = "AbsoluteScrollDistance",
        Mi = function() {
            function t(e) {
                d(this, t), this.params = e, this.name = Li
            }
            return g(t, [{
                key: "buildTriggers",
                value: function(e) {
                    return [new At(e)]
                }
            }, {
                key: "check",
                value: function(e, t) {
                    return t.getWindow().scrollY >= ((null == (t = this.params) ? void 0 : t.pixelsDistance) || 0)
                }
            }]), t
        }(),
        Ni = "BreakpointMatch",
        Bi = function() {
            function i(e) {
                d(this, i), this.params = e, this.name = Ni
            }
            return g(i, [{
                key: "buildTriggers",
                value: function(e) {
                    return []
                }
            }, {
                key: "check",
                value: function(e, t) {
                    var t = t.viewportInfo.getCurrentBreakpoint().name,
                        n = !("gte" in this.params) || i.compareBp(this.params.gte, t, "gte"),
                        t = !("lte" in this.params) || i.compareBp(this.params.lte, t, "lte");
                    return n && t
                }
            }], [{
                key: "compareBp",
                value: function(e, t, n) {
                    e = this.BpOrder[e], t = this.BpOrder[t];
                    return "gte" === n ? e <= t : t <= e
                }
            }]), i
        }(),
        Fi = (Bi.BpOrder = {
            xs: 1,
            s: 2,
            m: 3,
            l: 4,
            xl: 5
        }, function() {
            function t(e) {
                d(this, t), this.window = e.api.viewportInfo.browserWindow, this.triggeredCB = e.onTriggeredCB, document.addEventListener("readystatechange", this.triggeredCB)
            }
            return g(t, [{
                key: "destroy",
                value: function() {
                    this.window.removeEventListener("readystatechange", this.triggeredCB)
                }
            }]), t
        }()),
        Ui = "DocumentStatus",
        zi = function() {
            function t(e) {
                d(this, t), this.params = e, this.name = Ui
            }
            return g(t, [{
                key: "buildTriggers",
                value: function(e) {
                    return [new Fi(e)]
                }
            }, {
                key: "check",
                value: function(e, t) {
                    return -1 !== this.params.state.indexOf(document.readyState)
                }
            }]), t
        }(),
        Gi = function() {
            function n(e, t) {
                d(this, n), this.ctx = e, this.intervalMs = t, this.intervalId = setInterval(this.ctx.onTriggeredCB, this.intervalMs)
            }
            return g(n, [{
                key: "destroy",
                value: function() {
                    clearInterval(this.intervalId)
                }
            }]), n
        }(),
        Wi = "DomElementExists",
        ji = function() {
            function t(e) {
                d(this, t), this.params = e, this.name = Wi
            }
            return g(t, [{
                key: "buildTriggers",
                value: function(e) {
                    return [new Gi(e, 250)]
                }
            }, {
                key: "check",
                value: function(e, t) {
                    return null !== document.querySelector(this.params.selector)
                }
            }]), t
        }(),
        Vi = "PageCount",
        Hi = function() {
            function i(e) {
                d(this, i), this.params = e, this.name = Vi, this.hasChecked = !1, this.isOver = !1
            }
            return g(i, [{
                key: "buildTriggers",
                value: function(e) {
                    return []
                }
            }, {
                key: "check",
                value: function(e, t) {
                    var n;
                    return this.hasChecked || (i.incrementPageCount(e, t.getWindow()), this.hasChecked = !0, n = i.getPageCount(e, t.getWindow()), this.isOver = n >= ((null == (n = this.params) ? void 0 : n.pageCount) || 1), this.isOver && i.resetPageCount(e, t.getWindow())), this.isOver
                }
            }], [{
                key: "getCountKey",
                value: function(e) {
                    return "fuse-page-views-".concat(e)
                }
            }, {
                key: "getPageCount",
                value: function(e, t) {
                    return Number(t.sessionStorage.getItem(i.getCountKey(e)) || 0)
                }
            }, {
                key: "incrementPageCount",
                value: function(e, t) {
                    t.sessionStorage.setItem(i.getCountKey(e), "".concat(this.getPageCount(e, t) + 1))
                }
            }, {
                key: "resetPageCount",
                value: function(e, t) {
                    t.sessionStorage.setItem(i.getCountKey(e), "0")
                }
            }]), i
        }(),
        qi = "UrlRegex",
        Zi = function() {
            function t(e) {
                d(this, t), this.params = e, this.name = qi
            }
            return g(t, [{
                key: "buildTriggers",
                value: function(e) {
                    return []
                }
            }, {
                key: "check",
                value: function(e, t) {
                    t = t.getWindow().location.toString().match(this.params.regex);
                    return p(t) && 0 < t.length
                }
            }]), t
        }(),
        Yi = "WindowHeightDistance",
        Ji = function() {
            function t(e) {
                d(this, t), this.params = e, this.name = Yi
            }
            return g(t, [{
                key: "buildTriggers",
                value: function(e) {
                    return [new At(e)]
                }
            }, {
                key: "check",
                value: function(e, t) {
                    var t = t.getWindow();
                    return t.scrollY >= t.innerHeight * ((null == (t = this.params) ? void 0 : t.windowHeightDistance) || 0)
                }
            }]), t
        }(),
        Qi = "WindowValue",
        Ki = function() {
            function t(e) {
                d(this, t), this.params = e, this.name = Qi
            }
            return g(t, [{
                key: "buildTriggers",
                value: function() {
                    return []
                }
            }, {
                key: "check",
                value: function(e, t) {
                    return t.viewportInfo.browserWindow[this.params.name] === this.params.value
                }
            }]), t
        }(),
        Xi = "LocalStorageValue",
        $i = function() {
            function t(e) {
                d(this, t), this.params = e, this.name = Xi
            }
            return g(t, [{
                key: "buildTriggers",
                value: function() {
                    return []
                }
            }, {
                key: "check",
                value: function(e, t) {
                    return t.viewportInfo.browserWindow.localStorage.getItem(this.params.name) === this.params.value
                }
            }]), t
        }(),
        eo = "MetaTagProperty",
        to = function() {
            function t(e) {
                d(this, t), this.params = e, this.name = eo, this.metaTagKey = e.metaTagKey, this.metaTagValues = e.metaTagValues
            }
            return g(t, [{
                key: "buildTriggers",
                value: function() {
                    return []
                }
            }, {
                key: "check",
                value: function(e, t) {
                    t = t.viewportInfo.browserWindow.document.querySelector('meta[name="'.concat(this.metaTagKey, '"]'));
                    return !h(t) && this.metaTagValues.includes(t.getAttribute("content"))
                }
            }]), t
        }();

    function no(e, t) {
        return Boolean(so(e, t) || (null == (t = null == (t = t.purpose) ? void 0 : t.legitimateInterests) ? void 0 : t[e]))
    }
    var io = new(function() {
            function t(e) {
                d(this, t), this.logger = e, this.slotConditionFactory = null, this.insertConditionFactory = null
            }
            return g(t, [{
                key: "getSlotConditionFactory",
                value: function() {
                    var e;
                    return this.slotConditionFactory || (this.slotConditionFactory = new xi(this.logger), (e = this.slotConditionFactory).registerCondition(Li, Mi), e.registerCondition(Ni, Bi), e.registerCondition(Wi, ji), e.registerCondition(_t, Pt), e.registerCondition(Dt, xt), e.registerCondition(Vi, Hi), e.registerCondition(qi, Zi), e.registerCondition(Yi, Ji), e.registerCondition(Qi, Ki), e.registerCondition(Xi, $i), e.registerCondition(eo, to)), this.slotConditionFactory
                }
            }, {
                key: "getInsertConditionFactory",
                value: function() {
                    var e;
                    return this.insertConditionFactory || (this.insertConditionFactory = new xi(this.logger), (e = this.insertConditionFactory).registerCondition(Ui, zi), e.registerCondition(Li, Mi), e.registerCondition(Ni, Bi), e.registerCondition(Yi, Ji), e.registerCondition(qi, Zi), e.registerCondition(Wi, ji), e.registerCondition(Vi, Hi), e.registerCondition(Qi, Ki), e.registerCondition(Xi, $i), e.registerCondition(eo, to)), this.insertConditionFactory
                }
            }]), t
        }())(f.getLogger()),
        oo = function() {
            function i(e, t, n) {
                d(this, i), this.logger = e, this.browserWindow = t, this.reporter = n
            }
            return g(i, [{
                key: "load",
                value: function(e) {
                    switch (this.reporter.setStateStatus("cmp_load_quantcast_start"), e.partner) {
                        case "quantcast":
                            return this.loadQuantcast();
                        case "cookiebot":
                            return this.loadCookieBot(e.domainGroupId);
                        case "fundingchoices":
                            return void this.logger.log("[CMP]: Funding Choices CMP provider selected no external script required")
                    }
                }
            }, {
                key: "loadQuantcast",
                value: function() {
                    this.logger.log("[CMP]: Loading Quantcast CMP provider");
                    var e = this,
                        t = this.browserWindow.document.location.hostname,
                        n = this.browserWindow.document.createElement("script"),
                        i = this.browserWindow.document.getElementsByTagName("script")[0],
                        o = this.browserWindow.document.getElementsByTagName("head")[0] || this.browserWindow.document.documentElement,
                        r = "https://cmp.quantcast.com".concat("/choice/", "PRrmquD1Ggcb1", "/", t, "/choice.js?tag_version=V2"),
                        s = new XMLHttpRequest;
                    s.onreadystatechange = function() {
                        4 === this.readyState && (n.async = !0, n.type = "text/javascript", 200 === this.status ? n.src = r : e.logger.error("GET call to CMP script with ".concat(t, " responed with the status code - ").concat(this.status)), null != i && i.parentNode ? i.parentNode.insertBefore(n, i) : (e.logger.debug("First script element not fully initialised, falling back to head-based insertion"), o.insertBefore(n, o.firstChild)), e.logger.log("[CMP]: Added Quantcast script to document"))
                    }, this.logger.log("[CMP]: Opening Quantcast URL"), s.open("GET", r, !0), s.send()
                }
            }, {
                key: "loadCookieBot",
                value: function(e) {
                    var t = this;
                    this.logger.log("[CMP]: Loading Cookie Bot - ".concat(e)), re({
                        name: "CookieBot",
                        url: "//consent.cookiebot.com/",
                        file: "uc.js",
                        insertSelector: "head",
                        attributes: {
                            "data-cbid": e,
                            "data-blockingmode": "auto",
                            "data-framework": "IAB"
                        }
                    }, function() {
                        t.logger.log("[CMP]: Cookie Bot script loaded")
                    })
                }
            }]), i
        }(),
        ro = function() {
            function n(e, t) {
                d(this, n), this.logger = e, this.browserWindow = t
            }
            return g(n, [{
                key: "generate",
                value: function() {
                    this.createStubFunctionV2()
                }
            }, {
                key: "createStubFunctionV2",
                value: function() {
                    var r = this;
                    r.logger.debug("[CMP]: Generating V2 stub");
                    for (var o = "__tcfapiLocator", n = [], s = r.browserWindow, e = void 0, t = function e() {
                            var t, n = s.document,
                                i = !!s.frames[o];
                            return i ? r.logger.debug("[CMP] Found existing version 2 stub") : (r.logger.debug("[CMP] Version 2 stub not found - generating"), n.body ? ((t = n.createElement("iframe")).style.cssText = "display:none", t.name = o, n.body.appendChild(t)) : setTimeout(e, 5)), !i
                        }, i = s; i;) {
                        try {
                            if (i.frames[o]) {
                                e = i, r.logger.debug("[CMP] Found locator frame");
                                break
                            }
                        } catch (e) {
                            "{}" !== JSON.stringify(e) && r.logger.log("[CMP]:", JSON.stringify(e))
                        }
                        if (i === r.browserWindow.top) break;
                        i = i.parent
                    }
                    e || (r.logger.debug("[CMP] Locator frame not found"), t(), s.__tcfapi = function() {
                        var e = arguments,
                            t = void 0;
                        if (!e.length) return n;
                        "setGdprApplies" === e[0] ? 3 < e.length && 2 === e[2] && "boolean" == typeof e[3] && (t = e[3], "function" == typeof e[2]) && e[2]("set", !0) : "ping" === e[0] ? "function" == typeof e[2] && e[2]({
                            gdprApplies: t,
                            cmpLoaded: !1,
                            cmpStatus: "stub"
                        }) : (t = "init" === e[0] && "object" === N(e[3]) ? [e[0], e[1], e[2], Object.assign(e[3], {
                            tag_version: "V2"
                        })].concat(Array.from(e).slice(4)) : e, n.push(t))
                    }, s.addEventListener("message", function(n) {
                        var i = "string" == typeof n.data,
                            e = void 0;
                        try {
                            e = i ? JSON.parse(n.data) : n.data
                        } catch (e) {
                            "{}" !== JSON.stringify(e) && r.logger.error("[CMP]:", JSON.stringify(e))
                        }
                        var o = null == e ? void 0 : e.__tcfapiCall;
                        o && r.browserWindow.__tcfapi(o.command, o.version, function(e, t) {
                            e = {
                                __tcfapiReturn: {
                                    returnValue: e,
                                    success: t,
                                    callId: o.callId
                                }
                            };
                            n && n.source && n.source.postMessage && n.source.postMessage(i ? JSON.stringify(e) : e, "*")
                        }, o.parameter)
                    }, !1))
                }
            }]), n
        }(),
        so = function(e, t) {
            var n;
            return (null == (n = null == (n = t.purpose) ? void 0 : n.consents) ? void 0 : n[e]) || (null == (n = t.purposeConsents) ? void 0 : n[e])
        },
        ao = function() {
            function i(e, t, n) {
                d(this, i), this.logger = e, this.consentUIPrompt = n, this.uspTries = 0, this.uspTriesLimit = 3, this.callCount = -1, this.browserWindow = t, this.createUspStub()
            }
            return g(i, [{
                key: "checkForCCPA",
                value: function(n) {
                    var i = this;
                    this.browserWindow.Cookiebot ? (this.logger.log("[CMP-v2]: Checking CCPA with cookiebot"), this.browserWindow.Cookiebot.regulations.ccpaApplies ? (this.logger.log("[CMP-V2]: CCPA Region from Cookiebot"), this.browserWindow.__uspapi("getUSPData", 1, function(e, t) {
                        if (!t) return i.logger.log("[CMP-V2]: Failed retrieving USP data use default instead"), n({
                            applies: !0,
                            privacyString: "1---"
                        });
                        n({
                            applies: !0,
                            privacyString: e.uspString
                        })
                    })) : n({
                        applies: !1
                    })) : this.browserWindow.__uspapi("uspPing", 1, function(e, t) {
                        t && e.mode.includes("USP") && e.jurisdiction.includes(e.location.toUpperCase()) ? (i.logger.log("[CMP-V2]: CCPA Region"), i.browserWindow.__uspapi("setUspDftData", 1, function(e, t) {
                            i.logger.log("[CMP-V2]: Setting up data for USP API", JSON.stringify(e), t), i.browserWindow.__uspapi("getUSPData", 1, function(e, t) {
                                if (!t) return i.logger.log("[CMP-V2]: Failed retrieving USP data use default instead"), n({
                                    applies: !0,
                                    privacyString: "1---"
                                });
                                n({
                                    applies: !0,
                                    privacyString: e.uspString
                                })
                            })
                        })) : n({
                            applies: !1
                        })
                    })
                }
            }, {
                key: "setGDPRConsentPrompt",
                value: function() {
                    var e = this;
                    this.consentUIPrompt.setup("Privacy Settings", function() {
                        e.browserWindow.__tcfapi("displayConsentUi", 2, function() {
                            return e.logger.log("[CMP-V2]: GDPR Consent UI displayed")
                        })
                    })
                }
            }, {
                key: "setCCPAConsentPrompt",
                value: function() {
                    var e = this;
                    this.consentUIPrompt.setup("Do Not Sell My Data", function() {
                        e.browserWindow.__uspapi("displayUspUi")
                    })
                }
            }, {
                key: "cmpLoaded",
                value: function(t) {
                    var n = !1;
                    setTimeout(function() {
                        if (!n) return t(!1)
                    }, 1e3), this.browserWindow.__tcfapi("ping", 2, function(e) {
                        return n = !0, null != e && e.cmpLoaded ? t(!0) : t(!1)
                    })
                }
            }, {
                key: "getConsentData",
                value: function(n) {
                    var i = this;
                    this.browserWindow.__tcfapi("getTCData", 2, function(e, t) {
                        return i.callCount++, t && e ? h(e.gdprApplies) || "loading" === (null == (t = null == e ? void 0 : e.cmpStatus) ? void 0 : t.toLowerCase()) || e.gdprApplies && h(null == e ? void 0 : e.eventStatus) ? (i.logger.log("[CMP-V2]: GDPR not yet determined"), n({
                            dataAvailable: !0,
                            gdprApplies: void 0,
                            cmpStatus: null == e ? void 0 : e.cmpStatus,
                            eventStatus: null == e ? void 0 : e.eventStatus
                        })) : !1 === e.gdprApplies ? n({
                            dataAvailable: !0,
                            gdprApplies: !1,
                            cmpStatus: null == e ? void 0 : e.cmpStatus,
                            eventStatus: null == e ? void 0 : e.eventStatus
                        }) : !0 === e.gdprApplies ? i.handleGdprApplies(e, n) : void i.logger.warn("[CMP-V2]: Unexpected gdprApplies status. Data: ".concat(JSON.stringify(e))) : (i.logger.warn("[CMP-V2]: Failed to get TCData"), n({
                            dataAvailable: !1,
                            cmpStatus: null == e ? void 0 : e.cmpStatus,
                            eventStatus: null == e ? void 0 : e.eventStatus
                        }))
                    })
                }
            }, {
                key: "handleGdprApplies",
                value: function(e, t) {
                    var n, i, o, r, s, a, u, c, l, d, g = e.eventStatus.toLowerCase();
                    return "useractioncomplete" === g || "tcloaded" === g ? (n = so(1, e), i = so(3, e), o = so(4, e), r = no(2, e), s = no(7, e), a = no(9, e), u = no(10, e), l = !h(n), d = !h(i), c = !h(i), d = (l = l && d && c) && n && i && o && r && s && a && u, this.logger.debug("[CMP-V2]: Consents available: ".concat(l, ", Consent: ").concat(d, " Data: ").concat(JSON.stringify(e))), t({
                        dataAvailable: !0,
                        gdprChoiceReceived: !0,
                        personalisedAdsConsent: d,
                        gdprApplies: !0,
                        cmpStatus: null == e ? void 0 : e.cmpStatus,
                        eventStatus: null == e ? void 0 : e.eventStatus
                    })) : ("cmpuishown" === g || this.callCount % 8 == 0 && this.logger.warn("[CMP-V2]: Unexpected eventStatus. Data: ".concat(JSON.stringify(e))), t({
                        dataAvailable: !0,
                        gdprChoiceReceived: !1,
                        gdprApplies: !0,
                        cmpStatus: null == e ? void 0 : e.cmpStatus,
                        eventStatus: null == e ? void 0 : e.eventStatus
                    }))
                }
            }, {
                key: "createUspStub",
                value: function() {
                    function e() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        i.warn("[CMP-V2] USP is still in stub mode. Calling to ".concat(t[0], " API will be unsuccessful")), "function" == typeof t[2] && t[2](void 0, !1)
                    }
                    var t, n = this,
                        i = this.logger,
                        o = this.browserWindow;
                    void 0 === o.__uspapi && (o.__uspapi = e, t = setInterval(function() {
                        n.uspTries++, o.__uspapi !== e ? (i.debug("[CMP-V2]: USP stub function has been replaced"), clearInterval(t)) : n.uspTries < n.uspTriesLimit ? i.debug("[CMP-V2]: USP stub function has NOT been replaced, will retry") : (i.warn("[CMP-V2]: USP stub function has NOT been replaced, but the timeout has been reached"), clearInterval(t))
                    }, 300))
                }
            }]), i
        }(),
        uo = function() {
            function a(e, t, n, i, o, r, s) {
                d(this, a), this.logger = t, this.reporter = n, this.stubFunctionsGenerator = i, this.consentUIPrompt = o, this.componentStateStore = r, this.settings = s, this.cmpLoadCounter = 0, this.dialogShown = !1, this.browserWindow = e
            }
            return g(a, [{
                key: "enable",
                value: function() {
                    this.componentStateStore.updateState("cmp", pe(this.reporter.getElapsedTime())), this.generateStubs(), this.loadVersion()
                }
            }, {
                key: "generateStubs",
                value: function() {
                    this.settings.getCmpSkipStub() ? this.logger.log("[CMP]: Skipping stubs") : this.stubFunctionsGenerator.generate()
                }
            }, {
                key: "loadVersion",
                value: function() {
                    this.reporter.setStateStatus("cmp_load_wait_start"), this.logger.info("[CMP]: Wait for CMP to load"), this.checkForVersion2()
                }
            }, {
                key: "versionLoader",
                value: function(e) {
                    var t = this,
                        n = e.found,
                        e = e.versionNumber;
                    p(this.version) ? this.logger.warn("[CMP]: Version already loaded: ".concat(e)) : n ? 2 === e ? (this.reporter.setStateStatus("cmp_load_wait_finish"), this.reporter.reportCmpLoadFinish(), this.logger.debug("[CMP]: Loaded version ".concat(e)), this.version = new ao(this.logger, this.browserWindow, this.consentUIPrompt), this.handleCmpLoaded()) : (this.logger.error("[CMP]: Version ".concat(e, " is not supported, disabling personalisation")), this.setDetermination("none", !0, !0)) : (++this.cmpLoadCounter % 10 == 0 && this.logger.debug("[CMP] Waiting for load"), setTimeout(function() {
                        return t.checkForVersion2()
                    }, 50))
                }
            }, {
                key: "checkForVersion2",
                value: function() {
                    var i = this;
                    if (this.settings.getCmpSkipStub() && !this.browserWindow.__tcfapi) return this.logger.log("[CMP]: Stub function not setup yet"), this.versionLoader({
                        found: !1,
                        versionNumber: 2
                    });
                    this.browserWindow.__tcfapi("ping", null, function(e, t) {
                        var n = e.cmpLoaded;
                        n && i.browserWindow.Cookiebot && !i.browserWindow.Cookiebot.userCountry && (i.logger.log("[CMP]: CookieBot ping response when no user country: ".concat(t, " - ").concat(JSON.stringify(e))), n = !1), i.versionLoader({
                            found: n,
                            versionNumber: 2
                        })
                    })
                }
            }, {
                key: "checkForCCPA",
                value: function(e) {
                    var t;
                    null != (t = this.version) && t.checkForCCPA(e)
                }
            }, {
                key: "cmpLoaded",
                value: function(e) {
                    if (!p(this.version)) return e(!1);
                    this.version.cmpLoaded(e)
                }
            }, {
                key: "getConsentData",
                value: function(e) {
                    var t;
                    null != (t = this.version) && t.getConsentData(e)
                }
            }, {
                key: "setGDPRConsentPrompt",
                value: function() {
                    var e;
                    null != (e = this.version) && e.setGDPRConsentPrompt()
                }
            }, {
                key: "setCCPAConsentPrompt",
                value: function() {
                    var e;
                    null != (e = this.version) && e.setCCPAConsentPrompt()
                }
            }, {
                key: "setNonPrivacyRegionsPrompt",
                value: function() {
                    this.consentUIPrompt.setup("You are outside the CCPA jurisdiction.")
                }
            }, {
                key: "handleGdprNotApplies",
                value: function() {
                    var n, i = this,
                        o = (this.logger.info("[CMP]: GDPR does not apply"), !1);
                    setTimeout(function() {
                        o || (o = !0, i.reporter.setStateStatus("cmp_check_for_ccpa_timeout"), i.logger.warn("[CMP]: USP API is not responding, continue as if not in CCPA region"), i.setDetermination("none", !0, !0))
                    }, 2e3), this.reporter.setStateStatus("cmp_check_for_ccpa_start"), this.checkForCCPA(function(e) {
                        var t = e.applies,
                            e = e.privacyString;
                        o ? i.logger.warn("[CMP]: Got CCPA response, but timeout already reached") : (o = !0, i.reporter.setStateStatus("cmp_check_for_ccpa_finish"), t ? (i.setCCPAConsentPrompt(), n = "Y" === (null == e ? void 0 : e[2].toUpperCase()), i.logger.info("[CMP]: CCPA applies. disablePersonalisation: ".concat(n)), i.setDetermination("ccpa", !n, !1)) : (i.logger.info("[CMP]: Not in CCPA region, continue with personalisation"), i.setNonPrivacyRegionsPrompt(), i.setDetermination("none", !0, !1)))
                    })
                }
            }, {
                key: "handleGdprApplies",
                value: function() {
                    var s = this,
                        a = (this.logger.log("[CMP]: GDPR applies, checking if personalisation is allowed"), this.reporter.setStateStatus("cmp_gdpr_choice_wait_start"), this.setGDPRConsentPrompt(), !1);
                    this.getConsentData(function(e) {
                        var o, r, t = e.gdprChoiceReceived,
                            e = e.personalisedAdsConsent;
                        t && (a = !0, s.reporter.setStateStatus("cmp_gdpr_choice_wait_finish"), s.logger.info("[CMP]: GDPR decision received via short-circuit. Allow personalisation: ".concat(e)), s.setDetermination("gdpr", Boolean(e), !1)), a || (s.dialogShown = !0, s.reporter.setStateStatus("cmp_prompt_shown"), o = 0, r = setInterval(function() {
                            s.getConsentData(function(e) {
                                var t = e.gdprChoiceReceived,
                                    n = e.personalisedAdsConsent,
                                    i = e.cmpStatus,
                                    e = e.eventStatus;
                                t ? (a = !0, s.reporter.setStateStatus("cmp_gdpr_choice_wait_finish"), s.logger.info("[CMP]: GDPR decision received. Allow personalisation: ".concat(n)), clearInterval(r), s.setDetermination("gdpr", Boolean(n), !1)) : ++o % 10 == 0 && s.logger.info("[CMP]: Waiting for GDPR personalisation choice. cmpStatus: ".concat(i, ", eventStatus: ").concat(e))
                            })
                        }, 100))
                    })
                }
            }, {
                key: "handleCmpLoaded",
                value: function() {
                    function o(e) {
                        r.reporter.setStateStatus("cmp_gdpr_applies_check_finish"), !1 === e ? r.handleGdprNotApplies() : r.settings.isRequestGdprPersonalisation() ? r.handleGdprApplies() : (r.reporter.setStateStatus("cmp_gdpr_choice_wait_finish"), r.logger.info("[CMP]: The GDPR applies, but we will assume they do not allow personalisation (show limited ads)"), r.setDetermination("gdpr", !1, !1))
                    }
                    var r = this;
                    this.logger.info("[CMP]: Checking if the GDPR applies"), this.reporter.setStateStatus("cmp_gdpr_applies_check_start");
                    this.getConsentData(function(e) {
                        var t, n, i, e = e.gdprApplies;
                        h(e) ? (t = 0, r.logger.debug("[CMP]: Setting a check interval of ".concat(250, "ms")), n = !1, i = setInterval(function() {
                            r.getConsentData(function(e) {
                                e = e.gdprApplies;
                                h(e) ? t++ % 4 == 0 && r.logger.info("[CMP]: Waiting for GDPR determination") : (clearInterval(i), n || (n = !0, o(e)))
                            })
                        }, 250)) : (r.logger.debug("[CMP]: GDPR status already available, processing immediately"), o(e))
                    })
                }
            }, {
                key: "setDetermination",
                value: function(e, t, n) {
                    var i = this.componentStateStore.state.cmp._tag;
                    "gdpr" === e && this.reporter.reportCmpGdprDetermined(), "loading" == i ? (e = {
                        jurisdiction: e,
                        timeout: n,
                        allowPersonalisation: t,
                        dialogShown: this.dialogShown
                    }, this.logger.info("[CMP]: Determination: ".concat(JSON.stringify(e))), n = this.reporter.getElapsedTime(), this.componentStateStore.updateState("cmp", ve(this.componentStateStore.state.cmp, n, e))) : this.logger.error("[CMP]: CMP in unexpected state: ".concat(i))
                }
            }]), a
        }(),
        co = function() {
            function i(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "div[data-fuse-privacy-tool]",
                    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "fuse-privacy-tool";
                d(this, i), this.browserWindow = e, this.domSelector = t, this.elementId = n
            }
            return g(i, [{
                key: "setup",
                value: function(e, t) {
                    var n, i = this.browserWindow.document.querySelector(this.domSelector);
                    i && (t ? ((n = document.createElement("a")).href = "javascript:void(0)", n.id = this.elementId, n.innerHTML = e, n.addEventListener("click", t), i.appendChild(n)) : i.textContent = e)
                }
            }]), i
        }(),
        lo = function() {
            function n(e, t) {
                d(this, n), this.logger = e, this.tcData = {
                    cmpStatus: "loaded",
                    eventStatus: "tcloaded",
                    tcfPolicyVersion: 2,
                    cmpVersion: 44,
                    cmpId: 10
                }, this._listenerId = 1, this.browserWindow = t, this.allowedOrigin = t.document.referrer ? new URL(t.document.referrer).origin : ""
            }
            return g(n, [{
                key: "load",
                value: function() {
                    var r = this;
                    this.browserWindow.__tcfapi = function(e, t, n, i) {
                        switch (e) {
                            case "ping":
                                return r._handlePing(n);
                            case "getTCData":
                                return r._handleGetTCData(n);
                            case "addEventListener":
                                r.logger.log("[CMP]: Add Event Listener command does nothing. Listener ID: ".concat(r._listenerId));
                                var o = Object.assign(Object.assign({}, r.tcData), {
                                    listenerId: r._listenerId
                                });
                                return r._listenerId++, n(o, !0);
                            case "removeEventListener":
                                return r.logger.log("[CMP]: Remove Event Listener command does nothing. Listener ID: ".concat(i)), n(Object.assign({}, r.tcData), !0);
                            default:
                                return r.logger.log("[CMP]: Unsupported command: ".concat(e)), n({}, !1)
                        }
                    }, this.browserWindow.addEventListener("message", function(e) {
                        r.allowedOrigin && e.origin !== r.allowedOrigin ? r.logger.log("[CMP]: Ignoring message from origin ".concat(e.origin)) : "set-tc-data" === e.data.type ? r.tcData = Object.assign({}, e.data.data) : r.logger.log("[CMP]: unknown iframe message: ".concat(null == (e = e.data) ? void 0 : e.type))
                    })
                }
            }, {
                key: "_handlePing",
                value: function(e) {
                    e({
                        cmpLoaded: !0,
                        cmpStatus: this.tcData.cmpStatus,
                        cmpVersion: this.tcData.cmpVersion,
                        displayStatus: "disabled",
                        apiVersion: "2",
                        cmpId: this.tcData.cmpId,
                        gdprApplies: this.tcData.gdprApplies
                    })
                }
            }, {
                key: "_handleGetTCData",
                value: function(e) {
                    e(Object.assign({}, this.tcData), !0)
                }
            }]), n
        }(),
        go = new(function() {
            function e() {
                d(this, e)
            }
            return g(e, [{
                key: "getStubFunctionsGenerator",
                value: function() {
                    return this.stubFunctionsGenerator || (this.stubFunctionsGenerator = new ro(f.getLogger(), f.getBrowserWindowObject())), this.stubFunctionsGenerator
                }
            }, {
                key: "getConsentManager",
                value: function() {
                    return this.consentManager || (this.consentManager = new uo(f.getBrowserWindowObject(), f.getLogger(), S.getReporter(), this.getStubFunctionsGenerator(), new co(f.getBrowserWindowObject()), S.getComponentStatusStore(), i.getSettings())), this.consentManager
                }
            }, {
                key: "getCmpProviderLoader",
                value: function() {
                    return this.cmpProviderLoader || (this.cmpProviderLoader = new oo(f.getLogger(), f.getBrowserWindowObject(), S.getReporter())), this.cmpProviderLoader
                }
            }, {
                key: "getIframeCmpManager",
                value: function() {
                    return this.iframeCmpManager || (this.iframeCmpManager = new lo(f.getLogger(), f.getBrowserWindowObject())), this.iframeCmpManager
                }
            }]), e
        }()),
        ho = function() {
            function e() {
                d(this, e)
            }
            return g(e, [{
                key: "code",
                value: function() {
                    return "1---"
                }
            }]), e
        }(),
        fo = function() {
            function u(e, t, n, i, o, r, s, a) {
                d(this, u), this.pubId = e, this.adServer = t, this.logger = n, this.browserWindow = i, this.consentManager = o, this.reporter = r, this.gptPushFn = s, this.sco = a
            }
            return g(u, [{
                key: "loadAmazonUam",
                value: function(n, i, e, t, o, r) {
                    var s;

                    function a(e, t) {
                        i[n]._Q.push([e, t])
                    }
                    i[n] || (i[n] = {
                        init: function() {
                            a("i", arguments)
                        },
                        fetchBids: function() {
                            a("f", arguments)
                        },
                        setDisplayBids: function() {},
                        targetingKeys: function() {
                            return []
                        },
                        _Q: []
                    }, (s = e.createElement(t)).async = !0, s.src = o, "function" == typeof r && (s.readyState ? s.onreadystatechange = function() {
                        "loaded" !== s.readyState && "complete" !== s.readyState || (s.onreadystatechange = null, r())
                    } : s.onload = function() {
                        r()
                    }), (o = e.getElementsByTagName(t)[0]).parentNode.insertBefore(s, o))
                }
            }, {
                key: "load",
                value: function(e, t) {
                    var n = this;
                    if (this.logger.debug("[UAM]: Loading script"), this.reporter.setStateStatus("uam_script_load_start"), this.loadAmazonUam("apstag", this.browserWindow, this.browserWindow.document, "script", "//c.amazon-adsystem.com/aax2/apstag.js", function() {
                            n.reporter.setStateStatus("uam_script_load_finish"), n.init(e, t)
                        }), !this.browserWindow.apstag) return this.logger.error("[INIT]: UAM script load failed.")
                }
            }, {
                key: "init",
                value: function(e, t) {
                    var n = this;
                    this.reporter.setStateStatus("uam_initialise_start"), this.browserWindow.apstag.init(this.getUamConfig(e), function() {
                        n.logger.info("[UAM]: Initialisation finished"), n.reporter.setStateStatus("uam_initialise_finish"), t()
                    })
                }
            }, {
                key: "getUamConfig",
                value: function(e) {
                    var t = {};
                    return e || (t.gdpr = {
                        cmpTimeout: 0
                    }), !h(this.sco) && Object.getOwnPropertyNames(this.sco).length && (t.schain = {
                        ver: "1.0",
                        complete: 1,
                        nodes: [{
                            asi: this.sco.asi,
                            sid: this.sco.sellerId,
                            hp: 1
                        }]
                    }), Object.assign({
                        pubID: this.pubId,
                        adServer: this.adServer
                    }, t)
                }
            }, {
                key: "makeBids",
                value: function(e, t) {
                    var n = this;
                    this.browserWindow.apstag.fetchBids({
                        slots: e
                    }, function(e) {
                        n.gptPushFn(function() {
                            n.browserWindow.apstag.setDisplayBids(), t(e)
                        })
                    })
                }
            }]), u
        }(),
        po = new(function() {
            function e() {
                d(this, e)
            }
            return g(e, [{
                key: "getCcpaPrivacyStringCoder",
                value: function() {
                    return new ho
                }
            }, {
                key: "getUamAdServer",
                value: function() {
                    return "googletag"
                }
            }, {
                key: "getUam",
                value: function() {
                    var e;
                    return this.uam || (e = i.getSettings(), this.uam = new fo(e.getUamSettings().pubID, po.getUamAdServer(), f.getLogger(), f.getBrowserWindowObject(), go.getConsentManager(), S.getReporter(), w, e.getSco())), this.uam
                }
            }]), e
        }());
    var A, _, vo = function() {
            function r(e, t, n, i, o) {
                d(this, r), this.logger = e, this.settings = t, this.viewportInfo = n, this.isLowDwellPage = i, this.componentStateStore = o, this.auctionCounter = 0
            }
            return g(r, [{
                key: "plan",
                value: function(e, t) {
                    var n = "".concat(++this.auctionCounter),
                        i = this.viewportInfo.getCurrentBreakpoint().name,
                        o = this.settings.getHbTimeout(i),
                        r = this.isLowDwellPage(),
                        s = this.settings.isUamEnabledAtBP(i),
                        a = this.settings.isPrebidEnabledAtBP(i),
                        u = (s || a || this.logger.debug("[PLANNER][".concat(n, "]: Headerbidding is not configured at breakpoint ").concat(i)), this.getMaxOffset(t)),
                        t = this.settings.getAuctionMaxSlots(),
                        e = this.sortSlotsByViewport(n, e).filter(function(e) {
                            return e.zoneDiv.getBoundingClientRect().top < u
                        }).slice(0, t),
                        t = e.filter(function(e) {
                            return e.allowHeaderBidding
                        }),
                        c = 0 < t.length;
                    return {
                        auctionId: n,
                        usePrebid: !r && this.isUsePrebid(a, n, c),
                        useUam: !r && this.isUseUam(s, n, c),
                        hbTimeout: o,
                        hbSlots: t,
                        breakpointName: i,
                        slots: e
                    }
                }
            }, {
                key: "sortSlotsByViewport",
                value: function(e, t) {
                    var t = t.sort(function(e, t) {
                            e = e.zoneDiv.getBoundingClientRect(), t = t.zoneDiv.getBoundingClientRect();
                            return e.top - t.top
                        }),
                        n = t.map(function(e) {
                            return e.slotDivId
                        });
                    return this.logger.debug("[PLANNER][".concat(e, "]: Slot priority order: ").concat(JSON.stringify(n))), t
                }
            }, {
                key: "getMaxOffset",
                value: function(e) {
                    var t = this.viewportInfo.getViewportStatus(),
                        n = t.offset,
                        t = t.innerHeight;
                    return e ? n.y + t + t * e : 1 / 0
                }
            }, {
                key: "isUseUam",
                value: function(e, t, n) {
                    var i = "ready" === this.componentStateStore.state.uam._tag;
                    return e && !i ? this.logger.info("[AUCTION][".concat(t, "]: UAM has not finished loading and will be excluded from the auction")) : e && !n && this.logger.debug("[AUCTION][".concat(t, "]: UAM has been excluded from the auction because no headerbidding slots are enabled")), e && i && n
                }
            }, {
                key: "isUsePrebid",
                value: function(e, t, n) {
                    var i = "ready" === this.componentStateStore.state.prebid._tag;
                    return e && !i ? this.logger.info("[AUCTION][".concat(t, "]: Prebid has not finished loading and will be excluded from the auction")) : e && !n && this.logger.debug("[AUCTION][".concat(t, "]: Prebid has been excluded from the auction because no headerbidding slots are enabled")), e && i && n
                }
            }]), r
        }(),
        bo = ((e = A = A || {}).GPT_REQUEST = "GPT_REQUEST", e.GPT_RESPONSE = "GPT_RESPONSE", e.GPT_RENDERED = "GPT_RENDERED", e.GPT_LOADED = "GPT_LOADED", e.CANCELLED = "CANCELLED", e.SUPERSEDED = "SUPERSEDED", (e = _ = _ || {})[e.PREBID_REQUEST = 0] = "PREBID_REQUEST", e[e.PREBID_RESPONSE = 1] = "PREBID_RESPONSE", e[e.PREBID_SKIPPED = 2] = "PREBID_SKIPPED", e[e.UAM_REQUEST = 3] = "UAM_REQUEST", e[e.UAM_RESPONSE = 4] = "UAM_RESPONSE", e[e.UAM_SKIPPED = 5] = "UAM_SKIPPED", e[e.GPT_REQUEST = 6] = "GPT_REQUEST", e[e.CANCELLED = 7] = "CANCELLED", function() {
            function n(e, t) {
                d(this, n), this.logger = e, this.reporter = t, this.auctions = {}, this.activeGptCalls = {}
            }
            return g(n, [{
                key: "createNewAuction",
                value: function(e, t, n) {
                    this.auctions[e.auctionId] = {
                        started: this.reporter.getElapsedTime(),
                        creativeDivIds: e.slots.map(function(e) {
                            return e.slotDivId
                        }),
                        slotNames: e.slots.map(function(e) {
                            return e.zoneTemplate.slot
                        }),
                        hbDivIds: e.hbSlots.map(function(e) {
                            return e.slotDivId
                        }),
                        uamIncluded: e.useUam,
                        uamResponded: !1,
                        uamSkipped: !1,
                        prebidIncluded: e.usePrebid,
                        prebidResponded: !1,
                        prebidSkipped: !1,
                        uamCancelled: !1,
                        prebidCancelled: !1,
                        gptRequestSent: !1,
                        auctionPhaseCallback: t,
                        slotStatus: e.slots.reduce(function(e, t) {
                            return Object.assign(Object.assign({}, e), F({}, t.slotDivId, {
                                slotPhaseCallback: function(e) {
                                    return n(t, e)
                                }
                            }))
                        }, {})
                    }
                }
            }, {
                key: "getAuctionStatus",
                value: function(e) {
                    return this.auctions[e]
                }
            }, {
                key: "getActiveGptCalls",
                value: function() {
                    return Object.keys(this.activeGptCalls)
                }
            }, {
                key: "getSlotStatus",
                value: function(e, t) {
                    return this.auctions[e].slotStatus[t]
                }
            }, {
                key: "getSlotStatusInferredAuction",
                value: function(e, t) {
                    var n = this.activeGptCalls[e];
                    if (n) return this.auctions[n].slotStatus[e];
                    this.logger.debug("[AUCTION-STATUS][".concat(t, "]: Could not find active GPT call for ").concat(e))
                }
            }, {
                key: "onPrebidRequest",
                value: function(e) {
                    e = this.auctions[e];
                    e.prebidRequestTime = this.reporter.getElapsedTime(), e.auctionPhaseCallback(_.PREBID_REQUEST)
                }
            }, {
                key: "onPrebidResponse",
                value: function(e) {
                    e = this.auctions[e];
                    e.prebidResponseTime = this.reporter.getElapsedTime(), e.prebidResponded = !0, e.auctionPhaseCallback(_.PREBID_RESPONSE)
                }
            }, {
                key: "onPrebidSkipped",
                value: function(e) {
                    e = this.auctions[e];
                    e.prebidSkipped = !0, e.auctionPhaseCallback(_.PREBID_SKIPPED)
                }
            }, {
                key: "onUamRequest",
                value: function(e) {
                    e = this.auctions[e];
                    e.uamRequestTime = this.reporter.getElapsedTime(), e.auctionPhaseCallback(_.UAM_REQUEST)
                }
            }, {
                key: "onUamSkipped",
                value: function(e) {
                    e = this.auctions[e];
                    e.uamSkipped = !0, e.auctionPhaseCallback(_.UAM_SKIPPED)
                }
            }, {
                key: "onUamResponse",
                value: function(e) {
                    e = this.auctions[e];
                    e.uamResponseTime = this.reporter.getElapsedTime(), e.uamResponded = !0, e.auctionPhaseCallback(_.UAM_RESPONSE)
                }
            }, {
                key: "cancelAuction",
                value: function(e) {
                    e = this.auctions[e];
                    e.cancelled = this.reporter.getElapsedTime(), e.auctionPhaseCallback(_.CANCELLED)
                }
            }, {
                key: "removeFromGptActive",
                value: function(e) {
                    var t = this.activeGptCalls[e];
                    t ? (this.logger.debug("[AUCTION][".concat(t, "]: Removed ").concat(e, " from GPT active list")), delete this.activeGptCalls[e]) : this.logger.debug("[AUCTION]: Could not find ".concat(e, " in the GPT active list"))
                }
            }, {
                key: "onGptRequest",
                value: function(n, e) {
                    var i = this;
                    e.forEach(function(e) {
                        var t = i.getSlotStatus(n, e);
                        t && (t.gptRequestTime = i.reporter.getElapsedTime(), t.slotPhaseCallback(A.GPT_REQUEST), (t = i.activeGptCalls[e]) && (i.logger.warn("[AUCTION][".concat(n, "]: ").concat(e, " is part of an uncompleted auction: ").concat(t, " and is marked superseded")), i.auctions[t].slotStatus[e].supersededTime = i.reporter.getElapsedTime(), i.auctions[t].slotStatus[e].slotPhaseCallback(A.SUPERSEDED)), i.activeGptCalls[e] = n)
                    }), this.auctions[n].gptRequestSent = !0, this.auctions[n].auctionPhaseCallback(_.GPT_REQUEST)
                }
            }, {
                key: "onGptResponse",
                value: function(e) {
                    e = this.getSlotStatusInferredAuction(e, A.GPT_RESPONSE);
                    e && (e.gptResponseTime = this.reporter.getElapsedTime(), e.slotPhaseCallback(A.GPT_RESPONSE))
                }
            }, {
                key: "onGptSlotRendered",
                value: function(e, t) {
                    var n = this.getSlotStatusInferredAuction(e, A.GPT_RENDERED);
                    n && (n.gptOnRenderTime = this.reporter.getElapsedTime(), t || this.removeFromGptActive(e), n.slotPhaseCallback(A.GPT_RENDERED))
                }
            }, {
                key: "onGptSlotLoaded",
                value: function(e) {
                    var t = this.getSlotStatusInferredAuction(e, A.GPT_LOADED);
                    t && (t.gptOnLoadTime = this.reporter.getElapsedTime(), this.removeFromGptActive(e), t.slotPhaseCallback(A.GPT_LOADED))
                }
            }, {
                key: "cancelSlotAuction",
                value: function(e, t, n) {
                    this.logger.info("[AUCTION][".concat(e, "]: Cancelled auction for ").concat(t, " because ").concat(n));
                    n = this.getSlotStatus(e, t);
                    n && (n.cancelledTime = this.reporter.getElapsedTime(), this.removeFromGptActive(t), n.slotPhaseCallback(A.CANCELLED))
                }
            }, {
                key: "getAuctions",
                value: function() {
                    return this.auctions
                }
            }]), n
        }()),
        mo = function(e) {
            return Array.isArray(e) ? "fluid" !== e[0] : "fluid" !== e
        },
        yo = function(e) {
            return e.filter(mo)
        };

    function So(e, t, n) {
        function i(e) {
            if (e.includes("px")) return e = Number(e.split("px")[0]), Number.isNaN(e) ? void 0 : e
        }
        var o = i(e.getComputedStyle(t).maxWidth),
            r = i(e.getComputedStyle(t).maxHeight);
        return n.filter(function(e) {
            return !mo(e) || !p(o) || e[0] <= o
        }).filter(function(e) {
            return !mo(e) || !p(r) || e[1] <= r
        })
    }
    var ko = function() {
            function l(e, t, n, i, o, r, s, a, u) {
                var c = this;
                d(this, l), this.fuseSlotRegistry = e, this.prebidGlobal = t, this.uam = n, this.logger = i, this.reporter = o, this.settings = r, this.events = s, this.touchObserver = a, this.telemetry = u, this.firstPrebidRequest = !1, this.firstUamRequest = !1, this.firstPrebidResponse = !1, this.firstUamResponse = !1, this.auctionState = new bo(i, o), m.onSlotLoaded.subscribe(function(e) {
                    c.reportOnLoadEvent(e)
                }), m.onSlotResponse.subscribe(function(e) {
                    c.reportSlotResponseReceived(e)
                }), m.onSlotRender.subscribe(function(e) {
                    c.reportOnRenderEndedEvent(e)
                })
            }
            return g(l, [{
                key: "sendGptRequest",
                value: function(e, t) {
                    var n = this,
                        i = this.fuseSlotRegistry.filterUndeleted(e, function(e) {
                            n.auctionState.cancelSlotAuction(t, e, "slot DOM element was deleted")
                        });
                    this.auctionState.onGptRequest(t, e), this.fuseSlotRegistry.clearFuseSkins(), this.touchObserver.waitForTouchEnd(function() {
                        n.logger.debug("Touch has ended, refreshing ads"), yn(n.fuseSlotRegistry.getSlots(i), t)
                    })
                }
            }, {
                key: "handleHBResponse",
                value: function(e, t, n) {
                    var i, o, r = this.auctionState.getAuctionStatus(e);
                    r.gptRequestSent ? t && this.logger.debug("[AUCTION][".concat(e, "]: Received ").concat(t, " bid after adserver request already sent")) : (i = r.prebidIncluded, o = r.uamIncluded, n ? (this.logger.info("[AUCTION][".concat(e, "]: Timeout reached with missing responses, sending to GPT.\n          Status: ").concat(JSON.stringify(r))), this.sendGptRequest(r.creativeDivIds, e)) : o && i ? (r.uamResponded || r.uamCancelled) && (r.prebidResponded || r.prebidCancelled) ? (this.logger.info("[AUCTION][".concat(e, "]: All necessary responses received, sending to GPT")), this.sendGptRequest(r.creativeDivIds, e)) : this.logger.debug("[AUCTION][".concat(e, "]: Still waiting for responses. Status: ").concat(JSON.stringify(r))) : (this.logger.debug("[AUCTION][".concat(e, "]: ").concat(t, " complete, calling GPT")), this.sendGptRequest(r.creativeDivIds, e)))
                }
            }, {
                key: "setAuctionTimeout",
                value: function(e, t) {
                    var n = this,
                        e = e + 250;
                    this.logger.debug("[AUCTION][".concat(t, "]: Set auction failure timeout of ").concat(e)), setTimeout(function() {
                        return n.handleHBResponse(t, null, !0)
                    }, e)
                }
            }, {
                key: "startPrebidAuction",
                value: function(r, s, e) {
                    var a, u = this,
                        t = JSON.stringify(s);
                    this.reporter.addAdEvent("prebid_request_".concat(t), {
                        auctionId: r
                    }), this.logger.info("[AUCTION][".concat(r, "]: Requesting prebid for: ").concat(t)), 0 < s.length ? (this.firstPrebidRequest || (this.firstPrebidRequest = !0, this.reporter.setStateStatus("first_prebid_request")), (a = this.prebidGlobal).requestBids({
                        auctionId: r,
                        adUnitCodes: s,
                        timeout: e,
                        bidsBackHandler: function(t, e) {
                            u.auctionState.onPrebidResponse(r);
                            var o, n = Object.keys(t);
                            if (u.logger.info("[AUCTION][".concat(r, "]: Prebid auction complete. Any-bidder-timeout?=").concat(e, ". Responding slots: ").concat(JSON.stringify(n))), 0 < n.length) {
                                if (u.logger.debug("[AUCTION][".concat(r, "]: Prebid response details: ").concat(JSON.stringify(t))), u.telemetry)
                                    for (var i in t) ! function(n) {
                                        var i, e = u.fuseSlotRegistry.getSlot(n);
                                        null != (o = null == e ? void 0 : e.sizesHb) && o.length && (i = ke(e.sizesHb), t[n].bids.forEach(function(e) {
                                            var t;
                                            (e.width > i[0] || e.height > i[1]) && (u.logger.debug("[AUCTION][".concat(r, "][").concat(n, "]: Received a rogue bid ").concat(e.width, "x").concat(e.height, "  with mismatch maxArea ").concat(i, " from ").concat(e.bidder, ": ").concat(JSON.stringify(e))), null != (t = u.telemetry)) && t.recordRogueBidderResponse(n, e, i)
                                        }))
                                    }(i)
                            } else u.logger.warn("[AUCTION][".concat(r, "]: No bid responses received from prebid"));
                            u.reporter.addAdEvent("prebid_response_".concat(JSON.stringify(n)), {
                                auctionId: r
                            }), u.firstPrebidResponse || (u.firstPrebidResponse = !0, u.reporter.setStateStatus("first_prebid_response"));
                            try {
                                a.setTargetingForGPTAsync(s), u.handleHBResponse(r, "prebid", !1)
                            } catch (e) {
                                u.logger.error("[AUCTION][".concat(r, "]: ").concat(e.message, " ").concat(e.stack))
                            }
                        }
                    })) : (this.logger.warn("[AUCTION][".concat(r, "]: Skipped prebid call because no eligible slots available")), this.auctionState.onPrebidSkipped(r))
                }
            }, {
                key: "startUamAuction",
                value: function(t, e) {
                    var n, i = this;
                    e.length ? (n = JSON.stringify(e.map(function(e) {
                        return e.slotID
                    })), this.reporter.addAdEvent("uam_request_".concat(n), {
                        auctionId: t
                    }), this.logger.info("[AUCTION][".concat(t, "]: Sending UAM request for ").concat(n)), this.logger.debug("[AUCTION][".concat(t, "]: Sending UAM request with slot details: ").concat(JSON.stringify(e))), this.firstUamRequest || (this.firstUamRequest = !0, this.reporter.setStateStatus("first_uam_request")), this.uam.makeBids(e, function(e) {
                        i.logger.info("[AUCTION][".concat(t, "]: Received UAM response")), i.logger.debug("[AUCTION][".concat(t, "]: UAM response details: "), JSON.stringify(e)), i.reporter.addAdEvent("uam_response_".concat(n), {
                            auctionId: t
                        }), i.firstUamResponse || (i.firstUamResponse = !0, i.reporter.setStateStatus("first_uam_response")), i.auctionState.onUamResponse(t), i.handleHBResponse(t, "uam", !1)
                    })) : (this.logger.warn("[AUCTION][".concat(t, "]: Skipped UAM bid because no UAM slots found")), this.auctionState.onUamSkipped(t))
                }
            }, {
                key: "startGptOnlyAuction",
                value: function(e, t) {
                    this.logger.debug("[AUCTION][".concat(e, "]: Starting GPT-only auction")), this.sendGptRequest(t, e)
                }
            }, {
                key: "prepareUamRequest",
                value: function(e, t) {
                    return t.map(function(e) {
                        return {
                            slotID: e.slotDivId,
                            slotName: e.zoneTemplate.slot,
                            sizes: e.sizesHb
                        }
                    })
                }
            }, {
                key: "executeAuction",
                value: function(e, t, n) {
                    var i, o = this,
                        r = (this.events.onAuctionEvent.emit(Object.assign({
                            auctionEventType: "started"
                        }, e)), e.auctionId),
                        s = e.slots.map(function(e) {
                            return e.slotDivId
                        });
                    this.auctionState.createNewAuction(e, t, n), this.logger.log("[AUCTION][".concat(r, "]: Running with plan: ").concat((t = {
                        auctionId: (t = e).auctionId,
                        usePrebid: t.usePrebid,
                        useUam: t.useUam,
                        hbSlots: t.hbSlots.map(function(e) {
                            return e.slotDivId
                        }),
                        gptSlots: t.slots.map(function(e) {
                            return e.slotDivId
                        }),
                        gpids: t.slots.map(function(e) {
                            return e.gpid
                        }),
                        hbTimeout: t.hbTimeout,
                        breakpointName: t.breakpointName
                    }, JSON.stringify(t)))), this.settings.isYandexEnabled() ? (i = this.settings.getYandexBlockId()) ? (this.logger.log("[AUCTION][".concat(r, "]: Run Yandex with blockId ").concat(i)), window.yaContextCb.push(function() {
                        e.slots.forEach(function(e) {
                            var t = e.slotDivId,
                                e = e.zoneTemplate.id,
                                e = Number(e.substring(7) + t.substring(t.lastIndexOf("-") + 1));
                            o.logger.log("[AUCTION][".concat(r, "][").concat(t, "]: Set pageNumber ").concat(e)), Ya.Context.AdvManager.render({
                                renderTo: "".concat(t),
                                blockId: i,
                                pageNumber: e,
                                onRender: function() {
                                    o.reporter.setStateStatus("yandex_unit_rendered")
                                }
                            })
                        })
                    })) : this.logger.error("[AUCTION][".concat(r, "]: Cannot run Yandex cause yandexBlockId is not set")) : (e.usePrebid && (n = e.hbSlots.map(function(e) {
                        return e.slotDivId
                    }), this.startPrebidAuction(r, n, e.hbTimeout)), e.useUam && (t = this.prepareUamRequest(r, e.hbSlots), this.startUamAuction(r, t)), n = e.usePrebid && !this.auctionState.getAuctionStatus(r).prebidCancelled, t = e.useUam && !this.auctionState.getAuctionStatus(r).uamCancelled, n || t ? (this.reporter.reportHbAuctionStart(), this.setAuctionTimeout(e.hbTimeout, r)) : this.startGptOnlyAuction(r, s))
                }
            }, {
                key: "reportOnLoadEvent",
                value: function(e) {
                    e = e.slot.getSlotElementId();
                    this.auctionState.onGptSlotLoaded(e)
                }
            }, {
                key: "reportSlotResponseReceived",
                value: function(e) {
                    e = e.slot.getSlotElementId();
                    this.auctionState.onGptResponse(e)
                }
            }, {
                key: "reportOnRenderEndedEvent",
                value: function(e) {
                    var t, n = !e.isEmpty,
                        i = e.slot.getSlotElementId(),
                        o = (this.logger.debug("[AUCTION]: ".concat(i, " render event details: ").concat(JSON.stringify(e))), this.fuseSlotRegistry.getSlot(i));
                    o ? (n ? this.logger.info("[AUCTION]: Adserver responded with creative for ".concat(i)) : (t = {
                        fuseSlotId: o.zoneTemplate.id,
                        fuseSlotCode: i,
                        errorType: "MISSING_CREATIVE"
                    }, this.reporter.addSlotProblem(t), this.logger.warn("[AUCTION]: Adserver responded without creative for ".concat(i))), this.telemetry && o.sizes && (t = ke(o.sizes.filter(function(e) {
                        return mo(e)
                    })), 2 === (null == (o = Array.isArray(e.size) ? e.size : null) ? void 0 : o.length)) && (o[1] > t[0] || o[1] > t[1]) && (50 < Ie(o[0], t[0]) || 50 < Ie(o[1], t[1])) && (this.logger.debug("[AUCTION][".concat(i, "]: Received a rogue bid ").concat(o, "  with mismatch maxArea ").concat(t, " from adx: ").concat(JSON.stringify(e))), null != (o = this.telemetry)) && o.recordRogueAdxResponse(i, e, t), this.auctionState.onGptSlotRendered(i, n)) : this.fuseSlotRegistry.isDeletedSlot(i) ? (this.logger.info("[AUCTION]: Slot Render Ended Event fired for deleted unit ".concat(i)), this.auctionState.onGptSlotRendered(i, n)) : this.logger.debug("[AUCTION]: SlotRenderEnded Event fired for non fuse units: ".concat(i, ". HasCreative: ").concat(n))
                }
            }, {
                key: "getStateView",
                value: function() {
                    return this.auctionState
                }
            }]), l
        }(),
        Io = function() {
            function c(e, t, n, i, o, r, s, a, u) {
                d(this, c), this.logger = e, this.browserWindow = t, this.executeAuction = n, this.planAuction = i, this.isDeletedSlot = o, this.getCurrentBreakpointName = r, this.viewportInfo = s, this.settings = a, this.setTargeting = u, this.refreshTimers = {}, this.refreshCounts = {}, this.scheduledRefresh = {}, this.disabledSlots = [], this.queuedSlots = [], this.triggeredAuctions = {}, this.auctionBlockSlots = [], this.auctionBlockTimeoutHandle = null, this.auctionBlockTriggered = null, this.anyAuctionExecuted = !1
            }
            return g(c, [{
                key: "queueSlots",
                value: function(e) {
                    var t, n = this,
                        i = this.getCurrentBreakpointName(),
                        e = e.filter(function(e) {
                            return n.settings.isSlotEnabledForBreakpoint(e.zoneTemplate.id, i) ? e.currentlyActive ? n.isScheduled(e) ? (n.logger.debug("[SCHEDULER]: Skipped ".concat(e.slotDivId, " because it is already scheduled")), !1) : !n.isRefreshDisabled(e.slotDivId) || (n.logger.debug("[SCHEDULER]: Skipped ".concat(e.slotDivId, " because it is disabled")), !1) : (n.logger.info("[SCHEDULER]: Skipped ".concat(e.slotDivId, " because it is hasn't activated")), !1) : (n.logger.debug("[SCHEDULER]: Skipped ".concat(e.slotDivId, " because no sizes mapped at the current breakpoint (").concat(i, ")")), !1)
                        });
                    0 < e.length && (t = e.map(function(e) {
                        return e.slotDivId
                    }), this.logger.info("[SCHEDULER]: Added ".concat(t, " to auction queue")), e.forEach(function(e) {
                        return n.queuedSlots.push(e)
                    }))
                }
            }, {
                key: "isScheduled",
                value: function(t) {
                    return 0 < this.queuedSlots.filter(function(e) {
                        return e.slotDivId === t.slotDivId
                    }).length
                }
            }, {
                key: "isTemplateScheduled",
                value: function(t) {
                    return 0 < this.queuedSlots.filter(function(e) {
                        return e.zoneTemplate.id === t
                    }).length
                }
            }, {
                key: "isRefreshDisabled",
                value: function(t) {
                    return 0 < this.disabledSlots.filter(function(e) {
                        return e === t
                    }).length
                }
            }, {
                key: "purgeDeletedFromQueue",
                value: function() {
                    var t = this;
                    this.queuedSlots = this.queuedSlots.filter(function(e) {
                        return !t.isDeletedSlot(e.slotDivId) || (t.logger.info("[SCHEDULER]: Removed deleted slot ".concat(e.slotDivId, " from queue")), !1)
                    })
                }
            }, {
                key: "runAuction",
                value: function() {
                    if (this.purgeDeletedFromQueue(), 0 === this.queuedSlots.length) return this.logger.log("[SCHEDULER]: Auction will not run because no slots are queued"), [];
                    var e = this.getMissingAuctionBlockSlots();
                    if (0 < e.length) {
                        if (this.auctionBlockTimeoutHandle) return t = this.queuedSlots.map(function(e) {
                            return e.slotDivId
                        }), this.logger.info("[SCHEDULER] Deferred the auction for ".concat(JSON.stringify(t), " because slots missing from the auction block: ").concat(JSON.stringify(e))), this.auctionBlockTriggered = !0, []
                    } else this.auctionBlockTimeoutHandle && (this.logger.info("[SCHEDULER]: Auction block cleared, as requirements satisfied "), this.clearAuctionBlock());
                    var t, n, i = this.planAuction(this.queuedSlots, this.getAuctionMaxViewports());
                    return this.isAnyAuctionExecuted() || (t = this.viewportInfo.getViewportStatus(), n = t.offset.y + t.innerHeight, e = this.queuedSlots.filter(function(e) {
                        return e.zoneDiv.getBoundingClientRect().top < n
                    }), this.setTargeting("zone_count_above_vp", e.length.toString())), this.queuedSlots = this.queuedSlots.filter(function(e) {
                        return -1 === i.slots.indexOf(e)
                    }), this.logger.log("[SCHEDULER]: Starting auction with ".concat(i.slots.length, " slots, ").concat(this.queuedSlots.length, " slots remaining")), this.startAuction(i), i.slots.map(function(e) {
                        return e.slotDivId
                    })
                }
            }, {
                key: "forceRunAuction",
                value: function(e) {
                    var t = this.planAuction([e]);
                    this.logger.log("[SCHEDULER][".concat(t.auctionId, "]: Forcing auction for ").concat(e.slotDivId)), this.startAuction(t)
                }
            }, {
                key: "disableSlotRefresh",
                value: function(t) {
                    this.disabledSlots = this.disabledSlots.filter(function(e) {
                        return e !== t
                    }).concat(t)
                }
            }, {
                key: "enableSlotRefresh",
                value: function(t) {
                    this.disabledSlots = this.disabledSlots.filter(function(e) {
                        return e !== t
                    })
                }
            }, {
                key: "getAuctionMaxViewports",
                value: function() {
                    return this.isAnyAuctionExecuted() ? void 0 : this.settings.getMaxViewportsFirstAuction()
                }
            }, {
                key: "handleOnSlotOutcome",
                value: function(e, t, n) {
                    n !== A.GPT_LOADED || this.triggeredAuctions[e] || (this.triggeredAuctions[e] = !0, 0 < this.queuedSlots.length && (this.logger.debug("[SCHEDULER][".concat(e, "]: The first slot has received a render event, initiating the next auction")), this.runAuction())), n !== A.GPT_LOADED && n !== A.GPT_RENDERED || this.scheduleRefreshTimer(t)
                }
            }, {
                key: "startAuction",
                value: function(n) {
                    var i = this;
                    this.anyAuctionExecuted = !0, this.executeAuction(n, function() {}, function(e, t) {
                        return i.handleOnSlotOutcome(n.auctionId, e, t)
                    })
                }
            }, {
                key: "scheduleRefreshTimer",
                value: function(e) {
                    this.scheduledRefresh[e.slotDivId] || (this.scheduledRefresh[e.slotDivId] = !0, this.setRefreshTimer(e))
                }
            }, {
                key: "getRefreshIntervals",
                value: function() {
                    return JSON.parse(JSON.stringify(this.refreshTimers))
                }
            }, {
                key: "getRefreshingCodes",
                value: function() {
                    return Object.keys(this.refreshTimers)
                }
            }, {
                key: "clearRefreshIntervals",
                value: function() {
                    var t = this;
                    Object.keys(this.refreshTimers).forEach(function(e) {
                        t.logger.debug("[REFRESH]: Clearing refresh timer for ".concat(e)), clearInterval(t.refreshTimers[e])
                    }), this.refreshTimers = {}
                }
            }, {
                key: "reset",
                value: function() {
                    this.clearRefreshIntervals(), this.clearAuctionBlock(), this.refreshCounts = {}, this.scheduledRefresh = {}, this.queuedSlots = []
                }
            }, {
                key: "clearPendingAuctions",
                value: function() {
                    this.queuedSlots = []
                }
            }, {
                key: "setRefreshTimer",
                value: function(e) {
                    var t = e.zoneTemplate.attributes.refresh,
                        n = e.slotDivId;
                    Q(t) && 0 < t ? (this.logger.log("[SCHEDULER]: Setting custom refresh time of ".concat(t, " seconds for ").concat(n)), this.addRefreshInterval(e, t)) : 0 === t ? this.logger.log("[SCHEDULER]: No refresh timer set for ".concat(n)) : (t = this.settings.getDefaultRefreshInterval()) && 0 < t ? (this.logger.log("[SCHEDULER]: Setting default refresh time of ".concat(t, " seconds for ").concat(n)), this.addRefreshInterval(e, t)) : this.logger.debug("[SCHEDULER]: No default refresh timer exists in account settings.")
                }
            }, {
                key: "isSkipRefreshInEdgeBrowser",
                value: function(e) {
                    this.refreshCounts[e.slotDivId] = this.refreshCounts[e.slotDivId] || 0;
                    var t = this.refreshCounts[e.slotDivId] > this.settings.getEdgeHtmlMaxAdsRefreshLimit();
                    return (t || !this.browserWindow.document.hasFocus()) && (this.logger.log((t ? 'will skip refreshing ad(code: "'.concat(e.slotDivId, '") as it reached Edge browser ads refresh limit of ').concat(this.settings.getEdgeHtmlMaxAdsRefreshLimit(), " at the moment - ") : "will skip refreshing ad as browser page/tab is NOT active at the moment - ").concat((new Date).toISOString(), ".")), !0)
                }
            }, {
                key: "isSkipRefreshByCallback",
                value: function(t) {
                    try {
                        return !t.isAllowRefresh()
                    } catch (e) {
                        return this.logger.error("[SCHEDULER][".concat(t.slotDivId, "]: Refresh callback failed with ").concat(e)), !0
                    }
                }
            }, {
                key: "refreshCallback",
                value: function(e) {
                    ne.isEdgeBrowser(this.browserWindow) && this.isSkipRefreshInEdgeBrowser(e) || (this.isSkipRefreshByCallback(e) ? this.logger.log("[".concat(e.slotDivId, "] Refresh blocked by callback")) : this.browserWindow.document.getElementById(e.slotDivId) ? e.zoneDiv && e.isInView() ? (ne.isEdgeBrowser(this.browserWindow) && (this.refreshCounts[e.slotDivId] += 1), this.queueSlots([e]), this.runAuction()) : this.logger.debug("[SCHEDULER]: Not refreshing ".concat(e.slotDivId, " because it is not in view")) : this.logger.warn("[AUCTION]: Could not refresh ".concat(e.slotDivId, " because a div with that id was not found in the DOM")))
                }
            }, {
                key: "addRefreshInterval",
                value: function(e, t) {
                    var n = this;
                    this.refreshTimers[e.slotDivId] && (this.logger.warn("[SCHEDULER]: Refresh timer already set for ".concat(e.slotDivId)), clearInterval(this.refreshTimers[e.slotDivId])), this.refreshTimers[e.slotDivId] = setInterval(function() {
                        n.refreshCallback(e)
                    }, 1e3 * t)
                }
            }, {
                key: "setAuctionBlock",
                value: function(e, t) {
                    var n = this;
                    this.auctionBlockSlots = e.filter(function(e) {
                        var t = n.settings.getZoneTemplate(e);
                        return t ? t.activateCondition ? (n.logger.warn("[SLOTS][".concat(e, "]: Excluded from next-auction slot requirement, because the slot has an activation condition")), !1) : (t = n.getCurrentBreakpointName(), !!n.settings.isSlotEnabledForBreakpoint(e, t) || (n.logger.info("[SLOTS][".concat(e, "]: Excluded from next-auction slot requirement, because it is not enabled at the ").concat(t, " breakpoint")), !1)) : (n.logger.warn("[SLOTS][".concat(e, "]: Excluded from next-auction slot requirement, because the slot does not exist in this tag")), !1)
                    }), 0 < this.auctionBlockSlots.length ? (this.logger.info("[SCHEDULER]: Enabled auction block. Will not proceed until Zones with FuseIds ".concat(JSON.stringify(this.auctionBlockSlots), " are registered, or ").concat(t, "ms have elapsed")), this.auctionBlockTimeoutHandle = setTimeout(function() {
                        n.auctionBlockTriggered ? (n.logger.warn("[SCHEDULER]: Auction block timeout reached, missing: ".concat(JSON.stringify(n.getMissingAuctionBlockSlots()), ". Running deferred auction")), n.clearAuctionBlock(), n.runAuction()) : (0 < n.getMissingAuctionBlockSlots().length && n.logger.warn("[SCHEDULER]: Auction block timeout reached, missing: ".concat(n.getMissingAuctionBlockSlots())), n.clearAuctionBlock())
                    }, t)) : this.logger.info("[SCHEDULER]: Did not enable AuctionBlock, because no (valid) slots specified")
                }
            }, {
                key: "getMissingAuctionBlockSlots",
                value: function() {
                    var t = this;
                    return this.auctionBlockSlots.filter(function(e) {
                        return !t.isTemplateScheduled(e)
                    })
                }
            }, {
                key: "isAnyAuctionExecuted",
                value: function() {
                    return this.anyAuctionExecuted
                }
            }, {
                key: "clearAuctionBlock",
                value: function() {
                    this.auctionBlockSlots = [], this.auctionBlockTriggered = null, this.auctionBlockTimeoutHandle && clearTimeout(this.auctionBlockTimeoutHandle), this.auctionBlockTimeoutHandle = null
                }
            }]), c
        }(),
        wo = "data-fuse",
        Eo = "".concat("div", "[").concat(wo, "]"),
        Co = "data-fuse-reset-at",
        To = function() {
            function a(e, t, n, i, o, r) {
                d(this, a), this.logger = e, this.document = t, this.templateSettings = n, this.fuseSlotFormatter = i, this.getElapsedTime = o, this.getApi = r, this.slotCounter = {}, this.zoneCounter = {}
            }
            return g(a, [{
                key: "prepareZoneDiv",
                value: function(e, t, n, i, o) {
                    return this.logger.debug("[SLOTS][".concat(e, ": Preparing the element")), i.setAttribute("data-fuse-code", "".concat(e)), i.setAttribute("data-fuse-zone-instance", "".concat(t)), i.setAttribute("data-fuse-slot", "".concat(e)), this.templateSettings.isGptPreAuctionEnabled() && i.setAttribute("data-gpid", n), i.setAttribute("data-fuse-processed-at", this.getElapsedTime().toString()), i.removeAttribute(Co), this.document.getElementById(e) ? this.logger.warn("[DOM-SCAN]: Found existing slot element with id ".concat(e)) : ((t = this.document.createElement("div")).setAttribute("id", "".concat(e)), t.classList.add("fuse-slot"), t.style.maxWidth = "inherit", t.style.maxHeight = "inherit", this.fuseSlotFormatter.format(i, o), this.templateSettings.isYandexEnabled() && this.fuseSlotFormatter.updateSlotForYandex(t, o), i.appendChild(t)), i
                }
            }, {
                key: "assignSlotDivId",
                value: function(e) {
                    return "fuse-slot-".concat(e, "-").concat(a.assignCounter(e, this.slotCounter))
                }
            }, {
                key: "assignZoneInstanceId",
                value: function(e) {
                    return "zone-instance-".concat(e, "-").concat(a.assignCounter(e, this.zoneCounter))
                }
            }, {
                key: "assignGpid",
                value: function(e, t, n) {
                    return "".concat(t, "#").concat(n, "-").concat(this.slotCounter[e])
                }
            }, {
                key: "processRawElement",
                value: function(e, t) {
                    var n = e.getAttribute(wo);
                    if (!n) return this.logger.warn("[SLOTS]: Empty data-fuse attribute ".concat(n)), null;
                    var i = this.templateSettings.generateZoneTemplate(n, this.getApi());
                    if (!i) return this.logger.warn("[SLOTS]: Unknown ZoneCode found in data-fuse attribute ".concat(n)), null;
                    var n = i.id,
                        o = e.getAttribute("data-fuse-code"),
                        r = e.getAttribute(Co),
                        s = null == (s = e.id) || !s.trim() || null == (s = e.id) ? void 0 : s.trim();
                    if (t) {
                        if (o && !r) return this.logger.debug("[SLOTS]: Skip ".concat(o, " because it was already processed")), null;
                        o && r && this.logger.debug("[SLOTS]: Processing ".concat(o, " again because it has been reset"))
                    } else o && this.logger.warn("[SLOTS]: Processing ".concat(o, " again. This is likely to be an error, but preserved for backwards compatibility"));
                    t = this.assignSlotDivId(n), r = this.assignZoneInstanceId(n), o = this.assignGpid(n, i.slot, "single");
                    return this.prepareZoneDiv(t, r, o, e, i), {
                        zoneTemplate: i,
                        slotDivId: t,
                        zoneDiv: e,
                        zoneDivId: s,
                        zoneInstanceId: r,
                        gpid: o,
                        targeting: a.extractTargeting(e)
                    }
                }
            }, {
                key: "findElementWithDomId",
                value: function(e) {
                    var t = this.document.querySelectorAll("".concat("div", '[id="').concat(e, '"][').concat(wo, "]"));
                    return 0 == t.length ? this.logger.warn("[SLOTS]: No DOM element found with both id='".concat(e, "' AND a data-fuse attribute")) : 1 < t.length && this.logger.warn("[SLOTS]: Multiple DOM elements found with id '".concat(e, "'")), t
                }
            }, {
                key: "findAllFuseElements",
                value: function() {
                    return this.document.querySelectorAll(Eo)
                }
            }, {
                key: "findElementsWithTemplateId",
                value: function(e) {
                    return this.document.querySelectorAll("".concat("div", "[").concat(wo, '="').concat(e, '"]'))
                }
            }, {
                key: "processRawElements",
                value: function(e, t) {
                    var n = this,
                        i = [];
                    return e.forEach(function(e) {
                        e = n.processRawElement(e, t);
                        e && i.push(e)
                    }), i
                }
            }, {
                key: "processSlots",
                value: function(e) {
                    var t = this.findAllFuseElements();
                    return this.processRawElements(t, e)
                }
            }, {
                key: "processZoneWithDivId",
                value: function(e, t) {
                    e = this.findElementWithDomId(e), e = this.processRawElements(e, t);
                    return e[e.length - 1]
                }
            }, {
                key: "processLastSlotWithFuseId",
                value: function(e, t) {
                    e = this.findElementsWithTemplateId(e), e = this.processRawElements(e, t);
                    return e[e.length - 1]
                }
            }, {
                key: "processSlotsWithFuseId",
                value: function(e, t) {
                    e = this.findElementsWithTemplateId(e);
                    return this.processRawElements(e, t)
                }
            }], [{
                key: "assignCounter",
                value: function(e, t) {
                    return t[e] || (t[e] = 0), ++t[e]
                }
            }, {
                key: "getTargetingValue",
                value: function(e) {
                    return 0 < e.indexOf(",") ? e.split(",").map(function(e) {
                        return e.trim()
                    }).filter(function(e) {
                        return "" !== e
                    }) : e
                }
            }, {
                key: "extractTargeting",
                value: function(t) {
                    var e = t.getAttributeNames().filter(function(e) {
                            return "data-targeting-key" !== e && "data-targeting-value" !== e
                        }).filter(function(e) {
                            return 0 === e.indexOf("data-targeting-", 0)
                        }).map(function(e) {
                            return {
                                attributeKey: e,
                                targetingKey: e.replace("data-targeting-", "").trim()
                            }
                        }).map(function(e) {
                            return {
                                key: e.targetingKey,
                                value: t.getAttribute(e.attributeKey)
                            }
                        }).filter(function(e) {
                            var t = e.key,
                                e = e.value;
                            return t && t.length && e && e.length
                        }).map(function(e) {
                            var t = e.key,
                                e = e.value;
                            return {
                                key: t,
                                value: a.getTargetingValue(e)
                            }
                        }),
                        n = t.getAttribute("data-targeting-key"),
                        i = t.getAttribute("data-targeting-value");
                    return n && n.length && i && i.length && !e.some(function(e) {
                        return e.key === n
                    }) && e.push({
                        key: n,
                        value: a.getTargetingValue(i)
                    }), e
                }
            }]), a
        }(),
        Ao = function() {
            function i(e, t, n) {
                d(this, i), this.logger = e, this.templateSettings = t, this.viewportInfo = n
            }
            return g(i, [{
                key: "logContext",
                value: function(e) {
                    return "[SLOT-FORMAT][".concat(e.id, "]:")
                }
            }, {
                key: "hasOverflow",
                value: function(e, n, i) {
                    for (var o = this, r = e.parentElement, s = ["hidden", "scroll", "auto"], t = ["overflow", "overflow-x", "overflow-y"]; r;) t.forEach(function(e) {
                        var t = o.viewportInfo.browserWindow.getComputedStyle(r)[e];
                        if (p(t) && -1 !== s.indexOf(t)) {
                            if (!i) return o.logger.debug("".concat(o.logContext(n), " Miniscroller was not applied. ").concat(e, ' on "').concat(r.id, " ").concat(r.className, '"')), !0;
                            r.style[e] = "visible", o.logger.debug("".concat(o.logContext(n), " Force miniscroller. Update ").concat(e, ' on "').concat(r.id, " ").concat(r.className, '"'))
                        }
                    }), r = r.parentElement;
                    return !1
                }
            }, {
                key: "hasHeight",
                value: function(e, t, n) {
                    var i = e,
                        o = this.viewportInfo.browserWindow.getComputedStyle(e),
                        r = o.height,
                        o = o.minHeight;
                    if (this.logger.debug("".concat(this.logContext(t), ' applying miniscroller on element with height "').concat(r, '" min-height: "').concat(o, '"')), -1 === ["0px", "auto"].indexOf(r)) {
                        if (!n) return this.logger.debug("".concat(this.logContext(t), " Miniscroller was not applied because of height ").concat(r, ' already set for element "').concat(e.id, '"')), !0;
                        this.logger.debug("".concat(this.logContext(t), ' Force miniscroller. Update height on "').concat(i.className, '"'))
                    }
                    return !1
                }
            }, {
                key: "format",
                value: function(e, t) {
                    var n = t.attributes;
                    !this.templateSettings.isMiniScrollersEnabled() || !1 === n.miniscroller || n.sticky || n.interscroller || n.interstitial || n.scrollToStick || this.hasHeight(e, t) || this.hasOverflow(e, t) || (this.logger.debug("".concat(this.logContext(t), ' Update slot element "').concat(e.id, '" to miniscroller')), this.updateSlotElementToMiniScroller(e, t))
                }
            }, {
                key: "updateSlotElementToMiniScroller",
                value: function(e, t) {
                    var n = this.viewportInfo.getCurrentBreakpoint().name,
                        t = (e.classList.add("fuse-slot-mini-scroller"), this.templateSettings.maxSlotHeightForBreakpoint(t, n));
                    e.style.minHeight = "".concat(t, "px")
                }
            }, {
                key: "updateSlotForYandex",
                value: function(e, t) {
                    var n = this.viewportInfo.getCurrentBreakpoint().name,
                        t = null == (t = t.sizeMapping) ? void 0 : t[n],
                        i = 0,
                        o = 0;
                    t && 0 < t.length && (t.forEach(function(e) {
                        "fluid" !== e && "fluid" !== e[0] && (Number(e[0]) > o && (o = Number(e[0])), Number(e[1]) > i) && (i = Number(e[1]))
                    }), e.style.width = "".concat(o, "px"), e.style.height = "".concat(i, "px"), e.style.margin = "auto")
                }
            }]), i
        }(),
        _o = function(e, t, n, i, o) {
            var r = e.top,
                s = e.bottom,
                a = e.left,
                u = e.right,
                c = e.width,
                e = e.height;
            return !!(r || s || a || u || c || e) && (c = c * o, 0 <= r + (r = e * o) + i) && 0 <= a + c && s - r - i <= n && u - c <= t
        };

    function Po(e, t, n, i) {
        t = t.getBoundingClientRect(), t = _o(t, e.width, e.innerHeight, i, n / 100);
        return !e.hidden && t
    }

    function Ro() {
        Mo.debug("[QUEUE]: Cleared fuse queue with ".concat(Bo(), " remaining items")), No().splice(0, No().length)
    }
    var Oo = function() {
            function u(e, t, n, i, o, r, s, a) {
                d(this, u), this.logger = e, this.reporter = t, this.browserWindow = n, this.gptSlotRegistry = i, this.settings = o, this.conditionFactory = r, this.viewportInfo = s, this.events = a, this.DELETED_FUSE_DIVS = [], this.REGISTERED_SLOTS = {}, this.SLOT_ACTIVATOR = {}, this.slotInitialised = new Ct(this.logger, "onSlotCreated"), this.slotsInitialised = new Ct(this.logger, "onSlotsInitialised")
            }
            return g(u, [{
                key: "getZoneDivs",
                value: function() {
                    var t = this,
                        n = {};
                    return Object.keys(this.REGISTERED_SLOTS).forEach(function(e) {
                        e = t.REGISTERED_SLOTS[e];
                        n[e.slotDivId] = e.zoneDiv
                    }), n
                }
            }, {
                key: "getZoneTemplates",
                value: function() {
                    var t = this,
                        n = {};
                    return Object.keys(this.REGISTERED_SLOTS).forEach(function(e) {
                        e = t.REGISTERED_SLOTS[e];
                        n[e.slotDivId] = e.zoneTemplate
                    }), n
                }
            }, {
                key: "getSlotsForTemplateId",
                value: function(t) {
                    var n = this;
                    return Object.keys(this.REGISTERED_SLOTS).filter(function(e) {
                        return n.REGISTERED_SLOTS[e].zoneTemplate.id === t
                    }).map(function(e) {
                        return n.REGISTERED_SLOTS[e]
                    })
                }
            }, {
                key: "getActiveSlots",
                value: function() {
                    var t = this;
                    return Object.keys(this.REGISTERED_SLOTS).filter(function(e) {
                        return t.REGISTERED_SLOTS[e].currentlyActive
                    }).map(function(e) {
                        return t.REGISTERED_SLOTS[e]
                    })
                }
            }, {
                key: "getSlotInitObservable",
                value: function() {
                    return this.slotInitialised
                }
            }, {
                key: "getSlotsInitObservable",
                value: function() {
                    return this.slotsInitialised
                }
            }, {
                key: "isInDom",
                value: function(e) {
                    return p(window.document.getElementById(e))
                }
            }, {
                key: "isDeletedSlot",
                value: function(e) {
                    return -1 !== this.DELETED_FUSE_DIVS.indexOf(e)
                }
            }, {
                key: "filterUndeleted",
                value: function(e, n) {
                    var i = this;
                    return e.filter(function(e) {
                        var t = !i.isDeletedSlot(e);
                        return !t && n && n(e), t
                    })
                }
            }, {
                key: "reset",
                value: function() {
                    var t = this,
                        n = (Object.keys(this.REGISTERED_SLOTS).forEach(function(e) {
                            t.isDeletedSlot(e) && t.logger.log("[EVENT]: resetSlots() unit already deleted ".concat(e)), t.DELETED_FUSE_DIVS.push(e)
                        }), this.getZoneDivs());
                    Object.keys(n).forEach(function(e) {
                        n[e].setAttribute(Co, t.reporter.getElapsedTime().toString())
                    }), Object.keys(this.SLOT_ACTIVATOR).forEach(function(e) {
                        t.SLOT_ACTIVATOR[e].destroy()
                    }), this.REGISTERED_SLOTS = {}, this.SLOT_ACTIVATOR = {}, this.clearFuseSkins()
                }
            }, {
                key: "registeredSlotConfig",
                value: function(n, e, i, t, o) {
                    var r = this;
                    return {
                        slotDivId: n,
                        zoneDiv: t,
                        zoneDivId: o,
                        zoneInstanceId: e,
                        zoneTemplate: i,
                        zoneTemplateId: i.id,
                        isInView: function() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                                t = i.attributes.interscroller ? r.browserWindow.document.querySelector(".publift-widget-".concat(i.id, "-container")) : r.browserWindow.document.getElementById(n);
                            return Po(r.viewportInfo.getViewportStatus(), t, 50, e)
                        },
                        isAllowRefresh: function() {
                            return !0
                        }
                    }
                }
            }, {
                key: "registerActiveSlot",
                value: function(e, t) {
                    e.currentlyActive = !0, this.enablePartners(e, t), this.events.onZoneEvent.emit({
                        zoneTemplateId: e.zoneTemplate.id,
                        zoneDivId: e.zoneDivId,
                        zoneEventType: "registered",
                        instanceId: e.zoneInstanceId,
                        status: "active",
                        gpid: e.gpid
                    })
                }
            }, {
                key: "registerInactiveSlot",
                value: function(e, t) {
                    this.SLOT_ACTIVATOR[e.slotDivId] = t, this.events.onZoneEvent.emit({
                        zoneTemplateId: e.zoneTemplate.id,
                        zoneDivId: e.zoneDivId,
                        zoneEventType: "registered",
                        instanceId: e.zoneInstanceId,
                        status: "inactive",
                        gpid: e.gpid
                    })
                }
            }, {
                key: "activateInactiveSlot",
                value: function(e, t, n) {
                    var i = e.slotDivId;
                    this.REGISTERED_SLOTS[i] && !0 === this.REGISTERED_SLOTS[i].currentlyActive ? this.logger.warn("[SLOTS][".concat(i, "]: Skipped activation because the slot was already activated")) : this.isInDom(i) ? (this.SLOT_ACTIVATOR[i].destroy(), e.currentlyActive = !0, this.enablePartners(e, t), this.events.onZoneEvent.emit({
                        zoneTemplateId: e.zoneTemplate.id,
                        zoneDivId: e.zoneDivId,
                        zoneEventType: "activated",
                        instanceId: e.zoneInstanceId,
                        gpid: e.gpid
                    }), n([e])) : (this.logger.warn("[SLOTS][".concat(i, "]: Skipped activation because the slot was removed from the DOM")), this.deleteSlot(i))
                }
            }, {
                key: "enablePartners",
                value: function(e, t) {
                    this.enableGptAsync(e, t), e.allowHeaderBidding ? this.enablePrebidAsync(e) : this.logger.debug("[SLOTS][".concat(e.slotDivId, "]: Skip prebid registration because headerbidding not enabled"))
                }
            }, {
                key: "enablePrebidAsync",
                value: function(n) {
                    var i = this;
                    ui.pushToPrebidQue(function() {
                        var e, t;
                        i.isDeletedSlot(n.slotDivId) ? i.logger.log("[SLOTS][".concat(n.slotDivId, "]: Skip prebid registration because div deleted")) : (t = ai(e = n), E.debug("[PREBID][".concat(e.slotDivId, "]: Registered with mediaTypes: ").concat(JSON.stringify(t.mediaTypes))), C.addAdUnits(t))
                    })
                }
            }, {
                key: "enableGptAsync",
                value: function(o, r) {
                    var s = this;
                    w(function() {
                        var e, t, n, i;
                        s.isDeletedSlot(o.slotDivId) ? s.logger.log("[SLOTS][".concat(o.slotDivId, "]: Skip GPT registration because div deleted")) : (t = r, n = (e = o).zoneTemplate.slot, (i = l.defineSlot(n, e.sizes, e.slotDivId)) ? (I.addAdEvent("register_gpt_slot_".concat(e.slotDivId), {
                            gpid: e.gpid
                        }), i.addService(l.pubads()), t.forEach(function(e) {
                            i.setTargeting(e.key, e.value)
                        })) : k.warn("[GPT]: googletag.defineSlot(".concat(n, ", ").concat(JSON.stringify(e.sizes), ", ").concat(e.slotDivId, ") returned null")), (t = i) && (s.gptSlotRegistry.add(o.zoneTemplate.id, t), n = o.slotDivId, k.debug("[GPT]: googletag.display(".concat(n, ")")), l.display(n)))
                    })
                }
            }, {
                key: "deleteSlot",
                value: function(e) {
                    this.logger.debug("[SLOTS][".concat(e, "]: Deleting slot"));
                    var t = this.getSlot(e);
                    t ? this.gptSlotRegistry.purgeByElement(t.zoneTemplate.id, t.slotDivId) : this.logger.debug("[SLOTS][".concat(e, "]: Registered slot not found upon deletion")), this.DELETED_FUSE_DIVS.push(e), delete this.REGISTERED_SLOTS[e], null != (t = this.SLOT_ACTIVATOR[e]) && t.destroy(), delete this.SLOT_ACTIVATOR[e]
                }
            }, {
                key: "getSlot",
                value: function(e) {
                    return this.REGISTERED_SLOTS[e]
                }
            }, {
                key: "getSlotByZoneDivId",
                value: function(t) {
                    var n = this;
                    return this.REGISTERED_SLOTS[Object.keys(this.REGISTERED_SLOTS).find(function(e) {
                        return n.REGISTERED_SLOTS[e].zoneDivId === t
                    })]
                }
            }, {
                key: "getSlots",
                value: function(e) {
                    var t = this,
                        n = [];
                    return e.forEach(function(e) {
                        e = t.getSlot(e);
                        e && n.push(e)
                    }), n
                }
            }, {
                key: "buildActivator",
                value: function(e, t, n, i, o) {
                    var r = this;
                    return this.conditionFactory.buildActivator(t, e.slotDivId, n, function() {
                        return r.activateInactiveSlot(e, i, o)
                    })
                }
            }, {
                key: "registerFuseSlot",
                value: function(e, t, n, i, o, r, s, a, u, c) {
                    var l, d = this,
                        g = this.viewportInfo.getCurrentBreakpoint().name,
                        h = So(this.browserWindow, t, null != (h = o.sizeMapping[g]) ? h : []),
                        f = 0 < h.length ? h : void 0,
                        h = 0 < (h = yo(h = h)).length ? h : void 0,
                        n = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.registeredSlotConfig(e, n, o, t, i)), {
                            currentlyActive: !1,
                            storedAt: this.reporter.getElapsedTime(),
                            breakpoint: g,
                            sizes: f,
                            sizesHb: h,
                            allowHeaderBidding: p(h) && 0 < h.length && this.settings.isHeaderBiddingSlot(o)
                        }), o.mediaTypes && {
                            mediaTypes: o.mediaTypes
                        }), o.videoAttributes && {
                            prebidVideoConfig: o.videoAttributes
                        }), {
                            gpid: r
                        }), o.targeting && {
                            targeting: o.targeting
                        }), this.allowSlotRefreshCallback ? {
                            isAllowRefresh: function() {
                                return d.allowSlotRefreshCallback(e)
                            }
                        } : {});
                    return this.REGISTERED_SLOTS[e] = n, K(f) ? this.logger.info("[SLOTS][".concat(e, "]: Registered as inactive because no sizes available")) : (t = n, f = (i = this.logger, g = e, h = s, r = o.targeting, i.log("[SLOTS][".concat(g, "]: merge slot targeting ").concat(JSON.stringify(h), ", ").concat(JSON.stringify(r))), l = h, null != r && r.forEach(function(t) {
                        l.find(function(e) {
                            return e.key === t.key
                        }) || l.push({
                            key: t.key,
                            value: t.value
                        })
                    }), i.log("[SLOTS][".concat(g, "]: set slot targeting ").concat(JSON.stringify(l))), l), a ? (this.logger.info("[SLOTS][".concat(e, "]: Registering as active because it is forced")), this.registerActiveSlot(t, f)) : o.activateCondition ? (s = this.buildActivator(t, o.activateCondition, u, f, c)).checkCondition() ? (this.logger.info("[SLOTS][".concat(e, "]: Registering as active because conditions already satisfied")), this.registerActiveSlot(t, f)) : (this.logger.info("[SLOTS][".concat(e, "]: Registering as inactive and enabling triggers")), this.registerInactiveSlot(t, s), s.enableTriggers()) : (this.logger.log("[SLOTS][".concat(e, "]: Registering as active because no conditions defined")), this.registerActiveSlot(t, f)), this.slotInitialised.emit({})), n
                }
            }, {
                key: "register",
                value: function(e, t, n, i) {
                    var o = this,
                        e = e.map(function(e) {
                            return o.registerFuseSlot(e.slotDivId, e.zoneDiv, e.zoneInstanceId, e.zoneDivId, e.zoneTemplate, e.gpid, e.targeting, n, t, i)
                        }).filter(p);
                    return this.logger.debug("[SLOTS]: Registered ".concat(e.length, " slots")), this.slotsInitialised.emit({}), e
                }
            }, {
                key: "clearFuseSkins",
                value: function() {
                    this.logger.debug("[DOM]: Clearing fuse skins");
                    for (var e = this.browserWindow.document.querySelectorAll("div.fuse-custom-skin"), t = 0; t < e.length; t++) e[t].parentNode.removeChild(e[t])
                }
            }, {
                key: "setAllowSlotRefreshCallback",
                value: function(e) {
                    this.allowSlotRefreshCallback = e, this.logger.debug("[SLOTS]: Registered setAllowSlotRefreshCallback")
                }
            }]), u
        }(),
        Do = function() {
            function a(e, t, n, i, o, r) {
                var s = this;
                d(this, a), this.fuseSlotRegistry = e, this.zoneRegistry = t, this.logger = n, this.auctionScheduler = i, this.domProcessor = o, this.isTagInitialised = r, this.runAuctionFn = function(e) {
                    s.auctionScheduler.queueSlots(e), s.runAuction()
                }
            }
            return g(a, [{
                key: "registerAndQueue",
                value: function(e, t, n) {
                    e = this.domProcessor.processSlots(e), e = this.registerSlots(e, n, t), n = e.filter(function(e) {
                        return e.currentlyActive
                    });
                    return this.auctionScheduler.queueSlots(n), e
                }
            }, {
                key: "registerAndRunAuction",
                value: function(e, t, n) {
                    e = this.registerAndQueue(e, t, n);
                    return this.runAuction(), e
                }
            }, {
                key: "registerZoneAndQueue",
                value: function(e, t, n, i) {
                    e = this.domProcessor.processZoneWithDivId(e, t);
                    return e ? (null != (t = this.registerSlots([e], i, n)[0]) && t.currentlyActive && this.auctionScheduler.queueSlots([t]), t) : null
                }
            }, {
                key: "activateZone",
                value: function(e) {
                    this.zoneRegistry.activateZone(e)
                }
            }, {
                key: "registerAndQueueLastSlotWithFuseId",
                value: function(e, t, n, i) {
                    e = this.domProcessor.processLastSlotWithFuseId(e, t);
                    if (e) return (t = this.registerSlots([e], i, n)[0]) && t.currentlyActive && this.auctionScheduler.queueSlots([t]), t
                }
            }, {
                key: "registerSlots",
                value: function(e, t, n) {
                    var i = this;
                    return e.forEach(function(e) {
                        i.zoneRegistry.register(e)
                    }), this.fuseSlotRegistry.register(e, t, n, this.runAuctionFn)
                }
            }, {
                key: "registerAndQueueWithFuseId",
                value: function(e, t, n, i) {
                    e = this.domProcessor.processSlotsWithFuseId(e, t), t = this.registerSlots(e, i, n), e = t.filter(function(e) {
                        return e.currentlyActive
                    });
                    return this.auctionScheduler.queueSlots(e), t
                }
            }, {
                key: "runAuction",
                value: function() {
                    return this.isTagInitialised() ? this.auctionScheduler.runAuction() : (this.logger.info("[CONTROLLER] Deferred the auction start until the tag is initialised"), !1)
                }
            }, {
                key: "forceRunAuction",
                value: function(e) {
                    var t = this.fuseSlotRegistry.getSlot(e);
                    t ? this.auctionScheduler.forceRunAuction(t) : this.logger.warn("[CONTROLLER]: Could not force auction because slot ".concat(e, " not found"))
                }
            }, {
                key: "runAuctionAllActiveSlots",
                value: function() {
                    this.auctionScheduler.queueSlots(this.fuseSlotRegistry.getActiveSlots()), this.runAuction()
                }
            }, {
                key: "reset",
                value: function() {
                    this.logger.log("[CONTROLLER]: resetSlots()"), this.fuseSlotRegistry.reset(), this.auctionScheduler.reset(), this.zoneRegistry.reset()
                }
            }, {
                key: "destroyZone",
                value: function(e) {
                    this.zoneRegistry.deleteZone(e);
                    var t = this.fuseSlotRegistry.getSlotByZoneDivId(e);
                    t ? this.fuseSlotRegistry.deleteSlot(t.slotDivId) : this.logger.debug("[CONTROLLER] Registered slot for zoneDivId ".concat(e, " not found upon deletion"))
                }
            }, {
                key: "clearRefreshIntervals",
                value: function() {
                    this.auctionScheduler.clearRefreshIntervals()
                }
            }, {
                key: "getRefreshIntervals",
                value: function() {
                    return this.auctionScheduler.getRefreshIntervals()
                }
            }, {
                key: "handleBreakpointChange",
                value: function() {
                    this.auctionScheduler.clearPendingAuctions(), this.auctionScheduler.clearAuctionBlock(), this.auctionScheduler.clearRefreshIntervals();
                    var e = this.fuseSlotRegistry.getActiveSlots();
                    this.auctionScheduler.queueSlots(e), this.auctionScheduler.runAuction()
                }
            }, {
                key: "loadSlots",
                value: function(e, t, n) {
                    e ? (n(), this.registerAndQueue(!1, !1, t), this.runAuction()) : (this.logger.warn("[CONTROLLER]: loadSlots() called during initialisation. Translating call to registerSlots() to avoid reset"), this.registerAndRunAuction(!0, !1, t))
                }
            }]), a
        }(),
        xo = function() {
            function i(e, t, n) {
                d(this, i), this.logger = e, this.reporter = t, this.zoneEventEmitter = n, this.DELETED_ZONES = [], this.REGISTERED_ZONES = {}, this.MANUAL_ACTIVATE_API = {}
            }
            return g(i, [{
                key: "register",
                value: function(e) {
                    var t = e.zoneInstanceId;
                    if (!this.REGISTERED_ZONES[t]) {
                        var n = e.zoneDivId ? this.findByDivId(e.zoneDivId) : void 0;
                        if (n) {
                            var i = n.zoneDiv,
                                n = n.zoneInstanceId;
                            if (n === t) return void this.logger.error("[ZONE][".concat(n, "]: Ignoring unexpected re-registration"));
                            this.logger.warn("[ZONE][".concat(n, "]: Div ").concat(i.id, " replaced in DOM without pageInit(). Registering ").concat(t)), this.DELETED_ZONES.push(n), delete this.REGISTERED_ZONES[n], delete this.MANUAL_ACTIVATE_API[n]
                        }
                        this.logger.info("[ZONE][".concat(t, "]: Registered with DivId ").concat(e.zoneDiv.id)), this.reporter.reportFirstZone();
                        i = {
                            zoneInstanceId: t,
                            zoneDiv: e.zoneDiv,
                            zoneDivId: e.zoneDivId,
                            zoneTemplateId: e.zoneTemplate.id,
                            gpid: e.gpid
                        };
                        return this.REGISTERED_ZONES[t] = i
                    }
                    this.logger.error("[ZONE][".concat(t, "]: Already registered"))
                }
            }, {
                key: "isDeletedZone",
                value: function(e) {
                    return -1 !== this.DELETED_ZONES.indexOf(e)
                }
            }, {
                key: "findByDivId",
                value: function(t) {
                    var n = this;
                    return Object.keys(this.REGISTERED_ZONES).map(function(e) {
                        return n.REGISTERED_ZONES[e]
                    }).filter(function(e) {
                        return e.zoneDivId == t
                    }).shift()
                }
            }, {
                key: "activateZone",
                value: function(e) {
                    var t, n = this.findByDivId(e);
                    return n ? (t = n.zoneInstanceId, !this.MANUAL_ACTIVATE_API[t] && (this.MANUAL_ACTIVATE_API[t] = !0, this.zoneEventEmitter.emit({
                        zoneTemplateId: n.zoneTemplateId,
                        zoneDivId: n.zoneDivId,
                        zoneEventType: "activate_zone_api",
                        instanceId: n.zoneInstanceId,
                        gpid: n.gpid
                    }), !0)) : (this.logger.error("[ZONE][".concat(e, "]: Unknown zone")), !1)
                }
            }, {
                key: "isManuallyActivated",
                value: function(e) {
                    var t;
                    return this.REGISTERED_ZONES[e] ? null != (t = this.MANUAL_ACTIVATE_API[e]) && t : (this.logger.error("[ZONE][".concat(e, "]: Unknown zone")), !1)
                }
            }, {
                key: "getRegisteredZones",
                value: function() {
                    var t = this;
                    return Object.keys(this.REGISTERED_ZONES).map(function(e) {
                        return t.REGISTERED_ZONES[e]
                    })
                }
            }, {
                key: "reset",
                value: function() {
                    var t = this;
                    Object.keys(this.REGISTERED_ZONES).forEach(function(e) {
                        t.isDeletedZone(e) ? t.logger.debug("[EVENT]: resetSlots() unit already deleted ".concat(e)) : t.DELETED_ZONES.push(e)
                    }), this.MANUAL_ACTIVATE_API = {}, this.REGISTERED_ZONES = {}
                }
            }, {
                key: "deleteZone",
                value: function(e) {
                    var t = this.findByDivId(e);
                    t ? this.isDeletedZone(t.zoneInstanceId) ? this.logger.warn("[ZONE][".concat(e, "]: Deleted zone")) : (delete this.REGISTERED_ZONES[t.zoneInstanceId], this.DELETED_ZONES.push(t.zoneInstanceId)) : this.logger.warn("[ZONE][".concat(e, "]: Unknown zone"))
                }
            }]), i
        }(),
        Lo = !1,
        Mo = f.getLogger(),
        No = function() {
            return f.getBrowserWindowObject().fusetag.que
        },
        Bo = function() {
            return No().length
        },
        Fo = function() {
            No().push = function(e) {
                if ("function" == typeof e) try {
                    e.call()
                } catch (e) {
                    Mo.error("Error processing command :", e.message, e.stack)
                } else Mo.error("Commands written into fusetag.que.push must be wrapped in a function");
                return 0
            }
        };
    var Uo = function() {
        function i(e, t) {
            var n = this;
            d(this, i), this.f = t, e.immediateOrOnce(function(e) {
                return n.f = e
            })
        }
        return g(i, [{
            key: "value",
            get: function() {
                return this.f
            }
        }, {
            key: "asSupplier",
            value: function() {
                var e = this;
                return function() {
                    return e.f
                }
            }
        }]), i
    }();

    function zo(e, t) {
        if (e && t) return e = new URL(e), t = new URL(t), e.hash = "", t.hash = "", e.toString() == t.toString()
    }
    var Go = function() {
            function c(e, t, n, i, o, r, s, a) {
                var u = this;
                d(this, c), this.logger = e, this.initialUrl = t, this.resetPageFn = n, this.setAuctionBlockFn = i, this.setPageTargeting = o, this.events = r, this.currentBreakpoint = s, this.lowDwellPages = a, this.lastPageInitUrl = null, this.tagInitOnce = new Uo(this.events.onTagInitComplete), this.events.onTagInitComplete.immediateOrOnce(function(e) {
                    u.emitPageInit(e.tagInitUrl, !0)
                })
            }
            return g(c, [{
                key: "reset",
                value: function() {
                    this.logger.info("[PAGE]: Resetting all page state"), this.resetPageFn(), this.emitPageReset()
                }
            }, {
                key: "handlePageInitCall",
                value: function(e, t, n) {
                    this.logger.info("[PAGE]: pageInit('".concat(e, "', ").concat(t, ", ").concat(JSON.stringify(n)));
                    var i, o = null === this.lastPageInitUrl,
                        r = p(this.tagInitOnce.value);
                    if (o)
                        if (r) {
                            if (zo(e, this.initialUrl)) return void this.logger.warn("[PAGE]: Ignored pageInit(), because URL unchanged since tag init");
                            this.logger.info("[PAGE]: First pageInit() call, and URL changed since tag init. Resetting."), this.reset(), i = !0
                        } else i = !1;
                    else {
                        if (zo(e, this.lastPageInitUrl)) return void this.logger.warn("[PAGE]: Ignored pageInit(), because URL unchanged since last pageInit call");
                        this.logger.info("[PAGE]: pageInit() called, and the URL has changed. Resetting."), i = !0, this.reset()
                    }
                    this.lastPageInitUrl = e, null != n && n.pageTargets && this.setPageTargeting(null == n ? void 0 : n.pageTargets), null != n && n.blockingFuseIds && this.setBlock(null != (o = null == n ? void 0 : n.blockingTimeout) ? o : 2e3, n.blockingFuseIds, i, t), r && this.emitPageInit(e, !1)
                }
            }, {
                key: "isPageInitCalled",
                value: function() {
                    return p(this.lastPageInitUrl)
                }
            }, {
                key: "isLowDwellUrl",
                value: function(t) {
                    return 0 < this.lowDwellPages.filter(function(e) {
                        e = t.match(e);
                        return e && 0 < e.length
                    }).length
                }
            }, {
                key: "emitPageInit",
                value: function(e, t) {
                    t = {
                        url: e,
                        isFirstPageInit: t,
                        isLowDwellPage: this.isLowDwellUrl(e),
                        breakpoint: this.currentBreakpoint().name
                    };
                    this.events.onPageInit.emit(t)
                }
            }, {
                key: "emitPageReset",
                value: function() {
                    this.events.onPageReset.emit({
                        breakpoint: this.currentBreakpoint().name
                    })
                }
            }, {
                key: "setBlock",
                value: function(e, t, n, i) {
                    n = n ? e : e - i;
                    n <= 0 ? this.logger.info("[PAGE][pageInit]: Skipped setting auction block, because there is no time left on the timeout") : (e = t.map(function(e) {
                        return "".concat(e)
                    }), this.setAuctionBlockFn(e, n))
                }
            }]), c
        }(),
        Wo = function() {
            function l(e, t, n, i, o, r, s, a, u, c) {
                d(this, l), this.logger = e, this.settingsGlobal = t, this.slotsController = n, this.slotRegistry = i, this.zoneRegistry = o, this.auctionScheduler = r, this.insertConditionFactory = s, this.slotConditionFactory = a, this.events = u, this.viewportInfo = c, this.settings = new jo(this.settingsGlobal)
            }
            return g(l, [{
                key: "getCurrentBreakpointName",
                value: function() {
                    return this.viewportInfo.getCurrentBreakpoint().name
                }
            }, {
                key: "getWindow",
                value: function() {
                    return this.viewportInfo.browserWindow
                }
            }, {
                key: "registerAll",
                value: function() {
                    this.logger.debug("[APIV3]: registerAll() started");
                    var e = this.slotsController.registerAndRunAuction(!0, !1, this);
                    this.logger.debug("[APIV3]: registerAll() finished, ".concat(e.length, " slots found"))
                }
            }, {
                key: "processNewSlots",
                value: function() {
                    this.registerAll()
                }
            }, {
                key: "registerZone",
                value: function(e) {
                    this.logger.debug("[APIV3]: registerZone('".concat(e, "') started"));
                    e = this.slotsController.registerZoneAndQueue(e, !0, !1, this);
                    return e && this.slotsController.runAuction(), e
                }
            }, {
                key: "queueZone",
                value: function(e) {
                    return this.logger.debug("[APIV3]: queueZone('".concat(e, "') started")), this.slotsController.registerZoneAndQueue(e, !0, !1, this)
                }
            }, {
                key: "runAuction",
                value: function() {
                    return this.logger.debug("[APIV3]: runAuction() started"), this.slotsController.runAuction()
                }
            }, {
                key: "disableRefreshByZone",
                value: function(e) {
                    return this.auctionScheduler.disableSlotRefresh(e)
                }
            }, {
                key: "enableRefreshByZone",
                value: function(e) {
                    return this.auctionScheduler.enableSlotRefresh(e)
                }
            }, {
                key: "getSlotsForTemplateId",
                value: function(e) {
                    return this.slotRegistry.getSlotsForTemplateId(e)
                }
            }]), l
        }(),
        jo = function() {
            function t(e) {
                d(this, t), this.settings = e
            }
            return g(t, [{
                key: "getZoneTemplate",
                value: function(e) {
                    return this.settings.getZoneTemplate(e)
                }
            }, {
                key: "setDisableWidgetRenderer",
                value: function(e) {
                    this.settings.getV2CompatOverrides().disableWidgetsRenderer = e
                }
            }]), t
        }(),
        P = new(function() {
            function e() {
                d(this, e)
            }
            return g(e, [{
                key: "configureResponsive",
                value: function() {
                    var t = this,
                        n = new Uo(m.onTagInitComplete);
                    m.onBreakpointChanged.subscribe(function(e) {
                        f.getLogger().info("[RESPONSIVE]: Switching page to breakpoint '".concat(e.name, "'")), t.resetAfterChangedBreakpoint(), p(n.value) ? t.getController().registerAndRunAuction(!0, !1, t.getApiV3()) : t.getController().registerAndQueue(!0, !1, t.getApiV3())
                    })
                }
            }, {
                key: "getAuctionExecutor",
                value: function() {
                    var e;
                    return this.auctionExecutor || (e = i.getSettings(), this.auctionExecutor = new ko(this.getFuseSlotRegistry(), Jn.getPrebidGlobal(), po.getUam(), f.getLogger(), S.getReporter(), e, m, y.getTouchObserver(), e.getUseTelemetry() && S.getTelemetry())), this.auctionExecutor
                }
            }, {
                key: "getFuseSlotRegistry",
                value: function() {
                    return this.fuseSlotRegistry || (this.fuseSlotRegistry = new Oo(f.getLogger(), S.getReporter(), f.getBrowserWindowObject(), yi.getGptSlotRegistry(), i.getSettings(), io.getSlotConditionFactory(), y.getViewportInfo(), m)), this.fuseSlotRegistry
                }
            }, {
                key: "getZoneRegistry",
                value: function() {
                    return this.zoneRegistry || (this.zoneRegistry = new xo(f.getLogger(), S.getReporter(), m.onZoneEvent)), this.zoneRegistry
                }
            }, {
                key: "getAuctionScheduler",
                value: function() {
                    var n = this;
                    return this.auctionScheduler || (this.auctionScheduler = new Io(f.getLogger(), f.getBrowserWindowObject(), function() {
                        var e;
                        return (e = n.getAuctionExecutor()).executeAuction.apply(e, arguments)
                    }, function(e, t) {
                        return n.getAuctionPlanner().plan(e, t)
                    }, function(e) {
                        return n.getFuseSlotRegistry().isDeletedSlot(e)
                    }, function() {
                        return y.getViewportInfo().getCurrentBreakpoint().name
                    }, y.getViewportInfo(), i.getSettings(), Ci)), this.auctionScheduler
                }
            }, {
                key: "getAuctionPlanner",
                value: function() {
                    return this.auctionPlanner || (this.auctionPlanner = new vo(f.getLogger(), i.getSettings(), y.getViewportInfo(), function() {
                        return ki.getInitManager().isLowDwellPage()
                    }, S.getComponentStatusStore())), this.auctionPlanner
                }
            }, {
                key: "getController",
                value: function() {
                    return this.controller || (this.controller = new Do(this.getFuseSlotRegistry(), this.getZoneRegistry(), f.getLogger(), this.getAuctionScheduler(), this.getDomProcessor(), function() {
                        return ki.getInitManager().isTagInitialised()
                    })), this.controller
                }
            }, {
                key: "getDomProcessor",
                value: function() {
                    var e = this;
                    return this.domProcessor || (this.domProcessor = new To(f.getLogger(), f.getBrowserWindowObject().document, i.getSettings(), this.getFuseSlotFormatter(), function() {
                        return S.getReporter().getElapsedTime()
                    }, function() {
                        return e.getApiV3()
                    })), this.domProcessor
                }
            }, {
                key: "getFuseSlotFormatter",
                value: function() {
                    return this.fuseSlotFormatter || (this.fuseSlotFormatter = new Ao(f.getLogger(), i.getSettings(), y.getViewportInfo())), this.fuseSlotFormatter
                }
            }, {
                key: "getPageManager",
                value: function() {
                    var n, e = this;
                    return this.pageManager || (n = i.getSettings(), this.pageManager = new Go(f.getLogger(), f.getBrowserWindowObject().location.href, function() {
                        return e.resetPage()
                    }, function(e, t) {
                        n.isSpaOldBlockingPageInit() || P.getAuctionScheduler().setAuctionBlock(e, t)
                    }, function(e) {
                        e.forEach(function(e) {
                            return Ci(e.key, e.value)
                        })
                    }, m, y.getViewportInfo().breakpointSupplier(), n.getLowDwellPages())), this.pageManager
                }
            }, {
                key: "resetAfterChangedBreakpoint",
                value: function() {
                    yi.getGptSlotRegistry().purgeAll(), ui.reset(), this.getController().reset()
                }
            }, {
                key: "resetPage",
                value: function() {
                    Ei(), Ro(), wn(), on = {}, nn = {}, sn = !0, yi.getGptSlotRegistry().purgeAll(), ui.reset(), P.getController().reset(), Ei(), Ro()
                }
            }, {
                key: "getApiV3",
                value: function() {
                    return this.apiV3 || (this.apiV3 = new Wo(f.getLogger(), i.getSettings(), this.getController(), this.getFuseSlotRegistry(), this.getZoneRegistry(), this.getAuctionScheduler(), io.getInsertConditionFactory(), io.getSlotConditionFactory(), m, y.getViewportInfo())), this.apiV3
                }
            }]), e
        }()),
        Vo = function() {
            function o(e, t, n, i) {
                d(this, o), this.logger = e, this.settings = t, this.insertFactory = n, this.apiV3 = i, this._hasInterstitial = !1
            }
            return g(o, [{
                key: "hasInterstitial",
                get: function() {
                    return this._hasInterstitial
                }
            }, {
                key: "initInterstitial",
                value: function() {
                    var e, t, n = this;
                    this._hasInterstitial ? this.logger.log("[INTERSTITIAL]: Already present") : (this.logger.info("[INTERSTITIAL]: Initialising"), null != (e = this.getInterstitialSlot()) && e.injectConditionConfig ? (t = this.insertFactory.buildActivator(e.injectConditionConfig, e.id, this.apiV3, function() {
                        n.setInterstitialSlot(e)
                    })).checkCondition() ? this.setInterstitialSlot(e) : t.enableTriggers() : e && this.setInterstitialSlot(e))
                }
            }, {
                key: "clearInterstitial",
                value: function() {
                    var t, e;
                    this._hasInterstitial ? (this.logger.info("[INTERSTITIAL]: Clearing"), (e = this.getInterstitialSlot()) && (t = e.slot, e = l.pubads().getSlots().filter(function(e) {
                        return e.getOutOfPage() && t === e.getAdUnitPath()
                    }), An(e), this._hasInterstitial = !1)) : this.logger.log("[INTERSTITIAL]: No interstitial to clear")
                }
            }, {
                key: "getInterstitialSlot",
                value: function() {
                    return this.settings.getFuseSlots().find(function(e) {
                        e = e.attributes;
                        return !0 === (null == e ? void 0 : e.interstitial)
                    })
                }
            }, {
                key: "setInterstitialSlot",
                value: function(e) {
                    (e = l.defineOutOfPageSlot(e.slot, l.enums.OutOfPageFormat.INTERSTITIAL)) ? (e.addService(l.pubads()), l.enableServices(), l.display(e), In(), k.info("[GPT]: Requesting interstitial refresh for ".concat(e.getSlotElementId())), l.pubads().refresh([e], {
                        changeCorrelator: !1
                    })) : k.warn("setInterstitialSlot(): googletag.defineOutOfPageSlot returned undefined"), this._hasInterstitial = !0
                }
            }]), o
        }(),
        Ho = function() {
            function i(e, t, n) {
                d(this, i), this.slot = e, this.logger = t, this.viewportInfo = n, this.incrementalCounter = 0
            }
            return g(i, [{
                key: "getZoneDivId",
                value: function() {
                    return "fuse-injected-".concat(this.slot.id, "-").concat(++this.incrementalCounter)
                }
            }, {
                key: "createSlotElement",
                value: function() {
                    return this.toHTML('<div id="'.concat(this.getZoneDivId(), '" data-fuse="').concat(this.slot.id, '" data-fuse-injected-at="').concat((new Date).getTime(), '" class="fuse-slot-').concat(this.type, '"></div>'))
                }
            }, {
                key: "toHTML",
                value: function(e) {
                    var t = document.createElement("div");
                    return t.innerHTML = e, t.firstElementChild
                }
            }, {
                key: "getSlotNonFluidSizes",
                value: function() {
                    var e, t = this.viewportInfo.getCurrentBreakpoint().name;
                    return null == (e = null == (e = this.slot.sizeMapping) ? void 0 : e[t]) ? void 0 : e.filter(function(e) {
                        return "fluid" !== e
                    })
                }
            }, {
                key: "getSlotMaxNonFluidHeight",
                value: function() {
                    var e = this.getSlotNonFluidSizes(),
                        e = e ? e.map(function(e) {
                            return Number(e[1])
                        }) : [];
                    return e.length ? Math.max.apply(Math, s(e)) : 0
                }
            }, {
                key: "getSlotMaxNonFluidWidth",
                value: function() {
                    var e = this.getSlotNonFluidSizes(),
                        e = e ? e.map(function(e) {
                            return Number(e[0])
                        }) : [];
                    return e.length ? Math.max.apply(Math, s(e)) : 0
                }
            }, {
                key: "getLogContext",
                value: function() {
                    return "[".concat(this.type, "][").concat(this.slot.id, "]:")
                }
            }, {
                key: "getClassName",
                value: function() {
                    return "publift-widget-".concat(this.slot.id)
                }
            }, {
                key: "getContainerElement",
                value: function() {
                    return document.querySelector(".".concat(this.getClassName(), "-container"))
                }
            }, {
                key: "getStylesElement",
                value: function() {
                    return document.querySelector("#".concat(this.getClassName(), "-styles"))
                }
            }, {
                key: "getWidgetElement",
                value: function() {
                    return document.querySelector(".".concat(this.getClassName()))
                }
            }]), i
        }(),
        qo = function() {
            U(c, Ho);
            var u = j(c);

            function c(e, t, n, i, o, r) {
                var s, a = !(6 < arguments.length && void 0 !== arguments[6]) || arguments[6];
                return d(this, c), (s = u.call(this, e, t, n)).slot = e, s.logger = t, s.viewportInfo = n, s.registerAdRendered = i, s.apiV3 = o, s.onShowCloseCallback = r, s.waitForCreative = a, s.loadingByCreative = !1, s.hiddenForever = !1, s.hasLoadedCreative = !1, s.type = "sticky", s.barScrollHeight = 0, s.barHeight = 60, s.scrollingHeight = 500, s.scrollCreative = !1, s.creativeHeight = 0, s.scrollOffset = 0, s.scrollPosition = 0, s.scrollMultiplier = 0, s.slotRenderCallbackRegistered = !1, s.attributes = s.makeAttributes(), s.scrollCreative = (null == (e = s.slot.stickyAttributes) ? void 0 : e.scrollCreative) || !1, s.scrollableElement = null != (t = s.slot.stickyAttributes) && t.scrollableSelector ? n.browserWindow.document.querySelector(null == (i = s.slot.stickyAttributes) ? void 0 : i.scrollableSelector) : n.browserWindow, s.setHeights(0), s
            }
            return g(c, [{
                key: "createWidget",
                value: function(e) {
                    var t = this.getClassName();
                    return this.toHTML('\n<div class="'.concat(t, '-container closed" style="display: ').concat(0 === e ? "none" : "block", '">\n<div class="').concat(t, '-container-background">\n</div>\n  <div class="').concat(t, '-button">\n    <div></div>\n    <div></div>\n  </div>\n  <div class="').concat(t, '">\n  </div>\n</div>\n'))
                }
            }, {
                key: "getHideAtElement",
                value: function() {
                    var e = this.getAttributes().hideSelector;
                    return e ? document.querySelector(e) : null
                }
            }, {
                key: "getFixedElement",
                value: function() {
                    var e = this.getAttributes().fixedSelector;
                    return e ? document.querySelector(e) : null
                }
            }, {
                key: "getFixedClass",
                value: function() {
                    return "".concat(this.getClassName(), "-fixed")
                }
            }, {
                key: "getWidgetCloseButtonElement",
                value: function() {
                    return document.querySelector(".".concat(this.getClassName(), "-button"))
                }
            }, {
                key: "makeAttributes",
                value: function() {
                    var e = Object.assign({
                        bgColor: "#EFEFEF",
                        bgOpacity: .7,
                        allowClose: !1,
                        buttonColor: "#313131",
                        barColor: "#EFEFEF",
                        borderWidth: "0px",
                        zIndex: 2147483645,
                        compact: !1
                    }, this.slot.stickyAttributes);
                    return e.compact && (e.bgOpacity = 1, e.bgColor = e.barColor), e
                }
            }, {
                key: "addContent",
                value: function(e, t) {
                    var n = this,
                        i = this.getClassName(),
                        o = e.querySelector(".".concat(i)),
                        r = this.createSlotElement(),
                        o = (o.appendChild(r), e.querySelector(".".concat(i, "-button")).addEventListener("click", function() {
                            e.classList.contains("closed") ? n.onShow() : n.onClose(), clearInterval(n.hideAtElementInterval)
                        }), document.querySelector("body"));
                    return null != o && o.insertAdjacentElement("beforeend", t), null != o && o.insertAdjacentElement("beforeend", e), r
                }
            }, {
                key: "getButtonStyles",
                value: function(e, t, n, i, o) {
                    return e ? t ? "border-radius: 0 0 2px 2px; top: ".concat(n, "px;") : "border-radius: 2px 2px 0 0; top: -20px;" : t ? "border-radius: 2px 2px 0 0; top: ".concat(i - 20 + o, "px;") : "border-radius: 0 0 2px 2px; top: 0px;"
                }
            }, {
                key: "getFixedSelectorStyles",
                value: function(e, t, n, i, o) {
                    return t ? ".".concat(e, "-fixed {\n  ").concat(n ? "top" : "bottom", " : ").concat(i ? o : 0, "px !important;\n}\n").concat(t, " {\n  transition: ").concat(n ? "top" : "bottom", " .3s linear;\n}") : ""
                }
            }, {
                key: "createStyles",
                value: function() {
                    var e = this.getAttributes(),
                        t = e.zIndex,
                        n = e.compact,
                        i = e.isTop,
                        o = e.isButtonOutside,
                        r = e.bgColor,
                        s = e.bgOpacity,
                        a = e.barColor,
                        u = e.allowClose,
                        c = e.allowReopen,
                        l = e.buttonColor,
                        d = e.fixedSelector,
                        e = e.borderWidth,
                        g = this.getSlotMaxNonFluidHeight(),
                        h = this.getContainerBordersSize(),
                        f = this.getContainerBorderSize(),
                        p = g + h,
                        h = this.getSlotMaxNonFluidWidth() + h,
                        v = c && o ? f : 0,
                        b = this.getClassName();
                    return this.toHTML('\n<style id="'.concat(b, '-styles">\n.').concat(b, "-container {\n  direction: ltr;\n  z-index: ").concat(t, ";\n  position: fixed;\n  ").concat(i ? "top: 0" : "bottom: 0", ";\n  width: ").concat(n ? h + "px" : "100%", ";\n  height: ").concat(p, "px;\n  transition: transform .3s linear, height .3s linear;\n  ").concat(o ? "" : "overflow: hidden;", "\n  ").concat(n ? "left: 50%; transform: translateX(-50%);" : "left: 0;", "\n}\n\n.").concat(b, "-container-background {\n  background-color: ").concat(r, ";\n  opacity: ").concat(s, ";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.").concat(b, "-button {\n  width: 40px;\n  margin-left: 2px;\n  height: 20px;\n  background-color: ").concat(a, ";\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  display: ").concat(u ? "flex" : "none", ";\n  transition: top .3s linear;\n  ").concat(this.getButtonStyles(Boolean(o), Boolean(i), p, g, f), "\n}\n.").concat(b, "-button :first-child, .").concat(b, "-button :last-child  {\n  background-color: ").concat(l, ";\n  width: 13px;\n  height: 3px;\n  border-radius: 2px;\n}\n.").concat(b, "-button :first-child {\n  transform: rotate(").concat(i ? "-" : "", "30deg) translateX(2px);\n}\n.").concat(b, "-button :last-child {\n  transform: rotate(").concat(i ? "" : "-", "30deg) translateX(-2px);\n}\n.").concat(b, " {\n  width: ").concat(n ? h + "px" : "100%", ";\n  height: ").concat(p, "px;\n  display: flex;\n  justify-content: center;\n  align-items: ").concat(this.scrollCreative ? "baseline" : "center", ";\n  transition: transform .3s linear, height .3s linear;\n  border").concat(n ? "" : i ? "-bottom" : "-top", ": ").concat(e, " solid ").concat(a, ";\n  ").concat(null != (t = this.slot.stickyAttributes) && t.scrollCreative ? "overflow: hidden" : "", "\n}\n.").concat(b, "-container.closed {\n  ").concat(i ? "transform: translateY(-".concat(p - v, "px)").concat(n ? " TranslateX(-50%)" : "", ";") : "height: " + v + "px !important;", "\n}\n.").concat(b, "-container.closed .").concat(b, "-button {\n  visibility: ").concat(c ? "visible" : "hidden", ";\n  ").concat(c ? "" : "display: none;", "\n}\n.").concat(b, "-container.closed .").concat(b, "-button :first-child {\n  transform: rotate(").concat(i ? "" : "-", "30deg) translateX(2px);\n}\n.").concat(b, "-container.closed .").concat(b, "-button :last-child {\n  transform: rotate(").concat(i ? "-" : "", "30deg) translateX(-2px);\n}\n").concat(this.getFixedSelectorStyles(b, d, Boolean(i), g, p), "\n</style>\n"))
                }
            }, {
                key: "getContainerBorderSize",
                value: function() {
                    var e = this.getAttributes().borderWidth;
                    return Number(e.substring(0, e.length - 2))
                }
            }, {
                key: "getContainerBordersSize",
                value: function() {
                    var e = this.getAttributes().compact;
                    return this.getContainerBorderSize() * (e ? 2 : 1)
                }
            }, {
                key: "getAttributes",
                value: function() {
                    return this.attributes
                }
            }, {
                key: "insert",
                value: function() {
                    var e = this,
                        t = (this.logger.debug("".concat(this.getLogContext(), " add widget")), this.createWidget(this.getSlotMaxNonFluidHeight())),
                        n = this.createStyles(),
                        t = this.addContent(t, n);
                    return this.viewportInfo.browserWindow.requestAnimationFrame(function() {
                        e.show()
                    }), this.getHideAtElement() && this.setHideAtElementListener(), this.scrollCreative && this.scrollableElement && this.scrollableElement.addEventListener("scroll", function() {
                        e.updateWidgetPosition()
                    }), [t]
                }
            }, {
                key: "getSlotMaxNonFluidHeight",
                value: function() {
                    return this.barHeight
                }
            }, {
                key: "setHeights",
                value: function(e) {
                    this.creativeHeight = e;
                    var t = this.getSlotNonFluidSizes(),
                        n = t && t.length ? t.map(function(e) {
                            return Number(e[1])
                        }) : [0],
                        t = this.slot.stickyAttributes.heightCalculationMethod,
                        i = n.sort(function(e, t) {
                            return t - e
                        });
                    if (this.scrollCreative) switch (t) {
                        case "half_max":
                            this.barHeight = i[0] / 2 + 1;
                            break;
                        case "second_max":
                            this.barHeight = i[1] || i[0];
                            break;
                        case "min":
                            this.barHeight = Math.min.apply(Math, s(n));
                            break;
                        default:
                            this.barHeight = Math.max.apply(Math, s(n))
                    } else this.barHeight = Math.max.apply(Math, s(n));
                    this.barScrollHeight = e ? e - this.barHeight : 0
                }
            }, {
                key: "hideAtElementListener",
                value: function() {
                    var e = this.getContainerElement(),
                        t = this.getHideAtElement(),
                        n = this.getAttributes().isHideForever;
                    p(t) && e && (Po(this.viewportInfo.getViewportStatus(), t, 1, 0) ? e.classList.contains("closed") || (this.hide(), n && clearInterval(this.hideAtElementInterval)) : e.classList.contains("closed") && this.show())
                }
            }, {
                key: "setHideAtElementListener",
                value: function() {
                    var e = this;
                    this.getHideAtElement() && (this.hideAtElementInterval = setInterval(function() {
                        e.hideAtElementListener()
                    }, 500))
                }
            }, {
                key: "isHideSelectorVisible",
                value: function() {
                    var e = this.getHideAtElement();
                    return !(!e || !Po(this.viewportInfo.getViewportStatus(), e, 1, 0))
                }
            }, {
                key: "onBreakpointChange",
                value: function() {
                    var e, t, n, i, o = this.getAttributes().compact,
                        r = this.getContainerElement(),
                        s = this.getWidgetElement();
                    s && (this.setHeights(0), e = this.barHeight, i = (t = this.getSlotMaxNonFluidWidth()) + (n = this.getContainerBordersSize()), r.style.height = (0 === e ? 0 : e + n) + "px", r.style.display = 0 === e ? "none" : "block", o && e && (r.style.width = i + "px", s.style.width = t + "px"), s.style.height = e + "px", 0 === e || this.isHideSelectorVisible() ? this.updateFixedElement(!0) : this.updateFixedElement(), this.getStylesElement().innerHTML = this.createStyles().innerHTML)
                }
            }, {
                key: "delete",
                value: function() {
                    this.logger.debug("".concat(this.getLogContext(), " delete sticky"));
                    var e = this.getStylesElement(),
                        t = this.getContainerElement();
                    return this.updateFixedElement(!0), this.getAttributes().hideSelector && clearInterval(this.hideAtElementInterval), e && e.remove(), t && t.remove(), !0
                }
            }, {
                key: "getSlotElement",
                value: function() {
                    return document.querySelector(".".concat(this.getClassName(), " .fuse-slot-sticky"))
                }
            }, {
                key: "getScrollY",
                value: function() {
                    var e;
                    return null != (e = this.slot.stickyAttributes) && e.scrollableSelector ? this.scrollableElement.scrollTop : this.scrollableElement.scrollY
                }
            }, {
                key: "updateWidgetPosition",
                value: function(e) {
                    var t, n, i;
                    this.scrollCreative && this.hasLoadedCreative && (n = (t = this.slot.stickyAttributes).scrollingHeight, t = t.scrollableSelector, n && (-1 !== (n = n.trim()).indexOf("vh") ? this.scrollingHeight = t ? this.scrollableElement.scrollHeight - (this.scrollableElement.offsetHeight || 0) : Number(n.replace("vh", "")) * this.viewportInfo.browserWindow.innerHeight : this.scrollingHeight = Number(n.replace("px", ""))), this.scrollMultiplier = this.barScrollHeight / this.scrollingHeight, t = this.getScrollY(), this.logger.debug("".concat(this.getLogContext(), " updateWidgetPosition before"), e, this.creativeHeight, this.barHeight, this.scrollOffset, this.scrollPosition, this.getWidgetElement().style.marginTop, t, this.scrollingHeight), e ? this.getWidgetElement().style.alignItems = this.creativeHeight > this.barHeight ? "baseline" : this.attributes.isTop ? "start" : "end" : this.creativeHeight > this.barHeight && (i = (n = t - this.scrollPosition) * this.scrollMultiplier, this.scrollOffset += i, this.logger.debug("".concat(this.getLogContext(), " updateWidgetPosition check"), i, n, this.scrollOffset), n <= 0 ? this.scrollOffset <= 0 && (this.scrollOffset = 0) : this.scrollOffset > this.barScrollHeight && (this.scrollOffset = this.barScrollHeight), this.getSlotElement().style.marginTop = "-" + this.scrollOffset + "px", this.scrollPosition = t), this.logger.debug("".concat(this.getLogContext(), " updateWidgetPosition after"), e, this.creativeHeight, this.barHeight, this.scrollOffset, this.scrollPosition, this.getWidgetElement().style.marginTop, this.scrollMultiplier, this.barScrollHeight))
                }
            }, {
                key: "show",
                value: function() {
                    var o = this,
                        r = this.slot.id;
                    return this.logger.debug("".concat(this.getLogContext(), " showing with waitForCreative ").concat(this.waitForCreative)), this.loadingByCreative || (this.waitForCreative && !this.hasLoadedCreative ? (this.loadingByCreative = !0, this.slotRenderCallbackRegistered || (this.logger.debug("".concat(this.getLogContext(), " register slotRender callback")), this.registerAdRendered(function(e) {
                        var t, n, i; - 1 !== e.slot.getSlotElementId().indexOf(r) && (o.scrollCreative && e.size && (t = Number(e.size[1]), n = 0, i = e.slot.getTargeting("hb_size")[0] || e.slot.getTargeting("amznsz")[0], 1 === t && i && (n = Se(i)[1], o.logger.debug("".concat(o.getLogContext(), " get height ").concat(n, " from targeting"))), o.setHeights(n || t), o.updateWidgetPosition(!0)), o.logger.debug("".concat(o.getLogContext(), " show widget by creative ").concat(e.slot.getSlotElementId())), !o.isHideSelectorVisible() && o.loadingByCreative && o.onShow(), o.loadingByCreative = !1, o.hasLoadedCreative = !0)
                    }), this.slotRenderCallbackRegistered = !0)) : this.onShow()), !0
                }
            }, {
                key: "onShow",
                value: function() {
                    var t = this,
                        e = this.getContainerElement();
                    e && (e.classList.remove("closed"), this.updateFixedElement(), this.apiV3.getSlotsForTemplateId(this.slot.id).forEach(function(e) {
                        e && t.apiV3.enableRefreshByZone(e.slotDivId)
                    }), this.onShowCloseCallback())
                }
            }, {
                key: "onClose",
                value: function() {
                    var t = this,
                        e = this.getContainerElement();
                    e && (e.classList.add("closed"), this.updateFixedElement(!0), this.apiV3.getSlotsForTemplateId(this.slot.id).forEach(function(e) {
                        e && t.apiV3.disableRefreshByZone(e.slotDivId)
                    }), this.onShowCloseCallback())
                }
            }, {
                key: "hide",
                value: function() {
                    return this.logger.debug("".concat(this.getLogContext(), " hiding")), this.onClose(), !0
                }
            }, {
                key: "updateFixedElement",
                value: function() {
                    var e, t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                        n = (this.logger.debug("".concat(this.getLogContext(), " updateFixedElement ").concat(t ? "restore" : "update")), this.getFixedElement());
                    n && (e = this.getFixedClass(), t ? n.classList.remove(e) : n.classList.add(e))
                }
            }]), c
        }(),
        Zo = function() {
            U(a, Ho);
            var s = j(a);

            function a(e, t, n, i, o) {
                var r;
                return d(this, a), (r = s.call(this, e, t, n)).slot = e, r.logger = t, r.viewportInfo = n, r.registerAdRendered = i, r.widgetsRenderer = o, r.type = "interscroller", r
            }
            return g(a, [{
                key: "getAttributes",
                value: function() {
                    return Object.assign({
                        selector: ".adBreak",
                        showBanner: !1,
                        height: "100vh",
                        zIndex: 1e7,
                        top: "auto"
                    }, this.slot.interscrollerAttributes)
                }
            }, {
                key: "getTopOffset",
                value: function() {
                    return this.widgetsRenderer.getMiniScrollersTopOffset()
                }
            }, {
                key: "insert",
                value: function() {
                    var i = this,
                        e = this.getAttributes(),
                        t = e.showBanner,
                        n = e.zIndex,
                        o = e.top,
                        r = e.height,
                        e = e.selector,
                        s = this.getSlotMaxNonFluidHeight(),
                        a = this.createSlotElement(),
                        u = this.getClassName(),
                        t = t ? '<div class="'.concat(u, '-container-message banner_top">Advertisement</div>') : "",
                        t = this.toHTML('\n    <div class="'.concat(u, '-container">\n      ').concat(t, '\n        <div class="').concat(u, '-scroll-clip">\n          <div class="').concat(u, ' publift-widget-interscroller">').concat(a.outerHTML, "</div>\n        </div>\n    </div>\n  ")),
                        n = this.toHTML('\n  <style id="'.concat(u, '-styles">\n  .').concat(u, "-container {\n    width: 100vw;\n    min-height: ").concat(r, ";\n    z-index: ").concat(n, ";\n    position: relative;\n    display: ").concat(0 === s ? "none" : "block", ";\n  }\n\n  .").concat(u, "-container-message {\n    position: absolute;\n    background-color: black;\n    color: white;\n    padding: .5em;\n    text-align: center;\n    font-family: sans-serif;\n    width: calc(100% - 1em);\n    z-index: 9999;\n  }\n\n  .").concat(u, "-scroll-clip {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    clip-path: inset(0px);\n    clip: rect(0px, auto, auto, 0px);\n    min-height: ").concat(r, "\n  }\n\n  .").concat(u, " {\n    position: fixed;\n    top: ").concat(o || this.widgetsRenderer.getMiniScrollersTopOffset() + "px", " !important;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    bottom: 0;\n    transform: translateZ(0px);\n  }\n  </style>\n  ")),
                        s = document.querySelector("body");
                    if (s) {
                        r = document.querySelector(e);
                        if (r) return s.insertAdjacentElement("beforeend", n), r.appendChild(t), u = t.getBoundingClientRect().x - s.getBoundingClientRect().x, t.style.marginLeft = "-".concat(u, "px"), t.style.marginRight = "-".concat(u, "px"), [a];
                        this.logger.info("".concat(this.getLogContext(), " insertionPoint with selector not found: ").concat(e))
                    }
                    return this.registerAdRendered(function(e) {
                        var t, n;
                        i.logger.debug("".concat(i.getLogContext(), " gpt event ").concat(JSON.stringify(e))), -1 !== e.slot.getSlotElementId().indexOf(i.slot.id) && (i.logger.debug("".concat(i.getLogContext(), " gpt event suit")), e.creativeId) && e.size && (i.logger.debug("".concat(i.getLogContext(), " gpt event creative ").concat(e.size[1])), t = Number(e.size[1]), n = 0, e = e.slot.getTargeting("hb_size")[0] || e.slot.getTargeting("amznsz")[0], 1 === t && e && (n = Se(e)[1], i.logger.debug("".concat(i.getLogContext(), " get height ").concat(n, " from targeting"))), i.updateWidgetPosition(n || t))
                    }), []
                }
            }, {
                key: "updateWidgetPosition",
                value: function(e) {
                    var t = this.getSlotMaxNonFluidHeight(),
                        n = this.widgetsRenderer.getMiniScrollersTopOffset(),
                        i = (this.viewportInfo.browserWindow.innerHeight - (1 < e ? e : t)) / 2,
                        o = n;
                    this.logger.debug("".concat(this.getLogContext(), " get top offset ").concat(o, " for adunit size ").concat(e, " maxHeight ").concat(t, " topOffsetCentered ").concat(i, " topOffsetSettings ").concat(n)), this.getWidgetElement().style.top = "".concat(o, "px")
                }
            }, {
                key: "onBreakpointChange",
                value: function() {
                    var e = this.getSlotMaxNonFluidHeight(),
                        t = this.getContainerElement();
                    t && (t.style.display = 0 === e ? "none" : "block")
                }
            }, {
                key: "delete",
                value: function() {
                    var e = this.getStylesElement(),
                        t = this.getContainerElement();
                    return !(!e || !t || (e.remove(), t.remove(), 0))
                }
            }, {
                key: "hide",
                value: function() {
                    return this.getContainerElement().style.display = "none", !0
                }
            }, {
                key: "show",
                value: function() {
                    return this.getContainerElement().style.display = "block", !0
                }
            }]), a
        }(),
        Yo = function() {
            U(n, Ho);
            var t = j(n);

            function n() {
                var e;
                return d(this, n), (e = t.apply(this, arguments)).type = "dynamic", e
            }
            return g(n, [{
                key: "getAttributes",
                value: function() {
                    return Object.assign(Object.assign({}, this.slot.dynamicAttributes), {
                        skip: Number(this.slot.dynamicAttributes.skip || 0),
                        each: Number(this.slot.dynamicAttributes.each || 0),
                        incrementEach: Number(this.slot.dynamicAttributes.incrementEach || 0),
                        repeatHeight: Number(this.slot.dynamicAttributes.repeatHeight || 1e3)
                    })
                }
            }, {
                key: "createElement",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                        n = this.createSlotElement();
                    return e && e.split(" ").forEach(function(e) {
                        return n.classList.add(e)
                    }), t && (n.style.cssText = t), n
                }
            }, {
                key: "canBeInserted",
                value: function(e) {
                    var t, n = this.getLogContext();
                    return e ? (t = document.querySelectorAll(e)).length ? (this.logger.debug("".concat(n, " Page has ").concat(t.length, " elements suitable for selector ").concat(e)), !0) : (this.logger.info("".concat(n, " No element with selector ").concat(e, " found")), !1) : (this.logger.warn("".concat(n, " Selector should be defined")), !1)
                }
            }, {
                key: "notFuseSlot",
                value: function(e) {
                    return !e || e.getAttribute("data-fuse") !== this.slot.id || (this.logger.debug("".concat(this.getLogContext(), " Skip insertion cause slot already inserted")), !1)
                }
            }, {
                key: "filterNodes",
                value: function(e) {
                    var t = this.getAttributes(),
                        n = t.skip,
                        i = t.each,
                        o = t.position,
                        r = t.incrementEach,
                        s = [],
                        a = 0,
                        u = i;
                    return e.forEach(function(e, t) {
                        t += 1;
                        if (n && t <= n) return !1;
                        if ("incontent" !== o && u) {
                            if ((t - n - a) % u != 0) return !1;
                            r && (a += u, u += r)
                        }
                        s.push(e)
                    }), s
                }
            }, {
                key: "getZoneDiv",
                value: function(e) {
                    return 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? e.querySelector("div[data-fuse]") : e
                }
            }, {
                key: "insert",
                value: function() {
                    var u, c, l = this,
                        e = this.getAttributes(),
                        t = e.selector,
                        d = e.position,
                        g = e.classNames,
                        h = e.css,
                        f = e.wrapperContent,
                        p = e.repeatHeight;
                    return this.canBeInserted(t) ? (e = document.querySelectorAll(t), u = 0, c = [], this.filterNodes(e).forEach(function(e) {
                        var t = l.createElement(g, h),
                            n = t,
                            i = (f && (t = l.wrapElement(t, f)), e.nextElementSibling),
                            o = e.parentNode,
                            r = e.previousElementSibling,
                            s = e.lastElementChild;
                        switch (d) {
                            case "after":
                                l.notFuseSlot(i) && (o.insertBefore(t, i), c.push(n));
                                break;
                            case "before":
                                l.notFuseSlot(r) && (o.insertBefore(t, e), c.push(n));
                                break;
                            case "replace":
                                e.replaceWith(t), c.push(n);
                                break;
                            case "incontent":
                                var a = e.getBoundingClientRect().top + e.getBoundingClientRect().height + document.documentElement.scrollTop,
                                    a = Math.floor(a / p);
                                u < a && (u = a, l.notFuseSlot(i)) && (o.insertBefore(t, i), c.push(n));
                                break;
                            default:
                                l.notFuseSlot(s) && (e.appendChild(t), c.push(n))
                        }
                    }), c) : (this.logger.debug("".concat(this.getLogContext(), " Injection skipped")), [])
                }
            }, {
                key: "wrapElement",
                value: function(e, t) {
                    var n = document.createElement("div");
                    return n.innerHTML = t, n.firstElementChild.appendChild(e), n.firstElementChild
                }
            }, {
                key: "delete",
                value: function() {
                    var e = document.querySelectorAll('[data-fuse="'.concat(this.slot.id, '"]'));
                    return e.forEach(function(e) {
                        e.remove()
                    }), 0 < e.length
                }
            }, {
                key: "hide",
                value: function() {
                    throw new Error("Method not implemented.")
                }
            }, {
                key: "show",
                value: function() {
                    throw new Error("Method not implemented.")
                }
            }, {
                key: "onBreakpointChange",
                value: function() {
                    throw new Error("Method not implemented.")
                }
            }]), n
        }(),
        Jo = function() {
            function n(e, t) {
                d(this, n), this.logger = e, this.widgetsRenderer = t, this.checkInterval = null, this.statuses = []
            }
            return g(n, [{
                key: "getStatuses",
                value: function() {
                    return this.statuses
                }
            }, {
                key: "start",
                value: function(e) {
                    var n = this;
                    (1 < arguments.length && void 0 !== arguments[1] && arguments[1] || !this.statuses.length) && (this.logger.debug("[WIDGETS][CHECKER] Start to check slots"), this.statuses = e.filter(function(e) {
                        var t;
                        return (null == (t = e.dynamicAttributes) ? void 0 : t.selector) || (null == (t = e.interscrollerAttributes) ? void 0 : t.selector)
                    }).map(function(e) {
                        var t = (null == (t = e.dynamicAttributes) ? void 0 : t.selector) || (null == (t = e.interscrollerAttributes) ? void 0 : t.selector);
                        return {
                            slot: e,
                            selector: t,
                            countSelector: n.countSelector(t),
                            countSlot: n.countSlot(e.id)
                        }
                    }), this.statuses.length) && (this.checkInterval = setInterval(function() {
                        return n.check()
                    }, 100))
                }
            }, {
                key: "stop",
                value: function() {
                    this.checkInterval && clearInterval(this.checkInterval), this.statuses = []
                }
            }, {
                key: "check",
                value: function() {
                    var o = this;
                    this.statuses.forEach(function(e) {
                        var t = e.slot,
                            n = o.countSelector(e.selector),
                            i = o.countSlot(t.id);
                        e.countSelector === n && e.countSlot === i || t.injectConditionConfig || (o.logger.debug("[WIDGETS][".concat(t.id, '] Injecting by selector "').concat(e.selector, '" change: selectors ').concat(n, " slots ").concat(i)), o.widgetsRenderer.injectWidget(e.slot), e.countSelector = o.countSelector(e.selector), e.countSlot = o.countSlot(e.slot.id))
                    })
                }
            }, {
                key: "countSelector",
                value: function(e) {
                    return document.querySelectorAll(e).length
                }
            }, {
                key: "countSlot",
                value: function(e) {
                    return document.querySelectorAll('[data-fuse="'.concat(e, '"]')).length
                }
            }]), n
        }(),
        Qo = function() {
            function u(e, t, n, i, o, r, s) {
                var a = this;
                d(this, u), this.logger = e, this.settings = t, this.apiV3 = n, this.conditionFactory = i, this.viewportInfo = o, this.events = r, this.videoManager = s, this.inited = !1, this.widgets = [], this.widgetsChecker = new Jo(this.logger, this), this.events.onBreakpointChanged.subscribe(function() {
                    return a.handleBreakpointChange()
                }), this.events.onPageInit.subscribe(function(e) {
                    e.isFirstPageInit || a.reset()
                })
            }
            return g(u, [{
                key: "getStickySlots",
                value: function() {
                    return this.settings.getFuseSlots().filter(function(e) {
                        return null == (e = e.attributes) ? void 0 : e.sticky
                    })
                }
            }, {
                key: "getInterscrollerSlots",
                value: function() {
                    return this.settings.getFuseSlots().filter(function(e) {
                        return null == (e = e.attributes) ? void 0 : e.interscroller
                    })
                }
            }, {
                key: "getDynamicSlots",
                value: function() {
                    return this.settings.getFuseSlots().filter(function(e) {
                        return null == (e = e.attributes) ? void 0 : e.dynamic
                    })
                }
            }, {
                key: "getScrollToStickSlots",
                value: function() {
                    return this.settings.getFuseSlots().filter(function(e) {
                        return null == (e = e.attributes) ? void 0 : e.scrollToStick
                    })
                }
            }, {
                key: "getMiniscrollerSlots",
                value: function() {
                    return this.settings.getFuseSlots().filter(function(e) {
                        return null == (e = e.attributes) ? void 0 : e.miniscroller
                    })
                }
            }, {
                key: "isSlotInjected",
                value: function(e) {
                    return null !== document.querySelector('[data-fuse="'.concat(e.id, '"]'))
                }
            }, {
                key: "getWidget",
                value: function(t) {
                    return this.widgets.filter(function(e) {
                        return e.slot.id === t.id
                    })[0]
                }
            }, {
                key: "removeWidget",
                value: function(e) {
                    var t = this.getWidget(e);
                    return t ? (t.delete(), this.logger.debug("[WIDGETS][".concat(e.id, "] Widget deleted")), !0) : (this.logger.debug("[WIDGETS][".concat(e.id, "] Widget was not found")), !1)
                }
            }, {
                key: "handleBreakpointChange",
                value: function() {
                    var t = this,
                        e = this.getStickySlots(),
                        n = this.getInterscrollerSlots();
                    this.logger.info("[WIDGETS] onBreakpointChange Stickies: ".concat(e.length, " Scrolls: ").concat(n.length)), e.concat(n).forEach(function(e) {
                        e = t.getWidget(e);
                        e && e.onBreakpointChange()
                    })
                }
            }, {
                key: "getWidgetSlots",
                value: function() {
                    return this.getDynamicSlots().concat(this.getInterscrollerSlots(), this.getStickySlots())
                }
            }, {
                key: "getWidgetsWithSelector",
                value: function() {
                    return this.getDynamicSlots().concat(this.getInterscrollerSlots())
                }
            }, {
                key: "insertStyles",
                value: function(e) {
                    var t = document.createElement("div");
                    t.innerHTML = e, document.querySelector("body").insertAdjacentElement("beforeend", t.firstElementChild)
                }
            }, {
                key: "cleanupDynamicSlots",
                value: function() {
                    this.getDynamicSlots().forEach(function(e) {
                        document.querySelectorAll('[data-fuse="'.concat(e.id, '"]')).forEach(function(e) {
                            e.remove()
                        })
                    })
                }
            }, {
                key: "injectWidget",
                value: function(e) {
                    var t = this,
                        n = (this.logger.debug("[WIDGETS][".concat(e.id, "] Inject widget")), e.attributes),
                        i = n.sticky,
                        o = n.interscroller,
                        n = n.dynamic,
                        r = this.getWidget(e),
                        s = !1;
                    if ((i || o) && this.isSlotInjected(e)) this.logger.debug("[WIDGETS][".concat(e.id, "] Skip injection. DOM element exists"));
                    else {
                        if (!r) {
                            if (i) r = new qo(e, this.logger, this.viewportInfo, function(e) {
                                return Cn(e)
                            }, this.apiV3, function() {
                                t.updateFuseStyles()
                            }, !this.settings.isYandexEnabled()), s = e.stickyAttributes.isTop;
                            else if (o) r = new Zo(e, this.logger, this.viewportInfo, function(e) {
                                return Cn(e)
                            }, this);
                            else {
                                if (!n) return void this.logger.warn("[WIDGETS][".concat(e.id, "] Skip injection of unknown widget"));
                                this.logger.debug("[WIDGETS][".concat(e.id, "] Injecting dynamic slot with attributes ").concat(JSON.stringify(e.dynamicAttributes))), r = new Yo(e, this.logger, this.viewportInfo)
                            }
                            this.widgets.push(r)
                        }
                        var i = r.insert(),
                            a = this.videoManager.getSettings();
                        i.forEach(function(e) {
                            t.logger.debug("[WIDGETS][".concat(e.id, "] Run queueZone")), t.apiV3.queueZone(e.id), a.enabled && a.injectedAdUnitId && e.id.includes(a.injectedAdUnitId) && t.videoManager.initVideo(!0)
                        }), 0 < i.length && this.apiV3.runAuction(), s && this.updateFuseStyles()
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var n = this;
                    this.getWidgetSlots().forEach(function(e) {
                        var t;
                        !e.injectConditionConfig || (t = n.conditionFactory.buildActivator(e.injectConditionConfig, e.id, n.apiV3, function() {
                            n.injectWidget(e)
                        })).checkCondition() ? n.injectWidget(e) : t.enableTriggers()
                    })
                }
            }, {
                key: "init",
                value: function() {
                    this.logger.debug("[WIDGETS] Init"), this.inited ? this.logger.debug("[WIDGETS] Skipped initialisation as it is already initialised") : (this.inited = !1, this.render(), this.widgetsChecker.start(this.getWidgetsWithSelector()), this.addScrollToStickListener(), this.injectFuseStyles(), this.inited = !0)
                }
            }, {
                key: "cleanup",
                value: function() {
                    var t = this;
                    this.logger.debug("[WIDGETS] cleanup"), this.widgetsChecker.stop(), this.getWidgetSlots().forEach(function(e) {
                        return t.removeWidget(e)
                    })
                }
            }, {
                key: "reset",
                value: function() {
                    this.cleanup(), this.logger.debug("[WIDGETS] reset"), this.render(), this.widgetsChecker.start(this.getWidgetsWithSelector(), !0)
                }
            }, {
                key: "getMiniScrollersTopOffset",
                value: function() {
                    var n = this,
                        i = 0,
                        e = this.settings.getTopStickyHeaderSelector();
                    return e && (e = document.querySelector(e)) && (i += e.clientHeight, this.logger.debug("[WIDGETS] miniscrollers offset set to ".concat(i, " because of topStickyHeader"))), this.getStickySlots().forEach(function(e) {
                        var t;
                        null != (t = e.stickyAttributes) && t.isTop && (t = n.getWidget(e)) && t.getContainerElement() && !t.getContainerElement().classList.contains("closed") && (t = n.settings.maxSlotHeightForBreakpoint(e, n.viewportInfo.getCurrentBreakpoint().name), i += null != t ? t : 0, n.logger.debug("[WIDGETS] miniscrollers offset set to ".concat(i, " because of top sticky")))
                    }), i
                }
            }, {
                key: "injectFuseStyles",
                value: function() {
                    var e, t, n;
                    document.getElementById("publift-fuse-styles") ? this.logger.debug("[WIDGETS] styles already injected") : (e = "", t = this.getMiniScrollersTopOffset(), this.settings.isMiniScrollersEnabled() && (this.logger.debug("[WIDGETS] inject fuse styles"), n = "\n      .fuse-slot-mini-scroller .fuse-slot {\n        top: ".concat(0 | t, "px;\n        position: sticky !important;\n        overflow: hidden !important;\n      }\n      .fuse-slot-mini-scroller {\n        overflow: initial !important;\n        display: block !important;\n      }\n      "), this.logger.debug("[WIDGETS] injected miniScroller styles"), e += n), e += "\n    .fuse-slot-scroll-to-stick .fuse-slot {\n      z-index: 9999;\n      top: ".concat(0 | t, "px;\n      position: fixed;\n      width: 100%;\n      left: 0px;\n      pointer-events: none;\n    }\n    .publift-widget-interscroller {\n      top: ").concat(0 | t, "px;\n    }"), this.insertStyles('<style id="publift-fuse-styles">'.concat(e, "</style>")))
                }
            }, {
                key: "updateFuseStyles",
                value: function() {
                    var e = document.getElementById("publift-fuse-styles");
                    e && e.remove(), this.injectFuseStyles()
                }
            }, {
                key: "getScrollToStickPrevElement",
                value: function(e) {
                    var t = e.previousElementSibling;
                    return t || this.getScrollToStickPrevElement(e.parentElement)
                }
            }, {
                key: "addScrollToStickListener",
                value: function() {
                    var o = this,
                        r = this.getMiniScrollersTopOffset(),
                        s = this.getScrollToStickSlots(),
                        e = this.settings.scrollToStickDisableDepth() || 0;
                    s.length && (this.logger.debug("[WIDGETS] scrollToStick slots found ".concat(this.getScrollToStickSlots().length, ". Attach scroll listener")), this.viewportInfo.browserWindow.addEventListener("scroll", function() {
                        o.logger.debug("[WIDGETS] scrollToStickListener");
                        var i = 0 < e && o.viewportInfo.browserWindow.scrollY > e;
                        s.forEach(function(n) {
                            document.querySelectorAll('[data-fuse="'.concat(n.id, '"]')).forEach(function(e) {
                                var t;
                                i ? (o.logger.debug("[WIDGETS][".concat(n.id, "] scrollToStick removed by scrollToStickDisableDepth")), e.classList.remove("fuse-slot-scroll-to-stick"), s = s.filter(function(e) {
                                    return e.id !== n.id
                                })) : (t = o.getScrollToStickPrevElement(e)) && t.getBoundingClientRect().y + t.getBoundingClientRect().height - r < 0 ? (o.logger.debug("[WIDGETS][".concat(n.id, "] scrollToStick set")), e.classList.add("fuse-slot-scroll-to-stick")) : (o.logger.debug("[WIDGETS][".concat(n.id, "] scrollToStick removed")), e.classList.remove("fuse-slot-scroll-to-stick"))
                            })
                        })
                    }, !0))
                }
            }]), u
        }(),
        Ko = "publift-primis-script",
        Xo = "primisPlayer",
        $o = function() {
            function s(e, t, n, i, o, r) {
                d(this, s), this.logger = e, this.settings = t, this.browserWindow = n, this.viewportInfo = i, this.events = o, this.scoSettings = r, this._hasVideo = !1, this.inited = !1
            }
            return g(s, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.logger.log("[VIDEO]: Video init"), this.settings.enabled && !this.inited && (this.logger.log("[VIDEO]: Video init events"), this.events.onBreakpointChanged.subscribe(function() {
                        return e.resetVideo(e.settings.enabled && !!e.settings.injectedAdUnitId)
                    }), this.events.onPageInit.subscribe(function() {
                        return e.initVideo()
                    }), this.events.onPageReset.subscribe(function() {
                        return e.removeVideo()
                    }), this.initVideo(), this.inited = !0)
                }
            }, {
                key: "getSettings",
                value: function() {
                    return this.settings
                }
            }, {
                key: "initVideo",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    this.logger.log("[VIDEO]: Video initVideo"), this.settings.enabled && (e && !this.settings.injectedAdUnitId || !e && this.settings.injectedAdUnitId ? this.logger.log("[VIDEO]: Video initVideo skipped -  dynamic: ".concat(e, ", injectedAdUnitId: ").concat(this.settings.injectedAdUnitId)) : this._hasVideo ? this.logger.log("[VIDEO]: Video all ready setup") : this.settings.breakpoints && !this.settings.breakpoints[this.viewportInfo.getCurrentBreakpoint().name] ? this.logger.log("[VIDEO]: Not starting video at breakpoint ".concat(this.viewportInfo.getCurrentBreakpoint().name)) : ("primis" === this.settings.partner && this.setupPrimis(this.settings.placementId), this._hasVideo = !0))
                }
            }, {
                key: "resetVideo",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    this.logger.log("[VIDEO]: Resetting video"), this.removeVideo(), this.initVideo(e)
                }
            }, {
                key: "removeVideo",
                value: function() {
                    this.settings.enabled && this._hasVideo && ("primis" === this.settings.partner && this.resetPrimis(), this._hasVideo = !1, this.logger.log("[VIDEO]: Removed video script ".concat(Ko)))
                }
            }, {
                key: "setupPrimis",
                value: function(e) {
                    var t, n, i, o = this,
                        r = (this.logger.log("[INIT]: Setup primis"), this.scoSettings ? "&schain=1.0,1!".concat(this.scoSettings.asi, ",").concat(this.scoSettings.sellerId, ",1") : "");
                    this.settings.enabled && this.settings.injectedAdUnitId && (t = '[data-fuse="'.concat(this.settings.injectedAdUnitId, '"]'), (n = this.browserWindow.document.querySelector(t)) ? ((i = this.browserWindow.document.createElement("div")).id = Xo, n.appendChild(i)) : this.logger.warn("[INIT]: Injection video library. Element with selector ".concat(t, " not found"))), re({
                        name: "Primis",
                        url: "//live.primis.tech/live/",
                        file: "liveView.php",
                        query: "s=".concat(e).concat(r, "&playerApiId=publift-primis-video"),
                        id: Ko,
                        insertSelector: this.settings.enabled && this.settings.injectedAdUnitId ? "#".concat(Xo) : "body"
                    }, function() {
                        o.logger.log("[VIDEO]: Primis video loaded")
                    })
                }
            }, {
                key: "resetPrimis",
                value: function() {
                    var e;
                    null != (e = this.browserWindow.document.getElementById(Ko)) && e.remove(), null != (e = this.browserWindow.document.getElementById(Xo)) && e.remove(), null != (e = this.browserWindow.document.getElementById("primisPlayerContainerDiv")) && e.remove()
                }
            }]), s
        }(),
        er = new(function() {
            function e() {
                d(this, e)
            }
            return g(e, [{
                key: "getWidgetsRenderer",
                value: function() {
                    return this.widgetsRenderer || (this.widgetsRenderer = new Qo(f.getLogger(), i.getSettings(), P.getApiV3(), io.getInsertConditionFactory(), y.getViewportInfo(), m, this.getVideoManager())), this.widgetsRenderer
                }
            }, {
                key: "getInterstitialManager",
                value: function() {
                    return this.interstitialManager || (this.interstitialManager = new Vo(f.getLogger(), i.getSettings(), io.getInsertConditionFactory(), P.getApiV3())), this.interstitialManager
                }
            }, {
                key: "getVideoManager",
                value: function() {
                    var e;
                    return this.videoManager || (e = i.getSettings(), this.videoManager = new $o(f.getLogger(), e.getVideoSettings(), f.getBrowserWindowObject(), y.getViewportInfo(), m, e.getSco())), this.videoManager
                }
            }]), e
        }()),
        R = f.getLogger(),
        tr = i.getSettings(),
        nr = yi.getGptSlotRegistry(),
        ir = S.getReporter(),
        or = P.getFuseSlotRegistry(),
        O = P.getController(),
        rr = ki.getInitManager(),
        sr = f.getBrowserWindowObject(),
        e = "onTagInitialised",
        ar = new Ct(R, e),
        ur = P.getApiV3(),
        cr = P.getPageManager(),
        lr = function(e, t) {
            var n;
            R.debug("[API]: loadSlotById(".concat(e, ", ").concat(t, ")")), (t ? O.registerZoneAndQueue(t, !0, !0, ur) : O.registerAndQueueLastSlotWithFuseId("".concat(e), !0, !0, ur)) || R.debug("[API]: loadSlotById(".concat(e, ", ").concat(t, ") did not register a slot")), t && !1 === (null == (n = or.getSlotByZoneDivId(t)) ? void 0 : n.currentlyActive) && (R.debug("[API]: loadSlotById(".concat(e, ", ").concat(t, ") activate zone")), O.activateZone(t)), O.runAuction()
        },
        dr = function(e, t, n) {
            !e || "string" != typeof e && "number" != typeof e ? R.error("[API]: setSlotTargetingById with invalid fuseId: ".concat(e)) : "string" != typeof t ? R.error("[API]: setSlotTargetingById with invalid key: ".concat(t)) : "string" == typeof n || Array.isArray(n) ? (R.debug("[API]: setSlotTargetingById(".concat(e, ", ").concat(t, ", ").concat(n, ") started")), nr.setSlotTargetingById("".concat(e), t, n)) : R.error("[API]: setSlotTargetingById with invalid value: ".concat(n))
        },
        gr = function(e) {
            if (e && ("string" == typeof e || "number" == typeof e)) return nr.getSlots("".concat(e));
            R.warn("[API]: getAdSlotsById with invalid fuseId: ".concat(e))
        };
    var hr = {
        enableApi: function(e) {
            R.debug("[INIT]: Enabling Fuse API"), e.fuseUUID = tr.getFuseUUID(), e.initialised = !1, e.init = !1, e.getCurrentBreakpoint = function() {
                return y.getViewportInfo().getCurrentBreakpoint()
            }, e.pageInit = function(e) {
                return R.debug("[API]: pageInit(".concat(JSON.stringify(e), ")")), cr.handlePageInitCall(sr.location.href, ir.getElapsedTime(), e)
            }, e.registerAll = function() {
                return R.debug("[API]: registerAll()"), O.registerAndRunAuction(!0, !1, ur)
            }, e.registerZone = function(e) {
                var t;
                if (e && "string" == typeof e) return R.debug("[API]: registerZone('".concat(e, "')")), (t = null == (t = O.registerZoneAndQueue(e, !0, !1, ur)) ? void 0 : t.slotDivId) && O.runAuction(), t;
                R.error("[API]: registerZone with invalid zoneDivId: ".concat(e))
            }, e.destroyZone = function(e) {
                e && "string" == typeof e ? (R.debug("[API]: destroyZone('".concat(e, "')")), O.destroyZone(e)) : R.error("[API]: destroyZone with invalid zoneDivId: ".concat(e))
            }, e.activateZone = function(e) {
                e && "string" == typeof e ? (R.debug("[API]: activateZone('".concat(e, "')")), O.activateZone(e)) : R.error("[API]: activateZone with invalid zoneDivId: ".concat(e))
            }, e.states = ir.states, e.events = ir.events, e.setTargeting = function(e, t) {
                if ("string" != typeof e) R.error("[API]: setTargeting with invalid key: ".concat(e));
                else {
                    if ("string" == typeof t || Array.isArray(t)) return R.debug("[API]: setTargeting(".concat(e, ", ").concat(JSON.stringify(t), ")")), Ci(e, t);
                    R.error("[API]: setTargeting with invalid value: ".concat(t))
                }
            }, e.onSlotRenderEnded = function(t) {
                return Cn(function(e) {
                    e = {
                        slotId: e.slot.getSlotElementId(),
                        hasCreative: !e.isEmpty,
                        gptEvent: e
                    };
                    t(e)
                })
            }, e.onTagInitialised = function(e) {
                ar.once(e)
            }, e.onSlotsInitialised = function(e) {
                or.getSlotsInitObservable().once(e)
            }, e.onSlotInitialised = function(e) {
                or.getSlotInitObservable().once(e)
            }, e.setAllowRefreshCallback = function(e) {
                or.setAllowSlotRefreshCallback(e)
            }, e.privateApi = {
                getWidgetRenderer: function() {
                    return er.getWidgetsRenderer()
                },
                getInitStatus: function() {
                    return rr.getInitStatus()
                },
                getSlotProblems: function() {
                    return ir.getSlotProblems()
                },
                resetPage: function() {
                    return R.debug("[API]: resetPage()"), cr.reset()
                },
                runAuctionAllActiveSlots: function() {
                    return R.debug("[API]: runAuctionAllActiveSlots()"), O.runAuctionAllActiveSlots()
                },
                setLogLevel: function(e) {
                    return R.setLogLevel(e)
                },
                getLogLevel: function() {
                    return R.getLogLevel()
                },
                getLogs: function() {
                    return R.getLogs()
                },
                getAuctionState: function() {
                    return P.getAuctionExecutor().getStateView()
                },
                getSlotTestUrls: function() {
                    return tr.getSlotTestUrls()
                },
                isYandexEnabled: function() {
                    return tr.isYandexEnabled()
                },
                isPrebidEnabled: function() {
                    return tr.isPrebidEnabled()
                },
                isCmpEnabled: function() {
                    return tr.isCmpRequired()
                },
                isUamEnabled: function() {
                    return tr.isUamEnabled()
                },
                isBlockthroughEnabled: function() {
                    return tr.isBlockthroughEnabled()
                }
            }, e.loadSlots = function() {
                R.debug("[API]: loadSlots()"), O.loadSlots(e.initialised, ur, function() {
                    return cr.reset()
                })
            }, e.getUnits = function() {
                return or.getZoneDivs()
            }, e.loadSlotById = function(e, t) {
                return lr(e, t)
            }, e.refreshSlots = function() {
                return R.debug("[API]: refreshSlots()"), O.runAuctionAllActiveSlots()
            }, e.refreshSlotByCode = function(e) {
                if (e && "string" == typeof e) return R.debug("[API]: refreshSlotByCode(".concat(e, ")")), O.forceRunAuction(e);
                R.error("[API]: refreshSlotByCode with invalid creativeDivId: ".concat(e))
            }, e.getAdSlotsById = function(e) {
                return gr(e)
            }, e.processNewSlots = function() {
                return R.debug("[API]: processNewSlots()"), O.registerAndRunAuction(!0, !1, ur)
            }, e.getTargeting = function() {
                return wi
            }, e.getAdSlotsByFuseId = e.getAdSlotsById, e.getFuseUnits = e.getUnits, e.loadFuseSlots = e.loadSlots, e.resetSlots = function() {
                return R.debug("[API]: resetSlots()"), cr.reset()
            }, e.resetFuseSlots = function() {
                return R.debug("[API]: resetFuseSlots()"), cr.reset()
            }, e.loadFuseSlotById = e.loadSlotById, e.setSlotTargetingById = function(e, t, n) {
                return dr(e, t, n)
            }, e.widgetsRenderer = e.privateApi.getWidgetRenderer(), e.setDefaultTargeting = function() {
                return R.debug("[API]: setDefaultTargeting()"), wn()
            }, e.getRefreshIntervals = function() {
                return O.getRefreshIntervals()
            }, e.disableRefresh = function() {
                return R.debug("[API]: disableRefresh()"), O.clearRefreshIntervals()
            }, e.getSlots = function() {
                return or.getZoneTemplates()
            }, e.getSettings = function() {
                return Object.assign({}, tr.getAccountSettings())
            }
        },
        tagInitEmitter: ar,
        ON_TAG_INIT_EVENT: e
    };
    var fr = f.getLogger();

    function pr(a, u, d, g, h, e, t) {
        try {
            var x = function() {
                    var e, t, n = (n = window.navigator) && n.userAgent || "",
                        i = (i = window.navigator) && i.userAgentData || null;
                    return {
                        os: o(e = n, "Win") ? "windows" : o(e, "like Mac") ? "ios" : o(e, "Mac") ? "macos" : o(e, "Android") ? "android" : "others",
                        dc: (t = e = n, o(t, "iPad") || o(t, "Tablet") || o(t, "Android") && !o(t, "Mobile") || o(t, "Silk") ? "tablet" : o(t = e, "iPod") || o(t, "iPhone") || o(t, "Android") || o(t, "IEMobile") ? "smartphone" : o(t = e, "Roku") || o(t, "SMART-TV") || o(t, "SmartTV") || o(t, "NetCast") || o(t, "crkey") ? "connecttv" : "desktop"),
                        browser: (e = n, function(e) {
                            if (e && e.brands) {
                                if (r(e.brands, "Opera")) return "opera";
                                if (r(e.brands, "Microsoft Edge")) return "edge";
                                if (r(e.brands, "Chrome")) return "chrome"
                            }
                            return null
                        }(i) || (o(e, "OPR/") || o(e, "Opera") ? "others" : o(e, "Edg") ? "edge" : o(e, "Firefox") ? "others" : o(e, "Chrome") ? "chrome" : o(e, "Safari") || o(e, "iPad") || o(e, "iPhone") || o(e, "iphone") ? "safari" : "others"))
                    }
                },
                o = function(e, t) {
                    return -1 !== e.indexOf(t)
                },
                r = function(e, t) {
                    return e.some(function(e) {
                        return e.brand === t
                    })
                },
                f = function(e, t) {
                    try {
                        for (var n in e)
                            if ("string" == typeof e[n]) {
                                var i, o = e[n].split(",");
                                for (i in t)
                                    for (var r in o)
                                        if (o[r] === t[i]) return 1
                            }
                    } catch (e) {}
                },
                c = function(e) {
                    try {
                        if (e.__should_skip_labeling) e.__should_skip_labeling = !1;
                        else {
                            var t, n, i = e.getTargeting(d),
                                o = "u",
                                r = (f(i, g) ? o = "b" : f(i, h) ? o = "o" : f(t = googletag.pubads().getTargeting(d), g) ? o = "b" : f(t, h) && (o = "o"), "banner");
                            if (e.__is_oop) r = googletag.enums.OutOfPageFormat[e.__oop_format] ? googletag.enums.OutOfPageFormat[e.__oop_format].toLowerCase() : "out_of_page";
                            else try {
                                if (e.__sz_mapping) {
                                    var s = Math.round(window.innerWidth),
                                        a = Math.round(window.innerHeight);
                                    for (c in e.__sz_mapping) {
                                        var u = e.__sz_mapping[c][0];
                                        if (u[0] <= s && u[1] <= a) {
                                            n = e.__sz_mapping[c][1];
                                            break
                                        }
                                    }
                                } else e.__def_sizes && (n = e.__def_sizes)
                            } catch (e) {}
                            var c, l = function(e, t, n, i, o, h) {
                                try {
                                    var r, s, a, u, c, l, d, g, f, p, v, b;
                                    return "u" === n ? [{
                                        key: "in2w_key16",
                                        values: []
                                    }, {
                                        key: "in2w_key20",
                                        values: []
                                    }, {
                                        key: "in2w_key21",
                                        values: []
                                    }] : (r = function(e, t) {
                                        if (void 0 === (e = B[i])) throw new Error;
                                        return t = void 0 !== F[t = "top_anchor" !== t && "bottom_anchor" !== t ? t : "anchor"] ? F[t] : F.others, {
                                            rt: M[e],
                                            ivf: M[t]
                                        }
                                    }(0, o), L || (D = x(), R = void 0 !== G[D.browser] ? G[D.browser] : G.others, O = void 0 !== z[D.os] ? z[D.os] : z.others, D = void 0 !== U[D.dc] ? U[D.dc] : U.others, L = {
                                        dc: M[D],
                                        os: M[O],
                                        browser: M[R]
                                    }), s = L, a = r.rt, u = r.ivf, c = s.dc, l = s.os, d = s.browser, f = function(e) {
                                        if (g) return ["0"];
                                        for (var t = Math.floor(1e3 * Math.random() + 1), n = [], i = 0, o = 0; o < e.length; ++o) {
                                            for (var r = 1, s = e[o], a = 0, u = 0; u < s.length; u++)
                                                if (t <= (a += s[u])) {
                                                    r = u + 1;
                                                    break
                                                }
                                            1 < r && 0 < i && (r = r + i - 1), i += e[o].length;
                                            for (var c = M[r], u = 0; u < n.length; ++u)
                                                if (n[u] === c) {
                                                    u = -1;
                                                    break
                                                } - 1 !== u && n.push(c)
                                        }
                                        return n
                                    }((g = "b" === n, t)), _ = e, _ = (new Date).getTime() + 36e5 * _, P = parseInt(_ / 36e5, 10) % 24, p = [
                                        [1, 0],
                                        [3, 24],
                                        [6, 32]
                                    ].map(function(e) {
                                        return M[Math.floor(P / e[0]) + e[1]]
                                    }), m = a, y = u, k = l, I = d, w = f, E = p, C = [], "0" === (S = c) || "3" === S ? (I = N["2_" + m + y + S + I]) && C.push(I) : (I = N["1_" + m + y + S + k]) && C.push(I), T = [], A = [], C.forEach(function(e) {
                                        T.push("-" + e);
                                        for (var t = 0; t < w.length; ++t) {
                                            var n = e + w[t];
                                            T.push(n), E.forEach(function(e) {
                                                A.push(n + e)
                                            })
                                        }
                                    }), v = {
                                        short: T,
                                        full: A
                                    }, g && (v.short = []), b = [], h && h.length && b.push(function(e) {
                                        var t, n, i, o, r = [],
                                            s = 1e5,
                                            a = 1,
                                            u = 1e5,
                                            c = 1;
                                        for (t in o = "fluid" === h || "number" == typeof h[0] && "number" == typeof h[1] ? [h] : h) "fluid" === o[t] ? r.push(o[t]) : ((n = o[t][0]) < s && (s = n), a < n && (a = n), (i = o[t][1]) < u && (u = i), c < i && (c = i), r.push(n + "x" + i));
                                        r.sort(function(e, t) {
                                            return e < t ? -1 : 1
                                        });
                                        var e = r.length,
                                            l = (r.push(s), r.push(a), r.push(u), r.push(c), r.push(e), r.join(","));
                                        try {
                                            if (!l.length) return "0";
                                            for (var d = 305419896, g = 0; g < l.length; ++g) d ^= (d << 5) + (d >> 2) + l.charCodeAt(g) & 4294967295;
                                            return (d < 0 ? 4294967296 + d : d) + ""
                                        } catch (e) {
                                            return "-1"
                                        }
                                    }()), [{
                                        key: "in2w_key16",
                                        values: v.short
                                    }, {
                                        key: "in2w_key20",
                                        values: v.full
                                    }, {
                                        key: "in2w_key21",
                                        values: b
                                    }])
                                } catch (e) {
                                    return [{
                                        key: "in2w_key20",
                                        values: ["4p10", "4p1o", "4p1w"]
                                    }]
                                }
                                var m, y, S, k, I, w, E, C, T, A, _, P, R, O, D
                            }(p, v, o, "gpt", r, n);
                            for (c in l) e.__setTargeting(l[c].key, l[c].values)
                        }
                    } catch (e) {}
                };
            if (u && 0 !== u.length && d && g && h && e && t) {
                if (a.googletag) {
                    if (!a.googletag.cmd || !a.googletag.cmd.push) return
                } else a.googletag = {
                    cmd: []
                };
                try {
                    var n = new Date,
                        i = new Date(n.toLocaleString("en-US", {
                            timeZone: "UTC"
                        })),
                        p = (new Date(n.toLocaleString("en-US", {
                            timeZone: t
                        })).getTime() - i.getTime()) / 36e5
                } catch (e) {
                    p = -8
                }
                var L, v = e,
                    M = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
                    N = {
                        "1_0010": "01",
                        "1_0011": "02",
                        "1_0020": "03",
                        "1_0021": "04",
                        "1_0110": "05",
                        "1_0111": "06",
                        "1_0120": "07",
                        "1_0121": "08",
                        "1_0310": "09",
                        "1_0311": "0a",
                        "1_0320": "0b",
                        "1_0321": "0c",
                        "1_0610": "0d",
                        "1_0611": "0e",
                        "1_0620": "0f",
                        "1_0621": "0g",
                        "1_0810": "0h",
                        "1_0811": "0i",
                        "1_0820": "0j",
                        "1_0821": "0k",
                        "2_0000": "19",
                        "2_0001": "1a",
                        "2_0002": "1b",
                        "2_000z": "1c",
                        "2_0030": "1d",
                        "2_0031": "1e",
                        "2_0032": "1f",
                        "2_003z": "1g",
                        "2_0100": "1h",
                        "2_0101": "1i",
                        "2_0102": "1j",
                        "2_010z": "1k",
                        "2_0130": "1l",
                        "2_0131": "1m",
                        "2_0132": "1n",
                        "2_013z": "1o",
                        "2_0300": "1p",
                        "2_0301": "1q",
                        "2_0302": "1r",
                        "2_030z": "1s",
                        "2_0330": "1t",
                        "2_0331": "1u",
                        "2_0332": "1v",
                        "2_033z": "1w",
                        "2_0600": "1x",
                        "2_0601": "1y",
                        "2_0602": "1z",
                        "2_060z": "20",
                        "2_0630": "21",
                        "2_0631": "22",
                        "2_0632": "23",
                        "2_063z": "24",
                        "2_0800": "25",
                        "2_0801": "26",
                        "2_0802": "27",
                        "2_080z": "28",
                        "2_0830": "29",
                        "2_0831": "2a",
                        "2_0832": "2b",
                        "2_083z": "2c",
                        "1_0z10": "3l",
                        "1_0z11": "3m",
                        "1_0z20": "3n",
                        "1_0z21": "3o",
                        "2_0z00": "3x",
                        "2_0z01": "3y",
                        "2_0z02": "3z",
                        "2_0z0z": "40",
                        "2_0z30": "41",
                        "2_0z31": "42",
                        "2_0z32": "43",
                        "2_0z3z": "44"
                    },
                    B = {
                        gpt: 0,
                        amp: 1,
                        video: 2,
                        mobile: 3,
                        gpt_lite: 4,
                        adx_tag: 5
                    },
                    F = {
                        out_of_page: 0,
                        anchor: 1,
                        app_open: 2,
                        banner: 3,
                        instream_audio: 4,
                        instream_video: 5,
                        interstitial: 6,
                        native_advance: 7,
                        rewarded: 8,
                        others: 35
                    },
                    U = {
                        desktop: 0,
                        smartphone: 1,
                        tablet: 2,
                        connecttv: 3,
                        others: 35
                    },
                    z = {
                        ios: 0,
                        android: 1,
                        macos: 2,
                        windows: 3,
                        others: 35
                    },
                    G = {
                        chrome: 0,
                        safari: 1,
                        edge: 2,
                        others: 35
                    };
                a.googletag.cmd.unshift = function(e) {
                    a.googletag.cmd.splice(1, 0, e)
                }, a.googletag.cmd.push(function() {
                    var t = ["slotRequested", "slotResponseReceived", "slotRenderEnded", "slotOnload", "impressionViewable", "slotVisibilityChanged"],
                        o = t.slice(1),
                        r = a.googletag.pubads();

                    function i(i) {
                        i.__setTargeting = i.setTargeting, i.setTargeting = function() {
                            var e, t = [];
                            for (e in arguments) t.push(arguments[e]);
                            var n = i.__setTargeting.apply(i, t);
                            return c(i), n
                        }.bind(i)
                    }

                    function s(i) {
                        i.__clearTargeting = i.clearTargeting, i.clearTargeting = function() {
                            var e, t = [];
                            for (e in arguments) t.push(arguments[e]);
                            var n = i.__clearTargeting.apply(i, t);
                            return c(i), n
                        }.bind(i)
                    }
                    r.__product_version = 3, r.__build_id = "03cceb6e-1729-48cb-9158-a6bb72649654", r.__hook_version = 8, r.setTargeting("in2w_key15", "u0"), r.__refresh = r.refresh, r.refresh = function(e) {
                        var t, n = [];
                        for (i in arguments) n.push(arguments[i]);
                        try {
                            for (var i in e = e || this.getSlots()) {
                                var o = e[i];
                                o.setTargeting("in2w_key15", "u" + ((t = o.__refreshCount || 0) < 11 ? t : t < 26 ? "10-" : t < 51 ? "25-" : t < 101 ? "50-" : "100-"))
                            }
                        } catch (e) {}
                        r.__refresh.apply(r, n)
                    }.bind(r), r.__setTargeting = r.setTargeting, r.__clearTargeting = r.clearTargeting, a.googletag.__defineOutOfPageSlot = a.googletag.defineOutOfPageSlot, a.googletag.__defineSlot = a.googletag.defineSlot, r.setTargeting = function() {
                        var e = [];
                        for (n in arguments) e.push(arguments[n]);
                        var t = r.__setTargeting.apply(r, e);
                        try {
                            var n, i = this.getSlots();
                            for (n in i) c(i[n])
                        } catch (e) {}
                        return t
                    }.bind(r), r.clearTargeting = function() {
                        var e = [];
                        for (n in arguments) e.push(arguments[n]);
                        var t = r.__clearTargeting.apply(r, e);
                        try {
                            var n, i = this.getSlots();
                            for (n in i) c(i[n])
                        } catch (e) {}
                        return t
                    }.bind(r), a.googletag.defineOutOfPageSlot = function() {
                        var e, t = [];
                        for (e in arguments) t.push(arguments[e]);
                        var n = a.googletag.__defineOutOfPageSlot.apply(a.googletag, t);
                        return n && (n.__is_oop = !0, n.__oop_format = t[1], i(n), s(n), c(n)), n
                    }.bind(a.googletag), a.googletag.defineSlot = function() {
                        var e, t = [];
                        for (e in arguments) t.push(arguments[e]);
                        var o = a.googletag.__defineSlot.apply(a.googletag, t);
                        return o && (o.__is_oop = !1, o.__def_sizes = arguments[1], i(o), s(o), o.__defineSizeMapping = o.defineSizeMapping, o.defineSizeMapping = function(e) {
                            var t, n = [];
                            for (t in arguments) n.push(arguments[t]);
                            var i = o.__defineSizeMapping.apply(o, n);
                            return o.__sz_mapping = e, c(o), i
                        }.bind(o), c(o)), o
                    }.bind(a.googletag), r.__reportEvents = function(e, t) {
                        if (r.__eventProxy && r.__eventProxy[e])
                            for (var n in r.__eventProxy[e]) try {
                                r.__eventProxy[e][n](t)
                            } catch (e) {}
                    }, r.__addEventListener = r.addEventListener, r.addEventListener = function(i, e) {
                        if (-1 !== t.indexOf(i)) try {
                            return this.__eventProxy = this.__eventProxy || {}, this.__eventProxy[i] ? (-1 === this.__eventProxy[i].indexOf(e) && this.__eventProxy[i].push(e), r) : (this.__eventProxy[i] = [e], r.__addEventListener(i, function(e) {
                                var t = e.slot;
                                if (t.__skipEvent && t.__skipEvent[i] && (new Date).getTime() - t.__skipEvent[i] < 3e3) delete t.__skipEvent[i];
                                else if (-1 === o.indexOf(i) || !(t = t.__getResponseInformation ? t.__getResponseInformation() : t.getResponseInformation()) || !t.advertiserId || -1 === u.indexOf(t.advertiserId))
                                    for (var n in r.__eventProxy[i]) try {
                                        r.__eventProxy[i][n](e)
                                    } catch (e) {}
                            }))
                        } catch (e) {}
                        return r.__addEventListener(i, e)
                    }.bind(r), r.__removeEventListener = r.removeEventListener, r.removeEventListener = function(e, t) {
                        try {
                            var n = this.__eventProxy;
                            if (n && n[e]) return -1 !== n[e].indexOf(t) && (n[e].splice(n[e].indexOf(t), 1), !0)
                        } catch (e) {}
                        return r.__removeEventListener(e, t)
                    }.bind(r), r.addEventListener("slotRequested", function(e) {
                        delete(e = e.slot).__responseInfo, e.__refreshCount = e.__refreshCount || 0, ++e.__refreshCount
                    })
                })
            }
        } catch (e) {}
    }
    var vr = function(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 5068036699,
            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : .5,
            i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "America/Los_Angeles";
        fr.debug("[INIT]: loadIn2WGptHook: advertiserId: ".concat(t, ", optRatio: ").concat(n, ", timeZone: ").concat(i));
        try {
            var o = vn();
            pr(e, [t], "intowow_optimized", ["false"], ["true"], [
                [900, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                [900, 20, 20, 20, 20, 20]
            ], i), w(function() {
                var e = Math.random() < n ? "true" : "false";
                o.pubads().setTargeting("intowow_optimized", e)
            })
        } catch (e) {
            fr.error("[ERROR]: in2w threw an error during initialisation: ".concat(e))
        }
    };
    if (null != (e = window.self.fusetag) && e.loading) throw e = "[FUSE]: Fusetag is already initialising, and may have been included in the page twice", console.error(e), new Error(e);
    if (null != (e = window.self.fusetag) && e.init) throw e = "[FUSE]: Fusetag is already initialised, and may have been included in the page twice", console.error(e), new Error(e);
    var br = window.self.fusetag || (window.self.fusetag = {
            que: []
        }),
        D = (br.loading = !0, S.getReporter()),
        x = f.getLogger(),
        L = i.getSettings(),
        mr = (x.log("[INIT] Initialising with UUID ".concat(L.getFuseUUID())), P.getController()),
        yr = P.getApiV3(),
        Sr = po.getUam(),
        kr = go.getConsentManager(),
        Ir = ki.getInitManager(),
        wr = er.getWidgetsRenderer(),
        Er = er.getInterstitialManager(),
        Cr = S.getTelemetry(),
        Tr = P.getPageManager(),
        Ar = y.getViewportInfo(),
        M = S.getComponentStatusStore();

    function _r() {
        if (D.setStateStatus("fuse_queue_start"), Lo) Mo.error("[INIT] processBacklog() called, but it already ran");
        else {
            for (Lo = !0, Mo.log("[INIT]: Processing fuse queue with ".concat(No().length, " pending items")); 0 < No().length;) {
                var e = No().shift();
                if ("function" == typeof e) try {
                    Mo.debug("[INIT]: Calling queued function"), e.call(), e.called = !0
                } catch (e) {
                    Mo.error("[INIT]: Error calling queued function:", e.message, e.stack)
                } else Mo.error("[INIT]: Commands written into fusetag.que.push must be wrapped in a function")
            }
            Fo()
        }
        D.setStateStatus("fuse_queue_finish")
    }

    function Pr(e, t, n) {
        e ? (x.debug("[INIT]: Running second (".concat(t, ") docReady auto-scan and auction")), D.setStateStatus("second_autoscan_".concat(t, "_start")), mr.registerAndRunAuction(!0, !1, yr), D.setStateStatus("second_autoscan_".concat(t, "_finish")), x.debug("[INIT]: Finished second docReady DOM scan")) : M.updateState("docReadyScan", ve(n, D.getElapsedTime(), void 0))
    }

    function Rr() {
        var e, t = pe(D.getElapsedTime());
        M.updateState("gpt", t), e = function(e) {
            M.updateState("gpt", ve(t, D.getElapsedTime(), void 0)), Er.initInterstitial()
        }, w(function() {
            k.debug("[GPT]: Queued events beginning to execute"), I.setStateStatus("gpt_queue_start"), ee(!cn.isCmpRequired(), function() {
                Tn(!0)
            }), En(), l.enableServices(), e(l)
        }), te(Nt(), "simulate gpt init delay", k, function() {
            I.setStateStatus("gpt_load_start"), pn(function() {
                I.setStateStatus("gpt_load_finish")
            })
        })
    }

    function Or() {
        D.setStateStatus("fuse_bootstrap_start");
        var t = f.getBrowserWindowObject(),
            e = t.scrollY,
            n = (hr.enableApi(br), L.getTagStartCutoffMs()),
            i = D.getElapsedTime();
        if (h(n) || i < n) {
            L.isCmpRequired() ? ("none" !== L.getCmpProvider().partner && te(Mt(), "simulate quantcast load delay", x, function() {
                return go.getCmpProviderLoader().load(L.getCmpProvider())
            }), kr.enable()) : M.updateState("cmp", he()), L.isIframeCmp() && go.getIframeCmpManager().load(), ee(L.isPubxaiEnabled(), function() {
                bi()
            }), ee(L.isIn2wInjection(), function() {
                vr(t, L.getIn2wAdvertiserId(), L.getIn2wRatio(), L.getIn2wAdvertiserTimeZone())
            }), L.isPrebidEnabled() ? (n = L.getPrebidTagStartCutoffMs(), s = D.getElapsedTime(), h(n) || s < n ? (o = function(e) {
                var n = pe(D.getElapsedTime(), e);
                M.updateState("prebid", n), ui.enable(function(e) {
                    var e = D.getElapsedTime() - e,
                        t = L.getPrebidDownloadCutoffMs();
                    h(t) || e <= t ? M.updateState("prebid", ve(n, D.getElapsedTime(), void 0)) : (x.log("[PREBID]: Not enabling because library took ".concat(e, "ms to download")), M.updateState("prebid", fe()))
                })
            }, r = Ar.getCurrentBreakpoint().name, L.isPrebidEnabledAtBP(r) ? o(!1) : (x.info("[INIT]: Prebid not enabled at breakpoint ".concat(r, ", deferring initialisation")), M.updateState("prebid", ge()), m.onBreakpointChanged.subscribe(function(e) {
                e = e.name;
                L.isPrebidEnabledAtBP(e) && "deferred" === M.state.prebid._tag && (x.info("[INIT]: Prebid is enabled for breakpoint ".concat(r, ", loading it now")), o(!0))
            }))) : (M.updateState("prebid", fe()), x.info("[INIT]: Skipping prebid load because fuse took ".concat(s, "ms to begin loading")))) : (M.updateState("prebid", he()), x.info("[INIT]: Not loading Prebid because it is disabled")), L.isUamEnabled() ? (n = L.getUamTagStartCutoffMs(), s = D.getElapsedTime(), h(n) || s < n ? (a = function(t) {
                te(Ft(), "simulate uam download delay", x, function() {
                    var e = pe(D.getElapsedTime(), t);
                    M.updateState("uam", e), Sr.load(L.isCmpRequired(), function() {
                        M.updateState("uam", ve(e, D.getElapsedTime(), void 0))
                    })
                })
            }, L.isUamEnabledAtBP(Ar.getCurrentBreakpoint().name) ? a(!1) : (M.updateState("uam", ge()), m.onBreakpointChanged.subscribe(function(e) {
                e = e.name;
                L.isUamEnabledAtBP(e) && "deferred" === M.state.uam._tag && (x.info("[INIT]: UAM is enabled for breakpoint ".concat(e, ", loading it now")), a(!0))
            }))) : (M.updateState("uam", fe()), x.info("[INIT]: Deferring UAM load because fuse took ".concat(s, "ms to begin loading")))) : (M.updateState("uam", he()), x.info("[INIT]: Not loading Uam because it is disabled")), L.isYandexEnabled() ? (M.updateState("gpt", he()), c = pe(D.getElapsedTime()), M.updateState("yandex", c), window.yaContextCb ? M.updateState("yandex", ve(c, D.getElapsedTime(), void 0)) : ((d = (n = f.getBrowserWindowObject().document).createElement("script")).innerHTML = "window.yaContextCb=window.yaContextCb||[]", n.head.appendChild(d), (d = n.createElement("script")).src = "https://yandex.ru/ads/system/context.js", d.async = !0, n.head.appendChild(d), u = setInterval(function() {
                var e;
                null != (e = null == (e = window.Ya) ? void 0 : e.Context) && e.AdvManager && (M.updateState("yandex", ve(c, D.getElapsedTime(), void 0)), clearInterval(u))
            }, 100))) : (M.updateState("yandex", he()), Rr(), w(function() {
                Dn.enableIfApplicable()
            })), ee(L.isConfiantEnabled(), function() {
                Fn.enable(L.getConfiantId())
            }), ee(L.isId5Enabled(), function() {
                qn.enable()
            }), ee(L.isIdentityEnabled(), function() {
                Yn.enable(t)
            }), ee(L.isResponsiveEnabled(), function() {
                x.info("[INIT]: Enabling responsive"), P.configureResponsive()
            }), ee(L.isPubstackEnabled(), function() {
                jn.enable(L.getPubstackId())
            }), L.isArctagEnabled() && L.isPrebidEnabled() ? hi.enable() : x.info("[INIT]: Not loading Arctag because it(or prebid) is disabled"), Ir.setIsLowDwellPage(Tr.isLowDwellUrl(t.location.toString()));
            var o, r, s, a, u, c, l, d, g, n = x;
            L.getV2CompatOverrides(), P.getApiV3();
            try {
                n.log("[INIT][onFuseLoadCallback] Start"), n.debug("[INIT][onFuseLoadCallback] Finish")
            } catch (e) {
                n.error("[INIT][onFuseLoadCallback] Encountered error during evaluation", e)
            }
            L.getUseTelemetry() && Cr.recordFuseLoad(e), L.isScanDOMOnPageLoad() ? (d = document.readyState, g = pe(D.getElapsedTime()), M.updateState("docReadyScan", g), "complete" === d ? (x.info("[INIT]: Document state is already 'complete'"), Pr(!1, d, g)) : (l = !1, "interactive" === d && (x.info("[INIT]: Document state is already 'interactive'"), Pr(!(l = !0), d, g)), document.addEventListener("readystatechange", function() {
                var e = document.readyState,
                    t = (D.setStateStatus("document_readystatechange_".concat(e)), x.info("[INIT]: Received document '".concat(e, "' listener callback")), l);
                l = !0, Pr(t, e, g)
            }))) : M.updateState("docReadyScan", he()), L.getIosChromeClickHandle() && (n = S.getDeviceInfo()).getBrowser() === v.Chrome && n.getOperatingSystem() === b.IOS && (x.debug("[INIT]: Monitoring touch for Chrome on IOS"), y.getTouchObserver().monitorTouchDetect(), y.enableFastClick()), m.onInitManagerReady.immediateOrOnce(function() {
                _r(), L.isWidgetRendererEnabled() && wr.init(), br.initialised = !0, br.init = !0, br.loading = !1, D.setStateStatus("tag_initialised"), Ir.setTagInitialised(), (Tr.isPageInitCalled() || L.isScanDOMOnPageLoad() || L.isAutoRegistrationEnabled()) && (D.setStateStatus("fuse_trigger_auto_auction_start"), mr.registerAndQueue(!0, !1, yr), D.setStateStatus("fuse_trigger_auto_auction_finish"), L.isAutoRegistrationEnabled()) && (br.registerAll(), setInterval(function() {
                    br.registerAll()
                }, 1e3)), D.setStateStatus("on_tag_init_event_start"), hr.tagInitEmitter.emit({}), m.onTagInitComplete.emit({
                    tagInitUrl: t.location.href
                }), D.setStateStatus("on_tag_init_event_finish"), mr.runAuction();
                var e = m.onPageInit;
                e.subscribe(function() {
                    return Er.initInterstitial()
                }), e.subscribe(function() {
                    x.debug("[PAGE]: Registering slots and running auction after PageInit"), Ir.setIsLowDwellPage(Tr.isLowDwellUrl(t.location.toString())), mr.registerAndRunAuction(!0, !1, yr)
                }), er.getVideoManager().init(), m.onPageReset.subscribe(function() {
                    x.debug("[PAGE]: Received page reset event"), Er.clearInterstitial()
                })
            })
        } else x.warn("[INIT]: Fuse will not show ads because it took ".concat(i, "ms before it began loading"));
        D.setStateStatus("fuse_bootstrap_finish")
    }
    L.getUseTelemetry() && (Cr.prepareBackgroundRequestProcessor(), Cr.prepareRecordingWebVitals()), te(t("fuseDelayInit"), "simulate slow fuse download", x, Or)
});