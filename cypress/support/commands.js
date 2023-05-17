// ************************************************** **********
// Aqui tem os metodos em comum de elementos comuns utilizados nos testes
// Você pode ler mais aqui:
// https://on.cypress.io/configuration
// ************************************************ ***********

Cypress.Commands.add('getBotaoEntrar', () => {
    return cy.get('[data-testid="entrar"]');
  });

  Cypress.Commands.add('getBotaoCadastrar', () => {
    return cy.get('[data-testid="cadastrar"]');
  });
  
Cypress.Commands.add('getTituloBemVindo', () => {
    return cy.get('h1');
  });

  Cypress.Commands.add('getEmail', () => {
    return cy.get('#email');
  });

  Cypress.Commands.add('getPassword', () => {
    return cy.get('#password');
  });

  