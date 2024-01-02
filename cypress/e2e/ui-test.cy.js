/// <reference types="cypress" />

describe("counterApp tests", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL"));
  });

  it("Common validations on the page", () => {

    // verify that the Heading "CounterApp" is visible
    cy.findByRole('heading', {name: 'CounterApp'}).should("be.visible")

    //verify the default number is 10
    cy.findByRole('heading', {name: '10'}).should("be.visible")

    // verify that buttons are visible and enabled
    cy.findByRole("button", { name: "+1" })
      .should("be.visible")
      .should("be.enabled")
    
    cy.findByRole("button", { name: "Reset" })
      .should("be.visible")
      .should("be.enabled")
    
    cy.findByRole("button", { name: "-1" })
      .should("be.visible")
      .should("be.enabled")

  });

  it("Validate the functionality of incrementing", () => {

    // click on +1 button
    cy.findByRole("button", { name: "+1" }).click()
    
   //verify that the number is incremented
   cy.findByRole('heading', {name: '11'}).should("be.visible")

  });

  it("Validate the functionality of reset", () => {

    // click on +1 button
    cy.findByRole("button", { name: "+1" }).click()
    
   //verify that the number is incremented
   cy.findByRole('heading', {name: '11'}).should("be.visible")

   // click on reset button
   cy.findByRole("button", { name: "Reset" }).click()

   //verify that the number is reset
   cy.findByRole('heading', {name: '10'}).should("be.visible")


  });

  it("Validate the functionality of decrementing", () => {

    // click on +1 button
    cy.findByRole("button", { name: "-1" }).click()
    
   //verify that the number is decremented
   cy.findByRole('heading', {name: '9'}).should("be.visible")

  });

});
