import { Before, After } from '@cucumber/cucumber';
import { MobileDriver } from '../drivers/MobileDriver';
import { HomePage } from '../../pages/mobile/HomePage';
import { OtpPage } from '../../pages/mobile/OtpPage';
import { LoginPage } from '../../pages/mobile/LoginPage';
import { DashboardPage } from '../../pages/mobile/DashboardPage';
import { DepositPage } from '../../pages/mobile/DepositPage';
import { loginUser } from '../../utils/LoginHelper';

let homePage: HomePage;
let otp_Page: OtpPage
let loginPage: LoginPage;
let dashboardPage: DashboardPage;
let depositPage: DepositPage;

Before({ tags: "@mobile", timeout: 300000 }, async function () {
    console.log('Starting mobile test setup...');
    try {
        console.log('Initializing mobile driver...');
        await MobileDriver.init();
        console.log('Mobile driver initialized successfully');
        const driver = MobileDriver.getDriver();
        homePage = new HomePage(driver);
        otp_Page = new OtpPage(driver);
        loginPage = new LoginPage(driver);
        dashboardPage = new DashboardPage(driver);
        depositPage = new DepositPage(driver);
        console.log('Home page and otp page object created successfully');
        
    } catch (error) {
        console.error('Error in Before hook:', error);
        throw error;
    }
});

Before({ tags: "@requiresLogin", timeout: 300000 }, async function () {
    console.log("Executing automatic login...");
    await loginUser();
    console.log("Login completed successfully");
});

After({ tags: "@mobile" }, async function () {
    console.log('Cleaning up mobile test...');
    await MobileDriver.close();
    console.log('Mobile test cleanup completed');
});

// Export homePage for step definitions
export function getHomePage(): HomePage {
    if (!homePage) {
        throw new Error('HomePage not initialized. Ensure @mobile hook has run.');
    }
    return homePage;
}

export function getOtpPage(): OtpPage{
    if(!otp_Page){
        throw new Error('otpPage not initialized.')
    }
    return otp_Page;
}

export function getLoginPage(): LoginPage{
    if(!loginPage){
        throw new Error('loginPage not initialized')
    }
    return loginPage;
}

export function getDashboardPage(): DashboardPage{
    if(!dashboardPage){
        throw new Error('DashBoardPage not initialized');
    }
    return dashboardPage;
}

export function getDepositPage(): DepositPage {
    if (!depositPage) {
        throw new Error('DepositPage not initialized');
    }
    return depositPage;
}

