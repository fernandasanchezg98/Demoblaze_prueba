import { URLS } from "../../support/constants/urls";

class CartPage {
  elements = {
    cartLink: () => cy.get("#cartur"),

    cartRows: () => cy.get("#tbodyid tr"),

    productNames: () => cy.get("#tbodyid tr td:nth-child(2)"),

    placeOrderButton: () => cy.contains("button", "Place Order")
  };

  openCart() {
    this.elements.cartLink()
      .should("be.visible")
      .click();

    cy.url()
      .should("include", URLS.CART);

    this.elements.cartRows()
      .should("have.length.greaterThan", 0);
  }

  getCartRows() {
    return this.elements.cartRows();
  }

  getProductNames() {
    return this.elements.productNames();
  }

  openPurchaseForm() {
    this.elements.placeOrderButton()
      .should("be.visible")
      .click();
  }
}

export default new CartPage();