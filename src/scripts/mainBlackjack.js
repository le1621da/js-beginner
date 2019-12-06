/* eslint-disable no-undef */
//
// Blackjack
//

// eslint-disable-next-line no-undef
requirejs(['../data/cardsData', '../functions/deck', '../functions/blackjackScoring'], () => {});

// DOM variables
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
let isGameOver = false;
let dealersCards = [];
let playersCards = [];
let dealerScore = 0;
let playerScore = 0;
let playingCards = [];
let deck = [];

function setInGameState() {
  playersHeader.style.visibility = 'visible';
  dealersHeader.style.visibility = 'visible';
  dealButton.disabled = true;
  stickButton.disabled = false;
  twistButton.disabled = false;
}

function setEndGameState() {
  newGameButton.disabled = false;
  stickButton.disabled = true;
  twistButton.disabled = true;
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

function setNewGameState() {
  welcomeText.innerText = '';

  playersHeader.style.visibility = 'hidden';
  playersHand.innerText = '';
  playersScore.innerText = '';

  dealersHeader.style.visibility = 'hidden';
  dealersHand.innerText = '';
  dealersScore.innerText = '';

  newGameButton.disabled = true;
  dealButton.disabled = false;
  stickButton.disabled = true;
  twistButton.disabled = true;

  resultsArea.innerText = '';

  playingCards = getPlayingCards();
}

function resetGameVariables() {
  isGameOver = false;
  dealersCards = [];
  playersCards = [];
  dealerScore = 0;
  playerScore = 0;
  playingCards = [];
}

// Start a new game... look out for a click and then execute the function
newGameButton.addEventListener('click', () => {
  if (isGameOver) resetGameVariables();

  // Set game variables
  isGameOver = false;

  // Amend the html
  setNewGameState();
});


// Player triggers 'deal'
dealButton.addEventListener('click', () => {
  // Amend the html
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
