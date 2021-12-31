import React, { useContext } from 'react'
import { Stack } from '@mui/material';
import { TransactionContext } from '../../Contexts/transactionContext';

import GrossProfit from '../GrossProfit';
import Revenues from '../Revenues';
import Expenses from '../Expenses';
import History from '../History';


const Home = () => {

    return (
        <div>
            <Stack spacing={4}>
                <div>
                    <h1>Expense Tracker</h1>
                </div>
                <div>
                    <GrossProfit profit={1000} />
                </div>
                <Stack direction="row" spacing={2}>
                    <div><Revenues /></div>
                    <div><Expenses /></div>
                </Stack>
                <div><History /></div>
            </Stack>
        </div>
    )
}

export default Home
