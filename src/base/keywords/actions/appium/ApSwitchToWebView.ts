import { Browser as AppiumBrowser } from 'webdriverio';

/**
 * ApSwitchToWebView - Switches app context from native to WebView
 * Necessary for testing hybrid apps with embedded web content
 */
export class ApSwitchToWebView {
    protected appiumDriver?: AppiumBrowser;

    /**
     * Switches the Appium context from native app to WebView
     * Retries up to 10 times waiting for WebView context to appear
     * @throws Error if Appium driver is not initialized or WebView not found
     */
    async execute() {
        if (!this.appiumDriver) throw new Error('Appium driver not initialized');
        try {
            const currentContext = await this.appiumDriver.getContext();
            console.log("**************************** Current Context ****************************************");
            console.log(`Current Context: ${currentContext}`);
            console.log("*************************************************************************************");

            let contexts: string[] = [];
            let webviewContext: string | undefined;

            for (let i = 0; i < 10; i++) {
                const rawContexts = await this.appiumDriver.getContexts();
                if (Array.isArray(rawContexts)) {
                    contexts = rawContexts.map(ctx => typeof ctx === 'string' ? ctx : (ctx.id || ''));
                } else if (typeof rawContexts === 'object' && rawContexts !== null && 'contexts' in rawContexts) {
                    // @ts-ignore
                    contexts = (rawContexts.contexts as any[]).map(ctx => typeof ctx === 'string' ? ctx : (ctx.id || ''));
                } else {
                    contexts = [];
                }
                console.log(`Available Contexts: ${contexts.join(', ')}`);

                webviewContext = contexts.find(ctx => ctx.includes('WEBVIEW'));
                if (webviewContext) {
                    console.log("**************************** First Webview Context Found ****************************************");
                    console.log(`First Webview Context: ${webviewContext}`);
                    console.log("*************************************************************************************");
                    break;
                }

                await this.appiumDriver.pause(1000);
            }

            if (!webviewContext) {
                throw new Error("WEBVIEW context not found.");
            }

            console.log("****************************** Switching to Webview Context ****************************************");
            console.log(`Switching to: ${webviewContext}`);
            console.log("*************************************************************************************");
            await this.appiumDriver.switchContext(webviewContext);
        } catch (error) {
            console.error(`Error while switching context: ${(error as Error).message}`);
            throw error;
        }
    }
}
