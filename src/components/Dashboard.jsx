import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Button,
  Card,
  Col,
  Grid,
  Metric,
  Subtitle,
  TextInput,
  Title,
} from '@tremor/react';
import StationInformation from './StationInformation';
import Observation from './Observation';
import Forecast from './Forecast';
import { getStationData, getMetarData, getTafData } from '../api/queries';

const Dashboard = () => {
  const [stationCode, setStationCode] = useState('');

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
    isLoading: isMetarDecodedDataLoading,
    refetch: fetchMetarDecodedData,
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

  const handleStationSearch = () => {
    fetchStationData();
    fetchMetarData();
    fetchMetarDecodedData();
    fetchTafData();
  };

  const temperature = metarDecodedData?.data?.data[0]?.temperature?.celsius;
  const temperatureText = temperature
    ? `${temperature} \u00B0C`
    : '--- \u00B0C';

  const flightCategory = metarDecodedData?.data?.data[0]?.flight_category;
  const flightCategoryText = flightCategory ? `${flightCategory}` : '---';

  return (
    <div className="container mx-auto flex flex-col">
      <div className="mb-16 flex flex-row items-end justify-between">
        <div className="flex flex-col gap-2">
          <Subtitle>Station Code</Subtitle>
          <div className="flex gap-2">
            <TextInput
              onChange={(e) => setStationCode(e.target.value)}
              value={stationCode}
            />
            <Button
              color="black"
              disabled={!stationCode}
              onClick={handleStationSearch}
            >
              Submit
            </Button>
          </div>
        </div>
        <StationInformation
          isLoading={isStationDataLoading}
          data={stationData}
          stationCode={stationCode}
        />
      </div>

      <Title className="mb-4">Current Conditions</Title>
      <Grid className="mb-10 gap-4" numCols={4}>
        <Col numColSpan={1}>
          <Card className="flex flex-col gap-4">
            <Subtitle>Flight Category</Subtitle>
            <Metric>{flightCategoryText}</Metric>
          </Card>
        </Col>
        <Card className="flex flex-col gap-4">
          <Subtitle>Temperature</Subtitle>
          <Metric>{temperatureText}</Metric>
        </Card>
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
