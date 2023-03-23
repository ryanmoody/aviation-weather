import { Card, Subtitle, Text } from '@tremor/react';

const StationInformation = ({ isLoading, data, stationCode }) => {
  const city = data?.data?.data[0]?.city;
  const state = data?.data?.data[0]?.state?.name;
  const name = data?.data?.data[0]?.name;
  const lat = data?.data?.data[0]?.latitude?.degrees;
  const long = data?.data?.data[0]?.longitude?.degrees;

  return (
    <section className="flex gap-10">
      <div className="flex flex-col">
        <Subtitle>ICAO</Subtitle>
        <Text className="text-lg font-bold">
          {isLoading ? '---' : stationCode.toUpperCase()}
        </Text>
      </div>
      <div className="flex flex-col">
        <Subtitle>Station Name</Subtitle>
        <Text className="text-lg font-bold">{isLoading ? '---' : name}</Text>
      </div>
      <div className="flex flex-col">
        <Subtitle>City</Subtitle>
        <Text className="text-lg font-bold">{isLoading ? '---' : city}</Text>
      </div>
      <div className="flex flex-col">
        <Subtitle>State</Subtitle>
        <Text className="text-lg font-bold">{isLoading ? '---' : state}</Text>
      </div>
      <div className="flex flex-col">
        <Subtitle>Latitude</Subtitle>
        <Text className="text-lg font-bold">{isLoading ? '---' : lat}</Text>
      </div>
      <div className="flex flex-col">
        <Subtitle>Longitude</Subtitle>
        <Text className="text-lg font-bold">{isLoading ? '---' : long}</Text>
      </div>
    </section>
  );
};

export default StationInformation;
