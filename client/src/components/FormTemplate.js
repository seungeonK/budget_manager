import React, { useState } from 'react'
import { createTransaction } from '../axios/axios';

import { TextField, Button, Stack } from '@mui/material';
//formName = Add Revenue, Edit Revenue, Add Expense, Delete Expense
const FormTemplate = ({ formName, formType }) => {
    const [transaction, setTransaction] = useState({
        type: formType, name: '', amount: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        createTransaction(transaction);
    };

    return (
        <div>
            <Stack spacing={2}>
                <div><h1>{formName}</h1></div>
                <div>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            required
                            margin="dense"
                            onChange={e => setTransaction({...transaction, name: e.target.value})}
                        />
                        <TextField
                            label="Amount"
                            variant="outlined"
                            fullWidth
                            required
                            margin="dense"
                            onChange={e => setTransaction({...transaction, amount: e.target.value})}
                        />
                    <Button type="submit" variant="contained">{formName}</Button>
                    </form>
                </div>
            </Stack>
        </div>
    )
}

export default FormTemplate
