// StockAlert.jsx
import React from 'react';
import { Table, Tag } from 'antd';

const { Column } = Table;

const AlertTable = ({data}) => {
   

  return (
    <Table dataSource={data} rowKey="key">
      <Table.Column
        title="No."
        key="number"
        render={(text, record, index) => index + 1}
      />
      {/* <Column title="Code" dataIndex="code" key="code" /> */}
      <Column title="Product" dataIndex="product" key="product" />
      <Column title="Quantity" dataIndex="quantity" key="quantity" />
      <Column
        title="Alert Quantity"
        dataIndex="alertQuantity"
        key="alertQuantity"
        render={(text, record) => (
          <span>
            {record.quantity < record.alertQuantity ? (
              <Tag color="red">Low Stock</Tag>
            ) : (
              <Tag color="green">In Stock</Tag>
            )}
          </span>
        )}
      />
    </Table>
  );
};

export default AlertTable;
