/* eslint-disable prefer-const */
// set-up selenium
const webdriver = require('selenium-webdriver');

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();
const SeleniumWebdriverInteractions = require('../../helper/classes/seleniumWebdriverInteractions.js');

const perform = new SeleniumWebdriverInteractions(driver);

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

// extract the player's scores from the html
function getScore(elementId) {
  const score = driver.findElement({ id: elementId }).getText()
    .then(
      (result) => result.substr(7, result.length - 8),
      (error) => error,
    );
  return score;
}

async function getScores() {
  const myPromises = Promise.all([
    getScore('players_score'),
    getScore('dealers_score'),
  ])
    .then(
      (result) => result,
    );
  return myPromises;
}

async function setGameScoreVariables() {
  gameScores = await getScores();
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
async function getState00() {
  let myPromises = Promise.all([
    // Assert whether elements are available
    perform.canFindElement('page_title this should fail'),
    perform.canFindElement('welcome_text'),
    perform.canFindElement('players_header'),
    perform.canFindElement('players_hand'),
    perform.canFindElement('players_score'),
    perform.canFindElement('deal_button'),
    perform.canFindElement('stick_button'),
    perform.canFindElement('twist_button'),
    perform.canFindElement('dealers_header'),
    perform.canFindElement('dealers_hand'),
    perform.canFindElement('dealers_score'),
    perform.canFindElement('results_area'),
    perform.canFindElement('new_game_button'),
    perform.cannotFindElement('negative_test_button'),

    // Assert whether elements are visible
    perform.elementIsVisible('page_title'),
    perform.elementIsVisible('welcome_text'),
    perform.elementIsNotVisible('players_header'),
    perform.elementIsVisible('players_hand'),
    perform.elementIsVisible('players_score'),
    perform.elementIsNotVisible('deal_button'),
    perform.elementIsNotVisible('stick_button'),
    perform.elementIsNotVisible('twist_button'),
    perform.elementIsNotVisible('dealers_header'),
    perform.elementIsVisible('dealers_hand'),
    perform.elementIsVisible('dealers_score'),
    perform.elementIsVisible('results_area'),
    perform.elementIsVisible('new_game_button'),
    perform.elementIsNotVisible('negative_test_button'),

    // Assert the text values of relevant fields
    perform.elementTextValueIs('page_title', 'Blackjack!'),
    perform.elementTextValueIs('welcome_text', 'Welcome to Blackjack!'),
    perform.elementTextValueIs('players_header', ''),
    perform.elementTextValueIs('players_hand', ''),
    perform.elementTextValueIs('players_score', ''),
    perform.elementTextValueIs('dealers_header', ''),
    perform.elementTextValueIs('dealers_hand', ''),
    perform.elementTextValueIs('dealers_score', ''),
    perform.elementTextValueIs('results_area', ''),
    perform.elementTextValueIsNot('page_title', 'Blackjack'),
  ])

    .then(
      (result) => result,
    );
  return myPromises;
}


// State 02 = New Game state
async function getState01() {
  let myPromises = Promise.all([
    // Assert whether elements are available
    perform.canFindElement('page_title'),
    perform.canFindElement('welcome_text'),
    perform.canFindElement('players_header'),
    perform.canFindElement('players_hand'),
    perform.canFindElement('players_score'),
    perform.canFindElement('deal_button'),
    perform.canFindElement('stick_button'),
    perform.canFindElement('twist_button'),
    perform.canFindElement('dealers_header'),
    perform.canFindElement('dealers_hand'),
    perform.canFindElement('dealers_score'),
    perform.canFindElement('results_area'),
    perform.canFindElement('new_game_button'),
    perform.cannotFindElement('negative_test_button'),

    // Assert whether elements are visible
    perform.elementIsVisible('page_title'),
    perform.elementIsVisible('welcome_text'),
    perform.elementIsNotVisible('players_header'),
    perform.elementIsVisible('players_hand'),
    perform.elementIsVisible('players_score'),
    perform.elementIsVisible('deal_button'),
    perform.elementIsNotVisible('stick_button'),
    perform.elementIsNotVisible('twist_button'),
    perform.elementIsNotVisible('dealers_header'),
    perform.elementIsVisible('dealers_hand'),
    perform.elementIsVisible('dealers_score'),
    perform.elementIsVisible('results_area'),
    perform.elementIsNotVisible('new_game_button'),
    perform.elementIsNotVisible('negative_test_button'),

    // Assert the text values of relevant fields
    perform.elementTextValueIs('page_title', 'Blackjack!'),
    perform.elementTextValueIs('welcome_text', ''),
    perform.elementTextValueIs('players_header', ''),
    perform.elementTextValueIs('players_hand', ''),
    perform.elementTextValueIs('players_score', ''),
    perform.elementTextValueIs('dealers_header', ''),
    perform.elementTextValueIs('dealers_hand', ''),
    perform.elementTextValueIs('dealers_score', ''),
    perform.elementTextValueIs('results_area', ''),
    perform.elementTextValueIsNot('page_title', 'Blackjack'),
  ])

    .then(
      (result) => result,
    );
  return myPromises;
}

// State 03 = Game in-progress state
async function getState02() {
  let myPromises = Promise.all([
    // Assert whether elements are available
    perform.canFindElement('page_title'),
    perform.canFindElement('welcome_text'),
    perform.canFindElement('players_header'),
    perform.canFindElement('players_hand'),
    perform.canFindElement('players_score'),
    perform.canFindElement('deal_button'),
    perform.canFindElement('stick_button'),
    perform.canFindElement('twist_button'),
    perform.canFindElement('dealers_header'),
    perform.canFindElement('dealers_hand'),
    perform.canFindElement('dealers_score'),
    perform.canFindElement('results_area'),
    perform.canFindElement('new_game_button'),
    perform.cannotFindElement('negative_test_button'),

    // Assert whether elements are visible
    perform.elementIsVisible('page_title'),
    perform.elementIsVisible('welcome_text'),
    perform.elementIsVisible('players_header'),
    perform.elementIsVisible('players_hand'),
    perform.elementIsVisible('players_score'),
    perform.elementIsNotVisible('deal_button'),
    perform.elementIsVisible('stick_button'),
    perform.elementIsVisible('twist_button'),
    perform.elementIsVisible('dealers_header'),
    perform.elementIsVisible('dealers_hand'),
    perform.elementIsVisible('dealers_score'),
    perform.elementIsVisible('results_area'),
    perform.elementIsNotVisible('new_game_button'),
    perform.elementIsNotVisible('negative_test_button'),

    // Assert the text values of relevant fields
    perform.elementTextValueIs('page_title', 'Blackjack!'),
    perform.elementTextValueIs('welcome_text', ''),
    perform.elementTextValueIs('players_header', 'Player has:'),
    perform.elementTextValueIsNot('players_hand', ''),
    perform.elementTextValueIsNot('players_score', ''),
    perform.elementTextValueIs('dealers_header', 'Dealer has:'),
    perform.elementTextValueIsNot('dealers_hand', ''),
    perform.elementTextValueIsNot('dealers_score', ''),
    perform.elementTextValueIs('results_area', ''),
    perform.elementTextValueIsNot('page_title', 'Blackjack'),
  ])

    .then(
      (result) => result,
    );
  return myPromises;
}


// State 04 = 'End game' state; eg player has hit 'stick' and dealers hand is played
async function getState03() {
  let myPromises = Promise.all([
    // Assert whether elements are available
    perform.canFindElement('page_title'),
    perform.canFindElement('welcome_text'),
    perform.canFindElement('players_header'),
    perform.canFindElement('players_hand'),
    perform.canFindElement('players_score'),
    perform.canFindElement('deal_button'),
    perform.canFindElement('stick_button'),
    perform.canFindElement('twist_button'),
    perform.canFindElement('dealers_header'),
    perform.canFindElement('dealers_hand'),
    perform.canFindElement('dealers_score'),
    perform.canFindElement('results_area'),
    perform.canFindElement('new_game_button'),
    perform.cannotFindElement('negative_test_button'),

    // Assert whether elements are visible
    perform.elementIsVisible('page_title'),
    perform.elementIsVisible('welcome_text'),
    perform.elementIsVisible('players_header'),
    perform.elementIsVisible('players_hand'),
    perform.elementIsVisible('players_score'),
    perform.elementIsNotVisible('deal_button'),
    perform.elementIsNotVisible('stick_button'),
    perform.elementIsNotVisible('twist_button'),
    perform.elementIsVisible('dealers_header'),
    perform.elementIsVisible('dealers_hand'),
    perform.elementIsVisible('dealers_score'),
    perform.elementIsVisible('results_area'),
    perform.elementIsVisible('new_game_button'),
    perform.elementIsNotVisible('negative_test_button'),

    // Assert the text values of relevant fields
    perform.elementTextValueIs('page_title', 'Blackjack!'),
    perform.elementTextValueIs('welcome_text', ''),
    perform.elementTextValueIs('players_header', 'Player has:'),
    perform.elementTextValueIsNot('players_hand', ''),
    perform.elementTextValueIsNot('players_score', ''),
    perform.elementTextValueIs('dealers_header', 'Dealer has:'),
    perform.elementTextValueIsNot('dealers_hand', ''),
    perform.elementTextValueIsNot('dealers_score', ''),
    perform.elementTextValueIsNot('results_area', ''),
    perform.elementTextValueIsNot('page_title', 'Blackjack'),
  ])

    .then(
      (result) => result,
    );
  return myPromises;
}

// State 05 = Reset
async function getState04() {
  let myPromises = Promise.all([
    // Assert whether elements are available
    perform.canFindElement('page_title'),
    perform.canFindElement('welcome_text'),
    perform.canFindElement('players_header'),
    perform.canFindElement('players_hand'),
    perform.canFindElement('players_score'),
    perform.canFindElement('deal_button'),
    perform.canFindElement('stick_button'),
    perform.canFindElement('twist_button'),
    perform.canFindElement('dealers_header'),
    perform.canFindElement('dealers_hand'),
    perform.canFindElement('dealers_score'),
    perform.canFindElement('results_area'),
    perform.canFindElement('new_game_button'),
    perform.cannotFindElement('negative_test_button'),

    // Assert whether elements are visible
    perform.elementIsVisible('page_title'),
    perform.elementIsVisible('welcome_text'),
    perform.elementIsVisible('players_header'),
    perform.elementIsVisible('players_hand'),
    perform.elementIsVisible('players_score'),
    perform.elementIsNotVisible('deal_button'),
    perform.elementIsNotVisible('stick_button'),
    perform.elementIsNotVisible('twist_button'),
    perform.elementIsVisible('dealers_header'),
    perform.elementIsVisible('dealers_hand'),
    perform.elementIsVisible('dealers_score'),
    perform.elementIsVisible('results_area'),
    perform.elementIsVisible('new_game_button'),
    perform.elementIsNotVisible('negative_test_button'),

    // Assert the text values of relevant fields
    perform.elementTextValueIs('page_title', 'Blackjack!'),
    perform.elementTextValueIs('welcome_text', ''),
    perform.elementTextValueIs('players_header', ''),
    perform.elementTextValueIs('players_hand', ''),
    perform.elementTextValueIs('players_score', ''),
    perform.elementTextValueIs('dealers_header', ''),
    perform.elementTextValueIs('dealers_hand', ''),
    perform.elementTextValueIs('dealers_score', ''),
    perform.elementTextValueIs('results_area', ''),
    perform.elementTextValueIsNot('page_title', 'Blackjack'),
  ])

    .then(
      (result) => result,
    );
  return myPromises;
}

// Set game variables
async function setGameStateVariables() {
  state00 = await getState00();
  state01 = await getState01();
  state02 = await getState02();
  state03 = await getState03();
  state04 = await getState04();
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
  perform,
  driver,
};
