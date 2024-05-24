import { createSelector } from 'reselect';
import { isSameDay } from '../utils/date';

const baseSelector = (state) => state.forecast;

export const isForecastPresentSelector = (key) => createSelector(
  baseSelector,
  (forecast) => {
    const forcastForLocation = forecast.data[key];
    const { date } = forecast;

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

export const dateSelector = createSelector(
  baseSelector,
  (forecast) => forecast.date,
);
