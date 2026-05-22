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

    number = findAbsoluteValue(number);
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

    return findAbsoluteValue(Math.round((Math.random() * range) + 1));

}

/*Custom Rounding: Round a number to a specified number of decimal
places.*/

function roundToDecimal (number,roundToNumber){

    let decimalplace = Math.pow(10,roundToNumber);
    return(Math.round(number * decimalplace) / decimalplace);

}


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
console.log(roundToDecimal(23.67891,4));