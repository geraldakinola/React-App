import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

function ExpenseItem(props) {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <h2>{props.title}</h2>
            <div className='expense-item_price'>${props.amount}</div>
        </Card>
    );
}

export default ExpenseItem;