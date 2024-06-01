/**
 * Checks if a variable is an array with values.
 * @param arr - The variable to check.
 */
export const isArrayWithValues = (arr: any[]): boolean => {
  return arr && Array.isArray(arr) && arr.length > 0;
};
/**
 * Checks if a variable is an array.
 * @param arr - The variable to check.
 */
export const isArray = (arr: any[]): boolean => {
  return arr && Array.isArray(arr);
};
