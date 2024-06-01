/**
 * Generates a random integer up to a maximum value.
 * @param max - The maximum value.
 */
export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};
