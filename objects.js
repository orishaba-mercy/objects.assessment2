const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];
    
//     Write a JavaScript program that performs the following tasks:
//     1. Create a function called getAvailableBooks that returns an array of all available
//     books.

function getAvailableBooks(){
    for (let x = 0; x < array.length; x++) {
        const x = array[x];
        
    }
}
console.log(x);
getAvailableBooks()

//     2. Create a function getBooksByAuthor that takes an author's name as an argument and
//     returns an array of all books by that author.
function getBooksByAuthor(){
    let author="Charles Dickens"
    let x =author.search.title
    return x
    
}
console.log(x);
getAvailableBooks()


//     3. Create a function addNewBook that takes a book object as an argument and adds it
//     to the library, ensuring that the new book has all required properties (title, author,
//     publicationYear, and isAvailable).
function addNewBook(){
    let x=[]
    let y=x.push({title:"the story",author:"klayer",publicationYear:2021})
     y=x.add.getAvailableBooks
    console.log(y);
}
addNewBook()
//     4. Create a function checkoutBook that takes a book title as an argument and changes
//     the book's isAvailable property to false. If the book is not found in the library, the
//     function should return a message indicating that the book is not available.
function checkoutBook(){
        let y=books.filter(book=>book.title)
      
         let x=y.map(book=>book.title)
      return  
}
console.log(x);
checkoutBook()
    

//     5. Create a function returnBook that takes a book title as an argument and changes the
//     book's isAvailable property to true. If the book is not found in the library, the function
//     should return a message indicating that the book does not belong to the library.
function returnBook(bookTitle){
 
       for (i in array){
        return ("book is available")
       }
       else{
        return ("book does not belong to the library")
       }
       
        
    }
    
