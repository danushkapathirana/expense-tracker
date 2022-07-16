import React, {useState} from "react";

import "./ExpenseForm.css"

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")

    // const [userInput, setUserInput] = useState({ //use one useState hook instead of multiple
    //     title: "",
    //     amount: "",
    //     date: ""
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)

        // setUserInput({ ...userInput, title: event.target.value})
        // setUserInput((prevState) => { //use this way to update state if the state depend on previous status of state (eg: previous state increment by one)
        //     return {...prevState, title: event.target.value}
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)

        // setUserInput({ ...userInput, amount: event.target.value})
        // setUserInput((prevState) => {
        //     return {...prevState, amount: event.target.value}
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        
        // setUserInput({ ...userInput, date: event.target.value})
        // setUserInput((prevState) => {
        //     return {...prevState, date: event.target.value}
        // })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault() //deny refreshing the component again

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)

        // console.log("ExpenseForm.js");
        // console.log(expenseData)
        setEnteredTitle("") //clear two way binding
        setEnteredAmount("")
        setEnteredDate("")
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input> {/**use value property to two way binding */}
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min ="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
