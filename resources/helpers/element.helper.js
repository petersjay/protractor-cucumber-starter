
import protractor from 'protractor';

const EC = protractor.ExpectedConditions;

export default class ElementHelper {
  waitForPresent(ele) {
    return browser.wait(EC.presenceOf(ele));
  }
  waitForDisplay(ele) {
    return browser.wait(ele.isDisplayed);
  }
  waitForElement(ele) {
    this.waitForPresent(ele);
    this.waitForDisplay(ele);
  }
}
