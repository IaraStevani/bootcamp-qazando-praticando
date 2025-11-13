# Projeto de Testes Automatizados com Cypress e JavaScript

## Objetivo
Este projeto tem como objetivo demonstrar aos alunos do bootcamp QAzando como automatizar testes de aplicações web utilizando Cypress com JavaScript. O foco está em apresentar boas práticas de organização de código, uso de Custom Commands e estruturação de testes automatizados.

## Componentes do Projeto
- **Cypress**: Framework principal para automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para reutilização de ações comuns nos testes.
- **Estrutura de Pastas**:
  - `cypress/e2e/`: Contém os arquivos de teste (specs), como `login.cy.js` e `cadastro_usuario.cy.js`.
  - `cypress/support/commands.js`: Definição dos Custom Commands.
  - `cypress/support/pages/`: Páginas de apoio com funções para interação com a interface.
  - `cypress/fixtures/`: Arquivos de dados para uso nos testes.
  - `cypress/downloads/`: Pasta para arquivos baixados durante os testes.
  - `cypress/screenshots/` e `cypress/videos/`: Evidências geradas automaticamente pelo Cypress (ignoradas no Git).
- **package.json**: Gerenciamento de dependências e scripts do projeto.

## Guia de Instalação e Execução
1. **Pré-requisitos**:
   - Node.js instalado
   - npm (Node Package Manager)

2. **Instalação**:
   ```bash
   npm install
   ```

3. **Executando os Testes**:
   - Para abrir o Cypress em modo interativo:
     ```bash
     npx cypress open
     ```
   - Para rodar os testes em modo headless:
     ```bash
     npx cypress run
     ```

## Documentação dos Testes
- Os testes estão localizados em `cypress/e2e/`.
- Exemplos:
  - `login.cy.js`: Testes de login, validação de mensagens de erro e sucesso.
  - `cadastro_usuario.cy.js`: Testes de cadastro de usuário.
- Os testes utilizam Page Objects localizados em `cypress/support/pages/` para facilitar a manutenção e reutilização de código.

## Custom Commands
- Os Custom Commands estão definidos em `cypress/support/commands.js`.
- Exemplos de comandos personalizados:
  - `cy.login(email, senha)`: Realiza o login com as credenciais informadas.
  - `cy.cadastrarUsuario(dados)`: Realiza o cadastro de um novo usuário.
- Para criar novos comandos, adicione funções em `commands.js` e utilize-as nos testes para manter o código limpo e reutilizável.

---

Este projeto serve como base de aprendizado para automação de testes com Cypress, incentivando a organização, reutilização e clareza no desenvolvimento de testes automatizados.
