const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Seed types
  const types = [
    { id: 1, name: 'Live TV' },
    { id: 2, name: 'Movies' },
    { id: 3, name: 'TV Shows' },
    { id: 4, name: 'Sports' },
  ];

  for (const type of types) {
    await prisma.type.upsert({
      where: { id: type.id },
      update: {},
      create: type,
    });
  }

  // Seed categories
  const categories = [
    { id: 1, name: 'Recommended' },
    { id: 2, name: 'Popular' },
    { id: 3, name: 'Featured' },
    { id: 4, name: 'Favorites' },
    { id: 5, name: 'Watch Later' },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { id: category.id },
      update: {},
      create: category,
    });
  }

  console.log('Database has been seeded.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
