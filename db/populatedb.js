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
            ('Saving Private Ryan', 1998, 'Steven Spielberg', 'https://upload.wikimedia.org/wikipedia/en/a/ac/Saving_Private_Ryan_poster.jpg'),
            ('The Witch', 2016, 'Robert Eggers', 'https://upload.wikimedia.org/wikipedia/en/b/bf/The_Witch_poster.png'),
            ('Idiocracy', 2006, 'Mike Judge', 'https://upload.wikimedia.org/wikipedia/en/6/6b/Idiocracy_movie_poster.jpg'),
            ('300', 2007, 'Zack Snyder', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZo1d19MgYmsgoNGy2WdT_IOxWquppJ25p-uZyF5SdGA&s=10'),
            ('Interstellar', 2014, 'Christopher Nolan', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK__lNkFiWtsmI8U3cOYxEew7LJCqkviBQ7TILCEyosciS3cB4Mae9eqA8G_Y1TBOC5zK4akY-MlMAP1DHELUcD7GtqmEBhwHb1qLGhpIYkA&s=10'),
            ('Dune', 2021, 'Denis Villeneuve', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaeWiQtOFwUytMX5YoHTRKg93A131t6mmU8rI9-wbWvCGG_N72ZemVbLLNCzfBvPUfCuHNqz1uIv5uYxdgx7KCeU7jo-HcJ7ggq8iVUDpLg&s=10'),
            ('Ace Ventura: When nature calls', 1994, 'Tom Shadyac', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dj-6EtXgtDGkUUW0HaspN1g-H2XWImT4qLeWkWeqIg&s=10'),
            ('Hereditary', 2018, 'Ari Aster', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XzdY6rS1wRVm1pwELh2D034n0NYD38QY0WuW6DP7eg&s=10'),
            ('American Pie', 1999, 'Paul Weitz', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2-As6E_KerQSWw50waUMNoA2bSaS_XS-b5_PrIVKQfIBoTK4x_DnfqRFcXGzHMpQKIXhddkeHsiXTFi9pTnpv8fWNR3El9dK9O3tMxrG2g&s=10'),
            ('Midsommar', 2019, 'Ari Aster', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHcJEtTaJ3-lCQtlJiYYijOG6z-ZkU7Q65M1eRt17qqJWLVEMmegkQnTreMVQvXzx4N0Ks-aBXSQr9-18h5cZZypHSGriZ6GWpO-ZR3WRJ&s=10'),
            ('Sleepy Hollow', 2000, 'Tim Burton', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt44_NJ8jqNiE52guzCvt76zywC09eT3SrtXblNydlh4RXICLwi67M_4K0Tv8LiHWgoAwnMGAy0vfbc1zkQ76ZMZ6-UFgoBE7A0z-OoAnY&s=10'),
            ('Edward Scissorhands', 1991, 'Tim Burton', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTulgxJ3n6dny8-kjxP5XWoRfVlszp4i-glGJo0b0lG-g&s=10');
            
    
    CREATE TABLE IF NOT EXISTS genres (
        id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR (255) UNIQUE NOT NULL CHECK (trim(name) <> '')
    );

    INSERT INTO genres (name)
        VALUES 
            ('drama'),
            ('horror'),
            ('comedy'),
            ('warfare'),
            ('historical'),
            ('action'),
            ('sci-fi'),
            ('adventure');


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
            (1, 4),
            (1, 5),
            (1, 6),
            (2, 2),
            (2, 1),
            (2, 5),
            (3, 3),
            (4, 1),
            (4, 4),
            (4, 5),
            (4, 6),
            (5, 1),
            (5, 6),
            (5, 7),
            (6, 7),
            (6, 8),
            (7, 3),
            (7, 8),
            (8, 1),
            (8, 2),
            (9, 3),
            (10, 2),
            (10, 1),
            (11, 2),
            (12, 1),
            (12, 2);
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