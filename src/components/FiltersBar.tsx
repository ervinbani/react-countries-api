import React from 'react';
import { useFilters } from '../contexts/FiltersContext';

export default function FiltersBar() {
  const { region, setRegion } = useFilters();

  return (
    <div className="filters-bar">
      <div className="filter-region">
        <select
          value={region}
          aria-label="Filter by region"
          onChange={e => setRegion(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}
