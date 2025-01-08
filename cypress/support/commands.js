Cypress.Commands.add('gui_login', (username, password) => {
    cy.viewport(1280, 1000)
    cy.visit(Cypress.env('URL_SISTEMA'))
    cy.get('[alt="ico_close_with_circle"]').eq(2).click();
    cy.get('button.btn.btn-disclaimer').contains('CONCORDO E FECHAR').click();
    cy.get('[alt="ico_my_account"]').click();
    cy.get('#login').type(username)
    cy.get('#password').type(password)
    cy.get('.row_action_login > [data-cy="btn-"]').click()
})

Cypress.Commands.add('login', () => {
    cy.viewport(1280, 1000)
    cy.visit(Cypress.env('URL_SISTEMA'))
    cy.get('[alt="ico_close_with_circle"]').eq(2).click();
    cy.get('button.btn.btn-disclaimer').contains('CONCORDO E FECHAR').click();
    cy.get('[alt="ico_my_account"]').click();
    cy.get('#login').type(Cypress.env('USERNAME'))
    cy.get('#password').type(Cypress.env('PASSWORD'))
    cy.get('.row_action_login > [data-cy="btn-"]').click()
})