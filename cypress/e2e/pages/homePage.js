class HomePage {
    elements = {
      logo: () => cy.get("#nava"),
      productLinks: () => cy.get(".card-title a")
    };
  
    visit() {
      cy.visit("/");
    }
  
    validateHomePage() {
      this.elements.logo()
        .should("be.visible")
        .and("contain.text", "PRODUCT STORE");
    }
  
    selectProduct(productName) {
      this.elements.productLinks()
        .contains(productName)
        .should("be.visible")
        .click();
    }
  
    returnToHome() {
      this.elements.logo()
        .should("be.visible")
        .click();
  
      this.elements.productLinks()
        .should("have.length.greaterThan", 0);
    }
  }
  
  export default new HomePage();