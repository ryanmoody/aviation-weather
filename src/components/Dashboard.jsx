import { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Grid, Title } from '@tremor/react';
import { DashboardContext } from '../context/DashboardContext';
import { getObservationData, getForecastData } from '../api/requests';
import SingleMetric from './cards/SingleMetric';
import Forecast from './Forecast';
import Observation from './Observation';
import Station from './Station';

const Dashboard = () => {
  const { stationCode } = useContext(DashboardContext);

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

  const handleSubmit = () => {
    fetchObservation();
    fetchForecast();
  };

  useEffect(() => {
    if (stationCode) {
      handleSubmit();
    }
  }, [stationCode]);

  const observation = observationData?.data?.data[0];
  const forecast = forecastData?.data?.data[0];

  const temperature = observation?.temperature?.celsius;
  const flightCategory = observation?.flight_category;
  const humidity = observation?.humidity?.percent;
  const visibility = observation?.visibility?.miles;

  return (
    <div className="container mx-auto flex flex-col">
      <div className="mb-10 flex flex-row items-end justify-between gap-10">
        <Station
          isLoading={isObservationLoading}
          data={observation}
          stationCode={stationCode}
        />
      </div>

      <Title className="mb-4">Current Conditions</Title>
      <Grid className="mb-10 gap-4" numCols={1} numColsLg={4}>
        <SingleMetric title="Flight Rules" metric={flightCategory} />
        <SingleMetric title={`Temperature (\u00B0C)`} metric={temperature} />
        <SingleMetric title={`Humidity (%)`} metric={humidity} />
        <SingleMetric title={`Visibility (Miles)`} metric={visibility} />
      </Grid>

      <Title className="mb-4">METAR</Title>
      <Observation isLoading={isObservationLoading} observation={observation} />

      <Title className="mb-4">TAF</Title>
      <Forecast isLoading={isForecastLoading} forecast={forecast} />
    </div>
  );
};

export default Dashboard;
