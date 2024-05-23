const BASE_URL = 'https://api.weatherapi.com/v1/search.json';

async function getLocationsByQuery(query, apiKey) {
  const response = await fetch(`${BASE_URL}?key=${apiKey}&q=${query}`);
  if (!response.ok) {
    throw new Error('Failed to get IP address');
  }

  return response;
}

async function getIpAddr() {
  const response = await fetch('https://api.ipify.org?format=json');

  if (!response.ok) {
    throw new Error('Failed to get IP address');
  }

  return response;
}

export default {
  getLocationsByQuery,
  getIpAddr,
};
