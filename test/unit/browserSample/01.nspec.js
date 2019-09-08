// to enable mocha tests to run through a browser
mocha.setup('bdd');

// set up the test runner
//var chai = require("chai");
//var chaiAsPromised = require("chai-as-promised");
//chai.use(chaiAsPromised);
chai.should();

// import the functions
//const {buildADeckOfCards, shuffleADeckOfCards, buildAndShuffleADeckOfCards, deal, getHandString, getScore} = require("../includes/scripts/helper/blackjackFunctions.js");

describe("Blackjack test suite", function(){
  
  describe("The deck", function(){

    describe("A new deck", function(){

      let deck = buildADeckOfCards();
      it("A new deck has 52 cards", function(){deck.length.should.equal(52);})
      it("The 1st card is a 2", function(){deck[0].should.have.property("rank").equals("Two");})
      it("The 1st card is a Spade", function(){deck[0].should.have.property("suit").equals("Spades");})
      it("The 1st card is worth 2 points", function(){deck[0].should.have.property("value").equals(2);})

      it("The 2nd card is a 3", function(){deck[0].should.have.property("rank").equals("Three");})
      it("The 2nd card is a Spade", function(){deck[0].should.have.property("suit").equals("Spades");})
      it("The 2nd card is worth 3 points", function(){deck[0].should.have.property("value").equals(3);})

      it("The 3rd card is a 4", function(){deck[0].should.have.property("rank").equals("Four");})
      it("The 3rd card is a Spade", function(){deck[0].should.have.property("suit").equals("Spades");})
      it("The 3rd card is worth 4 points", function(){deck[0].should.have.property("value").equals(4);})

      it("The 4th card is a 5", function(){deck[0].should.have.property("rank").equals("Five");})
      it("The 4th card is a Spade", function(){deck[0].should.have.property("suit").equals("Spades");})
      it("The 4th card is worth 5 points", function(){deck[0].should.have.property("value").equals(5);})

      it("The 5th card is a 6", function(){deck[0].should.have.property("rank").equals("Six");})
      it("The 5th card is a Spade", function(){deck[0].should.have.property("suit").equals("Spades");})
      it("The 5th card is worth 6 points", function(){deck[0].should.have.property("value").equals(6);})

      it("The 6th card is a 7", function(){deck[0].should.have.property("rank").equals("Seven");})
      it("The 6th card is a Spade", function(){deck[0].should.have.property("suit").equals("Spades");})
      it("The 6th card is worth 7 points", function(){deck[0].should.have.property("value").equals(7);})

      it("The 7th card is a 8", function(){deck[0].should.have.property("rank").equals("Eight");})
      it("The 7th card is a Spade", function(){deck[0].should.have.property("suit").equals("Spades");})
      it("The 7th card is worth 8 points", function(){deck[0].should.have.property("value").equals(8);})

      it("The 8th card is a 9", function(){deck[0].should.have.property("rank").equals("Nine");})
      it("The 8th card is a Spade", function(){deck[0].should.have.property("suit").equals("Spades");})
      it("The 8th card is worth 9 points", function(){deck[0].should.have.property("value").equals(9);})

      it("The 9th card is a 10", function(){deck[0].should.have.property("rank").equals("Ten");})
      it("The 9th card is a Spade", function(){deck[0].should.have.property("suit").equals("Spades");})
      it("The 9th card is worth 10 points", function(){deck[0].should.have.property("value").equals(10);})

      it("The 10th card is a Jack", function(){deck[0].should.have.property("rank").equals("Jack");})
      it("The 10th card is a Spade", function(){deck[0].should.have.property("suit").equals("Spades");})
      it("The 10th card is worth 10 points", function(){deck[0].should.have.property("value").equals(10);})

      it("The 11th card is a Queen", function(){deck[0].should.have.property("rank").equals("Queen");})
      it("The 11th card is a Spade", function(){deck[0].should.have.property("suit").equals("Spades");})
      it("The 11th card is worth 10 points", function(){deck[0].should.have.property("value").equals(10);})

      it("The 12h card is a King", function(){deck[0].should.have.property("rank").equals("King");})
      it("The 12th card is a Spade", function(){deck[0].should.have.property("suit").equals("Spades");})
      it("The 12th card is worth 10 points", function(){deck[0].should.have.property("value").equals(10);})

      it("The 13th card is an Ace", function(){deck[0].should.have.property("rank").equals("Ace");})
      it("The 13th card is a Spade", function(){deck[0].should.have.property("suit").equals("Spades");})
      it("The 13th card is worth 11 points", function(){deck[0].should.have.property("value").equals(11);})

      it("The 15th card is a 3", function(){deck[14].should.have.property("rank").equals("Three");})
      it("The 15th card is a Club", function(){deck[14].should.have.property("suit").equals("Clubs");})
      it("The 29th card is a 4", function(){deck[28].should.have.property("rank").equals("Four");})
      it("The 29th card is a Diamond", function(){deck[28].should.have.property("suit").equals("Diamonds");})
      it("The last card is an Ace", function(){deck[51].should.have.property("rank").equals("Ace");})
      it("The last card is a Heart", function(){deck[51].should.have.property("suit").equals("Hearts");})
      it("The last card is worth 1 point", function(){deck[51].should.have.property("value").equals(1);})

    })
    

    describe("A shuffled deck", function(){

      let deck = buildADeckOfCards();
      let shuffledDeck = shuffleADeckOfCards(deck);
      let newDeck = buildADeckOfCards();
      it("The original deck has 0 cards after being shuffled", function(){deck.length.should.equal(0);});
      it("The shuffled deck has 2 cards", function(){shuffledDeck.length.should.equal(52);}); 
      it("A shuffled deck != an unshuffled deck", function(){shuffledDeck.should.not.equal(newDeck);}); 

    })
    

    describe("Wrapping the build and shuffle functions", function(){

      let shuffledDeck = buildAndShuffleADeckOfCards();
      let freshDeck = buildADeckOfCards();

      it("A shuffled deck contains 52 cards", function(){shuffledDeck.length.should.equal(52);});
      it("A fresh deck contains 52 cards", function(){freshDeck.length.should.equal(52);});
      it("A shuffled deck != an unshuffled deck", function(){shuffledDeck.length.should.not.equal(freshDeck);});

    })
    
  })
  
  
  describe("Dealing", function(){
    
    describe("Deal", function(){

      let playersHand = [];
      let dealersHand = [];
      let deck = buildADeckOfCards();   

      // Deal one
      let dealt = deal(playersHand, deck);
      remainingDeck = dealt.deckOfCards;

      it("A deck has 51 cards a card has been dealt", function(){remainingDeck.length.should.equal(51);})
      it("A player has a 2 after being dealt from an unshuffled deck", function(){playersHand[0].should.have.property("suit").equals("Spades");})
      it("A player has a Spade after being dealt from an unshuffled deck", function(){playersHand[0].should.have.property("rank").equals("Two");})
      it("A player's hand is worth 2 points after being dealt from an unshuffled deck", function(){playersHand[0].should.have.property("value").equals(2);})
      it("A player's hand is not empty after they've been dealt 1 card", function(){playersHand.should.not.be.empty;})
      it("The dealer's hand is empty after the the player has been dealt 1 ccard", function(){dealersHand.should.be.empty;})

    })

    describe("Stringify the player's Hand", function(){

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

  describe("Scoring", function(){

    describe("Calculate the score", function(){
      
      describe("Hand 01", function(){

        let handOne = [{
          "suit": "Spades", "rank": "Two", "value": 2
        }]
        let scoreOne = getScore(handOne);
        it("The hand is worth 2 points", function(){scoreOne.should.equal(2);})
        
      })
        
      describe("Hand 02", function(){

        let handTwo = [
          {"suit": "Spades", "rank": "Two", "value": 2},
          {"suit": "Diamonds", "rank": "King", "value": 10}
        ]  
        let scoreTwo = getScore(handTwo);
        it("The hand is worth 12 points", function(){scoreTwo.should.equal(12);})
        
      })
        
      describe("Hand 03", function(){

        let handThree = [
          {"suit": "Spades", "rank": "Two", "value": 2},
          {"suit": "Diamonds", "rank": "Seven", "value": 7},
          {"suit": "Diamonds", "rank": "Ace", "value": 1}
        ]  
        let scoreThree = getScore(handThree);
        it("The hand is worth 20 points", function(){scoreThree.should.equal(20);})
        
      })
        
      describe("Hand 04", function(){

        let handFour = [
          {"suit": "Spades", "rank": "Three", "value": 3},
          {"suit": "Diamonds", "rank": "Seven", "value": 7},
          {"suit": "Diamonds", "rank": "Ace", "value": 1}
        ]   
        let scoreFour = getScore(handFour);
        it("The hand is worth 21 points", function(){scoreFour.should.equal(21);})
        
      })
        
      describe("Hand 05", function(){

        let handFive = [
          {"suit": "Spades", "rank": "Four", "value": 4},
          {"suit": "Diamonds", "rank": "Seven", "value": 7},
          {"suit": "Diamonds", "rank": "Ace", "value": 1}
        ]   
        let scoreFive = getScore(handFive);
        it("The hand is worth 12 points", function(){scoreFive.should.equal(12);})
        
      })
        
      describe("Hand 06", function(){

        let handSix = [
          {"suit": "Spades", "rank": "Seven", "value": 7},
          {"suit": "Diamonds", "rank": "Seven", "value": 7},
          {"suit": "Diamonds", "rank": "Eight", "value": 8}
        ]   
        let scoreSix = getScore(handSix);
        it("The hand is worth 22 points", function(){scoreSix.should.equal(22);})
        
      })
        
      describe("Hand 07", function(){

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
        it("The hand is worth 28 points", function(){scoreSeven.should.equal(28);})
        
      })
      
    })
    
    describe("Determine the winner", function(){
      
      describe("Game 01", function(){
      
        let resultA = checkScores(true, 22, 1);
        it("Winner: Dealer", function(){resultA.should.have.property("winner").equals("Dealer");});
        it("Reason: The player has bust.", function(){resultA.should.have.property("string").equals("Player busts.");});
        
      })
      
      describe("Game 02", function(){
      
        let resultB = checkScores(true, 21, 1); 
        it("Winner: Player", function(){resultB.should.have.property("winner").equals("Player");});
        it("Reason: Player automatically wins with a 21", function(){resultB.should.have.property("string").equals("Player wins with a 21!");});
        
      })
        
      describe("Game 03", function(){

        let resultC = checkScores(true, 20, 22); 
        it("Winner: Player", function(){resultC.should.have.property("winner").equals("Player");});
        it("Reason: The dealer's bust", function(){resultC.should.have.property("string").equals("Dealer busts.");});
        
      })
        
      
      describe("Game 04", function(){

        let resultD = checkScores(true, 20,20);
        it("Winner: Dealer", function(){resultD.should.have.property("winner").equals("Dealer");});
        it("Reason: Dealer wins with a tie", function(){resultD.should.have.property("string").equals("It's a tie!  Dealer wins.");});
        
      })
        
      describe("Game 05", function(){

        let resultE = checkScores(true, 19, 20);
        it("Winner: Dealer", function(){resultE.should.have.property("winner").equals("Dealer");});
        it("Reason: Dealer outscores player", function(){resultE.should.have.property("string").equals("Dealer outscores player.");});
        
      })
        
      
      describe("Game 06", function(){

        let resultF = checkScores(true, 19, 18);
        it("Winner: n/a", function(){resultF.should.have.property("winner").equals("Pending");});
        it("Reason: Game in progress", function(){resultF.should.have.property("string").equals("Game in progress...");});
        
      })
        
      describe("Game 07", function(){

        let resultG = checkScores(false, 10, 10);
        it("Winner: n/a", function(){resultG.should.have.property("winner").equals("Pending");});
        it("Reason: Game in progress", function(){resultG.should.have.property("string").equals("Game in progress...");});
        
      })
        
      describe("Game 08", function(){

        let resultH = checkScores(false, 10, 11);
        it("Winner: n/a", function(){resultH.should.have.property("winner").equals("Pending");});
        it("Reason: Game in progress", function(){resultH.should.have.property("string").equals("Game in progress...");});
        
      })

    })

  })
  
})