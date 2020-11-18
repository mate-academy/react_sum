/// <reference types="Cypress" />

describe (`Tests`, () => {
    before(() => {
        cy.visit('/');
    });

    it(`2 + 2 = 4`, ()=> {
        cy.get('div > :nth-child(2)').contains('Sum of 2 and 2 is 4');
        
    });

    it(`10 + 0 = 10`, ()=> {
        cy.get('div > :nth-child(3)').contains('Sum of 10 and 0 is 10');
        
    });

    it(`-5 + 5 = 0`, ()=> {
        cy.get('div > :nth-child(4)').contains('Sum of -5 and 5 is 0');
    });
});
