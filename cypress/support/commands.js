Cypress.Commands.add("fillMandatoryFieldsAndSubmit", () => {
  cy.get("#firstName").type("Henrique");
  cy.get("#lastName").type("Borges");
  cy.get("#email").type("teste@email.com");
  cy.get("#open-text-area").type("Testando");
  cy.contains("button", "Enviar").click();
});
