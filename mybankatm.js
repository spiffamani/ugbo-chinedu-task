let accountHolder = "Godwin";
let balance = 500;


function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log( deposited. New balance: {balance});
    } else {
        console.log("Invalid deposit amount.");
    }
}


function withdraw(amount) {
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log({amount} withdrawn. New balance: {balance}`);
    } else {
        console.log("Insufficient funds or invalid amount.");
    }
}


function checkBalance() {
    console.log(Account Holder: {accountHolder}`);
    console.log(Current Balance: {balance}`);
}


console.log(withdraw(200))