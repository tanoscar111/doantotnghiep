jQuery(document).ready(function ($) {
  $(function () {
    function showSlide(n) {
      $body.unbind("mousewheel");

      currSlide = Math.min(Math.max(0, currSlide + n), $slide.length - 1);

      var displacment = window.innerWidth * currSlide;

      $slides.css("transform", "translateX(-" + displacment + "px)");

      setTimeout(bind, 700);

      $("nav a.active").removeClass("active");
      $($("a")[currSlide]).addClass("active");
    }

    function bind() {
      $body.bind("false", mouseEvent);
    }

    function mouseEvent(e, delta) {
      showSlide(delta >= 0 ? -1 : 1);
      e.preventDefault();
    }

    $("nav a, .main-btn a").click(function (e) {
      var newslide = parseInt($(this).attr("href")[1]);

      var diff = newslide - currSlide - 1;
      showSlide(diff);
      e.preventDefault();
    });

    $(window).resize(function () {
      var displacment = window.innerWidth * currSlide;
      $slides.css("transform", "translateX(-" + displacment + "px)");
    });

    var $body = $("body");
    var currSlide = 0;
    var $slides = $(".slides");
    var $slide = $(".slide");

    $($("nav a")[0]).addClass("active");

    $body.bind("false", mouseEvent);
  });

  $("#form-submit .date").datepicker({});

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });
});
$(document).ready(function () {
  // navigation click actions
  $(".scroll-link").on("click", function (event) {
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID("#" + sectionID, 750);
  });
  // scroll to top action
  $(".scroll-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
  // mobile nav toggle
  $("#nav-toggle").on("click", function (event) {
    event.preventDefault();
    $("#main-nav").toggleClass("open");
  });
});
// scroll function
function scrollToID(id, speed) {}
