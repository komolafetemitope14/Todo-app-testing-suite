const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js', // default
    baseUrl: 'http://localhost:3000', // optional
  },
})

