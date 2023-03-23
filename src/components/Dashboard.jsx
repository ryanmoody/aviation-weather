import { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Col, Grid, Title } from '@tremor/react';
import Forecast from './Forecast';
import Observation from './Observation';
import SingleMetric from './cards/SingleMetric';
import StationInformation from './StationInformation';
import StationForm from './forms/StationForm';
import { DashboardContext } from '../context/DashboardContext';
import { getStationData, getMetarData, getTafData } from '../api/queries';

const Dashboard = () => {
  const { stationCode } = useContext(DashboardContext);

  const {
    data: stationData,
    isLoading: isStationDataLoading,
    refetch: fetchStationData,
  } = useQuery({
    queryKey: ['station', { stationCode }],
    queryFn: getStationData,
    enabled: false,
  });

  const {
    data: metarData,
    isLoading: isMetarDataLoading,
    refetch: fetchMetarData,
  } = useQuery({
    queryKey: ['metar-decoded', { stationCode }],
    queryFn: getMetarData,
    enabled: false,
  });

  const {
    data: metarDecodedData,
    isLoading: isDecodedMetarDataLoading,
    refetch: fetchDecodedMetarData,
  } = useQuery({
    queryKey: ['metar', { decoded: true, stationCode }],
    queryFn: getMetarData,
    enabled: false,
  });

  const {
    data: tafData,
    isLoading: isTafDataLoading,
    refetch: fetchTafData,
  } = useQuery({
    queryKey: ['taf', { stationCode }],
    queryFn: getTafData,
    enabled: false,
  });

  const handleSubmit = () => {
    fetchStationData();
    fetchMetarData();
    fetchDecodedMetarData();
    fetchTafData();
  };

  useEffect(() => {
    if (stationCode) {
      handleSubmit();
    }
  }, [stationCode]);

  const temperature = metarDecodedData?.data?.data[0]?.temperature?.celsius;
  const flightCategory = metarDecodedData?.data?.data[0]?.flight_category;
  const humidity = metarDecodedData?.data?.data[0]?.humidity?.percent;

  return (
    <div className="container mx-auto flex flex-col">
      <div className="mb-16 flex flex-row items-end justify-between">
        <StationForm />
        <StationInformation
          isLoading={isStationDataLoading}
          data={stationData}
          stationCode={stationCode}
        />
      </div>
      <Title className="mb-4">Current Conditions</Title>
      <Grid className="mb-10 gap-4" numCols={4}>
        <Col numColSpan={1}>
          <SingleMetric title="Flight Category" metric={flightCategory} />
        </Col>
        <SingleMetric title={`Temperature (\u00B0C)`} metric={temperature} />
        <SingleMetric title={`Humidity (%)`} metric={humidity} />
      </Grid>
      <section className="mb-10">
        <Title className="mb-4">METAR</Title>
        <Observation isLoading={isMetarDataLoading} data={metarData} />
      </section>
      <section className="mb-10">
        <Title className="mb-4">TAF</Title>
        <Forecast isLoading={isTafDataLoading} data={tafData} />
      </section>
    </div>
  );
};

export default Dashboard;
