(() => {
  "use strict";
  var e,
    t,
    a,
    r,
    o,
    n = {},
    d = {};
  function c(e) {
    var t = d[e];
    if (void 0 !== t) return t.exports;
    var a = (d[e] = { id: e, loaded: !1, exports: {} });
    return n[e].call(a.exports, a, a.exports, c), (a.loaded = !0), a.exports;
  }
  (c.m = n),
    (e = []),
    (c.O = (t, a, r, o) => {
      if (!a) {
        var n = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [a, r, o] = e[b], d = !0, i = 0; i < a.length; i++)
            (!1 & o || n >= o) && Object.keys(c.O).every((e) => c.O[e](a[i]))
              ? a.splice(i--, 1)
              : ((d = !1), o < n && (n = o));
          if (d) {
            e.splice(b--, 1);
            var f = r();
            void 0 !== f && (t = f);
          }
        }
        return t;
      }
      o = o || 0;
      for (var b = e.length; b > 0 && e[b - 1][2] > o; b--) e[b] = e[b - 1];
      e[b] = [a, r, o];
    }),
    (c.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return c.d(t, { a: t }), t;
    }),
    (a = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (c.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var o = Object.create(null);
      c.r(o);
      var n = {};
      t = t || [null, a({}), a([]), a(a)];
      for (var d = 2 & r && e; "object" == typeof d && !~t.indexOf(d); d = a(d))
        Object.getOwnPropertyNames(d).forEach((t) => (n[t] = () => e[t]));
      return (n.default = () => e), c.d(o, n), o;
    }),
    (c.d = (e, t) => {
      for (var a in t)
        c.o(t, a) &&
          !c.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (c.f = {}),
    (c.e = (e) =>
      Promise.all(Object.keys(c.f).reduce((t, a) => (c.f[a](e, t), t), []))),
    (c.u = (e) =>
      "baseline/" +
      e +
      "-" +
      {
        "LocaleBarEditor_2whdi-i18n":
          "a8cc6f247dd5983fe1eb77c58a294451f8920f1d0639b44b5c9929e4482a4504",
        "PreviewSelectors_831nu-i18n":
          "55d7a489fe58ecd125d1f82d2133817aa196ebde1caca50d08c50bfc3a46efbd",
        "SideBarPanel_ulmko-i18n":
          "27c44fe99d50b35a3c36309bfae38d8c45065dfc372751462de56197a34cc9d1",
        "MainPanel_mhk7x-i18n":
          "b8e84beb09fe6b3e366456266179e7a7018c4082ff07ccfd719fefec48af7c2d",
        "EmptyState_8dgj1-i18n":
          "a817edd77b6388f0eb4ed95ae75750836e341f886aaa8717933fb09f1fe0c955",
        "LocaleBarBlock_bq3tj-i18n":
          "c81b12bdb2091b3c26d25318cfa8521bce10a06f04eff68f27e1a591dab4171b",
        "SelectorsBlock_baki2-i18n":
          "6027e9a4220614da83b4982d307f548ae27d1c03074067324220f2f4fe9893cc",
        "Credits_13ohs-i18n":
          "b0092546e4dbc1aaec7db1038f5388b5c2423fa98c99166ee1b5195b84da3ff9",
        "CustomizeSelectorsPanel_1cr5f-i18n":
          "657218fbb24d15b969c155d0a1ba218a33c6d2f0566cdb6e6e8a0ab51fa5e546",
        "ConfirmationModal_5zgrx-i18n":
          "997a5681cb53b821673bcf02ff83ae69332ad263abde34b83cab8b47e393becb",
        "CustomizeBarPanel_17067-i18n":
          "97c85a584aec22c9327de3d561ac55d8505e66efeb40773cc5f0d5630bf32710",
        "ColorBlock_1y67i-i18n":
          "388a857d38e6cb8fa271125afe9482ca10813dcb76852a12a8f38c867d3951fe",
        "ColorPicker_o4xsa-i18n":
          "b63eae188902163fb66a434cf59511ca2addc887dca32c1594008dcac5ffeae7",
        "FirstSaveModal_128zn-i18n":
          "e36fc40b8571ff8fc33773e2d14250875237efaae7cb4b4e6a1d138b57a14510",
      }[e] +
      ".js"),
    (c.miniCssF = (e) => {}),
    (c.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (c.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id,
          );
        },
      }),
      e
    )),
    (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r = {}),
    (o = "_GeoLocationRecommendations:"),
    (c.l = (e, t, a, n) => {
      if (r[e]) r[e].push(t);
      else {
        var d, i;
        if (void 0 !== a)
          for (
            var f = document.getElementsByTagName("script"), b = 0;
            b < f.length;
            b++
          ) {
            var l = f[b];
            if (
              l.getAttribute("src") == e ||
              l.getAttribute("data-webpack") == o + a
            ) {
              d = l;
              break;
            }
          }
        d ||
          ((i = !0),
          ((d = document.createElement("script")).charset = "utf-8"),
          (d.timeout = 120),
          c.nc && d.setAttribute("nonce", c.nc),
          d.setAttribute("data-webpack", o + a),
          (d.src = e)),
          (r[e] = [t]);
        var s = (t, a) => {
            (d.onerror = d.onload = null), clearTimeout(u);
            var o = r[e];
            if (
              (delete r[e],
              d.parentNode && d.parentNode.removeChild(d),
              o && o.forEach((e) => e(a)),
              t)
            )
              return t(a);
          },
          u = setTimeout(
            s.bind(null, void 0, { type: "timeout", target: d }),
            12e4,
          );
        (d.onerror = s.bind(null, d.onerror)),
          (d.onload = s.bind(null, d.onload)),
          i && document.head.appendChild(d);
      }
    }),
    (c.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (c.p =
      "https://cdn.shopify.com/shopifycloud/geolocation-production/bundles/"),
    (() => {
      var e = { runtime: 0 };
      (c.f.j = (t, a) => {
        var r = c.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) a.push(r[2]);
          else if ("runtime" != t) {
            var o = new Promise((a, o) => (r = e[t] = [a, o]));
            a.push((r[2] = o));
            var n = c.p + c.u(t),
              d = new Error();
            c.l(
              n,
              (a) => {
                if (c.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var o = a && ("load" === a.type ? "missing" : a.type),
                    n = a && a.target && a.target.src;
                  (d.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")"),
                    (d.name = "ChunkLoadError"),
                    (d.type = o),
                    (d.request = n),
                    r[1](d);
                }
              },
              "chunk-" + t,
              t,
            );
          } else e[t] = 0;
      }),
        (c.O.j = (t) => 0 === e[t]);
      var t = (t, a) => {
          var r,
            o,
            [n, d, i] = a,
            f = 0;
          if (n.some((t) => 0 !== e[t])) {
            for (r in d) c.o(d, r) && (c.m[r] = d[r]);
            if (i) var b = i(c);
          }
          for (t && t(a); f < n.length; f++)
            (o = n[f]), c.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return c.O(b);
        },
        a = (self.webpackChunk_GeoLocationRecommendations =
          self.webpackChunk_GeoLocationRecommendations || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })();
})();
(self.webpackChunk_GeoLocationRecommendations =
  self.webpackChunk_GeoLocationRecommendations || []).push([
  [
    "vendors-node_modules_babel_runtime_helpers_asyncToGenerator_js-node_modules_babel_runtime_hel-b5eee8",
  ],
  {
    "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js": (e) => {
      (e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    "./node_modules/@babel/runtime/helpers/arrayWithHoles.js": (e) => {
      (e.exports = function (e) {
        if (Array.isArray(e)) return e;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    "./node_modules/@babel/runtime/helpers/asyncToGenerator.js": (e) => {
      function t(e, t, r, n, o, i, a) {
        try {
          var u = e[i](a),
            s = u.value;
        } catch (l) {
          return void r(l);
        }
        u.done ? t(s) : Promise.resolve(s).then(n, o);
      }
      (e.exports = function (e) {
        return function () {
          var r = this,
            n = arguments;
          return new Promise(function (o, i) {
            var a = e.apply(r, n);
            function u(e) {
              t(a, o, i, u, s, "next", e);
            }
            function s(e) {
              t(a, o, i, u, s, "throw", e);
            }
            u(void 0);
          });
        };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    "./node_modules/@babel/runtime/helpers/defineProperty.js": (e) => {
      (e.exports = function (e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js": (e) => {
      (e.exports = function (e, t) {
        var r =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != r) {
          var n,
            o,
            i = [],
            a = !0,
            u = !1;
          try {
            for (
              r = r.call(e);
              !(a = (n = r.next()).done) &&
              (i.push(n.value), !t || i.length !== t);
              a = !0
            );
          } catch (s) {
            (u = !0), (o = s);
          } finally {
            try {
              a || null == r.return || r.return();
            } finally {
              if (u) throw o;
            }
          }
          return i;
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    "./node_modules/@babel/runtime/helpers/nonIterableRest.js": (e) => {
      (e.exports = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    "./node_modules/@babel/runtime/helpers/objectSpread2.js": (e, t, r) => {
      var n = r("./node_modules/@babel/runtime/helpers/defineProperty.js");
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      (e.exports = function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    "./node_modules/@babel/runtime/helpers/slicedToArray.js": (e, t, r) => {
      var n = r("./node_modules/@babel/runtime/helpers/arrayWithHoles.js"),
        o = r("./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"),
        i = r(
          "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js",
        ),
        a = r("./node_modules/@babel/runtime/helpers/nonIterableRest.js");
      (e.exports = function (e, t) {
        return n(e) || o(e, t) || i(e, t) || a();
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js": (
      e,
      t,
      r,
    ) => {
      var n = r("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
      (e.exports = function (e, t) {
        if (e) {
          if ("string" == typeof e) return n(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? n(e, t)
              : void 0
          );
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    "./node_modules/@babel/runtime/regenerator/index.js": (e, t, r) => {
      e.exports = r("./node_modules/regenerator-runtime/runtime.js");
    },
    "./node_modules/regenerator-runtime/runtime.js": (e) => {
      var t = (function (e) {
        "use strict";
        var t,
          r = Object.prototype,
          n = r.hasOwnProperty,
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          u = o.toStringTag || "@@toStringTag";
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          s({}, "");
        } catch (S) {
          s = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, n) {
          var o = t && t.prototype instanceof m ? t : m,
            i = Object.create(o.prototype),
            a = new T(n || []);
          return (
            (i._invoke = (function (e, t, r) {
              var n = f;
              return function (o, i) {
                if (n === p) throw new Error("Generator is already running");
                if (n === d) {
                  if ("throw" === o) throw i;
                  return A();
                }
                for (r.method = o, r.arg = i; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var u = O(a, r);
                    if (u) {
                      if (u === y) continue;
                      return u;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if (n === f) throw ((n = d), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = p;
                  var s = c(e, t, r);
                  if ("normal" === s.type) {
                    if (((n = r.done ? d : h), s.arg === y)) continue;
                    return { value: s.arg, done: r.done };
                  }
                  "throw" === s.type &&
                    ((n = d), (r.method = "throw"), (r.arg = s.arg));
                }
              };
            })(e, r, a)),
            i
          );
        }
        function c(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (S) {
            return { type: "throw", arg: S };
          }
        }
        e.wrap = l;
        var f = "suspendedStart",
          h = "suspendedYield",
          p = "executing",
          d = "completed",
          y = {};
        function m() {}
        function b() {}
        function v() {}
        var g = {};
        s(g, i, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          _ = x && x(x(k([])));
        _ && _ !== r && n.call(_, i) && (g = _);
        var w = (v.prototype = m.prototype = Object.create(g));
        function j(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function L(e, t) {
          function r(o, i, a, u) {
            var s = c(e[o], e, i);
            if ("throw" !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && "object" == typeof f && n.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      r("next", e, a, u);
                    },
                    function (e) {
                      r("throw", e, a, u);
                    },
                  )
                : t.resolve(f).then(
                    function (e) {
                      (l.value = e), a(l);
                    },
                    function (e) {
                      return r("throw", e, a, u);
                    },
                  );
            }
            u(s.arg);
          }
          var o;
          this._invoke = function (e, n) {
            function i() {
              return new t(function (t, o) {
                r(e, n, t, o);
              });
            }
            return (o = o ? o.then(i, i) : i());
          };
        }
        function O(e, r) {
          var n = e.iterator[r.method];
          if (n === t) {
            if (((r.delegate = null), "throw" === r.method)) {
              if (
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                O(e, r),
                "throw" === r.method)
              )
                return y;
              (r.method = "throw"),
                (r.arg = new TypeError(
                  "The iterator does not provide a 'throw' method",
                ));
            }
            return y;
          }
          var o = c(n, e.iterator, r.arg);
          if ("throw" === o.type)
            return (
              (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), y
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((r[e.resultName] = i.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                y)
              : i
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              y);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function P(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function T(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function k(e) {
          if (e) {
            var r = e[i];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          return { next: A };
        }
        function A() {
          return { value: t, done: !0 };
        }
        return (
          (b.prototype = v),
          s(w, "constructor", v),
          s(v, "constructor", b),
          (b.displayName = s(v, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === b || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, v)
                : ((e.__proto__ = v), s(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(w)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          j(L.prototype),
          s(L.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = L),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(l(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          j(w),
          s(w, u, "Generator"),
          s(w, i, function () {
            return this;
          }),
          s(w, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = k),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(P),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (u.type = "throw"),
                  (u.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  u = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var s = n.call(a, "catchLoc"),
                    l = n.call(a, "finallyLoc");
                  if (s && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                y
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), P(r), y;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    P(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: k(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                y
              );
            },
          }),
          e
        );
      })(e.exports);
      try {
        regeneratorRuntime = t;
      } catch (r) {
        "object" == typeof globalThis
          ? (globalThis.regeneratorRuntime = t)
          : Function("r", "regeneratorRuntime = r")(t);
      }
    },
  },
]);
(self.webpackChunk_GeoLocationRecommendations =
  self.webpackChunk_GeoLocationRecommendations || []).push([
  ["modal"],
  {
    "./node_modules/@babel/runtime/helpers/extends.js": (e) => {
      function n() {
        return (
          (e.exports = n =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          n.apply(this, arguments)
        );
      }
      (e.exports = n),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    "./app/javascript/recommendations/modal/index.ts": (e, n, t) => {
      "use strict";
      t.r(n);
      var o = t("./app/ui/utility/index.ts"),
        r = t("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),
        a = t.n(r),
        i = t("./node_modules/@babel/runtime/regenerator/index.js"),
        u = t.n(i),
        l = t("./app/javascript/shared/cookies.ts");
      function c() {
        return (c = a()(
          u().mark(function e() {
            var n, t, o, r, a, i, c, s;
            return u().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if ((0, l.FL)()) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    if (
                      ((t = _()),
                      (o = window.Shopify.locale),
                      (r = window.Shopify.country),
                      (a =
                        null === (n = window.Shopify.currency) || void 0 === n
                          ? void 0
                          : n.active),
                      t && o && r && a)
                    ) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt("return");
                  case 8:
                    return (
                      (i =
                        "".concat(
                          t,
                          ".json?source=geolocation_recommendation&",
                        ) +
                        "country[enabled]=true&country[exclude]=".concat(
                          r,
                          "&",
                        ) +
                        "currency[enabled]=true&currency[exclude]=".concat(
                          a,
                          "&",
                        ) +
                        "language[enabled]=true&language[exclude]=".concat(
                          o,
                          "&",
                        )),
                      (e.next = 11),
                      fetch(i)
                    );
                  case 11:
                    return (c = e.sent), (e.next = 14), c.json();
                  case 14:
                    if (
                      "suggestions" in (s = e.sent) &&
                      "detected_values" in s
                    ) {
                      e.next = 17;
                      break;
                    }
                    return e.abrupt("return");
                  case 17:
                    if (0 !== s.suggestions.length) {
                      e.next = 20;
                      break;
                    }
                    return (0, l.s_)(), e.abrupt("return");
                  case 20:
                    return e.abrupt("return", s);
                  case 21:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      const s = function () {
        return c.apply(this, arguments);
      };
      function _() {
        var e,
          n =
            (null ===
              (e = location.pathname.match(
                /^(\/[a-z]{2,3}(-[a-zA-Z0-9]+)?)?(?=(\/|$))/,
              )) || void 0 === e
              ? void 0
              : e[0]) || "";
        return "".concat(n, "/browsing_context_suggestions");
      }
      var d;
      function p() {
        window.LocaleBar.root ||
          ((window.LocaleBar.root = document.createElement("div")),
          document.body.insertBefore(
            window.LocaleBar.root,
            document.body.firstChild,
          )),
          window.LocaleBar.style ||
            ((window.LocaleBar.style = document.createElement("style")),
            document.head.appendChild(window.LocaleBar.style));
      }
      function f() {
        var e, n;
        null === (e = window.LocaleBar.root) || void 0 === e || e.remove(),
          delete window.LocaleBar.root,
          null === (n = window.LocaleBar.style) || void 0 === n || n.remove(),
          delete window.LocaleBar.style,
          p();
      }
      window.LocaleBar =
        null !== (d = window.LocaleBar) && void 0 !== d
          ? d
          : { cleanup: f, fetch: s, data: {}, render: function () {} };
      var h = t("./node_modules/preact/dist/preact.module.js");
      var m = t("./node_modules/@babel/runtime/helpers/extends.js"),
        g = t.n(m),
        v = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
        y = t.n(v),
        b = t("./node_modules/preact/hooks/dist/hooks.module.js"),
        w = t("./app/javascript/recommendations/types.ts"),
        k = t("./node_modules/@babel/runtime/helpers/defineProperty.js"),
        C = t.n(k),
        L = t("./node_modules/@babel/runtime/helpers/objectSpread2.js"),
        x = t.n(L);
      function S(e, n, t) {
        if (e && t && n) {
          var o = Object.keys(n.options)
            .filter(function (n) {
              var o;
              return null === (o = e[t]) || void 0 === o
                ? void 0
                : o.languages.includes(n);
            })
            .reduce(function (e, t) {
              return x()(x()({}, e), {}, C()({}, t, n.options[t]));
            }, {});
          return x()(x()({}, n), {}, { options: o });
        }
      }
      function N(e) {
        if (e)
          return "https://cdn.shopify.com/static/images/flags/".concat(
            e.toLowerCase(),
            ".svg",
          );
      }
      function T(e) {
        var n = e.skip;
        (0, b.d4)(
          function () {
            if (!n) {
              var e = window.LocaleBar.experimentVersion;
              if (e) {
                var t = document.querySelector(
                  'script[src*="geolocation-recommendations"][src*="script.js"]',
                );
                if ("src" in t) {
                  var o = new URL(t.src),
                    r = "".concat(o.origin, "/experiments/assignments"),
                    a = {
                      experiment_version: e,
                      shopify_domain: o.searchParams.get("shop"),
                      user_token: (0, l.ej)("_shopify_y"),
                      session_token: (0, l.ej)("_shopify_s"),
                    },
                    i = new FormData();
                  Object.keys(a).forEach(function (e) {
                    return i.append(e, a[e]);
                  }),
                    fetch(r, { method: "POST", mode: "no-cors", body: i });
                }
              }
            }
          },
          [n],
        );
      }
      var B = "recommendation-modal__container",
        j = "recommendation-modal__content",
        M = "recommendation-modal__backdrop",
        W = "recommendation-modal__close-button",
        E = "recommendation-modal__message",
        H = "recommendation-modal__message--bold",
        A = "recommendation-modal__form",
        Y = "recommendation-modal__selector",
        P = "recommendation-modal__button",
        F = "recommendation-modal__button--minimal",
        O = "recommendation-modal__close-button-container",
        D = "recommendation-modal__flag",
        I = "recommendation-modal__benefits",
        R = "recommendation-modal__message--align-start",
        U = "recommendation-modal__selector-wrapper",
        V = "recommendation-modal__selector-wrapper--flag",
        q = "recommendation-modal__selector--flag";
      function G(e) {
        var n = e.className,
          t = e.onSubmit,
          r = e.children;
        return (0, h.h)(
          "form",
          {
            action: "/localization",
            method: "POST",
            className: n,
            onSubmit: t,
          },
          (0, h.h)("input", { name: "_method", type: "hidden", value: "PUT" }),
          (0, h.h)("input", {
            name: "source",
            type: "hidden",
            value: "geolocation_recommendation",
          }),
          (0, h.h)("input", {
            name: "return_to",
            type: "hidden",
            value: (0, o.JN)(location),
          }),
          r,
        );
      }
      var z = t("./app/javascript/shared/i18n.tsx");
      const J = function (e) {
        var n = e.preview,
          t = e.suggestion,
          r = (0, b.I4)(
            function () {
              var e,
                n,
                o,
                r = document.querySelector(
                  'script[src*="geolocation-recommendations"][src*="script.js"]',
                );
              if ("src" in r) {
                var a = new URL(r.src),
                  i = "".concat(a.origin, "/locale_bar/dismissal.json"),
                  u = {
                    shopify_domain: a.searchParams.get("shop"),
                    user_token: (0, l.ej)("_shopify_y"),
                    session_token: (0, l.ej)("_shopify_s"),
                    suggested_country:
                      null === (e = t.parts.country) || void 0 === e
                        ? void 0
                        : e.handle,
                    suggested_currency:
                      null === (n = t.parts.currency) || void 0 === n
                        ? void 0
                        : n.handle,
                    suggested_language:
                      null === (o = t.parts.language) || void 0 === o
                        ? void 0
                        : o.handle,
                  },
                  c = new FormData();
                Object.keys(u).forEach(function (e) {
                  return c.append(e, u[e]);
                }),
                  fetch(i, { method: "POST", mode: "no-cors", body: c });
              }
            },
            [t],
          ),
          a = function (e) {
            var n = {};
            if (!(e instanceof HTMLFormElement)) return n;
            var t = new FormData(e);
            return (
              t.forEach(function (e, t) {
                return (n[t] = e);
              }),
              n
            );
          },
          i = (0, b.I4)(
            function (e) {
              if (n) {
                e.preventDefault();
                var t = {
                  action: "locale-recommendations:accept",
                  detail: { formData: a(e.target) },
                };
                window.parent.postMessage(t, "https://".concat(o.Id));
              } else (0, l.s_)();
            },
            [n],
          ),
          u = (0, b.I4)(
            function (e) {
              var t;
              "submit" !== e.type &&
                (null === (t = window.LocaleBar) ||
                  void 0 === t ||
                  t.cleanup());
              if (n) {
                e.preventDefault();
                var i = {
                  action: "locale-recommendations:dismiss",
                  detail: { formData: a(e.target) },
                };
                window.parent.postMessage(i, "https://".concat(o.Id));
              } else (0, l.Xu)(), r();
            },
            [n, r],
          );
        return [i, u];
      };
      var $,
        K = [
          "AT",
          "BE",
          "BG",
          "CY",
          "CZ",
          "DE",
          "DK",
          "EE",
          "EL",
          "ES",
          "FI",
          "FR",
          "HR",
          "HU",
          "IE",
          "IT",
          "LT",
          "LU",
          "LV",
          "MT",
          "NL",
          "PL",
          "PT",
          "RO",
          "SE",
          "SI",
          "SK",
        ];
      function X(e) {
        var n = e.suggestionLocaleCode,
          t = e.suggestionCountryCode,
          o = e.suggestionType,
          r = e.colors,
          a = e.onSubmit,
          i = window.Shopify.country,
          u = function (e) {
            return (0, h.h)(
              "button",
              { className: W, onClick: e, type: "submit" },
              (0, h.h)(
                "svg",
                {
                  "aria-label": "Dismiss",
                  viewBox: "0 0 20 20",
                  style: "height:1em; width:1em",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                (0, h.h)("path", {
                  d: "M11.414 10l6.293-6.293a.999.999 0 1 0-1.414-1.414L10 8.586 3.707 2.293a.999.999 0 1 0-1.414 1.414L8.586 10l-6.293 6.293a.999.999 0 1 0 1.414 1.414L10 11.414l6.293 6.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z",
                  fill: r.foreground,
                }),
              ),
            );
          };
        return o !== w.sW.Language && K.includes(i) && K.includes(t)
          ? (0, h.h)("div", { className: O }, u(a))
          : (0, h.h)(
              "div",
              { className: O },
              (0, h.h)(
                G,
                { onSubmit: a },
                (function (e) {
                  switch (e) {
                    case w.sW.Language:
                      return (0, h.h)("input", {
                        name: "locale_code",
                        value: n,
                        type: "hidden",
                      });
                    case w.sW.Country:
                      return (0, h.h)("input", {
                        name: "country_code",
                        value: t,
                        type: "hidden",
                      });
                    case w.sW.CountryAndLanguage:
                      return (0, h.h)(
                        h.HY,
                        null,
                        (0, h.h)("input", {
                          name: "country_code",
                          value: t,
                          type: "hidden",
                        }),
                        (0, h.h)("input", {
                          name: "locale_code",
                          value: n,
                          type: "hidden",
                        }),
                      );
                  }
                })(o),
                u(),
              ),
            );
      }
      function Z(e) {
        var n,
          t,
          o,
          r,
          a,
          i,
          u,
          l,
          c,
          s,
          _ = e.options.colors,
          d = e.preview,
          p = e.suggestion,
          f = e.setModalStep,
          m = e.suggestionType,
          g = "" === window.Shopify.locale ? void 0 : window.Shopify.locale,
          v =
            null !==
              (n =
                null !==
                  (t =
                    null === (o = p.parts.language) || void 0 === o
                      ? void 0
                      : o.handle) && void 0 !== t
                  ? t
                  : g) && void 0 !== n
              ? n
              : "en",
          k = (0, z.T)(
            null !== (r = window.LocaleBar.data.experimentTranslations) &&
              void 0 !== r
              ? r
              : {},
            v,
          ),
          C = J({ preview: d, suggestion: p }),
          L = y()(C, 2),
          x = L[0],
          S = L[1],
          T = {
            backgroundColor: _.buttonBackground,
            color: _.buttonForeground,
          },
          B =
            null !==
              (a =
                null === (i = p.parts.language) || void 0 === i
                  ? void 0
                  : i.name) && void 0 !== a
              ? a
              : "",
          M =
            null !==
              (u =
                null === (l = p.parts.country) || void 0 === l
                  ? void 0
                  : l.name) && void 0 !== u
              ? u
              : "",
          W =
            null !==
              (c =
                null === (s = p.parts.country) || void 0 === s
                  ? void 0
                  : s.handle) && void 0 !== c
              ? c
              : "",
          Y = (function (e, n) {
            if (!n || !n[e]) return "";
            var t = n[e].isoCode,
              o = n[e].symbol;
            return o ? "".concat(t, " ").concat(o) : "".concat(t);
          })(W, window.LocaleBar.data.currenciesByCountryCode),
          O = (0, b.I4)(
            function () {
              f(w.Rg.ChangeCountry);
            },
            [f],
          ),
          R = function (e) {
            return (0, h.h)(
              "div",
              { className: I },
              (0, h.h)(
                "ul",
                null,
                (0, h.h)(
                  "li",
                  { style: { color: _.foreground } },
                  k("benefits.local_currency", { currency: Y }),
                ),
                (0, h.h)(
                  "li",
                  { style: { color: _.foreground } },
                  k("benefits.shipping_options", { country: M }),
                ),
                e === w.sW.CountryAndLanguage &&
                  (0, h.h)(
                    "li",
                    { style: { color: _.foreground } },
                    k("benefits.language", { language: B }),
                  ),
              ),
            );
          };
        return (0, h.h)(
          h.HY,
          null,
          (0, h.h)(X, {
            suggestionLocaleCode: v,
            suggestionCountryCode: W,
            suggestionType: m,
            colors: _,
            onSubmit: S,
          }),
          (0, h.h)(
            "div",
            { className: j },
            (function (e) {
              switch (e) {
                case w.sW.Language:
                  return null;
                case w.sW.CountryAndLanguage:
                case w.sW.Country:
                  return (0, h.h)(
                    "div",
                    { className: D },
                    (0, h.h)("img", { src: N(W), width: "75", height: "48" }),
                  );
              }
            })(m),
            (function (e) {
              switch (e) {
                case w.sW.Language:
                  return (0, h.h)(
                    "h2",
                    {
                      className: E,
                      style: { color: _.foreground, marginBottom: "2px" },
                    },
                    k("language_title", {
                      language: (0, h.h)("span", { className: H }, B),
                    }),
                  );
                case w.sW.CountryAndLanguage:
                case w.sW.Country:
                  return (0, h.h)(
                    "h2",
                    { className: E, style: { color: _.foreground } },
                    k("title", {
                      country: (0, h.h)("span", { className: H }, M),
                    }),
                  );
              }
            })(m),
            (function (e) {
              switch (e) {
                case w.sW.Language:
                  return null;
                case w.sW.CountryAndLanguage:
                  return R(w.sW.CountryAndLanguage);
                case w.sW.Country:
                  return R(w.sW.Country);
              }
            })(m),
            (0, h.h)(
              G,
              { onSubmit: x, className: A },
              (function (e) {
                switch (e) {
                  case w.sW.Language:
                    return (0, h.h)("input", {
                      name: "locale_code",
                      value: v,
                      type: "hidden",
                    });
                  case w.sW.Country:
                    return (0, h.h)("input", {
                      name: "country_code",
                      value: W,
                      type: "hidden",
                    });
                  case w.sW.CountryAndLanguage:
                    return (0, h.h)(
                      h.HY,
                      null,
                      (0, h.h)("input", {
                        name: "country_code",
                        value: W,
                        type: "hidden",
                      }),
                      (0, h.h)("input", {
                        name: "locale_code",
                        value: v,
                        type: "hidden",
                      }),
                    );
                }
              })(m),
              (0, h.h)(
                "button",
                { className: P, style: T, type: "submit" },
                k("submit"),
              ),
            ),
            (0, h.h)(
              "button",
              {
                className: F,
                type: "button",
                onClick: O,
                style: { backgroundColor: "transparent", color: _.foreground },
              },
              (function (e) {
                switch (e) {
                  case w.sW.Language:
                    return k("change_language");
                  case w.sW.Country:
                    return k("change_country");
                  case w.sW.CountryAndLanguage:
                    return k("change_country_and_language");
                }
              })(m),
            ),
          ),
        );
      }
      function Q(e) {
        var n,
          t,
          o,
          r,
          a,
          i,
          u,
          l = e.options.colors,
          c = e.preview,
          s = e.suggestion,
          _ = e.setModalStep,
          d = e.suggestionType,
          p = "" === window.Shopify.locale ? void 0 : window.Shopify.locale,
          f =
            null !==
              (n =
                null !==
                  (t =
                    null === (o = s.parts.language) || void 0 === o
                      ? void 0
                      : o.handle) && void 0 !== t
                  ? t
                  : p) && void 0 !== n
              ? n
              : "en",
          m =
            null !==
              (r =
                null === (a = s.parts.country) || void 0 === a
                  ? void 0
                  : a.handle) && void 0 !== r
              ? r
              : "",
          g = (0, z.T)(
            null !== (i = window.LocaleBar.data.experimentTranslations) &&
              void 0 !== i
              ? i
              : {},
            f,
          ),
          v = J({ preview: c, suggestion: s }),
          k = y()(v, 2),
          L = k[0],
          N = k[1],
          T = {
            backgroundColor: l.buttonBackground,
            color: l.buttonForeground,
          },
          B = (function (e, n) {
            if (e && n) {
              var t,
                o = Object.keys(e.options)
                  .sort(
                    ((t = e.options),
                    function (e, n) {
                      return t[e].localeCompare(t[n]);
                    }),
                  )
                  .reduce(function (t, o) {
                    var r = e.options[o],
                      a = n[o];
                    if (a) {
                      var i = a.symbol,
                        u = a.isoCode,
                        l = i ? "".concat(u, " ").concat(i) : "".concat(u);
                      return x()(
                        x()({}, t),
                        {},
                        C()({}, o, "".concat(r, " (").concat(l, ")")),
                      );
                    }
                    return t;
                  }, {});
              return x()(x()({}, e), {}, { options: o });
            }
          })(s.parts.country, window.LocaleBar.data.currenciesByCountryCode),
          M = (0, b.I4)(
            function () {
              _(w.Rg.ShipsTo);
            },
            [_],
          ),
          W = S(
            window.LocaleBar.data.countries,
            s.parts.language,
            null == B ? void 0 : B.handle,
          ),
          E = d === w.sW.CountryAndLanguage && W ? W : s.parts.language,
          H = (0, b.eJ)(E),
          Y = y()(H, 2),
          O = Y[0],
          D = Y[1],
          I = (0, b.I4)(
            function (e) {
              var n = S(window.LocaleBar.data.countries, s.parts.language, e);
              n && D(n);
            },
            [
              null === (u = s.parts.language) || void 0 === u
                ? void 0
                : u.options,
              window.LocaleBar.data.countries,
              D,
            ],
          );
        return (0, h.h)(
          h.HY,
          null,
          (0, h.h)(X, {
            suggestionLocaleCode: f,
            suggestionCountryCode: m,
            suggestionType: d,
            colors: l,
            onSubmit: N,
          }),
          (0, h.h)(
            "div",
            { className: j },
            (0, h.h)(
              "h2",
              { className: R, style: { color: l.foreground } },
              (function (e) {
                switch (e) {
                  case w.sW.Language:
                    return g("change_language");
                  case w.sW.Country:
                    return g("change_country");
                  case w.sW.CountryAndLanguage:
                    return g("change_country_and_language");
                }
              })(d),
            ),
            (0, h.h)(
              G,
              { onSubmit: L, className: A },
              (function (e) {
                switch (e) {
                  case w.sW.Language:
                    return (0, h.h)(ee, {
                      part: s.parts.language,
                      name: "locale_code",
                    });
                  case w.sW.Country:
                    return (0, h.h)(ee, {
                      part: B,
                      name: "country_code",
                      showFlag: !0,
                    });
                  case w.sW.CountryAndLanguage:
                    return (0, h.h)(
                      h.HY,
                      null,
                      (0, h.h)(ee, {
                        part: B,
                        name: "country_code",
                        onChangeSelected: I,
                        showFlag: !0,
                      }),
                      (0, h.h)(ee, { part: O, name: "locale_code" }),
                    );
                }
              })(d),
              (0, h.h)(
                "button",
                { className: P, style: T, type: "submit" },
                g("submit"),
              ),
            ),
            (0, h.h)(
              "button",
              {
                className: F,
                type: "button",
                onClick: M,
                style: { backgroundColor: "transparent", color: l.foreground },
              },
              g("cancel"),
            ),
          ),
        );
      }
      function ee(e) {
        var n = e.name,
          t = e.onChangeSelected,
          r = e.part,
          a = e.showFlag,
          i = (0, b.eJ)(null == r ? void 0 : r.handle),
          u = y()(i, 2),
          l = u[0],
          c = u[1],
          s = a ? q : Y,
          _ = a ? V : U,
          d = a ? "--bg-image: url('".concat(N(l), "');") : "";
        if (!r) return null;
        var p = (0, b.I4)(
          function (e) {
            c(e.target.value), t && t(e.target.value);
          },
          [t],
        );
        return (0, h.h)(
          "div",
          { className: _, style: d },
          (0, h.h)(
            "select",
            {
              className: s,
              name: n,
              value: l && r.options[l] ? l : Object.keys(r.options)[0],
              onChange: function (e) {
                return p(e);
              },
            },
            Object.keys(r.options).map(function (e) {
              return (0, h.h)(
                "option",
                { key: e, value: e },
                (0, o.fm)(r.options[e]),
              );
            }),
          ),
        );
      }
      p(),
        (window.LocaleBar.cleanup = f),
        (window.LocaleBar.fetch = s),
        ($ = function (e) {
          var n = (0, b.eJ)(w.Rg.ShipsTo),
            t = y()(n, 2),
            o = t[0],
            r = t[1],
            a = e.options.colors,
            i = e.preview,
            u = e.suggestion;
          T({ skip: i });
          var l = (0, b.sO)(null);
          (0, b.d4)(
            function () {
              var e;
              i || null === (e = l.current) || void 0 === e || e.focus();
            },
            [i],
          );
          var c = (function (e) {
              var n = e.parts,
                t = n.country,
                o = n.language;
              if (t && o) return w.sW.CountryAndLanguage;
              if (t) return w.sW.Country;
              if (o) return w.sW.Language;
              throw new Error(
                "Rendered modal component with no valid suggestion",
              );
            })(u),
            s =
              o === w.Rg.ShipsTo
                ? (0, h.h)(
                    Z,
                    g()({}, e, { suggestionType: c, setModalStep: r }),
                  )
                : (0, h.h)(
                    Q,
                    g()({}, e, { suggestionType: c, setModalStep: r }),
                  );
          return (0, h.h)(
            h.HY,
            null,
            (0, h.h)(
              "div",
              {
                className: B,
                style: { backgroundColor: a.background },
                ref: l,
                tabIndex: -1,
              },
              s,
            ),
            (0, h.h)("div", { className: M }),
          );
        }),
        (window.LocaleBar.render = function (e, n) {
          var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            o = t.preview,
            r = void 0 !== o && o,
            a = window.LocaleBar.root;
          if (a) {
            a.innerHTML = "";
            var i = e.suggestions[0],
              u = e.features,
              l = i.parts,
              c = l.country,
              s = l.language;
            (c || s) &&
              (0, h.sY)(
                (0, h.h)($, {
                  suggestion: i,
                  options: n,
                  preview: r,
                  features: u,
                }),
                a,
              );
          }
        }),
        (function () {
          if (window.location.host === o.h_) {
            window.parent.postMessage(
              { action: "locale-recommendations:ready" },
              "https://".concat(o.Id),
            );
          }
        })();
    },
    "./app/javascript/recommendations/types.ts": (e, n, t) => {
      "use strict";
      var o, r, a;
      t.d(n, { CQ: () => o, Rg: () => r, sW: () => a }),
        (function (e) {
          (e.BarTop = "bar/top"),
            (e.BarTopFixed = "bar/top_fixed"),
            (e.BarBottomFixed = "bar/bottom_fixed"),
            (e.PopupBottomLeft = "popup/bottom_left"),
            (e.PopupBottomRight = "popup/bottom_right"),
            (e.Modal = "modal");
        })(o || (o = {})),
        (function (e) {
          (e[(e.ShipsTo = 0)] = "ShipsTo"),
            (e[(e.ChangeCountry = 1)] = "ChangeCountry");
        })(r || (r = {})),
        (function (e) {
          (e[(e.Country = 0)] = "Country"),
            (e[(e.Language = 1)] = "Language"),
            (e[(e.CountryAndLanguage = 2)] = "CountryAndLanguage");
        })(a || (a = {}));
    },
    "./app/javascript/shared/cookies.ts": (e, n, t) => {
      "use strict";
      t.d(n, {
        FL: () => c,
        Xu: () => l,
        ej: () => _,
        qO: () => i,
        s_: () => u,
      });
      var o = "locale_bar_dismissed",
        r = "locale_bar_accepted",
        a = "locale_selectors_selected";
      function i() {
        document.cookie = "".concat(a, "=1;path=/");
      }
      function u() {
        document.cookie = "".concat(r, "=1;path=/");
      }
      function l() {
        document.cookie = "".concat(o, "=1;path=/;max-age=").concat(86400);
      }
      function c() {
        var e;
        return (
          (null === (e = window.Shopify) || void 0 === e || !e.designMode) &&
          (window.location.search.match(/shpxid/)
            ? (u(), !1)
            : !(
                document.querySelector(
                  "[data-geolocation-app-storefront-preview]",
                ) ||
                s(r) ||
                s(o) ||
                s(a)
              ))
        );
      }
      function s(e) {
        return d(e).length > 0;
      }
      function _(e) {
        var n = d(e);
        if (0 !== n.length) return n[0].trim().split("=")[1];
      }
      function d(e) {
        return document.cookie.split(";").filter(function (n) {
          return 0 === n.trim().indexOf("".concat(e, "="));
        });
      }
    },
    "./app/javascript/shared/i18n.tsx": (e, n, t) => {
      "use strict";
      t.d(n, { T: () => a });
      var o = t("./node_modules/preact/dist/preact.module.js"),
        r = t("./node_modules/preact/hooks/dist/hooks.module.js");
      function a(e, n) {
        var t = e[n],
          a = ["zh-CN", "zh-TW", "pt-PT", "pt-BR"].includes(n)
            ? n
            : n.slice(0, 2);
        if ((!t && e[a] && (t = e[a]), !t))
          throw new Error("No translations for ".concat(n, " or ").concat(a));
        return (0, r.I4)(
          function (e, n) {
            var r = e.split(".").reduce(
              function (e, n) {
                return i(e.value) ? { value: e.value[n] } : e;
              },
              { value: t },
            );
            if (i(r.value))
              throw new Error(
                "Translation key: "
                  .concat(e, ", did not result in a translation string ")
                  .concat(JSON.stringify(r.value)),
              );
            if (!n) return r.value;
            var a = r.value
              .split(/{{(.+?)}}/)
              .map(function (e, t) {
                return t % 2 ? n[e.trim()] : e;
              })
              .filter(function (e) {
                return e;
              });
            return (0, o.h)(o.HY, null, a);
          },
          [t],
        );
      }
      function i(e) {
        return !("string" == typeof e);
      }
    },
    "./app/ui/utility/index.ts": (e, n, t) => {
      "use strict";
      t.d(n, {
        Id: () => i,
        JN: () => l,
        bc: () => r,
        fm: () => a,
        h_: () => u,
        sk: () => o,
      });
      var o = "undefined" == typeof window;
      function r() {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
          n[t] = arguments[t];
        return n;
      }
      function a(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      var i = "geolocation-recommendations.shopifyapps.com",
        u = "shopify-geolocation-proxy.com";
      function l(e) {
        var n = new URLSearchParams(e.search);
        ["country", "currency"].forEach(function (e) {
          n.delete(e);
        });
        var t = n.toString();
        return "" === t ? e.pathname : "".concat(e.pathname, "?").concat(t);
      }
    },
    "./node_modules/preact/dist/preact.module.js": (e, n, t) => {
      "use strict";
      t.d(n, { HY: () => h, YM: () => r, h: () => p, sY: () => H });
      var o,
        r,
        a,
        i,
        u,
        l = {},
        c = [],
        s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      function _(e, n) {
        for (var t in n) e[t] = n[t];
        return e;
      }
      function d(e) {
        var n = e.parentNode;
        n && n.removeChild(e);
      }
      function p(e, n, t) {
        var r,
          a,
          i,
          u = {};
        for (i in n)
          "key" == i ? (r = n[i]) : "ref" == i ? (a = n[i]) : (u[i] = n[i]);
        if (
          (arguments.length > 2 &&
            (u.children = arguments.length > 3 ? o.call(arguments, 2) : t),
          "function" == typeof e && null != e.defaultProps)
        )
          for (i in e.defaultProps)
            void 0 === u[i] && (u[i] = e.defaultProps[i]);
        return f(e, u, r, a, null);
      }
      function f(e, n, t, o, i) {
        var u = {
          type: e,
          props: n,
          key: t,
          ref: o,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          __h: null,
          constructor: void 0,
          __v: null == i ? ++a : i,
        };
        return null == i && null != r.vnode && r.vnode(u), u;
      }
      function h(e) {
        return e.children;
      }
      function m(e, n) {
        (this.props = e), (this.context = n);
      }
      function g(e, n) {
        if (null == n) return e.__ ? g(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var t; n < e.__k.length; n++)
          if (null != (t = e.__k[n]) && null != t.__e) return t.__e;
        return "function" == typeof e.type ? g(e) : null;
      }
      function v(e) {
        var n, t;
        if (null != (e = e.__) && null != e.__c) {
          for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
            if (null != (t = e.__k[n]) && null != t.__e) {
              e.__e = e.__c.base = t.__e;
              break;
            }
          return v(e);
        }
      }
      function y(e) {
        ((!e.__d && (e.__d = !0) && i.push(e) && !b.__r++) ||
          u !== r.debounceRendering) &&
          ((u = r.debounceRendering) || setTimeout)(b);
      }
      function b() {
        for (var e; (b.__r = i.length); )
          (e = i.sort(function (e, n) {
            return e.__v.__b - n.__v.__b;
          })),
            (i = []),
            e.some(function (e) {
              var n, t, o, r, a, i;
              e.__d &&
                ((a = (r = (n = e).__v).__e),
                (i = n.__P) &&
                  ((t = []),
                  ((o = _({}, r)).__v = r.__v + 1),
                  T(
                    i,
                    r,
                    o,
                    n.__n,
                    void 0 !== i.ownerSVGElement,
                    null != r.__h ? [a] : null,
                    t,
                    null == a ? g(r) : a,
                    r.__h,
                  ),
                  B(t, r),
                  r.__e != a && v(r)));
            });
      }
      function w(e, n, t, o, r, a, i, u, s, _) {
        var d,
          p,
          m,
          v,
          y,
          b,
          w,
          L = (o && o.__k) || c,
          x = L.length;
        for (t.__k = [], d = 0; d < n.length; d++)
          if (
            null !=
            (v = t.__k[d] =
              null == (v = n[d]) || "boolean" == typeof v
                ? null
                : "string" == typeof v ||
                  "number" == typeof v ||
                  "bigint" == typeof v
                ? f(null, v, null, null, v)
                : Array.isArray(v)
                ? f(h, { children: v }, null, null, null)
                : v.__b > 0
                ? f(v.type, v.props, v.key, v.ref ? v.ref : null, v.__v)
                : v)
          ) {
            if (
              ((v.__ = t),
              (v.__b = t.__b + 1),
              null === (m = L[d]) || (m && v.key == m.key && v.type === m.type))
            )
              L[d] = void 0;
            else
              for (p = 0; p < x; p++) {
                if ((m = L[p]) && v.key == m.key && v.type === m.type) {
                  L[p] = void 0;
                  break;
                }
                m = null;
              }
            T(e, v, (m = m || l), r, a, i, u, s, _),
              (y = v.__e),
              (p = v.ref) &&
                m.ref != p &&
                (w || (w = []),
                m.ref && w.push(m.ref, null, v),
                w.push(p, v.__c || y, v)),
              null != y
                ? (null == b && (b = y),
                  "function" == typeof v.type && v.__k === m.__k
                    ? (v.__d = s = k(v, s, e))
                    : (s = C(e, v, m, L, y, s)),
                  "function" == typeof t.type && (t.__d = s))
                : s && m.__e == s && s.parentNode != e && (s = g(m));
          }
        for (t.__e = b, d = x; d--; ) null != L[d] && W(L[d], L[d]);
        if (w) for (d = 0; d < w.length; d++) M(w[d], w[++d], w[++d]);
      }
      function k(e, n, t) {
        for (var o, r = e.__k, a = 0; r && a < r.length; a++)
          (o = r[a]) &&
            ((o.__ = e),
            (n =
              "function" == typeof o.type
                ? k(o, n, t)
                : C(t, o, o, r, o.__e, n)));
        return n;
      }
      function C(e, n, t, o, r, a) {
        var i, u, l;
        if (void 0 !== n.__d) (i = n.__d), (n.__d = void 0);
        else if (null == t || r != a || null == r.parentNode)
          e: if (null == a || a.parentNode !== e) e.appendChild(r), (i = null);
          else {
            for (u = a, l = 0; (u = u.nextSibling) && l < o.length; l += 2)
              if (u == r) break e;
            e.insertBefore(r, a), (i = a);
          }
        return void 0 !== i ? i : r.nextSibling;
      }
      function L(e, n, t) {
        "-" === n[0]
          ? e.setProperty(n, t)
          : (e[n] =
              null == t
                ? ""
                : "number" != typeof t || s.test(n)
                ? t
                : t + "px");
      }
      function x(e, n, t, o, r) {
        var a;
        e: if ("style" === n)
          if ("string" == typeof t) e.style.cssText = t;
          else {
            if (("string" == typeof o && (e.style.cssText = o = ""), o))
              for (n in o) (t && n in t) || L(e.style, n, "");
            if (t) for (n in t) (o && t[n] === o[n]) || L(e.style, n, t[n]);
          }
        else if ("o" === n[0] && "n" === n[1])
          (a = n !== (n = n.replace(/Capture$/, ""))),
            (n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2)),
            e.l || (e.l = {}),
            (e.l[n + a] = t),
            t
              ? o || e.addEventListener(n, a ? N : S, a)
              : e.removeEventListener(n, a ? N : S, a);
        else if ("dangerouslySetInnerHTML" !== n) {
          if (r) n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "href" !== n &&
            "list" !== n &&
            "form" !== n &&
            "tabIndex" !== n &&
            "download" !== n &&
            n in e
          )
            try {
              e[n] = null == t ? "" : t;
              break e;
            } catch (e) {}
          "function" == typeof t ||
            (null == t || (!1 === t && -1 == n.indexOf("-"))
              ? e.removeAttribute(n)
              : e.setAttribute(n, t));
        }
      }
      function S(e) {
        this.l[e.type + !1](r.event ? r.event(e) : e);
      }
      function N(e) {
        this.l[e.type + !0](r.event ? r.event(e) : e);
      }
      function T(e, n, t, o, a, i, u, l, c) {
        var s,
          d,
          p,
          f,
          g,
          v,
          y,
          b,
          k,
          C,
          L,
          x,
          S,
          N,
          T,
          B = n.type;
        if (void 0 !== n.constructor) return null;
        null != t.__h &&
          ((c = t.__h), (l = n.__e = t.__e), (n.__h = null), (i = [l])),
          (s = r.__b) && s(n);
        try {
          e: if ("function" == typeof B) {
            if (
              ((b = n.props),
              (k = (s = B.contextType) && o[s.__c]),
              (C = s ? (k ? k.props.value : s.__) : o),
              t.__c
                ? (y = (d = n.__c = t.__c).__ = d.__E)
                : ("prototype" in B && B.prototype.render
                    ? (n.__c = d = new B(b, C))
                    : ((n.__c = d = new m(b, C)),
                      (d.constructor = B),
                      (d.render = E)),
                  k && k.sub(d),
                  (d.props = b),
                  d.state || (d.state = {}),
                  (d.context = C),
                  (d.__n = o),
                  (p = d.__d = !0),
                  (d.__h = []),
                  (d._sb = [])),
              null == d.__s && (d.__s = d.state),
              null != B.getDerivedStateFromProps &&
                (d.__s == d.state && (d.__s = _({}, d.__s)),
                _(d.__s, B.getDerivedStateFromProps(b, d.__s))),
              (f = d.props),
              (g = d.state),
              p)
            )
              null == B.getDerivedStateFromProps &&
                null != d.componentWillMount &&
                d.componentWillMount(),
                null != d.componentDidMount && d.__h.push(d.componentDidMount);
            else {
              if (
                (null == B.getDerivedStateFromProps &&
                  b !== f &&
                  null != d.componentWillReceiveProps &&
                  d.componentWillReceiveProps(b, C),
                (!d.__e &&
                  null != d.shouldComponentUpdate &&
                  !1 === d.shouldComponentUpdate(b, d.__s, C)) ||
                  n.__v === t.__v)
              ) {
                for (
                  d.props = b,
                    d.state = d.__s,
                    n.__v !== t.__v && (d.__d = !1),
                    d.__v = n,
                    n.__e = t.__e,
                    n.__k = t.__k,
                    n.__k.forEach(function (e) {
                      e && (e.__ = n);
                    }),
                    L = 0;
                  L < d._sb.length;
                  L++
                )
                  d.__h.push(d._sb[L]);
                (d._sb = []), d.__h.length && u.push(d);
                break e;
              }
              null != d.componentWillUpdate &&
                d.componentWillUpdate(b, d.__s, C),
                null != d.componentDidUpdate &&
                  d.__h.push(function () {
                    d.componentDidUpdate(f, g, v);
                  });
            }
            if (
              ((d.context = C),
              (d.props = b),
              (d.__v = n),
              (d.__P = e),
              (x = r.__r),
              (S = 0),
              "prototype" in B && B.prototype.render)
            ) {
              for (
                d.state = d.__s,
                  d.__d = !1,
                  x && x(n),
                  s = d.render(d.props, d.state, d.context),
                  N = 0;
                N < d._sb.length;
                N++
              )
                d.__h.push(d._sb[N]);
              d._sb = [];
            } else
              do {
                (d.__d = !1),
                  x && x(n),
                  (s = d.render(d.props, d.state, d.context)),
                  (d.state = d.__s);
              } while (d.__d && ++S < 25);
            (d.state = d.__s),
              null != d.getChildContext &&
                (o = _(_({}, o), d.getChildContext())),
              p ||
                null == d.getSnapshotBeforeUpdate ||
                (v = d.getSnapshotBeforeUpdate(f, g)),
              (T =
                null != s && s.type === h && null == s.key
                  ? s.props.children
                  : s),
              w(e, Array.isArray(T) ? T : [T], n, t, o, a, i, u, l, c),
              (d.base = n.__e),
              (n.__h = null),
              d.__h.length && u.push(d),
              y && (d.__E = d.__ = null),
              (d.__e = !1);
          } else
            null == i && n.__v === t.__v
              ? ((n.__k = t.__k), (n.__e = t.__e))
              : (n.__e = j(t.__e, n, t, o, a, i, u, c));
          (s = r.diffed) && s(n);
        } catch (e) {
          (n.__v = null),
            (c || null != i) &&
              ((n.__e = l), (n.__h = !!c), (i[i.indexOf(l)] = null)),
            r.__e(e, n, t);
        }
      }
      function B(e, n) {
        r.__c && r.__c(n, e),
          e.some(function (n) {
            try {
              (e = n.__h),
                (n.__h = []),
                e.some(function (e) {
                  e.call(n);
                });
            } catch (e) {
              r.__e(e, n.__v);
            }
          });
      }
      function j(e, n, t, r, a, i, u, c) {
        var s,
          _,
          p,
          f = t.props,
          h = n.props,
          m = n.type,
          v = 0;
        if (("svg" === m && (a = !0), null != i))
          for (; v < i.length; v++)
            if (
              (s = i[v]) &&
              "setAttribute" in s == !!m &&
              (m ? s.localName === m : 3 === s.nodeType)
            ) {
              (e = s), (i[v] = null);
              break;
            }
        if (null == e) {
          if (null === m) return document.createTextNode(h);
          (e = a
            ? document.createElementNS("http://www.w3.org/2000/svg", m)
            : document.createElement(m, h.is && h)),
            (i = null),
            (c = !1);
        }
        if (null === m) f === h || (c && e.data === h) || (e.data = h);
        else {
          if (
            ((i = i && o.call(e.childNodes)),
            (_ = (f = t.props || l).dangerouslySetInnerHTML),
            (p = h.dangerouslySetInnerHTML),
            !c)
          ) {
            if (null != i)
              for (f = {}, v = 0; v < e.attributes.length; v++)
                f[e.attributes[v].name] = e.attributes[v].value;
            (p || _) &&
              ((p &&
                ((_ && p.__html == _.__html) || p.__html === e.innerHTML)) ||
                (e.innerHTML = (p && p.__html) || ""));
          }
          if (
            ((function (e, n, t, o, r) {
              var a;
              for (a in t)
                "children" === a ||
                  "key" === a ||
                  a in n ||
                  x(e, a, null, t[a], o);
              for (a in n)
                (r && "function" != typeof n[a]) ||
                  "children" === a ||
                  "key" === a ||
                  "value" === a ||
                  "checked" === a ||
                  t[a] === n[a] ||
                  x(e, a, n[a], t[a], o);
            })(e, h, f, a, c),
            p)
          )
            n.__k = [];
          else if (
            ((v = n.props.children),
            w(
              e,
              Array.isArray(v) ? v : [v],
              n,
              t,
              r,
              a && "foreignObject" !== m,
              i,
              u,
              i ? i[0] : t.__k && g(t, 0),
              c,
            ),
            null != i)
          )
            for (v = i.length; v--; ) null != i[v] && d(i[v]);
          c ||
            ("value" in h &&
              void 0 !== (v = h.value) &&
              (v !== e.value ||
                ("progress" === m && !v) ||
                ("option" === m && v !== f.value)) &&
              x(e, "value", v, f.value, !1),
            "checked" in h &&
              void 0 !== (v = h.checked) &&
              v !== e.checked &&
              x(e, "checked", v, f.checked, !1));
        }
        return e;
      }
      function M(e, n, t) {
        try {
          "function" == typeof e ? e(n) : (e.current = n);
        } catch (e) {
          r.__e(e, t);
        }
      }
      function W(e, n, t) {
        var o, a;
        if (
          (r.unmount && r.unmount(e),
          (o = e.ref) && ((o.current && o.current !== e.__e) || M(o, null, n)),
          null != (o = e.__c))
        ) {
          if (o.componentWillUnmount)
            try {
              o.componentWillUnmount();
            } catch (e) {
              r.__e(e, n);
            }
          (o.base = o.__P = null), (e.__c = void 0);
        }
        if ((o = e.__k))
          for (a = 0; a < o.length; a++)
            o[a] && W(o[a], n, t || "function" != typeof e.type);
        t || null == e.__e || d(e.__e), (e.__ = e.__e = e.__d = void 0);
      }
      function E(e, n, t) {
        return this.constructor(e, t);
      }
      function H(e, n, t) {
        var a, i, u;
        r.__ && r.__(e, n),
          (i = (a = "function" == typeof t) ? null : (t && t.__k) || n.__k),
          (u = []),
          T(
            n,
            (e = ((!a && t) || n).__k = p(h, null, [e])),
            i || l,
            l,
            void 0 !== n.ownerSVGElement,
            !a && t
              ? [t]
              : i
              ? null
              : n.firstChild
              ? o.call(n.childNodes)
              : null,
            u,
            !a && t ? t : i ? i.__e : n.firstChild,
            a,
          ),
          B(u, e);
      }
      (o = c.slice),
        (r = {
          __e: function (e, n, t, o) {
            for (var r, a, i; (n = n.__); )
              if ((r = n.__c) && !r.__)
                try {
                  if (
                    ((a = r.constructor) &&
                      null != a.getDerivedStateFromError &&
                      (r.setState(a.getDerivedStateFromError(e)), (i = r.__d)),
                    null != r.componentDidCatch &&
                      (r.componentDidCatch(e, o || {}), (i = r.__d)),
                    i)
                  )
                    return (r.__E = r);
                } catch (n) {
                  e = n;
                }
            throw e;
          },
        }),
        (a = 0),
        (m.prototype.setState = function (e, n) {
          var t;
          (t =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = _({}, this.state))),
            "function" == typeof e && (e = e(_({}, t), this.props)),
            e && _(t, e),
            null != e && this.__v && (n && this._sb.push(n), y(this));
        }),
        (m.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), y(this));
        }),
        (m.prototype.render = h),
        (i = []),
        (b.__r = 0);
    },
    "./node_modules/preact/hooks/dist/hooks.module.js": (e, n, t) => {
      "use strict";
      t.d(n, {
        I4: () => w,
        Ye: () => b,
        d4: () => v,
        eJ: () => g,
        sO: () => y,
      });
      var o,
        r,
        a,
        i,
        u = t("./node_modules/preact/dist/preact.module.js"),
        l = 0,
        c = [],
        s = [],
        _ = u.YM.__b,
        d = u.YM.__r,
        p = u.YM.diffed,
        f = u.YM.__c,
        h = u.YM.unmount;
      function m(e, n) {
        u.YM.__h && u.YM.__h(r, e, l || n), (l = 0);
        var t = r.__H || (r.__H = { __: [], __h: [] });
        return e >= t.__.length && t.__.push({ __V: s }), t.__[e];
      }
      function g(e) {
        return (
          (l = 1),
          (function (e, n, t) {
            var a = m(o++, 2);
            if (
              ((a.t = e),
              !a.__c &&
                ((a.__ = [
                  t ? t(n) : T(void 0, n),
                  function (e) {
                    var n = a.__N ? a.__N[0] : a.__[0],
                      t = a.t(n, e);
                    n !== t && ((a.__N = [t, a.__[1]]), a.__c.setState({}));
                  },
                ]),
                (a.__c = r),
                !r.u))
            ) {
              r.u = !0;
              var i = r.shouldComponentUpdate;
              r.shouldComponentUpdate = function (e, n, t) {
                if (!a.__c.__H) return !0;
                var o = a.__c.__H.__.filter(function (e) {
                  return e.__c;
                });
                if (
                  o.every(function (e) {
                    return !e.__N;
                  })
                )
                  return !i || i.call(this, e, n, t);
                var r = !1;
                return (
                  o.forEach(function (e) {
                    if (e.__N) {
                      var n = e.__[0];
                      (e.__ = e.__N),
                        (e.__N = void 0),
                        n !== e.__[0] && (r = !0);
                    }
                  }),
                  !(!r && a.__c.props === e) && (!i || i.call(this, e, n, t))
                );
              };
            }
            return a.__N || a.__;
          })(T, e)
        );
      }
      function v(e, n) {
        var t = m(o++, 3);
        !u.YM.__s && N(t.__H, n) && ((t.__ = e), (t.i = n), r.__H.__h.push(t));
      }
      function y(e) {
        return (
          (l = 5),
          b(function () {
            return { current: e };
          }, [])
        );
      }
      function b(e, n) {
        var t = m(o++, 7);
        return N(t.__H, n)
          ? ((t.__V = e()), (t.i = n), (t.__h = e), t.__V)
          : t.__;
      }
      function w(e, n) {
        return (
          (l = 8),
          b(function () {
            return e;
          }, n)
        );
      }
      function k() {
        for (var e; (e = c.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(x), e.__H.__h.forEach(S), (e.__H.__h = []);
            } catch (r) {
              (e.__H.__h = []), u.YM.__e(r, e.__v);
            }
      }
      (u.YM.__b = function (e) {
        "function" != typeof e.type || e.__m || null === e.__
          ? e.__m || (e.__m = e.__ && e.__.__m ? e.__.__m : "")
          : (e.__m =
              (e.__ && e.__.__m ? e.__.__m : "") +
              (e.__ && e.__.__k ? e.__.__k.indexOf(e) : 0)),
          (r = null),
          _ && _(e);
      }),
        (u.YM.__r = function (e) {
          d && d(e), (o = 0);
          var n = (r = e.__c).__H;
          n &&
            (a === r
              ? ((n.__h = []),
                (r.__h = []),
                n.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.__V = s), (e.__N = e.i = void 0);
                }))
              : (n.__h.forEach(x), n.__h.forEach(S), (n.__h = []))),
            (a = r);
        }),
        (u.YM.diffed = function (e) {
          p && p(e);
          var n = e.__c;
          n &&
            n.__H &&
            (n.__H.__h.length &&
              ((1 !== c.push(n) && i === u.YM.requestAnimationFrame) ||
                ((i = u.YM.requestAnimationFrame) || L)(k)),
            n.__H.__.forEach(function (e) {
              e.i && (e.__H = e.i),
                e.__V !== s && (e.__ = e.__V),
                (e.i = void 0),
                (e.__V = s);
            })),
            (a = r = null);
        }),
        (u.YM.__c = function (e, n) {
          n.some(function (e) {
            try {
              e.__h.forEach(x),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || S(e);
                }));
            } catch (a) {
              n.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (n = []),
                u.YM.__e(a, e.__v);
            }
          }),
            f && f(e, n);
        }),
        (u.YM.unmount = function (e) {
          h && h(e);
          var n,
            t = e.__c;
          t &&
            t.__H &&
            (t.__H.__.forEach(function (e) {
              try {
                x(e);
              } catch (e) {
                n = e;
              }
            }),
            (t.__H = void 0),
            n && u.YM.__e(n, t.__v));
        });
      var C = "function" == typeof requestAnimationFrame;
      function L(e) {
        var n,
          t = function () {
            clearTimeout(o), C && cancelAnimationFrame(n), setTimeout(e);
          },
          o = setTimeout(t, 100);
        C && (n = requestAnimationFrame(t));
      }
      function x(e) {
        var n = r,
          t = e.__c;
        "function" == typeof t && ((e.__c = void 0), t()), (r = n);
      }
      function S(e) {
        var n = r;
        (e.__c = e.__()), (r = n);
      }
      function N(e, n) {
        return (
          !e ||
          e.length !== n.length ||
          n.some(function (n, t) {
            return n !== e[t];
          })
        );
      }
      function T(e, n) {
        return "function" == typeof n ? n(e) : n;
      }
    },
  },
  (e) => {
    e.O(
      0,
      [
        "vendors-node_modules_babel_runtime_helpers_asyncToGenerator_js-node_modules_babel_runtime_hel-b5eee8",
      ],
      () => {
        return (
          (n = "./app/javascript/recommendations/modal/index.ts"), e((e.s = n))
        );
        var n;
      },
    );
    var n = e.O();
    _GeoLocationRecommendations = n;
  },
]);
LocaleBar.data.currenciesByCountryCode = JSON.parse(
  '{"AC":{"symbol":"£","isoCode":"SHP"},"AD":{"symbol":"€","isoCode":"EUR"},"AE":{"symbol":null,"isoCode":"AED"},"AF":{"symbol":"؋","isoCode":"AFN"},"AG":{"symbol":"$","isoCode":"XCD"},"AI":{"symbol":"$","isoCode":"XCD"},"AL":{"symbol":null,"isoCode":"ALL"},"AM":{"symbol":"֏","isoCode":"AMD"},"AO":{"symbol":"$","isoCode":"USD"},"AR":{"symbol":"$","isoCode":"USD"},"AT":{"symbol":"€","isoCode":"EUR"},"AU":{"symbol":"$","isoCode":"AUD"},"AW":{"symbol":null,"isoCode":"AWG"},"AX":{"symbol":"€","isoCode":"EUR"},"AZ":{"symbol":"₼","isoCode":"AZN"},"BA":{"symbol":"KM","isoCode":"BAM"},"BB":{"symbol":"$","isoCode":"BBD"},"BD":{"symbol":"৳","isoCode":"BDT"},"BE":{"symbol":"€","isoCode":"EUR"},"BF":{"symbol":"F CFA","isoCode":"XOF"},"BG":{"symbol":null,"isoCode":"BGN"},"BH":{"symbol":"$","isoCode":"USD"},"BI":{"symbol":null,"isoCode":"BIF"},"BJ":{"symbol":"F CFA","isoCode":"XOF"},"BL":{"symbol":"€","isoCode":"EUR"},"BM":{"symbol":"$","isoCode":"USD"},"BN":{"symbol":"$","isoCode":"BND"},"BO":{"symbol":"Bs","isoCode":"BOB"},"BQ":{"symbol":"$","isoCode":"USD"},"BR":{"symbol":"$","isoCode":"USD"},"BS":{"symbol":"$","isoCode":"BSD"},"BT":{"symbol":"$","isoCode":"USD"},"BW":{"symbol":"P","isoCode":"BWP"},"BY":{"symbol":"€","isoCode":"EUR"},"BZ":{"symbol":"$","isoCode":"BZD"},"CA":{"symbol":"$","isoCode":"CAD"},"CC":{"symbol":"$","isoCode":"AUD"},"CD":{"symbol":null,"isoCode":"CDF"},"CF":{"symbol":"FCFA","isoCode":"XAF"},"CG":{"symbol":"FCFA","isoCode":"XAF"},"CH":{"symbol":null,"isoCode":"CHF"},"CI":{"symbol":"F CFA","isoCode":"XOF"},"CK":{"symbol":"$","isoCode":"NZD"},"CL":{"symbol":"$","isoCode":"USD"},"CM":{"symbol":"FCFA","isoCode":"XAF"},"CO":{"symbol":"$","isoCode":"USD"},"CR":{"symbol":"₡","isoCode":"CRC"},"CV":{"symbol":null,"isoCode":"CVE"},"CW":{"symbol":null,"isoCode":"ANG"},"CX":{"symbol":"$","isoCode":"AUD"},"CY":{"symbol":"€","isoCode":"EUR"},"CZ":{"symbol":"Kč","isoCode":"CZK"},"DE":{"symbol":"€","isoCode":"EUR"},"DJ":{"symbol":null,"isoCode":"DJF"},"DK":{"symbol":"kr","isoCode":"DKK"},"DM":{"symbol":"$","isoCode":"XCD"},"DO":{"symbol":"$","isoCode":"DOP"},"DZ":{"symbol":null,"isoCode":"DZD"},"EC":{"symbol":"$","isoCode":"USD"},"EE":{"symbol":"€","isoCode":"EUR"},"EG":{"symbol":"E£","isoCode":"EGP"},"EH":{"symbol":null,"isoCode":"MAD"},"ER":{"symbol":"$","isoCode":"USD"},"ES":{"symbol":"€","isoCode":"EUR"},"ET":{"symbol":null,"isoCode":"ETB"},"FI":{"symbol":"€","isoCode":"EUR"},"FJ":{"symbol":"$","isoCode":"FJD"},"FK":{"symbol":"£","isoCode":"FKP"},"FO":{"symbol":"kr","isoCode":"DKK"},"FR":{"symbol":"€","isoCode":"EUR"},"GA":{"symbol":"F CFA","isoCode":"XOF"},"GB":{"symbol":"£","isoCode":"GBP"},"GD":{"symbol":"$","isoCode":"XCD"},"GE":{"symbol":"€","isoCode":"EUR"},"GF":{"symbol":"€","isoCode":"EUR"},"GG":{"symbol":"£","isoCode":"GBP"},"GH":{"symbol":"$","isoCode":"USD"},"GI":{"symbol":"£","isoCode":"GBP"},"GL":{"symbol":"kr","isoCode":"DKK"},"GM":{"symbol":null,"isoCode":"GMD"},"GN":{"symbol":"FG","isoCode":"GNF"},"GP":{"symbol":"€","isoCode":"EUR"},"GQ":{"symbol":"FCFA","isoCode":"XAF"},"GR":{"symbol":"€","isoCode":"EUR"},"GS":{"symbol":"£","isoCode":"GBP"},"GT":{"symbol":"Q","isoCode":"GTQ"},"GW":{"symbol":"F CFA","isoCode":"XOF"},"GY":{"symbol":"$","isoCode":"GYD"},"HK":{"symbol":"HK$","isoCode":"HKD"},"HN":{"symbol":"L","isoCode":"HNL"},"HR":{"symbol":"€","isoCode":"EUR"},"HT":{"symbol":"$","isoCode":"USD"},"HU":{"symbol":"Ft","isoCode":"HUF"},"ID":{"symbol":"Rp","isoCode":"IDR"},"IE":{"symbol":"€","isoCode":"EUR"},"IL":{"symbol":"₪","isoCode":"ILS"},"IM":{"symbol":"£","isoCode":"GBP"},"IN":{"symbol":"₹","isoCode":"INR"},"IO":{"symbol":"$","isoCode":"USD"},"IQ":{"symbol":"$","isoCode":"USD"},"IS":{"symbol":"kr","isoCode":"ISK"},"IT":{"symbol":"€","isoCode":"EUR"},"JE":{"symbol":"€","isoCode":"EUR"},"JM":{"symbol":"$","isoCode":"JMD"},"JO":{"symbol":"$","isoCode":"USD"},"JP":{"symbol":"¥","isoCode":"JPY"},"KE":{"symbol":null,"isoCode":"KES"},"KG":{"symbol":null,"isoCode":"KGS"},"KH":{"symbol":"៛","isoCode":"KHR"},"KI":{"symbol":"$","isoCode":"AUD"},"KM":{"symbol":"CF","isoCode":"KMF"},"KN":{"symbol":"$","isoCode":"XCD"},"KR":{"symbol":"₩","isoCode":"KRW"},"KW":{"symbol":"$","isoCode":"USD"},"KY":{"symbol":"$","isoCode":"KYD"},"KZ":{"symbol":"₸","isoCode":"KZT"},"LA":{"symbol":"₭","isoCode":"LAK"},"LB":{"symbol":"L£","isoCode":"LBP"},"LC":{"symbol":"$","isoCode":"XCD"},"LI":{"symbol":null,"isoCode":"CHF"},"LK":{"symbol":"Rs","isoCode":"LKR"},"LR":{"symbol":"$","isoCode":"USD"},"LS":{"symbol":"$","isoCode":"USD"},"LT":{"symbol":"€","isoCode":"EUR"},"LU":{"symbol":"€","isoCode":"EUR"},"LV":{"symbol":"€","isoCode":"EUR"},"LY":{"symbol":"$","isoCode":"USD"},"MA":{"symbol":null,"isoCode":"MAD"},"MC":{"symbol":"€","isoCode":"EUR"},"MD":{"symbol":null,"isoCode":"MDL"},"ME":{"symbol":"€","isoCode":"EUR"},"MF":{"symbol":"€","isoCode":"EUR"},"MG":{"symbol":"$","isoCode":"USD"},"MK":{"symbol":null,"isoCode":"MKD"},"ML":{"symbol":"F CFA","isoCode":"XOF"},"MM":{"symbol":"K","isoCode":"MMK"},"MN":{"symbol":"₮","isoCode":"MNT"},"MO":{"symbol":null,"isoCode":"MOP"},"MQ":{"symbol":"€","isoCode":"EUR"},"MR":{"symbol":"$","isoCode":"USD"},"MS":{"symbol":"$","isoCode":"XCD"},"MT":{"symbol":"€","isoCode":"EUR"},"MU":{"symbol":"Rs","isoCode":"MUR"},"MV":{"symbol":null,"isoCode":"MVR"},"MW":{"symbol":null,"isoCode":"MWK"},"MX":{"symbol":"$","isoCode":"USD"},"MY":{"symbol":"RM","isoCode":"MYR"},"MZ":{"symbol":"$","isoCode":"USD"},"NA":{"symbol":"$","isoCode":"USD"},"NC":{"symbol":"CFPF","isoCode":"XPF"},"NE":{"symbol":"F CFA","isoCode":"XOF"},"NF":{"symbol":"$","isoCode":"AUD"},"NG":{"symbol":"₦","isoCode":"NGN"},"NI":{"symbol":"C$","isoCode":"NIO"},"NL":{"symbol":"€","isoCode":"EUR"},"NO":{"symbol":"€","isoCode":"EUR"},"NP":{"symbol":"Rs","isoCode":"NPR"},"NR":{"symbol":"$","isoCode":"AUD"},"NU":{"symbol":"$","isoCode":"NZD"},"NZ":{"symbol":"$","isoCode":"NZD"},"OM":{"symbol":"$","isoCode":"USD"},"PA":{"symbol":"$","isoCode":"USD"},"PE":{"symbol":null,"isoCode":"PEN"},"PF":{"symbol":"CFPF","isoCode":"XPF"},"PG":{"symbol":null,"isoCode":"PGK"},"PH":{"symbol":"₱","isoCode":"PHP"},"PK":{"symbol":"Rs","isoCode":"PKR"},"PL":{"symbol":"zł","isoCode":"PLN"},"PM":{"symbol":"€","isoCode":"EUR"},"PN":{"symbol":"$","isoCode":"NZD"},"PS":{"symbol":"₪","isoCode":"ILS"},"PT":{"symbol":"€","isoCode":"EUR"},"PY":{"symbol":"₲","isoCode":"PYG"},"QA":{"symbol":null,"isoCode":"QAR"},"RE":{"symbol":"€","isoCode":"EUR"},"RO":{"symbol":"lei","isoCode":"RON"},"RS":{"symbol":null,"isoCode":"RSD"},"RU":{"symbol":"$","isoCode":"USD"},"RW":{"symbol":"RF","isoCode":"RWF"},"SA":{"symbol":null,"isoCode":"SAR"},"SB":{"symbol":"$","isoCode":"SBD"},"SC":{"symbol":"$","isoCode":"USD"},"SD":{"symbol":"$","isoCode":"USD"},"SE":{"symbol":"kr","isoCode":"SEK"},"SG":{"symbol":"$","isoCode":"SGD"},"SH":{"symbol":"£","isoCode":"SHP"},"SI":{"symbol":"€","isoCode":"EUR"},"SJ":{"symbol":"€","isoCode":"EUR"},"SK":{"symbol":"€","isoCode":"EUR"},"SL":{"symbol":null,"isoCode":"SLL"},"SM":{"symbol":"€","isoCode":"EUR"},"SN":{"symbol":"F CFA","isoCode":"XOF"},"SO":{"symbol":"$","isoCode":"USD"},"SR":{"symbol":"$","isoCode":"USD"},"SS":{"symbol":"$","isoCode":"USD"},"ST":{"symbol":null,"isoCode":"STD"},"SV":{"symbol":"$","isoCode":"USD"},"SX":{"symbol":null,"isoCode":"ANG"},"SZ":{"symbol":"$","isoCode":"USD"},"TA":{"symbol":"£","isoCode":"GBP"},"TC":{"symbol":"$","isoCode":"USD"},"TD":{"symbol":"FCFA","isoCode":"XAF"},"TF":{"symbol":"€","isoCode":"EUR"},"TG":{"symbol":"F CFA","isoCode":"XOF"},"TH":{"symbol":"฿","isoCode":"THB"},"TJ":{"symbol":null,"isoCode":"TJS"},"TK":{"symbol":"$","isoCode":"NZD"},"TL":{"symbol":"$","isoCode":"USD"},"TM":{"symbol":"$","isoCode":"USD"},"TN":{"symbol":"$","isoCode":"USD"},"TO":{"symbol":"T$","isoCode":"TOP"},"TR":{"symbol":"€","isoCode":"EUR"},"TT":{"symbol":"$","isoCode":"TTD"},"TV":{"symbol":"$","isoCode":"AUD"},"TW":{"symbol":"$","isoCode":"TWD"},"TZ":{"symbol":null,"isoCode":"TZS"},"UA":{"symbol":"₴","isoCode":"UAH"},"UG":{"symbol":null,"isoCode":"UGX"},"UM":{"symbol":"$","isoCode":"USD"},"US":{"symbol":"$","isoCode":"USD"},"UY":{"symbol":"$","isoCode":"UYU"},"UZ":{"symbol":null,"isoCode":"UZS"},"VA":{"symbol":"€","isoCode":"EUR"},"VC":{"symbol":"$","isoCode":"XCD"},"VE":{"symbol":"$","isoCode":"USD"},"VG":{"symbol":"$","isoCode":"USD"},"VN":{"symbol":"₫","isoCode":"VND"},"VU":{"symbol":null,"isoCode":"VUV"},"WF":{"symbol":"CFPF","isoCode":"XPF"},"WS":{"symbol":null,"isoCode":"WST"},"XK":{"symbol":"€","isoCode":"EUR"},"YE":{"symbol":null,"isoCode":"YER"},"YT":{"symbol":"€","isoCode":"EUR"},"ZA":{"symbol":"$","isoCode":"USD"},"ZM":{"symbol":"$","isoCode":"USD"},"ZW":{"symbol":"$","isoCode":"USD"}}',
);
LocaleBar.data.countries = JSON.parse(
  '{"AC":{"country_name":{"en":"Ascension Island","ja":"アセンション島","es":"Isla de la Ascensión","de":"Ascension","nl":"Ascension"},"currency_code":"SHP","currency_sign":"£","languages":["en","ja","es","de","nl"]},"AD":{"country_name":{"en":"Andorra","ja":"アンドラ","es":"Andorra","de":"Andorra","nl":"Andorra"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"AE":{"country_name":{"en":"United Arab Emirates","ja":"アラブ首長国連邦","es":"Emiratos Árabes Unidos","de":"Vereinigte Arabische Emirate","nl":"Verenigde Arabische Emiraten"},"currency_code":"AED","currency_sign":null,"languages":["en","ja","es","de","nl"]},"AF":{"country_name":{"en":"Afghanistan","ja":"アフガニスタン","es":"Afganistán","de":"Afghanistan","nl":"Afghanistan"},"currency_code":"AFN","currency_sign":"؋","languages":["en","ja","es","de","nl"]},"AG":{"country_name":{"en":"Antigua \\u0026 Barbuda","ja":"アンティグア・バーブーダ","es":"Antigua y Barbuda","de":"Antigua und Barbuda","nl":"Antigua en Barbuda"},"currency_code":"XCD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"AI":{"country_name":{"en":"Anguilla","ja":"アンギラ","es":"Anguila","de":"Anguilla","nl":"Anguilla"},"currency_code":"XCD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"AL":{"country_name":{"en":"Albania","ja":"アルバニア","es":"Albania","de":"Albanien","nl":"Albanië"},"currency_code":"ALL","currency_sign":null,"languages":["en","ja","es","de","nl"]},"AM":{"country_name":{"en":"Armenia","ja":"アルメニア","es":"Armenia","de":"Armenien","nl":"Armenië"},"currency_code":"AMD","currency_sign":"֏","languages":["en","ja","es","de","nl"]},"AO":{"country_name":{"en":"Angola","ja":"アンゴラ","es":"Angola","de":"Angola","nl":"Angola"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"AR":{"country_name":{"en":"Argentina","ja":"アルゼンチン","es":"Argentina","de":"Argentinien","nl":"Argentinië"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"AT":{"country_name":{"en":"Austria","ja":"オーストリア","es":"Austria","de":"Österreich","nl":"Oostenrijk"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"AU":{"country_name":{"en":"Australia","ja":"オーストラリア","es":"Australia","de":"Australien","nl":"Australië"},"currency_code":"AUD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"AW":{"country_name":{"en":"Aruba","ja":"アルバ","es":"Aruba","de":"Aruba","nl":"Aruba"},"currency_code":"AWG","currency_sign":null,"languages":["en","ja","es","de","nl"]},"AX":{"country_name":{"en":"Åland Islands","ja":"オーランド諸島","es":"Islas Aland","de":"Ålandinseln","nl":"Åland"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"AZ":{"country_name":{"en":"Azerbaijan","ja":"アゼルバイジャン","es":"Azerbaiyán","de":"Aserbaidschan","nl":"Azerbeidzjan"},"currency_code":"AZN","currency_sign":"₼","languages":["en","ja","es","de","nl"]},"BA":{"country_name":{"en":"Bosnia \\u0026 Herzegovina","ja":"ボスニア・ヘルツェゴビナ","es":"Bosnia y Herzegovina","de":"Bosnien und Herzegowina","nl":"Bosnië en Herzegovina"},"currency_code":"BAM","currency_sign":"KM","languages":["en","ja","es","de","nl"]},"BB":{"country_name":{"en":"Barbados","ja":"バルバドス","es":"Barbados","de":"Barbados","nl":"Barbados"},"currency_code":"BBD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"BD":{"country_name":{"en":"Bangladesh","ja":"バングラデシュ","es":"Bangladés","de":"Bangladesch","nl":"Bangladesh"},"currency_code":"BDT","currency_sign":"৳","languages":["en","ja","es","de","nl"]},"BE":{"country_name":{"en":"Belgium","ja":"ベルギー","es":"Bélgica","de":"Belgien","nl":"België"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"BF":{"country_name":{"en":"Burkina Faso","ja":"ブルキナファソ","es":"Burkina Faso","de":"Burkina Faso","nl":"Burkina Faso"},"currency_code":"XOF","currency_sign":"F CFA","languages":["en","ja","es","de","nl"]},"BG":{"country_name":{"en":"Bulgaria","ja":"ブルガリア","es":"Bulgaria","de":"Bulgarien","nl":"Bulgarije"},"currency_code":"BGN","currency_sign":null,"languages":["en","ja","es","de","nl"]},"BH":{"country_name":{"en":"Bahrain","ja":"バーレーン","es":"Baréin","de":"Bahrain","nl":"Bahrein"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"BI":{"country_name":{"en":"Burundi","ja":"ブルンジ","es":"Burundi","de":"Burundi","nl":"Burundi"},"currency_code":"BIF","currency_sign":null,"languages":["en","ja","es","de","nl"]},"BJ":{"country_name":{"en":"Benin","ja":"ベナン","es":"Benín","de":"Benin","nl":"Benin"},"currency_code":"XOF","currency_sign":"F CFA","languages":["en","ja","es","de","nl"]},"BL":{"country_name":{"en":"St. Barthélemy","ja":"サン・バルテルミー","es":"San Bartolomé","de":"St. Barthélemy","nl":"Saint-Barthélemy"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"BM":{"country_name":{"en":"Bermuda","ja":"バミューダ","es":"Bermudas","de":"Bermuda","nl":"Bermuda"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"BN":{"country_name":{"en":"Brunei","ja":"ブルネイ","es":"Brunéi","de":"Brunei Darussalam","nl":"Brunei"},"currency_code":"BND","currency_sign":"$","languages":["en","ja","es","de","nl"]},"BO":{"country_name":{"en":"Bolivia","ja":"ボリビア","es":"Bolivia","de":"Bolivien","nl":"Bolivia"},"currency_code":"BOB","currency_sign":"Bs","languages":["en","ja","es","de","nl"]},"BQ":{"country_name":{"en":"Caribbean Netherlands","ja":"オランダ領カリブ","es":"Caribe neerlandés","de":"Karibische Niederlande","nl":"Caribisch Nederland"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"BR":{"country_name":{"en":"Brazil","ja":"ブラジル","es":"Brasil","de":"Brasilien","nl":"Brazilië"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"BS":{"country_name":{"en":"Bahamas","ja":"バハマ","es":"Bahamas","de":"Bahamas","nl":"Bahama’s"},"currency_code":"BSD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"BT":{"country_name":{"en":"Bhutan","ja":"ブータン","es":"Bután","de":"Bhutan","nl":"Bhutan"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"BW":{"country_name":{"en":"Botswana","ja":"ボツワナ","es":"Botsuana","de":"Botsuana","nl":"Botswana"},"currency_code":"BWP","currency_sign":"P","languages":["en","ja","es","de","nl"]},"BY":{"country_name":{"en":"Belarus","ja":"ベラルーシ","es":"Bielorrusia","de":"Belarus","nl":"Belarus"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"BZ":{"country_name":{"en":"Belize","ja":"ベリーズ","es":"Belice","de":"Belize","nl":"Belize"},"currency_code":"BZD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"CA":{"country_name":{"en":"Canada"},"currency_code":"CAD","currency_sign":"$","languages":["en"]},"CC":{"country_name":{"en":"Cocos (Keeling) Islands","ja":"ココス(キーリング)諸島","es":"Islas Cocos","de":"Kokosinseln","nl":"Cocoseilanden"},"currency_code":"AUD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"CD":{"country_name":{"en":"Congo - Kinshasa","ja":"コンゴ民主共和国(キンシャサ)","es":"República Democrática del Congo","de":"Kongo-Kinshasa","nl":"Congo-Kinshasa"},"currency_code":"CDF","currency_sign":null,"languages":["en","ja","es","de","nl"]},"CF":{"country_name":{"en":"Central African Republic","ja":"中央アフリカ共和国","es":"República Centroafricana","de":"Zentralafrikanische Republik","nl":"Centraal-Afrikaanse Republiek"},"currency_code":"XAF","currency_sign":"FCFA","languages":["en","ja","es","de","nl"]},"CG":{"country_name":{"en":"Congo - Brazzaville","ja":"コンゴ共和国(ブラザビル)","es":"Congo","de":"Kongo-Brazzaville","nl":"Congo-Brazzaville"},"currency_code":"XAF","currency_sign":"FCFA","languages":["en","ja","es","de","nl"]},"CH":{"country_name":{"en":"Switzerland","ja":"スイス","es":"Suiza","de":"Schweiz","nl":"Zwitserland"},"currency_code":"CHF","currency_sign":null,"languages":["en","ja","es","de","nl"]},"CI":{"country_name":{"en":"Côte d’Ivoire","ja":"コートジボワール","es":"Côte d’Ivoire","de":"Côte d’Ivoire","nl":"Ivoorkust"},"currency_code":"XOF","currency_sign":"F CFA","languages":["en","ja","es","de","nl"]},"CK":{"country_name":{"en":"Cook Islands","ja":"クック諸島","es":"Islas Cook","de":"Cookinseln","nl":"Cookeilanden"},"currency_code":"NZD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"CL":{"country_name":{"en":"Chile","ja":"チリ","es":"Chile","de":"Chile","nl":"Chili"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"CM":{"country_name":{"en":"Cameroon","ja":"カメルーン","es":"Camerún","de":"Kamerun","nl":"Kameroen"},"currency_code":"XAF","currency_sign":"FCFA","languages":["en","ja","es","de","nl"]},"CO":{"country_name":{"en":"Colombia","ja":"コロンビア","es":"Colombia","de":"Kolumbien","nl":"Colombia"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"CR":{"country_name":{"en":"Costa Rica","ja":"コスタリカ","es":"Costa Rica","de":"Costa Rica","nl":"Costa Rica"},"currency_code":"CRC","currency_sign":"₡","languages":["en","ja","es","de","nl"]},"CV":{"country_name":{"en":"Cape Verde","ja":"カーボベルデ","es":"Cabo Verde","de":"Cabo Verde","nl":"Kaapverdië"},"currency_code":"CVE","currency_sign":null,"languages":["en","ja","es","de","nl"]},"CW":{"country_name":{"en":"Curaçao","ja":"キュラソー","es":"Curazao","de":"Curaçao","nl":"Curaçao"},"currency_code":"ANG","currency_sign":null,"languages":["en","ja","es","de","nl"]},"CX":{"country_name":{"en":"Christmas Island","ja":"クリスマス島","es":"Isla de Navidad","de":"Weihnachtsinsel","nl":"Christmaseiland"},"currency_code":"AUD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"CY":{"country_name":{"en":"Cyprus","ja":"キプロス","es":"Chipre","de":"Zypern","nl":"Cyprus"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"CZ":{"country_name":{"en":"Czechia","ja":"チェコ","es":"Chequia","de":"Tschechien","nl":"Tsjechië"},"currency_code":"CZK","currency_sign":"Kč","languages":["en","ja","es","de","nl"]},"DE":{"country_name":{"en":"Germany"},"currency_code":"EUR","currency_sign":"€","languages":["en"]},"DJ":{"country_name":{"en":"Djibouti","ja":"ジブチ","es":"Yibuti","de":"Dschibuti","nl":"Djibouti"},"currency_code":"DJF","currency_sign":null,"languages":["en","ja","es","de","nl"]},"DK":{"country_name":{"en":"Denmark","ja":"デンマーク","es":"Dinamarca","de":"Dänemark","nl":"Denemarken"},"currency_code":"DKK","currency_sign":"kr","languages":["en","ja","es","de","nl"]},"DM":{"country_name":{"en":"Dominica","ja":"ドミニカ国","es":"Dominica","de":"Dominica","nl":"Dominica"},"currency_code":"XCD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"DO":{"country_name":{"en":"Dominican Republic","ja":"ドミニカ共和国","es":"República Dominicana","de":"Dominikanische Republik","nl":"Dominicaanse Republiek"},"currency_code":"DOP","currency_sign":"$","languages":["en","ja","es","de","nl"]},"DZ":{"country_name":{"en":"Algeria","ja":"アルジェリア","es":"Argelia","de":"Algerien","nl":"Algerije"},"currency_code":"DZD","currency_sign":null,"languages":["en","ja","es","de","nl"]},"EC":{"country_name":{"en":"Ecuador","ja":"エクアドル","es":"Ecuador","de":"Ecuador","nl":"Ecuador"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"EE":{"country_name":{"en":"Estonia","ja":"エストニア","es":"Estonia","de":"Estland","nl":"Estland"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"EG":{"country_name":{"en":"Egypt","ja":"エジプト","es":"Egipto","de":"Ägypten","nl":"Egypte"},"currency_code":"EGP","currency_sign":"E£","languages":["en","ja","es","de","nl"]},"EH":{"country_name":{"en":"Western Sahara","ja":"西サハラ","es":"Sáhara Occidental","de":"Westsahara","nl":"Westelijke Sahara"},"currency_code":"MAD","currency_sign":null,"languages":["en","ja","es","de","nl"]},"ER":{"country_name":{"en":"Eritrea","ja":"エリトリア","es":"Eritrea","de":"Eritrea","nl":"Eritrea"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"ES":{"country_name":{"en":"Spain","ja":"スペイン","es":"España","de":"Spanien","nl":"Spanje"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"ET":{"country_name":{"en":"Ethiopia","ja":"エチオピア","es":"Etiopía","de":"Äthiopien","nl":"Ethiopië"},"currency_code":"ETB","currency_sign":null,"languages":["en","ja","es","de","nl"]},"FI":{"country_name":{"en":"Finland","ja":"フィンランド","es":"Finlandia","de":"Finnland","nl":"Finland"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"FJ":{"country_name":{"en":"Fiji","ja":"フィジー","es":"Fiyi","de":"Fidschi","nl":"Fiji"},"currency_code":"FJD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"FK":{"country_name":{"en":"Falkland Islands","ja":"フォークランド諸島","es":"Islas Malvinas","de":"Falklandinseln","nl":"Falklandeilanden"},"currency_code":"FKP","currency_sign":"£","languages":["en","ja","es","de","nl"]},"FO":{"country_name":{"en":"Faroe Islands","ja":"フェロー諸島","es":"Islas Feroe","de":"Färöer","nl":"Faeröer"},"currency_code":"DKK","currency_sign":"kr","languages":["en","ja","es","de","nl"]},"FR":{"country_name":{"en":"France","ja":"フランス","es":"Francia","de":"Frankreich","nl":"Frankrijk"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"GA":{"country_name":{"en":"Gabon","ja":"ガボン","es":"Gabón","de":"Gabun","nl":"Gabon"},"currency_code":"XOF","currency_sign":"F CFA","languages":["en","ja","es","de","nl"]},"GB":{"country_name":{"en":"United Kingdom"},"currency_code":"GBP","currency_sign":"£","languages":["en"]},"GD":{"country_name":{"en":"Grenada","ja":"グレナダ","es":"Granada","de":"Grenada","nl":"Grenada"},"currency_code":"XCD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"GE":{"country_name":{"en":"Georgia","ja":"ジョージア","es":"Georgia","de":"Georgien","nl":"Georgië"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"GF":{"country_name":{"en":"French Guiana","ja":"仏領ギアナ","es":"Guayana Francesa","de":"Französisch-Guayana","nl":"Frans-Guyana"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"GG":{"country_name":{"en":"Guernsey","ja":"ガーンジー","es":"Guernesey","de":"Guernsey","nl":"Guernsey"},"currency_code":"GBP","currency_sign":"£","languages":["en","ja","es","de","nl"]},"GH":{"country_name":{"en":"Ghana","ja":"ガーナ","es":"Ghana","de":"Ghana","nl":"Ghana"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"GI":{"country_name":{"en":"Gibraltar","ja":"ジブラルタル","es":"Gibraltar","de":"Gibraltar","nl":"Gibraltar"},"currency_code":"GBP","currency_sign":"£","languages":["en","ja","es","de","nl"]},"GL":{"country_name":{"en":"Greenland","ja":"グリーンランド","es":"Groenlandia","de":"Grönland","nl":"Groenland"},"currency_code":"DKK","currency_sign":"kr","languages":["en","ja","es","de","nl"]},"GM":{"country_name":{"en":"Gambia","ja":"ガンビア","es":"Gambia","de":"Gambia","nl":"Gambia"},"currency_code":"GMD","currency_sign":null,"languages":["en","ja","es","de","nl"]},"GN":{"country_name":{"en":"Guinea","ja":"ギニア","es":"Guinea","de":"Guinea","nl":"Guinee"},"currency_code":"GNF","currency_sign":"FG","languages":["en","ja","es","de","nl"]},"GP":{"country_name":{"en":"Guadeloupe","ja":"グアドループ","es":"Guadalupe","de":"Guadeloupe","nl":"Guadeloupe"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"GQ":{"country_name":{"en":"Equatorial Guinea","ja":"赤道ギニア","es":"Guinea Ecuatorial","de":"Äquatorialguinea","nl":"Equatoriaal-Guinea"},"currency_code":"XAF","currency_sign":"FCFA","languages":["en","ja","es","de","nl"]},"GR":{"country_name":{"en":"Greece","ja":"ギリシャ","es":"Grecia","de":"Griechenland","nl":"Griekenland"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"GS":{"country_name":{"en":"South Georgia \\u0026 South Sandwich Islands","ja":"サウスジョージア・サウスサンドウィッチ諸島","es":"Islas Georgia del Sur y Sandwich del Sur","de":"Südgeorgien und die Südlichen Sandwichinseln","nl":"Zuid-Georgia en Zuidelijke Sandwicheilanden"},"currency_code":"GBP","currency_sign":"£","languages":["en","ja","es","de","nl"]},"GT":{"country_name":{"en":"Guatemala","ja":"グアテマラ","es":"Guatemala","de":"Guatemala","nl":"Guatemala"},"currency_code":"GTQ","currency_sign":"Q","languages":["en","ja","es","de","nl"]},"GW":{"country_name":{"en":"Guinea-Bissau","ja":"ギニアビサウ","es":"Guinea-Bisáu","de":"Guinea-Bissau","nl":"Guinee-Bissau"},"currency_code":"XOF","currency_sign":"F CFA","languages":["en","ja","es","de","nl"]},"GY":{"country_name":{"en":"Guyana","ja":"ガイアナ","es":"Guyana","de":"Guyana","nl":"Guyana"},"currency_code":"GYD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"HK":{"country_name":{"en":"Hong Kong SAR"},"currency_code":"HKD","currency_sign":"HK$","languages":["en"]},"HN":{"country_name":{"en":"Honduras","ja":"ホンジュラス","es":"Honduras","de":"Honduras","nl":"Honduras"},"currency_code":"HNL","currency_sign":"L","languages":["en","ja","es","de","nl"]},"HR":{"country_name":{"en":"Croatia","ja":"クロアチア","es":"Croacia","de":"Kroatien","nl":"Kroatië"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"HT":{"country_name":{"en":"Haiti","ja":"ハイチ","es":"Haití","de":"Haiti","nl":"Haïti"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"HU":{"country_name":{"en":"Hungary","ja":"ハンガリー","es":"Hungría","de":"Ungarn","nl":"Hongarije"},"currency_code":"HUF","currency_sign":"Ft","languages":["en","ja","es","de","nl"]},"ID":{"country_name":{"en":"Indonesia","ja":"インドネシア","es":"Indonesia","de":"Indonesien","nl":"Indonesië"},"currency_code":"IDR","currency_sign":"Rp","languages":["en","ja","es","de","nl"]},"IE":{"country_name":{"en":"Ireland","ja":"アイルランド","es":"Irlanda","de":"Irland","nl":"Ierland"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"IL":{"country_name":{"en":"Israel","ja":"イスラエル","es":"Israel","de":"Israel","nl":"Israël"},"currency_code":"ILS","currency_sign":"₪","languages":["en","ja","es","de","nl"]},"IM":{"country_name":{"en":"Isle of Man","ja":"マン島","es":"Isla de Man","de":"Isle of Man","nl":"Isle of Man"},"currency_code":"GBP","currency_sign":"£","languages":["en","ja","es","de","nl"]},"IN":{"country_name":{"en":"India"},"currency_code":"INR","currency_sign":"₹","languages":["en"]},"IO":{"country_name":{"en":"British Indian Ocean Territory","ja":"英領インド洋地域","es":"Territorio Británico del Océano Índico","de":"Britisches Territorium im Indischen Ozean","nl":"Brits Indische Oceaanterritorium"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"IQ":{"country_name":{"en":"Iraq","ja":"イラク","es":"Irak","de":"Irak","nl":"Irak"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"IS":{"country_name":{"en":"Iceland","ja":"アイスランド","es":"Islandia","de":"Island","nl":"IJsland"},"currency_code":"ISK","currency_sign":"kr","languages":["en","ja","es","de","nl"]},"IT":{"country_name":{"en":"Italy","ja":"イタリア","es":"Italia","de":"Italien","nl":"Italië"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"JE":{"country_name":{"en":"Jersey","ja":"ジャージー","es":"Jersey","de":"Jersey","nl":"Jersey"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"JM":{"country_name":{"en":"Jamaica","ja":"ジャマイカ","es":"Jamaica","de":"Jamaika","nl":"Jamaica"},"currency_code":"JMD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"JO":{"country_name":{"en":"Jordan","ja":"ヨルダン","es":"Jordania","de":"Jordanien","nl":"Jordanië"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"JP":{"country_name":{"en":"Japan","ja":"日本"},"currency_code":"JPY","currency_sign":"¥","languages":["en","ja"]},"KE":{"country_name":{"en":"Kenya","ja":"ケニア","es":"Kenia","de":"Kenia","nl":"Kenia"},"currency_code":"KES","currency_sign":null,"languages":["en","ja","es","de","nl"]},"KG":{"country_name":{"en":"Kyrgyzstan","ja":"キルギス","es":"Kirguistán","de":"Kirgisistan","nl":"Kirgizië"},"currency_code":"KGS","currency_sign":null,"languages":["en","ja","es","de","nl"]},"KH":{"country_name":{"en":"Cambodia","ja":"カンボジア","es":"Camboya","de":"Kambodscha","nl":"Cambodja"},"currency_code":"KHR","currency_sign":"៛","languages":["en","ja","es","de","nl"]},"KI":{"country_name":{"en":"Kiribati","ja":"キリバス","es":"Kiribati","de":"Kiribati","nl":"Kiribati"},"currency_code":"AUD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"KM":{"country_name":{"en":"Comoros","ja":"コモロ","es":"Comoras","de":"Komoren","nl":"Comoren"},"currency_code":"KMF","currency_sign":"CF","languages":["en","ja","es","de","nl"]},"KN":{"country_name":{"en":"St. Kitts \\u0026 Nevis","ja":"セントクリストファー・ネーヴィス","es":"San Cristóbal y Nieves","de":"St. Kitts und Nevis","nl":"Saint Kitts en Nevis"},"currency_code":"XCD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"KR":{"country_name":{"en":"South Korea","ja":"韓国","es":"Corea del Sur","de":"Südkorea","nl":"Zuid-Korea"},"currency_code":"KRW","currency_sign":"₩","languages":["en","ja","es","de","nl"]},"KW":{"country_name":{"en":"Kuwait","ja":"クウェート","es":"Kuwait","de":"Kuwait","nl":"Koeweit"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"KY":{"country_name":{"en":"Cayman Islands","ja":"ケイマン諸島","es":"Islas Caimán","de":"Kaimaninseln","nl":"Kaaimaneilanden"},"currency_code":"KYD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"KZ":{"country_name":{"en":"Kazakhstan","ja":"カザフスタン","es":"Kazajistán","de":"Kasachstan","nl":"Kazachstan"},"currency_code":"KZT","currency_sign":"₸","languages":["en","ja","es","de","nl"]},"LA":{"country_name":{"en":"Laos","ja":"ラオス","es":"Laos","de":"Laos","nl":"Laos"},"currency_code":"LAK","currency_sign":"₭","languages":["en","ja","es","de","nl"]},"LB":{"country_name":{"en":"Lebanon","ja":"レバノン","es":"Líbano","de":"Libanon","nl":"Libanon"},"currency_code":"LBP","currency_sign":"L£","languages":["en","ja","es","de","nl"]},"LC":{"country_name":{"en":"St. Lucia","ja":"セントルシア","es":"Santa Lucía","de":"St. Lucia","nl":"Saint Lucia"},"currency_code":"XCD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"LI":{"country_name":{"en":"Liechtenstein","ja":"リヒテンシュタイン","es":"Liechtenstein","de":"Liechtenstein","nl":"Liechtenstein"},"currency_code":"CHF","currency_sign":null,"languages":["en","ja","es","de","nl"]},"LK":{"country_name":{"en":"Sri Lanka","ja":"スリランカ","es":"Sri Lanka","de":"Sri Lanka","nl":"Sri Lanka"},"currency_code":"LKR","currency_sign":"Rs","languages":["en","ja","es","de","nl"]},"LR":{"country_name":{"en":"Liberia","ja":"リベリア","es":"Liberia","de":"Liberia","nl":"Liberia"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"LS":{"country_name":{"en":"Lesotho","ja":"レソト","es":"Lesoto","de":"Lesotho","nl":"Lesotho"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"LT":{"country_name":{"en":"Lithuania","ja":"リトアニア","es":"Lituania","de":"Litauen","nl":"Litouwen"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"LU":{"country_name":{"en":"Luxembourg","ja":"ルクセンブルク","es":"Luxemburgo","de":"Luxemburg","nl":"Luxemburg"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"LV":{"country_name":{"en":"Latvia","ja":"ラトビア","es":"Letonia","de":"Lettland","nl":"Letland"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"LY":{"country_name":{"en":"Libya","ja":"リビア","es":"Libia","de":"Libyen","nl":"Libië"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"MA":{"country_name":{"en":"Morocco","ja":"モロッコ","es":"Marruecos","de":"Marokko","nl":"Marokko"},"currency_code":"MAD","currency_sign":null,"languages":["en","ja","es","de","nl"]},"MC":{"country_name":{"en":"Monaco","ja":"モナコ","es":"Mónaco","de":"Monaco","nl":"Monaco"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"MD":{"country_name":{"en":"Moldova","ja":"モルドバ","es":"Moldavia","de":"Republik Moldau","nl":"Moldavië"},"currency_code":"MDL","currency_sign":null,"languages":["en","ja","es","de","nl"]},"ME":{"country_name":{"en":"Montenegro","ja":"モンテネグロ","es":"Montenegro","de":"Montenegro","nl":"Montenegro"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"MF":{"country_name":{"en":"St. Martin","ja":"サン・マルタン","es":"San Martín","de":"St. Martin","nl":"Saint-Martin"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"MG":{"country_name":{"en":"Madagascar","ja":"マダガスカル","es":"Madagascar","de":"Madagaskar","nl":"Madagaskar"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"MK":{"country_name":{"en":"North Macedonia","ja":"北マケドニア","es":"Macedonia del Norte","de":"Nordmazedonien","nl":"Noord-Macedonië"},"currency_code":"MKD","currency_sign":null,"languages":["en","ja","es","de","nl"]},"ML":{"country_name":{"en":"Mali","ja":"マリ","es":"Mali","de":"Mali","nl":"Mali"},"currency_code":"XOF","currency_sign":"F CFA","languages":["en","ja","es","de","nl"]},"MM":{"country_name":{"en":"Myanmar (Burma)","ja":"ミャンマー (ビルマ)","es":"Myanmar (Birmania)","de":"Myanmar","nl":"Myanmar (Birma)"},"currency_code":"MMK","currency_sign":"K","languages":["en","ja","es","de","nl"]},"MN":{"country_name":{"en":"Mongolia","ja":"モンゴル","es":"Mongolia","de":"Mongolei","nl":"Mongolië"},"currency_code":"MNT","currency_sign":"₮","languages":["en","ja","es","de","nl"]},"MO":{"country_name":{"en":"Macao SAR","ja":"中華人民共和国マカオ特別行政区","es":"RAE de Macao (China)","de":"Sonderverwaltungsregion Macau","nl":"Macau SAR van China"},"currency_code":"MOP","currency_sign":null,"languages":["en","ja","es","de","nl"]},"MQ":{"country_name":{"en":"Martinique","ja":"マルティニーク","es":"Martinica","de":"Martinique","nl":"Martinique"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"MR":{"country_name":{"en":"Mauritania","ja":"モーリタニア","es":"Mauritania","de":"Mauretanien","nl":"Mauritanië"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"MS":{"country_name":{"en":"Montserrat","ja":"モントセラト","es":"Montserrat","de":"Montserrat","nl":"Montserrat"},"currency_code":"XCD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"MT":{"country_name":{"en":"Malta","ja":"マルタ","es":"Malta","de":"Malta","nl":"Malta"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"MU":{"country_name":{"en":"Mauritius","ja":"モーリシャス","es":"Mauricio","de":"Mauritius","nl":"Mauritius"},"currency_code":"MUR","currency_sign":"Rs","languages":["en","ja","es","de","nl"]},"MV":{"country_name":{"en":"Maldives","ja":"モルディブ","es":"Maldivas","de":"Malediven","nl":"Maldiven"},"currency_code":"MVR","currency_sign":null,"languages":["en","ja","es","de","nl"]},"MW":{"country_name":{"en":"Malawi","ja":"マラウイ","es":"Malaui","de":"Malawi","nl":"Malawi"},"currency_code":"MWK","currency_sign":null,"languages":["en","ja","es","de","nl"]},"MX":{"country_name":{"en":"Mexico","ja":"メキシコ","es":"México","de":"Mexiko","nl":"Mexico"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"MY":{"country_name":{"en":"Malaysia","ja":"マレーシア","es":"Malasia","de":"Malaysia","nl":"Maleisië"},"currency_code":"MYR","currency_sign":"RM","languages":["en","ja","es","de","nl"]},"MZ":{"country_name":{"en":"Mozambique","ja":"モザンビーク","es":"Mozambique","de":"Mosambik","nl":"Mozambique"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"NA":{"country_name":{"en":"Namibia","ja":"ナミビア","es":"Namibia","de":"Namibia","nl":"Namibië"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"NC":{"country_name":{"en":"New Caledonia","ja":"ニューカレドニア","es":"Nueva Caledonia","de":"Neukaledonien","nl":"Nieuw-Caledonië"},"currency_code":"XPF","currency_sign":"CFPF","languages":["en","ja","es","de","nl"]},"NE":{"country_name":{"en":"Niger","ja":"ニジェール","es":"Níger","de":"Niger","nl":"Niger"},"currency_code":"XOF","currency_sign":"F CFA","languages":["en","ja","es","de","nl"]},"NF":{"country_name":{"en":"Norfolk Island","ja":"ノーフォーク島","es":"Isla Norfolk","de":"Norfolkinsel","nl":"Norfolk"},"currency_code":"AUD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"NG":{"country_name":{"en":"Nigeria","ja":"ナイジェリア","es":"Nigeria","de":"Nigeria","nl":"Nigeria"},"currency_code":"NGN","currency_sign":"₦","languages":["en","ja","es","de","nl"]},"NI":{"country_name":{"en":"Nicaragua","ja":"ニカラグア","es":"Nicaragua","de":"Nicaragua","nl":"Nicaragua"},"currency_code":"NIO","currency_sign":"C$","languages":["en","ja","es","de","nl"]},"NL":{"country_name":{"en":"Netherlands","ja":"オランダ","es":"Países Bajos","de":"Niederlande","nl":"Nederland"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"NO":{"country_name":{"en":"Norway","ja":"ノルウェー","es":"Noruega","de":"Norwegen","nl":"Noorwegen"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"NP":{"country_name":{"en":"Nepal","ja":"ネパール","es":"Nepal","de":"Nepal","nl":"Nepal"},"currency_code":"NPR","currency_sign":"Rs","languages":["en","ja","es","de","nl"]},"NR":{"country_name":{"en":"Nauru","ja":"ナウル","es":"Nauru","de":"Nauru","nl":"Nauru"},"currency_code":"AUD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"NU":{"country_name":{"en":"Niue","ja":"ニウエ","es":"Niue","de":"Niue","nl":"Niue"},"currency_code":"NZD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"NZ":{"country_name":{"en":"New Zealand","ja":"ニュージーランド","es":"Nueva Zelanda","de":"Neuseeland","nl":"Nieuw-Zeeland"},"currency_code":"NZD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"OM":{"country_name":{"en":"Oman","ja":"オマーン","es":"Omán","de":"Oman","nl":"Oman"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"PA":{"country_name":{"en":"Panama","ja":"パナマ","es":"Panamá","de":"Panama","nl":"Panama"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"PE":{"country_name":{"en":"Peru","ja":"ペルー","es":"Perú","de":"Peru","nl":"Peru"},"currency_code":"PEN","currency_sign":null,"languages":["en","ja","es","de","nl"]},"PF":{"country_name":{"en":"French Polynesia","ja":"仏領ポリネシア","es":"Polinesia Francesa","de":"Französisch-Polynesien","nl":"Frans-Polynesië"},"currency_code":"XPF","currency_sign":"CFPF","languages":["en","ja","es","de","nl"]},"PG":{"country_name":{"en":"Papua New Guinea","ja":"パプアニューギニア","es":"Papúa Nueva Guinea","de":"Papua-Neuguinea","nl":"Papoea-Nieuw-Guinea"},"currency_code":"PGK","currency_sign":null,"languages":["en","ja","es","de","nl"]},"PH":{"country_name":{"en":"Philippines","ja":"フィリピン","es":"Filipinas","de":"Philippinen","nl":"Filipijnen"},"currency_code":"PHP","currency_sign":"₱","languages":["en","ja","es","de","nl"]},"PK":{"country_name":{"en":"Pakistan","ja":"パキスタン","es":"Pakistán","de":"Pakistan","nl":"Pakistan"},"currency_code":"PKR","currency_sign":"Rs","languages":["en","ja","es","de","nl"]},"PL":{"country_name":{"en":"Poland","ja":"ポーランド","es":"Polonia","de":"Polen","nl":"Polen"},"currency_code":"PLN","currency_sign":"zł","languages":["en","ja","es","de","nl"]},"PM":{"country_name":{"en":"St. Pierre \\u0026 Miquelon","ja":"サンピエール島・ミクロン島","es":"San Pedro y Miquelón","de":"St. Pierre und Miquelon","nl":"Saint-Pierre en Miquelon"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"PN":{"country_name":{"en":"Pitcairn Islands","ja":"ピトケアン諸島","es":"Islas Pitcairn","de":"Pitcairninseln","nl":"Pitcairneilanden"},"currency_code":"NZD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"PS":{"country_name":{"en":"Palestinian Territories","ja":"パレスチナ自治区","es":"Territorios Palestinos","de":"Palästinensische Autonomiegebiete","nl":"Palestijnse gebieden"},"currency_code":"ILS","currency_sign":"₪","languages":["en","ja","es","de","nl"]},"PT":{"country_name":{"en":"Portugal","ja":"ポルトガル","es":"Portugal","de":"Portugal","nl":"Portugal"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"PY":{"country_name":{"en":"Paraguay","ja":"パラグアイ","es":"Paraguay","de":"Paraguay","nl":"Paraguay"},"currency_code":"PYG","currency_sign":"₲","languages":["en","ja","es","de","nl"]},"QA":{"country_name":{"en":"Qatar","ja":"カタール","es":"Catar","de":"Katar","nl":"Qatar"},"currency_code":"QAR","currency_sign":null,"languages":["en","ja","es","de","nl"]},"RE":{"country_name":{"en":"Réunion","ja":"レユニオン","es":"Reunión","de":"Réunion","nl":"Réunion"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"RO":{"country_name":{"en":"Romania","ja":"ルーマニア","es":"Rumanía","de":"Rumänien","nl":"Roemenië"},"currency_code":"RON","currency_sign":"lei","languages":["en","ja","es","de","nl"]},"RS":{"country_name":{"en":"Serbia","ja":"セルビア","es":"Serbia","de":"Serbien","nl":"Servië"},"currency_code":"RSD","currency_sign":null,"languages":["en","ja","es","de","nl"]},"RU":{"country_name":{"en":"Russia","ja":"ロシア","es":"Rusia","de":"Russland","nl":"Rusland"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"RW":{"country_name":{"en":"Rwanda","ja":"ルワンダ","es":"Ruanda","de":"Ruanda","nl":"Rwanda"},"currency_code":"RWF","currency_sign":"RF","languages":["en","ja","es","de","nl"]},"SA":{"country_name":{"en":"Saudi Arabia","ja":"サウジアラビア","es":"Arabia Saudí","de":"Saudi-Arabien","nl":"Saoedi-Arabië"},"currency_code":"SAR","currency_sign":null,"languages":["en","ja","es","de","nl"]},"SB":{"country_name":{"en":"Solomon Islands","ja":"ソロモン諸島","es":"Islas Salomón","de":"Salomonen","nl":"Salomonseilanden"},"currency_code":"SBD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"SC":{"country_name":{"en":"Seychelles","ja":"セーシェル","es":"Seychelles","de":"Seychellen","nl":"Seychellen"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"SD":{"country_name":{"en":"Sudan","ja":"スーダン","es":"Sudán","de":"Sudan","nl":"Soedan"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"SE":{"country_name":{"en":"Sweden","ja":"スウェーデン","es":"Suecia","de":"Schweden","nl":"Zweden"},"currency_code":"SEK","currency_sign":"kr","languages":["en","ja","es","de","nl"]},"SG":{"country_name":{"en":"Singapore","ja":"シンガポール","es":"Singapur","de":"Singapur","nl":"Singapore"},"currency_code":"SGD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"SH":{"country_name":{"en":"St. Helena","ja":"セントヘレナ","es":"Santa Elena","de":"St. Helena","nl":"Sint-Helena"},"currency_code":"SHP","currency_sign":"£","languages":["en","ja","es","de","nl"]},"SI":{"country_name":{"en":"Slovenia","ja":"スロベニア","es":"Eslovenia","de":"Slowenien","nl":"Slovenië"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"SJ":{"country_name":{"en":"Svalbard \\u0026 Jan Mayen","ja":"スバールバル諸島・ヤンマイエン島","es":"Svalbard y Jan Mayen","de":"Spitzbergen und Jan Mayen","nl":"Spitsbergen en Jan Mayen"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"SK":{"country_name":{"en":"Slovakia","ja":"スロバキア","es":"Eslovaquia","de":"Slowakei","nl":"Slowakije"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"SL":{"country_name":{"en":"Sierra Leone","ja":"シエラレオネ","es":"Sierra Leona","de":"Sierra Leone","nl":"Sierra Leone"},"currency_code":"SLL","currency_sign":null,"languages":["en","ja","es","de","nl"]},"SM":{"country_name":{"en":"San Marino","ja":"サンマリノ","es":"San Marino","de":"San Marino","nl":"San Marino"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"SN":{"country_name":{"en":"Senegal","ja":"セネガル","es":"Senegal","de":"Senegal","nl":"Senegal"},"currency_code":"XOF","currency_sign":"F CFA","languages":["en","ja","es","de","nl"]},"SO":{"country_name":{"en":"Somalia","ja":"ソマリア","es":"Somalia","de":"Somalia","nl":"Somalië"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"SR":{"country_name":{"en":"Suriname","ja":"スリナム","es":"Surinam","de":"Suriname","nl":"Suriname"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"SS":{"country_name":{"en":"South Sudan","ja":"南スーダン","es":"Sudán del Sur","de":"Südsudan","nl":"Zuid-Soedan"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"ST":{"country_name":{"en":"São Tomé \\u0026 Príncipe","ja":"サントメ・プリンシペ","es":"Santo Tomé y Príncipe","de":"São Tomé und Príncipe","nl":"Sao Tomé en Principe"},"currency_code":"STD","currency_sign":null,"languages":["en","ja","es","de","nl"]},"SV":{"country_name":{"en":"El Salvador","ja":"エルサルバドル","es":"El Salvador","de":"El Salvador","nl":"El Salvador"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"SX":{"country_name":{"en":"Sint Maarten","ja":"シント・マールテン","es":"Sint Maarten","de":"Sint Maarten","nl":"Sint-Maarten"},"currency_code":"ANG","currency_sign":null,"languages":["en","ja","es","de","nl"]},"SZ":{"country_name":{"en":"Eswatini","ja":"エスワティニ","es":"Esuatini","de":"Eswatini","nl":"Eswatini"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"TA":{"country_name":{"en":"Tristan da Cunha","ja":"トリスタン・ダ・クーニャ","es":"Tristán de Acuña","de":"Tristan da Cunha","nl":"Tristan da Cunha"},"currency_code":"GBP","currency_sign":"£","languages":["en","ja","es","de","nl"]},"TC":{"country_name":{"en":"Turks \\u0026 Caicos Islands","ja":"タークス・カイコス諸島","es":"Islas Turcas y Caicos","de":"Turks- und Caicosinseln","nl":"Turks- en Caicoseilanden"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"TD":{"country_name":{"en":"Chad","ja":"チャド","es":"Chad","de":"Tschad","nl":"Tsjaad"},"currency_code":"XAF","currency_sign":"FCFA","languages":["en","ja","es","de","nl"]},"TF":{"country_name":{"en":"French Southern Territories","ja":"仏領極南諸島","es":"Territorios Australes Franceses","de":"Französische Süd- und Antarktisgebiete","nl":"Franse Gebieden in de zuidelijke Indische Oceaan"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"TG":{"country_name":{"en":"Togo","ja":"トーゴ","es":"Togo","de":"Togo","nl":"Togo"},"currency_code":"XOF","currency_sign":"F CFA","languages":["en","ja","es","de","nl"]},"TH":{"country_name":{"en":"Thailand","ja":"タイ","es":"Tailandia","de":"Thailand","nl":"Thailand"},"currency_code":"THB","currency_sign":"฿","languages":["en","ja","es","de","nl"]},"TJ":{"country_name":{"en":"Tajikistan","ja":"タジキスタン","es":"Tayikistán","de":"Tadschikistan","nl":"Tadzjikistan"},"currency_code":"TJS","currency_sign":null,"languages":["en","ja","es","de","nl"]},"TK":{"country_name":{"en":"Tokelau","ja":"トケラウ","es":"Tokelau","de":"Tokelau","nl":"Tokelau"},"currency_code":"NZD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"TL":{"country_name":{"en":"Timor-Leste","ja":"東ティモール","es":"Timor-Leste","de":"Timor-Leste","nl":"Oost-Timor"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"TM":{"country_name":{"en":"Turkmenistan","ja":"トルクメニスタン","es":"Turkmenistán","de":"Turkmenistan","nl":"Turkmenistan"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"TN":{"country_name":{"en":"Tunisia","ja":"チュニジア","es":"Túnez","de":"Tunesien","nl":"Tunesië"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"TO":{"country_name":{"en":"Tonga","ja":"トンガ","es":"Tonga","de":"Tonga","nl":"Tonga"},"currency_code":"TOP","currency_sign":"T$","languages":["en","ja","es","de","nl"]},"TR":{"country_name":{"en":"Turkey","ja":"トルコ","es":"Turquía","de":"Türkei","nl":"Turkije"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"TT":{"country_name":{"en":"Trinidad \\u0026 Tobago","ja":"トリニダード・トバゴ","es":"Trinidad y Tobago","de":"Trinidad und Tobago","nl":"Trinidad en Tobago"},"currency_code":"TTD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"TV":{"country_name":{"en":"Tuvalu","ja":"ツバル","es":"Tuvalu","de":"Tuvalu","nl":"Tuvalu"},"currency_code":"AUD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"TW":{"country_name":{"en":"Taiwan","ja":"台湾","es":"Taiwán","de":"Taiwan","nl":"Taiwan"},"currency_code":"TWD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"TZ":{"country_name":{"en":"Tanzania","ja":"タンザニア","es":"Tanzania","de":"Tansania","nl":"Tanzania"},"currency_code":"TZS","currency_sign":null,"languages":["en","ja","es","de","nl"]},"UA":{"country_name":{"en":"Ukraine","ja":"ウクライナ","es":"Ucrania","de":"Ukraine","nl":"Oekraïne"},"currency_code":"UAH","currency_sign":"₴","languages":["en","ja","es","de","nl"]},"UG":{"country_name":{"en":"Uganda","ja":"ウガンダ","es":"Uganda","de":"Uganda","nl":"Oeganda"},"currency_code":"UGX","currency_sign":null,"languages":["en","ja","es","de","nl"]},"UM":{"country_name":{"en":"U.S. Outlying Islands","ja":"合衆国領有小離島","es":"Islas menores alejadas de EE. UU.","de":"Amerikanische Überseeinseln","nl":"Kleine afgelegen eilanden van de Verenigde Staten"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"US":{"country_name":{"en":"United States","ja":"アメリカ合衆国","es":"Estados Unidos","de":"Vereinigte Staaten","nl":"Verenigde Staten"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"UY":{"country_name":{"en":"Uruguay","ja":"ウルグアイ","es":"Uruguay","de":"Uruguay","nl":"Uruguay"},"currency_code":"UYU","currency_sign":"$","languages":["en","ja","es","de","nl"]},"UZ":{"country_name":{"en":"Uzbekistan","ja":"ウズベキスタン","es":"Uzbekistán","de":"Usbekistan","nl":"Oezbekistan"},"currency_code":"UZS","currency_sign":null,"languages":["en","ja","es","de","nl"]},"VA":{"country_name":{"en":"Vatican City","ja":"バチカン市国","es":"Ciudad del Vaticano","de":"Vatikanstadt","nl":"Vaticaanstad"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"VC":{"country_name":{"en":"St. Vincent \\u0026 Grenadines","ja":"セントビンセント及びグレナディーン諸島","es":"San Vicente y las Granadinas","de":"St. Vincent und die Grenadinen","nl":"Saint Vincent en de Grenadines"},"currency_code":"XCD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"VE":{"country_name":{"en":"Venezuela","ja":"ベネズエラ","es":"Venezuela","de":"Venezuela","nl":"Venezuela"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"VG":{"country_name":{"en":"British Virgin Islands","ja":"英領ヴァージン諸島","es":"Islas Vírgenes Británicas","de":"Britische Jungferninseln","nl":"Britse Maagdeneilanden"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"VN":{"country_name":{"en":"Vietnam","ja":"ベトナム","es":"Vietnam","de":"Vietnam","nl":"Vietnam"},"currency_code":"VND","currency_sign":"₫","languages":["en","ja","es","de","nl"]},"VU":{"country_name":{"en":"Vanuatu","ja":"バヌアツ","es":"Vanuatu","de":"Vanuatu","nl":"Vanuatu"},"currency_code":"VUV","currency_sign":null,"languages":["en","ja","es","de","nl"]},"WF":{"country_name":{"en":"Wallis \\u0026 Futuna","ja":"ウォリス・フツナ","es":"Wallis y Futuna","de":"Wallis und Futuna","nl":"Wallis en Futuna"},"currency_code":"XPF","currency_sign":"CFPF","languages":["en","ja","es","de","nl"]},"WS":{"country_name":{"en":"Samoa","ja":"サモア","es":"Samoa","de":"Samoa","nl":"Samoa"},"currency_code":"WST","currency_sign":null,"languages":["en","ja","es","de","nl"]},"XK":{"country_name":{"en":"Kosovo","ja":"コソボ","es":"Kosovo","de":"Kosovo","nl":"Kosovo"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"YE":{"country_name":{"en":"Yemen","ja":"イエメン","es":"Yemen","de":"Jemen","nl":"Jemen"},"currency_code":"YER","currency_sign":null,"languages":["en","ja","es","de","nl"]},"YT":{"country_name":{"en":"Mayotte","ja":"マヨット","es":"Mayotte","de":"Mayotte","nl":"Mayotte"},"currency_code":"EUR","currency_sign":"€","languages":["en","ja","es","de","nl"]},"ZA":{"country_name":{"en":"South Africa","ja":"南アフリカ","es":"Sudáfrica","de":"Südafrika","nl":"Zuid-Afrika"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"ZM":{"country_name":{"en":"Zambia","ja":"ザンビア","es":"Zambia","de":"Sambia","nl":"Zambia"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]},"ZW":{"country_name":{"en":"Zimbabwe","ja":"ジンバブエ","es":"Zimbabue","de":"Simbabwe","nl":"Zimbabwe"},"currency_code":"USD","currency_sign":"$","languages":["en","ja","es","de","nl"]}}',
);
LocaleBar.data.experimentTranslations = JSON.parse(
  '{"de":{"title":"Dein Standort ist auf {{ country }} festgelegt","language_title":"Deine Sprache ist auf {{ language }} festgelegt","submit":"Fortfahren","change_country":"Land/Region ändern","change_language":"Sprache ändern","change_country_and_language":"Land/Region und Sprache ändern","cancel":"Abbrechen","benefits":{"shipping_options":"Versandoptionen für {{ country }} anzeigen","local_currency":"In {{ currency }} einkaufen","language":"Die Sprache ist auf {{ language }} festgelegt"}},"en":{"title":"Your location is set to {{ country }}","language_title":"Your language is set to {{ language }}","submit":"Continue","change_country":"Change country/region","change_language":"Change language","change_country_and_language":"Change country/region and language","cancel":"Cancel","benefits":{"shipping_options":"Get shipping options for {{ country }}","local_currency":"Shop in {{ currency }}","language":"Language set to {{ language }}"}},"es":{"title":"Tu ubicación está configurada en {{ country }}","language_title":"Tu idioma actual es {{ language }}","submit":"Continuar","change_country":"Cambiar país/región","change_language":"Cambiar idioma","change_country_and_language":"Cambiar país/región e idioma","cancel":"Cancelar","benefits":{"shipping_options":"Buscar opciones de envío para {{ country }}","local_currency":"Comprar en {{ currency }}","language":"El idioma definido es {{ language }}."}},"ja":{"title":"ロケーションは{{ country }}に設定されています","language_title":"言語は{{ language }}に設定されています","submit":"続ける","change_country":"国/地域を変更する","change_language":"言語を変更する","change_country_and_language":"国/地域および言語を変更する","cancel":"キャンセル","benefits":{"shipping_options":"{{ country }}の配送オプションを取得する","local_currency":"{{ currency }}のショップ","language":"{{ language }}に設定された言語"}},"nl":{"title":"Je locatie is ingesteld op {{ country }}","language_title":"Je taal is ingesteld op {{ language }}","submit":"Doorgaan","change_country":"Land/regio wijzigen","change_language":"Taal wijzigen","change_country_and_language":"Land/regio en taal wijzigen","cancel":"Annuleren","benefits":{"shipping_options":"Verzendopties voor {{ country }} bekijken","local_currency":"Winkelen in het {{ currency }}","language":"Taal ingesteld op {{ language }}"}}}',
);
LocaleBar.fetch().then(function (suggestions) {
  if (!suggestions) return;

  LocaleBar.style.innerHTML =
    ".locale-bar__container{font-size:16px;outline:none;z-index:1000000}.locale-bar__content{align-items:flex-start;display:flex;justify-content:space-between;padding:1em}.locale-bar__message{margin:0;padding:0}.locale-bar__form{margin:0.5em 0 0 -0.3em;text-align:left}.locale-bar__selector{-moz-appearance:none !important;-webkit-appearance:none !important;appearance:none !important;background-color:#f4f4f4 !important;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjUiPjxwYXRoIGZpbGw9IiM2NjYiIGQ9Ik0wIDBzMy40IDQuNCAzLjUgNC40QzMuNyA0LjQgNy4xIDAgNy4xIDBIMHoiLz48L3N2Zz4=\") !important;background-position:right 10px center !important;background-repeat:no-repeat !important;background-size:auto !important;border-radius:2px !important;border:0 !important;color:#333 !important;cursor:pointer !important;display:inline-block !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;margin:0.3em !important;max-width:100% !important;min-height:unset !important;min-width:unset !important;padding:0.3em 28px 0.3em 0.5em !important;text-indent:0.01px !important;text-overflow:'' !important;vertical-align:baseline !important;width:auto !important}.locale-bar__button{border:none !important;box-shadow:none !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;min-height:unset !important;min-width:unset !important;text-align:center !important;vertical-align:unset !important;width:auto !important;border:none;border-radius:2px;box-shadow:none;margin:0.3em;padding:0.3em 0.5em}.locale-bar__button:hover,.locale-bar__button:focus{border:none !important;box-shadow:none !important;min-width:unset !important;width:auto !important}.locale-bar__button:focus{outline:auto !important}.locale-bar__button:hover{box-shadow:inset 0 0 0 100px rgba(0,0,0,0.15)}.locale-bar__button--minimal{border:none !important;box-shadow:none !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;min-height:unset !important;min-width:unset !important;text-align:center !important;vertical-align:unset !important;width:auto !important;background:none !important;padding:0 !important;text-decoration:underline}.locale-bar__button--minimal:hover,.locale-bar__button--minimal:focus{border:none !important;box-shadow:none !important;min-width:unset !important;width:auto !important}.locale-bar__button--minimal:focus{outline:auto !important}.locale-bar__button--minimal:hover,.locale-bar__button--minimal:focus{background:none !important}.locale-bar__close-button{border:none !important;box-shadow:none !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;min-height:unset !important;min-width:unset !important;text-align:center !important;vertical-align:unset !important;width:auto !important;background:none !important;padding:0 !important;margin-left:1em;padding-top:2px}.locale-bar__close-button:hover,.locale-bar__close-button:focus{border:none !important;box-shadow:none !important;min-width:unset !important;width:auto !important}.locale-bar__close-button:focus{outline:auto !important}.locale-bar__close-button:hover,.locale-bar__close-button:focus{background:none !important}.recommendation-modal__container{box-shadow:0px 0px 1px rgba(0,0,0,0.3),0px 4px 4px 1px rgba(0,0,0,0.1);max-width:30em;position:fixed;left:50%;top:50%;transform:translate(-50%, -50%);width:calc(100% - 2em);z-index:1000000;border-radius:5px}.recommendation-modal__close-button-container{display:flex;justify-content:flex-end}.recommendation-modal__close-button{border:none !important;box-shadow:none !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;min-height:unset !important;min-width:unset !important;text-align:center !important;vertical-align:unset !important;width:auto !important;background:none !important;padding:0 !important;margin-right:10px;margin-top:10px}.recommendation-modal__close-button:hover,.recommendation-modal__close-button:focus{border:none !important;box-shadow:none !important;min-width:unset !important;width:auto !important}.recommendation-modal__close-button:focus{outline:auto !important}.recommendation-modal__close-button:hover,.recommendation-modal__close-button:focus{background:none !important}.recommendation-modal__content{display:flex;flex-direction:column;align-items:center;padding:0 2.5em 2.5em}@media (max-width: 750px){.recommendation-modal__content{padding:0 2em 2em}}.recommendation-modal__flag{padding-top:12px}.recommendation-modal__flag img{width:75px !important;height:48px !important}.recommendation-modal__message,.recommendation-modal__message--align-start{font-weight:normal !important;text-transform:none;margin:12px 0 25px !important;text-align:center;letter-spacing:normal;font-size:22px !important;line-height:1.3 !important}.recommendation-modal__message--align-start{align-self:flex-start}.recommendation-modal__message--bold{font-weight:bold !important}.recommendation-modal__benefits{width:100%}.recommendation-modal__benefits ul{margin:0 0 12px 0;padding-left:16px;font-size:16px}.recommendation-modal__benefits ul li{font-size:16px !important;line-height:1.4 !important;list-style-type:disc;margin-bottom:4px}.recommendation-modal__button{border:none !important;box-shadow:none !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;min-height:unset !important;min-width:unset !important;text-align:center !important;vertical-align:unset !important;width:auto !important;border:none;border-radius:4px;box-shadow:none;margin:0 !important;width:100% !important;height:52px !important;font-size:18px !important;box-sizing:border-box !important;padding:0 !important}.recommendation-modal__button:hover,.recommendation-modal__button:focus{border:none !important;box-shadow:none !important;min-width:unset !important;width:auto !important}.recommendation-modal__button:focus{outline:auto !important}.recommendation-modal__button:hover,.recommendation-modal__button:focus{cursor:pointer;width:100% !important}.recommendation-modal__button--minimal{border:none !important;box-shadow:none !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;min-height:unset !important;min-width:unset !important;text-align:center !important;vertical-align:unset !important;width:auto !important;background:none !important;padding:0 !important;margin-top:10px;text-decoration-line:underline;font-size:14px !important}.recommendation-modal__button--minimal:hover,.recommendation-modal__button--minimal:focus{border:none !important;box-shadow:none !important;min-width:unset !important;width:auto !important}.recommendation-modal__button--minimal:focus{outline:auto !important}.recommendation-modal__button--minimal:hover,.recommendation-modal__button--minimal:focus{background:none !important}.recommendation-modal__button--minimal:hover{cursor:pointer}.recommendation-modal__backdrop{background-color:rgba(0,0,0,0.3);display:block !important;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:999999}.recommendation-modal__selector--flag{-moz-appearance:none !important;-webkit-appearance:none !important;appearance:none !important;background-color:#f4f4f4 !important;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjUiPjxwYXRoIGZpbGw9IiM2NjYiIGQ9Ik0wIDBzMy40IDQuNCAzLjUgNC40QzMuNyA0LjQgNy4xIDAgNy4xIDBIMHoiLz48L3N2Zz4=\") !important;background-position:right 10px center !important;background-repeat:no-repeat !important;background-size:auto !important;border-radius:2px !important;border:0 !important;color:#333 !important;cursor:pointer !important;display:inline-block !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;margin:0.3em !important;max-width:100% !important;min-height:unset !important;min-width:unset !important;padding:0.3em 28px 0.3em 0.5em !important;text-indent:0.01px !important;text-overflow:'' !important;vertical-align:baseline !important;width:auto !important;background-color:transparent !important;border:1px solid #babfc3 !important;border-radius:4px !important;width:100% !important;height:38px !important;margin:0 !important;padding-left:40px !important}.recommendation-modal__selector{-moz-appearance:none !important;-webkit-appearance:none !important;appearance:none !important;background-color:#f4f4f4 !important;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjUiPjxwYXRoIGZpbGw9IiM2NjYiIGQ9Ik0wIDBzMy40IDQuNCAzLjUgNC40QzMuNyA0LjQgNy4xIDAgNy4xIDBIMHoiLz48L3N2Zz4=\") !important;background-position:right 10px center !important;background-repeat:no-repeat !important;background-size:auto !important;border-radius:2px !important;border:0 !important;color:#333 !important;cursor:pointer !important;display:inline-block !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;margin:0.3em !important;max-width:100% !important;min-height:unset !important;min-width:unset !important;padding:0.3em 28px 0.3em 0.5em !important;text-indent:0.01px !important;text-overflow:'' !important;vertical-align:baseline !important;width:auto !important;background-color:transparent !important;border:1px solid #babfc3 !important;border-radius:4px !important;width:100% !important;height:38px !important;margin:0 !important}.recommendation-modal__selector-wrapper--flag{background-image:var(--bg-image);background-repeat:no-repeat;background-position:11px center;background-size:25px;background-color:#f4f4f4 !important;border-radius:4px !important;margin:0 0 12px 0}.recommendation-modal__selector-wrapper{background-color:#f4f4f4 !important;border-radius:4px !important;margin:0 0 12px 0}.recommendation-modal__form{margin:0;width:100%}.recommendation-modal__form button:last-of-type{margin-top:18px !important}\n";
  LocaleBar.render(
    suggestions,
    JSON.parse(
      '{"colors":{"background":"#fff","foreground":"#333333","buttonBackground":"#1773b0","buttonForeground":"#ffffff","link":"#1773b0"},"layout":{"minimal":false,"variant":"modal"},"messages":{"de":{"currency_and_language_suggestion":"Anscheinend befindest du dich in {{ country }}. Möchtest du deine Sprache und Währung ändern?","currency_suggestion":"Anscheinend befindest du dich in {{ country }}. Währung ändern?","country_and_language_suggestion":"Anscheinend befindest du dich in {{ country }}. Land und Sprache wechseln?","country_suggestion":"Anscheinend befindest du dich in {{ country }}. Land wechseln?","language_suggestion":"Dein Browser ist anscheinend auf {{ language }} eingestellt. Sprache ändern?","submit":"Ändern"},"en":{"currency_and_language_suggestion":"Looks like you’re in {{ country }}. Change language and currency?","currency_suggestion":"Looks like you’re in {{ country }}. Change currency?","country_and_language_suggestion":"Looks like you’re in {{ country }}. Change country and language?","country_suggestion":"Looks like you’re in {{ country }}. Change country?","language_suggestion":"Looks like your browser is set to {{ language }}. Change language?","submit":"Change"},"es":{"currency_and_language_suggestion":"Parece que estás en {{ country }}. ¿Deseas cambiar el idioma y la moneda?","currency_suggestion":"Parece que estás en {{ country }}. ¿Deseas cambiar la moneda?","country_and_language_suggestion":"Parece que estás en {{ country }}. ¿Deseas cambiar de país y de idioma?","country_suggestion":"Parece que estás en {{ country }}. ¿Deseas cambiar de país?","language_suggestion":"Parece que el idioma de tu navegador es {{ language }}. ¿Deseas cambiar el idioma?","submit":"Cambiar"},"ja":{"currency_and_language_suggestion":"{{ country }}にいらっしゃるようです。言語と通貨を変更されますか?","currency_suggestion":"{{ country }}にいらっしゃるようです。通貨を変更されますか?","country_and_language_suggestion":"{{ country }}にいらっしゃるようです。国と言語を変更されますか?","country_suggestion":"{{ country }}にいらっしゃるようです。国を変更されますか?","language_suggestion":"ブラウザの言語が{{ language }}に設定されているようです。言語を変更されますか?","submit":"変更する"},"nl":{"currency_and_language_suggestion":"Het lijkt erop dat je in {{ country }} bent. Wil je de taal en valuta wijzigen?","currency_suggestion":"Het lijkt erop dat je in {{ country }} bent. Valuta wijzigen?","country_and_language_suggestion":"Het lijkt erop dat je in {{ country }} bent. Land en taal wijzigen?","country_suggestion":"Het lijkt erop dat je in {{ country }} bent. Land wijzigen?","language_suggestion":"Het lijkt erop dat je browser is ingesteld op {{ language }}. Taal wijzigen?","submit":"Wijzigen"}}}',
    ),
  );
});
