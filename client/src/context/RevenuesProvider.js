import React, { createContext, useState } from "react";

const RevenuesContext = createContext();

const RevenuesProvider = ({ children }) => {
  const [Revenues, setRevenues] = useState([]);
  
  return (
    <RevenuesContext.Provider
      value={{ Revenues, setRevenues }}
    >
      {children}
    </RevenuesContext.Provider>
  ); 
};

export default RevenuesProvider;

export { RevenuesContext };