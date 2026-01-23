import { Browser as AppiumBrowser } from 'webdriverio';

/**
 * ApSwipe - Performs a swipe gesture between two points
 * Simulates finger swipe interaction on mobile devices
 */
export class ApSwipe {
    protected appiumDriver?: AppiumBrowser;

    /**
     * Executes swipe action from one point to another
     * @param startX - Starting X coordinate
     * @param startY - Starting Y coordinate
     * @param endX - Ending X coordinate
     * @param endY - Ending Y coordinate
     * @param duration - Swipe duration in milliseconds (default: 1000ms)
     * @throws Error if Appium driver is not initialized
     */
    async execute(startX: number, startY: number, endX: number, endY: number, duration = 1000) {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        // @ts-ignore
        await (this.appiumDriver as any).touchPerform([
            { action: 'press', options: { x: startX, y: startY } },
            { action: 'wait', options: { ms: duration } },
            { action: 'moveTo', options: { x: endX, y: endY } },
            { action: 'release' }
        ]);
    }
}
