describe('my first test', () => {
  it('does not do much', () => {
    expect(true).to.equal(true);
  });
});

const myApp = 'http://localhost:3000/';

describe('my app', () => {
  it('exists', () => {
    cy.visit(myApp);
  });

  it('checks for text', () => {
    cy.visit(myApp);
    cy.contains('Cypress React Tutorial');
  });

  it('checks for a link click and redirects correctly', () => {
    cy.visit(myApp);
    cy.contains('Get to the other page').click();
    cy.url().should('include', '/my-other-page');
    cy.contains('This is the other page!');
  });
});