const { Client } = require('pg');

const SQL = `
    CREATE TABLE IF NOT EXISTS films (
        id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR (255) NOT NULL UNIQUE CHECK (trim(name) <> ''),
        year INT NOT NULL,
        director VARCHAR (255) CHECK (trim(director) <> ''),
        image VARCHAR NOT NULL CHECK (trim(image) <> '')
    );

    INSERT INTO films (name, year, director, image)
        VALUES
            ('Save Private Ryan', 1998, 'Steven Spielberg', 'https://upload.wikimedia.org/wikipedia/en/a/ac/Saving_Private_Ryan_poster.jpg'),
            ('The Witch', 2016, 'Robert Eggers', 'https://upload.wikimedia.org/wikipedia/en/b/bf/The_Witch_poster.png'),
            ('Idiocracy', 2006, 'Mike Judge', 'https://upload.wikimedia.org/wikipedia/en/6/6b/Idiocracy_movie_poster.jpg');

    
    CREATE TABLE IF NOT EXISTS genres (
        id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR (255) UNIQUE NOT NULL CHECK (trim(name) <> '')
    );

    INSERT INTO genres (name)
        VALUES 
            ('drama'),
            ('horror'),
            ('comedy');


    CREATE TABLE IF NOT EXISTS relations (
        film_id INT NOT NULL,
        genre_id INT NOT NULL,
        PRIMARY KEY (film_id, genre_id),
        FOREIGN KEY (film_id) REFERENCES films(id) ON DELETE CASCADE,
        FOREIGN KEY (genre_id) REFERENCES genres(id) ON DELETE CASCADE
    );

    INSERT INTO relations (film_id, genre_id)
        VALUES 
            (1, 1),
            (2, 2),
            (3, 3);
`;

async function main() {
    console.log('seeding...')
    const client = new Client({
        connectionString: process.env.CONNECTION_STRING
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done!!!');
};

main();