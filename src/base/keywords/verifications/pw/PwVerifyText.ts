import { Page } from '@playwright/test';

/**
 * PwVerifyText - Verifies the text content of an element on web
 * Compares actual element text with expected text
 */
export class PwVerifyText {
    protected playwrightPage?: Page;

    /**
     * Verifies that the element's text matches the expected value
     * Trims whitespace from both actual and expected text before comparison
     * @param selector - CSS selector of the target element
     * @param expected - The expected text value
     * @returns True if text matches, false otherwise
     * @throws Error if Playwright page is not initialized
     */
    async execute(selector: string, expected: string): Promise<boolean> {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        const actual = await this.playwrightPage.textContent(selector) || '';
        return actual.trim() === expected.trim();
    }
}
