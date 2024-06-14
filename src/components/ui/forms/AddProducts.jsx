// GasAndElectricalForm.jsx
import React from "react";
import { Form, Input, InputNumber, Button, Tabs, Select, Space } from "antd";

const { Option } = Select;

const GasAndElectricalForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    form.resetFields();
  };

  const tabItems = [
    {
      key: "1",
      label: "LPG Gas",
      children: (
        <>
          <Form.Item label="Gas Details" required>
            <Space.Compact style={{ width: "100%" }}>
              <Form.Item
                name={["lpg", "brand"]}
                noStyle
                rules={[{ required: true, message: "Please input the brand!" }]}
              >
                <Input placeholder="Brand" style={{ width: "50%" }} />
              </Form.Item>
              <Form.Item
                name={["lpg", "kgs"]}
                noStyle
                rules={[
                  { required: true, message: "Please select the quantity!" },
                ]}
              >
                <Select placeholder="KGs" style={{ width: "50%" }}>
                  <Option value="6kg">6 kg</Option>
                  <Option value="13kg">13 kg</Option>
                </Select>
              </Form.Item>
            </Space.Compact>
          </Form.Item>
          <Form.Item
            name={["lpg", "quantity"]}
            label="Quantity"
            rules={[{ required: true, message: "Please input the quantity!" }]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name={["lpg", "buyingPrice"]}
            label="Buying Price"
            rules={[
              { required: true, message: "Please input the buying price!" },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name={["lpg", "sellingPrice"]}
            label="Selling Price"
            rules={[
              { required: true, message: "Please input the selling price!" },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </>
      ),
    },
    {
      key: "2",
      label: "Electricals",
      children: (
        <>
          <Form.Item
            name={["electricals", "brand"]}
            label="Electronic Brand"
            rules={[{ required: true, message: "Please input the brand!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["electricals", "quantity"]}
            label="Quantity"
            rules={[{ required: true, message: "Please input the quantity!" }]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
            Button       </Form.Item>
          <Form.Item
            name={["electricals", "buyingPrice"]}
            label="Buying Price"
            rules={[
              { required: true, message: "Please input the buying price!" },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name={["electricals", "sellingPrice"]}
            label="Selling Price"
            rules={[
              { required: true, message: "Please input the selling price!" },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </>
      ),
    },
  ];

  return (
    <Form
      form={form}
      name="gas_and_electrical_form"
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: "600px", margin: "0 auto" }}
    >
      <Tabs defaultActiveKey="1" items={tabItems} />
      <Form.Item>
        <button className="bg-default text-white py-2 px-4 rounded" type="primary" htmltype="submit">
          Submit
        </button>
      </Form.Item>
    </Form>
  );
};

export default GasAndElectricalForm;
