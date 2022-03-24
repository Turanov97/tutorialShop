function zero_first_format(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}

/* функция получения текущей даты и времени */
function date_time() {
  var current_datetime = new Date();
  var hours = zero_first_format(current_datetime.getHours());
  var minutes = zero_first_format(current_datetime.getMinutes());
  var seconds = zero_first_format(current_datetime.getSeconds());

  return hours + ":" + minutes + ":" + seconds;
}

/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
// document.getElementById('current_date_time_block').innerHTML = date_time();
// document.getElementById("current_date_time").innerHTML = date_time();

setInterval(function () {
  document.getElementById("current_date_time_block").innerHTML = date_time();
  document.getElementById("current_date_time").innerHTML = date_time();
}, 1000);

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 6,
  // centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper__my", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


$(function () {
  /* menu nav bar */
  $("#nav__box").on("click", function () {
    $(this).toggleClass("active");
    $("#nav__toggle").toggleClass("active");
    $("#nav__inner").toggleClass("active");
  });
  $('.header__select').on('click', function() {
    $('.header__box').toggleClass('active')
  })
});
