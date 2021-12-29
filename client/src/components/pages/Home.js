import React from 'react'
import { Button, Stack} from '@mui/material';
import VirtualizedList from '../VirtualizedList';

const Home = () => {
    return (
        <div>
            <Stack spacing={2}>
                <div>Expense Tracker</div>
                <div><Button variant="contained">Hello World</Button></div>
                <div><VirtualizedList></VirtualizedList></div>
            </Stack>
        </div>
    )
}

export default Home
