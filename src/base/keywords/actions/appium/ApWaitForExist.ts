import { Browser as AppiumBrowser } from 'webdriverio';

/**
 * ApWaitForExist - Waits for an element to exist in the DOM
 * Polls the element until it appears or timeout is reached
 */
export class ApWaitForExist {
    protected appiumDriver?: AppiumBrowser;

    /**
     * Waits for the specified element to exist in the DOM
     * Polls every 500ms until element is found or timeout expires
     * @param selector - Element selector (XPath or ID)
     * @param timeout - Maximum wait time in milliseconds (default: 50000ms)
     * @throws Error if Appium driver is not initialized or element not found within timeout
     */
    async execute(selector: string, timeout = 50000) {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        const start = Date.now();
        while (Date.now() - start < timeout) {
            const el = await this.appiumDriver.$(selector);
            if (await el.isExisting()) return;
            await new Promise(res => setTimeout(res, 500));
        }
        throw new Error(`Element with selector "${selector}" not found after ${timeout}ms`);
    }
}
