import { Page } from '@playwright/test';

/**
 * PwHover - Hovers over an element
 * Simulates mouse hover interaction for tooltip or dropdown triggers
 */
export class PwHover {
    protected playwrightPage?: Page;

    /**
     * Executes hover action on the specified element
     * @param selector - CSS selector of the target element
     * @throws Error if Playwright page is not initialized
     */
    async execute(selector: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        await this.playwrightPage.hover(selector);
    }
}
