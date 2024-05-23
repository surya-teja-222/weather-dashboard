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
    if (!currentLocation) {
      return [];
    }

    const options = [
      currentLocation,
      ...store?.searchOptions || [],
    ];

    const opts = options.map((option) => ({
      value: option,
      label: option.LocalizedName,
    }));

    return opts.filter((option, index, self) => self.findIndex((t) => t.value.Key === option.value.Key) === index);
  },
);
