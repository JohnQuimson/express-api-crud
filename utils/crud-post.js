const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createPost = (data, cf) => {
  prisma.post
    .create({ data })
    .then((p) => cf(p))
    .catch((err) => console.error(err));
};

const readPostBySlug = (slug, cf) => {
  prisma.post
    .findUnique({
      where: { slug },
      include: {
        tags: { select: { name: true } },
        category: { select: { name: true } },
      },
    })
    .then((p) => cf(p))
    .catch((err) => console.error(err));
};

const readPosts = (cf) => {
  prisma.post
    .findMany({
      include: {
        tags: { select: { name: true } },
        category: { select: { name: true } },
      },
    })
    .then((ps) => cf(ps))
    .catch((err) => console.error(err));
};

const updatePostBySlug = (slug, data, cf) => {
  prisma.post
    .update({ where: { slug }, data })
    .then((p) => cf(p))
    .catch((err) => console.error(err));
};

const deletePostBySlug = (slug, cf) => {
  prisma.post
    .delete({
      where: { slug },
    })
    .then((p) => cf(p))
    .catch((err) => console.error(err));
};

module.exports = {
  createPost,
  readPostBySlug,
  readPosts,
  updatePostBySlug,
  deletePostBySlug,
};
