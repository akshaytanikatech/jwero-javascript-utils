/**
 * Returns the current time in seconds.
 */
export const getTimeInSeconds = (): number =>
  Math.floor(new Date().getTime() / 1000);

/**
 * Returns the current time in milliseconds.
 */
export const getTimeInMilliSeconds = (): number =>
  Math.floor(new Date().getTime());

/**
 * The function checks if a given value is a valid date.
 * @param {date} d - The parameter "d" is of type "date".
 * @returns a boolean value.
 */
export function isValidDate(d: date) {
  return d instanceof Date && !isNaN(d);
}

function isValidMySQLDate(dateStr: string) {
  const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
  return regex.test(dateStr);
}

/**
 * The function `mysqlDateToJS` converts a MySQL date string to a JavaScript Date object.
 * @param {date} date - The `date` parameter is the input date that needs to be converted. It can be
 * either a string representation of a date in MySQL format (YYYY-MM-DD HH:MM:SS) or a valid JavaScript
 * Date object.
 * @returns the converted JavaScript Date object.
 */
export const mysqlDateToJS = (date: date) => {
  let newDate;
  if (typeof date === "string") {
    if (isValidMySQLDate(date)) {
      let jsDate = date + "Z";
      newDate = new Date(jsDate);
    } else if (isValidDate(date)) {
      newDate = new Date(date);
    }
  }
  return newDate;
};

/**
 * Returns the formatted date as provided in the parameter
 */

type FormatDateOptions = {
  useUTC?: boolean;
};

export const formatDate = (
  date: Date,
  format: string,
  options?: FormatDateOptions
): string => {
  let { useUTC = false } = options || {};
  const monthFullNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthsNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Use date or UTC date based on the useUTC parameter
  const year = useUTC ? date.getUTCFullYear() : date.getFullYear();
  const month = useUTC ? date.getUTCMonth() + 1 : date.getMonth() + 1;
  const day = useUTC ? date.getUTCDate() : date.getDate();
  const hours24 = useUTC ? date.getUTCHours() : date.getHours();
  const hours12 = hours24 % 12 || 12; // Convert to 12-hour format
  const minutes = useUTC ? date.getUTCMinutes() : date.getMinutes();
  const seconds = useUTC ? date.getUTCSeconds() : date.getSeconds();
  const ampm = hours24 < 12 ? "AM" : "PM"; // Determine AM/PM

  const formatObj = {
    YYYY: `${year}`,
    MM: `${month < 10 ? "0" + month : month}`,
    M: `${month}`,
    MMMM: `${monthFullNames[month - 1]}`,
    MMM: `${monthsNames[month - 1]}`,
    DD: `${day < 10 ? "0" + day : day}`,
    D: `${day}`,
    HH: `${hours24 < 10 ? "0" + hours24 : hours24}`,
    H: `${hours24}`,
    hh: `${hours12 < 10 ? "0" + hours12 : hours12}`,
    h: `${hours12}`,
    mm: `${minutes < 10 ? "0" + minutes : minutes}`,
    m: `${minutes}`,
    ss: `${seconds < 10 ? "0" + seconds : seconds}`,
    s: `${seconds}`,
    A: `${ampm}`,
    P: `${ampm.toLowerCase()}`,
  };

  return format.replace(
    /YYYY|MMMM|MMM|MM|M|DD|D|HH|H|hh|h|mm|m|ss|s|A|P/g,
    (match) => formatObj[match as keyof typeof formatObj]
  );
};
