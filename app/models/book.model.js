const sql = require("./db.js");

//constructor
const Book = function(book) {
    this.bookname = book.bookname;
    this.book_id = book.book_uniq_idx;
    this.active = book.active;
};


Book.findByUniqId = (bookUniqId, result) => {
    sql.query(`SELECT * FROM book WHERE id = "${bookUniqId}"`, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("found book", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Book with the id
        result({ kind: "not_found" }, null);
    } );
};

Book.getAll = result => {
    sql.query("SELECT * FROM book", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("books : ", res);
        result(null, res);
    });
};

module.exports = Book;