import { useContext } from 'react';
import { Card, Metric, Text } from '@tremor/react';
import { DashboardContext } from '../context/DashboardContext';
import { VALUE_PLACEHOLDER } from '../constants';

const Station = ({ isLoading, data }) => {
  const { stationCode } = useContext(DashboardContext);

  const name = data?.station?.name;
  const location = data?.station?.location;

  return (
    <Card className="flex flex-col gap-6 md:flex-row md:gap-16">
      <div>
        <Text>ICAO</Text>
        <Metric className="text-lg">
          {isLoading ? VALUE_PLACEHOLDER : stationCode.toUpperCase()}
        </Metric>
      </div>
      <div>
        <Text>Station Name</Text>
        <Metric className="text-lg">
          {isLoading ? VALUE_PLACEHOLDER : name}
        </Metric>
      </div>
      <div>
        <Text>Station Location</Text>
        <Metric className="text-lg">
          {isLoading ? VALUE_PLACEHOLDER : location}
        </Metric>
      </div>
    </Card>
  );
};

export default Station;
