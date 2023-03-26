import axios from 'axios';
import { API_KEY, BASE_URL } from '../constants';

export const getObservationData = ({ queryKey }) => {
  const [_key, { decoded, stationCode }] = queryKey;

  const result = axios
    .get(`${BASE_URL}/metar/${stationCode}${decoded ? '/decoded' : ''}`, {
      headers: {
        'X-API-Key': API_KEY,
      },
    })
    .then((response) => response.data)
    .then((data) => data)
    .catch((error) => console.log(error));

  return result;
};

export const getForecastData = ({ queryKey }) => {
  const [_key, { decoded, stationCode }] = queryKey;

  const result = axios
    .get(`${BASE_URL}/taf/${stationCode}${decoded ? '/decoded' : ''}`, {
      headers: {
        'X-API-Key': API_KEY,
      },
    })
    .then((response) => response.data)
    .then((data) => data)
    .catch((error) => console.log(error));

  return result;
};
