const url = "http://localhost:3000/login";

const email = "usuario3@email.com";
const password = "usuario3";

//const username = String(Math.ceil(Math.random()*1000000));
//const password = String(Math.ceil(Math.random()*1000000));

describe('login com usuario valido', () => {
  before(() => {
    cy.visit(url)
  });

  it('Realizar login com Usuário Válido', () => {
    
    cy.visit(url)
    cy.get('input[name="emailLogin"]').type(email);
    cy.get('input[name="senhaLogin"]').type(password);
    
    cy.get('button[name="btnEntrar"]').click();

  });

  it('Realizar login com Usuário inválido', () => {
    
    cy.visit(url)
    cy.get('input[name="emailLogin"]').type("user1");
    cy.get('input[name="senhaLogin"]').type("user1");
    
    cy.get('button[name="btnEntrar"]').click();

  });
})