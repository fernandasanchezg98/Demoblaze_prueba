import {
    Given,
    When,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";
  
  import cartPage from "../pages/cartPage";
  import purchasePage from "../pages/purchasePage";
  
  import {
    validateSuccessfulPurchase
  } from "../../support/assertions/finalizarCompraAssertions";
  
  let customerData;
  
  Given(
    "completa el formulario de compra con información válida",
    () => {
      cartPage.openPurchaseForm();
      purchasePage.validatePurchaseModal();
  
      cy.fixture("purchaseData.json").then((data) => {
        customerData = data;
        purchasePage.completeForm(customerData);
      });
    }
  );
  
  When("confirma la compra", () => {
    purchasePage.confirmPurchase();
  });
  
  Then("debe visualizar el mensaje de compra exitosa", () => {
    validateSuccessfulPurchase(purchasePage);
  });
