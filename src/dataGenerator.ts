// Deterministic random number generator using seed
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  next(): number {
    // Linear Congruential Generator
    this.seed = (this.seed * 1103515245 + 12345) % 2147483648;
    return this.seed / 2147483648;
  }
}

export interface PositionData {
  ticker: string;
  price: number;
  date: string;
  pnl: number;
}

const TICKERS = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA', 'META', 'NVDA', 'JPM', 'BAC', 'WMT'];

/**
 * Generate deterministic price data based on date
 * Each day has a fixed seed derived from the date
 */
function getPriceForTickerAndDate(ticker: string, date: Date): number {
  // Create a seed from the ticker name and date
  const tickerSeed = ticker.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const dateSeed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  const seed = tickerSeed * dateSeed;

  const rng = new SeededRandom(seed);

  // Generate base price between $50 and $500
  const basePrice = 50 + rng.next() * 450;

  return Math.round(basePrice * 100) / 100;
}

/**
 * Calculate P&L as difference from previous day's price
 */
function calculatePnL(ticker: string, currentDate: Date, currentPrice: number): number {
  const previousDate = new Date(currentDate);
  previousDate.setDate(previousDate.getDate() - 1);

  const previousPrice = getPriceForTickerAndDate(ticker, previousDate);
  const pnl = currentPrice - previousPrice;

  return Math.round(pnl * 100) / 100;
}

/**
 * Generate sample data for a date range
 */
export function generatePositionData(startDate: Date, endDate: Date): PositionData[] {
  const data: PositionData[] = [];

  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    // Skip weekends
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      TICKERS.forEach(ticker => {
        const price = getPriceForTickerAndDate(ticker, currentDate);
        const pnl = calculatePnL(ticker, currentDate, price);

        data.push({
          ticker,
          price,
          date: currentDate.toISOString().split('T')[0],
          pnl
        });
      });
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return data;
}

/**
 * Get default date range (last 30 business days)
 */
export function getDefaultDateRange(): { startDate: Date; endDate: Date } {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 60); // Go back ~60 days to get ~30 business days

  return { startDate, endDate };
}
