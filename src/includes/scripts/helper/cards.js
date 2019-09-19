//
//  unit-testable card functions
//

// debug mode
let debug = false;

// Card variables
let suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
let ranks = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1];


function buildADeckOfCards() {

  let deckOfCards = [];

  for(let suitIndex = 0; suitIndex < suits.length; suitIndex++){
    for(let rankIndex = 0; rankIndex < ranks.length; rankIndex++){
      let card = {
        suit: suits[suitIndex],
        rank: ranks[rankIndex],
        value: value[rankIndex]
      }
      deckOfCards.push(card);
    }
  }

  if (debug) printDeck(deckOfCards);
  return deckOfCards;
}
  

function shuffleADeckOfCards(deck){

  let shuffledDeckOfCards = [];
  let count = 0;

  while(count < 52){
    let cardIndex = Math.floor(Math.random() * deck.length); // could also have used Math.trunc
    let shuffledCard = deck.splice(cardIndex, 1)
    shuffledDeckOfCards.push(shuffledCard[0]);
    count++;
  }

  if (debug) printDeck(shuffledDeckOfCards);
return shuffledDeckOfCards;
}
  
  
function buildAndShuffleADeckOfCards(){
  return shuffleADeckOfCards(buildADeckOfCards());
}

function randomCardNumber(deck){
  let cardIndex = Math.floor(Math.random() * deck.length);
  return cardIndex;
}


function deal(hand, deckOfCards){
  hand.push(deckOfCards.shift());    
  return {deckOfCards, hand};
}

function dealRandom(hand, deckOfCards){
  let cardIndex = randomCardNumber(deckOfCards);
  hand.push(deckOfCards[cardIndex]);
  dealtCard = deckOfCards.splice(cardIndex, 1);
  return {deckOfCards, hand}
}


function getHandString(hand){  
  let handString = "";
  for (i = 0; i < hand.length; i++){
    handString += hand[i].rank + ' of ' + hand[i].suit + '\n'; 
  }
  return handString;
}


function checkScores(playerHasFinished, playersScore, computersScore){
  
  let winner = "Pending";
  let string = "Game in progress...";
  
  if (playersScore == 21){
    winner = "Player";
    string = "Player wins with a 21!";
  } 
  else if (playersScore > 21) {
    winner = "Dealer";
    string = "Player busts.";   
  }
  else if (computersScore > 21) {
    winner = "Player";
    string = "Dealer busts.";      
  } 
  else if (playerHasFinished){
    if (computersScore == playersScore){
      winner = "Dealer";
      string = "It's a tie!  Dealer wins.";    
    }
    else if (computersScore > playersScore){
      winner = "Dealer";
      string = "Dealer outscores player.";    
    }
  }
  
  return {winner, string};
}
  

function printDeck(deck){
  deck.forEach(function(card){
  console.log(card);
  }); 
}
  
module.exports = {buildADeckOfCards, shuffleADeckOfCards, buildAndShuffleADeckOfCards, deal, getHandString, checkScores, randomCardNumber, dealRandom};