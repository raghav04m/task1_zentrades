// app.js

const fs = require('fs').promises;
const axios = require('axios');

const fetchData = async () => {
  try {
    const rawData = await fs.readFile('data/products.json');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading data:', error.message);
    throw error;
  }
};

const main = async () => {
  try {
    const jsonData = await fetchData();
    const products = Object.values(jsonData.products);

    const sortedProducts = products.sort((a, b) => b.popularity - a.popularity);

    sortedProducts.forEach(product => {
      console.log(`Title: ${product.title}, Price: ${product.price}`);
    });
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

main();
