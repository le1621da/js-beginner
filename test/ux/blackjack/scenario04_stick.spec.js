/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/* eslint-disable consistent-return */

// imports
const webdriver = require('selenium-webdriver');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

// initialise test runner and selenium
chai.use(chaiAsPromised);
const driver = new webdriver.Builder().forBrowser('chrome').build();

// import and initialise Selenium helpers
const {
  blackjackLandingPage,
  checkArrayValuesAreAllTrue,
  getPageStates,
  getResults,
  setGameStateVariables,
  setGameScoreVariables,
  setWinner,
  resetResults,
} = require('../../helper/functions/seleniumBlackjackFunctions.js');

const {
  loadPage,
  getElementText,
  clickButton,
} = require('../../helper/functions/seleniumCommonFunctions.js');

// local variables
let states = [];
let results;
let playerHasStuck = false;

async function setPlayerHasStuck() {
  playerHasStuck = true;
}

// Tests
describe('FEATURE: Blackjack', () => {
  after(async () => {
    driver.quit();
    await resetResults();
  });

  describe('SCENARIO 04: Stick', () => {
    it('GIVEN the blackjack page is loaded', () => loadPage(driver, blackjackLandingPage));
    it('  AND the deal button has been clicked', () => clickButton(driver, 'deal-button-blackjack').should.eventually.be.true);
    it('  AND selenium gets values from the page', async () => {
      await setGameScoreVariables(driver);
      await setGameStateVariables(driver);
      await setWinner(playerHasStuck);
      results = getResults();
    });

    it('WHEN the stick button has been clicked (if there is no winner yet)', () => { if (!results.playerHasWon) return clickButton(driver, 'stick-button-blackjack').should.eventually.be.true; });
    it('  AND selenium gets values from the page for verfication', async () => {
      await setPlayerHasStuck();
      await setGameScoreVariables(driver);
      await setGameStateVariables(driver);
      await setWinner(playerHasStuck);
      states = getPageStates(driver);
      results = getResults();
    });

    it('THEN the page is in the End Game State', () => { checkArrayValuesAreAllTrue(states[2]).should.be.true; });
    it('  AND the page is NOT in the Landing Page State', () => { checkArrayValuesAreAllTrue(states[0]).should.be.false; });
    it('  AND the page is NOT in the Game In-Progress State', () => { checkArrayValuesAreAllTrue(states[1]).should.be.false; });
    it('  AND the page is NOT in the Reset Game State', () => { checkArrayValuesAreAllTrue(states[3]).should.be.false; });
    it('AND WHEN the player has won THEN the player is declared the winner', () => { if (results.playerHasWon) return getElementText(driver, 'results-area-blackjack').should.eventually.equal('WINNER: Player.'); });
    it('AND WHEN the dealer has won THEN the dealer is declared the winner', () => { if (results.dealerHasWon) return getElementText(driver, 'results-area-blackjack').should.eventually.equal('WINNER: Dealer.'); });
    it('AND WHEN the player has not won THEN the dealer is declared the winner', () => { if (!results.dealerHasWon) return getElementText(driver, 'results-area-blackjack').should.eventually.equal('WINNER: Player.'); });
    it('AND WHEN the dealer has not won THEN the player is declared the winner', () => { if (!results.playerHasWon) return getElementText(driver, 'results-area-blackjack').should.eventually.equal('WINNER: Dealer.'); });
  });
});
