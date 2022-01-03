import {React, useContext} from 'react'
import ListTemplate from './ListTemplate';
import { RevenueContext, ExpenseContext } from '../Contexts/transactionContext';


function History() {
    const hardCodedHistory = [
        { name: "Revenue 1", amount: 10, balance: 0, createdAt: "12/30/21" },
        { name: "Revenue 2", amount: 1000, balance: 0, createdAt: "12/30/21" },
        { name: "Revenue 3", amount: 50, balance: 0, createdAt: "12/30/21" },
        { name: "Revenue 4", amount: 3, balance: 0, createdAt: "12/30/21" },
        { name: "Revenue 5", amount: 70, balance: 0, createdAt: "12/30/21" },
        { name: "Revenue 6", amount: 100, balance: 0, createdAt: "12/30/21" },
        { name: "Revenue 7", amount: 100, balance: 0, createdAt: "12/30/21" },
        { name: "Expense 1", amount: 10, balance: 0, createdAt: "12/30/21" },
        { name: "Expense 2", amount: 1000, balance: 0, createdAt: "12/30/21" },
        { name: "Expense 3", amount: 50, balance: 0, createdAt: "12/30/21" },
        { name: "Expense 4", amount: 3, balance: 0, createdAt: "12/30/21" },
        { name: "Expense 5", amount: 70, balance: 0, createdAt: "12/30/21" },
        { name: "Expense 6", amount: 100, balance: 0, createdAt: "12/30/21" },
        { name: "Expense 7", amount: 100, balance: 0, createdAt: "12/30/21" },
    ];

    const { revenue, setRevenue } = useContext(RevenueContext);
    const { expense, setExpense } = useContext(ExpenseContext);

    return (
        <div>
            <ListTemplate
                listName="History"
                listContents={hardCodedHistory}
                addButtonName={"Add History"}>
            </ListTemplate>
        </div>
    )
}

export default History
