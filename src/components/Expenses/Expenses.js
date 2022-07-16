import React, {useState} from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

function Expenses(props) {
    const [filterYear, setFilterYear] = useState("2019")

    const changeFilterHandler = (selectedYear) => {
        setFilterYear(selectedYear)
    }
    
    return(
        <div>
            <Card className="expenses">
            <ExpensesFilter selected = {filterYear} onChangeFilter = {changeFilterHandler}></ExpensesFilter>
            {
                props.items.map((item) => 
                    <ExpenseItem title = {item.title} amount = {item.amount} date = {item.date} key = {item.id}></ExpenseItem>
                )
            }
            </Card>
        </div>
    )
}

export default Expenses
