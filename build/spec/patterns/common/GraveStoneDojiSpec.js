"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const GraveStoneDoji_1 = __importDefault(require("../../../patterns/common/GraveStoneDoji"));
describe("GraveStoneDoji (common)", () => {
    it("default", () => {
        const trueInput = [
            { open: 30.1, high: 36.13, close: 30.13, low: 30.12 }
        ];
        const falseInput = [
            { open: 30.1, high: 30.11, close: 30.1, low: 30.09 }
        ];
        expect(GraveStoneDoji_1.default(trueInput)).toBeTrue();
        expect(GraveStoneDoji_1.default(falseInput)).toBeFalse();
    });
});
//# sourceMappingURL=GraveStoneDojiSpec.js.map