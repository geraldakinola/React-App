import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log('Clicked!!!!');
    };


    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <h2>{props.title}</h2>
            <div className='expense-item_price'>${props.amount}</div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
        
    );
}

export default ExpenseItem;