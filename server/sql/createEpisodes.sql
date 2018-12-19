DROP TABLE IF EXISTS episodes;

CREATE TABLE episodes (
    episode_id BIGSERIAL PRIMARY KEY,
    episode_link VARCHAR NOT NULL UNIQUE,
    episode_name VARCHAR NOT NULL,
    episode_time_string VARCHAR,
    episode_time TIMESTAMP,
    episode_link VARCHAR,
    episode_tags TEXT[]
);

CREATE UNIQUE INDEX episode_id_index ON episodes (event_id);
