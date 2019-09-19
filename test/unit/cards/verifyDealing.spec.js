// set up the test runner
var chai = require("chai");
//var chaiAsPromised = require("chai-as-promised");
//chai.use(chaiAsPromised);
chai.should();

// import the functions
const {getScore} = require("../../../src/includes/scripts/helper/blackjack");
const {buildADeckOfCards, shuffleADeckOfCards, buildAndShuffleADeckOfCards, getHandString, checkScores, randomCardNumber, dealRandomCard} = require("../../../src/includes/scripts/helper/cards");
  
  describe("VERIFY THE DEALING FUNCTIONS", function(){

    describe("01: Stringify the player's Hand", function(){

      let hand = [{
        "suit": "Spades",
        "rank": "Two"
      },{
        "suit": "Diamonds",
        "rank": "Three"
      }]

      it("The player's hand is converted into a string for printing", function(){getHandString(hand).should.equal("Two of Spades\nThree of Diamonds\n")});

    })

    describe("02: Verify the random card number generator i", function(){
      let deck = buildADeckOfCards();
      it("The random card number generated is between 0 and 51", function(){randomCardNumber(deck).should.not.be.lessThan(0);})
      it("The random card number generated is between 0 and 51", function(){randomCardNumber(deck).should.not.be.greaterThan(51);})
      it("The random card number generated is between 0 and 51", function(){randomCardNumber(deck).should.be.greaterThan(-1);})
      it("The random card number generated is between 0 and 51", function(){randomCardNumber(deck).should.be.lessThan(52);})
    })


    describe("03: Verify the random card number generator ii", function(){
      let deck = [{ suit: 'Hearts', rank: 'Ace', value: 1 } ]
      it("The random card number generated is between 0 and 51", function(){randomCardNumber(deck).should.equal(0);})
    })


    describe("04: Verify the state of the game after dealing a random card from the deck i", function(){

      let playersHand = [];
      let dealersHand = [];
      let deck = buildADeckOfCards();   

      // Deal one
      let dealt = dealRandomCard(playersHand, deck);
      let remainingDeck = dealt.deckOfCards;

      it("A deck has 51 cards after a card has been dealt", function(){remainingDeck.length.should.equal(51);})
      it("A player's hand is not empty after they've been dealt a card", function(){playersHand.should.not.be.empty;})
      it("A player's score should be greater than 0 after they've been dealt a card", function(){playersHand[0].should.have.property("value").greaterThan(0);})
      it("The dealer's hand is empty after the the player has been dealt a card", function(){dealersHand.should.be.empty;})

    })

    describe("05: Verify the state of the game after dealing a random card from the deck ii", function(){

      let playersHand = [];
      let dealersHand = [];
      let deck =   [ { suit: 'Spades', rank: 'Two', value: 2 },
                    { suit: 'Diamonds', rank: 'Two', value: 2 }];  

      // Deal one
      let dealt = dealRandomCard(playersHand, deck);
      let remainingDeck = dealt.deckOfCards;

      it("A deck has 51 cards after a card has been dealt", function(){remainingDeck.length.should.equal(1);})
      it("A player's hand is not empty after they've been dealt a card", function(){playersHand.should.not.be.empty;})
      it("A player's score should be greater than 0 after they've been dealt a card", function(){playersHand[0].should.have.property("value").equal(2);})
      it("The dealer's hand is empty after the the player has been dealt a card", function(){dealersHand.should.be.empty;})

    })

  })



