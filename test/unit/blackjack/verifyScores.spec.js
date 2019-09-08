// set up the test runner
var chai = require("chai");
//var chaiAsPromised = require("chai-as-promised");
//chai.use(chaiAsPromised);
chai.should();

// import the functions
const {getScore} = require("../../../src/includes/scripts/helper/blackjack");
const {buildADeckOfCards, shuffleADeckOfCards, buildAndShuffleADeckOfCards, deal, getHandString, checkScores} = require("../../../src/includes/scripts/helper/cards");


  describe("VERIFY THE SCORING FUNCTIONS", function(){

    describe("01: Calculate the score", function(){

      let handOne = [{
        "suit": "Spades", "rank": "Two", "value": 2
      }]
      let scoreOne = getScore(handOne);
      it("Hand One is worth 2 points", function(){scoreOne.should.equal(2);})

      let handTwo = [
        {"suit": "Spades", "rank": "Two", "value": 2},
        {"suit": "Diamonds", "rank": "King", "value": 10}
      ]  
      let scoreTwo = getScore(handTwo);
      it("Hand Two is worth 12 points", function(){scoreTwo.should.equal(12);})

      let handThree = [
        {"suit": "Spades", "rank": "Two", "value": 2},
        {"suit": "Diamonds", "rank": "Seven", "value": 7},
        {"suit": "Diamonds", "rank": "Ace", "value": 1}
      ]  
      let scoreThree = getScore(handThree);
      it("Hand Three is worth 20 points", function(){scoreThree.should.equal(20);})

      let handFour = [
        {"suit": "Spades", "rank": "Three", "value": 3},
        {"suit": "Diamonds", "rank": "Seven", "value": 7},
        {"suit": "Diamonds", "rank": "Ace", "value": 1}
      ]   
      let scoreFour = getScore(handFour);
      it("Hand Four is worth 21 points", function(){scoreFour.should.equal(21);})

      let handFive = [
        {"suit": "Spades", "rank": "Four", "value": 4},
        {"suit": "Diamonds", "rank": "Seven", "value": 7},
        {"suit": "Diamonds", "rank": "Ace", "value": 1}
      ]   
      let scoreFive = getScore(handFive);
      it("Hand Five is worth 12 points", function(){scoreFive.should.equal(12);})

      let handSix = [
        {"suit": "Spades", "rank": "Seven", "value": 7},
        {"suit": "Diamonds", "rank": "Seven", "value": 7},
        {"suit": "Diamonds", "rank": "Eight", "value": 8}
      ]   
      let scoreSix = getScore(handSix);
      it("Hand Six is worth 22 points", function(){scoreSix.should.equal(22);})
      
      let handSeven = [
        {"suit": "Spades", "rank": "Four", "value": 4},
        {"suit": "Diamonds", "rank": "Six", "value": 6},
        {"suit": "Diamonds", "rank": "Five", "value": 5},
        {"suit": "Spades", "rank": "Ace", "value": 1},
        {"suit": "Diamonds", "rank": "Ace", "value": 1},
        {"suit": "Diamonds", "rank": "Three", "value": 3},
        {"suit": "Diamonds", "rank": "Eight", "value": 8},
      ]   
      let scoreSeven = getScore(handSeven);
      it("Hand Seven is worth 28 points", function(){scoreSeven.should.equal(28);})
      
    })
  })