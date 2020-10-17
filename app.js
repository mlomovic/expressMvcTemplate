// Import of node embedded modules
const path = require('path');

// Import of installed modules
const express = require('express');
const bodyParser = require('body-parser');


const PORT = 3000;

const app = express();


// Setting templateing engine and view folder
app.set('view engine', 'ejs');
app.set('views', 'views');

// Importing routes
const homeRoutes = require('./routes/home');
const peopleRoutes = require('./routes/people');

// Parsing and decoding middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// Using routes middleware
app.use(homeRoutes);
app.use(peopleRoutes);





// Creating server
app.listen(PORT, () => console.log(`... Server is running on port ${PORT} ...`))
