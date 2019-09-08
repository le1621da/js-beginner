function getScore(driver, elementId){
  var score = driver.findElement({id: elementId}).getText()
  .then(
    result => result.substr(7, result.length-8),     
    error => error
  )
  return score;
}


function canFindElement(driver, elementId) {
  var myPromise = driver.findElement({id: elementId})
  .then(
      result => true,
      error => false  
  )
  return myPromise;
}


function cannotFindElement(driver, elementId) {
  var myPromise = driver.findElement({id: elementId})
  .then(
      result => false,
      error => true  
  )
  return myPromise;
}


function elementIsVisible(driver, elementId) {
  var myPromise = driver.findElement({id: elementId}).getCssValue("visibility")
  .then(
    result => (result === "visible"),
    error => true 
  )
  return myPromise;
}


function elementIsNotVisible(driver, elementId) {
  var myPromise = driver.findElement({id: elementId}).getCssValue("visibility")
  .then(
    result => (result === "hidden"),
    error => true 
  )
  return myPromise;
}


function elementTextValueIs(driver, elementId, expectedText) {
  var myPromise = driver.findElement({id: elementId}).getText()
  .then(
    result => (result === expectedText),
    error => true 
  )
  return myPromise
}


function elementTextValueIsNot(driver, elementId, expectedText) {
  var myPromise = driver.findElement({id: elementId}).getText()
  .then(
    result => (result !== expectedText),
    error => error
  )
  return myPromise
}


function checkArrayValuesAreAllTrue(array) {
  for(var i = 0; i < array.length; i++) {
    if(array[i] !== true) {
      return false;
    }
  }
  return true;
}


async function getScores(driver){
  var myPromises = Promise.all([
    getScore(driver, "players_score"), 
    getScore(driver, "dealers_score")
  ])
  .then(
    result => result,
    error => false
  )
  return myPromises;
}


// State 01 = Launch page state
async function getState01(driver){
  var myPromises = Promise.all([
    // Assert whether elements are available
    canFindElement(driver, "page_title"), 
    canFindElement(driver, "welcome_text"),
    canFindElement(driver, "players_header"),
    canFindElement(driver, "players_hand"),
    canFindElement(driver, "players_score"),
    canFindElement(driver, "deal_button"),
    canFindElement(driver, "stick_button"),
    canFindElement(driver, "twist_button"),
    canFindElement(driver, "dealers_header"),
    canFindElement(driver, "dealers_hand"),
    canFindElement(driver, "dealers_score"),
    canFindElement(driver, "results_area"),
    canFindElement(driver, "new_game_button"),
    cannotFindElement(driver, "negative_test_button"),

    // Assert whether elements are visible
    elementIsVisible(driver, "page_title"), 
    elementIsVisible(driver, "welcome_text"),
    elementIsNotVisible(driver, "players_header"),
    elementIsVisible(driver, "players_hand"),
    elementIsVisible(driver, "players_score"),
    elementIsNotVisible(driver, "deal_button"),
    elementIsNotVisible(driver, "stick_button"),
    elementIsNotVisible(driver, "twist_button"),
    elementIsNotVisible(driver, "dealers_header"),
    elementIsVisible(driver, "dealers_hand"),
    elementIsVisible(driver, "dealers_score"),
    elementIsVisible(driver, "results_area"),
    elementIsVisible(driver, "new_game_button"),
    elementIsNotVisible(driver, "negative_test_button"),

    // Assert the text values of relevant fields
    elementTextValueIs(driver, "page_title", "Blackjack!"), 
    elementTextValueIs(driver, "welcome_text", "Welcome to Blackjack!"),
    elementTextValueIs(driver, "players_header", ""),
    elementTextValueIs(driver, "players_hand", ""),
    elementTextValueIs(driver, "players_score", ""),
    elementTextValueIs(driver, "dealers_header", ""),
    elementTextValueIs(driver, "dealers_hand", ""),
    elementTextValueIs(driver, "dealers_score", ""),
    elementTextValueIs(driver, "results_area", ""),
    elementTextValueIsNot(driver, "page_title", "Blackjack")
  ])
  
  .then(
    result => result,
    error => false
  )
  return myPromises;
}


// State 02 = New Game state
async function getState02(driver){
  var myPromises = Promise.all([
    // Assert whether elements are available
    canFindElement(driver, "page_title"), 
    canFindElement(driver, "welcome_text"),
    canFindElement(driver, "players_header"),
    canFindElement(driver, "players_hand"),
    canFindElement(driver, "players_score"),
    canFindElement(driver, "deal_button"),
    canFindElement(driver, "stick_button"),
    canFindElement(driver, "twist_button"),
    canFindElement(driver, "dealers_header"),
    canFindElement(driver, "dealers_hand"),
    canFindElement(driver, "dealers_score"),
    canFindElement(driver, "results_area"),
    canFindElement(driver, "new_game_button"),
    cannotFindElement(driver, "negative_test_button"),

    // Assert whether elements are visible
    elementIsVisible(driver, "page_title"), 
    elementIsVisible(driver, "welcome_text"),
    elementIsNotVisible(driver, "players_header"),
    elementIsVisible(driver, "players_hand"),
    elementIsVisible(driver, "players_score"),
    elementIsVisible(driver, "deal_button"),
    elementIsNotVisible(driver, "stick_button"),
    elementIsNotVisible(driver, "twist_button"),
    elementIsNotVisible(driver, "dealers_header"),
    elementIsVisible(driver, "dealers_hand"),
    elementIsVisible(driver, "dealers_score"),
    elementIsVisible(driver, "results_area"),
    elementIsNotVisible(driver, "new_game_button"),
    elementIsNotVisible(driver, "negative_test_button"),

    // Assert the text values of relevant fields
    elementTextValueIs(driver, "page_title", "Blackjack!"), 
    elementTextValueIs(driver, "welcome_text", ""),
    elementTextValueIs(driver, "players_header", ""),
    elementTextValueIs(driver, "players_hand", ""),
    elementTextValueIs(driver, "players_score", ""),
    elementTextValueIs(driver, "dealers_header", ""),
    elementTextValueIs(driver, "dealers_hand", ""),
    elementTextValueIs(driver, "dealers_score", ""),
    elementTextValueIs(driver, "results_area", ""),
    elementTextValueIsNot(driver, "page_title", "Blackjack")
  ])
  
  .then(
    result => result,
    error => false
  )
  return myPromises;
}

// State 03 = Game in-progress state
async function getState03(driver){
  var myPromises = Promise.all([
    // Assert whether elements are available
    canFindElement(driver, "page_title"), 
    canFindElement(driver, "welcome_text"),
    canFindElement(driver, "players_header"),
    canFindElement(driver, "players_hand"),
    canFindElement(driver, "players_score"),
    canFindElement(driver, "deal_button"),
    canFindElement(driver, "stick_button"),
    canFindElement(driver, "twist_button"),
    canFindElement(driver, "dealers_header"),
    canFindElement(driver, "dealers_hand"),
    canFindElement(driver, "dealers_score"),
    canFindElement(driver, "results_area"),
    canFindElement(driver, "new_game_button"),
    cannotFindElement(driver, "negative_test_button"),

    // Assert whether elements are visible
    elementIsVisible(driver, "page_title"), 
    elementIsVisible(driver, "welcome_text"),
    elementIsVisible(driver, "players_header"),
    elementIsVisible(driver, "players_hand"),
    elementIsVisible(driver, "players_score"),
    elementIsNotVisible(driver, "deal_button"),
    elementIsVisible(driver, "stick_button"),
    elementIsVisible(driver, "twist_button"),
    elementIsVisible(driver, "dealers_header"),
    elementIsVisible(driver, "dealers_hand"),
    elementIsVisible(driver, "dealers_score"),
    elementIsVisible(driver, "results_area"),
    elementIsNotVisible(driver, "new_game_button"),
    elementIsNotVisible(driver, "negative_test_button"),

    // Assert the text values of relevant fields
    elementTextValueIs(driver, "page_title", "Blackjack!"), 
    elementTextValueIs(driver, "welcome_text", ""),
    elementTextValueIs(driver, "players_header", "Player has:"),
    elementTextValueIsNot(driver, "players_hand", ""),
    elementTextValueIsNot(driver, "players_score", ""),
    elementTextValueIs(driver, "dealers_header", "Dealer has:"),
    elementTextValueIsNot(driver, "dealers_hand", ""),
    elementTextValueIsNot(driver, "dealers_score", ""),
    elementTextValueIs(driver, "results_area", ""),
    elementTextValueIsNot(driver, "page_title", "Blackjack")
  ])
  
  .then(
    result => result,
    error => false
  )
  return myPromises;
}


// State 04 = 'End game' state; eg player has hit 'stick' and dealers hand is played
async function getState04(driver){
  var myPromises = Promise.all([
    // Assert whether elements are available
    canFindElement(driver, "page_title"), 
    canFindElement(driver, "welcome_text"),
    canFindElement(driver, "players_header"),
    canFindElement(driver, "players_hand"),
    canFindElement(driver, "players_score"),
    canFindElement(driver, "deal_button"),
    canFindElement(driver, "stick_button"),
    canFindElement(driver, "twist_button"),
    canFindElement(driver, "dealers_header"),
    canFindElement(driver, "dealers_hand"),
    canFindElement(driver, "dealers_score"),
    canFindElement(driver, "results_area"),
    canFindElement(driver, "new_game_button"),
    cannotFindElement(driver, "negative_test_button"),

    // Assert whether elements are visible
    elementIsVisible(driver, "page_title"), 
    elementIsVisible(driver, "welcome_text"),
    elementIsVisible(driver, "players_header"),
    elementIsVisible(driver, "players_hand"),
    elementIsVisible(driver, "players_score"),
    elementIsNotVisible(driver, "deal_button"),
    elementIsNotVisible(driver, "stick_button"),
    elementIsNotVisible(driver, "twist_button"),
    elementIsVisible(driver, "dealers_header"),
    elementIsVisible(driver, "dealers_hand"),
    elementIsVisible(driver, "dealers_score"),
    elementIsVisible(driver, "results_area"),
    elementIsVisible(driver, "new_game_button"),
    elementIsNotVisible(driver, "negative_test_button"),

    // Assert the text values of relevant fields
    elementTextValueIs(driver, "page_title", "Blackjack!"), 
    elementTextValueIs(driver, "welcome_text", ""),
    elementTextValueIs(driver, "players_header", "Player has:"),
    elementTextValueIsNot(driver, "players_hand", ""),
    elementTextValueIsNot(driver, "players_score", ""),
    elementTextValueIs(driver, "dealers_header", "Dealer has:"),
    elementTextValueIsNot(driver, "dealers_hand", ""),
    elementTextValueIsNot(driver, "dealers_score", ""),
    elementTextValueIsNot(driver, "results_area", ""),
    elementTextValueIsNot(driver, "page_title", "Blackjack")
  ])
  
  .then(
    result => result,
    error => false
  )
  return myPromises;
}

// State 05 = Reset
async function getState05(driver){
  var myPromises = Promise.all([
    // Assert whether elements are available
    canFindElement(driver, "page_title"), 
    canFindElement(driver, "welcome_text"),
    canFindElement(driver, "players_header"),
    canFindElement(driver, "players_hand"),
    canFindElement(driver, "players_score"),
    canFindElement(driver, "deal_button"),
    canFindElement(driver, "stick_button"),
    canFindElement(driver, "twist_button"),
    canFindElement(driver, "dealers_header"),
    canFindElement(driver, "dealers_hand"),
    canFindElement(driver, "dealers_score"),
    canFindElement(driver, "results_area"),
    canFindElement(driver, "new_game_button"),
    cannotFindElement(driver, "negative_test_button"),

    // Assert whether elements are visible
    elementIsVisible(driver, "page_title"), 
    elementIsVisible(driver, "welcome_text"),
    elementIsVisible(driver, "players_header"),
    elementIsVisible(driver, "players_hand"),
    elementIsVisible(driver, "players_score"),
    elementIsNotVisible(driver, "deal_button"),
    elementIsNotVisible(driver, "stick_button"),
    elementIsNotVisible(driver, "twist_button"),
    elementIsVisible(driver, "dealers_header"),
    elementIsVisible(driver, "dealers_hand"),
    elementIsVisible(driver, "dealers_score"),
    elementIsVisible(driver, "results_area"),
    elementIsVisible(driver, "new_game_button"),
    elementIsNotVisible(driver, "negative_test_button"),

    // Assert the text values of relevant fields
    elementTextValueIs(driver, "page_title", "Blackjack!"), 
    elementTextValueIs(driver, "welcome_text", ""),
    elementTextValueIs(driver, "players_header", ""),
    elementTextValueIs(driver, "players_hand", ""),
    elementTextValueIs(driver, "players_score", ""),
    elementTextValueIs(driver, "dealers_header", ""),
    elementTextValueIs(driver, "dealers_hand", ""),
    elementTextValueIs(driver, "dealers_score", ""),
    elementTextValueIs(driver, "results_area", ""),
    elementTextValueIsNot(driver, "page_title", "Blackjack")
  ])
  
  .then(
    result => result,
    error => false
  )
  return myPromises;}
  
  
module.exports = {getScores, getState01, getState02, getState03, getState04, getState05, checkArrayValuesAreAllTrue};
