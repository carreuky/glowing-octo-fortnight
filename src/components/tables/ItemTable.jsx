import React, { useState } from "react";
import { Table, Input, Button, Select, Modal, Form, Popconfirm } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ItemData } from "../../api/ItemsData";
const { Option } = Select;
const ItemTable = () => {
  const initialData = ItemData

  const [categories, setCategories] = useState([
    { text: "LPG", value: "LPG" },
    { text: "Electronics", value: "Electronics" },
    { text: "Phone Accessories", value: "Phone Accessories" },
  ]);

  console.log(categories);

  const [dataSource, setDataSource] = useState(initialData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [isModalCategory, setIsModalCategory] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [newCategory, setNewCategory] = useState("");
  const [form] = Form.useForm();

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const handleAdd = () => {
    form.resetFields();
    setEditingItem(null);
    setIsModalVisible(true);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    form.setFieldsValue(item);
    setIsModalVisible(true);
  };

  const updateCategoryFilter = (newCategory) => {
    if (!categories.some((category) => category.value === newCategory)) {
      const updatedCategories = [
        ...categories,
        { text: newCategory, value: newCategory },
      ];
      setCategories(updatedCategories);
    }
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      const newData = editingItem
        ? dataSource.map((item) =>
            item.id === editingItem.id ? { ...item, ...values } : item
          )
        : [...dataSource, { ...values, key: dataSource.length + 1 }];
      setDataSource(newData);
      updateCategoryFilter(values.category);
      setIsModalVisible(false);
    });
  };

  // function capitalize(str) {
  //   if (!str) return "";
  //   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  // }

  // const handleAddCategory = () => {
  //   const trimmedCategory = capitalize(newCategory.trim());
  //   if (
  //     trimmedCategory &&
  //     !categories.some((category) => category.value === trimmedCategory)
  //   ) {
  //     const newCategoryObj = { text: trimmedCategory, value: trimmedCategory };
  //     setCategories([...categories, newCategoryObj]);
  //     setIsModalCategory(false);
  //     setIsModalVisible(true);
  //     setNewCategory("");
  //   }
  // };

  // const showModal = () => {
  //   setIsModalCategory(true);
  // };

  const columns = [
    {
      title: "Item Name",
      dataIndex: "name",
      key: "id",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            autoFocus
            placeholder="Search name"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
            style={{ marginBottom: 8, display: "block" }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters()}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) =>
        record.name.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "id",
      filters: categories,
      onFilter: (value, record) => record.category.indexOf(value) === 0,
    },
    {
      title: "Actions",
      key: "id",
      render: (_, record) => (
        <div className="flex">
          <Button onClick={() => handleEdit(record)} style={{ marginRight: 8 }}>
            Edit
          </Button>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <button className=" bg-red-600 py-1 px-2 text-white rounded">
              Delete
            </button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <>
      <button
        className="hover:bg-default bg-color2 text-white font-bold py-1.5 px-4 rounded mb-4"
        onClick={handleAdd}
        type="primary"
        style={{ marginBottom: 16 }}
      >
        Add Item
      </button>
      <Table columns={columns} size="small" dataSource={dataSource} pagination={{
          defaultPageSize: 10, 
        }}  />
      <Modal
        title="Edit Item"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical" name="userForm">
          <Form.Item
            name="name"
            label="Item Name"
            rules={[{ required: true, message: "Please input the item name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: "Please select the category!" }]}
          >
            <Select
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              dropdownRender={(menu) => (
                <>
                  {menu}
                  {/* <Button type="link" block onClick={showModal}>
                    Add category
                  </Button> */}
                </>
              )}
            >
              {categories.map((category) => (
                <Option key={category.text} value={category.value}>
                  {category.value}
                </Option>
              ))}
            </Select>
          </Form.Item>
          {/* <Modal
            title="Add New Category"
            open={isModalCategory}
            onOk={handleAddCategory}
            onCancel={() => setIsModalCategory(false)}
            okText="Add"
          >
            <Input
              placeholder="New Category Name"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
          </Modal> */}
        </Form>
      </Modal>
    </>
  );
};

export default ItemTable;
