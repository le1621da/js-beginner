/* eslint-disable no-undef */
//
// Blackjack
//

// eslint-disable-next-line no-undef
requirejs(['../data/cardsData', '../functions/deck', '../functions/blackjackScoring'], () => {});

// DOM variables
// const welcomeText = document.getElementById('welcome_text');
const playersHeader = document.getElementById('players-header-blackjack');
const playersHand = document.getElementById('players-hand-blackjack');
const playersScore = document.getElementById('players-score-blackjack');
const dealersHeader = document.getElementById('dealers-header-blackjack');
const dealersHand = document.getElementById('dealers-hand-blackjack');
const dealersScore = document.getElementById('dealers-score-blackjack');
const resultsArea = document.getElementById('results-area-blackjack');
// const newGameButton = document.getElementById('new_game_button');
const dealButton = document.getElementById('deal-button-blackjack');
const twistButton = document.getElementById('twist-button-blackjack');
const stickButton = document.getElementById('stick-button-blackjack');


// Game variables
let isNewGame = true;
let isGameOver = false;
let dealersCards = [];
let playersCards = [];
let dealerScore = 0;
let playerScore = 0;
let playingCards = [];
let deck = [];

function setNewGameState() {
  playingCards = getPlayingCards();
  playersHeader.style.visibility = 'visible';
  dealersHeader.style.visibility = 'visible';
}

function setInGameState() {
  playersHand.innerText = '';
  playersScore.innerText = '';
  dealersHand.innerText = '';
  dealersScore.innerText = '';
  resultsArea.innerText = '';

  dealButton.disabled = true;
  stickButton.disabled = false;
  twistButton.disabled = false;
}

function setEndGameState() {
  dealButton.disabled = false;
  stickButton.disabled = true;
  twistButton.disabled = true;
}

function resetGameVariables() {
  isGameOver = false;
  dealersCards = [];
  playersCards = [];
  dealerScore = 0;
  playerScore = 0;
  // playingCards = [];
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

function setDeck() {
  if (deck.length === 0) {
    deck = buildAndShuffleADeckOfCards(playingCards);
  }
}

function setDeckAndDealRandomCard(dealerOrPlayersCards) {
  setDeck();
  dealRandomCard(dealerOrPlayersCards, deck, playingCards);
}

// Player triggers 'deal'
dealButton.addEventListener('click', () => {
  if (isNewGame) {
    setNewGameState();
    isNewGame = false;
  }

  if (isGameOver) {
    resetGameVariables();
    isGameOver = false;
  }

  setInGameState();

  // Deal
  setDeckAndDealRandomCard(playersCards);
  setDeckAndDealRandomCard(playersCards);
  setDeckAndDealRandomCard(dealersCards);

  // Update scores and output
  checkGameStatus(false);
  playersHandAndScoreString = outputPlayersScore();
  dealersHandAndScoreString = outputDealersScore();
});


// Player adds cards
twistButton.addEventListener('click', () => {
  // Deal
  setDeckAndDealRandomCard(playersCards);

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
    // Deal
    setDeckAndDealRandomCard(dealersCards);
    status = checkGameStatus(true);
    outputDealersScore();
  }
  while (status === 'Pending');
});
