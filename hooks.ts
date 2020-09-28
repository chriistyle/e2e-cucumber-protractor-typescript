import { After, Before } from "cucumber";
import { browser } from "protractor";

Before(async function(){
    await browser.manage().window().maximize();  
})

After(async function(){
    var world = this;
    browser.takeScreenshot().then(function (buffer) {
      return world.attach(buffer, 'image/png');
    })
})
