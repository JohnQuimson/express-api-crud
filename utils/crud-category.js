const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createCategory = (categoryNames, cf) => {
  prisma.category
    .createMany({
      data: categoryNames.map((categoryNames) => ({ name: categoryNames })),
    })
    .then((count) => cf(count))
    .catch((err) => console.error(err));
};

module.exports = {
  createCategory,
};
