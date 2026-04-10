Feature: Deposit functionality on VIP Play mobile app

  @mobile @requiresLogin
  Scenario: Successful deposit using debit card
    When User navigates to wallet
    And User clicks on deposit
    And User enters deposit amount
    And User selects debit card method
    And User enters card details
    And User confirms the payment
    Then Deposit should be successful
    