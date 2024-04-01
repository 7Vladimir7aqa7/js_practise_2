// // Створити об'єкт Library, який має:

// // Масив books [] - масив, де містяться об'єкти.
// // Метод addBook - метод, який приймає параметри bookName, bookAuthor, bookYear та bookId та додає новий об'єкт із цими параметрами до масиву books
// // Метод printBookInfo - метод, який приймає параметр bookId та виводить всю інформацію(ім'я, автор, рік) книжки з таким айді
// // Метод printAllBooks - метод, який виводить інформацію про всі книжки в наявності(їх ім'я, авторів, роки та айді)
// // Потренуватись додавати нові книжки та викликати інші методи об'єкта Library

const Library = {
books : [],
addBook: function(bookName, bookAuthor, bookYear, bookId) {
const newBook = {
  name: bookName,
  author: bookAuthor,
  year: bookYear,
  id: bookId
};
this.books.push(newBook);
},

printBookInfo: function(bookId) {
    const book = this.books.find(book => book.id === bookId);
    if (book) {
        console.log(`Book Name: ${book.name}`);
        console.log(`Book Author: ${book.author}`);
        console.log(`Year: ${book.year}`);
        console.log(`Id: ${book.id}`);
            }   else {
            console.log(`Book with ID ${bookId} not found`);
        }
    },
printAllBooks: function() {
        console.log("All Books:");
    this.books.forEach(book => {
        console.log(`Book Name: ${book.name}`);
        console.log(`Book Author: ${book.author}`);
        console.log(`Year: ${book.year}`);
        console.log(`Id: ${book.id}`);
    });
}
};

Library.addBook("Kortik", "A.Ribakov", 1948, 1);
Library.addBook("Dikaya sobaka Dingo", "R.Fraerman", 1940, 2);
Library.addBook("Basni", "A.Krylov", 1911, 3)

Library.printAllBooks();

