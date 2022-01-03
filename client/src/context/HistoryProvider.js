import React, { createContext, useState } from "react";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [History, setHistory] = useState([]);
  
  return (
    <HistoryContext.Provider
      value={{ History, setHistory }}
    >
      {children}
    </HistoryContext.Provider>
  ); 
};

export default HistoryProvider;

export { HistoryContext };