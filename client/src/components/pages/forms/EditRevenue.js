import React from 'react'
import FormTemplate from '../../FormTemplate'
import { useParams } from "react-router-dom";

const EditRevenue = () => {
    let params = useParams();
    return (
        <div>
            <div>revenueID: {params.revenueID}</div>
            <FormTemplate formName={"Edit Revenue"} />
        </div>
    )
}

export default EditRevenue
