import {
    Given,
    When,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";
  
  import homePage from "../pages/homePage";
  import productPage from "../pages/productPage";
  import cartPage from "../pages/cartPage";
  
  import {
    validateProductIsDisplayed
  } from "../../support/assertions/visualizarCarritoAssertions";
  
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
  
  Given(
    "que el usuario tiene los productos {string} y {string} agregados al carrito",
    (firstProduct, secondProduct) => {
      homePage.visit();
  
      homePage.validateHomePage();
  
      addProductToCart(firstProduct);
  
      addProductToCart(secondProduct, false);
    }
  );
  
  When("ingresa al carrito de compras", () => {
    cartPage.openCart();
  });
  
  Then("debe visualizar el producto {string}", (productName) => {
    validateProductIsDisplayed(
      cartPage.getProductNames(),
      productName
    );
  });