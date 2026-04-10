import { Browser } from 'webdriverio';
import { BasicKeyword } from '../../base/basic-keyword';

export class HomePage {
    private readonly basic: BasicKeyword;

    private readonly locators = {
        btnLogin: '~Login',
        btnSignup: '~Signup',
        walletBtn: 'android=new UiSelector().descriptionMatches("^\\$.*")',
    };

    constructor(driver: Browser) {
        this.basic = new BasicKeyword(undefined, driver);
    }   

    async click_login_button(): Promise<void> {
        await this.basic.getAppiumDriver()?.pause(4000);
        await this.basic.clickElement(this.locators.btnLogin);
        await this.basic.getAppiumDriver()?.pause(5000);
    }

    async click_signin_button(): Promise<void> {
        await this.basic.getAppiumDriver()?.pause(2000); 
        await this.basic.clickElement(this.locators.btnSignup);
        await this.basic.getAppiumDriver()?.pause(5000);  // Increased wait for OTP screen to appear
    }

    async click_wallet_button():Promise<void> {
        await this.basic.getAppiumDriver()?.pause(10000);
        await this.basic.clickElement(this.locators.walletBtn);
        await this.basic.getAppiumDriver()?.pause(3000);
    }
}



