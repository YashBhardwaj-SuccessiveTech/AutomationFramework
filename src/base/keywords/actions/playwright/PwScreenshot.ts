import { Page } from '@playwright/test';

/**
 * PwScreenshot - Captures a screenshot of the current page
 * Used for visual verification and test documentation
 */
export class PwScreenshot {
    protected playwrightPage?: Page;

    /**
     * Captures a screenshot and saves it to the specified path
     * @param path - File path where screenshot should be saved
     * @throws Error if Playwright page is not initialized
     */
    async execute(path: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        await this.playwrightPage.screenshot({ path });
    }
}
