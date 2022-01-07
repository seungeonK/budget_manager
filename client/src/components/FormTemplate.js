import React from 'react'
import { useNavigate } from "react-router-dom";

import { TextField, Button, Stack, Card } from '@mui/material';
import Title from '../components/Title'
//formName = Add Revenue, Edit Revenue, Add Expense, Delete Expense
const FormTemplate = ({ formName }) => {
    const navigate = useNavigate()
    return (
        <div>
            <Stack spacing={2}>
                <div><Title>{formName}</Title></div>
                <div>
                    <form noValidate autoComplete="off">
                        <Card
                            variant="outlined"
                            sx={{
                                bgcolor: 'secondary.main',
                                p: 3,
                                mb: 3
                            }}
                        >
                            <TextField
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
