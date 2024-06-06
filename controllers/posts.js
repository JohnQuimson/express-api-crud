const { PrismaClient } = require('@prisma/client');
const errorHandlerFunction = require('../utils/errorHandlerFunction');
const RestError = require('../utils/restError.js');
const prisma = new PrismaClient();

const generateSlug = (title) => {
  return title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
};

const store = async (req, res) => {
  const { title, content, published } = req.body;

  const slug = generateSlug(title);

  const data = {
    title,
    content,
    slug,
    published,
  };

  try {
    const post = await prisma.post.create({ data });
    res.status(200).send(post);
  } catch (err) {
    errorHandlerFunction(res, err);
  }
};

module.exports = {
  store,
};