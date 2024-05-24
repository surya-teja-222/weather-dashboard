import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { locationSelector } from '../../selectors/location';
import { setConditions } from '../../stores/conditions';
import {
  realFeelTemperatureSelector, visibilitySelector, weatherTextSelector, windSpeedSelector,
} from '../../selectors/conditions';
import WeatherIcon from '../../assets/weather_therometer.svg';
import WindIcon from '../../assets/wind_speed.svg';
import VisibilityIcon from '../../assets/visibility.svg';

export default function SelectedLocationInfo() {
  const location = useSelector(locationSelector);
  const dispatch = useDispatch();
  const feelsLike = useSelector(realFeelTemperatureSelector(location?.Key));
  const weatherText = useSelector(weatherTextSelector(location?.Key));
  const windSpeed = useSelector(windSpeedSelector(location?.Key));
  const visibility = useSelector(visibilitySelector(location?.Key));

  useEffect(() => {
    if (location && location.Key && !feelsLike) {
      dispatch(setConditions(location.Key));
    }
  }, [dispatch, feelsLike, location]);

  if (!location) {
    return null;
  }
  return (
    <div className="flex justify-between items-center bg-[#874CCC] w-[80vw] m-auto rounded-full py-4 px-8">
      <div className="flex gap-2 text-white">
        <h1>{location.LocalizedName}</h1>
        <span>{' - '}</span>
        <p>
          {location.Country.LocalizedName}
        </p>
      </div>

      <div className="flex gap-5">
        {feelsLike && (
          <span className="flex gap-2 items-center">
            <img src={WeatherIcon} alt="weather icon" className="h-5 w-5" />
            <span className="text-white">{feelsLike}</span>
            <span className="text-white">°C</span>
            <span className="text-white">
              {' | '}
              {weatherText}
            </span>
          </span>
        )}
        {windSpeed && (
          <span className="flex gap-2 items-center">
            <img
              src={WindIcon}
              alt="wind icon"
              className="h-5 w-5"
            />
            <span className="text-white">{windSpeed}</span>
            <span className="text-white">km/h</span>
          </span>
        )}
        {visibility && (
          <span className="flex gap-2 items-center">
            <img
              src={VisibilityIcon}
              alt="visibility icon"
              className="h-5 w-5"
            />
            <span className="text-white">{visibility}</span>
            <span className="text-white">km</span>
          </span>
        )}
      </div>
    </div>
  );
}
