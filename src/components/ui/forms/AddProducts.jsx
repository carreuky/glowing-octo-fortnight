// GasAndElectricalForm.jsx
import React from 'react';
import { Form, Input, InputNumber, Button, Tabs } from 'antd';

const { TabPane } = Tabs;

const GasAndElectricalForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="gas_and_electrical_form"
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: '600px', margin: '0 auto' }}
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="LPG Gas" key="1" className=''>
          <Form.Item
            name={['lpg', 'brand']}
            label="Brand"
            rules={[{ required: true, message: 'Please input the brand!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['lpg', 'quantity']}
            label="Quantity"
            rules={[{ required: true, message: 'Please input the quantity!' }]}
          >
            <InputNumber min={1} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name={['lpg', 'buyingPrice']}
            label="Buying Price"
            rules={[{ required: true, message: 'Please input the buying price!' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name={['lpg', 'sellingPrice']}
            label="Selling Price"
            rules={[{ required: true, message: 'Please input the selling price!' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
        </TabPane>
        <TabPane tab="Electricals" key="2">
          <Form.Item
            name={['electricals', 'brand']}
            label="Brand"
            rules={[{ required: true, message: 'Please input the brand!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['electricals', 'buyingPrice']}
            label="Buying Price"
            rules={[{ required: true, message: 'Please input the buying price!' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name={['electricals', 'sellingPrice']}
            label="Selling Price"
            rules={[{ required: true, message: 'Please input the selling price!' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
        </TabPane>
      </Tabs>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={onFinish()}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GasAndElectricalForm;
