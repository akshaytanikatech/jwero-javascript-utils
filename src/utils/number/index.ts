/**
 * Validates a number and returns a valid number.
 * @param num - The number to validate.
 */
export const validateNumber = (num: any): number => {
  if (typeof num === "undefined" || num === null) {
    return 0;
  } else if (typeof num === "string" && num.trim() === "") {
    return 0;
  } else {
    const parsedNum = Number(num);
    if (isNaN(parsedNum) || !isFinite(parsedNum)) {
      return 0;
    } else {
      return parsedNum;
    }
  }
};
