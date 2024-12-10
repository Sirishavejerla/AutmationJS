// Create the Book class
class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  
    // Method to return the details of the book
    getDetails() {
      return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
    }
  }
  
  // Step 2: Create the Library class
  class Library {
    constructor() {
      this.books = [];  // List for books hold
    }
  
    // Method to add a book to the library
    addBook(book) {
      this.books.push(book);
      console.log(`Added: ${book.title}`);
    }
  
  }