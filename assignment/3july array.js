// 1. Flatten a deeply nested array
// Using recursion:
function flattenArrayRecursive(arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(flattenArrayRecursive(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
}

// Using a built-in method (flat()):
function flattenArrayBuiltIn(arr) {
  return arr.flat(Infinity);
}

console.log("--- 1. Flatten Array ---");
const nestedArray = [1, [2, [3, [4]], 5]];
console.log("Recursive Flatten:", flattenArrayRecursive(nestedArray));
console.log("Built-in Flatten:", flattenArrayBuiltIn(nestedArray));
console.log("\n");

// 2. Remove all duplicate values without using Set
function removeDuplicates(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

console.log("--- 2. Remove Duplicates ---");
const numbersWithDuplicates = [1, 2, 2, 3, 1, 1, 4, 5, 4];
console.log("Array with duplicates:", numbersWithDuplicates);
console.log("Array without duplicates:", removeDuplicates(numbersWithDuplicates));
console.log("\n");

// 3. What will be the output of the following?
console.log("--- 3. Array Reference ---");
const a_ref = [1, 2, 3];
const b_ref = a_ref;
b_ref.push(4);
console.log("Output of console.log(a_ref) after b_ref.push(4):", a_ref);
console.log("Explanation: b_ref refers to the same array as a_ref. Modifying b_ref modifies a_ref.");
console.log("\n");

// 4. Find the second largest number in an array without sorting
function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements";
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log("--- 4. Second Largest Number ---");
console.log("[10, 5, 8, 1, 9] Second Largest:", findSecondLargest([10, 5, 8, 1, 9]));
console.log("[5, 5, 5] Second Largest:", findSecondLargest([5, 5, 5]));
console.log("[1, 2] Second Largest:", findSecondLargest([1, 2]));
console.log("[7] Second Largest:", findSecondLargest([7]));
console.log("\n");

// 5. Count the number of occurrences of each element in an array
function countOccurrences(arr) {
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    counts[element] = (counts[element] || 0) + 1;
  }
  return counts;
}

console.log("--- 5. Count Occurrences ---");
const data = [1, 2, 2, 3, 1, 1];
console.log("Occurrences in [1, 2, 2, 3, 1, 1]:", countOccurrences(data));
console.log("\n");

// 6. Write a custom implementation of the .map() method (polyfill)
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function(callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const mappedArr = [];
    const O = Object(this); // Ensure 'this' is an object
    const len = O.length >>> 0; // Convert to unsigned 32-bit integer

    for (let k = 0; k < len; k++) {
      if (k in O) { // Check if property exists on the object
        mappedArr[k] = callback.call(thisArg, O[k], k, O);
      }
    }
    return mappedArr;
  };
}

console.log("--- 6. Custom .map() Polyfill ---");
const numbersToMap = [1, 2, 3];
const doubledNumbers = numbersToMap.myMap(num => num * 2);
console.log("Original numbers for map:", numbersToMap);
console.log("Doubled numbers using myMap:", doubledNumbers);

const users = [{name: "Alice"}, {name: "Bob"}];
const userNames = users.myMap(user => user.name.toUpperCase());
console.log("Original users:", users);
console.log("User names (uppercase) using myMap:", userNames);
console.log("\n");

// 7. Sort an array of objects by multiple properties
function sortObjects(arr) {
  return arr.sort((a, b) => {
    // Sort by name (alphabetical)
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    // If names are equal, sort by age (ascending)
    return a.age - b.age;
  });
}

console.log("--- 7. Sort Objects by Multiple Properties ---");
const people = [{
  name: "John",
  age: 30
}, {
  name: "Alice",
  age: 25
}, {
  name: "John",
  age: 22
}];
console.log("Original people array:", people);
console.log("Sorted people array:", sortObjects(people));
console.log("\n");

// 8. Given an array of numbers, return a new array containing only the elements that are prime numbers.
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

function filterPrimes(arr) {
  return arr.filter(num => isPrime(num));
}

console.log("--- 8. Filter Prime Numbers ---");
const numbersForPrime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17, 19, 23, 29, 30];
console.log("Original numbers:", numbersForPrime);
console.log("Prime numbers:", filterPrimes(numbersForPrime));
console.log("\n");

// 9. What will this code output and why?
console.log("--- 9. Array Length Property ---");
const arr_len = [1, 2, 3];
arr_len.length = 0;
console.log("Output of console.log(arr_len[0]) after arr_len.length = 0:", arr_len[0]);
console.log("Explanation: Setting arr.length = 0 truncates the array, removing all elements. Accessing arr[0] on an empty array results in undefined.");
console.log("\n");

// 10. What’s the difference between Array.prototype.forEach and Array.prototype.map in terms of return value and use-case?
console.log("--- 10. forEach vs map ---");
console.log("Array.prototype.forEach:");
console.log("  - Return Value: `undefined`.");
console.log("  - Use-Case: Used for iterating and performing side effects (e.g., logging, modifying external state). Does not create a new array.");
const forEachArray = [1, 2, 3];
let sum = 0;
forEachArray.forEach(num => {
  sum += num;
});
console.log("  Example: Sum of [1, 2, 3] using forEach:", sum);
console.log("\n");

console.log("Array.prototype.map:");
console.log("  - Return Value: A *new array* containing the results of the callback function.");
console.log("  - Use-Case: Used for transforming each element into a new value and collecting these into a new array. The original array remains unchanged.");
const mapArray = [1, 2, 3];
const mappedArray = mapArray.map(num => num * 2);
console.log("  Example: Original array for map:", mapArray);
console.log("  Example: New array (doubled) using map:", mappedArray);
console.log("\n");

// 11. What is the result of this?
console.log("--- 11. Array.prototype.slice() ---");
const a_slice = [1, 2, 3];
const b_slice = a_slice.slice(0, 2);
b_slice[0] = 100;
console.log("Output of console.log(a_slice) after b_slice modification:", a_slice);
console.log("Explanation: slice() creates a shallow copy. Modifying b_slice does not affect a_slice.");
console.log("\n");

// 12. How do you find all pairs of elements in an array whose sum equals a target number?
function findPairs(arr, target) {
  const pairs = [];
  const seenNumbers = new Set();

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const complement = target - currentNum;

    if (seenNumbers.has(complement)) {
      pairs.push([complement, currentNum]);
    }
    seenNumbers.add(currentNum);
  }
  return pairs;
}

console.log("--- 12. Find Pairs with Target Sum ---");
const numbersForPairs = [1, 2, 3, 4, 5];
const targetSum = 6;
console.log(`Pairs in [${numbersForPairs}] with target sum ${targetSum}:`, findPairs(numbersForPairs, targetSum));

const numbersForPairs2 = [1, 2, 3, 4, 5, 1];
const targetSum2 = 2;
console.log(`Pairs in [${numbersForPairs2}] with target sum ${targetSum2}:`, findPairs(numbersForPairs2, targetSum2));
console.log("\n");

// 13. How would you chunk an array into groups of N elements?
function chunkArray(arr, N) {
  const chunkedArray = [];
  let index = 0;
  while (index < arr.length) {
    chunkedArray.push(arr.slice(index, index + N));
    index += N;
  }
  return chunkedArray;
}

console.log("--- 13. Chunk Array ---");
const arrayToChunk = [1, 2, 3, 4, 5, 6];
const chunkSize = 2;
console.log(`Chunking [${arrayToChunk}] into groups of ${chunkSize}:`, chunkArray(arrayToChunk, chunkSize));

const arrayToChunk2 = [1, 2, 3, 4, 5, 6, 7];
const chunkSize2 = 3;
console.log(`Chunking [${arrayToChunk2}] into groups of ${chunkSize2}:`, chunkArray(arrayToChunk2, chunkSize2));
console.log("\n");

// 14. Explain what happens in this reduce expression: [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0)
console.log("--- 14. Reduce Expression Explanation ---");
const reduceExample = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
console.log("Result of [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0):", reduceExample);
console.log("Explanation:");
console.log("  - `reduce()` method iterates over the array.");
console.log("  - `acc` (accumulator) holds the running total, starting at `0` (the initialValue).");
console.log("  - `curr` (current value) is the element being processed in the current iteration.");
console.log("  - In each step, `curr` is added to `acc`.");
console.log("  - The process is: (0 + 1) -> 1, then (1 + 2) -> 3, then (3 + 3) -> 6, then (6 + 4) -> 10.");
console.log("  - The final result is the sum of all elements: 10.");
console.log("\n");

// 15. What is the time complexity of Array.prototype.splice() in the worst case, and why?
console.log("--- 15. Time Complexity of Array.prototype.splice() ---");
console.log("Worst-case time complexity of Array.prototype.splice() is O(n), where n is the number of elements in the array.");
console.log("Reason:");
console.log("  - When elements are inserted or deleted from the middle of an array, subsequent elements must be shifted to maintain contiguous memory.");
console.log("  - In the worst case (inserting/deleting at the beginning), nearly all elements (n-1 or n) need to be shifted, leading to a linear time complexity proportional to the array's size.");
console.log("\n");