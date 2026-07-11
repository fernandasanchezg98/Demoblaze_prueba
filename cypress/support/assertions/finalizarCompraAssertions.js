import { MESSAGES } from "../constants/messages";

export const validateSuccessfulPurchase = (purchasePage) => {
  purchasePage.getConfirmationTitle()
    .should("be.visible")
    .and("have.text", MESSAGES.PURCHASE_SUCCESS);

  purchasePage.getConfirmationInformation()
    .should("be.visible")
    .and("contain.text", "Id:")
    .and("contain.text", "Amount:")
    .and("contain.text", "Card Number:")
    .and("contain.text", "Name:")
    .and("contain.text", "Date:");
};