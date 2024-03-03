CREATE DATABASE cust;

CREATE TABLE info(
    sno SERIAL PRIMARY KEY,
    customer_name VARCHAR,
    age INTEGER,
    phone VARCHAR,
    location VARCHAR,
    date VARCHAR,
    time VARCHAR
);