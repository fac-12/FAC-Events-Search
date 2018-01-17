BEGIN;
	DROP TABLE IF EXISTS event_comments, interest, suggested, reviews, events, users, included_orgs;
	CREATE TABLE events
	(
		id serial PRIMARY KEY,
		event_name VARCHAR(150) NOT NULL,
		event_datetime BIGINT NOT NULL,
		host_org_name VARCHAR(150) NOT NULL,
		venue_name VARCHAR(100),
		venue_address VARCHAR(150),
		venue_postcode VARCHAR(150),
		event_url VARCHAR(150),
		event_desc TEXT,
		venue_lat VARCHAR(100),
		venue_lon VARCHAR(100)
	);
	CREATE TABLE users
	(
		id VARCHAR(20) PRIMARY KEY,
		name VARCHAR(100),
		github_username VARCHAR(100) NOT NULL,
		email VARCHAR(50),
		photo_url VARCHAR(100),
		cohort INTEGER,
		bio TEXT
	);
	CREATE TABLE included_orgs
	(
		id serial PRIMARY KEY,
		name VARCHAR(100),
		url VARCHAR(150)
	);
	CREATE TABLE interest
	(
		events_id INTEGER REFERENCES events(id) ON UPDATE CASCADE,
		users_id VARCHAR(20) REFERENCES users(id) ON UPDATE CASCADE
	);
	CREATE TABLE event_comments
	(
		id serial PRIMARY KEY,
		events_id INTEGER REFERENCES events(id) ON UPDATE CASCADE,
		users_id VARCHAR(20) REFERENCES users(id) ON UPDATE CASCADE,
		time TIME NOT NULL,
		date DATE NOT NULL,
		comment TEXT
	);
	CREATE TABLE reviews
	(
		events_id INTEGER REFERENCES events(id) ON UPDATE CASCADE,
		users_id VARCHAR(20) REFERENCES users(id) ON UPDATE CASCADE,
		review TEXT,
		stars INTEGER
	);
	CREATE TABLE suggested
	(
		orgs_id INTEGER REFERENCES included_orgs(id) ON UPDATE CASCADE,
		users_id VARCHAR(20) REFERENCES users(id) ON UPDATE CASCADE
	);
	COMMIT;