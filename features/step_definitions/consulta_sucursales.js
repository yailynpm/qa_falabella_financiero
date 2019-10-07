const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;

Given('Abro pagina de Google', async function() {
    await testController.navigateTo('https://www.google.cl');
});

When('Escribo la palabra {string}', async function(text) {
    var input = Selector('.gLFyf').with({boundTestRun: testController});
    await testController.typeText(input, text);
    await this.addScreenshotToReport();
});

When('Preciono {string} para buscar', async function(text) {
    await testController.pressKey(text);
});

When('Preciono en {string} del listado', async function(text) {
    var element = Selector('span').withText(text).with({boundTestRun: testController});
    await testController.click(element)
    await this.addScreenshotToReport();
});

When('Preciono en {string}', async function(text) {
    var element = Selector('a.ab_button').withText(text).with({boundTestRun: testController});
    await testController.click(element)
    await this.addScreenshotToReport();
});

When('Preciono en Recetas del tottus', async function() {
    var element = Selector('#new_tottus_nav_cliente_recetas').with({boundTestRun: testController});
    await testController.click(element)
    await this.addScreenshotToReport();
});

When('Preciono en dificultad alta', async function() {
    var element = Selector('#myDIV botton img').withText('Alta').with({boundTestRun: testController});
    await testController.click(element)
    await this.addScreenshotToReport();
});

When('Preciono en receta {string}', async function(text) {
    var element = Selector('div.card-desc h3').withText(text).with({boundTestRun: testController});
    await testController.click(element)
    await this.addScreenshotToReport();
});

Then('Receta tiene canela y azucar rubia', async function() {
    var element = Selector('div.headerDivRecipe div.divRecipe p').with({boundTestRun: testController});
    await testController.expect(element.innerText).contains('canela');
    await testController.expect(element.innerText).contains('azúcar rubia');
});