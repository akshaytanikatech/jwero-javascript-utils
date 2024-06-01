// Importing all utility functions
export * from "./utils/date";
export * from "./utils/string";
export * from "./utils/axios";
export * from "./utils/array";
export * from "./utils/object";
export * from "./utils/number";
export * from "./utils/random";
export * from "./utils/text";

/**
 * Adds two numbers.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of a and b.
 */
export function add(a: number, b: number): number {
  return a + b;
}
