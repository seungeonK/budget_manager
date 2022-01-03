import React, { createContext, useState } from "react";

const ExpensesContext = createContext();

const ExpensesProvider = ({ children }) => {
  const [Expenses, setExpenses] = useState([]);
  
  return (
    <ExpensesContext.Provider
      value={{ Expenses, setExpenses }}
    >
      {children}
    </ExpensesContext.Provider>
  ); 
};

export default ExpensesProvider;

export { ExpensesContext };