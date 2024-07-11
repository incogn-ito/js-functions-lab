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

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/


function generateEmail(str1, str2) {
  let fullString = `${str1 + "@" + str2}`
  console.log(str1)
  console.log(str2)
  console.log(`${str1 + "@" + str2}`)
  return fullString
} 
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser (name, timeOfDay) {
  let greeting = `${"Good " + timeOfDay + ", " + name + "!"}`
  return greeting
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
console.log('Exercise 5 Result:', greetUser("Sam", "evening"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(x, y, z) {
  let maximum
  if (x > y && x > z) {
    maximum = x
  } else if (y > x && y > z) {
    maximum = y
  } else {
    maximum = z
  }
  return maximum
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
console.log('Exercise 6 Result:', maxOfThree(15, 10, 8));
console.log('Exercise 6 Result:', maxOfThree(5, 10, 80));


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/


function calculateTip(x, y) {
  let tip = x * (0.01 * y)

  return tip
}

console.log('Exercise 7 Result:', calculateTip(50, 20));
console.log('Exercise 7 Result:', calculateTip(100, 20));

