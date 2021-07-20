const Book = require("../models/book.model.js");

//retreive all books
exports.findAll = (req, res) => {
    Book.getAll((err, data) => {
        if(err){
            res.status(500).send({
                message : 
                err.message || "Error ocurred while retrieving books."
            });
        }else{
            res.send(data);
        }
    });
};

exports.findByUniqId = (req, res) => {
    
    // Validate Request
    if(!req.body) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
    }

    var bookUniqId = req.body.issue_id;
    console.log(req.body);

    Book.findByUniqId(bookUniqId, (err, data) => {
        if(err) {
            if(err.kind == "not_found") {
                res.status(404).send({
                    message : `Not found book with id ${bookUniqId}`
                });
            } else {
                res.status(500).send({
                    message : "Error retrieving book with id "  + req.body.issue_id
                });
            }
        } else {
            var result = {
                idx : data.id,
                bookname: data.bookname,
                active: data.active
            };
            res.send(result);
        }
    });
};