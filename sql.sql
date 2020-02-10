-- Table: shivam_users
CREATE TABLE shivam_users
(
    id integer NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    username text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    phone text COLLATE pg_catalog."default" NOT NULL,
    website text COLLATE pg_catalog."default" NOT NULL,
    address json NOT NULL,
    company json NOT NULL,
    CONSTRAINT users_pk PRIMARY KEY (id)
); 

CREATE TABLE shivam_posts
(
    id integer NOT NULL,
    userid integer,
    title text COLLATE pg_catalog."default" NOT NULL,
    body text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT posts_pkedy PRIMARY KEY (id),
    CONSTRAINT posts_userid_fkey FOREIGN KEY (userid)
        REFERENCES shivam_users
         (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE shivam_comments
(
    id integer NOT NULL,
    postid integer,
    name text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    body text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT comments_c_pkey PRIMARY KEY (id),
    CONSTRAINT comments_postid_fkey FOREIGN KEY (postid)
        REFERENCES shivam_posts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);
CREATE TABLE shivam_albums
(
    id integer NOT NULL,
    userid integer,
    title text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT albums_a_pkey PRIMARY KEY (id),
    CONSTRAINT albums_userid_fkey FOREIGN KEY (userid)
        REFERENCES shivam_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
); 
CREATE TABLE shivam_photos
(
    id integer NOT NULL,
    albumid integer,
    title text COLLATE pg_catalog."default" NOT NULL,
    url text COLLATE pg_catalog."default" NOT NULL,
    thumbnailurl text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT photos_p_key PRIMARY KEY (id),
    CONSTRAINT photos_albumid_fkey FOREIGN KEY (albumid)
        REFERENCES shivam_albums (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE shivam_todos
(
    id integer NOT NULL,
    userid integer,
    title text COLLATE pg_catalog."default" NOT NULL,
    completed boolean NOT NULL,
    CONSTRAINT todos_t_pkey PRIMARY KEY (id),
    CONSTRAINT todos_userid_fkey FOREIGN KEY (userid)
        REFERENCES shivam_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);