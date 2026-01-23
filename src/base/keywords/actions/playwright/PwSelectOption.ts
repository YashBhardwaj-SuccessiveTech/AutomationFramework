import { Page } from '@playwright/test';

/**
 * PwSelectOption - Selects an option from a dropdown/select element
 * Handles HTML select elements and select-like components
 */
export class PwSelectOption {
    protected playwrightPage?: Page;

    /**
     * Executes select action on the specified dropdown element
     * @param selector - CSS selector of the target select element
     * @param value - The value or label of the option to select
     * @throws Error if Playwright page is not initialized
     */
    async execute(selector: string, value: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        await this.playwrightPage.selectOption(selector, value);
    }
}
