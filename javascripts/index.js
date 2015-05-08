$(document).ready(function() {

  function generateDots(num) {
    for (var i = 0; i < num; i++) {
      var $dot = $("<div class='dot'></div>").css({
        background : randRGB()
      });
      $('#dot-container').append($dot);
    }
  }

  var makeDotsScroll = function(speed) {
    var i = 0
    var $dots = $('.dot');
    var length = $dots.length;
    setInterval(function() {
      i < length ? i++ : i = 0
      $($dots[i]).addClass("expand")
      $($dots[i + length / 2]).addClass("expand")
      $($dots[i-1]).removeClass("expand")
    }, speed);
  }

  generateDots(1500);
  makeDotsScroll(10);

});