/// <reference types = "cypress"/>
class Login
{
    getLoginUrl(url) {
        return cy.visit(url)
    }
    getUsername() {
        return cy.get('#username')
    }
    getPassword() {
        return cy.get('#password')
    }
    getLogin() {
        return cy.get('#login')
    }
    getCancel() {
        return cy.get('#cancel')
    }
    getvalidationMessage () {
        return cy.get('#error')
    }
   
}

export default Login