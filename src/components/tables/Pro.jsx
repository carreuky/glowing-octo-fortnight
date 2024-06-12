

import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";


const data = [
  {
    key: "1",
    product: "Product 1",
    quantity: 10,
    buying_price: 50,
    selling_price: 70,
  },
  {
    key: "2",
    product: "Product 2",
    quantity: 15,
    buying_price: 30,
    selling_price: 45,
  },
  {
    key: "3",
    product: "Product 3",
    quantity: 20,
    buying_price: 25,
    selling_price: 35,
  },
  {
    key: "4",
    product: "Product 4",
    quantity: 5,
    buying_price: 60,
    selling_price: 85,
  },
  {
    key: "5",
    product: "Product 5",
    quantity: 8,
    buying_price: 45,
    selling_price: 65,
  },
  {
    key: "6",
    product: "Product 6",
    quantity: 12,
    buying_price: 40,
    selling_price: 55,
  },
  {
    key: "7",
    product: "Product 7",
    quantity: 18,
    buying_price: 35,
    selling_price: 50,
  },
  {
    key: "8",
    product: "Product 8",
    quantity: 7,
    buying_price: 55,
    selling_price: 75,
  },
  {
    key: "9",
    product: "Product 9",
    quantity: 14,
    buying_price: 33,
    selling_price: 48,
  },
  {
    key: "10",
    product: "Product 10",
    quantity: 6,
    buying_price: 60,
    selling_price: 80,
  },
  {
    key: "11",
    product: "Product 11",
    quantity: 20,
    buying_price: 20,
    selling_price: 30,
  },
  {
    key: "12",
    product: "Product 12",
    quantity: 10,
    buying_price: 50,
    selling_price: 70,
  },
  {
    key: "13",
    product: "Product 13",
    quantity: 8,
    buying_price: 45,
    selling_price: 65,
  },
  {
    key: "14",
    product: "Product 14",
    quantity: 15,
    buying_price: 30,
    selling_price: 45,
  },
  {
    key: "15",
    product: "Product 15",
    quantity: 12,
    buying_price: 40,
    selling_price: 55,
  },
  {
    key: "16",
    product: "Product 16",
    quantity: 18,
    buying_price: 35,
    selling_price: 50,
  },
  {
    key: "17",
    product: "Product 17",
    quantity: 7,
    buying_price: 55,
    selling_price: 75,
  },
  {
    key: "18",
    product: "Product 18",
    quantity: 5,
    buying_price: 60,
    selling_price: 85,
  },
  {
    key: "19",
    product: "Product 19",
    quantity: 14,
    buying_price: 33,
    selling_price: 48,
  },
  {
    key: "20",
    product: "Product 20",
    quantity: 6,
    buying_price: 60,
    selling_price: 80,
  },
];

const Products = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      // width: "30%",
      ...getColumnSearchProps("product"),
      editable: true,

    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      // width: "20%",
      sorter: (a, b) => a.age - b.age, // Enable sorting for Age
      sortDirections: ["descend", "ascend"],
      editable: true,

    },
    {
      title: "Buying Price",
      dataIndex: "buying_price",
      key: "buying_price",
      editable: true,

     
    },
    {
      title: "Selling Price",
      dataIndex: "selling_price",
      key: "selling_price",
      editable: true,

     
    },
    
  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        pageSizeOptions: ["10",'15','20'],
        showSizeChanger: true,
        defaultPageSize: 10,
      }}
        scroll={{ y: 'calc(100vh - 150px)' }}
      sticky
    />
  );
};
export default Products;
