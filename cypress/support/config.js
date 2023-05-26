// Configuração Blobais de URLs
// cypress/support/config.js

Cypress.config({
    baseUrl: "https://front.serverest.dev",
    apiUrl: "https://serverest.dev/",
    apiUrlApi: "http://localhost:3333",
    baseUrlWeb: "http://127.0.0.1:5500/frontend/index.html",
    wait: 1000,
});
