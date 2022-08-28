function hasTargetSum(array, target) {
  // Write your algorithm here
  // iterate through the array using a for loop
  for (let i = 0; i < array.length; i++) {
    // create a condition for finding the other number that adds to target
    const otherNumber = target - array[i];
    // console.log(otherNumber);

    // Iterate through the remaining numbers whilst ignoring the current index
    for (let j = i + 1; j < array.length; j++) {
      // console.log('j =>' + j)
      // create a condition that checks if the remaining numbers are equal to the first condition
      if (array[j] === otherNumber) {
        return true;
      }
    }
  }
  // if no numbers satisfy the condition
  return false

}

hasTargetSum([3, 8, 12, 4, 11, 7], 10);
/* 
  Write the Big O time complexity of your function here
  My solution has a nested loop
  complexity is n * n => O(n**2), therefore quadratic.
*/

/* 
  Add your pseudocode here
  create a function that takes to arguments, an array and a target, 
  that checks if the sum of two numbers in an array equal a given target
  Iterate through the array using a for loop
    Find a number that when added to the current number in the loop, adds to target. Start at index 0
      Therefore, otherNumber = target(since it's known) - the number at the current loop
  Iterate through the remaining numbers and find one that satifies the condition in the  first loop
  Check the next index therefore + 1
    the condition is otherNumber = target - array[i] (a number at index 0)
  compare otherNumber and the remaining numbers in the loop
  if otherNumber is strictly equal to remaining number
    return true
*/

/*
  Add written explanation of your solution here
  * the first iteration takes the first number which for example is 3
  * the second iteration checks the remaining numbers 8, 12,4,11,7
  * this iteration should not begin at current index, therefore add 1 to index
  * it goes through each number checking if target - currentNumber = that number
  * if the condition is not satified, the loop steps onto the next number, 8 and checks against the condition
  * the loop continues until a valid otherNumber is found
  * if it's not found, the loop exits and returns a false value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
