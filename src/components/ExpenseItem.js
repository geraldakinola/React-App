import './ExpenseItem.css'

function ExpenseItem(props) {

    const month = props.date.toLocaleString('en-US', { month: 'long' })
    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>Year</div>
                <div>Day</div>
            </div>
            <h2>{props.title}</h2>
            <div className='expense-item_price'>${props.amount}</div>
        </div>
    );
}

export default ExpenseItem;