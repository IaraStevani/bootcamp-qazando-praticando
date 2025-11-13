/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

import commum_page from '../support/pages/commum_page'
import cadastro_page from '../support/pages/cadastro_usuario_page'


describe('Cadastro de Usuário', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        commum_page.acessarCadastroUsuario()
    })

    it('Nome vazio', () => {
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')
    })

    it('E-mail vazio', () => {
        cadastro_page.preencherNome(faker.person.fullName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('E-mail inválido', () => {
        cadastro_page.preencherNome(faker.person.fullName())
        cadastro_page.preencherEmail('emailinvalido.com')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Senha vazia', () => {
        cadastro_page.preencherNome(faker.person.fullName())
        cadastro_page.preencherEmail(faker.internet.email())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Senha invalida', () => {
        cadastro_page.preencherNome(faker.person.fullName())
        cadastro_page.preencherEmail(faker.internet.email())
        cadastro_page.preencherSenha('123')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', async () => {
        const nome = await faker.person.fullName()

        cadastro_page.preencherNome(nome)
        cadastro_page.preencherEmail(faker.internet.email())
        cadastro_page.preencherSenha(faker.internet.password({ length: 6 }))
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemSucesso(nome)
    })
})