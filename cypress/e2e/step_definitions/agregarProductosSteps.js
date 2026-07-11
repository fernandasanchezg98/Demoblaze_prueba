import {
  Given,
  When,
  Then
} from "@badeball/cypress-cucumber-preprocessor";

import homePage from "../pages/homePage";
import productPage from "../pages/productPage";
import cartPage from "../pages/cartPage";

import {
  validateCartProductQuantity
} from "../../support/assertions/agregarProductosAssertions";

Given("que el usuario ingresa a la página de Demoblaze", () => {
  homePage.visit();
  homePage.validateHomePage();
});

When("agrega el producto {string} al carrito", (productName) => {
  homePage.selectProduct(productName);

  productPage.validateProduct(productName);
  productPage.addProductToCart();

  homePage.returnToHome();
});

Then("el carrito debe contener {int} productos", (expectedQuantity) => {
  cartPage.openCart();

  validateCartProductQuantity(
    cartPage.getCartRows(),
    expectedQuantity
  );
});