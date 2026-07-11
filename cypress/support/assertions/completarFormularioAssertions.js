export const validatePurchaseFormData = (
    purchasePage,
    expectedData
  ) => {
    purchasePage.getNameInput()
      .should("have.value", expectedData.name);
  
    purchasePage.getCountryInput()
      .should("have.value", expectedData.country);
  
    purchasePage.getCityInput()
      .should("have.value", expectedData.city);
  
    purchasePage.getCardInput()
      .should("have.value", expectedData.card);
  
    purchasePage.getMonthInput()
      .should("have.value", expectedData.month);
  
    purchasePage.getYearInput()
      .should("have.value", expectedData.year);
  };