// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// 1a) Pseudo code:
// Copy and paste test code template into assignment (make sure nothing is inside initial template)
// Read problem statement and understand inputs/outputs (inputs need to be directly inserted into test code, and not as variables)
// Create relevant info for describe, it, expect, and toEqual methods
// Test code output to ensure it is failing red (should get a reference error saying function is not defined)

describe("fibonator", () => {
  it("A function which takes in a number input and returns an array of length equal to the input, filled with numbers which follow the Fibonnaci sequence", () => {
    expect(fibonator(6)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibonator(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});

// b) Create the function that makes the test pass.

// 1b) Pseudo code:
// Declare a function named fibonator (const declaration)
// Name the parameter as length
// Declare a variable named fibArray, and initialize it as array [1, 1] (let declaration)
// Create a for loop which iterates a number of times equal to the value of parameter length
// for loop logic:
//      Create a variable named fibValue which stores a sum equal the sum of the previous two elements in fibArray
//      .push each value into fibArray
// return fibArray
// Run the test code to ensure it passes green
// Think about refactoring

const fibonator = (length) => {
  let fibArray = [1, 1];
  if (length < 2 || typeof length !== "number") {
    return "Invalid input, please input a value greater than 1";
  }
  for (let i = 2; i < length; i++) {
    let fibValue = fibArray[i - 2] + fibArray[i - 1];
    fibArray.push(fibValue);
  }
  return fibArray;
};

// Notes: I ran the test code for 1a), and it faild red w/ the appropriate error message. I created the code for 1b) and ran it again, the test passed green. For refactoring, I think doing this with .map would be the way to go if you wanted to use an HOJ. However, you'd have to create an inital array of length equal to the output array. This would probably require a for loop. So I don't think that would be a very good refactor in this case. I did add an if statement which gives an invalid input statement whenever the argument is less than 2 or if it is not a number. Also, I would like to try doing this with recursion, since I need more practice with it.

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];
// Expected output: [-823, 7, 23]

// 2a) Pseudo code:
// Copy and paste test code template into assignment (make sure nothing is inside initial template)
// Read problem statement and understand inputs/outputs (inputs need to be directly inserted into test code, and not as variables)
// Create relevant info for describe, it, expect, and toEqual methods
// Test code output to ensure it is failing red (should get a reference error saying function is not defined)

describe("oddSorter", () => {
  it("a function that takes in an array and outputs another array with only odd numbers, in ascending order", () => {
    expect(
      oddSorter([4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"])
    ).toEqual([-9, 7, 9, 199]);
    expect(
      oddSorter(["hello", 7, 23, -823, false, 78, null, "67", 6, "number"])
    ).toEqual([-823, 7, 23]);
  });
});

// b) Create the function that makes the test pass.

// 2b) Pseudo code:
// Declare a function and call it oddSorter (const declaration)
// Name the parameter as arr
// Declare a variable named oddArray (let declaration)
// Assign oddArray to the value of a .filter HOF being used on arr
// HOF logic:
//      Create this conditional: typeof value = "number" && value % 2 !== 0
// Have oddArray be equal to oddArray.sort((a, b) => a - b)
// return oddArray
// Run the test code to make sure it passes green

const oddSorter = (arr) => {
  let oddArray = arr
    .filter((value) => typeof value === "number" && value % 2 !== 0)
    .sort((a, b) => a - b);
  return oddArray;
};

// Notes: I ran the initial test and it failed red with the right error (function not defined). I created the code and ran the test again, got it passing green. I did some minor refactoring. I took the variable declaration and combined it with the .filter and the .sort, so it's all in one line. In terms of methodology, .filter is the way to go here.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9];
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12];
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = [];
// Expected output: []

// 3a) Pseudo code:
// Copy and paste test code template into assignment (make sure nothing is inside initial template)
// Read problem statement and understand inputs/outputs (inputs need to be directly inserted into test code, and not as variables)
// Create relevant info for describe, it, expect, and toEqual methods
// Test code output to ensure it is failing red (should get a reference error saying function is not defined)

describe("accumulator", () => {
  it("a function which takes in an array and returns another array, with the values in each element being a cumulative sum of previous values from the input array", () => {
    expect(accumulator([2, 4, 45, 9])).toEqual([2, 6, 51, 60]);
    expect(accumulator([0, 7, -8, 12])).toEqual([0, 7, -1, 11]);
    expect(accumulator([])).toEqual([]);
  });
});

// b) Create the function that makes the test pass.

// 3b) Pseudo code:
// Declare a function and call it accumulator (const declaration)
// Name the parameter as arr
// Declare a variable named accumulatorArray, and initialize it as an empty array (let declaration)
// Declare another variable, name it sum, and initialize it with a value of 0 (let declaration)
// Create an if statement for returning an empty array if an empty array is the input
// if statement logic:
//      if arr === [], return accumulatorArray
// Apply a .map HOF to accumulatorArray
// .map logic:
//      sum + value
// return accumulatorArray

const accumulator = (arr) => {
  let accumulatorArray = [];
  let sum = 0;
  if (arr === []) {
    return accumulatorArray;
  }
  accumulatorArray = arr.map((value) => (sum += value));
  return accumulatorArray;
};

// Notes: I ran the test initially, got the expected red failure. I created the code, and after some trial and error got it passing green. For refactoring, I tried to use a ternary operator but couldn't make it work. I don't fully understand why either. Also I tried to initialize sum without a value, but this also gave me issues. I'm leaving the function as is.
