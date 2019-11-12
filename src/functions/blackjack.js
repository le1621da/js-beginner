//
// Unit-testable blackjack functions
//


function checkScores(playerHasFinished, playersScore, computersScore) {
  let winner = 'Pending';
  let string = 'Game in progress...';

  if (playersScore === 21) {
    winner = 'Player';
    string = 'Player wins with a 21!';
  } else if (playersScore > 21) {
    winner = 'Dealer';
    string = 'Player busts.';
  } else if (computersScore > 21) {
    winner = 'Player';
    string = 'Dealer busts.';
  } else if (playerHasFinished) {
    if (computersScore === playersScore) {
      winner = 'Dealer';
      string = "It's a tie!  Dealer wins.";
    } else if (computersScore > playersScore) {
      winner = 'Dealer';
      string = 'Dealer outscores player.';
    }
  }

  return { winner, string };
}


function getScore(hand) {

console.log(hand);

  let score = 0;
  let hasAce = false;

  for (let i = 0; i < hand.length; i += 1) {
    score += hand[i].value;
    if (hand[i].rank === 'Ace') {
      hasAce = true;
    }
  }

  if (hasAce && (score <= 11)) {
    score += 10;
  }

  return score;
}

module.exports = {
  getScore,
  checkScores,
};
