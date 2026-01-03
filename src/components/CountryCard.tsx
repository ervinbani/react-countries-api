import React from 'react'
import { Country } from '../types/Country'
import { Link } from 'react-router-dom'
import { useFavorites } from '../contexts/FavoritesContext'

export default function CountryCard({ country }: { country: Country }) {
  const { isFavorite, toggleFavorite } = useFavorites()

  return (
    <article className="country-card">
      <div className="card-top">
        <Link
          to={`/country/${country.cca3}`}
          aria-label={`View ${country.name.common}`}
          onMouseEnter={() => import('../services/ApiService').then((m) => m.default.getByCode(country.cca3))}
        >
          <div className="country-flag">
            {country.flags?.png ? <img loading="lazy" src={country.flags.png} alt={`Flag of ${country.name.common}`} /> : null}
          </div>
        </Link>
        <button
          className={`fav-btn ${isFavorite(country.cca3) ? 'fav' : ''}`}
          aria-pressed={isFavorite(country.cca3)}
          aria-label={isFavorite(country.cca3) ? `Remove ${country.name.common} from favorites` : `Add ${country.name.common} to favorites`}
          onClick={() => toggleFavorite(country.cca3)}
        >
          {isFavorite(country.cca3) ? '♥' : '♡'}
        </button>
      </div>

      <Link to={`/country/${country.cca3}`} aria-label={`View ${country.name.common}`} className="country-body-link" onMouseEnter={() => import('../services/ApiService').then((m) => m.default.getByCode(country.cca3))}>
        <div className="country-body">
          <h3>{country.name.common}</h3>
          <p>Population: {country.population?.toLocaleString() ?? '—'}</p>
          <p>Region: {country.region ?? '—'}</p>
          <p>Capital: {country.capital ? country.capital.join(', ') : '—'}</p>
        </div>
      </Link>
    </article>
  )
}
