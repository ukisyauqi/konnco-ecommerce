// seed.ts

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedProducts() {
  try {
    // Seed data for products
    const productsData = [
      {
        name: 'Food Choper',
        price: 55000,
        stock: 50,
        description: 'Food Choper asjdbaksjdbaksd',
        image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/6/8/a3d9fedd-468b-40af-bc29-8dedb2fa4f81.jpg',
      },
      {
        name: 'Jepit Rambut',
        price: 9000,
        stock: 30,
        description: 'Jepit Rambut askjdbaksdjbaksjdb',
        image: 'https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2023/9/6/c2e46e04-c05c-4be7-b94c-879c2772be5a.jpg',
      },
      {
        name: 'Kartu Flazz BCA',
        price: 70000,
        stock: 30,
        description: 'ajsbdkajsbdkajsdbasndla',
        image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/1/26/5dfbd412-371d-4b80-8c15-d5a7db2f3606.jpg',
      },
      {
        name: 'Promina',
        price: 21000,
        stock: 10,
        description: 'asdjbaskdjbaksdj',
        image: 'https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2023/9/18/5a395683-3f2c-4962-8646-606e821b845a.jpg',
      },
      {
        name: 'Pokana',
        price: 60000,
        stock: 30,
        description: 'sjfakjsbkajsdbkajsd',
        image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/4/19/31136242-3afb-41fd-b858-3e4875e84d98.jpg',
      },
      {
        name: 'Celana Dalam',
        price: 25000,
        stock: 50,
        description: 'asjdbaksdjbaksdjba',
        image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/2/7/b6e225af-d195-43ef-946b-5a53f4c00945.jpg  ',
      },
      {
        name: 'Soklin Likuid',
        price: 5000,
        stock: 90,
        description: 'asljdbaksjbaksdknaksdnasd',
        image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/12/24/03e66d62-59f0-46e7-9be3-dca9d89bff5f.jpg',
      },
      {
        name: 'Keset',
        price: 36000,
        stock: 10,
        description: 'asdjbasdkjalsdjasdinalsdkhasd',
        image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/11/21/f0723360-b271-4f09-8c54-2236cb7d2f44.jpg',
      },
      {
        name: 'Sabun',
        price: 2000,
        stock: 90,
        description: 'askdnalsdalsdjaksdjb',
        image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/12/24/8524ca8a-a880-4588-bfb7-9e8475340dac.jpg',
      },
      // Add more products as needed
    ];

    // Use createMany to insert all products at once
    await prisma.product.createMany({
      data: productsData,
    });

    console.log('Seed data for products added successfully');
  } catch (error) {
    console.error(`Error seeding products: ${error.message}`);
  } finally {
    // Disconnect Prisma after seeding
    await prisma.$disconnect();
  }
}

// Run the seed function
seedProducts();
