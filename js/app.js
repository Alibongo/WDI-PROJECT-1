$(start);

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

function start(){

  // Scoring set to zero value to begin with.
  var $score = $('.score span');
  $score.value = 0;
  $score.text($score.value);

  var $availableSquares = [0,1,2,3,4,5,6,7,8,9,10,11];


// Adapting earlier Zombie function to use this array rather than just randomly picking a number
  var $zombie = $('li');

  setInterval(function() {
    if ($('.zombie').length < 3) {
        // this is picking a random index from the available squares index.
      var random = Math.floor(Math.random() * $availableSquares.length);
        // this is retrieving the value of the element at that index
      var randomElement  = $availableSquares[random];
        //this is splicing out the element at that index so that it can't be selected again
      $availableSquares.splice(random, 1);
        // this is now using that randomly selected element from the available squares array.
      $($zombie[randomElement]).attr('class', 'zombie');
    }
  }, 500);

  $zombie.on('click', function() {
    if ($(this).attr('class') === 'zombie') {
      $score.text($score.value += 10);
      $(this).attr('class', 'grave');
    } else {
      $score.text($score.value -= 0);
    }
  });



  var $human = $('li');

  setInterval(function() {
    if ($('.human').length < 2) {
        // this is picking a random index from the available squares index.
      var random = Math.floor(Math.random() * $availableSquares.length);
        // this is retrieving the value of the element at that index
      var randomElement  = $availableSquares[random];
        // this is splicing out the element at that index so that it can't be selected again
      $availableSquares.splice(random, 1);
        // this is now using that randomly selected element from the available squares array.
      $($human[randomElement]).attr('class', 'human');
    }
  }, 500);



  $human.on('click', function() {
    if ($(this).attr('class') === 'human') {
      $score.text($score.value += -10);
      $(this).attr('class', 'grave');
    } else {
      $score.text($score.value -= 0);
    }
    // if ($score.value === 50)
    //   alert('game Over');
  });


// Refreshing via button
  $(document).ready(function(){
    $('#refresh').click(function(){
      location.reload();
    });
  });
// refreshing the page automatically
  setTimeout(function() {
    location.reload();
  },6000);

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
