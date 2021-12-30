import React from 'react'
import FormTemplate from '../../FormTemplate'
import { useParams } from "react-router-dom";

const AddExpense = () => {
    //this uses the :expenseID parameter from the routing URL
    let params = useParams();
    return (
        <div>
            <div>expenseID: {params.expenseID}</div>
            <FormTemplate formName={"Add Expense"} />
        </div>
    )
}

export default AddExpense
