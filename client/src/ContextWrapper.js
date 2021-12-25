import React, { Fragment } from 'react'

const ContextWrapper = ({ children }) => {
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default ContextWrapper