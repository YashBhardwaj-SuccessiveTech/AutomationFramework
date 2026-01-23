import { Page, chromium, Browser, BrowserContext } from '@playwright/test';
import { Browser as AppiumBrowser } from 'webdriverio';
import { remote } from 'webdriverio';
import { PwGoto } from './keywords/actions/playwright/PwGoto';
import { PwPress } from './keywords/actions/playwright/PwPress';
import { PwWaitForSelector } from './keywords/actions/playwright/PwWaitForSelector';
import { PwSelectOption } from './keywords/actions/playwright/PwSelectOption';
import { PwHover } from './keywords/actions/playwright/PwHover';
import { PwFocus } from './keywords/actions/playwright/PwFocus';
import { PwBlur } from './keywords/actions/playwright/PwBlur';
import { PwCheck } from './keywords/actions/playwright/PwCheck';
import { PwUncheck } from './keywords/actions/playwright/PwUncheck';
import { PwScreenshot } from './keywords/actions/playwright/PwScreenshot';
import { ApGetText } from './keywords/actions/appium/ApGetText';
import { ApWaitForExist } from './keywords/actions/appium/ApWaitForExist';
import { ApClear } from './keywords/actions/appium/ApClear';
import { ApPressKey } from './keywords/actions/appium/ApPressKey';
import { ApPressKeyCode } from './keywords/actions/appium/ApPressKeyCode';
import { ApLongPress } from './keywords/actions/appium/ApLongPress';
import { ApTypeLikeHuman } from './keywords/actions/appium/ApTypeLikeHuman';
import { ApScroll } from './keywords/actions/appium/ApScroll';
import { ApSwipe } from './keywords/actions/appium/ApSwipe';
import { ApSwitchToWebView } from './keywords/actions/appium/ApSwitchToWebView';
import { Sleep } from './keywords/actions/shared/Sleep';
import { WaitForElement } from './keywords/actions/shared/WaitForElement';
import { ClickElement } from './keywords/actions/shared/ClickElement';
import { SetValue } from './keywords/actions/shared/SetValue';
import { PwVerifyText } from './keywords/verifications/pw/PwVerifyText';
import { PwVerifyVisible } from './keywords/verifications/pw/PwVerifyVisible';
import { PwVerifyEnabled } from './keywords/verifications/pw/PwVerifyEnabled';
import { ApVerifyText } from './keywords/verifications/ap/ApVerifyText';
import { ApVerifyDisplayed } from './keywords/verifications/ap/ApVerifyDisplayed';
import { ApVerifyEnabled } from './keywords/verifications/ap/ApVerifyEnabled';

export class BasicKeyword {
    protected playwrightBrowser?: Browser;
    protected playwrightContext?: BrowserContext;
    protected playwrightPage?: Page;
    protected appiumDriver?: AppiumBrowser;

    private pwGotoAction = new PwGoto();
    private pwPressAction = new PwPress();
    private pwWaitForSelectorAction = new PwWaitForSelector();
    private pwSelectOptionAction = new PwSelectOption();
    private pwHoverAction = new PwHover();
    private pwFocusAction = new PwFocus();
    private pwBlurAction = new PwBlur();
    private pwCheckAction = new PwCheck();
    private pwUncheckAction = new PwUncheck();
    private pwScreenshotAction = new PwScreenshot();
    private apGetTextAction = new ApGetText();
    private apWaitForExistAction = new ApWaitForExist();
    private apClearAction = new ApClear();
    private apPressKeyAction = new ApPressKey();
    private apPressKeyCodeAction = new ApPressKeyCode();
    private apLongPressAction = new ApLongPress();
    private apTypeLikeHumanAction = new ApTypeLikeHuman();
    private apScrollAction = new ApScroll();
    private apSwipeAction = new ApSwipe();
    private apSwitchToWebViewAction = new ApSwitchToWebView();
    private sleepAction = new Sleep();
    private waitForElementAction = new WaitForElement();
    private clickElementAction = new ClickElement();
    private setValueAction = new SetValue();
    private pwVerifyTextAction = new PwVerifyText();
    private pwVerifyVisibleAction = new PwVerifyVisible();
    private pwVerifyEnabledAction = new PwVerifyEnabled();
    private apVerifyTextAction = new ApVerifyText();
    private apVerifyDisplayedAction = new ApVerifyDisplayed();
    private apVerifyEnabledAction = new ApVerifyEnabled();

    constructor(playwrightPage?: Page, appiumDriver?: AppiumBrowser) {
        if (playwrightPage) this.playwrightPage = playwrightPage;
        if (appiumDriver) this.appiumDriver = appiumDriver;
    }

    // --- Playwright Initializer ---
    static async launchPlaywright(): Promise<{ browser: Browser; context: BrowserContext; page: Page }> {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();
        return { browser, context, page };
    }

    async setPlaywright(page: Page, context?: BrowserContext, browser?: Browser) {
        this.playwrightPage = page;
        if (context) this.playwrightContext = context;
        if (browser) this.playwrightBrowser = browser;
    }

    // --- Appium Initializer ---
    static async launchAppium(options: any): Promise<AppiumBrowser> {
        return await remote(options);
    }

    async setAppium(driver: AppiumBrowser) {
        this.appiumDriver = driver;
    }

    public getAppiumDriver(): AppiumBrowser | undefined {
        return this.appiumDriver;
    }

    // --- Playwright Actions ---
    async pwGoto(url: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        this.pwGotoAction['playwrightPage'] = this.playwrightPage;
        await this.pwGotoAction.execute(url);
    }

    async pwPress(selector: string, key: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        this.pwPressAction['playwrightPage'] = this.playwrightPage;
        await this.pwPressAction.execute(selector, key);
    }

    async pwWaitForSelector(selector: string, timeout = 5000) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        this.pwWaitForSelectorAction['playwrightPage'] = this.playwrightPage;
        await this.pwWaitForSelectorAction.execute(selector, timeout);
    }

    async pwSelectOption(selector: string, value: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        this.pwSelectOptionAction['playwrightPage'] = this.playwrightPage;
        await this.pwSelectOptionAction.execute(selector, value);
    }

    async pwHover(selector: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        this.pwHoverAction['playwrightPage'] = this.playwrightPage;
        await this.pwHoverAction.execute(selector);
    }

    async pwFocus(selector: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        this.pwFocusAction['playwrightPage'] = this.playwrightPage;
        await this.pwFocusAction.execute(selector);
    }

    async pwBlur(selector: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        this.pwBlurAction['playwrightPage'] = this.playwrightPage;
        await this.pwBlurAction.execute(selector);
    }

    async pwCheck(selector: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        this.pwCheckAction['playwrightPage'] = this.playwrightPage;
        await this.pwCheckAction.execute(selector);
    }

    async pwUncheck(selector: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        this.pwUncheckAction['playwrightPage'] = this.playwrightPage;
        await this.pwUncheckAction.execute(selector);
    }

    async pwScreenshot(path: string) {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        this.pwScreenshotAction['playwrightPage'] = this.playwrightPage;
        await this.pwScreenshotAction.execute(path);
    }

    // --- Appium Actions ---
    async apGetText(selector: string): Promise<string> {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        this.apGetTextAction['appiumDriver'] = this.appiumDriver;
        return await this.apGetTextAction.execute(selector);
    }

    async apWaitForExist(selector: string, timeout = 50000) {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        this.apWaitForExistAction['appiumDriver'] = this.appiumDriver;
        await this.apWaitForExistAction.execute(selector, timeout);
    }

    async apClear(selector: string) {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        this.apClearAction['appiumDriver'] = this.appiumDriver;
        await this.apClearAction.execute(selector);
    }

    async apPressKey(value: string) {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        this.apPressKeyAction['appiumDriver'] = this.appiumDriver;
        await this.apPressKeyAction.execute(value);
    }

    async apPressKeyCode(keyCode: number) {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        this.apPressKeyCodeAction['appiumDriver'] = this.appiumDriver;
        await this.apPressKeyCodeAction.execute(keyCode);
    }

    async apLongPress(selector: string, duration = 1000) {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        this.apLongPressAction['appiumDriver'] = this.appiumDriver;
        await this.apLongPressAction.execute(selector, duration);
    }

    async apTypeLikeHumanBySelector(selector: string, text: string) {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        this.apTypeLikeHumanAction['appiumDriver'] = this.appiumDriver;
        await this.apTypeLikeHumanAction.execute(selector, text);
    }

    async scroll(selector: string, direct: string, value: number) {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        this.apScrollAction['appiumDriver'] = this.appiumDriver;
        await this.apScrollAction.execute(selector, direct, value);
    }

    async apSwipe(startX: number, startY: number, endX: number, endY: number, duration = 1000) {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        this.apSwipeAction['appiumDriver'] = this.appiumDriver;
        await this.apSwipeAction.execute(startX, startY, endX, endY, duration);
    }

    async switchToWebView() {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        this.apSwitchToWebViewAction['appiumDriver'] = this.appiumDriver;
        await this.apSwitchToWebViewAction.execute();
    }

    // --- Shared Actions ---
    async sleep(ms: number): Promise<void> {
        await this.sleepAction.execute(ms);
    }

    async waitForElement(selector: string, iteration: number) {
        this.waitForElementAction['playwrightPage'] = this.playwrightPage;
        this.waitForElementAction['appiumDriver'] = this.appiumDriver;
        await this.waitForElementAction.execute(selector, iteration);
    }

    async clickElement(selector: string) {
        this.clickElementAction['playwrightPage'] = this.playwrightPage;
        this.clickElementAction['appiumDriver'] = this.appiumDriver;
        await this.clickElementAction.execute(selector);
    }

    async setValue(selector: string, value: string) {
        this.setValueAction['playwrightPage'] = this.playwrightPage;
        this.setValueAction['appiumDriver'] = this.appiumDriver;
        await this.setValueAction.execute(selector, value);
    }

    async typeInput(selector: string, value: string) {
        this.setValueAction['playwrightPage'] = this.playwrightPage;
        this.setValueAction['appiumDriver'] = this.appiumDriver;
        await this.setValueAction.execute(selector, value);
    }

    // --- Playwright Verifications ---
    async pwGetText(selector: string): Promise<string> {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        this.pwVerifyTextAction['playwrightPage'] = this.playwrightPage;
        return await this.playwrightPage.textContent(selector) || '';
    }

    async pwVerifyText(selector: string, expected: string): Promise<boolean> {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        this.pwVerifyTextAction['playwrightPage'] = this.playwrightPage;
        return await this.pwVerifyTextAction.execute(selector, expected);
    }

    async pwIsVisible(selector: string): Promise<boolean> {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        this.pwVerifyVisibleAction['playwrightPage'] = this.playwrightPage;
        return await this.pwVerifyVisibleAction.execute(selector);
    }

    async pwVerifyVisible(selector: string): Promise<boolean> {
        return await this.pwIsVisible(selector);
    }

    async pwIsEnabled(selector: string): Promise<boolean> {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        this.pwVerifyEnabledAction['playwrightPage'] = this.playwrightPage;
        return await this.pwVerifyEnabledAction.execute(selector);
    }

    async pwVerifyEnabled(selector: string): Promise<boolean> {
        return await this.pwIsEnabled(selector);
    }

    async pwIsChecked(selector: string): Promise<boolean> {
        if (!this.playwrightPage) throw new Error('Playwright page not initialized');
        return await this.playwrightPage.isChecked(selector);
    }

    async pwVerifyChecked(selector: string): Promise<boolean> {
        return await this.pwIsChecked(selector);
    }

    // --- Appium Verifications ---
    async apVerifyText(selector: string, expected: string): Promise<boolean> {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        this.apVerifyTextAction['appiumDriver'] = this.appiumDriver;
        return await this.apVerifyTextAction.execute(selector, expected);
    }

    async apIsDisplayed(selector: string): Promise<boolean> {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        this.apVerifyDisplayedAction['appiumDriver'] = this.appiumDriver;
        return await this.apVerifyDisplayedAction.execute(selector);
    }

    async apVerifyDisplayed(selector: string): Promise<boolean> {
        return await this.apIsDisplayed(selector);
    }

    async apIsEnabled(selector: string): Promise<boolean> {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        this.apVerifyEnabledAction['appiumDriver'] = this.appiumDriver;
        return await this.apVerifyEnabledAction.execute(selector);
    }

    async apVerifyEnabled(selector: string): Promise<boolean> {
        return await this.apIsEnabled(selector);
    }

    async apIsSelected(selector: string): Promise<boolean> {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        const el = await this.appiumDriver.$(selector);
        return await el.isSelected();
    }

    async apVerifySelected(selector: string): Promise<boolean> {
        return await this.apIsSelected(selector);
    }
}
