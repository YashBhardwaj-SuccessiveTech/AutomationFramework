import { Given, When, Then } from '@cucumber/cucumber';
import { MobileDriver } from '../../base/drivers/MobileDriver';
import { getDashboardPage, getHomePage, getLoginPage, getOtpPage } from '../../base/hooks/mobile.hooks';

Given('User is on VIP play home page', { timeout: 300000 }, async function () {
    console.log('*************** Session ID ****************');
    console.log('Launched VIP Play app...');
    console.log(await MobileDriver.getDriver().sessionId);
    console.log('******************************************');
});

When('User click on login button', { timeout: 300000 }, async function () {
    await getHomePage().click_login_button();
});

When('User enters the email id', { timeout: 300000 }, async function () {
    await getLoginPage().enter_email_id();
});

When('User enters the password', { timeout: 300000 }, async function () {
    await getLoginPage().enter_password();
});

When('User click on sign-in button', { timeout: 300000 }, async function () {
    await getLoginPage().click_login_button();
});

When('User enters the phone otp', { timeout: 60000 }, async function(){
    await getOtpPage().enter_phone_otp();
});

When('User submits the phone otp', { timeout: 60000}, async function(){
    await getOtpPage().click_submit_button();
});

Then('User must be redirected to Dashboard', { timeout: 60000 }, async function() {
    await getDashboardPage().enter_dashboard_page();
})


