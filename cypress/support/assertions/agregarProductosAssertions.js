export const validateCartProductQuantity = (
    cartRows,
    expectedQuantity
  ) => {
    cartRows.should("have.length", expectedQuantity);
  };