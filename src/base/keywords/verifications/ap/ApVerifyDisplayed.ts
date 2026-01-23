import { Browser as AppiumBrowser } from 'webdriverio';

/**
 * ApVerifyDisplayed - Verifies that an element is displayed on mobile
 * Checks visibility state of the target element
 */
export class ApVerifyDisplayed {
    protected appiumDriver?: AppiumBrowser;

    /**
     * Checks if the specified element is displayed
     * @param selector - Element selector (XPath or ID)
     * @returns True if element is displayed, false otherwise
     * @throws Error if Appium driver is not initialized
     */
    async execute(selector: string): Promise<boolean> {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        const el = await this.appiumDriver.$(selector);
        return await el.isDisplayed();
    }
}
