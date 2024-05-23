import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  }, {
    path: '/settings',
    element: <h1>Settings</h1>,
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
