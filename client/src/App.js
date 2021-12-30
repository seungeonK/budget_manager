import React from 'react';
import Home from "./components/pages/Home";
//import RevenueForm from './components/pages/RevenueForm';
//import ExpenseForm from './components/pages/ExpenseForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormTemplate from "./components/FormTemplate";

function App() {
  //<Route exact path="/editRevenue/:revenueID" component={EditMenuItem} />
  //<Route exact path="/editExpense/:expenseID" component={EditRestaurant} />
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/form" element={<FormTemplate/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
