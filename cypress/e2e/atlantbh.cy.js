import data from "../fixtures/example.json";

describe("template spec", () => {
  beforeEach(() => {
    cy.visit(data.url);
  });

  it("Test AtlantBH submits invalid email", () => {
    cy.get('#email').type(data.wrongEmail)
    cy.get('#lastname').type(data.lastName)
    cy.get('#email_error').should('contain', data.wrongEmailError)
  })

  it("Submits AtlantBH intership form", () => {
    //Fill User Details
    cy.get("#firstname").type(data.firstName);
    cy.get("#lastname").type(data.lastName);
    cy.get("#email").type(data.email);
    cy.get(".iti > .styles--2e9Cp").type(data.phoneNumber);
    cy.get("#address").type(data.address);

    //CV File Upload
    cy.get("input[type=file]")
      .eq(1)
      .selectFile(data.CV, { force: true });

    //Selects QA checkbox
    cy.get("input[type=radio]").eq(1).check();

    //Cover Letter Upload
    cy.get("input[type=file]")
      .eq(2)
      .selectFile(data.CoverLetter, { force: true });

    cy.get("#QA_5870542").type(data.howDidYouHear);

    //Checkbox Agree
    cy.get("input[type=radio]").eq(14).click();
    cy.get("input[type=radio]").eq(15).click();
    cy.get("input[type=radio]").eq(17).click();

    //Wait until files uploaded
    cy.wait(50000)

    //Submit intership application
    // cy.get('.styles--10XMc').click();

  });
});
