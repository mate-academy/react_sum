import Sum from '../../src/components/Sum.jsx';

describe('Sum component', () => {
  before(() => {
    cy.visit('/');
  });

  it('should sum two random numbers in the App', () => {
    const a = Math.floor(Math.random() * 9);
    const b = Math.floor(Math.random() * 9);
    const count = Sum({
      a,
      b,
    });
    const { children: result } = count.props;

    expect(result)
      .to.equal(`Sum of ${a} and ${b} is ${a + b}`);
  });
});
