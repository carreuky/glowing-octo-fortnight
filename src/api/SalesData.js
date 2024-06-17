const generateSalesData = (numItems, endDate) => {
    const salesData = [];
    const products = [
        { name: "Product 1", buying_price: 97, selling_price: 125 },
        { name: "Product 2", buying_price: 98, selling_price: 113 },
        { name: "Product 3", buying_price: 61, selling_price: 178 },
        { name: "Product 4", buying_price: 75, selling_price: 150 },
        { name: "Product 5", buying_price: 70, selling_price: 140 },
        { name: "Product 6", buying_price: 80, selling_price: 120 },
        { name: "Product 7", buying_price: 95, selling_price: 130 },
        { name: "Product 8", buying_price: 88, selling_price: 110 },
        { name: "Product 9", buying_price: 85, selling_price: 125 },
        { name: "Product 10", buying_price: 90, selling_price: 145 },
        { name: "Product 11", buying_price: 60, selling_price: 100 },
        { name: "Product 12", buying_price: 110, selling_price: 150 },
        { name: "Product 13", buying_price: 120, selling_price: 160 },
        { name: "Product 14", buying_price: 110, selling_price: 150 },
        { name: "Product 15", buying_price: 98, selling_price: 140 },
    ];
    const paymentMethods = ["mpesa", "cash", "both"];
    
    const startDate = new Date(endDate);
    startDate.setMonth(startDate.getMonth() - 2);

    for (let i = 0; i < numItems; i++) {
        const product = products[Math.floor(Math.random() * products.length)];
        const quantity = Math.floor(Math.random() * 5) + 1;
        const selling_price = product.selling_price + Math.floor(Math.random() * 20); // adding some random variation to selling price
        const total = selling_price * quantity;
        const sale_date = new Date(startDate.getTime() + Math.random() * (endDate - startDate)).toISOString().split('T')[0];
        const payment_method = paymentMethods[Math.floor(Math.random() * paymentMethods.length)];
        
        salesData.push({
            key: (i + 1).toString(),
            name: product.name,
            quantity: quantity,
            buying_price: product.buying_price,
            selling_price: selling_price,
            total: total,
            payment_method: payment_method,
            sale_date: sale_date
        });
    }

    salesData.forEach(item => {
        item.profit = item.total - (item.buying_price * item.quantity);
    });

    return salesData;
};

const endDate = new Date("2023-06-17");
const salesData = generateSalesData(150, endDate);

export default salesData;
