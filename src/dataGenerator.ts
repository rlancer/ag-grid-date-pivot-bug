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

export interface BulkRowData {
  [key: string]: any;
}

const ACTIVITIES = ['Trading', 'Hedging', 'Market Making', 'Investment', 'Arbitrage'];
const CURRENCIES = ['USD', 'EUR', 'GBP', 'JPY', 'CHF', 'CAD', 'AUD'];
const PRODUCT_TYPES = ['Bond', 'Swap', 'Option', 'Future', 'Forward', 'Swaption'];
const STRATEGIES = ['Long', 'Short', 'Spread', 'Butterfly', 'Straddle', 'Strangle'];
const ENTITIES = ['Entity_A', 'Entity_B', 'Entity_C', 'Entity_D', 'Entity_E'];
const FUNDS = ['Fund_Alpha', 'Fund_Beta', 'Fund_Gamma', 'Fund_Delta', 'Fund_Epsilon'];
const CATEGORIES = ['Fixed Income', 'Rates', 'Credit', 'Equity', 'FX', 'Commodity'];

/**
 * Generate a random value based on seed
 */
function getRandomValue(seed: number, min: number, max: number): number {
  const rng = new SeededRandom(seed);
  return min + rng.next() * (max - min);
}

/**
 * Generate a random item from array
 */
function getRandomItem<T>(seed: number, array: T[]): T {
  const rng = new SeededRandom(seed);
  const index = Math.floor(rng.next() * array.length);
  return array[index];
}

/**
 * Generate a random date string
 */
function getRandomDate(seed: number): string {
  const rng = new SeededRandom(seed);
  const year = 2020 + Math.floor(rng.next() * 5); // 2020-2024
  const month = 1 + Math.floor(rng.next() * 12);
  const day = 1 + Math.floor(rng.next() * 28);
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

/**
 * Generate bulk data with 60k+ rows
 */
export function generateBulkData(numRows: number = 60000): BulkRowData[] {
  const data: BulkRowData[] = [];

  for (let i = 0; i < numRows; i++) {
    const seed = i + 1;

    data.push({
      // Core fields
      trade_id: `TRADE_${i + 1}`,
      prod_id: `PROD_${Math.floor(i / 10) + 1}`,

      // Book fields
      'Book.Activity': getRandomItem(seed * 2, ACTIVITIES),
      'Book.BeginLivePricing': `${String(9 + Math.floor(getRandomValue(seed * 52, 0, 8))).padStart(2, '0')}:${String(Math.floor(getRandomValue(seed * 53, 0, 60))).padStart(2, '0')}:00`,
      'Book.Category': getRandomItem(seed * 3, CATEGORIES),
      'Book.Code': `BOOK_${Math.floor(i / 100) + 1}`,
      'Book.DeltaHedgeFlag': getRandomItem(seed * 4, ['Y', 'N']),
      'Book.DominantCountry': getRandomItem(seed * 5, ['US', 'UK', 'JP', 'DE', 'FR']),
      'Book.Entity': getRandomItem(seed * 6, ENTITIES),
      'Book.Fund': getRandomItem(seed * 7, FUNDS),
      'Book.CountryRegion': getRandomItem(seed * 8, ['North America', 'Europe', 'Asia', 'LATAM']),
      'Book.Name': `Book_${Math.floor(i / 50) + 1}`,
      'Book.OTLivePxable': getRandomItem(seed * 9, ['Y', 'N']),
      'Book.RecapGroup': `RecapGroup_${Math.floor(i / 200) + 1}`,
      'Book.ReportingGroup': `ReportingGroup_${Math.floor(i / 150) + 1}`,
      'Book.RiskPod': `RiskPod_${Math.floor(i / 100) + 1}`,
      'Book.Strategy': getRandomItem(seed * 10, STRATEGIES),
      'Book.SubActivity': `SubActivity_${Math.floor(i / 300) + 1}`,
      'Book.SubCategory': `SubCategory_${Math.floor(i / 250) + 1}`,
      'Book.SubTheme': `SubTheme_${Math.floor(i / 400) + 1}`,
      'Book.Theme': `Theme_${Math.floor(i / 500) + 1}`,
      'Book.UnderlyingCommodity': getRandomItem(seed * 11, ['Gold', 'Oil', 'Gas', 'Corn', 'Wheat', 'N/A']),

      // Product fields
      'Product.adjusted_maturity_date': getRandomDate(seed * 12),
      'Product.adjusted_premium': getRandomValue(seed * 13, -10000, 10000),
      'Product.bbg_ticker': `BBG_${Math.floor(i / 20) + 1}`,
      'Product.security_cusip': `CUSIP${String(Math.floor(i / 30) + 1).padStart(6, '0')}`,
      'Product.executing_party': `Party_${Math.floor(i / 80) + 1}`,
      'Product.currency': getRandomItem(seed * 14, CURRENCIES),
      'Product.security_isin': `ISIN${String(Math.floor(i / 25) + 1).padStart(9, '0')}`,
      'Product.index_family': getRandomItem(seed * 15, ['SOFR', 'LIBOR', 'EURIBOR', 'SONIA', 'N/A']),
      'Product.index_series': getRandomValue(seed * 16, 1, 10),
      'Product.index_tenor': getRandomItem(seed * 17, ['1M', '3M', '6M', '1Y', '2Y', '5Y', '10Y']),
      'Product.maturity_date': getRandomDate(seed * 18),
      'Product.option_strike': getRandomValue(seed * 19, 50, 200),
      'Product.option_type': getRandomItem(seed * 20, ['Call', 'Put', 'N/A']),
      'Product.premium': getRandomValue(seed * 21, -50000, 50000),
      'Product.premium_currency': getRandomItem(seed * 22, CURRENCIES),
      'Product.premium_date': getRandomDate(seed * 23),
      'Product.processing_type': getRandomItem(seed * 24, ['Live', 'End of Day', 'Intraday']),
      'Product.category': getRandomItem(seed * 25, CATEGORIES),
      'Product.product_type': getRandomItem(seed * 26, PRODUCT_TYPES),
      'Product.security_default_ticker': `TICKER_${Math.floor(i / 15) + 1}`,
      'Product.trade_date': getRandomDate(seed * 27),
      'Product.trade_type': getRandomItem(seed * 28, ['Buy', 'Sell', 'Exercise', 'Assign']),
      'Product.underlier_info': `Underlier_${Math.floor(i / 60) + 1}`,

      // Measure fields - PL and amounts
      accrual_effect: getRandomValue(seed * 29, -10000, 10000),
      change_quote_close: getRandomValue(seed * 30, -5, 5),
      change_nominal: getRandomValue(seed * 31, -100000, 100000),
      quote_close: getRandomValue(seed * 32, 95, 105),
      end_nominal: getRandomValue(seed * 33, 1000000, 10000000),
      end_price: getRandomValue(seed * 34, 95, 105),
      end_quantity: getRandomValue(seed * 35, 1000, 100000),
      end_quote: getRandomValue(seed * 36, 95, 105),
      end_settlement_amount: getRandomValue(seed * 37, -100000, 100000),
      fx_pl_effect: getRandomValue(seed * 38, -5000, 5000),
      fx_pl_effect_close: getRandomValue(seed * 39, -5000, 5000),
      life_cycle_pl: getRandomValue(seed * 40, -10000, 10000),
      pl_base_after_close: getRandomValue(seed * 41, -20000, 20000),
      pl_base_ccy: getRandomValue(seed * 42, -50000, 50000),
      pl_base_close: getRandomValue(seed * 43, -30000, 30000),
      pl_close: getRandomValue(seed * 44, -25000, 25000),
      pl_base: getRandomValue(seed * 45, -40000, 40000),
      pl_latest: getRandomValue(seed * 46, -35000, 35000),
      start_nominal: getRandomValue(seed * 47, 1000000, 10000000),
      start_price: getRandomValue(seed * 48, 95, 105),
      start_quantity: getRandomValue(seed * 49, 1000, 100000),
      start_quote: getRandomValue(seed * 50, 95, 105),

      // Other fields
      has_strategy_position_changes: getRandomItem(seed * 51, ['Y', 'N']),
      trader: `Trader_${Math.floor(i / 500) + 1}`,
    });
  }

  return data;
}
