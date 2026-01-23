import { Page } from '@playwright/test';

/**
 * PwFocus - Sets focus on an element
 * Triggers focus events on web elements
 */
export class PwFocus {
    protected playwrightPage?: Page;

    /**
     * Executes focus action on the specified element
     * @param selector - CSS selector of the target element
     * @throws Error if Playwright page is not initialized
     */
    async execute(selector: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        await this.playwrightPage.focus(selector);
    }
}
