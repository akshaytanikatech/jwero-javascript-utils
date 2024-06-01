
/**
 * Checks if a variable is an object with values.
 * @param obj - The variable to check.
 */
export const isObjWithValues = (obj: object): boolean => {
  // ... existing code
  return obj && Object.keys(obj).length > 0 && !Array.isArray(obj);
};
