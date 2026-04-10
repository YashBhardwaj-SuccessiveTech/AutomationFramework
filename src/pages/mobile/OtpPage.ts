import { Browser } from 'webdriverio';
import { BasicKeyword } from '../../base/basic-keyword';

export class OtpPage {
    private readonly basic: BasicKeyword;

    private readonly locators = {
        otpEnter: 'android.widget.EditText',
        btnSubmit: '~Submit'
    };

    constructor(driver: Browser) {
        this.basic = new BasicKeyword(undefined, driver);
    }   

    async enter_phone_otp(): Promise<void> {
        console.log('Waiting for OTP field to be visible...');
        await this.basic.getAppiumDriver()?.pause(2000);
        console.log('Entering OTP using addValue...');
        await this.basic.typeValue(this.locators.otpEnter, '000000');
        console.log('OTP entered successfully');
    }

    async click_submit_button(): Promise<void> {
        console.log('Clicking Submit button...');
        await this.basic.getAppiumDriver()?.pause(1000);
        await this.basic.clickElement(this.locators.btnSubmit);
        await this.basic.getAppiumDriver()?.pause(3000);
        console.log('Submit button clicked');
    }
}
