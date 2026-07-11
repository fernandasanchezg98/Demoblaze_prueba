class PurchasePage {
  elements = {
    purchaseModal: () => cy.get("#orderModal"),
    nameInput: () => cy.get("#name"),
    countryInput: () => cy.get("#country"),
    cityInput: () => cy.get("#city"),
    cardInput: () => cy.get("#card"),
    monthInput: () => cy.get("#month"),
    yearInput: () => cy.get("#year"),

    purchaseButton: () =>
      cy.get("#orderModal").contains("button", "Purchase"),

    confirmationModal: () => cy.get(".sweet-alert"),
    confirmationTitle: () => cy.get(".sweet-alert h2"),
    confirmationInformation: () => cy.get(".sweet-alert p")
  };

  validatePurchaseModal() {
    this.elements.purchaseModal()
      .should("be.visible")
      .and("have.class", "show");

    this.elements.nameInput()
      .should("be.visible")
      .and("be.enabled");
  }

  completeForm(customer) {
    this.elements.nameInput()
      .should("be.visible")
      .invoke("val", customer.name)
      .trigger("input")
      .trigger("change");

    this.elements.countryInput()
      .clear()
      .type(customer.country, { delay: 100 });

    this.elements.cityInput()
      .clear()
      .type(customer.city, { delay: 100 });

    this.elements.cardInput()
      .clear()
      .type(customer.card, { delay: 100 });

    this.elements.monthInput()
      .clear()
      .type(customer.month, { delay: 100 });

    this.elements.yearInput()
      .clear()
      .type(customer.year, { delay: 100 });
  }

  confirmPurchase() {
    this.elements.purchaseButton()
      .should("be.visible")
      .and("be.enabled")
      .click();
  }

  getConfirmationTitle() {
    return this.elements.confirmationTitle();
  }
  
  getConfirmationInformation() {
    return this.elements.confirmationInformation();
  }

  getNameInput() {
    return this.elements.nameInput();
  }

  getCountryInput() {
    return this.elements.countryInput();
  }

  getCityInput() {
    return this.elements.cityInput();
  }

  getCardInput() {
    return this.elements.cardInput();
  }

  getMonthInput() {
    return this.elements.monthInput();
  }

  getYearInput() {
    return this.elements.yearInput();
  }
}

export default new PurchasePage();