import {React, useEffect, useState} from 'react'
import ListTemplate from './ListTemplate';
import { getTransactions } from '../axios/axios';

function History() {
    // const hardCodedHistory = [
    //     { name: "Revenue 1", amount: 10, balance: 0, createdAt: "12/30/21" },
    //     { name: "Revenue 2", amount: 1000, balance: 0, createdAt: "12/30/21" },
    //     { name: "Revenue 3", amount: 50, balance: 0, createdAt: "12/30/21" },
    //     { name: "Revenue 4", amount: 3, balance: 0, createdAt: "12/30/21" },
    //     { name: "Revenue 5", amount: 70, balance: 0, createdAt: "12/30/21" },
    //     { name: "Revenue 6", amount: 100, balance: 0, createdAt: "12/30/21" },
    //     { name: "Revenue 7", amount: 100, balance: 0, createdAt: "12/30/21" },
    //     { name: "Expense 1", amount: 10, balance: 0, createdAt: "12/30/21" },
    //     { name: "Expense 2", amount: 1000, balance: 0, createdAt: "12/30/21" },
    //     { name: "Expense 3", amount: 50, balance: 0, createdAt: "12/30/21" },
    //     { name: "Expense 4", amount: 3, balance: 0, createdAt: "12/30/21" },
    //     { name: "Expense 5", amount: 70, balance: 0, createdAt: "12/30/21" },
    //     { name: "Expense 6", amount: 100, balance: 0, createdAt: "12/30/21" },
    //     { name: "Expense 7", amount: 100, balance: 0, createdAt: "12/30/21" },
    // ];
    const [ histories, setHistory ] = useState([]);

    // if [], run once when the data loads, and don't run again
    // if something is in dependency list, whenever it changes, component renders again
    useEffect(() => {
        getTransactions().then(res => {
            setHistory(res.data);
        });
    // whenever 'getTransactions()' function is called, 
    // Re-render this and all of its child components
    }, [])
    return (
        <div>
            <ListTemplate
                listName="History"
                listContents={histories}
                addButtonName={"Add History"}>
            </ListTemplate>
        </div>
    )
}

export default History
