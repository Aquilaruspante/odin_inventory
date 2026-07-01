const express = require('express');
const path = require('node:path');

const filmRouter = require('./routes/filmRoute');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/film', filmRouter);

app.get('/', (req, res) => {
    res.send('render homepage');
});

app.listen(process.env.PORT || 3000, (error) => {
    if (error) return console.log('Failed to start server!');

    console.log(`Server listening on port ${process.env.PORT || 3000}`);
})