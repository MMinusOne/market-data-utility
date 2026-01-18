interface FetchOptionsBase {
  exchange: string;
  symbol: string;
  timeframe: string;
  apiKey?: string;
  apiSecret?: string;
}

interface FetchOptionsWithCandleAmount extends FetchOptionsBase {
  candle_amount: number;
}

interface FetchOptionsWithDate extends FetchOptionsBase {
  start_date: number;
  end_date: number;
}

export type FetchOptions = FetchOptionsWithCandleAmount | FetchOptionsWithDate;
