import Card from "../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter";
import "./expenses.css";
import { useState } from "react";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = (selectYear) => {
        setFilteredYear(selectYear);
    };
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
                {/*                 
                {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))} */}
            </Card>
        </div>
    );
}

export default Expenses;
