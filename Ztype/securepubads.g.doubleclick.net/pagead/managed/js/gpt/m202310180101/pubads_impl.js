(function(_) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var da, fa, ja, ka, ma, pa, ra, ta, wa, va, xa, za, Aa, Ba, Ca, Fa, Ga, Ka, La, Ma, Na, Va, Xa, Za, ab, hb, kb, pb, sb, vb, wb, Bb, Db, Fb, Hb, Mb, Nb, Ib, Ob, Sb, Ub, Yb, Zb, $b, ac, bc, dc, ec, ic, jc, lc, mc, oc, rc, nc, tc, vc, wc, yc, zc, Ac, Bc, Cc, Dc, Gc, Ic, Jc, Kc, Mc, Nc, Qc, Pc, Sc, Tc, Zc, bd, cd, ed, fd, gd, id, hd, md, od, nd, qd, pd, rd, td, dd, xd, Bd, Dd, Ed, Fd, Id, Jd, Kd, Ld, Od, Pd, Cd, Qd, Rd, Sd, Td, Xd, $d, ae, Vd, ee, Wd, fe, je, le, ne, pe, qe, re, se, ve, ye, Ae, Be, Fe, Ge, He, Je, Ke, Le, Ne, Pe, Qe, We, Xe, $e, bf, cf, ef, gf, hf, jf, kf, lf, mf, of , pf, sf, uf, vf, wf, xf, Af, Ef, Mf, Qf, Of, Uf, Vf, Wf, Sf, Tf, Xf, $f, ag, eg, fg, mg, ng, qg, ug, yg, Gg, Ig, Kg, Lg, Mg, Ng, Og, Pg, Rg, Tg, Zg, fh, K, gh, mh, kh, Bh, Dh, Fh, Gh, Lh, Oh, Sh, Vh, Yh, Wh, ti, ui, vi, wi, Zh, xi, oi, zi, Ai, Ci, Di, Fi, Ei, Ki, Pi, Ni, Qi, Yi, aj, Ti, Ui, bj, ej, fj, gj, qj, kj, sj, vj, wj, Hj, Nj, Lj, Mj, Sj, Wj, Yj, Zj, ak, ck, gk, qk, jk, dk, yk, wk, xk, Ak, Ck, Fk, P, Hk, Ik, Jk, Lk, Nk, Ok, Vk, Wk, Yk, Zk, dl, fl, gl, kl, ol, pl, ql, Ll, Sl, Xl, Zl, $l, bm, cm, gm, hm, im, mm, fm, om, pm, qm, sm, xm, zm, Am, Bm, Cm, Em, Fm, Hm, Jm, Km, Im, Om, Pm, Qm, Sm, $m, bn, dn, gn, fn, en, pn, sn, tn, un, vn, xn, zn, Dn, Hn, In, Jn, Mn, Pn, On, Sn, Tn, Vn, $n, ao, co, mo, ko, po, ro, eo, Co, Do, Go, Fo, Io, Ko, Mo, Oo, To, Uo, Xo, $o, Yo, Zo, cp, dp, fp, gp, hp, ip, mp, np, op, pp, sp, tp, up, vp, wp, yp, zp, Ap, Ep, Op, Hp, Qp, Tp, Vp, bq, Wp, Xp, Sp, fq, hq, jq, lq, rq, vq, xq, yq, Eq, Gq, Iq, Lq, Jq, Oq, sa, Pq, Qq, Sq, Rq, Tq, Uq, Zq, ar, cr, dr, fr, hr, lr, ir, mr, nr, pr, qr, rr, zr, Dr, Er, Fr, Gr, Hr, Ir, Jr, Kr, Mr, Nr, Or, Pr, Wr, is, ks, ls, ms, ps, Gs, Ns, Os, yt, Bt, Jt, Et, Gt, Mt, Lt, Ot, Wt, Zt, bu, du, eu, fu, hu, iu, ju, ku, mu, nu, ou, vu, wu, xu, ob, zu, Cu, Au, Bu, Du, Eu;
    da = function(a) {
        return function() {
            return _.ca[a].apply(this, arguments)
        }
    };
    fa = function(a) {
        return a ? a.passive && ea() ? a : a.capture || !1 : !1
    };
    ja = function(a, b) {
        b = _.ia(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    ka = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    ma = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    pa = function(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = _.na(e) ? "o" + _.oa(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    };
    ra = function(a, b) {
        a.sort(b || _.qa)
    };
    ta = function(a) {
        for (var b = sa, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || _.qa;
        ra(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (b = 0; b < a.length; b++) a[b] = c[b].value
    };
    wa = function(a, b) {
        if (!_.ua(a) || !_.ua(b) || a.length != b.length) return !1;
        for (var c = a.length, d = va, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    _.qa = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    va = function(a, b) {
        return a === b
    };
    xa = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    za = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = za.apply(null, ma(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    };
    Aa = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    Ba = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    Ca = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    Fa = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ea.length; f++) c = Ea[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    Ga = function() {
        var a = _.q.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    Ka = function(a) {
        return Ha ? Ia ? Ia.brands.some(function(b) {
            return (b = b.brand) && _.Ja(b, a)
        }) : !1 : !1
    };
    La = function(a) {
        return _.Ja(Ga(), a)
    };
    Ma = function() {
        return Ha ? !!Ia && 0 < Ia.brands.length : !1
    };
    Na = function() {
        return Ma() ? Ka("Chromium") : (La("Chrome") || La("CriOS")) && !(Ma() ? 0 : La("Edge")) || La("Silk")
    };
    _.Qa = function(a) {
        a: if (Pa) {
            try {
                var b = new URL(a)
            } catch (c) {
                b = "https:";
                break a
            }
            b = b.protocol
        } else b: {
            b = document.createElement("a");
            try {
                b.href = a
            } catch (c) {
                b = void 0;
                break b
            }
            b = b.protocol;b = ":" === b || "" === b ? "https:" : b
        }
        if ("javascript:" !== b) return a
    };
    _.Ta = function(a) {
        return a instanceof _.Ra ? _.Sa(a) : _.Qa(a)
    };
    _.Ua = function(a) {
        throw Error("unexpected value " + a + "!");
    };
    Va = function(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    Xa = function(a, b) {
        a.textContent = _.Wa(b);
        Va(a)
    };
    Za = function(a, b) {
        a.src = _.Ya(b);
        Va(a)
    };
    ab = function(a) {
        return new $a(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    _.fb = function(a) {
        var b = void 0 === b ? bb : b;
        a: if (b = void 0 === b ? bb : b, !(a instanceof _.Ra)) {
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof $a && d.hk(a)) {
                    a = db(a);
                    break a
                }
            }
            a = void 0
        }
        return a || _.eb
    };
    hb = function(a) {
        for (var b = _.gb.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return db(c.join(""))
    };
    kb = function(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new _.t.Promise(function(d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                var h;
                null == (h = g.parentElement) || h.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            };
            g.onerror = function() {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            Za(g, a);
            c && "complete" !== b.document.readyState ? _.ib(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    pb = function(a) {
        var b, c, d, e, f, g;
        return _.lb(function(h) {
            switch (h.j) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.v + "&st=") + a.Rc, c = void 0, h.m = 2, _.mb(h, nb(b), 4);
                case 4:
                    c = h.v;
                    h.j = 3;
                    h.m = 0;
                    break;
                case 2:
                    ob(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.yd || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.m ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.H,
                        bj: c.bg_hash_basename,
                        aj: c.bg_binary,
                        mk: a.j + "_" + a.v,
                        yd: d,
                        Rc: a.Rc,
                        xe: e,
                        Ve: f,
                        we: g
                    }) : h.return(void 0)
            }
        })
    };
    sb = function(a) {
        var b;
        return _.lb(function(c) {
            if (1 == c.j) return _.mb(c, pb(a), 2);
            if (b = c.v) {
                var d = "sodar2";
                d = void 0 === d ? "sodar2" : d;
                var e = window,
                    f = e.GoogleGcLKhOms;
                f && "function" === typeof f.push || (f = e.GoogleGcLKhOms = []);
                var g = {};
                f.push((g._ctx_ = b.context, g._bgv_ = b.bj, g._bgp_ = b.aj, g._li_ = b.mk, g._jk_ = b.yd, g._st_ = b.Rc, g._rc_ = b.xe, g._dl_ = b.Ve, g._g2_ = b.we, g));
                if (f = e.GoogleDX5YKUSk) e.GoogleDX5YKUSk = void 0, f[1]();
                d = _.qb(rb, {
                    basename: d
                });
                kb(d)
            }
            return c.return(b)
        })
    };
    vb = function(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (tb) {
            if (b && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)) throw Error("Found an unpaired surrogate");
            a = (ub || (ub = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f) d[c++] = f;
                else {
                    if (2048 > f) d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };
    wb = function(a) {
        _.q.setTimeout(function() {
            throw a;
        }, 0)
    };
    Bb = function(a) {
        if (!xb) return Ab(a);
        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    };
    Db = function(a) {
        return Cb[a] || ""
    };
    Fb = function(a) {
        return Eb && null != a && a instanceof Uint8Array
    };
    Hb = function(a) {
        if (a !== Gb) throw Error("illegal external caller");
    };
    Mb = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.w(Ib(c, a)), b = c.next().value, a = c.next().value, c = b);
        Jb = c >>> 0;
        Kb = a >>> 0
    };
    Nb = function(a) {
        if (16 > a.length) Mb(Number(a));
        else if ("function" === typeof BigInt) a = BigInt(a), Jb = Number(a & BigInt(4294967295)) >>> 0, Kb = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            Kb = Jb = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Kb *= 1E6, Jb = 1E6 * Jb + d, 4294967296 <= Jb && (Kb += _.y(Math, "trunc").call(Math, Jb / 4294967296), Kb >>>= 0, Jb >>>= 0);
            b && (b = _.w(Ib(Jb, Kb)), a = b.next().value, b = b.next().value, Jb = a, Kb = b)
        }
    };
    Ib = function(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    Ob = function(a) {
        return Array.prototype.slice.call(a)
    };
    Sb = function(a) {
        var b = Pb(a);
        1 !== (b & 1) && (Object.isFrozen(a) && (a = Ob(a)), Rb(a, b | 1))
    };
    Ub = function(a, b, c) {
        return c ? a | b : a & ~b
    };
    Yb = function() {
        var a = [];
        Vb(a, 1);
        return a
    };
    Zb = function(a) {
        Vb(a, 34);
        return a
    };
    $b = function(a) {
        Vb(a, 32);
        return a
    };
    ac = function(a, b) {
        Rb(b, (a | 0) & -2303)
    };
    bc = function(a, b) {
        Rb(b, (a | 34) & -2269)
    };
    dc = function(a) {
        a = a >> 12 & 1023;
        return 0 === a ? 536870912 : a
    };
    ec = function(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    };
    ic = function(a, b, c) {
        if (null != a)
            if ("string" === typeof a) a = a ? new gc(a, Gb) : hc();
            else if (a.constructor !== gc)
            if (Fb(a)) {
                var d;
                c ? d = 0 == a.length ? hc() : new gc(a, Gb) : d = a.length ? new gc(new Uint8Array(a), Gb) : hc();
                a = d
            } else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    };
    jc = function(a) {
        if (a & 2) throw Error();
    };
    lc = function(a) {
        if (kc) throw Error("");
        kc = a
    };
    mc = function(a) {
        if (kc) try {
            kc(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    };
    oc = function() {
        var a = nc();
        kc ? _.q.setTimeout(function() {
            mc(a)
        }, 0) : wb(a)
    };
    rc = function() {
        var a = Error();
        pc(a, "warning");
        mc(a);
        return a
    };
    nc = function() {
        var a = Error();
        pc(a, "incident");
        return a
    };
    _.sc = function(a) {
        if (null != a && "number" !== typeof a) throw Error("Value of float/double field must be a number, found " + typeof a + ": " + a);
        return a
    };
    tc = function(a) {
        if (null == a) return a;
        if ("number" === typeof a || "NaN" === a || "Infinity" === a || "-Infinity" === a) return Number(a)
    };
    vc = function(a) {
        if ("boolean" !== typeof a) throw Error("Expected boolean but got " + uc(a) + ": " + a);
        return !!a
    };
    wc = function(a) {
        if (null == a) return a;
        if ("boolean" === typeof a || "number" === typeof a) return !!a
    };
    yc = function(a) {
        var b = typeof a;
        return "number" === b ? _.y(Number, "isFinite").call(Number, a) : "string" !== b ? !1 : xc.test(a)
    };
    zc = function(a) {
        _.y(Number, "isFinite").call(Number, a) || oc();
        return a
    };
    Ac = function(a) {
        return a
    };
    Bc = function(a) {
        if ("number" !== typeof a) throw rc();
        _.y(Number, "isFinite").call(Number, a) || oc();
        return a
    };
    Cc = function(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return a
    };
    Dc = function(a) {
        if ("number" !== typeof a) throw rc();
        _.y(Number, "isFinite").call(Number, a) || oc();
        return a
    };
    _.Ec = function(a) {
        return null == a ? a : Dc(a)
    };
    Gc = function(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return a
    };
    _.Hc = function(a) {
        if (!yc(a)) throw rc();
        return "string" === typeof a ? a : a
    };
    Ic = function(a) {
        if (null == a) return a;
        if (yc(a)) {
            var b;
            "number" === typeof a ? b = a : b = a;
            return b
        }
    };
    Jc = function(a) {
        if (null == a) return a;
        if (yc(a)) {
            var b;
            "string" === typeof a ? b = a : b = a;
            return b
        }
    };
    Kc = function(a) {
        if (!yc(a)) throw rc();
        return "string" === typeof a ? a : a
    };
    _.Lc = function(a) {
        if ("string" !== typeof a) throw Error();
        return a
    };
    Mc = function(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    };
    Nc = function(a) {
        return null == a || "string" === typeof a ? a : void 0
    };
    Qc = function(a, b, c, d) {
        if (null != a && "object" === typeof a && a.Tf === Oc) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? Pc(b) : new b : void 0;
        var e = c = Pb(a);
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && Rb(a, e);
        return new b(a)
    };
    Pc = function(a) {
        var b = a[Rc];
        if (b) return b;
        b = new a;
        Zb(b.G);
        return a[Rc] = b
    };
    Sc = function(a) {
        return a
    };
    Tc = function(a, b, c) {
        return "string" === typeof a ? a : c ? "" : void 0
    };
    Zc = function(a, b) {
        Uc = b;
        a = new a(b);
        Uc = void 0;
        return a
    };
    bd = function(a) {
        switch (typeof a) {
            case "boolean":
                return $c || ($c = [0, void 0, !0]);
            case "number":
                return 0 < a ? void 0 : 0 === a ? ad || (ad = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    };
    _.z = function(a, b, c) {
        null == a && (a = Uc);
        Uc = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -4190209 | (b & 1023) << 12)
        } else {
            if (!Array.isArray(a)) throw Error();
            d = Pb(a);
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error();
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1,
                        g = c[f];
                    if (ec(g)) {
                        d |= 256;
                        b = +!!(d & 512) - 1;
                        e = f - b;
                        1024 <= e && (cd(c, b, g), e = 1023);
                        d = d & -4190209 | (e & 1023) << 12;
                        break a
                    }
                }
                b && (g = +!!(d & 512) - 1, b = Math.max(b, e - g), 1024 < b && (cd(c, g, {}), d |= 256, b = 1023), d = d & -4190209 | (b & 1023) << 12)
            }
        }
        Rb(a, d);
        return a
    };
    cd = function(a, b, c) {
        for (var d = 1023 + b, e = a.length, f = d; f < e; f++) {
            var g = a[f];
            null != g && g !== c && (c[f - b] = g)
        }
        a.length = d + 1;
        a[d] = c
    };
    ed = function(a, b, c, d, e, f) {
        a = Qc(a, d, c, f);
        e && (a = dd(a));
        return a
    };
    fd = function(a) {
        return a
    };
    gd = function(a) {
        return [a, this.get(a)]
    };
    id = function(a, b) {
        return hd(b)
    };
    hd = function(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a && !Array.isArray(a)) {
                    if (Fb(a)) return Bb(a);
                    if (a instanceof gc) return jd(a);
                    if (a instanceof kd) return ld(a)
                }
        }
        return a
    };
    md = function(a, b, c) {
        a = Ob(a);
        var d = a.length,
            e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    };
    od = function(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && Pb(a) & 1 ? void 0 : f && Pb(a) & 2 ? a : nd(a, b, c, void 0 !== d, e, f);
            else if (ec(a)) {
                var g = {},
                    h;
                for (h in a) Object.prototype.hasOwnProperty.call(a, h) && (g[h] = od(a[h], b, c, d, e, f));
                a = g
            } else a = b(a, d);
            return a
        }
    };
    nd = function(a, b, c, d, e, f) {
        var g = d || c ? Pb(a) : 0;
        d = d ? !!(g & 32) : void 0;
        a = Ob(a);
        for (var h = 0; h < a.length; h++) a[h] = od(a[h], b, c, d, e, f);
        c && c(g, a);
        return a
    };
    qd = function(a) {
        return od(a, pd, void 0, void 0, !1, !1)
    };
    pd = function(a) {
        return a.Tf === Oc ? a.toJSON() : a instanceof kd ? ld(a, qd) : hd(a)
    };
    rd = function(a, b, c) {
        c = void 0 === c ? bc : c;
        if (null != a) {
            if (Eb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = Pb(a);
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (Rb(a, (d | 34) & -5), a) : nd(a, rd, d & 4 ? bc : c, !0, !1, !0)
            }
            a.Tf === Oc ? (c = a.G, d = sd(c), a = d & 2 ? a : Zc(a.constructor, td(c, d, !0))) : a instanceof kd && (c = Zb(ud(a, rd)), a = new kd(c, a.m, a.j, a.H));
            return a
        }
    };
    _.vd = function(a) {
        var b = a.G;
        return Zc(a.constructor, td(b, sd(b), !1))
    };
    td = function(a, b, c) {
        var d = c || b & 2 ? bc : ac,
            e = !!(b & 32);
        a = md(a, b, function(f) {
            return rd(f, e, d)
        });
        Vb(a, 32 | (c ? 2 : 0));
        return a
    };
    dd = function(a) {
        var b = a.G,
            c = sd(b);
        return c & 2 ? Zc(a.constructor, td(b, c, !1)) : a
    };
    _.wd = function(a) {
        var b = a.G,
            c = sd(b);
        return c & 2 ? a : Zc(a.constructor, td(b, c, !0))
    };
    xd = function(a, b, c, d, e) {
        var f = dc(b);
        if (c >= f || e) {
            e = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (null == d) return e;
                f = a[f + (+!!(b & 512) - 1)] = {};
                e |= 256
            }
            f[c] = d;
            e !== b && Rb(a, e);
            return e
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    };
    Bd = function(a, b, c, d, e) {
        var f = b & 2,
            g = yd(a, b, c, e);
        Array.isArray(g) || (g = zd);
        var h = !(d & 2);
        d = !(d & 1);
        var k = !!(b & 32),
            l = Pb(g);
        0 !== l || !k || f || h ? l & 1 || (l |= 1, Rb(g, l)) : (l |= 33, Rb(g, l));
        f ? (a = !1, l & 2 || (Zb(g), a = !!(4 & l)), (d || a) && Object.freeze(g)) : (f = !!(2 & l) || !!(2048 & l), d && f ? (g = Ob(g), d = 1, k && !h && (d |= 32), Rb(g, d), xd(a, b, c, g, e)) : h && l & 32 && !f && Ad(g, 32));
        return g
    };
    Dd = function(a, b, c, d, e, f) {
        e = void 0 === e ? 2 : e;
        a = a.G;
        var g = sd(a);
        2 & g && (e = 1);
        f = !!f;
        var h = Bd(a, g, b, 1 | (f ? 2 : 0), d);
        g = sd(a);
        var k = Pb(h),
            l = k,
            m = !!(2 & k),
            n = !!(4 & k),
            p = m && n;
        if (!n) {
            Object.isFrozen(h) && (h = Ob(h), l = 0, k = Cd(k, g, f), m = !!(2 & k), g = xd(a, g, b, h, d));
            for (var r = n = 0; n < h.length; n++) {
                var v = c(h[n]);
                null != v && (h[r++] = v)
            }
            r < n && (h.length = r);
            k = Ub(k, 20, !0)
        }
        p || ((c = 1 === e) && (k = Ub(k, 2, !0)), k !== l && Rb(h, k), (c || m) && Object.freeze(h));
        2 === e && m && (h = Ob(h), k = Cd(k, g, f), Rb(h, k), xd(a, g, b, h, d));
        var u;
        f ? u = h : u = h;
        return u
    };
    Ed = function(a) {
        return ic(a, !0, !0)
    };
    Fd = function(a) {
        return ic(a, !0, !1)
    };
    Id = function() {
        var a;
        return null != (a = Gd) ? a : Gd = new kd(Zb([]), void 0, void 0, void 0, Hd)
    };
    Jd = function(a, b, c, d, e, f) {
        var g = b & 2;
        a: {
            var h = c,
                k = b & 2;c = !1;
            if (null == h) {
                if (k) {
                    a = Id();
                    break a
                }
                h = []
            } else if (h.constructor === kd) {
                if (0 == (h.v & 2) || k) {
                    a = h;
                    break a
                }
                h = ud(h)
            } else Array.isArray(h) ? c = !!(Pb(h) & 2) : h = [];
            if (k) {
                if (!h.length) {
                    a = Id();
                    break a
                }
                c || (c = !0, Zb(h))
            } else if (c) {
                c = !1;
                k = Ob(h);
                for (h = 0; h < k.length; h++) {
                    var l = k[h] = Ob(k[h]);
                    Array.isArray(l[1]) && (l[1] = Zb(l[1]))
                }
                h = k
            }
            c || (Pb(h) & 64 ? Ad(h, 32) : 32 & b && $b(h));f = new kd(h, e, Tc, f);xd(a, b, d, f, !1);a = f
        }
        if (null == a) return a;
        !g && e && (a.B = !0);
        return a
    };
    Kd = function(a, b) {
        a = a.G;
        var c = sd(a);
        return Jd(a, c, yd(a, c, b), b, void 0, Tc)
    };
    Ld = function(a, b, c) {
        a = a.G;
        var d = sd(a);
        return Jd(a, d, yd(a, d, b), b, c)
    };
    _.Md = function(a, b, c, d) {
        var e = a.G,
            f = sd(e);
        jc(f);
        if (null == c) return xd(e, f, b), a;
        var g = Pb(c),
            h = g,
            k = !!(2 & g) || Object.isFrozen(c),
            l = !k && !1;
        if (!(4 & g))
            for (g = 21, k && (c = Ob(c), h = 0, g = Cd(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        l && (g = Ub(g, 2, !0));
        g !== h && Rb(c, g);
        l && Object.freeze(c);
        xd(e, f, b, c);
        return a
    };
    _.Nd = function(a, b, c, d) {
        var e = a.G,
            f = sd(e);
        jc(f);
        xd(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    };
    Od = function(a, b, c) {
        for (var d = 0, e = 0; e < c.length; e++) {
            var f = c[e];
            null != yd(a, b, f) && (0 !== d && (b = xd(a, b, d)), d = f)
        }
        return d
    };
    Pd = function(a, b, c, d, e, f, g) {
        var h = 1 === e;
        e = 2 === e;
        f = !!f;
        var k = !!(2 & b) && e,
            l = Bd(a, b, d, 3);
        b = sd(a);
        var m = Pb(l),
            n = !!(2 & m),
            p = !!(4 & m),
            r = !!(32 & m),
            v = n && p || !!(2048 & m);
        if (!p) {
            var u = l,
                x = b,
                C;
            (C = !!(2 & m)) && (x = Ub(x, 2, !0));
            for (var D = !C, F = !0, B = 0, J = 0; B < u.length; B++) {
                var R = Qc(u[B], c, !1, x);
                if (R instanceof c) {
                    if (!C) {
                        var O = !!(Pb(R.G) & 2);
                        D && (D = !O);
                        F && (F = O)
                    }
                    u[J++] = R
                }
            }
            J < B && (u.length = J);
            m = Ub(m, 4, !0);
            m = Ub(m, 16, F);
            m = Ub(m, 8, D);
            Rb(u, m);
            n && !k && (Object.freeze(l), v = !0)
        }
        c = m;
        k = !!(8 & m) || h && !l.length;
        if (g && !k) {
            v && (l = Ob(l), v = !1, c = 0, m = Cd(m, b, f), b = xd(a, b, d, l));
            g = l;
            k = m;
            for (n = 0; n < g.length; n++) u = g[n], m = dd(u), u !== m && (g[n] = m);
            k = Ub(k, 8, !0);
            m = k = Ub(k, 16, !g.length)
        }
        v || (h ? m = Ub(m, !l.length || 16 & m && (!p || r) ? 2 : 2048, !0) : f || (m = Ub(m, 32, !1)), m !== c && Rb(l, m), h && (Object.freeze(l), v = !0));
        e && v && (l = Ob(l), m = Cd(m, b, f), Rb(l, m), xd(a, b, d, l));
        return l
    };
    Cd = function(a, b, c) {
        a = Ub(a, 2, !!(2 & b));
        a = Ub(a, 32, !!(32 & b) && c);
        return a = Ub(a, 2048, !1)
    };
    Qd = function(a, b, c, d) {
        a = a.G;
        var e = sd(a);
        jc(e);
        b = Pd(a, e, c, b, 2);
        c = null != d ? d : new c;
        b.push(c);
        Pb(c.G) & 2 ? Ad(b, 8) : Ad(b, 16);
        return c
    };
    Rd = function(a, b) {
        return null != a ? a : b
    };
    Sd = function(a, b, c) {
        var d = a.constructor.ca,
            e = dc(sd(c ? a.G : b)),
            f = !1;
        if (d) {
            if (!c) {
                b = Ob(b);
                var g;
                if (b.length && ec(g = b[b.length - 1]))
                    for (f = 0; f < d.length; f++)
                        if (d[f] >= e) {
                            _.y(Object, "assign").call(Object, b[b.length - 1] = {}, g);
                            break
                        }
                f = !0
            }
            e = b;
            c = !c;
            g = sd(a.G);
            a = dc(g);
            g = +!!(g & 512) - 1;
            for (var h, k, l = 0; l < d.length; l++)
                if (k = d[l], k < a) {
                    k += g;
                    var m = e[k];
                    null == m ? e[k] = c ? zd : Yb() : c && m !== zd && Sb(m)
                } else h || (m = void 0, e.length && ec(m = e[e.length - 1]) ? h = m : e.push(h = {})), m = h[k], null == h[k] ? h[k] = c ? zd : Yb() : c && m !== zd && Sb(m)
        }
        d = b.length;
        if (!d) return b;
        var n;
        if (ec(h = b[d - 1])) {
            a: {
                var p = h;e = {};c = !1;
                for (var r in p) Object.prototype.hasOwnProperty.call(p, r) && (a = p[r], Array.isArray(a) && a != a && (c = !0), null != a ? e[r] = a : c = !0);
                if (c) {
                    for (var v in e) {
                        p = e;
                        break a
                    }
                    p = null
                }
            }
            p != h && (n = !0);d--
        }
        for (; 0 < d; d--) {
            h = b[d - 1];
            if (null != h) break;
            var u = !0
        }
        if (!n && !u) return b;
        var x;
        f ? x = b : x = Array.prototype.slice.call(b, 0, d);
        b = x;
        f && (b.length = d);
        p && b.push(p);
        return b
    };
    Td = function(a, b) {
        if (null == b) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        Vb(b, 128);
        return Zc(a, $b(b))
    };
    Xd = function(a) {
        var b = a[Ud];
        if (!b) {
            var c = Vd(a);
            b = function(d, e) {
                return Wd(d, e, c)
            };
            a[Ud] = b
        }
        return b
    };
    $d = function(a, b) {
        return b.j
    };
    ae = function(a, b, c) {
        var d, e, f = b.j;
        return function(g, h, k) {
            return f(g, h, k, e || (e = Vd(c).v), d || (d = Xd(c)))
        }
    };
    Vd = function(a) {
        var b = a[be];
        if (b) return b;
        a: {
            b = a[be] = {};
            var c = $d,
                d = ae;b.v = bd(a[0]);
            var e = 1;
            if (a.length > e && !(a[e] instanceof ce)) {
                var f = a[e++];
                if (Array.isArray(f)) {
                    b.m = f[0];
                    b.j = f[1];
                    break a
                }
                b.j = f
            }
            for (f = 0; e < a.length;) {
                var g = a[e++],
                    h = a[e];
                "number" === typeof h ? (e++, f += h) : f++;
                for (h = e; h < a.length && !(a[h] instanceof ce);) h++;
                if (h -= e) {
                    var k = a,
                        l = e,
                        m = k[l];
                    "function" == typeof m && (m = m(), k[l] = m);
                    if ((k = Array.isArray(m)) && !(k = de in m || be in m) && (k = 0 < m.length)) {
                        k = m;
                        l = k[0];
                        var n = bd(l);
                        null != n && n !== l && (k[0] = n);
                        k = null != n
                    }(m = k ? m : void 0) ? (e++, 1 === h ? (g = d(f, g, m, void 0, void 0), void 0 !== g && (b[f] = g)) : (g = d(f, g, m, a[e++], void 0), void 0 !== g && (b[f] = g))) : (g = c(f, g, a[e++], void 0), void 0 !== g && (b[f] = g))
                } else g = c(f, g, void 0, void 0), void 0 !== g && (b[f] = g)
            }
        }
        de in a && be in a && (a.length = 0);
        return b
    };
    ee = function(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.j)
            if (c = c[b]) {
                var d = c.Hm,
                    e = c.Qm.j;
                if (d) {
                    var f = Xd(d),
                        g = Vd(d).v;
                    c = function(h, k, l) {
                        return e(h, k, l, g, f)
                    }
                } else c = e;
                return a[b] = c
            }
    };
    Wd = function(a, b, c) {
        for (var d = sd(a), e = +!!(d & 512) - 1, f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var k = a[h];
            if (null != k) {
                var l = h - e,
                    m = ee(c, l);
                m && m(b, k, l)
            }
        }
        if (d & 256) {
            a = a[f - 1];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (d = +n, _.y(Number, "isNaN").call(Number, d) || (e = a[n], null != e && (f = ee(c, d)) && f(b, e, d)))
        }
    };
    fe = function(a) {
        return new ce(a)
    };
    je = function(a, b, c) {
        a: if (null != b) {
            if (yc(b)) {
                if ("string" === typeof b) break a;
                if ("number" === typeof b) break a
            }
            b = void 0
        }null != b && ("string" === typeof b && ge(b), null != b && (he(a.j, 8 * c), "number" === typeof b ? (a = a.j, Mb(b), ie(a, Jb, Kb)) : (c = ge(b), ie(a.j, c.v, c.j))))
    };
    le = function(a, b, c, d, e) {
        b = b instanceof _.A ? b.G : Array.isArray(b) ? _.z(b, d[0], d[1]) : void 0;
        if (null != b) {
            he(a.j, 8 * c + 2);
            c = a.j.end();
            ke(a, c);
            c.push(a.v);
            e(b, a);
            e = c.pop();
            for (e = a.v + a.j.length() - e; 127 < e;) c.push(e & 127 | 128), e >>>= 7, a.v++;
            c.push(e);
            a.v++
        }
    };
    ne = function(a) {
        var b = me;
        me = void 0;
        if (!a) throw Error(b && b() || String(a));
    };
    pe = function(a) {
        return function() {
            var b = new oe;
            Wd(this.G, b, Vd(a));
            ke(b, b.j.end());
            for (var c = new Uint8Array(b.v), d = b.m, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            b.m = [c];
            return c
        }
    };
    qe = function(a) {
        return function(b) {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = Zc(a, $b(b))
            }
            return b
        }
    };
    re = function(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    };
    se = function(a) {
        a = void 0 === a ? _.q : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    };
    _.ue = function(a) {
        var b = _.gb.apply(1, arguments);
        if (0 === b.length) return _.te(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return _.te(c)
    };
    ve = function(a, b) {
        var c = _.Ya(a).toString();
        if (/#/.test(c)) throw Error("");
        var d = /\?/.test(c) ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return _.te(c)
    };
    ye = function(a) {
        return new _.we(JSON.stringify(a).replace(/</g, "\\u003C"), xe)
    };
    Ae = function(a) {
        return ze(2 > (a.length + 3) % 4 ? a + "A" : a).map(function(b) {
            return (_.E = b.toString(2), _.y(_.E, "padStart")).call(_.E, 8, "0")
        }).join("")
    };
    Be = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    };
    Fe = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };
    Ge = function(a, b) {
        var c = a.indexOf("11");
        if (-1 === c) throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    };
    He = function(a, b) {
        var c = function(d) {
            var e = {};
            return [(e[d.Ag] = d.Sf, e)]
        };
        return JSON.stringify([a.filter(function(d) {
            return d.ze
        }).map(c), b.toJSON(), a.filter(function(d) {
            return !d.ze
        }).map(c)])
    };
    Je = function(a) {
        a.tg.apply(a, _.Ie(_.gb.apply(1, arguments).map(function(b) {
            return {
                ze: !0,
                Ag: 2,
                Sf: b.toJSON()
            }
        })))
    };
    Ke = function(a) {
        a.tg.apply(a, _.Ie(_.gb.apply(1, arguments).map(function(b) {
            return {
                ze: !0,
                Ag: 5,
                Sf: b.toJSON()
            }
        })))
    };
    Le = function(a) {
        a && "function" == typeof a.va && a.va()
    };
    Ne = function(a, b, c, d, e, f) {
        try {
            var g = a.j,
                h = _.Me("SCRIPT", g);
            h.async = !0;
            Za(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", function() {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", function() {
                0 < c ? Ne(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (k) {
            f()
        }
    };
    Pe = function(a, b, c, d) {
        c = void 0 === c ? function() {} : c;
        d = void 0 === d ? function() {} : d;
        Ne(Oe(a), b, 0, !1, c, d)
    };
    Qe = function(a) {
        return a[_.y(_.t.Symbol, "iterator")]()
    };
    We = function(a) {
        var b = Ue(Ve(a.location.href));
        a = b.get("fcconsent");
        b = b.get("fc");
        return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null
    };
    Xe = function(a) {
        var b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = Ue(Ve(a.location.href)).get("fctype")) && -1 !== b.indexOf(a) ? a : null
    };
    $e = function(a) {
        a = Ye(a.data.__fciReturn);
        return {
            payload: a,
            jg: _.Ze(a, 1)
        }
    };
    bf = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = _.Me("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                d && ja(a.google_image_requests, f);
                _.af(f, "load", g);
                _.af(f, "error", g)
            };
            _.ib(f, "load", g);
            _.ib(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    };
    cf = function(a) {
        return function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    ef = function() {
        var a = df;
        return function(b) {
            return b instanceof a
        }
    };
    gf = function(a) {
        return function(b) {
            if (!ff(b)) return !1;
            for (var c = _.w(_.y(Object, "entries").call(Object, a)), d = c.next(); !d.done; d = c.next()) {
                var e = _.w(d.value);
                d = e.next().value;
                e = e.next().value;
                if (!(d in b)) {
                    if (!0 === e.Km) continue;
                    return !1
                }
                if (!e(b[d])) return !1
            }
            return !0
        }
    };
    hf = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            jg: b.__uspapiReturn.callId
        }
    };
    jf = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            jg: b.__gppReturn.callId
        }
    };
    kf = function(a) {
        return !a || 1 === a.length && -1 === a[0]
    };
    lf = function(a, b) {
        b = void 0 === b ? window : b;
        if (_.G(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    mf = function(a) {
        return "null" !== a.origin
    }; of = function(a, b, c) {
        b = _.G(b, 5) && mf(c) ? c.document.cookie : null;
        return null === b ? null : (new nf({
            cookie: b
        })).get(a) || ""
    };
    pf = function(a, b, c) {
        return b[a] || c
    };
    sf = function(a) {
        _.qf(rf).m(a)
    };
    _.tf = function() {
        return _.qf(rf).H()
    };
    uf = function(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(_.E = c.allowedFeatures(), _.y(_.E, "includes")).call(_.E, a))
    };
    vf = function(a, b, c) {
        return !!(a && "runAdAuction" in b && b.runAdAuction instanceof Function && uf("run-ad-auction", c))
    };
    wf = function(a, b) {
        return !!(a && "browsingTopics" in b && b.browsingTopics instanceof Function && uf("browsing-topics", b))
    };
    xf = function(a, b, c) {
        c = void 0 === c ? b.document : c;
        return !!(a && "sharedStorage" in b && b.sharedStorage && uf("shared-storage", c))
    };
    Af = function(a) {
        a = void 0 === a ? _.yf() : a;
        return function(b) {
            return _.zf(b + " + " + a) % 1E3
        }
    };
    _.H = function(a) {
        return _.qf(Bf).v(a.j, a.defaultValue)
    };
    _.Cf = function(a) {
        return _.qf(Bf).m(a.j, a.defaultValue)
    };
    _.Df = function(a) {
        return _.qf(Bf).H(a.j, a.defaultValue)
    };
    Ef = function(a) {
        return _.qf(Bf).B(a.j, a.defaultValue)
    };
    Mf = function(a) {
        _.qf(Ff).j(a)
    };
    Qf = function() {
        if (void 0 === b) {
            var a = void 0 === a ? _.q : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        a = b;
        Nf(_.qf(rf), a);
        Of(b);
        Pf(_.qf(Ff), b);
        _.qf(Bf).j()
    };
    Of = function(a) {
        var b = _.qf(Bf);
        b.v = function(c, d) {
            return pf(5, a, function() {
                return !1
            })(c, d, 2)
        };
        b.m = function(c, d) {
            return pf(6, a, function() {
                return 0
            })(c, d, 2)
        };
        b.H = function(c, d) {
            return pf(7, a, function() {
                return ""
            })(c, d, 2)
        };
        b.B = function(c, d) {
            return pf(8, a, function() {
                return []
            })(c, d, 2)
        };
        b.j = function() {
            pf(15, a, function() {})(2)
        }
    };
    Uf = function(a, b, c, d) {
        var e = new _.Rf,
            f = "",
            g = function(k) {
                try {
                    var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                    f === l.paw_id && (_.af(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
                } catch (m) {}
            },
            h = Sf(a);
        return h ? (_.ib(a, "message", g), f = c(h), e.promise) : (c = Tf(a)) ? (f = String(Math.floor(2147483647 * _.yf())), _.ib(a, "message", g), b(c, f), e.promise) : null
    };
    Vf = function(a) {
        return Uf(a, function(b, c) {
            var d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    Wf = function(a) {
        return !!Sf(a) || !!Tf(a)
    };
    Sf = function(a) {
        var b;
        if ("function" === typeof(null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk
    };
    Tf = function(a) {
        var b, c, d, e, f, g;
        if ("function" === typeof(null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof(null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers
    };
    Xf = function(a) {
        var b, c;
        return null != (c = (_.E = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), _.y(_.E, "find")).call(_.E, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    $f = function(a, b, c) {
        var d, e, f, g, h;
        return _.lb(function(k) {
            if (1 == k.j) return d = c ? a.filter(function(l) {
                return !l.Xb
            }) : a, _.mb(k, _.t.Promise.all(d.map(function(l) {
                return l.yb.promise
            })), 2);
            if (a.length === d.length) return k.return();
            e = a.filter(function(l) {
                return l.Xb
            });
            if (_.H(Yf)) {
                f = _.w(b);
                for (g = f.next(); !g.done; g = f.next()) h = g.value, Zf(h);
                return _.mb(k, _.t.Promise.all(e.map(function(l) {
                    return l.yb.promise
                })), 0)
            }
            return _.mb(k, _.t.Promise.race([_.t.Promise.all(e.map(function(l) {
                return l.yb.promise
            })), new _.t.Promise(function(l) {
                return void setTimeout(l, c)
            })]), 0)
        })
    };
    ag = function(a, b, c, d) {
        try {
            if (a.setAttribute("data-google-query-id", c), !d) {
                null != b.googletag || (b.googletag = {
                    cmd: []
                });
                var e;
                b.googletag.queryIds = null != (e = b.googletag.queryIds) ? e : [];
                b.googletag.queryIds.push(c);
                500 < b.googletag.queryIds.length && b.googletag.queryIds.shift()
            }
        } catch (f) {}
    };
    _.bg = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.dg = function(a) {
        var b = _.cg(a);
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    eg = function(a, b, c) {
        b = void 0 === b ? 420 : b;
        return (a = _.cg(a, void 0 === c ? !1 : c)) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    fg = function(a) {
        return (a = _.dg(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.gg = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.hg = function(a) {
        return _.gg(a).clientHeight
    };
    _.cg = function(a, b) {
        var c = _.gg(a).clientWidth;
        return (void 0 === b ? 0 : b) ? c * _.ig(a) : c
    };
    _.jg = function(a, b) {
        var c = _.gg(a);
        return b ? (a = _.hg(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    };
    _.kg = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    _.lg = function(a) {
        var b = a.We,
            c = a.je,
            d = a.Ge,
            e = a.Xe,
            f = a.ke;
        a = a.He;
        for (var g = [], h = 0; h < a; h++)
            for (var k = 0; k < d; k++) {
                var l = d - 1,
                    m = a - 1;
                g.push({
                    x: b + (0 === l ? 0 : k / l) * (c - b),
                    y: e + (0 === m ? 0 : h / m) * (f - e)
                })
            }
        return g
    };
    mg = function(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };
    _.sg = function(a) {
        var b = a.ka,
            c = a.Wf,
            d = a.Ce,
            e = a.Og,
            f = a.Ma,
            g = a.hj,
            h = a.ol;
        a = 0;
        try {
            a |= b !== b.top ? 512 : 0;
            var k = Math.min(b.screen.width || 0, b.screen.height || 0);
            a |= k ? 320 > k ? 8192 : 0 : 2048;
            a |= b.navigator && ng(b.navigator.userAgent) ? 1048576 : 0;
            if (c) {
                k = a;
                var l = b.innerHeight;
                var m = ((void 0 === h ? 0 : h) ? _.ig(b) * l : l) >= c;
                var n = k | (m ? 0 : 1024)
            } else n = a | (_.bg(b) ? 0 : 8);
            a = n;
            a |= eg(b, d, h);
            h || (a |= fg(b))
        } catch (p) {
            a |= 32
        }
        switch (e) {
            case 2:
                c = f;
                c = void 0 === c ? null : c;
                d = _.lg({
                    We: 0,
                    je: b.innerWidth,
                    Ge: 3,
                    Xe: 0,
                    ke: Math.min(Math.round(b.innerWidth / 320 * 50), og) + 15,
                    He: 3
                });
                null != pg(qg(b, c), d) && (a |= 16777216);
                break;
            case 1:
                c = f, c = void 0 === c ? null : c, d = b.innerWidth, e = b.innerHeight, n = Math.min(Math.round(b.innerWidth / 320 * 50), og) + 15, m = _.lg({
                    We: 0,
                    je: d,
                    Ge: 3,
                    Xe: e - n,
                    ke: e,
                    He: 3
                }), 25 < n && m.push({
                    x: d - 25,
                    y: e - 25
                }), null != pg(qg(b, c), m) && (a |= 16777216)
        }
        g && null != _.rg(b, void 0 === f ? null : f) && (a |= 16777216);
        return a
    };
    ng = function(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    };
    _.rg = function(a, b) {
        b = void 0 === b ? null : b;
        var c = a.innerHeight;
        c = _.lg({
            We: 0,
            je: a.innerWidth,
            Ge: 10,
            Xe: c - 66,
            ke: c,
            He: 10
        });
        return pg(qg(a, b), c)
    };
    qg = function(a, b) {
        return new _.tg(a, {
            mh: ug(a, void 0 === b ? null : b)
        })
    };
    ug = function(a, b) {
        if (b = void 0 === b ? null : b) {
            var c = b;
            return function(d, e, f) {
                var g, h;
                _.vg(c, "ach_evt", {
                    tn: d.tagName,
                    id: null != (g = d.getAttribute("id")) ? g : "",
                    cls: null != (h = d.getAttribute("class")) ? h : "",
                    ign: String(f),
                    pw: a.innerWidth,
                    ph: a.innerHeight,
                    x: e.x,
                    y: e.y
                }, !0, 1)
            }
        }
    };
    _.wg = function(a) {
        a = void 0 === a ? _.q : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    };
    _.xg = function(a) {
        a = void 0 === a ? _.q : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    yg = function(a, b) {
        b = void 0 === b ? _.q : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    _.zg = function(a) {
        a = void 0 === a ? _.q : a;
        var b = Math.min(yg("domLoading", a) || Infinity, yg("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(yg("responseEnd", a), yg("navigationStart", a)) : b
    };
    Gg = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.Ag(b, function(d) {
            return c - d < 1E3 * a
        })
    };
    Ig = function(a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || _.Hg(d, function(e) {
                    return !_.y(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = Gg(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    };
    Kg = function(a, b) {
        return null !== _.Jg(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && b.has(c)
        }, !0)
    };
    Lg = function(a, b) {
        return _.Jg(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position
        }, !0)
    };
    Mg = function(a) {
        return Math.round(10 * Math.round(a / 10))
    };
    Ng = function(a) {
        return a.position + "-" + Mg(a.ha) + "x" + Mg(a.na) + "-" + Mg(a.scrollY + a.Lc) + "Y"
    };
    Og = function(a) {
        return "f-" + Ng({
            position: a.position,
            Lc: a.Lc,
            scrollY: 0,
            ha: a.ha,
            na: a.na
        })
    };
    Pg = function(a, b) {
        a = Math.min(null != a ? a : Infinity, null != b ? b : Infinity);
        return Infinity !== a ? a : 0
    };
    Rg = function(a, b, c) {
        var d = _.Qg(c.ka).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.min(e.bottom + 10, c.na),
                    g = Math.max(e.left - 10, 0),
                    h = Math.min(e.right + 10, c.ha),
                    k = .3 * c.ha;
                for (e = Math.max(e.top - 10, 0); e <= f; e += 10) {
                    if (0 < h && g < k) {
                        var l = Og({
                            position: "left",
                            Lc: e,
                            ha: c.ha,
                            na: c.na
                        });
                        b.set(l, Pg(b.get(l), g))
                    }
                    if (g < c.ha && h > c.ha - k) {
                        l = Og({
                            position: "right",
                            Lc: e,
                            ha: c.ha,
                            na: c.na
                        });
                        var m = c.ha - h;
                        b.set(l, Pg(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    };
    _.Sg = function(a) {
        if (1200 > a.ha || 650 > a.na) return null;
        var b = _.Qg(a.ka).sideRailAvailableSpace;
        if (!a.Dh) {
            var c = {
                    ka: a.ka,
                    ha: a.ha,
                    na: a.na,
                    jc: a.jc
                },
                d = "f-" + Mg(c.ha) + "x" + Mg(c.na);
            if (!b.has(d)) {
                b.set(d, 0);
                _.Qg(c.ka).sideRailProcessedFixedElements.clear();
                d = new _.t.Set([].concat(_.Ie(_.y(Array, "from").call(Array, c.ka.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]"))), _.Ie(c.jc)));
                for (var e = c.ka, f = [], g = _.w(e.document.querySelectorAll("*")), h = g.next(); !h.done; h = g.next()) {
                    h = h.value;
                    var k = e.getComputedStyle(h, null);
                    "fixed" === k.position && "none" !== k.display && "hidden" !== k.visibility && f.push(h)
                }
                e = _.w(f);
                for (f = e.next(); !f.done; f = e.next()) f = f.value, Kg(f, d) || Rg(f, b, c)
            }
        }
        c = [];
        e = .9 * a.na;
        f = _.kg(a.ka);
        g = d = (a.na - e) / 2;
        h = e / 7;
        for (k = 0; 8 > k; k++) {
            var l = c,
                m = l.push;
            var n = g;
            var p = a.position,
                r = {
                    ka: a.ka,
                    ha: a.ha,
                    na: a.na,
                    jc: a.jc
                },
                v = Og({
                    position: p,
                    Lc: n,
                    ha: r.ha,
                    na: r.na
                }),
                u = Ng({
                    position: p,
                    Lc: n,
                    scrollY: f,
                    ha: r.ha,
                    na: r.na
                });
            if (!b.has(u)) {
                var x = "left" === p ? 20 : r.ha - 20,
                    C = x;
                p = .3 * r.ha / 5 * ("left" === p ? 1 : -1);
                for (var D = 0; 6 > D; D++) {
                    var F = mg(r.ka.document, {
                            x: Math.round(C),
                            y: Math.round(n)
                        }),
                        B = Kg(F, r.jc),
                        J = Lg(F, r.ka);
                    if (!B && null !== J) {
                        Rg(J, b, r);
                        b.delete(u);
                        break
                    }
                    B || (B = F.offsetHeight >= .25 * r.na, B = F.offsetWidth >= .9 * r.ha && B);
                    if (B) b.set(u, Math.round(Math.abs(C - x) + 20));
                    else if (C !== x) C -= p, p /= 2;
                    else {
                        b.set(u, 0);
                        break
                    }
                    C += p
                }
            }
            n = Pg(b.get(v), b.get(u));
            m.call(l, n);
            g += h
        }
        b = a.oi;
        f = a.position;
        e = Math.round(e / 8);
        d = Math.round(d);
        g = a.minWidth;
        a = a.minHeight;
        l = [];
        h = _.y(Array(c.length), "fill").call(Array(c.length), 0);
        for (k = 0; k < c.length; k++) {
            for (; 0 !== l.length && c[l[l.length - 1]] >= c[k];) l.pop();
            h[k] = 0 === l.length ? 0 : l[l.length - 1] + 1;
            l.push(k)
        }
        l = [];
        m = c.length - 1;
        k = _.y(Array(c.length), "fill").call(Array(c.length), 0);
        for (n = m; 0 <= n; n--) {
            for (; 0 !== l.length && c[l[l.length - 1]] >= c[n];) l.pop();
            k[n] = 0 === l.length ? m : l[l.length - 1] - 1;
            l.push(n)
        }
        l = null;
        for (m = 0; m < c.length; m++)
            if (n = {
                    position: f,
                    width: Math.round(c[m]),
                    height: Math.round((k[m] - h[m] + 1) * e),
                    offsetY: d + h[m] * e
                }, r = n.width >= g && n.height >= a, 0 === b && r) {
                l = n;
                break
            } else 1 === b && r && (!l || n.width * n.height > l.width * l.height) && (l = n);
        return l
    };
    Tg = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    Zg = function(a) {
        var b = Date.now();
        b = _.y(Number, "isFinite").call(Number, b) ? Math.round(b) : 0;
        var c = new Ug;
        b = _.Vg(c, 1, b);
        b = _.Vg(b, 2, a.pvsid);
        b = _.Wg(b, 3, a.wb || a.ub);
        c = _.tf();
        b = _.Md(b, 4, c, Bc);
        b = _.Vg(b, 5, a.Ih);
        a = _.Wg(b, 12, a.vj);
        var d;
        if (b = null == (d = _.t.globalThis.performance) ? void 0 : d.memory) {
            d = new Xg;
            try {
                _.Vg(d, 1, b.jsHeapSizeLimit)
            } catch (e) {}
            try {
                _.Vg(d, 2, b.totalJSHeapSize)
            } catch (e) {}
            try {
                _.Vg(d, 3, b.usedJSHeapSize)
            } catch (e) {}
        } else d = void 0;
        d && _.Yg(a, 10, d);
        return a
    };
    fh = function(a) {
        var b = _.zg();
        if (a.Qc) {
            var c = a.Tb,
                d = Zg(a),
                e = new $g;
            b = _.Vg(e, 2, b);
            e = new ah;
            e = _.bh(e, 1, a.Qc);
            e = _.ch(e, 2, a.Ih);
            e = _.bh(e, 3, a.pi);
            e = _.ch(e, 4, a.Hh);
            e = _.bh(e, 5, a.sg);
            a = _.ch(e, 6, a.xf);
            a = _.Yg(b, 3, a);
            d = _.dh(d, 6, eh, a);
            Ke(c, d)
        }
    };
    K = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        return function() {
            var e = _.gb.apply(0, arguments),
                f = gh(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.Qc && a.pi) {
                    var h = a.Tb,
                        k = Zg(a);
                    var l = _.Vg(k, 5, a.Hh);
                    var m = new hh;
                    var n = _.I(m, 1, b);
                    var p = _.ch(n, 2, g);
                    var r = _.dh(l, 9, eh, p);
                    Ke(h, r)
                }
            } catch (v) {}
            return f
        }
    };
    gh = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = _.gb.apply(0, arguments),
                f = void 0,
                g = !1,
                h = null,
                k = _.qf(ih);
            try {
                var l = _.H(jh);
                l && k && (h = k.start(b.toString(), 3));
                f = c.apply(this, e);
                g = !0;
                l && k && k.end(h)
            } catch (m) {
                try {
                    if (g) kh.call(this, a, 110, m);
                    else if (kh.call(this, a, b, m), !d) throw m;
                } catch (n) {
                    if (_.lh(h), !g && !d) throw m;
                }
            }
            return f
        }
    };
    mh = function(a, b, c, d) {
        return gh(a, b, c, void 0 === d ? !1 : d)()
    };
    kh = function(a, b, c) {
        if (a.sg) {
            c = _.nh(c) ? c.error : c;
            var d = new oh,
                e = new ph;
            try {
                var f = _.qh(window);
                _.Vg(e, 1, f)
            } catch (p) {}
            try {
                var g = _.tf();
                _.Md(e, 2, g, Bc)
            } catch (p) {}
            try {
                _.Wg(e, 3, window.document.URL)
            } catch (p) {}
            f = _.Yg(d, 2, e);
            g = new rh;
            b = _.I(g, 1, b);
            try {
                var h = sh(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                _.Wg(b, 2, h)
            } catch (p) {}
            try {
                var k = sh(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                _.Wg(b, 3, k)
            } catch (p) {}
            try {
                var l = sh(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && _.Md(b, 4, l.split(/\n\s*/), _.Lc)
            } catch (p) {}
            h = _.Yg(f, 1, b);
            k = new th;
            try {
                _.Wg(k, 1, a.wb || a.ub)
            } catch (p) {}
            try {
                var m = uh();
                _.ch(k, 2, m)
            } catch (p) {}
            try {
                var n = [].concat(_.Ie(_.y(vh, "keys").call(vh)));
                _.Md(k, 3, n, _.Lc)
            } catch (p) {}
            _.dh(h, 4, wh, k);
            _.Vg(h, 5, a.xf);
            Je(a.Tb, h)
        }
    };
    Bh = function(a, b, c) {
        var d, e;
        return null != (e = null == (d = _.y(a, "find").call(a, function(f) {
            f = _.xh(f, yh, 1);
            return zh(f, 1) <= b && zh(f, 2) <= c
        })) ? void 0 : Ah(d, yh, 2)) ? e : null
    };
    Dh = function(a, b, c) {
        return "number" === typeof b && "number" === typeof c && Ah(a, Ch, 6).length ? Bh(Ah(a, Ch, 6), b, c) : Ah(a, yh, 5)
    };
    Fh = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = Eh(!1, b), c = Dh(a, b.width, b.height));
        null != c || (c = Dh(a));
        return null == c ? [] : c.map(function(d) {
            return _.G(d, 3) ? "fluid" : [zh(d, 1), zh(d, 2)]
        })
    };
    Gh = function(a) {
        var b = [],
            c = !1;
        a = _.w(Fh(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    _.Jh = function(a) {
        _.qf(Hh).j = !0;
        return Ih[a]
    };
    Lh = function(a) {
        var b = a.document;
        return Kh(a) ? b.URL : b.referrer
    };
    Oh = function(a) {
        try {
            return Mh(a, window.top)
        } catch (b) {
            return new _.Nh(-12245933, -12245933)
        }
    };
    Sh = function(a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.Ph(Qh, a), a = new _.Rh(a.right - a.left, a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    };
    Vh = function(a, b) {
        for (var c = {}, d = _.w(_.y(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = _.vd(b[e]),
                g = _.qf(Th),
                h = g.j.get(e);
            null == h ? h = ++_.qf(ih).m : g.j.delete(e);
            _.Uh(f, 20, _.Ec(h));
            c[e] = f
        }
        return {
            X: _.vd(a),
            T: c
        }
    };
    Yh = function() {
        for (var a = "", b = _.w(Wh()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
        return a
    };
    Wh = function() {
        var a;
        if ("function" === typeof(null == (a = window.crypto) ? void 0 : a.getRandomValues)) return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if ("function" === typeof(null == (b = a.msCrypto) ? void 0 : b.getRandomValues)) return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
        return a
    };
    ti = function(a, b, c, d) {
        var e = Zh(b, a) || oi(b, a);
        if (!e) return null;
        var f = Oh(e),
            g = e === oi(b, a),
            h = pi(function() {
                var p = g ? oi(b, a) : e;
                return p && qi(p, window)
            }),
            k = function(p) {
                var r;
                return null == (r = h()) ? void 0 : r.getPropertyValue(p)
            };
        c = Fh(c)[0];
        var l = !1;
        Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
        l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (g) {
            var m;
            f.y += Math.round(Math.min(null != (m = ri(k("padding-top"))) ? m : 0, e.clientHeight));
            if (!l) {
                d = e.clientWidth;
                var n;
                f.x += Math.round(Math.min(null != (n = ri(k("padding-left"))) ? n : 0, d))
            }
        }
        return f && si(e) ? f : new _.Nh(-12245933, -12245933)
    };
    ui = function(a, b, c, d) {
        var e = oi(a, c),
            f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = ti(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    vi = function(a) {
        return "google_ads_iframe_" + a.toString()
    };
    wi = function(a) {
        return vi(a) + "__container__"
    };
    Zh = function(a, b) {
        var c;
        return (null == (c = oi(a, b)) ? void 0 : c.querySelector('[id="' + wi(a) + '"]')) || null
    };
    xi = function(a, b) {
        var c, d;
        return null != (d = null == (c = Zh(a, b)) ? void 0 : c.querySelector('iframe[id="' + vi(a) + '"]')) ? d : null
    };
    oi = function(a, b) {
        b = void 0 === b ? document : b;
        return yi().m.get(a) || b.getElementById(a.getDomId())
    };
    zi = function(a) {
        return Math.round(Number(ri(a)))
    };
    Ai = function(a) {
        var b = a.parentElement;
        return !b || 1 >= b.children.length ? !1 : _.y(Array, "from").call(Array, b.children).some(function(c) {
            return c !== a && !(_.E = ["script", "style"], _.y(_.E, "includes")).call(_.E, c.tagName.toLowerCase())
        })
    };
    Ci = function(a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.Bi(a, c), a = a.parentElement
    };
    Di = function(a, b, c, d, e) {
        _.Bi(a, {
            "margin-left": "0px",
            "margin-right": "0px"
        });
        var f = {},
            g = "rtl" === d.direction,
            h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
        d = function() {
            var k = a.getBoundingClientRect().left;
            return g ? h - k : k - h
        };
        b = d();
        return 0 !== b ? (c = function(k) {
            g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
        }, c(-b), _.Bi(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.Bi(a, f)), !0) : !1
    };
    Fi = function(a, b, c, d, e, f, g, h, k, l) {
        window.setTimeout(function() {
            var m = Gh(d);
            if (window.IntersectionObserver) {
                var n, p = null != (n = xi(c, b)) ? n : oi(c, b);
                m = Ei(a, b, c, e, f, g, m, h, k, l, p);
                (new window.IntersectionObserver(m, {
                    threshold: .98
                })).observe(p)
            }
        }, 500)
    };
    Ei = function(a, b, c, d, e, f, g, h, k, l, m) {
        var n = window.location && "#flexibleAdSlotTest" === window.location.hash ? 1 : _.Cf(Ji);
        return gh(a, 459, function(p, r) {
            (p = null == p ? void 0 : p[0]) && Ki(a, b, c, d, e, f, g, h, k, l, r, m, p, n)
        })
    };
    Ki = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        var v = p.boundingClientRect,
            u = p.intersectionRatio,
            x = window.innerWidth,
            C = v.left,
            D = v.right,
            F = 0 > C + 2,
            B = 0 < D - (x + 2);
        (.98 <= u || F || B) && Li(k, function(J) {
            m.unobserve(n);
            var R = F || B;
            var O = new Mi;
            Ni(n, R) && O.set(10);
            if (void 0 !== h && Ai(n)) {
                var W, ba = null == (W = oi(c, b)) ? void 0 : W.parentElement,
                    ha;
                W = ba ? null == (ha = qi(ba, window)) ? void 0 : ha.width : void 0;
                h !== W && O.set(16)
            }
            R ? (O.set(8), R = Oi(O)) : R = Pi(b, c, u, O);
            ha = Qi(c, n, f);
            O = ha.dk;
            ha = ha.gk;
            Ri(J, a);
            L(J, "qid", l);
            L(J, "iu", c.getAdUnitPath());
            L(J, "e", String(R));
            F && L(J, "ofl", String(C));
            B && L(J, "ofr", String(D - x));
            L(J, "ret", e + "x" + f);
            L(J, "req", g);
            L(J, "bm", String(d));
            L(J, "efh", Number(O));
            L(J, "stk", Number(ha));
            L(J, "ifi", Si(window))
        }, r)
    };
    Pi = function(a, b, c, d) {
        var e = xi(b, a) || oi(b, a);
        try {
            var f = e.getBoundingClientRect(),
                g = f.left,
                h = f.top,
                k = f.width,
                l = f.height,
                m = oi(b, a),
                n = qi(m, window);
            if ("hidden" === n.visibility || "none" === n.display) return Oi(d);
            var p = zi(n.getPropertyValue("border-top-width") || 0) + 1;
            b = g + k;
            f = h + l;
            c = (1 - c) * l;
            var r = a.elementsFromPoint(g + p + 2, h + c + p);
            var v = a.elementsFromPoint(b - p - 2, h + c + p);
            var u = a.elementsFromPoint(b - p - 2, f - c - p);
            var x = a.elementsFromPoint(g + p + 2, f - c - p);
            var C = a.elementsFromPoint(b / 2, f - c - p)
        } catch (F) {
            return d.set(1), Oi(d)
        }
        if (!(r && r.length && v && v.length && u && u.length && x && x.length && C && C.length)) return d.set(7), Oi(d);
        a = function(F, B) {
            for (var J = !1, R = 0; R < F.length; R++) {
                var O = F[R];
                if (J) {
                    var W = qi(O, window);
                    if ("hidden" !== W.visibility && !Ti(O) && !D(e, O)) {
                        d.set(B);
                        "absolute" === W.position && d.set(11);
                        break
                    }
                } else e === O && (J = !0)
            }
        };
        Ui(e) && d.set(9);
        var D = function(F, B) {
            return Vi(F, B) || Vi(B, F)
        };
        g = r[0];
        e === g || D(e, g) || Ti(g) || d.set(2);
        g = v[0];
        e === g || D(e, g) || Ti(g) || d.set(3);
        g = u[0];
        e === g || D(e, g) || Ti(g) || d.set(4);
        g = x[0];
        e === g || D(e, g) || Ti(g) || d.set(5);
        if (Ti(e)) return Oi(d);
        a(r, 12);
        a(v, 13);
        a(u, 14);
        a(x, 15);
        a(C, 6);
        return Oi(d)
    };
    Ni = function(a, b) {
        var c = !1,
            d = !1;
        return Wi(a, function(e, f) {
            d = d || "scroll" === e.overflowX || "auto" === e.overflowX;
            c = c || "flex" === e.display;
            return b && c && d || "listbox" === f.role
        })
    };
    Qi = function(a, b, c) {
        var d = (a = oi(a)) && qi(a, window),
            e = d ? "absolute" !== d.position : !0,
            f = !1,
            g = a && a.parentElement,
            h = !1;
        Xi(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k === g)) e = Yi(k, _.q, -1, -1);
                else {
                    l = l && l.height;
                    var m = (l && _.y(l, "endsWith").call(l, "px") ? zi(l) : 0) >= c;
                    !l || m || "string" === typeof l && _.y(Zi, "includes").call(Zi, l) || (e = !1)
                }
            f || (k = qi(k, _.q), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            dk: e,
            gk: f
        }
    };
    Yi = function(a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.y(Zi, "includes").call(Zi, e.height) || (null == e ? 0 : e.maxHeight) && !_.y($i, "includes").call($i, e.maxHeight) || aj(a, b.document, function(f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.y(Zi, "includes").call(Zi, g) || !!f && !_.y($i, "includes").call($i, f)
        }, c, d) ? !1 : !0
    };
    aj = function(a, b, c, d, e) {
        b = b.styleSheets;
        if (!b) return !1;
        var f = a.matches || a.msMatchesSelector;
        d = -1 === d ? Infinity : d;
        e = -1 === e ? Infinity : e;
        for (var g = 0; g < Math.min(b.length, d); ++g) {
            var h = null;
            try {
                var k = b[g],
                    l = null;
                try {
                    l = k.cssRules || k.rules
                } catch (F) {
                    if (15 == F.code) throw F.styleSheet = k, F;
                }
                h = l
            } catch (F) {
                continue
            }
            l = void 0;
            if (null != (l = h) && l.length)
                for (l = 0; l < Math.min(h.length, e); ++l) try {
                    var m = h[l],
                        n, p = c;
                    if (!(n = f.call(a, m.selectorText) && p(m))) a: {
                        var r = void 0;p = a;
                        var v = c,
                            u = e,
                            x = null != (r = m.cssRules) ? r : [];
                        for (r = 0; r < Math.min(x.length, u); r++) {
                            var C = x[r],
                                D = v;
                            if (f.call(p, C.selectorText) && D(C)) {
                                n = !0;
                                break a
                            }
                        }
                        n = !1
                    }
                    if (n) return !0
                } catch (F) {}
        }
        return !1
    };
    Ti = function(a) {
        return Wi(a, function(b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    };
    Ui = function(a) {
        return Wi(a, function(b) {
            var c;
            return (_.E = ["left", "right"], _.y(_.E, "includes")).call(_.E, null != (c = b["float"]) ? c : b.cssFloat)
        })
    };
    bj = function(a) {
        return "number" === typeof a || "string" === typeof a
    };
    ej = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = cj.j();
        0 === e.j && (e.j = .001 > Math.random() ? 2 : 1);
        2 === e.j && (e = {}, dj(_.y(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(_.qh(window)), e.em = c, e.lid = b, e.eids = _.tf().join(), e), d), "esp"))
    };
    fj = function() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new _.t.Promise(function(c) {
            var d = function() {
                c(b());
                _.af(a, "load", d)
            };
            _.ib(a, "load", d)
        })
    };
    gj = function(a) {
        var b = [],
            c = RegExp("^_GESPSK-(.+)$");
        try {
            for (var d = 0; d < a.length; d++) {
                var e = (c.exec(a.key(d)) || [])[1];
                e && b.push(e)
            }
        } catch (f) {}
        return b
    };
    qj = function(a, b, c, d) {
        if (d && c && b && "function" === typeof c.getUserIdsAsEidBySource) {
            if ("function" === typeof c.getUserIdsAsEids) try {
                for (var e = _.w(c.getUserIdsAsEids()), f = e.next(); !f.done; f = e.next()) {
                    var g = f.value;
                    "string" === typeof g.source && ej(52, g.source)
                }
            } catch (m) {
                var h;
                ej(45, "", null == (h = m) ? void 0 : h.message)
            }
            b = _.w(b);
            for (e = b.next(); !e.done; e = b.next())
                if (e = e.value, String(_.M(e, 1)) === d)
                    for (e = _.w(Ah(e, hj, 2)), f = e.next(); !f.done; f = e.next())
                        if (f = f.value, _.G(f, ij(f, jj, 3)) && (f = _.M(f, 1), !kj(a, f))) {
                            g = null;
                            try {
                                var k = h = void 0,
                                    l = void 0;
                                g = null == (h = c.getUserIdsAsEidBySource(f)) ? void 0 : null == (k = h.uids) ? void 0 : null == (l = k[0]) ? void 0 : l.id
                            } catch (m) {
                                h = void 0, ej(45, f, null == (h = m) ? void 0 : h.message)
                            }
                            g && (300 < g.length ? (h = {}, ej(12, f, null, (h.sl = String(g.length), h.fp = "1", h))) : (h = lj(f), h = mj(h, 2, g), h = nj(h, 11, !0), oj(a, 2, pj, h), h = {}, ej(19, f, null, (h.fp = "1", h.hs = g ? "1" : "0", h))))
                        }
        }
    };
    kj = function(a, b) {
        return Ah(a, pj, 2).some(function(c) {
            return _.rj(c, 1) === b && null != _.rj(c, 2)
        })
    };
    sj = function(a, b) {
        return Ah(a, pj, 2).some(function(c) {
            return _.rj(c, 1) === b && null != _.rj(c, 2)
        })
    };
    vj = function(a, b, c, d, e) {
        if (b)
            for (var f = _.w(gj(b)), g = f.next(), h = {}; !g.done; h = {
                    mc: h.mc
                }, g = f.next())
                if (h.mc = g.value, (g = tj().get(h.mc, b).wc) && (!e || !sj(a, h.mc))) {
                    var k = uj(g);
                    if (2 !== k && 3 !== k) {
                        k = !1;
                        if (c) {
                            var l = /^(\d+)$/.exec(h.mc);
                            if (l && !(k = _.y(c.split(","), "includes").call(c.split(","), l[1]))) continue;
                            if (!k && !c.split(",").some(function(m) {
                                    return function(n) {
                                        var p;
                                        return null == d ? void 0 : null == (p = d.get(n)) ? void 0 : p.has(m.mc)
                                    }
                                }(h))) continue
                        }
                        nj(g, 9, k);
                        k = _.rj(g, 2);
                        oj(a, 2, pj, g);
                        g = {};
                        ej(19, h.mc, null, (g.hs = k ? "1" : "0", g))
                    }
                }
    };
    wj = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    Hj = function(a, b, c, d, e) {
        var f, g, h, k, l, m, n, p, r, v, u, x, C;
        return _.lb(function(D) {
            return 1 == D.j ? (f = new xj, g = new yj(a, c, e), N(f, g), N(f, new zj(g.o, void 0, d, e)), h = new Aj(g.l, e), N(f, h), k = new Bj(h.l, e), N(f, k), l = new Cj(b, k.l, e), N(f, l), N(f, new zj(l.o, void 0, d, e)), m = new Dj(l.l, l.F, 300, 1E3, e), N(f, m), N(f, new zj(m.l, void 0, d, e)), n = new Ej(e), N(f, n), p = new Fj(n.output, k.o, e), N(f, p), r = new Cj(b, p.l, e), N(f, r), v = new zj(r.l, void 0, d, e), N(f, v), Gj(f), C = a, _.mb(D, m.l.promise, 2)) : D.return({
                id: C,
                collectorGeneratedData: null != (x = null == (u = D.v) ? void 0 : _.rj(u, 2)) ? x : null
            })
        })
    };
    Nj = function(a, b, c, d) {
        var e = {};
        e = void 0 === e ? Ij : e;
        Jj() !== Kj(window) ? ej(16, "") : Lj(a, "encryptedSignalProviders", c) && Lj(a, "secureSignalProviders", c) || (ej(38, ""), Mj(a, "encryptedSignalProviders", b, e, c, d), Mj(a, "secureSignalProviders", b, e, c, function() {}))
    };
    Lj = function(a, b, c) {
        if (void 0 === a[b] || a[b] instanceof Array) return !1;
        a[b].addErrorHandler(c);
        return !0
    };
    Mj = function(a, b, c, d, e, f) {
        var g, h = new Oj(null != (g = a[b]) ? g : [], c, "secureSignalProviders" === b, f, d);
        a[b] = new Pj(h);
        h.addErrorHandler(e)
    };
    Sj = function(a, b) {
        var c = new xj,
            d = new Ej(b);
        a = new Qj(d.output, a, b);
        Rj(c, [d, a]);
        Gj(c)
    };
    Wj = function(a, b, c, d, e) {
        var f = b.toString();
        if (Tj.has(f)) return null;
        Tj.add(f);
        f = new xj;
        a = new yj(a, c, e);
        var g = new zj(a.o, c, d, e),
            h = new Uj(a.l, e),
            k = new Aj(h.l, e);
        b = new Vj(k.l, b, e);
        c = new zj(b.l, c, d, e);
        Rj(f, [a, g, h, k, b, c]);
        Gj(f);
        return f
    };
    Yj = function(a, b, c) {
        c = void 0 === c ? Xj : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : _.ib(a, "load", function() {
            return void c(a, b)
        }))
    };
    Zj = function(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    };
    ak = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    ck = function(a) {
        if (a === a.top || _.bk(a.top)) return _.t.Promise.resolve({
            status: 4
        });
        var b = Zj(a);
        if (!b) return _.t.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && ak(a.document.referrer)) return _.t.Promise.resolve({
            status: 3
        });
        var c = new _.Rf;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                ie: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    gk = function(a, b) {
        var c = dk(a);
        return c.messageChannelSendRequestFn ? _.t.Promise.resolve(c.messageChannelSendRequestFn) : new _.t.Promise(function(d) {
            function e(k) {
                return h.j(k).then(function(l) {
                    return l.data
                })
            }
            var f = _.Me("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            b && (f.credentialless = !0);
            f.src = _.Ya(ek).toString();
            var g = (new URL(ek.toString())).origin,
                h = fk({
                    destination: a,
                    mb: f,
                    origin: g,
                    sb: "goog:gRpYw:doubleclick"
                });
            h.j("goog:topics:frame:handshake:ack").then(function(k) {
                "goog:topics:frame:handshake:ack" === k.data && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        })
    };
    qk = function(a, b, c, d) {
        var e = {
            skipTopicsObservation: _.H(hk),
            includeBuyerTopics: _.H(ik)
        };
        e = void 0 === e ? {} : e;
        var f = jk(d),
            g = f.Zd,
            h = f.Yd;
        b = dk(b);
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e.skipTopicsObservation,
            includeBuyerTopics: e.includeBuyerTopics,
            sendPingToRCS: !1
        }).then(function(k) {
            var l = h;
            if (k instanceof Uint8Array) l || (l = !(g instanceof Uint8Array && wa(k, g)));
            else if (cf(kk)(k)) l || (l = k !== g);
            else return c.rb(989, Error(JSON.stringify(k))), 7;
            if (l && d) try {
                var m = new lk;
                var n = _.mk(m, 2, _.wg());
                k instanceof Uint8Array ? nk(n, 1, ok, ic(k, !1, !1)) : nk(n, 3, ok, null == k ? k : zc(k));
                d.setItem("goog:cached:topics", pk(n))
            } catch (p) {}
            return k
        }), b.getTopicsPromise = a);
        return g && !h ? _.t.Promise.resolve(g) : b.getTopicsPromise
    };
    jk = function(a) {
        if (!a) return {
            Zd: null,
            Yd: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                Zd: null,
                Yd: !0
            };
            var c = rk(b),
                d = sk(c, ok);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    e = tk(uk(c, ij(c, ok, 1)));
                    break;
                case 3:
                    e = _.vk(c, ij(c, ok, 3), 0);
                    break;
                default:
                    _.Ua(d)
            }
            var f = _.Ze(c, 2) + 6048E5 < _.wg();
            return {
                Zd: e,
                Yd: f
            }
        } catch (g) {
            return {
                Zd: null,
                Yd: !0
            }
        }
    };
    dk = function(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    yk = function(a) {
        if (Na()) {
            var b = a.document.documentElement.lang;
            wk(a) ? xk(_.qh(a), !0, "", b) : (new MutationObserver(function(c, d) {
                wk(a) && (xk(_.qh(a), !1, b, a.document.documentElement.lang), d.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    };
    wk = function(a) {
        var b, c;
        a = null == (b = a.document) ? void 0 : null == (c = b.documentElement) ? void 0 : c.classList;
        return !!((null == a ? 0 : a.contains("translated-rtl")) || (null == a ? 0 : a.contains("translated-ltr")))
    };
    xk = function(a, b, c, d) {
        dj({
            ptt: "17",
            pvsid: "" + a,
            ibatl: String(b),
            pl: c,
            nl: d
        }, "translate-event")
    };
    Ak = function(a) {
        var b = "";
        zk(function(c) {
            if (c === c.top) return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    Ck = function(a) {
        var b = Bk(a, 500, 300);
        var c = a.navigator;
        var d = c.userAgent;
        var e = c.platform;
        c = c.product;
        !/Win|Mac|Linux|iPad|iPod|iPhone/.test(e) && /^Opera/.test(d) ? d = !1 : /Win/.test(e) && /Trident/.test(d) && 11 <= a.document.documentMode ? d = !0 : (a = (/WebKit\/(\d+)/.exec(d) || [0, 0])[1], e = (/rv:(\d+\.\d+)/.exec(d) || [0, 0])[1], d = !a && "Gecko" === c && 27 <= e && !/ rv: 1\.8([^.] |\.0) /.test(d) || 536 <= a ? !0 : !1);
        return d && !b
    };
    Fk = function(a, b) {
        var c = Dk.get(a);
        c || (b = c = b(), Ek.set(b, a), Dk.set(a, b));
        return c
    };
    P = function(a) {
        return function() {
            return new Gk(a, [].concat(_.Ie(_.gb.apply(0, arguments))))
        }
    };
    Hk = function(a) {
        return "[" + a.map(function(b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? Hk(b) : String(b)
        }).join(", ") + "]"
    };
    Ik = function(a, b) {
        b = Hk(b);
        b = b.substring(1, b.length - 1);
        return new Gk(96, [a, b])
    };
    Jk = function(a) {
        return (_.E = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable gameManualInterstitialSlotReady gameManualInterstitialSlotClosed".split(" "), _.y(_.E, "includes")).call(_.E, a) ? a : null
    };
    Lk = function(a, b, c) {
        return Fk(c, function() {
            return new Kk(a, b, c)
        })
    };
    Nk = function(a, b, c) {
        return Fk(c, function() {
            return new Mk(a, b, c)
        })
    };
    Ok = function(a, b, c, d) {
        "string" === typeof a ? b.setClickUrl(a) : Q(d, Ik("Slot.setClickUrl", [a]), c)
    };
    Vk = function(a, b, c, d, e) {
        if ("string" !== typeof a || Pk(a)) Q(e, Ik("Slot.setTargeting", [a, b]), c);
        else {
            var f = [];
            Array.isArray(b) ? f = b : _.ua(b) ? f = _.y(Array, "from").call(Array, b) : b && (f = [b]);
            f = f.map(String);
            (b = (_.E = Qk(d), _.y(_.E, "find")).call(_.E, function(g) {
                return _.rj(g, 1) === a
            })) ? Rk(b, f): (b = Rk(Sk(new Tk, a), f), oj(d, 9, Tk, b));
            e.info(Uk(a, f.join(), d.getAdUnitPath()), c)
        }
    };
    Wk = function(a, b, c, d) {
        if (null != a && "object" === typeof a)
            for (var e = _.w(_.y(Object, "keys").call(Object, a)), f = e.next(); !f.done; f = e.next()) f = f.value, Vk(f, a[f], b, c, d);
        else d.error(Ik("Slot.updateTargetingFromMap", [a]), b)
    };
    Yk = function(a, b, c, d) {
        return "string" !== typeof a ? (Q(d, Ik("Slot.getTargeting", [a]), b), []) : (b = (_.E = Qk(c), _.y(_.E, "find")).call(_.E, function(e) {
            return _.rj(e, 1) === a
        })) ? _.Xk(b, 2).slice() : []
    };
    Zk = function(a) {
        return Qk(a).map(function(b) {
            return _.M(b, 1)
        })
    };
    dl = function(a, b, c, d) {
        if (void 0 === a) _.Uh(c, 9), d.info($k(b.getAdUnitPath()), b);
        else {
            var e = Qk(c),
                f = _.y(e, "findIndex").call(e, function(g) {
                    return _.rj(g, 1) === a
                });
            0 > f ? Q(d, al(a, b.getAdUnitPath()), b) : (e.splice(f, 1), _.bl(c, 9, e), d.info(cl(a, b.getAdUnitPath()), b))
        }
    };
    fl = function(a, b, c) {
        return Fk(c, function() {
            return new el(a, b, c, c.j)
        })
    };
    gl = function(a) {
        return _.y(Object, "assign").call(Object, {}, a, _.y(Object, "fromEntries").call(Object, _.y(Object, "entries").call(Object, a).map(function(b) {
            b = _.w(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    };
    kl = function() {
        var a = {},
            b = gl(hl);
        a.OutOfPageFormat = b;
        b = gl(il);
        a.TrafficSource = b;
        b = gl(jl);
        a.Taxonomy = b;
        return a
    };
    ol = function(a, b, c, d, e) {
        if ("string" === typeof a && a.length && void 0 !== ll()[a] && "string" === typeof b) {
            var f = (_.E = c.La(), _.y(_.E, "find")).call(_.E, function(g) {
                return _.rj(g, 1) === a
            });
            f ? Rk(f, [b]) : (f = ml(Sk(new Tk, a), b), oj(c, 14, Tk, f));
            e.info(nl(a, String(b), d))
        } else Q(e, Ik("PubAdsService.set", [a, b]))
    };
    pl = function(a, b, c) {
        return "string" !== typeof a ? (Q(c, Ik("PubAdsService.get", [a])), null) : (b = (b = (_.E = b.La(), _.y(_.E, "find")).call(_.E, function(d) {
            return _.rj(d, 1) === a
        })) && _.Xk(b, 2)) ? b[0] : null
    };
    ql = function(a) {
        return a.La().map(function(b) {
            return _.M(b, 1)
        })
    };
    Ll = function() {
        for (var a = _.Df(rl) || "0-0-0", b = a.split("-").map(function(e) {
                return Number(e)
            }), c = ["1", "0", "40"].map(function(e) {
                return Number(e)
            }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-40"
    };
    Sl = function() {
        if (Pl) return Pl;
        for (var a = Ef(Ql), b = [], c = 0; c < a.length; c += 2) Rl(a[c], a[c + 1], b);
        return Pl = b.join("&")
    };
    Xl = function(a, b) {
        if (!b || !_.na(b)) return null;
        var c = !1,
            d = new Tl;
        _.Ul(b, function(e, f) {
            var g = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? nj(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? nj(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? nj(d, 3, b.sandbox) : c = g = !0;
                    break;
                default:
                    g = !0
            }
            g && a.error(Vl("setSafeFrameConfig", Wl(b), f, Wl(e)))
        });
        return c ? null : d
    };
    Zl = function(a) {
        var b = new Tl;
        a = _.w(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value) null != Yl(c, 1) && nj(b, 1, _.G(c, 1)), null != Yl(c, 2) && nj(b, 2, _.G(c, 2)), null != Yl(c, 3) && nj(b, 3, _.G(c, 3));
        return b
    };
    $l = function(a, b) {
        var c = {};
        b = (c[0] = Af(b.pvsid), c);
        return _.qf(rf).v(a, b)
    };
    bm = function(a, b) {
        var c;
        return null == (c = _.am(a, "__gads", b)) ? void 0 : _.y(c.split(":"), "find").call(c.split(":"), function(d) {
            return 0 === d.indexOf("ID=")
        })
    };
    cm = function(a, b, c, d) {
        (c = bm(c, d)) ? (d = {}, b = (d[0] = Af(b.pvsid), d[1] = Af(c), d), _.qf(rf).v(a, b)) : $l(a, b)
    };
    gm = function(a) {
        var b = a.key,
            c = a.value,
            d = a.Aa,
            e = a.serviceName,
            f = a.Sk,
            g = a.Za,
            h = a.R;
        a = a.context;
        var k = null;
        "string" === typeof c ? k = [c] : Array.isArray(c) ? k = c : _.ua(c) && (k = _.y(Array, "from").call(Array, c));
        var l = "string" === typeof b && !Pk(b);
        k = k && za(k);
        var m, n = null != (m = null == k ? void 0 : k.every(function(p) {
            return "string" === typeof p
        })) ? m : !1;
        if (l && n) {
            c = k;
            m = (_.E = Ah(d, Tk, 2), _.y(_.E, "find")).call(_.E, function(p) {
                return _.rj(p, 1) === b
            });
            if ("gpt-beta" === b) {
                if (f) {
                    Q(h, dm(c.join()));
                    return
                }
                if (m) {
                    Q(h, em(c.join()));
                    return
                }
                c = fm(c, g, a)
            }
            m ? Rk(m, c) : (f = Rk(Sk(new Tk, b), c), oj(d, 2, Tk, f));
            h.info(Uk(b, c.join(), e))
        } else Q(h, Ik("PubAdsService.setTargeting", [b, c]))
    };
    hm = function(a, b, c) {
        return "string" !== typeof a ? (Q(c, Ik("PubAdsService.getTargeting", [a])), []) : (b = (_.E = Ah(b, Tk, 2), _.y(_.E, "find")).call(_.E, function(d) {
            return _.rj(d, 1) === a
        })) ? _.Xk(b, 2).slice() : []
    };
    im = function(a) {
        return Ah(a, Tk, 2).map(function(b) {
            return _.M(b, 1)
        })
    };
    mm = function(a, b, c, d) {
        if (void 0 === a) _.Uh(b, 2), d.info(jm(c));
        else if ("gpt-beta" === a) Q(d, km(a));
        else {
            var e = Ah(b, Tk, 2),
                f = _.y(e, "findIndex").call(e, function(g) {
                    return _.rj(g, 1) === a
                });
            0 > f ? Q(d, al(a, c)) : (e.splice(f, 1), _.bl(b, 2, e), d.info(lm(a, c)))
        }
    };
    fm = function(a, b, c) {
        var d = [];
        a = _.w(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            b.j = e;
            var f = $l(9, c);
            1 === f.length && (d.push(e), d.push(e + "-" + f[0]))
        }
        return d
    };
    om = function() {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = nm.exec(null != (b = null == (a = _.Jh(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    };
    pm = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    qm = function(a, b) {
        var c = b.j;
        return a.map(function(d) {
            return _.y(c, "find").call(c, function(e) {
                return e.j === d
            })
        }).filter(ef())
    };
    sm = function() {
        Object.defineProperty(window, "google_DisableInitialLoad", {
            get: function() {
                rm();
                return !0
            },
            set: function() {
                rm()
            },
            configurable: !0
        })
    };
    xm = function(a, b, c, d, e, f) {
        var g = tm(f, a, b, d, e, void 0, !0);
        f = g.slotId;
        g = g.Aa;
        if (!f || !g) return Q(b, Ik("PubAdsService.definePassback", [d, e])), null;
        nj(g, 17, !0);
        c.slotAdded(f, g);
        return {
            Xh: fl(a, b, new um(a, f, c)),
            Aa: g
        }
    };
    zm = function(a, b, c, d, e) {
        return Fk(c, function() {
            return new ym(a, b, c, d, e)
        })
    };
    Am = function(a, b, c, d, e) {
        "string" !== typeof a || "string" !== typeof b || void 0 === ll()[a] ? Q(e, Ik("Slot.set", [a, b]), c) : (c = (_.E = d.La(), _.y(_.E, "find")).call(_.E, function(f) {
            return _.rj(f, 1) === a
        })) ? Rk(c, [b]) : (b = ml(Sk(new Tk, a), b), oj(d, 3, Tk, b))
    };
    Bm = function(a, b, c, d) {
        return "string" !== typeof a ? (Q(d, Ik("Slot.get", [a]), b), null) : (b = (b = (_.E = c.La(), _.y(_.E, "find")).call(_.E, function(e) {
            return _.rj(e, 1) === a
        })) && _.Xk(b, 2)) ? b[0] : null
    };
    Cm = function(a) {
        return a.La().map(function(b) {
            return _.M(b, 1)
        })
    };
    Em = function(a) {
        return Array.isArray(a) && 2 === a.length ? a.every(Dm) : "fluid" === a
    };
    Fm = function(a) {
        return Array.isArray(a) && 2 === a.length && Dm(a[0]) && Dm(a[1])
    };
    Hm = function(a) {
        if (Array.isArray(a)) {
            var b = new yh;
            b = _.Uh(b, 1, _.Ec(a[0]));
            a = _.Uh(b, 2, _.Ec(a[1]))
        } else a = Gm();
        return a
    };
    Jm = function(a) {
        var b = [];
        if (Im(a)) b.push(Hm(a));
        else if (Array.isArray(a)) {
            a = _.w(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, Im(c) ? b.push(Hm(c)) : wa(c, ["fluid"]) && b.push(Gm())
        }
        return b
    };
    Km = function(a) {
        var b = void 0 === b ? window : b;
        if (!a) return [];
        if (!a.length) {
            var c, d;
            null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a))
        }
        return Jm(a)
    };
    Im = function(a) {
        return _.H(Lm) ? Array.isArray(a) && 2 === a.length ? a.every(Mm) : "fluid" === a : Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    };
    Om = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) throw new Nm("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!Fm(b)) throw new Nm("Size must be an array of two non-negative integers");
        var c = new yh;
        c = _.Uh(c, 1, _.Ec(b[0]));
        b = _.Uh(c, 2, _.Ec(b[1]));
        if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
        else if (a = Jm(a[1]), 0 === a.length) throw new Nm("At least one slot size must be present");
        c = new Ch;
        b = _.Yg(c, 1, b);
        return _.bl(b, 2, a)
    };
    Pm = function() {
        var a;
        return null != (a = _.q.googletag) ? a : _.q.googletag = {
            cmd: []
        }
    };
    Qm = function(a, b) {
        if (!b) return [];
        var c = [];
        b = _.w((_.E = Kd(b, 26), _.y(_.E, "values")).call(_.E));
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            try {
                c.push(JSON.parse(d))
            } catch (e) {
                kh(a, 1023, e)
            }
        }
        return c
    };
    Sm = function(a, b, c) {
        return Fk(c, function() {
            return new Rm(a, b, c)
        })
    };
    $m = function(a, b, c, d, e, f, g) {
        var h = new xj,
            k = new Tm(a, g);
        N(h, k);
        e = new Um(a, d, e);
        N(h, e);
        e = new Vm(a, b, d, f, k.ib);
        N(h, e);
        g = new Wm(a, b, c, d, g, f, k.ib);
        N(h, g);
        if (_.H(Xm)) {
            b = new Ym(a, b, c, d, f, k.ib);
            N(h, b);
            var l = b.l
        }
        a = new Zm(a, k.ib, g.l, e.l, l);
        N(h, a);
        Gj(h);
        return {
            ib: a.output,
            Ea: h
        }
    };
    bn = function(a, b) {
        return Fk(b, function() {
            return new an(a, b)
        })
    };
    dn = function(a, b, c) {
        var d = gh(a, 77, function() {
            var e = b.cmd;
            if (!e || Array.isArray(e)) {
                var f = new cn(c);
                b.cmd = bn(a, f);
                null != e && e.length && f.push.apply(f, e)
            }
        });
        b.fifWin && "complete" !== document.readyState ? _.ib(window, "load", function() {
            return window.setTimeout(d, 0)
        }) : d()
    };
    gn = function(a) {
        var b = window;
        "complete" === _.q.document.readyState ? mh(a, 94, function() {
            Pm()._pubconsole_disable_ || null !== en(b) && fn(a, b)
        }) : _.ib(_.q, "load", gh(a, 94, function() {
            Pm()._pubconsole_disable_ || null !== en(b) && fn(a, b)
        }))
    };
    fn = function(a, b) {
        b = void 0 === b ? _.q : b;
        if (!hn) {
            var c = new jn("gpt_pubconsole_loaded");
            Ri(c, a);
            L(c, "param", String(en(b)));
            L(c, "api", String(kn));
            ln(c);
            _.mn(b.document, nn);
            hn = !0
        }
    };
    en = function(a) {
        var b = Lh(a),
            c;
        return null != (c = (_.E = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.y(_.E, "find")).call(_.E, function(d) {
            return null !== on(b, d)
        })) ? c : null
    };
    pn = function() {
        Pm()._pubconsole_disable_ = !0
    };
    sn = function() {
        qn && (Pm().console.openConsole(rn), rn = void 0, qn = !1)
    };
    tn = function(a) {
        switch (Number(a)) {
            case 0:
                return "";
            case 1:
                return "Out-of-page creative";
            case 2:
            case 3:
                return "Anchor";
            case 5:
                return "Interstitial";
            case 6:
                return "Shoppit";
            case 7:
                return "Game Manual Interstitial";
            case 4:
                return "Rewarded";
            case 8:
            case 9:
                return "Side Rail";
            default:
                return ""
        }
    };
    un = function(a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(_.rj(a, 1)), c.push(Gh(a)), c.push(_.rj(a, 2)));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode, ++d) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? _.zf(c.join(":")).toString() : "0"
    };
    vn = function(a) {
        if (!_.bk(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    xn = function(a) {
        a = (_.bk(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!wn(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    };
    zn = function(a, b, c) {
        c && (b = c.adExpansion);
        void 0 === b || null === b ? _.Uh(a, 34) : (b = b.enabled, "boolean" === typeof b ? (b = yn(b), _.Yg(a, 34, b)) : void 0 !== b && null !== b || _.Uh(a, 34))
    };
    Dn = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        var p = {
                qa: new An,
                Ha: new An,
                bc: new An,
                ud: new An
            },
            r = new xj;
        b = new Bn(a, b, c.width, k, l, n);
        N(r, b);
        a = new Cn(a, d, e, f, h, k, g, b.o, b.l, m, n, p.qa, p.Ha, p.bc, p.ud);
        N(r, a);
        Gj(r);
        return {
            Ea: r,
            xg: p
        }
    };
    Hn = function(a, b, c, d, e, f, g, h, k, l, m) {
        var n = window,
            p = {
                Rb: new En
            },
            r = new xj,
            v = new Fn(a, n, e);
        N(r, v);
        a = new Gn(a, n.document, c, d, b, g, e, f, h, k, v.output, l, m, p.Rb);
        N(r, a);
        Gj(r);
        return {
            Ea: r,
            xg: p
        }
    };
    In = function(a, b, c, d) {
        var e = _.Me("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    Jn = function(a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    };
    Mn = function(a, b, c) {
        var d = new _.t.Map;
        a = _.w(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            var f = b[e.getDomId()];
            f = Kn(f, Ln, 28) ? _.xh(f, Ln, 28) : _.xh(c, Ln, 34);
            var g = void 0;
            d.set(e, (null == (g = f) ? 0 : null != Yl(g, 1)) ? _.G(f, 1) ? 2 : 1 : 0)
        }
        return d
    };
    Pn = function(a, b, c) {
        var d, e, f = [],
            g = [];
        a = _.w(a);
        for (d = a.next(); !d.done; d = a.next())
            if (d = d.value, 1 === b.get(d)) f.push(null), g.push(null);
            else {
                var h = c,
                    k = oi(d);
                d = Nn((null == k ? void 0 : k.parentElement) && qi(k.parentElement, h) || null);
                if (!d || 1 === d[0] && 1 === d[3]) {
                    var l = e = d = void 0,
                        m = null != (l = null == k ? void 0 : k.parentElement) ? l : null;
                    l = null != (e = Sh(m)) ? e : new _.Rh(0, 0);
                    On(l, m, h, 100);
                    e = null != (d = Sh(k)) ? d : new _.Rh(0, 0);
                    On(e, k, h, 1); - 1 === l.height && (e.height = -1);
                    d = l;
                    d = d.width + "x" + d.height;
                    e = e.width + "x" + e.height
                } else e = d = "-1x-1";
                f.push(d);
                g.push(e)
            }
        return {
            tk: f,
            Vk: g
        }
    };
    On = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b)) {
                var f;
                if (!(f = !Qn(b, c, d))) {
                    a: {
                        do {
                            var g = qi(b, c);
                            if (g && "fixed" == g.position) {
                                var h = !1;
                                break a
                            }
                        } while (b = b.parentElement);h = !0
                    }
                    f = !h
                }
                e = f
            }
            e && (a.height = -1)
        } catch (k) {
            a.width = -1, a.height = -1
        }
    };
    Sn = function(a, b, c) {
        var d = 0 !== (0, _.Rn)(),
            e = Eh(!0, c, d).width,
            f = [],
            g = [],
            h = [];
        if (null !== c && c != c.top) {
            var k = Eh(!1, c).width;
            (-12245933 === e || -12245933 === k || k < e) && h.push(8)
        } - 12245933 !== e && (1.5 * e < c.document.documentElement.scrollWidth ? h.push(10) : d && 1.5 * c.outerWidth < e && h.push(10));
        a = _.w(a);
        for (d = a.next(); !d.done; d = a.next())
            if (k = d.value, 1 === b.get(k)) f.push(null), g.push(null);
            else {
                d = new Mi;
                var l = oi(k);
                k = 0;
                var m = !1,
                    n = !1,
                    p = !1;
                if (l) {
                    for (var r = 0, v = l; v && 100 > r; r++, v = v.parentElement) {
                        var u = qi(v, c);
                        if (u) {
                            var x = u,
                                C = x.display,
                                D = x.overflowX;
                            if ("visible" !== x.overflowY && (d.set(2), (x = Sh(v)) && (k = k ? Math.min(k, x.width) : x.width), d.get(9))) break;
                            Jn(u) && d.set(9);
                            "none" === C && d.set(7);
                            "IFRAME" === v.nodeName && (u = parseInt(u.width, 10), u < e && (d.set(8), k = k ? Math.min(u, k) : u));
                            n || (n = "scroll" === D || "auto" === D);
                            m || (m = "flex" === C);
                            p || (p = "listbox" === v.role)
                        } else d.set(3)
                    }
                    if (!p) {
                        if (m = n && m) l = l.getBoundingClientRect().left, m = l > e || 0 > l;
                        p = m
                    }
                    p && d.set(11)
                } else d.set(1);
                l = _.w(h);
                for (m = l.next(); !m.done; m = l.next()) d.set(m.value);
                f.push(Oi(d));
                g.push(k)
            }
        return {
            Ij: f,
            sk: g
        }
    };
    Tn = function(a) {
        var b = a.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
        return 3 !== (null == b ? void 0 : b.length) ? a : "/" + b[1] + b[2]
    };
    Vn = function(a, b) {
        var c, d;
        return null != (d = null != (c = null == b ? void 0 : b.get(_.H(Un) ? Tn(a) : a)) ? c : null == b ? void 0 : b.get(_.zf(a))) ? d : 0
    };
    $n = function(a, b, c, d, e) {
        if (null != b && b.size) {
            var f, g;
            e = null != (g = null != (f = null == e ? void 0 : e.adUnits) ? f : null == a ? void 0 : a.adUnits) ? g : [];
            a = _.w(e);
            g = a.next();
            for (f = {}; !g.done; f = {
                    Qe: f.Qe
                }, g = a.next()) {
                e = g.value;
                g = e.code;
                e = e.bids;
                var h = void 0;
                if (g && null != (h = e) && h.length && (g = Vn(g, b), f.Qe = g / 1E6, !(0 >= g))) {
                    h = void 0;
                    e = _.w(null != (h = e) ? h : []);
                    var k = e.next();
                    for (h = {}; !k.done; h = {
                            zb: h.zb,
                            Gf: h.Gf
                        }, k = e.next()) k = k.value, h.Gf = "function" === typeof k.getFloor ? k.getFloor : void 0, h.zb = Wn(Xn(Yn(new Zn, 4), g), c), k.getFloor = function(l, m) {
                        return function(n) {
                            4 === _.vk(l.zb, 1, 0) && Yn(l.zb, 1);
                            var p, r = null == (p = l.Gf) ? void 0 : p.apply(this, [n]);
                            n = c ? r || {} : {
                                currency: "USD",
                                floor: m.Qe
                            };
                            return null != r && r.floor ? (null == r ? 0 : r.currency) && "USD" !== r.currency ? (1 === _.vk(l.zb, 1, 0) && (n = Xn(Yn(l.zb, 6), 1E6 * r.floor), mj(n, 3, r.currency)), r) : (r.floor || 0) > m.Qe ? (1 === _.vk(l.zb, 1, 0) && Xn(Yn(l.zb, 5), 1E6 * r.floor), r) : n : n
                        }
                    }(h, f), d.set(k.getFloor, h.zb)
                }
            }
        }
    };
    ao = function(a, b) {
        var c = a.que,
            d = function() {
                var e;
                null == a || null == (e = a.requestBids) || e.before.call(b, function(f, g) {
                    return Pm().pbjs_hooks.push({
                        context: b,
                        nextFunction: f,
                        requestBidsConfig: g
                    })
                }, 0)
            };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d): null == c || c.unshift(d)
    };
    co = function(a, b) {
        return Fk(b, function() {
            return new bo(a, b)
        })
    };
    mo = function(a, b, c, d, e) {
        var f = e.getBidResponsesForAdUnitCode;
        if (f) {
            var g, h, k, l = null != (k = null == (g = f(b.getDomId())) ? void 0 : g.bids) ? k : null == (h = f(b.getAdUnitPath())) ? void 0 : h.bids;
            if (null != l && l.length && (g = l.filter(function(p) {
                    var r = p.adId;
                    return p.auctionId !== c && d.some(function(v) {
                        return (_.E = _.Xk(v, 2), _.y(_.E, "includes")).call(_.E, r)
                    })
                }), g.length)) {
                var m, n;
                f = null == (m = e.adUnits) ? void 0 : null == (n = _.y(m, "find").call(m, function(p) {
                    p = p.code;
                    return p === b.getAdUnitPath() || p === b.getDomId()
                })) ? void 0 : n.mediaTypes;
                m = _.w(g);
                for (n = m.next(); !n.done; n = m.next()) n = n.value, g = eo(n, d, f), g = fo(a, go(nj(ho(io(new jo, n.bidder), 1), 6, !0), g)), ko(n.bidder, e, g), "number" === typeof n.timeToRespond && lo(g, n.timeToRespond)
            }
        }
    };
    ko = function(a, b, c) {
        for (var d = []; a && !_.y(d, "includes").call(d, a);) {
            d.unshift(a);
            var e = void 0,
                f = void 0;
            a = null == (e = b) ? void 0 : null == (f = e.aliasRegistry) ? void 0 : f[a]
        }
        _.Md(c, 10, d, _.Lc)
    };
    po = function(a, b, c) {
        null != no(a, 3) || (c === b.getAdUnitPath() ? oo(a, 3, 1) : c === b.getDomId() && oo(a, 3, 2))
    };
    ro = function(a, b, c, d, e, f, g) {
        f = f.get(null != g ? g : function() {
            return null
        });
        1 !== (null == f ? void 0 : _.vk(f, 1, 0)) && _.Yg(b, 5, f);
        Kn(a, Zn, 5) || (f ? 1 === _.vk(f, 1, 0) ? qo(a, f) : qo(a, Xn(Yn(Wn(new Zn, e), 1), Vn(c, d))) : qo(a, Yn(Wn(new Zn, e), Vn(c, d) ? 2 : 3)))
    };
    eo = function(a, b, c) {
        var d = a.cpm,
            e = a.originalCpm,
            f = a.currency,
            g = a.originalCurrency,
            h = a.dealId,
            k = a.adserverTargeting,
            l = a.bidder,
            m = a.adUnitCode,
            n = a.adId,
            p = a.mediaType,
            r = a.height;
        a = a.width;
        var v = new so;
        "number" === typeof d && (_.mk(v, 2, Math.round(1E6 * d)), g && g !== f || (d = Math.round(1E6 * Number(e)), isNaN(d) || d === _.Ze(v, 2) || _.mk(v, 8, d)));
        "string" === typeof f && mj(v, 3, f);
        (_.E = ["string", "number"], _.y(_.E, "includes")).call(_.E, typeof h) && to(v, uo(new vo, String(h)));
        if ("object" === typeof k)
            for (b = _.y(Object, "fromEntries").call(Object, b.map(function(C) {
                    return [_.rj(C, 1), _.Xk(C, 2)]
                })), f = _.w(["", "_" + l]), h = f.next(); !h.done; h = f.next()) {
                h = h.value;
                d = [];
                e = _.w(_.y(Object, "entries").call(Object, k));
                for (g = e.next(); !g.done; g = e.next()) {
                    g = _.w(g.value);
                    var u = g.next().value;
                    g = g.next().value;
                    u = (u + h).slice(0, 20);
                    var x = void 0;
                    if (null != (x = b[u]) && x.length)
                        if (b[u][0] === String(g)) d.push(u);
                        else {
                            d = [];
                            break
                        }
                }
                wo(v, _.Xk(v, 4).concat(d))
            }
        switch (p || "banner") {
            case "banner":
                oo(v, 5, 1);
                break;
            case "native":
                oo(v, 5, 2);
                Li("hbyg_nat", function(C) {
                    L(C, "pub_url", document.URL);
                    L(C, "b", l);
                    L(C, "auc", null != m ? m : "");
                    L(C, "hmt", Number(!!c));
                    var D;
                    L(C, "hat", Number(!!(null == c ? 0 : null == (D = c.native) ? 0 : D.adTemplate)))
                }, _.Cf(xo));
                break;
            case "video":
                oo(v, 5, 3)
        }
        _.y(Number, "isFinite").call(Number, r) && _.y(Number, "isFinite").call(Number, a) && yo(v, zo(Ao(new Bo, Math.round(a)), Math.round(r)));
        "string" === typeof n && mj(v, 1, n);
        return v
    };
    Co = function(a, b) {
        var c = new _.t.Map,
            d = function(k) {
                var l = c.get(k);
                l || (l = {}, c.set(k, l));
                return l
            },
            e = [];
        a = _.w(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args,
                h = f.eventType;
            f = f.elapsedTime;
            "bidTimeout" === h && e.push.apply(e, _.Ie(g));
            switch (h) {
                case "bidRequested":
                    if (g.auctionId !== b) continue;
                    if (!Array.isArray(g.bids)) continue;
                    g = _.w(g.bids);
                    for (h = g.next(); !h.done; h = g.next())
                        if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    g.auctionId === b && g.bidId && (d(g.bidId).Lk = f)
            }
        }
        d = new _.t.Map;
        a = _.w(_.y(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next()) g = _.w(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.Lk, g && h && d.set(f, {
            latency: h - g,
            Eh: !1
        });
        e = _.w(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.Eh = !0;
        return d
    };
    Do = function(a, b) {
        for (var c = new Mi, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return Oi(c)
    };
    Go = function(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = void 0 === c.hd ? "" : c.hd;
        c = void 0 === c.za ? "," : c.za;
        if (_.H(Eo)) return Fo(a, b);
        var e = !1;
        a = a.map(function(f) {
            f = b(f);
            e || (e = !!f);
            return String(f || d)
        });
        return e ? a.join(c) : null
    };
    Fo = function(a, b) {
        return a.map(function(c) {
            return b(c)
        })
    };
    Io = function(a, b, c, d, e, f, g) {
        if (f) {
            var h = {
                    vg: new An
                },
                k = new xj;
            a = new Ho(a, b, c, d, e, f, g, h);
            N(k, a);
            Gj(k);
            return {
                Yi: h,
                Ea: k
            }
        }
    };
    Ko = function(a, b, c, d, e) {
        if (b && !(.01 < Math.random())) {
            var f = new xj;
            N(f, new Jo(a, c, b.Cb, d, e));
            Gj(f)
        }
    };
    Mo = function(a, b) {
        var c;
        return !(null != (c = Lo(b, 22)) ? !c : !_.G(a, 15))
    };
    Oo = function(a, b, c, d) {
        for (var e = _.w(_.y(Object, "entries").call(Object, No)), f = e.next(); !f.done; f = e.next()) {
            var g = _.w(f.value);
            f = g.next().value;
            g = g.next().value;
            b & f && Q(a, g(c, d))
        }
    };
    To = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = (void 0 === b ? 0 : b) ? 604800 : -1;
        if (!(0 < b) || c && _.G(c, 5)) {
            c = c ? lf(c) : null;
            var d = !1,
                e = _.H(_.Po);
            d = void 0 === d ? !1 : d;
            e = void 0 === e ? !1 : e;
            var f = 0;
            try {
                f |= a !== a.top ? 512 : 0;
                var g;
                if (!(g = !a.navigator)) {
                    var h = a.navigator;
                    g = "brave" in h && "isBrave" in h.brave || !1
                }
                f |= g || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
                f |= eg(a, 2500, e);
                e || (f |= fg(a));
                0 < b && (d ? c && Qo(c) || (f |= 4194304) : !_.Ro(_.So(c, b)) && (f |= 134217728))
            } catch (k) {
                f |= 32
            }
            a = f
        } else a = 4194304;
        return a
    };
    Uo = function(a) {
        switch (a) {
            case 4:
                return 11;
            case 2:
                return 2;
            case 3:
                return 1;
            case 5:
                return 8;
            case 6:
                return 42;
            case 7:
                return 10;
            case 8:
                return 3;
            case 9:
                return 4
        }
    };
    Xo = function(a, b, c) {
        a = Uo(a);
        if (!a) return null;
        if (10 === a) return 0;
        var d = 0;
        if (!(_.E = [11, 10], _.y(_.E, "includes")).call(_.E, a)) {
            d |= b !== b.top ? 512 : 0;
            var e = _.Qg(b);
            e = 26 !== a && 27 !== a && 40 !== a && 41 !== a && 10 !== a && e.adCount ? 1 == a || 2 == a ? !(!e.adCount[1] && !e.adCount[2]) : (e = e.adCount[a]) ? 1 <= e : !1 : !1;
            e && (d |= 64);
            if (d) return d
        }
        if (2 === a || 1 === a) {
            var f = {
                ka: b,
                Ce: _.Vo,
                Og: c ? a : void 0,
                ol: _.H(_.Wo)
            };
            0 === (0, _.Rn)() && (f.Ce = 3E3, f.Wf = 650);
            d |= _.sg(f)
        } else if (8 === a) d |= To(b);
        else if (3 === a || 4 === a) {
            e = a;
            e = void 0 === e ? null : e;
            c = b !== b.top ? 512 : 0;
            ng(null == (f = b.navigator) ? void 0 : f.userAgent) && (c |= 1048576);
            f = b.innerWidth;
            1200 > f && (c |= 65536);
            var g = b.innerHeight;
            650 > g && (c |= 2097152);
            e && 0 === c && (e = 3 === e ? "left" : "right", (f = _.Sg({
                ka: b,
                Dh: !0,
                oi: 1,
                position: e,
                ha: f,
                na: g,
                jc: new _.t.Set,
                minWidth: 120,
                minHeight: 500
            })) ? _.Qg(b).sideRailPlasParam.set(e, f.width + "x" + f.height + "_" + String(e).charAt(0)) : c |= 16);
            d |= c
        } else 11 !== a && 42 !== a && (d |= 32);
        d || (b = _.Qg(b), b.adCount = b.adCount || {}, b.adCount[a] = b.adCount[a] + 1 || 1);
        return d
    };
    $o = function(a, b, c, d) {
        var e = d.gh,
            f = d.adUnitPath;
        d = void 0 === d.pb ? !1 : d.pb;
        return "string" === typeof f && f.length && (null == e || "string" === typeof e || "number" === typeof e && Yo(e)) ? Zo(a, b, f, c, {
            Jb: "string" === typeof e ? e : void 0,
            format: "number" === typeof e ? e : 1,
            pb: d
        }) : (b.error(Ik("googletag.defineOutOfPageSlot", [f, e])), null)
    };
    Yo = function(a) {
        switch (a) {
            case 6:
                return !0;
            case 7:
                return !0;
            default:
                return !!wn(hl, function(b) {
                    return b === a
                })
        }
    };
    Zo = function(a, b, c, d, e) {
        var f = e.format;
        b = d.add(a, b, c, [1, 1], {
            Jb: e.Jb,
            format: f,
            pb: e.pb
        });
        a = b.slotId;
        b = b.Aa;
        a && b && (oo(b, 15, f), _.ap(a, function() {
            var g = window,
                h = Uo(f);
            if (h) {
                g = _.Qg(g);
                var k = g.adCount && g.adCount[h];
                k && (g.adCount[h] = k - 1)
            }
        }));
        return null != a ? a : null
    };
    cp = function(a, b, c, d, e, f, g, h) {
        var k = new xj;
        a = new bp(a, b, c, d, e, f, g, h);
        N(k, a);
        Gj(k);
        return k
    };
    dp = function(a, b) {
        var c;
        return !(null != (c = Lo(a, 11)) ? !c : !_.G(b, 10))
    };
    fp = function(a, b, c, d) {
        if (a = oi(a, b)) {
            var e;
            if (c = null != (e = Lo(c, 24)) ? e : _.G(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.q.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || ep(a, !1)
        }
    };
    gp = function(a, b, c, d) {
        Q(a, Vl("googletag.setConfig.commerce", Wl(b), c, Wl(d)))
    };
    hp = function(a) {
        return "string" === typeof a && 0 < a.length && 5E3 > a.length
    };
    ip = function(a) {
        if (!Array.isArray(a) || 0 === a.length) return !1;
        var b = a.length - 1;
        return a.every(function(c) {
            if ("string" !== typeof c || 0 === c.length) return !1;
            b += c.length;
            return 5E3 < b ? !1 : !0
        })
    };
    mp = function(a, b, c) {
        var d = window,
            e = new xj;
        d = new jp(d);
        _.S(e, d);
        c = new kp(a, d, c);
        N(e, c);
        a = new lp(a, d, b, c.Fc);
        N(e, a);
        Gj(e);
        return {
            Fc: c.Fc,
            qh: a.l,
            Ea: e
        }
    };
    np = function(a) {
        if (61440 >= a.length) return {
            url: a,
            Ng: 0
        };
        var b = a;
        61440 < b.length && (b = b.substring(0, 61432), b = b.replace(/%\w?$/, ""), b = b.replace(/&[^=]*=?$/, ""), b += "&trunc=1");
        return {
            url: b,
            Ng: a.length - b.length + 8
        }
    };
    op = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    pp = function(a, b) {
        b = void 0 === b ? window : b;
        return !!op(a, b)
    };
    sp = function(a, b) {
        var c = "";
        if (a) c = "_fy2012";
        else {
            if (a = b && 2012 < b) a = !_.qp("script[nonce]");
            if (a) {
                var d = new _.we(rp[0], xe);
                try {
                    var e = window,
                        f = _.Wa(d);
                    e.eval(f) === f && e.eval(f.toString());
                    a = !0
                } catch (g) {
                    a = !1
                }
            }
            a && (c = "_fy" + b)
        }
        return c
    };
    tp = function(a) {
        var b, c;
        return null != (c = null == (b = _.y(a, "find").call(a, function(d) {
            return "page_url" === _.rj(d, 1)
        })) ? void 0 : _.Xk(b, 2)[0]) ? c : null
    };
    up = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
            c = a.indexOf("&", b); - 1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    vp = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        zk(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    wp = function(a, b) {
        var c = b.T;
        return !!tp(b.X.La()) || a.some(function(d) {
            return null !== tp(c[d.getDomId()].La())
        })
    };
    yp = function() {
        var a = void 0 === a ? window : a;
        xp = _.wg(a)
    };
    zp = function(a, b) {
        var c = _.Me("DIV");
        c.id = a;
        c.textContent = b;
        _.Bi(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    };
    Ap = function(a, b) {
        if ("undefined" !== typeof IntersectionObserver) return new IntersectionObserver(b, {
            rootMargin: a + "%"
        })
    };
    Ep = function(a, b, c, d, e) {
        var f = void 0 === f ? _.t.globalThis.IntersectionObserver : f;
        if (!b) return {
            Of: e
        };
        var g = null != Bp(b, 1) ? null != Cp(b) && 0 !== (0, _.Rn)() ? Bp(b, 1) * Cp(b) : Bp(b, 1) : null;
        if (null == g) return {
            Of: e
        };
        b = new xj;
        a = new Dp(a, d, c, g, e, f);
        N(b, a);
        Gj(b);
        return {
            Of: a.output,
            kk: b
        }
    };
    Op = function(a, b, c, d, e) {
        var f = window,
            g = new xj,
            h = N(g, new Fp(a, b, Gp, function(m) {
                return Hp("i-adframe-load", m.detail.data)
            })),
            k = N(g, new Fp(a, b, Gp, function(m) {
                return Hp("i-dismiss", m.detail.data)
            }));
        h = 0 < _.Cf(Ip) ? N(g, new Jp(a, h.output, void 0)).output : h.output;
        h = N(g, new Kp(a, b, c, h));
        N(g, new Lp(a, f, d, e, h.output));
        if (f.top === f) var l = N(g, new Mp(a, f, h.output)).output;
        N(g, new Np(a, b, c, h.output, k.output, l));
        return g
    };
    Hp = function(a, b) {
        try {
            var c = JSON.parse(b);
            return "sth" === c.googMsgType && c.msg_type === a
        } catch (d) {}
        return !1
    };
    Qp = function(a, b, c) {
        return new Pp(c, a, Gp, function(d) {
            d = d.detail.data;
            try {
                var e = JSON.parse(d);
                if ("rewarded" === e.type && e.message === b) return e
            } catch (f) {}
            return null
        })
    };
    Tp = function(a, b, c) {
        if ("object" === typeof a && null !== a && _.y(Object, "keys").call(Object, a).some(function(d) {
                return (_.E = _.y(Object, "values").call(Object, Rp), _.y(_.E, "includes")).call(_.E, Number(d))
            })) return !0;
        Sp("taxonomies", a, b, c);
        return !1
    };
    Vp = function(a, b) {
        var c = Ah(b, Up, 1).filter(function(d) {
            return _.vk(d, 1, 0) !== a
        });
        _.bl(b, 1, c)
    };
    bq = function(a, b, c, d) {
        if (void 0 !== _.y(b, "values"))
            if (null === _.y(b, "values")) Vp(a, c);
            else if (Wp(_.y(b, "values"), d, b)) {
            var e = Xp(a, _.y(b, "values"), d, b);
            e.size && (b = (_.E = Ah(c, Up, 1), _.y(_.E, "find")).call(_.E, function(f) {
                return _.vk(f, 1, 0) === a
            }), e = [].concat(_.Ie(e)), b ? Yp(b, e) : Zp(c, Yp($p(new Up, a), e)), d.info(aq(Wl(e), Wl(a))))
        }
    };
    Wp = function(a, b, c) {
        if (Array.isArray(a)) return !0;
        Sp("taxonomyData.values", a, b, c);
        return !1
    };
    Xp = function(a, b, c, d) {
        var e = new _.t.Set,
            f = [],
            g = !1;
        b = _.w(b);
        for (var h = b.next(); !h.done; h = b.next()) h = h.value, "string" !== typeof h ? f.push(h) : 10 <= e.size ? g = !0 : e.add(h);
        0 < f.length && Sp("taxonomyData.values", f, c, d);
        g && Q(c, cq(Wl(a), Wl(10)));
        return e
    };
    Sp = function(a, b, c, d) {
        Q(c, Vl("googletag.setConfig.pps", Wl(d), a, Wl(b)))
    };
    fq = function(a, b) {
        if (3 === _.dq(b)) {
            var c = {
                    Hd: new En
                },
                d = new xj;
            N(d, new eq(a, b, c.Hd));
            Gj(d);
            return {
                Ea: d,
                Bk: c
            }
        }
    };
    hq = function(a, b, c, d, e) {
        if (b) {
            var f = {
                    lg: new An
                },
                g = new xj;
            N(g, new gq(a, b, c, f, d, e));
            Gj(g);
            return {
                Ea: g,
                Re: f
            }
        }
    };
    jq = function(a) {
        var b = function() {
            return a.Reflect.construct(a.HTMLElement, [], this.constructor)
        };
        b.prototype = a.HTMLElement.prototype;
        b.prototype.constructor = b;
        _.y(Object, "setPrototypeOf").call(Object, b, a.HTMLElement);
        return b
    };
    lq = function(a, b) {
        var c = _.Cf(kq);
        Math.random() <= c && dj(b, a)
    };
    rq = function(a, b, c) {
        var d = {};
        if (!c) return b.error(mq("missing data-rendering attribute")), d;
        try {
            var e = nq(oq(c))
        } catch (k) {}
        var f;
        (null == (f = e) ? 0 : Kn(f, pq, 1)) ? (b = _.I(new qq, 4, 1), b = _.I(b, 2, 7), a = _.Wg(b, 3, a.wb || a.ub), b = _.xh(e, pq, 1), a = _.Yg(a, 5, b), a = _.bh(a, 6, !0), d.Wk = a) : b.error(mq("invalid data-rendering attribute"));
        var g;
        d.Jk = null == (g = e) ? void 0 : _.M(g, 2);
        var h;
        d.jf = null == (h = e) ? void 0 : _.M(h, 3);
        return d
    };
    vq = function(a, b) {
        var c = on(b, "ai");
        if (!c || 0 === c.length) return _.t.Promise.resolve(b);
        var d = tq();
        if (null == d ? 0 : d.gmaSdk) {
            if (c = d.gmaSdk.getClickSignalsWithTimeout ? d.gmaSdk.getClickSignalsWithTimeout(c, 200) : d.gmaSdk.getClickSignals(c)) return _.t.Promise.resolve(b.replace("?", "?ms=" + encodeURIComponent(c) + "&"))
        } else {
            var e, f;
            if (null == d ? 0 : null == (e = d.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaClickSignals) {
                e = new _.Rf;
                var g = e.resolve;
                e = e.promise;
                uq(d.webkit.messageHandlers.getGmaClickSignals, {
                    click_string: c
                }, function(h) {
                    g(b.replace("?", "?" + h + "&"))
                }, function() {
                    g(b)
                }, function(h, k) {
                    return gh(a, h, k)
                });
                return e
            }
        }
        return _.t.Promise.resolve(b)
    };
    xq = function(a, b, c, d) {
        var e, f, g;
        return _.lb(function(h) {
            e = b.getBoundingClientRect();
            f = {};
            g = d.replace("?", _.wq("", (f.nx = Math.floor(c.clientX - e.x), f.ny = Math.floor(c.clientY - e.y), f.dim = Math.floor(e.width) + "x" + Math.floor(e.height), f)) + "&");
            return h.return(vq(a, g))
        })
    };
    yq = function(a, b, c) {
        var d;
        if (null == c ? 0 : null == (d = c.gmaSdk) ? 0 : d.getViewSignals) {
            if (c = c.gmaSdk.getViewSignals()) return c = b.replace(/^(.*?)(&adurl=)?$/, "$1&ms=" + c + "$2"), _.t.Promise.resolve(c)
        } else {
            var e, f;
            if (null == c ? 0 : null == (e = c.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals) {
                d = new _.Rf;
                var g = d.resolve;
                d = d.promise;
                uq(c.webkit.messageHandlers.getGmaViewSignals, {}, function(h) {
                    g(b.replace(/^(.*?)(&adurl=)?$/, "$1&" + h + "$2"))
                }, function() {
                    g(b)
                }, function(h, k) {
                    return gh(a, h, k)
                });
                return d
            }
        }
        return _.t.Promise.resolve(b)
    };
    Eq = function(a, b) {
        var c = window;
        var d = void 0 === d ? sb : d;
        var e;
        if (c.customElements && null != (e = c.Reflect) && e.construct && !c.customElements.get("google-product-ad")) {
            var f = tq(),
                g;
            null == (g = f ? new zq(function(k, l) {
                return gh(a, k, l)
            }, function() {}) : void 0) || Aq(g);
            var h = jq(c);
            e = function() {
                return h.apply(this, arguments) || this
            };
            _.T(e, h);
            e.prototype.connectedCallback = function() {
                var k = rq(a, b, this.dataset.rendering),
                    l = k.Wk,
                    m = k.Jk;
                k = k.jf;
                l && d(Bq(window, l));
                m && yq(a, m, f).then(function(n) {
                    return void Cq(n)
                });
                k && ("true" === this.getAttribute("data-enable-click") || this.querySelector('[data-enable-click="true"]') ? (this.jf = k, this.addEventListener("click", this.j)) : Q(b, Dq(k)))
            };
            e.prototype.j = function(k) {
                var l = k.target instanceof c.HTMLElement ? k.target.closest("[data-enable-click]") : void 0;
                l instanceof c.HTMLElement && "true" === l.getAttribute("data-enable-click") && xq(a, this, k, this.jf).then(function(m) {
                    return void Cq(m)
                })
            };
            c.customElements.define("google-product-ad", e)
        }
    };
    Gq = function(a) {
        Fq = a
    };
    Iq = function(a, b, c, d) {
        Nj(b, d, function(e, f) {
            kh(a, e, f);
            var g, h;
            null == (h = (g = window.console).error) || h.call(g, f)
        }, function() {
            return void Q(c, Hq())
        })
    };
    Lq = function(a) {
        a = Jq(a);
        return _.Kq(a)
    };
    Jq = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    Oq = function(a, b, c, d, e, f) {
        var g = window,
            h = new xj;
        b = 8 === b ? 3 : 4;
        c = new Mq(a, c);
        N(h, c);
        N(h, new Nq(a, g, b, c.output, d, e, f));
        Gj(h);
        return h
    };
    sa = function(a, b) {
        a: {
            b = b[0];a = a[0];
            for (var c = _.qa, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = _.qa(b.length, a.length)
        }
        return b
    };
    Pq = function(a) {
        return Array.isArray(a) && 2 === a.length && "number" === typeof a[0] && _.y(a, "includes").call(a, 0)
    };
    Qq = function(a) {
        if (Pq(a)) return {
            size: [],
            pg: !0
        };
        if (Array.isArray(a) && 0 < a.length && "number" !== typeof a[0]) {
            var b = !1;
            a = a.filter(function(c) {
                c = Pq(c);
                b = b || c;
                return !c
            });
            return {
                size: a,
                pg: b
            }
        }
        return {
            size: a,
            pg: !1
        }
    };
    Sq = function(a, b) {
        var c = b.T;
        return Go(a, function(d) {
            return Rq(c[d.getDomId()]).join("&")
        }, {
            za: "|"
        })
    };
    Rq = function(a) {
        a = Tq(a);
        var b = [];
        _.Ul(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    Tq = function(a) {
        for (var b = {}, c = _.w(Qk(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b[_.M(d, 1)] = _.Xk(d, 2);
        a = _.Xk(a, 8);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    Uq = function(a) {
        var b = !1,
            c = Ah(a, Tk, 2).map(function(d) {
                var e = _.M(d, 1);
                b = "excl_cat" === e;
                d = _.Xk(d, 2);
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
        a = _.Xk(a, 3);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    Zq = function(a, b, c, d) {
        var e = _.H(Vq) ? !wf(b.isSecureContext, b.document) : "function" !== typeof b.document.browsingTopics || !uf("browsing-topics", b.document);
        if ((_.H(Vq) ? xf(b.isSecureContext, b, b.document) : uf("shared-storage", b.document)) || !e) {
            if (_.H(Wq)) return e = new xj, a = new Xq(a, b, c, d), N(e, a), Gj(e), a.l;
            d = {
                Gb: new An
            };
            e = new xj;
            N(e, new Yq(a, b, d.Gb, c));
            Gj(e);
            return d
        }
    };
    ar = function(a, b, c, d) {
        if (c) {
            var e = {
                    Qd: new An,
                    Rd: new An,
                    Sc: new An
                },
                f = new xj;
            N(f, new $q(a, b, c, d, e));
            Gj(f);
            return {
                Ea: f,
                cl: e
            }
        }
    };
    cr = function(a, b, c) {
        var d = window;
        if (_.H(hk) && b) {
            var e = new xj;
            N(e, new br(a, d, b, c));
            Gj(e);
            return e
        }
    };
    dr = function(a) {
        return "gads_privacy_sandbox_td_buyerlist__" + a
    };
    fr = function(a, b) {
        return a.filter(function(c) {
            return er(c, 2) > b
        })
    };
    hr = function(a, b) {
        a = new _.t.Map(a.map(function(e) {
            return [_.M(e, 1), e]
        }));
        b = _.w(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = a.get(_.M(c, 1));
            d ? gr(d, Math.max(er(c, 2), er(d, 2))) : a.set(_.M(c, 1), c)
        }
        return _.y(Array, "from").call(Array, _.y(a, "values").call(a))
    };
    lr = function(a, b, c) {
        var d = Date.now();
        if (ir(a, b, c)) return new _.t.Map;
        b = new _.t.Map(_.y(Object, "entries").call(Object, a).filter(function(k) {
            var l = _.w(k);
            k = l.next().value;
            l = l.next().value;
            return _.y(k, "startsWith").call(k, "gads_privacy_sandbox_td_buyerlist__") && l
        }).map(function(k) {
            var l = _.w(k);
            k = l.next().value;
            l = l.next().value;
            return [k, jr(l)]
        }));
        c = _.w(b);
        for (var e = c.next(); !e.done; e = c.next()) {
            var f = _.w(e.value);
            e = f.next().value;
            f = f.next().value;
            var g = Ah(f, kr, 1),
                h = fr(g, d);
            0 === h.length ? (b.delete(e), a.removeItem(e)) : h.length < g.length && (_.bl(f, 1, h), a.setItem(e, pk(f)))
        }
        return b
    };
    ir = function(a, b, c) {
        if (!_.G(b, 3)) return !1;
        b = String(_.zf(c + "-" + _.M(b, 2) + _.M(b, 4) + _.G(b, 3)));
        if (a.getItem("gads_privacy_sandbox_tcf_hash") === b) return !1;
        c = _.w(_.y(Object, "keys").call(Object, a).filter(function(e) {
            return _.y(e, "startsWith").call(e, "gads_privacy_sandbox_td_buyerlist__")
        }));
        for (var d = c.next(); !d.done; d = c.next()) a.removeItem(d.value);
        a.setItem("gads_privacy_sandbox_tcf_hash", b);
        return !0
    };
    mr = function(a) {
        return (_.E = ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"], _.y(_.E, "includes")).call(_.E, a)
    };
    nr = function(a) {
        return (_.E = ["https://securepubads.g.doubleclick.net", "https://pubads.g.doubleclick.net"], _.y(_.E, "includes")).call(_.E, a)
    };
    pr = function(a, b, c, d) {
        if (b) {
            var e = b.Pb,
                f = b.Hk;
            if (b.Bg && 4 === e) {
                b = new An;
                e = new An;
                if (!f) return b.D({
                    kind: 1,
                    reason: 1
                }), e.D(!1), {
                    xi: {
                        ei: b,
                        yh: e
                    }
                };
                f = new xj;
                a = new or(a, c, d, b, e);
                N(f, a);
                Gj(f);
                return {
                    xi: {
                        ei: b,
                        yh: e
                    },
                    il: f
                }
            }
        }
    };
    qr = function(a) {
        var b = a.rf,
            c = a.Wa,
            d = void 0 === a.Qg ? [] : a.Qg,
            e = a.interestGroupBuyers;
        a = a.Cc;
        var f = {};
        void 0 !== a && (f["https://googleads.g.doubleclick.net"] = a, f["https://td.doubleclick.net"] = a);
        e = {
            seller: "https://securepubads.g.doubleclick.net",
            decisionLogicUrl: "https://securepubads.g.doubleclick.net/td/sjs",
            trustedScoringSignalsUrl: "https://securepubads.g.doubleclick.net/td/sts",
            interestGroupBuyers: null != e ? e : ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"],
            sellerExperimentGroupId: 0,
            auctionSignals: b.auctionSignals.promise,
            sellerSignals: b.j.promise,
            sellerTimeout: 50,
            perBuyerExperimentGroupIds: f,
            perBuyerSignals: b.perBuyerSignals.promise,
            perBuyerTimeouts: b.perBuyerTimeouts.promise,
            perBuyerCumulativeTimeouts: b.perBuyerCumulativeTimeouts.promise
        };
        e.directFromSellerSignalsHeaderAdSlot = b.directFromSellerSignalsHeaderAdSlot.promise;
        c = {
            seller: "https://securepubads.g.doubleclick.net",
            decisionLogicUrl: "https://securepubads.g.doubleclick.net/td/sjs",
            interestGroupBuyers: [],
            auctionSignals: {},
            sellerExperimentGroupId: 0,
            sellerSignals: b.topLevelSellerSignals.promise,
            sellerTimeout: 50,
            signal: c.signal,
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            perBuyerCumulativeTimeouts: {},
            componentAuctions: [e].concat(_.Ie(d)),
            resolveToConfig: b.resolveToConfig.promise
        };
        c.directFromSellerSignalsHeaderAdSlot = b.directFromSellerSignalsHeaderAdSlot.promise;
        return c
    };
    rr = function(a, b) {
        b = b.rf;
        b.topLevelSellerSignals.resolve(a.sellerSignals);
        b.directFromSellerSignals.resolve(a.directFromSellerSignals);
        b.directFromSellerSignalsHeaderAdSlot.resolve(a.directFromSellerSignalsHeaderAdSlot);
        b.resolveToConfig.resolve(!!a.resolveToConfig);
        var c;
        if (a = null == (c = a.componentAuctions) ? void 0 : _.y(c, "find").call(c, function(f) {
                return nr(f.seller)
            })) {
            b.auctionSignals.resolve(a.auctionSignals);
            b.j.resolve(a.sellerSignals);
            b.perBuyerSignals.resolve(a.perBuyerSignals);
            var d;
            b.perBuyerTimeouts.resolve(null != (d = a.perBuyerTimeouts) ? d : {});
            var e;
            b.perBuyerCumulativeTimeouts.resolve(null != (e = a.perBuyerCumulativeTimeouts) ? e : {})
        } else b.auctionSignals.resolve(void 0), b.j.resolve(void 0), b.perBuyerSignals.resolve({}), b.perBuyerTimeouts.resolve({}), b.perBuyerCumulativeTimeouts.resolve({})
    };
    zr = function(a, b) {
        var c, d, e, f, g, h, k, l, m, n, p, r, v, u;
        return _.lb(function(x) {
            if (1 == x.j) return ("string" !== typeof a || _.y(a, "startsWith").call(a, "urn:")) && sr.deprecatedURNToURL && sr.deprecatedReplaceInURN ? _.mb(x, sr.deprecatedURNToURL(a), 2) : x.return();
            c = x.v;
            d = {};
            e = b.gdprApplies || "";
            (null != (f = c.match(tr)) ? f : []).forEach(function(C) {
                d[C] = e
            });
            g = b.rh || "";
            (null != (h = c.match(ur)) ? h : []).forEach(function(C) {
                d[C] = g
            });
            k = b.Hg || "";
            (null != (l = c.match(vr)) ? l : []).forEach(function(C) {
                d[C] = k
            });
            m = b.Fg || "";
            (null != (n = c.match(wr)) ? n : []).forEach(function(C) {
                d[C] = m
            });
            p = b.Eg || "";
            (null != (r = c.match(xr)) ? r : []).forEach(function(C) {
                d[C] = p
            });
            v = b.fi || "";
            (null != (u = c.match(yr)) ? u : []).forEach(function(C) {
                d[C] = v
            });
            return _.mb(x, sr.deprecatedReplaceInURN(a, d), 0)
        })
    };
    Dr = function(a, b) {
        var c;
        return 1 === (null == (c = a.componentAuctions) ? void 0 : c.length) && nr(a.componentAuctions[0].seller) && a.componentAuctions[0].interestGroupBuyers.every(mr) && Kn(b, Ar, 26) ? Br(pk(Cr(b, Ar, 26)), 3) : ""
    };
    Er = function(a, b, c) {
        var d = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner",
            e = _.G(c, 18),
            f = _.G(c, 7);
        if (f || e) d += "&isContextualWinner=1";
        f && (d += "&hasXfpAds=1");
        e = c.getEscapedQemQueryId();
        f = _.M(c, 6);
        e && (d += "&winner_qid=" + encodeURIComponent(e));
        f && (d += "&xfpQid=" + encodeURIComponent(f));
        _.G(c, 4) && (d += "&is_plog=1");
        (e = _.M(c, 11)) && (d += "&ecrs=" + e);
        (null == c ? 0 : _.G(c, 21)) || (d += "&turtlexTest=1");
        d += "&applied_timeout_ms=" + (b + "&duration_ms=" + Math.round(a));
        Cq(d)
    };
    Fr = function() {
        return new _.t.Promise(function(a) {
            setTimeout(function() {
                a(null)
            }, 0)
        })
    };
    Gr = function(a, b) {
        var c = b.getEscapedQemQueryId(),
            d = _.M(b, 6);
        Li("pre_run_ad_auction_ping", function(e) {
            Ri(e, a);
            L(e, "winner_qid", null != c ? c : "");
            L(e, "xfpQid", null != d ? d : "");
            L(e, "publisher_tag", "gpt")
        }, 1)
    };
    Hr = function(a, b, c, d, e, f, g, h) {
        var k = 3 === b,
            l = 2 === b,
            m = 1 === b,
            n = f.getEscapedQemQueryId(),
            p = _.M(f, 6),
            r, v, u = null != (v = null == (r = g.componentAuctions) ? void 0 : r.length) ? v : 0;
        Li("run_ad_auction_stats", function(x) {
            Ri(x, a);
            L(x, "duration_ms", c);
            L(x, "applied_timeout_ms", d);
            L(x, "timed_out", l ? 1 : 0);
            L(x, "error", k ? 1 : 0);
            L(x, "auction_skipped", m ? 1 : 0);
            L(x, "auction_winner", h ? 1 : 0);
            L(x, "thread_release_only", _.G(f, 15) ? 1 : 0);
            L(x, "winner_qid", null != n ? n : "");
            L(x, "xfpQid", null != p ? p : "");
            L(x, "publisher_tag", "gpt");
            e && L(x, "parallel", "1");
            0 < u && L(x, "nc", u)
        }, 1)
    };
    Ir = function(a, b, c, d, e) {
        var f = e.getEscapedQemQueryId(),
            g = _.M(e, 6);
        Li("run_ad_auction_complete", function(h) {
            Ri(h, a);
            L(h, "duration_ms", Math.round(performance.now() - d));
            L(h, "applied_timeout_ms", c);
            L(h, "auction_has_winner", !!b);
            f && L(h, "winner_qid", f);
            g && L(h, "xfpQid", g)
        }, 1)
    };
    Jr = function(a) {
        return "function" === typeof FencedFrameConfig ? a instanceof FencedFrameConfig : !1
    };
    Kr = function(a) {
        var b = Date.now() + 864E5;
        return a.map(function(c) {
            var d = new kr;
            c = _.Wg(d, 1, c);
            return gr(c, b)
        })
    };
    Mr = function(a, b, c, d, e, f, g) {
        _.H(Lr) && f && g ? (ep(g, !0), a.Ta.D(!1), a.qa.D({
            kind: 2,
            Wb: f
        }), a.Ha.D(d)) : (a.Ta.D(e), a.qa.D(c), a.Ha.D(d), null == b || b.D(!1))
    };
    Nr = function(a, b, c, d, e, f, g, h) {
        var k = 3 === b,
            l = 2 === b,
            m = 1 === b,
            n = f.getEscapedQemQueryId(),
            p = _.M(f, 6);
        Li("run_ad_auction_stats", function(r) {
            Ri(r, a);
            L(r, "duration_ms", c);
            L(r, "applied_timeout_ms", d);
            L(r, "timed_out", l ? 1 : 0);
            L(r, "error", k ? 1 : 0);
            L(r, "auction_skipped", m ? 1 : 0);
            L(r, "auction_winner", h ? 1 : 0);
            L(r, "thread_release_only", _.G(f, 15) ? 1 : 0);
            L(r, "winner_qid", null != n ? n : "");
            L(r, "xfpQid", null != p ? p : "");
            L(r, "publisher_tag", "gpt");
            e && L(r, "parallel", "1");
            0 < g && L(r, "nc", g)
        }, 1)
    };
    Or = function(a, b, c, d, e) {
        var f = e.getEscapedQemQueryId(),
            g = _.M(e, 6);
        Li("run_ad_auction_complete", function(h) {
            Ri(h, a);
            L(h, "duration_ms", Math.round(d));
            L(h, "applied_timeout_ms", c);
            L(h, "auction_has_winner", b);
            f && L(h, "winner_qid", f);
            g && L(h, "xfpQid", g)
        }, 1)
    };
    Pr = function(a, b) {
        var c = b.getEscapedQemQueryId(),
            d = _.M(b, 6);
        Li("pre_run_ad_auction_ping", function(e) {
            Ri(e, a);
            L(e, "winner_qid", null != c ? c : "");
            L(e, "xfpQid", null != d ? d : "");
            L(e, "publisher_tag", "gpt")
        }, 1)
    };
    Wr = function(a, b, c, d) {
        var e = oi(a, document);
        e && ag(e, window, d, !0);
        Qr(_.qf(ih), "5", Rr(c.T[a.getDomId()], 20));
        Sr(a, Tr, 801, {
            Wg: null,
            isBackfill: !1
        });
        if (_.Ur(b, a) && !xi(a, document)) {
            b = c.X;
            c = c.T[a.getDomId()];
            var f;
            (null != (f = Lo(c, 10)) ? f : _.G(b, 11)) && fp(a, document, c, b)
        }
        Sr(a, Vr, 825, {
            isEmpty: !0
        })
    };
    is = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, u, x) {
        if ((_.H(Vq) ? vf(window.isSecureContext, window.navigator, window.document) : Xr.runAdAuction && uf("run-ad-auction", document)) && !_.H(Yr) && u) {
            u = {
                Rb: new En,
                qa: new An,
                Ha: new An,
                oc: new An
            };
            var C = new xj;
            N(C, new Zr(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, u, x));
            Gj(C);
            return {
                Ea: C,
                jl: u
            }
        }
    };
    ks = function(a, b, c, d, e, f, g, h) {
        if (b) {
            var k = b.Pb;
            if (b.Bg && 0 !== k) return b = new xj, a = new js(a, k, c, d, e, f, g, h), N(b, a), Gj(b), {
                gl: a.l,
                fl: b
            }
        }
    };
    ls = function() {
        for (var a = _.w(_.y(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value,
                d = b.src;
            d && (_.Ja(d, "/tag/js/gpt.js") || _.Ja(d, "/tag/js/gpt_mobile.js")) && !c.googletag_executed && b.textContent && (c.googletag_executed = !0, c = document.createElement("script"), Xa(c, new _.we(b.textContent, xe)), document.head.appendChild(c), document.head.removeChild(c))
        }
    };
    ms = function(a, b) {
        b = _.w(_.y(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.w(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    ps = function(a, b, c) {
        var d = [];
        c = [].concat(_.Ie(c.ba)).slice();
        if (b) {
            if (!Array.isArray(b)) return Q(a, Ik("googletag.destroySlots", [b])), !1;
            pa(b);
            d = c.filter(function(e) {
                return _.y(b, "includes").call(b, e.j)
            })
        } else d = c;
        if (!d.length) return !1;
        ns(d);
        os(d);
        return !0
    };
    Gs = function(a, b, c, d, e, f, g, h, k, l) {
        var m = Pm(),
            n, p, r = K(a, 74, function(u, x, C) {
                return e.defineSlot(a, b, u, x, C)
            }),
            v = {};
        r = (v._loaded_ = !0, v.cmd = [], v._vars_ = m._vars_, v.evalScripts = function() {
            try {
                ls()
            } catch (C) {
                kh(a, 297, C);
                var u, x;
                null == (u = window.console) || null == (x = u.error) || x.call(u, C)
            }
        }, v.display = K(a, 95, function(u) {
            void qs(c, u, e)
        }), v.defineOutOfPageSlot = K(a, 73, function(u, x) {
            return (u = $o(a, b, e, {
                gh: x,
                adUnitPath: u
            })) ? u.j : null
        }), v.getVersion = K(a, 946, function() {
            return a.rc ? String(a.rc) : a.ub
        }), v.pubads = K(a, 947, function() {
            return zm(a, b, c, e, h)
        }), v.companionAds = K(a, 816, function() {
            null != n || (n = new rs(a, b, c, f));
            return Lk(a, b, n)
        }), v.content = K(a, 817, function() {
            null != p || (p = new ss(a, b, g));
            return Nk(a, b, p)
        }), v.setAdIframeTitle = K(a, 729, Gq), v.getEventLog = K(a, 945, function() {
            return new ts(a, b)
        }), v.sizeMapping = K(a, 90, function() {
            return new us(a, b)
        }), v.enableServices = K(a, 91, function() {
            for (var u = _.w(vs), x = u.next(); !x.done; x = u.next()) x = x.value, x.enabled && b.info(ws()), xs(x)
        }), v.destroySlots = K(a, 75, function(u) {
            return ps(b, u, e)
        }), v.enums = kl(), v.defineSlot = r, v.defineUnit = r, v.getWindowsThatCanCommunicateWithHostpageLibrary = K(a, 955, function(u) {
            return ys(k, u).map(function(x) {
                var C;
                return null == (C = xi(x, document)) ? void 0 : C.contentWindow
            }).filter(function(x) {
                return !!x
            })
        }), v.disablePublisherConsole = K(a, 93, pn), v.onPubConsoleJsLoad = K(a, 731, sn), v.openConsole = K(a, 732, function(u) {
            kn = !0;
            var x;
            (null == (x = Pm()) ? 0 : x.console) ? Pm().console.openConsole(u): (u && (rn = u), qn = !0, fn(a))
        }), v.setConfig = K(a, 1034, function(u) {
            if (_.na(u)) {
                var x = u.commerce,
                    C = u.pps,
                    D = u.adExpansion,
                    F = u.privacyTreatments;
                if (null === x) x = zs(d, As, 33), _.Uh(x, 1);
                else if (void 0 !== x) {
                    var B = zs(d, As, 33);
                    if (_.na(x)) {
                        var J = x.query,
                            R = x.categories,
                            O = x.productIds,
                            W = x.filter,
                            ba = _.vd(Cr(B, Bs, 1));
                        null === J ? _.Uh(ba, 1) : hp(J) ? mj(ba, 1, J) : void 0 !== J && gp(b, x, "query", J);
                        null === R ? _.Uh(ba, 2) : ip(R) ? _.Md(ba, 2, R, _.Lc) : void 0 !== R && gp(b, x, "categories", R);
                        null === O ? _.Uh(ba, 3) : ip(O) ? _.Md(ba, 3, O, _.Lc) : void 0 !== O && gp(b, x, "productIds", O);
                        null === W ? _.Uh(ba, 4) : hp(W) ? mj(ba, 4, W) : void 0 !== W && gp(b, x, "filter", W);
                        null != _.rj(ba, 1) || _.Xk(ba, 2).length ? _.Yg(B, 1, ba) : Q(b, Cs())
                    } else Q(b, Ik("googletag.setConfig.commerce", [x]))
                }
                if (null === C) x = zs(d, As, 33), _.Uh(x, 2);
                else if (void 0 !== C && (x = zs(zs(d, As, 33), Ds, 2), "object" === typeof C && C.hasOwnProperty("taxonomies") ? B = !0 : (Q(b, Ik("googletag.setConfig.pps", [C])), B = !1), B))
                    if (B = C.taxonomies, void 0 === B) Sp("taxonomies", B, b, C);
                    else if (null === B) _.Uh(x, 1);
                else if (Tp(B, b, C))
                    for (C = _.w(_.y(Object, "entries").call(Object, B)), J = C.next(); !J.done; J = C.next()) {
                        J = _.w(J.value);
                        var ha = J.next().value;
                        J = J.next().value;
                        R = x;
                        O = b;
                        ba = B;
                        if (void 0 === ha || null === ha) Sp("taxonomy", ha, O, ba);
                        else {
                            W = Number(ha);
                            var la = W,
                                Da = O,
                                ya = ba;
                            (_.E = _.y(Object, "values").call(Object, jl), _.y(_.E, "includes")).call(_.E, Number(la)) ? ha = !0 : (Sp("taxonomy", ha, Da, ya), ha = !1);
                            ha && void 0 !== J && (null === J ? Vp(W, R) : (ha = O, "object" === typeof J && J.hasOwnProperty("values") ? ba = !0 : (Sp("taxonomyData", J, ha, ba), ba = !1), ba && bq(W, J, R, O)))
                        }
                    }
                _.H(Es) ? zn(d, null, u) : zn(d, D);
                _.Uh(d, 35);
                a: {
                    if (null != F) {
                        if (Fs(F)) {
                            u = F;
                            break a
                        }
                        Q(b, Ik("googletag.setConfig", [F]))
                    }
                    u = void 0
                }
                D = u;
                if (void 0 !== D) {
                    u = new _.t.Set;
                    D = _.w(D);
                    for (F = D.next(); !F.done; F = D.next()) {
                        F = F.value;
                        a: {
                            switch (F) {
                                case "disablePersonalization":
                                    x = 1;
                                    break a
                            }
                            x = void 0
                        }
                        void 0 === x ? Q(b, Ik("googletag.setConfig", [F])) : u.add(x)
                    }
                    D = d.G;
                    F = Pb(D);
                    jc(sd(d.G));
                    D = Bd(D, F, 35, 2, !1);
                    if (Array.isArray(u))
                        for (F = 0; F < u.length; F++) D.push(zc(u[F]));
                    else
                        for (u = _.w(u), F = u.next(); !F.done; F = u.next()) D.push(zc(F.value))
                }
            } else Q(b, Ik("googletag.setConfig", [u]))
        }), v.apiReady = !0, v);
        Iq(a, m, b, l);
        ms(m, r)
    };
    Ns = function(a) {
        var b = window,
            c = new xj,
            d = new Hs(a, b);
        d = N(c, d).output;
        var e = _.H(Wq) ? void 0 : Zq(a, b, d);
        var f = new xj;
        var g = new Is(a, b);
        N(f, g);
        Gj(f);
        f = {
            yk: g.l
        };
        _.H(Js) && N(c, new Ks(a, b));
        if (Na()) {
            g = {
                Yh: new An
            };
            var h = new xj;
            N(h, new Ls(a, window, g.Yh));
            Gj(h);
            a = g
        } else a = void 0;
        h = _.H(Yr);
        g = b.navigator;
        b = _.H(Vq) ? vf(b.isSecureContext, b.navigator, b.document) : !!g.runAdAuction && uf("run-ad-auction", b.document);
        b = !h && b;
        h = _.Cf(Ms);
        b = {
            Bg: b,
            Pb: h,
            Hk: !!g.getInterestGroupAdAuctionData
        };
        Gj(c);
        return {
            xk: f,
            Fk: a,
            xc: e,
            ee: d,
            el: b
        }
    };
    Os = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver && new IntersectionObserver(a, b)
    };
    yt = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, u, x, C, D, F) {
        var B = new xj,
            J = Eh(!0, window),
            R = k.X,
            O = k.T[e.getDomId()],
            W = F.ee,
            ba = _.H(Wq) ? null == D ? void 0 : D.xc : F.xc,
            ha = new Ps(a, window);
        N(B, ha);
        var la = m.Tj,
            Da = m.tl,
            ya = m.Hj,
            Oa = m.ic,
            jb = m.Vi,
            Qb = m.ak,
            fc = m.bf,
            Wb = m.Oj,
            Fc = m.Cf,
            Vc = m.bc,
            Yd = m.ml,
            Gf = m.Zj,
            Ce = m.jk,
            De = m.Dg,
            Hf = m.Wj,
            cc = m.zj,
            sl = m.qa,
            Xh = m.wi,
            tl = m.Ld,
            ul = m.lj,
            vl = m.gj,
            qc = new An;
        qc.D(p);
        var If = new Qs(a, window.top, qc);
        N(B, If);
        var Jf = new Rs(a, Ss(O), J.height, Fc, la);
        N(B, Jf);
        var cb = new Ts(a, e, oi(e, n), e.getDomId(), wi(e), n.documentElement, Ss(O), h, f);
        Us(B, cb);
        var yb = new An;
        yb.Ka(cb.m.promise.then(function(wl) {
            return wl.output
        }));
        var Bg = new Vs(a, sl, jb, Qb, fc);
        N(B, Bg);
        var $h = new Ws(a, _.xh(R, Xs, 5));
        N(B, $h);
        if (_.H(Ys)) {
            var xl = Dn(a, window.location.hash, J, e.getAdUnitPath(), O, f, Jf.output, Vc, Da, la, Bg.output, yb),
                Cg = xl.xg;
            _.S(B, xl.Ea);
            var ai = Cg.qa;
            var bi = Cg.Ha;
            var yl = Cg.ud;
            var ci = Cg.bc
        } else {
            var di = new Bn(a, window.location.hash, J.width, Da, la, yb);
            N(B, di);
            var Kf = new Cn(a, e.getAdUnitPath(), O, f, Vc, Da, Jf.output, di.o, di.l, Bg.output, yb);
            N(B, Kf);
            ai = Kf.qa;
            bi = Kf.C;
            yl = Kf.ud;
            ci = Kf.bc
        }
        var Dg = new Zs(a, R, O, jb, fc, yl);
        N(B, Dg);
        var ei = is(a, e, If.output, O, h, p, f, ai, bi, yb, r, k, C, Oa, Xh, g, v);
        if (ei) {
            _.S(B, ei.Ea);
            var Eg = ei.jl
        }
        var zl, Al, Bl = null != (Al = null == (zl = Eg) ? void 0 : zl.qa) ? Al : ai,
            Cl, Dl, Zd = null != (Dl = null == (Cl = Eg) ? void 0 : Cl.Ha) ? Dl : bi,
            El, Wc = null == (El = Eg) ? void 0 : El.Rb,
            Fl, iq = null == (Fl = Eg) ? void 0 : Fl.oc,
            Xc = new $s(a, e, R, O, Ss(O), n, h, yb, Dg.output, Zd, ya, Wc);
        N(B, Xc);
        var fi = new at(a, Xc.output);
        N(B, fi);
        var gi = new bt(a, e, J, h, fi.output, $h.l, Wc);
        N(B, gi);
        var Gl = new ct(a, gi.output, Xc.output, $h.l, Wc);
        N(B, Gl);
        if (_.H(Ys)) {
            var hi = Hn(a, J, e, O, yb, Xc.output, ya, Zd, ci, Oa, Wc),
                Hl = hi.xg;
            _.S(B, hi.Ea);
            var ii = Hl.Rb
        } else {
            var Ee = new Fn(a, window, yb);
            N(B, Ee);
            var Lf = new Gn(a, n, e, O, J, ya, yb, Xc.output, Zd, ci, Ee.output, Oa, Wc);
            N(B, Lf);
            ii = Lf.Rb
        }
        var Il = new dt(a, R, O, Bl, Dg.output, Yd);
        N(B, Il);
        var Jl = new et(a, window, cc, ha.output, Wc);
        N(B, Jl);
        var ji = new ft(a, Ss(O), n);
        N(B, ji);
        var Yc = new gt(a, x, Ss(O), Fc, Wb, Wc);
        N(B, Yc);
        var sq = new ht(a, Ce, iq, qc, Wc);
        N(B, sq);
        var ki = cr(a, ba, vl);
        ki && _.S(B, ki);
        var Xb = new jt(a, e, h, k, u, l, window, Bl, Dg.output, Gl.output, yb, Xc.output, Zd, Oa, ya, Il.output, Qb, Gf, De, ii, Jl.output, ji.output, Yc.output, Xh, W, Wc);
        N(B, Xb);
        var Kl = new kt(a, window, e, Xb.o, qc);
        N(B, Kl);
        var li = Ss(O);
        switch (li) {
            case 2:
            case 3:
                _.H(lt) ? N(B, new mt(a, h, Ss(O), e, window, Fc, Xb.l, yb, Yc.output, Zd)) : N(B, new nt(a, h, Ss(O), e, window, Fc, Xb.l, yb, Yc.output, Zd));
                break;
            case 5:
                N(B, new ot(a, e, k.Vc, Wb, Xb.l, yb, If.output, Yc.output));
                break;
            case 4:
                var mi = new pt(a, e, u, window, Xb.l, yb);
                _.S(B, mi);
                Gj(mi);
                break;
            case 7:
                Us(B, Op(a, e, u, Xb.l, yb));
                break;
            case 8:
            case 9:
                var ni = Oq(a, li, x, Xb.l, Xc.output, Zd);
                ni && _.S(B, ni)
        }
        var Ml = new qt(a, e, Xb.l, n, u);
        N(B, Ml);
        var Fg = new rt(a, e, st(h, e), window.top);
        N(B, Fg);
        var Nl = new tt(a, st(h, e), window.top, Xb.l, ha.output, Fg.output, Fg.l);
        N(B, Nl);
        N(B, new ut(a, e, ya, jb, De, Xb.l, Xc.output, Xb.C));
        var Ol = new vt(a, window, Hf, Xb.l, Xc.output, yb);
        N(B, Ol);
        _.H(wt) && _.S(B, cp(a, n, Pm(), R, c, b, d, ul));
        N(B, new xt(a, Pm(), R, b, c, d, tl));
        return B
    };
    Bt = function(a, b, c) {
        var d = null;
        try {
            var e = zt(b.top.document, b.top).y;
            d = a.map(function(f) {
                var g = c.X,
                    h = c.T[f.getDomId()],
                    k;
                f = null == (k = ui(f, h, b.document, Mo(g, h))) ? void 0 : k.y;
                k = Eh(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++At
            })
        } catch (f) {}
        return d
    };
    Jt = function(a) {
        return mh(a.ia.context, 1132, function() {
            if (a.ja.ba.length) {
                var b = new _.t.Set(Ef(Ct));
                for (var c = _.w(_.G(a.ia.U, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id".split(" ") : []), d = c.next(); !d.done; d = c.next()) b.add(d.value);
                d = new _.t.Map;
                c = _.w(Dt);
                for (var e = c.next(); !e.done; e = c.next()) e = e.value, e(a, d);
                c = "https://" + (Et(a) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
                d = _.w(d);
                for (e = d.next(); !e.done; e = d.next()) {
                    var f = _.w(e.value);
                    e = f.next().value;
                    var g = f.next().value;
                    f = g.value;
                    g = void 0 === g.options ? {} : g.options;
                    (new RegExp("[?&]" + e + "=")).test(c);
                    if (!b.has(e) && null != f) {
                        var h = void 0 === g.za ? "," : g.za,
                            k = void 0 === g.Ca ? !1 : g.Ca,
                            l = void 0 === g.Mb ? !1 : g.Mb;
                        if (f = "object" !== typeof f ? null == f || !k && 0 === f ? null : encodeURIComponent(f) : Array.isArray(f) && f.length ? _.H(Eo) && l || _.H(Ft) ? Gt(f, g) : encodeURIComponent(f.join(h)) : null) "?" !== c[c.length - 1] && (c += "&"), c += e + "=" + f
                    }
                }
                if (1 === _.Cf(Ht) || 2 === _.Cf(Ht)) b = _.Cf(It), b = 0 >= b ? "" : (_.E = _.y(Array, "from").call(Array, {
                    length: Math.ceil(b / 8)
                }), _.y(_.E, "fill")).call(_.E, "testdata").join("").substring(0, b), 2 === _.Cf(Ht) && (c += "&dblt=" + b);
                b = c
            } else b = "";
            return b
        })
    };
    Et = function(a) {
        var b = a.ia.U,
            c, d;
        a = null != (d = null == (c = Kt(a.ja.P.X)) ? void 0 : _.G(c, 9)) ? d : !1;
        c = _.G(b, 8);
        return a || c || !_.G(b, 5)
    };
    Gt = function(a, b) {
        var c = void 0 === b.za ? "," : b.za,
            d = void 0 === b.cd ? "" : b.cd,
            e = void 0 === b.Ca ? !1 : b.Ca,
            f = !1;
        a = a.map(function(g) {
            f || (f = !!g);
            return String(0 === g && e ? g : g || d)
        });
        return f || e ? encodeURIComponent(a.join(c)) : null
    };
    Mt = function(a, b, c, d, e) {
        Lt(c, d) ? e(gh(a, 646, b), 0) : b()
    };
    Lt = function(a, b) {
        if (0 === a) return !1;
        var c = _.Cf(Nt);
        switch (c) {
            case 0:
                return !1;
            case 1:
                return !0;
            case 2:
                var d;
                return void 0 !== (null == (d = b.Ok) ? void 0 : d.fk) ? b.Ok.fk() : !0;
            case 3:
                return 0 === a % 2;
            case 4:
                return 0 === a % 5;
            default:
                _.Ua(c)
        }
    };
    Ot = function(a) {
        function b(f) {
            var g = f;
            return function() {
                var h = _.gb.apply(0, arguments);
                if (g) {
                    var k = g;
                    g = null;
                    k.apply(null, _.Ie(h))
                }
            }
        }
        var c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k;
            return _.lb(function(l) {
                if (1 == l.j) return d && clearTimeout(d), d = 0, f = new _.Rf, g = b(f.resolve), h = ++e, _.mb(l, 0, 2);
                if (e !== h) return g(!1), l.return(f.promise);
                c ? c(!1) : g(!0);
                k = b(function() {
                    c = null;
                    d = 0;
                    g(!0)
                });
                d = setTimeout(k, 1E3);
                _.ap(a, function() {
                    return void g(!1)
                });
                c = g;
                return l.return(f.promise)
            })
        }
    };
    Wt = function() {
        var a = new Pt;
        var b = (new Qt).setCorrelator(_.qh(_.q));
        var c = _.tf().join();
        b = _.Wg(b, 5, c);
        b = _.I(b, 2, 1);
        a = _.Yg(a, 1, b);
        b = new Rt;
        c = _.H(St);
        b = _.bh(b, 7, c);
        c = _.H(Tt);
        b = _.bh(b, 8, c);
        c = _.H(Ut);
        b = _.bh(b, 9, c);
        b = _.bh(b, 10, !0);
        c = _.H(Vt);
        b = _.bh(b, 13, c);
        b = _.bh(b, 16, !0);
        a = _.Yg(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    Zt = function(a, b) {
        var c = Xt() || (0, _.Yt)() ? 1 : _.yf(),
            d = .001 > c;
        d ? (b.l = !0, sf(31067358)) : .002 > c && sf(31067357);
        $l(23, a);
        return {
            Qc: d,
            Ih: 1E3,
            pi: 1E-4 > c,
            Hh: 1E4,
            sg: d,
            xf: 1E3
        }
    };
    bu = function(a, b) {
        var c = b.wb;
        /m\d+/.test(c) ? c = Number(c.substring(1)) : (c && dj({
            mjsv: c
        }, "gpt_inv_ver"), c = void 0);
        var d = window.document.URL,
            e = _.Cf($t);
        e = new au(4, b.wb, e);
        return _.y(Object, "assign").call(Object, {}, b, a, {
            rc: c,
            Tb: e,
            vj: d,
            lh: 2012
        })
    };
    _.cu = function(a) {
        var b;
        a = (null != (b = void 0 === a ? null : a) ? b : window).googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };
    _.ca = [];
    du = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    eu = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    fu = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    _.gu = fu(this);
    hu = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    _.t = {};
    iu = {};
    _.y = function(a, b, c) {
        if (!c || null != a) {
            c = iu[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    };
    ju = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in _.t ? f = _.t : f = _.gu;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = hu && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? eu(_.t, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === iu[d] && (a = 1E9 * Math.random() >>> 0, iu[d] = hu ? _.gu.Symbol(d) : "$jscp$" + a + "$" + d), eu(f, iu[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    ju("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            eu(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    ju("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, _.t.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = _.gu[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && eu(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ku(du(this))
                }
            })
        }
        return a
    }, "es6");
    ku = function(a) {
        a = {
            next: a
        };
        a[_.y(_.t.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    _.lu = function(a) {
        return a.raw = a
    };
    mu = function(a, b) {
        a.raw = b;
        return a
    };
    _.w = function(a) {
        var b = "undefined" != typeof _.t.Symbol && _.y(_.t.Symbol, "iterator") && a[_.y(_.t.Symbol, "iterator")];
        if (b) return b.call(a);
        if ("number" == typeof a.length) return {
            next: du(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    };
    _.Ie = function(a) {
        if (!(a instanceof Array)) {
            a = _.w(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    nu = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    ou = hu && "function" == typeof _.y(Object, "assign") ? _.y(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) nu(d, e) && (a[e] = d[e])
        }
        return a
    };
    ju("Object.assign", function(a) {
        return a || ou
    }, "es6");
    var pu = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        qu = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if (hu && "undefined" != typeof Reflect && Reflect.construct) {
                if (a()) return Reflect.construct;
                var b = Reflect.construct;
                return function(c, d, e) {
                    c = b(c, d);
                    e && Reflect.setPrototypeOf(c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = pu(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        ru;
    if (hu && "function" == typeof _.y(Object, "setPrototypeOf")) ru = _.y(Object, "setPrototypeOf");
    else {
        var su;
        a: {
            var tu = {
                    a: !0
                },
                uu = {};
            try {
                uu.__proto__ = tu;
                su = uu.a;
                break a
            } catch (a) {}
            su = !1
        }
        ru = su ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    vu = ru;
    _.T = function(a, b) {
        a.prototype = pu(b.prototype);
        a.prototype.constructor = a;
        if (vu) vu(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Xk = b.prototype
    };
    wu = function() {
        this.l = !1;
        this.H = null;
        this.v = void 0;
        this.j = 1;
        this.o = this.m = 0;
        this.B = null
    };
    xu = function(a) {
        if (a.l) throw new TypeError("Generator is already running");
        a.l = !0
    };
    wu.prototype.I = function(a) {
        this.v = a
    };
    var yu = function(a, b) {
        a.B = {
            exception: b,
            ck: !0
        };
        a.j = a.m || a.o
    };
    wu.prototype.return = function(a) {
        this.B = {
            return: a
        };
        this.j = this.o
    };
    _.mb = function(a, b, c) {
        a.j = c;
        return {
            value: b
        }
    };
    ob = function(a) {
        a.m = 0;
        var b = a.B.exception;
        a.B = null;
        return b
    };
    zu = function(a) {
        this.j = new wu;
        this.v = a
    };
    Cu = function(a, b) {
        xu(a.j);
        var c = a.j.H;
        if (c) return Au(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.j.return);
        a.j.return(b);
        return Bu(a)
    };
    Au = function(a, b, c, d) {
        try {
            var e = b.call(a.j.H, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.j.l = !1, e;
            var f = e.value
        } catch (g) {
            return a.j.H = null, yu(a.j, g), Bu(a)
        }
        a.j.H = null;
        d.call(a.j, f);
        return Bu(a)
    };
    Bu = function(a) {
        for (; a.j.j;) try {
            var b = a.v(a.j);
            if (b) return a.j.l = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.j.v = void 0, yu(a.j, c)
        }
        a.j.l = !1;
        if (a.j.B) {
            b = a.j.B;
            a.j.B = null;
            if (b.ck) throw b.exception;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    Du = function(a) {
        this.next = function(b) {
            xu(a.j);
            a.j.H ? b = Au(a, a.j.H.next, b, a.j.I) : (a.j.I(b), b = Bu(a));
            return b
        };
        this.throw = function(b) {
            xu(a.j);
            a.j.H ? b = Au(a, a.j.H["throw"], b, a.j.I) : (yu(a.j, b), b = Bu(a));
            return b
        };
        this.return = function(b) {
            return Cu(a, b)
        };
        this[_.y(_.t.Symbol, "iterator")] = function() {
            return this
        }
    };
    Eu = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new _.t.Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : _.t.Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    };
    _.lb = function(a) {
        return Eu(new Du(new zu(a)))
    };
    _.gb = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    ju("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    ju("Reflect.construct", function() {
        return qu
    }, "es6");
    ju("Reflect.setPrototypeOf", function(a) {
        return a ? a : vu ? function(b, c) {
            try {
                return vu(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    ju("Promise", function(a) {
        function b() {
            this.j = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.v = function(g) {
            if (null == this.j) {
                this.j = [];
                var h = this;
                this.m(function() {
                    h.B()
                })
            }
            this.j.push(g)
        };
        var d = _.gu.setTimeout;
        b.prototype.m = function(g) {
            d(g, 0)
        };
        b.prototype.B = function() {
            for (; this.j && this.j.length;) {
                var g = this.j;
                this.j = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.H(l)
                    }
                }
            }
            this.j = null
        };
        b.prototype.H = function(g) {
            this.m(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.v = 0;
            this.m = void 0;
            this.j = [];
            this.I = !1;
            var h = this.H();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.H = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.sa),
                reject: g(this.B)
            }
        };
        e.prototype.sa = function(g) {
            if (g === this) this.B(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.M(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.F(g) : this.l(g)
            }
        };
        e.prototype.F = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.B(k);
                return
            }
            "function" == typeof h ? this.O(h, g) : this.l(g)
        };
        e.prototype.B = function(g) {
            this.o(2, g)
        };
        e.prototype.l = function(g) {
            this.o(1, g)
        };
        e.prototype.o = function(g, h) {
            if (0 != this.v) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.v);
            this.v = g;
            this.m = h;
            2 === this.v && this.J();
            this.L()
        };
        e.prototype.J = function() {
            var g = this;
            d(function() {
                if (g.C()) {
                    var h = _.gu.console;
                    "undefined" !== typeof h && h.error(g.m)
                }
            }, 1)
        };
        e.prototype.C = function() {
            if (this.I) return !1;
            var g = _.gu.CustomEvent,
                h = _.gu.Event,
                k = _.gu.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = _.gu.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.m;
            return k(g)
        };
        e.prototype.L = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.v(this.j[g]);
                this.j = null
            }
        };
        var f = new b;
        e.prototype.M = function(g) {
            var h = this.H();
            g.ae(h.resolve, h.reject)
        };
        e.prototype.O = function(g, h) {
            var k = this.H();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(p, r) {
                return "function" == typeof p ? function(v) {
                    try {
                        l(p(v))
                    } catch (u) {
                        m(u)
                    }
                } : r
            }
            var l, m, n = new e(function(p, r) {
                l = p;
                m = r
            });
            this.ae(k(g, l), k(h, m));
            return n
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.ae = function(g, h) {
            function k() {
                switch (l.v) {
                    case 1:
                        g(l.m);
                        break;
                    case 2:
                        h(l.m);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.v);
                }
            }
            var l = this;
            null == this.j ? f.v(k) : this.j.push(k);
            this.I = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = _.w(g), m = l.next(); !m.done; m = l.next()) c(m.value).ae(h, k)
            })
        };
        e.all = function(g) {
            var h = _.w(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, m) {
                function n(v) {
                    return function(u) {
                        p[v] = u;
                        r--;
                        0 == r && l(p)
                    }
                }
                var p = [],
                    r = 0;
                do p.push(void 0), r++, c(k.value).ae(n(p.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    }, "es6");
    ju("Object.setPrototypeOf", function(a) {
        return a || vu
    }, "es6");
    ju("WeakMap", function(a) {
        function b() {}

        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(g) {
                this.j = (e += Math.random() + 1).toString();
                if (g) {
                    g = _.w(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!nu(g, d)) {
                var k = new b;
                eu(g, d, {
                    value: k
                })
            }
            if (!nu(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.j] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && nu(g, d) ? g[d][this.j] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && nu(g, d) && nu(g[d], this.j)
        };
        f.prototype.delete = function(g) {
            return c(g) && nu(g, d) && nu(g[d], this.j) ? delete g[d][this.j] : !1
        };
        return f
    }, "es6");
    ju("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.y(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(_.w([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = _.y(k, "entries").call(k),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var b = new _.t.WeakMap,
            c = function(h) {
                this[0] = {};
                this[1] = f();
                this.size = 0;
                if (h) {
                    h = _.w(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.Ra ? l.Ra.value = k : (l.Ra = {
                next: this[1],
                Db: this[1].Db,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.Ra), this[1].Db.next = l.Ra, this[1].Db = l.Ra, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.Ra && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.Ra.Db.next = h.Ra.next, h.Ra.next.Db = h.Ra.Db, h.Ra.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].Db = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).Ra
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).Ra) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = _.y(this, "entries").call(this), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[_.y(_.t.Symbol, "iterator")] = _.y(c.prototype, "entries");
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var m = h[0][l];
                if (m && nu(h[0], l))
                    for (h = 0; h < m.length; h++) {
                        var n = m[h];
                        if (k !== k && n.key !== n.key || k === n.key) return {
                            id: l,
                            list: m,
                            index: h,
                            Ra: n
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    Ra: void 0
                }
            },
            e = function(h, k) {
                var l = h[1];
                return ku(function() {
                    if (l) {
                        for (; l.head != h[1];) l = l.Db;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Db = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var Fu = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[_.y(_.t.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    ju("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Fu(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    ju("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Fu(this, function(b) {
                return b
            })
        }
    }, "es6");
    var Gu = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    ju("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Gu(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var Hu = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                i: e,
                Bi: f
            }
        }
        return {
            i: -1,
            Bi: void 0
        }
    };
    ju("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return Hu(this, b, c).Bi
        }
    }, "es6");
    ju("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    }, "es6");
    ju("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) nu(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    ju("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    ju("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.y(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    ju("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Gu(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    ju("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.y(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.w([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = _.y(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.j = new _.t.Map;
            if (c) {
                c = _.w(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.j.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c
        };
        b.prototype.clear = function() {
            this.j.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.j.has(c)
        };
        b.prototype.entries = function() {
            return _.y(this.j, "entries").call(this.j)
        };
        b.prototype.values = function() {
            return _.y(this.j, "values").call(this.j)
        };
        b.prototype.keys = _.y(b.prototype, "values");
        b.prototype[_.y(_.t.Symbol, "iterator")] = _.y(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.j.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    ju("Number.EPSILON", function() {
        return Math.pow(2, -52)
    }, "es6");
    ju("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    ju("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.y(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    ju("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    ju("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof _.t.Symbol && _.y(_.t.Symbol, "iterator") && b[_.y(_.t.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    ju("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Fu(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    ju("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    }, "es6");
    var Iu = function(a) {
        return a ? a : _.y(Array.prototype, "fill")
    };
    ju("Int8Array.prototype.fill", Iu, "es6");
    ju("Uint8Array.prototype.fill", Iu, "es6");
    ju("Uint8ClampedArray.prototype.fill", Iu, "es6");
    ju("Int16Array.prototype.fill", Iu, "es6");
    ju("Uint16Array.prototype.fill", Iu, "es6");
    ju("Int32Array.prototype.fill", Iu, "es6");
    ju("Uint32Array.prototype.fill", Iu, "es6");
    ju("Float32Array.prototype.fill", Iu, "es6");
    ju("Float64Array.prototype.fill", Iu, "es6");
    ju("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) nu(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    ju("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Gu(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    ju("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Gu(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    ju("globalThis", function(a) {
        return a || _.gu
    }, "es_2020");
    ju("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Gu(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? _.y(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    ju("AggregateError", function(a) {
        if (a) return a;
        a = function(b, c) {
            c = Error(c);
            "stack" in c && (this.stack = c.stack);
            this.errors = b;
            this.message = c.message
        };
        _.T(a, Error);
        a.prototype.name = "AggregateError";
        return a
    }, "es_2021");
    ju("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : _.y(Array, "from").call(Array, b);
            return _.t.Promise.all(b.map(function(c) {
                return _.t.Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new _.t.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    ju("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return Hu(this, b, c).i
        }
    }, "es6");
    ju("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(_.y(_.t.Symbol, "iterator") in b)) throw new TypeError("" + b + " is not iterable");
            b = b[_.y(_.t.Symbol, "iterator")].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    }, "es_2019");
    ju("Object.hasOwn", function(a) {
        return a ? a : function(b, c) {
            return Object.prototype.hasOwnProperty.call(b, c)
        }
    }, "es_next");
    ju("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return _.t.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return _.t.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    ju("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = void 0 === b ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && 0 < b ? (d = _.y(Array.prototype, "flat").call(d, b - 1), c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    }, "es9");
    ju("String.raw", function(a) {
        return a ? a : function(b, c) {
            if (null == b) throw new TypeError("Cannot convert undefined or null to object");
            for (var d = b.raw, e = d.length, f = "", g = 0; g < e; ++g) f += d[g], g + 1 < e && g + 1 < arguments.length && (f += String(arguments[g + 1]));
            return f
        }
    }, "es6");
    ju("Math.sign", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            return 0 === b || isNaN(b) ? b : 0 < b ? 1 : -1
        }
    }, "es6");
    ju("String.fromCodePoint", function(a) {
        return a ? a : function(b) {
            for (var c = "", d = 0; d < arguments.length; d++) {
                var e = Number(arguments[d]);
                if (0 > e || 1114111 < e || e !== Math.floor(e)) throw new RangeError("invalid_code_point " + e);
                65535 >= e ? c += String.fromCharCode(e) : (e -= 65536, c += String.fromCharCode(e >>> 10 & 1023 | 55296), c += String.fromCharCode(e & 1023 | 56320))
            }
            return c
        }
    }, "es6");
    ju("Array.prototype.flatMap", function(a) {
        return a ? a : function(b, c) {
            var d = [];
            Array.prototype.forEach.call(this, function(e, f) {
                e = b.call(c, e, f, this);
                Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
            });
            return d
        }
    }, "es9");
    var uc, Ju, Ku, Lu, Mu;
    _.q = this || self;
    uc = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    _.ua = function(a) {
        var b = uc(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.na = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    _.oa = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Ju) && a[Ju] || (a[Ju] = ++Ku)
    };
    Ju = "closure_uid_" + (1E9 * Math.random() >>> 0);
    Ku = 0;
    Lu = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    Mu = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    _.Nu = function(a, b, c) {
        _.Nu = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Lu : Mu;
        return _.Nu.apply(null, arguments)
    };
    _.Ou = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    var Pu;
    var Ru, Qu;
    _.Su = function(a, b) {
        this.j = a === Qu && b || "";
        this.v = Ru
    };
    _.Su.prototype.nb = !0;
    _.Su.prototype.Ya = function() {
        return this.j
    };
    _.Tu = function(a) {
        return a instanceof _.Su && a.constructor === _.Su && a.v === Ru ? a.j : "type_error:Const"
    };
    _.Uu = function(a) {
        return new _.Su(Qu, a)
    };
    Ru = {};
    Qu = {};
    var rb = _.Uu("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    var Vu, Wu, pi;
    Vu = function() {
        return !0
    };
    Wu = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    pi = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.Xu = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    _.Yu = function(a, b) {
        var c = 0,
            d = !1,
            e = [],
            f = function() {
                c = 0;
                d && (d = !1, g())
            },
            g = function() {
                c = _.q.setTimeout(f, b);
                var h = e;
                e = [];
                a.apply(void 0, h)
            };
        return function(h) {
            e = arguments;
            c ? d = !0 : g()
        }
    };
    var ea;
    _.Zu = {
        passive: !0
    };
    ea = pi(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.q.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.ib = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, fa(d)), !0) : !1
    };
    _.af = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, fa(d)), !0) : !1
    };
    _.ia = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.$u = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.Ag = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    _.av = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    _.Hg = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var pc = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var Ea = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var bv = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var xe;
    xe = {};
    _.we = function(a) {
        this.j = a;
        this.nb = !0
    };
    _.we.prototype.toString = function() {
        return this.j.toString()
    };
    _.we.prototype.Ya = function() {
        return this.j.toString()
    };
    _.Wa = function(a) {
        return a instanceof _.we && a.constructor === _.we ? a.j : "type_error:SafeScript"
    };
    var hv, gv, dv, iv, ev;
    _.cv = function(a) {
        this.j = a
    };
    _.cv.prototype.toString = function() {
        return this.j + ""
    };
    _.cv.prototype.nb = !0;
    _.cv.prototype.Ya = function() {
        return this.j.toString()
    };
    _.fv = function(a, b) {
        a = dv.exec(_.Ya(a).toString());
        var c = a[3] || "";
        return _.te(a[1] + ev("?", a[2] || "", b) + ev("#", c))
    };
    _.Ya = function(a) {
        return a instanceof _.cv && a.constructor === _.cv ? a.j : "type_error:TrustedResourceUrl"
    };
    _.qb = function(a, b) {
        var c = _.Tu(a);
        if (!gv.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(hv, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof _.Su ? _.Tu(d) : encodeURIComponent(String(d))
        });
        return _.te(a)
    };
    hv = /%{(\w+)}/g;
    gv = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i");
    dv = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    iv = {};
    _.te = function(a) {
        return new _.cv(a, iv)
    };
    ev = function(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var jv, Pk, kv, sv, mv, nv, ov, pv, qv, rv, lv;
    jv = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    Pk = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    kv = function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    sv = function(a) {
        if (!lv.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(mv, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(nv, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ov, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(pv, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(qv, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(rv, "&#0;"));
        return a
    };
    mv = /&/g;
    nv = /</g;
    ov = />/g;
    pv = /"/g;
    qv = /'/g;
    rv = /\x00/g;
    lv = /[\x00&<>"']/;
    _.Ja = function(a, b) {
        return -1 != a.indexOf(b)
    };
    var tv, uv, wv, xv, zv, db;
    _.Ra = function(a) {
        this.j = a
    };
    _.Ra.prototype.toString = function() {
        return this.j.toString()
    };
    _.Ra.prototype.nb = !0;
    _.Ra.prototype.Ya = function() {
        return this.j.toString()
    };
    _.Sa = function(a) {
        return a instanceof _.Ra && a.constructor === _.Ra ? a.j : "type_error:SafeUrl"
    };
    tv = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    uv = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.vv = function(a) {
        if (a instanceof _.Ra) return a;
        a = "object" == typeof a && a.nb ? a.Ya() : String(a);
        uv.test(a) ? a = db(a) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(tv) ? db(a) : null);
        return a
    };
    try {
        new URL("s://g"), wv = !0
    } catch (a) {
        wv = !1
    }
    xv = wv;
    _.yv = function(a) {
        if (a instanceof _.Ra) return a;
        a = "object" == typeof a && a.nb ? a.Ya() : String(a);
        a: {
            var b = a;
            if (xv) {
                try {
                    var c = new URL(b)
                } catch (d) {
                    b = "https:";
                    break a
                }
                b = c.protocol
            } else b: {
                c = document.createElement("a");
                try {
                    c.href = b
                } catch (d) {
                    b = void 0;
                    break b
                }
                b = c.protocol;b = ":" === b || "" === b ? "https:" : b
            }
        }
        "javascript:" === b && (a = "about:invalid#zClosurez");
        return db(a)
    };
    zv = {};
    db = function(a) {
        return new _.Ra(a, zv)
    };
    _.eb = db("about:invalid#zClosurez");
    _.Av = {};
    _.Bv = function(a) {
        this.j = a;
        this.nb = !0
    };
    _.Bv.prototype.Ya = function() {
        return this.j
    };
    _.Bv.prototype.toString = function() {
        return this.j.toString()
    };
    _.Cv = new _.Bv("", _.Av);
    _.Dv = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$");
    _.Ev = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g");
    _.Fv = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g");
    _.Gv = {};
    _.Hv = function(a) {
        this.j = a;
        this.nb = !0
    };
    _.Hv.prototype.toString = function() {
        return this.j.toString()
    };
    _.Hv.prototype.Ya = function() {
        return this.j
    };
    _.Iv = function(a) {
        return a instanceof _.Hv && a.constructor === _.Hv ? a.j : "type_error:SafeStyleSheet"
    };
    var Ha, Jv;
    a: {
        for (var Kv = ["CLOSURE_FLAGS"], Lv = _.q, Mv = 0; Mv < Kv.length; Mv++)
            if (Lv = Lv[Kv[Mv]], null == Lv) {
                Jv = null;
                break a
            }
        Jv = Lv
    }
    var Nv = Jv && Jv[610401301];
    Ha = null != Nv ? Nv : !1;
    var Ia, Ov = _.q.navigator;
    Ia = Ov ? Ov.userAgentData || null : null;
    var Pv, Sv, Xv, Tv, Zv, Uv, Wv;
    Pv = {};
    _.Qv = function(a) {
        this.j = a;
        this.nb = !0
    };
    _.Qv.prototype.Ya = function() {
        return this.j.toString()
    };
    _.Qv.prototype.toString = function() {
        return this.j.toString()
    };
    _.Rv = function(a) {
        return a instanceof _.Qv && a.constructor === _.Qv ? a.j : "type_error:SafeHtml"
    };
    Sv = function(a) {
        return a instanceof _.Qv ? a : _.Kq(sv("object" == typeof a && a.nb ? a.Ya() : String(a)))
    };
    _.Vv = function(a) {
        if (!Tv.test(a)) throw Error("");
        if (a.toUpperCase() in Uv) throw Error("");
    };
    Xv = function(a) {
        var b = Sv(Wv),
            c = [],
            d = function(e) {
                Array.isArray(e) ? e.forEach(d) : (e = Sv(e), c.push(_.Rv(e).toString()))
            };
        a.forEach(d);
        return _.Kq(c.join(_.Rv(b).toString()))
    };
    _.Yv = function(a) {
        return Xv(Array.prototype.slice.call(arguments))
    };
    _.Kq = function(a) {
        return new _.Qv(a, Pv)
    };
    _.$v = function(a, b, c) {
        var d = "";
        if (b)
            for (var e in b)
                if (Object.prototype.hasOwnProperty.call(b, e)) {
                    if (!Tv.test(e)) throw Error("");
                    var f = b[e];
                    if (null != f) {
                        var g = e;
                        if (f instanceof _.Su) f = _.Tu(f);
                        else {
                            if ("style" == g.toLowerCase()) throw Error("");
                            if (/^on/i.test(g)) throw Error("");
                            if (g.toLowerCase() in Zv)
                                if (f instanceof _.cv) f = _.Ya(f).toString();
                                else if (f instanceof _.Ra) f = _.Sa(f);
                            else if ("string" === typeof f) f = (_.vv(f) || _.eb).Ya();
                            else throw Error("");
                        }
                        f.nb && (f = f.Ya());
                        f = g + '="' + sv(String(f)) + '"';
                        d += " " + f
                    }
                }
        b = "<" + a + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === bv[a.toLowerCase()] ? b += ">" : (c = _.Yv(c), b += ">" + _.Rv(c).toString() + "</" + a + ">");
        return _.Kq(b)
    };
    Tv = /^[a-zA-Z0-9-]+$/;
    Zv = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    Uv = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    Wv = new _.Qv(_.q.trustedTypes && _.q.trustedTypes.emptyHTML || "", Pv);
    _.aw = _.Kq("<br>");
    var Pa = "function" === typeof URL;
    var bw = {
            Sl: 0,
            Vl: 1,
            Ql: 2,
            Rl: 3,
            0: "FORMATTED_HTML_CONTENT",
            1: "HTML_FORMATTED_CONTENT",
            2: "EMBEDDED_INTERNAL_CONTENT",
            3: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
        },
        cw = function(a, b) {
            b = Error.call(this, a + " cannot be used with intent " + bw[b]);
            this.message = b.message;
            "stack" in b && (this.stack = b.stack);
            this.type = a;
            this.name = "TypeCannotBeUsedWithIntentError"
        };
    _.T(cw, Error);
    var $a = function(a) {
            this.hk = a
        },
        bb = [ab("data"), ab("http"), ab("https"), ab("mailto"), ab("ftp"), new $a(function(a) {
            return /^[^:]*([/?#]|$)/.test(a)
        })];
    var nb = function(a) {
        return new _.t.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var ub, tb = "undefined" !== typeof TextEncoder;
    _.dw = function(a) {
        _.dw[" "](a);
        return a
    };
    _.dw[" "] = function() {};
    var ew = function(a, b) {
        try {
            return _.dw(a[b]), !0
        } catch (c) {}
        return !1
    };
    var fw, hw, iw, jw, kw, lw;
    fw = Ma() ? !1 : La("Opera");
    _.gw = Ma() ? !1 : La("Trident") || La("MSIE");
    hw = La("Edge");
    iw = La("Gecko") && !(_.Ja(Ga().toLowerCase(), "webkit") && !La("Edge")) && !(La("Trident") || La("MSIE")) && !La("Edge");
    jw = _.Ja(Ga().toLowerCase(), "webkit") && !La("Edge");
    kw = function() {
        var a = _.q.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var mw = "",
            nw = function() {
                var a = Ga();
                if (iw) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (hw) return /Edge\/([\d\.]+)/.exec(a);
                if (_.gw) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (jw) return /WebKit\/(\S+)/.exec(a);
                if (fw) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();nw && (mw = nw ? nw[1] : "");
        if (_.gw) {
            var ow = kw();
            if (null != ow && ow > parseFloat(mw)) {
                lw = String(ow);
                break a
            }
        }
        lw = mw
    }
    var pw = lw,
        qw;
    if (_.q.document && _.gw) {
        var rw = kw();
        qw = rw ? rw : parseInt(pw, 10) || void 0
    } else qw = void 0;
    var sw = qw;
    !La("Android") || Na();
    Na();
    La("Safari") && (Na() || (Ma() ? 0 : La("Coast")) || (Ma() ? 0 : La("Opera")) || (Ma() ? 0 : La("Edge")) || (Ma() ? Ka("Microsoft Edge") : La("Edg/")) || Ma() && Ka("Opera"));
    var tw = {},
        uw = null,
        vw = iw || jw || "function" == typeof _.q.btoa,
        Ab = function(a, b) {
            void 0 === b && (b = 0);
            ww();
            b = tw[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    l = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = l + g + h + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        Br = function(a, b) {
            if (vw && !b) a = _.q.btoa(a);
            else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                    var f = a.charCodeAt(e);
                    255 < f && (c[d++] = f & 255, f >>= 8);
                    c[d++] = f
                }
                a = Ab(c, b)
            }
            return a
        },
        oq = function(a) {
            var b = "";
            xw(a, function(c) {
                b += String.fromCharCode(c)
            });
            return b
        },
        ze = function(a) {
            var b = [];
            xw(a, function(c) {
                b.push(c)
            });
            return b
        },
        yw = function(a) {
            var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : _.Ja("=.", a[b - 1]) && (c = _.Ja("=.", a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            xw(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        xw = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = uw[l];
                    if (null != m) return m;
                    if (!Pk(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            ww();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        ww = function() {
            if (!uw) {
                uw = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    tw[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === uw[f] && (uw[f] = e)
                    }
                }
            }
        };
    var Eb = "undefined" !== typeof Uint8Array,
        xb = !_.gw && "function" === typeof btoa,
        zw = /[-_.]/g,
        Cb = {
            "-": "+",
            _: "/",
            ".": "="
        },
        Aw, Gb = {};
    var Bw, gc = function(a, b) {
            Hb(b);
            this.ga = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        },
        hc = function() {
            return Bw || (Bw = new gc(null, Gb))
        },
        jd = function(a) {
            var b = a.ga;
            return null == b ? "" : "string" === typeof b ? b : a.ga = Bb(b)
        },
        tk = function(a) {
            Hb(Gb);
            var b = a.ga;
            if (null != b && !Fb(b))
                if ("string" === typeof b)
                    if (xb) {
                        zw.test(b) && (b = b.replace(zw, Db));
                        b = atob(b);
                        for (var c = new Uint8Array(b.length), d = 0; d < b.length; d++) c[d] = b.charCodeAt(d);
                        b = c
                    } else b = yw(b);
            else b = null;
            return (a = null == b ? b : a.ga = b) ? new Uint8Array(a) : Aw || (Aw = new Uint8Array(0))
        };
    gc.prototype.isEmpty = function() {
        return null == this.ga
    };
    var Jb = 0,
        Kb = 0,
        Cw;
    var Dw = function(a, b) {
            this.v = a >>> 0;
            this.j = b >>> 0
        },
        Fw = function(a) {
            if (!a) return Ew || (Ew = new Dw(0, 0));
            if (!/^\d+$/.test(a)) return null;
            Nb(a);
            return new Dw(Jb, Kb)
        },
        Ew, Gw = function(a, b) {
            this.v = a >>> 0;
            this.j = b >>> 0
        },
        ge = function(a) {
            if (!a) return Hw || (Hw = new Gw(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            Nb(a);
            return new Gw(Jb, Kb)
        },
        Hw;
    var Iw = function() {
        this.j = []
    };
    Iw.prototype.length = function() {
        return this.j.length
    };
    Iw.prototype.end = function() {
        var a = this.j;
        this.j = [];
        return a
    };
    var ie = function(a, b, c) {
            for (; 0 < c || 127 < b;) a.j.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.j.push(b)
        },
        he = function(a, b) {
            for (; 127 < b;) a.j.push(b & 127 | 128), b >>>= 7;
            a.j.push(b)
        },
        Jw = function(a, b) {
            if (0 <= b) he(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.j.push(b & 127 | 128), b >>= 7;
                a.j.push(1)
            }
        };
    var oe = function() {
            this.m = [];
            this.v = 0;
            this.j = new Iw
        },
        ke = function(a, b) {
            0 !== b.length && (a.m.push(b), a.v += b.length)
        },
        Kw = function(a, b, c) {
            he(a.j, 8 * b + 2);
            he(a.j, c.length);
            ke(a, a.j.end());
            ke(a, c)
        };
    var ce = function(a) {
        this.j = a
    };
    var Lw = "function" === typeof _.t.Symbol && "symbol" === typeof(0, _.t.Symbol)() ? (0, _.t.Symbol)() : void 0,
        Vb = Lw ? function(a, b) {
            a[Lw] |= b
        } : function(a, b) {
            void 0 !== a.ob ? a.ob |= b : Object.defineProperties(a, {
                ob: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        },
        Ad = Lw ? function(a, b) {
            a[Lw] &= ~b
        } : function(a, b) {
            void 0 !== a.ob && (a.ob &= ~b)
        },
        Pb = Lw ? function(a) {
            return a[Lw] | 0
        } : function(a) {
            return a.ob | 0
        },
        sd = Lw ? function(a) {
            return a[Lw]
        } : function(a) {
            return a.ob
        },
        Rb = Lw ? function(a, b) {
            a[Lw] = b
        } : function(a, b) {
            void 0 !== a.ob ? a.ob = b : Object.defineProperties(a, {
                ob: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        };
    var Oc = {},
        Mw, zd, Nw = [];
    Rb(Nw, 55);
    zd = Object.freeze(Nw);
    var Ow = function(a, b, c) {
        this.m = 0;
        this.j = a;
        this.v = b;
        this.H = c
    };
    Ow.prototype.next = function() {
        if (this.m < this.j.length) {
            var a = this.j[this.m++];
            return {
                done: !1,
                value: this.v ? this.v.call(this.H, a) : a
            }
        }
        return {
            done: !0,
            value: void 0
        }
    };
    Ow.prototype[_.y(_.t.Symbol, "iterator")] = function() {
        return new Ow(this.j, this.v, this.H)
    };
    var Hd = {};
    var kc;
    var xc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/,
        Rc = "function" === typeof _.t.Symbol && "symbol" === typeof(0, _.t.Symbol)() ? (0, _.t.Symbol)() : "di";
    var Uc, $c, ad;
    var kd = function(a, b, c, d) {
        c = void 0 === c ? Sc : c;
        d = void 0 === d ? Sc : d;
        var e = qu(_.t.Map, [], this.constructor);
        var f = Pb(a);
        f |= 64;
        Rb(a, f);
        e.v = f;
        e.m = b;
        e.j = c || Sc;
        e.H = e.m ? ed : d || Sc;
        for (var g = 0; g < a.length; g++) {
            var h = a[g],
                k = c(h[0], !1, !0),
                l = h[1];
            b ? void 0 === l && (l = null) : l = d(h[1], !1, !0, void 0, void 0, f);
            _.t.Map.prototype.set.call(e, k, l)
        }
        return e
    };
    _.T(kd, _.t.Map);
    var Pw = function(a) {
            if (a.v & 2) throw Error("Cannot mutate an immutable Map");
        },
        ld = function(a, b) {
            b = void 0 === b ? fd : b;
            return ud(a, b)
        },
        ud = function(a, b) {
            b = void 0 === b ? fd : b;
            var c = [];
            a = _.y(_.t.Map.prototype, "entries").call(a);
            for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
            return c
        };
    _.aa = kd.prototype;
    _.aa.clear = function() {
        Pw(this);
        _.t.Map.prototype.clear.call(this)
    };
    _.aa.delete = function(a) {
        Pw(this);
        return _.t.Map.prototype.delete.call(this, this.j(a, !0, !1))
    };
    _.aa.entries = function() {
        var a = _.y(Array, "from").call(Array, _.y(_.t.Map.prototype, "keys").call(this));
        return new Ow(a, gd, this)
    };
    _.aa.keys = function() {
        return _.y(_.t.Map.prototype, "keys").call(this)
    };
    _.aa.values = function() {
        var a = _.y(Array, "from").call(Array, _.y(_.t.Map.prototype, "keys").call(this));
        return new Ow(a, kd.prototype.get, this)
    };
    _.aa.forEach = function(a, b) {
        var c = this;
        _.t.Map.prototype.forEach.call(this, function(d, e) {
            a.call(b, c.get(e), e, c)
        })
    };
    _.aa.set = function(a, b) {
        Pw(this);
        a = this.j(a, !0, !1);
        return null == a ? this : null == b ? (_.t.Map.prototype.delete.call(this, a), this) : _.t.Map.prototype.set.call(this, a, this.H(b, !0, !0, this.m, !1, this.v))
    };
    _.aa.has = function(a) {
        return _.t.Map.prototype.has.call(this, this.j(a, !1, !1))
    };
    _.aa.get = function(a) {
        a = this.j(a, !1, !1);
        var b = _.t.Map.prototype.get.call(this, a);
        if (void 0 !== b) {
            var c = this.m;
            return c ? (c = this.H(b, !1, !0, c, this.B, this.v), c !== b && _.t.Map.prototype.set.call(this, a, c), c) : b
        }
    };
    kd.prototype[_.y(_.t.Symbol, "iterator")] = function() {
        return _.y(this, "entries").call(this)
    };
    kd.prototype.toJSON = void 0;
    Object.freeze({});
    var no, yd, Kn, Cp, Yl, uk, Gd, nk, ij, sk, zs, Qw, Cr, Ah, oj, Bp, zh, Rw, Rr, er, Tw, Uw, Ww, Xw, Lo, Yw, Zw, $w, nj, mj, oo, bx;
    no = function(a, b) {
        a = a.G;
        return yd(a, sd(a), b)
    };
    yd = function(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= dc(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    };
    _.Uh = function(a, b, c) {
        var d = a.G,
            e = sd(d);
        jc(e);
        xd(d, e, b, c);
        return a
    };
    Kn = function(a, b, c) {
        return void 0 !== Qw(a, b, c, !1)
    };
    Cp = function(a) {
        a = a.G;
        var b = sd(a),
            c = yd(a, b, 3),
            d = tc(c);
        null != d && d !== c && xd(a, b, 3, d);
        return d
    };
    Yl = function(a, b) {
        return wc(no(a, b))
    };
    uk = function(a, b) {
        a = a.G;
        var c = sd(a),
            d = yd(a, c, b),
            e = ic(d, !0, !!(c & 34));
        null != e && e !== d && xd(a, c, b, e);
        return null == e ? hc() : e
    };
    nk = function(a, b, c, d) {
        var e = a.G,
            f = sd(e);
        jc(f);
        (c = Od(e, f, c)) && c !== b && null != d && (f = xd(e, f, c));
        xd(e, f, b, d);
        return a
    };
    ij = function(a, b, c) {
        a = a.G;
        return Od(a, sd(a), b) === c ? c : -1
    };
    sk = function(a, b) {
        a = a.G;
        return Od(a, sd(a), b)
    };
    zs = function(a, b, c) {
        a = a.G;
        var d = sd(a);
        jc(d);
        var e = yd(a, d, c);
        b = dd(Qc(e, b, !0, d));
        e !== b && xd(a, d, c, b);
        return b
    };
    Qw = function(a, b, c, d) {
        a = a.G;
        var e = sd(a),
            f = yd(a, e, c, d);
        b = Qc(f, b, !1, e);
        b !== f && null != b && xd(a, e, c, b, d);
        return b
    };
    Cr = function(a, b, c) {
        return (a = Qw(a, b, c, !1)) ? a : Pc(b)
    };
    _.xh = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = Qw(a, b, c, d);
        if (null == b) return b;
        a = a.G;
        var e = sd(a);
        if (!(e & 2)) {
            var f = dd(b);
            f !== b && (b = f, xd(a, e, c, b, d))
        }
        return b
    };
    Ah = function(a, b, c) {
        a = a.G;
        var d = sd(a),
            e = !!(2 & d);
        return Pd(a, d, b, c, e ? 1 : 2, !1, !e)
    };
    _.Yg = function(a, b, c) {
        null == c && (c = void 0);
        return _.Uh(a, b, c)
    };
    _.dh = function(a, b, c, d) {
        null == d && (d = void 0);
        return nk(a, b, c, d)
    };
    _.bl = function(a, b, c) {
        var d = a.G,
            e = sd(d);
        jc(e);
        if (null == c) return xd(d, e, b), a;
        for (var f = Pb(c), g = f, h = !!(2 & f) || !!(2048 & f), k = h || Object.isFrozen(c), l = !k && !1, m = !0, n = !0, p = 0; p < c.length; p++) {
            var r = c[p];
            h || (r = !!(Pb(r.G) & 2), m && (m = !r), n && (n = r))
        }
        h || (f = Ub(f, 5, !0), f = Ub(f, 8, m), f = Ub(f, 16, n), l && (f = Ub(f, n ? 2 : 2048, !0)), f !== g && (k && (c = Ob(c), f = Cd(f, e, !0)), Rb(c, f)), l && Object.freeze(c));
        xd(d, e, b, c);
        return a
    };
    oj = function(a, b, c, d) {
        Qd(a, b, c, d);
        return a
    };
    Bp = function(a, b) {
        return Cc(no(a, b))
    };
    zh = function(a, b) {
        return Gc(no(a, b))
    };
    Rw = function(a, b) {
        a = no(a, b);
        a = null == a ? a : yc(a) ? "number" === typeof a ? a : a : void 0;
        return a
    };
    _.rj = function(a, b) {
        return Nc(no(a, b))
    };
    _.Xk = function(a, b, c, d, e) {
        return Dd(a, b, Nc, c, d, e)
    };
    _.G = function(a, b, c) {
        return Rd(Yl(a, b), void 0 === c ? !1 : c)
    };
    _.Sw = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Rd(Bp(a, b), c)
    };
    Rr = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Rd(zh(a, b), c)
    };
    _.Ze = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Rd(Ic(no(a, b)), c)
    };
    er = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Rd(Rw(a, b), c)
    };
    Tw = function(a) {
        var b = void 0 === b ? "0" : b;
        return Rd(Jc(no(a, 2)), b)
    };
    _.M = function(a, b) {
        return Rd(_.rj(a, b), "")
    };
    _.vk = function(a, b, c) {
        return Rd(no(a, b), void 0 === c ? 0 : c)
    };
    Uw = function(a, b, c) {
        a = _.Xk(a, b, void 0, 3, !0);
        if ("number" !== typeof c || 0 > c || c >= a.length) throw Error();
        return a[c]
    };
    Ww = function(a) {
        return _.Ze(a, ij(a, Vw, 3))
    };
    Xw = function(a, b) {
        return _.M(a, ij(a, b, 2))
    };
    Lo = function(a, b) {
        a = Yl(a, b);
        return null == a ? void 0 : a
    };
    Yw = function(a, b) {
        a = Bp(a, b);
        return null == a ? void 0 : a
    };
    Zw = function(a, b) {
        a = _.rj(a, b);
        return null == a ? void 0 : a
    };
    $w = function(a, b) {
        a = no(a, b);
        return null == a ? void 0 : a
    };
    nj = function(a, b, c) {
        return _.Uh(a, b, null == c ? c : vc(c))
    };
    _.bh = function(a, b, c) {
        return _.Nd(a, b, null == c ? c : vc(c), !1)
    };
    _.ax = function(a, b, c) {
        return _.Uh(a, b, null == c ? c : Bc(c))
    };
    _.ch = function(a, b, c) {
        return _.Nd(a, b, null == c ? c : Bc(c), 0)
    };
    _.mk = function(a, b, c) {
        return _.Uh(a, b, null == c ? c : _.Hc(c))
    };
    _.Vg = function(a, b, c) {
        return _.Nd(a, b, null == c ? c : _.Hc(c), "0")
    };
    mj = function(a, b, c) {
        return _.Uh(a, b, Mc(c))
    };
    _.Wg = function(a, b, c) {
        return _.Nd(a, b, Mc(c), "")
    };
    oo = function(a, b, c) {
        return _.Uh(a, b, null == c ? c : zc(c))
    };
    _.I = function(a, b, c) {
        return _.Nd(a, b, null == c ? c : zc(c), 0)
    };
    bx = function(a, b, c) {
        c = _.Lc(c);
        var d = a.G,
            e = sd(d);
        jc(e);
        Bd(d, e, b, 2).push(c);
        return a
    };
    _.A = function(a, b, c) {
        this.G = _.z(a, b, c)
    };
    _.A.prototype.toJSON = function() {
        if (Mw) var a = Sd(this, this.G, !1);
        else a = nd(this.G, pd, void 0, void 0, !1, !1), a = Sd(this, a, !0);
        return a
    };
    var pk = function(a) {
        Mw = !0;
        try {
            return JSON.stringify(a.toJSON(), id)
        } finally {
            Mw = !1
        }
    };
    _.A.prototype.Tf = Oc;
    var Ud = (0, _.t.Symbol)(),
        be = (0, _.t.Symbol)(),
        de = (0, _.t.Symbol)(),
        cx = fe(function(a, b, c) {
            b = tc(b);
            null != b && (he(a.j, 8 * c + 5), a = a.j, c = Cw || (Cw = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), Kb = 0, b = Jb = c.getUint32(0, !0), a.j.push(b >>> 0 & 255), a.j.push(b >>> 8 & 255), a.j.push(b >>> 16 & 255), a.j.push(b >>> 24 & 255))
        }),
        dx = fe(je),
        ex = fe(je),
        fx = fe(function(a, b, c) {
            a: if (null != b) {
                if (yc(b)) {
                    if ("string" === typeof b) break a;
                    if ("number" === typeof b) break a
                }
                b = void 0
            }null != b && ("string" === typeof b && Fw(b), null != b && (he(a.j, 8 * c), "number" === typeof b ? (a = a.j, Mb(b), ie(a, Jb, Kb)) : (c = Fw(b), ie(a.j, c.v, c.j))))
        }),
        gx = fe(function(a, b, c) {
            b = Cc(b);
            null != b && null != b && (he(a.j, 8 * c), Jw(a.j, b))
        }),
        hx = fe(function(a, b, c) {
            b = wc(b);
            null != b && (he(a.j, 8 * c), a.j.j.push(b ? 1 : 0))
        }),
        ix = fe(function(a, b, c) {
            b = Nc(b);
            null != b && Kw(a, c, vb(b))
        }),
        jx;
    jx = new ce(function(a, b, c) {
        if (Array.isArray(b)) {
            var d = Pb(b);
            if (!(d & 4)) {
                for (var e = 0, f = 0; e < b.length; e++) {
                    var g = Nc(b[e]);
                    null != g && (b[f++] = g)
                }
                f < e && (b.length = f);
                Rb(b, d | 5);
                d & 2 && Object.freeze(b)
            }
        } else b = void 0;
        if (null != b)
            for (d = 0; d < b.length; d++) e = b[d], null != e && Kw(a, c, vb(e))
    });
    var kx = fe(le),
        lx;
    lx = new ce(function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) le(a, b[f], c, d, e)
    });
    var mx = fe(function(a, b, c) {
        b = Cc(b);
        null != b && (b = parseInt(b, 10), he(a.j, 8 * c), Jw(a.j, b))
    });
    var me = void 0;
    var pq = function(a) {
        this.G = _.z(a)
    };
    _.T(pq, _.A);
    var qq = function(a) {
        this.G = _.z(a)
    };
    _.T(qq, _.A);
    var nx = function(a) {
            this.j = a.v;
            this.v = a.m;
            this.H = a.H;
            this.yd = a.yd;
            this.A = a.A;
            this.Rc = a.Rc;
            this.xe = a.xe;
            this.Ve = a.Ve;
            this.we = a.we;
            this.m = a.j
        },
        ox = function(a, b, c) {
            this.v = a;
            this.m = b;
            this.H = c;
            this.A = window;
            this.Rc = "env";
            this.xe = "n";
            this.Ve = "0";
            this.we = "1";
            this.j = !0
        };
    ox.prototype.build = function() {
        return new nx(this)
    };
    var Bq = function(a, b) {
        var c = void 0 === _.G(b, 6) ? !0 : _.G(b, 6),
            d, e, f = re(_.vk(b, 2, 0)),
            g = _.M(b, 3);
        a: switch (_.vk(b, 4, 0)) {
            case 1:
                var h = "pt";
                break a;
            case 2:
                h = "cr";
                break a;
            default:
                h = ""
        }
        f = new ox(f, g, h);
        b = null != (e = null == (d = _.xh(b, pq, 5)) ? void 0 : _.M(d, 1)) ? e : "";
        f.yd = b;
        f.j = c;
        f.A = a;
        return f.build()
    };
    var vo = function(a) {
        this.G = _.z(a)
    };
    _.T(vo, _.A);
    vo.prototype.getId = function() {
        return _.M(this, 1)
    };
    var uo = function(a, b) {
            return mj(a, 1, b)
        },
        px = [0, ix];
    var Bo = function(a) {
        this.G = _.z(a)
    };
    _.T(Bo, _.A);
    Bo.prototype.getWidth = function() {
        return _.Sw(this, 1)
    };
    var Ao = function(a, b) {
        return _.ax(a, 1, b)
    };
    Bo.prototype.getHeight = function() {
        return _.Sw(this, 2)
    };
    var zo = function(a, b) {
            return _.ax(a, 2, b)
        },
        qx = [0, gx, gx];
    var rx = [0, ex, hx];
    var so = function(a) {
        this.G = _.z(a)
    };
    _.T(so, _.A);
    var wo = function(a, b) {
            _.Md(a, 4, b, _.Lc)
        },
        to = function(a, b) {
            _.Yg(a, 6, b)
        },
        yo = function(a, b) {
            _.Yg(a, 7, b)
        };
    so.ca = [4];
    var sx = [0, ix, ex, ix, jx, mx, kx, px, kx, qx, ex, kx, rx];
    var Zn = function(a) {
        this.G = _.z(a)
    };
    _.T(Zn, _.A);
    var Yn = function(a, b) {
            return oo(a, 1, b)
        },
        Wn = function(a, b) {
            return nj(a, 4, b)
        },
        Xn = function(a, b) {
            return _.ax(a, 2, b)
        },
        tx = [0, mx, gx, ix, hx];
    var jo = function(a) {
        this.G = _.z(a)
    };
    _.T(jo, _.A);
    var io = function(a, b) {
            return mj(a, 1, b)
        },
        lo = function(a, b) {
            _.mk(a, 2, b)
        },
        go = function(a, b) {
            return oj(a, 3, so, b)
        },
        ho = function(a, b) {
            return oo(a, 4, b)
        };
    jo.prototype.th = function() {
        return _.vk(this, 7, 0)
    };
    jo.ca = [10, 3];
    var ux = [0, ix, ex, lx, sx, mx, kx, tx, hx, mx, jx, 3];
    var vx = function(a) {
        this.G = _.z(a)
    };
    _.T(vx, _.A);
    var wx = [0, mx, hx];
    var xx = function(a) {
        this.G = _.z(a)
    };
    _.T(xx, _.A);
    var fo = function(a, b) {
            return Qd(a, 2, jo, b)
        },
        qo = function(a, b) {
            _.Yg(a, 5, b)
        },
        yx = function(a, b) {
            _.Yg(a, 9, b)
        };
    xx.ca = [2];
    var zx = [0, mx, lx, ux, mx, ix, kx, tx, ix, hx, gx, kx, wx];
    var Ax = function(a) {
        this.G = _.z(a)
    };
    _.T(Ax, _.A);
    var Bx = function(a) {
        var b = new xx;
        b = oo(b, 1, 1);
        return Qd(a, 1, xx, b)
    };
    Ax.ca = [1];
    Ax.prototype.j = pe([0, lx, zx]);
    var Cx = function(a) {
        this.G = _.z(a)
    };
    _.T(Cx, _.A);
    var Vw = [2, 3];
    var Dx = function(a) {
        this.G = _.z(a)
    };
    _.T(Dx, _.A);
    Dx.ca = [1];
    var Ex = function(a) {
        this.G = _.z(a)
    };
    _.T(Ex, _.A);
    Ex.ca = [1];
    var hj = function(a) {
        this.G = _.z(a)
    };
    _.T(hj, _.A);
    var jj = [2, 3];
    var Fx = function(a) {
        this.G = _.z(a)
    };
    _.T(Fx, _.A);
    Fx.ca = [2];
    var Gx = function(a) {
        this.G = _.z(a)
    };
    _.T(Gx, _.A);
    Gx.ca = [6, 4];
    var Hx = function(a) {
        this.G = _.z(a)
    };
    _.T(Hx, _.A);
    Hx.ca = [4, 5];
    var Ix = function(a) {
        this.G = _.z(a)
    };
    _.T(Ix, _.A);
    var Jx = function(a) {
        this.G = _.z(a)
    };
    _.T(Jx, _.A);
    Jx.prototype.ve = function() {
        return Cr(this, Ix, 2)
    };
    Jx.ca = [1];
    var Kx = function(a) {
        this.G = _.z(a)
    };
    _.T(Kx, _.A);
    var Lx = function(a) {
        this.G = _.z(a)
    };
    _.T(Lx, _.A);
    Lx.ca = [1];
    var Mx = function(a) {
        this.G = _.z(a)
    };
    _.T(Mx, _.A);
    var Nx = [0, mx, ex];
    var Ox = function(a) {
        this.G = _.z(a)
    };
    _.T(Ox, _.A);
    var Px = [0, dx];
    var Qx = function(a) {
        this.G = _.z(a)
    };
    _.T(Qx, _.A);
    Qx.prototype.getEscapedQemQueryId = function() {
        return _.M(this, 1)
    };
    var Rx = [0, ix, kx, Px, kx, Nx];
    var Sx = function(a) {
        this.G = _.z(a)
    };
    _.T(Sx, _.A);
    Sx.prototype.getAdUnitPath = function() {
        return _.M(this, 1)
    };
    var Tx = function(a) {
        this.G = _.z(a)
    };
    _.T(Tx, _.A);
    Tx.ca = [5];
    _.Ux = function(a) {
        this.G = _.z(a)
    };
    _.T(_.Ux, _.A);
    _.Vx = function(a) {
        return Ah(a, Tx, 15)
    };
    _.Ux.prototype.md = da(0);
    _.Ux.prototype.nd = da(1);
    _.Ux.prototype.ue = da(2);
    _.Ux.ca = [15];
    var Wx = function(a) {
        this.G = _.z(a)
    };
    _.T(Wx, _.A);
    Wx.prototype.getAdUnitPath = function() {
        return _.M(this, 2)
    };
    var Xx = function(a) {
        this.G = _.z(a)
    };
    _.T(Xx, _.A);
    var Yx = [5, 7, 8, 9];
    var Zx = function(a) {
        this.G = _.z(a)
    };
    _.T(Zx, _.A);
    Zx.ca = [4, 5, 6];
    var $x = function(a) {
        this.G = _.z(a)
    };
    _.T($x, _.A);
    $x.prototype.getValue = function() {
        return _.M(this, 2)
    };
    $x.prototype.Ef = function() {
        return null != _.rj(this, 2)
    };
    var ay = function(a) {
        this.G = _.z(a)
    };
    _.T(ay, _.A);
    ay.ca = [13];
    var by = function(a) {
        this.G = _.z(a)
    };
    _.T(by, _.A);
    by.ca = [15, 13];
    var cy = function(a) {
        this.G = _.z(a)
    };
    _.T(cy, _.A);
    var dy = function(a) {
            var b = new cy;
            return oo(b, 1, a)
        },
        ey = [0, mx];
    var pj = function(a) {
        this.G = _.z(a)
    };
    _.T(pj, _.A);
    var lj = function(a) {
            var b = new pj;
            return mj(b, 1, a)
        },
        fy = function(a) {
            var b = window.Date.now();
            b = _.y(Number, "isFinite").call(Number, b) ? Math.round(b) : 0;
            return _.mk(a, 3, b)
        };
    pj.prototype.fb = function(a) {
        return _.Yg(this, 10, a)
    };
    var gy = qe(pj),
        hy = [0, ix, ix, ex, gx, gx, gx, ex, cx, hx, kx, ey, hx];
    var iy = [0, fx, fx, fx];
    var jy = [0, kx, 2, iy, kx, iy, ix, ix, hx, kx, [0, mx, 4, ix], ex];
    var ky = function(a) {
        this.G = _.z(a)
    };
    _.T(ky, _.A);
    ky.ca = [1, 2];
    ky.prototype.j = pe([0, lx, jy, lx, hy]);
    var ly = function(a) {
        this.G = _.z(a)
    };
    _.T(ly, _.A);
    ly.prototype.getValue = function() {
        return _.rj(this, 1)
    };
    ly.prototype.Ef = function() {
        return null != _.rj(this, 1)
    };
    ly.prototype.getVersion = function() {
        return no(this, 5)
    };
    var my = function(a) {
        this.G = _.z(a)
    };
    _.T(my, _.A);
    var ny = function(a) {
        this.G = _.z(a)
    };
    _.T(ny, _.A);
    var oy = function(a) {
        this.G = _.z(a)
    };
    _.T(oy, _.A);
    var py = function(a) {
        this.G = _.z(a)
    };
    _.T(py, _.A);
    py.prototype.getAdUnitPath = function() {
        return _.M(this, 1)
    };
    var Ar = function(a) {
        this.G = _.z(a)
    };
    _.T(Ar, _.A);
    Ar.prototype.getContentUrl = function() {
        return _.M(this, 2)
    };
    var qy = function(a) {
        this.G = _.z(a)
    };
    _.T(qy, _.A);
    qy.prototype.getEscapedQemQueryId = function() {
        return _.M(this, 4)
    };
    qy.ca = [2];
    var ry = function(a) {
        this.G = _.z(a)
    };
    _.T(ry, _.A);
    var sy = function(a) {
        this.G = _.z(a)
    };
    _.T(sy, _.A);
    var ty = function(a) {
        this.G = _.z(a)
    };
    _.T(ty, _.A);
    var uy = function(a) {
        this.G = _.z(a)
    };
    _.T(uy, _.A);
    var vy = function(a) {
        this.G = _.z(a)
    };
    _.T(vy, _.A);
    vy.prototype.getEscapedQemQueryId = function() {
        return _.M(this, 2)
    };
    var wy = function(a) {
        this.G = _.z(a)
    };
    _.T(wy, _.A);
    var xy = function(a) {
        this.G = _.z(a)
    };
    _.T(xy, _.A);
    var yy = function(a) {
        return Cr(a, vy, 5)
    };
    xy.prototype.getWidth = function() {
        return _.Sw(this, 9)
    };
    xy.prototype.getHeight = function() {
        return _.Sw(this, 10)
    };
    xy.ca = [3, 7, 27, 11];
    var zy = function(a) {
        this.G = _.z(a)
    };
    _.T(zy, _.A);
    zy.prototype.getHeight = function() {
        return Bp(this, 6)
    };
    zy.prototype.getWidth = function() {
        return Bp(this, 7)
    };
    zy.prototype.getEscapedQemQueryId = function() {
        return _.rj(this, 34)
    };
    zy.ca = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63, 67];
    var Ay = [39, 48];
    var By = function(a) {
        this.G = _.z(a)
    };
    _.T(By, _.A);
    var nq = qe(By);
    var Cy = function(a) {
        this.G = _.z(a)
    };
    _.T(Cy, _.A);
    var Dy = qe(Cy);
    Cy.ca = [1, 2, 3];
    var Ey = window;
    var Rt = function(a) {
        this.G = _.z(a)
    };
    _.T(Rt, _.A);
    Rt.ca = [15];
    var Qt = function(a) {
        this.G = _.z(a)
    };
    _.T(Qt, _.A);
    Qt.prototype.getCorrelator = function() {
        return _.Ze(this, 1)
    };
    Qt.prototype.setCorrelator = function(a) {
        return _.Vg(this, 1, a)
    };
    var Pt = function(a) {
        this.G = _.z(a)
    };
    _.T(Pt, _.A);
    var Fy = _.gw || jw;
    var Hy, Iy;
    _.Gy = pi(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.Rv(Wv);
        return !b.parentElement
    });
    Hy = function(a, b) {
        b = b instanceof _.Ra ? b : _.yv(b);
        a.href = _.Sa(b)
    };
    Iy = /^[\w+/_-]+[=]{0,2}$/;
    _.qp = function(a, b) {
        b = (b || _.q).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && Iy.test(a) ? a : "" : ""
    };
    _.Nh = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.Nh.prototype.equals = function(a) {
        return a instanceof _.Nh && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    _.Nh.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.Nh.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.Nh.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.Rh = function(a, b) {
        this.width = a;
        this.height = b
    };
    _.aa = _.Rh.prototype;
    _.aa.aspectRatio = function() {
        return this.width / this.height
    };
    _.aa.isEmpty = function() {
        return !(this.width * this.height)
    };
    _.aa.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.aa.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.aa.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Jy, Ky, My;
    Jy = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };
    Ky = 2147483648 * Math.random() | 0;
    _.Ly = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    My = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var Oe, Qy, Py, Ty, Vy, $y;
    Oe = function(a) {
        return a ? new _.Ny(_.Oy(a)) : Pu || (Pu = new _.Ny)
    };
    Qy = function(a, b) {
        Aa(b, function(c, d) {
            c && "object" == typeof c && c.nb && (c = c.Ya());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Py.hasOwnProperty(d) ? a.setAttribute(Py[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    Py = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.Sy = function(a) {
        a = a.document;
        a = _.Ry(a) ? a.documentElement : a.body;
        return new _.Rh(a.clientWidth, a.clientHeight)
    };
    Ty = function(a) {
        return a.scrollingElement ? a.scrollingElement : !jw && _.Ry(a) ? a.documentElement : a.body || a.documentElement
    };
    _.Uy = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    Vy = function(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!_.ua(f) || _.na(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.na(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                _.$u(g ? ka(f) : f, d)
            }
        }
    };
    _.Wy = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.Ry = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.Xy = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.Yy = function(a) {
        var b;
        if (Fy && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.na(b) && 1 == b.nodeType ? b : null
    };
    _.Zy = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    _.Oy = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    $y = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.Uy(a.contentDocument) : null)
        } catch (b) {}
        return null
    };
    _.Jg = function(a, b, c, d) {
        a && !c && (a = a.parentNode);
        for (c = 0; a && (null == d || c <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    };
    _.Ny = function(a) {
        this.j = a || _.q.document || document
    };
    _.aa = _.Ny.prototype;
    _.aa.Pj = function(a) {
        return "string" === typeof a ? this.j.getElementById(a) : a
    };
    _.aa.xl = _.Ny.prototype.Pj;
    _.aa.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    _.aa.createElement = function(a) {
        return _.Wy(this.j, a)
    };
    _.aa.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };
    _.aa.append = function(a, b) {
        Vy(_.Oy(a), a, arguments)
    };
    _.aa.Ri = _.Xy;
    _.aa.contains = _.Zy;
    var bz = function() {
            return Ha && Ia ? Ia.mobile : !az() && (La("iPod") || La("iPhone") || La("Android") || La("IEMobile"))
        },
        az = function() {
            return Ha && Ia ? !Ia.mobile && (La("iPad") || La("Android") || La("Silk")) : La("iPad") || La("Android") && !La("Mobile") || La("Silk")
        };
    var dz, Rl, ez, on;
    _.cz = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    dz = function(a) {
        return a ? decodeURI(a) : a
    };
    Rl = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Rl(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    _.wq = function(a, b) {
        var c = [];
        for (d in b) Rl(d, b[d], c);
        b = c.join("&");
        if (b) {
            c = a.indexOf("#");
            0 > c && (c = a.length);
            var d = a.indexOf("?");
            if (0 > d || d > c) {
                d = c;
                var e = ""
            } else e = a.substring(d + 1, c);
            a = [a.slice(0, d), e, a.slice(c)];
            c = a[1];
            a[1] = b ? c ? c + "&" + b : b : c;
            a = a[0] + (a[1] ? "?" + a[1] : "") + a[2]
        }
        return a
    };
    ez = /#|$/;
    on = function(a, b) {
        var c = a.search(ez);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };
    var zk, Jj, fz, Kj, qi, wn, Xt, hz, iz, ri, jz, kz, lz, mz, nz, oz, pz, qz, rz, Vi, Xi, Wi, Nn, sz, uz, vz, wz, xz, yz, zz, Mm, Dm, Az, Wl, Bz, Cz;
    _.bk = function(a) {
        try {
            return !!a && null != a.location.href && ew(a, "foo")
        } catch (b) {
            return !1
        }
    };
    zk = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.q : d;
        c = (void 0 === c ? 0 : c) ? fz(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !_.bk(c) || !a(c));) c = fz(c)
    };
    Jj = function() {
        var a = window;
        zk(function(b) {
            a = b;
            return !1
        });
        return a
    };
    fz = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    Kj = function(a) {
        return _.bk(a.top) ? a.top : null
    };
    _.mn = function(a, b) {
        var c = _.Me("SCRIPT", a);
        Za(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    qi = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    _.yf = function() {
        if (!_.t.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            _.t.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.Ul = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    _.gz = function(a) {
        var b = [];
        _.Ul(a, function(c) {
            b.push(c)
        });
        return b
    };
    wn = function(a, b) {
        return Ca(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    _.zf = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    _.Yt = pi(function() {
        return _.Hg(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], hz) || 1E-4 > Math.random()
    });
    Xt = pi(function() {
        return hz("MSIE")
    });
    hz = function(a) {
        return _.Ja(Ga(), a)
    };
    iz = /^([0-9.]+)px$/;
    ri = function(a) {
        return (a = iz.exec(a)) ? +a[1] : null
    };
    jz = function() {
        var a = window;
        try {
            for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !0;
                case "http:":
                    return !1
            }
        } catch (c) {}
        return !0
    };
    kz = function(a) {
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    lz = {
        Bl: "allow-forms",
        Cl: "allow-modals",
        Dl: "allow-orientation-lock",
        El: "allow-pointer-lock",
        Fl: "allow-popups",
        Gl: "allow-popups-to-escape-sandbox",
        Hl: "allow-presentation",
        Il: "allow-same-origin",
        Jl: "allow-scripts",
        Kl: "allow-top-navigation",
        Ll: "allow-top-navigation-by-user-activation"
    };
    mz = pi(function() {
        return _.gz(lz)
    });
    nz = function(a) {
        var b = mz();
        return a.length ? _.Ag(b, function(c) {
            return !(0 <= _.ia(a, c))
        }) : b
    };
    oz = function() {
        var a = _.Me("IFRAME"),
            b = {};
        _.$u(mz(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    pz = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && _.Ja(a, "[native code]")
    };
    qz = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = fz(a))) break
        }
        return null
    };
    rz = function(a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document,
                c = b.head,
                d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.Me("IFRAME");
                f.name = "google_ads_top_frame";
                f.id = "google_ads_top_frame";
                f.style.display = "none";
                f.style.position = "fixed";
                f.style.left = "-999px";
                f.style.top = "-999px";
                f.style.width = "0px";
                f.style.height = "0px";
                e.appendChild(f);
                return f
            }
        } catch (g) {}
        return null
    };
    _.Rn = pi(function() {
        return bz() ? 2 : az() ? 1 : 0
    });
    Vi = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.Bi = function(a, b) {
        _.Ul(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    Xi = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    Wi = function(a, b) {
        for (var c = 100; a && c--;) {
            var d = qi(a, window);
            if (d) {
                if (b(d, a)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    Nn = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.av(a, parseFloat)
    };
    sz = {};
    _.tz = (sz["http://googleads.g.doubleclick.net"] = !0, sz["http://pagead2.googlesyndication.com"] = !0, sz["https://googleads.g.doubleclick.net"] = !0, sz["https://pagead2.googlesyndication.com"] = !0, sz);
    uz = function(a) {
        _.q.console && _.q.console.warn && _.q.console.warn(a)
    };
    vz = [];
    wz = function() {
        var a = vz;
        vz = [];
        a = _.w(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    xz = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    yz = function() {
        var a = void 0 === a ? Math.random : a;
        return Math.floor(a() * Math.pow(2, 52))
    };
    _.qh = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: yz(),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    zz = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (vz.push(b), 1 == vz.length && (_.t.Promise ? _.t.Promise.resolve().then(wz) : window.setImmediate ? setImmediate(wz) : setTimeout(wz, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    Mm = function(a) {
        return "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    Dm = function(a) {
        return 0 === a || Mm(a)
    };
    Az = function(a) {
        return new _.t.Promise(function(b) {
            setTimeout(function() {
                return void b(void 0)
            }, a)
        })
    };
    Wl = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    };
    _.Me = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    Bz = function(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, _.bk(a) && (b = a);
        return b
    };
    _.ig = function(a) {
        return Na() && bz() ? Cz(a) : 1
    };
    Cz = function(a, b) {
        var c = (void 0 === b ? 0 : b) ? Kj(a) : a;
        if (!c) return 1;
        a = 0 === (0, _.Rn)();
        b = !!c.document.querySelector('meta[name=viewport][content*="width=device-width"]');
        var d = c.innerWidth;
        c = c.outerWidth;
        return 0 === d ? 1 : a || b ? Math.round(100 * (c / d + _.y(Number, "EPSILON"))) / 100 : Math.round(100 * (c / d / .4 + _.y(Number, "EPSILON"))) / 100
    };
    _.Dz = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.Dz.prototype.getWidth = function() {
        return this.right - this.left
    };
    _.Dz.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    _.Ez = function(a) {
        return new _.Dz(a.top, a.right, a.bottom, a.left)
    };
    _.Dz.prototype.contains = function(a) {
        return this && a ? a instanceof _.Dz ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.Dz.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.Dz.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.Dz.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Fz = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        Gz = function(a) {
            return new _.Dz(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        Hz = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new Fz(c, e, d - c, a - e)
            }
            return null
        };
    Fz.prototype.contains = function(a) {
        return a instanceof _.Nh ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    Fz.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Fz.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Fz.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Iz = function(a) {
        return (a = void 0 === a ? se() : a) ? _.bk(a.master) ? a.master : null : null
    };
    var Lz, Nz, Qh, Oz, Pz, Mh, ep;
    _.Kz = function(a, b, c) {
        if ("string" === typeof b)(b = _.Jz(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.Jz(c, d);
                f && (c.style[f] = e)
            }
    };
    Lz = {};
    _.Jz = function(a, b) {
        var c = Lz[b];
        if (!c) {
            var d = _.Ly(b);
            c = d;
            void 0 === a.style[d] && (d = (jw ? "Webkit" : iw ? "Moz" : _.gw ? "ms" : null) + My(d), void 0 !== a.style[d] && (c = d));
            Lz[b] = c
        }
        return c
    };
    _.Mz = function(a, b) {
        var c = _.Oy(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    Nz = function(a, b) {
        return _.Mz(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    Qh = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    };
    Oz = function(a) {
        if (_.gw && !(8 <= Number(sw))) return a.offsetParent;
        var b = _.Oy(a),
            c = Nz(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = Nz(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    Pz = function(a) {
        var b = _.Oy(a),
            c = new _.Nh(0, 0);
        var d = b ? _.Oy(b) : document;
        d = !_.gw || 9 <= Number(sw) || _.Ry(Oe(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = Qh(a);
        d = Oe(b).j;
        b = Ty(d);
        d = d.parentWindow || d.defaultView;
        b = _.gw && d.pageYOffset != b.scrollTop ? new _.Nh(b.scrollLeft, b.scrollTop) : new _.Nh(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    Mh = function(a, b) {
        var c = new _.Nh(0, 0),
            d = _.Uy(_.Oy(a));
        if (!ew(d, "parent")) return c;
        do {
            var e = d == b ? Pz(a) : _.Qz(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.Qz = function(a) {
        a = Qh(a);
        return new _.Nh(a.left, a.top)
    };
    _.Rz = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.Ph = function(a, b) {
        if ("none" != Nz(b, "display")) return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.Sz = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = jw && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Qh(a), new _.Rh(a.right - a.left, a.bottom - a.top)) : new _.Rh(b, c)
    };
    ep = function(a, b) {
        a.style.display = b ? "" : "none"
    };
    var Si = function(a) {
        a = Iz(se(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    var Tz = function(a) {
        this.G = _.z(a)
    };
    _.T(Tz, _.A);
    var Uz = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var Vz = function(a) {
        this.G = _.z(a)
    };
    _.T(Vz, _.A);
    Vz.prototype.getVersion = function() {
        return _.Sw(this, 2)
    };
    Vz.ca = [3];
    var Wz = function(a) {
        this.G = _.z(a)
    };
    _.T(Wz, _.A);
    var Xz = function(a) {
        this.G = _.z(a)
    };
    _.T(Xz, _.A);
    var Yz = function(a) {
        this.G = _.z(a)
    };
    _.T(Yz, _.A);
    Yz.prototype.getVersion = function() {
        return _.Sw(this, 1)
    };
    var Zz = function(a) {
        this.G = _.z(a)
    };
    _.T(Zz, _.A);
    var $z = function(a) {
        this.G = _.z(a)
    };
    _.T($z, _.A);
    var aA = function(a) {
        var b = new $z;
        return _.Yg(b, 1, a)
    };
    var bA = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        cA = bA.reduce(function(a, b) {
            return a + b
        });
    var dA = function(a) {
        this.G = _.z(a)
    };
    _.T(dA, _.A);
    var eA = function(a) {
        this.G = _.z(a)
    };
    _.T(eA, _.A);
    eA.prototype.getVersion = function() {
        return _.Sw(this, 1)
    };
    var fA = function(a) {
        this.G = _.z(a)
    };
    _.T(fA, _.A);
    var gA = function(a) {
        this.G = _.z(a)
    };
    _.T(gA, _.A);
    var hA = function(a) {
        var b = new gA;
        return _.Yg(b, 1, a)
    };
    var iA = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        jA = iA.reduce(function(a, b) {
            return a + b
        });
    var kA = function(a) {
        this.G = _.z(a)
    };
    _.T(kA, _.A);
    var lA = function(a) {
        this.G = _.z(a)
    };
    _.T(lA, _.A);
    var mA = function(a) {
        this.G = _.z(a)
    };
    _.T(mA, _.A);
    mA.prototype.getVersion = function() {
        return _.Sw(this, 1)
    };
    var nA = function(a) {
        this.G = _.z(a)
    };
    _.T(nA, _.A);
    var oA = function(a) {
        this.G = _.z(a)
    };
    _.T(oA, _.A);
    var pA = function(a) {
        var b = new oA;
        return _.Yg(b, 1, a)
    };
    var qA = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        rA = qA.reduce(function(a, b) {
            return a + b
        });
    var sA = function(a) {
        this.G = _.z(a)
    };
    _.T(sA, _.A);
    var tA = function(a) {
        this.G = _.z(a)
    };
    _.T(tA, _.A);
    tA.prototype.getVersion = function() {
        return _.Sw(this, 1)
    };
    var uA = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        vA = uA.reduce(function(a, b) {
            return a + b
        });
    var wA = function(a) {
        this.G = _.z(a)
    };
    _.T(wA, _.A);
    var xA = function(a, b) {
        if (_.t.globalThis.fetch) _.t.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var yA = function(a) {
        this.G = _.z(a)
    };
    _.T(yA, _.A);
    var zA = function(a) {
        this.G = _.z(a)
    };
    _.T(zA, _.A);
    var hh = function(a) {
        this.G = _.z(a)
    };
    _.T(hh, _.A);
    var ah = function(a) {
        this.G = _.z(a)
    };
    _.T(ah, _.A);
    var $g = function(a) {
        this.G = _.z(a)
    };
    _.T($g, _.A);
    var Xg = function(a) {
        this.G = _.z(a)
    };
    _.T(Xg, _.A);
    var AA = function(a) {
        this.G = _.z(a)
    };
    _.T(AA, _.A);
    var Ug = function(a) {
        this.G = _.z(a)
    };
    _.T(Ug, _.A);
    Ug.prototype.getTagSessionCorrelator = function() {
        return _.Ze(this, 2)
    };
    Ug.ca = [4];
    var eh = [6, 7, 8, 9, 11];
    var th = function(a) {
        this.G = _.z(a)
    };
    _.T(th, _.A);
    th.ca = [3];
    var rh = function(a) {
        this.G = _.z(a)
    };
    _.T(rh, _.A);
    rh.ca = [4, 5];
    var ph = function(a) {
        this.G = _.z(a)
    };
    _.T(ph, _.A);
    ph.prototype.getTagSessionCorrelator = function() {
        return _.Ze(this, 1)
    };
    ph.ca = [2];
    var oh = function(a) {
        this.G = _.z(a)
    };
    _.T(oh, _.A);
    var wh = [4, 6];
    _.U = function() {
        this.H = this.H;
        this.sa = this.sa
    };
    _.U.prototype.H = !1;
    _.U.prototype.va = function() {
        this.H || (this.H = !0, this.v())
    };
    _.S = function(a, b) {
        _.ap(a, _.Ou(Le, b))
    };
    _.ap = function(a, b) {
        a.H ? b() : (a.sa || (a.sa = []), a.sa.push(b))
    };
    _.U.prototype.v = function() {
        if (this.sa)
            for (; this.sa.length;) this.sa.shift()()
    };
    var BA = function(a, b, c, d, e, f, g, h) {
            this.L = c;
            this.o = d;
            this.C = e;
            this.l = f;
            this.I = g;
            this.m = h;
            this.j = [];
            this.v = null;
            this.B = !1;
            c = new wA;
            a = _.I(c, 1, a);
            b = _.Wg(a, 2, b);
            this.H = _.wd(b)
        },
        CA = function(a) {
            null !== a.v && (clearTimeout(a.v), a.v = null);
            if (a.j.length) {
                var b = He(a.j, a.H);
                a.o(a.L + "?e=1", b);
                a.j = []
            }
        };
    BA.prototype.tg = function() {
        var a = _.gb.apply(0, arguments),
            b = this;
        this.I && 65536 <= He(this.j.concat(a), this.H).length && CA(this);
        this.m && !this.B && (this.B = !0, DA(this.m, function() {
            CA(b)
        }));
        this.j.push.apply(this.j, _.Ie(a));
        this.j.length >= this.l && CA(this);
        this.j.length && null === this.v && (this.v = setTimeout(function() {
            CA(b)
        }, this.C))
    };
    var au = function(a, b, c, d, e, f) {
        BA.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", xA, void 0 === c ? 1E3 : c, void 0 === d ? 100 : d, (void 0 === e ? !1 : e) && !!_.t.globalThis.fetch, f)
    };
    _.T(au, BA);
    var FA, HA;
    _.EA = function(a, b) {
        this.j = a;
        this.defaultValue = void 0 === b ? !1 : b
    };
    FA = function(a, b) {
        this.j = a;
        this.defaultValue = void 0 === b ? 0 : b
    };
    _.GA = function(a, b) {
        this.j = a;
        this.defaultValue = void 0 === b ? "" : b
    };
    HA = function(a) {
        var b = void 0 === b ? [] : b;
        this.j = a;
        this.defaultValue = b
    };
    var Es, Ji, IA, Ys, JA, xo, KA, LA, Un, MA, NA, It, Ht, Nt, OA, PA, QA, wt, RA, SA, TA, UA, VA, WA, XA, YA, ZA, $A, aB, kq, bB, Xm, cB, Yf, Ft, Eo, jh, kB, lB, lt, Ip, mB, nB, oB, pB, qB, rB, Vq, sB, tB, uB, vB, Ql, rl, wB, Ct, zB, AB, BB, Lm, CB, DB, $t, ik, EB, FB, GB, HB, Wq, hk, IB, JB, Yr, KB, Ms, LB, MB, NB, Lr, OB, PB, QB, RB, SB, TB, Tt, Ut, UB, Vt, St, VB, WB, Js, XB, YB;
    Es = new _.EA(573938410);
    Ji = new FA(7, .1);
    IA = new _.EA(212);
    Ys = new _.EA(561472260, !0);
    JA = new _.EA(561694963);
    xo = new FA(474069761);
    KA = new _.EA(566696260, !0);
    LA = new FA(462420536);
    Un = new _.EA(476475256);
    MA = new FA(427198696, 1);
    NA = new FA(438663674);
    It = new FA(45409629);
    Ht = new FA(522348973);
    Nt = new FA(550605190);
    OA = new FA(564509649);
    _.Wo = new _.EA(571050247);
    _.Po = new _.EA(570864697);
    PA = new _.EA(558225291);
    QA = new _.EA(542047475, !0);
    wt = new _.EA(566985317, !0);
    RA = new FA(494575051);
    SA = new HA(489560439);
    TA = new HA(505762507);
    UA = new _.EA(453);
    VA = new _.EA(454);
    WA = new FA(377289019, 1E4);
    XA = new FA(529, 20);
    YA = new _.GA(10);
    ZA = new _.EA(489217043);
    $A = new _.EA(549005203, !0);
    aB = new _.EA(495013820);
    kq = new FA(447000223, .01);
    bB = new _.EA(360245597, !0);
    Xm = new _.EA(540043576);
    cB = new _.EA(471855283);
    Yf = new _.EA(465118388);
    Ft = new _.EA(45401686);
    Eo = new _.EA(45401685, !0);
    _.dB = new _.EA(479390945);
    _.eB = new _.EA(518650310);
    _.fB = new _.EA(551365509, !0);
    _.gB = new _.EA(547020083);
    _.hB = new _.EA(561164161);
    _.iB = new FA(550718589, 250);
    _.jB = new _.EA(531615531);
    jh = new _.EA(85);
    kB = new _.EA(547249510);
    lB = new _.EA(537116804);
    lt = new _.EA(524098256);
    Ip = new FA(532520346, 120);
    mB = new _.EA(557870754, !0);
    nB = new FA(553562174, 10);
    oB = new HA(466086960);
    pB = new FA(398776877, 6E4);
    qB = new FA(374201269, 6E4);
    rB = new FA(371364213, 6E4);
    Vq = new _.EA(570072701);
    sB = new _.EA(563750809);
    tB = new _.EA(453275889);
    uB = new _.EA(377936516, !0);
    vB = new FA(24);
    Ql = new HA(1);
    rl = new _.GA(2, "1-0-40");
    wB = new _.EA(563212304, !0);
    _.xB = new FA(506394061, 100);
    _.yB = new _.EA(526684968, !0);
    Ct = new HA(489);
    zB = new _.EA(392065905);
    AB = new FA(360245595, 500);
    BB = new _.EA(561985307);
    Lm = new _.EA(45397804, !0);
    CB = new _.EA(45398607, !0);
    DB = new _.EA(424117738);
    $t = new FA(397316938, 1E3);
    ik = new _.EA(531493729);
    EB = new _.EA(563462360, !0);
    FB = new _.EA(555237688);
    GB = new _.EA(555237687);
    HB = new _.EA(555237686);
    Wq = new _.EA(547284348, !0);
    hk = new _.EA(507033477, !0);
    IB = new _.EA(552803605, !0);
    JB = new _.EA(568640849);
    Yr = new _.EA(399705355);
    KB = new _.EA(45420038);
    Ms = new FA(514795754, 2);
    LB = new _.EA(564724551);
    MB = new _.EA(567489814);
    NB = new _.EA(45415915, !0);
    Lr = new _.EA(548203148);
    OB = new _.EA(564852646, !0);
    PB = new _.EA(559881104, !0);
    QB = new _.EA(501);
    RB = new _.EA(439828594);
    SB = new _.EA(483962503);
    TB = new _.EA(506738118);
    Tt = new _.EA(77);
    Ut = new _.EA(78);
    UB = new _.EA(83);
    Vt = new _.EA(80);
    St = new _.EA(76);
    VB = new _.EA(84);
    WB = new _.EA(1958);
    Js = new _.EA(1973);
    XB = new _.EA(188);
    YB = new _.EA(485990406);
    var ZB = new _.EA(1958);
    Ba({
        hm: 0,
        gm: 1,
        cm: 2,
        Xl: 3,
        dm: 4,
        Yl: 5,
        fm: 6,
        am: 7,
        bm: 8,
        Wl: 9,
        Zl: 10,
        im: 11
    }).map(function(a) {
        return Number(a)
    });
    Ba({
        km: 0,
        lm: 1,
        jm: 2
    }).map(function(a) {
        return Number(a)
    });
    var $B = function(a, b) {
        this.j = Qe(a);
        this.v = b
    };
    $B.prototype[_.y(_.t.Symbol, "iterator")] = function() {
        return this
    };
    $B.prototype.next = function() {
        var a = this.j.next();
        return {
            value: a.done ? void 0 : this.v.call(void 0, a.value),
            done: a.done
        }
    };
    var aC = function(a, b) {
            return new $B(a, b)
        },
        bC = function(a) {
            this.v = a;
            this.j = 0
        };
    bC.prototype[_.y(_.t.Symbol, "iterator")] = function() {
        return this
    };
    bC.prototype.next = function() {
        for (; this.j < this.v.length;) {
            var a = this.v[this.j].next();
            if (!a.done) return a;
            this.j++
        }
        return {
            done: !0
        }
    };
    var cC = function() {
        return new bC(_.gb.apply(0, arguments).map(Qe))
    };
    var dC = _.q.URL,
        eC;
    try {
        new dC("http://example.com"), eC = !0
    } catch (a) {
        eC = !1
    }
    var fC = eC,
        gC = function(a) {
            this.j = new _.t.Map;
            0 == a.indexOf("?") && (a = a.substring(1));
            a = _.w(a.split("&"));
            for (var b = a.next(); !b.done; b = a.next()) {
                var c = b.value;
                b = c;
                var d = "";
                c = c.split("=");
                1 < c.length && (b = decodeURIComponent(c[0].replace("+", " ")), d = decodeURIComponent(c[1].replace("+", " ")));
                c = this.j.get(b);
                null == c && (c = [], this.j.set(b, c));
                c.push(d)
            }
        };
    gC.prototype.get = function(a) {
        return (a = this.j.get(a)) && a.length ? a[0] : null
    };
    gC.prototype.getAll = function(a) {
        return [].concat(_.Ie(this.j.get(a) || []))
    };
    gC.prototype.has = function(a) {
        return this.j.has(a)
    };
    gC.prototype[_.y(_.t.Symbol, "iterator")] = function() {
        return cC.apply(null, _.Ie(aC(this.j, function(a) {
            var b = a[0];
            return aC(a[1], function(c) {
                return [b, c]
            })
        })))
    };
    gC.prototype.toString = function() {
        return hC(this)
    };
    var hC = function(a) {
            var b = function(c) {
                return encodeURIComponent(c).replace(/[!()~']|(%20)/g, function(d) {
                    return {
                        "!": "%21",
                        "(": "%28",
                        ")": "%29",
                        "%20": "+",
                        "'": "%27",
                        "~": "%7E"
                    }[d]
                })
            };
            return _.y(Array, "from").call(Array, a, function(c) {
                return b(c[0]) + "=" + b(c[1])
            }).join("&")
        },
        jC = function(a) {
            var b = _.Wy(document, "A");
            try {
                Hy(b, db(a));
                var c = b.protocol
            } catch (e) {
                throw Error(a + " is not a valid URL.");
            }
            if ("" === c || ":" === c || ":" != c[c.length - 1]) throw Error(a + " is not a valid URL.");
            if (!iC.has(c)) throw Error(a + " is not a valid URL.");
            if (!b.hostname) throw Error(a + " is not a valid URL.");
            var d = b.href;
            a = {
                href: d,
                protocol: b.protocol,
                username: "",
                password: "",
                hostname: b.hostname,
                pathname: "/" + b.pathname,
                search: b.search,
                hash: b.hash,
                toString: function() {
                    return d
                }
            };
            iC.get(b.protocol) === b.port ? (a.host = a.hostname, a.port = "", a.origin = a.protocol + "//" + a.hostname) : (a.host = b.host, a.port = b.port, a.origin = a.protocol + "//" + a.hostname + ":" + a.port);
            return a
        },
        Ve = function(a) {
            if (fC) {
                try {
                    var b = new dC(a)
                } catch (d) {
                    throw Error(a + " is not a valid URL.");
                }
                var c = iC.get(b.protocol);
                if (!c) throw Error(a + " is not a valid URL.");
                if (!b.hostname) throw Error(a + " is not a valid URL.");
                "null" == b.origin && (a = {
                    href: b.href,
                    protocol: b.protocol,
                    username: "",
                    password: "",
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    pathname: b.pathname,
                    search: b.search,
                    hash: b.hash
                }, a.origin = c === b.port ? b.protocol + "//" + b.hostname : b.protocol + "//" + b.hostname + ":" + b.port, b = a);
                return b
            }
            return jC(a)
        },
        iC = new _.t.Map([
            ["http:", "80"],
            ["https:", "443"],
            ["ws:", "80"],
            ["wss:", "443"],
            ["ftp:", "21"]
        ]),
        Ue = function(a) {
            return fC && a.searchParams ? a.searchParams : new gC(a.search)
        };
    var kC = function(a) {
        var b = a.document,
            c = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var d = _.Me("IFRAME", b);
                        d.style.display = "none";
                        d.style.width = "0px";
                        d.style.height = "0px";
                        d.style.border = "none";
                        d.style.zIndex = "-1000";
                        d.style.left = "-1000px";
                        d.style.top = "-1000px";
                        d.name = "googlefcPresent";
                        b.body.appendChild(d)
                    } else a.setTimeout(c, 5)
            };
        c()
    };
    var lC = function(a) {
        this.G = _.z(a)
    };
    _.T(lC, _.A);
    lC.ca = [1, 2];
    var mC = function(a) {
        this.G = _.z(a)
    };
    _.T(mC, _.A);
    var Ye = qe(mC);
    var nC = function(a, b, c, d) {
        _.U.call(this);
        this.F = b;
        this.C = c;
        this.L = d;
        this.l = new _.t.Map;
        this.J = 0;
        this.m = new _.t.Map;
        this.o = new _.t.Map;
        this.I = void 0;
        this.B = a
    };
    _.T(nC, _.U);
    nC.prototype.v = function() {
        delete this.j;
        this.l.clear();
        this.m.clear();
        this.o.clear();
        this.I && (_.af(this.B, "message", this.I), delete this.I);
        delete this.B;
        delete this.L;
        _.U.prototype.v.call(this)
    };
    var oC = function(a) {
            if (a.j) return a.j;
            a.C && a.C(a.B) ? a.j = a.B : a.j = qz(a.B, a.F);
            var b;
            return null != (b = a.j) ? b : null
        },
        qC = function(a, b, c) {
            if (oC(a))
                if (a.j === a.B)(b = a.l.get(b)) && b(a.j, c);
                else {
                    var d = a.m.get(b);
                    if (d && d.Gc) {
                        pC(a);
                        var e = ++a.J;
                        a.o.set(e, {
                            tc: d.tc,
                            qj: d.Bd(c),
                            zk: "addEventListener" === b
                        });
                        a.j.postMessage(d.Gc(c, e), "*")
                    }
                }
        },
        pC = function(a) {
            a.I || (a.I = function(b) {
                try {
                    var c = a.L ? a.L(b) : void 0;
                    if (c) {
                        var d = c.jg,
                            e = a.o.get(d);
                        if (e) {
                            e.zk || a.o.delete(d);
                            var f;
                            null == (f = e.tc) || f.call(e, e.qj, c.payload)
                        }
                    }
                } catch (g) {}
            }, _.ib(a.B, "message", a.I))
        };
    var rC = function(a, b) {
            var c = {
                cb: function(d) {
                    d = Ye(d);
                    b.Ib({
                        consentData: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        sC = {
            Bd: function(a) {
                return a.Ib
            },
            Gc: function(a, b) {
                return {
                    __fciCall: {
                        callId: b,
                        command: a.command,
                        spsp: a.spsp || void 0
                    }
                }
            },
            tc: function(a, b) {
                a({
                    consentData: b
                })
            }
        },
        jp = function(a) {
            _.U.call(this);
            this.j = this.m = !1;
            this.caller = new nC(a, "googlefcPresent", void 0, $e);
            this.caller.l.set("getDataWithCallback", rC);
            this.caller.m.set("getDataWithCallback", sC)
        };
    _.T(jp, _.U);
    jp.prototype.v = function() {
        this.caller.va();
        _.U.prototype.v.call(this)
    };
    var tC = function(a) {
            a.m || (a.j = !!oC(a.caller), a.m = !0);
            return a.j
        },
        uC = function(a) {
            return new _.t.Promise(function(b) {
                tC(a) && qC(a.caller, "getDataWithCallback", {
                    command: "loaded",
                    Ib: function(c) {
                        b(c.consentData)
                    }
                })
            })
        },
        vC = function(a, b) {
            tC(a) && qC(a.caller, "getDataWithCallback", {
                command: "prov",
                spsp: pk(b),
                Ib: function() {}
            })
        };
    var wC = function(a, b, c, d, e) {
            bf(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e)
        },
        dj = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            _.Ul(a, function(e, f) {
                if (e || 0 === e) d += "&" + f + "=" + encodeURIComponent("" + e)
            });
            Cq(d, c)
        },
        Cq = function(a, b) {
            var c = window;
            b = void 0 === b ? !1 : b;
            var d = void 0 === d ? !1 : d;
            c.fetch ? (b = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }, d && (b.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? b.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false"
            } : b.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            }), c.fetch(a, b)) : wC(c, a, void 0, b, d)
        };
    var xC = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        yC = function(a, b) {
            b = void 0 === b ? {} : b;
            _.U.call(this);
            this.m = a;
            this.j = null;
            this.l = {};
            this.L = 0;
            var c;
            this.o = null != (c = b.timeoutMs) ? c : 500;
            var d;
            this.I = null != (d = b.Zi) ? d : !1;
            this.B = null
        };
    _.T(yC, _.U);
    yC.prototype.v = function() {
        this.l = {};
        this.B && (_.af(this.m, "message", this.B), delete this.B);
        delete this.l;
        delete this.m;
        delete this.j;
        _.U.prototype.v.call(this)
    };
    var AC = function(a) {
        return "function" === typeof a.m.__tcfapi || null != zC(a)
    };
    yC.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.I
            },
            d = _.Xu(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.o && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.o));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = xC(c), c.internalBlockOnErrors = b.I, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            BC(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    yC.prototype.removeEventListener = function(a) {
        a && a.listenerId && BC(this, "removeEventListener", null, a.listenerId)
    };
    var CC = function(a, b) {
            var c = void 0 === c ? "755" : c;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var d = a.publisher.restrictions[b];
                    if (void 0 !== d) {
                        d = d[void 0 === c ? "755" : c];
                        break a
                    }
                }
                d = void 0
            }
            if (0 === d) return !1;
            a.purpose && a.vendor ? (d = a.vendor.consents, (c = !(!d || !d[void 0 === c ? "755" : c])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
            return b
        },
        BC = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) a = a.m.__tcfapi, a(b, 2, c, d);
            else if (zC(a)) {
                DC(a);
                var e = ++a.L;
                a.l[e] = c;
                a.j && (c = {}, a.j.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        zC = function(a) {
            if (a.j) return a.j;
            a.j = qz(a.m, "__tcfapiLocator");
            return a.j
        },
        DC = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.l[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.ib(a.m, "message", a.B))
        },
        EC = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = xC(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (dj({
                e: String(a.internalErrorState)
            }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        },
        FC = function(a, b) {
            return !1 === a.gdprApplies ? !0 : b.every(function(c) {
                return CC(a, c)
            })
        };
    var GC = function(a, b, c) {
            this.j = a;
            this.m = b;
            this.v = void 0 === c ? function() {} : c
        },
        HC = function(a, b, c) {
            return new GC(a, b, c)
        };
    GC.prototype.start = function(a) {
        if (this.j === this.j.top) try {
            kC(this.j), IC(this, a)
        } catch (b) {}
    };
    var IC = function(a, b) {
            var c = We(a.j),
                d = Xe(a.j),
                e = {};
            c = (e.fc = c, e.fctype = d, e);
            c = JC(a.m, c);
            Pe(a.j, c, function() {
                a.v(!0)
            }, function() {
                a.v(!1)
            });
            b && vC(new jp(a.j), b)
        },
        JC = function(a, b) {
            var c = _.Uu("https://fundingchoicesmessages.google.com/i/%{id}");
            b = _.y(Object, "assign").call(Object, {}, b, {
                ers: 3
            });
            return _.fv(_.qb(c, {
                id: a
            }), b)
        };
    var KC = _.t.Promise;
    var LC = function(a) {
        this.m = a
    };
    LC.prototype.v = function(a, b, c) {
        this.m.then(function(d) {
            d.v(a, b, c)
        })
    };
    LC.prototype.j = function(a, b) {
        return this.m.then(function(c) {
            return c.j(a, b)
        })
    };
    var MC = function(a) {
        this.data = a
    };
    var NC = function(a) {
        this.m = a
    };
    NC.prototype.v = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        OC(d.port1, b);
        this.m.postMessage(a, [d.port2].concat(c))
    };
    NC.prototype.j = function(a, b) {
        var c = this;
        return new KC(function(d) {
            c.v(a, d, b)
        })
    };
    var PC = function(a, b) {
            OC(a, b);
            return new NC(a)
        },
        OC = function(a, b) {
            b && (a.onmessage = function(c) {
                b(new MC(c.data, PC(c.ports[0])))
            })
        };
    var fk = function(a) {
            var b = a.mb,
                c = void 0 === a.sb ? "ZNWN1d" : a.sb,
                d = void 0 === a.onMessage ? void 0 : a.onMessage,
                e = void 0 === a.Ie ? void 0 : a.Ie;
            return QC({
                destination: a.destination,
                th: function() {
                    return b.contentWindow
                },
                rk: RC(a.origin),
                sb: c,
                onMessage: d,
                Ie: e
            })
        },
        QC = function(a) {
            var b = a.destination,
                c = a.th,
                d = a.rk,
                e = void 0 === a.Wb ? void 0 : a.Wb,
                f = a.sb,
                g = void 0 === a.onMessage ? void 0 : a.onMessage,
                h = void 0 === a.Ie ? void 0 : a.Ie,
                k = Object.create(null);
            d.forEach(function(l) {
                k[l] = !0
            });
            return new LC(new KC(function(l, m) {
                var n = function(p) {
                    p.source && p.source === c() && !0 === k[p.origin] && (p.data.n || p.data) === f && (b.removeEventListener("message", n, !1), e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(PC(p.ports[0], g)), h && h(p)))
                };
                b.addEventListener("message", n, !1)
            }))
        },
        RC = function(a) {
            a = "string" === typeof a ? [a] : a;
            var b = Object.create(null);
            a.forEach(function(c) {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var sh = function(a) {
            return "string" === typeof a
        },
        ff = function(a) {
            return !!a && ("object" === typeof a || "function" === typeof a)
        };
    var SC = navigator,
        TC = function(a) {
            var b = 1,
                c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        UC = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return TC(a.toLowerCase())
        },
        VC = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        WC = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        XC = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var Kh = function(a) {
            return !!a && a.top == a
        },
        Bk = function(a, b, c) {
            b = b || a.google_ad_width;
            c = c || a.google_ad_height;
            if (Kh(a)) return !1;
            var d = a.document,
                e = d.documentElement;
            if (b && c) {
                var f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
                if (g > 2 * c || f > 2 * b) return !1
            }
            return !0
        };
    var Mi = function() {
        this.data = [];
        this.j = -1
    };
    Mi.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && _.y(Number, "isInteger").call(Number, a) && this.data[a] !== b && (this.data[a] = b, this.j = -1)
    };
    Mi.prototype.get = function(a) {
        return !!this.data[a]
    };
    var Oi = function(a) {
        -1 === a.j && (a.j = a.data.reduce(function(b, c, d) {
            return b + (c ? Math.pow(2, d) : 0)
        }, 0));
        return a.j
    };
    _.nh = function(a) {
        return !!(a.error && a.meta && a.id)
    };
    var YC = function(a, b) {
            (0, a.__uspapi)("getUSPData", 1, function(c, d) {
                b.Ib({
                    consentData: null != c ? c : void 0,
                    ne: d ? void 0 : 2
                })
            })
        },
        ZC = {
            Bd: function(a) {
                return a.Ib
            },
            Gc: function(a, b) {
                a = {};
                return a.__uspapiCall = {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }, a
            },
            tc: function(a, b) {
                b = b.__uspapiReturn;
                var c;
                a({
                    consentData: null != (c = b.returnValue) ? c : void 0,
                    ne: b.success ? void 0 : 2
                })
            }
        },
        $C = function(a, b) {
            b = void 0 === b ? {} : b;
            _.U.call(this);
            var c;
            this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
            this.caller = new nC(a, "__uspapiLocator", function(d) {
                return "function" === typeof d.__uspapi
            }, hf);
            this.caller.l.set("getDataWithCallback", YC);
            this.caller.m.set("getDataWithCallback", ZC)
        };
    _.T($C, _.U);
    $C.prototype.v = function() {
        this.caller.va();
        _.U.prototype.v.call(this)
    };
    var aD = function(a, b) {
        var c = {};
        if (oC(a.caller)) {
            var d = _.Xu(function() {
                b(c)
            });
            qC(a.caller, "getDataWithCallback", {
                Ib: function(e) {
                    e.ne || (c = e.consentData);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    };
    var bD = function(a, b) {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        cD = function(a, b) {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        dD = function(a, b) {
            (0, a.__gpp)("getSection", function(c) {
                b.Ib({
                    consentData: null != c ? c : void 0,
                    ne: c ? void 0 : 4
                })
            }, b.apiPrefix)
        },
        eD = {
            Bd: function(a) {
                return a.listener
            },
            Gc: function(a, b) {
                a = {};
                return a.__gppCall = {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }, a
            },
            tc: function(a, b) {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        WD = {
            Bd: function(a) {
                return a.listener
            },
            Gc: function(a, b) {
                var c = {};
                return c.__gppCall = {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }, c
            },
            tc: function(a, b) {
                b = b.__gppReturn;
                var c = b.returnValue.data;
                null == a || a(c, b.success)
            }
        },
        XD = {
            Bd: function(a) {
                return a.Ib
            },
            Gc: function(a, b) {
                var c = {};
                return c.__gppCall = {
                    callId: b,
                    command: "getSection",
                    version: "1.1",
                    parameter: a.apiPrefix
                }, c
            },
            tc: function(a, b) {
                b = b.__gppReturn;
                var c;
                a({
                    consentData: null != (c = b.returnValue) ? c : void 0,
                    ne: b.success ? void 0 : 2
                })
            }
        },
        YD = function(a, b) {
            b = void 0 === b ? {} : b;
            _.U.call(this);
            this.caller = new nC(a, "__gppLocator", function(d) {
                return "function" === typeof d.__gpp
            }, jf);
            this.caller.l.set("addEventListener", bD);
            this.caller.m.set("addEventListener", eD);
            this.caller.l.set("removeEventListener", cD);
            this.caller.m.set("removeEventListener", WD);
            this.caller.l.set("getDataWithCallback", dD);
            this.caller.m.set("getDataWithCallback", XD);
            var c;
            this.timeoutMs = null != (c = b.timeoutMs) ? c : 500
        };
    _.T(YD, _.U);
    YD.prototype.v = function() {
        this.caller.va();
        _.U.prototype.v.call(this)
    };
    YD.prototype.addEventListener = function(a) {
        var b = this,
            c = _.Xu(function() {
                a(ZD, !0)
            }),
            d = -1 === this.timeoutMs ? void 0 : setTimeout(function() {
                c()
            }, this.timeoutMs);
        qC(this.caller, "addEventListener", {
            listener: function(e, f) {
                clearTimeout(d);
                try {
                    var g;
                    void 0 === (null == (g = e.pingData) ? void 0 : g.gppVersion) || "1" === e.pingData.gppVersion || "1.0" === e.pingData.gppVersion ? (b.removeEventListener(e.listenerId), a($D, !0)) : a(e, f)
                } catch (h) {
                    a(aE, !0)
                }
            }
        })
    };
    YD.prototype.removeEventListener = function(a) {
        qC(this.caller, "removeEventListener", {
            listenerId: a
        })
    };
    var bE = function(a) {
            var b = Ae(a.split("~")[0] + "A"),
                c = Be(b.slice(0, 6)),
                d = Be(b.slice(6, 12)),
                e = new Vz;
            var f = _.ch(e, 1, c);
            var g = _.ch(f, 2, d);
            for (var h = b.slice(12), k = Be(h.slice(0, 12)), l = [], m = h.slice(12).replace(/0+$/, ""), n = 0; n < k; n++) {
                if (0 === m.length) throw Error("Found " + n + " of " + k + " sections [" + l + "] but reached end of input [" + h + "]");
                var p = 0 === Be(m[0]);
                m = m.slice(1);
                var r = Ge(m, h),
                    v = 0 === l.length ? 0 : l[l.length - 1],
                    u = Fe(r) + v;
                m = m.slice(r.length);
                if (p) l.push(u);
                else {
                    for (var x = Ge(m, h), C = Fe(x), D = 0; D <= C; D++) l.push(u + D);
                    m = m.slice(x.length)
                }
            }
            if (0 < m.length) throw Error("Found " + k + " sections [" + l + "] but has remaining input [" + m + "], entire input [" + h + "]");
            var F = _.Md(g, 3, l, Bc);
            var B = _.y(a, "includes").call(a, "~") ? a.split("~").slice(1) : [];
            for (var J = 0; J < Dd(F, 3, Cc).length; ++J) {
                var R = Dd(F, 3, Cc)[J],
                    O = B[J];
                switch (R) {
                    case 8:
                        if (0 === O.length) throw Error("Cannot decode empty USCA section string");
                        var W = O.split(".");
                        if (2 < W.length) throw Error("Expected at most 1 sub-section but got " + (W.length - 1) + " when decoding " + O);
                        var ba = void 0,
                            ha = void 0,
                            la = void 0,
                            Da = void 0,
                            ya = void 0,
                            Oa = void 0,
                            jb = void 0,
                            Qb = void 0,
                            fc = void 0,
                            Wb = void 0,
                            Fc = void 0,
                            Vc = void 0,
                            Yd = void 0,
                            Gf = void 0,
                            Ce = void 0,
                            De = void 0,
                            Hf = void 0,
                            cc = void 0,
                            sl = void 0,
                            Xh = void 0,
                            tl = void 0,
                            ul = void 0,
                            vl = void 0,
                            qc = Ae(W[0]),
                            If = Be(qc.slice(0, 6));
                        qc = qc.slice(6);
                        if (1 !== If) throw Error("Unable to decode unsupported USCA Section specification version " + If + " - only version 1 is supported.");
                        if (qc.length < cA)
                            if (qc.length + 8 >= cA) qc += "00000000";
                            else throw Error("Expected core segment bitstring minus version plus padding to be at least of length " + cA + " but was " + (qc.length + 8));
                        for (var Jf = 0, cb = [], yb = 0; yb < bA.length; yb++) {
                            var Bg = bA[yb];
                            cb.push(Be(qc.slice(Jf, Jf + Bg)));
                            Jf += Bg
                        }
                        var $h = new Yz;
                        vl = _.ch($h, 1, If);
                        var xl = cb.shift();
                        ul = _.I(vl, 2, xl);
                        var Cg = cb.shift();
                        tl = _.I(ul, 3, Cg);
                        var ai = cb.shift();
                        Xh = _.I(tl, 4, ai);
                        var bi = cb.shift();
                        sl = _.I(Xh, 5, bi);
                        var yl = cb.shift();
                        cc = _.I(sl, 6, yl);
                        var ci = new Xz,
                            di = cb.shift();
                        Hf = _.I(ci, 1, di);
                        var Kf = cb.shift();
                        De = _.I(Hf, 2, Kf);
                        var Dg = cb.shift();
                        Ce = _.I(De, 3, Dg);
                        var ei = cb.shift();
                        Gf = _.I(Ce, 4, ei);
                        var Eg = cb.shift();
                        Yd = _.I(Gf, 5, Eg);
                        var zl = cb.shift();
                        Vc = _.I(Yd, 6, zl);
                        var Al = cb.shift();
                        Fc = _.I(Vc, 7, Al);
                        var Bl = cb.shift();
                        Wb = _.I(Fc, 8, Bl);
                        var Cl = cb.shift();
                        fc = _.I(Wb, 9, Cl);
                        Qb = _.Yg(cc, 7, fc);
                        var Dl = new Wz,
                            Zd = cb.shift();
                        jb = _.I(Dl, 1, Zd);
                        var El = cb.shift();
                        Oa = _.I(jb, 2, El);
                        ya = _.Yg(Qb, 8, Oa);
                        var Wc = cb.shift();
                        Da = _.I(ya, 9, Wc);
                        var Fl = cb.shift();
                        la = _.I(Da, 10, Fl);
                        var iq = cb.shift();
                        ha = _.I(la, 11, iq);
                        var Xc = cb.shift();
                        var fi = ba = _.I(ha, 12, Xc);
                        if (1 === W.length) var gi = aA(fi);
                        else {
                            var Gl = aA(fi),
                                hi = void 0,
                                Hl = void 0,
                                ii = void 0,
                                Ee = Ae(W[1]);
                            if (3 > Ee.length) throw Error("Invalid GPC Segment [" + Ee + "]. Expected length 3, but was " + Ee.length + ".");
                            var Lf = Be(Ee.slice(0, 2));
                            if (0 > Lf || 1 < Lf) throw Error("Attempting to decode unknown GPC segment subsection type " + Lf + ".");
                            ii = Lf + 1;
                            var Il = Be(Ee.charAt(2)),
                                Jl = new Zz;
                            Hl = _.I(Jl, 2, ii);
                            hi = _.bh(Hl, 1, !!Il);
                            gi = _.Yg(Gl, 2, hi)
                        }
                        var ji = _.xh(gi, Yz, 1);
                        if (1 === _.vk(ji, 5, 0) || 1 === _.vk(ji, 6, 0)) return !0;
                        break;
                    case 10:
                        if (0 === O.length) throw Error("Cannot decode empty USCO section string.");
                        var Yc = O.split(".");
                        if (2 < Yc.length) throw Error("Expected at most 2 segments but got " + Yc.length + " when decoding " + O);
                        var sq = void 0,
                            ki = void 0,
                            Xb = void 0,
                            Kl = void 0,
                            li = void 0,
                            mi = void 0,
                            ni = void 0,
                            Ml = void 0,
                            Fg = void 0,
                            Nl = void 0,
                            Ol = void 0,
                            wl = void 0,
                            fD = void 0,
                            gD = void 0,
                            hD = void 0,
                            iD = void 0,
                            jD = void 0,
                            kD = void 0,
                            Re = Ae(Yc[0]),
                            $r = Be(Re.slice(0, 6));
                        Re = Re.slice(6);
                        if (1 !== $r) throw Error("Unable to decode unsupported USCO Section specification version " + $r + " - only version 1 is supported.");
                        if (Re.length < jA)
                            if (Re.length + 8 >= jA) Re += "00000000";
                            else throw Error("Expected core segment bitstring minus version plus padding to be at least of length " + jA + " but was " + (Re.length + 8));
                        for (var as = 0, Tb = [], bs = 0; bs < iA.length; bs++) {
                            var lD = iA[bs];
                            Tb.push(Be(Re.slice(as, as + lD)));
                            as += lD
                        }
                        var sR = new eA;
                        kD = _.ch(sR, 1, $r);
                        var tR = Tb.shift();
                        jD = _.I(kD, 2, tR);
                        var uR = Tb.shift();
                        iD = _.I(jD, 3, uR);
                        var vR = Tb.shift();
                        hD = _.I(iD, 4, vR);
                        var wR = Tb.shift();
                        gD = _.I(hD, 5, wR);
                        var xR = Tb.shift();
                        fD = _.I(gD, 6, xR);
                        var yR = new dA,
                            zR = Tb.shift();
                        wl = _.I(yR, 1, zR);
                        var AR = Tb.shift();
                        Ol = _.I(wl, 2, AR);
                        var BR = Tb.shift();
                        Nl = _.I(Ol, 3, BR);
                        var CR = Tb.shift();
                        Fg = _.I(Nl, 4, CR);
                        var DR = Tb.shift();
                        Ml = _.I(Fg, 5, DR);
                        var ER = Tb.shift();
                        ni = _.I(Ml, 6, ER);
                        var FR = Tb.shift();
                        mi = _.I(ni, 7, FR);
                        li = _.Yg(fD, 7, mi);
                        var GR = Tb.shift();
                        Kl = _.I(li, 8, GR);
                        var HR = Tb.shift();
                        Xb = _.I(Kl, 9, HR);
                        var IR = Tb.shift();
                        ki = _.I(Xb, 10, IR);
                        var JR = Tb.shift();
                        var mD = sq = _.I(ki, 11, JR);
                        if (1 === Yc.length) var nD = hA(mD);
                        else {
                            var KR = hA(mD),
                                oD = void 0,
                                pD = void 0,
                                qD = void 0,
                                Gi = Ae(Yc[1]);
                            if (3 > Gi.length) throw Error("Invalid GPC Segment [" + Gi + "]. Expected length 3, but was " + Gi.length + ".");
                            var vm = Be(Gi.slice(0, 2));
                            if (0 > vm || 1 < vm) throw Error("Attempting to decode unknown GPC segment subsection type " + vm + ".");
                            qD = vm + 1;
                            var LR = Be(Gi.charAt(2)),
                                MR = new fA;
                            pD = _.I(MR, 2, qD);
                            oD = _.bh(pD, 1, !!LR);
                            nD = _.Yg(KR, 2, oD)
                        }
                        var rD = _.xh(nD, eA, 1);
                        if (1 === _.vk(rD, 5, 0) || 1 === _.vk(rD, 6, 0)) return !0;
                        break;
                    case 12:
                        if (0 === O.length) throw Error("Cannot decode empty usct section string.");
                        var Hi = O.split(".");
                        if (2 < Hi.length) throw Error("Expected at most 2 segments but got " + Hi.length + " when decoding " + O);
                        var NR = void 0,
                            sD = void 0,
                            tD = void 0,
                            uD = void 0,
                            vD = void 0,
                            wD = void 0,
                            xD = void 0,
                            yD = void 0,
                            zD = void 0,
                            AD = void 0,
                            BD = void 0,
                            CD = void 0,
                            DD = void 0,
                            ED = void 0,
                            FD = void 0,
                            GD = void 0,
                            HD = void 0,
                            ID = void 0,
                            JD = void 0,
                            KD = void 0,
                            LD = void 0,
                            MD = void 0,
                            Se = Ae(Hi[0]),
                            cs = Be(Se.slice(0, 6));
                        Se = Se.slice(6);
                        if (1 !== cs) throw Error("Unable to decode unsupported USCT Section specification version " + cs + " - only version 1 is supported.");
                        if (Se.length < rA)
                            if (Se.length + 8 >= rA) Se += "00000000";
                            else throw Error("Expected core segment bitstring minus version plus padding to be at least of length " + rA + " but was " + (Se.length + 8));
                        for (var ds = 0, zb = [], es = 0; es < qA.length; es++) {
                            var ND = qA[es];
                            zb.push(Be(Se.slice(ds, ds + ND)));
                            ds += ND
                        }
                        var OR = new mA;
                        MD = _.ch(OR, 1, cs);
                        var PR = zb.shift();
                        LD = _.I(MD, 2, PR);
                        var QR = zb.shift();
                        KD = _.I(LD, 3, QR);
                        var RR = zb.shift();
                        JD = _.I(KD, 4, RR);
                        var SR = zb.shift();
                        ID = _.I(JD, 5, SR);
                        var TR = zb.shift();
                        HD = _.I(ID, 6, TR);
                        var UR = new lA,
                            VR = zb.shift();
                        GD = _.I(UR, 1, VR);
                        var WR = zb.shift();
                        FD = _.I(GD, 2, WR);
                        var YR = zb.shift();
                        ED = _.I(FD, 3, YR);
                        var ZR = zb.shift();
                        DD = _.I(ED, 4, ZR);
                        var $R = zb.shift();
                        CD = _.I(DD, 5, $R);
                        var aS = zb.shift();
                        BD = _.I(CD, 6, aS);
                        var bS = zb.shift();
                        AD = _.I(BD, 7, bS);
                        var cS = zb.shift();
                        zD = _.I(AD, 8, cS);
                        yD = _.Yg(HD, 7, zD);
                        var dS = new kA,
                            eS = zb.shift();
                        xD = _.I(dS, 1, eS);
                        var fS = zb.shift();
                        wD = _.I(xD, 2, fS);
                        var gS = zb.shift();
                        vD = _.I(wD, 3, gS);
                        uD = _.Yg(yD, 8, vD);
                        var hS = zb.shift();
                        tD = _.I(uD, 9, hS);
                        var iS = zb.shift();
                        sD = _.I(tD, 10, iS);
                        var jS = zb.shift();
                        var OD = NR = _.I(sD, 11, jS);
                        if (1 === Hi.length) var PD = pA(OD);
                        else {
                            var kS = pA(OD),
                                QD = void 0,
                                RD = void 0,
                                SD = void 0,
                                Ii = Ae(Hi[1]);
                            if (3 > Ii.length) throw Error("Invalid GPC Segment [" + Ii + "]. Expected length 3, but was " + Ii.length + ".");
                            var wm = Be(Ii.slice(0, 2));
                            if (0 > wm || 1 < wm) throw Error("Attempting to decode unknown GPC segment subsection type " + wm + ".");
                            SD = wm + 1;
                            var lS = Be(Ii.charAt(2)),
                                mS = new nA;
                            RD = _.I(mS, 2, SD);
                            QD = _.bh(RD, 1, !!lS);
                            PD = _.Yg(kS, 2, QD)
                        }
                        var TD = _.xh(PD, mA, 1);
                        if (1 === _.vk(TD, 5, 0) || 1 === _.vk(TD, 6, 0)) return !0;
                        break;
                    case 9:
                        if (0 === O.length) throw Error("Cannot decode empty USVA section string.");
                        var Te = Ae(O),
                            fs = Be(Te.slice(0, 6));
                        Te = Te.slice(6);
                        if (1 !== fs) throw Error("Unable to decode unsupported USVA Section specification version " + fs + " - only version 1 is supported.");
                        if (Te.length < vA)
                            if (Te.length + 8 >= vA) Te += "00000000";
                            else throw Error("Expected bitstring minus version plus padding to be at least of length " + vA + " but was " + (Te.length + 8));
                        for (var gs = 0, Lb = [], hs = 0; hs < uA.length; hs++) {
                            var UD = uA[hs];
                            Lb.push(Be(Te.slice(gs, gs + UD)));
                            gs += UD
                        }
                        var nS = fs,
                            oS = new tA;
                        var pS = _.ch(oS, 1, nS);
                        var qS = Lb.shift();
                        var rS = _.I(pS, 2, qS);
                        var sS = Lb.shift();
                        var tS = _.I(rS, 3, sS);
                        var uS = Lb.shift();
                        var vS = _.I(tS, 4, uS);
                        var wS = Lb.shift();
                        var xS = _.I(vS, 5, wS);
                        var yS = Lb.shift();
                        var zS = _.I(xS, 6, yS);
                        var AS = new sA,
                            BS = Lb.shift();
                        var CS = _.I(AS, 1, BS);
                        var DS = Lb.shift();
                        var ES = _.I(CS, 2, DS);
                        var FS = Lb.shift();
                        var GS = _.I(ES, 3, FS);
                        var HS = Lb.shift();
                        var IS = _.I(GS, 4, HS);
                        var JS = Lb.shift();
                        var KS = _.I(IS, 5, JS);
                        var LS = Lb.shift();
                        var MS = _.I(KS, 6, LS);
                        var NS = Lb.shift();
                        var OS = _.I(MS, 7, NS);
                        var PS = Lb.shift();
                        var QS = _.I(OS, 8, PS);
                        var RS = _.Yg(zS, 7, QS);
                        var SS = Lb.shift();
                        var TS = _.I(RS, 8, SS);
                        var US = Lb.shift();
                        var VS = _.I(TS, 9, US);
                        var WS = Lb.shift();
                        var XS = _.I(VS, 10, WS);
                        var YS = Lb.shift(),
                            VD = _.I(XS, 11, YS);
                        if (1 === _.vk(VD, 5, 0) || 1 === _.vk(VD, 6, 0)) return !0;
                        break;
                    default:
                        _.Ua(R)
                }
            }
            return !1
        },
        $D = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 1
            },
            listenerId: -1
        },
        aE = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_STRING_UNAVAILABLE",
                internalErrorState: 2
            },
            listenerId: -1
        },
        ZD = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_TIME_OUT",
                internalErrorState: 3
            },
            listenerId: -1
        };
    var nf = function(a) {
            this.j = a || {
                cookie: ""
            }
        },
        eE = function() {
            var a = cE;
            if (!_.q.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                Pf: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            dE(a, "TESTCOOKIESENABLED");
            return !0
        };
    nf.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Rm;
            d = c.Pk || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Pf
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    nf.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = kv(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    var dE = function(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            Pf: 0,
            path: c,
            domain: d
        })
    };
    nf.prototype.isEmpty = function() {
        return !this.j.cookie
    };
    nf.prototype.clear = function() {
        for (var a = (this.j.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = kv(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) dE(this, b[a])
    };
    var cE = new nf("undefined" == typeof document ? null : document);
    var Nm = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.y(Object, "setPrototypeOf").call(Object, this, Nm.prototype)
    };
    _.T(Nm, Error);
    Nm.prototype.name = "PublisherInputError";
    var fE = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.y(Object, "setPrototypeOf").call(Object, this, fE.prototype)
    };
    _.T(fE, Error);
    fE.prototype.name = "ServerError";
    var gE = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.y(Object, "setPrototypeOf").call(Object, this, gE.prototype)
    };
    _.T(gE, Error);
    gE.prototype.name = "NetworkError";
    var hE = 0,
        iE = _.te(_.Tu(_.Uu("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var jE = null,
        kE = function() {
            if (null === jE) {
                jE = "";
                try {
                    var a = "";
                    try {
                        a = _.q.top.location.hash
                    } catch (c) {
                        a = _.q.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        jE = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return jE
        };
    _.qf = function(a) {
        var b = "nc";
        if (a.nc && a.hasOwnProperty(b)) return a.nc;
        b = new a;
        return a.nc = b
    };
    var rf = function() {};
    rf.prototype.j = function() {};
    rf.prototype.m = function() {};
    rf.prototype.v = function() {
        return []
    };
    rf.prototype.H = function() {
        return []
    };
    var Nf = function(a, b) {
        a.j = pf(1, b, function() {});
        a.v = function(c, d) {
            return pf(2, b, function() {
                return []
            })(c, 2, d)
        };
        a.H = function() {
            return pf(3, b, function() {
                return []
            })(2)
        };
        a.m = function(c) {
            pf(16, b, function() {})(c, 2)
        }
    };
    var Bf = function() {
        var a = {};
        this.v = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.H = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.B = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function() {}
    };
    var Ff = function() {
            this.j = function() {}
        },
        Pf = function(a, b) {
            a.j = pf(14, b, function() {})
        };
    var rp = _.lu(["(a=0)=>{let b;const c=null ?? 1;}"]);
    var Eh = function(a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
                return (void 0 === c ? 0 : c) ? (new _.Rh(b.innerWidth, b.innerHeight)).round() : _.Sy(b || window).round()
            } catch (d) {
                return new _.Rh(-12245933, -12245933)
            }
        },
        lE = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        zt = function(a, b) {
            b = void 0 === b ? _.q : b;
            a = a.scrollingElement || lE(a);
            return new _.Nh(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        si = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var mE = function(a) {
        this.G = _.z(a)
    };
    _.T(mE, _.A);
    var nE = function(a, b) {
            nj(a, 13, b)
        },
        oE = function(a, b) {
            nj(a, 12, b)
        },
        pE = function(a, b) {
            return _.Md(a, 10, b, _.Hc)
        },
        qE = function(a, b) {
            return mj(a, 11, b)
        };
    mE.ca = [10];
    var sE, tE, uE;
    _.rE = function(a) {
        this.j = a;
        this.v = 0
    };
    sE = function(a, b) {
        if (0 === a.v) {
            if (_.am(a, "__gads", b)) b = !0;
            else {
                var c = a.j;
                _.G(b, 5) && mf(c) && (new nf(c.document)).set("GoogleAdServingTest", "Good", void 0);
                if (c = "Good" === of ("GoogleAdServingTest", b, a.j)) {
                    var d = a.j;
                    _.G(b, 5) && mf(d) && dE(new nf(d.document), "GoogleAdServingTest")
                }
                b = c
            }
            a.v = b ? 2 : 1
        }
        return 2 === a.v
    };
    _.am = function(a, b, c) {
        return c ? of (b, c, a.j) : null
    };
    tE = function(a, b, c, d) {
        if (d) {
            var e = Ic(no(c, 2)) - Date.now() / 1E3;
            e = {
                Pf: Math.max(e, 0),
                path: _.rj(c, 3),
                domain: _.rj(c, 4),
                Pk: !1
            };
            c = c.getValue();
            a = a.j;
            _.G(d, 5) && mf(a) && (new nf(a.document)).set(b, c, e)
        }
    };
    uE = function(a, b, c) {
        if (c && of (b, c, a.j)) {
            var d = a.j.location.hostname;
            if ("localhost" === d) d = ["localhost"];
            else if (d = d.split("."), 2 > d.length) d = [];
            else {
                for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                d = e
            }
            d = _.w(d);
            for (e = d.next(); !e.done; e = d.next()) f = a.j, _.G(c, 5) && mf(f) && dE(new nf(f.document), b, "/", e.value)
        }
    };
    var vE = {},
        wE = (vE[3] = _.te(_.Tu(_.Uu("https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), vE);
    ({})[3] = _.te(_.Tu(_.Uu("https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var xE = function(a) {
            this.j = a;
            this.v = Jy()
        },
        yE = function(a) {
            var b = {};
            _.$u(a, function(c) {
                b[c.j] = c.v
            });
            return b
        };
    _.zE = _.lu(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);
    var AE = function(a, b, c, d, e, f) {
        _.U.call(this);
        this.sb = a;
        this.status = 1;
        this.B = b;
        this.m = c;
        this.J = d;
        this.vd = !!e;
        this.l = Math.random();
        this.I = {};
        this.j = null;
        this.L = (0, _.Nu)(this.F, this);
        this.o = f
    };
    _.T(AE, _.U);
    AE.prototype.F = function(a) {
        if (!("*" !== this.m && a.origin !== this.m || !this.vd && a.source != this.B)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.na(b) && (a = b.i, b.c === this.sb && a != this.l)) {
                if (2 !== this.status) try {
                    this.status = 2, BE(this), this.j && (this.j(), this.j = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.na(b)) && this.I.hasOwnProperty(a)) this.I[a](b)
            }
        }
    };
    var BE = function(a) {
        var b = {};
        b.c = a.sb;
        b.i = a.l;
        a.o && (b.e = a.o);
        a.B.postMessage(JSON.stringify(b), a.m)
    };
    AE.prototype.C = function() {
        if (1 === this.status) {
            try {
                this.B.postMessage && BE(this)
            } catch (a) {}
            window.setTimeout((0, _.Nu)(this.C, this), 50)
        }
    };
    AE.prototype.connect = function(a) {
        a && (this.j = a);
        _.ib(window, "message", this.L);
        this.J && this.C()
    };
    var CE = function(a, b, c) {
            a.I[b] = c
        },
        DE = function(a, b, c) {
            var d = {};
            d.c = a.sb;
            d.i = a.l;
            d.s = b;
            d.p = c;
            try {
                a.B.postMessage(JSON.stringify(d), a.m)
            } catch (e) {}
        };
    AE.prototype.v = function() {
        this.status = 3;
        _.af(window, "message", this.L);
        _.U.prototype.v.call(this)
    };
    var EE = new _.t.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        FE = new _.t.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);
    var GE = function(a) {
        this.G = _.z(a)
    };
    _.T(GE, _.A);
    var HE = qe(GE);
    var IE = function(a) {
        this.G = _.z(a)
    };
    _.T(IE, _.A);
    var JE = function(a) {
        this.G = _.z(a)
    };
    _.T(JE, _.A);
    var KE, LE, ME, NE;
    _.dq = function(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    KE = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    LE = function(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    ME = function(a, b) {
        if (3 == _.dq(b)) return !1;
        a();
        return !0
    };
    NE = function(a, b) {
        if (!ME(a, b)) {
            var c = !1,
                d = KE(b),
                e = function() {
                    !c && ME(a, b) && (c = !0, _.af(b, d, e))
                };
            d && _.ib(b, d, e)
        }
    };
    var zq = function(a, b) {
            this.j = a;
            this.m = b;
            this.v = {}
        },
        Aq = function(a) {
            tq() && (document.addEventListener("touchstart", function(b) {
                a.j(902, function() {
                    a.v[b.touches[0].identifier] = Date.now()
                })()
            }, _.Zu), document.addEventListener("touchend", function(b) {
                a.j(902, function() {
                    var c = b.changedTouches[0],
                        d = c.clientX,
                        e = c.clientY,
                        f = c.force;
                    c = a.v[c.identifier];
                    if (void 0 !== c) try {
                        var g = tq(),
                            h = {
                                x: d,
                                y: e,
                                duration_ms: Date.now() - c
                            };
                        if (null == g ? 0 : g.gmaSdk) g.gmaSdk.reportTouchEvent(JSON.stringify(_.y(Object, "assign").call(Object, {}, h, {
                            type: 1,
                            force: f
                        })));
                        else {
                            var k, l, m;
                            null == g || null == (k = g.webkit) || null == (l = k.messageHandlers) || null == (m = l.reportGmaTouchEvent) || m.postMessage(h)
                        }
                    } catch (n) {
                        a.m("paw_sigs", {
                            msg: "reportTouchError",
                            err: n instanceof Error ? n.message : "nonError"
                        })
                    }
                })()
            }, _.Zu))
        },
        uq = function(a, b, c, d, e) {
            var f = 200,
                g = lq;
            b = void 0 === b ? {} : b;
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            f = void 0 === f ? 200 : f;
            var h = String(Math.floor(2147483647 * _.yf())),
                k = 0,
                l = function(m) {
                    try {
                        var n = "object" === typeof m.data ? m.data : JSON.parse(m.data);
                        h === n.paw_id && (window.clearTimeout(k), window.removeEventListener("message", l), n.signal ? c(n.signal) : n.error && d(n.error))
                    } catch (p) {
                        g("paw_sigs", {
                            msg: "postmessageError",
                            err: p instanceof Error ? p.message : "nonError",
                            data: null == m.data ? "null" : 500 < m.data.length ? m.data.substring(0, 500) : m.data
                        })
                    }
                };
            window.addEventListener("message", function(m) {
                e(903, function() {
                    l(m)
                })()
            });
            a.postMessage(_.y(Object, "assign").call(Object, {}, {
                paw_id: h
            }, b));
            k = window.setTimeout(function() {
                window.removeEventListener("message", l);
                d("PAW GMA postmessage timed out.")
            }, f)
        },
        tq = function() {
            var a = window,
                b, c;
            if (a.gmaSdk || (null == (b = a.webkit) ? 0 : null == (c = b.messageHandlers) ? 0 : c.getGmaViewSignals)) return a;
            try {
                var d = window.parent,
                    e, f;
                if (d.gmaSdk || (null == (e = d.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals)) return d
            } catch (g) {}
            return null
        };
    _.Rf = function() {
        var a = this;
        this.promise = new _.t.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var RE, QE, TE, SE;
    _.OE = function() {
        this.m = "&";
        this.v = {};
        this.H = 0;
        this.j = []
    };
    _.PE = function(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    };
    RE = function(a, b, c, d, e) {
        var f = [];
        _.Ul(a, function(g, h) {
            (g = QE(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    };
    QE = function(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(QE(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(RE(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    };
    TE = function(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = SE(a) - b.length;
        if (0 > d) return "";
        a.j.sort(function(m, n) {
            return m - n
        });
        b = null;
        for (var e = "", f = 0; f < a.j.length; f++)
            for (var g = a.j[f], h = a.v[g], k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                var l = RE(h[k], a.m, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.m;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    };
    SE = function(a) {
        var b = 1,
            c;
        for (c in a.v) b = c.length > b ? c.length : b;
        return 3997 - b - a.m.length - 1
    };
    _.UE = function() {
        this.j = Math.random()
    };
    _.vg = function(a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.j : Math.random()) < (e || .001)) try {
            if (c instanceof _.OE) var f = c;
            else f = new _.OE, _.Ul(c, function(h, k) {
                var l = f,
                    m = l.H++;
                h = _.PE(k, h);
                l.j.push(m);
                l.v[m] = h
            });
            var g = TE(f, "/pagead/gen_204?id=" + b + "&");
            g && wC(_.q, g)
        } catch (h) {}
    };
    var VE = function(a) {
        this.G = _.z(a)
    };
    _.T(VE, _.A);
    var WE = function(a, b) {
        return _.Md(a, 1, b, _.Lc)
    };
    VE.ca = [1];
    var XE = function(a) {
        this.G = _.z(a)
    };
    _.T(XE, _.A);
    XE.ca = [1];
    var YE = function(a) {
        this.G = _.z(a)
    };
    _.T(YE, _.A);
    var ZE = function(a, b) {
        return _.I(a, 1, b)
    };
    var $E = function(a) {
        this.G = _.z(a)
    };
    _.T($E, _.A);
    var aF = function(a) {
        _.U.call(this);
        this.I = a;
        this.j = [];
        this.m = [];
        this.l = [];
        this.B = []
    };
    _.T(aF, _.U);
    var bF = function(a, b, c) {
        a.m.push({
            Xb: void 0 === c ? !1 : c,
            yb: b
        });
        _.H(cB) && DA(b, a.I)
    };
    aF.prototype.v = function() {
        this.j.length = 0;
        this.l.length = 0;
        if (_.H(cB))
            for (var a = _.w(this.m), b = a.next(); !b.done; b = a.next()) b.value.yb.ce();
        this.m.length = 0;
        this.B.length = 0;
        _.U.prototype.v.call(this)
    };
    var cF = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.y(Object, "setPrototypeOf").call(Object, this, cF.prototype);
        this.name = "InputError"
    };
    _.T(cF, Error);
    var dF = function() {
            this.bb = !1
        },
        eF = function() {
            dF.apply(this, arguments);
            this.j = [];
            this.Kd = new _.Rf
        };
    _.T(eF, dF);
    var gF = function(a, b) {
            a.bb || (a.bb = !0, a.Kc = b, a.Kd.resolve(b), _.H(cB) && fF(a))
        },
        hF = function(a, b) {
            a.bb = !0;
            a.Ke = b;
            a.Kd.reject(b);
            _.H(cB) && fF(a)
        },
        fF = function(a) {
            for (var b = _.w(a.j), c = b.next(); !c.done; c = b.next()) c = c.value, c(a.Kc);
            a.j.length = 0
        };
    eF.prototype.ce = function() {
        this.j.length = 0
    };
    var DA = function(a, b) {
        _.H(cB) && a.j.push(b)
    };
    _.gu.Object.defineProperties(eF.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Kd.promise
            }
        },
        Fb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.bb
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Ke
            }
        }
    });
    var An = function() {
        eF.apply(this, arguments)
    };
    _.T(An, eF);
    _.aa = An.prototype;
    _.aa.D = function(a) {
        gF(this, a)
    };
    _.aa.Fa = function(a) {
        gF(this, null != a ? a : null)
    };
    _.aa.Z = function() {
        gF(this, null)
    };
    _.aa.Ka = function(a) {
        var b = this;
        a.then(function(c) {
            b.D(c)
        })
    };
    _.aa.fb = function(a) {
        this.bb || (this.bb = !0, this.Kc = null, this.Ke = a, this.Kd.reject(a), _.H(cB) && fF(this))
    };
    var iF = function() {
        eF.apply(this, arguments)
    };
    _.T(iF, eF);
    iF.prototype.D = function(a) {
        gF(this, a)
    };
    iF.prototype.Ka = function(a) {
        var b = this;
        a.then(function(c) {
            return void b.D(c)
        })
    };
    iF.prototype.fb = function(a) {
        this.bb || (this.bb = !0, this.Ke = a, this.Kd.reject(a))
    };
    var jF = function() {
        iF.apply(this, arguments)
    };
    _.T(jF, iF);
    jF.prototype.Fa = function(a) {
        gF(this, null != a ? a : null)
    };
    jF.prototype.Z = function() {
        gF(this, null)
    };
    jF.prototype.Ka = function(a) {
        var b = this;
        a.then(function(c) {
            return void b.Fa(c)
        })
    };
    var kF = function(a) {
        this.bb = !1;
        this.Ob = a
    };
    _.T(kF, dF);
    kF.prototype.Fb = function() {
        return this.Ob.bb
    };
    kF.prototype.Ef = function() {
        return null != this.Ob.Kc
    };
    _.gu.Object.defineProperties(kF.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Ob.Ke
            }
        }
    });
    var lF = function(a) {
        kF.call(this, a);
        this.Ob = a
    };
    _.T(lF, kF);
    _.gu.Object.defineProperties(lF.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Ob.Kc
            }
        }
    });
    var mF = function(a) {
        kF.call(this, a);
        this.Ob = a
    };
    _.T(mF, kF);
    _.gu.Object.defineProperties(mF.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.Ob.Kc) ? a : null
            }
        }
    });
    var nF = function() {
        kF.apply(this, arguments)
    };
    _.T(nF, kF);
    _.gu.Object.defineProperties(nF.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.Ob.Kc) ? a : null
            }
        }
    });
    var En = function() {
        eF.apply(this, arguments)
    };
    _.T(En, eF);
    En.prototype.notify = function() {
        gF(this, null)
    };
    var oF = function(a, b) {
            b.then(function() {
                a.notify()
            })
        },
        pF = function(a, b) {
            b = void 0 === b ? !1 : b;
            eF.call(this);
            var c = this;
            this.m = a;
            this.v = 0;
            if (_.H(cB)) {
                a = _.w(this.m);
                for (var d = a.next(), e = {}; !d.done; e = {
                        Jd: e.Jd
                    }, d = a.next()) e.Jd = d.value, DA(e.Jd, function(f) {
                    return function(g) {
                        c.v += 1;
                        f.Jd.error ? hF(c, f.Jd.error) : b || null !== g ? gF(c, null != g ? g : null) : c.v === c.m.length && gF(c, null)
                    }
                }(e))
            } else a = a.map(function(f) {
                return f.promise.then(function(g) {
                    if (b || null != g) return g;
                    throw g;
                }, function(g) {
                    hF(c, g);
                    return null
                })
            }), _.y(_.t.Promise, "any").call(_.t.Promise, a).then(function(f) {
                c.bb || gF(c, f)
            }, function() {
                c.bb || gF(c, null)
            })
        };
    _.T(pF, eF);
    var qF = function(a, b) {
        eF.call(this);
        this.timeoutMs = a;
        this.defaultValue = b
    };
    _.T(qF, eF);
    var Zf = function(a) {
        setTimeout(function() {
            var b;
            gF(a, null != (b = a.defaultValue) ? b : null)
        }, a.timeoutMs)
    };
    var sF = function(a, b) {
        _.U.call(this);
        var c = this;
        this.id = a;
        this.timeoutMs = b;
        this.Ga = this.Ba = this.ta = this.started = !1;
        this.B = new aF(function() {
            rF(c)
        });
        _.S(this, this.B)
    };
    _.T(sF, _.U);
    sF.prototype.start = function() {
        var a = this,
            b;
        return _.lb(function(c) {
            switch (c.j) {
                case 1:
                    if (a.started) return c.return();
                    a.started = !0;
                    c.m = 2;
                    return _.mb(c, $f(a.B.m, a.B.B, a.timeoutMs), 4);
                case 4:
                    if (a.H) {
                        c.j = 5;
                        break
                    }
                    for (var d = 0, e = _.w(a.B.l), f = e.next(); !f.done; f = e.next()) {
                        if (!f.value.Ef()) throw Error("missing input: " + a.id + "/" + d);
                        ++d
                    }
                    return _.mb(c, a.j(), 5);
                case 5:
                    c.j = 0;
                    c.m = 0;
                    break;
                case 2:
                    b = ob(c);
                    if (a.H) return c.return();
                    b instanceof cF ? a.I(b) : b instanceof Error && (a.L(b), a.m(b));
                    c.j = 0
            }
        })
    };
    var rF = function(a) {
            if (!a.started && a.ta) try {
                var b = a.B.m,
                    c = a.timeoutMs ? b.filter(function(k) {
                        return !k.Xb
                    }) : b,
                    d = b.filter(function(k) {
                        return k.Xb
                    }),
                    e, f = null == (e = _.y(b, "find").call(b, function(k) {
                        return void 0 !== k.yb.error
                    })) ? void 0 : e.yb.error;
                if (f) throw a.started = !0, f;
                if (!c.some(function(k) {
                        return !k.yb.Fb
                    })) {
                    if (d.length)
                        if (_.H(Yf)) {
                            for (var g = _.w(a.B.B), h = g.next(); !h.done; h = g.next()) Zf(h.value);
                            if (d.some(function(k) {
                                    return !k.yb.Fb
                                })) return
                        } else if (a.Ba || (a.Ba = !0, setTimeout(function() {
                            a.Ga = !0;
                            rF(a)
                        }, a.timeoutMs)), d.some(function(k) {
                            return !k.yb.Fb
                        }) && !a.Ga) return;
                    a.started = !0;
                    a.j()
                }
            } catch (k) {
                a.H || (k instanceof cF ? a.I(k) : k instanceof Error && (a.L(k), a.m(k)))
            }
        },
        V = function(a, b) {
            b = void 0 === b ? new An : b;
            a.B.j.push(b);
            return b
        },
        tF = function(a) {
            var b = void 0 === b ? new iF : b;
            a.B.j.push(b);
            return b
        },
        uF = function(a) {
            var b = void 0 === b ? new jF : b;
            a.B.j.push(b);
            return b
        },
        vF = function(a, b) {
            b = void 0 === b ? new En : b;
            a.B.j.push(b);
            return b
        },
        X = function(a, b) {
            bF(a.B, b);
            b = new lF(b);
            a.B.l.push(b);
            return b
        },
        Y = function(a, b) {
            bF(a.B, b);
            return new mF(b)
        },
        wF = function(a, b) {
            if (_.H(Yf)) {
                if (a.timeoutMs) {
                    var c = new qF(a.timeoutMs, void 0);
                    b = new pF([b, c], !0);
                    bF(a.B, b, !0);
                    a.B.B.push(c);
                    return new mF(b)
                }
                bF(a.B, b);
                return new mF(b)
            }
            bF(a.B, b, !0);
            return new mF(b)
        },
        xF = function(a, b) {
            bF(a.B, b)
        },
        yF = function(a, b) {
            if (_.H(Yf))
                if (a.timeoutMs) {
                    var c = new qF(a.timeoutMs);
                    b = new pF([b, c], !0);
                    bF(a.B, b, !0);
                    a.B.B.push(c)
                } else xF(a, b);
            else bF(a.B, b, !0)
        },
        zF = function(a, b) {
            b = new pF(b);
            bF(a.B, b);
            b = new lF(b);
            a.B.l.push(b);
            return b
        };
    sF.prototype.I = function() {};
    sF.prototype.m = function(a) {
        if (this.B.j.length) {
            a = new cF(a.message);
            for (var b = _.w(this.B.j), c = b.next(); !c.done; c = b.next()) c = c.value, c.Fb || hF(c, a)
        }
    };
    var xj = function() {
        _.U.apply(this, arguments);
        this.l = [];
        this.I = [];
        this.C = {};
        this.B = [];
        this.m = new _.Rf;
        this.j = {}
    };
    _.T(xj, _.U);
    var N = function(a, b) {
            _.S(a, b);
            a.l.push(b);
            return b
        },
        Rj = function(a, b) {
            b = _.w(b);
            for (var c = b.next(); !c.done; c = b.next()) N(a, c.value)
        },
        Us = function(a, b) {
            a.I.push(b);
            _.S(a, b)
        },
        Gj = function(a) {
            var b, c, d, e, f, g, h, k, l, m, n, p;
            return _.lb(function(r) {
                switch (r.j) {
                    case 1:
                        if (!a.B.length) {
                            r.j = 2;
                            break
                        }
                        return _.mb(r, _.t.Promise.all(a.B.map(function(v) {
                            return v.m.promise
                        })), 2);
                    case 2:
                        b = _.w(a.l);
                        for (c = b.next(); !c.done; c = b.next()) d = c.value, _.H(cB) ? (d.ta = !0, rF(d)) : d.start();
                        e = _.w(a.I);
                        for (f = e.next(); !f.done; f = e.next()) g = f.value, Gj(g);
                        if (!a.j) {
                            r.j = 4;
                            break
                        }
                        h = _.y(Object, "keys").call(Object, a.j);
                        if (!h.length) {
                            r.j = 4;
                            break
                        }
                        return _.mb(r, _.t.Promise.all(_.y(Object, "values").call(Object, a.j).map(function(v) {
                            return v.promise
                        })), 6);
                    case 6:
                        for (k = r.v, l = 0, m = _.w(h), n = m.next(); !n.done; n = m.next()) p = n.value, a.C[p] = k[l++];
                    case 4:
                        return a.m.resolve(a.C), r.return(a.m.promise)
                }
            })
        };
    xj.prototype.v = function() {
        _.U.prototype.v.call(this);
        this.l.length = 0;
        this.I.length = 0;
        this.B.length = 0
    };
    var AF = function(a) {
        this.G = _.z(a)
    };
    _.T(AF, _.A);
    AF.ca = [1];
    var BF = [0, lx, Rx];
    var CF = function(a) {
        this.G = _.z(a)
    };
    _.T(CF, _.A);
    CF.ca = [1, 2];
    CF.prototype.j = pe([0, lx, Rx, lx, BF]);
    var EF, DF;
    EF = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new DF;
        this.sideRailProcessedFixedElements = new _.t.Set;
        this.sideRailAvailableSpace = new _.t.Map;
        this.sideRailPlasParam = new _.t.Map
    };
    _.Qg = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new _.t.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new _.t.Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new _.t.Map)) : a.google_reactive_ads_global_state = new EF;
        return a.google_reactive_ads_global_state
    };
    DF = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var IF, KF, GF;
    _.FF = function(a) {
        this.j = _.Qg(a).floatingAdsStacking
    };
    _.HF = function(a, b) {
        return new GF(a, b)
    };
    IF = function(a) {
        a = _.gz(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    _.JF = function(a, b) {
        a.j.maxZIndexListeners.push(b);
        b(IF(a))
    };
    KF = function(a) {
        var b = IF(a);
        _.$u(a.j.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    GF = function(a, b) {
        this.v = a;
        this.m = b;
        this.j = null
    };
    _.LF = function(a) {
        if (null == a.j) {
            var b = a.v,
                c = a.m,
                d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            KF(b);
            a.j = d
        }
    };
    _.MF = function(a) {
        if (null != a.j) {
            var b = a.v;
            delete b.j.maxZIndexRestrictions[a.j];
            KF(b);
            a.j = null
        }
    };
    _.Vo = 728 * 1.38;
    var pg, NF;
    _.tg = function(a, b) {
        b = void 0 === b ? {} : b;
        this.ka = a;
        this.Aa = b
    };
    _.OF = function(a, b) {
        var c = mg(a.ka.document, b);
        if (c) {
            var d;
            if (!(d = NF(a, c, b))) a: {
                d = a.ka.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    var e = NF(a, c, b);
                    if (e) {
                        d = e;
                        break a
                    }
                }
                d = null
            }
            a = d || null
        } else a = null;
        return a
    };
    pg = function(a, b) {
        b = _.w(b);
        for (var c = b.next(); !c.done; c = b.next())
            if (c = _.OF(a, c.value)) return c;
        return null
    };
    NF = function(a, b, c) {
        if ("fixed" !== Nz(b, "position")) return null;
        var d = "GoogleActiveViewInnerContainer" === b.getAttribute("class") || 1 >= _.Ph(_.Sz, b).width && 1 >= _.Ph(_.Sz, b).height || a.Aa.wj && !a.Aa.wj(b) ? !0 : !1;
        a.Aa.mh && a.Aa.mh(b, c, d);
        return d ? null : b
    };
    var og = 90 * 1.38;
    var PF, QF, RF;
    PF = _.lu(["* { pointer-events: none; }"]);
    QF = function(a, b) {
        var c = _.Me("STYLE", a);
        c.textContent = _.Iv(new _.Hv(PF[0], _.Gv));
        null == a || a.head.appendChild(c);
        setTimeout(function() {
            null == a || a.head.removeChild(c)
        }, b)
    };
    _.SF = function(a, b, c) {
        if (!a.body) return null;
        var d = new RF;
        d.apply(a, b);
        return function() {
            var e = c || 0;
            0 < e && QF(b.document, e);
            _.Kz(a.body, {
                filter: d.j,
                webkitFilter: d.j,
                overflow: d.m,
                position: d.H,
                top: d.B
            });
            b.scrollTo(0, d.v)
        }
    };
    RF = function() {
        this.j = this.B = this.H = this.m = null;
        this.v = 0
    };
    RF.prototype.apply = function(a, b) {
        this.m = a.body.style.overflow;
        this.H = a.body.style.position;
        this.B = a.body.style.top;
        this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.v = _.kg(b);
        _.Kz(a.body, "top", -this.v + "px")
    };
    var Qo;
    Qo = function(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            var b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return "__storage_test__" === b
        } catch (c) {
            return !1
        }
    };
    _.So = function(a, b) {
        return 0 >= b || null == a || !Qo(a) ? null : Ig(a, b)
    };
    _.Ro = function(a) {
        return !!a && 1 > a.length
    };
    var jn = function(a) {
            var b = void 0 === b ? _.qh(_.q) : b;
            this.id = a;
            this.v = .001 > Math.random();
            this.j = {
                pvsid: String(b)
            }
        },
        TF = function(a) {
            a = Tg(a);
            var b;
            vh.set(a, (null != (b = vh.get(a)) ? b : 0) + 1)
        },
        uh = function() {
            return [].concat(_.Ie(_.y(vh, "values").call(vh))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        L = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b])
        },
        ln = function(a) {
            var b = 1;
            b = void 0 === b ? null : b;
            if (UF()) b = !0;
            else {
                var c = a.v;
                b && 0 <= b && (c = Math.random() < b);
                b = c && !!a.id
            }
            b && wC(window, VF(a) || "", void 0, !0)
        },
        VF = function(a) {
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.Ul(a.j, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        WF = function(a) {
            var b = [].concat(_.Ie(_.y(vh, "keys").call(vh)));
            b = b.map(function(c) {
                return c.replace(/,/g, "\\,")
            });
            3 >= b.length ? L(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), L(a, "nw_id", b.join()))
        },
        Ri = function(a, b) {
            L(a, "vrg", String(b.rc || b.ub));
            WF(a);
            L(a, "nslots", uh().toString());
            b = _.tf();
            b.length && L(a, "eid", b.join());
            L(a, "pub_url", document.URL)
        },
        Li = function(a, b, c) {
            c = void 0 === c ? .001 : c;
            if (void 0 === c || 0 > c || 1 < c) c = .001;
            Math.random() < c && (a = new jn(a), b(a), ln(a))
        },
        vh = new _.t.Map,
        UF = pi(function() {
            return !!kz(_.q.location.href)
        });
    var XF = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.slotId = e;
        this.taskId = void 0;
        this.uniqueId = Math.random()
    };
    var YF, ZF, $F, aG, bG;
    YF = _.q.performance;
    ZF = !!(YF && YF.mark && YF.measure && YF.clearMarks);
    $F = pi(function() {
        var a;
        if (a = ZF) a = kE(), a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    });
    aG = function(a, b) {
        this.v = [];
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.v = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        this.j = $F() || (null != c ? c : Math.random() < a)
    };
    _.lh = function(a) {
        a && YF && $F() && (YF.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), YF.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    bG = function(a, b, c, d, e, f) {
        a.j && (b = new XF(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.v.length || a.v.push(b))
    };
    aG.prototype.start = function(a, b) {
        if (!this.j) return null;
        a = new XF(a, b, _.xg() || _.wg());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        YF && $F() && YF.mark(b);
        return a
    };
    aG.prototype.end = function(a) {
        if (this.j && "number" === typeof a.value) {
            a.duration = (_.xg() || _.wg()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            YF && $F() && YF.mark(b);
            !this.j || 2048 < this.v.length || this.v.push(a)
        }
    };
    var Qr = function(a, b, c) {
        var d = _.xg();
        d && bG(a, b, 9, d, 0, c)
    };
    var ih = function() {
        aG.call(this, _.H(jh) || _.H(VB) ? 1 : 0, _.q);
        this.m = 0;
        var a = _.H(jh) || _.H(VB);
        _.q.google_measure_js_timing = a || _.q.google_measure_js_timing
    };
    _.T(ih, aG);
    _.cG = function(a) {
        this.context = a
    };
    _.cG.prototype.Eb = function(a, b) {
        return mh(this.context, a, b)
    };
    _.cG.prototype.wa = function(a, b) {
        return gh(this.context, a, b)
    };
    _.cG.prototype.rb = function(a, b) {
        kh(this.context, a, b);
        return !1
    };
    _.cG.prototype.Pc = da(3);
    var dG = {},
        eG = (dG.companion_ads = "companionAds", dG.content = "content", dG.publisher_ads = "pubads", dG);
    var Ln = function(a) {
        this.G = _.z(a)
    };
    _.T(Ln, _.A);
    var yn = function(a) {
        var b = new Ln;
        return nj(b, 1, a)
    };
    var Xs = function(a) {
        this.G = _.z(a)
    };
    _.T(Xs, _.A);
    var Tl = function(a) {
        this.G = _.z(a)
    };
    _.T(Tl, _.A);
    var Tk = function(a) {
        this.G = _.z(a)
    };
    _.T(Tk, _.A);
    var Sk = function(a, b) {
            return mj(a, 1, b)
        },
        Rk = function(a, b) {
            return _.Md(a, 2, b, _.Lc)
        },
        ml = function(a, b) {
            return bx(a, 2, b)
        };
    Tk.ca = [2];
    var Bs = function(a) {
        this.G = _.z(a)
    };
    _.T(Bs, _.A);
    Bs.ca = [2, 3];
    var Up = function(a) {
        this.G = _.z(a)
    };
    _.T(Up, _.A);
    var $p = function(a, b) {
            return oo(a, 1, b)
        },
        Yp = function(a, b) {
            return _.Md(a, 2, b, _.Lc)
        };
    Up.ca = [2];
    var Ds = function(a) {
        this.G = _.z(a)
    };
    _.T(Ds, _.A);
    var Zp = function(a, b) {
        oj(a, 1, Up, b)
    };
    Ds.ca = [1];
    var As = function(a) {
        this.G = _.z(a)
    };
    _.T(As, _.A);
    var fG = function(a) {
        this.G = _.z(a)
    };
    _.T(fG, _.A);
    fG.prototype.setTagForChildDirectedTreatment = function(a) {
        return oo(this, 5, a)
    };
    fG.prototype.clearTagForChildDirectedTreatment = function() {
        return _.Uh(this, 5)
    };
    fG.prototype.setTagForUnderAgeOfConsent = function(a) {
        return oo(this, 6, a)
    };
    var gG = function(a) {
        this.G = _.z(a)
    };
    _.T(gG, _.A);
    gG.prototype.getCategoryExclusions = function(a) {
        return Uw(this, 3, a)
    };
    gG.prototype.La = function() {
        return Ah(this, Tk, 14)
    };
    gG.prototype.kc = function() {
        return _.xh(this, Tl, 18)
    };
    var Kt = function(a) {
        return _.xh(a, fG, 25)
    };
    gG.prototype.getCorrelator = function() {
        return er(this, 26)
    };
    gG.prototype.setCorrelator = function(a) {
        return _.Uh(this, 26, null == a ? a : Kc(a))
    };
    gG.prototype.ve = function() {
        return Cr(this, As, 33)
    };
    gG.ca = [2, 3, 14, 35];
    var Th = function() {
        this.j = new _.t.Map
    };
    var hG = {},
        Ih = (hG[253] = !1, hG[246] = [], hG[150] = "", hG[221] = !1, hG[36] = /^true$/.test("false"), hG[172] = null, hG[260] = void 0, hG[251] = null, hG),
        Hh = function() {
            this.j = !1
        };
    var iG = function() {
            this.v = {};
            this.j = new gG;
            this.m = new _.t.Map;
            this.j.setCorrelator(yz());
            _.Jh(36) && nj(this.j, 15, !0)
        },
        jG = function(a) {
            var b = yi(),
                c = a.getDomId();
            if (c && !b.v.hasOwnProperty(c)) {
                var d = _.qf(Th),
                    e = ++_.qf(ih).m;
                d.j.set(c, e);
                _.Uh(a, 20, _.Ec(e));
                b.v[c] = a
            }
        },
        kG = function(a, b) {
            return a.v[b]
        },
        yi = function() {
            return _.qf(iG)
        };
    var lG = pi(Yh);
    var Zi = ["auto", "inherit", "100%"],
        $i = Zi.concat(["none"]),
        mG = [2, 1];
    var Qn = function(a, b, c) {
        if (!a) return !0;
        var d = !0;
        Xi(a, function(e) {
            return d = Yi(e, b, 10, 10)
        }, c);
        return d
    };
    var nG = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var oG = function(a, b, c, d, e, f) {
            this.m = _.Ez(a);
            this.v = _.Ez(b);
            this.H = c;
            this.j = _.Ez(d);
            this.B = e;
            this.l = f
        },
        pG = function(a) {
            return JSON.stringify({
                windowCoords_t: a.m.top,
                windowCoords_r: a.m.right,
                windowCoords_b: a.m.bottom,
                windowCoords_l: a.m.left,
                frameCoords_t: a.v.top,
                frameCoords_r: a.v.right,
                frameCoords_b: a.v.bottom,
                frameCoords_l: a.v.left,
                styleZIndex: a.H,
                allowedExpansion_t: a.j.top,
                allowedExpansion_r: a.j.right,
                allowedExpansion_b: a.j.bottom,
                allowedExpansion_l: a.j.left,
                xInView: a.B,
                yInView: a.l
            })
        },
        qG = function(a) {
            var b = window,
                c = b.screenX || b.screenLeft || 0,
                d = b.screenY || b.screenTop || 0;
            b = new _.Dz(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
            c = Pz(a);
            d = _.Ph(_.Sz, a);
            var e = new Fz(c.x, c.y, d.width, d.height);
            c = Gz(e);
            d = String(Nz(a, "zIndex"));
            var f = new _.Dz(0, Infinity, Infinity, 0);
            for (var g = Oe(a), h = g.j.body, k = g.j.documentElement, l = Ty(g.j); a = Oz(a);)
                if (!(_.gw && 0 == a.clientWidth || jw && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != Nz(a, "overflow")) {
                    var m = Pz(a),
                        n = new _.Nh(a.clientLeft, a.clientTop);
                    m.x += n.x;
                    m.y += n.y;
                    f.top = Math.max(f.top, m.y);
                    f.right = Math.min(f.right, m.x + a.clientWidth);
                    f.bottom = Math.min(f.bottom, m.y + a.clientHeight);
                    f.left = Math.max(f.left, m.x)
                }
            a = l.scrollLeft;
            l = l.scrollTop;
            f.left = Math.max(f.left, a);
            f.top = Math.max(f.top, l);
            g = g.j;
            g = _.Sy(g.parentWindow || g.defaultView || window);
            f.right = Math.min(f.right, a + g.width);
            f.bottom = Math.min(f.bottom, l + g.height);
            l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new Fz(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? Hz(e, f) : null;
            g = a = 0;
            l && !(new _.Rh(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
            l = new _.Dz(0, 0, 0, 0);
            if (h = f)(e = Hz(e, f)) ? (k = Gz(f), m = Gz(e), h = m.right != k.left && k.right != m.left, k = m.bottom != k.top && k.bottom != m.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
            h && (l = new _.Dz(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
            return new oG(b, c, d, l, a, g)
        };
    var rG = function(a) {
        this.H = a;
        this.B = null;
        this.C = this.status = 0;
        this.v = null;
        this.sb = "sfchannel" + a
    };
    rG.prototype.Lf = function() {
        return 2 == this.C
    };
    var sG = function(a) {
        this.j = a
    };
    sG.prototype.getValue = function(a, b) {
        return null == this.j[a] || null == this.j[a][b] ? null : this.j[a][b]
    };
    var tG = function(a, b) {
        this.oe = a;
        this.pe = b;
        this.v = this.j = !1
    };
    var uG = function(a, b, c, d, e, f, g, h) {
        h = void 0 === h ? [] : h;
        this.v = a;
        this.m = b;
        this.H = c;
        this.permissions = d;
        this.metadata = e;
        this.B = f;
        this.vd = g;
        this.hostpageLibraryTokens = h;
        this.j = ""
    };
    var vG = function(a, b) {
        this.v = a;
        this.H = b
    };
    vG.prototype.j = function(a) {
        this.H && a && (a.sentinel = this.H);
        return JSON.stringify(a)
    };
    var wG = function(a, b, c) {
        vG.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.T(wG, vG);
    wG.prototype.j = function() {
        return vG.prototype.j.call(this, {
            uid: this.v,
            version: this.version
        })
    };
    var xG = function(a, b, c, d) {
        vG.call(this, a, void 0 === d ? "" : d);
        this.B = b;
        this.m = c
    };
    _.T(xG, vG);
    xG.prototype.j = function() {
        return vG.prototype.j.call(this, {
            uid: this.v,
            initialWidth: this.B,
            initialHeight: this.m
        })
    };
    var yG = function(a, b, c) {
        vG.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.T(yG, vG);
    yG.prototype.j = function() {
        return vG.prototype.j.call(this, {
            uid: this.v,
            description: this.description
        })
    };
    var zG = function(a, b, c, d) {
        vG.call(this, a, void 0 === d ? "" : d);
        this.m = b;
        this.push = c
    };
    _.T(zG, vG);
    zG.prototype.j = function() {
        return vG.prototype.j.call(this, {
            uid: this.v,
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        })
    };
    var AG = function(a, b) {
        vG.call(this, a, void 0 === b ? "" : b)
    };
    _.T(AG, vG);
    AG.prototype.j = function() {
        return vG.prototype.j.call(this, {
            uid: this.v
        })
    };
    var BG = function(a, b, c) {
        vG.call(this, a, void 0 === c ? "" : c);
        this.B = b
    };
    _.T(BG, vG);
    BG.prototype.j = function() {
        var a = {
            uid: this.v,
            newGeometry: pG(this.B)
        };
        return vG.prototype.j.call(this, a)
    };
    var CG = function(a, b, c, d, e, f) {
        BG.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.m = d;
        this.push = e
    };
    _.T(CG, BG);
    CG.prototype.j = function() {
        var a = {
            uid: this.v,
            success: this.success,
            newGeometry: pG(this.B),
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        };
        this.H && (a.sentinel = this.H);
        return JSON.stringify(a)
    };
    var DG = function(a, b, c, d) {
        vG.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.T(DG, vG);
    DG.prototype.j = function() {
        return vG.prototype.j.call(this, {
            uid: this.v,
            width: this.width,
            height: this.height
        })
    };
    var EG = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        zk(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var FG, IG, JG, HG;
    FG = function() {
        this.j = []
    };
    _.GG = function(a) {
        return a + "px"
    };
    IG = function(a, b, c, d, e) {
        a.j.push(new HG(b, c, d, e))
    };
    JG = function(a) {
        for (var b = a.j.length - 1; 0 <= b; b--) {
            var c = a.j[b];
            c.v ? (c.m.style.removeProperty(c.j), c.m.style.setProperty(c.j, String(c.H), c.B)) : c.m.style[c.j] = c.H
        }
        a.j.length = 0
    };
    HG = function(a, b, c, d) {
        this.m = a;
        this.j = (this.v = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
        this.H = this.v ? a.style.getPropertyValue(this.j) : a.style[this.j];
        this.B = this.v ? a.style.getPropertyPriority(this.j) : void 0;
        this.v ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
    };
    var KG, LG;
    KG = function(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    LG = function() {
        var a = window,
            b = _.xg(a);
        b && KG({
            label: "2",
            type: 9,
            value: b
        }, a)
    };
    _.MG = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = d || window,
            g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var h = _.xg(),
                k = 3;
            try {
                var l = b.apply(this, arguments)
            } catch (m) {
                k = 13;
                if (!c) throw m;
                c(a, m)
            } finally {
                f.google_measure_js_timing && h && KG(_.y(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: h,
                    duration: (_.xg() || 0) - h,
                    type: k
                }, e && g && {
                    taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                }), f)
            }
            return l
        }
    };
    var RG = function(a) {
        rG.call(this, a.uniqueId);
        var b = this;
        this.I = a.Lm;
        this.L = 1 === a.size;
        this.V = new tG(a.permissions.oe && !this.L, a.permissions.pe && !this.L);
        this.l = a.ig;
        var c;
        this.ra = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.oa = "file:" == c ? "*" : c + "//" + d;
        this.ya = !!a.vd;
        this.M = a.li ? "//" + a.li + ".safeframe.googlesyndication.com" : "//tpc.googlesyndication.com";
        this.Ga = a.mb ? "*" : "https:" + this.M;
        this.aa = !!a.yj;
        this.ta = NG(a);
        this.m = new FG;
        OG(this, a.ig, a.size);
        this.B = this.ma = qG(a.ig);
        this.J = a.Nk || "1-0-40";
        var e;
        this.Ba = null != (e = a.fj) ? e : "";
        PG(this, a);
        this.F = _.MG(412, function() {
            return QG(b)
        }, a.lb);
        this.sa = -1;
        this.o = 0;
        var f = _.MG(415, function() {
            b.j && (b.j.name = "", a.Rh && a.Rh(), _.af(b.j, "load", f))
        }, a.lb);
        _.ib(this.j, "load", f);
        this.Hf = _.MG(413, this.Hf, a.lb);
        this.mg = _.MG(417, this.mg, a.lb);
        this.qg = _.MG(419, this.qg, a.lb);
        this.Af = _.MG(411, this.Af, a.lb);
        this.lf = _.MG(409, this.lf, a.lb);
        this.O = _.MG(410, this.O, a.lb);
        this.dg = _.MG(416, this.dg, a.lb);
        this.v = new AE(this.sb, this.j.contentWindow, this.Ga, !1);
        CE(this.v, "init_done", (0, _.Nu)(this.Hf, this));
        CE(this.v, "register_done", (0, _.Nu)(this.mg, this));
        CE(this.v, "report_error", (0, _.Nu)(this.qg, this));
        CE(this.v, "expand_request", (0, _.Nu)(this.Af, this));
        CE(this.v, "collapse_request", (0, _.Nu)(this.lf, this));
        CE(this.v, "creative_geometry_update", (0, _.Nu)(this.O, this));
        this.v.connect((0, _.Nu)(this.dg, this))
    };
    _.T(RG, rG);
    var OG = function(a, b, c) {
            a.L ? (b.style.width = _.Rz("100%", !0), b.style.height = _.Rz("auto", !0)) : (b.style.width = _.Rz(c.width, !0), b.style.height = _.Rz(c.height, !0))
        },
        PG = function(a, b) {
            var c = b.mb,
                d = b.content,
                e = b.rd,
                f = b.size,
                g = void 0 === b.td ? "3rd party ad content" : b.td,
                h = b.qe;
            b = b.gf;
            var k = {
                shared: {
                    sf_ver: a.J,
                    ck_on: eE() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = c ? "" : null != d ? d : "";
            d = a.J + ";" + d.length + ";" + d;
            k = new uG(a.H, a.oa, a.ma, a.V, new sG(k), a.L, a.ya, a.ra);
            var l = {};
            l.uid = k.v;
            l.hostPeerName = k.m;
            l.initialGeometry = pG(k.H);
            var m = k.permissions;
            m = JSON.stringify({
                expandByOverlay: m.oe,
                expandByPush: m.pe,
                readCookie: m.j,
                writeCookie: m.v
            });
            l = (l.permissions = m, l.metadata = JSON.stringify(k.metadata.j), l.reportCreativeGeometry = k.B, l.isDifferentSourceWindow = k.vd, l.goog_safeframe_hlt = yE(k.hostpageLibraryTokens), l);
            k.j && (l.sentinel = k.j);
            k = JSON.stringify(l);
            d += k;
            a.aa && f instanceof _.Rh && (k = _.Uy(_.Oy(a.l)), l = _.Uy(_.Oy(a.l)).location.protocol + a.M, hE || _.mn(k.document, iE), hE++, k.google_eas_queue = k.google_eas_queue || [], k.google_eas_queue.push({
                a: e,
                b: l,
                c: f.width,
                d: f.height,
                e: "sf-gdn-exp-" + hE,
                f: void 0,
                g: void 0,
                h: void 0,
                i: void 0
            }));
            k = f.width;
            f = f.height;
            a.L && (f = k = 0);
            l = {};
            e = (l.id = e, l.title = g, l.name = d, l.scrolling = "no", l.marginWidth = "0", l.marginHeight = "0", l.width = String(k), l.height = String(f), l["data-is-safeframe"] = "true", l);
            void 0 === c && (g = _.Uy(_.Oy(a.l)), f = a.Ba, d = a.M, (k = f) && (k = "?" + k), d = (void 0 === d ? "//tpc.googlesyndication.com" : d) + ("/safeframe/" + a.J + "/html/container.html" + k), (k = EG(g)) && (d += (f ? "&" : "?") + "n=" + k), f = "https:" + d, d = [], a.aa && (k = kz(g.location.href), g = d.push, k = [0 < k.length ? "google_debug" + (k ? "=" + k : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.H, "&p=", encodeURIComponent(_.q.document.location.protocol), "//", encodeURIComponent(_.q.document.location.host)].join(""), g.call(d, k)), d.length && (f += "#" + d.join("&")), e.src = f);
            null !== a.ta && (e.sandbox = a.ta);
            h && (e.allow = h);
            b && (e.credentialless = "true");
            e.role = "region";
            e["aria-label"] = "Advertisement";
            e.tabIndex = "0";
            c ? (a.j = c, Qy(a.j, e)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), e && Fa(c, e), h = _.Me("IFRAME"), Qy(h, c), a.j = h);
            a.L && (a.j.style.minWidth = "100%");
            a.l.appendChild(a.j)
        };
    _.aa = RG.prototype;
    _.aa.dg = function() {
        _.ib(window, "resize", this.F);
        _.ib(window, "scroll", this.F)
    };
    _.aa.Hf = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.na(b) || !bj(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new wG(b.uid, b.version, b.sentinel);
            if (this.H !== c.v || this.J !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.I) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    _.aa.mg = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.na(b) || !bj(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.H !== (new xG(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).v) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    _.aa.qg = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.na(b) || !bj(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new yG(b.uid, b.description, b.sentinel);
            if (this.H !== c.v) throw Error("Wrong source container");
            var d;
            null == (d = this.I) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.I) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    _.aa.Af = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.C) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.na(b) || !bj(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new zG(b.uid, new _.Dz(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.H !== c.v) throw Error("Wrong source container");
            if (!(0 <= c.m.top && 0 <= c.m.left && 0 <= c.m.bottom && 0 <= c.m.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.V.pe || !c.push && this.V.oe) {
                var e = c.m,
                    f = c.push,
                    g = this.B = qG(this.j);
                if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                    if (!f)
                        for (var h = this.j.parentNode; h && h.style; h = h.parentNode) IG(this.m, h, "overflowX", "visible", "important"), IG(this.m, h, "overflowY", "visible", "important");
                    var k = Gz(new Fz(0, 0, this.B.v.getWidth(), this.B.v.getHeight()));
                    _.na(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    IG(this.m, this.l, "position", "relative");
                    IG(this.m, this.j, "position", "absolute");
                    if (f) {
                        var l = k.getWidth();
                        IG(this.m, this.l, "width", _.GG(l));
                        var m = k.getHeight();
                        IG(this.m, this.l, "height", _.GG(m))
                    } else IG(this.m, this.j, "zIndex", "10000");
                    var n = k.getWidth();
                    IG(this.m, this.j, "width", _.GG(n));
                    var p = k.getHeight();
                    IG(this.m, this.j, "height", _.GG(p));
                    IG(this.m, this.j, "left", _.GG(k.left));
                    IG(this.m, this.j, "top", _.GG(k.top));
                    this.C = 2;
                    this.B = qG(this.j);
                    d = !0
                } else d = !1
            }
            a = d;
            DE(this.v, "expand_response", (new CG(this.H, a, this.B, c.m, c.push)).j());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (v) {
            var r;
            null == (r = this.I) || r.error("Invalid EXPAND_REQUEST message. Reason: " + v.message)
        }
    };
    _.aa.lf = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (!this.Lf()) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.na(b) || !bj(b.uid)) throw Error("Cannot parse JSON message");
            if (this.H !== (new AG(b.uid, b.sentinel)).v) throw Error("Wrong source container");
            JG(this.m);
            this.C = 0;
            this.j && (this.B = qG(this.j));
            DE(this.v, "collapse_response", (new BG(this.H, this.B)).j())
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var QG = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.o) {
            case 0:
                SG(a);
                a.sa = window.setTimeout((0, _.Nu)(a.fa, a), 1E3);
                a.o = 1;
                break;
            case 1:
                a.o = 2;
                break;
            case 2:
                a.o = 2
        }
    };
    RG.prototype.O = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.na(b) || !bj(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new DG(b.uid, b.width, b.height, b.sentinel);
            if (this.H !== c.v) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.L) d !== this.j.height && (this.j.height = d, QG(this));
            else {
                var e;
                null == (e = this.I) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.I) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    RG.prototype.fa = function() {
        if (1 == this.status || 2 == this.status) switch (this.o) {
            case 1:
                this.o = 0;
                break;
            case 2:
                SG(this), this.sa = window.setTimeout((0, _.Nu)(this.fa, this), 1E3), this.o = 1
        }
    };
    var SG = function(a) {
            a.B = qG(a.j);
            DE(a.v, "geometry_update", (new BG(a.H, a.B)).j())
        },
        NG = function(a) {
            var b = null;
            a.ni && (b = a.ni);
            return null == b ? null : b.join(" ")
        },
        TG = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        UG = ["allow-top-navigation"],
        VG = ["allow-same-origin"],
        WG = nz([].concat(_.Ie(TG), _.Ie(UG)));
    nz([].concat(_.Ie(TG), _.Ie(VG)));
    nz([].concat(_.Ie(TG), _.Ie(UG), _.Ie(VG)));
    var XG = _.lu(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]),
        YG = {
            ik: function(a) {
                if ("string" !== typeof a.version) throw new TypeError("version is not a string");
                if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
                if ("string" !== typeof a.Ye) throw new TypeError("subdomain is not a string");
                if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.Ye)) throw new RangeError("Invalid subdomain: " + a.Ye);
                return _.te("https://" + a.Ye + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
            },
            Tm: function(a) {
                return _.ue(XG, a)
            }
        };
    var ZG = function() {};
    ZG.j = function() {
        throw Error("Must be overridden");
    };
    var cj = function() {
        this.j = 0
    };
    _.T(cj, ZG);
    cj.nc = void 0;
    cj.j = function() {
        return cj.nc ? cj.nc : cj.nc = new cj
    };
    var $G = function() {
            this.cache = {}
        },
        tj = function() {
            aH || (aH = new $G);
            return aH
        },
        uj = function(a) {
            var b = Ic(no(a, 3));
            if (!b) return 3;
            if (void 0 === _.rj(a, 2)) return 4;
            a = Date.now();
            return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
        };
    $G.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            wc: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            ej(6, a, null == (d = g) ? void 0 : d.message);
            return {
                wc: null,
                success: !1
            }
        }
        if (!c) return {
            wc: null,
            success: !0
        };
        try {
            var e = gy(c);
            this.cache[a] = e;
            return {
                wc: e,
                success: !0
            }
        } catch (g) {
            var f;
            ej(5, a, null == (f = g) ? void 0 : f.message);
            return {
                wc: null,
                success: !1
            }
        }
    };
    $G.prototype.set = function(a, b) {
        var c = _.rj(a, 1),
            d = "_GESPSK-" + c;
        fy(a);
        try {
            b.setItem(d, pk(a))
        } catch (f) {
            var e;
            ej(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    var aH = null;
    var bH = function(a, b) {
        sF.call(this, a);
        this.id = a;
        this.C = b
    };
    _.T(bH, sF);
    bH.prototype.L = function(a) {
        this.C(this.id, a)
    };
    var zj = function(a, b, c, d) {
        bH.call(this, 1041, d);
        this.l = b;
        this.F = X(this, a);
        c && (this.o = Y(this, c))
    };
    _.T(zj, bH);
    zj.prototype.j = function() {
        var a = this.F.value,
            b, c, d = null != (c = this.l) ? c : null == (b = this.o) ? void 0 : b.value;
        d && tj().set(a, d) && null != _.rj(a, 2) && ej(27, _.rj(a, 1))
    };
    var Bj = function(a, b) {
        bH.call(this, 1048, b);
        this.l = V(this);
        this.o = V(this);
        this.F = X(this, a)
    };
    _.T(Bj, bH);
    Bj.prototype.j = function() {
        var a = this.F.value,
            b = function(c) {
                var d = {};
                ej(c, _.rj(a, 1), null, (d.tic = String(Math.round((Date.now() - Ic(no(a, 3))) / 6E4)), d))
            };
        switch (uj(a)) {
            case 0:
                b(24);
                break;
            case 1:
                b(25);
                this.o.D(a);
                break;
            case 2:
                b(26);
                this.l.D(a);
                break;
            case 3:
                ej(9, _.rj(a, 1));
                this.l.D(a);
                break;
            case 4:
                b(23), this.l.D(a)
        }
    };
    var cH = function(a, b) {
        bH.call(this, 1094, b);
        this.l = vF(this);
        this.o = X(this, a)
    };
    _.T(cH, bH);
    cH.prototype.j = function() {
        var a = this.o.value;
        if (a) {
            if (void 0 !== a)
                for (var b = _.w(_.y(Object, "keys").call(Object, a)), c = b.next(); !c.done; c = b.next())
                    if (c = c.value, _.y(c, "startsWith").call(c, "_GESPSK")) try {
                        a.removeItem(c)
                    } catch (d) {}
            aH = new $G;
            this.l.notify()
        }
    };
    var Qj = function(a, b, c) {
        bH.call(this, 1049, c);
        this.l = b;
        xF(this, a)
    };
    _.T(Qj, bH);
    Qj.prototype.j = function() {
        for (var a = _.w(gj(this.l)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = tj().get(b, this.l).wc;
            if (c) {
                var d = uj(c);
                if (2 === d || 3 === d) {
                    d = void 0;
                    var e = tj();
                    c = _.rj(c, 1);
                    try {
                        this.l.removeItem("_GESPSK-" + c), delete e.cache[c]
                    } catch (f) {
                        ej(8, c, null == (d = f) ? void 0 : d.message)
                    }
                    ej(40, b)
                }
            }
        }
    };
    var yj = function(a, b, c) {
        bH.call(this, 1027, c);
        this.de = a;
        this.F = b;
        this.l = V(this);
        this.o = V(this)
    };
    _.T(yj, bH);
    yj.prototype.j = function() {
        var a = tj().get(this.de, this.F).wc;
        a || (a = fy(lj(this.de)), this.o.D(a.fb(dy(100))));
        this.l.D(a)
    };
    var Ij = {};
    var Uj = function(a, b) {
        bH.call(this, 1036, b);
        this.l = V(this);
        this.o = X(this, a)
    };
    _.T(Uj, bH);
    Uj.prototype.j = function() {
        var a = this.o.value;
        0 !== uj(a) && this.l.D(a)
    };
    var Fj = function(a, b, c) {
        bH.call(this, 1046, c);
        this.output = vF(this);
        this.l = V(this);
        this.o = X(this, b);
        xF(this, a)
    };
    _.T(Fj, bH);
    Fj.prototype.j = function() {
        this.l.D(this.o.value)
    };
    var Cj = function(a, b, c) {
        bH.call(this, 1047, c);
        this.collectorFunction = a;
        this.l = V(this);
        this.o = V(this);
        this.F = V(this);
        this.J = X(this, b)
    };
    _.T(Cj, bH);
    Cj.prototype.j = function() {
        var a = this,
            b = this.J.value,
            c = _.rj(b, 1);
        ej(18, c);
        try {
            var d = _.wg();
            this.collectorFunction().then(function(e) {
                ej(29, c, null, {
                    delta: String(_.wg() - d)
                });
                a.l.D(mj(b, 2, e));
                a.F.Fa(e)
            }).catch(function(e) {
                ej(28, c, wj(e));
                a.o.D(b.fb(dy(106)))
            })
        } catch (e) {
            ej(1, c, wj(e)), this.o.D(b.fb(dy(107)))
        }
    };
    var Aj = function(a, b) {
        bH.call(this, 1028, b);
        this.l = V(this);
        this.o = X(this, a)
    };
    _.T(Aj, bH);
    Aj.prototype.j = function() {
        var a = this.o.value,
            b = _.rj(a, 1);
        null != Ic(no(a, 3)) || ej(35, b);
        this.l.D(a)
    };
    var Dj = function(a, b, c, d, e) {
        bH.call(this, 1050, e);
        this.J = c;
        this.F = d;
        this.l = V(this);
        this.o = X(this, a);
        this.M = Y(this, b)
    };
    _.T(Dj, bH);
    Dj.prototype.j = function() {
        var a = this.o.value,
            b = _.rj(a, 1),
            c = this.M.value;
        if (null == c) ej(41, b), a.fb(dy(111)), this.l.D(a);
        else if ("string" !== typeof c) ej(21, b), this.l.D(a.fb(dy(113)));
        else {
            if (c.length > (/^(\d+)$/.test(b) ? this.F : this.J)) {
                var d = {};
                ej(12, b, null, (d.sl = String(c.length), d));
                b = a.fb(dy(108));
                _.Uh(b, 2)
            } else c.length || ej(20, b), _.Uh(a, 10);
            this.l.D(a)
        }
    };
    var Ej = function(a) {
        bH.call(this, 1046, a);
        this.output = vF(this)
    };
    _.T(Ej, bH);
    Ej.prototype.j = function() {
        var a = this;
        fj().then(function() {
            a.output.notify()
        })
    };
    var dH = function(a, b, c, d) {
        bH.call(this, 1059, d);
        this.J = b;
        this.F = c;
        this.l = V(this);
        this.M = X(this, a);
        this.o = Y(this, c)
    };
    _.T(dH, bH);
    dH.prototype.j = function() {
        var a = this.o.value;
        if (a) {
            var b = this.M.value,
                c = b.id,
                d = b.collectorFunction,
                e;
            b = null != (e = b.networkCode) ? e : c;
            c = {};
            ej(42, b, null, (c.ea = String(Number(this.J)), c));
            this.l.Ka(Hj(b, d, a, this.F, this.C))
        }
    };
    var eH = function(a, b) {
        bH.call(this, 1057, b);
        this.l = a;
        this.o = V(this);
        this.F = V(this)
    };
    _.T(eH, bH);
    eH.prototype.j = function() {
        if (this.l)
            if ("object" !== typeof this.l) ej(46, "UNKNOWN_COLLECTOR_ID"), fH(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.l.id,
                    b = this.l.networkCode;
                a && b && (delete this.l.id, ej(47, a + ";" + b));
                a = null != b ? b : a;
                "string" !== typeof a ? (b = {}, ej(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), fH(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.l.collectorFunction ? (ej(14, a), fH(this, a, 105)) : (_.E = Ef(TA), _.y(_.E, "includes")).call(_.E, a) ? (ej(22, a), fH(this, a, 104)) : this.F.D(this.l)
            }
        else ej(39, "UNKNOWN_COLLECTOR_ID"), fH(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var fH = function(a, b, c) {
        a.o.D(lj(b).fb(dy(c)))
    };
    var Oj = function(a, b, c, d, e) {
        var f = document;
        f = void 0 === f ? document : f;
        e = void 0 === e ? Ij : e;
        this.j = b;
        this.m = c;
        this.W = f;
        this.o = d;
        this.I = e;
        this.l = [];
        this.B = [];
        this.H = [];
        this.v = 0;
        a = _.w(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    Oj.prototype.push = function(a) {
        var b = this;
        this.m || this.o();
        var c = function(f, g) {
            return void gH(b, f, g)
        };
        a = new eH(a, c);
        var d = new zj(a.o, void 0, this.j, c);
        c = new dH(a.F, this.m, this.j, c, this.I);
        var e = new xj;
        Rj(e, [a, d, c]);
        Gj(e);
        a = c.l.promise;
        this.l.push(a);
        d = _.w(this.B);
        for (c = d.next(); !c.done; c = d.next()) a.then(c.value)
    };
    Oj.prototype.addOnSignalResolveCallback = function(a) {
        this.B.push(a);
        for (var b = _.w(this.l), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    Oj.prototype.addErrorHandler = function(a) {
        this.H.push(a)
    };
    Oj.prototype.clearAllCache = function() {
        var a = this,
            b = this.W.currentScript instanceof HTMLScriptElement ? this.W.currentScript.src : "";
        if (1 === this.v) {
            var c = {};
            ej(49, "", null, (c.url = b, c))
        } else if (c = String(_.zf(null != b ? b : "")), (_.E = Ef(SA), _.y(_.E, "includes")).call(_.E, c)) c = {}, ej(48, "", null, (c.url = b, c));
        else {
            var d = new xj;
            c = new cH(this.j, function(e, f) {
                return void gH(a, e, f)
            });
            N(d, c);
            Gj(d);
            this.v = 1;
            setTimeout(function() {
                a.v = 0
            }, 1E3 * _.Cf(RA));
            d = {};
            ej(43, "", null, (d.url = b, d));
            return c.l.promise
        }
    };
    var gH = function(a, b, c) {
            a = _.w(a.H);
            for (var d = a.next(); !d.done; d = a.next()) d = d.value, d(b, c)
        },
        Pj = function(a) {
            this.push = function(b) {
                a.push(b)
            };
            this.addOnSignalResolveCallback = function(b) {
                a.addOnSignalResolveCallback(b)
            };
            this.addErrorHandler = function(b) {
                a.addErrorHandler(b)
            };
            this.clearAllCache = function() {
                a.clearAllCache()
            }
        };
    var Vj = function(a, b, c) {
        bH.call(this, 1035, c);
        this.o = b;
        this.l = V(this);
        this.F = X(this, a)
    };
    _.T(Vj, bH);
    Vj.prototype.j = function() {
        var a = this,
            b = this.F.value,
            c = _.rj(b, 1),
            d = this.o.toString(),
            e = {};
        ej(30, c, null, (e.url = d, e));
        var f = document.createElement("script");
        f.setAttribute("esp-signal", "true");
        Za(f, this.o);
        var g = function() {
            var h = {};
            ej(31, c, null, (h.url = d, h));
            a.l.D(b.fb(dy(109)));
            _.af(f, "error", g)
        };
        document.head.appendChild(f);
        _.ib(f, "error", g)
    };
    var Tj = new _.t.Set;
    var Xj = function(a, b) {
        try {
            sb(Bq(a, b))
        } catch (c) {}
    };
    var hH = function(a) {
        this.G = _.z(a)
    };
    _.T(hH, _.A);
    hH.prototype.j = pe([0, ex, ex, ex, ex, hx]);
    var iH = [.05, .1, .2, .5],
        jH = [0, .5, 1],
        kH = function(a) {
            a = Kj(a);
            if (!a) return -1;
            try {
                var b = lE(a.document);
                var c = new _.Rh(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.Rh(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        lH = function(a, b) {
            return 0 >= a || 0 >= b ? [] : iH.map(function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        nH = function(a) {
            this.B = a.A;
            this.m = a.Jb;
            this.I = a.timer;
            this.v = null;
            this.H = a.lb;
            this.j = mH(this);
            this.l = a.Tk || !1
        },
        oH = function() {
            var a;
            return !!window.IntersectionObserver && pz(null == (a = window.performance) ? void 0 : a.now)
        };
    nH.prototype.getSlotId = function() {
        return this.v
    };
    var qH = function(a, b) {
            if (a.j) {
                if (null != a.v) {
                    try {
                        pH(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.H && a.H(c)
                    }
                    a.j && a.j.unobserve(a.m)
                }
                a.v = b;
                a.j.observe(a.m)
            }
        },
        mH = function(a) {
            if (!_.q.IntersectionObserver) return null;
            var b = a.m.offsetWidth * a.m.offsetHeight,
                c = kH(a.B);
            b = [].concat(_.Ie(jH), _.Ie(lH(c, b)));
            pa(b);
            return new _.q.IntersectionObserver(function(d) {
                try {
                    for (var e = kH(a.B), f = _.w(d), g = f.next(); !g.done; g = f.next()) {
                        var h = g.value;
                        a.l && pH(a, Math.round(h.time), h.boundingClientRect.width * h.boundingClientRect.height, h.intersectionRect.width * h.intersectionRect.height, e, h.isIntersecting)
                    }
                } catch (k) {
                    a.H && a.H(k)
                }
            }, {
                threshold: b
            })
        },
        pH = function(a, b, c, d, e, f) {
            if (null == a.v) throw Error("Not Attached.");
            var g = new hH;
            c = _.mk(g, 1, c);
            d = _.mk(c, 2, d);
            e = _.mk(d, 3, e);
            b = _.mk(e, 4, b);
            f = nj(b, 5, f);
            f = Ab(f.j(), 4);
            bG(a.I, "1", 10, f, void 0, a.v)
        };
    var rH = function(a, b) {
            this.j = a;
            this.v = b
        },
        sH = function(a) {
            if (a.j.frames.google_ads_top_frame) return !0;
            var b = rz(a.j);
            b = b && b.contentWindow;
            if (!b) return !1;
            b.addEventListener("message", function(c) {
                var d = c.ports;
                "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
                    msgType: "__goog_top_url_resp",
                    topUrl: a.v
                })
            }, !1);
            return !0
        };
    var lk = function(a) {
        this.G = _.z(a)
    };
    _.T(lk, _.A);
    var rk = qe(lk),
        ok = [1, 3];
    var kk = {
        Cm: 0,
        ym: 1,
        zm: 9,
        vm: 2,
        wm: 3,
        Bm: 5,
        Am: 7,
        xm: 10
    };
    var tH = _.lu(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        ek = _.ue(tH);
    var uH = function() {
            this.id = "goog_" + Ky++
        },
        vH = function(a) {
            _.U.call(this);
            this.context = a;
            this.m = new _.t.Map
        };
    _.T(vH, _.U);
    vH.prototype.v = function() {
        _.U.prototype.v.call(this);
        this.m.clear()
    };
    vH.prototype.listen = function(a, b) {
        var c = this;
        if (this.H) return function() {};
        var d = "string" === typeof a ? a : a.id,
            e, f, g = null != (f = null == (e = this.m.get(d)) ? void 0 : e.add(b)) ? f : new _.t.Set([b]);
        this.m.set(d, g);
        return function() {
            return void wH(c, a, b)
        }
    };
    var yH = function(a) {
            var b = xH;
            var c = void 0 === c ? function() {
                return !0
            } : c;
            return new _.t.Promise(function(d) {
                var e = a.listen(b, function(f) {
                    c(f) && (e(), d(f))
                })
            })
        },
        wH = function(a, b, c) {
            var d;
            return !(null == (d = a.m.get("string" === typeof b ? b : b.id)) || !d.delete(c))
        },
        Sr = function(a, b, c, d) {
            var e, f, g, h, k, l, m, n;
            _.lb(function(p) {
                e = "string" === typeof b ? b : b.id;
                f = a.m.get(e);
                if (null == (g = f) || !g.size) return p.return();
                h = "function" === typeof window.CustomEvent ? new CustomEvent(e, {
                    detail: d,
                    bubbles: !0,
                    cancelable: !0
                }) : function() {
                    var r = document.createEvent("CustomEvent");
                    r.initCustomEvent(e, !0, !0, d);
                    return r
                }();
                k = [];
                l = _.w(f);
                m = l.next();
                for (n = {}; !m.done; n = {
                        ye: n.ye
                    }, m = l.next()) n.ye = m.value, k.push(new _.t.Promise(function(r) {
                    return function(v) {
                        return _.lb(function(u) {
                            if (1 == u.j) return _.mb(u, 0, 2);
                            mh(a.context, c, function() {
                                a.m.has(e) && f.has(r.ye) && (0, r.ye)(h)
                            }, !0);
                            v();
                            u.j = 0
                        })
                    }
                }(n)));
                return _.mb(p, _.t.Promise.all(k), 0)
            })
        },
        zH = new uH,
        AH = new uH,
        Tr = new uH,
        BH = new uH,
        Vr = new uH,
        CH = new uH,
        DH = new uH,
        Gp = new uH,
        xH = new uH,
        EH = new uH;
    var FH = function() {
            this.data = void 0;
            this.status = 0;
            this.j = []
        },
        GH = function(a) {
            a.data = void 0;
            a.status = 1
        };
    FH.prototype.ce = function() {
        this.j = []
    };
    var HH, LH, OH, st, PH, KH, JH, IH, QH;
    HH = function() {
        this.j = new _.t.Map;
        this.l = 0;
        this.m = new _.t.Map;
        this.ie = null;
        this.H = this.v = this.L = this.I = 0;
        this.re = null;
        this.o = new FH;
        this.B = new FH
    };
    LH = function(a, b) {
        a.j.get(b) || (a.j.set(b, {
            vc: !0,
            gg: "",
            Wc: "",
            hi: 0,
            eg: [],
            fg: [],
            lc: !1
        }), _.ap(b, function() {
            a.j.delete(b);
            IH(a, b)
        }), b.listen(AH, function(c) {
            c = c.detail;
            var d = a.j.get(b);
            d.gg = _.rj(c, 33) || "";
            d.lc = !0;
            JH(a, b, function() {
                return void(d.gg = "")
            });
            KH(a, b, function() {
                return void(d.lc = !1)
            })
        }))
    };
    _.Ur = function(a, b) {
        var c;
        return null == (c = a.j.get(b)) ? void 0 : c.vc
    };
    _.MH = function(a, b) {
        if (a = a.j.get(b)) a.vc = !1
    };
    _.NH = function(a, b) {
        if (a = a.j.get(b)) a.vc = !0
    };
    OH = function(a, b) {
        if (!b.length) return [];
        var c = Tg(b[0].getAdUnitPath());
        b.every(function(g) {
            return Tg(g.getAdUnitPath()) === c
        });
        var d = [];
        a = _.w(a.j);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.w(e.value);
            e = f.next().value;
            (f = f.next().value.gg) && Tg(e.getAdUnitPath()) === c && !_.y(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    st = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.Wc) ? d : ""
    };
    PH = function(a, b) {
        return (a = a.j.get(b)) ? a.hi - 1 : 0
    };
    KH = function(a, b, c) {
        (a = a.j.get(b)) && a.eg.push(c)
    };
    JH = function(a, b, c) {
        (a = a.j.get(b)) && a.fg.push(c)
    };
    IH = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.fg.slice(), a.fg.length = 0, a = _.w(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    QH = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.eg.slice(), a.eg.length = 0, a = _.w(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    HH.prototype.lc = function(a) {
        var b, c;
        return null != (c = null == (b = this.j.get(a)) ? void 0 : b.lc) ? c : !1
    };
    var RH = function(a, b, c) {
            if (a = a.j.get(b)) a.gi = c
        },
        SH = function(a, b) {
            if (a = a.j.get(b)) {
                var c;
                null == (c = a.gi) || c.va();
                delete a.gi
            }
        };
    var Ek = new _.t.Map,
        Dk = new _.t.Map;
    var Gk = function(a, b) {
        this.messageId = a;
        this.messageArgs = b
    };
    Gk.prototype.getMessageId = function() {
        return this.messageId
    };
    Gk.prototype.getMessageArgs = function() {
        return this.messageArgs
    };
    var TH = P(2),
        UH = P(3),
        VH = P(4),
        WH = P(5),
        XH = P(6),
        YH = P(12),
        ZH = P(14),
        $H = P(16),
        $k = P(19),
        aI = P(20),
        bI = P(23),
        cI = P(26),
        dI = P(28),
        eI = P(149),
        fI = P(30),
        gI = P(31),
        hI = P(34),
        iI = P(35),
        nl = P(36),
        ws = P(38),
        jI = P(40),
        kI = P(48),
        lI = P(50),
        mI = P(60),
        nI = P(63),
        oI = P(64),
        pI = P(66),
        qI = P(68),
        rI = P(69),
        sI = P(70),
        tI = P(71),
        uI = P(78),
        vI = P(80),
        lm = P(82),
        al = P(84),
        wI = P(85),
        xI = P(87),
        Uk = P(88),
        yI = P(92),
        zI = P(93),
        AI = P(99),
        cl = P(103),
        jm = P(104),
        BI = P(105),
        dm = P(106),
        em = P(107),
        km = P(108),
        CI = P(113),
        DI = P(114),
        EI = P(115),
        FI = P(117),
        GI = P(118),
        HI = P(120),
        II = P(119),
        Vl = P(121),
        JI = P(122),
        KI = P(123),
        mq = P(125),
        LI = P(126),
        MI = P(127),
        NI = P(144),
        aq = P(129),
        cq = P(132),
        OI = P(134),
        PI = P(135),
        QI = P(136),
        RI = P(137),
        SI = P(138),
        TI = P(139),
        UI = P(140),
        Dq = P(142),
        VI = P(143),
        WI = P(145),
        XI = P(147),
        Cs = P(148),
        YI = P(150),
        ZI = P(152),
        $I = P(153),
        aJ = P(154),
        Hq = P(155),
        bJ = P(156),
        cJ = P(157),
        dJ = P(158),
        eJ = P(159),
        fJ = P(160);
    var gJ = function(a, b, c) {
        var d = this;
        this.addEventListener = K(a, 86, function(e, f) {
            if ("function" !== typeof f) return Q(b, Ik("Service.addEventListener", [e, f])), d;
            var g = Jk(e);
            if (!g) return Q(b, zI(e)), d;
            c.addEventListener(g, f);
            return d
        });
        this.removeEventListener = K(a, 904, function(e, f) {
            var g = Jk(e);
            "function" === typeof f && g ? c.removeEventListener(g, f) : Q(b, Ik("Service.removeEventListener", [e, f]))
        });
        this.getSlots = K(a, 573, function() {
            return c.j.map(function(e) {
                return e.j
            })
        });
        this.getSlotIdMap = K(a, 574, function() {
            for (var e = {}, f = _.w(c.j), g = f.next(); !g.done; g = f.next()) g = g.value, e[g.toString()] = g.j;
            return e
        });
        this.getName = K(a, 575, function() {
            return c.getName()
        })
    };
    var Kk = function(a, b, c) {
        gJ.call(this, a, b, c);
        this.setRefreshUnfilledSlots = K(a, 59, function(d) {
            c.setRefreshUnfilledSlots(d)
        });
        this.notifyUnfilledSlots = K(a, 69, function(d) {
            c.vc && hJ(c, iJ(c, d))
        });
        this.refreshAllSlots = K(a, 60, function() {
            c.vc && hJ(c)
        });
        this.setVideoSession = K(a, 61, function(d, e, f) {
            c.I = e;
            c.C = f;
            "number" === typeof d && (e = yi().j, _.Uh(e, 29, null == d ? d : Kc(d)))
        });
        this.getDisplayAdsCorrelator = K(a, 62, function() {
            return String(Rw(yi().j, 26))
        });
        this.getVideoStreamCorrelator = K(a, 63, function() {
            var d = yi().j;
            d = er(d, 29);
            return null != d ? d : 0
        });
        this.isSlotAPersistentRoadblock = K(a, 64, function(d) {
            var e = _.y(c.j, "find").call(c.j, function(f) {
                return f.j === d
            });
            return !!e && jJ(c, e)
        });
        this.onImplementationLoaded = K(a, 65, function() {
            c.R.info(kI("GPT CompanionAds"))
        });
        this.slotRenderEnded = K(a, 67, function(d, e, f) {
            var g = _.y(c.j, "find").call(c.j, function(h) {
                return h.j === d
            });
            return g && kJ(c, g, e, f)
        })
    };
    _.T(Kk, gJ);
    var Mk = function(a, b, c) {
        gJ.call(this, a, b, c);
        this.setContent = K(a, 72, function(d) {
            var e = _.y(c.j, "find").call(c.j, function(f) {
                return f.j === d
            });
            Q(b, NI(), e)
        })
    };
    _.T(Mk, gJ);
    var el = function(a, b, c, d) {
        var e = this,
            f = c.getSlotId(),
            g = yi().j,
            h = kG(yi(), f.getDomId());
        this.set = K(a, 83, function(k, l) {
            "page_url" === k && l && (k = [Rk(Sk(new Tk, k), [String(l)])], _.bl(h, 3, k));
            return e
        });
        this.get = K(a, 84, function(k) {
            if ("page_url" !== k) return null;
            var l, m;
            return null != (m = null == (l = (_.E = h.La(), _.y(_.E, "find")).call(_.E, function(n) {
                return _.rj(n, 1) === k
            })) ? void 0 : _.Xk(l, 2)[0]) ? m : null
        });
        this.setClickUrl = K(a, 79, function(k) {
            Ok(k, h, f, b);
            return e
        });
        this.setTargeting = K(a, 81, function(k, l) {
            Vk(k, l, f, h, b);
            return e
        });
        this.updateTargetingFromMap = K(a, 85, function(k) {
            Wk(k, f, h, b);
            return e
        });
        this.display = K(a, 78, function() {
            var k = Vh(g, yi().v);
            var l = void 0 === l ? document : l;
            var m;
            null != (m = k.T[f.getDomId()]) && nj(m, 19, !0);
            m = f.getDomId();
            m = sv(m);
            var n = {
                id: m
            };
            var p = void 0 === p ? Wv : p;
            var r = _.y(Object, "assign").call(Object, {}, n);
            m = n.id;
            var v = n.style;
            n = n.data;
            r = (delete r.id, delete r.style, delete r.data, r);
            if (_.y(Object, "keys").call(Object, r).length) throw Error("Invalid attribute(s): " + _.y(Object, "keys").call(Object, r));
            m = {
                id: m,
                style: v ? v : void 0
            };
            if (n)
                for (v = _.w(_.y(n, "entries").call(n)), n = v.next(); !n.done; n = v.next()) r = _.w(n.value), n = r.next().value, r = r.next().value, ne(nG.test(n)), m[n] = r;
            _.Vv("div");
            p = _.$v("div", m, p);
            l.write(_.Rv(p));
            oi(f, l) && (xs(d), LH(d.K, f), lJ(d, k, f))
        });
        this.setTagForChildDirectedTreatment = K(a, 80, function(k) {
            if (0 === k || 1 === k) {
                var l = Kt(g) || new fG;
                l.setTagForChildDirectedTreatment(k);
                _.Yg(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = K(a, 567, function(k) {
            "boolean" === typeof k ? nj(h, 12, k) : Q(b, Ik("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = K(a, 448, function(k) {
            if (0 === k || 1 === k) {
                var l = Kt(g) || new fG;
                l.setTagForUnderAgeOfConsent(k);
                _.Yg(g, 25, l)
            }
            return e
        })
    };
    var Rp = {
        um: 0,
        rm: 1,
        sm: 2,
        tm: 3
    };
    var hl = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5,
            GAME_MANUAL_INTERSTITIAL: 7,
            LEFT_SIDE_RAIL: 8,
            RIGHT_SIDE_RAIL: 9
        },
        jl = {
            IAB_AUDIENCE_1_1: 1,
            IAB_CONTENT_2_1: 2,
            IAB_CONTENT_2_2: 3
        },
        il = {
            PURCHASED: 1,
            ORGANIC: 2
        };
    var ll = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a
    };
    var mJ = "",
        Pl = null;
    var um = function(a, b, c) {
        vH.call(this, a);
        this.slotId = b;
        this.j = c
    };
    _.T(um, vH);
    um.prototype.getSlotId = function() {
        return this.slotId
    };
    var df = function(a, b, c, d) {
        vH.call(this, a);
        this.adUnitPath = b;
        this.Jb = d;
        this.j = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.T(df, vH);
    _.aa = df.prototype;
    _.aa.getId = function() {
        return this.id
    };
    _.aa.getAdUnitPath = function() {
        return this.adUnitPath
    };
    _.aa.getName = function() {
        return this.adUnitPath
    };
    _.aa.toString = function() {
        return this.getId()
    };
    _.aa.getDomId = function() {
        return this.Jb
    };
    var nJ = function(a, b) {
        a.j = b
    };
    var nm = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js|\/pagead\/managed\/js\/gpt\.js)/;
    var rm = _.Xu(function() {
            return void uz("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        oJ = _.Xu(function() {
            return void uz("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
        }),
        pJ = _.Xu(function() {
            return void uz("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
        }),
        ym = function(a, b, c, d, e) {
            gJ.call(this, a, b, c);
            var f = this,
                g = yi().j,
                h = yi().v,
                k = !1;
            this.setTargeting = K(a, 1, function(l, m) {
                gm({
                    key: l,
                    value: m,
                    Aa: g,
                    serviceName: c.getName(),
                    Sk: c.enabled,
                    Za: e,
                    R: b,
                    context: a
                });
                return f
            });
            this.clearTargeting = K(a, 2, function(l) {
                mm(l, g, c.getName(), b);
                return f
            });
            this.getTargeting = K(a, 38, function(l) {
                return hm(l, g, b)
            });
            this.getTargetingKeys = K(a, 39, function() {
                return im(g)
            });
            this.setCategoryExclusion = K(a, 3, function(l) {
                "string" !== typeof l || Pk(l) ? Q(b, Ik("PubAdsService.setCategoryExclusion", [l])) : ((_.E = _.Xk(g, 3), _.y(_.E, "includes")).call(_.E, l) || bx(g, 3, l), b.info(wI(l)));
                return f
            });
            this.clearCategoryExclusions = K(a, 4, function() {
                _.Uh(g, 3);
                b.info(xI());
                return f
            });
            this.disableInitialLoad = K(a, 5, function() {
                nj(g, 4, !0);
                k || (k = !0, sm())
            });
            this.enableSingleRequest = K(a, 6, function() {
                if (c.enabled && !_.G(g, 6)) return Q(b, mI("PubAdsService.enableSingleRequest")), !1;
                b.info(nI("single request"));
                nj(g, 6, !0);
                return !0
            });
            this.enableAsyncRendering = K(a, 7, function() {
                return !0
            });
            this.enableSyncRendering = K(a, 8, function() {
                uz("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = K(a, 485, function(l) {
                var m = new Xs;
                m = _.ax(m, 1, 800);
                m = _.ax(m, 2, 400);
                m = _.Uh(m, 3, _.sc(3));
                if (_.na(l)) {
                    var n = l.fetchMarginPercent;
                    "number" === typeof n && (0 <= n ? _.ax(m, 1, n) : -1 === n && _.Uh(m, 1));
                    n = l.renderMarginPercent;
                    "number" === typeof n && (0 <= n ? _.ax(m, 2, n) : -1 === n && _.Uh(m, 2));
                    l = l.mobileScaling;
                    "number" === typeof l && (0 < l ? _.Uh(m, 3, _.sc(l)) : -1 === l && _.Uh(m, 3, _.sc(1)))
                }
                window.IntersectionObserver || !Bp(m, 1) && !Bp(m, 2) ? _.Yg(g, 5, m) : Q(b, YI())
            });
            this.setCentering = K(a, 9, function(l) {
                l = !!l;
                b.info(oI("centering", String(l)));
                nj(g, 15, l)
            });
            this.definePassback = K(a, 10, function(l, m) {
                return (l = xm(a, b, c, l, m, d)) && l.Xh
            });
            this.refresh = K(a, 11, function() {
                var l = _.gb.apply(0, arguments),
                    m = _.w(l),
                    n = m.next().value;
                m = m.next().value;
                m = void 0 === m ? {} : m;
                n && !Array.isArray(n) || !_.na(m) || m.changeCorrelator && "boolean" !== typeof m.changeCorrelator ? Q(b, Ik("PubAdsService.refresh", l)) : (m && !1 === m.changeCorrelator || g.setCorrelator(yz()), n = n ? qm(n, c) : c.j, c.refresh(Vh(g, h), n) || Q(b, Ik("PubAdsService.refresh", l)))
            });
            this.enableVideoAds = K(a, 12, function() {
                nj(g, 21, !0);
                qJ(c, g)
            });
            this.setVideoContent = K(a, 13, function(l, m) {
                rJ(c, l, m, g)
            });
            this.collapseEmptyDivs = K(a, 14, function(l) {
                l = void 0 === l ? !1 : l;
                l = void 0 === l ? !1 : l;
                nj(g, 11, !0);
                l = !!l;
                nj(g, 10, l);
                b.info(uI(String(l)));
                return !!_.G(g, 11)
            });
            this.clear = K(a, 15, function(l) {
                if (Array.isArray(l)) return sJ(c, g, h, qm(l, c));
                if (void 0 === l) return sJ(c, g, h, c.j);
                Q(b, Ik("PubAdsService.clear", [l]));
                return !1
            });
            this.setLocation = K(a, 16, function(l) {
                "string" !== typeof l ? Q(b, Ik("PubAdsService.setLocation", [l])) : mj(g, 8, l);
                return f
            });
            this.setCookieOptions = K(a, 17, function() {
                oJ();
                return f
            });
            this.setTagForChildDirectedTreatment = K(a, 18, function(l) {
                pJ();
                if (1 !== l && 0 !== l) return Q(b, JI("PubadsService.setTagForChildDirectedTreatment", Wl(l), "0,1")), f;
                var m = Kt(g) || new fG;
                m.setTagForChildDirectedTreatment(l);
                _.Yg(g, 25, m);
                return f
            });
            this.clearTagForChildDirectedTreatment = K(a, 19, function() {
                pJ();
                var l = Kt(g);
                if (!l) return f;
                l.clearTagForChildDirectedTreatment();
                _.Yg(g, 25, l);
                return f
            });
            this.setPublisherProvidedId = K(a, 20, function(l) {
                l = String(l);
                b.info(oI("PPID", l));
                mj(g, 16, l);
                return f
            });
            this.set = K(a, 21, function(l, m) {
                ol(l, m, g, c.getName(), b);
                return f
            });
            this.get = K(a, 22, function(l) {
                return pl(l, g, b)
            });
            this.getAttributeKeys = K(a, 23, function() {
                return ql(g)
            });
            this.display = K(a, 24, function(l, m, n, p) {
                return void c.display(l, m, d, n, p)
            });
            this.updateCorrelator = K(a, 25, function() {
                uz(pm("update"));
                Q(b, EI());
                g.setCorrelator(yz());
                return f
            });
            this.defineOutOfPagePassback = K(a, 35, function(l) {
                l = xm(a, b, c, l, [1, 1], d);
                if (!l) return null;
                oo(l.Aa, 15, 1);
                return l.Xh
            });
            this.setForceSafeFrame = K(a, 36, function(l) {
                "boolean" !== typeof l ? Q(b, Ik("PubAdsService.setForceSafeFrame", [Wl(l)])) : nj(g, 13, l);
                return f
            });
            this.setSafeFrameConfig = K(a, 37, function(l) {
                var m = Xl(b, l);
                m ? _.Yg(g, 18, m) : Q(b, Ik("PubAdsService.setSafeFrameConfig", [l]));
                return f
            });
            this.setRequestNonPersonalizedAds = K(a, 445, function(l) {
                pJ();
                if (0 !== l && 1 !== l) return Q(b, JI("PubAdsService.setRequestNonPersonalizedAds", Wl(l), "0,1")), f;
                var m = Kt(g) || new fG;
                nj(m, 8, !!l);
                _.Yg(g, 25, m);
                return f
            });
            this.setTagForUnderAgeOfConsent = K(a, 447, function(l) {
                l = void 0 === l ? 2 : l;
                pJ();
                if (2 !== l && 0 !== l && 1 !== l) return Q(b, JI("PubadsService.setTagForUnderAgeOfConsent", Wl(l), "2,0,1")), f;
                var m = Kt(g) || new fG;
                m.setTagForUnderAgeOfConsent(l);
                _.Yg(g, 25, m);
                return f
            });
            this.getCorrelator = K(a, 27, function() {
                return String(Rw(g, 26))
            });
            this.getTagSessionCorrelator = K(a, 631, function() {
                return _.qh(_.q)
            });
            this.getVideoContent = K(a, 30, function() {
                return tJ(c, g)
            });
            this.getVersion = K(a, 568, function() {
                return a.rc ? String(a.rc) : a.ub
            });
            this.forceExperiment = K(a, 569, function(l) {
                return void c.forceExperiment(l)
            });
            this.setCorrelator = K(a, 28, function(l) {
                uz(pm("set"));
                Q(b, DI());
                if (Kh(window)) return f;
                if (!Mm(l)) return Q(b, Ik("PubadsService.setCorrelator", [Wl(l)])), f;
                l = g.setCorrelator(l);
                nj(l, 27, !0);
                return f
            });
            this.markAsAmp = K(a, 570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = K(a, 571, function() {
                return !!_.G(g, 6)
            });
            this.setImaContent = K(a, 328, function(l, m) {
                null != _.rj(g, 22) ? rJ(c, l, m, g) : (nj(g, 21, !0), qJ(c, g), "string" === typeof l && mj(g, 19, l), "string" === typeof m && mj(g, 20, m))
            });
            this.getImaContent = K(a, 329, function() {
                return null != _.rj(g, 22) ? tJ(c, g) : c.enabled ? {
                    vid: _.M(g, 19) || "",
                    cmsid: _.M(g, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = K(a, 572, function() {
                return !!_.G(g, 4)
            });
            this.setPrivacySettings = K(a, 648, function(l) {
                if (!_.na(l)) return Q(b, Ik("PubAdsService.setPrivacySettings", [l])), f;
                var m = l.restrictDataProcessing,
                    n = l.childDirectedTreatment,
                    p = l.underAgeOfConsent,
                    r = l.limitedAds,
                    v = l.nonPersonalizedAds,
                    u = l.userOptedOutOfPersonalization,
                    x = l.trafficSource,
                    C, D = null != (C = Kt(g)) ? C : new fG;
                "boolean" === typeof v ? nj(D, 8, v) : void 0 !== v && Q(b, Vl("PubAdsService.setPrivacySettings", Wl(l), "nonPersonalizedAds", Wl(v)));
                "boolean" === typeof u ? nj(D, 13, u) : void 0 !== u && Q(b, Vl("PubAdsService.setPrivacySettings", Wl(l), "userOptedOutOfPersonalization", Wl(u)));
                "boolean" === typeof m ? nj(D, 1, m) : void 0 !== m && Q(b, Vl("PubAdsService.setPrivacySettings", Wl(l), "restrictDataProcessing", Wl(m)));
                "boolean" === typeof r ? (m = om(), r && !_.G(D, 9) && a.Qc && (v = a.Tb, u = Zg(a), C = new AA, C = _.bh(C, 1, !0), C = _.bh(C, 2, m), u = _.dh(u, 11, eh, C), Ke(v, u)), m ? nj(D, 9, r) : r && Q(b, XI())) : void 0 !== r && Q(b, Vl("PubAdsService.setPrivacySettings", Wl(l), "limitedAds", Wl(r)));
                void 0 !== p && (null === p ? D.setTagForUnderAgeOfConsent(2) : !1 === p ? D.setTagForUnderAgeOfConsent(0) : !0 === p ? D.setTagForUnderAgeOfConsent(1) : Q(b, Vl("PubAdsService.setPrivacySettings", Wl(l), "underAgeOfConsent", Wl(p))));
                void 0 !== n && (null === n ? D.clearTagForChildDirectedTreatment() : !1 === n ? D.setTagForChildDirectedTreatment(0) : !0 === n ? D.setTagForChildDirectedTreatment(1) : Q(b, Vl("PubAdsService.setPrivacySettings", Wl(l), "childDirectedTreatment", Wl(n))));
                void 0 !== x && (null === x ? _.Uh(D, 10) : (_.E = _.y(Object, "values").call(Object, il), _.y(_.E, "includes")).call(_.E, x) ? oo(D, 10, x) : Q(b, Vl("PubAdsService.setPrivacySettings", Wl(l), "trafficSource", Wl(x))));
                _.Yg(g, 25, D);
                return f
            })
        };
    _.T(ym, gJ);
    var uJ = function(a, b) {
        this.getId = K(a, 593, function() {
            return b.getId()
        });
        this.getAdUnitPath = K(a, 594, function() {
            return b.getAdUnitPath()
        });
        this.getName = K(a, 595, function() {
            return b.getName()
        });
        this.toString = K(a, 596, function() {
            return b.toString()
        });
        this.getDomId = K(a, 597, function() {
            return b.getDomId()
        })
    };
    var vJ = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        wJ = function(a, b) {
            a.advertiserId = b
        },
        xJ = function(a, b) {
            a.campaignId = b
        },
        yJ = function(a, b) {
            a.yieldGroupIds = b
        },
        zJ = function(a, b) {
            a.companyIds = b
        };
    var yh = function(a) {
        this.G = _.z(a)
    };
    _.T(yh, _.A);
    yh.prototype.getWidth = function() {
        return Rr(this, 1)
    };
    yh.prototype.getHeight = function() {
        return Rr(this, 2)
    };
    var Gm = function() {
        var a = new yh;
        return nj(a, 3, !0)
    };
    var Ch = function(a) {
        this.G = _.z(a)
    };
    _.T(Ch, _.A);
    Ch.ca = [2];
    var AJ = function(a) {
        this.G = _.z(a)
    };
    _.T(AJ, _.A);
    var BJ = function(a) {
        this.G = _.z(a)
    };
    _.T(BJ, _.A);
    BJ.ca = [1];
    var CJ = function(a) {
        this.G = _.z(a)
    };
    _.T(CJ, _.A);
    CJ.prototype.getAdUnitPath = function() {
        return _.M(this, 1)
    };
    CJ.prototype.getDomId = function() {
        return _.M(this, 2)
    };
    var DJ = function(a, b) {
        mj(a, 2, b)
    };
    CJ.prototype.La = function() {
        return Ah(this, Tk, 3)
    };
    CJ.prototype.getServices = function(a) {
        return Uw(this, 4, a)
    };
    var EJ = function(a, b) {
        _.bl(a, 5, b)
    };
    CJ.prototype.getClickUrl = function() {
        return _.M(this, 7)
    };
    CJ.prototype.setClickUrl = function(a) {
        return mj(this, 7, a)
    };
    CJ.prototype.getCategoryExclusions = function(a) {
        return Uw(this, 8, a)
    };
    var Qk = function(a) {
        return Ah(a, Tk, 9)
    };
    CJ.prototype.kc = function() {
        return _.xh(this, Tl, 13)
    };
    var Ss = function(a) {
        return _.vk(a, 15, 0)
    };
    CJ.ca = [3, 4, 5, 6, 8, 9, 27];
    var FJ = function(a, b) {
        this.width = a;
        this.height = b
    };
    FJ.prototype.getWidth = function() {
        return this.width
    };
    FJ.prototype.getHeight = function() {
        return this.height
    };
    var GJ = new _.t.Set(["unhideWindow"]);
    var Rm = function(a, b, c) {
        var d = this,
            e = kG(yi(), c.getDomId()),
            f = "",
            g = null,
            h = function() {
                return ""
            },
            k = "",
            l = !1;
        _.ap(c, function() {
            e = new CJ;
            f = "";
            g = null;
            h = function() {
                return ""
            };
            k = ""
        });
        c.listen(Tr, function(n) {
            var p = n.detail;
            n = p.Wg;
            p = p.isBackfill;
            n && (f = n, l = p)
        });
        this.set = K(a, 40, function(n, p) {
            Am(n, p, c, e, b);
            return d
        });
        this.get = K(a, 41, function(n) {
            return Bm(n, c, e, b)
        });
        this.getAttributeKeys = K(a, 42, function() {
            return Cm(e)
        });
        this.addService = K(a, 43, function(n) {
            n = Ek.get(n);
            if (!n) return Q(b, Ik("Slot.addService", [n]), c), d;
            var p = n.getName();
            if ((_.E = _.Xk(e, 4), _.y(_.E, "includes")).call(_.E, p)) return b.info(YH(p, c.toString()), c), d;
            n.slotAdded(c, e);
            return d
        });
        this.defineSizeMapping = K(a, 44, function(n) {
            try {
                var p = e;
                if (!Array.isArray(n)) throw new Nm("Size mapping must be an array");
                var r = n.map(Om);
                _.bl(p, 6, r)
            } catch (v) {
                n = v, kh(a, 44, n), uz("Incorrect usage of googletag.Slot defineSizeMapping: " + n.message)
            }
            return d
        });
        this.setClickUrl = K(a, 45, function(n) {
            Ok(n, e, c, b);
            return d
        });
        this.setCategoryExclusion = K(a, 46, function(n) {
            var p = e;
            "string" !== typeof n || Pk(n) ? Q(b, Ik("Slot.setCategoryExclusion", [n]), c) : ((_.E = _.Xk(p, 8), _.y(_.E, "includes")).call(_.E, n) || bx(p, 8, n), b.info(ZH(n), c));
            return d
        });
        this.clearCategoryExclusions = K(a, 47, function() {
            _.Uh(e, 8);
            b.info($H(), c);
            return d
        });
        this.getCategoryExclusions = K(a, 48, function() {
            return _.Xk(e, 8).slice()
        });
        this.setTargeting = K(a, 49, function(n, p) {
            Vk(n, p, c, e, b);
            return d
        });
        this.updateTargetingFromMap = K(a, 649, function(n) {
            Wk(n, c, e, b);
            return d
        });
        this.clearTargeting = K(a, 50, function(n) {
            dl(n, c, e, b);
            return d
        });
        this.getTargeting = K(a, 51, function(n) {
            return Yk(n, c, e, b)
        });
        this.getTargetingKeys = K(a, 52, function() {
            return Zk(e)
        });
        this.setCollapseEmptyDiv = K(a, 53, function(n, p) {
            var r = e;
            p = void 0 === p ? !1 : p;
            p = void 0 === p ? !1 : p;
            "boolean" !== typeof n || "boolean" !== typeof p ? Q(b, Ik("Slot.setCollapseEmptyDiv", [n, p]), c) : (r = nj(r, 10, n), nj(r, 11, n && p), p && !n && Q(b, aI(c.toString()), c));
            return d
        });
        this.getAdUnitPath = K(a, 54, function() {
            return c.getAdUnitPath()
        });
        this.getSlotElementId = K(a, 598, function() {
            return c.getDomId()
        });
        this.setForceSafeFrame = K(a, 55, function(n) {
            var p = e;
            "boolean" !== typeof n ? Q(b, Ik("Slot.setForceSafeFrame", [String(n)]), c) : nj(p, 12, n);
            return d
        });
        this.setSafeFrameConfig = K(a, 56, function(n) {
            var p = e,
                r = Xl(b, n);
            r ? _.Yg(p, 13, r) : b.error(Ik("Slot.setSafeFrameConfig", [n]), c);
            return d
        });
        c.listen(AH, function(n) {
            n = n.detail;
            if (Yl(n, 8)) g = null;
            else {
                g = new vJ;
                var p = !!Yl(n, 9);
                g.isBackfill = p;
                var r = Dd(n, 15, Ic),
                    v = Dd(n, 16, Ic);
                r.length && v.length && (g.sourceAgnosticCreativeId = r[0], g.sourceAgnosticLineItemId = v[0], p || (g.creativeId = r[0], g.lineItemId = v[0], (p = Dd(n, 22, Ic)) && p.length && (g.creativeTemplateId = p[0])));
                Dd(n, 17, Ic).length && wJ(g, Dd(n, 17, Ic)[0]);
                Dd(n, 18, Ic).length && xJ(g, Dd(n, 18, Ic)[0]);
                Dd(n, 19, Ic).length && yJ(g, Dd(n, 19, Ic));
                Dd(n, 20, Ic).length && zJ(g, Dd(n, 20, Ic));
                n = Dd(n, 45, sd(n.G) & 34 ? Ed : Fd).map(function(u) {
                    return jd(u)
                });
                n.length && (g.encryptedTroubleshootingInfo = n[0])
            }
        });
        this.getResponseInformation = K(a, 355, function() {
            return g
        });
        this.getName = K(a, 170, function() {
            b.error(VI());
            return c.getAdUnitPath()
        });
        var m = new uJ(a, c);
        this.getSlotId = K(a, 579, function() {
            return m
        });
        this.getServices = K(a, 580, function() {
            return _.Xk(e, 4).map(function(n) {
                var p = eG[n];
                if (p) {
                    var r, v, u;
                    n = null != (u = null == (v = (r = Pm())[p]) ? void 0 : v.call(r)) ? u : null
                } else n = null;
                return n
            })
        });
        this.getSizes = K(a, 581, function(n, p) {
            var r, v;
            return null != (v = null == (r = Dh(e, n, p)) ? void 0 : r.map(function(u) {
                return _.G(u, 3) ? "fluid" : new FJ(u.getWidth(), u.getHeight())
            })) ? v : null
        });
        this.getClickUrl = K(a, 582, function() {
            var n;
            return null != (n = e.getClickUrl()) ? n : ""
        });
        this.getTargetingMap = K(a, 583, function() {
            for (var n = {}, p = _.w(Qk(e)), r = p.next(); !r.done; r = p.next()) r = r.value, _.M(r, 1) && (n[_.rj(r, 1)] = _.Xk(r, 2));
            return n
        });
        this.getOutOfPage = K(a, 584, function(n) {
            return "number" === typeof n ? Ss(e) === n : 0 !== Ss(e)
        });
        this.getCollapseEmptyDiv = K(a, 585, function() {
            return null != Yl(e, 10) ? _.G(e, 10) : null
        });
        this.getDivStartsCollapsed = K(a, 586, function() {
            return null != Yl(e, 11) ? _.G(e, 11) : null
        });
        c.listen(BH, function(n) {
            h = n.detail.oj
        });
        this.getContentUrl = K(a, 587, function() {
            return h()
        });
        this.getFirstLook = K(a, 588, function() {
            uz("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        c.listen(AH, function(n) {
            var p;
            k = null != (p = n.detail.getEscapedQemQueryId()) ? p : ""
        });
        this.getEscapedQemQueryId = K(a, 591, function() {
            return k
        });
        this.getHtml = K(a, 592, function() {
            return l ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : f
        });
        this.setConfig = K(a, 1022, function(n) {
            var p = e;
            if (ff(n)) {
                var r = n.componentAuction,
                    v = n.adExpansion;
                if (null != r) {
                    var u = {
                        componentAuction: r
                    };
                    if (_.na(u)) {
                        if (r = Kd(p, 26), void 0 !== u.componentAuction) {
                            u = _.w(u.componentAuction);
                            for (var x = u.next(); !x.done; x = u.next()) {
                                var C = x.value;
                                x = C.configKey;
                                C = C.auctionConfig;
                                "string" !== typeof x || Pk(x) || (null === C ? r.delete(x) : C && r.set(x, JSON.stringify(C)))
                            }
                        }
                    } else Q(b, Ik("googletag.Slot.setConfig", [u]))
                }
                if (_.y(Object, "hasOwn").call(Object, n, "interstitial"))
                    if (5 !== Ss(p)) Q(b, fJ("interstitial"), c);
                    else {
                        r = n.interstitial;
                        b.info(bJ("interstitial", Wl(r)), c);
                        if (ff(r))
                            for (n = {}, r = _.w(_.y(Object, "entries").call(Object, r)), u = r.next(); !u.done; u = r.next()) switch (x = _.w(u.value), u = x.next().value, x = x.next().value, u) {
                                case "triggers":
                                    n.triggers = x;
                                    break;
                                default:
                                    Q(b, dJ("interstitial", u), c)
                            } else Q(b, eJ("googletag.slot.setConfig", "interstitial", Wl(r)), c), n = null;
                        u = n;
                        n = new BJ;
                        r = {};
                        if (u && u.triggers)
                            if (u = u.triggers, ff(u))
                                for (r.triggers = {}, u = _.w(_.y(Object, "entries").call(Object, u)), x = u.next(); !x.done; x = u.next()) {
                                    C = _.w(x.value);
                                    x = C.next().value;
                                    C = C.next().value;
                                    var D = x;
                                    x = C;
                                    if (GJ.has(D))
                                        if ("boolean" === typeof x) switch (D) {
                                            case "unhideWindow":
                                                C = new AJ, C = oo(C, 1, 2), C = nj(C, 2, x), oj(n, 1, AJ, C), r.triggers.Wm = x
                                        } else Q(b, eJ("interstitial.triggers", D, Wl(x)), c);
                                        else Q(b, dJ("interstitial.triggers", D), c)
                                } else Q(b, eJ("interstitial", "triggers", Wl(u)), c);
                        b.info(cJ("interstitial", Wl(r)), c);
                        _.Yg(p, 29, n)
                    }
                void 0 === v || null === v ? _.Uh(p, 28) : (v = v.enabled, "boolean" === typeof v ? (v = yn(v), _.Yg(p, 28, v)) : void 0 !== v && null !== v || _.Uh(p, 28))
            } else Q(b, Ik("googletag.slot.setConfig", [n]), c)
        })
    };
    var Z = function(a, b, c) {
        sF.call(this, b, c);
        this.context = a
    };
    _.T(Z, sF);
    Z.prototype.L = function(a) {
        kh(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var HJ = function(a, b, c, d, e) {
        var f = null,
            g = gh(a.context, b, e);
        _.ib(c, d, g) && (f = function() {
            return _.af(c, d, g)
        }, _.ap(a, f));
        return f
    };
    var Zm = function(a, b, c, d, e) {
        Z.call(this, a, 959);
        this.ib = b;
        this.output = V(this);
        this.l = X(this, b);
        xF(this, c);
        xF(this, d);
        e && xF(this, e)
    };
    _.T(Zm, Z);
    Zm.prototype.j = function() {
        this.output.D(this.l.value)
    };
    var Ym = function(a, b, c, d, e, f) {
        Z.call(this, a, 1172);
        this.R = b;
        this.K = c;
        this.A = d;
        this.l = vF(this);
        xF(this, e);
        this.o = X(this, f)
    };
    _.T(Ym, Z);
    Ym.prototype.j = function() {
        var a = this,
            b = new YD(this.A);
        _.S(this, b);
        if (oC(b.caller)) {
            var c = this.K.B,
                d = c.status,
                e = function(f) {
                    1 !== f.internalErrorState && (!f.internalErrorState && kf(f.applicableSections) ? oE(pE(a.o.value, f.applicableSections.filter(function(g) {
                        return _.y(Number, "isInteger").call(Number, g)
                    })), !1) : oE(qE(pE(a.o.value, f.applicableSections), f.gppString), function() {
                        if ("GPP_STRING_UNAVAILABLE" === f.gppString || "GPP_TIME_OUT" === f.gppString) return !1;
                        try {
                            return bE(f.gppString)
                        } catch (g) {
                            return kh(a.context, 1182, g), !1
                        }
                    }()));
                    a.l.notify()
                };
            switch (d) {
                case 2:
                    e(c.data);
                    break;
                case 1:
                    c.j.push(e);
                    break;
                case 0:
                    GH(c);
                    c.j.push(e);
                    this.R.info(HI());
                    b.addEventListener(gh(this.context, 1173, function(f) {
                        if ("ready" === f.pingData.signalStatus || kf(f.pingData.applicableSections)) c.data = f.pingData, c.status = 2, c.j.forEach(function(g) {
                            g(f.pingData)
                        }), c.ce()
                    }));
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.l.notify()
    };
    var Wm = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 874);
        this.R = b;
        this.K = c;
        this.A = d;
        this.C = e;
        this.l = vF(this);
        xF(this, f);
        this.o = X(this, g)
    };
    _.T(Wm, Z);
    Wm.prototype.j = function() {
        var a = this,
            b = new yC(this.A, {
                timeoutMs: -1,
                Zi: !0
            });
        _.S(this, b);
        if (AC(b)) {
            var c = this.K.o,
                d = c.status,
                e = function(f) {
                    var g = a.o.value,
                        h, k, l;
                    if (l = !(null == (h = a.C) ? 0 : _.G(h, 9))) {
                        var m = void 0 === m ? !1 : m;
                        l = EC(f) ? !1 === f.gdprApplies || "tcunavailable" === f.tcString || void 0 === f.gdprApplies && !m || "string" !== typeof f.tcString || !f.tcString.length ? !0 : CC(f, "1") : !1
                    }
                    h = nj(g, 5, l);
                    l = !FC(f, ["3", "4"]);
                    h = nj(h, 9, l);
                    h = mj(h, 2, f.tcString);
                    l = null != (k = f.addtlConsent) ? k : "";
                    k = mj(h, 4, l);
                    oo(k, 7, f.internalErrorState);
                    null != f.gdprApplies && nj(g, 3, f.gdprApplies);
                    _.H(DB) && !FC(f, ["2", "7", "9", "10"]) && nj(g, 8, !0);
                    a.l.notify()
                };
            switch (d) {
                case 2:
                    e(c.data);
                    break;
                case 1:
                    c.j.push(e);
                    break;
                case 0:
                    GH(c);
                    c.j.push(e);
                    this.R.info(GI());
                    b.addEventListener(function(f) {
                        EC(f) ? ("tcunavailable" === f.tcString ? a.R.info(II("failed")) : a.R.info(II("succeeded")), c.data = f, c.status = 2, c.j.forEach(function(g) {
                            g(f)
                        }), c.ce()) : GH(c)
                    });
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.l.notify()
    };
    var Vm = function(a, b, c, d, e) {
        Z.call(this, a, 875);
        this.R = b;
        this.A = c;
        this.l = vF(this);
        xF(this, d);
        this.o = X(this, e)
    };
    _.T(Vm, Z);
    Vm.prototype.j = function() {
        var a = this,
            b = new $C(this.A);
        _.S(this, b);
        if (oC(b.caller)) {
            var c = gh(this.context, 660, function(d) {
                d && "string" === typeof d.uspString && (mj(a.o.value, 1, d.uspString), nE(a.o.value, gh(a.context, 1187, function() {
                    var e = d.uspString;
                    var f = e = e.toUpperCase();
                    4 == f.length && (-1 == f.indexOf("-") || "---" === f.substring(1)) && "1" <= f[0] && "9" >= f[0] && Uz.hasOwnProperty(f[1]) && Uz.hasOwnProperty(f[2]) && Uz.hasOwnProperty(f[3]) ? (f = new Tz, f = _.ch(f, 1, parseInt(e[0], 10)), f = _.I(f, 2, Uz[e[1]]), f = _.I(f, 3, Uz[e[2]]), e = _.I(f, 4, Uz[e[3]])) : e = null;
                    return 2 === (null == e ? void 0 : _.vk(e, 3, 0))
                })()));
                a.l.notify()
            });
            this.R.info(FI());
            aD(b, c)
        } else this.l.notify()
    };
    var Tm = function(a, b) {
        Z.call(this, a, 958);
        this.l = b;
        this.ib = V(this)
    };
    _.T(Tm, Z);
    Tm.prototype.j = function() {
        var a = new mE,
            b = this.l ? _.G(this.l, 9) : _.H(Wq) ? om() : !1;
        nj(a, 5, !b);
        this.ib.D(a)
    };
    var Um = function(a, b, c, d) {
        d = void 0 === d ? .001 : d;
        Z.call(this, a, 960);
        this.A = b;
        this.o = d;
        this.l = X(this, c)
    };
    _.T(Um, Z);
    Um.prototype.j = function() {
        var a = this;
        mh(this.context, 894, function() {
            return void Li("cmpMet", function(b) {
                Ri(b, a.context);
                var c = new yC(a.A);
                _.S(a, c);
                var d = new $C(a.A);
                _.S(a, d);
                L(b, "fc", Number(a.l.value));
                L(b, "tcfv1", Number(!!a.A.__cmp));
                L(b, "tcfv2", Number(AC(c)));
                L(b, "usp", Number(!!oC(d.caller)));
                L(b, "ptt", 17)
            }, a.o)
        })
    };
    var IJ = function(a, b, c, d) {
        Z.call(this, a, 1103);
        this.l = b;
        this.U = c;
        this.privacyTreatments = d;
        this.output = V(this)
    };
    _.T(IJ, Z);
    IJ.prototype.j = function() {
        this.output.D(!!_.G(this.U, 5) && !_.G(this.U, 9) && !_.G(this.U, 13) && (!_.H(Xm) || !_.G(this.U, 12)) && (this.l ? _.G(this.l, 9) || _.G(this.l, 8) || _.G(this.l, 1) || _.H(tB) && _.G(this.l, 13) || 1 === _.vk(this.l, 6, 2) || 1 === no(this.l, 5) || _.H(sB) && _.y(this.privacyTreatments, "includes").call(this.privacyTreatments, 1) ? !1 : !0 : !0))
    };
    var cn = function(a) {
        this.R = a;
        this.v = this.j = 0
    };
    cn.prototype.push = function() {
        for (var a = _.w(_.gb.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(_.t.globalThis), this.j++)
            } catch (c) {
                this.v++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.R.error(fI(String(c)))
            }
        }
        this.R.info(gI(String(this.j), String(this.v)));
        return this.j
    };
    var an = function(a, b) {
        this.push = K(a, 76, b.push.bind(b))
    };
    var JJ = ["Debug", "Info", "Warning", "Error", "Fatal"],
        KJ = function(a, b, c) {
            this.level = a;
            this.message = b;
            this.j = c;
            this.timestamp = new Date
        };
    _.aa = KJ.prototype;
    _.aa.getSlot = function() {
        return this.j
    };
    _.aa.getLevel = function() {
        return this.level
    };
    _.aa.getTimestamp = function() {
        return this.timestamp
    };
    _.aa.getMessage = function() {
        return this.message
    };
    _.aa.toString = function() {
        return this.timestamp.toTimeString() + ": " + JJ[this.level] + ": " + this.message
    };
    var LJ = _.lu(["https://console.googletagservices.com/pubconsole/loader.js"]),
        nn = _.ue(LJ),
        rn, qn = !1,
        hn = !1,
        kn = !1;
    var ts = function(a, b) {
        this.getAllEvents = K(a, 563, function() {
            return hn ? MJ(b).slice() : []
        });
        this.getEventsBySlot = K(a, 565, function(c) {
            return hn ? NJ(b, c).slice() : []
        });
        this.getEventsByLevel = K(a, 566, function(c) {
            return hn ? OJ(b, c).slice() : []
        })
    };
    var PJ = {
            20: function(a) {
                return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
            },
            23: function(a) {
                return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
            },
            34: function(a) {
                return "Size mapping is null because invalid mappings were added: " + a[0] + "."
            },
            60: function(a) {
                return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
            },
            66: function(a) {
                return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
            },
            68: function() {
                return "Slots cannot be cleared until service is enabled."
            },
            80: function(a) {
                return "Slot object at position " + a[0] + " is of incorrect type."
            },
            84: function(a) {
                return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
            },
            93: function(a) {
                return "Failed to register listener. Unknown event type: " + a[0] + "."
            },
            96: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
            },
            122: function(a) {
                return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
            },
            121: function(a) {
                return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
            },
            151: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + "). All zero-area slot sizes were removed."
            },
            105: function(a) {
                return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
            },
            106: function(a) {
                return "Publisher betas " + a[0] + " were declared after enableServices() was called."
            },
            107: function(a) {
                return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
            },
            108: function(a) {
                return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
            },
            123: function(a) {
                return "Refresh was throttled for slot: " + a[0] + "."
            },
            113: function(a) {
                return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
            },
            114: function() {
                return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            115: function() {
                return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            132: function(a) {
                return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
            },
            133: function() {
                return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
            },
            134: function(a) {
                return tn(a[0]) + " " + a[1] + " not requested: Format already created on the page."
            },
            135: function(a) {
                return tn(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
            },
            136: function(a) {
                return tn(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
            },
            137: function(a) {
                return tn(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
            },
            138: function(a) {
                return tn(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
            },
            139: function(a) {
                return tn(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
            },
            140: function(a) {
                return tn(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
            },
            142: function(a) {
                return "A google product ad tag with click url " + a[0] + " does not contain any elements enabled for clicking."
            },
            145: function(a) {
                return tn(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
            },
            143: function() {
                return "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
            },
            147: function() {
                return "GPT must be loaded from the limited ads URL to enable limited ads functionality."
            },
            148: function() {
                return "CommerceAdsConfig must contain a valid value for either categories or queries."
            },
            150: function() {
                return "Legacy browser does not support intersection observer causing lazy render/fetch as well as viewability events not to work properly."
            },
            154: function(a) {
                return "Refresh is disabled for " + tn(a[0]) + " " + a[1] + "."
            },
            152: function() {
                return "Attempted to load GPT multiple times."
            },
            155: function() {
                return "Using deprecated googletag.encryptedSignalProviders. Please use googletag.secureSignalProviders instead."
            },
            158: function(a) {
                return "Unrecognized property encountered when calling setConfig: " + a[0] + "." + a[1]
            },
            159: function(a) {
                return "Invalid value encountered when calling setConfig: " + a[0] + "." + a[1] + ": " + a[2]
            },
            160: function(a) {
                return "slot.setConfig key " + a[0] + " is not valid for this slot."
            }
        },
        QJ = {
            26: function(a) {
                return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
            },
            28: function(a) {
                return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
            },
            149: function(a) {
                return "Error in googletag.defineSlot: Invalid ad unit path provided " + a[0] + ", see https://support.google.com/admanager/answer/10477476 for more information."
            },
            92: function(a) {
                return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
            },
            30: function(a) {
                return "Exception in googletag.cmd function: " + a[0] + "."
            },
            125: function(a) {
                return "google-product-ad element is invalid: " + a[0] + "."
            },
            126: function() {
                return "Attempted to collect prebid data but window.pbjs is undefined."
            },
            153: function() {
                return "Attempted to load GPT from both standard and limited ads domains."
            },
            127: function(a) {
                return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
            },
            144: function() {
                return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead."
            }
        };
    var RJ = function(a) {
            this.context = a;
            this.m = this.j = 0;
            this.H = window;
            this.v = [];
            this.v.length = 1E3
        },
        MJ = function(a) {
            return [].concat(_.Ie(a.v.slice(a.j)), _.Ie(a.v.slice(0, a.j))).filter(function(b) {
                return !!b
            })
        },
        NJ = function(a, b) {
            return MJ(a).filter(function(c) {
                return c.getSlot() === b
            })
        },
        OJ = function(a, b) {
            return MJ(a).filter(function(c) {
                return c.getLevel() >= b
            })
        };
    RJ.prototype.log = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        var e, f;
        c = new KJ(a, b, null != (f = null == (e = void 0 === c ? null : c) ? void 0 : e.j) ? f : null);
        this.v[this.j] = c;
        this.j = (this.j + 1) % 1E3;
        e = 2 === a || 3 === a;
        f = b.getMessageArgs();
        b = b.getMessageId();
        if (b = PJ[b] || QJ[b]) {
            b = "[GPT] " + b(f);
            if (d) throw new Nm(b);
            d = this.m < _.Cf(XA) && e && _.q.console;
            if (this.H === top && d || _.y(_.q.navigator.userAgent, "includes").call(_.q.navigator.userAgent, "Lighthouse")) {
                var g, h, k, l;
                2 === a ? null == (h = (g = _.q.console).warn) || h.call(g, b) : null == (l = (k = _.q.console).error) || l.call(k, b);
                this.m++
            }
        }
        return c
    };
    RJ.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var Q = function(a, b, c) {
        return a.log(2, b, c, !1)
    };
    RJ.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var SJ = function() {
            var a = {
                    X: yi().j,
                    ti: new Date(Date.now()),
                    Yg: window.location.href
                },
                b = this;
            a = void 0 === a ? {} : a;
            var c = void 0 === a.X ? yi().j : a.X,
                d = void 0 === a.ti ? new Date(Date.now()) : a.ti,
                e = void 0 === a.Yg ? window.location.href : a.Yg;
            this.j = "";
            this.H = this.v = null;
            this.B = this.l = !1;
            this.m = function() {
                return !1
            };
            a = {};
            var f = {},
                g = {};
            this.I = (g[3] = (a[72] = function(h, k) {
                var l = b.v;
                k = Number(k);
                h = null !== l ? _.zf("w5uHecUBa2S:" + Number(h) + ":" + l) % k === Math.floor(d.valueOf() / 864E5) % k : void 0;
                return h
            }, a[13] = function() {
                return _.gb.apply(0, arguments).some(function(h) {
                    return _.y(b.j, "startsWith").call(b.j, h)
                })
            }, a[12] = function() {
                return !!_.G(c, 6)
            }, a[15] = function(h) {
                return b.m(h)
            }, a[66] = function() {
                try {
                    return !!HTMLScriptElement.supports("webbundle")
                } catch (h) {
                    return !1
                }
            }, a[67] = function() {
                return b.l
            }, a[68] = function() {
                return b.B
            }, a[74] = function() {
                return _.y(_.gb.apply(0, arguments), "includes").call(_.gb.apply(0, arguments), String(_.zf(e)))
            }, a), g[4] = (f[14] = function() {
                var h = Number(b.H || void 0);
                isNaN(h) ? h = void 0 : (h = new Date(1E3 * h), h = 1E4 * h.getFullYear() + 100 * (h.getMonth() + 1) + h.getDate());
                return h
            }, f), g[5] = {}, g)
        },
        TJ = function(a, b) {
            if (b && !a.v) {
                b = b.split(":");
                a.v = _.y(b, "find").call(b, function(d) {
                    return 0 === d.indexOf("ID=")
                }) || null;
                var c;
                a.H = (null == (c = _.y(b, "find").call(b, function(d) {
                    return 0 === d.indexOf("T=")
                })) ? void 0 : c.substring(2)) || null
            }
        };
    var tt = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 863);
        this.o = c;
        this.Wc = Number(b);
        this.l = X(this, d);
        this.F = X(this, e);
        this.J = X(this, f);
        this.C = X(this, g)
    };
    _.T(tt, Z);
    tt.prototype.j = function() {
        var a = this.J.value,
            b = this.l.value,
            c = this.C.value,
            d = this.F.value,
            e = this.o;
        var f = vn(e);
        var g = b.getBoundingClientRect();
        e = _.bk(e) ? Mh(b, e) : {
            x: 0,
            y: 0
        };
        b = e.x;
        e = e.y;
        g = new _.Dz(e, b + g.right, e + g.bottom, b);
        b = new IE;
        b = _.ax(b, 1, g.top);
        b = _.ax(b, 3, g.bottom);
        b = _.ax(b, 2, g.left);
        g = _.ax(b, 4, g.right);
        b = new JE;
        b = _.Uh(b, 1, _.Ec(this.Wc));
        d = nj(b, 2, !d);
        d = _.Yg(d, 3, g);
        c = _.ax(d, 4, c);
        f = _.ax(c, 5, f);
        f = {
            type: "asmres",
            payload: pk(f)
        };
        a.ports[0].postMessage(f)
    };
    var Pp = function(a, b, c, d) {
        Z.call(this, a, 1061);
        var e = this;
        this.output = V(this);
        this.output.Ka(new _.t.Promise(function(f) {
            var g = b.listen(c, function(h) {
                h = d(h);
                null !== h && (g(), f(h))
            });
            _.ap(e, g)
        }))
    };
    _.T(Pp, Z);
    Pp.prototype.j = function() {};
    var Fp = function(a, b, c, d) {
        d = void 0 === d ? function() {
            return !0
        } : d;
        Z.call(this, a, 1061);
        var e = this;
        this.output = vF(this);
        oF(this.output, new _.t.Promise(function(f) {
            var g = b.listen(c, function(h) {
                d(h) && (g(), f())
            });
            _.ap(e, g)
        }))
    };
    _.T(Fp, Z);
    Fp.prototype.j = function() {};
    var rt = function(a, b, c, d) {
        Pp.call(this, a, b, Gp, function(e) {
            e = e.detail;
            var f;
            return "asmreq" === (null == (f = e.data) ? void 0 : f.type) && Rr(HE(e.data.payload), 1) === Number(c) ? e : null
        });
        this.o = d;
        this.l = V(this)
    };
    _.T(rt, Pp);
    rt.prototype.j = function() {
        this.l.D(vn(this.o))
    };
    var UJ = /(<head(\s+[^>]*)?>)/i,
        Vs = function(a, b, c, d, e) {
            Z.call(this, a, 665);
            this.output = V(this);
            this.l = X(this, b);
            this.o = Y(this, c);
            this.C = X(this, d);
            this.F = X(this, e)
        };
    _.T(Vs, Z);
    Vs.prototype.j = function() {
        var a;
        0 !== this.l.value.kind || null == (a = this.o.value) || !_.rj(a, 1) || this.F.value ? this.output.D(this.l.value) : (a = this.l.value.vb, La("Firefox") || La("FxiOS") || (a = a.replace(UJ, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")), this.C.value && (a = a.replace(UJ, '$1<meta name="referrer" content="origin">')), this.output.D({
            kind: 0,
            vb: a
        }))
    };
    var VJ = function(a, b, c, d) {
        Z.call(this, a, 1124);
        this.Hd = vF(this);
        this.o = X(this, b);
        this.l = X(this, c);
        xF(this, d)
    };
    _.T(VJ, Z);
    VJ.prototype.j = function() {
        _.Kz(this.l.value, {
            "min-width": "100%",
            visibility: "hidden"
        });
        _.Kz(this.o.value, "min-width", "100%");
        this.Hd.notify()
    };
    var WJ = function(a, b, c, d, e) {
        Z.call(this, a, 1125);
        this.o = X(this, b);
        this.l = X(this, c);
        xF(this, d);
        xF(this, e)
    };
    _.T(WJ, Z);
    WJ.prototype.j = function() {
        var a = this.o.value,
            b = a.contentDocument;
        b && (a.setAttribute("height", String(b.body.offsetHeight)), a.setAttribute("width", String(b.body.offsetWidth)), _.Kz(this.l.value, "visibility", "visible"))
    };
    var ut = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 718);
        this.slotId = b;
        this.Dg = e;
        this.o = f;
        this.C = g;
        this.output = V(this);
        this.l = new Fp(this.context, this.slotId, xH);
        this.J = Y(this, c);
        this.F = Y(this, d);
        this.M = X(this, h)
    };
    _.T(ut, Z);
    ut.prototype.j = function() {
        var a = !this.M.value;
        if (null == this.F.value || "height" !== this.J.value || a) this.l.va(), this.output.D(!1);
        else {
            a = new xj;
            _.S(this, a);
            var b = new VJ(this.context, this.o, this.C, this.Dg);
            N(a, b);
            N(a, this.l);
            N(a, new WJ(this.context, this.o, this.C, this.l.output, b.Hd));
            Gj(a);
            this.output.D(!0)
        }
    };
    var Gn = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        Z.call(this, a, 699);
        this.W = b;
        this.slotId = c;
        this.l = d;
        this.Vc = e;
        this.J = Y(this, f);
        this.O = X(this, g);
        this.C = X(this, h);
        this.M = X(this, k);
        this.o = Y(this, l);
        this.V = X(this, m);
        this.F = X(this, n);
        p && xF(this, p);
        this.Rb = vF(this, r)
    };
    _.T(Gn, Z);
    Gn.prototype.j = function() {
        var a = this.O.value,
            b = this.C.value;
        b.style.width = "";
        b.style.height = "";
        if ("height" !== this.J.value) {
            var c, d = null != (c = this.o.value) ? c : 0;
            c = this.M.value;
            var e = this.V.value,
                f = this.F.value,
                g = !1;
            switch (d) {
                case 1:
                case 2:
                case 4:
                case 5:
                    var h = this.context;
                    g = this.W;
                    var k = this.slotId,
                        l = this.l,
                        m = this.Vc,
                        n, p = a.parentElement ? null == (n = qi(a.parentElement, window)) ? void 0 : n.width : void 0;
                    n = c.width;
                    var r = c.height,
                        v = 0;
                    var u = 0;
                    var x = Fh(l);
                    x = _.w(x);
                    for (var C = x.next(); !C.done; C = x.next()) {
                        var D = C.value;
                        Array.isArray(D) && (C = D[0], D = D[1], v < C && (v = C), u < D && (u = D))
                    }
                    u = [v, u];
                    v = u[0] < n;
                    r = u[1] < r;
                    if (v || r) {
                        u = n + "px";
                        x = {
                            "max-height": "none",
                            "max-width": u,
                            padding: "0px",
                            width: u
                        };
                        r && (x.height = "auto");
                        Ci(b, a, x);
                        b = {};
                        if ((_.E = [2, 5], _.y(_.E, "includes")).call(_.E, d) || v && n > zi(e.width)) b.width = u, b["max-width"] = u;
                        r && (b.height = "auto", b["max-height"] = "none");
                        c: {
                            for (F in b)
                                if (Object.prototype.hasOwnProperty.call(b, F)) {
                                    var F = !1;
                                    break c
                                }
                            F = !0
                        }
                        F ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px", _.Bi(a, b), b = !0)
                    } else b = !1;
                    b: switch (u = c.width, F = g.defaultView || g.parentWindow || _.q, d) {
                        case 2:
                        case 5:
                            a = Di(a, F, u, e, m);
                            break b;
                        case 1:
                        case 4:
                            if (e = a.parentElement)
                                if (m = Sh(e)) {
                                    C = m.width;
                                    m = oi(k, F.document);
                                    n = qi(m, F);
                                    r = n.position;
                                    D = zi(n.width) || 0;
                                    v = qi(e, F);
                                    x = "rtl" === v.direction ? "Right" : "Left";
                                    m = x.toLowerCase();
                                    F = "absolute" === r ? 0 : zi(v["padding" + x]);
                                    v = zi(v["border" + x + "Width"]);
                                    u = Math.max(Math.round((C - Math.max(D, u)) / 2), 0);
                                    C = {};
                                    D = 0;
                                    var B = Nn(n);
                                    B && (D = B[4] * ("Right" === x ? -1 : 1), x = B[3] || 1, 1 !== (B[0] || 1) || 1 !== x) && (B[0] = 1, B[3] = 1, C.transform = "matrix(" + B.join(",") + ")");
                                    x = 0;
                                    switch (r) {
                                        case "fixed":
                                            var J, R = null != (J = Number(ri(n.getPropertyValue(m)))) ? J : 0,
                                                O;
                                            J = null != (O = e.getBoundingClientRect().left) ? O : 0;
                                            x = R - J;
                                            break;
                                        case "relative":
                                            x = null != (R = Number(ri(n.getPropertyValue(m)))) ? R : 0;
                                            break;
                                        case "absolute":
                                            C[m] = "0"
                                    }
                                    C["margin-" + m] = u - F - v - x - D + "px";
                                    _.Bi(a, C);
                                    a = !0
                                } else a = !1;
                            else a = !1;
                            break b;
                        default:
                            a = !1
                    }
                    b || a ? (_.y(mG, "includes").call(mG, d) && Fi(h, g, k, l, d, c.width, c.height, p, "gpt_slotexp", f), g = !0) : g = !1;
                    break;
                case 3:
                    d = this.context, O = this.W, g = this.slotId, k = this.l, p = this.Vc, l = a.parentElement ? null == (h = qi(a.parentElement, window)) ? void 0 : h.width : void 0, h = c.width, J = c.height, R = zi(e.height) || 0, J >= R || "none" === e.display || "hidden" === e.visibility || !p || -12245933 === p.width || a.getBoundingClientRect().bottom <= p.height ? g = !1 : (p = {
                        height: J + "px"
                    }, Ci(b, a, p), _.Bi(a, p), Fi(d, O, g, k, 3, h, J, l, "gpt_slotred", f), g = !0)
            }!g && _.H(IA) && Fi(this.context, this.W, this.slotId, this.l, 0, c.width, c.height, void 0, "gpt_pgbrk", f)
        }
        this.Rb.notify()
    };
    var Bn = function(a, b, c, d, e, f) {
        Z.call(this, a, 1114);
        this.J = b;
        this.ha = c;
        this.o = V(this);
        this.l = V(this);
        this.F = X(this, d);
        this.C = X(this, e);
        this.M = X(this, f)
    };
    _.T(Bn, Z);
    Bn.prototype.j = function() {
        if (this.J) {
            var a = this.J.split(":");
            if (2 !== a.length || "#flexibleAdSlotDebugSize" !== a[0]) XJ(this);
            else {
                var b = a[1];
                a = YJ(this, b);
                var c;
                (c = /(?:.*)height=(ratio|[0-9]+)(?:;.*|$)/.exec(b)) ? (c = c[1], "ratio" === c ? c = a && this.F.value && this.C.value ? Math.floor(this.C.value / this.F.value * a) : null : (c = Number(c), c = 0 <= c ? c : null)) : c = null;
                b = (b = /(?:.*)ius=(.+,?)+(?:;.*|$)/.exec(b)) ? b[1].split(",") : [];
                a || c ? (this.o.D(new _.Rh(null != a ? a : this.F.value, null != c ? c : this.C.value)), this.l.D(b)) : XJ(this)
            }
        } else XJ(this)
    };
    var YJ = function(a, b) {
            b = /(?:.*)width=(parent|viewport|[0-9]+)(?:;.*|$)/.exec(b);
            if (!b) return null;
            b = b[1];
            if ("viewport" === b) return a.ha;
            if ("parent" === b) {
                var c, d, e;
                return (b = null != (e = null == (d = Sh(null == (c = a.M.value) ? void 0 : c.parentElement)) ? void 0 : d.width) ? e : null) ? Math.min(b, a.ha) : null
            }
            a = Number(b);
            return 0 <= a ? a : null
        },
        XJ = function(a) {
            a.o.Z();
            a.l.D([])
        };
    var Cn = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v) {
        Z.call(this, a, 681);
        this.adUnitPath = b;
        this.M = c;
        this.Ec = d;
        this.F = Y(this, e);
        this.aa = Y(this, f);
        this.V = Y(this, g);
        this.O = Y(this, h);
        this.l = X(this, k);
        this.o = X(this, l);
        this.J = X(this, m);
        this.qa = V(this, n);
        this.C = V(this, p);
        this.ud = V(this, v);
        this.bc = V(this, r)
    };
    _.T(Cn, Z);
    Cn.prototype.j = function() {
        var a = ZJ(this),
            b = this.O.value,
            c;
        if (c = !this.Ec && a && b) this.l.value.length ? (c = this.adUnitPath.split("/"), c = _.y(this.l.value, "includes").call(this.l.value, c[c.length - 1])) : c = !0;
        if (c) {
            c = this.J.value;
            var d, e, f = null != (e = null == (d = Sh(c.parentElement)) ? void 0 : d.width) ? e : 0;
            d = b.width;
            b = b.height;
            $J(this, !0, d, b, {
                kind: 0,
                vb: '<html><body style="height:' + (b - 2 + "px;width:" + (d - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;"><p>Requested size:')) + (a.width + "x" + a.height + "</p><p>Rendered size:") + (d + "x" + b + "</p></body></html>")
            }, d <= f ? 1 : 2, c)
        } else if (a = this.aa.value, b = this.V.value, this.Ec) $J(this, !1, null != a ? a : 0, null != b ? b : 0, this.o.value);
        else {
            if (null == a) throw new Nm("Missing 'width'.");
            if (null == b) throw new Nm("Missing 'height'.");
            $J(this, !1, a, b, this.o.value)
        }
    };
    var ZJ = function(a) {
            a = Fh(a.M)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.Rh(a[0], a[1]) : null
        },
        $J = function(a, b, c, d, e, f, g) {
            f = void 0 === f ? a.F.value : f;
            a.ud.D(b);
            a.C.D(new _.Rh(c, d));
            a.qa.D(e);
            a.bc.Fa(f);
            g && _.Kz(g, "opacity", .5)
        };
    var Fn = function(a, b, c) {
        Z.call(this, a, 698);
        this.A = b;
        this.output = V(this);
        this.l = X(this, c)
    };
    _.T(Fn, Z);
    Fn.prototype.j = function() {
        this.output.Fa(qi(this.l.value, this.A))
    };
    var aK = null;
    var bK = function(a, b, c, d, e) {
        Z.call(this, a, 937, _.Cf(pB));
        this.gb = b;
        this.l = V(this);
        this.o = V(this);
        this.C = V(this);
        this.Hb = c;
        this.Yb = d;
        this.zc = e
    };
    _.T(bK, Z);
    bK.prototype.j = function() {
        var a = {},
            b;
        if (null == (b = _.xh(this.gb, Ix, 2)) ? 0 : _.G(b, 2)) a["*"] = {
            Fd: !0
        };
        b = new _.t.Set;
        for (var c = _.w(Ah(this.gb, Hx, 1)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            for (var e = _.w([_.M(d, 2), _.M(d, 1)].filter(function(p) {
                    return !!p
                })), f = e.next(); !f.done; f = e.next()) a[f.value] = {
                Fd: _.G(d, 3)
            };
            d = _.w(Dd(d, 4, Cc));
            for (e = d.next(); !e.done; e = d.next()) b.add(e.value)
        }
        this.Hb.D(a);
        this.l.D([].concat(_.Ie(b)));
        var g, h;
        a = null == (g = _.xh(this.gb, Ix, 2)) ? void 0 : null == (h = _.xh(g, Ex, 1)) ? void 0 : Ah(h, Dx, 1);
        this.o.Fa((null == a ? 0 : a.length) ? a : null);
        var k;
        this.Yb.D(!(null == (k = _.xh(this.gb, Ix, 2)) || !_.G(k, 4)));
        var l;
        this.zc.D(!(null == (l = _.xh(this.gb, Ix, 2)) || !_.G(l, 5)));
        var m, n;
        g = null == (m = _.xh(this.gb, Ix, 2)) ? void 0 : null == (n = _.xh(m, Ex, 3)) ? void 0 : Ah(n, Dx, 1);
        this.C.Fa((null == g ? 0 : g.length) ? g : null)
    };
    bK.prototype.I = function(a) {
        this.m(a)
    };
    bK.prototype.m = function() {
        this.Hb.D({});
        this.l.D([]);
        this.o.Z();
        this.Yb.D(!1);
        this.zc.D(!1);
        this.C.Z()
    };
    var cK = function(a, b, c, d) {
        Z.call(this, a, 980);
        this.Za = b;
        this.output = new En;
        this.l = X(this, c);
        this.o = X(this, d)
    };
    _.T(cK, Z);
    cK.prototype.j = function() {
        (_.E = _.y(Object, "entries").call(Object, this.l.value), _.y(_.E, "find")).call(_.E, function(c) {
            var d = _.w(c);
            c = d.next().value;
            d = d.next().value;
            return "*" !== c && (null == d ? void 0 : d.Fd)
        }) && (this.Za.B = !0);
        $l(25, this.context);
        for (var a = _.w(this.o.value), b = a.next(); !b.done; b = a.next()) sf(b.value);
        this.output.notify()
    };
    var dK = function(a, b, c, d) {
        Z.call(this, a, 931);
        this.l = Y(this, b);
        this.uc = c;
        this.Zb = d
    };
    _.T(dK, Z);
    dK.prototype.j = function() {
        var a = this.l.value,
            b = new _.t.Map;
        this.uc.D(new _.t.Map);
        if (a) {
            var c;
            a = _.w(null != (c = this.l.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = Ah(d, Cx, 1);
                c = 1 === _.vk(c[0], 1, 0) ? Ww(c[0]) : Xw(c[0], Vw);
                d = _.Ze(d, 2);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.Zb.D(b)
    };
    dK.prototype.m = function() {
        this.uc.D(new _.t.Map);
        this.Zb.D(new _.t.Map)
    };
    var eK = function(a, b, c) {
        Z.call(this, a, 981);
        this.o = V(this);
        this.C = Y(this, b);
        this.l = c
    };
    _.T(eK, Z);
    eK.prototype.j = function() {
        var a = new _.t.Map,
            b, c = _.w(null != (b = this.C.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = Ah(b, Cx, 1);
            d = 1 === _.vk(d[0], 1, 0) ? Ww(d[0]) : Xw(d[0], Vw);
            a.set(d, _.Ze(b, 2))
        }
        this.o.D(a);
        this.l.D(new vx)
    };
    eK.prototype.m = function() {
        this.o.D(new _.t.Map);
        var a = this.l,
            b = a.D;
        var c = new vx;
        c = oo(c, 1, 2);
        b.call(a, c)
    };
    var fK = function(a, b, c, d, e, f) {
        Z.call(this, a, 976);
        this.nextFunction = d;
        this.l = e;
        this.requestBidsConfig = f;
        xF(this, b);
        xF(this, c)
    };
    _.T(fK, Z);
    fK.prototype.j = function() {
        var a;
        null == (a = this.nextFunction) || a.apply(this.l, [this.requestBidsConfig])
    };
    var gK = function(a, b, c, d, e, f) {
        Z.call(this, a, 975);
        this.o = b;
        this.l = c;
        this.C = d;
        this.pbjs = e;
        this.requestBidsConfig = f;
        this.output = new En
    };
    _.T(gK, Z);
    gK.prototype.j = function() {
        $n(this.pbjs, this.o, this.l, this.C, this.requestBidsConfig);
        this.output.notify()
    };
    gK.prototype.m = function() {
        this.output.notify()
    };
    var hK = function(a, b, c, d, e, f) {
        Z.call(this, a, 1100);
        this.pbjs = b;
        this.l = c;
        this.o = d;
        this.C = e;
        this.requestBidsConfig = f;
        this.output = new En
    };
    _.T(hK, Z);
    hK.prototype.j = function() {
        var a, b, c = null != (b = null == (a = this.l) ? void 0 : a.get("*")) ? b : _.Cf(NA);
        if (c) this.Xb(c);
        else {
            var d, e, f, g;
            a = null != (g = null != (f = null == (d = this.requestBidsConfig) ? void 0 : d.adUnits) ? f : null == (e = this.pbjs) ? void 0 : e.adUnits) ? g : [];
            d = _.w(a);
            for (e = d.next(); !e.done; e = d.next())
                if (e = e.value.code) c = b = a = g = void 0, f = null != (g = null != (a = null == (c = this.l) ? void 0 : c.get(_.H(Un) ? Tn(e) : e)) ? a : null == (b = this.l) ? void 0 : b.get(_.zf(e))) ? g : 0, this.Xb(f)
        }
        this.output.notify()
    };
    hK.prototype.Xb = function(a) {
        var b;
        null != (b = this.o) && nj(b, 2, this.C);
        if (a) {
            var c;
            null == (c = this.o) || oo(c, 1, 1);
            if (!this.C) {
                this.requestBidsConfig.timeout = a;
                var d, e, f;
                b = null != (f = null == (e = (d = this.pbjs).getConfig) ? void 0 : e.call(d).s2sConfig) ? f : [];
                if (Array.isArray(b))
                    for (d = _.w(b), e = d.next(); !e.done; e = d.next()) e.value.timeout = a;
                else b.timeout = a;
                var g, h;
                null == (h = (g = this.pbjs).setConfig) || h.call(g, {
                    bidderTimeout: a
                })
            }
        }
    };
    hK.prototype.m = function() {
        this.output.notify()
    };
    var iK = function(a, b, c, d, e, f, g, h) {
        _.U.call(this);
        this.j = a;
        this.B = b;
        this.m = c;
        this.l = d;
        this.o = e;
        this.I = f;
        this.L = g;
        this.pbjs = h
    };
    _.T(iK, _.U);
    iK.prototype.push = function(a) {
        var b = a.context,
            c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            var d = new xj;
            _.S(this, d);
            var e = new hK(this.j, this.pbjs, this.o, this.I, this.L, a),
                f = new gK(this.j, this.B, this.m, this.l, this.pbjs, a);
            N(d, e);
            N(d, f);
            N(d, new fK(this.j, f.output, e.output, c, b, a));
            Gj(d)
        }
    };
    var bo = function(a, b) {
        this.push = K(a, 932, function(c) {
            b.push(c)
        })
    };
    var jK = function(a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, a, 951);
        this.A = window;
        this.F = X(this, b);
        this.o = Y(this, d);
        this.C = X(this, e);
        this.M = X(this, f);
        this.l = Y(this, g);
        this.O = Y(this, h);
        this.J = X(this, k);
        xF(this, c);
        this.Oe = null != l ? l : V(this);
        this.Pe = null != m ? m : V(this)
    };
    _.T(jK, Z);
    jK.prototype.j = function() {
        var a = !!Pm().pbjs_hooks;
        this.Pe.D(a);
        this.Oe.Fa(a ? null : _.wg());
        var b, c = null == (b = this.o.value) ? void 0 : b.size,
            d;
        b = (null == (d = this.l.value) ? void 0 : d.size) || _.Cf(NA);
        d = this.F.value;
        var e, f = null != (e = Pm().pbjs_hooks) ? e : [];
        e = new iK(this.context, this.o.value, this.C.value, this.M.value, this.l.value, this.O.value, this.J.value, d);
        _.S(this, e);
        f = _.w(f);
        for (var g = f.next(); !g.done; g = f.next()) e.push(g.value);
        if (c || b || a) Pm().pbjs_hooks = co(this.context, e);
        !c && !b || a || ao(d, this.A)
    };
    var kK = function(a, b, c) {
        Z.call(this, a, 1093);
        this.l = new nF(b);
        this.o = X(this, c)
    };
    _.T(kK, Z);
    kK.prototype.j = function() {
        var a = this.l.value;
        if (a) {
            var b;
            (null == (b = this.o.value["*"]) ? 0 : b.Fd) && Array.isArray(a.installedModules) && (b = new jn("pbjs_modules"), Ri(b, this.context), L(b, "pbmods", a.installedModules.join("~")), ln(b))
        }
    };
    var lK = function(a, b, c) {
        Z.call(this, a, 966);
        this.A = b;
        this.Cb = c
    };
    _.T(lK, Z);
    lK.prototype.j = function() {
        var a = this,
            b = Xf(this.A);
        if (b) this.Cb.D(b);
        else if (b = Object.getOwnPropertyDescriptor(this.A, "_pbjsGlobals"), !b || b.configurable) {
            var c = null;
            Object.defineProperty(this.A, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = Xf(a.A)) && a.Cb.D(d)
                },
                get: function() {
                    return c
                }
            })
        }
    };
    lK.prototype.m = function() {};
    var mK = function(a, b, c, d, e) {
        Z.call(this, a, 1146, _.Cf(pB));
        this.Za = b;
        this.A = d;
        this.l = e;
        this.o = wF(this, c)
    };
    _.T(mK, Z);
    mK.prototype.j = function() {
        var a = this.o.value,
            b = new xj;
        _.S(this, b);
        var c = new lK(this.context, this.A, this.l.Cb);
        N(b, c);
        if (a) {
            a = new bK(this.context, a, this.l.Hb, this.l.Yb, this.l.zc);
            N(b, a);
            var d = new cK(this.context, this.Za, a.Hb, a.l);
            N(b, d);
            var e = new dK(this.context, a.o, this.l.uc, this.l.Zb);
            N(b, e);
            var f = new eK(this.context, a.C, this.l.hf);
            N(b, f);
            d = new jK(this.context, c.Cb, d.output, e.Zb, this.l.Yb, e.uc, f.o, f.l, a.zc, this.l.Oe, this.l.Pe);
            N(b, d);
            _.H(KA) || (c = new kK(this.context, c.Cb, a.Hb), N(b, c))
        } else nK(this);
        Gj(b)
    };
    var nK = function(a) {
        a.l.Hb.D({});
        a.l.Zb.D(new _.t.Map);
        a.l.Yb.D(!1);
        a.l.uc.D(new _.t.Map);
        a.l.Oe.Z();
        a.l.Pe.D(!1);
        a.l.hf.D(new vx);
        a.l.zc.D(!1)
    };
    mK.prototype.I = function(a) {
        this.m(a)
    };
    mK.prototype.m = function() {
        nK(this)
    };
    var oK = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        pK = function(a, b, c, d, e, f, g) {
            Z.call(this, a, 920);
            this.R = b;
            this.T = c;
            this.pbjs = f;
            this.C = g;
            this.F = V(this);
            this.o = V(this);
            this.J = [];
            this.l = new _.t.Map;
            this.V = X(this, d);
            this.O = Y(this, e.Zb);
            this.M = X(this, e.Yb);
            this.fa = X(this, e.uc);
            this.aa = Y(this, e.hf)
        };
    _.T(pK, Z);
    pK.prototype.j = function() {
        var a = qK(this, this.pbjs);
        a ? (this.C.Fa(a), this.F.D(this.l), this.o.D(this.J)) : rK(this)
    };
    pK.prototype.I = function(a) {
        this.m(a)
    };
    pK.prototype.m = function(a) {
        this.R.error(MI(a.message));
        rK(this)
    };
    var rK = function(a) {
            a.C.Z();
            a.F.Z();
            a.o.Z()
        },
        qK = function(a, b) {
            var c = (0, b.getEvents)(),
                d = c.filter(function(g) {
                    var h = g.args;
                    return "auctionEnd" === g.eventType && h.auctionId
                }),
                e = !1,
                f = a.V.value.map(function(g) {
                    var h = new Ax,
                        k = function(la) {
                            return la === g.getDomId() || la === g.getAdUnitPath()
                        },
                        l, m = null != (l = sK.get(g)) ? l : 0,
                        n;
                    l = null != (n = d.filter(function(la) {
                        var Da, ya, Oa;
                        return Number(null == (Da = la.args) ? void 0 : Da.timestamp) > m && (null == (ya = la.args) ? void 0 : null == (Oa = ya.adUnitCodes) ? void 0 : _.y(Oa, "find").call(Oa, k))
                    })) ? n : [];
                    if (!l.length) return a.J.push(g), [g, h];
                    var p;
                    n = null == (p = l.reduce(function(la, Da) {
                        return Number(Da.args.timestamp) > Number(la.args.timestamp) ? Da : la
                    })) ? void 0 : p.args;
                    if (!n) return [g, h];
                    var r = void 0 === n.bidderRequests ? [] : n.bidderRequests;
                    p = void 0 === n.bidsReceived ? [] : n.bidsReceived;
                    var v = n.auctionId;
                    n = n.timestamp;
                    if (!v || null == n || !r.length) return [g, h];
                    sK.has(g) || _.ap(g, function() {
                        return sK.delete(g)
                    });
                    sK.set(g, n);
                    n = Bx(h);
                    Math.random() < _.Cf(MA) && b.version && oK.test(b.version) && mj(n, 6, b.version);
                    var u;
                    yx(n, null == (u = a.aa) ? void 0 : u.value);
                    u = pi(function() {
                        return Co(c, v)
                    });
                    l = Qk(a.T[g.getDomId()]);
                    r = _.w(r);
                    for (var x = r.next(), C = {}; !x.done; C = {
                            bidderCode: C.bidderCode,
                            wg: C.wg
                        }, x = r.next()) {
                        var D = x.value;
                        C.bidderCode = D.bidderCode;
                        var F = D.bids;
                        x = D.timeout;
                        C.wg = D.src;
                        D = D.auctionStart;
                        F = _.w(F);
                        for (var B = F.next(), J = {}; !B.done; J = {
                                Zc: J.Zc
                            }, B = F.next()) {
                            var R = B.value;
                            J.Zc = R.bidId;
                            var O = R.transactionId;
                            B = R.adUnitCode;
                            var W = R.getFloor;
                            R = R.mediaTypes;
                            if (J.Zc && k(B)) {
                                e = !0;
                                po(n, g, B);
                                O && (null != _.rj(n, 4) || mj(n, 4, O), a.l.has(O) || a.l.set(O, D));
                                null == Bp(n, 8) && _.y(Number, "isFinite").call(Number, x) && _.ax(n, 8, x);
                                var ba = _.y(p, "find").call(p, function(la) {
                                    return function(Da) {
                                        return Da.requestId === la.Zc
                                    }
                                }(J));
                                O = fo(n, function(la) {
                                    return function() {
                                        var Da = io(new jo, la.bidderCode);
                                        ko(la.bidderCode, b, Da);
                                        switch (la.wg) {
                                            case "client":
                                                oo(Da, 7, 1);
                                                break;
                                            case "s2s":
                                                oo(Da, 7, 2)
                                        }
                                        return Da
                                    }
                                }(C)());
                                ro(n, O, B, a.O.value, a.M.value, a.fa.value, W);
                                ba ? (ho(O, 1), "number" === typeof ba.timeToRespond && lo(O, ba.timeToRespond), B = eo(ba, l, R), go(O, B)) : (B = u().get(J.Zc)) && !B.Eh ? lo(ho(O, 2), Math.round(B.latency)) : (B = ho(O, 3), _.y(Number, "isFinite").call(Number, x) && lo(B, x))
                            }
                        }
                    }
                    var ha;
                    (null == (ha = b.getConfig) ? 0 : ha.call(b).useBidCache) && mo(n, g, v, l, b);
                    return [g, h]
                });
            return e ? new _.t.Map(f) : null
        },
        sK = new _.t.Map;
    var tK = function(a, b, c, d) {
        Z.call(this, a, 1019);
        this.T = c;
        this.pbjs = d;
        this.l = Y(this, b)
    };
    _.T(tK, Z);
    tK.prototype.j = function() {
        uK(this)
    };
    var uK = function(a) {
        if (!(Math.random() >= _.Cf(LA))) {
            var b = (a.l.value || []).filter(function(k) {
                return Qk(a.T[k.getDomId()]).some(function(l) {
                    return "hb_pb" === _.rj(l, 1)
                })
            });
            if (b.length) {
                var c, d, e, f, g, h = (null == (c = a.pbjs) ? 0 : null == (d = c.adUnits) ? 0 : d.length) ? [].concat(_.Ie(new _.t.Set(null == (e = a.pbjs) ? void 0 : e.adUnits.map(function(k) {
                    return k.code
                })))) : _.y(Object, "keys").call(Object, (null == (f = a.pbjs) ? void 0 : null == (g = f.getAdserverTargeting) ? void 0 : g.call(f)) || {});
                c = new jn("haux");
                L(c, "ius", b.map(function(k) {
                    return k.getAdUnitPath()
                }).join("~"));
                L(c, "dids", b.map(function(k) {
                    return k.getDomId()
                }).join("~"));
                L(c, "paucs", h.join("~"));
                Ri(c, a.context);
                ln(c)
            }
        }
    };
    var Ho = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1153);
        this.R = b;
        this.T = c;
        this.Nb = d;
        this.F = e;
        this.Vd = f;
        this.l = h;
        this.J = X(this, f.Hb);
        this.o = new nF(f.Cb);
        g && (this.C = Y(this, g))
    };
    _.T(Ho, Z);
    Ho.prototype.j = function() {
        var a, b = null == (a = this.o) ? void 0 : a.value;
        if (a = vK(this)) null != b && b.libLoaded ? "function" !== typeof b.getEvents ? (this.R.error(LI()), a = !1) : a = !0 : a = !1;
        if (a) {
            a = new xj;
            var c = new pK(this.context, this.R, this.T, this.F, this.Vd, b, this.l.vg);
            N(a, c);
            N(a, new tK(this.context, c.o, this.T, b));
            Gj(a)
        } else this.l.vg.Z()
    };
    var vK = function(a) {
        var b;
        if (null == (b = a.C) ? 0 : b.value) return !0;
        var c = a.J.value;
        if (!c) return !1;
        var d;
        return !(null == (d = c["*"]) || !d.Fd) || a.Nb.split(",").some(function(e) {
            var f;
            return !(null == (f = c[e]) || !f.Fd)
        })
    };
    var wK = function(a, b, c, d, e) {
        Z.call(this, a, 982);
        this.C = d;
        this.Ne = e;
        this.o = X(this, b);
        this.l = X(this, c)
    };
    _.T(wK, Z);
    wK.prototype.j = function() {
        for (var a = this, b = _.w(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), c = b.next(), d = {}; !c.done; d = {
                fd: d.fd,
                Je: d.Je
            }, c = b.next()) d.fd = c.value, d.Je = function(e) {
            return function(f) {
                if (a.C === f.adId) {
                    var g = new jn("hbm_brt");
                    Ri(g, a.context);
                    L(g, "et", e.fd);
                    L(g, "sf", a.o.value);
                    L(g, "qqid", a.l.value);
                    var h, k, l;
                    L(g, "bc", String(null != (l = null != (k = f.bidderCode) ? k : null == (h = f.bid) ? void 0 : h.bidder) ? l : ""));
                    ln(g)
                }
            }
        }(d), (0, this.Ne.onEvent)(d.fd, d.Je), _.ap(this, function(e) {
            return function() {
                return void mh(a.context, a.id, function() {
                    var f, g;
                    return void(null == (g = (f = a.Ne).offEvent) ? void 0 : g.call(f, e.fd, e.Je))
                }, !0)
            }
        }(d))
    };
    wK.prototype.m = function() {};
    var Jo = function(a, b, c, d, e) {
        Z.call(this, a, 1134);
        this.bf = d;
        this.ic = e;
        this.o = Y(this, b);
        this.l = new nF(c)
    };
    _.T(Jo, Z);
    Jo.prototype.j = function() {
        var a;
        if (this.o.value && null != (a = this.l.value) && a.onEvent) {
            a = new xj;
            var b = new wK(this.context, this.bf, this.ic, this.o.value, this.l.value);
            N(a, b);
            Gj(a)
        }
    };
    var AK = function(a, b, c, d) {
            var e = this;
            this.context = a;
            this.K = c;
            this.j = new _.t.Map;
            this.v = new _.t.Map;
            this.timer = _.qf(ih);
            oH() && (_.ib(window, "DOMContentLoaded", gh(a, 334, function() {
                for (var f = _.w(e.j), g = f.next(); !g.done; g = f.next()) {
                    var h = _.w(g.value);
                    g = h.next().value;
                    h = h.next().value;
                    xK(e, g, h) && e.j.delete(g)
                }
            })), b.listen(CH, function(f) {
                f = f.detail;
                var g = f.T;
                return void yK(e, zK(d, f.ug), Rr(g, 20))
            }), b.listen(DH, function(f) {
                f = f.detail;
                var g = f.T;
                f = zK(d, f.ug);
                g = Rr(g, 20);
                var h = e.v.get(f);
                null != h ? qH(h, g) : yK(e, f, g)
            }))
        },
        yK = function(a, b, c) {
            xK(a, b, c) ? a.j.delete(b) : (a.j.set(b, c), _.ap(b, function() {
                return a.j.delete(b)
            }))
        },
        xK = function(a, b, c) {
            var d = oi(b);
            if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
            d = new nH({
                A: window,
                timer: a.timer,
                Jb: d,
                lb: function(e) {
                    return void kh(a.context, 336, e)
                },
                Tk: _.H(VB)
            });
            if (!d.j) return !1;
            qH(d, c);
            a.v.set(b, d);
            KH(a.K, b, function() {
                return void a.v.delete(b)
            });
            return !0
        };
    var BK = function(a, b, c, d, e) {
        Z.call(this, a, 1058);
        this.A = b;
        this.U = c;
        this.output = vF(this);
        d && (this.l = Y(this, d.Gb));
        xF(this, e)
    };
    _.T(BK, Z);
    BK.prototype.j = function() {
        var a;
        if ((_.H(Vq) ? xf(this.A.isSecureContext, this.A, this.A.document) : uf("shared-storage", this.A.document)) && (null == (a = this.l) ? 0 : a.value) && !_.H(PA) && _.G(this.U, 5)) {
            a = {
                message: "goog:spam:client_age",
                pvsid: this.context.pvsid,
                sendPingToRCS: _.H(QA)
            };
            var b = this.l.value;
            b(a)
        }
        this.output.notify()
    };
    var CK = function(a, b, c) {
        Z.call(this, a, 1199);
        this.l = c;
        this.o = Y(this, b)
    };
    _.T(CK, Z);
    CK.prototype.j = function() {
        var a = this.o.value;
        a && (a = kG(this.l, a.getSlotElementId()), nj(a, 30, !0))
    };
    var DK = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1109);
        this.W = c;
        this.X = d;
        this.l = e;
        this.C = f;
        this.F = g;
        this.o = h;
        this.output = V(this);
        this.J = Y(this, b)
    };
    _.T(DK, Z);
    DK.prototype.j = function() {
        var a = this,
            b = this.J.value;
        b && (this.o.push(function() {
            b.addService(a.l)
        }), zz(this.W, function() {
            a.F();
            a.C(b);
            _.G(a.X, 4) && a.l.refresh([b])
        }))
    };
    var EK = {},
        No = (EK[64] = OI, EK[134217728] = PI, EK[32768] = QI, EK[536870912] = RI, EK[8] = SI, EK[512] = TI, EK[1048576] = UI, EK[4194304] = WI, EK);
    var FK = function(a) {
        return "22639388115" === Tg(a.getAdUnitPath())
    };
    var GK = function(a, b, c, d, e, f) {
        Z.call(this, a, 1108);
        this.adUnitPath = b;
        this.format = c;
        this.pb = d;
        this.o = e;
        this.R = f;
        this.output = V(this);
        this.l = V(this)
    };
    _.T(GK, Z);
    GK.prototype.j = function() {
        var a = $o(this.context, this.R, this.o, {
            gh: this.format,
            adUnitPath: this.adUnitPath,
            pb: this.pb
        });
        this.l.Fa(a);
        this.output.Fa(a ? a.j : null)
    };
    var HK = function(a, b, c, d) {
        Z.call(this, a, 1111);
        this.l = c;
        this.o = d;
        this.C = Y(this, b)
    };
    _.T(HK, Z);
    HK.prototype.j = function() {
        var a = this.C.value;
        a && (a = kG(this.l, a.getSlotElementId()), oj(a, 27, Qx, this.o))
    };
    var IK = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v) {
        xj.call(this);
        this.context = a;
        this.W = b;
        this.adUnitPath = c;
        this.format = d;
        this.pb = e;
        this.O = f;
        this.J = g;
        this.M = h;
        this.F = k;
        this.X = l;
        this.o = m;
        this.V = n;
        this.R = p;
        this.aa = r;
        this.L = v;
        a = N(this, new GK(this.context, this.adUnitPath, this.format, this.pb, this.V, this.R));
        this.L && N(this, new HK(this.context, a.output, this.o, this.L));
        this.aa && N(this, new CK(this.context, a.output, this.o));
        N(this, new DK(this.context, a.output, this.W, this.X, this.O, this.J, this.M, this.F));
        this.j = {
            Um: a.l
        }
    };
    _.T(IK, xj);
    var bp = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1198);
        this.W = b;
        this.googletag = c;
        this.X = d;
        this.l = e;
        this.o = f;
        this.R = g;
        this.C = X(this, h)
    };
    _.T(bp, Z);
    bp.prototype.j = function() {
        for (var a = this, b = _.w(this.C.value), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            c = d.getAdUnitPath();
            d = _.vk(d, 2, 0);
            c && d && (c = new IK(this.context, this.W, c, d, !0, this.googletag.pubads(), this.googletag.display, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, this.X, this.l, this.o, this.R, !0), Gj(c), _.S(this, c))
        }
    };
    var Hs = function(a, b) {
        Z.call(this, a, 1110);
        this.A = b;
        this.output = V(this)
    };
    _.T(Hs, Z);
    Hs.prototype.j = function() {
        var a = this.A;
        a = _.H(RB) && void 0 !== a.credentialless && (_.H(SB) || a.crossOriginIsolated);
        this.output.D(a)
    };
    var JK = function(a, b, c, d, e, f) {
        Z.call(this, a, 935);
        this.K = b;
        this.P = c;
        this.W = d;
        this.output = vF(this);
        this.l = X(this, e);
        xF(this, f)
    };
    _.T(JK, Z);
    JK.prototype.j = function() {
        var a = this.P,
            b = a.X;
        a = a.T;
        for (var c = _.w(this.l.value), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a[d.getDomId()],
                f = this.W;
            dp(e, b) && !this.K.lc(d) && fp(d, f, e, b)
        }
        this.output.notify()
    };
    var KK = function(a, b, c, d, e) {
        Z.call(this, a, 864);
        this.K = b;
        this.P = c;
        this.W = d;
        this.l = vF(this);
        this.o = X(this, e)
    };
    _.T(KK, Z);
    KK.prototype.j = function() {
        for (var a = _.w(this.o.value), b = a.next(); !b.done; b = a.next())
            if (b = b.value, _.Ur(this.K, b)) {
                var c = this.P,
                    d = c.X;
                c = c.T[b.getDomId()];
                dp(c, d) && fp(b, this.W, c, d);
                QH(this.K, b);
                var e = void 0,
                    f = void 0;
                null != (e = null != (f = Lo(c, 10)) ? f : _.G(d, 11)) && e && fp(b, this.W, c, d)
            }
        this.l.notify()
    };
    var lp = function(a, b, c, d) {
        Z.call(this, a, 879);
        this.o = b;
        this.l = V(this);
        c && (this.C = X(this, d))
    };
    _.T(lp, Z);
    lp.prototype.j = function() {
        var a, b;
        (null != (b = null == (a = this.C) ? void 0 : a.value) ? b : tC(this.o)) ? (a = uC(this.o), this.l.Ka(a)) : this.l.Z()
    };
    var kp = function(a, b, c) {
        Z.call(this, a, 896);
        this.l = b;
        this.Fc = V(this);
        c && xF(this, c)
    };
    _.T(kp, Z);
    kp.prototype.j = function() {
        this.Fc.D(tC(this.l))
    };
    var LK = function(a, b) {
        Z.call(this, a, 1018);
        this.se = vF(this);
        this.l = Y(this, b)
    };
    _.T(LK, Z);
    LK.prototype.j = function() {
        var a, b, c, d = _.w(null != (c = null == (a = this.l.value) ? void 0 : null == (b = _.xh(a, lC, 5)) ? void 0 : Dd(b, 1, Cc)) ? c : []);
        for (a = d.next(); !a.done; a = d.next()) sf(a.value);
        this.se.notify()
    };
    var MK = function(a, b) {
        Z.call(this, a, 1070);
        this.l = V(this);
        this.o = Y(this, b)
    };
    _.T(MK, Z);
    MK.prototype.j = function() {
        var a, b = null == (a = this.o.value) ? void 0 : _.xh(a, lC, 5);
        if (b) {
            a = [];
            for (var c = _.w(Dd(b, 2, Jc)), d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                d = new Qx;
                var f = new Ox;
                e = _.Uh(f, 1, null == e ? e : _.Hc(e));
                d = _.Yg(d, 2, e);
                null != Bp(b, 3) && (e = new Mx, e = oo(e, 1, 1), f = _.Sw(b, 3), e = _.mk(e, 2, f), _.Yg(d, 3, e));
                a.push(d)
            }
            this.l.D(a)
        } else this.l.D([])
    };
    var NK = function(a, b, c, d) {
        Z.call(this, a, 1016);
        this.output = V(this);
        this.o = Y(this, b);
        this.l = Y(this, c);
        this.C = zF(this, [b, d])
    };
    _.T(NK, Z);
    NK.prototype.j = function() {
        if (this.l.value) {
            var a = this.o.value || this.C.value;
            a && OK(this, a) ? this.output.D(a) : this.output.Z()
        } else this.output.Z()
    };
    NK.prototype.I = function(a) {
        this.m(a)
    };
    NK.prototype.m = function() {
        this.output.Z()
    };
    var OK = function(a, b) {
        return Ah(a.l.value, Kx, 1).some(function(c) {
            return _.M(c, 1) === b
        })
    };
    var PK = function(a, b) {
        Z.call(this, a, 1015);
        this.l = V(this);
        this.o = Y(this, b)
    };
    _.T(PK, Z);
    PK.prototype.j = function() {
        if (this.o.value)
            if (Ah(this.o.value, Kx, 1).length) {
                var a = Ah(this.o.value, Kx, 1)[0];
                (_.E = [2, 3], _.y(_.E, "includes")).call(_.E, _.vk(a, 3, 0)) ? this.l.D(_.M(a, 1)) : this.l.Z()
            } else this.l.Z();
        else this.l.Z()
    };
    PK.prototype.I = function(a) {
        this.m(a)
    };
    PK.prototype.m = function() {
        this.l.Z()
    };
    var QK = function(a, b, c) {
        Z.call(this, a, 1017);
        this.A = c;
        this.output = vF(this);
        this.l = Y(this, b)
    };
    _.T(QK, Z);
    QK.prototype.j = function() {
        var a = this;
        if (this.l.value) {
            var b = HC(this.A, this.l.value, function(c) {
                if (!c) {
                    c = Oe(b.j);
                    for (var d = _.w(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next()) c.Ri(e.value)
                }
                a.output.notify()
            });
            b.start()
        } else this.output.notify()
    };
    QK.prototype.I = function(a) {
        this.m(a)
    };
    QK.prototype.m = function() {
        this.output.notify()
    };
    var RK = function(a, b) {
        Z.call(this, a, 1056);
        this.output = V(this);
        this.l = X(this, b)
    };
    _.T(RK, Z);
    RK.prototype.j = function() {
        var a = Tg(this.l.value.getAdUnitPath());
        this.output.D(a)
    };
    RK.prototype.I = function(a) {
        this.m(a)
    };
    RK.prototype.m = function() {
        this.output.Z()
    };
    var SK = function(a, b, c, d) {
        Z.call(this, a, 906, _.Cf(qB));
        this.l = vF(this);
        if (b === b.top) {
            var e = new xj;
            _.S(this, e);
            var f = new PK(a, c);
            N(e, f);
            d = new Pp(a, d, CH, function(g) {
                return g.detail.T
            });
            N(e, d);
            d = new RK(a, d.output);
            N(e, d);
            a = new NK(a, f.l, c, d.output);
            N(e, a);
            b = new QK(this.context, a.output, b);
            N(e, b);
            yF(this, b.output);
            Gj(e)
        } else this.l.notify()
    };
    _.T(SK, Z);
    SK.prototype.j = function() {
        this.l.notify()
    };
    SK.prototype.I = function(a) {
        this.m(a)
    };
    SK.prototype.m = function() {
        this.l.notify()
    };
    var kt = function(a, b, c, d, e) {
        Z.call(this, a, 934);
        this.A = b;
        this.slotId = c;
        xF(this, d);
        this.l = X(this, e)
    };
    _.T(kt, Z);
    kt.prototype.j = function() {
        var a = this;
        this.slotId.listen(Gp, function(b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut,
                        e = c.clearAdsData,
                        f = a.l.value,
                        g = new ly;
                    var h = mj(g, 1, d ? "1" : "0");
                    var k = mj(_.mk(h, 2, 2147483647), 3, "/");
                    var l = mj(k, 4, a.A.location.hostname);
                    var m = new _.rE(a.A);
                    tE(m, "__gpi_opt_out", l, f);
                    if (d || e) uE(m, "__gads", f), uE(m, "__gpi", f)
                }
            } catch (n) {}
        })
    };
    var TK = function(a, b, c) {
        Z.call(this, a, 944);
        this.A = b;
        this.l = new _.rE(this.A);
        this.o = X(this, c)
    };
    _.T(TK, Z);
    TK.prototype.j = function() {
        var a = this.o.value;
        if (sE(this.l, a)) {
            var b = _.am(this.l, "__gpi_opt_out", a);
            if (b) {
                var c = new ly;
                b = mj(c, 1, b);
                b = mj(_.mk(b, 2, 2147483647), 3, "/");
                b = mj(b, 4, this.A.location.hostname);
                tE(this.l, "__gpi_opt_out", b, a)
            }
        }
    };
    var UK = function(a, b, c, d) {
        Z.call(this, a, 821);
        this.U = b;
        this.Da = c;
        this.l = X(this, d)
    };
    _.T(UK, Z);
    UK.prototype.j = function() {
        if (_.G(this.U, 5))
            for (var a = new _.t.Set, b = _.w(Ah(this.l.value, ly, 14)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0,
                    e = null != (d = $w(c, 5)) ? d : 1;
                a.has(e) || (tE(this.Da, 2 === e ? "__gpi" : "__gads", c, this.U), a.add(e))
            }
    };
    var VK = function() {
            this.v = [];
            this.hostpageLibraryTokens = [];
            this.j = {}
        },
        ys = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.j[b]) ? void 0 : _.y(c, "values").call(c)) ? d : [];
            return [].concat(_.Ie(a))
        };
    var WK = function(a, b, c, d) {
        Z.call(this, a, 822);
        this.slotId = b;
        this.Sa = c;
        this.l = X(this, d)
    };
    _.T(WK, Z);
    WK.prototype.j = function() {
        var a = Dd(this.l.value, 23, Ac);
        a = _.w(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = this.Sa;
            if (!_.y(c.v, "includes").call(c.v, b) && (_.E = [1, 2, 3], _.y(_.E, "includes")).call(_.E, b)) {
                var d = wE[b];
                if (d) {
                    var e = b + "_hostpage_library";
                    if (d = _.mn(document, d)) d.id = e
                }
                c.v.push(b);
                e = new xE(b);
                c.hostpageLibraryTokens.push(e);
                c = Pm();
                c.hostpageLibraryTokens || (c.hostpageLibraryTokens = {});
                c.hostpageLibraryTokens[e.j] = e.v
            }
            c = void 0;
            e = this.Sa;
            d = this.slotId;
            e.j[b] = null != (c = e.j[b]) ? c : new _.t.Set;
            e.j[b].add(d)
        }
    };
    var xp = 0;
    var vt = function(a, b, c, d, e, f) {
        Z.call(this, a, 721);
        this.A = b;
        this.F = Y(this, c);
        this.o = X(this, d);
        this.l = X(this, e);
        this.C = X(this, f)
    };
    _.T(vt, Z);
    vt.prototype.j = function() {
        var a = this,
            b = this.F.value,
            c, d = null == b ? void 0 : null == (c = _.rj(b, 1)) ? void 0 : c.toUpperCase(),
            e;
        b = null == b ? void 0 : null == (e = _.rj(b, 2)) ? void 0 : e.toUpperCase();
        if (d && b) {
            e = this.o.value;
            c = this.l.value;
            var f = this.C.value,
                g = f.style.height,
                h = f.style.width,
                k = f.style.display,
                l = f.style.position,
                m = zp(e.id + "_top", d),
                n = zp(e.id + "_bottom", b);
            _.Bi(n, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            f.appendChild(m);
            f.appendChild(n);
            _.Bi(c, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.Bi(e, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            var p;
            _.Bi(f, {
                position: "relative",
                display: (null == (p = this.A.screen.orientation) ? 0 : p.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            HJ(this, 722, this.A, "orientationchange", function() {
                var r;
                (null == (r = a.A.screen.orientation) ? 0 : r.angle) ? _.Bi(f, {
                    display: "none"
                }): _.Bi(f, {
                    display: "block"
                })
            });
            _.ap(this, function() {
                _.Xy(m);
                _.Xy(n);
                f.style.position = l;
                f.style.height = g;
                f.style.width = h;
                f.style.display = k
            })
        }
    };
    var XK = _.lu(["https://td.doubleclick.net/td/kb?kbli=", ""]),
        ht = function(a, b, c, d, e) {
            Z.call(this, a, 1007);
            this.C = Y(this, b);
            this.l = X(this, d);
            c && (this.o = X(this, c));
            e && xF(this, e)
        };
    _.T(ht, Z);
    ht.prototype.j = function() {
        if (_.G(this.l.value, 5)) {
            var a;
            if (null == (a = this.o) || !a.value) {
                var b = this.C.value;
                if (null != b && b.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
                    a = document.createElement("iframe");
                    b = hb(XK, encodeURIComponent(b.join()));
                    a.removeAttribute("srcdoc");
                    if (b instanceof _.cv) throw new cw("TrustedResourceUrl", 3);
                    var c = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");
                    a.setAttribute("sandbox", "");
                    for (var d = 0; d < c.length; d++) a.sandbox.supports && !a.sandbox.supports(c[d]) || a.sandbox.add(c[d]);
                    b = _.Ta(b);
                    void 0 !== b && (a.src = b);
                    a.id = "koelBirdIGRegisterIframe";
                    document.head.appendChild(a)
                }
            }
        }
    };
    var Ws = function(a, b) {
        Z.call(this, a, 1176);
        this.o = b;
        this.l = V(this)
    };
    _.T(Ws, Z);
    Ws.prototype.j = function() {
        var a, b = this.l,
            c = b.Fa,
            d = null != (a = this.o) ? a : new Xs;
        a = null != Bp(d, 2) ? null != Cp(d) && 0 !== (0, _.Rn)() ? Bp(d, 2) * Cp(d) : Bp(d, 2) : null;
        c.call(b, a)
    };
    var ct = function(a, b, c, d, e, f) {
        f = void 0 === f ? Ap : f;
        Z.call(this, a, 666);
        this.o = f;
        this.output = vF(this);
        xF(this, b);
        e && xF(this, e);
        this.l = X(this, c);
        this.C = Y(this, d)
    };
    _.T(ct, Z);
    ct.prototype.j = function() {
        var a = this.C.value,
            b = this.l.value;
        null == a || 0 > a || !si(b) ? this.output.notify() : YK(this, a, b)
    };
    var YK = function(a, b, c) {
        var d = a.o(b, gh(a.context, 291, function(e, f) {
            e = _.w(e);
            for (var g = e.next(); !g.done; g = e.next())
                if (g = g.value, !(0 >= g.intersectionRatio)) {
                    f.unobserve(g.target);
                    a.output.notify();
                    break
                }
        }));
        d ? (d.observe(c), _.ap(a, function() {
            d.disconnect()
        })) : a.output.notify()
    };
    var bt = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 664);
        this.slotId = b;
        this.Vc = c;
        this.K = d;
        this.output = vF(this);
        this.o = X(this, e);
        this.l = Y(this, f);
        g && xF(this, g)
    };
    _.T(bt, Z);
    bt.prototype.j = function() {
        var a = this,
            b, c = null != (b = this.l.value) ? b : 0;
        if (0 !== (0, _.Rn)() || 0 < c)
            if (b = KE(document), LE(document) && b && (0 < PH(this.K, this.slotId) || !ZK(this)) && b) {
                var d = HJ(this, 324, document, b, function() {
                    LE(document) || (d && d(), a.output.notify())
                });
                if (d) return
            }
        this.output.notify()
    };
    var ZK = function(a) {
        try {
            var b = top;
            if (!b) return !0;
            var c = zt(b.document, b).y,
                d = c + a.Vc.height,
                e = a.o.value;
            return e.y >= c && e.y <= d
        } catch (f) {
            return !0
        }
    };
    var at = function(a, b) {
        Z.call(this, a, 676);
        this.output = V(this);
        this.l = X(this, b)
    };
    _.T(at, Z);
    at.prototype.j = function() {
        var a = Oh(this.l.value);
        this.output.D(a)
    };
    var Dp = function(a, b, c, d, e, f) {
        f = void 0 === f ? _.t.globalThis.IntersectionObserver : f;
        Z.call(this, a, 886);
        this.ba = b;
        this.K = c;
        this.o = d;
        this.l = f;
        this.output = vF(this);
        e && xF(this, e)
    };
    _.T(Dp, Z);
    Dp.prototype.j = function() {
        this.ba.some(function(a) {
            return !si(oi(a))
        }) ? this.output.notify() : oF(this.output, $K(this, this.o))
    };
    var $K = function(a, b) {
        return new _.t.Promise(function(c) {
            if (a.l) {
                for (var d = new a.l(function(h, k) {
                        h.some(function(l) {
                            return 0 < l.intersectionRatio
                        }) && (k.disconnect(), c())
                    }, {
                        rootMargin: b + "%"
                    }), e = _.w(a.ba), f = e.next(), g = {}; !f.done; g = {
                        Od: g.Od
                    }, f = e.next()) {
                    f = f.value;
                    g.Od = oi(f);
                    if (!g.Od) return;
                    d.observe(g.Od);
                    KH(a.K, f, function(h) {
                        return function() {
                            return void d.unobserve(h.Od)
                        }
                    }(g))
                }
                _.ap(a, function() {
                    return void d.disconnect()
                })
            } else c()
        })
    };
    var aL = [{
            name: "Interstitial",
            format: 1,
            Id: 5
        }, {
            name: "TopAnchor",
            format: 2,
            Id: 2
        }, {
            name: "BottomAnchor",
            format: 3,
            Id: 3
        }, {
            name: "LeftSideRail",
            format: 4,
            Id: 8
        }, {
            name: "RightSideRail",
            format: 5,
            Id: 9
        }],
        bL = function(a, b, c, d, e, f, g) {
            Z.call(this, a, 789);
            this.W = b;
            this.googletag = c;
            this.o = d;
            this.l = e;
            this.R = f;
            this.C = g;
            this.output = V(this)
        };
    _.T(bL, Z);
    bL.prototype.j = function() {
        var a = this;
        aL.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.C)
        }).forEach(function(b) {
            var c = b.name;
            b = b.Id;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            c = new IK(a.context, a.W, "/22639388115/example/" + c.toLowerCase(), b, !1, a.googletag.pubads(), function(f) {
                return void a.googletag.display(f)
            }, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, a.googletag.cmd, a.l.j, a.l, a.o, a.R, !1);
            _.S(a, c);
            Gj(c)
        })
    };
    var cL = function(a, b, c) {
        Z.call(this, a, 1163);
        _.H(lt);
        this.l = X(this, b);
        c && xF(this, c)
    };
    _.T(cL, Z);
    cL.prototype.j = function() {
        this.l.value.Qi();
        this.l.value.ya()
    };
    var nt = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 682);
        this.K = b;
        this.format = c;
        this.slotId = d;
        this.A = e;
        this.o = V(this);
        this.l = Y(this, f);
        this.C = X(this, g);
        this.M = X(this, h);
        this.F = Y(this, k);
        this.J = X(this, l)
    };
    _.T(nt, Z);
    nt.prototype.j = function() {
        var a = this,
            b;
        if (null != (b = this.l.value) && _.G(b, 12, !1)) {
            b = this.F.value.Fj;
            var c = _.Ur(this.K, this.slotId),
                d = this.M.value,
                e = this.C.value;
            _.Bi(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (dL) dL.Oi(e, this.J.value);
            else {
                dL = new b(this.context, this.format, e, this.A, d, this.K, this.slotId);
                b = {};
                d = _.w(Ah(this.l.value, $x, 13));
                for (var f = d.next(); !f.done; f = d.next()) f = f.value, b[_.rj(f, 1)] = _.rj(f, 2);
                dL.Pi(b);
                _.H(lt) ? (dL.Li(), this.o.D(dL)) : dL.ya();
                JH(this.K, this.slotId, function() {
                    dL && (dL.va(), dL = null);
                    c && _.NH(a.K, a.slotId)
                })
            }
            _.ap(this, function() {
                return _.Xy(e)
            })
        }
    };
    var dL = null;
    var mt = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 1155);
        this.K = b;
        this.format = c;
        this.slotId = d;
        this.A = e;
        this.Cf = f;
        this.o = g;
        this.J = h;
        this.C = k;
        this.F = l;
        this.l = Y(this, f)
    };
    _.T(mt, Z);
    mt.prototype.j = function() {
        var a;
        if (null != (a = this.l.value) && null != Yl(a, 12)) {
            a = new xj;
            _.S(this, a);
            var b, c = (null == (b = this.l.value) ? 0 : _.G(b, 15)) ? N(a, new Fp(this.context, this.slotId, Gp, function(d) {
                d = d.detail.data;
                try {
                    var e = JSON.parse(d);
                    return "floating" === e.type && "loaded" === e.message
                } catch (f) {}
                return !1
            })).output : void 0;
            b = new nt(this.context, this.K, this.format, this.slotId, this.A, this.Cf, this.o, this.J, this.C, this.F);
            N(a, b);
            b = new cL(this.context, b.o, c);
            N(a, b);
            Gj(a)
        }
    };
    var Mp = function(a, b, c) {
        Z.call(this, a, 1150);
        this.A = b;
        this.output = vF(this);
        xF(this, c)
    };
    _.T(Mp, Z);
    Mp.prototype.j = function() {
        var a = this;
        this.A.location.hash = "goog_game_inter";
        _.ap(this, function() {
            "goog_game_inter" === a.A.location.hash && (a.A.location.hash = "")
        });
        oF(this.output, new _.t.Promise(function(b) {
            return void HJ(a, a.id, a.A, "hashchange", function(c) {
                jv(c.oldURL, "#goog_game_inter") && b()
            })
        }))
    };
    var eL = function(a, b) {
            this.serviceName = b;
            this.slot = a.j
        },
        fL = function(a, b) {
            eL.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.companyIds = this.yieldGroupIds = null
        };
    _.T(fL, eL);
    var gL = function() {
        eL.apply(this, arguments)
    };
    _.T(gL, eL);
    var hL = function(a, b, c) {
        eL.call(this, a, b);
        this.inViewPercentage = c
    };
    _.T(hL, eL);
    var iL = function() {
        eL.apply(this, arguments)
    };
    _.T(iL, eL);
    var jL = function() {
        eL.apply(this, arguments)
    };
    _.T(jL, eL);
    var kL = function() {
        eL.apply(this, arguments)
    };
    _.T(kL, eL);
    var lL = function() {
        eL.apply(this, arguments)
    };
    _.T(lL, eL);
    var mL = function(a, b, c, d) {
        eL.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.T(mL, eL);
    var nL = function(a, b, c) {
        eL.call(this, a, b);
        this.payload = c
    };
    _.T(nL, eL);
    var oL = function() {
        eL.apply(this, arguments)
    };
    _.T(oL, eL);
    var pL = function(a, b, c) {
        eL.call(this, a, b);
        this.makeGameManualInterstitialVisible = c
    };
    _.T(pL, eL);
    var qL = function() {
        eL.apply(this, arguments)
    };
    _.T(qL, eL);
    var Np = function(a, b, c, d, e, f) {
        Z.call(this, a, 1151);
        this.slotId = b;
        this.xa = c;
        xF(this, d);
        a = [e];
        f && a.push(f);
        f = new pF(a, !0);
        bF(this.B, f)
    };
    _.T(Np, Z);
    Np.prototype.j = function() {
        Sr(this.xa, "gameManualInterstitialSlotClosed", 1148, new qL(this.slotId, "publisher_ads"))
    };
    var Kp = function(a, b, c, d) {
        Z.call(this, a, 1149);
        this.slotId = b;
        this.xa = c;
        this.output = vF(this);
        xF(this, d)
    };
    _.T(Kp, Z);
    Kp.prototype.j = function() {
        var a = new _.Rf,
            b = a.promise;
        Sr(this.xa, "gameManualInterstitialSlotReady", 1147, new pL(this.slotId, "publisher_ads", a.resolve));
        0 < _.Cf(nB) ? oF(this.output, b.then(function() {
            return Az(_.Cf(nB))
        })) : oF(this.output, b)
    };
    var Jp = function(a, b, c) {
        c = void 0 === c ? rL : c;
        Z.call(this, a, 1158);
        this.l = c;
        this.o = 1E3 * _.Cf(Ip);
        this.output = vF(this);
        xF(this, b)
    };
    _.T(Jp, Z);
    Jp.prototype.j = function() {
        var a = this;
        this.l.Me++ ? oF(this.output, Az(this.o * (this.l.Me - 2) + (this.o - (Date.now() - this.l.Nf))).then(function() {
            a.l.Nf = Date.now();
            a.l.Me--
        })) : (this.l.Nf = Date.now(), Az(this.o).then(function() {
            return void a.l.Me--
        }), this.output.notify())
    };
    var rL = {
        Me: 0,
        Nf: Date.now()
    };
    var sL = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        tL = {
            width: "100%",
            height: "100%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        Lp = function(a, b, c, d, e) {
            Z.call(this, a, 1150);
            this.A = b;
            this.l = X(this, c);
            this.C = X(this, d);
            xF(this, e);
            this.o = new _.FF(this.A)
        };
    _.T(Lp, Z);
    Lp.prototype.j = function() {
        var a = 0 === (0, _.Rn)() ? "rgba(1,1,1,0.5)" : "white";
        _.Bi(this.l.value, _.y(Object, "assign").call(Object, {
            position: "absolute"
        }, 0 === (0, _.Rn)() ? tL : sL));
        _.Bi(this.C.value, _.y(Object, "assign").call(Object, {
            "background-color": a,
            opacity: "1",
            position: "fixed",
            margin: "0",
            padding: "0",
            "z-index": "2147483647",
            display: "block"
        }, sL));
        _.ap(this, _.SF(this.A.document, this.A));
        a = {};
        $y(this.l.value).postMessage(JSON.stringify((a.googMsgType = "sth", a.msg_type = "i-view", a)), "*");
        if (this.A === this.A.top) {
            var b = _.HF(this.o, 2147483646);
            _.LF(b);
            _.ap(this, function() {
                return void _.MF(b)
            })
        }
    };
    var uL = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 683);
        this.slotId = b;
        this.M = c;
        this.l = d;
        this.o = V(this);
        this.C = X(this, e);
        this.O = X(this, f);
        this.F = Y(this, g);
        this.J = Y(this, h)
    };
    _.T(uL, Z);
    uL.prototype.j = function() {
        var a = this,
            b = this.O.value,
            c = this.C.value,
            d = this.J.value.Xj,
            e = new _.cG(this.context),
            f = null != zh(this.l, 14) ? 60 * Rr(this.l, 14) : 604800;
        b = new d(window, c, b, e, this.M, vL(this), new _.t.Set(Dd(this.l, 15, Ac)), FK(this.slotId), function() {
            return void a.va()
        }, f, this.F.value);
        b.M();
        _.S(this, b);
        this.o.D(b)
    };
    var vL = function(a) {
        var b = {};
        a = _.w(Ah(a.l, $x, 13));
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[_.rj(c, 1)] = _.rj(c, 2);
        return b
    };
    var ot = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1141);
        this.slotId = b;
        this.F = c;
        this.o = e;
        this.J = f;
        this.qb = g;
        this.C = h;
        this.output = V(this);
        this.l = Y(this, d)
    };
    _.T(ot, Z);
    ot.prototype.j = function() {
        var a = this;
        if (this.l.value) {
            var b = new xj;
            _.S(this, b);
            var c = N(b, new uL(this.context, this.slotId, this.F, this.l.value, this.o, this.J, this.qb, this.C));
            _.ap(c, function() {
                return void a.va()
            });
            this.output.Ka(c.o.promise.then(function() {
                return !0
            }));
            Gj(b)
        } else this.output.D(!1)
    };
    var wL = function(a) {
        this.module = a
    };
    wL.prototype.toString = function() {
        return String(this.module)
    };
    _.xL = new wL(2);
    _.yL = new wL(5);
    _.zL = new wL(6);
    var gt = function(a, b, c, d, e, f) {
        Z.call(this, a, 846);
        this.C = b;
        this.format = c;
        this.output = V(this);
        this.l = Y(this, d);
        this.o = Y(this, e);
        f && xF(this, f)
    };
    _.T(gt, Z);
    gt.prototype.j = function() {
        var a, b = (2 === this.format || 3 === this.format) && !(null == (a = this.l.value) || !_.G(a, 12, !1));
        a = 5 === this.format && this.o.value;
        b || a ? this.output.Ka(this.C.load(_.xL)) : this.output.Z()
    };
    var AL = function(a, b, c, d, e) {
        Z.call(this, a, 905);
        this.P = b;
        this.l = c;
        this.output = vF(this);
        this.o = X(this, d);
        xF(this, e)
    };
    _.T(AL, Z);
    AL.prototype.j = function() {
        for (var a = _.w(this.o.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            b = null == (c = this.P.T[b.value.getDomId()]) ? void 0 : Ss(c);
            if (2 === b || 3 === b || 5 === b) {
                this.l.load(_.xL);
                return
            }
        }
        this.output.notify()
    };
    var BL = function(a, b, c, d, e, f) {
        Z.call(this, a, 696);
        this.slotId = b;
        this.xa = c;
        xF(this, d);
        zF(this, [e, f])
    };
    _.T(BL, Z);
    BL.prototype.j = function() {
        Sr(this.xa, "rewardedSlotClosed", 703, new oL(this.slotId, "publisher_ads"))
    };
    var CL = function(a, b, c, d, e) {
        Z.call(this, a, 694);
        this.slotId = b;
        this.xa = c;
        xF(this, d);
        this.l = Y(this, e)
    };
    _.T(CL, Z);
    CL.prototype.j = function() {
        var a, b = null == (a = this.l.value) ? void 0 : a.payload;
        Sr(this.xa, "rewardedSlotGranted", 702, new nL(this.slotId, "publisher_ads", null != b ? b : null))
    };
    var DL = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        EL = function(a, b, c, d, e, f) {
            Z.call(this, a, 693);
            this.A = b;
            this.F = f;
            this.output = vF(this);
            this.o = X(this, c);
            this.C = X(this, d);
            xF(this, e);
            this.l = new _.FF(this.A)
        };
    _.T(EL, Z);
    EL.prototype.j = function() {
        var a = this;
        if (!this.F.Fb) {
            var b = 0 === (0, _.Rn)() ? "rgba(1,1,1,0.5)" : "white";
            _.Bi(this.C.value, _.y(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, DL));
            _.ap(this, _.SF(this.A.document, this.A));
            $y(this.o.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.A === this.A.top) {
                this.A.location.hash = "goog_rewarded";
                var c = _.HF(this.l, 2147483646);
                _.LF(c);
                _.ap(this, function() {
                    _.MF(c);
                    "goog_rewarded" === a.A.location.hash && (a.A.location.hash = "")
                })
            }
            this.output.notify()
        }
    };
    var FL = function(a, b, c, d) {
        Z.call(this, a, 695);
        this.A = b;
        this.l = X(this, c);
        xF(this, d)
    };
    _.T(FL, Z);
    FL.prototype.j = function() {
        if (this.A === this.A.top) var a = $y(this.l.value),
            b = HJ(this, 503, this.A, "hashchange", function(c) {
                jv(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var GL = function(a, b, c, d) {
        Z.call(this, a, 692);
        this.slotId = b;
        this.xa = c;
        this.output = vF(this);
        this.l = X(this, d)
    };
    _.T(GL, Z);
    GL.prototype.j = function() {
        var a = this.l.value,
            b = new _.Rf,
            c = b.promise,
            d;
        Sr(this.xa, "rewardedSlotReady", 701, new mL(this.slotId, "publisher_ads", b.resolve, null != (d = a.payload) ? d : null));
        oF(this.output, c)
    };
    var HL = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        IL = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        JL = function(a, b, c, d, e) {
            Z.call(this, a, 691);
            this.C = V(this);
            this.o = vF(this);
            this.F = X(this, c);
            this.l = zF(this, [d, e])
        };
    _.T(JL, Z);
    JL.prototype.j = function() {
        if ("ha_before_make_visible" === this.l.value.message) this.o.notify();
        else {
            var a = _.H(mB) ? HL : IL;
            _.Bi(this.F.value, _.y(Object, "assign").call(Object, {
                position: "absolute"
            }, 0 === (0, _.Rn)() ? a : HL));
            this.C.D(this.l.value)
        }
    };
    var pt = function(a, b, c, d, e, f) {
        xj.call(this);
        var g = Qp(b, "granted", a);
        N(this, g);
        var h = Qp(b, "prefetched", a);
        N(this, h);
        var k = Qp(b, "closed", a);
        N(this, k);
        var l = Qp(b, "ha_before_make_visible", a);
        N(this, l);
        var m = new JL(a, b, e, h.output, l.output);
        N(this, m);
        h = new GL(a, b, c, m.C);
        N(this, h);
        f = new EL(a, d, e, f, h.output, m.o);
        N(this, f);
        N(this, new FL(a, d, e, f.output));
        N(this, new CL(a, b, c, h.output, g.output));
        N(this, new BL(a, b, c, h.output, k.output, l.output))
    };
    _.T(pt, xj);
    var Ks = function(a, b) {
        Z.call(this, a, 1031);
        this.A = b
    };
    _.T(Ks, Z);
    Ks.prototype.j = function() {
        this.A === this.A.top && yk(this.A)
    };
    var Is = function(a, b, c) {
        c = void 0 === c ? Vf : c;
        Z.call(this, a, 1063);
        this.A = b;
        this.o = c;
        this.l = V(this)
    };
    _.T(Is, Z);
    Is.prototype.j = function() {
        var a = this;
        if (_.H(bB) && Wf(this.A)) {
            var b = null,
                c = 0,
                d = gh(this.context, this.id, function() {
                    var f, g, h, k;
                    return _.lb(function(l) {
                        switch (l.j) {
                            case 1:
                                return f = a.o(a.A), g = "0", l.m = 2, _.mb(l, f, 4);
                            case 4:
                                g = null != (h = l.v) ? h : "0";
                                1E4 < g.length && (kh(a.context, a.id, new Nm("ML:" + g.length)), g = "0");
                                l.j = 3;
                                l.m = 0;
                                break;
                            case 2:
                                k = ob(l), kh(a.context, a.id, k);
                            case 3:
                                b = g, c = _.wg(a.A) + 3E5, l.j = 0
                        }
                    })
                });
            var e = (_.E = d(), _.y(_.E, "finally")).call(_.E, function() {
                e = void 0
            });
            this.l.D(function() {
                var f, g;
                return _.lb(function(h) {
                    if (1 == h.j) {
                        f = _.wg(a.A) >= c;
                        g = null === b || "0" === b;
                        if (!f && !g) {
                            h.j = 2;
                            return
                        }
                        e || (e = (_.E = d(), _.y(_.E, "finally")).call(_.E, function() {
                            e = void 0
                        }));
                        return _.mb(h, e, 2)
                    }
                    return h.return(b)
                })
            })
        } else this.l.D(function() {
            return _.t.Promise.resolve("")
        })
    };
    Is.prototype.m = function() {
        this.l.D(function() {
            return _.t.Promise.resolve("")
        })
    };
    var KL = function(a, b) {
        Z.call(this, a, 1091);
        this.output = V(this);
        b && (this.l = Y(this, b))
    };
    _.T(KL, Z);
    KL.prototype.j = function() {
        var a;
        null != (a = this.l) && a.value ? this.output.Ka(this.l.value()) : this.output.D("")
    };
    KL.prototype.m = function() {
        this.output.D("")
    };
    var Fs = function(a) {
        return function(b) {
            return Array.isArray(b) ? b.every(function(c) {
                return a(c)
            }) : !1
        }
    }(cf({
        Ol: "disablePersonalization"
    }));
    var eq = function(a, b, c) {
        Z.call(this, a, 1122);
        this.W = b;
        this.l = c;
        vF(this, c)
    };
    _.T(eq, Z);
    eq.prototype.j = function() {
        var a = this;
        oF(this.l, new _.t.Promise(function(b) {
            return void NE(b, a.W)
        }))
    };
    var Ls = function(a, b, c) {
        Z.call(this, a, 1107);
        this.A = b;
        this.l = c;
        V(this, c)
    };
    _.T(Ls, Z);
    Ls.prototype.j = function() {
        var a = _.H(Vq),
            b = a ? vf(this.A.isSecureContext, this.A.navigator, this.A.document) : uf("run-ad-auction", this.A.document),
            c = a ? wf(this.A.isSecureContext, this.A.document) : uf("browsing-topics", this.A.document),
            d = a ? xf(this.A.isSecureContext, this.A, this.A.document) : uf("shared-storage", this.A.document);
        a = a ? !(!this.A.isSecureContext || !uf("attribution-reporting", this.A.document)) : uf("attribution-reporting", this.A.document);
        var e = 0;
        b && (e |= 1);
        c && (e |= 4);
        d && (e |= 8);
        a && (e |= 2);
        this.l.Fa(0 === e ? null : e)
    };
    Ls.prototype.m = function() {
        this.l.Z()
    };
    var LL = function(a, b, c, d, e, f) {
        Z.call(this, a, 1118);
        this.o = b;
        this.C = d;
        this.T = e;
        V(this, d);
        c && (this.F = Y(this, c));
        f && (this.l = X(this, f))
    };
    _.T(LL, Z);
    LL.prototype.j = function() {
        var a = new $E;
        a = _.Nd(a, 1, _.Ec(this.o), 0);
        if (this.o & 1) {
            var b, c, d = ML(this, null != (c = null == (b = this.F) ? void 0 : b.value) ? c : null);
            _.Yg(a, 2, d)
        }
        this.C.D(a)
    };
    var ML = function(a, b) {
            switch (_.Cf(Ms)) {
                case 1:
                    var c = 1;
                    break;
                case 2:
                    c = 2;
                    break;
                case 3:
                    c = 3;
                    break;
                default:
                    c = 0
            }
            var d = ZE(new YE, c);
            null == b || b.forEach(function(g, h) {
                var k = Ld(d, 2, XE);
                var l = k.set,
                    m = new XE;
                g = _.Md(m, 1, g, Dc);
                l.call(k, h, g)
            });
            var e;
            if ((null == (e = a.l) ? 0 : e.value) && a.T) {
                var f;
                b = _.w(null == (f = a.l) ? void 0 : f.value);
                for (f = b.next(); !f.done; f = b.next()) f = f.value, (c = NL(a, a.T[f.getDomId()])) && Ld(d, 3, VE).set(f.getAdUnitPath(), c)
            }
            return d
        },
        NL = function(a, b) {
            a = Qm(a.context, b);
            if (0 !== a.length) return WE(new VE, a.map(function(c) {
                return c.seller
            }))
        };
    var gq = function(a, b, c, d, e, f) {
        Z.call(this, a, 1165);
        this.C = c;
        this.Re = d;
        this.T = e;
        this.o = f;
        this.l = Y(this, b.Yh)
    };
    _.T(gq, Z);
    gq.prototype.j = function() {
        if (this.l.value) {
            var a = new xj,
                b = new LL(this.context, this.l.value, this.C, this.Re.lg, this.T, this.o);
            N(a, b);
            Gj(a)
        } else this.Re.lg.Z()
    };
    var OL = function(a, b, c) {
        Z.call(this, a, 873);
        this.A = b;
        this.l = X(this, c)
    };
    _.T(OL, Z);
    OL.prototype.j = function() {
        var a = this.context,
            b = this.l.value,
            c = this.A;
        !Pm()._pubconsole_disable_ && (b = of ("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || fn(a, c))
    };
    var PL = function() {
        this.resources = {}
    };
    var Fq = "3rd party ad content";
    var QL = function(a, b, c) {
        _.U.call(this);
        this.context = a;
        this.jb = b;
        this.m = c;
        a = c.slotId;
        b = c.size;
        this.j = "height" === c.Gj ? "fluid" : [b.width, b.height];
        this.rd = vi(a);
        this.td = Fq
    };
    _.T(QL, _.U);
    QL.prototype.render = function() {
        var a = this.jb,
            b = this.m,
            c = b.slotId,
            d = b.P.T,
            e = b.size,
            f = b.yf,
            g = b.isBackfill,
            h = b.Td;
        ag(b.ri, _.Uy(b.W), null != f ? f : "", !1);
        Qr(_.qf(ih), "5", Rr(d[c.getDomId()], 20));
        Sr(c, Tr, 801, {
            Wg: 0 === a.kind ? a.vb : "",
            isBackfill: g
        });
        a = this.l();
        h && a && a.setAttribute("data-google-container-id", h);
        Sr(c, Vr, 825, {
            size: e,
            isEmpty: !1
        });
        return a
    };
    QL.prototype.loaded = function(a) {
        var b = this.m,
            c = b.slotId,
            d = b.xa;
        b = b.P.T;
        Sr(c, xH, 844);
        a && a.setAttribute("data-load-complete", !0);
        Sr(d, "slotOnload", 710, new iL(c, "publisher_ads"));
        Qr(_.qf(ih), "6", Rr(b[c.getDomId()], 20))
    };
    var RL = function(a) {
        a = a.jb;
        a = 0 === a.kind ? a.vb : "";
        var b = "";
        b = void 0 === b ? "" : b;
        if (a) {
            var c = a.toLowerCase();
            a = -1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html") || _.H(ZB) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>"
        }
        return a
    };
    QL.prototype.v = function() {
        _.U.prototype.v.call(this);
        this.m.ri.removeAttribute("data-google-query-id")
    };
    QL.prototype.I = function(a) {
        var b = this,
            c = SL(this, function() {
                return void b.loaded(c.j)
            }, a);
        _.ap(this, function() {
            100 != c.status && (c.Lf() && (JG(c.m), c.C = 0), window.clearTimeout(c.sa), c.sa = -1, c.o = 3, c.v && (c.v.va(), c.v = null), _.af(window, "resize", c.F), _.af(window, "scroll", c.F), c.l && c.j && c.l == _.Yy(c.j) && c.l.removeChild(c.j), c.j = null, c.l = null, c.status = 100)
        });
        return c
    };
    var SL = function(a, b, c) {
        var d = a.m,
            e = d.mi,
            f = d.isBackfill,
            g = d.Yj,
            h = d.Td,
            k = d.qe,
            l = d.gf,
            m = d.Sa,
            n = Array.isArray(a.j) ? new _.Rh(Number(a.j[0]), Number(a.j[1])) : 1;
        return new RG({
            ig: d.Rg,
            rd: a.rd,
            td: a.td,
            content: RL(a),
            size: n,
            yj: !!g,
            Rh: b,
            ni: null != e ? e : void 0,
            permissions: {
                oe: null != Yl(c, 1) ? !!_.G(c, 1) : !f,
                pe: null != Yl(c, 2) ? !!_.G(c, 2) : !1
            },
            vd: !!Pm().fifWin,
            Nk: mJ ? mJ : mJ = Ll(),
            fj: Sl(),
            hostpageLibraryTokens: m.hostpageLibraryTokens,
            lb: function(p, r) {
                return void kh(a.context, p, r)
            },
            uniqueId: h,
            li: lG(),
            qe: null != k ? k : void 0,
            mb: void 0,
            gf: null != l ? l : void 0
        })
    };
    var TL = function() {
        QL.apply(this, arguments)
    };
    _.T(TL, QL);
    TL.prototype.l = function() {
        var a = this.m,
            b = a.P,
            c = b.X;
        a = b.T[a.slotId.getDomId()];
        b = new Tl;
        c = Zl([b, c.kc(), null == a ? void 0 : a.kc()]);
        return QL.prototype.I.call(this, c).j
    };
    TL.prototype.B = function() {
        return !1
    };
    var Zs = function(a, b, c, d, e, f) {
        Z.call(this, a, 669);
        this.X = b;
        this.T = c;
        this.output = V(this);
        this.o = Y(this, d);
        this.l = X(this, e);
        f && (this.C = X(this, f))
    };
    _.T(Zs, Z);
    Zs.prototype.j = function() {
        var a;
        if (null == (a = this.C) ? 0 : a.value) this.output.D(!0);
        else {
            var b;
            a = !(null == (b = this.o.value) || !_.rj(b, 1)) && (_.G(this.T, 12) || Yl(this.X, 13)) || this.l.value;
            this.output.D(!!a)
        }
    };
    var UL = function(a, b, c, d) {
        Z.call(this, a, 833);
        this.l = b;
        this.A = c;
        this.output = vF(this);
        xF(this, d)
    };
    _.T(UL, Z);
    UL.prototype.j = function() {
        var a = this.l,
            b = this.A,
            c = lG();
        c = {
            version: mJ ? mJ : mJ = Ll(),
            Ye: c
        };
        c = YG.ik(c);
        var d = EG(b);
        c = d ? ve(c, new _.t.Map([
            ["n", String(d)]
        ])) : c;
        d = Ef(Ql);
        for (var e = new _.t.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
        c = ve(c, e);
        var g;
        a.resources[c.toString()] || (null == (g = Pm()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.Me("IFRAME"), a.src = _.Ya(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)));
        this.output.notify()
    };
    var VL = function(a, b, c) {
        Z.call(this, a, 1135);
        this.o = b;
        this.C = c;
        this.l = V(this)
    };
    _.T(VL, Z);
    VL.prototype.j = function() {
        for (var a = new Fx, b = new _.t.Map, c = new _.t.Set, d = _.w(this.o), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            if (null != _.rj(f, 1)) {
                e = new _.t.Set;
                b.set(_.M(f, 1).toString(), e);
                f = _.w(Ah(f, hj, 2));
                for (var g = f.next(); !g.done; g = f.next()) {
                    g = g.value;
                    var h = _.M(g, 1);
                    e.add(h);
                    c.has(h) || oj(a, 2, hj, g);
                    c.add(h)
                }
            }
        }
        this.C.D(b);
        this.l.D(a)
    };
    var WL = function(a, b, c) {
        Z.call(this, a, 1051);
        this.o = b;
        this.l = Y(this, c)
    };
    _.T(WL, Z);
    WL.prototype.j = function() {
        var a = this;
        this.l.value && Sj(this.l.value, function(b, c) {
            kh(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    };
    var XL = function(a, b) {
        Z.call(this, a, 1040);
        this.l = V(this);
        this.o = Y(this, b)
    };
    _.T(XL, Z);
    XL.prototype.j = function() {
        var a = this.o.value;
        a ? (a = Ah(a, hj, 2), this.l.D(a.map(function(b) {
            var c = Xw(b, jj);
            b = _.M(b, 1);
            c = c && (_.y(c, "startsWith").call(c, location.protocol) || _.y(c, "startsWith").call(c, "data:") && 80 >= c.length) ? _.te(Jq(c)) : void 0;
            return {
                de: b,
                url: c
            }
        }))) : this.l.D([])
    };
    var YL = function(a, b, c, d, e) {
        Z.call(this, a, 813);
        this.C = b;
        this.l = d;
        this.qb = e;
        c && (this.F = Y(this, c));
        e && (this.o = Y(this, e))
    };
    _.T(YL, Z);
    YL.prototype.j = function() {
        var a = this,
            b, c, d = null != (c = this.C) ? c : null == (b = this.F) ? void 0 : b.value,
            e, f;
        b = null != (f = this.l) ? f : null == (e = this.o) ? void 0 : e.value;
        if (null != d && d.length && b)
            for (d = _.w(d), e = d.next(); !e.done; e = d.next()) f = e.value, e = f.de, (f = f.url) && _.S(this, Wj(e, f, b, this.qb, function(g, h) {
                kh(a.context, g, h);
                var k, l;
                null == (l = (k = console).error) || l.call(k, h)
            }))
    };
    var ZL = function(a, b, c) {
        Z.call(this, a, 1045);
        this.l = b;
        this.qb = c
    };
    _.T(ZL, Z);
    ZL.prototype.j = function() {
        var a = new xj;
        _.S(this, a);
        var b = new XL(this.context, this.l);
        N(a, b);
        b = new YL(this.context, void 0, b.l, void 0, this.qb);
        N(a, b);
        Gj(a)
    };
    var Qs = function(a, b, c, d) {
        Z.call(this, a, 706);
        this.A = b;
        this.output = null != d ? d : V(this);
        this.l = X(this, c)
    };
    _.T(Qs, Z);
    Qs.prototype.j = function() {
        this.output.Fa(lf(this.l.value, this.A))
    };
    var $L = function(a, b, c, d) {
        Z.call(this, a, 1154);
        this.ib = c;
        this.l = d;
        this.o = Y(this, b)
    };
    _.T($L, Z);
    $L.prototype.j = function() {
        if (this.o.value) {
            var a = new xj;
            _.S(this, a);
            var b = new Qs(this.context, window, this.ib, this.l.qb);
            N(a, b);
            b = new VL(this.context, this.o.value, this.l.bg);
            N(a, b);
            N(a, new ZL(this.context, b.l, this.l.qb));
            b = new WL(this.context, console, this.l.qb);
            N(a, b);
            Gj(a)
        } else this.l.bg.Z(), this.l.qb.Z()
    };
    var aM = function(a, b, c, d, e, f) {
        Z.call(this, a, 1096);
        this.A = b;
        this.U = c;
        this.l = d;
        this.od = e;
        this.o = Y(this, f)
    };
    _.T(aM, Z);
    aM.prototype.j = function() {
        var a, b = null == (a = this.o.value) ? void 0 : a.Ti;
        b && b(this.l, this.U, this.A, this.od, this.context.Tb)
    };
    var bM = function(a, b) {
        Z.call(this, a, 1095);
        this.l = b;
        this.output = V(this)
    };
    _.T(bM, Z);
    bM.prototype.j = function() {
        this.output.Ka(this.l.load(_.yL))
    };
    var cM = function(a, b, c, d, e) {
        Z.call(this, a, 1090);
        this.l = b;
        this.od = c;
        this.o = X(this, d);
        this.C = Y(this, e)
    };
    _.T(cM, Z);
    cM.prototype.j = function() {
        var a = this.C.value,
            b;
        if (a && null != (b = _.xh(a, _.Ux, 1)) && _.Vx(b).length) {
            b = new xj;
            _.S(this, b);
            var c = new bM(this.context, this.l);
            N(b, c);
            a = new aM(this.context, window, this.o.value, a, this.od, c.output);
            N(b, a);
            Gj(b)
        }
    };
    var Nq = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1205);
        this.A = b;
        this.J = c;
        this.F = X(this, d);
        this.o = X(this, e);
        this.l = X(this, f);
        this.C = X(this, g)
    };
    _.T(Nq, Z);
    Nq.prototype.j = function() {
        var a = this.F.value;
        a = new a.Uk(this.o.value, this.A, this.l.value, this.J, this.C.value, new _.cG(this.context), new a.Ej(this.A));
        _.S(this, a);
        _.S(this, a.M)
    };
    var Mq = function(a, b) {
        Z.call(this, a, 1204);
        this.l = b;
        this.output = V(this)
    };
    _.T(Mq, Z);
    Mq.prototype.j = function() {
        this.output.Ka(this.l.load(_.zL))
    };
    var us = function(a, b) {
        var c = this,
            d = [],
            e = [];
        this.addSize = gh(a, 88, function(f, g) {
            var h;
            if (h = Fm(f)) h = g, h = Em(h) || Array.isArray(h) && h.every(Em);
            if (h) {
                if (_.H(CB)) {
                    var k = Qq(g);
                    h = k.size;
                    k.pg && (g = Hk([f, g]), g = g.substring(1, g.length - 1), Q(b, new Gk(151, ["SizeMappingBuilder.addSize", g])), g = h)
                }
                d.push([f, g])
            } else e.push([f, g]), Q(b, Ik("SizeMappingBuilder.addSize", [f, g]));
            return c
        });
        this.build = gh(a, 89, function() {
            if (e.length) return Q(b, hI(Wl(e))), null;
            ta(d);
            return d
        })
    };
    var dM = function(a, b, c, d, e, f) {
        f = void 0 === f ? Yj : f;
        Z.call(this, a, 939);
        this.o = b;
        this.A = c;
        this.U = d;
        this.l = f;
        this.output = vF(this);
        xF(this, e)
    };
    _.T(dM, Z);
    dM.prototype.j = function() {
        var a = this.l,
            b = this.A,
            c = new qq;
        var d = new pq;
        d = _.Wg(d, 1, String(this.o));
        c = _.Yg(c, 5, d);
        c = _.I(c, 4, 1);
        c = _.I(c, 2, 2);
        c = _.Wg(c, 3, this.context.wb || this.context.ub);
        c = _.bh(c, 6, _.G(this.U, 5));
        a.call(this, b, c);
        this.output.notify()
    };
    var et = function(a, b, c, d, e) {
        Z.call(this, a, 807);
        this.A = b;
        this.output = vF(this);
        this.l = Y(this, c);
        this.o = X(this, d);
        e && xF(this, e)
    };
    _.T(et, Z);
    et.prototype.j = function() {
        var a = this.l.value;
        if (a && !this.o.value) {
            var b = Bz(this.A);
            sH(new rH(b, a)) || this.L(new Nm("Cannot create top window frame"))
        }
        this.output.notify()
    };
    var eM = function(a, b) {
        Z.call(this, a, 820);
        this.A = b;
        this.output = V(this)
    };
    _.T(eM, Z);
    eM.prototype.j = function() {
        var a = this;
        this.output.Ka(ck(this.A).then(function(b) {
            var c = b.ie,
                d = b.status;
            Li("gpt_etu", function(e) {
                Ri(e, a.context);
                L(e, "rsn", d)
            }, c ? void 0 : 0);
            return null != c ? c : ""
        }))
    };
    var Yq = function(a, b, c, d) {
        Z.call(this, a, 979);
        this.A = b;
        this.l = Y(this, d);
        this.output = c
    };
    _.T(Yq, Z);
    Yq.prototype.j = function() {
        var a = this;
        if (_.H(HB)) this.output.Z();
        else {
            var b;
            gk(this.A, null != (b = this.l.value) ? b : !1).then(function(c) {
                a.output.D(c)
            })
        }
    };
    Yq.prototype.m = function() {
        this.output.Z()
    };
    var Xq = function(a, b, c, d) {
        Z.call(this, a, 1156);
        this.A = b;
        this.ee = c;
        this.l = {
            Gb: new An
        };
        this.o = X(this, d)
    };
    _.T(Xq, Z);
    Xq.prototype.j = function() {
        if (_.G(this.o.value, 5)) {
            var a = new xj;
            _.S(this, a);
            var b = new Yq(this.context, this.A, this.l.Gb, this.ee);
            N(a, b);
            Gj(a)
        } else this.l.Gb.Z()
    };
    var fM = function(a, b, c) {
        Z.call(this, a, 1123);
        this.l = b;
        this.o = c;
        V(this, b);
        V(this, c)
    };
    _.T(fM, Z);
    fM.prototype.j = function() {
        _.H(FB) ? (this.l.D(!1), this.o.Z()) : (this.l.D(!0), this.o.D(10))
    };
    var gM = function(a, b, c, d, e) {
        Z.call(this, a, 978);
        this.A = b;
        this.C = c;
        this.l = e;
        V(this, e);
        this.o = Y(this, d.Gb)
    };
    _.T(gM, Z);
    gM.prototype.j = function() {
        if (_.H(GB)) this.l.Z();
        else if (this.o.value) {
            var a = qk(this.o.value, this.A, new _.cG(this.context), this.C);
            this.l.Ka(a)
        } else this.l.Z()
    };
    gM.prototype.m = function() {
        this.l.Z()
    };
    var $q = function(a, b, c, d, e) {
        Z.call(this, a, 1164);
        this.o = b;
        this.xc = c;
        this.l = e;
        this.C = X(this, d)
    };
    _.T($q, Z);
    $q.prototype.j = function() {
        var a = _.H(Vq) ? wf(window.isSecureContext, window.document) : uf("browsing-topics", window.document);
        if (_.H(IB) && !a) this.l.Sc.Z(), this.l.Qd.D(!1), this.l.Rd.Z();
        else if (this.C.value) {
            a = new xj;
            _.S(this, a);
            N(a, new gM(this.context, window, this.o, this.xc, this.l.Sc));
            var b = new fM(this.context, this.l.Qd, this.l.Rd);
            N(a, b);
            Gj(a)
        } else this.l.Sc.D(5), this.l.Qd.D(!1), this.l.Rd.D(5)
    };
    var hM = function(a, b, c) {
        Z.call(this, a, 1101);
        this.A = b;
        this.l = c
    };
    _.T(hM, Z);
    hM.prototype.j = function() {
        if (!_.H(GB)) {
            var a = this.l,
                b = dk(this.A);
            b.setTopicsCalled ? _.t.Promise.resolve() : (b.setTopicsCalled = !0, a({
                message: "goog:topics:frame:get:topics",
                skipTopicsObservation: !1,
                sendPingToRCS: !1
            }))
        }
    };
    var br = function(a, b, c, d) {
        Z.call(this, a, 1180);
        this.A = b;
        this.o = Y(this, d);
        this.l = Y(this, c.Gb)
    };
    _.T(br, Z);
    br.prototype.j = function() {
        if (this.o.value && this.l.value) {
            var a = new xj;
            _.S(this, a);
            N(a, new hM(this.context, this.A, this.l.value));
            Gj(a)
        }
    };
    var kr = function(a) {
        this.G = _.z(a)
    };
    _.T(kr, _.A);
    var gr = function(a, b) {
        return _.Nd(a, 2, null == b ? b : Kc(b), "0")
    };
    var iM = function(a) {
        this.G = _.z(a)
    };
    _.T(iM, _.A);
    var jr = qe(iM);
    iM.ca = [1];
    var jM = function(a, b, c, d) {
        Z.call(this, a, 1186);
        this.K = b;
        this.A = c;
        this.output = V(this);
        this.U = X(this, d)
    };
    _.T(jM, Z);
    jM.prototype.j = function() {
        var a = this.A.navigator;
        if (!(_.H(Vq) ? vf(this.A.isSecureContext, this.A.navigator, this.A.document) : a.runAdAuction && uf("run-ad-auction", this.A.document)) || _.H(Yr)) this.output.Z();
        else if (a = this.K.re, null !== a) this.output.D(a);
        else {
            var b = _.am(new _.rE(this.A), "__gpi", this.U.value);
            a = this.output;
            var c = a.D;
            b = _.zf(b || String(this.context.pvsid)) % 63001;
            this.K.re = b;
            c.call(a, b)
        }
    };
    var kM = function(a, b, c) {
        Z.call(this, a, 1171);
        this.l = c;
        V(this, c);
        this.og = X(this, b)
    };
    _.T(kM, Z);
    kM.prototype.j = function() {
        this.l.D(0 === this.og.value.kind)
    };
    var lM = function(a, b, c) {
        Z.call(this, a, 1160);
        this.l = c;
        V(this, c);
        this.o = X(this, b)
    };
    _.T(lM, Z);
    lM.prototype.j = function() {
        var a = this;
        if (this.o.value.requestId) {
            var b = this.o.value.request;
            Li("td_ba", function(d) {
                Ri(d, a.context);
                L(d, "sz", b.byteLength)
            }, 1);
            if (32768 < b.byteLength) this.l.D({
                kind: 1,
                reason: 3
            });
            else {
                var c = Ab(b, 3);
                c.length ? this.l.D({
                    kind: 0,
                    signal: c,
                    requestId: this.o.value.requestId
                }) : this.l.D({
                    kind: 1,
                    reason: 5
                })
            }
        } else this.l.D({
            kind: 1,
            reason: this.o.value
        })
    };
    lM.prototype.m = function() {
        this.l.D({
            kind: 1,
            reason: 4
        })
    };
    var mM = function(a, b) {
        Z.call(this, a, 1159);
        this.output = V(this);
        this.l = b
    };
    _.T(mM, Z);
    mM.prototype.j = function() {
        var a = this;
        this.output.Ka(this.l.getInterestGroupAdAuctionData({
            seller: "https://securepubads.g.doubleclick.net"
        }).catch(function(b) {
            a.L(b);
            return 4
        }))
    };
    mM.prototype.m = function() {
        this.output.D(4)
    };
    var or = function(a, b, c, d, e) {
        Z.call(this, a, 1177);
        this.F = b;
        this.l = d;
        this.o = e;
        V(this, d);
        V(this, e);
        this.C = X(this, c)
    };
    _.T(or, Z);
    or.prototype.j = function() {
        if (this.C.value) {
            var a = new xj;
            _.S(this, a);
            var b = new mM(this.context, this.F);
            N(a, b);
            b = new lM(this.context, b.output, this.l);
            N(a, b);
            b = new kM(this.context, this.l, this.o);
            N(a, b);
            Gj(a)
        } else this.l.D({
            kind: 1,
            reason: 2
        }), this.o.D(!1)
    };
    var nM = function(a, b, c, d) {
        Z.call(this, a, 881);
        this.Aa = b;
        this.la = c;
        this.l = d;
        this.output = V(this)
    };
    _.T(nM, Z);
    nM.prototype.j = function() {
        if (4 === _.Cf(Ms)) {
            var a = _.xh(this.la, ty, 23);
            if (a) {
                var b;
                if (0 !== (null == (b = this.l) ? void 0 : b.kind)) throw new TypeError("Received remote auction config despite " + (this.l ? "invalid" : "absent") + " remarketing input.");
                this.output.D({
                    seller: "https://securepubads.g.doubleclick.net",
                    interestGroupBuyers: _.Xk(this.la, 3),
                    requestId: this.l.requestId,
                    serverResponse: tk(uk(a, 1)),
                    resolveToConfig: !_.G(this.la, 14)
                })
            } else this.output.Z()
        } else {
            b = this.output;
            a = b.D;
            for (var c = this.la, d = Qm(this.context, this.Aa), e = !_.G(c, 14) && !0, f = {}, g = _.w(Ah(c, ry, 7)), h = g.next(); !h.done; h = g.next()) h = h.value, f[_.M(h, 1)] = JSON.parse(_.M(h, 2));
            if (g = _.xh(c, qy, 6)) f["https://googleads.g.doubleclick.net"] = g.toJSON(), f["https://td.doubleclick.net"] = g.toJSON();
            h = {};
            g = _.w(Ah(c, sy, 11));
            for (var k = g.next(); !k.done; k = g.next()) k = k.value, h[_.M(k, 1)] = _.Sw(k, 2);
            k = {};
            0 !== _.Sw(c, 21) && (k["*"] = _.Sw(c, 21));
            var l = {};
            Rr(c, 18) && (l["https://googleads.g.doubleclick.net"] = Rr(c, 18), l["https://td.doubleclick.net"] = Rr(c, 18));
            g = _.w(Ld(c, 24, wy));
            for (var m = g.next(); !m.done; m = g.next()) {
                var n = m.value;
                Rr(n[1], 4) && (m = n[0], n = Rr(n[1], 4), l[m] = n)
            }
            g = _.M(c, 1).split("/td/")[0];
            var p;
            m = null == (p = _.xh(c, vy, 5)) ? void 0 : _.vd(p);
            var r;
            null != m && null != (r = _.xh(m, uy, 5)) && _.Uh(r, 2);
            p = _.y(Object, "assign").call(Object, {}, {
                seller: g,
                decisionLogicUrl: _.M(c, 1),
                trustedScoringSignalsUrl: _.M(c, 2),
                interestGroupBuyers: _.Xk(c, 3),
                sellerExperimentGroupId: Rr(c, 17),
                auctionSignals: JSON.parse(_.M(c, 4) || "{}"),
                sellerSignals: (null == m ? void 0 : m.toJSON()) || [],
                sellerTimeout: _.Sw(c, 15) || 50,
                perBuyerExperimentGroupIds: l,
                perBuyerSignals: f,
                perBuyerTimeouts: h,
                perBuyerCumulativeTimeouts: k
            }, e ? {
                resolveToConfig: e
            } : {});
            if (null == c ? 0 : _.G(yy(c), 25)) p.sellerCurrency = "USD", p.perBuyerCurrencies = _.y(Object, "fromEntries").call(Object, Kd(c, 22));
            _.M(c, 28) ? p.directFromSellerSignalsHeaderAdSlot = _.M(c, 28) : _.M(c, 19) && (r = _.M(c, 19), p.directFromSellerSignals = "" !== r ? g + r : void 0);
            r = new vy;
            "0" !== Tw(Cr(yy(c), uy, 5)) && (f = new uy, h = Tw(Cr(yy(c), uy, 5)), f = _.Nd(f, 2, null == h ? h : _.Hc(h), "0"), _.Yg(r, 5, f));
            yy(c).getEscapedQemQueryId() && (f = yy(c).getEscapedQemQueryId(), _.Wg(r, 2, f));
            d = _.y(Object, "assign").call(Object, {}, {
                seller: g,
                decisionLogicUrl: _.M(c, 1),
                sellerExperimentGroupId: Rr(c, 17),
                sellerSignals: r.toJSON(),
                sellerTimeout: _.Sw(c, 15) || 50,
                interestGroupBuyers: [],
                auctionSignals: {},
                perBuyerExperimentGroupIds: {},
                perBuyerSignals: {},
                perBuyerTimeouts: {},
                perBuyerCumulativeTimeouts: {},
                componentAuctions: [p].concat(_.Ie(null != d ? d : []))
            }, e ? {
                resolveToConfig: e
            } : {});
            _.M(c, 28) ? d.directFromSellerSignalsHeaderAdSlot = _.M(c, 28) : _.M(c, 19) && (c = _.M(c, 19), d.directFromSellerSignals = "" !== c ? g + c : void 0);
            a.call(b, d)
        }
    };
    nM.prototype.m = function() {
        this.output.Z()
    };
    var sr = navigator,
        tr = /(\$\{GDPR})/gi,
        ur = /(\$\{GDPR_CONSENT_[0-9]+\})/gi,
        vr = /(\$\{ADDTL_CONSENT})/gi,
        wr = /(\$\{AD_WIDTH})/gi,
        xr = /(\$\{AD_HEIGHT})/gi,
        yr = /(\$\{RENDER_DATA})/gi;
    gf({
        google_signals: gf({
            buyer_reporting_id: sh
        })
    });
    var oM = function() {
            var a = this;
            this.promise = new _.t.Promise(function(b, c) {
                a.reject = c;
                a.resolve = b
            })
        },
        pM = function() {
            this.auctionSignals = new oM;
            this.topLevelSellerSignals = new oM;
            this.j = new oM;
            this.perBuyerSignals = new oM;
            this.perBuyerTimeouts = new oM;
            this.perBuyerCumulativeTimeouts = new oM;
            this.directFromSellerSignals = new oM;
            this.directFromSellerSignalsHeaderAdSlot = new oM;
            this.resolveToConfig = new oM
        },
        qM = function(a, b, c) {
            this.j = a;
            this.rf = b;
            this.Wa = c
        };
    var rM = navigator,
        sM = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
            Z.call(this, a, 882);
            this.K = b;
            this.U = c;
            this.fa = d;
            this.la = e;
            this.aa = f;
            this.O = g;
            this.o = l;
            this.F = m;
            this.J = n;
            this.M = p;
            this.Ta = V(this);
            this.l = V(this);
            this.C = Y(this, h);
            this.V = X(this, k);
            V(this, this.F);
            V(this, this.J);
            V(this, this.M)
        };
    _.T(sM, Z);
    sM.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n, p, r, v, u;
        return _.lb(function(x) {
            switch (x.j) {
                case 1:
                    if (!a.C.value) return null == (b = a.o) || b.Wa.abort(), tM(a), a.l.D(!1), x.return();
                    c = yy(a.la);
                    d = a.la.getWidth();
                    e = a.la.getHeight();
                    if (!d || !e) return Er(0, 0, c), null == (f = a.o) || f.Wa.abort(), tM(a), a.l.D(!1), x.return();
                    g = _.G(c, 9);
                    if (h = _.G(c, 10))
                        if (tM(a), _.G(c, 17)) return Er(0, 0, c), null == (k = a.o) || k.Wa.abort(), a.l.D(!1), x.return();
                    Gr(a.context, c);
                    l = performance.now();
                    m = _.Sw(a.la, 8) || 1E3;
                    var C = a.C.value;
                    var D = _.Sw(c, 14) || -1;
                    if (0 < D && a.K.v >= D) C = 1;
                    else if (D = _.Sw(c, 13) || -1, 0 < D && a.K.H >= D) C = 1;
                    else if (++a.K.v, ++a.K.H, C.signal = AbortSignal.timeout(m), _.G(c, 15)) --a.K.v, C = Fr();
                    else {
                        if (a.o && C.serverResponse) throw new TypeError("Attempted to provide a RemoteAuctionConfig in parallelized auction.");
                        C = a.o ? uM(a, C, m, l, a.o, c) : vM(a, C, m, l, c);
                        --a.K.v
                    }
                    return _.mb(x, C, 2);
                case 2:
                    n = x.v;
                    p = Math.round(performance.now() - l);
                    r = "string" === typeof n || Jr(n);
                    Hr(a.context, n, p, m, !!a.o, c, a.C.value, r);
                    a.M.D(r && !g);
                    if (!r) return v = 2 === n, Er(p, v ? m : 0, c), h || tM(a), a.l.D(!0), x.return();
                    if (h) return _.mb(x, rM.deprecatedURNToURL(n, !0), 8);
                    if (!g) {
                        x.j = 4;
                        break
                    }
                    if (_.G(c, 17)) {
                        Er(0, 0, c);
                        x.j = 6;
                        break
                    }
                    return _.mb(x, rM.deprecatedURNToURL(n, !0), 6);
                case 6:
                    return a.l.D(!0), tM(a), x.return();
                case 8:
                    return a.l.D(!0), x.return();
                case 4:
                    return a.l.D(!0), u = _.H(MB) ? Dr(a.C.value, a.la) : void 0, _.mb(x, zr(n, _.y(Object, "assign").call(Object, {}, {
                        gdprApplies: null != Yl(a.U, 3) ? _.G(a.U, 3) ? "1" : "0" : null,
                        rh: _.rj(a.U, 2),
                        Hg: _.rj(a.U, 4),
                        Fg: d.toString(),
                        Eg: e.toString()
                    }, u ? {
                        fi: u
                    } : {})), 9);
                case 9:
                    ep(a.V.value, !0), a.F.D({
                        kind: 2,
                        Wb: n
                    }), a.J.D(new _.Rh(d, e)), a.Ta.D(!1), x.j = 0
            }
        })
    };
    sM.prototype.m = function() {
        var a, b = null == (a = this.la) ? void 0 : yy(a);
        b && Er(0, 0, b);
        var c;
        null == (c = this.o) || c.Wa.abort();
        tM(this)
    };
    var vM = function(a, b, c, d, e) {
            var f;
            return null == (f = rM.runAdAuction) ? void 0 : f.call(rM, b).then(function(g) {
                Ir(a.context, g, c, d, e);
                return g
            }).catch(function(g) {
                return g instanceof DOMException && "TimeoutError" === g.name ? 2 : 3
            })
        },
        uM = function(a, b, c, d, e, f) {
            rr(b, e);
            setTimeout(function() {
                e.Wa.abort(new DOMException("runAdAuction", "TimeoutError"))
            }, c);
            return e.j.then(function(g) {
                (null === g || "string" === typeof g || Jr(g)) && Ir(a.context, g, c, d, f);
                return g
            })
        },
        tM = function(a) {
            if (_.H(Lr)) {
                var b = _.M(a.la, 25);
                if (b) {
                    ep(a.V.value, !0);
                    a.Ta.D(!1);
                    a.F.D({
                        kind: 2,
                        Wb: b
                    });
                    a.J.D(a.O);
                    return
                }
            }
            a.Ta.D(a.fa);
            a.F.D(a.aa);
            a.J.D(a.O);
            a.M.D(!1)
        };
    var wM = function(a, b, c, d) {
        Z.call(this, a, 1105);
        this.adUnitPath = b;
        this.la = c;
        this.l = d
    };
    _.T(wM, Z);
    wM.prototype.j = function() {
        var a = _.Xk(this.la, 3),
            b = dr(this.adUnitPath);
        if (_.G(this.la, 20)) {
            a = Kr(a);
            var c = this.l.getItem(b),
                d = c ? Ah(jr(c), kr, 1) : [];
            c = new iM;
            a = hr(d, a);
            a = _.bl(c, 1, a);
            this.l.setItem(b, pk(a))
        } else _.H(NB) && this.l.removeItem(b)
    };
    var xM = function(a, b, c, d) {
        Z.call(this, a, 1174);
        var e = this;
        this.W = b;
        this.directFromSellerSignals = c;
        this.l = _.Xu(function() {
            var f = (_.E = [].concat(_.Ie(e.W.head.querySelectorAll("script[type=webbundle]"))), _.y(_.E, "find")).call(_.E, function(h) {
                var k;
                return null == (k = h.textContent) ? void 0 : k.match(e.directFromSellerSignals)
            });
            if (null != f && f.textContent) {
                var g = JSON.parse(f.textContent);
                g.resources = g.resources.filter(function(h) {
                    return !h.match(e.directFromSellerSignals)
                });
                f.remove();
                g.resources.length && (f = e.W.createElement("script"), f.type = "webbundle", Xa(f, ye(g)), e.W.head.appendChild(f))
            }
        });
        xF(this, d);
        _.ap(this, function() {
            return setTimeout(function() {
                return void e.l()
            }, 5E3)
        })
    };
    _.T(xM, Z);
    xM.prototype.j = function() {
        this.l()
    };
    var yM = function(a, b, c) {
        Z.call(this, a, 1175);
        this.output = vF(this);
        xF(this, b);
        xF(this, c)
    };
    _.T(yM, Z);
    yM.prototype.j = function() {
        oF(this.output, Az(5E3))
    };
    var zM = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, u) {
        Z.call(this, a, 1201);
        this.fa = b;
        this.U = c;
        this.la = d;
        this.ma = e;
        this.O = k;
        this.F = l;
        this.J = m;
        this.M = n;
        this.C = p;
        this.l = r;
        this.oa = vF(this);
        this.o = V(this);
        this.ya = Y(this, f);
        this.Ia = X(this, g);
        this.ra = X(this, h);
        this.aa = X(this, u);
        this.V = X(this, v);
        V(this, p);
        V(this, n.Ta);
        V(this, n.qa);
        V(this, n.Ha);
        V(this, this.l)
    };
    _.T(zM, Z);
    zM.prototype.j = function() {
        var a = Math.round(performance.now() - this.Ia.value),
            b = this.ra.value,
            c = this.ya.value,
            d = _.xh(this.la, vy, 5),
            e = _.G(d, 10),
            f = _.G(d, 9),
            g = "string" === typeof c || "function" === typeof FencedFrameConfig && c instanceof FencedFrameConfig,
            h = 3 !== c && 2 !== c && 1 !== c;
        this.l.D(g && !f);
        h && Or(this.context, g, b, a, d);
        var k, l;
        h = null != (l = null == (k = this.aa.value.componentAuctions) ? void 0 : k.length) ? l : 0;
        Nr(this.context, c, a, b, !!this.ma, d, h, g);
        if (g)
            if (e) this.fa.deprecatedURNToURL(c, !0), this.C.D(!0), this.o.Z();
            else if (f) {
            _.G(d, 17) ? Er(0, 0, d) : this.fa.deprecatedURNToURL(c, !0);
            var m;
            Mr(this.M, this.l, this.F, this.J, this.O, null == (m = this.la) ? void 0 : _.M(m, 25), this.V.value);
            this.C.D(!0);
            this.o.Z()
        } else this.o.D(c), this.C.D(!0), a = _.H(MB) ? Dr(this.aa.value, this.la) : void 0, oF(this.oa, zr(c, _.y(Object, "assign").call(Object, {}, {
            gdprApplies: null != Yl(this.U, 3) ? _.G(this.U, 3) ? "1" : "0" : null,
            rh: _.rj(this.U, 2),
            Hg: _.rj(this.U, 4),
            Fg: this.la.getWidth().toString(),
            Eg: this.la.getHeight().toString()
        }, a ? {
            fi: a
        } : {})));
        else {
            Er(a, 2 === c ? b : 0, d);
            if (!e) {
                var n;
                Mr(this.M, this.l, this.F, this.J, this.O, null == (n = this.la) ? void 0 : _.M(n, 25), this.V.value)
            }
            this.C.D(!0);
            this.o.Z()
        }
    };
    zM.prototype.m = function() {
        var a, b, c = null == (a = this.la) ? void 0 : _.xh(a, vy, 5);
        a = this.ma;
        var d = this.V.value,
            e = this.M,
            f = this.l,
            g = this.F,
            h = this.J,
            k = this.O,
            l = null == (b = this.la) ? void 0 : _.M(b, 25);
        c && Er(0, 0, c);
        null == a || a.Wa.abort();
        Mr(e, f, g, h, k, l, d)
    };
    var AM = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, a, 1200);
        this.K = b;
        this.ra = c;
        this.o = d;
        this.la = e;
        this.V = g;
        this.J = h;
        this.M = k;
        this.O = m;
        this.aa = n;
        this.C = uF(this);
        this.oa = V(this);
        this.ma = V(this);
        this.F = V(this);
        this.l = Y(this, f);
        this.fa = X(this, l);
        V(this, m.Ta);
        V(this, m.qa);
        V(this, m.Ha);
        V(this, n)
    };
    _.T(AM, Z);
    AM.prototype.j = function() {
        if (this.l.value) {
            var a = yy(this.la);
            Pr(this.context, a);
            this.oa.D(performance.now());
            var b = _.Sw(this.la, 8) || 1E3;
            this.ma.D(b);
            var c = _.Sw(a, 14) || -1,
                d = _.Sw(a, 13) || -1;
            d = 0 < d && this.K.H >= d;
            if (0 < c && this.K.v >= c || d) this.C.D(1);
            else if (++this.K.v, ++this.K.H, this.l.value.signal = AbortSignal.timeout(b), _.G(a, 15)) --this.K.v, this.C.Ka(new _.t.Promise(function(e) {
                setTimeout(function() {
                    e(1)
                }, 0)
            }));
            else {
                if (this.o && this.l.value.serverResponse) throw new TypeError("Attempted to provide a RemoteAuctionConfig in parallelized auction.");
                a = this.o ? BM(this.l.value, b, this.o) : CM(this, this.l.value);
                --this.K.v;
                this.C.Ka(a)
            }
        } else null == (a = this.o) || a.Wa.abort(), Mr(this.O, this.aa, this.J, this.M, this.V, _.M(this.la, 25), this.fa.value), this.F.D(!1)
    };
    var CM = function(a, b) {
            var c, d;
            return null == (d = (c = a.ra).runAdAuction) ? void 0 : d.call(c, b).catch(function(e) {
                return e instanceof DOMException && "TimeoutError" === e.name ? 2 : 3
            })
        },
        BM = function(a, b, c) {
            rr(a, c);
            setTimeout(function() {
                c.Wa.abort(new DOMException("runAdAuction", "TimeoutError"))
            }, b);
            return c.j
        };
    AM.prototype.m = function() {
        var a, b = null == (a = this.la) ? void 0 : _.xh(a, vy, 5);
        a = this.o;
        var c = this.fa.value,
            d = this.O,
            e = this.aa,
            f = this.J,
            g = this.M,
            h = this.V,
            k = _.M(this.la, 25);
        b && Er(0, 0, b);
        null == a || a.Wa.abort();
        Mr(d, e, f, g, h, k, c)
    };
    var DM = function(a, b, c, d, e, f) {
        Z.call(this, a, 1202);
        this.la = b;
        this.l = c;
        this.o = Y(this, e);
        this.C = X(this, d);
        xF(this, f);
        V(this, c.Ta);
        V(this, c.qa);
        V(this, c.Ha)
    };
    _.T(DM, Z);
    DM.prototype.j = function() {
        this.o.value && (ep(this.C.value, !0), this.l.qa.D({
            kind: 2,
            Wb: this.o.value
        }), this.l.Ha.D(new _.Rh(this.la.getWidth(), this.la.getHeight())), this.l.Ta.D(!1))
    };
    var EM = function(a, b, c) {
        Z.call(this, a, 1054);
        this.l = b;
        this.output = vF(this);
        this.o = X(this, c)
    };
    _.T(EM, Z);
    EM.prototype.j = function() {
        this.o.value || this.l();
        this.output.notify()
    };
    var FM = function(a, b, c, d, e, f) {
        Z.call(this, a, 1053);
        this.slotId = b;
        this.P = c;
        this.K = d;
        this.l = V(this);
        this.o = X(this, e);
        this.C = X(this, f)
    };
    _.T(FM, Z);
    FM.prototype.j = function() {
        this.C.value ? (Wr(this.slotId, this.K, this.P, this.o.value), this.l.D(!1)) : this.l.D(!0)
    };
    var GM = function(a, b, c, d) {
        Z.call(this, a, 1055);
        this.l = d;
        xF(this, c);
        this.o = X(this, b);
        vF(this, this.l)
    };
    _.T(GM, Z);
    GM.prototype.j = function() {
        this.o.value && this.l.notify()
    };
    var Zr = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, u, x) {
        Z.call(this, a, 1179);
        this.slotId = b;
        this.T = d;
        this.K = e;
        this.U = f;
        this.o = g;
        this.M = l;
        this.C = m;
        this.P = n;
        this.V = p;
        this.ic = r;
        this.l = u;
        this.fa = x;
        this.aa = Y(this, v);
        this.F = X(this, h);
        this.J = X(this, k);
        this.O = Y(this, c)
    };
    _.T(Zr, Z);
    Zr.prototype.j = function() {
        var a = new xj;
        _.S(this, a);
        var b = this.aa.value,
            c = V(this);
        if (b)
            if (_.H(PB)) {
                var d = yy(b),
                    e = _.G(d, 10);
                if (b.getWidth() && b.getHeight())
                    if (e)
                        if (Mr({
                                Ta: c,
                                qa: this.l.qa,
                                Ha: this.l.Ha
                            }, this.l.oc, this.F.value, this.J.value, this.o), _.G(d, 17)) {
                            Er(0, 0, d);
                            var f;
                            null == (f = this.C) || f.Wa.abort()
                        } else HM(this, a, b);
                else c = HM(this, a, b);
                else {
                    Mr({
                        Ta: c,
                        qa: this.l.qa,
                        Ha: this.l.Ha
                    }, this.l.oc, this.F.value, this.J.value, this.o);
                    Er(0, 0, d);
                    var g;
                    null == (g = this.C) || g.Wa.abort()
                }
            } else c = HM(this, a, b);
        else Mr({
            Ta: c,
            qa: this.l.qa,
            Ha: this.l.Ha
        }, this.l.oc, this.F.value, this.J.value, this.o), null == (d = this.C) || d.Wa.abort();
        b = new FM(this.context, this.slotId, this.P, this.K, this.ic, c);
        N(a, b);
        c = new EM(this.context, this.V, c);
        N(a, c);
        c = new GM(this.context, b.l, c.output, this.l.Rb);
        N(a, c);
        Gj(a)
    };
    var HM = function(a, b, c) {
        if (2 === _.Cf(Ms) && a.O.value && _.G(c, 20) && 0 !== _.Xk(c, 3).length) {
            var d = new wM(a.context, a.slotId.getAdUnitPath(), c, a.O.value);
            N(b, d)
        }
        var e = new nM(a.context, a.T, c, a.fa);
        N(b, e);
        var f = navigator;
        if (_.H(PB)) {
            var g = {
                qa: a.l.qa,
                Ha: a.l.Ha,
                Ta: new An
            };
            d = g.Ta;
            var h = new AM(a.context, a.K, f, a.C, c, e.output, a.o, a.F.value, a.J.value, a.M, g, a.l.oc);
            N(b, h);
            var k = h.F;
            e = new zM(a.context, f, a.U, c, a.C, h.C, h.oa, h.ma, a.o, a.F.value, a.J.value, g, k, a.l.oc, a.M, e.output);
            N(b, e);
            g = new DM(a.context, c, g, a.M, e.o, e.oa);
            N(b, g)
        } else d = new sM(a.context, a.K, a.U, a.o, c, a.F.value, a.J.value, e.output, a.M, a.C, a.l.qa, a.l.Ha, a.l.oc), N(b, d), k = d.l, d = d.Ta;
        g = new Fp(a.context, a.slotId, Vr);
        N(b, g);
        k = new yM(a.context, k, g.output);
        N(b, k);
        c = _.M(c, 19);
        (null == c ? 0 : c.length) && N(b, new xM(a.context, window.document, c, k.output));
        return d
    };
    var Xr = navigator;
    var IM = function() {
        QL.apply(this, arguments)
    };
    _.T(IM, QL);
    var JM = function(a, b) {
            var c = _.Me(b ? "fencedframe" : "IFRAME");
            b && (c.mode = "opaque-ads");
            c.id = a.rd;
            c.name = a.rd;
            c.title = a.td;
            Array.isArray(a.j) ? null != a.j[0] && null != a.j[1] && (c.width = String(a.j[0]), c.height = String(a.j[1])) : (c.width = "100%", c.height = "0");
            c.allowTransparency = "true";
            c.scrolling = "no";
            c.marginWidth = "0";
            c.marginHeight = "0";
            c.frameBorder = "0";
            c.style.border = "0";
            c.style.verticalAlign = "bottom";
            c.setAttribute("role", "region");
            c.setAttribute("aria-label", "Advertisement");
            c.tabIndex = 0;
            return c
        },
        KM = function(a, b) {
            "string" !== typeof a.j && (b.width = String(a.j[0]), b.height = String(a.j[1]));
            var c = gh(a.context, 774, function() {
                a.loaded(b);
                _.af(b, "load", c)
            });
            _.ib(b, "load", c);
            _.ap(a, function() {
                return _.af(b, "load", c)
            });
            a.m.Rg.appendChild(b)
        };
    var LM = function() {
        IM.apply(this, arguments)
    };
    _.T(LM, IM);
    LM.prototype.l = function() {
        var a = JM(this, !this.m.ll);
        if ("string" === typeof this.jb.Wb) {
            var b = this.jb.Wb;
            if (_.H(Lr) && _.y(b, "startsWith").call(b, "http") || /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b)) b = _.te(b), a.src = _.Ya(b).toString()
        } else a.config = this.jb.Wb;
        KM(this, a);
        return a
    };
    LM.prototype.B = function() {
        return !1
    };
    var MM = navigator,
        NM = function(a, b, c, d, e, f, g) {
            Z.call(this, a, 1089);
            this.Pb = b;
            this.ba = c;
            this.T = d;
            this.Cc = f;
            this.l = g;
            V(this, g);
            e && (this.o = Y(this, e))
        };
    _.T(NM, Z);
    NM.prototype.j = function() {
        var a = {};
        if (1 === this.Pb)
            for (var b = _.w(this.ba), c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                c = this.T[d.getDomId()];
                a[d.getId()] = OM(this, c, void 0, this.Cc)
            } else if (2 === this.Pb) {
                b = null == (d = this.o) ? void 0 : d.value;
                if (!b) {
                    this.l.Z();
                    return
                }
                d = _.w(this.ba);
                for (c = d.next(); !c.done; c = d.next()) {
                    c = c.value;
                    var e = b.get(c.getId()),
                        f = void 0;
                    null != (f = e) && f.length && (f = this.T[c.getDomId()], a[c.getId()] = OM(this, f, e, this.Cc))
                }
            }
        this.l.D(a)
    };
    var OM = function(a, b, c, d) {
        var e = new pM,
            f = new AbortController;
        a = qr({
            rf: e,
            Wa: f,
            Qg: Qm(a.context, b),
            interestGroupBuyers: c,
            Cc: d
        });
        a = MM.runAdAuction(a).catch(function(g) {
            return g instanceof DOMException && "TimeoutError" === g.name ? 2 : 3
        });
        return new qM(a, e, f)
    };
    var PM = function(a, b, c, d, e, f) {
        Z.call(this, a, 1106);
        this.U = b;
        this.o = c;
        this.ba = d;
        this.Cc = e;
        this.C = f;
        this.l = V(this);
        V(this, f)
    };
    _.T(PM, Z);
    PM.prototype.j = function() {
        for (var a = lr(this.o, this.U, this.Cc), b = new _.t.Map, c = new _.t.Map, d = _.w(this.ba), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            e = f.getAdUnitPath();
            var g = void 0,
                h = void 0,
                k = null != (h = null == (g = a.get(dr(e))) ? void 0 : Ah(g, kr, 1).map(function(l) {
                    return _.M(l, 1)
                })) ? h : [];
            b.set(f.getId(), k);
            if (!c.has(e)) {
                f = [];
                k = _.w(k.sort());
                for (g = k.next(); !g.done; g = k.next()) f.push(_.zf(g.value));
                c.set(e, f)
            }
        }
        this.l.D(b);
        this.C.D(c)
    };
    var js = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1170);
        this.Pb = b;
        this.T = c;
        this.U = d;
        this.o = e;
        this.l = {
            hg: V(this)
        };
        2 !== b || _.H(JB) && !this.o || (this.l.If = V(this));
        this.J = X(this, f);
        this.F = X(this, g);
        h && (this.C = Y(this, h))
    };
    _.T(js, Z);
    js.prototype.j = function() {
        var a = this.J.value;
        if (this.F.value && a.length) {
            var b = new xj;
            _.S(this, b);
            if (2 === this.Pb && this.o) {
                var c, d;
                var e = new PM(this.context, this.U, this.o, a, null != (d = null == (c = this.C) ? void 0 : c.value) ? d : void 0, this.l.If);
                N(b, e);
                e = e.l
            }
            var f, g;
            a = new NM(this.context, this.Pb, a, this.T, e, null != (g = null == (f = this.C) ? void 0 : f.value) ? g : void 0, this.l.hg);
            N(b, a);
            Gj(b)
        } else this.l.hg.Z(), null == (b = this.l.If) || b.Z()
    };
    var QM = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1166);
        this.bd = b;
        this.W = c;
        this.F = d;
        this.l = uF(this);
        this.o = V(this);
        this.C = V(this);
        this.M = X(this, e);
        this.O = X(this, f);
        xF(this, g);
        this.J = X(this, h)
    };
    _.T(QM, Z);
    QM.prototype.j = function() {
        var a = this,
            b = this.M.value;
        if (b) {
            var c = _.qb(this.O.value, {
                    uuid: this.bd
                }),
                d = this.W.createElement("script");
            b = {
                source: b,
                credentials: this.J.value ? "include" : "omit",
                resources: [c.toString()]
            };
            d.setAttribute("type", "webbundle");
            Xa(d, ye(b));
            this.W.head.appendChild(d);
            this.o.D(d);
            this.C.D(b);
            this.l.Ka(RM(c).catch(function(e) {
                e instanceof gE ? a.F(e) : (a.L(e), a.m(e));
                return null
            }))
        } else this.l.Z(), this.o.Z(), this.C.Z()
    };
    var RM = function(a) {
        var b, c;
        return _.lb(function(d) {
            if (1 == d.j) return _.mb(d, fetch(a.toString()).catch(function() {
                throw new gE("Failed to fetch bundle index.");
            }), 2);
            if (3 != d.j) return b = d.v, _.mb(d, b.text(), 3);
            c = d.v;
            return d.return(Dy(c))
        })
    };
    var SM = function(a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, a, 1167);
        this.W = b;
        this.U = c;
        this.F = d;
        this.l = e;
        this.C = f;
        this.o = X(this, g);
        this.M = Y(this, h);
        this.O = Y(this, k);
        this.V = Y(this, l);
        m && (this.J = Y(this, m))
    };
    _.T(SM, Z);
    SM.prototype.j = function() {
        var a = this.M.value,
            b = this.O.value,
            c = this.V.value;
        if (a)
            if (b && c) {
                var d = _.Xk(a, 1),
                    e = _.Xk(a, 2);
                a = _.Xk(a, 3);
                if (d.length !== e.length) this.l(new fE("Received " + d.length + " ad URLs but " + e.length + " metadatas"));
                else {
                    c.resources = [].concat(_.Ie(d.filter(function(f) {
                        return f
                    })), _.Ie(a.map(function(f) {
                        return "https://securepubads.g.doubleclick.net" + f
                    })));
                    c.resources.length ? (a = _.Me("SCRIPT"), a.setAttribute("type", "webbundle"), Xa(a, ye(c)), this.W.head.removeChild(b), this.W.head.appendChild(a)) : this.W.head.removeChild(b);
                    for (b = 0; b < d.length; b++) c = void 0, this.F(b, e[b], {
                        kind: 1,
                        url: d[b]
                    }, this.o.value, this.U, null == (c = this.J) ? void 0 : c.value, void 0);
                    this.C(d.length - 1, this.o.value, this.U)
                }
            } else this.l(Error("Lost bundle script"))
    };
    var TM = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        xj.call(this);
        e = new QM(a, f, h, c, m, n, p, r);
        N(this, e);
        N(this, new SM(a, h, g, b, c, d, k, e.l, e.o, e.C, l));
        this.j = {
            output: e.l
        }
    };
    _.T(TM, xj);
    var vs = new _.t.Set,
        UM = function(a, b, c) {
            var d = 0,
                e = function() {
                    d = 0
                };
            return function(f) {
                d || (d = _.q.setTimeout(e, b), a.apply(c, arguments))
            }
        }(function() {
            throw new Nm("Reached Limit for addEventListener");
        }, 3E5),
        VM = function(a, b, c) {
            _.U.call(this);
            this.context = a;
            this.R = b;
            this.m = c;
            this.j = [];
            this.enabled = !1;
            this.o = 0;
            this.l = new _.t.Map;
            vs.add(this);
            this.R.info(iI(this.getName()))
        };
    _.T(VM, _.U);
    var xs = function(a) {
        a.enabled || (a.enabled = !0, $l(6, a.context), a.L())
    };
    VM.prototype.slotAdded = function(a, b) {
        this.j.push(a);
        var c = new jL(a, this.getName());
        Sr(this.m, "slotAdded", 818, c);
        this.R.info(jI(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        bx(b, 4, a)
    };
    VM.prototype.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return ja(b.j, c)
        })
    };
    VM.prototype.addEventListener = function(a, b, c) {
        var d = this;
        c = void 0 === c ? window : c;
        if (this.o >= _.Cf(WA) && 0 < _.Cf(WA)) return UM(), !1;
        if (!c.IntersectionObserver && (_.E = ["impressionViewable", "slotVisibilityChanged"], _.y(_.E, "includes")).call(_.E, a)) return Q(this.R, YI()), !1;
        var e;
        if (null == (e = this.l.get(a)) ? 0 : e.has(b)) return !1;
        this.l.has(a) || this.l.set(a, new _.t.Map);
        c = function(f) {
            f = f.detail;
            try {
                b(f)
            } catch (k) {
                d.R.error(yI(String(k), a));
                var g, h;
                null == (g = window.console) || null == (h = g.error) || h.call(g, k)
            }
        };
        this.l.get(a).set(b, c);
        this.m.listen(a, c);
        this.o++;
        return !0
    };
    VM.prototype.removeEventListener = function(a, b) {
        var c, d = null == (c = this.l.get(a)) ? void 0 : c.get(b);
        if (!d || !wH(this.m, a, d)) return !1;
        this.o--;
        return this.l.get(a).delete(b)
    };
    var ns = function(a) {
        for (var b = _.w(vs), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
    };
    var rs = function(a, b, c, d) {
        VM.call(this, a, b, d);
        this.B = c;
        this.ads = new _.t.Map;
        this.vc = !1
    };
    _.T(rs, VM);
    rs.prototype.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.vc = a)
    };
    var jJ = function(a, b) {
            var c;
            return a.B.enabled && !(null == (c = a.ads.get(b)) || !c.Ak)
        },
        kJ = function(a, b, c, d) {
            b = new fL(b, a.getName());
            null != c && null != d && (b.size = [c, d]);
            Sr(a.m, "slotRenderEnded", 67, b)
        };
    rs.prototype.getName = function() {
        return "companion_ads"
    };
    rs.prototype.slotAdded = function(a, b) {
        var c = this;
        a.listen(AH, function(d) {
            Yl(d.detail, 11) && (WM(c, a).Ak = !0)
        });
        VM.prototype.slotAdded.call(this, a, b)
    };
    rs.prototype.L = function() {};
    var WM = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.ap(b, function() {
                return a.ads.delete(b)
            }));
            return c
        },
        hJ = function(a, b) {
            var c = yi().j,
                d = yi().v;
            if (a.B.enabled) {
                var e = {
                    Sb: 3
                };
                a.I && (e.Tc = a.I);
                a.C && (e.Uc = a.C);
                b = null != b ? b : a.j;
                c = Vh(c, d);
                d = e.Tc;
                var f = e.Uc;
                d && "number" !== typeof d || f && "number" !== typeof f || a.B.refresh(c, b, e)
            } else(null == b ? 0 : b[0]) && a.R.error(pI(b[0].getDomId()))
        },
        iJ = function(a, b) {
            return a.j.filter(function(c) {
                return _.y(b, "includes").call(b, c.toString())
            })
        };
    var ss = function(a, b, c) {
        VM.call(this, a, b, c)
    };
    _.T(ss, VM);
    ss.prototype.getName = function() {
        return "content"
    };
    ss.prototype.L = function() {};
    var XM = _.lu(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", "", ".js"]),
        YM = _.lu(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", "_", ".js"]),
        ZM = _.lu(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", "", ".js"]),
        $M = _.lu(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", "_", ".js"]),
        aN = new _.t.Map([
            [2, {
                Yf: "page_level_ads"
            }],
            [5, {
                Yf: "shoppit"
            }],
            [6, {
                Yf: "side_rails"
            }]
        ]),
        bN = function(a) {
            var b = void 0 === b ? aN : b;
            this.context = a;
            this.j = b;
            this.v = new _.t.Map;
            this.loaded = new _.t.Set
        },
        dN;
    bN.prototype.load = function(a) {
        var b = _.cN(this, a),
            c, d = (null != (c = this.j.get(a.module)) ? c : {}).Yf;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            (c = _.Jh(172)) && "pagead2.googlesyndication.com" === dz((c.src || "").match(_.cz)[3] || null) ? (c = "", _.H(lB) && (c = sp(_.H(kB), this.context.lh)), d = this.context.wb ? _.ue(ZM, this.context.wb, d, c) : _.ue($M, d, this.context.ub)) : this.context.wb ? (c = "", _.H(lB) && (c = sp(_.H(kB), this.context.lh)), d = _.ue(XM, this.context.wb, d, c)) : d = _.ue(YM, d, this.context.ub);
            c = {};
            var e = _.Cf(vB);
            e && (c.cb = e);
            d = _.y(Object, "keys").call(Object, c).length ? _.fv(d, c) : d;
            dN(this, a);
            _.mn(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    _.cN = function(a, b) {
        b = b.module;
        a.v.has(b) || a.v.set(b, new _.Rf);
        return a.v.get(b)
    };
    dN = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = gh(a.context, 340, function(e) {
            if (a.j.has(c) && "function" === typeof e) {
                var f = a.j.get(c);
                f = (void 0 === f.rj ? [] : f.rj).map(function(g) {
                    return _.cN(a, g).promise
                });
                _.t.Promise.all(f).then(function() {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(Pm(), b, {
            value: function(e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    };
    var eN = function(a, b) {
        Z.call(this, a, 980);
        this.output = new En;
        this.l = [];
        this.o = X(this, b)
    };
    _.T(eN, Z);
    eN.prototype.j = function() {
        for (var a = _.w((_.E = [this.o.value, this.l.map(function(c) {
                return c.value
            })], _.y(_.E, "flat")).call(_.E)), b = a.next(); !b.done; b = a.next()) sf(b.value);
        this.output.notify()
    };
    var fN = function(a, b) {
        Z.call(this, a, 892, _.Cf(rB));
        this.l = V(this);
        this.C = V(this);
        this.o = V(this);
        this.ed = V(this);
        this.Ld = V(this);
        this.F = V(this);
        this.cf = V(this);
        this.J = wF(this, b)
    };
    _.T(fN, Z);
    fN.prototype.j = function() {
        var a = this.J.value;
        if (!a) throw Error("config timeout");
        this.l.Fa(_.xh(a, Jx, 3));
        this.C.Fa(_.xh(a, Lx, 2));
        this.o.D(Dd(a, 4, Cc));
        this.ed.Fa(Ah(a, Fx, 6));
        this.Ld.Fa(Ah(a, Xx, 5));
        this.F.Fa(_.xh(a, Wx, 7));
        var b;
        this.cf.D(new _.t.Set((null == (b = _.xh(a, Gx, 1)) ? void 0 : _.Xk(b, 6)) || []))
    };
    fN.prototype.I = function(a) {
        this.m(a)
    };
    fN.prototype.m = function(a) {
        this.l.fb(a);
        this.C.fb(a);
        this.o.D([]);
        this.ed.D([]);
        this.Ld.D([]);
        this.F.Z()
    };
    var gN = function(a, b) {
        Z.call(this, a, 891);
        var c = this;
        this.l = V(this);
        this.error = void 0;
        var d = V(this);
        this.o = X(this, d);
        b(function(e, f) {
            if (f) c.error = f, d.D([]);
            else try {
                if ("string" === typeof e) {
                    var g = JSON.parse(e || "[]");
                    Array.isArray(g) && d.D(g)
                }
            } catch (h) {} finally {
                d.Fb || (c.error = Error("malformed response"), d.D([]))
            }
        })
    };
    _.T(gN, Z);
    gN.prototype.j = function() {
        if (this.error) throw this.error;
        this.l.D(Td(Zx, this.o.value))
    };
    var hN = function(a, b) {
        Z.call(this, a, 1081);
        this.Lb = V(this);
        this.l = Y(this, b)
    };
    _.T(hN, Z);
    hN.prototype.j = function() {
        this.l.value ? this.Lb.D(this.l.value) : this.Lb.Z()
    };
    var iN = new _.t.Map([
            [1, 5],
            [2, 2],
            [3, 3]
        ]),
        jN = function(a, b, c, d, e, f, g, h, k) {
            Z.call(this, a, 1079);
            this.W = b;
            this.googletag = c;
            this.X = d;
            this.F = e;
            this.l = f;
            this.R = g;
            this.o = h;
            this.C = k;
            V(this)
        };
    _.T(jN, Z);
    jN.prototype.j = function() {
        var a = this,
            b = this.o.getAdUnitPath(),
            c = iN.get(_.vk(this.o, 2, 0));
        if (b && c) {
            var d, e = null != (d = this.X) ? d : this.l.j;
            b = new IK(this.context, this.W, b, c, !0, this.googletag.pubads(), this.googletag.display, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, e, this.l, this.F, this.R, !1, this.C);
            _.S(this, b);
            Gj(b)
        }
    };
    var xt = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1082);
        this.googletag = b;
        this.X = c;
        this.F = d;
        this.o = e;
        this.R = f;
        this.C = V(this);
        this.l = new hN(this.context, this.C);
        this.Lb = this.l.Lb;
        _.S(this, this.l);
        this.J = X(this, g)
    };
    _.T(xt, Z);
    xt.prototype.j = function() {
        if (_.H(uB)) {
            for (var a = [], b = _.w(this.J.value), c = b.next(); !c.done; c = b.next()) switch (c = c.value, sk(c, Yx)) {
                case 5:
                    a.push(c);
                    break;
                case 8:
                    var d = c
            }
            this.C.Fa(null == d ? void 0 : _.xh(d, Qx, 4));
            d = new xj;
            _.S(this, d);
            a = _.w(a);
            for (b = a.next(); !b.done; b = a.next()) b = b.value, c = void 0, N(d, new jN(this.context, document, this.googletag, null != (c = this.X) ? c : this.o.j, this.F, this.o, this.R, _.xh(b, Sx, ij(b, Yx, 5)), _.xh(b, Qx, 4)));
            N(d, this.l);
            Gj(d)
        } else this.Lb.Z()
    };
    var kN = function(a, b, c, d, e, f, g, h) {
        _.U.call(this);
        this.context = a;
        this.B = b;
        this.m = c;
        this.R = d;
        this.K = e;
        this.j = f;
        this.Za = g;
        this.l = h
    };
    _.T(kN, _.U);
    var lN = function(a, b, c, d) {
        var e = new xj;
        _.S(a, e);
        var f = a.context;
        var g = a.j;
        var h = new xj;
        g = new gN(f, g);
        N(h, g);
        var k = new fN(f, g.l);
        N(h, k);
        Gj(h);
        var l = k.l;
        var m = k.C;
        var n = k.o;
        f = k.ed;
        var p = k.Ld;
        g = k.F;
        k = k.cf;
        _.S(a, h);
        var r;
        h = new bL(a.context, document, Pm(), a.B, a.m, a.R, null != (r = window.location.hash) ? r : "");
        N(e, h);
        r = new xt(a.context, Pm(), null, a.B, a.m, a.R, p);
        N(e, r);
        h = new eN(a.context, n);
        N(e, h);
        b = new SK(a.context, window, m, b);
        N(e, b);
        n = a.context;
        p = a.Za;
        m = {
            Cb: new An,
            Hb: new An,
            Zb: new An,
            Yb: new An,
            zc: new An,
            uc: new An,
            Oe: new An,
            Pe: new An,
            hf: new An
        };
        var v = new xj;
        N(v, new mK(n, p, l, window, m));
        Gj(v);
        _.S(a, v);
        l = mp(a.context, a.j, b.l);
        p = l.Fc;
        v = l.qh;
        _.S(e, l.Ea);
        l = new LK(a.context, v);
        N(e, l);
        n = new MK(a.context, v);
        N(e, n);
        v = $m(a.context, a.R, a.K, window, p, v);
        p = v.ib;
        _.S(a, v.Ea);
        v = void 0;
        if (_.H(KB)) {
            var u = new jM(a.context, a.K, window, p);
            v = u.output;
            N(e, u)
        }
        u = a.context;
        if (_.H(UA) || om()) u = void 0;
        else {
            var x = {
                    bg: new An,
                    qb: new An
                },
                C = new xj;
            N(C, new $L(u, f, p, x));
            Gj(C);
            u = {
                Ue: x,
                Ea: C
            }
        }
        if (u) {
            var D = u.Ue;
            _.S(a, u.Ea)
        }
        d = _.H(Wq) ? Zq(a.context, window, d.ee, p) : void 0;
        x = a.context;
        C = a.l;
        u = new xj;
        c = new cM(x, C, c, p, g);
        N(u, c);
        Gj(u);
        _.S(a, u);
        Gj(e);
        return {
            Vd: m,
            Ue: D,
            qk: b.l,
            mj: h.output,
            Lb: r.Lb,
            ed: f,
            se: l.se,
            Mj: n.l,
            cf: k,
            xc: d,
            oh: v
        }
    };
    var mN = function() {
        IM.apply(this, arguments)
    };
    _.T(mN, IM);
    mN.prototype.l = function() {
        var a = this,
            b = this.m,
            c = b.mi;
        b = b.qe;
        var d = JM(this);
        if (null == c ? 0 : c.length)
            if (_.gw) {
                c = _.w(c);
                for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
            } else d.sandbox.add.apply(d.sandbox, _.Ie(c));
        b && (d.allow = b);
        KM(this, d);
        mh(this.context, 653, function() {
            var f;
            if (f = Lq(a.jb.vb)) {
                var g = f.toString().toLowerCase();
                f = -1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") || _.H(WB) ? f : Lq("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>")
            }
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            (La("Firefox") || La("FxiOS")) && g.open("text/html", "replace");
            g.write(_.Rv(f));
            var l, m, n;
            if (jv(null != (n = null == (l = d.contentWindow) ? void 0 : null == (m = l.location) ? void 0 : m.href) ? n : "", "#")) {
                var p, r;
                null == (p = d.contentWindow) || null == (r = p.history) || r.replaceState(null, "", "#" + Math.random())
            }
            g.close()
        }, !0);
        return d
    };
    mN.prototype.B = function() {
        return !0
    };
    var jt = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, u, x, C, D, F, B, J, R, O, W, ba) {
        Z.call(this, a, 680);
        this.slotId = b;
        this.K = c;
        this.P = d;
        this.xa = e;
        this.Sa = f;
        this.A = g;
        this.l = V(this);
        this.C = V(this);
        this.o = vF(this);
        this.J = X(this, h);
        this.Ia = X(this, k);
        xF(this, l);
        this.fa = X(this, m);
        this.F = X(this, n);
        this.aa = X(this, p);
        xF(this, F);
        this.M = X(this, r);
        this.O = Y(this, v);
        this.Oa = Y(this, u);
        this.V = X(this, x);
        this.ya = Y(this, C);
        this.hb = Y(this, D);
        xF(this, B);
        this.ra = X(this, J);
        xF(this, R);
        ba && xF(this, ba);
        this.ma = Y(this, O);
        W && (this.oa = Y(this, W))
    };
    _.T(jt, Z);
    jt.prototype.j = function() {
        var a = this.J.value;
        if (0 === a.kind && null == a.vb) throw new fE("invalid html");
        var b, c;
        a: {
            var d = this.context,
                e = {
                    W: document,
                    slotId: this.slotId,
                    K: this.K,
                    P: this.P,
                    xa: this.xa,
                    size: this.aa.value,
                    ri: this.fa.value,
                    Rg: this.F.value,
                    yf: this.M.value,
                    Gj: this.O.value,
                    mi: this.Oa.value,
                    isBackfill: this.V.value,
                    Yj: this.ya.value,
                    Td: this.hb.value,
                    qe: this.ra.value,
                    ll: null == (b = this.ma.value) ? void 0 : _.G(b, 14),
                    gf: null == (c = this.oa) ? void 0 : c.value,
                    Sa: this.Sa
                };b = this.Ia.value;c = a.kind;
            switch (c) {
                case 0:
                    a = new(b ? TL : mN)(d, a, e);
                    break a;
                case 2:
                    a = new LM(d, a, e);
                    break a;
                default:
                    _.Ua(c)
            }
            a = void 0
        }
        _.S(this, a);
        d = a.render();
        nN(this, this.A, d);
        this.A.top && this.A.top !== this.A && _.bk(this.A.top) && nN(this, this.A.top, d);
        this.o.notify();
        this.l.D(d);
        this.C.D(a.B())
    };
    var nN = function(a, b, c) {
        HJ(a, a.id, b, "message", function(d) {
            c.contentWindow === d.source && Sr(a.slotId, Gp, 824, d)
        })
    };
    var Rs = function(a, b, c, d, e) {
        Z.call(this, a, 720);
        this.format = b;
        this.na = c;
        this.output = V(this);
        this.l = Y(this, d);
        this.o = Y(this, e)
    };
    _.T(Rs, Z);
    Rs.prototype.j = function() {
        var a = this.o.value;
        if (null == a) this.output.Z();
        else {
            var b = Math.round(.3 * this.na),
                c;
            2 !== this.format && 3 !== this.format || null == (c = this.l.value) || !_.G(c, 12, !1) || 0 >= b || a <= b ? this.output.D(a) : this.output.D(b)
        }
    };
    var $s = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, a, 674);
        this.slotId = b;
        this.X = c;
        this.o = d;
        this.W = f;
        this.K = g;
        this.output = V(this);
        this.M = 2 === e || 3 === e;
        this.l = X(this, h);
        this.J = X(this, k);
        this.F = Y(this, l);
        this.C = Y(this, m);
        n && xF(this, n)
    };
    _.T($s, Z);
    $s.prototype.j = function() {
        var a = Mo(this.X, this.o),
            b = Zh(this.slotId, this.W) || In(this.l.value, wi(this.slotId), a);
        this.J.value && !a && (b.style.display = "inline-block");
        this.M ? JH(this.K, this.slotId, function() {
            return void _.Xy(b)
        }) : _.ap(this, function() {
            return void _.Xy(b)
        });
        a = oN(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.output.D(b)
    };
    var oN = function(a) {
        var b = a.l.value,
            c, d = null == (c = a.F.value) ? void 0 : c.height;
        if (b && !a.C.value && d) {
            var e;
            c = (null != (e = Lo(a.o, 23)) ? e : _.G(a.X, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else c = 0;
        return c
    };
    var Ps = function(a, b) {
        Z.call(this, a, 859);
        this.A = b;
        this.output = V(this)
    };
    _.T(Ps, Z);
    Ps.prototype.j = function() {
        this.output.D(!_.bk(this.A.top))
    };
    var ft = function(a, b, c) {
        Z.call(this, a, 840);
        this.format = b;
        this.W = c;
        this.output = V(this)
    };
    _.T(ft, Z);
    ft.prototype.j = function() {
        var a = [],
            b = this.W;
        b = void 0 === b ? document : b;
        var c;
        null != (c = b.featurePolicy) && (_.E = c.features(), _.y(_.E, "includes")).call(_.E, "attribution-reporting") && a.push("attribution-reporting");
        5 !== this.format && 4 !== this.format || !_.H(JA) || a.push("autoplay");
        a.length ? this.output.D(a.join(";")) : this.output.D("")
    };
    var qt = function(a, b, c, d, e, f) {
        f = void 0 === f ? Os : f;
        Z.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.W = d;
        this.xa = e;
        this.J = f;
        this.F = !1;
        this.l = null;
        this.C = this.o = -1;
        this.O = _.Xu(function() {
            Sr(g.xa, "impressionViewable", 715, new gL(g.slotId, "publisher_ads"))
        });
        this.V = _.Yu(function() {
            Sr(g.xa, "slotVisibilityChanged", 716, new hL(g.slotId, "publisher_ads", g.C))
        }, 200);
        this.M = X(this, c);
        var h = new En;
        yH(this.slotId).then(function() {
            return void h.notify()
        });
        xF(this, h)
    };
    _.T(qt, Z);
    qt.prototype.j = function() {
        var a = this,
            b = this.J(gh(this.context, this.id, function(c) {
                c = _.w(c);
                for (var d = c.next(); !d.done; d = c.next()) a.o = 100 * d.value.intersectionRatio, _.y(Number, "isFinite").call(Number, a.o) && pN(a)
            }));
        b && (b.observe(this.M.value), HJ(this, this.id, this.W, "visibilitychange", function() {
            pN(a)
        }), _.ap(this, function() {
            b.disconnect()
        }))
    };
    var pN = function(a) {
            var b = !LE(a.W);
            qN(a, 50 <= a.o && b);
            b = Math.floor(b ? a.o : 0);
            if (0 > b || 100 < b || b === a.C ? 0 : -1 !== a.C || 0 !== b) a.C = b, a.V()
        },
        qN = function(a, b) {
            a.F || (b ? null === a.l && (a.l = setTimeout(function() {
                LE(a.W) || (a.O(), a.F = !0);
                a.l = null
            }, 1E3)) : null !== a.l && (clearTimeout(a.l), a.l = null))
        };
    var dt = function(a, b, c, d, e, f) {
        Z.call(this, a, 719);
        this.X = b;
        this.o = c;
        this.output = V(this);
        this.l = X(this, d);
        this.C = X(this, e);
        this.F = Y(this, f)
    };
    _.T(dt, Z);
    dt.prototype.j = function() {
        var a = this.l.value.kind;
        switch (a) {
            case 0:
                if (this.l.value.vb)
                    if (this.C.value) {
                        a = this.F.value;
                        var b = new Tl;
                        a = nj(b, 3, a);
                        _.G(Zl([a, this.X.kc(), this.o.kc()]), 3) ? this.output.D(WG) : this.output.Z()
                    } else this.output.Z();
                else this.output.Z();
                break;
            case 2:
                this.output.Z();
                break;
            default:
                _.Ua(a)
        }
    };
    var rN = function(a, b, c, d, e, f) {
        Z.call(this, a, 1119);
        this.slotId = b;
        this.o = c;
        this.documentElement = d;
        this.K = e;
        this.l = f;
        this.output = tF(this)
    };
    _.T(rN, Z);
    rN.prototype.j = function() {
        var a = _.Me("INS");
        a.id = this.o;
        (_.E = [8, 9], _.y(_.E, "includes")).call(_.E, this.l) || _.Bi(a, {
            display: "none"
        });
        this.documentElement.appendChild(a);
        var b = function() {
            return void _.Xy(a)
        };
        (_.E = [2, 3], _.y(_.E, "includes")).call(_.E, this.l) ? JH(this.K, this.slotId, b) : _.ap(this, b);
        this.output.D(a)
    };
    var sN = function(a, b, c, d, e) {
        Z.call(this, a, 1120);
        this.F = b;
        this.o = c;
        this.Ec = d;
        this.l = e;
        this.output = tF(this);
        a = this.l;
        if (!_.na(a) || !_.na(a) || 1 !== a.nodeType || a.namespaceURI && "http://www.w3.org/1999/xhtml" !== a.namespaceURI) this.C = X(this, this.l)
    };
    _.T(sN, Z);
    sN.prototype.j = function() {
        var a, b, c = null != (b = null == (a = this.C) ? void 0 : a.value) ? b : this.l;
        if (!(_.E = [2, 3], _.y(_.E, "includes")).call(_.E, this.o)) {
            a = _.w(_.y(Array, "from").call(Array, c.childNodes));
            for (b = a.next(); !b.done; b = a.next()) b = b.value, 1 === b.nodeType && b.id !== this.F && _.Xy(b);
            this.Ec || ep(c, !0)
        }
        this.output.D(c)
    };
    var Ts = function(a, b, c, d, e, f, g, h, k) {
        xj.call(this);
        c ? (a = new sN(a, e, g, k, c), N(this, a), a = a.output) : 0 !== g && 1 !== g ? (a = new rN(a, b, d, f, h, g), N(this, a), a = a.output) : (b = new Pp(a, b, zH, function(l) {
            return l.detail
        }), N(this, b), a = new sN(a, e, g, k, b.output), N(this, a), a = a.output);
        this.j = {
            output: a
        }
    };
    _.T(Ts, xj);
    var tN = function(a, b) {
            var c = yi();
            this.context = a;
            this.K = b;
            this.j = c
        },
        uN = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, u, x) {
            var C = document,
                D = window;
            e || f || SH(a.K, d);
            var F = yt(a.context, b, a.j, c, d, e, f, g, h, k, l, C, m, n, p, r, v, function() {
                SH(a.K, d);
                RH(a.K, d, F)
            }, u, x);
            f || RH(a.K, d, F);
            _.ap(d, function() {
                SH(a.K, d)
            });
            D.top !== D && D.addEventListener("pagehide", function(B) {
                B.persisted || SH(a.K, d)
            });
            Gj(F)
        };
    var vN = function(a, b, c, d) {
        Z.call(this, a, 884);
        this.Da = b;
        this.Za = c;
        this.o = V(this);
        this.l = X(this, d)
    };
    _.T(vN, Z);
    vN.prototype.j = function() {
        TJ(this.Za, _.am(this.Da, "__gads", this.l.value));
        cm(20, this.context, this.Da, this.l.value);
        cm(2, this.context, this.Da, this.l.value);
        this.o.D(_.tf())
    };
    var At = 0,
        wN = new _.Nh(-9, -9);
    var Dt = new _.t.Set([function(a, b) {
        var c = a.ja.P.X;
        b.set("pvsid", {
            value: a.ia.context.pvsid
        }).set("correlator", {
            value: c.getCorrelator()
        })
    }, function(a, b) {
        a = a.Ei;
        var c = a.bd;
        "wbn" === a.Le && b.set("wbsu", {
            value: c
        })
    }, function(a, b) {
        var c = a.ja.P.X,
            d = a.rl;
        a = d.Uc;
        d = d.Tc;
        var e = _.G(c, 21);
        b = b.set("hxva", {
            value: e ? 1 : null
        }).set("cmsid", {
            value: e ? _.rj(c, 23) : null
        }).set("vid", {
            value: e ? _.rj(c, 22) : null
        }).set("pod", {
            value: d
        }).set("ppos", {
            value: a
        });
        a = b.set;
        c = Rw(c, 29);
        a.call(b, "scor", {
            value: null == c ? void 0 : c
        })
    }, function(a, b) {
        var c = a.ja,
            d = c.ba,
            e = c.P.T;
        c = a.Gk;
        var f = c.Rj,
            g = c.Nj;
        b.set("eid", {
            value: a.ia.Bf
        }).set("debug_experiment_id", {
            value: kE().split(",")
        }).set("expflags", {
            value: _.Jh(253) ? _.Df(YA) || null : null
        }).set("pied", {
            value: function() {
                var h = new CF,
                    k = !1,
                    l = !1;
                f && (k = !0, oj(h, 1, Qx, f));
                var m = d.map(function(p) {
                    var r = new AF,
                        v;
                    p = null == (v = e[p.getDomId()]) ? void 0 : Ah(v, Qx, 27);
                    if (null == p || !p.length) return r;
                    l = k = !0;
                    v = _.w(p);
                    for (p = v.next(); !p.done; p = v.next()) oj(r, 1, Qx, p.value);
                    return r
                });
                l && _.bl(h, 2, m);
                m = _.w(null != g ? g : []);
                for (var n = m.next(); !n.done; n = m.next()) oj(h, 1, Qx, n.value), k = !0;
                return k ? Ab(h.j(), 3) : null
            }()
        })
    }, function(a, b) {
        var c = a.ia,
            d = c.context;
        c = c.eb;
        b.set("output", {
            value: a.Ei.Le
        }).set("gdfp_req", {
            value: 1
        }).set("vrg", {
            value: d.rc ? String(d.rc) : d.ub
        }).set("ptt", {
            value: 17
        }).set("impl", {
            value: c ? "fifs" : "fif"
        })
    }, function(a, b) {
        var c = a.ia.U;
        a = Kt(a.ja.P.X) || new fG;
        var d = _.vk(a, 6, 2);
        b.set("rdp", {
            value: _.G(a, 1) ? "1" : null
        }).set("ltd", {
            value: _.G(a, 9) ? "1" : null
        }).set("gdpr_consent", {
            value: Zw(c, 2)
        }).set("gdpr", {
            value: null != Yl(c, 3) ? _.G(c, 3) ? "1" : "0" : null,
            options: {
                Ca: !0
            }
        }).set("addtl_consent", {
            value: Zw(c, 4)
        }).set("tcfe", {
            value: $w(c, 7)
        }).set("us_privacy", {
            value: Zw(c, 1)
        }).set("npa", {
            value: _.G(c, 6) || _.G(a, 8) ? 1 : null
        }).set("puo", {
            value: _.H(tB) && _.G(a, 13) ? 1 : null
        }).set("tfua", {
            value: 2 !== d ? d : null,
            options: {
                Ca: !0
            }
        }).set("tfcd", {
            value: null != no(a, 5) ? _.vk(a, 5, 0) : null,
            options: {
                Ca: !0
            }
        }).set("trt", {
            value: null != no(a, 10) ? _.vk(a, 10, 0) : null,
            options: {
                Ca: !0
            }
        }).set("tad", {
            value: null != Yl(c, 8) ? _.G(c, 8) ? "1" : "0" : null,
            options: {
                Ca: !0
            }
        }).set("gpp", {
            value: Zw(c, 11)
        }).set("gpp_sid", {
            value: Dd(c, 10, Ic).join(",") || void 0
        })
    }, function(a, b) {
        var c = a.ja,
            d = c.P,
            e = c.ba,
            f = c.Kf,
            g = a.ia.A;
        a = {
            za: "~"
        };
        var h = e.map(function(l) {
                return d.T[l.getDomId()]
            }),
            k = [];
        c = e.map(function(l) {
            return l.getAdUnitPath().replace(/,/g, ":").split("/").map(function(m) {
                if (!m) return "";
                var n = _.y(k, "findIndex").call(k, function(p) {
                    return p === m
                });
                return 0 <= n ? n : k.push(m) - 1
            }).join("/")
        });
        b.set("iu_parts", {
            value: k
        }).set("enc_prev_ius", {
            value: c
        }).set("prev_iu_szs", {
            value: h.map(function(l) {
                return Gh(l)
            })
        }).set("fluid", {
            value: function() {
                var l = !1,
                    m = h.map(function(n) {
                        n = (_.E = Fh(n), _.y(_.E, "includes")).call(_.E, "fluid");
                        l || (l = n);
                        return n ? "height" : "0"
                    });
                return l ? m : null
            }()
        }).set("ifi", {
            value: function() {
                var l = Si(g);
                if (!f) {
                    l += 1;
                    var m = g,
                        n = e.length;
                    n = void 0 === n ? 1 : n;
                    m = Iz(se(m)) || m;
                    m.google_unique_id = (m.google_unique_id || 0) + n
                }
                return l
            }()
        }).set("didk", {
            value: _.H(zB) ? Go(e, function(l) {
                return _.zf(l.getDomId())
            }, a) : null,
            options: _.y(Object, "assign").call(Object, {}, a, {
                Mb: !0
            })
        })
    }, function(a, b) {
        var c = a.ja;
        a = c.ba;
        c = c.P;
        var d = c.X,
            e = c.T;
        b.set("sfv", {
            value: mJ ? mJ : mJ = Ll()
        }).set("fsfs", {
            value: Go(a, function(f) {
                f = e[f.getDomId()];
                var g;
                return Number(null != (g = null == f ? void 0 : Lo(f, 12)) ? g : Yl(d, 13))
            }, {
                hd: 0
            }),
            options: {
                za: ",",
                cd: 0,
                Mb: !0
            }
        }).set("fsbs", {
            value: Go(a, function(f) {
                f = e[f.getDomId()].kc();
                var g = d.kc(),
                    h;
                return (null != (h = null == f ? void 0 : Lo(f, 3)) ? h : null == g ? 0 : _.G(g, 3)) ? 1 : 0
            }, {
                hd: 0
            }),
            options: {
                cd: 0,
                Mb: !0
            }
        })
    }, function(a, b) {
        var c = a.ia.K;
        a = a.ja;
        var d = a.Kf;
        b.set("rcs", {
            value: Go(a.ba, function(e) {
                if (!d) {
                    var f = c.j.get(e);
                    f && f.hi++
                }
                return PH(c, e)
            }, {
                hd: 0
            }),
            options: {
                cd: 0,
                Mb: !0
            }
        })
    }, function(a, b) {
        var c = a.ja;
        a = a.ia.eb;
        c = c.P.T[c.ba[0].getDomId()];
        b.set("click", {
            value: !a && c.getClickUrl() ? _.rj(c, 7) : null
        })
    }, function(a, b, c) {
        var d = a.ja,
            e = d.ba,
            f = d.P.T;
        a = a.ia;
        var g = a.U,
            h = a.A;
        c = void 0 === c ? function(n, p) {
            return lf(n, p)
        } : c;
        a = e.map(function(n) {
            return f[n.getDomId()]
        });
        var k, l, m;
        b.set("ists", {
            value: Do(a, function(n) {
                var p;
                if (p = 0 !== Ss(n)) n = Ss(n), p = !(8 === n || 9 === n);
                return p
            }) || null
        }).set("fas", {
            value: Go(a, function(n) {
                return Uo(Ss(n))
            }, {
                hd: 0
            }),
            options: {
                cd: 0,
                Mb: !0
            }
        }).set("itsi", {
            value: e.some(function(n) {
                var p;
                return !FK(n) && 5 === (null == (p = f[n.getDomId()]) ? void 0 : Ss(p))
            }) ? function() {
                var n = c(g, h);
                if (!n) return 1;
                var p;
                n = Math.max.apply(Math, _.Ie(null != (p = _.So(n, 604800)) ? p : []));
                return isFinite(n) ? Math.floor(Math.max((Date.now() - n) / 6E4, 1)) : null
            }() : null
        }).set("fsapi", {
            value: Do(a, function(n) {
                return 5 === Ss(n) && _.H(_.gB)
            }) || null
        }).set("ifs", {
            value: null != (m = null == (k = (_.E = _.y(Object, "values").call(Object, f), _.y(_.E, "find")).call(_.E, function(n) {
                return Kn(n, BJ, 29)
            })) ? void 0 : null == (l = _.xh(k, BJ, 29)) ? void 0 : pk(l)) ? m : null
        })
    }, function(a, b) {
        a = a.ja;
        var c = a.P.T;
        a = a.ba.map(function(d) {
            return c[d.getDomId()]
        });
        b.set("rbvs", {
            value: Do(a, function(d) {
                return 4 === Ss(d)
            }) || null
        })
    }, function(a, b) {
        var c = a.ja,
            d = a.ia;
        a = d.isSecureContext;
        d = d.A;
        var e = b.set;
        var f = c.ba;
        var g = c.P;
        c = c.Sb;
        var h = g.X,
            k = g.T,
            l = new Mi;
        l.set(0, 1 !== c);
        k = k[f[0].getDomId()];
        l.set(1, !!_.G(k, 17));
        l.set(2, wp(f, g));
        l.set(3, _.G(h, 27) || !1);
        l.set(4, 3 === c);
        f = Oi(l);
        e.call(b, "eri", {
            value: f
        }).set("gct", {
            value: op("google_preview", d)
        }).set("sc", {
            value: a ? 1 : 0,
            options: {
                Ca: !0
            }
        })
    }, function(a, b) {
        var c = a.ia,
            d = c.A,
            e = c.U;
        c = c.Da;
        var f = tp(a.ja.P.X.La()),
            g = _.am(c, "__gads", e);
        a = "1" === _.am(c, "__gpi_opt_out", e) ? "1" : null;
        b = b.set("cookie", {
            value: g,
            options: {
                Ca: !0
            }
        }).set("cookie_enabled", {
            value: !g && sE(c, e) ? "1" : null
        });
        g = d.document;
        var h = g.domain;
        d = b.set.call(b, "cdm", {
            value: (f || Lh(d)) === g.URL ? "" : h
        });
        f = d.set;
        e = (e = _.am(c, "__gpi", e)) && !_.y(e, "includes").call(e, "&") ? e : null;
        f.call(d, "gpic", {
            value: e
        }).set("pdopt", {
            value: a
        })
    }, function(a, b) {
        a = a.ia.A;
        b.set("arp", {
            value: xn(a) ? 1 : null
        }).set("abxe", {
            value: _.bk(a.top) || pz(a.IntersectionObserver) ? 1 : null
        })
    }, function(a, b) {
        var c = a.ia.A;
        a = tp(a.ja.P.X.La());
        b.set("dt", {
            value: (new Date).getTime()
        });
        if (!a) {
            try {
                var d = Math.round(Date.parse(c.document.lastModified) / 1E3) || null
            } catch (e) {
                d = null
            }
            b.set("lmt", {
                value: d
            })
        }
    }, function(a, b) {
        var c = a.ja,
            d = c.P;
        c = c.ba;
        var e = a.ia;
        a = e.A;
        var f = e.eb;
        e = Eh(!0, a);
        for (var g = d.X, h = a.document, k = d.T, l = [], m = [], n = _.w(c), p = n.next(); !p.done; p = n.next()) {
            p = p.value;
            var r = k[p.getDomId()];
            p = ui(p, r, h, Mo(g, r));
            r = void 0;
            var v = f ? null != (r = p) ? r : wN : p;
            v && (l.push(Math.round(v.x)), m.push(Math.round(v.y)))
        }
        e && (d.Vc = e);
        f = Kh(a) ? null : Eh(!1, a);
        try {
            var u = a.top;
            var x = zt(u.document, u)
        } catch (C) {
            x = new _.Nh(-12245933, -12245933)
        }
        b.set("adxs", {
            value: l,
            options: {
                Ca: !0
            }
        }).set("adys", {
            value: m,
            options: {
                Ca: !0
            }
        }).set("biw", {
            value: e ? e.width : null
        }).set("bih", {
            value: e ? e.height : null
        }).set("isw", {
            value: e ? null == f ? void 0 : f.width : null
        }).set("ish", {
            value: e ? null == f ? void 0 : f.height : null
        }).set("scr_x", {
            value: Math.round(x.x),
            options: {
                Ca: !0
            }
        }).set("scr_y", {
            value: Math.round(x.y),
            options: {
                Ca: !0
            }
        }).set("btvi", {
            value: Bt(c, a, d),
            options: {
                Ca: !0,
                za: "|"
            }
        })
    }, function(a, b) {
        var c = a.ia.K;
        b.set("ucis", {
            value: a.ja.ba.map(function(d) {
                d = c.j.get(d);
                null != d.Td || (d.Td = window === window.top ? (++c.L).toString(36) : Jy());
                return d.Td
            }),
            options: {
                za: "|"
            }
        }).set("oid", {
            value: 2
        })
    }, function(a, b) {
        a = a.ja;
        var c = a.ba,
            d = a.P,
            e = d.T;
        a = new _.t.Map;
        d = _.w(d.X.La());
        for (var f = d.next(); !f.done; f = d.next()) {
            var g = f.value;
            a.set(_.M(g, 1), [_.Xk(g, 2)[0]])
        }
        for (d = 0; d < c.length; d++)
            if (g = e[c[d].getDomId()])
                for (g = _.w(g.La()), f = g.next(); !f.done; f = g.next()) {
                    var h = f.value;
                    f = _.M(h, 1);
                    var k = a.get(f) || [];
                    h = _.Xk(h, 2)[0];
                    1 === c.length ? k[0] = h : h !== k[0] && (k[d + 1] = h);
                    a.set(f, k)
                }
        c = [];
        e = _.w(_.y(a, "keys").call(a));
        for (d = e.next(); !d.done; d = e.next()) g = d.value, d = ll()[g], g = a.get(g), d && g && (1 < g.length ? (g = g.map(function(l) {
            return encodeURIComponent(l || "")
        }).join(), c.push(d + "," + g)) : 1 === g.length && "url" !== d && b.set(d, {
            value: g[0]
        }));
        c.length && b.set("sps", {
            value: c,
            options: {
                za: "|"
            }
        })
    }, function(a, b) {
        a = a.ia.A;
        var c, d, e, f, g, h, k;
        var l = a;
        l = void 0 === l ? Ey : l;
        try {
            var m = l.history.length
        } catch (F) {
            m = 0
        }
        b = b.set("u_his", {
            value: m
        }).set("u_h", {
            value: null == (c = a.screen) ? void 0 : c.height
        }).set("u_w", {
            value: null == (d = a.screen) ? void 0 : d.width
        }).set("u_ah", {
            value: null == (e = a.screen) ? void 0 : e.availHeight
        }).set("u_aw", {
            value: null == (f = a.screen) ? void 0 : f.availWidth
        }).set("u_cd", {
            value: null == (g = a.screen) ? void 0 : g.colorDepth
        });
        c = b.set;
        d = a;
        d = void 0 === d ? _.q : d;
        d = d.devicePixelRatio;
        c = c.call(b, "u_sd", {
            value: "number" === typeof d ? +d.toFixed(3) : null
        }).set("u_tz", {
            value: -(new Date).getTimezoneOffset()
        }).set("dmc", {
            value: null != (k = null == (h = a.navigator) ? void 0 : h.deviceMemory) ? k : null
        });
        h = c.set;
        k = a;
        k = void 0 === k ? _.q : k;
        d = new Mi;
        "SVGElement" in k && "createElementNS" in k.document && d.set(0);
        e = oz();
        e["allow-top-navigation-by-user-activation"] && d.set(1);
        e["allow-popups-to-escape-sandbox"] && d.set(2);
        k.crypto && k.crypto.subtle && d.set(3);
        "TextDecoder" in k && "TextEncoder" in k && d.set(4);
        k = Oi(d);
        h = h.call(c, "bc", {
            value: k
        });
        k = h.set;
        a: {
            try {
                var n, p, r = null == (n = a.performance) ? void 0 : null == (p = n.getEntriesByType("navigation")) ? void 0 : p[0];
                if (null == r ? 0 : r.type) {
                    var v;
                    var u = null != (v = EE.get(r.type)) ? v : null;
                    break a
                }
            } catch (F) {}
            var x, C, D;u = null != (D = FE.get(null == (x = a.performance) ? void 0 : null == (C = x.navigation) ? void 0 : C.type)) ? D : null
        }
        u = k.call(h, "nvt", {
            value: u
        });
        n = u.set;
        p = _.Cf(OA);
        p = 0 === p ? null : Cz(a, 2 === p);
        u = n.call(u, "bz", {
            value: p
        });
        n = u.set;
        _.H(BB) ? a = Na() && wk(a) ? a.document.documentElement.lang : void 0 : a = null;
        n.call(u, "tl", {
            value: a
        })
    }, function(a, b) {
        (a = _.Jh(251)) && b.set("uach", {
            value: Br(a, 3)
        })
    }, function(a, b) {
        a = a.ia;
        if (!a.Ab) {
            var c;
            if (a = null == (c = a.A.navigator) ? void 0 : c.userActivation) {
                c = 0;
                if (null == a ? 0 : a.hasBeenActive) c |= 1;
                if (null == a ? 0 : a.isActive) c |= 2
            } else c = void 0;
            c && b.set("uas", {
                value: c
            })
        }
    }, function(a, b) {
        var c = a.ia,
            d = c.A,
            e = c.K;
        c = c.eb;
        a = a.ja;
        var f = a.ba;
        a = a.P;
        var g = a.X,
            h = a.T;
        a = pp("google_preview", d);
        var k = d.document,
            l = a ? up(k.URL) : k.URL;
        k = a ? up(k.referrer) : k.referrer;
        a = !1;
        if (c) c = tp(g.La());
        else {
            var m;
            c = null != (m = tp(h[f[0].getDomId()].La())) ? m : tp(g.La())
        }
        if (null != c) {
            var n = l;
            Kh(d) || (k = "", a = !0)
        } else c = l;
        m = vp(d);
        b.set("nhd", {
            value: m || null
        }).set("url", {
            value: c
        }).set("loc", {
            value: null !== n && n !== c ? n : null
        }).set("ref", {
            value: k
        });
        if (m) {
            n = b.set;
            var p, r;
            m = _.bk(d.top) && (null == (p = d.top) ? void 0 : null == (r = p.location) ? void 0 : r.href);
            var v;
            p = null == (v = d.location) ? void 0 : v.ancestorOrigins;
            d = Ak(d) || "";
            v = (null == p ? void 0 : p[p.length - 1]) || "";
            d = (d = m || d || v) ? a ? dz(d.match(_.cz)[3] || null) : d : null;
            n.call(b, "top", {
                value: d
            }).set("etu", {
                value: e.ie
            })
        }
    }, function(a, b) {
        a = a.ia.context.pvsid;
        b.set("rumc", {
            value: _.H(VB) || _.qf(ih).j ? a : null
        }).set("rume", {
            value: _.H(UB) ? 1 : null
        })
    }, function(a, b) {
        b.set("vis", {
            value: _.dq(a.ia.A.document)
        })
    }, function(a, b) {
        var c = a.ja,
            d = c.ba;
        c = c.P;
        a = a.ia.A;
        var e = Mn(d, c.T, c.X),
            f = Pn(d, e, a);
        c = f.tk;
        f = f.Vk;
        var g = Sn(d, e, a),
            h = g.Ij;
        g = g.sk;
        null != aK || (aK = Ck(a));
        var k = !1;
        d = d.map(function(m) {
            var n;
            m = null != (n = e.get(m)) ? n : 0;
            if (0 === m) return null;
            k = !0;
            return 2 === m ? "1" : "0"
        });
        var l;
        b.set("aee", {
            value: k ? d : null,
            options: {
                za: "|"
            }
        }).set("psz", {
            value: c,
            options: {
                za: "|"
            }
        }).set("msz", {
            value: f,
            options: {
                za: "|"
            }
        }).set("fws", {
            value: h,
            options: {
                Ca: !0
            }
        }).set("ohw", {
            value: g,
            options: {
                Ca: !0
            }
        }).set("ea", {
            value: aK ? null : "0",
            options: {
                Ca: !0
            }
        }).set("efat", {
            value: "#flexibleAdSlotTest" === (null == (l = a.location) ? void 0 : l.hash) ? "1" : null
        })
    }, function(a, b) {
        b.set("psts", {
            value: OH(a.ia.K, a.ja.ba)
        })
    }, function(a, b) {
        var c = a.ia;
        a = c.U;
        c = c.A;
        var d;
        var e = c.document.domain,
            f = null != (d = _.G(a, 5) && mf(c) ? c.document.cookie : null) ? d : "",
            g = c.history.length,
            h = c.screen,
            k = c.document.referrer;
        if (se()) var l = window.gaGlobal || {};
        else {
            var m = Math.round((new Date).getTime() / 1E3),
                n = c.google_analytics_domain_name;
            e = "undefined" == typeof n ? UC("auto", e) : UC(n, e);
            var p = -1 < f.indexOf("__utma=" + e + "."),
                r = -1 < f.indexOf("__utmb=" + e);
            (d = (Iz() || window).gaGlobal) || (d = {}, (Iz() || window).gaGlobal = d);
            var v = !1;
            if (p) {
                var u = f.split("__utma=" + e + ".")[1].split(";")[0].split(".");
                r ? d.sid = u[3] : d.sid || (d.sid = m + "");
                d.vid = u[0] + "." + u[1];
                d.from_cookie = !0
            } else {
                d.sid || (d.sid = m + "");
                if (!d.vid) {
                    v = !0;
                    r = Math.round(2147483647 * Math.random());
                    p = SC.appName;
                    var x = SC.version,
                        C = SC.language ? SC.language : SC.browserLanguage,
                        D = SC.platform,
                        F = SC.userAgent;
                    try {
                        u = SC.javaEnabled()
                    } catch (B) {
                        u = !1
                    }
                    u = [p, x, C, D, F, u ? 1 : 0].join("");
                    h ? u += h.width + "x" + h.height + h.colorDepth : _.q.java && _.q.java.awt && (h = _.q.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), u += h.screen.width + "x" + h.screen.height);
                    u = u + f + (k || "");
                    for (k = u.length; 0 < g;) u += g-- ^ k++;
                    d.vid = (r ^ TC(u) & 2147483647) + "." + m
                }
                d.from_cookie || (d.from_cookie = !1)
            }
            if (!d.cid) {
                b: for (m = 999, n && (n = 0 == n.indexOf(".") ? n.substr(1) : n, m = n.split(".").length), n = 999, f = f.split(";"), u = 0; u < f.length; u++)
                    if (k = VC.exec(f[u]) || WC.exec(f[u]) || XC.exec(f[u])) {
                        h = k[1] || 0;
                        if (h == m) {
                            l = k[2];
                            break b
                        }
                        h < n && (n = h, l = k[2])
                    }v && l && -1 != l.search(/^\d+\.\d+$/) ? (d.vid = l, d.from_cookie = !0) : l != d.vid && (d.cid = l)
            }
            d.dh = e;
            d.hid || (d.hid = Math.round(2147483647 * Math.random()));
            l = d
        }
        e = l.sid;
        d = l.hid;
        v = l.from_cookie;
        f = l.cid;
        v && !_.G(a, 5) || b.set("ga_vid", {
            value: l.vid
        }).set("ga_sid", {
            value: e
        }).set("ga_hid", {
            value: d
        }).set("ga_fc", {
            value: v
        }).set("ga_cid", {
            value: f
        }).set("ga_wpids", {
            value: c.google_analytics_uacct
        })
    }, function(a, b) {
        var c = a.ia.A,
            d = a.kl;
        a = d.og;
        d = d.re;
        if (!_.H(YB)) {
            (_.H(Vq) ? vf(c.isSecureContext, c.navigator, c.document) : "runAdAuction" in c.navigator && "joinAdInterestGroup" in c.navigator && uf("run-ad-auction", c.document)) && b.set("td", {
                value: 1
            });
            if (a) switch (a.kind) {
                case 0:
                    b.set("eig", {
                        value: a.signal
                    });
                    break;
                case 1:
                    b.set("eigir", {
                        value: a.reason,
                        options: {
                            Ca: !0
                        }
                    });
                    break;
                default:
                    _.Ua(a)
            }
            void 0 !== d && b.set("egid", {
                value: d,
                options: {
                    Ca: !0
                }
            })
        }
    }, function(a, b) {
        var c = a.ia.A,
            d = a.al;
        a = d.dl;
        d = d.bl;
        if (_.H(Vq) ? wf(c.isSecureContext, c.document) : uf("browsing-topics", c.document)) b.set("topics", {
            value: a instanceof Uint8Array ? Ab(a, 3) : a
        }), !a || a instanceof Uint8Array || b.set("tps", {
            value: a
        }), d && b.set("htps", {
            value: d
        })
    }, function(a, b) {
        var c = a.ia,
            d = c.A,
            e = c.U,
            f = a.ja.ba,
            g = a.Qk;
        a = g.Ne;
        c = g.Aj;
        var h = g.nk;
        if (!_.H(VA)) {
            g = b.set;
            d = lf(e, d);
            f = Tg(f[0].getAdUnitPath());
            e = _.H(wB);
            e = void 0 === e ? !1 : e;
            var k = new ky;
            e ? (qj(k, null != c ? c : [], a, f), vj(k, d, f, h, e)) : (vj(k, d, f, h, e), qj(k, null != c ? c : [], a, f));
            Ah(k, pj, 2).length ? (ej(50, ""), a = Ab(k.j(), 3)) : a = null;
            g.call(b, "a3p", {
                value: a
            })
        }
    }, function(a, b) {
        var c = a.gb.Wd,
            d = a.ja.ba;
        a = {
            za: "~"
        };
        var e = function() {
            return c ? d.map(function(f) {
                return c.get(f)
            }) : []
        }();
        b.set("cbidsp", {
            value: Go(e, function(f) {
                return Ab(f.j(), 3)
            }, a),
            options: _.y(Object, "assign").call(Object, {}, a, {
                Mb: !0
            })
        })
    }, function(a, b) {
        a = a.ja.P.X;
        Kn(a.ve(), Bs, 1) && (a = Cr(a.ve(), Bs, 1), b.set("cmrv", {
            value: 1
        }).set("cmrq", {
            value: _.M(a, 1)
        }).set("cmrc", {
            value: _.Xk(a, 2),
            options: {
                za: ">"
            }
        }).set("cmrids", {
            value: _.Xk(a, 3),
            options: {
                za: "!"
            }
        }).set("cmrf", {
            value: _.M(a, 4)
        }))
    }, function(a, b) {
        var c = [];
        a = _.w(Ah(Cr(a.ja.P.X.ve(), Ds, 2), Up, 1));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, _.Xk(d, 2).length && c.push(_.vk(d, 1, 0) + 2 + "=" + _.Xk(d, 2).join("|"));
        b.set("pps", {
            value: c,
            options: {
                za: "~"
            }
        })
    }, function(a, b) {
        b.set("scar", {
            value: a.wk.Qj
        })
    }, function(a, b) {
        a = a.ia.A;
        a = _.H(Vq) ? !(!a.isSecureContext || !uf("attribution-reporting", a.document)) : uf("attribution-reporting", a.document);
        !_.H(TB) && a && b.set("nt", {
            value: 1
        })
    }, function(a, b) {
        if (a = a.Ek.Dk) a = Br(pk(a), 3), b.set("psd", {
            value: a
        })
    }, function(a, b) {
        a = _.zg(a.ia.A);
        var c = xp;
        0 < a && c >= a && b.set("dlt", {
            value: a
        }).set("idt", {
            value: c - a
        })
    }, function(a, b) {
        a = a.ja.P.X;
        b.set("ppid", {
            value: null != _.rj(a, 16) ? _.M(a, 16) : null,
            options: {
                Ca: !0
            }
        })
    }, function(a, b) {
        var c = b.set;
        (a = _.rj(a.ja.P.X, 8)) ? (50 < a.length && (a = a.substring(0, 50)), a = "a " + Br('role:1 producer:12 loc:"' + a + '"')) : a = "";
        c.call(b, "uule", {
            value: a
        })
    }, function(a, b) {
        a = a.ja;
        var c = a.P.X;
        b.set("prev_scp", {
            value: Sq(a.ba, a.P),
            options: {
                Mb: !0,
                za: "|"
            }
        }).set("cust_params", {
            value: Uq(c),
            options: {
                za: "&"
            }
        })
    }, function(a, b) {
        var c = a.ja,
            d = c.P;
        a = a.ia;
        var e = a.K,
            f = a.eb;
        b.set("adks", {
            value: c.ba.map(function(g) {
                if (f) {
                    var h = d.T[g.getDomId()];
                    h = un(h);
                    if (g = e.j.get(g)) g.Wc = h;
                    return h
                }
                h = d.X;
                var k = d.T[g.getDomId()],
                    l;
                if (!(l = st(e, g))) {
                    h = un(k, _.G(h, 6) || _.G(k, 17) ? null : oi(g));
                    if (g = e.j.get(g)) g.Wc = h;
                    l = h
                }
                return l
            })
        })
    }, function(a, b) {
        var c = b.set;
        a = a.ia.A;
        var d = Bz(a);
        var e = Bk(a, a.google_ad_width, a.google_ad_height);
        var f = d.location.href;
        if (d === d.top) f = !0;
        else {
            var g = !1,
                h = d.document;
            h && h.referrer && (f = h.referrer, d.parent === d.top && (g = !0));
            (d = d.location.ancestorOrigins) && (d = d[d.length - 1]) && -1 === f.indexOf(d) && (g = !1);
            f = g
        }
        g = a.top == a ? 0 : _.bk(a.top) ? 1 : 2;
        d = 4;
        e || 1 != g ? e || 2 != g ? e && 1 == g ? d = 7 : e && 2 == g && (d = 8) : d = 6 : d = 5;
        f && (d |= 16);
        e = "" + d;
        if (a != a.top)
            for (; a && a != a.top && _.bk(a) && !a.sf_ && !a.$sf && !a.inGptIF && !a.inDapIF; a = a.parent);
        c.call(b, "frm", {
            value: e || null
        })
    }, function(a, b) {
        b.set("ppt", {
            value: Dd(a.ja.P.X, 35, Ac),
            options: {
                za: "~"
            }
        })
    }, function(a, b) {
        a = a.ia.A;
        try {
            var c, d, e = null == (c = a.external) ? void 0 : null == (d = c.getHostEnvironmentValue) ? void 0 : d.call(c, "os-mode");
            if (e) {
                var f = Number(JSON.parse(e)["os-mode"]);
                0 > f || b.set("wsm", {
                    value: f + 1
                })
            }
        } catch (g) {}
    }, function(a, b) {
        a = a.ja;
        var c = a.ba;
        a = a.P.T;
        if (_.H(wt)) {
            var d = [],
                e = !1;
            c = _.w(c);
            for (var f = c.next(); !f.done; f = c.next()) {
                var g = void 0;
                (null == (g = a[f.value.getDomId()]) ? 0 : _.G(g, 30)) ? (d.push("1"), e = !0) : d.push("")
            }
            b.set("is_cau", {
                value: e ? d : null
            })
        }
    }, function(a, b) {
        var c = a.ja,
            d = c.P.T;
        a = a.ia.A;
        var e = [],
            f = !1;
        c = _.w(c.ba);
        for (var g = c.next(); !g.done; g = c.next()) g = Ss(d[g.value.getDomId()]), (_.E = [8, 9], _.y(_.E, "includes")).call(_.E, g) ? (f = 9 === g ? "right" : "left", e.push(_.Qg(a).sideRailPlasParam.get(f)), f = !0) : e.push("");
        f && b.set("plas", {
            value: e,
            options: {
                za: "|"
            }
        })
    }]);
    var xN = function(a, b, c) {
        Z.call(this, a, 798);
        this.output = V(this);
        this.l = Y(this, b);
        this.o = X(this, c)
    };
    _.T(xN, Z);
    xN.prototype.j = function() {
        var a = this,
            b = new _.t.Map;
        if (this.l.value) {
            var c = this.l.value,
                d = c.ia.eb,
                e = c.gb.Wd;
            c = _.w(c.ja.ba);
            for (var f = c.next(); !f.done; f = c.next()) {
                f = f.value;
                var g = void 0,
                    h = null == (g = e) ? void 0 : g.get(f);
                b.set(f, d ? yN(this, f, h) : function() {
                    return a.o.value
                })
            }
        }
        this.output.D(b)
    };
    var yN = function(a, b, c) {
        return pi(function() {
            var d = _.y(Object, "assign").call(Object, {}, a.l.value);
            d.ja.Kf = !0;
            d.ja.ba = [b];
            c && (d.gb.Wd = new _.t.Map, d.gb.Wd.set(b, c));
            return np(Jt(d)).url
        })
    };
    var zN = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 810);
        this.o = b;
        this.eb = c;
        this.P = d;
        this.R = e;
        this.A = f;
        this.U = g;
        this.l = V(this)
    };
    _.T(zN, Z);
    zN.prototype.j = function() {
        var a = this,
            b = this.o;
        !this.eb && 1 < this.o.length && (b = [b[0]]);
        b = b.filter(function(c) {
            if (c.H) return !1;
            var d = a.P.T[c.getDomId()],
                e;
            if (e = !(Yo(Ss(d)) && (_.E = Ef(oB), _.y(_.E, "includes")).call(_.E, String(Ss(d))))) e = a.R, fg(a.A) && 4 === Ss(d) ? (Q(e, CI("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath()))), e = !0) : e = !1, e = !e;
            if (e) {
                e = a.R;
                var f = a.A,
                    g = a.U;
                d = Ss(d);
                5 !== d ? c = !1 : (f = To(f, !FK(c), g), (f &= -134217729) && Oo(e, f, d, c.getAdUnitPath()), c = !!f);
                e = !c
            }
            return e
        });
        30 < b.length && (Q(this.R, BI("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        this.l.D(b)
    };
    var AN = function(a, b, c) {
        Z.call(this, a, 919);
        this.l = b;
        this.U = c;
        this.output = V(this)
    };
    _.T(AN, Z);
    AN.prototype.j = function() {
        var a, b = !(null == (a = this.l) ? 0 : _.G(a, 9)) && !!_.G(this.U, 5);
        this.output.D(b)
    };
    var BN = function(a, b, c, d, e, f) {
        Z.call(this, a, 928);
        this.requestId = b;
        this.C = f;
        this.output = vF(this);
        this.o = X(this, c);
        e && (this.l = X(this, e));
        xF(this, d)
    };
    _.T(BN, Z);
    var CN = function(a) {
        return a.l ? a.C.split(",").some(function(b) {
            var c;
            return null == (c = a.l) ? void 0 : c.value.has(b)
        }) : !1
    };
    BN.prototype.j = function() {
        var a = this.context,
            b = this.requestId,
            c = this.o.value.length,
            d = CN(this);
        if (a.Qc) {
            var e = a.Tb;
            a = Zg(a);
            var f = new yA;
            b = _.Vg(f, 2, b);
            c = _.ch(b, 1, c);
            d = _.bh(c, 3, d);
            d = _.dh(a, 7, eh, d);
            Ke(e, d)
        }
        this.output.notify()
    };
    var DN = function(a, b, c, d) {
        Z.call(this, a, 867);
        this.xa = b;
        this.P = c;
        this.output = vF(this);
        this.l = X(this, d)
    };
    _.T(DN, Z);
    DN.prototype.j = function() {
        for (var a = _.w(this.l.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.w(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = zh(this.P.T[b.getDomId()], 20);
            Sr(b, BH, 808, {
                oj: c,
                Mk: d
            });
            Sr(this.xa, "slotRequested", 705, new kL(b, "publisher_ads"))
        }
        this.output.notify()
    };
    var EN = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, u, x, C, D, F, B, J, R, O, W, ba, ha, la, Da, ya, Oa, jb) {
        Z.call(this, a, 785, _.Cf(AB));
        this.eb = b;
        this.K = c;
        this.Da = d;
        this.P = e;
        this.Le = f;
        this.Sb = g;
        this.Uc = h;
        this.Tc = k;
        this.Bf = l;
        this.bd = m;
        this.timer = n;
        this.U = p;
        this.isSecureContext = r;
        this.Ab = v;
        this.A = u;
        this.l = V(this);
        this.o = V(this);
        this.O = V(this);
        xF(this, R);
        this.ra = wF(this, x);
        this.F = wF(this, C);
        this.J = X(this, D);
        B && (this.C = _.H(EB) ? new nF(B.Sc) : wF(this, B.Sc), B.Rd && (this.hb = Y(this, B.Rd)));
        J && (this.M = _.H(EB) ? new nF(J.Gb) : wF(this, J.Gb));
        xF(this, R);
        O && (this.Ia = X(this, O));
        W && (this.V = new nF(W));
        ba && (this.ya = Y(this, ba));
        ha && (this.fa = X(this, ha));
        la && xF(this, la);
        Da && (this.oa = X(this, Da));
        F && (this.aa = Y(this, F));
        ya && (this.Oa = Y(this, ya.lg));
        Oa && (this.ec = X(this, Oa));
        jb && (this.ma = Y(this, jb))
    };
    _.T(EN, Z);
    EN.prototype.j = function() {
        if (this.J.value.length) {
            var a = null;
            if (this.C) {
                var b = this.C.value;
                a = b ? b : this.M && !this.M.Fb() ? 9 : this.C.Fb() ? null : 1
            }
            this.F.value && (this.K.ie = this.F.value);
            var c, d, e, f, g, h, k, l, m, n, p, r;
            b = {
                ia: {
                    A: this.A,
                    context: this.context,
                    K: this.K,
                    Da: this.Da,
                    U: this.U,
                    eb: this.eb,
                    Bf: this.Bf,
                    isSecureContext: this.isSecureContext,
                    Ab: this.Ab
                },
                ja: {
                    ba: this.J.value,
                    P: this.P,
                    Sb: this.Sb,
                    Kf: !1
                },
                rl: {
                    Uc: this.Uc,
                    Tc: this.Tc
                },
                wk: {
                    Qj: null != (p = this.ra.value) ? p : "0"
                },
                Ei: {
                    Le: this.Le,
                    bd: this.bd
                },
                gb: {
                    Wd: null == (c = this.aa) ? void 0 : c.value
                },
                al: {
                    dl: a,
                    bl: null == (d = this.hb) ? void 0 : d.value
                },
                Qk: {
                    nk: null != (r = null == (e = this.Ia) ? void 0 : e.value) ? r : void 0,
                    Ne: null == (f = this.V) ? void 0 : f.value,
                    Aj: null == (g = this.fa) ? void 0 : g.value
                },
                Gk: {
                    Rj: null == (h = this.ya) ? void 0 : h.value,
                    Nj: null == (k = this.oa) ? void 0 : k.value
                },
                Ek: {
                    Dk: null == (l = this.Oa) ? void 0 : l.value
                },
                kl: {
                    og: null == (m = this.ec) ? void 0 : m.value,
                    re: null == (n = this.ma) ? void 0 : n.value
                }
            };
            this.o.D(b);
            c = np(Jt(b));
            d = c.url;
            bG(this.timer, (9).toString(), 9, c.Ng);
            this.l.D(d);
            this.O.D(Et(b) ? _.Uu("https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : _.Uu("https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}"))
        } else this.l.D(""), this.o.Z()
    };
    var FN = function(a, b, c, d, e, f) {
        Z.call(this, a, 878);
        this.l = b;
        this.W = c;
        this.P = d;
        this.A = e;
        this.output = vF(this);
        f && xF(this, f)
    };
    _.T(FN, Z);
    FN.prototype.j = function() {
        for (var a = _.w(this.l), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = oi(b, this.W);
            if (!Zh(b, this.W) && c) {
                a: {
                    var d = c;
                    var e = this.P.T[b.getDomId()],
                        f = 0,
                        g = 0;e = _.w(Fh(e));
                    for (var h = e.next(); !h.done; h = e.next())
                        if (h = h.value, Array.isArray(h)) {
                            var k = _.w(h);
                            h = k.next().value;
                            k = k.next().value;
                            if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h, g = Math.min(g || Infinity, k), Jn(qi(d, this.A)) || !d.parentElement || Jn(qi(d.parentElement, this.A))))) {
                                d = [f, 0];
                                break a
                            }
                        }
                    d = f || g ? [f, g] : null
                }
                g = this.P;f = g.X;g = g.T[b.getDomId()];In(c, wi(b), Mo(f, g), d)
            }
        }
        this.output.notify()
    };
    var GN = function(a, b, c, d, e, f, g) {
            this.l = a;
            this.o = b;
            this.B = c;
            this.ba = d;
            this.U = e;
            this.L = f;
            this.I = g;
            this.H = "";
            this.m = -1;
            this.j = 1;
            this.v = ""
        },
        IN = function(a, b) {
            if (b)
                if (1 !== a.j && 2 !== a.j) HN(a, new fE("state err: (" + ([a.j, a.v.length].join() + ")")));
                else {
                    a.v && (b = a.v + b);
                    var c = 0;
                    do {
                        var d = b.indexOf("\n", c);
                        var e = -1 !== d;
                        if (!e) break;
                        var f = a;
                        c = b.substr(c, d - c);
                        if (1 === f.j) f.H = c, ++f.m, f.j = 2;
                        else {
                            try {
                                f.l(f.m, f.H, {
                                    kind: 0,
                                    vb: xz(c)
                                }, f.ba, f.U, f.L, f.I), f.H = ""
                            } catch (g) {}
                            f.j = 1
                        }
                        c = d + 1
                    } while (e && c < b.length);
                    a.v = b.substr(c)
                }
        },
        HN = function(a, b) {
            a.j = 4;
            try {
                a.o(b)
            } catch (c) {}
        },
        JN = function(a) {
            1 !== a.j || a.v ? HN(a, new fE("state err (" + ([a.j, a.v.length].join() + ")"))) : (a.j = 3, a.B(a.m, a.ba, a.U))
        };
    var KN = function(a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, a, 788);
        this.M = b;
        this.J = c;
        this.F = d;
        this.U = e;
        this.output = vF(this);
        this.C = 0;
        this.o = !1;
        this.l = null != m ? m : new XMLHttpRequest;
        this.V = X(this, f);
        g && (this.aa = Y(this, g));
        this.fa = X(this, h);
        xF(this, k);
        this.O = X(this, l)
    };
    _.T(KN, Z);
    KN.prototype.j = function() {
        var a = this,
            b = this.fa.value;
        if (b) {
            var c, d = new GN(this.M, this.J, this.F, this.V.value, this.U, null == (c = this.aa) ? void 0 : c.value);
            this.l.open("GET", b);
            this.l.withCredentials = this.O.value;
            this.l.onreadystatechange = function() {
                LN(a, d, !1)
            };
            this.l.onload = function() {
                LN(a, d, !0)
            };
            this.l.onerror = function() {
                HN(d, new gE("XHR error"))
            };
            this.l.send()
        }
        this.output.notify()
    };
    var LN = function(a, b, c) {
        try {
            if (3 === a.l.readyState || 4 === a.l.readyState)
                if (300 <= a.l.status) a.o || (HN(b, new gE("xhr_err-" + a.l.status)), a.o = !0);
                else {
                    var d = a.l.responseText.substr(a.C);
                    d && IN(b, d);
                    a.C = a.l.responseText.length;
                    c && 4 === a.l.readyState && JN(b)
                }
        } catch (e) {
            HN(b, e)
        }
    };
    var MN = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        Z.call(this, a, 1078);
        this.C = b;
        this.o = c;
        this.l = d;
        this.U = e;
        this.output = vF(this);
        this.J = X(this, f);
        g && (this.M = Y(this, g));
        h && (this.O = X(this, h));
        this.V = X(this, k);
        xF(this, l);
        this.F = X(this, m);
        if (null == n ? 0 : n.Qd) this.fa = Y(this, n.Qd);
        p && (this.aa = X(this, p))
    };
    _.T(MN, Z);
    MN.prototype.j = function() {
        var a = this,
            b = this.V.value;
        if (b) {
            var c, d, e = new GN(this.C, this.o, this.l, this.J.value, this.U, null == (c = this.M) ? void 0 : c.value, null == (d = this.O) ? void 0 : d.value);
            c = this.F.value ? "include" : "omit";
            var f;
            d = null == (f = this.fa) ? void 0 : f.value;
            var g;
            f = null == (g = this.aa) ? void 0 : g.value;
            g = _.y(Object, "assign").call(Object, {}, {
                credentials: c
            }, d ? {
                browsingTopics: d
            } : {}, f ? {
                adAuctionHeaders: f
            } : {});
            fetch(b, g).then(function(h) {
                NN(a, h, e)
            }).catch(function(h) {
                ON(h, e)
            })
        }
        this.output.notify()
    };
    var NN = function(a, b, c) {
            if (300 <= b.status) HN(c, new gE("fetch_status-" + b.status));
            else {
                var d, e = null == (d = b.body) ? void 0 : d.pipeThrough(new TextDecoderStream).getReader();
                e ? e.read().then(function(f) {
                    PN(a, f, e, c)
                }).catch(function(f) {
                    ON(f, c)
                }) : HN(c, new gE("failed_reader"))
            }
        },
        PN = function(a, b, c, d) {
            var e = b.value;
            b.done ? JN(d) : (IN(d, e), c.read().then(function(f) {
                PN(a, f, c, d)
            }).catch(function(f) {
                ON(f, d)
            }))
        },
        ON = function(a, b) {
            HN(b, new gE("fetch error: " + (a instanceof Error ? a.message : void 0)))
        };
    var QN = function(a, b, c, d, e) {
        Z.call(this, a, 918);
        this.P = b;
        this.timer = c;
        this.output = vF(this);
        this.l = X(this, e);
        xF(this, d)
    };
    _.T(QN, Z);
    QN.prototype.j = function() {
        var a = this.l.value;
        a.length && Qr(this.timer, "3", Rr(this.P.T[a[0].getDomId()], 20));
        this.output.notify()
    };
    var SN = function(a, b, c) {
        Z.call(this, a, 804);
        this.jb = c;
        this.output = tF(this);
        this.o = [];
        this.Ic = {
            Tj: RN(this, function(d) {
                return Yw(d, 6)
            }),
            tl: RN(this, function(d) {
                return Yw(d, 7)
            }),
            bk: RN(this, function(d) {
                return !!Yl(d, 8)
            }),
            Hj: RN(this, function(d) {
                return Zw(d, 10)
            }),
            ic: RN(this, function(d) {
                var e;
                return null != (e = d.getEscapedQemQueryId()) ? e : ""
            }),
            Vi: RN(this, function(d) {
                return _.xh(d, my, 43)
            }),
            ak: RN(this, function(d) {
                return !!Yl(d, 9)
            }),
            bf: RN(this, function(d) {
                return !!Yl(d, 12)
            }),
            Oj: RN(this, function(d) {
                return _.xh(d, by, ij(d, Ay, 48))
            }),
            Cf: RN(this, function(d) {
                return _.xh(d, ay, ij(d, Ay, 39))
            }),
            bc: RN(this, function(d) {
                return $w(d, 36)
            }),
            ml: RN(this, function(d) {
                return !!Yl(d, 13)
            }),
            Zj: RN(this, function(d) {
                return !!Yl(d, 3)
            }),
            Dg: RN(this, function(d) {
                return Zw(d, 49)
            }),
            Wj: RN(this, function(d) {
                return _.xh(d, oy, 51)
            }),
            zj: RN(this, function(d) {
                return Zw(d, 61)
            }),
            qa: V(this),
            wi: RN(this, function(d) {
                return _.xh(d, xy, 58)
            }),
            ul: RN(this, function(d) {
                var e, f;
                return null != (f = null == (e = _.xh(d, ny, 56)) ? void 0 : Zw(e, 1)) ? f : null
            }),
            Ld: RN(this, function(d) {
                return Ah(d, Xx, 62)
            }),
            lj: RN(this, function(d) {
                return Ah(d, py, 67)
            }),
            jk: RN(this, function(d) {
                return Dd(d, 63, Jc)
            }),
            gj: RN(this, function(d) {
                return !!Yl(d, 64)
            })
        };
        this.l = X(this, b)
    };
    _.T(SN, Z);
    var RN = function(a, b) {
        var c = V(a);
        a.o.push({
            output: c,
            Cj: b
        });
        return c
    };
    SN.prototype.j = function() {
        for (var a = _.w(this.o), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = b.Cj,
                d = void 0;
            b.output.Fa(null != (d = c(this.l.value)) ? d : null)
        }
        0 === this.jb.kind ? this.Ic.qa.D(this.jb) : this.Ic.qa.D({
            kind: 0,
            vb: _.rj(this.l.value, 4) || ""
        });
        this.output.D(this.Ic)
    };
    var TN = function(a, b, c, d, e) {
        Z.call(this, a, 803);
        this.l = b;
        this.slotId = c;
        this.Da = d;
        this.U = e;
        this.output = V(this)
    };
    _.T(TN, Z);
    TN.prototype.j = function() {
        var a = JSON.parse(this.l),
            b = wn(a, Vu);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.l);
        a = Td(zy, a);
        b = _.w(Dd(a, 27, Cc));
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, _.qf(rf).j(c);
        cm(4, this.context, this.Da, this.U);
        Sr(this.slotId, AH, 800, a);
        this.output.D(a)
    };
    var UN = function(a, b, c, d) {
        Z.call(this, a, 823);
        this.slotId = b;
        this.K = c;
        this.l = X(this, d)
    };
    _.T(UN, Z);
    UN.prototype.j = function() {
        var a = this;
        Yl(this.l.value, 11) && (_.MH(this.K, this.slotId), JH(this.K, this.slotId, function() {
            _.NH(a.K, a.slotId)
        }))
    };
    var VN = function(a, b, c, d) {
        xj.call(this);
        this.context = a;
        this.slotId = b;
        a = d.K;
        var e = d.U;
        b = d.Sa;
        var f = d.Da;
        d = d.jb;
        c = new TN(this.context, c, this.slotId, f, e);
        N(this, c);
        e = new UK(this.context, e, f, c.output);
        N(this, e);
        b = new WK(this.context, this.slotId, b, c.output);
        N(this, b);
        a = new UN(this.context, this.slotId, a, c.output);
        N(this, a);
        a = new SN(this.context, c.output, d);
        N(this, a);
        d = a.Ic;
        this.j = {
            Ec: d.bk,
            yf: d.ic,
            la: d.wi,
            Ic: a.output
        }
    };
    _.T(VN, xj);
    /* 
     
    Math.uuid.js (v1.4) 
    http://www.broofa.com 
    mailto:robert@broofa.com 
    Copyright (c) 2010 Robert Kieffer 
    Dual licensed under the MIT and GPL licenses. 
    */
    var WN = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        XN = function() {
            for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = WN[19 == d ? c & 3 | 8 : c]);
            return a.join("")
        };
    var YN = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, u, x, C, D, F, B, J, R, O, W) {
        Z.call(this, a, 973);
        this.oa = b;
        this.R = c;
        this.M = d;
        this.V = e;
        this.P = f;
        this.K = g;
        this.Da = h;
        this.fa = k;
        this.O = l;
        this.F = m;
        this.Md = n;
        this.ma = p;
        this.Nb = r;
        this.isSecureContext = v;
        this.Ab = u;
        this.Sa = x;
        this.A = C;
        this.W = D;
        this.l = R;
        this.J = O;
        this.ra = W;
        this.C = [];
        this.o = Y(this, F);
        this.aa = X(this, B);
        this.ya = X(this, J);
        this.l && xF(this, this.l.mj)
    };
    _.T(YN, Z);
    YN.prototype.j = function() {
        var a = this,
            b = new xj;
        _.S(this, b);
        var c = this.aa.value,
            d = Kt(this.P.X);
        this.o.value && this.ra.D(this.o.value);
        var e = fq(this.context, this.W);
        e && _.S(b, e.Ea);
        var f = Ep(this.context, _.xh(this.P.X, Xs, 5), this.K, this.M, null == e ? void 0 : e.Bk.Hd);
        e = f.Of;
        (f = f.kk) && _.S(b, f);
        var g = new FN(this.context, this.M, this.W, this.P, this.A, e);
        N(b, g);
        var h = !!_.G(this.P.X, 6);
        e = new zN(this.context, this.M, h, this.P, this.R, this.A, c);
        N(b, e);
        var k = new IJ(this.context, d, c, Dd(this.P.X, 35, Ac));
        N(b, k);
        f = this.J;
        var l = f.xk,
            m = f.Fk;
        f = f.el;
        var n, p = null != (n = this.l) ? n : {},
            r = p.Vd,
            v = p.Ue,
            u = p.Lb,
            x = p.ed,
            C = p.se,
            D = p.Mj;
        n = p.cf;
        if (p = ks(this.context, f, this.P.T, c, this.o.value, e.l, k.output, p.oh)) {
            var F = p.gl;
            p = p.fl;
            var B = F.hg;
            F = F.If;
            _.S(b, p)
        }
        if (p = pr(this.context, f, this.A.navigator, k.output)) {
            var J = p.xi;
            p = p.il;
            var R = J.ei;
            J = J.yh;
            p && _.S(b, p)
        }
        _.H(LB) && (J = V(this), J.D(f.Bg));
        var O = new eM(this.context, this.A);
        N(b, O);
        p = (null != r ? r : {}).Cb;
        var W;
        f = _.H(Wq) ? null == (W = this.l) ? void 0 : W.xc : this.J.xc;
        W = new KL(this.context, l.yk);
        N(b, W);
        if (l = Io(this.context, this.R, this.P.T, this.Nb, e.l, r, u)) {
            var ba = l.Yi;
            _.S(this, l.Ea)
        }
        if (F = hq(this.context, m, F, _.H(OB) ? this.P.T : void 0, _.H(OB) ? e.l : void 0)) {
            var ha = F.Re;
            _.S(this, F.Ea)
        }
        if (F = ar(this.context, this.o.value, f, k.output)) {
            var la = F.cl;
            _.S(this, F.Ea);
            this.C.push(la.Sc.promise)
        }
        F = window.isSecureContext && _.H(QB) ? "wbn" : "ldjh";
        var Da = ++this.K.I;
        k = "wbn" === F ? XN().toLowerCase() : void 0;
        m = this.Md;
        var ya, Oa;
        ba = new EN(this.context, h, this.K, this.Da, this.P, F, m.Sb, m.Uc, m.Tc, this.ya.value, k, _.qf(ih), c, this.isSecureContext, this.Ab, this.A, W.output, O.output, e.l, null == (ya = ba) ? void 0 : ya.vg, la, f, g.output, null == v ? void 0 : v.bg, p, u, x, C, D, ha, R, null == (Oa = this.l) ? void 0 : Oa.oh);
        N(b, ba);
        ha = new QN(this.context, this.P, _.qf(ih), ba.l, e.l);
        N(b, ha);
        d = new AN(this.context, d, c);
        N(b, d);
        ya = gh(this.context, 646, function(jb, Qb, fc, Wb, Fc, Vc, Yd) {
            Mt(a.context, function() {
                return void ZN(a, Fc, jb, Qb, fc, Wb, Vc, Yd)
            }, jb, a.A.navigator, a.A.setTimeout)
        });
        Oa = gh(this.context, 647, function(jb, Qb, fc) {
            var Wb = function() {
                return void $N(a, Da, fc, Qb, jb)
            };
            _.Cf(Nt) ? setTimeout(gh(a.context, 646, Wb), 0) : Wb()
        });
        "ldjh" === F ? (g = aO(this, 289, "strm_err"), _.H(ZA) && window.fetch && window.TextDecoderStream || _.H(aB) && pz(window.fetch) && pz(window.TextDecoderStream) || _.H($A) && Na() && pz(window.fetch) && pz(window.TextDecoderStream) ? (B = new MN(this.context, ya, g, Oa, c, e.l, B, R, ba.l, ha.output, d.output, la, J), N(b, B), B = B.output) : (B = new KN(this.context, ya, g, Oa, c, e.l, B, ba.l, ha.output, d.output), N(b, B), B = B.output)) : (R = new TM(this.context, ya, aO(this, 1042, "Unknown web bundle error."), Oa, F, k, c, this.W, e.l, B, ba.l, ba.O, ha.output, d.output), Us(b, R), B = new En, oF(B, Gj(R).then(function() {})));
        R = new BN(this.context, Da, e.l, B, n, this.Nb);
        N(b, R);
        la = new xN(this.context, ba.o, ba.l);
        N(b, la);
        la = new DN(this.context, this.F.xa, this.P, la.output);
        N(b, la);
        la = new UL(this.context, this.fa, this.A, la.output);
        N(b, la);
        la = new AL(this.context, this.P, this.O, e.l, la.output);
        N(b, la);
        e = new JK(this.context, this.K, this.P, this.W, e.l, la.output);
        N(b, e);
        la = new dM(this.context, _.qh(this.A), this.A, c, B);
        N(b, la);
        1 === Da && (c = new BK(this.context, this.A, c, f, B), N(b, c), this.C.push(c.output.promise));
        this.C.push(R.output.promise, e.output.promise, la.output.promise);
        Gj(b)
    };
    var ZN = function(a, b, c, d, e, f, g, h) {
            var k, l, m;
            return _.lb(function(n) {
                k = f[c];
                if (!k) return kh(a.context, 646, Error("missing slot")), n.return();
                0 === c && (l = Rr(a.P.T[k.getDomId()], 20), Qr(_.qf(ih), "4", l));
                return _.mb(n, bO(a, k, d, e, b, null == (m = g) ? void 0 : m[k.getId()], h), 0)
            })
        },
        $N = function(a, b, c, d, e) {
            var f, g, h;
            return _.lb(function(k) {
                if (1 == k.j) {
                    var l = a.context,
                        m = e + 1,
                        n = d.length;
                    if (l.Qc) {
                        var p = l.Tb;
                        l = Zg(l);
                        var r = new zA;
                        r = _.Vg(r, 3, b);
                        m = _.ch(r, 1, m);
                        n = _.ch(m, 2, n);
                        n = _.dh(l, 8, eh, n);
                        Ke(p, n)
                    }
                    f = e + 1
                }
                if (3 != k.j) {
                    if (!(f < d.length)) return _.mb(k, cO(a), 0);
                    if (!d[f]) {
                        k.j = 3;
                        return
                    }
                    p = new zy;
                    p = nj(p, 8, !0);
                    g = pk(p);
                    h = '{"empty":' + g + "}";
                    return _.mb(k, ZN(a, c, f, h, {
                        kind: 0,
                        vb: ""
                    }, d), 3)
                }++f;
                k.j = 2
            })
        },
        bO = function(a, b, c, d, e, f, g) {
            var h, k, l, m, n, p, r, v, u, x;
            return _.lb(function(C) {
                if (1 == C.j) return h = {
                    U: e,
                    Sa: a.Sa,
                    K: a.K,
                    Da: a.Da,
                    jb: d
                }, k = new VN(a.context, b, c, h), _.mb(C, Gj(k), 2);
                l = C.v;
                m = l.Ec;
                n = l.yf;
                p = l.la;
                r = l.Ic;
                Ko(a.context, null == (v = a.l) ? void 0 : v.Vd, r.ul, r.bf, r.ic);
                if (b.H) return C.return();
                (u = !!p) && Li("gpt_td_init", function(D) {
                    Ri(D, a.context);
                    L(D, "noFill", m ? "1" : "0");
                    L(D, "publisher_tag", "gpt");
                    var F = _.xh(p, vy, 5);
                    F && (L(D, "winner_qid", F.getEscapedQemQueryId()), L(D, "xfpQid", _.M(F, 6)))
                }, 1);
                (x = pp("google_norender")) || m && !u ? Wr(b, a.K, a.P, n) : uN(a.ma, a.oa, a.R, b, m || x, u, a.K, a.P, a.Sa, r, e, f, g, a.F.xa, a.O, a.l, a.J);
                k.va();
                C.j = 0
            })
        },
        aO = function(a, b, c) {
            return gh(a.context, b, function(d) {
                d = d instanceof Error ? d : Error();
                d.message = d.message || c;
                kh(a.context, b, d);
                cO(a)
            })
        },
        cO = function(a) {
            return _.lb(function(b) {
                if (1 == b.j) {
                    var c = a.K,
                        d = a.V,
                        e = c.m.get(d) - 1;
                    0 === e ? c.m.delete(d) : c.m.set(d, e);
                    return e ? b.return() : _.mb(b, _.t.Promise.all(a.C), 2)
                }
                Sr(a.F.uh, EH, 965, a.V);
                b.j = 0
            })
        };
    var dO = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, u, x, C, D, F, B, J, R, O) {
        Z.call(this, a, 885);
        this.aa = b;
        this.R = c;
        this.P = d;
        this.K = e;
        this.Da = f;
        this.Md = g;
        this.O = h;
        this.F = k;
        this.l = l;
        this.C = m;
        this.V = n;
        this.isSecureContext = p;
        this.Za = r;
        this.M = v;
        this.Ab = u;
        this.Sa = x;
        this.A = C;
        this.W = D;
        this.o = J;
        this.J = R;
        this.fa = O;
        this.ma = X(this, F);
        xF(this, B)
    };
    _.T(dO, Z);
    dO.prototype.j = function() {
        var a = this.ma.value;
        if (a.length) {
            var b = this.K,
                c = this.l,
                d = a.length;
            b.m.has(c);
            b.m.set(c, d);
            a = _.w(a);
            for (b = a.next(); !b.done; b = a.next()) {
                c = b.value;
                var e = void 0;
                b = c.Nb;
                d = c.ba;
                c = new xj;
                _.S(this, c);
                var f = mp(this.context, this.M, null == (e = this.o) ? void 0 : e.qk);
                e = f.Fc;
                var g = f.qh;
                _.S(c, f.Ea);
                e = $m(this.context, this.R, this.K, this.A, e, g, Kt(this.P.X));
                f = e.ib;
                _.S(c, e.Ea);
                e = new OL(this.context, this.A, f);
                N(c, e);
                e = new TK(this.context, this.A, f);
                N(c, e);
                e = new Qs(this.context, this.A, f);
                N(c, e);
                g = new vN(this.context, this.Da, this.Za, f);
                N(c, g);
                b = new YN(this.context, this.aa, this.R, d, this.l, this.P, this.K, this.Da, this.O, this.F, this.C, this.Md, this.V, b, this.isSecureContext, this.Ab, this.Sa, this.A, this.W, e.output, f, g.o, this.o, this.J, this.fa);
                N(c, b);
                Gj(c)
            }
        } else Sr(this.C.uh, EH, 965, this.l)
    };
    var eO = new _.t.Map,
        fO = function(a, b, c, d) {
            d = void 0 === d ? eO : d;
            Z.call(this, a, 834);
            this.R = b;
            this.ba = c;
            this.l = d;
            this.o = V(this);
            this.o.Ka(_.t.Promise.all(this.ba.map(this.C, this)).then(function(e) {
                return e.filter(function(f) {
                    return null != f && !f.H
                })
            }))
        };
    _.T(fO, Z);
    fO.prototype.j = function() {};
    fO.prototype.C = function(a) {
        var b = this,
            c, d;
        return _.lb(function(e) {
            if (1 == e.j) {
                if (a.H) return e.return();
                b.l.has(a) || (b.l.set(a, Ot(a)), _.ap(a, function() {
                    return void b.l.delete(a)
                }));
                c = b.l.get(a);
                return _.mb(e, c(), 2)
            }
            d = e.v;
            if (b.H) return e.return();
            if (d) return e.return(a);
            Q(b.R, KI(a.getAdUnitPath()));
            return e.return()
        })
    };
    var gO = function(a, b, c, d, e) {
        Z.call(this, a, 847);
        this.K = b;
        this.eb = c;
        this.o = d;
        this.l = V(this);
        this.C = X(this, e)
    };
    _.T(gO, Z);
    gO.prototype.j = function() {
        var a = this.C.value;
        if (a.length) {
            for (var b = _.w(a), c = b.next(); !c.done; c = b.next()) QH(this.K, c.value);
            this.o ? this.l.D([]) : this.eb ? (b = Tg(a[0].getAdUnitPath()), a = hO(a, b), this.l.D(a)) : (a = a.map(function(d) {
                return {
                    Nb: Tg(d.getAdUnitPath()),
                    ba: [d]
                }
            }), this.l.D(a))
        } else this.l.D([])
    };
    var hO = function(a, b) {
        var c = [];
        a = xa(a, function(f) {
            return Tg(f.getAdUnitPath())
        });
        a = _.w(_.y(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.w(d.value);
            d = e.next().value;
            e = e.next().value;
            d === b ? c.unshift({
                Nb: d,
                ba: e
            }) : c.push({
                Nb: d,
                ba: e
            })
        }
        return c
    };
    var iO = function(a, b, c) {
        Z.call(this, a, 845);
        this.T = b;
        this.l = V(this);
        this.o = V(this);
        this.C = X(this, c)
    };
    _.T(iO, Z);
    iO.prototype.j = function() {
        var a = this,
            b = function(d) {
                return !!Fh(a.T[d.getDomId()]).length
            },
            c = this.C.value;
        this.l.D(c.filter(b));
        this.o.D(c.filter(Wu(b)))
    };
    var jO = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, u, x, C, D) {
        _.U.call(this);
        var F = this;
        this.context = a;
        this.F = b;
        this.R = c;
        this.K = d;
        this.Da = e;
        this.xa = f;
        this.L = g;
        this.l = h;
        this.C = k;
        this.isSecureContext = l;
        this.Za = m;
        this.o = n;
        this.Ab = p;
        this.Sa = r;
        this.W = v;
        this.A = u;
        this.B = x;
        this.I = C;
        this.J = D;
        this.j = new _.t.Map;
        this.m = new vH(a);
        _.S(this, this.m);
        this.m.listen(EH, function(B) {
            B = B.detail;
            var J = F.j.get(B);
            J && (F.j.delete(B), J.va())
        })
    };
    _.T(jO, _.U);
    var kO = function(a, b, c, d) {
        var e = ++a.K.l;
        a.j.has(e);
        var f = new xj;
        a.j.set(e, f);
        b = new fO(a.context, a.R, b);
        N(f, b);
        var g = new iO(a.context, d.T, b.o);
        N(f, g);
        b = new gO(a.context, a.K, !!_.G(d.X, 6), pp("google_nofetch"), g.l);
        N(f, b);
        g = new KK(a.context, a.K, d, document, g.o);
        N(f, g);
        a = new dO(a.context, a.F, a.R, d, a.K, a.Da, c, a.L, a.l, e, {
            uh: a.m,
            xa: a.xa
        }, a.C, a.isSecureContext, a.Za, a.o, a.Ab, a.Sa, a.A, a.W, b.l, g.l, a.B, a.I, a.J);
        N(f, a);
        Gj(f)
    };
    var lO = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v) {
        VM.call(this, a, c, h);
        this.context = a;
        this.K = d;
        this.B = new _.t.Set;
        this.I = {};
        this.C = new tN(a, d);
        this.F = new jO(a, b, c, d, new _.rE(window), this.m, m, e, this.C, f, g, k, l, n, document, window, p, r, v);
        _.S(this, this.F)
    };
    _.T(lO, VM);
    lO.prototype.getName = function() {
        return "publisher_ads"
    };
    lO.prototype.display = function(a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        e = void 0 === e ? "" : e;
        var f = "";
        if (d)
            if (_.na(d) && 1 == d.nodeType) {
                var g = d;
                f = g.id
            } else f = d;
        xs(this);
        var h = tm(c, this.context, this.R, a, b, f),
            k = h.slotId;
        h = h.Aa;
        if (k && h) {
            g && !f && (g.id = k.getDomId());
            this.slotAdded(k, h);
            h.setClickUrl(e);
            var l;
            qs(this, null != (l = g) ? l : k.getDomId(), c)
        } else Q(this.R, Ik("PubAdsService.display", [a, b, d]))
    };
    var qs = function(a, b, c) {
        var d = mO(b, c);
        c = d.slotId;
        var e = d.tj;
        d = d.uj;
        if (c) {
            if (b = yi(), (d = kG(b, c.getDomId())) && !_.G(d, 19))
                if (e && b.m.set(c, e), (e = oi(c)) || (e = Ss(d), e = 0 !== e && 1 !== e), e) {
                    if (nj(d, 19, !0), e = Vh(b.j, b.v), a.enabled) {
                        xs(a);
                        a.enabled && LH(a.K, c);
                        a.R.info(lI());
                        b = e.X;
                        d = e.T;
                        var f = _.G(b, 6);
                        if (f || !a.K.lc(c)) f && (f = oi(c)) && Sr(c, zH, 778, f), _.G(b, 4) && (d = d[c.getDomId()], dp(d, b) && !a.K.lc(c) && fp(c, document, d, b)), lJ(a, e, c)
                    }
                } else Q(a.R, bI(String(_.rj(d, 1)), String(_.rj(d, 2))), c)
        } else d ? a.R.error(cI(d)) : a.R.error(Ik("googletag.display", [String(b)]))
    };
    lO.prototype.slotAdded = function(a, b) {
        var c = this;
        _.G(b, 17) || this.enabled && LH(this.K, a);
        Sr(this.m, CH, 724, {
            ug: a.getDomId(),
            T: b
        });
        a.listen(Vr, function(d) {
            var e = d.detail;
            d = e.size;
            var f = new fL(a, "publisher_ads");
            e.isEmpty && (f.isEmpty = !0);
            e = a.j.getResponseInformation();
            d && e && (f.size = [d.width, d.height], f.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId, f.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId, f.isBackfill = e.isBackfill, f.creativeId = e.creativeId, f.lineItemId = e.lineItemId, f.creativeTemplateId = e.creativeTemplateId, f.advertiserId = e.advertiserId, f.campaignId = e.campaignId, f.yieldGroupIds = e.yieldGroupIds, f.companyIds = e.companyIds);
            Sr(c.m, "slotRenderEnded", 708, f)
        });
        a.listen(AH, function() {
            Sr(c.m, "slotResponseReceived", 709, new lL(a, c.getName()))
        });
        4 === Ss(b) && nO(this, "rewardedSlotClosed", a, b);
        7 === Ss(b) && nO(this, "gameManualInterstitialSlotClosed", a, b);
        VM.prototype.slotAdded.call(this, a, b)
    };
    var nO = function(a, b, c, d) {
            _.ap(c, a.m.listen(b, function(e) {
                c.j === e.detail.slot && (e = {}, oO(a, [c], yi().j, (e[c.getDomId()] = d, e), a.K))
            }))
        },
        lJ = function(a, b, c) {
            var d = pO(a, b, c);
            qO(a, d, b, {
                Sb: 1
            });
            b = c.getAdUnitPath();
            if (c = a.I[b]) {
                c = _.w(c);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, qO(a, d.ba, d.P, d.Md);
                delete a.I[b]
            }
        },
        pO = function(a, b, c) {
            var d = b.X;
            b = b.T;
            if (_.G(d, 4)) return [];
            var e;
            return !_.G(d, 6) || (null == (e = b[c.getDomId()]) ? 0 : _.G(e, 17)) ? (a.B.add(c), _.ap(c, function() {
                return void a.B.delete(c)
            }), [c]) : a.j.filter(function(f) {
                if (a.B.has(f)) return !1;
                a.B.add(f);
                _.ap(f, function() {
                    return void a.B.delete(f)
                });
                return !0
            })
        },
        qO = function(a, b, c, d) {
            a.R.info(sI());
            if (rO(a, b, d, c) && 1 !== d.Sb)
                for (b = _.w(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), Sr(a.m, DH, 725, {
                    ug: d,
                    T: c.T[d]
                })
        },
        rO = function(a, b, c, d) {
            b = b.filter(function(e) {
                var f = d.T[e.getDomId()],
                    g = _.Ur(a.K, e);
                !1 === g && Q(a.R, aJ(String(Ss(f)), e.getAdUnitPath()));
                if (!g) return !1;
                (_.E = [5, 4, 7], _.y(_.E, "includes")).call(_.E, Ss(f)) && _.MH(a.K, e);
                return !0
            });
            if (!b.length) return null;
            kO(a.F, b, c, d);
            return b
        };
    lO.prototype.refresh = function(a, b, c) {
        c = void 0 === c ? {
            Sb: 2
        } : c;
        b = sO(this, b);
        if (!b.length) return !1;
        tO(this, a, b, c);
        return !0
    };
    var sO = function(a, b) {
            return b.filter(function(c, d) {
                if (!c.H) return !0;
                Q(a.R, vI(String(d)));
                return !1
            })
        },
        tO = function(a, b, c, d) {
            var e = c[0],
                f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
            if (a.enabled) {
                var h = _.w(c);
                e = h.next();
                for (f = {}; !e.done; f = {
                        Pd: f.Pd
                    }, e = h.next()) f.Pd = e.value, a.B.add(f.Pd), _.ap(f.Pd, function(k) {
                    return function() {
                        return void a.B.delete(k.Pd)
                    }
                }(f));
                qO(a, c, b, d)
            } else c.length && _.G(b.X, 6) ? (Q(a.R, rI(g), e), e = e.getAdUnitPath(), f = null != (h = a.I[e]) ? h : [], f.push({
                ba: c,
                P: b,
                Md: d
            }), a.I[e] = f) : Q(a.R, pI(g), e)
        };
    lO.prototype.L = function() {
        var a = yi().j;
        if (_.G(a, 6))
            for (var b = _.w(this.j), c = b.next(); !c.done; c = b.next()) this.enabled && LH(this.K, c.value);
        qJ(this, a);
        a = Pm();
        a.hasOwnProperty("pubadsReady") || (a.pubadsReady = !0)
    };
    lO.prototype.destroySlots = function(a) {
        a = VM.prototype.destroySlots.call(this, a);
        if (a.length && this.enabled) {
            var b = yi();
            uO(this, a, b.j, b.v)
        }
        return a
    };
    var sJ = function(a, b, c, d) {
            if (!a.enabled) return Q(a.R, qI(), d[0]), !1;
            var e = sO(a, d);
            if (!e.length) return Q(a.R, Ik("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))), !1;
            a.R.info(tI());
            uO(a, e, b, c);
            return !0
        },
        uO = function(a, b, c, d) {
            for (var e = _.w(b), f = e.next(); !f.done; f = e.next()) IH(a.K, f.value);
            oO(a, b, c, d, a.K)
        };
    lO.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && _.qf(rf).j(a)
    };
    var oO = function(a, b, c, d, e) {
            var f = void 0 === f ? window : f;
            b = _.w(b);
            for (var g = b.next(); !g.done; g = b.next()) {
                g = g.value;
                SH(a.C.K, g);
                var h = d[g.getDomId()];
                dp(h, c) && fp(g, f.document, h, c);
                QH(e, g)
            }
        },
        rJ = function(a, b, c, d) {
            if ("string" !== typeof b || "string" !== typeof c) Q(a.R, Ik("PubAdsService.setVideoContent", [b, c]));
            else {
                var e = nj(d, 21, !0);
                b = mj(e, 22, b);
                mj(b, 23, c);
                qJ(a, d)
            }
        },
        tJ = function(a, b) {
            if (!a.enabled) return null;
            var c, d;
            return {
                vid: null != (c = _.M(b, 22)) ? c : "",
                cmsid: null != (d = _.M(b, 23)) ? d : ""
            }
        },
        qJ = function(a, b) {
            _.G(b, 21) && a.enabled && (a = yz(), _.Uh(b, 29, null == a ? a : Kc(a)))
        },
        mO = function(a, b) {
            var c = "";
            if ("string" === typeof a) c = a, b = zK(b, c);
            else if (_.na(a) && 1 == a.nodeType) {
                var d = a;
                c = d.id;
                b = zK(b, c)
            } else b = (_.E = [].concat(_.Ie(b.ba)), _.y(_.E, "find")).call(_.E, function(e) {
                return e.j === a
            });
            return {
                slotId: b,
                tj: d,
                uj: c
            }
        };
    var vO = _.lu(["https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js"]),
        wO = _.lu(["https://securepubads.g.doubleclick.net/pagead/js/rum.js"]);
    var xO = mu(["^[-p{L}p{M}p{N}_,.!*<>():/]*$"], ["^[-\\p{L}\\p{M}\\p{N}_,\\.!*<>():/]*$"]),
        yO = _.Xu(function() {
            uz("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        AO = function(a, b) {
            var c = this;
            var d = void 0 === d ? _.y(String, "raw").call(String, xO) : d;
            this.K = a;
            this.v = d;
            this.j = new _.t.Map;
            this.ba = new _.t.Set;
            b.m = function(e) {
                return zO(c, e)
            }
        };
    AO.prototype.defineSlot = function(a, b, c, d, e) {
        a = tm(this, a, b, c, d, e);
        var f = a.slotId;
        if (f) return f.j;
        a.me || b.error(Ik("googletag.defineSlot", [c, d, e]));
        return null
    };
    var tm = function(a, b, c, d, e, f, g) {
        return "string" === typeof d && 0 < d.length && e && (void 0 === f || "string" === typeof f) ? a.add(b, c, d, e, {
            Jb: f,
            Wh: void 0 === g ? !1 : g
        }) : {}
    };
    AO.prototype.add = function(a, b, c, d, e, f) {
        var g = this,
            h = e.Jb,
            k = void 0 === e.format ? 0 : e.format,
            l = void 0 === e.Wh ? !1 : e.Wh;
        e = void 0 === e.pb ? !1 : e.pb;
        f = void 0 === f ? _.q : f;
        try {
            var m = new RegExp(this.v, "u");
            if (m.test("/1") && !m.test(c)) return b.error(eI(c)), {
                me: !0
            }
        } catch (p) {}
        if (f = Xo(k, f, e)) return Oo(b, f, k, c), {};
        l && yO();
        k = this.j.get(c) || Number(l);
        b = BO(this, a, b, c, k, d, h || "gpt_unit_" + c + "_" + k);
        a = b.Aa;
        var n = b.slotId;
        b = b.me;
        if (!n) return {
            me: b
        };
        this.j.set(c, k + 1);
        this.ba.add(n);
        _.ap(n, function() {
            return void g.ba.delete(n)
        });
        TF(c);
        return {
            slotId: n,
            Aa: a
        }
    };
    var zK = function(a, b) {
            a = _.w(a.ba);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.getDomId() === b) return c
        },
        os = function(a) {
            a = _.w(a);
            for (var b = a.next(); !b.done; b = a.next()) b.value.va()
        },
        BO = function(a, b, c, d, e, f, g) {
            var h = zK(a, g);
            if (h) return c.error(dI(g, d, h.getAdUnitPath())), {
                me: !0
            };
            var k = new CJ;
            DJ(mj(k, 1, d), g);
            EJ(k, Km(f));
            jG(k);
            var l = new df(b, d, e, g);
            nJ(l, Sm(b, c, l));
            _.ap(l, function() {
                var m = yi(),
                    n = l.getDomId();
                delete m.v[n];
                m.m.delete(l);
                m = l.getAdUnitPath();
                m = Tg(m);
                var p;
                n = (null != (p = vh.get(m)) ? p : 0) - 1;
                0 >= n ? vh.delete(m) : vh.set(m, n);
                c.info(AI(l.toString()), l);
                (p = Dk.get(l)) && Ek.delete(p);
                Dk.delete(l)
            });
            c.info(TH(l.toString()), l);
            l.listen(BH, function(m) {
                m = m.detail.Mk;
                c.info(UH(l.getAdUnitPath()), l);
                bG(_.qf(ih), "7", 9, PH(a.K, l), 0, m)
            });
            l.listen(AH, function(m) {
                var n = m.detail;
                c.info(VH(l.getAdUnitPath()), l);
                var p;
                m = _.qf(ih);
                var r = Rr(k, 20);
                n = null != (p = n.getEscapedQemQueryId()) ? p : "";
                m.j && (_.q.google_timing_params = _.q.google_timing_params || {}, _.q.google_timing_params["qqid." + r] = n)
            });
            l.listen(Tr, function() {
                return void c.info(WH(l.getAdUnitPath()), l)
            });
            l.listen(Vr, function() {
                return void c.info(XH(l.getAdUnitPath()), l)
            });
            return {
                Aa: k,
                slotId: l
            }
        },
        zO = function(a, b) {
            var c = new RegExp("(^|,|/)" + b + "($|,|/)");
            return [].concat(_.Ie(a.ba)).some(function(d) {
                return c.test(Tg(d.getAdUnitPath()))
            })
        };
    (function(a, b) {
        var c = null != a ? a : {
            pvsid: _.qh(window),
            ub: "1",
            wb: "m202310180101",
            Tb: new au(3, "m202310180101", 0),
            sg: !0,
            xf: 1
        };
        try {
            lc(function(ya) {
                kh(c, 1190, ya)
            });
            var d = Pm();
            ne(!_.qf(Hh).j);
            _.y(Object, "assign").call(Object, Ih, d._vars_);
            d._vars_ = Ih;
            if (d.evalScripts) d.evalScripts();
            else {
                LG();
                try {
                    Qf()
                } catch (ya) {
                    kh(c, 408, ya)
                }
                yp();
                var e = new SJ;
                try {
                    Mf(e.I), $l(13, c), $l(3, c)
                } catch (ya) {
                    kh(c, 408, ya)
                }
                var f = Zt(c, e),
                    g = null != a ? a : bu(f, c),
                    h = null != b ? b : new RJ(g);
                fh(g);
                Li("gpt_fifwin", function(ya) {
                    Ri(ya, g)
                }, d.fifWin ? .01 : 0);
                var k = new HH,
                    l = new AO(k, e),
                    m = new bN(g),
                    n = _.Jh(260),
                    p = new kN(g, l, yi(), h, k, n, e, m),
                    r = jz(),
                    v = Ns(g),
                    u = new vH(g),
                    x = new vH(g),
                    C = new vH(g),
                    D = _.Jh(150),
                    F;
                n && (F = lN(p, u, D, _.H(Wq) ? v : void 0));
                var B = _.Jh(221),
                    J = new PL,
                    R = new VK,
                    O, W, ba, ha = null != (ba = null == (O = F) ? void 0 : null == (W = O.Ue) ? void 0 : W.qb) ? ba : new An,
                    la = new lO(g, l, h, k, m, r, e, u, n, B, J, R, F, v, ha);
                _.H(VB) && new AK(g, u, k, l);
                var Da = yi().j;
                Gs(g, h, la, Da, l, x, C, e, R, ha);
                dn(g, d, h);
                window.setTimeout(function() {
                    for (var ya = window.document.scripts, Oa = 0, jb = 0, Qb = 0; Qb < ya.length; Qb++) ya[Qb].src.match("securepubads.g.doubleclick.net/tag/js/gpt.js") ? Oa++ : ya[Qb].src.match("www.googletagservices.com/tag/js/gpt.js") && jb++;
                    1 < Oa && 0 === jb || 1 < jb && 0 === Oa ? Q(h, ZI()) : 0 < jb && 0 < Oa && h.error($I())
                }, 1E3);
                ls();
                if (_.H(VB) || _.qf(ih).j) Wt(), _.mn(document, _.H(XB) ? _.ue(vO) : _.ue(wO));
                Eq(g, h);
                gn(g)
            }
        } catch (ya) {
            kh(c, 106, ya)
        }
    })();
    _.CO = _.q.requestAnimationFrame || _.q.webkitRequestAnimationFrame;
    _.DO = !!_.CO && !/'iPhone'/.test(_.q.navigator.userAgent);
    _.EO = function(a, b, c) {
        _.U.call(this);
        var d = this;
        this.B = a;
        this.j = b;
        this.m = c;
        this.V = null;
        _.ap(this, function() {
            return d.V = null
        })
    };
    _.T(_.EO, _.U);
}).call(this, {});