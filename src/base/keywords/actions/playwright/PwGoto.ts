import { Page } from '@playwright/test';

/**
 * PwGoto - Navigates to a specified URL
 * Main entry point for loading web pages in tests
 */
export class PwGoto {
    protected playwrightPage?: Page;

    /**
     * Navigates to the specified URL
     * @param url - The full URL to navigate to
     * @throws Error if Playwright page is not initialized
     */
    async execute(url: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        await this.playwrightPage.goto(url);
    }
}
