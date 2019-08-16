

// 1.Reverse a string
// Write a function that takes a string as input and returns the string reversed
// i.e. “Hello” will be returned as “olleH”

function reverseString(stringToBeReversed){
    stringToBeReversed = prompt("What string do you want reversed?");
    let nowArray = convertStringToArray(stringToBeReversed);
    let backwardsArray = reverseArray(nowArray);
    let reversedString = compressArray(backwardsArray);
    console.log("Your reversed string is " + reversedString);
}

function convertStringToArray(soonToBeArray){
    let initialArray = soonToBeArray.split("");
    return initialArray;
}

function reverseArray(initialArray){
    let reversedArray = [];

    for (let i = 0; i < initialArray.length; i++){
        indexElementFromBackOfArray = initialArray[initialArray.length - 1 - i];
        reversedArray.push(indexElementFromBackOfArray);
    }

    return reversedArray;
}

function compressArray(backwardsArray){
    let convertedString = backwardsArray.join("");
    return convertedString;
}


// 2. Capitalize letter
// write a function that takes the string parameter being passed and capitalize the first letter of each word. Words can be separated by only one space.
// i.e "hello world" to "Hello World"

/*

Capitalize first letter in string

Find spaces in string

move to character after string

capitalize that character

*/

function identifyFirstCharacterAfterSpace(){

}

function capitalizeFirstLetterOfWords() {
    let stringToBeCapitalized = prompt("what words do you want capitalized?");
    let stringWithFirstLetterCapitalized = capitalizeFirstLetterInString(stringToBeCapitalized);

    if(stringToBeCapitalized.includes(" ")) {
        let arrayBeforeIdentifyingSpace = convertStringToArray(stringToBeCapitalized);
        findSpaceCharacterInArray(arrayBeforeIdentifyingSpace);

        return capitalizedString;
    }
    else {
        console.log(stringWithFirstLetterCapitalized);
    }

}

function findSpaceCharactersInArray(arrayWithSpaceCharacter){
    
    let indexOfSpaceCharacter = arrayWithSpaceCharacter.indexOf(" ");

    console.log(indexOfSpaceCharacter);

    // for(let i = 0; arrayWithSpaceCharacter.length; ){

    // }
}


// function findSpaceCharacterInString(stringToBeCapitalized){

//     if stringToBeCapitalized.includes(" "){

//     }
//     else {
//        console.log("there is no need for capitalization");
//     }

//     for(let i = 0; i <= stringToBeCapitalized.length; i++) {
//         let characterAfterSpace = stringToBeCapitalized.charAt(stringToBeCapitalized.includes(" "));
//         console.log(characterAfterSpace);
//     }

// }

// function capitalizeLetterAfterSpace() {

// }


// 3. Compress a string of characters
// for example, input of "aaabbbbcccccc" becomes "3a4b5c"




// 4. Palindrome
// write a function that takes an input and checks to see if it is a palindrome and reports the result


