import ccxt, { type ConstructorArgs,  typeExchange } from "ccxt";
import checkExchangeExists from "./checkExchangeExists";

/**
 * Returns the Exchange instance of an exchange_name
 */
export default function getExchange(
  exchange_name: string,
  options?: ConstructorArgs,
): Exchange {
  checkExchangeExists(exchange_name, true);
  //@ts-ignore
  const exchange: Exchange = new ccxt[exchange_name](options);

  return exchange;
}
