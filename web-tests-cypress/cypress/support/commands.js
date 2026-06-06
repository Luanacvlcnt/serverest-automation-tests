import { faker } from '@faker-js/faker'

const API_URL = 'https://serverest.dev'

const gerarEmailUnico = () => {
  const baseEmail = faker.internet.email()
  const [local, domain] = baseEmail.split('@')

  return `${local}.${Date.now()}@${domain}`
}

Cypress.Commands.add('criarUsuario', (overrides = {}) => {
  const usuario = {
    nome: faker.person.fullName(),
    email: gerarEmailUnico(),
    password: '123456',
    administrador: false,
    ...overrides,
  }

  const administrador = usuario.administrador ? 'true' : 'false'

  return cy.request({
    method: 'POST',
    url: `${API_URL}/usuarios`,
    body: {
      nome: usuario.nome,
      email: usuario.email,
      password: usuario.password,
      administrador,
    },
  }).its('status').should('eq', 201).then(() => usuario)
})
