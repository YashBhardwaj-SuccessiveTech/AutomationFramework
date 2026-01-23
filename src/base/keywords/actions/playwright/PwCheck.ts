import { Page } from '@playwright/test';

/**
 * PwCheck - Checks a checkbox or radio button
 * Ensures the element is checked/selected
 */
export class PwCheck {
    protected playwrightPage?: Page;

    /**
     * Executes check action on the specified element
     * @param selector - CSS selector of the target checkbox/radio element
     * @throws Error if Playwright page is not initialized
     */
    async execute(selector: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        await this.playwrightPage.check(selector);
    }
}
