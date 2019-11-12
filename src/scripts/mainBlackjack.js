/* eslint-disable no-undef */
//
// Blackjack
//

// eslint-disable-next-line no-undef
requirejs(['../data/cardsData', '../functions/deck', '../functions/blackjack'], () => {});


//
//  Give up on this.  Stick with javascript functions.
//  Just separate out the cards functions from deck functions
//  and wherever the printHand function should sit.
//
//


// DOM variables
// const title = document.getElementById('page_title');
const welcomeText = document.getElementById('welcome_text');
const playersHeader = document.getElementById('players_header');
const playersHand = document.getElementById('players_hand');
const playersScore = document.getElementById('players_score');
const dealersHeader = document.getElementById('dealers_header');
const dealersHand = document.getElementById('dealers_hand');
const dealersScore = document.getElementById('dealers_score');
const resultsArea = document.getElementById('results_area');
const newGameButton = document.getElementById('new_game_button');
const dealButton = document.getElementById('deal_button');
const twistButton = document.getElementById('twist_button');
const stickButton = document.getElementById('stick_button');


// Game variables
// let isGameStarted = false;
let isGameOver = false;
// let hasPlayerWon = false;
let dealersCards = [];
let playersCards = [];
let dealerScore = 0;
let playerScore = 0;
// let playersHandAndScoreString = '';
// let dealersHandAndScoreString = '';
let playingCards = [];
let deck = [];


function setInGameState() {
  playersHeader.style.visibility = 'visible';
  dealersHeader.style.visibility = 'visible';
  dealButton.style.visibility = 'hidden';
  twistButton.style.visibility = 'visible';
  stickButton.style.visibility = 'visible';
  twistButton.style.display = 'inline';
  twistButton.style.display = 'inline';
}


function setEndGameState() {
  newGameButton.style.visibility = 'visible';
  twistButton.style.visibility = 'hidden';
  stickButton.style.visibility = 'hidden';
}

function outputPlayersScore() {
  playersHand.innerText = getHandString(playersCards);
  playersScore.innerText = `(Score ${playerScore})`;
}


function outputDealersScore() {
  dealersHand.innerText = getHandString(dealersCards);
  dealersScore.innerText = `(Score ${dealerScore})`;
}


function checkGameStatus(playerHasFinished) {
  playerScore = getScore(playersCards);
  dealerScore = getScore(dealersCards);
  const status = checkScores(playerHasFinished, playerScore, dealerScore);

  if (status.winner !== 'Pending') {
    resultsArea.innerText = `WINNER: ${status.winner}.  `;
    isGameOver = true;
  }

  if (isGameOver) setEndGameState();
  return status.winner;
}


function setNewGameState() {
  welcomeText.innerText = '';

  playersHeader.style.visibility = 'hidden';
  playersHand.innerText = '';
  playersScore.innerText = '';

  dealersHeader.style.visibility = 'hidden';
  dealersHand.innerText = '';
  dealersScore.innerText = '';

  newGameButton.style.visibility = 'hidden';
  dealButton.style.visibility = 'visible';

  resultsArea.innerText = '';

  playingCards = getPlayingCards();
}

function resetGameVariables() {
  // isGameStarted = false;
  isGameOver = false;
  // hasPlayerWon = false;
  dealersCards = [];
  playersCards = [];
  dealerScore = 0;
  playerScore = 0;
  // playersHandAndScoreString = '';
  deck = [];
  playingCards = [];
}

// Start a new game... look out for a click and then execute the function
newGameButton.addEventListener('click', () => {
  if (isGameOver) resetGameVariables();

  // Set game variables
  // isGameStarted = true;
  isGameOver = false;
  // hasPlayerWon = false;

  // Amend the html
  setNewGameState();
});


// Player triggers 'deal'
dealButton.addEventListener('click', () => {
  // Amend the html
  setInGameState();

  // Opening deal
  deck = buildAndShuffleADeckOfCards(playingCards);
  dealRandomCard(playersCards, deck);
  dealRandomCard(playersCards, deck);
  dealRandomCard(dealersCards, deck);

  // Update scores and output
  checkGameStatus(false);
  playersHandAndScoreString = outputPlayersScore();
  dealersHandAndScoreString = outputDealersScore();
});


// Player adds cards
twistButton.addEventListener('click', () => {
  dealRandomCard(playersCards, deck);

  // Update results and output
  checkGameStatus(false);
  playersHandAndScoreString = outputPlayersScore();
  outputDealersScore();
});


// Dealer plays
stickButton.addEventListener('click', () => {
  let status = '';

  // Dealer plays until there's a winner...
  do {
    dealRandomCard(dealersCards, deck);
    status = checkGameStatus(true);
    outputDealersScore();
  }
  while (status === 'Pending');
});
