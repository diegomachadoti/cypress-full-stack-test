// cypress/support/config.js
Cypress.config({
    baseUrl: 'https://front.serverest.dev',
    env: {
      apiUrl: 'https://serverest.dev/',
    },
  });
  

//   describe('Exemplo de teste', () => {
//     it('Teste utilizando configurações', () => {
//       const baseUrl = Cypress.config('baseUrl');
//       const apiUrl = Cypress.config('env').apiUrl;
  
//       // Utilize as configurações conforme necessário
//       cy.visit(baseUrl);
//       cy.request(apiUrl).then((response) => {
//         // Manipule a resposta da solicitação
//       });
//     });
//   });
  