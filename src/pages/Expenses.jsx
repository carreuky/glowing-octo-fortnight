import React, { useState } from "react";
import ExpenseForm from "../components/ui/forms/ExpenseForm";
import { Modal } from "antd";
import ExpenseTable from "../components/tables/Expenses";

export default function Expenses() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <section>
      <div className="border border-color2 py-4 px-1 ">
        <div className="flex justify-between items-center">
          <h1 className=" text-2xl font-semibold">Expenses</h1>
          <button onClick={showModal} className="bg-default  text-white hover:bg-default  p-2 mr-2">
            Add Expense
          </button>
        </div>

        <div className="px-4">
          <Modal
            title="Add Expense"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null} // We will add a custom footer in the form itself
          >
            <ExpenseForm handleOk={handleOk} />
          </Modal>
        </div>
      </div>
      <ExpenseTable/>
    </section>
  );
}
