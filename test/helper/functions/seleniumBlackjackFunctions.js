/* eslint-disable prefer-const */

const {
  canFindElement, cannotFindElement, elementIsVisible, elementIsNotVisible,
  elementTextValueIs, elementTextValueIsNot,
} = require('./seleniumCommonFunctions.js');


// const perform = new SeleniumWebdriverInteractions(driver);

// Initialise game variables
const blackjackLandingPage = 'file:///Users/Lee/workspace/beginner-js/src/blackjack.html';
let state00;
let state01;
let state02;
let state03;
let state04;
let gameScores;
let playersScore;
let dealersScore;
let playerHasWon = false;
let dealerHasWon = false;

async function setWinner(playerHasStuck) {
  if ((playersScore === 21) || (dealersScore > 21)) {
    playerHasWon = true;
  } else if (playersScore > 21) {
    dealerHasWon = true;
  } else if (playerHasStuck) {
    if (playersScore > dealersScore) {
      playerHasWon = true;
    } else {
      dealerHasWon = true;
    }
  }
}

// get results
function getPageStates() {
  const states = [state00, state01, state02, state03, state04];
  return states;
}

function getResults() {
  let result = {
    playerHasWon,
    dealerHasWon,
    playersScore,
    dealersScore,
  };
  return result;
}

function resetResults() {
  playerHasWon = false;
  dealerHasWon = false;
  playersScore = 0;
  dealersScore = 0;
}

// extract the player's scores from the html
function getScore(driver, elementId) {
  const score = driver.findElement({ id: elementId }).getText()
    .then(
      (result) => result.substr(7, result.length - 8),
      (error) => error,
    );
  return score;
}

async function getScores(driver) {
  const myPromises = Promise.all([
    getScore(driver, 'players_score'),
    getScore(driver, 'dealers_score'),
  ])
    .then(
      (result) => result,
    );
  return myPromises;
}

async function setGameScoreVariables(driver) {
  gameScores = await getScores(driver);
  playersScore = parseInt(gameScores[0], 10);
  dealersScore = parseInt(gameScores[1], 10);
}

function checkArrayValuesAreAllTrue(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== true) {
      return false;
    }
  }
  return true;
}

// State 01 = Launch page state
async function getState00(driver) {
  let myPromises = Promise.all([
    // Assert whether elements are available
    canFindElement(driver, 'page_title'),
    canFindElement(driver, 'welcome_text'),
    canFindElement(driver, 'players_header'),
    canFindElement(driver, 'players_hand'),
    canFindElement(driver, 'players_score'),
    canFindElement(driver, 'deal_button'),
    canFindElement(driver, 'stick_button'),
    canFindElement(driver, 'twist_button'),
    canFindElement(driver, 'dealers_header'),
    canFindElement(driver, 'dealers_hand'),
    canFindElement(driver, 'dealers_score'),
    canFindElement(driver, 'results_area'),
    canFindElement(driver, 'new_game_button'),
    cannotFindElement(driver, 'negative_test_button'),

    // Assert whether elements are visible
    elementIsVisible(driver, 'page_title'),
    elementIsVisible(driver, 'welcome_text'),
    elementIsNotVisible(driver, 'players_header'),
    elementIsVisible(driver, 'players_hand'),
    elementIsVisible(driver, 'players_score'),
    elementIsNotVisible(driver, 'deal_button'),
    elementIsNotVisible(driver, 'stick_button'),
    elementIsNotVisible(driver, 'twist_button'),
    elementIsNotVisible(driver, 'dealers_header'),
    elementIsVisible(driver, 'dealers_hand'),
    elementIsVisible(driver, 'dealers_score'),
    elementIsVisible(driver, 'results_area'),
    elementIsVisible(driver, 'new_game_button'),
    elementIsNotVisible(driver, 'negative_test_button'),

    // Assert the text values of relevant fields
    elementTextValueIs(driver, 'page_title', 'Blackjack!'),
    elementTextValueIs(driver, 'welcome_text', 'Welcome to Blackjack!'),
    elementTextValueIs(driver, 'players_header', ''),
    elementTextValueIs(driver, 'players_hand', ''),
    elementTextValueIs(driver, 'players_score', ''),
    elementTextValueIs(driver, 'dealers_header', ''),
    elementTextValueIs(driver, 'dealers_hand', ''),
    elementTextValueIs(driver, 'dealers_score', ''),
    elementTextValueIs(driver, 'results_area', ''),
    elementTextValueIsNot(driver, 'page_title', 'Blackjack'),
  ])

    .then(
      (result) => result,
    );
  return myPromises;
}


// State 02 = New Game state
async function getState01(driver) {
  let myPromises = Promise.all([
    // Assert whether elements are available
    canFindElement(driver, 'page_title'),
    canFindElement(driver, 'welcome_text'),
    canFindElement(driver, 'players_header'),
    canFindElement(driver, 'players_hand'),
    canFindElement(driver, 'players_score'),
    canFindElement(driver, 'deal_button'),
    canFindElement(driver, 'stick_button'),
    canFindElement(driver, 'twist_button'),
    canFindElement(driver, 'dealers_header'),
    canFindElement(driver, 'dealers_hand'),
    canFindElement(driver, 'dealers_score'),
    canFindElement(driver, 'results_area'),
    canFindElement(driver, 'new_game_button'),
    cannotFindElement(driver, 'negative_test_button'),

    // Assert whether elements are visible
    elementIsVisible(driver, 'page_title'),
    elementIsVisible(driver, 'welcome_text'),
    elementIsNotVisible(driver, 'players_header'),
    elementIsVisible(driver, 'players_hand'),
    elementIsVisible(driver, 'players_score'),
    elementIsVisible(driver, 'deal_button'),
    elementIsNotVisible(driver, 'stick_button'),
    elementIsNotVisible(driver, 'twist_button'),
    elementIsNotVisible(driver, 'dealers_header'),
    elementIsVisible(driver, 'dealers_hand'),
    elementIsVisible(driver, 'dealers_score'),
    elementIsVisible(driver, 'results_area'),
    elementIsNotVisible(driver, 'new_game_button'),
    elementIsNotVisible(driver, 'negative_test_button'),

    // Assert the text values of relevant fields
    elementTextValueIs(driver, 'page_title', 'Blackjack!'),
    elementTextValueIs(driver, 'welcome_text', ''),
    elementTextValueIs(driver, 'players_header', ''),
    elementTextValueIs(driver, 'players_hand', ''),
    elementTextValueIs(driver, 'players_score', ''),
    elementTextValueIs(driver, 'dealers_header', ''),
    elementTextValueIs(driver, 'dealers_hand', ''),
    elementTextValueIs(driver, 'dealers_score', ''),
    elementTextValueIs(driver, 'results_area', ''),
    elementTextValueIsNot(driver, 'page_title', 'Blackjack'),
  ])

    .then(
      (result) => result,
    );
  return myPromises;
}

// State 03 = Game in-progress state
async function getState02(driver) {
  let myPromises = Promise.all([
    // Assert whether elements are available
    canFindElement(driver, 'page_title'),
    canFindElement(driver, 'welcome_text'),
    canFindElement(driver, 'players_header'),
    canFindElement(driver, 'players_hand'),
    canFindElement(driver, 'players_score'),
    canFindElement(driver, 'deal_button'),
    canFindElement(driver, 'stick_button'),
    canFindElement(driver, 'twist_button'),
    canFindElement(driver, 'dealers_header'),
    canFindElement(driver, 'dealers_hand'),
    canFindElement(driver, 'dealers_score'),
    canFindElement(driver, 'results_area'),
    canFindElement(driver, 'new_game_button'),
    cannotFindElement(driver, 'negative_test_button'),

    // Assert whether elements are visible
    elementIsVisible(driver, 'page_title'),
    elementIsVisible(driver, 'welcome_text'),
    elementIsVisible(driver, 'players_header'),
    elementIsVisible(driver, 'players_hand'),
    elementIsVisible(driver, 'players_score'),
    elementIsNotVisible(driver, 'deal_button'),
    elementIsVisible(driver, 'stick_button'),
    elementIsVisible(driver, 'twist_button'),
    elementIsVisible(driver, 'dealers_header'),
    elementIsVisible(driver, 'dealers_hand'),
    elementIsVisible(driver, 'dealers_score'),
    elementIsVisible(driver, 'results_area'),
    elementIsNotVisible(driver, 'new_game_button'),
    elementIsNotVisible(driver, 'negative_test_button'),

    // Assert the text values of relevant fields
    elementTextValueIs(driver, 'page_title', 'Blackjack!'),
    elementTextValueIs(driver, 'welcome_text', ''),
    elementTextValueIs(driver, 'players_header', 'Player has:'),
    elementTextValueIsNot(driver, 'players_hand', ''),
    elementTextValueIsNot(driver, 'players_score', ''),
    elementTextValueIs(driver, 'dealers_header', 'Dealer has:'),
    elementTextValueIsNot(driver, 'dealers_hand', ''),
    elementTextValueIsNot(driver, 'dealers_score', ''),
    elementTextValueIs(driver, 'results_area', ''),
    elementTextValueIsNot(driver, 'page_title', 'Blackjack'),
  ])

    .then(
      (result) => result,
    );
  return myPromises;
}


// State 04 = 'End game' state; eg player has hit 'stick' and dealers hand is played
async function getState03(driver) {
  let myPromises = Promise.all([
    // Assert whether elements are available
    canFindElement(driver, 'page_title'),
    canFindElement(driver, 'welcome_text'),
    canFindElement(driver, 'players_header'),
    canFindElement(driver, 'players_hand'),
    canFindElement(driver, 'players_score'),
    canFindElement(driver, 'deal_button'),
    canFindElement(driver, 'stick_button'),
    canFindElement(driver, 'twist_button'),
    canFindElement(driver, 'dealers_header'),
    canFindElement(driver, 'dealers_hand'),
    canFindElement(driver, 'dealers_score'),
    canFindElement(driver, 'results_area'),
    canFindElement(driver, 'new_game_button'),
    cannotFindElement(driver, 'negative_test_button'),

    // Assert whether elements are visible
    elementIsVisible(driver, 'page_title'),
    elementIsVisible(driver, 'welcome_text'),
    elementIsVisible(driver, 'players_header'),
    elementIsVisible(driver, 'players_hand'),
    elementIsVisible(driver, 'players_score'),
    elementIsNotVisible(driver, 'deal_button'),
    elementIsNotVisible(driver, 'stick_button'),
    elementIsNotVisible(driver, 'twist_button'),
    elementIsVisible(driver, 'dealers_header'),
    elementIsVisible(driver, 'dealers_hand'),
    elementIsVisible(driver, 'dealers_score'),
    elementIsVisible(driver, 'results_area'),
    elementIsVisible(driver, 'new_game_button'),
    elementIsNotVisible(driver, 'negative_test_button'),

    // Assert the text values of relevant fields
    elementTextValueIs(driver, 'page_title', 'Blackjack!'),
    elementTextValueIs(driver, 'welcome_text', ''),
    elementTextValueIs(driver, 'players_header', 'Player has:'),
    elementTextValueIsNot(driver, 'players_hand', ''),
    elementTextValueIsNot(driver, 'players_score', ''),
    elementTextValueIs(driver, 'dealers_header', 'Dealer has:'),
    elementTextValueIsNot(driver, 'dealers_hand', ''),
    elementTextValueIsNot(driver, 'dealers_score', ''),
    elementTextValueIsNot(driver, 'results_area', ''),
    elementTextValueIsNot(driver, 'page_title', 'Blackjack'),
  ])

    .then(
      (result) => result,
    );
  return myPromises;
}

// State 05 = Reset
async function getState04(driver) {
  let myPromises = Promise.all([
    // Assert whether elements are available
    canFindElement(driver, 'page_title'),
    canFindElement(driver, 'welcome_text'),
    canFindElement(driver, 'players_header'),
    canFindElement(driver, 'players_hand'),
    canFindElement(driver, 'players_score'),
    canFindElement(driver, 'deal_button'),
    canFindElement(driver, 'stick_button'),
    canFindElement(driver, 'twist_button'),
    canFindElement(driver, 'dealers_header'),
    canFindElement(driver, 'dealers_hand'),
    canFindElement(driver, 'dealers_score'),
    canFindElement(driver, 'results_area'),
    canFindElement(driver, 'new_game_button'),
    cannotFindElement(driver, 'negative_test_button'),

    // Assert whether elements are visible
    elementIsVisible(driver, 'page_title'),
    elementIsVisible(driver, 'welcome_text'),
    elementIsVisible(driver, 'players_header'),
    elementIsVisible(driver, 'players_hand'),
    elementIsVisible(driver, 'players_score'),
    elementIsNotVisible(driver, 'deal_button'),
    elementIsNotVisible(driver, 'stick_button'),
    elementIsNotVisible(driver, 'twist_button'),
    elementIsVisible(driver, 'dealers_header'),
    elementIsVisible(driver, 'dealers_hand'),
    elementIsVisible(driver, 'dealers_score'),
    elementIsVisible(driver, 'results_area'),
    elementIsVisible(driver, 'new_game_button'),
    elementIsNotVisible(driver, 'negative_test_button'),

    // Assert the text values of relevant fields
    elementTextValueIs(driver, 'page_title', 'Blackjack!'),
    elementTextValueIs(driver, 'welcome_text', ''),
    elementTextValueIs(driver, 'players_header', ''),
    elementTextValueIs(driver, 'players_hand', ''),
    elementTextValueIs(driver, 'players_score', ''),
    elementTextValueIs(driver, 'dealers_header', ''),
    elementTextValueIs(driver, 'dealers_hand', ''),
    elementTextValueIs(driver, 'dealers_score', ''),
    elementTextValueIs(driver, 'results_area', ''),
    elementTextValueIsNot(driver, 'page_title', 'Blackjack'),
  ])

    .then(
      (result) => result,
    );
  return myPromises;
}

// Set game variables
async function setGameStateVariables(driver) {
  state00 = await getState00(driver);
  state01 = await getState01(driver);
  state02 = await getState02(driver);
  state03 = await getState03(driver);
  state04 = await getState04(driver);
}


module.exports = {
  blackjackLandingPage,
  playerHasWon,
  dealerHasWon,
  checkArrayValuesAreAllTrue,
  getPageStates,
  getResults,
  setGameStateVariables,
  setGameScoreVariables,
  setWinner,
  resetResults,
};
