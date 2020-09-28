var reporter = require('cucumber-html-reporter');

exports.config = {    
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    baseUrl: 'https://ap-empire.agentimage.com/properties/',
    framework: 'custom', //Type of Framework used 
    SELENIUM_PROMISE_MANAGER: false,

    // path relative to the current config file
    capabilities: {
        "browserName": 'chrome',
    },
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['features/*.feature'], //Name of the Feature file or spec file

    cucumberOpts: {
        // require step definitions
        require: [
          'src/step-definitions/*.step.ts', 'hooks.ts' // accepts a glob
        ],
        tags: ["@local", "~@ignore"],
        keepAlive: false,
        format: "json:report/json/cucumber_reports.json"
      },
      
      // This will ensure that the browser restarts on each scenario run
      restartBrowserBetweenTests: true,

      onPrepare: function () {
        browser.manage().window().maximize(); // maximize the browser before executing the feature files

        //Solution to use "cannot use import outside of the module"
        require('ts-node').register({ 
        project: require('path').join(__dirname, 'tsconfig.json'), // Relative path of tsconfig.json file 
      }); 
    },

    onComplete: function(){
      var options = {
        theme: 'bootstrap',
        jsonFile: 'report/json/cucumber_reports.json',
        output: 'report/html/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        screenshotsDirectory: 'report/screenshots',
        storeScreenshots: true,
        metadata: {
          "App Version":"0.3.2",
          "Test Environment": "STAGING",
          "Browser": "Chrome  54.0.2840.98",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Remote"
        }
      };
      reporter.generate(options);
    }
  }