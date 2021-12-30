import React from 'react'
import { Stack, Button } from '@mui/material';
import ScrollingList from './ScrollingList';

function ListTemplate({ listName, listContents, addButtonName }) {
    return (
        <div>
            <Stack spacing={2}>
                <div>{listName}</div>
                <div>
                    <ScrollingList listContents={listContents} />
                </div>
                <div>
                    <Button variant="contained">{addButtonName}</Button>
                </div>
            </Stack>
        </div>
    )
}

export default ListTemplate
