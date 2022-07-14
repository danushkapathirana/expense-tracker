import React, {useState} from "react";

import "./ExpenseForm.css"

function ExpenseForm(props) {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")

    // const [userInput, setUserInput] = useState({ //use one useState hook instead of multiple
    //     title: "",
    //     amount: "",
    //     date: ""
    // })

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)

        // setUserInput({ ...userInput, title: event.target.value})
        // setUserInput((prevState) => { //use this way to update state if the state depend on previous status of state (eg: previous state increment by one)
        //     return {...prevState, title: event.target.value}
        // })
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)

        // setUserInput({ ...userInput, amount: event.target.value})
        // setUserInput((prevState) => {
        //     return {...prevState, amount: event.target.value}
        // })
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
        
        // setUserInput({ ...userInput, date: event.target.value})
        // setUserInput((prevState) => {
        //     return {...prevState, date: event.target.value}
        // })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault() //deny refreshing the component again

        const expenseData = {
            title: title,
            amount: amount,
            date: date
        }

        props.onSaveExpenseData(expenseData)

        // console.log("ExpenseForm.js");
        // console.log(expenseData)
        setTitle("") //clear two way binding
        setAmount("")
        setDate("")
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler}></input> {/**use value property to two way binding */}
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
