// GasAndElectricalForm.jsx
import React from "react";
import { Form, Input, InputNumber, Button, Tabs, Select, Space } from "antd";
import { ItemData } from "../../../api/ItemsData";
const { Option } = Select;

const GasAndElectricalForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const itemDetails = JSON.parse(values.item);
    console.log("Complete Form Values: ", {
      ...values,
      category: itemDetails.category,
      item:itemDetails.name,

       // Replace the stringified item with the object
    });
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="product"
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: "600px", margin: "0 auto" }}
    >
      <Form.Item
        name="item"
        label="Item"
        rules={[{ required: true, message: "Please select an item!" }]}
      >
        <Select
          showSearch
          name='item'
          optionFilterProp="children"
          placeholder="Select an item"
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
         {ItemData.map(item => (
            <Option key={item.id} value={JSON.stringify(item)}>
              {item.name} 
            </Option>
          ))}
        </Select>
        {/* <Select
          showSearch
          placeholder="Select an item"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="lpg">LPG</Option>
          <Option value="electricals">Electricals</Option>
        </Select> */}
      </Form.Item>

      <Form.Item
        name="quantity"
        label="Quantity"
        rules={[{ required: true, message: "Please input the quantity!" }]}
      >
        <InputNumber min={1} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="buyingPrice"
        label="Buying Price"
        rules={[{ required: true, message: "Please input the buying price!" }]}
      >
        <InputNumber min={0} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="sellingPrice"
        label="Selling Price"
        rules={[{ required: true, message: "Please input the selling price!" }]}
      >
        <InputNumber min={0} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GasAndElectricalForm;
