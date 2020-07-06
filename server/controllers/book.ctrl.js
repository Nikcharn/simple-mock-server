module.exports = {

    register: (server, storage) => {

        server.get('/api/books', (req, res) => {
            res.jsonp(storage.getBooks());
        });

        server.put('/api/book', (req, res) => {
            storage.addBook(req.body)
            res.sendStatus(200);
        });

    }

};
