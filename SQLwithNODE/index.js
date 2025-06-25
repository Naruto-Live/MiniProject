const { faker } = require('@faker-js/faker');



// got the database
const mysql2 = require('mysql2');


// create the connection to database
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'aadmi_aurat',
    password: 'jarelaurenahibataraha@123'
});


// connection query

// let q = "SHOW TABLES"
// Inserting New Data
let q = "INSERT INTO user ( id , username , email , password ) VALUES ?";

let users = [[ "126" , "kachrapakora" , "kachrapakora@gmail.com" , "*********" ],
[ "127" , "sakura" , "sakura@gmail.com" , "**lund***" ]];

try{
    connection.query( q , [users] , ( err , result ) => {
    if ( err ) throw err;
    console.log(result);
});
} catch ( err ) {
    console.log( err );
}

connection.end();




// generate a random user object
let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

