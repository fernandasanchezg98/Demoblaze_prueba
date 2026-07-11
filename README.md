# Reto de Automatización E2E con Cypress - Demoblaze

Este proyecto tiene como objetivo implementar pruebas automatizadas E2E sobre la aplicación web Demoblaze:

https://www.demoblaze.com/

Para el desarrollo del reto se utilizó Cypress con Cucumber, aplicando buenas prácticas de automatización como separación de responsabilidades mediante Features, Step Definitions, Page Objects, Assertions y Constants.

Se automatizaron los principales flujos funcionales del proceso de compra:

- Agregar productos al carrito.
- Visualizar los productos en el carrito.
- Completar el formulario de compra.
- Finalizar la compra exitosamente.

# Estructura del proyecto

## features

Contiene los escenarios de prueba escritos en lenguaje Gherkin utilizando Given, When y Then.

Aquí se encuentran los flujos funcionales automatizados.

Features:

- Agregar productos al carrito.
- Visualizar carrito de compras.
- Completar formulario de compra.
- Finalizar compra.

## pages

Contiene los métodos encargados de interactuar con la interfaz de usuario mediante el patrón Page Object Model (POM).

Aquí se encuentran las acciones realizadas sobre la aplicación web:

- Navegación por la página principal.
- Selección de productos.
- Gestión del carrito de compras.
- Interacción con el formulario de compra.

## step_definitions

Aquí se conectan los escenarios definidos en los archivos Feature con la lógica de automatización.

En esta capa se realiza:

- Preparación del escenario de prueba.
- Navegación por la aplicación.
- Ejecución de acciones del usuario.
- Llamado de las validaciones.

## assertions

Contiene las validaciones del proyecto.

Ejemplo:

- Validación de productos agregados al carrito.
- Validación de productos visualizados.
- Validación de datos ingresados en el formulario.
- Validación del mensaje de compra exitosa.

## constants

Contiene valores reutilizables para evitar datos quemados en el código.

Ejemplo:

- URL de navegación.
- Mensajes esperados.

## fixtures

Contiene los datos de prueba utilizados durante la ejecución de los escenarios.


# Ejecución de pruebas

Para instalar las dependencias del proyecto ejecutar:


npm install


Para ejecutar las pruebas en la interfaz de usuario:


npx cypress open


# Generación de reportes

Para ejecutar las pruebas en modo consola y generar el reporte:


npx cypress run


Al finalizar la ejecución se genera el reporte en la carpeta:


cypress/reports


# Ejecutar todos los escenarios


npm run test


# Ejecutar escenario agregar productos


npm run test:Agregar


# Ejecutar escenario visualizar carrito


npm run test:Visualizar


# Ejecutar escenario completar formulario


npm run test:Completar


# Ejecutar escenario finalizar compra


npm run test:Finalizar


# Tecnologías utilizadas

- Cypress
- Cucumber
- JavaScript
- Mochawesome Reporter

# Resultado esperado

Las pruebas permiten validar el flujo completo de compra en la aplicación Demoblaze mediante automatización End to End, verificando la interacción del usuario desde la selección de productos hasta la confirmación de la compra, generando evidencia de ejecución mediante reportes HTML.