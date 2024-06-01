"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjWithValues = void 0;
/**
 * Checks if a variable is an object with values.
 * @param obj - The variable to check.
 */
const isObjWithValues = (obj) => {
    // ... existing code
    return obj && Object.keys(obj).length > 0 && !Array.isArray(obj);
};
exports.isObjWithValues = isObjWithValues;
