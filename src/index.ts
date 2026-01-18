import { fetch } from "./utilities/fetch";

export * from "./types";
export { fetch } from "./utilities/fetch";

fetch({
  exchange: "hi",
  candle_amount: 1000,
  symbol: "hello",
  timeframe: "1h",
});
