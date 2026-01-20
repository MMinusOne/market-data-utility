import { fetch } from "./utilities/fetch";

export * from "./types";
export { fetch } from "./utilities/fetch";

fetch({
  candle_amount: 6,
  exchange_name: "binance",
  symbol: "ETHUSDT",
  timeframe: "1h",
}).then(console.log);
