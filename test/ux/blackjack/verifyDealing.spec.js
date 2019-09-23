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


// Initialise game variables
var gameScores;
var playersScore;
var playerHasWon = false;


async function setPlayerHasWon() {
  if (playersScore === 21) playerHasWon = true;
  result = "WINNER: Player.  "
}


// Tests
describe("VERIFY THE STATE OF THE GAME AFTER THE DEAL", function(){
  before(function(){return perform.loadPage(blackjackLandingPage);})

  after(function(){driver.quit();})

  describe("01: Start a new game", function(){
    it("The new game button has been clicked", function(){return perform.clickButton("new_game_button").should.eventually.be.true;});
  })
  
  describe("02: Deal", function(){
    it("The deal button has been clicked", function(){return perform.clickButton("deal_button").should.eventually.be.true;});
  })

  describe("03: Fetch results...", function(){
    it("Local variables have been updated", async() => {
      await setGameStateVariables(driver);
      states = getPageStates();
    })
  })

  describe("04: Check the state of the page after the deal", function() {
    it("The page is NOT in State 0", function(){checkArrayValuesAreAllTrue(states[0]).should.be.false;})
    it("The page is NOT in State 1", function(){checkArrayValuesAreAllTrue(states[1]).should.be.false;})
    it("IF player's score < 21 THEN the page is in State 2", function(){if (!playerHasWon) checkArrayValuesAreAllTrue(states[2]).should.be.true;})
    it("IF player's score < 21 THEN the page is NOT in State 3", function(){if (!playerHasWon) checkArrayValuesAreAllTrue(states[3]).should.be.false;})
    it("IF player's score = 21 THEN the page is NOT in State 2", function(){if (playerHasWon) checkArrayValuesAreAllTrue(states[2]).should.be.false;})
    it("IF player's score = 21 THEN the page is in State 3", function(){if (playerHasWon) checkArrayValuesAreAllTrue(states[3]).should.be.true;})
    it("The page is NOT in State 4", function(){checkArrayValuesAreAllTrue(states[4]).should.be.false;})
  })

  describe("05: Check the text values after the deal", function(){
    it("IF player's score < 21 THEN there's no winner declared", function(){if (!playerHasWon) return perform.getElementText("results_area").should.eventually.equal("");});
    it("IF player's score = 21 THEN the player is declared the winner", function(){if (playerHasWon) return perform.getElementText("results_area").should.eventually.equal("WINNER: Player.");});
  })

})
