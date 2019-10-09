class SeleniumWebdriverInteractions {

  constructor(driver, until) {
    this.driver = driver;
    this.until = until;
    this.short_sleep = 1;
  }


  loadPage(url) {
    var myPromise = this.driver.get(url)
    .then(
      result => {
        var smallPause = this.driver.sleep(this.short_sleep)
        .then(
          result => true,
          error => false
        )
        return smallPause;      
      },
      error => false
    )
    return myPromise;
  }


  canFindElement(elementId) {
    var myPromise = this.driver.findElement({id: elementId})
    .then(
      result => true,
      error => false
    )
    return myPromise;
  }


  cannotFindElement(elementId) {
    var myPromise = this.driver.findElement({id: elementId})
    .then(
        result => false,
        error => true  
    )
    return myPromise;
  }
  
    
  elementIsVisible(elementId) {
    var myPromise = this.driver.findElement({id: elementId}).getCssValue("visibility")
    .then(
      result => (result === "visible"),
      error => true 
    )
    return myPromise;
  }
  
  
  elementIsNotVisible(elementId) {
    var myPromise = this.driver.findElement({id: elementId}).getCssValue("visibility")
    .then(
      result => (result === "hidden"),
      error => true 
    )
    return myPromise;
  }
  
  
  elementTextValueIs(elementId, expectedText) {
    var myPromise = this.driver.findElement({id: elementId}).getText()
    .then(
      result => (result === expectedText),
      error => true 
    )
    return myPromise
  }
  
  
  elementTextValueIsNot(elementId, expectedText) {
    var myPromise = this.driver.findElement({id: elementId}).getText()
    .then(
      result => (result !== expectedText),
      error => error
    )
    return myPromise
  }


  getElementVisibility(elementId) {
    var myPromise = this.driver.findElement({id: elementId}).getCssValue("visibility")
    .then(
      result => result,
      error => false
    )
    return myPromise;
  }


  getElementText(elementId) {
    var myPromise = this.driver.findElement({id: elementId}).getText()
    .then(
      result => result,
      error => error
    )
    return myPromise
  }


  clickButton(elementId) {
    var myPromise = this.driver.findElement({id: elementId}).click()
    .then(
      result => {
        var smallPause = this.driver.sleep(this.short_sleep)
        .then(
          result => true,
          error => false
        )
        return smallPause;      
      },
      error => false
    )
    return myPromise;
  }


}
module.exports = SeleniumWebdriverInteractions;