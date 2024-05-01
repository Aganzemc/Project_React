// MyContext.js
import React from 'react';

const MyContext = React.createContext();

export const MyContextProvider = ({ children }) => {
  const basename = 'default'; // Définissez la valeur par défaut pour basename
  return <MyContext.Provider value={{ basename }}>{children}</MyContext.Provider>;
};

export default MyContext;
