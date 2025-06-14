CREATE DATABASE IF NOT EXISTS college;

USE college;

CREATE TABLE teacher(
	id INT,
    name VARCHAR(50),
    subject VARCHAR(50),
    salary INT
);

INSERT INTO teacher
( id , name , subject , salary )
VALUES
( 23 , "ajay" , "math" , 50000 ),
( 47 , "bharat" , "english" , 60000 ),
( 18 , "chetan" , "chemistry" , 45000 ),
( 9 , "divya" , "physics" , 75000 );

SELECT * FROM teacher;


SELECT * FROM teacher
WHERE salary > 55000 ;

ALTER TABLE teacher
CHANGE COLUMN salary ctc INT DEFAULT 0;

UPDATE teacher
SET ctc = ctc + (0.25) * ctc ;

ALTER TABLE teacher
ADD COLUMN city VARCHAR(25) DEFAULT "Guargao";

ALTER TABLE teacher
DROP COLUMN ctc;