import React, { useEffect, useState } from 'react';
import { useFilters } from '../contexts/FiltersContext';
import { useTheme } from '../contexts/ThemeContext';
import { useDebounce } from '../hooks/useDebounce';
import { Link, useNavigate } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';

export default function Header() {
  const { query, setQuery } = useFilters();
  const { theme, toggleTheme } = useTheme();
  const { favorites } = useFavorites();
  const navigate = useNavigate();
  const [value, setValue] = useState(query);
  const debounced = useDebounce(value, 300);

  useEffect(() => {
    setQuery(debounced);
  }, [debounced, setQuery]);

  const handleClearSearch = () => {
    setValue('');
    setQuery('');
    navigate('/');
  };

  return (
    <header className="rc-header">
      <div className="rc-header-inner">
        <Link to="/" className="rc-logo" style={{ textDecoration: 'none', color: 'inherit' }}>
          Where in the world?
        </Link>
        <div className="rc-controls">
          <div className="rc-search-wrapper">
            <input
              aria-label="Search countries"
              className="rc-search"
              placeholder="Search for a country..."
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            {value && (
              <button
                aria-label="Clear search"
                className="rc-search-clear"
                onClick={handleClearSearch}
              >
                ✕
              </button>
            )}
          </div>
          <button aria-label="Toggle theme" className="rc-theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </header>
  );
}
