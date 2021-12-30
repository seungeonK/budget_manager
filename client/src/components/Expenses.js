import React from 'react'
import ListTemplate from './ListTemplate';

function Expenses() {
    const hardCodedExpenses = [
        {name:"Expense 1", amount: 10, balance: 0, createdAt:"12/30/21"},
        {name:"Expense 2", amount: 1000, balance: 0, createdAt:"12/30/21"},
        {name:"Expense 3", amount: 50, balance: 0, createdAt:"12/30/21"},
        {name:"Expense 4", amount: 3, balance: 0, createdAt:"12/30/21"},
        {name:"Expense 5", amount: 70, balance: 0, createdAt:"12/30/21"},
        {name:"Expense 6", amount: 100, balance: 0, createdAt:"12/30/21"},
        {name:"Expense 7", amount: 100, balance: 0, createdAt:"12/30/21"},
    ];
    return (
        <div>
            <ListTemplate 
            listName="Expenses" 
            listContents={hardCodedExpenses}
            addButtonName={"Add Expense"}
            noEdit={false}
            />
        </div>
    )
}

export default Expenses
