import { type ConstructorArgs } from "ccxt";

export interface FetchOptions {
  exchange_name: string;
  symbol: string;
  timeframe: string;
  exchange_config?: ConstructorArgs;
  candle_amount: number;
}
