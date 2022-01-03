import React from 'react'

import { TextField, Button, Stack } from '@mui/material';
//formName = Add Revenue, Edit Revenue, Add Expense, Delete Expense
const FormTemplate = ({ formName }) => {
    return (
        <div>
            <Stack spacing={2}>
                <div><h1>{formName}</h1></div>
                <div>
                    <form noValidate autoComplete="off">
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            required
                            margin="dense"
                        />
                        <TextField
                            label="Amount"
                            variant="outlined"
                            fullWidth
                            required
                            margin="dense"
                        />
                    </form>
                </div>
                <div><Button variant="contained">{formName}</Button></div>
            </Stack>
        </div>
    )
}

export default FormTemplate
