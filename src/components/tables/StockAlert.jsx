// StockAlert.jsx
import React from 'react';
import { Table, Tag } from 'antd';

const { Column } = Table;

const AlertTable = ({data}) => {

  const filteredData = data.filter((item)=>{
    return (
      item.quantity < 5
    )
  })
   

  return (
    <Table dataSource={filteredData} rowKey="key">
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
        dataIndex="quantity"
        key="number"
        render={(text, record) => (
          <span>
            {record.quantity < 5 ? (
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
