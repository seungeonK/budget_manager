 import React, { useEffect, useContext, useState } from 'react'

import ListTemplate from './ListTemplate';
import { ExpensesContext } from '../context/ExpensesProvider';

function Expenses() {
    const { expenses } = useContext(ExpensesContext);

    let totalExpense = 0;
    
    expenses.forEach(expense => totalExpense += expense.amount);

    return (
        <div>
            <ListTemplate 
            listName={`Total Expenses: ${totalExpense}`}
            listContents={expenses}
            addButtonName={"Add Expense"}
            redirect={"/addExpense"}
            noEdit={false}
            />
        </div>
    )
}

export default Expenses
