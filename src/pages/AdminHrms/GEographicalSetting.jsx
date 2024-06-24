import React, { useState } from 'react';
import OrganisationSetting from './OrganisationSetting';

const GeographicalSetting = () => {
  const [country, setCountry] = useState('');
  const [timezone, setTimezone] = useState('');
  const [dateFormat, setDateFormat] = useState('');
  const [currency, setCurrency] = useState('');

  // Dummy data for selects
  const countries = ['USA', 'UK', 'Canada', 'Australia'];
  const timezones = ['UTC-12', 'UTC-8', 'UTC+0', 'UTC+5'];
  const dateFormats = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/MM/DD'];
  const currencies = ['USD', 'GBP', 'CAD', 'AUD'];

  return (
    <div className='flex gap-10 ml-20'>
        <OrganisationSetting/>
    <div className="w-96 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Geographical Settings</h2>
      <div className="mb-4">
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
          Country of Origin
        </label>
        <select
          id="country"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select a country</option>
          {countries.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
          Timezone
        </label>
        <select
          id="timezone"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
        >
          <option value="">Select a timezone</option>
          {timezones.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="dateFormat" className="block text-sm font-medium text-gray-700">
          Date Format
        </label>
        <select
          id="dateFormat"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={dateFormat}
          onChange={(e) => setDateFormat(e.target.value)}
        >
          <option value="">Select a date format</option>
          {dateFormats.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
          Default Currency
        </label>
        <select
          id="currency"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="">Select a currency</option>
          {currencies.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div></div>
  );
};

export default GeographicalSetting;