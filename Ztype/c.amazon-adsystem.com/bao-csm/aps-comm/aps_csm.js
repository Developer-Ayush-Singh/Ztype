var amzn_aps_csm = amzn_aps_csm || {};
amzn_aps_csm.errors = [], amzn_aps_csm.reportErrors = function(a) {
        var b, c;
        for (/^https?:\/\//.test(a) === !1 && (a = document.location.protocol + "//" + a), "/" !== a.substr(a.length - 1) && (a += "/"), b = 0; b < amzn_aps_csm.errors.length; b++) c = '{"adViewability":[{"error": {"m": "' + amzn_aps_csm.errors[b] + '"}}], "c": "aps_communicator", "api": "RTB", "error": 1}', "https:" === document.location.protocol && /^http:\/\//.test(a) === !0 && (a = a.replace("http://", "https://")), (new Image).src = a + c + "?cb=" + Math.round(1e7 * Math.random());
        amzn_aps_csm.errors = []
    },
    function(a) {
        function b(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : a
        }

        function c(a) {
            if (a && a.s) {
                var b, c = a.s.length > 0 ? a.s[0] : "",
                    d = a.s.length > 1 ? a.s[1] : "";
                c && (b = c.match(j)), b && 3 === b.length || !d || (b = d.match(i)), b && 3 === b.length && (a.f = b[1], a.l = b[2])
            }
        }

        function d(a, d) {
            if (d = d || {}, !a) return {};
            a.m && a.m.message && (a = a.m);
            var i, j, k, l, m, n = {
                    m: e(a, d),
                    c: a.c ? "" + a.c : a.c,
                    s: [],
                    l: a.l || a.line || a.lineno || a.lineNumber,
                    name: a.name,
                    type: a.type
                },
                o = 0,
                p = 0;
            if (i = a.stack || (a.err ? a.err.stack : ""), i && i.split)
                for (j = i.split("\n"); o < j.length && n.s.length < g;) k = j[o++], k && n.s.unshift(b(k));
            else
                for (l = f(a.args || arguments, "callee"), o = 0, p = 0; l && g > o;) m = h, l.skipTrace || (k = l.toString(), k && k.substr && (m = 0 === p ? 4 * h : m, m = 1 === p ? 2 * h : m, n.s.unshift(k.substr(0, m)), p++)), l = f(l, "caller"), o++;
            return !n.f && n.s.length > 0 && c(n), n
        }

        function e(a, b) {
            var c = b.m || b.message || "";
            return c += a.m && a.m.message ? a.m.message : a.m && a.m.target && a.m.target.tagName ? "Error handler invoked by " + a.m.target.tagName + " tag" : a.m ? a.m : a.message ? a.message : "Unknown error"
        }

        function f(a, b) {
            try {
                return a[b]
            } catch (c) {
                return ""
            }
        }
        var g = 20,
            h = 256,
            i = /\(?([^\s]*):(\d+):\d+\)?/,
            j = /.*@(.*):(\d*)/;
        a.constructErrorMessage = d
    }(amzn_aps_csm), window.JSON || (window.JSON = {
        parse: function(sJSON) {
            return eval("(" + sJSON + ")")
        },
        stringify: function() {
            var a = Object.prototype.toString,
                b = Array.isArray || function(b) {
                    return "[object Array]" === a.call(b)
                },
                c = {
                    '"': '\\"',
                    "\\": "\\\\",
                    "\b": "\\b",
                    "\f": "\\f",
                    "\n": "\\n",
                    "\r": "\\r",
                    "	": "\\t"
                },
                d = function(a) {
                    return c[a] || "\\u" + (a.charCodeAt(0) + 65536).toString(16).substr(1)
                },
                e = /[\\"\u0000-\u001F\u2028\u2029]/g;
            return function f(c) {
                var g, h, i, j;
                if (null == c) return "null";
                if ("number" == typeof c) return isFinite(c) ? c.toString() : "null";
                if ("boolean" == typeof c) return c.toString();
                if ("object" == typeof c) {
                    if ("function" == typeof c.toJSON) return f(c.toJSON());
                    if (b(c)) {
                        for (g = "[", h = 0; h < c.length; h++) g += (h ? ", " : "") + f(c[h]);
                        return g + "]"
                    }
                    if ("[object Object]" === a.call(c)) {
                        i = [];
                        for (j in c) c.hasOwnProperty(j) && i.push(f(j) + ": " + f(c[j]));
                        return "{" + i.join(", ") + "}"
                    }
                }
                return '"' + c.toString().replace(e, d) + '"'
            }
        }()
    }), amzn_aps_csm = amzn_aps_csm || {}, amzn_aps_csm.log = function(a) {
        try {
            -1 !== window.location.href.indexOf("csm_debug_mode") && window.console && window.console.log(a)
        } catch (b) {
            b.message && amzn_aps_csm.errors.push(b.message)
        }
    }, amzn_aps_csm.loadModules = function(a) {
        var b, c, d;
        try {
            for (b = 0; b < a.length; b++) {
                if (c = a[b].name, d = a[b].params || [], window.performance && window.performance.mark && "function" == typeof window.performance.mark && window.performance.mark("loadStart" + c), "[object Array]" !== Object.prototype.toString.call(d) && amzn_aps_csm.log("Params passed in the amzn_aps_csm.loadModules methods must be an array"), amzn_aps_csm[c]) {
                    if (void 0 === amzn_aps_csm[c].shortName) throw new amzn_aps_csm.invalidModuleException("Module shortName not defined for module " + c + ". ");
                    amzn_aps_csm[c].init.apply(amzn_aps_csm[c], d), amzn_aps_csm.log("Initiated " + c + " module")
                } else amzn_aps_csm.log("Undefined module " + c);
                window.performance && window.performance.mark && "function" == typeof window.performance.mark && (window.performance.mark("loadEnd" + c), window.performance.measure("lt" + amzn_aps_csm[c].shortName, "loadStart" + c, "loadEnd" + c))
            }
        } catch (e) {
            e.message && amzn_aps_csm.errors.push(e.message)
        }
    }, amzn_aps_csm.define = function(a) {
        var b, c, d, e, f, g, h, i;
        try {
            for (b = function(a) {
                    return "string" == typeof a ? amzn_aps_csm[a] : a
                }, c = Array.prototype.slice.call(arguments), d = c[0], e = c.length > 2 ? c[1] : [], f = c[c.length - 1], g = [], h = 0, i = e.length; i > h; h++) g.push(b(e[h]));
            amzn_aps_csm[d] = f.apply(f, g)
        } catch (j) {
            j.message && amzn_aps_csm.errors.push(j.message)
        }
    }, amzn_aps_csm.invalidModuleException = function(a) {
        this.value = a, this.message = "does not conform to the expected format of a module", this.toString = function() {
            return this.value + this.message
        }
    }, amzn_aps_csm = amzn_aps_csm || {}, amzn_aps_csm.define("eventUtils", [], function() {
        var a = {
            shortName: "eu"
        };
        return a.init = function() {
            amzn_aps_csm.log("Initializing eventUtils"), a.eventHandlers = []
        }, a.addEvent = function(b, c, d, e) {
            b.addEventListener ? b.addEventListener(c, d, e) : b.attachEvent && b.attachEvent("on" + c, d);
            var f = {
                elem: b,
                eventName: c,
                cb: d
            };
            a.eventHandlers.push(f)
        }, a.registerPostMessageHandler = function(a) {
            var b = window.addEventListener ? "addEventListener" : "attachEvent",
                c = window[b],
                d = "attachEvent" == b ? "onmessage" : "message";
            c(d, function(b) {
                a(b)
            }, !1)
        }, a
    }), amzn_aps_csm = amzn_aps_csm || {}, amzn_aps_csm.define("pixelQueue", [], function() {
        var a = {
            shortName: "pq"
        };
        return a.init = function() {}, a.firePixel = function(a, b, c) {
            if ("" !== b) {
                /^https?:\/\//.test(b) === !1 && (b = document.location.protocol + "//" + b), "/" != b.substr(b.length - 1) && (b += "/"), "https:" === document.location.protocol && /^http:\/\//.test(b) === !0 && (b = b.replace("http://", "https://"));
                try {
                    var d = JSON.parse(a);
                    d.ver = amzn_aps_csm.version, a = JSON.stringify(d)
                } catch (e) {}
                void 0 !== c && "" !== c && (b += c), (new Image).src = b + a + "?cb=" + Math.round(1e7 * Math.random())
            } else amzn_aps_csm.log("instrURL is empty")
        }, a
    }), amzn_aps_csm = amzn_aps_csm || {},
    function() {
        var a, b;
        amzn_aps_csm.loadModules([{
            name: "eventUtils",
            params: []
        }]);
        for (a in amzn_aps_csm.eventUtils) amzn_aps_csm.eventUtils.hasOwnProperty(a) && (amzn_aps_csm[a] = amzn_aps_csm.eventUtils[a]);
        amzn_aps_csm.loadModules([{
            name: "pixelQueue",
            params: []
        }]), b = 5, amzn_aps_csm.registerPostMessageHandler(function(a) {
            var c, d, e, f, g, h, i, j, k, l, m;
            if (amzn_aps_csm.log("parent received message!: ", a.data), amzn_aps_csm.log(a.origin), /pixelId/.test(a.data)) {
                for (c = a.source, d = 0; c.parent !== top && b > d;) c = c.parent, d++;
                for (e = {}, "object" == typeof apstag && null !== apstag && "function" == typeof apstag._getSlotIdToNameMapping && null !== apstag._getSlotIdToNameMapping() && (e = apstag._getSlotIdToNameMapping()), f = "", g = document.getElementsByTagName("iframe"), h = 0; h < g.length; h++)
                    if (g[h].contentWindow === c) {
                        i = g[h].parentElement;
                        do j = i.id, i = i.parentElement; while (e.hasOwnProperty(j) === !1 && "body" !== i.tagName.toLowerCase());
                        f = e[j] || j
                    }
                k = JSON.parse(a.data), l = decodeURIComponent(k.instrURL), m = {
                    sn: encodeURIComponent(f),
                    pixelId: k.pixelId
                }, /amazon-adsystem\.com/.test(l) && amzn_aps_csm.pixelQueue.firePixel(JSON.stringify(m), l, "")
            }
        })
    }();