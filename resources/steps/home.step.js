import {homePage} from '../pages/home.page.js';
import protractor from 'protractor';
import Globals from '../globals';
import ElementHelper from '../helpers/element.helper';

const globals = new Globals();
const eleHelper = new ElementHelper();
const expect = globals.expect;

/** @function
  * @description exports the Cucumber JS steps for the home pages
  */
export default function() {
  /**
    * @example Given I go to "google.com"
    */
  this.Given(/^I go to "([^"]*)"$/, function (url, callback) {
    browser.ignoreSynchronization=true;
    browser.get('http://' + url).then(() => {
      callback();
    });
  });
  /**
    * @example And I type "cucumber js"
    */
  this.When(/^I type "([^"]*)"$/, function (searchString, callback) {
    homePage.searchBox.clear().then(() => {
      homePage.searchBox.sendKeys(searchString).then(() => {
        callback();
      });
    });
  });
  /**
    * @example When I click the search button
    */
  this.When(/^I click the search button$/, function (callback) {
    homePage.searchButton.click().then(() => {
      callback();
    });
  });
  /**
    * @example Then I should see the cucumber github url in a list of results
    */
  this.Then(/^I should see the cucumber github url in a list of results$/, function (callback) {
    let githubUrlElement = element(by.cssContainingText('cite', 'https://github.com/cucumber/cucumber-js'));
    eleHelper.waitForElement(githubUrlElement);
    expect(githubUrlElement.isPresent()).to.eventually.be.true.and.notify(callback);
  });
}
