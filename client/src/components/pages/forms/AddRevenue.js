import React from 'react'
import FormTemplate from '../../FormTemplate'
import { useParams } from "react-router-dom";

const AddRevenue = () => {
    let params = useParams();
    return (
        <div>
            <div>revenueID: {params.revenueID}</div>
            <FormTemplate formName={"Add Revenue"} />
        </div>
    )
}

export default AddRevenue
