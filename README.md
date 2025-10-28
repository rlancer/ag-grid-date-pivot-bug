# AG Grid Historical Position P&L Demo

A React TypeScript demo application showcasing AG Grid's pivot functionality for analyzing historical position P&L data.

## Features

- **Date Pivoting**: Automatically pivots closing prices and P&L by date columns
- **Deterministic Data Generation**: Generates quasi-random but consistent sample data based on date seeds
- **Date Range Filtering**: Interactive date pickers to filter data by date range
- **P&L Visualization**: Color-coded P&L values (green for positive, red for negative)
- **10 Sample Tickers**: Pre-configured with AAPL, GOOGL, MSFT, AMZN, TSLA, META, NVDA, JPM, BAC, WMT

## Tech Stack

- **React** 18.2.0
- **TypeScript** 4.4.4
- **AG Grid Enterprise** 34.2.0
- **AG Grid React** 34.2.0

## Data Structure

Each data point contains:
- `ticker`: Stock ticker symbol
- `price`: Closing price (deterministic based on date)
- `date`: Trading date (ISO format)
- `pnl`: Profit/Loss calculated as the difference from previous day's price

## How It Works

### Deterministic Data Generation

The app uses a seeded random number generator (Linear Congruential Generator) to create deterministic prices. The seed is derived from both the ticker name and the date, ensuring:

1. Same ticker + same date = same price (always)
2. Different dates or tickers produce different but reproducible prices
3. Weekend dates are automatically skipped

### Pivot Configuration

The grid is configured with:
- **Pivot Column**: `date` field
- **Row Group**: `ticker` field
- **Aggregation Functions**:
  - `price`: Uses 'last' aggregation (shows closing price)
  - `pnl`: Uses 'sum' aggregation (totals P&L)

## Running the App

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will be available at `http://localhost:3000`

## File Structure

```
src/
  ├── App.tsx              # Main component with AG Grid configuration
  ├── dataGenerator.ts     # Deterministic data generation logic
  ├── styles.css          # Application styles
  └── index.tsx           # React entry point
```

## Key Components

### dataGenerator.ts

- `SeededRandom`: LCG-based pseudo-random number generator
- `generatePositionData()`: Creates position data for a date range
- `getPriceForTickerAndDate()`: Generates deterministic prices ($50-$500)
- `calculatePnL()`: Computes daily P&L as price difference

### App.tsx

- Date range state management with React hooks
- AG Grid configuration with pivot mode enabled
- Column definitions with aggregation functions
- Value formatters for currency display
- Cell class rules for P&L color coding

## License

Created with CodeSandbox
