const path = require('path');
var uuid = require('node-uuid');

module.exports = {


    register(jsonServer) {
        this.router = jsonServer.router(path.join(__dirname + '/../db/book.json'));
        this.books = this.router.db.get('books').value();
    },

    getBooks() {
        return this.books;
    },

    addBook(book) {
        this.books.push({
            id: uuid.v4(),
            name: book.name || 'Unknown name',
            author: book.author || 'Unknown author',
            genre: book.genre || 'Unknown genre'
        });
    }
};
