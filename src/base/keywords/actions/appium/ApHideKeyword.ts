import { Browser as AppiumBrowser } from 'webdriverio';

/**
 * ApClear - Clears the value of an input element
 * Removes all text content from the target element
 */
export class ApHideKeyword {
    protected appiumDriver?: AppiumBrowser;

    /**
     * Executes clear action on the specified element
     * @param selector - Element selector (XPath or ID)
     * @throws Error if Appium driver is not initialized
     */
    async execute() {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        const el = await this.appiumDriver;
        await el.hideKeyboard();
    }
}
