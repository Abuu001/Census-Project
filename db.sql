CREATE DATABASE  census;

-- To install the uuid-ossp module 
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
    user_id uuid PRIMARY KEY  DEFAULT uuid_generate_v4(),
    user_name VARCHAR(50) NOT NULL,
    user_email VARCHAR(50) NOT NULL,
    user_password VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT Now() 
);

-- alter table
ALTER TABLE users 
    ALTER  COLUMN user_password  TYPE VARCHAR(200);

INSERT INTO users (user_name,user_email,user_password) VALUES('Janel','janel34@gmail.com','miami892');

--expanded display --  \x on