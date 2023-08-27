var privacyBanner = (function (e) {
  "use strict";
  var n = function (e, t) {
    return (
      (n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, n) {
            e.__proto__ = n;
          }) ||
        function (e, n) {
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }),
      n(e, t)
    );
  };
  var t = function () {
    return (
      (t =
        Object.assign ||
        function (e) {
          for (var n, t = 1, o = arguments.length; t < o; t++)
            for (var r in (n = arguments[t]))
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          return e;
        }),
      t.apply(this, arguments)
    );
  };
  function o(e, n, t, o) {
    return new (t || (t = Promise))(function (r, a) {
      function i(e) {
        try {
          l(o.next(e));
        } catch (e) {
          a(e);
        }
      }
      function c(e) {
        try {
          l(o.throw(e));
        } catch (e) {
          a(e);
        }
      }
      function l(e) {
        var n;
        e.done
          ? r(e.value)
          : ((n = e.value),
            n instanceof t
              ? n
              : new t(function (e) {
                  e(n);
                })).then(i, c);
      }
      l((o = o.apply(e, n || [])).next());
    });
  }
  function r(e, n) {
    var t,
      o,
      r,
      a,
      i = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (a = { next: c(0), throw: c(1), return: c(2) }),
      "function" == typeof Symbol &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function c(a) {
      return function (c) {
        return (function (a) {
          if (t) throw new TypeError("Generator is already executing.");
          for (; i; )
            try {
              if (
                ((t = 1),
                o &&
                  (r =
                    2 & a[0]
                      ? o.return
                      : a[0]
                      ? o.throw || ((r = o.return) && r.call(o), 0)
                      : o.next) &&
                  !(r = r.call(o, a[1])).done)
              )
                return r;
              switch (((o = 0), r && (a = [2 & a[0], r.value]), a[0])) {
                case 0:
                case 1:
                  r = a;
                  break;
                case 4:
                  return i.label++, { value: a[1], done: !1 };
                case 5:
                  i.label++, (o = a[1]), (a = [0]);
                  continue;
                case 7:
                  (a = i.ops.pop()), i.trys.pop();
                  continue;
                default:
                  if (
                    !((r = i.trys),
                    (r = r.length > 0 && r[r.length - 1]) ||
                      (6 !== a[0] && 2 !== a[0]))
                  ) {
                    i = 0;
                    continue;
                  }
                  if (3 === a[0] && (!r || (a[1] > r[0] && a[1] < r[3]))) {
                    i.label = a[1];
                    break;
                  }
                  if (6 === a[0] && i.label < r[1]) {
                    (i.label = r[1]), (r = a);
                    break;
                  }
                  if (r && i.label < r[2]) {
                    (i.label = r[2]), i.ops.push(a);
                    break;
                  }
                  r[2] && i.ops.pop(), i.trys.pop();
                  continue;
              }
              a = n.call(e, i);
            } catch (e) {
              (a = [6, e]), (o = 0);
            } finally {
              t = r = 0;
            }
          if (5 & a[0]) throw a[1];
          return { value: a[0] ? a[1] : void 0, done: !0 };
        })([a, c]);
      };
    }
  }
  var a = Object.create
    ? function (e, n, t, o) {
        void 0 === o && (o = t);
        var r = Object.getOwnPropertyDescriptor(n, t);
        (r && !("get" in r ? !n.__esModule : r.writable || r.configurable)) ||
          (r = {
            enumerable: !0,
            get: function () {
              return n[t];
            },
          }),
          Object.defineProperty(e, o, r);
      }
    : function (e, n, t, o) {
        void 0 === o && (o = t), (e[o] = n[t]);
      };
  function i(e) {
    var n = "function" == typeof Symbol && Symbol.iterator,
      t = n && e[n],
      o = 0;
    if (t) return t.call(e);
    if (e && "number" == typeof e.length)
      return {
        next: function () {
          return (
            e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e }
          );
        },
      };
    throw new TypeError(
      n ? "Object is not iterable." : "Symbol.iterator is not defined.",
    );
  }
  function c(e, n) {
    var t = "function" == typeof Symbol && e[Symbol.iterator];
    if (!t) return e;
    var o,
      r,
      a = t.call(e),
      i = [];
    try {
      for (; (void 0 === n || n-- > 0) && !(o = a.next()).done; )
        i.push(o.value);
    } catch (e) {
      r = { error: e };
    } finally {
      try {
        o && !o.done && (t = a.return) && t.call(a);
      } finally {
        if (r) throw r.error;
      }
    }
    return i;
  }
  function l(e) {
    return this instanceof l ? ((this.v = e), this) : new l(e);
  }
  var s = Object.create
    ? function (e, n) {
        Object.defineProperty(e, "default", { enumerable: !0, value: n });
      }
    : function (e, n) {
        e.default = n;
      };
  var d,
    u,
    p,
    f,
    h,
    m,
    y,
    g = Object.freeze({
      __proto__: null,
      get __assign() {
        return t;
      },
      __asyncDelegator: function (e) {
        var n, t;
        return (
          (n = {}),
          o("next"),
          o("throw", function (e) {
            throw e;
          }),
          o("return"),
          (n[Symbol.iterator] = function () {
            return this;
          }),
          n
        );
        function o(o, r) {
          n[o] = e[o]
            ? function (n) {
                return (t = !t)
                  ? { value: l(e[o](n)), done: "return" === o }
                  : r
                  ? r(n)
                  : n;
              }
            : r;
        }
      },
      __asyncGenerator: function (e, n, t) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var o,
          r = t.apply(e, n || []),
          a = [];
        return (
          (o = {}),
          i("next"),
          i("throw"),
          i("return"),
          (o[Symbol.asyncIterator] = function () {
            return this;
          }),
          o
        );
        function i(e) {
          r[e] &&
            (o[e] = function (n) {
              return new Promise(function (t, o) {
                a.push([e, n, t, o]) > 1 || c(e, n);
              });
            });
        }
        function c(e, n) {
          try {
            (t = r[e](n)).value instanceof l
              ? Promise.resolve(t.value.v).then(s, d)
              : u(a[0][2], t);
          } catch (e) {
            u(a[0][3], e);
          }
          var t;
        }
        function s(e) {
          c("next", e);
        }
        function d(e) {
          c("throw", e);
        }
        function u(e, n) {
          e(n), a.shift(), a.length && c(a[0][0], a[0][1]);
        }
      },
      __asyncValues: function (e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var n,
          t = e[Symbol.asyncIterator];
        return t
          ? t.call(e)
          : ((e = i(e)),
            (n = {}),
            o("next"),
            o("throw"),
            o("return"),
            (n[Symbol.asyncIterator] = function () {
              return this;
            }),
            n);
        function o(t) {
          n[t] =
            e[t] &&
            function (n) {
              return new Promise(function (o, r) {
                (function (e, n, t, o) {
                  Promise.resolve(o).then(function (n) {
                    e({ value: n, done: t });
                  }, n);
                })(o, r, (n = e[t](n)).done, n.value);
              });
            };
        }
      },
      __await: l,
      __awaiter: o,
      __classPrivateFieldGet: function (e, n, t, o) {
        if ("a" === t && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof n ? e !== n || !o : !n.has(e))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it",
          );
        return "m" === t ? o : "a" === t ? o.call(e) : o ? o.value : n.get(e);
      },
      __classPrivateFieldIn: function (e, n) {
        if (null === n || ("object" != typeof n && "function" != typeof n))
          throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? n === e : e.has(n);
      },
      __classPrivateFieldSet: function (e, n, t, o, r) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !r)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof n ? e !== n || !r : !n.has(e))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it",
          );
        return "a" === o ? r.call(e, t) : r ? (r.value = t) : n.set(e, t), t;
      },
      __createBinding: a,
      __decorate: function (e, n, t, o) {
        var r,
          a = arguments.length,
          i =
            a < 3
              ? n
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(n, t))
              : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          i = Reflect.decorate(e, n, t, o);
        else
          for (var c = e.length - 1; c >= 0; c--)
            (r = e[c]) &&
              (i = (a < 3 ? r(i) : a > 3 ? r(n, t, i) : r(n, t)) || i);
        return a > 3 && i && Object.defineProperty(n, t, i), i;
      },
      __exportStar: function (e, n) {
        for (var t in e)
          "default" === t ||
            Object.prototype.hasOwnProperty.call(n, t) ||
            a(n, e, t);
      },
      __extends: function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Class extends value " +
              String(t) +
              " is not a constructor or null",
          );
        function o() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((o.prototype = t.prototype), new o()));
      },
      __generator: r,
      __importDefault: function (e) {
        return e && e.__esModule ? e : { default: e };
      },
      __importStar: function (e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (null != e)
          for (var t in e)
            "default" !== t &&
              Object.prototype.hasOwnProperty.call(e, t) &&
              a(n, e, t);
        return s(n, e), n;
      },
      __makeTemplateObject: function (e, n) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: n })
            : (e.raw = n),
          e
        );
      },
      __metadata: function (e, n) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, n);
      },
      __param: function (e, n) {
        return function (t, o) {
          n(t, o, e);
        };
      },
      __read: c,
      __rest: function (e, n) {
        var t = {};
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) &&
            n.indexOf(o) < 0 &&
            (t[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
            n.indexOf(o[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
              (t[o[r]] = e[o[r]]);
        }
        return t;
      },
      __spread: function () {
        for (var e = [], n = 0; n < arguments.length; n++)
          e = e.concat(c(arguments[n]));
        return e;
      },
      __spreadArray: function (e, n, t) {
        if (t || 2 === arguments.length)
          for (var o, r = 0, a = n.length; r < a; r++)
            (!o && r in n) ||
              (o || (o = Array.prototype.slice.call(n, 0, r)), (o[r] = n[r]));
        return e.concat(o || Array.prototype.slice.call(n));
      },
      __spreadArrays: function () {
        for (var e = 0, n = 0, t = arguments.length; n < t; n++)
          e += arguments[n].length;
        var o = Array(e),
          r = 0;
        for (n = 0; n < t; n++)
          for (var a = arguments[n], i = 0, c = a.length; i < c; i++, r++)
            o[r] = a[i];
        return o;
      },
      __values: i,
    });
  function b(e, n) {
    if (void 0 !== e) {
      var t = e.filter(n);
      return t.length ? t[0] : void 0;
    }
  }
  function v(e) {
    var n = window.location.search.substring(1);
    if (0 === n.length) return null;
    var t = n.split("&").map(function (e) {
        return e.split("=");
      }),
      o = t.filter(function (n) {
        return n[0] === e;
      })[0];
    return (o ? o[1] : null) || null;
  }
  function C(e) {
    for (
      var n = 0, t = decodeURIComponent(document.cookie).split(";");
      n < t.length;
      n++
    ) {
      var o = t[n].split("="),
        r = o[0],
        a = o[1];
      if (r.trim() === e) return a;
    }
    return "";
  }
  function _(e) {
    return window.Shopify.customerPrivacy.doesMerchantSupportGranularConsent()
      ? { marketing: e, analytics: e, preferences: e }
      : e;
  }
  !(function (e) {
    (e.Accepted = "accept"),
      (e.Declined = "decline"),
      (e.AcceptedAll = "accept_all"),
      (e.DeclinedAll = "decline_all"),
      (e.ManagePreferences = "manage_preferences"),
      (e.Save = "save"),
      (e.LeavePreferences = "leave_preferences"),
      (e.PrivacyPolicyView = "privacy_policy_view");
  })(d || (d = {})),
    (function (e) {
      (e.StylesContainerId = "shopify-pc__banner__styles"),
        (e.DialogId = "shopify-pc__banner"),
        (e.DialogClass = "shopify-pc__banner__dialog"),
        (e.WrapperClass = "shopify-pc__banner__wrapper"),
        (e.BodyClass = "shopify-pc__banner__body"),
        (e.BodyTitleId = "shopify-pc__banner__body-title"),
        (e.BodyCopyPolicyLinkId = "shopify-pc__banner__body-policy-link"),
        (e.ButtonsClass = "shopify-pc__banner__btns"),
        (e.ButtonsGranularClass = "shopify-pc__banner__btns-granular"),
        (e.ButtonAcceptId = "shopify-pc__banner__btn-accept"),
        (e.ButtonAcceptClass = "shopify-pc__banner__btn-accept"),
        (e.ButtonDeclineId = "shopify-pc__banner__btn-decline"),
        (e.ButtonDeclineClass = "shopify-pc__banner__btn-decline"),
        (e.ButtonManagePrefsId = "shopify-pc__banner__btn-manage-prefs"),
        (e.ButtonManagePrefsClass = "shopify-pc__banner__btn-manage-prefs");
    })(u || (u = {})),
    (function (e) {
      (e.StylesContainerId = "shopify-pc__prefs__styles"),
        (e.OverlayId = "shopify-pc__prefs__overlay"),
        (e.OverlayClass = "shopify-pc__prefs__overlay"),
        (e.WrapperId = "shopify-pc__prefs"),
        (e.WrapperClass = "shopify-pc__prefs"),
        (e.DialogId = "shopify-pc__prefs__dialog"),
        (e.DialogClass = "shopify-pc__prefs__dialog"),
        (e.DialogScrollableClass = "shopify-pc__prefs__scrollable"),
        (e.HeaderTitleId = "shopify-pc__prefs__header-title"),
        (e.HeaderActionsClass = "shopify-pc__prefs__header-actions"),
        (e.HeaderSaveId = "shopify-pc__prefs__header-save"),
        (e.HeaderAcceptId = "shopify-pc__prefs__header-accept"),
        (e.HeaderDeclineId = "shopify-pc__prefs__header-decline"),
        (e.HeaderCloseId = "shopify-pc__prefs__header-close"),
        (e.HeaderCloseClass = "shopify-pc__prefs__header-close"),
        (e.IntroClass = "shopify-pc__prefs__intro"),
        (e.IntroMainClass = "shopify-pc__prefs__intro-main"),
        (e.IntroExplainWrapperClass = "shopify-pc__prefs__intro-explain"),
        (e.IntroExplainAcceptClass = "shopify-pc__prefs__intro-explain-accept"),
        (e.IntroExplainDeclineClass =
          "shopify-pc__prefs__intro-explain-decline"),
        (e.OptionWrapperClass = "shopify-pc__prefs__options"),
        (e.OptionClass = "shopify-pc__prefs__option"),
        (e.OptionEssentialId = "shopify-pc__prefs__essential"),
        (e.OptionEssentialInputId = "shopify-pc__prefs__essential-input"),
        (e.OptionMarketingId = "shopify-pc__prefs__marketing"),
        (e.OptionMarketingInputId = "shopify-pc__prefs__marketing-input"),
        (e.OptionAnalyticsId = "shopify-pc__prefs__analytics"),
        (e.OptionAnalyticsInputId = "shopify-pc__prefs__analytics-input"),
        (e.OptionPreferencesId = "shopify-pc__prefs__preferences"),
        (e.OptionPreferencesInputId = "shopify-pc__prefs__preferences-input");
    })(p || (p = {})),
    (function (e) {
      (e.BottomFullWidth = "bottom-full-width"),
        (e.BottomLeft = "bottom-left"),
        (e.Center = "center"),
        (e.BottomRight = "bottom-right"),
        (e.BottomCenter = "bottom-center");
    })(f || (f = {})),
    (function (e) {
      (e.AcceptFirst = "accept-first"), (e.DeclineFirst = "decline-first");
    })(h || (h = {})),
    (function (e) {
      (e.Fill = "fill"), (e.Outline = "outline"), (e.Weighted = "weighted");
    })(m || (m = {})),
    (function (e) {
      (e[(e.Yes = 1)] = "Yes"), (e[(e.No = 0)] = "No");
    })(y || (y = {}));
  var x,
    w,
    P,
    B = function (e, n) {
      return e ? "auto" : n ? "580px" : "365px";
    };
  function I(e, n, t, o, r) {
    var a = (function (e, n) {
        switch (e) {
          case h.AcceptFirst:
            return n ? "flex-direction: column" : "flex-direction: row;";
          case h.DeclineFirst:
            return n
              ? "flex-direction: column-reverse"
              : "flex-direction: row-reverse;";
          default:
            return n ? "flex-direction: column" : "flex-direction: row;";
        }
      })(n, o),
      i = B(o, r),
      c = r ? "1280px" : "900px",
      l = "\n    ."
        .concat(u.WrapperClass, " {\n      display: flex;\n      align-items: ")
        .concat(
          o ? "stretch" : "center",
          ";\n      justify-content: space-between;\n      flex-direction: column;\n    }\n  ",
        ),
      s = "\n    position: "
        .concat(
          o ? "static" : "fixed",
          ";\n    z-index: 2000000;\n    box-shadow: 0px 4px 10px rgb(63 63 68 / 40%);\n    max-height: 90%;\n    box-sizing: border-box;\n    opacity: 1;\n    padding: 32px;\n    background-color: ",
        )
        .concat(
          t.backgroundColor,
          ";\n    overflow: auto;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    border: none;\n    text-align: left;\n  ",
        ),
      d = function (e) {
        var n = "."
          .concat(
            u.ButtonsClass,
            " {\n      flex-direction: column;\n    }\n    .",
          )
          .concat(
            u.ButtonsGranularClass,
            " :nth-child(1) {\n      order: 3;\n    }\n    .",
          )
          .concat(
            u.ButtonsGranularClass,
            " :nth-child(2) {\n      order: 1;\n    }\n    .",
          )
          .concat(
            u.ButtonsGranularClass,
            " :nth-child(3) {\n      order: 2;\n    }",
          );
        return e
          ? n
          : "\n      @media only screen and (max-width: 480px) {\n        ".concat(
              n,
              "\n      }\n    ",
            );
      },
      p = "\n    ."
        .concat(u.DialogClass, " {\n      ")
        .concat(s, "\n      bottom: 0%;\n      width: 100%;\n    }\n    .")
        .concat(u.DialogClass, " button {\n      margin: ")
        .concat(
          o ? "15px" : "0",
          " 10px 0 0;\n    }\n    @media only screen and (max-width: ",
        )
        .concat(c, ") {\n      .")
        .concat(
          u.DialogClass,
          " button {\n        margin: 15px 10px 0 0;\n      }\n    }\n    ",
        )
        .concat(l, "\n    .")
        .concat(u.WrapperClass, " {\n      flex-direction: ")
        .concat(
          o ? "column" : "row",
          ";\n    }\n    @media only screen and (max-width: ",
        )
        .concat(c, ") {\n      .")
        .concat(
          u.WrapperClass,
          " {\n        flex-direction: column;\n      }\n    }\n    .",
        )
        .concat(
          u.BodyClass,
          " {\n      margin-right: 5%;\n      margin-bottom: 0;\n    }\n    @media only screen and (max-width: ",
        )
        .concat(c, ") {\n      .")
        .concat(
          u.BodyClass,
          " {\n        margin-right: 0;\n        margin-bottom: 10px;\n        width: 100%;\n      }\n    }\n    .",
        )
        .concat(u.ButtonsClass, " {\n      display: flex;\n      min-width: ")
        .concat(i, ";\n      ")
        .concat(a, "\n    }\n    @media only screen and (max-width: ")
        .concat(c, ") {\n      .")
        .concat(
          u.ButtonsClass,
          " {\n        min-width: auto;\n        width: 100%;\n        justify-content: flex-end;\n      }\n    }\n    ",
        )
        .concat(d(o), "\n  "),
      m = "\n    ."
        .concat(u.DialogClass, " {\n      ")
        .concat(
          s,
          "\n      top: 50%;\n      left: 25%;\n      width: 50%;\n      transform: translate(0, -50%);\n      min-width: 280px;\n      border-radius: 3px;\n    }\n    ",
        )
        .concat(
          l,
          "\n    @media only screen and (max-width: 1300px) {\n      .",
        )
        .concat(
          u.DialogClass,
          " {\n        left: 15%;\n        width: 70%;\n      }\n    }\n    @media only screen and (max-width: 900px) {\n      .",
        )
        .concat(
          u.DialogClass,
          " {\n        left: 5%;\n        width: 90%;\n      }\n    }\n    .",
        )
        .concat(
          u.BodyClass,
          " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    .",
        )
        .concat(
          u.ButtonsClass,
          " {\n      display: flex;\n      width: 100%;\n      justify-content: flex-end;\n      ",
        )
        .concat(a, "\n    }\n    ")
        .concat(d(o), "\n  "),
      y = "\n    ."
        .concat(u.DialogClass, " {\n      ")
        .concat(
          s,
          "\n      bottom: 0;\n      left: 0;\n      max-width: 650px;\n      border-top-right-radius: 3px;\n    }\n    ",
        )
        .concat(l, "\n    .")
        .concat(
          u.BodyClass,
          " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    .",
        )
        .concat(
          u.ButtonsClass,
          " {\n      display: flex;\n      justify-content: flex-end;\n      width: 100%;\n      ",
        )
        .concat(a, "\n    }\n    ")
        .concat(d(o), "\n  "),
      g = "\n    ."
        .concat(u.DialogClass, " {\n      ")
        .concat(
          s,
          "\n      bottom: 0;\n      right: 0;\n      max-width: 650px;\n      border-top-left-radius: 3px;\n    }\n    ",
        )
        .concat(l, "\n    .")
        .concat(
          u.BodyClass,
          " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    .",
        )
        .concat(
          u.ButtonsClass,
          " {\n      display: flex;\n      justify-content: flex-end;\n      width: 100%;\n      ",
        )
        .concat(a, "\n    }\n    ")
        .concat(d(o), "\n  "),
      b = "\n    ."
        .concat(u.DialogClass, " {\n      ")
        .concat(
          s,
          "\n      bottom: 0;\n      left: 25%;\n      width: 50%;\n      min-width: 280px;\n      border-top-right-radius: 3px;\n      border-top-left-radius: 3px;\n    }\n    ",
        )
        .concat(
          l,
          "\n    @media only screen and (max-width: 1300px) {\n      .",
        )
        .concat(
          u.DialogClass,
          " {\n        left: 15%;\n        width: 70%;\n      }\n    }\n    @media only screen and (max-width: 900px) {\n      .",
        )
        .concat(
          u.DialogClass,
          " {\n        left: 5%;\n        width: 90%;\n      }\n    }\n    .",
        )
        .concat(
          u.BodyClass,
          " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    .",
        )
        .concat(
          u.ButtonsClass,
          " {\n      display: flex;\n      width: 100%;\n      justify-content: flex-end;\n      ",
        )
        .concat(a, "\n    }\n    ")
        .concat(d(o), "\n  ");
    if (o) return p;
    switch (e) {
      case f.BottomFullWidth:
        return p;
      case f.Center:
        return m;
      case f.BottomLeft:
        return y;
      case f.BottomRight:
        return g;
      case f.BottomCenter:
        return b;
      default:
        return p;
    }
  }
  !(function (e) {
    (e.Black = "#333"),
      (e.White = "#fff"),
      (e.Gray = "#ccc"),
      (e.Green = "#3AA83A"),
      (e.LightGray = "#F7F8F9"),
      (e.DarkGray = "#36454F"),
      (e.VeryDarkGray = "#666"),
      (e.VeryLightGray = "#e5e5e5");
  })(x || (x = {})),
    (function (e) {
      (e.Custom = "custom"), (e.Dark = "dark"), (e.Light = "light");
    })(w || (w = {})),
    (function (e) {
      (e.BottomCenter = "bottom_center"),
        (e.BottomFullWidth = "bottom_full_width"),
        (e.BottomLeft = "bottom_left"),
        (e.BottomRight = "bottom_right"),
        (e.Center = "center");
    })(P || (P = {}));
  var E = function (e) {
      return "\n    border: none;\n    color: ".concat(
        e.fontColor,
        ";\n    background: transparent;\n  ",
      );
    },
    O = function (e) {
      return "\n    border: 1px solid "
        .concat(e.button.borderColor, ";\n    color: ")
        .concat(e.button.fontColor, ";\n    background: ")
        .concat(e.button.backgroundColor, ";\n  ");
    };
  function A(e, n, t, o) {
    void 0 === n && (n = "0,0,100,100"),
      void 0 === t && (t = "0,0,0,100"),
      void 0 === o && (o = "0,0,100,100");
    var r = e.split(","),
      a = r[0],
      i = r[1],
      c = r[2],
      l = r[3],
      s = n.split(","),
      d = s[0],
      u = s[1],
      p = s[2],
      f = s[3],
      h = t.split(","),
      m = h[0],
      y = h[1],
      g = h[2],
      b = h[3],
      v = o.split(","),
      C = v[0],
      _ = v[1],
      x = v[2],
      w = v[3],
      P = {
        hue: Number(a),
        saturation: Number(i),
        lightness: Number(c),
        alpha: Number(l),
      },
      B = {
        hue: Number(d),
        saturation: Number(u),
        lightness: Number(p),
        alpha: Number(f),
      },
      I = {
        hue: Number(m),
        saturation: Number(y),
        lightness: Number(g),
        alpha: Number(b),
      },
      E = {
        hue: Number(C),
        saturation: Number(_),
        lightness: Number(x),
        alpha: Number(w),
      },
      O = {
        hue: P.hue,
        saturation: P.saturation,
        lightness: P.lightness,
        alpha: P.alpha - 10,
      },
      A = {
        hue: B.hue,
        saturation: B.saturation,
        lightness: B.lightness < 50 ? B.lightness + 14 : B.lightness - 12,
        alpha: B.alpha,
      },
      D = {
        hue: 201,
        saturation: B.lightness < 50 ? 60 : 90,
        lightness: B.lightness < 50 ? 60 : 80,
        alpha: B.lightness < 50 ? 80 : 100,
      };
    return {
      font: M(P),
      fontSubdued: M(O),
      buttonFont: M(I),
      buttonBackground: M(E),
      background: M(B),
      divider: M(A),
      focused: M(D),
    };
  }
  function M(e) {
    return "hsl("
      .concat(e.hue, "deg, ")
      .concat(e.saturation, "%, ")
      .concat(e.lightness, "%, ")
      .concat(e.alpha, "%)");
  }
  function D(e, n, t, o, r) {
    var a = "0,0,0,100",
      i = "0,0,100,100",
      c = A("0,0,12,100", "0,0,100,100", "0,0,12,100", "0,0,100,100"),
      l = A("0,0,100,87", "0,0,12,100", "0,0,100,87", "0,0,12,100"),
      s = A(
        null != n ? n : a,
        null != t ? t : i,
        null != o ? o : a,
        null != r ? r : i,
      ),
      d = (function () {
        switch (e) {
          case w.Light:
            return c;
          case w.Dark:
            return l;
          case w.Custom:
            return s;
          default:
            return c;
        }
      })();
    return {
      backgroundColor: d.background,
      fontColor: d.font,
      fontSubduedColor: d.fontSubdued,
      sectionDivider: d.divider,
      iconColor: d.font,
      focused: d.focused,
      button: {
        borderColor: d.buttonFont,
        backgroundColor: d.buttonBackground,
        fontColor: d.buttonFont,
      },
      primaryButton: {
        borderColor: d.buttonBackground,
        backgroundColor: d.buttonFont,
        fontColor: d.buttonBackground,
      },
    };
  }
  function k(e, n) {
    void 0 === n && (n = !1);
    var t = D(
        e.theme,
        e.themeColorHslFont,
        e.themeColorHslBackground,
        e.themeColorHslButtonFont,
        e.themeColorHslButtonBackground,
      ),
      o = (function (e, n) {
        var t = Boolean(e);
        return n
          ? "display: none;"
          : t
          ? "\n      z-index: 2000001;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.6);\n    "
          : "display: none;";
      })(y.Yes, n);
    return "\n    ."
      .concat(p.WrapperClass, " {\n      position: relative;\n    }\n    .")
      .concat(
        p.WrapperClass,
        ':after {\n      content: "";\n      display: block;\n      clear: both;\n    }\n\n    .',
      )
      .concat(
        p.DialogClass,
        " {\n      box-shadow: 0 5px 10px rgb(63 63 68 / 50%);\n      position: ",
      )
      .concat(
        n ? "static" : "fixed",
        ";\n      z-index: 2000002;\n      opacity: 1;\n      background-color: ",
      )
      .concat(t.backgroundColor, ";\n      ")
      .concat(
        n ? "" : "max-height: 80%;",
        "\n      overflow-y: auto;\n      top: ",
      )
      .concat(n ? "auto" : "50%", ";\n      transform: ")
      .concat(
        n ? "none" : "translate(0, -50%)",
        ";\n      min-width: 280px;\n      border-radius: 3px;\n      display: flex;\n      flex-direction: column;\n      left: ",
      )
      .concat(n ? "auto" : "25%", ";\n      width: ")
      .concat(
        n ? "100%" : "50%",
        ";\n      text-align: left;\n    }\n    @media only screen and (max-width: 1900px) {\n      .",
      )
      .concat(p.DialogClass, " {\n        left: ")
      .concat(n ? "auto" : "20%", ";\n        width: ")
      .concat(
        n ? "auto" : "60%",
        ";\n      }\n    }\n    @media only screen and (max-width: 1600px) {\n      .",
      )
      .concat(p.DialogClass, " {\n        left: ")
      .concat(n ? "auto" : "15%", ";\n        width: ")
      .concat(
        n ? "auto" : "70%",
        ";\n      }\n    }\n    @media only screen and (max-width: 1350px) {\n      .",
      )
      .concat(p.DialogClass, " {\n        left: ")
      .concat(n ? "auto" : "5%", ";\n        width: ")
      .concat(n ? "auto" : "90%", ";\n      }\n    }\n\n    .")
      .concat(p.OverlayClass, " {\n      ")
      .concat(o, "\n    }\n\n    /* Header */\n\n    .")
      .concat(
        p.DialogClass,
        " header {\n      display: flex;\n      flex-direction: ",
      )
      .concat(
        n ? "column" : "row",
        ";\n      justify-content: space-between;\n      align-items: center;\n      padding: 32px 32px 20px 32px;\n      border-bottom: 1px solid ",
      )
      .concat(
        t.sectionDivider,
        ";\n      position: relative;\n      background: transparent;\n    }\n\n    @media only screen and (max-width: 1200px) {\n      .",
      )
      .concat(
        p.DialogClass,
        " header {\n        flex-direction: column;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      .",
      )
      .concat(
        p.DialogClass,
        " header {\n        padding: 15px 20px 10px 20px;\n      }\n    }\n    .",
      )
      .concat(p.DialogClass, " header h2 {\n      color: ")
      .concat(t.fontColor, ";\n      font-family: inherit;\n      margin: ")
      .concat(
        n ? "0 0 .8em 0" : "0 0 0 0",
        ";\n      padding: 0 20px 0 0 !important;\n      font-weight: 600;\n      font-size: 130%;\n      line-height: 1.2;\n      width: 100%;\n      text-align: left;\n      word-break: normal;\n    }\n    @media only screen and (max-width: 1200px) {\n      .",
      )
      .concat(
        p.DialogClass,
        " header h2 {\n        margin: 0 0 .8em 0;\n        padding: 0 !important;\n        text-align: ",
      )
      .concat(
        n ? "left" : "center",
        ";\n      }\n    }\n    @media only screen and (max-width: 750px) {\n      .",
      )
      .concat(
        p.DialogClass,
        " header h2 {\n        text-align: left;\n        padding: 0 25px 0 0 !important;\n      }\n    }\n\n    .",
      )
      .concat(p.HeaderCloseClass, " {\n      position: absolute;\n      top: ")
      .concat(n ? "30px" : "40px", ";\n      right: ")
      .concat(
        n ? "30px" : "35px",
        ";\n      width: 24px;\n      height: 24px;\n      padding: 0;\n      margin: 0;\n      background: transparent;\n      border: none;\n      outline: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      align-content: center;\n      border-radius: 50%;\n      min-width: 24px;\n    }\n\n    .",
      )
      .concat(
        p.HeaderCloseClass,
        " svg {\n      height: 12px;\n      width: 12px;\n    }\n\n    @media only screen and (max-width: 1200px) {\n      .",
      )
      .concat(
        p.HeaderCloseClass,
        " {\n        top: 20px;\n        right: 20px;\n      }\n    }\n    @media only screen and (max-width: 750px) {\n      .",
      )
      .concat(
        p.HeaderCloseClass,
        " {\n        top: 30px;\n        right: 30px;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      .",
      )
      .concat(
        p.HeaderCloseClass,
        " {\n        top: 15px;\n        right: 15px;\n      }\n    }\n    .",
      )
      .concat(
        p.HeaderCloseClass,
        ":hover {\n      cursor: pointer;\n    }\n    .",
      )
      .concat(
        p.HeaderCloseClass,
        ":focus {\n      outline: none;\n      box-shadow: 0 0 0 3px ",
      )
      .concat(t.focused, ";\n    }\n    .")
      .concat(p.HeaderCloseClass, " svg path {\n      fill: ")
      .concat(t.fontColor, ";\n    }\n    .")
      .concat(p.HeaderCloseClass, ":disabled svg path {\n      fill: ")
      .concat(t.sectionDivider, ";\n    }\n\n    .")
      .concat(
        p.HeaderActionsClass,
        " {\n      margin: 0;\n      display: flex;\n      justify-content: space-around;\n      flex-direction: ",
      )
      .concat(n ? "column;" : "row", ";\n      padding: ")
      .concat(n ? "0" : "0 50px 0 0", ";\n      width: ")
      .concat(
        n ? "100%" : "auto",
        ";\n    }\n\n    @media only screen and (max-width: 750px) {\n      .",
      )
      .concat(
        p.HeaderActionsClass,
        " {\n        flex-direction: column;\n        width: 100%;\n      }\n    }\n    @media only screen and (max-width: 1200px) {\n      .",
      )
      .concat(
        p.HeaderActionsClass,
        " {\n        padding: 0;\n      }\n    }\n    .",
      )
      .concat(
        p.HeaderActionsClass,
        " button {\n      text-decoration: none;\n      font-family: inherit;\n      padding: 8px 25px 10px 25px;\n      margin: 0 20px 0 0;\n      font-size: 110%;\n      background: ",
      )
      .concat(t.button.backgroundColor, ";\n      color: ")
      .concat(t.button.fontColor, ";\n      border: 1px solid ")
      .concat(
        t.button.borderColor,
        ";\n      white-space: nowrap;\n      border-radius: 2px;\n      line-height: 120%;\n      height: unset;\n      ",
      )
      .concat(n ? "width: 100%;" : "", "\n      ")
      .concat(
        n ? "margin-bottom: 15px;" : "",
        "\n    }\n    @media only screen and (max-width: 750px) {\n      .",
      )
      .concat(
        p.HeaderActionsClass,
        " button {\n        width: 100%;\n        margin-bottom: 15px;\n      }\n    }\n    .",
      )
      .concat(p.HeaderActionsClass, " button.primary {\n      background: ")
      .concat(t.primaryButton.backgroundColor, ";\n      color: ")
      .concat(t.primaryButton.fontColor, ";\n      border: 1px solid ")
      .concat(t.primaryButton.borderColor, ";\n    }\n    .")
      .concat(
        p.HeaderActionsClass,
        " button:last-child {\n      margin-right: 0;\n    }\n    .",
      )
      .concat(
        p.HeaderActionsClass,
        " button:hover {\n      cursor: pointer;\n    }\n    .",
      )
      .concat(
        p.HeaderActionsClass,
        " button:focus {\n      outline: none;\n      box-shadow: 0 0 0 4px ",
      )
      .concat(t.focused, ";\n    }\n\n    .")
      .concat(
        p.DialogScrollableClass,
        " {\n      overflow-y: scroll;\n      position: relative;\n    }\n\n    .",
      )
      .concat(
        p.DialogScrollableClass,
        "::-webkit-scrollbar {\n      width: 0px;\n      background: transparent;\n    }\n\n    /* Intro */\n\n    .",
      )
      .concat(p.IntroClass, " h3 {\n      color: ")
      .concat(
        t.fontColor,
        ";\n      font-family: inherit;\n      margin: 0 0 15px 0;\n      padding: 0 !important;\n      font-weight: 600;\n      line-height: 1.2;\n      text-align: left;\n    }\n    .",
      )
      .concat(p.IntroClass, " p {\n      color: ")
      .concat(
        t.fontSubduedColor,
        ";\n      font-family: inherit;\n      margin: 0;\n      padding: 0;\n    }\n    .",
      )
      .concat(
        p.IntroClass,
        " ul {\n      margin: 0;\n      padding: 0;\n    }\n    .",
      )
      .concat(
        p.IntroClass,
        " ul li {\n      margin: 0 0 0.5em 1.7em;\n      padding: 0;\n      line-height: 1.2;\n    }\n    .",
      )
      .concat(
        p.IntroMainClass,
        " {\n      padding: 20px 32px 0 32px;\n      line-height: 1.5;\n    }\n    @media only screen and (max-width: 400px) {\n      .",
      )
      .concat(
        p.IntroMainClass,
        " {\n        padding: 20px 20px 0 20px;\n      }\n    }\n    .",
      )
      .concat(
        p.IntroMainClass,
        " p {\n      padding-bottom: 20px;\n    }\n    .",
      )
      .concat(p.IntroMainClass, " h3 {\n      font-size: 110%;\n    }\n    .")
      .concat(
        p.IntroMainClass,
        " p {\n      font-size: 105%;\n      margin: 0;\n      padding: 0;\n    }\n    .",
      )
      .concat(
        p.IntroExplainWrapperClass,
        " {\n      display: flex;\n      flex-direction: ",
      )
      .concat(
        n ? "column" : "row",
        ";\n      justify-content: center;\n      margin: 0;\n      padding: 20px 32px 0 32px;\n      color: ",
      )
      .concat(
        t.fontSubduedColor,
        ";\n    }\n    @media only screen and (max-width: 700px) {\n      .",
      )
      .concat(
        p.IntroExplainWrapperClass,
        " {\n        flex-direction: column;\n        padding-bottom: 0;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      .",
      )
      .concat(
        p.IntroExplainWrapperClass,
        " {\n        padding: 20px 20px 0 20px;\n      }\n    }\n    .",
      )
      .concat(
        p.IntroExplainAcceptClass,
        " {\n      width: 100%;\n      padding: 0 ",
      )
      .concat(n ? "0" : "40px", " 0 0;\n    }\n    .")
      .concat(
        p.IntroExplainAcceptClass,
        " li {\n      list-style-type: disc;\n    }\n    @media only screen and (max-width: 700px) {\n      .",
      )
      .concat(
        p.IntroExplainAcceptClass,
        " {\n        width: 100%;\n        padding-right: 0;\n      }\n    }\n    .",
      )
      .concat(
        p.IntroExplainAcceptClass,
        " h3 {\n      font-size: 110%;\n    }\n\n    /* Options */\n\n    .",
      )
      .concat(
        p.OptionWrapperClass,
        " {\n      padding: 0 32px 32px 32px;\n      color: ",
      )
      .concat(
        t.fontColor,
        ";\n    }\n    @media only screen and (max-width: 400px) {\n      .",
      )
      .concat(
        p.OptionWrapperClass,
        " {\n        padding: 0 20px 15px 20px;\n      }\n    }\n\n    .",
      )
      .concat(
        p.OptionClass,
        " {\n      margin: 0;\n      font-size: 100%;\n      line-height: 1.1;\n      padding: 20px 0 0 0;\n    }\n    .",
      )
      .concat(
        p.OptionClass,
        ":first-child {\n      padding: 25px 0 0 0;\n      margin: 20px 0 0 0;\n      border-top: 1px solid ",
      )
      .concat(t.sectionDivider, ";\n    }\n    .")
      .concat(
        p.OptionClass,
        " label {\n      display: flex;\n      gap: 20px;\n      color: ",
      )
      .concat(
        t.fontColor,
        ";\n      cursor: pointer;\n      font-family: inherit;\n      margin: 0 0 5px 0;\n      padding: 0;\n      font-weight: 600;\n      font-size: 110%;\n      line-height: 1.2;\n    }\n    .",
      )
      .concat(
        p.OptionClass,
        " label input {\n      position: absolute;\n      clip: rect(1px, 1px, 1px, 1px);\n      padding: 0;\n      border: 0;\n      height: 1px;\n      width: 1px;\n      overflow: hidden;\n    }\n    .",
      )
      .concat(
        p.OptionClass,
        " label span {\n      order: -1;\n      display: inline-block;\n      background-color: ",
      )
      .concat(
        t.backgroundColor,
        ";\n      width: 24px;\n      height: 24px;\n    }\n    .",
      )
      .concat(p.OptionClass, " label span svg {\n      background-color: ")
      .concat(t.backgroundColor, ";\n      border-radius: 3px;\n    }\n    .")
      .concat(
        p.OptionClass,
        ' label input[aria-readonly="true"] ~ span svg {\n      opacity: 0.2;\n      cursor: not-allowed;\n    }\n    .',
      )
      .concat(
        p.OptionClass,
        " label input:focus ~ span {\n      background-color: ",
      )
      .concat(t.focused, ";\n    }\n    .")
      .concat(
        p.OptionClass,
        " label input:focus ~ span svg {\n      outline: none;\n      border-radius: 5px;\n      box-shadow: 0 0 0 4px ",
      )
      .concat(t.focused, ";\n    }\n    .")
      .concat(p.OptionClass, " p {\n      line-height: ")
      .concat(n ? "1.4" : "1.3", ";\n      font-size: 100%;\n      color: ")
      .concat(
        t.fontSubduedColor,
        ";\n      margin: 0;\n      padding: 0 0 0 45px;\n    }\n    @media only screen and (max-width: 700px) {\n      .",
      )
      .concat(
        p.OptionClass,
        " p {\n        width: 100%;\n        line-height: 1.4;\n      }\n    }\n    ​",
      );
  }
  function W(e, n, t) {
    void 0 === n && (n = !1);
    var o = e.granularConsentEnabled,
      r = D(
        e.theme,
        e.themeColorHslFont,
        e.themeColorHslBackground,
        e.themeColorHslButtonFont,
        e.themeColorHslButtonBackground,
      ),
      a = I(
        null == t ? void 0 : t.bannerPlacement,
        null == t ? void 0 : t.buttonPlacement,
        r,
        n,
        o,
      ),
      i = (function (e, n, t) {
        if (n === w.Custom)
          return { accept: O(t), decline: O(t), manage: E(t) };
        var o = n === w.Dark,
          r = "\n    background: "
            .concat(o ? x.White : x.Black, ";\n    color: ")
            .concat(o ? x.Black : x.White, ";\n  "),
          a = "\n    background: "
            .concat(o ? x.Black : x.White, ";\n    color: ")
            .concat(o ? x.White : x.Black, ";\n  "),
          i =
            "\n    background: transparent;\n    border: none;\n    color: ".concat(
              o ? x.White : x.Black,
              ";\n  ",
            );
        switch (e) {
          case m.Fill:
            return { accept: r, decline: r, manage: i };
          case m.Outline:
            return { accept: a, decline: a, manage: i };
          case m.Weighted:
          default:
            return { accept: r, decline: a, manage: i };
        }
      })(null == t ? void 0 : t.buttonWeight, e.theme, r);
    return "\n    ."
      .concat(u.DialogClass, " h2 {\n      color: ")
      .concat(
        r.fontColor,
        ";\n      font-family: inherit;\n      font-size: 120%;\n      margin: 0 0 .5em 0;\n      padding: 0;\n      font-weight: bold;\n    }\n    .",
      )
      .concat(u.DialogClass, " p {\n      color: ")
      .concat(
        r.fontColor,
        ";\n      font-family: inherit;\n      line-height: 1.3;\n      margin: 0;\n      padding: 0;\n    }\n    .",
      )
      .concat(u.DialogClass, " a {\n      color: ")
      .concat(r.fontColor, ";\n      text-decoration: underline;\n    }\n    .")
      .concat(
        u.DialogClass,
        " button {\n      border: none;\n      text-decoration: none;\n      font-family: inherit;\n      padding: 8px 25px;\n      margin: 15px 20px 0 0;\n      font-size: 100%;\n      flex-basis: 50%;\n      border-radius: 2px;\n      line-height: 120%;\n      height: unset;\n      text-align: center;\n    }\n    .",
      )
      .concat(
        u.DialogClass,
        " button:focus {\n      outline: none;\n      box-shadow: 0 0 0 4px ",
      )
      .concat(r.focused, ";\n    }\n    .")
      .concat(
        u.DialogClass,
        " button:hover {\n      cursor: pointer;\n    }\n    .",
      )
      .concat(u.DialogClass, " button.")
      .concat(u.ButtonAcceptClass, " {\n      border: 1px solid ")
      .concat(r.button.borderColor, ";\n      ")
      .concat(i.accept, "\n    }\n    .")
      .concat(u.DialogClass, " button.")
      .concat(
        u.ButtonManagePrefsClass,
        " {\n      text-decoration: underline;\n      ",
      )
      .concat(i.manage, "\n    }\n    .")
      .concat(u.DialogClass, " button.")
      .concat(
        u.ButtonManagePrefsClass,
        ":focus {\n      box-shadow: none;\n    }\n    .",
      )
      .concat(u.DialogClass, " button.")
      .concat(
        u.ButtonManagePrefsClass,
        ":focus span {\n      outline: 2px solid ",
      )
      .concat(r.focused, ";\n    }\n    .")
      .concat(u.DialogClass, " button.")
      .concat(u.ButtonDeclineClass, " {\n      border: 1px solid ")
      .concat(r.button.borderColor, ";\n      ")
      .concat(i.decline, "\n    }\n\n    .")
      .concat(u.BodyClass, " p a:focus {\n      outline: 2px solid ")
      .concat(r.focused, ";\n      box-shadow: none;\n    }\n\n    ")
      .concat(a, "\n  ​");
  }
  var S = (function () {
      function e() {}
      return (
        (e.getServerData = function (e) {
          var n = e.shopName;
          return o(this, void 0, void 0, function () {
            var e, t, o, a, i, c, l;
            return r(this, function (r) {
              return (
                (e = window.Shopify.shop),
                (t = "https://privacy-banner.shopifyapps.com"),
                (o = this.shopCanExperiment()),
                (a = this.canonicalShopId()),
                (i = o && null != a ? "&experiment_shop_id=".concat(a) : ""),
                (c = n
                  ? "&experiment_shop_name=".concat(encodeURIComponent(n))
                  : ""),
                (l = this.SEND_EXPERIMENT_DATA
                  ? ""
                      .concat(t, "/customization?shopify_domain=")
                      .concat(e)
                      .concat(i)
                      .concat(c)
                  : "".concat(t, "/customization?shopify_domain=").concat(e)),
                [2, this.getServerDataWithBackoff(l)]
              );
            });
          });
        }),
        (e.canonicalShopId = function () {
          var e, n, t, o;
          return null ===
            (o =
              null ===
                (t =
                  null ===
                    (n =
                      null === (e = window.trekkie) || void 0 === e
                        ? void 0
                        : e.config) || void 0 === n
                    ? void 0
                    : n.Trekkie) || void 0 === t
                ? void 0
                : t.defaultAttributes) || void 0 === o
            ? void 0
            : o.shopId;
        }),
        (e.shopCanExperiment = function () {
          var e,
            n,
            t = C("_tracking_consent");
          try {
            n = JSON.parse(decodeURIComponent(t));
          } catch (e) {
            return !1;
          }
          var o = null !== (e = n.lim) && void 0 !== e ? e : [];
          return o.includes("GDPR") && !o.includes("GDPR_BLOCK_ALL");
        }),
        (e.getServerDataWithBackoff = function (e, n) {
          return (
            void 0 === n && (n = 1),
            o(this, void 0, void 0, function () {
              var t, o, a;
              return r(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (t = "".concat(e, "&request_attempt=").concat(n)),
                      [4, fetch(t)]
                    );
                  case 1:
                    return [4, (o = r.sent()).json()];
                  case 2:
                    return (
                      (a = r.sent()),
                      200 === o.status
                        ? [2, a]
                        : n < this.MAX_RETRIES
                        ? [4, this.wait()]
                        : [3, 4]
                    );
                  case 3:
                    return (
                      r.sent(), [2, this.getServerDataWithBackoff(e, n + 1)]
                    );
                  case 4:
                    throw new Error("Could not reach the server");
                }
              });
            })
          );
        }),
        (e.wait = function () {
          var e = this;
          return new Promise(function (n) {
            return setTimeout(n, e.TIME_BETWEEN_REQUESTS);
          });
        }),
        (e.SEND_EXPERIMENT_DATA = !1),
        (e.MAX_RETRIES = 6),
        (e.TIME_BETWEEN_REQUESTS = 5e3),
        e
      );
    })(),
    N = function () {
      return !window.location.pathname.match(
        /^(\/[a-zA-Z]{2}(-[a-zA-Z]{2})?)?\/(cart|policies\/privacy-policy|password)$/,
      );
    },
    T = function () {
      return "1" === v("preview_privacy_banner");
    };
  function F(e) {
    if (e.__esModule) return e;
    var n = e.default;
    if ("function" == typeof n) {
      var t = function e() {
        return this instanceof e
          ? Reflect.construct(n, arguments, this.constructor)
          : n.apply(this, arguments);
      };
      t.prototype = n.prototype;
    } else t = {};
    return (
      Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.keys(e).forEach(function (n) {
        var o = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(
          t,
          n,
          o.get
            ? o
            : {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              },
        );
      }),
      t
    );
  }
  var H = {},
    j = {},
    R = F(g),
    L = {};
  Object.defineProperty(L, "__esModule", { value: !0 }),
    (L.extractDomain =
      L.PRODUCTION_CANADA_ENDPOINT =
      L.PRODUCE_ENDPOINT =
      L.PRODUCE_BATCH_ENDPOINT =
      L.PRODUCTION_DOMAIN =
      L.DEVELOPMENT_DOMAIN =
        void 0),
    (L.DEVELOPMENT_DOMAIN = "http://localhost:8082"),
    (L.PRODUCTION_DOMAIN = "https://monorail-edge.shopifysvc.com"),
    (L.PRODUCE_BATCH_ENDPOINT = "/unstable/produce_batch"),
    (L.PRODUCE_ENDPOINT = "/v1/produce"),
    (L.PRODUCTION_CANADA_ENDPOINT =
      "https://monorail-edge-ca.shopifycloud.com/v1/produce"),
    (L.extractDomain = function (e) {
      return "https://".concat(new URL(e).hostname);
    });
  var U = {},
    V = {};
  Object.defineProperty(V, "__esModule", { value: !0 }),
    (V.isCompositeMonorailEvent = void 0),
    (V.isCompositeMonorailEvent = function (e) {
      return void 0 !== e.schemaId;
    }),
    Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.ProducerMiddleware = void 0);
  var z = V,
    G = (function () {
      function e(e) {
        this.producer = e;
      }
      return (
        (e.prototype.do = function (e, n) {
          return (0, z.isCompositeMonorailEvent)(e)
            ? this.producer.produce(e)
            : this.producer.produceBatch(e);
        }),
        e
      );
    })();
  U.ProducerMiddleware = G;
  var q,
    Y = {},
    K = {},
    X = {},
    J = {};
  function Z() {
    if (q) return J;
    let e;
    (q = 1),
      Object.defineProperty(J, "__esModule", { value: !0 }),
      (J.default = function () {
        if (
          !e &&
          ((e =
            "undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)),
          !e)
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
          );
        return e(n);
      });
    const n = new Uint8Array(16);
    return J;
  }
  var Q,
    $,
    ee,
    ne,
    te = {},
    oe = {},
    re = {};
  function ae() {
    if ($) return oe;
    ($ = 1),
      Object.defineProperty(oe, "__esModule", { value: !0 }),
      (oe.default = void 0);
    var e,
      n =
        (Q ||
          ((Q = 1),
          Object.defineProperty(re, "__esModule", { value: !0 }),
          (re.default = void 0),
          (re.default =
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i)),
        (e = re) && e.__esModule ? e : { default: e });
    var t = function (e) {
      return "string" == typeof e && n.default.test(e);
    };
    return (oe.default = t), oe;
  }
  function ie() {
    if (ee) return te;
    (ee = 1),
      Object.defineProperty(te, "__esModule", { value: !0 }),
      (te.default = void 0),
      (te.unsafeStringify = o);
    var e,
      n = (e = ae()) && e.__esModule ? e : { default: e };
    const t = [];
    for (let e = 0; e < 256; ++e) t.push((e + 256).toString(16).slice(1));
    function o(e, n = 0) {
      return (
        t[e[n + 0]] +
        t[e[n + 1]] +
        t[e[n + 2]] +
        t[e[n + 3]] +
        "-" +
        t[e[n + 4]] +
        t[e[n + 5]] +
        "-" +
        t[e[n + 6]] +
        t[e[n + 7]] +
        "-" +
        t[e[n + 8]] +
        t[e[n + 9]] +
        "-" +
        t[e[n + 10]] +
        t[e[n + 11]] +
        t[e[n + 12]] +
        t[e[n + 13]] +
        t[e[n + 14]] +
        t[e[n + 15]]
      ).toLowerCase();
    }
    var r = function (e, t = 0) {
      const r = o(e, t);
      if (!(0, n.default)(r)) throw TypeError("Stringified UUID is invalid");
      return r;
    };
    return (te.default = r), te;
  }
  var ce,
    le,
    se = {},
    de = {},
    ue = {};
  function pe() {
    if (ce) return ue;
    (ce = 1),
      Object.defineProperty(ue, "__esModule", { value: !0 }),
      (ue.default = void 0);
    var e,
      n = (e = ae()) && e.__esModule ? e : { default: e };
    var t = function (e) {
      if (!(0, n.default)(e)) throw TypeError("Invalid UUID");
      let t;
      const o = new Uint8Array(16);
      return (
        (o[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
        (o[1] = (t >>> 16) & 255),
        (o[2] = (t >>> 8) & 255),
        (o[3] = 255 & t),
        (o[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
        (o[5] = 255 & t),
        (o[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
        (o[7] = 255 & t),
        (o[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
        (o[9] = 255 & t),
        (o[10] = ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
        (o[11] = (t / 4294967296) & 255),
        (o[12] = (t >>> 24) & 255),
        (o[13] = (t >>> 16) & 255),
        (o[14] = (t >>> 8) & 255),
        (o[15] = 255 & t),
        o
      );
    };
    return (ue.default = t), ue;
  }
  function fe() {
    if (le) return de;
    (le = 1),
      Object.defineProperty(de, "__esModule", { value: !0 }),
      (de.URL = de.DNS = void 0),
      (de.default = function (e, a, i) {
        function c(e, o, r, c) {
          var l;
          if (
            ("string" == typeof e &&
              (e = (function (e) {
                e = unescape(encodeURIComponent(e));
                const n = [];
                for (let t = 0; t < e.length; ++t) n.push(e.charCodeAt(t));
                return n;
              })(e)),
            "string" == typeof o && (o = (0, t.default)(o)),
            16 !== (null === (l = o) || void 0 === l ? void 0 : l.length))
          )
            throw TypeError(
              "Namespace must be array-like (16 iterable integer values, 0-255)",
            );
          let s = new Uint8Array(16 + e.length);
          if (
            (s.set(o),
            s.set(e, o.length),
            (s = i(s)),
            (s[6] = (15 & s[6]) | a),
            (s[8] = (63 & s[8]) | 128),
            r)
          ) {
            c = c || 0;
            for (let e = 0; e < 16; ++e) r[c + e] = s[e];
            return r;
          }
          return (0, n.unsafeStringify)(s);
        }
        try {
          c.name = e;
        } catch (e) {}
        return (c.DNS = o), (c.URL = r), c;
      });
    var e,
      n = ie(),
      t = (e = pe()) && e.__esModule ? e : { default: e };
    const o = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    de.DNS = o;
    const r = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    return (de.URL = r), de;
  }
  var he,
    me,
    ye = {};
  function ge() {
    if (he) return ye;
    function e(e) {
      return 14 + (((e + 64) >>> 9) << 4) + 1;
    }
    function n(e, n) {
      const t = (65535 & e) + (65535 & n);
      return (((e >> 16) + (n >> 16) + (t >> 16)) << 16) | (65535 & t);
    }
    function t(e, t, o, r, a, i) {
      return n(((c = n(n(t, e), n(r, i))) << (l = a)) | (c >>> (32 - l)), o);
      var c, l;
    }
    function o(e, n, o, r, a, i, c) {
      return t((n & o) | (~n & r), e, n, a, i, c);
    }
    function r(e, n, o, r, a, i, c) {
      return t((n & r) | (o & ~r), e, n, a, i, c);
    }
    function a(e, n, o, r, a, i, c) {
      return t(n ^ o ^ r, e, n, a, i, c);
    }
    function i(e, n, o, r, a, i, c) {
      return t(o ^ (n | ~r), e, n, a, i, c);
    }
    (he = 1),
      Object.defineProperty(ye, "__esModule", { value: !0 }),
      (ye.default = void 0);
    var c = function (t) {
      if ("string" == typeof t) {
        const e = unescape(encodeURIComponent(t));
        t = new Uint8Array(e.length);
        for (let n = 0; n < e.length; ++n) t[n] = e.charCodeAt(n);
      }
      return (function (e) {
        const n = [],
          t = 32 * e.length,
          o = "0123456789abcdef";
        for (let r = 0; r < t; r += 8) {
          const t = (e[r >> 5] >>> r % 32) & 255,
            a = parseInt(o.charAt((t >>> 4) & 15) + o.charAt(15 & t), 16);
          n.push(a);
        }
        return n;
      })(
        (function (t, c) {
          (t[c >> 5] |= 128 << c % 32), (t[e(c) - 1] = c);
          let l = 1732584193,
            s = -271733879,
            d = -1732584194,
            u = 271733878;
          for (let e = 0; e < t.length; e += 16) {
            const c = l,
              p = s,
              f = d,
              h = u;
            (l = o(l, s, d, u, t[e], 7, -680876936)),
              (u = o(u, l, s, d, t[e + 1], 12, -389564586)),
              (d = o(d, u, l, s, t[e + 2], 17, 606105819)),
              (s = o(s, d, u, l, t[e + 3], 22, -1044525330)),
              (l = o(l, s, d, u, t[e + 4], 7, -176418897)),
              (u = o(u, l, s, d, t[e + 5], 12, 1200080426)),
              (d = o(d, u, l, s, t[e + 6], 17, -1473231341)),
              (s = o(s, d, u, l, t[e + 7], 22, -45705983)),
              (l = o(l, s, d, u, t[e + 8], 7, 1770035416)),
              (u = o(u, l, s, d, t[e + 9], 12, -1958414417)),
              (d = o(d, u, l, s, t[e + 10], 17, -42063)),
              (s = o(s, d, u, l, t[e + 11], 22, -1990404162)),
              (l = o(l, s, d, u, t[e + 12], 7, 1804603682)),
              (u = o(u, l, s, d, t[e + 13], 12, -40341101)),
              (d = o(d, u, l, s, t[e + 14], 17, -1502002290)),
              (s = o(s, d, u, l, t[e + 15], 22, 1236535329)),
              (l = r(l, s, d, u, t[e + 1], 5, -165796510)),
              (u = r(u, l, s, d, t[e + 6], 9, -1069501632)),
              (d = r(d, u, l, s, t[e + 11], 14, 643717713)),
              (s = r(s, d, u, l, t[e], 20, -373897302)),
              (l = r(l, s, d, u, t[e + 5], 5, -701558691)),
              (u = r(u, l, s, d, t[e + 10], 9, 38016083)),
              (d = r(d, u, l, s, t[e + 15], 14, -660478335)),
              (s = r(s, d, u, l, t[e + 4], 20, -405537848)),
              (l = r(l, s, d, u, t[e + 9], 5, 568446438)),
              (u = r(u, l, s, d, t[e + 14], 9, -1019803690)),
              (d = r(d, u, l, s, t[e + 3], 14, -187363961)),
              (s = r(s, d, u, l, t[e + 8], 20, 1163531501)),
              (l = r(l, s, d, u, t[e + 13], 5, -1444681467)),
              (u = r(u, l, s, d, t[e + 2], 9, -51403784)),
              (d = r(d, u, l, s, t[e + 7], 14, 1735328473)),
              (s = r(s, d, u, l, t[e + 12], 20, -1926607734)),
              (l = a(l, s, d, u, t[e + 5], 4, -378558)),
              (u = a(u, l, s, d, t[e + 8], 11, -2022574463)),
              (d = a(d, u, l, s, t[e + 11], 16, 1839030562)),
              (s = a(s, d, u, l, t[e + 14], 23, -35309556)),
              (l = a(l, s, d, u, t[e + 1], 4, -1530992060)),
              (u = a(u, l, s, d, t[e + 4], 11, 1272893353)),
              (d = a(d, u, l, s, t[e + 7], 16, -155497632)),
              (s = a(s, d, u, l, t[e + 10], 23, -1094730640)),
              (l = a(l, s, d, u, t[e + 13], 4, 681279174)),
              (u = a(u, l, s, d, t[e], 11, -358537222)),
              (d = a(d, u, l, s, t[e + 3], 16, -722521979)),
              (s = a(s, d, u, l, t[e + 6], 23, 76029189)),
              (l = a(l, s, d, u, t[e + 9], 4, -640364487)),
              (u = a(u, l, s, d, t[e + 12], 11, -421815835)),
              (d = a(d, u, l, s, t[e + 15], 16, 530742520)),
              (s = a(s, d, u, l, t[e + 2], 23, -995338651)),
              (l = i(l, s, d, u, t[e], 6, -198630844)),
              (u = i(u, l, s, d, t[e + 7], 10, 1126891415)),
              (d = i(d, u, l, s, t[e + 14], 15, -1416354905)),
              (s = i(s, d, u, l, t[e + 5], 21, -57434055)),
              (l = i(l, s, d, u, t[e + 12], 6, 1700485571)),
              (u = i(u, l, s, d, t[e + 3], 10, -1894986606)),
              (d = i(d, u, l, s, t[e + 10], 15, -1051523)),
              (s = i(s, d, u, l, t[e + 1], 21, -2054922799)),
              (l = i(l, s, d, u, t[e + 8], 6, 1873313359)),
              (u = i(u, l, s, d, t[e + 15], 10, -30611744)),
              (d = i(d, u, l, s, t[e + 6], 15, -1560198380)),
              (s = i(s, d, u, l, t[e + 13], 21, 1309151649)),
              (l = i(l, s, d, u, t[e + 4], 6, -145523070)),
              (u = i(u, l, s, d, t[e + 11], 10, -1120210379)),
              (d = i(d, u, l, s, t[e + 2], 15, 718787259)),
              (s = i(s, d, u, l, t[e + 9], 21, -343485551)),
              (l = n(l, c)),
              (s = n(s, p)),
              (d = n(d, f)),
              (u = n(u, h));
          }
          return [l, s, d, u];
        })(
          (function (n) {
            if (0 === n.length) return [];
            const t = 8 * n.length,
              o = new Uint32Array(e(t));
            for (let e = 0; e < t; e += 8)
              o[e >> 5] |= (255 & n[e / 8]) << e % 32;
            return o;
          })(t),
          8 * t.length,
        ),
      );
    };
    return (ye.default = c), ye;
  }
  var be,
    ve,
    Ce = {},
    _e = {};
  function xe() {
    if (ve) return Ce;
    (ve = 1),
      Object.defineProperty(Ce, "__esModule", { value: !0 }),
      (Ce.default = void 0);
    var e = o(
        (function () {
          if (be) return _e;
          (be = 1),
            Object.defineProperty(_e, "__esModule", { value: !0 }),
            (_e.default = void 0);
          var e = {
            randomUUID:
              "undefined" != typeof crypto &&
              crypto.randomUUID &&
              crypto.randomUUID.bind(crypto),
          };
          return (_e.default = e), _e;
        })(),
      ),
      n = o(Z()),
      t = ie();
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var r = function (o, r, a) {
      if (e.default.randomUUID && !r && !o) return e.default.randomUUID();
      const i = (o = o || {}).random || (o.rng || n.default)();
      if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), r)) {
        a = a || 0;
        for (let e = 0; e < 16; ++e) r[a + e] = i[e];
        return r;
      }
      return (0, t.unsafeStringify)(i);
    };
    return (Ce.default = r), Ce;
  }
  var we,
    Pe,
    Be = {},
    Ie = {};
  function Ee() {
    if (Pe) return Be;
    (Pe = 1),
      Object.defineProperty(Be, "__esModule", { value: !0 }),
      (Be.default = void 0);
    var e = t(fe()),
      n = t(
        (function () {
          if (we) return Ie;
          function e(e, n, t, o) {
            switch (e) {
              case 0:
                return (n & t) ^ (~n & o);
              case 1:
              case 3:
                return n ^ t ^ o;
              case 2:
                return (n & t) ^ (n & o) ^ (t & o);
            }
          }
          function n(e, n) {
            return (e << n) | (e >>> (32 - n));
          }
          (we = 1),
            Object.defineProperty(Ie, "__esModule", { value: !0 }),
            (Ie.default = void 0);
          var t = function (t) {
            const o = [1518500249, 1859775393, 2400959708, 3395469782],
              r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            if ("string" == typeof t) {
              const e = unescape(encodeURIComponent(t));
              t = [];
              for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
            } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
            t.push(128);
            const a = t.length / 4 + 2,
              i = Math.ceil(a / 16),
              c = new Array(i);
            for (let e = 0; e < i; ++e) {
              const n = new Uint32Array(16);
              for (let o = 0; o < 16; ++o)
                n[o] =
                  (t[64 * e + 4 * o] << 24) |
                  (t[64 * e + 4 * o + 1] << 16) |
                  (t[64 * e + 4 * o + 2] << 8) |
                  t[64 * e + 4 * o + 3];
              c[e] = n;
            }
            (c[i - 1][14] = (8 * (t.length - 1)) / Math.pow(2, 32)),
              (c[i - 1][14] = Math.floor(c[i - 1][14])),
              (c[i - 1][15] = (8 * (t.length - 1)) & 4294967295);
            for (let t = 0; t < i; ++t) {
              const a = new Uint32Array(80);
              for (let e = 0; e < 16; ++e) a[e] = c[t][e];
              for (let e = 16; e < 80; ++e)
                a[e] = n(a[e - 3] ^ a[e - 8] ^ a[e - 14] ^ a[e - 16], 1);
              let i = r[0],
                l = r[1],
                s = r[2],
                d = r[3],
                u = r[4];
              for (let t = 0; t < 80; ++t) {
                const r = Math.floor(t / 20),
                  c = (n(i, 5) + e(r, l, s, d) + u + o[r] + a[t]) >>> 0;
                (u = d), (d = s), (s = n(l, 30) >>> 0), (l = i), (i = c);
              }
              (r[0] = (r[0] + i) >>> 0),
                (r[1] = (r[1] + l) >>> 0),
                (r[2] = (r[2] + s) >>> 0),
                (r[3] = (r[3] + d) >>> 0),
                (r[4] = (r[4] + u) >>> 0);
            }
            return [
              (r[0] >> 24) & 255,
              (r[0] >> 16) & 255,
              (r[0] >> 8) & 255,
              255 & r[0],
              (r[1] >> 24) & 255,
              (r[1] >> 16) & 255,
              (r[1] >> 8) & 255,
              255 & r[1],
              (r[2] >> 24) & 255,
              (r[2] >> 16) & 255,
              (r[2] >> 8) & 255,
              255 & r[2],
              (r[3] >> 24) & 255,
              (r[3] >> 16) & 255,
              (r[3] >> 8) & 255,
              255 & r[3],
              (r[4] >> 24) & 255,
              (r[4] >> 16) & 255,
              (r[4] >> 8) & 255,
              255 & r[4],
            ];
          };
          return (Ie.default = t), Ie;
        })(),
      );
    function t(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var o = (0, e.default)("v5", 80, n.default);
    return (Be.default = o), Be;
  }
  var Oe,
    Ae = {};
  var Me,
    De,
    ke = {};
  function We() {
    return (
      De ||
        ((De = 1),
        (function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "NIL", {
              enumerable: !0,
              get: function () {
                return a.default;
              },
            }),
            Object.defineProperty(e, "parse", {
              enumerable: !0,
              get: function () {
                return s.default;
              },
            }),
            Object.defineProperty(e, "stringify", {
              enumerable: !0,
              get: function () {
                return l.default;
              },
            }),
            Object.defineProperty(e, "v1", {
              enumerable: !0,
              get: function () {
                return n.default;
              },
            }),
            Object.defineProperty(e, "v3", {
              enumerable: !0,
              get: function () {
                return t.default;
              },
            }),
            Object.defineProperty(e, "v4", {
              enumerable: !0,
              get: function () {
                return o.default;
              },
            }),
            Object.defineProperty(e, "v5", {
              enumerable: !0,
              get: function () {
                return r.default;
              },
            }),
            Object.defineProperty(e, "validate", {
              enumerable: !0,
              get: function () {
                return c.default;
              },
            }),
            Object.defineProperty(e, "version", {
              enumerable: !0,
              get: function () {
                return i.default;
              },
            });
          var n = d(
              (function () {
                if (ne) return X;
                (ne = 1),
                  Object.defineProperty(X, "__esModule", { value: !0 }),
                  (X.default = void 0);
                var e,
                  n = (e = Z()) && e.__esModule ? e : { default: e },
                  t = ie();
                let o,
                  r,
                  a = 0,
                  i = 0;
                var c = function (e, c, l) {
                  let s = (c && l) || 0;
                  const d = c || new Array(16);
                  let u = (e = e || {}).node || o,
                    p = void 0 !== e.clockseq ? e.clockseq : r;
                  if (null == u || null == p) {
                    const t = e.random || (e.rng || n.default)();
                    null == u &&
                      (u = o = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]),
                      null == p && (p = r = 16383 & ((t[6] << 8) | t[7]));
                  }
                  let f = void 0 !== e.msecs ? e.msecs : Date.now(),
                    h = void 0 !== e.nsecs ? e.nsecs : i + 1;
                  const m = f - a + (h - i) / 1e4;
                  if (
                    (m < 0 && void 0 === e.clockseq && (p = (p + 1) & 16383),
                    (m < 0 || f > a) && void 0 === e.nsecs && (h = 0),
                    h >= 1e4)
                  )
                    throw new Error(
                      "uuid.v1(): Can't create more than 10M uuids/sec",
                    );
                  (a = f), (i = h), (r = p), (f += 122192928e5);
                  const y = (1e4 * (268435455 & f) + h) % 4294967296;
                  (d[s++] = (y >>> 24) & 255),
                    (d[s++] = (y >>> 16) & 255),
                    (d[s++] = (y >>> 8) & 255),
                    (d[s++] = 255 & y);
                  const g = ((f / 4294967296) * 1e4) & 268435455;
                  (d[s++] = (g >>> 8) & 255),
                    (d[s++] = 255 & g),
                    (d[s++] = ((g >>> 24) & 15) | 16),
                    (d[s++] = (g >>> 16) & 255),
                    (d[s++] = (p >>> 8) | 128),
                    (d[s++] = 255 & p);
                  for (let e = 0; e < 6; ++e) d[s + e] = u[e];
                  return c || (0, t.unsafeStringify)(d);
                };
                return (X.default = c), X;
              })(),
            ),
            t = d(
              (function () {
                if (me) return se;
                (me = 1),
                  Object.defineProperty(se, "__esModule", { value: !0 }),
                  (se.default = void 0);
                var e = t(fe()),
                  n = t(ge());
                function t(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                var o = (0, e.default)("v3", 48, n.default);
                return (se.default = o), se;
              })(),
            ),
            o = d(xe()),
            r = d(Ee()),
            a = d(
              (Oe ||
                ((Oe = 1),
                Object.defineProperty(Ae, "__esModule", { value: !0 }),
                (Ae.default = void 0),
                (Ae.default = "00000000-0000-0000-0000-000000000000")),
              Ae),
            ),
            i = d(
              (function () {
                if (Me) return ke;
                (Me = 1),
                  Object.defineProperty(ke, "__esModule", { value: !0 }),
                  (ke.default = void 0);
                var e,
                  n = (e = ae()) && e.__esModule ? e : { default: e },
                  t = function (e) {
                    if (!(0, n.default)(e)) throw TypeError("Invalid UUID");
                    return parseInt(e.slice(14, 15), 16);
                  };
                return (ke.default = t), ke;
              })(),
            ),
            c = d(ae()),
            l = d(ie()),
            s = d(pe());
          function d(e) {
            return e && e.__esModule ? e : { default: e };
          }
        })(K)),
      K
    );
  }
  Object.defineProperty(Y, "__esModule", { value: !0 }),
    (Y.v4 = void 0),
    (Y.v4 = function () {
      return "object" == typeof crypto && "function" == typeof crypto.randomUUID
        ? crypto.randomUUID()
        : We().v4();
    });
  var Se = {},
    Ne = {};
  Object.defineProperty(Ne, "__esModule", { value: !0 }),
    (Ne.toUnderscoreCase =
      Ne.convertAllEventsToUnderscoreCase =
      Ne.convertStringToUnderscoreCase =
        void 0);
  var Te = R;
  function Fe(e, n) {
    return (
      void 0 === n && (n = !0),
      e && Object.keys(e).length && n
        ? Object.keys(e)
            .map(function (n) {
              var t;
              return ((t = {})[He(n)] = e[n]), t;
            })
            .reduce(function (e, n) {
              return Te.__assign(Te.__assign({}, e), n);
            })
        : e
    );
  }
  function He(e) {
    return e
      .split(/(?=[A-Z])/)
      .join("_")
      .toLowerCase();
  }
  (Ne.toUnderscoreCase = Fe),
    (Ne.convertStringToUnderscoreCase = He),
    (Ne.convertAllEventsToUnderscoreCase = function (e) {
      return e.events.map(function (e) {
        var n = !0,
          t = !0;
        return (
          e &&
            e.options &&
            Object.prototype.hasOwnProperty.call(
              e.options,
              "convertEventCase",
            ) &&
            (n = Boolean(e.options.convertEventCase)),
          e &&
            e.options &&
            Object.prototype.hasOwnProperty.call(
              e.options,
              "convertMetaDataCase",
            ) &&
            (t = Boolean(e.options.convertMetaDataCase)),
          {
            schema_id: e.schemaId,
            payload: Fe(e.payload, n),
            metadata: Fe(e.metadata, t),
          }
        );
      });
    });
  var je = {};
  Object.defineProperty(je, "__esModule", { value: !0 }),
    (je.MonorailRetriesExceededError =
      je.MonorailRequestError =
      je.MonorailBatchProduceError =
      je.MonorailUnableToProduceError =
        void 0);
  var Re = R,
    Le = (function (e) {
      function n(t) {
        var o =
          e.call(
            this,
            "Error producing to the Monorail Edge. Response received: ".concat(
              JSON.stringify(t),
            ),
          ) || this;
        return (o.response = t), Object.setPrototypeOf(o, n.prototype), o;
      }
      return Re.__extends(n, e), n;
    })(Error);
  je.MonorailUnableToProduceError = Le;
  var Ue = (function (e) {
    function n(t) {
      var o =
        e.call(
          this,
          "Error producing to the Monorail Edge. Response received: ".concat(
            JSON.stringify(t),
          ),
        ) || this;
      return Object.setPrototypeOf(o, n.prototype), (o.response = t), o;
    }
    return Re.__extends(n, e), n;
  })(Error);
  je.MonorailBatchProduceError = Ue;
  var Ve = (function (e) {
    function n(t) {
      var o =
        e.call(
          this,
          "Error completing request. A network failure may have prevented the request from completing. Error: ".concat(
            t,
          ),
        ) || this;
      return Object.setPrototypeOf(o, n.prototype), o;
    }
    return Re.__extends(n, e), n;
  })(Error);
  je.MonorailRequestError = Ve;
  var ze = (function (e) {
    function n(t) {
      var o = e.call(this, "".concat(t)) || this;
      return Object.setPrototypeOf(o, n.prototype), o;
    }
    return Re.__extends(n, e), n;
  })(Error);
  (je.MonorailRetriesExceededError = ze),
    Object.defineProperty(Se, "__esModule", { value: !0 }),
    (Se.HttpProducer = void 0);
  var Ge = R,
    qe = L,
    Ye = Ne,
    Ke = Y,
    Xe = je,
    Je = (function () {
      function e(e, n) {
        void 0 === e && (e = qe.DEVELOPMENT_DOMAIN),
          void 0 === n && (n = !1),
          (this.edgeDomain = e),
          (this.keepalive = n);
      }
      return (
        (e.withEndpoint = function (n) {
          return new e(qe.extractDomain(n));
        }),
        (e.getHeadersFromMetadata = function (e) {
          var n = {
            "Content-Type": "application/json; charset=utf-8",
            "X-Monorail-Edge-Event-Created-At-Ms": (
              (e && e.eventCreatedAtMs) ||
              Date.now()
            ).toString(),
            "X-Monorail-Edge-Event-Sent-At-Ms": Date.now().toString(),
            "X-Monorail-Edge-Client-Message-Id": (
              (e && e.clientMessageId) ||
              (0, Ke.v4)()
            ).toString(),
          };
          return (
            e && e.userAgent && (n["User-Agent"] = e.userAgent),
            e && e.remoteIp && (n["X-Forwarded-For"] = e.remoteIp),
            n
          );
        }),
        (e.prototype.produceBatch = function (n) {
          return Ge.__awaiter(this, void 0, void 0, function () {
            var t, o, r, a, i, c;
            return Ge.__generator(this, function (l) {
              switch (l.label) {
                case 0:
                  (t = {
                    events: (0, Ye.convertAllEventsToUnderscoreCase)(n),
                    metadata: (0, Ye.toUnderscoreCase)(n.metadata),
                  }),
                    (l.label = 1);
                case 1:
                  return (
                    l.trys.push([1, 3, , 4]),
                    [
                      4,
                      fetch(this.produceBatchEndpoint(), {
                        method: "post",
                        headers: e.getHeadersFromMetadata(n.metadata),
                        body: JSON.stringify(t),
                        keepalive: this.keepalive,
                      }),
                    ]
                  );
                case 2:
                  return (o = l.sent()), [3, 4];
                case 3:
                  throw ((r = l.sent()), new Xe.MonorailRequestError(r));
                case 4:
                  return 207 !== o.status ? [3, 6] : [4, o.json()];
                case 5:
                  throw ((a = l.sent()), new Xe.MonorailBatchProduceError(a));
                case 6:
                  return o.ok
                    ? [3, 8]
                    : ((i = Xe.MonorailUnableToProduceError.bind),
                      (c = { status: o.status }),
                      [4, o.text()]);
                case 7:
                  throw new (i.apply(Xe.MonorailUnableToProduceError, [
                    void 0,
                    ((c.message = l.sent()), c),
                  ]))();
                case 8:
                  return [2, { status: o.status }];
              }
            });
          });
        }),
        (e.prototype.produce = function (n) {
          return Ge.__awaiter(this, void 0, void 0, function () {
            var t, o, r, a, i, c;
            return Ge.__generator(this, function (l) {
              switch (l.label) {
                case 0:
                  (t = !0),
                    n &&
                      n.options &&
                      Object.prototype.hasOwnProperty.call(
                        n.options,
                        "convertEventCase",
                      ) &&
                      (t = Boolean(n.options.convertEventCase)),
                    (o = {
                      schema_id: n.schemaId,
                      payload: (0, Ye.toUnderscoreCase)(n.payload, t),
                    }),
                    (l.label = 1);
                case 1:
                  return (
                    l.trys.push([1, 3, , 4]),
                    [
                      4,
                      fetch(this.produceEndpoint(), {
                        method: "post",
                        headers: e.getHeadersFromMetadata(n.metadata),
                        body: JSON.stringify(o),
                        keepalive: this.keepalive,
                      }),
                    ]
                  );
                case 2:
                  return (r = l.sent()), [3, 4];
                case 3:
                  throw ((a = l.sent()), new Xe.MonorailRequestError(a));
                case 4:
                  if (!r)
                    throw new Xe.MonorailUnableToProduceError({
                      message: "No response from edge",
                    });
                  return r.ok
                    ? [3, 6]
                    : ((i = Xe.MonorailUnableToProduceError.bind),
                      (c = { status: r.status }),
                      [4, r.text()]);
                case 5:
                  throw new (i.apply(Xe.MonorailUnableToProduceError, [
                    void 0,
                    ((c.message = l.sent()), c),
                  ]))();
                case 6:
                  return [2, { status: r.status }];
              }
            });
          });
        }),
        (e.prototype.produceBatchEndpoint = function () {
          return this.edgeDomain + qe.PRODUCE_BATCH_ENDPOINT;
        }),
        (e.prototype.produceEndpoint = function () {
          return this.edgeDomain + qe.PRODUCE_ENDPOINT;
        }),
        e
      );
    })();
  Se.HttpProducer = Je;
  var Ze = {};
  Object.defineProperty(Ze, "__esModule", { value: !0 }),
    (Ze.LogProducer = void 0);
  var Qe = (function () {
    function e(n) {
      (this.sendToConsole = n), n && e.printWelcomeMessage(n);
    }
    return (
      (e.printWelcomeMessage = function (e) {
        console.log(
          "%c👋 from Monorail%c\n\n" +
            "We've noticed that you're".concat(e ? "" : " not", " ") +
            "running in debug mode. " +
            "As such, we will ".concat(e ? "produce" : "not produce", " ") +
            "Monorail events to the console. " +
            "\n\nIf you want Monorail events to ".concat(
              e ? "stop" : "start",
              " ",
            ) +
            "appearing here, %cset debugMode=".concat((!e).toString(), "%c, ") +
            "for the Monorail Log Producer in your code.",
          "font-size: large;",
          "font-size: normal;",
          "font-weight: bold;",
          "font-weight: normal;",
        );
      }),
      (e.prototype.produce = function (e) {
        return (
          this.sendToConsole && console.log("Monorail event produced", e),
          new Promise(function (n) {
            n(e);
          })
        );
      }),
      (e.prototype.produceBatch = function (e) {
        return (
          this.sendToConsole && console.log("Monorail Batch event produced", e),
          new Promise(function (n) {
            n(e);
          })
        );
      }),
      e
    );
  })();
  (Ze.LogProducer = Qe),
    Object.defineProperty(j, "__esModule", { value: !0 }),
    (j.Monorail = void 0);
  var $e = R,
    en = L,
    nn = U,
    tn = Y,
    on = Se,
    rn = Ze,
    an = (function () {
      function e(n, t) {
        (this.producer = n),
          (this.middleware = t),
          (this.executeChain = e.buildMiddlewareChain(
            this.middleware.concat(new nn.ProducerMiddleware(n)),
          ));
      }
      return (
        (e.createLogProducer = function (n) {
          return new e(new rn.LogProducer(n.debugMode), n.middleware || []);
        }),
        (e.createHttpProducerWithEndpoint = function (n, t) {
          return (
            void 0 === t && (t = []), new e(on.HttpProducer.withEndpoint(n), t)
          );
        }),
        (e.createHttpProducer = function (n) {
          var t = n.options && n.options.keepalive;
          return new e(
            n.production
              ? new on.HttpProducer(en.PRODUCTION_DOMAIN, t)
              : new on.HttpProducer(en.DEVELOPMENT_DOMAIN, t),
            n.middleware || [],
          );
        }),
        (e.buildMiddlewareChain = function (e, n) {
          var t = this;
          return (
            void 0 === n && (n = 0),
            n === e.length
              ? this.identityFn
              : function (o) {
                  return e[n].do(o, t.buildMiddlewareChain(e, n + 1));
                }
          );
        }),
        (e.prototype.produce = function (e) {
          return (
            (e.metadata = $e.__assign(
              { eventCreatedAtMs: Date.now(), clientMessageId: (0, tn.v4)() },
              e.metadata,
            )),
            this.executeChain(e)
          );
        }),
        (e.prototype.produceBatch = function (e) {
          return this.executeChain(e);
        }),
        e
      );
    })();
  j.Monorail = an;
  var cn = {};
  Object.defineProperty(cn, "__esModule", { value: !0 }),
    (cn.RetryMiddleware = void 0);
  var ln = R,
    sn = je,
    dn = (function () {
      function e(e, n) {
        void 0 === e && (e = 3),
          void 0 === n && (n = 150),
          (this.maxRetries = e),
          (this.delayMs = n);
      }
      return (
        (e.prototype.do = function (e, n) {
          return ln.__awaiter(this, void 0, void 0, function () {
            var t, o, r, a, i;
            return ln.__generator(this, function (c) {
              switch (c.label) {
                case 0:
                  (t = 0), (c.label = 1);
                case 1:
                  if (!(t < this.maxRetries)) return [3, 7];
                  (r = void 0), (c.label = 2);
                case 2:
                  return c.trys.push([2, 4, , 6]), [4, n(e)];
                case 3:
                  return (r = c.sent()), [3, 6];
                case 4:
                  if (
                    ((a = c.sent()),
                    (o = o || new Error()),
                    (o = new Error(
                      ""
                        .concat(o.message, " Retry count:")
                        .concat(t + 1, " Error msg:")
                        .concat(a.message, "\n"),
                    )),
                    a instanceof sn.MonorailUnableToProduceError &&
                      (i = a.response.status) &&
                      i >= 400 &&
                      i < 500)
                  )
                    throw a;
                  return [4, this.delay(this.delayMs * Math.pow(2, t))];
                case 5:
                  return c.sent(), t++, [3, 1];
                case 6:
                  return [2, r];
                case 7:
                  throw (
                    (o
                      ? (o.message = "Retry count of "
                          .concat(
                            this.maxRetries,
                            " exceeded. Failed with error: \n",
                          )
                          .concat(o.message, " Aborting request for ")
                          .concat(JSON.stringify(e)))
                      : (o = new Error()),
                    new sn.MonorailRetriesExceededError(o))
                  );
              }
            });
          });
        }),
        (e.prototype.delay = function (e) {
          return new Promise(function (n) {
            return setTimeout(n, e);
          });
        }),
        e
      );
    })();
  (cn.RetryMiddleware = dn),
    (function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.RetryMiddleware =
          e.MonorailRetriesExceededError =
          e.MonorailUnableToProduceError =
          e.MonorailRequestError =
          e.Monorail =
            void 0);
      var n = j;
      Object.defineProperty(e, "Monorail", {
        enumerable: !0,
        get: function () {
          return n.Monorail;
        },
      });
      var t = je;
      Object.defineProperty(e, "MonorailRequestError", {
        enumerable: !0,
        get: function () {
          return t.MonorailRequestError;
        },
      }),
        Object.defineProperty(e, "MonorailUnableToProduceError", {
          enumerable: !0,
          get: function () {
            return t.MonorailUnableToProduceError;
          },
        }),
        Object.defineProperty(e, "MonorailRetriesExceededError", {
          enumerable: !0,
          get: function () {
            return t.MonorailRetriesExceededError;
          },
        });
      var o = cn;
      Object.defineProperty(e, "RetryMiddleware", {
        enumerable: !0,
        get: function () {
          return o.RetryMiddleware;
        },
      });
    })(H);
  var un,
    pn,
    fn = (function () {
      function e() {
        (this.VISIT_TOKEN = "_shopify_s"),
          (this.monorail = H.Monorail.createHttpProducer({ production: !0 }));
      }
      return (
        (e.prototype.shouldEmit = function (e) {
          var n, t;
          return (
            e === d.Accepted ||
            (e !== d.Declined &&
              e === d.PrivacyPolicyView &&
              "yes" ===
                (null ===
                  (t =
                    null ===
                      (n =
                        null === window || void 0 === window
                          ? void 0
                          : window.Shopify) || void 0 === n
                      ? void 0
                      : n.customerPrivacy) || void 0 === t
                  ? void 0
                  : t.getTrackingConsent()))
          );
        }),
        (e.prototype.emitInteraction = function (e, n) {
          void 0 === n && (n = "");
          var o = this.getCommonPayload();
          this.monorail.produce({
            schemaId: "privacy_banner_interact/1.1",
            payload: t(t(t({}, o), n && { interactionMetadata: n }), {
              interactionType: e,
            }),
          });
        }),
        (e.prototype.emitRender = function () {
          var e = this.getCommonPayload();
          this.monorail.produce({
            schemaId: "privacy_banner_render/1.0",
            payload: t({}, e),
          });
        }),
        (e.prototype.visitorRegion = function () {
          var e = document.cookie.split(";").find(function (e) {
            return e.includes("_tracking_consent=");
          });
          if (!e) return null;
          var n = {};
          try {
            n = JSON.parse(unescape(e.split("=")[1]));
          } catch (e) {
            return null;
          }
          return n.region || null;
        }),
        (e.prototype.getCommonPayload = function () {
          var e = window.Shopify.shop,
            n = C(this.VISIT_TOKEN) || "0",
            o = window.Shopify.customerPrivacy.getRegulation(),
            r = window.location.pathname,
            a = this.visitorRegion();
          return t(
            { shopPermanentDomain: e, sessionToken: n, regulation: o, path: r },
            a && { region: a },
          );
        }),
        e
      );
    })(),
    hn = (function () {
      function e(e, n) {
        (this.experimentId = ""),
          (this.experimentAssignment = ""),
          (this.experimentConfig = e),
          this.setExperimentIds(n);
      }
      return (
        (e.prototype.getBannerProperties = function () {
          var e = this.getExperimentAssignment();
          return e
            ? {
                bannerPlacement: e.bannerPlacement,
                buttonPlacement: e.buttonPlacement,
                buttonWeight: e.buttonWeight,
                overlay: e.overlay,
              }
            : null;
        }),
        (e.prototype.getBannerData = function () {
          var e = this.getExperimentAssignment(),
            n = {};
          return (
            void 0 !== (null == e ? void 0 : e.acceptButtonCopy) &&
              (n.acceptButtonCopy = e.acceptButtonCopy || ""),
            void 0 !== (null == e ? void 0 : e.declineButtonCopy) &&
              (n.declineButtonCopy = e.declineButtonCopy || ""),
            void 0 !== (null == e ? void 0 : e.title) &&
              (n.title = e.title || ""),
            void 0 !== (null == e ? void 0 : e.bannerCopy) &&
              (n.bannerCopy = e.bannerCopy || ""),
            n
          );
        }),
        (e.prototype.getExperimentAssignment = function () {
          var e = this;
          if (this.experimentId && this.experimentAssignment) {
            var n = b(this.experimentConfig, function (n) {
              return n.id === e.experimentId;
            });
            return b(null == n ? void 0 : n.assignments, function (n) {
              return n.id === e.experimentAssignment;
            });
          }
          return null;
        }),
        (e.prototype.setExperimentIds = function (e) {
          var n,
            t,
            o = (null == e ? void 0 : e.experiments) || [],
            r = null === (n = o[0]) || void 0 === n ? void 0 : n.experimentId,
            a =
              null === (t = o[0]) || void 0 === t
                ? void 0
                : t.experimentAssignment,
            i = v("experiment-id"),
            c = v("experiment-assignment");
          (this.experimentId = i || r), (this.experimentAssignment = c || a);
        }),
        e
      );
    })();
  !(function (e) {
    (e.Example = "example"),
      (e.BannerPlacement = "customer_privacy_banner_placement_experiment"),
      (e.BannerPlacementV2 = "customer_privacy_banner_placement_experiment_v2"),
      (e.BannerBodyCopy = "customer_privacy_body_copy_experiment"),
      (e.CtaPlacement = "customer_privacy_button_placement_experiment"),
      (e.CtaContent = "customer_privacy_button_content_experiment"),
      (e.CtaWeight = "customer_privacy_button_weight_experiment"),
      (e.BannerHeadline = "customer_privacy_headline_content_experiment"),
      (e.BannerOverlay = "customer_privacy_overlay_effect_experiment"),
      (e.VariableCombination =
        "customer_privacy_variable_combination_experiment");
  })(un || (un = {})),
    (function (e) {
      (e.Example1 = "1"),
        (e.Example2 = "2"),
        (e.Example3 = "3"),
        (e.Example4 = "4"),
        (e.Example5 = "5"),
        (e.Example6 = "6"),
        (e.Example7 = "7"),
        (e.Example8 = "8"),
        (e.Example9 = "9"),
        (e.BannerPlacementFullWidth = "control"),
        (e.BannerPlacementCenter = "test_group_a"),
        (e.BannerPlacementBottomLeft = "test_group_b"),
        (e.BannerPlacementBottomRight = "test_group_c"),
        (e.BannerPlacementV2FullWidth = "control"),
        (e.BannerPlacementV2Center = "test_group_a"),
        (e.BannerPlacementV2BottomLeft = "test_group_b"),
        (e.BannerPlacementV2BottomCenter = "test_group_c"),
        (e.BannerBodyCopyMinimalText = "control"),
        (e.BannerBodyCopyMoreDetails = "test_group_a"),
        (e.BannerBodyCopyMoreTechnicalAndLegalDetails = "test_group_b"),
        (e.CtaPlacementAcceptFirst = "control"),
        (e.CtaPlacementDeclineFirst = "test"),
        (e.CtaContentConversational = "control"),
        (e.CtaContentUnambiguous = "test_group_a"),
        (e.CtaContentPersonallyDriven = "test_group_b"),
        (e.CtaWeightWeighted = "control"),
        (e.CtaWeightFill = "test_group_a"),
        (e.CtaWeightOutline = "test_group_b"),
        (e.BannerHeadlineUserEmpathy = "control"),
        (e.BannerHeadlinePersonalizedWithShopName = "test_group_a"),
        (e.BannerHeadlineNoHeadline = "test_group_b"),
        (e.BannerOverlayNo = "control"),
        (e.BannerOverlayYes = "test"),
        (e.VariableCombinationControl = "control"),
        (e.VariableCombinationWinners = "test_group_a"),
        (e.VariableCombinationWinnerAlt = "test_group_b");
    })(pn || (pn = {}));
  var mn,
    yn = {
      id: un.Example,
      assignments: [
        {
          id: pn.Example1,
          desc: "",
          bannerPlacement: f.BottomFullWidth,
          buttonPlacement: h.AcceptFirst,
          buttonWeight: m.Weighted,
          overlay: y.Yes,
        },
        {
          id: pn.Example2,
          desc: "",
          bannerPlacement: f.Center,
          buttonPlacement: h.DeclineFirst,
          buttonWeight: m.Outline,
          overlay: y.Yes,
        },
        {
          id: pn.Example3,
          desc: "",
          bannerPlacement: f.BottomLeft,
          buttonPlacement: h.AcceptFirst,
          buttonWeight: m.Fill,
          overlay: y.Yes,
        },
        {
          id: pn.Example4,
          desc: "",
          bannerPlacement: f.BottomFullWidth,
          buttonPlacement: h.AcceptFirst,
          buttonWeight: m.Fill,
          overlay: y.No,
        },
        {
          id: pn.Example5,
          desc: "",
          bannerPlacement: f.Center,
          buttonPlacement: h.AcceptFirst,
          buttonWeight: m.Fill,
          overlay: y.No,
        },
        {
          id: pn.Example6,
          desc: "",
          bannerPlacement: f.BottomLeft,
          buttonPlacement: h.DeclineFirst,
          buttonWeight: m.Outline,
          overlay: y.No,
        },
        {
          id: pn.Example7,
          desc: "",
          bannerPlacement: f.BottomRight,
          buttonPlacement: h.AcceptFirst,
          buttonWeight: m.Fill,
          overlay: y.Yes,
        },
        {
          id: pn.Example8,
          desc: "",
          bannerPlacement: f.BottomRight,
          buttonPlacement: h.AcceptFirst,
          buttonWeight: m.Fill,
          overlay: y.No,
        },
        {
          id: pn.Example9,
          desc: "",
          bannerPlacement: f.BottomRight,
          buttonPlacement: h.DeclineFirst,
          buttonWeight: m.Outline,
          overlay: y.No,
        },
      ],
    },
    gn = {
      id: un.BannerBodyCopy,
      assignments: [
        {
          id: pn.BannerBodyCopyMinimalText,
          desc: "Control: Minimal text in the body",
          bannerPlacement: f.BottomFullWidth,
          buttonPlacement: h.AcceptFirst,
          buttonWeight: m.Weighted,
          overlay: y.No,
          acceptButtonCopy: "Accept",
          declineButtonCopy: "Do not accept",
          bannerCopy:
            "We use cookies and similar technologies to provide the best experience on our website.",
        },
        {
          id: pn.BannerBodyCopyMoreDetails,
          desc: "More details regarding data collection and usage in the body",
          bannerPlacement: f.BottomFullWidth,
          buttonPlacement: h.AcceptFirst,
          buttonWeight: m.Weighted,
          overlay: y.No,
          acceptButtonCopy: "Accept",
          declineButtonCopy: "Do not accept",
          bannerCopy:
            'We and our partners use technologies, which may be stored on your device, and process personal data like IP addresses or device identifiers on our platforms. If you\'re OK with this, please click "Accept." If you\'re not, you can click "Do not accept."',
        },
        {
          id: pn.BannerBodyCopyMoreTechnicalAndLegalDetails,
          desc: "More technical and legal details compared to the other two variants",
          bannerPlacement: f.BottomFullWidth,
          buttonPlacement: h.AcceptFirst,
          buttonWeight: m.Weighted,
          overlay: y.No,
          acceptButtonCopy: "Accept",
          declineButtonCopy: "Do not accept",
          bannerCopy:
            'We and our partners use technologies, such as cookies stored on your device, and process personal data like IP addresses or device identifiers on our platforms. We use this data to analyze how our website is used and provide you with personalized advertising. If you\'re OK with this, please click "Accept." If you\'re not, you can click "Do not accept."',
        },
      ],
    },
    bn = "{{{SHOPNAME}}}",
    vn = [
      yn,
      gn,
      {
        id: un.BannerHeadline,
        assignments: [
          {
            id: pn.BannerHeadlineUserEmpathy,
            desc: "Control: Sense of user empathy in the headline",
            bannerPlacement: f.BottomFullWidth,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
            title: "We care about your privacy",
            acceptButtonCopy: "Accept",
            declineButtonCopy: "Do not accept",
            bannerCopy:
              'We and our partners use technologies, which may be stored on your device, and process personal data like IP addresses or device identifiers on our platforms. If you\'re OK with this, please click "Accept." If you\'re not, you can click "Do not accept."',
          },
          {
            id: pn.BannerHeadlinePersonalizedWithShopName,
            desc: "More personalized headline that contains the shop name",
            bannerPlacement: f.BottomFullWidth,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
            title: "".concat(bn, " and privacy"),
            acceptButtonCopy: "Accept",
            declineButtonCopy: "Do not accept",
            bannerCopy:
              'We and our partners use technologies, which may be stored on your device, and process personal data like IP addresses or device identifiers on our platforms. If you\'re OK with this, please click "Accept." If you\'re not, you can click "Do not accept."',
          },
          {
            id: pn.BannerHeadlineNoHeadline,
            desc: "Without any headlines",
            bannerPlacement: f.BottomFullWidth,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
            title: "",
            acceptButtonCopy: "Accept",
            declineButtonCopy: "Do not accept",
            bannerCopy:
              'We and our partners use technologies, which may be stored on your device, and process personal data like IP addresses or device identifiers on our platforms. If you\'re OK with this, please click "Accept." If you\'re not, you can click "Do not accept."',
          },
        ],
      },
      {
        id: un.BannerOverlay,
        assignments: [
          {
            id: pn.BannerOverlayNo,
            desc: "Control: Allows the user to interact with the site - no overlay",
            bannerPlacement: f.BottomFullWidth,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
          },
          {
            id: pn.BannerOverlayYes,
            desc: "Translucent overlay which obstructs site content",
            bannerPlacement: f.BottomFullWidth,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.Yes,
          },
        ],
      },
      {
        id: un.BannerPlacement,
        assignments: [
          {
            id: pn.BannerPlacementFullWidth,
            desc: "Control: Full width bottom",
            bannerPlacement: f.BottomFullWidth,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
          },
          {
            id: pn.BannerPlacementCenter,
            desc: "Center aligned",
            bannerPlacement: f.Center,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
          },
          {
            id: pn.BannerPlacementBottomLeft,
            desc: "Bottom left",
            bannerPlacement: f.BottomLeft,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
          },
          {
            id: pn.BannerPlacementBottomRight,
            desc: "Bottom right",
            bannerPlacement: f.BottomRight,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
          },
        ],
      },
      {
        id: un.BannerPlacementV2,
        assignments: [
          {
            id: pn.BannerPlacementV2FullWidth,
            desc: "Control: Full width bottom",
            bannerPlacement: f.BottomFullWidth,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
          },
          {
            id: pn.BannerPlacementV2Center,
            desc: "Center aligned",
            bannerPlacement: f.Center,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
          },
          {
            id: pn.BannerPlacementV2BottomLeft,
            desc: "Bottom left",
            bannerPlacement: f.BottomLeft,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
          },
          {
            id: pn.BannerPlacementV2BottomCenter,
            desc: "Bottom center",
            bannerPlacement: f.BottomCenter,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
          },
        ],
      },
      {
        id: un.CtaContent,
        assignments: [
          {
            id: pn.CtaContentConversational,
            desc: 'Control: "Ok" and "No, thank you" - Conversational',
            bannerPlacement: f.BottomFullWidth,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
            acceptButtonCopy: "Ok",
            declineButtonCopy: "No Thanks",
          },
          {
            id: pn.CtaContentUnambiguous,
            desc: 'Unambiguous "Accept" and "Do not accept"',
            bannerPlacement: f.BottomFullWidth,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
            acceptButtonCopy: "Accept",
            declineButtonCopy: "Do not accept",
          },
          {
            id: pn.CtaContentPersonallyDriven,
            desc: 'Personally driven "Yes, I agree" and "No, I decline"',
            bannerPlacement: f.BottomFullWidth,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
            acceptButtonCopy: "Yes, I agree",
            declineButtonCopy: "No, I decline",
          },
        ],
      },
      {
        id: un.CtaPlacement,
        assignments: [
          {
            id: pn.CtaPlacementAcceptFirst,
            desc: "Control: Accept button on the left side of the banner and decline button on the right",
            bannerPlacement: f.BottomFullWidth,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
          },
          {
            id: pn.CtaPlacementDeclineFirst,
            desc: "Accept button on the right side of the banner and decline button on the left",
            bannerPlacement: f.BottomFullWidth,
            buttonPlacement: h.DeclineFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
          },
        ],
      },
      {
        id: un.CtaWeight,
        assignments: [
          {
            id: pn.CtaWeightWeighted,
            desc: 'Control: Weighted - Filled "Ok" button',
            bannerPlacement: f.BottomFullWidth,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
          },
          {
            id: pn.CtaWeightFill,
            desc: 'Both "accept" and "decline" buttons filled',
            bannerPlacement: f.BottomFullWidth,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Fill,
            overlay: y.No,
          },
          {
            id: pn.CtaWeightOutline,
            desc: 'Both "accept" and "decline" buttons outlined',
            bannerPlacement: f.BottomFullWidth,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Outline,
            overlay: y.No,
          },
        ],
      },
      {
        id: un.VariableCombination,
        assignments: [
          {
            id: pn.VariableCombinationControl,
            desc: "Control group - Existing prod experience.",
            bannerPlacement: f.BottomFullWidth,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Weighted,
            overlay: y.No,
            acceptButtonCopy: "Ok",
            declineButtonCopy: "No thanks",
            title: "We care about your privacy",
            bannerCopy:
              "We use cookies and similar technologies to provide the best experience on our website.",
          },
          {
            id: pn.VariableCombinationWinners,
            desc: "Banner with elements that yielded the highest consent rate in past tests.",
            bannerPlacement: f.Center,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Outline,
            overlay: y.No,
            acceptButtonCopy: "Accept",
            declineButtonCopy: "Do not accept",
            title: "We care about your privacy",
            bannerCopy:
              "We and our partners use technologies, which may be stored on your device, and process personal data like IP addresses or device identifiers on our platforms. If you're ok with this, please click “Accept.” If you're not, you can click \"Do not accept.\"",
          },
          {
            id: pn.VariableCombinationWinnerAlt,
            desc: "Banner with elements that yielded the highest consent rate in past tests, with more user-friendly copy.",
            bannerPlacement: f.Center,
            buttonPlacement: h.AcceptFirst,
            buttonWeight: m.Outline,
            overlay: y.No,
            acceptButtonCopy: "Accept all",
            declineButtonCopy: "Decline all",
            title: "We value your privacy",
            bannerCopy:
              'We and our partners use cookies and other technologies stored on your device to improve your experience on our site and understand how you interact with our products. We also process personal data like IP addresses to provide you with ads and search results relevant to you. If that\'s OK, click "Accept all." If not, click "Decline all." More details in our',
          },
        ],
      },
    ];
  function Cn(e, n) {
    return (
      (null == n ? void 0 : n.id) && e.setAttribute("id", n.id),
      (null == n ? void 0 : n.class) && e.setAttribute("class", n.class),
      (null == n ? void 0 : n.onClick) &&
        e.addEventListener("click", n.onClick),
      (null == n ? void 0 : n.appendTo) && n.appendTo.appendChild(e),
      (null == n ? void 0 : n.role) && e.setAttribute("role", n.role),
      (null == n ? void 0 : n.autofocus) && e.setAttribute("autofocus", ""),
      (null == n ? void 0 : n.ariaHidden) &&
        e.setAttribute(
          "aria-hidden",
          "".concat(null == n ? void 0 : n.ariaHidden),
        ),
      e
    );
  }
  function _n(e) {
    var n = Cn(document.createElement("div"), e);
    return (
      (null == e ? void 0 : e.text) && (n.textContent = e.text),
      (null == e ? void 0 : e.ariaModal) &&
        n.setAttribute("aria-modal", e.ariaModal),
      (null == e ? void 0 : e.ariaLabelledby) &&
        n.setAttribute("aria-labelledby", e.ariaLabelledby),
      n
    );
  }
  function xn(e) {
    var n = Cn(document.createElement("span"), e);
    return (null == e ? void 0 : e.text) && (n.textContent = e.text), n;
  }
  function wn(e) {
    var n,
      t = Cn(document.createElement("button"), e);
    return (
      (t.textContent =
        null !== (n = null == e ? void 0 : e.text) && void 0 !== n ? n : null),
      e.disabled && t.setAttribute("disabled", ""),
      e.ariaHaspopup && t.setAttribute("aria-haspopup", e.ariaHaspopup),
      e.type && t.setAttribute("type", e.type),
      e.ariaLabel && t.setAttribute("aria-label", e.ariaLabel),
      t
    );
  }
  function Pn(e) {
    var n = Cn(document.createElement("p"), e);
    return (n.textContent = e.text), n;
  }
  function Bn(e, n) {
    var t = Cn(document.createElement(e), n);
    return (t.textContent = n.text), t;
  }
  function In(e) {
    return Bn(mn.H2, e);
  }
  function En(e) {
    return Bn(mn.H3, e);
  }
  function On(e) {
    var n = Cn(document.createElement("style"), e);
    return (n.textContent = e.content), n;
  }
  function An(e) {
    var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    n.setAttributeNS(null, "width", e.width),
      n.setAttributeNS(null, "height", e.height),
      n.setAttributeNS(
        null,
        "viewBox",
        "0 0 ".concat(e.width, " ").concat(e.height),
      ),
      (null == e ? void 0 : e.fillRule) &&
        n.setAttributeNS(null, "fill-rule", e.fillRule),
      (null == e ? void 0 : e.clipRule) &&
        n.setAttributeNS(null, "clip-rule", e.clipRule);
    var t = document.createElementNS("http://www.w3.org/2000/svg", "path");
    return (
      t.setAttributeNS(null, "fill", (null == e ? void 0 : e.colour) || "#000"),
      t.setAttributeNS(null, "d", e.path),
      n.appendChild(t),
      (null == e ? void 0 : e.id) && n.setAttribute("id", e.id),
      (null == e ? void 0 : e.class) && n.setAttribute("class", e.class),
      (null == e ? void 0 : e.dataIconType) &&
        n.setAttribute("data-icon-type", e.dataIconType),
      (null == e ? void 0 : e.ariaHidden) &&
        n.setAttribute(
          "aria-hidden",
          "".concat(null == e ? void 0 : e.ariaHidden),
        ),
      (null == e ? void 0 : e.focusable) &&
        n.setAttribute(
          "focusable",
          "".concat(null == e ? void 0 : e.focusable),
        ),
      (null == e ? void 0 : e.appendTo) && e.appendTo.appendChild(n),
      n
    );
  }
  function Mn(e) {
    var n = Cn(document.createElement("section"), e);
    return (
      (null == e ? void 0 : e.text) && (n.textContent = e.text),
      (null == e ? void 0 : e.ariaModal) &&
        n.setAttribute("aria-modal", e.ariaModal),
      (null == e ? void 0 : e.ariaLabelledby) &&
        n.setAttribute("aria-labelledby", e.ariaLabelledby),
      n
    );
  }
  function Dn(e, n) {
    void 0 === n && (n = !1);
    var t = Mn({
        id: u.DialogId,
        class: u.DialogClass,
        role: "alertdialog",
        ariaModal: "false",
        ariaLabelledby: u.BodyTitleId,
      }),
      o = _n({ class: u.WrapperClass });
    t.appendChild(o);
    var r = _n({ class: u.BodyClass });
    o.appendChild(r);
    var a = _n({ class: u.ButtonsClass });
    return (
      o.appendChild(a),
      (function (e, n) {
        if (e.title) {
          var t = In({ id: u.BodyTitleId, text: e.title });
          n.appendChild(t);
        }
      })(e, r),
      (function (e, n) {
        var t = Pn({ text: "".concat(e.bannerCopy, " ") }),
          o = (function (e) {
            var n = Cn(document.createElement("a"), e);
            return (
              n.setAttribute("href", e.href),
              (n.textContent = e.text),
              n.setAttribute(
                "target",
                void 0 === e.target ? "_blank" : e.target,
              ),
              (e.target && "_blank" !== e.target) ||
                n.setAttribute("rel", "noopener noreferrer"),
              n
            );
          })({
            id: u.BodyCopyPolicyLinkId,
            href: e.policyLink,
            target: "_blank",
            text: e.policyTitle ? e.policyTitle : "Privacy Policy",
          });
        t.appendChild(o), n.appendChild(t);
      })(e, r),
      e.granularConsentEnabled &&
        (!(function (e, n) {
          var t = xn({ text: e.managePrefsButtonCopy }),
            o = wn({
              id: u.ButtonManagePrefsId,
              class: u.ButtonManagePrefsClass,
              ariaHaspopup: "dialog",
              type: "button",
            });
          o.appendChild(t), n.appendChild(o);
        })(e, a),
        a.classList.add(u.ButtonsGranularClass)),
      (function (e, n, t) {
        n.appendChild(
          wn({
            disabled: t,
            id: u.ButtonAcceptId,
            class: u.ButtonAcceptClass,
            type: "button",
            text: e.acceptButtonCopy,
          }),
        );
      })(e, a, n),
      (function (e, n, t) {
        n.appendChild(
          wn({
            disabled: t,
            id: u.ButtonDeclineId,
            class: u.ButtonDeclineClass,
            type: "button",
            text: e.declineButtonCopy,
          }),
        );
      })(e, a, n),
      t
    );
  }
  function kn(e, n, t) {
    void 0 === t && (t = !1);
    var o,
      r,
      a,
      i,
      c = ((o = { appendTo: e }), Cn(document.createElement("header"), o));
    (r = c),
      (a = "Close dialog"),
      An({
        appendTo: (i = wn({
          id: p.HeaderCloseId,
          class: p.HeaderCloseClass,
          ariaLabel: a,
          type: "button",
          text: "",
        })),
        ariaHidden: !0,
        width: "12",
        height: "12",
        path: "M7.41401 6.00012L11.707 1.70721C12.098 1.31622 12.098 0.684236 11.707 0.293244C11.316 -0.097748 10.684 -0.097748 10.293 0.293244L6.00001 4.58615L1.70701 0.293244C1.31601 -0.097748 0.684006 -0.097748 0.293006 0.293244C-0.0979941 0.684236 -0.0979941 1.31622 0.293006 1.70721L4.58601 6.00012L0.293006 10.293C-0.0979941 10.684 -0.0979941 11.316 0.293006 11.707C0.488006 11.902 0.744006 12 1.00001 12C1.25601 12 1.51201 11.902 1.70701 11.707L6.00001 7.4141L10.293 11.707C10.488 11.902 10.744 12 11 12C11.256 12 11.512 11.902 11.707 11.707C12.098 11.316 12.098 10.684 11.707 10.293L7.41401 6.00012Z",
      }),
      r.appendChild(i),
      In({ id: p.HeaderTitleId, text: n.granularConsentTitle, appendTo: c });
    var l = _n({ class: p.HeaderActionsClass, appendTo: c });
    return (
      (function (e, n, t) {
        e.appendChild(
          wn({ disabled: t, id: p.HeaderAcceptId, type: "button", text: n }),
        );
      })(l, n.granularConsentAcceptAllCopy, t),
      (function (e, n, t) {
        e.appendChild(
          wn({ disabled: t, id: p.HeaderDeclineId, type: "button", text: n }),
        );
      })(l, n.granularConsentDeclineAllCopy, t),
      (function (e, n, t) {
        var o = wn({
          disabled: t,
          id: p.HeaderSaveId,
          type: "button",
          text: n,
        });
        t && (o.style.display = "block");
        e.appendChild(o);
      })(l, n.granularConsentSubmitCopy, t),
      c
    );
  }
  function Wn(e, n) {
    var t = _n({ class: p.IntroClass, appendTo: e });
    return (
      (function (e, n) {
        var t = _n({ class: p.IntroMainClass, appendTo: e });
        En({ text: n.granularConsentCopyTitle, appendTo: t }),
          Pn({ text: n.granularConsentCopy, appendTo: t });
      })(t, n),
      n.granularConsentBulletPointsEnabled &&
        (function (e, n) {
          var t = _n({ class: p.IntroExplainWrapperClass, appendTo: e }),
            o = _n({ class: p.IntroExplainAcceptClass, appendTo: t });
          En({ text: n.granularConsentIfAccept, appendTo: o }),
            (function (e) {
              var n = Cn(document.createElement("ul"), e);
              e.lis &&
                e.lis.forEach(function (e) {
                  var t = document.createElement("li");
                  (t.textContent = e), n.appendChild(t);
                });
            })({
              lis: [
                n.granularConsentBulletPointPerformance,
                n.granularConsentBulletPointPreferences,
                n.granularConsentBulletPointMarketing,
              ],
              appendTo: o,
            });
        })(t, n),
      t
    );
  }
  function Sn(e) {
    var n = e.themeColours,
      t = e.purpose,
      o = e.ids,
      r = e.parent,
      a = o.input === p.OptionEssentialInputId,
      i = An({
        dataIconType: "unchecked",
        width: "24",
        height: "24",
        path: "M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z",
        colour: n.iconColor,
        focusable: !0,
      }),
      c = (function (e) {
        return An({
          dataIconType: "checked",
          width: "24",
          height: "24",
          path: "M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z",
          colour: e,
          focusable: !0,
        });
      })(n.iconColor),
      l = _n({ class: p.OptionClass, id: o.section }),
      s = (function (e) {
        var n = Cn(document.createElement("label"), e);
        return (
          n.setAttribute("for", e.for),
          (null == e ? void 0 : e.text) && (n.textContent = e.text),
          n
        );
      })({ appendTo: l, for: o.input, text: t.description });
    !(function (e) {
      var n = Cn(document.createElement("input"), e);
      n.setAttribute("type", e.type),
        e.checked && n.setAttribute("checked", "true"),
        e.disabled && n.setAttribute("disabled", "".concat(e.disabled)),
        (null == e ? void 0 : e.onChange) &&
          n.addEventListener("change", e.onChange),
        e.tabindex && n.setAttribute("tabindex", "".concat(e.tabindex)),
        !0 === e.ariaReadonly &&
          n.setAttribute("aria-readonly", "".concat(e.ariaReadonly));
    })({
      appendTo: s,
      id: o.input,
      type: "checkbox",
      checked: a,
      ariaReadonly: a,
      tabindex: "0",
    });
    var d = xn({ appendTo: s, ariaHidden: !0 });
    d.appendChild(c),
      d.appendChild(i),
      Pn({ appendTo: l, text: t.longDescription }),
      a
        ? ((c.style.display = "block"), (i.style.display = "none"))
        : ((c.style.display = "none"), (i.style.display = "block")),
      r.appendChild(l);
  }
  function Nn(e, n) {
    void 0 === n && (n = !1);
    var t = _n({ id: p.WrapperId, class: p.WrapperClass }),
      o = _n({ id: p.OverlayId, class: p.OverlayClass, text: " " });
    t.appendChild(o);
    var r = Mn({
      id: p.DialogId,
      class: p.DialogClass,
      role: "dialog",
      ariaModal: "true",
      ariaLabelledby: p.HeaderTitleId,
    });
    t.appendChild(r), kn(r, e, n);
    var a = _n({ class: p.DialogScrollableClass });
    return (
      r.appendChild(a),
      Wn(a, e),
      (function (e, n, t) {
        var o = D(
            n.theme,
            n.themeColorHslFont,
            n.themeColorHslBackground,
            n.themeColorHslButtonFont,
            n.themeColorHslButtonBackground,
          ),
          r = _n({ class: p.OptionWrapperClass });
        e.appendChild(r),
          Sn({
            themeColours: o,
            ids: {
              section: p.OptionEssentialId,
              input: p.OptionEssentialInputId,
            },
            purpose: {
              description: n.essentialPurposeShortDescription,
              longDescription: n.essentialPurposeLongDescription,
            },
            parent: r,
            adminPreview: t,
          }),
          Sn({
            themeColours: o,
            ids: {
              section: p.OptionAnalyticsId,
              input: p.OptionAnalyticsInputId,
            },
            purpose: {
              description: n.performancePurposeShortDescription,
              longDescription: n.performancePurposeLongDescription,
            },
            parent: r,
            adminPreview: t,
          }),
          Sn({
            themeColours: o,
            ids: {
              section: p.OptionPreferencesId,
              input: p.OptionPreferencesInputId,
            },
            purpose: {
              description: n.preferencesPurposeShortDescription,
              longDescription: n.preferencesPurposeLongDescription,
            },
            parent: r,
            adminPreview: t,
          }),
          Sn({
            themeColours: o,
            ids: {
              section: p.OptionMarketingId,
              input: p.OptionMarketingInputId,
            },
            purpose: {
              description: n.marketingPurposeShortDescription,
              longDescription: n.marketingPurposeLongDescription,
            },
            parent: r,
            adminPreview: t,
          });
      })(a, e, n),
      t
    );
  }
  !(function (e) {
    (e.H1 = "h1"), (e.H2 = "h2"), (e.H3 = "h3");
  })(mn || (mn = {}));
  var Tn = new fn(),
    Fn = (function () {
      function e() {}
      return (
        (e.show = function (n) {
          var t = n.showBanner,
            o = document.getElementById(p.WrapperId);
          null !== o &&
            ((o.style.display = "block"),
            Tn.emitInteraction(d.ManagePreferences),
            e.disableBackgroundScrolling());
          var r = document.getElementById(p.HeaderCloseId);
          null == r ||
            r.addEventListener("click", function () {
              t && t(), e.hide(), Tn.emitInteraction(d.LeavePreferences);
              var n = document.getElementById(u.ButtonManagePrefsId);
              null == n || n.focus();
            }),
            null == o ||
              o.addEventListener("keydown", function (n) {
                if (!n.defaultPrevented && "Escape" === n.code) {
                  t && t(), e.hide(), Tn.emitInteraction(d.LeavePreferences);
                  var o = document.getElementById(u.ButtonManagePrefsId);
                  null == o || o.focus();
                }
              }),
            null == r || r.focus();
        }),
        (e.hide = function () {
          var n = document.getElementById(p.WrapperId);
          null !== n &&
            ((n.style.display = "none"), e.enableBackgroundScrolling());
        }),
        (e.selectedConsent = function () {
          var e = document.getElementById(p.OptionMarketingInputId),
            n = document.getElementById(p.OptionAnalyticsInputId),
            t = document.getElementById(p.OptionPreferencesInputId),
            o = e.checked ? "1" : "0",
            r = n.checked ? "1" : "0",
            a = t.checked ? "1" : "0";
          return "".concat(o).concat(r).concat(a);
        }),
        (e.addCSS = function (e) {
          var n = k(e),
            t = On({ id: p.StylesContainerId, content: n });
          document.head.appendChild(t);
        }),
        (e.addHTML = function (n, t) {
          var o,
            r,
            a,
            i = Nn(n),
            c = document.getElementById(u.DialogId);
          (r = i),
            null === (a = null == (o = c) ? void 0 : o.parentNode) ||
              void 0 === a ||
              a.insertBefore(r, o.nextSibling);
          var l = document.getElementById(p.DialogId);
          l && (l.dataset.consent = e.selectedConsent());
          var s = e.hideBannerAndPrefs(t);
          e.setupEventHandlers(s);
        }),
        (e.setupEventHandlers = function (n) {
          e.setupButtonEventHandlers(n), e.setupCheckboxEventHandlers();
        }),
        (e.hideBannerAndPrefs = function (n) {
          return function () {
            n(), e.hide();
          };
        }),
        (e.setupButtonEventHandlers = function (e) {
          var n = document.getElementById(p.HeaderSaveId);
          null == n ||
            n.addEventListener("click", function () {
              if (T()) e();
              else {
                var n = document.getElementById(p.OptionMarketingInputId),
                  t = document.getElementById(p.OptionAnalyticsInputId),
                  o = document.getElementById(p.OptionPreferencesInputId),
                  r = n.checked,
                  a = t.checked,
                  i = o.checked;
                window.Shopify.customerPrivacy.setTrackingConsent(
                  { marketing: r, analytics: a, preferences: i },
                  e,
                ),
                  Tn.emitInteraction(
                    d.Save,
                    ""
                      .concat(r ? "m" : "")
                      .concat(a ? "a" : "")
                      .concat(i ? "p" : ""),
                  );
              }
            });
          var t = document.getElementById(p.HeaderAcceptId);
          null == t ||
            t.addEventListener("click", function () {
              T()
                ? e()
                : (window.Shopify.customerPrivacy.setTrackingConsent(_(!0), e),
                  Tn.emitInteraction(d.AcceptedAll));
            });
          var o = document.getElementById(p.HeaderDeclineId);
          null == o ||
            o.addEventListener("click", function () {
              T()
                ? e()
                : (window.Shopify.customerPrivacy.setTrackingConsent(_(!1), e),
                  Tn.emitInteraction(d.DeclinedAll));
            });
        }),
        (e.setupCheckboxEventHandlers = function () {
          var n = document.getElementById(p.OptionEssentialInputId);
          null == n ||
            n.addEventListener("change", function (n) {
              e.handleOptionChange({
                target: n.target,
                isReadOnly: !0,
                sectionId: p.OptionEssentialId,
              });
            });
          var t = document.getElementById(p.OptionAnalyticsInputId);
          null == t ||
            t.addEventListener("change", function (n) {
              e.handleOptionChange({
                target: n.target,
                isReadOnly: !1,
                sectionId: p.OptionAnalyticsId,
              });
            });
          var o = document.getElementById(p.OptionPreferencesInputId);
          null == o ||
            o.addEventListener("change", function (n) {
              e.handleOptionChange({
                target: n.target,
                isReadOnly: !1,
                sectionId: p.OptionPreferencesId,
              });
            });
          var r = document.getElementById(p.OptionMarketingInputId);
          null == r ||
            r.addEventListener("change", function (n) {
              e.handleOptionChange({
                target: n.target,
                isReadOnly: !1,
                sectionId: p.OptionMarketingId,
              });
            });
        }),
        (e.handleOptionChange = function (n) {
          var t = n.target,
            o = n.isReadOnly,
            r = n.sectionId;
          o && (t.checked = !0);
          var a,
            i,
            c,
            l = t.checked,
            s = document.getElementById(r),
            d = s.querySelector('svg[data-icon-type="checked"]'),
            u = s.querySelector('svg[data-icon-type="unchecked"]');
          l
            ? ((d.style.display = "block"), (u.style.display = "none"))
            : ((d.style.display = "none"), (u.style.display = "block")),
            (a = e.selectedConsent()),
            (i = document.getElementById(p.DialogId)),
            (c = document.getElementById(p.HeaderSaveId)),
            (null == i ? void 0 : i.dataset.consent) === a
              ? (c.className = "")
              : (c.className = "primary");
        }),
        (e.enableBackgroundScrolling = function () {
          document.body.style.removeProperty("overflow");
        }),
        (e.disableBackgroundScrolling = function () {
          document.body.style.setProperty("overflow", "hidden");
        }),
        e
      );
    })(),
    Hn = (function () {
      function e() {
        (this.bannerProperties = {
          bannerPlacement: f.BottomCenter,
          buttonPlacement: h.AcceptFirst,
          buttonWeight: m.Outline,
        }),
          (this.shopName = ""),
          (this.logger = new fn());
      }
      return (
        (e.show = function () {
          var e = document.getElementById(u.DialogId);
          null !== e && (e.style.display = "block");
          var n = document.getElementById(u.ButtonManagePrefsId);
          null == n || n.focus();
        }),
        (e.hide = function () {
          var e = document.getElementById(u.DialogId);
          null !== e && (e.style.display = "none");
        }),
        (e.prototype.init = function () {
          return o(this, void 0, void 0, function () {
            var e, n, t, o, a;
            return r(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    this.removeExistingElements(),
                    (this.shopName = this.getShopNameFromMetaTag()),
                    [4, S.getServerData({ shopName: this.shopName })]
                  );
                case 1:
                  return (
                    (e = r.sent()),
                    (n = new hn(vn, e)),
                    (t = n.getBannerProperties()),
                    (o = n.getBannerData()),
                    this.setBannerProperties(e, t),
                    (a = this.setBannerData(e, o)),
                    this.render(a),
                    [2]
                  );
              }
            });
          });
        }),
        (e.prototype.getShopNameFromMetaTag = function () {
          var e,
            n =
              null ===
                (e = document.querySelector("meta[property='og:site_name']")) ||
              void 0 === e
                ? void 0
                : e.getAttribute("content");
          return null != n ? n : "";
        }),
        (e.prototype.bannerPositionToBannerPlacement = function (e) {
          try {
            return e.replace(/_/g, "-");
          } catch (e) {
            return f.BottomCenter;
          }
        }),
        (e.prototype.setBannerProperties = function (e, n) {
          e.bannerPosition &&
            (this.bannerProperties.bannerPlacement =
              this.bannerPositionToBannerPlacement(e.bannerPosition)),
            (null == n ? void 0 : n.bannerPlacement) &&
              (this.bannerProperties.bannerPlacement = n.bannerPlacement),
            (null == n ? void 0 : n.buttonPlacement) &&
              (this.bannerProperties.buttonPlacement = n.buttonPlacement),
            (null == n ? void 0 : n.buttonWeight) &&
              (this.bannerProperties.buttonWeight = n.buttonWeight);
        }),
        (e.prototype.setBannerData = function (e, n) {
          var o = t({}, e);
          return (
            (null == n ? void 0 : n.acceptButtonCopy) &&
              (o.acceptButtonCopy = n.acceptButtonCopy),
            (null == n ? void 0 : n.declineButtonCopy) &&
              (o.declineButtonCopy = n.declineButtonCopy),
            "string" == typeof (null == n ? void 0 : n.title) &&
              (o.title = this.getBannerDataTitle(n.title)),
            (null == n ? void 0 : n.bannerCopy) &&
              (o.bannerCopy = n.bannerCopy),
            o
          );
        }),
        (e.prototype.getBannerDataTitle = function (e) {
          return e.includes(bn) ? e.replace(bn, this.shopName) : e;
        }),
        (e.prototype.render = function (n) {
          if (T())
            return Object.keys(n).length
              ? (this.addCSS(n), this.addBannerHTML(n), void e.show())
              : void console.warn(
                  "banner not rendered due to lack of saved data",
                );
          this.merchantHasPublished(n) &&
            (this.addCSS(n),
            this.addBannerHTML(n),
            e.show(),
            this.logger.emitRender());
        }),
        (e.prototype.addCSS = function (e) {
          var n = On({
            id: u.StylesContainerId,
            content: W(e, !1, this.bannerProperties),
          });
          document.head.appendChild(n);
        }),
        (e.prototype.addBannerHTML = function (e) {
          var n = Dn(e),
            t = document.getElementsByTagName("body")[0];
          t.insertBefore(n, t.firstChild), this.addEventListeners(e);
        }),
        (e.prototype.removeExistingElements = function () {
          var e,
            n,
            t = document.getElementById(u.DialogId),
            o = document.getElementById(u.StylesContainerId);
          null === (e = null == t ? void 0 : t.parentNode) ||
            void 0 === e ||
            e.removeChild(t),
            null === (n = null == o ? void 0 : o.parentNode) ||
              void 0 === n ||
              n.removeChild(o);
        }),
        (e.prototype.addEventListeners = function (n) {
          this.addEssentialEventListeners(),
            T() || this.addMetricsEventListeners();
          var t = document.getElementById(u.ButtonManagePrefsId);
          null == t ||
            t.addEventListener("click", function () {
              document.getElementById(p.WrapperId) ||
                (Fn.addCSS(n), Fn.addHTML(n, e.hide)),
                Fn.show({});
            });
        }),
        (e.prototype.addEssentialEventListeners = function () {
          var n = document.getElementById(u.ButtonAcceptId);
          null == n ||
            n.addEventListener("click", function () {
              T()
                ? e.hide()
                : window.Shopify.customerPrivacy.setTrackingConsent(
                    _(!0),
                    e.hide,
                  );
            });
          var t = document.getElementById(u.ButtonDeclineId);
          null == t ||
            t.addEventListener("click", function () {
              T()
                ? e.hide()
                : window.Shopify.customerPrivacy.setTrackingConsent(
                    _(!1),
                    e.hide,
                  );
            });
        }),
        (e.prototype.addMetricsEventListeners = function () {
          var e = this,
            n = document.getElementById(u.BodyCopyPolicyLinkId);
          null == n ||
            n.addEventListener("click", function () {
              e.logger.emitInteraction(d.PrivacyPolicyView);
            });
          var t = document.getElementById(u.ButtonAcceptId);
          null == t ||
            t.addEventListener("click", function () {
              e.logger.emitInteraction(d.Accepted);
            });
          var o = document.getElementById(u.ButtonDeclineId);
          null == o ||
            o.addEventListener("click", function () {
              e.logger.emitInteraction(d.Declined);
            });
        }),
        (e.prototype.merchantHasPublished = function (e) {
          return !0 === (null == e ? void 0 : e.visible);
        }),
        (e.adminPreviewBannerProperties = {
          bannerPlacement: f.BottomCenter,
          buttonPlacement: h.AcceptFirst,
          buttonWeight: m.Outline,
        }),
        e
      );
    })();
  function jn() {
    return o(this, void 0, void 0, function () {
      return r(this, function (e) {
        switch (e.label) {
          case 0:
            return T() ||
              (function () {
                var e, n, t, o, r;
                return (
                  null ===
                    (n =
                      null === (e = window.Shopify) || void 0 === e
                        ? void 0
                        : e.customerPrivacy) || void 0 === n
                    ? void 0
                    : n.doesMerchantSupportGranularConsent()
                )
                  ? N() &&
                      (null ===
                        (r =
                          null ===
                            (o =
                              null === (t = window.Shopify) || void 0 === t
                                ? void 0
                                : t.customerPrivacy) || void 0 === o
                            ? void 0
                            : o.unstable) || void 0 === r
                        ? void 0
                        : r.shouldShowBanner())
                  : N() &&
                      void 0 !== window.Shopify &&
                      void 0 !== window.Shopify.customerPrivacy &&
                      "GDPR" ===
                        window.Shopify.customerPrivacy.getRegulation() &&
                      window.Shopify.customerPrivacy.isRegulationEnforced() &&
                      "no_interaction" ===
                        window.Shopify.customerPrivacy.getTrackingConsent();
              })()
              ? [4, new Hn().init()]
              : [3, 2];
          case 1:
            e.sent(), (e.label = 2);
          case 2:
            return [2];
        }
      });
    });
  }
  return (
    window.Shopify &&
      window.Shopify.loadFeatures(
        [{ name: "consent-tracking-api", version: "0.1" }],
        function (e) {
          if (e) throw e;
          jn();
        },
      ),
    (e.loadBanner = jn),
    e
  );
})({});
