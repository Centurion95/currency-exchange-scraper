import { Builder, By, until } from 'selenium-webdriver';
import { WEB_URL_CAMBIOSCHACO } from './constants';

export async function getExchangeRates(): Promise<{ currency: string; buy: string; sell: string }[]> {

  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get(WEB_URL_CAMBIOSCHACO);

    // Espera a que la tabla esté cargada
    await driver.wait(until.elementLocated(By.xpath('//table[@class="table table-hover cotiz-tabla"]')), 10000);

    // Obtiene las filas de las primeras 4 monedas
    let currencyRows = await driver.findElements(By.xpath('//tbody[@id="main-exchange-content"]/tr[position() <= 4]'));

    // Inicializa el array para las monedas
    let currencies = [];

    // Itera sobre las filas y extrae la información
    for (let row of currencyRows) {
      let name = await row.findElement(By.xpath('.//td[1]/a')).getText();
      let buyValue = await row.findElement(By.xpath('.//td[2]/span')).getText();
      let sellValue = await row.findElement(By.xpath('.//td[3]/span')).getText();

      // Crea un objeto para la moneda y añádelo al array
      currencies.push({
        currency: name,
        buy: buyValue,
        sell: sellValue
      });
    }

    return currencies;
  } finally {
    await driver.quit();
  }
}