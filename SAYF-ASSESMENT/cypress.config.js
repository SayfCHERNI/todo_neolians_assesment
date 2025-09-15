const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Enablon Todo E2E',
    embeddedScreenshots: true,
    inlineAssets: true
  },
  e2e: {
    baseUrl: process.env.CY_BASE_URL || 'https://todomvc.com/examples/react',
    specPattern: [
      'cypress/e2e/**/*.cy.js',      
      'cypress/e2e/features/*.feature' // nouveaux tests BDD Gherkin
    ],
    video: false,
    setupNodeEvents: async (on, config) => {
      require('cypress-mochawesome-reporter/plugin')(on);

      // plugin Cucumber / Gherkin
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createBundler());

      return config;
    }
  }
});
