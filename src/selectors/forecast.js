import { createSelector } from 'reselect';
import { isSameDay } from '../utils/date';

const baseSelector = (state) => state.forecast;

export const dateSelector = createSelector(
  baseSelector,
  (forecast) => forecast.date,
);

export const isForecastPresentSelector = (key) => createSelector(
  baseSelector,
  dateSelector,
  (forecast, date) => {
    const forcastForLocation = forecast.data[key];

    const forecastForDate = forcastForLocation?.DailyForecasts?.find(
      (f) => {
        const apiDate = new Date(f.Date);
        const userDate = new Date(date);
        return isSameDay(apiDate, userDate);
      },
    );
    return forecastForDate;
  },
);

export const sunRiseSetSelector = (key) => createSelector(
  isForecastPresentSelector(key),
  (forecast) => {
    if (!forecast) return null;

    return {
      sunrise: forecast.Sun?.Rise,
      sunset: forecast.Sun?.Set,
    };
  },
);

export const realFeelTempSelector = (key) => createSelector(
  isForecastPresentSelector(key),
  (forecast) => {
    if (!forecast) return null;

    return {
      min: forecast.RealFeelTemperature.Minimum.Value,
      max: forecast.RealFeelTemperature.Maximum.Value,
    };
  },
);

export const rainProbSelector = (key) => createSelector(
  isForecastPresentSelector(key),
  (forecast) => {
    if (!forecast) return null;

    return forecast.Day?.RainProbability;
  },
);

export const relativeHumiditySelector = (key) => createSelector(
  isForecastPresentSelector(key),
  (forecast) => {
    if (!forecast) return null;

    return forecast.Day?.RelativeHumidity?.Average;
  },
);

export const storiesInfoSelector = (key) => createSelector(
  isForecastPresentSelector(key),
  (forecast) => {
    if (!forecast) return [];

    return forecast?.AirAndPollen || [];
  },
);
