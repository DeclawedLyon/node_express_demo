const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

const port = 3000;

// ----- Middleware -----

// Sets the Apps template view engine to EJS
app.set('view engine', 'ejs');

// Tells the template engine which folder to look through when searching for template views
app.set('views', path.join(__dirname, 'views'));

// Tells the App to use the CSS styles and images from the static file
app.use(express.static(path.join(__dirname, './static')))

app.use('/', routes());

// ----- Route Paths -----

// app.get('/speakers', (req, res) => {
//   // res.send('Hello World!')
//   res.sendFile(path.join(__dirname, './static/speakers.html'))
// });


// ----- Listening route -----


app.listen(port, () => {
  console.log(`\n\nExpress server listening on port: ${port} \n`)
})