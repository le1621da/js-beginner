function getPlayingCards() {
  const cardsJson = [{
    rank: 'Ace',
    suit: 'Diamonds',
    value: 1,
  }, {
    rank: 'Two',
    suit: 'Diamonds',
    value: 2,
  }, {
    rank: 'Three',
    suit: 'Diamonds',
    value: 3,
  }, {
    rank: 'Four',
    suit: 'Diamonds',
    value: 4,
  },
  ];
  return cardsJson;
}

module.exports = {
  getPlayingCards,
};
