import React, { useEffect, useState, useContext } from 'react'
import { getTransactions } from '../../axios/axios';
import { Stack, Typography, Grid, Box } from '@mui/material';
import { letterSpacing } from '@mui/system';

import GrossProfit from '../GrossProfit';
import Revenues from '../Revenues';
import Expenses from '../Expenses';
import History from '../History';
import Title from '../../components/Title'

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
            <Stack>
                <Box sx={{my:3}}>
                    <Title>Expense Tracker</Title>
                </Box>
                <Box sx={{mb:3}}>
                    <GrossProfit profit={profit} />
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Revenues />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Expenses />
                    </Grid>
                </Grid>
                <Box sx={{my:3}}><History /></Box>
            </Stack>
        </div>
    )
}

export default Home
