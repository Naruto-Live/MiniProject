CREATE DATABASE college;

CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

CREATE TABLE user(
	id INT,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 00,
    following INT,
    CONSTRAINT age_check CHECK (age >= 13),
    PRIMARY KEY (id)
);



INSERT INTO user
(id , age , name )
VALUES
(10, 15 , "random" );



INSERT INTO user
(id , age , name , email , followers , following)
VALUES
(11, 16, "adam" , "adam@yahoo.in" , 123 , 145),
(2 , 15 , "bob" , "bob123@gmail.com" , 200 , 200),
(3 , 13 , "casey" , "casey@gmail.com" , 300 , 306),
(4 , 17 , "donald" , "donald@gmail.com" , 200 , 105);



SELECT id , name , age FROM user;
SELECT * FROM user;
SELECT DISTINCT age FROM user;



DROP DATABASE IF EXISTS user;
TRUNCATE TABLE user;


CREATE TABLE post (
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);