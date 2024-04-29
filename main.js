#! /usr/bin/env node
import inquirer from "inquirer";
//step 01
const answers = await inquirer.prompt([
    { type: "number",
        name: "numberOne",
        message: "Enter your first number",
    },
    { type: "number",
        name: "numberTwo",
        message: "Enter your second number"
    },
    {
        type: "list",
        name: "operators",
        message: "Enter your operators",
        choices: ["+", "-", "*", "/"]
    }
]);
//step 02
const { numberOne, numberTwo, operators } = answers;
let result;
switch (operators) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log("Invalid operators");
}
console.log(`${numberOne} ${operators} ${numberTwo}    =${result}`);
