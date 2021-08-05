describe("Home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it('Home button is existed', () => {
        cy.contains('Home')
    });
  });