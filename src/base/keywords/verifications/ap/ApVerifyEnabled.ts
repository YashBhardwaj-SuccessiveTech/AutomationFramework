import { Browser as AppiumBrowser } from 'webdriverio';

/**
 * ApVerifyEnabled - Verifies that an element is enabled/clickable on mobile
 * Checks if the element is in an enabled state
 */
export class ApVerifyEnabled {
    protected appiumDriver?: AppiumBrowser;

    /**
     * Checks if the specified element is enabled
     * @param selector - Element selector (XPath or ID)
     * @returns True if element is enabled, false otherwise
     * @throws Error if Appium driver is not initialized
     */
    async execute(selector: string): Promise<boolean> {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        const el = await this.appiumDriver.$(selector);
        return await el.isEnabled();
    }
}
