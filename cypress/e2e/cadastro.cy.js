const url = "http://localhost:3000";

const nome = "usuario6"
const email = "usuario6@email.com";
const password = "usuario6";

//const username = String(Math.ceil(Math.random()*1000000));
//const password = String(Math.ceil(Math.random()*1000000));

describe('Cadastrar usuário', () => {
  before(() => {
    cy.visit(url)
  });

  it('Realizar cadastro de um novo Usuário', () => {
    
    cy.visit(url)
    cy.get('button[name="acessar"]').click();
    cy.get('button[name="btnCadastrar1"]').click();

    cy.get('input[name="nome"]').type(nome)
    cy.get('input[name="email"]').type(email);
    cy.get('input[id="inputSenha"]').type(password);
    cy.get('input[id="inputRepitaSenha"]').type(password);
    
    cy.get('button[name="btnSalvar"]').click().pause();

  });

  it('Realizar cadastro de um Usuário já cadastrado', () => {
    
    cy.visit(url)
    cy.get('button[name="acessar"]').click();
    cy.get('button[name="btnCadastrar1"]').click();

    cy.get('input[name="nome"]').type(nome)
    cy.get('input[name="email"]').type(email);
    cy.get('input[id="inputSenha"]').type(password);
    cy.get('input[id="inputRepitaSenha"]').type(password);
    
    cy.get('button[name="btnSalvar"]').click();

  });
})