import React, { useState } from 'react';

import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [

];

function App(amount, title, date) {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
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
