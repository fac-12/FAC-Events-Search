BEGIN;
	DROP TABLE IF EXISTS events, users, included_orgs, comments, interest;
	CREATE TABLE events
	(
		id serial PRIMARY KEY,
		event_name VARCHAR(100) NOT NULL,
		event_date DATE NOT NULL,
		event_time TIME NOT NULL,
		host_org_name VARCHAR(100) NOT NULL,
		host_org_id INTEGER REFERENCES included_orgs(id),
		venue_name VARCHAR(100),
		venue_address VARCHAR(100) NOT NULL,
		venue_postcode VARCHAR(10) NOT NULL,
		event_url VARCHAR(100),
		event_desc TEXT
	);
	CREATE TABLE users
	(
		id serial PRIMARY KEY,
		name VARCHAR(100),
		github_username VARCHAR(100) NOT NULL,
		email VARCHAR(50),
		cohort INTEGER,
		bio TEXT
	);
	CREATE TABLE interest
	(
		events_id INTEGER REFERENCES events(id),
		users_id INTEGER REFERENCES users(id)
	);
	CREATE TABLE event_comments
	(
		id serial PRIMARY KEY,
		events_id INTEGER REFERENCES events(id) ON UPDATE CASCADE,
		users_id INTEGER REFERENCES users(id) ON UPDATE CASCADE,
		time TIME NOT NULL,
		date DATE NOT NULL,
		comment TEXT
	);
	CREATE TABLE included_orgs
	(
		id serial PRIMARY KEY,
		name VARCHAR(100),
		url VARCHAR(150)
	);
	CREATE TABLE reviews
	(
		events_id INTEGER REFERENCES events(id),
		users_id INTEGER REFERENCES users(id),
		review TEXT,
		stars INTEGER
	)
	COMMIT;