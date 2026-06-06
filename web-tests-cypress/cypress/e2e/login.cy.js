describe('Login de usuario', () => {
    const senha = '123456'

    const fazerLogin = (usuario) => {
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="email"]').should('be.visible').type(usuario.email)
        cy.get('[data-testid="senha"]').should('be.visible').type(usuario.password)
        cy.get('[data-testid="entrar"]').should('be.visible').click()
        cy.location('pathname').should('not.include', '/login')
    }

    const fazerLoginInvalido = (email, password) => {
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="email"]').should('be.visible').type(email)
        cy.get('[data-testid="senha"]').should('be.visible').type(password)
        cy.get('[data-testid="entrar"]').should('be.visible').click()
        cy.location('pathname').should('include', '/login')
        cy.contains(/email.*senha.*inv/i).should('be.visible')
    }

    const tentarLoginComCamposVazios = () => {
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="entrar"]').should('be.visible').click()
        cy.contains('Email é obrigatório').should('be.visible')
        cy.contains('Password é obrigatório').should('be.visible')
    }

    it('Successful login with a basic user', () => {
        cy.criarUsuario({
            password: senha,
            administrador: 'false',
        }).then((usuario) => {
            fazerLogin(usuario)
        })
    })

    it('Successful login with an admin user', () => {
        cy.criarUsuario({
            password: senha,
            administrador: 'true',
        }).then((usuario) => {
            fazerLogin(usuario)
        })
    })

    it('Should show an error when trying to log in with an invalid user', () => {
        fazerLoginInvalido('usuario.inexistente@serverest.dev', 'senha-incorreta')
    })

    it('Should show validation errors when required fields are empty', () => {
        tentarLoginComCamposVazios()
    })

    it('Should log out and exit the system', () => {
        cy.criarUsuario({
            password: senha,
            administrador: 'true',
        }).then((usuario) => {
            fazerLogin(usuario)

            cy.location('pathname').should('eq', '/admin/home')
            cy.window().then((win) => {
                expect(win.localStorage.getItem('serverest/userToken')).to.be.a('string')
            })

            cy.get('[data-testid="logout"]').should('be.visible').click()

            cy.location('pathname').should('eq', '/login')
            cy.window().then((win) => {
                expect(win.localStorage.getItem('serverest/userToken')).to.be.null
            })
        })
    })
})
