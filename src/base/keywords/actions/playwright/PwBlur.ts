import { Page } from '@playwright/test';

/**
 * PwBlur - Removes focus from an element
 * Used to trigger blur events on web elements
 */
export class PwBlur {
    protected playwrightPage?: Page;

    /**
     * Executes blur action on the specified element
     * @param selector - CSS selector of the target element
     * @throws Error if Playwright page is not initialized
     */
    async execute(selector: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        await this.playwrightPage.locator(selector).blur();
    }
}
