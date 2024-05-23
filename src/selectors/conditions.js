import { createSelector } from 'reselect';

const baseSelector = (state) => state.conditions;

export const conditionsSelector = createSelector(
  baseSelector,
  (state) => state.conditions,
);

export const weatherTextSelector = (id) => createSelector(
  baseSelector,
  (state) => state.conditions[id]?.WeatherText || '',
);

export const hasPrecipitationSelector = (id) => createSelector(
  baseSelector,
  (state) => state.conditions[id]?.HasPrecipitation || false,
);

export const temperatureSelector = (id) => createSelector(
  baseSelector,
  (state) => state.conditions[id]?.Temperature?.Metric?.Value || 0,
);

export const realFeelTemperatureSelector = (id) => createSelector(
  baseSelector,
  (state) => state.conditions[id]?.RealFeelTemperature?.Metric?.Value || 0,
);

export const windSpeedSelector = (id) => createSelector(
  baseSelector,
  (state) => state.conditions[id]?.Wind?.Speed?.Metric?.Value || 0,
);

export const uvIndexSelector = (id) => createSelector(
  baseSelector,
  (state) => state.conditions[id]?.UVIndex || 0,
);

export const relativeHumiditySelector = (id) => createSelector(
  baseSelector,
  (state) => state.conditions[id]?.RelativeHumidity || 0,
);

export const visibilitySelector = (id) => createSelector(
  baseSelector,
  (state) => state.conditions[id]?.Visibility?.Metric?.Value || 0,
);
