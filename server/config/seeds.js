const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Sparkling' },
    { name: 'Still' },
    { name: 'Equipment'}
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Antipodes',
      image: 'antipodesL.jpeg',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      source: 'Spring',
      origin: 'New Zealand',
      est: '2003',
      TDS: 120 ,
      carbonation: 'Added Carbonation',
      company_website: 'https://antipodes.co.nz'
    },
    {
      name: 'ROI',
      image: 'roiL.jpeg',
      category: categories[0]._id,
      price: 100.99,
      quantity: 500,
      source: 'Spring',
      origin: 'Slovenia',
      est: '2011',
      TDS: 7481 ,
      carbonation: 'Natural Sparkling',
      company_website: 'https://www.roiwater.com'
    },
    {
      name: 'Gerolsteiner',
      image: 'gerolsteinerL.jpeg',
      category: categories[0]._id,
      price: 2.89,
      quantity: 750,
      source: 'Artesian',
      origin: 'Germany',
      est: '1888',
      TDS: 2527 ,
      carbonation: 'Natural Sparkling',
      company_website: 'https://www.gerolsteiner.de/'
    },
    {
      name: 'Fiji',
      image: 'fijiNL.jpeg',
      category: categories[1]._id,
      price: 1.99,
      quantity: 1500,
      source: 'Artesian',
      origin: 'Fiji',
      est: '1996',
      TDS: 222 ,
      carbonation: 'Still',
      company_website: 'https://www.fijiwater.com/'
    },
    {
      name: 'Badoit',
      image: 'badoitL.jpeg',
      category: categories[0]._id,
      price: 100.99,
      quantity: 50,
      source: 'Spring',
      origin: 'France',
      est: '1837',
      TDS: 1200 ,
      carbonation: 'Natural Sparkling',
      company_website: 'https://www.amazon.com/badoit/s?k=badoit'
    },
    {
      name: 'Waiakea',
      image: 'waiakeanL.jpeg',
      category: categories[1]._id,
      price: 2.89,
      quantity: 3500,
      source: 'Artesian',
      origin: 'USA (Hawaii)',
      est: '2012',
      TDS: 82 ,
      carbonation: 'Still',
      company_website: 'https://www.waiakeasprings.com'
    },
    {
      name: 'Aqua Carpatica',
      image: 'aquaCarpaticaL.png',
      category: categories[1]._id,
      price: 3.89,
      quantity: 385,
      source: 'Spring',
      origin: 'Romania',
      est: '2010',
      TDS: 200,
      carbonation: 'Still',
      company_website: 'https://www.aquacarptica.com'
    },
    {
      name: 'Vichy Catalan',
      image: 'vichycatalanL.jpeg',
      category: categories[0]._id,
      price: 54.99,
      quantity: 127,
      source: 'Spring',
      origin: 'Spain',
      est: '1881',
      TDS: 2900 ,
      carbonation: 'Natural Sparkling',
      company_website: 'https://www.vichycatalan.com'
    },
    {
      name: 'Hildon',
      image: 'hildonL.jpeg',
      category: categories[0]._id,
      price: 22.99,
      quantity: 500,
      source: 'Well',
      origin: 'U.K.',
      est: '1989',
      TDS: 312 ,
      carbonation: 'Added Carbonation',
      company_website: 'https://www.hildon.com/'
    },
    {
      name: 'Evian',
      image: 'evianL.jpeg',
      category: categories[1]._id,
      price: 1.99,
      quantity: 2500,
      source: 'Spring',
      origin: 'France',
      est: '1826',
      TDS: 357 ,
      carbonation: 'Still',
      company_website: 'https://www.evian.com/en_us'
    },
    {
      name: 'Lauquen',
      image: 'lauquenL.jpeg',
      category: categories[0]._id,
      price: 22.99,
      quantity: 89,
      source: 'Artesian',
      origin: 'Argentina',
      est: '2005',
      TDS: 190 ,
      carbonation: 'Added Sparkling',
      company_website: 'https://www.facebook.com/LauquenWaterCo/'
    },
    {
      name: 'Vimeiro',
      image: 'vimeiroL.jpeg',
      category: categories[0]._id,
      price: 9.99,
      quantity: 200,
      source: 'Spring',
      origin: 'Portugal',
      est: '1920',
      TDS: 829 ,
      carbonation: 'Added Sparkling',
      company_website: 'https://www.aguadovimeiro.pt'
    },
    {
      name: 'Nalgene 32oz',
      image: 'nalgeneB.webp',
      category: categories[2]._id,
      price: 11.99,
      quantity: 2,
      company_website: 'https://nalgene.com'
    },
    {
      name: 'Corkcicle 22oz',
      image: 'CorkcicleL.jpeg',
      category: categories[2]._id,
      price: 42.99,
      quantity: 19,
      company_website: 'https://corkcicle.com'
    },
    {
      name: 'Porter Glass 18oz',
      image: 'porterB.jpeg',
      category: categories[2]._id,
      price: 29.99,
      quantity: 49,
      company_website: 'https://wandpdesign.com/products/porter-water-bottle-regular'
    },
    {
      name: 'Yeti Rambler 46oz',
      image: 'yetiB.png',
      category: categories[2]._id,
      price: 54.99,
      quantity: 135,
      company_website: 'https://yeti.com'
    }
    
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Martin',
    lastName: 'Riese',
    email: 'mreiese@martin-riese.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Marisa',
    lastName: 'Rosell',
    email: 'MR@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});