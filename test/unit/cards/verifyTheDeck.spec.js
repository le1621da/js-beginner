// set up the test runner
var chai = require("chai");
//var chaiAsPromised = require("chai-as-promised");
//chai.use(chaiAsPromised);
chai.should();

// import the functions
const {getScore} = require("../../../src/includes/scripts/helper/blackjack");
const {buildADeckOfCards, shuffleADeckOfCards, buildAndShuffleADeckOfCards, deal, getHandString, checkScores} = require("../../../src/includes/scripts/helper/cards");
  
  describe("VERIFY THE DECK", function(){

    describe("01: Check a newly built deck", function(){

      let deck = buildADeckOfCards();
      it("A new deck has 52 cards", function(){deck.length.should.equal(52);})

      it("The 1st card is a 2", function(){deck[0].should.have.property("rank").equals("Two");})
      it("The 1st card is a Spade", function(){deck[0].should.have.property("suit").equals("Spades");})
      it("The 1st card is worth 2 points", function(){deck[0].should.have.property("value").equals(2);})

      it("The 2nd card is a 3", function(){deck[1].should.have.property("rank").equals("Three");})
      it("The 2nd card is a Spade", function(){deck[1].should.have.property("suit").equals("Spades");})
      it("The 2nd card is worth 3 points", function(){deck[1].should.have.property("value").equals(3);})

      it("The 3rd card is a 4", function(){deck[2].should.have.property("rank").equals("Four");})
      it("The 3rd card is a Spade", function(){deck[2].should.have.property("suit").equals("Spades");})
      it("The 3rd card is worth 4 points", function(){deck[2].should.have.property("value").equals(4);})

      it("The 4th card is a 5", function(){deck[3].should.have.property("rank").equals("Five");})
      it("The 4th card is a Spade", function(){deck[3].should.have.property("suit").equals("Spades");})
      it("The 4th card is worth 5 points", function(){deck[3].should.have.property("value").equals(5);})

      it("The 5th card is a 6", function(){deck[4].should.have.property("rank").equals("Six");})
      it("The 5th card is a Spade", function(){deck[4].should.have.property("suit").equals("Spades");})
      it("The 5th card is worth 6 points", function(){deck[4].should.have.property("value").equals(6);})

      it("The 6th card is a 7", function(){deck[5].should.have.property("rank").equals("Seven");})
      it("The 6th card is a Spade", function(){deck[5].should.have.property("suit").equals("Spades");})
      it("The 6th card is worth 7 points", function(){deck[5].should.have.property("value").equals(7);})

      it("The 7th card is a 8", function(){deck[6].should.have.property("rank").equals("Eight");})
      it("The 7th card is a Spade", function(){deck[6].should.have.property("suit").equals("Spades");})
      it("The 7th card is worth 8 points", function(){deck[6].should.have.property("value").equals(8);})

      it("The 8th card is a 9", function(){deck[7].should.have.property("rank").equals("Nine");})
      it("The 8th card is a Spade", function(){deck[7].should.have.property("suit").equals("Spades");})
      it("The 8th card is worth 9 points", function(){deck[7].should.have.property("value").equals(9);})

      it("The 9th card is a 10", function(){deck[8].should.have.property("rank").equals("Ten");})
      it("The 9th card is a Spade", function(){deck[8].should.have.property("suit").equals("Spades");})
      it("The 9th card is worth 10 points", function(){deck[8].should.have.property("value").equals(10);})

      it("The 10th card is a Jack", function(){deck[9].should.have.property("rank").equals("Jack");})
      it("The 10th card is a Spade", function(){deck[9].should.have.property("suit").equals("Spades");})
      it("The 10th card is worth 10 points", function(){deck[9].should.have.property("value").equals(10);})

      it("The 11th card is a Queen", function(){deck[10].should.have.property("rank").equals("Queen");})
      it("The 11th card is a Spade", function(){deck[10].should.have.property("suit").equals("Spades");})
      it("The 11th card is worth 10 points", function(){deck[10].should.have.property("value").equals(10);})

      it("The 12th card is a King", function(){deck[11].should.have.property("rank").equals("King");})
      it("The 12th card is a Spade", function(){deck[11].should.have.property("suit").equals("Spades");})
      it("The 12th card is worth 10 points", function(){deck[11].should.have.property("value").equals(10);})

      it("The 13th card is an Ace", function(){deck[12].should.have.property("rank").equals("Ace");})
      it("The 13th card is a Spade", function(){deck[12].should.have.property("suit").equals("Spades");})
      it("The 13th card is worth 11 points", function(){deck[12].should.have.property("value").equals(1);})

      it("The 14th card is a 2", function(){deck[13].should.have.property("rank").equals("Two");})
      it("The 14th card is a Club", function(){deck[13].should.have.property("suit").equals("Clubs");})
      it("The 14th card is worth 2 points", function(){deck[13].should.have.property("value").equals(2);})

      it("The 15th card is a 3", function(){deck[14].should.have.property("rank").equals("Three");})
      it("The 15th card is a Club", function(){deck[14].should.have.property("suit").equals("Clubs");})
      it("The 15th card is worth 3 points", function(){deck[14].should.have.property("value").equals(3);})

      it("The 16th card is a 4", function(){deck[15].should.have.property("rank").equals("Four");})
      it("The 16th card is a Club", function(){deck[15].should.have.property("suit").equals("Clubs");})
      it("The 16th card is worth 4 points", function(){deck[15].should.have.property("value").equals(4);})

      it("The 17th card is a 5", function(){deck[16].should.have.property("rank").equals("Five");})
      it("The 17th card is a Club", function(){deck[16].should.have.property("suit").equals("Clubs");})
      it("The 17th card is worth 5 points", function(){deck[16].should.have.property("value").equals(5);})

      it("The 18th card is a 6", function(){deck[17].should.have.property("rank").equals("Six");})
      it("The 18th card is a Club", function(){deck[17].should.have.property("suit").equals("Clubs");})
      it("The 18th card is worth 6 points", function(){deck[17].should.have.property("value").equals(6);})

      it("The 19th card is a 7", function(){deck[18].should.have.property("rank").equals("Seven");})
      it("The 19th card is a Club", function(){deck[18].should.have.property("suit").equals("Clubs");})
      it("The 19th card is worth 7 points", function(){deck[18].should.have.property("value").equals(7);})

      it("The 20th card is a 8", function(){deck[19].should.have.property("rank").equals("Eight");})
      it("The 20th card is a Club", function(){deck[19].should.have.property("suit").equals("Clubs");})
      it("The 20th card is worth 8 points", function(){deck[19].should.have.property("value").equals(8);})

      it("The 21st card is a 9", function(){deck[20].should.have.property("rank").equals("Nine");})
      it("The 21st card is a Club", function(){deck[20].should.have.property("suit").equals("Clubs");})
      it("The 21st card is worth 9 points", function(){deck[20].should.have.property("value").equals(9);})

      it("The 22nd card is a 10", function(){deck[21].should.have.property("rank").equals("Ten");})
      it("The 22nd card is a Club", function(){deck[21].should.have.property("suit").equals("Clubs");})
      it("The 22nd card is worth 10 points", function(){deck[21].should.have.property("value").equals(10);})

      it("The 23rd card is a Jack", function(){deck[22].should.have.property("rank").equals("Jack");})
      it("The 23rd card is a Club", function(){deck[22].should.have.property("suit").equals("Clubs");})
      it("The 23rd card is worth 10 points", function(){deck[22].should.have.property("value").equals(10);})

      it("The 24th card is a Queen", function(){deck[23].should.have.property("rank").equals("Queen");})
      it("The 24th card is a Club", function(){deck[23].should.have.property("suit").equals("Clubs");})
      it("The 24th card is worth 10 points", function(){deck[23].should.have.property("value").equals(10);})

      it("The 25th card is a King", function(){deck[24].should.have.property("rank").equals("King");})
      it("The 25th card is a Club", function(){deck[24].should.have.property("suit").equals("Clubs");})
      it("The 25th card is worth 10 points", function(){deck[24].should.have.property("value").equals(10);})

      it("The 26th card is an Ace", function(){deck[25].should.have.property("rank").equals("Ace");})
      it("The 26th card is a Club", function(){deck[25].should.have.property("suit").equals("Clubs");})
      it("The 26th card is worth 11 points", function(){deck[25].should.have.property("value").equals(1);})


      it("The 27th card is a 2", function(){deck[26].should.have.property("rank").equals("Two");})
      it("The 27th card is a Diamond", function(){deck[26].should.have.property("suit").equals("Diamonds");})
      it("The 27th card is worth 2 points", function(){deck[26].should.have.property("value").equals(2);})

      it("The 28th card is a 3", function(){deck[27].should.have.property("rank").equals("Three");})
      it("The 28th card is a Diamond", function(){deck[27].should.have.property("suit").equals("Diamonds");})
      it("The 28th card is worth 3 points", function(){deck[27].should.have.property("value").equals(3);})

      it("The 29th card is a 4", function(){deck[28].should.have.property("rank").equals("Four");})
      it("The 29th card is a Diamond", function(){deck[28].should.have.property("suit").equals("Diamonds");})
      it("The 29th card is worth 4 points", function(){deck[28].should.have.property("value").equals(4);})

      it("The 30th card is a 5", function(){deck[29].should.have.property("rank").equals("Five");})
      it("The 30th card is a Diamond", function(){deck[29].should.have.property("suit").equals("Diamonds");})
      it("The 30th card is worth 5 points", function(){deck[29].should.have.property("value").equals(5);})

      it("The 31st card is a 6", function(){deck[30].should.have.property("rank").equals("Six");})
      it("The 31st card is a Diamond", function(){deck[30].should.have.property("suit").equals("Diamonds");})
      it("The 31st card is worth 6 points", function(){deck[30].should.have.property("value").equals(6);})

      it("The 32nd card is a 7", function(){deck[31].should.have.property("rank").equals("Seven");})
      it("The 32nd card is a Diamond", function(){deck[31].should.have.property("suit").equals("Diamonds");})
      it("The 32nd card is worth 7 points", function(){deck[31].should.have.property("value").equals(7);})

      it("The 33rd card is a 8", function(){deck[32].should.have.property("rank").equals("Eight");})
      it("The 33rd card is a Diamond", function(){deck[32].should.have.property("suit").equals("Diamonds");})
      it("The 33rd card is worth 8 points", function(){deck[32].should.have.property("value").equals(8);})

      it("The 34th card is a 9", function(){deck[33].should.have.property("rank").equals("Nine");})
      it("The 34th card is a Diamond", function(){deck[33].should.have.property("suit").equals("Diamonds");})
      it("The 34th card is worth 9 points", function(){deck[33].should.have.property("value").equals(9);})

      it("The 35th card is a 10", function(){deck[34].should.have.property("rank").equals("Ten");})
      it("The 35th card is a Diamond", function(){deck[34].should.have.property("suit").equals("Diamonds");})
      it("The 35th card is worth 10 points", function(){deck[34].should.have.property("value").equals(10);})

      it("The 36th card is a Jack", function(){deck[35].should.have.property("rank").equals("Jack");})
      it("The 36th card is a Diamond", function(){deck[35].should.have.property("suit").equals("Diamonds");})
      it("The 36th card is worth 10 points", function(){deck[35].should.have.property("value").equals(10);})

      it("The 37th card is a Queen", function(){deck[36].should.have.property("rank").equals("Queen");})
      it("The 37th card is a Diamond", function(){deck[36].should.have.property("suit").equals("Diamonds");})
      it("The 37th card is worth 10 points", function(){deck[36].should.have.property("value").equals(10);})

      it("The 38th card is a King", function(){deck[37].should.have.property("rank").equals("King");})
      it("The 38th card is a Diamond", function(){deck[37].should.have.property("suit").equals("Diamonds");})
      it("The 38th card is worth 10 points", function(){deck[37].should.have.property("value").equals(10);})

      it("The 39th card is an Ace", function(){deck[38].should.have.property("rank").equals("Ace");})
      it("The 39th card is a Diamond", function(){deck[38].should.have.property("suit").equals("Diamonds");})
      it("The 39th card is worth 11 points", function(){deck[38].should.have.property("value").equals(1);})


      it("The 40th card is a 2", function(){deck[39].should.have.property("rank").equals("Two");})
      it("The 40th card is a Spade", function(){deck[39].should.have.property("suit").equals("Hearts");})
      it("The 40th card is worth 2 points", function(){deck[39].should.have.property("value").equals(2);})

      it("The 41st card is a 3", function(){deck[40].should.have.property("rank").equals("Three");})
      it("The 41st card is a Spade", function(){deck[40].should.have.property("suit").equals("Hearts");})
      it("The 41st card is worth 3 points", function(){deck[40].should.have.property("value").equals(3);})

      it("The 42nd card is a 4", function(){deck[41].should.have.property("rank").equals("Four");})
      it("The 42nd card is a Spade", function(){deck[41].should.have.property("suit").equals("Hearts");})
      it("The 42nd card is worth 4 points", function(){deck[41].should.have.property("value").equals(4);})

      it("The 43rd card is a 5", function(){deck[42].should.have.property("rank").equals("Five");})
      it("The 43rd card is a Spade", function(){deck[42].should.have.property("suit").equals("Hearts");})
      it("The 43rd card is worth 5 points", function(){deck[42].should.have.property("value").equals(5);})

      it("The 44th card is a 6", function(){deck[43].should.have.property("rank").equals("Six");})
      it("The 44th card is a Spade", function(){deck[43].should.have.property("suit").equals("Hearts");})
      it("The 44th card is worth 6 points", function(){deck[43].should.have.property("value").equals(6);})

      it("The 45th card is a 7", function(){deck[44].should.have.property("rank").equals("Seven");})
      it("The 45th card is a Spade", function(){deck[44].should.have.property("suit").equals("Hearts");})
      it("The 45th card is worth 7 points", function(){deck[44].should.have.property("value").equals(7);})

      it("The 46th card is a 8", function(){deck[45].should.have.property("rank").equals("Eight");})
      it("The 46th card is a Spade", function(){deck[45].should.have.property("suit").equals("Hearts");})
      it("The 46th card is worth 8 points", function(){deck[45].should.have.property("value").equals(8);})

      it("The 47th card is a 9", function(){deck[46].should.have.property("rank").equals("Nine");})
      it("The 47th card is a Spade", function(){deck[46].should.have.property("suit").equals("Hearts");})
      it("The 47th card is worth 9 points", function(){deck[46].should.have.property("value").equals(9);})

      it("The 48th card is a 10", function(){deck[47].should.have.property("rank").equals("Ten");})
      it("The 48th card is a Spade", function(){deck[47].should.have.property("suit").equals("Hearts");})
      it("The 48th card is worth 10 points", function(){deck[47].should.have.property("value").equals(10);})

      it("The 49th card is a Jack", function(){deck[48].should.have.property("rank").equals("Jack");})
      it("The 49th card is a Spade", function(){deck[48].should.have.property("suit").equals("Hearts");})
      it("The 49th card is worth 10 points", function(){deck[48].should.have.property("value").equals(10);})

      it("The 50th card is a Queen", function(){deck[49].should.have.property("rank").equals("Queen");})
      it("The 50th card is a Spade", function(){deck[49].should.have.property("suit").equals("Hearts");})
      it("The 50th card is worth 10 points", function(){deck[49].should.have.property("value").equals(10);})

      it("The 51st card is a King", function(){deck[50].should.have.property("rank").equals("King");})
      it("The 51st card is a Spade", function(){deck[50].should.have.property("suit").equals("Hearts");})
      it("The 51st card is worth 10 points", function(){deck[50].should.have.property("value").equals(10);})

      it("The 52nd card is an Ace", function(){deck[51].should.have.property("rank").equals("Ace");})
      it("The 52nd card is a Spade", function(){deck[51].should.have.property("suit").equals("Hearts");})
      it("The 52nd card is worth 11 points", function(){deck[51].should.have.property("value").equals(1);})

    })
    

    describe("02: Check a shuffled deck", function(){

      let deck = buildADeckOfCards();
      let shuffledDeck = shuffleADeckOfCards(deck);
      let newDeck = buildADeckOfCards();
      it("The original deck has 0 cards after being shuffled", function(){deck.length.should.equal(0);});
      it("The shuffled deck has 52 cards", function(){shuffledDeck.length.should.equal(52);}); 
      it("A shuffled deck != an unshuffled deck", function(){shuffledDeck.should.not.equal(newDeck);}); 

    })
    

    describe("03: Check the wrapped build and shuffle functions", function(){

      let shuffledDeck = buildAndShuffleADeckOfCards();
      let freshDeck = buildADeckOfCards();

      it("A shuffled deck contains 52 cards", function(){shuffledDeck.length.should.equal(52);});
      it("A fresh deck contains 52 cards", function(){freshDeck.length.should.equal(52);});
      it("A shuffled deck != an unshuffled deck", function(){shuffledDeck.length.should.not.equal(freshDeck);});

    })
    
  })