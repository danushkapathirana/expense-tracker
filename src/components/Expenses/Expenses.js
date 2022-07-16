import React, {useState} from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

import "./Expenses.css"
import "./ExpensesList.css"

function Expenses(props) {
    const [filterYear, setFilterYear] = useState("2019")

    const changeFilterHandler = (selectedYear) => {
        setFilterYear(selectedYear)

    }

    const filterdExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear
    })
    
    return(
        <div>
            <Card className="expenses">
            <ExpensesFilter selected = {filterYear} onChangeFilter = {changeFilterHandler} />
            <ExpensesList items = {filterdExpenses}></ExpensesList>
            </Card>
        </div>
    )
}

export default Expenses
