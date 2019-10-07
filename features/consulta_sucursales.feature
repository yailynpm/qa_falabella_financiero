Feature: Consulta de sucursales y de ingredientes
   
   Como usuario En google buscar la palabra tottus sucursales
   Del listado que aparece, presionar en el texto que dice Tottus Nataniel y presionar el botón Sitio web
   Una vez en la página de tottus, buscar la opción Recetas
   Seleccionar Dificultad alta, Buscar corona de Rollitos de canela y validar que la receta tenga canela y azúcar rubia.

    @debug
    Scenario: Abrir Google, buscar sucursales y resetas
        Given Abro pagina de Google
        When Escribo la palabra "tottus sucursales"
        When Preciono "enter" para buscar
        When Preciono en "Tottus Nataniel" del listado
        When Preciono en "Sitio web"
        When Preciono en Recetas del tottus
        When Preciono en dificultad alta
        When Preciono en receta "Corona de rollitos de canela"
        Then Receta tiene canela y azucar rubia