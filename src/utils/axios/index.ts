/**
 * Extracts the error message from an Axios error object.
 * @param error - The Axios error object.
 */
export const getAxiosError = (error: any): any => {
  return (error && error.response && error.response.data) || error;
};
