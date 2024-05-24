import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchForecast } from '../../stores/forecast';
import {
  isForecastPresentSelector, rainProbSelector, realFeelTempSelector, relativeHumiditySelector, sunRiseSetSelector,
} from '../../selectors/forecast';
import DatePicker from '../DatePicker';
import locationIcon from '../../assets/location-w.svg';
import SunriseIcon from '../../assets/sunrise.svg';
import SunsetIcon from '../../assets/sunset.svg';
import TempIcon from '../../assets/weather_therometer.svg';
import RainIcon from '../../assets/rain.svg';
import HumidityIcon from '../../assets/humidity.svg';
import Card from '../Card/Card';
import { toHHmm } from '../../utils/date';
import Stories from '../Stories';

export default function SelectedTabContent({
  tabIndex, location, nearByLocations,
}) {
  const dispatch = useDispatch();
  const isOpen = tabIndex === nearByLocations.indexOf(location);
  const forecastForDateExist = useSelector(isForecastPresentSelector(
    location?.Key,
  ));
  const sunRiseSet = useSelector(sunRiseSetSelector(location?.Key));
  const realFeelTemp = useSelector(realFeelTempSelector(location?.Key));
  const rainProb = useSelector(rainProbSelector(location?.Key));
  const relativeHumidity = useSelector(relativeHumiditySelector(location?.Key));

  useEffect(() => {
    if (isOpen && location.Key && !forecastForDateExist) {
      dispatch(fetchForecast(location.Key));
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

        <div className="flex justify-center w-[80vw] gap-4">
          <div className="flex p-4 bg-[#9AC8CD] rounded-3xl gap-3 items-center justify-center w-[60%] flex-wrap">
            {sunRiseSet && (
              <>
                <Card
                  title="Sunrise"
                  value={toHHmm(sunRiseSet.sunrise)}
                  icon={SunriseIcon}
                  cardColor="#FFC470"
                />
                <Card
                  title="SunSet"
                  value={toHHmm(sunRiseSet.sunset)}
                  icon={SunsetIcon}
                  cardColor="#5AB2FF"
                />
              </>
            )}
            {realFeelTemp && (
              <Card
                title="Real Feel"
                value={`${realFeelTemp.min}°/${realFeelTemp.max}°`}
                icon={TempIcon}
                cardColor="#94FFD8"
              />
            )}
            {rainProb && (
              <Card
                title="Rain Probability"
                value={`${rainProb}%`}
                icon={RainIcon}
                cardColor="#E5DDC5"
              />
            )}
            {relativeHumidity && (
              <Card
                title="Humidity"
                value={`${relativeHumidity}%`}
                icon={HumidityIcon}
                cardColor="#41C9E2"
              />
            )}
          </div>
          <Stories k={location.Key} />
        </div>
      </div>
    );
  }

  return null;
}
