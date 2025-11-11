//========== The Arcane Laboratorium ==========\\

// Store Titles and authors list
const archive = [];

// Handles accents, punctuation, double space, and lower case/Upper case letters
const normalizedString = function (str) {
    return str.normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase()
        .trim();
}

// asks for details and adds a new book object to the library
function addBook(rawTitle, rawAuthor){
    title.push(rawTitle);
    author.push(rawAuthor);
    archive.push({
        title: normalizedString(rawAuthor),
        author: normalizedString(rawAuthor),
    });
}

 // display a list of all books (console.log works fine here)
function listBooks() {
    alert(archive);
}

// finds a book by title and sets isRead to true
function markAsRead(input) {
    let isRead = false;
    while (isRead) {
        const foundBook = archive.find(function (book) {
        return input === book.title
        });

        if (foundBook) {
            let isRead = confirm(`Book found. Would you like to mark it as read?`);
            if (isRead === null) {
                return;
            }

            else {
                isRead = true;
                return `Book now added to your read list`;
            }
        }
    }
};

function removeBook(book) {
    archive.remove({
        title: normalizedString(book),
        author: normalizedString(author[i]),
    });
};

// handles errors
function error(message) {
    alert(`Error, ${message}`);
};



function lab() {
    let menu = true;
    while (menu) {
        const options = prompt("Menu");
        const action = exit(options, "menu");
        if (action === "quit") {
            break;
        }
    }

    switch (options) {

        // Add a book to library
        case "1":
            const inputTitle = normalizedString(prompt("Enter a title"));
            const inputAuthor = normalizedString(prompt("Enter an author"));
            if (inputAuthor === false) {
                return null;
            }

            // const action = exit(input, "step");
            alert(`${inputTitle} by ${inputAuthor} has been added to you library!`)
            addBook(inputTitle, inputAuthor)
            break;

        // Display the library book list
        case "2":
            listBooks()
            break;

        // Mark the book as Read
        case "3":
            const input = prompt("Choose a book");
            const normalizeInput = normalizedString(input);
            markAsRead(normalizeInput);
            break;

        case "4":
            let bookTitle = normalizedString(prompt("Enter a title or author"));
            let isFound = true;
            while (isFound) {
                const foundBook = archive.find(function (book) {
                    return bookTitle === book.title
                });

                if (foundBook) {
                    let result = confirm(`${foundBook} has been found. Would you like to remove it from your library?`);
                    if (result === null) {
                        return;
                    }

                    else {
                        removeBook(foundBook);
                        return `Book now added to your read list`;
                    }
                }
                break;
            }
            break;

        case "5":
            menu = false;
            break;

        default:
            alert(error(""));
            break;

    };
}

lab(); 
