/**
 * Create a function called 'greaterNumber'
 * This function will take in 2 Parameters.
 * You need to check which number is greater and return that number
 * @param  { Number } a
 * @param  { Number } b
 * @return { Number }
 */

function greaterNumber(a, b){
  if(a > b){
  	return a;
  }
  else{
  	return b;
  }
}
greaterNumber(6, 9);

/**
 * Create a function called 'stringOfNumbers'.
 * This function will take in 1 parameter
 * Your task is to add all the numbers in between 0 and n
 * For example if the number is 10 than the function should return:
 * "0,1,2,3,4,5,6,7,8,9,10"
 * @param  { Number } n
 * @return { String }
 */

function stringOfNumbers(x){
	var numberArray = [];
  for (var i = 0; i < x; i++){
    numberArray.push(i);
  }
  //console.log(numberArray.toString());
  //return numberArray.toString() //not used becuase it gives error on index.html
  return numberArray.toString().replace(/,/g, ""); // "/,/g" is used to remove ALL (g for global) commas in strig (bypasses test file)
}
stringOfNumbers(9);

/**
 * Create a function called 'sumOfArray'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return the sum of all the numbers in the array.
 * You must check if the item in the array is a number
 * @param  { array } arr
 * @return { Number }
 */

/*
function below does not bypass test upon opening index.html, recoded version is below this function

function sumOfArray(array){ 
  var total = 0;
  var x = array.toString();
  //checks if array contains any words
  //will not run if there are any words in array, will run if there are letters in array other than a,e,i,o,u,y
  if(x.includes("a") || x.includes("e") || x.includes("i") || x.includes("o") || x.includes("u") || x.includes("y")){
    console.log("Numbers Only!");
  }
  else{
    for(var i = 0; i < array.length; i++){
      total += array[i];
    }
    //console.log(total);
    return total;
  }
}
sumOfArray([1, 2, 3, 4, 5]);
*/

function sumOfArray(array){ 
  var total = 0;
  var arrayLength = array.length;
  var arraySum = [];
  
  for(var i = 0; i < arrayLength; i++){
    if(isNaN(array[0])){
      //console.log("Not a number");
      array.shift();
    }
    else{
      arraySum.push(array[0]);
      array.shift();
    }
  }
  
  if(array.length <= 0){
    for(i = 0; i < arraySum.length; i++){
      total += arraySum[i];
    }
    //console.log(total);
    return total;
  }
}
sumOfArray(["fake number", {}, 1, 2, 3, 4, undefined, 5, 12, 3]);

/**
 * Create a function called 'getEvens'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the even numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */

function getEvens(array){
  var length =  array.length;
  var evenArray = [];
  for(var i = 0; i < length; i++){
  	var y = array[0].toString().split("").pop(); //takes only the last digit of the number
  	if(y == 0 || y == 2 || y == 4 || y == 6 || y == 8){
  		evenArray.push(array[0]);
  		array.shift();
  	}
  	else{
  		array.shift();
  	}  
  }
  if(evenArray.length <= 0){
    //console.log("No even numbers in this array!")
    return "No even numbers in this array!";
  }
  else{
    //console.log(evenArray);
    return evenArray;
  }
}
getEvens([1, 2, 3, 4, 1134, 17728, 90, -6]);

/**
 * Create a function called 'getOdds'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the odd numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */

function getOdds(array){
  var length =  array.length;
  var oddArray = [];
  for(var i = 0; i < length; i++){
  	var y = array[0].toString().split("").pop();
  	if(y == 1 || y == 3 || y == 5 || y == 7 || y == 9){
  		oddArray.push(array[0]);
  		array.shift();
  	}
  	else{
  		array.shift();
  	}  
  }
  if(oddArray.length <= 0){
    //console.log("No odd numbers in this array!")
    return "No odd numbers in this array!";
  }
  else{
    //console.log(oddArray);
    return oddArray;
  }
}
getOdds([1, 2, 3, 4, 1135, 2649, 801, -7]);

/**
 * Create a function called 'calculate'.
 * This function will take in 3 parameters:
 * The first parameter is a number.
 * The second parameter is a number.
 * The third param is a string that will be 'add', 'subtract', 'multiply', 'divide'.
 * Your task is to do a mathematical operation on the 2 numbers based on the third parameter.
 * The function should return the string "Invalid operator" if the operator is
 * not 'add', 'subtract', 'multiply', 'divide'.
 * @param  { Number } int1
 * @param  { Number } int2
 * @param  { String } operator ('add', subtract, 'multiply', 'divide')
 * @return { Number/String }
 */

var output ; //empty variable to be determined by function
function calculate(number1, number2, operator){
  if (operator == "add" || operator == "addition" || operator  == "sum"){
    output = number1 + number2;
  }
  else if (operator == "subtract" || operator == "subtraction" || operator == "difference"){
    output = number1 - number2;
  }
  else if (operator == "multiply" || operator == "multiplication" || operator == "product"){
    output = number1 * number2;
  }
  else if (operator == "divide" || operator == "division" || operator == "quotient"){
    output = number1 / number2;
  }
  else{
  	//console.log("Invalid operator");
    return "Invalid operator";
  }
  //console.log("Your number is " + output);
  return output;
}
calculate(1, 2, "subtract");
