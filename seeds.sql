USE president_racer_db;

-- Test data for maps
INSERT INTO maps (name)
VALUES ("map 1");

INSERT INTO maps (name)
VALUES ("map 2");

INSERT INTO maps (name)
VALUES ("map 3");

-- Test data for president models
INSERT INTO presidents (name)
VALUES ("George Bush");

INSERT INTO presidents (name)
VALUES ("Elizabeth Warren");

INSERT INTO presidents (name)
VALUES ("Donald Trump");

-- Test data for user profiles
INSERT INTO userprofiles (name, email, password, best_time, wins, losses)
VALUES ("Peter Pan", "Peter@gmail.com", "bugsbunny", 3.20, 5, 3);

INSERT INTO userprofiles (name, email, password, best_time, wins, losses)
VALUES ("Aladin", "Aladin@gmail.com", "Jasmine", 5.34, 3, 7);

INSERT INTO userprofiles (name, email, password, best_time, wins, losses)
VALUES ("Arial", "Arial@gmail.com", "Fish", 8.14, 8, 7);

INSERT INTO userprofiles (name, email, password, best_time, wins, losses)
VALUES ("Batman", "Batman@gmail.com", "Joker123", 2.23, 10, 2);
