Feature: Agregar productos al carrito

  Scenario: Agregar dos productos correctamente
    Given que el usuario ingresa a la página de Demoblaze
    When agrega el producto "Samsung galaxy s6" al carrito
    And agrega el producto "Nokia lumia 1520" al carrito
    Then el carrito debe contener 2 productos