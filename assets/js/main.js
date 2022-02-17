AOS.init();

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  // freeMode: true,
  watchSlidesProgress: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: swiper,
  },
});

var programModal = new Swiper(".program_model .swiper", {
  spaceBetween: 30,
  slidesPerView: 3,
  navigation: {
    nextEl: ".program_model .swiper-button-next",
    prevEl: ".program_model .swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

$('.pull-table').on('click', function(e) {
  $('.cta-container').toggleClass("open");
  e.stopPropagation();
  
  if(window.innerWidth <  768) {
    if($('.cta-container').hasClass('open')) {
      $('.pull-table p').text('x');
      $('.pull-table').addClass("to-x");
    } else {
      $('.pull-table p').text('Contact Us');
      $('.pull-table').removeClass("to-x");
    }
  }
});

// if(window.innerWidth < 768) {
//   $('.pull-table p').text('x');
// }

$(document).ready(function() {
  setTimeout(function() {
    $('.eapps-link').css("visibility", "hidden")
  }, 2000)
})

if(window.innerWidth < 768) {
window.onscroll = function() {headscroll()};

  var header = $('.navbar');
  var sticky = $('.navbar').height();

  function headscroll() {
    // console.log('test')
      if (window.pageYOffset > sticky) {
          header.addClass('sticky');
      } else {
          header.removeClass('sticky');
      }
  }
}