/**
 * Returns the current time in seconds.
 */
export declare const getTimeInSeconds: () => number;
/**
 * Returns the current time in milliseconds.
 */
export declare const getTimeInMilliSeconds: () => number;
/**
 * Returns the formatted date as provided in the parameter
 */
type FormatDateOptions = {
    useUTC?: boolean;
};
export declare const formatDate: (date: Date, format: string, options?: FormatDateOptions) => string;
export {};
