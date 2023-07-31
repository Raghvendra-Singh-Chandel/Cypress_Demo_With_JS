/// <reference types = "cypress"/>
import * as productData from "../../fixtures/product.json"

class selectProductToBuy {
    getProduct() {
        return cy.contains(productData.productName)
    }
    addproductIncart() {
        return cy.get("#button")
    }

    productDescription() {
        return cy.get("#details p")
    }

    productCount() {
        return cy.get("#badge")
    }

    placeOrderButton() {
        return cy.get("#button")
    }



     



}
export default selectProductToBuy