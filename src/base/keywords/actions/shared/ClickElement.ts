import { Page } from '@playwright/test';
import { Browser as AppiumBrowser } from 'webdriverio';

/**
 * ClickElement - Clicks an element on either web or mobile
 * Handles both Playwright and Appium drivers with element waiting and visual feedback
 */
export class ClickElement {
    protected playwrightPage?: Page;
    protected appiumDriver?: AppiumBrowser;

    /**
     * Executes click action on the specified element
     * Supports both Playwright and Appium drivers simultaneously
     * @param selector - CSS selector for Playwright or XPath/ID for Appium
     */
    async execute(selector: string) {
        if (this.appiumDriver !== undefined) {
            await this.waitForElement(selector, 60);
            await this.appiumDriver.$(selector).click();
        }
    }
    /**
     * Waits for element to become visible
     * @param selector - Element selector
     * @param iteration - Number of iterations to wait
     */
    private async waitForElement(selector: string, iteration: number) {

        if (this.appiumDriver !== undefined) {
            for (let i = 0; i < 100; i++) {
                if (await this.appiumDriver.$(selector).isDisplayed() === true) {
                    break;
                }
                else {
                    await this.appiumDriver.pause(500);
                }
            }
        }
    }

}
