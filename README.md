# End-to-End Testing
E2E test using Cucumber (BDD), Protractor Framework & Typescript

## To Get Started
 ###  Pre-requisites: 
 1) Make sure you have NPM installed.

    To check: ```node -v & npm -v```

    To download: 

    Windows: Go to [nodeJS](https://nodejs.org/en/)

    Linux: ```sudo apt install nodejs```
    
    
    My Node version | My NPM version
    --------------- | -------------
    v14.9.0 | 6.14.8

 2) Download JDK (Java Development Kit) for webdriver-manager purposes
    
    To check: ```java -version```

    My version | 
    -------------|
    1.8.0_261|

 3) Download webdriver-manager

    To check: ```webdriver-manager version```  or ```npx webdriver-manager status``` 

    To download: 

    Windows & Linux: ```npm install -g webdriver-manager``` 
    
      My version | 
    -------------|
    webdriver-manager 12.1.7|

 4) Download Google-chrome browser and remember the version of it (will be using on selenium server).
 
    To check: copy and paste this url ```chrome://settings/help```
 

## Things to do before running the test
1. Clone my repository at your git directory
   > ```git clone https://github.com/chriistyle/E2E-Test.git```
2. Install all dependencies that can be found at package.json (dependencies & devDependencies)
   > ```npm install``` or ```npm i```
3. Start Selenium-server **BUT EXPLICITLY** set the google-chrome version into the webdriver-manager command
   - Go to package.json > ```scripts``` > ```update```  
   - replace the flag into your current google-chrome version. 

     For example:

     Current Google-chrome version -> 84.0.41473.15

     Then, webdriver-manager update --versions.chrome=84.0.41473.15
     same procedure for the ```webdriver-manager start``` -> ``` webdriver-manager start --versions.chrome=84.0.41473.15 ```

## How to run the test
1. Open search.feature
2. Insert @local tag
   > To run all the scenarios, insert it at the top level

   > To run specific scenarios, insert at the line before the Scenario
3. Do ```npm run test-local``` to run the test

## FAQS
1. After the test, is there a summarized report of the test?
   > Yes! you can find it at ```report/html/``` folder
2. Why do we need to explicitly set the google-chrome version at the webdriver-manager start & update command? 
   > Your chromedriver must be compatible with your current google-chrome version. Compatibility issues between Chromedriver & Chrome Browser
    happens most of the time if your chrome browser's auto-update is set to true. So it is also recommended to turn it off, if you don't want to
    set it explicitly

## Still having issues? 
If you still having issues with dependencies, kindly delete node_modules/ folder then "npm install" again
