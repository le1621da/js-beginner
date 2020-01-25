/* eslint-disable prefer-const */

const {
  canFindElement, cannotFindElement, elementIsVisible, elementIsNotVisible,
  elementTextValueIs, elementTextValueIsNot, elementIsEnabled, elementIsDisabled,
} = require('./seleniumCommonFunctions.js');


// const perform = new SeleniumWebdriverInteractions(driver);

// Initialise game variables
const blackjackLandingPage = 'file:///Users/Lee/workspace/beginner-js/src/pages/blackjack.html';
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
    getScore(driver, 'players-score-blackjack'),
    getScore(driver, 'dealers-score-blackjack'),
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

// State 00 = Launch page state
async function getState00(driver) {
  let myPromises = Promise.all([
    // Assert whether elements are available
    canFindElement(driver, 'page-title-blackjack'),
    cannotFindElement(driver, 'welcome-text-blackjack'),
    canFindElement(driver, 'players-header-blackjack'),
    canFindElement(driver, 'players-hand-blackjack'),
    canFindElement(driver, 'players-score-blackjack'),
    canFindElement(driver, 'deal-button-blackjack'),
    canFindElement(driver, 'stick-button-blackjack'),
    canFindElement(driver, 'twist-button-blackjack'),
    canFindElement(driver, 'dealers-header-blackjack'),
    canFindElement(driver, 'dealers-hand-blackjack'),
    canFindElement(driver, 'dealers-score-blackjack'),
    canFindElement(driver, 'results-area-blackjack'),
    cannotFindElement(driver, 'new_game-button-blackjack'),
    cannotFindElement(driver, 'negative_test-button-blackjack'),

    // // Assert whether elements are visible
    elementIsVisible(driver, 'page-title-blackjack'),
    elementIsNotVisible(driver, 'players-header-blackjack'),
    elementIsVisible(driver, 'players-hand-blackjack'),
    elementIsVisible(driver, 'players-score-blackjack'),
    elementIsVisible(driver, 'deal-button-blackjack'),
    elementIsVisible(driver, 'stick-button-blackjack'),
    elementIsVisible(driver, 'twist-button-blackjack'),
    elementIsNotVisible(driver, 'dealers-header-blackjack'),
    elementIsVisible(driver, 'dealers-hand-blackjack'),
    elementIsVisible(driver, 'dealers-score-blackjack'),
    elementIsVisible(driver, 'results-area-blackjack'),
    elementIsNotVisible(driver, 'negative_test-button-blackjack'),

    // // Assert the text values of relevant fields
    elementTextValueIs(driver, 'page-title-blackjack', 'Blackjack!'),
    elementTextValueIs(driver, 'players-header-blackjack', ''),
    elementTextValueIs(driver, 'players-hand-blackjack', ''),
    elementTextValueIs(driver, 'players-score-blackjack', ''),
    elementTextValueIs(driver, 'dealers-header-blackjack', ''),
    elementTextValueIs(driver, 'dealers-hand-blackjack', ''),
    elementTextValueIs(driver, 'dealers-score-blackjack', ''),
    elementTextValueIs(driver, 'results-area-blackjack', ''),
    elementTextValueIsNot(driver, 'page-title-blackjack', 'Blackjack'),

    // Assert whether buttons are enabled
    elementIsEnabled(driver, 'deal-button-blackjack'),
    elementIsDisabled(driver, 'twist-button-blackjack'),
    elementIsDisabled(driver, 'stick-button-blackjack'),
  ])

    .then(
      (result) => result,
      // (result) => {
      //   console.log(result);
      // },
    );
  return myPromises;
}

// State 02 = Game in-progress state
async function getState02(driver) {
  let myPromises = Promise.all([
    // Assert whether elements are available
    canFindElement(driver, 'page-title-blackjack'),
    cannotFindElement(driver, 'welcome-text-blackjack'),
    canFindElement(driver, 'players-header-blackjack'),
    canFindElement(driver, 'players-hand-blackjack'),
    canFindElement(driver, 'players-score-blackjack'),
    canFindElement(driver, 'deal-button-blackjack'),
    canFindElement(driver, 'stick-button-blackjack'),
    canFindElement(driver, 'twist-button-blackjack'),
    canFindElement(driver, 'dealers-header-blackjack'),
    canFindElement(driver, 'dealers-hand-blackjack'),
    canFindElement(driver, 'dealers-score-blackjack'),
    canFindElement(driver, 'results-area-blackjack'),
    cannotFindElement(driver, 'new_game-button-blackjack'),
    cannotFindElement(driver, 'negative_test-button-blackjack'),

    // Assert whether elements are visible
    elementIsVisible(driver, 'page-title-blackjack'),
    elementIsVisible(driver, 'players-header-blackjack'),
    elementIsVisible(driver, 'players-hand-blackjack'),
    elementIsVisible(driver, 'players-score-blackjack'),
    elementIsVisible(driver, 'deal-button-blackjack'),
    elementIsVisible(driver, 'stick-button-blackjack'),
    elementIsVisible(driver, 'twist-button-blackjack'),
    elementIsVisible(driver, 'dealers-header-blackjack'),
    elementIsVisible(driver, 'dealers-hand-blackjack'),
    elementIsVisible(driver, 'dealers-score-blackjack'),
    elementIsVisible(driver, 'results-area-blackjack'),
    elementIsNotVisible(driver, 'negative_test-button-blackjack'),

    // Assert the text values of relevant fields
    elementTextValueIs(driver, 'page-title-blackjack', 'Blackjack!'),
    elementTextValueIs(driver, 'players-header-blackjack', 'Player has:'),
    elementTextValueIsNot(driver, 'players-hand-blackjack', ''),
    elementTextValueIsNot(driver, 'players-score-blackjack', ''),
    elementTextValueIs(driver, 'dealers-header-blackjack', 'Dealer has:'),
    elementTextValueIsNot(driver, 'dealers-hand-blackjack', ''),
    elementTextValueIsNot(driver, 'dealers-score-blackjack', ''),
    elementTextValueIs(driver, 'results-area-blackjack', ''),
    elementTextValueIsNot(driver, 'page-title-blackjack', 'Blackjack'),

    // Assert whether buttons are enabled
    elementIsDisabled(driver, 'deal-button-blackjack'),
    elementIsEnabled(driver, 'twist-button-blackjack'),
    elementIsEnabled(driver, 'stick-button-blackjack'),

  ])

    .then(
      (result) => result,
    );
  return myPromises;
}


// State 03 = 'End game' state; eg player has hit 'stick' and dealers hand is played
async function getState03(driver) {
  let myPromises = Promise.all([
    // Assert whether elements are available
    canFindElement(driver, 'page-title-blackjack'),
    cannotFindElement(driver, 'welcome-text-blackjack'),
    canFindElement(driver, 'players-header-blackjack'),
    canFindElement(driver, 'players-hand-blackjack'),
    canFindElement(driver, 'players-score-blackjack'),
    canFindElement(driver, 'deal-button-blackjack'),
    canFindElement(driver, 'stick-button-blackjack'),
    canFindElement(driver, 'twist-button-blackjack'),
    canFindElement(driver, 'dealers-header-blackjack'),
    canFindElement(driver, 'dealers-hand-blackjack'),
    canFindElement(driver, 'dealers-score-blackjack'),
    canFindElement(driver, 'results-area-blackjack'),
    cannotFindElement(driver, 'new_game-button-blackjack'),
    cannotFindElement(driver, 'negative_test-button-blackjack'),

    // Assert whether elements are visible
    elementIsVisible(driver, 'page-title-blackjack'),
    elementIsVisible(driver, 'players-header-blackjack'),
    elementIsVisible(driver, 'players-hand-blackjack'),
    elementIsVisible(driver, 'players-score-blackjack'),
    elementIsVisible(driver, 'deal-button-blackjack'),
    elementIsVisible(driver, 'stick-button-blackjack'),
    elementIsVisible(driver, 'twist-button-blackjack'),
    elementIsVisible(driver, 'dealers-header-blackjack'),
    elementIsVisible(driver, 'dealers-hand-blackjack'),
    elementIsVisible(driver, 'dealers-score-blackjack'),
    elementIsVisible(driver, 'results-area-blackjack'),
    elementIsNotVisible(driver, 'negative_test-button-blackjack'),

    // Assert the text values of relevant fields
    elementTextValueIs(driver, 'page-title-blackjack', 'Blackjack!'),
    elementTextValueIs(driver, 'welcome-text-blackjack', ''),
    elementTextValueIs(driver, 'players-header-blackjack', 'Player has:'),
    elementTextValueIsNot(driver, 'players-hand-blackjack', ''),
    elementTextValueIsNot(driver, 'players-score-blackjack', ''),
    elementTextValueIs(driver, 'dealers-header-blackjack', 'Dealer has:'),
    elementTextValueIsNot(driver, 'dealers-hand-blackjack', ''),
    elementTextValueIsNot(driver, 'dealers-score-blackjack', ''),
    elementTextValueIsNot(driver, 'results-area-blackjack', ''),
    elementTextValueIsNot(driver, 'page-title-blackjack', 'Blackjack'),

    // Assert whether buttons are enabled
    elementIsEnabled(driver, 'deal-button-blackjack'),
    elementIsDisabled(driver, 'twist-button-blackjack'),
    elementIsDisabled(driver, 'stick-button-blackjack'),
  ])

    .then(
      (result) => result,
    );
  return myPromises;
}

// State 04 = Reset
async function getState04(driver) {
  let myPromises = Promise.all([
    // Assert whether elements are available
    canFindElement(driver, 'page-title-blackjack'),
    cannotFindElement(driver, 'welcome-text-blackjack'),
    canFindElement(driver, 'players-header-blackjack'),
    canFindElement(driver, 'players-hand-blackjack'),
    canFindElement(driver, 'players-score-blackjack'),
    canFindElement(driver, 'deal-button-blackjack'),
    canFindElement(driver, 'stick-button-blackjack'),
    canFindElement(driver, 'twist-button-blackjack'),
    canFindElement(driver, 'dealers-header-blackjack'),
    canFindElement(driver, 'dealers-hand-blackjack'),
    canFindElement(driver, 'dealers-score-blackjack'),
    canFindElement(driver, 'results-area-blackjack'),
    cannotFindElement(driver, 'new_game-button-blackjack'),
    cannotFindElement(driver, 'negative_test-button-blackjack'),

    // Assert whether elements are visible
    elementIsVisible(driver, 'page-title-blackjack'),
    elementIsVisible(driver, 'players-header-blackjack'),
    elementIsVisible(driver, 'players-hand-blackjack'),
    elementIsVisible(driver, 'players-score-blackjack'),
    elementIsVisible(driver, 'deal-button-blackjack'),
    elementIsVisible(driver, 'stick-button-blackjack'),
    elementIsVisible(driver, 'twist-button-blackjack'),
    elementIsVisible(driver, 'dealers-header-blackjack'),
    elementIsVisible(driver, 'dealers-hand-blackjack'),
    elementIsVisible(driver, 'dealers-score-blackjack'),
    elementIsVisible(driver, 'results-area-blackjack'),
    elementIsNotVisible(driver, 'negative_test-button-blackjack'),

    // Assert the text values of relevant fields
    elementTextValueIs(driver, 'page-title-blackjack', 'Blackjack!'),
    elementTextValueIs(driver, 'players-header-blackjack', ''),
    elementTextValueIs(driver, 'players-hand-blackjack', ''),
    elementTextValueIs(driver, 'players-score-blackjack', ''),
    elementTextValueIs(driver, 'dealers-header-blackjack', ''),
    elementTextValueIs(driver, 'dealers-hand-blackjack', ''),
    elementTextValueIs(driver, 'dealers-score-blackjack', ''),
    elementTextValueIs(driver, 'results-area-blackjack', ''),
    elementTextValueIsNot(driver, 'page-title-blackjack', 'Blackjack'),

    // Assert whether buttons are enabled
    elementIsEnabled(driver, 'deal-button-blackjack'),
    elementIsDisabled(driver, 'twist-button-blackjack'),
    elementIsDisabled(driver, 'stick-button-blackjack'),
  ])

    .then(
      (result) => result,
    );
  return myPromises;
}

// Set game variables
async function setGameStateVariables(driver) {
  state00 = await getState00(driver);
  // state01 = await getState01(driver);
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
