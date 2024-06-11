import React,{useState} from "react";
import { Table,  Input,Button } from 'antd';


export default function GetProducts() {
  const [searchText, setSearchText] = useState("");
  const { Search } = Input;

  const products = [
    { key: 1, name: 'Product 1', quantity: 10 },
    { key: 2, name: 'Product 2', quantity: 20 },
    { key: 3, name: 'Product 3', quantity: 30 },
    { key: 4, name: 'Product 4', quantity: 15 },
    { key: 5, name: 'Product 5', quantity: 25 },
    { key: 6, name: 'Product 6', quantity: 35 },
    { key: 7, name: 'Product 7', quantity: 40 },
    { key: 8, name: 'Product 8', quantity: 45 },
    { key: 9, name: 'Product 9', quantity: 50 },
    { key: 10, name: 'Product 10', quantity: 60 },
  ];

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button type="primary">
          Add to Cart
        </Button>
      ),
    },
]
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div className="md:mt-16 shadow-lg">
      <div className="container mx-auto p-4">
        <Search
          placeholder="Search products"
          onChange={(e) => setSearchText(e.target.value)}
        //   style={{ marginBottom: 16 }}
        />
        <Table
          columns={columns}
          dataSource={filteredProducts}
          pagination={{
            defaultPageSize: 4,
          }}
          />
      </div>
    </div>
  );
}
