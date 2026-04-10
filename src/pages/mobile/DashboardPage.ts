import { Browser } from 'webdriverio';
import { BasicKeyword } from "../../base/basic-keyword";

export class DashboardPage{
    private readonly basic: BasicKeyword;

    private readonly locators ={
        dashboard: 'android=new UiSelector().className("android.view.View").instance(3)'
    }

    constructor(driver: Browser) {
        this.basic = new BasicKeyword(undefined, driver);
    }

    async enter_dashboard_page(): Promise<void> {
        console.log('Waiting for Dashboard to be visible...');
        await this.basic.getAppiumDriver()?.pause(2000);
        await this.basic.apIsDisplayed(this.locators.dashboard);
        console.log('user entered dashboard page login successfull...');
    }

}

