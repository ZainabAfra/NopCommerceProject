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
    prodUrl : "https://www"
  
    
  },
});

