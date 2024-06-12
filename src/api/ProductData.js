const originData = [];

for (let i = 1; i <= 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Product ${i}`,
    quantity: Math.floor(Math.random() * 100) + 1,  // Random quantity between 1 and 100
    buying_price: Math.floor(Math.random() * 100) + 1,  // Random buying price between 1 and 100
    selling_price: Math.floor(Math.random() * 100) + 101,  // Random selling price between 101 and 200
  });
}

export default originData;


