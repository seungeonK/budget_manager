 import React, { useEffect, useContext, useState } from 'react'

import ListTemplate from './ListTemplate';
import { ExpensesContext } from '../context/ExpensesProvider';

function Expenses() {
    const { expenses } = useContext(ExpensesContext);
    // const hardCodedExpenses = [
    //     {name:"Expense 1", amount: 10, balance: 0, createdAt:"12/30/21"},
    //     {name:"Expense 2", amount: 1000, balance: 0, createdAt:"12/30/21"},
    //     {name:"Expense 3", amount: 50, balance: 0, createdAt:"12/30/21"},
    //     {name:"Expense 4", amount: 3, balance: 0, createdAt:"12/30/21"},
    //     {name:"Expense 5", amount: 70, balance: 0, createdAt:"12/30/21"},
    //     {name:"Expense 6", amount: 100, balance: 0, createdAt:"12/30/21"},
    //     {name:"Expense 7", amount: 100, balance: 0, createdAt:"12/30/21"},
    // ];


    console.log('Expense');
    // history.forEach(h => totalExpenses += h.amount);

    return (
        <div>
            <ListTemplate 
            listName={`Total Expenses: ${0}`}
            listContents={expenses}
            addButtonName={"Add Expense"}
            redirect={"/addExpense"}
            noEdit={false}
            />
        </div>
    )
}

export default Expenses
