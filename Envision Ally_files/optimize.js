// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "5",

      macros: [{ function: "__e" }, { function: "__dee" }],
      tags: [
        {
          function: "__asprv",
          vtp_globalName: "google_optimize",
          vtp_listenForMutations: false,
          tag_id: 6,
        },
        { function: "__asprv", tag_id: 7 },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: ["macro", 1] },
        { function: "_eq", arg0: ["macro", 0], arg1: "optimize.callback" },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
        [
          ["if", 1],
          ["add", 1],
        ],
      ],
    },
    runtime: [],
  };

  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var ca,
    da = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ea = function (a) {
      return (a.raw = a);
    },
    fa = function (a, b) {
      a.raw = b;
      return a;
    },
    ha = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: da(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ia =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ja;
  if ("function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
  else {
    var ka;
    a: {
      var la = { a: !0 },
        na = {};
      try {
        na.__proto__ = la;
        ka = na.a;
        break a;
      } catch (a) {}
      ka = !1;
    }
    ja = ka
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var oa = ja,
    pa = function (a, b) {
      a.prototype = ia(b.prototype);
      a.prototype.constructor = a;
      if (oa) oa(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.wm = b.prototype;
    },
    qa = this || self,
    ra = function (a) {
      return a;
    };
  var sa = function () {},
    ta = function (a) {
      return "function" === typeof a;
    },
    g = function (a) {
      return "string" === typeof a;
    },
    ua = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    va = Array.isArray,
    xa = function (a, b) {
      if (a && va(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    ya = function (a, b) {
      if (!ua(a) || !ua(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ba = function (a, b) {
      for (var c = new Aa(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    k = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Ca = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Da = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Ea = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Fa = function (a) {
      var b = [];
      if (va(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ga = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ia = function () {
      return new Date(Date.now());
    },
    Ja = function () {
      return Ia().getTime();
    },
    Aa = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Aa.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Aa.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ka = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    La = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ma = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Oa = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Pa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Qa = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Ra = /^\w{1,9}$/,
    Sa = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      k(a, function (d, e) {
        Ra.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Ta = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  function Ua() {
    for (var a = Va, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Wa() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Va, Xa;
  function Ya(a) {
    Va = Va || Wa();
    Xa = Xa || Ua();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        h = d ? a.charCodeAt(c + 1) : 0,
        l = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (h >> 4),
        p = ((h & 15) << 2) | (l >> 6),
        q = l & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Va[m], Va[n], Va[p], Va[q]);
    }
    return b.join("");
  }
  function Za(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Xa[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Va = Va || Wa();
    Xa = Xa || Ua();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        h = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != h &&
        ((c += String.fromCharCode(((f << 4) & 240) | (h >> 2))),
        64 != l && (c += String.fromCharCode(((h << 6) & 192) | l)));
    }
  }
  var $a = {},
    ab = function (a, b) {
      $a[a] = $a[a] || [];
      $a[a][b] = !0;
    },
    bb = function () {
      delete $a.GA4_EVENT;
    },
    cb = function (a) {
      var b = $a[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return Ya(c.join("")).replace(/\.+$/, "");
    };
  var db = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var eb,
    fb = function () {
      if (void 0 === eb) {
        var a = null,
          b = qa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: ra,
              createScript: ra,
              createScriptURL: ra,
            });
          } catch (c) {
            qa.console && qa.console.error(c.message);
          }
          eb = a;
        } else eb = a;
      }
      return eb;
    };
  var gb = function (a) {
    this.h = a;
  };
  gb.prototype.toString = function () {
    return this.h + "";
  };
  var hb = {};
  var ib = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var jb, kb;
  a: {
    for (var lb = ["CLOSURE_FLAGS"], mb = qa, nb = 0; nb < lb.length; nb++)
      if (((mb = mb[lb[nb]]), null == mb)) {
        kb = null;
        break a;
      }
    kb = mb;
  }
  var ob = kb && kb[610401301];
  jb = null != ob ? ob : !1;
  function pb() {
    var a = qa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var qb,
    rb = qa.navigator;
  qb = rb ? rb.userAgentData || null : null;
  function sb(a) {
    return jb
      ? qb
        ? qb.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function tb(a) {
    return -1 != pb().indexOf(a);
  }
  function ub() {
    return jb ? !!qb && 0 < qb.brands.length : !1;
  }
  function vb() {
    return ub() ? !1 : tb("Opera");
  }
  function wb() {
    return tb("Firefox") || tb("FxiOS");
  }
  function xb() {
    return ub()
      ? sb("Chromium")
      : ((tb("Chrome") || tb("CriOS")) && !(ub() ? 0 : tb("Edge"))) ||
          tb("Silk");
  }
  var yb = {},
    zb = function (a) {
      this.h = a;
    };
  zb.prototype.toString = function () {
    return this.h.toString();
  };
  var Ab = function (a) {
    return a instanceof zb && a.constructor === zb
      ? a.h
      : "type_error:SafeHtml";
  }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  function Bb(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  var Cb = ea([""]),
    Db = fa(["\x00"], ["\\0"]),
    Eb = fa(["\n"], ["\\n"]),
    Fb = fa(["\x00"], ["\\u0000"]);
  function Gb(a) {
    return -1 === a.toString().indexOf("`");
  }
  Gb(function (a) {
    return a(Cb);
  }) ||
    Gb(function (a) {
      return a(Db);
    }) ||
    Gb(function (a) {
      return a(Eb);
    }) ||
    Gb(function (a) {
      return a(Fb);
    });
  function Hb(a) {
    var b = (a = Ib(a)),
      c = fb(),
      d = c ? c.createHTML(b) : b;
    return new zb(d, yb);
  }
  function Ib(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var z = window,
    D = document,
    Jb = navigator,
    Kb = D.currentScript && D.currentScript.src,
    Lb = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Mb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Nb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Ob = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Pb(a, b, c) {
    b &&
      k(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Qb = function (a, b, c, d, e) {
      var f = D.createElement("script");
      Pb(f, d, Nb);
      f.type = "text/javascript";
      f.async = !0;
      var h,
        l = Ib(a),
        m = fb(),
        n = m ? m.createScriptURL(l) : l;
      h = new gb(n, hb);
      f.src =
        h instanceof gb && h.constructor === gb
          ? h.h
          : "type_error:TrustedResourceUrl";
      var p,
        q,
        r,
        t =
          null ==
          (r = (q = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : r.call(q, "script[nonce]");
      (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", p);
      Mb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var u = D.getElementsByTagName("script")[0] || D.body || D.head;
        u.parentNode.insertBefore(f, u);
      }
      return f;
    },
    Rb = function () {
      if (Kb) {
        var a = Kb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Sb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var h = e,
        l = !1;
      h || ((h = D.createElement("iframe")), (l = !0));
      Pb(h, c, Ob);
      d &&
        k(d, function (n, p) {
          h.dataset[n] = p;
        });
      f &&
        ((h.height = "0"),
        (h.width = "0"),
        (h.style.display = "none"),
        (h.style.visibility = "hidden"));
      if (l) {
        var m = (D.body && D.body.lastChild) || D.body || D.head;
        m.parentNode.insertBefore(h, m);
      }
      Mb(h, b);
      void 0 !== a && (h.src = a);
      return h;
    },
    Tb = function (a, b, c, d) {
      var e = new Image(1, 1);
      Pb(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    Ub = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Vb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    E = function (a) {
      z.setTimeout(a, 0);
    },
    Wb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Xb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Yb = function (a) {
      var b = D.createElement("div"),
        c = b,
        d = Hb("A<div>" + a + "</div>");
      1 === c.nodeType && Bb(c);
      c.innerHTML = Ab(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Zb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, h = 0; f && h <= c; h++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    $b = function (a) {
      var b;
      try {
        b = Jb.sendBeacon && Jb.sendBeacon(a);
      } catch (c) {
        ab("TAGGING", 15);
      }
      b || Tb(a);
    },
    ac = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    bc = function (a) {
      var b = {
        headers: { "Attribution-Reporting-Eligible": "trigger" },
        keepalive: !0,
        attributionReporting: { eventSourceEligible: !0, triggerEligible: !0 },
      };
      try {
        z.fetch(a, b);
      } catch (c) {}
    },
    cc = function () {
      var a = z.performance;
      if (a && ta(a.now)) return a.now();
    },
    dc = function () {
      return z.performance || void 0;
    }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var ec = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    fc = function (a) {
      if (null == a) return String(a);
      var b = ec.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    hc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    ic = function (a) {
      if (!a || "object" != fc(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !hc(a, "constructor") &&
          !hc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || hc(a, b);
    },
    H = function (a, b) {
      var c = b || ("array" == fc(a) ? [] : {}),
        d;
      for (d in a)
        if (hc(a, d)) {
          var e = a[d];
          "array" == fc(e)
            ? ("array" != fc(c[d]) && (c[d] = []), (c[d] = H(e, c[d])))
            : ic(e)
            ? (ic(c[d]) || (c[d] = {}), (c[d] = H(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var jc = function (a) {
    if (void 0 == a || va(a) || ic(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  function kc(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  function lc(a) {
    switch (a) {
      case 1:
        return "G";
      case 3:
        return "g";
      case 2:
        return "D";
      case 4:
        return "d";
      case 0:
        return "g";
      default:
        return "g";
    }
  }
  function mc(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + kc(c) + kc(d);
      case 1:
        return "G2" + lc(c) + lc(d);
      default:
        return "g1--";
    }
  }
  var nc = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Fi: a("consent"),
      vg: a("convert_case_to"),
      wg: a("convert_false_to"),
      xg: a("convert_null_to"),
      yg: a("convert_true_to"),
      zg: a("convert_undefined_to"),
      Tl: a("debug_mode_metadata"),
      ia: a("function"),
      Df: a("instance_name"),
      Lj: a("live_only"),
      Mj: a("malware_disabled"),
      Nj: a("metadata"),
      Qj: a("original_activity_id"),
      bm: a("original_vendor_template_id"),
      am: a("once_on_load"),
      Pj: a("once_per_event"),
      Ch: a("once_per_load"),
      hm: a("priority_override"),
      im: a("respected_consent_types"),
      Gh: a("setup_tags"),
      od: a("tag_id"),
      Lh: a("teardown_tags"),
    };
  })();
  var Lc = [],
    Mc = function (a) {
      return void 0 == Lc[a] ? !1 : Lc[a];
    };
  var Nc;
  var Oc = [],
    Pc = [],
    Qc = [],
    Rc = [],
    Sc = [],
    Tc = {},
    Uc,
    Vc,
    Wc = function (a) {
      Vc = Vc || a;
    },
    Xc = function (a) {},
    Yc,
    Zc = [],
    $c = function (a, b) {
      var c = a[nc.ia],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = Tc[c],
        f = b && 2 === b.type && d.kg && e && -1 !== Zc.indexOf(c),
        h = {},
        l = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          0 === m.indexOf("vtp_") &&
          (e && d && d.Qh && d.Qh(a[m]), e && (h[m] = a[m]), !e || f) &&
          (l[m.substr(4)] = a[m]);
      e && d && d.Ph && (h.vtp_gtmCachedValues = d.Ph);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.index;
            if (null == p) n = "";
            else {
              var q;
              switch (b.type) {
                case 2:
                  q = Oc[p];
                  break;
                case 1:
                  q = Rc[p];
                  break;
                default:
                  n = "";
                  break a;
              }
              var r = q && q[nc.Df];
              n = r ? String(r) : "";
            }
          }
          b.name = n;
        }
        e && ((h.vtp_gtmEntityIndex = b.index), (h.vtp_gtmEntityName = b.name));
      }
      var t, u;
      e && (t = e(h));
      if (!e || f) u = Nc(c, l, b);
      f &&
        d &&
        (jc(t)
          ? typeof t !== typeof u && d.kg(d.id, c)
          : t !== u && d.kg(d.id, c));
      return e ? t : u;
    },
    bd = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = ad(a[e], b, c));
      return d;
    },
    ad = function (a, b, c) {
      if (va(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(ad(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var h = Oc[f];
            if (!h || b.Uf(h)) return;
            c[f] = !0;
            var l = String(h[nc.Df]);
            try {
              var m = bd(h, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = $c(m, { event: b, index: f, type: 2, name: l });
              Yc && (d = Yc.gk(d, m));
            } catch (y) {
              b.bi && b.bi(y, Number(f), l), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[ad(a[n], b, c)] = ad(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = ad(a[q], b, c);
              Vc && (p = p || Vc.Rk(r));
              d.push(r);
            }
            return Vc && p ? Vc.jk(d) : d.join("");
          case "escape":
            d = ad(a[1], b, c);
            if (Vc && va(a[1]) && "macro" === a[1][0] && Vc.Sk(a))
              return Vc.sl(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) oc[a[t]] && (d = oc[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Rc[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { Uh: a[2], index: u });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v[nc.ia] = a[1];
            var w = cd(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + ".",
            );
        }
      }
      return a;
    },
    cd = function (a, b, c) {
      try {
        return Uc(bd(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    dd = function (a) {
      var b = a[nc.ia];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!Tc[b];
    };
  var hd = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = ed(a), f = 0; f < Pc.length; f++) {
        var h = Pc[f],
          l = fd(h, e);
        if (l) {
          for (var m = h.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(h.block || []);
        } else null === l && b(h.block || []);
      }
      for (var p = [], q = 0; q < Rc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    fd = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], h = 0; h < f.length; h++) {
        var l = b(f[h]);
        if (2 === l) return null;
        if (1 === l) return !1;
      }
      return !0;
    },
    ed = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = cd(Qc[c], a));
        return b[c];
      };
    };
  var id = {
    gk: function (a, b) {
      b[nc.vg] &&
        "string" === typeof a &&
        (a = 1 == b[nc.vg] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(nc.xg) && null === a && (a = b[nc.xg]);
      b.hasOwnProperty(nc.zg) && void 0 === a && (a = b[nc.zg]);
      b.hasOwnProperty(nc.yg) && !0 === a && (a = b[nc.yg]);
      b.hasOwnProperty(nc.wg) && !1 === a && (a = b[nc.wg]);
      return a;
    },
  };
  var wd = [
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector",
    ],
    xd = new Aa();
  var Ed = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Fd(a, b) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      (a << 2) | b
    ];
  }
  var Hd = function (a) {
      return Gd ? D.querySelectorAll(a) : null;
    },
    Id = function (a, b) {
      if (!Gd) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!D.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Jd = !1;
  if (D.querySelectorAll)
    try {
      var Kd = D.querySelectorAll(":root");
      Kd && 1 == Kd.length && Kd[0] == D.documentElement && (Jd = !0);
    } catch (a) {}
  var Gd = Jd;
  var J = function (a) {
    ab("GTM", a);
  };
  var K = {
      g: {
        Ta: "ad_personalization",
        F: "ad_storage",
        J: "ad_user_data",
        N: "analytics_storage",
        Vb: "region",
        Od: "consent_updated",
        Xe: "wait_for_update",
        Ji: "ads",
        Sl: "all",
        Ki: "android",
        Li: "chrome",
        Mi: "playstore",
        Ni: "search",
        Oi: "shopping",
        Pi: "youtube",
        Qi: "app_remove",
        Ri: "app_store_refund",
        Si: "app_store_subscription_cancel",
        Ti: "app_store_subscription_convert",
        Ui: "app_store_subscription_renew",
        Ag: "add_payment_info",
        Bg: "add_shipping_info",
        Wb: "add_to_cart",
        Xb: "remove_from_cart",
        Cg: "view_cart",
        Eb: "begin_checkout",
        Yb: "select_item",
        Ua: "view_item_list",
        hb: "select_promotion",
        Va: "view_promotion",
        ka: "purchase",
        Zb: "refund",
        xa: "view_item",
        Dg: "add_to_wishlist",
        Vi: "exception",
        Wi: "first_open",
        Xi: "first_visit",
        la: "gtag.config",
        Ha: "gtag.get",
        Yi: "in_app_purchase",
        ac: "page_view",
        Zi: "screen_view",
        aj: "session_start",
        bj: "timing_complete",
        cj: "track_social",
        Qd: "user_engagement",
        ib: "gclid",
        ma: "ads_data_redaction",
        Z: "allow_ad_personalization_signals",
        cf: "allow_custom_scripts",
        df: "allow_display_features",
        Rd: "allow_enhanced_conversions",
        jb: "allow_google_signals",
        Ba: "allow_interest_groups",
        dj: "app_id",
        ej: "app_installer_id",
        fj: "app_name",
        gj: "app_version",
        bc: "auid",
        ij: "auto_detection_enabled",
        Fb: "aw_remarketing",
        ef: "aw_remarketing_only",
        Sd: "discount",
        Td: "aw_feed_country",
        Ud: "aw_feed_language",
        T: "items",
        Vd: "aw_merchant_id",
        Eg: "aw_basket_type",
        Ac: "campaign_content",
        Bc: "campaign_id",
        Cc: "campaign_medium",
        Dc: "campaign_name",
        Ec: "campaign",
        Fc: "campaign_source",
        Gc: "campaign_term",
        Wa: "client_id",
        jj: "content_group",
        kj: "content_type",
        Ia: "conversion_cookie_prefix",
        Hc: "conversion_id",
        ya: "conversion_linker",
        Gb: "conversion_api",
        Oa: "cookie_domain",
        Ca: "cookie_expires",
        Pa: "cookie_flags",
        fc: "cookie_name",
        Ic: "cookie_path",
        Ja: "cookie_prefix",
        kb: "cookie_update",
        hc: "country",
        na: "currency",
        Wd: "customer_lifetime_value",
        Jc: "custom_map",
        Fg: "gcldc",
        lj: "debug_mode",
        W: "developer_id",
        mj: "disable_merchant_reported_purchases",
        Kc: "dc_custom_params",
        nj: "dc_natural_search",
        Gg: "dynamic_event_settings",
        Hg: "affiliation",
        Xd: "checkout_option",
        ff: "checkout_step",
        Ig: "coupon",
        Lc: "item_list_name",
        hf: "list_name",
        oj: "promotions",
        Mc: "shipping",
        jf: "tax",
        Yd: "engagement_time_msec",
        Nc: "enhanced_client_id",
        Zd: "enhanced_conversions",
        Jg: "enhanced_conversions_automatic_settings",
        ae: "estimated_delivery_date",
        kf: "euid_logged_in_state",
        Oc: "event_callback",
        pj: "event_category",
        lb: "event_developer_id_string",
        qj: "event_label",
        Kg: "event",
        be: "event_settings",
        ce: "event_timeout",
        rj: "description",
        sj: "fatal",
        tj: "experiments",
        lf: "firebase_id",
        de: "first_party_collection",
        ee: "_x_20",
        Hb: "_x_19",
        Lg: "fledge",
        Mg: "flight_error_code",
        Ng: "flight_error_message",
        Og: "fl_activity_category",
        Pg: "fl_activity_group",
        nf: "fl_advertiser_id",
        Qg: "fl_ar_dedupe",
        Rg: "fl_random_number",
        Sg: "tran",
        Tg: "u",
        fe: "gac_gclid",
        ic: "gac_wbraid",
        Ug: "gac_wbraid_multiple_conversions",
        Vg: "ga_restrict_domain",
        pf: "ga_temp_client_id",
        he: "gdpr_applies",
        Wg: "geo_granularity",
        nb: "value_callback",
        Ya: "value_key",
        Vl: "google_ono",
        Za: "google_signals",
        Xg: "google_tld",
        ie: "groups",
        Yg: "gsa_experiment_id",
        Zg: "iframe_state",
        je: "ignore_referrer",
        qf: "internal_traffic_results",
        pb: "is_legacy_converted",
        qb: "is_legacy_loaded",
        ke: "is_passthrough",
        ah: "_lps",
        Da: "language",
        rf: "legacy_developer_id_string",
        za: "linker",
        jc: "accept_incoming",
        rb: "decorate_forms",
        O: "domains",
        Ib: "url_position",
        bh: "method",
        uj: "name",
        Pc: "new_customer",
        eh: "non_interaction",
        vj: "optimize_id",
        wj: "page_hostname",
        Qc: "page_path",
        Aa: "page_referrer",
        sb: "page_title",
        fh: "passengers",
        gh: "phone_conversion_callback",
        xj: "phone_conversion_country_code",
        hh: "phone_conversion_css_class",
        yj: "phone_conversion_ids",
        ih: "phone_conversion_number",
        jh: "phone_conversion_options",
        Rc: "quantity",
        Sc: "redact_device_info",
        tf: "redact_enhanced_user_id",
        zj: "redact_ga_client_id",
        Aj: "redact_user_id",
        me: "referral_exclusion_definition",
        Jb: "restricted_data_processing",
        Bj: "retoken",
        Cj: "sample_rate",
        uf: "screen_name",
        tb: "screen_resolution",
        Dj: "search_term",
        Ka: "send_page_view",
        Kb: "send_to",
        Tc: "server_container_url",
        Uc: "session_duration",
        ne: "session_engaged",
        vf: "session_engaged_time",
        ub: "session_id",
        oe: "session_number",
        Vc: "delivery_postal_code",
        kh: "temporary_client_id",
        wf: "topmost_url",
        Ej: "tracking_id",
        xf: "traffic_type",
        qa: "transaction_id",
        Lb: "transport_url",
        lh: "trip_type",
        Mb: "update",
        vb: "url_passthrough",
        Wc: "_user_agent_architecture",
        Xc: "_user_agent_bitness",
        Yc: "_user_agent_full_version_list",
        Zc: "_user_agent_mobile",
        ad: "_user_agent_model",
        bd: "_user_agent_platform",
        dd: "_user_agent_platform_version",
        ed: "_user_agent_wow64",
        ra: "user_data",
        mh: "user_data_auto_latency",
        nh: "user_data_auto_meta",
        oh: "user_data_auto_multi",
        ph: "user_data_auto_selectors",
        qh: "user_data_auto_status",
        yf: "user_data_mode",
        qe: "user_data_settings",
        wa: "user_id",
        La: "user_properties",
        rh: "_user_region",
        sh: "us_privacy_string",
        aa: "value",
        kc: "wbraid",
        th: "wbraid_multiple_conversions",
        zh: "_host_name",
        Ah: "_in_page_command",
        Bh: "_is_passthrough_cid",
        jd: "non_personalized_ads",
        nd: "_sst_parameters",
        Xa: "conversion_label",
        oa: "page_location",
        ob: "global_developer_id_string",
        pe: "tc_privacy_string",
      },
    },
    he = {},
    ie = Object.freeze(
      ((he[K.g.Z] = 1),
      (he[K.g.df] = 1),
      (he[K.g.Rd] = 1),
      (he[K.g.jb] = 1),
      (he[K.g.T] = 1),
      (he[K.g.Oa] = 1),
      (he[K.g.Ca] = 1),
      (he[K.g.Pa] = 1),
      (he[K.g.fc] = 1),
      (he[K.g.Ic] = 1),
      (he[K.g.Ja] = 1),
      (he[K.g.kb] = 1),
      (he[K.g.Jc] = 1),
      (he[K.g.W] = 1),
      (he[K.g.Gg] = 1),
      (he[K.g.Oc] = 1),
      (he[K.g.be] = 1),
      (he[K.g.ce] = 1),
      (he[K.g.de] = 1),
      (he[K.g.Vg] = 1),
      (he[K.g.Za] = 1),
      (he[K.g.Xg] = 1),
      (he[K.g.ie] = 1),
      (he[K.g.qf] = 1),
      (he[K.g.pb] = 1),
      (he[K.g.qb] = 1),
      (he[K.g.za] = 1),
      (he[K.g.tf] = 1),
      (he[K.g.me] = 1),
      (he[K.g.Jb] = 1),
      (he[K.g.Ka] = 1),
      (he[K.g.Kb] = 1),
      (he[K.g.Tc] = 1),
      (he[K.g.Uc] = 1),
      (he[K.g.vf] = 1),
      (he[K.g.Vc] = 1),
      (he[K.g.Lb] = 1),
      (he[K.g.Mb] = 1),
      (he[K.g.qe] = 1),
      (he[K.g.La] = 1),
      (he[K.g.nd] = 1),
      he),
    );
  Object.freeze([
    K.g.oa,
    K.g.Aa,
    K.g.sb,
    K.g.Da,
    K.g.uf,
    K.g.wa,
    K.g.lf,
    K.g.jj,
  ]);
  var je = {},
    ke = Object.freeze(
      ((je[K.g.Qi] = 1),
      (je[K.g.Ri] = 1),
      (je[K.g.Si] = 1),
      (je[K.g.Ti] = 1),
      (je[K.g.Ui] = 1),
      (je[K.g.Wi] = 1),
      (je[K.g.Xi] = 1),
      (je[K.g.Yi] = 1),
      (je[K.g.aj] = 1),
      (je[K.g.Qd] = 1),
      je),
    ),
    le = {},
    me = Object.freeze(
      ((le[K.g.Ag] = 1),
      (le[K.g.Bg] = 1),
      (le[K.g.Wb] = 1),
      (le[K.g.Xb] = 1),
      (le[K.g.Cg] = 1),
      (le[K.g.Eb] = 1),
      (le[K.g.Yb] = 1),
      (le[K.g.Ua] = 1),
      (le[K.g.hb] = 1),
      (le[K.g.Va] = 1),
      (le[K.g.ka] = 1),
      (le[K.g.Zb] = 1),
      (le[K.g.xa] = 1),
      (le[K.g.Dg] = 1),
      le),
    ),
    ne = Object.freeze([K.g.Z, K.g.jb, K.g.kb, K.g.Mb]),
    pe = Object.freeze([].concat(ne)),
    qe = Object.freeze([K.g.Ca, K.g.ce, K.g.Uc, K.g.vf, K.g.Yd]),
    re = Object.freeze([].concat(qe)),
    se = {},
    te =
      ((se[K.g.F] = "1"),
      (se[K.g.N] = "2"),
      (se[K.g.J] = "3"),
      (se[K.g.Ta] = "4"),
      se),
    ue = {},
    ve = Object.freeze(
      ((ue[K.g.Z] = 1),
      (ue[K.g.Rd] = 1),
      (ue[K.g.Ba] = 1),
      (ue[K.g.Fb] = 1),
      (ue[K.g.ef] = 1),
      (ue[K.g.Sd] = 1),
      (ue[K.g.Td] = 1),
      (ue[K.g.Ud] = 1),
      (ue[K.g.T] = 1),
      (ue[K.g.Vd] = 1),
      (ue[K.g.Ia] = 1),
      (ue[K.g.ya] = 1),
      (ue[K.g.Oa] = 1),
      (ue[K.g.Ca] = 1),
      (ue[K.g.Pa] = 1),
      (ue[K.g.Ja] = 1),
      (ue[K.g.na] = 1),
      (ue[K.g.Wd] = 1),
      (ue[K.g.W] = 1),
      (ue[K.g.mj] = 1),
      (ue[K.g.Zd] = 1),
      (ue[K.g.ae] = 1),
      (ue[K.g.lf] = 1),
      (ue[K.g.de] = 1),
      (ue[K.g.pb] = 1),
      (ue[K.g.qb] = 1),
      (ue[K.g.Da] = 1),
      (ue[K.g.Pc] = 1),
      (ue[K.g.oa] = 1),
      (ue[K.g.Aa] = 1),
      (ue[K.g.gh] = 1),
      (ue[K.g.hh] = 1),
      (ue[K.g.ih] = 1),
      (ue[K.g.jh] = 1),
      (ue[K.g.Jb] = 1),
      (ue[K.g.Ka] = 1),
      (ue[K.g.Kb] = 1),
      (ue[K.g.Tc] = 1),
      (ue[K.g.Vc] = 1),
      (ue[K.g.qa] = 1),
      (ue[K.g.Lb] = 1),
      (ue[K.g.Mb] = 1),
      (ue[K.g.vb] = 1),
      (ue[K.g.ra] = 1),
      (ue[K.g.wa] = 1),
      (ue[K.g.aa] = 1),
      ue),
    ),
    we = {},
    xe = Object.freeze(
      ((we[K.g.Ni] = "s"),
      (we[K.g.Pi] = "y"),
      (we[K.g.Ki] = "n"),
      (we[K.g.Li] = "c"),
      (we[K.g.Mi] = "p"),
      (we[K.g.Oi] = "h"),
      (we[K.g.Ji] = "a"),
      we),
    );
  Object.freeze(K.g);
  var ye = {},
    ze = (z.google_tag_manager = z.google_tag_manager || {}),
    Ae = Math.random();
  ye.Ef = "38l0";
  ye.md = Number("0") || 0;
  ye.da = "dataLayer";
  ye.Hi = "";
  var Be = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    Ce = { __paused: 1, __tg: 1 },
    De;
  for (De in Be) Be.hasOwnProperty(De) && (Ce[De] = 1);
  var Ee = Ea(""),
    Fe,
    Ge = !1;
  Fe = Ge;
  var He,
    Ie = !1;
  He = Ie;
  var Je,
    Ke = !1;
  Je = Ke;
  var Le,
    Me = !1;
  Me = !0;
  Le = Me;
  ye.Pd = "www.googletagmanager.com";
  var Ne = "" + ye.Pd + (Fe ? "/gtag/js" : "/gtm.js"),
    Oe = null,
    Pe = null,
    Qe = {},
    Re = {},
    Se = {},
    Te = function () {
      var a = ze.sequence || 1;
      ze.sequence = a + 1;
      return a;
    };
  ye.Gi = "";
  var Ue = "";
  ye.we = Ue;
  var Ve = new Aa(),
    We = {},
    Xe = {},
    $e = {
      name: ye.da,
      set: function (a, b) {
        H(Qa(a, b), We);
        Ye();
      },
      get: function (a) {
        return Ze(a, 2);
      },
      reset: function () {
        Ve = new Aa();
        We = {};
        Ye();
      },
    },
    Ze = function (a, b) {
      return 2 != b ? Ve.get(a) : af(a);
    },
    af = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = We, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    bf = function (a, b) {
      Xe.hasOwnProperty(a) || (Ve.set(a, b), H(Qa(a, b), We), Ye());
    },
    Ye = function (a) {
      k(Xe, function (b, c) {
        Ve.set(b, c);
        H(Qa(b), We);
        H(Qa(b, c), We);
        a && delete Xe[b];
      });
    },
    cf = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? af(a) : Ve.get(a);
      "array" === fc(d) || "object" === fc(d) ? (c = H(d)) : (c = d);
      return c;
    };
  var M = [];
  M[5] = !0;
  M[6] = !0;
  M[12] = !0;
  M[7] = !0;
  M[8] = !0;
  M[22] = !0;
  M[9] = !0;
  M[10] = !0;
  M[11] = !0;
  M[14] = !0;
  M[15] = !0;
  M[16] = !0;
  M[18] = !0;
  M[24] = !0;
  M[25] = !0;
  M[26] = !0;
  M[28] = !0;
  M[20] = !0;
  M[29] = !0;
  M[32] = !0;
  M[33] = !0;
  M[34] = !0;
  M[35] = !0;
  M[37] = !0;
  M[38] = !0;
  M[40] = !0;
  M[42] = !0;
  M[43] = !0;
  M[44] = !0;
  M[45] = !0;
  M[56] = !0;
  M[57] = !0;
  M[58] = !0;
  M[59] = !0;
  M[61] = !0;
  M[62] = !0;
  M[70] = !0;
  M[73] = !0;
  a: {
    for (var kf = void 0, lf = void 0, mf = 0; kf === lf; )
      if (
        ((kf = Math.floor(2 * Math.random())),
        (lf = Math.floor(2 * Math.random())),
        mf++,
        20 < mf)
      )
        break a;
    kf ? (M[76] = !0) : (M[77] = !0);
  }
  P(77) ? (Lc[6] = !0) : P(76) && (Lc[5] = !0);
  M[78] = !0;
  M[81] = !0;
  M[82] = !0;
  M[84] = !0;
  M[86] = !0;
  M[88] = !0;

  function P(a) {
    return !!M[a];
  }
  var nf = function (a) {
    ab("HEALTH", a);
  };
  var of;
  try {
    of = JSON.parse(Za("e30"));
  } catch (a) {
    J(123), nf(2), (of = {});
  }
  var pf = function () {
      return of["0"] || "";
    },
    qf = function () {
      var a = !1;
      return a;
    },
    rf = function () {
      var a = "";
      return a;
    },
    sf = function () {
      var a = !1;
      return a;
    },
    wf = function () {
      var a = "";
      return a;
    };
  var xf = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var yf = function (a) {
    yf[" "](a);
    return a;
  };
  yf[" "] = function () {};
  var Af = function () {
    var a = zf,
      b = "Sf";
    if (a.Sf && a.hasOwnProperty(b)) return a.Sf;
    var c = new a();
    return (a.Sf = c);
  };
  var zf = function () {
    var a = {};
    this.h = function () {
      var b = xf.h,
        c = xf.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.B = function () {
      a[xf.h] = !0;
    };
  };
  var Bf = !1,
    Cf = !1,
    Df = {},
    Ef = { ad_storage: !1, ad_user_data: !1, ad_personalization: !1 };
  function Ff() {
    var a = Lb("google_tag_data", {});
    return (a.ics = a.ics || new Gf());
  }
  var Gf = function () {
    this.entries = {};
    this.cps = {};
    this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedSetCps =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.h = [];
  };
  Gf.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    ab("TAGGING", 19);
    void 0 == b ? ab("TAGGING", 18) : Hf(this, a, "granted" === b, c, d, e, f);
  };
  Gf.prototype.waitForUpdate = function (a, b) {
    for (var c = 0; c < a.length; c++)
      Hf(this, a[c], void 0, void 0, "", "", b);
  };
  var Hf = function (a, b, c, d, e, f, h) {
    var l = a.entries,
      m = l[b] || {},
      n = m.region,
      p = d && g(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (If(p, n, e, f)) {
      var q = !!(h && 0 < h && void 0 === m.update),
        r = {
          region: p,
          declare_region: m.declare_region,
          implicit: m.implicit,
          default: void 0 !== c ? c : m.default,
          declare: m.declare,
          update: m.update,
          quiet: q,
        };
      if ("" !== e || !1 !== m.default) l[b] = r;
      q &&
        z.setTimeout(function () {
          if (l[b] === r && r.quiet) {
            r.quiet = !1;
            var t = [b];
            if (Mc(4))
              for (var u in Df)
                Df.hasOwnProperty(u) && Df[u] === b && t.push(u);
            for (var v = 0; v < t.length; v++) Jf(a, t[v]);
            a.notifyListeners();
            ab("TAGGING", 2);
          }
        }, h);
    }
  };
  ca = Gf.prototype;
  ca.update = function (a, b) {
    this.usedDefault ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (void 0 != b) {
      var c = this.getConsentState(a),
        d = this.entries,
        e = (d[a] = d[a] || {});
      e.update = "granted" === b;
      var f = this.getConsentState(a),
        h = [a];
      if (Mc(4))
        for (var l in Df) Df.hasOwnProperty(l) && Df[l] === a && h.push(l);
      if (e.quiet) {
        e.quiet = !1;
        for (var m = 0; m < h.length; m++) Jf(this, h[m]);
      } else if (f !== c) for (var n = 0; n < h.length; n++) Jf(this, h[n]);
    }
  };
  ca.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      h = f[a] || {},
      l = h.declare_region,
      m = c && g(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (If(m, l, d, e)) {
      var n = {
        region: h.region,
        declare_region: m,
        declare: "granted" === b,
        implicit: h.implicit,
        default: h.default,
        update: h.update,
        quiet: h.quiet,
      };
      if ("" !== d || !1 !== h.declare) f[a] = n;
    }
  };
  ca.implicit = function (a, b) {
    this.usedImplicit = this.active = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    !1 !== d.implicit && (d.implicit = "granted" === b);
  };
  ca.getConsentState = function (a) {
    return Kf(this, a);
  };
  ca.setCps = function (a, b, c, d, e) {
    var f;
    a: {
      var h = this.cps,
        l,
        m = h[a] || {},
        n = m.region,
        p = c && g(c) ? c.toUpperCase() : void 0;
      l = d.toUpperCase();
      if (If(p, n, l, e.toUpperCase())) {
        var q = { enabled: "granted" === b, region: p };
        if ("" !== l || !1 !== m.enabled) {
          h[a] = q;
          f = !0;
          break a;
        }
      }
      f = !1;
    }
    f && (this.usedSetCps = !0);
  };
  ca.addListener = function (a, b) {
    this.h.push({ consentTypes: a, rk: b });
  };
  var Jf = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      va(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.hi = !0);
    }
  };
  Gf.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.hi) {
        d.hi = !1;
        try {
          d.rk({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  function If(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  function Kf(a, b) {
    var c = a.entries,
      d = c[b] || {},
      e = d.update;
    if (void 0 !== e) return e ? 1 : 2;
    e = d.default;
    if (void 0 !== e) return e ? 1 : 2;
    if (Mc(4) && Df.hasOwnProperty(b)) {
      var f = c[Df[b]] || {};
      e = f.update;
      if (void 0 !== e) return e ? 1 : 2;
      e = f.default;
      if (void 0 !== e) return e ? 1 : 2;
    }
    e = d.declare;
    if (void 0 !== e) return e ? 1 : 2;
    if (Mc(3)) {
      e = d.implicit;
      if (void 0 !== e) return e ? 3 : 4;
      if (Ef.hasOwnProperty(b)) return Ef[b] ? 3 : 4;
    }
    return 0;
  }
  var Lf = function (a) {
      var b = Ff();
      b.accessedAny = !0;
      switch (Kf(b, a)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    },
    Mf = function (a) {
      var b = Ff();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Nf = function () {
      if (!Af().h()) return !1;
      var a = Ff();
      a.accessedAny = !0;
      return a.active;
    },
    Of = function () {
      var a = Ff();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Pf = function (a, b) {
      Ff().addListener(a, b);
    },
    Qf = function (a, b) {
      Ff().notifyListeners(a, b);
    },
    Rf = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Mf(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Pf(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Sf = function (a, b) {
      function c() {
        for (var f = [], h = 0; h < d.length; h++) {
          var l = d[h];
          Lf(l) && !e[l] && (f.push(l), (e[l] = !0));
        }
        return f;
      }
      var d = g(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Pf(d, function (f) {
          var h = c();
          0 < h.length && ((f.consentTypes = h), a(f));
        });
    };
  function Tf() {}
  function Uf() {}
  var Vf = [K.g.F, K.g.N, K.g.J, K.g.Ta],
    Wf = function (a) {
      for (
        var b = a[K.g.Vb], c = Array.isArray(b) ? b : [b], d = { yd: 0 };
        d.yd < c.length;
        d = { yd: d.yd }, ++d.yd
      )
        k(
          a,
          (function (e) {
            return function (f, h) {
              if (f !== K.g.Vb) {
                var l = c[e.yd],
                  m = pf(),
                  n = of["1"] || "";
                Cf = !0;
                Bf && ab("TAGGING", 20);
                Ff().declare(f, h, l, m, n);
              }
            };
          })(d),
        );
    },
    Xf = function (a) {
      var b = a[K.g.Vb];
      b && J(40);
      var c = a[K.g.Xe];
      c && J(41);
      for (
        var d = va(b) ? b : [b], e = { zd: 0 };
        e.zd < d.length;
        e = { zd: e.zd }, ++e.zd
      )
        k(
          a,
          (function (f) {
            return function (h, l) {
              if (h !== K.g.Vb && h !== K.g.Xe) {
                var m = d[f.zd],
                  n = Number(c),
                  p = pf(),
                  q = of["1"] || "";
                Bf = !0;
                Cf && ab("TAGGING", 20);
                Ff().default(h, l, m, p, q, n);
              }
            };
          })(e),
        );
    },
    Yf = function (a, b) {
      k(a, function (c, d) {
        Bf = !0;
        Cf && ab("TAGGING", 20);
        Ff().update(c, d);
      });
      Qf(b.eventId, b.priorityId);
    },
    Zf = function (a) {
      for (
        var b = a[K.g.Vb], c = Array.isArray(b) ? b : [b], d = { Ad: 0 };
        d.Ad < c.length;
        d = { Ad: d.Ad }, ++d.Ad
      )
        k(
          a,
          (function (e) {
            return function (f, h) {
              if (f !== K.g.Vb) {
                var l = c[e.Ad],
                  m = pf(),
                  n = of["1"] || "";
                Ff().setCps(f, h, l, m, n);
              }
            };
          })(d),
        );
    },
    Q = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return Lf(b);
      });
    },
    $f = function (a, b) {
      Sf(a, b);
    },
    ag = function (a, b) {
      Rf(a, b);
    },
    bg = function (a) {
      Ff().waitForUpdate(a, 500);
    };
  var cg = function (a) {
      var b = String(a[nc.ia] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    dg =
      0 <= z.location.search.indexOf("?gtm_latency=") ||
      0 <= z.location.search.indexOf("&gtm_latency=");
  var fg = function (a) {
      var b = eg();
      b.pending || (b.pending = []);
      xa(b.pending, function (c) {
        return (
          c.target.ctid === a.ctid && c.target.isDestination === a.isDestination
        );
      }) || b.pending.push({ target: a, onLoad: void 0 });
    },
    gg = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    eg = function () {
      var a = Lb("google_tag_data", {}),
        b = a.tidr;
      b || ((b = new gg()), (a.tidr = b));
      return b;
    };
  var hg = {},
    ig = !1,
    jg = { ctid: "OPT-TC5SBN6", If: "", Me: "OPT-TC5SBN6", gi: "OPT-TC5SBN6" };
  hg.se = Ea("");
  var lg = function () {
      var a = jg.Me ? jg.Me.split("|") : [jg.ctid];
      return ig ? a.map(kg) : a;
    },
    ng = function () {
      var a = mg();
      return ig ? a.map(kg) : a;
    },
    pg = function () {
      return og(jg.ctid);
    },
    qg = function () {
      return og(jg.If || "_" + jg.ctid);
    },
    mg = function () {
      return jg.gi ? jg.gi.split("|") : [];
    },
    rg = function (a) {
      var b = eg();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    og = function (a) {
      return ig ? kg(a) : a;
    },
    kg = function (a) {
      return "siloed_" + a;
    },
    sg = function (a) {
      a = String(a);
      return ig && 0 === a.indexOf("siloed_") ? a.substring(7) : a;
    },
    tg = function () {
      var a = !1;
      if (a) {
        var b = eg();
        if (b.siloed) {
          for (
            var c = [],
              d = jg.Me ? jg.Me.split("|") : [jg.ctid],
              e = mg(),
              f = {},
              h = 0;
            h < b.siloed.length;
            f = { rd: f.rd }, h++
          )
            (f.rd = b.siloed[h]),
              !ig &&
              xa(
                f.rd.isDestination ? e : d,
                (function (l) {
                  return function (m) {
                    return m === l.rd.ctid;
                  };
                })(f),
              )
                ? (ig = !0)
                : c.push(f.rd);
          b.siloed = c;
        }
      }
    };
  function ug() {
    var a = eg();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = lg(), f = ng(), h = {}, l = 0;
        l < a.pending.length;
        h = { vc: h.vc }, l++
      )
        (h.vc = a.pending[l]),
          xa(
            h.vc.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.vc.target.ctid;
              };
            })(h),
          )
            ? d || ((b = h.vc.onLoad), (d = !0))
            : c.push(h.vc);
      a.pending = c;
      if (b)
        try {
          b(qg());
        } catch (m) {}
    }
  }
  var vg = function () {
      for (var a = eg(), b = lg(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d
          ? ((d.state = 2), (d.containers = lg()), (d.destinations = ng()))
          : (a.container[b[c]] = {
              state: 2,
              containers: lg(),
              destinations: ng(),
            });
      }
      for (var e = ng(), f = 0; f < e.length; f++) {
        var h = a.destination[e[f]];
        h && 0 === h.state && J(93);
        h
          ? ((h.state = 2), (h.containers = lg()), (h.destinations = ng()))
          : (a.destination[e[f]] = {
              state: 2,
              containers: lg(),
              destinations: ng(),
            });
      }
      a.canonical[qg()] = {};
      ug();
    },
    wg = function (a) {
      return !!eg().container[a];
    },
    xg = function () {
      return { ctid: pg(), isDestination: hg.se };
    };
  function yg(a) {
    var b = eg();
    (b.siloed = b.siloed || []).push(a);
  }
  var zg = function () {
      var a = eg().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    Ag = function () {
      var a = {};
      k(eg().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    },
    Bg = function (a) {
      return !!(
        a &&
        a.parent &&
        a.context &&
        1 === a.context.source &&
        0 !== a.parent.ctid.indexOf("GTM-")
      );
    };
  var Cg = { sampleRate: "0.005000", Ci: "", Bi: Number("5"), xm: Number("") },
    Dg = [];
  function Eg(a) {
    Dg.push(a);
  }
  var Fg = !1,
    Gg;
  if (!(Gg = dg)) {
    var Hg = Math.random(),
      Ig = Cg.sampleRate;
    Gg = Hg < Number(Ig);
  }
  var Jg = Gg,
    Kg = "https://www.googletagmanager.com/a?id=" + jg.ctid,
    Lg = void 0,
    Mg = {},
    Ng = void 0,
    Og = new (function () {
      var a = 5;
      0 < Cg.Bi && (a = Cg.Bi);
      this.h = 0;
      this.C = [];
      this.B = a;
    })(),
    Pg = 1e3;
  function Qg(a, b) {
    var c = Lg;
    if (void 0 === c)
      if (b) c = Te();
      else return "";
    for (var d = [Kg], e = 0; e < Dg.length; e++) {
      var f = Dg[e]({
        eventId: c,
        Cb: !!a,
        oi: function () {
          Fg = !0;
        },
      });
      "&" === f[0] && d.push(f);
    }
    d.push("&z=0");
    return d.join("");
  }
  function Rg() {
    Ng && (z.clearTimeout(Ng), (Ng = void 0));
    if (void 0 !== Lg && Sg) {
      var a;
      (a = Mg[Lg]) || (a = Og.h < Og.B ? !1 : 1e3 > Ja() - Og.C[Og.h % Og.B]);
      if (a || 0 >= Pg--) J(1), (Mg[Lg] = !0);
      else {
        var b = Og.h++ % Og.B;
        Og.C[b] = Ja();
        var c = Qg(!0);
        Tb(c);
        if (Fg) {
          var d = c.replace("/a?", "/td?");
          Tb(d);
        }
        Sg = Fg = !1;
      }
    }
  }
  var Sg = !1;
  function Tg(a) {
    Mg[a] ||
      (a !== Lg && (Rg(), (Lg = a)),
      (Sg = !0),
      Ng || (Ng = z.setTimeout(Rg, 500)),
      2022 <= Qg().length && Rg());
  }
  var Ug = ya();
  function Vg() {
    Ug = ya();
  }
  function Wg() {
    return ["&v=3&t=t", "&pid=" + Ug].join("");
  }
  var Xg = function (a, b, c, d, e, f, h, l, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.M = d;
      this.C = e;
      this.H = f;
      this.U = h;
      this.B = l;
      this.eventMetadata = m;
      this.onSuccess = n;
      this.onFailure = p;
      this.isGtmEvent = q;
    },
    T = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.M[b]) return a.M[b];
      if (void 0 !== a.C[b]) return a.C[b];
      Jg && Yg(a, a.H[b], a.U[b]) && (J(71), J(79));
      return void 0 !== a.H[b] ? a.H[b] : void 0 !== a.B[b] ? a.B[b] : c;
    },
    Zg = function (a) {
      function b(h) {
        for (var l = Object.keys(h), m = 0; m < l.length; ++m) c[l[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.M);
      b(a.C);
      b(a.H);
      if (Jg)
        for (var d = Object.keys(a.U), e = 0; e < d.length; e++) {
          var f = d[e];
          if (
            "event" !== f &&
            "gtm" !== f &&
            "tagTypeBlacklist" !== f &&
            !c.hasOwnProperty(f)
          ) {
            J(71);
            J(80);
            break;
          }
        }
      return Object.keys(c);
    },
    $g = function (a, b, c) {
      function d(m) {
        ic(m) &&
          k(m, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.B[b]), d(a.H[b]), d(a.C[b]), d(a.M[b]));
      (c && 2 !== c) || d(a.h[b]);
      if (Jg) {
        var h = f,
          l = e;
        e = {};
        f = !1;
        (c && 1 !== c) || (d(a.B[b]), d(a.U[b]), d(a.C[b]), d(a.M[b]));
        (c && 2 !== c) || d(a.h[b]);
        if (f !== h || Yg(a, e, l)) J(71), J(81);
        f = h;
        e = l;
      }
      return f ? e : void 0;
    },
    ah = function (a) {
      var b = [K.g.Ec, K.g.Ac, K.g.Bc, K.g.Cc, K.g.Dc, K.g.Fc, K.g.Gc],
        c = {},
        d = !1,
        e = function (l) {
          for (var m = 0; m < b.length; m++)
            void 0 !== l[b[m]] && ((c[b[m]] = l[b[m]]), (d = !0));
          return d;
        };
      if (e(a.h) || e(a.M) || e(a.C)) return c;
      e(a.H);
      if (Jg) {
        var f = c,
          h = d;
        c = {};
        d = !1;
        e(a.U);
        Yg(a, c, f) && (J(71), J(82));
        c = f;
        d = h;
      }
      if (d) return c;
      e(a.B);
      return c;
    },
    Yg = function (a, b, c) {
      if (!Jg) return !1;
      try {
        if (b === c) return !1;
        var d = fc(b);
        if (d !== fc(c) || !((ic(b) && ic(c)) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (Yg(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var h in b)
            if (!c.hasOwnProperty(h) || Yg(a, b[h], c[h])) return !0;
        }
      } catch (l) {
        J(72);
      }
      return !1;
    },
    bh = function (a, b) {
      this.Bf = a;
      this.Hj = b;
      this.H = {};
      this.hd = {};
      this.h = {};
      this.M = {};
      this.B = {};
      this.gd = {};
      this.C = {};
      this.zc = function () {};
      this.Db = function () {};
      this.U = !1;
    },
    jh = function (a, b) {
      a.H = b;
      return a;
    },
    kh = function (a, b) {
      a.hd = b;
      return a;
    },
    lh = function (a, b) {
      a.h = b;
      return a;
    },
    mh = function (a, b) {
      a.M = b;
      return a;
    },
    nh = function (a, b) {
      a.B = b;
      return a;
    },
    oh = function (a, b) {
      a.gd = b;
      return a;
    },
    ph = function (a, b) {
      a.C = b || {};
      return a;
    },
    qh = function (a, b) {
      a.zc = b;
      return a;
    },
    rh = function (a, b) {
      a.Db = b;
      return a;
    },
    sh = function (a, b) {
      a.U = b;
      return a;
    },
    th = function (a) {
      return new Xg(
        a.Bf,
        a.Hj,
        a.H,
        a.hd,
        a.h,
        a.M,
        a.B,
        a.gd,
        a.C,
        a.zc,
        a.Db,
        a.U,
      );
    };
  function uh(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var vh = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    wh = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var xh = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function yh() {
    return jb ? !!qb && !!qb.platform : !1;
  }
  function zh() {
    return tb("iPhone") && !tb("iPod") && !tb("iPad");
  }
  function Ah() {
    zh() || tb("iPad") || tb("iPod");
  }
  vb();
  ub() || tb("Trident") || tb("MSIE");
  tb("Edge");
  !tb("Gecko") ||
    (-1 != pb().toLowerCase().indexOf("webkit") && !tb("Edge")) ||
    tb("Trident") ||
    tb("MSIE") ||
    tb("Edge");
  -1 != pb().toLowerCase().indexOf("webkit") && !tb("Edge") && tb("Mobile");
  yh() || tb("Macintosh");
  yh() || tb("Windows");
  (yh() ? "Linux" === qb.platform : tb("Linux")) || yh() || tb("CrOS");
  var Bh = qa.navigator || null;
  Bh && (Bh.appVersion || "").indexOf("X11");
  yh() || tb("Android");
  zh();
  tb("iPad");
  tb("iPod");
  Ah();
  pb().toLowerCase().indexOf("kaios");
  var Ch = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var h = a.charCodeAt(e - 1);
        if (38 == h || 63 == h) {
          var l = a.charCodeAt(e + f);
          if (!l || 61 == l || 38 == l || 35 == l) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Dh = /#|$/,
    Eh = function (a, b) {
      var c = a.search(Dh),
        d = Ch(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "),
      );
    },
    Fh = /[?&]($|#)/,
    Gh = function (a, b, c) {
      for (
        var d, e = a.search(Dh), f = 0, h, l = [];
        0 <= (h = Ch(a, f, b, e));

      )
        l.push(a.substring(f, h)),
          (f = Math.min(a.indexOf("&", h) + 1 || e, e));
      l.push(a.slice(f));
      d = l.join("").replace(Fh, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var Hh = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              yf(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Ih = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Jh(a) {
    if (!a || !D.head) return null;
    var b = Kh("META");
    D.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Lh = function () {
      if (z.top == z) return 0;
      var a = z.location.ancestorOrigins;
      return a
        ? a[a.length - 1] == z.location.origin
          ? 1
          : 2
        : Hh(z.top)
        ? 1
        : 2;
    },
    Kh = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Mh(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Kh("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var h = a.google_image_requests,
            l = db(h, e);
          0 <= l && Array.prototype.splice.call(h, l, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      xh(e, "load", f);
      xh(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Oh = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Ih(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Nh(c, b);
    },
    Nh = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Mh(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Ph = function () {};
  var Qh = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Rh = function (a, b) {
      b = void 0 === b ? {} : b;
      this.B = a;
      this.h = null;
      this.M = {};
      this.Db = 0;
      var c;
      this.U = null != (c = b.Ll) ? c : 500;
      var d;
      this.H = null != (d = b.km) ? d : !1;
      this.C = null;
    };
  pa(Rh, Ph);
  var Th = function (a) {
    return "function" === typeof a.B.__tcfapi || null != Sh(a);
  };
  Rh.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.H },
      d = wh(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.U &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.U));
    var f = function (h, l) {
      clearTimeout(e);
      h
        ? ((c = h),
          (c.internalErrorState = Qh(c)),
          (c.internalBlockOnErrors = b.H),
          (l && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), l || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Uh(this, "addEventListener", f);
    } catch (h) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Rh.prototype.removeEventListener = function (a) {
    a && a.listenerId && Uh(this, "removeEventListener", null, a.listenerId);
  };
  var Wh = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var h = e;
      if (0 === h) return !1;
      var l = c;
      2 === c
        ? ((l = 0), 2 === h && (l = 1))
        : 3 === c && ((l = 1), 1 === h && (l = 0));
      var m;
      if (0 === l)
        if (a.purpose && a.vendor) {
          var n = Vh(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Vh(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === l
            ? a.purpose && a.vendor
              ? Vh(a.purpose.legitimateInterests, b) &&
                Vh(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Vh = function (a, b) {
      return !(!a || !a[b]);
    },
    Uh = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.B.__tcfapi) {
        var e = a.B.__tcfapi;
        e(b, 2, c, d);
      } else if (Sh(a)) {
        Xh(a);
        var f = ++a.Db;
        a.M[f] = c;
        if (a.h) {
          var h = {};
          a.h.postMessage(
            ((h.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            h),
            "*",
          );
        }
      } else c({}, !1);
    },
    Sh = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.B, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (l) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var h = c.parent;
              if (h && h != c) {
                f = h;
                break b;
              }
            } catch (l) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Xh = function (a) {
      a.C ||
        ((a.C = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.M[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        xh(a.B, "message", a.C));
    },
    Yh = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Qh(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (Oh({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var Zh = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    $h = uh("", 500);
  function ai() {
    var a = ze.tcf || {};
    return (ze.tcf = a);
  }
  var bi = function () {
      return new Rh(z, { Ll: -1 });
    },
    hi = function () {
      var a = ai(),
        b = bi();
      Th(b) && ci() && J(124);
      if ((di() || P(87)) && !a.active && Th(b)) {
        a.active = !0;
        di()
          ? ((a.Bb = {}),
            (a.cmpId = 0),
            (a.tcfPolicyVersion = 0),
            ei(),
            P(87) && bg([K.g.J]),
            (a.tcString = "tcunavailable"))
          : P(87) && bg([K.g.F, K.g.Ta, K.g.J]);
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState) fi(a), gi(a);
            else {
              a.gdprApplies = c.gdprApplies;
              if (P(87)) {
                a.cmpId = c.cmpId;
                a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
                if (ci()) return;
                a.tcfPolicyVersion = c.tcfPolicyVersion;
              }
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in Zh) Zh.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if (
                "tcloaded" === c.eventStatus ||
                "useractioncomplete" === c.eventStatus ||
                "cmpuishown" === c.eventStatus
              ) {
                var h = {},
                  l;
                for (l in Zh)
                  if (Zh.hasOwnProperty(l))
                    if ("1" === l) {
                      var m,
                        n = c,
                        p = !0;
                      p = void 0 === p ? !1 : p;
                      m = Yh(n)
                        ? !1 === n.gdprApplies ||
                          "tcunavailable" === n.tcString ||
                          (void 0 === n.gdprApplies && !p) ||
                          "string" !== typeof n.tcString ||
                          !n.tcString.length
                          ? !0
                          : Wh(n, "1", 0)
                        : !1;
                      h["1"] = m;
                    } else h[l] = Wh(c, l, Zh[l]);
                d = h;
              }
              d && ((a.tcString = c.tcString || "tcempty"), (a.Bb = d), gi(a));
            }
          });
        } catch (c) {
          fi(a), gi(a);
        }
      }
    };
  function fi(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function ei() {
    var a = {},
      b = ((a[K.g.F] = "denied"), (a[K.g.Xe] = $h), a);
    P(87) && (b[K.g.Ta] = "denied");
    Xf(b);
  }
  var di = function () {
      return !0 === z.gtag_enable_tcf_support;
    },
    ci = function () {
      var a = di();
      if (P(87)) {
        var b = ai().enableAdvertiserConsentMode;
        return !a && !b;
      }
      return !a;
    };
  function gi(a) {
    var b = {},
      c = ((b[K.g.F] = a.Bb["1"] ? "granted" : "denied"), b);
    P(87) &&
      ((c[K.g.Ta] = a.Bb["3"] && a.Bb["4"] ? "granted" : "denied"),
      "number" === typeof a.tcfPolicyVersion &&
        4 <= a.tcfPolicyVersion &&
        (c[K.g.J] = a.Bb["1"] && a.Bb["7"] ? "granted" : "denied"));
    Yf(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: ii() || "" },
    );
  }
  var ii = function () {
      var a = ai();
      if (a.active) return a.tcString;
    },
    ji = function () {
      var a = ai();
      if (a.active && void 0 !== a.gdprApplies)
        return a.gdprApplies ? "1" : "0";
    },
    ki = function (a) {
      if (!Zh.hasOwnProperty(String(a))) return !0;
      var b = ai();
      return b.active && b.Bb ? !!b.Bb[String(a)] : !0;
    };
  var li = [K.g.F, K.g.N],
    mi = [K.g.F, K.g.N, K.g.J, K.g.Ta],
    ni = {},
    oi = ((ni[K.g.F] = 1), (ni[K.g.N] = 2), ni);
  function pi(a) {
    switch (T(a, K.g.Z)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var qi = function (a) {
      var b = 3 !== pi(a);
      P(69) && (b = b && Lf(K.g.Ta));
      return b;
    },
    ri = function () {
      var a = {},
        b;
      for (b in oi)
        if (oi.hasOwnProperty(b)) {
          var c = oi[b],
            d,
            e = Ff();
          e.accessedAny = !0;
          d = Kf(e, b);
          a[c] = d;
        }
      var f = P(53) && li.every(Lf),
        h = P(48);
      return f || h ? mc(a, 1) : mc(a, 0);
    },
    si = {},
    ti =
      ((si[K.g.F] = 0), (si[K.g.N] = 1), (si[K.g.J] = 2), (si[K.g.Ta] = 3), si);
  function ui(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var vi = function (a) {
      if (P(50)) {
        for (var b = "1", c = 0; c < mi.length; c++) {
          var d = b,
            e,
            f = mi[c],
            h = Df[f];
          e = void 0 === h ? 0 : ti.hasOwnProperty(h) ? 12 | ti[h] : 8;
          var l = Ff();
          l.accessedAny = !0;
          var m = l.entries[f] || {};
          e = (e << 2) | ui(m.implicit);
          b =
            d +
            ("" +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                e
              ] +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                (ui(m.declare) << 4) | (ui(m.default) << 2) | ui(m.update)
              ]);
        }
        void 0 !== a && (b += pi(a));
        return b;
      }
      for (var n = "G1", p = 0; p < li.length; p++) {
        var q;
        a: {
          var r = li[p],
            t = Ff();
          t.accessedDefault = !0;
          switch ((t.entries[r] || {}).default) {
            case !0:
              q = 3;
              break a;
            case !1:
              q = 2;
              break a;
            default:
              q = 1;
          }
        }
        switch (q) {
          case 3:
            n += "1";
            break;
          case 2:
            n += "0";
            break;
          case 1:
            n += "-";
        }
      }
      return n;
    },
    wi = function () {
      if (!Lf(K.g.J)) return "-";
      var a = [],
        b = Ff().cps,
        c;
      for (c in b) b.hasOwnProperty(c) && b[c].enabled && a.push(c);
      for (var d = "", e = 0; e < a.length; e++) {
        var f = xe[a[e]];
        f && (d += f);
      }
      return "" === d ? "-" : d;
    };
  function xi() {
    var a = !!of["6"],
      b = !1;
    P(87) && (b = !ci() && "1" === ji());
    return a || b;
  }
  var yi = function () {
      return xi() ? "1" : "0";
    },
    zi = function () {
      return xi() || Ff().usedSetCps || !Q(K.g.J);
    },
    Ai = function () {
      var a = "0",
        b = "0",
        c;
      var d = ai();
      c = d.active && P(87) ? d.cmpId : void 0;
      "number" === typeof c &&
        0 <= c &&
        4095 >= c &&
        ((a =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (c >> 6) & 63
          ]),
        (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          c & 63
        ]));
      var e = "0",
        f;
      var h = ai();
      f = h.active && P(87) ? h.tcfPolicyVersion : void 0;
      "number" === typeof f &&
        0 <= f &&
        63 >= f &&
        (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          f
        ]);
      var l = 0;
      of["6"] && (l |= 1);
      "1" === ji() && (l |= 2);
      di() && (l |= 4);
      var m;
      var n = ai();
      m =
        n.active && void 0 !== n.enableAdvertiserConsentMode
          ? n.enableAdvertiserConsentMode
            ? "1"
            : "0"
          : void 0;
      "1" === m && (l |= 8);
      return (
        "1" +
        a +
        b +
        e +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[l]
      );
    };
  var Bi = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var Ci = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var h = e[f].split("="),
        l = h[0].replace(/^\s*|\s*$/g, "");
      if (l && l == a) {
        var m = h
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  function Di(a) {
    return "null" !== a.origin;
  }
  var Gi = function (a, b, c, d) {
      return Ei(d) ? Ci(a, String(b || Fi()), c) : [];
    },
    Ji = function (a, b, c, d, e) {
      if (Ei(e)) {
        var f = Hi(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Ii(
            f,
            function (h) {
              return h.Be;
            },
            b,
          );
          if (1 === f.length) return f[0].id;
          f = Ii(
            f,
            function (h) {
              return h.Jd;
            },
            c,
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Ki(a, b, c, d) {
    var e = Fi(),
      f = window;
    Di(f) && (f.document.cookie = a);
    var h = Fi();
    return e != h || (void 0 != c && 0 <= Gi(b, h, !1, d).indexOf(c));
  }
  var Oi = function (a, b, c) {
      function d(t, u, v) {
        if (null == v) return delete h[u], t;
        h[u] = v;
        return t + "; " + u + "=" + v;
      }
      function e(t, u) {
        if (null == u) return delete h[u], t;
        h[u] = !0;
        return t + "; " + u;
      }
      if (!Ei(c.fb)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Li(b)),
          (f = a + "=" + b));
      var h = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.qm);
      f = d(f, "samesite", c.sm);
      c.vm && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = Mi(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            r = d(f, "domain", q);
          r = e(r, c.flags);
          if (!Ni(q, c.path) && Ki(r, a, b, c.fb)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return Ni(m, c.path) ? 1 : Ki(f, a, b, c.fb) ? 0 : 1;
    },
    Pi = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Oi(a, b, c);
    };
  function Ii(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var l = a[h],
        m = b(l);
      m === c
        ? d.push(l)
        : void 0 === f || m < f
        ? ((e = [l]), (f = m))
        : m === f && e.push(l);
    }
    return 0 < d.length ? d : e;
  }
  function Hi(a, b, c) {
    for (var d = [], e = Gi(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var h = e[f].split("."),
        l = h.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = h.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: h.join("."), Be: 1 * m[0] || 1, Jd: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var Li = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Qi = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Ri = /(^|\.)doubleclick\.net$/i,
    Ni = function (a, b) {
      return (
        Ri.test(window.document.location.hostname) || ("/" === b && Qi.test(a))
      );
    },
    Fi = function () {
      return Di(window) ? window.document.cookie : "";
    },
    Mi = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Ri.test(e) || Qi.test(e) || a.push("none");
      return a;
    },
    Ei = function (a) {
      return Af().h() && a && Nf() ? (Mf(a) ? Lf(a) : !1) : !0;
    };
  var Si = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (Bi(a) & 2147483647)) : String(b);
    },
    Ti = function (a) {
      return [Si(a), Math.round(Ja() / 1e3)].join(".");
    },
    Wi = function (a, b, c, d, e) {
      var f = Ui(b);
      return Ji(a, f, Vi(c), d, e);
    },
    Xi = function (a, b, c, d) {
      var e = "" + Ui(c),
        f = Vi(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Ui = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Vi = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var Yi = function () {
    ze.dedupe_gclid || (ze.dedupe_gclid = "" + Ti());
    return ze.dedupe_gclid;
  };
  var Zi = function () {
    var a = !1;
    return a;
  };
  var $i = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    aj = function (a) {
      var b = jg.ctid.split("-")[0].toUpperCase(),
        c = {};
      c.ctid = jg.ctid;
      c.Bl = ye.md;
      c.El = ye.Ef;
      c.bl = hg.se ? 2 : 1;
      Fe ? ((c.Qe = $i[b]), c.Qe || (c.Qe = 0)) : (c.Qe = Le ? 13 : 10);
      Je ? (c.dg = 1) : Zi() ? (c.dg = 2) : (c.dg = 3);
      var d;
      var e = c.Qe,
        f = c.dg;
      void 0 === e
        ? (d = "")
        : (f || (f = 0),
          (d =
            "" +
            Fd(1, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (e << 2) | f
            ]));
      var h = c.jm,
        l =
          4 +
          d +
          (h
            ? "" +
              Fd(2, 1) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                h
              ]
            : ""),
        m,
        n = c.El;
      m = n && Ed.test(n) ? "" + Fd(3, 2) + n : "";
      var p,
        q = c.Bl;
      p = q
        ? "" +
          Fd(4, 1) +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q]
        : "";
      var r;
      var t = c.ctid;
      if (t && a) {
        var u = t.split("-"),
          v = u[0].toUpperCase();
        if ("GTM" !== v && "OPT" !== v) r = "";
        else {
          var w = u[1];
          r =
            "" +
            Fd(5, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              1 + w.length
            ] +
            (c.bl || 0) +
            w;
        }
      } else r = "";
      return l + m + p + r;
    };
  var bj = void 0;
  function cj(a) {
    var b = "";
    return b;
  }
  wb();
  zh() || tb("iPod");
  tb("iPad");
  !tb("Android") || xb() || wb() || vb() || tb("Silk");
  xb();
  !tb("Safari") ||
    xb() ||
    (ub() ? 0 : tb("Coast")) ||
    vb() ||
    (ub() ? 0 : tb("Edge")) ||
    (ub() ? sb("Microsoft Edge") : tb("Edg/")) ||
    (ub() ? sb("Opera") : tb("OPR")) ||
    wb() ||
    tb("Silk") ||
    tb("Android") ||
    Ah();
  var dj = {},
    ej = null,
    fj = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!ej) {
        ej = {};
        for (
          var h =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                "",
              ),
            l = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = h.concat(l[m].split(""));
          dj[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === ej[q] && (ej[q] = p);
          }
        }
      }
      for (
        var r = dj[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = r[x >> 2],
          C = r[((x & 3) << 4) | (y >> 4)],
          I = r[((y & 15) << 2) | (A >> 6)],
          F = r[A & 63];
        t[w++] = "" + B + C + I + F;
      }
      var G = 0,
        L = u;
      switch (b.length - v) {
        case 2:
          (G = b[v + 1]), (L = r[(G & 15) << 2] || u);
        case 1:
          var N = b[v];
          t[w] = "" + r[N >> 2] + r[((N & 3) << 4) | (G >> 4)] + L + u;
      }
      return t.join("");
    };
  var gj =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " ",
    );
  function hj() {
    var a;
    return null != (a = z.google_tag_data) ? a : (z.google_tag_data = {});
  }
  function ij() {
    var a = z.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function jj() {
    var a, b;
    return null !=
      (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function kj() {
    var a, b;
    return (
      "function" ===
      typeof (null == (a = z.navigator)
        ? void 0
        : null == (b = a.userAgentData)
        ? void 0
        : b.getHighEntropyValues)
    );
  }
  function lj() {
    if (!kj()) return null;
    var a = hj();
    if (a.uach_promise) return a.uach_promise;
    var b = z.navigator.userAgentData
      .getHighEntropyValues(gj)
      .then(function (c) {
        null != a.uach || (a.uach = c);
        return c;
      });
    return (a.uach_promise = b);
  }
  var rj = /:[0-9]+$/,
    sj = /^\d+\.fls\.doubleclick\.net$/,
    tj = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var h = f.slice(1).join("=");
          return c ? h : decodeURIComponent(h).replace(/\+/g, " ");
        }
      }
    },
    wj = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = uj(a.protocol) || uj(z.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : z.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : ""),
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || z.location.hostname)
            .replace(rj, "")
            .toLowerCase());
      return vj(a, b, c, d, e);
    },
    vj = function (a, b, c, d, e) {
      var f,
        h = uj(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = xj(a);
          break;
        case "protocol":
          f = h;
          break;
        case "host":
          f = a.hostname.replace(rj, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === h ? 80 : "https" === h ? 443 : ""),
          );
          break;
        case "path":
          a.pathname || a.hostname || ab("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = tj(f, e));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    uj = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    xj = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    yj = function (a) {
      var b = D.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || ab("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(rj, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    zj = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " ",
          ),
        e = yj(a),
        f = a.split(/[?#]/)[0],
        h = e.search,
        l = e.hash;
      "?" === h[0] && (h = h.substring(1));
      "#" === l[0] && (l = l.substring(1));
      h = c(h);
      l = c(l);
      "" !== h && (h = "?" + h);
      "" !== l && (l = "#" + l);
      var m = "" + f + h + l;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    Aj = function (a) {
      var b = yj(z.location.href),
        c = wj(b, "host", !1);
      if (c && c.match(sj)) {
        var d = wj(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  function Bj(a, b, c, d) {
    var e,
      f = Number(null != a.yb ? a.yb : void 0);
    0 !== f && (e = new Date((b || Ja()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      fb: d,
    };
  }
  var Cj;
  var Gj = function () {
      var a = Dj,
        b = Ej,
        c = Fj(),
        d = function (h) {
          a(h.target || h.srcElement || {});
        },
        e = function (h) {
          b(h.target || h.srcElement || {});
        };
      if (!c.init) {
        Ub(D, "mousedown", d);
        Ub(D, "keyup", d);
        Ub(D, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Hj = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Fj().decorators.push(f);
    },
    Ij = function (a, b, c) {
      for (var d = Fj().decorators, e = {}, f = 0; f < d.length; ++f) {
        var h = d[f],
          l;
        if ((l = !c || h.forms))
          a: {
            var m = h.domains,
              n = a,
              p = !!h.sameHost;
            if (m && (p || n !== D.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    l = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  l = !0;
                  break a;
                }
            l = !1;
          }
        if (l) {
          var r = h.placement;
          void 0 == r && (r = h.fragment ? 2 : 1);
          r === b && Ma(e, h.callback());
        }
      }
      return e;
    };
  function Fj() {
    var a = Lb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Jj = /(.*?)\*(.*?)\*(.*)/,
    Kj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Lj = /^(?:www\.|m\.|amp\.)+/,
    Mj = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Nj(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Pj = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString() &&
          (b.push(c), b.push(Ya(String(d))));
      }
    var e = b.join("*");
    return ["1", Oj(e), e].join("*");
  };
  function Oj(a, b) {
    var c = [
        Jb.userAgent,
        new Date().getTimezoneOffset(),
        Jb.userLanguage || Jb.language,
        Math.floor(Ja() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = Cj)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var h = f, l = 0; 8 > l; l++)
          h = h & 1 ? (h >>> 1) ^ 3988292384 : h >>> 1;
        e[f] = h;
      }
      d = e;
    }
    Cj = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ Cj[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Qj() {
    return function (a) {
      var b = yj(z.location.href),
        c = b.search.replace("?", ""),
        d = tj(c, "_gl", !0) || "";
      a.query = Rj(d) || {};
      var e = wj(b, "fragment").match(Nj("_gl"));
      a.fragment = Rj((e && e[3]) || "") || {};
    };
  }
  function Sj(a, b) {
    var c = Nj(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Tj = function (a, b) {
      b || (b = "_gl");
      var c = Mj.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Sj(b, (c[2] || "").slice(1)),
        f = Sj(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Uj = function (a) {
      var b = Qj(),
        c = Fj();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ma(d, e.query), a && Ma(d, e.fragment));
      return d;
    },
    Rj = function (a) {
      try {
        var b = Vj(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              h = Za(d[e + 1]);
            c[f] = h;
          }
          ab("TAGGING", 6);
          return c;
        }
      } catch (l) {
        ab("TAGGING", 8);
      }
    };
  function Vj(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Jj.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var h = c;
      if (h && "1" === h[1]) {
        var l = h[3],
          m;
        a: {
          for (var n = h[2], p = 0; p < b; ++p)
            if (n === Oj(l, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return l;
        ab("TAGGING", 7);
      }
    }
  }
  function Wj(a, b, c, d) {
    function e(p) {
      p = Sj(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Mj.exec(c);
    if (!f) return "";
    var h = f[1],
      l = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? (m = "#" + e(m.substring(1))) : (l = "?" + e(l.substring(1)));
    return "" + h + l + m;
  }
  function Xj(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Ij(b, 1, c),
      e = Ij(b, 2, c),
      f = Ij(b, 3, c);
    if (Oa(d)) {
      var h = Pj(d);
      c ? Yj("_gl", h, a) : Zj("_gl", h, a, !1);
    }
    if (!c && Oa(e)) {
      var l = Pj(e);
      Zj("_gl", l, a, !0);
    }
    for (var m in f)
      if (f.hasOwnProperty(m))
        a: {
          var n = m,
            p = f[m],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              Zj(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              Yj(n, p, q);
              break a;
            }
          }
          "string" == typeof q && Wj(n, p, q);
        }
  }
  function Zj(a, b, c, d) {
    if (c.href) {
      var e = Wj(a, b, c.href, void 0 === d ? !1 : d);
      ib.test(e) && (c.href = e);
    }
  }
  function Yj(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
          var l = e[h];
          if (l.name === a) {
            l.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = D.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = Wj(a, b, c.action);
        ib.test(n) && (c.action = n);
      }
    }
  }
  function Dj(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Xj(e, e.hostname);
      }
    } catch (h) {}
  }
  function Ej(a) {
    try {
      if (a.action) {
        var b = wj(yj(a.action), "host");
        Xj(a, b);
      }
    } catch (c) {}
  }
  var ak = function (a, b, c, d) {
      Gj();
      Hj(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    bk = function (a, b) {
      Gj();
      Hj(a, [vj(z.location, "host", !0)], b, !0, !0);
    },
    ck = function () {
      var a = D.location.hostname,
        b = Kj.exec(D.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          h = f[1];
        e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var l = a.replace(Lj, ""),
        m = e.replace(Lj, ""),
        n;
      if (!(n = l === m)) {
        var p = "." + m;
        n = l.substring(l.length - p.length, l.length) === p;
      }
      return n;
    },
    dk = function (a, b) {
      return !1 === a ? !1 : a || b || ck();
    };
  var ek = ["1"],
    fk = {},
    gk = {},
    lk = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = hk(a.prefix);
      if (!fk[c])
        if (ik(c, a.path, a.domain)) {
          var d = gk[hk(a.prefix)];
          jk(a, d ? d.id : void 0, d ? d.ag : void 0);
        } else {
          var e = Aj("auiddc");
          if (e) ab("TAGGING", 17), (fk[c] = e);
          else if (b) {
            var f = hk(a.prefix),
              h = Ti();
            if (0 === kk(f, h, a)) {
              var l = Lb("google_tag_data", {});
              l._gcl_au || (l._gcl_au = h);
            }
            ik(c, a.path, a.domain);
          }
        }
    };
  function jk(a, b, c) {
    var d = hk(a.prefix),
      e = fk[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var h = Number(f[1]) || 0;
        if (h) {
          var l = e;
          b && (l = e + "." + b + "." + (c ? c : Math.floor(Ja() / 1e3)));
          kk(d, l, a, 1e3 * h);
        }
      }
    }
  }
  function kk(a, b, c, d) {
    var e = Xi(b, "1", c.domain, c.path),
      f = Bj(c, d);
    f.fb = "ad_storage";
    return Pi(a, e, f);
  }
  function ik(a, b, c) {
    var d = Wi(a, b, c, ek, "ad_storage");
    if (!d) return !1;
    mk(a, d);
    return !0;
  }
  function mk(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((fk[a] = c.slice(0, 2).join(".")),
        (gk[a] = { id: c.slice(2, 4).join("."), ag: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (gk[a] = { id: c.slice(0, 2).join("."), ag: Number(c[2]) || 0 })
      : (fk[a] = b);
  }
  function hk(a) {
    return (a || "_gcl") + "_au";
  }
  function nk(a) {
    Nf()
      ? Rf(
          function () {
            Lf("ad_storage") ? a() : Sf(a, "ad_storage");
          },
          ["ad_storage"],
        )
      : a();
  }
  function ok(a) {
    var b = Uj(!0),
      c = hk(a.prefix);
    nk(function () {
      var d = b[c];
      if (d) {
        mk(c, d);
        var e = 1e3 * Number(fk[c].split(".")[1]);
        if (e) {
          ab("TAGGING", 16);
          var f = Bj(a, e);
          f.fb = "ad_storage";
          var h = Xi(d, "1", a.domain, a.path);
          Pi(c, h, f);
        }
      }
    });
  }
  function pk(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var h = {},
        l = Wi(a, e.path, e.domain, ek, "ad_storage");
      l && (h[a] = l);
      return h;
    };
    nk(function () {
      ak(f, b, c, d);
    });
  }
  var qk = function (a) {
    for (
      var b = [],
        c = D.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$",
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          og: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (h, l) {
      return l.timestamp - h.timestamp;
    });
    return b;
  };
  function rk(a, b) {
    var c = qk(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].og] || (d[c[e].og] = []);
        var h = { version: f[0], timestamp: 1e3 * Number(f[1]), R: f[2] };
        b && 3 < f.length && (h.labels = f.slice(3));
        d[c[e].og].push(h);
      }
    }
    return d;
  }
  var sk = /^\w+$/,
    Ek = /^[\w-]+$/,
    Fk = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    Gk = function () {
      return Af().h() && Nf() ? Lf("ad_storage") : !0;
    },
    Hk = function (a, b) {
      Mf("ad_storage")
        ? Gk()
          ? a()
          : Sf(a, "ad_storage")
        : b
        ? ab("TAGGING", 3)
        : Rf(
            function () {
              Hk(a, !0);
            },
            ["ad_storage"],
          );
    },
    Jk = function (a) {
      return Ik(a).map(function (b) {
        return b.R;
      });
    },
    Ik = function (a) {
      var b = [];
      if (!Di(z) || !D.cookie) return b;
      var c = Gi(a, D.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { R: d.R }, e++) {
        var f = Kk(c[e]);
        if (null != f) {
          var h = f,
            l = h.version;
          d.R = h.R;
          var m = h.timestamp,
            n = h.labels,
            p = xa(
              b,
              (function (q) {
                return function (r) {
                  return r.R === q.R;
                };
              })(d),
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, m)),
              (p.labels = Lk(p.labels, n || [])))
            : b.push({ version: l, R: d.R, timestamp: m, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return Mk(b);
    };
  function Lk(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Nk(a) {
    return a && "string" == typeof a && a.match(sk) ? a : "_gcl";
  }
  var Pk = function () {
      var a = yj(z.location.href),
        b = wj(a, "query", !1, void 0, "gclid"),
        c = wj(a, "query", !1, void 0, "gclsrc"),
        d = wj(a, "query", !1, void 0, "wbraid"),
        e = wj(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || tj(f, "gclid");
        c = c || tj(f, "gclsrc");
        d = d || tj(f, "wbraid");
      }
      return Ok(b, c, e, d);
    },
    Ok = function (a, b, c, d) {
      var e = {},
        f = function (h, l) {
          e[l] || (e[l] = []);
          e[l].push(h);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Ek.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(Ek))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    Rk = function (a) {
      var b = Pk();
      Hk(function () {
        Qk(b, !1, a);
      });
    };
  function Qk(a, b, c, d, e) {
    function f(w, x) {
      var y = Sk(w, h);
      y && (Pi(y, x, l), (m = !0));
    }
    c = c || {};
    e = e || [];
    var h = Nk(c.prefix);
    d = d || Ja();
    var l = Bj(c, d, !0);
    l.fb = "ad_storage";
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var x = ["GCL", n, w];
        0 < e.length && x.push(e.join("."));
        return x.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (!m && a.gb) {
      var q = a.gb[0],
        r = Sk("gb", h),
        t = !1;
      if (!b)
        for (var u = Ik(r), v = 0; v < u.length; v++)
          u[v].R === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var Uk = function (a, b) {
      var c = Uj(!0);
      Hk(function () {
        for (var d = Nk(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Fk[f]) {
            var h = Sk(f, d),
              l = c[h];
            if (l) {
              var m = Math.min(Tk(l), Ja()),
                n;
              b: {
                var p = m;
                if (Di(z))
                  for (
                    var q = Gi(h, D.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (Tk(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var t = Bj(b, m, !0);
                t.fb = "ad_storage";
                Pi(h, l, t);
              }
            }
          }
        }
        Qk(Ok(c.gclid, c.gclsrc), !1, b);
      });
    },
    Sk = function (a, b) {
      var c = Fk[a];
      if (void 0 !== c) return b + c;
    },
    Tk = function (a) {
      return 0 !== Vk(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Kk(a) {
    var b = Vk(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          R: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Vk(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !Ek.test(a[2])
      ? []
      : a;
  }
  var Wk = function (a, b, c, d, e) {
      if (va(b) && Di(z)) {
        var f = Nk(e),
          h = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = Sk(a[m], f);
              if (n) {
                var p = Gi(n, D.cookie, void 0, "ad_storage");
                p.length && (l[n] = p.sort()[p.length - 1]);
              }
            }
            return l;
          };
        Hk(function () {
          ak(h, b, c, d);
        });
      }
    },
    Mk = function (a) {
      return a.filter(function (b) {
        return Ek.test(b.R);
      });
    },
    Xk = function (a, b) {
      if (Di(z)) {
        for (var c = Nk(b.prefix), d = {}, e = 0; e < a.length; e++)
          Fk[a[e]] && (d[a[e]] = Fk[a[e]]);
        Hk(function () {
          k(d, function (f, h) {
            var l = Gi(c + h, D.cookie, void 0, "ad_storage");
            l.sort(function (t, u) {
              return Tk(u) - Tk(t);
            });
            if (l.length) {
              var m = l[0],
                n = Tk(m),
                p = 0 !== Vk(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Vk(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              Qk(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Yk(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Zk = function (a) {
      function b(e, f, h) {
        h && (e[f] = h);
      }
      if (Nf()) {
        var c = Pk();
        if (Yk(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          bk(function () {
            return d;
          }, 3);
          bk(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    $k = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!Gk()) return e;
      var f = Ik(a);
      if (!f.length) return e;
      for (var h = 0; h < f.length; h++)
        -1 === (f[h].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var l = f[0],
          m = f[0].timestamp,
          n = [l.version, Math.round(m / 1e3), l.R]
            .concat(l.labels || [], [b])
            .join("."),
          p = Bj(c, m, !0);
        p.fb = "ad_storage";
        Pi(a, n, p);
      }
      return e;
    };
  function al(a, b) {
    var c = Nk(b),
      d = Sk(a, c);
    if (!d) return 0;
    for (var e = Ik(d), f = 0, h = 0; h < e.length; h++)
      f = Math.max(f, e[h].timestamp);
    return f;
  }
  function bl(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var cl = function (a) {
    var b = Math.max(al("aw", a), bl(Gk() ? rk() : {}));
    return Math.max(al("gb", a), bl(Gk() ? rk("_gac_gb", !0) : {})) > b;
  };
  var hl = /[A-Z]+/,
    il = /\s/,
    jl = function (a, b) {
      if (g(a)) {
        a = Ga(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (hl.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b) {
              var h = function (n) {
                var p = n.indexOf("/");
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              f = h(e);
              if ("DC" === d && 2 === f.length) {
                var l = h(f[1]);
                2 === l.length && ((f[1] = l[0]), f.push(l[1]));
              }
            } else {
              f = e.split("/");
              for (var m = 0; m < f.length; m++)
                if (!f[m] || (il.test(f[m]) && ("AW" !== d || 1 !== m))) return;
            }
            return { id: a, prefix: d, X: d + "-" + f[0], K: f };
          }
        }
      }
    },
    ll = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = jl(a[d], b);
        e && (c[e.id] = e);
      }
      kl(c);
      var f = [];
      k(c, function (h, l) {
        f.push(l);
      });
      return f;
    };
  function kl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.K[1] && b.push(d.X);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var ml = function (a, b, c, d) {
    var e = Rb(),
      f;
    if (1 === e)
      a: {
        var h = Ne;
        h = h.toLowerCase();
        for (
          var l = "https://" + h,
            m = "http://" + h,
            n = 1,
            p = D.getElementsByTagName("script"),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (0 === r.indexOf(m)) {
              f = 3;
              break a;
            }
            1 === n && 0 === r.indexOf(l) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || "http:" != z.location.protocol ? a : b) + c;
  };
  var yl,
    zl = !1,
    Al = function (a) {
      if (!zl) {
        zl = !0;
        yl = yl || {};
      }
      return yl[a];
    };
  var Bl = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.s = c;
    this.h = {};
    this.metadata = H(c.eventMetadata || {});
    this.isAborted = !1;
  };
  Bl.prototype.copyToHitData = function (a, b) {
    var c = T(this.s, a);
    void 0 !== c ? (this.h[a] = c) : void 0 !== b && (this.h[a] = b);
  };
  var Cl = function (a, b, c) {
    var d = Al(a.target.X);
    return d && d.hasOwnProperty(b) ? d[b] : c;
  };
  function Dl(a) {
    return {
      getDestinationId: function () {
        return a.target.X;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.h[b];
      },
      setHitData: function (b, c) {
        a.h[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.h[b] && (a.h[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return T(a.s, b);
      },
      om: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      },
    };
  }
  function Zl(a) {
    var b = T(a.s, K.g.qb),
      c = T(a.s, K.g.pb);
    b && !c
      ? (a.eventName !== K.g.la && a.eventName !== K.g.Qd && J(131),
        (a.isAborted = !0))
      : !b && c && (J(132), (a.isAborted = !0));
  }
  var am = function () {
      var a = z.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    bm = function (a) {
      if (D.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
        return !0;
      var c = z.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          h = e.filter;
        if (h) {
          var l = h.indexOf("opacity(");
          0 <= l &&
            ((h = h.substring(l + 8, h.indexOf(")", l))),
            "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)),
            (f = Math.min(h, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = z.getComputedStyle(d, null));
      }
      return !1;
    };
  function Xm() {
    return "attribution-reporting";
  }
  function Ym(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var Zm = !1;
  function $m() {
    if (Ym("join-ad-interest-group") && ta(Jb.joinAdInterestGroup)) return !0;
    Zm ||
      (Jh(
        "AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9",
      ),
      (Zm = !0));
    return Ym("join-ad-interest-group") && ta(Jb.joinAdInterestGroup);
  }
  function an(a, b) {
    var c = void 0;
    try {
      c = D.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Ja() - d) {
        ab("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          D.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]',
          ).length
        ) {
          ab("TAGGING", 10);
          return;
        }
      } catch (e) {}
    Sb(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Ja() },
      c,
    );
  }
  function bn() {
    return "https://td.doubleclick.net";
  }
  var cn = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$",
    ),
    dn = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    en = /^\d+\.fls\.doubleclick\.net$/,
    fn = /;gac=([^;?]+)/,
    gn = /;gacgb=([^;?]+)/,
    hn = /;gclaw=([^;?]+)/,
    jn = /;gclgb=([^;?]+)/;
  function kn(a, b) {
    if (en.test(D.location.host)) {
      var c = D.location.href.match(b);
      return c && 2 == c.length && c[1].match(cn)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], h = a[e], l = 0; l < h.length; l++) f.push(h[l].R);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var ln = function (a, b, c) {
    var d = Gk() ? rk("_gac_gb", !0) : {},
      e = [],
      f = !1,
      h;
    for (h in d) {
      var l = $k("_gac_gb_" + h, a, b, c);
      f =
        f ||
        (0 !== l.length &&
          l.some(function (m) {
            return 1 === m;
          }));
      e.push(h + ":" + l.join(","));
    }
    return { uk: f ? e.join(";") : "", tk: kn(d, gn) };
  };
  function mn(a, b, c) {
    if (en.test(D.location.host)) {
      var d = D.location.href.match(c);
      if (d && 2 == d.length && d[1].match(dn)) return [{ R: d[1] }];
    } else return Ik((a || "_gcl") + b);
    return [];
  }
  var nn = function (a) {
      return mn(a, "_aw", hn)
        .map(function (b) {
          return b.R;
        })
        .join(".");
    },
    on = function (a) {
      return mn(a, "_gb", jn)
        .map(function (b) {
          return b.R;
        })
        .join(".");
    },
    pn = function (a, b) {
      var c = $k(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var qn = function () {
    if (ta(z.__uspapi)) {
      var a = "";
      try {
        z.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var bo = {
    D: {
      qg: "ads_conversion_hit",
      Ye: "container_execute_start",
      sg: "container_setup_end",
      Ze: "container_setup_start",
      rg: "container_execute_end",
      ug: "container_yield_end",
      af: "container_yield_start",
      vh: "event_execute_end",
      uh: "event_evaluation_end",
      zf: "event_evaluation_start",
      wh: "event_setup_end",
      fd: "event_setup_start",
      xh: "ga4_conversion_hit",
      kd: "page_load",
      dm: "pageview",
      wb: "snippet_load",
      Hh: "tag_callback_error",
      Ih: "tag_callback_failure",
      Jh: "tag_callback_success",
      Kh: "tag_execute_end",
      nc: "tag_execute_start",
    },
  };
  function co() {
    function a(c, d) {
      var e = cb(d);
      e && b.push(c + "=" + e);
    }
    var b = [];
    a("&u", "GTM");
    a("&ut", "TAGGING");
    a("&h", "HEALTH");
    return b.join("");
  }
  var eo = !1,
    fo = "L S Y E EC TC HTC".split(" "),
    go = ["S", "V", "E"],
    ho = ["TS", "TI", "TE"];
  var Ko = function (a) {},
    Lo = function (a) {},
    Mo = function () {},
    No = function (a, b) {},
    Oo = function (a, b) {},
    Po = function (a, b) {},
    Qo = function (a, b) {},
    io = function (a, b, c, d, e, f) {
      var h;
      h = void 0 === h ? !1 : h;
      var l = {};
      return l;
    },
    jo = function (a) {
      var b = !1;
      return b;
    },
    ko = function (a, b) {},
    Ro = function () {
      var a = {};
      return a;
    },
    Do = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    So = function () {},
    To = function (a, b) {},
    Uo = function (a, b, c) {};
  var Vo = function (a, b) {
    var c,
      d = z.GooglebQhCsO;
    d || ((d = {}), (z.GooglebQhCsO = d));
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0;
  };
  var Wo = function (a, b, c) {
    var d = Eh(a, "fmt");
    if (b) {
      var e = Eh(a, "random"),
        f = Eh(a, "label") || "";
      if (!e) return !1;
      var h = fj(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " ")),
      );
      if (!Vo(h, b)) return !1;
    }
    d && 4 != d && (a = Gh(a, "rfmt", d));
    var l = Gh(a, "fmt", 4);
    Qb(
      l,
      function () {
        z.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((z.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      D.getElementsByTagName("script")[0].parentElement || void 0,
    );
    return !0;
  };
  var lp = function () {
      this.h = {};
    },
    mp = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    np = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    pp = function (a, b, c, d) {};
  function rp(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  var tp = function (a) {
      var b = qg();
      sp(b).event && sp(b).event.push(a);
    },
    up = function () {
      var a = sp(qg());
      return a.event ? a.event : [];
    };
  function sp(a) {
    var b,
      c = ze.r;
    c || ((c = { container: {} }), (ze.r = c));
    b = c;
    var d = b.container[a];
    d || ((d = { entity: [], event: [] }), (b.container[a] = d));
    return d;
  }
  var vp = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/,
    ),
    wp = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    xp = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    yp =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " ",
      ),
    Bp = function (a) {
      var b = Ze("gtm.allowlist") || Ze("gtm.whitelist");
      b && J(9);
      Fe && (b = ["google", "gtagfl", "lcl", "zone"]);
      zp() &&
        (Fe ? J(116) : J(117),
        Ap &&
          ((b = []),
          window.console &&
            window.console.log &&
            window.console.log("GTM blocked. See go/13687728.")));
      var c = b && Pa(Fa(b), wp),
        d = Ze("gtm.blocklist") || Ze("gtm.blacklist");
      d || ((d = Ze("tagTypeBlacklist")) && J(3));
      d ? J(8) : (d = []);
      zp() &&
        ((d = Fa(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Fa(d).indexOf("google") && J(2);
      var e = d && Pa(Fa(d), xp),
        f = {};
      return function (h) {
        var l = h && h[nc.ia];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = Re[l] || [],
          n = a(l, m),
          p;
        p = sp(qg()).entity;
        for (var q = 0; q < p.length; q++)
          try {
            n = n && p[q](l, m);
          } catch (y) {
            n = !1;
          }
        if (b) {
          var r;
          if ((r = n))
            a: {
              if (0 > c.indexOf(l))
                if (m && 0 < m.length)
                  for (var t = 0; t < m.length; t++) {
                    if (0 > c.indexOf(m[t])) {
                      J(11);
                      r = !1;
                      break a;
                    }
                  }
                else {
                  r = !1;
                  break a;
                }
              r = !0;
            }
          n = r;
        }
        var u = !1;
        if (d) {
          var v = 0 <= e.indexOf(l);
          if (v) u = v;
          else {
            var w = Ba(e, m || []);
            w && J(10);
            u = w;
          }
        }
        var x = !n || u;
        x ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (x = Ba(e, yp));
        return (f[l] = x);
      };
    },
    Ap = !1;
  var zp = function () {
      return vp.test(z.location && z.location.hostname);
    },
    Cp = function () {
      ig &&
        sp(qg()).entity.push(function (a) {
          var b = {};
          b[nc.ia] = "__" + a;
          for (var c in void 0)
            (void 0).hasOwnProperty(c) && (b["vtp_" + c] = (void 0)[c]);
          var d;
          if (dd(b)) {
            var e = b[nc.ia];
            if (!e) throw "Error: No function name given for function call.";
            var f = Tc[e];
            d = !!f && !!f.runInSiloedMode;
          } else d = !!rp(b[nc.ia], 4);
          return d;
        });
    };
  function Dp(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return yj("" + c + b).href;
    }
  }
  function Ep() {
    return !!ye.we && "SGTM_TOKEN" !== ye.we.split("@@").join("");
  }
  function Fp(a) {
    for (var b = ha([K.g.Tc, K.g.Lb]), c = b.next(); !c.done; c = b.next()) {
      var d = T(a, c.value);
      if (d) return d;
    }
  }
  var Hp = function (a, b, c, d) {
      if (!Gp() && !wg(a)) {
        var e = "?id=" + encodeURIComponent(a) + "&l=" + ye.da,
          f = 0 === a.indexOf("GTM-");
        f || (e += "&cx=c");
        P(68) && (e += "&gtm=" + aj());
        var h = Ep();
        h && (e += "&sign=" + ye.we);
        var l = c ? "/gtag/js" : "/gtm.js",
          m = He || Je ? Dp(b, l + e) : void 0;
        if (!m) {
          var n = ye.Pd + l;
          h &&
            Kb &&
            f &&
            (n = Kb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          m = ml("https://", "http://", n + e);
        }
        var p = a;
        d.siloed && (yg({ ctid: p, isDestination: !1 }), (p = kg(p)));
        var q = p,
          r = xg();
        eg().container[q] = { state: 1, context: d, parent: r };
        fg({ ctid: q, isDestination: !1 });
        Qb(m);
      }
    },
    Ip = function (a, b, c) {
      var d;
      if ((d = !Gp())) {
        var e = eg().destination[a];
        d = !(e && e.state);
      }
      if (d)
        if (zg())
          (eg().destination[a] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: xg(),
          }),
            fg({ ctid: a, isDestination: !0 }),
            J(91);
        else {
          var f =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            ye.da +
            "&cx=c";
          P(68) && (f += "&gtm=" + aj());
          Ep() && (f += "&sign=" + ye.we);
          var h = He || Je ? Dp(b, f) : void 0;
          h || (h = ml("https://", "http://", ye.Pd + f));
          var l = a;
          c.siloed && (yg({ ctid: l, isDestination: !0 }), (l = kg(l)));
          eg().destination[l] = { state: 1, context: c, parent: xg() };
          fg({ ctid: l, isDestination: !0 });
          Qb(h);
        }
    };
  function Gp() {
    if (Zi()) {
      return !0;
    }
    return !1;
  }
  var Jp = "",
    Kp = [];
  function Lp(a) {
    var b = "";
    Jp && (b = "&dl=" + encodeURIComponent(Jp));
    0 < Kp.length && (b += "&tdp=" + Kp.join("."));
    a.Cb && ((Jp = ""), (Kp.length = 0), b && a.oi());
    return b;
  }
  var Mp = [];
  function Np(a) {
    if (!Mp.length) return "";
    var b = "&tdc=" + Mp.join("!");
    a.Cb && (a.oi(), (Mp.length = 0));
    return b;
  }
  var Op = { initialized: 11, complete: 12, interactive: 13 },
    Pp = {},
    Qp = Object.freeze(((Pp[K.g.Ka] = !0), Pp)),
    Rp =
      0 <= D.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= D.location.search.indexOf("&gtm_diagnostics="),
    Tp = function (a, b, c) {
      if (Jg && "config" === a && !(1 < jl(b).K.length)) {
        var d,
          e = Lb("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = H(c.H);
        H(c.h, f);
        var h = [],
          l;
        for (l in d) {
          var m = Sp(d[l], f);
          m.length && (Rp && console.log(m), h.push(l));
        }
        h.length &&
          (h.length && Jg && Mp.push(b + "*" + h.join(".")),
          ab("TAGGING", Op[D.readyState] || 14));
        d[b] = f;
      }
    };
  function Up(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Sp(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Qp[q] : t;
      },
      f;
    for (f in Up(a, b)) {
      var h = (d ? d + "." : "") + f,
        l = e(f, a),
        m = e(f, b),
        n = "object" === fc(l) || "array" === fc(l),
        p = "object" === fc(m) || "array" === fc(m);
      if (n && p) Sp(l, m, c, h);
      else if (n || p || l !== m) c[h] = !0;
    }
    return Object.keys(c);
  }
  var Vp = !1,
    Wp = 0,
    Xp = [];
  function Yp(a) {
    if (!Vp) {
      var b = D.createEventObject,
        c = "complete" == D.readyState,
        d = "interactive" == D.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        Vp = !0;
        for (var e = 0; e < Xp.length; e++) E(Xp[e]);
      }
      Xp.push = function () {
        for (var f = 0; f < arguments.length; f++) E(arguments[f]);
        return 0;
      };
    }
  }
  function Zp() {
    if (!Vp && 140 > Wp) {
      Wp++;
      try {
        D.documentElement.doScroll("left"), Yp();
      } catch (a) {
        z.setTimeout(Zp, 50);
      }
    }
  }
  var $p = function (a) {
    Vp ? a() : Xp.push(a);
  };
  var aq = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: pg(),
    };
  };
  var cq = function (a, b) {
      this.h = !1;
      this.H = [];
      this.M = { tags: [] };
      this.U = !1;
      this.B = this.C = 0;
      bq(this, a, b);
    },
    dq = function (a, b, c, d) {
      if (Ce.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      ic(d) && (e = H(d, e));
      e.id = c;
      e.status = "timeout";
      return a.M.tags.push(e) - 1;
    },
    eq = function (a, b, c, d) {
      var e = a.M.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    fq = function (a) {
      if (!a.h) {
        for (var b = a.H, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.H.length = 0;
      }
    },
    bq = function (a, b, c) {
      void 0 !== b && gq(a, b);
      c &&
        z.setTimeout(function () {
          return fq(a);
        }, Number(c));
    },
    gq = function (a, b) {
      var c = La(function () {
        return E(function () {
          b(pg(), a.M);
        });
      });
      a.h ? c() : a.H.push(c);
    },
    hq = function (a) {
      a.C++;
      return La(function () {
        a.B++;
        a.U && a.B >= a.C && fq(a);
      });
    },
    iq = function (a) {
      a.U = !0;
      a.B >= a.C && fq(a);
    };
  var jq = {},
    lq = function () {
      return z[kq()];
    },
    mq = !1;
  var nq = function (a) {
      z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
      var b = z.GoogleAnalyticsObject;
      if (z[b]) z.hasOwnProperty(b);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Ia());
        z[b] = c;
      }
      return z[b];
    },
    oq = function (a) {
      if (Nf()) {
        var b = lq();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function kq() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var pq = function (a) {
      if (jq[a] || mq) return;
      var b = z[kq()];
      ta(b) && (b("provide", a, sa), (jq[a] = !0));
    },
    qq = function (a, b) {
      return function () {
        var c = lq(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var h = f.get("hitPayload"),
              l = f.get("hitCallback"),
              m = 0 > h.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0,
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", h, !0),
              f.set("hitCallback", l, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var Qq = {},
    Wq = {};
  function Xq(a, b) {
    if (Jg) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Qq[a] = "&e=" + c + "&eid=" + a;
      Tg(a);
    }
  }
  function Yq(a) {
    var b = a.eventId,
      c = a.Cb;
    if (!Qq[b]) return "";
    var d = Wq[b] ? "" : "&es=1";
    d += Qq[b];
    c && (Wq[b] = !0);
    return d;
  }
  var Zq = {};
  function $q(a, b) {
    Jg && ((Zq[a] = Zq[a] || {}), (Zq[a][b] = (Zq[a][b] || 0) + 1));
  }
  function ar(a) {
    var b = a.eventId,
      c = a.Cb,
      d = Zq[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Zq[b];
    return e.length ? "&md=" + e.join(".") : "";
  }
  var br = {},
    cr = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8",
    };
  function dr(a, b, c) {
    if (Jg) {
      br[a] = br[a] || [];
      var d = cr[b] || "0",
        e;
      e =
        c instanceof z.Element
          ? "1"
          : c instanceof z.Event
          ? "2"
          : c instanceof z.RegExp
          ? "3"
          : c === z
          ? "4"
          : c === D
          ? "5"
          : c instanceof z.Promise
          ? "6"
          : c instanceof z.Storage
          ? "7"
          : c instanceof z.Date
          ? "8"
          : c instanceof z.History
          ? "9"
          : c instanceof z.Performance
          ? "a"
          : c === z.crypto
          ? "b"
          : c instanceof z.Location
          ? "c"
          : c instanceof z.Navigator
          ? "d"
          : "object" !== typeof c || ic(c)
          ? "0"
          : "e";
      br[a].push("" + d + e);
    }
  }
  function er(a) {
    var b = a.eventId,
      c = br[b] || [];
    if (!c.length) return "";
    a.Cb && delete br[b];
    return "&pcr=" + c.join(".");
  }
  var fr = {},
    gr = {};
  function hr(a, b, c) {
    if (Jg && b) {
      var d = cg(b);
      fr[a] = fr[a] || [];
      fr[a].push(c + d);
      var e = (dd(b) ? "1" : "2") + d;
      gr[a] = gr[a] || [];
      gr[a].push(e);
      Tg(a);
    }
  }
  function ir(a) {
    var b = a.eventId,
      c = a.Cb,
      d = "",
      e = fr[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = gr[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete fr[b], delete gr[b]);
    return d;
  }
  function jr(a, b, c, d) {
    var e = Rc[a],
      f = kr(a, b, c, d);
    if (!f) return null;
    var h = ad(e[nc.Gh], c, []);
    if (h && h.length) {
      var l = h[0];
      f = jr(
        l.index,
        {
          onSuccess: f,
          onFailure: 1 === l.Uh ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d,
      );
    }
    return f;
  }
  function kr(a, b, c, d) {
    function e() {
      if (f[nc.Mj]) l();
      else {
        var w = bd(f, c, []),
          x = w[nc.Fi];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!Q(x[y])) {
              l();
              return;
            }
        var A = dq(c.Nb, String(f[nc.ia]), Number(f[nc.od]), w[nc.Nj]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var F = Ja() - I;
            hr(c.id, Rc[a], "5");
            eq(c.Nb, A, "success", F);
            P(30) && Uo(c, f, bo.D.Jh);
            h();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var F = Ja() - I;
            hr(c.id, Rc[a], "6");
            eq(c.Nb, A, "failure", F);
            P(30) && Uo(c, f, bo.D.Ih);
            l();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        hr(c.id, f, "1");
        var C = function () {
          nf(3);
          var F = Ja() - I;
          hr(c.id, f, "7");
          eq(c.Nb, A, "exception", F);
          P(30) && Uo(c, f, bo.D.Hh);
          B || ((B = !0), l());
        };
        P(30) && To(c, f);
        var I = Ja();
        try {
          $c(w, { event: c, index: a, type: 1 });
        } catch (F) {
          C(F);
        }
        P(30) && Uo(c, f, bo.D.Kh);
      }
    }
    var f = Rc[a],
      h = b.onSuccess,
      l = b.onFailure,
      m = b.terminate;
    if (c.Uf(f)) return null;
    var n = ad(f[nc.Lh], c, []);
    if (n && n.length) {
      var p = n[0],
        q = jr(p.index, { onSuccess: h, onFailure: l, terminate: m }, c, d);
      if (!q) return null;
      h = q;
      l = 2 === p.Uh ? m : q;
    }
    if (f[nc.Ch] || f[nc.Pj]) {
      var r = f[nc.Ch] ? Sc : c.Jl,
        t = h,
        u = l;
      if (!r[a]) {
        e = La(e);
        var v = lr(a, r, e);
        h = v.onSuccess;
        l = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function lr(a, b, c) {
    var d = [],
      e = [];
    b[a] = mr(d, e, c);
    return {
      onSuccess: function () {
        b[a] = nr;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = or;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function mr(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function nr(a) {
    a();
  }
  function or(a, b) {
    b();
  }
  var qr = function (a, b) {
      return 1 === arguments.length ? pr("config", a) : pr("config", a, b);
    },
    rr = function (a, b, c) {
      c = c || {};
      c[K.g.Kb] = a;
      return pr("event", b, c);
    };
  function pr(a) {
    return arguments;
  }
  var sr = function () {
    this.h = [];
    this.B = [];
  };
  sr.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.B.length; f++)
      try {
        this.B[f](e);
      } catch (h) {}
  };
  sr.prototype.listen = function (a) {
    this.B.push(a);
  };
  sr.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  sr.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var ur = function (a, b, c) {
      tr().enqueue(a, b, c);
    },
    wr = function () {
      var a = vr;
      tr().listen(a);
    };
  function tr() {
    var a = ze.mb;
    a || ((a = new sr()), (ze.mb = a));
    return a;
  }
  var Er = function (a) {
      var b = ze.zones;
      return b
        ? b.getIsAllowedFn(lg(), a)
        : function () {
            return !0;
          };
    },
    Fr = function () {
      tp(function (a, b) {
        var c = ze.zones;
        return c ? c.isActive(lg(), b) : !0;
      });
    };
  var Ir = function (a, b) {
    for (var c = [], d = 0; d < Rc.length; d++)
      if (a[d]) {
        var e = Rc[d];
        var f = hq(b.Nb);
        try {
          var h = jr(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (h) {
            var l = e[nc.ia];
            if (!l) throw "Error: No function name given for function call.";
            var m = Tc[l];
            c.push({
              ui: d,
              ii: (m ? m.priorityOverride || 0 : 0) || rp(e[nc.ia], 1) || 0,
              execute: h,
            });
          } else Gr(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(Hr);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function Hr(a, b) {
    var c,
      d = b.ii,
      e = a.ii;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var h = a.ui,
        l = b.ui;
      f = h > l ? 1 : h < l ? -1 : 0;
    }
    return f;
  }
  function Gr(a, b) {
    if (Jg) {
      var c = function (d) {
        var e = b.Uf(Rc[d]) ? "3" : "4",
          f = ad(Rc[d][nc.Gh], b, []);
        f && f.length && c(f[0].index);
        hr(b.id, Rc[d], e);
        var h = ad(Rc[d][nc.Lh], b, []);
        h && h.length && c(h[0].index);
      };
      c(a);
    }
  }
  var Lr = !1,
    Jr;
  var Qr = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    P(30) && No(b, d);
    if ("gtm.js" === d) {
      if (Lr) return !1;
      Lr = !0;
    }
    var e,
      f = !1;
    if (
      up().every(function (r) {
        return r(d, b);
      })
    )
      e = Er(b);
    else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
        return !1;
      f = !0;
      e = Er(Number.MAX_SAFE_INTEGER);
    }
    Xq(b, d);
    var h = a.eventCallback,
      l = a.eventTimeout,
      m = {
        id: b,
        priorityId: c,
        name: d,
        Uf: Bp(e),
        Jl: [],
        bi: function () {
          J(6);
          nf(0);
        },
        Ph: Mr(),
        Qh: Nr(b),
        Nb: new cq(function () {
          if (P(30)) {
          }
          h && h.apply(h, [].slice.call(arguments, 0));
        }, l),
      };
    P(58) && (m.kg = $q);
    P(30) && Po(m.id, m.name);
    var n = hd(m);
    P(30) && Qo(m.id, m.name);
    f && (n = Or(n));
    P(30) && Oo(b, d);
    var p = Ir(n, m),
      q = !1;
    iq(m.Nb);
    ("gtm.js" !== d && "gtm.sync" !== d) || pq(pg());
    return Pr(n, p) || q;
  };
  function Nr(a) {
    return function (b) {
      jc(b) || dr(a, "input", b);
    };
  }
  function Mr() {
    var a = {};
    a.event = cf("event", 1);
    a.ecommerce = cf("ecommerce", 1);
    a.gtm = cf("gtm");
    a.eventModel = cf("eventModel");
    return a;
  }
  function Or(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(Rc[c][nc.ia]);
        if (Be[d] || void 0 !== Rc[c][nc.Qj] || Se[d] || rp(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Pr(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Rc[c] && !Ce[String(Rc[c][nc.ia])]) return !0;
    return !1;
  }
  var Rr = {};
  function Sr(a, b, c) {
    Jg && void 0 !== a && ((Rr[a] = Rr[a] || []), Rr[a].push(c + b), Tg(a));
  }
  function Tr(a) {
    var b = a.eventId,
      c = a.Cb,
      d = "",
      e = Rr[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete Rr[b];
    return d;
  }
  var Vr = function (a, b, c, d) {
      var e = jl(c, d.isGtmEvent);
      e && Ur.push("event", [b, a], e, d);
    },
    Wr = function (a, b, c, d) {
      var e = jl(c, d.isGtmEvent);
      e && Ur.push("get", [a, b], e, d);
    },
    Xr = function () {
      this.status = 1;
      this.H = {};
      this.h = {};
      this.M = {};
      this.U = null;
      this.C = {};
      this.B = !1;
    },
    Yr = function (a, b, c, d) {
      var e = Ja();
      this.type = a;
      this.C = e;
      this.h = b;
      this.B = c;
      this.messageContext = d;
    },
    Zr = function () {
      this.B = {};
      this.C = {};
      this.h = [];
    },
    $r = function (a, b) {
      var c = b.X;
      return (a.B[c] = a.B[c] || new Xr());
    },
    as = function (a, b, c, d) {
      if (d.h) {
        var e = $r(a, d.h),
          f = e.U;
        if (f) {
          var h = H(c),
            l = H(e.H[d.h.id]),
            m = H(e.C),
            n = H(e.h),
            p = H(a.C),
            q = {};
          if (Jg)
            try {
              q = H(We);
            } catch (v) {
              J(72);
            }
          var r = d.h.prefix,
            t = function (v) {
              Sr(d.messageContext.eventId, r, v);
            },
            u = th(
              sh(
                rh(
                  qh(
                    ph(
                      nh(
                        mh(
                          oh(
                            lh(
                              kh(
                                jh(
                                  new bh(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId,
                                  ),
                                  h,
                                ),
                                l,
                              ),
                              m,
                            ),
                            n,
                          ),
                          p,
                        ),
                        q,
                      ),
                      d.messageContext.eventMetadata,
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    },
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  },
                ),
                !!d.messageContext.isGtmEvent,
              ),
            );
          try {
            Sr(d.messageContext.eventId, r, "1"),
              Tp(d.type, d.h.id, u),
              f(d.h.id, b, d.C, u);
          } catch (v) {
            Sr(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  Zr.prototype.register = function (a, b, c) {
    var d = $r(this, a);
    3 !== d.status &&
      ((d.U = b), (d.status = 3), c && (H(d.h, c), (d.h = c)), this.flush());
  };
  Zr.prototype.push = function (a, b, c, d) {
    void 0 !== c &&
      (1 === $r(this, c).status &&
        (($r(this, c).status = 2), this.push("require", [{}], c, {})),
      $r(this, c).B && (d.deferrable = !1));
    this.h.push(new Yr(a, c, b, d));
    d.deferrable || this.flush();
  };
  Zr.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      e = { xb: e.xb, Ce: e.Ce };
      var f = this.h[0],
        h = f.h;
      if (f.messageContext.deferrable)
        !h || $r(this, h).B
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== $r(this, h).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            k(f.B[0], function (r, t) {
              H(Qa(r, t), b.C);
            });
            break;
          case "config":
            var l = $r(this, h);
            e.xb = {};
            k(
              f.B[0],
              (function (r) {
                return function (t, u) {
                  H(Qa(t, u), r.xb);
                };
              })(e),
            );
            var m = !!e.xb[K.g.Mb];
            delete e.xb[K.g.Mb];
            var n = h.X === h.id;
            m || (n ? (l.C = {}) : (l.H[h.id] = {}));
            (l.B && m) || as(this, K.g.la, e.xb, f);
            l.B = !0;
            n ? H(e.xb, l.C) : (H(e.xb, l.H[h.id]), J(70));
            d = !0;
            break;
          case "event":
            e.Ce = {};
            k(
              f.B[0],
              (function (r) {
                return function (t, u) {
                  H(Qa(t, u), r.Ce);
                };
              })(e),
            );
            as(this, f.B[1], e.Ce, f);
            break;
          case "get":
            var p = {},
              q = ((p[K.g.Ya] = f.B[0]), (p[K.g.nb] = f.B[1]), p);
            as(this, K.g.Ha, q, f);
        }
        this.h.shift();
        bs(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var bs = function (a, b) {
      if ("require" !== b.type)
        if (b.h)
          for (var c = $r(a, b.h).M[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.B)
            if (a.B.hasOwnProperty(e)) {
              var f = a.B[e];
              if (f && f.M)
                for (var h = f.M[b.type] || [], l = 0; l < h.length; l++)
                  h[l]();
            }
    },
    cs = function (a, b) {
      var c = Ur,
        d = H(b);
      H($r(c, a).h, d);
      $r(c, a).h = d;
    },
    Ur = new Zr();
  var ds = {},
    es = {},
    fs = function (a, b) {
      for (
        var c = [], d = [], e = {}, f = 0;
        f < a.length;
        e = { Le: e.Le, Ge: e.Ge }, f++
      ) {
        var h = a[f];
        if (0 <= h.indexOf("-")) {
          if (((e.Le = jl(h, b)), e.Le)) {
            var l = ng();
            xa(
              l,
              (function (r) {
                return function (t) {
                  return r.Le.X === t;
                };
              })(e),
            )
              ? c.push(h)
              : d.push(h);
          }
        } else {
          var m = ds[h] || [];
          e.Ge = {};
          m.forEach(
            (function (r) {
              return function (t) {
                return (r.Ge[t] = !0);
              };
            })(e),
          );
          for (var n = lg(), p = 0; p < n.length; p++)
            if (e.Ge[n[p]]) {
              c = c.concat(ng());
              break;
            }
          var q = es[h] || [];
          q.length && (c = c.concat(q));
        }
      }
      return { il: c, jl: d };
    },
    gs = function (a) {
      k(ds, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    hs = function (a) {
      k(es, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var is = "HA GF G UA AW DC MC".split(" "),
    js = !1,
    ks = !1;
  function ls(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Te() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var ms = void 0,
    ns = void 0;
  function os(a, b, c) {
    var d = H(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && J(136);
    var e = H(b);
    H(c, e);
    ur(qr(lg()[0], e), a.eventId, d);
  }
  function ps(a) {
    for (var b = ha([K.g.Tc, K.g.Lb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || Ur.C[d];
      if (e) return e;
    }
  }
  var qs = {
      config: function (a, b) {
        var c = P(59),
          d = ls(a, b);
        if (!(2 > a.length) && g(a[1])) {
          var e = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !ic(a[2])) || 3 < a.length) return;
            e = a[2];
          }
          var f = jl(a[1], b.isGtmEvent);
          if (f) {
            var h, l, m;
            a: {
              if (!hg.se) {
                var n = rg(xg());
                if (Bg(n)) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = { ml: rg(p), fl: q };
                  break a;
                }
              }
              m = void 0;
            }
            var r = m;
            r && ((h = r.ml), (l = r.fl));
            Xq(d.eventId, "gtag.config");
            var t = f.X,
              u = f.id !== t;
            if (u ? -1 === ng().indexOf(t) : -1 === lg().indexOf(t)) {
              if (!((c && b.inheritParentConfig) || (P(26) && e[K.g.qb]))) {
                var v = ps(e);
                if (u)
                  Ip(t, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (c && void 0 !== h && -1 !== h.containers.indexOf(t)) {
                  var w = e;
                  ms ? os(b, w, ms) : ns || (ns = H(w));
                } else
                  Hp(t, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (h && (J(128), l && J(130), c && b.inheritParentConfig)) {
                var x = e;
                ns ? os(b, ns, x) : (!x[K.g.Mb] && Ee && ms) || (ms = H(x));
                return;
              }
              if (Ee && !u && !e[K.g.Mb]) {
                var y = ks;
                ks = !0;
                if (y) return;
              }
              js || J(43);
              if (!b.noTargetGroup)
                if (u) {
                  hs(f.id);
                  var A = f.id,
                    B = e[K.g.ie] || "default";
                  B = String(B).split(",");
                  for (var C = 0; C < B.length; C++) {
                    var I = es[B[C]] || [];
                    es[B[C]] = I;
                    0 > I.indexOf(A) && I.push(A);
                  }
                } else {
                  gs(f.id);
                  var F = f.id,
                    G = e[K.g.ie] || "default";
                  G = G.toString().split(",");
                  for (var L = 0; L < G.length; L++) {
                    var N = ds[G[L]] || [];
                    ds[G[L]] = N;
                    0 > N.indexOf(F) && N.push(F);
                  }
                }
              delete e[K.g.ie];
              var R = b.eventMetadata || {};
              R.hasOwnProperty("is_external_event") ||
                (R.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = R;
              delete e[K.g.Oc];
              for (var Z = u ? [f.id] : ng(), S = 0; S < Z.length; S++) {
                var O = e,
                  Y = H(b),
                  ba = jl(Z[S], Y.isGtmEvent);
                ba && Ur.push("config", [O], ba, Y);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          J(39);
          var c = ls(a, b),
            d = a[1];
          "default" === d
            ? Xf(a[2])
            : "update" === d
            ? Yf(a[2], c)
            : "declare" === d
            ? b.fromContainerExecution && Wf(a[2])
            : "core_platform_services" === d && Zf(a[2]);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && g(c)) {
          var d;
          if (2 < a.length) {
            if ((!ic(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            h = ((f.event = c), f);
          e &&
            ((h.eventModel = H(e)),
            e[K.g.Oc] && (h.eventCallback = e[K.g.Oc]),
            e[K.g.ce] && (h.eventTimeout = e[K.g.ce]));
          var l = ls(a, b),
            m = l.eventId,
            n = l.priorityId;
          h["gtm.uniqueEventId"] = m;
          n && (h["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (h.eventModel = h.eventModel || {}), h;
          var p;
          var q = d,
            r = q && q[K.g.Kb];
          void 0 === r &&
            ((r = Ze(K.g.Kb, 2)), void 0 === r && (r = "default"));
          if (g(r) || va(r)) {
            var t;
            b.isGtmEvent
              ? (t = g(r) ? [r] : r)
              : (t = r.toString().replace(/\s+/g, "").split(","));
            var u = fs(t, b.isGtmEvent),
              v = u.il,
              w = u.jl;
            if (w.length)
              for (var x = ps(q), y = 0; y < w.length; y++) {
                var A = jl(w[y], b.isGtmEvent);
                A &&
                  Ip(A.X, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = ll(v, b.isGtmEvent);
          } else p = void 0;
          var B = p;
          if (B) {
            Xq(m, c);
            for (var C = [], I = 0; I < B.length; I++) {
              var F = B[I],
                G = H(b);
              if (-1 !== is.indexOf(sg(F.prefix))) {
                var L = H(d),
                  N = G.eventMetadata || {};
                N.hasOwnProperty("is_external_event") ||
                  (N.is_external_event = !G.fromContainerExecution);
                G.eventMetadata = N;
                delete L[K.g.Oc];
                Vr(c, L, F.id, G);
              }
              C.push(F.id);
            }
            h.eventModel = h.eventModel || {};
            0 < B.length
              ? (h.eventModel[K.g.Kb] = C.join())
              : delete h.eventModel[K.g.Kb];
            js || J(43);
            void 0 === b.noGtmEvent &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            h.eventModel[K.g.pb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : h;
          }
        }
      },
      get: function (a, b) {
        J(53);
        if (4 === a.length && g(a[1]) && g(a[2]) && ta(a[3])) {
          var c = jl(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            js || J(43);
            var f = ps();
            if (
              !xa(ng(), function (l) {
                return c.X === l;
              })
            )
              Ip(c.X, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== is.indexOf(sg(c.prefix))) {
              ls(a, b);
              var h = {};
              Tf(H(((h[K.g.Ya] = d), (h[K.g.nb] = e), h)));
              Wr(
                d,
                function (l) {
                  E(function () {
                    return e(l);
                  });
                },
                c.id,
                b,
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          js = !0;
          var c = ls(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && ic(a[1])
          ? (c = H(a[1]))
          : 3 == a.length &&
            g(a[1]) &&
            ((c = {}),
            ic(a[2]) || va(a[2]) ? (c[a[1]] = H(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = ls(a, b),
            e = d.eventId,
            f = d.priorityId;
          H(c);
          var h = H(c);
          Ur.push("set", [h], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          P(14) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    rs = { policy: !0 };
  var ss = function (a) {
      var b = z[ye.da].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    ts = function (a) {
      var b = z[ye.da],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var us = !1,
    vs = [];
  function ws() {
    if (!us) {
      us = !0;
      for (var a = 0; a < vs.length; a++) E(vs[a]);
    }
  }
  var xs = function (a) {
    us ? E(a) : vs.push(a);
  };
  var Gs = function () {
      try {
        var a, b;
        var m,
          n = pg(),
          p = Hd(
            'script[src*="gtm/js?id=' +
              n +
              '"],script[src*="optimize.js?id=' +
              n +
              '"]',
          );
        m = p && 0 < p.length ? p[0] : null;
        b = m
          ? m.hasAttribute("gtm")
            ? "gtmo"
            : m.hasAttribute("async")
            ? "opta"
            : "opts"
          : "optu";
        b || (b = "gaoo");
        var q = zs(As, m && m.src),
          r = q.Ld,
          t = q.Md,
          u = q.Ne,
          v = q.Oe,
          w = q.Ee,
          x = q.Ue,
          y = q.xd,
          A = q.Rf,
          B = q.wd;
        "h0" != y || Bs || (y = "h3");
        Cs = {
          xd: y,
          wd: B,
          sk: a,
          al: b,
          Rf: A,
          Oe: v,
          Ee: w,
          Ue: x,
          Ne: u,
          Ld: r,
          Md: t,
          Xh: Ds,
          wi: Es,
        };
        Fs(Cs);
      } catch (C) {}
    },
    Hs = function () {
      var a = z.gaData,
        b = 0,
        c = void 0;
      if (a)
        for (var d in a)
          if (a.hasOwnProperty(d) && 0 === d.indexOf("UA-") && a[d].hitcount) {
            b += a[d].hitcount;
            var e = Number(a[d].first_hit);
            e && (!c || e < c) && (c = e);
          }
      return { Yh: b, Vh: c };
    },
    zs = function (a, b) {
      var c, d, e, f, h, l, m, n, p;
      var q = z.performance;
      if (q) {
        if (b) {
          var r = q.getEntriesByName(b)[0];
          if (r) {
            var t = q.getEntriesByType("resource"),
              u = 0;
            t && 0 < t.length && (u = t[0].startTime);
            f = Math.round(r.startTime - u);
            h = Math.round(r.duration);
            e = t.indexOf(r);
            -1 === e && (e = void 0);
            l = Math.round(a - (r.startTime + r.duration));
          }
        }
        var v = q.timing;
        if (v.domContentLoadedEventStart) {
          var w = v.domContentLoadedEventStart - v.navigationStart;
          w && (d = Math.round(a - w));
        }
        var x = q.getEntriesByType("paint").filter(function (C) {
          return "first-contentful-paint" === C.name;
        })[0];
        x && (c = Math.round(a - x.startTime));
      }
      var y = z[ye.da].hide;
      if (y) {
        if (void 0 === y[pg()]) m = "h2";
        else {
          var A = !1;
          if (null === y.end)
            for (var B in y)
              if (y.hasOwnProperty(B) && B.startsWith(pg()) && !0 === y[B]) {
                A = !0;
                break;
              }
          m = A ? "h0" : "h1";
        }
        y.start &&
          !isNaN(y.start) &&
          (q
            ? q.timing &&
              (p = Math.round(a + q.timing.navigationStart - y.start))
            : (p = a - y.start));
        isNaN(y.timeout) || (n = y.timeout);
      }
      return { Ld: d, Md: c, Ne: e, Oe: f, Ee: h, Ue: l, xd: m, Rf: n, wd: p };
    },
    Fs = function (a, b) {
      b = void 0 === b ? "ol" : b;
      var c = function (e, f) {
          null != f && (d += e + encodeURIComponent(f));
        },
        d = Kg + "&cv=5";
      c("&t=", b);
      c("&s=", a.xd);
      c("&h=", a.wd);
      c("&g=", a.sk);
      c("&p=", a.al);
      c("&o=", a.Rf);
      c(
        "&l=",
        (function () {
          var e = Oe;
          return e ? ys - Da(e) : void 0;
        })(),
      );
      c("&q=", a.Oe);
      c("&f=", a.Ee);
      c("&e=", a.Ue);
      c("&i=", a.Ne);
      c("&d=", a.Ld);
      c("&c=", a.Md);
      c("&tr=", a.Nl);
      c("&jl=", a.Yk);
      c("&jf=", a.Wk);
      c("&ji=", a.Xk);
      c("&jq=", a.Zk);
      c("&jd=", a.Uk);
      c("&jx=", a.Vk);
      c("&hc=", a.Xh);
      c("&fh=", a.wi);
      d += "&sr=0.050000";
      c("&ps=", Is);
      c("&cb=", ya());
      Tb(d);
    },
    Js = !1,
    ys,
    As,
    Bs,
    Is,
    Cs,
    Ds,
    Es;
  (Is = Math.random()), (Js = "0.050000" > Is);
  var Ks = function () {
      if (!Js || ys) return;
      ys = Ja();
      As = cc() || ys;
      Bs = !!D.querySelector("body");
      var a = Hs(),
        b = a.Vh;
      Ds = a.Yh;
      Es = b ? ys - b : void 0;
      xs(Gs);
    },
    Ms = function (a) {
      var b = Ls;
      if (!Js) return;
      try {
        var c = Ja(),
          d = cc() || c,
          e = Hs(),
          f = e.Yh,
          h = e.Vh,
          l = h ? c - h : void 0;
        xs(function () {
          var m = zs(d, b),
            n = m.Ld,
            p = m.Md,
            q = m.Ne,
            r = m.Oe,
            t = m.Ee,
            u = m.Ue,
            v = m.xd,
            w = m.wd,
            x = H(Cs || {});
          H(a, x);
          H(
            {
              xd: v,
              wd: w,
              Ld: n,
              Md: p,
              Xk: q,
              Zk: r,
              Uk: t,
              Vk: u,
              Xh: f,
              wi: l,
            },
            x,
          );
          Fs(x, "od");
        });
      } catch (m) {}
    };
  var Os = function (a) {
    if (Ns(a)) return a;
    this.h = a;
  };
  Os.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var Ns = function (a) {
    return !a || "object" !== fc(a) || ic(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  Os.prototype.getUntrustedMessageValue = Os.prototype.getUntrustedMessageValue;
  var Ps = 0,
    Qs = {},
    Rs = [],
    Ss = [],
    Ts = !1,
    Us = !1;
  function Vs(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Ws = function (a) {
      return z[ye.da].push(a);
    },
    Xs = function (a, b) {
      if (!ua(b) || 0 > b) b = 0;
      var c = ze[ye.da],
        d = 0,
        e = !1,
        f = void 0;
      f = z.setTimeout(function () {
        e || ((e = !0), a());
        f = void 0;
      }, b);
      return function () {
        var h = c ? c.subscribers : 1;
        ++d === h &&
          (f && (z.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
      };
    };
  function Ys(a, b) {
    var c = a._clear || b.overwriteModelFields;
    k(a, function (e, f) {
      "_clear" !== e && (c && bf(e), bf(e, f));
    });
    Oe || (Oe = a["gtm.start"]);
    Ks();
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = Te()), (a["gtm.uniqueEventId"] = d), bf("gtm.uniqueEventId", d));
    return Qr(a);
  }
  function Zs(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Ca(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function $s() {
    var a;
    if (Ss.length) a = Ss.shift();
    else if (Rs.length) a = Rs.shift();
    else return;
    var b;
    var c = a;
    if (Ts || !Zs(c.message)) b = c;
    else {
      Ts = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Te());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        h = {},
        l = {
          message:
            ((h.event = "gtm.init"), (h["gtm.uniqueEventId"] = d - 1), h),
          messageContext: { eventId: d - 1 },
        };
      Rs.unshift(l, c);
      if (Jg) {
        var m = jg.ctid;
        if (m) {
          var n,
            p = rg(xg());
          n = p && p.context;
          var q,
            r = yj(z.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = jg.If,
            w = hg.se;
          Jg &&
            (Jp || (Jp = q),
            Kp.push(
              m +
                ";" +
                v +
                ";" +
                (t ? 1 : 0) +
                ";" +
                (u || 0) +
                ";" +
                (w ? 1 : 0),
            ));
        }
      }
      b = f;
    }
    return b;
  }
  function at() {
    for (var a = !1, b; !Us && (b = $s()); ) {
      Us = !0;
      delete We.eventModel;
      Ye();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Us = !1;
      else {
        if (e.fromContainerExecution)
          for (
            var f = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              h = 0;
            h < f.length;
            h++
          ) {
            var l = f[h],
              m = Ze(l, 1);
            if (va(m) || ic(m)) m = H(m);
            Xe[l] = m;
          }
        try {
          if (ta(d))
            try {
              d.call($e);
            } catch (C) {}
          else if (va(d)) {
            var n = d;
            if (g(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                r = n.slice(1),
                t = Ze(p.join("."), 2);
              if (null != t)
                try {
                  t[q].apply(t, r);
                } catch (C) {}
            }
          } else {
            var u = void 0,
              v = !1;
            if (Ca(d)) {
              a: {
                if (d.length && g(d[0])) {
                  var w = qs[d[0]];
                  if (w && (!e.fromContainerExecution || !rs[d[0]])) {
                    u = w(d, e);
                    break a;
                  }
                }
                u = void 0;
              }
              (v = u && "set" === d[0] && !!u.event) && J(101);
            } else u = d;
            if (u) {
              var x = Ys(u, e);
              a = x || a;
              v && x && J(113);
            }
          }
        } finally {
          e.fromContainerExecution && Ye(!0);
          var y = d["gtm.uniqueEventId"];
          if ("number" === typeof y) {
            for (var A = Qs[String(y)] || [], B = 0; B < A.length; B++)
              Ss.push(bt(A[B]));
            A.length && Ss.sort(Vs);
            delete Qs[String(y)];
            y > Ps && (Ps = y);
          }
          Us = !1;
        }
      }
    }
    return !a;
  }
  function ct() {
    if (P(30)) {
      var a = dt();
    }
    var e = at();
    try {
      ss(pg());
    } catch (f) {}
    return e;
  }
  function vr(a) {
    if (Ps < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Qs[b] = Qs[b] || [];
      Qs[b].push(a);
    } else
      Ss.push(bt(a)),
        Ss.sort(Vs),
        E(function () {
          Us || at();
        });
  }
  function bt(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var et = function () {
      function a(f) {
        var h = {};
        if (Ns(f)) {
          var l = f;
          f = Ns(l) ? l.getUntrustedMessageValue() : void 0;
          h.fromContainerExecution = !0;
        }
        return { message: f, messageContext: h };
      }
      var b = Lb(ye.da, []),
        c = (ze[ye.da] = ze[ye.da] || {});
      !0 === c.pruned && J(83);
      Qs = tr().get();
      wr();
      $p(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      xs(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < ze.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var h = 0; h < arguments.length; h++)
            f[h] = new Os(arguments[h]);
        } else f = [].slice.call(arguments, 0);
        var l = f.map(function (q) {
          return a(q);
        });
        Rs.push.apply(Rs, l);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (J(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof m || m;
        return at() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Rs.push.apply(Rs, e);
      dt() && (P(30) && Mo(), E(ct));
    },
    dt = function () {
      var a = !0;
      return a;
    };
  function ft(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ja();
    return b < c + 3e5 && b > c - 9e5;
  }
  function gt(a) {
    return a && 0 === a.indexOf("pending:") ? ft(a.substr(8)) : !1;
  }
  var Ct = function () {};
  var Dt = new String("undefined"),
    Et = function () {};
  Et.prototype.toString = function () {
    return "undefined";
  };
  var Ft = new Et();
  var ku = z.clearTimeout,
    lu = z.setTimeout,
    U = function (a, b, c, d) {
      if (Zi()) {
        b && E(b);
      } else return Qb(a, b, c, d);
    },
    mu = function () {
      return new Date();
    },
    nu = function () {
      return z.location.href;
    },
    ou = function (a) {
      return wj(yj(a), "fragment");
    },
    pu = function (a) {
      return xj(yj(a));
    },
    qu = function (a, b) {
      return Ze(a, b || 2);
    },
    ru = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Ws(a)))
        : (d = Ws(a));
      return d;
    },
    su = function (a, b) {
      z[a] = b;
    },
    V = function (a, b, c) {
      b && (void 0 === z[a] || (c && !z[a])) && (z[a] = b);
      return z[a];
    },
    tu = function (a, b, c) {
      return Gi(a, b, void 0 === c ? !0 : !!c);
    },
    uu = function (a, b, c) {
      return 0 === Pi(a, b, c);
    },
    vu = function (a, b) {
      if (Zi()) {
        b && E(b);
      } else Sb(a, b);
    },
    wu = function (a) {
      return !!Rt(a, "init", !1);
    },
    xu = function (a) {
      Pt(a, "init", !0);
    },
    yu = function (a, b, c) {
      jc(a) || dr(c, b, a);
    };
  var zu = function (a) {
      if (!a || a.nodeType != Node.ELEMENT_NODE) return !1;
      var b = a.tagName.toUpperCase();
      return "SCRIPT" == b || "STYLE" == b || "LINK" == b;
    },
    Au = function (a, b, c) {
      try {
        null == c ? a.removeAttribute(b) : a.setAttribute(b, c);
      } catch (d) {
        return d;
      }
      return null;
    },
    Bu = function (a, b, c) {
      var d = a.getAttribute(b);
      return Au(a, b, c)
        ? 8
        : function () {
            Au(a, b, d);
          };
    },
    Eu = function (a, b, c) {
      var d,
        e,
        f = a.ownerDocument || a.document || document;
      c = (c || "").toLowerCase();
      "after" == c
        ? ((d = a.parentNode), (e = a.nextSibling))
        : "insert" == c
        ? ((d = a), (e = a.firstChild))
        : "append" == c
        ? ((d = a), (e = null))
        : ((d = a.parentNode), (e = a));
      if (!d || d == f) return { result: 1, Nk: [] };
      var h = Cu(b, d);
      Du(h, "SCRIPT");
      Du(h, "NOSCRIPT");
      var l = [];
      if (h.firstChild)
        for (var m = h.firstChild; m; ) {
          var n = m.nextSibling;
          l.push(m);
          d.insertBefore(m, e);
          m = n;
        }
      var p = a.nextSibling;
      "replace" == c && d.removeChild(a);
      return {
        result: function () {
          for (; 0 < l.length; ) d.removeChild(l.pop());
          "replace" == c && d.insertBefore(a, p);
        },
        Nk: l.slice(),
      };
    },
    Fu = {
      SELECT: [1, '<select multiple="multiple">', "</select>"],
      FIELDSET: [1, "<fieldset>", "</fieldset>"],
      MAP: [1, "<map>", "</map>"],
      OBJECT: [1, "<object>", "</object>"],
      TABLE: [1, "<table>", "</table>"],
      TBODY: [2, "<table><tbody>", "</tbody></table>"],
      COLGROUP: [2, "<table><colgroup>", "</colgroup></table>"],
      TR: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    },
    Cu = function (a, b) {
      var c = 0,
        d = "",
        e = "",
        f = Fu[b.tagName];
      null != f && ((c = f[0]), (d = f[1]), (e = f[2]));
      var h = b.ownerDocument.createElement("div"),
        l = Hb(d + (a || "") + e);
      1 === h.nodeType && Bb(h);
      h.innerHTML = Ab(l);
      for (var m = h; 0 < c; ) {
        var n = m.firstChild;
        if (null == n.firstChild) return b.ownerDocument.createElement("div");
        m = n;
        c--;
      }
      return m;
    },
    Du = function (a, b) {
      for (
        var c = a.getElementsByTagName(b), d = [], e = c.length - 1;
        0 <= e;
        e--
      ) {
        var f = c[e];
        f.parentNode.removeChild(f);
        d.push(f);
      }
    },
    Gu = function (a) {
      var b = null,
        c = null;
      try {
        b = new Function("element", a);
      } catch (d) {
        c = d;
      }
      return { Nf: b, error: c };
    },
    Ku = function (a, b, c, d, e) {
      var f = a + "{" + (b + ": " + c + (d ? " !important" : "")) + "}";
      e && (f = e + "{" + f + "}");
      var h = document;
      if (h.createStyleSheet) {
        var l = Hu(h),
          m = l.rules.length;
        l.insertRule(f, m);
        return function () {
          l.deleteRule ? l.deleteRule(m) : l.removeRule(m);
          l.insertRule("x {}", m);
        };
      }
      var n = Iu(f, h);
      Ju(n, h);
      var p = n.parentNode;
      return function () {
        p.removeChild(n);
      };
    },
    Lu = null,
    Hu = function (a) {
      if (Lu) return Lu;
      for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
        var c = a.styleSheets[b];
        if (!c.href) {
          var d = c.ownerNode;
          if (d && d.parentNode && "HEAD" == d.parentNode.tagName)
            return (Lu = c);
        }
      }
      0 == a.styleSheets.length && a.createStyleSheet();
      return (Lu = a.styleSheets[0]);
    },
    Iu = function (a, b) {
      var c = (b || document).createElement("style");
      void 0 !== c.cssText ? (c.cssText = a) : (c.innerHTML = a);
      return c;
    },
    Ju = function (a, b) {
      var c = b || document,
        d = c.getElementsByTagName("head")[0];
      d ||
        ((d = c.createElement("head")),
        c.body.parentNode.insertBefore(d, c.body));
      d.appendChild(a);
    },
    Mu = function (a, b, c, d) {
      if (a.style.setProperty)
        try {
          var e = a.style.getPropertyValue(b),
            f = a.style.getPropertyPriority(b);
          a.style.setProperty(b, c, d ? "important" : "");
          return function () {
            a.style.setProperty(b, "", f);
            a.style.setProperty(b, e, f);
          };
        } catch (l) {}
      var h = a.style.cssText;
      a.style.cssText += ";" + (b + ": " + c + (d ? " !important" : "")) + ";";
      return function () {
        a.style.cssText = h;
      };
    },
    Ou = function (a, b, c, d) {
      if (zu(a)) return 7;
      if (b) return Nu(a, b, d);
      if (c && c.parentNode) {
        var e = a.parentNode,
          f = a.nextSibling;
        try {
          c.parentNode.insertBefore(a, c.nextSibling);
        } catch (h) {
          return 9;
        }
        return function () {
          e.insertBefore(a, f);
        };
      }
      return 4;
    },
    Nu = function (a, b, c) {
      var d = a.parentNode,
        e = a.nextSibling;
      c = (c || "").toLowerCase();
      try {
        if ("bottom" == c) b.appendChild(a);
        else if ("top" == c) b.insertBefore(a, b.childNodes[0] || null);
        else if ("before" == c)
          if (b.parentNode) b.parentNode.insertBefore(a, b);
          else return 5;
        else if ("after" == c)
          if (b.parentNode) b.parentNode.insertBefore(a, b.nextSibling);
          else return 5;
      } catch (f) {
        return 9;
      }
      return function () {
        try {
          d.insertBefore(a, e);
        } catch (f) {}
      };
    },
    Pu = function (a, b, c) {
      if (0 <= b && b < a.childNodes.length) {
        var d = a.childNodes[b];
        if (null != d && d.nodeType == Node.TEXT_NODE) {
          var e = d.nodeValue;
          d.nodeValue = c;
          return function () {
            d.nodeValue = e;
          };
        }
        return 2;
      }
      return 3;
    },
    Qu = function (a, b, c, d) {
      c ? (d = c.nextSibling) : d && (c = d.previousSibling);
      if (null != c && c.nodeType == Node.TEXT_NODE) {
        var e = c.nodeValue;
        c.nodeValue += a;
        return function () {
          c.nodeValue = e;
        };
      }
      if (null != d && d.nodeType == Node.TEXT_NODE) {
        var f = d.nodeValue;
        d.nodeValue = a + d.nodeValue;
        return function () {
          d.nodeValue = f;
        };
      }
      var h = (b.ownerDocument || b.document || document).createTextNode(a);
      d ? b.insertBefore(h, d) : b.appendChild(h);
      return function () {
        b.removeChild(h);
      };
    },
    Ru = function (a) {
      var b = document.createElement("a");
      a && (b.href = a);
      return b;
    };
  function Vu(a, b) {
    function c(h) {
      var l = yj(h),
        m = wj(l, "protocol"),
        n = wj(l, "host", !0),
        p = wj(l, "port"),
        q = wj(l, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Wu(a) {
    return Xu(a) ? 1 : 0;
  }
  function Xu(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = H(a, {});
        H({ arg1: c[d], any_of: void 0 }, e);
        if (Wu(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var h = 0; h < wd.length; h++) {
                var l = wd[h];
                if (b[l]) {
                  f = b[l](c);
                  break a;
                }
              }
            } catch (v) {}
          f = !1;
        }
        return f;
      case "_ew":
        var m, n;
        m = String(b);
        n = String(c);
        var p = m.length - n.length;
        return 0 <= p && m.indexOf(n, p) === p;
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        var q;
        var r = a.ignore_case ? "i" : void 0;
        try {
          var t = String(c) + r,
            u = xd.get(t);
          u || ((u = new RegExp(c, r)), xd.set(t, u));
          q = u.test(b);
        } catch (v) {
          q = !1;
        }
        return q;
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Vu(b, c);
    }
    return !1;
  }
  function Yu() {
    var a = [
      "&cv=5",
      "&rv=" + ye.Ef,
      "&tc=" +
        Rc.filter(function (b) {
          return b;
        }).length,
    ];
    ye.md && a.push("&x=" + ye.md);
    return a.join("");
  }
  var Bv = function () {
      var a = !0;
      (ki(7) && ki(9) && ki(10)) || (a = !1);
      return a;
    },
    Cv = function () {
      var a = !0;
      (ki(3) && ki(4)) || (a = !1);
      return a;
    };
  sf();
  function Hw() {
    return (z.gaGlobal = z.gaGlobal || {});
  }
  var Iw = function () {
      var a = Hw();
      a.hid = a.hid || ya();
      return a.hid;
    },
    Jw = function (a, b) {
      var c = Hw();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var Gx = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Hx = /^www.googleadservices.com$/;
  var Ix = window,
    Jx = document,
    Kx = function (a) {
      var b = Ix._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        Jx.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && !0 === Ix["ga-disable-" + a])
      )
        return !0;
      try {
        var c = Ix.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Ci("AMP_TOKEN", String(Jx.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return Jx.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function Sx(a) {
    k(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[K.g.La] || {};
    k(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var ay = function (a, b) {};
  function $x(a, b) {
    var c = function () {};
    return c;
  }
  function by(a, b, c) {}
  var cy = $x;
  Object.freeze({ dl: 1, id: 1 });
  Object.freeze(["config", "event", "get", "set"]);
  var ey = encodeURI,
    W = encodeURIComponent,
    fy = function (a, b, c) {
      Tb(a, b, c);
    },
    gy = function (a, b) {
      if (!a) return !1;
      var c = wj(yj(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    hy = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var ky = function (a) {
      if (!iy[a]) {
        iy[a] = !0;
        var b = z[a] || {};
        z[a] = b;
        var c = function (e) {
            return jy[e];
          },
          d = b.get;
        b.get = d
          ? function (e) {
              return void 0 !== jy[e] ? jy[e] : d(e);
            }
          : c;
      }
    },
    ny = function (a, b) {
      jy[a] = b;
      for (var c = ly(a), d = 0; d < c.length; d++) my(c[d], a, b);
      c = ly("");
      for (var e = 0; e < c.length; e++) my(c[e], a, b);
    },
    my = function (a, b, c) {
      try {
        a(c, b, pg());
      } catch (d) {}
    },
    ly = function (a) {
      oy[a] = oy[a] || [];
      return oy[a];
    },
    jy = {},
    oy = {},
    iy = {};
  var py = function () {
      z.gaData = z.gaData || {};
      return z.gaData;
    },
    qy = function (a, b) {
      b = void 0 === b ? !1 : b;
      z.gaData = z.gaData || {};
      var c = z.gaData,
        d = c.tracker_created;
      c.tracker_created = function (e) {
        b && a(e);
        d && ta(d) && d(e);
        b || a(e);
      };
    },
    ry = function (a) {
      var b = z[kq()];
      try {
        if (ta(b) && ta(b.getAll))
          return b.getAll().filter(function (c) {
            return c.get("trackingId") === a;
          });
      } catch (c) {}
      return [];
    },
    xy = function (a, b) {
      var c = sy[a];
      if (c)
        E(function () {
          return b(c);
        });
      else {
        var d = ry(a)[0];
        d
          ? ((sy[a] = d),
            ty || (ty = d),
            E(function () {
              return b(d);
            }))
          : (uy[a] || (uy[a] = []),
            uy[a].push(b),
            vy ||
              ((vy = !0),
              qy(function (e) {
                var f = e.get("trackingId");
                if (uy[f]) {
                  if (wy[f]) {
                    wy[f] = !1;
                    var h = z[kq()];
                    ta(h) && h("ga.require", "_" + pg());
                  }
                  ty || (ty = e);
                  sy[f] = e;
                  for (var l = uy[f], m; void 0 !== (m = l.shift()); ) m(e);
                  uy[f] = void 0;
                }
              })));
      }
    },
    yy = function (a, b, c, d) {
      var e = z[kq()];
      if ("data" === b.hitType && c) {
        var f = z.gaData,
          h = Number(f && f[d] && f[d].first_hit),
          l = Ja();
        !isNaN(h) && l > h && (b.queueTime = Math.min(2e3, l + 100 - h));
      }
      try {
        var m = "t0" != a.get("name") ? a.get("name") + ".send" : "send";
        e(m, b);
      } catch (n) {}
    },
    sy = {},
    uy = {},
    wy = {},
    ty,
    vy = !1,
    zy,
    Ay = function (a, b, c) {
      xy(a, function (d) {
        E(function () {
          yy(d, b, c, a);
        });
      });
    },
    By = function () {
      var a = !1;
      qy(function () {
        if (!a) {
          var b = z[kq()];
          ta(b) && (b("ga.require", "__" + pg()), (a = !0));
        }
      }, !0);
    },
    Cy = function (a, b, c) {
      var d = py(),
        e = (d[a] = d[a] || {});
      (e.pending_experiments = e.pending_experiments || {})[b] = c;
      e.experiments = e.experiments || {};
      e.experiments[b] = c;
    },
    Dy = function (a) {
      var b = py()[a];
      return b ? b.hitcount || 0 : 0;
    },
    Gy = function (a, b, c, d, e, f) {
      ny(b, c);
      var h = d;
      if (d) {
        var l = vj(z.location, "host");
        vj(yj(d), "host") === l && (d = "");
      }
      qy(function (q) {
        q.set("referrer", d ? d : void 0);
      }, !0);
      if (Ey(a)) (ze.ga4_referrer_override = h), Fy(a, b, c, e, f);
      else {
        Cy(a, b, c);
        for (var m = ry(a), n = 0; n < m.length; ++n)
          m[n].set("referrer", d ? d : void 0);
        if (0 < Dy(a)) {
          var p = m[0];
          p && yy(p, { hitType: "data" }, !0, a);
        }
      }
    },
    Ey = function (a) {
      return !!a && "G-" === a.substring(0, 2);
    },
    Fy = function (a, b, c, d, e) {
      if (Ey(a)) {
        var f = rr(a, "experiment_impression", {
          experiment_id: b,
          variant_id: c,
        });
        ur(f, d, { originatingEntity: e, deferrable: !0 });
      } else Cy(a, b, c), 0 < Dy(a) && Ay(a, { hitType: "data" }, !0);
    };

  var Ky = function (a, b, c) {
      function d() {
        f || ((f = !0), !0 !== Hy && (Hy = !1), Iy(c), ss(e));
      }
      Ls = a;
      var e = "OPT-TC5SBN6_" + b,
        f = !1;
      ts(e);
      z.google_optimize = z.google_optimize || {};
      var h = z.google_optimize;
      h["OPT-TC5SBN6"] = h["OPT-TC5SBN6"] || {};
      h["OPT-TC5SBN6"].optimize_dyn = function (m) {
        m.split(",").forEach(function (n) {
          Jy[n] = !0;
        });
        Hy = !0;
        d();
      };
      Qb(a, void 0, d);
      var l = z[ye.da];
      z.setTimeout(
        function () {
          d();
        },
        Number(l && l.hide && l.hide.timeout) || 1e4,
      );
    },
    Iy = function (a) {
      if (void 0 !== Ly) {
        var b = Ly - My,
          c,
          d;
        Hy ? (c = Ja() - Ly) : (d = Ja() - Ly);
        Ms({ Nl: b, Yk: c, Wk: d });
      }
      Jy.optimize_ready = !0;
      Ws({ event: "opt.dyn" });
      Ws({ event: "opt.js" });
      if (a && 0 < a.length) {
        var e = {};
        z[ye.da].forEach(function (f) {
          var h = f.event;
          h && (e[h] = !0);
        });
        a.forEach(function (f) {
          e[f] && Ws({ event: f });
        });
      }
      E(function () {
        pq("_" + pg());
      });
    },
    Ny = function (a, b, c, d, e, f, h, l, m) {
      function n(w, x) {
        x && (t += "&" + w + "=" + encodeURIComponent(x));
      }
      My = Ja();
      if (a || b || c) {
        var p = void 0;
        if (b) {
          var q = Pk().aw;
          q && (p = q[0]);
        }
        if (f && (a || c || p)) {
          var r = 1,
            t,
            u = "OPT-TC5SBN6_" + r++;
          ts(u);
          var v = function (w) {
            zy = w;
            Ly = Ja();
            a || b
              ? ((t =
                  "https://www.google-analytics.com/gtm/optimize-dyn.js?id=OPT-TC5SBN6"),
                a && n("cid", w),
                n("gclid", p),
                h && (n("gtm_auth", ""), n("gtm_preview", "")),
                (h || a) && n("cb", String(Math.random())),
                Ky(t, r++, e))
              : Iy(e);
            ss(u);
          };
          Ey(d)
            ? ur(pr("get", d, "client_id", v), l, {
                originatingEntity: m,
                deferrable: !0,
              })
            : ((wy[d] = !0),
              xy(d, function (w) {
                return v(w.get("clientId"));
              }));
        } else Iy(e);
      }
    },
    Jy = {},
    My,
    Ly,
    Hy,
    Ls;
  var Oy = function (a, b) {
    this.Be = a;
    this.Jd = b;
  };
  Oy.prototype.toString = function () {
    var a = "" + this.Be;
    1 < this.Jd && (a = a + "-" + this.Jd);
    return a;
  };
  var Py = function (a, b) {
    this.B = a;
    this.h = b;
  };
  Py.prototype.toString = function () {
    return this.h + "." + this.B;
  };
  var Qy = function () {
      var a = Ze("optimize.cookie_path", 2);
      return g(a) ? a : "/";
    },
    Sy = function (a, b) {
      var c = new Ry(a, b);
      c.nl();
      return c;
    },
    Ry = function (a, b) {
      this.H = Math.floor(new Date() / 864e5);
      this.C = a || "auto";
      this.h = b || Qy();
      this.B = new Oy(Ui(this.C), Vi(this.h));
      this.K = [];
      this.map = {};
    };
  ca = Ry.prototype;
  ca.zk = function (a) {
    if (!a) return "";
    var b = this.Of(a);
    return b ? b.B : "";
  };
  ca.Fl = function (a, b, c, d, e) {
    var f, h;
    f = void 0 === f ? 10 : f;
    h = void 0 === h ? 3e3 : h;
    if (!a) return !1;
    void 0 == b && (b = "");
    this.Se(a, new Py(b, c));
    this.Yj(e);
    return this.Kj(d, f, h);
  };
  ca.Of = function (a) {
    return this.map[a];
  };
  ca.xk = function () {
    for (var a = 0, b = 0; b < this.K.length; b++)
      "x" !== this.Of(this.K[b]).B[0] && a++;
    return a;
  };
  ca.Se = function (a, b) {
    a &&
      ("" === b.B
        ? this.li(a)
        : (this.map[a] || this.K.push(a), (this.map[a] = b)));
  };
  ca.Il = function (a) {
    for (var b = 0; b < a.length; b++) this.Se(a[b][0], a[b][1]);
  };
  ca.li = function (a) {
    var b = this.K.indexOf(a);
    0 <= b && this.K.splice(b, 1);
    delete this.map[a];
  };
  ca.zl = function () {
    for (var a = [], b = 0; b < this.K.length; b++) {
      var c = this.K[b];
      this.map[c].h < this.H && a.push(c);
    }
    for (var d = 0; d < a.length; d++) this.li(a[d]);
  };
  ca.wk = function () {
    for (var a = [], b = 0; b < this.K.length; b++) {
      var c = this.K[b];
      a.push([c, this.map[c]]);
    }
    return a;
  };
  ca.nk = function () {
    for (var a = 0, b = 0; b < this.K.length; b++)
      a = Math.max(a, this.map[this.K[b]].h);
    return 864e5 * a;
  };
  ca.toString = function () {
    if (0 == this.K.length) return "";
    for (var a = [], b = 0; b < this.K.length; b++) {
      var c = this.K[b];
      a.push(c + "." + this.map[c].toString());
    }
    return "GAX1." + this.B.toString() + "." + a.join("!");
  };
  ca.Kj = function (a, b, c) {
    var d = new Date();
    this.zl();
    var e = this.xk();
    if (
      e > b ||
      (e > (a || 10) &&
        Fi().replace(
          RegExp("(?:;\\s*)?(_gaexp=[^;]+)(?:;\\s*)?"),
          this.toString(),
        ).length > c)
    )
      return !1;
    d.setTime(this.nk());
    if ("auto" != this.C)
      return (
        (this.B = new Oy(Ui(this.C), Vi(this.h))),
        0 ===
          Pi("_gaexp", this.toString(), {
            path: this.h,
            domain: this.C,
            expires: d,
          })
      );
    for (var f = Mi(), h = 0; h < f.length; h++)
      if (
        ((this.B = new Oy(Ui(f[h]), Vi(this.h))),
        0 ===
          Pi("_gaexp", this.toString(), {
            path: this.h,
            domain: f[h],
            expires: d,
          }))
      )
        return !0;
    return !1;
  };
  ca.nl = function () {
    var a = Ji("_gaexp", this.B.Be, this.B.Jd);
    if (a) {
      var b = this.ol(a);
      b && this.Il(b.wk());
    }
  };
  ca.ol = function (a) {
    for (
      var b = new Ry(this.C, this.h), c = a.split("!"), d = 0;
      d < c.length;
      d++
    ) {
      var e = c[d].split(".");
      if (3 == e.length) {
        if (isNaN(Number(e[1]))) return;
        b.Se(e[0], new Py(e[2], Number(e[1])));
      }
    }
    return b;
  };
  ca.Yj = function (a) {
    a = a || {};
    var b = 0;
    a.hasOwnProperty("") && !isNaN(Number(a[""])) && (b = this.H - Da(a[""]));
    for (var c = 0; c < this.K.length; c++) {
      var d = this.K[c];
      if (a.hasOwnProperty(d) && !isNaN(Number(a[d]))) {
        var e = this.Of(d);
        e.h = Da(a[d]) + b;
        this.Se(d, e);
      }
    }
  };
  var Xy = function () {
      Ty = Ja();
      var a = Uy;
      Uy = [];
      for (var b = 0; b < a.length; b++) a[b]();
      Vy &&
        (Vy.takeRecords(),
        Uy.length ||
          (Vy && (Vy.disconnect(), (Vy = null)),
          Wy && (z.clearTimeout(Wy), (Wy = null))));
    },
    Zy = function () {
      var a = Ja() - Ty;
      a >= Yy
        ? (Wy && (z.clearTimeout(Wy), (Wy = null)), Xy())
        : Wy ||
          (Wy = z.setTimeout(function () {
            Xy();
            Wy = null;
          }, Yy - a));
    },
    $y = function (a) {
      if (!z.MutationObserver) return !1;
      try {
        return (
          Vy ||
            ((Vy = new MutationObserver(Zy)),
            Vy.observe(D.documentElement, {
              subtree: !0,
              childList: !0,
              attributes: !0,
              characterData: !0,
            }),
            (Ty = Ja())),
          Uy.push(a),
          !0
        );
      } catch (b) {
        return !1;
      }
    },
    Vy = null,
    Uy = [],
    Yy = 0,
    Ty = 0,
    Wy = null;
  var az = function (a, b) {
      (b && $y(a)) || z.setTimeout(a, 80);
    },
    hz = function (a) {
      try {
        return Hd(a);
      } catch (b) {
        return null;
      }
    },
    pz = function (a) {
      if (Vp) return !0;
      for (; a; ) {
        if (a.nextSibling) return !0;
        a = a.parentNode;
      }
      return !1;
    },
    qz = function (a, b) {
      for (var c = hz(a.ja) || [], d = [], e = 0; e < c.length; e++) {
        var f = c[e];
        if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
          if (a.Ga && !pz(f)) break;
          d.push(f);
        }
      }
      return d;
    },
    rz = function (a, b) {
      return function () {
        a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[b];
      };
    },
    sz = function (a, b) {
      a.gtmProgressiveApplied || (a.gtmProgressiveApplied = {});
      a.gtmProgressiveApplied[b] = !0;
    },
    tz = function (a, b, c) {
      var d;
      var e = [];
      if (b.Na)
        if (b.Na.Hf) d = [{ element: D.head }];
        else {
          var f = qz(b.Na, b.id),
            h = null;
          b.Te && (h = qz(b.Te, b.id + "-t"));
          for (var l = 0; l < f.length; l++) {
            var m = f[l],
              n = void 0;
            if (
              null != h &&
              ((n = h.length > l ? h[l] : null),
              !n && !Vp && (null === b.Te.fa || b.Oh + e.length < b.Te.fa))
            )
              break;
            e.push({ element: m, targetElement: n });
          }
          d = e;
        }
      else d = e;
      var p = d;
      if (!Vp && b.Vj && (!a || null == b.Na.fa || b.Na.fa != b.ze + p.length))
        return !1;
      for (var q = 0; q < p.length; q++) {
        var r = p[q].element,
          t = p[q].targetElement,
          u = void 0;
        b.ze++;
        sz(r, b.id);
        t && (b.Oh++, (u = b.id + "-t"), sz(t, u));
        var v = b.Zj(r, t);
        ta(v) && b.wc.push(v);
        b.wc.push(rz(r, b.id));
        t && u && b.wc.push(rz(t, u));
      }
      if ((b.Na.fa && b.Na.fa == b.ze) || (Vp && (!c || b.ze))) b.finished = !0;
      return !0;
    },
    uz = function (a) {
      for (var b = {}, c = 0; c < a.Ma.length; c++) {
        var d = a.Ma[c];
        if (!d.Na.Hf) {
          var e = b[d.Na.ja];
          e || (e = b[d.Na.ja] = hz(d.Na.ja) || []);
          for (var f = 0; f < e.length; f++) {
            var h = e[f];
            (h.gtmProgressiveApplied && h.gtmProgressiveApplied[d.id]) ||
              (sz(h, d.id), d.wc.push(rz(h, d.id)));
          }
        }
      }
    },
    vz = function (a) {
      if (!a.mg) {
        for (var b = a.ud; b < a.Ma.length; b++) {
          var c = a.Ma[b],
            d = b == a.ud;
          if (!c.finished && !tz(d, c, a.Di && a.yi)) break;
          c.finished && d && a.ud++;
        }
        a.Ma.length > a.ud
          ? (!a.pending &&
              a.Di &&
              ((a.pending = !0),
              az(function () {
                a.pending = !1;
                vz(a);
              }, a.yi)),
            Vp ||
              a.gg ||
              ((a.gg = function () {
                E(function () {
                  vz(a);
                });
              }),
              Ub(D, "DOMContentLoaded", a.gg)))
          : uz(a);
      }
    },
    wz = {},
    xz = {},
    yz = void 0,
    zz = function (a, b, c, d) {
      var e = yz;
      if (!Gd || !e) return !1;
      var f = {
        id: e.id + ":" + e.Ma.length,
        Zj: b,
        wc: [],
        Vj: c,
        Na: a,
        ze: 0,
        Te: d || null,
        Oh: 0,
        finished: !1,
      };
      e.Ma.push(f);
      null === a ? ((f.finished = !0), b(null)) : vz(e);
      return !0;
    },
    Az = function (a) {
      var b = sa;
      try {
        b = Ku(a, "visibility", "hidden", !0);
      } catch (c) {}
      return function () {
        ta(b) && b.apply();
        b = null;
      };
    },
    Bz = function (a, b, c, d) {
      var e = b;
      if (!Vp && !a.Hf) {
        var f = Az(a.ja);
        Xp.push(f);
        e = function (h, l) {
          var m = b(h, l);
          f();
          return m;
        };
      }
      return zz(a, e, c, d);
    };
  var X = { m: {} };
  (X.m.dee = ["google"]),
    (function () {
      (function (a) {
        X.__dee = a;
        X.__dee.o = "dee";
        X.__dee.isVendorTemplate = !0;
        X.__dee.priorityOverride = 0;
        X.__dee.isInfrastructure = !1;
        X.__dee.runInSiloedMode = !1;
      })(function () {
        var a = !1;
        return a ? "gtm.sync" : "gtm.js";
      });
    })();

  (X.m.e = ["google"]),
    (function () {
      (function (a) {
        X.__e = a;
        X.__e.o = "e";
        X.__e.isVendorTemplate = !0;
        X.__e.priorityOverride = 0;
        X.__e.isInfrastructure = !1;
        X.__e.runInSiloedMode = !0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();

  (X.m.asprv = ["google"]),
    (function () {
      function a() {
        ru({ event: "optimize.domChange" });
        $y(a);
      }
      (function (b) {
        X.__asprv = b;
        X.__asprv.o = "asprv";
        X.__asprv.isVendorTemplate = !0;
        X.__asprv.priorityOverride = 0;
        X.__asprv.isInfrastructure = !1;
        X.__asprv.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_globalName,
          d = !!b.vtp_listenForMutations,
          e = qu("eventModel");
        c && ky(c);
        d && a();
        var f, h, l;
        e && ((f = e.name || ""), (h = e.callback), (l = e.remove));
        if (h && ta(h))
          if (((f = String(f)), !0 !== l)) {
            var m = f,
              n = h;
            ly(m).push(n);
            if ("" !== m) void 0 !== jy[m] && my(n, m, jy[m]);
            else for (var p in jy) void 0 !== jy[p] && my(n, p, jy[p]);
          } else {
            var q = h,
              r = ly(f),
              t = r.indexOf(q);
            0 <= t && r.splice(t, 1);
          }
        b.vtp_gtmOnSuccess();
      });
    })();

  var Dz = {};
  Dz.dataLayer = $e;
  Dz.callback = function (a) {
    Qe.hasOwnProperty(a) && ta(Qe[a]) && Qe[a]();
    delete Qe[a];
  };
  Dz.bootstrap = 0;
  Dz._spx = !1;
  function Ez() {
    ze[pg()] = ze[pg()] || Dz;
    vg();
    zg() ||
      k(Ag(), function (a, b) {
        Ip(a, b.transportUrl, b.context);
        J(92);
      });
    Ma(Re, X.m);
    P(99) && rg(xg());
    Yc = id;
  }
  (function (a) {
    function b() {
      m = D.documentElement.getAttribute("data-tag-assistant-present");
      ft(m) && (l = h.Fj);
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (D.referrer) {
        var d = yj(D.referrer);
        c = "cct.google" === vj(d, "host");
      }
      if (!c) {
        var e = Gi("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((z["__TAGGY_INSTALLED"] = !0),
        Qb("https://cct.google/taggy/agent.js"));
    }
    if (Le) a();
    else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          Fe ? ((v = "OGT"), (w = "GTAG")) : Le && (w = v = "OPT");
          var x = z["google.tagmanager.debugui2.queue"];
          x ||
            ((x = []),
            (z["google.tagmanager.debugui2.queue"] = x),
            Qb(
              "https://" +
                ye.Pd +
                "/debug/bootstrap?id=" +
                jg.ctid +
                "&src=" +
                w +
                "&cond=" +
                u +
                "&gtm=" +
                aj(),
            ));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Kb,
              containerProduct: v,
              debug: !1,
              id: jg.ctid,
              destinations: mg(),
            },
          };
          y.data.resume = function () {
            a();
          };
          ye.Gi && (y.data.initialPublish = !0);
          x.push(y);
        },
        h = { Xl: 1, Gj: 2, Rj: 3, Ii: 4, Fj: 5 },
        l = void 0,
        m = void 0,
        n = wj(z.location, "query", !1, void 0, "gtm_debug");
      ft(n) && (l = h.Gj);
      if (!l && D.referrer) {
        var p = yj(D.referrer);
        "tagassistant.google.com" === vj(p, "host") && (l = h.Rj);
      }
      if (!l) {
        var q = Gi("__TAG_ASSISTANT");
        q.length && q[0].length && (l = h.Ii);
      }
      l || b();
      if (!l && gt(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            l && Kb ? f(l) : a();
          },
          t = !1;
        Ub(
          D,
          "TADebugSignal",
          function () {
            r();
          },
          !1,
        );
        z.setTimeout(function () {
          r();
        }, 200);
      } else l && Kb ? f(l) : a();
    }
  })(function () {
    try {
      tg();
      if (P(30)) {
      }
      Af().B();
      hi();
      var b = qg();
      if (eg().canonical[b]) {
        var c = ze.zones;
        c && c.unregisterChild(lg());
      } else {
        Cp();
        for (
          var d = data.resource || {}, e = d.macros || [], f = 0;
          f < e.length;
          f++
        )
          Oc.push(e[f]);
        for (var h = d.tags || [], l = 0; l < h.length; l++) Rc.push(h[l]);
        for (var m = d.predicates || [], n = 0; n < m.length; n++)
          Qc.push(m[n]);
        for (var p = d.rules || [], q = 0; q < p.length; q++) {
          for (var r = p[q], t = {}, u = 0; u < r.length; u++) {
            var v = r[u][0];
            t[v] = Array.prototype.slice.call(r[u], 1);
            Mc(5) || Mc(7)
              ? (("if" !== v && "unless" !== v) || Xc(t[v]), ab("TAGGING", 22))
              : Mc(6) && ab("TAGGING", 23);
          }
          Pc.push(t);
        }
        Tc = X;
        Uc = Wu;
        Ez();
        if (P(46)) {
          for (
            var w = of["7"], x = w ? w.split("|") : [], y = {}, A = 0;
            A < x.length;
            A++
          )
            y[x[A]] = !0;
          for (var B = 0; B < Vf.length; B++) {
            var C = Vf[B],
              I = y[C] ? "granted" : "denied";
            Ff().implicit(C, I);
          }
        }
        et();
        Vp = !1;
        Wp = 0;
        if (
          ("interactive" == D.readyState && !D.createEventObject) ||
          "complete" == D.readyState
        )
          Yp();
        else {
          Ub(D, "DOMContentLoaded", Yp);
          Ub(D, "readystatechange", Yp);
          if (D.createEventObject && D.documentElement.doScroll) {
            var F = !0;
            try {
              F = !z.frameElement;
            } catch (O) {}
            F && Zp();
          }
          Ub(z, "load", Yp);
        }
        us = !1;
        "complete" === D.readyState ? ws() : Ub(z, "load", ws);
        Jg && (Eg(Wg), z.setInterval(Vg, 864e5));
        Eg(Yu);
        Eg(Yq);
        Eg(co);
        Eg(Tr);
        Eg(ir);
        Eg(Np);
        Eg(cj);
        Eg(Lp);
        Eg(er);
        P(58) && Eg(ar);
        Ws({ event: "gtm.js" });
        Ct();
        nf(1);
        Fr();
        Pe = Ja();
        Dz.bootstrap = Pe;
        if (P(30)) {
        }
      }
    } catch (O) {
      if ((nf(4), Jg)) {
        var S = Qg(!0, !0);
        Tb(S);
      }
    }
  });
})();
