/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const arr = [];
    // checks if array is empty
    if (numbers.length === 0) {
        return [];
        // checks if array has 1 element, list number twice in new list
    } else if (numbers.length === 1) {
        return numbers.concat(numbers);

        // return new array containing just first and last number
    } else {
        arr[0] = numbers[0];
        arr[1] = numbers[numbers.length - 1];
        return arr;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledNumbers = numbers.map((num: number) => num * 3);
    return tripledNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */

// strs -> ints
export function stringsToIntegers(numbers: string[]): number[] {
    const integers = numbers.map((str: string) => {
        const parsed_str = parseInt(str);
        return isNaN(parsed_str) ? 0 : parsed_str;
    });
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numbers = amounts.map((str: string) => {
        // check for dollar
        if (str[0] === "$") {
            str = str.substring(1);
        }
        // parse string
        const parsed_str = parseInt(str);
        // if string is NaN, return 0, otherwise, return it.
        return isNaN(parsed_str) ? 0 : parsed_str;
    });
    return numbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    // get rid of words ending in "?"
    const filteredMessages = messages.filter(
        (str: string) => str[str.length - 1] !== "?"
    );
    // map through new array, exclamation
    const exclamation = filteredMessages.map((str: string) => {
        if (str[str.length - 1] === "!") {
            return str.toUpperCase();
        }
        return str;
    });
    return exclamation;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    // filter out words > 4, return the length of the array.
    return words.filter((str: string) => str.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    // just use built in "every" method
    return colors.every((str: string) => {
        return str === "red" || str === "green" || str === "blue";
    });
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    // check if array is empty
    if (addends.length === 0) {
        return "0=0";
    }
    // calculate sum using reduce.
    const sum = addends.reduce((cur: number, num: number) => cur + num, 0);
    // use join to combine string with plus signs in between each number.
    const new_str = addends.join("+");
    //new_str will look like 1+2+3+4
    return sum.toString() + "=" + new_str;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    //get index of first negative #
    const first_negative = values.findIndex((num) => num < 0);
    //check if there isn't a negative.
    if (first_negative === -1) {
        const sum = values.reduce((cur: number, num: number) => cur + num, 0);
        return [...values, sum];
    }
    //if there is a negative, get the array from start-first_negative,
    // then use reduce to find the sum of that.
    const sum = values
        .slice(0, first_negative)
        .reduce((cur: number, num: number) => cur + num, 0);

    // think of it as 3 parts, up to first negative, after (sum), and then after sum.
    return [
        ...values.slice(0, first_negative + 1),
        sum,
        ...values.slice(first_negative + 1)
    ];
}
