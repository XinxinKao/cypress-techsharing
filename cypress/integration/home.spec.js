describe("Home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it('home page display successfully', () => {
        const expectedTitle = "End-to-End Testing with Cypress.io Workshop";
        cy.contains(expectedTitle);

        cy.contains('Home');
        cy.contains('Groups');

        const expectedText = "Visit cypress.io to read the documentation";
        cy.contains(expectedText);
    });

    it("click cypress link and then redirect to cypress website", () => {
        cy.findByRole("link", { name: /visit cypress\.io/i }).click();
        cy.url().should("eq", "https://www.cypress.io/");
    });
  });