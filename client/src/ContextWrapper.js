import React, { Fragment } from 'react'
import RevenuesProvider from './context/RevenuesProvider'
import ExpensesProvider from './context/ExpensesProvider'
import HistoryProvider from './context/HistoryProvider'

const ContextWrapper = ({ children }) => {
    return (
        <Fragment>
            <HistoryProvider>
                <RevenuesProvider>
                    <ExpensesProvider>
                        {children}
                    </ExpensesProvider>
                </RevenuesProvider>
            </HistoryProvider>
        </Fragment>
    )
}

export default ContextWrapper