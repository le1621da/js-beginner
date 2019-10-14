/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// set up the test runner
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
// chai.should();

// set-up selenium

const webdriver = require('selenium-webdriver');

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

// import and initialise Selenium helpers
const {
  blackjackLandingPage,
  checkArrayValuesAreAllTrue,
  getPageStates,
  setGameStateVariables,
} = require('../../helper/functions/seleniumBlackjackFunctions.js');

const {
  loadPage,
} = require('../../helper/functions/seleniumCommonFunctions.js');

// local variables
let states = [];

// Tests
describe('FEATURE: Blackjack', () => {
  after(() => { driver.quit(); });

  describe('SCENARIO 01: The landing page', () => {
    it('GIVEN the blackjack page is loaded', () => loadPage(driver, blackjackLandingPage));
    it('WHEN selenium gets values from the page for verfication', async () => {
      await setGameStateVariables(driver);
      states = getPageStates();
    });
    it('THEN the page is in State 0', () => { checkArrayValuesAreAllTrue(states[0]).should.be.true; });
    it('  AND the page is NOT in State 1', () => { checkArrayValuesAreAllTrue(states[1]).should.be.false; });
    it('  AND the page is NOT in State 2', () => { checkArrayValuesAreAllTrue(states[2]).should.be.false; });
    it('  AND the page is NOT in State 3', () => { checkArrayValuesAreAllTrue(states[3]).should.be.false; });
    it('  AND the page is NOT in State 4', () => { checkArrayValuesAreAllTrue(states[4]).should.be.false; });
  });
});
