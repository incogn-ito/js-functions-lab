console.log("nailed it!")

/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

// Worked out the problem myself to check my work against the GA provided answer below
// example of declarative function:

function maxOfTwoNumbers (x, y) {
    console.log(x)
    console.log(y)
    if (x >= y) {
    return x
} else {
    return y 
  }
}
console.log("Exercise 1 Result: ", maxOfTwoNumbers(2, 12))

// example of function expression:
const maxOfTwoNumbersGaAnswer = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log("Exercise 1 Result: ", maxOfTwoNumbersGaAnswer(3, 9));


  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

 
// function isAdult(age) {
//   if (age < 18) {
//   console.log("Minor")
//   } else if (age >= 18) {
//   return "Adult"
//   }
// }




function isAdult(x) {
  if (x >= 18) {
    return "Adult"
  } else {
    return "Minor"
  }
}
console.log("Exercise 2 Result: ", isAdult(21));
console.log("Exercise 2 Result: ", isAdult(2));

//  OR other option below if I want to use 1 return statement at the end 


function isAdultB(x) {
  let result 
  if ( x >= 18) {
    result = "Adult"
  } else {
    result = "Minor"
  }
  return result
}
console.log("Exercise 2 Result: ", isAdultB(21));
console.log("Exercise 2 Result: ", isAdultB(2));


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/


function isCharAVowel(character) {
  let answer
  if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
    answer = true
  } else {
    answer = false
  }
  return answer
}
console.log('Exercise 3 Result:', isCharAVowel("a"));
console.log('Exercise 3 Result:', isCharAVowel("z"));

