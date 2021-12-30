import React from 'react';
import Home from "./components/pages/Home";
import AddExpense from './components/pages/forms/AddExpense';
import AddRevenue from './components/pages/forms/AddRevenue';
import EditExpense from './components/pages/forms/EditExpense';
import EditRevenue from './components/pages/forms/EditRevenue';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addRevenue/:revenueID" element={<AddRevenue />} />
          <Route exact path="/addExpense/:expenseID" element={<AddExpense />} />
          <Route exact path="/editRevenue/:revenueID" element={<EditRevenue />} />
          <Route exact path="/editExpense/:expenseID" element={<EditExpense />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
