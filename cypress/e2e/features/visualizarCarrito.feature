Feature: Visualizar productos en el carrito

  Scenario: Visualizar los productos seleccionados
    Given que el usuario tiene los productos "Samsung galaxy s6" y "Nokia lumia 1520" agregados al carrito
    When ingresa al carrito de compras
    Then debe visualizar el producto "Samsung galaxy s6"
    And debe visualizar el producto "Nokia lumia 1520"