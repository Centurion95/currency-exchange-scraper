import { Builder, By, until } from 'selenium-webdriver';
import { WEB_URL_CAMBIOSCHACO } from './constants';

export async function getExchangeRates(): Promise<{ exchangeRate: string }> {
  let driver = await new Builder().forBrowser('chrome').build();
  let exchangeRate: string;

  try {
    await driver.get(WEB_URL_CAMBIOSCHACO);

    const element = await driver.wait(until.elementLocated(By.xpath('/html/body/div[2]/section/div[2]/div[1]/div[2]/div[5]/table/tbody/tr[1]/td[2]/span')), 10000);
    exchangeRate = await element.getText();

    return { exchangeRate };
  } finally {
    await driver.quit();
  }
}