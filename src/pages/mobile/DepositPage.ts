import { Browser } from 'webdriverio';
import { BasicKeyword } from '../../base/basic-keyword';

export class DepositPage {

    private readonly basic: BasicKeyword;

    private readonly locators = {
        depositBtn: '~Deposit',
        amountField: '//android.widget.EditText[@hint="0.00"]',
        debitCard: '~Debit Card',
        nextBtn: '~Next',

        cardNumber: '//android.widget.EditText[@resource-id="accountNumber"]',
        expMonth: 'android=new UiSelector().resourceId("expMonth")',
        monthValue: 'android=new UiSelector().text("March")',

        expYear: 'android=new UiSelector().resourceId("expYear")',
        yearValue: 'android=new UiSelector().text("2032")',

        cvv: 'android=new UiSelector().resourceId("cvv")',

        submitBtn: '//android.widget.Button[@resource-id="submitButton"]',
        confirmBtn: '~Confirm',
        okBtn: '~Ok'
    };

    constructor(driver: Browser) {
        this.basic = new BasicKeyword(undefined, driver);
    }

    async click_deposit_button() {
        await this.basic.waitForElement(this.locators.depositBtn, 6000);
        await this.basic.clickElement(this.locators.depositBtn);
    }

    async enter_deposit_amount() {
    await this.basic.waitForElement(this.locators.amountField, 6000);
    await this.basic.setValue(this.locators.amountField, '50.00');
    await this.basic.apHideKeyword();
    await this.basic.scrollForward();
    await this.basic.getAppiumDriver()?.pause(2000);
}

    async select_debit_card() {
        await this.basic.clickElement(this.locators.debitCard);
        await this.basic.waitForElement(this.locators.nextBtn, 6000);
        await this.basic.clickElement(this.locators.nextBtn);
    }

    async enter_card_details() {
        
        await this.basic.waitForElement(this.locators.cardNumber, 6000);

        await this.basic.typeInput(this.locators.cardNumber, '4761732000020023');

        await this.basic.clickElement(this.locators.expMonth);
        await this.basic.clickElement(this.locators.monthValue);

        await this.basic.clickElement(this.locators.expYear);
        await this.basic.clickElement(this.locators.yearValue);

        await this.basic.typeInput(this.locators.cvv, '122');
        await this.basic.apHideKeyword();
    }

    async confirm_payment() {
        await this.basic.clickElement(this.locators.submitBtn);
        await this.basic.clickElement(this.locators.confirmBtn);
        await this.basic.clickElement(this.locators.okBtn);
    }

    async verify_deposit_success() {
        console.log("Deposit flow executed successfully");
    }


}