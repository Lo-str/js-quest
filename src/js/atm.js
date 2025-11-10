//Script for node terminal

// import promptSync from "prompt-sync";
// const prompt = promptSync({ sigint: true });

// // tiny helpers to replace browser APIs in Node:
// function alert(msg) {
//   console.log(String(msg));          // print to terminal
// }
// function confirm(question) {
//   const ans = prompt(`${question} (y/n): `);
//   return ans && ans.trim().toLowerCase().startsWith('y');
// }

//========== ATM ==========\\

let usersName = prompt(`Hi!😃 Please enter your name: `);
alert(`Welcome to your bank ${usersName}! 🌞`);

// Main Menu
function atm() {
  let menu = true;
  while (menu) {
    alert("🏧\n\n1. Deposit\n2. Withdrawal\n3. Account Name\n4. Balance\n5. Exit")
    let options = prompt(`Please choose an option: `);
    let action = exit(options, "menu");
    if (action === "quit") {
      break;
    }

    switch (options) {

      case "1": {
        while (true) {
          const input = prompt(`Please enter deposit amount: `);
          const action = exit(input, "transaction");
          if (action === "menu") {
            break;
          }

          alert(account.deposit(input));
          break;
        }
        break;
      }

      case "2": {
        while (true) {
          const input = prompt(`Please enter withdrawal amount: `);
          const action = exit(input, "transaction");
          if (action === "menu") {
            break;
          }

          alert(account.withdrawal(input));
          break;
      }
      break;
    }

      case "3": {
        alert(account.getAccountName());
        break;
      }

      case "4": {
        alert(account.getBalance());
        break;
      }

      case "5": 
        alert("Have a lovely day! Bye!😎")
        menu = false;
        break;

      default:
        alert(account.accountError("Unvalid option 🙂"));
        break;
    }
  }
} 

function isValidNumber(value) {
  if (typeof value === "number" && !Number.isNaN(value)) {
    return true;
  }
    else {
      return false;
    }
  }

function isValidInput(input) {
  if (input === null ) {
    return false;
  }
  
  else if (input.trim() === "") {
    return false;
  } 
  
  else {
    return true;
  }
}

function exit(value, level) {
  const canceled = (value === null || value === false);
  if (!canceled) {
    return null;
  }

  else if (level === "menu") {
    alert("Have a lovely day! Bye!😎")
    return "quit";
  }

  else if (level === "transaction") {
    return "menu";
  }
  return "cancel";
}

const account = {

  accountName: usersName, // name of the account holder
  balance: 100000, // Total amount on the bank account

  // display the total amount of the account to the user
  getBalance() {
    return `Your balance is💲${this.balance}`;
  },

   // display the account holders name to the user
  getAccountName() {
    return `Account holder: ${this.accountName}`;
  },

  // deposit money onto the balance of the account
  deposit(input) {
    if(!isValidInput(input)) {
      return this.accountError("Unvalid input!");
      }

    const num = Number(input);
    if (!isValidNumber(num)){
      return this.accountError("Unvalid number!")
    }

    else if (num <= 0) {
      return this.accountError("Your deposit must be greater than 0!")
  }
    
    else {
      this.balance += num;
      return `Your deposit was successfully added to your bank account!\nYour balance: 💲${this.balance}`
    }
  },

  // withdraw money from the balance of the account
  withdrawal(input) {

    if(!isValidInput(input)) {
      return this.accountError("Unvalid input")
      }

    const num = Number(input);
    if (!isValidNumber(num)){
      return this.accountError("Unvalid number")
      }

    else if (num > this.balance) {
      return this.accountError(`Looks like your balance can't follow!😮‍💨\n Your balance: 💲${this.balance}`)
      }

    else if (num <= 0) {
      return this.accountError("Your withdrawal must be greater than 0.")
      }
  
    else {
      this.balance -= num;
      return `With great power comes great responsibilities Padawan!💸\nTrade carefully 😌\nYour balance: 💲${this.balance}`
      }
    },

  // display an error message to the user
  accountError(message) {
    return `Oh nooo! ☠️\n${message}`;
  },
};

atm();
