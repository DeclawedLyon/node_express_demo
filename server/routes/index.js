const express = require('express');

const router = express.Router();

module.exports = () => {
  // home route
  router.get('/', (req, res) => {
    // res.send('Hello World!')
    // sends the index.html file as a response.
    // res.sendFile(path.join(__dirname, './static/index.html'))
  
    // renders the index.html file as a response
    res.render('pages/index', {pageTitle: 'My Node.Express App', userPhrase: 'Practicing with EJS' });
  });
  
  return router;
}



// module.exports = router;