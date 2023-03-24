import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const showExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button className="hover-Button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onShowExpenseData={showExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;