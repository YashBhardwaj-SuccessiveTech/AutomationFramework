
Feature: User Registration

  Scenario: Successful new user registration
    Given the user launches the app
    And the user allows location permission
    When the user navigates to Signup
    And the user enters email and password
    And the user accepts terms and conditions
    And the user taps on Create Account
    And the user enters email OTP
    And the user submits email OTP
    And the user enters phone number
    And the user submits phone number
    And the user enters phone OTP
    And the user submits phone OTP
    And the user fills personal details form
    Then the user registration should be successful
