import React, { useState } from "react";
import Expenses from "./Components/Expense/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Car-Insurance",
    amount: 300,
    date: new Date(2020, 7, 23),
  },
  {
    id: "2",
    title: "TV",
    amount: 250,
    date: new Date(2020, 8, 19),
  },
  {
    id: "3",
    title: "Desk (Wooden)",
    amount: 170,
    date: new Date(2020, 9, 12),
  },
  {
    id: "4",
    title: "Computer",
    amount: 500,
    date: new Date(2021, 11, 25),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
          return [expense, ...prevExpenses]
        });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
