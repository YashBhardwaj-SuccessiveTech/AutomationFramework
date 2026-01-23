import { Page } from '@playwright/test';
import { Browser as AppiumBrowser } from 'webdriverio';

/**
 * WaitForElement - Waits for an element to become visible on either web or mobile
 * Supports both Playwright and Appium drivers
 */
export class WaitForElement {
    protected playwrightPage?: Page;
    protected appiumDriver?: AppiumBrowser;

    /**
     * Waits for the specified element to become visible
     * @param selector - CSS selector for Playwright or XPath/ID for Appium
     * @param iteration - Number of iterations/checks to perform
     */
    async execute(selector: string, iteration: number) {
        if (this.playwrightPage !== undefined) {
            for (let i = 0; i < iteration; i++) {
                if (await this.playwrightPage.isVisible(selector) === true) {
                    break;
                }
                else {
                    await this.playwrightPage.waitForTimeout(500);
                }
            }
        }

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
