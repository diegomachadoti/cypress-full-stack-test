import '../support/commands';
import '../support/config';

describe('Login', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080) // Define a visualização como um dispositivo móvel (iPhone 6)
    })

    const baseUrl = Cypress.config('baseUrl');
    const data = require('../fixtures/data.json');

    it('Realizar login em dispositivo móvel', () => {
      cy.visit(baseUrl) 

      const browsers = Cypress.env('browsers');
  
      browsers.forEach((browser) => {
        cy.log(`Running test in ${browser}`);
  
        // Insira os comandos para alternar para a visualização móvel
      cy.viewport('iphone-xr')
  
      // Insira os comandos para preencher os campos de login e senha e clicar no botão de login
      cy.getEmail().type(data.email)
      cy.getPassword().type(data.senha)
      cy.getBotaoEntrar().click()
  
      // Verifica se o login foi bem-sucedido
      cy.contains('Bem Vindo ' + data.name);
    });


  })

})
  