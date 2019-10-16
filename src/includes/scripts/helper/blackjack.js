//
// Unit-testable blackjack functions
//

function getScore(hand) {
  let score = 0;
  let hasAce = false;
  // let isBust = false;

  for (let i = 0; i < hand.length; i += 1) {
    score += hand[i].value;
    if (hand[i].rank === 'Ace') {
      hasAce = true;
    }
  }

  if (hasAce && (score <= 11)) {
    score += 10;
  }

  // if (score > 21) isBust = true;

  return score;
}

module.exports = { getScore };
