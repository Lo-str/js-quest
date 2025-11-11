//========== The Arcane Laboratorium ==========\\

// Store books titles and authors
const archive = [];

// handles accents, punctuation, double space, and lower case/Upper case letters
const normalizedString = function (str) {
    return str.normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase()
        .trim();
}

// asks for details and adds a new book object to the library
function addBook(rawTitle, rawAuthor){
    archive.push({
        title: normalizedString(rawTitle),
        author: normalizedString(rawAuthor),
        isRead: false
    });  
}

 // display a list of all books and their authors. One per line with map()
function listBooks(array) {
    const stringArray = array.map(function (book) {
        return `${book.title} by ${book.author}. ${book.isRead ? "Read" : "Unread"}`
        }).join("\n");
    alert(stringArray);
}



// finds a book by title and sets isRead to true
function markAsRead(input) {
    while (!archive.isRead) {
        const foundBook = archive.find(function (book) {
            return { input === book.title;
            

                if (foundBook) {
                    let choice = confirm(`Book found. Would you like to mark it as read?`);
                    if (choice === null) {
                        break;
                    }

                    else {
                        archive.isRead = true;
                        return `Book now added to your read list`;
                    }
                }
            }
        })
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

function isEmpty(array){
    return array.length === 0;
}



function lab() {
    let menu = true;
    while (menu) {
        const options = prompt("Menu\n\n1. Add Book\n2. List\n3. Mark as read\n4. Remove book\n5. Exit\n\nChoose an option");
        // const action = exit(options, "menu");
        // if (action === "quit") {
            // break;
        

        switch (options) {

            // Add a book to library
            case "1":
                const inputTitle = prompt("Enter a title");
                const inputAuthor = prompt("Enter an author");
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
                    const normalizeInput = normalizedString(input);
                    markAsRead(normalizeInput);
                    break;
                };

            case "4":
                if (isEmpty(archive)){
                    alert("Library empty, add books first");
                    break;
                }

                else {
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
                }
                break;

            case "5":
                alert("bye")
                menu = false;
                break;

            default:
                alert(error("try again"));
                break;

        }
    }
}

lab(); 
