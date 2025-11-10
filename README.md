==================  THE SEER'S CHALLENGE  ==================

  EXERCISE 1: Guess the random number.

  Create a function guessNumberGame that generates a random number between 1 and 10.
  The function should repeatedly prompt the user to guess the number until the correct number is guessed.
  Use a while loop to keep asking the user for input until they guess correctly.
  Provide feedback if the guess is too high or too low.

  function cancel() {
    let cancel;
    let input = prompt(message);
    if (input === null) {
      game = false;
    };
    cancel = parseFloat(input);
  }

  ================  THE VAULT OF THE REALM  ================

  Create an object called account that has the following properties:

  - accountName, should be the data type string --> this property should contain the name of the account holder
  - balance, should be the data type number --> this property should contain the total amount of the account
  - getBalance, should be a function --> this function should display the total amount of the account to the user
  - deposit, also a function --> this function should be able to deposit money onto the balance of the account
  - withdrawal, also a function --> this function should be able do withdraw money from the balance of the account
  - getAccountName, function as well --> this function should display the account holders name to the user
  - accountError, same as above function! --> this one is a bit tricky... it's up to you to figure out how or what you should use this for.

  HINT: it's more a thinking poblem than a technical problem

  EXTRA: exitAccount, should be a function --> this function should exit the account

  HINT: there are a few different ways to do this, it's up to you which way you choose.

***

  - Remember that a function is just a value. And if a function is just a value then we can both pass it as a parameter to a function and pass it as a property of an object.
  - The object should handle all of the functionality (logic)
  - The atm() function should be responsible for showing the user interface and based on the user input show the right meny choice

  HINT:

  these operators could probably be useful in this assignment:

  && operator
  || operator

  to handle one of the potential errors you can use this built in method isNaN(), this is how you use it:

  const variableName = 10;

  isNaN(variableName)

  ================  THE LABORATORIUM  ================

    Create a small app to track books you’ve read or want to read (If you are not into books, feel free to change it to movies, etc). Use prompt and alert to simulate the menu.

    You will:
    · Use objects to represent books
    · Store multiple books in an array
    · Write functions to add, list and update books

    Requirements:
    1. A library array to store all book objects
    2. Each book should have:
    · Title
    · Author
    · isRead

    3. Implement these functions:
    · addBook() – asks for details and adds a new book object to the library
    · listBooks() – display a list of all books (console.log works fine here)
    · markAsRead(title) – finds a book by title and sets isRead to true

    Bonus challenge (optional):

    · Allow the user to remove a book
    · Allow the user to list only unread books

    These methods could be useful in this assigment so you’ll have to do some research on your own:

    · push( )
    · forEach( )
    · find( )
    · filter( ) 