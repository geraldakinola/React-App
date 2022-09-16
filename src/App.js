import ExpenseItem from "./components/ExpenseItem";


function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 400.26, date: new Date(2021, 2, 28) },
    { title: 'New TV', amount: 400.26, date: new Date(2021, 2, 28) },
    { title: 'Toilet Paper', amount: 400.26, date: new Date(2021, 2, 28) },
    { title: 'House Insurance', amount: 400.26, date: new Date(2021, 2, 28) },
  ]
  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseItem title={expenses[0].title} amount={expense[0].amount} date={expense[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expense[1].amount} date={expense[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expense[2].amount} date={expense[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expense[3].amount} date={expense[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
