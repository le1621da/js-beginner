//
//  unit-testable card functions
//

// Card variables
const suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
const ranks = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1];

// debug mode
const debug = false;

function printDeck(deck) {
  deck.forEach((card) => {
    // eslint-disable-next-line no-console
    console.log(card);
  });
}


function buildADeckOfCards() {
  const deckOfCards = [];

  for (let suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
    for (let rankIndex = 0; rankIndex < ranks.length; rankIndex += 1) {
      const card = {
        suit: suits[suitIndex],
        rank: ranks[rankIndex],
        value: value[rankIndex],
      };
      deckOfCards.push(card);
    }
  }

  if (debug) printDeck(deckOfCards);
  return deckOfCards;
}


function shuffleADeckOfCards(deck) {
  const shuffledDeckOfCards = [];
  let count = 0;

  while (count < 52) {
    const cardIndex = Math.floor(Math.random() * deck.length); // could also have used Math.trunc
    const shuffledCard = deck.splice(cardIndex, 1);
    shuffledDeckOfCards.push(shuffledCard[0]);
    count += 1;
  }

  if (debug) printDeck(shuffledDeckOfCards);
  return shuffledDeckOfCards;
}


function buildAndShuffleADeckOfCards() {
  return shuffleADeckOfCards(buildADeckOfCards());
}

function randomCardNumber(deck) {
  const cardIndex = Math.floor(Math.random() * deck.length);
  return cardIndex;
}

function dealRandomCard(hand, deckOfCards) {
  const cardIndex = randomCardNumber(deckOfCards);
  hand.push(deckOfCards[cardIndex]);
  deckOfCards.splice(cardIndex, 1);
  return { deckOfCards, hand };
}


function getHandString(hand) {
  let handString = '';
  for (let i = 0; i < hand.length; i += 1) {
    handString += `${hand[i].rank} of ${hand[i].suit}\n`;
  }
  return handString;
}


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

module.exports = {
  buildADeckOfCards,
  shuffleADeckOfCards,
  buildAndShuffleADeckOfCards,
  getHandString,
  checkScores,
  randomCardNumber,
  dealRandomCard,
};
