import { remote } from 'webdriverio';

export class MobileDriver {
    
    private static driver: WebdriverIO.Browser;    
    
    static async init() {
        const maxRetries = 3;
        let lastError;

        for (let i = 0; i < maxRetries; i++) {
            try {
                this.driver = await remote({
                    protocol: 'http',
                    hostname: '127.0.0.1',
                    port: 4723,
                    path: '/',
                    logLevel: 'debug',
                    waitforTimeout: 60000,
                    connectionRetryCount: 2,
                    connectionRetryTimeout: 60000,
                    capabilities: {
                        platformName: "Android",
                        // "appium:platformVersion": "16",
                        "appium:deviceName": "Android Device",
                        "appium:app": "/home/yash.bhardwaj/Downloads/142.apk",
                        // "appium:appPackage": "com.vipplay.app.stg",
                        "appium:appWaitActivity": "*",
                        "appium:automationName": "UiAutomator2",
                        'appium:noReset': true,
                    }
                });
                // If we get here, the connection was successful
                if (this.driver && this.driver.startRecordingScreen) {
                    await this.driver.startRecordingScreen();
                }
                return;
            } catch (error) {
                lastError = error;
                console.log(`Attempt ${i + 1} failed, retrying...`);
                // Wait for 5 seconds before retrying
                await new Promise(resolve => setTimeout(resolve, 5000));
            }
        }
        
        throw new Error(`Failed to initialize driver after ${maxRetries} attempts. Last error: ${lastError instanceof Error ? lastError.message : String(lastError)}`);
    }

    static getDriver(): WebdriverIO.Browser {
        return this.driver;
    }    
    
    static async close() {
        if (this.driver) {
            try {
                // Stop recording BEFORE deleting session
                if (this.driver.stopRecordingScreen) {
                    try {
                        const video = await this.driver.stopRecordingScreen();
                        // Save video to file (base64)
                        const fs = require('fs');
                        const path = require('path');
                        const videoPath = path.join(process.cwd(), 'videos', `mobile_${Date.now()}.mp4`);
                        fs.mkdirSync(path.dirname(videoPath), { recursive: true });
                        fs.writeFileSync(videoPath, Buffer.from(video, 'base64'));
                        console.log(`Video saved to: ${videoPath}`);
                    } catch (recordError: any) {
                        console.warn('Could not stop recording:', recordError.message);
                    }
                }
                // Delete session AFTER stopping recording
                await this.driver.deleteSession();
                console.log("ab aagya session delete krne");
                // Clear the driver reference
                this.driver = undefined as any;
            } catch (error: any) {
                console.error('Error closing session:', error.message);
            }
        }
    }
}
