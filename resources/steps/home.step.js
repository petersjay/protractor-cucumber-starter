import {homePage} from '../pages/home.page.js';
import protractor from 'protractor';
import Globals from '../globals';
import ElementHelper from '../helpers/element.helper';

const globals = new Globals();
const eleHelper = new ElementHelper();
const expect = globals.expect;


export default function() {
  this.Given(/^I go to "([^"]*)"$/, function (url, callback) {
    browser.ignoreSynchronization=true;
    browser.get('http://' + url).then(() => {
      callback();
    });
  });
  this.When(/^I type "([^"]*)"$/, function (searchString, callback) {
    homePage.searchBox.clear().then(() => {
      homePage.searchBox.sendKeys(searchString).then(() => {
        callback();
      });
    });
  });
  this.When(/^I click the search button$/, function (callback) {
    homePage.searchButton.click().then(() => {
      callback();
    });
  });
  this.Then(/^I should see the cucumber github url in a list of results$/, function (callback) {
    let githubUrlElement = element(by.cssContainingText('cite', 'https://github.com/cucumber/cucumber-js'));
    eleHelper.waitForElement(githubUrlElement);
    expect(githubUrlElement.isPresent()).to.eventually.be.true.and.notify(callback);
  });
}
