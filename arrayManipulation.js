function processArray(numbers) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        if (number % 2 === 0) {
            result.push(number * number);
        } else {
            result.push(number * 3);
        }
    }

    return result;
}

function formatArrayStrings(strings, numbers) {
    let formattedStrings = [];

    for (let i = 0; i < strings.length; i++) {
        let string = strings[i];
        let number = numbers[i];

        if (number % 2 === 0) {
            formattedStrings.push(string.toUpperCase());
        } else {
            formattedStrings.push(string.toLowerCase());
        }
    }

    return formattedStrings;
}

let inputStrings = ["Hi", "Claire", "Food", "Movie", "Music"];
let inputNumbers = [34, 2, 9, 4, 8];
let processedArray = processArray(inputNumbers);
let formattedStrings = formatArrayStrings(inputStrings, processedArray);
console.log(formattedStrings);
