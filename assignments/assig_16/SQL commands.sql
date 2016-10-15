/* JOIN operation on TABLES*/
/*     Waht we want to see       Tables that hold date     How the tables are linked */
SELECT Album.title, Artist.name FROM Album JOIN Artist ON Album.artist_id = Artist.id
/*Just to see connection from above*/
SELECT Album.title, Album.artist_id, Artist.id, Artist.name FROM Album JOIN Artist ON Album.artist_id = Artist.id

/*     Waht we want to see     Tables that hold date    How the tables are linked */
SELECT Track.title, Genre.name FROM Track JOIN Genre ON Track.genre_id = Genre.id

/*IF command without ON or WHERE section is used it will create table with all possible connections*/
SELECT Track.title, Genre.name FROM Track JOIN Genre

/*     Waht we want to see */
SELECT Track.title, Artist.name, Album.title, Genre.name FROM 
/*   Tables that hold date    */
Track JOIN Genre JOIN Album JOIN Artist ON
/*  How the tables are linked  */
 Track.genre_id = Genre.id AND Track.album_id = Album.id AND Album.artist_id = Artist.id


/* CREATE Genre TABLE */
CREATE TABLE Genre(
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
name TEXT
);
/* CREATE Album TABLE */
CREATE TABLE Album(
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
artist_id INTEGER,
name TEXT
);
/* CREATE Album TABLE */
CREATE TABLE Album(
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
artist_id INTEGER,
title TEXT
);
/* CREATE Track TABLE */
CREATE TABLE Track (
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
title TEXT,
album_id INTEGER,
genre_id INTEGER,
len INTEGER, rating INTEGER, count INTEGER
)

/* POPULATE Artist TABLE */
INSERT INTO Artist (name) VALUES ('Led Zepplin');
INSERT INTO Artist (name) VALUES ('AC/DC');
/* POPULATE Genre TABLE */
INSERT INTO Genre (name) VALUES ('Rock');
INSERT INTO Genre (name) VALUES ('Metal');
/* POPULATE Track TABLE */
INSERT INTO Album (title, artist_id) VALUES ('Who Made Who', 2);
INSERT INTO Album (title, artist_id) VALUES ('IV', 1)
INSERT INTO Album (title, artist_id) VALUES ('Who Made Who', 2);
INSERT INTO Album (title, artist_id) VALUES ('IV', 1);
/* POPULATE Track TABLE */
INSERT INTO Track (title, rating, len, count, album_id, genre_id) VALUES ('Black Dog', 5, 297, 0, 2, 1);
INSERT INTO Track (title, rating, len, count, album_id, genre_id) VALUES ('Stairway', 5, 487, 0, 2, 1);
INSERT INTO Track (title, rating, len, count, album_id, genre_id) VALUES ('About to Rock', 5, 313, 0, 1, 2);
INSERT INTO Track (title, rating, len, count, album_id, genre_id) VALUES ('Who Made Who', 5, 207, 0, 1, 2)
