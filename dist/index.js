"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
// Importing all utility functions
__exportStar(require("./utils/date"), exports);
__exportStar(require("./utils/string"), exports);
__exportStar(require("./utils/axios"), exports);
__exportStar(require("./utils/array"), exports);
__exportStar(require("./utils/object"), exports);
__exportStar(require("./utils/number"), exports);
__exportStar(require("./utils/random"), exports);
__exportStar(require("./utils/text"), exports);
/**
 * Adds two numbers.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of a and b.
 */
function add(a, b) {
    return a + b;
}
exports.add = add;
