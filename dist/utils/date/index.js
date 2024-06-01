"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.getTimeInMilliSeconds = exports.getTimeInSeconds = void 0;
/**
 * Returns the current time in seconds.
 */
const getTimeInSeconds = () => Math.floor(new Date().getTime() / 1000);
exports.getTimeInSeconds = getTimeInSeconds;
/**
 * Returns the current time in milliseconds.
 */
const getTimeInMilliSeconds = () => Math.floor(new Date().getTime());
exports.getTimeInMilliSeconds = getTimeInMilliSeconds;
const formatDate = (date, format, options) => {
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
    return format.replace(/YYYY|MMMM|MMM|MM|M|DD|D|HH|H|hh|h|mm|m|ss|s|A|P/g, (match) => formatObj[match]);
};
exports.formatDate = formatDate;
