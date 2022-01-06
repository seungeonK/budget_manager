import React from 'react'
import { Typography, Card } from '@mui/material';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const GrossProfit = ({ profit }) => {
    return (
        <div>
            <Card variant="outlined" sx={{p:6}}>
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                >
                    <MonetizationOnIcon fontSize="large"/>
                </Typography>
                <Typography
                    variant="h6"
                    component="h2"
                    align="center"
                >
                    {"Gross Profit".toUpperCase()}
                </Typography>
                <Typography
                    variant="h4"
                    component="h3"
                    align="center"
                >
                    ${profit}
                </Typography>
            </Card>
        </div>
    )
}

export default GrossProfit
