import { createSelector } from 'reselect';

const baseSelector = (state) => state.location;

export const ipAddrSelector = createSelector(
  baseSelector,
  (state) => state.ipAddr,
);

export const locationSelector = createSelector(
  baseSelector,
  (state) => state.location,
);
