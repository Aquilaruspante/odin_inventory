const express = require('express');
const path = require('node:path');

const filmRouter = require('./routes/filmRoute');
const filmControllers = require('./controllers/filmCcontrollers');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/film', filmRouter);

app.get('/', filmControllers.filmListGet);

app.listen(process.env.PORT || 3000, (error) => {
    if (error) return console.log('Failed to start server!');

    console.log(`Server listening on port ${process.env.PORT || 3000}`);
});