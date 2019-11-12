//
//  unit-testable card functions
//


// debug mode
const debug = false;

function printDeck(deck) {
  deck.forEach((card) => {
    // eslint-disable-next-line no-console
    console.log(card);
  });
}


function buildADeckOfCards(cards) {
  const deckOfCards = [];

  for (let count = 0; count < cards.length; count += 1) {
    const card = {
      suit: cards[count].suit,
      rank: cards[count].rank,
      value: cards[count].value,
    };
    deckOfCards.push(card);
  }
  if (debug) printDeck(deckOfCards);
  return deckOfCards;
}


function shuffleADeckOfCards(deck) {
  const shuffledDeckOfCards = [];
  const fullDeckLength = deck.length;
  let count = 0;

  while (count < fullDeckLength) {
    const cardIndex = Math.floor(Math.random() * deck.length); // could also have used Math.trunc
    const shuffledCard = deck.splice(cardIndex, 1);
    shuffledDeckOfCards.push(shuffledCard[0]);
    count += 1;
  }

  if (debug) printDeck(shuffledDeckOfCards);
  return shuffledDeckOfCards;
}


function buildAndShuffleADeckOfCards(cards) {
  return shuffleADeckOfCards(buildADeckOfCards(cards));
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

module.exports = {
  buildADeckOfCards,
  shuffleADeckOfCards,
  buildAndShuffleADeckOfCards,
  getHandString,
  randomCardNumber,
  dealRandomCard,
};
