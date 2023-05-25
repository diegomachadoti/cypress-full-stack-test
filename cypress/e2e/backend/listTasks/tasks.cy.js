import "../../../support/config";
import faker from "faker";
const baseUrl = Cypress.config("apiUrlApi");
const timeWait = Cypress.config("wait");

let responseBody; // Declaração da variável fora do escopo dos testes
const titleTaskRandom = faker.git.branch();

/**
 * Cenários Principais
 */
it(`Criar Tarefa usando endpoint com method POST "${titleTaskRandom}"`, () => {
    cy.request({
        url: `${baseUrl}/tasks`,
        method: "POST",
        body: {
            title: `${titleTaskRandom}`,
            status: "Pendente",
        },
    }).then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body.insertId).to.not.be.null;

        responseBody = response.body.insertId; // Captura variável
    });
});

it(`Consultar Tarefa usando endpoint com method GET "${titleTaskRandom}"`, () => {
    cy.wait(timeWait);
    cy.request({
        url: `${baseUrl}/tasks/${responseBody}`,
        method: "GET",
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.id).to.not.be.null;
        expect(response.body).to.be.an("array").and.have.lengthOf(1);

        const task = response.body[0];
        expect(task).to.have.property("id").and.to.be.a("number");
        expect(task)
            .to.have.property("title")
            .and.to.equal(`${titleTaskRandom}`);
        expect(task).to.have.property("status").and.to.equal("pendente");
        expect(task).to.have.property("created_at").and.to.be.a("string");
        //expect(response.body.id).to.have.property("id", `${titleTaskRandom}`);
    });
});

it(`Atualizar Tarefa usando endpoint com method UPDATE "${titleTaskRandom}"`, () => {
    cy.wait(timeWait);
    cy.request({
        url: `${baseUrl}/tasks/${responseBody}`,
        method: "PUT",
        body: {
            title: `${titleTaskRandom} Update`,
            status: "Em Andamento",
        },
    }).then((response) => {
        expect(response.status).to.equal(204);
    });
});

it(`Excluir Tarefa usando endpoint com method DELETE "${titleTaskRandom}"`, () => {
    cy.wait(timeWait);
    cy.request({
        url: `${baseUrl}/tasks/${responseBody}`,
        method: "DELETE",
    }).then((response) => {
        expect(response.status).to.equal(204);
    });
});

it(`Consultar todas as Tarefa usando endpoint com method GET "Todos"`, () => {
    cy.request({
        url: `${baseUrl}/tasks`,
        method: "GET",
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an("array").and.not.to.be.empty;

        response.body.forEach((task) => {
            expect(task).to.have.property("id").and.to.be.a("number");
            expect(task).to.have.property("title").and.to.be.a("string");
            expect(task).to.have.property("status").and.to.be.a("string");
            expect(task).to.have.property("created_at").and.to.be.a("string");
        });
    });
});

/**
 * Cenários Alternativos
 */
it(`Tentativa de criar tarefa sem passar os campos obrigatórios com method POST`, () => {
    console.log("Sem passar Título");
    cy.request({
        url: `${baseUrl}/tasks`,
        method: "POST",
        body: {
            status: "Pendente",
        },
        failOnStatusCode: false, // Para que o teste não falhe caso o código de erro não seja 400
    }).then((response) => {
        expect(response.status).to.equal(400);
        // expect(response.body).to.have.property("message","Campo 'Título' é obrigatório!!");
        expect(response.body)
            .to.have.property("message")
            .and.to.equal("Campo 'Título' é obrigatório!!");
    });

    console.log("Sem passar Status");
    cy.request({
        url: `${baseUrl}/tasks`,
        method: "POST",
        body: {
            title: `${titleTaskRandom}`,
        },
        failOnStatusCode: false, // Para que o teste não falhe caso o código de erro não seja 400
    }).then((response) => {
        expect(response.status).to.equal(400);
        // expect(response.body).to.have.property("message","Campo 'Título' é obrigatório!!");
        expect(response.body)
            .to.have.property("message")
            .and.to.equal("Campo 'Status' é obrigatório!!");
    });
});

it(`Tentativa de consulta de tarefa não existente com method GET`, () => {
    const taskRandom = faker.random.number(300, 400);
    cy.request({
        url: `${baseUrl}/tasks/${taskRandom}`,
        method: "GET",
        failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.equal(404);
        expect(response.body).to.not.be.null;
        expect(response.body)
            .to.have.property("message")
            .and.to.equal("Não existe uma tarefa na base com esse {id}!!");
    });
});

it(`Tentativa de atualizar de tarefa não existente com method PUT`, () => {
    const taskRandom = faker.random.number(300, 400);
    cy.request({
        url: `${baseUrl}/tasks/${taskRandom}`,
        method: "PUT",
        body: {
            title: `${titleTaskRandom}`,
            status: "Pendente",
        },
        failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.equal(404);
        expect(response.body).to.not.be.null;
        expect(response.body)
            .to.have.property("message")
            .and.to.equal("Não existe uma tarefa na base com esse {id}!!");
    });
});

it(`Tentativa de atualizar de tarefa com titulo já existente com method PUT`, () => {
    cy.request({
        url: `${baseUrl}/tasks/1`,
        method: "PUT",
        body: {
            title: "Objetivo e Metas: Cypress para tests",
            status: "Pendente",
        },
        failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.equal(400);
        expect(response.body).to.not.be.null;
        expect(response.body)
            .to.have.property("message")
            .and.to.equal("Já existe uma tarefa com o mesmo título!!");
    });
});

it(`Tentativa de atualizar de tarefa sem passar campos obrigatórios com method PUT`, () => {
    console.log("Sem passar Titulo");
    cy.request({
        url: `${baseUrl}/tasks/1`,
        method: "PUT",
        body: {
            status: "Pendente",
        },
        failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.equal(400);
        expect(response.body).to.not.be.null;
        expect(response.body)
            .to.have.property("message")
            .and.to.equal("Campo 'Título' é obrigatório!!");
    });

    console.log("Sem passar Status");
    cy.request({
        url: `${baseUrl}/tasks/1`,
        method: "PUT",
        body: {
            title: `${titleTaskRandom}`,
        },
        failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.equal(400);
        expect(response.body).to.not.be.null;
        expect(response.body)
            .to.have.property("message")
            .and.to.equal("Campo 'Status' é obrigatório!!");
    });
});

it(`Tentativa de exclusão de tarefa não existente com method DELETE`, () => {
    const taskRandom = faker.random.number(300, 400) * 10;
    cy.request({
        url: `${baseUrl}/tasks/${taskRandom}`,
        method: "DELETE",
        failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.equal(404);
        expect(response.body).to.not.be.null;
        expect(response.body)
            .to.have.property("message")
            .and.to.equal("Não existe uma tarefa na base com esse {id}!!");
    });
});
