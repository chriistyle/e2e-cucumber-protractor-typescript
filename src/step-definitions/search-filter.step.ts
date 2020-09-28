import { browser } from "protractor";
import { SearchPage } from "../page/search-page.pom";

const { expect } = require('chai');
const { Given, When, Then} = require('cucumber');

Given("the user is at the Agent Image Search page", {timeout: 90 * 1000}, async function(){
    await browser.waitForAngularEnabled(false);
    await browser.get(browser.baseUrl);
    
    let searchPage = new SearchPage();
    await searchPage.get();
});

When("the user opens the Sort by dropdown", async function(){
    let page = new SearchPage();
    await page.openSort();
});

When("the user selects {string}", async function(choice: string){
    let page = new SearchPage();
    await page.sortBy(choice);
});

Then("the properties on the page must be ordered from most expensive to least expensive", {timeout: 90 * 1000}, async function(){
    let page = new SearchPage();
    await page.isPriceDecreasing();
    expect(await page.isPriceDecreasing()).to.be.true;
});

Then("the properties on the page must be ordered from least expensive to most expensive", async function(){
    let page = new SearchPage();
    expect(await page.isPriceIncreasing()).to.be.true;
})

Then("the properties on the page must be alphabetized by .prop-title", async function(){
    let page = new SearchPage();
    expect(await page.isPropertyAZ()).to.be.true;
});

Then("the properties on the page must be ordeed from Z-A by .prop-title", async function(){
    let page = new SearchPage();
    expect(await page.isPropertyZA()).to.be.true
});

Then("the clientWidth of the property images must be exactly 300px", async function(){
    let page = new SearchPage();
    await page.isImageExactly300px();
    expect(await page.isImageExactly300px()).to.be.false;
})

