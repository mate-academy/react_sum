import React from 'react';
import Sum from './Sum';

describe('Sum Component', () => {
  it('should sum positive numbers', () => {
    cy.mount(<Sum a={7} b={10} />);
    cy.get('[data-cy="result"]').should('contain', 'Sum of 7 and 10 is 17');
  });

  it('should sum positive and negative numbers', () => {
    cy.mount(<Sum a={6} b={-4} />);
    cy.get('[data-cy="result"]').should('contain', 'Sum of 6 and -4 is 2');
  });

  it('should sum negative numbers', () => {
    cy.mount(<Sum a={-40} b={-2} />);
    cy.get('[data-cy="result"]').should('contain', 'Sum of -40 and -2 is -42');
  });

  it('should sum "a" with 0 if "b" is not given', () => {
    cy.mount(<Sum a={6} />);
    cy.get('[data-cy="result"]').should('contain', 'Sum of 6 and 0 is 6');
  });

  it('should sum 0 with "b" if "a" is not given', () => {
    cy.mount(<Sum b={12} />);
    cy.get('[data-cy="result"]').should('contain', 'Sum of 0 and 12 is 12');
  });

  it('should sum 0 with 0 if "a" and "b" are not given', () => {
    cy.mount(<Sum />);
    cy.get('[data-cy="result"]').should('contain', 'Sum of 0 and 0 is 0');
  });
});
