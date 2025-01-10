document.addEventListener('DOMContentLoaded', function () {
  const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 3,
    spaceBetween: 40,
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 30,
        loop: true,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination1",
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        },
      },
      576: {
        spaceBetween: 30,
        loop: true,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination1",
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        },
      },
      767: {
        spaceBetween: 15,
        slidesPerView: 3
      },
      992: {
        spaceBetween: 40,
        slidesPerView: 3
      },
      1200: {
        spaceBetween: 40,
        slidesPerView: 3
      }
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $('.menu-trigger').click(function () {
      $('nav ul').toggleClass('active');
    });
    $(window).resize(function () {
      if ($(window).width() > 1200) {
        $('nav ul').removeAttr('style');
      }
    });
    let menuBtn = document.querySelector('.menu-trigger');
    menuBtn.addEventListener('click', function () {
      menuBtn.classList.toggle('active');
    });
  });
});
// svg
$(function () {
  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, else we gonna set it if we can.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });
});
