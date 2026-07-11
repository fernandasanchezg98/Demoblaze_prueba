Feature: Finalizar compra

  Scenario: Finalizar una compra exitosamente
    Given que el usuario tiene productos agregados al carrito
    And completa el formulario de compra con información válida
    When confirma la compra
    Then debe visualizar el mensaje de compra exitosa