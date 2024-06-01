"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = exports.isArrayWithValues = void 0;
/**
 * Checks if a variable is an array with values.
 * @param arr - The variable to check.
 */
const isArrayWithValues = (arr) => {
    return arr && Array.isArray(arr) && arr.length > 0;
};
exports.isArrayWithValues = isArrayWithValues;
/**
 * Checks if a variable is an array.
 * @param arr - The variable to check.
 */
const isArray = (arr) => {
    return arr && Array.isArray(arr);
};
exports.isArray = isArray;
