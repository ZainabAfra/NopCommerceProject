const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
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

  reporter: "cypress-mochawesome-reporter",
  reporter: "mochawesome",
  reporterOptions: {
      reporterDir: "cypress/reporter",
      reporterFilename: "report",
      overwrite: true,
      html: true,
      json: true,
      charts: true
  }
}
);



