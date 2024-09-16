# Currency Exchange Rates Scraper

This project is a currency exchange rates scraper built with Node.js, TypeScript, Express.js, and Selenium. The scraper fetches exchange rates from a website and exposes a REST API to trigger the scraping and return the rates in JSON format.

> **Developed by [Centurion95](https://github.com/Centurion95)**


## Features

- **Web Scraping**: Uses Selenium to automate data extraction from a website.
- **REST API**: Provides a GET endpoint to run the scraper and fetch the data.
- **TypeScript Development**: Static typing for safer and more maintainable code.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Chrome

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Centurion95/currency-exchange-scraper.git
   ```

2. Navigate to the project directory:

   ```
   cd currency-exchange-scraper
   ```

3. Install the dependencies:

   ```
   npm install
   ```


## Usage

### Run in Development Mode

To run the server in development mode using `ts-node-dev`:

```
npm run dev
```

### Trigger the Scraper

The server exposes a GET endpoint to start the scraping:

- **Endpoint**: `/getExchangeRates`
- **Method**: GET

Example:

```
curl http://localhost:3000/getExchangeRates
```

### Response

The scraper returns a JSON object with the fetched exchange rate:

```
{
  "exchangeRate": "123.45"
}
```

### 404 Error

Any undefined route will return a 404 error with the following message:

```
{
  "error": "Route not found"
}
```

## Additional Configuration

### Constants File

The constants used in the scraper are defined in `src/constants.ts`.


## Available Scripts

- **`npm run dev`**: Runs the server in development mode using `ts-node-dev`.
- **`npm start`**: Compiles the TypeScript code and runs the application in production mode.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side applications.
- **TypeScript**: A statically typed superset of JavaScript.
- **Express.js**: A framework for building web APIs and applications.
- **Selenium**: A tool for automating web browsers.
- **Chrome**: The browser used for scraping.

## Project Structure

```
currency-exchange-scraper/
│
├── src/
│   ├── scraper.ts        # Main scraping script
│   ├── server.ts         # Express.js server
│   ├── constants.ts      # Constants file
│   ├── ...
│
├── package.json          # Project configuration and dependencies
├── tsconfig.json         # TypeScript configuration
├── README.md             # This file
├── .gitignore            # Files and folders ignored by Git
└── ...
```

## TODO

- Add support for all currencies from the current exchange house.
- Integrate URLs of other exchange houses for a more comprehensive data set.
- Improve the JSON response structure to include detailed and well-organized data.
- Implement caching to reduce the load on the scraped websites.
- Add error handling and logging for better debugging and monitoring.
- Create a user interface to display exchange rates in a more user-friendly manner.
- Schedule the scraper to run periodically using a cron job or similar mechanism.


## Contributing

Contributions are welcome. Please open an issue or a pull request for any improvements or fixes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.