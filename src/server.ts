import express from 'express';
import { getExchangeRates } from './scraper';
import { PORT } from './constants';

const app = express();
const port = PORT || 3000;

app.get('/getExchangeRates', async (req, res) => {
  try {
    const result = await getExchangeRates();
    res.json(result);
  } catch (error) {
    res.status(500).send('Error al ejecutar el scraper: ' + (error instanceof Error ? error.message : 'Error desconocido'));
  }
});

app.get('*', async (req, res) => {
  res.status(404).send('Error 404 not found');
});

app.listen(port, () => {
  console.log(`Servidor escuchando, prueba http://localhost:${port}/getExchangeRates`);
});