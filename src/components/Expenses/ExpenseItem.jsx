import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./expenseItem.css";

export const ExpenseItem = (props) => {
    // //useState must be called directly inside the component funtion

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>
    );
};
