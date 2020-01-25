/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
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
const playerHasStuck = false;

// Tests
describe('FEATURE: Blackjack', () => {
  after(async () => {
    driver.quit();
    await resetResults();
  });

  describe('SCENARIO 04: Twist', () => {
    it('GIVEN the blackjack page is loaded', () => loadPage(driver, blackjackLandingPage));
    it('  AND the deal button has been clicked', () => clickButton(driver, 'deal-button-blackjack').should.eventually.be.true);
    it('  AND selenium gets values from the page', async () => {
      await setGameScoreVariables(driver);
      await setGameStateVariables(driver);
      await setWinner(playerHasStuck);
      results = getResults();
    });

    it('WHEN the twist button has been clicked (if there is no winner yet)', () => { if (!results.playerHasWon) return clickButton(driver, 'twist-button-blackjack').should.eventually.be.true; });
    it('  AND selenium gets values from the page for verfication', async () => {
      await setGameScoreVariables(driver);
      await setGameStateVariables(driver);
      await setWinner(playerHasStuck);
      states = getPageStates(driver);
      results = getResults();
    });

    it('THEN the page is NOT in State 0', () => { checkArrayValuesAreAllTrue(states[0]).should.be.false; });
    it('  AND the page is NOT in State 4', () => { checkArrayValuesAreAllTrue(states[4]).should.be.false; });
    it("    AND if the player's score is less than 21 THEN the page is in State 2", () => { if (results.playersScore < 21) checkArrayValuesAreAllTrue(states[2]).should.be.true; });
    it("    AND if the player's score is less than 21 THEN the page is NOT in State 3", () => { if (results.playersScore < 21) checkArrayValuesAreAllTrue(states[3]).should.be.false; });
    it("    AND if the player's score < 21 THEN there's no winner declared", () => { if (results.playersScore < 21) return getElementText(driver, 'results-area-blackjack').should.eventually.equal(''); });
    it("      BUT if the player's score is equal to 21 THEN the page is NOT in State 2", () => { if (results.playersScore === 21) checkArrayValuesAreAllTrue(states[2]).should.be.false; });
    it("      AND if the player's score is equal to 21 THEN the page is in State 3", () => { if (results.playersScore === 21) checkArrayValuesAreAllTrue(states[3]).should.be.true; });
    it("      AND if the player's score is equal to 21 THEN the player is declared the winner", () => { if (results.playersScore === 21) return getElementText(driver, 'results-area-blackjack').should.eventually.equal('WINNER: Player.'); });
    it("        BUT if the player's score is greater than 21 THEN the page is NOT in State 2", () => { if (results.playersScore > 21) checkArrayValuesAreAllTrue(states[2]).should.be.false; });
    it("        AND if the player's score is greater than 21 THEN the page is in State 3", () => { if (results.playerHasPlayed > 21) checkArrayValuesAreAllTrue(states[3]).should.be.true; });
    it("        AND if the player's score is greater than 21 THEN the dealer is declared the winner", () => { if (results.playersScore > 21) return getElementText(driver, 'results-area-blackjack').should.eventually.equal('WINNER: Dealer.'); });
  });
});
