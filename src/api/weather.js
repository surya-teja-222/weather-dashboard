async function getCurrentConditions(id, key) {
  const response = await fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}&details=true`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response;
}

export default {
  getCurrentConditions,
};
