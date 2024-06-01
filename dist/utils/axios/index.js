"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAxiosError = void 0;
/**
 * Extracts the error message from an Axios error object.
 * @param error - The Axios error object.
 */
const getAxiosError = (error) => {
    return (error && error.response && error.response.data) || error;
};
exports.getAxiosError = getAxiosError;
