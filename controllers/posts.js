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

const show = async (req, res) => {
  try {
    const { slug } = req.params;
    const post = await prisma.post.findUnique({
      where: { slug: slug },
    });
    if (post) {
      res.json(post);
    } else {
      throw new RestError(`post con slug ${slug} non trovato.`, 404);
    }
  } catch (err) {
    errorHandlerFunction(res, err);
  }
};

const index = async (req, res) => {
  try {
    const { published } = req.query;
    const where = {};

    if (published === 'true') {
      where.published = true;
    } else if (published === 'false') {
      where.published = false;
    }

    const posts = await prisma.post.findMany({ where });

    res.json({ data: posts });
  } catch (error) {
    console.error('Qualcosa è andato storto', error);
    res.status(500).send('Errore durante il recupero dei post');
  }
};

const update = async (req, res) => {
  try {
    const { slug } = req.params;
    const { title, content, published } = req.body;

    const newSlug = title ? generateSlug(title) : undefined;

    const data = {
      title,
      content,
      published,
      ...(newSlug && { slug: newSlug }),
    };

    const post = await prisma.post.update({
      where: { slug: slug },
      data,
    });
    res.json(post);
  } catch (err) {
    errorHandlerFunction(res, err);
  }
};

module.exports = {
  store,
  show,
  index,
  update,
};
