"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../utilities");
exports.default = (candles) => {
    const open = candles[candles.length - 1].open;
    const close = candles[candles.length - 1].close;
    const high = candles[candles.length - 1].high;
    const low = candles[candles.length - 1].low;
    const isOpenEqualsClose = utilities_1.approximateEqual(open, close);
    const isHighEqualsOpen = utilities_1.approximateEqual(open, high);
    const isLowEqualsClose = utilities_1.approximateEqual(close, low);
    return isOpenEqualsClose && isHighEqualsOpen && !isLowEqualsClose;
};
//# sourceMappingURL=DragonFlyDoji.js.map