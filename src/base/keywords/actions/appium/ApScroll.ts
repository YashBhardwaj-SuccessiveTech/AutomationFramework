import { Browser as AppiumBrowser } from 'webdriverio';

/**
 * ApScroll - Scrolls the page/view to locate an element
 * Performs multiple scroll gestures until the target element is visible
 */
export class ApScroll {
    protected appiumDriver?: AppiumBrowser;

    /**
     * Executes scroll action to locate and display the specified element
     * @param selector - Element selector (XPath or ID) to scroll to
     * @param direct - Scroll direction ('up', 'down', 'left', 'right')
     * @param value - Scroll percentage/speed value
     * @throws Error if Appium driver is not initialized
     */
    async execute(selector: string, direct: string, value: number) {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        const windowRect = await this.appiumDriver.getWindowRect();

        for (let i = 0; i < 10; i++) {
            if (await this.appiumDriver.$(selector).isDisplayed() === true) {
                await this.appiumDriver.execute('mobile: swipeGesture', {
                    left: windowRect.width * 0.10,
                    top: windowRect.height * 0.10,
                    width: windowRect.width * 0.80,
                    height: windowRect.height * 0.40,
                    direction: direct,
                    percent: 0.2,
                    speed: 50
                });
                break;
            }
            else {
                await this.appiumDriver.execute('mobile: swipeGesture', {
                    left: windowRect.width * 0.10,
                    top: windowRect.height * 0.10,
                    width: windowRect.width * 0.80,
                    height: windowRect.height * 0.80,
                    direction: direct,
                    percent: value,
                    speed: 800
                });
                await this.appiumDriver.pause(5000);
            }
        }
    }
}
