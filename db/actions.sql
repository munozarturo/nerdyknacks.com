CREATE OR REPLACE FUNCTION get_all_articles()
RETURNS TABLE(
    article_id INTEGER,
    article_title VARCHAR,
    article_subtitle VARCHAR,
    article_timestamp TIMESTAMPTZ,
    article_read_time INTEGER,
    article_technologies TEXT[],
    article_tags TEXT[]
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        a.id,
        a.title,
        a.subtitle,
        a.created_at,
        a.read_time,
        ARRAY(SELECT t.technology FROM article_technologies t WHERE t.article_id = a.id) AS technologies,
        ARRAY(SELECT tg.tag FROM article_tags tg WHERE tg.article_id = a.id) AS tags
    FROM
        article a;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_article(_article_id INTEGER)
RETURNS TABLE(
    article_id INTEGER,
    article_title VARCHAR,
    article_subtitle VARCHAR,
    article_timestamp TIMESTAMPTZ,
    article_read_time INTEGER,
    article_technologies TEXT[],
    article_tags TEXT[]
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        a.id,
        a.title,
        a.subtitle,
        a.created_at,
        a.read_time,
        ARRAY(SELECT t.technology FROM article_technologies t WHERE t.article_id = a.id) AS technologies,
        ARRAY(SELECT tg.tag FROM article_tags tg WHERE tg.article_id = a.id) AS tags
    FROM
        article a
    WHERE
        a.id = _article_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION create_article(title VARCHAR, subtitle VARCHAR, content TEXT)
RETURNS INTEGER AS $$
DECLARE
    new_article_id INTEGER;
BEGIN
    INSERT INTO article (title, subtitle, content)
    VALUES (title, subtitle, content)
    RETURNING id INTO new_article_id;

    RETURN new_article_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION set_article_tags(article_id INTEGER, tags TEXT[])
RETURNS VOID AS $$
DECLARE
    tag TEXT;
BEGIN
    -- Delete existing tags for the article
    DELETE FROM article_tags WHERE article_id = article_id;

    -- Add new tags
    FOREACH tag IN ARRAY tags LOOP
        INSERT INTO article_tags (article_id, tag) VALUES (article_id, tag);
    END LOOP;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION set_article_technologies(article_id INTEGER, technologies TEXT[])
RETURNS VOID AS $$
DECLARE
    technology TEXT;
BEGIN
    -- Delete existing technologies for the article
    DELETE FROM article_technologies WHERE article_id = article_id;

    -- Add new technologies
    FOREACH technology IN ARRAY technologies LOOP
        INSERT INTO article_technologies (article_id, technology) VALUES (article_id, technology);
    END LOOP;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION set_article_links(article_id INTEGER, icons TEXT[], hrefs TEXT[], texts TEXT[])
RETURNS VOID AS $$
DECLARE
    i INTEGER := 1;
BEGIN
    -- Check if all arrays have the same length
    IF NOT(array_length(icons, 1) = array_length(hrefs, 1) AND array_length(hrefs, 1) = array_length(texts, 1)) THEN
        RAISE EXCEPTION 'Arrays must have the same length';
    END IF;

    -- Delete existing links for the article
    DELETE FROM article_links WHERE article_id = article_id;

    -- Add new links
    LOOP
        EXIT WHEN i > array_length(icons, 1);
        INSERT INTO article_links (article_id, icon, href, text) VALUES (article_id, icons[i], hrefs[i], texts[i]);
        i := i + 1;
    END LOOP;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_article(
    _article_id INTEGER,
    _title VARCHAR(255),
    _subtitle VARCHAR(255),
    _content TEXT
)
RETURNS VOID AS $$
BEGIN
    -- Update the article only if the new values are provided
    UPDATE article
    SET title = COALESCE(_title, title),
        subtitle = COALESCE(_subtitle, subtitle),
        content = COALESCE(_content, content)
    WHERE id = _article_id;

    -- Insert a record into the updates table
    INSERT INTO article_updates (article_id, timestamp)
    VALUES (_article_id, CURRENT_TIMESTAMP);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION delete_article(_article_id INTEGER)
RETURNS VOID AS $$
BEGIN
    -- Delete the article
    DELETE FROM article WHERE id = _article_id;
END;
$$ LANGUAGE plpgsql;
