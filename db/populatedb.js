const { Client } = require('pg');

const SQL = `
    CREATE TABLE IF NOT EXISTS films (
        id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR (255) NOT NULL,
        year INT NOT NULL,
        director VARCHAR (255),
        image VARCHAR (255),
        genre VARCHAR (255)
    );

    INSERT INTO films (name, year, director, image, genre)
        VALUES
            ('Save Private Ryan', 1998, 'Steven Spielberg', 'https://upload.wikimedia.org/wikipedia/en/a/ac/Saving_Private_Ryan_poster.jpg', 'dramatic'),
            ('The Withc', 2016, 'Robert Eggers', 'https://upload.wikimedia.org/wikipedia/en/b/bf/The_Witch_poster.png', 'horror'),
            ('Idiocracy', 2006, 'Mike Judge', 'https://upload.wikimedia.org/wikipedia/en/6/6b/Idiocracy_movie_poster.jpg', 'comedy');
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