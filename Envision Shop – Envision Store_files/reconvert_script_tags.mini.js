var jQueryRCT,
  script,
  current_script_url = document.currentScript.src,
  domain_name = current_script_url
    .replace("http://", "")
    .replace("https://", "")
    .split(/[/?#]/)[0],
  RCT_SITE_URL = "",
  RCT_ASSETS_URL = "",
  RCT_ASSETS_URL =
    "localhost" === domain_name
      ? ((RCT_SITE_URL = "http://localhost:4000/rtc_api/"),
        "http://localhost/stilyo-apps/reconvert/v1/")
      : "reconvert-stage.stilyoapps.com" == domain_name
      ? ((RCT_SITE_URL = "https://stage-node.stilyoapps.com/rtc_api/"),
        "https://reconvert-stage.stilyoapps.com/")
      : "stilyoapps.com" == domain_name || "www.stilyoapps.com" == domain_name
      ? ((RCT_SITE_URL = "https://rct-service.stilyoapps.com/rtc_api/"),
        "https://www.stilyoapps.com/reconvert/")
      : "dev.stilyoapps.com" == domain_name
      ? ((RCT_SITE_URL = "https://dev.stilyoapps.com/rtc_api/"),
        "https://dev.stilyoapps.com/reconvert/")
      : "demo.stilyoapps.com" == domain_name
      ? ((RCT_SITE_URL = "https://demo-node.stilyoapps.com/rtc_api/"),
        "https://demo.stilyoapps.com/reconvert/v1/")
      : "test-php.stilyoapps.com" == domain_name
      ? ((RCT_SITE_URL = "https://test-node.stilyoapps.com/rtc_api/"),
        "https://test-php.stilyoapps.com/reconvert/")
      : (RCT_SITE_URL = "https://www.stilyoapps.com/reconvert/"),
  reconvertAjaxGetUrl = RCT_SITE_URL + "reconvert",
  reconvertAjaxUrlnew = RCT_SITE_URL + "api",
  reconvertAjaxUrl = RCT_SITE_URL + "api/reconvert",
  reconvertAjaxUrl_new = RCT_SITE_URL + "reconvert_script_tags.php",
  reconvertAjaxBackendUrl = RCT_SITE_URL + "v1/client/ajax_responce.php",
  shop = Shopify.shop,
  appcartJson = [],
  rctShopInfo = {},
  rct_store_id = RCTgetParameterByName("scid", current_script_url);
function showABPopupOnAdminPreview() {
  var e;
  void 0 !== Shopify.AdminBarInjector &&
    ((e =
      null != window.sessionStorage.getItem("ReconvertPopupAdminView")
        ? {
            method_name: "show_ab_version_popup_admin_view",
            shop: shop,
            segment: "no",
          }
        : (window.sessionStorage.setItem("ReconvertPopupAdminView", "1"),
          {
            method_name: "show_ab_version_popup_admin_view",
            shop: shop,
            segment: "yes",
          })),
    jQueryRCT.ajax({
      url: reconvertAjaxBackendUrl,
      type: "post",
      dataType: "json",
      data: e,
      beforeSend: function () {},
      complete: function () {},
      success: function (e) {
        "success" == e.result &&
          ((t = e.popup_code),
          jQueryRCT("body").append(t),
          window.sessionStorage.removeItem(
            "ReconvertQuickActivationPopupAdminView",
          ));
      },
    }));
}
function closePopupAdminPreview() {
  jQueryRCT.ajax({
    url: reconvertAjaxBackendUrl,
    type: "post",
    dataType: "json",
    data: { method_name: "close_ab_version_popup_admin_view", shop: shop },
    beforeSend: function () {},
    complete: function () {},
    success: function (e) {
      "success" == e.result &&
        (document.getElementById("prompt").style.display = "none");
    },
  });
}
function closePopup() {
  document.getElementById("prompt").style.display = "none";
}
function activateClickedAdminPreview() {
  jQueryRCT.ajax({
    url: reconvertAjaxBackendUrl,
    type: "post",
    dataType: "json",
    data: {
      method_name: "activate_click_ab_version_popup_admin_view",
      shop: shop,
    },
    beforeSend: function () {},
    complete: function () {},
    success: function (e) {},
  });
}
function showQuickActivationPopupOnAdminPreview() {
  var e;
  void 0 !== Shopify.AdminBarInjector &&
    ((e =
      null !=
      window.sessionStorage.getItem("ReconvertQuickActivationPopupAdminView")
        ? {
            method_name: "show_ab_quick_activation_popup_admin_view",
            shop: shop,
            segment: "no",
          }
        : (window.sessionStorage.setItem(
            "ReconvertQuickActivationPopupAdminView",
            "1",
          ),
          {
            method_name: "show_ab_quick_activation_popup_admin_view",
            shop: shop,
            segment: "yes",
          })),
    jQueryRCT.ajax({
      url: reconvertAjaxBackendUrl,
      type: "post",
      dataType: "json",
      data: e,
      beforeSend: function () {},
      complete: function () {},
      success: function (e) {
        "success" == e.result &&
          ((t = e.popup_code),
          document.getElementById("prompt") || jQueryRCT("body").append(t));
      },
    }));
}
function closeQuickActivationPopupAdminPreview() {
  jQueryRCT.ajax({
    url: reconvertAjaxBackendUrl,
    type: "post",
    dataType: "json",
    data: {
      method_name: "close_quick_activation_popup_admin_view",
      shop: shop,
    },
    beforeSend: function () {},
    complete: function () {},
    success: function (e) {
      "success" == e.result &&
        (document.getElementById("prompt").style.display = "none");
    },
  });
}
function quickActivationPercValueClick(e) {
  jQueryRCT.ajax({
    url: reconvertAjaxBackendUrl,
    type: "post",
    dataType: "json",
    data: {
      method_name: "quick_activation_perc_value_click",
      shop: shop,
      perc_value: e,
    },
    beforeSend: function () {},
    complete: function () {},
    success: function (e) {},
  });
}
function activateClickedQuickActivationAdminPreview(e) {
  var t = document.getElementById(e).value;
  jQueryRCT.ajax({
    url: reconvertAjaxBackendUrl,
    type: "post",
    dataType: "json",
    data: {
      method_name: "activate_click_quick_activation_popup_admin_view",
      shop: shop,
      discount: t,
    },
    beforeSend: function () {
      isNaN(t) ||
        ((document.getElementById("first-modal").style.display = "none"),
        (document.getElementById("second-modal").style.display = "none"),
        "discount_perc" == e
          ? (document.getElementById("loader").style.display = "block")
          : (document.getElementById("loader-second").style.display = "block"));
    },
    complete: function () {},
    success: function (e) {
      "success" == e.result &&
        jQueryRCT.ajax({
          url: reconvertAjaxBackendUrl,
          type: "post",
          dataType: "json",
          data: {
            method_name: "create_new_funnel",
            shop: shop,
            discount: t,
            is_publish: "1",
            call_from: "Admin Preview",
            funnel_id: e.funnel_id,
            funnel_title: e.funnel_title,
            funnel_location: "Admin Preview",
          },
          beforeSend: function () {},
          complete: function () {},
          success: function (e) {
            (document.getElementById("loader").style.display = "none"),
              (document.getElementById("loader-second").style.display = "none"),
              (document.getElementById("congratulation-modal").style.display =
                "block");
          },
        });
    },
  });
}
function QuickActivationPopupAdminPreviewChangeBanner() {
  (document.getElementById("second-modal").style.display = "none"),
    (document.getElementById("first-modal").style.display = "block");
}
function showQuickActivationPopupOnEditor() {
  var e;
  1 == Shopify.designMode &&
    ((e =
      null !=
      window.sessionStorage.getItem("ReconvertQuickActivationPopupEditor")
        ? {
            method_name: "show_ab_quick_activation_popup_editor",
            shop: shop,
            segment: "no",
          }
        : (window.sessionStorage.setItem(
            "ReconvertQuickActivationPopupEditor",
            "1",
          ),
          {
            method_name: "show_ab_quick_activation_popup_editor",
            shop: shop,
            segment: "yes",
          })),
    jQueryRCT.ajax({
      url: reconvertAjaxBackendUrl,
      type: "post",
      dataType: "json",
      data: e,
      beforeSend: function () {},
      complete: function () {},
      success: function (e) {
        "success" == e.result &&
          ((t = e.popup_code),
          document.getElementById("prompt") || jQueryRCT("body").append(t));
      },
    }));
}
function closeQuickActivationPopupEditor() {
  jQueryRCT.ajax({
    url: reconvertAjaxBackendUrl,
    type: "post",
    dataType: "json",
    data: { method_name: "close_quick_activation_popup_editor", shop: shop },
    beforeSend: function () {},
    complete: function () {},
    success: function (e) {
      "success" == e.result &&
        (document.getElementById("prompt").style.display = "none");
    },
  });
}
function quickActivationPercValueClickEditor(e) {
  jQueryRCT.ajax({
    url: reconvertAjaxBackendUrl,
    type: "post",
    dataType: "json",
    data: {
      method_name: "quick_activation_perc_value_click_editor",
      shop: shop,
      perc_value: e,
    },
    beforeSend: function () {},
    complete: function () {},
    success: function (e) {},
  });
}
function activateClickedQuickActivationEditor(e) {
  var t = document.getElementById(e).value;
  jQueryRCT.ajax({
    url: reconvertAjaxBackendUrl,
    type: "post",
    dataType: "json",
    data: {
      method_name: "activate_click_quick_activation_popup_editor",
      shop: shop,
      discount: t,
    },
    beforeSend: function () {
      isNaN(t) ||
        ((document.getElementById("first-modal").style.display = "none"),
        (document.getElementById("second-modal").style.display = "none"),
        "discount_perc" == e
          ? (document.getElementById("loader").style.display = "block")
          : (document.getElementById("loader-second").style.display = "block"));
    },
    complete: function () {},
    success: function (e) {
      "success" == e.result &&
        jQueryRCT.ajax({
          url: reconvertAjaxBackendUrl,
          type: "post",
          dataType: "json",
          data: {
            method_name: "create_new_funnel",
            shop: shop,
            discount: t,
            is_publish: "1",
            call_from: "Theme Editor",
            funnel_id: e.funnel_id,
            funnel_title: e.funnel_title,
            funnel_location: "Theme Editor",
          },
          beforeSend: function () {},
          complete: function () {},
          success: function (e) {
            (document.getElementById("loader").style.display = "none"),
              (document.getElementById("loader-second").style.display = "none"),
              (document.getElementById("congratulation-modal").style.display =
                "block");
          },
        });
    },
  });
}
function QuickActivationPopupEditorChangeBanner() {
  (document.getElementById("second-modal").style.display = "none"),
    (document.getElementById("first-modal").style.display = "block");
}
function showReviewCollectorOnAdminPreview() {
  var e;
  void 0 !== Shopify.AdminBarInjector &&
    ((e =
      null != window.sessionStorage.getItem("ReconvertReviewCollectorAdminView")
        ? {
            method_name: "show_ab_review_collector_admin_view",
            shop: shop,
            segment: "no",
          }
        : (window.sessionStorage.setItem(
            "ReconvertReviewCollectorAdminView",
            "1",
          ),
          {
            method_name: "show_ab_review_collector_admin_view",
            shop: shop,
            segment: "yes",
          })),
    jQueryRCT.ajax({
      url: reconvertAjaxBackendUrl,
      type: "post",
      dataType: "json",
      data: e,
      beforeSend: function () {},
      complete: function () {},
      success: function (e) {
        "success" == e.result &&
          ((t = e.popup_code),
          document.getElementById("prompt") || jQueryRCT("body").append(t));
      },
    }));
}
function closeReviewCollectorAdminPreview() {
  jQueryRCT.ajax({
    url: reconvertAjaxBackendUrl,
    type: "post",
    dataType: "json",
    data: { method_name: "close_review_collector_admin_view", shop: shop },
    beforeSend: function () {},
    complete: function () {},
    success: function (e) {
      "success" == e.result &&
        (document.getElementById("prompt").style.display = "none");
    },
  });
}
function openAdditionalFeedbackReviewCollectorAdminPreview() {
  (document.getElementById("first-modal").style.display = "none"),
    (document.getElementById("second-modal").style.display = "block");
}
function closeFeedbackReviewCollectorAdminPreview(e = NULL, t = NULL) {
  var o = document.getElementById("location").value;
  (document.getElementById("second-modal").style.display = "none"),
    (document.getElementById("congratulation-modal2").style.display = "block"),
    jQueryRCT.ajax({
      url: reconvertAjaxBackendUrl,
      type: "post",
      dataType: "json",
      data: {
        method_name: "save_rating_feedback_review_collector",
        shop: shop,
        rating: e,
        feedback: t,
        location: o,
      },
      beforeSend: function () {},
      complete: function () {},
      success: function (e) {
        setTimeout(function () {
          document.getElementById("congratulation-modal2").style.display =
            "none";
        }, 3e3);
      },
    });
}
function submitFeedbackReviewCollectorAdminPreview(e = NULL, t = NULL) {
  var o = document.getElementById("location").value;
  (document.getElementById("second-modal").style.display = "none"),
    (document.getElementById("congratulation-modal").style.display = "block"),
    jQueryRCT.ajax({
      url: reconvertAjaxBackendUrl,
      type: "post",
      dataType: "json",
      data: {
        method_name: "save_rating_feedback_review_collector",
        shop: shop,
        rating: e,
        feedback: t,
        location: o,
      },
      beforeSend: function () {},
      complete: function () {},
      success: function (e) {},
    });
}
function openAppPageReviewCollectorAdminPreview(e = NULL, t = NULL) {
  var o = document.getElementById("location").value;
  jQueryRCT.ajax({
    url: reconvertAjaxBackendUrl,
    type: "post",
    dataType: "json",
    data: {
      method_name: "save_rating_feedback_review_collector",
      shop: shop,
      rating: e,
      feedback: t,
      location: o,
    },
    beforeSend: function () {},
    complete: function () {},
    success: function (e) {
      window.location =
        "https://apps.shopify.com/reconvert-upsell-cross-sell#modal-show=WriteReviewModal/?utm_source=admin-preview&utm_medium=admin-preview&utm_campaign=admin-preview&utm_id=review-collector";
    },
  });
}
function openAppPageReviewCollectorAdminPreview2(e = NULL, t = NULL) {
  var o = document.getElementById("location").value;
  (document.getElementById("second-modal").style.display = "none"),
    (document.getElementById("congratulation-modal2").style.display = "block"),
    jQueryRCT.ajax({
      url: reconvertAjaxBackendUrl,
      type: "post",
      dataType: "json",
      data: {
        method_name: "save_rating_feedback_review_collector",
        shop: shop,
        rating: e,
        feedback: t,
        location: o,
      },
      beforeSend: function () {},
      complete: function () {},
      success: function (e) {
        window.location =
          "https://apps.shopify.com/reconvert-upsell-cross-sell#modal-show=WriteReviewModal/?utm_source=admin-preview&utm_medium=admin-preview&utm_campaign=admin-preview&utm_id=review-collector";
      },
    });
}
function getRadio1() {
  for (
    var e = document.getElementsByName("rating"),
      t = document.getElementById("location").value,
      o = 0;
    o < e.length;
    o++
  )
    if (e[o].checked) {
      rating = e[o].value;
      break;
    }
  (document.getElementById("rating-0" + rating).checked = !0),
    sendSegmentReviewCollector(rating, t);
}
function getRadio2() {
  for (
    var e = document.getElementsByName("rating2"),
      t = document.getElementById("location").value,
      o = 0;
    o < e.length;
    o++
  )
    if (e[o].checked) {
      rating = e[o].value;
      break;
    }
  (document.getElementById("rating-" + rating).checked = !0),
    sendSegmentReviewCollector(rating, t);
}
function sendSegmentReviewCollector(e = NULL, t = NULL) {
  jQueryRCT.ajax({
    url: reconvertAjaxBackendUrl,
    type: "post",
    dataType: "json",
    data: {
      method_name: "send_segment_review_collector",
      shop: shop,
      rating: e,
      location: t,
    },
    beforeSend: function () {},
    complete: function () {},
    success: function (e) {},
  });
}
function RCTgetParameterByName(e, t) {
  t = "" == t || null == t ? window.location.search : t;
  e = RegExp("[?&]" + e + "=([^&]*)").exec(t);
  return e && decodeURIComponent(e[1].replace(/\+/g, " "));
}
function RCTStoreReconMainFun() {
  jQueryRCT.get(
    reconvertAjaxUrl_new,
    { shop: shop, store_client_id: rct_store_id },
    function (e) {
      e = JSON.parse(e);
      void 0 !== e.result &&
        "success" == e.result &&
        (jQueryRCT.ajaxSetup({ headers: { Authentication: e.security_token } }),
        showABPopupOnAdminPreview(),
        showQuickActivationPopupOnAdminPreview(),
        showReviewCollectorOnAdminPreview(),
        showQuickActivationPopupOnEditor());
    },
  );
}
window.jQuery
  ? ((jQueryRCT = window.jQuery), RCTStoreReconMainFun())
  : window.Checkout && window.Checkout.jQuery
  ? ((jQueryRCT = window.Checkout.jQuery), RCTStoreReconMainFun())
  : (((script = document.createElement("SCRIPT")).src =
      "https://code.jquery.com/jquery-3.4.0.min.js"),
    (script.type = "text/javascript"),
    (script.onload = function () {
      (jQueryRCT = window.jQuery), RCTStoreReconMainFun();
    }),
    document.getElementsByTagName("head")[0].appendChild(script));
