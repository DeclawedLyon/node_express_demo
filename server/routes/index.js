const express = require('express');

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = () => {
  // home route
  router.get('/', (req, res) => {
    // res.send('Hello World!')
    // sends the index.html file as a response.
    // res.sendFile(path.join(__dirname, './static/index.html'))
  
    // renders the index.html file as a response
    console.log(`\n\nthe index route works.\n`)
    res.render('pages/index', {pageTitle: 'My Node.Express App', userPhrase: 'Practicing with EJS' });
  });

  router.use('/speakers', speakersRoute());
  router.use('/feedback', feedbackRoute());

  return router;
}



// module.exports = router;