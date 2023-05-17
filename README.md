# cypress-full-stack-test
Projeto utilizando o Cypress com node e JS para realizar teste web e mobile


### Pré Requisitos
- Node.js instalado

### Estrutura do projeto
    ```
    - cypress
        - fixtures
            - data.json
        - e2e
            - loginMobile.cy.js
            - loginWeb.cy.js
        - plugins
            - index.js
        - support
            - commands.js
            - e2e.js
    - cypress.config.js
    - package.json
    
    ```
- cypress/: É o diretório raiz do projeto Cypress.

- **fixtures/**: É onde você pode armazenar arquivos de dados ou recursos estáticos a serem usados nos testes.

- **e2e/**: É onde você coloca os arquivos de teste (specs). Cada arquivo de teste contém um ou mais testes.

- **plugins/**: É onde você pode configurar e estender o comportamento do Cypress usando plugins.

- **support/**: É onde você coloca arquivos de suporte, como comandos personalizados e configurações globais.

- **cypress.config.js**: É o arquivo de configuração do Cypress, onde você pode definir opções de configuração para o Cypress.

- **package.json**: É o arquivo de manifesto do projeto Node.js, onde você define as dependências do projeto e scripts de execução do Cypress.

### Comandos

*Configuração inicial*
> mkdir projeto-cypress

> cd projeto-cypress

> npm init -y

> npm install cypress --save-dev

*Estrutura do projeto*
> npx cypress open

*Configuração do ambiente*
- Criar arquivo cypress.json  e adicione as seguintes configurações para definem a resolução da janela do navegador durante os testes
    ```
    {
    "viewportWidth": 1920,
    "viewportHeight": 1080
    }
    ```

*Executando os testes*
> npm test

*Instalar a biblioteca Facker para utilizar nos testes*
> npm install faker --save-dev

*Instalar a biblioteca Random para utilizar nos testes*
> npm install cypress-random --save-dev

*Instalar/Executar biblioteca de relatórios mochawesome*
> npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

> npx cypress run --reporter mochawesome

*Comando para ver detelhes de uma biblioteca que procurar outros pacotes não encontrados em uma instação*
> npm fund

### App's Utilizada para teste
* [Tests Web](https://front.serverest.dev)
* [Tests API](https://serverest.dev/)

### Referências
* [Cypress Docs](https://docs.cypress.io/)
* [Cypress Commands](https://docs.cypress.io/api/commands)
* [Cypress Configurações](https://on.cypress.io/configuration)
* [IA](https://chat.openai.com/)
* [Faker](https://github.com/Marak/Faker.js)