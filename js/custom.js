
  $(window).scroll(function () {
if ($(window).scrollTop() >= 1) {
    $('.headerAll').addClass('fixedHeader');
} else {
    $('.headerAll').removeClass('fixedHeader');
}
});

jQuery("#carousel").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin:0,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 4000,
  smartSpeed: 800,
  nav: false,
  dots:true,
  responsive: {
    0: {
      items: 1
    }
  }
});
$(document).ready(function () {
  $('.peopleInner ul li a').mouseenter(function () {
      var locImage = $(this).parent('li').children('img').attr('src');
      $('.peopleImg img').attr('src', locImage).fadeIn();

  });
});