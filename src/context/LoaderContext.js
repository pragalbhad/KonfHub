import React, { createContext, useContext, useState } from 'react';
import Loader from '../component/Loader';

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading && <Loader />} 
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
