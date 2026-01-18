import { exchanges } from "ccxt";

/**
 * Returns true if the exchange is valid in CCXT, throws if it should throw
 */
export default function checkExchangeExists(
  exchange_name: string,
  should_error: boolean = false,
): boolean {
  //@ts-ignore
  if (exchanges[exchange_name]) {
    return true;
  } else if (should_error) {
    throw "This exchange does not exist.";
  }

  return false;
}
