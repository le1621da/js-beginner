// set up the test runner
var chai = require("chai");
//var chaiAsPromised = require("chai-as-promised");
//chai.use(chaiAsPromised);
chai.should();

// import the functions
const {getScore} = require("../../../src/includes/scripts/helper/blackjack");
const {buildADeckOfCards, shuffleADeckOfCards, buildAndShuffleADeckOfCards, deal, getHandString, checkScores} = require("../../../src/includes/scripts/helper/cards");
  
  describe("VERIFY THE DEALING FUNCTIONS", function(){
    
    describe("01: Check the state of the game and deck after the first card is dealt", function(){

      let playersHand = [];
      let dealersHand = [];
      let deck = buildADeckOfCards();   

      // Deal one
      let dealt = deal(playersHand, deck);
      remainingDeck = dealt.deckOfCards;

      it("A deck has 51 cards after a card has been dealt", function(){remainingDeck.length.should.equal(51);})
      it("A player has a 2 after being dealt a card from an unshuffled deck", function(){playersHand[0].should.have.property("suit").equals("Spades");})
      it("A player has a Spade after being dealt a card from an unshuffled deck", function(){playersHand[0].should.have.property("rank").equals("Two");})
      it("A player's hand is worth 2 points after being dealt a card from an unshuffled deck", function(){playersHand[0].should.have.property("value").equals(2);})
      it("A player's hand is not empty after they've been dealt a card", function(){playersHand.should.not.be.empty;})
      it("The dealer's hand is empty after the the player has been dealt a card", function(){dealersHand.should.be.empty;})

    })

    describe("02: Stringify the player's Hand", function(){

      let hand = [{
        "suit": "Spades",
        "rank": "Two"
      },{
        "suit": "Diamonds",
        "rank": "Three"
      }]

      it("The player's hand is converted into a string for printing", function(){getHandString(hand).should.equal("Two of Spades\nThree of Diamonds\n")});

    })
    
  })

