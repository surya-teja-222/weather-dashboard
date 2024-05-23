import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toast';
import store from '../stores';

export default function ProviderWrapper({ children }) {
  return (
    <Provider store={store}>
      {children}
      <ToastContainer />
    </Provider>
  );
}
