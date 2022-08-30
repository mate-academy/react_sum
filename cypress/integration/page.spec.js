describe('Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should contain a sum of 2 and 3', () => {
    cy.get('p')
      .eq(0)
      .should('have.text', 'Sum of 2 and 3 is 5');
  });

  it('should contain a sum of -5 and 5', () => {
    cy.get('p')
      .eq(1)
      .should('have.text', 'Sum of -5 and 5 is 0');
  });

  it('should contain a sum of 10 and nothing', () => {
    cy.get('p')
      .eq(2)
      .should('have.text', 'Sum of 10 and 0 is 10');
  });

  it('should contain a sum of nothing and 5', () => {
    cy.get('p')
      .eq(3)
      .should('have.text', 'Sum of 0 and 5 is 5');
  });

  it('should contain a sum with no params', () => {
    cy.get('p')
      .eq(4)
      .should('have.text', 'Sum of 0 and 0 is 0');
  });
});
