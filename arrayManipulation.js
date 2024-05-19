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

let inputArray = [34, 2, 9, 4, 8];
let processedArray = processArray(inputArray);
console.log(processedArray);