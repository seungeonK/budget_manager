import React from 'react'
import FormTemplate from '../../FormTemplate'
import { useParams } from "react-router-dom";

const EditExpense = () => {
    let params = useParams();
    return (
        <div>
            <div>expenseID: {params.expenseID}</div>
            <FormTemplate formName={"Edit Expense"} />
        </div>
    )
}

export default EditExpense
