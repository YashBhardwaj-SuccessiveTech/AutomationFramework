import { Browser } from 'webdriverio';
import { BasicKeyword } from '../../base/basic-keyword';

export class LoginPage {
    private readonly basic: BasicKeyword;

    private readonly locators = {
        txtEmailId: 'android=new UiSelector().className("android.widget.EditText").instance(0)',
        txtPassword: 'android=new UiSelector().className("android.widget.EditText").instance(1)',
        btnLogIn: 'android=new UiSelector().description("Log in").instance(1)',
        otpEnter: 'android.widget.EditText',
        btnSubmit: '~Submit'
    };

    constructor(driver: Browser) {
        this.basic = new BasicKeyword(undefined, driver);
    }   

    // async clickElement(locator: string) {
    //     const element = await $(locator);
    //     await element.waitForDisplayed({ timeout: 15000 });
    //     await element.click();
    // }
    
    async enter_email_id(): Promise<void> {
        await this.basic.getAppiumDriver()?.pause(5000);
        await this.basic.clickElement(this.locators.txtEmailId);
        await this.basic.getAppiumDriver()?.pause(2000);
        await this.basic.typeInput(this.locators.txtEmailId, 'yash1255_pp_cfap_djp_@gmail.com');
    }

    async enter_password(): Promise<void> {
        await this.basic.getAppiumDriver()?.pause(5000);
        await this.basic.clickElement(this.locators.txtPassword);
        await this.basic.getAppiumDriver()?.pause(2000);
        await this.basic.typeInput(this.locators.txtPassword, 'Password@1234');
    }

    async click_login_button(): Promise<void> {
        await this.basic.getAppiumDriver()?.pause(2000); 
        await this.basic.clickElement(this.locators.btnLogIn);
        await this.basic.getAppiumDriver()?.pause(5000);  // Increased wait for OTP screen to appear
    }
}




// import { Browser } from 'webdriverio';
// import { BasicKeyword } from '../../base/basic-keyword';

// export class LoginPage {
//     private readonly basic: BasicKeyword;

//     private readonly locators = {
//         btnLogin: '//android.view.View[@content-desc="Login"]',
//         txtEmailId: '//*[@class="android.widget.EditText"][1]',
//         txtPassword: '//*[@class="android.widget.EditText"][2]',
//         btnSignIn: '//android.view.View[@content-desc="Log in"][2]'
//     };

//     constructor(driver: Browser) {
//         this.basic = new BasicKeyword(undefined, driver);
//     }   

//     async click_login_button(): Promise<void> {
//         await this.basic.getAppiumDriver()?.pause(10000);
//         await this.basic.clickElement(this.locators.btnLogin);
//     }

//     async enter_email_id(): Promise<void> {
//         await this.basic.getAppiumDriver()?.pause(5000);
//         await this.basic.clickElement(this.locators.txtEmailId);
//         await this.basic.getAppiumDriver()?.pause(5000);
//         await this.basic.typeInput(this.locators.txtEmailId, 'qaraj239_pp_cfap_idpvp_djp_@example.com');
//         await this.basic.getAppiumDriver()?.pause(5000);
//     }

//     async enter_password(): Promise<void> {
//         await this.basic.getAppiumDriver()?.pause(5000);
//         await this.basic.clickElement(this.locators.txtPassword);
//         await this.basic.getAppiumDriver()?.pause(5000); 
//         await this.basic.typeInput(this.locators.txtPassword, 'Testing@123!');
//     }

//     async click_signin_button(): Promise<void> {
//         await this.basic.getAppiumDriver()?.pause(5000); 
//         await this.basic.clickElement(this.locators.btnSignIn);
//         await this.basic.getAppiumDriver()?.pause(5000);
//     }
// }



