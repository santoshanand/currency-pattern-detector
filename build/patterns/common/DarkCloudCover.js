"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (candles) => {
    const firstOpen = candles[candles.length - 2].open;
    const firstClose = candles[candles.length - 2].close;
    const firstHigh = candles[candles.length - 2].high;
    const secondOpen = candles[candles.length - 1].open;
    const secondClose = candles[candles.length - 1].close;
    const firstdayMidpoint = (firstClose + firstOpen) / 2;
    const isFirstBullish = firstClose > firstOpen;
    const isSecondBearish = secondClose < secondOpen;
    const isDarkCloudPattern = secondOpen > firstHigh &&
        secondClose < firstdayMidpoint &&
        secondClose > firstOpen;
    return isFirstBullish && isSecondBearish && isDarkCloudPattern;
};
//# sourceMappingURL=DarkCloudCover.js.map