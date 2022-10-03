import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expense';


function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 400.26, date: new Date(2021, 2, 28) },
    { id: 'e2', title: 'New TV', amount: 400.26, date: new Date(2021, 2, 22) },
    { id: 'e3', title: 'Toilet Paper', amount: 400.26, date: new Date(2021, 2, 25) },
    { id: 'e4', title: 'House Insurance', amount: 400.26, date: new Date(2021, 2, 21) },
  ]
  // return (
  //   <div>
  //     <h2>Let's get started</h2>
  //     <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
  //     <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
  //     <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
  //     <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
  //   </div>
  // );


  return (
    <div>
      <NewExpense />
      <Expenses items={expenses}/>
    </div>
  )
}

export default App;
