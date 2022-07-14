import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

function NewExpense(props) {
    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random()
        }
        // console.log("NewExpense.js")
        // console.log(expenseData)
        props.onAddExpense(expenseData)
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseData}></ExpenseForm>
        </div>
    )
}

export default NewExpense
