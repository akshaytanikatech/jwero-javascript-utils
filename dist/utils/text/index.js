"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeFirstLetter = exports.containsText = void 0;
/**
 * Checks if a text contains a search text.
 * @param text - The text to search in.
 * @param searchText - The text to search for.
 */
const containsText = (text, searchText) => {
    var _a;
    // ... existing code
    return ((_a = text === null || text === void 0 ? void 0 : text.toLowerCase()) === null || _a === void 0 ? void 0 : _a.indexOf(searchText === null || searchText === void 0 ? void 0 : searchText.toLowerCase())) > -1;
};
exports.containsText = containsText;
/**
 * Capitalizes the first letter of a string.
 * @param string - The string to capitalize.
 */
const capitalizeFirstLetter = (string) => {
    return string
        ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
        : string;
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
