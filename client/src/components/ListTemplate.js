import {React} from 'react'
import { Stack, Button } from '@mui/material';
import ScrollingList from './ScrollingList';

//if noEdit is true, the add, edit and delete buttons will not display
function ListTemplate({ listName, listContents, addButtonName, redirect, noEdit=true }) {
    return (
        <div>
            <Stack spacing={2}>
                <div>{listName}</div>
                <div>
                    <ScrollingList listContents={listContents} noEdit={noEdit} />
                </div>
                {!noEdit &&
                    <div>
                        <Button href={redirect} variant="contained">{addButtonName}</Button>
                    </div>
                }
            </Stack>
        </div>
    )
}

export default ListTemplate