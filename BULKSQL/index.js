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

// let getRandomUser = () => {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(), // before version 9.1.0, use userName()
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }













// DATABASE CONNECTION

// got the database
const mysql2 = require('mysql2');
// create the connection to database
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'aadmi_aurat',
    password: 'jarelaurenahibataraha@123'
});















// Inserting New Data
let q = "INSERT INTO user ( id , username , email , password ) VALUES ?";
// Loop to call getRandomUser and generate 100 random users ( line no. 7)
let data = [];
for ( let i = 1; i <= 100; i++ ) {
    // push 100 random user data into array named data
    data.push(getRandomUser());
}


















//  MANIPULATING DATA
try{
    connection.query( q , [data] , ( err , result ) => {
    if ( err ) throw err;
    console.log(result);
});
} catch ( err ) {
    console.log( err );
}

connection.end();



