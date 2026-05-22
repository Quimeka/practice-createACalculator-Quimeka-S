/* Absolute Value Calculation: Given any number, return its absolute value.*/

function findAbsoluteValue (num){

    return Math.abs(num);
}

/*Power Calculation: Calculate and return the value of a base raised to a specific power.*/

function calculatePowerNum (base, power){
    return Math.pow(base,power);
}

//Square Root Finder: Calculate the square root of a number.

function findSquareRoot (number){

    if (number < 0){
        return "Error. You entered a Negative Number.";
    }
    return Math.sqrt(number);
}

/*Maximum and Minimum Finder: From a given set of numbers, determine the largest and smallest values.*/

function findLargeSmallNumber (arrayOfNums){

    return{
        min: Math.min(...arrayOfNums), 
        max: Math.max(...arrayOfNums)
        };

}

/*Random Number Generator: Generate a random integer within a specified range.*/

function generateRandomNum (range){

    return findAbsoluteValue(Math.floor((Math.random() * range) + 1));

}

/*Custom Rounding: Round a number to a specified number of decimal
places.*/

function roundToDecimal (number,roundToNumber){

    let decimalplace = Math.pow(10,roundToNumber);
    return(Math.round(number * decimalplace) / decimalplace);

}

/*
//Find the absolute value of -45.67.
console.log(findAbsoluteValue(-45.67));
console.log(findAbsoluteValue(45.67));
console.log(findAbsoluteValue(-22.67));
console.log(findAbsoluteValue(0));



//Raise 5 to the power of 3.
console.log(calculatePowerNum(5,3));
console.log(calculatePowerNum(-5,3));
console.log(calculatePowerNum(5,-3));


//Calculate the square root of 144.
console.log(findSquareRoot(144));
console.log(findSquareRoot(-144));
console.log(findSquareRoot(0));


//Determine the largest and smallest values from [3, 78, -12,0.5, 27].
let array = [3, 78, -12,0.5, 27];
let array2 = [23, 278, -212,0.25, 227];
let array3 = [33, 378, -312,0.35, 327];

console.log(findLargeSmallNumber(array));
console.log(findLargeSmallNumber(array2));
console.log(findLargeSmallNumber(array3));


//Generate a random number between 1 and 50.1
console.log(generateRandomNum(50.1));
console.log(generateRandomNum(0));
console.log(generateRandomNum(-50.1));


//Round 23.67891 to 2 decimal places.
console.log(roundToDecimal(23.67891,2));
console.log(roundToDecimal(23.67891,3));
console.log(roundToDecimal(23.67891,4));*/

const readline = require('readline-sync');


console.log(`Online Math Game: Calculator:
The calculator must include functionality to perform the following:
● [1] Absolute Value Calculation: Given any number, return its absolute
value.
● [2] Power Calculation: Calculate and return the value of a base raised to
a specific power.
● [3] Square Root Finder: Calculate the square root of a number.
● [4] Maximum and Minimum Finder: From a given set of numbers,
determine the largest and smallest values.
● [5] Random Number Generator: Generate a random integer within a
specified range.
● [6] Custom Rounding: Round a number to a specified number of decimal
places.
● [7] QUIT CALCULATOR.`);

let operation = Number(
    readline.question("Enter the number of the operation you'd like to use: ")
);

while (operation > 0 && operation <= 6) {

    console.log(`Great choice! You chose Operation ${operation}`);

    switch(operation) {

        case 1:
            let abs = Number(readline.question("Enter a number to find the absolute value: "));
            console.log(findAbsoluteValue(abs));
            break;

        case 2:
            let base = Number(readline.question("Enter the base value: "));
            let power = Number(readline.question("Enter the power value: "));
            console.log(calculatePowerNum(base, power));
            break;

        case 3:
            let sqrtnum = Number(readline.question("Enter a number to find the square root: "));
            console.log(findSquareRoot(sqrtnum));
            break;

        case 4:
            let array = readline.question("Enter the list of numbers separated by commas. For example: 1,2,3,4: ");
            let numbers = array.split(",").map(num => Number(num.trim()));
            console.log(findLargeSmallNumber(numbers));
            break;

        case 5:
            let number2= Number(readline.question("Enter the number you'd like to use for the range to generate a random number: "));
            console.log(generateRandomNum(number2));
            break;

        case 6:
            let num = Number(readline.question("Enter number to round: "));
            let decimals = Number(readline.question("Enter decimal places: "));
            console.log(roundToDecimal(num, decimals));
            break;
    }

    operation = Number(readline.question("Enter another calculation or 7 to quit: "));
}

if (operation === 7) {
    console.log("See you later!");
} else {
    console.log("Invalid Entry. Try Later!");
}