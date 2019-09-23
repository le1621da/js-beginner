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