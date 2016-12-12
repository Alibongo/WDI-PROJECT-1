$(start);



//       start();
// ** Need to place an if statement to say, don't run zombies after so many goes. then refresh.

// var $zombie;
// var $human;
// var $grave;
// var $gridArray[];

//   var $end = $(){
//   alert("Urgh you dead!");
// };
// setTimeout(end, 2000);

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

// **Original Working code - zombie only
// var $zombie = $('li');
//
//   setInterval(function() {
//     if ($('.zombie').length < 3) {
//       var random = Math.floor(Math.random() * $zombie.length);
//       $($zombie[random]).attr('class', 'zombie');
//     }
//   }, 500);
//
//
//   $zombie.on('click', function() {
//     if ($(this).attr('class') === 'zombie') {
//       $score.text($score.value += 10);
//       $(this).attr('class', 'grave');
//     } else {
//       $score.text($score.value -= 10);
//     }
//   });
// }
// var $availableSquares;
// var $availableSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


// Adapting earlier Zombie function to use this array rather than just randomly picking a number
  //random index from the available squares index.
// retrieving the value of the element at that index
// var randomElement  = $availableSquares[random];
//splicing out the element at index so that it can't be selected again
// $availableSquares.splice(random, 1);
//randomly selected element from the available squares array.




// var $lis = $('li');
//
// setInterval(function() {
//
//   var random = Math.floor(Math.random() * $lis.length);
//   var randomClass = (random < 9) ? 'zombie' : 'human';
//
//   $($lis[random]).attr('class', randomClass);
//   setTimeout(function() {
//     $($lis[random]).attr('class','grave');
//   }, (4000 / (random+level)));
// }, 600);




var $score;
var $level;
var $highScore;

function start(){
// function $startGame('.start')
  // Scoring set to zero value to begin with.
  $score = $('.score span');
  $level = $('.level span');
  $highScore = $('.highScore span');

  var level = 1;
  $level.text(level);
  $score.value = 0;
  $score.text($score.value);
  $highScore.value = 0;
  $highScore.text($score.value);


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
      $($lis[random]).attr('class','grave');
    }, (1000 / (level)));
  }, 600);

  $lis.on('click', function() {
    if ($(this).attr('class') === 'zombie') {
      $score.text($score.value += 10);
      $(this).attr('class', 'grave');
    } else if ($(this).attr('class') === 'human') {
      $score.text($score.value -= 20 );
      $(this).attr('class', 'grave');
    } else {
      $score.text($score.value -= 5);
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
    } else if ($score.value <= -20){

    }
    $level.text(level);


  }



  // var $human = $('li');
  //
  // setInterval(function() {
  //   if ($('.human').length < 2) {
  //       // this is picking a random index from the available squares index.
  //     var random = Math.floor(Math.random() * $availableSquares.length);
  //       // this is retrieving the value of the element at that index
  //     var randomElement  = $availableSquares[random];
  //       // this is splicing out the element at that index so that it can't be selected again
  //     $availableSquares.splice(random, 1);
  //       // this is now using that randomly selected element from the available squares array.
  //     $($human[randomElement]).attr('class', 'human');
  //   }
  // }, 500);
  //
  //
  //
  // $human.on('click', function() {
  //   if ($(this).attr('class') === 'human') {
  //     $score.text($score.value -= 10);
  //     $(this).attr('class', 'grave');
  //   } else {
  //     $score.text($score.value -= 0);
  //   }
  //   // if ($score.value === 50)
  //   //   alert('game Over');
  // });


  // Refreshing via button
  $(document).ready(function(){
    $('#refresh').click(function(){
      location.reload();
    });
  });
  // refreshing the page automatically
  // setTimeout(function() {
  //   // location.reload();
  // }, 6000);

}


//
// // function checkForWin($score.value){
//   console.log($score.value);
// for (var i = 0; i< winningCombinations.length;)
//
// }



// function checkForWin(movesArray, player){
//   console.log(movesArray,player);
//   // we're incrementing on the winningCominbation array here:
//   for (var i = 0; i< winningCombinations.length; i++){
//     winCounter = 0;
//
//     for (var j = 0; j < winningCombinations[i].length; j++) {
//
//       // indexof searches through the array
//       if(movesArray.indexOf(winningCombinations [i][j]) !== -1){
//         winCounter++;
//       }
//       if (winCounter ===3){
//         alert('Game Over,' + player + ' Wins!');
//       }
//     }
//   }
// }







// how do I make the square  available again - pushing it back into the array of available squares.
// Index of  - push the index of the newly available squares in the lis array into the available squares array.






// $human.on('click', function()){
//   if
// }

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
