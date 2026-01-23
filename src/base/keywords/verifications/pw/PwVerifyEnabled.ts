import { Page } from '@playwright/test';

/**
 * PwVerifyEnabled - Verifies that an element is enabled/clickable on web
 * Checks if the element is in an enabled state
 */
export class PwVerifyEnabled {
    protected playwrightPage?: Page;

    /**
     * Checks if the specified element is enabled
     * @param selector - CSS selector of the target element
     * @returns True if element is enabled, false otherwise
     * @throws Error if Playwright page is not initialized
     */
    async execute(selector: string): Promise<boolean> {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        return await this.playwrightPage.isEnabled(selector);
    }
}
