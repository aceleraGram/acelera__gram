function get_action(e) {
  return (
    0 != grecaptcha.getResponse().length ||
    ($(".recaptcha").addClass("nonshake"),
    setTimeout(function () {
      $(".recaptcha").removeClass("nonshake");
    }, 500),
    !1)
  );
}
function orderpaymenupdate() {
  var e = $("#coupon_code_input").val(),
    t = $("#order_payment_medhod").val();
  return null == t
    ? ($("#order_payment_medhod").addClass("nonshake"),
      void setTimeout(function () {
        $("#order_payment_medhod").removeClass("nonshake");
      }, 500))
    : "" == e && $("#coupon_code").data("action")
    ? ($("#coupon_code_input").addClass("nonshake"),
      void setTimeout(function () {
        $("#coupon_code_input").removeClass("nonshake");
      }, 500))
    : ((data = { action: "response", sp_musteri_kupon: e, sp_odeme: t }),
      void fastpost(
        window.location.href + "?action=code",
        data,
        "_order_payment"
      ));
}
function orderstatu(e) {
  fastpost(
    window.location.href + "?action=code",
    $(e).serialize(),
    "_orderstatu"
  );
}
function fastpost(e, t, a = "", o = null) {
  $.ajax({
    type: "POST",
    url: e,
    data: t,
    success: function (e) {
      return "content_ajax" == a
        ? ($("#" + a).html(e),
          (document.title = $("#ajax_title").val()),
          $("meta[name=keywords]").attr("content", $("#ajax_keywords").val()),
          $("meta[name=title]").attr("content", $("#ajax_title").val()),
          $("meta[name=description]").attr(
            "content",
            $("#ajax_description").val()
          ),
          history.pushState("", "", $("#ajax_pathname").val()),
          o && $("html, body").animate({ scrollTop: 0 }, "slow"),
          $(".mobile-nav-active").removeClass("mobile-nav-active"),
          $(".mobile-nav-overly").hide(),
          $(".fa-times").attr("class", "fa fa-bars"),
          $("#" + a).attr("style", ""),
          !1)
        : ("_order_payment" == a || "_orderstatu" == a) &&
            ($("#" + a).html(e), !1);
    },
  });
}
!(function (e) {
  function t(e, t) {
    var a = new Image(),
      o = e.getAttribute("data-src");
    (a.onload = function () {
      e.parent ? e.parent.replaceChild(a, e) : (e.src = o), t && t();
    }),
      (a.src = o);
  }
  for (
    var a = new Array(),
      o = (function (e, t) {
        if (document.querySelectorAll) t = document.querySelectorAll(e);
        else {
          var a = document,
            o = a.styleSheets[0] || a.createStyleSheet();
          o.addRule(e, "f:b");
          for (var n = a.all, r = 0, s = [], i = n.length; r < i; r++)
            n[r].currentStyle.f && s.push(n[r]);
          o.removeRule(0), (t = s);
        }
        return t;
      })("img.lazy"),
      n = function () {
        for (var o = 0; o < a.length; o++)
          (n = a[o]),
            (r = void 0),
            (r = n.getBoundingClientRect()).top >= 0 &&
              r.bottom >= 0 &&
              r.right >= 0 &&
              r.top <=
                (e.innerHeight || document.documentElement.clientHeight) &&
              r.left <=
                (e.innerWidth || document.documentElement.clientWidth) &&
              t(a[o], function () {
                a.splice(o, o);
              });
        var n, r;
      },
      r = 0;
    r < o.length;
    r++
  )
    a.push(o[r]);
  n(),
    (function (t, a) {
      e.addEventListener
        ? this.addEventListener(t, a, !1)
        : e.attachEvent
        ? this.attachEvent("on" + t, a)
        : (this["on" + t] = a);
    })("scroll", n);
})(this),
  $(document).ready(function () {
    $(window).scroll(function () {
      $(".lazy").each(function () {
        $(this).offset().top <
          $(window).scrollTop() + $(window).height() + 100 &&
          $(this).attr("src", $(this).attr("data-src"));
      });
    });
  }),
  window.scrollBy(0, 1),
  $(".Ns_none").click(function () {
    $(this).addClass("d-none"),
      $("#" + $(this).data("open")).removeClass("d-none"),
      "fastclose" == $(this).data("open")
        ? ($(".alan1").hide(), $(".alan2").show())
        : ($(".alan1").show(), $(".alan2").hide());
  }),
  $(document).ready(function () {
    $(document).on("click", "#coupon_code", function () {
      $("#coupon_code").data("action") || $("#coupon_code_input").val(""),
        orderpaymenupdate();
    }),
      $("#order_type").on("change", function () {
        for (
          var e = document.querySelectorAll("#order_input_list div"), t = 0;
          t <= e.length;
          t++
        )
          "bireysel" == $(this).val() &&
            "kurumsal" == $(e[t]).data("type") &&
            ($(e[t]).addClass("d-none"),
            $(".order_inputer").prop("required", !1)),
            "kurumsal" == $(this).val() &&
              "kurumsal" == $(e[t]).data("type") &&
              ($(e[t]).removeClass("d-none"),
              $(".order_inputer").prop("required", !0));
      });
  }),
  $("#emailAddress").keyup(function () {
    var e = (e = this.value.replace(" ", "")).replace(/[^A-z 0-9-@._]/g, "");
    this.value = e.trim();
  }),
  $("#phoneNumber").keyup(function () {
    var e = (e = this.value.replace(" ", "")).replace(/[^0-9]/g, "");
    this.value = e.trim();
  });
const buton = document.querySelector(".coupon_code_click");
function MailPhone() {
  var e = document.forms.OrderForm.sp_musteri_adi.value,
    t = document.forms.OrderForm.sp_musteri_mail.value,
    a = document.forms.OrderForm.sp_musteri_telefon.value;
  return e.length < 1
    ? (titresim("#CostumerName"),
      document.getElementById("CostumerName").focus(),
      !1)
    : a.length < 10
    ? (titresim("#phoneNumber"),
      document.getElementById("phoneNumber").focus(),
      !1)
    : 0 !=
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(t) ||
      (titresim("#emailAddress"),
      document.getElementById("emailAddress").focus(),
      !1);
}
function orderajax(e, t) {
  $.ajax({
    type: "POST",
    url: window.location.href + "?action=code",
    data: e,
    dataType: "JSON",
    success: function (e) {
      delete buton.dataset.statu,
        (buton.dataset.statu = e.coupon),
        ("coupon" == t) & !e.coupon &&
          (titresim("#sp_musteri_kupon"),
          $("#sp_musteri_kupon").prop("readonly", !1)),
        ("coupon" == t) & e.coupon &&
          $("#sp_musteri_kupon").prop("readonly", !0),
        e.payment_info
          ? ($("#payment_info").hasClass("d-none") &&
              $("#payment_info").removeClass("d-none"),
            $("#payment_info").html(e.payment_info))
          : $("#payment_info").hasClass("d-none") ||
            $("#payment_info").addClass("d-none"),
        $("#sp_musteri_kupon").val(e.coupon_code),
        $("#nivu_pk_fee").html(e.product_amount),
        $("#nivu_service_fee").html(e.service_amount),
        $("#nivu_discount").html(e.discount_amount),
        $("#nivu_amount").html(e.total_amount),
        $(".coupon_code_click").html(e.coupon_button_text),
        $(".coupon_code_click").attr("class", e.coupon_button_class);
    },
  });
}
function Wizardkontrol() {
  if (4 == step_next) return !0;
  for (
    var e = document.querySelectorAll("#order_section_list fieldset"), t = 0;
    t < e.length;
    t++
  )
    $(e[t]).data("section") == step_next
      ? ($(e[t]).addClass("d-block"),
        $(".step-" + step_next).prop("required", !0),
        2 == step_next &&
          "bireysel" == order_type &&
          $(".order_inputer").prop("required", !1))
      : ($(e[t]).hasClass("d-block") && $(e[t]).removeClass("d-block"),
        $(e[t]).addClass("d-none"));
  var a = document.querySelectorAll("#progressbar li");
  for (t = 0; t < a.length; t++)
    $(a[t]).data("wizart") == step_next &&
      "next" == step_action &&
      $(a[t]).addClass("active"),
      $(a[t]).data("wizart") == step_now &&
        "back" == step_action &&
        $(a[t]).removeClass("active");
  return !1;
}
function titresim(e) {
  return (
    $(e).addClass("nonshake").attr("style", "background:#f2f2f2"),
    setTimeout(function () {
      $(e).removeClass("nonshake").attr("style", "");
    }, 500),
    !1
  );
}
function hizligetir(e) {
  "start" == e &&
    ($(".alans1, .alan1").attr("style", "display:none;"),
    $(".alans2, .alan2").attr("style", "display:block;"),
    $("#ackapa").attr("onclick", "hizligetir('turn')"),
    $("#ackapa").html('<i class="fas fa-list"></i> Servislere Geç')),
    "turn" == e &&
      ($(".alans1, .alan1").attr("style", "display:block;"),
      $(".alans2, .alan2").attr("style", "display:none;"),
      $("#ackapa").attr("onclick", "hizligetir('start')"),
      $("#ackapa").html('<i class="fas fa-bolt"></i> Hızlı Siparişe Geç'));
}
$(".dyontem-item ").click(function () {
  if (!$(this).data("statu")) return titresim(this);
  $("#payment_method").val($(this).data("medhod"));
  for (
    var e = document.querySelectorAll(".default-odeme div"), t = 0;
    t < e.length;
    t++
  )
    $(e[t]).data("medhod") == $(this).data("medhod")
      ? $(e[t]).addClass("selected")
      : $(e[t]).hasClass("selected") && $(e[t]).removeClass("selected");
  var a = $("#sp_musteri_kupon").val(),
    o = $(this).data("medhod");
  (order_data = { action: "response", sp_musteri_kupon: a, sp_odeme: o }),
    orderajax(order_data, "payment");
}),
  $(".coupon_code_click").click(function () {
    if ("" === $("#sp_musteri_kupon").val())
      return titresim("#sp_musteri_kupon");
    if ("true" == buton.dataset.statu) var e = "";
    else e = $("#sp_musteri_kupon").val();
    orderajax(
      {
        action: "response",
        sp_musteri_kupon: e,
        sp_odeme: $("#payment_method").val(),
      },
      "coupon"
    );
  }),
  $(".step-go").click(function () {
    if (
      ((step_now = $(this).data("now")),
      (step_next = $(this).data("step")),
      3 == step_next && !MailPhone())
    )
      return !1;
    (step_action = $(this).data("action")),
      "back" == step_action && $(".step-" + step_now).prop("required", !1);
  }),
  (order_type = "bireysel"),
  $("#order_type").on("change", function () {
    var e = document.querySelectorAll("#order_input_list div");
    order_type = $(this).val();
    for (var t = 0; t <= e.length; t++)
      "bireysel" == $(this).val() &&
        "kurumsal" == $(e[t]).data("type") &&
        ($(e[t]).addClass("d-none"), $(".order_inputer").prop("required", !1)),
        "kurumsal" == $(this).val() &&
          "kurumsal" == $(e[t]).data("type") &&
          ($(e[t]).removeClass("d-none"),
          $(".order_inputer").prop("required", !0));
  });
