/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

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

// Tests
describe('FEATURE: Blackjack', () => {
  after(async () => {
    driver.quit();
    await resetResults();
  });

  describe('SCENARIO 03: Deal', () => {
    it('GIVEN the blackjack page is loaded', () => loadPage(driver, blackjackLandingPage));
    it('WHEN the new game button has been clicked', () => clickButton(driver, 'new_game_button').should.eventually.be.true);
    it('WHEN the deal button is clicked', () => clickButton(driver, 'deal_button').should.eventually.be.true);
    it('  AND selenium gets values from the page for verfication', async () => {
      await setGameStateVariables(driver);
      states = getPageStates(driver);
      results = getResults();
    });
    it('THEN the page is NOT in State 0', () => { checkArrayValuesAreAllTrue(states[0]).should.be.false; });
    it('  AND the page is NOT in State 1', () => { checkArrayValuesAreAllTrue(states[1]).should.be.false; });
    it('  AND the page is NOT in State 4', () => { checkArrayValuesAreAllTrue(states[4]).should.be.false; });

    it("  AND if the player's score is less than 21 THEN the page is in State 2", () => { if (!results.playerHasWon) checkArrayValuesAreAllTrue(states[2]).should.be.true; });
    it("  AND if the player's score is less than 21 THEN the page is NOT in State 3", () => { if (!results.playerHasWon) checkArrayValuesAreAllTrue(states[3]).should.be.false; });
    it("  AND if the player's score is less than 21 THEN there's no winner declared", () => { if (!results.playerHasWon) return getElementText(driver, 'results_area').should.eventually.equal(''); });

    it("  AND if the player's score equals 21 THEN the page is NOT in State 2", () => { if (results.playerHasWon) checkArrayValuesAreAllTrue(states[2]).should.be.false; });
    it("  AND if the player's score equals 21 THEN the page is in State 3", () => { if (results.playerHasWon) checkArrayValuesAreAllTrue(states[3]).should.be.true; });
    it("  AND if the player's score equals 21 THEN the player is declared the winner", () => { if (results.playerHasWon) return getElementText(driver, 'results_area').should.eventually.equal('WINNER: Player.'); });
  });
});
