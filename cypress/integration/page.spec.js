import Sum from '../../src/components/Sum.jsx';

describe('Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should have sum of 2 and 3', () => {
    cy.get('p')
      .eq(0)
      .should('contain', 'Sum of 2 and 3 is 5');
  });

  it('should have sum of -5 and 5', () => {
    cy.get('p')
      .eq(1)
      .should('contain', 'Sum of -5 and 5 is 0');
  });

  it('should have sum of 10 and 0', () => {
    cy.get('p')
      .eq(2)
      .should('contain', 'Sum of 10 and 0 is 10');
  });

  it('should have sum of 0 and 5', () => {
    cy.get('p')
      .eq(3)
      .should('contain', 'Sum of 0 and 5 is 5');
  });

  it('should have sum of 0 and 0', () => {
    cy.get('p')
      .eq(4)
      .should('contain', 'Sum of 0 and 0 is 0');
  });
});

describe('Sum component', () => {
  it('should sum two positive numbers', () => {
    const a = 4;
    const b = 5;
    const count = Sum({
      a,
      b,
    });
    const { children: result } = count.props;

    expect(result)
      .to.equal(`Sum of ${a} and ${b} is ${a + b}`);
  });

  it('should sum negitive and positive numbers', () => {
    const a = -3;
    const b = 6;
    const count = Sum({
      a,
      b,
    });
    const { children: result } = count.props;

    expect(result)
      .to.equal(`Sum of ${a} and ${b} is ${a + b}`);
  });

  it('should negative numbers', () => {
    const a = -3;
    const b = -2;
    const count = Sum({
      a,
      b,
    });
    const { children: result } = count.props;

    expect(result)
      .to.equal(`Sum of ${a} and ${b} is ${a + b}`);
  });
});
