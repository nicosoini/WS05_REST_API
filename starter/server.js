const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const pagesRouter = require('./routes/pages');
const postsRouter = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');

async function connectToDatabase() {
  if (!process.env.MONGODB_URI) {
    console.error("Error: MONGODB_URI is missing");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: 'blog' });
    console.log('Connection established to MongoDB');
  } catch (error) {
    console.error('Error in connecting to database', error.message);
    process.exit(1);
  }
}

app.locals.publicDir = publicDir;
app.use(express.json());
app.use(express.static(publicDir));

// TODO: Complete the page routes in routes/pages.js.
app.use('/', pagesRouter);

// TODO: Complete the API routes in routes/posts.js.
app.use('/api/posts', postsRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(publicDir, '404.html'));
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).sendFile(path.join(publicDir, '500.html'));
});

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Mounted routers:');
    console.log('  / -> routes/pages.js');
    console.log('  /api/posts -> routes/posts.js');
  });
});