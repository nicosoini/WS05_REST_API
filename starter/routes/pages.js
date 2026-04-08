const path = require('path');
const express = require('express');

const router = express.Router();

function sendPage(req, res, fileName) {
  res.sendFile(path.join(req.app.locals.publicDir, fileName));
}

router.get('/', (req, res) => {
  sendPage(req, res, 'index.html');
});

router.get('/about', (req, res) => {
  // TODO (student): Serve public/about.html.
  sendPage(req, res, 'about.html');
});

router.get('/contact', (req, res) => {
  // TODO (student): Serve public/contact.html.
  sendPage(req, res, 'contact.html');
});

router.get('/blog', (req, res) => {
  // TODO (student): Keep this route working after moving page routes into this router.
  sendPage(req, res, 'blog.html');
});

module.exports = router;