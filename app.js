const express = require('express');
const path = require('node:path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(process.env.PORT || 3000, (error) => {
    if (error) return console.log('Failed to start server!');

    console.log(`Server listening on port ${process.env.PORT || 3000}`);
})