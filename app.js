const express = require('express');
const postRouter = require('./routers/posts.js');
const errorHandler = require('./middlewares/errorHandler.js');
const notFound = require('./middlewares/notFound.js');
const app = express();

const dotenv = require('dotenv');
dotenv.config();
const { PORT } = process.env;
const port = PORT || 3000;

app.use(express.json());

app.use('/posts', postRouter);

const {
  createPost,
  readPostBySlug,
  readPosts,
  updatePostBySlug,
  deletePostBySlug,
} = require('./utils/crud-post.js');

const { createCategory } = require('./utils/crud-category.js');

const { createTag } = require('./utils/crud-tag.js');

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server avviato su: http://localhost:${port}`);
});
