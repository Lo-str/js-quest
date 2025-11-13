//========== The Arcane Laboratorium ==========\\

// Store books titles and authors
const archive = [];

// handles accents, punctuation, double space, and lower case/Upper case letters
const normalizedString = function (str) {
  if (typeof str !== "string") {
    error("Foul script! Try again");
    return "";
  }
  return str
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
};

// asks for details and adds a new book object to the library
function addBook(rawTitle, rawAuthor){
    if (!rawTitle || !rawAuthor) {
        error("The scroll lies blank — no word was given.");
        return;
    }

    archive.push({
        title: normalizedString(rawTitle),
        author: normalizedString(rawAuthor),
        isRead: false
    });  
}

 // display a list of all books and their authors. One per line with map()
function listBooks(array) {
    if (isEmpty(array)) {
        error("The shelves are bare.");
        return;
    
    }
    const stringArray = array
    .map(function (book) {
        return `${book.title} by ${book.author}. ${book.isRead ? "Opened" : "Sealed"}`
    })
    .join("\n");
    alert(stringArray);
}

function findBook(input) {
    if (!input) {
        error("The scroll lies blank — no word was given.");
        return null;
    }

    const normalizedInput = normalizedString(input);
    const foundBook = archive.find(function (book) {
        return book.title === normalizedInput || book.author === normalizedInput;
    });

    if (!foundBook) {
        alert("No record found.");
            return null;
    }
    return foundBook;
}

// finds a book by title and sets isRead to true
function markAsRead(input) {
    if (!input) {
        error("The scroll lies blank — no word was given.");
        return;
    }

    const book = findBook(input);
    if (!book) {
        return;
    }
    else if (book.isRead) {
        alert("Already in thy ledger.");
        return;
    }

    const choice = confirm(`${book.title} by ${book.author} awaits. Shall I mark it?`);
    if (choice) {
        book.isRead = true;
        alert(`${book.title} is now unsealed.`);
    }
};

function removeBook(input) {
    if (!input) {
        error("The scroll lies blank — no word was given.");
        return;
    }

    const book = findBook(input);

        if (!book) {
            return;
        }
            
        const choice = confirm(`${book.title} uncovered. Banish it?`);
        if (choice) {
            const index = archive.indexOf(book);
            archive.splice(index, 1);
            alert(`${book.title} by ${book.author} erased from record.`);
        }        
};

// handles errors
function error(message) {
    alert(message);
};

function isEmpty(array){
    return array.length === 0;
}

function exit(value, level) {
  const canceled = (value === null || value === false);
  if (!canceled) {
    return null;
  }

  else if (level === "menu") {
    alert("Depart in peace, seeker.")
    return "quit";
  }

  else if (level === "action") {
    return "menu";
  }
  return "backup";
}


function lab() {
    let menu = true;
    while (menu) {
        const options = prompt("Arcane Menu\n\nI. Add Tome\nII. View Shelves\nIII. Unseal\nIV. Remove Tome\nV. Take Leave\n\nChoose thy path");
        const action = exit(options, "menu");
        if (action === "quit") {
            break;
        }
        

        switch (options) {

            // Add a book to library
            case "1":
                const inputTitle = prompt("Name the tome");
                const act1 = exit(inputTitle, "action");
                if (act1 === "menu") {
                    break;
                }

                const inputAuthor = prompt("Name the author");
                const act2 = exit(inputAuthor, "action");
                if (act2 === "menu") {
                    break;
                }

                if (inputTitle === false || inputAuthor === false) {
                    break;
                }
                else {
                addBook(inputTitle, inputAuthor);
                alert(`${inputTitle} by ${inputAuthor} is now shelved in thy library!`)
                break;
                };

            // Display the library book list
            case "2":
                if (isEmpty(archive)){
                    alert("The shelves are bare — add tomes first.");
                    break;
                }
                else {
                    listBooks(archive);
                    break;
                }

            // Mark the book as Read
            case "3":
                if (isEmpty(archive)){
                    alert("The shelves are bare — add tomes first.");
                    break;
                }
                else {
                    const input = prompt("Name the book you seek");
                    const action = exit(input, "action");
                    if (action === "menu") {
                        break
                    };

                    const normalizedInput = normalizedString(input);
                    markAsRead(normalizedInput);
                    break;
                };
            
            // Remove book
            case "4":
                if (isEmpty(archive)){
                    alert("The shelves are bare — add tomes first.");
                    break;
                }

                else {
                    const input = prompt("Name the book you seek");
                    const action = exit(input, "action");
                    if (action === "menu") {
                        break
                    };

                    const normalizedInput = normalizedString(input);
                    removeBook(normalizedInput);
                    break;
                }

            case "5":
                alert("Depart in peace, seeker.")
                menu = false;
                break;

            default:
                error("An error brews! Try again.");
                break;

        }
    }
}

lab(); 
