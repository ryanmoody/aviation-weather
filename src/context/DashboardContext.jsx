import { createContext, useState } from 'react';

const initialValue = {
  stationCode: '',
};

export const DashboardContext = createContext(initialValue);

export const DashboardProvider = ({ children }) => {
  const [stationCode, setStationCode] = useState('');

  return (
    <DashboardContext.Provider value={{ stationCode, setStationCode }}>
      {children}
    </DashboardContext.Provider>
  );
};
