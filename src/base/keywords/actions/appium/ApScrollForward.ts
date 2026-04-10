import { Browser as AppiumBrowser } from 'webdriverio';

/**
 * ApClear - Clears the value of an input element
 * Removes all text content from the target element
 */
export class ApScrollForward {
    protected appiumDriver?: AppiumBrowser;

    /**
     * Executes clear action on the specified element
     * @param selector - Element selector (XPath or ID)
     * @throws Error if Appium driver is not initialized
     */
    async execute() {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        await this.appiumDriver.$("android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()");
        
    }
}
