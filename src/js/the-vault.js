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

//========== The Vault of the Realm ==========\\

let usersName = prompt(`Greetings Quest-Bearer!\nName thyself`);
alert(`Step forth ${usersName}!\nThe Vault bids thee welcome`);

// Main Menu
function atm() {
  let menu = true;
  while (menu) {
    const options = prompt(`💰\n\n1. Gold Offering\n2. Gold Summoning\n3. Name Ledger\n4. Coin Balance\n5. Leave Vault\n\nSpeak your choice`);
    const action = exit(options, "menu");
    if (action === "quit") {
      break;
    }

    switch (options) {

      case "1": {
        while (true) {
          const input = prompt("State your tribute");
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
          if (account.balance === 0) {
            alert("You reach into your purse… and find only air");
            break;
          } 
          
          const input = prompt("State your request");
          const action = exit(input, "transaction");

          if (action === "menu") {
            break;
          }
          
          alert(account.withdrawal(input));
          break;
        }
      }
      break;

      case "3": {
        alert(account.getAccountName());
        break;
      }

      case "4": {
        alert(account.getBalance());
        break;
      }

      case "5": 
        alert("May the realm favor your journey!")
        menu = false;
        break;

      default:
        alert(account.accountError("The runes remain silent"));
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
    alert("May the realm favor your journey!")
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
      return this.accountError("The runes remain silent");
      }

    const num = Number(input);
    if (!isValidNumber(num)){
      return this.accountError("The runes cannot read that value")
    }

    else if (num <= 0) {
      return this.accountError("Gold of zero holds no worth!")
  }
    
    else {
      this.balance += num;
      return `The Vault has received your tribute.\nYour balance now shows: 🪙${this.balance}`
    }
  },

  // withdraw money from the balance of the account
  withdrawal(input) {

    if(!isValidInput(input)) {
      return this.accountError("The runes remain silent")
      }

    const num = Number(input);
    if (!isValidNumber(num)){
      return this.accountError("The runes cannot read that value")
      }

    else if (num > this.balance) {
      return this.accountError(`Your holdings cannot bear that cost\nYour balance shows: 🪙${this.balance}`)
      }

    else if (num <= 0) {
      return this.accountError("Gold of zero holds no worth!")
      }
  
    else {
      this.balance -= num;
      return `Beware, seeker — gold is power and with great power comes great responsibility!\nTrade carefully!\nYour balance now shows: 🪙${this.balance}`
      }
    },

  // display an error message to the user
  accountError(message) {
    return `Curses! 💀\n${message}`;
  },
};

atm();
