import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 400.24
    return <div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <h2>{expenseTitle}</h2>
        <div className='expense-item_price'>${expenseAmount}</div>
    </div>
}

export default ExpenseItem;