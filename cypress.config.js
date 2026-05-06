const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    /*
    Si estás realizando pruebas end-to-end, puedes configurar el entorno de pruebas aquí. Por ejemplo:
    baseUrl: "http://localhost:3000",
    viewportWidth: 1280, // Ancho de pantalla para las pruebas
    viewportHeight: 720, // Alto de pantalla para las pruebas
    defaultCommandTimeout: 4000, // Tiempo de espera para comandos
    pageLoadTimeout: 5000, // Tiempo de espera para la carga de páginas 
    // Otras configuraciones específicas para pruebas end-to-end
    */
   baseUrl: "https://www.epssura.com/",
   
},
});
