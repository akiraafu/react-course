import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./expenseItem.css";

export const ExpenseItem = (props) => {
    //useState must be called directly inside the component funtion
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated!!!");
        console.log(title);
    };
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
};
