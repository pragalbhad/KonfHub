import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useLoader } from './LoaderContext'; 

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { setLoading } = useLoader();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        const response = await axios.get('https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task');
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [setLoading]);

  return (
    <DataContext.Provider value={{ data, error }}>
      {children}
    </DataContext.Provider>
  );
};
