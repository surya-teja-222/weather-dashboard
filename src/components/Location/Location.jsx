import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import {
  searchLocations, setIpAddress, setLocationFromIp, updateLocation,
} from '../../stores/location';
import { ipAddrSelector, searchOptionsSelector } from '../../selectors/location';
import locationIcon from '../../assets/location.svg';

const DEBOUNCE_TIMEOUT = 1000;

function Location() {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(null);
  const debounceTimeoutRef = useRef(null);

  const dispatch = useDispatch();
  const currentIpAddress = useSelector(ipAddrSelector);
  const options = useSelector(searchOptionsSelector);

  useEffect(() => {
    dispatch(setIpAddress());
  }, [dispatch]);

  useEffect(() => {
    if (currentIpAddress) {
      dispatch(setLocationFromIp());
    }
  }, [currentIpAddress, dispatch]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(searchLocations(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm, dispatch]);

  const handleInputChange = useCallback((value) => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      setDebouncedSearchTerm(value);
    }, DEBOUNCE_TIMEOUT);
  }, []);

  const handleSelect = useCallback((selectedOption) => {
    dispatch(updateLocation(selectedOption.value));
  }, [dispatch]);

  return (
    <div className="flex px-3 py-1 m-3 items-center border-stone-100 border-2 w-fit rounded-lg">
      <img src={locationIcon} alt="location" className="w-5 h-5" />
      <Select
        options={options}
        value={options[0]}
        className="w-[300px] text-sm ml-2"
        isSearchable
        onInputChange={handleInputChange}
        onChange={handleSelect}
      />
    </div>
  );
}

export default Location;
