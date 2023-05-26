import "../../../support/commands";
import "../../../support/config";

describe("Lista de Tarefas", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
    });

    const baseUrl = Cypress.config("baseUrlWeb");
    const data = require("../../../fixtures/data.json");

    it.only("Validar cabeçalhos da lista de tarefas", () => {
        cy.visit(baseUrl);
        cy.getHome().click();
        cy.contains("Tarefa");
        cy.contains("Criada/atualizado em");
        cy.contains("Status");
        cy.contains("Ações");
    });
});
