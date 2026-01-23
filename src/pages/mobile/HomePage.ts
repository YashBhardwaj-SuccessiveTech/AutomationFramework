import { Browser } from 'webdriverio';
import { BasicKeyword } from '../../base/basic-keyword';

export class HomePage {
    private readonly basic: BasicKeyword;

    private readonly locators = {
        btnLogin: '//android.view.View[@content-desc="Login"]',
        txtEmailId: '//*[@class="android.widget.EditText"][1]',
        txtPassword: '//*[@class="android.widget.EditText"][2]',
        btnSignIn: '//android.view.View[@content-desc="Log in"][2]'
    };

    constructor(driver: Browser) {
        this.basic = new BasicKeyword(undefined, driver);
    }   

    async click_login_button(): Promise<void> {
        await this.basic.getAppiumDriver()?.pause(10000);
        await this.basic.clickElement(this.locators.btnLogin);
    }

    async enter_email_id(): Promise<void> {
        await this.basic.getAppiumDriver()?.pause(5000);
        await this.basic.clickElement(this.locators.txtEmailId);
        await this.basic.getAppiumDriver()?.pause(5000);
        await this.basic.typeInput(this.locators.txtEmailId, 'qaraj239_pp_cfap_idpvp_djp_@example.com');
        await this.basic.getAppiumDriver()?.pause(5000);
    }

    async enter_password(): Promise<void> {
        await this.basic.getAppiumDriver()?.pause(5000);
        await this.basic.clickElement(this.locators.txtPassword);
        await this.basic.getAppiumDriver()?.pause(5000); 
        await this.basic.typeInput(this.locators.txtPassword, 'Testing@123!');
    }

    async click_signin_button(): Promise<void> {
        await this.basic.getAppiumDriver()?.pause(5000); 
        await this.basic.clickElement(this.locators.btnSignIn);
        await this.basic.getAppiumDriver()?.pause(5000);
    }
}



