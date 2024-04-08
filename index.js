function isPalindrome(word) {
  // Write your algorithm here
  // algorithms are sets of simple instructions 
  // I need to create a function that can compare words to their reversed counterparts
  // The function needs to compare them then return a result showing whether the word is a palidrome
  let splitWordObj = word.split("");
  let reversedWordObj = splitWordObj.reverse();
  let joinedReversedWordObj = reversedWordObj.join("")
   return (word.toLowerCase() === joinedReversedWordObj.toLowerCase()) 
    
}

/* 
  Add your pseudocode here
   declare variables in the function scope
   set up how to reverse the words eg from robot to tobor
   set function to return the reversed word 
   set return to check if word === joinedReversedWordObj 
   set if true if it matches and false if it doesnt
*/

/*
  Add written explanation of your solution here
  First I declared variable that will help in comparing the word with it reversed counterpart
  Then I used the variables to manipulate the word to make it reversed 
  Then I set a boolean return where if the word is strictly equal to the reversed word then it would return true 
  And return false otherwise 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
