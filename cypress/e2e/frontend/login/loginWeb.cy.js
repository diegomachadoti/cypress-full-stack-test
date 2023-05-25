import faker from 'faker';
import '../../../support/commands';
import '../../../support/config';


describe('Login', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080) // Define a visualização como um dispositivo móvel (iPhone 6)

    
    })

    const baseUrl = Cypress.config('baseUrl');
    const data = require('../../../fixtures/data.json');


    it('Realizar cadastro de novo usuário aleatório', () => {
      const name = faker.name.findName();
      const email = faker.internet.email();
      const pass = faker.internet.password();
      cy.visit(baseUrl)
      cy.getBotaoCadastrar().click()

      // Insira os comandos para preencher os campos de login e senha e clicar no botão de login
      cy.get('#nome').type(name)
      cy.getEmail().type(email)
      cy.getPassword().type(pass)
      cy.getBotaoCadastrar().click()

      cy.contains('Este email já está sendo usado').should('not.exist').then(() => {
        cy.contains('Cadastro realizado com sucesso');
        cy.contains('Serverest Store');
      });
       
  })

    it('Realizar cadastro de novo usuário de teste caso não exista', () => {
      cy.visit(baseUrl)
      cy.getBotaoCadastrar().click()

      // Insira os comandos para preencher os campos de login e senha e clicar no botão de login
      cy.get('#nome').type(data.name)
      cy.getEmail().type(data.email)
      cy.getPassword().type(data.senha)
      cy.getBotaoCadastrar().click()

      // cy.get('span:contains("Este email já está sendo usado")').should('exist').then(($element) => {
      //   if ($element) {
      //     debugger
      //     cy.log('Email já cadastrado');
      //   } else {
      //     cy.log('Email cadastrado');
      //   }
      // });
  
  })
    

    it('Realizar login na web', () => {
      cy.visit(baseUrl) 
  
      // Insira os comandos para preencher os campos de login e senha e clicar no botão de login
      cy.getEmail().type(data.email)
      cy.getPassword().type(data.senha)
      cy.getBotaoEntrar().click()
  
      // Verifica se o login foi bem-sucedido
      cy.contains('Serverest Store');
    
  })

    it('Tentativa de cadastro de um usuário existente', () => {
      cy.visit(baseUrl)
      cy.getBotaoCadastrar().click()
      cy.get('#nome').type(data.name)
      cy.getEmail().type(data.email)
      cy.getPassword().type(data.senha)
      cy.getBotaoCadastrar().click()

      cy.contains('Este email já está sendo usado').should(($element) => {
        expect($element.text().trim()).to.equal('Este email já está sendo usado');
      });

  })


})
  