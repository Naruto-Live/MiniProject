// USING FLAKER.JS TO GENERATE RANDOM USER DATA
// import the faker library
// npm i @faker-js/faker
const { faker } = require('@faker-js/faker');
// generate a random user object
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}


// begining of server
const express = require("express");
const app = express();
const port = 8080;

// beginning of sql connection
const mysql2 = require("mysql2"); 
const connection = mysql2.createConnection({
    host : "localhost",
    user: "root",
    database: "aadmi_aurat",
    password: "jarelaurenahibataraha@123",
});









// i do not need to insert data so i commented the code below

// // Inserting New Data
// let q = "INSERT INTO user ( id , username , email , password ) VALUES ?";
// // Loop to call getRandomUser and generate 100 random users ( line no. 7)
// let data = [];
// for ( let i = 1; i <= 100; i++ ) {
//     // push 100 random user data into array named data
//     data.push(getRandomUser());
// }







// for ejs connection
const path = require("path");
app.set( "view engine" , "ejs" );
// finding directory named /views folder outside this file
app.set( "views" , path.join(__dirname , "/views") );















// HOME ROUTE
app.get("/", ( req , res ) => {
    let q = `SELECT count(*) FROM user`;
    //  MANIPULATING DATA
    try{
        connection.query( q , ( err , result ) => {
        if ( err ) throw err;
        let count = result[0]["count(*)"];
        res.render("home.ejs" , { count });
    });
    } catch ( err ) {
        console.log( err );
        res.send("Some error in database.")
    }
    // connection.end();
});




// SHOW ROUTE
app.get( "/user" , ( req , res ) => {
    let q = `SELECT * FROM user`;
    res.send("Success!!!");
});


// Server starts 
app.listen(port , () => {
    console.log("Server is running on Port : " , port);
});



