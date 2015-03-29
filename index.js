$(document).ready(function() {

  function getRandom8BitInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomRGB() {
    return "rgb(" + getRandom8BitInt(0,256) + "," + getRandom8BitInt(0,256) + "," + getRandom8BitInt(0,256) + ")";
  }

  function generateDots(num) {
    for (var i = 0; i < num; i++) {
      var dot = document.createElement('DIV');
      dot.className = 'dot';
      dot.style.backgroundColor = getRandomRGB();
      document.getElementById('dot-container').appendChild(dot);
    }
  }

  var makeDotsScroll = function(speed) {
    var i = 0
    var dotArray = document.getElementsByClassName("dot")
    var length = dotArray.length
    window.setInterval(function() {
      i < length ? i++ : i = 0
      $(dotArray[i]).addClass("expand")
      $(dotArray[i + length / 2]).addClass("expand")
      $(dotArray[i-1]).removeClass("expand")
    },speed);
  }

  generateDots(1500);
  makeDotsScroll(10);

});
