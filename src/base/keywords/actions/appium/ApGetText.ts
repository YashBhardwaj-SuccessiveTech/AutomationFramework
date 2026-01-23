import { Browser as AppiumBrowser } from 'webdriverio';

/**
 * ApGetText - Retrieves the text content of an element
 * Waits for element existence before extracting text
 */
export class ApGetText {
    protected appiumDriver?: AppiumBrowser;

    /**
     * Executes get text action on the specified element
     * @param selector - Element selector (XPath or ID)
     * @returns The text content of the element
     * @throws Error if Appium driver is not initialized
     */
    async execute(selector: string): Promise<string> {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        const el = await this.appiumDriver.$(selector);
        await el.waitForExist({ timeout: 50000, interval: 500 });
        return await el.getText();
    }
}
