// set up the test runner
var chai = require("chai");
//var chaiAsPromised = require("chai-as-promised");
//chai.use(chaiAsPromised);
chai.should();

// import the functions
const {getScore} = require("../../../src/includes/scripts/helper/blackjack");
const {buildADeckOfCards, shuffleADeckOfCards, buildAndShuffleADeckOfCards, deal, getHandString, checkScores} = require("../../../src/includes/scripts/helper/cards");
    
    describe("VERIFY THE END-GAME FUNCTIONS", function(){

      describe("01: Determine who the winner is", function(){

        let resultA = checkScores(true, 22, 1);
        it("Result A: \"Winner: Dealer\"", function(){resultA.should.have.property("winner").equals("Dealer");});
        it("Reason: The player has bust", function(){resultA.should.have.property("string").equals("Player busts.");});
        
        let resultB = checkScores(true, 21, 1); 
        it("Result B: \"Winner: Player\"", function(){resultB.should.have.property("winner").equals("Player");});
        it("Reason: Player automatically wins with a 21", function(){resultB.should.have.property("string").equals("Player wins with a 21!");});

        let resultC = checkScores(true, 20, 22); 
        it("Result A: \"Winner: Player\"", function(){resultC.should.have.property("winner").equals("Player");});
        it("Reason: The dealer has bust", function(){resultC.should.have.property("string").equals("Dealer busts.");});
        
        let resultD = checkScores(true, 20,20);
        it("Result D: \"Winner: Dealer\"", function(){resultD.should.have.property("winner").equals("Dealer");});
        it("Reason: Dealer wins with a tie", function(){resultD.should.have.property("string").equals("It's a tie!  Dealer wins.");});
        
        let resultE = checkScores(true, 19, 20);
        it("Result E: \"Winner: Dealer\"", function(){resultE.should.have.property("winner").equals("Dealer");});
        it("Reason: Dealer outscores player", function(){resultE.should.have.property("string").equals("Dealer outscores player.");});
        
        let resultF = checkScores(true, 19, 18);
        it("Result F: \"Winner: --\"", function(){resultF.should.have.property("winner").equals("Pending");});
        it("Reason: Game in progress", function(){resultF.should.have.property("string").equals("Game in progress...");});
        
        let resultG = checkScores(false, 10, 10);
        it("Result G: \"Winner: --\"", function(){resultG.should.have.property("winner").equals("Pending");});
        it("Reason: Game in progress", function(){resultG.should.have.property("string").equals("Game in progress...");});
        
        let resultH = checkScores(false, 10, 11);
        it("Result H: \"Winner: --\"", function(){resultH.should.have.property("winner").equals("Pending");});
        it("Reason: Game in progress", function(){resultH.should.have.property("string").equals("Game in progress...");});
      
      })
      
    })