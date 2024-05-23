import React from 'react';
import Header from '../Header';
import Location from '../Location/Location';
import SelectedLocationInfo from '../SelectedLocationInfo';

function Dashboard() {
  return (
    <>
      <Header />
      <main className="h-[calc(100vh-80px)]">
        <div className="flex flex-col">
          <div className="ml-auto">
            <Location />
          </div>
          <SelectedLocationInfo />
        </div>
      </main>
    </>
  );
}

export default Dashboard;
