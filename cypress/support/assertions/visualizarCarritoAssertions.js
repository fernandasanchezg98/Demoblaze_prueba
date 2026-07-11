export const validateProductIsDisplayed = (
  productNames,
  expectedProduct
) => {
  productNames
    .contains(expectedProduct)
    .should("be.visible");
};