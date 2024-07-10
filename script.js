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


  