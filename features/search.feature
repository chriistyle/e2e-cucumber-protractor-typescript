Feature: Search functionality

Background: 
  Given the user is at the Agent Image Search page

  Scenario: User sorts the properties by "Price Descending"   
     When the user opens the Sort by dropdown
      And the user selects "Price Descending"
     Then the properties on the page must be ordered from most expensive to least expensive 
  
  Scenario: User sorts the properties by "Price Ascending"
     When the user opens the Sort by dropdown
      And the user selects "Price Ascending"
     Then the properties on the page must be ordered from least expensive to most expensive 

  Scenario: User sorts the properties by "A-Z"
     When the user opens the Sort by dropdown
      And the user selects "A-Z"
     Then the properties on the page must be alphabetized by .prop-title

  Scenario: User sorts the properties by "Z-A"
     When the user opens the Sort by dropdown
      And the user selects "Z-A"
     Then the properties on the page must be ordeed from Z-A by .prop-title 

  Scenario: User checks if all the property images are exactly 300px
     Then the clientWidth of the property images must be exactly 300px