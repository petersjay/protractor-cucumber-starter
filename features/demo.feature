#features/demo.feature
Feature: Google Search
  As a user of Google, I should be able to search for something
  and be given a list of results

  Scenario: Basic Google Test
    Given I go to "google.com"
    When I type "Cucumber JS"
    And I click the search button
    Then I should see the cucumber github url in a list of results
