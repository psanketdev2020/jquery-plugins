
// hide-show
$(function () {

  $('.hide-btn').click(function () {
    $('.childDiv').hide(1000);
  });

  $('.show-btn').click(function () {
    $('.childDiv').show(1000);
  });

});

// fade
$(document).ready(function () {
  $(".fade-btn").click(function () {
    $(".box1").fadeIn();
    $(".box2").fadeIn("slow");
    $(".box3").fadeIn(3000);
  });

  $('.fade-out').click(function () {
    $('.box4').fadeOut();
    $('.box5').fadeOut('slow');
    $('.box6').fadeOut(3000);
  })

  $('.fade-toggle').click(function () {
    $('.box7').fadeToggle();
    $('.box8').fadeToggle('slow');
    $('.box9').fadeToggle(3000);
  })

  $('.fade-to').click(function () {
    $('.box10').fadeTo('slow', .15);
    $('.box11').fadeTo('slow', .4);
    $('.box12').fadeTo('slow', .75);
  })
});

// slide
$(document).ready(function () {
  $('.slide-main-1').click(function () {
    $('.slide-panel-1').slideDown();
  });

  $('.slide-main-2').click(function () {
    $('.slide-panel-2').slideUp();
  });

  $('.slide-main-3').click(function () {
    $('.slide-panel-3').slideToggle();
  });
});

// add class
$(function () {
  $('#addClass').click(function () {
    $(this).siblings().addClass('blue');
  });

  $('#removeClass').click(function () {
    $(this).siblings().removeClass('red');
  });

  $('#toggleClass').click(function () {
    $(this).siblings().toggleClass('green font-light');
  })
});


$(function () {

  // width-height
  $('.dimension-btn1').click(function () {
    const width = $('#div1').width();
    const height = $('#div1').height();
    let txt = '';
    txt += `width of div ${width} <br/>`;
    txt += `Height of div ${height}`;
    $('#div1').html(txt);
  });

  //innerWidth/innerHeight
  $('.dimension-btn2').click(function () {
    const width = $('#div2').width();
    const height = $('#div2').height();
    const innerWd = $('#div2').innerWidth();
    const innerHe = $('#div2').innerHeight();
    let txt = '';
    txt += `width of div ${width} <br/>`;
    txt += `Height of div ${height} <br/>`;
    txt += `innerWidth of div ${innerWd} <br/>`;
    txt += `innerHeight of div ${innerHe}`;
    $('#div2').html(txt);
  });

  $('.dimension-btn3').click(function () {
    let txt = '';
    txt += `Width of div ` + $('#div3').width() + `<br>`;
    txt += `Height of div ` + $('#div3').height() + `<br>`;
    txt += `outerWidth of div ` + $('#div3').outerWidth() + `<br>`;
    txt += `outerHeight of div ` + $('#div3').outerHeight() + `<br>`;
    $('#div3').html(txt);
  })

  $('.dimension-btn4').click(function () {
    let txt = '';
    txt += `Width of div ` + $('#div4').width() + `<br>`;
    txt += `Height of div ` + $('#div4').height() + `<br>`;
    txt += `outerWidth of div ` + $('#div4').outerWidth(true) + `<br>`;
    txt += `outerHeight of div ` + $('#div4').outerHeight(true) + `<br>`;
    $('#div4').html(txt);
  })
});

// filter
$(function () {
  $('.search').keyup(function () {
    let inputVal = $(this).val().toLowerCase();
    $('.tableData tr').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(inputVal) > -1)
    })
  })
})

// currency
$(document).ready(function () {
  $('.indianDemo').on('keyup', function () {
    let x = $('.indianDemo').val();
    x = x.toString();
    let lastThreeNumber = x.substring(x.length - 3);
    let remaningNumber = x.substring(0, x.length - 3);
    if (remaningNumber != '') {
      lastThreeNumber = ',' + lastThreeNumber;
    }
    let value = remaningNumber.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThreeNumber;
    $('.indianDemo').val(value);
    console.log(value);
    // $('.indianDemo').val(parseFloat(value));
    // alert(value)
  })
})

$(function () {

  // basic owl
  $('.basic-owl').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: {
      0: {
        items: 1.5,
        nav: false,
      },
      600: {
        items: 3.2,
      },
      1000: {
        items: 5
      }
    }
  });

  // center owl
  let owl = $('.center-owl').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    rtl: false,
    nav: true,
    margin: 50,
    responsiveClass: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: {
      600: {
        items: 4
      }
    }
  });
  owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
      owl.trigger('next.owl');
    } else {
      owl.trigger('prev.owl');
    }
    e.preventDefault();
  });
});

// slick slider
$(function () {
  $('.slick-single-item').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1.01,
    slidesToScroll: 1,
  });

  $('.fade-slick-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear'
  });

  $('.center-slick-slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3.2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1.4
        }
      }
    ]
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});

// datepicker
$(function () {
  $("#datepicker").datepicker("option", {
    "showAnim": fadeIn,
  });
});


// mCustomeScroll
$(document).ready(function () {
  $('.contomScroll').mCustomScrollbar({
    theme: 'dark',
    alwaysShowScrollbar: 2,
    mouseWheel: true,
    callbacks: {
      onInit: function () {
        console.log("Scrollbars initialized");
      }
    }
  });

  $('.xAxisScroll').mCustomScrollbar({
    theme: "light-3",
    axis: 'x',
  });
})

// lazy-loading
$(function () {

  // window.onscroll = function(ev) {
  //   lazyLoad();
  // }

  // function lazyLoad() {
  //   let lazyImg = $('img.lazy');
  //   for (let i = 0; i < lazyImg; i++) {
  //     if (eleInViewport(lazyImg[i])) {
  //       lazyImg[i].setAttribute('src', lazyImg[i].getAttribute('data-src'));
  //     }
  //   }
  // }
  // function eleInViewport(el){
  //   let rect = el.getBoundingClientRect();
  //   return (
  //     rect.top >=0 && 
  //     rect.left >= 0 &&
  //     rect.bottom <=  (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // };

  $('img.lazy').lazyload({
    effect: "fadeIn"
  });
})

// rangeslider
$(document).ready(function () {
  let priceVal = $('.rangeSlider').val();
  $('.price').text(priceVal);
  $('.rangeSlider').rangeslider({
    min: 50, max: 1000,
  }).on('change', function (e, value) {
    $('.price').text($(this).val());
  });


  $('.value').html($('.inputVal').val());
  $('.htmlInput').rangeslider({ polyfill: false }).on('change', function () {
    $('.html').text($(this).val());
  });
  $('.cssInput').rangeslider({ polyfill: false }).on('change', function () {
    $('.css').text($(this).val());
  });
  $('.jsInput').rangeslider({ polyfill: false }).on('change', function () {
    $('.js').text($(this).val());
  });
});

// chart
$(document).ready(function () {
  // bar chart
  let chart1 = document.querySelector('#myChart1').getContext('2d');
  let myChart1 = new Chart(chart1, {
    type: 'bar',
    data: {
      labels: ['HTML', 'CSS', 'JS', 'Jquery', 'SASS', 'Bootstrap', 'Angular'],
      datasets: [{
        label: 'Score Out Of 10',
        data: [8, 7, 6, 7, 6, 8, 6, 4, 10],
        backgroundColor: ['#cb997e', '#eddcd2', '#fff1e6', '#f0efeb', '#ddbea9', '#a5a58d', '#b7b7a4'],
        borderColor: ['#1d3557', '#1d3557', '#1d3557', '#1d3557', '#1d3557', '#1d3557', '#1d3557'],
        borderWidth: 1,
      }],
      options: {
        responsive: true,
        tooltips: {
          enabled: true,
          backgroundColor: 'red',
          displayColors: false,
          cornerRadius: 2,
        }
      }
    }
  });

  // line chart
  let chart2 = document.querySelector('#myChart2').getContext('2d');
  let lineChartData = {
    labels: ['HTML', 'CSS', 'JS', 'Jquery', 'SASS', 'Bootstrap', 'Angular'],
    datasets: [{
      label: 'Score Out Of 10',
      data: [8, 7, 6, 7, 6, 8, 6, 4, 10],
      backgroundColor: 'rgba(255, 0, 0, 0.25)',
      pointBackgroundColor: 'white',
    }]
  }

  let lineChartOptions = {
    responsive: true,
    tooltips: {
      titleFontFamily: 'Open Sans',
      backgroundColor: 'rgba(0,0,0,0.9)',
      titleFontColor: '#fff',
      caretSize: 5,
      cornerRadius: 2,
      xPadding: 10,
      yPadding: 10
    },
    scales: {
      Axes: [{
        gridLines: {
          color: 'rgba(200, 200, 200, 0.55)',
          lineWidth: 1
        }
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(200, 200, 200, 0.88)',
          lineWidth: 1
        }
      }]
    },
    elements: {
      line: {
        tension: 0.4
      }
    },
  }

  let myChart2 = new Chart(chart2, {
    type: 'line',
    data: lineChartData,
    options: lineChartOptions,
  });

  // pie chart
  let chart3 = document.querySelector('#myChart3').getContext('2d');

  let pieChartData = {
    labels: ['Americas', 'Europe', 'South-East Asia', 'Eastern Mediterranean', 'Africa'],
    datasets: [{
      label: 'Situation by WHO Region',
      data: ['45345051', '34220453', '12856723', '5669871', '2570474'],
      backgroundColor : ['rgb(255, 187, 48)', 'rgb(200, 214, 91)', 'rgb(82, 0, 174)', 'rgb(0, 174, 143)', 'rgb(10, 113, 213)'],
    }],
  }

  let pieCartOptions = {
    responsive: true,
    tooltips: {
      titleFontFamily: 'Open Sans',
      backgroundColor: 'rgba(0,0,0,0.9)',
      titleFontColor: '#fff',
      caretSize: 5,
      cornerRadius: 2,
      xPadding: 10,
      yPadding: 10
    },
  }

  let myChart3 = new Chart(chart3, {
    type: 'pie',
    data: pieChartData,
    options: pieCartOptions
  })


});
