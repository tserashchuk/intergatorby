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


$(document).ready(function () {

  function updatePricing(planBlock) {

    var period = planBlock.attr('data-plan-active');      // monthly / yearly
    var type = planBlock.attr('data-plan-active-obl');    // oblako / korobka

    planBlock.find('.dynamic-value, .plan__title').each(function () {

      var $price = $(this);
      var value = null;

      // ОБЛАКО
      if (type === 'oblako') {

        var attrName = 'data-' + period + '-oblako';
        value = $price.attr(attrName);

      }

      // КОРОБКА
      if (type === 'korobka') {

        var plan = $price.closest('.plan');
        var activeUser = plan.find('.price__counts a.white-active');

        if (activeUser.length) {

          var users = activeUser.data('users');
          var attrName = 'data-korobka-' + users;
          value = $price.attr(attrName);

        }

      }

      if (value) {
        $price.text(value);
      }

    });

  }

  function updatePlanBlocks(planBlock) {

    var type = planBlock.attr('data-plan-active-obl');
    var container = planBlock.closest('.integrator-price');

    if (type === 'oblako') {

      container.find('.plans-4').show();
      container.find('.plans-3').hide();
      container.find('.pricing-period').show();

    } else {

      container.find('.plans-4').hide();
      container.find('.plans-3').show();
      container.find('.pricing-period').hide();

    }

  }

  // ИНИЦИАЛИЗАЦИЯ
  $('[data-plan-id]').each(function () {

    var $planBlock = $(this);

    if (!$planBlock.attr('data-plan-active')) {
      $planBlock.attr('data-plan-active', 'monthly');
    }

    if (!$planBlock.attr('data-plan-active-obl')) {
      $planBlock.attr('data-plan-active-obl', 'oblako');
    }

    updatePricing($planBlock);
    updatePlanBlocks($planBlock);

  });

  // ПЕРЕКЛЮЧАТЕЛИ
  $('[data-pricing-trigger]').on('click', function () {

    var trigger = $(this).attr('data-pricing-trigger');
    var target = $(this).attr('data-target');
    var planBlock = $('[data-plan-id="' + trigger + '"]');

    // месяц / год
    if (target === 'monthly' || target === 'yearly') {

      planBlock.attr('data-plan-active', target);
      $(this).addClass('active').siblings().removeClass('active');

    }

    // облако / коробка
    if (target === 'oblako' || target === 'korobka') {

      planBlock.attr('data-plan-active-obl', target);
      $(this).addClass('active').siblings().removeClass('active');

      updatePlanBlocks(planBlock);

    }

    updatePricing(planBlock);

  });

  // КОЛИЧЕСТВО ПОЛЬЗОВАТЕЛЕЙ
  $('.price__counts a').on('click', function (e) {

    e.preventDefault();

    var $btn = $(this);
    var planBlock = $btn.closest('[data-plan-id]');

    $btn.addClass('white-active')
      .siblings()
      .removeClass('white-active');

    updatePricing(planBlock);

  });

});


/*MARKET*/ 
$(document).ready(function () {

  /* ---------------------------
     ОБНОВЛЕНИЕ ЦЕН ОБЛАКА
  --------------------------- */

  function updateCloudPrices() {

    var period = $('.plans-3[data-market-type="oblako"]').attr('data-market-period') || 'monthly';

    $('.plans-3[data-market-type="oblako"] .plan__title').each(function () {

      var price = $(this).attr('data-' + period);

      if (price) {
        $(this).text(price);
      }

    });

  }


  /* ---------------------------
     ОБНОВЛЕНИЕ ЦЕН КОРОБКИ
  --------------------------- */

  function updateBoxPrice(plan) {

    var activeUser = plan.find('.price__counts a.white-active');

    if (!activeUser.length) return;

    var users = activeUser.data('users');

    var priceElement = plan.find('.plan__title');

    var price = priceElement.attr('data-korobka-' + users);

    if (price) {
      priceElement.text(price);
    }

  }


  /* ---------------------------
     ОБЛАКО / КОРОБКА
  --------------------------- */

  $('[data-market-target]').on('click', function () {

    var target = $(this).data('market-target');

    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active');


    if (target === 'oblako') {

      $('[data-market-type="oblako"]').show();
      $('[data-market-type="korobka"]').hide();

      $('.pricing-period').show();

    }

    if (target === 'korobka') {

      $('[data-market-type="oblako"]').hide();
      $('[data-market-type="korobka"]').show();

      $('.pricing-period').hide();

    }


    /* ---------------------------
       МЕСЯЦ / ГОД
    --------------------------- */

    if (target === 'monthly' || target === 'yearly') {

      $('.plans-3[data-market-type="oblako"]').attr('data-market-period', target);

      updateCloudPrices();

    }

  });


  /* ---------------------------
     ПЕРЕКЛЮЧЕНИЕ ПОЛЬЗОВАТЕЛЕЙ
  --------------------------- */

  $('.price__counts a').on('click', function (e) {

    e.preventDefault();

    var btn = $(this);
    var plan = btn.closest('.plan');

    btn
      .addClass('white-active')
      .siblings()
      .removeClass('white-active');

    updateBoxPrice(plan);

  });


  /* ---------------------------
     ИНИЦИАЛИЗАЦИЯ
  --------------------------- */

  updateCloudPrices();

  $('.plans-3[data-market-type="korobka"] .plan').each(function () {
    updateBoxPrice($(this));
  });

});



$(document).ready(function () {

  function switchPackage(packageName) {

    $('[data-package-content]').each(function () {

      if ($(this).attr('data-package-content') === packageName) {
        $(this).show();
      } else {
        $(this).hide();
      }

    });

  }

  switchPackage('base');

  $('.navigation-list .btn').on('click', function () {

    var selectedPackage = $(this).data('package');

    $(this).closest('li')
      .addClass('active')
      .siblings()
      .removeClass('active');

    switchPackage(selectedPackage);

  });

});


$(document).ready(function () {
  function updateWebinars(filter) {

    $('[data-webinar-container]')
      .find('[data-status]')
      .each(function () {

        var status = $(this).attr('data-status');

        if (filter === 'all') {
          $(this).show();
        } else if (status === filter) {
          $(this).show();
        } else {
          $(this).hide();
        }

      });
  }

  // клик по фильтру
  $('.navigation-list .btn').on('click', function () {

    var filter = $(this).attr('data-filter');

    $(this).closest('li')
      .addClass('active')
      .siblings()
      .removeClass('active');

    updateWebinars(filter);

  });

  // инициализация
  updateWebinars('all');
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


