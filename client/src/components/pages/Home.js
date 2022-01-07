import React, { useEffect, useState, useContext } from 'react'
import { getTransactions } from '../../axios/axios';
import { Stack, Divider } from '@mui/material';

import GrossProfit from '../GrossProfit';
import Revenues from '../Revenues';
import Expenses from '../Expenses';
import History from '../History';

import { HistoryContext } from '../../context/HistoryProvider';
import { RevenuesContext } from '../../context/RevenuesProvider';
import { ExpensesContext } from '../../context/ExpensesProvider';


const Home = () => {
    const { setHistory } = useContext(HistoryContext);
    const { setRevenues } = useContext(RevenuesContext);
    const { setExpenses } = useContext(ExpensesContext);
    
    const [ profit, setProfit ] = useState(0);
    
    useEffect(() => {
        getTransactions().then(res => {
            setHistory(res.data)
            setRevenues(res.data.filter(h => h.type === "revenue"));
            setExpenses(res.data.filter(h => h.type === "expense"));
            //setting up the gross profit
            res.data.forEach((value, index) => {
                if(value.type === "revenue") setProfit(prevProfit => prevProfit + value.amount);
                else setProfit(prevProfit => prevProfit - value.amount);
            });
        });
        
        // whenever 'getTransactions()' function is called, 
        // Re-render this and all of its child components
    }, [])

    return (
        <div>
            <Stack spacing={4}>
                <div>
                    <h1>Expense Tracker</h1>
                </div>
                <div>
                    <GrossProfit profit={profit} />
                </div>
                <Stack
                    direction="row"
                    spacing={2}
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <div><Revenues /></div>
                    <div><Expenses /></div>
                </Stack>
                <div><History /></div>
            </Stack>
        </div>
    )
}

export default Home
