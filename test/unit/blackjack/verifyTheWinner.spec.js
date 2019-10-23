/* eslint-disable no-undef */
// set up the test runner
const chai = require('chai');
// var chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised);
chai.should();

// import the functions
const { checkScores } = require('../../../src/includes/scripts/helper/blackjack');

describe('VERIFY THE END-GAME FUNCTIONS', () => {
  describe('01: Determine who the winner is', () => {
    const resultA = checkScores(true, 22, 1);
    it('Result A: "Winner: Dealer"', () => { resultA.should.have.property('winner').equals('Dealer'); });
    it('Reason: The player has bust', () => { resultA.should.have.property('string').equals('Player busts.'); });

    const resultB = checkScores(true, 21, 1);
    it('Result B: "Winner: Player"', () => { resultB.should.have.property('winner').equals('Player'); });
    it('Reason: Player automatically wins with a 21', () => { resultB.should.have.property('string').equals('Player wins with a 21!'); });

    const resultC = checkScores(true, 20, 22);
    it('Result A: "Winner: Player"', () => { resultC.should.have.property('winner').equals('Player'); });
    it('Reason: The dealer has bust', () => { resultC.should.have.property('string').equals('Dealer busts.'); });

    const resultD = checkScores(true, 20, 20);
    it('Result D: "Winner: Dealer"', () => { resultD.should.have.property('winner').equals('Dealer'); });
    it('Reason: Dealer wins with a tie', () => { resultD.should.have.property('string').equals("It's a tie!  Dealer wins."); });

    const resultE = checkScores(true, 19, 20);
    it('Result E: "Winner: Dealer"', () => { resultE.should.have.property('winner').equals('Dealer'); });
    it('Reason: Dealer outscores player', () => { resultE.should.have.property('string').equals('Dealer outscores player.'); });

    const resultF = checkScores(true, 19, 18);
    it('Result F: "Winner: --"', () => { resultF.should.have.property('winner').equals('Pending'); });
    it('Reason: Game in progress', () => { resultF.should.have.property('string').equals('Game in progress...'); });

    const resultG = checkScores(false, 10, 10);
    it('Result G: "Winner: --"', () => { resultG.should.have.property('winner').equals('Pending'); });
    it('Reason: Game in progress', () => { resultG.should.have.property('string').equals('Game in progress...'); });

    const resultH = checkScores(false, 10, 11);
    it('Result H: "Winner: --"', () => { resultH.should.have.property('winner').equals('Pending'); });
    it('Reason: Game in progress', () => { resultH.should.have.property('string').equals('Game in progress...'); });
  });
});
