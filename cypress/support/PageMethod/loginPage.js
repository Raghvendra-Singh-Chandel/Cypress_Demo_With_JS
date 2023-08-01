/// <reference types = "cypress"/>
class Login
{
    getLoginUrl() {
        return cy.visit('http://127.0.0.1:5500/login.html')
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