import React from 'react';
import Header from '../Header';
import Location from '../Location/Location';

function Dashboard() {
  return (
    <>
      <Header />
      <main className="h-[calc(100vh-80px)]">
        <Location />
      </main>
    </>
  );
}

export default Dashboard;
