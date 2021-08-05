describe("Group page", () => {
    beforeEach(() => {
      cy.visit("/groups");
    });
  
    it('group page display successfully', () => {
        const expectedTitle = "Tech Community Events";
        cy.contains(expectedTitle);

        cy.contains('Home');
        cy.contains('Groups');        
    });    
});