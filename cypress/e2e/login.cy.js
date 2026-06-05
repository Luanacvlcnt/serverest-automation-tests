import { faker } from '@faker-js/faker'

describe('Login de Usuário', () => {

    //Login usuário Admin
    it('Login de usuário Admin', () => {
        const nome = faker.person.fullName()
        const senha = faker.internet.email()

        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="email"]').click().type(nome)
        cy.get('[data-testid="senha"]').click().type(senha)
        cy.get('[data-testid="password"]').click().type('123456')
        cy.get('[data-testid="entrar"]')

    })


    //Login usuário básico 
    it('Login de usuário básico', () => {
        const nome = faker.person.fullName()
        const email = faker.internet.senha()

        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="nome"]').click().type(nome)
        cy.get('[data-testid="email"]').click().type(email)
        cy.get('[data-testid="password"]').click().type('123456')
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('h1')

    })
})