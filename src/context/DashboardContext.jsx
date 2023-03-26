import { createContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getForecastData, getObservationData } from '../api/requests';

const initialValue = {
  stationCode: '',
};

export const DashboardContext = createContext(initialValue);

export const DashboardProvider = ({ children }) => {
  const [stationCode, setStationCode] = useState('');

  const {
    data: observationData,
    isLoading: isObservationLoading,
    refetch: fetchObservation,
  } = useQuery({
    queryKey: ['observation', { decoded: true, stationCode }],
    queryFn: getObservationData,
    enabled: false,
  });

  const {
    data: forecastData,
    isLoading: isForecastLoading,
    refetch: fetchForecast,
  } = useQuery({
    queryKey: ['forecast', { decoded: true, stationCode }],
    queryFn: getForecastData,
    enabled: false,
  });

  useEffect(() => {
    if (stationCode) {
      fetchObservation();
      fetchForecast();
    }
  }, [stationCode]);

  return (
    <DashboardContext.Provider
      value={{
        isForecastLoading,
        isObservationLoading,
        forecastData,
        observationData,
        stationCode,
        setStationCode,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
