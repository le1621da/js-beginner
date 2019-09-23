// set up the test runner
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
//chai.should();

// set-up selenium
const webdriver = require("selenium-webdriver");
const until = webdriver.until;
const promise = webdriver.promise;
const driver = new webdriver.Builder()
  .forBrowser("chrome")
  .build();

// import and initialise Selenium helpers
const {setGameStateVariables, blackjackLandingPage, getPageStates, checkArrayValuesAreAllTrue} = require("../../helper/functions/seleniumBlackjackFunctions");
const SeleniumWebdriverInteractions = require("../../helper/classes/seleniumWebdriverInteractions.js");
const perform = new SeleniumWebdriverInteractions(driver, until, promise);

// local variables
var states = [];

  describe("VERIFY THE STATE OF THE PAGE WHEN IT'S INITIALLY LOADED", function(){
    before(function(){return perform.loadPage(blackjackLandingPage);})

    after(function(){driver.quit();})

    describe("01: Fetch results...", function() {
      it("Local variables have been updated", async() => {
        await setGameStateVariables(driver);
        states = getPageStates();
      })
    })

    describe("02: Check the state of the home page", function(){
      it("The page is in State 0", function(){checkArrayValuesAreAllTrue(states[0]).should.be.true;})
      it("The page is NOT in State 1", function(){checkArrayValuesAreAllTrue(states[1]).should.be.false;})
      it("The page is NOT in State 2", function(){checkArrayValuesAreAllTrue(states[2]).should.be.false;})
      it("The page is NOT in State 3", function(){checkArrayValuesAreAllTrue(states[3]).should.be.false;})
      it("The page is NOT in State 4", function(){checkArrayValuesAreAllTrue(states[4]).should.be.false;})
    })

  })
