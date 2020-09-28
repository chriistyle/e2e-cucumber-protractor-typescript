import { browser, by, element, ElementArrayFinder, ElementFinder, ExpectedConditions as EC } from "protractor";

export class SearchPage {
    private el: ElementFinder;
    private dropdownEl: ElementFinder; 

    private content: ElementFinder; 
    private propertyPrice: ElementArrayFinder;
    private propertyTitle: ElementArrayFinder;
    private propertyImage: ElementArrayFinder;
    
    constructor(){
        this.el = element(by.css(".user-navigated-from-a-page-on-the-site"));
        this.dropdownEl = this.el.element(by.css(".sort-sel")); 
        
        this.content = this.el.$("#content");
        this.propertyPrice = this.content.all(by.css("p[class='list-price'] span"));
        this.propertyTitle = this.content.$$(".prop-det >.prop-title");
        this.propertyImage = this.content.$$(".list img.main-img");
    }

    public async get(){
        await browser.wait(EC.visibilityOf(this.el));
    }
    
    public async openSort(){
        await browser.wait(EC.visibilityOf(this.dropdownEl));
        await this.dropdownEl.click();
    }

    public async sortBy(choice: string){
        await browser.wait(EC.visibilityOf(this.dropdownEl));
        this.dropdownEl.element(by.cssContainingText("option",choice)).click();
        await browser.sleep(4000);
    }

    async isDecreasing(prices: Array<string>): Promise<boolean>{
        for (let i = 0; i < prices.length; i++) {
            
            let lastElement = prices[prices.length-1]            
            if(!lastElement) {
                if(prices[i] < prices[i+1]) {    
                    return false
                }
            }
        }
        return true
    }

    async isIncreasing(prices: Array<any>): Promise<boolean>{
        for (let i = 0; i < prices.length; i++) {
            
            let lastElement = prices[prices.length-1]            
            if(!lastElement) {
                if(prices[i] > prices[i+1]) {    
                    return false
                }
            }
        }
        return true
    }

    public async isPriceDecreasing(): Promise<boolean>{
        let rawPrices = await this.propertyPrice.getText();
        
        let prices = [];
        for(let price of rawPrices){ 
            let mod = price.replace(/([$,])/g,"");
            prices.push(mod);
        }

        /* Remove last element of the array 
        (which element -> a sold property but still display on the results)
        */
        prices.pop();

        return this.isDecreasing(prices)
    }

    public async isPriceIncreasing(): Promise<boolean>{
        let rawPrices = await this.propertyPrice.getText();
        
        let prices = [];
        for(let price of rawPrices){ 
            let mod = price.replace(/([$,])/g,"");
            prices.push(mod);
        }

        /* Remove last element of the array 
        (which element -> a sold property but still display on the results)
        */
       prices.pop();

       return await this.isIncreasing(prices);
    }

    public async isPropertyAZ(): Promise<boolean>{
        let title = await this.propertyTitle.getText();
        let titleArray = [title];
        return await this.isIncreasing(titleArray);
    }

    public async isPropertyZA(): Promise<boolean>{
        let title = await this.propertyTitle.getText();
        let titleArray = [title];
        return await this.isDecreasing(titleArray);
    }

    public async isImageExactly300px(): Promise<boolean> {
        let imageWidth = await this.propertyImage.getAttribute("width")

        for(let eachImageWidth of imageWidth){
            if(eachImageWidth != "300")
            return false;
        }
        return true;
    }
}
