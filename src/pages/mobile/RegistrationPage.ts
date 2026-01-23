import { Browser } from 'webdriverio';
import { BasicKeyword } from '../../base/basic-keyword';

export class RegistrationPage {
    private readonly basic: BasicKeyword;

    private readonly locators = {
        btnSignup: '~Signup',
        txtEmailID: 'android=new UiSelector().className("android.widget.EditText").instance(0)',
        txtPassword: 'android=new UiSelector().className("android.widget.EditText").instance(1)',
        chkPP: '~I confirm the provided information is complete and accurate. I am not a Prohibited Participant meaning an individual: (1) who is prohibited from wagering pursuant to the Sports Gaming Act, T.C.A. § 4-49-112; (2) who is on any self-exclusion list or Council exclusion list; (3) whose participation may undermine the integrity of the wagering or the Sporting Event; (4) who is excluded from wagering for any other good cause; or (5) any Person who makes or attempts to make a Wager as an agent or proxy on behalf of another.',
        chkTnC: "~I accept VIP Play's",
        btnCreateAccount: '~Create Account',
        txtOTP: 'android.widget.EditText',
        btnSubmit: '~Submit',
        txtMobile: 'android.widget.EditText',
        btnContinue: '~Continue',

        txtFirstName: 'android=new UiSelector().className("android.widget.EditText").instance(0)',
        txtLastName: "//*[@class='android.widget.EditText'][@index='7']",
        chkMiddleName: "~I don't have a middle name",
        lsSuffix: '~Select Suffix',
        lsValue: '~Jr.',
        dtDOB: 'android=new UiSelector().className("android.widget.EditText").instance(0)',
        dtYear: '~2000',
        btnOK: '~OK',
        txtSSN: '//android.widget.ScrollView/android.widget.EditText[1]',
        txtAddress: 'android=new UiSelector().className("android.widget.EditText").instance(4)',
        dpAddress: '~Universal Boulevard, Orlando, FL, USA',
        btnConfirm: '~Confirm Identity',
        btnDone: 'android=new UiSelector().description("Done")',
        btnClose: '~Close',
    };

    private readonly data = {
        user: "virat21900213_pp_cfap_djp_@gmail.com",
        mob: "0231212003",
        ssn: "001301034",
    };

     

    constructor(driver: Browser) {
        this.basic = new BasicKeyword(undefined, driver);
    }   

    async regisrtation_flow(): Promise<void> {
        await this.basic.getAppiumDriver()?.pause(10000);
        await this.basic.clickElement(this.locators.btnSignup);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.setValue(this.locators.txtEmailID, this.data.user);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.setValue(this.locators.txtPassword, 'Virat@1234');
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.clickElement(this.locators.chkPP);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.clickElement(this.locators.chkTnC);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.clickElement(this.locators.btnCreateAccount);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.setValue(this.locators.txtOTP, '000000');
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.clickElement(this.locators.btnSubmit);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.setValue(this.locators.txtMobile, this.data.mob);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.clickElement(this.locators.btnContinue);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.setValue(this.locators.txtOTP, '000000');
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.clickElement(this.locators.btnSubmit);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.setValue(this.locators.txtFirstName, 'QA');
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.clickElement(this.locators.chkMiddleName);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.setValue(this.locators.txtLastName, 'User');
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.clickElement(this.locators.lsSuffix);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.clickElement(this.locators.lsValue);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.clickElement(this.locators.dtDOB);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.clickElement(this.locators.dtYear);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.clickElement(this.locators.btnOK);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.setValue(this.locators.txtSSN, this.data.ssn);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.setValue(this.locators.txtAddress, 'u');
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.clickElement(this.locators.dpAddress);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.clickElement(this.locators.btnConfirm);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.clickElement(this.locators.btnDone);
        await this.basic.getAppiumDriver()?.pause(3000);
        await this.basic.clickElement(this.locators.btnClose);
        await this.basic.getAppiumDriver()?.pause(3000);

    }
}



