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
      <ExpenseItem title={expenses[0].title}></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
