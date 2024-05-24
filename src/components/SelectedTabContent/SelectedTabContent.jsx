import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchForecast } from '../../stores/forecast';
import { isForecastPresentSelector } from '../../selectors/forecast';
import DatePicker from '../DatePicker';
import locationIcon from '../../assets/location-w.svg';

export default function SelectedTabContent({
  tabIndex, location, nearByLocations,
}) {
  const dispatch = useDispatch();
  const isOpen = tabIndex === nearByLocations.indexOf(location);
  const forecastForDateExist = useSelector(isForecastPresentSelector(
    location?.Key,
  ));

  console.log('forecastForDateExist', forecastForDateExist);

  useEffect(() => {
    if (isOpen && location.Key && !forecastForDateExist) {
      // dispatch(fetchForecast(location.Key));
    }
  }, [dispatch, forecastForDateExist, isOpen, location.Key]);

  if (isOpen) {
    return (
      <div>
        <div className="flex justify-between">
          <div className="flex items-center my-4 gap-4 text-white px-4 py-2 h-fit bg-indigo-400 rounded-full">
            <img src={locationIcon} alt="location" className="w-4 h-4" />
            <span>
              {location.LocalizedName}
              {', '}
              {location.Country.LocalizedName}
            </span>
          </div>
          <DatePicker />
        </div>
      </div>
    );
  }

  return null;
}
