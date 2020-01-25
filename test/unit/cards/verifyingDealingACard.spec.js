/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// set up the test runner
const chai = require('chai');
// var chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised);
chai.should();

// import the functions
const {
  buildADeckOfCards, getHandString, randomCardNumber, dealRandomCard,
} = require('../../../src/functions/deck');

const {
  getPlayingCards,
} = require('../../../src/data/cardsData');

const playingCards = getPlayingCards();

describe('VERIFY THE DEALING FUNCTIONS', () => {
  describe("01: Stringify the player's Hand", () => {
    const hand = [{
      suit: 'Spades',
      rank: 'Two',
    }, {
      suit: 'Diamonds',
      rank: 'Three',
    }];

    it("The player's hand is converted into a string for printing", () => { getHandString(hand).should.equal('Two of Spades\nThree of Diamonds\n'); });
  });

  describe('02: Verify the random card number generator i', () => {
    const deck = buildADeckOfCards(playingCards);
    it('The random card number generated is greater than -1', () => { randomCardNumber(deck).should.be.greaterThan(-1); });
    it('The random card number generated is less than 52', () => { randomCardNumber(deck).should.be.lessThan(52); });
  });


  describe('03: Verify the random card number generator ii', () => {
    const deck = [{ suit: 'Hearts', rank: 'Ace', value: 1 }];
    it('When there is only one cre in the deck, the random card number generated is 0', () => { randomCardNumber(deck).should.equal(0); });
  });


  describe('04: Verify the state of the game after dealing a random card from the deck i', () => {
    const playersHand = [];
    const dealersHand = [];
    const deck = buildADeckOfCards(playingCards);

    // Deal one
    const dealt = dealRandomCard(playersHand, deck);
    const remainingDeck = dealt.deckOfCards;

    it('A deck has 51 cards after the first card has been dealt', () => { remainingDeck.length.should.equal(51); });
    it("A player's hand is not empty after the first card has been dealt", () => { playersHand.should.not.be.empty; });
    it("A player's score is greater than 0 after the first card has been dealt", () => { playersHand[0].should.have.property('value').greaterThan(0); });
    it("The dealer's hand is empty after the first card has been dealt to the player", () => { dealersHand.should.be.empty; });
  });

  describe('05: Verify the state of the game after dealing a random card from the deck ii', () => {
    const playersHand = [];
    const dealersHand = [];
    const deck = [{ suit: 'Spades', rank: 'Two', value: 2 },
      { suit: 'Diamonds', rank: 'Two', value: 2 }];

    // Deal one
    const dealt = dealRandomCard(playersHand, deck);
    const remainingDeck = dealt.deckOfCards;

    it('A deck of 2 cards has only 1 card left after a card has been dealt', () => { remainingDeck.length.should.equal(1); });
    it("A player's hand is not empty after the first card has been dealt", () => { playersHand.should.not.be.empty; });
    it("When there all the cards have a value of 2, a player's score is worth 2 after the first card has been dealt", () => { playersHand[0].should.have.property('value').equal(2); });
    it("The dealer's hand is empty after the first card has been dealt to the player", () => { dealersHand.should.be.empty; });
  });

  describe('05: Verify building a new deck after dealing the last card', () => {
    const playersHand = [];
    const deck = [{ suit: 'Spades', rank: 'Two', value: 2 }];

    // Deal one
    const dealt = dealRandomCard(playersHand, deck, playingCards);
    const remainingDeck = dealt.deckOfCards;

    it('The rebuilt deck has 52 cards after the last card has been dealt', () => { remainingDeck.length.should.equal(52); });
  });
});
