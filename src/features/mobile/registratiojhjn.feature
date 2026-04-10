Feature: User Registration

  Scenario: Successful new user registration

    Given the user launches the app
    And the user navigates to signup screen

    When the user enters email and password
    And the user accepts terms and creates account
    And the user completes email OTP verification
    And the user enters phone number and verifies OTP
    And the user fills personal details and submits
    Then the account should be created successfully
