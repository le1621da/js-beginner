//
// Blackjack
//

requirejs(["helper/cards","helper/blackjack"], function(blackjackFunctions) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
});

// DOM variables
let title = document.getElementById("page_title");
let welcomeText = document.getElementById("welcome_text");
let playersHeader = document.getElementById("players_header");
let playersHand = document.getElementById("players_hand");
let playersScore = document.getElementById("players_score");
let dealersHeader = document.getElementById("dealers_header");
let dealersHand = document.getElementById("dealers_hand");
let dealersScore = document.getElementById("dealers_score");
let resultsArea = document.getElementById("results_area");
let newGameButton = document.getElementById("new_game_button");
let dealButton = document.getElementById("deal_button");
let twistButton = document.getElementById("twist_button");
let stickButton = document.getElementById("stick_button");


  // Game variables
let isGameStarted = false,
    isGameOver = false,
    hasPlayerWon = false,
    dealersCards = [],
    playersCards = [],
    dealerScore = 0,
    playerScore = 0,
    playersHandAndScoreString = "",
    dealersHandAndScoreString = "",
    deck = [];


// Start a new game... look out for a click and then execute the function
newGameButton.addEventListener("click", function(){
  if (isGameOver) resetGameVariables();
  
  // Set game variables
  isGameStarted = true;
  isGameOver = false;
  hasPlayerWon = false;
  
  // Amend the html
  setNewGameState();
})


// Player triggers 'deal'
dealButton.addEventListener("click", function(){
  // Amend the html
  setInGameState();
  
  // Opening deal
  deck = buildAndShuffleADeckOfCards();
  deal(playersCards, deck);
  deal(playersCards, deck);
  deal(dealersCards, deck);
  
  // Update scores and output
  checkGameStatus(false);
  playersHandAndScoreString = outputPlayersScore();
  dealersHandAndScoreString = outputDealersScore();
  
})


// Player adds cards
twistButton.addEventListener("click", function(){
  deal(playersCards, deck);
  
  // Update results and output
  checkGameStatus(false);
  playersHandAndScoreString = outputPlayersScore();
  outputDealersScore();
})


// Dealer plays
stickButton.addEventListener("click", function(){  
  var status = "";
  
  // Dealer plays until there's a winner...
  do  {
    deal(dealersCards, deck);
    status = checkGameStatus(true);
    outputDealersScore();
  }
  while (status === "Pending");
  
})


function outputPlayersScore(){ 
  playersHand.innerText = getHandString(playersCards);
  playersScore.innerText = "(Score " + playerScore + ")";
}


function outputDealersScore(){dealersHand.innerText = getHandString(dealersCards);
  dealersScore.innerText = "(Score " + dealerScore + ")";
}


function checkGameStatus(playerHasFinished){
  playerScore = getScore(playersCards);
  dealerScore = getScore(dealersCards);
  let status = checkScores(playerHasFinished, playerScore, dealerScore);
  
  if (status.winner !== "Pending") {
    resultsArea.innerText = "WINNER: " + status.winner + ".  ";
    isGameOver = true;
  }
  
  if (isGameOver) setEndGameState();
  return status.winner;
  
}


function setNewGameState(){
  welcomeText.innerText = "";

  playersHeader.style.visibility = "hidden";
  playersHand.innerText = "";
  playersScore.innerText = "";

  dealersHeader.style.visibility = "hidden";
  dealersHand.innerText = "";
  dealersScore.innerText = "";

  newGameButton.style.visibility = "hidden";
  dealButton.style.visibility = "visible";
  
  resultsArea.innerText = "";
}


function setInGameState() {
  playersHeader.style.visibility = "visible";
  dealersHeader.style.visibility = "visible";
  dealButton.style.visibility = "hidden";
  twistButton.style.visibility = "visible";
  stickButton.style.visibility = "visible";
  twistButton.style.display = "inline";
  twistButton.style.display = "inline";
}


function setEndGameState() {
  newGameButton.style.visibility = "visible";
  twistButton.style.visibility = "hidden";
  stickButton.style.visibility = "hidden";
}


function resetGameVariables(){
    isGameStarted = false;
    isGameOver = false;
    hasPlayerWon = false;
    dealersCards = [];
    playersCards = [];
    dealerScore = 0;
    playerScore = 0;
    playersHandAndScoreString = "";
    deck = [];
}