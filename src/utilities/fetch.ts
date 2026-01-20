import ms from "ms";
import { type FetchOptions } from "../types";
import getExchange from "../utils/getExchange";

const LIMIT = 1000;

export async function fetch(fetchOptions: FetchOptions) {
  const exchange = getExchange(
    fetchOptions.exchange_name,
    fetchOptions.exchange_config,
  );

  return await new Promise(async (resolve, reject) => {
    try {
      const results = [];

      const millisecondTimeframe = ms(fetchOptions.timeframe);
      const today = new Date();
      let startDate =
        today.getTime() - fetchOptions.candle_amount * millisecondTimeframe;

      while (results.length < fetchOptions.candle_amount) {
        const ohlcv = await exchange.fetchOHLCV(
          fetchOptions.symbol,
          fetchOptions.timeframe,
          startDate,
          LIMIT,
        );

        if (!ohlcv || ohlcv.length === 0) {
          break;
        }

        results.push(...ohlcv);

        startDate = ohlcv[ohlcv.length - 1][0] + millisecondTimeframe;

        if (ohlcv.length < LIMIT) {
          break;
        }
      }

      const finalResults = results.slice(-fetchOptions.candle_amount);
      resolve(finalResults);
    } catch (error) {
      reject(error);
    }
  });
}
