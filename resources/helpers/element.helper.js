
import protractor from 'protractor';

const EC = protractor.ExpectedConditions;

/** @class ElementHelper
  * @classdesc Helper functions for finding elements
  */
export default class ElementHelper {
  /** @function waitForPresent
    * @description Checks the browser for the presence of an element
    * @param {HTMLElement} ele Element to check for
    */
  waitForPresent(ele) {
    return browser.wait(EC.presenceOf(ele));
  }
  /** @function waitForDisplay
    * @description Checks the browser for the display of an element
    * @param {HTMLElement} ele Element to check for
    */
  waitForDisplay(ele) {
    return browser.wait(ele.isDisplayed);
  }
  /** @function waitForElement
    * @description Checks the browser for both the presence and display of an element
    * @param {HTMLElement} ele Element to check for
    */
  waitForElement(ele) {
    this.waitForPresent(ele);
    this.waitForDisplay(ele);
  }
}
