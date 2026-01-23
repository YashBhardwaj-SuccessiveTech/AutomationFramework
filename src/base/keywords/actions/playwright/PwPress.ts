import { Page } from '@playwright/test';

/**
 * PwPress - Presses a key on an element
 * Simulates keyboard key presses (Enter, Tab, ArrowDown, etc.)
 */
export class PwPress {
    protected playwrightPage?: Page;

    /**
     * Executes key press action on the specified element
     * @param selector - CSS selector of the target element
     * @param key - The key to press (e.g., 'Enter', 'Tab', 'ArrowUp')
     * @throws Error if Playwright page is not initialized
     */
    async execute(selector: string, key: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        await this.playwrightPage.press(selector, key);
    }
}
