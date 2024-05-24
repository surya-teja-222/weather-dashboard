import { toast } from 'react-toast';
import forecastApi from '../api/forecast';

const BASE_NAME = 'forecast';
const FETCH_FORECAST = `${BASE_NAME}/FETCH_FORECAST`;
const SET_DATE = `${BASE_NAME}/SET_DATE`;

const initialState = {
  data: {},
  date: new Date(),
  // data is locationKey: 10 days forecast
};

export function setDate(date) {
  return {
    type: SET_DATE,
    payload: date,
  };
}

export function fetchForecast(locationKey) {
  return async (dispatch, getState) => {
    if (!locationKey) {
      return;
    }

    const { forecast } = getState();
    const { apiKey } = getState().settings;
    if (forecast.data[locationKey]) {
      return;
    }

    try {
      const json = await forecastApi.fetch10DayForecast(locationKey, apiKey);
      const data = await json.json();
      dispatch({
        type: FETCH_FORECAST,
        payload: {
          locationKey,
          forecast: data,
        },
      });
    } catch (error) {
      toast.error('Failed to fetch forecast, Try again later');
    }
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FORECAST: {
      const { locationKey, forecast } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [locationKey]: forecast,
        },
      };
    }
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
}
