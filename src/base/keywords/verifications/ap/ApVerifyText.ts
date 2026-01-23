import { Browser as AppiumBrowser } from 'webdriverio';

/**
 * ApVerifyText - Verifies the text content of an element on mobile
 * Compares actual element text with expected text
 */
export class ApVerifyText {
    protected appiumDriver?: AppiumBrowser;

    /**
     * Verifies that the element's text matches the expected value
     * Trims whitespace from both actual and expected text before comparison
     * @param selector - Element selector (XPath or ID)
     * @param expected - The expected text value
     * @returns True if text matches, false otherwise
     * @throws Error if Appium driver is not initialized
     */
    async execute(selector: string, expected: string): Promise<boolean> {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        const el = await this.appiumDriver.$(selector);
        await el.waitForExist({ timeout: 50000, interval: 500 });
        const actual = await el.getText();
        return actual.trim() === expected.trim();
    }
}
