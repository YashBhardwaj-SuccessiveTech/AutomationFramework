import { When, Then } from '@cucumber/cucumber';
import { getDepositPage, getHomePage } from '../../base/hooks/mobile.hooks';

When('User navigates to wallet', async function () {
    await getHomePage().click_wallet_button();
});

When('User clicks on deposit', async function () {
    await getDepositPage().click_deposit_button();
});

When('User enters deposit amount', async function () {
    await getDepositPage().enter_deposit_amount();
});

When('User selects debit card method', async function () {
    await getDepositPage().select_debit_card();
});

When('User enters card details', async function () {
    await getDepositPage().enter_card_details();
});

When('User confirms the payment', async function () {
    await getDepositPage().confirm_payment();
});

Then('Deposit should be successful', async function () {
    await getDepositPage().verify_deposit_success();
});