import { Browser as AppiumBrowser } from 'webdriverio';

/**
 * ApLongPress - Performs a long press action on an element
 * Simulates prolonged touch interaction on mobile devices
 */
export class ApLongPress {
    protected appiumDriver?: AppiumBrowser;

    /**
     * Executes long press action on the specified element
     * @param selector - Element selector (XPath or ID)
     * @param duration - Press duration in milliseconds (default: 1000ms)
     * @throws Error if Appium driver is not initialized
     */
    async execute(selector: string, duration = 1000) {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        const el = await this.appiumDriver.$(selector);
        await el.touchAction([
            { action: 'press', x: 0, y: 0, duration },
            { action: 'release' }
        ] as any);
    }
}
