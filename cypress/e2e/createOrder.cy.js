describe("create order end to end scenario",()=> {
    beforeEach("login",()=> {
        cy.loginWithvalidCredentials()
    })

    it.only ("create order",()=> {
        cy.selectProductToBuy()
        cy.placeOrder()
        cy.fillAllDetailsToProcessedPaymentPage()
    })
})