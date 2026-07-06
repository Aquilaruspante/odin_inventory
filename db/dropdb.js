const { Client } = require('pg');

const SQL = `
    DROP TABLE films CASCADE;
    DROP TABLE relations;
    DROP TABLE genres;
`;


async function main() {
    console.log('dropping tables');
    const client = new Client({
        connectionString: process.env.CONNECTION_STRING
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('Done!');
};


main();