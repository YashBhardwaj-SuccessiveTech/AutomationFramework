import { Browser as AppiumBrowser } from 'webdriverio';

/**
 * ApTypeLikeHuman - Types text character by character with delays
 * Simulates human-like typing speed to avoid detection by input validators
 */
export class ApTypeLikeHuman {
    protected appiumDriver?: AppiumBrowser;

    /**
     * Types text into an element character by character with 10ms delay between each character
     * @param selector - Element selector (XPath or ID)
     * @param text - The text to type
     * @throws Error if Appium driver is not initialized
     */
    async execute(selector: string, text: string) {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        const element = await this.appiumDriver.$(selector);
        for (const char of text) {
            await element.addValue(char);
            await new Promise(res => setTimeout(res, 10));
        }
    }
}
