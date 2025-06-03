let charges = 100;
let maxwithdrawal = 20000;
let balance = 0;
let accountholder = "Godwin";
let transaction = [];


function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(accountholder + ", your balance is " + balance);
        transaction.push("Your balance is " + balance);
    } else {
        console.log("Invalid deposit amount.");
    }
}


function withdrawal(amount) {
    if (amount > maxwithdrawal) {
        console.log("You cannot withdraw more than " + maxwithdrawal);
    } else if (amount > 0 && amount <= balance) {
        balance -= amount;
        charges -= amount;
        console.log("Your balance is " + balance + " and " + charges + " charges.");
    } else {
        console.log("Invalid withdrawal amount or insufficient funds.");
    }
}


function checkBalance() {
    console.log("Account name: " + accountholder);
    console.log("Your balance is " + balance);
}


while (true) {
    let action = prompt("Enter action: deposit, withdraw, check, or exit").toLowerCase();

    if (action === "deposit") {
        let amount = parseFloat(prompt("Enter deposit amount: "));
        deposit(amount);
    } else if (action === "withdraw") {
        let amount = parseFloat(prompt("Enter withdrawal amount: "));
        withdrawal(amount);
    } else if (action === "check") {
        checkBalance();
    } else if (action === "exit") {
        console.log("Thanks for using our system!");
        break;
    } else {
        console.log("Invalid option! Try again.");
    }
}