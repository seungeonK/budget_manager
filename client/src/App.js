import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RevenueContext, ExpenseContext } from './Contexts/transactionContext';
import { getTransactions } from './axios/axios';


import Home from "./components/pages/Home";
import AddExpense from './components/pages/forms/AddExpense';
import AddRevenue from './components/pages/forms/AddRevenue';
import EditExpense from './components/pages/forms/EditExpense';
import EditRevenue from './components/pages/forms/EditRevenue';

function App() {
  const [ revenues, setRevenue ] = useState([]);
  const [ expenses, setExpense ] = useState([]);


  useEffect(() => {
    getTransactions().then(res => {
      setRevenue(res.data);
    });
  // whenever 'getTransactions()' function is called, 
  // Re-render this and all of its child components
  }, [getTransactions])
  return (
    <div>
      <RevenueContext.Provider value={{ revenues, setRevenue }}>
      <ExpenseContext.Provider value={{ expenses, setExpense }}>
        <Router>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/addRevenue" element={<AddRevenue />} />
              <Route exact path="/addExpense" element={<AddExpense />} />
            <Route exact path="/editRevenue/:revenueID" element={<EditRevenue />} />
            <Route exact path="/editExpense/:expenseID" element={<EditExpense />} />
          </Routes>
        </Router>
      </ExpenseContext.Provider>
      </RevenueContext.Provider>
    </div>
  );
}

export default App;
