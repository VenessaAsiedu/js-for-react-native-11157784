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

function createUserProfiles(names, modifiedNames) {
    let userProfiles = [];
    let id = 1;

    // Iterate over names and modifiedNames arrays simultaneously
    for (let i = 0; i < names.length && i < modifiedNames.length; i++) {
        let originalName = names[i];
        let modifiedName = modifiedNames[i];

        // Create a user profile object
        let userProfile = {
            originalName: originalName,
            modifiedName: modifiedName,
            id: id++
        };

        // Push the user profile object into the array
        userProfiles.push(userProfile);
    }

    // Return the array of user profiles
    return userProfiles;
}

// Exporting the function to make it accessible from other files
module.exports = {
    createUserProfiles: createUserProfiles
};