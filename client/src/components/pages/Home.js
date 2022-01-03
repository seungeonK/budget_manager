import React, { useEffect, useContext } from 'react'
import { getTransactions } from '../../axios/axios';
import { Stack, Divider } from '@mui/material';

import GrossProfit from '../GrossProfit';
import Revenues from '../Revenues';
import Expenses from '../Expenses';
import History from '../History';

import { HistoryContext } from '../../context/HistoryProvider';


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
            <Stack spacing={4}>
                <div>
                    <h1>Expense Tracker</h1>
                </div>
                <div>
                    <GrossProfit profit={1000} />
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
