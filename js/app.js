$(start);

// ** Need to place an if statement to say, don't run zombies after so many goes. then refresh.

function start(){

  // Scoring set to zero value to begin with.
  var $score = $('.score span');
  $score.value = 0;
  $score.text($score.value);

  // var $zombie;
  // var $human;
  // var $grave;
  // var $gridArray[];

  var $end = $(){
  alert("Urgh you dead!");
};
setTimeout(end, 2000);

  // **lives variable. This needs to then be updated by zombie click
  // var $lives = $('.lives span');
  // $lives.value = 0;
  // $lives.text($lives.value);

  // **human
  // var $human = $('li');
  // need to think of how the humans come up in the spare cells. There needs to be an array that picks where these humans pop up.

  // need to update the score - so they loose a life.
  //** hitting the blank space. you're fine. nothing is triggered.
  // ** Need to set the Zombies pop up animation


  var $lis = $('li');

  setInterval(function() {
    if ($('.zombie').length < 3) {
      var random = Math.floor(Math.random() * $lis.length);
      $($lis[random]).attr('class', 'zombie');
    }
  }, 500);


  $lis.on('click', function() {
    if ($(this).attr('class') === 'zombie') {
      $score.text($score.value += 10);
      $(this).attr('class', 'grave');
    } else {
      $score.text($score.value -= 10);
    }
  });
}

$human.on('click', function()){
  if
}

// var $zombieClick = $('li'); {
//   $zombieClick.on =('click', function(){
//     var $this = $(this);
//     toggleClass
// //     console.log(this.fileName);
//
//     var audio = new Audio('../audio/'+ $this.attr('id') + '.mp3');
//     audio.play();
//   };
// }
//
//
//
//










//
// $('li').on('click', function(){
//   var $element = $(this);
//   // swing refers to one of the default easing options
//   $element.fadeOut('slow','swing', function(){
//     setTimeout(function(){
//       $element.fadeIn();
//     },1000);













//
//
// $(function(){
// // ** Global Variables
//   // var $score = '';
//   // var $lives = '';
//   //
// var grave = '';
//   // var grid = '';
//
//
//   // Welcoming message  - start?
//   // player hits start
//   // first zombie appears
//   // player hits zombie
//   // player misses zombie
//   //noise triggered when zombie is hit
//   // zombie wobbles
//   // when hit, triggers score update
//   // when missed triggers loss of life
//   // loss of life triggers message and life update
//   //
// });
//
//
//
// var $squares= $ flash (element){
//   element.addClass('red');
//   element.fadeOut('swing', function(){
//     setTimeout(function(){
//       element.fadeIn();
//     },1000);
//   });
// }
// ]
//
//   $('li').on('click', function(){
//     $('.grid').append($(this));
//   });
