import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContextWrapper from './ContextWrapper';
import Home from "./components/pages/Home";
import AddExpense from './components/pages/forms/AddExpense';
import AddRevenue from './components/pages/forms/AddRevenue';
import EditExpense from './components/pages/forms/EditExpense';
import EditRevenue from './components/pages/forms/EditRevenue';

function App() {

  return (
    <div>
      <ContextWrapper>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/addRevenue" element={<AddRevenue />} />
            <Route exact path="/addExpense" element={<AddExpense />} />
            <Route exact path="/editRevenue/:revenueID" element={<EditRevenue />} />
            <Route exact path="/editExpense/:expenseID" element={<EditExpense />} />
          </Routes>
        </Router>
      </ContextWrapper>
    </div>
  );
}

export default App;
