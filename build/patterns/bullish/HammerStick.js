"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../utilities");
exports.default = (candles) => {
    const open = candles[candles.length - 1].open;
    const close = candles[candles.length - 1].close;
    const high = candles[candles.length - 1].high;
    const low = candles[candles.length - 1].low;
    return (close > open &&
        utilities_1.isApproximateEqual(close - high, high - low) &&
        close - open <= 2 * (open - low));
};
//# sourceMappingURL=HammerStick.js.map