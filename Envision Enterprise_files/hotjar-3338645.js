window.hjSiteSettings = window.hjSiteSettings || {
  site_id: 3338645,
  r: 0.43859427000661383,
  rec_value: 0.01,
  state_change_listen_mode: "automatic",
  record: true,
  continuous_capture_enabled: true,
  recording_capture_keystrokes: true,
  session_capture_console_consent: false,
  anonymize_digits: true,
  anonymize_emails: true,
  suppress_all: false,
  suppress_all_on_specific_pages: [],
  suppress_text: false,
  suppress_location: false,
  user_attributes_enabled: false,
  legal_name: null,
  privacy_policy_url: null,
  deferred_page_contents: [],
  record_targeting_rules: [],
  feedback_widgets: [],
  heatmaps: [],
  polls: [],
  integrations: {
    optimizely: { tag_recordings: false },
    abtasty: { tag_recordings: false },
    mixpanel: { send_events: false },
    unbounce: { tag_recordings: false },
    google_optimize: { tag_recordings: false },
    hubspot: { enabled: false, send_recordings: false, send_surveys: false },
  },
  features: [
    "error_reporting",
    "client_script.compression.pc",
    "ask.separate_service",
    "survey.embeddable_widget",
    "feedback.widgetV2",
    "settings.billing_v2",
    "feedback.embeddable_widget",
    "heatmap.continuous.manual_retaker",
    "ask.use_insights_internal_api",
    "survey.image_question",
    "survey.type_button",
  ],
  tracking_code_verified: true,
};

!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i),
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 227));
})({
  227: function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    r.r(t);
    var a,
      o = (function () {
        function e(t) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 10,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1e3;
          n(this, e),
            (this.send = t),
            (this.batchSize = r),
            (this.flushInterval = i),
            (this.buffer = []),
            (this.flushTimer = null);
        }
        var t, r, a;
        return (
          (t = e),
          (r = [
            {
              key: "getBuffer",
              value: function () {
                return this.buffer;
              },
            },
            {
              key: "add",
              value: function (e) {
                var t = this;
                this.buffer.push(e),
                  this.buffer.length >= this.batchSize
                    ? this.flush()
                    : this.flushTimer ||
                      (this.flushTimer = setTimeout(function () {
                        t.flush();
                      }, this.flushInterval));
              },
            },
            {
              key: "flush",
              value: function () {
                this.buffer.length > 0 &&
                  (this.send(this.buffer), (this.buffer = [])),
                  this.flushTimer &&
                    (clearTimeout(this.flushTimer), (this.flushTimer = null));
              },
            },
          ]) && i(t.prototype, r),
          a && i(t, a),
          e
        );
      })();
    function s(e, t) {
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
    function u(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? s(Object(r), !0).forEach(function (t) {
              c(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : s(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t),
              );
            });
      }
      return e;
    }
    function c(e, t, r) {
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
    }
    var l,
      f = function () {
        try {
          return "performance" in window && "now" in window.performance;
        } catch (e) {
          return !1;
        }
      },
      d = {
        version: 5,
        metricsUrl:
          (null === (a = window._hjSettings) || void 0 === a
            ? void 0
            : a.metricsUrl) || "https://metrics.hotjar.io",
        features: {
          metrics: { sampling: 0.1 },
          fieldMetrics: { sampling: 0.01 },
          debug: { flag: "client_script.metrics.debug", sampling: 0.5 },
        },
        browser: { hasPerformance: !1, hasDebug: !1, inLab: !1 },
        buffer: { bufferSize: 40, flushInterval: 3e3 },
      },
      h = {
        isDebugEnabled: !1,
        isMetricsEnabled: !1,
        isFieldMedtricsEnabled: !1,
        loggedMetrics: {},
        genericTags: {},
      },
      g = function (e, t, r) {
        h.loggedMetrics[e] = u(
          u({}, h.loggedMetrics[e]),
          {},
          c({}, t, r || {}),
        );
      },
      b = function (e) {
        if (!e) return "value";
        var t = Object.keys(e)[0];
        return (t && e[t]) || "value";
      },
      v = function (e, t) {
        var r = b(t),
          n = h.loggedMetrics[e],
          i = (n && n[r]) || {};
        return { tagName: r, start: i.start, total: i.total };
      },
      p = function (e) {
        var t,
          r = null !== (t = e.tag) && void 0 !== t ? t : void 0;
        return h.isDebugEnabled
          ? u(u(u({}, r), e.extraTags), h.genericTags)
          : r;
      },
      m = function (e, t) {
        if (!l) return !1;
        var r = h.isMetricsEnabled || h.isDebugEnabled;
        return (
          "lab" === t && (r = d.browser.inLab),
          "field" === t && (r = h.isFieldMedtricsEnabled),
          e ? r && e.flush : r
        );
      },
      w = function (e) {
        var t = !1,
          r = "v=".concat(d.version),
          n = h.isDebugEnabled
            ? "".concat(d.metricsUrl, "?").concat(r, "&debug=true")
            : "".concat(d.metricsUrl, "?").concat(r),
          i = JSON.stringify(e);
        if ("sendBeacon" in navigator)
          try {
            t = navigator.sendBeacon.bind(navigator)(n, i);
          } catch (e) {}
        if (!1 === t)
          try {
            var a = new XMLHttpRequest();
            a.open("POST", n), (a.timeout = 1e4), a.send(i);
          } catch (e) {}
        d.browser.hasDebug && console.debug("New metric/log: ", e);
      },
      j = {
        getConfig: function (e) {
          return d[e];
        },
        getState: function (e) {
          return h[e];
        },
        start: function () {
          try {
            d.browser = {
              hasPerformance: f(),
              hasDebug: /hjDebug=1/.test(location.search),
              inLab: /hjLab=true/.test(location.search),
            };
            var e = j.time(),
              t = window.hjSiteSettings || {},
              r = t.features,
              n = t.site_id,
              i = new Set(r),
              a = d.features,
              s = a.debug,
              u = a.metrics,
              c = a.fieldMetrics;
            return (
              (h.genericTags = { site_id: n }),
              (h.isDebugEnabled = i.has(s.flag) && Math.random() <= s.sampling),
              (h.isMetricsEnabled = Math.random() <= u.sampling),
              (h.isFieldMedtricsEnabled =
                h.isMetricsEnabled && Math.random() <= c.sampling),
              (l = new o(w, d.buffer.bufferSize, d.buffer.flushInterval)),
              e
            );
          } catch (e) {
            console.debug("Error in metrics.start", { error: e });
          }
        },
        reset: function () {
          h.loggedMetrics = {};
        },
        stop: function () {
          (h.isDebugEnabled = !1),
            (h.isMetricsEnabled = !1),
            (h.genericTags = {});
        },
        count: function (e, t) {
          var r = t.incr,
            n = t.tag,
            i = t.extraTags,
            a = t.type;
          try {
            var o = b(n),
              s = h.loggedMetrics[e],
              f = 0;
            if (r)
              (f = ((s && s[o]) || 0) + (r.value || 1)),
                (h.loggedMetrics[e] = u(
                  u({}, s),
                  {},
                  c({}, o, (null == r ? void 0 : r.flush) ? 0 : f),
                ));
            else f = 1;
            if (m(r, a)) {
              var d = {
                name: e,
                type: "count",
                value: f,
                tags: p({ tag: n, extraTags: i }),
              };
              l.add(d);
            }
          } catch (e) {}
        },
        distr: function (e, t) {
          var r = t.task,
            n = t.value,
            i = t.extraTags;
          m() &&
            l.add({
              name: e,
              type: "distribution",
              value: n,
              tags: p({ tag: { task: r }, extraTags: i }),
            });
        },
        time: function () {
          try {
            if (!d.browser.hasPerformance) return;
            return performance.now();
          } catch (e) {}
        },
        timeStart: function (e, t) {
          try {
            var r = j.time(),
              n = v(e, t).tagName;
            return g(e, n, { start: r }), r;
          } catch (e) {}
        },
        timeEnd: function (e, t) {
          var r = t.tag,
            n = t.incr,
            i = t.extraTags,
            a = t.type;
          try {
            var o = j.time();
            if (!o) return;
            var s,
              u = v(e, r),
              c = u.start,
              f = u.tagName,
              d = u.total;
            if (n) {
              var h,
                b =
                  null !== (h = n.total) && void 0 !== h
                    ? h
                    : n.start && o - n.start;
              s = b ? (d || 0) + b : d;
              var w = n.flush ? void 0 : { total: s };
              g(e, f, w);
            } else (s = c ? o - c : void 0), g(e, f);
            if (s && m(n, a)) {
              var _ = {
                name: e,
                type: "distribution",
                value: Math.round(s),
                tags: p({ tag: r, extraTags: i }),
              };
              l.add(_);
            }
            return o;
          } catch (t) {
            console.debug("Failed to send timer metric: ", {
              name: e,
              tag: r,
              error: t,
            });
          }
        },
        timeWatcher: function () {
          var e,
            t = 0,
            r = !1,
            n = function () {
              var r,
                n = j.time();
              return (
                (t += null !== (r = e && n && n - e) && void 0 !== r ? r : 0),
                (e = j.time()),
                t
              );
            };
          return {
            start: function () {
              if (!r) return (r = !0), (e = j.time());
            },
            incr: n,
            end: function () {
              var r = n();
              return (t = 0), (e = void 0), r;
            },
          };
        },
      };
    (window.hj =
      window.hj ||
      function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        (window.hj.q = window.hj.q || []).push(t);
      }),
      (window.hj.metrics = j);
    var _ = hj.metrics.start();
    (window.hjBootstrap =
      window.hjBootstrap ||
      function (e, t, r) {
        var n,
          i = new RegExp(
            "bot|google|headless|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|phantomjs|pingdom|ahrefsbot",
            "i",
          ),
          a =
            (null === (n = window.navigator) || void 0 === n
              ? void 0
              : n.userAgent) || "unknown";
        if (i.test(a))
          return (
            hj.metrics.count("session-rejection", { tag: { reason: "bot" } }),
            void console.warn(
              "Hotjar not launching due to suspicious userAgent:",
              a,
            )
          );
        var o = "http:" === window.location.protocol,
          s = Boolean(window._hjSettings.preview);
        if (o && !s)
          return (
            hj.metrics.count("session-rejection", { tag: { reason: "https" } }),
            void console.warn(
              "For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047",
            )
          );
        var u = function (e, t, r) {
          (window.hjBootstrapCalled = (window.hjBootstrapCalled || []).concat(
            r,
          )),
            window.hj &&
              window.hj._init &&
              window.hj._init._verifyInstallation &&
              hj._init._verifyInstallation();
        };
        u(0, 0, r);
        var c = window.document,
          l = c.head || c.getElementsByTagName("head")[0];
        hj.scriptDomain = e;
        var f = c.createElement("script");
        (f.async = 1),
          (f.src = hj.scriptDomain + t),
          (f.charset = "utf-8"),
          l.appendChild(f),
          (u.revision = "d2f3cb8"),
          (window.hjBootstrap = u);
      }),
      window.hjBootstrap(
        "https://script.hotjar.com/",
        "modules.14b820ab47d618317075.js",
        "3338645",
      ),
      hj.metrics.timeEnd("resource-blocking-time", {
        tag: { resource: "hotjar-js" },
        incr: { start: _, flush: !0 },
        type: "lab",
      }),
      (window.hjLazyModules = window.hjLazyModules || {
        SURVEY_V2: { js: "survey-v2.2a9c2f0fe98e40d50c16.js" },
        SURVEY_BOOTSTRAPPER: {
          js: "survey-bootstrapper.74e2b1d66a9c249aee1c.js",
        },
        SURVEY_ISOLATED: { js: "survey-isolated.a09ff11ec09285b202ee.js" },
        HEATMAP_RETAKER: { js: "heatmap-retaker.a5acb3dc9f289139abf4.js" },
        SURVEY_INVITATION: { js: "survey-invitation.767a4828db5224147d0e.js" },
        NOTIFICATION: { js: "notification.5219d46bb1e1920f45d1.js" },
        INCOMING_FEEDBACK: { js: "incoming-feedback.a3e0478ca5583d283b91.js" },
        PREACT_INCOMING_FEEDBACK: {
          js: "preact-incoming-feedback.16addb100f670e50dbf1.js",
        },
        SENTRY: { js: "sentry.4015ae92d08d2d80dade.js" },
        BROWSER_PERF: { js: "browser-perf.1c7ecd2be12644b9e658.js" },
      });
  },
});
