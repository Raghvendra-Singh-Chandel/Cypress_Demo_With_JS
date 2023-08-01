/// <reference types = "cypress"/>
import * as productDetails from "../../fixtures/product.json"

import selectProductToBuy from "../PageMethod/selectProduct";


const productToBuy  =       new selectProductToBuy()


Cypress.Commands.add("selectProductToBuy",()=> {
    productToBuy.getProduct().click()
    cy.url().should('contain','/contentDetails.html')
    productToBuy.productName().should('have.text',productDetails.productName)
    productToBuy.productDescription().should('have.text',productDetails.productdescription)
    productToBuy.productCount().should('have.text',' 0 ')
    productToBuy.addproductIncart().click()
    productToBuy.productCount().should('have.text', '1')

})

Cypress.Commands.add("placeOrder",()=> {
    productToBuy.productCount().click()
    cy.url().should('contain','cart')
    productToBuy.productVerify().should('contain', productDetails.productName + " × 1")
    productToBuy.placeOrderButton().click()
    cy.url().should('contain','enter_details')
    
})