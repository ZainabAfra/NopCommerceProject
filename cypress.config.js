const { defineConfig } = require("cypress");
//const { random } = require("cypress/types/lodash");

module.exports = defineConfig({
  reporter: "cypress-mochwesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
      randomEmail = Math.random().toString(36).substring(2,15)+"gmail.com"
    },

    //"env":
    qaurl : "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F",
    stagingUrl : "https://www.",
    prodUrl : "https://www",
   
  
    
  },

  
},
{
  chromeWebSecurity: false,
  defaultCommandTimeout : 10000,
  execTimeout : 60000,
  pageLoadTimeout: 15000,
  responseTimeout: 15000,

  //"reporter": "cypress-mochawesome-reporter",
  reporter: "mochawesome",
  reporterOptions: {
      reporDir: "cypress/reporter",
      reportFilename: "report",
      overwrite: true,
      html: true,
      json: true,
      charts: true
  }
}
);



