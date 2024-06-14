const salesData = [
    {
        key: "1",
        name: "Product 1",
        quantity: 2,
        buying_price: 97,
        selling_price: 125,
        total: 250,
        payment_method: "mpesa",
        sale_date: "2023-06-10"
    },
    {
        key: "2",
        name: "Product 2",
        quantity: 2,
        buying_price: 98,
        selling_price: 113,
        total: 226,
        payment_method: "mpesa",
        sale_date: "2023-06-11"
    },
    {
        key: "3",
        name: "Product 3",
        quantity: 1,
        buying_price: 61,
        selling_price: 178,
        total: 178,
        payment_method: "mpesa",
        sale_date: "2023-06-12"
    },
    {
        key: "4",
        name: "Product 1",
        quantity: 1,
        buying_price: 97,
        selling_price: 130,
        total: 130,
        payment_method: "cash",
        sale_date: "2023-06-13"
    },
    {
        key: "5",
        name: "Product 5",
        quantity: 1,
        buying_price: 70,
        selling_price: 140,
        total: 140,
        payment_method: "cash",
        sale_date: "2023-06-14"
    },
    {
        key: "6",
        name: "Product 6",
        quantity: 4,
        buying_price: 80,
        selling_price: 120,
        total: 480,
        payment_method: "mpesa",
        sale_date: "2023-06-15"
    },
    {
        key: "7",
        name: "Product 7",
        quantity: 2,
        buying_price: 95,
        selling_price: 130,
        total: 260,
        payment_method: "both",
        sale_date: "2023-06-16"
    },
    {
        key: "8",
        name: "Product 8",
        quantity: 3,
        buying_price: 88,
        selling_price: 110,
        total: 330,
        payment_method: "cash",
        sale_date: "2023-06-17"
    },
    {
        key: "9",
        name: "Product 9",
        quantity: 1,
        buying_price: 75,
        selling_price: 160,
        total: 160,
        payment_method: "mpesa",
        sale_date: "2023-06-18"
    },
    {
        key: "10",
        name: "Product 10",
        quantity: 2,
        buying_price: 90,
        selling_price: 145,
        total: 290,
        payment_method: "both",
        sale_date: "2023-06-19"
    },
    {
        key: "11",
        name: "Product 11",
        quantity: 5,
        buying_price: 60,
        selling_price: 100,
        total: 500,
        payment_method: "mpesa",
        sale_date: "2023-06-20"
    },
    {
        key: "12",
        name: "Product 9",
        quantity: 2,
        buying_price: 85,
        selling_price: 125,
        total: 250,
        payment_method: "cash",
        sale_date: "2023-06-21"
    },
    {
        key: "13",
        name: "Product 3",
        quantity: 2,
        buying_price: 61,
        selling_price: 180,
        total: 360,
        payment_method: "mpesa",
        sale_date: "2023-06-22"
    },
    {
        key: "14",
        name: "Product 14",
        quantity: 3,
        buying_price: 110,
        selling_price: 150,
        total: 450,
        payment_method: "cash",
        sale_date: "2023-06-26"
    },
    {
        key: "15",
        name: "Product 15",
        quantity: 2,
        buying_price: 98,
        selling_price: 140,
        total: 280,
        payment_method: "both",
        sale_date: "2023-06-26"
    },
    {
        key: "16",
        name: "Product 2",
        quantity: 1,
        buying_price: 98,
        selling_price: 120,
        total: 120,
        payment_method: "mpesa",
        sale_date: "2023-06-26"
    },
    {
        key: "17",
        name: "Product 1",
        quantity: 2,
        buying_price: 97,
        selling_price: 135,
        total: 270,
        payment_method: "cash",
        sale_date: "2023-06-26"
    }
];

// Adding profit to each sale entry
salesData.forEach(item => {
    item.profit = item.total - (item.buying_price * item.quantity);
});

export default salesData;
