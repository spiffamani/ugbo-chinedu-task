const prompt = require("prompt-sync")(); 
let counter = 0;
let count = 0;
let total = 0;

for (let index = 0; index < 10; index++) { 
    let firstNumber = Math.floor(Math.random() * 100);
    let secondNumber = Math.floor(Math.random() * 100);

    if (firstNumber > secondNumber) {
        let userInput = Number(prompt(`Enter answer: ${firstNumber - secondNumber} `));
        total = firstNumber - secondNumber;

        if (userInput === total) { // Corrected logic
            count++;
            console.log("Correct answer gotten is:", count);
        } else {
            counter++;
            console.log("Failed answer gotten is:", counter);
        }
    }
}