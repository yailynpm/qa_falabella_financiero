const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;

Given('Abro pagina de Google', async function() {
    await testController.navigateTo('https://www.google.cl');
});

When('Escribo la palabra {string}', async function(text) {
    var input = Selector('.gLFyf').with({boundTestRun: testController});
    await testController.typeText(input, text);
    //await this.addScreenshotToReport();
});

When('Preciono {string} para buscar', async function(text) {
    await testController.pressKey(text);
});

When('Preciono en {string} del listado', async function(text) {
    var element = Selector('span').withText(text).with({boundTestRun: testController});
    await testController.click(element)
    //await this.addScreenshotToReport();
});

When('Preciono en {string}', async function(text) {
    var element = Selector('a.ab_button').withText(text).with({boundTestRun: testController});
    await testController.click(element)
    //await this.addScreenshotToReport();
});

When('Preciono en Recetas del tottus', async function() {
    var element = Selector('#new_tottus_nav_cliente_recetas').with({boundTestRun: testController});
    await testController.click(element)
    //await this.addScreenshotToReport();
});

When('Preciono en dificultad alta', async function() {
    var element = Selector('#myDIV button.btnfilter').withAttribute('value', '3').with({boundTestRun: testController});
    await testController.click(element)
    //await this.addScreenshotToReport();
});

When('Preciono en receta {string}', async function(text) {
    var element = Selector('div').withAttribute('onclick', "seeRecipe('corona-de-rollitos-de-canela_26');").with({boundTestRun: testController});
    await testController.click(element)
    //await this.addScreenshotToReport();
});

Then('Receta tiene canela y azucar rubia', async function() {
    var elementCanela = Selector('p').withText(/^.+canela.+$/).with({boundTestRun: testController});
    var elementArubia = Selector('p').withText(/^.+azúcar rubia.+$/).with({boundTestRun: testController});
    await testController.expect(elementCanela.innerText).contains('canela');
    await testController.expect(elementArubia.innerText).contains('azúcar rubia');
});