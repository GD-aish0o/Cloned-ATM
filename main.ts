// the same code clone as Sir Hamzah from github:
// at first I'll clone this as it is.
// I'll be writing the code all by myself after this one, 
// code written by me will be stored in /NPM-Projects. 

import inquirer from "inquirer";

let myBalance = 10000; //dollars

// myBalance += 6000  // adds 6000 =16000
// myBalance -= 3000  // subs 3000 = 13000 || 7000.
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    {
        name:"pin",
        type:"number",
        message:"Enter your pin "
    }
);

if (pinAnswer.pin === myPin ) {
    console.log("Correct pin code");

    let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                // message:"choose an operation from the list below",
                message:"please select option",
                type:"list",
                choices:["withdraw", "check balance", ],
    
            }
        ]
    );

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message:"enter your amount",
                    type:"number"
                }
            ]
        );

        myBalance -= amountAns.amount;

        console.log(`your remaining balance is ${myBalance}`);
    }else if (operationAns.operation === "check balance") {

    console.log(`Your current balance is ${myBalance}`);
    
    }
 } else {
    console.log("Incorrect pin, try again. ");
    
 } 
  //else if (pinAnswer.pin != myPin) {
//     console.log("Enter correct pin");
    
// } else {
//     console.log("enter you pin now");
// }

// put the below code in the upper if else statement.  (correct code)


