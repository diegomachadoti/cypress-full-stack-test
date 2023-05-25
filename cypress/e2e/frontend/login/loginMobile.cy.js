import "../../../support/commands";
import "../../../support/config";

describe("Login", () => {
    beforeEach(() => {
        cy.viewport("iphone-xr");
    });

    const baseUrl = Cypress.config("baseUrl");
    const data = require("../../../fixtures/data.json");

    it("Realizar login em dispositivo móvel", () => {
        cy.visit(baseUrl);
        
        // Insira os comandos para preencher os campos de login e senha e clicar no botão de login
        cy.getEmail().type(data.email);
        cy.getPassword().type(data.senha);
        cy.getBotaoEntrar().click();

        // Verifica se o login foi bem-sucedido
        //cy.contains('Bem Vindo ' + data.name);
        cy.contains("Serverest Store");
    });
});
