Feature: Completar formulario de compra

  Scenario: Completar el formulario con datos válidos
    Given que el usuario tiene productos agregados al carrito
    And abre el formulario de compra
    When completa el formulario con información válida
    Then los campos del formulario deben contener la información ingresada