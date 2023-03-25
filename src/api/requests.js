import axios from 'axios';
import { API_KEY, BASE_URL } from '../constants';

export const getObservationData = ({ queryKey }) => {
  const [_key, { decoded, stationCode }] = queryKey;

  return axios.get(
    `${BASE_URL}/metar/${stationCode}${decoded ? '/decoded' : ''}`,
    {
      headers: {
        'X-API-Key': API_KEY,
      },
    }
  );
};

export const getForecastData = ({ queryKey }) => {
  const [_key, { decoded, stationCode }] = queryKey;

  return axios.get(
    `${BASE_URL}/taf/${stationCode}${decoded ? '/decoded' : ''}`,
    {
      headers: {
        'X-API-Key': API_KEY,
      },
    }
  );
};
