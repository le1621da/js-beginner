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
const {blackjackLandingPage, playerHasWon, dealerHasWon, checkArrayValuesAreAllTrue}  = require("../../helper/functions/seleniumBlackjackFunctions");
var {getPageStates} = require("../../helper/functions/seleniumBlackjackFunctions");
var {setGameStateVariables, setPlayerHasWon, setDealerHasWon} = require("../../helper/functions/seleniumBlackjackFunctions");

const SeleniumWebdriverInteractions = require("../../helper/classes/seleniumWebdriverInteractions.js");
const perform = new SeleniumWebdriverInteractions(driver, until, promise);

// local variables
var states = [];
var playerHasPlayed = false;

// Tests
describe("VERIFY THE STATE OF THE GAME AFTER THE PLAYER TWISTS", function(){
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
      await setPlayerHasWon(playerHasPlayed);
      await setDealerHasWon(playerHasPlayed);
    })
  })


  describe("04: Twist", function(){
    it("The twist button has been clicked", function(){if (!playerHasWon) return perform.clickButton("twist_button").should.eventually.be.true;});
  })


  describe("05: Fetch results...", function(){
    it("Local variables have been updated", async() => {
      await setGameStateVariables(driver);
      states = getPageStates();
      await setPlayerHasWon(playerHasPlayed);
      await setDealerHasWon(playerHasPlayed);
    })
  })


  describe("06: Check the state of the page after the twist", function() {
    it("The page is NOT in State 0", function(){checkArrayValuesAreAllTrue(states[0]).should.be.false;})
    
    it("The page is NOT in State 1", function(){checkArrayValuesAreAllTrue(states[1]).should.be.false;})
    
    it("IF player's score < 21 THEN the page is in State 2", function(){if (!playerHasWon && !dealerHasWon) checkArrayValuesAreAllTrue(states[2]).should.be.true;})
    it("IF player's score < 21 THEN the page is NOT in State 3", function(){if (!playerHasWon && !dealerHasWon) checkArrayValuesAreAllTrue(states[3]).should.be.false;})
    
    it("IF player's score = 21 THEN the page is NOT in State 2", function(){if (playerHasWon) checkArrayValuesAreAllTrue(states[2]).should.be.false;})
    it("IF player's score = 21 THEN the page is in State 3", function(){if (playerHasWon) checkArrayValuesAreAllTrue(states[3]).should.be.true;})
    
    it("IF player's score > 21 THEN the page is NOT in State 2", function(){if (dealerHasWon) checkArrayValuesAreAllTrue(states[2]).should.be.false;})
    it("IF player's score > 21 THEN the page is in State 3", function(){if (dealerHasWon) checkArrayValuesAreAllTrue(states[3]).should.be.true;})
    
    it("The page is NOT in State 5", function(){checkArrayValuesAreAllTrue(states[4]).should.be.false;})
  })


  describe("07: Check the text values after the twist", function(){
    it("IF player's score < 21 THEN there's no winner declared", function(){if (!playerHasWon && !dealerHasWon) return perform.getElementText("results_area").should.eventually.equal("");});
    it("IF player's score = 21 THEN the player is declared the winner", function(){if (playerHasWon) return perform.getElementText("results_area").should.eventually.equal("WINNER: Player.");});
    it("IF player's score > 21 THEN the dealer is declared the winner", function(){if (dealerHasWon) return perform.getElementText("results_area").should.eventually.equal("WINNER: Dealer.");});
  })

})
