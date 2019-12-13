/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const shortSleep = 0;

function loadPage(driver, url) {
  const myPromise = driver.get(url)
    .then(
      (result) => {
        const smallPause = driver.sleep(shortSleep)
          .then(
            (result) => true,
          );
        return smallPause;
      },
      (error) => false,
    );
  return myPromise;
}


function canFindElement(driver, elementId) {
  const myPromise = driver.findElement({ id: elementId })
    .then(
      (result) => true,
      (error) => false,
    );
  return myPromise;
}

function cannotFindElement(driver, elementId) {
  const myPromise = driver.findElement({ id: elementId })
    .then(
      (result) => false,
      (error) => true,
    );
  return myPromise;
}

function elementIsEnabled(driver, elementId) {
  const myPromise = driver.findElement({ id: elementId }).isEnabled()
    .then(
      (result) => result,
      (error) => false,
    );

  return myPromise;
}

function elementIsDisabled(driver, elementId) {
  const myPromise = driver.findElement({ id: elementId }).isEnabled()
    .then(
      (result) => !result,
      (error) => true,
    );
  return myPromise;
}

function elementIsVisible(driver, elementId) {
  const myPromise = driver.findElement({ id: elementId }).getCssValue('visibility')
    .then(
      (result) => (result === 'visible'),
      (error) => true,
    );
  return myPromise;
}

function elementIsNotVisible(driver, elementId) {
  const myPromise = driver.findElement({ id: elementId }).getCssValue('visibility')
    .then(
      (result) => (result === 'hidden'),
      (error) => true,
    );
  return myPromise;
}

function elementTextValueIs(driver, elementId, expectedText) {
  const myPromise = driver.findElement({ id: elementId }).getText()
    .then(
      (result) => (result === expectedText),
      (error) => true,
    );
  return myPromise;
}

function elementTextValueIsNot(driver, elementId, expectedText) {
  const myPromise = driver.findElement({ id: elementId }).getText()
    .then(
      (result) => (result !== expectedText),
      (error) => error,
    );
  return myPromise;
}

function getElementVisibility(driver, elementId) {
  const myPromise = driver.findElement({ id: elementId }).getCssValue('visibility')
    .then(
      (result) => result,
      (error) => false,
    );
  return myPromise;
}

function getElementText(driver, elementId) {
  const myPromise = driver.findElement({ id: elementId }).getText()
    .then(
      (result) => result,
      (error) => error,
    );
  return myPromise;
}

function clickButton(driver, elementId) {
  const myPromise = driver.findElement({ id: elementId }).click()
    .then(
      (result) => {
        const smallPause = driver.sleep(shortSleep)
          .then(
            (result) => true,
          );
        return smallPause;
      },
      (error) => false,
    );
  return myPromise;
}


module.exports = {
  loadPage,
  canFindElement,
  cannotFindElement,
  elementIsVisible,
  elementIsNotVisible,
  elementTextValueIs,
  elementTextValueIsNot,
  getElementVisibility,
  getElementText,
  clickButton,
  elementIsEnabled,
  elementIsDisabled,
};
