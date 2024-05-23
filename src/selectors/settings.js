import { createSelector } from 'reselect';

const baseSelector = (state) => state.settings;

export const apiKeySelector = createSelector(
  baseSelector,
  (settings) => settings.apiKey,
);
