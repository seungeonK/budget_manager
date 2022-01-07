import React from 'react'
import { Typography } from '@mui/material'

const Title = ({ children }) => {
    return (
        <div>
            <Typography
                component="h1"
                align="center"
                sx={{
                    textTransform: "uppercase",
                    letterSpacing: "3px",
                    fontSize: "40px"
                }}
            >
                {children}
            </Typography>
        </div>
    )
}

export default Title
