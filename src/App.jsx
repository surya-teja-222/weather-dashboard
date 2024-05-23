import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  }, {
    path: '/settings',
    element: <Settings />,
  }, {
    path: '/about',
    element: <h1>About</h1>,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
