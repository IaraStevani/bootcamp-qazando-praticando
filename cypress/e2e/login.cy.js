/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import commum_page from '../support/pages/commum_page'
import login_page from '../support/pages/login_page'

describe('Login', () => {

    beforeEach(() => {
        commum_page.acessarLogin()
    })

    it('E-mail vazio', () => {
        login_page.clicarLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    it('Senha vazia', () => {
        login_page.preencherEmail(faker.internet.email())
        login_page.clicarLogin()
        login_page.validarMensagemErro('Senha inválida.')
    })

    it('E-mail invalido', () => {
        login_page.preencherEmail('emailinvalido.com')
        login_page.clicarLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    it('Senha invalida', () => {
        login_page.preencherEmail(faker.internet.email())
        login_page.preencherSenha('123')
        login_page.clicarLogin()
        login_page.validarMensagemErro('Senha inválida.')
    })

    it('Login com sucesso', async () => {
        const nome = await faker.person.fullName()

        login_page.preencherEmail(faker.internet.email())
        login_page.preencherSenha(faker.internet.password({ length: 6 }))
        login_page.clicarLogin()
        login_page.validarMensagemSucesso(nome)
    })
})