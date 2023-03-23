import axios from 'axios';
import { API_KEY, BASE_URL } from '../constants';

export const getStationData = ({ queryKey }) => {
  const [_key, { stationCode }] = queryKey;

  return axios.get(`${BASE_URL}/station/${stationCode}`, {
    headers: {
      'X-API-Key': API_KEY,
    },
  });
};

export const getMetarData = ({ queryKey }) => {
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

export const getTafData = ({ queryKey }) => {
  const [_key, { stationCode }] = queryKey;

  return axios.get(`${BASE_URL}/taf/${stationCode}`, {
    headers: {
      'X-API-Key': API_KEY,
    },
  });
};
