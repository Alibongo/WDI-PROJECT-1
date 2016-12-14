$(start);

var $score;
var $level;
var $highScore;
var level = 1;

//start button. Original error. had everything in the start function!
// made another function PickBox to be called and trigger start. See line 22.
function start() {
  $score = $('#score span');
  $level = $('#level span');
  $highScore = $('#highScore span');

  $level.text(level);
  $score.value = 0;
  $score.text($score.value);
  $highScore.value = 0;
  $highScore.text($score.value);

  $('.start').on('click', pickBox);
}

function pickBox() {
  var $lis = $('li');
  setInterval(function() {

    var random = Math.floor(Math.random() * $lis.length);
    var randomNumForClass = Math.floor(Math.random() * $lis.length);
    var randomClass = (randomNumForClass < 9) ? 'zombie' : 'human';

    $($lis[random]).attr('class', randomClass);
    setTimeout(function() {
      if ($($lis[random]).attr('class') === 'zombie') {
        $score.text($score.value -= 5);
      }
      $($lis[random]).attr('class', 'grave');
    }, (1500 / (level)));
  }, 600);

  $lis.on('click', function() {
    if ($(this).attr('class') === 'zombie') {
      $score.text($score.value += 15);
      new Audio('audio/groan.wav').play();
      $(this).attr('class', 'grave');
      console.log('groan');
    } else if ($(this).attr('class') === 'human') {
      $score.text($score.value -= 10);
      new Audio('audio/scream.wav').play();
      $(this).attr('class', 'grave');
    } else {
      $score.text($score.value -= 15);
    }
    checkPoints();
  });

  function checkPoints() {
    if ($score.value > $highScore.value) {
      $highScore.value = $score.value;
      $highScore.text($highScore.value);
    }
    if ($score.value > -20 && $score.value < 100) {
      level = 1;
    } else if ($score.value >= 100 && $score.value < 150) {
      level = 2;
    } else if ($score.value >= 150 && $score.value < 250) {
      level = 3;
    } else if ($score.value >= 250 && $score.value < 350) {
      level = 4;
    } else if ($score.value >= 350 && $score.value < 450) {
      level = 5;
    } else if ($score.value <= -20) {

    }
    $level.text(level);

  }

  $(document).ready(function() {
    $('#refresh').click(function() {
      location.reload();
    });
  });
}
