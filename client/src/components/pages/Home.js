import React from 'react'
import { Stack } from '@mui/material';
import Revenues from '../Revenues';
import Expenses from '../Expenses';


const Home = () => {
    return (
        <div>
            <Stack spacing={2}>
                <div>
                    <h1>Expense Tracker</h1>
                </div>
                <Stack direction="row" spacing={2}>
                    <div><Revenues /></div>
                    <div><Expenses /></div>
                </Stack>
            </Stack>
        </div>
    )
}

export default Home
