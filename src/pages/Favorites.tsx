import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFavorites } from '../contexts/FavoritesContext'
import ApiService from '../services/ApiService'
import { Country } from '../types/Country'

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites()
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    if (!favorites || favorites.length === 0) {
      setCountries([])
      return
    }
    setLoading(true)
    ApiService.getByCodes(favorites)
      .then((list) => mounted && setCountries(list))
      .catch(() => mounted && setCountries([]))
      .finally(() => mounted && setLoading(false))

    return () => {
      mounted = false
    }
  }, [favorites])

  if (loading) return <main className="container" role="status" aria-live="polite">Loading favorites...</main>

  return (
    <main className="container">
      <h2>Your Favorites</h2>
      {countries.length === 0 ? (
        <p>No favorites yet. Browse countries and add some.</p>
      ) : (
        <div className="cards-grid">
          {countries.map((c) => (
            <article key={c.cca3} className="card">
              <Link to={`/country/${c.cca3}`}>
                <img src={c.flags?.png || c.flags?.svg} alt={`${c.name.common} flag`} />
                <h3>{c.name.common}</h3>
              </Link>
              <button onClick={() => toggleFavorite(c.cca3)} aria-label={`Remove ${c.name.common} from favorites`}>
                Remove
              </button>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}
