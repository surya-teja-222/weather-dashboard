import React, { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { apiKeySelector } from '../../selectors/settings';
import { setApiKey } from '../../stores/settings';
import Header from '../Header';

export default function Settings() {
  const dispatch = useDispatch();
  const apiKey = useSelector(apiKeySelector);
  const formId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const apiKeyFromEvent = formData.get('apiKey');
    dispatch(setApiKey(apiKeyFromEvent));
  };

  return (
    <>
      <Header />
      <main className="h-[calc(100vh-80px)] flex flex-col m-auto p-6">
        <h2 className="text-2xl font-semibold text-gray-800 h-fit">Settings</h2>
        <p className="text-gray-600 mt-4">
          Did the API limit exceeded? Extend it by adding your own API key.
        </p>
        <p className="text-gray-600 mt-4">
          Your API key will be persisted for this session only.
        </p>
        {apiKey && (
          <p className="text-gray-600 mt-4">
            <strong>Current API Key:</strong>
            {apiKey.replace(/.(?=.{4})/g, '*')}
          </p>
        )}
        <form className="mt-6" onSubmit={handleSubmit}>
          <label
            className="text-gray-800"
            htmlFor={formId}
          >
            Enter your API Key
            <input
              required
              type="password"
              id={formId}
              name="apiKey"
              placeholder="Enter your API key"
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
          </label>
          <button
            type="submit"
            className="bg-[#7469B6] text-white w-full p-2 mt-4 rounded"
          >
            Save
          </button>
        </form>
      </main>
    </>
  );
}
