# *cypress-full-stack-test*
🎯 ***Projeto utilizando o Cypress com node e JS para realizar teste web e mobile e API.***


## 🔨 Pré Requisitos

- [**Node**](https://nodejs.org/en/download)

## 📁 Estrutura do projeto
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
- **cypress/**: É o diretório raiz do projeto Cypress.

- **fixtures/**: É onde você pode armazenar arquivos de dados ou recursos estáticos a serem usados nos testes.

- **e2e/**: É onde você coloca os arquivos de teste (specs). Cada arquivo de teste contém um ou mais testes.

- **plugins/**: É onde você pode configurar e estender o comportamento do Cypress usando plugins.

- **support/**: É onde você coloca arquivos de suporte, como comandos personalizados e configurações globais.

- **cypress.config.js**: É o arquivo de configuração do Cypress, onde você pode definir opções de configuração para o Cypress.

- **package.json**: É o arquivo de manifesto do projeto Node.js, onde você define as dependências do projeto e scripts de execução do Cypress.

## ⚙ Comandos

*Instalar o node*
> npm install

*Configuração inicial (Obrigatório para desenvolvimento)*
> mkdir projeto-cypress

> cd projeto-cypress

> npm init -y

> npm install cypress --save-dev

*Estrutura do projeto (Obrigatório para desenvolvimento)*
> npx cypress open

*Instalar a biblioteca Faker para utilizar nos testes*
> npm install faker --save-dev

*Instalar a biblioteca Random para utilizar nos testes*
> npm install cypress-random --save-dev

*Instalar/Executar biblioteca de relatórios mochawesome*
> npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

> npx cypress run --reporter mochawesome

*Comando para ver detelhes de uma biblioteca que procurar outros pacotes não encontrados em uma instação (Opcional)*
> npm fund

*Versão do cypress (Opcional)*
> npx cypress version

*Executando os testes (padrão do cypress)*
> npm test

*Executando teste específico em background*
> npx cypress run --spec "cypress/e2e/frontend/login/loginMobile.cy.js"

> npx cypress run --spec "cypress/e2e/backend/listTasks/tasks.cy.js"


## 💻 App's Utilizada para teste
* [Tests Web Serverest](https://front.serverest.dev)
* [Tests API Serverest](https://serverest.dev/)
* [Tests API Projeto WebService diegomachadoti](https://github.com/diegomachadoti/api-full-stack-be-fe)

## 🔗 Referências
* [Cypress Docs](https://docs.cypress.io/)
* [Cypress Commands](https://docs.cypress.io/api/commands)
* [Cypress Configurações](https://on.cypress.io/configuration)
* [IA](https://chat.openai.com/)
* [Faker](https://github.com/Marak/Faker.js)
* [Plugin Cypress Runner](https://marketplace.visualstudio.com/items?itemName=G-Fidalgo.cypress-runner)


## 📚 To-do
- Corrigir teste do fluxo de login ✔
- Criar Testes de API baseano no projeto Tasks ✔
- Criar teste WEB baseano no projeto Tasks

---
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=diegomachadoti&hide=javascript,html)](https://github.com/diegomachadoti)