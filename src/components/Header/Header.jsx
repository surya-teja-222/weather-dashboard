import React from 'react';
import { Link } from 'react-router-dom';

import { getDateInUserTimeZone } from '../../utils/date';
import useDate from '../../hooks/useDate';

const routes = [
  {
    name: 'Dashboard',
    path: '/',
  }, {
    name: 'Developer Settings',
    path: '/settings',
  }, {
    name: 'About',
    path: '/about',
  },
];

export default function Header() {
  const date = useDate();

  return (
    <header className="bg-[#7469B6] p-6 flex justify-between h-[80px]">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-lg font-bold text-[#FFE6E6] select-none">
            Weather Insights 🚀
          </h1>
        </Link>
        <div className="p-6 flex gap-4 items-center">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="text-white text-sm hover:underline
                hover:scale-[1.1] transition-all duration-300 ease-in-out"
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
      <h1 className="text-[#FFE6E6] flex justify-center items-center">
        <span
          className="
            h-2 w-2 bg-[#37B5B6] rounded-full inline-block mr-2 animate-pulse"
        />
        <div className="w-[200px]">{getDateInUserTimeZone(date)}</div>
      </h1>
    </header>
  );
}
