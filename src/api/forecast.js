async function fetch10DayForecast(locationKey, key) {
  const response = await fetch(
    `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${key}&details=true&metric=true`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch forecast');
  }
  return response;
}

export default {
  fetch10DayForecast,
};
