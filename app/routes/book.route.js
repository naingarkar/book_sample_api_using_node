module.exports = app => {
    const books = require("../controllers/book.controller.js");

    // Retreive all Books
    app.get("/books", books.findAll);

    // Retreive a single Book with UniqId
    app.post("/api/book/detail",books.findByUniqId);
}