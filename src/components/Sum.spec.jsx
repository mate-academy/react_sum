import React from 'react';
import { mount } from '@cypress/react';
import { Sum } from './Sum';

describe('Sum', () => {
  it('should plus two positive numbers', () => {
    const a = 2;
    const b = 3;

    mount(<Sum a={a} b={b} />);
    cy.get('p').should('contain', `Sum of ${a} and ${b} is 5`);
  });

  it('should plus positive and negative numbers', () => {
    const a = -5;
    const b = 5;

    mount(<Sum a={a} b={b} />);
    cy.get('p').should('contain', `Sum of ${a} and ${b} is 0`);
  });

  it('should plus two negative numbers', () => {
    const a = -2;
    const b = -3;

    mount(<Sum a={a} b={b} />);
    cy.get('p').should('contain', `Sum of ${a} and ${b} is -5`);
  });

  it(`should return 0 if 'a' and 'b' not passed`, () => {
    mount(<Sum />);
    cy.get('p').should('contain', `Sum of 0 and 0 is 0`);
  });
});
