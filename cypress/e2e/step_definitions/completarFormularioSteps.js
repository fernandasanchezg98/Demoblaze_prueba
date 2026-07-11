import {
    Given,
    When,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";
  
  import homePage from "../pages/homePage";
  import productPage from "../pages/productPage";
  import cartPage from "../pages/cartPage";
  import purchasePage from "../pages/purchasePage";
  
  import {
    validatePurchaseFormData
  } from "../../support/assertions/completarFormularioAssertions";
  
  let customerData;
  
  const addProductToCart = (
    productName,
    returnToHome = true
  ) => {
    homePage.selectProduct(productName);
    productPage.validateProduct(productName);
    productPage.addProductToCart();
  
    if (returnToHome) {
      homePage.returnToHome();
    }
  };
  
  Given("que el usuario tiene productos agregados al carrito", () => {
    homePage.visit();
    homePage.validateHomePage();
  
    addProductToCart("Samsung galaxy s6");
    addProductToCart("Nokia lumia 1520", false);
  
    cartPage.openCart();
  });
  
  Given("abre el formulario de compra", () => {
    cartPage.openPurchaseForm();
    purchasePage.validatePurchaseModal();
  });
  
  When("completa el formulario con información válida", () => {
    cy.fixture("purchaseData").then((data) => {
      customerData = data;
      purchasePage.completeForm(customerData);
    });
  });
  
  Then(
    "los campos del formulario deben contener la información ingresada",
    () => {
      validatePurchaseFormData(
        purchasePage,
        customerData
      );
    }
  );