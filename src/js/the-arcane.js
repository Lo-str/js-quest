//========== The Arcane Laboratorium ==========\\

const books = {
    title: "",
    author: "",
    isRead: false
}

// asks for details and adds a new book object to the library
function addBook(input){

} 
function listBooks(){} // display a list of all books (console.log works fine here)
function markAsRead(){} // finds a book by title and sets isRead to true
function removeBook(input){} // asks for details and adds a new book object to the library
function accountError(){} // handles errors


let menu = true;
function library(){

    while (menu) {
        const options = prompt("Menu");
        const action = exit(options, "menu");
        if (action === "quit") {
            break;
        }
    }

    switch (options){
        case "1":
            addBook();
            break;

        case "2":
            listBooks()
            break;

        case "3":
            markAsRead();
            break;

        case "4":
            removeBook()
            break;

        case "5":
            menu = false;
            break;

        default:
            alert(accountError(""));
            break;
        
    }
}

