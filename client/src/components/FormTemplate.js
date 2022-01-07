import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Stack, Card } from '@mui/material';

import { createTransaction } from '../axios/axios';

import Title from '../components/Title'
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
                <div><Title>{formName}</Title></div>
                <div>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Card
                            variant="outlined"
                            sx={{
                                bgcolor: 'secondary.main',
                                p: 3,
                                mb: 3
                            }}
                        >
                            <TextField
                                onChange={e => setTransaction({ ...transaction, name: e.target.value })}
                                label="Name"
                                variant="outlined"
                                fullWidth
                                required
                                margin="dense"
                                sx={{
                                    bgcolor: "white",
                                    borderRadius: 1
                                }}
                            />
                            <TextField
                                onChange={e => setTransaction({ ...transaction, amount: e.target.value })}
                                label="Amount"
                                variant="outlined"
                                fullWidth
                                required
                                margin="dense"
                                sx={{
                                    bgcolor: "white",
                                    borderRadius: 1,
                                    mb: 5
                                }}
                            />
                            <Stack
                                direction="row"
                                spacing={2}
                                sx={{
                                    justifyContent: "center"
                                }}
                            >
                                <Button
                                    type="submit"
                                    variant="contained"
                                >
                                    {formName}
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => { navigate("/") }}
                                >
                                    Cancel
                                </Button>
                            </Stack>
                        </Card>
                    </form>
                </div>
            </Stack>
        </div>
    )
}

export default FormTemplate
