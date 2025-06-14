CREATE TABLE student(
	roll_no INT,
    name VARCHAR(50),
    city VARCHAR(25),
    marks INT
);

INSERT INTO student
( roll_no , name , city , marks )
VALUES
( 110 , "adam" , "Delhi" , 76 ),
( 108 , "bob" , "Mumbai" , 65 ),
( 124 , "casey" , "Pune" , 94 ),
( 112 , "duke" , "Pune" , 80 );

SELECT * FROM student;

SELECT * FROM student
WHERE marks > 75;

SELECT city FROM student;
SELECT DISTINCT city
FROM student;
SELECT city , MAX(marks)
FROM student
GROUP BY city;

SELECT AVG(marks)
FROM student;

ALTER TABLE student
ADD COLUMN grade VARCHAR(2) DEFAULT "F";

UPDATE student
SET grade = "O"
WHERE marks >= 80;

UPDATE student
SET grade = "A"
WHERE marks < 80 AND marks >= 60;

UPDATE student
SET grade = "B"
WHERE marks < 60 AND marks >= 40;

UPDATE student
SET grade = "O"
WHERE marks < 40 AND marks >= 20;