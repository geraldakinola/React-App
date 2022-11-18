import React, { useState } from "react";

import './ExpenseForm.css';
import './NewExpense.css';
 

const ExpenseForm = (props) => { 
   const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
// const [userInput, SetUserInput] = useState({
//   enteredTitle: '',
//    enteredAmount: '',
//     enteredDate: '',




  const titleChangeHandler = (event) => {
      //  setEnteredTitle('event,target.value');
    // SetUserInput({
    //  ...userInput, 
    //   enteredTitle: event.target.value
    // });
    // SetUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event}
    // });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value)
    //  SetUserInput({
    //  ...userInput, 
    //   enteredAmount: event.target.value
    // });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value)
    //  SetUserInput({
    //  ...userInput, 
    //   enteredDate: event.target.value
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();
  const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date (enteredDate)
};
props.onSaveExpenseData(expenseData);
setEnteredTitle('');
setEnteredAmount('');
setEnteredDate('');
  };
  

return (
    <form onSubmit={submitHandler}>
       <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type= "text"
           value={enteredTitle}
           onChange={titleChangeHandler}/>
          </div>
           <div className="new-expense__control">
          <label>Amount</label>
          <input type= "number" min="0.01" step="0.01"
          value={enteredAmount}
           onChange={amountChangeHandler}/>
          </div>
           <div className="new-expense__control">
          <label>Date</label>
          <input type= "date" min="2022-02-03" max="2023-12-31" 
          value={enteredDate}
          onChange={dateChangeHandler}/>
        </div>
       </div>
       <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
       </div>
    </form>
   );

  };

    


  


export default ExpenseForm;