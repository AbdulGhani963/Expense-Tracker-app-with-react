import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHander = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filter={filteredYear}
          onChangeFilter={filterChangeHander}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
