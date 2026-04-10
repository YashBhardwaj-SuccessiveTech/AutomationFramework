import { Browser as AppiumBrowser } from "webdriverio";

export class AddValue{

    protected appiumDriver?: AppiumBrowser;


    async execute(selector: string, value: string){
        if(this.appiumDriver!== undefined){
            await this.waitForElement(selector, 60);
            const el = await this.appiumDriver.$(selector);
            await el.click();
            await el.addValue(value);
        }else{
            console.log("appiumDriver not available so code break in share folder");
        }
    }

    private async waitForElement(selector: string, iteration: number){
        if(this.appiumDriver !== undefined){
            for(let i=0;i<100;i++){
                if(await this.appiumDriver.$(selector).isDisplayed() == true){
                    break;
                }else{
                    await this.appiumDriver.pause(500);
                }
            }
        }
    }
}
