!(function (e) {
  "use strict";
  if (e(".main-nav").length) {
    var a = e(".main-nav").clone().prop({ class: "mobile-nav d-lg-none" });
    e("body").append(a),
      e("body").prepend(
        '<button aria-label="dotbtn" type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>'
      ),
      e("body").append('<div class="mobile-nav-overly"></div>'),
      e(document).on("click", ".mobile-nav-toggle", function (a) {
        e("body").toggleClass("mobile-nav-active"),
          e(".mobile-nav-toggle i").toggleClass("fa-times fa-bars"),
          e(".mobile-nav-overly").toggle();
      }),
      e(document).on("click", ".mobile-nav .drop-down > a", function (a) {
        a.preventDefault(),
          e(this).next().slideToggle(300),
          e(this).parent().toggleClass("active");
      }),
      e(document).click(function (a) {
        var o = e(".mobile-nav, .mobile-nav-toggle");
        o.is(a.target) ||
          0 !== o.has(a.target).length ||
          (e("body").hasClass("mobile-nav-active") &&
            (e("body").removeClass("mobile-nav-active"),
            e(".mobile-nav-toggle i").toggleClass("fa-times fa-bars"),
            e(".mobile-nav-overly").fadeOut()));
      });
  } else
    e(".mobile-nav, .mobile-nav-toggle").length &&
      e(".mobile-nav, .mobile-nav-toggle").hide();
})(jQuery);
