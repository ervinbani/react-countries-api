import React from 'react';
import { Country } from '../types/Country';
import { Link } from 'react-router-dom';

export default function CountryCard({ country }: { country: Country }) {
  return (
    <Link
      to={`/country/${country.cca3}`}
      className="country-card"
      aria-label={`View ${country.name.common}`}
    >
      <div className="country-flag">
        {country.flags?.png ? (
          <img loading="lazy" src={country.flags.png} alt={`Flag of ${country.name.common}`} />
        ) : null}
      </div>
      <div className="country-info">
        <h3>{country.name.common}</h3>
        <p>
          <strong>Population:</strong> {country.population?.toLocaleString() ?? '—'}
        </p>
        <p>
          <strong>Region:</strong> {country.region ?? '—'}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital ? country.capital.join(', ') : '—'}
        </p>
      </div>
    </Link>
  );
}
