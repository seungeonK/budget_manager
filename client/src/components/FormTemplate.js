import React from 'react'

import { TextField, Button, Stack } from '@mui/material';
//formName = Add Revenue, Edit Revenue, Add Expense, Delete Expense
const FormTemplate = ({ formName }) => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);
    }
    return (
        <div>
            <Stack spacing={2}>
                <div><h1>{formName}</h1></div>
                <div>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <TextField
                            onChange={e=>console.log(e.target.value)}
                            label="Name"
                            variant="outlined"
                            fullWidth
                            required
                            margin="dense"
                        />
                        <TextField
                            onChange={e=>console.log(e.target.value)}
                            label="Amount"
                            variant="outlined"
                            fullWidth
                            required
                            margin="dense"
                        />
                        <Button type="submit" variant="contained">{formName}</Button>
                    </form>
                </div>
            </Stack>
        </div>
    )
}

export default FormTemplate
