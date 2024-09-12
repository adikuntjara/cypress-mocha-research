describe('saucelabs demo', () => {
  it('login', () => {  // Corrected function definition
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');  // Corrected ID for username field
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();


    //assertion
    cy.get('#react-burger-menu-btn')
    .should('contain', 'Open Menu');
  });
});
