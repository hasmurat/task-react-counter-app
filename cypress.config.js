const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
      "charts": true,
      "reportFilename": "[name]-report",
      "reportDir": "cypress/reports",
      "overwrite": false,
      "html": true,
      "json": false
   },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*.cy.js'
  },
  watchForFileChanges: false,
});
