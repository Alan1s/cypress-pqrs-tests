describe ('Validacion de formulario PQRS', () => {
    beforeEach(() => {
        cy.visit("/")//Visitar la pagina principal que es la base URL que se encuentra en cypress.config.js
    })

    it('Navegar a un link dinamico y validar que existe el iframe', () => {
        cy.visit("/escribenos")
        cy.url().should('include', '/escribenos')//verificar que se ha navegado a la pagina de PQRS
        cy.get('.contact-title-button').should('exist')//Verificar que el boton principal del modulo existe
        cy.get('iframe').should('exist') //Verificar que el iframe existe
    })

})