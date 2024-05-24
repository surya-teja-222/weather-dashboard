import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { locationSelector, nearbyLocationsSelector } from '../../selectors/location';
import { fetchNearByLocations } from '../../stores/location';
import SelectedTabContent from '../SelectedTabContent';

export default function NearByLocationTabs() {
  const [tabIndex, setTabIndex] = useState(0);

  const dispatch = useDispatch();
  const location = useSelector(locationSelector);
  const nearByLocations = useSelector(nearbyLocationsSelector);

  useEffect(() => {
    if (location && !nearByLocations.length) {
      dispatch(fetchNearByLocations());
    }
  }, [dispatch, location, nearByLocations]);

  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
      className="w-[60vw]"
    >
      <TabList>
        {nearByLocations?.slice(0, 5).map((loc) => (
          <Tab key={loc.Key}>{loc.LocalizedName}</Tab>
        ))}
      </TabList>
      {nearByLocations?.slice(0, 5).map((loc) => (
        <TabPanel key={loc.Key}>
          <SelectedTabContent
            tabIndex={tabIndex}
            location={loc}
            nearByLocations={nearByLocations}
          />
        </TabPanel>
      ))}
    </Tabs>
  );
}
