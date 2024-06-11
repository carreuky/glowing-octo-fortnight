import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Joe Black",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Jim Green",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
    {
      key: "5",
      name: "Jake White",
      age: 28,
      address: "New York No. 3 Lake Park",
    },
    {
      key: "6",
      name: "Jane Doe",
      age: 35,
      address: "London No. 4 Lake Park",
    },
    {
      key: "7",
      name: "Judy Smith",
      age: 30,
      address: "Sydney No. 5 Lake Park",
    },
    {
      key: "8",
      name: "Jack Black",
      age: 29,
      address: "New York No. 6 Lake Park",
    },
    {
      key: "9",
      name: "Jim Blue",
      age: 34,
      address: "London No. 7 Lake Park",
    },
    {
      key: "10",
      name: "James Brown",
      age: 40,
      address: "Sydney No. 8 Lake Park",
    },
    {
      key: "11",
      name: "Jenny Green",
      age: 33,
      address: "New York No. 9 Lake Park",
    },
    {
      key: "12",
      name: "Jessica Black",
      age: 31,
      address: "London No. 10 Lake Park",
    },
    {
      key: "13",
      name: "Jeremy Red",
      age: 32,
      address: "Sydney No. 11 Lake Park",
    },
    {
      key: "14",
      name: "Jasper White",
      age: 36,
      address: "New York No. 12 Lake Park",
    },
    {
      key: "15",
      name: "Jillian Brown",
      age: 27,
      address: "London No. 13 Lake Park",
    },
    {
      key: "16",
      name: "Joel Green",
      age: 41,
      address: "Sydney No. 14 Lake Park",
    },
    {
      key: "17",
      name: "Joyce Black",
      age: 39,
      address: "New York No. 15 Lake Park",
    },
    {
      key: "18",
      name: "Javier Red",
      age: 38,
      address: "London No. 16 Lake Park",
    },
    {
      key: "19",
      name: "Jocelyn White",
      age: 26,
      address: "Sydney No. 17 Lake Park",
    },
    {
      key: "20",
      name: "Jason Brown",
      age: 37,
      address: "New York No. 18 Lake Park",
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
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%",
      sorter: (a, b) => a.age - b.age, // Enable sorting for Age
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("age"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
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
