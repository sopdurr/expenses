import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            value={enteredTitle}
            type='text'
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            value={amount}
            type='Number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            value={date}
            type='date'
            onChange={dateChangeHandler}
            min='2019-01-01'
            max=' 2022-12-31'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel} >Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
