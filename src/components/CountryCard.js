import React from 'react';
import './CountryCard.css';

const CountryCard = ({ name, flag }) => {
  return (
    <div className="country-card">
      {flag ? (
        <img src={flag} alt={`${name} flag`} className="country-flag" />
      ) : (
        null // Do not render the img tag if the flag is invalid
      )}
      <h2 className="country-name">{name || 'Unknown'}</h2>
    </div>
  );
};

export default CountryCard;

