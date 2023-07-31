const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight : 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*'],
    chromeWebSecurity: false,
    failOnStatusCode: false
  },
});
