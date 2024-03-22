#! usr/bin/env node 

import inquirer from "inquirer";
// 1) computer will generate a random number - Done.
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result 

const randomNumber = Math.floor(Math.random() * 10 + 1);

console.log("welcome to the Guessing number game" );

const userInput = await inquirer.prompt([
  {
    name: "userGussedNumber",
    type: "number",
    message: "Please guess a number between 1-10",
  },
]);

 if (userInput.userGussedNumber === randomNumber) {
    console.log("Congragulations!! You guessed it right");
  } else {
    console.log("Sorry You guessed it wrong");
  }


