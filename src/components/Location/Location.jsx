import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIpAddress, setLocationFromIp } from '../../stores/location';
import { ipAddrSelector, locationSelector } from '../../selectors/location';

function Location() {
  const dispatch = useDispatch();
  const currentIpAddress = useSelector(ipAddrSelector);
  const location = useSelector(locationSelector);

  useEffect(() => {
    dispatch(setIpAddress());
  }, [dispatch]);

  useEffect(() => {
    if (currentIpAddress) {
      dispatch(setLocationFromIp());
    }
  }, [currentIpAddress, dispatch]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>User Location</h1>
      <p>{location.name}</p>
    </div>
  );
}

export default Location;
