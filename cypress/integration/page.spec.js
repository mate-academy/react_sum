import Sum from '../../src/components/Sum.jsx';

describe('Sum component', () => {
  before(() => {
    cy.visit('/');
  });

  it('should sum two random numbers in the App', () => {
    const a = Math.floor(Math.random() * 9);
    const b = Math.floor(Math.random() * 9);
    const result = Sum({
      a,
      b,
    }).props.children;

    expect(result)
      .to.equal(`Sum of ${a} and ${b} is ${a + b}`);
  });
});
