//========== The Arcane Laboratorium ==========\\

// Store books titles and authors
const archive = [];

// handles accents, punctuation, double space, and lower case/Upper case letters
const normalizedString = function (str) {
  if (typeof str !== "string") {
    error("invalid input");
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
        error("missing title or author");
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
        error("library empty");
        return;
    
    }
    const stringArray = array
    .map(function (book) {
        return `${book.title} by ${book.author}. ${book.isRead ? "Read" : "Unread"}`
    })
    .join("\n");
    alert(stringArray);
}

function findBook(input) {
    if (!input) {
        error("no input provided");
        return null;
    }

    const normalizedInput = normalizedString(input);
    const foundBook = archive.find(function (book) {
        return book.title === normalizedInput || book.author === normalizedInput;
    });

    if (!foundBook) {
        alert("No matching book");
            return null;
    }
    return foundBook;
}

// finds a book by title and sets isRead to true
function markAsRead(input) {
    if (!input) {
        error("no book title provided");
        return;
    }

    const book = findBook(input);
    if (!book) {
        return;
    }
    else if (book.isRead) {
        alert("already read");
        return;
    }

    const choice = confirm(`${book.title} by ${book.author} found. Would you like to mark it as read?`);
    if (choice) {
        book.isRead = true;
        alert(`${book.title} now added to your read list`);
    }
};

function removeBook(input) {
    if (!input) {
        error("no book title provided");
        return;
    }

    const book = findBook(input);

        if (!book) {
            return;
        }
            
        const choice = confirm(`${book.title} found. Would you like to remove it?`);
        if (choice) {
            const index = archive.indexOf(book);
            archive.splice(index, 1);
            alert(`${book.title} by ${book.author} successfully removed from library.`);
        }        
};

// handles errors
function error(message) {
    alert(`Error, ${message}`);
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
    alert("May the realm favor your journey!")
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
        const options = prompt("Menu\n\n1. Add Book\n2. List\n3. Mark as read\n4. Remove book\n5. Exit\n\nChoose an option");
        const action = exit(options, "menu");
        if (action === "quit") {
            break;
        }
        

        switch (options) {

            // Add a book to library
            case "1":
                const inputTitle = prompt("Enter a title");
                const act1 = exit(inputTitle, "action");
                if (act1 === "menu") {
                    break;
                }

                const inputAuthor = prompt("Enter an author");
                const act2 = exit(inputAuthor, "action");
                if (act2 === "menu") {
                    break;
                }

                if (inputTitle === false || inputAuthor === false) {
                    break;
                }
                else {
                addBook(inputTitle, inputAuthor);
                alert(`${inputTitle} by ${inputAuthor} has been added to you library!`)
                break;
                };

            // Display the library book list
            case "2":
                if (isEmpty(archive)){
                    alert("Library empty, add books first");
                    break;
                }
                else {
                    listBooks(archive);
                    break;
                }

            // Mark the book as Read
            case "3":
                if (isEmpty(archive)){
                    alert("Library empty, add books first");
                    break;
                }
                else {
                    const input = prompt("Choose a book");
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
                    alert("Library empty, add books first");
                    break;
                }

                else {
                    const input = prompt("Choose a book");
                    const action = exit(input, "action");
                    if (action === "menu") {
                        break
                    };

                    const normalizedInput = normalizedString(input);
                    removeBook(normalizedInput);
                    break;
                }

            case "5":
                alert("bye")
                menu = false;
                break;

            default:
                error("try again");
                break;

        }
    }
}

lab(); 
