describe('my first test', () => {
  it('does not do much', () => {
    expect(true).to.equal(true);
  });
});

const myApp = 'http://localhost:3000/';

describe('my next test', () => {
  it('visits my app', () => {
    cy.visit(myApp)
  });
});