import React, { createContext, useState, useContext, useEffect } from "react";

import { HistoryContext } from './HistoryProvider';

const ExpensesContext = createContext();

const ExpensesProvider = ({ children }) => {
  // const { history } = useContext(HistoryContext);
  const [ expenses, setExpenses ] = useState([]);

  useEffect(() => {
    console.log('ExpensesProvider');
  }, [])

  return (
    <ExpensesContext.Provider
      value={{ expenses, setExpenses }}
    >
      {children}
    </ExpensesContext.Provider>
  ); 
};

export default ExpensesProvider;

export { ExpensesContext };