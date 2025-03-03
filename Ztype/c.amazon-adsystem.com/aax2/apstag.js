/*! @amzn/apswebapstaglibrary - web-client-bundle - v23.1010.1530 - 2023-10-10 15:30:40 */ ! function() {
    "use strict";
    var t = function(e, n) {
        return t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        }, t(e, n)
    };
    var e, n, o, r, i = function() {
        return i = Object.assign || function(t) {
            for (var e, n = 1, o = arguments.length; n < o; n++)
                for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }, i.apply(this, arguments)
    };

    function a(t, e, n, o) {
        var r, i = arguments.length,
            a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
        else
            for (var u = t.length - 1; u >= 0; u--)(r = t[u]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
        return i > 3 && a && Object.defineProperty(e, n, a), a
    }

    function u(t, e, n, o) {
        return new(n || (n = Promise))((function(r, i) {
            function a(t) {
                try {
                    c(o.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(o.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(a, u)
            }
            c((o = o.apply(t, e || [])).next())
        }))
    }

    function c(t, e) {
        var n, o, r, i, a = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(u) {
            return function(c) {
                return function(u) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i && (i = 0, u[0] && (a = 0)), a;) try {
                        if (n = 1, o && (r = 2 & u[0] ? o.return : u[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, u[1])).done) return r;
                        switch (o = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                            case 0:
                            case 1:
                                r = u;
                                break;
                            case 4:
                                return a.label++, {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = u[1], u = [0];
                                continue;
                            case 7:
                                u = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                    a.label = u[1];
                                    break
                                }
                                if (6 === u[0] && a.label < r[1]) {
                                    a.label = r[1], r = u;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(u);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        u = e.call(t, a)
                    } catch (t) {
                        u = [6, t], o = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, c])
            }
        }
    }

    function s(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            o = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && o >= t.length && (t = void 0), {
                    value: t && t[o++],
                    done: !t
                }
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function l(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var o, r, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(o = i.next()).done;) a.push(o.value)
        } catch (t) {
            r = {
                error: t
            }
        } finally {
            try {
                o && !o.done && (n = i.return) && n.call(i)
            } finally {
                if (r) throw r.error
            }
        }
        return a
    }

    function d(t, e, n) {
        if (n || 2 === arguments.length)
            for (var o, r = 0, i = e.length; r < i; r++) !o && r in e || (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
        return t.concat(o || Array.prototype.slice.call(e))
    }! function(t) {
        t.push = "push", t.listenerSuccess = "listenerSuccess", t.direct = "direct"
    }(e || (e = {})),
    function(t) {
        t.internal = "internal", t.apstag = "apstag", t.webpage = "webpage"
    }(n || (n = {})),
    function(t) {
        t.completed = "completed", t.waiting = "waiting", t.cancelled = "cancelled"
    }(o || (o = {})),
    function(t) {
        t.started = "started", t.error = "error", t.unknown = "unknown", t.deactivated = "deactivated"
    }(r || (r = {}));
    var v, p = i(i({}, o), r),
        f = "debugSession/end",
        g = "prepend/events",
        h = "populator/ran";
    ! function(t) {
        t.Tahoe = "tahoe", t.AaxPx = "aaxPx"
    }(v || (v = {}));
    var m, y = {
            method: "GET",
            mode: "no-cors",
            cache: "no-cache",
            credentials: "omit",
            redirect: "follow",
            referrerPolicy: "no-referrer-when-downgrade"
        },
        b = function() {
            function t(t) {
                void 0 === t && (t = .001), this.SERVICE_NAME = v.AaxPx, this._executionRatio = t
            }
            return Object.defineProperty(t.prototype, "isEnabled", {
                get: function() {
                    return this.executionRatio >= Math.random()
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.logFeature = function(t) {
                this.isEnabled && this.sendPayload(this.buildFeaturePayload(t))
            }, t.prototype.logError = function(t) {
                this.isEnabled && this.sendPayload(this.buildErrorPayload(t))
            }, t.prototype.sendPayload = function(t) {
                var e = encodeURIComponent(JSON.stringify(t).replace(/\\.{1}/g, ""));
                fetch("".concat("https://aax.amazon-adsystem.com/x/px/p/PH/").concat(e), y)
            }, t.prototype.buildErrorPayload = function(t) {
                var e, n, o, r, i, a, u = t.error,
                    c = t.errorCategory,
                    s = t.accountID;
                return {
                    _tl: "aps-tag",
                    _type: "apsLibraryError",
                    src: "kraken",
                    pubid: void 0 === s ? "unknown" : s,
                    ts: Date.now(),
                    url: encodeURIComponent(null !== (o = null === (n = null === (e = window.top) || void 0 === e ? void 0 : e.location) || void 0 === n ? void 0 : n.href) && void 0 !== o ? o : ""),
                    r: encodeURIComponent(null !== (i = null === (r = window.top) || void 0 === r ? void 0 : r.document.referrer) && void 0 !== i ? i : ""),
                    e: {
                        et: "string" == typeof u ? "unknown" : u.name,
                        el: c,
                        msg: "string" == typeof u ? "" : null !== (a = u.message) && void 0 !== a ? a : ""
                    },
                    lv: w
                }
            }, t.prototype.buildFeaturePayload = function(t) {
                var e, n, o, r = t.category,
                    i = t.feature;
                return {
                    _tl: "aps-tag",
                    _type: "featureUsage",
                    src: "kraken",
                    pubid: t.accountID,
                    p: [{
                        cat: encodeURIComponent(r),
                        feat: encodeURIComponent(i)
                    }],
                    u: encodeURIComponent(null !== (o = null === (n = null === (e = window.top) || void 0 === e ? void 0 : e.location) || void 0 === n ? void 0 : n.href) && void 0 !== o ? o : ""),
                    lv: w
                }
            }, Object.defineProperty(t.prototype, "executionRatio", {
                get: function() {
                    return this._executionRatio
                },
                set: function(t) {
                    this._executionRatio = "number" != typeof t || t < 0 ? 0 : t >= 0 && t <= 1 ? t : 1
                },
                enumerable: !1,
                configurable: !0
            }), t
        }(),
        w = "23.1010.1530";
    ! function(t) {
        t.info = "info", t.warn = "warn", t.error = "error"
    }(m || (m = {}));
    var _ = function() {
            function t() {}
            return t.Instance = function() {
                return this._instance
            }, t.SessionId = function() {
                return this._sessionId
            }, t.prototype.info = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = new Date(Date.now()),
                    o = m.info;
                return console.log.apply(console, d([this.getPrefix(n, o)], l(t), !1)), {
                    timestamp: n,
                    logLevel: o
                }
            }, t.prototype.warn = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = new Date(Date.now()),
                    o = m.warn;
                return console.warn.apply(console, d([this.getPrefix(n, o)], l(t), !1)), {
                    timestamp: n,
                    logLevel: o
                }
            }, t.prototype.error = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = new Date(Date.now()),
                    o = m.error;
                return console.error.apply(console, d([this.getPrefix(n, o)], l(t), !1)), {
                    timestamp: n,
                    logLevel: o
                }
            }, t.prototype.getPrefix = function(e, n) {
                var o = e.toISOString();
                return "".concat(o, " | ").concat(t.SessionId(), " | [").concat(n.toUpperCase(), "]")
            }, t._instance = new t, t._sessionId = "".concat(Date.now()), t
        }(),
        E = _.Instance(),
        x = function() {
            function t(t) {
                void 0 === t && (t = 5e3), this.SERVICE_NAME = v.Tahoe, this.BATCH_SIZE = 300, this._recordQueue = [], this._queueLimit = 5e3, this._executionRatio = 0, this._queueIntervalID = void 0, this._serviceUrl = "https://prod.tahoe-analytics.publishers.advertising.a2z.com/logevent/putRecords?encoded=true", this._serviceAPIKey = "79db72eb0b5c7255afa54a253df24fb4a5ac916bf40b51c730df8850aa5665ca", this._eventSource = "aps_web_client_library", this._queueInterval = t, this.createRecordQueueInterval()
            }
            return Object.defineProperty(t.prototype, "shouldSample", {
                get: function() {
                    return 0 !== this.executionRatio && this.executionRatio >= Math.random()
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.logError = function(t) {
                var e, n = t.errorCategory,
                    o = t.error,
                    r = t.timestamp,
                    i = void 0 === r ? "".concat(Date.now()) : r,
                    a = t.accountID,
                    u = void 0 === a ? "unknown" : a,
                    c = "";
                "string" != typeof o && "context" in o && (c = null !== (e = o.context) && void 0 !== e ? e : "");
                var s = this.buildTahoeStreamEvent({
                    eventCategory: "error",
                    eventName: n,
                    accountID: u,
                    timestamp: i,
                    eventProperties: {
                        error: {
                            name: "string" == typeof o ? o : o.name,
                            message: "string" == typeof o ? o : o.message,
                            context: c
                        }
                    }
                });
                this.enqueueRecord(s, i)
            }, t.prototype.logFeature = function(t) {
                var e = t.category,
                    n = t.feature,
                    o = t.timestamp,
                    r = void 0 === o ? "".concat(Date.now()) : o,
                    a = t.accountID,
                    u = void 0 === a ? "unknown" : a,
                    c = t.eventProperties,
                    s = this.buildTahoeStreamEvent({
                        eventCategory: "feat",
                        eventName: e,
                        accountID: u,
                        timestamp: r,
                        eventProperties: i({
                            status: n
                        }, null != c ? c : {})
                    });
                this.enqueueRecord(s, r)
            }, t.prototype.enqueueRecord = function(t, e) {
                try {
                    this._recordQueue.push({
                        Data: window.btoa(JSON.stringify(t)),
                        PartitionKey: e
                    })
                } catch (t) {
                    E.warn("Error enqueuing new record.", t)
                }
            }, t.prototype.createRecordQueueInterval = function() {
                var t = this;
                this._queueInterval <= 0 || (void 0 !== this._queueIntervalID && clearInterval(this._queueIntervalID), this._queueIntervalID = setInterval((function() {
                    try {
                        t.sendRecords()
                    } catch (t) {}
                }), this._queueInterval))
            }, t.prototype.sendRecords = function() {
                var t = this;
                if (0 !== this._recordQueue.length)
                    if (0 !== this.executionRatio) {
                        var e = this._recordQueue.filter((function(e) {
                            return void 0 !== e && t.shouldSample
                        }));
                        this._recordQueue.length = 0;
                        for (var n = function(e) {
                                return u(t, void 0, void 0, (function() {
                                    return c(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, fetch("".concat(this._serviceUrl), {
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                        "x-api-key": this._serviceAPIKey
                                                    },
                                                    body: JSON.stringify({
                                                        Records: e
                                                    })
                                                })];
                                            case 1:
                                                return [2, t.sent()]
                                        }
                                    }))
                                }))
                            }, o = 0; o < e.length; o += this.BATCH_SIZE) n(e.slice(o, o + this.BATCH_SIZE))
                    } else this._recordQueue.length >= this._queueLimit && (this._recordQueue.length = 0, this.logError({
                        errorCategory: "queue limit",
                        error: new Error("record queue has gone over the limit of ".concat(this._queueLimit))
                    }))
            }, t.prototype.buildTahoeStreamEvent = function(t) {
                var e, n, o, r = t.eventCategory,
                    a = t.eventName,
                    u = t.accountID,
                    c = t.timestamp,
                    s = t.eventProperties,
                    l = "";
                try {
                    l = null !== (o = null === (n = null === (e = window.top) || void 0 === e ? void 0 : e.location) || void 0 === n ? void 0 : n.href) && void 0 !== o ? o : ""
                } catch (t) {}
                return {
                    eventSource: this._eventSource,
                    eventTime: c,
                    eventCategory: r,
                    eventName: a,
                    eventProperties: i({
                        accountID: u,
                        libraryVersion: w,
                        url: l
                    }, null != s ? s : {})
                }
            }, Object.defineProperty(t.prototype, "executionRatio", {
                get: function() {
                    return this._executionRatio
                },
                set: function(t) {
                    this._executionRatio = "number" != typeof t || t < 0 ? 0 : t >= 0 && t <= 1 ? t : 1
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "queueInterval", {
                get: function() {
                    return this._queueInterval
                },
                set: function(t) {
                    var e = this._queueInterval;
                    this._queueInterval = "number" == typeof t && t >= 0 ? t : 0, e !== this._queueInterval && this.createRecordQueueInterval()
                },
                enumerable: !1,
                configurable: !0
            }), t
        }(),
        C = new(function() {
            function t() {
                var t = this;
                this.everyStream = function(e) {
                    return function(n) {
                        return t.streams.forEach((function(t) {
                            Array.isArray(e) && !e.includes(t.SERVICE_NAME) || n(t)
                        }))
                    }
                }, this._tahoeStream = new x, this._aaxPixelController = new b
            }
            return Object.defineProperty(t.prototype, "streams", {
                get: function() {
                    return [this._tahoeStream, this._aaxPixelController]
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.logError = function(t) {
                var e = t.error,
                    n = t.errorCategory,
                    o = t.loggers,
                    r = t.accountID,
                    i = void 0 === r ? "unknown" : r;
                this.everyStream(o)((function(t) {
                    return t.logError({
                        error: e,
                        errorCategory: n,
                        accountID: i
                    })
                }))
            }, t.prototype.logFeature = function(t) {
                var e = t.category,
                    n = t.feature,
                    o = t.loggers,
                    r = t.accountID,
                    i = void 0 === r ? "unknown" : r,
                    a = t.eventProperties;
                this.everyStream(o)((function(t) {
                    return t.logFeature({
                        category: e,
                        feature: n,
                        accountID: i,
                        eventProperties: a
                    })
                }))
            }, t.prototype.setRatios = function(t) {
                var e = [];
                return this.everyStream()((function(n) {
                        var o = n.executionRatio;
                        e.push((function() {
                            return n.executionRatio = o
                        })), n.executionRatio = t
                    })),
                    function() {
                        e.forEach((function(t) {
                            return t()
                        }))
                    }
            }, t.prototype.setTahoeRatio = function(t) {
                this._tahoeStream.executionRatio = t
            }, t.prototype.setTahoeQueueInterval = function(t) {
                this._tahoeStream.queueInterval = t
            }, t
        }());
    Object.freeze(C);
    var S = [f, g];

    function I(t) {
        return null === t || "object" != typeof t ? t : t instanceof Date ? new Date(t.getTime()) : t instanceof Array ? t.reduce((function(t, e) {
            return t.push(I(e)), t
        }), []) : t instanceof Set ? Array.from(t.values()).reduce((function(t, e) {
            return t.add(I(e)), t
        }), new Set) : t instanceof Map ? Array.from(t.entries()).reduce((function(t, e) {
            return t.set(e[0], I(e[1])), t
        }), new Map) : t instanceof Object ? Object.keys(t).reduce((function(e, n) {
            return e[n] = I(t[n]), e
        }), {}) : t
    }
    var P = function() {
            function t(t, e, n) {
                void 0 === e && (e = V.globalContext), void 0 === n && (n = V.rootName);
                var o = e[n].get(t);
                if (null == o) throw new Error('Missing "'.concat(t, '" account in userspace object'));
                this.globalContext = e, this.id = t, this.store = o.store, this.queue = o.queue
            }
            return t.prototype.record = function(t, e) {
                return u(this, void 0, void 0, (function() {
                    var o = this;
                    return c(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, new Promise((function(r, a) {
                                    o.queue.push(new CustomEvent(t, {
                                        detail: i({
                                            resolve: r,
                                            reject: a,
                                            source: n.internal
                                        }, e)
                                    }))
                                }))];
                            case 1:
                                return [2, r.sent()]
                        }
                    }))
                }))
            }, t.prototype.read = function(t, e) {
                var n, o, r, i, a = this.store.get(t);
                if (void 0 !== a) return a;
                if (void 0 !== (null == e ? void 0 : e.persist) && e.persist) {
                    var u = this.persistRead(t);
                    if (void 0 !== u) return u
                }
                var c = null === (o = null === (n = null == e ? void 0 : e.default) || void 0 === n ? void 0 : n.generators) || void 0 === o ? void 0 : o.get(t);
                return void 0 !== c ? c.apply(void 0, d([], l(null !== (i = null === (r = null == e ? void 0 : e.default) || void 0 === r ? void 0 : r.args) && void 0 !== i ? i : []), !1)) : void 0
            }, t.prototype.write = function(t, e, n) {
                this.store.set(t, e), void 0 !== (null == n ? void 0 : n.persist) && n.persist && this.persistWrite(t, e)
            }, t.prototype.use = function(t, e) {
                var n, o = this.store.get(t.key);
                if (void 0 !== o) n = o;
                else if (void 0 !== (null == e ? void 0 : e.persist) && e.persist) {
                    var r = this.persistRead(t.key);
                    null != r && (n = r)
                }
                n = null != n ? n : t.default;
                try {
                    return structuredClone(n)
                } catch (t) {
                    C.logError({
                        errorCategory: "Core.library.Account.use",
                        error: t,
                        accountID: "core"
                    });
                    try {
                        return I(n)
                    } catch (t) {
                        return C.logError({
                            errorCategory: "Core.library.Account.use",
                            error: t,
                            accountID: "core"
                        }), n
                    }
                }
            }, t.prototype.update = function(t, e, n) {
                var o = e(this.use(t, n));
                if (this.store.set(t.key, o), void 0 !== (null == n ? void 0 : n.persist) && n.persist) {
                    if ("string" != typeof o) throw new Error("".concat(JSON.stringify(o), " must be a string to be writtable to browser storage"));
                    this.persistWrite(t.key, o)
                }
            }, t.prototype.delete = function(t, e) {
                this.store.delete(t), void 0 !== (null == e ? void 0 : e.persist) && e.persist && this.persistDelete(t)
            }, t.prototype.getPersistedItemName = function(t) {
                return "".concat("aps").concat(":").concat(this.id).concat(":").concat(t)
            }, t.prototype.persistRead = function(t) {
                if (!S.includes(t)) throw new Error("".concat(t, " is not allowed to be read from browser storage"));
                var e = this.getPersistedItemName(t);
                if (e in this.globalContext.localStorage) return this.globalContext.localStorage.getItem(e)
            }, t.prototype.persistWrite = function(t, e) {
                if (!S.includes(t)) throw new Error("".concat(t, " is not allowed to be written to browser storage"));
                if ("string" != typeof e) throw new Error("".concat(JSON.stringify(e), " must be a string to be writtable to browser storage"));
                this.globalContext.localStorage.setItem(this.getPersistedItemName(t), e)
            }, t.prototype.persistDelete = function(t) {
                if (!S.includes(t)) throw new Error("".concat(t, " is not allowed to be touched/deleted in browser storage"));
                this.globalContext.localStorage.removeItem(this.getPersistedItemName(t))
            }, t.create = function(t) {
                var e = t.accountID,
                    n = void 0 === e ? "default" : e,
                    o = t.globalContext,
                    r = void 0 === o ? V.globalContext : o,
                    i = t.rootName,
                    a = void 0 === i ? V.rootName : i,
                    u = t.listeners,
                    c = new K(r, a);
                c.equip(), void 0 !== u && c.subscribe(u);
                var s = {
                    store: new Map,
                    queue: []
                };
                return r[a].set(n, s), new this(n)
            }, t
        }(),
        D = "_system",
        R = function(e) {
            function n(t, n) {
                return e.call(this, D, t, n) || this
            }
            return function(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                function o() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
            }(n, e), n
        }(P);

    function A(t) {
        var e = function(t, e) {
            throw void 0 !== t.context ? t.context = "".concat(e, " > ").concat(t.context) : t.context = e, t
        };
        return function(n, o, r) {
            var i = r.value;
            return r.value = function() {
                for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                try {
                    var r = i.apply(this, n);
                    return r && r instanceof Promise ? r.catch((function(n) {
                        e(n, t)
                    })) : r
                } catch (n) {
                    e(n, t)
                }
            }, r
        }
    }
    var O = "listeners",
        N = "_internal/history",
        q = "_config/events/activations",
        M = "_config/events/deactivations",
        j = "_internal/pageLoadID",
        L = "_internal/externalEventCount",
        T = "_internal/recentDispatches",
        U = "_internal/coreDebugMode",
        z = function() {
            function t(t, e, n) {
                this.globalContext = t, this.rootName = e, this.dispatcher = n
            }
            return t.prototype.getAccounts = function() {
                return this.globalContext[this.rootName]
            }, t.prototype.createUserspaceRoot = function() {
                null == this.getAccounts() && (this.globalContext[this.rootName] = new Map)
            }, t.prototype.createSystemAccount = function() {
                !1 === this.getAccounts().has(D) && (this.getAccounts().set(D, {
                    queue: [],
                    store: new Map
                }), (new R).store.set(j, Math.random()))
            }, t.prototype.observeRootSet = function() {
                var t = this;
                this.getAccounts().set = function(e, n) {
                    Map.prototype.set.apply(this, [e, n]), t.equip()
                }
            }, t.prototype.observeAccountQueuesPush = function() {
                var t = this;
                this.getAccounts().forEach((function(n) {
                    n.queue.push = function() {
                        for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                        Array.prototype.push.apply(this, n), t.dispatcher.dispatch({
                            reason: {
                                method: e.push,
                                events: n
                            }
                        })
                    }
                }))
            }, t.prototype.overwriteAccountStoresGet = function() {
                this.getAccounts().forEach((function(t) {
                    t.store.get = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var n = Map.prototype.get.apply(this, t);
                        return n
                    }
                }))
            }, t.prototype.defineConvenienceFunctions = function() {
                var t = this,
                    e = function(e, n, o) {
                        var r = t.getAccounts().get(e);
                        void 0 !== r && r.queue.push(new CustomEvent(n, {
                            detail: null != o ? o : {}
                        }))
                    },
                    n = this.globalContext[this.rootName];
                n.triggerFor = e, n.trigger = function(t, n) {
                    e(D, t, n)
                }
            }, t.prototype.equip = function() {
                try {
                    this.createUserspaceRoot(), this.createSystemAccount(), this.observeRootSet(), this.observeAccountQueuesPush(), this.overwriteAccountStoresGet(), this.defineConvenienceFunctions()
                } catch (t) {
                    throw C.logError({
                        errorCategory: "Core.library.Equiper.equip",
                        error: t,
                        accountID: "core"
                    }), t
                }
            }, t
        }(),
        k = function(t) {
            var e, n;
            if (void 0 === t || !Array.isArray(t)) return !0;
            var o = window;
            do {
                if (t.includes(null === (e = null == o ? void 0 : o.location) || void 0 === e ? void 0 : e.hostname)) return !0;
                if (o === window.top) break;
                n = o, o = o.parent
            } while (n !== o && n !== window.top);
            return !1
        };

    function F() {
        var t, e, n;
        try {
            return !!new URLSearchParams(null !== (e = null === (t = window.top) || void 0 === t ? void 0 : t.location.search) && void 0 !== e ? e : window.location.search).has("apsCoreDebugMode") || null !== (n = (new R).read(U)) && void 0 !== n && n
        } catch (t) {
            return !1
        }
    }
    var B = [p.completed, p.error, p.cancelled],
        H = function() {
            function t(t, e) {
                this.globalContext = t, this.rootName = e
            }
            return t.prototype.getDeactivations = function(t) {
                var e;
                return null !== (e = t.store.get(M)) && void 0 !== e ? e : new Set
            }, t.prototype.isEventDeactivated = function(t, e) {
                return !0 === this.getDeactivations(t).has(e.type) || function(t, e) {
                    var n, o, r, i, a, u;
                    try {
                        var c = null === (r = null === (o = null === (n = t.detail) || void 0 === n ? void 0 : n.restrictions) || void 0 === o ? void 0 : o.allow) || void 0 === r ? void 0 : r.hostnames;
                        if (void 0 !== c && !k(c)) return !0;
                        var s = null === (u = null === (a = null === (i = t.detail) || void 0 === i ? void 0 : i.restrictions) || void 0 === a ? void 0 : a.block) || void 0 === u ? void 0 : u.hostnames;
                        if (void 0 !== s && k(s)) return !0
                    } catch (t) {
                        return C.logError({
                            error: new Error("Host name filtering failed"),
                            errorCategory: "hostnames",
                            accountID: e
                        }), !1
                    }
                    return !1
                }(e, t.id)
            }, t.prototype.getListeners = function() {
                var t;
                return null !== (t = (new R).store.get(O)) && void 0 !== t ? t : new Map
            }, t.prototype.getListener = function(t) {
                return this.getListeners().get(t.type)
            }, t.prototype.shouldWaitingEventBeProcessed = function(t) {
                var e = this.readStoreItemCount(L);
                return (void 0 === t.externalEventCount || t.externalEventCount < e) && (t.externalEventCount = e, !0)
            }, t.prototype.shouldEventBeProcessed = function(t) {
                if (void 0 === t.status) return !0;
                if (t.status === p.started) return !1;
                if (B.includes(t.status)) return !1;
                if (t.status === p.waiting) return !!this.shouldWaitingEventBeProcessed(t);
                if (t.status === p.unknown) return !1;
                if (t.status === p.deactivated) return !1;
                throw new Error("Event status not explicitely handled: ".concat(t.status))
            }, t.prototype.addTimeoutToPromiseRaceIfRequested = function(t, e) {
                var n;
                void 0 !== (null === (n = e.detail) || void 0 === n ? void 0 : n.timeout) && t.push(new Promise((function(t, n) {
                    setTimeout((function() {
                        return n(new Error('Event "'.concat(e.type, '" timed out')))
                    }), e.detail.timeout)
                })))
            }, t.prototype.incrementStoreItemCountBy = function(t, e) {
                var n, o = new R,
                    r = null !== (n = o.read(t)) && void 0 !== n ? n : 0;
                o.write(t, r + e)
            }, t.prototype.resetStoreItemCount = function(t) {
                (new R).write(t, 0)
            }, t.prototype.readStoreItemCount = function(t) {
                var e;
                return null !== (e = (new R).read(t)) && void 0 !== e ? e : 0
            }, t.prototype.onListenerSuccess = function(t, n, o, r) {
                var i;
                if (!(n in p)) throw new Error("Listener returned invalid status: ".concat(t.type, " returned ").concat(n));
                if (this.updateEventStatusAndLogUsage(t, n, r), n !== p.waiting && void 0 !== (null === (i = t.detail) || void 0 === i ? void 0 : i.resolve)) try {
                    t.detail.resolve(o)
                } catch (t) {
                    E.error(t)
                }
                this.dispatch({
                    reason: {
                        method: e.listenerSuccess,
                        events: [t]
                    }
                })
            }, t.prototype.onListenerFailure = function(t, e, n) {
                var o;
                if (this.updateEventStatusAndLogUsage(t, p.error, n), void 0 !== (null === (o = t.detail) || void 0 === o ? void 0 : o.reject)) try {
                    t.detail.reject(e)
                } catch (t) {
                    E.error(t)
                } else E.error(e);
                e.context = t.type, C.logError({
                    errorCategory: t.type,
                    error: e,
                    accountID: n
                })
            }, t.prototype.addListenerToPromiseRace = function(t, e, n) {
                var o = this.getListener(e);
                t.push(o({
                    customEvent: e,
                    account: n
                }))
            }, t.prototype.runPromiseRace = function(t, e, n) {
                var o = this;
                Promise.race(t).then((function(t) {
                    var r, i;
                    "string" == typeof t ? r = t : "object" == typeof t && (r = t.status, i = t.value), o.onListenerSuccess(e, r, i, n)
                })).catch((function(t) {
                    o.onListenerFailure(e, t, n)
                }))
            }, t.prototype.executeListenerRace = function(t, e) {
                var n = [];
                this.addListenerToPromiseRace(n, t, e), this.addTimeoutToPromiseRaceIfRequested(n, t), this.runPromiseRace(n, t, e.id)
            }, t.prototype.flagDeactivatedListener = function(t, e) {
                this.isEventDeactivated(e, t) && this.updateEventStatusAndLogUsage(t, p.deactivated, e.id)
            }, t.prototype.flagMissingListener = function(t, e) {
                void 0 === this.getListener(t) && this.updateEventStatusAndLogUsage(t, p.unknown, e.id)
            }, t.prototype.dispatchEvent = function(t, e) {
                var n;
                this.flagMissingListener(t, e), this.flagDeactivatedListener(t, e), this.shouldEventBeProcessed(t) && (this.updateEventStatusAndLogUsage(t, p.started, e.id), F() && E.info("## Execute event: ".concat(t.type, " with initial status ").concat(null !== (n = t.status) && void 0 !== n ? n : "undefined")), this.executeListenerRace(t, e))
            }, t.prototype.dispatchAccount = function(t, e) {
                var n = this;
                t.queue.forEach((function(e) {
                    return n.dispatchEvent(e, t)
                }))
            }, t.prototype.updateEventStatus = function(t, e) {
                t.status = e, t.statusEvents = null != t.statusEvents ? t.statusEvents : [], t.statusEvents.push(new Event(e))
            }, t.prototype.logEventUsage = function(t, e, n) {
                C.logFeature({
                    category: t.type,
                    feature: e,
                    eventProperties: t.analytics,
                    accountID: n
                })
            }, t.prototype.updateEventStatusAndLogUsage = function(t, e, n) {
                var o;
                t.status !== e && (F() && E.info("### Update ".concat(t.type, " from ").concat(null !== (o = t.status) && void 0 !== o ? o : "undefined", " to ").concat(e)), this.updateEventStatus(t, e), !0 !== t.isLogDisabled && this.logEventUsage(t, e, n))
            }, t.prototype.getAccounts = function() {
                var t = this,
                    e = new Map;
                return this.globalContext[this.rootName].forEach((function(n, o) {
                    return e.set(o, new P(o, t.globalContext, t.rootName))
                })), e
            }, t.prototype.recordProcessedEvents = function(t) {
                var e = null != t.store.get(N) ? t.store.get(N) : [];
                e.push.apply(e, d([], l(t.queue.filter((function(t) {
                    return void 0 !== t.status && B.includes(t.status)
                }))), !1)), t.store.set(N, e)
            }, t.prototype.cleanUpAccountQueue = function(t) {
                var e;
                (e = t.queue).splice.apply(e, d([0, t.queue.length], l(t.queue.filter((function(t) {
                    return void 0 === t.status || !B.includes(t.status)
                }))), !1))
            }, t.prototype.archive = function() {
                var t = this;
                this.getAccounts().forEach((function(e) {
                    t.recordProcessedEvents(e), t.cleanUpAccountQueue(e)
                }))
            }, t.prototype.filterExternalEvents = function(t) {
                return null == t ? void 0 : t.filter((function(t) {
                    var e, o;
                    return (null === (e = t.detail) || void 0 === e ? void 0 : e.source) !== n.internal && (null === (o = t.detail) || void 0 === o ? void 0 : o.source) !== n.apstag && t.status !== p.waiting
                }))
            }, t.prototype.getNumberOfExternalEvents = function(t) {
                var e, n = this.filterExternalEvents(t);
                return null !== (e = null == n ? void 0 : n.length) && void 0 !== e ? e : 0
            }, t.prototype.updateExternalEventCount = function(t) {
                var e = this.getNumberOfExternalEvents(t);
                this.incrementStoreItemCountBy(L, e)
            }, t.prototype.throwOnInfiniteLoop = function() {
                var t = this,
                    e = T;
                this.incrementStoreItemCountBy(e, 1);
                var n = this.readStoreItemCount(e);
                if (n > 1e4) throw new Error("Too many dispatches. Aborting");
                n % 100 == 0 && C.logFeature({
                    category: "Core.library.Dispatcher.throwOnInfiniteLoop",
                    feature: "recentDispatchesCount",
                    eventProperties: {
                        recentDispatchesCount: n
                    },
                    accountID: "core"
                }), setTimeout((function() {
                    t.resetStoreItemCount(e)
                }), 100)
            }, t.prototype.dispatch = function(t) {
                var e, n, o, r, i, a = this,
                    u = t.reason;
                try {
                    this.throwOnInfiniteLoop(), F() && E.info('# Dispatch from method "'.concat(u.method, '" on event "').concat(null !== (n = null === (e = u.events) || void 0 === e ? void 0 : e[0].type) && void 0 !== n ? n : "undefined", '" with source "').concat(null !== (i = null === (r = null === (o = u.events) || void 0 === o ? void 0 : o[0].detail) || void 0 === r ? void 0 : r.source) && void 0 !== i ? i : "undefined", '"\n_________________________________________')), this.updateExternalEventCount(u.events), this.getAccounts().forEach((function(t) {
                        return a.dispatchAccount(t, u)
                    })), this.archive()
                } catch (t) {
                    throw C.logError({
                        errorCategory: "Core.library.Dispatcher.dispatch",
                        error: t,
                        accountID: "core"
                    }), t
                }
            }, t
        }(),
        Q = function() {
            function t(t, e) {
                this.globalContext = t, this.rootName = e
            }
            return t.prototype.subscribe = function(t) {
                try {
                    var e = new R,
                        n = null != e.store.get(O) ? e.store.get(O) : new Map;
                    e.store.set(O, new Map(d(d([], l(n), !1), l(t), !1)))
                } catch (t) {
                    throw C.logError({
                        errorCategory: "Core.library.Subscriber.subscribe",
                        error: t,
                        accountID: "core"
                    }), t
                }
            }, t
        }(),
        G = function() {
            function t(t, e) {
                this.globalContext = t, this.rootName = e
            }
            return t.prototype.populate = function() {
                try {
                    var t = new R,
                        e = !1;
                    try {
                        e = JSON.parse(t.read(h))
                    } catch (t) {}
                    if (e) return;
                    t.write(h, JSON.stringify(!0)), this.populateFromPrependStore(), this.populateFromQueryParams()
                } catch (t) {
                    throw C.logError({
                        errorCategory: "Core.library.Populator.populate",
                        error: t,
                        accountID: "core"
                    }), t
                }
            }, t.prototype.populateFromPrependStore = function() {
                var t = this;
                this.globalContext[this.rootName].forEach((function(e, n) {
                    var o, r, i = new P(n, t.globalContext, t.rootName),
                        a = null !== (r = i.read(g, {
                            persist: !0
                        })) && void 0 !== r ? r : "[]";
                    i.write(g, JSON.stringify([]));
                    try {
                        var u = JSON.parse(a);
                        if (0 === u.length) return;
                        (o = i.queue).push.apply(o, d([], l(u.map(W)), !1))
                    } catch (t) {
                        console.error("Error processing prepended events", t)
                    }
                }))
            }, t.prototype.populateFromQueryParams = function() {
                var t, e, n = null === (e = null === (t = this.globalContext) || void 0 === t ? void 0 : t.location) || void 0 === e ? void 0 : e.search,
                    o = new URLSearchParams(n),
                    r = this.globalContext[this.rootName],
                    i = r.get(D);
                J(o, "aps.trigger").forEach((function(t) {
                    i.queue.push(W(t))
                })), J(o, "aps.triggerFor", !0).forEach((function(t) {
                    void 0 !== t.accountId && r.has(t.accountId) && r.get(t.accountId).queue.push(W(t))
                }));
                var a = J(o, "aps_event");
                r.forEach((function(t) {
                    a.forEach((function(e) {
                        t.queue.push(W(e))
                    }))
                }))
            }, t
        }(),
        J = function(t, e, n) {
            void 0 === n && (n = !1);
            var o = t.getAll(e),
                r = [];
            return o.forEach((function(t) {
                var e, o = t.split(",");
                n && (e = o.shift());
                var i = o.shift();
                if (void 0 !== i && i.length > 0) {
                    var a = decodeURIComponent(o.join(",")),
                        u = void 0;
                    if (a.length > 0) try {
                        u = JSON.parse(a)
                    } catch (t) {
                        console.error("Error processing query param event", i, u)
                    }
                    r.push({
                        eventName: i.replace(/_/g, "/"),
                        eventDetail: u,
                        accountId: e
                    })
                }
            })), r
        },
        W = function(t) {
            var e;
            return new CustomEvent(t.eventName, {
                detail: i({}, null !== (e = t.eventDetail) && void 0 !== e ? e : {})
            })
        },
        V = {
            globalContext: window,
            rootName: "_aps"
        },
        K = function() {
            function t(t, e) {
                void 0 === t && (t = V.globalContext), void 0 === e && (e = V.rootName), this.dispatcher = new H(t, e), this.equiper = new z(t, e, this.dispatcher), this.subscriber = new Q(t, e), this.populator = new G(t, e), this.globalContext = t, this.rootName = e
            }
            return t.prototype.subscribe = function(t) {
                this.subscriber.subscribe(t)
            }, t.prototype.equip = function() {
                this.equiper.equip()
            }, t.prototype.dispatch = function(t) {
                var e = t.reason;
                this.dispatcher.dispatch({
                    reason: e
                })
            }, t.prototype.populate = function() {
                this.populator.populate()
            }, t.prototype.load = function(t) {
                var n = t.listeners;
                this.equip(), this.subscribe(n), this.dispatch({
                    reason: {
                        method: e.direct
                    }
                }), this.populate()
            }, a([A("HASH#Core.library.UserSpace.subscribe")], t.prototype, "subscribe", null), a([A("HASH#Core.library.UserSpace.equip")], t.prototype, "equip", null), a([A("HASH#Core.library.UserSpace.dispatch")], t.prototype, "dispatch", null), a([A("HASH#Core.library.UserSpace.populate")], t.prototype, "populate", null), a([A("HASH#Core.library.UserSpace.load")], t.prototype, "load", null), t
        }(),
        Y = new Map([
            ["_config/events/activate", function(t) {
                var e = t.customEvent,
                    n = t.account;
                return u(void 0, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(r) {
                        return (t = null != n.store.get(q) ? n.store.get(q) : new Set).add(e.detail.name), n.store.set(q, t), [2, o.completed]
                    }))
                }))
            }],
            ["_config/events/deactivate", function(t) {
                var e = t.customEvent,
                    n = t.account;
                return u(void 0, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(r) {
                        return (t = null != n.store.get(M) ? n.store.get(M) : new Set).add(e.detail.name), n.store.set(M, t), [2, o.completed]
                    }))
                }))
            }]
        ]);
    var Z, X, $, tt = {
            debug_events_show: "debug/events/show",
            debug_prepend_add: "debug/prepend/add",
            debug_prepend_clear: "debug/prepend/clear",
            debug_prepend_remove: "debug/prepend/remove",
            debug_store_show: "debug/store/show",
            ad_debugSession_start: "ad/debugSession/start",
            debug_listeners_show: "debug/listeners/show"
        },
        et = new Map([
            [tt.debug_events_show, function(t) {
                var e = t.account;
                return u(void 0, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(n) {
                        return (t = d(d(d(d([], l((null != e.store.get(N) ? e.store.get(N) : []).map((function(t) {
                            return {
                                type: t.type,
                                status: "created",
                                detail: t.detail,
                                timestamp: t.timeStamp
                            }
                        }))), !1), l(e.queue.map((function(t) {
                            return {
                                type: t.type,
                                status: "created",
                                detail: t.detail,
                                timestamp: t.timeStamp
                            }
                        }))), !1), l((null != e.store.get(N) ? e.store.get(N) : []).map((function(t) {
                            return null != t.statusEvents ? t.statusEvents.map((function(e) {
                                return {
                                    type: t.type,
                                    status: e.type,
                                    detail: t.detail,
                                    timestamp: e.timeStamp
                                }
                            })) : []
                        })).flat()), !1), l(e.queue.map((function(t) {
                            return null != t.statusEvents ? t.statusEvents.map((function(e) {
                                return {
                                    type: t.type,
                                    status: e.type,
                                    detail: t.detail,
                                    timestamp: e.timeStamp
                                }
                            })) : []
                        })).flat()), !1).filter((function(t) {
                            return !t.type.startsWith("debug/")
                        }))).sort((function(t, e) {
                            return t.timestamp - e.timestamp
                        })), console.groupCollapsed("⌂ Account ID: ".concat(e.id)), console.table(t), console.groupEnd(), [2, o.completed]
                    }))
                }))
            }],
            [tt.debug_prepend_add, function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t, r, i, a, u, s, l;
                    return c(this, (function(c) {
                        if (void 0 === (null === (s = n.detail) || void 0 === s ? void 0 : s.eventName)) throw new Error("Missing event information");
                        return t = null !== (l = e.read(g, {
                            persist: !0
                        })) && void 0 !== l ? l : "[]", r = JSON.parse(t), i = n.detail, a = i.eventName, u = i.eventDetail, r.unshift({
                            eventName: a,
                            eventDetail: u
                        }), e.write(g, JSON.stringify(r), {
                            persist: !0
                        }), [2, o.completed]
                    }))
                }))
            }],
            [tt.debug_prepend_clear, function(t) {
                var e = t.account;
                return u(void 0, void 0, void 0, (function() {
                    return c(this, (function(t) {
                        return e.delete(g, {
                            persist: !0
                        }), [2, o.completed]
                    }))
                }))
            }],
            [tt.debug_prepend_remove, function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t, r, i, a, u, s;
                    return c(this, (function(c) {
                        if (void 0 === (null === (u = n.detail) || void 0 === u ? void 0 : u.eventName)) throw new Error("Missing event information");
                        return t = null !== (s = e.read(g, {
                            persist: !0
                        })) && void 0 !== s ? s : "[]", r = JSON.parse(t), i = n.detail.eventName, a = r.filter((function(t) {
                            return t.eventName !== i
                        })), e.write(g, JSON.stringify(a), {
                            persist: !0
                        }), [2, o.completed]
                    }))
                }))
            }],
            [tt.debug_store_show, function(t) {
                var e = t.account;
                return u(void 0, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(n) {
                        return t = d([], l(e.store.entries()), !1), console.groupCollapsed("⌂ Account ID: ".concat(e.id)), console.table(t), console.groupEnd(), [2, o.completed]
                    }))
                }))
            }],
            [tt.ad_debugSession_start, function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    return c(this, (function(t) {
                        return function(t) {
                            return t.status !== o.waiting
                        }(n) && (function(t, e) {
                            var n;
                            void 0 !== (null === (n = t.detail) || void 0 === n ? void 0 : n.minutes) && function(t, e) {
                                var n, o = new Date;
                                t.write(f, o.setMinutes(Number(o.getMinutes()) + Number(null === (n = e.detail) || void 0 === n ? void 0 : n.minutes)).toString(), {
                                    persist: !0
                                })
                            }(e, t);
                            ! function(t) {
                                var e;
                                t.globalContext.apstagDEBUG = null !== (e = t.globalContext.apstagDEBUG) && void 0 !== e ? e : {}, t.globalContext.apstagDEBUG.url = function(t) {
                                    var e, n, o, r, i = new URL(null !== (o = null === (n = null === (e = null == t ? void 0 : t.top) || void 0 === e ? void 0 : e.location) || void 0 === n ? void 0 : n.href) && void 0 !== o ? o : null === (r = null == t ? void 0 : t.document) || void 0 === r ? void 0 : r.referrer);
                                    return i.searchParams.set("amzn_debug_mode", "1"), i.toString()
                                }(t.globalContext)
                            }(e)
                        }(n, e), function(t) {
                            return t.queue.filter((function(t) {
                                return t.type === tt.ad_debugSession_start
                            })).length > 1
                        }(e)) ? [2, o.completed] : function(t) {
                            var e = t.read(f, {
                                persist: !0
                            });
                            return void 0 !== e && new Date >= new Date(Number(e))
                        }(e) ? (function(t) {
                            t.delete(f, {
                                    persist: !0
                                }),
                                function(t) {
                                    var e;
                                    null === (e = t.globalContext.apstagDEBUG) || void 0 === e || delete e.url
                                }(t)
                        }(e), [2, o.completed]) : (function(t) {
                            t.record(tt.debug_events_show), t.record(tt.debug_store_show)
                        }(e), [2, o.waiting])
                    }))
                }))
            }],
            [tt.debug_listeners_show, function(t) {
                return t.account, u(void 0, void 0, void 0, (function() {
                    var t, e, n;
                    return c(this, (function(r) {
                        return t = new R, e = t.store.get(O), n = d([], l(e.entries()), !1), console.groupCollapsed("⌂ Listeners"), console.table(n), console.groupEnd(), [2, o.completed]
                    }))
                }))
            }]
        ]),
        nt = new Map([
            ["ad/record/delete", function(t) {
                var e = t.account;
                return t.customEvent, u(void 0, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return void 0 === (null === (t = e.globalContext.apstag) || void 0 === t ? void 0 : t.dpa) ? [2, o.waiting] : [4, new Promise((function(t, n) {
                                    var o;
                                    try {
                                        null === (o = e.globalContext.apstag) || void 0 === o || o.dpa((function() {
                                            return t()
                                        }))
                                    } catch (t) {
                                        n(new Error("apstag.dpa error: ".concat(t)))
                                    }
                                }))];
                            case 1:
                                return n.sent(), [2, o.completed]
                        }
                    }))
                }))
            }],
            ["ad/record/renew", function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return void 0 === (null === (t = e.globalContext.apstag) || void 0 === t ? void 0 : t.rpa) ? [2, o.waiting] : [4, new Promise((function(t, o) {
                                    var r, i;
                                    if (void 0 === (null === (r = n.detail) || void 0 === r ? void 0 : r.config)) throw new Error("Missing tokenConfig object");
                                    try {
                                        null === (i = e.globalContext.apstag) || void 0 === i || i.rpa(n.detail.config, (function() {
                                            return t()
                                        }), n.detail.setCookie, e.id)
                                    } catch (t) {
                                        o(new Error("apstag.rpa error: ".concat(t)))
                                    }
                                }))];
                            case 1:
                                return r.sent(), [2, o.completed]
                        }
                    }))
                }))
            }],
            ["ad/record/rr", function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t, r;
                    return c(this, (function(a) {
                        if (void 0 === (null === (t = e.globalContext.apstag) || void 0 === t ? void 0 : t.rr)) return [2, o.waiting];
                        if (void 0 === (null === (r = n.detail) || void 0 === r ? void 0 : r.config)) throw new Error("Missing config object");
                        return e.globalContext.apstag.rr(i({
                            accountID: e.id
                        }, n.detail.config)), [2, o.completed]
                    }))
                }))
            }],
            ["ad/record/update", function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return void 0 === (null === (t = e.globalContext.apstag) || void 0 === t ? void 0 : t.upa) ? [2, o.waiting] : [4, new Promise((function(t, o) {
                                    var r, i;
                                    if (void 0 === (null === (r = n.detail) || void 0 === r ? void 0 : r.config)) throw new Error("Missing tokenConfig object");
                                    try {
                                        null === (i = e.globalContext.apstag) || void 0 === i || i.upa(n.detail.config, (function() {
                                            return t()
                                        }), n.detail.setCookie, "api", e.id)
                                    } catch (t) {
                                        o(new Error("apstag.upa error: ".concat(t)))
                                    }
                                }))];
                            case 1:
                                return r.sent(), [2, o.completed]
                        }
                    }))
                }))
            }]
        ]),
        ot = new Map([
            ["_config/config/didLoad", function(t) {
                var e = t.account;
                return t.customEvent, u(void 0, void 0, void 0, (function() {
                    return c(this, (function(t) {
                        return e.write("config/loaded", !0), [2, o.completed]
                    }))
                }))
            }],
            ["_config/requestViewerCountry/define", function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(r) {
                        if (void 0 === (null === (t = n.detail) || void 0 === t ? void 0 : t.code)) throw new Error("Missing country code");
                        return e.write("requestViewerCountry/code", n.detail.code), [2, o.completed]
                    }))
                }))
            }]
        ]);
    ! function(t) {
        t.OpenRTB3_0 = "OpenRTB3_0"
    }(Z || (Z = {})),
    function(t) {
        t.Display = "display", t.Video = "video", t.MultiFormat = "multi-format"
    }(X || (X = {})),
    function(t) {
        t.Googletag = "googletag", t.AppNexus = "appnexus", t.SAS = "sas"
    }($ || ($ = {}));
    var rt = function(t) {
            var e, n = {
                id: t.slotID,
                spec: {
                    placement: {
                        tagid: null !== (e = t.slotName) && void 0 !== e ? e : t.slotID
                    }
                }
            };
            return void 0 !== t.floor && (n.flr = t.floor.value, n.flrcur = t.floor.currency), void 0 !== t.slotParams && (n.spec.placement.ext = t.slotParams), n.spec.placement = i(i({}, n.spec.placement), it(t)), n
        },
        it = function(t) {
            var e = {};
            return t.mediaType === X.MultiFormat ? e = at(t.multiFormatProperties, t.companions) : t.mediaType === X.Video ? (e.video = {}, void 0 !== t.sizes && t.sizes.length > 0 && (e.video = {
                w: t.sizes[0][0],
                h: t.sizes[0][1]
            }), void 0 !== t.companions && t.companions.length > 0 && (e.video.comp = t.companions.map((function(t) {
                return {
                    id: t
                }
            })))) : t.mediaType === X.Display && (e.display = {}, void 0 !== t.sizes && t.sizes.length > 0 && (e.display.displayfmt = t.sizes.map((function(t) {
                return {
                    w: t[0],
                    h: t[1]
                }
            })))), e
        },
        at = function(t, e) {
            var n, o = {};
            if (void 0 !== t && (void 0 !== t.display && (o.display = {
                    displayfmt: void 0 !== t.display.sizes ? t.display.sizes.map((function(t) {
                        return {
                            w: t[0],
                            h: t[1]
                        }
                    })) : void 0
                }), void 0 !== t.video)) {
                var r = null === (n = t.video.sizes) || void 0 === n ? void 0 : n[0];
                o.video = {
                    w: void 0 !== r ? r[0] : void 0,
                    h: void 0 !== r ? r[1] : void 0
                }, void 0 !== e && (o.video.comp = e.map((function(t) {
                    return {
                        id: t
                    }
                })))
            }
            return o
        },
        ut = function(t, e) {
            var n = {};
            return Object.keys(t).forEach((function(o) {
                "object" == typeof t[o] && null !== t[o] && (o === e ? Object.assign(n, t[o]) : Object.assign(n, ut(t[o], e)))
            })), n
        },
        ct = function(t) {
            var e = ut(t, "ext");
            return Object.entries(e).forEach((function(t) {
                var n = l(t, 2),
                    o = n[0],
                    r = n[1];
                "string" != typeof r && (e[o] = JSON.stringify(r))
            })), 0 !== Object.keys(e).length ? e : void 0
        },
        st = function(t) {
            var e, n = lt(t),
                o = {
                    mediaType: n
                };
            return n === X.MultiFormat ? o = i(i({}, o), dt(t)) : n === X.Display ? o.sizes = vt(t.display) : n === X.Video && (o.sizes = pt(t.video), void 0 !== (null === (e = t.video) || void 0 === e ? void 0 : e.comp) && (o.companions = ft(t.video))), o
        },
        lt = function(t) {
            return void 0 !== t.video && void 0 !== t.display ? X.MultiFormat : void 0 !== t.video ? X.Video : X.Display
        },
        dt = function(t) {
            var e = {
                multiFormatProperties: {}
            };
            return void 0 !== t.video && (e.multiFormatProperties.video = {
                sizes: pt(t.video)
            }, void 0 !== t.video.comp && (e.companions = ft(t.video))), void 0 !== t.display && (e.multiFormatProperties.display = {
                sizes: vt(t.display)
            }), e
        },
        vt = function(t) {
            var e = [];
            return void 0 !== t && (void 0 !== t.displayfmt && t.displayfmt.length > 0 && (e = d(d([], l(e), !1), l(t.displayfmt.map((function(t) {
                return [t.w, t.h]
            }))), !1)), void 0 !== t.h && void 0 !== t.w && (e = d(d([], l(e), !1), [
                [t.w, t.h]
            ], !1))), e
        },
        pt = function(t) {
            var e = [];
            return void 0 !== t && void 0 !== t.h && void 0 !== t.w && (e = d(d([], l(e), !1), [
                [t.w, t.h]
            ], !1)), e
        },
        ft = function(t) {
            var e;
            return void 0 !== (null == t ? void 0 : t.comp) && t.comp.length > 0 && (e = t.comp.map((function(t) {
                return t.id
            }))), e
        },
        gt = function() {
            function t() {
                this._isInitialized = !1
            }
            return Object.defineProperty(t, "Instance", {
                get: function() {
                    return this._instance
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.resetInstance = function() {
                this._pubID = void 0, this._isInitialized = !1
            }, t.prototype.updateConfig = function(t) {
                var e, n;
                void 0 === t && (t = {});
                var o = null === (n = null === (e = window.apstag._storeManager) || void 0 === e ? void 0 : e.config) || void 0 === n ? void 0 : n.getConfig();
                if ("" !== (null == o ? void 0 : o.pubID) && void 0 !== (null == o ? void 0 : o.pubID) && (this._pubID = o.pubID, this._isInitialized = !0), void 0 === this._pubID && (this._pubID = t.pubID), void 0 === this._pubID) throw new Error("pubID is required.");
                if (0 !== Object.keys(t).length) {
                    var r = i(i(i({}, o), t), {
                        pubID: this._pubID,
                        deals: !0,
                        disableConfigCall: !0
                    });
                    this._isInitialized ? window.apstag._updateConfig(r) : (window.apstag.init(r), this._isInitialized = !0)
                }
            }, t.prototype.setDisplayBids = function(t, e) {
                window.apstag.setDisplayBids(t, e)
            }, t._instance = new t, t
        }(),
        ht = gt.Instance,
        mt = "ad/targeting",
        yt = "ad/attachTargeting",
        bt = "ad/schain",
        wt = "ad/context",
        _t = "ad/googletagSlotAutoImport",
        Et = new Map([
            [yt, function(t) {
                return function(e) {
                    var n = e.adServer,
                        o = e.itemIds;
                    if (!Object.values($).includes(n)) throw new Error("adServer: ".concat(n, " isn't currently supported"));
                    ht.updateConfig({
                        pubID: t,
                        adServer: n
                    }), ht.setDisplayBids(o)
                }
            }],
            [mt, function() {
                var t = new Map;
                return t.get = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n = Map.prototype.get.apply(this, t);
                    return Map.prototype.delete.apply(this, t), n
                }, t
            }],
            [bt, function() {}],
            [wt, function() {}],
            [_t, function() {}]
        ]),
        xt = {
            key: "ad/slots",
            default: new Map
        };

    function Ct(t) {
        var e = t.account,
            n = t.selectedSlots,
            o = t.publisherParams,
            r = t.timeout,
            a = t._endpointDomain,
            s = t.initConfig;
        return u(this, void 0, void 0, (function() {
            var t;
            return c(this, (function(u) {
                switch (u.label) {
                    case 0:
                        return t = function(t) {
                            return t.map((function(t) {
                                return function(t) {
                                    if (void 0 !== t.version && t.version !== Z.OpenRTB3_0) throw new Error("Invalid OpenRTB version specified");
                                    var e = t.spec.placement,
                                        n = i({
                                            slotID: t.id,
                                            slotName: e.tagid
                                        }, st(e)),
                                        o = ct(t);
                                    if (void 0 !== o && (n.slotParams = o), void 0 !== t.flr) {
                                        if (void 0 !== t.flrcur && "USD" !== t.flrcur) throw new Error('item.flrcur: only "USD" is currently supported');
                                        n.floor = {
                                            value: t.flr,
                                            currency: "USD"
                                        }
                                    }
                                    return n
                                }(t)
                            }))
                        }(n), [4, St({
                            account: e,
                            legacySlots: t,
                            publisherParams: o,
                            timeout: r,
                            _endpointDomain: a,
                            initConfig: s
                        })];
                    case 1:
                        return [2, u.sent()]
                }
            }))
        }))
    }

    function St(t) {
        var e = t.account,
            n = t.legacySlots,
            o = t.publisherParams,
            r = t.timeout,
            i = t._endpointDomain,
            a = t.initConfig;
        return u(this, void 0, void 0, (function() {
            return c(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return [4, new Promise((function(t) {
                            if (void 0 === e.globalContext.apstag) throw new Error("apstag undefined in global scope");
                            e.globalContext.apstag.fetchBids({
                                slots: n,
                                params: o,
                                timeout: null != r ? r : 6e4,
                                _endpointDomain: i
                            }, (function(e) {
                                t(e)
                            }), {
                                initConfig: a
                            })
                        }))];
                    case 1:
                        return [2, t.sent()]
                }
            }))
        }))
    }
    var It, Pt, Dt = function(t, e, n, o) {
            var r, i, a, u = n.globalContext.document.createElement("iframe"),
                c = null === (r = e.get("amznsz")) || void 0 === r ? void 0 : r.split("x"),
                s = e.get("amzniid"),
                l = t;
            if (!(void 0 === s || void 0 === l || void 0 === c || c.length < 2)) {
                u.style.marginLeft = "0", u.style.marginTop = "0", u.style.height = "".concat(c[1], "px"), u.style.width = "100%", u.setAttribute("scrolling", "no"), u.setAttribute("frameborder", "0");
                var d = n.globalContext.document.createElement("div"),
                    v = null !== (i = null == o ? void 0 : o.location) && void 0 !== i ? i : "afterend",
                    p = n.globalContext.document.getElementById(l);
                if (null != p) {
                    p.insertAdjacentElement(v, d), d.appendChild(u);
                    var f = null === (a = null == u ? void 0 : u.contentWindow) || void 0 === a ? void 0 : a.document;
                    void 0 !== f && (f.open(), f.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><style>html{height:100%}body{height:100%;margin:0;overflow:hidden}</style></head><body><script>window.parent.apstag.renderImp(document, "' + s + '", {"inheritSize": true});<\/script></body></html>'), f.close())
                }
            }
        },
        Rt = "ad/ASRSlot/render",
        At = new Map([
            [Rt, function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t, r;
                    return c(this, (function(i) {
                        if (void 0 === (null === (t = n.detail) || void 0 === t ? void 0 : t.id) || void 0 === (null === (r = n.detail) || void 0 === r ? void 0 : r.targeting)) throw new Error("Missing event detail");
                        return Dt(n.detail.id, n.detail.targeting, e), [2, o.completed]
                    }))
                }))
            }]
        ]);
    ! function(t) {
        t.equinoxWidget = "amazon:93b7dd52-a8ce-11ed-afa1-0242ac120002"
    }(It || (It = {})),
    function(t) {
        t.equinoxWidget = "aax-us-east.amazon-adsystem.com"
    }(Pt || (Pt = {}));

    function Ot(t, e) {
        return u(this, void 0, void 0, (function() {
            var n, o;
            return c(this, (function(r) {
                switch (r.label) {
                    case 0:
                        return function(t) {
                            t.forEach((function(t) {
                                if (void 0 === t.deal) return t;
                                t.deal.some((function(t) {
                                    return t.id === It.equinoxWidget
                                })) && function(t) {
                                    void 0 !== t.spec.placement.display && (t.spec.placement.display.displayfmt = [{
                                        w: 999,
                                        h: 999
                                    }])
                                }(t)
                            }))
                        }(t), [4, Mt(t, e)];
                    case 1:
                        return r.sent(), n = function(t) {
                            var e = {};
                            return t.forEach((function(t) {
                                var n = function(t) {
                                    var e, n, o, r, a, u = {},
                                        c = "93b7dd52-a8ce-11ed-afa1-0242ac120002";
                                    return void 0 !== (null === (e = t.deal) || void 0 === e ? void 0 : e.find((function(t) {
                                        return t.id === "amazon:".concat(c)
                                    }))) && (u = i(i({}, u), {
                                        program: "apscustom"
                                    })), i(i({}, u), null !== (a = null === (r = null === (o = null === (n = t.spec.placement.display) || void 0 === n ? void 0 : n.ext) || void 0 === o ? void 0 : o.amazon) || void 0 === r ? void 0 : r[c]) && void 0 !== a ? a : {})
                                }(t);
                                e = i(i({}, e), n)
                            })), e
                        }(t), [4, qt(t, n, e)];
                    case 2:
                        return r.sent(), o = e.read(mt), [4, jt(t, o, e)];
                    case 3:
                        return r.sent(), [2]
                }
            }))
        }))
    }

    function Nt(t) {
        return t.some((function(t) {
            return function(t) {
                var e;
                return !0 === (null === (e = t.deal) || void 0 === e ? void 0 : e.some((function(t) {
                    return t.id === It.equinoxWidget
                })))
            }(t)
        }))
    }

    function qt(t, e, n) {
        return u(this, void 0, void 0, (function() {
            var o;
            return c(this, (function(r) {
                switch (r.label) {
                    case 0:
                        return o = {
                            itemIds: t.map((function(t) {
                                return t.id
                            })),
                            publisherParams: e
                        }, Nt(t) && (o._endpointDomain = Pt.equinoxWidget), [4, n.record(Ut.ad_targeting_fetch, o)];
                    case 1:
                        return r.sent(), [2]
                }
            }))
        }))
    }

    function Mt(t, e) {
        return u(this, void 0, void 0, (function() {
            return c(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return [4, e.record(Ut.ad_slot_define, {
                            item: t
                        })];
                    case 1:
                        return n.sent(), [2]
                }
            }))
        }))
    }

    function jt(t, e, n) {
        return u(this, void 0, void 0, (function() {
            var o, r, i, a, u, l, d;
            return c(this, (function(c) {
                switch (c.label) {
                    case 0:
                        c.trys.push([0, 5, 6, 7]), o = s(t), r = o.next(), c.label = 1;
                    case 1:
                        return r.done ? [3, 4] : (i = r.value, void 0 === (a = e.get(i.id)) ? [3, 3] : [4, Lt(i, a, n)]);
                    case 2:
                        c.sent(), c.label = 3;
                    case 3:
                        return r = o.next(), [3, 1];
                    case 4:
                        return [3, 7];
                    case 5:
                        return u = c.sent(), l = {
                            error: u
                        }, [3, 7];
                    case 6:
                        try {
                            r && !r.done && (d = o.return) && d.call(o)
                        } finally {
                            if (l) throw l.error
                        }
                        return [7];
                    case 7:
                        return [2]
                }
            }))
        }))
    }

    function Lt(t, e, n) {
        var o;
        return u(this, void 0, void 0, (function() {
            return c(this, (function(r) {
                switch (r.label) {
                    case 0:
                        return !0 !== (null === (o = t.deal) || void 0 === o ? void 0 : o.some((function(t) {
                            return t.id === It.equinoxWidget
                        }))) ? [3, 2] : [4, n.record(Rt, {
                            id: t.id,
                            targeting: e
                        })];
                    case 1:
                        return r.sent(), [3, 3];
                    case 2:
                        throw new Error("Not implemented: The ad/slot/render event can only be used with specific deal IDs currently");
                    case 3:
                        return [2]
                }
            }))
        }))
    }
    var Tt, Ut = {
            ad_schain_define: "ad/schain/define",
            ad_slot_define: "ad/slot/define",
            ad_slot_import: "ad/slot/import",
            ad_slot_render: "ad/slot/render",
            ad_targeting_fetch: "ad/targeting/fetch",
            ad_targeting_attach: "ad/targeting/attach",
            ad_signals_define: "ad/signals/define"
        },
        zt = new Map([
            [Ut.ad_slot_define, function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t, r, i, a, u, s;
                    return c(this, (function(c) {
                        if (0 === (t = d(d([], l(null !== (i = null === (r = n.detail) || void 0 === r ? void 0 : r.item) && void 0 !== i ? i : []), !1), l(null !== (s = null === (u = null === (a = n.detail) || void 0 === a ? void 0 : a.slots) || void 0 === u ? void 0 : u.map(rt)) && void 0 !== s ? s : []), !1)).length) throw new Error("Expecting a non-empty array for 'item' (OpenRTB) or 'slots' (legacy)");
                        return t.forEach((function(t) {
                            e.update(xt, (function(e) {
                                return e.set(t.id, t)
                            }))
                        })), [2, o.completed]
                    }))
                }))
            }],
            [Ut.ad_targeting_fetch, function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t, r, i, a, u, d, v, p;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return void 0 === e.globalContext.apstag ? [2, o.waiting] : (function(t) {
                                    (function(t) {
                                        if (function(t) {
                                                var e, n;
                                                try {
                                                    for (var r = s(t.queue), i = r.next(); !i.done; i = r.next()) {
                                                        var a = i.value;
                                                        if (a.type === tt.ad_debugSession_start && a.status === o.waiting) return !0
                                                    }
                                                } catch (t) {
                                                    e = {
                                                        error: t
                                                    }
                                                } finally {
                                                    try {
                                                        i && !i.done && (n = r.return) && n.call(r)
                                                    } finally {
                                                        if (e) throw e.error
                                                    }
                                                }
                                                return !1
                                            }(t)) return !1;
                                        var e = t.read(f, {
                                            persist: !0
                                        });
                                        if (void 0 !== e) return !0;
                                        return !1
                                    })(t) && t.record(tt.ad_debugSession_start)
                                }(e), t = function(t) {
                                    return Array.from(t.use(xt).values())
                                }(e), r = function(t, e) {
                                    var n = t;
                                    void 0 !== e && e.length > 0 && (n = t.filter((function(t) {
                                        return e.includes(t.id)
                                    })));
                                    return n
                                }(t, null === (u = n.detail) || void 0 === u ? void 0 : u.itemIds), i = null === (d = n.detail) || void 0 === d ? void 0 : d.publisherParams, [4, Ct({
                                    account: e,
                                    selectedSlots: r,
                                    publisherParams: i,
                                    timeout: null === (v = n.detail) || void 0 === v ? void 0 : v.timeout,
                                    _endpointDomain: null === (p = n.detail) || void 0 === p ? void 0 : p._endpointDomain,
                                    initConfig: {
                                        pubID: e.id,
                                        isSelfServePub: 36 === e.id.length,
                                        deals: !0
                                    }
                                })]);
                            case 1:
                                return a = c.sent(),
                                    function(t, e) {
                                        var n = function(t) {
                                            return t.read(mt, {
                                                default: {
                                                    generators: Et,
                                                    args: []
                                                }
                                            })
                                        }(t);
                                        (function(t, e) {
                                            e.forEach((function(e) {
                                                t.set(e.slotID, new Map)
                                            }))
                                        })(n, e),
                                        function(t, e) {
                                            e.forEach((function(e) {
                                                Object.entries(e.targeting).forEach((function(n) {
                                                    var o = l(n, 2),
                                                        r = o[0],
                                                        i = o[1];
                                                    Map.prototype.get.apply(t, [e.slotID]).set(r, i)
                                                }))
                                            }))
                                        }(n, e),
                                        function(t, e) {
                                            t.store.set(mt, e)
                                        }(t, n)
                                    }(e, a),
                                    function(t, e) {
                                        var n;
                                        t.store.set(yt, null === (n = Et.get(yt)) || void 0 === n ? void 0 : n(e))
                                    }(e, e.id), [2, o.completed]
                        }
                    }))
                }))
            }],
            [Ut.ad_targeting_attach, function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t, r, i, a, u;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return t = null !== (i = null === (r = n.detail) || void 0 === r ? void 0 : r.adServer) && void 0 !== i ? i : $.Googletag, ht.updateConfig({
                                    pubID: e.id,
                                    adServer: t
                                }), [4, e.record("ad/targeting/fetch", {
                                    itemIds: null === (a = n.detail) || void 0 === a ? void 0 : a.itemIds
                                })];
                            case 1:
                                return c.sent(), ht.setDisplayBids(null === (u = n.detail) || void 0 === u ? void 0 : u.itemIds), [2, o.completed]
                        }
                    }))
                }))
            }],
            [Ut.ad_slot_import, function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(r) {
                        if (void 0 === (null === (t = n.detail) || void 0 === t ? void 0 : t.adServer)) throw new Error("adServer: a valid value must be provided");
                        if (n.detail.adServer === $.Googletag) return e.write(_t, !0), [2, o.completed];
                        throw new Error("adServer: value provided isn't currently supported")
                    }))
                }))
            }],
            [Ut.ad_schain_define, function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(r) {
                        if (void 0 === (null === (t = n.detail) || void 0 === t ? void 0 : t.schain)) throw new Error("Missing schain object");
                        return e.write(bt, n.detail.schain), [2, o.completed]
                    }))
                }))
            }],
            [Ut.ad_signals_define, function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    return c(this, (function(t) {
                        if (void 0 === n.detail || !("context" in n.detail)) throw new Error("Missing detail object");
                        return e.write(wt, n.detail.context), [2, o.completed]
                    }))
                }))
            }],
            [Ut.ad_slot_render, function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t, r;
                    return c(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return void 0 === (t = null === (r = n.detail) || void 0 === r ? void 0 : r.item) ? [3, 2] : [4, Ot(t, e)];
                            case 1:
                                return i.sent(), [2, o.completed];
                            case 2:
                                throw new Error('Not implemented: The ad/slot/render event can only be used with the "item" attribute currently')
                        }
                    }))
                }))
            }]
        ]);
    ! function(t) {
        t.equinoxWidget = "amazon:93b7dd52-a8ce-11ed-afa1-0242ac120002"
    }(Tt || (Tt = {}));
    var kt = new Map([
        ["ad/container/didInitialize", function(t) {
            var e = t.account,
                n = t.customEvent;
            return u(void 0, void 0, void 0, (function() {
                var t, r, i, a, u;
                return c(this, (function(c) {
                    switch (c.label) {
                        case 0:
                            return t = null === (a = n.detail) || void 0 === a ? void 0 : a.id, r = null === (u = n.detail) || void 0 === u ? void 0 : u.labels, void 0 !== t && void 0 !== r && r.includes(Tt.equinoxWidget) ? (i = [{
                                id: t,
                                spec: {
                                    placement: {
                                        display: {}
                                    }
                                },
                                deal: [{
                                    id: Tt.equinoxWidget
                                }]
                            }], [4, e.record(Ut.ad_slot_render, {
                                item: i
                            })]) : [3, 2];
                        case 1:
                            c.sent(), c.label = 2;
                        case 2:
                            return [2, o.completed]
                    }
                }))
            }))
        }]
    ]);
    var Ft = {
            widget_toolbox_end: "widget/toolbox/end",
            widget_toolbox_open: "widget/toolbox/open",
            widget_toolbox_start: "widget/toolbox/start"
        },
        Bt = new Map([
            [Ft.widget_toolbox_end, function(t) {
                var e = t.account;
                return u(void 0, void 0, void 0, (function() {
                    return c(this, (function(t) {
                        return e.record(tt.debug_prepend_remove, {
                            eventName: Ft.widget_toolbox_start
                        }), [2, o.completed]
                    }))
                }))
            }],
            [Ft.widget_toolbox_open, function(t) {
                var e = t.account;
                return t.customEvent, u(void 0, void 0, void 0, (function() {
                    return c(this, (function(t) {
                        return function(t, e) {
                            var n = e.globalContext.document.createElement("script");
                            n.src = t, n.async = !0, e.globalContext.document.head.appendChild(n)
                        }("https://c.toolbox.aps.amazon-adsystem.com/toolbox.js", e), [2, o.completed]
                    }))
                }))
            }],
            [Ft.widget_toolbox_start, function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    return c(this, (function(t) {
                        return e.record(tt.debug_prepend_add, {
                            eventName: n.type
                        }), e.record(Ft.widget_toolbox_open), [2, o.completed]
                    }))
                }))
            }]
        ]),
        Ht = "consent/GPPData",
        Qt = "consent/isGPPListenerRegistered",
        Gt = {
            consent_gppapi_attemptSync: "consent/gppapi/attemptSync",
            consent_gppapi_didChange: "consent/gppapi/didChange",
            consent_gppapi_syncData: "consent/gppapi/syncData"
        },
        Jt = new Map([
            [Gt.consent_gppapi_attemptSync, function(t) {
                var e = t.account;
                return u(void 0, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return void 0 === e.globalContext.__gpp || !0 === e.read(Qt) ? [2, o.cancelled] : [4, e.record(Gt.consent_gppapi_syncData)];
                            case 1:
                                return n.sent(), t = e.globalContext.__gpp("addEventListener", (function(t) {
                                    "error" !== (null == t ? void 0 : t.eventName) && e.record(Gt.consent_gppapi_didChange, {
                                        eventListener: t
                                    })
                                })), e.write(Qt, "listenerRegistered" === (null == t ? void 0 : t.eventName) && !0 === (null == t ? void 0 : t.data)), [2, o.completed]
                        }
                    }))
                }))
            }],
            [Gt.consent_gppapi_didChange, function(t) {
                var e = t.account;
                return t.customEvent, u(void 0, void 0, void 0, (function() {
                    return c(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, e.record(Gt.consent_gppapi_syncData)];
                            case 1:
                                return t.sent(), [2, o.completed]
                        }
                    }))
                }))
            }],
            [Gt.consent_gppapi_syncData, function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t, r, a, u, s, d;
                    return c(this, (function(c) {
                        return u = l(function(t) {
                            var e, n;
                            try {
                                var o = t.globalContext.__gpp("getGPPData");
                                e = i(i({}, o), o.pingData)
                            } catch (t) {
                                n = "E:getGPPData: ".concat(t)
                            }
                            return [e, n]
                        }(e), 2), t = u[0], r = u[1], "object" != typeof t && (s = l(function(t) {
                            var e, n, o;
                            try {
                                var r = t.globalContext.__gpp("ping", (function(t, e) {
                                    e && "object" == typeof t && (n = t)
                                }));
                                void 0 === n && (null !== (e = null == r ? void 0 : r.gppString) && void 0 !== e ? e : "").length > 0 && (n = r)
                            } catch (t) {
                                o = "E:ping: ".concat(t)
                            }
                            return [n, o]
                        }(e), 2), t = s[0], a = s[1]), n.analytics = {
                            gpp: {
                                gppLength: "string" == typeof(null == t ? void 0 : t.gppString) ? t.gppString.length : void 0,
                                isGPPTilde: (null !== (d = null == t ? void 0 : t.gppString) && void 0 !== d ? d : "").includes("~"),
                                error10: r,
                                error: a,
                                gppVersion: null == t ? void 0 : t.gppVersion,
                                cmpId: null == t ? void 0 : t.cmpId
                            }
                        }, e.write(Ht, t), [2, o.completed]
                    }))
                }))
            }]
        ]),
        Wt = new Map([
            ["log/library/didUseFeature", function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t, r, a;
                    return c(this, (function(u) {
                        if (void 0 === (null === (a = n.detail) || void 0 === a ? void 0 : a.log)) throw new Error("Missing log object");
                        return t = n.detail.log, r = i({}, t), "object" == typeof t.analytics && (r.eventProperties = t.analytics), C.logFeature(i({
                            accountID: e.id,
                            loggers: "apstag" === n.detail.source ? [v.Tahoe] : void 0
                        }, r)), n.isLogDisabled = !0, [2, o.completed]
                    }))
                }))
            }],
            ["log/library/didError", function(t) {
                var e = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(r) {
                        if (void 0 === (null === (t = e.detail) || void 0 === t ? void 0 : t.log)) throw new Error("Missing log object");
                        return C.logError(i({
                            loggers: e.detail.source === n.apstag ? [v.Tahoe] : void 0
                        }, e.detail.log)), e.isLogDisabled = !0, [2, o.completed]
                    }))
                }))
            }],
            ["log/analytics/setSampling", function(t) {
                t.account;
                var e = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(n) {
                        if ("number" != typeof(null === (t = e.detail) || void 0 === t ? void 0 : t.ratio)) throw new Error("Invalid 'ratio' param passed");
                        return C.setTahoeRatio(e.detail.ratio), [2, o.completed]
                    }))
                }))
            }],
            ["log/analytics/setInterval", function(t) {
                t.account;
                var e = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(n) {
                        if ("number" != typeof(null === (t = e.detail) || void 0 === t ? void 0 : t.interval)) throw new Error("Invalid 'interval' param passed");
                        return C.setTahoeQueueInterval(e.detail.interval), [2, o.completed]
                    }))
                }))
            }]
        ]),
        Vt = new Map([
            ["apstag/configuration/fetch", function(t) {
                var e = t.account;
                return t.customEvent, u(void 0, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return (t = e.globalContext.document.createElement("script")).setAttribute("src", "".concat("https://config.aps.amazon-adsystem.com/configs/").concat(e.id)), t.setAttribute("type", "text/javascript"), t.setAttribute("async", "async"), e.globalContext.document.body.appendChild(t), [4, new Promise((function(e, n) {
                                    t.addEventListener("load", (function() {
                                        e()
                                    })), t.addEventListener("error", (function(t) {
                                        n(t)
                                    }))
                                }))];
                            case 1:
                                return n.sent(), [2, o.completed]
                        }
                    }))
                }))
            }]
        ]);

    function Kt(t) {
        return u(this, void 0, void 0, (function() {
            var e, n, o, r, i;
            return c(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 3, , 4]), [4, crypto.subtle.importKey("jwk", {
                            alg: "A128CTR",
                            ext: !0,
                            k: "ERTYQsuodPO_Um-5jFmOLg",
                            key_ops: ["encrypt"],
                            kty: "oct"
                        }, "AES-CTR", !0, ["encrypt"])];
                    case 1:
                        return e = a.sent(), n = (new TextEncoder).encode(t), r = Uint8Array.bind, [4, crypto.subtle.encrypt({
                            name: "AES-CTR",
                            counter: new Uint8Array(16),
                            length: 128
                        }, e, n)];
                    case 2:
                        return o = new(r.apply(Uint8Array, [void 0, a.sent()])), [2, btoa(String.fromCharCode.apply(String, d([], l(o), !1)))];
                    case 3:
                        return i = a.sent(), C.logError({
                            errorCategory: "SecureSignals-encryptSignal",
                            error: i
                        }), [2, null];
                    case 4:
                        return [2]
                }
            }))
        }))
    }
    var Yt = {
            google_secureSignals_set: "google/secureSignals/set",
            google_secureSignals_initialize: "google/secureSignals/initialize"
        },
        Zt = new Map([
            [Yt.google_secureSignals_set, function(t) {
                var e = t.account;
                return t.customEvent, u(void 0, void 0, void 0, (function() {
                    return c(this, (function(t) {
                        return void 0 === e.globalContext.googletag && (e.globalContext.googletag = {}), void 0 === e.globalContext.googletag.secureSignalProviders && (e.globalContext.googletag.secureSignalProviders = []), e.globalContext.googletag.secureSignalProviders.push({
                            networkCode: "amazon.com",
                            collectorFunction: function() {
                                return u(void 0, void 0, void 0, (function() {
                                    return c(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, e.record(Yt.google_secureSignals_initialize)];
                                            case 1:
                                                return [2, t.sent()]
                                        }
                                    }))
                                }))
                            }
                        }), [2, o.completed]
                    }))
                }))
            }],
            [Yt.google_secureSignals_initialize, function(t) {
                var e = t.account;
                return t.customEvent, u(void 0, void 0, void 0, (function() {
                    var t, n, r, i, a, u, s;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return void 0 === (t = null === (u = e.globalContext.apstag) || void 0 === u ? void 0 : u._getSlotIdToNameMapping) ? [2, {
                                    status: o.waiting
                                }] : (n = t(), 0 === Object.keys(n).length ? [2, {
                                    status: o.waiting
                                }] : (void 0 === (r = null === (s = e.globalContext.location) || void 0 === s ? void 0 : s.href) && (C.logError({
                                    errorCategory: "SecureSignals-googleSignalCollector",
                                    error: "window.location.href null"
                                }), r = ""), i = "".concat(r, ";").concat(JSON.stringify(n)).substr(0, 225), a = {
                                    status: o.completed
                                }, [4, Kt(i)]));
                            case 1:
                                return [2, (a.value = c.sent(), a)]
                        }
                    }))
                }))
            }]
        ]),
        Xt = {
            key: "customPlacement/configuration",
            default: void 0
        },
        $t = {
            key: "customPlacement/contextURL",
            default: void 0
        },
        te = {
            key: "customPlacement/configurationEndpoint",
            default: "https://aax.amazon-adsystem.com/e/placements"
        };

    function ee(t) {
        var e = t.read(wt);
        return void 0 !== e && "user" in e ? (e.user, function(t, e) {
            var n = {};
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (o = Object.getOwnPropertySymbols(t); r < o.length; r++) e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (n[o[r]] = t[o[r]])
            }
            return n
        }(e, ["user"])) : e
    }

    function ne(t, e) {
        try {
            var n = null != e ? e : function(t) {
                var e, n;
                try {
                    if (void 0 !== (null === (e = t.globalContext.top) || void 0 === e ? void 0 : e.location.href)) return null === (n = t.globalContext.top) || void 0 === n ? void 0 : n.location.href
                } catch (t) {}
                try {
                    if (t.globalContext.top !== t.globalContext.self) return t.globalContext.document.referrer
                } catch (t) {}
                return
            }(t);
            if (void 0 !== n) return encodeURIComponent(n)
        } catch (t) {}
        return ""
    }

    function oe(t) {
        return u(this, void 0, void 0, (function() {
            var e, n, o, r, i;
            return c(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return e = {
                            ortb2: ee(t)
                        }, n = t.use($t), o = t.use(te), r = ne(t, n), i = encodeURIComponent(JSON.stringify(e)), [4, fetch("".concat(o, "?account=").concat(t.id, "&u=").concat(r, "&sg=").concat(i))];
                    case 1:
                        return [4, a.sent().json()];
                    case 2:
                        return [2, a.sent()]
                }
            }))
        }))
    }
    var re = {
            key: "customPlacement/defaultLocationHints",
            default: new Set
        },
        ie = {
            key: "customPlacement/secondaryLocationHints",
            default: new Set
        },
        ae = {
            key: "customPlacement/requestedGAMSlots",
            default: new Set
        };

    function ue(t) {
        return u(this, void 0, void 0, (function() {
            var e, n, o;
            return c(this, (function(r) {
                switch (r.label) {
                    case 0:
                        return 6e4, e = {
                            slots: [{
                                slotID: "93b7dd52-a8ce-11ed-afa1-0242ac120002:1",
                                sizes: [
                                    [999, 999]
                                ]
                            }],
                            timeout: 6e4,
                            _endpointDomain: "aax-us-east.amazon-adsystem.com",
                            params: {
                                program: "apscustom"
                            }
                        }, n = {
                            pubID: t.id,
                            isSelfServePub: 36 === t.id.length,
                            deals: !0
                        }, o = t.use($t), [4, new Promise((function(r) {
                            var i;
                            null === (i = t.globalContext.apstag) || void 0 === i || i.fetchBids(e, (function(t) {
                                r(t)
                            }), {
                                initConfig: n,
                                contextURL: o
                            })
                        }))];
                    case 1:
                        return [2, r.sent()]
                }
            }))
        }))
    }
    var ce = {
            customPlacement_configuration_fetch: "customPlacement/configuration/fetch",
            customPlacement_placement_enable: "customPlacement/placement/enable",
            customPlacement_hint_define: "customPlacement/hint/define",
            customPlacement_targeting_attach: "customPlacement/targeting/attach",
            customPlacement_bids_fetch: "customPlacement/bids/fetch"
        },
        se = new Map([
            [ce.customPlacement_configuration_fetch, function(t) {
                var e = t.account;
                return u(void 0, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return function(t) {
                                    var e = t.use(Xt);
                                    if (void 0 !== e) return !0;
                                    return !1
                                }(e) ? [2, o.cancelled] : [4, oe(e)];
                            case 1:
                                return t = n.sent(), e.update(Xt, (function() {
                                    return t
                                })), [4, e.record(ce.customPlacement_targeting_attach)];
                            case 2:
                                return n.sent(), [2, o.completed]
                        }
                    }))
                }))
            }],
            [ce.customPlacement_placement_enable, function(t) {
                var e = t.account;
                return u(void 0, void 0, void 0, (function() {
                    var t, n;
                    return c(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return function(t) {
                                    var e, n;
                                    null === (n = null === (e = t.globalContext.googletag) || void 0 === e ? void 0 : e.cmd) || void 0 === n || n.push((function() {
                                        var e, n;
                                        null === (n = null === (e = t.globalContext.googletag) || void 0 === e ? void 0 : e.pubads()) || void 0 === n || n.addEventListener("slotRequested", (function(e) {
                                            t.update(ae, (function(t) {
                                                return t.add(e.slot.getSlotElementId())
                                            }))
                                        }))
                                    }))
                                }(e), e.record(ce.customPlacement_configuration_fetch), [4, e.record(ce.customPlacement_bids_fetch)];
                            case 1:
                                if (t = r.sent(), n = function(t, e) {
                                        var n = t.use(ae);
                                        return e.filter((function(t) {
                                            return !n.has(t.slotID)
                                        }))
                                    }(e, t), 0 === n.length) throw new Error("No custom placement bids arrived in time");
                                return [4, e.record(ce.customPlacement_targeting_attach)];
                            case 2:
                                return r.sent(),
                                    function(t, e) {
                                        var n = function(t) {
                                                var e = t.use(re),
                                                    n = t.use(ie),
                                                    o = d(d([], l(e), !1), l(n), !1);
                                                if (0 === o.length) throw new Error("No configured hints");
                                                return o[0]
                                            }(t),
                                            o = t.globalContext.document.getElementById(n);
                                        if (null == o) throw new Error('Hint location "'.concat(n, '" not found'));
                                        e.every((function(e) {
                                            var n, r = null === (n = e.targeting) || void 0 === n ? void 0 : n.amzniid;
                                            return !(void 0 !== r && r.length > 0) || (function(t, e, n) {
                                                var o, r = t.globalContext.document.createElement("iframe"),
                                                    i = e.size.split("x");
                                                Object.assign(r.style, {
                                                    marginLeft: "0",
                                                    marginTop: "0",
                                                    height: "".concat(i[1], "px"),
                                                    width: "100%"
                                                }), r.setAttribute("scrolling", "no"), r.setAttribute("frameborder", "0"), n.appendChild(r);
                                                var a = null === (o = r.contentWindow) || void 0 === o ? void 0 : o.document;
                                                void 0 !== a && (a.open(), a.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><style>html{height:100%}body{height:100%;margin:0;overflow:hidden}</style></head><body><script>window.parent.apstag.renderImp(document, "' + e.targeting.amzniid + '", {"inheritSize": true});<\/script></body></html>'), a.close())
                                            }(t, e, o), !1)
                                        }))
                                    }(e, n), [2, o.completed]
                        }
                    }))
                }))
            }],
            [ce.customPlacement_hint_define, function(t) {
                var e = t.account,
                    n = t.customEvent;
                return u(void 0, void 0, void 0, (function() {
                    var t, r, i, a, u;
                    return c(this, (function(c) {
                        if (void 0 === (null === (u = n.detail) || void 0 === u ? void 0 : u.id)) throw new Error("Hint `id` must be defined");
                        return t = n.detail, r = t.id, i = t.isDefault, a = re, !0 !== i && (a = ie), e.update(a, (function(t) {
                            return t.add(r)
                        })), [2, o.completed]
                    }))
                }))
            }],
            [ce.customPlacement_targeting_attach, function(t) {
                var e = t.account;
                return u(void 0, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(n) {
                        return void 0 !== (t = e.use(Xt)) && function(t) {
                            return !0 === (null == t ? void 0 : t.aps.some((function(t) {
                                return t.active
                            })))
                        }(t) ? (function(t, e) {
                            var n, o, r = function(t, e) {
                                if (void 0 === (null == e ? void 0 : e.google)) return [];
                                var n = t.use(ae);
                                return e.google.filter((function(t) {
                                    return !n.has(t.div)
                                }))
                            }(t, e);
                            if (0 === r.length) throw new Error("No unrequested slots in custom placement configuration");
                            null === (o = null === (n = t.globalContext.googletag) || void 0 === n ? void 0 : n.cmd) || void 0 === o || o.push((function() {
                                ! function(t, e) {
                                    var n, o = null === (n = null == t ? void 0 : t.pubads()) || void 0 === n ? void 0 : n.getSlots();
                                    null == e || e.forEach((function(t) {
                                        var e = null == o ? void 0 : o.find((function(e) {
                                            return e.getSlotElementId() === t.div
                                        }));
                                        void 0 !== e && Object.entries(t.targeting).forEach((function(t) {
                                            var n = l(t, 2),
                                                o = n[0],
                                                r = n[1];
                                            e.setTargeting(o, r)
                                        }))
                                    }))
                                }(t.globalContext.googletag, r)
                            }))
                        }(e, t), [2, o.completed]) : [2, o.cancelled]
                    }))
                }))
            }],
            [ce.customPlacement_bids_fetch, function(t) {
                var e = t.account;
                return u(void 0, void 0, void 0, (function() {
                    var t, n;
                    return c(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return void 0 === (null === (n = e.globalContext.apstag) || void 0 === n ? void 0 : n.fetchBids) ? [2, o.waiting] : [4, ue(e)];
                            case 1:
                                return t = r.sent(), [2, {
                                    status: o.completed,
                                    value: t
                                }]
                        }
                    }))
                }))
            }]
        ]);
    try {
        var le = new Map(d(d(d(d(d(d(d(d(d(d(d(d(d([], l(Vt), !1), l(Jt), !1), l(Bt), !1), l(kt), !1), l(et), !1), l(zt), !1), l(At), !1), l(nt), !1), l(ot), !1), l(Y), !1), l(Wt), !1), l(Zt), !1), l(se), !1));
        (new K).load({
            listeners: le
        })
    } catch (t) {
        C.logError({
            error: t
        }), F() && E.error(t)
    }
}();
/*! @amzn/apswebapstaglibrary - apstag-legacy - 23.1010.1530 */
! function(t) {
    var e = {};

    function n(r) {
        var o;
        return (e[r] || (o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        }, t[r].call(o.exports, o, o.exports, n), o.l = !0, o)).exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function(e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 40)
}([function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t) {
        try {
            var e = parseInt(t, 10);
            if (!isNaN(e)) return !(e <= 0) && (100 <= e || 100 * Math.random() <= e)
        } catch (t) {}
        return !1
    }

    function i(t, e) {
        var n = parseInt(e, 10),
            r = [],
            o = 0;
        if (u(t)) {
            if (isNaN(n) || n < 1) return [t];
            for (var i = t.length; o < i;) {
                var a = o;
                o += n, r.push(t.slice(a, o))
            }
        }
        return r
    }

    function a() {
        return "".concat(Math.round(1e12 * Math.random())).concat(Date.now())
    }

    function c(t) {
        for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Array(t), r = 0; r < t; r++) n[r] = e[Math.floor(Math.random() * e.length)];
        return n.join("")
    }

    function s(t) {
        return "object" === r(t) && null !== t
    }

    function u(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }

    function l(t, e) {
        return s(t) && void 0 !== t[e] && "" !== t[e]
    }

    function d(t, e) {
        return -1 !== t.indexOf(e)
    }

    function f(t) {
        var e = new Date;
        return e.setDate(e.getDate() + t), e.toUTCString()
    }

    function b(t) {
        try {
            var e = t.innerWidth || t.document.documentElement.clientWidth || t.document.body.clientWidth,
                n = t.innerHeight || t.document.documentElement.clientHeight || t.document.body.clientHeight;
            return "".concat(e, "x").concat(n)
        } catch (t) {}
        return "x"
    }

    function p(t, e) {
        return decodeURIComponent(t).split("?")[0].split("#")[0] === decodeURIComponent(e).split("?")[0].split("#")[0]
    }

    function y(t) {
        var e = Object.keys(t);
        return e.filter((function(e) {
            return t[e]
        })).length === e.length
    }
    n.d(e, "l", (function() {
        return o
    })), n.d(e, "c", (function() {
        return i
    })), n.d(e, "d", (function() {
        return a
    })), n.d(e, "e", (function() {
        return c
    })), n.d(e, "j", (function() {
        return s
    })), n.d(e, "i", (function() {
        return u
    })), n.d(e, "k", (function() {
        return l
    })), n.d(e, "h", (function() {
        return d
    })), n.d(e, "f", (function() {
        return f
    })), n.d(e, "g", (function() {
        return b
    })), n.d(e, "b", (function() {
        return p
    })), n.d(e, "a", (function() {
        return y
    }))
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return l
    })), n.d(e, "c", (function() {
        return d
    })), n.d(e, "d", (function() {
        return f
    })), n.d(e, "a", (function() {
        return b
    }));
    e = n(0);
    var r = n(3),
        o = n(2),
        i = n(8),
        a = n(9),
        c = n(13),
        s = Object(e.l)(10),
        u = [];

    function l(t, e, n) {
        try {
            (null != n && n.makeVisibleToAllUsers || Object(i.d)("errors")) && console.error(t);
            var l, d = {
                    ts: Date.now(),
                    url: encodeURIComponent(Object(a.g)(window)),
                    r: encodeURIComponent(Object(a.h)(window)),
                    _type: "apsLibraryError",
                    e: {
                        et: t.name,
                        el: e,
                        msg: t.message
                    }
                },
                f = (u.push(d), o.a.dispatch({
                    type: "LOG_ERROR",
                    error: d
                }), null == n ? void 0 : n.accountId);
            return f = f || Array.from(window._aps.keys()).filter((function(t) {
                return "_system" !== t
            }))[0] || "_system", null != (l = Object(c.a)(f)) && l.record("log/library/didError", {
                source: "apstag",
                log: {
                    accountID: f,
                    error: t,
                    errorCategory: e,
                    eventProperties: {}
                }
            }), !!s && (Object(r.b)(d), !0)
        } catch (t) {
            console.error(t)
        }
        return !1
    }

    function d(t, e, n, r) {
        return l({
            name: e,
            message: "".concat(t, " was of type '").concat(e, "' instead of '").concat(n, "'")
        }, "TypeError-".concat(t), r)
    }

    function f(t, e) {
        return function() {
            try {
                return t.apply(null, arguments)
            } catch (t) {
                return l(t, e, {
                    makeVisibleToAllUsers: !0
                }), null
            }
        }
    }

    function b(t) {
        (1 < arguments.length && void 0 !== arguments[1] && arguments[1] || Object(i.d)("errors")) && console.warn(t)
    }!0 === Object(i.c)("exposeErrors") && (window.apstagErrors = u)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return p
    }));
    var r, o = n(4),
        i = (e = n(5), n(0));
    n = n(8);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function c(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(n), !0).forEach((function(e) {
                u(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function u(t, e, n) {
        return (e = function(t) {
            return t = function(t, e) {
                if ("object" !== a(t) || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 === n) return String(t);
                if ("object" !== a(n = n.call(t, e))) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }(t, "string"), "symbol" === a(t) ? t : String(t)
        }(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function l(t) {
        return function(t) {
            if (Array.isArray(t)) return d(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || function(t, e) {
            var n;
            if (t) return "string" == typeof t ? d(t, e) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(t, e) : void 0
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }
    var f = {
        AAXReqs: [],
        aaxViewabilityEnabled: !1,
        bidConfigs: {},
        bidReqs: {},
        bsPixels: {},
        cfg: {
            v: -1,
            CSM_JS: "//c.amazon-adsystem.com/aax2/csm.js.gz",
            CSM_RTB_COMMUNICATOR_JS: "".concat(o.x, "c.amazon-adsystem.com/bao-csm/aps-comm/aps_csm.js"),
            DEBUG_APP_HTML: "//c.amazon-adsystem.com/aax2/debugApp.html",
            DEBUG_APP_HTML_V2: "//c.amazon-adsystem.com/aax2/debug_app_v2.html",
            DEFAULT_TIMEOUT: 2e3,
            DTB_PATH: "/e/dtb",
            TEST_PATH_FREQUENCY: 0,
            TEST_BID_ENDPOINT: null,
            TEST_PATH_LATENCY_SAMPLE_RATE: null,
            PIXEL_PATH: "/x/px/",
            LATENCY_SAMPLING_RATE: 1,
            COOKIE_MATCH_DELAY: 0,
            MAX_SLOTS_PER_REQUEST: 1,
            SLOT_RENDER_SAMPLING_RATE: 1,
            FEATURE_SAMPLING_RATE: 1,
            CONFIG_CALL_ENABLED: !1,
            LIB_CONFIG_PATH: "/cdn/prod/config"
        },
        cmpFired: !1,
        config: {
            pubID: ""
        },
        displayAdServer: {
            noBidSlotIDs: [],
            shouldSampleRender: !1,
            slotRenderEndedSet: !1
        },
        errors: [],
        eventLog: [],
        experiments: {},
        gamSlotFetchLog: [],
        gamSlotRenderPixel: {
            aaxReqOffset: 0,
            gamSlotFetchLogOffset: 0
        },
        hosts: {
            DEFAULT_AAX_BID_HOST: "aax.amazon-adsystem.com",
            DEFAULT_AAX_PIXEL_HOST: "aax.amazon-adsystem.com",
            DEFAULT_CXM_HOST: "c.amazon-adsystem.com",
            DEFAULT_BS_HOST: "cxm-bcn.publisher-services.amazon.dev"
        },
        identityState: {},
        libraryLoadCallLatency: 0,
        Q: [],
        slotBids: {},
        targetingKeys: {},
        tcfParseTime: 0,
        outstream: {
            renderStart: 0,
            shouldSample: !1
        },
        consentManagementPlatform: {}
    };

    function b() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : f,
            e = 1 < arguments.length ? arguments[1] : void 0;
        return {
            AAXReqs: function(t, e) {
                switch (e.type) {
                    case "RECORD_AAX_REQUEST":
                        return [].concat(l(t), [e.data]);
                    case "RECORD_AAX_REQ_PROP":
                        return t.map((function(t) {
                            return (t = s({}, t)).bidReqID === e.bidReqID && (t[e.key] = e.value), t
                        }));
                    default:
                        return l(t)
                }
            }(t.AAXReqs, e),
            aaxViewabilityEnabled: function(t, e) {
                return "SET_VIEWABILITY" !== e.type ? t : e.viewability
            }(t.aaxViewabilityEnabled, e),
            bidConfigs: function(t, e) {
                return "RECORD_ORIGINAL_BID_CONFIG" !== e.type ? s({}, t) : s(s({}, t), {}, u({}, e.bidConfig.bidReqID, e.bidConfig))
            }(t.bidConfigs, e),
            bidReqs: function(t, e) {
                var n;
                switch (e.type) {
                    case "ADD_CHUNKED_REQUESTS":
                        return s(s({}, t), {}, u({}, e.fid, s(s({}, t[e.fid]), {}, {
                            networkReqs: new Array(e.numChunks)
                        })));
                    case "NEW_FETCH_BID_REQUEST":
                        return s(s({}, t), {}, u({}, e.fid, {
                            pto: e.pto,
                            hasCallbackExecuted: !1,
                            networkReqs: []
                        }));
                    case "RECORD_CALLBACK":
                        return s(s({}, t), {}, u({}, e.fid, s(s({}, t[e.fid]), {}, {
                            hasCallbackExecuted: !0
                        })));
                    case "RECORD_NETWORK_EXCHANGE":
                        var r = t[e.fid].networkReqs;
                        return r[e.networkID] = s(s({}, r[e.networkID]), {}, (u(n = {}, "".concat(e.exchangeType, "Time"), e.timestamp), u(n, "inFlight", "request" === e.exchangeType), n)), s(s({}, t), {}, u({}, e.fid, s(s({}, t[e.fid]), {}, {
                            networkReqs: r
                        })));
                    case "RECORD_TIMEOUT":
                        return s(s({}, t), {}, u({}, e.fid, s(s({}, t[e.fid]), {}, {
                            networkReqs: t[e.fid].networkReqs.map((function(t) {
                                return t.inFlight ? s(s({}, t), {}, {
                                    timeOut: e.timeOut
                                }) : t
                            }))
                        })));
                    default:
                        return s({}, t)
                }
            }(t.bidReqs, e),
            bsPixels: function(t, e) {
                return "RECORD_BID_INFO_SENT" !== e.type ? s({}, t) : s(s({}, t), {}, u({}, e.bidInfo.iid, e.bidInfo.state))
            }(t.bsPixels, e),
            cfg: function(t, e) {
                return "SET_CFG" !== e.type ? s({}, t) : s(s({}, t), e.cfg)
            }(t.cfg, e),
            cmpFired: function(t, e) {
                return "CMP_FIRED" === e.type || t
            }(t.cmpFired, e),
            config: function(t, e) {
                return "SET_CONFIG" !== e.type ? s({}, t) : s(s({}, e.config), {}, {
                    gdpr: s({
                        cmpTimeout: e.defaultCmpTimeout
                    }, e.config.gdpr),
                    isSelfServePub: void 0 !== e.config.pubID && 5 <= e.config.pubID.length
                })
            }(t.config, e),
            displayAdServer: function(t, e) {
                switch (e.type) {
                    case "SLOT_RENDER_ENDED_SET":
                        return s(s({}, t), {}, {
                            slotRenderEndedSet: !0
                        });
                    case "NO_BID_ON_ADSERVER_SLOTS":
                        return s(s({}, t), {}, {
                            noBidSlotIDs: t.noBidSlotIDs.concat(e.slotIDs)
                        });
                    case "REQUESTED_BID_FOR_ADSERVER_SLOTS":
                        return s(s({}, t), {}, {
                            noBidSlotIDs: t.noBidSlotIDs.filter((function(t) {
                                return !Object(i.h)(e.slotIDs, t)
                            }))
                        });
                    case "SHOULD_SAMPLE_SLOT_RENDER":
                        return s(s({}, t), {}, {
                            shouldSampleRender: e.value
                        });
                    default:
                        return s(s({}, t), {}, {
                            noBidSlotIDs: l(t.noBidSlotIDs)
                        })
                }
            }(t.displayAdServer, e),
            errors: function(t, e) {
                return "LOG_ERROR" !== e.type ? l(t) : [].concat(l(t), [s({}, e.error)])
            }(t.errors, e),
            eventLog: function(t, e) {
                return "LOG_EVENT" !== e.type ? l(t) : [].concat(l(t), [s({}, e.event)])
            }(t.eventLog, e),
            experiments: function(t, e) {
                switch (e.type) {
                    case "SHOULD_CHUNK_REQUESTS":
                        return s({
                            chunkRequests: !0 === t.shouldSampleLatency && e.value
                        }, t);
                    case "SHOULD_SAMPLE_LATENCY":
                        return s(s({}, t), {}, {
                            shouldSampleLatency: e.value
                        });
                    case "SHOULD_SAMPLE_FEATURES":
                        return s(s({}, t), {}, {
                            shouldSampleFeatures: e.value
                        });
                    case "SHOULD_USE_TEST_BID_ENDPOINT":
                        return s(s({}, t), {}, {
                            shouldUseTestBidEndpoint: e.value
                        });
                    default:
                        return s({}, t)
                }
            }(t.experiments, e),
            gamSlotFetchLog: function(t, e) {
                return "LOG_GAM_EVENT" !== e.type ? l(t) : [].concat(l(t), [s({}, e.event)])
            }(t.gamSlotFetchLog, e),
            gamSlotRenderPixel: function(t, e) {
                return "UPDATE_RENDER_OFFSETS" !== e.type ? s({}, t) : s(s({}, t), e.offsets)
            }(t.gamSlotRenderPixel, e),
            hosts: function(t, e) {
                return "SET_HOST" !== e.type ? s({}, t) : s(s({}, t), {}, u({}, e.hostName, e.hostValue))
            }(t.hosts, e),
            identityState: function(t, e) {
                return "RECORD_IDENTITY_STATE" !== e.type ? t : s(s({}, t), {}, u({}, e.vendor, Object(i.k)(t, e.vendor) ? t[e.vendor] : e.identityState))
            }(t.identityState, e),
            libraryLoadCallLatency: function(t, e) {
                return "RECORD_LIBRARY_LOAD_CALL_LATENCY" !== e.type ? t : e.latency
            }(t.libraryLoadCallLatency, e),
            Q: function(t, e) {
                return "SET_Q" !== e.type ? l(t) : l(e.Q)
            }(t.Q, e),
            slotBids: function(t, e) {
                switch (e.type) {
                    case "BID_STATE_CHANGE":
                        return s(s({}, t), {}, u({}, e.slotID, t[e.slotID].map((function(t) {
                            return t._targetingSetID === e._targetingSetID && (t.bidState = e.bidState, e.bidState === o.c.rendered ? t.timing.renderTime = e.ts : e.bidState === o.c.set && t.timing.setAtTimes.push(e.ts)), t
                        }))));
                    case "UPDATE_BID_INFO_PROP":
                        return void 0 === t[e.slotID] || t[e.slotID].filter((function(t) {
                            return t.matchesBidCacheId(e.iid)
                        })).length < 1 ? s({}, t) : s(s({}, t), {}, u({}, e.slotID, t[e.slotID].map((function(t) {
                            return t.matchesBidCacheId(e.iid) && (t[e.key] = e.value), t
                        }))));
                    case "UPDATE_SLOT_BIDS":
                        return s(s({}, t), e.bids.reduce((function(e, n) {
                            return Object(i.k)(e, n.slotID) ? e[n.slotID] = [].concat(l(e[n.slotID]), [n]) : Object(i.k)(t, n.slotID) ? e[n.slotID] = [].concat(l(t[n.slotID]), [n]) : e[n.slotID] = [n], e
                        }), {}));
                    default:
                        return s({}, t)
                }
            }(t.slotBids, e),
            targetingKeys: function(t, e) {
                return "UPDATE_SLOT_BIDS" !== e.type ? s({}, t) : s(s({}, t), e.bids.reduce((function(e, n) {
                    return Object(i.k)(t, n.slotID) ? e[n.slotID] = [].concat(l(t[n.slotID]), l((n.bidConfig.targeting || o.i).filter((function(e) {
                        return -1 === t[n.slotID].indexOf(e)
                    })))) : e[n.slotID] = n.bidConfig.targeting || o.i, e
                }), {}))
            }(t.targetingKeys, e),
            tcfParseTime: function(t, e) {
                return "RECORD_TCF_PARSE_TIME" !== e.type ? t : e.time
            }(t.tcfParseTime, e),
            outstream: function(t, e) {
                switch (e.type) {
                    case "RECORD_OUTSTREAM_RENDER_START_TIME":
                        return s(s({}, t), {}, {
                            renderStart: e.time
                        });
                    case "OUTSTREAM_SHOULD_SAMPLE":
                        return s(s({}, t), {}, {
                            shouldSample: e.shouldSample
                        });
                    default:
                        return t
                }
            }(t.outstream, e),
            consentManagementPlatform: function(t, e) {
                switch (e.type) {
                    case "RECORD_CMP_LISTENED_TO":
                        return s(s({}, t), {}, {
                            isListenedTo: e.isListenedTo
                        });
                    case "RECORD_CMP_CONSENT_DATA":
                        return s(s({}, t), {}, {
                            tcData: e.tcData
                        });
                    default:
                        return t
                }
            }(t.consentManagementPlatform, e)
        }
    }
    var p = {
        getState: function() {
            return r
        },
        dispatch: function(t) {
            r = b(r, t)
        }
    };
    (p = Object(n.d)("redux") && Object(e.b)() && Object(i.k)(window, "__REDUX_DEVTOOLS_EXTENSION__") ? window.__REDUX_DEVTOOLS_EXTENSION__(b) : p).dispatch({
        type: "NOOP"
    })
}, function(t, e, n) {
    "use strict";
    n.d(e, "f", (function() {
        return p
    })), n.d(e, "c", (function() {
        return j
    })), n.d(e, "d", (function() {
        return S
    })), n.d(e, "b", (function() {
        return T
    })), n.d(e, "a", (function() {
        return D
    })), n.d(e, "g", (function() {
        return _
    })), n.d(e, "e", (function() {
        return I
    }));
    var r = n(4),
        o = n(2),
        i = n(8),
        a = n(0),
        c = n(1),
        s = n(9),
        u = n(16),
        l = n(11),
        d = [],
        f = !1,
        b = [];

    function p(t) {
        var e = new Image;
        return e.src = t, b.push(e), e
    }!0 === Object(i.c)("exposePixels") && (window.apstagPixelQueue = d, window.apstagPixelsSent = b);
    var y, m = {
            adServer: [],
            ampAdContext: [],
            appended: [],
            AaxSlotSizes: [],
            bidRender: [],
            bidRenderState: [],
            bidType: [],
            "blockedBidders-fetchBids": [],
            "blockedBidders-init": [],
            ccpa: [],
            cmpVar: [],
            creativeSize: [],
            deals: [],
            fetchBids: [],
            fifFlow: [],
            customFloor: [],
            gdpr: [],
            gpp: [],
            id: [],
            idRemap: [],
            iframe: [],
            renderFootprint: [],
            resizeIframe: [],
            schain: [],
            simplerGpt: [],
            slots: [],
            slotType: [],
            targeting: [],
            tcfVar: [],
            unusedDeal: [],
            useSafeFrames: [],
            trustToken: [],
            hasLocalStorage: [],
            renderImp: [],
            configOrder: []
        },
        g = [],
        h = !1;

    function O() {
        h && (clearTimeout(y), h = !1), Object(a.c)(g, 5).forEach((function(t) {
            T({
                _type: "featureUsage",
                p: t,
                u: Object(s.g)(window)
            })
        })), g = []
    }

    function v() {
        h || (h = !0, y = setTimeout(O, 2e3))
    }

    function j(t, e) {
        try {
            return !!o.a.getState().experiments.shouldSampleFeatures && (void 0 !== m[t] && !Object(a.h)(m[t], e) && (m[t].push(e), g.push({
                cat: t,
                feat: e
            }), f && v(), !0))
        } catch (t) {
            return Object(c.b)(t, "sendFeaturePixel"), !1
        }
    }

    function S() {
        try {
            var t, e, n, r = o.a.getState().libraryLoadCallLatency,
                i = Object(u.c)(window, new RegExp("aax2/apstag-legacy.js"));
            null === i && 0 === r || (t = Object(u.e)(window, "navigationStart"), e = {
                _type: "libLatency",
                pid: l.b,
                ns: t
            }, null !== i && (e.fs = Object(u.a)(i, "fetchStart"), e.re = Object(u.a)(i, "responseEnd"), null !== (n = Object(u.f)(i))) && (e.c = n ? 1 : 0), 0 !== r && (e.tcc = r), T(e))
        } catch (t) {
            Object(c.b)(t, "sendInitLatencyPixel")
        }
    }

    function w(t) {
        try {
            var e;
            return f ? (e = function() {
                try {
                    var t = o.a.getState(),
                        e = t.cfg.PIXEL_PATH,
                        n = t.hosts.DEFAULT_AAX_PIXEL_HOST,
                        a = Object(i.c)("pixelHost", n);
                    return "".concat(r.t).concat(a).concat(e)
                } catch (t) {
                    return Object(c.b)(t, "buildPixelBaseUrl"), ""
                }
            }(), void 0 === t.bidId ? e += "p/PH/" : e += "".concat(t.bidId, "/"), p(e += function(t) {
                try {
                    t._tl = "aps-tag";
                    var e = o.a.getState(),
                        n = null,
                        i = "";
                    Object(a.k)(e, "config") && Object(a.k)(e.config, "pubID") && "" !== e.config.pubID && (n = e.config.isSelfServePub, i = e.config.pubID), null !== n && (n ? (t.src = r.u, t.pubid = i) : t.src = i), t.lv = r.l;
                    var s = function(t) {
                        try {
                            return t.replace(/\\.{1}/g, "")
                        } catch (t) {
                            return Object(c.b)(t, "escapeJsonForAax"), ""
                        }
                    }(JSON.stringify(t));
                    return encodeURIComponent(s)
                } catch (t) {
                    return Object(c.b)(t, "objectToUrlPath"), ""
                }
            }(t.payload))) : (d.push(t), !1)
        } catch (t) {
            return !1
        }
    }

    function T(t) {
        return w({
            payload: t
        })
    }

    function D(t, e) {
        return w({
            payload: e,
            bidId: t
        })
    }

    function _() {
        try {
            f || (f = !0, d.forEach(w), 0 < g.length && v())
        } catch (t) {
            Object(c.b)(t, "sendPixels")
        }
    }

    function I(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
        try {
            return w({
                payload: {
                    _type: "outstreamRender",
                    bi: e,
                    loc: t,
                    lt: n
                }
            })
        } catch (t) {
            return Object(c.b)(t, "outstreamPixel"), !1
        }
    }!0 === Object(i.c)("exposePixels") && (window.apstagFeaturePixelQueue = g)
}, function(t, e, n) {
    "use strict";
    n.d(e, "n", (function() {
        return a
    })), n.d(e, "i", (function() {
        return c
    })), n.d(e, "B", (function() {
        return s
    })), n.d(e, "c", (function() {
        return r
    })), n.d(e, "h", (function() {
        return u
    })), n.d(e, "A", (function() {
        return l
    })), n.d(e, "f", (function() {
        return d
    })), n.d(e, "g", (function() {
        return f
    })), n.d(e, "d", (function() {
        return b
    })), n.d(e, "q", (function() {
        return p
    })), n.d(e, "o", (function() {
        return y
    })), n.d(e, "e", (function() {
        return m
    })), n.d(e, "z", (function() {
        return g
    })), n.d(e, "y", (function() {
        return h
    })), n.d(e, "m", (function() {
        return O
    })), n.d(e, "p", (function() {
        return o
    })), n.d(e, "w", (function() {
        return v
    })), n.d(e, "j", (function() {
        return j
    })), n.d(e, "v", (function() {
        return i
    })), n.d(e, "u", (function() {
        return S
    })), n.d(e, "l", (function() {
        return w
    })), n.d(e, "t", (function() {
        return T
    })), n.d(e, "x", (function() {
        return D
    })), n.d(e, "b", (function() {
        return _
    })), n.d(e, "k", (function() {
        return I
    })), n.d(e, "a", (function() {
        return E
    })), n.d(e, "s", (function() {
        return k
    })), n.d(e, "r", (function() {
        return C
    })), n.d(e, "D", (function() {
        return A
    })), n.d(e, "C", (function() {
        return P
    }));
    var r, o, i, a = 25,
        c = ["amznbid", "amzniid", "amznsz", "amznp"],
        s = ["amznbid", "amzniid", "amznp", "r_amznbid", "r_amzniid", "r_amznp"],
        u = ((n = r = r || {}).new = "NEW", n.exposed = "EXPOSED", n.set = "SET", n.rendered = "RENDERED", "apstagDebug"),
        l = ["redux", "fake_bids", "verbose", "console", "console_v2", "errors"],
        d = "apstagDebugHeight",
        f = "apstagDEBUG",
        b = "apstagCfg",
        p = 0,
        y = 0,
        m = "apstagCxMEnabled",
        g = "3pmetadata",
        h = 5,
        O = "apstagLiveRampTimestamp",
        v = ((e = o = o || {}).amznbid = "testBid", e.amzniid = "testImpression", e.amznp = "testP", e.crid = "testCrid", ["amznbid", "amznp"]),
        j = new Map([
            ["__apsid", "ck"],
            ["__aps_id_p", "ckp"]
        ]),
        S = ((n = i = i || {}).noRequest = "0", n.bidInFlight = "1", n.noBid = "2", "600"),
        w = "23.1010.1530",
        T = "https://",
        D = "http".concat("s://"),
        _ = "".concat(T, "aax.amazon-adsystem.com/e/dtb/vast?"),
        I = "function" == typeof XMLHttpRequest && void 0 !== (new XMLHttpRequest).withCredentials,
        E = "apstagLOADED",
        k = 13,
        C = 1e4,
        A = /^1[NY\-]{3}$/,
        P = '<!DOCTYPE html>\n<html>\n  <head>\n    <title>APS Video Ads</title>\n    <script src="https://video-player.aps.amazon-adsystem.com/apsvid.js" onerror="$$apsvidonerror$$"><\/script>\n  </head>\n  <body>\n    <div id="amazon-ads-container" style="height: 100%; width: 100%; position: absolute;">\n    </div>\n    <script type="text/javascript">\nconst adsContainer = document.querySelector("#amazon-ads-container")\nconst companionContainers =\n  window.AmazonVideoAds.findCompanionDivs($$apstagCompanionContainers$$)\nconst videoPlayerProps = $$videoPlayerProps$$\n\nconst amazonVideoAds = new window.AmazonVideoAds(adsContainer,\n{ ...videoPlayerProps,\n  companions: companionContainers });\nwindow.adsM;\n\nfunction addListeners(adsM, amazonVideoAds) {\n  adsM.addListener(amazonVideoAds.eventNames.AdVideoPlayerEvents.COMPLETED, (e) => {\n    window.top.postMessage({"apsVideoPlayer": true, "event": "completed"}, window.top.location.origin);\n  })\n  adsM.addListener(amazonVideoAds.eventNames.AdVideoPlayerEvents.LOADED, (e) => {\n    window.top.postMessage({"apsVideoPlayer": true, "event": "loaded"}, window.top.location.origin);\n  })\n}\n \nwindow.requestAndPlay = () => {\n  amazonVideoAds.fetchAdsFromUrl("$$apstagVastTag$$")\n    .then(adsManager => {\n      adsM = adsManager;\n \n      adsM.init({\n        fullscreen: true,\n        muted: true,\n        volume: .3,\n        autoplay: false,\n        controls: false,\n        preload: "auto"\n      })\n\n      addListeners(adsM, amazonVideoAds);\n      adsM.startAds(2000, {shouldVideoRemainAfterPlay: true});\n    })\n    .catch(function(err) {\n      console.log("apstag failed to get APS ads manager", err);\n    });\n  }\n \n  requestAndPlay();\n    <\/script>\n  </body>\n</html>'
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return S
    })), n.d(e, "a", (function() {
        return I
    }));
    var r, o, i, a, c = n(1),
        s = n(3),
        u = n(18),
        l = n(23),
        d = n(2);

    function f(t) {
        return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function b(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && function(t, e) {
            (Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }(t, e)
    }

    function p(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = m(t);
            n = e ? (n = m(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
            if (n && ("object" === f(n) || "function" == typeof n)) return n;
            if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
            return y(r)
        }
    }

    function y(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function m(t) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function g(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function h(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, j(r.key), r)
        }
    }

    function O(t, e, n) {
        e && h(t.prototype, e), n && h(t, n), Object.defineProperty(t, "prototype", {
            writable: !1
        })
    }

    function v(t, e, n) {
        (e = j(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function j(t) {
        return t = function(t, e) {
            if ("object" !== f(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== f(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === f(t) ? t : String(t)
    }

    function S() {
        try {
            var t, e, n, r;
            return !(null == (t = window) || null == (e = t.localStorage) || !e.setItem || null == (n = window) || null == (r = n.localStorage) || !r.removeItem) || (Object(s.c)("hasLocalStorage", "absent"), !1)
        } catch (t) {
            return Object(s.c)("hasLocalStorage", "exception"), !1
        }
    }(e = r = r || {}).sessionStorage = "sessionStorage", e.localStorage = "localStorage", (o = o || {}).document = "document", (n = i = i || {}).clear = "clear", n.getItem = "getItem", n.key = "key", n.removeItem = "removeItem", n.setItem = "setItem", n.length = "length", (a = a || {}).cookie = "cookie";
    var w = ["AMZN-NoCookieConsent"],
        T = function() {
            function t(e, n) {
                g(this, t), v(this, "globalContext", void 0), v(this, "stateContainer", void 0), this.globalContext = e, this.stateContainer = n
            }
            return O(t, [{
                key: "privacyRegulationApplies",
                value: function() {
                    var t = null == (e = l.a.readStoredConsentData(this.stateContainer)) ? void 0 : e.tcString,
                        e = null == e ? void 0 : e.gdprApplies;
                    return !!("string" == typeof t && 0 < t.length || null != (t = this.globalContext.apstag) && t.isGDPRRegion || e)
                }
            }, {
                key: "allowedToStoreAndAccessInformationOnDevice",
                value: function() {
                    if (this.privacyRegulationApplies()) {
                        var t;
                        if (!(t = null == (t = l.a.readStoredConsentData(this.stateContainer)) ? void 0 : t.tcString) || "string" != typeof t) return {
                            allowed: !1,
                            failures: ["Invalid tcString: ".concat(t)]
                        };
                        var e = Object(u.c)(t);
                        if (!e) return {
                            allowed: !1,
                            failures: ["Invalid tcString: ".concat(t)]
                        };
                        if ((t = Object(u.b)(e)).length) return {
                            allowed: !1,
                            failures: t
                        }
                    }
                    return {
                        allowed: !0,
                        failures: []
                    }
                }
            }, {
                key: "ensureStorageUsageIsAllowedOrThrowOnError",
                value: function(t, e, n) {
                    var r = (o = this.allowedToStoreAndAccessInformationOnDevice()).allowed,
                        o = o.failures;
                    if (!(r || n && 0 < n.length && 0 <= w.indexOf(n[0]))) throw new Error("Not allowed to store or access information on device: ".concat(o));
                    if (!(r = this.globalContext[t])) throw new ReferenceError("Object ".concat(t, " isn't available"));
                    if (void 0 === r[e]) throw new ReferenceError("Method ".concat(e, " isn't available"))
                }
            }, {
                key: "executeFunction",
                value: function(t, e, n, r, o) {
                    return e = this.globalContext[e], (n = (r = r || e[n]).apply(e, t)) && null != o && o.isJson ? JSON.parse(n) : n
                }
            }, {
                key: "executeFunctionOrThrowOnError",
                value: function(t, e, n, r, o) {
                    return this.ensureStorageUsageIsAllowedOrThrowOnError(e, n, t), this.executeFunction(t, e, n, r, o)
                }
            }, {
                key: "regulatedMethod",
                value: function(t, e, n, r) {
                    var o = this;
                    return function() {
                        try {
                            for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                            return o.executeFunctionOrThrowOnError(a, t, e, n, r)
                        } catch (i) {
                            if (null == r || !r.ignoreFailure) throw Object(c.b)(i, "RegulatedDataContainer-regulatedMethod"), i
                        }
                    }
                }
            }]), t
        }(),
        D = function() {
            b(e, T);
            var t = p(e);

            function e() {
                var n;
                g(this, e);
                for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++) i[c] = arguments[c];
                return v(y(n = t.call.apply(t, [this].concat(i))), "_getItem", (function(t) {
                    return n.globalContext.document.cookie.split("; ").reduce((function(e, n) {
                        return (n = n.split("="))[0] === t ? decodeURIComponent(n[1]) : e
                    }), "") || null
                })), v(y(n), "_removeItem", (function(t) {
                    n._setItem(t, "", 0)
                })), v(y(n), "_setItem", (function(t, e, r) {
                    var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "/";
                    r = new Date(r);
                    if (!n.isValidDate(r)) throw new Error("Invalid expiration date");
                    n.globalContext.document.cookie = "".concat(t, "=").concat(e, "; expires=").concat(r.toUTCString(), "; path=").concat(o, ";")
                })), v(y(n), "getItem", (function(t, e) {
                    return n.regulatedMethod(o.document, a.cookie, n._getItem, e)(t)
                })), v(y(n), "setItem", (function(t, e, r) {
                    var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "/";
                    return n.regulatedMethod(o.document, a.cookie, n._setItem, 4 < arguments.length ? arguments[4] : void 0)(t, e, r, i)
                })), v(y(n), "removeItem", (function(t, e) {
                    return n.regulatedMethod(o.document, a.cookie, n._removeItem, e)(t)
                })), n
            }
            return O(e, [{
                key: "isValidDate",
                value: function(t) {
                    return t instanceof Date && !isNaN(t)
                }
            }]), e
        }(),
        _ = function() {
            b(e, T);
            var t = p(e);

            function e(n, r, o) {
                var a;
                return g(this, e), v(y(a = t.call(this, n, r)), "storageType", void 0), v(y(a), "clear", (function(t) {
                    return a.regulatedMethod(a.storageType, i.clear, null, t)()
                })), v(y(a), "getItem", (function(t, e) {
                    return a.regulatedMethod(a.storageType, i.getItem, null, e)(t)
                })), v(y(a), "key", (function(t, e) {
                    return a.regulatedMethod(a.storageType, i.key, null, e)(t)
                })), v(y(a), "removeItem", (function(t, e) {
                    return a.regulatedMethod(a.storageType, i.removeItem, null, e)(t)
                })), v(y(a), "setItem", (function(t, e, n) {
                    return a.regulatedMethod(a.storageType, i.setItem, null, n)(t, e)
                })), a.storageType = o, a
            }
            return O(e, [{
                key: "length",
                get: function() {
                    return this.ensureStorageUsageIsAllowedOrThrowOnError(this.storageType, i.length), this.globalContext[this.storageType].length
                }
            }]), e
        }(),
        I = function() {
            function t(e) {
                g(this, t), v(this, "globalContext", void 0), v(this, "stateContainer", void 0), this.globalContext = e.globalContext, this.stateContainer = e.stateContainer
            }
            return O(t, [{
                key: "sessionStorage",
                get: function() {
                    try {
                        return new _(this.globalContext, this.stateContainer, r.sessionStorage)
                    } catch (t) {
                        throw Object(c.b)(t, "RegulatedDataContainers-sessionStorage"), t
                    }
                }
            }, {
                key: "localStorage",
                get: function() {
                    try {
                        return new _(this.globalContext, this.stateContainer, r.localStorage)
                    } catch (t) {
                        throw Object(c.b)(t, "RegulatedDataContainers-localStorage"), t
                    }
                }
            }, {
                key: "cookie",
                get: function() {
                    try {
                        return new D(this.globalContext, this.stateContainer)
                    } catch (t) {
                        throw Object(c.b)(t, "RegulatedDataContainers-cookie"), t
                    }
                }
            }, {
                key: "indexedDB",
                get: function() {
                    throw new ReferenceError("Interface isn't yet defined")
                }
            }, {
                key: "allowedToStoreAndAccessInformationOnDevice",
                value: function() {
                    try {
                        return new T(this.globalContext, this.stateContainer).allowedToStoreAndAccessInformationOnDevice().allowed
                    } catch (t) {
                        return Object(c.b)(t, "RegulatedDataContainers-allowedToStoreAndAccessInformationOnDevice"), !1
                    }
                }
            }], [{
                key: "getDefault",
                value: function() {
                    return new t({
                        globalContext: window,
                        stateContainer: d.a
                    })
                }
            }]), t
        }()
}, function(t, e, n) {
    "use strict";
    var r, o;

    function i(t) {
        return void 0 !== t.amzniid
    }

    function a(t) {
        return void 0 !== t.kvMap
    }
    n.d(e, "a", (function() {
        return r
    })), n.d(e, "b", (function() {
        return o
    })), n.d(e, "d", (function() {
        return i
    })), n.d(e, "c", (function() {
        return a
    })), (n = r = r || {}).DISPLAY = "display", n.VIDEO = "video", n.MULTI_FORMAT = "multi-format", (e = o = o || {}).MANAGED_WEB = "mw", e.SELF_SERVE_WEB = "ssw"
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return F
    })), n.d(e, "b", (function() {
        return U
    }));
    var r = n(21),
        o = n(0),
        i = n(1),
        a = (e = n(19), n(6));

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function s(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function u(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? s(Object(n), !0).forEach((function(e) {
                m(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function l(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, g(r.key), r)
        }
    }

    function d() {
        return (d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = y(t)););
                return t
            }(t, e);
            if (r) return (r = Object.getOwnPropertyDescriptor(r, e)).get ? r.get.call(arguments.length < 3 ? t : n) : r.value
        }).apply(this, arguments)
    }

    function f(t, e) {
        return (f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function b(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = y(t);
            n = e ? (n = y(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
            if (n && ("object" === c(n) || "function" == typeof n)) return n;
            if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
            return p(r)
        }
    }

    function p(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function y(t) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function m(t, e, n) {
        (e = g(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function g(t) {
        return t = function(t, e) {
            if ("object" !== c(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== c(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === c(t) ? t : String(t)
    }
    var h = function(t) {
        var e = r;
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && f(e, t);
        var n = b(r);

        function r(t) {
            var e;
            if (this instanceof r) return e = {
                slotID: t.targetId,
                slotName: Object(o.k)(t, "invCode") ? t.invCode : Object(o.k)(t, "tagId") ? t.tagId : t.targetId
            }, m(p(e = n.call(this, e)), "rawSlot", void 0), e.rawSlot = t, e;
            throw new TypeError("Cannot call a class as a function")
        }
        return e = r, (t = [{
            key: "mediaType",
            get: function() {
                return a.a.DISPLAY
            }
        }, {
            key: "sizes",
            get: function() {
                try {
                    return this.rawSlot.sizes
                } catch (t) {
                    return this.reportError(t, "sizes"), []
                }
            }
        }, {
            key: "aaxSlot",
            get: function() {
                try {
                    var t = u(u({}, d(y(r.prototype), "aaxSlot", this)), {}, {
                        sd: this.slotID,
                        s: this.sizes.filter(o.i).map((function(t) {
                            return t.join("x")
                        }))
                    });
                    return this.slotID !== this.slotName && (t.sn = this.slotName), t
                } catch (t) {
                    return {
                        sd: "",
                        s: [],
                        kv: {}
                    }
                }
            }
        }, {
            key: "reportError",
            value: function(t, e, n) {
                Object(i.b)(t, "ApnSlot-".concat(e), n)
            }
        }, {
            key: "isValid",
            value: function() {
                return !(!d(y(r.prototype), "isValid", this).call(this) || 0 === this.sizes.length && (this.reportIsValidMessages(["'sizes' must have at least 1 valid item"], !0), 1))
            }
        }, {
            key: "initKeywords",
            value: function() {
                try {
                    Object(o.k)(this.rawSlot, "keywords") || (this.rawSlot.keywords = {})
                } catch (t) {
                    this.reportError(t, "initKeywords")
                }
            }
        }, {
            key: "setTargeting",
            value: function(t, e) {
                try {
                    this.initKeywords(), this.rawSlot.keywords[t] = e
                } catch (t) {
                    this.reportError(t, "setTargeting")
                }
            }
        }, {
            key: "getTargeting",
            value: function(t) {
                try {
                    return this.initKeywords(), Object(o.k)(this.rawSlot.keywords, t) ? [this.rawSlot.keywords[t]] : []
                } catch (t) {
                    return this.reportError(t, "getTargeting"), []
                }
            }
        }, {
            key: "clearTargeting",
            value: function(t) {
                try {
                    this.initKeywords(), delete this.rawSlot.keywords[t]
                } catch (t) {
                    this.reportError(t, "clearTargeting")
                }
            }
        }]) && l(e.prototype, t), Object.defineProperty(e, "prototype", {
            writable: !1
        }), r
    }(e.a);

    function O(t) {
        return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function v(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, T(r.key), r)
        }
    }

    function j(t, e) {
        return (j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function S(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function w(t) {
        return (w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function T(t) {
        return t = function(t, e) {
            if ("object" !== O(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== O(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === O(t) ? t : String(t)
    }
    var D = function(t) {
            var e = r;
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t && j(e, t);
            var n = function(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = w(t);
                    n = e ? (n = w(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
                    if (n && ("object" === O(n) || "function" == typeof n)) return n;
                    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                    return S(r)
                }
            }(r);

            function r() {
                var t = this,
                    e = r;
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                for (var o, i, a = arguments.length, c = new Array(a), s = 0; s < a; s++) c[s] = arguments[s];
                return e = S(t = n.call.apply(n, [this].concat(c))), i = !0, (o = T(o = "isSupported")) in e ? Object.defineProperty(e, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = i, t
            }
            return e = r, (t = [{
                key: "reportError",
                value: function(t, e) {
                    Object(i.b)(t, "AppNexusAdServer-".concat(e))
                }
            }, {
                key: "cmdQueuePush",
                value: function(t) {
                    try {
                        window.apntag.anq.push(t)
                    } catch (t) {
                        this.reportError(t, "cmdQueuePush")
                    }
                }
            }, {
                key: "setTargeting",
                value: function(t, e) {
                    try {
                        Object(o.k)(window, "apntag") && Object(o.k)(window.apntag, "requests") && (Object(o.k)(window.apntag.requests, "keywords") || (window.apntag.requests.keywords = {}), window.apntag.requests.keywords[t] = e)
                    } catch (t) {
                        this.reportError(t, "setTargeting")
                    }
                }
            }, {
                key: "getTargeting",
                value: function(t) {
                    try {
                        if (!Object(o.k)(window, "apntag") || !Object(o.k)(window.apntag, "requests")) return [];
                        Object(o.k)(window.apntag.requests, "keywords") || (window.apntag.requests.keywords = {});
                        var e = window.apntag.requests.keywords[t];
                        return void 0 === e ? [] : [e]
                    } catch (t) {
                        return this.reportError(t, "getTargeting"), []
                    }
                }
            }, {
                key: "clearTargeting",
                value: function(t) {
                    try {
                        Object(o.k)(window, "apntag") && Object(o.k)(window.apntag, "requests") && Object(o.k)(window.apntag.requests, "keywords") && delete window.apntag.requests.keywords[t]
                    } catch (t) {
                        this.reportError(t, "clearTargeting")
                    }
                }
            }, {
                key: "hasAdServerObjectLoaded",
                value: function() {
                    try {
                        return Object(o.k)(window, "apntag") && Object(o.k)(window.apntag, "loaded") && !0 === window.apntag.loaded
                    } catch (t) {
                        return this.reportError(t, "hasAdServerObjectLoaded"), !1
                    }
                }
            }, {
                key: "isCommandQueueDefined",
                value: function() {
                    try {
                        return Object(o.k)(window, "apntag") && Object(o.k)(window.apntag, "anq")
                    } catch (t) {
                        return this.reportError(t, "isCommandQueueDefined"), !1
                    }
                }
            }, {
                key: "getSlots",
                value: function() {
                    try {
                        var t = [];
                        return Object(o.k)(window, "apntag") && Object(o.k)(window.apntag, "requests") && Object(o.k)(window.apntag.requests, "tags") && Object(o.j)(window.apntag.requests.tags) && Object.keys(window.apntag.requests.tags).forEach((function(e) {
                            e = window.apntag.requests.tags[e], t.push(new h(e))
                        })), t
                    } catch (t) {
                        return this.reportError(t, "getSlots"), []
                    }
                }
            }]) && v(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), r
        }(r.a),
        _ = n(30);

    function I(t) {
        return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function E(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, R(r.key), r)
        }
    }

    function k(t, e) {
        return (k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function C(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function A(t) {
        return (A = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function P(t, e, n) {
        (e = R(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function R(t) {
        return t = function(t, e) {
            if ("object" !== I(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== I(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === I(t) ? t : String(t)
    }
    var z = function(t) {
            var e = r;
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t && k(e, t);
            var n = function(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = A(t);
                    n = e ? (n = A(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
                    if (n && ("object" === I(n) || "function" == typeof n)) return n;
                    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                    return C(r)
                }
            }(r);

            function r() {
                var t = this,
                    e = r;
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                return P(C(t = n.call.apply(n, [this].concat(i))), "isSupported", !0), P(C(t), "needNewBidObject", !0), t
            }
            return e = r, (t = [{
                key: "reportError",
                value: function(t, e) {
                    Object(i.b)(t, "SmartAdServer-".concat(e))
                }
            }, {
                key: "cmdQueuePush",
                value: function(t) {
                    try {
                        window.sas.cmd.push(t)
                    } catch (t) {
                        this.reportError(t, "cmdQueuePush")
                    }
                }
            }, {
                key: "hasAdServerObjectLoaded",
                value: function() {
                    try {
                        return Object(o.k)(window, "sas") && Object(o.k)(window.sas, "__smartLoaded") && !0 === window.sas.__smartLoaded
                    } catch (t) {
                        return this.reportError(t, "hasAdServerObjectLoaded"), !1
                    }
                }
            }, {
                key: "isCommandQueueDefined",
                value: function() {
                    try {
                        return Object(o.k)(window, "sas") && Object(o.k)(window.sas, "cmd")
                    } catch (t) {
                        return this.reportError(t, "isCommandQueueDefined"), !1
                    }
                }
            }]) && E(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), r
        }(r.a),
        x = n(3),
        F = new r.a;

    function U(t) {
        try {
            switch (t) {
                case "appnexus":
                    Object(x.c)("adServer", t), F = new D;
                    break;
                case "googletag":
                    Object(x.c)("adServer", t), F = new _.a;
                    break;
                case "sas":
                    Object(x.c)("adServer", t), F = new z;
                    break;
                default:
                    "string" == typeof t ? Object(x.c)("adServer", "invalid-".concat(t)) : Object(x.c)("adServer", "none"), F = new r.a
            }
        } catch (t) {
            Object(i.b)(t, "setDisplayAdServer")
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return d
    })), n.d(e, "b", (function() {
        return g
    })), n.d(e, "d", (function() {
        return D
    })), n.d(e, "c", (function() {
        return I
    })), n.d(e, "e", (function() {
        return k
    }));
    var r = n(2),
        o = n(5),
        i = n(0),
        a = n(4),
        c = n(10),
        s = n(3),
        u = n(1),
        l = ["getLog", "getState"];

    function d(t, e, n) {
        try {
            switch (Object(i.h)(l, t) && (Object(u.b)(new Error("Debug call made: ".concat(t)), "debugPublicApi-call-".concat(t)), l = l.filter((function(e) {
                return e !== t
            }))), t) {
                case "getLog":
                    return r.a.getState().eventLog;
                case "getState":
                    return r.a.getState();
                case "enable":
                    return _("fake_bids", !0), "DEBUG MODE ENABLED";
                case "disable":
                    return _("fake_bids", !1), "DEBUG MODE DISABLED";
                case "enableConsole":
                    return g(!1, "command"), "Debug console enabled";
                case "enableConsoleV2":
                    return g(!0, "command"), "Debug console v2 enabled";
                case "disableConsole":
                    try {
                        _("console", !1), _("console_v2", !1), null !== f && document.body.removeChild(f), m = !1, Object(o.b)() && o.a.getDefault().localStorage.removeItem(a.f)
                    } catch (e) {
                        Object(u.b)(e, "disableDebugConsole", {
                            makeVisibleToAllUsers: !0
                        })
                    }
                    return "Debug console disabled";
                case "setDebug":
                    return (_(e, n) ? "Set debug mode '" : "Failed to set debug mode '").concat(e, "' to '").concat(n, "'");
                default:
                    return "unknown debug argument"
            }
        } catch (e) {
            return Object(u.b)(e, "debugPublicApi", {
                makeVisibleToAllUsers: !0
            }), "error"
        }
    }
    var f, b, p, y, m = !1;

    function g() {
        var t, e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            n = 1 < arguments.length ? arguments[1] : void 0;
        try {
            _(e ? "console_v2" : "console", !0), m || (t = {
                url: e ? r.a.getState().cfg.DEBUG_APP_HTML_V2 : r.a.getState().cfg.DEBUG_APP_HTML,
                onload: h,
                onerror: function() {
                    return Object(u.b)(new Error("Error Loading Debug Console"), "enableDebugConsole-".concat(e ? "v2" : "v1", "-onerror"), {
                        makeVisibleToAllUsers: !0
                    })
                }
            }, Object(c.d)(t), setTimeout((function() {
                try {
                    var t = {
                        _type: "debugLoad",
                        mode: e ? 2 : 1
                    };
                    Object(i.k)(r.a.getState().config, "pubID") && (t.src = r.a.getState().config.pubID), null !== n && (t.method = n), Object(s.b)(t)
                } catch (t) {
                    Object(u.b)(t, "enableDebugConsole-setTimeout", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }), 5e3))
        } catch (t) {
            Object(u.b)(t, "enableDebugConsole", {
                makeVisibleToAllUsers: !0
            })
        }
    }

    function h(t) {
        try {
            var e = t.responseText,
                n = (f = document.createElement("div"), b = document.createElement("div"), p = document.createElement("iframe"), 200);
            D("console_v2") && (n = 330), Object(o.b)() && null !== o.a.getDefault().localStorage.getItem(a.f) && (n = parseInt(o.a.getDefault().localStorage.getItem(a.f), 10)), (isNaN(n) || n > window.innerHeight) && (n = 200), f.style.background = "#eaeded", f.style.zIndex = "2147483647", f.style.bottom = "0", f.style.position = "fixed !important", f.style.display = "block !important", f.style.left = "0", f.style.right = "0", f.style.height = "".concat(n, "px"), b.style.cursor = "row-resize", b.style.height = "2px", b.style.position = "absolute", b.style.top = "0", b.style.left = "0", b.style.right = "0", b.style.backgroundColor = "RGBA(0,0,0,0)", f.appendChild(b), p.frameBorder = "0", p.marginHeight = "0", p.marginWidth = "0", p.scrolling = "no", p.id = "apstag-debug-iframe", p.src = "about:blank", p.style.display = "block", p.style.width = "100%", p.style.height = "".concat(n, "px"), f.appendChild(p), document.body.appendChild(f), null !== p.contentDocument && (p.contentDocument.open(), p.contentDocument.write(e), p.contentDocument.close()), b.addEventListener("mousedown", j)
        } catch (t) {
            Object(u.b)(t, "renderDebugConsole", {
                makeVisibleToAllUsers: !0
            })
        }
    }

    function O(t) {
        try {
            var e = window.innerHeight - t.clientY;
            return e < 200 && (e = 200), f.style.height = "".concat(e, "px"), p.style.height = "".concat(e, "px"), e
        } catch (t) {
            return Object(u.b)(t, "resizeDebugConsole", {
                makeVisibleToAllUsers: !0
            }), 200
        }
    }

    function v(t) {
        try {
            return t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), t.cancelBubble = !0, t.returnValue = !1
        } catch (t) {
            return Object(u.b)(t, "preventEvent", {
                makeVisibleToAllUsers: !0
            }), !1
        }
    }

    function j() {
        try {
            void 0 === y && ((y = document.createElement("div")).style.position = "fixed", y.style.left = "0", y.style.right = "0", y.style.top = "0", y.style.bottom = "0", y.style.zIndex = "9999999999"), f.appendChild(y), window.addEventListener("mouseup", w), window.addEventListener("mousemove", S)
        } catch (t) {
            Object(u.b)(t, "resizeBarMouseDownListener", {
                makeVisibleToAllUsers: !0
            })
        }
    }

    function S(t) {
        try {
            return O(t), v(t)
        } catch (t) {
            return Object(u.b)(t, "resizeBarMouseMoveListener", {
                makeVisibleToAllUsers: !0
            }), !1
        }
    }

    function w(t) {
        try {
            null !== y && f.removeChild(y), window.removeEventListener("mousemove", S), window.removeEventListener("mouseup", w);
            var e = O(t);
            return Object(o.b)() && o.a.getDefault().localStorage.setItem(a.f, "".concat(e)), v(t)
        } catch (t) {
            return Object(u.b)(t, "resizeBarMouseUpListener", {
                makeVisibleToAllUsers: !0
            }), !1
        }
    }

    function T() {
        try {
            if (!Object(o.b)()) return [];
            var t = o.a.getDefault().localStorage.getItem(a.h, {
                    ignoreFailure: !0
                }),
                e = (null === t || "false" === t ? t = "[]" : "true" === t && (t = '["fake_bids"]'), []);
            try {
                e = JSON.parse(t)
            } catch (t) {}
            return (e = Object(i.i)(e) ? e : []).filter((function(t) {
                return Object(i.h)(a.A, t)
            }))
        } catch (t) {
            return []
        }
    }

    function D(t) {
        try {
            return Object(i.h)(T(), t)
        } catch (t) {
            return !1
        }
    }

    function _(t, e) {
        try {
            var n;
            if (Object(o.b)() && -1 !== a.A.indexOf(t)) return n = T(), e && -1 === n.indexOf(t) ? n.push(t) : e || (n = n.filter((function(e) {
                return e !== t
            }))), 0 === n.length ? o.a.getDefault().localStorage.removeItem(a.h) : o.a.getDefault().localStorage.setItem(a.h, JSON.stringify(n)), k(), 1
        } catch (e) {
            Object(u.b)(e, "setDebugMode")
        }
    }

    function I(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        try {
            if (Object(i.k)(window, a.g) && Object(i.k)(window[a.g], t)) return window[a.g][t]
        } catch (t) {
            Object(u.b)(t, "getDebugValue")
        }
        return e
    }
    var E = [];

    function k() {
        try {
            T().filter((function(t) {
                return -1 === E.indexOf(t)
            })).forEach((function(t) {
                Object(u.b)(new Error("Debug method enabled: ".concat(t)), "debugPublicApi-enabled-".concat(t), {
                    makeVisibleToAllUsers: !0
                }), E.push(t)
            }))
        } catch (t) {
            Object(u.b)(t, "pixelDebugModes")
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "c", (function() {
        return f
    })), n.d(e, "j", (function() {
        return b
    })), n.d(e, "g", (function() {
        return p
    })), n.d(e, "h", (function() {
        return y
    })), n.d(e, "d", (function() {
        return m
    })), n.d(e, "e", (function() {
        return g
    })), n.d(e, "f", (function() {
        return h
    })), n.d(e, "i", (function() {
        return v
    })), n.d(e, "b", (function() {
        return j
    })), n.d(e, "a", (function() {
        return S
    })), n.d(e, "k", (function() {
        return w
    }));
    var r = n(8),
        o = n(0),
        i = n(5),
        a = n(1),
        c = n(4),
        s = n(2),
        u = n(3),
        l = n(15);

    function d(t) {
        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function f(t) {
        try {
            return t.split("_").pop()
        } catch (t) {
            return Object(a.b)(t, "getAmpAmznBidValue"), ""
        }
    }

    function b(t) {
        try {
            return !Object(o.k)(t, "slots")
        } catch (t) {
            return Object(a.b)(t, "isAAXPunt"), !0
        }
    }

    function p(t) {
        try {
            var e, n = Object(r.c)("url");
            if (null !== n) return encodeURIComponent(n);
            try {
                w(t, !1) ? (Object(u.c)("ampAdContext", "getCurrentUrl"), e = null, t.context && (e = t.context.canonicalUrl || t.context.sourceUrl)) : e = t.top.location.href
            } catch (t) {
                e = null
            }
            if (null === e || !e || void 0 === e) {
                e = "";
                try {
                    t.top !== t.self && (e = t.document.referrer)
                } catch (t) {}
            }
            return encodeURIComponent(e)
        } catch (t) {
            return Object(a.b)(t, "getCurrentUrl"), ""
        }
    }

    function y(t) {
        try {
            var e, n = "",
                o = Object(r.c)("url");
            if (null !== o) return encodeURIComponent(o);
            try {
                try {
                    e = (w(t, !1) && (Object(u.c)("ampAdContext", "getReferrerUrl"), t.context) || t.top.document).referrer
                } catch (n) {
                    e = t.document.referrer
                }
                n = encodeURIComponent(e)
            } catch (n) {}
            return n
        } catch (n) {
            return Object(a.b)(n, "getReferrerUrl"), ""
        }
    }

    function m() {
        try {
            var t = {
                cookiesParams: ""
            };
            return c.j.forEach((function(e, n) {
                (n = i.a.getDefault().cookie.getItem(n)) && (t.cookiesParams += "&".concat(e, "=").concat(n))
            })), t
        } catch (t) {
            return Object(a.b)(t, "getApsFirstPartyCookies"), {
                cookiesParams: ""
            }
        }
    }

    function g(t, e) {
        try {
            var n = Object(l._getInitConfig)({
                    overrides: null == e ? void 0 : e.initConfig
                }).blockedBidders,
                r = (Object(o.k)(t, "blockedBidders") && Object(o.i)(t.blockedBidders) && (n = t.blockedBidders), "");
            return Object(o.i)(n) ? JSON.stringify(n) : r
        } catch (t) {
            return Object(a.b)(t, "getBlockedBidders", {
                makeVisibleToAllUsers: !0
            }), ""
        }
    }

    function h() {
        try {
            var t;
            return Object(i.b)() ? (t = s.a.getState(), Object(o.k)(t, "cfg") && Object(o.k)(t.cfg, "v") && -1 !== t.cfg.v ? t.cfg.v : null) : c.q
        } catch (t) {
            return Object(a.b)(t, "getCfgVersion"), null
        }
    }

    function O(t) {
        try {
            if (-1 === ["string", "number"].indexOf(d(t))) return !1;
            var e = Math.floor(Number(t));
            if (e > c.o) return e
        } catch (t) {
            Object(a.b)(t, "parseTimeout", {
                makeVisibleToAllUsers: !0
            })
        }
        return !1
    }

    function v(t, e) {
        try {
            var n = O(t.timeout);
            return !1 === (n = !1 === n ? O(e.config.bidTimeout) : n) ? O(e.cfg.DEFAULT_TIMEOUT) : n
        } catch (t) {
            return Object(a.b)(t, "getTimeout", {
                makeVisibleToAllUsers: !0
            }), 2e3
        }
    }

    function j(t, e) {
        var n, r = !1;

        function o(e) {
            if (!r) try {
                t(e)
            } catch (e) {
                Object(a.b)(e, "executeFunctionOnceWithTimeout-wrappedFunction", {
                    makeVisibleToAllUsers: !0
                })
            }
            clearTimeout(n), r = !0
        }
        try {
            return n = setTimeout(o, e, !0), o.bind(null, !1)
        } catch (e) {
            return Object(a.b)(e, "executeFunctionOnceWithTimeout", {
                    makeVisibleToAllUsers: !0
                }),
                function() {}
        }
    }

    function S(t) {
        var e = !1;
        return function(n) {
            if (!e) try {
                t(n)
            } catch (n) {
                Object(a.b)(n, "executeFunctionOnceWithTimeout-wrappedFunction", {
                    makeVisibleToAllUsers: !0
                })
            }
            e = !0
        }
    }

    function w(t, e) {
        try {
            var n = e ? t.AMP_CONTEXT_DATA : t.context;
            return Boolean(n && Object(o.k)(n, "tagName") && "AMP-AD" === n.tagName)
        } catch (t) {
            return Object(a.b)(t, "isInAmpAd"), !1
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "d", (function() {
        return i
    })), n.d(e, "b", (function() {
        return a
    })), n.d(e, "a", (function() {
        return c
    })), n.d(e, "c", (function() {
        return s
    }));
    var r = n(1);

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t) {
        var e, n = t.url,
            i = t.onload,
            a = t.onerror,
            c = t.ontimeout,
            s = t.withCredentials,
            u = void 0 === (u = t.body) ? null : u,
            l = void 0 === (e = t.headers) ? null : e,
            d = (t = void 0 === (e = t.trustTokenParameter) ? null : e, new window.XMLHttpRequest);
        try {
            if ("" === n) void 0 !== a && a.call(d, "error");
            else {
                d.onload = i.bind(null, d), void 0 !== a && (d.onerror = a), void 0 !== c && (d.ontimeout = c), void 0 !== s && (d.withCredentials = s);
                var f = null !== u ? "POST" : "GET";
                d.open(f, n), null !== l && "object" === o(l) && Object.keys(l).forEach((function(t) {
                    d.setRequestHeader(t, l[t])
                }));
                try {
                    null !== t && "object" === o(t) && window.location === window.parent.location && d.setTrustToken(t)
                } catch (t) {
                    Object(r.b)(t, "setTrustToken")
                }
                d.send(u)
            }
        } catch (t) {
            void 0 !== a && a.call(d, "error"), Object(r.b)(t, "xhrRequest")
        }
    }

    function a(t, e, n, o) {
        try {
            if (void 0 === n && (n = document), void 0 === t) return "function" == typeof e && e(!0), !1;
            var i = n.getElementsByTagName("script")[0] || n.body.firstChild,
                a = n.createElement("script");
            if (a.type = "text/javascript", a.async = !0, a.src = t, e && c(a, e), c(a, o || function() {
                    Object(r.b)(new Error("Error Loading Script Tag"), "loadScriptTag-onerror")
                }, [], "onerror"), null !== i.parentNode) return i.parentNode.insertBefore(a, i), !0
        } catch (t) {
            Object(r.b)(t, "loadScriptTag", {
                makeVisibleToAllUsers: !0
            })
        }
        return !1
    }

    function c(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
            o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "onload";
        try {
            return "function" == typeof e && (t[o] = function() {
                e.apply(null, n)
            }, !0)
        } catch (t) {
            return Object(r.b)(t, "addCallbackFunction"), !1
        }
    }

    function s(t) {
        try {
            return encodeURIComponent(JSON.stringify(t))
        } catch (t) {
            return Object(r.b)(t, "objToUrlParam"), ""
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return k
    })), n.d(e, "b", (function() {
        return C
    })), n.d(e, "h", (function() {
        return A
    })), n.d(e, "d", (function() {
        return P
    })), n.d(e, "g", (function() {
        return R
    })), n.d(e, "c", (function() {
        return z
    })), n.d(e, "f", (function() {
        return x
    })), n.d(e, "e", (function() {
        return F
    }));
    var r = n(2),
        o = n(8),
        i = n(4),
        a = n(0),
        c = n(10),
        s = n(1),
        u = n(9),
        l = n(14),
        d = n(6),
        f = n(20),
        b = n(3),
        p = n(12),
        y = n(17),
        m = n(29),
        g = n(15),
        h = n(13);

    function O(t) {
        return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function v(t) {
        return function(t) {
            if (Array.isArray(t)) return D(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || T(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function j(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function S(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? j(Object(n), !0).forEach((function(e) {
                I(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function w(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
                var r, o, i, a, c = [],
                    s = !0,
                    u = !1;
                try {
                    if (i = (n = n.call(t)).next, 0 === e) {
                        if (Object(n) !== n) return;
                        s = !1
                    } else
                        for (; !(s = (r = i.call(n)).done) && (c.push(r.value), c.length !== e); s = !0);
                } catch (t) {
                    u = !0, o = t
                } finally {
                    try {
                        if (!s && null != n.return && (a = n.return(), Object(a) !== a)) return
                    } finally {
                        if (u) throw o
                    }
                }
                return c
            }
        }(t, e) || T(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function T(t, e) {
        var n;
        if (t) return "string" == typeof t ? D(t, e) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? D(t, e) : void 0
    }

    function D(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function _(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, E(r.key), r)
        }
    }

    function I(t, e, n) {
        (e = E(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function E(t) {
        return t = function(t, e) {
            if ("object" !== O(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== O(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === O(t) ? t : String(t)
    }
    var k = function() {
            function t(e) {
                if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function");
                I(this, "bidConfig", void 0), I(this, "bidState", i.c.new), I(this, "_targetingSetID", void 0), I(this, "timing", {
                    setAtTimes: []
                }), I(this, "pixelSent", !1), I(this, "useSafeFrames", !1), I(this, "bidReqID", ""), I(this, "host", void 0), I(this, "ev", void 0), I(this, "cfe", void 0), I(this, "isAmp", !1), I(this, "doc", void 0), I(this, "inheritSize", void 0), this.bidConfig = e, this._targetingSetID = Object(a.d)(), r.a.getState().config.useSafeFrames && (this.useSafeFrames = !0), this.useSafeFrames && Object(a.k)(e, "targeting") && e.targeting.push("amznhost"), Object(a.k)(e, "meta") ? Object(a.i)(e.meta) || (this.reportError({
                    name: "TypeError",
                    message: "'meta' is not an 'array': ".concat(JSON.stringify(e.meta))
                }, "constructor-meta"), e.meta = []) : e.meta = [];
                try {
                    var n = "d",
                        o = (this.bidConfig.mediaType !== d.a.VIDEO && "v" !== this.bidConfig.mediaType || (n = "v"), []);
                    Object(a.k)(this.bidConfig, "amzndeals") && (Object(b.c)("bidType", "".concat(n, "-amzndeals")), o = this.bidConfig.amzndeals.map((function(t) {
                        return "".concat(t, "amzniid")
                    }))), this.bidConfig.targeting.filter((function(t) {
                        return -1 !== t.indexOf("amzniid") && !Object(a.h)(o, t)
                    })).forEach((function(t) {
                        return Object(b.c)("bidType", "".concat(n, "-").concat(t))
                    })), Object(a.k)(this.bidConfig, "fif") && "1" === this.bidConfig.fif ? Object(b.c)("bidRender", "friendly") : Object(b.c)("bidRender", "unfriendly")
                } catch (e) {
                    this.reportError(e, "pixeling")
                }
            }
            var e, n;
            return e = t, (n = [{
                key: "reportError",
                value: function(t, e, n) {
                    Object(s.b)(t, "Bid-".concat(e), n)
                }
            }, {
                key: "mediaType",
                get: function() {
                    var t = "d";
                    return this.bidConfig.mediaType !== d.a.VIDEO && "v" !== this.bidConfig.mediaType && "v" !== this.bidConfig.mediaType_sp ? t : d.a.VIDEO
                }
            }, {
                key: "targeting",
                get: function() {
                    var t = this;
                    try {
                        return this.bidConfig.targeting.map((function(e) {
                            return "amznhost" === e ? [e, encodeURIComponent(t.host)] : Object(a.k)(t.bidConfig, e) && Object(a.i)(t.bidConfig[e]) ? [e, encodeURIComponent(t.bidConfig[e].join(","))] : Object(a.k)(t.bidConfig, e) ? [e, encodeURIComponent(t.bidConfig[e])] : [e, ""]
                        })).map((function(t) {
                            var e = (t = w(t, 2))[0];
                            t = t[1];
                            return "&".concat(e, "=").concat(t)
                        })).join("")
                    } catch (t) {
                        return this.reportError(t, "targeting"), ""
                    }
                }
            }, {
                key: "bidObject",
                get: function() {
                    try {
                        var t = {
                            slotID: this.bidConfig.slotID,
                            amzniid: this.bidConfig.amzniid,
                            amznbid: this.bidConfig.amznbid,
                            amznp: this.bidConfig.amznp,
                            amznsz: this.bidConfig.amznsz,
                            size: this.bidConfig.amznsz
                        };
                        return this.bidConfig.amznactt && (t.amznactt = this.bidConfig.amznactt), this.mediaType === d.a.VIDEO && (t.mediaType = d.a.VIDEO, t.qsParams = this.targeting, t.encodedQsParams = encodeURIComponent(this.targeting), t.r_amznbid = this.bidConfig.r_amznbid, t.r_amzniid = this.bidConfig.r_amzniid, t.r_amznp = this.bidConfig.r_amznp), this.useSafeFrames && (t.amznhost = this.host), t
                    } catch (t) {
                        return this.reportError(t, "bidObject", {
                            makeVisibleToAllUsers: !0
                        }), {
                            slotID: "",
                            amzniid: "error",
                            amznbid: "error",
                            amznp: "error",
                            amznsz: "error",
                            size: "error"
                        }
                    }
                }
            }, {
                key: "newBidObject",
                get: function() {
                    var t = this;
                    try {
                        var e = {
                                slotID: this.bidConfig.slotID,
                                size: this.bidConfig.amznsz,
                                mediaType: this.mediaType,
                                targeting: {},
                                helpers: {
                                    targetingKeys: this.bidConfig.targeting,
                                    qsParams: function() {
                                        return t.targeting
                                    },
                                    encodedQsParams: function() {
                                        return encodeURIComponent(t.targeting)
                                    }
                                }
                            },
                            n = ["slotID", "size", "mediaType"];
                        return this.bidConfig.meta.filter((function(t) {
                            return -1 === n.indexOf(t)
                        })).forEach((function(n) {
                            e[n] = t.bidConfig[n]
                        })), this.bidConfig.targeting.forEach((function(n) {
                            e.targeting[n] = "amznhost" === n ? t.host : t.bidConfig[n]
                        })), void 0 !== this.slotID && -1 !== this.slotID.indexOf("_") && (e.sasTargeting = e.helpers.targetingKeys.map((function(n) {
                            return "".concat(n, "_").concat(t.slotID.split("_")[1], "=").concat(e.targeting[n])
                        })).join(";")), e
                    } catch (t) {
                        return this.reportError(t, "newBidObject", {
                            makeVisibleToAllUsers: !0
                        }), {
                            slotID: "",
                            size: "",
                            mediaType: "d",
                            targeting: {},
                            helpers: {
                                targetingKeys: [],
                                qsParams: function() {
                                    return ""
                                },
                                encodedQsParams: function() {
                                    return ""
                                }
                            }
                        }
                    }
                }
            }, {
                key: "slotID",
                get: function() {
                    try {
                        return this.bidConfig.slotID
                    } catch (t) {
                        return this.reportError(t, "slotID"), ""
                    }
                }
            }, {
                key: "matchesBidCacheId",
                value: function(t) {
                    var e = this;
                    try {
                        return this.bidConfig.targeting.reduce((function(n, r) {
                            return n || -1 !== r.indexOf("amzniid") && e.bidConfig[r] === t
                        }), !1)
                    } catch (t) {
                        return this.reportError(t, "matchesBidCacheId"), !1
                    }
                }
            }]) && _(e.prototype, n), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t
        }(),
        C = Object(a.e)(i.s);

    function A(t) {
        var e = "validateSupplyChainObject",
            n = !1;

        function r(t, r) {
            return Object(s.b)({
                name: "TypeError",
                message: r
            }, "".concat(e, "-").concat(t), {
                makeVisibleToAllUsers: !0
            }), !(n = !0)
        }
        try {
            return Object(a.j)(t) ? (Object(a.k)(t, "complete") ? -1 === [1, 0].indexOf(t.complete) && r("schain-complete-type", "The `schain.complete` property must be a `1` or `0`") : r("schain-complete", "The `schain.complete` property must be provided"), Object(a.k)(t, "ver") ? Object(p.b)(t.ver, ["string"]) || r("schain-ver-type", "The `schain.ver` property must be a string") : r("schain-ver", "The `schain.ver` property must be provided"), Object(a.k)(t, "nodes") ? Object(a.i)(t.nodes) ? t.nodes.reduce((function(t, e) {
                return Object(a.j)(e) ? (Object(a.k)(e, "asi") ? Object(p.b)(e.asi, ["string"]) || r("schain-node-asi-type", "All `schain.nodes` items must have an `asi` property of type `string`") : r("schain-node-asi", "All `schain.nodes` items must have an `asi` property"), Object(a.k)(e, "sid") ? Object(p.b)(e.sid, ["string"]) || r("schain-node-sid-type", "All `schain.nodes` items must have an `sid` property of type `string`") : r("schain-node-sid", "All `schain.nodes` items must have an `sid` property"), Object(a.k)(e, "hp") ? -1 === [1, 0].indexOf(e.hp) && r("schain-node-hp-type", "All `schain.nodes` items must have an `hp` property which is `1` or `0`") : r("schain-node-hp", "All `schain.nodes` items must have an `hp` property"), Object(p.b)(e.rid, ["string", "undefined"]) || r("schain-node-rid-type", "If provided, the `rid` property on an `schain.nodes` item must be of type `string`"), Object(p.b)(e.name, ["string", "undefined"]) || r("schain-node-name-type", "If provided, the `name` property on an `schain.nodes` item must be of type `string`"), Object(p.b)(e.domain, ["string", "undefined"]) || r("schain-node-domain-type", "If provided, the `domain` property on an `schain.nodes` item must be of type `string`"), t && !n) : r("schain-node-type", "All `schain.nodes` items must be objects")
            }), !n) : r("schain-nodes-type", "The `schain.nodes` property must be an `Array`") : r("schain-nodes", "The `schain.nodes` property must be provided")) : r("schain", "The `schain` value must be an object")
        } catch (t) {
            return Object(s.b)(t, e, {
                makeVisibleToAllUsers: !0
            }), !1
        }
    }

    function P(t, e, n, l, p) {
        try {
            var O, j = r.a.getState(),
                w = t._endpointDomain || Object(o.c)("host", j.hosts.DEFAULT_AAX_BID_HOST),
                T = j.cfg.DTB_PATH,
                D = "bid",
                _ = (j.experiments.shouldUseTestBidEndpoint && null !== j.cfg.TEST_BID_ENDPOINT && (D = j.cfg.TEST_BID_ENDPOINT), {
                    src: Object(g._getInitConfig)({
                        overrides: null == p ? void 0 : p.initConfig
                    }).pubID,
                    u: null != p && p.contextURL ? encodeURIComponent(p.contextURL) : Object(u.g)(window),
                    pr: Object(u.h)(window),
                    pid: C,
                    cb: t.bidReqID,
                    ws: Object(a.g)(window),
                    v: i.l,
                    t: e,
                    slots: function(t) {
                        try {
                            return Object(c.c)(t.map((function(t) {
                                var e;
                                if (Object(a.k)(t, "mediaType") && t.mediaType === d.a.VIDEO || t.mediaType === d.a.MULTI_FORMAT) e = t.aaxSlot;
                                else {
                                    if (!(Object(a.k)(t, "sizes") && 0 < t.sizes.length && Object(a.k)(t, "slotID"))) return Object(s.b)({
                                        name: "SlotError",
                                        message: "There was an error with the configuration for this slot: ".concat(JSON.stringify(t.rawSlot))
                                    }, "buildSlotsUrlParam-invalidSlot", {
                                        makeVisibleToAllUsers: !0
                                    }), {
                                        id: "ERROR",
                                        mt: f.a.VIDEO,
                                        error: !0
                                    };
                                    var n = t.aaxSlot;
                                    Object(a.k)(t, "slotName") && t.slotName !== t.slotID ? (Object(b.c)("idRemap", "y"), n.sd = t.slotID, n.sn = t.slotName) : Object(b.c)("idRemap", "n"), e = n
                                }
                                return e
                            })).filter((function(t) {
                                return !0 !== t.error
                            })))
                        } catch (t) {
                            return Object(s.b)(t, "buildSlotsUrlParam", {
                                makeVisibleToAllUsers: !0
                            }), ""
                        }
                    }(t.validSlots),
                    pj: function(t, e) {
                        try {
                            var n = Object(a.j)(t.config.params) ? t.config.params : {},
                                r = Object(a.j)(e.params) ? e.params : {},
                                o = S(S({}, n), r);
                            return 0 === Object.keys(o).length ? "" : Object(c.c)(o)
                        } catch (t) {
                            return Object(s.b)(t, "getBidParams", {
                                makeVisibleToAllUsers: !0
                            }), ""
                        }
                    }(j, t),
                    sg: Object(m.a)(null == p ? void 0 : p.initConfig),
                    cfgv: Object(u.f)(),
                    bb: Object(u.e)(t),
                    schain: function(t, e) {
                        try {
                            var n, r, o = null == (n = Object(h.a)(null == e ? void 0 : e.pubID)) ? void 0 : n.read("ad/schain");
                            if (Object(a.k)(t.config, "schain")) r = t.config.schain;
                            else {
                                if (!o || !A(o)) return "";
                                r = o
                            }
                            return encodeURIComponent(["".concat(r.ver, ",").concat(r.complete)].concat(v(r.nodes.map((function(t) {
                                return ["asi", "sid", "hp", "rid", "name", "domain"].map((function(e) {
                                    return Object(a.k)(t, e) ? t[e] : ""
                                })).map((function(t) {
                                    return encodeURIComponent(t)
                                })).map((function(t) {
                                    return t.replace(/\!/g, "%21")
                                })).join(",")
                            })))).join("!"))
                        } catch (t) {
                            return Object(s.b)(t, "getSupplyChainObject", {
                                makeVisibleToAllUsers: !0
                            }), ""
                        }
                    }(j, null == p ? void 0 : p.initConfig)
                });
            try {
                var I, E, k, P, R, z, x, F, U, L = Object(h.a)(null == p || null == (I = p.initConfig) ? void 0 : I.pubID);
                L && (k = (E = L.read("consent/GPPData") || {}).gppString, P = E.applicableSections, R = 0 < (k || "").length, z = 0 < (P || []).length, R && (_.gpp = encodeURIComponent(k)), z && (_.gpp_sid = encodeURIComponent(JSON.stringify(P))), x = (F = {
                    isGPPPresent: R,
                    isSectionPresent: z
                }).isGPPPresent, F = F.isSectionPresent, "", U = x && F ? "all" : x ? "gpp" : F ? "section" : "none", Object(b.c)("gpp", U))
            } catch (t) {
                Object(s.b)(t, "gpp")
            }
            if ("[]" === _.slots || "" === _.slots) throw new Error("No slots available for bid request");
            r.a.dispatch({
                type: "RECORD_AAX_REQUEST",
                data: {
                    bidConfig: t,
                    bidReqID: t.bidReqID,
                    timeout: e,
                    ws: _.ws,
                    url: _.u,
                    rqTs: Date.now()
                }
            }), j.experiments.chunkRequests && (O = t.bidReqID.split("-"), r.a.dispatch({
                type: "RECORD_NETWORK_EXCHANGE",
                fid: O[0],
                networkID: parseInt(O[1], 10),
                timestamp: Date.now(),
                exchangeType: "request"
            })), Object(g._getInitConfig)({
                overrides: null == p ? void 0 : p.initConfig
            }).isSelfServePub && (_.pubid = _.src, _.src = 600);
            var M = Object(u.d)(),
                B = Object(o.c)("bidParams"),
                V = (Object(a.j)(B) && (_ = S(S({}, _), B)), Object(a.j)(n) && (Object(a.k)(n, "enabled") && (_.gdpre = encodeURIComponent(n.enabled)), Object(a.k)(n, "consent") && (_.gdprc = encodeURIComponent(n.consent)), Object(a.k)(n, "log")) && (_.gdprl = Object(c.c)(n.log)), Object(a.k)(Object(g._getInitConfig)({
                    overrides: null == p ? void 0 : p.initConfig
                }), "useSafeFrames") && Object(g._getInitConfig)({
                    overrides: null == p ? void 0 : p.initConfig
                }).useSafeFrames && (_.sf = "1"), Object(y.b)()),
                N = (V && (Object(b.c)("id", "bidReq-attachToken"), l.ids.at = V), _.vm = l && 0 !== Object.keys(l.ids).length ? Object(c.c)({
                    ids: l.ids,
                    md: l.md
                }) : "", Object.keys(_).filter((function(t) {
                    return Object(a.k)(_, t) && "undefined" !== _[t] && "" !== _[t] && null !== _[t]
                })).map((function(t) {
                    return "".concat(t, "=").concat(_[t])
                })).join("&")),
                q = (M.cookiesParams && (N += M.cookiesParams), "".concat(i.t).concat(w).concat(T, "/").concat(D, "?").concat(N));
            return r.a.dispatch({
                type: "RECORD_AAX_REQ_PROP",
                bidReqID: t.bidReqID,
                key: "urlLength",
                value: q.length
            }), q
        } catch (t) {
            return Object(s.b)(t, "buildBidUrl", {
                makeVisibleToAllUsers: !0
            }), ""
        }
    }

    function R(t, e) {
        try {
            return Object(a.k)(t, "deals") && !0 === t.deals || !0 === e.needNewBidObject
        } catch (t) {
            return Object(s.b)(t, "isNewBidObjectRequired"), !1
        }
    }

    function z(t, e, n) {
        try {
            var r = t.map(l.c),
                o = e.slots.filter(Object(l.d)(d.a.DISPLAY, d.a.MULTI_FORMAT)).map(l.c).filter((function(t) {
                    return !Object(a.h)(r, t)
                })),
                c = n ? i.v.bidInFlight : i.v.noBid;
            return t.concat(o.map((function(t) {
                return new k({
                    size: "0x0",
                    crid: "",
                    slotID: t,
                    mediaType: "d",
                    meta: ["slotID", "mediaType", "size"],
                    amznbid: c,
                    amzniid: "",
                    amznp: c,
                    amznsz: "0x0",
                    targeting: ["amzniid", "amznbid", "amznp", "amznsz"]
                })
            })))
        } catch (e) {
            return Object(s.b)(e, "addStateTrackingBidsToRealBids"), t
        }
    }

    function x(t, e) {
        try {
            var n;
            return !Object(a.h)(r.a.getState().displayAdServer.noBidSlotIDs, t.slotID) && (n = r.a.getState().AAXReqs.filter((function(e) {
                return e.bidReqID === t.bidReqID
            }))[0], !(Object(a.k)(n, "rqTs") && Date.now() - n.rqTs > 24e4 || Object(a.k)(n, "url") && !Object(a.b)(n.url, null != e && e.contextURL ? encodeURIComponent(e.contextURL) : Object(u.g)(window)) || t.bidState === i.c.rendered))
        } catch (e) {
            return Object(s.b)(e, "isBidEligible"), !1
        }
    }

    function F(t, e) {
        try {
            var n = t.map(l.c),
                o = r.a.getState();
            return Object.keys(o.slotBids).filter((function(t) {
                return Object(a.h)(n, t)
            })).reduce((function(t, n) {
                var a = o.slotBids[n].filter((function(t) {
                    return t.bidState === i.c.new
                })).filter((function(t) {
                    return x(t, e)
                }));
                return 0 < a.length && (a = a[a.length - 1], r.a.dispatch({
                    type: "BID_STATE_CHANGE",
                    slotID: n,
                    _targetingSetID: a._targetingSetID,
                    bidState: i.c.exposed
                }), t[n] = a), t
            }), {})
        } catch (t) {
            return Object(s.b)(t, "getNewSlotBidsAndExposeForRequestedSlots"), {}
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    })), n.d(e, "b", (function() {
        return c
    }));
    var r = n(1),
        o = n(0);

    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t) {
        try {
            return function(t) {
                try {
                    var e;
                    return !!c(t, ["number", "string"]) && !(isNaN(t) || "number" != typeof t && (e = parseInt(t, 10), isNaN(e)))
                } catch (t) {
                    return Object(r.b)(t, "isNumber"), !0
                }
            }(t) || void 0 === t
        } catch (t) {
            return Object(r.b)(t, "isNumberOrUndefined"), !0
        }
    }

    function c(t, e) {
        try {
            return Object(o.h)(e, i(t))
        } catch (t) {
            return Object(r.b)(t, "isVarOfTypes"), !0
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return d
    }));
    var r = n(2);

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function a(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, s(r.key), r)
        }
    }

    function c(t, e, n) {
        (e = s(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function s(t) {
        return t = function(t, e) {
            if ("object" !== o(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== o(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === o(t) ? t : String(t)
    }
    var u = function() {
            function t(e) {
                if (e = e.accountID, !(this instanceof t)) throw new TypeError("Cannot call a class as a function");
                c(this, "accountID", void 0), this.accountID = e, this.init()
            }
            var e, n;
            return e = t, (n = [{
                key: "queue",
                get: function() {
                    var t;
                    return null == (t = window._aps.get(this.accountID)) ? void 0 : t.queue
                }
            }, {
                key: "init",
                value: function() {
                    window._aps = window._aps || new Map, window._aps.has(this.accountID) || window._aps.set(this.accountID, {
                        queue: [],
                        store: new Map
                    })
                }
            }, {
                key: "record",
                value: function(t, e) {
                    var n = this;
                    return new Promise((function(r, o) {
                        window._aps.get(n.accountID).queue.push(new window.CustomEvent(t, {
                            detail: function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? i(Object(n), !0).forEach((function(e) {
                                        c(t, e, n[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                    }))
                                }
                                return t
                            }({
                                resolve: r,
                                reject: o,
                                source: "apstag"
                            }, e)
                        }))
                    }))
                }
            }, {
                key: "read",
                value: function(t) {
                    var e;
                    return null == (e = window._aps) ? void 0 : e.get(this.accountID).store.get(t)
                }
            }]) && a(e.prototype, n), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t
        }(),
        l = {},
        d = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r.a.getState().config.pubID;
            return t && 0 !== (t = "string" != typeof t ? t.toString() : t).length ? (window._aps && window._aps.has(t) && l[t] || (l[t] = new u({
                accountID: t
            })), l[t]) : null
        }
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return i
    })), n.d(e, "a", (function() {
        return a
    })), n.d(e, "d", (function() {
        return c
    })), n.d(e, "c", (function() {
        return s
    }));
    var r = n(1),
        o = n(0);

    function i(t) {
        var e = [];
        try {
            t.hasAdServerObjectLoaded() && (e = t.getSlots())
        } catch (t) {
            Object(r.b)(t, "getDisplayAdServerSlots")
        }
        return e
    }

    function a(t) {
        try {
            return Object(o.k)(t, "sizes") && Object(o.i)(t.sizes) && 0 !== t.sizes.length
        } catch (t) {
            return Object(r.b)(t, "doesSlotHaveSizes"), !1
        }
    }

    function c() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return function(t) {
            try {
                return !t.mediaType || -1 < e.indexOf(t.mediaType)
            } catch (t) {
                return Object(r.b)(t, "isSlotOfType"), !0
            }
        }
    }

    function s(t) {
        try {
            return t.slotID
        } catch (t) {
            return Object(r.b)(t, "getSlotID"), ""
        }
    }
}, function(a, t, e) {
    "use strict";
    e.r(t), e.d(t, "_getInitConfig", (function() {
        return ae
    }));
    var Pt = e(18),
        Ct = e(2),
        Rt = e(9),
        zt = e(0),
        xt = e(14),
        Lt = e(8),
        Ut = e(4),
        Bt = e(16),
        Nt = e(28),
        Vt = e(22),
        Mt = e(3),
        Ft = e(1),
        qt = e(10),
        Ht = e(30),
        n = e(31),
        Gt = e(7),
        Qt = e(11),
        Xt = e(6),
        $t = e(12),
        Jt = e(25),
        Kt = e(17),
        ce = e(36),
        se = e(38),
        Wt = e(32),
        ue = e(37),
        Yt = e(27),
        le = e(39),
        de = e(23),
        Zt = e(13),
        te = e(5),
        ee = e(33),
        fe = e(29),
        be = e(24);

    function ne(t) {
        return l(t) || u(t) || s(t) || c()
    }

    function c() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function s(t, e) {
        var n;
        if (t) return "string" == typeof t ? r(t, e) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
    }

    function u(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }

    function l(t) {
        if (Array.isArray(t)) return r(t)
    }

    function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function re(t) {
        return (re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function oe(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? o(Object(n), !0).forEach((function(e) {
                ie(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function ie(t, e, n) {
        (e = d(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function d(t) {
        return "symbol" === re(t = f(t, "string")) ? t : String(t)
    }

    function f(t, e) {
        if ("object" !== re(t) || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 === n) return ("string" === e ? String : Number)(t);
        if ("object" !== re(n = n.call(t, e || "default"))) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }

    function ae(t) {
        return t = t.overrides, oe(oe({}, Ct.a.getState().config), t)
    }
    try {
        var b = Object(n.b)(window.apstag),
            i;
        b ? Object(Ft.b)(new Error("apstag has already loaded - preventing duplicate load"), "apstag-duplicateLoad") : (Object(n.a)(window) && Object(Ft.b)(new Error("apstag was loaded and then destroyed"), "apstag-destroyReload", {
            makeVisibleToAllUsers: !0
        }), window.apstagLOADED = !0, function() {
            var m = Object(Bt.e)(window, "navigationStart"),
                y = (Object(zt.l)(1) && Object(Ft.b)(new Error("apstag-".concat(Ut.l, " reference pixel - Used to compute ratios for other errors")), "REFERENCE"), new de.a({
                    stateContainer: Ct.a,
                    globalContext: window
                })),
                t = (y.attemptConsentDataSync(), "ls"),
                n = Object(Lt.d)("console") || function() {
                    try {
                        return -1 !== window.location.href.indexOf("amzn_debug_console=1") && (t = "url", !0)
                    } catch (t) {
                        return !1
                    }
                }(),
                L = Object(Lt.d)("console_v2") || function() {
                    try {
                        return -1 !== window.location.href.indexOf("amzn_debug_console=2") && (t = "url", !0)
                    } catch (t) {
                        return !1
                    }
                }();

            function U(t) {
                try {
                    return !Ct.a.getState().experiments.chunkRequests || 0 === Ct.a.getState().bidReqs[t.split("-")[0]].networkReqs.filter((function(t) {
                        return t.inFlight
                    })).length
                } catch (t) {
                    return Object(Ft.b)(t, "_isRequestComplete"), 1
                }
            }

            function i(t, e) {
                try {
                    !Ct.a.getState().bidReqs[t].hasCallbackExecuted && U(t) && (Ct.a.dispatch({
                        type: "RECORD_CALLBACK",
                        fid: t
                    }), e())
                } catch (t) {
                    Object(Ft.b)(t, "_checkAndCallCallback")
                }
            }

            function a(t) {
                try {
                    Ct.a.getState().experiments.chunkRequests && Ct.a.dispatch({
                        type: "RECORD_NETWORK_EXCHANGE",
                        fid: t[0],
                        timestamp: Date.now(),
                        exchangeType: "response",
                        networkID: parseInt(t[1], 10)
                    })
                } catch (t) {
                    Object(Ft.b)(t, "_recordResponse")
                }
            }

            function g(t, r, e) {
                var o = e.split("-"),
                    n = {
                        url: t,
                        withCredentials: !0,
                        onload: function t(e) {
                            try {
                                a(o);
                                var n = e.responseText;
                                eval(n), i(o[0], r)
                            } catch (t) {
                                Object(Ft.b)(t, "_xhrBid-onload", {
                                    makeVisibleToAllUsers: !0
                                })
                            }
                        },
                        onerror: function() {
                            try {
                                a(o), i(o[0], r)
                            } catch (t) {
                                Object(Ft.b)(t, "_xhrBid-onerror", {
                                    makeVisibleToAllUsers: !0
                                })
                            }
                        }
                    };
                Object(ce.a)(n);
                try {
                    Object(qt.d)(n)
                } catch (t) {
                    Object(Ft.b)(t, "_xhrBid", {
                        makeVisibleToAllUsers: !0
                    }), a(o), i(o[0], r)
                }
            }

            function B(t) {
                try {
                    var e = new Date;
                    return e.setTime(e.getTime() + 1e3 * t), e.toUTCString()
                } catch (t) {
                    return Object(Ft.b)(t, "_getCookieExpiry"), "Thu, 01 Jan 1970 00:00:00 GMT"
                }
            }

            function N(t) {
                try {
                    Object(zt.k)(t, "cr") && t.cr.forEach((function(t) {
                        var e = -1 !== t.exp ? B(t.exp) : Object(zt.f)(365);
                        te.a.getDefault().cookie.setItem(t.k, t.v, e)
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_setFirstPartyCookies")
                }
            }

            function V(t) {
                try {
                    var e;
                    Object(zt.k)(t, "cb") && (Ct.a.dispatch({
                        type: "RECORD_AAX_REQ_PROP",
                        bidReqID: t.cb,
                        key: "resTs",
                        value: Date.now()
                    }), e = new RegExp("e/dtb/bid.*cb=".concat(t.cb)), Ct.a.dispatch({
                        type: "RECORD_AAX_REQ_PROP",
                        bidReqID: t.cb,
                        key: "perf",
                        value: Object(Bt.c)(window, e)
                    })), Object(zt.k)(t, "cfg") && Ct.a.dispatch({
                        type: "SET_CFG",
                        cfg: t.cfg
                    }), ct(t)
                } catch (t) {
                    Object(Ft.b)(t, "_doOnAaxResponse", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function M(t) {
                try {
                    Object(ee.b)(t), N(t), Object(zt.k)(t, "cfg") && te.a.getDefault().localStorage.setItem(Ut.d, JSON.stringify(t.cfg), {
                        ignoreFailure: !0
                    }), F(t), Object(Rt.j)(t) || Object(Mt.g)()
                } catch (t) {
                    Object(Ft.b)(t, "_doAfterAaxResponse", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function F(t) {
                try {
                    var e;
                    Object(zt.k)(t, "fp") && (e = t.fp, Object(zt.k)(e, "length")) && e.forEach((function(t) {
                        var e = t.d || 0;
                        setTimeout((function() {
                            Object(Mt.f)(t.s)
                        }), e)
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "fireAAXPixels")
                }
            }

            function q() {
                try {
                    Ct.a.getState().Q.forEach((function(t) {
                        var e = "init";
                        switch (t[0]) {
                            case "i":
                                e = "init";
                                break;
                            case "f":
                                e = "fetchBids";
                                break;
                            case "di":
                                e = "deleteId";
                                break;
                            case "ri":
                                e = "renewId";
                                break;
                            case "ui":
                                e = "updateId";
                                break;
                            default:
                                return
                        }
                        window.apstag[e].apply(null, t[1])
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_QHandler", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function H(t) {
                try {
                    var e, n;
                    Object(zt.j)(t) || (Object(Ft.c)("init.config", re(t), "object"), t = {
                        pubID: "err"
                    }), Object($t.b)(t.pubID, ["string", "number"]) ? "number" == typeof t.pubID && (t.pubID = "".concat(t.pubID)) : Object(Ft.c)("init.config.pubID", re(t.pubID), "string"), Object($t.b)(t.adServer, ["undefined", "string"]) || Object(Ft.c)("init.config.adServer", re(t.adServer), "string"), Object($t.a)(t.bidTimeout) || ("string" == typeof t.bidTimeout ? Object(Ft.b)({
                        name: "string-".concat(t.bidTimeout),
                        message: "init.config.bidTimeout was a non-numeric string '".concat(t.bidTimeout, "'")
                    }, "TypeError-init.config.bidTimeout", {
                        makeVisibleToAllUsers: !0
                    }) : Object(Ft.c)("init.config.bidTimeout", re(t.bidTimeout), "number")), Object($t.b)(t.gdpr, ["undefined", "object"]) ? "object" !== re(t.gdpr) || Object($t.a)(t.gdpr.cmpTimeout) || (Object($t.b)(t.gdpr.cmpTimeout, ["string", "undefined"]) ? Object(Ft.b)({
                        name: "string-".concat(t.bidTimeout),
                        message: "init.config.gdpr.cmpTimeout was a non-numeric string '".concat(t.gdpr.cmpTimeout, "'")
                    }, "TypeError-init.config.gdpr.cmpTimeout", {
                        makeVisibleToAllUsers: !0
                    }) : Object(Ft.c)("init.config.gdpr.cmpTimeout", re(t.gdpr.cmpTimeout), "number")) : Object(Ft.c)("init.config.gdpr", re(t.gdpr), "object"), Object(zt.k)(t, "params") && !Object(zt.j)(t.params) ? Object(Ft.c)("init.config.params", re(t.params), "object") : Object(zt.k)(t, "params") && Object.keys(t.params).forEach((function(e) {
                        return !(!Object(zt.k)(t, "params") || "string" != typeof t.params[e] && "number" != typeof t.params[e] && (Object(zt.i)(t.params[e]) ? !t.params[e].reduce((function(t, e) {
                            return t && ("string" == typeof e || "number" == typeof e)
                        }), !0) && (Object(Ft.b)({
                            name: "non-string array item",
                            message: "'init.config.params.".concat(e, " contains a non-string item")
                        }, "TypeError-init.config.params.".concat(e), {
                            makeVisibleToAllUsers: !0
                        }), 1) : (Object(Ft.c)("init.config.params.".concat(e), re(t.params[e]), "string' or 'array"), 1)))
                    })), Object(zt.k)(t, "params") && Object(zt.k)(t.params, "us_privacy") && "string" == typeof t.params.us_privacy && Ut.D.test(t.params.us_privacy) ? Object(Mt.c)("ccpa", "y") : Object(zt.k)(t, "params") && Object(zt.k)(t.params, "us_privacy") ? Object(Mt.c)("ccpa", "i") : Object(Mt.c)("ccpa", "n"), Object(zt.k)(t, "blockedBidders") && !Object(zt.i)(t.blockedBidders) ? Object(Ft.c)("init.config.blockedBidders", re(t.blockedBidders), "array") : Object(zt.k)(t, "blockedBidders") && Object(zt.i)(t.blockedBidders) && (t.blockedBidders.reduce((function(t, e) {
                        return t && ("string" == typeof e || "number" == typeof e)
                    }), !0) || Object(Ft.b)({
                        name: "non-string array item",
                        message: "'init.config.blockedBidders contains a non-string item"
                    }, "TypeError-init.config.blockedBidders", {
                        makeVisibleToAllUsers: !0
                    })), Object(zt.k)(t, "blockedBidders") ? Object(Mt.c)("blockedBidders-init", "y") : Object(Mt.c)("blockedBidders-init", "n"), Object($t.b)(t.simplerGPT, ["undefined", "boolean"]) || Object(Ft.c)("init.config.simplerGPT", re(t.simplerGPT), "boolean"), t.simplerGPT ? Object(Mt.c)("simplerGpt", "y") : Object(Mt.c)("simplerGpt", "n"), Object($t.b)(t.deals, ["undefined", "boolean"]) || Object(Ft.c)("init.config.deals", re(t.deals), "boolean"), t.deals ? Object(Mt.c)("deals", "y") : Object(Mt.c)("deals", "n"), Object($t.b)(t.schain, ["undefined", "object"]) && null !== t.schain ? Object(zt.k)(t, "schain") && !Object(Qt.h)(t.schain) && delete t.schain : (Object(Ft.c)("init.config.schain", re(t.schain), "object"), delete t.schain), Object(zt.k)(t, "schain") ? Object(Mt.c)("schain", "y") : Object(Mt.c)("schain", "n"), Object($t.b)(t.useSafeFrames, ["undefined", "boolean"]) || (Object(Ft.c)("init.config.useSafeFrames", re(t.useSafeFrames), "boolean"), delete t.useSafeFrames), t.useSafeFrames ? Object(Mt.c)("useSafeFrames", "y") : Object(Mt.c)("useSafeFrames", "n"), Object($t.b)(t.signals, ["undefined", "object"]) ? (null != (e = Object(Zt.a)(t.pubID)) && e.record("ad/signals/define", {
                        context: null == (n = t.signals) ? void 0 : n.ortb2
                    }), delete t.signals) : Object(Ft.c)("init.config.signals", re(t.signals), "object")
                } catch (e) {
                    Object(Ft.b)(e, "_validateAndStoreConfig-validateConfig")
                }
                try {
                    var r = Ct.a.getState().config;
                    Object(zt.k)(r, "pubID") && Object(zt.k)(t, "pubID") && r.pubID !== t.pubID && Object(Ft.b)(new Error("`apstag.init` was called multiple times with different pubIDs (".concat(r.pubID, " then ").concat(t.pubID, ")")), "_validateAndStoreConfig-diffPubId", {
                        makeVisibleToAllUsers: !0
                    }), Ct.a.dispatch({
                        type: "SET_CONFIG",
                        config: t,
                        defaultCmpTimeout: Ct.a.getState().cfg.GDPR_CMP_TIMEOUT
                    })
                } catch (e) {
                    Object(Ft.b)(e, "_validateAndStoreConfig", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function G() {
                return Ct.a.getState().config
            }

            function r(t) {
                try {
                    var e = t.slotID,
                        n = !1;
                    Object(zt.k)(t.bidConfig, "amznbid") && "o_" === t.bidConfig.amznbid.slice(0, 2) && (n = !0), Object(zt.k)(t.bidConfig, "mediaType") && "v" === t.bidConfig.mediaType && !1 === n || (!window.IntersectionObserver && n ? Object(Ft.b)({
                        name: "IntersectionObserver",
                        message: "IntersectionObserver not supported "
                    }, "_safeApplySlotTargeting") : Gt.a.hasAdServerObjectLoaded() ? Gt.a.isCommandQueueDefined() ? Gt.a.hasAdServerObjectLoaded() ? null !== c(e) ? l(t) : Object(Ft.a)("".concat(e, " isn't defined when trying to set amazon bid!")) : Gt.a.cmdQueuePush((function() {
                        r(t)
                    })) : Object(Ft.a)("displayAdServer Object's cmd queue hasn't been defined", !0) : Object(Ft.a)("displayAdServer Object hasn't been defined", !0))
                } catch (t) {
                    Object(Ft.b)(t, "_safeApplySlotTargeting", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function c(t) {
                var e = null;
                try {
                    e = Object(xt.b)(Gt.a).filter((function(e) {
                        return e.slotID === t
                    }))[0] || null
                } catch (e) {
                    Object(Ft.b)(e, "_getAdServerSlot")
                }
                return e
            }

            function o(t) {
                try {
                    var e = Ct.a.getState().targetingKeys[t.slotID];
                    Gt.a.hasAdServerObjectLoaded() && Object(zt.i)(e) && e.forEach((function(e) {
                        return 0 < t.getTargeting(e).length && t.clearTargeting(e)
                    }))
                } catch (e) {
                    Object(Ft.b)(e, "_clearTargetingFromSlot", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function s(t) {
                try {
                    var e;
                    Object(zt.k)(Ct.a.getState().slotBids, t.slotID) && (e = Ct.a.getState().slotBids[t.slotID].filter((function(t) {
                        return t.bidState === Ut.c.set
                    }))[0]) && e.bidState === Ut.c.set && Ct.a.dispatch({
                        type: "BID_STATE_CHANGE",
                        slotID: t.slotID,
                        _targetingSetID: e._targetingSetID,
                        bidState: Ut.c.exposed
                    })
                } catch (t) {
                    Object(Ft.b)(t, "_clearBidSetOnSlot", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function Q(t, e) {
                try {
                    return t.map((function(t) {
                        return Object(zt.h)(e, t)
                    })).filter((function(t) {
                        return t
                    })).length === t.length
                } catch (t) {
                    Object(Ft.b)(t, "_hasAllItemsInArray")
                }
            }

            function u(t) {
                var e = {};
                try {
                    Object.keys(Ct.a.getState().slotBids).forEach((function(n) {
                        var r = Ct.a.getState().slotBids[n].filter((function(e) {
                            return Object(Qt.f)(e, t)
                        }));
                        0 < r.length && (e[n] = r.map((function(t) {
                            var e = Ct.a.getState().AAXReqs.filter((function(e) {
                                    return e.bidReqID === t.bidReqID
                                })),
                                n = 0;
                            return 0 < e.length ? n = e[0].rqTs : (e = Ct.a.getState().AAXReqs.map((function(t) {
                                return t.bidReqID
                            })).join(", "), Object(Ft.b)({
                                name: "BidError",
                                message: "Request not found: ".concat(t.bidReqID, " not found in ").concat(e)
                            }, "_getCurrentSlotBids-noRequest")), {
                                rqTs: n,
                                bid: t
                            }
                        })).reduce((function(t, e) {
                            return t.rqTs > e.rqTs ? t : e
                        })).bid)
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_getCurrentSlotBids", {
                        makeVisibleToAllUsers: !0
                    })
                }
                return e
            }

            function X(t, e) {
                try {
                    return Object(zt.i)(Ct.a.getState().targetingKeys[t]) ? e ? ["amzniid_sp"] : Ct.a.getState().targetingKeys[t].filter((function(t) {
                        return -1 < t.indexOf("amzniid") && t.indexOf("amzniid_sp") < 0
                    })) : ["amzniid"]
                } catch (t) {
                    return Object(Ft.b)(t, "_getAllBidIdKeys"), []
                }
            }

            function $(t, e) {
                var n, r;
                try {
                    var o = Ct.a.getState().slotBids;
                    Object.keys(o).forEach((function(i) {
                        o[i].forEach((function(o) {
                            X(i, e).forEach((function(e) {
                                o.bidConfig[e] === t && (n = o, "amzniid_sp" === e ? r = "sp" : "amzniid" !== e && (r = e.substr(0, e.indexOf("amzniid"))))
                            }))
                        }))
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_findSlotBidByBidID", {
                        makeVisibleToAllUsers: !0
                    })
                }
                return {
                    slotBid: n,
                    dealId: r
                }
            }

            function J(t, e, n) {
                var r = "";
                try {
                    e.bidConfig[n + "amzniid"] === t && (r = n.split("_").pop().trim())
                } catch (t) {
                    Object(Ft.b)(t, "_getPMPBidSize")
                }
                return r
            }

            function K(t) {
                try {
                    var e;
                    return void 0 === t.slots ? [] : (e = {}, t.slots.forEach((function(t) {
                        t.mediaType !== Xt.a.VIDEO && "v" !== t.mediaType && "v" !== t.mediaType_sp || (0 <= t.slotID.indexOf("rsv-") && (t = {
                            slotID: t.slotID.substring(4),
                            r_amznbid: t.amznbid,
                            r_amzniid: t.amzniid,
                            r_amznp: t.amznp,
                            mediaType: Xt.a.VIDEO,
                            targeting: ["r_amznbid", "r_amzniid", "r_amznp"],
                            amznsz: t.amznsz,
                            size: t.size,
                            crid: t.crid,
                            meta: t.meta
                        }), !Object(zt.k)(e, t.slotID)) ? e[t.slotID] = new Qt.a(t) : t.targeting.forEach((function(n) {
                            e[t.slotID].bidConfig[n] = t[n], -1 === e[t.slotID].bidConfig.targeting.indexOf(n) && e[t.slotID].bidConfig.targeting.push(n)
                        }))
                    })), Object.keys(e).map((function(t) {
                        return e[t]
                    })))
                } catch (t) {
                    return Object(Ft.b)(t, "_mergeVideoBids"), []
                }
            }

            function W(t) {
                var e = K(t),
                    n = [];
                try {
                    n = e.map((function(e) {
                        return e.bidReqID = t.cb, e.host = t.host, e.ev = t.ev, e.cfe = t.cfe, e
                    }))
                } catch (e) {
                    Object(Ft.b)(e, "_convertAaxResponse")
                }
                return n
            }

            function l(t) {
                try {
                    var e, n, r = t.slotID,
                        o = t._targetingSetID;
                    t.bidState !== Ut.c.set && null !== (e = c(r)) && (s(e), n = t.newBidObject, Object(Jt.a)(e), Object.keys(n.targeting).forEach((function(t) {
                        return e.setTargeting(t, n.targeting[t])
                    })), Ct.a.dispatch({
                        type: "BID_STATE_CHANGE",
                        slotID: r,
                        _targetingSetID: o,
                        bidState: Ut.c.set,
                        ts: Date.now()
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_applyTargetingToAdServerSlot", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function Y(t, e) {
                try {
                    var n = u(e);
                    t.forEach((function(t) {
                        n[t] && r(n[t])
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_applySuppliedSlotBidsToAdServerObject", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function Z(t) {
                try {
                    var e = u(t);
                    Object.keys(e).forEach((function(t) {
                        return r(e[t])
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_applyAllCurrentSlotBidsTargetingToAdServerObject", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function tt(t, e) {
                try {
                    t ? (Object(Mt.c)("targeting", "setDisplayBids-list"), Y(t, e)) : (Object(Mt.c)("targeting", "setDisplayBids-all"), Z(e)), Ct.a.getState().displayAdServer.slotRenderEndedSet || (Gt.a.cmdQueuePush((function() {
                        try {
                            Gt.a.slotRenderEndedEvent((function(t) {
                                try {
                                    o(t), s(t)
                                } catch (t) {
                                    Object(Ft.b)(t, "_applySlotTargeting-cmdQueue-slotCb", {
                                        makeVisibleToAllUsers: !0
                                    })
                                }
                            }))
                        } catch (t) {
                            Object(Ft.b)(t, "_applySlotTargeting-cmdQueue", {
                                makeVisibleToAllUsers: !0
                            })
                        }
                    })), Ct.a.dispatch({
                        type: "SLOT_RENDER_ENDED_SET"
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_applySlotTargeting", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function d(t, e) {
                function n() {
                    if (!o)
                        if (20 <= i++) Object(Ft.b)({
                            name: "LoopError",
                            message: "Too many attempts to append to document.body"
                        }, "_safeDocumentBodyAppendChild-callback-loops", {
                            makeVisibleToAllUsers: !0
                        });
                        else {
                            try {
                                if (t && t.body && null !== t.body && "function" == typeof t.body.appendChild) return t.body.appendChild(e), r(), void(o = !0)
                            } catch (t) {
                                Object(Ft.b)(t, "_safeDocumentBodyAppendChild-callback")
                            }
                            setTimeout(n, 100)
                        }
                }
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {},
                    o = !1,
                    i = 0;
                try {
                    "complete" === t.readyState || "interactive" === t.readyState ? (Object(Mt.c)("appended", "sync"), n()) : (Object(Mt.c)("appended", "async"), t.addEventListener("DOMContentLoaded", n))
                } catch (t) {
                    Object(Ft.b)(t, "_safeDocumentBodyAppendChild")
                }
            }

            function et(t) {
                try {
                    var e = "".concat(t.host).concat(Ct.a.getState().cfg.DTB_PATH, "/imp"),
                        n = "".concat(t.host).concat(Ct.a.getState().cfg.DTB_PATH, "/adm");
                    return t.cfe || t.isAmp || t.isSf ? n : e
                } catch (t) {
                    return Object(Ft.b)(t, "determineCreativeFetchEndpoint"), ""
                }
            }

            function T(t) {
                try {
                    var e = "?b=".concat(t.bidID, "&rnd=").concat(Object(zt.d)()),
                        n = (Object(zt.k)(t, "pp") && (e += "&pp=".concat(t.pp)), Object(zt.k)(t, "amznp") && (e += "&p=".concat(t.amznp)), Object(zt.k)(t, "crID") && (e += "&crid=".concat(t.crID)), Object(zt.k)(t, "isSharedPMP") && !0 === t.isSharedPMP && (e += "&sp=true"), Object(Jt.e)() && (e += "&ep=%7B%22ce%22%3A%221%22%7D"), et(t));
                    return (t.fif ? "".concat(n, "j") : "".concat(n, "i")).concat(e)
                } catch (t) {
                    return Object(Ft.b)(t, "_creativeURL"), ""
                }
            }

            function f(t) {
                try {
                    var e = t.doc.createElement("iframe");
                    return e.frameBorder = "0", e.marginHeight = "0", e.marginWidth = "0", e.style.marginTop = "0", e.style.marginLeft = "0", e.scrolling = "no", t.inheritSize ? (e.style.width = "100%", e.style.height = "100%") : (e.style.width = "".concat(t.sizes[0], "px"), e.style.height = "".concat(t.sizes[1], "px")), e
                } catch (t) {
                    return Object(Ft.b)(t, "_baseIframe"), window.document.createElement("iframe")
                }
            }

            function nt(t) {
                try {
                    if (Object(zt.k)(t, "bidType")) {
                        var e, n = t.kvMap;
                        switch (t.bidType) {
                            case "sharedPMP":
                                return {
                                    bidID: n.amzniid_sp[0],
                                    pp: n.amznbid_sp[0],
                                    sizes: n.amznsz_sp[0].split("x"),
                                    amznp: n.amznp_sp[0],
                                    inheritSize: t.inheritSize,
                                    isSharedPMP: t.isSharedPMP
                                };
                            case "preferredPMP":
                                if (Object(Xt.c)(t) && Object(zt.k)(t, "amzndeal")) return e = t.amzndeal.split("_").pop().trim(), {
                                    bidID: n["".concat(t.amzndeal, "amzniid")][0],
                                    sizes: P(e)
                                };
                                break;
                            case "openAuction":
                                if (Object(Xt.c)(t)) return {
                                    bidID: n.amzniid[0],
                                    pp: Object(Rt.c)(n.amznbid[0]),
                                    amznp: n.amznp[0],
                                    inheritSize: t.inheritSize,
                                    sizes: n.amznsz[0].split("x")
                                };
                                if (Object(Xt.d)(t)) return {
                                    bidID: t.amzniid,
                                    pp: Object(Rt.c)(t.amznbid),
                                    amznp: t.amznp,
                                    sizes: t.amznsz.split("x")
                                };
                                break;
                            default:
                                Object(Ft.b)({
                                    name: "Invalid AMP Bid Type: ".concat(t.bidType),
                                    message: "No valid AMP bid type"
                                }, "getAmpAdData-invalidBidType")
                        }
                    }
                } catch (t) {
                    Object(Ft.b)(t, "getAmpAdData")
                }
                return {
                    bidID: "ERROR",
                    sizes: []
                }
            }

            function D(t, e, n) {
                try {
                    var r, o = null;
                    void 0 !== e && (Object(zt.k)(e, "ampEnv") && e.ampEnv || Object(zt.k)(e, "sfEnv") && e.sfEnv) && (o = e, Object(zt.k)(e, "bidType") && "sharedPMP" === e.bidType ? o.isSharedPMP = !0 : o.isSharedPMP = !1, o.document = t, o.amznhost = o.kvMap.amznhost[0]), A(t) && ((o = t).bidType = "openAuction", o.ampEnv = !0), null === o ? Object(Ft.b)(new Error("Invalid AMP parameters"), "_renderAmpImpression-invalidParams", {
                        makeVisibleToAllUsers: !0
                    }) : "ERROR" !== (r = nt(o)).bidID && (r.doc = o.document, r.host = o.amznhost.replace("http://", "https://"), r.adID = "amznad".concat(Object(zt.d)()), r.isAmp = o.ampEnv, r.isSf = Object(Nt.c)(window), Ct.a.getState().aaxViewabilityEnabled ? R(r, r.doc, n) : I(r))
                } catch (t) {
                    Object(Ft.b)(t, "_renderAmpImpression")
                }
            }

            function _(t) {
                var e, n = "unknown";

                function r(r) {
                    try {
                        r && (t.hasTimedOut = !0), r && !t.hasRendered && Object(Ft.b)({
                            name: "RenderTimeout",
                            message: "renderAd was called from timeout. fifFlowMethod: ".concat(n)
                        }, "__loadAdIntoFriendlyIframe-renderAd-timeout-isOutstream:".concat(t.isOutstream)), null === e.contentDocument ? Object(Ft.b)({
                            name: "NoDocument",
                            message: "iframe.contentDocument was null inside renderAd. isFromTimeout: ".concat(r, ". fifFlowMethod: ").concat(n)
                        }, "__loadAdIntoFriendlyIframe-renderAd-noDocument-isOutstream:".concat(t.isOutstream), {
                            makeVisibleToAllUsers: !0
                        }) : t.hasRendered && !t.hasTimedOut ? Object(Ft.b)({
                            name: "DupeRender",
                            message: "Render was called twice"
                        }, "__loadAdIntoFriendlyIframe-renderAd-rerender-isOutstream:".concat(t.isOutstream), {
                            makeVisibleToAllUsers: !0
                        }) : t.hasRendered || (t.hasRendered = !0, e.contentDocument.open(), e.contentDocument.write(t.html), e.contentDocument.close(), Object(Mt.c)("iframe", "friendly_write_complete"))
                    } catch (r) {
                        Object(Ft.b)(r, "__loadAdIntoFriendlyIframe-renderAd-isOutstream:".concat(t.isOutstream))
                    }
                }

                function o() {
                    var o = r.bind(null, !1);
                    try {
                        n = null !== e.contentDocument && Object(zt.h)(["complete", "interactive"], e.contentDocument.readyState) ? (o(), "doc-ready") : null !== e.contentDocument && "uninitialized" !== e.contentDocument.readyState ? (e.contentDocument.addEventListener("DOMContentLoaded", o), "dom-listener") : (e.addEventListener("load", o), "iframe-listener"), Object(Mt.c)("fifFlow", n), setTimeout(r, 1e3, !0)
                    } catch (o) {
                        Object(Ft.b)(o, "_loadAdIntoFriendlyIframe-setAttributes-isOutstream:".concat(t.isOutstream))
                    }
                }
                try {
                    if (Object(Mt.c)("iframe", "friendly"), void 0 === t.html) throw new Error("No HTML available for ad, most likely the creative has expired");
                    if (t = oe({
                            hasRendered: !1,
                            hasTimedOut: !1
                        }, t), (e = f(t)).id = "apstag-f-iframe-".concat(Object(zt.d)()), t.isOutstream) try {
                        var i = Object(Vt.d)(document, t);
                        if (void 0 === i) throw new Error("gpt video div element is undefined");
                        i && i.firstElementChild && i.firstElementChild.style.setProperty("display", "none", "important");
                        var a = Object(Vt.f)(t.sizes);
                        Object(Vt.a)(a, i), Object(Vt.e)(a, e), o(), Object(Vt.g)(a, e, t.bidID)
                    } catch (o) {
                        Object(Ft.b)(o, "_loadAdIntoFriendlyIframe-outstream", {
                            makeVisibleToAllUsers: !0
                        })
                    } else d(t.doc, e, o)
                } catch (o) {
                    Object(Ft.b)(o, "_loadAdIntoFriendlyIframe", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function I(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                        states: {
                            csmLoaded: !1,
                            iframeLoaded: !1,
                            shouldRunViewability: !1
                        }
                    },
                    n = 2 < arguments.length ? arguments[2] : void 0;
                try {
                    Object(Mt.c)("iframe", "unfriendly");
                    var r, o = f(t);
                    o.id = t.adID, o.setAttribute("sandbox", "allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"), Object(Lt.d)("fake_bids") ? (r = '<body style="background-color: #FF9900;">'.concat(50 < parseInt(t.sizes[1], 10) ? "<h3>apstag Test Creative</h3>" : "", "<h4>amzniid - ").concat(t.bidID, " | amznbid: ").concat(t.pp, " | size: ").concat(t.sizes.join("x"), "</h4></body>"), o.src = "javascript:'".concat(r, "'")) : o.src = T(t), !(t.isAmp && t.isSf && Object(Nt.b)(window)) && (!t.isSf || t.isAmp || t.inheritSize) || Object(Nt.a)(t.sizes, window), d(t.doc, o), (e.iframe = o).onload = function() {
                        e.states.iframeLoaded = !0, n && n()
                    }
                } catch (t) {
                    Object(Ft.b)(t, "_loadAdIntoUnfriendlyIframe", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function rt(t, e) {
                var n, r = t.states,
                    o = t.doc,
                    i = t.bidID;
                t = t.iframe;
                try {
                    Object(zt.a)(r) || (r.shouldRunViewability = !1, Object(zt.k)(window, "amzncsm") ? n = window.amzncsm : void 0 !== o && null !== o.defaultView && Object(zt.k)(o.defaultView, "amzncsm") && (n = o.defaultView.amzncsm), void 0 !== o && void 0 !== n && Object(zt.k)(n, "rmD") && (n.host = Object(Lt.c)("host", Ct.a.getState().hosts.DEFAULT_AAX_PIXEL_HOST), n.rmD(t, i, o.defaultView, o, ae({
                        overrides: null == e ? void 0 : e.initConfig
                    }).pubID)))
                } catch (t) {
                    Object(Ft.b)(t, "_triggerViewability")
                }
            }

            function ot(t, e, n) {
                return function(r) {
                    try {
                        var o = Object(Qt.e)(e.slots, n),
                            i = Object.keys(o),
                            a = [],
                            c = (r && (Ct.a.dispatch({
                                type: "RECORD_AAX_REQ_PROP",
                                bidReqID: e.bidReqID,
                                key: "timedOutAt",
                                value: Date.now()
                            }), Ct.a.getState().experiments.chunkRequests) && Ct.a.dispatch({
                                type: "RECORD_TIMEOUT",
                                fid: e.bidReqID,
                                timeOut: Date.now()
                            }), i.forEach((function(t) {
                                Object(zt.k)(o, t) && (t = o[t], Object(Qt.g)(ae({
                                    overrides: null == n ? void 0 : n.initConfig
                                }), Gt.a) || Object(zt.k)(t.bidConfig, "amznbid") ? Object(zt.k)(t.bidConfig, "amznp") || (t.bidConfig.amznp = "") : (Object(Mt.c)("unusedDeal", t.mediaType), t.mediaType !== Xt.a.VIDEO && (t.bidConfig.targeting.unshift("amznsz"), t.bidConfig.amznsz = "0x0"), t.bidConfig.targeting.unshift("amzniid", "amznbid", "amznp"), t.bidConfig.amzniid = "", t.bidConfig.amznbid = Ut.v.noBid, t.bidConfig.amznp = Ut.v.noBid), a.push(t))
                            })), Gt.a.isSupported && (a = Object(Qt.c)(a, e, r)), {
                                fromTimeout: r
                            }),
                            s = Object(Qt.g)(ae({
                                overrides: null == n ? void 0 : n.initConfig
                            }), Gt.a);
                        try {
                            t(a.map((function(t) {
                                return s ? t.newBidObject : t.bidObject
                            })), c)
                        } catch (i) {
                            console.error(i)
                        }
                    } catch (i) {
                        Object(Ft.b)(i, "_bidCallbackHandler", {
                            makeVisibleToAllUsers: !0
                        });
                        try {
                            t([], {
                                fromTimeout: r,
                                fromError: !0
                            })
                        } catch (i) {
                            console.error(i)
                        }
                    }
                }
            }

            function it(t, e) {
                try {
                    var n, r;
                    e.inheritSize ? Object(Mt.c)("creativeSize", "inherited") : (r = t.defaultView && t.defaultView.frameElement ? (n = t.defaultView.frameElement, "defaultView") : (n = window.frameElement, "frameElement"), Object(Mt.c)("resizeIframe", r), Object(Mt.c)("creativeSize", "resized"), null !== n ? (n.style.width = "".concat(e.sizes[0], "px"), n.style.height = "".concat(e.sizes[1], "px")) : Object(Ft.b)({
                        name: "FrameNotFound",
                        message: "'win' is 'null'. Method used: ".concat(r)
                    }, "_resizeIframe-win"))
                } catch (t) {
                    Object(Ft.b)(t, "_resizeIframe")
                }
            }

            function e(t) {
                try {
                    return "".concat(t[0], "x").concat(t[1])
                } catch (t) {
                    return Object(Ft.b)(t, "_sizeArrayToSring"), "x"
                }
            }

            function b(t) {
                try {
                    return 1 === t.length ? e(t[0]) : e(t[Math.floor(t.length * Math.random())])
                } catch (t) {
                    return Object(Ft.b)(t, "_pickRandomSizeForMockBid", {
                        makeVisibleToAllUsers: !0
                    }), ""
                }
            }

            function at(t) {
                try {
                    var e, n = Object(Lt.c)("host", Ct.a.getState().hosts.DEFAULT_AAX_BID_HOST),
                        r = Object(Rt.g)(window),
                        o = t.bidReqID,
                        i = Object(zt.g)(window),
                        a = Object(Lt.c)("testBidTimeout", 200);
                    Ct.a.dispatch({
                        type: "RECORD_AAX_REQUEST",
                        data: {
                            bidConfig: t,
                            timeout: a,
                            bidReqID: o,
                            ws: i,
                            url: r,
                            rqTs: Date.now()
                        }
                    }), e = t.slots.map((function(t) {
                        var e = b(t.sizes),
                            n = (e = "testDeal".concat(Object(zt.d)(), "_").concat(e), "testDealIi-".concat(Object(zt.d)())),
                            r = b(t.sizes);
                        ie(r = {
                            slotID: t.slotID,
                            crid: "".concat(Ut.p.crid, "-").concat(Object(zt.d)()),
                            size: r,
                            amzniid: "".concat(Ut.p.amzniid, "-").concat(Object(zt.d)()),
                            amznbid: Ut.p.amznbid,
                            amznp: Ut.p.amznp,
                            amznsz: r,
                            amzniid_sp: "".concat(Ut.p.amzniid, "-").concat(Object(zt.d)()),
                            amznbid_sp: "".concat(Ut.p.amznbid, "SP"),
                            amznp_sp: "".concat(Ut.p.amznp, "SP"),
                            amznsz_sp: b(t.sizes),
                            amzndeals: [e]
                        }, "".concat(e, "amzniid"), n), ie(r, "mediaType", "d"), ie(r, "meta", ["slotID", "mediaType", "size"]), ie(r, "targeting", ["amzniid", "amznbid", "amznp", "amznsz", "amzniid_sp", "amznbid_sp", "amznp_sp", "amznsz_sp", "amzndeal_sp", "amzndeals", "".concat(e, "amzniid")]), n = r;
                        return t.mediaType === Xt.a.VIDEO && (n.mediaType = Xt.a.VIDEO, n.amznbid = "v_".concat(n.amznbid)), n
                    })), setTimeout((function() {
                        window.apstag.bids({
                            slots: e,
                            host: n,
                            status: "ok",
                            cb: o
                        })
                    }), a)
                } catch (t) {
                    Object(Ft.b)(t, "_doMockBid", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function ct(t) {
                try {
                    var e, n, r, o = Ct.a.getState().AAXReqs.filter((function(e) {
                        return e.bidReqID === t.cb
                    }))[0];
                    o && o.bidConfig && o.bidConfig.slots && (e = o.bidConfig.slots.filter(Object(xt.d)(Xt.a.DISPLAY, Xt.a.MULTI_FORMAT)).map((function(t) {
                        return t.slotID
                    })), n = Object(zt.k)(t, "slots") ? t.slots.map((function(t) {
                        return t.slotID
                    })) : [], r = e.filter((function(t) {
                        return !Object(zt.h)(n, t)
                    })), Ct.a.dispatch({
                        type: "NO_BID_ON_ADSERVER_SLOTS",
                        slotIDs: r
                    }), Gt.a.hasAdServerObjectLoaded() ? h() : Gt.a.isCommandQueueDefined() && Gt.a.cmdQueuePush((function() {
                        h()
                    })))
                } catch (e) {
                    Object(Ft.b)(e, "_determineNoBidStateForAdServerObject")
                }
            }

            function st(t) {
                return Object(zt.h)(Ct.a.getState().AAXReqs.filter((function(t) {
                    return !t.resTs
                })).map((function(t) {
                    return t.bidConfig.slots
                })).reduce((function(t, e) {
                    return t.concat(e)
                }), []).map(xt.c), t)
            }

            function p(t) {
                try {
                    var e = t.getTargeting("amznbid");
                    return 0 < e.length && 2 < e[0].length
                } catch (t) {
                    return Object(Ft.b)(t, "_isRealAmznbidTargetingSetOnSlot"), 1
                }
            }

            function h() {
                try {
                    Gt.a.hasAdServerObjectLoaded() && "1" === Gt.a.getTargeting("amznbid")[0] && v(), Object(xt.b)(Gt.a).forEach((function(t) {
                        !Object(zt.h)(Ct.a.getState().displayAdServer.noBidSlotIDs, t.slotID) || st(t.slotID) || p(t) || "2" === t.getTargeting("amznbid")[0] || (O("noBid", t), Object(Jt.a)(t))
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_applyNoBidFromAAXState")
                }
            }

            function O(t, e) {
                Ut.w.forEach((function(n) {
                    return e.setTargeting(n, Ut.v[t])
                }))
            }

            function v() {
                Ut.w.forEach((function(t) {
                    return Gt.a.clearTargeting(t)
                }))
            }

            function ut(t) {
                try {
                    var e = {
                        _type: "dupePixel",
                        dd: Date.now() - t.timing.renderTime
                    };
                    Object(Mt.a)(t.bidConfig.amzniid, e)
                } catch (t) {
                    Object(Ft.b)(t, "_sendDupeBidPixel")
                }
            }! function() {
                var t;
                Object(te.b)() && (t = te.a.getDefault().localStorage.getItem(Ut.d, {
                    ignoreFailure: !0
                })) && null !== (t = JSON.parse(t)) && Ct.a.dispatch({
                    type: "SET_CFG",
                    cfg: t
                })
            }(), Object(Jt.d)();
            var lt = 0;

            function j() {
                try {
                    Object(zt.k)(window, "googletag") && Object(zt.k)(window.googletag, "cmd") ? (new Ht.a).cmdQueuePush((function() {
                        try {
                            window.googletag.pubads().addEventListener("slotRequested", (function(t) {
                                try {
                                    var e = t.slot;
                                    Ct.a.dispatch({
                                        type: "LOG_GAM_EVENT",
                                        event: oe(oe({}, new Yt.a(e).slotConfig), {}, {
                                            ts: Date.now(),
                                            targeting: e.getTargetingMap()
                                        })
                                    })
                                } catch (t) {
                                    Object(Ft.b)(t, "_initializeSlotRequestedEventListener-cmdQueue-listener")
                                }
                            }))
                        } catch (t) {
                            Object(Ft.b)(t, "_initializeSlotRequestedEventListener-cmdQueue")
                        }
                    })) : ++lt < 5 && setTimeout(j, 100)
                } catch (t) {
                    Object(Ft.b)(t, "_initializeSlotRequestedEventListener")
                }
            }

            function S(t) {
                try {
                    var e = t.AAXReqs.slice(t.gamSlotRenderPixel.aaxReqOffset).reduce((function(t, e) {
                            return t.concat(e.bidConfig.slots)
                        }), []).map((function(t) {
                            return oe(oe({}, t), {}, {
                                type: "a"
                            })
                        })).filter((function(t) {
                            return t.mediaType !== Xt.a.VIDEO
                        })),
                        n = t.gamSlotFetchLog.slice(t.gamSlotRenderPixel.gamSlotFetchLogOffset).map((function(t) {
                            return oe(oe({}, t), {}, {
                                type: "g"
                            })
                        })),
                        r = [].concat(ne(e), ne(n)).reduce((function(t, e) {
                            return void 0 === t[e.slotID] && (t[e.slotID] = {
                                sd: e.slotID,
                                a: {
                                    c: 0
                                },
                                g: {
                                    c: 0
                                }
                            }), t[e.slotID][e.type].c++, t[e.slotID][e.type].s = e.sizes, t[e.slotID][e.type].sn = e.slotName || "", t
                        }), {});
                    return Object.keys(r).map((function(t) {
                        return r[t]
                    })).filter((function(t) {
                        return 0 !== t.a.c || 0 !== t.g.c
                    }))
                } catch (t) {
                    return Object(Ft.b)(t, "getSlotFetchCounts"), []
                }
            }

            function dt() {
                try {
                    var t = Ct.a.getState(),
                        e = S(t);
                    0 < Object.keys(e).length && (Object(zt.c)(e, 5).forEach((function(e) {
                        e = {
                            slots: e,
                            pid: Qt.b,
                            url: Object(Rt.g)(window).split("?")[0],
                            ws: Object(zt.g)(window),
                            pubid: t.config.pubID,
                            _type: "slotRenders"
                        }, Object(Mt.b)(e)
                    })), Ct.a.dispatch({
                        type: "UPDATE_RENDER_OFFSETS",
                        offsets: {
                            aaxReqOffset: t.AAXReqs.length,
                            gamSlotFetchLogOffset: t.gamSlotFetchLog.length
                        }
                    }))
                } catch (e) {
                    Object(Ft.b)(e, "sendDisplayAdServerRenderPixel")
                }
            }

            function ft() {
                setInterval((function() {
                    dt()
                }), 5e3)
            }

            function w(t) {
                try {
                    setTimeout((function() {
                        try {
                            var e = E().filter((function(t) {
                                    return !Object(zt.k)(Ct.a.getState().bsPixels, t.iid) || t.state !== Ct.a.getState().bsPixels[t.iid]
                                })),
                                n = (e && e.length && 0 < e.length && (e.forEach((function(e) {
                                    return Object(Mt.a)(e.iid, pt(e, t))
                                })), bt(e)), {
                                    fetchStart: "a",
                                    domainLookupStart: "b",
                                    domainLookupEnd: "c",
                                    connectStart: "d",
                                    secureConnectionStart: "e",
                                    connectEnd: "f",
                                    requestStart: "g",
                                    responseStart: "h",
                                    responseEnd: "i"
                                });
                            Object.keys(Ct.a.getState().slotBids).forEach((function(t) {
                                Ct.a.getState().slotBids[t].forEach((function(e) {
                                    var r, o, i;
                                    Object(zt.k)(e.bidConfig, "amzniid") && !e.pixelSent && "object" === re(r = Ct.a.getState().AAXReqs.filter((function(t) {
                                        return t.bidReqID === e.bidReqID
                                    }))[0]) && null !== r && (o = r.rqTs - Object(Bt.d)(), i = {
                                        pid: Qt.b,
                                        ns: r.bidConfig.validSlots.length,
                                        fid: e.bidReqID,
                                        fbrq: r.rqTs,
                                        _type: "latencyBd"
                                    }, "object" === re(r.perf) && null !== r.perf && Object.keys(n).forEach((function(t) {
                                        Object(zt.k)(r, "perf") && 0 !== Object(Bt.a)(r.perf, t) && (i[n[t]] = Object(Bt.a)(r.perf, t) - o)
                                    })), i.j = r.resTs - r.rqTs, Object(Mt.a)(e.bidConfig.amzniid, i), Ct.a.dispatch({
                                        type: "UPDATE_BID_INFO_PROP",
                                        slotID: t,
                                        iid: e.bidConfig.amzniid,
                                        key: "pixelSent",
                                        value: !0
                                    }))
                                }))
                            })), w(t)
                        } catch (e) {
                            Object(Ft.b)(e, "_sendBidsSetOnDFPPixel-timeout")
                        }
                    }), 5e3)
                } catch (t) {
                    Object(Ft.b)(t, "_sendBidsSetOnDFPPixel")
                }
            }

            function bt(t) {
                t.forEach((function(t) {
                    return Ct.a.dispatch({
                        type: "RECORD_BID_INFO_SENT",
                        bidInfo: t
                    })
                }))
            }

            function pt(t, e) {
                try {
                    var n = mt(t.fid),
                        r = {
                            status: t.state,
                            pubid: ae({
                                overrides: null == e ? void 0 : e.initConfig
                            }).pubID,
                            _type: "bidSetPixel",
                            toa: Object(zt.k)(n.req, "timedOutAt") ? n.req.timedOutAt : 0,
                            fbrq: n.req.rqTs,
                            pto: n.req.timeout,
                            ns: n.req.bidConfig.validSlots.length,
                            bla: n.req.resTs - n.req.rqTs,
                            reqindex: n.index,
                            fid: t.fid,
                            tbs: 0,
                            c: "dtb"
                        },
                        o = (Ct.a.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION && (r.eid = Ct.a.getState().experiments.chunkRequests ? 2 : 1, r.fbindex = n.fbIndex, r.fbns = Ct.a.getState().bidConfigs[parseInt(t.fid.split("-")[0], 10)].slots.length), Ct.a.getState().experiments),
                        i = (Object(zt.k)(o, "shouldUseTestBidEndpoint") && (r.tbs = o.shouldUseTestBidEndpoint ? 2 : 1), t.delta && (r.delay = t.delta), n.req.perf);
                    return void 0 !== i && (r.ul = n.req.urlLength, r.es = Object(Bt.a)(i, "encodedBodySize")), 0 < Object.keys(Ct.a.getState().identityState).length && (r.ids = JSON.stringify(Ct.a.getState().identityState)), 0 < Ct.a.getState().tcfParseTime && (r.tpt = Ct.a.getState().tcfParseTime), r
                } catch (t) {
                    return Object(Ft.b)(t, "_mapBidInfoToPixel"), {
                        _type: "bidSetPixel",
                        status: -1,
                        pubid: "",
                        toa: 0,
                        fbrq: 0,
                        pto: 0,
                        ns: 0,
                        bla: 0,
                        reqindex: 0,
                        fid: "",
                        tbs: 0,
                        c: "dtb"
                    }
                }
            }

            function mt(t) {
                var e = Ct.a.getState().AAXReqs.filter((function(e) {
                        return e.bidReqID === t
                    }))[0],
                    n = Ct.a.getState().AAXReqs.indexOf(e) + 1;
                return (e = {
                    req: e,
                    index: n,
                    fbIndex: n
                }).index = Ct.a.getState().AAXReqs.indexOf(e.req) + 1, Ct.a.getState().experiments.chunkRequests && (e.fbIndex = Ct.a.getState().AAXReqs.filter((function(t) {
                    return -1 === t.bidReqID.indexOf("-") || "0" === t.bidReqID.split("-")[1]
                })).map((function(t) {
                    return t.bidReqID.split("-")[0]
                })).indexOf(t.split("-")[0]) + 1), e
            }

            function E() {
                try {
                    var t = ht(),
                        e = [];
                    return null !== t && Object.keys(Ct.a.getState().slotBids).forEach((function(n) {
                        Ct.a.getState().slotBids[n][0].bidConfig.mediaType !== Xt.a.VIDEO && Ct.a.getState().slotBids[n].filter((function(t) {
                            return Object(zt.k)(t.bidConfig, "amzniid")
                        })).forEach((function(r) {
                            var o, i, a;
                            null !== t && (o = {
                                state: -1,
                                slotID: n,
                                iid: r.bidConfig.amzniid,
                                fid: r.bidReqID
                            }, a = [], i = [], n in t && (a = t[n].fetchedAt.filter((function(t) {
                                return t.AAXReqInfo && t.AAXReqInfo.bidReqID === r.bidReqID
                            })), i = t[n].targetedAt.filter((function(t) {
                                return t.targeting === r.bidConfig.amzniid
                            }))), 0 < a.length ? 0 < a.length && i.length >= a.length && a.slice(a.length - 1)[0].ts > i.slice(a.length - 1)[0].ts ? 1 === t[n].fetchWithIID.filter((function(t) {
                                return t === r.bidConfig.amzniid
                            })).length ? o.state = 1 : o.state = 4 : Object(zt.h)(t[n].fetchWithIID, r.bidConfig.amzniid) ? o.state = 3 : o.state = 2 : o.state = 0, 1 !== o.state && 2 !== o.state || (a = k(i = Ct.a.getState().AAXReqs.filter((function(t) {
                                return t.bidReqID === r.bidReqID
                            }))[0].resTs, t[n].fetchedAt, 2 === o.state)) && Object(zt.k)(a, "ts") && (o.delta = i - a.ts), e.push(o))
                        }))
                    })), e
                } catch (t) {
                    return Object(Ft.b)(t, "_getBidSetInfo"), []
                }
            }

            function k(t, e, n) {
                var r = e.map((function(e) {
                    return e = t - e.ts, !n && e <= 0 ? -e : n && 0 <= e ? e : null
                }));
                return e[yt(r)]
            }

            function yt(t) {
                for (var e = -1, n = -1, r = 0; r < t.length; r++) null !== t[r] && (-1 === n || t[r] < e) && (e = t[n = r]);
                return n
            }

            function gt(t, e) {
                return Ct.a.getState().AAXReqs.filter((function(t) {
                    return Object(zt.h)(t.bidConfig.slots.map((function(t) {
                        return t.slotID
                    })), e)
                }))[t]
            }

            function ht() {
                try {
                    var t;
                    return Gt.a.hasAdServerObjectLoaded() ? (t = Ct.a.getState().gamSlotFetchLog.reduce((function(t, e) {
                        Object(zt.k)(t, e.slotID) || (t[e.slotID] = {
                            fetchedAt: [],
                            targetedAt: []
                        });
                        var n = t[e.slotID];
                        return n.fetchedAt.push({
                            ts: e.ts,
                            AAXReqInfo: gt(n.fetchedAt.length, e.slotID)
                        }), Object(zt.k)(e.targeting, "amzniid") && 0 < e.targeting.amzniid.length ? n.targetedAt.push({
                            ts: e.ts - 1,
                            targeting: e.targeting.amzniid[0]
                        }) : n.targetedAt.push({
                            ts: e.ts - 1,
                            targeting: ""
                        }), t
                    }), {}), Object.keys(t).forEach((function(e) {
                        var n;
                        Object(zt.k)(t, e) && ((n = t[e]).fetchWithIID = n.fetchedAt.map((function(t) {
                            return (t = k(t.ts, n.targetedAt, !0)) ? t.targeting : 0
                        })), t[e] = n)
                    })), t) : null
                } catch (t) {
                    return Object(Ft.b)(t, "_getDFPSlotFetches"), null
                }
            }

            function Ot() {
                try {
                    Gt.a.hasAdServerObjectLoaded() ? O("noRequest", Gt.a) : Gt.a.isCommandQueueDefined() && Gt.a.cmdQueuePush((function() {
                        O("noRequest", Gt.a)
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_applyNoRequestToAAXState")
                }
            }

            function vt(t) {
                try {
                    Ct.a.dispatch({
                        type: "REQUESTED_BID_FOR_ADSERVER_SLOTS",
                        slotIDs: t
                    }), Gt.a.isCommandQueueDefined() && Gt.a.cmdQueuePush((function() {
                        try {
                            var e = Object(xt.b)(Gt.a);
                            "0" === Gt.a.getTargeting("amznbid")[0] && v(), Q(t.filter((function(t) {
                                return void 0 !== t
                            })), e.map((function(t) {
                                return t.slotID
                            }))) ? e.forEach((function(e) {
                                Object(zt.h)(t, e.slotID) && !p(e) && O("bidInFlight", e)
                            })) : Gt.a.cmdQueuePush((function() {
                                try {
                                    O("bidInFlight", Gt.a)
                                } catch (t) {
                                    Object(Ft.b)(t, "_setRequestToAAXInFlightState-cmdQueue-cmdQueue")
                                }
                            }))
                        } catch (e) {
                            Object(Ft.b)(e, "_setRequestToAAXInFlightState-cmdQueue")
                        }
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_setRequestToAAXInFlightState")
                }
            }

            function A(t) {
                try {
                    return Object(zt.k)(t, "type") && !(t instanceof Document) && "amp" === t.type
                } catch (t) {
                    return Object(Ft.b)(t, "_isLegacyAmpCreative"), !1
                }
            }

            function jt(t, e) {
                try {
                    return void 0 !== e && Object(zt.k)(e, "ampEnv") && e.ampEnv || A(t)
                } catch (t) {
                    Object(Ft.b)(t, "_isAmpImpression")
                }
            }

            function P(t) {
                return t.split("x")
            }

            function St(t, e, n, r) {
                try {
                    Object(Mt.c)("renderImp", "start"), Object(Mt.g)()
                } catch (t) {
                    Object(Ft.b)(t, "_renderImp-pixels")
                }
                try {
                    var o = void 0 === n ? "0.0.0" : n.cv;
                    if (jt(t, n) && Object(Rt.k)(window, !0)) A(t) ? Object(Mt.c)("renderFootprint", "amp") : Object(Mt.c)("renderFootprint", "multi-amp-".concat(o)), D(t, n, r);
                    else if (Object(Nt.c)(window) && void 0 !== n && Object(zt.k)(n, "kvMap") && Object(zt.k)(n.kvMap, "amznhost")) Object(Mt.c)("renderFootprint", "multi-sf-".concat(o)), D(t, n, r);
                    else {
                        var i = !1,
                            a = ("string" == typeof e && 0 === e.indexOf("sp|") && (e = e.substring(3), i = !0), e || t.amzniid),
                            c = $(a, i),
                            s = c.slotBid,
                            u = c.dealId,
                            l = !1;
                        if (void 0 !== n && Object(zt.k)(n, "bidType") && "outstream" === n.bidType && (l = !0), s) {
                            var d, f, b, p, y, m, g, h, O, v, j, S, w = u && 1 <= u.length ? P("sp" === u ? s.bidConfig.amznsz_sp : J(a, s, u)) : P(s.bidConfig.amznsz);
                            1 === arguments.length ? (Object(Mt.c)("renderFootprint", "JSONp"), _({
                                doc: s.doc,
                                bidID: s.bidConfig.amzniid,
                                sizes: w,
                                html: t.html,
                                inheritSize: s.inheritSize || !1,
                                isOutstream: l
                            })) : (Object(Mt.c)("bidRenderState", s.bidState), d = i ? "sharedpmp" : "open", void 0 !== n ? Object(Mt.c)("renderFootprint", "multi-".concat(d, "-").concat(o)) : Object(Mt.c)("renderFootprint", "standard-".concat(d, "-").concat(o)), s.bidState === Ut.c.rendered && ut(s), Ct.a.dispatch({
                                type: "BID_STATE_CHANGE",
                                slotID: s.slotID,
                                _targetingSetID: s._targetingSetID,
                                bidState: Ut.c.rendered,
                                ts: Date.now()
                            }), f = s.host, b = s.bidConfig.slotID, p = "amznad".concat(Math.round(1e6 * Math.random())), y = {
                                bidID: a,
                                doc: t,
                                slotID: b,
                                pp: C("amznbid", s, u),
                                host: f,
                                adID: p,
                                sizes: w,
                                amznp: C("amznp", s, u),
                                crID: C("crid", s, u),
                                fif: !1,
                                dealId: u,
                                isSharedPMP: i,
                                cfe: s.cfe,
                                isOutstream: l,
                                inheritSize: Object(zt.j)(n) && Object(zt.k)(n, "inheritSize") && !0 === n.inheritSize
                            }, "1" === s.bidConfig.fif && !1 === l && !1 === i ? (y.fif = !0, Ct.a.dispatch({
                                type: "UPDATE_BID_INFO_PROP",
                                slotID: s.slotID,
                                iid: e,
                                key: "doc",
                                value: t
                            }), Ct.a.dispatch({
                                type: "UPDATE_BID_INFO_PROP",
                                slotID: s.slotID,
                                iid: e,
                                key: "inheritSize",
                                value: y.inheritSize
                            }), Object(qt.b)(T(y), (function() {}), document, (function() {
                                return Object(Ft.b)(new Error("Error Loading JSONP Render Callback"), "renderImp-fif-callback-load", {
                                    makeVisibleToAllUsers: !0
                                })
                            }))) : l ? (Ct.a.dispatch({
                                type: "OUTSTREAM_SHOULD_SAMPLE",
                                shouldSample: Object(zt.l)(10)
                            }), Ct.a.getState().outstream.shouldSample && (Object(Mt.e)("renderImp", y.bidID), Ct.a.dispatch({
                                type: "RECORD_OUTSTREAM_RENDER_START_TIME",
                                time: Date.now()
                            })), O = Object(Vt.c)(y, Ut.b), j = 1 <= (null == (v = null == (m = Ct.a.getState().bidConfigs[s.bidReqID]) || null == (g = m.slots) ? void 0 : g.filter((function(t) {
                                return (null == t ? void 0 : t.slotID) === (null == y ? void 0 : y.slotID)
                            }))) ? void 0 : v.length) ? null == (h = v[0]) ? void 0 : h.companions : [], S = Object(Vt.b)(O, Ut.C, y, j), y.html = S, _(y)) : Ct.a.getState().aaxViewabilityEnabled ? R(y, t, r) : I(y), l || it(t, y), Object(Mt.c)("renderImp", "complete"))
                        } else try {
                            Object(Ft.b)(new Error("Invalid bid ID. '".concat("(bidID value: " + e + ", bID value: " + a + ")", "' tried to render into document ").concat(t instanceof Document ? t.documentURI : "with type " + re(t))), "_renderImp-invalidId", {
                                makeVisibleToAllUsers: !0
                            })
                        } catch (t) {
                            Object(Ft.b)(t, "_renderImp-invalidId")
                        }
                    }
                } catch (t) {
                    Object(Ft.b)(t, "_renderImp", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function C(t, e, n) {
                try {
                    var r, o = "";
                    return void 0 !== n && 1 <= n.length ? (r = "".concat(t, "_sp"), "sp" === n && Object(zt.k)(e.bidConfig, r) && (o = e.bidConfig[r])) : Object(zt.k)(e.bidConfig, t) && (o = e.bidConfig[t]), o
                } catch (t) {
                    return Object(Ft.b)(t, "_getProperBidInfoValue"), ""
                }
            }

            function R(t, e, n) {
                try {
                    var r = e.createElement("script"),
                        o = (r.type = "text/javascript", r.async = !0, {
                            doc: e,
                            bidID: t.bidID,
                            states: {
                                csmLoaded: !1,
                                iframeLoaded: !1,
                                shouldRunViewability: !0
                            }
                        }),
                        i = rt.bind(null, o, n);
                    Object(qt.a)(r, (function() {
                        o.states.csmLoaded = !0, i()
                    }));
                    try {
                        r.addEventListener("error", (function(t) {
                            return Object(Mt.b)({
                                _type: "csm_fail",
                                ts: Date.now(),
                                msg: t.message
                            })
                        }))
                    } catch (t) {
                        Object(Ft.b)(t, "_loadViewabilityAd-csm")
                    }
                    I(t, o, i), r.src = Ct.a.getState().cfg.CSM_JS, d(e, r)
                } catch (t) {
                    Object(Ft.b)(t, "_loadViewabilityAd")
                }
            }

            function z(t) {
                try {
                    V(t), Object(zt.k)(t, "slots") && (Ct.a.dispatch({
                        type: "UPDATE_SLOT_BIDS",
                        bids: W(t)
                    }), Object(zt.k)(t, "ev") && Ct.a.dispatch({
                        type: "SET_VIEWABILITY",
                        viewability: t.ev
                    }), Object(zt.k)(t, "cfn")) && Ct.a.dispatch({
                        type: "SET_CFG",
                        cfg: {
                            CSM_JS: "//" === t.cfn.substring(0, 2) ? t.cfn : "//c.amazon-adsystem.com/".concat(t.cfn)
                        }
                    }), M(t)
                } catch (t) {
                    Object(Ft.b)(t, "_bids", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function wt() {
                return "number" == typeof Ct.a.getState().cfg.MAX_SLOTS_PER_REQUEST && 0 < Ct.a.getState().cfg.MAX_SLOTS_PER_REQUEST
            }

            function Tt(t, e, n) {
                try {
                    var r = Object(Jt.b)();
                    Object(Pt.a)(ae({
                        overrides: null == n ? void 0 : n.initConfig
                    }).gdpr, (function(o) {
                        Dt(t, e, o, r, n)
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_getConfigsAndFetchBids", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function Dt(t, e, n, r, o) {
                try {
                    y.attemptConsentDataSync(), null != (c = Object(Zt.a)(null == o || null == (i = o.initConfig) ? void 0 : i.pubID)) && c.record("consent/gppapi/attemptSync"), Object($t.b)(e, ["function", "undefined"]) || Object(Ft.c)("fetchBids.callback", re(e), "function"), "function" != typeof e && (e = function() {}), Object(zt.j)(t) || (Object(Ft.c)("fetchBids.bidConfig", re(t), "object"), t = {}), Object($t.a)(t.timeout) || ("string" == typeof t.timeout ? Object(Ft.b)({
                        name: "string-".concat(t.timeout),
                        message: "fetchBids.bidConfig.timeout was a non-numeric string '".concat(t.timeout, "'")
                    }, "TypeError-fetchBids.bidConfig.timeout", {
                        makeVisibleToAllUsers: !0
                    }) : Object(Ft.c)("fetchBids.bidConfig.timeout", re(t.timeout), "number")), Object(zt.k)(t, "params") && !Object(zt.j)(t.params) ? Object(Ft.c)("fetchBids.bidConfig.params", re(t.params), "object") : Object(zt.k)(t, "params") && Object(zt.j)(t.params) && Object.keys(t.params).forEach((function(e) {
                        return !(void 0 === t.params || "string" != typeof t.params[e] && "number" != typeof t.params[e] && (Object(zt.i)(t.params[e]) ? !t.params[e].reduce((function(t, e) {
                            return t && ("string" == typeof e || "number" == typeof e)
                        }), !0) && (Object(Ft.b)({
                            name: "non-string array item",
                            message: "'fetchBids.bidConfig.params.".concat(e, " contains a non-string item")
                        }, "TypeError-fetchBids.bidConfig.params.".concat(e), {
                            makeVisibleToAllUsers: !0
                        }), 1) : (Object(Ft.c)("fetchBids.bidConfig.params.".concat(e), re(t.params[e]), "string' or 'array"), 1)))
                    })), Object(zt.k)(t, "blockedBidders") && !Object(zt.i)(t.blockedBidders) ? Object(Ft.c)("fetchBids.bidConfig.blockedBidders", re(t.blockedBidders), "array") : Object(zt.k)(t, "blockedBidders") && Object(zt.i)(t.blockedBidders) && (t.blockedBidders.reduce((function(t, e) {
                        return t && ("string" == typeof e || "number" == typeof e)
                    }), !0) || Object(Ft.b)({
                        name: "non-string array item",
                        message: "'fetchBids.bidConfig.blockedBidders contains a non-string item"
                    }, "TypeError-fetchBids.bidConfig.blockedBidders", {
                        makeVisibleToAllUsers: !0
                    })), Object(zt.k)(t, "blockedBidders") ? Object(Mt.c)("blockedBidders-fetchBids", "y") : Object(Mt.c)("blockedBidders-fetchBids", "n"), Object(zt.k)(t, "slots") && !Object(zt.i)(t.slots) && Object(Ft.c)("fetchBids.bidConfig.slots", re(t.slots), "array")
                } catch (i) {
                    Object(Ft.b)(i, "_fetchBids-validation", {
                        makeVisibleToAllUsers: !0
                    })
                }
                var i = !1,
                    a = ((ae({
                        overrides: null == o ? void 0 : o.initConfig
                    }).simplerGPT || null != (c = Object(Zt.a)(null == o || null == (c = o.initConfig) ? void 0 : c.pubID)) && c.read("ad/googletagSlotAutoImport")) && (i = !0), oe(oe({}, t), {}, {
                        bidReqID: "".concat(Ct.a.getState().AAXReqs.length),
                        slots: [],
                        validSlots: [],
                        networkReqs: []
                    })),
                    c = !1;
                try {
                    !0 === i && (!Object(zt.k)(t, "slots") || Object(zt.k)(t, "slots") && Object(zt.i)(t.slots) && 0 < t.slots.length && Object(zt.k)(t.slots[0], "getSlotElementId")) ? 0 === Object(xt.b)(Gt.a).length ? (Object(Ft.b)(new Error("fetchBids was called in simplerGPT mode before any slots were defined in GPT"), "_fetchBids-simplerGpt-NoSlots", {
                        makeVisibleToAllUsers: !0
                    }), c = !0, a.slots = []) : (t.slots ? (Object(Mt.c)("slots", "gpt-provided"), a.slots = t.slots.map((function(t) {
                        return new Yt.a(t)
                    }))) : (Object(Mt.c)("slots", "gpt-fetch"), a.slots = Object(xt.b)(Gt.a)), a.slots = a.slots.filter(xt.a), a.slots.length > Ut.n && (a.slots = a.slots.slice(a.slots.length - Ut.n)), 0 === a.slots.length && (Object(Ft.b)(new Error("No GPT slots provided to apstag.fetchBids() had valid sizes"), "_fetchBids-simplerGpt-NoValidSizes", {
                        makeVisibleToAllUsers: !0
                    }), c = !0)) : Object(zt.k)(t, "slots") && Object(zt.i)(t.slots) && (i ? Object(Mt.c)("slots", "gpt-aps") : Object(Mt.c)("slots", "aps"), a.slots = t.slots.map((function(t) {
                        switch (t.mediaType) {
                            case Xt.a.DISPLAY:
                                return new Wt.a(t);
                            case Xt.a.VIDEO:
                                return new ue.a(t);
                            case Xt.a.MULTI_FORMAT:
                                return new le.a(t);
                            default:
                                return new Wt.a(t)
                        }
                    }))), a.validSlots = a.slots.filter((function(t) {
                        return t.isValid()
                    }))
                } catch (i) {
                    Object(Ft.b)(i, "_fetchBids-getSlots", {
                        makeVisibleToAllUsers: !0
                    })
                }
                var s, u = Object(Rt.i)(a, Ct.a.getState());
                try {
                    e = Object(Rt.b)(ot(e, a, o), u)
                } catch (i) {
                    Object(Ft.b)(i, "_fetchBids-wrapCallback", {
                        makeVisibleToAllUsers: !0
                    })
                }
                try {
                    if (0 === a.validSlots.length) return !1 === c && Object(Ft.b)(new Error("No valid slots provided to apstag.fetchBids"), "_fetchBids-noSlots", {
                        makeVisibleToAllUsers: !0
                    }), void setTimeout(e.bind(null, []), 10);
                    try {
                        var l = 1 === a.slots.length ? "single" : "multi",
                            d = Date.now() - m <= Ut.r ? "onload" : "ondelay",
                            f = Ct.a.getState().AAXReqs.reduce((function(t, e) {
                                return e.bidConfig.slots.forEach((function(e) {
                                    Object(zt.h)(t, e.slotID) || t.push(e.slotID)
                                })), t
                            }), []);
                        a.slots.map((function(t) {
                            return t.slotID
                        })).map((function(t) {
                            return Object(zt.h)(f, t)
                        })).map((function(t) {
                            return t ? "refresh" : "initial"
                        })).filter((function(t, e, n) {
                            return n.indexOf(t) === e
                        })).forEach((function(t) {
                            return Object(Mt.c)("fetchBids", "".concat(l, "-").concat(d, "-").concat(t))
                        }))
                    } catch (i) {
                        Object(Ft.b)(i, "_fetchBids-feature")
                    }
                    if (vt(a.slots.filter(Object(xt.d)(Xt.a.DISPLAY, Xt.a.MULTI_FORMAT)).map(xt.c)), Ct.a.dispatch({
                            type: "NEW_FETCH_BID_REQUEST",
                            fid: a.bidReqID,
                            pto: u
                        }), Ct.a.dispatch({
                            type: "RECORD_ORIGINAL_BID_CONFIG",
                            bidConfig: a
                        }), Object(Lt.d)("fake_bids")) at(a);
                    else if (Ut.k)
                        if (Ct.a.dispatch({
                                type: "SHOULD_CHUNK_REQUESTS",
                                value: Object(zt.l)(Ct.a.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION)
                            }), Ct.a.getState().experiments.chunkRequests && wt()) {
                            for (var b = _t(a), p = 0; p < b.length; p++) b[p].bidReqID = "".concat(a.bidReqID, "-").concat(p);
                            Ct.a.dispatch({
                                type: "ADD_CHUNKED_REQUESTS",
                                fid: a.bidReqID,
                                numChunks: b.length
                            }), b.forEach((function(t) {
                                g(Object(Qt.d)(t, u, n, r, o), e, t.bidReqID)
                            }))
                        } else g(Object(Qt.d)(a, u, n, r, o), e, a.bidReqID);
                    else Object(qt.b)(Object(Qt.d)(a, u, n, r, o), e)
                } catch (i) {
                    Object(Ft.b)(i, "_fetchBids", {
                        makeVisibleToAllUsers: !0
                    })
                }
                try {
                    Object(be.c)(null == o || null == (s = o.initConfig) ? void 0 : s.pubID)
                } catch (i) {}
            }

            function _t(t) {
                try {
                    for (var e = Math.ceil(t.validSlots.length / Ct.a.getState().cfg.MAX_SLOTS_PER_REQUEST), n = new Array(e), r = 0; r < e; r++) {
                        var o = r * Ct.a.getState().cfg.MAX_SLOTS_PER_REQUEST;
                        n[r] = {
                            slots: t.validSlots.slice(o, o + Ct.a.getState().cfg.MAX_SLOTS_PER_REQUEST)
                        }
                    }
                    return n.map((function(e) {
                        return oe(oe({}, t), e)
                    }))
                } catch (e) {
                    return Object(Ft.b)(e, "chunkConfig", {
                        makeVisibleToAllUsers: !0
                    }), []
                }
            }

            function It(t, e) {
                try {
                    Object(zt.k)(ae({
                        overrides: null == e ? void 0 : e.initConfig
                    }), "adServer") ? Gt.a.isSupported ? (tt(t, e), h()) : Object(Ft.b)(new Error("apstag.setDisplayBids called with unsupported ad server: ".concat(Ct.a.getState().config.adServer)), "_setDisplayBids-invalidAdServer", {
                        makeVisibleToAllUsers: !0
                    }) : Object(Ft.b)(new Error("apstag.setDisplayBids called without specifying ad server"), "_setDisplayBids-noAdServer", {
                        makeVisibleToAllUsers: !0
                    })
                } catch (t) {
                    Object(Ft.b)(t, "_setDisplayBids", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }

            function x(t, e) {
                var n;
                (null != (n = t.gdpr) && n.consent || null != (n = t.gdpr) && n.enabled) && (n = {
                    tcString: null == (n = t.gdpr) ? void 0 : n.consent,
                    gdprApplies: null == (n = t.gdpr) ? void 0 : n.enabled
                }, y.writeConsentDataToStore(n)), y.attemptConsentDataSync(), null != (n = Object(Zt.a)(t.pubID)) && n.record("consent/gppapi/attemptSync"), H(t), Object(Gt.b)(t.adServer), "function" == typeof e && e()
            }

            function Et(t, e) {
                try {
                    var n, r;
                    null != (n = Object(Zt.a)(t.pubID)) && n.record("log/analytics/setSampling", {
                        ratio: .001
                    }), t.disableConfigCall || null != (r = Object(Zt.a)(t.pubID)) && r.record("apstag/configuration/fetch"), x(t), Ot(), Object(fe.b)(), Object(Jt.c)()
                } catch (t) {
                    Object(Ft.b)(t, "_init")
                }
                "function" == typeof e && e()
            }

            function kt() {
                var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "display",
                    n = Ct.a.getState();
                try {
                    switch (e) {
                        case Xt.a.DISPLAY:
                            return Object(Mt.c)("targeting", "targetingKeys-display"), n.config.useSafeFrames ? [].concat(ne(Ut.i), ["amznhost"]) : Ut.i;
                        case Xt.a.VIDEO:
                            return Object(Mt.c)("targeting", "targetingKeys-video"), n.config.useSafeFrames ? [].concat(ne(Ut.B), ["amznhost"]) : Ut.B;
                        default:
                            if (Object(Qt.g)(null == (t = Ct.a.getState()) ? void 0 : t.config, Gt.a)) {
                                if (Object(Mt.c)("targeting", "targetingKeys-newBid"), Object(zt.i)(Ct.a.getState().targetingKeys[e])) return Ct.a.getState().targetingKeys[e]
                            } else Object(Mt.c)("targeting", "targetingKeys-invalid");
                            return []
                    }
                } catch (t) {
                    return Object(Ft.b)(t, "_targetingKeys", {
                        makeVisibleToAllUsers: !0
                    }), []
                }
            }

            function At() {
                try {
                    return Ct.a.getState().AAXReqs.reduce((function(t, e) {
                        return e.bidConfig.slots.reduce((function(t, e) {
                            return t[e.slotID] = e.slotName, t
                        }), t)
                    }), {})
                } catch (t) {
                    return Object(Ft.b)(t, "_getSlotIdToNameMapping", {
                        makeVisibleToAllUsers: !0
                    }), {}
                }
            }
            try {
                Object(zt.k)(window, "apstag") && Object(zt.k)(window.apstag, "_Q") && 0 < window.apstag._Q.length && Ct.a.dispatch({
                    type: "SET_Q",
                    Q: window.apstag._Q
                })
            } catch (t) {
                Object(Ft.b)(t, "apstag-storeQ", {
                    makeVisibleToAllUsers: !0
                })
            }
            window.apstag = function() {
                    var e = {
                        punt: z,
                        init: Et,
                        _updateConfig: x,
                        debug: Lt.a,
                        _getSlotIdToNameMapping: At,
                        targetingKeys: kt,
                        fetchBids: Tt,
                        setDisplayBids: It,
                        renderImp: St,
                        bids: z,
                        deleteId: Kt.a,
                        updateId: Kt.e,
                        renewId: Kt.d,
                        dpa: Kt.a,
                        upa: Kt.e,
                        rpa: Kt.d,
                        thirdPartyData: {},
                        isGDPRRegion: !1,
                        rr: se.a,
                        _storeManager: {
                            config: {
                                getConfig: G
                            }
                        },
                        re: Ft.b
                    };
                    return Object.keys(e).forEach((function(t) {
                        "function" == typeof e[t] && (e[t] = Object(ee.a)(t, e[t]), e[t] = Object(Ft.d)(e[t], t))
                    })), L ? Object(Lt.b)(!0, t) : n && Object(Lt.b)(!1, t), !0 === Object(Lt.c)("exposeApi") && (e._api = {
                        _getBidSetInfo: E,
                        _applyTargetingToGPTSlot: l,
                        dispatch: Ct.a.dispatch,
                        _clearTargetingFromGPTSlot: o,
                        _clearBidSetOnSlot: s,
                        _getCurrentSlotBids: u,
                        _creativeURL: T,
                        getSlotFetchCounts: S,
                        buildBidUrl: Qt.d
                    }), e
                }(),
                function() {
                    try {
                        var t, e = (Ct.a.dispatch({
                            type: "SHOULD_SAMPLE_FEATURES",
                            value: Object(zt.l)(Ct.a.getState().cfg.FEATURE_SAMPLING_RATE)
                        }), Ct.a.dispatch({
                            type: "SET_HOST",
                            hostName: "DEFAULT_AAX_BID_HOST",
                            hostValue: "aax.amazon-adsystem.com"
                        }), Ct.a.dispatch({
                            type: "SHOULD_SAMPLE_LATENCY",
                            value: Object(zt.l)(Ct.a.getState().cfg.LATENCY_SAMPLING_RATE)
                        }), null !== Ct.a.getState().cfg.TEST_BID_ENDPOINT && (t = Object(zt.l)(Ct.a.getState().cfg.TEST_PATH_FREQUENCY), Ct.a.dispatch({
                            type: "SHOULD_USE_TEST_BID_ENDPOINT",
                            value: t
                        }), t) && null !== Ct.a.getState().cfg.TEST_PATH_LATENCY_SAMPLE_RATE && Ct.a.dispatch({
                            type: "SHOULD_SAMPLE_LATENCY",
                            value: Object(zt.l)(Ct.a.getState().cfg.TEST_PATH_LATENCY_SAMPLE_RATE)
                        }), Ct.a.dispatch({
                            type: "SHOULD_SAMPLE_SLOT_RENDER",
                            value: Object(zt.l)(Ct.a.getState().cfg.SLOT_RENDER_SAMPLING_RATE)
                        }), Ct.a.getState());
                        (e.experiments.shouldSampleLatency || e.displayAdServer.shouldSampleRender) && j(), e.displayAdServer.shouldSampleRender && ft(), e.experiments.shouldSampleLatency && w()
                    } catch (t) {
                        Object(Ft.b)(t, "apstag-sampleLatency")
                    }
                    try {
                        q()
                    } catch (t) {
                        Object(Ft.b)(t, "apstag-doLast")
                    }
                    if (!Object(Rt.k)(window, !0)) try {
                        var n = function(t) {
                            t && "object" !== re(t) || (t = "Request Timeout or Error"), Object(Ft.b)({
                                message: "csm-rtb-comm-js loading failed",
                                name: t
                            }, "__csm-rtb-comm-js__")
                        };
                        Object(qt.d)({
                            url: Ct.a.getState().cfg.CSM_RTB_COMMUNICATOR_JS,
                            onload: function t(e) {
                                e.readyState === XMLHttpRequest.DONE && 200 === e.status ? eval(e.responseText) : n(JSON.stringify({
                                    status: e.statusText,
                                    response: e.responseXML
                                }))
                            },
                            onerror: n,
                            ontimeout: n
                        })
                    } catch (t) {
                        Object(Ft.b)(t, "__load-csm-rtb-comm-js__")
                    }
                    Object(Lt.e)()
                }()
        }(), null != (i = Object(Zt.a)("_system")) && i.record("apstag/library/didLoad", {
            source: "bundle"
        }))
    } catch (t) {
        Object(Ft.b)(t, "apstag")
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    })), n.d(e, "c", (function() {
        return o
    })), n.d(e, "b", (function() {
        return i
    })), n.d(e, "e", (function() {
        return a
    })), n.d(e, "f", (function() {
        return c
    })), n.d(e, "d", (function() {
        return s
    }));

    function r(t, e) {
        try {
            return "number" != typeof t[e] ? 0 : Math.round(t[e])
        } catch (t) {
            return 0
        }
    }

    function o(t, e) {
        try {
            var n = i(t, e)[0];
            if (void 0 !== n) return n
        } catch (t) {}
        return null
    }

    function i(t, e) {
        try {
            return t.performance.getEntriesByType("resource").filter((function(t) {
                return e.test(t.name)
            }))
        } catch (t) {
            return []
        }
    }

    function a(t, e) {
        try {
            var n = t.performance.timing[e];
            return void 0 === n ? 0 : n
        } catch (t) {
            return 0
        }
    }

    function c(t) {
        try {
            var e;
            return 0 === ["redirectStart", "redirectEnd", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "secureConnectionStart"].reduce((function(e, n) {
                return e + r(t, n)
            }), 0) ? null : (e = r(t, "fetchStart"), ["domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd"].reduce((function(n, o) {
                return n && r(t, o) === e
            }), !0))
        } catch (t) {
            return null
        }
    }

    function s() {
        try {
            var t = window.performance.timeOrigin;
            return void 0 === t ? window.performance.timing.navigationStart : t
        } catch (t) {
            return 0
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "c", (function() {
        return g
    })), n.d(e, "b", (function() {
        return v
    })), n.d(e, "a", (function() {
        return j
    })), n.d(e, "e", (function() {
        return w
    })), n.d(e, "d", (function() {
        return T
    }));
    var r = n(1),
        o = n(18),
        i = n(10),
        a = n(3),
        c = n(9),
        s = n(0),
        u = n(5),
        l = n(15);

    function d(t) {
        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var f, b = ["email"],
        p = /@/,
        y = /^[0-9a-fA-F]{64}$/,
        m = ((e = f = f || {})[e.noConsent = 0] = "noConsent", e[e.token = 1] = "token", "https://tk.amazon-adsystem.com/envelope"),
        g = function(t) {
            return y.test(t || "")
        };

    function h(t) {
        return t === f.noConsent ? "AMZN-NoCookieConsent" : "AMZN-Token"
    }

    function O(t, e, n) {
        t = 0 < arguments.length && void 0 !== t ? t : "", e = 1 < arguments.length && void 0 !== e ? e : 0, n = 2 < arguments.length && void 0 !== n ? n : f.token;
        try {
            var o = new Date(e).toUTCString();
            u.a.getDefault().cookie.setItem(h(n), t, o)
        } catch (t) {
            Object(r.b)(t, "setAmznToken-".concat(n))
        }
    }

    function v() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : f.token;
        try {
            var e = u.a.getDefault().cookie.getItem(h(t));
            return e || ""
        } catch (e) {
            return Object(r.b)(e, "getAmznToken-".concat(t)), ""
        }
    }

    function j(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "api";
        try {
            if (void 0 !== t && "function" != typeof t) throw new Error("Callback function must be a function, ".concat(d(t), " provided"));
            "function" != typeof t && (t = function() {}), O(), O("", 0, f.noConsent), Object(a.c)("id", "d-".concat(e))
        } catch (t) {
            Object(r.b)(t, "deleteIdentity", {
                makeVisibleToAllUsers: !0
            })
        }
        t()
    }

    function S(t, e, n, o, u, d) {
        try {
            n = Object(c.a)(n);
            var b, p, y = Object(l._getInitConfig)({
                overrides: null == d ? void 0 : d.initConfig
            });
            if (!Object(s.k)(y, "pubID") && 0 === (null != t ? t : "").length) throw new Error("apstag.init must be called before ID functions");
            y.pubID = 0 < (null != (b = y.pubID) ? b : "").length ? y.pubID : t;
            var g = {
                url: m,
                onload: function(t) {
                    try {
                        if (t.readyState === XMLHttpRequest.DONE && 200 === t.status) {
                            if ("string" != typeof(p = JSON.parse(t.responseText)).AIPToken || "number" != typeof p.cookieExpiry) return n(), void Object(r.b)(new Error("Invalid AIPES response"), "callAipes-response");
                            "" === p.AIPToken ? (Object(a.c)("id", "endReqAipes-tokenEmpty"), O("1", p.cookieExpiry, f.noConsent)) : (Object(a.c)("id", "endReqAipes-tokenAvailable"), Object(a.g)(), o && O(p.AIPToken, p.cookieExpiry))
                        } else t.readyState === XMLHttpRequest.DONE && Object(r.b)(new Error("AIPES response code: ".concat(t.status)), "callAipes-onload", {
                            makeVisibleToAllUsers: !0
                        })
                    } catch (t) {
                        Object(r.b)(t, "callAipes-onload", {
                            makeVisibleToAllUsers: !0
                        })
                    }
                    n(o ? null : p)
                },
                onerror: function() {
                    Object(r.b)(new Error("AIPES response code: ".concat(this.status)), "callAipes-onerror", {
                        makeVisibleToAllUsers: !0
                    }), n()
                },
                ontimeout: function() {
                    Object(r.b)(new Error("AIPES request timeout"), "callAipes-ontimeout", {
                        makeVisibleToAllUsers: !0
                    }), n()
                },
                headers: {
                    "Content-Type": "application/json"
                },
                body: function(t, e, n) {
                    try {
                        var o = {
                            publisherId: e.pubID,
                            hashedRecords: t.hashedRecords
                        };
                        return n.enabled ? (o.gdpr = 1, void 0 !== n.consent && (o.gdprConsent = n.consent)) : 0 === n.enabled && (o.gdpr = 0), void 0 !== t.ttl && (o.ttl = t.ttl), JSON.stringify(o)
                    } catch (t) {
                        return Object(r.b)(t, "buildAipesBody", {
                            makeVisibleToAllUsers: !0
                        }), ""
                    }
                }(e, y, u)
            };
            Object(a.c)("id", "startReqAipes"), Object(i.d)(g)
        } catch (t) {
            Object(r.b)(t, "callAipes", {
                makeVisibleToAllUsers: !0
            }), n()
        }
    }

    function w(t, e, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "api",
            c = 4 < arguments.length ? arguments[4] : void 0;
        "function" != typeof e && (e = function() {}), "boolean" != typeof n && (n = !0);
        try {
            if (!Object(s.j)(t)) throw new Error("'tokenConfig' must be an object, ".concat("object" === d(t) ? "null" : d(t), " provided"));
            t.optOut ? j(e, "u-oo") : (j((function() {}), "u"), Object(a.c)("id", "u-".concat(i)), function(t) {
                try {
                    var e = [];
                    if (!Object(s.k)(t, "gdpr") || Object(s.j)(t.gdpr) && !Object(s.i)(t.gdpr) ? Object(s.k)(t, "gdpr") && (Object(s.k)(t.gdpr, "enabled") && -1 === [!0, !1].indexOf(t.gdpr.enabled) && e.push("`gdpr.enabled` must be a boolean"), Object(s.k)(t.gdpr, "consent")) && "string" != typeof t.gdpr.consent && e.push("'gdpr.consent' must be a valid IAB-formatted string") : e.push("`gdpr` must be an Object"), Object(s.k)(t, "optOut") && -1 === [!0, !1].indexOf(t.optOut) && e.push("'optOut' must be a boolean"), Object(s.k)(t, "hashedRecords") && Object(s.i)(t.hashedRecords) ? 1 !== t.hashedRecords.length ? e.push("'hashedRecords' must contain exactly one item") : t.hashedRecords.forEach((function(t) {
                            Object(s.k)(t, "type") && -1 !== b.indexOf(t.type) || e.push("'type' must be 'email' in item '".concat(JSON.stringify(t), "'")), Object(s.k)(t, "encrypted") && "boolean" != typeof t.encrypted && e.push("'encrypted' must be a boolean in item '".concat(JSON.stringify(t), "'")), Object(s.k)(t, "record") && "string" == typeof t.record ? t.encrypted || y.test(t.record) ? t.encrypted && p.test(t.record) && e.push("'record' must NOT be an un-hashed, un-encrypted email") : e.push("'record' must be a SHA256 hash in item '".concat(JSON.stringify(t), "'")) : e.push("'record' must be a string in item '".concat(JSON.stringify(t), "'"))
                        })) : e.push("'hashedRecords' must be an array"), Object(s.k)(t, "ttl") && ("number" != typeof t.ttl || isNaN(t.ttl) || t.ttl <= 0 || t.ttl % 1 != 0) && e.push("'ttl' must be a positive integer"), !(0 < e.length)) return 1;
                    Object(r.b)({
                        name: "TokenConfigValidationError",
                        message: "There was an issue with the TokenConfig provided ".concat(JSON.stringify(t), ":\n") + e.map((function(t) {
                            return "- ".concat(t)
                        })).join("\n")
                    }, "validateTokenConfig-invalid", {
                        makeVisibleToAllUsers: !0
                    })
                } catch (t) {
                    Object(r.b)(t, "validateTokenConfig", {
                        makeVisibleToAllUsers: !0
                    })
                }
            }(t) ? Object(o.a)(t.gdpr, S.bind(null, null != c ? c : "", t, e, n)) : e())
        } catch (t) {
            Object(r.b)(t, "updateIdentity", {
                makeVisibleToAllUsers: !0
            }), e()
        }
    }

    function T(t, e, n, o) {
        "function" != typeof e && (e = function() {}), "boolean" != typeof n && (n = !0);
        try {
            if (!Object(s.j)(t)) throw new Error("'tokenConfig' must be an object, ".concat("object" === d(t) ? "null" : d(t), " provided"));
            t.optOut ? j(e, "r-oo") : "" !== v(f.noConsent) ? e() : "" !== v() ? (e(), Object(a.c)("id", "r-noop")) : w(t, e, n, "r", o)
        } catch (t) {
            Object(r.b)(t, "renewIdentity", {
                makeVisibleToAllUsers: !0
            }), e()
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return f
    })), n.d(e, "c", (function() {
        return g
    })), n.d(e, "b", (function() {
        return h
    })), n.d(e, "d", (function() {
        return O
    }));
    var r = n(1),
        o = n(3),
        i = n(0),
        a = n(2);

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function s(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function u(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? s(Object(n), !0).forEach((function(e) {
                var r, o;
                r = t, o = n[e = e], (e = function(t) {
                    return t = function(t, e) {
                        if ("object" !== c(t) || null === t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 === n) return String(t);
                        if ("object" !== c(n = n.call(t, e))) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }(t, "string"), "symbol" === c(t) ? t : String(t)
                }(e)) in r ? Object.defineProperty(r, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[e] = o
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var l = Number.isInteger || function(t) {
            return "number" == typeof t && isFinite(t) && Math.floor(t) === t
        },
        d = "__tcfapi";

    function f(t, e) {
        var n, a = !1,
            s = {
                log: {
                    status: "no-status"
                }
            },
            f = 50,
            b = "global-func-error";

        function p() {
            a || (a = !0, e(u(u({}, s), {}, {
                log: u({}, s.log)
            })))
        }
        e = Object(r.d)(e, "GdprCallback");
        try {
            if (!1 === (t = Object(i.j)(t) ? u({}, t) : {}).enabled || 0 === t.enabled ? (s.log.status = "explicit-no-gdpr", s.enabled = 0) : !0 === t.enabled || 1 === t.enabled ? (s.log.status = Object(i.k)(t, "consent") ? "explicit-consent-passed" : "explicit-no-consent-passed", s.enabled = 1, s.consent = t.consent) : Object(i.k)(t, "enabled") && (s.log.status = Object(i.k)(t, "consent") ? "malformed-with-consent" : "malformed-without-consent", s.consent = t.consent, l(t.enabled) ? s.enabled = t.enabled : s.enabled = 1), Object(i.k)(t, "enabled") && (s.log.enabled = t.enabled), Object(i.k)(t, "cmpTimeout") && l(t.cmpTimeout) && (f = t.cmpTimeout, s.log.cmpTimeout = f), void 0 !== s.enabled) return Object(o.c)("gdpr", "pub-api"), Object(i.k)(s, "consent") && "string" != typeof s.consent && (delete s.consent, Object(r.b)(new Error("Invalid consent: must be string, given ".concat(c(s.consent))), "getGdprConfig-pub-consent-invalid", {
                makeVisibleToAllUsers: !0
            })), void p()
        } catch (t) {
            Object(r.b)(t, "getGdprConfig-parseConfig", {
                makeVisibleToAllUsers: !0
            })
        }
        try {
            Object(i.k)(window, d) && "function" == typeof window[d] ? (n = "tcfv2", Object(o.c)("gdpr", n), setTimeout((function() {
                s.log.status = "".concat(n, "-timeout"), p()
            }), f), b = "".concat(n, "-internal-error"), window[d]("getTCData", 2, (function(t, e) {
                try {
                    if (e && Object(i.j)(t)) {
                        if (s.log.status = "".concat(n, "-success"), Object(i.k)(t, "tcString") ? s.consent = t.tcString : Object(i.k)(t, "consentData") && (s.consent = t.consentData), s.enabled = t.gdprApplies ? 1 : 0, 0 === s.enabled && delete s.consent, s.gdprApplies = t.gdprApplies, Object(i.k)(t, "tcString") && 0 < (t.tcString || "").length) {
                            var o = t.tcString;
                            try {
                                Object(i.k)(window, d) && "function" == typeof window[d] && window[d]("addEventListener", 2, (function(t, e) {
                                    "string" == typeof o && 0 !== o.length && t.tcString !== o && Object(r.b)(new Error("mismatched tcString: " + "".concat(e, " - ").concat(null == (e = t.tcString) ? void 0 : e.length, " - ").concat(o.length) + " - ".concat(t.eventStatus)), "checkMatchingTcf-param-mismatch")
                                }))
                            } catch (t) {
                                Object(r.b)(t, "checkMatchingTcf")
                            }
                        }
                    } else s.log.status = "".concat(n, "-error");
                    p()
                } catch (t) {
                    s.log.status = "func-error", p(), Object(r.b)(t, "cmpCallback-".concat(n), {
                        makeVisibleToAllUsers: !0
                    })
                }
            }))) : (Object(o.c)("gdpr", "no-cmp"), s.log.status = "no-cmp", p())
        } catch (t) {
            s.log.status = b, p(), Object(r.b)(t, "getGdprConfig-".concat(b), {
                makeVisibleToAllUsers: !0
            })
        }
    }

    function b(t) {
        for (var e = [], n = -1; 0 <= (n = t.indexOf("1", n + 1));) e.push(n + 1);
        return e
    }

    function p(t) {
        for (var e = [], n = parseInt(m(t, 12), 2), r = 0; r < n; r++) {
            var o = parseInt(m(t, 1), 2),
                i = parseInt(m(t, 16), 2);
            if (e.push(i), o)
                for (var a = parseInt(m(t, 16), 2), c = i + 1; c <= a; c++) e.push(c)
        }
        return e
    }

    function y(t) {
        var e = parseInt(m(t, 16), 2);
        return parseInt(m(t, 1), 2) ? p(t) : b(m(t, e))
    }

    function m(t, e) {
        var n = t.bits.substr(t.index, e);
        return t.index += e, n
    }

    function g(t) {
        try {
            var e, n, o;
            return !!t && (!((e = function(t) {
                try {
                    for (var e = (t = (t = t.replace(/-/g, "+")).replace(/_/g, "/")).split(".")[0], n = window.atob(e), o = "", i = 0; i < n.length; i++) o += ("0000000" + n.charCodeAt(i).toString(2)).substr(-8);
                    return o
                } catch (e) {
                    return Object(r.b)(new Error("TCF string conversion failed. (TCF string: ".concat(t, ")")), "TCFToBinary", {
                        makeVisibleToAllUsers: !0
                    }), ""
                }
            }(t)).length < 230) && (o = {
                bits: e,
                index: 0
            }, (n = {}).version = parseInt(m(o, 6), 2), 2 === n.version) && (n.created = parseInt(m(o, 36), 2), n.lastUpdated = parseInt(m(o, 36), 2), n.cmpId = parseInt(m(o, 12), 2), n.cmpVersion = parseInt(m(o, 12), 2), n.consentScreen = parseInt(m(o, 6), 2), n.consentLanguage = String.fromCharCode(parseInt(m(o, 6), 2) + 65) + String.fromCharCode(parseInt(m(o, 6), 2) + 65), n.vendorListVersion = parseInt(m(o, 12), 2), n.tcfPolicyVersion = parseInt(m(o, 6), 2), n.isServiceSpecific = "1" === m(o, 1), n.useNonStandardStacks = "1" === m(o, 1), n.specialFeatureOptIns = b(m(o, 12)), n.purposesConsent = b(m(o, 24)), n.purposesLITransparency = b(m(o, 24)), n.purposeOneTreatment = "1" === m(o, 1), n.publisherCC = String.fromCharCode(parseInt(m(o, 6), 2) + 65) + String.fromCharCode(parseInt(m(o, 6), 2) + 65), n.vendorConsents = y(o), n.vendorLegitimateInterests = y(o), n.publisherRestrictions = function(t) {
                for (var e = parseInt(m(t, 12), 2), n = [], r = 0; r < e; r++) {
                    var o = parseInt(m(t, 6), 2),
                        i = parseInt(m(t, 2), 2);
                    n.push({
                        purposeId: o,
                        restrictionType: i,
                        vendorIds: p(t)
                    })
                }
                return n
            }(o), n))
        } catch (t) {
            return Object(r.b)(t, "parseTCFString", {
                makeVisibleToAllUsers: !0
            }), !1
        }
    }

    function h(t) {
        var e = [];
        try {
            var n = Date.now(),
                r = (t || e.push("Invalid tcString: ".concat(t)), 2 !== t.version && e.push("tcString version not supported: ".concat(t.version)), t.useNonStandardStacks && e.push("tcString's useNonStandardStacks should not be true"), t.isServiceSpecific || e.push("tcString needs to be service specific"), t.vendorListVersion < 51 && e.push("tcString is outdated (minimum vendor list version 51)"), t.publisherRestrictions ? t.publisherRestrictions.filter((function(t) {
                    return 1 === t.purposeId && 0 <= t.vendorIds.indexOf(793)
                })) : []);
            if (0 === r.length) v(t) || e.push("Invalid publisher restrictions");
            else switch (r[0].restrictionType) {
                case 0:
                case 2:
                    e.push("Invalid publisher restrictions");
                    break;
                default:
                    v(t) || e.push("Invalid publisher restrictions")
            }
            return a.a.dispatch({
                type: "RECORD_TCF_PARSE_TIME",
                time: Date.now() - n
            }), e
        } catch (t) {
            if (e.length) return e;
            throw t
        }
    }

    function O(t, e) {
        if (!t) return !!window.apstag && !window.apstag.isGDPRRegion && !0 !== e;
        if (window.apstag && !window.apstag.isGDPRRegion && !1 === e) return !0;
        if (2 !== t.version) return !1;
        if (t.useNonStandardStacks) return !1;
        if (!t.isServiceSpecific) return !1;
        if (t.vendorListVersion < 51) return !1;
        if (0 === (e = t.publisherRestrictions.filter((function(t) {
                return 1 === t.purposeId && 0 <= t.vendorIds.indexOf(793)
            }))).length) return v(t);
        switch (e[0].restrictionType) {
            case 0:
            case 2:
                return !1;
            default:
                return v(t)
        }
    }

    function v(t) {
        return !(!Object(i.k)(t, "vendorConsents") || !Object(i.k)(t, "purposesConsent")) && 0 <= t.vendorConsents.indexOf(793) && 0 <= t.purposesConsent.indexOf(1)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return d
    }));
    var r = n(0),
        o = n(1),
        i = n(6),
        a = n(3);

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, l(r.key), r)
        }
    }

    function u(t, e, n) {
        (e = l(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function l(t) {
        return t = function(t, e) {
            if ("object" !== c(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== c(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === c(t) ? t : String(t)
    }
    var d = function() {
        function t(e) {
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function");
            u(this, "_slotConfig", void 0), u(this, "rawSlot", void 0), this._slotConfig = e, this.rawSlot = e
        }
        var e, n;
        return e = t, (n = [{
            key: "slotID",
            get: function() {
                return this._slotConfig.slotID
            }
        }, {
            key: "slotName",
            get: function() {
                return this._slotConfig.slotName
            }
        }, {
            key: "slotParams",
            get: function() {
                return this._slotConfig.slotParams
            }
        }, {
            key: "companions",
            get: function() {
                return this._slotConfig.companions
            }
        }, {
            key: "slotConfig",
            get: function() {
                return {
                    slotID: this.slotID,
                    slotName: this.slotName,
                    sizes: this.sizes
                }
            }
        }, {
            key: "mediaType",
            get: function() {
                return i.a.DISPLAY
            }
        }, {
            key: "sizes",
            get: function() {
                return []
            }
        }, {
            key: "floor",
            get: function() {
                var t;
                return Object(r.k)(this._slotConfig, "floor") && "USD" === this._slotConfig.floor.currency && this.validateFloorValue(this._slotConfig.floor.value) ? (t = this._slotConfig.floor, Object(a.c)("customFloor", "y")) : Object(a.c)("customFloor", "n"), t
            }
        }, {
            key: "aaxSlotParams",
            get: function() {
                var t = this;
                try {
                    return Object(r.k)(this, "slotParams") && Object(r.j)(this.slotParams) ? Object.keys(this.slotParams).filter((function(e) {
                        return t.validateSlotParamValue(t.slotParams[e])
                    })).reduce((function(e, n) {
                        return e[n] = t.slotParams[n], e
                    }), {}) : void 0
                } catch (t) {
                    return this.reportError(t, "aaxSlotParams"), this.slotParams
                }
            }
        }, {
            key: "aaxSlot",
            get: function() {
                Object(a.c)("slotType", this.mediaType);
                var t = {
                    kv: this.aaxSlotParams
                };
                return this.floor && (t.fc = this.floor.currency, t.fp = this.floor.value), t
            }
        }, {
            key: "isValid",
            value: function() {
                var t, e, n = [],
                    o = [];
                return void 0 === this.slotID ? n.push("'slotID' must be provided and a string") : "string" != typeof this.slotID && o.push("'slotID' must be a string"), Object(r.k)(this._slotConfig, "floor") && Object(r.j)(this._slotConfig.floor) && (t = (e = this._slotConfig.floor).currency, e = e.value, "USD" !== t && o.push("'floor' currency only supports USD"), this.validateFloorValue(e) || o.push("'floor' value must be a positive integer")), Object(r.k)(this, "companions") && (Object(r.i)(this.companions) ? this.companions.forEach((function(t) {
                    "string" != typeof t && n.push("'companions' contains a non-string item : ".concat(t))
                })) : n.push("'companions' contains non-array")), 0 < n.length ? (this.reportIsValidMessages([].concat(n, o), !0), !1) : (0 < o.length && this.reportIsValidMessages(o, !1), !0)
            }
        }, {
            key: "reportError",
            value: function(t, e, n) {
                Object(o.b)(t, "Slot-".concat(e), n)
            }
        }, {
            key: "setTargeting",
            value: function(t, e) {}
        }, {
            key: "getTargeting",
            value: function(t) {
                return []
            }
        }, {
            key: "clearTargeting",
            value: function(t) {}
        }, {
            key: "reportIsValidMessages",
            value: function(t, e) {
                this.reportError({
                    name: "SlotValidationError",
                    message: this.buildIsValidMessage(t, this._slotConfig)
                }, "validation-".concat(e ? "error" : "warn"), {
                    makeVisibleToAllUsers: !0
                })
            }
        }, {
            key: "validateSlotParamValue",
            value: function(t) {
                var e = this;
                try {
                    return Object(r.i)(t) ? 0 < t.length && t.reduce((function(t, n) {
                        return t && e.validateSlotParamValue(n)
                    }), !0) : "string" == typeof t && 0 < t.length
                } catch (t) {
                    return Object(o.b)(t, "validateSlotParamValue"), !1
                }
            }
        }, {
            key: "validateFloorValue",
            value: function(t) {
                return "number" == typeof t && 0 < t && t % 1 == 0
            }
        }, {
            key: "buildIsValidMessage",
            value: function(t, e) {
                return "There was an issue with the configuration for this slot: ".concat(JSON.stringify(e), "\n") + t.map((function(t) {
                    return "- ".concat(t)
                })).join("\n")
            }
        }]) && s(e.prototype, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t
    }()
}, function(t, e, n) {
    "use strict";
    var r;
    n.d(e, "a", (function() {
        return r
    })), (n = r = r || {}).DISPLAY = "d", n.VIDEO = "v", n.MULTI_FORMAT = "mf"
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, a(r.key), r)
        }
    }

    function i(t, e, n) {
        (e = a(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function a(t) {
        return t = function(t, e) {
            if ("object" !== r(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== r(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === r(t) ? t : String(t)
    }
    n.d(e, "a", (function() {
        return c
    }));
    var c = function() {
        function t() {
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function");
            i(this, "isSupported", !1), i(this, "needNewBidObject", !1)
        }
        var e, n;
        return e = t, (n = [{
            key: "cmdQueuePush",
            value: function(t) {}
        }, {
            key: "slotRenderEndedEvent",
            value: function(t) {}
        }, {
            key: "setTargeting",
            value: function(t, e) {}
        }, {
            key: "getTargeting",
            value: function(t) {
                return []
            }
        }, {
            key: "clearTargeting",
            value: function(t, e) {}
        }, {
            key: "hasAdServerObjectLoaded",
            value: function() {
                return !1
            }
        }, {
            key: "isCommandQueueDefined",
            value: function() {
                return !1
            }
        }, {
            key: "getSlots",
            value: function() {
                return []
            }
        }]) && o(e.prototype, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t
    }()
}, function(t, e, n) {
    "use strict";
    n.d(e, "d", (function() {
        return b
    })), n.d(e, "c", (function() {
        return p
    })), n.d(e, "b", (function() {
        return y
    })), n.d(e, "g", (function() {
        return O
    })), n.d(e, "a", (function() {
        return T
    })), n.d(e, "e", (function() {
        return D
    })), n.d(e, "f", (function() {
        return _
    }));
    var r = n(1),
        o = n(0),
        i = n(3),
        a = n(2),
        c = n(4),
        s = n(6);

    function u(t) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, d(r.key), r)
        }
    }

    function d(t) {
        return t = function(t, e) {
            if ("object" !== u(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== u(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === u(t) ? t : String(t)
    }
    var f = function() {
        function t() {
            var e, n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                r = this,
                o = t;
            if (!(r instanceof o)) throw new TypeError("Cannot call a class as a function");
            r = this, o = void 0, (e = d(e = "_rawProps")) in r ? Object.defineProperty(r, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : r[e] = o, this._rawProps = n
        }
        var e, n;
        return e = t, (n = [{
            key: "source",
            get: function() {
                return "web"
            }
        }, {
            key: "omsdkAccessMode",
            get: function() {
                return "limited"
            }
        }, {
            key: "publisherType",
            get: function() {
                var t = a.a.getState().config;
                return t && !0 === t.isSelfServePub ? s.b.SELF_SERVE_WEB : s.b.MANAGED_WEB
            }
        }, {
            key: "publisherUUID",
            get: function() {
                var t = a.a.getState().config;
                if (t) return t.pubID
            }
        }, {
            key: "integratorVersion",
            get: function() {
                return c.l
            }
        }, {
            key: "bidId",
            get: function() {
                var t = this._rawProps.bidId;
                if ("string" == typeof t) return t
            }
        }, {
            key: "dealId",
            get: function() {
                var t = this._rawProps.dealId;
                if ("string" == typeof t) return t
            }
        }, {
            key: "hostName",
            get: function() {
                var t = this._rawProps.hostName;
                if ("string" == typeof t) return t
            }
        }, {
            key: "pricePoint",
            get: function() {
                var t = this._rawProps.pricePoint;
                if ("string" == typeof t) return t
            }
        }, {
            key: "targetingMap",
            get: function() {
                var t = this._rawProps.targetingMap;
                if ("string" == typeof t) return t
            }
        }, {
            key: "adServerType",
            get: function() {
                var t = a.a.getState().config;
                if (t) return t.adServer
            }
        }, {
            key: "adServerAdUnitId",
            get: function() {
                var t = this._rawProps.adServerAdUnitId;
                if ("string" == typeof t) return t
            }
        }, {
            key: "apsAdUnitId",
            get: function() {
                var t = this._rawProps.apsAdUnitId;
                if ("string" == typeof t) return t
            }
        }, {
            key: "getProperties",
            value: function() {
                return JSON.stringify({
                    source: this.source,
                    omsdkAccessMode: this.omsdkAccessMode,
                    publisherType: this.publisherType,
                    publisherUUID: this.publisherUUID,
                    integratorVersion: this.integratorVersion,
                    bidId: this.bidId,
                    hostName: this.hostName,
                    dealId: this.dealId,
                    pricePoint: this.pricePoint,
                    targetingMap: this.targetingMap,
                    adServerType: this.adServerType,
                    adServerAdUnitId: this.adServerAdUnitId,
                    apsAdUnitId: this.apsAdUnitId
                })
            }
        }]) && l(e.prototype, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t
    }();

    function b(t, e) {
        try {
            if (Object(o.k)(e, "slotID")) {
                var n = e.slotID,
                    i = t.getElementById(n);
                if (i instanceof HTMLDivElement) return i
            }
        } catch (t) {
            Object(r.b)(t, "getVideoDivElement-outstream")
        }
    }

    function p(t, e) {
        try {
            Object(o.k)(t, "bidID") && (e += "b=".concat(t.bidID)), Object(o.k)(t, "pp") && void 0 === t.dealId && (e += "&pp=".concat(t.pp)), e += "&rnd=".concat(Object(o.d)())
        } catch (t) {
            Object(r.b)(t, "constructVastTag")
        }
        return e
    }

    function y(t, e, n, o) {
        try {
            var i = {
                    bidId: null == n ? void 0 : n.bidID,
                    hostName: null == n ? void 0 : n.host,
                    dealId: null == n ? void 0 : n.dealId,
                    pricePoint: null == n ? void 0 : n.pp,
                    apsAdUnitId: null == n ? void 0 : n.slotID
                },
                a = {
                    key: "$$videoPlayerProps$$",
                    value: new f(i).getProperties()
                },
                c = {
                    key: "$$apstagVastTag$$",
                    value: t
                },
                s = {
                    key: "$$apstagCompanionContainers$$",
                    value: JSON.stringify(o || [])
                },
                u = e;
            return [a, c, s, {
                key: "$$apsvidonerror$$",
                value: "try { window.parent.apstag.re(new Error('video player load error'), 'vsdk-load-fail'); } catch(e) {}"
            }].forEach((function(t) {
                var e = t.key;
                t = t.value;
                return u = u.replace(e, t)
            })), u
        } catch (t) {
            return Object(r.b)(t, "constructVastTag"), ""
        }
    }
    var m = {},
        g = function(t) {
            return m[t] || (m[t] = {
                started: !1,
                completed: !1,
                loaded: !1,
                isPaused: !1
            }), m[t]
        },
        h = {
            root: null,
            rootMargin: "0px",
            threshold: .5
        };

    function O(t, e, n) {
        try {
            var o;
            window.addEventListener("message", (function(t) {
                v(t, n)
            })), window.IntersectionObserver ? (o = new window.IntersectionObserver((function(r) {
                r.forEach((function(r) {
                    .5 < r.intersectionRatio && e.contentWindow && (j(e, t, n), o.disconnect())
                }))
            }), h)).observe(t) : Object(r.b)({
                name: "IntersectionObserver",
                message: "IntersectionObserver not supported "
            }, "startVideoAndHandlePlayback")
        } catch (t) {
            Object(r.b)(t, "startVideoAndHandlePlayback")
        }
    }

    function v(t, e) {
        if (t.origin === window.top.location.origin && !0 === t.data.apsVideoPlayer) switch (t.data.event) {
            case "completed":
                g(e).completed = !0;
                break;
            case "loaded":
                var n;
                g(e).loaded = !0, a.a.getState().outstream.shouldSample && (n = Date.now() - a.a.getState().outstream.renderStart, Object(i.e)("loaded", e, n))
        }
    }

    function j(t, e, n) {
        try {
            null !== t.contentDocument && Object(o.h)(["complete", "interactive"], t.contentDocument.readyState) ? w(t, e, n) : null !== t.contentDocument && "uninitialized" !== t.contentDocument.readyState ? t.contentDocument.addEventListener("DOMContentLoaded", (function() {
                w(t, e, n)
            })) : t.addEventListener("load", (function() {
                w(t, e, n)
            })), setTimeout(w, 1e3, !0)
        } catch (t) {
            Object(r.b)(t, "loadVideoAd")
        }
    }

    function S(t, e, n) {
        try {
            var o;
            window.IntersectionObserver && (o = new window.IntersectionObserver((function(e) {
                e.forEach((function(e) {
                    g(n).completed && o.disconnect(), e.intersectionRatio < .5 && !g(n).isPaused ? t.contentWindow && t.contentWindow.adsM && (t.contentWindow.adsM.pause(), g(n).isPaused = !0) : g(n).isPaused && t.contentWindow && t.contentWindow.adsM && (t.contentWindow.adsM.play(), g(n).isPaused = !1)
                }))
            }), {
                threshold: .5
            })).observe(e)
        } catch (e) {
            Object(r.b)(e, "handleAutoPauseAndPlay")
        }
    }

    function w(t, e, n) {
        t.contentWindow && !g(n).started && (g(n).started = !0, function(t, e, n) {
            var r = Number(new Date) + (e || 2e3);
            return n = n || 100, new Promise((function e(o, i) {
                var a = t();
                a ? o(a) : Number(new Date) < r ? setTimeout(e, n, o, i) : i(new Error("apsVideoPlayer timed out"))
            }))
        }((function() {
            return g(n).loaded
        }), 3e4, 100).then((function() {
            t.contentWindow && t.contentWindow.adsM && (t.contentWindow.adsM.play(), S(t, e, n))
        })).catch((function() {
            S(t, e, n), Object(r.b)({
                name: "VideoPlayerTimeout",
                message: "video player took more than 30 seconds to load"
            }, "startAd")
        })))
    }

    function T(t, e) {
        try {
            e && e.appendChild(t)
        } catch (t) {
            Object(r.b)(t, "_appendDivElement")
        }
    }

    function D(t, e) {
        try {
            t.appendChild(e)
        } catch (t) {
            Object(r.b)(t, "_insertVideoIframeInsideDiv")
        }
    }

    function _(t) {
        var e = document.createElement("div");
        return e.style.width = "".concat(t[0], "px"), e.style.height = "".concat(t[1], "px"), e.style.margin = "0 auto", e.id = "apsVideoDiv-".concat(Object(o.d)()), e
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return d
    }));
    var r = n(1);

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, c(r.key), r)
        }
    }

    function a(t, e, n) {
        return (e = c(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function c(t) {
        return t = function(t, e) {
            if ("object" !== o(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== o(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === o(t) ? t : String(t)
    }
    var s = "__tcfapi",
        u = "isListenedTo",
        l = "consentManagementPlatform",
        d = function() {
            function t(e) {
                if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function");
                a(this, "store", void 0), a(this, "globalContext", void 0), this.store = e.stateContainer, this.globalContext = e.globalContext
            }
            var e, n, o;
            return e = t, o = [{
                key: "readStoredConsentData",
                value: function(t) {
                    return null == (t = t.getState()[l]) ? void 0 : t.tcData
                }
            }], (n = [{
                key: "isListenerActive",
                get: function() {
                    return this.isListenedTo
                }
            }, {
                key: "isListenedTo",
                get: function() {
                    var t;
                    return (null == (t = this.store.getState()[l]) ? void 0 : t[u]) || !1
                },
                set: function(t) {
                    this.store.dispatch(a({
                        type: "RECORD_CMP_LISTENED_TO"
                    }, u, t))
                }
            }, {
                key: "writeConsentDataToStore",
                value: function(t) {
                    this.store.dispatch(a({
                        type: "RECORD_CMP_CONSENT_DATA"
                    }, "tcData", t))
                }
            }, {
                key: "onConsentDataChange",
                value: function(t, e, n) {
                    try {
                        e ? (this.isListenedTo = !0, t && this.writeConsentDataToStore(t), null != n && n(!0)) : null != n && n(!1)
                    } catch (t) {
                        Object(r.b)(t, "attemptConsentDataSync-onConsentDataChange")
                    }
                }
            }, {
                key: "syncConsentData",
                value: function(t) {
                    var e = this;
                    this.globalContext[s] ? this.globalContext[s]("addEventListener", 2, (function(n, r) {
                        return e.onConsentDataChange(n, r, t)
                    })) : null != t && t(!1)
                }
            }, {
                key: "syncConsentDataIfNotSynced",
                value: function(t) {
                    this.isListenedTo ? null != t && t(!0) : this.syncConsentData(t)
                }
            }, {
                key: "attemptConsentDataSync",
                value: function(t) {
                    try {
                        this.syncConsentDataIfNotSynced(t)
                    } catch (e) {
                        Object(r.b)(e, "attemptConsentDataSync"), null != t && t(!1)
                    }
                }
            }]) && i(e.prototype, n), o && i(e, o), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t
        }()
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return m
    })), n.d(e, "b", (function() {
        return g
    })), n.d(e, "c", (function() {
        return h
    }));
    var r = n(10),
        o = n(1),
        i = n(2),
        a = n(4),
        c = n(8),
        s = n(15),
        u = n(0),
        l = n(13),
        d = n(3),
        f = n(5);

    function b(t) {
        return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function p(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function y(t) {
        var e = Object(c.c)("bsHost", i.a.getState().hosts.DEFAULT_BS_HOST);
        e = {
            url: "".concat(a.t).concat("prod", ".").concat("us-east-1", ".").concat(e).concat("/v1/recordVendorsLoaded"),
            body: JSON.stringify(t),
            headers: {
                "Content-Type": "application/json"
            },
            onload: function() {}
        };
        try {
            Object(r.d)(e)
        } catch (t) {
            Object(o.b)(t, "load3PLibraryConfig-VendorLoadedEvent-SendError")
        }
    }

    function m(t, e, n) {
        if (Object(u.l)(a.y)) try {
            var r = Object(s._getInitConfig)({
                    overrides: null == n ? void 0 : n.initConfig
                }),
                i = r.isSelfServePub ? a.u : r.pubID;
            y([{
                publisherId: r.pubID,
                sourceId: i,
                failure: e,
                errorName: t.name,
                errorMessage: t.message
            }])
        } catch (t) {
            Object(o.b)(t, "load3PLibraryConfig-VendorLoadedEventError-ConstructError")
        }
    }

    function g(t, e) {
        var n;
        if (n = t, Object(u.l)("number" == typeof n["3psamplerate"] ? n["3psamplerate"] : a.y)) try {
            y(JSON.parse(t[a.z]).map((function(t) {
                return function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? p(Object(n), !0).forEach((function(e) {
                            var r, o;
                            r = t, o = n[e = e], (e = function(t) {
                                return t = function(t, e) {
                                    if ("object" !== b(t) || null === t) return t;
                                    var n = t[Symbol.toPrimitive];
                                    if (void 0 === n) return String(t);
                                    if ("object" !== b(n = n.call(t, e))) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }(t, "string"), "symbol" === b(t) ? t : String(t)
                            }(e)) in r ? Object.defineProperty(r, e, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[e] = o
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({
                    publisherId: Object(s._getInitConfig)({
                        overrides: null == e ? void 0 : e.initConfig
                    }).pubID
                }, t)
            })))
        } catch (t) {
            Object(o.b)(t, "load3PLibraryConfig-VendorLoadedEvent-ConstructError")
        }
    }

    function h(t) {
        t = (null == (t = 0 < (t || "").length ? Object(l.a)(t) : Object(l.a)()) ? void 0 : t.read("config/loaded")) || (null == t || null == (t = t.queue) ? void 0 : t.some((function(t) {
            return "_config/config/didLoad" === t.type
        })));
        var e = "1" === f.a.getDefault().localStorage.getItem(a.e);
        t = t && e ? "all" : t && !e ? "config" : !t && e ? "cxm" : "none";
        Object(d.c)("configOrder", "".concat(t))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return h
    })), n.d(e, "c", (function() {
        return j
    })), n.d(e, "e", (function() {
        return S
    })), n.d(e, "d", (function() {
        return w
    })), n.d(e, "b", (function() {
        return I
    }));
    var a = n(10),
        l = n(1),
        c = n(34),
        d = n(4),
        s = n(2),
        f = n(5),
        b = n(0),
        u = n(3),
        p = n(18),
        r = n(35),
        m = n(24),
        y = n(15);

    function i(t, e) {
        var n, r, o, i, a = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (a) return r = !(n = !0), {
            s: function() {
                a = a.call(t)
            },
            n: function() {
                var t = a.next();
                return n = t.done, t
            },
            e: function(t) {
                r = !0, o = t
            },
            f: function() {
                try {
                    n || null == a.return || a.return()
                } finally {
                    if (r) throw o
                }
            }
        };
        if (Array.isArray(t) || (a = g(t)) || e && t && "number" == typeof t.length) return a && (t = a), i = 0, {
            s: e = function() {},
            n: function() {
                return i >= t.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: t[i++]
                }
            },
            e: function(t) {
                throw t
            },
            f: e
        };
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function g(t, e) {
        var n;
        if (t) return "string" == typeof t ? o(t, e) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0
    }

    function o(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function h(t) {
        v(t), O(t)
    }

    function O(t) {
        try {
            var e, n = f.a.getDefault().sessionStorage,
                r = "aps_targeting_comscore",
                o = n.getItem(r, {
                    isJson: !0
                });
            n.removeItem(r), o && (e = "vnd_prx_segments", t.setTargeting(e, o[e]))
        } catch (t) {
            Object(l.b)(t, "applyComscoreTargeting")
        }
    }

    function v(t) {
        try {
            var e, n, r, o, i, a = f.a.getDefault().sessionStorage,
                c = "aps_targeting_ias",
                s = a.getItem(c, {
                    isJson: !0
                });
            a.removeItem(c), s && (e = s.targeting.slots[t.slotID], Object.keys(e).forEach((function(n) {
                var r = e[n];
                t.setTargeting(n, r)
            })), n = s.targeting, r = n.brandSafety, o = n.fr, i = n.custom, r && Object.keys(r).forEach((function(t) {
                var e = r[t];
                window.googletag.pubads().setTargeting(t, e)
            })), i && Object.keys(i).forEach((function(t) {
                var e = i[t];
                window.googletag.pubads().setTargeting(t, e)
            })), o) && window.googletag.pubads().setTargeting("fr", o)
        } catch (n) {
            Object(l.b)(n, "applyIasTargeting")
        }
    }

    function j(r) {
        var o = s.a.getState().experiments.shouldSampleLatency,
            i = Date.now(),
            t = Object(c.a)(window.location, window.top.location);
        if (null !== t) {
            var e = {
                url: t,
                withCredentials: !0,
                onload: function t(e) {
                    if (200 === e.status) try {
                        s.a.dispatch({
                            type: "RECORD_LIBRARY_LOAD_CALL_LATENCY",
                            latency: Date.now() - i
                        }), o && setTimeout(u.d, 1e3);
                        var n = JSON.parse(e.response);
                        eval(n["3pvendor"]), Object(p.a)(Object(y._getInitConfig)({
                            overrides: null == r ? void 0 : r.initConfig
                        }).gdpr, (function(t) {
                            var e;
                            t && (e = Object(p.c)(t.consent), Object(f.b)()) && Object(p.d)(e, t.gdprApplies) && f.a.getDefault().localStorage.setItem(d.e, "1")
                        })), Object(m.b)(n)
                    } catch (t) {
                        Object(l.b)(t, "load3PLibraryConfig-onload"), Object(m.a)(t, "load3PLibraryConfig-onload")
                    }
                },
                onerror: function(t) {
                    t = new Error("".concat(t.type, ": ").concat(t.loaded, " bytes transferred")), Object(l.b)(t, "load3PLibraryConfig-onerror"), Object(m.a)(t, "load3PLibraryConfig-onerror")
                }
            };
            try {
                Object(a.d)(e)
            } catch (t) {
                Object(l.b)(t, "load3PLibraryConfig"), Object(m.a)(t, "load3PLibraryConfig")
            }
            o && setTimeout(u.d, 1e3)
        }
    }

    function S() {
        return Object(b.k)(window, "creativeVendorLibraryLoaded") && !0 === window.creativeVendorLibraryLoaded || Object(b.k)(window, "confiant")
    }

    function w() {
        var t = {
            renderTimes: {}
        };
        window.addEventListener("message", (function(e) {
            Object(r.a)(t, e)
        }))
    }

    function T(t) {
        if (t) try {
            var e, n = JSON.parse(window.atob(decodeURIComponent(t))),
                r = {
                    id: n.envelope,
                    newGen: 2
                },
                o = f.a.getDefault().localStorage;
            return Object(b.k)(n, "timestamp") && (!(e = o.getItem(d.m)) || e < n.timestamp ? (r.newGen = 1, o.setItem(d.m, n.timestamp)) : r.newGen = 0), r
        } catch (e) {
            return {
                id: decodeURIComponent(t),
                newGen: 2
            }
        }
        return !1
    }
    var D = ["_publink", "_publink_srv", "_pbjs_publink"];

    function _() {
        try {
            var t, e = i(D);
            try {
                for (e.s(); !(t = e.n()).done;) {
                    var n, r = t.value,
                        o = f.a.getDefault().cookie.getItem(r, {
                            isJson: !0
                        });
                    if (o) return null != (n = o.publink) && n
                }
            } catch (t) {
                e.e(t)
            } finally {
                e.f()
            }
            return !1
        } catch (t) {
            return !1
        }
    }

    function I() {
        try {
            var t, e, n, r, o, i, a, c, s, u = {
                ids: {}
            };
            return "1" === f.a.getDefault().localStorage.getItem(d.e) && ((t = f.a.getDefault().localStorage.getItem("id5id")) && (u.ids.id5 = JSON.parse(decodeURIComponent(t)).universal_uid), (e = f.a.getDefault().localStorage.getItem("_pubcid") || f.a.getDefault().localStorage.getItem("_sharedID")) && (u.ids.pubcommon = e), n = !1, f.a.getDefault().localStorage.getItem("_lr_env") ? n = T(f.a.getDefault().localStorage.getItem("_lr_env")) : f.a.getDefault().cookie.getItem("_lr_env") ? (r = f.a.getDefault().cookie.getItem("_lr_env")) && (n = T(r)) : f.a.getDefault().localStorage.getItem("idl_env") ? n = T(f.a.getDefault().localStorage.getItem("idl_env")) : f.a.getDefault().cookie.getItem("idl_env") && (o = f.a.getDefault().cookie.getItem("idl_env")) && (n = T(o)), n && (u.ids.liveRamp = n.id, Object(b.k)(n, "newGen")) && (u.md = {
                liveRamp: n.newGen
            }), (i = f.a.getDefault().localStorage.getItem("hadronId") || f.a.getDefault().localStorage.getItem("auHadronId")) && (u.ids.audigent = i), (a = f.a.getDefault().localStorage.getItem("panoramaId")) && (u.ids.lotame = a), (c = _()) && (u.ids.publink = c), s = f.a.getDefault().localStorage.getItem("33acrossId")) && (u.ids["33across"] = decodeURIComponent(s)), u
        } catch (t) {
            Object(l.b)(t, "getIdentityConfig")
        }
        return {
            ids: {}
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return l
    }));
    var r = n(0),
        o = n(1),
        i = n(3);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, u(r.key), r)
        }
    }

    function s(t, e, n) {
        (e = u(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function u(t) {
        return t = function(t, e) {
            if ("object" !== a(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== a(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === a(t) ? t : String(t)
    }
    var l = function() {
        function t(e) {
            var n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                o = this,
                i = t;
            if (!(o instanceof i)) throw new TypeError("Cannot call a class as a function");
            s(this, "validSizeStringRegex", /^[0-9]+x[0-9]+$/), s(this, "numberStringRegex", /^[0-9]+$/), s(this, "_sizes", void 0), s(this, "_permit1D", !0), s(this, "_allowUndefined", !1), this._sizes = e, this._permit1D = n, this._allowUndefined = r
        }
        var e, n;
        return e = t, (n = [{
            key: "isValid",
            value: function() {
                return !(void 0 !== this._sizes || !this._allowUndefined) || 0 < this.sizes.length
            }
        }, {
            key: "sizes",
            get: function() {
                var t = this;
                try {
                    var e = [];
                    if (Object(r.i)(this._sizes)) {
                        this._sizes = this._sizes.filter((function(t) {
                            return "fluid" !== t
                        }));
                        var n = "2d",
                            i = this._sizes;
                        if (i && 0 < i.length && !Object(r.i)(i[0]) && ("string" != typeof i[0] || !this.validSizeStringRegex.test(i[0]))) {
                            if (!this._permit1D) throw new Error("Sizes must be 2d array");
                            n = "1d", i = [i]
                        }
                        e = i.filter((function(e) {
                            return t.isValidSize(n, e)
                        })).map((function(t) {
                            return Object(r.i)(t) ? t : t.split("x").map((function(t) {
                                return parseInt(t, 10)
                            }))
                        }))
                    }
                    return e
                } catch (e) {
                    return Object(o.b)(e, "SizesDelegate-getSizes"), []
                }
            }
        }, {
            key: "aaxSizes",
            get: function() {
                if (void 0 !== this._sizes || !this._allowUndefined) return this.sizes.filter(r.i).map((function(t) {
                    return t.join("x")
                }))
            }
        }, {
            key: "isValidSize",
            value: function(t, e) {
                var n = this,
                    a = [];

                function c(t) {
                    t = JSON.stringify(t), -1 === a.indexOf(t) && (a.push(t), Object(o.b)({
                        name: "SizesDelegate-isValidSize-invalid",
                        message: "Invalid Slot Size: ".concat(JSON.stringify(e))
                    }, "SizesDelegate-isValidSize-invalid"))
                }
                try {
                    return "string" == typeof e && this.validSizeStringRegex.test(e) ? (Object(i.c)("AaxSlotSizes", "".concat(t, "-compiled")), !0) : Object(r.i)(e) && 1 !== e.length ? (2 < e.length && c(e), e.slice(0, 2).reduce((function(e, r) {
                        return e && ("number" == typeof r || "string" == typeof r) && !("string" == typeof r && !n.numberStringRegex.test(r) || ("string" == typeof r ? Object(i.c)("AaxSlotSizes", "".concat(t, "-string")) : Object(i.c)("AaxSlotSizes", "".concat(t, "-number")), 0))
                    }), !0)) : (c(e), !1)
                } catch (c) {
                    return Object(o.b)(c, "isValidSize"), !0
                }
            }
        }]) && c(e.prototype, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t
    }()
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return g
    }));
    e = n(19);
    var r = n(0),
        o = n(1),
        i = n(6);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function c(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(n), !0).forEach((function(e) {
                y(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, m(r.key), r)
        }
    }

    function l() {
        return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = p(t)););
                return t
            }(t, e);
            if (r) return (r = Object.getOwnPropertyDescriptor(r, e)).get ? r.get.call(arguments.length < 3 ? t : n) : r.value
        }).apply(this, arguments)
    }

    function d(t, e) {
        return (d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function f(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = p(t);
            n = e ? (n = p(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
            if (n && ("object" === a(n) || "function" == typeof n)) return n;
            if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
            return b(r)
        }
    }

    function b(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function p(t) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function y(t, e, n) {
        (e = m(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function m(t) {
        return t = function(t, e) {
            if ("object" !== a(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== a(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === a(t) ? t : String(t)
    }
    var g = function(t) {
        var e = a;
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && d(e, t);
        var n = f(a);

        function a(t) {
            var e;
            if (this instanceof a) return y(b(e = n.call(this, {
                slotID: t.getSlotElementId(),
                slotName: t.getAdUnitPath()
            })), "rawSlot", void 0), e.rawSlot = t, e;
            throw new TypeError("Cannot call a class as a function")
        }
        return e = a, (t = [{
            key: "mediaType",
            get: function() {
                return i.a.DISPLAY
            }
        }, {
            key: "sizes",
            get: function() {
                try {
                    var t = Object(r.g)(window).split("x").map((function(t) {
                            return Number(t)
                        })),
                        e = this.rawSlot.getSizes(t[0], t[1]);
                    return null === e ? [] : e.filter((function(t) {
                        return "fluid" !== t
                    })).map((function(t) {
                        return [t.getWidth(), t.getHeight()]
                    }))
                } catch (t) {
                    return this.reportError(t, "sizes"), []
                }
            }
        }, {
            key: "aaxSlot",
            get: function() {
                var t = s(s({}, l(p(a.prototype), "aaxSlot", this)), {}, {
                    sd: this.slotID,
                    s: this.sizes.filter(r.i).map((function(t) {
                        return t.join("x")
                    }))
                });
                return this.slotID !== this.slotName && (t.sn = this.slotName), t
            }
        }, {
            key: "isValid",
            value: function() {
                return !(!l(p(a.prototype), "isValid", this).call(this) || 0 === this.sizes.length && (this.reportIsValidMessages(["'sizes' must have at least 1 valid item"], !0), 1))
            }
        }, {
            key: "reportError",
            value: function(t, e, n) {
                Object(o.b)(t, "GptSlot-".concat(e), n)
            }
        }, {
            key: "setTargeting",
            value: function(t, e) {
                try {
                    this.rawSlot.setTargeting(t, e)
                } catch (t) {
                    this.reportError(t, "setTargeting")
                }
            }
        }, {
            key: "getTargeting",
            value: function(t) {
                try {
                    return this.rawSlot.getTargeting(t)
                } catch (t) {
                    return this.reportError(t, "getTargeting"), []
                }
            }
        }, {
            key: "clearTargeting",
            value: function(t) {
                try {
                    this.rawSlot.clearTargeting(t)
                } catch (t) {
                    this.reportError(t, "clearTargeting")
                }
            }
        }]) && u(e.prototype, t), Object.defineProperty(e, "prototype", {
            writable: !1
        }), a
    }(e.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "c", (function() {
        return i
    })), n.d(e, "a", (function() {
        return a
    })), n.d(e, "b", (function() {
        return c
    }));
    var r = n(1),
        o = n(0);

    function i(t) {
        try {
            return !(!Object(o.k)(t, "$sf") || !Object(o.k)(t.$sf, "ext"))
        } catch (t) {
            return Object(r.b)(t, "isSafeFrame"), !1
        }
    }

    function a(t, e) {
        try {
            var n, o, i, a = e.innerWidth,
                c = e.innerHeight,
                s = parseInt(t[0], 10),
                u = parseInt(t[1], 10),
                l = s - a,
                d = u - c,
                f = e.sfAPI || (null == (n = e.$sf) ? void 0 : n.ext);
            !f || a === s && c === u || (null != (o = f.register) && o.call(f, s, u), null != (i = f.expand) && i.call(f, {
                r: l,
                b: d,
                push: !0
            }))
        } catch (t) {
            Object(r.b)(t, "expandSf")
        }
    }

    function c(t) {
        try {
            return 1 === t.innerWidth && 1 === t.innerHeight
        } catch (t) {
            return Object(r.b)(t, "is1x1Creative"), !1
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return f
    })), n.d(e, "b", (function() {
        return b
    }));
    var r = n(1),
        o = n(10),
        i = n(0),
        a = n(13);

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function s(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, d(r.key), r)
        }
    }

    function l(t, e, n) {
        (e = d(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function d(t) {
        return t = function(t, e) {
            if ("object" !== c(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== c(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === c(t) ? t : String(t)
    }

    function f(t) {
        try {
            var e = function(t) {
                try {
                    var e, n = null == (e = Object(a.a)(null == t ? void 0 : t.pubID)) ? void 0 : e.read("ad/context");
                    return Object(i.j)(n) ? {
                        ortb2: n
                    } : {}
                } catch (t) {
                    return Object(r.b)(t, "getSignals"), {}
                }
            }(t);
            return 0 === Object.keys(e).length ? "" : Object(o.c)(e)
        } catch (t) {
            return Object(r.b)(t, "getSignalsParams"), ""
        }
    }

    function b() {
        var t = window.apscustom || [];
        if (window.apscustom = {
                push: y,
                loaded: !0
            }, Array.isArray(t))
            for (; t.length;) y(t.shift())
    }
    var p = new(function() {
        function t() {
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function");
            l(this, "ignoreKeys", ["apsCustomSlotname", "apsCustomProgram"]), l(this, "programKey", "apscustom"), l(this, "dataParamPrefix", "apsCustom")
        }
        var e, n;
        return e = t, (n = [{
            key: "init",
            value: function(t) {
                var e, n, r, o = this;
                t && t.id && (n = document.getElementById(t.id)) && (t._element = n, e = Object.assign({}, n.dataset), n.setAttribute("data-aps-custom-status", "read"), n = e.apsCustomProgram || this.programKey, Object.keys(e).filter((function(t) {
                    return t.indexOf(o.dataParamPrefix) <= -1 || o.ignoreKeys.includes(t)
                })).forEach((function(t) {
                    return delete e[t]
                })), r = {
                    slotID: t.id,
                    slotName: e.apsCustomSlotname || t.id,
                    sizes: [
                        [999, 999]
                    ]
                }, this.fetchBidsAndRender(r, t, function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? s(Object(n), !0).forEach((function(e) {
                            l(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({
                    program: n
                }, e)))
            }
        }, {
            key: "fetchBidsAndRender",
            value: function(t, e, n) {
                var r = this;
                (t = {
                    slots: [t],
                    params: n
                }).timeout = null != (n = e.timeout) ? n : 6e4, t._endpointDomain = "aax-us-east.amazon-adsystem.com", window.apstag.fetchBids(t, (function(t) {
                    return r.renderBids(t, e)
                }))
            }
        }, {
            key: "renderBids",
            value: function(t, e) {
                t.forEach((function(t) {
                    var n, r = document.createElement("iframe"),
                        o = t.size.split("x"),
                        i = (null == (i = t.targeting) ? void 0 : i.amzniid) || t.amzniid;
                    i && e && (r.style.marginLeft = "0", r.style.marginTop = "0", r.style.height = "".concat(o[1], "px"), r.style.width = "100%", r.setAttribute("scrolling", "no"), r.setAttribute("frameborder", "0"), o = e._element, e.location && (n = document.createElement("div"), null != (t = document.getElementById(t.slotID)) && t.insertAdjacentElement(e.location, n), o = n), null != (t = o) && t.appendChild(r), o = null == r || null == (n = r.contentWindow) ? void 0 : n.document) && (o.open(), o.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><style>html{height:100%}body{height:100%;margin:0;overflow:hidden}</style></head><body><script>window.parent.apstag.renderImp(document, "' + i + '", {"inheritSize": true});<\/script></body></html>'), o.close(), null != (t = e._element)) && t.setAttribute("data-aps-custom-status", "rendered")
                }))
            }
        }]) && u(e.prototype, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t
    }());

    function y(t) {
        t = Object.assign({}, t), p.init(t)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return b
    }));
    var r = n(0),
        o = (e = n(21), n(1)),
        i = n(27);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, f(r.key), r)
        }
    }

    function s(t, e) {
        return (s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function u(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = d(t);
            n = e ? (n = d(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
            if (n && ("object" === a(n) || "function" == typeof n)) return n;
            if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
            return l(r)
        }
    }

    function l(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function d(t) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function f(t) {
        return t = function(t, e) {
            if ("object" !== a(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== a(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === a(t) ? t : String(t)
    }
    var b = function(t) {
        var e = a;
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && s(e, t);
        var n = u(a);

        function a() {
            var t = this,
                e = a;
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            for (var r, o, i = arguments.length, c = new Array(i), s = 0; s < i; s++) c[s] = arguments[s];
            return e = l(t = n.call.apply(n, [this].concat(c))), o = !0, (r = f(r = "isSupported")) in e ? Object.defineProperty(e, r, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = o, t
        }
        return e = a, (t = [{
            key: "reportError",
            value: function(t, e) {
                Object(o.b)(t, "GoogletagAdServer-".concat(e))
            }
        }, {
            key: "cmdQueuePush",
            value: function(t) {
                try {
                    window.googletag.cmd.push(t)
                } catch (t) {
                    this.reportError(t, "cmdQueuePush")
                }
            }
        }, {
            key: "slotRenderEndedEvent",
            value: function(t) {
                try {
                    window.googletag.pubads().addEventListener("slotRenderEnded", (function(e) {
                        e = new i.a(e.slot), t(e)
                    }))
                } catch (t) {
                    this.reportError(t, "slotRenderEndedEvent")
                }
            }
        }, {
            key: "setTargeting",
            value: function(t, e) {
                try {
                    window.googletag.pubads().setTargeting(t, e)
                } catch (t) {
                    this.reportError(t, "setTargeting")
                }
            }
        }, {
            key: "getTargeting",
            value: function(t) {
                try {
                    return window.googletag.pubads().getTargeting(t) || []
                } catch (t) {
                    return this.reportError(t, "getTargeting"), []
                }
            }
        }, {
            key: "clearTargeting",
            value: function(t) {
                try {
                    window.googletag.pubads().clearTargeting(t)
                } catch (t) {
                    this.reportError(t, "clearTargeting")
                }
            }
        }, {
            key: "hasAdServerObjectLoaded",
            value: function() {
                try {
                    return Object(r.k)(window, "googletag") && Object(r.k)(window.googletag, "apiReady") && !0 === window.googletag.apiReady
                } catch (t) {
                    return this.reportError(t, "hasAdServerObjectLoaded"), !1
                }
            }
        }, {
            key: "isCommandQueueDefined",
            value: function() {
                try {
                    return Object(r.k)(window, "googletag") && Object(r.k)(window.googletag, "cmd")
                } catch (t) {
                    return this.reportError(t, "isCommandQueueDefined"), !1
                }
            }
        }, {
            key: "getSlots",
            value: function() {
                try {
                    return window.googletag.pubads().getSlots().map((function(t) {
                        return new i.a(t)
                    }))
                } catch (t) {
                    return this.reportError(t, "getSlots"), []
                }
            }
        }]) && c(e.prototype, t), Object.defineProperty(e, "prototype", {
            writable: !1
        }), a
    }(e.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return a
    })), n.d(e, "a", (function() {
        return c
    }));
    var r = n(4),
        o = n(0),
        i = n(1);

    function a(t) {
        try {
            return Object(o.k)(t, "debug")
        } catch (t) {
            return Object(i.b)(t, "isApstagLibrary"), !1
        }
    }

    function c(t) {
        try {
            return !!Object(o.k)(t, r.a) && !0 === t[r.a]
        } catch (t) {
            return Object(i.b)(t, "hasApstagJsLoaded"), !1
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return y
    }));
    e = n(19);
    var r = n(26);

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function a(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? i(Object(n), !0).forEach((function(e) {
                b(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, p(r.key), r)
        }
    }

    function s() {
        return (s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = f(t)););
                return t
            }(t, e);
            if (r) return (r = Object.getOwnPropertyDescriptor(r, e)).get ? r.get.call(arguments.length < 3 ? t : n) : r.value
        }).apply(this, arguments)
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function l(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = f(t);
            n = e ? (n = f(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
            if (n && ("object" === o(n) || "function" == typeof n)) return n;
            if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
            return d(r)
        }
    }

    function d(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function f(t) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function b(t, e, n) {
        (e = p(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function p(t) {
        return t = function(t, e) {
            if ("object" !== o(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== o(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === o(t) ? t : String(t)
    }
    var y = function(t) {
        var e = o;
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && u(e, t);
        var n = l(o);

        function o(t) {
            if (this instanceof o) return b(d(t = n.call(this, t)), "_sizesDelegate", void 0), t._sizesDelegate = new r.a(t.rawSlot.sizes), t;
            throw new TypeError("Cannot call a class as a function")
        }
        return e = o, (t = [{
            key: "sizes",
            get: function() {
                return this._sizesDelegate.sizes
            }
        }, {
            key: "aaxSizes",
            get: function() {
                return this._sizesDelegate.aaxSizes || []
            }
        }, {
            key: "aaxSlot",
            get: function() {
                var t = {
                    sd: this.slotID,
                    s: this.aaxSizes
                };
                return this.slotID !== this.slotName && (t.sn = this.slotName), a(a({}, t), s(f(o.prototype), "aaxSlot", this))
            }
        }, {
            key: "isValid",
            value: function() {
                return !(!s(f(o.prototype), "isValid", this).call(this) || 0 === this.sizes.length && (this.reportIsValidMessages(["'sizes' must have at least 1 valid item"], !0), 1))
            }
        }]) && c(e.prototype, t), Object.defineProperty(e, "prototype", {
            writable: !1
        }), o
    }(e.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    })), n.d(e, "b", (function() {
        return c
    }));
    var r = n(2),
        o = n(1),
        i = n(0),
        a = n(10);

    function c(t) {
        try {
            var e = r.a.getState().cfg.COOKIE_MATCH_DELAY;
            setTimeout((function() {
                try {
                    if (Object(i.k)(t, "cmp")) {
                        var e = t.cmp;

                        function n(t) {
                            try {
                                var e;
                                r.a.getState().cmpFired || (r.a.dispatch({
                                    type: "CMP_FIRED"
                                }), (e = document.createElement("iframe")).style.display = "none", e.src = t, document.body.appendChild(e))
                            } catch (t) {
                                Object(o.b)(t, "_doCookieMatch-ready")
                            }
                        }
                        try {
                            "loading" === document.readyState ? document.addEventListener && document.addEventListener("DOMContentLoaded", (function() {
                                n(e)
                            }), !1) : n(e)
                        } catch (e) {
                            Object(o.b)(e, "_doCookieMatch")
                        }
                    } else Object(i.k)(t, "cmpjs") && Object(a.b)(t.cmpjs)
                } catch (e) {
                    Object(o.b)(e, "_tryCookieMatch-setTimeout")
                }
            }), e)
        } catch (e) {
            Object(o.b)(e, "_tryCookieMatch")
        }
    }

    function s(t, e) {
        var n = e;
        return function() {
            var e = {
                method: t,
                args: arguments
            };
            try {
                e.ts = Date.now(), r.a.dispatch({
                    type: "LOG_EVENT",
                    event: e
                })
            } catch (e) {
                Object(o.b)(e, "_logEvent")
            }
            return n.apply(void 0, arguments)
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return c
    }));
    var r = n(2),
        o = n(1),
        i = n(8),
        a = n(4);

    function c(t, e) {
        try {
            var n, c = r.a.getState(),
                s = c.config,
                u = Object(i.c)("host", c.hosts.DEFAULT_CXM_HOST),
                l = c.cfg.LIB_CONFIG_PATH;
            try {
                if (0 <= ["http:", "https:"].indexOf(t.protocol)) n = t.protocol + "//" + t.hostname;
                else {
                    if (!(0 <= ["http:", "https:"].indexOf(e.protocol))) return null;
                    n = e.protocol + "//" + e.hostname
                }
            } catch (t) {
                if (t instanceof window.DOMException) return null;
                throw t
            }
            var d, f = {
                src: s.isSelfServePub ? a.u : s.pubID,
                u: encodeURIComponent(n)
            };
            return s.isSelfServePub && (f.pubid = s.pubID), !f.src || isNaN(Number(f.src)) ? null : (d = Object.keys(f).map((function(t) {
                return "".concat(t.trim(), "=").concat(String(f[t]).trim())
            })).join("&"), "".concat(a.x).concat(u).concat(l, "?").concat(d))
        } catch (t) {
            return Object(o.b)(t, "buildLibraryConfigUrl"), null
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return c
    }));
    var r = n(0),
        o = n(9),
        i = n(11),
        a = n(3);

    function c(t, e) {
        var n, c, s, u, l, d;
        Object(r.j)(e.data) ? (Object(r.k)(e.data, "bidInfo") && (Object(r.k)(e.data.bidInfo, "src") ? (n = e.data.bidInfo.src, n = new URL(n).searchParams.get("b")) : Object(r.k)(e.data.bidInfo, "jsonp") && (l = e.data.bidInfo.jsonp, n = JSON.parse(l.substr(17, l.length - 20)).amzniid)), Object(r.k)(e.data, "renderData") && (c = (l = e.data.renderData).id, Object(r.k)(l, "renderStart") || Object(r.k)(l, "renderEnd")) && (d = l.renderStart, l = l.renderEnd, d ? (t.renderTimes[c] = {
            timeStamp: d
        }, n && (t.renderTimes[c].bidId = n)) : l && Object(r.k)(t.renderTimes, c) && 0 !== t.renderTimes[c].timeStamp && (d = l - t.renderTimes[c].timeStamp, l = {
            _type: "iframeRender",
            c: "dtb",
            pid: i.b,
            crt: d
        }, (n = t.renderTimes[c].bidId ? t.renderTimes[c].bidId : n) ? Object(a.a)(n, l) : Object(a.b)(l))), Object(r.k)(e.data, "blockData") && (d = e.data.blockData.blockInfo, t = {
            _type: "malwareBlock",
            c: "dtb",
            tpbr: 1,
            pid: i.b,
            info: d
        }, n ? Object(a.a)(n, t) : Object(a.b)(t)), Object(r.k)(e.data, "creativeFormatPixel") && (l = (c = (c = e).data.creativeFormatPixel).vendorId, d = void 0 === (d = c.pixelData) ? {} : d, l) && ("creativeFormatBidPixel" === c.type && (u = {
            _type: "creativeFormatBidPixel",
            cfbp: 1,
            c: "dtb",
            vendorId: l
        }, (s = void 0 === (s = d.bi) ? "" : s) && (u.bi = s), Object(a.b)(u)), "creativeFormatImpressionPixel" === c.type) && (s = d.bi, c = void 0 === (u = d.ii) ? "" : u, u = {
            _type: "creativeFormatImpressionPixel",
            cfip: 1,
            c: "dtb",
            vendorId: l,
            bp: void 0 === (u = d.bp) ? 0 : u,
            bpc: void 0 === (l = d.bpc) ? "USD" : l
        }, (d = void 0 === s ? "" : s) && (u.bi = d), c && (u.ii = c), Object(a.b)(u))) : e.data && "adBlocked" === e.data && (n = {
            _type: "adBlockedPixel",
            c: "dtb",
            pid: i.b,
            abc: 1,
            u: Object(o.g)(window)
        }, Object(a.b)(n))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(3),
        o = n(1);

    function i(t) {
        try {
            !1 !== window.apstag.isGDPRRegion || "function" != typeof document.hasTrustToken ? Object(r.c)("trustToken", "notSupported") : (t.trustTokenParameter = {
                type: "send-redemption-record",
                issuers: ["https://www.amazon.com"],
                refreshPolicy: "none",
                includeTimestampHeader: !0,
                signRequestData: "headers-only",
                additionalSigningData: "additional_signing_data"
            }, Object(r.c)("trustToken", "supported"), document.hasTrustToken("https://www.amazon.com").then((function(t) {
                t && Object(r.c)("trustToken", "present")
            })).catch((function() {
                Object(r.c)("trustToken", "absent")
            })))
        } catch (t) {
            Object(o.b)(t, "trustToken")
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return g
    }));
    e = n(19);
    var r = n(26),
        o = n(6),
        i = n(20);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function c(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(n), !0).forEach((function(e) {
                y(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, m(r.key), r)
        }
    }

    function l() {
        return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = p(t)););
                return t
            }(t, e);
            if (r) return (r = Object.getOwnPropertyDescriptor(r, e)).get ? r.get.call(arguments.length < 3 ? t : n) : r.value
        }).apply(this, arguments)
    }

    function d(t, e) {
        return (d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function f(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = p(t);
            n = e ? (n = p(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
            if (n && ("object" === a(n) || "function" == typeof n)) return n;
            if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
            return b(r)
        }
    }

    function b(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function p(t) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function y(t, e, n) {
        (e = m(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function m(t) {
        return t = function(t, e) {
            if ("object" !== a(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== a(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === a(t) ? t : String(t)
    }
    var g = function(t) {
        var e = a;
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && d(e, t);
        var n = f(a);

        function a(t) {
            if (this instanceof a) return y(b(t = n.call(this, t)), "_sizesDelegate", void 0), t._sizesDelegate = new r.a(t.rawSlot.sizes), t;
            throw new TypeError("Cannot call a class as a function")
        }
        return e = a, (t = [{
            key: "mediaType",
            get: function() {
                return o.a.VIDEO
            }
        }, {
            key: "aaxMediaType",
            get: function() {
                return i.a.VIDEO
            }
        }, {
            key: "sizes",
            get: function() {
                return this._sizesDelegate.sizes
            }
        }, {
            key: "aaxSizes",
            get: function() {
                return this._sizesDelegate.aaxSizes || []
            }
        }, {
            key: "aaxSlot",
            get: function() {
                var t = s(s({}, l(p(a.prototype), "aaxSlot", this)), {}, {
                    id: this.slotID,
                    mt: this.aaxMediaType
                });
                return 0 < this.sizes.length && (t.s = this.aaxSizes), t
            }
        }]) && u(e.prototype, t), Object.defineProperty(e, "prototype", {
            writable: !1
        }), a
    }(e.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return j
    })), (e = r = r || {}).LOCAL_STORAGE = "LOCAL", e.CSS_SELECTOR = "CSS", e.URL = "URL", (o = o || {}).EMAIL = "email";
    var r, o, i = n(1),
        a = n(17),
        c = n(5);

    function s(t, e) {
        var n, r, o, i, a = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (a) return r = !(n = !0), {
            s: function() {
                a = a.call(t)
            },
            n: function() {
                var t = a.next();
                return n = t.done, t
            },
            e: function(t) {
                r = !0, o = t
            },
            f: function() {
                try {
                    n || null == a.return || a.return()
                } finally {
                    if (r) throw o
                }
            }
        };
        if (Array.isArray(t) || (a = function(t, e) {
                var n;
                if (t) return "string" == typeof t ? u(t, e) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
            }(t)) || e && t && "number" == typeof t.length) return a && (t = a), i = 0, {
            s: e = function() {},
            n: function() {
                return i >= t.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: t[i++]
                }
            },
            e: function(t) {
                throw t
            },
            f: e
        };
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function l(t) {
        return t.then((function(t) {
            return Array.from(new Uint8Array(t)).map((function(t) {
                return t.toString(16).padStart(2, "0")
            })).join("")
        })).then((function(t) {
            return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" !== t ? t : ""
        }))
    }

    function d(t, e) {
        return t instanceof window.HTMLInputElement || t instanceof window.HTMLTextAreaElement ? f(t.value, e) ? l(window.crypto.subtle.digest("SHA-256", (new window.TextEncoder).encode(t.value || ""))) : Promise.resolve("") : f(t.innerText, e) ? l(window.crypto.subtle.digest("SHA-256", (new window.TextEncoder).encode(t.innerText || ""))) : Promise.resolve("")
    }
    var f = function(t, e) {
            return "string" == typeof t && (e === o.EMAIL ? /\S+@\S+\.\S+/.test(t) || Object(a.c)(t) : 0 < t.trim().length)
        },
        b = function(t, e, n) {
            if (0 === (n = n || window.document.querySelectorAll(t)).length) return new Promise((function(t) {
                return t("")
            }));
            if (1 === n.length) return d(n[0], e);
            var r, o = [],
                i = s(n);
            try {
                for (i.s(); !(r = i.n()).done;) {
                    var a = r.value;
                    o.push(d(a, e))
                }
            } catch (t) {
                i.e(t)
            } finally {
                i.f()
            }
            return Promise.all(o).then((function(t) {
                var e, n = null,
                    r = s(t);
                try {
                    for (r.s(); !(e = r.n()).done;) {
                        var o = e.value;
                        if ("" !== o) {
                            if (null !== n && ("string" != typeof n || n !== o)) return "";
                            n = o
                        }
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                return n || ""
            }))
        },
        p = n(23),
        y = n(2);

    function m(t) {
        return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function g(t, e) {
        var n, r, o, i, a = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (a) return r = !(n = !0), {
            s: function() {
                a = a.call(t)
            },
            n: function() {
                var t = a.next();
                return n = t.done, t
            },
            e: function(t) {
                r = !0, o = t
            },
            f: function() {
                try {
                    n || null == a.return || a.return()
                } finally {
                    if (r) throw o
                }
            }
        };
        if (Array.isArray(t) || (a = function(t, e) {
                var n;
                if (t) return "string" == typeof t ? h(t, e) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(t, e) : void 0
            }(t)) || e && t && "number" == typeof t.length) return a && (t = a), i = 0, {
            s: e = function() {},
            n: function() {
                return i >= t.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: t[i++]
                }
            },
            e: function(t) {
                throw t
            },
            f: e
        };
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function O(t, e, n) {
        (e = function(t) {
            return t = function(t, e) {
                if ("object" !== m(t) || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 === n) return String(t);
                if ("object" !== m(n = n.call(t, e))) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }(t, "string"), "symbol" === m(t) ? t : String(t)
        }(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }
    var v = {
        called: !1
    };

    function j(t) {
        if (Promise && TextEncoder && window.crypto && window.crypto.subtle) try {
            var e;
            v.called && !t.overrideLimit ? Object(i.b)(new Error("rr should only be called once per page load"), "retrieveRecords-callLimit") : (v.called = !0, e = 0, function n() {
                !(window.apstag.isGDPRRegion && !new p.a({
                    stateContainer: y.a,
                    globalContext: window
                }).isListenerActive || (c.a.getDefault().allowedToStoreAndAccessInformationOnDevice() ? function() {
                    var t, e, n, o, s, u, l = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        d = 1 < arguments.length ? arguments[1] : void 0,
                        p = (t = l.methods || [], O(e = {}, r.LOCAL_STORAGE, 5), O(e, r.URL, 4), O(e, r.CSS_SELECTOR, 3), n = e, o = {}, t.forEach((function(t) {
                            o[t.method] = (o[t.method] || 0) + 1, t.priority = o[t.method]
                        })), t.sort((function(t, e) {
                            return t.method === e.method ? (t.priority || 0) > (e.priority || 0) ? 1 : -1 : n[t.method] > n[e.method] ? -1 : 1
                        })), []),
                        y = g(l.methods || []);
                    try {
                        var h = function() {
                            var t = u.value,
                                e = t.method,
                                n = t.target,
                                o = t.type,
                                l = "";
                            switch (e) {
                                case r.LOCAL_STORAGE:
                                    l = function(t, e) {
                                        return (t = c.a.getDefault().localStorage.getItem(t, {
                                            ignoreFailure: !1
                                        })) && f(t, e) ? t : ""
                                    }(n, o);
                                    break;
                                case r.URL:
                                    p.push(function(t) {
                                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : window.location.href;
                                        try {
                                            t = t.replace(/[\[\]]/g, "\\$&");
                                            var n = new RegExp("[?&#]" + t + "(=([^&#?]*)|&|#|$)").exec(e);
                                            return Array.isArray(n) && "string" == typeof n[2] && 0 !== decodeURIComponent(n[2].replace(/\+/g, " ")).trim().length && Object(a.c)(decodeURIComponent(n[2].replace(/\+/g, " "))) ? Promise.resolve(decodeURIComponent(n[2].replace(/\+/g, " "))) : new Promise((function(t) {
                                                return t("")
                                            }))
                                        } catch (t) {
                                            return Object(i.b)(t, "retrieveUrl"), Promise.resolve("")
                                        }
                                    }(n).then((function(t) {
                                        return {
                                            type: o,
                                            value: t
                                        }
                                    })));
                                    break;
                                case r.CSS_SELECTOR:
                                    s = t
                            }
                            if (0 < l.length) return d({
                                value: l,
                                type: o
                            }), {
                                v: void 0
                            }
                        };
                        for (y.s(); !(u = y.n()).done;) {
                            var v = h();
                            if ("object" === m(v)) return v.v
                        }
                    } catch (t) {
                        y.e(t)
                    } finally {
                        y.f()
                    }

                    function j() {
                        var t, e, n, r, o, i;
                        s && (!0 === s.isGlobalSubmit || "string" == typeof s.eventTarget && "string" == typeof s.event) && (e = (t = s).eventTarget, n = t.target, r = t.type, o = t.isGlobalSubmit, "string" == typeof(i = o ? "submit" : s.event)) && 0 !== i.length ? window.addEventListener(i, (function t(a) {
                            var c, s, u, l, f, p, y, m, g;
                            s = (a = {
                                e: a,
                                event: i,
                                eventTarget: e,
                                isGlobalSubmit: o,
                                target: n,
                                type: r,
                                onDone: d,
                                listener: t
                            }).e, u = a.eventTarget, l = a.event, f = a.isGlobalSubmit, p = a.target, y = a.type, m = a.onDone, g = a.listener, f || "window" === u || s.target && "function" == typeof s.target.matches && "string" == typeof u && s.target.matches(u) ? (f && s instanceof window.Event && s.target && (c = s.target.querySelectorAll('input[type="email"]')), b(p, y, c).then((function(t) {
                                "function" == typeof g && window.removeEventListener(l, g), m(!(t.length < 1) && {
                                    value: t,
                                    type: y
                                })
                            }))) : m(!1)
                        })) : d(!1)
                    }
                    0 === p.length ? j() : Promise.all(p).then((function(t) {
                        var e, n = g(t);
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var r = e.value;
                                if (0 < r.value.length) return void d(r)
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                        j()
                    }))
                }(t, (function(e) {
                    !1 !== e && Object(a.e)({
                        hashedRecords: [{
                            type: e.type,
                            record: e.value
                        }]
                    }, void 0, void 0, "api", t.accountID)
                })) : Object(i.b)(new Error("GDPR consent not present/valid"), "retrieveRecords"), 0)) || 6400 < e || (setTimeout(n, e), e = 0 === e ? 200 : 2 * e)
            }())
        } catch (t) {
            Object(i.b)(t, "retrieveRecords-retrieve")
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return E
    }));
    e = n(19);
    var r = n(6),
        o = n(20),
        i = n(0),
        a = n(1),
        c = n(26);

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, d(r.key), r)
        }
    }

    function l(t, e, n) {
        (e = d(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function d(t) {
        return t = function(t, e) {
            if ("object" !== s(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== s(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === s(t) ? t : String(t)
    }
    var f = function() {
        function t() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                n = this,
                r = t;
            if (!(n instanceof r)) throw new TypeError("Cannot call a class as a function");
            l(this, "_propertyConfig", void 0), l(this, "_sizesDelegate", void 0), this._propertyConfig = e, this._sizesDelegate = new c.a(null == e ? void 0 : e.sizes, !1, !0)
        }
        var e, n;
        return e = t, (n = [{
            key: "sizes",
            get: function() {
                return this._sizesDelegate.sizes
            }
        }, {
            key: "validSizes",
            get: function() {
                return this._sizesDelegate.isValid()
            }
        }, {
            key: "propertyConfig",
            get: function() {
                return this._propertyConfig
            }
        }, {
            key: "aaxPropertyConfig",
            get: function() {
                var t = {};
                return this.aaxSizes && (t.s = this.aaxSizes), t
            }
        }, {
            key: "aaxSizes",
            get: function() {
                return this._sizesDelegate.aaxSizes
            }
        }, {
            key: "isValid",
            value: function() {
                return !Object(i.j)(this.propertyConfig) || Array.isArray(this.propertyConfig) ? (Object(a.b)({
                    name: "MultiFormatSlot-InvalidMultiFormatSlotProperty",
                    message: "multiFormatProperty must be an object"
                }, "MultiFormatSlotProperty-isValid", {
                    makeVisibleToAllUsers: !0
                }), !1) : !!this.validSizes
            }
        }]) && u(e.prototype, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t
    }();

    function b(t) {
        return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function p(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, m(r.key), r)
        }
    }

    function y(t, e, n) {
        (e = m(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function m(t) {
        return t = function(t, e) {
            if ("object" !== b(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== b(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === b(t) ? t : String(t)
    }
    var g = function() {
        function t(e) {
            var n = this;
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function");
            y(this, "_multiFormatProperties", void 0), e && Object(i.j)(e) && !Array.isArray(e) && (this._multiFormatProperties = {}, this.toMultiFormatMediaTypes(e).forEach((function(t) {
                n._multiFormatProperties && (n._multiFormatProperties[t] = new f(e[t]))
            })))
        }
        var e, n;
        return e = t, (n = [{
            key: "convertMultiFormatMediaType",
            value: function(t) {
                var e;
                return y(e = {}, r.a.VIDEO, o.a.VIDEO), y(e, r.a.DISPLAY, o.a.DISPLAY), e[t]
            }
        }, {
            key: "isMultiFormatMediaType",
            value: function(t) {
                return Boolean(this.convertMultiFormatMediaType(t))
            }
        }, {
            key: "toMultiFormatMediaTypes",
            value: function(t) {
                var e = this;
                return Object.keys(t).filter((function(t) {
                    return e.isMultiFormatMediaType(t)
                }))
            }
        }, {
            key: "multiFormatMediaTypes",
            get: function() {
                return this._multiFormatProperties ? this.toMultiFormatMediaTypes(this._multiFormatProperties) : []
            }
        }, {
            key: "aaxMultiFormatProperties",
            get: function() {
                var t, e = this;
                return this._multiFormatProperties ? (t = {}, this.multiFormatMediaTypes.forEach((function(n) {
                    var r = e.convertMultiFormatMediaType(n);
                    r && (t[r] = null == (r = e._multiFormatProperties[n]) ? void 0 : r.aaxPropertyConfig)
                })), t) : {}
            }
        }, {
            key: "isValid",
            value: function() {
                var t = this,
                    e = !0;
                return this._multiFormatProperties ? (this.multiFormatMediaTypes.forEach((function(n) {
                    t._multiFormatProperties[n].isValid() || (e = !1)
                })), e) : (Object(a.b)({
                    name: "MultiFormatSlot-InvalidMultiFormatProperties",
                    message: "multiFormatProperties must be an object"
                }, "MultiFormatProperties-isValid", {
                    makeVisibleToAllUsers: !0
                }), !1)
            }
        }]) && p(e.prototype, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t
    }();

    function h(t) {
        return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function O(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function v(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? O(Object(n), !0).forEach((function(e) {
                _(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function j(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, I(r.key), r)
        }
    }

    function S() {
        return (S = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = D(t)););
                return t
            }(t, e);
            if (r) return (r = Object.getOwnPropertyDescriptor(r, e)).get ? r.get.call(arguments.length < 3 ? t : n) : r.value
        }).apply(this, arguments)
    }

    function w(t, e) {
        return (w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function T(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function D(t) {
        return (D = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function _(t, e, n) {
        (e = I(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function I(t) {
        return t = function(t, e) {
            if ("object" !== h(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== h(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === h(t) ? t : String(t)
    }
    var E = function(t) {
        var e = i;
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && w(e, t);
        var n = function(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = D(t);
                n = e ? (n = D(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
                if (n && ("object" === h(n) || "function" == typeof n)) return n;
                if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                return T(r)
            }
        }(i);

        function i(t) {
            var e;
            if (this instanceof i) return _(T(e = n.call(this, t)), "_multiFormatPropertiesDelegate", void 0), e._multiFormatPropertiesDelegate = new g(t.multiFormatProperties), e;
            throw new TypeError("Cannot call a class as a function")
        }
        return e = i, (t = [{
            key: "mediaType",
            get: function() {
                return r.a.MULTI_FORMAT
            }
        }, {
            key: "aaxMediaType",
            get: function() {
                return o.a.MULTI_FORMAT
            }
        }, {
            key: "aaxMultiFormatProperties",
            get: function() {
                return this._multiFormatPropertiesDelegate.aaxMultiFormatProperties
            }
        }, {
            key: "multiFormatPropertiesIsValid",
            get: function() {
                return this._multiFormatPropertiesDelegate.isValid()
            }
        }, {
            key: "aaxSlot",
            get: function() {
                return v(v({}, S(D(i.prototype), "aaxSlot", this)), {}, {
                    id: this.slotID,
                    sd: this.slotID,
                    sn: this.slotName || this.slotID,
                    mt: this.aaxMediaType,
                    mfp: this.aaxMultiFormatProperties
                })
            }
        }, {
            key: "isValid",
            value: function() {
                return S(D(i.prototype), "isValid", this).call(this) && this.multiFormatPropertiesIsValid
            }
        }]) && j(e.prototype, t), Object.defineProperty(e, "prototype", {
            writable: !1
        }), i
    }(e.a)
}, function(t, e, n) {
    t.exports = n(15)
}]);