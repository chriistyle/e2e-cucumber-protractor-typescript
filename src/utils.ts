export class utils{

    public async removeSymbols(elements: Array<string>, symbols:string){
        let prices = [];
        for(let price of elements){ 
            let mod = price.replace(/([$,])/g,"");
            prices.push(mod);
        }
    }
}