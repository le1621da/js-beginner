/* eslint-disable no-loop-func */
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
let results;
let playerHasStuck = false;
const ITERATIONS = 2;

async function setPlayerHasStuck() {
  playerHasStuck = true;
}

async function resetPlayerHasStuck() {
  playerHasStuck = false;
}

// Tests
describe('FEATURE: Blackjack', () => {
  after(async () => {
    driver.quit();
    await resetResults();
  });

  describe('SCENARIO 05: Loop', () => {
    it('GIVEN the blackjack page is loaded', () => loadPage(driver, blackjackLandingPage));
  });

  for (let i = 1; i < ITERATIONS; i += 1) {
    describe(`ITERATION ${i}`, () => {
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
        await setWinner(playerHasStuck);
        results = getResults();
      });

      it('  AND if the player has won THEN the player is declared the winner', () => { if (results.playerHasWon) return getElementText(driver, 'results-area-blackjack').should.eventually.equal('WINNER: Player.'); });
      it('  BUT if the dealer has won THEN the dealer is declared the winner', () => { if (results.dealerHasWon) return getElementText(driver, 'results-area-blackjack').should.eventually.equal('WINNER: Dealer.'); });

      it('  AND the results have been reset', async () => {
        await resetPlayerHasStuck();
        resetResults();
      });
    });
  }
});
