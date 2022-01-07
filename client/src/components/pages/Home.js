import React, { useEffect, useContext } from 'react'
import { getTransactions } from '../../axios/axios';
import { Stack, Typography, Grid, Box } from '@mui/material';

import GrossProfit from '../GrossProfit';
import Revenues from '../Revenues';
import Expenses from '../Expenses';
import History from '../History';
import Title from '../../components/Title'

import { HistoryContext } from '../../context/HistoryProvider';
import { letterSpacing } from '@mui/system';

const Home = () => {
    const { setHistory } = useContext(HistoryContext);

    useEffect(() => {
        getTransactions().then(res => {
            setHistory(res.data)
        });
        // whenever 'getTransactions()' function is called, 
        // Re-render this and all of its child components
    }, [getTransactions])

    return (
        <div>
            <Stack>
                <Box sx={{my:3}}>
                    <Title>Expense Tracker</Title>
                </Box>
                <Box sx={{mb:3}}>
                    <GrossProfit profit={1000} />
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
