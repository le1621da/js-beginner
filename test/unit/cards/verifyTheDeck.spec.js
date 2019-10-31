/* eslint-disable no-undef */
// set up the test runner
const chai = require('chai');
// var chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised);
chai.should();

// import the functions
const {
  buildADeckOfCards, shuffleADeckOfCards, buildAndShuffleADeckOfCards,
} = require('../../../src/functions/cards');

describe('VERIFY THE DECK', () => {
  describe('01: Check a newly built deck', () => {
    const deck = buildADeckOfCards();
    it('A new deck has 52 cards', () => { deck.length.should.equal(52); });

    it('The 1st card is a 2', () => { deck[0].should.have.property('rank').equals('Two'); });
    it('The 1st card is a Spade', () => { deck[0].should.have.property('suit').equals('Spades'); });
    it('The 1st card is worth 2 points', () => { deck[0].should.have.property('value').equals(2); });

    it('The 2nd card is a 3', () => { deck[1].should.have.property('rank').equals('Three'); });
    it('The 2nd card is a Spade', () => { deck[1].should.have.property('suit').equals('Spades'); });
    it('The 2nd card is worth 3 points', () => { deck[1].should.have.property('value').equals(3); });

    it('The 3rd card is a 4', () => { deck[2].should.have.property('rank').equals('Four'); });
    it('The 3rd card is a Spade', () => { deck[2].should.have.property('suit').equals('Spades'); });
    it('The 3rd card is worth 4 points', () => { deck[2].should.have.property('value').equals(4); });

    it('The 4th card is a 5', () => { deck[3].should.have.property('rank').equals('Five'); });
    it('The 4th card is a Spade', () => { deck[3].should.have.property('suit').equals('Spades'); });
    it('The 4th card is worth 5 points', () => { deck[3].should.have.property('value').equals(5); });

    it('The 5th card is a 6', () => { deck[4].should.have.property('rank').equals('Six'); });
    it('The 5th card is a Spade', () => { deck[4].should.have.property('suit').equals('Spades'); });
    it('The 5th card is worth 6 points', () => { deck[4].should.have.property('value').equals(6); });

    it('The 6th card is a 7', () => { deck[5].should.have.property('rank').equals('Seven'); });
    it('The 6th card is a Spade', () => { deck[5].should.have.property('suit').equals('Spades'); });
    it('The 6th card is worth 7 points', () => { deck[5].should.have.property('value').equals(7); });

    it('The 7th card is a 8', () => { deck[6].should.have.property('rank').equals('Eight'); });
    it('The 7th card is a Spade', () => { deck[6].should.have.property('suit').equals('Spades'); });
    it('The 7th card is worth 8 points', () => { deck[6].should.have.property('value').equals(8); });

    it('The 8th card is a 9', () => { deck[7].should.have.property('rank').equals('Nine'); });
    it('The 8th card is a Spade', () => { deck[7].should.have.property('suit').equals('Spades'); });
    it('The 8th card is worth 9 points', () => { deck[7].should.have.property('value').equals(9); });

    it('The 9th card is a 10', () => { deck[8].should.have.property('rank').equals('Ten'); });
    it('The 9th card is a Spade', () => { deck[8].should.have.property('suit').equals('Spades'); });
    it('The 9th card is worth 10 points', () => { deck[8].should.have.property('value').equals(10); });

    it('The 10th card is a Jack', () => { deck[9].should.have.property('rank').equals('Jack'); });
    it('The 10th card is a Spade', () => { deck[9].should.have.property('suit').equals('Spades'); });
    it('The 10th card is worth 10 points', () => { deck[9].should.have.property('value').equals(10); });

    it('The 11th card is a Queen', () => { deck[10].should.have.property('rank').equals('Queen'); });
    it('The 11th card is a Spade', () => { deck[10].should.have.property('suit').equals('Spades'); });
    it('The 11th card is worth 10 points', () => { deck[10].should.have.property('value').equals(10); });

    it('The 12th card is a King', () => { deck[11].should.have.property('rank').equals('King'); });
    it('The 12th card is a Spade', () => { deck[11].should.have.property('suit').equals('Spades'); });
    it('The 12th card is worth 10 points', () => { deck[11].should.have.property('value').equals(10); });

    it('The 13th card is an Ace', () => { deck[12].should.have.property('rank').equals('Ace'); });
    it('The 13th card is a Spade', () => { deck[12].should.have.property('suit').equals('Spades'); });
    it('The 13th card is worth 11 points', () => { deck[12].should.have.property('value').equals(1); });

    it('The 14th card is a 2', () => { deck[13].should.have.property('rank').equals('Two'); });
    it('The 14th card is a Club', () => { deck[13].should.have.property('suit').equals('Clubs'); });
    it('The 14th card is worth 2 points', () => { deck[13].should.have.property('value').equals(2); });

    it('The 15th card is a 3', () => { deck[14].should.have.property('rank').equals('Three'); });
    it('The 15th card is a Club', () => { deck[14].should.have.property('suit').equals('Clubs'); });
    it('The 15th card is worth 3 points', () => { deck[14].should.have.property('value').equals(3); });

    it('The 16th card is a 4', () => { deck[15].should.have.property('rank').equals('Four'); });
    it('The 16th card is a Club', () => { deck[15].should.have.property('suit').equals('Clubs'); });
    it('The 16th card is worth 4 points', () => { deck[15].should.have.property('value').equals(4); });

    it('The 17th card is a 5', () => { deck[16].should.have.property('rank').equals('Five'); });
    it('The 17th card is a Club', () => { deck[16].should.have.property('suit').equals('Clubs'); });
    it('The 17th card is worth 5 points', () => { deck[16].should.have.property('value').equals(5); });

    it('The 18th card is a 6', () => { deck[17].should.have.property('rank').equals('Six'); });
    it('The 18th card is a Club', () => { deck[17].should.have.property('suit').equals('Clubs'); });
    it('The 18th card is worth 6 points', () => { deck[17].should.have.property('value').equals(6); });

    it('The 19th card is a 7', () => { deck[18].should.have.property('rank').equals('Seven'); });
    it('The 19th card is a Club', () => { deck[18].should.have.property('suit').equals('Clubs'); });
    it('The 19th card is worth 7 points', () => { deck[18].should.have.property('value').equals(7); });

    it('The 20th card is a 8', () => { deck[19].should.have.property('rank').equals('Eight'); });
    it('The 20th card is a Club', () => { deck[19].should.have.property('suit').equals('Clubs'); });
    it('The 20th card is worth 8 points', () => { deck[19].should.have.property('value').equals(8); });

    it('The 21st card is a 9', () => { deck[20].should.have.property('rank').equals('Nine'); });
    it('The 21st card is a Club', () => { deck[20].should.have.property('suit').equals('Clubs'); });
    it('The 21st card is worth 9 points', () => { deck[20].should.have.property('value').equals(9); });

    it('The 22nd card is a 10', () => { deck[21].should.have.property('rank').equals('Ten'); });
    it('The 22nd card is a Club', () => { deck[21].should.have.property('suit').equals('Clubs'); });
    it('The 22nd card is worth 10 points', () => { deck[21].should.have.property('value').equals(10); });

    it('The 23rd card is a Jack', () => { deck[22].should.have.property('rank').equals('Jack'); });
    it('The 23rd card is a Club', () => { deck[22].should.have.property('suit').equals('Clubs'); });
    it('The 23rd card is worth 10 points', () => { deck[22].should.have.property('value').equals(10); });

    it('The 24th card is a Queen', () => { deck[23].should.have.property('rank').equals('Queen'); });
    it('The 24th card is a Club', () => { deck[23].should.have.property('suit').equals('Clubs'); });
    it('The 24th card is worth 10 points', () => { deck[23].should.have.property('value').equals(10); });

    it('The 25th card is a King', () => { deck[24].should.have.property('rank').equals('King'); });
    it('The 25th card is a Club', () => { deck[24].should.have.property('suit').equals('Clubs'); });
    it('The 25th card is worth 10 points', () => { deck[24].should.have.property('value').equals(10); });

    it('The 26th card is an Ace', () => { deck[25].should.have.property('rank').equals('Ace'); });
    it('The 26th card is a Club', () => { deck[25].should.have.property('suit').equals('Clubs'); });
    it('The 26th card is worth 11 points', () => { deck[25].should.have.property('value').equals(1); });


    it('The 27th card is a 2', () => { deck[26].should.have.property('rank').equals('Two'); });
    it('The 27th card is a Diamond', () => { deck[26].should.have.property('suit').equals('Diamonds'); });
    it('The 27th card is worth 2 points', () => { deck[26].should.have.property('value').equals(2); });

    it('The 28th card is a 3', () => { deck[27].should.have.property('rank').equals('Three'); });
    it('The 28th card is a Diamond', () => { deck[27].should.have.property('suit').equals('Diamonds'); });
    it('The 28th card is worth 3 points', () => { deck[27].should.have.property('value').equals(3); });

    it('The 29th card is a 4', () => { deck[28].should.have.property('rank').equals('Four'); });
    it('The 29th card is a Diamond', () => { deck[28].should.have.property('suit').equals('Diamonds'); });
    it('The 29th card is worth 4 points', () => { deck[28].should.have.property('value').equals(4); });

    it('The 30th card is a 5', () => { deck[29].should.have.property('rank').equals('Five'); });
    it('The 30th card is a Diamond', () => { deck[29].should.have.property('suit').equals('Diamonds'); });
    it('The 30th card is worth 5 points', () => { deck[29].should.have.property('value').equals(5); });

    it('The 31st card is a 6', () => { deck[30].should.have.property('rank').equals('Six'); });
    it('The 31st card is a Diamond', () => { deck[30].should.have.property('suit').equals('Diamonds'); });
    it('The 31st card is worth 6 points', () => { deck[30].should.have.property('value').equals(6); });

    it('The 32nd card is a 7', () => { deck[31].should.have.property('rank').equals('Seven'); });
    it('The 32nd card is a Diamond', () => { deck[31].should.have.property('suit').equals('Diamonds'); });
    it('The 32nd card is worth 7 points', () => { deck[31].should.have.property('value').equals(7); });

    it('The 33rd card is a 8', () => { deck[32].should.have.property('rank').equals('Eight'); });
    it('The 33rd card is a Diamond', () => { deck[32].should.have.property('suit').equals('Diamonds'); });
    it('The 33rd card is worth 8 points', () => { deck[32].should.have.property('value').equals(8); });

    it('The 34th card is a 9', () => { deck[33].should.have.property('rank').equals('Nine'); });
    it('The 34th card is a Diamond', () => { deck[33].should.have.property('suit').equals('Diamonds'); });
    it('The 34th card is worth 9 points', () => { deck[33].should.have.property('value').equals(9); });

    it('The 35th card is a 10', () => { deck[34].should.have.property('rank').equals('Ten'); });
    it('The 35th card is a Diamond', () => { deck[34].should.have.property('suit').equals('Diamonds'); });
    it('The 35th card is worth 10 points', () => { deck[34].should.have.property('value').equals(10); });

    it('The 36th card is a Jack', () => { deck[35].should.have.property('rank').equals('Jack'); });
    it('The 36th card is a Diamond', () => { deck[35].should.have.property('suit').equals('Diamonds'); });
    it('The 36th card is worth 10 points', () => { deck[35].should.have.property('value').equals(10); });

    it('The 37th card is a Queen', () => { deck[36].should.have.property('rank').equals('Queen'); });
    it('The 37th card is a Diamond', () => { deck[36].should.have.property('suit').equals('Diamonds'); });
    it('The 37th card is worth 10 points', () => { deck[36].should.have.property('value').equals(10); });

    it('The 38th card is a King', () => { deck[37].should.have.property('rank').equals('King'); });
    it('The 38th card is a Diamond', () => { deck[37].should.have.property('suit').equals('Diamonds'); });
    it('The 38th card is worth 10 points', () => { deck[37].should.have.property('value').equals(10); });

    it('The 39th card is an Ace', () => { deck[38].should.have.property('rank').equals('Ace'); });
    it('The 39th card is a Diamond', () => { deck[38].should.have.property('suit').equals('Diamonds'); });
    it('The 39th card is worth 11 points', () => { deck[38].should.have.property('value').equals(1); });


    it('The 40th card is a 2', () => { deck[39].should.have.property('rank').equals('Two'); });
    it('The 40th card is a Spade', () => { deck[39].should.have.property('suit').equals('Hearts'); });
    it('The 40th card is worth 2 points', () => { deck[39].should.have.property('value').equals(2); });

    it('The 41st card is a 3', () => { deck[40].should.have.property('rank').equals('Three'); });
    it('The 41st card is a Spade', () => { deck[40].should.have.property('suit').equals('Hearts'); });
    it('The 41st card is worth 3 points', () => { deck[40].should.have.property('value').equals(3); });

    it('The 42nd card is a 4', () => { deck[41].should.have.property('rank').equals('Four'); });
    it('The 42nd card is a Spade', () => { deck[41].should.have.property('suit').equals('Hearts'); });
    it('The 42nd card is worth 4 points', () => { deck[41].should.have.property('value').equals(4); });

    it('The 43rd card is a 5', () => { deck[42].should.have.property('rank').equals('Five'); });
    it('The 43rd card is a Spade', () => { deck[42].should.have.property('suit').equals('Hearts'); });
    it('The 43rd card is worth 5 points', () => { deck[42].should.have.property('value').equals(5); });

    it('The 44th card is a 6', () => { deck[43].should.have.property('rank').equals('Six'); });
    it('The 44th card is a Spade', () => { deck[43].should.have.property('suit').equals('Hearts'); });
    it('The 44th card is worth 6 points', () => { deck[43].should.have.property('value').equals(6); });

    it('The 45th card is a 7', () => { deck[44].should.have.property('rank').equals('Seven'); });
    it('The 45th card is a Spade', () => { deck[44].should.have.property('suit').equals('Hearts'); });
    it('The 45th card is worth 7 points', () => { deck[44].should.have.property('value').equals(7); });

    it('The 46th card is a 8', () => { deck[45].should.have.property('rank').equals('Eight'); });
    it('The 46th card is a Spade', () => { deck[45].should.have.property('suit').equals('Hearts'); });
    it('The 46th card is worth 8 points', () => { deck[45].should.have.property('value').equals(8); });

    it('The 47th card is a 9', () => { deck[46].should.have.property('rank').equals('Nine'); });
    it('The 47th card is a Spade', () => { deck[46].should.have.property('suit').equals('Hearts'); });
    it('The 47th card is worth 9 points', () => { deck[46].should.have.property('value').equals(9); });

    it('The 48th card is a 10', () => { deck[47].should.have.property('rank').equals('Ten'); });
    it('The 48th card is a Spade', () => { deck[47].should.have.property('suit').equals('Hearts'); });
    it('The 48th card is worth 10 points', () => { deck[47].should.have.property('value').equals(10); });

    it('The 49th card is a Jack', () => { deck[48].should.have.property('rank').equals('Jack'); });
    it('The 49th card is a Spade', () => { deck[48].should.have.property('suit').equals('Hearts'); });
    it('The 49th card is worth 10 points', () => { deck[48].should.have.property('value').equals(10); });

    it('The 50th card is a Queen', () => { deck[49].should.have.property('rank').equals('Queen'); });
    it('The 50th card is a Spade', () => { deck[49].should.have.property('suit').equals('Hearts'); });
    it('The 50th card is worth 10 points', () => { deck[49].should.have.property('value').equals(10); });

    it('The 51st card is a King', () => { deck[50].should.have.property('rank').equals('King'); });
    it('The 51st card is a Spade', () => { deck[50].should.have.property('suit').equals('Hearts'); });
    it('The 51st card is worth 10 points', () => { deck[50].should.have.property('value').equals(10); });

    it('The 52nd card is an Ace', () => { deck[51].should.have.property('rank').equals('Ace'); });
    it('The 52nd card is a Spade', () => { deck[51].should.have.property('suit').equals('Hearts'); });
    it('The 52nd card is worth 11 points', () => { deck[51].should.have.property('value').equals(1); });
  });


  describe('02: Check a shuffled deck', () => {
    const deck = buildADeckOfCards();
    const shuffledDeck = shuffleADeckOfCards(deck);
    const newDeck = buildADeckOfCards();
    it('The original deck has 0 cards after being shuffled', () => { deck.length.should.equal(0); });
    it('The shuffled deck has 52 cards', () => { shuffledDeck.length.should.equal(52); });
    it('A shuffled deck != an unshuffled deck', () => { shuffledDeck.should.not.equal(newDeck); });
  });


  describe('03: Check the wrapped build and shuffle functions', () => {
    const shuffledDeck = buildAndShuffleADeckOfCards();
    const freshDeck = buildADeckOfCards();

    it('A shuffled deck contains 52 cards', () => { shuffledDeck.length.should.equal(52); });
    it('A fresh deck contains 52 cards', () => { freshDeck.length.should.equal(52); });
    it('A shuffled deck != an unshuffled deck', () => { shuffledDeck.length.should.not.equal(freshDeck); });
  });
});
