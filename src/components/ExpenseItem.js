import './ExpenseItem.css'

function ExpenseItem() {
    return <div className='expense-item'>
        <div className='expense-item_date'>September 10th 2022</div>
        <h2>Car Insurance</h2>
        <div className='expense-item_price'>$400.24</div>
    </div>
}

export default ExpenseItem;