const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// create application/x-www-form-urlencoded parser
// app.use(bodyParser.urlencoded({ extended: false }));

// create application/json parser
app.use(bodyParser.json());

 
// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
// });

//simple route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to bronaing application."});
});

require("./app/routes/book.route.js")(app);

//set port, listen for requests
app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
});