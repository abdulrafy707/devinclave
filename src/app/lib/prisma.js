// import { PrismaClient } from '@prisma/client';

// let prisma;

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient();
// } else {
//   // Ensure the prisma instance is re-used during hot-reloading
//   // Otherwise, a new client will be created on every reload
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   prisma = global.prisma;
// }

// export default prisma;


import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
