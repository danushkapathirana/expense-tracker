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
                <ExpenseItem title = {props.dataStore[0].title} amount = {props.dataStore[0].amount} date = {props.dataStore[0].date} />
                <ExpenseItem title = {props.dataStore[1].title} amount = {props.dataStore[1].amount} date = {props.dataStore[1].date} />
                <ExpenseItem title = {props.dataStore[2].title} amount = {props.dataStore[2].amount} date = {props.dataStore[2].date} />
                <ExpenseItem title = {props.dataStore[3].title} amount = {props.dataStore[3].amount} date = {props.dataStore[3].date} />
            </Card>
        </div>
    )
}

export default Expenses
