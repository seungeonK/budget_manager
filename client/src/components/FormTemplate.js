import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Stack } from '@mui/material';

import { createTransaction } from '../axios/axios';


//formName = Add Revenue, Edit Revenue, Add Expense, Delete Expense
const FormTemplate = ({ formName, formType }) => {

    const [transaction, setTransaction] = useState({
        type: formType, name: '', amount: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createTransaction(transaction);
        navigate('/');
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
