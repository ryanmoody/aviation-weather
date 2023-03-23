import { createContext, useState } from 'react';

const initialValue = {
  stationCode: '',
};

export const DashboardContext = createContext(initialValue);

export const DashboardProvider = ({ children }) => {
  const [stationCode, setStationCode] = useState('');

  const value = {
    stationCode,
    setStationCode,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
