import { faker } from '@faker-js/faker'

describe('Cadastro de Usuário', () => {

  //Cadastro usuário Admin
  it('Cadastro de usuário Admin', () => {
    const nome = faker.person.fullName()
    const email = faker.internet.email()

    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    cy.get('[data-testid="nome"]').click().type(nome)
    cy.get('[data-testid="email"]').click().type(email)
    cy.get('[data-testid="password"]').click().type('123456')
    cy.get('[data-testid="checkbox"]').click()
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('h1')

  })


  //Cadastro usuário básico
  it('Cadastro de usuário básico', () => {
    const nome = faker.person.fullName()
    const email = faker.internet.email()

    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    cy.get('[data-testid="nome"]').click().type(nome)
    cy.get('[data-testid="email"]').click().type(email)

    
    cy.get('[data-testid="password"]').click().type('123456')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('h1')

  })
})