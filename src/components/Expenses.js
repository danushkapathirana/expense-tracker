import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

function Expenses(props) {
    return(
    <div className="expenses">
        <ExpenseItem title = {props.dataStore[0].title} amount = {props.dataStore[0].amount} date = {props.dataStore[0].date}></ExpenseItem>
        <ExpenseItem title = {props.dataStore[1].title} amount = {props.dataStore[1].amount} date = {props.dataStore[1].date}></ExpenseItem>
        <ExpenseItem title = {props.dataStore[2].title} amount = {props.dataStore[2].amount} date = {props.dataStore[2].date}></ExpenseItem>
        <ExpenseItem title = {props.dataStore[3].title} amount = {props.dataStore[3].amount} date = {props.dataStore[3].date}></ExpenseItem>
    </div>
    )
}

export default Expenses
