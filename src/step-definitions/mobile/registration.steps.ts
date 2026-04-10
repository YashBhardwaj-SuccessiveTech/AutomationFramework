import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { MobileDriver } from '../../base/drivers/MobileDriver';
import { RegistrationPage } from '../../pages/mobile/registrationPage';

let registration: RegistrationPage;

Before({ tags: "@registration", timeout: 300000 }, async function () {
    console.log('Starting mobile test setup...');
    try{
        console.log("inintializing mobile driver");
        await MobileDriver.init();
        console.log('Mobile driver initialized successfully');
        registration = new RegistrationPage(MobileDriver.getDriver());
        console.log("Registration Page object created successfully");
    }catch(error){
        console.error("some error in starting mobile driver", error);
        throw error;
    }
});

After({ tags: "@registration" }, async function () {
    await MobileDriver.close();
});

Given('the user launches the app', async () => {
    await registration.launchApp();
});

// Given('the user allows location permission', async () => {
//     await registration.allowLocationPermission();
// });

When('the user navigates to Signup', async () => {
    await registration.tapSignup();
});

When('the user enters email and password', async () => {
    await registration.enterCredentials("man_pp_cfap_djp_@gmail.com", "Password@1234");
});

When('the user accepts terms and conditions', async () => {
    await registration.acceptTerms();
});

When('the user taps on Create Account', async () => {
    await registration.tapCreateAccount();
});

When('the user enters email OTP', async () => {
    await registration.enterEmailOtp("000000");
});

When('the user submits email OTP', async () => {
    await registration.submitOtp();
});

When('the user enters phone number', async () => {
    await registration.enterPhoneNumber("2229064251");
});

When('the user submits phone number', async () => {
    await registration.submitPhoneNumber();
});

When('the user enters phone OTP', async () => {
    await registration.enterPhoneOtp("000000");
});

When('the user submits phone OTP', async () => {
    await registration.submitOtp();
});

When('the user fills personal details form', async () => {
    await registration.fillPersonalDetails();
});

Then('the user registration should be successful', async () => {
    await registration.verifyRegistrationSuccess();
});
