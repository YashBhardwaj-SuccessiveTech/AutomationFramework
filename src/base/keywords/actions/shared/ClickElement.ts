import { Page } from '@playwright/test';
import { Browser as AppiumBrowser } from 'webdriverio';

/**
 * ClickElement - Clicks an element on either web or mobile
 * Handles both Playwright and Appium drivers with element waiting and visual feedback
 */
export class ClickElement {
    protected playwrightPage?: Page;
    protected appiumDriver?: AppiumBrowser;

    /**
     * Executes click action on the specified element
     * Supports both Playwright and Appium drivers simultaneously
     * @param selector - CSS selector for Playwright or XPath/ID for Appium
     */
    async execute(selector: string) {
        if (this.playwrightPage !== undefined) {
            await this.waitForElement(selector, 60);
            await this.drawBorder(selector);
            await this.playwrightPage.click(selector);
            await this.playwrightPage.waitForTimeout(2000);
        }

        if (this.appiumDriver !== undefined) {
            await this.waitForElement(selector, 60);
            await this.appiumDriver.$(selector).click();
        }
    }

    /**
     * Waits for element to become visible
     * @param selector - Element selector
     * @param iteration - Number of iterations to wait
     */
    private async waitForElement(selector: string, iteration: number) {
        if (this.playwrightPage !== undefined) {
            for (let i = 0; i < iteration; i++) {
                if (await this.playwrightPage.isVisible(selector) === true) {
                    break;
                }
                else {
                    await this.playwrightPage.waitForTimeout(500);
                }
            }
        }

        if (this.appiumDriver !== undefined) {
            for (let i = 0; i < 100; i++) {
                if (await this.appiumDriver.$(selector).isDisplayed() === true) {
                    break;
                }
                else {
                    await this.appiumDriver.pause(500);
                }
            }
        }
    }

    private async drawBorder(selector: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        if (selector.startsWith('//') || selector.startsWith('(')) {
            const elHandle = await this.playwrightPage.$(selector);
            if (elHandle) {
                await elHandle.evaluate(async (el: HTMLElement) => {
                    el.style.outline = '2px solid green';
                    await new Promise(res => setTimeout(res, 1000));
                    el.style.outline = '';
                });
            }
        } else {
            await this.playwrightPage.evaluate(async (sel) => {
                const el = document.querySelector(sel);
                if (el) {
                    (el as HTMLElement).style.outline = '20px solid green';
                    await new Promise(res => setTimeout(res, 1000));
                    (el as HTMLElement).style.outline = '';
                }
            }, selector);
        }
    }
}
