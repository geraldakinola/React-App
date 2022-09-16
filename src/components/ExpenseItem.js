import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 400.24
    return <div className='expense-item'>
        <div className='expense-item_date'>September 10th 2022</div>
        <h2>{4 * 4}</h2>
        <div className='expense-item_price'>$400.24</div>
    </div>
}

export default ExpenseItem;