import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import dayjs from 'dayjs';

const { TextArea } = Input;
const { Option } = Select;

const ExpenseForm = ({ handleOk }) => {
  const onFinish = (values) => {
    console.log('Form Values:', values);
    handleOk(); // Close the modal on form submission
  };

  return (
    <Form
      name="expense_form"
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        category: 'purchases',
        date: dayjs(), // Set default date to current date
      }}
    >
      <Form.Item
        label="Amount Spent"
        name="amount"
        rules={[{ required: true, message: 'Please enter the amount spent!' }]}
      >
        <Input
          type="number"
          placeholder="Enter amount"
          className="p-2 border rounded w-full"
        />
      </Form.Item>

      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: 'Please select a category!' }]}
      >
        <Select className="w-full" placeholder="Select a category">
          <Option value="purchases">Purchases</Option>
          <Option value="bills">Bills</Option>
          <Option value="disbursement">Disbursement</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Date"
        name="date"
        rules={[{ required: true, message: 'Please select a date!' }]}
      >
        <DatePicker className="w-full" defaultValue={dayjs()} />
      </Form.Item>

      <Form.Item
        label="Note"
        name="note"
      >
        <TextArea
          rows={4}
          placeholder="Add a note"
          className="p-2 border rounded w-full"
        />
      </Form.Item>

      <Form.Item>
        <button type="primary" htmlType="submit" className="w-full bg-default text-lg text-white p-2 rounded">
          Submit
        </button>
      </Form.Item>
    </Form>
  );
};

export default ExpenseForm;
