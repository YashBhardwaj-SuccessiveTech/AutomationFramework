import { Page } from '@playwright/test';

/**
 * PwUncheck - Unchecks a checkbox or radio button
 * Ensures the element is unchecked/deselected
 */
export class PwUncheck {
    protected playwrightPage?: Page;

    /**
     * Executes uncheck action on the specified element
     * @param selector - CSS selector of the target checkbox/radio element
     * @throws Error if Playwright page is not initialized
     */
    async execute(selector: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        await this.playwrightPage.uncheck(selector);
    }
}
