import { ICandle } from "../../types";
import { isApproximateEqual } from "../../utilities";

export default (candles: ICandle[]): boolean => {
  const open = candles[candles.length - 1].open;
  const close = candles[candles.length - 1].close;
  const high = candles[candles.length - 1].high;
  const low = candles[candles.length - 1].low;

  return (
    close > open &&
    isApproximateEqual(close - high, high - low) &&
    close - open <= 2 * (open - low)
  );
};
