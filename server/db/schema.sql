DROP DATABASE IF EXISTS db_book_repository;
CREATE DATABASE db_book_repository;

USE db_book_repository;

CREATE TABLE books(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(150) NOT NULL,
    description VARCHAR(250) NOT NULL,
    cover VARCHAR(50),

    PRIMARY KEY(id)
);

INSERT INTO books (id, title, description, cover)
VALUES
    ( 1, "No Longer Human", "a story of a man lost self", "cover.png"),
    ( 2, "Demian", "a story of a search for self", "cover.png"),
    ( 3, "The Little Prince", "a story of the search for your inner child", "cover.png");