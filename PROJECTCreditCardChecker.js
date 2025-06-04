//Challenge Project: Credit Card Checker: invalidToValidCard()
//My Code Solution at code line number: 47.
//Given data:
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
    valid1,
    valid2,
    valid3,
    valid4,
    valid5,
    invalid1,
    invalid2,
    invalid3,
    invalid4,
    invalid5,
    mystery1,
    mystery2,
    mystery3,
    mystery4,
    mystery5,
];

// Add your functions below:
//--------------------------------------------------

//==>> My Code Solution INCLUDING last CHALLENGE YOURSELF task (Completed, MUST watch)!!! At code line number 164.

function validateCred(arr) {
    let lastDigit = arr[arr.length - 1];
    let currentDigitSum = 0;
    for (let i = arr.length - 2; 0 <= i; i -= 2) {
        let currentDigit = arr[i]; //Doubled Digits
        currentDigit = currentDigit * 2;
        if (currentDigit > 9) {
            currentDigit = currentDigit - 9;
        }
        currentDigitSum = currentDigitSum + currentDigit;
    }
    for (let i = arr.length - 3; 0 <= i; i -= 2) {
        let currentDigit2 = arr[i]; //Undoubled Digits
        currentDigitSum = currentDigitSum + currentDigit2;
    }
    let totalDigitSum = lastDigit + currentDigitSum;
    if (totalDigitSum % 10 === 0) {
        return true;
    } else {
        return false;
    }
}

//Test:
console.log(validateCred(valid1));
console.log(validateCred(valid2));
console.log(validateCred(invalid1));
console.log(validateCred(invalid2));



function findInvalidCards(nArr) {
    let invalidCards = nArr.filter((arr) => validateCred(arr) !== true);
    return invalidCards;
}

//test: 
let invalidCardsArray = findInvalidCards(batch);
console.log(invalidCardsArray);




function idInvalidCardCompanies(ICNArr) {
    //ICNArr = Invalid Cards Nested Array.
    let invalidCompaniesArray = [];
    for (let i = 0; i < ICNArr.length; i += 1) {
        let ICNArrE = ICNArr[i];
        if (
            ICNArrE[0] === 3 &&
            !invalidCompaniesArray.includes("Amex (American Express)")
        ) {
            invalidCompaniesArray.push("Amex (American Express)");
        } else if (ICNArrE[0] === 4 && !invalidCompaniesArray.includes("Visa")) {
            invalidCompaniesArray.push("Visa");
        } else if (
            ICNArrE[0] === 5 &&
            !invalidCompaniesArray.includes("Mastercard")
        ) {
            invalidCompaniesArray.push("Mastercard");
        } else if (
            ICNArrE[0] === 6 &&
            !invalidCompaniesArray.includes("Discover")
        ) {
            invalidCompaniesArray.push("Discover");
        }
    }
    if (invalidCompaniesArray.length === 0) {
        invalidCompaniesArray.push("Company not found");
    }

    return invalidCompaniesArray;
}

//Test; //function takes in invalid cards array!
console.log(idInvalidCardCompanies(invalidCardsArray));
console.log(idInvalidCardCompanies([7, 8, 4, 8, 9, 6]));



//------------------------------------------------------
//Last CHALLENGE YOURSELF task!!!! below, completed in depth, MUST watch. Part 1, Part 2 (main) => invalidToValidCard() below.

//Part 1. Function: Number string to number array.
function strToNumArr(string) {
    let newArr = string.split('');
    //console.log(newArr);
    let numArr = newArr.map(newArrE => {
        let newArrEtoNum = parseInt(newArrE);
        return newArrEtoNum;
    });
    //console.log(numArr);
    return numArr;
}

//Will be used in test for part 2 => invalidToValidCard().
let cardString1 = '0123456789012345'; //random
let cardString2 = '4287642861773716'; //valid
let cardString3 = '5542520964068594'; //random
let cardString4 = '341487686530467';  //valid
let cardString5 = '6019468742882310'; //random
let invalidTypeString1 = 'e011860742882310';
let invalidTypeString2 = '.6011860742882310';
let invalidTypeString3 = 'Hello';
let invalidTypeString4 = '_6011860742882310';
let invalidTypeString5 = '_6011860742882310';
let invalidTypeInput1 = true;
let invalidTypeInput2 = 13;
let invalidTypeInput3 = undefined;
let invalidTypeInput4 = NaN;
//console.log(strToNumArr(string));


//***IMP - Create a function that will convert invalid credit card numbers into valid numbers. Input is a card number array.
//Part 2 (main) => invalidToValidCard()
function invalidToValidCard(arr) {

    //trying to add string (of numbers) input availability!!!
    if (typeof arr === 'string') {

        let newArr = arr.split('');
        //if arr is string input.
        //newArr is array of numbers as strings.
        let numArr = newArr.map(newArrE => {
            let newArrEtoNum = parseInt(newArrE, 10);
            return newArrEtoNum;
        });
        //numArr is array of numbers as numbers.

        if (Number.isNaN(numArr[0])) {
            return `Error: Invalid string input "${arr}" , can NOT be converted to a number, input must be an 'string of numbers' or an 'array of numbers'!`;
        }
        arr = numArr;

    }
    else if (typeof arr !== 'object') {
        return `Error: Invalid input type "${typeof (arr)}" of input ${arr} , input must be an 'array of numbers' or an 'string of numbers'!`;
    }


    //main function.

    let lastDigit = arr[arr.length - 1];
    let currentDigitSum = 0;
    for (let i = arr.length - 2; 0 <= i; i -= 2) {
        let currentDigit = arr[i]; //Doubled Digits
        currentDigit = currentDigit * 2;
        if (currentDigit > 9) {
            currentDigit = currentDigit - 9;
        }
        currentDigitSum = currentDigitSum + currentDigit;
    }
    for (let i = arr.length - 3; 0 <= i; i -= 2) {
        let currentDigit2 = arr[i]; //Undoubled Digits
        currentDigitSum = currentDigitSum + currentDigit2;
    }
    let totalDigitSum = currentDigitSum + lastDigit;
    let remainder = totalDigitSum % 10;
    if (remainder === 0) {
        return 'Given card is valid already.'
    }

    else {
        if (lastDigit >= remainder) {
            lastDigit = lastDigit - remainder;
        } else {
            lastDigit = lastDigit + (10 - remainder);
        }

        let newValidArr = arr.slice(0, -1);
        newValidArr.push(lastDigit);

        //Rechecking new card number validity = true/false, by original validateCred(arr) function.
        let recheckStatus = validateCred(newValidArr);

        return `Unvalid card number: ${arr} with remainder:${remainder}, is corrected to NEW card number: ${newValidArr}. Recheck VALIDITY: ${recheckStatus}`;
    }
}

//Test;
console.log('**Test results of function invalidToValidCard():');
//Validity unknown cards.
console.log('==>> Card Name: mystery1 => ' + invalidToValidCard(mystery1));
console.log('==>> Card Name: mystery2 => ' + invalidToValidCard(mystery2));
console.log('==>> Card Name: mystery3 => ' + invalidToValidCard(mystery3));
console.log('==>> Card Name: mystery4 => ' + invalidToValidCard(mystery4));
console.log('==>> Card Name: mystery5 => ' + invalidToValidCard(mystery5));
//Already known valid cards.
console.log('==>> Card Name: valid1 => ' + invalidToValidCard(valid1));
console.log('==>> Card Name: valid2 => ' + invalidToValidCard(valid2));
console.log('==>> Card Name: valid3 => ' + invalidToValidCard(valid3));
console.log('==>> Card Name: valid4 => ' + invalidToValidCard(valid4));
console.log('==>> Card Name: valid5 => ' + invalidToValidCard(valid5));
//Already known unvalid cards.
console.log('==>> Card Name: invalid1 => ' + invalidToValidCard(invalid1));
console.log('==>> Card Name: invalid2 => ' + invalidToValidCard(invalid2));
console.log('==>> Card Name: invalid3 => ' + invalidToValidCard(invalid3));
console.log('==>> Card Name: invalid4 => ' + invalidToValidCard(invalid4));
console.log('==>> Card Name: invalid5 => ' + invalidToValidCard(invalid5));


//Test for string inputs and other data types.
console.log('*Test results for string inputs and other data types:');

console.log('==>> String Name: cardString1 => ' + invalidToValidCard(cardString1));
console.log('==>> String Name: cardString2 => ' + invalidToValidCard(cardString2));
console.log('==>> String Name: cardString3 => ' + invalidToValidCard(cardString3));
console.log('==>> String Name: cardString4 => ' + invalidToValidCard(cardString4));
console.log('==>> String Name: cardString5 => ' + invalidToValidCard(cardString5));

console.log('* Test results for invalidTypeStrings:');
console.log('==>> String Name: invalidTypeString1 => ' + invalidToValidCard(invalidTypeString1));
console.log('==>> String Name: invalidTypeString2 => ' + invalidToValidCard(invalidTypeString2));
console.log('==>> String Name: invalidTypeString3 => ' + invalidToValidCard(invalidTypeString3));
console.log('==>> String Name: invalidTypeString4 => ' + invalidToValidCard(invalidTypeString4));
console.log('==>> String Name: invalidTypeString5 => ' + invalidToValidCard(invalidTypeString5));

console.log('* Test results for invalid input type:');
console.log('==>> Input Name: invalidTypeInput1 => ' + invalidToValidCard(invalidTypeInput1));
console.log('==>> Input Name: invalidTypeInput2 => ' + invalidToValidCard(invalidTypeInput2));
console.log('==>> Input Name: invalidTypeInput3 => ' + invalidToValidCard(invalidTypeInput3));
console.log('==>> Input Name: invalidTypeInput4 => ' + invalidToValidCard(invalidTypeInput4));
