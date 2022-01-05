import React, { createContext, useState, useEffect } from "react";

const RevenuesContext = createContext();

const RevenuesProvider = ({ children }) => {
  const [revenues, setRevenues] = useState([]);
  useEffect(() => {
    console.log('RevenuesProvider');
  },[])

  return (
    <RevenuesContext.Provider
      value={{ revenues, setRevenues }}
    >
      {children}
    </RevenuesContext.Provider>
  ); 
};

export default RevenuesProvider;

export { RevenuesContext };