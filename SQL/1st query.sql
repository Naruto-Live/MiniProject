CREATE DATABASE college;

USE college;

CREATE TABLE student (
	roll_no INT,
    name VARCHAR(30),
    age INT
);

INSERT INTO student
VALUES
( 101 , "adam" , 25 ),
( 102 , "bob" , 12 );

SELECT * FROM student;

CREATE DATABASE IF NOT EXISTS instagram;


DROP DATABASE IF EXISTS college;


SHOW DATABASES;


USE instagram;

SHOW TABLES;