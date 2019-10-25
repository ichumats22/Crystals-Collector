//GLOBAL VARIABLES
//==============================================================================================================================================
//Arrays and Variables for holding data 

var targetNumber = 0;
var numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];
var imageOptions = ['assets/images/Blue Crystal.png', 'assets/images/Green Crystal.png', 'assets/images/Purple Crystal.png','assets/images/Yellow Crystal.png']
  
//Game Counters
var counter = 0;
var winCount = 0;
var lossCount = 0;

//FUNCTIONS
//==============================================================================================================================================
for (var i = 0; i < numberOptions.length; i++) {
  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr('src', imageOptions[i]);

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystal);
};

function startGame (){
  targetNumber = Math.floor((Math.random() * 120) + 19);

  //Reset
  counter = 0;
  $('#counter').text(counter);
  numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];

  //Populate numberToGuess
  $("#number-to-guess").text(targetNumber);


}

function roundComplete () {

  if (counter === targetNumber) {
    winCount ++;
    alert("You win!");
    
    //Update the win counter in HTML
    $('#winCount').text(winCount);
    startGame();
  }

  else if (counter >= targetNumber) {
    lossCount ++;
    alert("You lose!!");

    //Update the loss counter in HTML
    $('#lossCount').text(lossCount);
    startGame();
  }
}
//MAIN PROCESS
//==============================================================================================================================================

startGame();

//On-click events responds to button clicks of the crystal image
$(".crystal-image").on("click", function() {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
  $('#counter').text(counter);
  roundComplete();
});