var options = {
    prices: [{
        name: 'iphone12'
      },
      {
        name: '100'
      },
      {
        name: 's21'
      },
      {
        name: '3000'
      },
      {
        name: 'TV'
      },
      {
        name: '1000'
      },
      {
        name: '500'
      },
      {
        name: 'ipad'
      },
      {
        name: '5000'
      },
      {
        name: '50บาท',
        pic: '50b'
      }
  
    ],
    duration: 2000,
    clockWise: false
  };
  
  var $r = $('.roulette').fortune(3);
  
  var clickHandler = function () {
    $('.spinner').off('click');
    $('.spinner span').hide();
    //var price = Math.floor((Math.random() * 8));
    $r.spin().done(function (price) {
      $('.price').text(price.name);
      $('.spinner').on('click', clickHandler);
      $('.spinner span').show();
    });
  };
  
  $('.spinner').on('click', clickHandler);