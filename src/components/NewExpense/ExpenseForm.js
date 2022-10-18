import React, { useState } from "react";

import './ExpenseForm.css';
import './NewExpense.css';
 

const ExpenseForm = () => { 
  const [enteredTitle, setEnteredTitle] = useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle('event,target.value');
  };
  
    return <form>
       <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type= "text" onChange={titleChangeHandler}/>
          </div>
           <div className="new-expense__control">
          <label>Amount</label>
          <input type= "number" min="0.01" step="0.01"/>
          </div>
           <div className="new-expense__control">
          <label>Date</label>
          <input type= "date" min="2022-02-03" max="2023-12-31"/>
        </div>
       </div>
       <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
       </div>
    </form>
};


export default ExpenseForm;