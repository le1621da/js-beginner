/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

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
  setGameStateVariables,
} = require('../../helper/functions/seleniumBlackjackFunctions.js');

const {
  loadPage,
  clickButton,
} = require('../../helper/functions/seleniumCommonFunctions.js');

// local variables
let states = [];


// Tests
describe('FEATURE: Blackjack', () => {
  after(() => { driver.quit(); });

  describe('SCENARIO 02: New game', () => {
    it('GIVEN the blackjack page is loaded', () => loadPage(driver, blackjackLandingPage));
    it('WHEN the new game button has been clicked', () => clickButton(driver, 'new_game_button').should.eventually.be.true);
    it('  AND selenium gets values from the page for verfication', async () => {
      await setGameStateVariables(driver);
      states = getPageStates(driver);
    });
    it('THEN the page is NOT in State 0', () => { checkArrayValuesAreAllTrue(states[0]).should.be.false; });
    it('  AND the page is in State 1', () => { checkArrayValuesAreAllTrue(states[1]).should.be.true; });
    it('  AND the page is NOT in State 2', () => { checkArrayValuesAreAllTrue(states[2]).should.be.false; });
    it('  AND the page is NOT in State 3', () => { checkArrayValuesAreAllTrue(states[3]).should.be.false; });
    it('  AND the page is NOT in State 4', () => { checkArrayValuesAreAllTrue(states[4]).should.be.false; });
  });
});
