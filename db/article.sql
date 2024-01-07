CREATE TYPE article_type AS ENUM ('BLOG', 'PROJECT');

CREATE TABLE article (
  id SERIAL PRIMARY KEY,
  type article_type,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  read_time INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255) NOT NULL,
  content TEXT NOT NULL
);

CREATE TABLE article_updates (
  id SERIAL PRIMARY KEY,
  article_id INTEGER NOT NULL REFERENCES article(id) ON DELETE CASCADE,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_article_updates_article_id ON article_updates(article_id);

CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  tag VARCHAR(255) NOT NULL
);

CREATE TABLE technologies (
  id SERIAL PRIMARY KEY,
  technology VARCHAR(255) NOT NULL
);

CREATE TABLE article_tag (
  article_id INTEGER NOT NULL REFERENCES article(id),
  tag_id INTEGER NOT NULL REFERENCES tags(id),
  PRIMARY KEY (article_id, tag_id)
);
CREATE INDEX idx_article_tag_article_id ON article_tag(article_id);
CREATE INDEX idx_article_tag_tag_id ON article_tag(tag_id);

CREATE TABLE article_technology (
  article_id INTEGER NOT NULL REFERENCES article(id),
  technology_id INTEGER NOT NULL REFERENCES technologies(id),
  PRIMARY KEY (article_id, technology_id)
);
CREATE INDEX idx_article_technology_article_id ON article_technology(article_id);
CREATE INDEX idx_article_technology_technology_id ON article_technology(technology_id);

CREATE TABLE article_links (
  id SERIAL PRIMARY KEY,
  article_id INTEGER NOT NULL REFERENCES article(id) ON DELETE CASCADE,
  icon VARCHAR(255),
  href VARCHAR(255),
  text VARCHAR(255)
);
CREATE INDEX idx_article_links_article_id ON article_links(article_id);
