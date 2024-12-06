import React, { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';
import './CountriesPage.css';

const CountriesPage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        const countryData = data.map((country) => ({
          name: country.name?.common || 'Unknown',
          flag: country.flags?.png || null, // Set to null if no valid flag exists
        }));
        setCountries(countryData);
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  return (
    <div className="countries-page">
      <h1>Countries</h1>
      <div className="countries-grid">
        {countries.map((country, index) => (
          <CountryCard key={index} name={country.name} flag={country.flag} />
        ))}
      </div>
    </div>
  );
};

export default CountriesPage;
