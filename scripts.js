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

function capitalizeFirstLetterOfEachWord(initialString){
    initialString = prompt("What is the phrase?");
    let initialArray = convertStringToArrayWithoutSpace(initialString);
    let capitalizedArray = capitalizeFirstLetterOfEachArrayIndex(initialArray);
    let newString = returnArrayBackToString(capitalizedArray);
    console.log(newString);
}

function convertStringToArrayWithoutSpace(initialString){
    let initialArray = initialString.split(" ");
    return initialArray;
}

function capitalizeFirstLetterOfEachArrayIndex(initialArray){
    let combinedParts = [];

    for(let i = 0; i < initialArray.length; i++){
        let firstLetter = initialArray[i].charAt(0).toUpperCase();
        let secondSectionOfWord = initialArray[i].slice(1);
        let capitalizedArray = firstLetter + secondSectionOfWord;

        combinedParts.push(capitalizedArray);
    }
    return combinedParts;
}

function returnArrayBackToString(capitalizedArray){
    let newString = capitalizedArray.join(" ")
    return newString;
}


// 3. Compress a string of characters
// for example, input of "aaabbbbcccccc" becomes "3a4b5c"

function compressString(stringToBeCompressed) {
    // stringToBeCompressed = prompt("What can I compress for you?");
    countSequentialClones(stringToBeCompressed);

}

function countSequentialClones(stringWhereInstancesAreCounted) {

    let compressedLetters = [];

    for (let i = 0; i < stringWhereInstancesAreCounted.length; i++) {
        let count;

        while(stringWhereInstancesAreCounted[i] == stringWhereInstancesAreCounted[i + 1]) {
            count++;
            console.log(count);
        }

        if (stringWhereInstancesAreCounted[i] == stringWhereInstancesAreCounted[i + 1]) {
            count++;
            compressedLetters.push(count + i);
        }
        else {
            count = 1;
            compressedLetters.push(count + i);
        }
    }
    console.log(compressedLetters);
}

// compressString("aaabbc");




// 4. Palindrome
// write a function that takes an input and checks to see if it is a palindrome and reports the result

/*
LOGIC SEQUENCE
grab value at str[0], compare to value at str[str.length - 1];

if they are equal, check [1] to str.length - 1]

str.charAt(stringToPalindromeCheck.length - i - 1)

*/

function palindromeCheck(stringToPalindromeCheck){
    // for(let i = 0; i === stringToPalindromeCheck.length - i - 1; i++){
    //     if(i == stringToPalindromeCheck.length - 1){ 
            
    //     }
    //     else {

    //     }
    // }
    let reversedString = stringToPalindromeCheck.split("").reverse().join("");

    if (reversedString == stringToPalindromeCheck){
        console.log("yes, " + stringToPalindromeCheck + " is a palindrome.");
    }
    else {
        console.log("no, " + stringToPalindromeCheck + " is not a palindrome.");
    }
}
