/* eslint-disable no-undef */
// set up the test runner
const chai = require('chai');
// var chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised);
chai.should();

// import the functions
const { getScore } = require('../../../src/functions/blackjack');


describe('VERIFY THE SCORING FUNCTIONS', () => {
  describe('01: Calculate the score', () => {
    const handOne = [{
      suit: 'Spades', rank: 'Two', value: 2,
    }];
    const scoreOne = getScore(handOne);
    it('Hand One is worth 2 points', () => { scoreOne.should.equal(2); });

    const handTwo = [
      { suit: 'Spades', rank: 'Two', value: 2 },
      { suit: 'Diamonds', rank: 'King', value: 10 },
    ];
    const scoreTwo = getScore(handTwo);
    it('Hand Two is worth 12 points', () => { scoreTwo.should.equal(12); });

    const handThree = [
      { suit: 'Spades', rank: 'Two', value: 2 },
      { suit: 'Diamonds', rank: 'Seven', value: 7 },
      { suit: 'Diamonds', rank: 'Ace', value: 1 },
    ];
    const scoreThree = getScore(handThree);
    it('Hand Three is worth 20 points', () => { scoreThree.should.equal(20); });

    const handFour = [
      { suit: 'Spades', rank: 'Three', value: 3 },
      { suit: 'Diamonds', rank: 'Seven', value: 7 },
      { suit: 'Diamonds', rank: 'Ace', value: 1 },
    ];
    const scoreFour = getScore(handFour);
    it('Hand Four is worth 21 points', () => { scoreFour.should.equal(21); });

    const handFive = [
      { suit: 'Spades', rank: 'Four', value: 4 },
      { suit: 'Diamonds', rank: 'Seven', value: 7 },
      { suit: 'Diamonds', rank: 'Ace', value: 1 },
    ];
    const scoreFive = getScore(handFive);
    it('Hand Five is worth 12 points', () => { scoreFive.should.equal(12); });

    const handSix = [
      { suit: 'Spades', rank: 'Seven', value: 7 },
      { suit: 'Diamonds', rank: 'Seven', value: 7 },
      { suit: 'Diamonds', rank: 'Eight', value: 8 },
    ];
    const scoreSix = getScore(handSix);
    it('Hand Six is worth 22 points', () => { scoreSix.should.equal(22); });

    const handSeven = [
      { suit: 'Spades', rank: 'Four', value: 4 },
      { suit: 'Diamonds', rank: 'Six', value: 6 },
      { suit: 'Diamonds', rank: 'Five', value: 5 },
      { suit: 'Spades', rank: 'Ace', value: 1 },
      { suit: 'Diamonds', rank: 'Ace', value: 1 },
      { suit: 'Diamonds', rank: 'Three', value: 3 },
      { suit: 'Diamonds', rank: 'Eight', value: 8 },
    ];
    const scoreSeven = getScore(handSeven);
    it('Hand Seven is worth 28 points', () => { scoreSeven.should.equal(28); });
  });
});
