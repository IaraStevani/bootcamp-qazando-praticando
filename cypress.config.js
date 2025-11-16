const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '15qp1h',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts:true,
      reportTitle: 'Bootcamp QAzando - Praticando',
      reportPageTitle: 'Bootcamp QAzando - Praticando',
    },
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
