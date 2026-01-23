import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { MobileDriver } from '../../base/drivers/MobileDriver';
import { HomePage } from '../../pages/mobile/HomePage';

let homePage: HomePage;


Before({ tags: "@mobile", timeout: 300000 }, async function () {
    console.log('Starting mobile test setup...');
    try {
        console.log('Initializing mobile driver...');
        await MobileDriver.init();
        console.log('Mobile driver initialized successfully');
        homePage = new HomePage(MobileDriver.getDriver());
        console.log('Home page object created successfully');
    } catch (error) {
        console.error('Error in Before hook:', error);
        throw error;
    }
});

After({ tags: "@mobile" }, async function () {
    await MobileDriver.close();
});

Given('User is on VIP play home page', { timeout: 300000 }, async function () {
    console.log('*************** Session ID ****************');
    console.log('Launching VIP Play app...');
    console.log(await MobileDriver.getDriver().sessionId);
    console.log('******************************************');
});

When('User click on login button', { timeout: 300000 }, async function () {
    await homePage.click_login_button();
});

When('User enters the email id', { timeout: 300000 }, async function () {
    await homePage.enter_email_id();
});

When('User enters the password', { timeout: 300000 }, async function () {
    await homePage.enter_password();
});

When('User click on sign-in button', { timeout: 300000 }, async function () {
    await homePage.click_signin_button();
});


