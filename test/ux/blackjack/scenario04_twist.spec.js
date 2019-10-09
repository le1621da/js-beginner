// set up the test runner
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
// chai.should();

// import and initialise Selenium helpers
const {
  blackjackLandingPage, checkArrayValuesAreAllTrue, perform, driver,
} = require('../../helper/functions/seleniumBlackjackFunctions');
const {
  getPageStates, getResults,
} = require('../../helper/functions/seleniumBlackjackFunctions');
const {
  setGameStateVariables, setGameScoreVariables, setWinner,
} = require('../../helper/functions/seleniumBlackjackFunctions');

// local variables
let states = [];
let results;
const playerHasStuck = false;

// async function setPlayerHasStuck(){
//   playerHasStuck = true;
// }

// Tests
describe('FEATURE: Blackjack', () => {
  after(() => {driver.quit();})

  describe('SCENARIO 04: Twist', () => {
    it('GIVEN the blackjack page is loaded', function (){return perform.loadPage(blackjackLandingPage)});
    it('  AND the new game button has been clicked', function (){return perform.clickButton('new_game_button');})
    it('  AND the deal button has been clicked', function (){return perform.clickButton('deal_button').should.eventually.be.true;});
    it('  AND selenium gets values from the page', async () => {
      await setGameScoreVariables();
      await setGameStateVariables();
      await setWinner(playerHasStuck);
      results = getResults();
    })
    it('WHEN the twist button has been clicked (if there is no winner yet)', function (){if (!results.playerHasWon) return perform.clickButton('twist_button').should.eventually.be.true;});
    it('  AND selenium gets values from the page for verfication', async () => {
      await setGameScoreVariables();
      await setGameStateVariables();
      await setWinner(playerHasStuck);
      states = getPageStates();
      results = getResults();
    })

    it('THEN the page is NOT in State 0', function (){checkArrayValuesAreAllTrue(states[0]).should.be.false;})
    it('  AND the page is NOT in State 1', function (){checkArrayValuesAreAllTrue(states[1]).should.be.false;})
    it('  AND the page is NOT in State 4', function (){checkArrayValuesAreAllTrue(states[4]).should.be.false;})
    it("    AND if the player's score is less than 21 THEN the page is in State 2", function (){if (results.playersScore < 21) checkArrayValuesAreAllTrue(states[2]).should.be.true;})
    it("    AND if the player's score is less than 21 THEN the page is NOT in State 3", function (){if (results.playersScore < 21) checkArrayValuesAreAllTrue(states[3]).should.be.false;})
    it("    AND if the player's score < 21 THEN there's no winner declared", function (){if (results.playersScore < 21) return perform.getElementText('results_area').should.eventually.equal('');}); 

    it("      BUT if the player's score is equal to 21 THEN the page is NOT in State 2", function (){if (results.playersScore === 21) checkArrayValuesAreAllTrue(states[2]).should.be.false;})
    it("      AND if the player's score is equal to 21 THEN the page is in State 3", function (){if (results.playersScore === 21) checkArrayValuesAreAllTrue(states[3]).should.be.true;})
    it("      AND if the player's score is equal to 21 THEN the player is declared the winner", function (){if (results.playersScore === 21) return perform.getElementText('results_area').should.eventually.equal('WINNER: Player.');});
    
    it("        BUT if the player's score is greater than 21 THEN the page is NOT in State 2", function (){if (results.playersScore > 21) checkArrayValuesAreAllTrue(states[2]).should.be.false;})
    it("        AND if the player's score is greater than 21 THEN the page is in State 3", function (){if (results.playerHasPlayed > 21) checkArrayValuesAreAllTrue(states[3]).should.be.true;})
    it("        AND if the player's score is greater than 21 THEN the dealer is declared the winner", function (){if (results.playersScore > 21) return perform.getElementText('results_area').should.eventually.equal('WINNER: Dealer.');});
 
  })
 
})