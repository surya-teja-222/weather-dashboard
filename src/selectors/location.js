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

export const searchOptionsSelector = createSelector(
  baseSelector,
  locationSelector,
  (store, currentLocation) => {
    const options = [
      ...store?.searchOptions || [],
    ];
    if (currentLocation) {
      options.unshift(currentLocation);
    }

    return options.map((option) => ({
      value: option,
      label: option.LocalizedName,
    }));
  },
);
