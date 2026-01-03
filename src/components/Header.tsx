import React, { useEffect, useState } from 'react'
import { useFilters } from '../contexts/FiltersContext'
import { useTheme } from '../contexts/ThemeContext'
import { useDebounce } from '../hooks/useDebounce'
import { Link } from 'react-router-dom'
import { useFavorites } from '../contexts/FavoritesContext'

export default function Header() {
  const { query, setQuery } = useFilters()
  const { toggleTheme } = useTheme()
  const { favorites } = useFavorites()
  const [value, setValue] = useState(query)
  const debounced = useDebounce(value, 300)

  useEffect(() => {
    setQuery(debounced)
  }, [debounced, setQuery])

  return (
    <header className="rc-header">
      <div className="rc-header-inner">
        <h2 className="rc-logo">React Countries</h2>
        <div className="rc-controls">
          <input
            aria-label="Search countries"
            className="rc-search"
            placeholder="Search countries..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Link to="/favorites" aria-label="Favorites" className="rc-favs">
            ❤️ {favorites.length}
          </Link>
          <button aria-label="Toggle theme" className="rc-theme-toggle" onClick={toggleTheme}>
            🌗
          </button>
        </div>
      </div>
    </header>
  )
}
