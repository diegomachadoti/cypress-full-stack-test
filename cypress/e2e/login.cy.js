describe('Login', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080) // Define a visualização como um dispositivo móvel (iPhone 6)
    })
  


    it('Realizar login na web', () => {
      cy.visit('https://front.serverest.dev/') // Substitua pela URL do seu site
  
      // Insira os comandos para preencher os campos de login e senha e clicar no botão de login
      cy.get('#email').type('diego.machado@tqi.com.br')
      cy.get('#password').type('diegomachadoti')
      cy.get('[data-testid="entrar"]').click()
  
      // Verifica se o login foi bem-sucedido
      cy.contains('Bem Vindo diegomachadoti');
    })
  



    it('Realizar login em dispositivo móvel', () => {
      cy.visit('https://front.serverest.dev/') // Substitua pela URL do seu site
  
      // Insira os comandos para alternar para a visualização móvel
      cy.viewport('iphone-xr')
  
      // Insira os comandos para preencher os campos de login e senha e clicar no botão de login
      cy.get('#email').type('diego.machado@tqi.com.br')
      cy.get('#password').type('diegomachadoti')
      cy.get('[data-testid="entrar"]').click()
  
      // Verifica se o login foi bem-sucedido
      cy.contains('Bem Vindo diegomachadoti');
    })
  })
  