import { Browser as AppiumBrowser } from 'webdriverio';

/**
 * ApPressKeyCode - Presses a key by its key code
 * Sends raw key codes to mobile device (e.g., back button, home button)
 */
export class ApPressKeyCode {
    protected appiumDriver?: AppiumBrowser;

    /**
     * Executes key code press action
     * @param keyCode - The key code to press (e.g., 4 for back, 3 for home)
     * @throws Error if Appium driver is not initialized
     */
    async execute(keyCode: number) {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        // @ts-ignore
        await (this.appiumDriver as any).pressKeyCode(keyCode);
    }
}
