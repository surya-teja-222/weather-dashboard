const BASE_URL = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete';

async function getLocationsByQuery(query, apiKey) {
  const response = await fetch(`${BASE_URL}?apikey=${apiKey}&q=${query}`);
  if (!response.ok) {
    throw new Error('Failed to get IP address');
  }

  return response;
}

async function getIpAddr() {
  const response = await fetch(
    'http://ipinfo.io',
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );

  if (!response.ok) {
    throw new Error('Failed to get IP address');
  }

  return response;
}

async function getNearByLocations(locationKey, apiKey) {
  const response = await fetch(
    `https://dataservice.accuweather.com/locations/v1/cities/neighbors/${locationKey}?apikey=${apiKey}`,
  );

  if (!response.ok) {
    throw new Error('Failed to get IP address');
  }

  return response;
}

export default {
  getLocationsByQuery,
  getIpAddr,
  getNearByLocations,
};
