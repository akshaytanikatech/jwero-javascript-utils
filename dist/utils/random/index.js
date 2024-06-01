"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomInt = void 0;
/**
 * Generates a random integer up to a maximum value.
 * @param max - The maximum value.
 */
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};
exports.getRandomInt = getRandomInt;
