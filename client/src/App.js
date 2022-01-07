import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ContextWrapper from './ContextWrapper';
import Layout from './components/Layout';
import Home from "./components/pages/Home";
import AddExpense from './components/pages/forms/AddExpense';
import AddRevenue from './components/pages/forms/AddRevenue';
import EditExpense from './components/pages/forms/EditExpense';
import EditRevenue from './components/pages/forms/EditRevenue';
import { brown, indigo } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff"
    },
    secondary:{
      main: "#445280"
    },
    text: {
      primary:"#ffffff"
    },
    background: {
      default: "#232e52"
    }
  },
  typography: {
    fontFamily: 'Karla',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,

  }
});

function App() {

  return (
    <div>
      <ContextWrapper>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Router>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/addRevenue" element={<AddRevenue />} />
                <Route exact path="/addExpense" element={<AddExpense />} />
                <Route exact path="/editRevenue/:revenueID" element={<EditRevenue />} />
                <Route exact path="/editExpense/:expenseID" element={<EditExpense />} />
              </Routes>
            </Router>
          </Layout>
        </ThemeProvider>
      </ContextWrapper>
    </div>
  );
}

export default App;
