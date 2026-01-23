import { Page } from '@playwright/test';

/**
 * PwVerifyVisible - Verifies that an element is visible on web
 * Checks visibility state of the target element
 */
export class PwVerifyVisible {
    protected playwrightPage?: Page;

    /**
     * Checks if the specified element is visible
     * @param selector - CSS selector of the target element
     * @returns True if element is visible, false otherwise
     * @throws Error if Playwright page is not initialized
     */
    async execute(selector: string): Promise<boolean> {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        return await this.playwrightPage.isVisible(selector);
    }
}
