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
            listName={`Expenses`}
            listContents={expenses}
            addButtonName={"Add Expense"}
            redirect={"/addExpense"}
            noEdit={false}
            total={totalExpense}
            noTotal={false}
            labelBackgroundColor='red'
            />
        </div>
    )
}

export default Expenses
