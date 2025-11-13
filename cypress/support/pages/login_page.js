/// <reference types="cypress" />

export default {
    clicarLogin() {
        cy.get('#btnLogin').click()
    },

    validarMensagemErro(mensagem) {
      cy.get('.invalid_input')
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).eq(mensagem)
            })
    },    

    preencherEmail(email) {
        cy.get('#user')
            .type(email)
    },

    preencherSenha(senha) {
        cy.get('#password')
            .type(senha)
    },
    
    validarMensagemSucesso(nome) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá,  ${nome}`)
    }
}
