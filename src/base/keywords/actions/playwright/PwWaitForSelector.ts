import { Page } from '@playwright/test';

/**
 * PwWaitForSelector - Waits for an element to appear in the DOM
 * Essential for synchronizing tests with dynamic content loading
 */
export class PwWaitForSelector {
    protected playwrightPage?: Page;

    /**
     * Waits for the specified element to be visible in the DOM
     * @param selector - CSS selector of the element to wait for
     * @param timeout - Maximum wait time in milliseconds (default: 5000ms)
     * @throws Error if Playwright page is not initialized or element not found within timeout
     */
    async execute(selector: string, timeout = 5000) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        await this.playwrightPage.waitForSelector(selector, { timeout });
    }
}
