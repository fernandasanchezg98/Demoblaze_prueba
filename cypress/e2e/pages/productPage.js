import { ALERTS } from "../../support/constants/constants";

class ProductPage {
  elements = {
    productTitle: () => cy.get(".name"),
    addToCartButton: () => cy.contains("a", "Add to cart")
  };

  validateProduct(productName) {
    this.elements.productTitle()
      .should("be.visible")
      .and("contain.text", productName);
  }

  addProductToCart() {
    cy.once("window:alert", (alertText) => {
      expect(alertText).to.equal(ALERTS.PRODUCT_ADDED);
    });

    this.elements.addToCartButton()
      .should("be.visible")
      .click();
  }
}

export default new ProductPage();