!(function () {
  var e = function (e) {
      var t = { exports: {} };
      return e.call(t.exports, t, t.exports), t.exports;
    },
    f = (function () {
      function r(e, t) {
        var r = [],
          o = !0,
          n = !1,
          a = undefined;
        try {
          for (
            var i, s = e[Symbol.iterator]();
            !(o = (i = s.next()).done) &&
            (r.push(i.value), !t || r.length !== t);
            o = !0
          );
        } catch (u) {
          (n = !0), (a = u);
        } finally {
          try {
            !o && s["return"] && s["return"]();
          } finally {
            if (n) throw a;
          }
        }
        return r;
      }
      return function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return r(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance",
        );
      };
    })(),
    s = function (e) {
      return e && e.__esModule ? e : { default: e };
    },
    o = function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
      }
      return Array.from(e);
    },
    u = e(function (e, t) {
      "use strict";
      function r(e) {
        "loading" !== document.readyState
          ? e()
          : document.addEventListener
          ? document.addEventListener("DOMContentLoaded", e)
          : document.attachEvent("onreadystatechange", function () {
              "loading" !== document.readyState && e();
            });
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t["default"] = r);
    }),
    y = e(function (e, t) {
      "use strict";
      function r(e) {
        return new Error(
          'The feature { name: "' +
            e.name +
            '", version: "' +
            e.version +
            '"} does not exist',
        );
      }
      function o(e) {
        return new Error("Could not create registry entry " + e);
      }
      function n() {
        return new Error(
          "Cannot register a feature with the same selector twice",
        );
      }
      function a(e) {
        return new Error(
          "Features should be an Array. Received: " + JSON.stringify(e),
        );
      }
      function i(e) {
        return new Error(
          'Features should be defined as `{ name: "name", version: "version" }`. Received: ' +
            JSON.stringify(e),
        );
      }
      function s(e, t) {
        return new Error(e + " has already been loaded at version " + t);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.featureNotFound = r),
        (t.couldNotCreateEntry = o),
        (t.couldNotAddToQuerySelectors = n),
        (t.invalidFeaturesArray = a),
        (t.invalidFeature = i),
        (t.alreadyLoaded = s);
    }),
    v = e(function (e, t) {
      "use strict";
      function r() {
        if (a) return a;
        var e = document.getElementById("shopify-features");
        if (e)
          try {
            a = JSON.parse(e.textContent);
          } catch (t) {}
        else a = {};
        return a;
      }
      function o() {
        var e = r();
        if (e)
          try {
            return e.betas.reduce(function (e, t) {
              return (e[t] = !0), e;
            }, {});
          } catch (t) {}
        return {};
      }
      function n() {
        return r().locale || "en";
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getBetas = o),
        (t.getLocale = n);
      var a = void 0;
    }),
    p = e(function (e, t) {
      "use strict";
      function r() {}
      Object.defineProperty(t, "__esModule", { value: !0 }), (t["default"] = r);
    }),
    a = e(function (e, t) {
      "use strict";
      function r() {
        function e(e, t) {
          s[e] = s[e] || [];
          for (var r = s[e], o = 0; o < r.length; o++) {
            var n = r[o],
              a = n.name,
              i = n.version;
            if (t.name === a) {
              if (t.version !== i) throw (0, y.couldNotAddToQuerySelectors)(e);
              return;
            }
          }
          r.push(t);
        }
        function t() {
          return Object.keys(s).reduce(function (e, t) {
            if (!document.querySelector(t)) return e;
            var r = s[t];
            return delete s[t], e.concat(r);
          }, []);
        }
        var s = {};
        return { add: e, getFeatures: t };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t["default"] = r);
    }),
    h = e(function (e, t) {
      "use strict";
      function r(e) {
        var t = e.name,
          r = e.baseName,
          o = e.version,
          n = e.betaFlag,
          a = e.fileName,
          i = e.fileNames,
          s = e.legacy,
          u = e.localized,
          l = e.localesSupported,
          d = e.autoLoadSelector,
          c = e.props,
          f = c === undefined ? {} : c,
          p = t + "@" + (o || "latest");
        if (h[p]) throw (0, y.couldNotCreateEntry)(p);
        d &&
          (Array.isArray(d) ? d : [d]).forEach(function (e) {
            w.lookup.add(e, { name: t, version: o });
          });
        h[p] = {
          props: f,
          betaFlag: n,
          scriptId: p,
          name: t,
          baseName: r,
          version: o,
          locale: (0, v.getLocale)(),
          localized: u,
          localesSupported: l,
          legacy: s,
          fileName: a,
          fileNames: i,
        };
      }
      function o() {
        d = {};
      }
      function n(e) {
        window.Shopify.modules
          ? ((e.legacy = !1), (e.props = { type: "module" }), r(e))
          : e.hasLegacy &&
            ((e.legacy = !0), (e.props = { nomodule: "" }), r(e));
      }
      function a(e) {
        var t = e.name + "@" + (e.version || "latest"),
          r = h[t];
        if (!r) throw (0, y.featureNotFound)(e);
        var o = r.name,
          n = r.baseName,
          a = r.version,
          i = r.localized && r.locale,
          s = r.legacy,
          u = r.localesSupported;
        if (d[o] && d[o] !== a) throw (0, y.alreadyLoaded)(t, d[o]);
        d[o] = a;
        var l = [];
        return (
          (r.fileNames || [r.fileName]).forEach(function (e) {
            l.push(
              (0, c.urlForFeature)({
                name: o,
                baseName: n,
                version: a,
                legacy: s,
                locale: i,
                localesSupported: u,
                fileName: e,
              }),
            );
          }),
          1 === l.length ? (r.src = l[0]) : 1 < l.length && (r.srcs = l),
          r
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.reset = o),
        (t.register = n),
        (t.getEntry = a);
      var h = {},
        d = {};
    }),
    m = e(function (e, t) {
      "use strict";
      function r() {
        n = null;
      }
      function o(e) {
        return n ? n[e] : ((n = (0, v.getBetas)()), o(e));
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resetBetas = r),
        (t["default"] = o);
      var n = null;
    }),
    g = e(function (e, t) {
      "use strict";
      function u(e) {
        return -1 < d.indexOf(e);
      }
      function l(e) {
        return -1 < c.indexOf(e);
      }
      function r(e, t, r) {
        function o() {
          d.push(s), i(), r(null, s);
        }
        function n() {
          c.push(s), i(), r(new Error("load error: " + e));
        }
        function a() {
          s.addEventListener("load", o), s.addEventListener("error", n);
        }
        function i() {
          s.removeEventListener("load", o), s.removeEventListener("error", n);
        }
        var s = document.querySelector('script[src="' + e + '"]');
        s && u(s)
          ? o()
          : s && l(s)
          ? n()
          : s
          ? a()
          : ((s = document.createElement("script")),
            Object.keys(t).forEach(function (e) {
              s.setAttribute(e, t[e]);
            }),
            null === s.getAttribute("defer") && s.setAttribute("defer", ""),
            (s.src = e),
            (s.crossorigin = "anonymous"),
            a(),
            document.head.appendChild(s));
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t["default"] = r);
      var d = [],
        c = [];
    }),
    i = e(function (e, t) {
      "use strict";
      function n(e, s, u) {
        return e.reduce(function (e, t) {
          var r = t.onLoad || d["default"];
          try {
            var o = (0, h.getEntry)(t),
              n = o.betaFlag,
              a = !n || (0, l["default"])(n);
            if (u && !a) throw (0, y.featureNotFound)(t);
            a && e.push([o, t]);
          } catch (i) {
            r(i), s.push(i);
          }
          return e;
        }, []);
      }
      function a(e, s, u) {
        var l = e.reduce(function (e, t) {
          var r = f(t, 1)[0];
          return e + (r.srcs ? r.srcs.length : 1);
        }, 0);
        0 !== l
          ? e.forEach(function (e) {
              var t = f(e, 2),
                r = t[0],
                o = t[1].onLoad || d["default"],
                n = r.srcs || [r.src],
                a = n.length,
                i = [];
              n.forEach(function (e) {
                (0, c["default"])(e, r.props, function (e) {
                  e && (s.push(e), i.push(e)),
                    0 === --a &&
                      (0 === i.length
                        ? o(null)
                        : 1 === i.length
                        ? o(i[0])
                        : o(i)),
                    0 === --l && u(s);
                });
              });
            })
          : u(s);
      }
      function r(e, t, r) {
        var o = [];
        a(n(e, o, t), o, function (e) {
          var t = 0 === e.length ? null : e;
          r(t);
        });
      }
      function o(e, t) {
        r(e, !0, t);
      }
      function i(e, t) {
        r(e, !1, t);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loadMultiple = r),
        (t.loadMultipleErrorIfNotInBeta = o),
        (t.loadMultipleSilentIfNotInBeta = i);
      var l = s(m),
        d = s(p),
        c = s(g);
    }),
    w = e(function (e, t) {
      "use strict";
      function r(e) {
        var t = e || o["default"];
        (0, i.loadMultipleSilentIfNotInBeta)(n.getFeatures(), t);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.lookup = undefined),
        (t["default"] = r);
      var o = s(p),
        n = (0, s(a)["default"])();
      t.lookup = n;
    }),
    c = e(function (e, t) {
      "use strict";
      function r(e) {
        var t = e.name,
          r = e.version,
          o = e.legacy,
          n = e.baseName,
          a = n === undefined ? null : n,
          i = e.locale,
          s = i === undefined ? null : i,
          u = e.localesSupported,
          l = u === undefined ? [] : u,
          d = e.fileName,
          c = a || t,
          f = (d === undefined ? null : d) || c;
        if (
          (f.endsWith(".js") && (f = f.slice(0, -3)),
          o && (f += "-legacy"),
          s && (f = f + "." + (s = 0 === l.length || l.includes(s) ? s : "en")),
          ("shop-js" === t || t.startsWith("shop-js/")) &&
            window.Shopify.spinShopJsUrl)
        )
          return "https://" + window.Shopify.spinShopJsUrl + "/" + f + ".js";
        var p = [
          (window.Shopify && window.Shopify.cdnHost) || "cdn.shopify.com",
          "shopifycloud",
          c,
        ];
        return (
          r !== undefined && p.push("v" + r),
          p.push(f + ".js"),
          "https://" + p.join("/")
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.urlForFeature = r);
    }),
    l = e(function (e, t) {
      "use strict";
      function r(e) {
        if (!e || "string" != typeof e.name || "string" != typeof e.version)
          throw (0, y.invalidFeature)(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t["default"] = r);
    }),
    d = e(function (e, t) {
      "use strict";
      function r(e, t) {
        var r = t || n["default"];
        if (Array.isArray(e))
          return (
            e.forEach(o["default"]),
            void (0, i.loadMultipleErrorIfNotInBeta)(e, r)
          );
        throw (0, y.invalidFeaturesArray)(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t["default"] = r);
      var o = s(l),
        n = s(p);
    }),
    b = e(function (e, t) {
      "use strict";
      function r(o) {
        var e = null;
        return {
          get isObserving() {
            return Boolean(e);
          },
          enable: function t() {
            this.isObserving ||
              (e = new MutationObserver(function (e) {
                for (var t = !1, r = 0; r < e.length; r++)
                  if (e[r].addedNodes.length) {
                    t = !0;
                    break;
                  }
                t && o();
              })).observe(document.body, { childList: !0, subtree: !0 });
          },
          disable: function r() {
            this.isObserving && (e.disconnect(), (e = null));
          },
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t["default"] = r);
    }),
    S = e(function (e, t) {
      "use strict";
      function r(e, t) {
        var r = window.Shopify[e] && window.Shopify[e].q;
        r &&
          Array.isArray(r) &&
          r.forEach(function (e) {
            t.apply(undefined, o(e));
          }),
          (window.Shopify[e] = t);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t["default"] = r);
    });
  e(function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.resetRegistry = t.resetBetas = t.register = undefined);
    var r = s(u),
      o = s(d),
      n = s(w),
      a = s(b),
      i = s(S);
    (t.register = h.register),
      (t.resetBetas = m.resetBetas),
      (t.resetRegistry = h.reset),
      (window.Shopify = window.Shopify || {}),
      (window.Shopify.featureAssets = window.Shopify.featureAssets || {}),
      (window.Shopify.featureAssets["shop-js"] =
        window.Shopify.featureAssets["shop-js"] || {}),
      (0, h.register)({
        name: "model-viewer",
        version: "0.6",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="0.6"]',
      }),
      (0, h.register)({
        name: "model-viewer",
        version: "0.7",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="0.7"]',
      }),
      (0, h.register)({
        name: "model-viewer",
        version: "0.8",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="0.8"]',
      }),
      (0, h.register)({
        name: "model-viewer",
        version: "1.2",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="1.2"]',
      }),
      (0, h.register)({
        name: "model-viewer",
        version: "1.7",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="1.7"]',
      }),
      (0, h.register)({
        name: "model-viewer",
        version: "1.9",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="1.9"]',
      }),
      (0, h.register)({
        name: "model-viewer",
        version: "1.10",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="1.10"]',
      }),
      (0, h.register)({
        name: "model-viewer",
        version: "1.11",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="1.11"]',
      }),
      (0, h.register)({
        name: "model-viewer",
        version: "1.12",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="1.12"]',
      }),
      (0, h.register)({
        name: "shop-js/shopify-payment-terms",
        baseName: "shop-js",
        hasLegacy: !1,
        localized: !1,
        fileNames: Shopify.featureAssets["shop-js"]["payment-terms"] || [
          "client",
        ],
        autoLoadSelector: ["shopify-payment-terms"],
      }),
      (0, h.register)({
        name: "shop-js/shop-login-button",
        baseName: "shop-js",
        hasLegacy: !1,
        localized: !1,
        fileNames: Shopify.featureAssets["shop-js"]["login-button"] || [
          "client",
        ],
        autoLoadSelector: ["shop-login-button"],
      }),
      (0, h.register)({
        name: "model-viewer-ui",
        version: "1.0",
        hasLegacy: !0,
        localized: !0,
        localesSupported: [
          "bg-BG",
          "cs",
          "da",
          "de",
          "el",
          "es",
          "fi",
          "fr",
          "hi",
          "hr-HR",
          "hu",
          "id",
          "it",
          "ja",
          "ko",
          "lt-LT",
          "ms",
          "nb",
          "nl",
          "pl",
          "pt-BR",
          "pt-PT",
          "ro-RO",
          "ru",
          "sk-SK",
          "sl-SI",
          "sv",
          "th",
          "tr",
          "vi",
          "zh-CN",
          "zh-TW",
        ],
      }),
      (0, h.register)({
        name: "shopify-xr",
        version: "1.0",
        baseName: "shopify-xr-js",
        fileName: "shopify-xr",
        localized: !0,
        localesSupported: [
          "bg-BG",
          "cs",
          "da",
          "de",
          "el",
          "es",
          "fi",
          "fr",
          "hi",
          "hr-HR",
          "hu",
          "id",
          "it",
          "ja",
          "ko",
          "lt-LT",
          "ms",
          "nb",
          "nl",
          "pl",
          "pt-BR",
          "pt-PT",
          "ro-RO",
          "ru",
          "sk-SK",
          "sl-SI",
          "sv",
          "th",
          "tr",
          "vi",
          "zh-CN",
          "zh-TW",
        ],
      }),
      (0, h.register)({
        name: "video-ui",
        baseName: "shopify-plyr",
        version: "1.0",
        hasLegacy: !0,
        localized: !0,
        localesSupported: [
          "cs",
          "da",
          "de",
          "es",
          "fi",
          "fr",
          "hi",
          "it",
          "ja",
          "ko",
          "ms",
          "nb",
          "nl",
          "pl",
          "pt-BR",
          "pt-PT",
          "sv",
          "th",
          "tr",
          "zh-CN",
          "zh-TW",
        ],
      }),
      (0, h.register)({
        name: "video-ui",
        baseName: "shopify-plyr",
        version: "1.1",
        hasLegacy: !0,
        localized: !0,
        localesSupported: [
          "cs",
          "da",
          "de",
          "es",
          "fi",
          "fr",
          "hi",
          "it",
          "ja",
          "ko",
          "ms",
          "nb",
          "nl",
          "pl",
          "pt-BR",
          "pt-PT",
          "sv",
          "th",
          "tr",
          "zh-CN",
          "zh-TW",
        ],
      }),
      (0, h.register)({
        name: "video-ui",
        baseName: "plyr",
        version: "2.0",
        hasLegacy: !0,
        localized: !0,
        localesSupported: [
          "bg-BG",
          "cs",
          "da",
          "de",
          "el",
          "es",
          "fi",
          "fr",
          "hi",
          "hr-HR",
          "hu",
          "id",
          "it",
          "ja",
          "ko",
          "lt-LT",
          "ms",
          "nb",
          "nl",
          "pl",
          "pt-BR",
          "pt-PT",
          "ro-RO",
          "ru",
          "sk-SK",
          "sl-SI",
          "sv",
          "th",
          "tr",
          "vi",
          "zh-CN",
          "zh-TW",
        ],
        fileName: "shopify-plyr",
      }),
      (0, h.register)({
        name: "media-analytics",
        version: "0.1",
        hasLegacy: !0,
        fileName: "analytics",
        betaFlag: "rich-media-storefront-analytics",
        autoLoadSelector: [
          "video",
          "model-viewer",
          'a[rel="ar"]',
          'a[href*="package=com.google.ar.core;action=android.intent.action.VIEW;"]',
          "[data-shopify-xr]",
          'iframe[src^="https://www.youtube.com/embed/"]',
          'iframe[src^="https://player.vimeo.com/video/"]',
        ],
      }),
      (0, h.register)({
        name: "consent-tracking-api",
        version: "0.1",
        hasLegacy: !0,
      }),
      (0, r["default"])(function () {
        function e() {
          (0, n["default"])(function (e) {
            if (e) throw e[0];
          });
        }
        (0, i["default"])("loadFeatures", o["default"]),
          (0, i["default"])("autoloadFeatures", n["default"]),
          e(),
          (0, a["default"])(e).enable();
      });
  });
})(
  "undefined" != typeof global
    ? global
    : "undefined" != typeof window && window,
);
