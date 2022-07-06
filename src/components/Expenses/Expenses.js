import React from "react";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

function Expenses(props) {
    return(
        <Card className="expenses">
            <ExpenseItem title = {props.dataStore[0].title} amount = {props.dataStore[0].amount} date = {props.dataStore[0].date}></ExpenseItem>
            <ExpenseItem title = {props.dataStore[1].title} amount = {props.dataStore[1].amount} date = {props.dataStore[1].date}></ExpenseItem>
            <ExpenseItem title = {props.dataStore[2].title} amount = {props.dataStore[2].amount} date = {props.dataStore[2].date}></ExpenseItem>
            <ExpenseItem title = {props.dataStore[3].title} amount = {props.dataStore[3].amount} date = {props.dataStore[3].date}></ExpenseItem>
        </Card>
    )
}

export default Expenses
