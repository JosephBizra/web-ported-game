DROP DATABASE IF EXISTS president_racer_db;

CREATE DATABASE president_racer_db;

USE president_racer_db;

CREATE TABLE userprofiles (
    id Int (11) AUTO_INCREMENT NOT NULL,
    name VARCHAR (255) NOT NULL,
    password VARCHAR (255) NOT NULL,
    best_time Int (100),
    wins Int (100),
    losses Int (100),

    PRIMARY KEY (id)    
);

CREATE TABLE presidents (
    id Int (11) AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id)    
);

CREATE TABLE maps (
    id Int (11) AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id)    
);