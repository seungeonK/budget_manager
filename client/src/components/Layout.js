import React from 'react'

import { Box } from '@mui/material'

const Layout = ({ children }) => {
    return (
        <Box sx={{ 
            p: 2, 
            m: 0
        }}>
            {children}
        </Box>
    )
}

export default Layout
