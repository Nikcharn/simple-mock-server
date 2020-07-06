const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const middlewares = jsonServer.defaults({});

// Storages
const bookStorage = require(__dirname + '/storages/book.storage');
bookStorage.register(jsonServer);

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Controllers
const bookController = require(__dirname + '/controllers/book.ctrl');
bookController.register(server, bookStorage);


server.listen(process.env.PORT || 3000, () => {
    console.log('Simple mocks server is running on http://localhost:3000');
});