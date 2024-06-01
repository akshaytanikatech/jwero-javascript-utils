/**
 * Checks if a text contains a search text.
 * @param text - The text to search in.
 * @param searchText - The text to search for.
 */
export const containsText = (text: string, searchText: string): boolean => {
  // ... existing code
  return text?.toLowerCase()?.indexOf(searchText?.toLowerCase()) > -1;
};

/**
 * Capitalizes the first letter of a string.
 * @param string - The string to capitalize.
 */
export const capitalizeFirstLetter = (string: string): string => {
  return string
    ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    : string;
};
