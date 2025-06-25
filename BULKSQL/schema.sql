-- USE aadmi_aurat;
-- source schema.sql;

CREATE TABLE IF NOT EXISTS user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

-- OR 
-- IF NOT EXISTS (SELECT * FROM information_schema.tables WHERE table_name = 'user') THEN
--     CREATE TABLE user (
--         id VARCHAR(50) PRIMARY KEY,
--         username VARCHAR(50) UNIQUE,
--         email VARCHAR(50) UNIQUE NOT NULL,
--         password VARCHAR(50) NOT NULL
--     );
-- END IF;



SHOW TABLES;
