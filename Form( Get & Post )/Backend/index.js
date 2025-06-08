const express = require('express');
const app = express();
const port = 8080;

// FOR Post request readability
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.get('/register', (req , res) => {
    let { user , pas } = req.query;
    console.log("Accepted get request");
    res.send(`standard GET response. Welcome ${user}! Your password is ${pas}`);
});


app.post('/register', (req , res) => {
    let { name , password } = req.body;
    console.log(req.body);
    res.send(`standard POST response. Welcome ${name}! Your password is ${password}`);
});


app.listen( port , () => {
    console.log('listening on port ' + port);
});