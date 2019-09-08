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


// import Selenium helpers
const SeleniumWebdriverInteractions = require("../../helper/seleniumWebdriverInteractions.js");
const perform = new SeleniumWebdriverInteractions(driver, until, promise);
const {getScores, getState01, getState02, getState03, getState04, getState05, checkArrayValuesAreAllTrue} = require("../../helper/seleniumBlackjackFunctions");


// Initialise game variables
const LANDING_PAGE = "file:///Users/Lee/workspace/beginner-js-card-games/src/blackjack.html";
var state01;
var state02;
var state03;
var state04;
var state05;
var gameScores;
var playersScore;
var playerHasWon = false;
var dealerHasWon = false;

// Set game variables
async function setGameStateVariables() {
  state01 = await getState01(driver);
  state02 = await getState02(driver);
  state03 = await getState03(driver);
  state04 = await getState04(driver);
  state05 = await getState05(driver);
  gameScores = await getScores(driver);
  playersScore = parseInt(gameScores[0], 10);
  dealersScore = parseInt(gameScores[1], 10);
  result = "";
}

async function setPlayerHasWon() {
  if (playersScore === 21) playerHasWon = true;
}

async function setDealerHasWon() {
  if (playersScore > 21) dealerHasWon = true;
}


// Tests
describe("VERIFY THE STATE OF THE GAME AFTER THE PLAYER TWISTS", function(){
  before(function(){
    return perform.loadPage(LANDING_PAGE);
  })


  after(function(){
    driver.quit();
  })


  describe("01: Start a new game", function(){
    it("The new game button has been clicked", function(){return perform.clickButton("new_game_button").should.eventually.be.true;});
  })

  
  describe("02: Deal", function(){
    it("The deal button has been clicked", function(){return perform.clickButton("deal_button").should.eventually.be.true;});
  })


  describe("03: Fetch results...", function(){
    it("Local variables have been updated", async() => {
      await setGameStateVariables();
      await setPlayerHasWon();
      await setDealerHasWon();
    })
  })


  describe("04: Twist", function(){
    it("The twist button has been clicked", function(){if (!playerHasWon) return perform.clickButton("twist_button").should.eventually.be.true;});
  })


  describe("05: Fetch results...", function(){
    it("Local variables have been updated", async() => {
      await setGameStateVariables();
      await setPlayerHasWon();
      await setDealerHasWon();
    })
  })


  describe("06: Check the state of the page after the twist", function() {
    it("The page is NOT in State 1", function(){checkArrayValuesAreAllTrue(state01).should.be.false;})
    
    it("The page is NOT in State 2", function(){checkArrayValuesAreAllTrue(state02).should.be.false;})
    
    it("IF player's score < 21 THEN the page is in State 3", function(){if (!playerHasWon && !dealerHasWon) checkArrayValuesAreAllTrue(state03).should.be.true;})
    it("IF player's score < 21 THEN the page is NOT in State 4", function(){if (!playerHasWon && !dealerHasWon) checkArrayValuesAreAllTrue(state04).should.be.false;})
    
    it("IF player's score = 21 THEN the page is NOT in State 3", function(){if (playerHasWon) checkArrayValuesAreAllTrue(state03).should.be.false;})
    it("IF player's score = 21 THEN the page is in State 4", function(){if (playerHasWon) checkArrayValuesAreAllTrue(state04).should.be.true;})
    
    it("IF player's score > 21 THEN the page is NOT in State 3", function(){if (dealerHasWon) checkArrayValuesAreAllTrue(state03).should.be.false;})
    it("IF player's score > 21 THEN the page is in State 4", function(){if (dealerHasWon) checkArrayValuesAreAllTrue(state04).should.be.true;})
    
    it("The page is NOT in State 5", function(){checkArrayValuesAreAllTrue(state05).should.be.false;})
  })


  describe("07: Check the text values after the twist", function(){
    it("IF player's score < 21 THEN there's no winner declared", function(){if (!playerHasWon && !dealerHasWon) return perform.getElementText("results_area").should.eventually.equal("");});
    it("IF player's score = 21 THEN the player is declared the winner", function(){if (playerHasWon) return perform.getElementText("results_area").should.eventually.equal("WINNER: Player.");});
    it("IF player's score > 21 THEN the dealer is declared the winner", function(){if (dealerHasWon) return perform.getElementText("results_area").should.eventually.equal("WINNER: Dealer.");});
  })

})
