$(document).ready(function () {
  AOS.init({
    once: true,
    duration: 1000,
    disable: function () { return window.innerWidth < 991; }
  });

  function updatePricing(planBlock) {
    var period = planBlock.attr('data-plan-active');          // monthly / yearly
    var planType = planBlock.attr('data-plan-active-obl');    // oblako / korobka

    planBlock.find('.dynamic-value').each(function () {
      var dataAttr = 'data-' + period + '-' + planType;
      var value = $(this).attr(dataAttr);

      // fallback на облако, если коробка не задана
      if (!value) value = $(this).attr('data-' + period + '-oblako');

      if (value) $(this).text(value);
    });
  }

  // Инициализация всех планов
  $('[data-plan-id]').each(function () {
    var $plan = $(this);
    if (!$plan.attr('data-plan-active')) $plan.attr('data-plan-active', 'monthly');
    if (!$plan.attr('data-plan-active-obl')) $plan.attr('data-plan-active-obl', 'oblako');
    updatePricing($plan);
  });

  // Клик по переключателям
  $('[data-pricing-trigger]').on('click', function () {
    var trigger = $(this).attr('data-pricing-trigger');
    var target = $(this).attr('data-target');
    var planBlock = $('[data-plan-id="' + trigger + '"]');

    if (target === 'monthly' || target === 'yearly') {
      planBlock.attr('data-plan-active', target);
      $(this).addClass('active').siblings().removeClass('active');
    } else if (target === 'oblako' || target === 'korobka') {
      planBlock.attr('data-plan-active-obl', target);
      $(this).addClass('active').siblings().removeClass('active');
    }

    updatePricing(planBlock);
  });

  inlineSVG.init({
    svgSelector: '.inline-svg', // the class attached to all images that should be inlined
    initClass: 'inline-svg-active', // class added to <html>
  });

  //***ISOTOPE***
  // Portfolio-01
  $(window).load(function () {
    $(".navigation-active").isotope({
      itemSelector: ".grid-item",
      layoutMode: "fitRows"
    });
  });

  $(window).load(function () {
    $('.portfolio-v2').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1,
      }
    })
  })

  // change is-checked class on buttons
  $('.isotope-nav').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'a', function () {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });

  // filter items on button click
  $(".navigation-list").on("click", "li", function () {
    $(this).addClass("active").siblings().removeClass("active");
    var filterValue = $(this).attr("data-filter");
    $(".isotope-navigation").isotope({
      filter: filterValue
    });
  });
  $(".home-7_testimonial-card-wrapper").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    cssEase: 'linear'
  });
  $(".home-10_testimonial-widget-wrapper").slick({
  })
});


$(document).ready(function() {
  // Функция обновления цены
  function updatePrice(planBlock) {
    var planType = planBlock.attr('data-plan-active-obl'); // oblako / korobka

    planBlock.find('.plan').each(function() {
      var $plan = $(this);
      var $dynamic = $plan.find('.dynamic-value, .plan__title'); // ищем все цены
      var $activeUser = $plan.find('.price__counts a.white-active');

      if ($activeUser.length) {
        var users = $activeUser.data('users'); // получаем выбранное количество пользователей
        var attrName = 'data-' + planType + '-' + users; // формируем атрибут
        var value = $dynamic.attr(attrName);

        if (!value) value = $dynamic.text(); // fallback на существующую цену
        $dynamic.text(value);
      }
    });
  }

  // Инициализация блоков при загрузке
  $('[data-plan-id]').each(function() {
    var $planBlock = $(this);
    if (!$planBlock.attr('data-plan-active-obl')) $planBlock.attr('data-plan-active-obl','oblako');
    updatePrice($planBlock);
  });

  // Переключатель Облако / Коробка
  $('[data-pricing-trigger]').on('click', function() {
    var target = $(this).attr('data-target'); // oblako / korobka
    var planBlock = $('[data-plan-id="' + $(this).attr('data-pricing-trigger') + '"]');
    planBlock.attr('data-plan-active-obl', target);

    // меняем активный класс на переключателе
    $(this).addClass('active').siblings().removeClass('active');

    updatePrice(planBlock);
  });

  // Переключение количества пользователей
  $('.price__counts a').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var planBlock = $this.closest('[data-plan-id]');

    // меняем активный класс у кнопок
    $this.addClass('white-active').siblings().removeClass('white-active');

    updatePrice(planBlock);
  });
});


$(window).on('load', function () {
  $('#clock').countdown('2024/10/10', function (event) {
    var $this = $(this).html(event.strftime(''
      + '<span class="counter-item">%d <span class="counter-postfixer">Days</span></span> : '
      + '<span class="counter-item">%H <span class="counter-postfixer">Hours</span></span> : '
      + '<span class="counter-item">%M <span class="counter-postfixer">Minutes</span></span> : '
      + '<span class="counter-item">%S <span class="counter-postfixer">Seconds</span></span> '));
  });
});

$(window).on('load', function () {
  $("body").addClass("loading");
  setTimeout(function () {
    $(".preloader-wrapper").fadeOut(500);
    $("body").removeClass("loading");
  }, 1000);
  setTimeout(function () {
    $(".preloader-wrapper").remove();
  }, 2000);
});

//pagination

$(document).ready(function () {
  // change active class on pagination
  $('.pagination-wrapper').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', '.btn-main', function () {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });
});


// $(document).ready(function() {

//   function applyPackage($btn) {

//     // Снять активность со всех
//     $("[data-package]")
//       .removeClass("btn-primary-l08")
//       .addClass("btn-outline-l08")
//       .removeClass("active");

//     // Назначить активной нужные классы
//     $btn
//       .removeClass("btn-outline-l08")
//       .addClass("btn-primary-l08")
//       .addClass("active");

//     const titles = JSON.parse($btn.attr("data-titles"));
//     const texts = JSON.parse($btn.attr("data-texts"));
//     const ctaTitle = $btn.attr("data-cta-title");
//     const ctaSubTitle = $btn.attr("data-cta-subtitle");

//     const $cards = $(".feature-card");

//     $cards.each(function(i) {
//       if (titles[i]) {
//         $(this).show();

//         $(this).find("[data-title]").text(titles[i]);

//         let raw = texts[i] || "";
//         let items = raw
//           .split(".")
//           .map(s => s.trim())
//           .filter(s => s.length > 0);

//         let ul = '<ul class="list-style-bullet">' +
//           items.map(t => `<li>${t}</li>`).join("") +
//           '</ul>';

//         $(this).find("[data-text]").html(ul);

//       } else {
//         $(this).hide();
//       }
//     });

//     $(".cta-title").text(ctaTitle);
//     $(".cta-subtitle").text(ctaSubTitle);
//   }

//   // Клик
//   $("[data-package]").on("click", function(e) {
//     e.preventDefault();
//     applyPackage($(this));
//   });

//   // Активируем "БАЗА" при загрузке
//   applyPackage($('[data-package="base"]'));
// });


