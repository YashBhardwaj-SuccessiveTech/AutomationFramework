import { Browser as AppiumBrowser } from 'webdriverio';

/**
 * ApPressKey - Types text input on a mobile device
 * Uses mobile shell command to send text to the device
 */
export class ApPressKey {
    protected appiumDriver?: AppiumBrowser;

    /**
     * Executes key press action to input text
     * @param value - The text value to input
     * @throws Error if Appium driver is not initialized
     */
    async execute(value: string) {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        // @ts-ignore
        await (this.appiumDriver as any).execute('mobile: shell', {
            command: 'input',
            args: ['text', value],
        });
    }
}
