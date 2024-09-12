const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/**/*.cy.js', // Change the path to your new folder
    chromeWebSecurity: false, // Disable Chrome web security
  },
});
