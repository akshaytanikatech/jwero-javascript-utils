# Jwero 🚀 JavaScript Utilities

A collection of utility functions for Node.js, React, and React Native.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Utility Functions](#utility-functions)
  - [Time](#time/date)
  - [String](#string)
  - [Axios](#axios)
  - [Array](#array)
  - [Object](#object)
  - [Number](#number)
  - [Random](#random)
  - [Text](#text)

## Installation

```
npm install jwero-javascript-utils
```

Usage

```
import { getTimeInSeconds, getRandomString } from 'jwero-javascript-utils';
```

# Utility Functions

## Time/Date

```
getTimeInSeconds()
Returns the current time in seconds.
```

```
getTimeInMilliSeconds()
Returns the current time in milliseconds.
```

```javascript.
formatDate(date: Date, format: String, options?: FormatDateOptions)
Formats a date according to the given format string and options.
```

```
mysqlDateToJS()

The function `mysqlDateToJS` converts a MySQL date string to a JavaScript Date object.
@param {date} date - The `date` parameter is the input date that needs to be converted. It can be
either a string representation of a date in MySQL format (YYYY-MM-DD HH:MM:SS) or a valid JavaScript
Date object.
@returns the converted JavaScript Date object.
```

```
isValidDate()

 The function checks if a given value is a valid date.
 @param {date} d - The parameter "d" is of type "date".
 @returns a boolean value.

```

## String

```
getRandomString(length: number)
Generates a random string of a given length.
```

## Axios

```
getAxiosError(error: any)
Extracts the error message from an Axios error object.
```

## Array

```
isArrayWithValues(arr: any[])
Checks if a variable is an array with values.
```

## Object

```
isObjWithValues(obj: object)
Checks if a variable is an object with values.
```

## Number

```
validateNumber(num: any)
Validates a number and returns a valid number.
```

## Random

```
getRandomInt(max: number)
Generates a random integer up to a maximum value.
```

```
getRandomId()
Generates a random ID.
```

## Text

```
containsText(text: string, searchText: string)
Checks if a text contains a search text.
```

```
capitalizeFirstLetter(string: string)
Capitalizes the first letter of a string.
```
