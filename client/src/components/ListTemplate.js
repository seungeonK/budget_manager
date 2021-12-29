import React from 'react'
import { Stack } from '@mui/material';
import VirtualizedList from '../VirtualizedList';

function ListTemplate({listName, listContents}) {
    return (
        <div>
            <Stack spacing={2}>
                <div>{listName}</div>
                <VirtualizedList></VirtualizedList>
            </Stack>
        </div>
    )
}

export default ListTemplate
