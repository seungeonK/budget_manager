import { stepConnectorClasses } from "@mui/material";
import React, { useEffect, createContext, useState } from "react";

import { getTransactions } from '../axios/axios';

const HistoryContext = createContext({});

const HistoryProvider = ({ children }) => {

  const [history, setHistory] = useState([]);
  
  useEffect(() => {
    console.log('HistoryProvider');
    getTransactions().then(res => {
      setHistory(res.data);
    })
  },[]);
  
  return (
    <HistoryContext.Provider
      value={{ history, setHistory }}
    >
      {children}
    </HistoryContext.Provider>
  ); 
};

export default HistoryProvider;

export { HistoryContext };